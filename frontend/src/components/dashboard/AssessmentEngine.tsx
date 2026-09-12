import { useState, useEffect } from "react";
import { Check, X, Award, HelpCircle, ArrowRight, RefreshCw, Sparkles, Trophy, Code2 } from "lucide-react";
import { UserPreferences, CohortTrackId } from "../../types";
import type { ImmersiveAssessment } from "../immersive/ImmersiveChapterViewer";
import { learningBoardsApi } from "../../services/learningBoardsApi";
import type { AssessmentAnswerEvaluation } from "../../services/learningBoardsApi";

interface AssessmentEngineProps {
  userProfile: UserPreferences;
  selectedLesson: { id: string; title: string };
  onUpdateProfile: (profile: UserPreferences) => void;
  onSubmitted?: (score: number) => void | Promise<void>;
  onMoveToOverview?: () => void;
  assessment?: ImmersiveAssessment | null;
  assessmentContext?: { courseId: string; module: number; chapter: number };
}

interface Question {
  id: number;
  question: string;
  options?: string[];
  correctOption?: number; // index of correct option
  matchingPairs?: { left: string; right: string; correctRightIndex: number }[];
  type: "multiple-choice" | "matching" | "case-study" | "code-output" | "code-challenge";
  explanation: string;
  language?: string;
  code?: string;
  expectedOutput?: string;
}

type AnswerEvaluationState = AssessmentAnswerEvaluation & {
  status: "evaluating" | "evaluated" | "error";
  error?: string;
};

function requiresAiEvaluation(question: Question) {
  return question.type === "case-study" || question.type === "code-output" || question.type === "code-challenge";
}

export default function AssessmentEngine({ userProfile, selectedLesson, onUpdateProfile, onSubmitted, onMoveToOverview, assessment, assessmentContext }: AssessmentEngineProps) {
  const activeTrackId = (userProfile.track || "frontend") as CohortTrackId;
  // Assessment progress states
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({}); // questionId -> selectedOptionIdx
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, boolean>>({}); // questionId -> isSubmitted
  const [matchingAnswers, setMatchingAnswers] = useState<Record<number, Record<number, number>>>({}); // questionId -> { leftIdx -> selectedRightIdx }
  const [caseStudyInputs, setCaseStudyInputs] = useState<Record<number, string>>({});
  const [submittedCaseStudies, setSubmittedCaseStudies] = useState<Record<number, boolean>>({});
  const [answerEvaluations, setAnswerEvaluations] = useState<Record<number, AnswerEvaluationState>>({});
  const [assessmentError, setAssessmentError] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  // Define dynamic questions depending on active track and assessment tier
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Reset assessment states on lesson/tier shift
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setMatchingAnswers({});
    setCaseStudyInputs({});
    setSubmittedCaseStudies({});
    setAnswerEvaluations({});
    setAssessmentError(null);
    setScore(null);
    setQuestions(assessment?.questions as Question[] || []);

  }, [assessment, selectedLesson, activeTrackId]);

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (submittedAnswers[qId]) return; // locked
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleMatchPair = (qId: number, leftIdx: number, rightIdx: number) => {
    setMatchingAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || {}),
        [leftIdx]: rightIdx
      }
    }));
  };

  const handleSubmitQuestion = (qId: number) => {
    setSubmittedAnswers((prev) => ({ ...prev, [qId]: true }));
  };

  const handleWrittenAnswerChange = (qId: number, value: string) => {
    setCaseStudyInputs((current) => ({ ...current, [qId]: value }));
    setSubmittedCaseStudies((current) => {
      const next = { ...current };
      delete next[qId];
      return next;
    });
    setAnswerEvaluations((current) => {
      const next = { ...current };
      delete next[qId];
      return next;
    });
  };

  const handleEvaluateAnswer = async (question: Question) => {
    const studentAnswer = caseStudyInputs[question.id]?.trim() || "";
    if (!requiresAiEvaluation(question) || !studentAnswer) return;

    if (!assessmentContext?.courseId) {
      const error = "This assessment is missing its course context. Please return to the overview and reopen it.";
      setAssessmentError(error);
      setAnswerEvaluations((prev) => ({
        ...prev,
        [question.id]: {
          status: "error",
          isCorrect: false,
          feedback: "",
          guidance: "",
          keyPointsMissed: [],
          error,
        },
      }));
      return;
    }

    setAssessmentError(null);
    setAnswerEvaluations((prev) => ({
      ...prev,
      [question.id]: {
        status: "evaluating",
        isCorrect: false,
        feedback: "",
        guidance: "",
        keyPointsMissed: [],
      },
    }));

    try {
      const evaluation = await learningBoardsApi.evaluateAssessmentAnswer(
        assessmentContext.courseId,
        assessmentContext.module,
        assessmentContext.chapter,
        question.id,
        studentAnswer,
      );
      setAnswerEvaluations((prev) => ({
        ...prev,
        [question.id]: { ...evaluation, status: "evaluated" },
      }));
      setSubmittedCaseStudies((prev) => {
        if (evaluation.isCorrect) return { ...prev, [question.id]: true };
        const next = { ...prev };
        delete next[question.id];
        return next;
      });
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : "AI evaluation is temporarily unavailable. Please try again.";
      setAssessmentError(message);
      setAnswerEvaluations((prev) => ({
        ...prev,
        [question.id]: {
          status: "error",
          isCorrect: false,
          feedback: "",
          guidance: "",
          keyPointsMissed: [],
          error: message,
        },
      }));
      setSubmittedCaseStudies((prev) => {
        const next = { ...prev };
        delete next[question.id];
        return next;
      });
    }
  };

  const renderAnswerEvaluation = (qId: number) => {
    const evaluation = answerEvaluations[qId];
    if (!evaluation) return null;

    if (evaluation.status === "evaluating") {
      return (
        <div className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-[11px] font-bold text-indigo-700">
          <RefreshCw className="h-4 w-4 animate-spin" />
          <span>Evaluating your answer...</span>
        </div>
      );
    }

    if (evaluation.status === "error") {
      return (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-[11px] font-semibold leading-relaxed text-red-700">
          <X className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{evaluation.error || "AI evaluation failed. Please try again."}</span>
        </div>
      );
    }

    return (
      <div className={`space-y-2 rounded-xl border p-4 ${evaluation.isCorrect ? "border-emerald-200 bg-emerald-50" : "border-orange-200 bg-orange-50"}`}>
        <div className={`flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider ${evaluation.isCorrect ? "text-emerald-700" : "text-orange-700"}`}>
          {evaluation.isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
          <Sparkles className="h-3.5 w-3.5" />
          <span>{evaluation.isCorrect ? "AI evaluation: Correct" : "AI evaluation: Not quite yet"}</span>
        </div>
        <p className="text-xs font-semibold leading-relaxed text-slate-700">{evaluation.feedback}</p>
        {evaluation.guidance && (
          <p className="text-xs leading-relaxed text-slate-700">
            <span className="font-bold">Next step: </span>{evaluation.guidance}
          </p>
        )}
        {evaluation.keyPointsMissed.length > 0 && (
          <div className="text-xs leading-relaxed text-slate-700">
            <span className="font-bold">Review these points:</span>
            <ul className="mt-1 list-disc space-y-0.5 pl-4">
              {evaluation.keyPointsMissed.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const writtenQuestions = questions.filter(requiresAiEvaluation);
  const allWrittenAnswersEvaluated = writtenQuestions.every(
    (question) => answerEvaluations[question.id]?.status === "evaluated",
  );

  const calculateScore = async () => {
    if (!allWrittenAnswersEvaluated) {
      setAssessmentError("Evaluate every written answer before submitting the assessment.");
      return;
    }

    let correctCount = 0;
    
    questions.forEach((q) => {
      if (q.type === "multiple-choice") {
        if (selectedAnswers[q.id] === q.correctOption) {
          correctCount++;
        }
      } else if (q.type === "matching") {
        const qAnswers = matchingAnswers[q.id] || {};
        let allMatched = true;
        q.matchingPairs?.forEach((pair, idx) => {
          if (qAnswers[idx] !== pair.correctRightIndex) {
            allMatched = false;
          }
        });
        if (allMatched) correctCount++;
      } else if (requiresAiEvaluation(q)) {
        if (answerEvaluations[q.id]?.status === "evaluated" && answerEvaluations[q.id].isCorrect) {
          correctCount++;
        }
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);

    await onSubmitted?.(finalScore);

    if (finalScore >= 50) {
      const currentBadges = userProfile.badges || [];
      const badgeId = `cert_${activeTrackId}_${selectedLesson.id}`;
      if (!currentBadges.includes(badgeId)) {
        onUpdateProfile({ ...userProfile, badges: [...currentBadges, badgeId] });
      }
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5 bg-slate-50 font-sans z-0 text-left overflow-y-auto text-slate-900">
      
      {/* Assessment heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-3.5 gap-3">
        <div>
          <span className="text-[10px] font-mono font-bold text-immersive-secondary uppercase tracking-widest block mb-0.5">
            COHORTIA EVALUATOR
          </span>
          <h3 className="text-sm font-extrabold text-immersive-text-primary uppercase tracking-wider font-mono">
            Assessment Board
          </h3>
        </div>
      </div>

      {score !== null ? (
        // Score Report Panel
        <div className="flex-1 my-6 flex flex-col items-center justify-center max-w-md mx-auto w-full text-center bg-immersive-card border border-immersive-border/80 p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-immersive-shadow">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4B3E]/5 rounded-full blur-2xl pointer-events-none" />

          {score >= 50 ? (
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-sm">
              <Trophy className="w-8 h-8" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4 shadow-sm">
              <HelpCircle className="w-8 h-8" />
            </div>
          )}

          <span className="text-[10px] font-mono font-bold text-immersive-text-secondary uppercase tracking-widest block mb-1">
            ASSESSMENT RESULTS
          </span>
          <h4 className="text-3xl font-black text-immersive-text-primary font-mono mb-2">
            {score}%
          </h4>

          <p className="text-xs text-immersive-text-secondary leading-relaxed font-semibold mb-6">
            {score >= 50
              ? `You scored ${score}%. Your assessment has been recorded and this chapter is complete.`
              : `You scored ${score}%. A score of 50% or higher completes this chapter. Review the module slides and try again when you are ready.`}
          </p>

          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              onClick={() => {
                setScore(null);
                setSelectedAnswers({});
                setSubmittedAnswers({});
                setMatchingAnswers({});
                setCaseStudyInputs({});
                setSubmittedCaseStudies({});
                setAnswerEvaluations({});
                setAssessmentError(null);
                setCurrentQuestionIdx(0);
              }}
              className="py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 flex items-center justify-center space-x-2 cursor-pointer transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retake Assessment</span>
            </button>
            <button
              onClick={onMoveToOverview}
              className="py-2.5 rounded-xl text-xs font-bold bg-[#FF4B3E] hover:bg-[#e84236] text-white flex items-center justify-center space-x-2 cursor-pointer transition-all"
            >
              <span>Move to Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        // Question Presenter Panel
        <div className="flex-1 my-4 flex flex-col justify-between max-w-2xl mx-auto w-full">
          
          <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-5 shadow-sm">
            {questions.length > 0 ? (
              <>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-immersive-text-secondary border-b border-immersive-border/40 pb-2">
                  <span>QUESTION {currentQuestionIdx + 1} OF {questions.length}</span>
          <span className="text-[#FF4B3E]">Assessment</span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm sm:text-base font-extrabold text-immersive-text-primary leading-relaxed">
                    {questions[currentQuestionIdx].question}
                  </h4>

                  {/* 1. Multiple-Choice layout */}
                  {questions[currentQuestionIdx].type === "multiple-choice" && (
                    <div className="space-y-2 pt-2">
                      {questions[currentQuestionIdx].options?.map((option, idx) => {
                        const isSelected = selectedAnswers[questions[currentQuestionIdx].id] === idx;
                        const isSubmitted = submittedAnswers[questions[currentQuestionIdx].id];
                        const isCorrect = idx === questions[currentQuestionIdx].correctOption;
                        
                        let optionClass = "border-immersive-border hover:border-immersive-secondary/50 bg-immersive-card/50";
                        if (isSelected && !isSubmitted) optionClass = "border-[#FF4B3E] bg-[#FF4B3E]/5 text-immersive-text-primary";
                        if (isSubmitted) {
                          if (isCorrect) optionClass = "border-emerald-500/70 bg-emerald-500/10 text-emerald-400";
                          else if (isSelected) optionClass = "border-red-500/70 bg-red-500/10 text-red-400";
                          else optionClass = "border-immersive-border/40 bg-immersive-card/30 opacity-50";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(questions[currentQuestionIdx].id, idx)}
                            className={`w-full p-3 rounded-xl border text-left text-xs font-semibold leading-relaxed flex items-center justify-between transition-all cursor-pointer ${optionClass}`}
                          >
                            <span>{option}</span>
                            {isSubmitted && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                            {isSubmitted && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* 2. Matching layout */}
                  {questions[currentQuestionIdx].type === "matching" && (
                    <div className="space-y-3 pt-2">
                      {questions[currentQuestionIdx].matchingPairs?.map((pair, leftIdx) => {
                        const currentMatch = (matchingAnswers[questions[currentQuestionIdx].id] || {})[leftIdx];
                        
                        return (
                          <div key={leftIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                            <div className="bg-immersive-card border border-immersive-border p-2.5 rounded-xl text-xs font-bold text-immersive-text-primary text-left">
                              {pair.left}
                            </div>
                            <select
                              value={currentMatch !== undefined ? currentMatch : ""}
                              onChange={(e) => handleMatchPair(questions[currentQuestionIdx].id, leftIdx, Number(e.target.value))}
                              className="bg-white border border-slate-300 p-2 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:border-[#FF4B3E]/60"
                            >
                              <option value="" disabled>-- Match Pattern --</option>
                              {questions[currentQuestionIdx].matchingPairs?.map((rPair, rightIdx) => (
                                <option key={rightIdx} value={rightIdx}>{rPair.right}</option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* 3. Case-Study layout */}
                  {questions[currentQuestionIdx].type === "case-study" && (
                    <div className="space-y-3 pt-2">
                      <textarea
                        value={caseStudyInputs[questions[currentQuestionIdx].id] || ""}
                        onChange={(e) => handleWrittenAnswerChange(questions[currentQuestionIdx].id, e.target.value)}
                        disabled={submittedCaseStudies[questions[currentQuestionIdx].id] || answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluating"}
                        placeholder="Write your answer for AI evaluation..."
                        className="w-full bg-white border border-slate-300 p-3 rounded-xl text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FF4B3E]/60 resize-none h-32 leading-relaxed"
                      />
                      {!submittedCaseStudies[questions[currentQuestionIdx].id] ? (
                        <button
                          onClick={() => handleEvaluateAnswer(questions[currentQuestionIdx])}
                          disabled={(caseStudyInputs[questions[currentQuestionIdx].id] || "").trim().length === 0 || answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluating"}
                          className={`w-full py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            (caseStudyInputs[questions[currentQuestionIdx].id] || "").trim().length === 0
                              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                              : "bg-[#FF4B3E] hover:bg-[#e84236] text-white"
                          }`}
                        >
                          <><Sparkles className="h-3.5 w-3.5" /> {answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluated" ? "Revise and Evaluate Again" : "Evaluate Answer with AI"}</>
                        </button>
                      ) : (
                        <div className="flex items-center space-x-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[11px] font-bold text-emerald-700">
                          <Check className="h-4 w-4" />
                          <span>Answer evaluated. Review the guidance below.</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Code challenge layout */}
                  {questions[currentQuestionIdx].type === "code-challenge" && (
                    <div className="space-y-3 pt-2">
                      {questions[currentQuestionIdx].code && (
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left shadow-sm">
                          <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                            <Code2 className="h-3.5 w-3.5 text-[#FF4B3E]" />
                            <span>{questions[currentQuestionIdx].language || "code"} starter</span>
                          </div>
                          <pre className="max-w-full overflow-auto whitespace-pre p-3 text-xs leading-relaxed text-slate-900"><code>{questions[currentQuestionIdx].code}</code></pre>
                        </div>
                      )}
                      <textarea
                        value={caseStudyInputs[questions[currentQuestionIdx].id] || ""}
                        onChange={(e) => handleWrittenAnswerChange(questions[currentQuestionIdx].id, e.target.value)}
                        disabled={submittedCaseStudies[questions[currentQuestionIdx].id] || answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluating"}
                        placeholder="Write your solution here..."
                        spellCheck={false}
                        className="h-36 w-full resize-none rounded-xl border border-slate-300 bg-white p-3 font-mono text-xs leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-[#FF4B3E]/60 focus:outline-none"
                      />
                      {!submittedCaseStudies[questions[currentQuestionIdx].id] ? (
                        <button
                          onClick={() => handleEvaluateAnswer(questions[currentQuestionIdx])}
                          disabled={!caseStudyInputs[questions[currentQuestionIdx].id]?.trim() || answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluating"}
                          className="w-full rounded-lg bg-[#FF4B3E] py-2 text-xs font-bold text-white transition-all hover:bg-[#e84236] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                        >
                          <><Sparkles className="h-3.5 w-3.5" /> {answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluated" ? "Revise and Evaluate Again" : "Evaluate Solution with AI"}</>
                        </button>
                      ) : (
                        <div className="flex items-center space-x-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[11px] font-bold text-emerald-700">
                          <Check className="h-4 w-4" />
                          <span>Solution evaluated. Review the guidance below.</span>
                        </div>
                      )}
                    </div>
                  )}

                  {questions[currentQuestionIdx].type === "code-output" && (
                    <div className="space-y-3 pt-2">
                      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left shadow-sm">
                        <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                          <Code2 className="h-3.5 w-3.5 text-[#FF4B3E]" />
                          <span>{questions[currentQuestionIdx].language || "code"} program</span>
                        </div>
                        <pre className="max-w-full overflow-auto whitespace-pre p-3 text-xs leading-relaxed text-slate-900"><code>{questions[currentQuestionIdx].code}</code></pre>
                      </div>
                      {!submittedCaseStudies[questions[currentQuestionIdx].id] ? (
                        <>
                          <textarea
                            value={caseStudyInputs[questions[currentQuestionIdx].id] || ""}
                            onChange={(e) => handleWrittenAnswerChange(questions[currentQuestionIdx].id, e.target.value)}
                            placeholder="Write your answer and explain your reasoning..."
                            spellCheck={false}
                            className="h-28 w-full resize-none rounded-xl border border-slate-300 bg-white p-3 font-mono text-xs leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-[#FF4B3E]/60 focus:outline-none"
                          />
                          <button
                            onClick={() => handleEvaluateAnswer(questions[currentQuestionIdx])}
                            disabled={(caseStudyInputs[questions[currentQuestionIdx].id] || "").trim().length === 0 || answerEvaluations[questions[currentQuestionIdx].id]?.status === "evaluating"}
                            className={`flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition-all ${
                              (caseStudyInputs[questions[currentQuestionIdx].id] || "").trim().length === 0
                                ? "cursor-not-allowed bg-slate-200 text-slate-400"
                                : "cursor-pointer bg-[#FF4B3E] text-white hover:bg-[#e84236]"
                            }`}
                          >
                            <><Sparkles className="h-3.5 w-3.5" /><span>Evaluate Answer with AI</span></>
                          </button>
                        </>
                      ) : (
                        <div className="flex items-center space-x-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[11px] font-bold text-emerald-700">
                          <Check className="h-4 w-4" />
                          <span>Answer evaluated. Review the guidance below.</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Immediate Feedback Explanation Box */}
                  {questions[currentQuestionIdx].type === "multiple-choice" && submittedAnswers[questions[currentQuestionIdx].id] && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 animate-fadeIn">
                      <span className="text-[10px] font-mono font-bold text-[#FF4B3E] uppercase tracking-wider block">
                        COACH EVALUATION EXPLANATION
                      </span>
                      <p className="text-xs text-immersive-text-secondary leading-relaxed font-semibold">
                        {questions[currentQuestionIdx].explanation}
                      </p>
                    </div>
                  )}
                  {renderAnswerEvaluation(questions[currentQuestionIdx].id)}

                </div>
              </>
            ) : (
              <div className="py-10 text-center">
                <HelpCircle className="mx-auto mb-3 h-7 w-7 text-slate-400" />
                <p className="text-sm font-semibold text-slate-700">This chapter does not have an assessment yet.</p>
                <p className="mt-1 text-xs text-slate-500">Return to the overview to continue your learning path.</p>
              </div>
            )}
          </div>

          {assessmentError && (
            <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold leading-relaxed text-red-700">
              {assessmentError}
            </p>
          )}
          {!allWrittenAnswersEvaluated && !assessmentError && (
            <p className="mt-3 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-semibold leading-relaxed text-indigo-700">
              Evaluate each written answer with AI before submitting the assessment.
            </p>
          )}

          {/* Stepper controls */}
          {questions.length > 0 && <div className="flex items-center justify-between mt-4">
            {questions[currentQuestionIdx] &&
            questions[currentQuestionIdx].type === "multiple-choice" &&
            !submittedAnswers[questions[currentQuestionIdx].id] ? (
              <button
                disabled={selectedAnswers[questions[currentQuestionIdx].id] === undefined}
                onClick={() => handleSubmitQuestion(questions[currentQuestionIdx].id)}
                className={`py-2 px-5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedAnswers[questions[currentQuestionIdx].id] === undefined
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-[#FF4B3E] hover:bg-[#e84236] text-white hover:scale-[1.01]"
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <div />
            )}

            <div className="flex space-x-2">
              {currentQuestionIdx < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
                  className="py-2 px-4 bg-[#FF4B3E] hover:bg-[#e84236] rounded-lg text-xs font-bold text-white flex items-center space-x-1 cursor-pointer transition-all"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  disabled={!allWrittenAnswersEvaluated}
                  onClick={calculateScore}
                  className={`py-2 px-5 rounded-lg text-xs font-bold text-white flex items-center space-x-1.5 transition-all ${allWrittenAnswersEvaluated ? "bg-emerald-600 hover:bg-emerald-500 cursor-pointer hover:scale-[1.01]" : "bg-slate-300 cursor-not-allowed"}`}
                >
                  <Award className="w-4 h-4" />
                  <span>Submit Assessment</span>
                </button>
              )}
            </div>
          </div>}

        </div>
      )}

    </div>
  );
}
