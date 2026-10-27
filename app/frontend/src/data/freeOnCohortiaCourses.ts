export const FREE_ON_COHORTIA_COURSE_IDS = new Set([
  'cs50s-introduction-to-computer-science',
  'javascript-algorithms-and-data-structures',
  'responsive-web-design',
  'the-odin-project-full-stack-javascript',
  'android-basics-in-kotlin',
  'android-basics-with-compose',
  'jetpack-compose-for-android-developers',
  'kaggle-micro-courses',
  'fastai-practical-deep-learning-for-coders',
  'introduction-to-cybersecurity',
  'rust-for-beginners',
  'microsoft-certified-azure-fundamentals-az-900',
  'microsoft-certified-azure-administrator-associate-az-104',
  'microsoft-certified-azure-developer-associate-az-204',
  'microsoft-certified-azure-solutions-architect-expert-az-305',
  'microsoft-certified-devops-engineer-expert-az-400',
  'microsoft-certified-azure-security-engineer-associate-az-500',
  'microsoft-certified-azure-ai-fundamentals-ai-900',
  'microsoft-certified-azure-ai-engineer-associate',
  'microsoft-power-bi-data-analyst-associate-pl-300',
  'azure-data-scientist-associate-dp-100',
  'microsoft-certified-azure-data-engineer-associate-dp-203',
  'microsoft-certified-azure-database-administrator-associate-dp-300',
  'microsoft-certified-windows-server-hybrid-administrator-associate',
  'microsoft-365-certified-fundamentals-ms-900',
]);

export function isFreeOnCohortia(courseId: string): boolean {
  return FREE_ON_COHORTIA_COURSE_IDS.has(courseId);
}
