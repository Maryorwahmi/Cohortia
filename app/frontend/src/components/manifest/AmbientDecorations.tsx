import { motion } from "motion/react";
import type { ManifestDesignSystem } from "../../lib/courseManifest";

interface AmbientDecorationsProps {
  decorations?: string[];
  designSystem: ManifestDesignSystem;
  className?: string;
}

const TOKEN_LIST = [
  "glowing-blob",
  "orbit-rings",
  "connection-lines",
  "particles",
] as const;

const LEGACY_TOKEN_LIST = ["floating-icons", "glowing-blob", "particles"] as const;

type DecorationToken = (typeof TOKEN_LIST)[number];

function isDecorationToken(token: string): token is DecorationToken {
  return TOKEN_LIST.includes(token as DecorationToken);
}

function isLegacyToken(token: string): token is (typeof LEGACY_TOKEN_LIST)[number] {
  return LEGACY_TOKEN_LIST.includes(token as (typeof LEGACY_TOKEN_LIST)[number]);
}

export default function AmbientDecorations({
  decorations = [],
  designSystem,
  className = "",
}: AmbientDecorationsProps) {
  const primary = designSystem.colors.primary || "#2B6CB0";
  const accent = designSystem.colors.accent || "#48BB78";
  const secondary = designSystem.colors.secondary || "#1A365D";
  const textSecondary = designSystem.colors.textSecondary || "#94A3B8";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {decorations.map((token) => {
        if (token === "floating-icons") {
          return (
            <div key={token}>
              <FloatingOrb delay={0} color={primary} />
              <FloatingOrb delay={2} color={secondary} />
              <FloatingOrb delay={4} color={accent} />
            </div>
          );
        }
        if (!isDecorationToken(token)) return null;
        switch (token) {
          case "glowing-blob":
            return (
              <div key={token} className="absolute inset-0">
                <motion.div
                  className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full blur-3xl opacity-20"
                  style={{ background: `radial-gradient(circle, ${primary}, transparent 60%)` }}
                  animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full blur-3xl opacity-15"
                  style={{ background: `radial-gradient(circle, ${accent}, transparent 60%)` }}
                  animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            );
          case "orbit-rings":
            return (
              <div key={token} className="absolute top-4 right-4 w-32 h-32">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-dashed"
                    style={{
                      inset: i * 14,
                      borderColor: i === 0 ? primary : i === 1 ? secondary : accent,
                      borderWidth: 1,
                      opacity: 0.25,
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                  />
                ))}
              </div>
            );
          case "connection-lines":
            return (
              <svg key={token} className="absolute inset-0 w-full h-full opacity-15">
                <line x1="0%" y1="100%" x2="100%" y2="0%" stroke={textSecondary} strokeWidth={1} strokeDasharray="4 4" />
                <line x1="0%" y1="70%" x2="100%" y2="30%" stroke={primary} strokeWidth={1} strokeDasharray="4 4" />
                <line x1="0%" y1="40%" x2="100%" y2="80%" stroke={accent} strokeWidth={1} strokeDasharray="4 4" />
                <circle cx="25%" cy="60%" r={2} fill={accent} />
                <circle cx="75%" cy="40%" r={2} fill={primary} />
                <circle cx="50%" cy="75%" r={2} fill={textSecondary} />
              </svg>
            );
          case "particles":
            return (
              <div key={token} className="absolute inset-0">
                {Array.from({ length: 16 }).map((_, i) => {
                  const left = (i * 7) % 100;
                  const delay = (i * 0.4) % 4;
                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: `${left}%`,
                        bottom: "-10px",
                        width: 2 + (i % 3),
                        height: 2 + (i % 3),
                        backgroundColor: i % 2 === 0 ? accent : primary,
                      }}
                      animate={{ y: [0, -500], opacity: [0, 0.6, 0] }}
                      transition={{
                        duration: 8 + (i % 5),
                        delay,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function FloatingOrb({ delay, color }: { delay: number; color: string }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0.2 }}
      animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
      className="absolute w-4 h-4 rounded-full"
      style={{ background: color, top: `${20 + Math.random() * 60}%`, left: `${10 + Math.random() * 80}%` }}
    />
  );
}
