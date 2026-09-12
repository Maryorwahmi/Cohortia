import React, { useState, useEffect } from 'react';

const UnderstandingGenerativeAI = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const AnimatedDiv = ({ children, delay = 0 }) => (
    <div
      className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  return (
    <div className="h-full bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center p-3 sm:p-4 font-sans overflow-hidden">
      <div className="max-w-[1600px] w-full flex flex-col gap-3">

        {/* Hero Section */}
        <AnimatedDiv>
          <p className="text-indigo-300 text-sm sm:text-base mb-1 text-center tracking-wide">Artificial Intelligence for Everyone</p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-center leading-tight tracking-tight drop-shadow-lg">
            Understanding Generative AI
          </h1>
          <p className="text-purple-200 text-sm sm:text-base mt-2 text-center max-w-3xl mx-auto opacity-90">
            AI that doesn't just analyze — it creates, imagines, and invents.
          </p>
        </AnimatedDiv>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">

          {/* Explanation Block */}
          <AnimatedDiv delay={200}>
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/20 hover:shadow-purple-500/40 transition-shadow duration-300 h-full">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">What is Generative AI?</h2>
              <p className="text-sm sm:text-base leading-relaxed text-white/90">
                Let's think about AI in a new way. Most AI you hear about recognizes patterns: it spots a cat in a photo, translates a sentence, or predicts the next word.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-white/90 mt-2">
                Generative AI goes one step further. It learns the patterns behind something — images, text, code, music — and then
                <span className="font-semibold text-purple-200"> creates something entirely new </span>
                that has never existed before. It is like giving a computer imagination.
              </p>
            </div>
          </AnimatedDiv>

          {/* Visual Concept / Diagram Area */}
          <AnimatedDiv delay={400}>
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center justify-center space-y-3 hover:shadow-indigo-500/40 transition-shadow duration-300 h-full">
              <h2 className="text-lg sm:text-xl font-bold mb-1 text-indigo-300">How It Works: The Creative Loop</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
                <div className="flex flex-col items-center group cursor-pointer p-2 rounded-xl hover:bg-white/10 transition duration-300">
                  <p className="text-xs text-white/70 mb-1">You give</p>
                  <div className="bg-indigo-600 px-3 py-1.5 rounded-xl shadow-lg group-hover:scale-105 transition duration-300 ease-out">
                    <span className="text-sm font-medium">Input (Prompt)</span>
                  </div>
                  <p className="text-[10px] text-white/60 mt-1">text, image, or data</p>
                </div>

                <div className="text-xl font-bold text-white/80 animate-pulse">→</div>

                <div className="flex flex-col items-center group cursor-pointer p-2 rounded-xl hover:bg-white/10 transition duration-300">
                  <p className="text-xs text-white/70 mb-1">AI learns patterns</p>
                  <div className="bg-purple-600 px-3 py-1.5 rounded-full shadow-lg group-hover:scale-105 transition duration-300 ease-out">
                    <span className="text-sm font-medium">Generative Model</span>
                  </div>
                  <p className="text-[10px] text-white/60 mt-1">neural networks</p>
                </div>

                <div className="text-xl font-bold text-white/80 animate-pulse">→</div>

                <div className="flex flex-col items-center group cursor-pointer p-2 rounded-xl hover:bg-white/10 transition duration-300">
                  <p className="text-xs text-white/70 mb-1">AI creates</p>
                  <div className="bg-emerald-600 px-3 py-1.5 rounded-xl shadow-lg group-hover:scale-105 transition duration-300 ease-out">
                    <span className="text-sm font-medium">Output (Creation)</span>
                  </div>
                  <p className="text-[10px] text-white/60 mt-1">new text, image, code</p>
                </div>
              </div>
            </div>
          </AnimatedDiv>

        </div>

        {/* Key Insight Callout */}
        <AnimatedDiv delay={600}>
          <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-4 sm:p-5 rounded-2xl shadow-2xl mt-2 border-l-4 border-yellow-300 flex items-start gap-3 hover:scale-[1.01] transition duration-300 ease-out">
            <span className="text-yellow-300 text-xl sm:text-2xl font-bold leading-none">💡</span>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-1 text-yellow-200">Key Insight: From Analysis to Creation</h3>
              <p className="text-sm sm:text-base text-white/90">
                Generative AI represents a fundamental shift. We are moving beyond asking machines to sort or classify information, and into a world where machines
                <span className="font-semibold text-yellow-100"> help us create and reason </span>
                in ways that amplify human imagination.
              </p>
            </div>
          </div>
        </AnimatedDiv>

      </div>
    </div>
  );
};

export default UnderstandingGenerativeAI;
