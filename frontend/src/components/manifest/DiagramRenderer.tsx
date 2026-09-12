import { motion } from "motion/react";
import { useMemo, useId } from "react";
import type { DiagramData, ManifestDesignSystem } from "../../lib/courseManifest";
import { resolveIcon } from "./iconInference";

interface DiagramRendererProps {
  diagram: DiagramData;
  designSystem: ManifestDesignSystem;
  className?: string;
}

function shortenConnector(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r1: number,
  r2: number
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len === 0) return { x1, y1, x2, y2 };
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: x1 + ux * r1,
    y1: y1 + uy * r1,
    x2: x2 - ux * r2,
    y2: y2 - uy * r2,
  };
}

function curveConnector(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r1: number,
  r2: number,
  bendSign: 1 | -1 = 1
) {
  const line = shortenConnector(x1, y1, x2, y2, r1, r2);
  const dx = line.x2 - line.x1;
  const dy = line.y2 - line.y1;
  const len = Math.hypot(dx, dy);
  const midX = (line.x1 + line.x2) / 2;
  const midY = (line.y1 + line.y2) / 2;
  const offset = len * 0.12 * bendSign;
  const cx = len === 0 ? midX : midX + (-dy / len) * offset;
  const cy = len === 0 ? midY : midY + (dx / len) * offset;
  const labelX = 0.25 * line.x1 + 0.5 * cx + 0.25 * line.x2;
  const labelY = 0.25 * line.y1 + 0.5 * cy + 0.25 * line.y2;
  return { ...line, cx, cy, labelX, labelY };
}

export default function DiagramRenderer({
  diagram,
  designSystem,
  className = "",
}: DiagramRendererProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "_");
  const arrowId = `${uid}_arrow`;
  const glowId = `${uid}_glow`;

  const { nodes, connectors } = diagram;

  const viewBox = useMemo(() => {
    const xs = nodes.map((n) => n.cx - n.radius);
    const ys = nodes.map((n) => n.cy - n.radius);
    const maxXs = nodes.map((n) => n.cx + n.radius);
    const maxYs = nodes.map((n) => n.cy + n.radius + 30);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...maxXs);
    const maxY = Math.max(...maxYs);
    const padding = 40;
    return {
      minX: minX - padding,
      minY: minY - padding,
      width: maxX - minX + padding * 2,
      height: maxY - minY + padding * 2,
    };
  }, [nodes]);

  const textColor = designSystem.colors.textPrimary || "#F8FAFC";
  const accent = designSystem.colors.accent || "#48BB78";
  const monoFont = designSystem.typography.mono || "ui-monospace, monospace";

  if (diagram.type === "venn-diagram") {
    return (
      <svg
        className={`w-full h-full ${className}`}
        viewBox={`${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {nodes.map((node, i) => (
          <motion.g
            key={node.id || i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          >
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.radius}
              fill={node.color}
              stroke={node.stroke}
              strokeWidth={1.5}
              filter={`url(#${glowId})`}
              style={{ opacity: 0.9 }}
            />
            <text
              x={node.cx}
              y={node.cy + (node.radius > 80 ? -node.radius + 20 : 6)}
              fill={textColor}
              fontSize={10}
              fontFamily={monoFont}
              textAnchor="middle"
              fontWeight="bold"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    );
  }

  const nodeById = useMemo(() => {
    const map = new Map<string, (typeof nodes)[0]>();
    nodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [nodes]);

  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox={`${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker
          id={arrowId}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill={textColor} opacity={0.85} />
        </marker>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connectors?.map((conn, i) => {
        const from = nodeById.get(conn.from);
        const to = nodeById.get(conn.to);
        if (!from || !to) return null;
        const curve = curveConnector(
          from.cx,
          from.cy,
          to.cx,
          to.cy,
          from.radius,
          to.radius,
          i % 2 === 0 ? 1 : -1
        );
        return (
          <g key={`${conn.from}-${conn.to}-${i}`}>
            <motion.path
              d={`M ${curve.x1} ${curve.y1} Q ${curve.cx} ${curve.cy} ${curve.x2} ${curve.y2}`}
              fill="none"
              stroke={textColor}
              strokeWidth={1.5}
              strokeOpacity={0.55}
              markerEnd={`url(#${arrowId})`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { delay: 0.4 + i * 0.2, duration: 0.8, ease: "easeInOut" },
                opacity: { delay: 0.4 + i * 0.2, duration: 0.3 },
              }}
            />
            {conn.label && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.2, duration: 0.3 }}
              >
                <rect
                  x={curve.labelX - 2}
                  y={curve.labelY - 10}
                  width={4}
                  height={20}
                  rx={2}
                  fill={accent}
                  opacity={0.9}
                />
                <text
                  x={curve.labelX + 8}
                  y={curve.labelY + 3}
                  fill={textColor}
                  fontSize={8}
                  fontFamily={monoFont}
                  fontWeight="bold"
                >
                  {conn.label}
                </text>
              </motion.g>
            )}
          </g>
        );
      })}

      {nodes.map((node, i) => {
        const NodeIcon = resolveIcon(node.icon, node.label);
        const iconSize = Math.max(14, node.radius * 0.8);
        return (
          <motion.g
            key={node.id || i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "backOut" }}
            whileHover={{ scale: 1.08, filter: "brightness(1.15)" }}
            style={{ cursor: "pointer" }}
          >
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.radius + 6}
              fill="none"
              stroke={node.stroke}
              strokeWidth={1}
              strokeOpacity={0.35}
              animate={{ r: [node.radius + 4, node.radius + 10, node.radius + 4], opacity: [0.35, 0.15, 0.35] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.radius}
              fill={node.color}
              stroke={node.stroke}
              strokeWidth={2}
              filter={`url(#${glowId})`}
              style={{ opacity: 0.92 }}
            />
            <NodeIcon
              x={node.cx - iconSize / 2}
              y={node.cy - iconSize / 2}
              width={iconSize}
              height={iconSize}
              color={node.stroke}
              strokeWidth={2}
            />
            <text
              x={node.cx}
              y={node.cy + node.radius + 16}
              fill={textColor}
              fontSize={9}
              fontFamily={monoFont}
              textAnchor="middle"
              fontWeight="bold"
            >
              {node.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
