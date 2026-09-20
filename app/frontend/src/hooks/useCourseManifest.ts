import { useState, useEffect } from "react";
import { loadManifest, CourseManifest } from "../lib/courseManifest";

export function useCourseManifest(courseId: string | undefined | null) {
  const [manifest, setManifest] = useState<CourseManifest | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseId) {
      setManifest(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    loadManifest(courseId)
      .then((m) => {
        if (cancelled) return;
        setManifest(m);
        if (!m) setError(`Manifest not found for course ${courseId}`);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load manifest");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [courseId]);

  return { manifest, loading, error };
}
