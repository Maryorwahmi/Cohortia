export type CohortTrackId = string;

export type RoadmapLevel = "beginner" | "intermediate" | "advanced";
export type RoadmapGoal = "Pivot into a new career" | "Up-skill in my current role" | "Lead & Specialize";

export interface RoadmapCourseSelection {
  id: string;
  title: string;
  level: RoadmapLevel;
  description?: string | null;
}

export interface RoadmapSelection {
  careerGoal: RoadmapGoal;
  learningStage: RoadmapLevel;
  selectedCareerId: string;
  selectedCareer: string;
  selectedCourses: Record<RoadmapLevel, string[]>;
  roadmapOrder: string[];
}

export interface CohortTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  salaryUplift: string;
  placementRate: string;
  difficulty: "Beginner Friendly" | "Intermediate" | "Challenging";
  skills: string[];
  projects: string[];
  color: string;
}

export interface UserPreferences {
  name: string;
  email?: string;
  track: CohortTrackId;
  experience: "beginner" | "intermediate" | "changer";
  commitment?: "fulltime" | "parttime";
  completedSteps?: string[];
  badges?: string[];
  phone?: string;
  country?: string;
  careerGoal?: string;
  desiredField?: string;
  availability?: string;
  portfolioLink?: string;
  roadmapSelection?: RoadmapSelection;
}

export function backendUserToPreferences(user: {
  name: string;
  email?: string;
  role?: string;
  desiredField?: string | null;
  experienceLevel?: string | null;
  weeklyHours?: string | null;
  learningPace?: string | null;
  phone?: string | null;
  country?: string | null;
  careerGoal?: string | null;
  availability?: string | null;
  portfolioLink?: string | null;
  roadmapSelection?: string | null;
}): UserPreferences {
  const desiredField = user.desiredField || user.role || "frontend";
  const track = desiredField.toLowerCase();

  const experienceLevel = (user.experienceLevel || "").toLowerCase();
  const experience: UserPreferences["experience"] =
    experienceLevel === "intermediate" ? "intermediate" :
    experienceLevel === "advanced" ? "changer" :
    experienceLevel === "beginner" ? "beginner" :
    user.role === "level-up" ? "intermediate" :
    user.role === "experience-track" ? "changer" :
    "beginner";

  const weeklyHours = user.weeklyHours || user.learningPace || "";
  const commitment: UserPreferences["commitment"] =
    weeklyHours.includes("35") || weeklyHours.includes("40") || weeklyHours.toLowerCase().includes("full") ? "fulltime" :
    weeklyHours.includes("15") || weeklyHours.includes("12") || weeklyHours.toLowerCase().includes("part") ? "parttime" :
    "fulltime";

  let roadmapSelection: RoadmapSelection | undefined;
  try {
    const parsed = user.roadmapSelection ? JSON.parse(user.roadmapSelection) : null;
    if (parsed?.roadmapOrder && parsed?.selectedCourses) {
      const toId = (course: string | RoadmapCourseSelection) => typeof course === "string" ? course : course.id;
      roadmapSelection = {
        ...parsed,
        selectedCareerId: parsed.selectedCareerId || parsed.selectedCareer,
        selectedCourses: Object.fromEntries(
          (Object.keys(parsed.selectedCourses) as RoadmapLevel[]).map((level) => [level, parsed.selectedCourses[level].map(toId)])
        ) as Record<RoadmapLevel, string[]>,
        roadmapOrder: parsed.roadmapOrder.map(toId),
      };
    }
  } catch {
    roadmapSelection = undefined;
  }

  return {
    name: user.name,
    email: user.email,
    track,
    experience,
    commitment,
    completedSteps: [],
    phone: user.phone || undefined,
    country: user.country || undefined,
    careerGoal: user.careerGoal || undefined,
    desiredField: user.desiredField || undefined,
    availability: user.availability || undefined,
    portfolioLink: user.portfolioLink || undefined,
    roadmapSelection,
  };
}

export interface AdvisorMessage {
  sender: "user" | "advisor";
  text: string;
  timestamp: string;
}

export interface TickerEvent {
  id: string;
  user: string;
  avatar: string;
  track: string;
  event: string;
  time: string;
  badge?: string;
}
