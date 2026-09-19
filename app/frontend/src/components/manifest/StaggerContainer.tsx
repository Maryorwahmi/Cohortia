import { motion, Variants } from "motion/react";
import type { Key, ReactNode, CSSProperties } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  as?: "div" | "ul" | "ol";
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0.1,
  as = "div",
}: StaggerContainerProps) {
  const Component = motion[as];
  return (
    <Component
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
  key?: Key;
  style?: CSSProperties;
}) {
  const Component = motion[as];
  return (
    <Component variants={itemVariants} className={className} style={style}>
      {children}
    </Component>
  );
}

export function StaggerFadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
