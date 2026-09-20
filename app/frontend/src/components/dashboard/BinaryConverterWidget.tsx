import { useState, useId } from "react";
import { Binary, Check, RefreshCw, Zap, ArrowRight, Sparkles } from "lucide-react";

interface BinaryConverterWidgetProps {
  onComplete?: () => void;
  targetDecimal?: number;
}

export default function BinaryConverterWidget({ onComplete, targetDecimal = 42 }: BinaryConverterWidgetProps) {
  const [bits, setBits] = useState<number[]>([0, 0, 1, 0, 1, 0, 1, 0]); // 8 bits (default 42)
  const [challengeTarget, setChallengeTarget] = useState<number>(targetDecimal);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [solvedCount, setSolvedCount] = useState<number>(0);
  const headingId = useId();

  // Powers of 2 for 8 bits: 128, 64, 32, 16, 8, 4, 2, 1
  const powers = [128, 64, 32, 16, 8, 4, 2, 1];

  const currentDecimal = bits.reduce((sum, bit, index) => sum + bit * powers[index], 0);
  const currentHex = currentDecimal.toString(16).toUpperCase().padStart(2, "0");
  const currentAscii = currentDecimal >= 32 && currentDecimal <= 126 ? String.fromCharCode(currentDecimal) : "·";

  const toggleBit = (index: number) => {
    const nextBits = [...bits];
    nextBits[index] = nextBits[index] === 1 ? 0 : 1;
    setBits(nextBits);

    const newDecimal = nextBits.reduce((sum, bit, i) => sum + bit * powers[i], 0);
    if (newDecimal === challengeTarget) {
      setFeedback(`🎉 Perfect! ${challengeTarget} in binary is ${nextBits.join("")}`);
      setSolvedCount((c) => c + 1);
      onComplete?.();
    } else {
      setFeedback(null);
    }
  };

  const resetBits = () => {
    setBits([0, 0, 0, 0, 0, 0, 0, 0]);
    setFeedback(null);
  };

  const newChallenge = () => {
    const randomTarget = Math.floor(Math.random() * 254) + 1;
    setChallengeTarget(randomTarget);
    setBits([0, 0, 0, 0, 0, 0, 0, 0]);
    setFeedback(null);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-6 text-slate-800">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <Binary className="h-5 w-5" />
            </span>
            <h2 id={headingId} className="text-lg font-bold text-slate-900">
              Interactive 8-Bit Binary Explorer
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Click any bit to toggle between 0 and 1. Watch how positional values sum up to decimal and hex.
          </p>
        </div>

        {/* Goal Badge */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-500">Target Value</span>
            <div className="text-xl font-extrabold text-indigo-900">{challengeTarget}</div>
          </div>
          <button
            type="button"
            onClick={newChallenge}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
          >
            <RefreshCw className="h-3.5 w-3.5 text-slate-500" /> New Challenge
          </button>
        </div>
      </div>

      {/* Bit Toggles Grid */}
      <div className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Byte Representation (8 Bits)</span>
          <button
            type="button"
            onClick={resetBits}
            className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-600"
          >
            Clear all bits
          </button>
        </div>

        <div className="grid grid-cols-8 gap-2 sm:gap-3" role="group" aria-labelledby={headingId}>
          {bits.map((bit, index) => {
            const power = powers[index];
            const isActive = bit === 1;
            return (
              <div key={power} className="flex flex-col items-center">
                <span className="mb-1 text-[11px] font-mono font-semibold text-slate-400">
                  2<sup>{7 - index}</sup>
                </span>
                <span className="mb-2 text-xs font-mono font-bold text-slate-600">
                  {power}
                </span>
                <button
                  type="button"
                  onClick={() => toggleBit(index)}
                  aria-pressed={isActive}
                  aria-label={`Bit 2^${7 - index} value ${power}: currently ${bit}`}
                  className={`group relative flex h-16 w-full max-w-[64px] flex-col items-center justify-center rounded-xl border-2 font-mono text-xl font-extrabold transition-all active:scale-95 ${
                    isActive
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-100"
                      : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {bit}
                  <span
                    className={`absolute bottom-1.5 h-1 w-4 rounded-full transition-all ${
                      isActive ? "bg-indigo-300" : "bg-transparent"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Computation Breakdown */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Sum Formula */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:col-span-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Positional Sum Equation</span>
          <div className="mt-2 flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {bits.map((bit, index) => {
              const power = powers[index];
              const isActive = bit === 1;
              return (
                <span key={power} className="flex items-center gap-1">
                  <span
                    className={`rounded px-1.5 py-0.5 ${
                      isActive
                        ? "bg-indigo-100 font-bold text-indigo-700"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {bit} × {power}
                  </span>
                  {index < bits.length - 1 && <span className="text-slate-300">+</span>}
                </span>
              );
            })}
            <span className="text-slate-400">=</span>
            <span className="rounded bg-slate-900 px-2 py-0.5 font-bold text-white">
              {currentDecimal}
            </span>
          </div>
        </div>

        {/* Formats Card */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Equivalent Formats</span>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center font-mono">
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-[10px] text-slate-400">DECIMAL</div>
              <div className="text-base font-bold text-slate-800">{currentDecimal}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-[10px] text-slate-400">HEX</div>
              <div className="text-base font-bold text-slate-800">0x{currentHex}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-2">
              <div className="text-[10px] text-slate-400">ASCII</div>
              <div className="text-base font-bold text-slate-800">{currentAscii}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Feedback & Congratulations */}
      {feedback && (
        <div className="mb-4 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-emerald-600" />
            <span className="font-semibold">{feedback}</span>
          </div>
          <button
            type="button"
            onClick={newChallenge}
            className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700"
          >
            Next target <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Solved stats banner */}
      {solvedCount > 0 && !feedback && (
        <div className="flex items-center gap-2 text-xs font-medium text-indigo-600">
          <Sparkles className="h-4 w-4" />
          <span>You have completed {solvedCount} binary challenge{solvedCount === 1 ? "" : "s"} in this session!</span>
        </div>
      )}
    </div>
  );
}
