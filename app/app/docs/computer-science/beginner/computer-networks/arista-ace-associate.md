---
title: Arista ACE – Associate
course_id: arista-ace-associate
provider: Cohortia
original_reference: Arista / Online
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Computer Networks
skills: Network Fundamentals, Arista EOS, Command Line Interface (CLI), VLANs, Spanning Tree Protocol (STP), Link Aggregation (LAG), IP Addressing, Static Routing, OSPF Basics, Network Monitoring, Troubleshooting, Basic Network Automation, Data Center Networking
ownership_note: Cohortia curates and rebuilds the content and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to the Cohortia "Arista ACE – Associate" course, your foundational journey into the world of high-performance networking with Arista Networks' Extensible Operating System (EOS). In today's rapidly evolving digital landscape, robust and scalable network infrastructure is paramount, especially within modern data centers and cloud environments. Arista Networks is a leader in this space, known for its innovative hardware and the highly programmable, open-source-friendly EOS. This course is meticulously designed to equip you with the essential knowledge and practical skills required to understand, configure, and manage Arista network devices, laying a solid groundwork for a career in network engineering or administration.

This comprehensive curriculum begins by demystifying the core principles of modern networking and introduces you to the unique architecture and advantages of Arista EOS. You'll gain hands-on experience navigating the Arista Command Line Interface (CLI), performing initial device setup, and managing the device lifecycle. We then delve into fundamental Layer 2 switching concepts, including VLANs, trunking, and essential protocols like Spanning Tree Protocol (STP) and Link Aggregation Groups (LAGs), all within the context of Arista's best practices. The course progressively builds your expertise by exploring IP addressing, basic Layer 3 routing with static routes and an introduction to OSPF, and critical high availability features such as Multi-Chassis Link Aggregation Group (MLAG) and Virtual Router Redundancy Protocol (VRRP).

Beyond configuration, we emphasize the operational aspects of network management. You'll learn how to effectively monitor network health, interpret system logs, and apply systematic troubleshooting methodologies to diagnose and resolve common network issues on Arista platforms. Furthermore, the course provides an initial glimpse into network automation concepts, demonstrating how Arista EOS facilitates programmability and simplifies complex tasks. By the end of this course, you will not only be proficient in basic Arista device management but also possess a deeper understanding of the underlying networking principles that drive modern data centers, preparing you for the Arista ACE certification and further specialization in network engineering.

This course is ideal for aspiring network engineers, system administrators, and IT professionals who are new to Arista Networks or seeking to solidify their foundational networking knowledge with a focus on modern data center technologies. No prior experience with Arista EOS is required, though a basic understanding of general networking concepts (like IP addresses, switches, and routers) will be beneficial. Through a blend of theoretical explanations, practical demonstrations, and hands-on exercises, you will develop the confidence and competence to configure and manage Arista switches and routers effectively, setting you on a path to becoming an Arista Certified Engineer.

Upon successful completion of this course, you will be able to:

*   Explain the architecture and key features of Arista EOS and its role in modern data center networks.
*   Navigate the Arista CLI, perform initial device setup, and manage basic device operations.
*   Configure and verify Layer 2 switching technologies, including VLANs, trunking, and EtherChannel (LAG).
*   Implement and troubleshoot Spanning Tree Protocol (STP) in an Arista environment.
*   Configure IP addressing, static routes, and understand the fundamentals of OSPF routing.
*   Implement high availability features like MLAG and VRRP/VARP for network redundancy.
*   Utilize Arista EOS tools for network monitoring, logging, and basic troubleshooting.
*   Describe the foundational concepts of network programmability and automation within the Arista ecosystem.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Introduction to Arista and Modern Networks | 3 |
| 2 | Arista EOS CLI and Basic Device Management | 3 |
| 3 | Ethernet Switching Fundamentals with Arista EOS | 4 |
| 4 | IP Addressing and Basic Layer 3 Routing | 4 |
| 5 | Redundancy and High Availability | 5 |
| 6 | Network Monitoring, Troubleshooting, and Automation Basics | 5 |

Total chapters: 24
---

## Module 1: Introduction to Arista and Modern Networks

This module sets the stage for your journey into modern networking with Arista. We will explore the historical evolution of network architectures, understand the drivers behind the shift to cloud-scale data centers, and introduce you to Arista Networks and its foundational operating system, EOS. By the end of this module, you'll have a solid grasp of the core principles that define today's high-performance, automated, and resilient networks.

### Chapter 1.1 — The Evolution of Networking and Data Centers

#### Learning objectives
*   Identify the key characteristics and limitations of traditional three-tier data center network architectures.
*   Explain the challenges posed by Spanning Tree Protocol (STP) in modern, scalable networks.
*   Describe the fundamental shift from traditional to modern leaf-spine (Clos) network designs.
*   Understand the driving forces behind the evolution towards cloud-scale and software-defined networking.
*   Recognize the benefits of Layer 3 everywhere and Equal-Cost Multi-Pathing (ECMP) in modern data centers.

#### Detailed lesson content
For decades, enterprise data centers relied heavily on a hierarchical, three-tier network architecture. This design typically consisted of a core layer, an aggregation layer, and an access layer. The access layer switches connected end devices like servers, while aggregation switches provided connectivity to multiple access switches, often handling functions like routing and firewalling. The core layer, sitting at the top, was responsible for high-speed packet forwarding between aggregation switches and to external networks. While this model provided a structured approach to network design, it came with significant limitations, particularly as data center demands grew exponentially. One of the most critical challenges was the reliance on Spanning Tree Protocol (STP) to prevent network loops. STP, by design, blocks redundant paths to create a loop-free logical topology, effectively wasting valuable bandwidth and preventing the full utilization of available links. This meant that even if you had multiple physical links between switches, only one would be active for a given VLAN, severely limiting throughput and resilience.

The traditional three-tier architecture also suffered from inherent scalability issues and operational complexities. As server virtualization became commonplace and applications demanded more east-west traffic (server-to-server communication within the data center), the oversubscription ratios at the aggregation and core layers became bottlenecks. Adding capacity often meant forklift upgrades or complex reconfigurations, leading to slow provisioning times and increased operational expenditure. Furthermore, the reliance on Layer 2 domains for server connectivity, often spanning across multiple access switches, made network segmentation and troubleshooting cumbersome. Each VLAN required careful management, and broadcast domains could grow unwieldy, impacting performance and security. The static nature of these designs struggled to keep pace with the dynamic requirements of modern applications and the rapid deployment cycles demanded by businesses.

The advent of cloud computing and the need for massive scalability, agility, and automation fundamentally reshaped data center networking. This led to the widespread adoption of the leaf-spine architecture, also known as a Clos network. In a leaf-spine design, all servers connect to leaf switches (the access layer), and all leaf switches connect to every spine switch (the aggregation/core layer). Crucially, there are no direct connections between leaf switches or between spine switches themselves. This flat, non-blocking architecture allows for predictable latency and high bandwidth between any two points in the network. Instead of relying on STP, the leaf-spine fabric leverages Layer 3 routing protocols, most commonly BGP (Border Gateway Protocol), to establish connectivity between leaf and spine switches. This enables the use of Equal-Cost Multi-Pathing (ECMP), where traffic can be spread across all available links simultaneously, maximizing bandwidth utilization and providing inherent redundancy. If one link fails, traffic is automatically rerouted over the remaining active paths without any STP convergence delays.

This shift to a "Layer 3 everywhere" model, where routing is performed as close to the edge as possible, drastically simplifies the network. It eliminates the complexities of STP, reduces broadcast domains, and makes the network highly scalable and resilient. Each leaf switch acts as a Layer 3 boundary, providing routing services for the servers connected to it. The spine switches then act as high-speed Layer 3 interconnects. This design is inherently modular; you can add more leaf switches to increase server port density or add more spine switches to increase overall fabric capacity without disrupting existing operations. This modularity, combined with the power of ECMP, forms the backbone of modern cloud-scale data centers, enabling the agility and performance required by today's demanding applications and paving the way for advanced concepts like network virtualization and software-defined networking (SDN). Understanding this fundamental architectural shift is critical for anyone working with modern data center technologies, including Arista's solutions.

#### Key concepts
*   **Three-Tier Architecture:** A traditional hierarchical network design consisting of core, aggregation, and access layers.
*   **Spanning Tree Protocol (STP):** A network protocol that prevents loops in Layer 2 networks by blocking redundant paths, leading to underutilized bandwidth.
*   **Oversubscription:** When the total bandwidth demand from connected devices exceeds the available uplink bandwidth, creating a potential bottleneck.
*   **East-West Traffic:** Network traffic flowing between servers within the same data center, as opposed to North-South traffic (in/out of the data center).
*   **Leaf-Spine Architecture (Clos Network):** A modern, non-blocking data center network topology where leaf switches connect to servers and spine switches, and all leaf switches connect to all spine switches.
*   **Layer 3 Everywhere:** A design principle where routing (Layer 3) is enabled on all switches, including the access (leaf) layer, to leverage routing protocols and ECMP.
*   **Equal-Cost Multi-Pathing (ECMP):** A routing feature that allows a router to use multiple paths of equal cost to reach a destination, distributing traffic and providing redundancy.

#### Hands-on activity
**Activity: Sketching Network Topologies**

**Objective:** To visually understand the differences between traditional three-tier and modern leaf-spine architectures.

**Instructions:**
1.  **Traditional Three-Tier Sketch:** On a piece of paper or using a digital drawing tool, draw a diagram representing a traditional three-tier data center network.
    *   Include 2 Core switches, 4 Aggregation switches (2 connected to each Core), and 8 Access switches (2 connected to each Aggregation).
    *   Show how servers would connect to the Access switches.
    *   Indicate where STP would likely block links (e.g., between aggregation switches or redundant links to the core). Use dashed lines for blocked links.
    *   Label the layers: Core, Aggregation, Access.
2.  **Modern Leaf-Spine Sketch:** On a separate sheet or canvas, draw a diagram representing a leaf-spine architecture.
    *   Include 2 Spine switches and 4 Leaf switches.
    *   Show how each Leaf switch connects to *every* Spine switch.
    *   Show how servers would connect to the Leaf switches.
    *   Indicate that all links are active and can carry traffic simultaneously (no blocked links).
    *   Label the layers: Spine, Leaf.

**Reflection:** After drawing both, compare them. How many active paths exist between any two servers in the traditional model (assuming they are on different access switches)? How many active paths exist in the leaf-spine model? Consider the impact of a single link failure in both scenarios.

#### Assessment idea
1.  **Question:** A network administrator is troubleshooting slow performance in a traditional three-tier data center. They notice that several physical links between aggregation switches are consistently in a blocking state according to `show spanning-tree` output. Which of the following is the most likely reason for this observation?
    *   A) The aggregation switches are configured with MLAG, preventing active-active forwarding.
    *   B) The network is experiencing a Layer 3 routing loop, which STP is attempting to resolve.
    *   C) STP is actively preventing Layer 2 loops by disabling redundant paths, leading to underutilized bandwidth.
    *   D) The core switches have insufficient bandwidth, causing congestion at the aggregation layer.

    **Correct Answer:** C) STP is actively preventing Layer 2 loops by disabling redundant paths, leading to underutilized bandwidth.
    **Explanation:** In traditional Layer 2 networks, STP's primary function is to create a loop-free topology by selectively blocking redundant links. While this prevents broadcast storms and MAC table instability, it also means that valuable bandwidth on those blocked links is wasted. This is a common limitation of traditional designs that the leaf-spine architecture, with its Layer 3 everywhere approach and ECMP, aims to overcome.

2.  **Question:** Which of the following is a key advantage of adopting a leaf-spine network architecture over a traditional three-tier design in a modern data center?
    *   A) It simplifies Layer 2 domain management by extending VLANs across the entire fabric using STP.
    *   B) It reduces the number of physical cables required by consolidating all traffic onto a single high-speed backbone.
    *   C) It improves network scalability and resilience by utilizing all available paths simultaneously via ECMP, eliminating STP.
    *   D) It prioritizes North-South traffic over East-West traffic, optimizing external connectivity.

    **Correct Answer:** C) It improves network scalability and resilience by utilizing all available paths simultaneously via ECMP, eliminating STP.
    **Explanation:** The leaf-spine architecture, by moving to a Layer 3-centric design and leveraging ECMP, ensures that all links are active and can carry traffic. This maximizes bandwidth utilization, provides multiple redundant paths for high availability, and significantly improves scalability compared to STP-limited traditional designs. It also inherently optimizes for East-West traffic, which is dominant in modern virtualized and cloud environments.

#### AI generation note
Create a 12-minute animated video. Start with a visual representation of a traditional three-tier network, highlighting blocked STP links with red crosses. Transition to showing the increasing east-west traffic demands and bottlenecks. Then, animate the transformation to a leaf-spine architecture, illustrating how all links become active and traffic flows across multiple paths via ECMP. Use clear, simple network diagrams with animated data flow. Include a side-by-side comparison of the two architectures at the end, summarizing their pros and cons. The tone should be informative and encouraging, suitable for beginners. Conclude with a reflection prompt asking learners to consider how these changes impact application performance.

---

### Chapter 1.2 — Introduction to Arista Networks and EOS

#### Learning objectives
*   Identify Arista Networks' core focus and market position within the networking industry.
*   Describe the key characteristics and benefits of Arista's Extensible Operating System (EOS).
*   Explain how EOS's modular, Linux-based architecture contributes to network stability and programmability.
*   Recognize the importance of Arista's open APIs (e.g., eAPI) for automation and integration.
*   Perform basic CLI commands on an Arista device to verify system status and interface configuration.

#### Detailed lesson content
Arista Networks emerged as a significant player in the networking industry by focusing specifically on high-performance, low-latency, and cloud-scale data center and campus solutions. Unlike traditional networking vendors that often cater to a broad range of networking needs from edge to core, Arista carved out its niche by addressing the demanding requirements of large enterprises, cloud service providers, and financial institutions where speed, reliability, and automation are paramount. Their philosophy centers around building highly resilient, software-driven networks that leverage open standards and provide deep visibility. This specialized focus has allowed Arista to innovate rapidly, offering solutions tailored for modern data center challenges like massive east-west traffic, virtualization, and the need for seamless integration with orchestration tools.

At the heart of every Arista switch is the Extensible Operating System, or EOS. EOS is not just another network operating system; it's a groundbreaking, Linux-based, modular software architecture designed from the ground up for resilience, programmability, and automation. The fact that it's built on a standard Linux kernel is a fundamental differentiator. This foundation provides inherent stability, a familiar environment for developers, and access to a vast ecosystem of Linux tools and utilities directly on the switch. EOS achieves its high availability and fault isolation through a multi-process state-sharing architecture known as Sysdb. Instead of a monolithic block of code, EOS is composed of numerous independent processes, each responsible for a specific function (e.g., routing, switching, interface management). If one process crashes, it typically doesn't bring down the entire system; Sysdb ensures that other processes can continue operating using the last known good state, and the failed process can be restarted without impacting data plane forwarding. This modularity is a huge leap forward in network operating system reliability.

Another cornerstone of EOS is its unparalleled programmability and openness. Arista recognized early on that manual configuration and closed systems would not meet the demands of cloud-scale environments. EOS provides a rich set of open APIs, most notably the eAPI (External API), which allows network administrators and developers to interact with the switch programmatically using standard HTTP/HTTPS requests and JSON payloads. This means you can automate configuration tasks, gather telemetry data, and integrate Arista switches seamlessly into your existing orchestration and management platforms (like Ansible, Puppet, Chef, or custom scripts). This capability transforms the network from a collection of manually configured boxes into a programmable infrastructure component, enabling true Infrastructure as Code (IaC) principles for networking. Beyond eAPI, EOS also supports standard protocols like OpenConfig, further enhancing its interoperability and automation potential.

For those familiar with other vendor CLIs, particularly Cisco IOS, the Arista CLI will feel immediately comfortable. While the underlying architecture is vastly different, Arista has deliberately designed its command-line interface to be intuitive and similar to industry standards, easing the transition for network engineers. However, the real power of EOS lies beneath this familiar surface. Its advanced monitoring and troubleshooting tools, such as LANZ (Latency Analyzer), DANZ (Data ANalyZer), and native support for sFlow, provide deep insights into network performance and traffic patterns. These features, combined with the ability to run third-party applications or custom Python scripts directly on the switch, make Arista EOS a powerful platform for building, operating, and troubleshooting modern data center networks. Understanding these core tenets of Arista and EOS is essential for anyone looking to master the Arista ACE curriculum.

Let's look at some basic Arista CLI commands. If you were to log into an Arista switch, you'd find a command-line interface that looks very similar to other industry-standard network devices.

```bash
# Enter privileged EXEC mode
enable

# Show basic system information
show version

# Show running configuration
show running-config

# Show interface status
show interfaces status

# Enter configuration mode
configure terminal

# Configure an interface
interface Ethernet1
   description "Uplink to Spine1"
   no switchport
   ip address 10.0.0.1/30
   no shutdown
exit

# Save the configuration
copy running-config startup-config
```

**Common Mistake:** A common mistake for those new to Arista, especially from a Cisco background, is to assume that because the CLI looks similar, the underlying architecture and capabilities are identical. While the CLI is friendly, remember that EOS is Linux-based and highly programmable, offering much deeper integration possibilities than traditional OSes. Don't overlook the power of eAPI and scripting just because the CLI is familiar.

#### Key concepts
*   **Arista Networks:** A networking vendor specializing in high-performance, low-latency, cloud-scale data center and campus networking solutions.
*   **Extensible Operating System (EOS):** Arista's Linux-based, modular network operating system known for its stability, programmability, and open APIs.
*   **Sysdb:** The multi-process state-sharing architecture within EOS that enhances fault isolation and system resilience.
*   **eAPI (External API):** Arista's open API that allows programmatic interaction with EOS using standard HTTP/HTTPS and JSON, enabling automation and integration.
*   **OpenConfig:** An industry-wide effort by network operators to standardize the configuration and management of network devices, supported by Arista EOS.
*   **Programmability:** The ability to automate and control network devices using software and APIs, rather than manual CLI commands.
*   **CLI (Command Line Interface):** The text-based interface used to configure and manage network devices, designed to be familiar to network engineers.

#### Hands-on activity
**Activity: Exploring Arista CLI (Simulated)**

**Objective:** To familiarize yourself with basic Arista EOS CLI commands for system information and interface configuration.

**Instructions:**
Imagine you are logged into a new Arista switch. Use the provided command snippets to "explore" its configuration. While you don't have a live switch, write down what you expect the output to show or what action each command performs.

1.  **System Information:**
    ```bash
    enable
    show version
    show inventory
    ```
    *   *What information would `show version` likely display?* (e.g., EOS version, hardware model, uptime)
    *   *What information would `show inventory` likely display?* (e.g., serial numbers, part numbers of modules)

2.  **Configuration & Interfaces:**
    ```bash
    show running-config
    show interfaces status
    show ip interface brief
    ```
    *   *What does `show running-config` reveal?* (e.g., current active configuration)
    *   *How does `show interfaces status` differ from `show ip interface brief`?* (Focus on the type of information each provides – physical status vs. IP addressing).

3.  **Simulated Configuration Change:**
    ```bash
    configure terminal
    interface Ethernet5
       description "Server_Web_01"
       switchport access vlan 100
       spanning-tree portfast
    exit
    copy running-config startup-config
    ```
    *   *What is the purpose of `switchport access vlan 100`?*
    *   *What does `spanning-tree portfast` do in this context?* (Hint: It's a safety feature for host-facing ports.)
    *   *Why is `copy running-config startup-config` important?*

**Expected Output/Action Notes:**
*   `show version`: Displays EOS software version, build date, platform, serial number, uptime.
*   `show inventory`: Lists hardware components like chassis, power supplies, fans, and line cards with their serials.
*   `show running-config`: Shows the currently active configuration of the device.
*   `show interfaces status`: Provides a quick summary of physical interface status (up/down, speed, duplex, VLAN).
*   `show ip interface brief`: Provides a summary of IP configured interfaces, their IP addresses, and status.
*   `switchport access vlan 100`: Configures Ethernet5 as an access port and assigns it to VLAN 100.
*   `spanning-tree portfast`: Enables PortFast on the interface, causing it to transition immediately to the forwarding state, bypassing listening and learning states. This is safe for end-host ports but dangerous for inter-switch links.
*   `copy running-config startup-config`: Saves the current active configuration (running-config) to non-volatile memory (startup-config) so it persists across reboots.

#### Assessment idea
1.  **Question:** Which of the following is a primary benefit of Arista EOS being built on a Linux kernel with a multi-process state-sharing architecture (Sysdb)?
    *   A) It allows Arista switches to run Windows applications directly on the hardware.
    *   B) It enables the entire network operating system to crash if a single process fails, simplifying troubleshooting.
    *   C) It provides enhanced stability and fault isolation, as individual process failures typically do not bring down the entire system.
    *   D) It limits programmability to only proprietary Arista scripting languages.

    **Correct Answer:** C) It provides enhanced stability and fault isolation, as individual process failures typically do not bring down the entire system.
    **Explanation:** The modular, Linux-based architecture with Sysdb ensures that different functions run as independent processes. If one process encounters an issue, it can be restarted without affecting other processes or the data plane, significantly improving the overall stability and resilience of the network device.

2.  **Question:** A network engineer wants to automate the configuration of VLANs on multiple Arista switches using a Python script. Which Arista EOS feature would be most suitable for this task?
    *   A) The traditional Command Line Interface (CLI).
    *   B) Spanning Tree Protocol (STP).
    *   C) The eAPI (External API).
    *   D) The `copy running-config startup-config` command.

    **Correct Answer:** C) The eAPI (External API).
    **Explanation:** The eAPI is specifically designed for programmatic interaction with Arista EOS. It allows external applications and scripts (like Python) to send configuration commands and retrieve operational data using standard web protocols (HTTP/HTTPS) and data formats (JSON), making it ideal for automation tasks. While the CLI can be scripted, eAPI offers a more robust and native programmatic interface.

#### AI generation note
Develop a 10-minute interactive lab walkthrough video. Begin by visually explaining the modularity of EOS using an animated diagram showing Sysdb and independent processes. Then, transition to a terminal session demonstrating basic Arista CLI commands (`show version`, `show interfaces status`, `show running-config`). Introduce a simple configuration task (e.g., configuring an IP address on a loopback interface) and show how to save it. Emphasize the familiarity of the CLI but also briefly mention the underlying Linux power. Include a prompt for learners to try a similar configuration in a virtual lab environment (e.g., Arista vEOS). The visual style should be split-screen, with the instructor explaining concepts on one side and a clear terminal demo on the other.

---

### Chapter 1.3 — Core Principles of Cloud Networking

#### Learning objectives
*   Define what constitutes "cloud-scale" networking and its key characteristics.
*   Explain the critical role of automation and programmability in cloud networking environments.
*   Describe how Layer 3 everywhere and BGP with ECMP contribute to scalability and resiliency.
*   Understand the purpose and benefits of overlay technologies like VXLAN and EVPN in multi-tenant cloud networks.
*   Identify essential visibility and security considerations for modern cloud network designs.

#### Detailed lesson content
Cloud networking isn't just about moving your servers to a public cloud provider; it's a fundamental shift in how networks are designed, operated, and managed to meet the demands of modern, distributed applications. At its core, cloud networking embodies principles of massive scalability, pervasive automation, robust resiliency, and deep programmability. Unlike traditional networks built for predictable, static workloads, cloud networks must be able to scale horizontally and dynamically, accommodating fluctuating demands and rapid application deployments. This necessitates a design where adding capacity (more servers, more network devices) doesn't introduce bottlenecks or require extensive manual reconfigurations. Predictable performance, regardless of scale, is a hallmark of a well-designed cloud network.

Automation and programmability are non-negotiable pillars of cloud networking. Manual configuration, prone to human error and slow to execute, simply cannot keep pace with the velocity of cloud deployments. Cloud networks are built with an API-first approach, meaning every aspect of the network—from interface configuration to routing policies—can be managed programmatically. This enables "Infrastructure as Code" (IaC), where network configurations are defined in code (e.g., YAML, JSON) and deployed automatically using orchestration tools like Ansible, Puppet, or custom scripts. Zero-touch provisioning (ZTP) becomes a reality, allowing new devices to be deployed and configured automatically upon power-up. This not only dramatically speeds up deployment times but also ensures consistency and reduces operational overhead, freeing network engineers to focus on higher-value tasks.

The architectural foundation for cloud networking is typically the leaf-spine fabric, as discussed in Chapter 1.1. This architecture, combined with a "Layer 3 everywhere" approach, is crucial. Instead of relying on Layer 2 for server connectivity across large domains, every link in a cloud network fabric is typically a Layer 3 routed link. BGP (Border Gateway Protocol) emerges as the routing protocol of choice, even within the data center, due to its scalability, flexibility, and ability to handle a large number of routes and peers. BGP, coupled with Equal-Cost Multi-Pathing (ECMP), ensures that all available paths are utilized, providing high bandwidth and inherent resilience. If a link or even an entire leaf switch fails, traffic is automatically rerouted over the remaining ECMP paths without any disruption to applications, significantly improving network uptime and availability.

To support multi-tenancy and virtual machine mobility across a Layer 3 fabric, cloud networks extensively utilize overlay technologies like VXLAN (Virtual Extensible LAN) and EVPN (Ethernet VPN). VXLAN encapsulates Layer 2 Ethernet frames within Layer 3 UDP packets, allowing Layer 2 segments to be extended across a Layer 3 network. This means virtual machines can be moved between hosts connected to different leaf switches (and thus different Layer 3 subnets) without changing their IP addresses, simplifying virtualization management. EVPN, often used in conjunction with VXLAN, provides a control plane for VXLAN, distributing MAC address and IP information efficiently across the fabric using BGP. This combination offers a highly scalable, flexible, and efficient way to provide Layer 2 connectivity over a Layer 3 underlay, essential for cloud environments where tenants require isolated network segments and seamless workload migration.

Finally, deep visibility and robust security are paramount in cloud networks. With highly dynamic and distributed workloads, traditional monitoring tools often fall short. Cloud networks demand real-time telemetry, advanced analytics, and granular visibility into traffic flows to quickly identify and troubleshoot performance issues or security threats. Tools that can analyze traffic patterns, detect anomalies, and provide detailed flow information are critical. From a security perspective, microsegmentation becomes vital. Instead of broad network zones, microsegmentation allows for granular policy enforcement at the workload level, isolating individual applications or even containers to limit the blast radius of a security breach. This often involves integrating network devices with security policy managers and orchestration platforms to dynamically apply security rules based on workload identity and behavior. Understanding these principles is key to designing and operating robust, high-performance cloud networks, and Arista's solutions are built to enable these very capabilities.

Consider a practical scenario: a cloud provider needs to onboard a new customer, "Tenant A," who requires their own isolated Layer 2 network for their virtual machines, even though these VMs might be spread across different physical servers connected to different leaf switches in the data center. Without VXLAN/EVPN, extending this Layer 2 network across the Layer 3 leaf-spine fabric would be complex, if not impossible, and would likely involve stretching VLANs, which is generally discouraged due to scalability and broadcast domain issues. With VXLAN/EVPN, Tenant A's VMs can communicate as if they are on the same Layer 2 segment, while the underlying network fabric remains a highly efficient Layer 3 routed network. This abstraction is fundamental to delivering multi-tenant cloud services.

#### Key concepts
*   **Cloud-Scale Networking:** Network design principles focused on extreme scalability, automation, resiliency, and programmability to meet the demands of cloud computing.
*   **Automation & Programmability:** The ability to configure, manage, and operate network devices and services using software, APIs, and scripting, enabling Infrastructure as Code (IaC).
*   **Infrastructure as Code (IaC):** Managing and provisioning infrastructure (including networks) using machine-readable definition files, rather than manual configuration.
*   **Zero-Touch Provisioning (ZTP):** A method where network devices automatically retrieve their configuration and software images upon initial power-up, requiring no manual intervention.
*   **BGP (Border Gateway Protocol):** A robust Layer 3 routing protocol widely used in cloud networks for its scalability and flexibility in distributing routes within and between autonomous systems.
*   **VXLAN (Virtual Extensible LAN):** An overlay network technology that encapsulates Layer 2 Ethernet frames within Layer 3 UDP packets, extending Layer 2 connectivity over a Layer 3 IP network.
*   **EVPN (Ethernet VPN):** A control plane technology, often used with VXLAN, that uses BGP to distribute MAC and IP address information for virtual networks, enabling efficient Layer 2 extension and VM mobility.
*   **Microsegmentation:** A security approach that creates granular security zones around individual workloads, allowing for fine-grained policy enforcement and limiting lateral movement of threats.

#### Hands-on activity
**Activity: Designing a Multi-Tenant Overlay Network Concept**

**Objective:** To conceptually design how VXLAN/EVPN would enable multi-tenancy in a leaf-spine fabric.

**Instructions:**
Imagine you have a leaf-spine fabric with 2 spine switches and 4 leaf switches (Leaf1, Leaf2, Leaf3, Leaf4).
*   **Tenant A** needs a Layer 2 network (VLAN 100) for their VMs. VMs for Tenant A are connected to Leaf1 and Leaf3.
*   **Tenant B** needs a separate Layer 2 network (VLAN 200) for their VMs. VMs for Tenant B are connected to Leaf2 and Leaf4.

1.  **Draw the Underlay:** Sketch the leaf-spine topology (Leaf1-4 connected to Spine1-2). Label all links as Layer 3.
2.  **Illustrate VXLAN Tunnels:**
    *   Draw a conceptual VXLAN tunnel (overlay) that connects Leaf1 and Leaf3 for Tenant A's VLAN 100. Use a distinct color.
    *   Draw another conceptual VXLAN tunnel (overlay) that connects Leaf2 and Leaf4 for Tenant B's VLAN 200. Use a different distinct color.
    *   Show how traffic from a VM on Leaf1 for Tenant A would reach a VM on Leaf3 for Tenant A, traversing the Layer 3 underlay within its VXLAN encapsulation.
3.  **Explain EVPN's Role:** Briefly describe how EVPN (via BGP) would help Leaf1 and Leaf3 learn about each other's MAC addresses for Tenant A's VMs, and how Leaf2 and Leaf4 would do the same for Tenant B, without needing broadcast floods across the entire Layer 3 fabric.

**Reflection:** How does this design allow for complete isolation between Tenant A and Tenant B, even though they share the same physical network infrastructure? What are the benefits of this approach compared to simply stretching VLANs across the entire Layer 3 fabric?

#### Assessment idea
1.  **Question:** In a cloud-scale data center network utilizing a leaf-spine architecture, why is BGP with ECMP preferred over traditional Layer 2 protocols like STP for inter-switch connectivity?
    *   A) BGP with ECMP supports larger Layer 2 broadcast domains, simplifying VM mobility.
    *   B) BGP with ECMP allows all available paths to be actively used for traffic forwarding, maximizing bandwidth and providing faster convergence.
    *   C) BGP with ECMP is easier to configure manually on a large number of switches.
    *   D) BGP with ECMP is a proprietary protocol unique to cloud networking, offering enhanced security.

    **Correct Answer:** B) BGP with ECMP allows all available paths to be actively used for traffic forwarding, maximizing bandwidth and providing faster convergence.
    **Explanation:** BGP with ECMP is a cornerstone of cloud networking because it enables a "Layer 3 everywhere" design where all links are active. This maximizes bandwidth utilization, distributes traffic efficiently, and provides rapid fault recovery by rerouting traffic over alternative equal-cost paths, unlike STP which blocks redundant links.

2.  **Question:** A cloud provider needs to host multiple customers, each requiring their own isolated Layer 2 network segments, even if their virtual machines are distributed across different physical servers in the data center. Which combination of technologies is best suited to achieve this multi-tenancy over a Layer 3 leaf-spine fabric?
    *   A) Spanning Tree Protocol (STP) and VLAN Trunking Protocol (VTP).
    *   B) Open Shortest Path First (OSPF) and Generic Routing Encapsulation (GRE).
    *   C) Virtual Extensible LAN (VXLAN) and Ethernet VPN (EVPN).
    *   D) Network Address Translation (NAT) and Access Control Lists (ACLs).

    **Correct Answer:** C) Virtual Extensible LAN (VXLAN) and Ethernet VPN (EVPN).
    **Explanation:** VXLAN provides the data plane encapsulation to extend Layer 2 segments over a Layer 3 IP network, allowing VMs to maintain their Layer 2 adjacency regardless of their physical location. EVPN provides the control plane, using BGP to efficiently distribute MAC and IP reachability information for these virtual networks, enabling scalable multi-tenancy and VM mobility across a Layer 3 underlay.

#### AI generation note
Create an 11-minute animated video that visually explains the core principles of cloud networking. Begin by showing a traditional data center and then animate its transformation into a cloud-scale leaf-spine fabric. Focus on illustrating the concept of "Layer 3 everywhere" and how BGP/ECMP routes traffic. Then, introduce the challenge of multi-tenancy and VM mobility, and animate how VXLAN encapsulates Layer 2 traffic over the Layer 3 underlay, with EVPN as the control plane. Use clear, color-coded diagrams for different tenants. Conclude with a visual summary of automation and visibility as key enablers. The tone should be professional and highly visual, using analogies to make complex concepts accessible. Include a short interactive quiz asking about the role of VXLAN.

---

## Module 2: Arista EOS CLI and Basic Device Management

**Module Goal:** Equip learners with the fundamental skills to navigate the Arista EOS Command Line Interface (CLI), perform basic device configuration, and manage essential network services on Arista switches.

---

### Chapter 2.1 — Navigating the Arista EOS CLI and Initial Access

#### Learning objectives
*   Understand the different operational modes within the Arista EOS CLI and their purposes.
*   Identify and utilize common CLI commands for navigation, context-sensitive help, and command completion.
*   Perform initial access to an Arista switch via console and SSH.
*   Configure basic local user authentication for secure administrative access.

#### Detailed lesson content
Welcome to the core of Arista device management: the Arista Extensible Operating System (EOS) Command Line Interface (CLI). The CLI is your primary tool for interacting with Arista switches, allowing you to monitor status, configure features, and troubleshoot issues. Unlike some other operating systems, EOS provides a highly consistent and intuitive CLI experience, often resembling other industry-standard CLIs, which can ease the learning curve for those familiar with other vendors. Understanding the different operational modes is fundamental to effective interaction.

The EOS CLI operates in a hierarchical structure, meaning your available commands change based on your current mode. When you first log in, you'll typically be in **User EXEC mode** (indicated by `>`). This mode offers a very limited set of commands, primarily for basic monitoring and diagnostics, preventing accidental configuration changes. To perform any significant monitoring or configuration, you'll need to elevate your privileges to **Privileged EXEC mode** (indicated by `#`). This is achieved by typing `enable` and, if configured, providing a password. From Privileged EXEC mode, you gain access to all `show` commands for detailed device status and the `configure terminal` command, which is your gateway to making configuration changes.

Once you enter `configure terminal`, you transition into **Global Configuration mode** (indicated by `(config)#`). This is where you can apply system-wide settings like the hostname, enable services, or define global parameters. From Global Configuration mode, you can then navigate to more specific configuration contexts, such as **Interface Configuration mode** (`(config-if)#` for configuring individual ports), **VLAN Configuration mode** (`(config-vlan)#` for defining VLAN properties), or **Router Configuration mode** (`(config-router)#` for routing protocols). To move back up the hierarchy, you can use the `exit` command to go to the previous mode, or `end` (or `Ctrl+Z`) to jump directly back to Privileged EXEC mode from any configuration context.

Navigating the CLI is made easier with built-in help features. The `?` character is your best friend; typing `?` at any prompt will show you all available commands in your current mode. If you type a command followed by `?`, it will show you the next available parameters or options for that command. For example, `show ?` will list all `show` commands, and `show ip ?` will narrow it down to IP-related `show` commands. Additionally, EOS supports **tab completion**. If you start typing a command and press the `Tab` key, the CLI will either complete the command for you if it's unique, or show you possible completions if there are multiple options. This significantly speeds up configuration and reduces typing errors.

Initial access to an Arista switch is typically done in one of two ways: via the **console port** or via **SSH (Secure Shell)**. Console access is considered "out-of-band" management because it doesn't rely on the network being operational. You connect directly to the switch's console port using a serial cable (often RJ-45 to DB-9 or USB-to-serial adapter) from a computer running terminal emulation software (like PuTTY, Tera Term, or SecureCRT). The standard console settings are 9600 baud, 8 data bits, no parity, and 1 stop bit (9600 8N1). This is your lifeline to the switch, especially during initial setup or when the network is down. A common mistake here is using incorrect console settings, which results in garbled output or no connection. Always double-check your terminal emulator settings.

For day-to-day "in-band" management, SSH is the preferred method due to its security. SSH encrypts all communication between your management workstation and the switch, protecting sensitive information like passwords. To enable SSH on an Arista switch, you first need to generate RSA cryptographic keys, which are used to secure the SSH connection. This is done in Global Configuration mode using the `crypto key generate rsa` command. You'll then need to ensure the SSH service is enabled with `service ssh`. Most importantly, you must configure at least one local user account with a strong password, as SSH typically relies on valid user credentials for authentication.

Let's illustrate with an example of configuring a local user. In Privileged EXEC mode, you would enter `configure terminal` to go to Global Configuration mode. Then, you'd use the `username <username> secret <password>` command. For instance, `username admin secret AristaACE!` creates a user named `admin` with the password `AristaACE!`. It's crucial to use the `secret` keyword, as it encrypts the password in the configuration, unlike `password` which stores it in plain text. Always choose strong, complex passwords and follow security best practices. Forgetting the `enable` password or the local user passwords can lock you out of your switch, requiring a password recovery procedure, which can be disruptive. Therefore, documenting your credentials securely is paramount.

#### Key concepts
*   **User EXEC mode:** The initial, limited-privilege CLI mode (prompt: `>`).
*   **Privileged EXEC mode:** Elevated CLI mode with full monitoring and diagnostic commands (prompt: `#`). Accessed via `enable`.
*   **Global Configuration mode:** Mode for system-wide configuration changes (prompt: `(config)#`). Accessed via `configure terminal`.
*   **Context-sensitive help (`?`):** Provides a list of available commands or parameters at the current prompt.
*   **Tab completion:** Automatically completes commands or shows possible options when the `Tab` key is pressed.
*   **Console port:** Physical serial port for out-of-band management, essential for initial setup or network issues.
*   **SSH (Secure Shell):** Encrypted network protocol for secure remote command-line access.
*   **RSA keys:** Cryptographic keys generated on the switch to secure SSH connections.
*   **Local user database:** User accounts configured directly on the switch for authentication.

#### Hands-on activity
Access a simulated Arista vEOS switch (e.g., in a lab environment like EVE-NG or GNS3).
1.  Connect via console (or simulate it if using a lab platform that provides direct CLI access).
2.  Navigate through the different CLI modes: User EXEC, Privileged EXEC (using `enable`), and Global Configuration (using `configure terminal`).
3.  Experiment with context-sensitive help (`?`) and tab completion to explore available commands in each mode.
4.  From Global Configuration mode, generate RSA keys for SSH: `crypto key generate rsa`.
5.  Enable the SSH service: `service ssh`.
6.  Create a new local user with a secret password: `username cohortia secret CohortiaPass1!`.
7.  Exit back to Privileged EXEC mode (`end`).
8.  From your local machine, attempt to SSH into the switch using the newly created user (you'll need to configure an IP address on the Mgmt0 interface first, which we cover in the next chapter, but for now, assume it's configured for SSH testing if your lab setup allows).

#### Assessment idea
1.  **Question:** You are logged into an Arista switch and see the prompt `Switch>`. You need to change the switch's hostname. What is the correct sequence of commands to reach the appropriate configuration mode and then return to the highest privilege level without logging out?
    **Answer:**
    ```
    enable
    configure terminal
    end
    ```
    Explanation: `enable` transitions from User EXEC (`Switch>`) to Privileged EXEC (`Switch#`). `configure terminal` then moves you into Global Configuration mode (`Switch(config)#`), where hostname changes are made. Finally, `end` (or `Ctrl+Z`) takes you directly back to Privileged EXEC mode (`Switch#`).
2.  **Question:** You've configured a local user account on your Arista switch using `username auditor password mypassword`. Later, you realize this is a security risk. Why is using `password` instead of `secret` problematic, and what command would you use to fix it for the `auditor` user?
    **Answer:** Using `password` stores the password in plain text within the switch's configuration, which can be viewed by anyone with Privileged EXEC access. This is a significant security vulnerability. To fix it, you would reconfigure the user with the `secret` keyword:
    ```
    configure terminal
    username auditor secret mySecurePass!
    ```
    Explanation: The `secret` keyword encrypts the password using a strong hashing algorithm (typically SHA-256), making it much more secure. When you re-enter the `username` command with `secret`, it overwrites the previous password entry for that user.

#### AI generation note
Create a 12-minute interactive video tutorial. Start with a terminal showing console access to a vEOS instance. Demonstrate `enable`, `configure terminal`, `exit`, `end`, `disable`, `?`, and tab completion. Show the process of generating RSA keys (`crypto key generate rsa`), enabling SSH (`service ssh`), and creating a local user (`username admin secret AristaACE!`). Include split-screen views of the CLI on one side and conceptual diagrams of CLI mode hierarchy on the other. End with a short coding exercise: "Configure a new local user named 'cohortia' with a secret password 'AristaACE!'" and verify its creation with `show running-config | include cohortia`. Ensure captions and high-contrast visuals are used.

---

### Chapter 2.2 — Basic Device Configuration: Hostname, IP Addressing, and Interface Management

#### Learning objectives
*   Configure a unique hostname for an Arista switch for easy identification.
*   Assign IPv4 addresses and subnet masks to the management interface (Mgmt0) and Layer 3 Ethernet interfaces.
*   Understand and configure essential interface parameters such as descriptions, link speed, and duplex settings.
*   Verify current configuration settings and understand the difference between `running-config` and `startup-config`.
*   Properly save configuration changes to ensure persistence across reboots.

#### Detailed lesson content
After gaining initial access to your Arista switch, one of the very first and most fundamental configuration steps is to assign a unique hostname. A hostname is more than just a label; it's a critical identifier that helps distinguish one device from another in a network, especially when managing multiple switches. When you're troubleshooting or monitoring, seeing `Core-Switch-1` instead of `localhost` in your logs or CLI prompt makes a world of difference. To configure the hostname, you enter Global Configuration mode and use the `hostname` command followed by your desired name. For example, `hostname Arista-Leaf1` will change the switch's prompt and identifier.

Next, we move to IP addressing, which is essential for network communication and remote management. Arista switches, like most network devices, rely on IP addresses to communicate with other devices on the network. We typically configure IP addresses on two main types of interfaces: the `Mgmt0` interface and physical Ethernet interfaces when they are configured for Layer 3 routing.

The `Mgmt0` interface is a dedicated out-of-band management interface. This means it's designed to be on a separate network from your data plane traffic, offering a secure and isolated path for administrators to access the switch even if the main network is experiencing issues. To configure `Mgmt0`, you navigate to its interface configuration mode (`interface Management0`) and assign an IP address and subnet mask using the `ip address <ip-address>/<subnet-mask-length>` command. For example, `ip address 192.168.100.10/24`. It's also crucial to configure a default gateway for the `Mgmt0` interface using `ip routing mgmt` in Global Configuration mode, followed by `ip route 0.0.0.0/0 <next-hop-ip>` within the `Management0` interface configuration, which tells the switch how to reach networks beyond its directly connected management subnet. This ensures your switch can communicate with management servers, DNS, NTP, and other services across your management network.

Physical Ethernet interfaces, by default, operate as Layer 2 switchports. However, in many network designs, especially in data centers, you'll configure some Ethernet interfaces as Layer 3 routed ports. This allows the switch to participate in routing decisions directly on that interface. To convert a Layer 2 port to a Layer 3 port, you must first enter the interface configuration mode (e.g., `interface Ethernet1`) and issue the `no switchport` command. This command is critical and often overlooked by beginners; without it, you cannot assign an IP address to the physical interface. After `no switchport`, you can then assign an IP address using `ip address <ip-address>/<subnet-mask-length>`, similar to `Mgmt0`.

Beyond IP addresses, other interface parameters are vital for proper network operation. The `description` command (`description "Link to Core Router A"`) is invaluable for documentation, helping you quickly understand the purpose of a port without having to consult external diagrams. Link speed (`speed <speed>`) and duplex settings (`duplex <mode>`) are also configurable, though in modern networks, auto-negotiation (`speed auto`, `duplex auto`) is generally preferred and often works reliably. However, in specific scenarios, such as connecting to older equipment or troubleshooting link issues, manually setting these parameters might be necessary. Always remember to use the `no shutdown` command on any interface you configure, as interfaces are typically administratively shut down by default. If an interface is "down," it cannot pass traffic, even if correctly configured.

After making configuration changes, it's essential to verify them. The `show running-config` command displays the currently active configuration of the switch. You can filter this output to specific sections, for example, `show running-config interface Ethernet1` to see only the configuration for Ethernet1. To check IP address assignments and interface status, `show ip interface brief` is an incredibly useful command, providing a concise summary of all IP-enabled interfaces.

Finally, and perhaps most critically, you must understand the difference between `running-config` and `startup-config`. The `running-config` is the configuration currently active in the switch's RAM. Any changes you make are applied to the `running-config`. The `startup-config` is the configuration stored in non-volatile memory (flash) that the switch loads upon reboot. If you make changes to the `running-config` but do not save them to `startup-config`, those changes will be lost if the switch reboots or loses power. To save your changes, you use the command `copy running-config startup-config`. This copies the active configuration from RAM to flash, ensuring your hard work persists. A common mistake is forgetting this step, leading to frustrating situations where configurations disappear after a power cycle. Always make it a habit to save your configuration after any significant changes.

#### Key concepts
*   **Hostname:** A unique, descriptive name assigned to a network device for identification.
*   **Mgmt0 interface:** A dedicated, out-of-band management interface for secure remote access.
*   **Layer 3 Ethernet interface:** A physical Ethernet port configured to operate at Layer 3 (routing) instead of Layer 2 (switching).
*   **`no switchport`:** Command used to convert a Layer 2 Ethernet interface into a Layer 3 routed port.
*   **`description`:** An interface parameter used to add descriptive text for documentation purposes.
*   **`speed` and `duplex`:** Interface parameters for configuring link speed (e.g., 100mbps, 1gbps) and duplex mode (half or full).
*   **`no shutdown`:** Command to administratively enable an interface.
*   **`running-config`:** The active configuration currently loaded in the switch's RAM.
*   **`startup-config`:** The configuration saved in non-volatile memory, loaded upon switch reboot.
*   **`copy running-config startup-config`:** Command to save the active configuration to persistent storage.

#### Hands-on activity
Using your Arista vEOS lab environment:
1.  Enter Global Configuration mode.
2.  Change the switch's hostname to `My-Arista-Switch`.
3.  Configure the `Management0` interface with an IP address of `192.168.1.10/24` and a default route for management traffic pointing to `192.168.1.1`. Remember to enable `ip routing mgmt` globally first.
4.  Configure `Ethernet1` as a Layer 3 interface:
    *   Use `no switchport`.
    *   Assign an IP address of `10.0.0.1/30`.
    *   Add a description: `"Uplink to Router A"`.
    *   Ensure the interface is `no shutdown`.
5.  Verify your configurations using `show hostname`, `show ip interface brief`, and `show running-config interface Ethernet1`.
6.  Save your configuration changes.

#### Assessment idea
1.  **Question:** An Arista switch has the hostname `Switch-A`. You want to change it to `Core-Switch-1`. What sequence of commands would you use, and what command would you run afterward to ensure the change persists across reboots?
    **Answer:**
    ```
    enable
    configure terminal
    hostname Core-Switch-1
    end
    copy running-config startup-config
    ```
    Explanation: You first enter Privileged EXEC mode (`enable`), then Global Configuration mode (`configure terminal`). The `hostname` command sets the new name. `end` returns you to Privileged EXEC. Finally, `copy running-config startup-config` saves the active configuration (including the new hostname) to non-volatile memory, making it permanent.
2.  **Question:** You've configured IP address `192.168.1.1/24` on interface `Ethernet1` and issued `no shutdown`. However, a connected device cannot ping the switch's `Ethernet1` interface. What is a common configuration oversight on the switch that might cause this, and how would you check it?
    **Answer:** A common oversight is forgetting to configure the interface as a Layer 3 interface by using the `no switchport` command before assigning an IP address. By default, physical Ethernet interfaces on Arista switches are Layer 2 ports. If `no switchport` is not configured, the interface will not function as a Layer 3 interface, even with an IP address assigned. You would check this by running `show running-config interface Ethernet1` and looking for the `no switchport` command. If it's missing, the interface is still operating as a Layer 2 port.

#### AI generation note
Create a 15-minute lab walkthrough video. Demonstrate configuring a hostname, IP address on Mgmt0 (including `ip routing mgmt` and `ip route 0.0.0.0/0`), and an IP address on Ethernet1 (crucially including `no switchport`, `description`, and `no shutdown`). Show how to verify with `show hostname`, `show ip interface brief`, and `show running-config`. Emphasize the `copy running-config startup-config` command and its importance. Use a split-screen view showing the CLI on one side and a simple network diagram illustrating the Mgmt0 and Ethernet1 connections on the other. Include a reflection prompt: "Why is it important to configure both Mgmt0 and potentially Layer 3 Ethernet interfaces with IP addresses, and what are the primary use cases for each?" Ensure alt text for diagrams and keyboard-navigable demos.

---

### Chapter 2.3 — Managing Arista EOS: Software Updates, Backup, and Restore

#### Learning objectives
*   Understand the critical importance of regular software updates for security, stability, and new features.
*   Perform a basic Arista EOS software upgrade process, including file transfer and installation.
*   Create and manage configuration backups, both locally and externally.
*   Restore a configuration from a backup file to revert to a previous state.
*   Utilize fundamental file system commands within the EOS CLI.

#### Detailed lesson content
Maintaining the health and security of your network devices goes beyond initial configuration; it involves ongoing management, especially through software updates and robust backup strategies. Arista EOS, like any sophisticated operating system, receives regular updates. These updates are crucial for several reasons: they provide vital **security patches** to protect against newly discovered vulnerabilities, introduce **new features** that enhance network capabilities, and deliver **bug fixes** to improve system stability and performance. Running outdated software can expose your network to risks and limit your access to the latest functionalities.

The process of updating Arista EOS involves several key steps. First, you need to obtain the correct EOS image file (`.swi` extension) from the Arista support portal. It's vital to download the version compatible with your specific hardware model and to always verify the integrity of the downloaded file using an **MD5 or SHA256 checksum**. This ensures the file hasn't been corrupted during download or tampered with. Once you have the image, you need to transfer it to the switch's internal flash memory. While USB drives can be used, the most common and practical method in a production environment is using **SCP (Secure Copy Protocol)** or **SFTP (SSH File Transfer Protocol)** from a management workstation. For example, from your local machine, you might use `scp EOS-4.28.0F.swi admin@192.168.1.10:flash:/` to copy the image to the switch's flash.

Before initiating any software upgrade, a critical safety measure is to **back up your current configuration**. This provides a rollback point in case of unexpected issues during the upgrade. Once the image is on the switch, you can verify its presence using the `dir flash:` command. The upgrade itself is initiated from Privileged EXEC mode using the `install source flash:/<EOS-image-filename.swi>` command. The switch will guide you through the process, often requiring a reload (reboot) to apply the new software. **Safety Note:** Always schedule software upgrades during a maintenance window, inform stakeholders, and ensure you have console access in case of network connectivity loss during the reboot. Interrupting the upgrade process can lead to a corrupted system, requiring more drastic recovery methods.

Beyond software updates, robust configuration backup and restore procedures are paramount for disaster recovery and operational flexibility. The `running-config` is active, but the `startup-config` is what persists. You can back up your current `running-config` or `startup-config` to the switch's local flash memory using commands like `copy running-config flash:/my-backup-config-date.cfg`. While local backups are useful, they don't protect against device failure. Therefore, it's best practice to transfer configuration files **off the device** to a secure, centralized backup server using SCP or SFTP. For example, `copy flash:/my-backup-config-date.cfg scp://admin@backup-server/configs/my-switch-config.cfg`.

Restoring a configuration is equally important. If you need to revert to a previous known good state or recover from a misconfiguration, you can copy a saved configuration file from flash back into the `running-config`. The command `copy flash:/my-backup-config-date.cfg running-config` will load the contents of the backup file into the active configuration. After loading, you would typically review the changes and then use `copy running-config startup-config` to make the restored configuration permanent. **Common Mistake:** When restoring, ensure you are copying the correct file and understand that it will overwrite or merge with your current running configuration. Always review the changes carefully before saving.

Finally, understanding basic file system commands within EOS is helpful for managing files on the switch's flash memory. Commands like `dir flash:` list the contents of the flash directory, `mkdir flash:/backups` creates a new directory, and `rm flash:/old-image.swi` deletes a file. These commands are essential for organizing your files, cleaning up old images, and managing your backup strategy directly from the CLI. Always exercise caution when using `rm`, as deleted files are not easily recoverable.

#### Key concepts
*   **EOS image (.swi):** The software file containing the Arista Extensible Operating System.
*   **MD5/SHA256 checksum:** A cryptographic hash used to verify the integrity and authenticity of a downloaded file.
*   **SCP (Secure Copy Protocol) / SFTP (SSH File Transfer Protocol):** Secure protocols for transferring files to and from the switch.
*   **`install source`:** The CLI command used to initiate an EOS software upgrade.
*   **`reload`:** The command to reboot the switch, often required after a software upgrade.
*   **Configuration backup:** The process of saving the switch's configuration to a file, typically to flash or an external server.
*   **Configuration restore:** The process of loading a saved configuration file back onto the switch.
*   **`flash:`:** The internal non-volatile storage (flash memory) on the switch.
*   **File system commands:** CLI commands like `dir`, `mkdir`, `rm` used to manage files and directories on the switch's flash.

#### Hands-on activity
Using your Arista vEOS lab environment:
1.  Simulate transferring an EOS image file to the switch: `copy tftp://192.168.1.100/EOS-4.28.0F.swi flash:/EOS-4.28.0F.swi` (assuming a TFTP server at 192.168.1.100 and a placeholder image).
2.  Verify the file is on flash: `dir flash:`.
3.  Back up your current `running-config` to flash: `copy running-config flash:/my-pre-upgrade-config.cfg`.
4.  Simulate the `install source` command (you won't actually reboot for this lab, but understand the command): `install source flash:/EOS-4.28.0F.swi`.
5.  Create a new directory on flash: `mkdir flash:/archive`.
6.  Copy your backup config into the new archive directory: `copy flash:/my-pre-upgrade-config.cfg flash:/archive/my-pre-upgrade-config.cfg`.
7.  (Optional) Make a minor configuration change (e.g., add a description to a non-existent interface `interface Ethernet99`, `description "Test change"`).
8.  Restore your original backup configuration: `copy flash:/my-pre-upgrade-config.cfg running-config`.
9.  Verify the minor change from step 7 is gone (e.g., `show running-config interface Ethernet99`).
10. Delete the simulated image and archive directory: `rm flash:/EOS-4.28.0F.swi`, `rmdir flash:/archive`.

#### Assessment idea
1.  **Question:** You've downloaded a new EOS image file, `EOS-4.28.0F.swi`, to your local machine. Describe the steps you would take to transfer this file to an Arista switch and initiate the upgrade process, assuming the switch's Mgmt0 interface has an IP address of `192.168.1.10` and you have SCP access.
    **Answer:**
    1.  From your local machine's terminal, use SCP to copy the image to the switch's flash: `scp EOS-4.28.0F.swi admin@192.168.1.10:flash:/`.
    2.  On the Arista switch CLI, verify the file is present in flash using `dir flash:`.
    3.  (Optional but highly recommended) Verify the MD5 or SHA256 checksum of the transferred file against the one provided by Arista to ensure integrity: `verify md5 flash:/EOS-4.28.0F.swi`.
    4.  Initiate the upgrade process: `install source flash:/EOS-4.28.0F.swi`.
    5.  Confirm the reload when prompted, understanding that the switch will reboot to apply the new software.
2.  **Question:** Why is it critical to back up both the `running-config` and `startup-config` to an external location before performing a major software upgrade or configuration change on an Arista switch?
    **Answer:** Backing up both configurations externally ensures you have a complete record of the device's current operational state (`running-config`) and its persistent configuration (`startup-config`). An external backup provides redundancy in case of device failure, accidental deletion of files on the switch's internal flash, or a catastrophic issue during the upgrade process. This allows for quick and reliable recovery to a known good state, minimizing downtime and potential data loss in a production environment. Relying solely on local backups is risky as they would be lost if the device itself fails.

#### AI generation note
Create a 10-minute animated explainer video with embedded CLI demos. Illustrate the flow of an EOS upgrade (download -> transfer -> verify -> install -> reload) using clear, easy-to-understand diagrams. Show commands for SCP transfer (from a client perspective), `dir flash:`, `install source`, and `copy running-config startup-config` for backup. Use animated diagrams to show file transfer paths and the conceptual difference between `running-config` and `startup-config`. Include a mini-quiz with 3 questions about the upgrade steps, the importance of checksum verification, and backup strategies. Ensure high-contrast visuals and clear audio for accessibility.

---

## Module 3: Ethernet Switching Fundamentals with Arista EOS

This module delves into the core principles of Ethernet switching, focusing on how Arista EOS-powered devices implement and manage these fundamental network operations. You will gain a solid understanding of how switches learn and forward traffic, segment networks using VLANs, prevent loops with Spanning Tree Protocol, and enhance link capacity and resilience with Link Aggregation.

### Chapter 3.1 — Ethernet Switching Basics and MAC Address Tables

#### Learning objectives
*   Explain the fundamental role of MAC addresses in Layer 2 forwarding.
*   Describe the MAC address learning process within an Arista EOS switch.
*   Interpret and manage the MAC address table (CAM table) using Arista EOS commands.
*   Differentiate between unicast, multicast, and broadcast forwarding behaviors in an Ethernet switch.
*   Identify common mistakes related to MAC address table management and their implications.

#### Detailed lesson content
Ethernet switching is the cornerstone of most modern local area networks (LANs), enabling devices to communicate efficiently within a shared segment. At its heart, an Ethernet switch operates at Layer 2 of the OSI model, primarily concerned with forwarding frames based on Media Access Control (MAC) addresses. A MAC address is a unique, 48-bit hardware identifier assigned to network interfaces, typically burned into the device's firmware. It's often represented as six pairs of hexadecimal digits, like `00:1A:2B:3C:4D:5E`. When a device sends an Ethernet frame, it includes both the source MAC address (its own) and the destination MAC address (the intended recipient's).

An Arista EOS switch, like any other Layer 2 switch, performs three primary functions: learning, forwarding, and filtering. The learning process is crucial: when a switch receives a frame on an interface, it examines the source MAC address of that frame. If this MAC address is not already in its MAC address table (also known as the Content Addressable Memory or CAM table), the switch adds an entry associating that MAC address with the interface on which the frame was received. This dynamic learning allows the switch to build a map of which devices are reachable through which ports. For instance, if a frame arrives on Ethernet1 with a source MAC of `00:01:02:03:04:05`, the switch learns that `00:01:02:03:04:05` is connected to Ethernet1. This process is continuous and adaptive; if a device moves to a different port, the switch will update its table accordingly.

The forwarding and filtering functions rely heavily on this learned MAC address table. When a switch receives a frame with a destination MAC address, it consults its MAC address table. If an entry exists for that destination MAC address, the switch forwards the frame *only* out the associated interface. This is called unicast forwarding, and it's highly efficient because it prevents unnecessary traffic from being sent to other ports. If the destination MAC address is *not* found in the table, the switch doesn't know where the destination device is located. In this scenario, the switch floods the frame out all active interfaces *except* the one it was received on. This flooding ensures that the frame reaches its destination eventually, and the response from the destination will then allow the switch to learn its MAC address. This flooding behavior is also how broadcast (destination MAC `FF:FF:FF:FF:FF:FF`) and unknown multicast frames are handled.

Arista EOS provides robust commands to inspect and manage the MAC address table. The `show mac address-table` command is your primary tool for viewing learned MAC addresses. You'll see entries indicating the VLAN, MAC address, type (dynamic, static, learned), and the interface. For example, `show mac address-table address 00:11:22:33:44:55` can quickly locate a specific device. While most MAC addresses are learned dynamically, there are scenarios where you might want to configure a static MAC address entry. A static entry manually binds a MAC address to a specific interface and VLAN, preventing it from being learned dynamically or aged out. This can be useful for security purposes or for critical devices that should always be associated with a particular port. To configure a static entry, you would use commands like `mac address-table static 00:11:22:33:44:55 vlan 10 interface Ethernet1`. This ensures that traffic destined for `00:11:22:33:44:55` always goes out Ethernet1 in VLAN 10, regardless of where it might be dynamically learned.

A common mistake for new network engineers is misunderstanding the implications of MAC address table aging. Dynamic entries in the MAC address table have an aging timer. If no frames are received from a particular MAC address on an interface within the aging period (typically 300 seconds by default in EOS), that entry is removed from the table. This is essential for network hygiene, allowing the table to adapt to device movements. However, if a device is silent for too long, its entry will be removed, and the next frame destined for it will be flooded until its MAC address is re-learned. In high-security environments, or for critical servers, static MAC entries can prevent this dynamic behavior, though they require manual management. Another potential issue is a MAC address table overflow, where too many MAC addresses are learned on a single port (e.g., due to a misconfigured virtual machine host or a loop), potentially exhausting the switch's CAM table resources and leading to performance degradation or even denial of service. Arista EOS allows you to configure MAC address limits per interface to mitigate this. For safety, always be cautious when configuring static MAC addresses or changing aging timers, as incorrect configurations can lead to connectivity issues or security vulnerabilities. Always verify changes with `show` commands and monitor network behavior.

#### Key concepts
*   **MAC Address (Media Access Control Address):** A unique 48-bit hardware identifier for network interfaces, used for Layer 2 communication.
*   **Ethernet Frame:** The basic unit of data transferred over an Ethernet network, containing source and destination MAC addresses.
*   **MAC Address Table (CAM Table):** A table maintained by a switch that maps MAC addresses to specific switch ports and VLANs.
*   **Dynamic Learning:** The process by which a switch automatically populates its MAC address table by inspecting source MAC addresses of incoming frames.
*   **Unicast Forwarding:** When a switch forwards a frame out a single, specific port based on a known destination MAC address in its table.
*   **Flooding:** When a switch sends a frame out all active ports (except the ingress port) because the destination MAC address is unknown, or it's a broadcast/unknown multicast frame.
*   **Static MAC Address Entry:** A manually configured entry in the MAC address table that permanently binds a MAC address to a port and VLAN.
*   **MAC Address Aging:** The process by which dynamically learned MAC address entries are removed from the table after a period of inactivity.

#### Hands-on activity
**Objective:** Explore the MAC address table on an Arista EOS switch and configure a static MAC entry.

**Scenario:** You have an Arista vEOS switch (or physical switch) and a client device connected to `Ethernet1`. You want to observe dynamic MAC learning and then configure a static entry for a hypothetical server.

**Steps:**
1.  **Connect and Verify:** Ensure your client device is connected to `Ethernet1` and has an IP address. Ping another device on the network or the switch's management IP to generate some traffic.
2.  **Observe Dynamic Learning:**
    ```eos
    Arista# show mac address-table
    ```
    Look for an entry corresponding to your client device's MAC address on `Ethernet1`. Note its type (e.g., `DYNAMIC`).
3.  **Clear MAC Address Table (Optional, for demonstration):**
    ```eos
    Arista# clear mac address-table dynamic interface Ethernet1
    ```
    Then, ping again from your client and re-run `show mac address-table` to see it re-learn.
4.  **Configure a Static MAC Entry:** Imagine you have a server with MAC address `00:DE:AD:BE:EF:01` that you want to statically bind to `Ethernet2` in VLAN 1 (the default VLAN).
    ```eos
    Arista# configure terminal
    Arista(config)# mac address-table static 00:DE:AD:BE:EF:01 vlan 1 interface Ethernet2
    Arista(config)# end
    ```
5.  **Verify Static Entry:**
    ```eos
    Arista# show mac address-table
    ```
    You should now see an entry for `00:DE:AD:BE:EF:01` with type `STATIC` on `Ethernet2`.
6.  **Remove Static Entry:**
    ```eos
    Arista# configure terminal
    Arista(config)# no mac address-table static 00:DE:AD:BE:EF:01 vlan 1 interface Ethernet2
    Arista(config)# end
    ```
7.  **Verify Removal:**
    ```eos
    Arista# show mac address-table
    ```
    The static entry should no longer be present.

#### Assessment idea
1.  **Question:** A network administrator observes that a new device connected to `Ethernet5` on an Arista switch is experiencing intermittent connectivity issues. After checking the `show mac address-table` output, they notice the device's MAC address (`AA:BB:CC:DD:EE:FF`) is sometimes associated with `Ethernet5` and sometimes with `Ethernet6`. What is the most likely cause of this behavior, and how would you resolve it?
    *   **Correct Answer & Explanation:** The most likely cause is a Layer 2 loop in the network, specifically involving `Ethernet5` and `Ethernet6`. When a loop exists, the same MAC address can be seen on multiple ports as frames circulate endlessly. The switch learns the MAC address on one port, then on another, causing the MAC address table to "flap" between ports. This flapping leads to intermittent connectivity as the switch constantly updates its forwarding decision. To resolve this, the administrator should investigate the physical cabling and logical configuration (e.g., misconfigured redundant links) between the devices connected to `Ethernet5` and `Ethernet6`. Implementing or verifying Spanning Tree Protocol (STP) is crucial to prevent such loops by blocking redundant paths.
2.  **Question:** You need to ensure that a critical server with MAC address `00:11:22:33:44:55` is *always* associated with `Ethernet10` in VLAN 20 on your Arista switch, even if it temporarily moves or if the port experiences an issue. What Arista EOS command would you use to achieve this, and why is this approach beneficial?
    *   **Correct Answer & Explanation:** You would use the `mac address-table static` command. The specific command would be:
        ```eos
        Arista(config)# mac address-table static 00:11:22:33:44:55 vlan 20 interface Ethernet10
        ```
        This approach is beneficial because it creates a permanent, non-aging entry in the MAC address table. This prevents the MAC address from being dynamically learned on a different port (a potential security risk or misconfiguration indicator) and ensures that traffic destined for this critical server is always forwarded directly to `Ethernet10` in VLAN 20, improving predictability and potentially security for that specific device.

#### AI generation note
Create a 12-minute interactive lab walkthrough video. Begin with a brief animation explaining MAC address learning and flooding. Then, switch to a live terminal demo on an Arista vEOS instance. Show `show mac address-table` before and after connecting a client, demonstrating dynamic learning. Walk through configuring a static MAC address, verifying it, and then removing it. Use split-screen for terminal and a simple network diagram showing devices and ports. Include a pop-up quiz after the static MAC configuration section asking about its purpose. Emphasize common mistakes like MAC flapping due to loops.

---

### Chapter 3.2 — VLANs: Concepts and Configuration

#### Learning objectives
*   Explain the purpose and benefits of Virtual Local Area Networks (VLANs) in network segmentation.
*   Differentiate between access ports and trunk ports, and describe their respective roles in VLAN implementation.
*   Configure VLANs, access ports, and trunk ports on an Arista EOS switch using standard CLI commands.
*   Understand the function of 802.1Q tagging and the concept of a native VLAN.
*   Troubleshoot common VLAN configuration issues, such as native VLAN mismatches and incorrect allowed VLANs.

#### Detailed lesson content
Virtual Local Area Networks, or VLANs, are a fundamental concept in modern network design, allowing you to logically segment a single physical switch or network into multiple distinct broadcast domains. Imagine a single physical switch with 24 ports. Without VLANs, all devices connected to these ports are in the same broadcast domain, meaning a broadcast frame sent by one device is received by all others. This can lead to security vulnerabilities, excessive broadcast traffic, and inefficient resource utilization. VLANs solve this by creating logical groups of ports (or even individual devices) that behave as if they are on separate switches, even though they share the same physical hardware. For example, you can have VLAN 10 for "Sales" and VLAN 20 for "Marketing" on the same switch; devices in VLAN 10 cannot directly communicate with devices in VLAN 20 without a Layer 3 routing device.

The primary benefits of VLANs include enhanced security (isolating sensitive traffic), improved performance (reducing broadcast traffic within a segment), simplified network management (grouping users or devices by function), and increased flexibility in network design. On an Arista EOS switch, configuring VLANs involves a few key steps. First, you need to create the VLAN itself. This is done in global configuration mode using the `vlan <VLAN_ID>` command, where `<VLAN_ID>` is a number between 1 and 4094 (VLAN 1 is the default and often used for management, though best practice suggests using a dedicated management VLAN). For instance, `vlan 10` creates VLAN 10. You can also assign a descriptive name using `name Sales` within the VLAN configuration mode.

Once VLANs are created, you need to assign switch ports to these VLANs. There are two main types of ports in a VLAN-enabled network: access ports and trunk ports. An **access port** is configured to carry traffic for a *single* VLAN. It's typically used for end devices like computers, printers, or servers. When a frame exits an access port, it is untagged, meaning it doesn't carry any VLAN identification. When a frame enters an access port, the switch automatically assigns it to the configured access VLAN. To configure an access port on an Arista switch, you would enter interface configuration mode for the desired port (e.g., `interface Ethernet1`) and use the command `switchport mode access` followed by `switchport access vlan <VLAN_ID>`. For example, `switchport access vlan 10` assigns Ethernet1 to VLAN 10.

A **trunk port**, on the other hand, is designed to carry traffic for *multiple* VLANs simultaneously. Trunk ports are typically used to connect switches to other switches, or switches to routers, allowing VLAN information to traverse between network devices. To differentiate traffic belonging to different VLANs over a single physical link, trunk ports use a tagging mechanism defined by the IEEE 802.1Q standard. When a frame belonging to a specific VLAN (other than the native VLAN) is sent over a trunk, an 802.1Q tag is inserted into the frame header, indicating its VLAN ID. When the frame arrives at the receiving switch, the tag is read, and the frame is directed to the appropriate VLAN. To configure a trunk port on an Arista switch, you use `switchport mode trunk` in interface configuration mode. By default, a trunk port allows all VLANs. You can restrict which VLANs are allowed on a trunk using `switchport trunk allowed vlan <VLAN_ID_RANGE>` (e.g., `switchport trunk allowed vlan 10,20,30` or `switchport trunk allowed vlan 1-100`).

The concept of a **native VLAN** is specific to 802.1Q trunks. The native VLAN is the VLAN whose traffic is sent *untagged* over a trunk link. All other VLANs on the trunk are tagged. By default, VLAN 1 is often the native VLAN. It's crucial that the native VLAN configured on one end of a trunk link matches the native VLAN on the other end. A **native VLAN mismatch** is a very common and insidious troubleshooting problem because untagged traffic from the mismatched native VLAN on one switch will be interpreted as belonging to the *other* switch's native VLAN, leading to connectivity issues and potential security breaches (where traffic from one VLAN is accidentally forwarded into another). You can change the native VLAN using `switchport trunk native vlan <VLAN_ID>`. Always ensure that the native VLAN is consistent across both ends of a trunk link to avoid communication failures.

When troubleshooting VLANs, start by verifying the VLAN existence (`show vlan`), then check port assignments (`show interfaces EthernetX switchport`), and finally, inspect trunk configurations (`show interfaces trunk`). Look for `access` vs. `trunk` mode, correct `access vlan` assignments, matching `native vlan` on trunks, and appropriate `allowed vlan` lists. A common mistake is forgetting to create the VLAN globally before assigning it to a port, or allowing too many (or too few) VLANs on a trunk. Always save your configuration after making changes using `write memory` or `copy running-config startup-config`.

#### Key concepts
*   **VLAN (Virtual Local Area Network):** A logical subdivision of a network that isolates broadcast domains, improving security, performance, and manageability.
*   **Broadcast Domain:** A logical division of a computer network where all nodes can reach each other by broadcast at the data link layer. VLANs segment these.
*   **Access Port:** A switch port configured to carry traffic for a single VLAN, typically connected to an end device. Traffic is untagged.
*   **Trunk Port:** A switch port configured to carry traffic for multiple VLANs, typically connected to another switch or a router. Uses 802.1Q tagging.
*   **802.1Q:** An IEEE standard for VLAN tagging, which inserts a 4-byte tag into the Ethernet frame header to identify the VLAN ID.
*   **Native VLAN:** The VLAN on an 802.1Q trunk whose traffic is sent untagged. Must match on both ends of a trunk link.
*   **Native VLAN Mismatch:** A common configuration error where the native VLANs on connected trunk ports do not match, leading to communication issues.

#### Hands-on activity
**Objective:** Configure VLANs, access ports, and a trunk port on two interconnected Arista EOS switches.

**Scenario:** You have two Arista vEOS switches, `SwitchA` and `SwitchB`, connected via `Ethernet1`. You need to create VLAN 10 (Sales) and VLAN 20 (Marketing) and assign access ports, then configure the inter-switch link as a trunk.

**Topology:**
`Client1 (VLAN 10) -- Ethernet2 (SwitchA) -- Ethernet1 (SwitchA) --- Ethernet1 (SwitchB) -- Ethernet2 (SwitchB) -- Client2 (VLAN 20)`

**Steps (on both SwitchA and SwitchB):**

1.  **Create VLANs:**
    ```eos
    Arista(config)# vlan 10
    Arista(config-vlan-10)# name Sales
    Arista(config-vlan-10)# exit
    Arista(config)# vlan 20
    Arista(config-vlan-20)# name Marketing
    Arista(config-vlan-20)# exit
    Arista(config)# show vlan
    ```
2.  **Configure Access Ports:**
    *   **On SwitchA:** Assign `Ethernet2` to VLAN 10 for `Client1`.
        ```eos
        Arista(config)# interface Ethernet2
        Arista(config-if-Et2)# switchport mode access
        Arista(config-if-Et2)# switchport access vlan 10
        Arista(config-if-Et2)# end
        Arista# show interfaces Ethernet2 switchport
        ```
    *   **On SwitchB:** Assign `Ethernet2` to VLAN 20 for `Client2`.
        ```eos
        Arista(config)# interface Ethernet2
        Arista(config-if-Et2)# switchport mode access
        Arista(config-if-Et2)# switchport access vlan 20
        Arista(config-if-Et2)# end
        Arista# show interfaces Ethernet2 switchport
        ```
3.  **Configure Trunk Ports (on both SwitchA and SwitchB):**
    *   Configure `Ethernet1` as a trunk, allowing only VLANs 10 and 20.
        ```eos
        Arista(config)# interface Ethernet1
        Arista(config-if-Et1)# switchport mode trunk
        Arista(config-if-Et1)# switchport trunk allowed vlan 10,20
        Arista(config-if-Et1)# end
        Arista# show interfaces trunk
        ```
4.  **Verification:**
    *   Connect `Client1` to `SwitchA`'s `Ethernet2` and `Client2` to `SwitchB`'s `Ethernet2`. Assign IPs in the same subnet for VLAN 10 (e.g., 192.168.10.10/24) and VLAN 20 (e.g., 192.168.20.10/24).
    *   Try to ping from `Client1` to another device in VLAN 10 (if you have one) and verify connectivity.
    *   Try to ping from `Client1` to `Client2`. This should fail, demonstrating VLAN isolation (they are in different broadcast domains).
    *   On both switches, use `show interfaces trunk` and `show vlan` to confirm your configurations.

#### Assessment idea
1.  **Question:** A network engineer has configured `Ethernet5` on `SwitchA` as a trunk port, allowing VLANs 10, 20, and 30, with native VLAN 1. On `SwitchB`, `Ethernet5` is also configured as a trunk, allowing VLANs 10, 20, and 30, but with native VLAN 99. What is the most likely outcome of this configuration, and what command would you use on an Arista switch to quickly identify this issue?
    *   **Correct Answer & Explanation:** The most likely outcome is a **native VLAN mismatch**. This will cause untagged traffic (which `SwitchA` sends as VLAN 1 traffic and `SwitchB` sends as VLAN 99 traffic) to be misclassified. Devices in VLAN 1 on `SwitchA` will not be able to communicate with devices in VLAN 1 on `SwitchB`, and similarly for VLAN 99. More critically, it can lead to security vulnerabilities where traffic from one VLAN is inadvertently forwarded into another. To quickly identify this issue on an Arista switch, you would use the command `show interfaces trunk`. This command displays the configured and operational native VLANs for each trunk port, making it easy to spot a mismatch.
2.  **Question:** You are tasked with connecting a new IP phone system to an Arista switch. The IP phones require voice traffic to be in VLAN 50 and data traffic (from a PC connected to the phone's pass-through port) to be in VLAN 60. How would you configure a single switch port (`Ethernet3`) to support both VLANs for a phone and a PC, and what is this type of port configuration called?
    *   **Correct Answer & Explanation:** This scenario requires configuring the switch port as an **access port with voice VLAN capability** (or a multi-VLAN access port). While not explicitly a "trunk" for end devices, it allows the switch to tag voice traffic with VLAN 50 and treat data traffic (often untagged from the PC) as belonging to VLAN 60. The specific Arista EOS configuration would be:
        ```eos
        Arista(config)# interface Ethernet3
        Arista(config-if-Et3)# switchport mode access
        Arista(config-if-Et3)# switchport access vlan 60  # Data VLAN
        Arista(config-if-Et3)# switchport voice vlan 50   # Voice VLAN
        Arista(config-if-Et3)# end
        ```
        The `switchport access vlan 60` command sets the default data VLAN, and `switchport voice vlan 50` enables the port to recognize and tag voice traffic (typically based on OUI or CDP/LLDP negotiation) with VLAN 50. This allows a single physical port to logically separate voice and data traffic for the IP phone and its connected PC.

#### AI generation note
Produce a 15-minute animated video combined with a live terminal demonstration. Start with an animation illustrating broadcast domains shrinking with VLANs and how 802.1Q tagging works on trunks. Transition to a live demo on two interconnected Arista vEOS switches. Walk through creating VLANs, configuring `Ethernet2` as an access port for VLAN 10, and `Ethernet3` as an access port for VLAN 20. Then, configure `Ethernet1` on both switches as a trunk, allowing only VLANs 10 and 20. Show `show vlan`, `show interfaces switchport`, and `show interfaces trunk` commands. Conclude with a scenario demonstrating a native VLAN mismatch and how `show interfaces trunk` helps diagnose it, followed by a fix. Include visual overlays of frame headers with and without 802.1Q tags.

---

### Chapter 3.3 — Spanning Tree Protocol (STP) Fundamentals

#### Learning objectives
*   Explain the problem of Layer 2 loops and why Spanning Tree Protocol (STP) is necessary.
*   Describe the core principles of STP operation, including root bridge election, port roles, and port states.
*   Differentiate between the various Spanning Tree Protocol versions (STP, RSTP, MSTP) and their advantages.
*   Configure and verify basic STP settings, including portfast and BPDU Guard, on an Arista EOS switch.
*   Identify common STP misconfigurations and their potential impact on network stability.

#### Detailed lesson content
Ethernet networks benefit greatly from redundancy. Having multiple paths between switches ensures that if one link fails, traffic can still reach its destination. However, this redundancy introduces a critical problem at Layer 2: **loops**. A Layer 2 loop occurs when there are redundant paths between network segments, causing Ethernet frames to circulate endlessly. This leads to several severe issues: broadcast storms (broadcast frames multiplying and consuming all available bandwidth), MAC address table instability (MAC addresses flapping between ports as frames arrive from different paths), and ultimately, network meltdown. Spanning Tree Protocol (STP), defined by IEEE 802.1D, was developed specifically to prevent these Layer 2 loops while still allowing for physical redundancy.

STP's fundamental mechanism is to logically block redundant paths, creating a single, loop-free logical topology. It achieves this by exchanging special frames called Bridge Protocol Data Units (BPDUs) between switches. BPDUs carry information about the switch's Bridge ID (BID), which is composed of a configurable priority and the switch's MAC address. The STP process involves three key steps:

1.  **Root Bridge Election:** All switches in a broadcast domain participate in electing a single **root bridge**. The switch with the lowest BID becomes the root bridge. If priorities are equal, the lowest MAC address wins. The root bridge serves as the reference point for the entire spanning tree. It's crucial to strategically place your root bridge (e.g., a core switch) to ensure optimal traffic flow.
2.  **Root Port Selection:** On every non-root switch, one port is designated as the **root port**. This is the port that offers the shortest, lowest-cost path back to the root bridge. Cost is typically determined by link speed (e.g., 10Gbps has a lower cost than 1Gbps).
3.  **Designated Port Selection:** On each network segment (link), one switch port is designated as the **designated port**. This is the port that provides the lowest-cost path from that segment to the root bridge. All non-root, non-designated ports are put into a **blocking state** to prevent loops.

Ports transition through several states: **Blocking** (no frames forwarded, BPDUs received), **Listening** (prepares to forward, BPDUs processed), **Learning** (learns MAC addresses, no frames forwarded yet), and **Forwarding** (full operation). The transition from blocking to forwarding can take 30-50 seconds with traditional STP, which is a significant delay for hosts connecting to the network.

Arista EOS supports various STP versions. The original **STP (802.1D)** is slow to converge. **Rapid Spanning Tree Protocol (RSTP, 802.1w)** significantly improves convergence time by introducing faster port state transitions and different port types (Edge, Point-to-Point, Shared). RSTP is generally preferred for modern networks. **Per-VLAN Spanning Tree Plus (PVST+)** and **Rapid PVST+** (Cisco proprietary, but widely supported) run a separate spanning tree instance for each VLAN, allowing for load balancing across redundant links on a per-VLAN basis. **Multiple Spanning Tree Protocol (MSTP, 802.1s)** groups multiple VLANs into a single spanning tree instance (MST instance), reducing the CPU overhead compared to PVST+ in large networks with many VLANs. For Arista ACE, understanding RSTP and Rapid PVST+ is essential. You can configure the STP mode using `spanning-tree mode rapid-pvst` or `spanning-tree mode mstp` in global configuration mode.

To influence the root bridge election, you can adjust a switch's STP priority using `spanning-tree vlan <VLAN_ID> priority <value>`. A lower priority value makes a switch more likely to become the root. Common values are multiples of 4096 (e.g., 0, 4096, 8192...).

Two critical features for edge ports are **PortFast** and **BPDU Guard**.
*   **PortFast:** When enabled on an access port connected to an end device (like a PC or server), PortFast immediately transitions the port to the forwarding state, bypassing the listening and learning states. This prevents delays when a device connects. **Crucially, PortFast should NEVER be enabled on ports connecting to other switches or network devices, as it can create temporary loops.**
    ```eos
    Arista(config-if-Et1)# spanning-tree portfast
    ```
*   **BPDU Guard:** This feature enhances security. If a port with BPDU Guard enabled receives a BPDU (which it shouldn't, as it's an edge port), it immediately puts the port into an error-disabled state to prevent a potential loop or unauthorized switch from being introduced into the network. This requires manual intervention to bring the port back up or an auto-recovery mechanism.
    ```eos
    Arista(config-if-Et1)# spanning-tree bpduguard enable
    ```
    To recover an error-disabled port, you can use `clear spanning-tree detected-protocol interface EthernetX` or `shutdown` followed by `no shutdown` on the interface.

Common mistakes include not configuring PortFast on end-device ports (leading to slow boot times), configuring PortFast on trunk ports (creating temporary loops), not strategically placing the root bridge (leading to suboptimal traffic paths), and not enabling BPDU Guard on access ports (security risk). Always use `show spanning-tree` to verify the root bridge, port roles, and states. Pay attention to the `show spanning-tree active` for a concise overview.

#### Key concepts
*   **Layer 2 Loop:** A condition where redundant paths in an Ethernet network cause frames to circulate endlessly, leading to broadcast storms and MAC address table instability.
*   **Spanning Tree Protocol (STP):** An IEEE 802.1D protocol that prevents Layer 2 loops by logically blocking redundant paths.
*   **Bridge Protocol Data Unit (BPDU):** Special frames exchanged by switches to communicate STP information and elect the root bridge.
*   **Root Bridge:** The central switch in a spanning tree topology, elected based on the lowest Bridge ID (priority + MAC address).
*   **Root Port:** On a non-root switch, the port that provides the lowest-cost path back to the root bridge.
*   **Designated Port:** On each network segment, the port that provides the lowest-cost path from that segment to the root bridge.
*   **Blocking State:** An STP port state where the port does not forward user traffic but receives BPDUs, preventing loops.
*   **PortFast:** An STP feature that immediately transitions an access port to the forwarding state, bypassing listening/learning, for faster device connectivity.
*   **BPDU Guard:** An STP security feature that error-disables a port if it receives a BPDU, preventing unauthorized switches or loops.
*   **RSTP (Rapid Spanning Tree Protocol):** An enhanced version of STP (802.1w) with faster convergence times.
*   **Rapid PVST+ (Per-VLAN Spanning Tree Plus):** A Cisco-proprietary (but widely adopted) version of RSTP that runs a separate spanning tree instance for each VLAN.

#### Hands-on activity
**Objective:** Observe STP in action, configure PortFast, and test BPDU Guard on an Arista EOS switch.

**Scenario:** You have two Arista vEOS switches, `SwitchA` and `SwitchB`, connected by two `Ethernet` links (`Ethernet1` and `Ethernet2` on both). You also have a client device connected to `Ethernet3` on `SwitchA`.

**Topology:**
```
Client -- Ethernet3 (SwitchA)
          /       \
Ethernet1 (SwitchA) --- Ethernet1 (SwitchB)
Ethernet2 (SwitchA) --- Ethernet2 (SwitchB)
```

**Steps:**

1.  **Initial STP Observation (on both switches):**
    *   Ensure both `Ethernet1` and `Ethernet2` are active and connected between `SwitchA` and `SwitchB`.
    *   Observe the default STP behavior. One of the switches will become the root bridge, and one of the links on the non-root bridge will be in a blocking state.
    ```eos
    Arista# show spanning-tree active
    ```
    Identify the root bridge, root port, designated ports, and the blocked port.
2.  **Configure Root Bridge Priority (Optional):**
    *   On `SwitchA`, make it the preferred root bridge for VLAN 1.
    ```eos
    Arista(config)# spanning-tree vlan 1 priority 4096
    Arista(config)# end
    ```
    *   Wait a moment for convergence, then re-check `show spanning-tree active` on both switches. `SwitchA` should now be the root.
3.  **Configure PortFast:**
    *   On `SwitchA`, configure `Ethernet3` (connected to the client) with PortFast.
    ```eos
    Arista(config)# interface Ethernet3
    Arista(config-if-Et3)# spanning-tree portfast
    Arista(config-if-Et3)# end
    Arista# show spanning-tree interface Ethernet3 detail
    ```
    Verify that PortFast is enabled.
4.  **Test BPDU Guard:**
    *   On `SwitchA`, enable BPDU Guard on `Ethernet3`.
    ```eos
    Arista(config)# interface Ethernet3
    Arista(config-if-Et3)# spanning-tree bpduguard enable
    Arista(config-if-Et3)# end
    ```
    *   **Simulate a rogue switch:** Disconnect your client from `Ethernet3` and connect another Arista vEOS switch (or a physical switch) to `Ethernet3`. As soon as the newly connected switch sends BPDUs, `Ethernet3` on `SwitchA` should go into an error-disabled state.
    *   Verify the error state:
        ```eos
        Arista# show interfaces status
        Arista# show spanning-tree interface Ethernet3 detail
        ```
    *   **Recover the port:**
        ```eos
        Arista(config)# interface Ethernet3
        Arista(config-if-Et3)# shutdown
        Arista(config-if-Et3)# no shutdown
        Arista(config-if-Et3)# end
        ```
        Or, if configured for auto-recovery, wait for the timer.
5.  **Clean up:** Remove all STP configurations made during the activity.

#### Assessment idea
1.  **Question:** A network technician connects a new switch to an existing access port (`Ethernet10`) on an Arista switch that has `spanning-tree portfast` and `spanning-tree bpduguard enable` configured. What will be the immediate outcome for `Ethernet10`, and why is this behavior desired?
    *   **Correct Answer & Explanation:** The immediate outcome will be that `Ethernet10` on the Arista switch will go into an **error-disabled state**. This happens because the newly connected switch will start sending BPDUs (Bridge Protocol Data Units). Since `bpduguard enable` is configured on `Ethernet10`, and this port is expected to be an edge port connected only to end devices (not other switches), receiving BPDUs triggers the security mechanism. This behavior is highly desired because it prevents accidental or malicious Layer 2 loops from forming. If a switch were connected to a PortFast-enabled port without BPDU Guard, it could bypass the normal STP convergence process and immediately create a loop, causing a network outage. BPDU Guard acts as a crucial safety net.
2.  **Question:** Your network has two core Arista switches, `Core-A` and `Core-B`, connected by multiple links. You want `Core-A` to always be the root bridge for VLAN 10, and `Core-B` to be the root bridge for VLAN 20, to optimize traffic flow. How would you configure the STP priority on these switches to achieve this, assuming a default priority of 32768?
    *   **Correct Answer & Explanation:** To make `Core-A` the root bridge for VLAN 10, you would assign it a lower STP priority for VLAN 10 than `Core-B`. To make `Core-B` the root bridge for VLAN 20, you would assign it a lower STP priority for VLAN 20 than `Core-A`. A common practice is to use multiples of 4096.
        *   **On Core-A:**
            ```eos
            Arista(config)# spanning-tree vlan 10 priority 4096
            Arista(config)# spanning-tree vlan 20 priority 28672 # Or leave default for VLAN 20
            ```
        *   **On Core-B:**
            ```eos
            Arista(config)# spanning-tree vlan 10 priority 28672 # Or leave default for VLAN 10
            Arista(config)# spanning-tree vlan 20 priority 4096
            ```
        By setting `Core-A`'s priority for VLAN 10 to a low value (e.g., 4096) and `Core-B`'s priority for VLAN 20 to a low value, you ensure they win the root bridge election for their respective VLANs. The other switch can either keep its default priority (32768) or be explicitly set to a higher value (e.g., 28672) to ensure it doesn't become the root.

#### AI generation note
Create a 15-minute animated explanation video combined with a live terminal demo. Start with an animation clearly showing how Layer 2 loops form and the devastating effects. Then, animate how STP blocks a redundant path, followed by a brief explanation of root bridge, port roles, and states. Transition to a live Arista vEOS demo with two interconnected switches and a client. Show `show spanning-tree active` to identify the root and blocked ports. Then, demonstrate configuring `spanning-tree portfast` and `spanning-tree bpduguard enable` on an access port. Simulate a BPDU Guard violation by connecting a second switch to the access port and show the port going error-disabled, then recovering it. Use visual overlays to highlight command outputs and port states.

---

### Chapter 3.4 — Link Aggregation (LAG) with LACP

#### Learning objectives
*   Explain the need for Link Aggregation (LAG) and its benefits for network performance and resilience.
*   Differentiate between static LAG and Link Aggregation Control Protocol (LACP) based LAG.
*   Configure a Link Aggregation Group (LAG) using LACP on an Arista EOS switch.
*   Describe common load balancing methods used by LAGs and how to configure them.
*   Troubleshoot common LAG configuration issues, such as LACP mismatches and load balancing inefficiencies.

#### Detailed lesson content
As network demands grow, a single Ethernet link, even a 10 Gigabit one, can become a bottleneck. Furthermore, relying on a single link creates a single point of failure. **Link Aggregation (LAG)**, also known as EtherChannel (Cisco term) or bonding, is a technology that addresses these challenges by bundling multiple physical Ethernet links into a single logical link. This logical link, called a **Port-Channel** or LAG, provides two primary benefits: increased bandwidth (the aggregate bandwidth of all member links) and redundancy (if one physical link fails, the others continue to carry traffic without interruption).

Imagine you have two switches connected by a single 10Gbps link. If you aggregate two such links, you effectively get a 20Gbps logical link, and if one physical link goes down, the remaining 10Gbps link keeps the connection alive. This is a powerful mechanism for connecting core switches, servers with multiple NICs, or any devices requiring high throughput and availability.

There are two main types of Link Aggregation:
1.  **Static LAG (On mode):** In this mode, you manually configure the ports to be part of a channel group on both ends of the link. There's no negotiation protocol. The links are simply bundled together. This mode is simpler to configure but offers no fault detection for misconfigurations (e.g., if one side is configured but the other isn't, or if the links are connected to different devices).
2.  **Link Aggregation Control Protocol (LACP, IEEE 802.3ad):** LACP is a dynamic negotiation protocol that allows switches to automatically detect, bundle, and maintain aggregated links. It provides robust error detection and ensures that only compatible links are added to the bundle. LACP operates in two modes:
    *   **Active:** The port actively sends LACP PDUs (Protocol Data Units) to the remote device, attempting to form a LAG.
    *   **Passive:** The port waits to receive LACP PDUs from the remote device before initiating LACP negotiation. It will respond to active LACP requests but won't initiate them.
    For a successful LACP bundle, at least one side must be in `active` mode. Both sides can be `active`, or one `active` and one `passive`. Two `passive` sides will not form a bundle.

Configuring LACP on an Arista EOS switch involves a few steps. First, you create a logical port-channel interface. Then, you configure the physical member interfaces to join this port-channel, specifying the LACP mode.
```eos
Arista(config)# interface Port-Channel 1
Arista(config-if-Po1)# description Uplink_to_Core
Arista(config-if-Po1)# switchport mode trunk # Or access, depending on use case
Arista(config-if-Po1)# switchport trunk allowed vlan all # If trunk
Arista(config-if-Po1)# exit

Arista(config)# interface Ethernet1
Arista(config-if-Et1)# channel-group 1 mode active # Assign to Port-Channel 1, active LACP
Arista(config-if-Et1)# no switchport access vlan # Remove any existing access VLAN config
Arista(config-if-Et1)# no switchport mode access # Ensure it's not an access port
Arista(config-if-Et1)# exit

Arista(config)# interface Ethernet2
Arista(config-if-Et2)# channel-group 1 mode active
Arista(config-if-Et2)# no switchport access vlan
Arista(config-if-Et2)# no switchport mode access
Arista(config-if-Et2)# end
```
Notice that any Layer 2 or Layer 3 configurations (like `switchport mode trunk` or IP addresses) are applied to the `Port-Channel` interface, not the individual member interfaces. The member interfaces are primarily configured to join the channel group.

**Load balancing** is how the switch distributes traffic across the member links within a LAG. Arista EOS offers various load balancing algorithms, typically based on Layer 2, Layer 3, or Layer 4 information in the frame/packet header. Common methods include:
*   `src-mac`: Based on source MAC address.
*   `dst-mac`: Based on destination MAC address.
*   `src-dst-mac`: Based on both source and destination MAC addresses.
*   `src-ip`: Based on source IP address.
*   `dst-ip`: Based on destination IP address.
*   `src-dst-ip`: Based on both source and destination IP addresses.
*   `src-port`: Based on source TCP/UDP port.
*   `dst-port`: Based on destination TCP/UDP port.
*   `src-dst-ip-port`: Based on source/destination IP and TCP/UDP ports.

The choice of load balancing method is crucial for efficient traffic distribution. For example, if you have many clients communicating with a single server, using `src-ip` or `src-mac` might cause all traffic to the server to use only one link. In such cases, `src-dst-ip` or `src-dst-ip-port` would provide better distribution. You configure the load balancing method globally:
```eos
Arista(config)# port-channel load-balance ?
  dst-ip         Load balance based on destination IP address
  dst-mac        Load balance based on destination MAC address
  dst-port       Load balance based on destination TCP/UDP port
  src-dst-ip     Load balance based on source and destination IP address
  src-dst-ip-port  Load balance based on source and destination IP address and TCP/UDP port
  src-dst-mac    Load balance based on source and destination MAC address
  src-ip         Load balance based on source IP address
  src-mac        Load balance based on source MAC address
  src-port       Load balance based on source TCP/UDP port
```
A common mistake is an LACP mode mismatch (e.g., one side active, the other static, or both passive), which prevents the bundle from forming. Another is forgetting to apply configurations to the `Port-Channel` interface instead of the member interfaces. Always verify the LAG status using `show port-channel summary` and `show lacp neighbor`. If the bundle isn't forming, check `show interfaces status` for individual link states and `show lacp internal` for detailed LACP information. Ensure all member links have identical speed, duplex, and VLAN configurations.

#### Key concepts
*   **Link Aggregation (LAG):** A technology that bundles multiple physical Ethernet links into a single logical link to increase bandwidth and provide redundancy.
*   **Port-Channel:** The logical interface created by aggregating multiple physical links.
*   **LACP (Link Aggregation Control Protocol):** An IEEE 802.3ad standard for dynamically negotiating and maintaining aggregated links.
*   **LACP Active Mode:** A port actively sends LACP PDUs to form a LAG.
*   **LACP Passive Mode:** A port waits for LACP PDUs from a remote device to form a LAG.
*   **Static LAG (On Mode):** Manually configured link aggregation without LACP negotiation.
*   **Load Balancing:** The method used by a switch to distribute traffic across the member links within a LAG.
*   **Redundancy:** The ability of a system to continue operating even if one or more components fail.

#### Hands-on activity
**Objective:** Configure an LACP-based Link Aggregation Group between two Arista EOS switches and verify its operation.

**Scenario:** You have two Arista vEOS switches, `SwitchA` and `SwitchB`, connected by two `Ethernet` links (`Ethernet1` and `Ethernet2` on both). You want to aggregate these two links into a single logical trunk using LACP.

**Topology:**
```
          Ethernet1 (SwitchA) --- Ethernet1 (SwitchB)
(SwitchA) --- Port-Channel 1 --- (SwitchB)
          Ethernet2 (SwitchA) --- Ethernet2 (SwitchB)
```

**Steps (on both SwitchA and SwitchB):**

1.  **Configure Port-Channel Interface:**
    ```eos
    Arista(config)# interface Port-Channel 1
    Arista(config-if-Po1)# description Inter-Switch-LAG
    Arista(config-if-Po1)# switchport mode trunk
    Arista(config-if-Po1)# switchport trunk allowed vlan all
    Arista(config-if-Po1)# exit
    ```
2.  **Configure Member Interfaces for LACP:**
    *   Ensure `Ethernet1` and `Ethernet2` are in their default state (no `switchport access vlan` or `switchport mode access` configured).
    ```eos
    Arista(config)# interface Ethernet1
    Arista(config-if-Et1)# channel-group 1 mode active
    Arista(config-if-Et1)# exit
    Arista(config)# interface Ethernet2
    Arista(config-if-Et2)# channel-group 1 mode active
    Arista(config-if-Et2)# end
    ```
3.  **Verify LAG Status:**
    *   After configuring both switches, wait a moment for LACP negotiation.
    ```eos
    Arista# show port-channel summary
    ```
    You should see Port-Channel 1 listed with `(SU)` indicating it's in a bundled state, and its member interfaces `Et1` and `Et2` also showing `(P)` for bundled in port-channel.
    ```eos
    Arista# show lacp neighbor
    ```
    This command will show details about the LACP negotiation with the remote switch.
    ```eos
    Arista# show interfaces Port-Channel 1
    ```
    This will show the status of the logical interface.
4.  **Test Redundancy (Optional):**
    *   While traffic is flowing over the LAG (e.g., continuous pings between devices on different switches), administratively shut down one of the physical links on `SwitchA` (e.g., `interface Ethernet1`, then `shutdown`).
    *   Observe that traffic continues over the remaining link.
    *   Bring the link back up (`no shutdown`).
    *   Verify the LAG status again with `show port-channel summary`.
5.  **Configure Load Balancing (on both switches):**
    ```eos
    Arista(config)# port-channel load-balance src-dst-ip
    Arista(config)# end
    ```
    *   Verify the configuration:
    ```eos
    Arista# show port-channel load-balance
    ```

#### Assessment idea
1.  **Question:** A network engineer has configured `Ethernet1` and `Ethernet2` on `SwitchA` to be part of `Port-Channel 1` using `channel-group 1 mode active`. On `SwitchB`, the corresponding `Ethernet1` and `Ethernet2` ports are configured with `channel-group 1 mode on`. When checking `show port-channel summary` on both switches, the bundle is not forming. What is the problem, and how should it be corrected?
    *   **Correct Answer & Explanation:** The problem is an **LACP mode mismatch**. `SwitchA` is configured for LACP `active` mode, which attempts to negotiate a bundle using LACP. `SwitchB` is configured for `mode on`, which is a static LAG mode and does not participate in LACP negotiation. For LACP to form, both sides must either be `active`, or one `active` and one `passive`. A static `on` mode cannot form a bundle with an LACP `active` or `passive` mode. To correct this, `SwitchB`'s `Ethernet1` and `Ethernet2` should also be configured with `channel-group 1 mode active` (or `passive`) to match `SwitchA`'s LACP configuration.
2.  **Question:** You have a Link Aggregation Group (LAG) consisting of four 10Gbps links between two Arista switches. You notice that when a single client on one switch communicates with a single server on the other switch, the traffic consistently uses only one of the four 10Gbps links, even though the LAG is up and healthy. What is the most likely reason for this, and what load balancing method would you recommend to potentially improve distribution for this specific traffic pattern?
    *   **Correct Answer & Explanation:** The most likely reason is that the current **load balancing algorithm** is hashing traffic based on criteria that are identical for this single client-to-server flow. For example, if the load balancing is set to `src-mac` or `src-ip`, all packets from the same source MAC/IP to the same destination will always hash to the same physical link. Since there's only one client and one server, their source and destination MAC/IP addresses are constant, leading to traffic always using the same link. To potentially improve distribution for this specific traffic pattern, you should configure a load balancing method that includes more variables, such as **`src-dst-ip-port`**. This method hashes traffic based on both source and destination IP addresses, and source and destination TCP/UDP port numbers. As the client and server communicate using different applications or sessions, the port numbers will vary, allowing the switch to distribute different flows across multiple links within the LAG, leading to better utilization.

#### AI generation note
Create a 15-minute live coding video. Start with a brief animation explaining the concepts of increased bandwidth and redundancy with LAG. Then, switch to a live terminal demo on two interconnected Arista vEOS switches. Walk through configuring `Port-Channel 1` on both switches, then adding `Ethernet1` and `Ethernet2` to `channel-group 1 mode active`. Show `show port-channel summary` and `show lacp neighbor` to verify the bundle. Demonstrate the redundancy by shutting down one member link and showing traffic continuity. Conclude by explaining different load balancing options and configuring `port-channel load-balance src-dst-ip`. Use split-screen for terminal and a network diagram showing links bundling. Include a reflection prompt asking learners to consider appropriate load balancing methods for different network scenarios.

---

## Module 4: IP Addressing and Basic Layer 3 Routing

This module will guide you through the foundational concepts of IP addressing, both IPv4 and IPv6, which are crucial for any network professional. You'll learn how to assign and manage IP addresses on Arista EOS devices, understand the principles of subnetting, and then dive into the basics of Layer 3 routing. We'll explore how to configure static routes to direct traffic across different networks and how to enable communication between VLANs using Switched Virtual Interfaces (SVIs) on Arista switches, laying the groundwork for more complex routing scenarios.

### Chapter 4.1 — IPv4 Addressing Fundamentals

#### Learning objectives
*   Explain the structure and components of an IPv4 address, including network, host, and broadcast addresses.
*   Differentiate between classful and classless IP addressing and apply CIDR notation.
*   Perform subnetting calculations to divide a larger network into smaller, efficient subnets.
*   Identify common IPv4 addressing mistakes and best practices for allocation.
*   Configure basic IPv4 addresses on Arista EOS device interfaces.

#### Detailed lesson content
Welcome to the fundamental building block of modern networking: IP addressing. Specifically, we're starting with IPv4, the fourth revision of the Internet Protocol, which has been the backbone of the internet for decades. An IPv4 address is a 32-bit numerical label assigned to each device participating in a computer network that uses the Internet Protocol for communication. These addresses are typically represented in dotted-decimal notation, like `192.168.1.10`, making them more human-readable. This 32-bit address is logically divided into two main parts: the network portion and the host portion. The network portion identifies the specific network segment a device belongs to, while the host portion uniquely identifies the device within that network. Understanding this distinction is paramount for successful network design and troubleshooting.

To determine which part of an IPv4 address refers to the network and which refers to the host, we use a subnet mask. Historically, IP addresses were categorized into classes (A, B, C, D, E), with each class having a default subnet mask that defined the network and host boundaries. For instance, a Class C address like `192.168.1.0` would have a default subnet mask of `255.255.255.0`, meaning the first three octets (`192.168.1`) represent the network, and the last octet (`0`) is for host identification. However, this classful addressing scheme proved inefficient due to rapid IP address exhaustion. This led to the adoption of Classless Inter-Domain Routing (CIDR), which allows for more flexible and efficient allocation of IP addresses. With CIDR, the subnet mask is expressed as a prefix length, such as `/24` or `/27`, indicating the number of bits used for the network portion. For example, `192.168.1.0/24` means the first 24 bits define the network, and the remaining 8 bits are for hosts. This flexibility is key to modern network design.

Subnetting is the process of dividing a larger IP network into smaller, more manageable subnetworks. This practice offers several advantages, including improved network performance by reducing broadcast traffic, enhanced security by segmenting different departments or functions, and more efficient use of IP address space. When you subnet, you "borrow" bits from the host portion of the IP address to create additional network bits, thereby creating more, smaller networks. For example, if you start with a `192.168.1.0/24` network, you have 254 usable host addresses. By subnetting it into `192.168.1.0/27` networks, you create 8 subnets, each with 30 usable host addresses. Each subnet will have its own unique network address, a range of usable host addresses, and a broadcast address. The network address is the first address in the subnet, used to identify the subnet itself. The broadcast address is the last address in the subnet, used to send data to all devices within that specific subnet. The addresses between the network and broadcast addresses are available for host assignment.

Configuring IPv4 addresses on an Arista EOS device is a straightforward process. You typically navigate to the specific interface you wish to configure, then assign an IP address and its corresponding subnet mask. It's crucial to ensure that each device on a given subnet has a unique host IP address and the correct subnet mask. A common mistake beginners make is assigning overlapping IP addresses or using an incorrect subnet mask, which can lead to connectivity issues or even network outages. Another common error is forgetting that the network and broadcast addresses are reserved and cannot be assigned to hosts. Always double-check your calculations and configurations.

Let's look at an example of configuring an IPv4 address on an Arista switch interface. First, you enter configuration mode, then specify the interface, and finally assign the IP address.

```eos
Arista# configure terminal
Arista(config)# interface Ethernet 1
Arista(config-if-Et1)# ip address 192.168.10.1/24
Arista(config-if-Et1)# no shutdown
Arista(config-if-Et1)# exit
Arista(config)# exit
Arista# show ip interface brief
```

In this example, `192.168.10.1` is the host IP address, and `/24` is the CIDR notation for the subnet mask `255.255.255.0`. The `no shutdown` command ensures the interface is administratively enabled. After configuration, `show ip interface brief` is an essential command to verify your settings, displaying the IP addresses and status of all interfaces. Always verify your configurations immediately after making changes to catch potential errors early. Remember that network planning, including IP address allocation, should always precede configuration to avoid conflicts and ensure scalability.

#### Key concepts
*   **IPv4 Address:** A 32-bit numerical label represented in dotted-decimal notation (e.g., `192.168.1.10`), uniquely identifying a device on a network.
*   **Subnet Mask:** A 32-bit mask that distinguishes the network portion from the host portion of an IP address. Can be expressed in dotted-decimal (`255.255.255.0`) or CIDR notation (`/24`).
*   **CIDR (Classless Inter-Domain Routing):** A method for allocating IP addresses and routing IP packets more efficiently than classful addressing, using a prefix length to denote the subnet mask.
*   **Network Address:** The first address in an IP subnet, identifying the subnet itself. All host bits are zero.
*   **Broadcast Address:** The last address in an IP subnet, used to send data to all devices within that subnet. All host bits are one.
*   **Subnetting:** The process of dividing a larger IP network into smaller, more efficient subnetworks to improve management, security, and address utilization.
*   **Host Address:** An IP address assigned to an individual device within a subnet, falling between the network and broadcast addresses.

#### Hands-on activity
**Scenario: Subnetting a Departmental Network**

Your company has been allocated the `172.16.0.0/22` network for a new branch office. You need to create four subnets for different departments: Sales, Marketing, Engineering, and HR. Each department needs at least 50 usable host addresses.

**Tasks:**
1.  Determine the subnet mask (in CIDR notation and dotted-decimal) that will provide at least 50 usable hosts per subnet while creating at least four subnets from `172.16.0.0/22`.
2.  For each of the four subnets, calculate:
    *   Network Address
    *   First Usable Host Address
    *   Last Usable Host Address
    *   Broadcast Address
3.  On an Arista EOS switch (simulated or physical), configure a loopback interface for each department's first usable host address.

**Code Template (for Arista EOS configuration):**

```eos
Arista# configure terminal
Arista(config)# interface Loopback 10  # For Sales
Arista(config-if-Lo10)# ip address <Sales_First_Usable_IP>/<Calculated_CIDR>
Arista(config-if-Lo10)# description Sales_Network_Gateway
Arista(config-if-Lo10)# exit

Arista(config)# interface Loopback 20  # For Marketing
Arista(config-if-Lo20)# ip address <Marketing_First_Usable_IP>/<Calculated_CIDR>
Arista(config-if-Lo20)# description Marketing_Network_Gateway
Arista(config-if-Lo20)# exit

Arista(config)# interface Loopback 30  # For Engineering
Arista(config-if-Lo30)# ip address <Engineering_First_Usable_IP>/<Calculated_CIDR>
Arista(config-if-Lo30)# description Engineering_Network_Gateway
Arista(config-if-Lo30)# exit

Arista(config)# interface Loopback 40  # For HR
Arista(config-if-Lo40)# ip address <HR_First_Usable_IP>/<Calculated_CIDR>
Arista(config-if-Lo40)# description HR_Network_Gateway
Arista(config-if-Lo40)# exit

Arista(config)# end
Arista# show ip interface brief
```

#### Assessment idea
1.  **Question:** You have a network requirement to create 10 subnets from the `192.168.10.0/24` network. What is the smallest CIDR prefix length you can use that satisfies this requirement, and how many usable hosts will each subnet have?
    *   **Correct Answer:** To create at least 10 subnets, we need to borrow bits from the host portion.
        *   `2^n >= 10`, where `n` is the number of borrowed bits.
        *   `2^3 = 8` (not enough)
        *   `2^4 = 16` (enough)
        *   So, we need to borrow 4 bits.
        *   The original prefix was `/24`. Adding 4 borrowed bits makes it `/28`.
        *   A `/28` subnet mask means 28 network bits, leaving `32 - 28 = 4` host bits.
        *   Number of total addresses per subnet = `2^4 = 16`.
        *   Number of usable hosts per subnet = `2^4 - 2 = 14` (subtracting network and broadcast addresses).
        *   Therefore, the smallest CIDR prefix length is `/28`, and each subnet will have 14 usable hosts.

2.  **Question:** An Arista switch interface `Ethernet 5` is configured with `ip address 10.0.0.65 255.255.255.192`. What is the network address and broadcast address for the subnet this interface belongs to?
    *   **Correct Answer:**
        *   The subnet mask `255.255.255.192` corresponds to a `/26` CIDR prefix.
        *   This means the first 26 bits are for the network, and the last 6 bits are for hosts.
        *   The interesting octet is the fourth one, where `192` in binary is `11000000`.
        *   The block size for a `/26` in the fourth octet is `256 - 192 = 64`.
        *   The network address must be a multiple of 64. Given `10.0.0.65`, the closest multiple of 64 less than or equal to 65 is `64`.
        *   So, the **Network Address** is `10.0.0.64`.
        *   The next network address would be `10.0.0.128`.
        *   The **Broadcast Address** for `10.0.0.64/26` is one less than the next network address, which is `10.0.0.127`.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated explanation of IPv4 address structure, subnet masks (dotted-decimal and CIDR), and the concept of network vs. host bits. Use a split-screen view to show binary representations alongside decimal. Follow with a live coding demonstration on an Arista EOS CLI, configuring an Ethernet interface with an IPv4 address and subnet mask, then using `show ip interface brief` and `show ip route` for verification. Include a step-by-step walkthrough of a subnetting calculation for a `/27` network from a `/24` block, illustrating how to derive network, broadcast, and usable host ranges. Emphasize common mistakes like incorrect mask application. Conclude with a 3-question interactive quiz on subnet calculation and Arista configuration commands.

### Chapter 4.2 — IPv6 Addressing Fundamentals

#### Learning objectives
*   Identify the structure and components of an IPv6 address, including its hexadecimal notation and various address types.
*   Apply IPv6 address shortening rules to condense full addresses.
*   Explain the purpose and operation of Stateless Address Autoconfiguration (SLAAC) and DHCPv6.
*   Configure basic IPv6 addresses on Arista EOS device interfaces.
*   Differentiate between IPv4 and IPv6 addressing concepts and their respective advantages.

#### Detailed lesson content
Having mastered the fundamentals of IPv4, it's time to explore its successor: IPv6. While IPv4 served us well, its 32-bit address space, allowing for approximately 4.3 billion unique addresses, has largely been exhausted. IPv6, or Internet Protocol version 6, was developed to address this limitation, offering a massive 128-bit address space. This exponential increase in address availability ensures that every device, from servers to IoT sensors, can have a globally unique IP address for the foreseeable future. IPv6 addresses are represented in hexadecimal notation, typically grouped into eight 16-bit segments separated by colons, such as `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. This format, while initially daunting, becomes manageable with practice and the application of specific shortening rules.

IPv6 introduces several address types, each serving a distinct purpose. **Global Unicast Addresses (GUAs)** are globally unique and routable on the internet, similar to public IPv4 addresses. They typically start with `2` or `3`. **Link-Local Addresses (LLAs)** are automatically configured on every IPv6-enabled interface and are only valid for communication within the local link (network segment). They always start with `fe80::/10`. These are essential for neighbor discovery and other link-local operations, even without a router. **Unique Local Addresses (ULAs)** are equivalent to private IPv4 addresses (like `10.0.0.0/8`), used for local communication within an organization and not routable on the global internet. They start with `fc00::/7`. Finally, **Multicast Addresses** (`ff00::/8`) are used to send a single packet to multiple destinations simultaneously, replacing the broadcast concept of IPv4. There are no broadcast addresses in IPv6.

One of the most significant advancements in IPv6 is its flexible address configuration mechanisms. **Stateless Address Autoconfiguration (SLAAC)** allows devices to automatically generate their own unique IPv6 addresses without the need for a DHCP server. A device combines the network prefix advertised by a router (via Router Advertisement messages) with its own unique interface identifier (often derived from its MAC address using the EUI-64 format). This makes deployment simpler and more resilient. Alternatively, **DHCPv6** can be used for stateful address assignment, providing not only IP addresses but also other network configuration parameters like DNS server addresses, similar to DHCP in IPv4. Many networks employ a hybrid approach, using SLAAC for address assignment and DHCPv6 for other parameters.

The structure of an IPv6 Global Unicast Address is typically divided into three main parts: the **Global Routing Prefix** (usually the first 48 bits, assigned by an ISP), the **Subnet ID** (the next 16 bits, used by an organization to create subnets), and the **Interface ID** (the last 64 bits, which uniquely identifies the interface on the subnet). This 64-bit interface ID is a key feature, as it's large enough to support various auto-configuration mechanisms and ensures a vast number of hosts per subnet. To make IPv6 addresses more readable, two shortening rules are applied: leading zeros in any 16-bit segment can be omitted (e.g., `0db8` becomes `db8`), and a single contiguous sequence of all-zero segments can be replaced by a double colon (`::`). For example, `2001:0db8:0000:0000:0000:8a2e:0370:7334` can be shortened to `2001:db8::8a2e:370:7334`. However, only one `::` is allowed per address to avoid ambiguity.

Configuring IPv6 on an Arista EOS device is similar in principle to IPv4, but with the distinct IPv6 syntax. You enable IPv6 routing globally and then assign IPv6 addresses to interfaces. It's common to configure both a GUA and enable SLAAC on an interface. A common mistake is forgetting to enable IPv6 routing globally, which prevents the device from forwarding IPv6 packets. Another error is incorrectly applying shortening rules, leading to an invalid address. Always verify your IPv6 configurations carefully.

Here's how you would configure an IPv6 address and enable SLAAC on an Arista interface:

```eos
Arista# configure terminal
Arista(config)# ipv6 unicast-routing  # Enable global IPv6 routing
Arista(config)# interface Ethernet 2
Arista(config-if-Et2)# ipv6 address 2001:db8:acad:1::1/64
Arista(config-if-Et2)# ipv6 address autoconfig  # Enable SLAAC
Arista(config-if-Et2)# no shutdown
Arista(config-if-Et2)# exit
Arista(config)# exit
Arista# show ipv6 interface brief
```

The `ipv6 unicast-routing` command is essential to allow the switch to route IPv6 traffic. The `ipv6 address autoconfig` command enables SLAAC on the interface, allowing it to automatically generate a link-local address and, if a router advertisement is received, a global unicast address. Always use `show ipv6 interface brief` to quickly check the configured IPv6 addresses and their status. Understanding IPv6 is no longer optional; it's a critical skill for any network professional, and Arista EOS provides robust support for its deployment.

#### Key concepts
*   **IPv6 Address:** A 128-bit numerical label, represented in hexadecimal notation (e.g., `2001:db8::1`), providing a vast address space.
*   **Global Unicast Address (GUA):** Globally unique and routable IPv6 addresses, similar to public IPv4 addresses.
*   **Link-Local Address (LLA):** Automatically configured IPv6 addresses (starting with `fe80::/10`) valid only for communication on the local link.
*   **Unique Local Address (ULA):** Private IPv6 addresses (starting with `fc00::/7`) used for local network communication, not routable on the internet.
*   **Multicast Address:** IPv6 addresses used to send a single packet to multiple destinations simultaneously (no broadcast in IPv6).
*   **SLAAC (Stateless Address Autoconfiguration):** A mechanism allowing IPv6 devices to automatically configure their own IP addresses without a DHCP server, using a router prefix and an interface identifier.
*   **DHCPv6:** The IPv6 equivalent of DHCP, providing stateful address assignment and other network configuration parameters.
*   **Interface ID:** The last 64 bits of an IPv6 address, uniquely identifying an interface on a subnet, often derived using EUI-64.

#### Hands-on activity
**Scenario: Configuring IPv6 for a New Server Segment**

You are tasked with bringing up a new server segment that will exclusively use IPv6. The network prefix assigned to this segment is `2001:db8:acad:2::/64`. You need to configure an Arista switch interface to act as the gateway for this segment, assigning it a specific IPv6 address and enabling SLAAC for potential client devices.

**Tasks:**
1.  Enable global IPv6 unicast routing on the Arista switch.
2.  Configure `Ethernet 3` with the IPv6 address `2001:db8:acad:2::1/64`.
3.  Enable IPv6 stateless address autoconfiguration (SLAAC) on `Ethernet 3`.
4.  Verify the IPv6 configuration on `Ethernet 3`.

**Code Template:**

```eos
Arista# configure terminal
Arista(config)# ipv6 unicast-routing

Arista(config)# interface Ethernet 3
Arista(config-if-Et3)# description Server_Segment_IPv6_Gateway
Arista(config-if-Et3)# ipv6 address 2001:db8:acad:2::1/64
Arista(config-if-Et3)# ipv6 address autoconfig
Arista(config-if-Et3)# no shutdown
Arista(config-if-Et3)# exit

Arista(config)# end
Arista# show ipv6 interface brief
Arista# show ipv6 route connected
```

#### Assessment idea
1.  **Question:** Which of the following IPv6 addresses is correctly shortened according to standard rules, and what is its full, unshortened form?
    *   A. `2001:0db8::1:0000:0001`
    *   B. `fe80::0001::1`
    *   C. `2001:db8:0:0:0:0:0:1`
    *   D. `2001:db8::1:1`
    *   **Correct Answer:** D. `2001:db8::1:1`
        *   **Explanation:** Option A is incorrect because `::` can only replace one contiguous block of zeros. Here, `0000:0000` is replaced by `::`, but `0000` is left at the end. The full form would be `2001:0db8:0000:0000:0000:0001:0000:0001`. Option B is incorrect because it uses `::` twice, which is not allowed. Option C is the full form, not shortened. Option D is correctly shortened. The full form of `2001:db8::1:1` is `2001:0db8:0000:0000:0000:0000:0001:0001`. The `::` replaces four `0000` segments.

2.  **Question:** An Arista switch interface is configured with `ipv6 address 2001:db8:cafe:a::1/64` and `ipv6 address autoconfig`. A client device connected to this interface successfully obtains an IPv6 address. Which two IPv6 address types would you expect the client to have, assuming a router is present and advertising the prefix?
    *   **Correct Answer:** The client would have both a **Global Unicast Address (GUA)** and a **Link-Local Address (LLA)**.
        *   **Explanation:** The `ipv6 address autoconfig` command on the router interface enables SLAAC. This means the router will send Router Advertisement (RA) messages containing the network prefix (`2001:db8:cafe:a::/64`). The client will use this prefix and generate its own unique Interface ID (often using EUI-64 or a privacy extension) to form a Global Unicast Address. Additionally, every IPv6-enabled interface automatically configures a Link-Local Address (starting with `fe80::/10`) for local segment communication, regardless of router presence or SLAAC.

#### AI generation note
Produce a 10-minute animated video. Start by visually comparing IPv4 and IPv6 address lengths and notation. Animate the IPv6 shortening rules with examples that progressively remove leading zeros and then use the double colon. Explain the different IPv6 address types (GUA, LLA, ULA, Multicast) with clear visual distinctions and use cases. Dedicate a segment to explaining SLAAC, showing how a client combines a router prefix with its EUI-64 to form an address. Include a live coding segment on Arista EOS CLI, demonstrating `ipv6 unicast-routing` and interface IPv6 address configuration, followed by `show ipv6 interface brief` and `ping ipv6`. End with a reflection prompt asking learners to compare IPv4 and IPv6 address allocation methods.

### Chapter 4.3 — Basic Static Routing with Arista EOS

#### Learning objectives
*   Explain the fundamental purpose of routing and how routers use routing tables to forward packets.
*   Differentiate between static and dynamic routing protocols.
*   Configure static routes on an Arista EOS device using both next-hop IP and exit interface.
*   Implement a default static route to direct traffic to unknown destinations.
*   Utilize Arista EOS commands to verify static route configurations and troubleshoot basic routing issues.

#### Detailed lesson content
Now that we understand how devices get their IP addresses, let's explore how they communicate across different networks. This is where routing comes into play. Routing is the process of selecting a path across one or more networks. A router, like an Arista switch operating in Layer 3 mode, is a specialized device that forwards data packets between computer networks. It does this by examining the destination IP address of an incoming packet, consulting its routing table, and then forwarding the packet out the appropriate interface towards its destination network. Without routing, devices on separate IP networks would be isolated, unable to communicate with each other. The routing table is essentially a map that tells the router "to reach network X, send the packet to next-hop router Y" or "send it out interface Z".

There are two primary methods for populating a router's routing table: static routing and dynamic routing. **Static routing** involves manually configuring routes by a network administrator. These routes are fixed and do not change unless manually reconfigured. They are simple to implement in small, stable networks and offer predictable routing paths. However, in larger or more dynamic networks, managing static routes can become cumbersome and error-prone, as every change in topology requires manual updates across all affected routers. **Dynamic routing**, on the other hand, uses routing protocols (like OSPF, EIGRP, BGP) that allow routers to automatically discover network topology, exchange routing information, and adapt to changes in the network without manual intervention. For the Arista ACE Associate level, our focus will be on understanding and implementing static routing, which forms a foundational skill for any network engineer.

Configuring static routes on an Arista EOS device is a critical skill. The basic command for adding a static route is `ip route <destination-network> <subnet-mask> {<next-hop-ip> | <exit-interface>}`. You specify the destination network you want to reach, its subnet mask, and then either the IP address of the next-hop router or the local exit interface through which the packet should be forwarded. Using a next-hop IP address is generally preferred when the exit interface is a multi-access segment (like an Ethernet LAN) because it allows the router to dynamically resolve the MAC address of the next-hop device. Using an exit interface alone is typically reserved for point-to-point links, where there's only one possible next device. A common mistake is using an exit interface on a multi-access segment without specifying a next-hop, which can lead to routing issues if the router cannot determine the correct Layer 2 destination.

Let's consider an example. If our Arista switch needs to send traffic to the `192.168.20.0/24` network, and the next-hop router's IP address on the directly connected segment is `192.168.10.2`, the command would be:

```eos
Arista# configure terminal
Arista(config)# ip route 192.168.20.0 255.255.255.0 192.168.10.2
Arista(config)# exit
```

For IPv6, the command is similar: `ipv6 route <destination-ipv6-prefix>/<prefix-length> {<next-hop-ipv6> | <exit-interface>}`. For example:

```eos
Arista(config)# ipv6 route 2001:db8:cafe:b::/64 2001:db8:cafe:a::2
```

A special type of static route is the **default route**, often called the "gateway of last resort." This route is used when a router receives a packet for a destination network that is not explicitly listed in its routing table. The default route is configured to point to a gateway that can handle all "unknown" traffic, typically an upstream router leading to the internet. For IPv4, the default route is `ip route 0.0.0.0 0.0.0.0 <next-hop-ip>`. For IPv6, it's `ipv6 route ::/0 <next-hop-ipv6>`. Every network segment that needs to reach the internet or other unknown networks should have a default route pointing towards its upstream gateway.

To verify your static routes and troubleshoot routing issues, several Arista EOS commands are invaluable. `show ip route` (or `show ipv6 route`) displays the entire routing table, showing all learned routes, including static, connected, and dynamically learned routes. You can filter this output to see only static routes using `show ip route static`. The `ping` command is essential for testing end-to-end connectivity, and `traceroute` (or `trace`) helps you trace the path a packet takes, identifying where routing might be failing. Common mistakes include incorrect destination network/mask, wrong next-hop IP, or forgetting to enable IP routing globally (`ip routing` for IPv4, `ipv6 unicast-routing` for IPv6). Always ensure that the next-hop IP address is reachable from the router. A static route pointing to an unreachable next-hop is effectively a black hole for traffic.

#### Key concepts
*   **Routing:** The process of forwarding data packets between different computer networks based on their destination IP addresses.
*   **Router:** A Layer 3 device that connects different IP networks and makes forwarding decisions based on its routing table.
*   **Routing Table:** A database maintained by a router that stores information about network destinations and the paths to reach them.
*   **Static Routing:** Manually configured routes by an administrator, offering predictability but requiring manual updates for topology changes.
*   **Dynamic Routing:** Routing where routers automatically discover network topology and exchange routing information using protocols (e.g., OSPF, BGP).
*   **Next-Hop IP:** The IP address of the next router in the path to a destination network.
*   **Exit Interface:** The local interface on the router through which a packet should be forwarded to reach a destination network.
*   **Default Route:** A static route (`0.0.0.0 0.0.0.0` for IPv4, `::/0` for IPv6) used to forward packets to destinations not explicitly found in the routing table, acting as a gateway of last resort.

#### Hands-on activity
**Scenario: Configuring Static Routes for a Multi-Segment Network**

You have two Arista switches, `R1` and `R2`, connected as shown below. `R1` has a network `192.168.10.0/24` (via `Ethernet 1`) and is connected to `R2` via `Ethernet 2` on the `10.0.0.0/30` link. `R2` has a network `192.168.20.0/24` (via `Ethernet 1`).

*   **R1 Configuration:**
    *   `Ethernet 1`: `192.168.10.1/24`
    *   `Ethernet 2`: `10.0.0.1/30`
*   **R2 Configuration:**
    *   `Ethernet 1`: `192.168.20.1/24`
    *   `Ethernet 2`: `10.0.0.2/30`

**Tasks:**
1.  Configure `R1` with a static route to reach the `192.168.20.0/24` network, using `R2`'s IP on the inter-connect link as the next-hop.
2.  Configure `R2` with a static route to reach the `192.168.10.0/24` network, using `R1`'s IP on the inter-connect link as the next-hop.
3.  Configure a default route on both `R1` and `R2` pointing to each other as a "gateway of last resort" (for traffic not explicitly defined).
4.  Verify the routing tables on both switches.
5.  From `R1`, ping `192.168.20.1` and `192.168.20.50` (a hypothetical host in `R2`'s network).
6.  From `R2`, ping `192.168.10.1` and `192.168.10.50` (a hypothetical host in `R1`'s network).

**Code Template (for R1):**

```eos
R1# configure terminal
R1(config)# ip routing
R1(config)# interface Ethernet 1
R1(config-if-Et1)# ip address 192.168.10.1/24
R1(config-if-Et1)# no shutdown
R1(config-if-Et1)# exit
R1(config)# interface Ethernet 2
R1(config-if-Et2)# ip address 10.0.0.1/30
R1(config-if-Et2)# no shutdown
R1(config-if-Et2)# exit
R1(config)# ip route 192.168.20.0 255.255.255.0 10.0.0.2  # Route to R2's LAN
R1(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.2             # Default route via R2
R1(config)# end
R1# show ip route
R1# ping 192.168.20.1
```

**Code Template (for R2):**

```eos
R2# configure terminal
R2(config)# ip routing
R2(config)# interface Ethernet 1
R2(config-if-Et1)# ip address 192.168.20.1/24
R2(config-if-Et1)# no shutdown
R2(config-if-Et1)# exit
R2(config)# interface Ethernet 2
R2(config-if-Et2)# ip address 10.0.0.2/30
R2(config-if-Et2)# no shutdown
R2(config-if-Et2)# exit
R2(config)# ip route 192.168.10.0 255.255.255.0 10.0.0.1  # Route to R1's LAN
R2(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.1             # Default route via R1
R2(config)# end
R2# show ip route
R2# ping 192.168.10.1
```

#### Assessment idea
1.  **Question:** An Arista switch `RouterA` needs to reach the network `172.16.50.0/24`. The next-hop router, `RouterB`, has an IP address of `10.0.0.2` on the directly connected segment. Write the Arista EOS command to configure this static route on `RouterA`.
    *   **Correct Answer:** `ip route 172.16.50.0 255.255.255.0 10.0.0.2`
        *   **Explanation:** The command `ip route` is used for static route configuration. `172.16.50.0` is the destination network, `255.255.255.0` is its subnet mask, and `10.0.0.2` is the IP address of the next-hop router. It's crucial to correctly specify all three components for the route to be valid and functional.

2.  **Question:** You have configured a static route on an Arista switch, but devices in the destination network are unreachable. You've checked the IP address and subnet mask of the destination network and they are correct. What is the most likely common mistake you should investigate next when troubleshooting a static route?
    *   **Correct Answer:** The most likely common mistake to investigate is an **incorrect or unreachable next-hop IP address**.
        *   **Explanation:** Even if the destination network and mask are correct, if the next-hop IP address is wrong, or if the router cannot reach the specified next-hop (e.g., due to an incorrect IP on the connected interface, a cable issue, or the next-hop router being down), the static route will be effectively useless. The router will send packets towards an invalid or unreachable gateway, leading to packet loss. Other possibilities include forgetting to enable `ip routing` globally or a firewall blocking traffic, but an unreachable next-hop is a very frequent cause of static routing failures.

#### AI generation note
Create an 11-minute live coding video. Begin by visually explaining the concept of a routing table and how routers use it. Contrast static vs. dynamic routing with a simple diagram. Then, transition to an Arista EOS CLI. Demonstrate configuring two directly connected interfaces on a single Arista switch (using loopbacks or two physical ports) to simulate two networks. Configure static routes between these two simulated networks using both next-hop IP and exit interface examples, explaining the pros and cons of each. Show how to configure a default route. Use `show ip route`, `ping`, and `traceroute` to verify connectivity and route paths. Highlight common mistakes such as incorrect next-hop or forgetting `ip routing`. Conclude with a mini-quiz asking learners to identify the correct static route command for a given scenario.

### Chapter 4.4 — Inter-VLAN Routing and SVI Configuration

#### Learning objectives
*   Explain the necessity of inter-VLAN routing for communication between different VLANs.
*   Describe the role of a Layer 3 switch and Switched Virtual Interfaces (SVIs) in inter-VLAN routing.
*   Configure Switched Virtual Interfaces (SVIs) on an Arista EOS switch, assigning IP addresses and enabling routing.
*   Verify SVI configurations and troubleshoot common inter-VLAN routing issues.
*   Design a basic network scenario using SVIs to enable communication between multiple VLANs.

#### Detailed lesson content
In Module 3, we explored VLANs as a way to segment a single physical switch into multiple logical broadcast domains. This segmentation is fantastic for security, performance, and management. However, devices in different VLANs, by definition, belong to different IP subnets and cannot communicate with each other directly at Layer 2. This is where **inter-VLAN routing** becomes essential. To allow devices in VLAN 10 (e.g., `192.168.10.0/24`) to communicate with devices in VLAN 20 (e.g., `192.168.20.0/24`), a Layer 3 device, typically a router or a Layer 3 switch, is needed to route packets between these distinct IP subnets. Without inter-VLAN routing, your perfectly segmented VLANs would be isolated islands, defeating the purpose of a connected network.

Modern Arista switches are often capable of performing Layer 3 routing in addition to Layer 2 switching. When a switch performs Layer 3 routing, it's often referred to as a **Layer 3 switch**. The key component that enables a Layer 3 switch to route between VLANs is the **Switched Virtual Interface (SVI)**, also known as a VLAN interface. An SVI is a logical Layer 3 interface associated with a specific VLAN. It acts as the default gateway for all devices within that VLAN. When a device in VLAN 10 wants to communicate with a device in VLAN 20, it sends the packet to its default gateway (the SVI for VLAN 10). The Layer 3 switch then receives the packet on the VLAN 10 SVI, looks up the destination in its routing table, and forwards the packet out the VLAN 20 SVI, which is the gateway for the destination network.

Configuring SVIs on an Arista EOS switch involves a few critical steps. First, you must ensure the VLANs themselves are created and assigned to the appropriate access or trunk ports. Then, you create the SVI for each VLAN by entering `interface Vlan <VLAN_ID>` in configuration mode. Within the SVI interface configuration, you assign an IP address and subnet mask, which will serve as the default gateway for devices in that VLAN. It's crucial that the IP address assigned to the SVI falls within the IP subnet of its corresponding VLAN. Finally, you must enable global IP routing on the switch using the `ip routing` command (and `ipv6 unicast-routing` for IPv6). Without this command, the switch will only perform Layer 2 forwarding, and inter-VLAN routing will not function.

Let's walk through an example of configuring SVIs for VLAN 10 (192.168.10.0/24) and VLAN 20 (192.168.20.0/24) on an Arista switch:

```eos
Arista# configure terminal
Arista(config)# vlan 10
Arista(config-vlan-10)# name Sales
Arista(config-vlan-10)# exit
Arista(config)# vlan 20
Arista(config-vlan-20)# name Marketing
Arista(config-vlan-20)# exit

Arista(config)# ip routing  # Enable global IP routing for IPv4
Arista(config)# ipv6 unicast-routing # Enable global IP routing for IPv6 (if needed)

Arista(config)# interface Vlan 10
Arista(config-if-Vl10)# description Sales_VLAN_SVI
Arista(config-if-Vl10)# ip address 192.168.10.1/24
Arista(config-if-Vl10)# no shutdown
Arista(config-if-Vl10)# exit

Arista(config)# interface Vlan 20
Arista(config-if-Vl20)# description Marketing_VLAN_SVI
Arista(config-if-Vl20)# ip address 192.168.20.1/24
Arista(config-if-Vl20)# no shutdown
Arista(config-if-Vl20)# exit

# Now, assign physical ports to these VLANs (example)
Arista(config)# interface Ethernet 1
Arista(config-if-Et1)# switchport mode access
Arista(config-if-Et1)# switchport access vlan 10
Arista(config-if-Et1)# no shutdown
Arista(config-if-Et1)# exit

Arista(config)# interface Ethernet 2
Arista(config-if-Et2)# switchport mode access
Arista(config-if-Et2)# switchport access vlan 20
Arista(config-if-Et2)# no shutdown
Arista(config-if-Et2)# exit

Arista(config)# end
Arista# show ip interface brief Vlan 10
Arista# show ip interface brief Vlan 20
Arista# show ip route connected
```

After configuring SVIs, verification is key. Use `show ip interface brief Vlan <VLAN_ID>` to confirm the IP address and status of the SVI. `show ip route connected` will show that the networks associated with your SVIs are directly connected. You can also `ping` from the switch to devices in different VLANs or from a device in one VLAN to a device in another VLAN (via its SVI gateway) to test connectivity. Common mistakes include forgetting to enable `ip routing`, assigning an incorrect IP address to the SVI (not matching the VLAN's subnet), or failing to assign physical ports to the respective VLANs. Another common issue is having a shutdown SVI; always ensure `no shutdown` is applied. Safety note: Misconfiguring SVIs can lead to network segmentation breaches or complete loss of connectivity for entire VLANs, so always test changes in a controlled environment first.

#### Key concepts
*   **Inter-VLAN Routing:** The process of forwarding network traffic between different Virtual Local Area Networks (VLANs).
*   **Layer 3 Switch:** A switch that can perform both Layer 2 switching and Layer 3 routing functions.
*   **Switched Virtual Interface (SVI):** A logical Layer 3 interface on a Layer 3 switch associated with a specific VLAN, acting as the default gateway for devices in that VLAN.
*   **Default Gateway:** The IP address of the router or Layer 3 switch that devices in a subnet use to send traffic to destinations outside their local subnet.
*   **`ip routing`:** A global configuration command on Arista EOS (and other network devices) that enables the device to perform Layer 3 routing.

#### Hands-on activity
**Scenario: Inter-VLAN Routing for a Small Office**

A small office uses an Arista Layer 3 switch to segment its network. You have two VLANs:
*   **VLAN 10 (IT Department):** Network `192.168.10.0/24`
*   **VLAN 20 (Guest Wi-Fi):** Network `192.168.20.0/24`

You need to configure the Arista switch to allow devices in VLAN 10 to communicate with devices in VLAN 20.

**Tasks:**
1.  Create VLANs 10 and 20.
2.  Enable global IP routing on the switch.
3.  Configure an SVI for VLAN 10 with the IP address `192.168.10.1/24`.
4.  Configure an SVI for VLAN 20 with the IP address `192.168.20.1/24`.
5.  Assign `Ethernet 1` to VLAN 10 as an access port.
6.  Assign `Ethernet 2` to VLAN 20 as an access port.
7.  Verify the SVI configurations and routing table.
8.  (Optional, if using simulated hosts) Configure a host in VLAN 10 with `192.168.10.10/24` and default gateway `192.168.10.1`. Configure a host in VLAN 20 with `192.168.20.10/24` and default gateway `192.168.20.1`. Test connectivity between the hosts.

**Code Template:**

```eos
Arista# configure terminal
Arista(config)# vlan 10
Arista(config-vlan-10)# name IT_Department
Arista(config-vlan-10)# exit
Arista(config)# vlan 20
Arista(config-vlan-20)# name Guest_WiFi
Arista(config-vlan-20)# exit

Arista(config)# ip routing

Arista(config)# interface Vlan 10
Arista(config-if-Vl10)# description IT_SVI
Arista(config-if-Vl10)# ip address 192.168.10.1/24
Arista(config-if-Vl10)# no shutdown
Arista(config-if-Vl10)# exit

Arista(config)# interface Vlan 20
Arista(config-if-Vl20)# description Guest_SVI
Arista(config-if-Vl20)# ip address 192.168.20.1/24
Arista(config-if-Vl20)# no shutdown
Arista(config-if-Vl20)# exit

Arista(config)# interface Ethernet 1
Arista(config-if-Et1)# description IT_Access_Port
Arista(config-if-Et1)# switchport mode access
Arista(config-if-Et1)# switchport access vlan 10
Arista(config-if-Et1)# no shutdown
Arista(config-if-Et1)# exit

Arista(config)# interface Ethernet 2
Arista(config-if-Et2)# description Guest_Access_Port
Arista(config-if-Et2)# switchport mode access
Arista(config-if-Et2)# switchport access vlan 20
Arista(config-if-Et2)# no shutdown
Arista(config-if-Et2)# exit

Arista(config)# end
Arista# show vlan
Arista# show ip interface brief
Arista# show ip route connected
Arista# ping 192.168.20.1 # Test ping from switch to SVI in another VLAN
```

#### Assessment idea
1.  **Question:** You have an Arista Layer 3 switch configured with VLAN 30 (network `10.0.30.0/24`) and VLAN 40 (network `10.0.40.0/24`). You've created the SVIs and assigned IP addresses `10.0.30.1/24` to `Vlan30` and `10.0.40.1/24` to `Vlan40`. However, devices in VLAN 30 cannot ping devices in VLAN 40, and vice-versa. All physical ports are correctly assigned to their respective VLANs, and the SVIs show as "up/up". What is the most likely missing configuration step on the Arista switch preventing inter-VLAN communication?
    *   **Correct Answer:** The most likely missing configuration step is enabling global IP routing using the `ip routing` command.
        *   **Explanation:** While creating VLANs, configuring SVIs with IP addresses, and assigning ports are all necessary, a Layer 3 switch will not perform routing functions between these SVIs unless IP routing is explicitly enabled globally. Without `ip routing`, the switch operates purely at Layer 2, and packets destined for another VLAN's subnet will not be forwarded by the SVIs.

2.  **Question:** A network administrator wants to configure an SVI for VLAN 50, which uses the `172.16.50.0/24` network. Which of the following commands would correctly configure the SVI on an Arista EOS switch to act as the default gateway for this VLAN?
    *   A. `interface Ethernet 50` then `ip address 172.16.50.1/24`
    *   B. `interface Vlan 50` then `ip address 172.16.50.1 255.255.255.0`
    *   C. `vlan 50` then `ip address 172.16.50.1/24`
    *   D. `interface Vlan 50` then `ip default-gateway 172.16.50.1`
    *   **Correct Answer:** B. `interface Vlan 50` then `ip address 172.16.50.1 255.255.255.0`
        *   **Explanation:**
            *   A is incorrect because `Ethernet 50` is a physical interface, not a virtual interface for a VLAN.
            *   B is correct. You enter the `interface Vlan <ID>` context to configure an SVI, and then assign an IP address and subnet mask. The use of `/24` or `255.255.255.0` for the mask is interchangeable in Arista EOS.
            *   C is incorrect because you assign IP addresses to interfaces, not directly to VLAN definitions.
            *   D is incorrect because `ip default-gateway` is a global command used to set the default gateway *for the switch itself*, not for a VLAN, and it doesn't create an SVI.

---

## Module 5: Redundancy and High Availability

In this module, we will explore the critical concepts and configurations that enable network resilience and continuous operation, even in the face of component failures. Understanding how to build highly available networks is paramount for any modern IT infrastructure, and Arista EOS provides robust features to achieve this. We'll delve into various redundancy mechanisms, from aggregating physical links to ensuring first-hop routing availability, and learn how to implement them effectively on Arista switches.

### Chapter 5.1 — Link Aggregation with LACP (LAG/EtherChannel)

#### Learning objectives
*   Explain the fundamental need for link aggregation in modern network designs.
*   Differentiate between static link aggregation and dynamic LACP.
*   Configure and verify Link Aggregation Control Protocol (LACP) on Arista EOS.
*   Identify common misconfigurations and troubleshooting steps for LAGs.

#### Detailed lesson content
In the realm of network design, a single point of failure is a cardinal sin. If a critical link between two switches or between a switch and a server fails, the entire connection is lost, leading to service disruption. This is where link aggregation comes into play, a powerful technique that allows you to bundle multiple physical Ethernet links into a single logical link, often referred to as a Link Aggregation Group (LAG), EtherChannel (Cisco's term), or port channel. The primary benefits are twofold: increased bandwidth, as traffic can be distributed across all active links, and crucially, redundancy. If one physical link within the LAG fails, traffic is automatically redistributed across the remaining active links without any interruption to service, provided at least one link remains operational.

While you can configure static LAGs, where you manually bundle interfaces without any negotiation protocol, the industry standard and best practice is to use Link Aggregation Control Protocol (LACP). LACP is defined in IEEE 802.3ad and provides a dynamic, standardized way for switches to negotiate and automatically form LAGs. When LACP is enabled on interfaces, the devices exchange LACP PDUs (Protocol Data Units) to agree on which links belong to a LAG. This dynamic negotiation ensures that both ends of the link agree on the parameters and operational state of the bundle. If a link fails or is misconfigured, LACP can detect this and remove the link from the bundle, preventing potential issues. LACP also allows for different modes: `active` and `passive`. An interface configured in `active` mode actively initiates LACP negotiation, while an interface in `passive` mode waits for its peer to initiate the negotiation. For a LAG to form, at least one side must be in `active` mode. The most common and robust configuration is to set both sides to `active`.

Configuring LACP on Arista EOS is straightforward and follows a logical sequence. First, you create a port channel interface, which is the logical representation of your aggregated link. Then, you assign physical interfaces to this port channel and configure them with the LACP mode. It's vital that the physical interfaces intended for the LAG have matching speed, duplex settings, and are configured as either access or trunk ports consistently. For instance, if you're aggregating two 10 Gigabit Ethernet interfaces, both must be `speed 10000` and `full duplex`. If they are to carry VLANs, they must all be configured as trunk ports with the same allowed VLANs. A common mistake is to mismatch LACP modes (e.g., active on one side, but the other side is not configured for LACP at all), or to have inconsistent interface configurations (e.g., one port is an access port, the other is a trunk port). Arista EOS will prevent such misconfigurations from forming a stable LAG, but it's important to be aware of these details during troubleshooting.

Once configured, verifying the state of your LAG is crucial. Commands like `show port-channel summary` will give you a high-level overview, showing the port channel ID, the number of active ports, and the protocol in use. To dive deeper, `show port-channel <ID> detail` provides granular information about the member interfaces, their LACP state, and any errors. You can also use `show interfaces port-channel <ID>` to see the operational status and statistics of the logical interface. If a LAG isn't forming, always check the physical layer first (cables, transceivers), then review the LACP configuration on both ends for consistency in mode, speed, and duplex. Also, ensure that the interfaces are not already part of another LAG or configured with conflicting settings. Understanding LACP is a foundational skill for building resilient and high-performance networks, ensuring that your network can gracefully handle link failures and provide consistent bandwidth.

#### Key concepts
*   **Link Aggregation Group (LAG)**: A logical interface created by bundling multiple physical Ethernet links to increase bandwidth and provide redundancy.
*   **EtherChannel**: Cisco's proprietary term for link aggregation, functionally similar to LAG.
*   **Link Aggregation Control Protocol (LACP)**: An IEEE 802.3ad standard protocol that dynamically negotiates and manages link aggregation groups between network devices.
*   **LACP Active Mode**: An interface configured in active mode actively initiates LACP negotiation with its peer.
*   **LACP Passive Mode**: An interface configured in passive mode waits for its peer to initiate LACP negotiation.
*   **Port Channel**: The logical interface representing a LAG on Arista EOS.

#### Hands-on activity
**Scenario:** Configure a basic LACP LAG between two Arista switches.
**Task:** On `Arista-SW1`, configure Ethernet interfaces Et1 and Et2 to form an LACP active port-channel (Port-Channel1) with `Arista-SW2`. Assume `Arista-SW2` is also configured with LACP active on its corresponding interfaces.
**Instructions:**
1.  Access `Arista-SW1` CLI.
2.  Enter global configuration mode.
3.  Create the port-channel interface.
4.  Configure the physical interfaces to join the port-channel in LACP active mode.
5.  Verify the port-channel status.

```
! Arista-SW1 Configuration
enable
configure terminal

! Create the Port-Channel interface
interface Port-Channel1
   description "LAG to Arista-SW2"
   no switchport
   ! Add any other necessary configurations for the logical interface, e.g., IP address or trunking
   ! For this basic example, we'll assume it's a layer 2 trunk
   switchport mode trunk
   switchport trunk allowed vlan 10,20

! Configure physical interfaces Et1 and Et2 to join Port-Channel1 in LACP active mode
interface Ethernet1
   description "Member of LAG to Arista-SW2"
   channel-group 1 mode active
   no shutdown

interface Ethernet2
   description "Member of LAG to Arista-SW2"
   channel-group 1 mode active
   no shutdown

end

! Verification commands
show port-channel summary
show port-channel 1 detail
show interfaces Port-Channel1
```

#### Assessment idea
1.  **Question:** A network engineer configures two Ethernet interfaces on an Arista switch into a Link Aggregation Group (LAG) using LACP. After configuration, the LAG does not form, and traffic is not passing. Which of the following is NOT a common reason for an LACP LAG failure?
    a) Mismatched LACP modes (e.g., active on one side, passive on the other).
    b) Inconsistent speed and duplex settings on the member interfaces.
    c) One of the physical links is physically disconnected.
    d) The port-channel interface is configured with an IP address, but the member interfaces are not.

    **Correct Answer:** d) The port-channel interface is configured with an IP address, but the member interfaces are not.
    **Explanation:** When configuring a Layer 3 LAG, the IP address is applied to the logical port-channel interface, not the physical member interfaces. The physical interfaces are simply members of the bundle. Mismatched LACP modes (a), inconsistent speed/duplex (b), and physical link disconnection (c) are all very common reasons why an LACP LAG would fail to form or operate correctly.

2.  **Question:** You have configured a Port-Channel1 on an Arista switch with Ethernet1 and Ethernet2 as members, both in LACP active mode. Which command would you use to quickly verify the operational status, the number of active links, and the protocol used for this LAG?
    a) `show interfaces status`
    b) `show port-channel summary`
    c) `show lacp neighbors`
    d) `show run interface Port-Channel1`

    **Correct Answer:** b) `show port-channel summary`
    **Explanation:** The `show port-channel summary` command provides a concise overview of all configured port channels, including their ID, protocol (LACP or static), number of active links, and overall status. While other commands provide useful information, `show port-channel summary` is the most direct way to get a quick summary of LAG operational status.

#### AI generation note
Create a 12-minute live coding video demonstrating LACP configuration on two simulated Arista EOS switches (using GNS3/EVE-NG or similar lab environment). Show the initial state with no LAG, then configure `Port-Channel1` with `Ethernet1` and `Ethernet2` in `active` mode on both switches. Use `show port-channel summary` and `show port-channel 1 detail` to verify successful formation. Simulate a link failure by shutting down one physical interface and show how traffic continues over the remaining link. Include split-screen views of the CLI on both switches. End with a 2-question interactive mini-quiz on LACP modes and common troubleshooting.

### Chapter 5.2 — Spanning Tree Protocol (STP) Fundamentals

#### Learning objectives
*   Understand the fundamental problems that Spanning Tree Protocol (STP) solves in Layer 2 networks.
*   Identify the key components and roles within an STP topology (Root Bridge, Root Port, Designated Port, Blocking Port).
*   Explain the different STP port states and their transitions.
*   Describe the benefits of Rapid Spanning Tree Protocol (RSTP) over traditional STP.
*   Perform basic STP configuration and verification on Arista EOS.

#### Detailed lesson content
In the pursuit of network redundancy, we often introduce physical loops into our Layer 2 topologies. For example, connecting two switches with multiple links (without LACP) or creating redundant paths between switches. While these loops provide fault tolerance, they also introduce significant problems if not properly managed. The three main issues caused by Layer 2 loops are broadcast storms, MAC address table instability, and duplicate frames. A broadcast storm occurs when a broadcast frame is endlessly forwarded around a loop, consuming all available bandwidth. MAC address table instability happens because a switch sees the same MAC address arriving on multiple ports, causing its MAC table to constantly update and become incorrect. Duplicate frames lead to retransmissions and application-level issues. Spanning Tree Protocol (STP), defined by IEEE 802.1D, was developed specifically to prevent these Layer 2 loops by intelligently blocking redundant paths while still allowing for network redundancy.

STP works by electing a single **Root Bridge** for the entire Layer 2 domain. The Root Bridge is the central point of the spanning tree and is typically the switch with the lowest Bridge ID (BID). The BID is a combination of a configurable priority (default 32768) and the switch's MAC address. All other switches then calculate the shortest path to the Root Bridge. Each non-Root Bridge switch will have one **Root Port**, which is the port that provides the lowest cost path to the Root Bridge. On each segment (link) in the network, one switch port is elected as the **Designated Port**, which is responsible for forwarding traffic onto that segment. Any ports that are not Root Ports or Designated Ports become **Blocking Ports**. These blocking ports are logically shut down by STP, preventing loops, but they remain in a listening state, ready to transition to forwarding if an active link fails. This mechanism ensures a single, loop-free path for all traffic while maintaining redundant physical paths.

Traditional STP has several port states: Blocking, Listening, Learning, Forwarding, and Disabled. When a port first comes up, it typically goes through Blocking, then Listening (listening for BPDUs), then Learning (learning MAC addresses but not forwarding user traffic), and finally Forwarding. This transition process can take up to 50 seconds, which is a significant downtime in modern networks. To address this slow convergence, Rapid Spanning Tree Protocol (RSTP), defined by IEEE 802.1w, was introduced. RSTP significantly speeds up convergence by allowing ports to transition directly to a forwarding state under certain conditions, often within milliseconds. It uses different port roles (Root, Designated, Alternate, Backup) and states (Discarding, Learning, Forwarding) to achieve this. Arista EOS defaults to Rapid PVST+ (Per-VLAN Spanning Tree Plus), which is an enhancement of RSTP that runs a separate spanning tree instance for each VLAN, allowing for load balancing across redundant links (though this can be complex to manage at scale).

Configuring STP on Arista EOS is often minimal, as RSTP is enabled by default. However, you will typically want to influence the Root Bridge election to ensure a predictable and optimal path. This is done by modifying the `spanning-tree priority` on your desired Root Bridge. Lower priority values make a switch more likely to become the Root Bridge. For example, setting a core switch's priority to `4096` or `8192` (multiples of 4096) makes it more likely to be the root than a default `32768` priority. You can also configure port-specific features like `spanning-tree portfast` on access ports connected to end devices (like PCs or servers) to bypass the listening/learning states and immediately transition to forwarding, preventing delays when devices connect. However, `portfast` should *never* be enabled on ports connecting to other switches, as this can reintroduce loops. Verification commands like `show spanning-tree` provide a comprehensive view of the STP topology, including the Root Bridge, port roles, and port states. `show spanning-tree vlan <VLAN_ID>` is useful for PVST+ environments. Common mistakes include not influencing the Root Bridge election, leading to suboptimal traffic paths, or enabling `portfast` on uplink ports, which can create temporary loops.

#### Key concepts
*   **Broadcast Storm**: An excessive amount of broadcast traffic flooding a network, consuming bandwidth and causing network slowdowns or outages.
*   **MAC Address Table Instability**: When a switch's MAC address table constantly changes due to seeing the same MAC address on multiple ports, leading to inefficient forwarding.
*   **Root Bridge**: The central switch in an STP topology, elected based on the lowest Bridge ID (BID).
*   **Bridge ID (BID)**: A unique identifier for a switch in an STP domain, composed of a priority value and the switch's MAC address.
*   **Root Port**: The port on a non-Root Bridge switch that provides the lowest cost path to the Root Bridge.
*   **Designated Port**: The port on a network segment that is responsible for forwarding traffic onto that segment (usually the port on the switch closest to the Root Bridge for that segment).
*   **Blocking Port**: A port that is logically shut down by STP to prevent loops, but remains in a listening state.
*   **Rapid Spanning Tree Protocol (RSTP)**: An enhanced version of STP (IEEE 802.1w) that provides faster convergence times.
*   **PVST+ (Per-VLAN Spanning Tree Plus)**: An enhancement of RSTP that runs a separate spanning tree instance for each VLAN.
*   **PortFast**: An STP feature that allows an access port connected to an end device to immediately transition to the forwarding state, bypassing listening and learning states.

#### Hands-on activity
**Scenario:** Configure and verify STP on an Arista switch, specifically influencing the Root Bridge election.
**Task:** On `Arista-SW1`, configure the spanning-tree priority for VLAN 10 to `4096` to make it the Root Bridge for that VLAN. Verify the Root Bridge status and port roles.
**Instructions:**
1.  Access `Arista-SW1` CLI.
2.  Enter global configuration mode.
3.  Set the spanning-tree priority for VLAN 10.
4.  Verify the spanning-tree status for VLAN 10.

```
! Arista-SW1 Configuration
enable
configure terminal

! Set the spanning-tree priority for VLAN 10
spanning-tree vlan 10 priority 4096

end

! Verification commands
show spanning-tree vlan 10
show spanning-tree root
```

#### Assessment idea
1.  **Question:** Which of the following problems does Spanning Tree Protocol (STP) primarily aim to prevent in a Layer 2 switched network?
    a) IP address conflicts
    b) Routing loops
    c) Broadcast storms and MAC address table instability
    d) DNS resolution failures

    **Correct Answer:** c) Broadcast storms and MAC address table instability
    **Explanation:** STP's core function is to eliminate Layer 2 loops, which cause broadcast storms, MAC address table instability (due to duplicate frames seen on multiple ports), and duplicate frame delivery. It does not address IP address conflicts, Layer 3 routing loops, or DNS issues.

2.  **Question:** A network administrator wants to connect a user's workstation to an access port on an Arista switch. To ensure the workstation can access the network immediately without waiting for STP's listening and learning states, which STP feature should be enabled on that specific access port?
    a) `spanning-tree root guard`
    b) `spanning-tree bpduguard`
    c) `spanning-tree portfast`
    d) `spanning-tree loopguard`

    **Correct Answer:** c) `spanning-tree portfast`
    **Explanation:** `PortFast` is designed for access ports connected to end devices. It allows the port to bypass the normal STP listening and learning states and immediately transition to the forwarding state, minimizing connectivity delays for workstations and servers. `Root guard`, `BPDUguard`, and `Loopguard` are protective features, not designed for immediate port activation for end devices.

#### AI generation note
Create a 10-minute animated explainer video. Start with a simple looped network diagram showing a broadcast storm and MAC table instability without STP. Then, introduce STP, showing how it elects a Root Bridge and blocks a redundant link. Animate the port states (Blocking, Listening, Learning, Forwarding) and explain their purpose. Briefly highlight RSTP's faster convergence. Include a small CLI demo on an Arista switch showing `spanning-tree vlan 10 priority 4096` and `show spanning-tree vlan 10` output. Conclude with a reflection prompt asking learners to identify two scenarios where STP is essential.

### Chapter 5.3 — Multi-Chassis Link Aggregation (MLAG)

#### Learning objectives
*   Identify the limitations of traditional Link Aggregation Groups (LAGs) in terms of switch-level redundancy.
*   Explain the core concept and benefits of Multi-Chassis Link Aggregation (MLAG).
*   Describe the key components of an MLAG configuration (peer link, peer address, MLAG ID).
*   Configure and verify a basic MLAG domain on Arista EOS switches.
*   Understand common MLAG misconfigurations and troubleshooting techniques.

#### Detailed lesson content
While Link Aggregation Groups (LAGs) provide excellent link-level redundancy and increased bandwidth, they still suffer from a critical single point of failure: the switch itself. If the single switch hosting the LAG fails, all connectivity through that LAG is lost. This limitation is particularly problematic in data center and core network designs where continuous availability is paramount. To overcome this, Arista Networks developed Multi-Chassis Link Aggregation (MLAG), a groundbreaking technology that allows two separate physical switches to appear as a single logical switch to a downstream device. This means a server or another switch can form a single LAG across two distinct Arista switches, providing both link-level and switch-level redundancy. If one of the MLAG peer switches fails, the other peer seamlessly takes over forwarding traffic for the entire MLAG, with no disruption to the connected device.

MLAG operates by forming a control plane and data plane synchronization between two Arista switches, known as MLAG peers. The two most critical components of an MLAG configuration are the **peer link** and the **peer address**. The peer link is a dedicated high-bandwidth link (or a LAG of multiple links) between the two MLAG peer switches. Its primary purpose is to carry control plane synchronization messages (like MAC address learning, ARP entries, and IGMP snooping states) and, in certain failure scenarios, data plane traffic that needs to be forwarded between peers. The **peer address** is a loopback interface IP address on each peer, used for LACP negotiation and other control plane communications between the MLAG peers. When a downstream device forms a LAG with the MLAG peers, it sees them as a single logical entity, and LACP negotiations occur as if it were talking to one switch. This active-active forwarding capability is a significant advantage over traditional redundancy protocols like STP, which block redundant paths. With MLAG, all links in the bundle can actively forward traffic, maximizing bandwidth utilization.

Configuring MLAG on Arista EOS involves several key steps. First, you define the MLAG domain, which includes the domain ID, the local interface (peer link), and the peer address. The peer link interfaces should typically be configured as a dedicated port-channel (LAG) for redundancy and bandwidth, and they should be configured as trunk ports to carry all necessary VLANs. The peer address is usually a loopback interface IP address, ensuring it remains up even if physical interfaces fail. After defining the domain, you configure the individual MLAG interfaces. These are the port-channels that will connect to downstream devices. For each MLAG port-channel, you assign an `mlag <MLAG_ID>` command. It's crucial that the MLAG ID matches on both peer switches for the corresponding port-channel. For example, `Port-Channel1` on `Arista-SW1` and `Port-Channel1` on `Arista-SW2` would both be configured with `mlag 1` if they are intended to form a single logical LAG to a downstream device.

Verifying your MLAG configuration is essential to ensure proper operation. The command `show mlag` provides a comprehensive overview of the MLAG status, including the peer status, peer link status, and the health of individual MLAG interfaces. You should look for "Configured, Enabled, Up" for the MLAG state and "Active" for the peer status. `show mlag interfaces` will show the status of each configured MLAG port-channel. Common mistakes in MLAG configuration include issues with the peer link (e.g., peer link not forming, incorrect VLANs allowed on the peer link), mismatched MLAG IDs on peer port-channels, or incorrect IP reachability between peer addresses. A critical safety note is that the peer link must be robust and reliable; if the peer link fails, the MLAG domain can enter a split-brain scenario, leading to network disruption. Arista EOS has mechanisms to mitigate this, but proper peer link design is paramount. MLAG is a cornerstone of highly available, active-active data center networks, allowing for superior resilience and resource utilization compared to older redundancy methods.

#### Key concepts
*   **Multi-Chassis Link Aggregation (MLAG)**: A proprietary Arista technology that allows two switches to act as a single logical switch for link aggregation purposes, providing switch-level redundancy.
*   **MLAG Peer**: One of the two switches participating in an MLAG domain.
*   **Peer Link**: A dedicated high-bandwidth link (or LAG) between MLAG peers, used for control plane synchronization and data forwarding during certain failure scenarios.
*   **Peer Address**: A loopback interface IP address used by MLAG peers for control plane communication and LACP negotiation.
*   **MLAG ID**: A unique identifier assigned to an MLAG port-channel on both peer switches, indicating that these port-channels form a single logical LAG to a downstream device.
*   **Active-Active Forwarding**: The ability of MLAG to utilize all links in a bundle for traffic forwarding, even across two distinct physical switches.

#### Hands-on activity
**Scenario:** Configure a basic MLAG domain between two Arista switches.
**Task:** On `Arista-SW1` and `Arista-SW2`, configure an MLAG domain (ID 100) with a peer link (Port-Channel100) and peer addresses (Loopback0). Then, configure `Port-Channel1` as an MLAG interface.
**Instructions (for Arista-SW1):**
1.  Access `Arista-SW1` CLI.
2.  Configure Loopback0 with an IP address (e.g., 10.0.0.1/32).
3.  Configure Port-Channel100 as the peer link (e.g., Et3-4 as members, trunk mode).
4.  Configure the MLAG domain, specifying the peer address of `Arista-SW2` (e.g., 10.0.0.2).
5.  Configure Port-Channel1 as an MLAG interface (e.g., Et1-2 as members, `mlag 1`).
6.  Verify the MLAG status.

```
! Arista-SW1 Configuration
enable
configure terminal

! Configure Loopback0 for peer address
interface Loopback0
   ip address 10.0.0.1/32

! Configure Peer Link (Port-Channel100)
interface Port-Channel100
   description "MLAG Peer Link to Arista-SW2"
   switchport mode trunk
   switchport trunk allowed vlan all
   no shutdown

interface Ethernet3
   channel-group 100 mode active
   no shutdown
interface Ethernet4
   channel-group 100 mode active
   no shutdown

! Configure MLAG Domain
mlag configuration
   domain-id 100
   local-interface Loopback0
   peer-address 10.0.0.2
   peer-link Port-Channel100

! Configure MLAG Interface (Port-Channel1)
interface Port-Channel1
   description "MLAG to Downstream Device"
   switchport mode trunk
   switchport trunk allowed vlan 10,20
   mlag 1
   no shutdown

interface Ethernet1
   channel-group 1 mode active
   no shutdown
interface Ethernet2
   channel-group 1 mode active
   no shutdown

end

! Verification commands
show mlag
show mlag interfaces
```
**Note:** Repeat similar configuration for `Arista-SW2`, swapping `local-interface` and `peer-address` IPs, and ensuring `mlag 1` is configured on its `Port-Channel1`.

#### Assessment idea
1.  **Question:** What is the primary advantage of using Multi-Chassis Link Aggregation (MLAG) over a traditional single-switch Link Aggregation Group (LAG)?
    a) MLAG provides higher bandwidth for a single link.
    b) MLAG eliminates the need for Spanning Tree Protocol (STP).
    c) MLAG offers switch-level redundancy, preventing a single switch failure from disrupting the LAG.
    d) MLAG simplifies IP routing configurations.

    **Correct Answer:** c) MLAG offers switch-level redundancy, preventing a single switch failure from disrupting the LAG.
    **Explanation:** While MLAG can simplify some aspects of network design by allowing active-active forwarding, its primary benefit is providing redundancy at the switch level. A traditional LAG still has the switch as a single point of failure. MLAG allows two switches to appear as one, so if one switch fails, the other can continue forwarding traffic for the LAG.

2.  **Question:** You are troubleshooting an MLAG setup on two Arista switches. You notice that the MLAG domain is "Configured, Enabled," but the "Peer Status" is showing as "Inactive." Which of the following is the MOST likely cause of this issue?
    a) The `mlag` command is missing on one of the port-channel interfaces.
    b) The `domain-id` is mismatched between the two peer switches.
    c) There is no IP reachability between the `peer-address` loopback interfaces.
    d) The `switchport mode trunk` command is missing on the MLAG port-channel.

    **Correct Answer:** c) There is no IP reachability between the `peer-address` loopback interfaces.
    **Explanation:** The "Peer Status" being "Inactive" strongly indicates a problem with the control plane communication between the MLAG peers. This communication relies on IP reachability between the configured `peer-address` loopback interfaces. If the peer link is down or incorrectly configured, or if there's an IP routing issue preventing the loopbacks from communicating, the peer status will remain inactive. Mismatched `domain-id` (b) would prevent the MLAG from forming at all, and missing `mlag` command (a) or `switchport mode trunk` (d) would affect specific MLAG interfaces or data plane, but not necessarily the overall peer status.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Begin by explaining the MLAG concept with a simple diagram showing a server connected to two MLAG peers. Then, walk through the configuration of an MLAG domain on two Arista switches in a lab environment (e.g., EVE-NG). Focus on the `mlag configuration` block, `peer-link` (as a port-channel), and `mlag <ID>` on the downstream facing port-channel. Use `show mlag` and `show mlag interfaces` to verify the "Active" peer status and operational MLAG interfaces. Simulate a peer switch failure (shutting down one MLAG peer) and demonstrate traffic continuity. Include a "drag-and-drop" interactive exercise to match MLAG components to their descriptions.

### Chapter 5.4 — Virtual Router Redundancy Protocol (VRRP)

#### Learning objectives
*   Explain the problem of a single point of failure for default gateways in Layer 3 networks.
*   Describe the core principles and roles of Virtual Router Redundancy Protocol (VRRP).
*   Identify the key components of a VRRP configuration (virtual IP, virtual MAC, priority, preemption).
*   Configure and verify VRRP on Arista EOS for first-hop redundancy.
*   Recognize common VRRP misconfigurations and troubleshooting steps.

#### Detailed lesson content
In a typical Layer 3 network segment, end devices (like servers, workstations, or even other switches acting as Layer 2 devices) rely on a single default gateway to reach destinations outside their local subnet. This default gateway is usually the IP address of a router or a Layer 3 switch interface. While this works perfectly fine under normal circumstances, it introduces a critical single point of failure. If that default gateway device or its interface fails, all devices on that subnet lose their ability to communicate with the rest of the network, leading to a complete outage for that segment. To address this, we use First-Hop Redundancy Protocols (FHRPs), and Virtual Router Redundancy Protocol (VRRP) is a widely adopted, open-standard solution defined by RFC 5798.

VRRP allows a group of routers or Layer 3 switches to form a **virtual router** that acts as the default gateway for a subnet. This virtual router has a unique **virtual IP address** and a **virtual MAC address**. Within the VRRP group, one router is designated as the **Master** (or Active) router, and all other routers are **Backup** (or Standby) routers. The Master router is responsible for forwarding traffic sent to the virtual IP address and responding to ARP requests for the virtual MAC address. Backup routers monitor the Master's status by listening for VRRP advertisements. If the Master fails to send advertisements within a configured timeout, a Backup router will take over the Master role, ensuring continuous connectivity for the end devices. The beauty of VRRP is that end devices are completely unaware of the underlying physical router changes; they simply continue using the same virtual IP address as their default gateway.

Configuring VRRP on Arista EOS involves defining a VRRP group on a specific Layer 3 interface (typically a VLAN interface or a routed port). You assign a **virtual IP address** to this group, which will be the default gateway for the subnet. Each router in the VRRP group is assigned a **priority** value (1-254, with 255 reserved for the IP address owner). The router with the highest priority becomes the Master. If priorities are equal, the router with the highest IP address for that interface becomes the Master. The **preempt** setting is also crucial. When `preempt` is enabled (which is the default in Arista EOS), a higher-priority router will immediately take over the Master role if it comes online, even if a lower-priority router is currently acting as Master. If `preempt` is disabled, a lower-priority Master will remain Master until it fails, even if a higher-priority router becomes available. While preemption ensures the preferred Master is always active, it can cause transient traffic disruption during a failback, so careful consideration is needed.

Let's walk through a basic configuration example. Suppose you have `Arista-SW1` and `Arista-SW2`, both acting as Layer 3 switches for VLAN 10 (subnet 192.168.10.0/24). You want the virtual IP to be 192.168.10.1. `Arista-SW1` will be the preferred Master. On `Arista-SW1`, you'd configure `vrrp 1 ip 192.168.10.1` and `priority 150`. On `Arista-SW2`, you'd configure `vrrp 1 ip 192.168.10.1` and `priority 100`. Both would have `preempt` enabled (by default). Verification commands like `show vrrp` provide detailed status of all VRRP groups, including the state (Master/Backup), virtual IP, priority, and timers. `show vrrp interface vlan <VLAN_ID>` gives specific interface details. Common mistakes include IP address conflicts (configuring the virtual IP as a physical IP on another device), mismatched VRRP group IDs, or incorrect priority settings leading to an unintended Master. Also, ensure the underlying physical interfaces are stable and the VRRP advertisements can be exchanged between peers. VRRP is a fundamental building block for highly available Layer 3 networks, ensuring that your critical services remain reachable even if a primary gateway fails.

#### Key concepts
*   **First-Hop Redundancy Protocol (FHRP)**: A category of protocols (like VRRP, HSRP, GLBP) designed to provide default gateway redundancy for end devices.
*   **Virtual Router**: A logical router represented by a virtual IP address and virtual MAC address, managed by a VRRP group.
*   **Virtual IP Address**: The IP address assigned to the virtual router, used by end devices as their default gateway.
*   **Virtual MAC Address**: A specific MAC address used by the Master router to respond to ARP requests for the virtual IP.
*   **Master Router**: The router in a VRRP group that actively forwards traffic for the virtual IP and sends VRRP advertisements.
*   **Backup Router**: A router in a VRRP group that monitors the Master and takes over if the Master fails.
*   **Priority**: A configurable value (1-254) used to elect the Master router; higher priority wins.
*   **Preempt**: A setting that allows a higher-priority router to immediately take over the Master role if it becomes available.

#### Hands-on activity
**Scenario:** Configure VRRP on two Arista switches to provide a redundant default gateway for VLAN 10.
**Task:** On `Arista-SW1` and `Arista-SW2`, configure VRRP for VLAN 10. `Arista-SW1` should be the preferred Master.
**Instructions (for Arista-SW1):**
1.  Access `Arista-SW1` CLI.
2.  Configure the VLAN 10 interface with its physical IP address (e.g., 192.168.10.2/24).
3.  Configure VRRP group 1 on VLAN 10, with virtual IP 192.168.10.1 and priority 150.
4.  Verify the VRRP status.

```
! Arista-SW1 Configuration
enable
configure terminal

! Configure VLAN 10 interface
interface Vlan10
   description "VLAN 10 for VRRP"
   ip address 192.168.10.2/24

! Configure VRRP group 1
   vrrp 1 ip 192.168.10.1
   vrrp 1 priority 150
   ! Preempt is enabled by default, but can be explicitly set
   vrrp 1 preempt

end

! Verification commands
show vrrp
show vrrp interface Vlan10
```
**Instructions (for Arista-SW2):**
1.  Access `Arista-SW2` CLI.
2.  Configure the VLAN 10 interface with its physical IP address (e.g., 192.168.10.3/24).
3.  Configure VRRP group 1 on VLAN 10, with virtual IP 192.168.10.1 and priority 100.
4.  Verify the VRRP status.

```
! Arista-SW2 Configuration
enable
configure terminal

! Configure VLAN 10 interface
interface Vlan10
   description "VLAN 10 for VRRP"
   ip address 192.168.10.3/24

! Configure VRRP group 1
   vrrp 1 ip 192.168.10.1
   vrrp 1 priority 100
   vrrp 1 preempt

end

! Verification commands
show vrrp
show vrrp interface Vlan10
```

#### Assessment idea
1.  **Question:** In a VRRP configuration, two Arista switches, `SW-A` (priority 120) and `SW-B` (priority 100), are configured for VRRP group 1 with the same virtual IP address. Both switches have `preempt` enabled. If `SW-A` fails and `SW-B` becomes the Master, what happens when `SW-A` comes back online?
    a) `SW-B` remains the Master because it was already active.
    b) `SW-A` immediately takes over as Master due to its higher priority and preemption.
    c) Both `SW-A` and `SW-B` become Masters, causing an IP conflict.
    d) VRRP enters a disabled state until manually reconfigured.

    **Correct Answer:** b) `SW-A` immediately takes over as Master due to its higher priority and preemption.
    **Explanation:** With `preempt` enabled, a router with a higher priority will always become the Master when it becomes available, even if a lower-priority router is currently acting as Master. Since `SW-A` has a higher priority (120 > 100), it will preempt `SW-B` and become the Master once it's back online.

2.  **Question:** A network engineer configures VRRP on an Arista switch's VLAN interface, but connected devices are unable to use the virtual IP address as their default gateway. Upon inspection, the `show vrrp` command shows the VRRP group in a "Backup" state, even though it should be the Master. What is a common reason for a router to remain in the Backup state when it should be Master?
    a) The virtual IP address is configured incorrectly on the end devices.
    b) The physical interface for the VLAN is down or misconfigured.
    c) Another router in the VRRP group has a higher priority or the same priority with a higher physical IP address.
    d) The `vrrp timer advertise` command is set too high.

    **Correct Answer:** c) Another router in the VRRP group has a higher priority or the same priority with a higher physical IP address.
    **Explanation:** VRRP Master election is based on priority, then on the physical IP address if priorities are equal. If the intended Master is stuck in Backup, it means another router in the VRRP group is currently acting as Master, either because it has a higher priority configured, or if priorities are the same, it has a higher physical IP address on the VRRP interface. Options a, b, and d would cause other issues but wouldn't necessarily keep the router in a Backup state if it's supposed to be Master.

#### AI generation note
Create an 11-minute animated diagram and CLI demo video. Start with a network diagram showing two Arista switches and a client, illustrating the single point of failure with a single default gateway. Introduce VRRP, showing the virtual router concept with a floating virtual IP. Then, transition to a live CLI demo on two Arista switches, configuring VRRP group 1 on a VLAN interface with different priorities. Use `show vrrp` to demonstrate the Master/Backup roles. Simulate a Master failure by shutting down the interface and show the Backup taking over. Include a "fill-in-the-blanks" interactive quiz about VRRP roles and election criteria.

### Chapter 5.5 — High Availability Features and Best Practices

#### Learning objectives
*   Summarize the various high availability (HA) mechanisms available in Arista EOS.
*   Explain the concept and benefits of Equal-Cost Multi-Path (ECMP) routing for Layer 3 load balancing and redundancy.
*   Describe the purpose and application of Bidirectional Forwarding Detection (BFD).
*   Identify general best practices for designing and implementing highly available networks.
*   Understand the importance of monitoring and proactive maintenance in HA environments.

#### Detailed lesson content
Throughout this module, we've explored several critical mechanisms for building resilient networks: LACP for link redundancy, STP for Layer 2 loop prevention, MLAG for switch-level redundancy, and VRRP for first-hop routing redundancy. These individual components, when combined strategically, form the foundation of a truly highly available network. However, Arista EOS offers even more advanced features that enhance resilience and performance. One such feature is Equal-Cost Multi-Path (ECMP) routing. While not strictly a redundancy protocol in the same vein as VRRP, ECMP is a Layer 3 routing technique that allows a router to use multiple paths to the same destination if those paths have the same routing cost. This provides both load balancing (distributing traffic across multiple links) and redundancy. If one of the ECMP paths fails, traffic is automatically rerouted over the remaining active paths, often with very fast convergence, especially when combined with rapid failure detection mechanisms.

Another crucial high availability feature is Bidirectional Forwarding Detection (BFD). BFD is a lightweight, low-overhead protocol designed to detect failures in the forwarding path between two adjacent network devices much faster than traditional routing protocol hello timers. While routing protocols like OSPF and BGP have their own hello mechanisms, their timers are often in the seconds range. BFD, on the other hand, can detect failures in milliseconds. This rapid detection is critical for minimizing downtime in scenarios where a link or an adjacent device fails. When BFD detects a failure, it immediately notifies the associated routing protocols (e.g., OSPF, BGP, VRRP), allowing them to converge much faster than they would on their own. Configuring BFD typically involves enabling it on an interface and associating it with the routing protocol or FHRP that needs faster failure detection.

Designing and implementing highly available networks extends beyond just configuring individual protocols; it requires a holistic approach and adherence to best practices. Physical redundancy is paramount: ensuring redundant power supplies, dual uplinks, and geographically diverse network paths where possible. Logical redundancy, as we've discussed, involves protocols like LACP, MLAG, VRRP, and STP. Beyond configuration, continuous monitoring is non-negotiable. Tools that provide real-time visibility into link status, protocol states, and device health are essential for proactive problem identification. Regular backups of configurations, documented network diagrams, and a clear understanding of traffic flows are also vital. A common mistake is to over-engineer redundancy, leading to unnecessary complexity, or conversely, to neglect redundancy in non-critical areas, only to find they become critical during an outage. The goal is a balanced design that meets availability requirements without excessive cost or complexity.

Furthermore, safety notes in HA environments often revolve around change management. Any change, no matter how small, can potentially disrupt a carefully balanced redundant system. Always follow strict change control procedures, test changes in a lab environment first, and have rollback plans. For example, when modifying an MLAG peer link, ensure you understand the impact of taking down links that carry synchronization traffic. Similarly, when adjusting VRRP priorities, be aware of potential traffic shifts. Arista EOS also offers internal HA features, such as supervisor card redundancy in modular chassis switches (though less common in fixed-configuration switches typically covered at the Associate level), and stateful firewall HA for security services. The key takeaway is that high availability is not a single feature but rather a combination of robust design principles, intelligent protocol configurations, continuous monitoring, and disciplined operational practices. By mastering these concepts, you can build networks that are resilient, performant, and capable of meeting the demands of modern applications.

#### Key concepts
*   **Equal-Cost Multi-Path (ECMP)**: A Layer 3 routing technique that allows a router to use multiple paths to the same destination if those paths have the same routing cost, providing both load balancing and redundancy.
*   **Bidirectional Forwarding Detection (BFD)**: A lightweight protocol used to quickly detect failures in the forwarding path between two adjacent network devices, often in milliseconds.
*   **Physical Redundancy**: Redundancy at the hardware level, such as redundant power supplies, fans, and multiple physical links.
*   **Logical Redundancy**: Redundancy achieved through software configurations and protocols, such as LACP, MLAG, STP, and VRRP.
*   **Proactive Monitoring**: Continuously observing network health, performance, and protocol states to identify and address potential issues before they cause outages.
*   **Change Management**: A structured process for introducing changes to a network, including planning, testing, implementation, and rollback procedures.

#### Hands-on activity
**Scenario:** Configure BFD for a VRRP group on an Arista switch to enable faster failure detection.
**Task:** On `Arista-SW1`, enable BFD globally and then associate it with VRRP group 1 on VLAN 10.
**Instructions:**
1.  Access `Arista-SW1` CLI.
2.  Enable BFD globally.
3.  Configure BFD parameters on the VLAN 10 interface.
4.  Associate BFD with VRRP group 1 on VLAN 10.
5.  Verify BFD and VRRP status.

```
! Arista-SW1 Configuration
enable
configure terminal

! Enable BFD globally
bfd enable

! Configure BFD parameters on the interface
interface Vlan10
   ! Assuming Vlan10 is already configured with IP and VRRP from previous chapter
   bfd interval 500 min_rx 500 multiplier 3

! Associate BFD with VRRP group 1
   vrrp 1 bfd

end

! Verification commands
show bfd neighbors
show vrrp interface Vlan10 detail
```

#### Assessment idea
1.  **Question:** A network engineer wants to improve the convergence time of VRRP when a physical link or adjacent router fails. Which protocol, when integrated with VRRP, can significantly speed up the detection of such failures?
    a) Spanning Tree Protocol (STP)
    b) Link Aggregation Control Protocol (LACP)
    c) Bidirectional Forwarding Detection (BFD)
    d) Border Gateway Protocol (BGP)

    **Correct Answer:** c) Bidirectional Forwarding Detection (BFD)
    **Explanation:** BFD is specifically designed for rapid failure detection (in milliseconds) in the forwarding path between adjacent devices. It can be integrated with various protocols, including VRRP, OSPF, and BGP, to provide faster notification of link or neighbor failures, leading to quicker convergence. STP and LACP serve different purposes, and BGP is a routing protocol that can benefit from BFD but doesn't provide the detection itself.

2.  **Question:** Which of the following is considered a best practice for designing highly available networks, beyond just configuring redundancy protocols?
    a) Relying solely on software-based redundancy without physical backups.
    b) Implementing changes directly in production without prior testing.
    c) Ensuring redundant power supplies and uplinks, and continuous monitoring.
    d) Disabling all logging to reduce network overhead.

    **Correct Answer:** c) Ensuring redundant power supplies and uplinks, and continuous monitoring.
    **Explanation:** Best practices for HA networks include physical redundancy (like redundant power supplies and uplinks), logical redundancy (protocols), and crucial operational aspects like continuous monitoring, robust change management, and regular backups. Relying solely on software (a) is risky, implementing changes without testing (b) is dangerous, and disabling logging (d) hinders troubleshooting and auditing.

#### AI generation note
Create a 10-minute mixed media lesson. Start with a slide presentation explaining ECMP and BFD concepts with clear diagrams showing traffic distribution and rapid failure detection. Then, transition to a live CLI demo on an Arista switch, demonstrating the configuration of BFD globally and its association with a VRRP group. Use `show bfd neighbors` and `show vrrp interface Vlan10 detail` to show the BFD state. Conclude with a discussion on general HA best practices, emphasizing physical redundancy, monitoring, and change management. Include a short "true/false" quiz on HA principles.

---

## Module 6: Network Monitoring, Troubleshooting, and Automation Basics

This module provides a foundational understanding of how to effectively monitor, diagnose, and automate tasks on Arista EOS-powered networks. We will explore essential CLI commands for real-time visibility, delve into advanced troubleshooting techniques, and introduce the core concepts of network automation, culminating in practical examples using Arista's eAPI and an overview of Ansible. By the end of this module, you'll be equipped with the skills to maintain network health, quickly resolve issues, and begin your journey into automating repetitive network operations.

### Chapter 6.1 — Introduction to Network Monitoring with Arista EOS

#### Learning objectives
*   Explain the importance of network monitoring in maintaining network health and performance.
*   Utilize fundamental Arista EOS `show` commands to gather real-time operational data.
*   Configure and verify basic syslog functionality for centralized event logging.
*   Describe the role of SNMP in network monitoring and configure basic SNMP settings on an Arista switch.
*   Identify common monitoring pitfalls and best practices for effective data collection.

#### Detailed lesson content
Effective network monitoring is the bedrock of a stable and high-performing network infrastructure. Without it, network administrators are left reacting to outages rather than proactively preventing them, leading to increased downtime and operational costs. On Arista EOS devices, monitoring begins with a suite of powerful `show` commands that provide immediate, real-time insights into the device's operational state, interface statistics, resource utilization, and more. These commands are your first line of defense, allowing you to quickly ascertain the health of your switch and identify potential bottlenecks or issues. For instance, checking interface status is crucial: `show interfaces status` provides a concise summary of all ports, their operational state (up/down), and connected VLANs. If an interface is showing as "down," it immediately signals a physical layer problem or a misconfiguration.

Beyond simple status checks, it's vital to monitor resource utilization to prevent performance degradation. Commands like `show cpu` and `show memory` offer insights into how heavily the switch's processor and RAM are being utilized. High CPU utilization might indicate a routing protocol flapping, excessive control plane traffic, or even a denial-of-service attack. Similarly, consistently high memory usage could point to memory leaks or an overloaded routing table. Understanding the normal baseline for your devices is key here; a sudden spike above this baseline warrants investigation. Arista EOS also provides granular statistics for specific processes, allowing you to pinpoint which components are consuming the most resources using commands like `show processes top`. This level of detail is invaluable for diagnosing complex performance issues where general CPU/memory metrics might not be enough.

While real-time `show` commands are excellent for immediate diagnostics, a comprehensive monitoring strategy requires historical data and centralized logging. Syslog is an industry-standard protocol for sending system messages or event logs to a centralized server. Configuring syslog on your Arista switches allows you to collect logs from multiple devices in one place, making it easier to correlate events across your network and retain historical data for auditing and post-mortem analysis. To configure syslog, you typically specify a remote syslog server's IP address and the logging level. For example, `logging host 192.168.1.100` sends logs to that server, and `logging level informational` sets the verbosity. It's a common mistake to send all log levels (debug, informational, warning, error, critical, alert, emergency) to the syslog server, which can quickly overwhelm it with unnecessary data. A best practice is to start with `informational` or `notice` and adjust as needed, ensuring you capture critical events without drowning in noise.

Another critical component of network monitoring is the Simple Network Management Protocol (SNMP). SNMP is an application-layer protocol that facilitates the exchange of management information between network devices. It allows network management systems (NMS) to query devices for various metrics (e.g., interface bandwidth utilization, error rates, CPU load) and receive asynchronous notifications (traps or informs) when specific events occur. On Arista EOS, configuring SNMP involves defining community strings (essentially passwords for read-only or read-write access) and specifying trap destinations. For instance, `snmp-server community public ro` configures a read-only community string named "public." For security, it's crucial to use strong, non-default community strings and restrict access to trusted NMS hosts. A common security mistake is leaving default community strings enabled or using easily guessable ones, which can expose sensitive network information. SNMP traps are particularly useful as they alert the NMS to critical events like interface link status changes or device reboots, enabling immediate response.

Finally, effective monitoring isn't just about collecting data; it's about interpreting it and acting upon it. Regularly reviewing logs, understanding performance trends, and setting up appropriate alerts are crucial. A common mistake is to configure monitoring tools but never actually look at the data or fine-tune the alerts, leading to "alert fatigue" where operators ignore warnings due to excessive false positives. Safety in monitoring involves ensuring that monitoring traffic doesn't overwhelm the network or the monitored device itself. For example, excessively frequent SNMP polling can add unnecessary load to the switch's CPU. Always consider the impact of your monitoring strategy on network performance and device resources. Building a comprehensive monitoring dashboard that integrates data from various sources (syslog, SNMP, NetFlow/sFlow if configured) provides a holistic view of network health, allowing for proactive identification and resolution of issues before they impact users.

#### Key concepts
*   **Network Monitoring:** The process of continuously observing network components for faults, performance, availability, and security.
*   **`show` commands:** Arista EOS CLI commands used to display real-time operational status and configuration details of the device.
*   **Syslog:** A standard protocol for sending system log or event messages to a centralized server for storage and analysis.
*   **SNMP (Simple Network Management Protocol):** An application-layer protocol used to manage and monitor network devices, collect data, and receive event notifications (traps/informs).
*   **Community String:** A password-like string used to authenticate access to SNMP-managed devices.
*   **SNMP Trap:** An unsolicited message sent by an SNMP agent to an NMS to notify of a significant event.
*   **NMS (Network Management System):** Software applications used to monitor, manage, and configure network devices.

#### Hands-on activity
**Activity: Basic Arista EOS Monitoring Setup**

**Scenario:** You need to configure basic monitoring on an Arista vEOS switch to gather interface status, CPU usage, and send logs to a simulated syslog server.

**Instructions:**
1.  Access your Arista vEOS switch via CLI.
2.  Execute the following `show` commands to get a baseline:
    ```
    show interfaces status
    show cpu
    show memory
    show logging
    ```
3.  Configure syslog to send informational messages to a fictitious server at `192.168.1.100`.
    ```
    configure terminal
    logging host 192.168.1.100
    logging level informational
    end
    ```
4.  Configure an SNMPv2c read-only community string named "CohortiaMonitor" and specify a trap destination to `192.168.1.101`.
    ```
    configure terminal
    snmp-server community CohortiaMonitor ro
    snmp-server host 192.168.1.101 version 2c CohortiaMonitor
    end
    ```
5.  Verify the syslog configuration:
    ```
    show running-config | section logging
    ```
6.  Verify the SNMP configuration:
    ```
    show running-config | section snmp-server
    ```

**Expected Output (example for verification):**
```
! Output for show running-config | section logging
logging host 192.168.1.100
logging level informational

! Output for show running-config | section snmp-server
snmp-server community CohortiaMonitor ro
snmp-server host 192.168.1.101 version 2c CohortiaMonitor
```

#### Assessment idea
1.  **Question:** A network administrator notices that an Arista switch's CPU utilization is consistently above 90%. Which of the following `show` commands would be most effective in identifying which specific process is consuming the most CPU resources?
    A) `show interfaces`
    B) `show memory`
    C) `show processes top`
    D) `show version`

    **Correct Answer:** C) `show processes top`
    **Explanation:** While `show cpu` provides an overall CPU utilization percentage, `show processes top` (similar to `top` on Linux) displays a real-time list of processes and their individual CPU consumption, allowing the administrator to pinpoint the exact process causing high load.

2.  **Question:** You've configured syslog on your Arista switch to send logs to a central server, but you're receiving an overwhelming amount of debug messages that are filling up the server's disk space. What configuration change would you make to reduce the verbosity of the logs while still capturing important operational events? Provide the command.

    **Correct Answer:** You should adjust the `logging level` to a less verbose setting, such as `informational` or `notice`.
    **Command:**
    ```
    configure terminal
    logging level informational
    end
    ```
    **Explanation:** The `logging level` command controls the minimum severity level of messages that are sent to syslog destinations. By changing it from a potentially default `debug` or `all` to `informational` or `notice`, you filter out less critical messages, reducing the volume of logs sent to the server while still capturing important operational events and warnings.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute animated explanation of why monitoring is crucial, showing a network health dashboard. Transition to a 7-minute live terminal demo on an Arista vEOS switch, showcasing `show interfaces status`, `show cpu`, `show memory`, `show processes top`, and the configuration and verification of syslog and SNMP. Use split-screen for commands and their output. Highlight common mistakes like using default SNMP communities or excessive logging levels. Conclude with a 2-minute interactive quiz asking about the purpose of `show processes top` and how to reduce syslog verbosity. Ensure all CLI commands are clearly visible and explained.

### Chapter 6.2 — Advanced Monitoring and Troubleshooting Tools

#### Learning objectives
*   Apply advanced `ping` and `traceroute` options to diagnose network connectivity and path issues.
*   Utilize `tcpdump` on Arista EOS to capture and analyze network traffic for troubleshooting.
*   Configure and verify port mirroring (`monitor session`) for in-depth traffic analysis.
*   Explain the purpose and basic usage of `event-monitor` for tracking specific system events.
*   Develop a systematic approach to network troubleshooting using a combination of Arista EOS tools.

#### Detailed lesson content
Moving beyond basic `show` commands, effective network troubleshooting often requires deeper insights into connectivity, path, and packet flow. The `ping` and `traceroute` utilities, while seemingly simple, are indispensable tools for initial diagnostics. `ping` verifies basic IP reachability to a destination, but its advanced options on Arista EOS can reveal more. For instance, `ping <destination_ip> source <source_ip>` allows you to specify the source interface or IP address, which is crucial when troubleshooting asymmetric routing or verifying reachability from a specific VLAN interface. The `repeat <count>` option is useful for observing packet loss over time, while `interval <seconds>` can help detect intermittent issues. Similarly, `traceroute` maps the path packets take to a destination, identifying routers along the way. Advanced `traceroute` options like `source <source_ip>` or `timeout <seconds>` can help diagnose issues where specific paths are failing or where intermediate devices are slow to respond, indicating potential routing loops or firewall blocks. A common mistake is to only use `ping` without considering the source interface, which can mask issues related to specific routing instances or VLANs.

When connectivity issues persist or application-layer problems arise, you need to look at the actual packets traversing the network. Arista EOS provides the powerful `tcpdump` utility, a command-line packet analyzer, directly on the switch. This allows you to capture traffic flowing through the switch's CPU or even specific interfaces, without needing external taps or mirroring to another device. `tcpdump` can be filtered extensively to capture only relevant traffic, saving you from sifting through gigabytes of data. For example, `tcpdump interface Ethernet1 host 10.0.0.1 and port 80` captures HTTP traffic to/from a specific host on Ethernet1. Understanding `tcpdump` filters (based on host, port, protocol, network, etc.) is critical for efficient troubleshooting. A common mistake is running `tcpdump` without filters, leading to an overwhelming amount of data that is difficult to analyze and potentially consuming excessive CPU resources on the switch. Safety note: running `tcpdump` on a busy interface for extended periods can impact switch performance, especially on the control plane. Always filter judiciously and stop the capture as soon as you have enough data.

For more in-depth, sustained traffic analysis, especially when the traffic doesn't hit the CPU (e.g., purely switched traffic), port mirroring, known as `monitor session` on Arista EOS, is the go-to solution. Port mirroring duplicates traffic from one or more source interfaces (or VLANs) and sends it to a designated destination interface, typically connected to a network analyzer or intrusion detection system. This allows an external device to passively observe the traffic without interfering with the production flow. Configuring a `monitor session` involves defining the session number, specifying source interfaces (ingress, egress, or both), and defining the destination interface. For example:
```
monitor session 1
  source interface Ethernet1 both
  destination interface Ethernet2
```
This configuration mirrors all traffic on Ethernet1 (both inbound and outbound) to Ethernet2. It's crucial that the destination interface is not used for production traffic and is connected to a dedicated monitoring device. A common mistake is to mirror to an interface that is part of a production VLAN or to forget to shut down the `monitor session` after troubleshooting, which can lead to security risks or performance degradation if the monitoring device fails. Always ensure the monitoring device can handle the mirrored traffic volume to avoid packet drops at the destination.

Beyond traffic analysis, tracking specific system events can be crucial for diagnosing intermittent issues. Arista EOS offers `event-monitor`, a tool that allows you to monitor specific events in real-time, such as interface state changes, routing protocol adjacencies, or even BGP updates. You can specify patterns or keywords to watch for, and `event-monitor` will display matching log entries as they occur. For example, `event-monitor interface Ethernet1` will show all log messages related to Ethernet1. This is particularly useful for observing transient issues that might not be captured by a standard `show logging` command due to log rotation or buffer limitations. While powerful, `event-monitor` can also generate a lot of output if not filtered properly, making it hard to find the relevant information.

A systematic approach to troubleshooting is paramount. Start by defining the problem clearly: What is broken? Who is affected? When did it start? Then, gather information using `show` commands, `ping`, and `traceroute`. Formulate a hypothesis about the root cause. Test your hypothesis using tools like `tcpdump` or `monitor session` to confirm or deny it. If confirmed, implement a solution. If denied, refine your hypothesis and gather more data. Common mistakes include jumping to conclusions, changing multiple variables at once, or failing to document troubleshooting steps and outcomes. Always remember the OSI model: start at the physical layer and work your way up. Is the cable good? Is the interface up? Is IP addressing correct? Is routing working? Is the application listening? This structured approach, combined with the powerful tools Arista EOS provides, will significantly improve your troubleshooting efficiency and reduce network downtime.

#### Key concepts
*   **`ping`:** A network utility used to test the reachability of a host on an Internet Protocol (IP) network and to measure the round-trip time for messages sent from the originating host to a destination computer.
*   **`traceroute`:** A network diagnostic tool for displaying the route (path) and measuring transit delays of packets across an IP network.
*   **`tcpdump`:** A command-line packet analyzer tool available on Arista EOS for capturing and analyzing network traffic.
*   **Port Mirroring (`monitor session`):** A feature that duplicates network packets from one or more source ports/VLANs to a designated destination port for monitoring and analysis.
*   **`event-monitor`:** An Arista EOS utility to display real-time log messages matching specific patterns or keywords.
*   **OSI Model:** A conceptual framework used to describe the functions of a networking system in seven layers (Physical, Data Link, Network, Transport, Session, Presentation, Application).

#### Hands-on activity
**Activity: Advanced Troubleshooting with `tcpdump` and `monitor session`**

**Scenario:** You suspect intermittent connectivity issues on `Ethernet2` when communicating with a server at `10.0.0.10`. You need to capture traffic to confirm.

**Instructions:**
1.  Access your Arista vEOS switch via CLI.
2.  Attempt to `ping` the server from the switch, specifying the source interface:
    ```
    ping 10.0.0.10 source Ethernet2
    ```
3.  Start a `tcpdump` capture on `Ethernet2` for traffic to/from `10.0.0.10`. Let it run for 10-15 seconds, then stop it with `Ctrl+C`.
    ```
    tcpdump interface Ethernet2 host 10.0.0.10
    ```
4.  Configure a `monitor session` to mirror all traffic from `Ethernet2` (both ingress and egress) to `Ethernet3`. Assume `Ethernet3` is connected to a monitoring station.
    ```
    configure terminal
    monitor session 1
      source interface Ethernet2 both
      destination interface Ethernet3
    end
    ```
5.  Verify the `monitor session` configuration.
    ```
    show monitor session 1
    ```
6.  Deactivate the `monitor session` after verification to prevent unintended traffic duplication.
    ```
    configure terminal
    no monitor session 1
    end
    ```

**Expected Output (example for verification of `monitor session`):**
```
! Output for show monitor session 1
Session 1
--------------------------------------------------------------------------
    Source      : Et2
    Destination : Et3
    Direction   : both
    Status      : active
```

#### Assessment idea
1.  **Question:** A user reports that they can `ping` a server, but their application cannot connect to it on port 8080. Which `tcpdump` command would be most appropriate to investigate if the server is receiving and responding to traffic on that specific port on `Ethernet1`?
    A) `tcpdump interface Ethernet1`
    B) `tcpdump interface Ethernet1 host <server_ip>`
    C) `tcpdump interface Ethernet1 host <server_ip> and port 8080`
    D) `tcpdump interface Ethernet1 proto tcp`

    **Correct Answer:** C) `tcpdump interface Ethernet1 host <server_ip> and port 8080`
    **Explanation:** This command is the most specific, filtering traffic on `Ethernet1` to only show packets related to the server's IP address and the specific application port (8080). This helps to quickly identify if packets are reaching the server and if the server is responding, without being overwhelmed by unrelated traffic.

2.  **Question:** You've configured a `monitor session` on an Arista switch to troubleshoot an issue. After resolving the problem, you forget to disable the `monitor session`. Describe two potential negative consequences of leaving an active `monitor session` configured unnecessarily.

    **Correct Answer:**
    1.  **Resource Consumption:** An active `monitor session` consumes switch resources (CPU, memory, forwarding capacity) to duplicate traffic. If left on indefinitely, especially on high-traffic interfaces, it can lead to performance degradation or resource exhaustion on the switch.
    2.  **Security Risk:** If the destination interface of the `monitor session` is connected to an unsecure or unmonitored device, or if the monitoring device fails, sensitive network traffic could be exposed or inadvertently forwarded to an unintended location, creating a security vulnerability.

#### AI generation note
Produce a 10-minute live coding video. Begin by demonstrating advanced `ping` and `traceroute` options from the Arista CLI, showing how to specify source interfaces. Transition to a detailed `tcpdump` demo, capturing and filtering traffic on a specific interface for a given host and port. Then, walk through the configuration of a `monitor session` step-by-step, explaining each command and verifying the setup. Conclude by showing how to disable the session. Use a split-screen view for CLI commands and their outputs. Emphasize common mistakes like not filtering `tcpdump` or leaving `monitor sessions` active. Include a reflection prompt asking learners to consider when `tcpdump` vs. `monitor session` is more appropriate.

### Chapter 6.3 — Introduction to Network Automation Concepts

#### Learning objectives
*   Articulate the benefits of network automation, including consistency, speed, and error reduction.
*   Differentiate between imperative and declarative approaches to network configuration.
*   Explain the concept of idempotency in the context of network automation.
*   Explore basic CLI scripting techniques on Arista EOS for repetitive tasks.
*   Identify the limitations of manual configuration and the need for automation.

#### Detailed lesson content
The landscape of network management is rapidly evolving, moving away from purely manual, command-line interface (CLI) driven operations towards automation. Network automation is the process of using software to manage, configure, provision, and operate network devices. The primary driver for this shift is the immense pressure to scale networks, reduce operational costs, and minimize human error. Imagine configuring hundreds of VLANs across dozens of switches, or updating an ACL on every access port in a large campus network. Manually performing these tasks is not only time-consuming but also highly prone to errors, leading to inconsistencies and potential outages. Automation addresses these challenges by enabling network engineers to define configurations programmatically, ensuring consistency, dramatically increasing operational speed, and significantly reducing the likelihood of human-induced mistakes. It frees up engineers to focus on more strategic, complex problems rather than repetitive, mundane tasks.

At the heart of network automation lies a fundamental distinction in how we instruct systems: imperative versus declarative. An **imperative** approach focuses on *how* to achieve a desired state by providing a sequence of commands or steps. Think of it like giving a recipe: "First, create VLAN 10. Then, assign IP address 192.168.10.1 to interface Vlan10. Next, add Ethernet1 to VLAN 10." Each step must be executed in order, and the system follows these explicit instructions. This is how traditional CLI configuration works. In contrast, a **declarative** approach focuses on *what* the desired state should be, leaving the system to figure out *how* to get there. You simply state, "I want VLAN 10 to exist, with IP 192.168.10.1 on its SVI, and Ethernet1 to be a member of it." The automation tool then compares this desired state with the current state of the device and takes only the necessary actions to reconcile the differences. Most modern automation tools, like Ansible, favor a declarative approach because it simplifies configuration management and inherently supports idempotency.

**Idempotency** is a crucial concept in network automation. An idempotent operation is one that, when applied multiple times, produces the same result as if it were applied only once. In networking terms, if you run an automation script to ensure a specific VLAN exists, and that VLAN already exists, an idempotent script will do nothing or report that the state is already achieved, without causing errors or making unnecessary changes. If the VLAN does not exist, the script will create it. This characteristic is incredibly valuable because it allows automation scripts to be run repeatedly without adverse side effects, making them safe for continuous deployment, configuration auditing, and recovery operations. Without idempotency, rerunning a script might try to create a VLAN that already exists, leading to errors or unintended reconfigurations. This is a common pitfall in manual CLI scripting where commands are often imperative and not inherently idempotent.

While full-fledged automation platforms like Ansible or Python scripts are powerful, you can begin exploring automation concepts with basic CLI scripting on Arista EOS. The EOS CLI is robust and offers features that facilitate simple automation. For example, you can create aliases for frequently used command sequences.
```
configure terminal
alias show_int_brief show interfaces status
end
```
Now, typing `show_int_brief` will execute `show interfaces status`. This is a simple form of imperative automation. For more complex, multi-line configurations, you can store a sequence of commands in a text file and paste them into the CLI, or even use the `cli` command to execute a script.
```
# Example: a simple script file named 'configure_vlan.cli'
configure terminal
vlan 20
  name Sales
interface Vlan20
  ip address 192.168.20.1/24
end
```
You could then execute this with `cli < configure_vlan.cli` (if supported by your shell environment on the switch, or typically via an external SSH client). However, these methods are largely imperative and lack the sophisticated state management and idempotency of dedicated automation tools. They are good for quick, one-off tasks but quickly become unwieldy for large-scale or complex deployments.

The limitations of manual configuration and simple CLI scripting become apparent as network size and complexity grow. Manually logging into each device, typing commands, and verifying configurations is slow, error-prone, and doesn't scale. It also makes it difficult to track changes, roll back configurations, or ensure compliance. This is where the true power of network automation frameworks comes into play. They provide mechanisms for source control, testing, and continuous integration/continuous deployment (CI/CD) pipelines, treating network infrastructure as code. This "Infrastructure as Code" (IaC) approach is a paradigm shift that brings software development best practices to network operations, leading to more reliable, agile, and secure networks. Understanding these foundational concepts—the benefits, declarative vs. imperative, and idempotency—is your first step towards embracing the future of network management with Arista EOS.

#### Key concepts
*   **Network Automation:** The process of automating the configuration, management, testing, deployment, and operation of network devices and services using software.
*   **Imperative Configuration:** An approach where you specify *how* to achieve a desired state by providing a sequence of explicit commands or steps.
*   **Declarative Configuration:** An approach where you specify *what* the desired state should be, and the automation tool figures out *how* to achieve it.
*   **Idempotency:** The property of an operation that produces the same result whether it is applied once or multiple times. In automation, it means running a script multiple times will not cause unintended side effects.
*   **Infrastructure as Code (IaC):** Managing and provisioning infrastructure through code instead of manual processes, allowing for version control, automation, and repeatability.
*   **CLI Scripting:** Using sequences of command-line interface commands, often stored in a file, to automate repetitive tasks on network devices.

#### Hands-on activity
**Activity: Exploring CLI Aliases and Basic Scripting**

**Scenario:** You want to simplify frequently used `show` commands and create a simple script to configure a new VLAN.

**Instructions:**
1.  Access your Arista vEOS switch via CLI.
2.  Create an alias for `show ip interface brief` to `showip`:
    ```
    configure terminal
    alias showip show ip interface brief
    end
    ```
3.  Test your new alias:
    ```
    showip
    ```
4.  Create a text file on your local machine (or a temporary file on the switch if you have shell access) named `create_test_vlan.cli` with the following content:
    ```
    configure terminal
    vlan 100
      name TestVLANAutomation
    interface Vlan100
      ip address 10.0.100.1/24
      no shutdown
    end
    ```
5.  If you have SSH access from your local machine, you can typically pipe this file to the switch's CLI. For example, using `ssh` and `cat`:
    ```bash
    # From your local machine, assuming SSH user 'admin' and switch IP '192.168.0.10'
    cat create_test_vlan.cli | ssh admin@192.168.0.10
    ```
    *If direct piping isn't feasible in your lab setup, manually copy and paste the content of `create_test_vlan.cli` into the switch's CLI in configuration mode.*
6.  Verify the VLAN and SVI configuration:
    ```
    show vlan id 100
    show ip interface brief Vlan100
    ```
7.  Remove the alias and the configured VLAN for cleanup:
    ```
    configure terminal
    no alias showip
    no vlan 100
    no interface Vlan100
    end
    ```

**Expected Output (example for verification):**
```
! Output for show vlan id 100
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
100  TestVLANAutomation               active

! Output for show ip interface brief Vlan100
Interface      IP Address     Status     Protocol
Vlan100        10.0.100.1/24  up         up
```

#### Assessment idea
1.  **Question:** Which of the following best describes the primary benefit of using a declarative approach in network automation compared to an imperative approach?
    A) It allows for faster execution of individual commands.
    B) It provides more granular control over each specific command step.
    C) It focuses on the desired end state, making scripts inherently more idempotent and easier to manage.
    D) It completely eliminates the need for any manual intervention.

    **Correct Answer:** C) It focuses on the desired end state, making scripts inherently more idempotent and easier to manage.
    **Explanation:** The declarative approach describes the desired state, and the automation tool handles the steps to achieve it. This naturally leads to more idempotent scripts because the tool only makes changes if the current state deviates from the desired state, simplifying management and reducing errors.

2.  **Question:** You've written a simple CLI script to add a new user to an Arista switch. If you run this script multiple times, and it attempts to add the user each time, resulting in an error message after the first successful run, what automation principle is this script violating? Explain why this principle is important.

    **Correct Answer:** This script is violating the principle of **idempotency**.
    **Explanation:** Idempotency means that an operation, when applied multiple times, produces the same result as if it were applied only once. In this scenario, the script is not idempotent because re-running it attempts to create a user that already exists, leading to an error. Idempotency is crucial for network automation because it allows scripts to be run safely and repeatedly for tasks like configuration auditing, state enforcement, or recovery, without causing unintended changes or errors on already configured devices.

#### AI generation note
Create an 8-minute animated video. Start with a visual analogy comparing imperative (step-by-step recipe) vs. declarative (desired meal description) configuration. Then, animate a scenario showing the pain points of manual configuration (typos, time, inconsistency) versus the benefits of automation (speed, accuracy, consistency). Illustrate the concept of idempotency with a simple network example (e.g., configuring a VLAN that already exists). Briefly show a simple Arista CLI alias creation as a "first step" into automation. Use clear, concise language and professional animation style. Include an interactive element where learners drag and drop features into "Imperative" or "Declarative" categories.

### Chapter 6.4 — Arista EOS Programmability and APIs

#### Learning objectives
*   Understand the role of Arista's Extensible Operating System (EOS) as a programmable network OS.
*   Describe the purpose and architecture of the Arista eAPI (Extensible API).
*   Explain how JSON-RPC is used as the underlying protocol for eAPI communication.
*   Enable and test basic eAPI connectivity on an Arista switch using `curl`.
*   Write a simple Python script to interact with eAPI to retrieve device information.

#### Detailed lesson content
Arista EOS stands out in the networking world for its commitment to programmability and open standards. Unlike traditional network operating systems that are often closed and proprietary, EOS is built on a Linux kernel, offering a familiar environment for developers and network engineers alike. This foundation allows Arista to expose a rich set of APIs (Application Programming Interfaces), transforming the network switch from a black box into a programmable platform. This programmability is crucial for modern data centers and cloud environments, where rapid provisioning, automated configuration, and integration with broader IT automation workflows are essential. It means you can manage and interact with your Arista switches not just through the CLI, but also programmatically using scripting languages and automation tools.

The cornerstone of Arista's programmability is the **eAPI (Extensible API)**. The eAPI provides a robust and secure way to interact with the switch's configuration and operational state using standard HTTP/HTTPS requests. It allows external applications and scripts to execute CLI commands, retrieve output, and even push configuration changes. This is a significant departure from screen scraping CLI output, which is fragile and prone to breaking with CLI changes. With eAPI, you interact with a structured API, receiving structured data (typically JSON), which is much easier for programs to parse and process. The eAPI is always available on EOS, but it needs to be explicitly enabled and secured. A common mistake is to enable eAPI without proper authentication or access control, creating a significant security vulnerability. Always ensure you configure HTTPS, strong credentials, and restrict access to trusted source IPs.

The underlying communication protocol for eAPI is **JSON-RPC (JavaScript Object Notation Remote Procedure Call)**. JSON-RPC is a lightweight remote procedure call (RPC) protocol that uses JSON as its data format. When you send a request to the eAPI, you're essentially sending a JSON-formatted message that specifies the method (which CLI command to execute, for example) and its parameters. The switch then processes this request and returns a JSON-formatted response containing the output of the command. This standardized, machine-readable format makes it incredibly easy for any programming language that can handle HTTP requests and parse JSON (which is virtually all modern languages) to interact with Arista switches. For instance, to execute `show version`, you would send a JSON-RPC request with the method `runCmds` and a parameter array containing `["show version"]`. The response would be a JSON object containing the structured output of that command.

To get started with eAPI, you first need to enable it on your Arista switch. This typically involves configuring the HTTP/HTTPS server for eAPI access and specifying authentication.
```
configure terminal
management api http-commands
  no shutdown
  # Example: enable HTTPS and specify an existing local user for authentication
  protocol https
  port 443
  # If you want to restrict access to specific hosts:
  # ip access-group eapi-acl
  # For local user authentication:
  # no enable aaa authentication http-commands
  # For local user authentication (default if no AAA is configured):
  # authentication local
  # For security, restrict access to trusted hosts
  # ip access-group YOUR_ACL_NAME
end
```
Once enabled, you can test eAPI connectivity using `curl`, a command-line tool for making HTTP requests.
```bash
# Example curl command to get 'show version' output
# Replace <switch_ip>, <username>, <password>
curl -k -u <username>:<password> https://<switch_ip>/command-api -d '{"jsonrpc": "2.0", "method": "runCmds", "params": {"format": "json", "version": 1, "cmds": ["show version"]}, "id": 1}'
```
The `-k` flag tells `curl` to ignore SSL certificate warnings (useful in lab environments, but *never* in production without proper certificate validation). The `-u` flag provides username and password for basic authentication. The `-d` flag sends the JSON-RPC payload. This `curl` command demonstrates the fundamental interaction with eAPI, showing how to send a command and receive a JSON response.

Building on this, you can use Python, a popular language for network automation, to interact with eAPI more robustly. Python's `requests` library simplifies HTTP interactions, and its built-in JSON module handles parsing.
```python
import requests
import json

# Suppress SSL warnings for lab environment (use proper cert validation in production)
requests.packages.urllib3.disable_warnings()

# Arista switch details
ARISTA_IP = "192.168.0.10" # Replace with your switch IP
USERNAME = "admin"
PASSWORD = "password" # Replace with your password

# eAPI endpoint
URL = f"https://{ARISTA_IP}/command-api"

# JSON-RPC payload for 'show version'
payload = {
    "jsonrpc": "2.0",
    "method": "runCmds",
    "params": {
        "format": "json",
        "version": 1,
        "cmds": ["show version"]
    },
    "id": 1
}

headers = {'Content-type': 'application/json'}

try:
    response = requests.post(URL, data=json.dumps(payload), headers=headers, auth=(USERNAME, PASSWORD), verify=False)
    response.raise_for_status() # Raise an exception for HTTP errors (4xx or 5xx)

    data = response.json()
    print(json.dumps(data, indent=4)) # Pretty print the JSON response

except requests.exceptions.RequestException as e:
    print(f"Error connecting to eAPI: {e}")
except json.JSONDecodeError:
    print("Error decoding JSON response.")

```
This Python script connects to the eAPI, sends a `show version` command, and prints the structured JSON output. This example demonstrates how programmatic access to Arista EOS opens up a world of possibilities for custom automation, integration with other systems, and building sophisticated network management applications. Common mistakes include incorrect JSON formatting, wrong URL, invalid credentials, or firewall blocking access to the eAPI port. Always verify connectivity with `curl` first before diving into Python scripting.

#### Key concepts
*   **Arista EOS (Extensible Operating System):** Arista's Linux-based network operating system, known for its programmability and open standards.
*   **eAPI (Extensible API):** Arista's primary API for programmatic interaction with EOS devices, allowing execution of CLI commands and retrieval of structured data.
*   **JSON-RPC (JavaScript Object Notation Remote Procedure Call):** A lightweight remote procedure call protocol that uses JSON as its data format for communication between eAPI client and server.
*   **`curl`:** A command-line tool for making HTTP requests, useful for testing eAPI connectivity.
*   **Python `requests` library:** A popular Python library for making HTTP requests, simplifying interaction with web APIs like eAPI.
*   **JSON (JavaScript Object Notation):** A lightweight data-interchange format, commonly used for sending data between a server and a web application, and by eAPI for structured data.

#### Hands-on activity
**Activity: Interacting with Arista eAPI via `curl` and Python**

**Scenario:** You need to confirm eAPI is working and retrieve the device's hostname programmatically.

**Instructions:**
1.  Access your Arista vEOS switch via CLI and ensure eAPI is enabled. If not, enable it (replace with your actual user/password):
    ```
    configure terminal
    management api http-commands
      no shutdown
      protocol https
      port 443
      authentication local
    end
    ```
    *Note: Ensure you have a local user configured, e.g., `username admin privilege 15 secret arista`*
2.  From your local machine, use `curl` to execute `show hostname` via eAPI. Replace `<switch_ip>`, `<username>`, and `<password>` with your actual values.
    ```bash
    curl -k -u <username>:<password> https://<switch_ip>/command-api -d '{"jsonrpc": "2.0", "method": "runCmds", "params": {"format": "json", "version": 1, "cmds": ["show hostname"]}, "id": 1}'
    ```
3.  Observe the JSON output. Identify the hostname.
4.  Create a Python file named `get_hostname.py` on your local machine with the following content. **Remember to replace `ARISTA_IP`, `USERNAME`, and `PASSWORD` placeholders with your switch's details.**
    ```python
    import requests
    import json

    # Suppress SSL warnings for lab environment (use proper cert validation in production)
    requests.packages.urllib3.disable_warnings()

    # Arista switch details - REPLACE THESE!
    ARISTA_IP = "YOUR_SWITCH_IP"
    USERNAME = "YOUR_USERNAME"
    PASSWORD = "YOUR_PASSWORD"

    # eAPI endpoint
    URL = f"https://{ARISTA_IP}/command-api"

    # JSON-RPC payload for 'show hostname'
    payload = {
        "jsonrpc": "2.0",
        "method": "runCmds",
        "params": {
            "format": "json",
            "version": 1,
            "cmds": ["show hostname"]
        },
        "id": 1
    }

    headers = {'Content-type': 'application/json'}

    try:
        response = requests.post(URL, data=json.dumps(payload), headers=headers, auth=(USERNAME, PASSWORD), verify=False)
        response.raise_for_status() # Raise an exception for HTTP errors (4xx or 5xx)

        data = response.json()
        # Extract and print the hostname
        hostname = data['result'][0]['hostname']
        print(f"Device Hostname: {hostname}")

    except requests.exceptions.RequestException as e:
        print(f"Error connecting to eAPI: {e}")
    except json.JSONDecodeError:
        print("Error decoding JSON response.")
    except KeyError as e:
        print(f"Could not find expected key in JSON response: {e}")

    ```
5.  Run the Python script: `python get_hostname.py`
6.  Compare the output from `curl` and the Python script.

**Expected Output (example, assuming hostname is `vEOS-1`):**
```
# From curl (excerpt):
... "hostname": "vEOS-1" ...

# From Python script:
Device Hostname: vEOS-1
```

#### Assessment idea
1.  **Question:** You are trying to automate a task on an Arista switch using its eAPI, but your Python script is consistently failing with an "SSL certificate verification failed" error. What is the most secure and recommended way to address this in a production environment?
    A) Add `verify=False` to your `requests.post()` call.
    B) Use HTTP instead of HTTPS for eAPI communication.
    C) Install a valid SSL certificate on the Arista switch and ensure your client trusts it.
    D) Disable all SSL warnings in your Python script.

    **Correct Answer:** C) Install a valid SSL certificate on the Arista switch and ensure your client trusts it.
    **Explanation:** While options A and D might bypass the error in a lab, they compromise security by ignoring certificate validation. Option B is less secure as it transmits credentials in plain text. The most secure and recommended approach for production is to install a valid, trusted SSL certificate on the Arista switch and ensure your client (the Python script's environment) is configured to trust that certificate authority.

2.  **Question:** Describe the primary advantage of using JSON-RPC over screen scraping CLI output for network automation with Arista EOS.

    **Correct Answer:** The primary advantage of using JSON-RPC over screen scraping CLI output is that JSON-RPC provides **structured, machine-readable data**, whereas CLI output is typically **unstructured text** designed for human consumption.
    **Explanation:** When you screen scrape CLI output, you're parsing human-readable text, which is fragile and can break if the CLI output format changes even slightly (e.g., an extra space, a new line). JSON-RPC, on the other hand, returns data in a predictable, standardized JSON format that is easy for programs to parse and process reliably, regardless of minor CLI display changes. This makes automation scripts much more robust and maintainable.

#### AI generation note
Create a 15-minute live coding video. Start with a brief explanation of Arista EOS programmability and eAPI. Then, demonstrate enabling eAPI on a vEOS switch via CLI. Transition to a local machine, showing how to use `curl` to send a `show version` command to the eAPI endpoint and parse the JSON response. Next, build a Python script step-by-step, using the `requests` library to achieve the same `show version` output, explaining each line of code. Highlight common errors like authentication failures or incorrect JSON payloads. Use a split-screen view for the Arista CLI, `curl` output, and Python code/output. Include a mini-quiz on the components of a JSON-RPC request.

### Chapter 6.5 — Practical Automation with Arista EOS (Ansible Introduction)

#### Learning objectives
*   Explain why Ansible is a popular choice for network automation.
*   Describe the core components of Ansible: inventory, playbooks, modules, and tasks.
*   Set up a basic Ansible inventory file for Arista EOS devices.
*   Write a simple Ansible playbook to execute `show` commands on an Arista switch.
*   Develop an Ansible playbook to configure a VLAN on an Arista switch using `arista.eos` modules.

#### Detailed lesson content
While Python scripting with eAPI provides granular control, larger-scale automation often benefits from higher-level automation frameworks. **Ansible** is one of the most popular choices for network automation, and for good reason. It's an open-source automation engine that automates provisioning, configuration management, application deployment, orchestration, and many other IT needs. What makes Ansible particularly appealing for networking is its **agentless nature**: it doesn't require any special software or agents to be installed on the managed network devices. Instead, it communicates with devices over standard protocols like SSH (for CLI or eAPI) or HTTPS (for eAPI). This simplifies deployment and reduces the overhead of managing agents on hundreds or thousands of network devices. Ansible's use of simple, human-readable YAML for playbooks also lowers the learning curve, making it accessible to network engineers without extensive programming backgrounds.

Ansible operates on a few core concepts:
1.  **Inventory:** This is a list of managed hosts (your network devices) that Ansible will target. It can be a simple INI-like file or a more structured YAML file, organizing devices into groups.
2.  **Modules:** These are reusable units of code that Ansible executes on managed hosts. Ansible has a vast collection of modules, including specific ones for Arista EOS (e.g., `arista.eos.eos_command`, `arista.eos.eos_config`). Each module performs a specific task, like creating a VLAN, configuring an interface, or running a `show` command.
3.  **Playbooks:** These are YAML files that define a set of tasks to be executed on specified hosts or groups from the inventory. Playbooks are declarative; they describe the desired state of the network.
4.  **Tasks:** Individual actions within a playbook, typically calling an Ansible module with specific parameters.

Let's start by setting up a basic Ansible inventory. This file tells Ansible which devices it can manage. For Arista EOS devices, you'll typically specify the IP address, connection method (eAPI), and credentials.
```ini
# inventory.ini
[arista_switches]
veos-1 ansible_host=192.168.0.10 ansible_user=admin ansible_password=arista ansible_network_os=arista.eos.eos
veos-2 ansible_host=192.168.0.11 ansible_user=admin ansible_password=arista ansible_network_os=arista.eos.eos

[all:vars]
ansible_connection=ansible.netcommon.httpapi
ansible_httpapi_use_ssl=True
ansible_httpapi_validate_certs=False # For lab, use proper certs in prod
ansible_httpapi_port=443
```
In this inventory:
*   `[arista_switches]` defines a group of Arista devices.
*   `veos-1` and `veos-2` are hostnames (arbitrary names Ansible uses) with their respective IP addresses, usernames, and passwords.
*   `ansible_network_os=arista.eos.eos` tells Ansible to use the Arista EOS collection.
*   `[all:vars]` defines global variables for all hosts, specifying the `httpapi` connection plugin (for eAPI), SSL usage, port, and disabling certificate validation (for lab environments only – *never* do this in production without understanding the security implications).

Next, let's create a simple playbook to execute `show version` on our Arista switches.
```yaml
# show_version.yml
---
- name: Get Arista switch version information
  hosts: arista_switches
  gather_facts: false # Not needed for simple command execution
  tasks:
    - name: Run 'show version' command
      arista.eos.eos_command:
        commands:
          - show version
      register: version_output # Store the output in a variable

    - name: Print version output
      debug:
        var: version_output.stdout_lines[0] # Access the first line of the output
```
To run this playbook, you would use the command `ansible-playbook -i inventory.ini show_version.yml`. This playbook targets the `arista_switches` group, uses the `arista.eos.eos_command` module to execute `show version`, and then prints a part of the output using the `debug` module. This demonstrates how to retrieve operational data.

Now, let's create a playbook to configure a VLAN, which is a common automation task. This will use the `arista.eos.eos_config` module, which is designed for configuration changes and is inherently idempotent.
```yaml
# configure_vlan.yml
---
- name: Configure VLAN on Arista switches
  hosts: arista_switches
  gather_facts: false
  tasks:
    - name: Ensure VLAN 10 exists with name "Automated_VLAN"
      arista.eos.eos_config:
        lines:
          - vlan 10
          - name Automated_VLAN
        parents: "vlan 10" # Ensures commands are applied under 'vlan 10' context
        match: exact # Ensures only these lines are present in the vlan 10 config
        # The 'before' and 'after' options can be used for pre/post checks
        # before: "show vlan id 10"
        # after: "show vlan id 10"
      notify: Save Configuration # Trigger handler to save config

  handlers:
    - name: Save Configuration
      arista.eos.eos_command:
        commands:
          - write memory
      listen: "Save Configuration" # Listens for the 'Save Configuration' notification
```
This playbook uses the `eos_config` module to ensure VLAN 10 exists and has the name "Automated_VLAN". The `parents` option ensures the `name` command is applied within the `vlan 10` context. The `match: exact` ensures that only the specified lines are present for VLAN 10, adding or removing lines as needed to match the desired state (this is where idempotency shines). The `notify` and `handlers` sections demonstrate how to trigger a `write memory` command only if changes were actually made, preventing unnecessary writes. Common mistakes in Ansible include YAML syntax errors (indentation is crucial!), incorrect inventory variables, or not understanding module parameters. Always test playbooks in a lab environment first and use `check_mode` (`ansible-playbook --check ...`) to preview changes without applying them.

#### Key concepts
*   **Ansible:** An open-source automation engine for IT orchestration, configuration management, and application deployment, known for its agentless architecture.
*   **Agentless:** A characteristic of Ansible, meaning it does not require any special software or agents to be installed on the managed devices.
*   **Inventory:** A file (INI or YAML) that lists and organizes the managed hosts (network devices) that Ansible will interact with.
*   **Playbook:** A YAML file that defines a set of tasks to be executed on specific hosts or groups, describing the desired state of the network.
*   **Module:** A reusable unit of code in Ansible that performs a specific task on a managed host (e.g., `eos_command`, `eos_config`).
*   **Task:** An individual action within a playbook, typically calling an Ansible module with specific parameters.
*   **`arista.eos` collection:** A collection of Ansible modules specifically designed for managing Arista EOS devices.

#### Hands-on activity
**Activity: Automating VLAN Configuration with Ansible**

**Scenario:** You need to use Ansible to create a new VLAN (VLAN 200) named "Ansible_Test_VLAN" on your Arista vEOS switch.

**Instructions:**
1.  Ensure Ansible is installed on your control machine (e.g., `pip install ansible`).
2.  Create an `inventory.ini` file (if you don't have one from the lesson) with your Arista vEOS switch details. **Replace placeholders with your actual values.**
    ```ini
    # inventory.ini
    [arista_switches]
    veos-1 ansible_host=YOUR_SWITCH_IP ansible_user=YOUR_USERNAME ansible_password=YOUR_PASSWORD ansible_network_os=arista.eos.eos

    [all:vars]
    ansible_connection=ansible.netcommon.httpapi
    ansible_httpapi_use_ssl=True
    ansible_httpapi_validate_certs=False # Only for lab environments!
    ansible_httpapi_port=443
    ```
3.  Create a playbook file named `create_vlan.yml` with the following content:
    ```yaml
    # create_vlan.yml
    ---
    - name: Configure a new VLAN on Arista switch
      hosts: arista_switches
      gather_facts: false
      tasks:
        - name: Ensure VLAN 200 exists with name "Ansible_Test_VLAN"
          arista.eos.eos_config:
            lines:
              - vlan 200
              - name Ansible_Test_VLAN
            parents: "vlan 200"
            match: exact
          notify: Save Configuration

      handlers:
        - name: Save Configuration
          arista.eos.eos_command:
            commands:
              - write memory
          listen: "Save Configuration"
    ```
4.  Run the playbook in `check_mode` first to see what changes it *would* make without actually applying them:
    ```bash
    ansible-playbook -i inventory.ini create_vlan.yml --check
    ```
5.  If the check mode output looks correct, run the playbook to apply the changes:
    ```bash
    ansible-playbook -i inventory.ini create_vlan.yml
    ```
6.  Verify the VLAN configuration on your Arista vEOS switch via CLI:
    ```
    show vlan id 200
    ```
7.  Run the Ansible playbook again. Observe that it reports "changed=0" because the desired state is already met (idempotency).
8.  For cleanup, create a `delete_vlan.yml` playbook:
    ```yaml
    # delete_vlan.yml
    ---
    - name: Remove VLAN from Arista switch
      hosts: arista_switches
      gather_facts: false
      tasks:
        - name: Ensure VLAN 200 is absent
          arista.eos.eos_config:
            lines:
              - no vlan 200
          notify: Save Configuration

      handlers:
        - name: Save Configuration
          arista.eos.eos_command:
            commands:
              - write memory
          listen: "Save Configuration"
    ```
9.  Run the cleanup playbook: `ansible-playbook -i inventory.ini delete_vlan.yml`
10. Verify removal on the switch: `show vlan id 200` (should show no information for VLAN 200).

**Expected Output (example for `show vlan id 200` after creation):**
```
! Output for show vlan id 200
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
200  Ansible_Test_VLAN                active
```

#### Assessment idea
1.  **Question:** You've written an Ansible playbook to configure 10 VLANs on an Arista switch. After the first successful run, you re-run the playbook. If Ansible reports "changed=0" for all tasks related to VLAN configuration, what does this indicate about the playbook's design and the `eos_config` module?
    A) The playbook failed to connect to the switch on the second run.
    B) The `eos_config` module is not working correctly.
    C) The playbook and `eos_config` module are demonstrating idempotency, as the desired state was already achieved.
    D) The switch reverted to its previous configuration between runs.

    **Correct Answer:** C) The playbook and `eos_config` module are demonstrating idempotency, as the desired state was already achieved.
    **Explanation:** "changed=0" indicates that no changes were made because the target configuration already matched the desired state defined in the playbook. This is a core feature of idempotency, ensuring that running a playbook multiple times has the same effect as running it once, without causing unnecessary modifications or errors.

2.  **Question:** You are setting up an Ansible inventory for your Arista switches. You've correctly defined the `ansible_host`, `ansible_user`, and `ansible_password` for each switch. However, Ansible is failing to connect, complaining about the connection plugin. What two critical variables are likely missing or incorrectly configured in your inventory to enable eAPI communication? Provide the correct configuration lines.

    **Correct Answer:** The two critical variables likely missing or incorrectly configured are `ansible_connection` and `ansible_network_os`.
    **Configuration Lines:**
    ```ini
    [all:vars]
    ansible_connection=ansible.netcommon.httpapi
    ansible_network_os=arista.eos.eos
    ```
    **Explanation:** `ansible_connection=ansible.netcommon.httpapi` explicitly tells Ansible to use the HTTP API connection plugin, which is necessary for eAPI communication. `ansible_network_os=arista.eos.eos` specifies that the managed devices are Arista EOS, allowing Ansible to use the appropriate modules from the `arista.eos` collection. Without these, Ansible might default to an SSH connection, which wouldn't work for eAPI.

#### AI generation note
Create a 15-minute live coding video. Start with a brief overview of Ansible's agentless architecture and its core components. Then, guide learners through creating an `inventory.ini` file for Arista switches, explaining each variable. Next, build a simple `show_version.yml` playbook step-by-step, running it and analyzing the output. Finally, develop a `configure_vlan.yml` playbook, demonstrating the `eos_config` module for creating a VLAN, explaining idempotency, and showing the use of `notify` and `handlers`. Use `check_mode` first, then apply changes. Use a split-screen view for the Ansible control machine terminal and the Arista switch CLI for verification. Include a final reflection prompt on the benefits of Ansible over raw Python scripting for common tasks.
---

## Final Capstone Project

Congratulations on reaching the capstone project phase! This is your opportunity to apply the knowledge and skills you've gained throughout the Arista ACE – Associate course to solve realistic networking challenges. These projects are designed to integrate concepts from multiple modules, encouraging you to think critically and build practical solutions. Choose one of the following three projects based on your interests and the areas you'd like to reinforce. Each project includes clear requirements, exciting stretch goals to push your learning further, detailed evaluation criteria, and an estimated time commitment.

### Project Option 1: Basic Campus Network Configuration with Arista EOS

This project challenges you to design and implement a foundational campus network using Arista EOS. You will configure multiple VLANs, assign them to appropriate interfaces, and enable inter-VLAN routing to allow communication between different departments. This scenario simulates a small office environment where different user groups require network segmentation and controlled access. You will gain hands-on experience with core Arista CLI commands and ensure robust connectivity.

**Requirements:**
1.  **Network Topology:** Design a simple network with one Arista switch, two distinct VLANs (e.g., VLAN 10 for "Sales" and VLAN 20 for "Marketing"), and a default gateway for internet access (simulated by a static route).
2.  **VLAN Creation:** Create VLAN 10 and VLAN 20 on the switch.
3.  **Interface Configuration:** Assign at least two access ports to VLAN 10 and two access ports to VLAN 20. Configure one port as a trunk port carrying both VLANs (e.g., to connect to another switch or a router-on-a-stick setup).
4.  **IP Addressing:** Configure IP addresses for the Switch Virtual Interfaces (SVIs) for VLAN 10 and VLAN 20. Ensure they are in different subnets (e.g., 192.168.10.1/24 and 192.168.20.1/24).
5.  **Inter-VLAN Routing:** Enable IP routing on the switch so that devices in VLAN 10 can communicate with devices in VLAN 20.
6.  **Default Route:** Configure a default static route to simulate internet connectivity (e.g., `ip route 0.0.0.0/0 192.168.1.1`).
7.  **Verification:** Use `show` commands to verify VLANs, interface status, IP addresses, and routing table.

**Stretch Goals:**
*   Implement basic port security on one access port to limit the number of MAC addresses.
*   Configure a simple Access Control List (ACL) to prevent devices in VLAN 10 from accessing a specific IP address in VLAN 20.
*   Set up a simple NTP client configuration to synchronize the switch's clock.

**Evaluation Criteria:**
*   Correct creation and assignment of VLANs to interfaces.
*   Proper IP addressing for SVIs and successful inter-VLAN routing.
*   Accurate default route configuration.
*   Effective use of `show` commands for verification.
*   Clarity and correctness of the submitted configuration file.
*   (For stretch goals) Correct implementation of port security, ACL, or NTP.

**Estimated Time:** 4-6 hours

### Project Option 2: Implementing MLAG for High Availability

This project focuses on building a highly available network segment using Arista's Multi-Chassis Link Aggregation Group (MLAG) feature. MLAG is critical for creating resilient network designs, eliminating single points of failure, and providing active-active redundancy. You will configure two Arista switches to form an MLAG pair, allowing a server or downstream switch to connect with a single logical Link Aggregation Group (LAG) across both physical devices.

**Requirements:**
1.  **MLAG Domain:** Configure two Arista switches (Switch A and Switch B) to form an MLAG domain.
2.  **Peer Link:** Establish a dedicated MLAG peer link between Switch A and Switch B using at least two physical interfaces bundled into a Port-Channel.
3.  **Peer IP Address:** Configure the MLAG peer IP addresses and enable keepalives.
4.  **VLAN Configuration:** Create a common VLAN (e.g., VLAN 100) on both switches that will be extended across the MLAG pair.
5.  **MLAG Port-Channel:** Configure an MLAG Port-Channel (e.g., Port-Channel 10) on both switches. This Port-Channel will connect to a simulated server or downstream device.
6.  **Interface Assignment:** Assign at least one physical interface on Switch A and one physical interface on Switch B to the MLAG Port-Channel 10.
7.  **Verification:** Use `show mlag` and `show port-channel` commands to confirm the MLAG status, peer link operational state, and Port-Channel membership.

**Stretch Goals:**
*   Configure an SVI for VLAN 100 on both MLAG peers and assign an IP address.
*   Implement a simple static route on the SVI.
*   Simulate a failure by shutting down one of the peer link interfaces and observe the MLAG status changes.

**Evaluation Criteria:**
*   Successful establishment of the MLAG domain and peer link.
*   Correct configuration of MLAG peer IP addresses and keepalives.
*   Proper creation and assignment of the MLAG Port-Channel.
*   Effective use of `show` commands to verify MLAG operational status.
*   Clarity and correctness of the submitted configuration files for both switches.
*   (For stretch goals) Correct SVI configuration, static route, and observation of failure behavior.

**Estimated Time:** 5-7 hours

### Project Option 3: Basic Network Monitoring and eAPI Scripting

This project combines network monitoring fundamentals with an introduction to Arista's Extensible API (eAPI). You will configure basic monitoring capabilities on an Arista switch and then write a simple Python script to interact with the switch using eAPI to retrieve operational data. This project highlights the power of network programmability and how you can automate data collection from your network devices.

**Requirements:**
1.  **SNMP Configuration:** Configure SNMPv2c or SNMPv3 on an Arista switch, including a community string (for v2c) or user (for v3) and a basic view.
2.  **Syslog Configuration:** Configure the switch to send syslog messages to a remote syslog server (you can simulate this with a dummy IP address or a local log file).
3.  **eAPI Enablement:** Enable eAPI on the switch, ensuring it's accessible via HTTP or HTTPS.
4.  **Python Script:** Write a Python script that uses the `requests` library to connect to the Arista switch via eAPI.
5.  **Data Retrieval:** The Python script must execute at least two `show` commands (e.g., `show version` and `show interfaces status`) and print their JSON output to the console.
6.  **Error Handling:** Include basic error handling in your Python script (e.g., for connection errors or invalid API responses).
7.  **Verification:** Use `show snmp` and `show logging` commands to verify monitoring configurations. Run your Python script and demonstrate its output.

**Example Python Snippet for eAPI (illustrative):**

```python
import requests
import json

# Replace with your switch's IP and credentials
SWITCH_IP = "192.168.1.10"
USERNAME = "admin"
PASSWORD = "password"

url = f"https://{SWITCH_IP}/command-api" # Use http if https is not configured/trusted
headers = {'Content-Type': 'application/json'}

commands = [
    "show version",
    "show interfaces status"
]

payload = {
    "jsonrpc": "2.0",
    "method": "runCmds",
    "params": {
        "format": "json",
        "timestamps": False,
        "cmds": commands,
        "version": 1
    },
    "id": "1"
}

try:
    response = requests.post(url, headers=headers, data=json.dumps(payload), auth=(USERNAME, PASSWORD), verify=False) # verify=False for self-signed certs
    response.raise_for_status() # Raise an exception for HTTP errors
    data = response.json()
    print(json.dumps(data, indent=4))

except requests.exceptions.RequestException as e:
    print(f"Error connecting to switch: {e}")
except json.JSONDecodeError:
    print("Error decoding JSON response.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

**Stretch Goals:**
*   Parse the JSON output from `show interfaces status` to extract and print only the interface name and its operational status for all interfaces.
*   Add a command-line argument to your Python script to allow the user to specify which `show` command to run.
*   Implement a function in your script to check if a specific interface is up or down.

**Evaluation Criteria:**
*   Correct configuration of SNMP and Syslog on the Arista switch.
*   Successful enablement and accessibility of eAPI.
*   Functional Python script that connects to the switch via eAPI.
*   Script successfully executes specified `show` commands and prints JSON output.
*   Basic error handling is present in the Python script.
*   Clarity and correctness of the submitted configuration file and Python script.
*   (For stretch goals) Successful parsing of JSON, command-line argument implementation, or interface status check.

**Estimated Time:** 6-8 hours

## Final Examination

This final examination assesses your comprehensive understanding of the Arista ACE – Associate curriculum. It covers key concepts, CLI commands, basic network design, and an introduction to network programmability. Aim to demonstrate your proficiency across all modules.

---

**Instructions:** Please answer all questions thoroughly. For configuration questions, provide the exact Arista EOS CLI commands. For scripting questions, provide the Python code.

**Total Questions:** 16

### Section 1: Concept Definitions (4 Questions)

**Question 1:** Define Arista EOS and explain what makes it distinct from traditional network operating systems.

**Answer:** Arista EOS (Extensible Operating System) is a state-of-the-art network operating system that runs on all Arista switches. Its key distinction lies in its modular, Linux-based architecture. Unlike monolithic traditional OSes, EOS features a multi-process state-sharing architecture (MPSSA) where individual processes for routing protocols, management, etc., run independently. This design enhances stability, as a failure in one process typically does not crash the entire system. It also offers extensive programmability through standard Linux tools, a rich set of APIs (like eAPI), and native Python scripting, making it highly extensible and automation-friendly.

**Question 2:** Explain the purpose and benefits of MLAG (Multi-Chassis Link Aggregation Group) in a network design.

**Answer:** MLAG (Multi-Chassis Link Aggregation Group) is an Arista-specific technology that allows a single logical Link Aggregation Group (LAG) to span across two separate Arista switches. Its primary purpose is to provide active-active redundancy and increased bandwidth for devices (like servers or downstream switches) connecting to the network. The key benefits include eliminating single points of failure at the access layer, allowing both MLAG peers to forward traffic simultaneously (active-active), simplifying network design by avoiding Spanning Tree Protocol (STP) blocking, and providing seamless upgrades or maintenance on one switch without impacting network connectivity.

**Question 3:** What is Arista eAPI, and how does it facilitate network automation?

**Answer:** Arista eAPI (Extensible API) is a powerful, JSON-RPC based interface that allows external applications and scripts to programmatically interact with Arista EOS switches. It enables network automation by providing a structured, machine-readable way to send configuration commands, retrieve operational data, and manage the device without relying on screen scraping or complex CLI parsing. This facilitates tasks like automated configuration deployment, real-time network monitoring, integration with orchestration tools, and rapid troubleshooting, significantly reducing manual effort and potential human error.

**Question 4:** Describe the difference between an access port and a trunk port in the context of VLANs.

**Answer:** An access port is a switch port configured to carry traffic for only a single VLAN. It is typically used to connect end devices like workstations, servers, or IP phones, which are usually unaware of VLAN tagging. Traffic leaving an access port is untagged and belongs solely to its assigned VLAN. In contrast, a trunk port is configured to carry traffic for multiple VLANs simultaneously. It is primarily used to connect switches to other switches or to routers, allowing VLAN information to be propagated across the network. Traffic on a trunk port is typically tagged with 802.1Q headers to identify which VLAN each frame belongs to, enabling the separation of traffic from different VLANs over a single physical link.

### Section 2: CLI Configuration and Interpretation (5 Questions)

**Question 5:** Write the Arista EOS CLI commands to create VLAN 50 named "HR_Department" and assign interface Ethernet1 to this VLAN as an access port.

**Answer:**
```cli
configure terminal
vlan 50
   name HR_Department
exit
interface Ethernet1
   switchport mode access
   switchport access vlan 50
exit
```

**Question 6:** A network engineer suspects an issue with an interface's speed and duplex settings. Provide the Arista EOS CLI command to display the current operational status of interface Ethernet5, including speed, duplex, and link state.

**Answer:**
```cli
show interfaces Ethernet5 status
```
*Partial Credit Guidance:* `show interfaces Ethernet5` or `show interfaces Ethernet5 detail` would also provide the information, but `status` is the most direct for the requested details.

**Question 7:** You are troubleshooting an MLAG pair. Provide the Arista EOS CLI command to verify the MLAG operational status, including the peer link state and the status of any configured MLAG Port-Channels.

**Answer:**
```cli
show mlag
```
*Partial Credit Guidance:* `show mlag detail` also works, but `show mlag` is the primary command for overall status.

**Question 8:** Given the following `show ip route` output, identify the default gateway and the next-hop IP address for traffic destined to the internet.

```
Codes: C - connected, S - static, R - RIP, M - OSPF inter-area,
       O - OSPF, E1 - OSPF external type 1, E2 - OSPF external type 2,
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2,
       B - BGP, > - selected route, * - FIB route, A - access-internal,
       P - PIM, i - ISIS
       V - VRF, F - FEC

 S   *>    0.0.0.0/0 [1/0] via 192.168.1.1, Ethernet1
 C   *>    10.0.0.0/24 is directly connected, Vlan10
 C   *>    192.168.1.0/24 is directly connected, Ethernet1
```

**Answer:**
The default gateway is identified by the `0.0.0.0/0` route.
The next-hop IP address for traffic destined to the internet (which uses the default route) is `192.168.1.1`.

**Question 9:** Write the Arista EOS CLI commands to configure a static route for the network 172.16.1.0/24, with a next-hop IP address of 192.168.1.254.

**Answer:**
```cli
configure terminal
ip route 172.16.1.0/24 192.168.1.254
exit
```

### Section 3: Network Programmability and Automation (4 Questions)

**Question 10:** You want to use Arista eAPI to retrieve the `show ip interface brief` output from a switch. Construct the JSON payload for this eAPI request. Assume you are using `jsonrpc` version 2.0 and want the output in JSON format.

**Answer:**
```json
{
    "jsonrpc": "2.0",
    "method": "runCmds",
    "params": {
        "format": "json",
        "timestamps": false,
        "cmds": [
            "show ip interface brief"
        ],
        "version": 1
    },
    "id": "1"
}
```

**Question 11:** Write a simple Python script using the `requests` library to send the eAPI request from Question 10 to a switch at `192.168.1.10`, using `admin` for username and `password` for password. Print the JSON response. Assume HTTPS is enabled and you might need `verify=False` for self-signed certificates.

**Answer:**
```python
import requests
import json

SWITCH_IP = "192.168.1.10"
USERNAME = "admin"
PASSWORD = "password"

url = f"https://{SWITCH_IP}/command-api"
headers = {'Content-Type': 'application/json'}

payload = {
    "jsonrpc": "2.0",
    "method": "runCmds",
    "params": {
        "format": "json",
        "timestamps": False,
        "cmds": [
            "show ip interface brief"
        ],
        "version": 1
    },
    "id": "1"
}

try:
    response = requests.post(url, headers=headers, data=json.dumps(payload), auth=(USERNAME, PASSWORD), verify=False)
    response.raise_for_status() # Raise an exception for HTTP errors
    data = response.json()
    print(json.dumps(data, indent=4))

except requests.exceptions.RequestException as e:
    print(f"Error connecting to switch: {e}")
except json.JSONDecodeError:
    print("Error decoding JSON response.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```
*Partial Credit Guidance:* Full credit requires the correct `requests.post` call with URL, headers, data, auth, and `verify=False`. Printing the JSON is also essential. Basic error handling is a bonus but not strictly required for partial credit if the core logic is sound.

**Question 12:** You've configured SNMPv2c on an Arista switch with a community string "public_read". A network management system (NMS) is failing to poll the switch. What are two common configuration mistakes or issues you should check on the switch or NMS?

**Answer:**
1.  **SNMP Agent Not Enabled/Configured Correctly:** Check if SNMP is actually enabled on the switch (`show snmp`) and if the community string (`public_read`) is correctly configured and has the appropriate access permissions (e.g., read-only). Ensure the correct SNMP version (v2c) is being used by both the switch and the NMS.
2.  **Firewall/ACL Blocking:** Verify that no Access Control List (ACL) on the switch or a firewall between the switch and the NMS is blocking UDP port 161 (the standard SNMP port). The NMS might also have a local firewall blocking outbound SNMP traffic.
3.  **Incorrect NMS Configuration:** The NMS itself might be configured with the wrong IP address for the switch, an incorrect community string, or attempting to use an unsupported SNMP version (e.g., trying SNMPv3 when only v2c is configured).

### Section 4: Design and Troubleshooting (3 Questions)

**Question 13:** A server connected to an Arista switch on interface Ethernet10 is unable to obtain an IP address via DHCP. The server is expected to be in VLAN 30. What are three initial troubleshooting steps you would take on the Arista switch?

**Answer:**
1.  **Verify Interface VLAN Assignment:** Check if interface Ethernet10 is correctly assigned to VLAN 30 as an access port using `show interfaces Ethernet10 switchport`. If it's in the wrong VLAN or configured as a trunk, the server won't receive DHCP offers from the correct subnet.
2.  **Check VLAN 30 SVI and IP Address:** Ensure that VLAN 30 exists (`show vlan 30`) and has an active Switch Virtual Interface (SVI) with a correct IP address (`show ip interface brief Vlan30`) that can act as the default gateway for the VLAN. If the SVI is down or misconfigured, DHCP relay might fail or the server won't be able to communicate with the DHCP server.
3.  **Verify DHCP Relay Configuration (if applicable):** If the DHCP server is on a different VLAN/subnet, check if `ip helper-address` is configured on the VLAN 30 SVI, pointing to the DHCP server's IP address. Without this, DHCP broadcast requests won't reach the server. Also, ensure the DHCP server itself is operational and has a scope for VLAN 30.

**Question 14:** You are designing a small data center network segment where two Arista switches will provide redundant connectivity to a critical server. The server has two network cards and needs to operate in an active-active fashion. Which Arista feature would you recommend to achieve this, and why?

**Answer:**
I would recommend implementing **MLAG (Multi-Chassis Link Aggregation Group)**. This feature allows the two Arista switches to appear as a single logical switch to the server. The server can then configure a standard Link Aggregation Group (LAG) with its two network cards, connecting one card to each Arista switch. This achieves active-active redundancy because both links in the LAG are forwarding traffic simultaneously, providing both increased bandwidth and high availability. If one Arista switch or one link fails, the server's LAG remains operational via the other link and switch, ensuring continuous connectivity without relying on slower failover mechanisms like Spanning Tree Protocol.

**Question 15:** A new network administrator accidentally configured a static IP address on a switch interface that conflicts with an existing device on the network. What are the immediate symptoms you might observe, and what is the first command you would use to identify the issue on the Arista switch?

**Answer:**
**Immediate Symptoms:**
*   **Packet Loss/Connectivity Issues:** Both the switch interface and the existing device will experience intermittent or complete loss of connectivity, as they both try to claim the same IP address.
*   **ARP Cache Instability:** Devices trying to communicate with the conflicting IP address will see unstable or flapping ARP entries.
*   **Log Messages:** The Arista switch might log duplicate IP address detection messages.

**First Command to Identify the Issue:**
The first command I would use is `show ip interface brief`. This command provides a quick overview of all configured IP addresses on the switch's interfaces. By reviewing this output, I can quickly spot if an interface has been assigned an IP address that is known to be in use elsewhere or if there are any unexpected IP configurations. If the issue isn't immediately obvious from the brief output, I would then proceed to check the logs for duplicate IP messages or use `show ip arp` to look for flapping entries.

**Question 16:** You've configured a new VLAN (VLAN 40) on an Arista switch, but devices connected to ports assigned to this VLAN cannot communicate with devices in other VLANs, even though inter-VLAN routing is enabled for all other VLANs. What is a likely cause and how would you verify it?

**Answer:**
A likely cause is that the **Switch Virtual Interface (SVI) for VLAN 40 has not been created or is not in an "up/up" state**, or it lacks an IP address. For inter-VLAN routing to function, each VLAN that needs to route traffic must have an associated SVI with a unique IP address configured on the routing device (in this case, the Arista switch itself). If the SVI for VLAN 40 is missing, administratively down, or lacks an IP address, the switch cannot route traffic into or out of that VLAN.

**How to Verify:**
I would use the command `show ip interface brief Vlan40`.
*   If the output shows "Vlan40" is not listed, it means the SVI has not been created.
*   If it's listed but the "Status" is "down" or "administratively down", the SVI is not active.
*   If it's listed but the "IP Address" field is empty, it means no IP address has been assigned, preventing routing.
*   I would also check `show vlan 40` to ensure the VLAN itself exists and that interfaces are correctly assigned to it.

## Course Conclusion

Congratulations on completing the Arista ACE – Associate course! You have embarked on a significant journey into the world of modern networking, equipping yourself with foundational skills that are highly sought after in today's technology landscape. You are no longer just a passive observer of network operations; you are now capable of actively configuring, managing, and troubleshooting Arista EOS devices.

Throughout this course, you've mastered the Arista EOS CLI, learned to configure essential network services like VLANs, IP routing, and high-availability features such as MLAG. Beyond traditional networking, you've also taken your first steps into the exciting realm of network programmability, understanding how to leverage Arista's eAPI with Python to automate tasks and gather operational data. These skills empower you to build resilient, scalable, and efficient networks, preparing you for more advanced roles and certifications.

### Where to Go Next: Continued Learning and Resources

Your journey into networking is just beginning! To solidify your knowledge and continue your growth, consider these next steps:

1.  **Practice, Practice, Practice:** The best way to retain and deepen your understanding is through hands-on practice. Continue experimenting with Arista EOS in a lab environment (virtual or physical). Try to recreate scenarios, break configurations, and then fix them.
2.  **Arista ACE Professional Certification:** The natural progression from the Associate level is the Arista ACE Professional certification. This next level dives deeper into advanced routing protocols (OSPF, BGP), multicast, advanced MLAG configurations, and more complex automation scenarios.
3.  **Network Automation Deep Dive:** Explore more advanced network automation topics. This could involve learning configuration management tools like Ansible, delving further into Python scripting for network tasks, or exploring other network APIs and data models (e.g., NETCONF, YANG). Look for courses specifically on "Network Automation with Python" or "Ansible for Network Engineers."
4.  **Community Engagement:** Join networking communities on platforms like Reddit (r/networking, r/Arista), participate in forums, and follow industry experts on social media. Engaging with peers and experts is an invaluable way to learn, share knowledge, and stay updated on the latest trends.
5.  **Arista Documentation and Resources:** The official Arista documentation portal is an incredibly rich resource. Familiarize yourself with how to navigate it to find configuration guides, command references, and best practice documents. Arista's YouTube channel also offers many helpful tutorials and demonstrations.

Remember, the field of networking is constantly evolving. Embrace continuous learning, challenge yourself with new projects, and never stop exploring. The skills you've acquired here are a fantastic foundation for a rewarding career in network engineering and automation. We at Cohortia are incredibly proud of your accomplishments and look forward to seeing the amazing things you'll achieve!

---


> End of Syllabus: Arista ACE – Associate
> Course ID: arista-ace-associate
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Computer Networks
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
