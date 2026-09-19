import { useState, useEffect } from "react";

interface SkeletonLoaderProps {
  activePage: string;
}

export default function SkeletonLoader({ activePage }: SkeletonLoaderProps) {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-immersive-bg relative text-left animate-pulse">
      {/* Visual background accents */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#FF4B3E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 mt-4 space-y-8">
        
        {/* Skeleton Banner/Header Box */}
        <div className="bg-immersive-card/50 border border-immersive-border/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3 w-full max-w-xl">
            <div className="h-3 w-32 bg-immersive-border rounded" />
            <div className="h-8 w-64 bg-immersive-border/80 rounded-lg" />
            <div className="h-4 w-full bg-immersive-border/60 rounded" />
            <div className="h-4 w-4/5 bg-immersive-border/40 rounded" />
          </div>
          <div className="w-24 h-24 rounded-full bg-immersive-border shrink-0 self-center md:self-auto" />
        </div>

        {/* Dynamic Skeleton Grid/Columns depending on layout */}
        {activePage === "learning-board" ? (
          // Learning Board Skeleton (Left 4 cols Sidebar, Right 8 cols Main)
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 bg-immersive-card/50 border border-immersive-border/40 rounded-3xl p-5 space-y-4">
              <div className="h-4 w-32 bg-immersive-border rounded" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-14 bg-immersive-border/60 rounded-2xl w-full" />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              <div className="h-[400px] bg-immersive-card/50 border border-immersive-border/40 rounded-3xl p-6 flex flex-col justify-between">
                <div className="h-4 w-40 bg-immersive-border rounded" />
                <div className="space-y-2">
                  <div className="h-6 w-3/4 bg-immersive-border/80 rounded" />
                  <div className="h-4 w-full bg-immersive-border/60 rounded" />
                  <div className="h-4 w-2/3 bg-immersive-border/40 rounded" />
                </div>
                <div className="flex justify-between">
                  <div className="h-8 w-24 bg-immersive-border rounded-lg" />
                  <div className="h-8 w-24 bg-immersive-border rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        ) : activePage === "overview" ? (
          // Overview Page Skeleton (Left 8 cols Roadmap, Right 4 cols Habit Logger)
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="h-4 w-48 bg-immersive-border rounded" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-immersive-card/50 border border-immersive-border/40 rounded-3xl p-6 space-y-4">
                  <div className="flex justify-between">
                    <div className="h-4 w-28 bg-immersive-border rounded" />
                    <div className="h-4 w-24 bg-immersive-border rounded" />
                  </div>
                  <div className="h-3 w-full bg-immersive-border/50 rounded" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-12 bg-immersive-border/40 rounded-xl" />
                    <div className="h-12 bg-immersive-border/40 rounded-xl" />
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-immersive-card/50 border border-immersive-border/40 rounded-3xl p-6 space-y-5">
                <div className="h-4 w-32 bg-immersive-border rounded" />
                <div className="space-y-3">
                  <div className="h-12 bg-immersive-border/40 rounded-2xl" />
                  <div className="h-12 bg-immersive-border/40 rounded-2xl" />
                  <div className="h-12 bg-immersive-border/40 rounded-2xl" />
                </div>
                <div className="h-1.5 w-full bg-immersive-border/30 rounded" />
                <div className="h-20 bg-immersive-border/40 rounded-2xl" />
              </div>
            </div>
          </div>
        ) : (
          // Default Dashboard Pages Skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-immersive-card/50 border border-immersive-border/40 rounded-3xl p-6 space-y-4 h-64">
                <div className="h-4 w-24 bg-immersive-border rounded" />
                <div className="h-6 w-48 bg-immersive-border/80 rounded" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-immersive-border/50 rounded" />
                  <div className="h-3 w-5/6 bg-immersive-border/40 rounded" />
                  <div className="h-3 w-2/3 bg-immersive-border/30 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
