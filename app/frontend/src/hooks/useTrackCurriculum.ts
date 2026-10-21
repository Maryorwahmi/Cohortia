import { useDashboardData } from "../context/DashboardDataContext";

// Compatibility hook: dashboard pages now consume one provider-backed data load.
export function useTrackCurriculum() {
  return useDashboardData();
}
