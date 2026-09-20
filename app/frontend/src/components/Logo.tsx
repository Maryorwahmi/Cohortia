import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  // Define positions for nodes matching the crescent C-shape logo
  const nodes = [
    { id: 1, x: 48, y: 12, r: 5, color: "url(#grad-purple)" }, // Top center
    { id: 2, x: 77, y: 20, r: 5, color: "url(#grad-purple)" }, // Top right
    { id: 3, x: 58, y: 26, r: 2.2, color: "url(#grad-purple-blue)" }, // Small top connection
    { id: 4, x: 21, y: 25, r: 4.8, color: "url(#grad-purple-blue)" }, // Top left
    { id: 5, x: 36, y: 34, r: 5, color: "url(#grad-purple-blue)" }, // Top-mid left hub
    { id: 6, x: 9, y: 51, r: 4.8, color: "url(#grad-blue)" }, // Mid left outer
    { id: 7, x: 24, y: 42, r: 2.5, color: "url(#grad-purple-blue)" }, // Small mid-left inside
    { id: 8, x: 26, y: 60, r: 4.8, color: "url(#grad-blue)" }, // Mid left inner hub
    { id: 9, x: 18, y: 79, r: 4.5, color: "url(#grad-blue-cyan)" }, // Lower left
    { id: 10, x: 32, y: 76, r: 2.5, color: "url(#grad-blue-cyan)" }, // Small lower-left inside
    { id: 11, x: 40, y: 91, r: 4.8, color: "url(#grad-blue-cyan)" }, // Bottom left-center
    { id: 12, x: 69, y: 88, r: 4.5, color: "url(#grad-cyan)" }, // Bottom center-right
    { id: 13, x: 83, y: 75, r: 4.8, color: "url(#grad-cyan)" }, // Bottom right
    { id: 14, x: 64, y: 79, r: 2.2, color: "url(#grad-cyan)" }, // Small bottom connection
  ];

  // Map of connected nodes
  const connections = [
    [1, 2], [1, 3], [2, 3],
    [1, 4], [1, 5], [4, 5],
    [4, 6], [4, 7], [5, 7],
    [5, 8], [6, 7], [6, 8],
    [5, 11], // Vertical connection down the crescent spine
    [6, 9], [8, 9], [8, 10],
    [9, 10], [9, 11], [8, 11],
    [11, 12], [11, 14], [12, 13],
    [12, 14], [13, 14]
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
    >
      <defs>
        {/* Glowing filters for a high-tech premium feel */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gradients representing the transitions from purple (top) to blue (mid) to cyan (bottom) */}
        <linearGradient id="grad-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C084FC" /> {/* purple-400 */}
          <stop offset="100%" stopColor="#A855F7" /> {/* purple-500 */}
        </linearGradient>

        <linearGradient id="grad-purple-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6366F1" /> {/* indigo-500 */}
        </linearGradient>

        <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" /> {/* blue-500 */}
        </linearGradient>

        <linearGradient id="grad-blue-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0EA5E9" /> {/* sky-500 */}
        </linearGradient>

        <linearGradient id="grad-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#00D1FF" /> {/* cyan accent */}
        </linearGradient>

        {/* Overall background logo stroke gradient */}
        <linearGradient id="stroke-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#6366F1" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00D1FF" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Connection Lines */}
      <g>
        {connections.map(([fromId, toId], idx) => {
          const fromNode = nodes.find(n => n.id === fromId)!;
          const toNode = nodes.find(n => n.id === toId)!;
          return (
            <motion.line
              key={`conn-${idx}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#stroke-gradient)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: idx * 0.03, ease: "easeOut" }}
            />
          );
        })}
      </g>

      {/* Nodes (Circles) */}
      <g>
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Outer subtle glow on hover */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 1.5}
              fill={node.color}
              opacity="0.1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: node.id * 0.02 }}
              className="pointer-events-none"
            />
            {/* Core Node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color}
              stroke="#020204"
              strokeWidth="0.5"
              filter="url(#glow)"
              whileHover={{ scale: 1.3, strokeWidth: 0.8 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: node.id * 0.02,
              }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
