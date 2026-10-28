import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

interface ResizableSplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  initialLeftWidthPercent?: number;
  minLeftPercent?: number;
  maxLeftPercent?: number;
  className?: string;
}

export const ResizableSplitLayout: React.FC<ResizableSplitLayoutProps> = ({
  leftContent,
  rightContent,
  initialLeftWidthPercent = 50,
  minLeftPercent = 25,
  maxLeftPercent = 75,
  className = '',
}) => {
  const [leftPercent, setLeftPercent] = useState<number>(initialLeftWidthPercent);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDoubleClick = () => {
    // Snap back to 50/50
    setLeftPercent(50);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rect.left;
      const totalWidth = rect.width;
      let newPercent = (newWidth / totalWidth) * 100;
      if (newPercent < minLeftPercent) newPercent = minLeftPercent;
      if (newPercent > maxLeftPercent) newPercent = maxLeftPercent;
      setLeftPercent(newPercent);
    },
    [isDragging, minLeftPercent, maxLeftPercent]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={`flex-1 flex w-full h-full min-h-0 overflow-hidden relative select-none ${
        isDragging ? 'cursor-col-resize select-none' : ''
      } ${className}`}
    >
      {/* Left Pane (Teach Walkthrough) */}
      <div
        style={{ width: `${leftPercent}%` }}
        className="h-full min-h-0 overflow-hidden flex flex-col transition-all duration-75"
      >
        {leftContent}
      </div>

      {/* Draggable Divider Handle */}
      <div
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        title="Drag to resize Teach and Practical panes (Double click to reset 50/50)"
        className={`w-3.5 -mx-1 shrink-0 z-20 flex items-center justify-center cursor-col-resize group transition-colors select-none ${
          isDragging ? 'bg-rose-500' : 'hover:bg-slate-300/80 bg-transparent'
        }`}
      >
        <div
          className={`w-1 h-12 rounded-full flex items-center justify-center transition-all ${
            isDragging
              ? 'bg-white shadow-md'
              : 'bg-slate-300 group-hover:bg-rose-500 group-hover:h-16'
          }`}
        >
          <GripVertical
            className={`w-3 h-3 ${
              isDragging ? 'text-rose-600' : 'text-slate-500 group-hover:text-white'
            }`}
          />
        </div>
      </div>

      {/* Right Pane (Practical Workspace) */}
      <div
        style={{ width: `${100 - leftPercent}%` }}
        className="h-full min-h-0 overflow-hidden flex flex-col transition-all duration-75"
      >
        {rightContent}
      </div>
    </div>
  );
};
