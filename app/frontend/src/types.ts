export type CohortTrackId = string;

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
