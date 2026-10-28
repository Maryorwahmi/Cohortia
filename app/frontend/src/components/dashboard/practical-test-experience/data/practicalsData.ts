import { PracticalManifest } from '../types/practical';

export const PRACTICAL_MANIFESTS: PracticalManifest[] = [
  // =========================================================================
  // CATEGORY 1: CLOUD CONSOLE LAB (Interactive Cloud Console & Topology)
  // =========================================================================

  // Alibaba Cloud ACA/ACP — M2 C2: Configure an EIP, Cloud Disk, and CloudMonitor alarm
  {
    id: 'alibaba-cloud-m2-c2',
    title: 'Configure EIP, Cloud Disk, and CloudMonitor Alarm',
    category: 'CLOUD CONSOLE LAB',
    categoryType: 'cloud_console',
    courseName: 'Alibaba Cloud ACA/ACP Certification',
    moduleName: 'Module 2: Compute, Storage & Observability',
    type: 'cloud',
    durationSeconds: 120,
    lessonLabel: 'Alibaba Cloud ACA/ACP - Mod 02 Ch 02: EIP, Cloud Disk, and CloudMonitor',
    objective: 'Allocate an Elastic IP (EIP), associate it to an ECS instance for public Internet egress, attach an Enhanced SSD Cloud Disk, and configure a CloudMonitor CPU threshold alarm.',
    realWorldContext: 'Production web tiers require static public IPs that decouple from underlying hardware maintenance, persistent block volumes that survive instance retirement, and automated threshold alerts to proactively detect traffic spikes.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 2',
      chapterBreadcrumb: 'M2 C2: CLOUD CONSOLE',
      topicBreadcrumb: 'EIP, DISK & ALARM',
      mainTitle: 'Configure EIP, Cloud Disk & CloudMonitor Alarm',
      subtitle: 'Elastic public networking, persistent block storage, and proactive observability on Alibaba Cloud.',
      inThisLesson: 'Walk through allocating an Elastic IP, binding it to an ECS instance, provisioning a 100 GiB ESSD, and setting CPU utilization alarm rules.',
      whyItMatters: 'Decoupling IP addresses and storage volumes from compute instances is fundamental to highly available cloud architectures.',
      quickOrientation: [
        'An Elastic IP (EIP) is an independent public IPv4 address that can be dynamically bound/unbound.',
        'Cloud Disks provide persistent block-level raw storage independent of the instance lifecycle.',
        'CloudMonitor metric alarm rules notify operations engineers before performance degradation impacts end users.'
      ],
      exploreKeyTopics: [
        {
          title: 'Elastic IP (EIP)',
          description: 'Decoupling public IP addresses from ephemeral physical host lifecycles.'
        },
        {
          title: 'Cloud Disks (ESSD)',
          description: 'Provisioning ultra-low latency NVMe block devices with 99.9999999% reliability.'
        },
        {
          title: 'CloudMonitor Rules',
          description: 'Evaluating metric conditions like CPUUtilization > 80% across sliding time windows.'
        }
      ],
      conceptMap: {
        title: 'Cloud Infrastructure Map',
        subtitle: 'Networking, Storage, and Telemetry Topology',
        nodes: [
          { label: 'Public Traffic', value: 'Internet User' },
          { label: 'EIP (Static IP)', value: '47.98.112.4 (10 Mbps)' },
          { label: 'Compute & Disk', value: 'ECS + 100GB ESSD' },
          { label: 'CloudMonitor', value: 'Alarm CPU > 80%' }
        ]
      },
      gettingReady: 'Open the Cloud Console tab, create and associate your EIP, attach an ESSD disk, and configure the CloudMonitor alert threshold.'
    },
    missionStory: {
      roleTitle: 'Cloud Infrastructure Engineer',
      scenarioOverview: 'You are preparing the production e-commerce backend on Alibaba Cloud. You must ensure the instance has a dedicated Elastic IP, mount an additional 100 GiB Cloud Disk for database persistence, and arm CloudMonitor to notify on high CPU load.',
      deliverables: [
        'Allocate an Elastic IP and bind it to ecs-web-cluster-01',
        'Attach a 100 GiB Enhanced SSD to the instance',
        'Configure a CloudMonitor CPU alert with threshold > 80%'
      ],
      xpReward: 240
    },
    files: [
      {
        name: 'cloud_config.yaml',
        folder: 'practical',
        language: 'yaml',
        initialContent: `# Alibaba Cloud ACA/ACP M2 C2 Configuration
Region: cn-hangzhou
InstanceId: ecs-web-cluster-01
ElasticIP:
  AllocationId: eip-2ze671a
  Bandwidth: 10Mbps
CloudDisk:
  Category: cloud_essd
  SizeGiB: 100
  MountPoint: /dev/vdb
CloudMonitor:
  Metric: CPUUtilization
  ThresholdPercent: 80
  EvaluationPeriods: 3
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'Elastic Public IP Architecture',
        codeSnippet: `// Step 1: Allocate and Bind Elastic IP
$ aliyun vpc AllocateEipAddress --Bandwidth 10 --RegionId cn-hangzhou
$ aliyun vpc AssociateEipAddress --AllocationId eip-2ze671a --InstanceId ecs-web-cluster-01`,
        codeOrText: `// Step 1: Allocate and Bind Elastic IP
$ aliyun vpc AllocateEipAddress --Bandwidth 10 --RegionId cn-hangzhou
$ aliyun vpc AssociateEipAddress --AllocationId eip-2ze671a --InstanceId ecs-web-cluster-01`,
        activeLineIndex: 1,
        activeBlockRange: [0, 2],
        callout: 'An EIP belongs to your cloud account, not to a physical machine. If the underlying host fails, you simply re-bind the EIP to a healthy standby instance.',
        calloutType: 'info',
        narration: 'Welcome to Alibaba Cloud ACA/ACP Module 2 Chapter 2! In on-premises data centers, replacing a server often required re-routing DNS records because IP addresses were tied to hardware cards. In the cloud, an Elastic IP gives you a static public IPv4 address that you own independently. By binding it to an ECS instance, inbound web requests reach your app, and if you ever need to upgrade or migrate the instance, your external IP never changes.',
        timestamp: 0,
        predictionQuestion: {
          id: 'pred-eip-1',
          prompt: 'What happens to public traffic if you replace an ECS instance with an EIP attached?',
          options: [
            {
              id: 'p1',
              label: 'Re-associate the EIP to the new instance; external clients experience zero DNS delay.',
              isCorrect: true,
              feedback: 'Exactly! Decoupling IP addresses from physical servers allows near-instant failover without waiting for global DNS TTL propagation.'
            },
            {
              id: 'p2',
              label: 'The public IP is destroyed and all clients must update their DNS.',
              isCorrect: false,
              feedback: 'Incorrect. An Elastic IP remains in your account until you explicitly release it.'
            }
          ]
        }
      },
      {
        stepNumber: 2,
        title: 'Persistent Block Storage: Cloud Disk',
        codeSnippet: `// Step 2: Create and Attach Cloud Disk (ESSD)
$ aliyun ecs CreateDisk --Size 100 --Category cloud_essd --ZoneId cn-hangzhou-i
$ aliyun ecs AttachDisk --DiskId d-2ze91ab --InstanceId ecs-web-cluster-01`,
        codeOrText: `// Step 2: Create and Attach Cloud Disk (ESSD)
$ aliyun ecs CreateDisk --Size 100 --Category cloud_essd --ZoneId cn-hangzhou-i
$ aliyun ecs AttachDisk --DiskId d-2ze91ab --InstanceId ecs-web-cluster-01`,
        activeLineIndex: 1,
        activeBlockRange: [0, 2],
        callout: 'Enhanced SSDs (ESSDs) leverage RDMA and NVMe architecture to achieve up to 1,000,000 IOPS and sub-millisecond read/write latencies.',
        calloutType: 'tip',
        narration: 'Next, let us examine persistent storage. The system disk of an ECS instance hosts your operating system, but critical application data and transaction databases should always reside on separate data disks. When you attach a 100 GiB ESSD, it connects across Alibaba Cloud\'s high-speed distributed storage cluster with automatic three-copy redundancy, protecting your business data against hardware failures.',
        timestamp: 40
      },
      {
        stepNumber: 3,
        title: 'Proactive Alerting with CloudMonitor',
        codeSnippet: `// Step 3: Put Metric Alarm Rule
$ aliyun cms PutMetricRule --RuleName CPU-Critical-Alert \\
  --MetricName CPUUtilization --Threshold 80 --EvaluationCount 3`,
        codeOrText: `// Step 3: Put Metric Alarm Rule
$ aliyun cms PutMetricRule --RuleName CPU-Critical-Alert \\
  --MetricName CPUUtilization --Threshold 80 --EvaluationCount 3`,
        activeLineIndex: 1,
        activeBlockRange: [0, 2],
        callout: 'Setting EvaluationCount to 3 prevents false alarms triggered by transient 1-second CPU bursts, notifying you only on sustained sustained saturation.',
        calloutType: 'warning',
        narration: 'Finally, production engineering demands proactive observability. Instead of waiting for users to complain about slow checkout pages, we arm CloudMonitor to continuously sample CPU utilization every minute. If usage remains above 80% for three consecutive sampling windows, CloudMonitor immediately fires an event to your notification group or triggers Auto Scaling to spawn additional nodes.',
        timestamp: 80
      }
    ],
    tasks: [
      {
        id: 'task-cloud-eip',
        title: '1. Allocate & Associate Elastic IP',
        description: 'In the Cloud Console or CLI, verify that the Elastic IP (eip-2ze671a) is bound to ecs-web-cluster-01.',
        criteria: 'EIP is active and attached to instance.',
        hints: ['Switch to the Elastic IP tab in the console or run aliyun vpc DescribeEipAddresses.']
      },
      {
        id: 'task-cloud-disk',
        title: '2. Attach 100 GiB Cloud Disk',
        description: 'Provision and attach an Enhanced SSD disk (d-2ze91ab) to the ECS instance.',
        criteria: 'Cloud Disk capacity >= 100 GiB with status In Use.',
        hints: ['Click Create Resource in the Cloud Disks tab.']
      },
      {
        id: 'task-cloud-alarm',
        title: '3. Arm CloudMonitor Alarm Rule',
        description: 'Verify the CPU utilization alarm rule is active with threshold > 80%.',
        criteria: 'CloudMonitor alarm rule is registered.',
        hints: ['Check the CloudMonitor tab for the CPU-Utilization-Critical rule.']
      }
    ]
  },

  // Alibaba Cloud ACA/ACP — M4 C1: Create a VPC, VSwitch, and Security Group
  {
    id: 'alibaba-cloud-m4-c1',
    title: 'Create a VPC, VSwitch, and Security Group',
    category: 'CLOUD CONSOLE LAB',
    categoryType: 'cloud_console',
    courseName: 'Alibaba Cloud ACA/ACP Certification',
    moduleName: 'Module 4: Enterprise Cloud Networking & Security',
    type: 'cloud',
    durationSeconds: 110,
    lessonLabel: 'Alibaba Cloud ACA/ACP - Mod 04 Ch 01: VPC, VSwitch, and Security Groups',
    objective: 'Design and provision an isolated Virtual Private Cloud (VPC) with CIDR 192.168.0.0/16, partition it into an availability zone VSwitch (192.168.1.0/24), and create stateful Security Group firewall rules.',
    realWorldContext: 'Every modern enterprise workload begins with network boundary isolation. A VPC provides a logically segregated private network in the cloud, while VSwitches enforce zone redundancy and Security Groups act as virtual firewalls.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 4',
      chapterBreadcrumb: 'M4 C1: ENTERPRISE VPC',
      topicBreadcrumb: 'VPC & SECURITY GROUP',
      mainTitle: 'Create a VPC, VSwitch & Security Group',
      subtitle: 'Building private software-defined networks and stateful firewalls on Alibaba Cloud.',
      inThisLesson: 'Learn private IP addressing (RFC 1918), multi-zone VSwitch planning, and ingress/egress firewall rules in the Alibaba Cloud Console.',
      whyItMatters: 'Network misconfigurations expose private databases to the open Internet. A properly segmented VPC is the first line of defense.',
      quickOrientation: [
        'A VPC spans an entire cloud region and provides an isolated virtual private network.',
        'A VSwitch resides strictly within a single Availability Zone (AZ) for physical fault isolation.',
        'Security Groups provide stateful packet filtering at the network interface level.'
      ],
      exploreKeyTopics: [
        {
          title: 'RFC 1918 CIDR Planning',
          description: 'Selecting 192.168.0.0/16 or 10.0.0.0/8 to prevent on-premises IP collisions.'
        },
        {
          title: 'VSwitch Subnetting',
          description: 'Allocating /24 subnets across Zone I and Zone J for high availability.'
        },
        {
          title: 'Stateful Filtering',
          description: 'Inbound port 80/443 rules automatically allow corresponding outbound responses.'
        }
      ],
      conceptMap: {
        title: 'Virtual Network Topology',
        subtitle: 'Region > Zone > VPC > VSwitch > Instances',
        nodes: [
          { label: 'Region Scope', value: 'cn-hangzhou (VPC)' },
          { label: 'Zone Subnet', value: 'cn-hangzhou-i (VSwitch)' },
          { label: 'CIDR Block', value: '192.168.1.0/24' },
          { label: 'Firewall', value: 'SG: Allow TCP 80, 443' }
        ]
      },
      gettingReady: 'Open the VPC Console, create the production VPC, subnet a VSwitch in Zone I, and inspect security rules.'
    },
    missionStory: {
      roleTitle: 'Principal Network Architect',
      scenarioOverview: 'You are setting up the foundation network for an international banking application. You must establish a private VPC, carve out a dedicated VSwitch in Zone cn-hangzhou-i, and configure security group firewall rules.',
      deliverables: [
        'Create VPC with CIDR 192.168.0.0/16',
        'Create VSwitch in cn-hangzhou-i with 192.168.1.0/24',
        'Verify Security Group ingress rules'
      ],
      xpReward: 250
    },
    files: [
      {
        name: 'network_topology.json',
        folder: 'practical',
        language: 'json',
        initialContent: `{
  "region": "cn-hangzhou",
  "vpc": {
    "name": "vpc-production-east",
    "cidr": "192.168.0.0/16",
    "status": "Available"
  },
  "vswitch": {
    "name": "vsw-zone-i-primary",
    "zone": "cn-hangzhou-i",
    "cidr": "192.168.1.0/24"
  },
  "securityGroup": {
    "name": "sg-web-tier",
    "inboundRules": [
      { "protocol": "TCP", "port": 80, "source": "0.0.0.0/0", "policy": "Accept" },
      { "protocol": "TCP", "port": 443, "source": "0.0.0.0/0", "policy": "Accept" }
    ]
  }
}`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'VPC Design & CIDR Sizing',
        codeSnippet: `// Step 1: Create Virtual Private Cloud
$ aliyun vpc CreateVpc --VpcName vpc-production-east --CidrBlock 192.168.0.0/16`,
        codeOrText: `// Step 1: Create Virtual Private Cloud
$ aliyun vpc CreateVpc --VpcName vpc-production-east --CidrBlock 192.168.0.0/16`,
        activeLineIndex: 1,
        activeBlockRange: [0, 1],
        callout: 'A /16 subnet mask provides 65,536 private IP addresses, giving you plenty of address space to grow across multiple availability zones.',
        calloutType: 'info',
        narration: 'Welcome to Chapter 4.1! In cloud architecture, a Virtual Private Cloud (VPC) is your own private corner of the public cloud. It isolates your servers from all other cloud customers. When choosing a CIDR block such as 192.168.0.0/16, we select an RFC 1918 private address space that does not conflict with your corporate headquarters or branch offices, ensuring seamless future VPN or Direct Connect peering.',
        timestamp: 0
      },
      {
        stepNumber: 2,
        title: 'VSwitch Subnetting & Zone Isolation',
        codeSnippet: `// Step 2: Create Zone-Specific VSwitch
$ aliyun vpc CreateVSwitch --VSwitchName vsw-zone-i-primary \\
  --VpcId vpc-2ze8f41 --ZoneId cn-hangzhou-i --CidrBlock 192.168.1.0/24`,
        codeOrText: `// Step 2: Create Zone-Specific VSwitch
$ aliyun vpc CreateVSwitch --VSwitchName vsw-zone-i-primary \\
  --VpcId vpc-2ze8f41 --ZoneId cn-hangzhou-i --CidrBlock 192.168.1.0/24`,
        activeLineIndex: 1,
        activeBlockRange: [0, 2],
        callout: 'While a VPC covers the entire region, every VSwitch is physically bound to one Availability Zone. Deploying VSwitches in multiple zones is essential for disaster recovery.',
        calloutType: 'tip',
        narration: 'Once your VPC exists, you cannot launch instances directly into it; you must first create a VSwitch. In Alibaba Cloud, a VSwitch corresponds to an Availability Zone—an independent physical data center facility with its own redundant power, cooling, and network links. By creating vsw-zone-i-primary with a /24 subnet (256 addresses), we establish a dedicated zone subnet ready to host our compute cluster.',
        timestamp: 35
      },
      {
        stepNumber: 3,
        title: 'Security Groups: Stateful Virtual Firewalls',
        codeSnippet: `// Step 3: Authorize Inbound HTTP/HTTPS Traffic
$ aliyun ecs AuthorizeSecurityGroup --SecurityGroupId sg-2ze99ab \\
  --IpProtocol tcp --PortRange 80/80 --SourceCidrIp 0.0.0.0/0`,
        codeOrText: `// Step 3: Authorize Inbound HTTP/HTTPS Traffic
$ aliyun ecs AuthorizeSecurityGroup --SecurityGroupId sg-2ze99ab \\
  --IpProtocol tcp --PortRange 80/80 --SourceCidrIp 0.0.0.0/0`,
        activeLineIndex: 1,
        activeBlockRange: [0, 2],
        callout: 'Security Groups are stateful. When you authorize inbound HTTP traffic on port 80, the return response packets from your web server are automatically allowed out without needing an explicit outbound rule.',
        calloutType: 'warning',
        narration: 'Finally, we enforce security boundaries. A Security Group is a stateful virtual firewall operating at the elastic network interface layer. By default, all inbound traffic from the outside world is blocked. We explicitly authorize ports 80 and 443 for web traffic, while keeping SSH port 22 and database port 3306 restricted solely to your internal bastion host IP.',
        timestamp: 75
      }
    ],
    tasks: [
      {
        id: 'task-vpc-create',
        title: '1. Verify VPC Definition',
        description: 'Verify vpc-production-east is created with CIDR 192.168.0.0/16 in cn-hangzhou.',
        criteria: 'VPC exists in the console inventory.',
        hints: ['Check the VPC tab in the Cloud Console workspace.']
      },
      {
        id: 'task-vsw-create',
        title: '2. Create VSwitch in Zone cn-hangzhou-i',
        description: 'Ensure vsw-zone-i-primary is allocated with 192.168.1.0/24.',
        criteria: 'VSwitch is linked to VPC and available.',
        hints: ['Click Create Resource in the VSwitches tab.']
      }
    ]
  },

  // =========================================================================
  // CATEGORY 2: SCENARIO & DESIGN EXERCISE (Agile & AI Product Management)
  // =========================================================================

  // Agile Development Specialization — M2 C2: Design a Sprint Event Agenda
  {
    id: 'agile-sprint-agenda',
    title: 'Design a Sprint Planning Event Agenda',
    category: 'SCENARIO & DESIGN EXERCISE',
    categoryType: 'scenario_design',
    courseName: 'Agile Development Specialization',
    moduleName: 'Module 2: Running High-Velocity Scrum Events',
    type: 'scenario',
    durationSeconds: 100,
    lessonLabel: 'Agile Development - Mod 02 Ch 02: Design a Sprint Event Agenda',
    objective: 'Design a structured, timeboxed Sprint Planning agenda for a 2-week sprint, defining ceremony phases, participant roles, acceptance criteria, and team capacity alignment.',
    realWorldContext: 'Poorly structured sprint planning leads to scope bloat, developer burnout, and missed release milestones. A crisp, timeboxed agenda keeps cross-functional teams focused on value delivery.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 2',
      chapterBreadcrumb: 'M2 C2: AGILE CEREMONIES',
      topicBreadcrumb: 'SPRINT EVENT AGENDA',
      mainTitle: 'Design a Sprint Event Agenda',
      subtitle: 'Timeboxing, role alignment, and backlog refinement for high-performing engineering teams.',
      inThisLesson: 'Structure the four essential phases of Sprint Planning: Goal Alignment, Story Walkthrough, Capacity & Sizing, and Final Commitment.',
      whyItMatters: 'Sprint Planning sets the entire cadence and morale for the sprint. Unclear deliverables create friction between Product and Engineering.',
      quickOrientation: [
        'For a 2-week sprint, Sprint Planning is strictly timeboxed to a maximum of 2 to 4 hours.',
        'Part 1 answers "What will be delivered?" led by the Product Owner.',
        'Part 2 answers "How will the work be achieved?" owned autonomously by the Development Team.'
      ],
      exploreKeyTopics: [
        {
          title: 'Sprint Goal Definition',
          description: 'Crafting a singular, measurable business objective that unifies the team.'
        },
        {
          title: 'Timebox Discipline',
          description: 'Enforcing strict start and end bounds per ceremony phase to prevent fatigue.'
        },
        {
          title: 'Capacity vs Velocity',
          description: 'Accounting for vacations, holidays, and technical debt in available points.'
        }
      ],
      conceptMap: {
        title: 'Sprint Planning Lifecycle',
        subtitle: 'From Backlog Priority to Locked Commitment',
        nodes: [
          { label: 'Phase 1 (30m)', value: 'Goal & Priority Review' },
          { label: 'Phase 2 (60m)', value: 'Story Deep Dive & Criteria' },
          { label: 'Phase 3 (45m)', value: 'Estimation & Capacity' },
          { label: 'Phase 4 (30m)', value: 'Locked Sprint Backlog' }
        ]
      },
      gettingReady: 'Open the Scenario Studio workspace, configure the ceremony agenda timeline, verify attendee roles, and evaluate the rubric.'
    },
    missionStory: {
      roleTitle: 'Certified Scrum Master',
      scenarioOverview: 'Your distributed fintech engineering team is kicking off Sprint 42. You need to craft a rock-solid, timeboxed Sprint Planning agenda that balances Product Owner business priorities with engineering technical excellence.',
      deliverables: [
        'Define a 4-phase Sprint Planning agenda with strict timebox allocations',
        'Assign required stakeholder roles (Product Owner, Scrum Master, QA, Engineers)',
        'Verify against the Agile Rubric for timebox and completeness compliance'
      ],
      xpReward: 210
    },
    files: [
      {
        name: 'sprint_planning_agenda.md',
        folder: 'practical',
        language: 'text',
        initialContent: `# Sprint 42 Planning Agenda
Sprint Duration: 2 Weeks
Total Timebox: 2 Hours 45 Minutes

## Phase 1: Sprint Goal & Priority Alignment (09:00 - 09:30)
- Attendees: Product Owner, Scrum Master, Full Development Team
- Goal: Align on business problem to solve and verify definition of ready.

## Phase 2: Story Walkthrough & Acceptance Criteria (09:30 - 10:30)
- Deep-dive into top priority user stories.
- Review edge cases, API dependencies, and test vectors.

## Phase 3: Planning Poker & Estimation (10:45 - 11:30)
- Modified Fibonacci sizing.
- Capacity threshold: 42 story points.

## Phase 4: Final Commitment & Retrospective Action (11:30 - 12:00)
- Lock Sprint Backlog.
- Verify Definition of Done.
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'The Purpose of Sprint Planning',
        codeSnippet: `// Sprint Planning Contract:
1. Product Owner presents prioritized backlog and proposes Sprint Goal.
2. Team inspects user stories, clarifies ambiguities, and estimates complexity.
3. Team forecasts work items it can complete within the timebox.`,
        codeOrText: `// Sprint Planning Contract:
1. Product Owner presents prioritized backlog and proposes Sprint Goal.
2. Team inspects user stories, clarifies ambiguities, and estimates complexity.
3. Team forecasts work items it can complete within the timebox.`,
        activeLineIndex: 1,
        activeBlockRange: [0, 2],
        callout: 'The Product Owner owns the "Why" and "What"; the Developers own the "How" and "How Much".',
        calloutType: 'info',
        narration: 'Welcome to the Agile Development Specialization! Many software teams treat Sprint Planning as an endless, unstructured meeting where engineers zone out while tickets are read aloud. In professional Scrum, Sprint Planning is a high-energy collaboration event. In Phase 1, the Product Owner introduces the single most critical business goal of the sprint. This goal gives the team flexibility: if technical roadblocks appear, we adjust the implementation while keeping the core goal intact.',
        timestamp: 0,
        predictionQuestion: {
          id: 'pred-agile-1',
          prompt: 'Who has the ultimate authority to decide how many user stories the team commits to during Sprint Planning?',
          options: [
            {
              id: 'ag1',
              label: 'The Development Team, based on their measured historical velocity and current capacity.',
              isCorrect: true,
              feedback: 'Correct! Scrum is founded on autonomy: only the developers doing the actual work determine how much work they can commit to.'
            },
            {
              id: 'ag2',
              label: 'The Product Owner, based on market deadline requirements.',
              isCorrect: false,
              feedback: 'Incorrect. The Product Owner prioritizes backlog items, but cannot force commitments upon the development team.'
            }
          ]
        }
      },
      {
        stepNumber: 2,
        title: 'Timeboxing & Phase Separation',
        codeSnippet: `// 2-Week Sprint Planning Timebox Table:
- Opening & Goal: 30 minutes
- Story Refinement & Acceptance Criteria: 60 minutes
- Break & Energy Reset: 15 minutes
- Sizing & Capacity Calibration: 45 minutes
- Commitment & Lock: 15 minutes`,
        codeOrText: `// 2-Week Sprint Planning Timebox Table:
- Opening & Goal: 30 minutes
- Story Refinement & Acceptance Criteria: 60 minutes
- Break & Energy Reset: 15 minutes
- Sizing & Capacity Calibration: 45 minutes
- Commitment & Lock: 15 minutes`,
        activeLineIndex: 1,
        activeBlockRange: [0, 4],
        callout: 'A 15-minute bio break between refinement and sizing prevents decision fatigue and produces significantly more accurate story point estimates.',
        calloutType: 'tip',
        narration: 'Timeboxing is the cornerstone of agile rhythm. Notice in our agenda how we deliberately divide the ceremony into bite-sized segments: 30 minutes on goals, 60 minutes on story acceptance criteria, and a crucial 15-minute break before sizing. Without timeboxing, teams spend 90% of their energy debating the first ticket and rush through the remaining ten tickets in panic.',
        timestamp: 35
      },
      {
        stepNumber: 3,
        title: 'Definition of Done & Commitment Lock',
        codeSnippet: `// Definition of Done (DoD) Checklist:
[x] Unit test coverage >= 80%
[x] Peer code review approved by at least 2 senior engineers
[x] Deployed and verified on staging environment
[x] Security scanning and SAST passed with 0 high vulnerabilities`,
        codeOrText: `// Definition of Done (DoD) Checklist:
[x] Unit test coverage >= 80%
[x] Peer code review approved by at least 2 senior engineers
[x] Deployed and verified on staging environment
[x] Security scanning and SAST passed with 0 high vulnerabilities`,
        activeLineIndex: 0,
        activeBlockRange: [0, 3],
        callout: 'No story is considered complete until all criteria in the shared Definition of Done are verified.',
        calloutType: 'warning',
        narration: 'Finally, the meeting concludes with the Commitment Lock. The team reviews the candidate stories against their collective Definition of Done—ensuring unit testing, peer review, and staging verification are factored into every story. Once locked, the sprint backlog belongs to the developers, and the sprint begins with clarity and focus.',
        timestamp: 70
      }
    ],
    tasks: [
      {
        id: 'task-agenda-design',
        title: '1. Review & Customize Agenda Phases',
        description: 'In the Scenario Studio, inspect the 4 ceremony phases and ensure time slots match the 2-week sprint guideline.',
        criteria: 'All 4 phases are configured with timeboxes.',
        hints: ['Click on any agenda card in the Scenario Studio to inspect its details.']
      },
      {
        id: 'task-agenda-commit',
        title: '2. Commit Agenda Specification',
        description: 'Click Commit Step Design to validate the agenda against the Agile Evaluation Rubric.',
        criteria: 'Agenda passes timebox and role inclusivity checks.',
        hints: ['Click Commit Step Design on the right panel.']
      }
    ]
  },

  // Agile Development Specialization — M4 C4: Planning Poker Simulation
  {
    id: 'agile-planning-poker',
    title: 'Planning Poker & User Story Estimation Simulation',
    category: 'SCENARIO & DESIGN EXERCISE',
    categoryType: 'scenario_design',
    courseName: 'Agile Development Specialization',
    moduleName: 'Module 4: Agile Estimation & Velocity Forecasting',
    type: 'scenario',
    durationSeconds: 105,
    lessonLabel: 'Agile Development - Mod 04 Ch 04: Planning Poker Simulation',
    objective: 'Simulate a real-time Planning Poker estimation session, vote with Fibonacci story points on user story complexity, uncover architectural assumptions, and drive consensus.',
    realWorldContext: 'Story points measure relative effort, technical uncertainty, and complexity—not raw hours. Planning Poker eliminates anchoring bias by having all developers reveal their estimates simultaneously.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 4',
      chapterBreadcrumb: 'M4 C4: STORY ESTIMATION',
      topicBreadcrumb: 'PLANNING POKER',
      mainTitle: 'Planning Poker Simulation',
      subtitle: 'Eliminating anchoring bias and reaching consensus with Fibonacci sizing.',
      inThisLesson: 'Vote using Fibonacci cards (1, 2, 3, 5, 8, 13), analyze vote spreads between QA and backend, and converge on team consensus.',
      whyItMatters: 'If the lead engineer speaks first, junior devs anchor to that estimate. Planning Poker guarantees every team member\'s voice is weighed equally.',
      quickOrientation: [
        'Fibonacci scale (1, 2, 3, 5, 8, 13, 21) reflects increasing uncertainty as task size grows.',
        'Simultaneous card reveals prevent cognitive anchoring.',
        'High and low outliers explain their reasoning before a re-vote.'
      ],
      exploreKeyTopics: [
        {
          title: 'Fibonacci Non-Linear Scale',
          description: 'Recognizing that the difference between 1 and 2 is small, but 8 and 13 is vast.'
        },
        {
          title: 'Uncovering Blindspots',
          description: 'When QA votes 8 and dev votes 2, the team uncovers hidden testing dependencies.'
        },
        {
          title: 'Velocity Tracking',
          description: 'Aggregating completed points across sprints to forecast future release dates.'
        }
      ],
      conceptMap: {
        title: 'Planning Poker Flow',
        subtitle: 'Read Story > Private Vote > Simultaneous Reveal > Consensus',
        nodes: [
          { label: 'User Story', value: '#US-204 Multi-Currency' },
          { label: 'Card Scale', value: '1, 2, 3, 5, 8, 13, 21' },
          { label: 'Outlier Discussion', value: 'Resolve 2 vs 8 spread' },
          { label: 'Consensus', value: '5 Story Points' }
        ]
      },
      gettingReady: 'Open the Scenario Studio, cast your estimate card for User Story #US-204, and evaluate the team discussion.'
    },
    missionStory: {
      roleTitle: 'Technical Lead Engineer',
      scenarioOverview: 'You are sizing User Story #US-204: Automated Currency Conversion at Checkout. Your team has revealed their cards with a split between 5 and 8 points. You must cast your vote, evaluate the outlier reasoning, and converge on team consensus.',
      deliverables: [
        'Vote on User Story #US-204 using Fibonacci story points',
        'Analyze variance between Dev Alex (5) and QA Sam (8)',
        'Reach team consensus of 5 story points'
      ],
      xpReward: 220
    },
    files: [
      {
        name: 'user_stories.json',
        folder: 'practical',
        language: 'json',
        initialContent: `{
  "storyId": "US-204",
  "title": "Automated Currency Conversion at Checkout",
  "asA": "Global Buyer",
  "iWant": "Real-time exchange rate calculation at checkout",
  "soThat": "I can pay in my local domestic currency without hidden bank foreign exchange fees",
  "acceptanceCriteria": [
    "Fetch live rates from Forex API with 15-minute in-memory redis cache",
    "Display fee breakdown and exchange rate guaranteed for 10 minutes",
    "Idempotent payment capture via payment gateway"
  ]
}`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'Why Relative Sizing Beats Hours',
        codeSnippet: `// Story Points = Effort + Complexity + Uncertainty
- 1 pt: Trivial text change or config toggle.
- 2 pts: Straightforward feature with known patterns.
- 3 pts: Standard CRUD with automated tests.
- 5 pts: Feature with third-party API integration or schema migration.
- 8 pts: Complex multi-service orchestration with high uncertainty.
- 13+ pts: Too large! Must be split into smaller user stories.`,
        codeOrText: `// Story Points = Effort + Complexity + Uncertainty
- 1 pt: Trivial text change or config toggle.
- 2 pts: Straightforward feature with known patterns.
- 3 pts: Standard CRUD with automated tests.
- 5 pts: Feature with third-party API integration or schema migration.
- 8 pts: Complex multi-service orchestration with high uncertainty.
- 13+ pts: Too large! Must be split into smaller user stories.`,
        activeLineIndex: 3,
        activeBlockRange: [0, 5],
        callout: 'Story points are unitless numbers representing relative effort. Humans are notoriously bad at estimating absolute hours, but great at comparative sizing.',
        calloutType: 'info',
        narration: 'Welcome to Planning Poker! If you ask three engineers how many hours a task will take, a senior engineer might say 4 hours and a junior engineer might say 20 hours. But if you ask them: "Is this task bigger than the login screen we built last week?", they will both immediately agree. That is the magic of relative sizing with story points: it normalizes across different individual developer speeds.',
        timestamp: 0
      },
      {
        stepNumber: 2,
        title: 'Simultaneous Reveal & Outlier Analysis',
        codeSnippet: `// Team Reveal for #US-204:
- Dev Alex: 5 pts ("Standard API integration, we did Stripe last month")
- Dev Priya: 5 pts ("Matches our existing rate caching pattern")
- QA Sam: 8 pts ("Wait, what about Forex API rate-limiting and timeouts in sandbox?")
- Architect Lin: 5 pts ("Circuit breaker handles fallback gracefully")`,
        codeOrText: `// Team Reveal for #US-204:
- Dev Alex: 5 pts ("Standard API integration, we did Stripe last month")
- Dev Priya: 5 pts ("Matches our existing rate caching pattern")
- QA Sam: 8 pts ("Wait, what about Forex API rate-limiting and timeouts in sandbox?")
- Architect Lin: 5 pts ("Circuit breaker handles fallback gracefully")`,
        activeLineIndex: 2,
        activeBlockRange: [0, 4],
        callout: 'Never simply average votes! The value of Planning Poker is the conversation between the high and low voters that uncovers hidden risks.',
        calloutType: 'tip',
        narration: 'Look at the team votes revealed on your screen. Dev Alex and Priya voted 5, but QA Sam voted 8. In traditional meetings, the team might just calculate the mathematical average (6.2) and move on. In Scrum, that is a grave mistake! When Sam explains his vote of 8, he reveals that the sandbox forex provider rate-limits test requests. Lin notes that the circuit breaker pattern mitigates this, satisfying Sam and aligning the entire team at 5.',
        timestamp: 35
      }
    ],
    tasks: [
      {
        id: 'task-poker-vote',
        title: '1. Cast Fibonacci Vote',
        description: 'In the Planning Poker table, select card 5 to match the team consensus for #US-204.',
        criteria: 'Estimate card 5 is submitted.',
        hints: ['Click on card 5 in the Fibonacci Card Deck.']
      },
      {
        id: 'task-poker-consensus',
        title: '2. Verify Consensus State',
        description: 'Verify that the consensus banner displays green and confirms team convergence.',
        criteria: 'Team reaches consensus on 5 points.',
        hints: ['Voting 5 triggers the green consensus confirmation.']
      }
    ]
  },

  // AI Product Management — M4 C1: Design an Annotation Guideline for Customer-Service AI
  {
    id: 'ai-pm-annotation',
    title: 'Design Annotation Guidelines for Customer-Service AI',
    category: 'SCENARIO & DESIGN EXERCISE',
    categoryType: 'scenario_design',
    courseName: 'AI Product Management Specialization',
    moduleName: 'Module 4: Data Strategy & Human-in-the-Loop Annotation',
    type: 'scenario',
    durationSeconds: 110,
    lessonLabel: 'AI Product Management - Mod 04 Ch 01: Annotation Guideline Design',
    objective: 'Create a comprehensive labeling guideline taxonomy for customer service intent classification, defining disambiguation rules, multi-intent edge cases, and human-in-the-loop QA rubrics.',
    realWorldContext: 'Garbage in, garbage out: machine learning models reflect the consistency of their training data. Clear annotation guidelines prevent human labeler ambiguity and boost model F1 scores.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 4',
      chapterBreadcrumb: 'M4 C1: AI DATA STRATEGY',
      topicBreadcrumb: 'ANNOTATION GUIDELINES',
      mainTitle: 'Design AI Annotation Guidelines',
      subtitle: 'Intent taxonomies, edge-case disambiguation, and labeling quality assurance.',
      inThisLesson: 'Define mutually exclusive intent labels (Billing, Technical Support, Returns, General Inquiry) and resolve ambiguous customer queries.',
      whyItMatters: 'Annotation inconsistency is the #1 cause of production NLP model degradation. Clear guidelines save hundreds of engineering hours.',
      quickOrientation: [
        'Intents must follow the MECE principle: Mutually Exclusive, Collectively Exhaustive.',
        'Negative examples and edge-case boundaries are more important than obvious positive examples.',
        'Inter-Annotator Agreement (Cohen\'s Kappa) measures guideline clarity.'
      ],
      exploreKeyTopics: [
        {
          title: 'Intent Taxonomy',
          description: 'Categorizing customer utterances into actionable workflow routes.'
        },
        {
          title: 'Edge-Case Disambiguation',
          description: 'Handling sarcastic, multi-intent, or emotionally charged messages.'
        },
        {
          title: 'Cohen\'s Kappa Validation',
          description: 'Ensuring different human annotators label identical samples consistently.'
        }
      ],
      conceptMap: {
        title: 'Data Curation Pipeline',
        subtitle: 'Raw Query > Guideline Rules > Human Label > Golden Dataset',
        nodes: [
          { label: 'Raw Customer Query', value: '"Cancel order & refund me"' },
          { label: 'Guideline Rule', value: 'Multi-intent: Route to Returns' },
          { label: 'Primary Intent', value: 'Refund_Request (MECE)' },
          { label: 'Quality Metric', value: 'Kappa Score > 0.85' }
        ]
      },
      gettingReady: 'Open the Scenario Studio workspace, examine the intent taxonomy, and commit the guideline specification.'
    },
    missionStory: {
      roleTitle: 'AI Product Manager',
      scenarioOverview: 'You are deploying an automated customer support NLP routing system for an international airline. You must author the annotation instructions that 50 external human labelers will follow to label 100,000 incoming support tickets.',
      deliverables: [
        'Formulate intent taxonomy rules with negative boundaries',
        'Specify disambiguation instructions for multi-intent tickets',
        'Verify annotation quality rubric'
      ],
      xpReward: 230
    },
    files: [
      {
        name: 'annotation_guidelines.md',
        folder: 'practical',
        language: 'text',
        initialContent: `# Customer Service AI Annotation Guideline
Version: 1.0 (Production Release)

## Core Intent Classes (MECE)
1. BILLING_INQUIRY: Invoices, payment errors, card declines.
2. REFUND_REQUEST: Explicit requests to return money or dispute charges.
3. FLIGHT_CHANGE: Rescheduling dates, seat upgrades, route changes.
4. BAGGAGE_CLAIM: Lost luggage, damaged baggage claims.

## Disambiguation Rules for Edge Cases
- Rule 1 (Multi-Intent): If a user says "My flight was delayed and I want a refund", label as REFUND_REQUEST because financial restitution takes precedence.
- Rule 2 (Emotional Outbursts): Disregard profanity or frustration; identify the underlying functional verb.
- Rule 3 (Uncertainty): If query contains fewer than 3 words and lacks context (e.g. "Help me"), label as NEEDS_CLARIFICATION.
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'The MECE Principle in Intent Taxonomy',
        codeSnippet: `// MECE: Mutually Exclusive, Collectively Exhaustive
- Mutually Exclusive: Every customer message belongs to exactly ONE primary intent.
- Collectively Exhaustive: There is no valid customer message that cannot be categorized.`,
        codeOrText: `// MECE: Mutually Exclusive, Collectively Exhaustive
- Mutually Exclusive: Every customer message belongs to exactly ONE primary intent.
- Collectively Exhaustive: There is no valid customer message that cannot be categorized.`,
        activeLineIndex: 0,
        activeBlockRange: [0, 2],
        callout: 'If annotators are frequently torn between two categories, your categories overlap and must be merged or redefined.',
        calloutType: 'info',
        narration: 'Welcome to AI Product Management Module 4! When non-technical managers hear "AI project", they immediately think of fine-tuning LLMs or tuning neural network hyper-parameters. But as an AI Product Manager, your highest leverage activity is defining the data annotation guidelines. If your guidelines are ambiguous, your annotators will provide contradictory labels, and your model will oscillate randomly. We enforce the MECE principle to ensure unambiguous classification.',
        timestamp: 0
      }
    ],
    tasks: [
      {
        id: 'task-anno-review',
        title: '1. Review Intent Categories',
        description: 'Verify MECE intent classes and disambiguation rules in the Scenario Studio.',
        criteria: 'Guideline covers core classes and edge cases.',
        hints: ['Review the cards in Scenario Studio.']
      },
      {
        id: 'task-anno-commit',
        title: '2. Commit Guideline Specification',
        description: 'Commit the annotation guideline to finalize the human-in-the-loop contract.',
        criteria: 'Guideline submitted successfully.',
        hints: ['Click Commit Step Design in the right panel.']
      }
    ]
  },

  // =========================================================================
  // CATEGORY 3: TERMINAL CODING LAB (C Systems & Compilation Pipelines)
  // =========================================================================

  // C Programming with Linux Specialization — M1 C3: Compile and run your first C program
  {
    id: 'c-linux-first-program',
    title: 'Compile and Run Your First C Program in Linux',
    category: 'TERMINAL CODING LAB',
    categoryType: 'terminal_coding',
    courseName: 'C Programming with Linux Specialization',
    moduleName: 'Module 1: Getting Started with C on Linux',
    type: 'c_program',
    durationSeconds: 95,
    lessonLabel: 'C Programming with Linux - Mod 01 Ch 03: First C Program',
    objective: 'Write a valid C source file with #include <stdio.h>, compile it using clang/gcc into an ELF machine binary, and run it in the simulated Linux shell.',
    realWorldContext: 'Linux systems programming, embedded firmware, database kernels, and game engines are written in C. Understanding the compilation pipeline from source to machine binary is mandatory for all systems engineers.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 1',
      chapterBreadcrumb: 'M1 C3: LINUX C',
      topicBreadcrumb: 'COMPILE & RUN',
      mainTitle: 'Compile & Run Your First C Program',
      subtitle: 'From human-readable source code to native Linux machine instructions.',
      inThisLesson: 'Type C source code in the editor, invoke the compiler with clang hello.c -o hello, and execute ./hello in bash.',
      whyItMatters: 'Unlike interpreted languages like Python or JavaScript, C source code must be compiled into native CPU machine instructions before execution.',
      quickOrientation: [
        'Source code is saved in human-readable ASCII text with a .c file extension.',
        'clang or gcc parses source code, validates syntax, and produces an ELF executable binary.',
        './hello instructs Linux to execute the binary file located in the current working directory.'
      ],
      exploreKeyTopics: [
        {
          title: 'Source Text (.c)',
          description: '#include <stdio.h> provides standard I/O library definitions.'
        },
        {
          title: 'Compiler Pipeline',
          description: 'Preprocessing > Compilation > Assembly > Linking to create native binary.'
        },
        {
          title: 'Execution & Exit Code',
          description: 'The return 0 statement signals to Linux that the program exited with zero errors.'
        }
      ],
      conceptMap: {
        title: 'Compilation Flow',
        subtitle: 'Source Code > Native Binary > Operating System Execution',
        nodes: [
          { label: 'Source File', value: 'hello.c' },
          { label: 'Compiler Command', value: 'clang hello.c -o hello' },
          { label: 'ELF Binary', value: 'hello (machine code)' },
          { label: 'Execution', value: './hello → "hello, world\\n"' }
        ]
      },
      gettingReady: 'Open hello.c in the editor, review the main function, type clang hello.c -o hello in the terminal, and run ./hello.'
    },
    missionStory: {
      roleTitle: 'Systems Software Apprentice',
      scenarioOverview: 'You are writing and compiling your very first program on a Linux workstation. You will craft hello.c, invoke the clang compiler to produce machine instructions, and execute the generated binary.',
      deliverables: [
        'Ensure hello.c contains #include <stdio.h> and main()',
        'Compile with clang hello.c -o hello in the terminal',
        'Execute ./hello and inspect the output stream'
      ],
      xpReward: 180
    },
    files: [
      {
        name: 'hello.c',
        folder: 'practical',
        language: 'text',
        initialContent: `#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
    return 0;
}
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'Classroom Orientation & C Syntax',
        codeSnippet: `// Module 1 > Chapter 1.3 > First C Program
#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
    return 0;
}`,
        codeOrText: `// Module 1 > Chapter 1.3 > First C Program
#include <stdio.h>

int main(void)
{
    printf("hello, world\\n");
    return 0;
}`,
        activeLineIndex: 1,
        activeBlockRange: [0, 6],
        callout: 'C is a compiled language: your computer\'s processor cannot execute .c files directly. It only understands binary machine instructions.',
        calloutType: 'info',
        narration: 'Welcome to C Programming with Linux! Today we write, compile, and execute our very first C program. Unlike Python, which interprets instructions line by line, C is compiled ahead of time. Line 2 includes stdio.h, which gives us access to printf. Line 4 declares main, the single entry point where the Linux kernel begins executing our program.',
        timestamp: 0,
        predictionQuestion: {
          id: 'pred-c-1',
          prompt: 'What happens if you omit the #include <stdio.h> header in a standard C program that calls printf?',
          options: [
            {
              id: 'cp1',
              label: 'The compiler issues a warning or error because printf has not been declared.',
              isCorrect: true,
              feedback: 'Correct! Without stdio.h, the compiler does not know the parameter types or return signature of printf.'
            },
            {
              id: 'cp2',
              label: 'The program compiles without issue because printf is built into the CPU.',
              isCorrect: false,
              feedback: 'Incorrect. printf is a standard C library function, not a CPU instruction.'
            }
          ]
        }
      },
      {
        stepNumber: 2,
        title: 'The Compilation Step (clang / gcc)',
        codeSnippet: `$ clang hello.c -o hello
$ ls -l
-rw-r--r-- 1 student student 84 Oct 27 hello.c
-rwxr-xr-x 1 student student 16400 Oct 27 hello`,
        codeOrText: `$ clang hello.c -o hello
$ ls -l
-rw-r--r-- 1 student student 84 Oct 27 hello.c
-rwxr-xr-x 1 student student 16400 Oct 27 hello`,
        activeLineIndex: 0,
        activeBlockRange: [0, 3],
        callout: 'The -o flag specifies the output binary name. If omitted, the compiler defaults to creating a.out.',
        calloutType: 'tip',
        narration: 'Now observe the compilation command: clang hello.c -o hello. The compiler performs four stages: preprocessing header macros, compiling C statements into assembly, assembling into machine object code, and linking the C runtime library. Notice the permissions on the newly created hello file: the \'x\' flag marks it as an executable binary ready for CPU execution.',
        timestamp: 35
      },
      {
        stepNumber: 3,
        title: 'Running the Binary in Linux Shell',
        codeSnippet: `$ ./hello
hello, world
$ echo $?
0`,
        codeOrText: `$ ./hello
hello, world
$ echo $?
0`,
        activeLineIndex: 0,
        activeBlockRange: [0, 3],
        callout: 'In Linux, echo $? prints the exit status of the previous command. An exit status of 0 signifies success.',
        calloutType: 'info',
        narration: 'Finally, we type ./hello into our Linux shell. The dot refers to the current directory, and the forward slash indicates we want to execute the binary right here. The Linux kernel loads the ELF binary into RAM, executes main, writes "hello, world" to standard output, and returns exit code 0.',
        timestamp: 65
      }
    ],
    tasks: [
      {
        id: 'task-c-write',
        title: '1. Verify hello.c Source Code',
        description: 'Open hello.c and ensure #include <stdio.h> and printf are present.',
        criteria: 'hello.c is syntactically complete.',
        hints: ['Check that #include <stdio.h> is at the top of hello.c.']
      },
      {
        id: 'task-c-compile',
        title: '2. Compile hello.c in Terminal',
        description: 'In the terminal prompt, type: clang hello.c -o hello',
        criteria: 'Compilation command executed successfully.',
        hints: ['Type: clang hello.c -o hello into the terminal.']
      },
      {
        id: 'task-c-run',
        title: '3. Execute ./hello Binary',
        description: 'In the terminal prompt, type: ./hello and verify output.',
        criteria: 'Program executes and prints "hello, world".',
        hints: ['Type: ./hello in the terminal.']
      }
    ]
  },

  // CS50 Introduction to Computer Science — Mod 01 Ch 03: Variables, Data Types & Calculator in C
  {
    id: 'ch1-3-calculator',
    title: 'C Variables, Data Types, and User Input',
    category: 'TERMINAL CODING LAB',
    categoryType: 'terminal_coding',
    courseName: "CS50's Introduction to Computer Science",
    moduleName: 'Module 1: C Foundations & Memory',
    type: 'c_program',
    durationSeconds: 95,
    lessonLabel: 'CS50 Introduction to Computer Science - Mod 01 Ch 03: Variables and Input in C',
    objective: 'Declare typed variables (int, float), capture user input using scanf() with the memory address-of operator (&), and perform explicit type casting to avoid integer division truncation.',
    realWorldContext: 'Every program needs to process dynamic input. Understanding C data types and how scanf writes to memory addresses is essential for building fast, secure software.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 1',
      chapterBreadcrumb: 'CHAPTER 1.3',
      topicBreadcrumb: 'VARIABLES & SCANF',
      mainTitle: 'Variables, Data Types & User Input in C',
      subtitle: 'Capturing keyboard input, understanding memory addresses (&), and type casting.',
      inThisLesson: 'Declare integer variables, prompt user with scanf("%i", &num1), and compute precise float division with (float)num1 / num2.',
      whyItMatters: 'Integer division in C truncates remainders (10 / 3 becomes 3). Forgetting & in scanf causes memory segmentation faults.',
      quickOrientation: [
        'int stores 32-bit whole numbers; float stores single-precision decimal values.',
        'scanf requires the memory address (&) of the variable where user input will be stored.',
        'Casting (float)num1 converts integer division into floating-point division.'
      ],
      exploreKeyTopics: [
        {
          title: 'Memory Addresses (&)',
          description: 'The & operator provides the memory location where scanf writes input bytes.'
        },
        {
          title: 'Type Truncation',
          description: 'Dividing two ints in C drops the decimal remainder (10 / 3 = 3).'
        },
        {
          title: 'Explicit Casting',
          description: 'Using (float)num1 / num2 forces floating-point arithmetic (3.333333).'
        }
      ],
      conceptMap: {
        title: 'Data & Input Flow',
        subtitle: 'Keyboard > RAM Address > Arithmetic > Output',
        nodes: [
          { label: 'User Input', value: '10 and 3' },
          { label: 'Memory Storage', value: 'scanf writes to &num1, &num2' },
          { label: 'Integer Math', value: '10 + 3 = 13' },
          { label: 'Float Division', value: '(float)10 / 3 = 3.33' }
        ]
      },
      gettingReady: 'Open calculator.c, inspect scanf and (float) casting, compile with clang, and test with numbers.'
    },
    missionStory: {
      roleTitle: 'Systems Software Engineer',
      scenarioOverview: 'You are building a high-precision arithmetic utility for an avionics navigation computer. You must capture user coordinates, prevent integer truncation, and safely write user inputs into memory addresses.',
      deliverables: [
        'Capture inputs using scanf("%i", &num1) and scanf("%i", &num2)',
        'Compute sum and use explicit float casting (float)num1 / num2',
        'Compile with clang calculator.c -o calculator and test with inputs 10 and 3'
      ],
      xpReward: 190
    },
    files: [
      {
        name: 'calculator.c',
        folder: 'practical',
        language: 'text',
        initialContent: `#include <stdio.h>

int main(void)
{
    int num1, num2;

    printf("Enter the first integer: ");
    scanf("%i", &num1);

    printf("Enter the second integer: ");
    scanf("%i", &num2);

    int sum = num1 + num2;
    float quotient = (float)num1 / num2;

    printf("Sum: %i\\n", sum);
    printf("Quotient: %.2f\\n", quotient);

    return 0;
}
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'Declaring Variables & Memory Allocation',
        codeSnippet: `int num1, num2;
// In C, declaring an int reserves 4 bytes (32 bits) of stack memory.`,
        codeOrText: `int num1, num2;
// In C, declaring an int reserves 4 bytes (32 bits) of stack memory.`,
        activeLineIndex: 0,
        activeBlockRange: [0, 1],
        callout: 'Variables declared without initialization contain leftover garbage memory until assigned or written by scanf.',
        calloutType: 'info',
        narration: 'Welcome to CS50 Chapter 1.3! In high-level languages like Python or JavaScript, you can simply declare a variable without specifying its type. But C gives you direct control over hardware memory. When we write int num1, num2;, the compiler instructs the operating system to reserve two 4-byte slots in RAM.',
        timestamp: 0
      },
      {
        stepNumber: 2,
        title: 'User Input & The & Address-of Operator',
        codeSnippet: `printf("Enter the first integer: ");
scanf("%i", &num1); // Notice the & before num1`,
        codeOrText: `printf("Enter the first integer: ");
scanf("%i", &num1); // Notice the & before num1`,
        activeLineIndex: 1,
        activeBlockRange: [0, 1],
        callout: 'scanf needs the memory address (&) of the variable to write user input.',
        calloutType: 'warning',
        narration: 'Look closely at line 2: scanf("%i", &num1). The ampersand \'&\' is the address-of operator. In C, functions cannot modify arguments by value; scanf needs to know WHERE in memory num1 lives so it can deposit the bytes. Forgetting \'&\' is the #1 cause of segmentation faults for beginners!',
        timestamp: 30,
        predictionQuestion: {
          id: 'pred-calc-1',
          prompt: 'What happens if you accidentally omit the & in scanf("%i", num1)?',
          options: [
            {
              id: 'cq1',
              label: 'Segmentation fault or memory corruption (scanf tries to write to garbage address).',
              isCorrect: true,
              feedback: 'Correct! Without &, scanf treats the uninitialized value of num1 as a memory pointer, causing a crash.'
            },
            {
              id: 'cq2',
              label: 'C automatically corrects it to &num1.',
              isCorrect: false,
              feedback: 'Incorrect. C does not perform automatic reference fixing.'
            }
          ]
        }
      },
      {
        stepNumber: 3,
        title: 'Preventing Integer Division Truncation',
        codeSnippet: `// Integer division drops remainder: 10 / 3 = 3
// Explicit type casting forces float arithmetic:
float quotient = (float)num1 / num2; // Result: 3.333333`,
        codeOrText: `// Integer division drops remainder: 10 / 3 = 3
// Explicit type casting forces float arithmetic:
float quotient = (float)num1 / num2; // Result: 3.333333`,
        activeLineIndex: 2,
        activeBlockRange: [0, 2],
        callout: 'Without (float), 10 / 3 evaluates to 3, and only then converts to 3.000000, losing decimal precision.',
        calloutType: 'tip',
        narration: 'Notice how we calculate the quotient: float quotient = (float)num1 / num2;. If you simply write num1 / num2, C divides an integer by an integer, which discards the fractional part completely. By prefixing num1 with (float), we promote the calculation to floating-point arithmetic.',
        timestamp: 65
      }
    ],
    tasks: [
      {
        id: 'task-calc-write',
        title: '1. Verify calculator.c Source',
        description: 'Open calculator.c and verify scanf with & and (float) casting.',
        criteria: 'calculator.c contains proper syntax.',
        hints: ['Check that (float)num1 / num2 is present.']
      },
      {
        id: 'task-calc-compile',
        title: '2. Compile calculator.c in Terminal',
        description: 'In terminal, type: clang calculator.c -o calculator',
        criteria: 'Compilation succeeds without warnings.',
        hints: ['Type: clang calculator.c -o calculator']
      },
      {
        id: 'task-calc-run',
        title: '3. Run ./calculator with Inputs',
        description: 'Run ./calculator and test with numbers 10 and 3.',
        criteria: 'Program executes and produces Quotient: 3.33.',
        hints: ['Run ./calculator in the terminal.']
      }
    ]
  },

  // =========================================================================
  // CATEGORY 4: RESEARCH & ANALYSIS (Arduino Hardware & Financial Data)
  // =========================================================================

  // Arduino Programming — M1 C1: Real-World Sensor & Actuator Project Taxonomy
  {
    id: 'arduino-project-taxonomy',
    title: 'Embedded Sensors & Actuator Hardware Taxonomy',
    category: 'RESEARCH & ANALYSIS',
    categoryType: 'research_analysis',
    courseName: 'Arduino Programming Specialization',
    moduleName: 'Module 1: Embedded Hardware & Physical Computing',
    type: 'scenario',
    durationSeconds: 105,
    lessonLabel: 'Arduino Programming - Mod 01 Ch 01: Hardware Taxonomy',
    objective: 'Analyze and document real-world Arduino hardware components (sensors, actuators, communication buses, and power budgets), ensuring electrical compatibility and pinout safety.',
    realWorldContext: 'Building real-world IoT hardware requires synthesizing electrical datasheets, calculating voltage regulators and current draws, and avoiding GPIO pin conflicts before soldering components.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 1',
      chapterBreadcrumb: 'M1 C1: EMBEDDED HARDWARE',
      topicBreadcrumb: 'HARDWARE TAXONOMY',
      mainTitle: 'Sensors & Actuator Hardware Taxonomy',
      subtitle: 'Electrical datasheets, power budgeting, and communication bus protocols in Arduino.',
      inThisLesson: 'Cross-examine input sensors (ultrasonic, temperature), output actuators (servos, OLED displays), and calculate total current headroom.',
      whyItMatters: 'Exceeding the 500mA USB current limit or 40mA per-pin GPIO limit damages microcontroller boards permanently.',
      quickOrientation: [
        'Sensors convert physical phenomena (heat, distance, light) into electrical voltages.',
        'Actuators convert electrical signals into mechanical physical motion or display output.',
        'Every component must be checked for voltage (3.3V vs 5V) and current draw.'
      ],
      exploreKeyTopics: [
        {
          title: 'Power Budgeting',
          description: 'Calculating aggregate milliamp draw against Arduino 5V regulator limits.'
        },
        {
          title: 'I2C vs SPI vs PWM',
          description: 'Selecting appropriate digital communication interfaces for multiple peripherals.'
        },
        {
          title: 'Level Shifting',
          description: 'Protecting 3.3V sensitive sensors from 5V logic damage.'
        }
      ],
      conceptMap: {
        title: 'Embedded System Architecture',
        subtitle: 'Inputs > Microcontroller Processing > Outputs',
        nodes: [
          { label: 'Inputs (Sensors)', value: 'HC-SR04 (15mA) + DHT22 (2.5mA)' },
          { label: 'Microcontroller', value: 'Arduino Uno (ATmega328P)' },
          { label: 'Outputs (Actuators)', value: 'SG90 Servo + SSD1306 OLED' },
          { label: 'Power Limit', value: 'Total 287.5mA < 500mA USB Max' }
        ]
      },
      gettingReady: 'Open the Research Dossier workspace, review the component datasheet table, formulate your hypothesis, and verify the power budget.'
    },
    missionStory: {
      roleTitle: 'Embedded Systems Research Engineer',
      scenarioOverview: 'You are designing an autonomous smart greenhouse monitoring module using Arduino. You must analyze the technical datasheets for the sensors and actuators, verify power consumption, and synthesize hardware recommendations.',
      deliverables: [
        'Examine electrical specifications in the Tabular Data tab',
        'Formulate a power budget hypothesis in the Analysis Notebook',
        'Verify that peak current draw remains within USB 500mA headroom'
      ],
      xpReward: 215
    },
    files: [
      {
        name: 'hardware_dossier.md',
        folder: 'practical',
        language: 'text',
        initialContent: `# Arduino Hardware Research Dossier
Project: Smart Greenhouse Telemetry Unit

## Component Inventory
1. HC-SR04 Ultrasonic Distance Sensor (5V, 15mA)
2. DHT22 Temperature & Humidity Sensor (3.3V-5V, 2.5mA)
3. SG90 Micro Servo Actuator (5V, 250mA peak stall)
4. SSD1306 0.96" I2C OLED Display (3.3V, 20mA)

## Electrical Analysis Findings
- Total continuous sensor draw: 17.5mA
- Peak system load with active servo: 287.5mA
- Arduino Uno 5V regulator capacity (USB): 500mA
- Headroom safety margin: 212.5mA (Viable without external power rail for bench testing)
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'Sensor & Actuator Fundamentals',
        codeSnippet: `// Hardware Classification:
- Input Sensors: Convert physical phenomena to electrical signals (analog voltage or digital pulse).
- Output Actuators: Convert electrical signals into mechanical motion, light, or sound.
- Bus Protocols: I2C (2 wires, addressable), SPI (4 wires, fast), GPIO Digital / PWM.`,
        codeOrText: `// Hardware Classification:
- Input Sensors: Convert physical phenomena to electrical signals (analog voltage or digital pulse).
- Output Actuators: Convert electrical signals into mechanical motion, light, or sound.
- Bus Protocols: I2C (2 wires, addressable), SPI (4 wires, fast), GPIO Digital / PWM.`,
        activeLineIndex: 0,
        activeBlockRange: [0, 3],
        callout: 'Never draw more than 40mA from a single Arduino GPIO pin; use transistors or external drivers for motors.',
        calloutType: 'warning',
        narration: 'Welcome to Arduino Programming Module 1! In the software world, bugs produce error messages on your screen. In embedded hardware, an electrical bug can physically fry your microcontroller! That is why professional engineers always begin with a hardware research dossier. We catalog every sensor and actuator, verify operating voltages (5V versus 3.3V), and calculate current draws before writing a single line of C code.',
        timestamp: 0
      }
    ],
    tasks: [
      {
        id: 'task-ard-table',
        title: '1. Inspect Hardware Datasheet Table',
        description: 'In the Research Dossier, open the Tabular Data tab and inspect the component voltages and currents.',
        criteria: 'Tabular data reviewed.',
        hints: ['Switch to Tabular Data in the Research Dossier.']
      },
      {
        id: 'task-ard-verify',
        title: '2. Verify Hardware Synthesis',
        description: 'Click Submit Findings to validate the electrical power calculation.',
        criteria: 'Synthesis reviewed and validated.',
        hints: ['Click Submit Findings in the Analysis Notebook.']
      }
    ]
  },

  // Applied Data Science with Python — M2 C2: Stock-Price Analysis with NumPy & Pandas
  {
    id: 'python-stock-analysis',
    title: 'Stock-Price Time-Series Analysis & Volatility',
    category: 'RESEARCH & ANALYSIS',
    categoryType: 'research_analysis',
    courseName: 'Applied Data Science with Python',
    moduleName: 'Module 2: NumPy & Pandas Financial Time-Series',
    type: 'scenario',
    durationSeconds: 110,
    lessonLabel: 'Applied Data Science - Mod 02 Ch 02: Stock-Price Time-Series Analysis',
    objective: 'Analyze financial equity time-series data using tabular methods, compute daily returns, identify price trends, and calculate annualized volatility metrics.',
    realWorldContext: 'Quantitative analysts and data scientists analyze historical pricing data to assess risk, calculate Sharpe ratios, and forecast portfolio variance using Python libraries.',
    classroom: {
      classroomBadge: '16:9 HD CLASSROOM',
      moduleBadge: 'MODULE 2',
      chapterBreadcrumb: 'M2 C2: FINANCIAL DATA',
      topicBreadcrumb: 'STOCK TIME-SERIES',
      mainTitle: 'Stock-Price Time-Series Analysis',
      subtitle: 'Daily returns, moving averages, and volatility metrics in empirical financial data.',
      inThisLesson: 'Inspect daily price candles (Open, High, Low, Close, Volume), calculate percentage returns, and document quantitative findings.',
      whyItMatters: 'Raw prices are non-stationary; calculating percentage returns and volatility transforms price series into stationary distributions for machine learning.',
      quickOrientation: [
        'Daily Return = (Close_t - Close_{t-1}) / Close_{t-1} * 100%.',
        'Volatility measures the standard deviation of daily returns annualized by sqrt(252).',
        'Volume spikes accompanying price breakouts confirm institutional conviction.'
      ],
      exploreKeyTopics: [
        {
          title: 'Daily Percentage Returns',
          description: 'Normalizing asset price movements into stationary percentage returns.'
        },
        {
          title: 'Annualized Volatility',
          description: 'Multiplying standard deviation of daily returns by sqrt(252 trading days).'
        },
        {
          title: 'Volume Analysis',
          description: 'Cross-referencing trading volume with upward price momentum.'
        }
      ],
      conceptMap: {
        title: 'Financial Data Pipeline',
        subtitle: 'OHLCV Feed > Returns Transformation > Risk Metrics',
        nodes: [
          { label: 'Raw Feed', value: 'Daily OHLCV Data' },
          { label: 'Return Metric', value: '7-Day Return: +2.56%' },
          { label: 'Risk Metric', value: 'Annualized Vol: 9.84%' },
          { label: 'Synthesis', value: 'Low drawdown momentum' }
        ]
      },
      gettingReady: 'Open the Research Dossier, switch to Tabular Data, inspect the 7-day stock price table, and verify synthesis findings.'
    },
    missionStory: {
      roleTitle: 'Quantitative Data Analyst',
      scenarioOverview: 'You are analyzing daily price trends for a leading cloud technology company across 7 consecutive trading sessions. You must calculate the cumulative return, evaluate daily return variance, and formulate investment recommendations.',
      deliverables: [
        'Analyze OHLC price movements in the Tabular Data viewer',
        'Document empirical return findings in the Analysis Notebook',
        'Submit findings to verify financial conclusions'
      ],
      xpReward: 225
    },
    files: [
      {
        name: 'stock_analysis.csv',
        folder: 'practical',
        language: 'text',
        initialContent: `Date,Open,High,Low,Close,Volume,Return
2025-01-02,182.4,184.2,181.8,183.9,48.2M,+0.82%
2025-01-03,184.0,185.1,183.2,184.5,42.1M,+0.33%
2025-01-06,185.2,186.7,184.9,186.3,51.8M,+0.98%
2025-01-07,186.5,187.4,185.5,185.8,39.4M,-0.27%
2025-01-08,185.9,188.1,185.7,187.9,56.3M,+1.13%
2025-01-09,188.0,189.5,187.4,189.2,62.7M,+0.69%
2025-01-10,189.0,190.2,188.1,188.6,44.9M,-0.32%
`
      }
    ],
    walkthroughSteps: [
      {
        stepNumber: 1,
        title: 'Financial Time-Series & Returns Calculation',
        codeSnippet: `// Python Pandas Financial Formula:
df['Return'] = df['Close'].pct_change()
cumulative_return = (df['Close'].iloc[-1] / df['Close'].iloc[0]) - 1
annualized_vol = df['Return'].std() * np.sqrt(252)`,
        codeOrText: `// Python Pandas Financial Formula:
df['Return'] = df['Close'].pct_change()
cumulative_return = (df['Close'].iloc[-1] / df['Close'].iloc[0]) - 1
annualized_vol = df['Return'].std() * np.sqrt(252)`,
        activeLineIndex: 1,
        activeBlockRange: [0, 3],
        callout: 'Raw prices wander over time and cannot be compared directly across different stocks. Percentage returns provide a stationary, normalized benchmark.',
        calloutType: 'info',
        narration: 'Welcome to Applied Data Science with Python! In financial engineering, amateur traders look at raw stock prices, but quantitative data scientists study percentage returns. A $2 rise on a $20 stock is a massive 10% gain, while a $2 rise on a $200 stock is just 1%. By computing percentage changes and annualizing volatility with the square root of 252 trading days, we can mathematically quantify risk versus return.',
        timestamp: 0
      }
    ],
    tasks: [
      {
        id: 'task-stock-table',
        title: '1. Inspect OHLCV Price Table',
        description: 'In the Research Dossier, open the Tabular Data tab and observe the close prices and daily returns.',
        criteria: 'Tabular data inspected.',
        hints: ['Click Tabular Data in the left pane.']
      },
      {
        id: 'task-stock-submit',
        title: '2. Verify Analysis Synthesis',
        description: 'Submit your empirical findings in the Analysis Notebook to validate conclusions.',
        criteria: 'Analysis verified and passed.',
        hints: ['Click Submit Findings in the right pane.']
      }
    ]
  }
];
