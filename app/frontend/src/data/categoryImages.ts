import type {CareerCategory} from './careerDirectory';

const localImages = import.meta.glob('../../Category-images/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const categoryImageFiles: Record<string, string> = {
  'cyber-defense-offensive-security-cloud-security': 'digital-eye-watching-artificial-intelligence-cybernetics-concept_1163370-15921.jpg',
  'data-engineering-analytics-databases': 'big-data-technologies-analysis-virtual-screen-neural-networks_1067138-717.jpg',
  'cloud-architecture-devops-platform-reliability': 'software-developer-overseeing-server-clusters-doing-data-intensive-operations_482257-123076.jpg',
  'programming-languages-core-development': '3d-render-techno-background-with-male-head-programming-code_1048-5828.jpg',
  'machine-learning-deep-learning-computer-vision': 'data-center-computer-scientist-work-using-machine-learning-algorithms_482257-126211.jpg',
  'frontend-backend-full-stack-web': 'ai-industry-startup-technician-coding-listening-podcasts-office_482257-125056.jpg',
  'game-engines-graphics-interactive-development': 'augmented-reality-glasses-overlaying-information-i_1022456-161015.jpg',
  'android-ios-cross-platform': 'man-wearing-vr-headset-smart-technology_53876-102795.jpg',
  'blockchain-web3-fintech-infrastructure': 'data-processing-algorithms-ai-algorithms-represented-by-digital-silhouette-human-surrounded-by-binary-code_717906-101130.jpg',
  'networks-infrastructure-network-operations': 'close-up-server-hub-expert-using-artificial-intelligence-reduce-downtime_482257-125049.jpg',
  'robotics-embedded-systems-edge-computing': 'illustration-ai-automation-robotics-smart-factory_1214572-15353.jpg',
  'architecture-quality-engineering-technical-leadership': 'data-center-team-programmers-using-artificial-intelligence_482257-126775.jpg',
  'llms-nlp-generative-ai-applications': 'data-center-software-developer-using-computer-monitor-neural-network-ai-llm_482257-130078.jpg',
  'it-support-linux-systems-administration': 'laptop-used-by-data-center-system-administrators-using-ai-tech-close-up_482257-121068.jpg',
  'product-management-agile-ai-strategy': 'ai-brain-processor-interaction-business-support_641503-117439.jpg',
};

export function getCategoryImage(category: Pick<CareerCategory, 'slug'>): string | undefined {
  const filename = categoryImageFiles[category.slug];
  if (!filename) return undefined;

  // Keep the exact Vite glob key. This works reliably for assets outside src/data
  // on both the local Windows build and the Cloudflare production build.
  return localImages[`../../Category-images/${filename}`]
    || Object.entries(localImages).find(([path]) => path.endsWith(`/${filename}`))?.[1];
}
