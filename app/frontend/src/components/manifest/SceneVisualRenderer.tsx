import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import type {
  ManifestDesignSystem,
  ManifestScene,
  ManifestChapter,
  DiagramData,
} from "../../lib/courseManifest";
import SlideTransition from "./SlideTransition";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";
import CodeBlock from "./CodeBlock";
import DiagramRenderer from "./DiagramRenderer";
import AmbientDecorations from "./AmbientDecorations";
import WorksheetPanel from "./WorksheetPanel";
import { inferIcon } from "./iconInference";

interface SceneVisualRendererProps {
  scene: ManifestScene;
  chapter?: ManifestChapter;
  designSystem: ManifestDesignSystem;
  progress?: number;
  onCompleteScene?: (answer: string) => void;
}

function splitBullet(bullet: string) {
  const idx = bullet.indexOf(":");
  if (idx === -1) return { title: bullet, body: "" };
  return { title: bullet.slice(0, idx).trim(), body: bullet.slice(idx + 1).trim() };
}

function isDiagramData(value: unknown): value is DiagramData {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as DiagramData).type === "string" &&
    Array.isArray((value as DiagramData).nodes)
  );
}

export default function SceneVisualRenderer({
  scene,
  chapter,
  designSystem,
  progress = 0,
  onCompleteScene,
}: SceneVisualRendererProps) {
  const ds = designSystem.colors;
  const textPrimary = ds.textPrimary || "#0F172A";
  const textSecondary = ds.textSecondary || "#64748B";
  const surface = ds.surface || "#FFFFFF";
  const border = ds.textSecondary || "#E2E8F0";
  const accent = ds.accent || "#FF4E00";
  const primary = ds.primary || "#2B6CB0";
  const success = ds.success || "#10B981";
  const background = ds.background || "#FFFFFF";

  const visual = scene.visual;
  const bullets = visual.bullets || [];

  const worksheetConfig = visual.worksheetConfig || {};
  const hasInputReflection = scene.interactions?.some((i) => i.type === "input_reflection");

  const headingBlock = useMemo(
    () => (
      <div className="space-y-1">
        <h3
          className="text-lg md:text-xl font-bold font-display leading-tight"
          style={{ color: textPrimary }}
        >
          {visual.heading}
        </h3>
        {visual.subheading && (
          <p
            className="text-[11px] font-mono uppercase tracking-wide"
            style={{ color: textSecondary }}
          >
            {visual.subheading}
          </p>
        )}
        <div className="h-1 w-16 rounded-full mt-2" style={{ backgroundColor: accent }} />
      </div>
    ),
    [visual.heading, visual.subheading, textPrimary, textSecondary, accent]
  );

  const checkBullet = (b: string, i: number) => (
    <StaggerItem
      key={i}
      className="flex items-start gap-2.5 text-xs"
      style={{ color: textPrimary }}
    >
      <span
        className="w-4 h-4 rounded-full border flex items-center justify-center text-[9px] font-mono font-bold shrink-0 mt-0.5"
        style={{ borderColor: accent, color: accent }}
      >
        ✓
      </span>
      <p>{b}</p>
    </StaggerItem>
  );

  let content: ReactNode;
  let hideTopHeading = false;

  const sceneType = scene.type;
  const visualLayout = visual.layout;
  const visualKind = visual.kind;

  if (sceneType === "worksheet" || visualLayout === "worksheet" || visualKind === "worksheet") {
    const firstInteraction = scene.interactions?.find((i) => i.type === "input_reflection");
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 h-full">
        <StaggerContainer className="flex flex-col gap-3 justify-center">
          {bullets.map(checkBullet)}
        </StaggerContainer>

        <WorksheetPanel
          prompt={firstInteraction?.prompt}
          config={worksheetConfig}
          designSystem={designSystem}
          onSubmit={(answer) => onCompleteScene?.(answer)}
        />
      </div>
    );
  } else if (isDiagramData(visual.diagram)) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 h-full">
        <StaggerContainer className="flex flex-col gap-3 justify-center">
          {bullets.map(checkBullet)}
        </StaggerContainer>

        <div
          className="p-4 rounded-2xl border min-h-[200px] relative"
          style={{ backgroundColor: surface, borderColor: border }}
        >
          <DiagramRenderer
            diagram={visual.diagram}
            designSystem={designSystem}
            className="h-[260px] md:h-full"
          />
        </div>
      </div>
    );
  } else if (visualLayout === "cards" || visualLayout === "cards_focus") {
    content = (
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {bullets.map((b, i) => {
          const { title, body } = splitBullet(b);
          const CardIcon = inferIcon(title);
          return (
            <StaggerItem key={i}>
              <motion.div
                className="relative p-4 pt-6 rounded-2xl border h-full overflow-hidden"
                style={{ backgroundColor: surface, borderColor: border }}
                whileHover={{ y: -4, borderColor: accent, boxShadow: `0 10px 28px ${accent}33` }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: accent }}
                />
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5"
                  style={{ backgroundColor: `${accent}1A`, color: accent }}
                >
                  <CardIcon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm mb-1" style={{ color: textPrimary }}>
                  {title}
                </h4>
                {body && (
                  <p className="text-xs leading-relaxed" style={{ color: textSecondary }}>
                    {body}
                  </p>
                )}
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    );
  } else if (visualLayout === "hero" || sceneType === "concept_intro" || visualLayout === "hero_focus") {
    hideTopHeading = true;
    const keyConcepts = chapter?.keyConcepts || [];
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 h-full items-center">
        <div className="flex flex-col gap-4">
          <motion.span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider self-start"
            style={{ borderColor: accent, color: accent, backgroundColor: surface }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Terminal className="w-3 h-3" />
            {chapter?.title || sceneType}
          </motion.span>
          <div className="space-y-2">
            <h3
              className="text-2xl md:text-3xl font-bold font-display leading-tight"
              style={{ color: textPrimary }}
            >
              {visual.heading}
            </h3>
            {visual.subheading && (
              <p
                className="text-[11px] font-mono uppercase tracking-wide"
                style={{ color: textSecondary }}
              >
                {visual.subheading}
              </p>
            )}
            <div className="h-1 w-20 rounded-full mt-2" style={{ backgroundColor: accent }} />
          </div>
          <StaggerContainer className="flex flex-col gap-3">
            {bullets.map((b, i) => (
              <StaggerItem
                key={i}
                className="flex items-start gap-3 text-sm md:text-base"
                style={{ color: textPrimary }}
              >
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: accent }}
                />
                <p>{b}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="relative flex items-center justify-center min-h-[240px] h-full overflow-hidden">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 140 + i * 70,
                height: 140 + i * 70,
                border: `1px dashed ${i % 2 === 0 ? primary : accent}`,
                opacity: 0.25,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 24 + i * 6, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {keyConcepts.length > 0 ? (
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 max-w-[320px]">
              {keyConcepts.map((kc, i) => {
                const tint = i % 2 === 0 ? accent : primary;
                return (
                  <motion.div
                    key={i}
                    className="px-3.5 py-1.5 rounded-full border text-[10px] font-mono font-bold"
                    style={{
                      backgroundColor: surface,
                      borderColor: tint,
                      color: textPrimary,
                      boxShadow: `0 0 16px ${tint}44`,
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{
                      opacity: { delay: 0.3 + i * 0.15, duration: 0.4 },
                      scale: { delay: 0.3 + i * 0.15, duration: 0.4, ease: "backOut" },
                      y: { delay: 0.9 + i * 0.3, duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    {kc}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full border-2"
                style={{ borderColor: accent, boxShadow: `0 0 24px ${accent}55` }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-3 h-3 rounded-full"
                style={{ backgroundColor: accent }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          )}
        </div>
      </div>
    );
  } else if (visualLayout === "code" || visualLayout === "code_editor" || sceneType === "code_demo" || sceneType === "code") {
    content = (
      <div className="flex flex-col gap-4 mt-1">
        <StaggerContainer className="flex flex-col justify-center gap-2">
          {bullets.map((b, i) => (
            <StaggerItem
              key={i}
              className="text-[11px] leading-relaxed"
              style={{ color: textSecondary }}
            >
              <span className="font-bold" style={{ color: primary }}>
                ▶
              </span>{" "}
              {b}
            </StaggerItem>
          ))}
        </StaggerContainer>
        {visual.code && (
          <CodeBlock
            code={visual.code}
            designSystem={designSystem}
            progress={progress}
          />
        )}
      </div>
    );
  } else {
    content = (
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {bullets.map((b, i) => (
          <StaggerItem
            key={i}
            className="p-3.5 rounded-xl border text-xs flex gap-2"
            style={{ backgroundColor: surface, borderColor: border }}
          >
            <span className="font-mono font-bold" style={{ color: accent }}>
              {i + 1}.
            </span>
            <p style={{ color: textPrimary }}>{b}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    );
  }

  const animation = visual.motion?.enter || "fade-in";

  return (
    <SlideTransition
      sceneKey={scene.sceneId}
      animation={animation}
      className="relative flex-1 flex flex-col gap-4"
    >
      <AmbientDecorations
        decorations={visual.decorations}
        designSystem={designSystem}
      />
      <div className="relative z-10 flex flex-col gap-4 h-full">
        {!hideTopHeading && headingBlock}
        {content}
      </div>
    </SlideTransition>
  );
}
