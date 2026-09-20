---
course_title: Prometheus + Grafana
course_id: prometheus-grafana
provider: Cohortia
original_reference: Udemy / Online
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Cloud Computing & DevOps
skills: Monitoring, Alerting, Observability, Time-Series Databases, Data Visualization, Infrastructure Monitoring, Application Performance Monitoring (APM), Cloud Monitoring, Prometheus, Grafana, Alertmanager, Exporters, PromQL, Dashboards, Panels, Data Sources
ownership_note: Cohortia curates and rebuilds content for enhanced learning experiences and does not claim sole ownership of third-party source material.
---

## Course Overview

In today's complex, distributed systems, understanding the health and performance of your applications and infrastructure is paramount. This course, "Prometheus + Grafana," provides a comprehensive introduction to two of the most powerful and widely adopted open-source tools for monitoring and observability. We will embark on a journey from the foundational principles of why monitoring matters to hands-on implementation, allowing you to build robust, insightful monitoring solutions. You'll learn how to collect, store, query, and visualize time-series data, enabling proactive identification of issues, optimization of resource utilization, and maintaining the reliability of your systems.

The course begins by establishing a strong conceptual understanding of observability, metrics, and the monitoring landscape. We then dive deep into Prometheus, a powerful open-source monitoring system that collects and stores its metrics as time-series data. You will learn how to install Prometheus, configure it to scrape metrics from various targets, understand different metric types, and master PromQL, its flexible query language. This foundational knowledge will empower you to extract meaningful insights from your infrastructure and application data, identifying trends and potential bottlenecks before they impact users.

Building on your Prometheus expertise, we will then introduce Grafana, the leading open-source platform for data visualization and analytics. You'll discover how to connect Grafana to Prometheus as a data source and transform raw metrics into compelling, interactive dashboards. The course will cover everything from creating basic panels to leveraging advanced features like variables, templating, and complex visualizations to build dynamic and highly customizable dashboards. We'll also explore how to set up sophisticated alerting mechanisms using both Prometheus Alertmanager and Grafana's built-in alerting capabilities, ensuring you're notified promptly when critical thresholds are breached.

By the end of this course, you will not only be proficient in deploying and managing Prometheus and Grafana but also possess a deep understanding of how to design and implement effective monitoring strategies. This skillset is invaluable for anyone involved in DevOps, site reliability engineering (SRE), cloud operations, or software development, providing the tools to ensure your systems are performant, reliable, and observable. Prepare to transform raw data into actionable intelligence and become a master of modern monitoring.

Upon successful completion of this course, you will be able to:
*   Explain the core concepts of observability, monitoring, and their importance in modern IT environments.
*   Install, configure, and manage a Prometheus server to scrape metrics from various targets.
*   Understand and differentiate between various Prometheus metric types (Counter, Gauge, Histogram, Summary).
*   Master PromQL (Prometheus Query Language) to effectively query, filter, and aggregate time-series data.
*   Implement Prometheus exporters and instrument applications to expose custom metrics.
*   Configure and utilize Alertmanager to define and route alerts based on Prometheus metrics.
*   Install Grafana and connect it to Prometheus as a data source.
*   Design and build informative, interactive Grafana dashboards using various panel types and visualization options.
*   Leverage advanced Grafana features like variables, templating, and annotations for dynamic dashboards.
*   Set up and manage alerting within Grafana to receive notifications on critical system events.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Introduction to Observability & Monitoring Foundations | 3 |
| 2 | Getting Started with Prometheus Core | 3 |
| 3 | Mastering PromQL: Querying Your Metrics | 4 |
| 4 | Advanced Prometheus: Exporters & Alerting | 4 |
| 5 | Introduction to Grafana: Visualization Basics | 5 |
| 6 | Advanced Grafana: Dashboards, Templating & Alerts | 5 |

Total chapters: 24
---

## Module 1: Introduction to Observability & Monitoring Foundations

This module introduces the fundamental concepts of observability and monitoring, laying the groundwork for understanding why tools like Prometheus and Grafana are essential in modern cloud-native environments. You will explore the three pillars of observability—logs, metrics, and traces—and learn about common monitoring architectures, setting the stage for deep dives into specific tools.

---

### Chapter 1.1 — The Pillars of Observability: Logs, Metrics, and Traces

#### Learning objectives
*   Distinguish between traditional monitoring and modern observability practices.
*   Explain the purpose and characteristics of logs as an observability pillar.
*   Describe how metrics provide numerical insights into system behavior over time.
*   Understand the role of traces in visualizing end-to-end request flows across distributed systems.
*   Identify the synergistic relationship between logs, metrics, and traces for comprehensive system understanding.

#### Detailed lesson content
In today's complex, distributed systems—from microservices architectures to serverless functions—understanding what's happening inside your applications and infrastructure is no longer a luxury, but a necessity. Traditional monitoring, which often focuses on predefined dashboards and alerts for known failure states, struggles to keep pace with the dynamic nature and inherent unpredictability of these environments. This is where *observability* comes into play. Observability is the ability to infer the internal states of a system by examining its external outputs. While monitoring tells you *if* something is wrong, observability helps you understand *why* it's wrong, even for problems you haven't anticipated. It empowers engineers to ask arbitrary questions about their systems without needing to deploy new code.

The foundation of modern observability rests on three core pillars: logs, metrics, and traces. Each pillar provides a unique lens through which to view your system's behavior, and when combined, they offer a complete, holistic picture.

Let's start with **Logs**. Logs are timestamped records of discrete events that occur within an application or system. Think of them as the narrative of your system's activity. Every time a user logs in, a database query runs, an error occurs, or a service starts, a log entry can be generated. These entries typically contain a timestamp, a severity level (e.g., INFO, WARN, ERROR), a message describing the event, and often contextual information like the user ID, request ID, or component name. For example, a web server might log an entry for every incoming HTTP request, including the URL, status code, and response time. While incredibly detailed, logs can be voluminous, making them challenging to store, search, and analyze efficiently, especially in high-traffic systems. Tools like Elasticsearch, Splunk, or Loki are often used for log aggregation and analysis to make sense of this data. A common mistake beginners make is logging too much or too little; too much can overwhelm storage and analysis tools, while too little leaves critical blind spots. It's crucial to standardize log formats (e.g., JSON) to facilitate parsing and querying.

Next, we have **Metrics**. Metrics are numerical measurements of data collected over time. Unlike logs, which are discrete events, metrics are aggregated, quantifiable values that represent the health or performance of a system. Examples include CPU utilization, memory consumption, request rates, error counts, and latency percentiles. Metrics are highly efficient for storage and querying because they are just numbers associated with a timestamp and a set of labels (key-value pairs that provide context, like `instance="web-server-01"` or `endpoint="/api/v1/users"`). This structure makes them ideal for trending, alerting, and dashboarding, allowing you to quickly spot anomalies or degradation in performance. For instance, if your `http_requests_total` metric suddenly drops to zero, it's a clear indicator that your service might be down. Prometheus, the focus of this course, is a prime example of a system built around collecting, storing, and querying time-series metrics. While metrics are excellent for identifying *what* is happening and *when*, they often lack the granular detail to explain *why* a particular value is high or low, which is where logs and traces become invaluable.

Finally, we delve into **Traces**. Traces provide an end-to-end view of a single request or transaction as it propagates through multiple services in a distributed system. Imagine a user request that hits a load balancer, then a frontend service, which calls an authentication service, a user profile service, and finally a database. A trace captures the entire journey of this request, breaking it down into individual operations called *spans*. Each span represents a unit of work (e.g., an RPC call, a database query, a function execution) and includes information like its name, start time, duration, and associated metadata. By linking these spans together using correlation IDs, a trace visualizes the causal relationships and timing of operations across different services. This is incredibly powerful for debugging latency issues, identifying bottlenecks in microservices architectures, and understanding the flow of business transactions. Tools like Jaeger, Zipkin, or OpenTelemetry are used to instrument applications for distributed tracing. A common safety note here is to ensure sensitive data is not inadvertently captured within trace spans, as they can reveal detailed operational paths.

The true power of observability emerges when you combine these three pillars. Metrics can tell you that the `checkout` service's error rate has spiked. Logs can then provide the specific error messages and stack traces from that service, indicating a database connection issue. Finally, traces can show you which upstream services are calling the `checkout` service, how long those calls are taking, and if the database call itself is the bottleneck, allowing you to pinpoint the exact failing component and its impact on the user experience. By leveraging all three, you move beyond merely reacting to known problems and gain the ability to proactively understand and debug the unknown complexities of your modern systems.

#### Key concepts
*   **Observability:** The ability to infer the internal state of a system by examining its external outputs. It helps understand *why* something is happening.
*   **Monitoring:** The act of observing and checking the status of a system, often focused on known failure modes and predefined metrics. It tells you *if* something is happening.
*   **Logs:** Timestamped, immutable records of discrete events that occur within an application or system, providing a narrative of activity.
*   **Metrics:** Numerical measurements collected over time, representing aggregated system health or performance (e.g., CPU usage, request rate). They are efficient for trending and alerting.
*   **Traces:** End-to-end visualizations of a single request's journey across multiple services in a distributed system, broken down into spans.
*   **Span:** A single operation within a trace, representing a unit of work with a name, start time, duration, and metadata.
*   **Correlation ID:** A unique identifier passed along with a request as it moves through different services, used to link all related log entries and spans into a single trace.

#### Hands-on activity
**Activity: Deconstructing a System Event**

Imagine you are running a simple web service that processes user requests. Below are three hypothetical pieces of data related to a single user request. Your task is to identify which pillar of observability each piece of data represents and explain why.

**Scenario:** A user attempts to update their profile, but the operation fails.

**Data Snippet 1 (from `service.log`):**
```
2023-10-27T10:30:05.123Z ERROR [profile-service] [request-id: abc-123] Failed to update user profile for user_id: 456. Error: Database connection timeout.
```

**Data Snippet 2 (from a monitoring dashboard):**
```
Metric: profile_service_http_requests_total{method="PUT", status="500"}
Value: 1 (at 2023-10-27T10:30:05Z)

Metric: profile_service_database_connection_errors_total
Value: 1 (at 2023-10-27T10:30:05Z)
```

**Data Snippet 3 (from a distributed tracing tool):**
```
Trace ID: abc-123
  Span 1: WebApp -> ProfileService (duration: 500ms)
    Span 2: ProfileService -> Database (duration: 450ms, error: true)
```

**Instructions:**
1.  For each data snippet, identify if it represents a Log, a Metric, or a Trace.
2.  Explain *why* you categorized it that way, referencing the characteristics of each pillar discussed in the lesson.
3.  Describe how these three snippets, when combined, provide a more complete understanding of the user's failed profile update.

#### Assessment idea
1.  **Question:** A developer notices that their application's CPU utilization is consistently at 90%, but they don't know which specific function or user interaction is causing the high load. Which observability pillar would be most effective for investigating the *root cause* of this high CPU usage, and why?
    *   **Correct Answer:** Traces would be most effective. While metrics (like CPU utilization) tell you *what* is happening (high CPU), they don't provide the granular, request-level detail to pinpoint *why*. Logs might show individual errors, but correlating them to a specific high-CPU operation across services is difficult. Traces, by showing the execution path and duration of individual requests across different services and functions, can reveal which specific operations are consuming the most CPU time or are taking unusually long, thus pointing to the root cause.
2.  **Question:** Your team is designing a new microservice. They are debating whether to prioritize detailed, structured logging or a comprehensive set of business-level metrics. Which approach would you recommend for initial deployment, and why, considering both immediate operational visibility and future debugging needs?
    *   **Correct Answer:** For initial deployment, a comprehensive set of business-level metrics should be prioritized alongside essential error logs. Metrics provide immediate, high-level operational visibility into the service's health and performance (e.g., request rates, error rates, latency) which are crucial for alerting and dashboarding. These are often easier to set up and provide a quick overview. While detailed structured logging is invaluable for deep debugging, it can be overwhelming if not managed properly and might not be the first thing you look at when an alert fires. Ideally, both are implemented, but metrics offer a critical first line of defense and quick health checks, complemented by logs for granular troubleshooting.

#### AI generation note
Create a 12-minute animated explainer video. Begin with a visual analogy of a complex machine (e.g., a car engine) to explain the difference between monitoring (dashboard lights) and observability (a mechanic using diagnostic tools). Then, dedicate 3 minutes to logs, showing a scrolling terminal with structured JSON logs and highlighting key fields. Follow with 3 minutes on metrics, using animated graphs showing CPU usage and request counts, emphasizing aggregation and labels. Conclude with 4 minutes on traces, illustrating a distributed request flow across multiple service boxes with animated arrows and expanding spans, highlighting `Trace ID` and `Span ID` propagation. Include a final segment showing how combining all three helps diagnose a problem. The tone should be beginner-friendly and visually engaging. End with a reflection prompt: "Think about an application you use daily. What kind of logs, metrics, or traces might it be generating?"

---

### Chapter 1.2 — Understanding Modern Monitoring Architectures

#### Learning objectives
*   Describe the typical components of a modern monitoring system in a distributed environment.
*   Differentiate between push-based and pull-based data collection models, including their advantages and disadvantages.
*   Explain the role of a Time-Series Database (TSDB) in a monitoring architecture.
*   Identify the functions of data visualization and alerting components within a monitoring stack.
*   Recognize common pitfalls in designing and implementing monitoring architectures.

#### Detailed lesson content
Building an effective monitoring system for today's dynamic, cloud-native applications requires more than just a few scripts. Modern monitoring architectures are sophisticated, distributed systems themselves, designed to collect, store, process, and present vast amounts of data from diverse sources. Understanding these architectures is crucial before diving into specific tools like Prometheus and Grafana, as it provides the context for *why* these tools are designed the way they are.

At a high level, a typical monitoring architecture comprises several key components working in concert. The first and most fundamental is **Data Collection**. This involves gathering raw data from your applications and infrastructure. This can be done through various mechanisms:
*   **Agents/Exporters:** Lightweight processes or applications that run on target hosts (e.g., servers, containers) and expose metrics or logs. Examples include `node_exporter` for host-level metrics or custom application-specific exporters.
*   **SDKs/Libraries:** Code integrated directly into your application that sends metrics, logs, or trace spans to a collector.
*   **Sidecars:** In containerized environments, a separate container deployed alongside your application container specifically for data collection (e.g., an OpenTelemetry collector sidecar).

Once collected, this data needs to be stored. For metrics, the preferred solution is a **Time-Series Database (TSDB)**. Unlike traditional relational databases, TSDBs are optimized for storing and querying data points that are indexed by time. They excel at high-volume writes, efficient compression of time-series data, and rapid range queries (e.g., "show me CPU usage for the last hour"). Prometheus itself includes a powerful embedded TSDB, but other options like InfluxDB or M3DB also exist. The choice of TSDB significantly impacts the scalability, retention, and query performance of your monitoring system.

After storage, **Data Processing and Aggregation** often occurs. This might involve applying recording rules to pre-aggregate frequently queried metrics, or using stream processing to enrich log data. For alerting, an **Alerting Engine** continuously evaluates predefined rules against the collected data. When a condition is met (e.g., "CPU usage > 90% for 5 minutes"), it triggers an alert. This engine then interfaces with a **Notification System** (like PagerDuty, Slack, email, or a custom webhook) to inform the relevant teams.

Finally, **Data Visualization and Dashboarding** components are essential for human-readable insights. Tools like Grafana allow you to create interactive dashboards that display metrics, logs, and even traces in various graphical formats, enabling quick identification of trends, anomalies, and system health. These dashboards are the primary interface for engineers to observe and understand their systems.

A critical design choice in data collection is between **push-based** and **pull-based** models.
*   In a **pull model** (which Prometheus primarily uses), the monitoring server actively scrapes metrics endpoints from the targets it wants to monitor. The targets simply expose their metrics over HTTP, and the Prometheus server periodically pulls them.
    *   **Advantages:** Simpler target discovery (especially with service discovery mechanisms), less overhead on the monitored targets (they don't need to know where to send data), easier to manage firewall rules (only the monitoring server needs outbound access).
    *   **Disadvantages:** Can struggle with ephemeral jobs that might disappear before being scraped, requires targets to be reachable by the monitoring server.
*   In a **push model**, the monitored targets actively send their metrics or logs to the monitoring server or a dedicated gateway.
    *   **Advantages:** Ideal for ephemeral jobs (they can push their metrics before shutting down), useful in environments with restrictive firewalls where outbound connections are easier to establish, allows for disconnected operations where targets might not always be reachable.
    *   **Disadvantages:** Requires targets to know the address of the monitoring server, can lead to more complex configuration and potential for data loss if the push target is unavailable. Prometheus offers a `Pushgateway` for specific push-based scenarios, but its core mechanism remains pull-based.

When designing your architecture, consider **scalability and high availability**. A single monitoring server can become a bottleneck or a single point of failure. Solutions include sharding your TSDB, running multiple instances of your monitoring components, and using replication. It's also a common mistake to *not* monitor your monitoring system itself. If your monitoring stack goes down, you're flying blind. Ensure your monitoring tools are robust and have their own monitoring in place. Another pitfall is **alert fatigue**, where too many non-actionable alerts desensitize engineers. Design your alerting strategy carefully, focusing on actionable signals.

#### Key concepts
*   **Monitoring Architecture:** The overall design and components of a system used to collect, store, process, and visualize operational data.
*   **Data Collection:** The process of gathering raw data (metrics, logs, traces) from applications and infrastructure.
*   **Agent/Exporter:** A program running on a target system that collects data and exposes it for monitoring.
*   **Time-Series Database (TSDB):** A database optimized for storing and querying data points indexed by time, crucial for metrics storage.
*   **Alerting Engine:** A component that continuously evaluates rules against collected data and triggers alerts when conditions are met.
*   **Notification System:** Services or integrations (e.g., Slack, PagerDuty) that receive alerts from the alerting engine and notify personnel.
*   **Data Visualization/Dashboarding:** Tools (like Grafana) used to create graphical representations of data for human interpretation and analysis.
*   **Pull Model:** A data collection strategy where the monitoring server actively requests data from monitored targets.
*   **Push Model:** A data collection strategy where monitored targets actively send data to the monitoring server or gateway.

#### Hands-on activity
**Activity: Diagramming a Simple Monitoring Architecture**

Imagine you are tasked with setting up a monitoring system for a small web application that consists of:
*   A single web server (running Nginx and a Python Flask app).
*   A PostgreSQL database server.
*   You want to monitor CPU, memory, disk usage, network I/O for both servers, HTTP request rates/errors for Nginx/Flask, and database query performance.
*   You need a way to store this data, visualize it, and get notified if something goes wrong.

**Instructions:**
1.  Draw a simple diagram (you can use text descriptions for boxes and arrows if actual drawing tools aren't available).
2.  Identify and label the key components you would include in your monitoring architecture based on the concepts discussed (e.g., Data Collector, TSDB, Visualization, Alerting).
3.  For each component, briefly explain its role in this specific scenario.
4.  Specify whether you would primarily use a push or pull model for data collection in this setup and justify your choice.

**Example Structure (use this as a guide for your text-based diagram):**

```
[Web Server (Nginx/Flask)] <--- Data Collection (e.g., Agent/Exporter) ---> [TSDB]
       ^                                                                       |
       |                                                                       v
[PostgreSQL Database] <--- Data Collection (e.g., Agent/Exporter) ---> [Alerting Engine]
                                                                               |
                                                                               v
                                                                        [Notification System]
                                                                               ^
                                                                               |
                                                                        [Visualization Tool]
```

#### Assessment idea
1.  **Question:** A company is deploying a new serverless application where functions run for very short durations (milliseconds to seconds) and are highly ephemeral. They need to collect performance metrics from these functions. Would a pull-based or push-based monitoring data collection model be more suitable for this scenario, and why?
    *   **Correct Answer:** A push-based model would be more suitable. In a pull-based model, the monitoring server periodically scrapes targets. For ephemeral serverless functions that might start and finish before the next scrape interval, a pull model would likely miss crucial metrics. A push-based model allows the function to immediately push its metrics to a gateway or collector before it terminates, ensuring data is captured.
2.  **Question:** Describe the primary function of a Time-Series Database (TSDB) within a modern monitoring architecture. How does it differ from a traditional relational database in this context, and why is that difference important?
    *   **Correct Answer:** The primary function of a Time-Series Database (TSDB) is to efficiently store and query data points that are indexed by time. It is optimized for high-volume writes of time-stamped data and rapid retrieval of data ranges over specific time periods. This differs from a traditional relational database, which is designed for structured data with complex relationships, strong consistency, and transactional integrity. For monitoring, the key differences are critical: TSDBs prioritize write throughput and storage efficiency for continuous streams of numerical data, often using specialized compression techniques. Relational databases would struggle with the sheer volume and temporal nature of metrics data, leading to performance bottlenecks and high storage costs for monitoring use cases.

#### AI generation note
Create a 15-minute interactive slide deck. Start with a conceptual diagram of a full monitoring stack, gradually revealing components like Data Collectors, TSDB, Alerting, and Visualization. Dedicate 5 minutes to visually explaining the push vs. pull models with animated arrows showing data flow from targets to the monitoring server, highlighting their pros and cons. Include practical examples of `node_exporter` for pull and `Pushgateway` for push. Use architecture diagrams with clear labels and icons. Incorporate a mini-quiz question after the push/pull explanation to test understanding. The tone should be professional and informative, with a focus on clear visual explanations. Include accessibility features like alt text for all diagrams and clear, concise text on slides.

---

### Chapter 1.3 — Why Prometheus and Grafana? An Introduction

#### Learning objectives
*   Explain the core purpose and design philosophy of Prometheus as a monitoring system.
*   Describe Grafana's primary role as a data visualization and dashboarding platform.
*   Identify the key components of the Prometheus ecosystem.
*   Understand why Prometheus and Grafana are commonly used together to form a powerful monitoring stack.
*   Recognize the strengths and typical use cases for the combined Prometheus + Grafana solution.

#### Detailed lesson content
Having explored the fundamental concepts of observability and the architectural patterns of modern monitoring, it's time to introduce the stars of our course: Prometheus and Grafana. These two open-source projects have become a de facto standard for monitoring cloud-native applications, especially within Kubernetes environments, due to their power, flexibility, and vibrant communities. They are not just tools; they represent a philosophy of how to approach operational visibility.

Let's begin with **Prometheus**. At its heart, Prometheus is an open-source monitoring system and time-series database. It was originally developed at SoundCloud in 2012 and later became the second hosted project in the Cloud Native Computing Foundation (CNCF), after Kubernetes. Its design philosophy is centered around a multi-dimensional data model, where every metric is identified by a metric name and a set of key-value pairs called labels. For example, `http_requests_total{method="POST", path="/api/users", status="200"}` uniquely identifies a specific type of HTTP request. This label-based system allows for incredibly flexible and powerful querying.

Prometheus primarily uses a **pull model** for data collection. It discovers targets (e.g., application instances, servers) and then periodically scrapes metrics from HTTP endpoints exposed by these targets. This pull model simplifies target discovery, especially in dynamic environments where services come and go, as Prometheus can integrate with service discovery mechanisms like Kubernetes APIs or DNS. The core Prometheus server includes a scraper, a time-series database (TSDB) for local storage, and an HTTP API for querying. Beyond the server, the Prometheus ecosystem includes:
*   **Exporters:** Purpose-built agents that expose metrics from third-party systems or applications in a Prometheus-compatible format (e.g., `node_exporter` for host metrics, `kube-state-metrics` for Kubernetes object health).
*   **Pushgateway:** A component that allows ephemeral or batch jobs to push their metrics to Prometheus, bridging the gap for scenarios where the pull model isn't suitable.
*   **Alertmanager:** A separate component that handles alerts sent by the Prometheus server. It deduplicates, groups, and routes alerts to appropriate notification receivers (e.g., email, Slack, PagerDuty), and can also silence alerts.

Prometheus's strength lies in its powerful query language, **PromQL**. PromQL allows users to select and aggregate time-series data in real-time, perform complex calculations, and generate ad-hoc queries to explore system behavior. This makes it incredibly effective for identifying trends, troubleshooting issues, and defining sophisticated alerting rules. A common mistake is trying to use Prometheus for long-term log storage; it's optimized for metrics, not high-cardinality event data.

Now, let's turn our attention to **Grafana**. While Prometheus excels at collecting, storing, and querying metrics, it provides only basic built-in visualization. This is where Grafana steps in. Grafana is an open-source platform for monitoring and observability that allows you to query, visualize, alert on, and explore your metrics, logs, and traces, no matter where they are stored. Crucially, Grafana is *not* a data store itself; it acts as a universal visualization layer that connects to various data sources.

Grafana's key features include:
*   **Rich Dashboarding:** Create highly customizable and interactive dashboards using a wide variety of visualization panels (graphs, gauges, heatmaps, tables, etc.).
*   **Data Source Agnostic:** It can connect to a vast array of data sources, including Prometheus, InfluxDB, Elasticsearch, Loki, MySQL, PostgreSQL, and many more. This flexibility allows you to consolidate data from different systems into unified dashboards.
*   **Templating:** Use variables in dashboards to create dynamic, reusable dashboards that can adapt to different services, environments, or instances.
*   **Alerting:** While Prometheus's Alertmanager handles complex alert routing, Grafana also has its own alerting capabilities, allowing you to define thresholds directly on dashboard panels and send notifications.

The synergy between Prometheus and Grafana is what makes them such a powerful combination. Prometheus provides the robust, flexible, and scalable backend for collecting and storing time-series metrics, along with the sophisticated PromQL for querying. Grafana then takes this raw data and transforms it into beautiful, intuitive, and actionable dashboards. When an alert fires from Prometheus's Alertmanager, engineers can immediately jump to a Grafana dashboard to visualize the problematic metrics, correlate them with other system data, and begin their investigation. This combination is particularly potent in cloud-native environments because Prometheus's pull model and service discovery mechanisms integrate seamlessly with dynamic infrastructures like Kubernetes, while Grafana provides the unified visualization layer across all your observability signals.

A real-world scenario might involve monitoring a Kubernetes cluster. Prometheus would be deployed to scrape metrics from Kubernetes components (kube-state-metrics), nodes (node_exporter), and application pods (custom exporters). Grafana would then connect to this Prometheus instance as a data source, allowing you to build dashboards displaying cluster health, pod resource usage, application request rates, and error logs, providing a comprehensive operational view. Common pitfalls include not configuring Alertmanager properly, leading to alert storms, or trying to use Grafana's built-in alerting for complex Prometheus-specific scenarios when Alertmanager is better suited.

#### Key concepts
*   **Prometheus:** An open-source monitoring system and time-series database known for its multi-dimensional data model and powerful query language.
*   **Grafana:** An open-source platform for data visualization, dashboarding, and alerting, capable of connecting to various data sources including Prometheus.
*   **PromQL:** Prometheus Query Language, a powerful functional query language used to select and aggregate time-series data.
*   **Multi-dimensional Data Model:** Prometheus's approach to metrics, where each metric is identified by a name and a set of key-value labels, enabling flexible querying.
*   **Exporters:** Programs that expose metrics from existing systems (e.g., databases, web servers) in a format that Prometheus can scrape.
*   **Alertmanager:** A component of the Prometheus ecosystem that handles alerts sent by Prometheus, responsible for deduplicating, grouping, and routing them.
*   **Service Discovery:** The process by which Prometheus automatically finds and monitors new targets in dynamic environments (e.g., Kubernetes).
*   **Dashboard:** A visual interface in Grafana that displays various metrics, logs, or traces in graphs, tables, and other panels.
*   **Data Source:** A connection in Grafana to a backend system (like Prometheus) from which it fetches data for visualization.

#### Hands-on activity
**Activity: Exploring a Public Prometheus & Grafana Demo**

While we haven't installed Prometheus or Grafana yet, you can get a feel for their combined power by exploring a public demo instance.

1.  **Visit the Grafana Play site:** Open your web browser and navigate to `https://play.grafana.org/`.
2.  **Explore Dashboards:** On the Grafana Play site, you'll see many example dashboards. Look for dashboards that mention "Prometheus" or "Kubernetes" in their titles. For example, search for "Kubernetes / Compute Resources / Cluster" or "Prometheus Demo".
3.  **Interact with a Dashboard:**
    *   Click on a dashboard to open it.
    *   Change the time range (e.g., from "Last 6 hours" to "Last 30 minutes") using the time selector in the top right corner.
    *   Hover over graphs to see data points.
    *   If available, use dashboard variables (drop-down menus at the top) to filter by specific instances, namespaces, or services.
4.  **Inspect a Panel (Optional but Recommended):**
    *   For any graph panel, click on its title and select "Explore" or "Inspect".
    *   This will often show you the underlying PromQL query that Grafana is using to fetch the data from its Prometheus data source. Try to identify the metric names and labels in the query.

**Reflection Questions:**
*   What kinds of metrics are being displayed on these dashboards?
*   How does Grafana's visualization help you understand the system's health compared to just seeing raw numbers?
*   Can you identify any PromQL queries being used? What do they look like?

#### Assessment idea
1.  **Question:** A system administrator needs to monitor the HTTP request rate and error count for a new microservice deployed in Kubernetes. They want a solution that automatically discovers new instances of the microservice and allows for flexible querying of historical data. Which tool, Prometheus or Grafana, is primarily responsible for the *data collection, storage, and querying* aspects of this requirement, and how does it achieve automatic discovery?
    *   **Correct Answer:** Prometheus is primarily responsible for data collection, storage, and querying. It achieves automatic discovery through its service discovery mechanisms, which can integrate directly with Kubernetes APIs. Prometheus can be configured to dynamically find and scrape metrics endpoints from new microservice instances as they are deployed or scaled up, without manual configuration changes. Its internal TSDB stores this data, and PromQL allows for flexible querying of historical request rates and error counts.
2.  **Question:** Your team has Prometheus collecting metrics from various services, but they find it difficult to get a quick, visual overview of the overall system health. They also want to consolidate metrics from Prometheus with logs from an Elasticsearch cluster into a single interface. Which tool would you introduce to address these needs, and how would it facilitate both visualization and data consolidation?
    *   **Correct Answer:** Grafana would be introduced to address these needs. Grafana's primary role is data visualization and dashboarding. It can connect to Prometheus as a data source to create intuitive dashboards that provide a quick visual overview of system health. Crucially, Grafana is data source agnostic; it can also connect to an Elasticsearch cluster (or any other supported log aggregation tool) as a separate data source. This allows the team to build unified dashboards that display metrics from Prometheus alongside relevant logs from Elasticsearch, providing a consolidated view for comprehensive operational insights.

#### AI generation note
Create a 10-minute mixed video. Start with a 3-minute conceptual overview of Prometheus, using animated diagrams to show the pull model, exporters, and the Alertmanager as distinct components. Include a brief screen recording of a simple PromQL query being executed in the Prometheus UI. Transition to a 4-minute segment on Grafana, showcasing its dashboarding capabilities with a screen recording of a pre-built Grafana dashboard connected to Prometheus data, highlighting interactive elements like time range selection and variables. Dedicate 2 minutes to explaining the synergy between them with an architecture diagram showing Prometheus feeding data to Grafana. End with a 1-minute interactive mini-quiz: "Which tool is primarily a data store, and which is primarily a visualization layer?" The tone should be enthusiastic and professional, emphasizing the practical benefits. Visuals should include split-screen views of code/UI where applicable.

---

## Module 2: Getting Started with Prometheus Core

This module introduces you to the core components of Prometheus, guiding you through its installation, fundamental configuration, and how it collects metrics. You'll learn about different metric types, how to integrate external services using exporters, and begin to explore the powerful PromQL query language to retrieve and analyze your monitoring data.

### Chapter 2.1 — Installing and Running Prometheus

#### Learning objectives
*   Successfully download, extract, and run the Prometheus server on a Linux-based system.
*   Understand the basic structure and essential parameters within the `prometheus.yml` configuration file.
*   Configure Prometheus to scrape its own metrics endpoint and verify its operational status.
*   Navigate the Prometheus web user interface to inspect targets and collected metrics.
*   Identify and troubleshoot common initial setup issues, such as port conflicts or configuration errors.

#### Detailed lesson content
Welcome to the exciting world of Prometheus! Our journey begins by getting the Prometheus server up and running. Prometheus is a standalone application, meaning it doesn't require complex dependencies beyond its own binary. It's often deployed as a single binary, making installation straightforward. You'll typically download a pre-compiled binary for your operating system and architecture. For Linux, this usually involves downloading a `.tar.gz` archive, extracting it, and then running the `prometheus` executable.

Let's walk through the initial setup. First, you'll want to choose a suitable directory for your Prometheus installation, perhaps `/opt/prometheus` or `/usr/local/prometheus`. Once you've downloaded the archive, you'll extract its contents. Inside, you'll find the `prometheus` executable, `promtool` (a utility for inspecting Prometheus files), and a default `prometheus.yml` configuration file. The `prometheus.yml` file is the heart of your Prometheus setup, dictating what targets to scrape, how often, and other crucial operational parameters.

A minimal `prometheus.yml` file typically includes a `global` section for default scrape intervals and evaluation intervals, and a `scrape_configs` section where you define jobs for collecting metrics. Each `job_name` represents a logical group of targets, and within each job, you define `static_configs` which list the actual endpoints Prometheus should scrape. For instance, to monitor Prometheus itself, you'd define a job named `prometheus` and specify its own HTTP metrics endpoint, which by default runs on port 9090.

Here's a basic `prometheus.yml` example:
```yaml
global:
  scrape_interval: 15s # How frequently to scrape targets
  evaluation_interval: 15s # How frequently to evaluate rules

# A scrape configuration for Prometheus itself
scrape_configs:
  - job_name: 'prometheus'
    # metrics_path defaults to /metrics
    # scheme defaults to http
    static_configs:
      - targets: ['localhost:9090'] # The Prometheus server's own metrics endpoint
```
Once you have this configuration file, you can start Prometheus from your terminal. You'll typically provide the path to your configuration file using the `--config.file` flag. For example: `prometheus --config.file=prometheus.yml`. Upon successful startup, Prometheus will begin logging its activities, including when it starts scraping targets.

**Common Mistakes and Troubleshooting:**
One of the most frequent issues beginners encounter is incorrect YAML syntax. YAML is sensitive to indentation, so ensure you use spaces, not tabs, and maintain consistent indentation levels. A single misplaced space can prevent Prometheus from starting. You can use `promtool check config prometheus.yml` to validate your configuration file before starting Prometheus.

Another common problem is port conflicts. If another service is already using port 9090 (Prometheus's default web UI and metrics port), Prometheus will fail to bind to it and exit. You can change Prometheus's listening address using the `--web.listen-address` flag, for example, `--web.listen-address=":9091"`. Always check your logs for error messages; they usually provide clear indications of what went wrong. Firewall rules can also block Prometheus from reaching its targets or prevent you from accessing its web UI. Ensure necessary ports (like 9090) are open.

After Prometheus starts, you can access its web UI by navigating to `http://localhost:9090` in your web browser. This interface is your window into Prometheus's operational status. Go to the "Status" menu and select "Targets". Here, you should see your `prometheus` job listed, with its `localhost:9090` target showing a "UP" state. This confirms that Prometheus is successfully scraping its own metrics. You can also use the "Graph" tab to query some basic metrics, like `prometheus_up`, which will show `1` if Prometheus is running and scraping itself. This initial setup is crucial as it validates your installation and basic configuration, laying the groundwork for adding more complex monitoring targets.

#### Key concepts
*   **Prometheus Server:** The core component responsible for scraping, storing, and querying metrics.
*   **`prometheus.yml`:** The primary configuration file for Prometheus, defining scrape jobs, rules, and global settings.
*   **`scrape_configs`:** A section in `prometheus.yml` where you define jobs to scrape metrics from various targets.
*   **`job_name`:** A label applied to all metrics scraped from a specific set of targets, identifying their origin.
*   **`static_configs`:** A list of explicitly defined targets (e.g., `localhost:9090`) for a given scrape job.
*   **Target:** An endpoint (typically an HTTP URL) that exposes metrics in a Prometheus-compatible format.
*   **Prometheus Web UI:** A built-in web interface for inspecting targets, querying metrics, and viewing configuration.

#### Hands-on activity
**Objective:** Install Prometheus and configure it to monitor itself.

1.  **Download Prometheus:**
    *   Open your terminal.
    *   Download the latest Prometheus release for your OS (e.g., Linux AMD64):
        ```bash
        wget https://github.com/prometheus/prometheus/releases/download/v2.50.1/prometheus-2.50.1.linux-amd64.tar.gz
        ```
        *(Note: Check the Prometheus GitHub releases page for the absolute latest version if `v2.50.1` is outdated.)*
2.  **Extract and Navigate:**
    ```bash
    tar xvfz prometheus-2.50.1.linux-amd64.tar.gz
    cd prometheus-2.50.1.linux-amd64
    ```
3.  **Create/Edit `prometheus.yml`:**
    *   Inside the extracted directory, you'll find a default `prometheus.yml`. Open it with a text editor (e.g., `nano prometheus.yml` or `vi prometheus.yml`).
    *   Replace its content with the minimal configuration shown in the lesson:
        ```yaml
        global:
          scrape_interval: 15s
          evaluation_interval: 15s

        scrape_configs:
          - job_name: 'prometheus'
            static_configs:
              - targets: ['localhost:9090']
        ```
    *   Save and exit the editor.
4.  **Run Prometheus:**
    ```bash
    ./prometheus --config.file=prometheus.yml
    ```
    *   Observe the terminal output for "Server is ready to receive web requests" and "Starting target manager...".
5.  **Verify in Web UI:**
    *   Open your web browser and go to `http://localhost:9090`.
    *   Navigate to "Status" -> "Targets".
    *   Confirm that the `prometheus` job's target (`localhost:9090`) shows a "UP" state.
    *   Go to "Graph" and type `prometheus_up` in the expression field, then click "Execute". You should see a value of `1`.

#### Assessment idea
1.  **Question:** You've started Prometheus, but when you try to access `http://localhost:9090` in your browser, you get a "Connection refused" error. What is the most likely cause, and how would you begin to troubleshoot it?
    *   **Correct Answer:** The most likely cause is that the Prometheus server either failed to start correctly or is not running on port 9090. To troubleshoot, first check the terminal where Prometheus was launched for any error messages (e.g., "address already in use" indicating a port conflict, or YAML parsing errors). If Prometheus logs indicate it started successfully, check if a firewall is blocking access to port 9090 on the machine where Prometheus is running. You could also try changing Prometheus's listening port using the `--web.listen-address` flag to see if the issue is port-specific.

2.  **Question:** Explain the purpose of the `scrape_interval` and `evaluation_interval` parameters in the `global` section of the `prometheus.yml` file.
    *   **Correct Answer:** The `scrape_interval` defines how often Prometheus will attempt to pull (scrape) metrics from its configured targets. For example, a `15s` interval means Prometheus will try to fetch metrics every 15 seconds. The `evaluation_interval` specifies how often Prometheus will evaluate its configured recording rules and alerting rules. These rules process raw scraped metrics to create new time series or trigger alerts, and this interval dictates their execution frequency.

#### AI generation note
Create a 12-minute live coding video. Begin with a blank terminal, demonstrate downloading and extracting Prometheus. Show the initial `prometheus.yml` content, then modify it to scrape `localhost:9090`. Execute Prometheus from the command line, highlighting key log messages. Transition to a browser view, showing navigation to `http://localhost:9090/targets` and `http://localhost:9090/graph` to verify `prometheus_up`. Include a segment on common YAML errors and how `promtool check config` helps. Use a split-screen view for terminal and browser. End with a 2-question interactive mini-quiz on `prometheus.yml` parameters.

---

### Chapter 2.2 — Understanding Prometheus Metrics and Exporters

#### Learning objectives
*   Differentiate between Prometheus's four core metric types: Counter, Gauge, Histogram, and Summary, and identify appropriate use cases for each.
*   Explain how applications expose metrics for Prometheus to scrape, specifically the `/metrics` endpoint convention.
*   Understand the role and necessity of Prometheus Exporters for monitoring third-party services and systems.
*   Install and configure the Node Exporter to collect system-level metrics from a Linux host.
*   Inspect metrics exposed by an exporter using `curl` and the Prometheus web UI.

#### Detailed lesson content
Now that Prometheus is running, let's delve into the data it collects: metrics. Prometheus is designed around a multi-dimensional data model, where metrics are time series identified by a metric name and a set of key-value pairs called labels. Understanding the different types of metrics is fundamental to effectively monitoring your systems. Prometheus defines four core metric types: Counter, Gauge, Histogram, and Summary.

A **Counter** is a cumulative metric that only ever goes up or is reset to zero on restart. It's ideal for representing things that increment, like the total number of HTTP requests, tasks completed, or errors encountered. For example, `http_requests_total` would be a counter. You typically use functions like `rate()` or `irate()` in PromQL to calculate the per-second average rate of increase for counters, as their absolute value isn't usually what you're interested in.

A **Gauge** represents a single numerical value that can arbitrarily go up or down. It's perfect for measuring current values, such as CPU utilization, memory usage, current temperature, or the number of active users. Unlike counters, gauges can decrease. An example would be `node_cpu_seconds_total{mode="idle"}` (the total number of seconds the CPU has spent in idle mode, which can be used to derive current idle percentage) or `node_memory_MemFree_bytes` (free memory).

**Histograms** sample observations (e.g., request durations or response sizes) and count them in configurable buckets. They provide a cumulative count for each bucket, plus a sum of all observed values and a total count. This allows you to calculate approximate quantiles (like the 90th or 99th percentile) and understand the distribution of values. For instance, `http_request_duration_seconds_bucket` would show how many requests fell into specific duration ranges.

**Summaries** are similar to Histograms but calculate configurable quantiles over a sliding time window on the client side. They provide `_count` and `_sum` of observations, along with the calculated quantiles (e.g., `0.5`, `0.9`, `0.99`). While useful for direct quantile reporting, they can be less precise than Histograms for aggregation across multiple instances, as quantiles are not easily aggregatable. Histograms are generally preferred for server-side aggregation.

Applications expose these metrics via an HTTP endpoint, typically `/metrics`, in a simple human-readable text format. When Prometheus scrapes an application, it sends an HTTP GET request to this endpoint, parses the response, and stores the time series data.

However, many existing applications and infrastructure components (like databases, message queues, or operating systems) don't natively expose metrics in the Prometheus format. This is where **Exporters** come in. An exporter is a small service that translates metrics from a third-party system into the Prometheus format and exposes them on its own `/metrics` endpoint. Prometheus then scrapes the exporter, which acts as a proxy for the actual system's metrics.

One of the most fundamental exporters is the **Node Exporter**. This exporter collects a wide range of hardware and OS metrics from Linux and other Unix-like systems, including CPU usage, memory, disk I/O, network statistics, and filesystem usage. Installing it is similar to Prometheus: download the binary, extract it, and run it. The Node Exporter typically listens on port 9100.

To install and run the Node Exporter:
```bash
# Download (check latest version on GitHub releases)
wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz
tar xvfz node_exporter-1.7.0.linux-amd64.tar.gz
cd node_exporter-1.7.0.linux-amd64
./node_exporter
```
Once running, you can verify its metrics by navigating to `http://localhost:9100/metrics` in your browser or using `curl http://localhost:9100/metrics`. You'll see a long list of metrics like `node_cpu_seconds_total`, `node_memory_MemFree_bytes`, `node_disk_reads_completed_total`, etc.

To make Prometheus aware of the Node Exporter, you need to add a new `scrape_config` entry to your `prometheus.yml`:
```yaml
# ... (existing global and prometheus job) ...

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100'] # Node Exporter's default port
```
After modifying `prometheus.yml`, you'll need to restart Prometheus or send it a `SIGHUP` signal to reload its configuration: `kill -HUP <prometheus_pid>`. Once reloaded, Prometheus will start scraping the Node Exporter. You can then check the "Targets" page in the Prometheus UI to confirm the `node_exporter` job is "UP".

**Common Mistakes and Safety Notes:**
When working with exporters, a common mistake is forgetting to add the new job to `prometheus.yml` or specifying the wrong port. Always double-check the exporter's default port and ensure it matches your configuration. Firewall rules are another frequent culprit; if Prometheus can't reach the exporter's port, it will show as "DOWN" in the targets page. Ensure the necessary ports are open between Prometheus and its targets. For production environments, it's safer to run exporters as systemd services to ensure they restart automatically and are managed properly. Never expose exporters directly to the public internet without proper authentication or firewalling, as they often expose sensitive system information.

#### Key concepts
*   **Metric Types:** The four fundamental data types Prometheus uses: Counter, Gauge, Histogram, and Summary.
*   **Counter:** A cumulative metric that only increases or resets to zero.
*   **Gauge:** A metric representing a single numerical value that can go up or down arbitrarily.
*   **Histogram:** Samples observations into configurable buckets, providing counts, sum, and allowing quantile calculation.
*   **Summary:** Calculates client-side quantiles over a sliding time window, along with count and sum.
*   **`/metrics` Endpoint:** The standard HTTP endpoint where applications and exporters expose Prometheus-formatted metrics.
*   **Exporter:** A service that translates metrics from a third-party system into the Prometheus format for scraping.
*   **Node Exporter:** A widely used exporter for collecting system-level metrics (CPU, memory, disk, network) from Unix-like hosts.

#### Hands-on activity
**Objective:** Install and configure the Node Exporter, then integrate it with Prometheus.

1.  **Stop Prometheus (if running):** Press `Ctrl+C` in the terminal where Prometheus is running.
2.  **Download Node Exporter:**
    *   Open a *new* terminal window (keep your Prometheus directory open in the first one).
    *   Download the latest Node Exporter release (e.g., Linux AMD64):
        ```bash
        wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz
        ```
        *(Note: Check the Node Exporter GitHub releases page for the absolute latest version if `v1.7.0` is outdated.)*
3.  **Extract and Run Node Exporter:**
    ```bash
    tar xvfz node_exporter-1.7.0.linux-amd64.tar.gz
    cd node_exporter-1.7.0.linux-amd64
    ./node_exporter
    ```
    *   The Node Exporter will start and listen on port 9100 by default.
4.  **Verify Node Exporter Metrics:**
    *   Open your web browser and go to `http://localhost:9100/metrics`. You should see a long list of system metrics.
5.  **Configure Prometheus to Scrape Node Exporter:**
    *   Go back to your *first* terminal (where your `prometheus.yml` is located).
    *   Edit `prometheus.yml` to add the `node_exporter` job:
        ```yaml
        global:
          scrape_interval: 15s
          evaluation_interval: 15s

        scrape_configs:
          - job_name: 'prometheus'
            static_configs:
              - targets: ['localhost:9090']

          - job_name: 'node_exporter'
            static_configs:
              - targets: ['localhost:9100']
        ```
    *   Save and exit the editor.
6.  **Restart Prometheus:**
    ```bash
    ./prometheus --config.file=prometheus.yml
    ```
7.  **Verify in Prometheus UI:**
    *   Go to `http://localhost:9090/targets` in your browser.
    *   You should now see two jobs: `prometheus` and `node_exporter`, both showing an "UP" state.

#### Assessment idea
1.  **Question:** You want to monitor the total number of bytes transferred over a network interface since the system started. Which Prometheus metric type is most appropriate for this, and why?
    *   **Correct Answer:** A **Counter** is the most appropriate metric type. Network bytes transferred is a value that only ever increases (or resets to zero upon system restart). It represents a cumulative total, which is the defining characteristic of a Counter. Using a Gauge would be misleading as it implies the value can arbitrarily go up or down, which isn't the case for total bytes transferred.

2.  **Question:** You've installed the Node Exporter on a server, and it's running on port 9100. You've also added a `node_exporter` job to your `prometheus.yml` with `targets: ['localhost:9100']` and restarted Prometheus. However, in the Prometheus UI's "Targets" page, the `node_exporter` target shows a "DOWN" state with an error like "connection refused". What are two common reasons for this issue?
    *   **Correct Answer:**
        1.  **Firewall Blocking:** A firewall (e.g., `ufw`, `firewalld`, or AWS/Azure/GCP security groups) on the server where Node Exporter is running might be blocking incoming connections on port 9100 from the Prometheus server. You would need to open port 9100.
        2.  **Node Exporter Not Running or Incorrect Port:** Although you believe it's running, the Node Exporter might have crashed, failed to start, or is actually listening on a different port than 9100. You should check the Node Exporter's logs and confirm its listening port.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with an animated diagram explaining Counter, Gauge, Histogram, and Summary with clear visual examples (e.g., a rising counter for requests, a fluctuating gauge for CPU, buckets filling for request durations). Transition to a live coding demo showing the installation and execution of Node Exporter in a terminal. Then, demonstrate using `curl` to inspect its `/metrics` endpoint. Finally, show modifying `prometheus.yml` to add the Node Exporter job, restarting Prometheus, and verifying the "UP" status in the Prometheus UI's targets page. Include common mistakes like wrong ports and firewall issues. End with a reflection prompt asking learners to consider which metric type they'd use for specific scenarios (e.g., "number of logged-in users").

---

### Chapter 2.3 — Basic PromQL: Querying Your Metrics

#### Learning objectives
*   Understand the fundamental syntax of PromQL for selecting time series data.
*   Differentiate between instant vector selectors and range vector selectors.
*   Construct basic PromQL queries using metric names and label matchers.
*   Apply common arithmetic and comparison operators to query results.
*   Utilize basic aggregation operators (`sum`, `avg`, `count`) with `by` and `without` clauses.
*   Learn to use `rate()` and `irate()` functions for calculating rates of change on counters.

#### Detailed lesson content
With Prometheus collecting metrics, the next crucial step is to retrieve and analyze that data. This is where PromQL, the Prometheus Query Language, comes into play. PromQL is a powerful and flexible query language designed for selecting and aggregating time series data. It allows you to filter, combine, and transform your metrics into meaningful insights.

At its core, a PromQL query selects time series. The simplest query is just a metric name, which will return all time series with that metric name. For example, `node_cpu_seconds_total` will return all time series related to CPU seconds, across all modes (idle, user, system) and all instances scraped by the Node Exporter.

To refine your selection, you use **label matchers**. Labels are key-value pairs that provide additional dimensions to your metrics. You enclose label matchers in curly braces `{}` after the metric name. For instance, to see only the idle CPU seconds, you would query `node_cpu_seconds_total{mode="idle"}`. You can use various matching operators:
*   `=` (equals): `mode="idle"`
*   `!=` (not equals): `mode!="idle"`
*   `=~` (regex match): `mode=~"idle|user"`
*   `!~` (regex not match): `mode!~"idle|user"`

PromQL queries can return two main types of results:
1.  **Instant Vector:** A set of time series, each with a single sample, all sharing the same timestamp. This is the most common result type for queries executed in the "Graph" tab for a single point in time.
2.  **Range Vector:** A set of time series, each with a range of data samples over a specified time duration. You create a range vector by appending a time duration (e.g., `5m` for 5 minutes, `1h` for 1 hour) in square brackets `[]` to an instant vector selector. For example, `node_cpu_seconds_total{mode="idle"}[5m]` would give you the last 5 minutes of data for that metric. Range vectors are primarily used as input for functions like `rate()` or `delta()`.

Let's explore some common operations. You can perform **arithmetic operations** directly on instant vectors. For example, to convert CPU seconds to percentage, you might use division. If you want to sum up the CPU usage across all cores for a specific mode, you'd use an **aggregation operator**.

**Aggregation operators** are crucial for summarizing data. Common ones include `sum()`, `avg()`, `count()`, `min()`, and `max()`. These operators, by default, aggregate across all dimensions. To preserve certain labels or drop others, you use `by()` or `without()` clauses.
*   `sum(node_cpu_seconds_total) by (mode)`: This sums `node_cpu_seconds_total` but keeps the `mode` label, giving you a total for each CPU mode across all instances.
*   `avg(node_memory_MemFree_bytes) without (instance)`: This calculates the average free memory across all instances, dropping the `instance` label.

One of the most important functions for counters is `rate()`. Since counters only increase, their absolute value isn't typically useful for showing current activity. `rate(metric_name[duration])` calculates the average per-second rate of increase of the time series over the specified duration. For example, `rate(node_network_receive_bytes_total[5m])` would show the average network receive bandwidth in bytes per second over the last 5 minutes. `irate()` is similar but calculates the *instantaneous* rate of increase, suitable for volatile, fast-moving counters.

**Common Mistakes:**
A frequent mistake is applying `rate()` to a Gauge. `rate()` is specifically designed for counters. Applying it to a Gauge will likely produce nonsensical results. Another pitfall is incorrect label matching; remember that labels are case-sensitive and must match exactly. When using aggregation operators, forgetting `by()` or `without()` can lead to unexpected results, as the aggregation will occur over all dimensions, potentially collapsing your data into a single value. Always be mindful of the time range you're querying; if you're looking at a short time window with `rate()`, you might miss trends. Conversely, a very long window can smooth out important spikes.

PromQL is a powerful tool, and mastering these basics will enable you to extract valuable insights from your monitoring data. Experimentation in the Prometheus "Graph" tab is the best way to learn!

#### Key concepts
*   **PromQL (Prometheus Query Language):** The functional query language used to select and aggregate time series data in Prometheus.
*   **Label Matchers:** Key-value pairs enclosed in `{}` used to filter time series based on their labels (e.g., `mode="idle"`).
*   **Instant Vector:** A set of time series, each with a single sample, all sharing the same timestamp.
*   **Range Vector:** A set of time series, each with a range of data samples over a specified time duration (e.g., `[5m]`).
*   **Arithmetic Operators:** Basic mathematical operations (`+`, `-`, `*`, `/`) applied to query results.
*   **Aggregation Operators:** Functions like `sum()`, `avg()`, `count()`, `min()`, `max()` used to summarize data.
*   **`by()` / `without()`:** Clauses used with aggregation operators to specify which labels to group by or remove.
*   **`rate()`:** A function used on counters to calculate the average per-second rate of increase over a time range.
*   **`irate()`:** A function similar to `rate()` but calculates the instantaneous rate of increase, suitable for fast-changing counters.

#### Hands-on activity
**Objective:** Write and execute basic PromQL queries using Node Exporter metrics.

1.  **Ensure Prometheus and Node Exporter are Running:** Make sure both services are active from the previous chapter.
2.  **Access Prometheus UI:** Open `http://localhost:9090` in your web browser.
3.  **Navigate to Graph Tab:** Click on the "Graph" tab.
4.  **Explore Basic Metric Selection:**
    *   In the "Expression" field, type `node_cpu_seconds_total` and click "Execute". Observe the many time series returned.
    *   Refine the query: `node_cpu_seconds_total{mode="idle"}`. Execute and see fewer series.
    *   Try `node_cpu_seconds_total{mode!="idle", cpu="0"}`.
5.  **Use `rate()` for CPU Usage:**
    *   To calculate the CPU utilization (non-idle) as a percentage over the last 5 minutes:
        ```promql
        100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
        ```
        *Execute this query and observe the graph.* This query calculates the average idle CPU rate, multiplies by 100, and subtracts from 100 to get the non-idle percentage. The `avg by (instance)` ensures we get one value per host.
6.  **Query Memory Usage:**
    *   Find total memory: `node_memory_MemTotal_bytes`
    *   Find free memory: `node_memory_MemFree_bytes`
    *   Calculate used memory percentage:
        ```promql
        (node_memory_MemTotal_bytes - node_memory_MemFree_bytes) / node_memory_MemTotal_bytes * 100
        ```
        *Execute this and observe the graph.*
7.  **Explore Network I/O:**
    *   Calculate incoming network traffic in bytes/second over the last 1 minute:
        ```promql
        rate(node_network_receive_bytes_total[1m])
        ```
    *   Calculate outgoing network traffic in bytes/second over the last 1 minute:
        ```promql
        rate(node_network_transmit_bytes_total[1m])
        ```
    *   *Challenge:* Try to sum these two to get total network traffic.

#### Assessment idea
1.  **Question:** You want to find the average CPU temperature across all your monitored servers, grouped by the `datacenter` label. Assume you have a metric `server_cpu_temperature_celsius` with labels `instance` and `datacenter`. Write the PromQL query.
    *   **Correct Answer:** `avg(server_cpu_temperature_celsius) by (datacenter)`
        *   **Explanation:** We use the `avg()` aggregation operator to calculate the average. The `by (datacenter)` clause ensures that the average is computed for each unique `datacenter` label, rather than giving a single global average.

2.  **Question:** A developer asks you to provide a query that shows the total number of HTTP requests per second for your web server over the last 10 minutes. The metric is `http_requests_total`, which is a Counter. Write the PromQL query.
    *   **Correct Answer:** `rate(http_requests_total[10m])`
        *   **Explanation:** Since `http_requests_total` is a Counter, we need to use the `rate()` function to calculate its average per-second increase over a specified time window. The `[10m]` specifies a 10-minute range vector, meaning the rate will be calculated based on the change in the counter's value over the past 10 minutes.

#### AI generation note
Create a 15-minute interactive code demo. Start by showing the Prometheus UI's "Graph" tab. Demonstrate basic metric selection (e.g., `node_cpu_seconds_total`). Then, introduce label matchers with `mode="idle"` and `mode!="idle"`, showing how results filter. Explain instant vs. range vectors visually by typing `[5m]` and explaining its use with functions. Focus on `rate()` with `node_network_receive_bytes_total`, showing how raw counter values are less useful than the rate. Then, demonstrate `sum()`, `avg()`, `by()`, and `without()` using `node_cpu_seconds_total` to show aggregation across instances and modes. Include a common mistake segment on using `rate()` with a Gauge. The interactive element will be a coding exercise where learners complete a PromQL query to calculate disk I/O percentage.

---

## Module 3: Mastering PromQL: Querying Your Metrics

The heart of Prometheus lies in its powerful query language, PromQL. This module will transform you from a passive observer of metrics into an active explorer, capable of extracting precise insights from your monitored systems. You'll learn the fundamental syntax, understand different query types, master aggregation techniques, and combine complex expressions to answer critical questions about your infrastructure and applications. By the end of this module, you'll be confidently crafting PromQL queries to build informative dashboards and set up effective alerts.

### Chapter 3.1 — Introduction to PromQL Syntax and Instant Queries

#### Learning objectives
*   Identify the basic components of a PromQL query, including metric names and label selectors.
*   Differentiate between various label matching operators and apply them effectively.
*   Execute instant queries in the Prometheus UI and interpret the results.
*   Understand the concept of instant vectors and their role in PromQL.
*   Utilize basic functions like `rate()` and `irate()` for instant vector calculations.

#### Detailed lesson content
Welcome to the exciting world of PromQL, Prometheus's powerful, functional query language. PromQL is designed for selecting and aggregating time series data in real-time, making it an indispensable tool for anyone working with Prometheus. Unlike traditional SQL, PromQL is purpose-built for metrics, focusing on time series, labels, and efficient aggregation. Our journey begins with the fundamental building blocks: metric names and label selectors, which allow us to pinpoint exactly the data we're interested in.

Every PromQL query starts with selecting a set of time series. The simplest form of a query is just a metric name, for example, `http_requests_total`. If you type this into the Prometheus UI's expression browser and execute it, you'll get back all time series that share this metric name, regardless of their labels. This can often result in a very large, unwieldy output, especially in a production environment. To make our queries precise, we use label selectors. Labels are key-value pairs that provide dimensions to our metrics, allowing us to filter and group data. For instance, `http_requests_total{job="api-server", status="200"}` would select only those HTTP requests originating from the `api-server` job that resulted in a `200 OK` status.

PromQL offers several label matching operators to give you fine-grained control over your selections. The `=` operator performs an exact match, as seen in our previous example. If you need to select series where a label *does not* match a specific value, you use `!=`. For example, `http_requests_total{job!="node-exporter"}` would give you all HTTP requests *except* those coming from the `node-exporter` job. For more flexible matching, PromQL supports regular expressions. The `=~` operator matches labels whose values *match* the provided regular expression, while `!~` matches labels whose values *do not match* the regular expression. So, `http_requests_total{instance=~"webserver-.*"}` would select all HTTP requests from instances whose names start with "webserver-". Conversely, `http_requests_total{status!~"2..|3.."}` would select requests with status codes that are not in the 2xx or 3xx range, effectively showing errors or redirects. Mastering these operators is crucial for crafting targeted queries.

When you execute a query in the Prometheus UI without specifying a time range, you're performing an "instant query." This type of query returns the latest value for each selected time series at a single point in time. The result of an instant query is an "instant vector," which is a set of time series, each with a single sample. While instant queries are useful for checking current states, many metrics, especially counters, are only meaningful when observed over time. For example, `http_requests_total` is a counter that continuously increases. Its raw value isn't as useful as its *rate of change*.

This is where PromQL functions come into play. Two fundamental functions for working with counters are `rate()` and `irate()`. The `rate(v range-vector)` function calculates the average per-second rate of increase of the time series in the range vector `v`. It automatically handles counter resets (e.g., when an application restarts). The `range-vector` part is crucial here: it specifies a duration over which to calculate the rate. For example, `rate(http_requests_total[5m])` calculates the average HTTP request rate over the last 5 minutes. This gives you a much more actionable metric than the raw counter value.

A common mistake beginners make is trying to apply `rate()` to an instant vector directly, like `rate(http_requests_total)`. This will result in an error because `rate()` expects a range vector. You *must* specify a time duration in square brackets, like `[5m]` for 5 minutes, `[1h]` for 1 hour, or `[30s]` for 30 seconds. The duration defines the "window" over which Prometheus looks back to calculate the rate.

The `irate(v range-vector)` function is similar to `rate()` but calculates the *instantaneous* per-second rate of increase. It does this by considering only the last two data points within the specified time range. `irate()` is particularly useful for volatile, fast-moving counters where you want to see immediate changes, such as CPU utilization or network I/O. However, because it only uses two points, `irate()` can be more susceptible to spikes or drops caused by scraping intervals or temporary network issues. For general trend analysis and dashboarding, `rate()` is often preferred as it smooths out these fluctuations by averaging over the entire window. For example, to see the instantaneous rate of incoming network bytes on a specific network interface, you might use `irate(node_network_receive_bytes_total{device="eth0"}[1m])`.

Understanding the difference between `rate()` and `irate()` is a key skill. `rate()` provides a smoothed average, good for trends, while `irate()` offers a more immediate, potentially spikier view, good for detecting sudden changes. When choosing between them, consider the volatility of your metric and what kind of insight you're trying to gain. For instance, if you're monitoring request rates for an API, `rate()` over 5 minutes might show you the general load, while `irate()` over 1 minute could highlight a sudden surge or drop in traffic immediately.

Finally, a safety note: be mindful of the cardinality of your labels. High cardinality (many unique label values for a single metric) can significantly impact Prometheus's performance and storage requirements. For example, adding a `request_id` label to `http_requests_total` would create a new time series for every unique request, quickly overwhelming your Prometheus server. Always strive to keep labels to a manageable set of dimensions that are truly useful for aggregation and filtering.

#### Key concepts
*   **Metric Name:** The primary identifier for a time series, indicating what is being measured (e.g., `http_requests_total`).
*   **Label Selectors:** Key-value pairs enclosed in curly braces `{}` used to filter time series based on their labels (e.g., `{job="api-server", status="200"}`).
*   **Label Matching Operators:** Operators used within label selectors:
    *   `=`: Exact match.
    *   `!=`: Not equal match.
    *   `=~`: Regular expression match.
    *   `!~`: Regular expression non-match.
*   **Instant Query:** A query that returns the latest value for each selected time series at a single point in time.
*   **Instant Vector:** The result of an instant query, consisting of a set of time series, each with a single sample.
*   **Counter:** A metric type that represents a single monotonically increasing cumulative counter, whose value can only increase or be reset to zero on restart.
*   **`rate()` function:** Calculates the average per-second rate of increase of a counter over a specified time range.
*   **`irate()` function:** Calculates the instantaneous per-second rate of increase of a counter, using only the last two data points in the specified time range.
*   **Range Vector:** A set of time series, each containing a range of samples over a specified time duration (e.g., `[5m]`).

#### Hands-on activity
**Activity: Explore Instant Queries and Rates**

1.  **Access Prometheus UI:** Open your Prometheus server's web UI (typically `http://localhost:9090` if running locally).
2.  **Basic Metric Selection:** In the "Expression" field, type `up` and click "Execute". Observe the output. What does `up` indicate?
3.  **Filtered Metric Selection:** Now, try `up{job="prometheus"}`. What changes in the output? What if you try `up{job!="prometheus"}`?
4.  **Explore `http_requests_total`:** Type `http_requests_total` and execute. Notice the raw, ever-increasing counter values.
5.  **Calculate Request Rate:** Now, use the `rate()` function. Type `rate(http_requests_total[5m])` and execute. Compare the values to the raw `http_requests_total`. What does this new value represent?
6.  **Apply `irate()`:** Change the query to `irate(http_requests_total[1m])` and execute. How do these values compare to `rate()`? Observe if they are more volatile.
7.  **Regular Expression Matching:** If you have multiple jobs or instances, try `rate(http_requests_total{job=~"api-.*"}[5m])` or `rate(http_requests_total{instance!~"localhost:.*"}[5m])`.

**Expected Outcome:** You should be able to successfully query metrics, filter them using various label matching operators, and apply `rate()` and `irate()` to understand the rate of change for counter metrics. You'll see how `rate()` provides a smoother average while `irate()` reacts more quickly to recent changes.

#### Assessment idea
1.  **Question:** You want to find the current CPU usage percentage for all instances where the `job` label is either `node-exporter` or `kubelet`. Which of the following PromQL queries would achieve this?
    a) `node_cpu_usage_percentage{job="node-exporter" OR job="kubelet"}`
    b) `node_cpu_usage_percentage{job=~"node-exporter|kubelet"}`
    c) `node_cpu_usage_percentage{job="node-exporter", job="kubelet"}`
    d) `node_cpu_usage_percentage{job!="node-exporter", job!="kubelet"}`

    **Correct Answer:** b) `node_cpu_usage_percentage{job=~"node-exporter|kubelet"}`
    **Explanation:** Option (b) correctly uses the regular expression matching operator `=~` with the `|` (OR) operator within the regex to select series where the `job` label matches either "node-exporter" or "kubelet". Option (a) uses an invalid `OR` keyword within label selectors. Option (c) would try to match `job` to *both* values simultaneously, which is impossible for a single label. Option (d) would exclude both jobs.

2.  **Question:** A developer asks you to provide a Prometheus query that shows the *average* number of new HTTP requests per second over the last 10 minutes for a service, specifically excluding any requests that resulted in a `404` status code. Write the PromQL query.

    **Correct Answer:** `rate(http_requests_total{status!="404"}[10m])`
    **Explanation:** The `rate()` function is used to calculate the average per-second rate of increase for a counter. We specify `http_requests_total` as the metric. The label selector `{status!="404"}` filters out any time series where the `status` label is exactly "404". Finally, `[10m]` defines the range vector over which the rate should be calculated, ensuring we get the average over the last 10 minutes.

#### AI generation note
Create a 12-minute interactive video tutorial. Start by demonstrating basic metric selection (`up`) in the Prometheus UI. Then, progressively introduce label matching operators (`=`, `!=`, `=~`, `!~`) using `http_requests_total` and various labels like `job`, `instance`, `status`. Show the difference in results for each. Next, explain instant queries and instant vectors. Introduce `rate()` with `http_requests_total[5m]` and compare its output to the raw counter. Then, introduce `irate()` with `http_requests_total[1m]` and discuss its characteristics compared to `rate()`, emphasizing the instantaneous vs. averaged view. Include a split-screen view of the Prometheus UI expression browser and the resulting graph/table. End with a short interactive quiz asking learners to identify the correct label matching operator for a given scenario. Provide clear visual cues for common mistakes like forgetting the range vector for `rate()`.

### Chapter 3.2 — Range Queries and Time-Series Functions

#### Learning objectives
*   Distinguish between instant vectors and range vectors in PromQL.
*   Construct range queries using the `[duration]` syntax.
*   Apply common range vector functions such as `increase()`, `delta()`, and `avg_over_time()`.
*   Understand the practical applications of range queries for historical analysis and trend identification.
*   Identify and avoid common pitfalls when working with range vectors and their associated functions.

#### Detailed lesson content
In the previous chapter, we explored instant queries, which give us a snapshot of metric values at a single point in time. While useful for immediate status checks, many monitoring scenarios require looking at how metrics behave over a period. This is where "range queries" and "range vectors" become essential. A range query, as the name suggests, allows you to retrieve a range of data samples for each selected time series over a specified duration. The result of a range query is a "range vector," which is a set of time series, each containing multiple samples over that duration.

To perform a range query, you append a duration selector in square brackets `[]` to your metric selector. For example, `http_requests_total[5m]` is a range vector selector that returns all samples recorded for the `http_requests_total` metric over the last 5 minutes. This raw range vector itself isn't directly plottable in the Prometheus UI's graph tab, but it's the input for many powerful PromQL functions designed to operate on a series of samples. Think of it as providing a window of data to a function, allowing it to perform calculations across those samples.

Let's dive into some of the most commonly used range vector functions. We've already touched upon `rate()` and `irate()` in the context of counters. To reiterate, `rate(v range-vector)` calculates the average per-second rate of increase for the counter over the specified time range. For example, `rate(node_network_receive_bytes_total{device="eth0"}[5m])` would show the average network receive bandwidth in bytes per second over the last 5 minutes for the `eth0` interface. This is a crucial metric for understanding network throughput.

Another vital function for counters is `increase(v range-vector)`. Unlike `rate()`, which gives you a per-second rate, `increase()` calculates the *total* increase in a counter's value over the specified time range. It also gracefully handles counter resets. So, if `http_requests_total` was 1000 at the start of a 5-minute window and 1500 at the end (with no resets), `increase(http_requests_total[5m])` would return 500. This is incredibly useful for understanding the total number of events that occurred within a period, such as the total number of errors, total bytes transferred, or total requests served. For instance, `increase(node_cpu_seconds_total{mode="idle"}[1h])` would tell you the total number of CPU seconds spent in idle mode over the last hour.

While `rate()` and `increase()` are specifically for counters, other range vector functions are applicable to all metric types, including gauges and histograms. One such function is `delta(v range-vector)`. This function calculates the difference between the first and last value of each time series in the range vector. It's particularly useful for gauges where you want to see the net change over a period. For example, `delta(node_filesystem_free_bytes{mountpoint="/"}[1h])` would show how much free disk space on the root partition has changed over the last hour. A positive delta means space was freed, while a negative delta means space was consumed. Be cautious with `delta()` on counters; it will give you the raw difference, which might be misleading if the counter reset within the range. For counters, `increase()` is almost always the safer and more accurate choice.

For analyzing trends and smoothing out noisy data, functions like `avg_over_time(v range-vector)`, `min_over_time(v range-vector)`, `max_over_time(v range-vector)`, and `sum_over_time(v range-vector)` are invaluable. As their names suggest, these functions calculate the average, minimum, maximum, and sum of all values within the specified time range for each series. For example, `avg_over_time(node_load1[15m])` would give you the average 1-minute load average over the last 15 minutes, helping to smooth out short-term spikes and reveal longer-term trends in system load. Similarly, `max_over_time(container_memory_usage_bytes[1h])` could show you the peak memory usage of a container within the last hour, which is critical for capacity planning or detecting memory leaks.

A common mistake when using range functions is choosing an inappropriate duration for the range vector. If your scrape interval is 15 seconds, and you use `[1s]`, you'll likely get no data or incomplete data. Conversely, using a very large range like `[24h]` for `irate()` might not give you the desired "instantaneous" view, as `irate()` still only uses the last two points within that large window. Always ensure your range duration is long enough to capture at least a few scrape intervals for reliable calculations, especially for `rate()` and `increase()`. A good rule of thumb for `rate()` and `increase()` is to use a range that is at least 4-5 times your scrape interval to ensure robust calculations even if a scrape is missed.

Another pitfall is applying range vector functions to instant vectors, which will result in an error. Remember, functions like `rate()`, `increase()`, `delta()`, and `avg_over_time()` *require* a range vector as input, denoted by the `[duration]` syntax. If you see an error like "expected type range vector, got instant vector", you've likely forgotten to add the `[duration]` selector.

Range queries are the backbone of historical analysis in Prometheus. They allow you to look back in time, analyze trends, identify performance bottlenecks, and understand system behavior over extended periods. When building Grafana dashboards, you'll frequently rely on these functions to display meaningful graphs that show how your metrics have evolved. For instance, plotting `rate(http_requests_total[5m])` over the last 6 hours provides a clear trend of your application's request load.

#### Key concepts
*   **Range Query:** A PromQL query that retrieves a series of data samples for each selected time series over a specified duration.
*   **Range Vector:** The result of a range query, consisting of a set of time series, each containing multiple samples over a defined time window (e.g., `metric_name[5m]`).
*   **`increase()` function:** Calculates the total increase in a counter's value over a specified time range, handling counter resets.
*   **`delta()` function:** Calculates the difference between the first and last value of each time series in a range vector. Best used with gauges.
*   **`avg_over_time()` function:** Calculates the average of all values in a range vector over its specified time range.
*   **`min_over_time()` function:** Calculates the minimum value in a range vector over its specified time range.
*   **`max_over_time()` function:** Calculates the maximum value in a range vector over its specified time range.
*   **`sum_over_time()` function:** Calculates the sum of all values in a range vector over its specified time range.
*   **Scrape Interval:** The frequency at which Prometheus collects metrics from a target. Crucial for determining appropriate range durations.

#### Hands-on activity
**Activity: Analyze Historical Data with Range Functions**

1.  **Access Prometheus UI:** Open your Prometheus server's web UI (e.g., `http://localhost:9090`).
2.  **Explore `node_cpu_seconds_total`:** Type `node_cpu_seconds_total` and execute. This is a counter that increments for different CPU modes.
3.  **Calculate Total CPU Seconds Used:** Use `increase(node_cpu_seconds_total[1h])`. This will show you the total CPU seconds used by each CPU mode over the last hour.
4.  **Calculate CPU Utilization Rate:** Now, try `rate(node_cpu_seconds_total{mode="idle"}[5m])`. This gives you the average rate of idle CPU seconds per second. To get the *percentage* of idle CPU, you might need to combine it with other modes later, but for now, focus on the rate itself.
5.  **Examine a Gauge with `delta()`:** If you have `node_filesystem_free_bytes` (from node_exporter), try `delta(node_filesystem_free_bytes{mountpoint="/"}[30m])`. This will show the change in free disk space on your root partition over the last 30 minutes. Is it positive (freed space) or negative (used space)?
6.  **Find Peak Memory Usage:** If you have `container_memory_usage_bytes` (from cAdvisor or Kubelet metrics), try `max_over_time(container_memory_usage_bytes{container="my-app"}[1h])`. This will show the peak memory usage for a specific container over the last hour.
7.  **Average Load:** Query `avg_over_time(node_load1[30m])` to see the average 1-minute load average over the past 30 minutes.

**Expected Outcome:** You will successfully use `increase()`, `delta()`, and `avg_over_time()` (or `max_over_time`) to extract meaningful historical data from counters and gauges. You'll observe how these functions transform raw time series data into actionable insights about total events, changes, or average states over time.

#### Assessment idea
1.  **Question:** You are monitoring a web server and want to know the *total number of bytes sent* by the server over the last 30 minutes. The metric `http_server_bytes_sent_total` is a counter. Which PromQL function should you use, and how would you construct the query?
    a) `rate(http_server_bytes_sent_total[30m])`
    b) `increase(http_server_bytes_sent_total[30m])`
    c) `delta(http_server_bytes_sent_total[30m])`
    d) `sum_over_time(http_server_bytes_sent_total[30m])`

    **Correct Answer:** b) `increase(http_server_bytes_sent_total[30m])`
    **Explanation:** The `increase()` function is specifically designed for counters to calculate the total increase in their value over a specified time range, correctly handling counter resets. `rate()` would give the *average per-second rate* of bytes sent, not the total. `delta()` is generally for gauges and might be inaccurate for counters due to resets. `sum_over_time()` would sum all samples within the range, which is not what you want for a cumulative counter's total increase.

2.  **Question:** Your application exposes a gauge metric `app_queue_size` which indicates the current number of items in a processing queue. You need to visualize the *maximum* queue size observed over the last 4 hours to understand peak load. Write the PromQL query.

    **Correct Answer:** `max_over_time(app_queue_size[4h])`
    **Explanation:** The `max_over_time()` function is used to find the highest value recorded for a time series within a specified range. `app_queue_size` is the metric, and `[4h]` specifies that we want to look back over the last 4 hours. This query will return the maximum queue size for each `app_queue_size` series during that 4-hour window, providing insight into peak load.

#### AI generation note
Produce a 10-minute animated video with code overlays. Begin by visually explaining the difference between instant vectors (single point) and range vectors (multiple points over time) using an animated timeline. Then, introduce the `[duration]` syntax with examples like `metric[5m]`. Dedicate segments to `increase()`, `delta()`, and `avg_over_time()`, showing their application with `http_requests_total` (for `increase`), `node_filesystem_free_bytes` (for `delta`), and `node_load1` (for `avg_over_time`). Use side-by-side views of the PromQL query in the Prometheus UI and the resulting graph, highlighting how the function transforms the raw data. Emphasize common mistakes like forgetting `[duration]` or misusing `delta()` on counters. Include an interactive element where learners drag and drop the correct function to match a given scenario (e.g., "total errors in last hour").

### Chapter 3.3 — Aggregation Operators and Grouping

#### Learning objectives
*   Apply common aggregation operators such as `sum()`, `avg()`, `max()`, `min()`, and `count()`.
*   Utilize `by` and `without` clauses to group and ungroup time series effectively.
*   Understand the concept of vector matching and its implications for combining aggregated results.
*   Construct queries that aggregate metrics across multiple dimensions for meaningful insights.
*   Identify scenarios where different aggregation strategies are most appropriate.

#### Detailed lesson content
So far, we've learned how to select individual time series and apply functions to them over time. However, in real-world monitoring, you rarely want to see hundreds or thousands of individual time series. Instead, you need to aggregate them to get a higher-level view, such as the total request rate across all instances of a service, or the average CPU usage per data center. This is where PromQL's aggregation operators come into play, allowing you to combine multiple time series into fewer, more meaningful ones.

PromQL provides several built-in aggregation operators that work on instant vectors. The most common ones include:
*   `sum()`: Calculates the sum of all values in the vector.
*   `avg()`: Calculates the average of all values.
*   `max()`: Finds the maximum value.
*   `min()`: Finds the minimum value.
*   `count()`: Counts the number of elements in the vector.
*   `stddev()`: Calculates the standard deviation.
*   `stdvar()`: Calculates the standard variance.
*   `topk(k, vector)`: Selects the `k` largest elements.
*   `bottomk(k, vector)`: Selects the `k` smallest elements.

These operators are applied to the *result* of a query that returns an instant vector. For example, if `rate(http_requests_total[5m])` returns multiple time series (one for each instance/job/status combination), `sum(rate(http_requests_total[5m]))` would sum the rates of *all* those series into a single value, representing the total request rate across your entire system. This is a powerful way to reduce noise and focus on overall system health.

However, simply summing everything into a single value might lose important context. What if you want to see the total request rate *per service* (i.e., per `job`)? This is where the `by` and `without` clauses become indispensable for grouping.

The `by` clause allows you to specify which labels to *keep* in the output after aggregation. All other labels will be removed, and series with the same values for the specified `by` labels will be aggregated together. For example, `sum by (job) (rate(http_requests_total[5m]))` would calculate the total HTTP request rate for each unique `job` label. The output would be an instant vector where each series has only the `job` label and its aggregated rate. This is incredibly useful for breaking down system-wide metrics into service-specific or component-specific views.

Conversely, the `without` clause allows you to specify which labels to *remove* from the output before aggregation. All other labels will be kept, and series with the same values for the *remaining* labels will be aggregated. For example, `sum without (instance) (rate(http_requests_total[5m]))` would sum the request rates for all instances within the same `job`, `status`, etc., effectively giving you the total rate per job/status combination, but ignoring the individual instance breakdown. This is useful when you want to aggregate away a specific dimension that is too granular, like an individual pod or container ID.

A common mistake is forgetting the `by` or `without` clause when aggregation is desired. If you simply write `sum(rate(http_requests_total[5m]))`, you'll get a single number. If you intended to see the sum per job, you'd be missing the breakdown. Another mistake is including too many labels in `by` or `without`, which might either prevent proper aggregation or remove too much context. Always think about the desired granularity of your output.

Let's consider a practical scenario. Suppose you have `node_cpu_seconds_total` which has labels like `instance`, `cpu`, and `mode`. If you want to calculate the total CPU utilization percentage *per instance*, you'd first get the rate of CPU seconds, then sum it up.
A common pattern for CPU utilization is to calculate the rate of `idle` CPU seconds and subtract it from 1 (representing 100% CPU time).
`1 - sum by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m]))`
This query first calculates the 5-minute rate of idle CPU seconds for each CPU and instance. Then, `sum by (instance)` aggregates these rates for all CPUs on a given instance, effectively giving you the total idle CPU rate per instance. Finally, subtracting this from 1 gives you the total busy CPU rate per instance.

Another powerful aggregation is `count by (job) (up)`. This query would count how many targets are `up` for each `job`, giving you a quick overview of the health of your services. Similarly, `topk(5, sum by (job) (rate(http_requests_total[5m])))` would show you the top 5 jobs by HTTP request rate, which is excellent for identifying your busiest services.

When combining aggregation with arithmetic operations, be mindful of "vector matching." If you have two instant vectors and apply a binary operator (like `+`, `-`, `/`), Prometheus tries to match elements from both vectors based on their labels. If labels don't match, the operation might not produce the expected results or might drop series. For example, if you have `vector_A{label1="a"} + vector_B{label1="b"}`, they won't match. If they both had `label1="a"`, they would. This becomes particularly important when calculating ratios, like error rates.

For example, to calculate the error rate (5xx errors divided by total requests) per job:
`sum by (job) (rate(http_requests_total{status=~"5.."}[5m])) / sum by (job) (rate(http_requests_total[5m]))`
Here, we first aggregate the 5xx error rates by `job` and the total request rates by `job`. Then, Prometheus performs a vector matching operation on the `job` label to divide the corresponding error rate by the total rate for each job. This results in a series showing the error percentage per job.

Understanding how `by` and `without` interact with aggregation operators is fundamental to transforming raw metrics into meaningful, high-level indicators suitable for dashboards and alerts. It allows you to control the granularity of your data, focusing on what matters most for your specific monitoring needs.

#### Key concepts
*   **Aggregation Operators:** Functions that combine multiple time series into fewer time series based on their values (e.g., `sum()`, `avg()`, `max()`, `min()`, `count()`).
*   **`sum()`:** Aggregation operator that calculates the sum of all values in the input vector.
*   **`avg()`:** Aggregation operator that calculates the average of all values in the input vector.
*   **`max()`:** Aggregation operator that finds the maximum value in the input vector.
*   **`min()`:** Aggregation operator that finds the minimum value in the input vector.
*   **`count()`:** Aggregation operator that counts the number of elements (time series) in the input vector.
*   **`by` clause:** Used with aggregation operators to specify which labels to *keep* in the output, grouping series by these labels.
*   **`without` clause:** Used with aggregation operators to specify which labels to *remove* from the output, aggregating across these labels.
*   **Vector Matching:** The process by which PromQL matches elements from two instant vectors when a binary operator is applied, typically based on common labels.
*   **`topk(k, vector)`:** Aggregation operator that returns the `k` elements with the largest values.
*   **`bottomk(k, vector)`:** Aggregation operator that returns the `k` elements with the smallest values.

#### Hands-on activity
**Activity: Aggregate and Group Metrics**

1.  **Access Prometheus UI:** Open your Prometheus server's web UI (e.g., `http://localhost:9090`).
2.  **Total Request Rate:** Query `sum(rate(http_requests_total[5m]))`. Observe the single value representing the total rate across all services.
3.  **Request Rate by Job:** Now, group by the `job` label: `sum by (job) (rate(http_requests_total[5m]))`. Notice how the output now shows a separate series for each unique `job`.
4.  **Request Rate without Instance:** Try `sum without (instance) (rate(http_requests_total[5m]))`. How does this differ from the previous query if you have multiple instances per job?
5.  **Calculate Per-Instance CPU Utilization:**
    *   First, get the rate of CPU seconds for all modes: `rate(node_cpu_seconds_total[5m])`.
    *   Now, calculate the total CPU seconds *per instance, per mode*: `sum by (instance, mode) (rate(node_cpu_seconds_total[5m]))`.
    *   Finally, calculate the *total busy CPU percentage per instance*: `1 - sum by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m]))`. This is a common and powerful query.
6.  **Count Up Targets by Job:** Query `count by (job) (up)`. This will show you how many targets are currently reporting as `up` for each configured job.
7.  **Top 3 Busiest Jobs:** Try `topk(3, sum by (job) (rate(http_requests_total[5m])))` to identify your top 3 busiest services by request rate.

**Expected Outcome:** You will successfully use `sum()` with `by` and `without` clauses to aggregate metrics, transforming raw data into meaningful, grouped insights. You'll be able to calculate per-instance CPU utilization and identify top performers using `topk()`.

#### Assessment idea
1.  **Question:** You are monitoring a Kubernetes cluster and want to know the *average memory usage* (in bytes) across all containers *per namespace*. The metric `container_memory_usage_bytes` has labels `namespace` and `container`. Which PromQL query would achieve this?
    a) `avg(container_memory_usage_bytes)`
    b) `avg by (namespace) (container_memory_usage_bytes)`
    c) `avg without (container) (container_memory_usage_bytes)`
    d) `sum by (namespace) (container_memory_usage_bytes)`

    **Correct Answer:** b) `avg by (namespace) (container_memory_usage_bytes)`
    **Explanation:** Option (b) correctly uses the `avg()` aggregation operator to calculate the average, and the `by (namespace)` clause ensures that the aggregation is performed for each unique `namespace` label, retaining that label in the output while averaging across all containers within that namespace. Option (a) would give a single average for all containers across all namespaces. Option (c) would achieve a similar result to (b) but explicitly removes the `container` label before averaging, which is functionally equivalent in this specific case but `by (namespace)` is more direct for "per namespace". Option (d) would give the *sum* of memory usage, not the average.

2.  **Question:** A critical application exposes a counter metric `app_errors_total`. You need to identify the top 5 instances that have generated the highest *rate of errors* over the last 15 minutes. Write the PromQL query.

    **Correct Answer:** `topk(5, sum by (instance) (rate(app_errors_total[15m])))`
    **Explanation:** First, `rate(app_errors_total[15m])` calculates the per-second error rate for each individual `app_errors_total` time series over the last 15 minutes. Then, `sum by (instance)` aggregates these rates for all error types or other labels, giving the total error rate per instance. Finally, `topk(5, ...)` selects the 5 instances with the highest aggregated error rates.

#### AI generation note
Design a 15-minute interactive lab walkthrough. Start with a Prometheus UI demo showing `sum(rate(http_requests_total[5m]))` to illustrate basic aggregation. Then, guide the learner through applying `sum by (job)` and `sum without (instance)` to the same metric, visually explaining how the `by` and `without` clauses change the output labels and grouping. Introduce `count by (job) (up)` as another example. Next, walk through the complex CPU utilization example: `1 - sum by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m]))`, breaking down each step of the query. Include a section on `topk()` with a practical example. The lab should feature interactive code snippets where learners can modify labels or durations and see immediate results in a simulated Prometheus UI. Emphasize the importance of choosing the right grouping labels.

### Chapter 3.4 — Combining Queries: Binary Operators and Subqueries

#### Learning objectives
*   Apply arithmetic and logical binary operators to combine instant vectors.
*   Understand and utilize vector matching types: one-to-one, many-to-one, and one-to-many.
*   Master the `on()` and `group_left()` / `group_right()` clauses for precise vector matching.
*   Construct and interpret subqueries to perform calculations over historical ranges within a single query.
*   Build complex PromQL expressions to derive advanced metrics and solve real-world monitoring challenges.

#### Detailed lesson content
As you become more proficient with PromQL, you'll find that individual metric selections and aggregations are often just building blocks for more sophisticated insights. The true power of PromQL emerges when you start combining the results of multiple queries using binary operators and, for advanced scenarios, subqueries. This allows you to perform calculations like error rates, resource utilization percentages, or comparisons between different services, all within a single, elegant PromQL expression.

PromQL supports standard arithmetic binary operators (`+`, `-`, `*`, `/`, `%`, `^`) and comparison operators (`==`, `!=`, `>`, `<`, `>=`, `<=`). These operators can be applied between two instant vectors, a scalar and an instant vector, or two scalars. When applied between two instant vectors, Prometheus performs "vector matching." This is a crucial concept: Prometheus attempts to match elements from the left-hand side (LHS) vector with elements from the right-hand side (RHS) vector based on their labels.

By default, Prometheus performs "one-to-one" matching. For each series in the LHS, it looks for exactly one series in the RHS that has identical label sets (excluding the metric name). If a match is found, the operation is performed, and the resulting series inherits the labels from both. If no match or multiple matches are found, the series is dropped. This strict matching can be too restrictive for many real-world scenarios, especially after aggregation where labels might have been removed.

To gain more control over vector matching, PromQL provides the `on()` and `group_left()` / `group_right()` clauses.
The `on(label1, label2, ...)` clause explicitly tells Prometheus which labels to use for matching. Only series that have identical values for *all* specified `on` labels will be matched. Any other labels are ignored for matching purposes.
For example, if you want to calculate the error rate per job, you might have:
`sum by (job) (rate(http_requests_total{status=~"5.."}[5m])) / on (job) sum by (job) (rate(http_requests_total[5m]))`
Here, `on (job)` ensures that the division happens only between series that share the same `job` label, correctly calculating the error rate for each job.

Sometimes, you need to match one series to multiple series (one-to-many) or multiple series to one (many-to-one). This is common when you have an aggregated metric on one side and a more detailed metric on the other. This is where `group_left()` and `group_right()` come in.
`group_left()` (or `group_right()`) is used with `on()` to specify that elements from the LHS (or RHS) vector should be matched with *multiple* elements from the RHS (or LHS) vector. When `group_left()` is used, the resulting series will inherit all labels from the LHS, plus any labels from the RHS that were *not* used for matching.
Consider calculating the percentage of CPU usage for each CPU core on an instance:
`100 * (sum by (instance, cpu) (rate(node_cpu_seconds_total{mode!="idle", mode!="iowait", mode!="steal"}[5m])) / on (instance, cpu) group_left() sum by (instance, cpu) (rate(node_cpu_seconds_total[5m])))`
This complex query first calculates the rate of busy CPU seconds per instance and CPU core. It then divides this by the total CPU seconds rate per instance and CPU core. The `on (instance, cpu)` ensures matching happens on these labels, and `group_left()` allows the division to occur even if the total CPU seconds metric might have additional labels that the busy CPU metric doesn't. This is a common pattern for deriving percentages.

A common mistake with vector matching is not specifying `on()` or `group_left()`/`group_right()` when needed, leading to dropped series or incorrect calculations. If your query returns fewer series than expected, or empty results, vector matching is often the culprit. Always verify the labels present in both vectors before applying binary operators.

Beyond binary operators, PromQL also supports logical set operators: `and`, `or`, and `unless`.
*   `vector1 and vector2`: Returns elements from `vector1` that have matching elements in `vector2` (based on identical label sets).
*   `vector1 or vector2`: Returns all elements from `vector1` and all elements from `vector2` that don't have matching elements in `vector1`.
*   `vector1 unless vector2`: Returns elements from `vector1` that do *not* have matching elements in `vector2`.
These are useful for filtering or combining sets of time series. For example, `up{job="api-server"} and on (instance) up{job="database"}` would return `up` metrics for `api-server` instances *only if* there's a database instance with the same `instance` label.

Finally, let's introduce "subqueries." Subqueries allow you to run a query over a historical range and then perform another operation on the results of that historical query, all within a single expression. The syntax is `query_expression[range:resolution]`. The `range` specifies how far back the inner query should look, and `resolution` specifies the step interval for the inner query.
A powerful use case for subqueries is calculating the average of a rate over a longer period. For instance, if `rate(http_requests_total[1m])` gives you the 1-minute request rate, you might want to know the *average* of that 1-minute rate over the last hour.
`avg_over_time(rate(http_requests_total[1m])[1h:1m])`
Here, `rate(http_requests_total[1m])` is the inner query, which calculates the 1-minute rate at 1-minute intervals over the last hour. The `avg_over_time()` then takes these results and calculates their average. This is different from `rate(http_requests_total[1h])`, which would give you a single average rate over the entire hour. Subqueries allow for more nuanced historical analysis, like "what was the maximum 5-minute average CPU usage over the last 24 hours?"
`max_over_time(avg_over_time(node_cpu_seconds_total{mode!="idle"}[5m])[24h:5m])`
Subqueries can be resource-intensive, especially with large ranges and fine resolutions, so use them judiciously. They are an advanced feature for when simpler range queries or aggregations aren't sufficient.

Mastering these advanced PromQL features allows you to derive complex, actionable insights from your metrics. You can calculate precise error rates, resource saturation, and performance trends, which are invaluable for troubleshooting, capacity planning, and building comprehensive monitoring dashboards.

#### Key concepts
*   **Binary Operators:** Arithmetic (`+`, `-`, `*`, `/`, `%`, `^`) and comparison (`==`, `!=`, `>`, `<`, `>=`, `<=`) operators used to combine instant vectors or scalars.
*   **Vector Matching:** The process by which PromQL matches elements from two instant vectors based on their labels when a binary operator is applied.
*   **One-to-one Matching:** Default vector matching where each series in the LHS must have exactly one matching series in the RHS based on identical labels.
*   **`on(label1, ...)` clause:** Explicitly specifies which labels to use for vector matching, ignoring others.
*   **`group_left()` / `group_right()` clauses:** Used with `on()` to enable one-to-many or many-to-one vector matching, allowing elements from one side to match multiple elements from the other.
*   **Logical Set Operators:**
    *   `and`: Returns elements from the LHS that have matching elements in the RHS.
    *   `or`: Returns all elements from the LHS and non-matching elements from the RHS.
    *   `unless`: Returns elements from the LHS that do *not* have matching elements in the RHS.
*   **Subquery:** A PromQL query that evaluates another query over a historical range, allowing for operations on historical time series data within a single expression. Syntax: `query_expression[range:resolution]`.

#### Hands-on activity
**Activity: Construct Complex Queries with Binary Operators and Subqueries**

1.  **Access Prometheus UI:** Open your Prometheus server's web UI (e.g., `http://localhost:9090`).
2.  **Calculate Error Rate per Job:**
    *   Get 5xx error rates: `sum by (job) (rate(http_requests_total{status=~"5.."}[5m]))`
    *   Get total request rates: `sum by (job) (rate(http_requests_total[5m]))`
    *   Combine them: `sum by (job) (rate(http_requests_total{status=~"5.."}[5m])) / on (job) sum by (job) (rate(http_requests_total[5m]))`
    *   Multiply by 100 for percentage: `100 * (sum by (job) (rate(http_requests_total{status=~"5.."}[5m])) / on (job) sum by (job) (rate(http_requests_total[5m])))`
3.  **Identify Instances with High Load AND Low Memory:**
    *   Assume `node_load1 > 5` and `node_memory_MemAvailable_bytes < 100000000` (100MB).
    *   Query: `node_load1 > 5 and on (instance) node_memory_MemAvailable_bytes < 100000000`
    *   Observe how `and on (instance)` filters for instances that satisfy both conditions.
4.  **Average 5-minute CPU Utilization over 1 Hour (Subquery):**
    *   First, get the 5-minute average CPU utilization (non-idle): `1 - avg_over_time(node_cpu_seconds_total{mode="idle"}[5m])` (simplified for this exercise).
    *   Now, apply `avg_over_time` to this 5-minute average over the last hour: `avg_over_time((1 - avg_over_time(node_cpu_seconds_total{mode="idle"}[5m]))[1h:5m])`
    *   Compare this to a simple `1 - avg_over_time(node_cpu_seconds_total{mode="idle"}[1h])`. Discuss the difference.

**Expected Outcome:** You will successfully combine multiple PromQL expressions using binary operators and vector matching to calculate complex metrics like error rates. You'll also experiment with logical operators to filter series and construct a subquery to perform multi-stage historical analysis.

#### Assessment idea
1.  **Question:** You have two metrics: `api_requests_total` (a counter for total API requests) and `api_errors_total` (a counter for API errors). You want to calculate the *percentage of successful API requests* for each `service` label, over the last 5 minutes. Which PromQL query is correct?
    a) `100 * (sum by (service) (rate(api_requests_total[5m])) - sum by (service) (rate(api_errors_total[5m]))) / on (service) sum by (service) (rate(api_requests_total[5m]))`
    b) `100 * (1 - (sum by (service) (rate(api_errors_total[5m])) / on (service) sum by (service) (rate(api_requests_total[5m]))))`
    c) `100 * (sum by (service) (rate(api_requests_total[5m])) / sum by (service) (rate(api_errors_total[5m])))`
    d) `rate(api_requests_total[5m]) - rate(api_errors_total[5m])`

    **Correct Answer:** b) `100 * (1 - (sum by (service) (rate(api_errors_total[5m])) / on (service) sum by (service) (rate(api_requests_total[5m]))))`
    **Explanation:** This query correctly calculates the error rate first: `(rate(api_errors_total[5m])) / (rate(api_requests_total[5m]))`, aggregated `by (service)` and matched `on (service)`. Subtracting this error rate from 1 gives the success rate (as a fraction), which is then multiplied by 100 to get a percentage. Option (a) performs subtraction before division, which is mathematically incorrect for percentages. Option (c) calculates the ratio of total requests to errors, not the success rate. Option (d) would give the difference in rates, not a percentage, and wouldn't aggregate by service.

2.  **Question:** You want to find out the *maximum 1-minute average network receive bandwidth* (in bytes/second) observed over the *last 6 hours* for any network interface (`device`). The metric is `node_network_receive_bytes_total` (a counter). Write the PromQL query using a subquery.

    **Correct Answer:** `max_over_time(rate(node_network_receive_bytes_total[1m])[6h:1m])`
    **Explanation:** The inner query `rate(node_network_receive_bytes_total[1m])` calculates the 1-minute average network receive bandwidth. The subquery `[6h:1m]` then evaluates this rate every 1 minute over the last 6 hours, creating a range vector of 1-minute rates. Finally, `max_over_time()` finds the maximum value within this range vector, thus giving the peak 1-minute average bandwidth over the 6-hour period.

#### AI generation note
Create a 15-minute live coding video. Begin by demonstrating basic binary operations (`+`, `-`) between two simple instant vectors, highlighting the default one-to-one matching behavior and what happens when labels don't match. Then, introduce `on()` with the error rate calculation example: `sum by (job) (rate(http_requests_total{status=~"5.."}[5m])) / on (job) sum by (job) (rate(http_requests_total[5m]))`. Clearly explain how `on (job)` ensures correct matching. Next, introduce `group_left()` with a more complex example like calculating per-CPU utilization percentage, explaining when and why `group_left()` is necessary. Dedicate a segment to logical operators (`and`, `or`, `unless`) with practical filtering examples. Conclude by demonstrating subqueries using the "average of 1-minute rate over an hour" example, showing the query in the Prometheus UI and explaining the `[range:resolution]` syntax. Include interactive pauses for reflection on matching logic and subquery structure.
---

## Module 4: Advanced Prometheus: Exporters & Alerting

Welcome to Module 4, where we'll elevate our Prometheus skills beyond core server setup and basic querying. In this module, we'll dive deep into how Prometheus collects metrics from a vast array of services and systems using specialized tools called exporters. We'll explore common, powerful exporters like Node Exporter and cAdvisor, learn how to create our own custom exporters for unique application needs, and understand the role of the Pushgateway for ephemeral jobs. Finally, we'll tackle the critical aspect of observability: defining robust alerting rules within Prometheus and managing them effectively with Alertmanager to ensure you're always informed when issues arise.

### Chapter 4.1 — Introduction to Prometheus Exporters

#### Learning objectives
*   Explain the fundamental concept and purpose of Prometheus exporters in a monitoring architecture.
*   Describe the pull-based metric collection model that Prometheus uses with exporters.
*   Identify different categories of Prometheus exporters and their typical use cases.
*   Understand the basic architecture of Prometheus interacting with an exporter and a monitored target.
*   Configure Prometheus to scrape metrics from a newly introduced exporter.

#### Detailed lesson content
Prometheus operates on a pull model, meaning the Prometheus server actively scrapes metrics from configured targets. But what exactly are these targets, and how do they expose their metrics in a format Prometheus understands? This is where **exporters** come into play. An exporter is essentially a small service that runs alongside or on the system you want to monitor. Its primary job is to expose existing metrics, or generate new ones, in the Prometheus text-based exposition format over an HTTP endpoint, typically on the `/metrics` path.

Think of an exporter as a translator. Most applications and systems weren't originally designed to speak "Prometheus metrics." They might expose their internal state through logs, proprietary APIs, or even just internal memory structures. An exporter takes these native metrics, converts them into Prometheus-compatible time series data, and makes them available for Prometheus to scrape. This standardized approach simplifies metric collection immensely, as Prometheus only needs to know how to talk to exporters, not every single application's unique interface.

The pull model, facilitated by exporters, offers several advantages. It gives Prometheus control over the scrape interval, reducing the load on monitored targets by not requiring them to constantly push data. It also makes it easier to discover new targets through service discovery mechanisms, which we'll touch upon later. When Prometheus scrapes an exporter, it makes an HTTP GET request to the exporter's `/metrics` endpoint. The exporter responds with a plain text output containing a list of metrics, each with a name, optional labels, and a current value, along with help text and type information.

For example, if you were to `curl` an exporter's metrics endpoint, you might see output similar to this:
```
# HELP go_gc_duration_seconds A summary of the GC invocation durations.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 0.000109919
go_gc_duration_seconds{quantile="0.25"} 0.000122485
go_gc_duration_seconds{quantile="0.5"} 0.00013917
go_gc_duration_seconds{quantile="0.75"} 0.000155094
go_gc_duration_seconds{quantile="1"} 0.00020473
go_gc_duration_seconds_sum 0.000918713
go_gc_duration_seconds_count 6
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 10
```
Each line starting with `# HELP` provides a description of the metric, and `# TYPE` indicates its type (e.g., `gauge`, `counter`, `summary`, `histogram`). The subsequent lines are the actual metric values with their labels.

Exporters come in various forms:
*   **Host-level Exporters:** These monitor the underlying operating system and hardware, providing metrics on CPU utilization, memory usage, disk I/O, network traffic, etc. The Node Exporter is the quintessential example here.
*   **Application-specific Exporters:** Many popular applications like databases (MySQL, PostgreSQL), message queues (Kafka, RabbitMQ), web servers (Apache, Nginx), and cloud services have dedicated exporters. These provide insights into the application's internal workings, such as query rates, connection counts, message backlog, or request latencies.
*   **Third-party Service Exporters:** For services that don't directly expose Prometheus metrics, there are exporters that translate their native APIs into Prometheus format. Examples include exporters for cloud providers (AWS, GCP, Azure) or specific SaaS tools.
*   **Custom Exporters:** When no off-the-shelf exporter exists for your unique application or system, you can build your own. We'll explore this in a later chapter.

Integrating an exporter into your monitoring setup involves two main steps: first, running the exporter itself, and second, configuring Prometheus to scrape it. For instance, if you run an exporter on `localhost:9100`, your `prometheus.yml` configuration would need an entry like this:
```yaml
scrape_configs:
  - job_name: 'my_exporter'
    static_configs:
      - targets: ['localhost:9100']
```
After updating `prometheus.yml`, you'd need to reload Prometheus (e.g., `kill -HUP <prometheus_pid>` or `docker kill -s HUP <prometheus_container_id>`) for the changes to take effect. It's a common mistake to forget reloading Prometheus, leading to the new targets not appearing in the UI. Another common pitfall is port conflicts if multiple services try to bind to the same port, or firewall rules preventing Prometheus from reaching the exporter. Always ensure the exporter's port is open and accessible from the Prometheus server.

Understanding exporters is foundational to building a comprehensive monitoring solution with Prometheus. They are the bridge between your diverse infrastructure and Prometheus's powerful time-series database and querying capabilities.

#### Key concepts
*   **Exporter:** A service that exposes metrics in the Prometheus exposition format over an HTTP endpoint, typically `/metrics`.
*   **Pull Model:** Prometheus's primary method of collecting metrics, where the server actively scrapes data from targets (exporters).
*   **Prometheus Exposition Format:** A simple, human-readable text format for metrics, including `# HELP`, `# TYPE`, metric name, labels, and value.
*   **Target:** An endpoint (usually an exporter's `/metrics` path) that Prometheus scrapes for metrics.
*   **Scrape Configuration:** The section in `prometheus.yml` that defines which targets Prometheus should scrape and at what intervals.

#### Hands-on activity
**Objective:** Run a simple test exporter and configure Prometheus to scrape it.

1.  **Start a dummy exporter:** For this exercise, we'll use a simple HTTP server that exposes a static Prometheus metric. You can use `netcat` or a simple Python script.
    
    *   **Using `netcat` (simple, but requires manual restart):**
        Open a terminal and run:
        ```bash
        echo -e '# HELP my_dummy_metric A dummy metric for testing.\n# TYPE my_dummy_metric gauge\nmy_dummy_metric 42' | nc -l -p 9100 -c 'echo -e "HTTP/1.1 200 OK\r\nContent-Type: text/plain; version=0.0.4; charset=utf-8\r\n\r\n$(cat)"'
        ```
        This command will listen on port 9100 and serve the dummy metric. Note that `netcat` will exit after serving one request, so you'd need to restart it for each scrape.
    
    *   **Using a simple Python Flask app (more robust):**
        Create a file named `dummy_exporter.py`:
        ```python
        from flask import Flask, Response
        import random

        app = Flask(__name__)

        @app.route('/metrics')
        def metrics():
            # Generate a random value for demonstration
            value = random.randint(1, 100)
            metric_output = f"""
# HELP my_dummy_metric A dummy metric for testing.
# TYPE my_dummy_metric gauge
my_dummy_metric{{instance="test-instance", region="us-east-1"}} {value}
# HELP another_dummy_counter A simple counter metric.
# TYPE another_dummy_counter counter
another_dummy_counter 12345
            """
            return Response(metric_output, mimetype='text/plain; version=0.0.4; charset=utf-8')

        if __name__ == '__main__':
            app.run(host='0.0.0.0', port=9100)
        ```
        Install Flask (`pip install Flask`) and run it: `python dummy_exporter.py`. This will keep serving metrics on `http://localhost:9100/metrics`.
    
2.  **Verify the exporter:** Open your browser or another terminal and navigate to `http://localhost:9100/metrics`. You should see the dummy metric output.
3.  **Configure Prometheus:** Add the following `scrape_config` to your `prometheus.yml` file:
    ```yaml
    # ... other scrape_configs ...
    - job_name: 'dummy_exporter'
      static_configs:
        - targets: ['localhost:9100']
    ```
4.  **Reload Prometheus:** Send a `SIGHUP` signal to your Prometheus process. If running in Docker:
    ```bash
    docker kill -s HUP <prometheus_container_name_or_id>
    ```
    If running directly:
    ```bash
    kill -HUP $(pgrep prometheus)
    ```
5.  **Verify in Prometheus UI:** Go to `http://localhost:9090/targets` in your browser. You should see a `dummy_exporter` job with `localhost:9100` as a target, showing a "UP" state. Then, navigate to `http://localhost:9090/graph` and query `my_dummy_metric` to see the collected data.

#### Assessment idea
1.  **Question:** A Prometheus server is configured to scrape an exporter running on `my-app-server:8080/metrics`. However, no metrics are appearing in Prometheus. Which of the following is *least likely* to be the cause?
    A) The `scrape_config` in `prometheus.yml` has an incorrect `job_name`.
    B) A firewall on `my-app-server` is blocking port `8080`.
    C) The Prometheus server has not been reloaded after updating `prometheus.yml`.
    D) The exporter service on `my-app-server` is not running or crashed.

    **Answer:** A) The `scrape_config` having an incorrect `job_name` is the least likely cause. While an incorrect `job_name` might make it harder to identify the metrics, it would not prevent Prometheus from scraping the target if the `targets` configuration is correct and the exporter is reachable. The other options (firewall, no reload, exporter not running) would directly prevent Prometheus from successfully scraping the target and collecting metrics.

2.  **Question:** Describe the primary benefit of the Prometheus "pull model" for metric collection compared to a "push model" (where applications send metrics to a central collector). Provide an example scenario where the pull model is particularly advantageous.

    **Answer:** The primary benefit of the Prometheus "pull model" is that it centralizes control over metric collection at the Prometheus server. This allows Prometheus to manage scrape intervals, discover targets dynamically (e.g., via Kubernetes service discovery), and reduce the operational burden on the monitored applications, which only need to expose an HTTP endpoint. It also makes it easier to debug, as Prometheus logs exactly which targets it's trying to scrape and any errors encountered.

    An example scenario where the pull model is particularly advantageous is in a dynamic, cloud-native environment with many ephemeral services, such as Kubernetes. Instead of each new pod needing to know where to push its metrics, Prometheus (or a sidecar/agent) can discover these pods through Kubernetes' API and automatically start scraping them. This simplifies configuration and management significantly, as new services are automatically monitored without manual intervention.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with an animated diagram illustrating the Prometheus pull model: Prometheus server reaching out to an "Exporter" which translates "Application Metrics" into "Prometheus Metrics" and sends them back. Then, transition to a live terminal demo showing `curl http://localhost:9100/metrics` to a running dummy Python Flask exporter (code for the Flask app should be shown on screen). Follow with a split-screen view showing how to add the `scrape_config` to `prometheus.yml` on the left and reloading Prometheus via `docker kill -s HUP` on the right. Conclude with a quick view of the Prometheus UI's `/targets` page and a basic PromQL query for `my_dummy_metric`. Emphasize common mistakes like forgetting to reload Prometheus or firewall issues. Include a reflection prompt asking learners to consider the benefits of the pull model for large-scale deployments.

---

### Chapter 4.2 — Common Exporters: Node Exporter & cAdvisor

#### Learning objectives
*   Install and configure the Prometheus Node Exporter on a Linux host.
*   Identify and interpret key host-level metrics provided by the Node Exporter (CPU, memory, disk I/O, network).
*   Deploy and configure cAdvisor for collecting container resource usage metrics.
*   Explain the types of metrics cAdvisor collects and how they differ from Node Exporter metrics.
*   Integrate both Node Exporter and cAdvisor into a Prometheus `scrape_config`.

#### Detailed lesson content
While the previous chapter introduced the concept of exporters, this chapter dives into two of the most fundamental and widely used exporters: **Node Exporter** for host-level metrics and **cAdvisor** for container-level metrics. These two tools are often the first line of defense in understanding the health and performance of your underlying infrastructure.

The **Node Exporter** is a lightweight daemon that runs on Linux, macOS, or Windows servers to expose a vast array of hardware and OS metrics. It's designed to give you deep insights into the server's health, covering aspects like:
*   **CPU Usage:** Total CPU time, user vs. system time, idle time, I/O wait.
*   **Memory Usage:** Total, free, used, buffered, cached memory.
*   **Disk I/O:** Read/write operations, bytes transferred, I/O queue length.
*   **Network Statistics:** Bytes received/transmitted, packet errors, dropped packets per network interface.
*   **Filesystem Usage:** Disk space utilization, inode usage.
*   **Load Average:** System load over 1, 5, and 15 minutes.
*   **Process Statistics:** Number of running, blocked, or zombie processes.

Installing Node Exporter on a Linux system typically involves downloading the latest release binary, extracting it, and running it, often as a systemd service for persistence.

Here's a common installation sequence for a Linux server:
```bash
# 1. Create a user for node_exporter
sudo useradd --no-create-home --shell /bin/false node_exporter

# 2. Download the latest Node Exporter binary (check GitHub releases for the latest version)
wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz

# 3. Extract the archive
tar xvfz node_exporter-1.7.0.linux-amd64.tar.gz

# 4. Move the binary to /usr/local/bin
sudo mv node_exporter-1.7.0.linux-amd64/node_exporter /usr/local/bin/

# 5. Set ownership
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter

# 6. Create a systemd service file for persistence: /etc/systemd/system/node_exporter.service
sudo tee /etc/systemd/system/node_exporter.service > /dev/null <<EOF
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
EOF

# 7. Reload systemd, enable, and start the service
sudo systemctl daemon-reload
sudo systemctl enable node_exporter
sudo systemctl start node_exporter

# 8. Verify it's running and exposing metrics (default port 9100)
curl http://localhost:9100/metrics
```
Once running, you'd add a `scrape_config` to your `prometheus.yml` to collect its metrics:
```yaml
scrape_configs:
  - job_name: 'node_exporter'
    static_configs:
      - targets: ['<your_server_ip>:9100'] # Replace with the actual IP/hostname
```
Common mistakes with Node Exporter include forgetting to open port 9100 in the server's firewall, or running it without proper user permissions, which might limit the metrics it can collect. Always ensure the `node_exporter` user has read access to necessary system files if you're customizing collectors.

Next, let's look at **cAdvisor (Container Advisor)**. While Node Exporter gives you insights into the host OS, cAdvisor focuses specifically on containers running on that host. It's an open-source tool from Google that automatically discovers all containers on a given machine and collects detailed resource usage statistics like CPU, memory, filesystem, and network usage per container. This is crucial for understanding the resource consumption of individual applications within a containerized environment.

cAdvisor is typically run as a Docker container itself, making its deployment straightforward:
```bash
sudo docker run \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:rw \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  --volume=/dev/disk/:/dev/disk:ro \
  --publish=8080:8080 \
  --detach=true \
  --name=cadvisor \
  gcr.io/cadvisor/cadvisor:latest
```
This command runs cAdvisor, mounts necessary host directories for it to gather container information, and exposes its web UI and metrics endpoint on port 8080. You can then access its metrics at `http://localhost:8080/metrics`.

To scrape cAdvisor metrics with Prometheus, you'd add another `scrape_config`:
```yaml
scrape_configs:
  - job_name: 'cadvisor'
    static_configs:
      - targets: ['<your_server_ip>:8080'] # Replace with the actual IP/hostname
```
The key difference between Node Exporter and cAdvisor metrics lies in their scope. Node Exporter provides aggregated host-level metrics (e.g., total CPU usage of the host), while cAdvisor provides granular, per-container metrics (e.g., CPU usage of `my-nginx-container`). When combined, they offer a powerful holistic view: Node Exporter tells you if the host is overloaded, and cAdvisor tells you *which container* is causing the overload. A common mistake is to only use Node Exporter and then wonder why a specific application is slow, when the problem might be a single runaway container. Conversely, relying solely on cAdvisor might hide underlying host issues not directly related to container resource consumption.

For safety, always ensure that any exporter you deploy is running with the minimum necessary privileges. While Node Exporter often needs root access to gather certain metrics, it should be run as a non-privileged user if possible, or with specific capabilities granted. Similarly, cAdvisor needs access to Docker's internal data, which is why it requires specific volume mounts. Understand the implications of these permissions.

#### Key concepts
*   **Node Exporter:** A Prometheus exporter that collects and exposes host-level operating system and hardware metrics (CPU, memory, disk, network, etc.).
*   **cAdvisor (Container Advisor):** A Prometheus exporter that collects and exposes resource usage statistics for running containers (CPU, memory, filesystem, network per container).
*   **Systemd Service:** A mechanism on Linux systems to manage daemon processes, ensuring they start on boot and restart if they crash.
*   **Host-level Metrics:** Aggregated metrics about the entire server or virtual machine.
*   **Container-level Metrics:** Granular metrics specific to individual running containers.

#### Hands-on activity
**Objective:** Install Node Exporter and run cAdvisor on a Linux VM (or local Docker environment) and configure Prometheus to scrape both.

1.  **Set up your environment:**
    *   Ensure you have a Linux VM (e.g., Ubuntu, CentOS) or a Docker Desktop environment running.
    *   Your Prometheus server should already be running and accessible.
2.  **Install Node Exporter:**
    *   Follow the installation steps provided in the "Detailed lesson content" section for Node Exporter on your Linux VM.
    *   Verify it's running by checking `sudo systemctl status node_exporter` and `curl http://localhost:9100/metrics`.
3.  **Run cAdvisor:**
    *   Execute the `docker run` command for cAdvisor provided in the "Detailed lesson content" section on your Linux VM or Docker host.
    *   Verify it's running by checking `docker ps` and `curl http://localhost:8080/metrics`.
4.  **Configure Prometheus:**
    *   Edit your `prometheus.yml` file to add `scrape_configs` for both Node Exporter and cAdvisor. Replace `<your_server_ip>` with the actual IP address of your VM or `localhost` if running everything on the same machine.
    ```yaml
    scrape_configs:
      - job_name: 'node_exporter'
        static_configs:
          - targets: ['<your_server_ip>:9100']

      - job_name: 'cadvisor'
        static_configs:
          - targets: ['<your_server_ip>:8080']
    ```
5.  **Reload Prometheus:**
    ```bash
    docker kill -s HUP <prometheus_container_name_or_id> # if Prometheus is in Docker
    # OR
    kill -HUP $(pgrep prometheus) # if Prometheus is running directly
    ```
6.  **Verify in Prometheus UI:**
    *   Go to `http://localhost:9090/targets`. You should see both `node_exporter` and `cadvisor` jobs with "UP" targets.
    *   Navigate to `http://localhost:9090/graph` and try querying some metrics:
        *   `node_cpu_seconds_total` (from Node Exporter)
        *   `container_cpu_usage_seconds_total` (from cAdvisor)
    *   Experiment with `sum(rate(node_cpu_seconds_total{mode="idle"}[5m])) by (instance)` and `sum(rate(container_cpu_usage_seconds_total[5m])) by (name)` to see host and container CPU usage.

#### Assessment idea
1.  **Question:** You observe high `node_cpu_seconds_total` (indicating high host CPU usage) but low `container_cpu_usage_seconds_total` across all containers on a particular host. What is the most likely conclusion you can draw from this observation?
    A) The Node Exporter is misconfigured and reporting incorrect data.
    B) An application *outside* of the containers on that host is consuming significant CPU resources.
    C) The cAdvisor exporter is not running correctly and failing to collect container metrics.
    D) The host's CPU is faulty and needs replacement.

    **Answer:** B) An application *outside* of the containers on that host is consuming significant CPU resources. Node Exporter reports total host CPU usage, while cAdvisor reports CPU usage *by containers*. If the host CPU is high but container CPU is low, it implies that the CPU load is coming from processes running directly on the host, not within any monitored containers. Options A and C are possible but less likely given the specific observation of both metrics being present but disparate. Option D is a hardware conclusion that cannot be directly drawn from these metrics alone.

2.  **Question:** Describe a scenario where you would specifically choose to deploy cAdvisor alongside Node Exporter, and explain why both are necessary for comprehensive monitoring in that scenario.

    **Answer:** A scenario where both cAdvisor and Node Exporter are essential is when running multiple containerized applications on a single host, for example, a Docker host or a Kubernetes node.

    *   **Node Exporter** would be deployed to monitor the overall health and resource utilization of the *host machine itself*. This includes metrics like total available memory, disk I/O for the entire system, network traffic on the host's interfaces, and the overall system load average. This helps identify if the host itself is becoming a bottleneck or experiencing issues regardless of container activity.
    *   **cAdvisor** would be deployed to monitor the resource consumption of *individual containers* running on that host. It provides granular metrics for each container's CPU, memory, network, and disk usage.

    Both are necessary because they provide different levels of detail. Node Exporter tells you if the *house* is on fire (e.g., host CPU is 90%). cAdvisor tells you *which room* (container) is causing the fire (e.g., `my-web-app` container is consuming 80% of the CPU). Without Node Exporter, you might miss host-level issues not directly tied to container resource limits (e.g., a rogue process outside Docker). Without cAdvisor, you'd know the host is struggling but wouldn't know which specific container is responsible, making troubleshooting much harder. Together, they provide a complete picture from the hardware up to individual applications.

#### AI generation note
Create a 15-minute hands-on lab walkthrough video. Begin by demonstrating the installation and configuration of Node Exporter on a fresh Ubuntu VM, showing the `wget`, `tar`, `mv`, `chown`, and `systemctl` commands. Verify with `curl`. Then, show `docker run` for cAdvisor, verifying with `docker ps` and `curl`. The core of the video should be a live coding session where the instructor modifies `prometheus.yml` to add scrape configurations for both exporters, followed by reloading Prometheus. Conclude by navigating the Prometheus UI, showing the "Targets" page, and then querying `node_cpu_seconds_total` and `container_cpu_usage_seconds_total` in the graph view, explaining the difference in scope. Emphasize firewall considerations and user permissions as common pitfalls. Include an interactive element asking learners to identify the PromQL query for total free memory on a host.

---

### Chapter 4.3 — Custom Exporters & Pushgateway

#### Learning objectives
*   Identify scenarios where building a custom Prometheus exporter is necessary or beneficial.
*   Develop a basic custom exporter using a programming language (e.g., Python) to expose application-specific metrics.
*   Understand the purpose and use cases of the Prometheus Pushgateway.
*   Differentiate between using a standard exporter (pull model) and the Pushgateway (push model).
*   Configure Prometheus to scrape metrics from the Pushgateway.

#### Detailed lesson content
While a vast ecosystem of pre-built Prometheus exporters exists for common services, there will inevitably be situations where you need to monitor something unique to your application or environment. This is where the power of **custom exporters** comes into play. A custom exporter is simply a program you write that exposes metrics in the Prometheus exposition format over an HTTP endpoint. You might need a custom exporter for:
*   **Application-specific business metrics:** Metrics like "number of pending orders," "user login failures per minute," or "average shopping cart value."
*   **Internal application state:** Specific counters, gauges, or histograms that reflect the unique logic or performance characteristics of your custom code.
*   **Legacy systems:** Integrating with older systems that don't have existing exporters and expose data through non-standard APIs or log files.
*   **Metrics requiring complex logic:** When existing data needs significant processing or aggregation before being exposed as a Prometheus metric.

Building a custom exporter isn't as daunting as it sounds. Many programming languages have client libraries for Prometheus that simplify the process of creating and exposing metrics. Let's look at a simple Python example using the `prometheus_client` library.

First, install the library: `pip install prometheus_client Flask` (we'll use Flask for the web server).

Now, create a Python file, say `my_app_exporter.py`:
```python
from flask import Flask, Response
from prometheus_client import generate_latest, Counter, Gauge, Histogram
import random
import time

app = Flask(__name__)

# Define Prometheus metrics
# Counter: A metric that only ever goes up. Useful for counting events.
c = Counter('my_app_requests_total', 'Total number of HTTP requests to my app.')

# Gauge: A metric that represents a single numerical value that can arbitrarily go up and down.
g = Gauge('my_app_current_users', 'Current number of active users in my app.')

# Histogram: Samples observations (e.g., request durations) and counts them in configurable buckets.
h = Histogram('my_app_request_duration_seconds', 'Histogram of request durations in seconds.')

@app.route('/')
def hello_world():
    c.inc() # Increment the counter for each request
    return 'Hello, World!'

@app.route('/metrics')
def metrics():
    # Simulate some application logic that updates metrics
    g.set(random.randint(5, 50)) # Update current users gauge
    
    # Simulate a request duration
    with h.time():
        time.sleep(random.uniform(0.01, 0.5)) # Simulate work

    return Response(generate_latest(), mimetype='text/plain; version=0.0.4; charset=utf-8')

if __name__ == '__main__':
    # Start the Flask app, which will also expose metrics on /metrics
    app.run(host='0.0.0.0', port=8000)
```
To run this: `python my_app_exporter.py`. Then, you can access `http://localhost:8000/metrics` to see your custom metrics. Prometheus would scrape this just like any other exporter. The key safety note here is to ensure your custom exporter is robust, handles errors gracefully, and doesn't become a performance bottleneck for the application it's monitoring. Also, choose appropriate metric types (Counter, Gauge, Histogram, Summary) to accurately represent your data.

Now, let's address a different challenge: monitoring **short-lived, ephemeral jobs** or batch processes. Prometheus's pull model works perfectly for long-running services, but what if a script runs for a few seconds, generates some metrics, and then exits? By the time Prometheus tries to scrape it, the target is gone. This is where the **Pushgateway** comes in.

The Pushgateway is an intermediary service that allows ephemeral and batch jobs to *push* their metrics to it. The Pushgateway then holds these metrics, making them available for Prometheus to *pull* at its regular scrape interval. It acts as a cache for metrics from jobs that don't live long enough to be scraped directly.

**When to use Pushgateway:**
*   Batch jobs that run periodically and then terminate.
*   Cron jobs that execute and exit.
*   Serverless functions (though dedicated cloud monitoring solutions are often preferred).
*   Any short-lived process that cannot reliably expose an HTTP endpoint for Prometheus to scrape.

**When NOT to use Pushgateway:**
*   Long-running services (web servers, databases, microservices). These should always use direct exporters (pull model) because it's the idiomatic Prometheus way, offering better reliability and service discovery. Overusing Pushgateway for long-lived services can lead to stale metrics if the service stops pushing, and it complicates target management.

Deploying Pushgateway is typically done via Docker:
```bash
docker run -d -p 9091:9091 --name prometheus-pushgateway prom/pushgateway
```
Once running, your ephemeral job can push metrics to it using `curl` or a Prometheus client library. For example, to push a simple gauge:
```bash
echo "batch_job_duration_seconds 12.34" | curl --data-binary @- http://localhost:9091/metrics/job/my_batch_job/instance/batch_instance_1
```
This pushes a metric `batch_job_duration_seconds` with a value of `12.34` to the Pushgateway, associated with `job="my_batch_job"` and `instance="batch_instance_1"`. The Pushgateway will then expose these metrics on its `/metrics` endpoint.

Finally, you configure Prometheus to scrape the Pushgateway:
```yaml
scrape_configs:
  - job_name: 'pushgateway'
    static_configs:
      - targets: ['localhost:9091'] # Pushgateway's address
```
Prometheus will then scrape the Pushgateway, effectively collecting the metrics that were pushed by your short-lived jobs. A common mistake with Pushgateway is forgetting to clear old metrics, which can lead to stale data. You can use the Pushgateway's `/metrics/job/<job_name>/instance/<instance_name>` DELETE endpoint to remove specific metrics, or `/metrics/job/<job_name>` to remove all metrics for a job.

#### Key concepts
*   **Custom Exporter:** An application-specific program written to expose metrics in the Prometheus exposition format for unique monitoring needs.
*   **Prometheus Client Library:** Libraries available in various programming languages (e.g., Python, Go, Java) that simplify the creation and exposition of Prometheus metrics.
*   **Pushgateway:** An intermediary service that allows short-lived or ephemeral jobs to push their metrics to it, which Prometheus then scrapes.
*   **Pull vs. Push Model:** Pull (Prometheus scrapes exporters) is for long-lived services; Push (jobs push to Pushgateway) is for ephemeral jobs.
*   **Ephemeral Job:** A process that runs for a short duration and then terminates.

#### Hands-on activity
**Objective:** Create a simple custom Python exporter and use the Pushgateway to collect metrics from a simulated batch job.

1.  **Run the Custom Python Exporter:**
    *   Save the `my_app_exporter.py` code from the "Detailed lesson content" section.
    *   Install dependencies: `pip install Flask prometheus_client`.
    *   Run the exporter: `python my_app_exporter.py`. It will run on `http://localhost:8000`.
    *   Access `http://localhost:8000/` a few times to increment the counter and update the gauge.
    *   Verify metrics at `http://localhost:8000/metrics`.
2.  **Configure Prometheus for Custom Exporter:**
    *   Add the following to your `prometheus.yml`:
        ```yaml
        - job_name: 'my_app_exporter'
          static_configs:
            - targets: ['localhost:8000']
        ```
    *   Reload Prometheus and verify the target is "UP" in the UI. Query `my_app_requests_total` and `my_app_current_users`.
3.  **Run Pushgateway:**
    *   Start the Pushgateway using Docker:
        ```bash
        docker run -d -p 9091:9091 --name prometheus-pushgateway prom/pushgateway
        ```
    *   Verify it's running: `curl http://localhost:9091/metrics`.
4.  **Simulate a Batch Job and Push Metrics:**
    *   Run the following command multiple times to simulate a batch job pushing metrics:
        ```bash
        JOB_ID=$(uuidgen | cut -c1-8) # Generate a unique ID for the batch job instance
        DURATION=$(awk -v min=10 -v max=60 'BEGIN{srand(); print min+rand()*(max-min)}')
        echo "batch_job_duration_seconds $DURATION" | curl --data-binary @- http://localhost:9091/metrics/job/my_batch_job/instance/$JOB_ID
        echo "batch_job_status{status=\"success\"} 1" | curl --data-binary @- http://localhost:9091/metrics/job/my_batch_job/instance/$JOB_ID
        echo "Pushed metrics for batch job instance: $JOB_ID with duration: $DURATION"
        ```
    *   Verify the metrics are visible on the Pushgateway UI: `http://localhost:9091`.
5.  **Configure Prometheus for Pushgateway:**
    *   Add the following to your `prometheus.yml`:
        ```yaml
        - job_name: 'pushgateway'
          static_configs:
            - targets: ['localhost:9091']
        ```
    *   Reload Prometheus and verify the target is "UP". Query `batch_job_duration_seconds` and `batch_job_status`.
6.  **Optional: Clean up Pushgateway metrics:**
    *   To remove all metrics for `my_batch_job`:
        ```bash
        curl -X DELETE http://localhost:9091/metrics/job/my_batch_job
        ```

#### Assessment idea
1.  **Question:** Your application needs to expose a metric `api_call_latency_seconds` that tracks the duration of API calls, grouped by the API endpoint and HTTP status code. Which Prometheus metric type would be most appropriate for this, and why?
    A) Counter, because it counts the number of API calls.
    B) Gauge, because it represents a current value.
    C) Histogram, because it samples observations and provides configurable buckets for latency distribution.
    D) Summary, because it provides quantiles like p99 latency.

    **Answer:** C) Histogram. While a Summary (D) also provides quantiles and could work, a Histogram is generally preferred for latency measurements. Histograms allow you to define specific buckets (e.g., <100ms, <500ms, <1s), which are crucial for understanding the distribution of latencies and identifying "long tail" issues. They also allow for aggregation across multiple instances and calculating percentiles on the Prometheus server side, which Summaries do not easily permit. A Counter (A) would only give total calls, not duration. A Gauge (B) would only give the *current* latency, not a distribution over time.

2.  **Question:** You have a critical daily ETL (Extract, Transform, Load) batch job that runs for 10-15 minutes each morning and then exits. You want to monitor its success/failure status and total execution time using Prometheus. Explain why the Pushgateway is the appropriate tool for this scenario, and outline the steps your batch job would take to report its metrics.

    **Answer:** The Pushgateway is the appropriate tool for this scenario because the ETL batch job is an **ephemeral, short-lived process**. Prometheus's default pull model relies on targets being continuously available at a stable HTTP endpoint for scraping. Since the ETL job runs for a short period and then terminates, Prometheus would likely miss scraping it. The Pushgateway solves this by acting as an intermediary: the batch job pushes its metrics to the Pushgateway, which then holds them for Prometheus to scrape at its leisure.

    The steps the batch job would take to report its metrics are:
    1.  **Initialize Prometheus Client:** At the beginning of the job, initialize a Prometheus client library (e.g., `prometheus_client` in Python) to create the necessary metrics (e.g., a Gauge for `etl_job_duration_seconds` and a Gauge for `etl_job_status` with a `status` label).
    2.  **Collect Metrics During Execution:** As the job runs, update the metrics. For example, record the start time.
    3.  **Push Metrics at Completion:** Before the job exits (or upon success/failure), calculate the total execution time and set the `etl_job_duration_seconds` gauge. Set the `etl_job_status` gauge to `1` with a `status="success"` or `status="failure"` label.
    4.  **Send to Pushgateway:** Use the client library's `push_to_gateway()` function or a `curl` command to send these final metrics to the Pushgateway's `/metrics/job/<job_name>/instance/<instance_name>` endpoint. The `job_name` could be `etl_daily_job`, and `instance_name` could be a unique identifier for that day's run (e.g., a timestamp or UUID).
    5.  **Optional: Clear Metrics:** If desired, the job could also send a DELETE request to the Pushgateway to clear its previous instance's metrics, though often it's left to Prometheus to handle staleness.

#### AI generation note
Create a 15-minute live coding video. Start by explaining the "why" behind custom exporters. Then, guide learners through building the `my_app_exporter.py` example using Flask and `prometheus_client`, demonstrating `Counter`, `Gauge`, and `Histogram`. Show running the app, hitting the root path, and then curling `/metrics`. Next, pivot to the Pushgateway: explain its purpose with an animated diagram showing an ephemeral job pushing to Pushgateway, and Prometheus pulling from Pushgateway. Demonstrate running the Pushgateway via Docker, then show the `curl` command to push metrics from a simulated batch job (using `uuidgen` for instance IDs). Conclude by configuring `prometheus.yml` for both the custom exporter and Pushgateway, reloading Prometheus, and querying the new metrics in the Prometheus UI. Highlight the common mistake of using Pushgateway for long-lived services. Include a mini-quiz asking when to use Pushgateway vs. a direct exporter.

---

### Chapter 4.4 — Prometheus Alerting with Alertmanager

#### Learning objectives
*   Explain the role of Prometheus Alertmanager in a comprehensive monitoring and alerting strategy.
*   Define alerting rules within Prometheus using PromQL expressions, thresholds, and `FOR` clauses.
*   Configure Alertmanager to receive alerts from Prometheus and route them to different receivers (e.g., Slack, email).
*   Implement common Alertmanager features like grouping, inhibition, and silences to reduce alert fatigue.
*   Understand the lifecycle of an alert from Prometheus rule evaluation to notification.

#### Detailed lesson content
Monitoring is only half the battle; the other half is knowing when something goes wrong. This is where **Prometheus Alerting** comes in. Prometheus itself is responsible for evaluating alerting rules based on the collected metrics. When a rule's condition is met, Prometheus sends an alert to a separate component called **Alertmanager**. Alertmanager's job is to de-duplicate, group, route, and send notifications for these alerts. This separation of concerns means Prometheus focuses on metric collection and rule evaluation, while Alertmanager handles the complexities of notification.

The alerting pipeline looks like this:
**Prometheus (Rule Evaluation) → Alertmanager (Grouping, Routing, Inhibition, Silencing) → Receivers (Slack, Email, PagerDuty, Webhook)**

Let's start with defining **alerting rules** in Prometheus. These rules are typically stored in separate `.yml` files (e.g., `alert.rules.yml`) and then included in your main `prometheus.yml` configuration. An alerting rule consists of:
*   `alert`: The name of the alert.
*   `expr`: A PromQL expression that evaluates to a set of time series. If any series are returned, the alert is considered active.
*   `for`: A duration for which the `expr` must be true before the alert fires. This prevents flapping alerts for transient issues.
*   `labels`: Additional labels to attach to the alert (e.g., `severity: critical`, `team: devops`).
*   `annotations`: Longer, descriptive information about the alert (e.g., `summary`, `description`, `runbook`).

Here's an example `alert.rules.yml`:
```yaml
groups:
  - name: host_alerts
    rules:
      - alert: HostHighCPUUsage
        expr: 100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High CPU usage on {{ $labels.instance }}"
          description: "{{ $labels.instance }} has been experiencing high CPU usage (above 80%) for 5 minutes. Current value: {{ $value | humanizePercentage }}."

      - alert: HostOutOfMemory
        expr: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100 < 10
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "Low memory on {{ $labels.instance }}"
          description: "{{ $labels.instance }} has less than 10% memory available. Current value: {{ $value | humanizePercentage }}."
```
To include this in Prometheus, add this to `prometheus.yml`:
```yaml
rule_files:
  - "alert.rules.yml" # Path to your alert rules file

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['localhost:9093'] # Default Alertmanager port
```
After modifying `prometheus.yml` and `alert.rules.yml`, you must reload Prometheus for the changes to take effect. You can check the status of your alerting rules in the Prometheus UI under "Alerts."

**Alertmanager** is where the magic of alert management happens. It's designed to handle alerts sent by client applications like Prometheus, and then:
*   **Group** similar alerts into a single notification to avoid alert storms.
*   **De-duplicate** alerts, ensuring you only get one notification for a continuously firing alert.
*   **Route** alerts to specific receivers based on labels (e.g., critical alerts to PagerDuty, warnings to Slack).
*   **Inhibit** certain alerts from sending notifications if another, more severe alert is already firing (e.g., don't alert on disk full if the entire host is down).
*   **Silence** alerts for a specified period, useful during maintenance windows.

You typically run Alertmanager as a separate process, often in a Docker container:
```bash
docker run -d -p 9093:9093 --name alertmanager \
  -v /path/to/alertmanager.yml:/etc/alertmanager/alertmanager.yml \
  prom/alertmanager
```
The core of Alertmanager's configuration is `alertmanager.yml`. This file defines receivers (where alerts go), routes (how alerts are matched to receivers), and other advanced features.

Here's a basic `alertmanager.yml` example for Slack and email:
```yaml
global:
  resolve_timeout: 5m # How long to wait before sending a resolved notification

route:
  group_by: ['alertname', 'cluster', 'service'] # Group alerts by these labels
  group_wait: 30s # Wait 30s for more alerts before sending initial notification
  group_interval: 5m # Wait 5m between sending notifications for the same group
  repeat_interval: 1h # Resend notification every 1h if alert is still firing
  receiver: 'default-receiver' # Default receiver for all alerts

  routes:
  - match:
      severity: 'critical'
    receiver: 'critical-slack'
    group_wait: 10s
    repeat_interval: 10m

  - match:
      severity: 'warning'
    receiver: 'devops-email'

receivers:
  - name: 'default-receiver'
    slack_configs:
      - channel: '#alerts-general'
        api_url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX' # Replace with your Slack webhook URL
        text: '{{ .CommonAnnotations.summary }}'

  - name: 'critical-slack'
    slack_configs:
      - channel: '#alerts-critical'
        api_url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'
        text: 'CRITICAL ALERT: {{ .CommonAnnotations.description }}'

  - name: 'devops-email'
    email_configs:
      - to: 'devops@example.com'
        from: 'alertmanager@example.com'
        smarthost: 'smtp.example.com:587'
        auth_username: 'alertmanager@example.com'
        auth_password: 'your_email_password'
        require_tls: true
        headers:
          Subject: '[Prometheus Alert] {{ .CommonLabels.alertname }}'
```
After modifying `alertmanager.yml`, you need to restart the Alertmanager container.

Common mistakes in alerting include:
*   **Alert Fatigue:** Too many alerts, or alerts for non-actionable events. Use `for` clauses, grouping, and inhibition effectively.
*   **Misconfigured `for`:** Setting `for` too short can lead to flapping, too long can delay critical alerts.
*   **Incorrect PromQL:** Alert rules based on faulty PromQL expressions will either never fire or fire constantly. Always test your `expr` in the Prometheus graph UI first.
*   **Routing Issues:** Alerts going to the wrong team or not being delivered at all due to incorrect `match` labels or receiver configurations.
*   **Forgetting to reload/restart:** Changes to `prometheus.yml` (for rules) or `alertmanager.yml` (for routing) require a reload/restart.

The Alertmanager UI (typically `http://localhost:9093`) allows you to view active alerts, create silences, and check the configuration. Silences are particularly useful for planned maintenance, preventing alerts from firing for a specific set of labels during that period.

Effective alerting is a balance. You want to be informed of genuine problems quickly, without being overwhelmed by noise. Prometheus and Alertmanager provide the powerful tools to achieve this balance, ensuring your systems remain observable and reliable.

#### Key concepts
*   **Alertmanager:** A separate service that handles alerts sent by Prometheus, responsible for grouping, de-duplication, routing, and sending notifications.
*   **Alerting Rule:** A rule defined in Prometheus (`alert.rules.yml`) using PromQL to specify conditions under which an alert should fire.
*   **`expr`:** The PromQL expression within an alerting rule that defines the condition.
*   **`for`:** A duration specified in an alerting rule, requiring the `expr` to be true for that period before the alert fires.
*   **Receiver:** A configuration in Alertmanager defining where notifications should be sent (e.g., Slack channel, email address).
*   **Route:** A configuration in Alertmanager that matches alerts based on their labels and directs them to specific receivers.
*   **Grouping:** Alertmanager's feature to aggregate similar alerts into a single notification.
*   **Inhibition:** Alertmanager's feature to suppress notifications for less severe alerts if a more severe, related alert is already firing.
*   **Silence:** A temporary suppression of alerts for a defined period and set of labels, typically used during maintenance.

#### Hands-on activity
**Objective:** Configure Prometheus alerting rules and set up Alertmanager to send notifications to a dummy webhook (simulating Slack).

1.  **Start Alertmanager:**
    *   Create an `alertmanager.yml` file with a basic webhook receiver. You can use a service like `webhook.site` to get a temporary webhook URL for testing.
        ```yaml
        global:
          resolve_timeout: 5m

        route:
          group_by: ['alertname', 'instance', 'severity']
          group_wait: 10s
          group_interval: 1m
          repeat_interval: 5m
          receiver: 'webhook-receiver'

        receivers:
          - name: 'webhook-receiver'
            webhook_configs:
              - url: 'YOUR_WEBHOOK_URL_HERE' # Replace with a URL from webhook.site
                send_resolved: true
        ```
    *   Run Alertmanager in Docker, mounting your `alertmanager.yml`:
        ```bash
        docker run -d -p 9093:9093 --name alertmanager \
          -v /path/to/your/alertmanager.yml:/etc/alertmanager/alertmanager.yml \
          prom/alertmanager
        ```
    *   Verify Alertmanager UI at `http://localhost:9093`.
2.  **Configure Prometheus to send alerts to Alertmanager:**
    *   Edit your `prometheus.yml` to include the `alerting` section:
        ```yaml
        alerting:
          alertmanagers:
            - static_configs:
                - targets: ['localhost:9093'] # Or the IP of your Alertmanager container
        ```
3.  **Create Prometheus Alerting Rules:**
    *   Create a file named `alert.rules.yml` with the following content. This rule will fire if the `my_dummy_metric` (from Chapter 4.1) goes above 50.
        ```yaml
        groups:
          - name: custom_app_alerts
            rules:
              - alert: DummyMetricHigh
                expr: my_dummy_metric > 50
                for: 10s # Fire after 10 seconds of condition being true
                labels:
                  severity: warning
                  team: development
                annotations:
                  summary: "Dummy metric value is high on {{ $labels.instance }}"
                  description: "The dummy metric `my_dummy_metric` has exceeded 50. Current value: {{ $value }}."
        ```
    *   Add the `rule_files` directive to your `prometheus.yml`:
        ```yaml
        rule_files:
          - "alert.rules.yml"
        ```
4.  **Reload Prometheus:**
    ```bash
    docker kill -s HUP <prometheus_container_name_or_id>
    ```
5.  **Trigger and Observe Alerts:**
    *   Ensure your `dummy_exporter.py` from Chapter 4.1 is running. If it generates random values, it should eventually trigger the alert.
    *   Go to `http://localhost:9090/alerts` in Prometheus UI. You should see `DummyMetricHigh` in a "PENDING" state, then "FIRING."
    *   Check your `webhook.site` URL. You should receive a JSON payload from Alertmanager when the alert fires and another one when it resolves.
    *   Experiment with creating a silence in the Alertmanager UI for `alertname="DummyMetricHigh"` to see how it suppresses notifications.

#### Assessment idea
1.  **Question:** A Prometheus alerting rule is defined as:
    ```yaml
    - alert: CriticalDiskUsage
      expr: node_filesystem_avail_bytes{mountpoint="/"} / node_filesystem_size_bytes{mountpoint="/"} * 100 < 5
      for: 15m
      labels:
        severity: critical
      annotations:
        summary: "Root filesystem nearly full on {{ $labels.instance }}"
    ```
    If the root filesystem on `server-01` drops below 5% available space for 10 minutes, what will be the state of the `CriticalDiskUsage` alert in Prometheus?
    A) Firing
    B) Pending
    C) Resolved
    D) Inactive

    **Answer:** B) Pending. The `for: 15m` clause means the condition (`< 5% available`) must be true for a continuous duration of 15 minutes before the alert transitions from `Pending` to `Firing`. Since the condition has only been true for 10 minutes, the alert is still in the `Pending` state.

2.  **Question:** You are experiencing "alert fatigue" because your team is receiving too many notifications for minor, transient issues. Describe two distinct features of Alertmanager that you could use to mitigate this problem, explaining how each feature helps reduce noise.

    **Answer:** Two distinct features of Alertmanager to mitigate alert fatigue are:

    1.  **Grouping:** Alertmanager can group similar alerts into a single notification. For example, if 10 different instances of a microservice all start experiencing high latency simultaneously, instead of sending 10 individual "High Latency" alerts, Alertmanager can group them by `alertname` and `service` (and potentially `severity`) and send one consolidated notification. This reduces the sheer volume of messages, making it easier for the on-call team to grasp the scope of an incident without being overwhelmed. The `group_by`, `group_wait`, and `group_interval` parameters in `alertmanager.yml` control this behavior.

    2.  **Inhibition:** Inhibition allows Alertmanager to suppress notifications for less important or redundant alerts when a more severe, related alert is already firing. For instance, if `HostDown` alert is firing for a server, you likely don't need separate `HostHighCPUUsage`, `HostOutOfMemory`, or `DiskFull` alerts for the same server. The `HostDown` alert implies those other issues. By configuring an inhibition rule, Alertmanager can prevent notifications for the less severe alerts, as the primary `HostDown` alert already covers the root cause. This prevents duplicate or cascading alerts that don't add new actionable information.

---

## Module 5: Introduction to Grafana: Visualization Basics

This module introduces you to Grafana, the leading open-source platform for monitoring and observability. You'll learn how to install Grafana, connect it to your Prometheus data source, and build compelling dashboards to visualize your metrics. We'll cover fundamental panel types, explore advanced visualization options, and master templating to create dynamic and reusable dashboards. By the end of this module, you'll be proficient in transforming raw Prometheus metrics into actionable insights using Grafana.

### Chapter 5.1 — Getting Started with Grafana: Installation and First Login

#### Learning objectives
*   Install Grafana using a common method like Docker or package manager.
*   Access the Grafana web interface and complete the initial login process.
*   Navigate the basic Grafana user interface and identify key components.
*   Understand the fundamental role of Grafana in an observability stack alongside Prometheus.
*   Configure Prometheus as the first data source within Grafana.

#### Detailed lesson content
Welcome to the world of Grafana! After spending time understanding Prometheus for collecting and querying metrics, the next crucial step in building a robust observability stack is visualizing that data effectively. This is where Grafana shines. Grafana is an open-source analytics and interactive visualization web application. It allows you to query, visualize, alert on, and explore your metrics, logs, and traces no matter where they are stored. In our context, Grafana will be the primary tool for turning your raw Prometheus metrics into beautiful, insightful dashboards. It acts as the "eyes" of your monitoring system, making complex data understandable at a glance.

To begin, we need to get Grafana up and running. While there are several ways to install Grafana, including standalone binaries, package managers (like `apt` for Debian/Ubuntu or `yum` for RHEL/CentOS), and Kubernetes deployments, using Docker is often the quickest and most consistent method for local development and initial exploration. A simple `docker run` command can launch a Grafana instance in minutes. When you run Grafana, it typically exposes its web interface on port `3000`. So, after starting the container, you'll navigate your web browser to `http://localhost:3000`.

Upon your first visit, you'll be greeted by a login screen. The default credentials for a fresh Grafana installation are `admin` for both the username and password. **A critical safety note here:** Always change these default credentials immediately after your first successful login. This is a fundamental security practice for any application exposed on a network. Navigate to the "Configuration" section (gear icon) and then "Users" or "Preferences" to update your password. Failing to do so leaves your monitoring system vulnerable to unauthorized access, potentially exposing sensitive operational data or allowing malicious actors to tamper with your alerts.

Once logged in, take a moment to explore the Grafana user interface. The home dashboard provides a starting point, often displaying a few example panels or quick links. On the left-hand side, you'll find the main navigation menu. This menu is your gateway to dashboards, explore features, alerting, configuration, and more. You'll notice icons for "Dashboards" (the four squares), "Explore" (the compass), "Alerting" (the bell), and "Configuration" (the gear icon). The "Configuration" section is particularly important for initial setup, as it's where you'll manage data sources, users, and plugins.

The very first thing we need to do in Grafana is connect it to our Prometheus instance. Without a data source, Grafana has no metrics to visualize. Think of a data source as a connector that tells Grafana where to fetch its data. Grafana supports a wide array of data sources, including Prometheus, Loki (for logs), InfluxDB, PostgreSQL, MySQL, and many cloud monitoring services. To add Prometheus as a data source, navigate to the "Configuration" (gear icon) in the left-hand menu, then select "Data sources." Click the "Add data source" button and choose "Prometheus" from the list. You'll then be prompted to enter the URL of your Prometheus server. If Prometheus is running locally on its default port, this will typically be `http://localhost:9090`. You can leave most other settings as default for now, but ensure the "Access" mode is set to "Server (Direct)" for typical setups, which means Grafana's backend will make the requests to Prometheus. After entering the URL, click "Save & Test" to verify the connection. A green "Data source is working" message confirms that Grafana can now communicate with your Prometheus instance and is ready to pull metrics. This foundational step is crucial; without a correctly configured data source, you cannot build any dashboards or visualizations.

#### Key concepts
*   **Grafana:** An open-source analytics and visualization web application used to query, visualize, alert on, and explore metrics, logs, and traces.
*   **Data Source:** A connection within Grafana that specifies where to fetch monitoring data (e.g., Prometheus, Loki, InfluxDB).
*   **Default Credentials:** The initial username (`admin`) and password (`admin`) for a new Grafana installation, which should be changed immediately for security.
*   **Grafana UI:** The web-based user interface for interacting with Grafana, featuring a main navigation menu, home dashboard, and various configuration sections.
*   **Port 3000:** The default TCP port on which Grafana's web interface is typically accessible.

#### Hands-on activity
**Activity: Install Grafana and Connect Prometheus**

1.  **Install Grafana via Docker:**
    Open your terminal and run the following command to start a Grafana container:
    ```bash
    docker run -d -p 3000:3000 --name grafana-server grafana/grafana-oss:latest
    ```
    This command will download the `grafana/grafana-oss` image (if not already present), create a container named `grafana-server`, and map port 3000 on your host to port 3000 inside the container.

2.  **Access Grafana and Change Password:**
    Open your web browser and navigate to `http://localhost:3000`.
    Log in using the default credentials:
    *   Username: `admin`
    *   Password: `admin`
    You will be prompted to change your password. Choose a strong, new password and save it.

3.  **Add Prometheus as a Data Source:**
    From the left-hand navigation menu, click the "Configuration" gear icon (⚙️).
    Select "Data sources."
    Click the "Add data source" button.
    Choose "Prometheus" from the list of available data sources.
    In the "HTTP" section, set the "URL" to `http://localhost:9090` (assuming your Prometheus server is running on the default port).
    Ensure "Access" is set to "Server (Direct)".
    Scroll down and click the "Save & Test" button. You should see a green "Data source is working" message.

#### Assessment idea
1.  **Question:** You've just installed Grafana and are trying to log in for the first time. What are the default credentials, and what is the immediate best practice after logging in successfully?
    **Answer:** The default username is `admin` and the default password is `admin`. The immediate best practice after logging in successfully is to change the default password to a strong, unique one to prevent unauthorized access and secure your monitoring system.

2.  **Question:** You're attempting to add your Prometheus instance as a data source in Grafana, but after clicking "Save & Test," you receive an error message like "Network Error: Failed to fetch." Assuming your Prometheus server is running correctly, what is the most likely cause for this specific error and how would you troubleshoot it?
    **Answer:** The "Network Error: Failed to fetch" message typically indicates that Grafana cannot reach the specified Prometheus URL. The most likely cause is an incorrect URL for the Prometheus server or a firewall blocking the connection between the Grafana server and the Prometheus server. To troubleshoot, first, double-check the Prometheus URL entered in Grafana (e.g., `http://localhost:9090`). Second, verify that your Prometheus server is actually running and accessible from the machine where Grafana is running (e.g., by trying to access `http://localhost:9090` directly from the Grafana host's browser or `curl`). If using Docker, ensure the containers can communicate, potentially by putting them on the same Docker network or ensuring correct port mappings.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 2-minute animated overview explaining Grafana's role in an observability stack, using a diagram showing Prometheus collecting metrics and Grafana visualizing them. Follow with an 8-minute live coding demonstration: showing the `docker run` command, navigating to `localhost:3000`, logging in with default credentials, changing the password, and then step-by-step adding `http://localhost:9090` as a Prometheus data source. Include a split-screen view for the live demo showing the terminal and browser simultaneously. Conclude with a 2-minute reflection prompt asking learners to consider the security implications of default passwords. Ensure captions and alt text for all diagrams.

### Chapter 5.2 — Understanding Grafana Data Sources and Dashboards

#### Learning objectives
*   Differentiate between various types of Grafana data sources and their primary use cases.
*   Configure advanced settings for a Prometheus data source, including HTTP method and authentication.
*   Create a new, empty Grafana dashboard and understand its basic structure.
*   Manage dashboard settings such as time range, refresh interval, and permissions.
*   Explain the process of importing and exporting Grafana dashboards using JSON.

#### Detailed lesson content
Now that Grafana is installed and connected to Prometheus, let's delve deeper into the core concepts of data sources and dashboards, which are the building blocks of any effective monitoring setup in Grafana. Grafana's power lies in its ability to integrate with a multitude of data sources, allowing you to centralize your monitoring and visualization efforts. While our primary focus is Prometheus, it's important to understand that Grafana can connect to time-series databases like InfluxDB or OpenTSDB, log aggregation systems like Loki or Elasticsearch, relational databases like MySQL or PostgreSQL, and even cloud monitoring services like AWS CloudWatch or Azure Monitor. Each data source has specific configuration options tailored to its API and data model. For Prometheus, key settings include the HTTP URL, access mode (Server or Browser), and optional authentication. "Server (Direct)" access is generally preferred as it routes queries through the Grafana backend, which helps avoid cross-origin resource sharing (CORS) issues and can proxy requests securely. "Browser" access means the browser directly queries Prometheus, which might be suitable for simpler setups but requires Prometheus to be publicly accessible and correctly configured for CORS.

With our Prometheus data source configured, the next logical step is to create a dashboard. A dashboard in Grafana is a collection of panels, each displaying a specific visualization of your data. Think of it as a canvas where you arrange various charts, graphs, and tables to tell a comprehensive story about your system's health and performance. To create a new dashboard, simply click the "Dashboards" icon (four squares) in the left-hand menu, then "New dashboard." You'll be presented with an empty canvas, ready for you to add your first panels.

Before adding panels, let's familiarize ourselves with basic dashboard settings. At the top of the dashboard, you'll see the time range selector (e.g., "Last 6 hours"). This allows you to define the period for which data is displayed across all panels on the dashboard. You can choose predefined ranges (e.g., "Last 30 minutes," "Today so far") or specify a custom range. Next to it is the refresh interval selector, which dictates how often Grafana queries the data source to update the panels. For real-time monitoring, you might set this to "5s" or "10s," while for historical analysis, "Off" or a longer interval might be appropriate. These settings are crucial for tailoring your dashboard's responsiveness to your monitoring needs.

Beyond the basic time and refresh controls, each dashboard has a set of detailed settings accessible via the gear icon at the top right. Here, you can define the dashboard's name, description, and tags, which are useful for organization and searchability, especially as your number of dashboards grows. You can also configure variables (which we'll cover in a later chapter), set up annotations to mark significant events, and manage permissions to control who can view, edit, or administer the dashboard. Understanding these settings is key to creating well-organized, performant, and secure dashboards. For instance, if you're monitoring a critical production system, you might want to restrict edit access to only a few specific team members.

One of Grafana's most powerful features is the ability to import and export dashboards. Dashboards are defined in JSON format, making them highly portable. This means you can share your dashboards with colleagues, back them up, or even use community-contributed dashboards from Grafana Labs' dashboard repository (grafana.com/grafana/dashboards). To export a dashboard, go to the dashboard settings (gear icon), then "JSON Model," and click "Save to file." This will download a JSON file containing the entire dashboard definition. To import a dashboard, navigate to the "Dashboards" section, click "Import," and then either paste the JSON directly or upload the file. This feature is invaluable for maintaining consistency across environments, deploying dashboards as code, and leveraging the vast collection of pre-built dashboards available online, often tailored for popular exporters like Node Exporter or cAdvisor. Always review imported dashboards to ensure they align with your data sources and security policies.

#### Key concepts
*   **Dashboards:** A collection of panels in Grafana, arranged to visualize metrics, logs, or traces, providing a comprehensive view of system performance.
*   **Time Range Selector:** A control on a Grafana dashboard that defines the period for which data is displayed across all panels.
*   **Refresh Interval:** The frequency at which Grafana queries data sources to update panels on a dashboard.
*   **Dashboard Settings:** Configuration options for a dashboard, including name, description, tags, variables, annotations, and permissions.
*   **JSON Model:** The underlying JSON format used to define and store Grafana dashboards, enabling easy import, export, and sharing.
*   **Access Mode (Server/Browser):** Determines whether Grafana's backend or the user's browser makes requests to the data source.

#### Hands-on activity
**Activity: Create a New Dashboard and Explore Settings**

1.  **Create a New Dashboard:**
    In Grafana, click the "Dashboards" icon (four squares) in the left-hand menu.
    Click "New dashboard."
    You'll see an empty dashboard. Click "Add new panel" to add a placeholder. (We won't configure it yet, just add it to see the dashboard structure).

2.  **Explore Dashboard Settings:**
    Click the "Dashboard settings" gear icon (⚙️) at the top right of the dashboard.
    In the "General" tab, give your dashboard a descriptive name (e.g., "My First Prometheus Dashboard") and add a brief description.
    Add a tag like `prometheus-basics`.
    Explore the other tabs: "Variables" (we'll use this later), "Annotations," and "Permissions." Understand what each section is for without making changes yet.

3.  **Configure Time Range and Refresh Interval:**
    Close the dashboard settings.
    At the top of your dashboard, locate the time range selector (e.g., "Last 6 hours"). Click on it and change it to "Last 5 minutes."
    Next to the time range, click the refresh interval selector (e.g., "5s") and set it to "10s." Observe how these changes affect the dashboard's scope and update frequency.

4.  **Export and Re-import the Dashboard:**
    Go back to the "Dashboard settings" (gear icon).
    Navigate to the "JSON Model" tab.
    Click "Save to file" to download the JSON definition of your dashboard.
    Now, go back to "Dashboards" -> "Manage dashboards."
    Click "Import."
    Either drag and drop the downloaded JSON file or paste its content into the "Import via panel json" text area.
    Grafana will ask you to name the dashboard and select a data source. Name it "My First Prometheus Dashboard (Imported)" and select your Prometheus data source. Click "Import."
    You should now have two identical dashboards. This demonstrates the power of JSON for dashboard portability.

#### Assessment idea
1.  **Question:** You've created a new Grafana dashboard to monitor your production servers. You want to ensure that only members of the "Ops Team" can make changes to this dashboard, while everyone else can only view it. Which dashboard setting would you configure to achieve this, and where is it located?
    **Answer:** You would configure the "Permissions" setting for the dashboard. This is located within the "Dashboard settings" (the gear icon at the top right of the dashboard). In the Permissions tab, you can add specific users or teams and assign them roles like "View," "Edit," or "Admin" for that particular dashboard. You would grant "Ops Team" members "Edit" or "Admin" permissions and ensure other users/teams have only "View" permissions.

2.  **Question:** Your team has developed a highly effective Grafana dashboard for monitoring a critical microservice. They want to share this dashboard with another team that uses a separate Grafana instance. Describe the most efficient way to share this dashboard and what format the dashboard definition will be in.
    **Answer:** The most efficient way to share the dashboard is by exporting its JSON model. You would navigate to the dashboard settings (gear icon), then select the "JSON Model" tab, and click "Save to file." This downloads the dashboard's complete definition as a JSON file. The other team can then import this JSON file into their Grafana instance by going to "Dashboards" -> "Import," pasting the JSON, and selecting their corresponding Prometheus data source. This ensures all panels, queries, and settings are transferred accurately.

#### AI generation note
Create a 10-minute interactive slide deck with embedded mini-quizzes. Start with a visual comparison of different data source icons (Prometheus, Loki, CloudWatch) explaining their roles. Then, walk through the process of creating a new dashboard, highlighting the time range and refresh interval selectors with animated overlays. Dedicate a slide to the dashboard settings gear icon, showing dropdown menus for "General," "Variables," "Permissions," and "JSON Model." Include a 2-question quiz about choosing the correct access mode for a Prometheus data source. End with a step-by-step visual guide on exporting and importing a dashboard JSON, emphasizing the portability aspect.

### Chapter 5.3 — Crafting Your First Panels: Graph and Stat Visualizations

#### Learning objectives
*   Add and configure a basic Graph panel to visualize time-series data from Prometheus.
*   Utilize PromQL within the Grafana query editor to fetch relevant metrics for a Graph panel.
*   Customize Graph panel display options, including legend, axes, and thresholds.
*   Add and configure a Stat panel to display a single metric value.
*   Apply value mapping and color coding to a Stat panel for quick status indication.

#### Detailed lesson content
With our Prometheus data source connected and an empty dashboard awaiting, it's time to bring our metrics to life! The heart of any Grafana dashboard lies in its panels, which are individual visualization components. Grafana offers a rich variety of panel types, each suited for different kinds of data and insights. We'll start with two of the most fundamental and widely used panels: the Graph panel for time-series data and the Stat panel for single-value summaries.

The **Graph panel** is arguably the most common and versatile panel in Grafana. It excels at displaying how metrics change over time, making it indispensable for identifying trends, anomalies, and performance fluctuations. To add a Graph panel, click "Add new panel" on your dashboard, then select "Add an empty panel." By default, it will often suggest a "Graph" visualization. In the "Query" tab of the panel editor, you'll see a query editor specific to your selected data source (Prometheus in our case). Here, you'll write your PromQL queries. For example, to visualize the CPU utilization of your node exporter, you might use a query like `100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`. This query calculates the average CPU idle time over the last 5 minutes, then subtracts it from 100 to get utilization, grouped by instance. As you type, Grafana's query editor provides auto-completion and syntax highlighting, which is incredibly helpful.

Once your query is entered, the graph will immediately update, displaying the time series. Now, let's customize its appearance. In the "Panel options" section, you can give your panel a descriptive title, like "CPU Utilization by Instance." Below the query editor, you'll find tabs for "Visualization," "Panel options," "Alert," and "Transform." The "Visualization" tab is where you fine-tune the graph's presentation. Under "Standard options," you can set the "Unit" (e.g., `percent (0-100)`) to ensure correct scaling and labeling. The "Legend" section allows you to control what information is displayed next to each line on the graph. You can choose to show min, max, average, current value, or total, and even hide the series name if it's too verbose. For clarity, it's often useful to display the `{{instance}}` label in the legend to distinguish between different servers.

The "Axes" section is crucial for readability. You can customize the Y-axis label (e.g., "CPU Usage (%)"), set minimum and maximum values to provide context (e.g., 0 to 100 for percentages), and choose the scale. For example, if you're plotting network bandwidth, you might set the unit to "bytes/sec" and choose a `short` scale for automatic unit conversion (KB/s, MB/s). Finally, "Thresholds" are powerful for quickly identifying problems. You can add static thresholds (e.g., a warning line at 70% CPU and a critical line at 90% CPU) and assign colors (yellow for warning, red for critical). This immediately draws attention to metrics that are outside acceptable operating ranges. A common mistake is not setting appropriate units or axis ranges, leading to graphs that are hard to interpret or misrepresent the data. Always ensure your units match the metric and your axis ranges provide meaningful context.

Next, let's explore the **Stat panel**. While the Graph panel shows trends, the Stat panel is perfect for displaying a single, prominent value—like the current CPU utilization of a specific server, the number of active users, or the current error rate. To add a Stat panel, follow the same steps as for a Graph panel, but select "Stat" as the visualization type. The query editor works identically; you'll use PromQL to fetch your desired metric. For instance, to show the current available memory on a specific instance, you might use `node_memory_MemAvailable_bytes{instance="your_server_ip:9100"}`.

For a Stat panel, the "Value options" are key. You can choose how the value is calculated (e.g., "Last (not null)" for the most recent value, "Average," "Min," "Max"). Just like with the Graph panel, set the appropriate "Unit." The real power of the Stat panel comes from "Value mappings" and "Thresholds." Value mappings allow you to transform specific numeric values into text (e.g., `0` to "Down", `1` to "Up"). Thresholds, similar to graphs, let you color-code the background or text of the panel based on the value. For example, for available memory, you could set a threshold: if `value < 1000000000` (1 GB), color red; if `value < 2000000000` (2 GB), color yellow; otherwise, green. This provides an immediate visual cue about the health of the metric without needing to read the exact number. A common mistake here is using a PromQL query that returns multiple series for a Stat panel; it's designed for a single series or aggregated value. Ensure your query aggregates down to a single value (e.g., using `sum()`, `avg()`, `max()`, or by filtering to a single instance/label).

#### Key concepts
*   **Panel:** An individual visualization component within a Grafana dashboard (e.g., Graph, Stat, Table).
*   **Graph Panel:** A panel type designed to display time-series data, showing how metrics change over a period.
*   **Stat Panel:** A panel type used to display a single, prominent metric value, often with color-coding based on thresholds.
*   **PromQL Query Editor:** The interface within Grafana panels where Prometheus Query Language (PromQL) queries are written.
*   **Legend:** The key on a graph panel that identifies each time series and can display summary statistics.
*   **Axes:** The X and Y scales of a graph panel, configurable for labels, units, and ranges.
*   **Thresholds:** Configurable lines or ranges on panels that trigger color changes or alerts when metric values cross them.
*   **Value Mappings:** A feature in Stat panels that allows numeric values to be mapped to custom text or colors.

#### Hands-on activity
**Activity: Build Basic CPU and Memory Panels**

1.  **Add a Graph Panel for CPU Utilization:**
    On your "My First Prometheus Dashboard," click "Add new panel" -> "Add an empty panel."
    Ensure the "Visualization" is set to "Graph."
    In the "Query" tab, select your Prometheus data source.
    Enter the following PromQL query:
    ```promql
    100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
    ```
    In the "Panel options" section, set the "Title" to "CPU Utilization (%)".
    In the "Visualization" tab, under "Standard options," set the "Unit" to `percent (0-100)`.
    Under "Legend," enable "Show" and ensure "Values" is checked for "Current."
    Under "Axes," set the "Left Y" label to "CPU Usage (%)" and "Min" to `0`, "Max" to `100`.
    Under "Thresholds," add two thresholds:
    *   `Value: 70`, `Color: yellow`, `Display: Line`
    *   `Value: 90`, `Color: red`, `Display: Line`
    Click "Apply" to save the panel to the dashboard.

2.  **Add a Stat Panel for Available Memory:**
    Click "Add new panel" -> "Add an empty panel."
    Change the "Visualization" to "Stat."
    In the "Query" tab, select your Prometheus data source.
    Enter the following PromQL query (replace `your_server_ip:9100` with an actual instance from your Prometheus targets, e.g., `localhost:9100` if Node Exporter is running locally):
    ```promql
    node_memory_MemAvailable_bytes{instance="localhost:9100"}
    ```
    In the "Panel options" section, set the "Title" to "Available Memory (GB)".
    In the "Visualization" tab, under "Standard options," set the "Unit" to `bytes (IEC)` and "Decimal" to `2`.
    Under "Thresholds," add three thresholds (values are in bytes):
    *   `Value: 1073741824` (1 GB), `Color: red`, `Display: Background`
    *   `Value: 2147483648` (2 GB), `Color: yellow`, `Display: Background`
    *   `Value: 0`, `Color: green`, `Display: Background` (This will make anything above 2GB green)
    Click "Apply" to save the panel. Arrange the panels on your dashboard as desired.

#### Assessment idea
1.  **Question:** You're monitoring a web server and want to display the HTTP request rate over the last 5 minutes. You also want to quickly see if the rate exceeds 100 requests/second (warning) or 200 requests/second (critical). Which Grafana panel type is best suited for this, what PromQL query would you use (assuming `http_requests_total` is your counter metric), and how would you configure the visual alerts?
    **Answer:** The **Graph panel** is best suited for visualizing the HTTP request rate over time.
    The PromQL query would be: `rate(http_requests_total[5m])`.
    To configure visual alerts: In the Graph panel's "Visualization" tab, under "Thresholds," you would add:
    *   A yellow threshold at `Value: 100` (for warning).
    *   A red threshold at `Value: 200` (for critical).
    You would also set the "Unit" to `requests/sec` and label the Y-axis appropriately.

2.  **Question:** Your `node_exporter` is exposing a metric `node_filesystem_avail_bytes` which represents available disk space. You want to display this value for a specific instance as a single, prominent number on your dashboard, with the panel background turning red if available space drops below 5GB, and yellow if it drops below 10GB. What PromQL query would you use for the Stat panel, and how would you configure the color-coding? (Note: 1GB = 1,073,741,824 bytes).
    **Answer:** For the Stat panel, the PromQL query would be: `node_filesystem_avail_bytes{instance="your_server_ip:9100", mountpoint="/", fstype="ext4"}` (adjust labels as per your setup to target a specific filesystem on a specific instance).
    To configure the color-coding: In the Stat panel's "Visualization" tab, under "Thresholds," you would set:
    *   `Value: 5368709120` (5 GB), `Color: red`, `Display: Background`
    *   `Value: 10737418240` (10 GB), `Color: yellow`, `Display: Background`
    *   `Value: 0`, `Color: green`, `Display: Background` (to make anything above 10GB green).
    You would also set the "Unit" to `bytes (IEC)` and "Decimal" to `2` for readability.

#### AI generation note
Create a 15-minute live coding video. Begin with an empty Grafana dashboard. First, add a Graph panel, type the CPU utilization PromQL query, and demonstrate setting the unit, legend options (showing current value and instance), Y-axis label, and adding two color-coded thresholds. Then, add a Stat panel, type the available memory PromQL query (for a specific instance), and demonstrate setting the unit, decimal places, and adding three background color-coded thresholds. Use a split-screen view showing the Grafana panel editor on the left and the resulting visualization on the right. Include a 3-question interactive mini-quiz on PromQL queries for specific panel types.

### Chapter 5.4 — Advanced Panel Types: Table, Gauge, and Bar Gauge

#### Learning objectives
*   Utilize the Table panel to display tabular data, including multiple metrics and labels.
*   Apply column transformations and value mappings within a Table panel for enhanced readability.
*   Configure a Gauge panel to visualize a single metric value within a radial progress indicator.
*   Implement a Bar Gauge panel to compare multiple metric values using horizontal bars.
*   Understand when to choose Table, Gauge, or Bar Gauge panels over Graph or Stat panels for specific monitoring scenarios.

#### Detailed lesson content
While Graph and Stat panels are workhorses for time-series and single-value displays, Grafana offers a suite of other panel types that provide unique ways to visualize your data, especially when you need to compare multiple items or present data in a tabular format. In this chapter, we'll explore the Table, Gauge, and Bar Gauge panels, understanding their strengths and how to effectively configure them.

The **Table panel** is invaluable when you need to display raw data, compare multiple metrics side-by-side, or show a list of items with their associated properties. Imagine you want to see the current CPU usage, memory usage, and disk usage for all your servers in a single, organized view. A Graph panel would be too cluttered, and multiple Stat panels would be inefficient. This is where the Table panel shines. To add one, select "Table" as your visualization type. Your PromQL queries for a Table panel often involve multiple metrics or labels. For example, to list all running instances from Node Exporter with their `up` status, you might use `up{job="node_exporter"}`. If you want to show the current CPU idle percentage for all instances, you could use `avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100`. The Table panel will automatically create columns for `instance`, `value`, and any other relevant labels.

A powerful feature of the Table panel is **transformations**. After your query, you can add transformations to refine the data before display. Common transformations include "Organize fields" (to reorder, rename, or hide columns), "Filter by name" (to include/exclude specific fields), or "Group by" (to aggregate rows). You can also apply **value mappings** to columns, similar to Stat panels, to color-code text or background based on numeric thresholds. For instance, you could map the `up` metric (0 or 1) to "Down" (red) or "Up" (green). This makes the table highly readable and allows for quick identification of issues. A common mistake with Table panels is using overly complex PromQL queries that return too many labels or series, making the table unwieldy. Focus on queries that return concise, relevant data.

Next, let's look at the **Gauge panel**. The Gauge panel is a visually appealing way to display a single metric's current value within a radial progress indicator. It's excellent for showing progress towards a target or a percentage-based metric in a compact, intuitive format. Think of a car's speedometer. It's perfect for metrics like CPU utilization, disk space usage percentage, or network bandwidth utilization. To use it, select "Gauge" as the visualization. Your PromQL query, like for a Stat panel, should return a single value. For example, `100 - (avg(rate(node_cpu_seconds_total{mode="idle", instance="localhost:9100"}[5m])) * 100)` would show the CPU utilization of a specific instance. The key configuration for a Gauge panel lies in its "Gauge options" and "Thresholds." You define the `Min` and `Max` values for the gauge (e.g., 0 to 100 for percentage), and then set color-coded thresholds. For example, a gauge showing disk usage might turn yellow at 70% and red at 90%. The visual impact of a Gauge panel is immediate, providing a quick health check.

Finally, the **Bar Gauge panel** offers a similar concept to the Gauge panel but is designed for comparing multiple values using horizontal bars. Instead of a single radial gauge, you get a list of bars, one for each series returned by your query. This is ideal when you want to compare the same metric across several instances or different components. For example, if you want to see the CPU utilization of all your servers side-by-side, the Bar Gauge is a great choice. Your PromQL query for a Bar Gauge would typically return multiple time series, such as `100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`. Each `instance` will then get its own bar.

Configuration for a Bar Gauge involves setting `Min` and `Max` values for the bars, and crucially, defining **thresholds** that apply to all bars. You can also customize the "Display mode" (e.g., "Basic" for simple bars, "LCD" for a digital readout, "Gradient" for color changes along the bar). The Bar Gauge provides an excellent visual summary for comparative analysis, allowing you to quickly spot which instances are performing differently from others. A common mistake with both Gauge and Bar Gauge panels is using queries that don't return numerical values or values outside the defined min/max range, leading to distorted or empty visualizations. Always ensure your PromQL query yields appropriate numeric output.

#### Key concepts
*   **Table Panel:** A Grafana panel type for displaying data in a tabular format, useful for comparing multiple metrics or listing items with properties.
*   **Column Transformations:** Features within the Table panel to manipulate column data, such as renaming, reordering, hiding, or applying value mappings.
*   **Gauge Panel:** A panel type that visualizes a single metric value as a radial progress indicator, typically used for percentage-based metrics or progress towards a target.
*   **Bar Gauge Panel:** A panel type that displays multiple metric values as a list of horizontal bars, ideal for comparing the same metric across different entities.
*   **Value Mapping (Table Panel):** Transforming numeric values in table columns into custom text or colors based on defined rules.

#### Hands-on activity
**Activity: Create Table, Gauge, and Bar Gauge Panels**

1.  **Add a Table Panel for Node Exporter Status:**
    On your dashboard, click "Add new panel" -> "Add an empty panel."
    Change the "Visualization" to "Table."
    In the "Query" tab, select your Prometheus data source.
    Enter the following PromQL query:
    ```promql
    up{job="node_exporter"}
    ```
    In "Panel options," set the "Title" to "Node Exporter Status."
    In the "Visualization" tab, under "Column styles," click "Add style rule."
    *   For "Column," select `Value`.
    *   For "Type," select `Value mappings`.
    *   Add a mapping: `Value: 0`, `Text: Down`, `Color: red`.
    *   Add a mapping: `Value: 1`, `Text: Up`, `Color: green`.
    Click "Apply." Observe how the `0` and `1` values are transformed into "Down" and "Up" with corresponding colors.

2.  **Add a Gauge Panel for Specific Instance CPU Usage:**
    Click "Add new panel" -> "Add an empty panel."
    Change the "Visualization" to "Gauge."
    In the "Query" tab, select your Prometheus data source.
    Enter the following PromQL query (replace `localhost:9100` with an actual instance):
    ```promql
    100 - (avg(rate(node_cpu_seconds_total{mode="idle", instance="localhost:9100"}[5m])) * 100)
    ```
    In "Panel options," set the "Title" to "Localhost CPU Usage."
    In the "Visualization" tab, under "Standard options," set the "Unit" to `percent (0-100)`.
    Under "Gauge options," set `Min: 0` and `Max: 100`.
    Under "Thresholds," add:
    *   `Value: 70`, `Color: yellow`
    *   `Value: 90`, `Color: red`
    Click "Apply."

3.  **Add a Bar Gauge Panel for All Instances CPU Usage:**
    Click "Add new panel" -> "Add an empty panel."
    Change the "Visualization" to "Bar Gauge."
    In the "Query" tab, select your Prometheus data source.
    Enter the PromQL query:
    ```promql
    100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
    ```
    In "Panel options," set the "Title" to "All Instances CPU Usage."
    In the "Visualization" tab, under "Standard options," set the "Unit" to `percent (0-100)`.
    Under "Bar Gauge options," set `Min: 0` and `Max: 100`.
    Under "Thresholds," add:
    *   `Value: 70`, `Color: yellow`
    *   `Value: 90`, `Color: red`
    Click "Apply." Arrange your new panels on the dashboard.

#### Assessment idea
1.  **Question:** You have multiple application instances, and each exposes a `http_requests_total` counter. You want to display a table showing the current request rate (requests/second) for each instance, along with its instance label. Additionally, if an instance's request rate drops to 0, you want its row to be highlighted in red. What PromQL query would you use for a Table panel, and how would you achieve the conditional highlighting?
    **Answer:** The PromQL query for the Table panel would be: `rate(http_requests_total[1m])`. This will return a series for each instance with its current request rate.
    To achieve conditional highlighting: In the Table panel's "Visualization" tab, under "Column styles," you would add a style rule.
    *   For "Column," select `Value`.
    *   For "Type," select `Thresholds`.
    *   Set `Thresholds: 0, 0.0001` (or a very small number above zero).
    *   Set `Color mode: Cell background`.
    *   Set `Colors: red, green`. (This means values <= 0 will be red, values > 0.0001 will be green).
    You could also use "Value mappings" if you want to display "No Traffic" instead of "0" and color it red.

2.  **Question:** Your Prometheus setup collects `node_disk_utilization_percent` for several disk partitions across multiple servers. You want a single panel that visually compares the utilization of the `/dev/sda1` partition across all your `node_exporter` instances, with a clear indication of which instances are nearing full capacity. Which panel type is most suitable, and why?
    **Answer:** The **Bar Gauge panel** is most suitable for this scenario.
    **Why:**
    *   It allows you to visualize multiple time series (one for each instance's `/dev/sda1` partition) as distinct horizontal bars.
    *   It provides an immediate visual comparison of the utilization percentages across all instances.
    *   You can easily apply color-coded thresholds (e.g., yellow for 70% and red for 90%) to all bars, making it very quick to identify which instances are nearing full capacity at a glance, without needing to click into individual graphs or read exact numbers from a table. A Gauge panel would only show one instance, and a Graph panel would show trends but not a direct side-by-side comparison of current values as effectively.

#### AI generation note
Create a 12-minute live coding video. Start with the existing dashboard. First, add a Table panel, use `up{job="node_exporter"}` query, and demonstrate column styling with value mappings for "Up"/"Down" status. Next, add a Gauge panel for a specific instance's memory usage percentage (`100 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100)`), showing min/max and color thresholds. Finally, add a Bar Gauge panel comparing `node_load1` across all instances, demonstrating thresholds and display modes. Use a split-screen view for code/panel editor and the resulting dashboard. Include a quick "Which panel for what?" reflection prompt.

### Chapter 5.5 — Templating and Variables: Building Dynamic Dashboards

#### Learning objectives
*   Explain the concept of templating and variables in Grafana and their importance for dynamic dashboards.
*   Create different types of template variables, including `Query`, `Custom`, and `Textbox`.
*   Utilize PromQL functions like `label_values` and `query_result` to populate `Query` variables dynamically.
*   Integrate template variables into panel queries and titles to create interactive dashboards.
*   Apply best practices for organizing and managing template variables for complex monitoring environments.

#### Detailed lesson content
Up to this point, our dashboards have been static. If you wanted to view the CPU utilization of a different server, you'd have to manually edit the PromQL query in each panel. This is inefficient and doesn't scale well in environments with many servers, services, or deployment stages. This is where **templating and variables** come in. Templating allows you to create dynamic and interactive dashboards that can adapt to different contexts without requiring manual modifications. Variables act as placeholders in your PromQL queries, panel titles, and other text fields. Instead of hardcoding values, you use variables, and Grafana provides dropdown selectors at the top of your dashboard to change these values on the fly. This transforms a static dashboard into a powerful, reusable tool, making it a cornerstone of efficient monitoring.

To begin creating variables, navigate to your dashboard settings (the gear icon) and select the "Variables" tab. Click "Add variable." Grafana supports several types of variables, but the most common for Prometheus are `Query` variables. A `Query` variable allows you to dynamically populate a dropdown list with values fetched directly from your Prometheus data source. For instance, to create a variable that lists all available `instance` labels from your `node_exporter` metrics, you would set the "Type" to `Query`, select your Prometheus data source, and use a PromQL query like `label_values(node_cpu_seconds_total, instance)`. This query tells Grafana to find all unique values for the `instance` label associated with the `node_cpu_seconds_total` metric. Other useful functions for `Query` variables include `label_values(metric, label)` for distinct label values, and `query_result(query)` for a list of values from a query's result.

Let's walk through creating a `Query` variable for instances. After setting the type and data source, give your variable a "Name" (e.g., `instance`). This name is what you'll use to reference the variable in your queries, typically as `$instance`. The "Label" is what appears next to the dropdown on the dashboard (e.g., "Server Instance"). In the "Query" field, you'd put `label_values(node_cpu_seconds_total, instance)`. You can also configure "Selection Options" like "Multi-value" (allowing selection of multiple instances) and "Include All option" (adding an "All" choice to the dropdown). The "All" option is particularly powerful as it automatically creates a regex-based query that matches all values, making your panels truly dynamic.

Once your variable is defined, you can integrate it into your panel queries. Instead of hardcoding `instance="localhost:9100"`, you would use `instance=~"$instance"`. The `~` operator in PromQL indicates a regex match, which is necessary when using multi-value variables or the "All" option. For example, your CPU utilization query would become `100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle", instance=~"$instance"}[5m])) * 100)`. Now, when you select a different instance from the dropdown, all panels using the `$instance` variable will automatically update. This dramatically reduces the number of dashboards you need to create and maintain.

Beyond `Query` variables, you might use `Custom` variables for a hardcoded list of options (e.g., `prod, staging, dev`), or `Textbox` variables for free-form input (e.g., a specific error code). `Constant` variables are useful for values that don't change but you want to reference by name.

**Common mistakes** with templating often include:
1.  **Incorrect PromQL for `label_values`:** Forgetting the metric name or using a label that doesn't exist for that metric. Always test your `label_values` query in Prometheus's own UI (`/graph`) first.
2.  **Missing `~` operator:** Using `=` instead of `=~` when the variable is multi-value or includes the "All" option. This will cause queries to fail or return no data.
3.  **Variable scope issues:** Trying to use a variable that hasn't been defined or is out of scope (e.g., trying to use a dashboard variable in an alert rule that doesn't support it).
4.  **Performance impact:** Overly complex `Query` variables or too many variables can slow down dashboard loading times, especially if they hit Prometheus frequently. Optimize your variable queries for speed.

**Best practices** for variable management include:
*   **Logical grouping:** Group related variables together (e.g., `datacenter`, `environment`, `instance`, `job`).
*   **Clear naming:** Use descriptive variable names (e.g., `instance` instead of `i`).
*   **Default values:** Set sensible default values for variables to ensure dashboards load with useful data.
*   **"All" option:** Leverage the "All" option for flexibility, but be mindful of the potential for heavy queries if too many series are selected.
*   **Documentation:** Add descriptions to your variables in Grafana to explain their purpose and how they are populated.

By mastering templating, you unlock the full potential of Grafana, creating highly flexible, reusable, and user-friendly dashboards that can adapt to the dynamic nature of modern cloud and DevOps environments. This significantly improves the efficiency of your monitoring efforts and empowers users to explore data more effectively.

#### Key concepts
*   **Templating:** A Grafana feature that allows creation of dynamic and interactive dashboards using variables.
*   **Variables:** Placeholders in Grafana queries, titles, or text that can be changed via dropdowns, making dashboards reusable.
*   **Query Variable:** A type of Grafana variable whose values are populated dynamically by a query to a data source (e.g., PromQL).
*   **`label_values()`:** A PromQL function used in Grafana `Query` variables to retrieve all unique values for a specific label from a given metric.
*   **`=~` (Regex Match Operator):** The PromQL operator used in conjunction with template variables, especially when "Multi-value" or "All" options are enabled, to match multiple series.
*   **"All" Option:** A selection option for variables that adds an "All" choice to the dropdown, automatically generating a regex to match all possible values.
*   **Dynamic Dashboards:** Dashboards that can change their displayed data based on user selections from variable dropdowns.

#### Hands-on activity
**Activity: Create an Instance Variable and Update Panels**

1.  **Create an `instance` Query Variable:**
    Go to your "My First Prometheus Dashboard."
    Click the "Dashboard settings" gear icon (⚙️) at the top right.
    Select the "Variables" tab.
    Click "Add variable."
    *   **Name:** `instance`
    *   **Label:** `Server Instance`
    *   **Type:** `Query`
    *   **Data source:** `Prometheus` (your configured Prometheus data source)
    *   **Query:** `label_values(node_cpu_seconds_total, instance)`
    *   Under "Selection Options," check "Multi-value" and "Include All option."
    Click "Add" and then "Save dashboard" (top right).
    You should now see a dropdown labeled "Server Instance" at the top of your dashboard, populated with your Node Exporter instances.

2.  **Update CPU Utilization Graph Panel:**
    Edit your "CPU Utilization (%)" Graph panel (click the panel title, then "Edit").
    In the "Query" tab, modify the PromQL query to use the `$instance` variable:
    ```promql
    100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle", instance=~"$instance"}[5m])) * 100)
    ```
    Click "Apply."

3.  **Update Available Memory Stat Panel:**
    Edit your "Available Memory (GB)" Stat panel.
    In the "Query" tab, modify the PromQL query to use the `$instance` variable (ensure you remove any hardcoded instance name):
    ```promql
    node_memory_MemAvailable_bytes{instance=~"$instance"}
    ```
    *Important:* For a Stat panel to work correctly with a multi-value variable, you might need to add an aggregation function if the query returns multiple series. For simplicity in this exercise, ensure only one instance is selected in the dropdown for the Stat panel to display a single value. If "All" is selected, the Stat panel might show "N/A" or sum all values. For a single-value panel, it's often better to restrict the variable to single-value selection or use an aggregation like `sum(node_memory_MemAvailable_bytes{instance=~"$instance"})`. For now, we'll keep it simple and assume a single instance is selected.
    Click "Apply."

4.  **Test the Dynamic Dashboard:**
    Go back to the dashboard view. Use the "Server Instance" dropdown to select different instances or the "All" option. Observe how your Graph and Stat panels dynamically update to reflect the selected instance(s).

#### Assessment idea
1.  **Question:** You have a Grafana dashboard with a variable named `$job` that allows users to select different Prometheus jobs (e.g., `node_exporter`, `cadvisor`). You want to create a new panel that displays the `up` metric for all targets belonging to the selected job. Write the PromQL query you would use in this panel.
    **Answer:** The PromQL query would be: `up{job=~"$job"}`.
    **Explanation:** The `$job` variable will be substituted with the selected job name(s). The `=~` operator is crucial because the `$job` variable might be configured to allow multi-value selection or include an "All" option, which would result in a regex pattern. Using `=~` ensures the query correctly matches all targets associated with the chosen job(s).

2.  **Question:** Your team is using a `Query` variable in Grafana to dynamically populate a list of `namespace` labels from Kubernetes metrics. The variable is named `$namespace` and is populated using `label_values(kube_pod_info, namespace)`. However, when users select "All" from the `$namespace` dropdown, some panels on the dashboard show "No data" or incorrect aggregations. What is the most likely reason for this issue, and how can it be resolved?
    **Answer:** The most likely reason is that the PromQL queries in those panels are using the `=` operator (exact match) instead of the `=~` operator (regex match) with the `$namespace` variable. When "All" is selected, Grafana replaces `$namespace` with a regex that matches all namespaces (e.g., `(namespace1|namespace2|...)` or `.*`). The `=` operator cannot interpret this regex, leading to no data.
    **Resolution:** Update all PromQL queries in the affected panels to use the `=~` operator with the `$namespace` variable. For example, change `metric_name{namespace="$namespace"}` to `metric_name{namespace=~"$namespace"}`. Additionally, for single-value panels (like Stat or Gauge) that might show "N/A" with "All" selected, consider adding an aggregation function (e.g., `sum()`, `avg()`) around the query if a combined value is desired, or explicitly setting the variable to be single-value only if a single entity display is strictly required.

#### AI generation note
Create a 15-minute live coding video. Start with the existing dashboard and its panels. First, demonstrate creating a `Query` variable named `$instance` using `label_values(node_cpu_seconds_total, instance)`, showing "Multi-value" and "Include All option" settings. Then, refactor the existing CPU Graph panel and Available Memory Stat panel to use `instance=~"$instance"`. Show the dashboard in action, selecting single instances and the "All" option, highlighting how panels dynamically update. Include a common mistake section showing what happens if `=` is used instead of `=~` with multi-value variables. End with a 2-question interactive mini-quiz on the purpose of different variable types.

---

## Module 6: Advanced Grafana: Dashboards, Templating & Alerts

**Module Goal:** By the end of this module, learners will be able to design and implement sophisticated Grafana dashboards, leverage templating for dynamic visualizations, configure advanced alerting rules, and apply best practices for dashboard management and maintenance within a Prometheus monitoring ecosystem.

### Chapter 6.1 — Building Advanced Grafana Dashboards

#### Learning objectives
*   Design and configure advanced Grafana panel types beyond basic graphs, such as Stat, Gauge, Table, and Heatmap panels.
*   Apply data transformations to refine and manipulate query results directly within Grafana panels.
*   Organize complex dashboards effectively using rows, panels, and annotations for improved readability and analysis.
*   Understand and utilize Grafana's built-in functions to enhance data presentation and derive new metrics.
*   Identify common pitfalls in dashboard design and implement strategies to create clear, actionable visualizations.

#### Detailed lesson content
Welcome back, future observability experts! In our previous module, we laid the groundwork for Grafana, understanding its interface and creating basic visualizations. Now, we're going to elevate our dashboard game, moving beyond simple time-series graphs to build truly powerful and insightful monitoring displays. The goal of an advanced dashboard isn't just to show data, but to tell a story about your system's health, performance, and behavior at a glance. We'll start by exploring a wider array of panel types, each suited for different kinds of data and analytical needs.

One of the most immediate ways to enhance a dashboard is by incorporating panels that highlight key performance indicators (KPIs) or critical thresholds. For instance, a **Stat panel** is excellent for displaying a single, aggregated value, like the current CPU utilization across your fleet or the total number of active users. You can configure its color based on thresholds, making it immediately clear if a metric is in a healthy, warning, or critical state. Imagine a dashboard with a large green "95% Uptime" stat, turning yellow if it drops to 90%, and red below that. Similarly, **Gauge panels** provide a visual representation of a single value within a range, perfect for showing resource consumption like disk space or memory usage, with color-coded zones indicating health.

Beyond single-value displays, **Table panels** offer a powerful way to present tabular data, which is especially useful for displaying the output of complex PromQL queries that return multiple labels or aggregated results. For example, you might use a table to list the top 10 services by error rate, including their specific error counts and response times. Grafana's table panel allows for sorting, column styling, and even integrating sparklines for mini-graphs within table cells, providing a compact yet rich data view. Another incredibly insightful panel type is the **Heatmap panel**. This panel excels at visualizing the distribution of values over time, often used for latency histograms or request durations. Instead of a single line, a heatmap shows density, with warmer colors indicating more frequent occurrences. This is invaluable for detecting "long tail" latencies or understanding performance bottlenecks that might be hidden in average metrics. For example, if you're monitoring HTTP request durations, a heatmap can quickly reveal if a small percentage of requests are consistently taking a very long time, even if the average latency looks acceptable.

Data transformations are another powerful feature within Grafana that allows you to manipulate query results before they are visualized. Instead of performing all data processing in PromQL, you can use Grafana's built-in transformations to achieve specific display requirements. Common transformations include `Organize fields` to reorder or hide columns, `Rename by regex` to clean up metric names, `Reduce` to apply aggregations like sum, average, min, or max across series, and `Join by field` to combine results from multiple queries. For instance, if you have two queries, one for `http_requests_total` and another for `http_errors_total`, you could use a `Reduce` transformation to calculate the rate of each, then a `Join by field` transformation to combine them into a single table, and finally an `Add field from calculation` transformation to compute the error rate percentage. This modular approach keeps your PromQL queries simpler and allows for flexible data presentation.

```promql
# Query A: Total HTTP requests
sum(rate(http_requests_total[5m])) by (job, instance)

# Query B: Total HTTP errors
sum(rate(http_errors_total[5m])) by (job, instance)
```
In Grafana, you would add two queries (A and B) to a panel. Then, in the "Transform" tab, you might add:
1.  **Reduce:** Apply `Sum` to Query A and Query B, grouping by `job` and `instance`.
2.  **Join by field:** Join the results of Query A and Query B on `job` and `instance`.
3.  **Add field from calculation:** Create a new field `error_percentage` using the formula `B / A * 100`.

Organizing these advanced panels into a coherent dashboard is crucial for usability. Grafana offers **Rows** to group related panels, making it easier to navigate large dashboards. You can collapse rows to hide sections you don't immediately need, reducing visual clutter. **Annotations** are another powerful tool for adding context to your dashboards. These are markers on your graphs that can indicate events like deployments, configuration changes, or major incidents. By adding annotations, you can quickly correlate changes in your metrics with specific events, aiding in root cause analysis. For example, if you see a spike in error rates, an annotation marking a recent deployment can immediately point you towards a potential cause. You can fetch annotations from various sources, including Prometheus alerts, external APIs, or manually add them.

When designing dashboards, a common mistake is trying to cram too much information into a single view, leading to an overwhelming and unreadable display. Instead, aim for dashboards that tell a focused story. Consider creating multiple dashboards for different purposes: an "overview" dashboard for high-level health, a "deep dive" dashboard for specific service troubleshooting, and a "capacity planning" dashboard for long-term trends. Another pitfall is using inconsistent naming conventions or units, which can confuse users. Always strive for clarity, consistent labeling, and appropriate units for your metrics. For safety and maintainability, always test your queries and transformations thoroughly before deploying dashboards to production. Ensure that sensitive information is not inadvertently exposed through panel titles or annotations, especially if dashboards are accessible to a wider audience. Remember, a well-designed dashboard is a powerful communication tool, enabling quick decision-making and proactive problem-solving.

#### Key concepts
*   **Stat Panel:** A Grafana panel type used to display a single, aggregated value, often with color-coded thresholds.
*   **Gauge Panel:** A Grafana panel type that visualizes a single value within a defined range, typically with color-coded zones for health.
*   **Table Panel:** A Grafana panel type for displaying tabular data from queries, supporting sorting, styling, and sparklines.
*   **Heatmap Panel:** A Grafana panel type that visualizes the distribution of values over time, using color intensity to show density, ideal for latency or frequency analysis.
*   **Data Transformations:** Grafana features that allow manipulation and refinement of query results directly within the panel before visualization (e.g., Reduce, Join, Organize fields).
*   **Rows:** A Grafana dashboard organizational element used to group related panels, which can be collapsed to reduce clutter.
*   **Annotations:** Markers on Grafana graphs that represent events (e.g., deployments, incidents) to provide context for metric changes.

#### Hands-on activity
**Activity: Build a Comprehensive Node Exporter Dashboard**

Let's create an advanced dashboard to monitor a server using Node Exporter metrics.

1.  **Objective:** Create a dashboard with multiple panel types to display CPU, memory, disk, and network usage, along with system uptime.
2.  **Prerequisites:** A running Prometheus instance scraping Node Exporter (from Module 4).
3.  **Steps:**
    *   Create a new Grafana dashboard.
    *   Add a **Stat panel** for system uptime.
        *   Query: `node_time_seconds - node_boot_time_seconds`
        *   Options: Unit `seconds (s)`, `No data = 0`. Use `Organize fields` transformation to rename the field to "Uptime".
    *   Add a **Gauge panel** for current memory usage percentage.
        *   Query: `100 * (node_memory_MemTotal_bytes - node_memory_MemFree_bytes - node_memory_Buffers_bytes - node_memory_Cached_bytes) / node_memory_MemTotal_bytes`
        *   Options: Unit `percent (0-100)`, add thresholds (e.g., 70% yellow, 90% red).
    *   Add a **Graph panel** for CPU utilization per core.
        *   Query: `100 - (avg by (instance, cpu) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`
        *   Options: Unit `percent (0-100)`.
    *   Add a **Table panel** to show disk I/O operations per second.
        *   Query A: `rate(node_disk_reads_completed_total[5m])`
        *   Query B: `rate(node_disk_writes_completed_total[5m])`
        *   Transformations: `Join by field` on `instance, device`. `Rename by regex` to clean up metric names.
    *   Add a **Heatmap panel** for network packet errors.
        *   Query: `sum by (instance, device) (rate(node_network_receive_errs_total[5m]))`
        *   Options: Select `Heatmap` visualization.
    *   Organize your panels into logical rows (e.g., "System Overview", "Resource Usage", "Disk & Network").
    *   Save your dashboard.

#### Assessment idea
1.  **Question:** You need to display the current HTTP request latency distribution for a service, showing how many requests fall into different latency buckets (e.g., 0-100ms, 100-200ms, etc.) over time, to identify if a "long tail" of slow requests is emerging. Which Grafana panel type is best suited for this visualization?
    *   A) Stat Panel
    *   B) Gauge Panel
    *   C) Heatmap Panel
    *   D) Table Panel

    **Correct Answer:** C) Heatmap Panel
    **Explanation:** A Heatmap panel is specifically designed to visualize the distribution of values over time. For latency histograms, it can effectively show the density of requests within different latency buckets, making it easy to spot long-tail latencies (where a small percentage of requests are taking much longer) that might be obscured by average metrics in a simple graph.

2.  **Question:** You have two Prometheus queries: `query_A` returns `http_requests_total` and `query_B` returns `http_errors_total`. You want to display a single value on your dashboard showing the percentage of errors (`http_errors_total / http_requests_total * 100`). Describe the sequence of Grafana transformations you would apply to achieve this, assuming both queries return similar labels.

    **Correct Answer:**
    To achieve this, you would use the following sequence of Grafana transformations:
    1.  **Reduce:** Apply a `Reduce` transformation to both `query_A` and `query_B`. For each query, select the `Calculate` option and choose `Last (not null)` or `Sum` depending on whether you want the latest value or a sum over a range. This will convert the time series into single values.
    2.  **Join by field:** Apply a `Join by field` transformation. Join the results of `query_A` and `query_B` using a common field (e.g., `instance` or `job`) if they have one, or simply join by index if they are guaranteed to return single, corresponding values. This combines the two values into a single row.
    3.  **Add field from calculation:** Apply an `Add field from calculation` transformation. Choose `Binary operation` and define the expression as `query_B_value / query_A_value * 100`. This will create a new field representing the error percentage.
    This resulting field can then be displayed in a Stat or Gauge panel.

#### AI generation note
Create a 12-minute video tutorial. Start with an existing basic Grafana dashboard. Demonstrate adding and configuring a Stat panel for uptime, a Gauge panel for memory usage, and a Table panel showing disk I/O. For the Table panel, explicitly show applying `Join by field` and `Rename by regex` transformations. Use a split-screen view for Grafana UI and a terminal showing Prometheus targets. Emphasize common mistakes like cluttered dashboards. End with a reflection prompt asking learners to consider which panel types are best for different types of metrics in their own systems.

### Chapter 6.2 — Grafana Templating with Variables

#### Learning objectives
*   Explain the concept and benefits of Grafana templating for creating dynamic and reusable dashboards.
*   Configure and utilize various types of template variables, including `Query`, `Custom`, `Text Box`, and `Constant` variables.
*   Implement `Query` variables to dynamically populate dropdowns with values from Prometheus metrics labels (e.g., `instance`, `job`, `container`).
*   Apply template variables within PromQL queries and panel titles to create interactive and context-aware visualizations.
*   Understand and mitigate common issues related to variable interpolation and multi-value selections in complex queries.

#### Detailed lesson content
Imagine you have a fleet of 50 servers, and you want to monitor their CPU usage, memory, and disk I/O. Without templating, you would need to create 50 separate dashboards, or at least 50 copies of the same panel, each hardcoded for a specific server. This is not only tedious but also incredibly difficult to maintain. This is where Grafana templating comes to our rescue. Templating allows you to create dynamic and reusable dashboards by defining variables that can be selected by the user, changing the data displayed across all panels simultaneously. It transforms static dashboards into interactive, powerful tools.

The core idea behind templating is to replace hardcoded values in your PromQL queries, panel titles, and even links with variables. When a user selects a value from a dropdown (which is populated by a variable), that value is injected into all the relevant queries and text on the dashboard, instantly updating the displayed data. This makes your dashboards incredibly flexible and adaptable to different contexts, whether you're monitoring a specific server, a particular service, or a subset of containers.

Let's dive into the different types of variables you can define in Grafana. The most common and powerful type is the **Query variable**. This variable type allows you to dynamically fetch a list of values from your data source (in our case, Prometheus) and populate a dropdown selector. For example, if you want to select which `instance` to monitor, you can create a query variable that runs a PromQL query like `label_values(node_cpu_seconds_total, instance)`. This query will return all unique `instance` label values present in the `node_cpu_seconds_total` metric, and Grafana will populate a dropdown with these values. When a user selects an instance, say `server-01:9100`, this value is then used in your dashboard's PromQL queries, like `node_cpu_seconds_total{instance="$instance"}`. The `$instance` syntax tells Grafana to substitute the selected variable value.

```promql
# Query for a 'job' variable
label_values(up, job)

# Query for an 'instance' variable, filtered by selected 'job'
label_values(up{job="$job"}, instance)

# Example PromQL query using variables in a panel
sum(rate(node_cpu_seconds_total{instance="$instance", mode="idle"}[5m])) by (cpu)
```
Notice how the `instance` variable query itself can depend on another variable, `$job`. This allows for cascading dropdowns, where selecting a `job` filters the available `instance` values, creating a highly intuitive user experience.

Besides `Query` variables, we have other useful types:
*   **Custom variables:** These allow you to define a static, comma-separated list of values manually. This is useful for fixed sets of environments (e.g., `dev, staging, prod`) or specific application versions.
*   **Text box variables:** Provide a free-form text input field for the user. This is less common but can be useful for entering arbitrary IDs or search terms.
*   **Constant variables:** Hidden variables that store a fixed value. These are often used for environment-specific configurations or to simplify complex PromQL queries by abstracting common parts. For example, a constant variable `prometheus_datasource` could store the name of your Prometheus data source, used in other variable queries.
*   **Ad hoc filters:** While not a variable in the traditional sense, ad hoc filters provide a way to add arbitrary key-value filters to all queries on a dashboard. This is incredibly powerful for on-the-fly debugging and exploration.

When using variables in your PromQL queries, it's essential to understand how Grafana interpolates them, especially when dealing with multi-value selections. If a user selects multiple values for a variable (e.g., `instance-01`, `instance-02`), Grafana needs to know how to format this into the PromQL query. By default, Grafana will format multi-value variables as a regex expression, like `{instance=~"instance-01|instance-02"}`. This is usually what you want for label matching. However, for some functions or specific use cases, you might need different formatting. Grafana provides options like `csv` (comma-separated), `singlequote` (each value quoted), or `pipe` (pipe-separated) in the variable's "Format" options, which can be crucial for advanced scenarios.

A common mistake beginners make is forgetting to quote string values when using variables in PromQL. For example, if `$instance` is a string, `node_cpu_seconds_total{instance=$instance}` will likely fail. It should almost always be `node_cpu_seconds_total{instance="$instance"}`. However, when using regex matching with `instance=~"$instance"`, the quotes are often omitted because Grafana handles the regex formatting. Always test your queries with different variable selections to ensure they behave as expected.

Another important consideration is the performance impact of complex variable queries. If your `label_values` queries are slow or return a huge number of labels, it can significantly slow down dashboard loading. Optimize your variable queries by adding filters where possible (e.g., `label_values(up{job="my_service"}, instance)` instead of `label_values(up, instance)`). Also, be mindful of the "All" option for variables. While convenient, selecting "All" for a variable that results in a very broad regex query can put a significant load on your Prometheus server, especially if the metric has high cardinality. Use the "All" option judiciously and ensure your Prometheus instance can handle the resulting query load.

Templating is a cornerstone of effective Grafana usage. It empowers you to build dashboards that are not only informative but also highly interactive and scalable, reducing maintenance overhead and improving the user experience for anyone monitoring your systems.

#### Key concepts
*   **Templating:** A Grafana feature that allows for the creation of dynamic and reusable dashboards using variables to replace hardcoded values.
*   **Template Variable:** A placeholder that can be used in queries, panel titles, and links, whose value can be selected by the user.
*   **Query Variable:** A type of template variable that fetches a list of values dynamically from a data source (e.g., Prometheus labels) to populate a dropdown.
*   **Custom Variable:** A type of template variable where values are manually defined as a static, comma-separated list.
*   **Text Box Variable:** A type of template variable that provides a free-form text input field for the user.
*   **Constant Variable:** A hidden template variable that stores a fixed value, often used for environment-specific configurations or query abstraction.
*   **Ad hoc filters:** A Grafana feature allowing users to add arbitrary key-value filters to all queries on a dashboard dynamically.
*   **Multi-value selection:** The ability for a user to select multiple values for a variable, which Grafana typically formats as a regex expression in PromQL (e.g., `{label=~"val1|val2"}`).

#### Hands-on activity
**Activity: Create a Dynamic Service Overview Dashboard**

Let's build a dashboard that allows users to select a specific `job` and then an `instance` to monitor.

1.  **Objective:** Create a dashboard with two dropdowns: one for `job` and one for `instance`, where `instance` options depend on the selected `job`.
2.  **Prerequisites:** A running Prometheus instance scraping multiple services/jobs (e.g., Node Exporter, cAdvisor, custom application exporter).
3.  **Steps:**
    *   Create a new Grafana dashboard.
    *   Go to Dashboard Settings (gear icon) -> Variables.
    *   **Add a new variable for `job`:**
        *   Name: `job`
        *   Type: `Query`
        *   Data source: `Prometheus`
        *   Query: `label_values(up, job)`
        *   Options: Enable `Multi-value` and `Include All option`.
    *   **Add a new variable for `instance`:**
        *   Name: `instance`
        *   Type: `Query`
        *   Data source: `Prometheus`
        *   Query: `label_values(up{job="$job"}, instance)` (Note the use of `$job` to filter instances)
        *   Options: Enable `Multi-value` and `Include All option`.
    *   Go back to the dashboard. You should see two dropdowns at the top.
    *   **Add a Graph panel for CPU usage:**
        *   Title: `CPU Usage for $instance (Job: $job)`
        *   Query: `100 - (avg by (cpu) (rate(node_cpu_seconds_total{job="$job", instance="$instance", mode="idle"}[5m])) * 100)`
        *   Options: Unit `percent (0-100)`.
    *   **Add a Stat panel for Memory Usage:**
        *   Title: `Memory Usage for $instance`
        *   Query: `100 * (node_memory_MemTotal_bytes{job="$job", instance="$instance"} - node_memory_MemFree_bytes{job="$job", instance="$instance"} - node_memory_Buffers_bytes{job="$job", instance="$instance"} - node_memory_Cached_bytes{job="$job", instance="$instance"}) / node_memory_MemTotal_bytes{job="$job", instance="$instance"}`
        *   Options: Unit `percent (0-100)`, add thresholds.
    *   Test your dashboard by selecting different `job` and `instance` values from the dropdowns. Observe how the panels update dynamically.
    *   Save your dashboard.

#### Assessment idea
1.  **Question:** You're building a Grafana dashboard to monitor a Kubernetes cluster. You want to allow users to select a specific `namespace` and then a specific `pod` within that namespace. Which sequence of variable types and queries would you use to achieve this cascading selection?
    *   A) Two `Custom` variables, manually listing namespaces and pods.
    *   B) A `Query` variable for `namespace` using `label_values(kube_pod_info, namespace)`, and another `Query` variable for `pod` using `label_values(kube_pod_info{namespace="$namespace"}, pod)`.
    *   C) A `Text Box` variable for `namespace` and a `Query` variable for `pod` using `label_values(kube_pod_info{namespace=~"$namespace.*"}, pod)`.
    *   D) A `Constant` variable for `namespace` and a `Query` variable for `pod`.

    **Correct Answer:** B) A `Query` variable for `namespace` using `label_values(kube_pod_info, namespace)`, and another `Query` variable for `pod` using `label_values(kube_pod_info{namespace="$namespace"}, pod)`.
    **Explanation:** This approach correctly uses `Query` variables to dynamically fetch values from Prometheus. The second variable for `pod` correctly uses the `$namespace` variable in its own query, creating the desired cascading effect where selecting a namespace filters the available pods.

2.  **Question:** You have a Grafana dashboard with a variable named `$service` that allows multi-value selection. If a user selects "frontend" and "backend" for `$service`, how will Grafana typically format this variable when used in a PromQL query like `http_requests_total{service=~"$service"}`? What is a common mistake when using multi-value variables in PromQL, and how can it be avoided?

    **Correct Answer:**
    When a user selects "frontend" and "backend" for a multi-value variable `$service` and it's used as `http_requests_total{service=~"$service"}`, Grafana will typically format it into a regex expression: `http_requests_total{service=~"frontend|backend"}`.

    A common mistake is forgetting to use the regex operator `=~` when expecting multi-value selection. If you were to write `http_requests_total{service="$service"}`, and multiple values are selected, the query would become `http_requests_total{service="frontend,backend"}` (or similar, depending on variable formatting), which would likely not match any label and result in no data.

    To avoid this, always use the `=~` (regex match) operator when your variable is configured for multi-value selection and you intend to match any of the selected values. Grafana's default formatting for multi-value variables is designed to work seamlessly with `=~`. If you need a different format (e.g., a comma-separated list for a specific function), you must explicitly configure the variable's "Format" option.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Begin by showing a static dashboard for a single server. Then, demonstrate step-by-step how to add a `Query` variable for `job` and then a cascading `Query` variable for `instance`. Show how to integrate these variables into existing PromQL queries in graph and stat panels. Include a segment demonstrating multi-value selection and how Grafana formats the query. Highlight the common mistake of using `=` instead of `=~` for multi-value variables. The interactive element should be a guided exercise where learners modify a provided dashboard JSON to add a `Custom` variable for `environment` (dev, staging, prod) and apply it to a panel title.

### Chapter 6.3 — Advanced Alerting in Grafana

#### Learning objectives
*   Understand the architecture and workflow of Grafana alerting, including the role of alert rules, notification channels, and alert states.
*   Configure complex Grafana alert rules using PromQL expressions, combining multiple conditions and data sources.
*   Set up and manage various notification channels, such as email, Slack, PagerDuty, and webhooks.
*   Implement best practices for designing effective alert rules to minimize noise and ensure timely responses.
*   Troubleshoot common issues with Grafana alerts, including misfiring, flapping, and silent alerts.

#### Detailed lesson content
Alerting is the crucial bridge between observing your systems and taking action. While Prometheus has its own robust alerting system (Alertmanager, which we covered in Module 4), Grafana also provides powerful built-in alerting capabilities, especially useful for alerts derived directly from dashboard panels or for users who prefer a unified monitoring and alerting interface. Grafana's alerting system allows you to define rules based on the data displayed in your panels, evaluate these rules periodically, and send notifications when conditions are met.

The core of Grafana alerting is the **Alert Rule**. An alert rule is attached to a Grafana panel and evaluates the panel's query results against specified conditions. When these conditions are met, the alert transitions through different states. The typical workflow involves:
1.  **Defining the query:** This is the PromQL query that the panel uses to fetch data.
2.  **Setting the condition:** This specifies when the alert should fire (e.g., "value is above 90 for 5 minutes").
3.  **Configuring notification channels:** Where and how the alert message should be sent (e.g., Slack, email).

Let's look at how to configure an alert rule. Within any compatible Grafana panel (like a Graph, Stat, or Table panel), you'll find an "Alert" tab. Here, you define the alert rule's name, evaluation interval (how often Grafana checks the condition), and the duration for which the condition must be met before firing. For instance, an alert might be configured to "fire if CPU usage is above 90% for 5 minutes." This "for 5 minutes" duration is critical to prevent alert flapping, where an alert rapidly switches between firing and resolved states due to transient spikes.

The alert condition itself is usually based on a PromQL query. You can use standard PromQL functions and operators. For example, to alert if the average CPU idle time drops below 10% (meaning CPU usage is above 90%) on any instance:
```promql
100 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m]))
```
You would then set the condition to `IS ABOVE 90`. Grafana allows you to define multiple conditions, combining them with `AND` or `OR` logic, enabling highly sophisticated alert rules. For example, you might alert if "CPU is above 90% AND memory is above 80%." You can also specify `No Data` and `Error` handling, deciding whether to mark the alert as `No Data`, `Alerting`, or `OK` if the query returns no data or an error. This prevents false negatives or positives due to data source issues.

Once an alert condition is met, Grafana needs to tell someone. This is handled by **Notification Channels**. Grafana supports a wide array of channels:
*   **Email:** Sends alerts via SMTP.
*   **Slack:** Integrates with Slack webhooks to post messages to channels.
*   **PagerDuty:** Integrates with PagerDuty to trigger incidents.
*   **Webhook:** Sends a generic HTTP POST request to a specified URL, allowing integration with custom systems or other alert managers.
*   **Microsoft Teams, OpsGenie, VictorOps, Telegram, etc.:** Many other integrations are available.

Configuring a notification channel is straightforward. You navigate to "Alerting" -> "Notification channels" in Grafana, add a new channel, select its type, and provide the necessary credentials or URLs (e.g., Slack webhook URL, PagerDuty integration key). You can then attach one or more notification channels to each alert rule. It's good practice to create separate channels for different severity levels (e.g., a "critical alerts" Slack channel, a "warning alerts" email list).

Designing effective alert rules is an art. A common mistake is creating too many alerts or alerts that fire too frequently for non-critical issues, leading to "alert fatigue." This causes operators to ignore alerts, potentially missing real incidents. To avoid this:
*   **Focus on symptoms, not causes:** Alert on high error rates, slow response times, or resource exhaustion, rather than on individual component failures, which might be symptoms of a larger issue.
*   **Use appropriate thresholds and durations:** Set thresholds that truly indicate a problem, and use `FOR` durations to filter out transient spikes.
*   **Prioritize alerts:** Not all alerts are equally critical. Use different notification channels or severity levels to distinguish between informational, warning, and critical alerts.
*   **Provide context:** Ensure alert messages contain enough information (e.g., affected service, instance, metric values, links to relevant dashboards) to help responders quickly understand and diagnose the issue.

Troubleshooting Grafana alerts often involves checking the "Alerting" tab within the panel itself, which shows the current state, last evaluation time, and any errors. You can also view the "Alert Rules" list under the main "Alerting" menu to see all rules and their current states. If an alert isn't firing, double-check:
*   **Query correctness:** Is the PromQL query returning the expected data?
*   **Condition logic:** Is the `IS ABOVE`, `IS BELOW`, `HAS NO VALUE` logic correct?
*   **`FOR` duration:** Has the condition been met for the specified duration?
*   **Notification channel configuration:** Is the channel correctly set up and attached to the alert? Are there any network issues preventing Grafana from reaching the notification endpoint?
*   **Grafana server logs:** Check the Grafana server logs for any errors related to alert evaluation or sending notifications.

Safety notes: Be cautious when configuring alerts that trigger automated actions (e.g., webhooks that restart services). Thoroughly test these alerts in a staging environment first. Ensure that sensitive information is not inadvertently included in alert messages sent to public channels. Regularly review and prune old or irrelevant alert rules to prevent alert fatigue and maintain a clean alerting environment.

#### Key concepts
*   **Alert Rule:** A configuration in Grafana attached to a panel that evaluates query results against conditions and triggers notifications.
*   **Alert State:** The current status of an alert rule, typically `OK`, `Pending`, `Firing`, or `No Data`.
*   **Evaluation Interval:** How frequently Grafana checks an alert rule's conditions.
*   **`FOR` Duration:** The period for which an alert condition must be met before the alert transitions to the `Firing` state, preventing flapping.
*   **Notification Channel:** A configured endpoint (e.g., email, Slack, PagerDuty, webhook) to which Grafana sends alert messages.
*   **Alert Flapping:** When an alert rapidly switches between `Firing` and `OK` states due to transient metric fluctuations.
*   **Alert Fatigue:** A state where operators become desensitized to alerts due to excessive or non-critical notifications, leading to missed critical incidents.

#### Hands-on activity
**Activity: Configure a Critical CPU Usage Alert**

Let's set up a critical alert for high CPU usage and send it to a mock webhook or email.

1.  **Objective:** Create an alert rule that fires if any server's CPU utilization exceeds 90% for 2 minutes, and send a notification.
2.  **Prerequisites:** A running Grafana instance, Prometheus scraping Node Exporter, and access to configure a notification channel (e.g., a test email address or a simple webhook receiver like `webhook.site`).
3.  **Steps:**
    *   **1. Configure a Notification Channel:**
        *   Navigate to "Alerting" -> "Notification channels".
        *   Click "Add channel".
        *   Name: `Critical Alerts`
        *   Type: `Email` (or `Webhook` if you have `webhook.site` or similar).
        *   If Email: Enter a test email address.
        *   If Webhook: Go to `webhook.site`, copy the unique URL, paste it into Grafana's URL field.
        *   Click "Send Test" to ensure it works. Save the channel.
    *   **2. Create a Dashboard and Panel:**
        *   Create a new dashboard (or use an existing one).
        *   Add a new Graph panel.
        *   Query: `100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`
        *   Legend: `{{instance}} CPU Usage`
        *   Unit: `percent (0-100)`
    *   **3. Configure the Alert Rule:**
        *   Go to the "Alert" tab within the Graph panel.
        *   Click "Create Alert".
        *   Name: `High CPU Usage`
        *   Evaluate every: `1m`
        *   For: `2m` (This means the condition must be true for 2 minutes before firing)
        *   Conditions:
            *   `WHEN` `avg()` `OF` `query(A, 5m, now)` `IS ABOVE` `90`
        *   No Data Option: `Alerting`
        *   Error Option: `Alerting`
        *   Notifications:
            *   Add notification: Select `Critical Alerts` channel.
            *   Message: `Critical: High CPU usage on {{instance}}! Current value: {{value}}%`
    *   **4. Test the Alert:**
        *   If you have a way to artificially increase CPU on a monitored instance, do so. Otherwise, temporarily lower the alert threshold (e.g., to 1%) and reduce the `FOR` duration (e.g., to `10s`) for testing, then revert.
        *   Observe the alert state in the panel and in the "Alert Rules" list.
        *   Check your email or `webhook.site` for the notification.
    *   **5. Clean up:** Delete the test alert or revert thresholds.

#### Assessment idea
1.  **Question:** You have an alert rule configured in Grafana that monitors the `http_requests_total` metric. The condition is set to `WHEN sum() OF query(A, 5m, now) IS ABOVE 1000`. The "Evaluate every" is set to `30s` and "For" is set to `5m`. What does the "For: 5m" setting specifically achieve, and why is it important?

    **Correct Answer:**
    The "For: 5m" setting means that the alert condition (sum of `http_requests_total` above 1000) must be true for a continuous period of 5 minutes before the alert officially transitions from `Pending` to `Firing`.

    This setting is critically important because it prevents "alert flapping" and reduces "alert fatigue." Without a `FOR` duration, an alert might fire and resolve repeatedly due to transient spikes or minor fluctuations in metrics that don't represent a sustained problem. By requiring the condition to persist for 5 minutes, it ensures that only genuine, sustained issues trigger notifications, leading to more actionable alerts and preventing operators from being overwhelmed by false positives.

2.  **Question:** Your Grafana alert for "Disk Space Full" is not firing, even though you can clearly see the disk usage metric (`node_filesystem_avail_bytes`) is very low on your dashboard. You've checked the PromQL query, and it looks correct. What are three common areas you should investigate to troubleshoot why the alert isn't firing?

    **Correct Answer:**
    Three common areas to investigate when a Grafana alert isn't firing:
    1.  **Alert Condition and `FOR` Duration:**
        *   **Condition Logic:** Double-check the `WHEN` condition (e.g., `IS BELOW`, `IS ABOVE`). Is the threshold set correctly? Is it comparing against the right value?
        *   **`FOR` Duration:** Has the problematic condition (e.g., low disk space) persisted for the entire duration specified in the `FOR` field? If the disk space briefly dipped but recovered before the `FOR` duration elapsed, the alert would remain in `Pending` state and not fire.
    2.  **Data Source and Query Execution:**
        *   **Prometheus Data:** Is Prometheus actually scraping the `node_filesystem_avail_bytes` metric for the affected instance? Check Prometheus targets.
        *   **Grafana Query:** Does the PromQL query within the alert panel return data when manually run in Grafana's Explore view? Are there any errors in the query? Is the time range for the alert evaluation correct (often `5m, now` is used)?
        *   **No Data / Error Handling:** Check the "No Data Option" and "Error Option" in the alert rule. If the query is failing or returning no data, these options dictate whether the alert should fire or remain `OK`.
    3.  **Notification Channel Configuration:**
        *   **Channel Setup:** Is the notification channel (e.g., Slack, email) correctly configured in Grafana? Is the webhook URL valid, or are SMTP settings correct?
        *   **Channel Attachment:** Is the correct notification channel actually attached to the specific alert rule?
        *   **Reachability:** Can the Grafana server reach the notification endpoint? Check network connectivity, firewall rules, and Grafana server logs for any errors related to sending notifications.

#### AI generation note
Create a 10-minute video lab walkthrough. Start by demonstrating how to configure a Slack notification channel (using a placeholder webhook URL). Then, guide learners through creating a new Graph panel monitoring `node_load1` (system load average). Show how to add an alert rule to this panel, setting conditions for `IS ABOVE` a specific threshold (e.g., 2.0) with a `FOR` duration of `1m`. Explicitly show how to attach the Slack notification channel and customize the alert message with variable interpolation (`{{instance}}`, `{{value}}`). Include a segment on debugging an alert that isn't firing by checking the alert state in the panel and the "Alert Rules" list. End with a mini-quiz asking about the purpose of the `FOR` duration.

### Chapter 6.4 — Grafana Dashboards for Specific Use Cases

#### Learning objectives
*   Design and implement specialized Grafana dashboards for monitoring common infrastructure components like Node Exporter and cAdvisor.
*   Create effective dashboards for observing application performance metrics, including request rates, error rates, and latency.
*   Develop dashboards tailored for Kubernetes cluster monitoring, visualizing pod, node, and deployment health.
*   Utilize Grafana's features to build dashboards that support incident response and root cause analysis workflows.
*   Understand how to adapt generic dashboard templates to specific organizational needs and data sources.

#### Detailed lesson content
Having mastered advanced panels, templating, and alerting, it's time to apply these skills to real-world monitoring scenarios. A generic "overview" dashboard is useful, but true power comes from specialized dashboards designed for specific use cases, whether it's monitoring a server, an application, or an entire Kubernetes cluster. Each use case has unique metrics, key performance indicators (KPIs), and visualization needs.

Let's begin with **infrastructure monitoring**, specifically using metrics from **Node Exporter**. A robust Node Exporter dashboard should provide a comprehensive view of a server's health. You'd typically include panels for:
*   **CPU Usage:** A graph showing `node_cpu_seconds_total` aggregated by `mode` (idle, user, system) or a percentage calculation.
*   **Memory Usage:** A gauge or graph showing `node_memory_MemTotal_bytes` versus `node_memory_MemFree_bytes`, `Buffers`, and `Cached` to calculate actual used memory.
*   **Disk I/O:** Graphs for `node_disk_reads_completed_total` and `node_disk_writes_completed_total` (rates) to show disk activity.
*   **Network I/O:** Graphs for `node_network_receive_bytes_total` and `node_network_transmit_bytes_total` (rates) for network throughput.
*   **Filesystem Usage:** Table or gauge panels for `node_filesystem_avail_bytes` and `node_filesystem_size_bytes` per mount point.
*   **System Load:** A graph of `node_load1`, `node_load5`, `node_load15`.
*   **Uptime:** A Stat panel for `node_time_seconds - node_boot_time_seconds`.
Crucially, such a dashboard would heavily leverage templating with `job` and `instance` variables, allowing operators to quickly switch between different servers.

Moving to **application monitoring**, the focus shifts to business logic and user experience. Here, you're often dealing with metrics exposed by your application directly (e.g., via client libraries like `Prometheus client for Go` or `Java`). Key panels would include:
*   **Request Rate:** A graph of `rate(http_requests_total[5m])` by `service` and `endpoint`.
*   **Error Rate:** A graph of `rate(http_requests_total{code=~"5.."}[5m]) / rate(http_requests_total[5m]) * 100` to show the percentage of 5xx errors.
*   **Latency (SLO/SLA):** Heatmaps for request durations (if using histograms) or percentile graphs (e.g., `histogram_quantile(0.99, sum by (le, service) (rate(http_request_duration_seconds_bucket[5m])))`) to track 99th percentile latency.
*   **Active Users/Connections:** A Stat panel for `app_active_users` or `database_connections_open`.
*   **Queue Lengths:** Graphs for `queue_size_total` for message queues or background job queues.
Templating here might involve `service`, `environment`, or `version` variables to filter application metrics.

For **Kubernetes cluster monitoring**, the complexity increases as you're dealing with multiple layers: nodes, pods, containers, deployments, and services. Tools like `kube-state-metrics` and `cAdvisor` (often integrated into Kubelet) provide a wealth of metrics. A Kubernetes dashboard might feature:
*   **Cluster Overview:** Stat panels for total nodes, ready nodes, total pods, pending pods.
*   **Node Resource Usage:** Graphs for CPU, memory, and disk usage per node (similar to Node Exporter, but from `kube_node_status_capacity` and `kube_node_status_allocatable`).
*   **Pod Resource Usage:** Graphs showing CPU and memory requests/limits and actual usage for pods, often grouped by `namespace` and `deployment`.
*   **Pod Status:** Table panels showing pods in `Pending`, `Running`, `Failed`, `Evicted` states, with drill-down links.
*   **Deployment Health:** Graphs for `kube_deployment_status_replicas_available` vs. `kube_deployment_spec_replicas`.
*   **Network Traffic:** Graphs for network I/O per pod or node.
Templating is absolutely essential here, with variables for `cluster`, `namespace`, `deployment`, `pod`, and `container` to allow granular inspection.

When building dashboards for **incident response and root cause analysis**, the design principles shift slightly. These dashboards need to be highly actionable and provide quick insights.
*   **"Golden Signals" Dashboard:** Focus on the four golden signals: Latency, Traffic, Errors, and Saturation. These provide a high-level view of service health.
*   **Drill-down Capabilities:** Use variables and panel links to allow users to navigate from a high-level overview to a detailed view of a specific component (e.g., click on a node in a table to go to its Node Exporter dashboard).
*   **Contextual Information:** Include annotations for deployments or configuration changes. Integrate logs (if using Loki) alongside metrics for a unified view.
*   **Comparison Panels:** Panels that show current metrics against historical data (e.g., last week's average) or against service level objectives (SLOs).

A common mistake when creating specialized dashboards is trying to make one dashboard fit all purposes. This often leads to overcrowded, confusing dashboards. Instead, embrace the idea of multiple, focused dashboards. Another pitfall is not considering the audience. A developer might need detailed application metrics, while an SRE might need infrastructure health, and a business owner might need high-level KPIs. Design dashboards with the end-user in mind.

For safety and maintainability, always version control your Grafana dashboards (e.g., store them as JSON files in Git and use Grafana's provisioning feature). This ensures that changes are tracked, and dashboards can be easily restored or replicated. Regularly review dashboards to remove obsolete panels or queries, and ensure they remain relevant to the systems they monitor.

#### Key concepts
*   **Infrastructure Monitoring Dashboard:** A Grafana dashboard focused on the health and performance of underlying hardware and operating systems (e.g., CPU, memory, disk, network).
*   **Application Performance Monitoring (APM) Dashboard:** A Grafana dashboard focused on the health and performance of specific applications, often tracking request rates, error rates, and latency.
*   **Kubernetes Cluster Monitoring Dashboard:** A Grafana dashboard tailored to visualize the health and resource utilization of Kubernetes nodes, pods, deployments, and services.
*   **Golden Signals:** Four key metrics (Latency, Traffic, Errors, Saturation) often used as a high-level indicator of service health.
*   **Drill-down:** The ability to navigate from a high-level dashboard to a more detailed one, often achieved using variables and panel links.
*   **Dashboard Provisioning:** Grafana feature that allows dashboards to be managed as code (e.g., JSON files) and automatically loaded into Grafana.

#### Hands-on activity
**Activity: Build a Kubernetes Pod Resource Dashboard**

Let's create a dashboard to monitor resource usage of individual Kubernetes pods within a selected namespace.

1.  **Objective:** Create a dynamic dashboard that displays CPU and memory usage for pods, allowing selection by `namespace` and `pod`.
2.  **Prerequisites:** A running Kubernetes cluster with `kube-state-metrics` and `cAdvisor` (usually part of Kubelet) being scraped by Prometheus.
3.  **Steps:**
    *   Create a new Grafana dashboard.
    *   **Add variables:**
        *   `namespace` (Query variable): `label_values(kube_pod_info, namespace)`
        *   `pod` (Query variable, cascading): `label_values(kube_pod_info{namespace="$namespace"}, pod)`
    *   **Add a Graph panel for Pod CPU Usage:**
        *   Title: `Pod CPU Usage for $pod in $namespace`
        *   Query: `sum(rate(container_cpu_usage_seconds_total{namespace="$namespace", pod="$pod", container!="POD"}[5m])) by (container)`
        *   Unit: `short` (cores)
    *   **Add a Graph panel for Pod Memory Usage:**
        *   Title: `Pod Memory Usage for $pod in $namespace`
        *   Query: `sum(container_memory_working_set_bytes{namespace="$namespace", pod="$pod", container!="POD"}) by (container)`
        *   Unit: `bytes` (data size)
    *   **Add a Table panel for Pod Status:**
        *   Title: `Pod Status for $pod`
        *   Query: `kube_pod_status_phase{namespace="$namespace", pod="$pod"}` (This will return 1 for the current phase, 0 for others. You might need a transformation to make it readable.)
        *   Transformation: `Organize fields` to show `phase` and `value`.
    *   Test by selecting different namespaces and pods.
    *   Save your dashboard.

#### Assessment idea
1.  **Question:** You are tasked with creating a Grafana dashboard for a critical microservice. The primary goal is to quickly identify if the service is experiencing problems related to user-facing performance. Which three "Golden Signals" would you prioritize visualizing on this dashboard, and what type of metric would you use for each?

    **Correct Answer:**
    For a critical microservice focused on user-facing performance, the three "Golden Signals" to prioritize are:
    1.  **Latency:** This measures the time it takes to serve a request. A suitable metric would be `http_request_duration_seconds_bucket` (Prometheus histogram) or `http_request_duration_seconds_sum` and `http_request_duration_seconds_count` to calculate percentiles like P99.
    2.  **Traffic:** This measures how much demand is being placed on your service. A suitable metric would be `http_requests_total` (Prometheus counter) to calculate `rate(http_requests_total[5m])` for requests per second.
    3.  **Errors:** This measures the rate of requests that fail. A suitable metric would be `http_requests_total{code=~"5.."}` (Prometheus counter) to calculate `rate(http_requests_total{code=~"5.."}[5m])` for error rate, or `sum(rate(http_requests_total{code=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) * 100` for error percentage.

    (Saturation could also be included, but for *user-facing performance*, Latency, Traffic, and Errors are usually the most immediate indicators of user impact.)

2.  **Question:** You've built a comprehensive Node Exporter dashboard with `job` and `instance` variables. Your team now wants to quickly jump from a high-level overview of all servers to a specific server's detailed metrics. How can you enhance your dashboard to facilitate this "drill-down" capability using Grafana's features?

    **Correct Answer:**
    To facilitate "drill-down" from a high-level overview to a specific server's detailed metrics, you can use Grafana's **Panel Links** feature.

    1.  **Create a "Summary" Table Panel:** On your high-level overview dashboard, create a table panel that lists all instances, perhaps showing their current CPU or memory usage.
    2.  **Configure a Panel Link:** For this table panel, go to "Panel Options" -> "Links". Add a new link.
        *   **Type:** `Dashboard`
        *   **Dashboard:** Select your detailed Node Exporter dashboard (the one you already built with `$job` and `$instance` variables).
        *   **Title:** `View Details`
        *   **URL parameters:** This is the crucial part. You need to pass the `job` and `instance` values from the clicked row to the target dashboard's variables. You would configure parameters like `var-job={{__field.job}}` and `var-instance={{__field.instance}}`. Grafana automatically makes label values available as `__field.<label_name>` in table panel links.
    3.  **Result:** Now, when a user clicks on a row (representing an instance) in the summary table, they will be taken directly to the detailed Node Exporter dashboard, with the `$job` and `$instance` variables pre-populated with the values from the clicked row. This provides a seamless drill-down experience.

#### AI generation note
Create a 12-minute slide deck with voiceover and animated diagrams. Focus on showing examples of specialized dashboards. Start with a Node Exporter dashboard, highlighting CPU, memory, disk, network panels and variable usage. Transition to an application dashboard showing request rate, error rate, and P99 latency. Then, show a Kubernetes dashboard for pod resource usage. For each, use mock Grafana screenshots with overlay annotations explaining the PromQL queries and panel types. Include a section on "Golden Signals" and how to apply them. The interactive element should be a prompt for learners to identify the key metrics for a specific application they might monitor and suggest suitable Grafana panel types.

### Chapter 6.5 — Dashboard Best Practices and Maintenance

#### Learning objectives
*   Apply best practices for dashboard design, including layout, naming conventions, and data presentation, to enhance clarity and usability.
*   Implement strategies for optimizing Grafana dashboard performance, particularly for dashboards with many panels or complex queries.
*   Understand and utilize Grafana's provisioning features for version controlling and deploying dashboards as code.
*   Identify and address security considerations when managing Grafana dashboards and user access.
*   Develop a routine for ongoing dashboard maintenance, including review, cleanup, and documentation.

#### Detailed lesson content
Congratulations on reaching the final chapter of our Grafana journey! You've learned how to build sophisticated dashboards, leverage templating, and configure alerts. Now, let's consolidate this knowledge by discussing the critical aspects of dashboard best practices and ongoing maintenance. Creating a dashboard is one thing; making it effective, performant, secure, and maintainable over time is another. These practices ensure your observability platform remains a valuable asset, not a source of confusion or technical debt.

Effective dashboard design goes beyond just putting panels on a canvas. It's about telling a clear story. Start with a **logical layout**. Place the most critical information (KPIs, high-level health) at the top-left, following a natural reading flow. Group related panels using **rows**, and use descriptive titles for both rows and panels. Avoid overcrowding: if a dashboard becomes too busy, consider splitting it into multiple, more focused dashboards. For example, instead of one "everything" dashboard, have an "overview" dashboard, a "CPU/Memory deep dive," and a "network troubleshooting" dashboard. Use consistent **naming conventions** for variables, panels, and dashboard titles. This makes it easier for users to navigate and understand the data. For data presentation, always choose the most appropriate panel type for the metric (e.g., Stat for single values, Gauge for ranges, Heatmap for distributions). Use clear units, consistent color schemes (e.g., green for healthy, red for critical), and meaningful legends. Leverage Grafana's built-in features like `Min/Max` values, `Thresholds`, and `Value Mappings` to add visual context and make data instantly actionable.

**Dashboard performance** is crucial, especially as your monitoring system grows. Slow dashboards lead to frustration and reduced adoption. The primary culprit for slow dashboards is often inefficient PromQL queries.
*   **Optimize PromQL queries:**
    *   **Reduce time range:** Use smaller `[duration]` in `rate()` or `sum_over_time()` if possible.
    *   **Limit cardinality:** Filter metrics by labels (`{job="my_app"}`) as early as possible to reduce the number of time series processed. Avoid queries that return an excessive number of series.
    *   **Avoid `sum()` without `by()`:** A global `sum()` without a `by()` clause can be very expensive if applied to high-cardinality metrics.
    *   **Use `irate()` for short-term rates:** `irate()` is faster for volatile, short-lived counters than `rate()`, though `rate()` is generally safer for longer time ranges.
*   **Optimize Grafana settings:**
    *   **Refresh interval:** Don't set the refresh interval too aggressively (e.g., 1s or 5s) unless absolutely necessary. A 15s or 30s refresh is often sufficient for most operational dashboards.
    *   **Panel caching:** If your data source supports it, enable caching for panels that don't need real-time updates.
    *   **Variable queries:** Ensure your template variable queries are efficient and don't return an overwhelming number of options.
    *   **Reduce number of panels:** Each panel means at least one query. Fewer panels, especially complex ones, mean faster load times.

For robust **dashboard maintenance and version control**, Grafana's **provisioning** feature is invaluable. Instead of manually creating and updating dashboards through the UI, you can define them as JSON files (or use tools like Grafonnet or Jsonnet to generate JSON) and store them in a version control system like Git. Grafana can then be configured to automatically load these dashboards from a specified directory.
```yaml
# /etc/grafana/provisioning/dashboards/my_dashboards.yaml
apiVersion: 1

providers:
  - name: 'My App Dashboards'
    orgId: 1
    folder: '' # Optional: put dashboards in a specific folder
    type: file
    disableDeletion: false
    editable: true
    options:
      path: /var/lib/grafana/dashboards/my_app
```
This YAML file tells Grafana to look for dashboard JSON files in `/var/lib/grafana/dashboards/my_app`. Any changes to these JSON files in Git, when deployed and Grafana restarted (or reloaded via API), will update the dashboards. This ensures consistency, allows for peer review of dashboard changes, and provides an audit trail.

**Security considerations** are paramount.
*   **Access Control:** Use Grafana's built-in role-based access control (RBAC) to limit who can view, edit, or create dashboards. Not everyone needs edit permissions for production dashboards.
*   **Data Source Permissions:** Ensure that your Prometheus data source in Grafana is configured with appropriate authentication if Prometheus itself is secured.
*   **Sensitive Information:** Avoid displaying sensitive information directly on dashboards. If a metric contains sensitive labels, consider aggregating it or redacting the labels in Prometheus or during transformation.
*   **Public Dashboards:** Be extremely cautious about making dashboards publicly accessible. If you do, ensure they contain no sensitive data and only expose necessary information.
*   **API Keys:** Securely manage Grafana API keys if you are using them for provisioning or external integrations. Use environment variables or secret management systems.

Finally, establish a routine for **ongoing dashboard maintenance**.
*   **Regular Review:** Periodically review all dashboards with your team. Are they still relevant? Are there obsolete panels or metrics? Are new metrics needed?
*   **Cleanup:** Remove unused dashboards, panels, or variables. A cluttered Grafana instance is hard to navigate.
*   **Documentation:** Document your dashboards, especially complex ones. Explain what each panel shows, the PromQL queries used, and what thresholds mean. This can be done directly in Grafana using Text panels, or in your version control system alongside the dashboard JSON.
*   **Alert Review:** Regularly review your alert rules to ensure they are still effective and not causing alert fatigue.

By adhering to these best practices, you'll ensure that your Prometheus and Grafana setup remains a powerful, reliable, and user-friendly observability solution for your organization. You've now gained the skills to not only monitor your systems but to do so with precision, efficiency, and foresight. Keep exploring, keep learning, and keep building!

#### Key concepts
*   **Logical Layout:** Organizing dashboard panels in a clear, intuitive manner, typically with high-level KPIs at the top-left.
*   **Naming Conventions:** Consistent and descriptive naming for dashboards, panels, and variables to improve usability.
*   **Dashboard Performance Optimization:** Techniques to improve dashboard load times, primarily by optimizing PromQL queries and Grafana settings.
*   **Dashboard Provisioning:** Managing Grafana dashboards as code (e.g., JSON files in Git) and automatically loading them into Grafana, enabling version control.
*   **Role-Based Access Control (RBAC):** Grafana's security feature to limit user permissions for viewing, editing, or creating dashboards.
*   **Alert Fatigue:** The state where operators become desensitized to alerts due to excessive or non-critical notifications.
*   **Dashboard Maintenance:** Ongoing activities like regular review, cleanup, and documentation to keep dashboards relevant and effective.
*   **Cardinality:** The number of unique label combinations for a given metric, which significantly impacts Prometheus performance.

#### Hands-on activity
**Activity: Provision a Dashboard and Optimize a Query**

Let's practice provisioning a simple dashboard and then optimize a potentially inefficient query.

1.  **Objective:** Provision a basic "System Overview" dashboard via file, then identify and optimize a PromQL query for performance.
2.  **Prerequisites:** A running Grafana instance with file provisioning enabled (or knowledge of how to enable it), a Prometheus data source, and a way to access Grafana's server filesystem (e.g., via Docker volume or SSH).
3.  **Steps:**
    *   **1. Prepare Grafana for Provisioning:**
        *   Ensure your Grafana instance has a provisioning directory set up (e.g., `/etc/grafana/provisioning/dashboards`).
        *   Create a YAML file, e.g., `/etc/grafana/provisioning/dashboards/my_provisioned_dashboards.yaml`:
            ```yaml
            apiVersion: 1
            providers:
              - name: 'Provisioned Dashboards'
                orgId: 1
                folder: 'Provisioned'
                type: file
                disableDeletion: false
                editable: true
                options:
                  path: /var/lib/grafana/dashboards
            ```
        *   Create the target directory: `mkdir -p /var/lib/grafana/dashboards`
        *   Restart Grafana for provisioning to take effect.
    *   **2. Create a Simple Dashboard JSON:**
        *   In Grafana UI, create a new dashboard with one simple Graph panel (e.g., showing `up` metric).
        *   Go to Dashboard Settings (gear icon) -> JSON Model. Copy the entire JSON.
        *   Save this JSON to a file in the provisioning path, e.g., `/var/lib/grafana/dashboards/system_overview.json`.
        *   Refresh Grafana (or restart). You should now see a "System Overview" dashboard in the "Provisioned" folder.
    *   **3. Identify and Optimize a Query:**
        *   Consider the query: `sum(rate(node_cpu_seconds_total[5m]))` (without `by` clause). This query sums CPU usage across *all* instances and *all* modes, which can be inefficient and provides less useful information.
        *   **Task:** Modify the query in your `system_overview.json` (or create a new panel in the UI and then export its JSON) to:
            *   Show CPU usage percentage per `instance` and `cpu`.
            *   Use the `job` label to filter only for Node Exporter metrics.
            *   The optimized query should look like: `100 - (avg by (instance, cpu) (rate(node_cpu_seconds_total{job="node_exporter", mode="idle"}[5m])) * 100)`
        *   Update your `system_overview.json` with this optimized query.
        *   Refresh Grafana to see the updated panel.
    *   **4. Reflect:** Compare the original query's output and performance (if you had many instances) with the optimized one.

#### Assessment idea
1.  **Question:** You are designing a new Grafana dashboard for a high-traffic e-commerce application. The dashboard needs to display 20 panels, each with complex PromQL queries. What are two key strategies you would employ to ensure this dashboard remains performant and loads quickly for users?

    **Correct Answer:**
    Two key strategies to ensure a high-traffic e-commerce application dashboard remains performant are:
    1.  **PromQL Query Optimization:**
        *   **Reduce Cardinality Early:** Ensure all PromQL queries use label selectors (`{label="value"}`) to filter metrics as early as possible, reducing the number of time series Prometheus has to process. Avoid `sum()` or `avg()` without `by()` clauses on high-cardinality metrics.
        *   **Efficient Time Ranges:** Use appropriate `[duration]` in `rate()` and `sum_over_time()` functions. Avoid excessively long ranges if not needed, or excessively short ranges that lead to volatile data.
        *   **Pre-aggregation (if applicable):** If certain complex aggregations are frequently needed, consider using Prometheus recording rules to pre-calculate and store these aggregated metrics, making dashboard queries much faster.
    2.  **Grafana Dashboard Settings and Design:**
        *   **Appropriate Refresh Interval:** Do not set the dashboard refresh interval too low (e.g., 1s or 5s) unless absolutely critical. A 15s or 30s refresh is often sufficient and significantly reduces the load on Prometheus and Grafana.
        *   **Break Down Complex Dashboards:** If 20 panels are truly necessary, consider if the dashboard can be logically split into two or three more focused dashboards. Fewer panels per dashboard generally mean faster load times.
        *   **Efficient Variable Queries:** Ensure template variable queries are fast and don't return an overwhelming number of options, as these queries run before panels load.

2.  **Question:** Your team has started manually creating many Grafana dashboards through the UI. This has led to inconsistencies, difficulty tracking changes, and challenges in replicating dashboards across different Grafana environments (e.g., staging and production). What Grafana feature would you recommend to address these issues, and how would you implement it?

    **Correct Answer:**
    I would recommend using **Grafana Dashboard Provisioning** to address these issues.

    **Implementation Steps:**
    1.  **Export Existing Dashboards:** For all existing dashboards, export their JSON models from the Grafana UI (Dashboard Settings -> JSON Model).
    2.  **Version Control:** Store these JSON files in a Git repository. This allows for:
        *   Tracking changes (who changed what, when).
        *   Peer review of dashboard updates.
        *   Reverting to previous versions if needed.
    3.  **Create Provisioning Configuration:** On each Grafana instance (staging, production), create a YAML configuration file in the Grafana provisioning directory (e.g., `/etc/grafana/provisioning/dashboards/my_dashboards.yaml`). This file specifies where Grafana should look for dashboard JSON files.
        ```yaml
        apiVersion: 1
        providers:
          - name: 'My Application Dashboards'
            orgId: 1
            folder: 'Applications' # Optional: organizes dashboards into a folder
            type: file
            disableDeletion: true # Prevents accidental deletion via UI
            editable: false       # Prevents manual edits via UI, forces changes through Git
            options:
              path: /path/to/your/git/repo/dashboards # Path where JSON files are stored
        ```
    4.  **Mount Repository:** Ensure the Git repository containing the dashboard JSON files is mounted or accessible to the Grafana container/server at the specified `path`.
    5.  **Restart Grafana:** Restart the Grafana service. It will automatically discover and load the dashboards from the specified path.
    6.  **Workflow Change:** Establish a new workflow where all dashboard changes are made by modifying the JSON files in the Git repository, followed by a commit, push, and deployment (which triggers Grafana to reload the dashboards). This ensures consistency, auditability, and easy replication across environments.

#### AI generation note
Create a 10-minute slide deck with voiceover, focusing on best practices. Use animated overlays on mock Grafana dashboards to illustrate good vs. bad layout, clear vs. cluttered panels, and consistent vs. inconsistent naming. Include a section with code examples for optimizing PromQL queries (e.g., adding label filters, using `by` clauses). Dedicate a slide to explaining dashboard provisioning with a simple YAML example and the benefits of version control. Conclude with a checklist for dashboard review and cleanup. The interactive element should be a reflection prompt asking learners to identify one dashboard they currently use that could benefit from a specific optimization or design improvement discussed.
---

## Final Capstone Project

Congratulations on reaching the final stage of your Prometheus + Grafana journey! This capstone project is your opportunity to apply all the knowledge and skills you've gained throughout the course to a real-world monitoring scenario. You will choose one of three distinct project options, each designed to challenge you and solidify your understanding of observability best practices using Prometheus for data collection and Grafana for visualization and alerting. Take your time to review each option and select the one that most excites you or aligns with your personal learning goals. Remember, the goal is not just to complete the tasks, but to demonstrate a comprehensive understanding of how these powerful tools work together to provide actionable insights into system and application health.

### Project Option 1: Web Server & Host Health Monitoring

This project focuses on establishing robust monitoring for a traditional web server setup, combining host-level metrics with service availability checks. You will set up Prometheus to scrape metrics from a Linux host running a web server (like Nginx or Apache) and ensure its HTTP endpoint is reachable.

**Requirements:**

1.  **Environment Setup:** Provision a Linux virtual machine (e.g., using a cloud provider like AWS EC2, GCP Compute Engine, or a local VM with VirtualBox/VMware) or a Docker container running a simple web server (e.g., Nginx).
2.  **Prometheus Installation:** Install and configure Prometheus to run on a separate host or as a Docker container, ensuring it can reach your target web server.
3.  **Node Exporter Integration:** Deploy and configure Node Exporter on your web server host. Configure Prometheus to scrape metrics from Node Exporter.
4.  **Blackbox Exporter Integration:** Deploy and configure Blackbox Exporter. Configure Prometheus to scrape Blackbox Exporter, using it to probe the HTTP endpoint of your web server.
5.  **Grafana Dashboard:** Install and configure Grafana. Create a new data source connecting to your Prometheus instance. Design a comprehensive Grafana dashboard that includes:
    *   Key host metrics (CPU usage, memory usage, disk I/O, network traffic) from Node Exporter.
    *   Web server availability and response time metrics from Blackbox Exporter.
    *   At least three different panel types (e.g., Graph, Stat, Gauge, Table).
6.  **Basic Alerting:** Configure a simple Prometheus alerting rule (e.g., `ALERT WebServerDown IF probe_success == 0`) and integrate it with Alertmanager (even if just logging to console) or a basic Grafana alert for web server unavailability.

**Stretch Goals:**

*   Integrate Alertmanager with a real notification channel (e.g., Slack, Email).
*   Add custom metrics to your web server (if using a programmable server like Flask/Node.js) and scrape them with Prometheus.
*   Implement Grafana templating to allow easy switching between multiple web servers if you expand your setup.
*   Create a second, more advanced alert rule, such as high latency detected by Blackbox Exporter.

**Evaluation Criteria:**

*   Correct installation and configuration of Prometheus, Node Exporter, Blackbox Exporter, and Grafana.
*   Successful scraping of all required metrics by Prometheus.
*   Clarity, organization, and effectiveness of the Grafana dashboard in presenting key information.
*   Correct setup and functionality of the basic alerting mechanism.
*   Code quality and adherence to best practices for configuration files.

**Estimated Time:** 8-12 hours

### Project Option 2: Containerized Application Performance Monitoring

This project challenges you to monitor a multi-container application, focusing on container-level resource usage and application health within a Docker Compose environment. You'll leverage cAdvisor to gain deep insights into your containers.

**Requirements:**

1.  **Application Setup:** Create a simple multi-container application using Docker Compose. A good example would be a web application (e.g., a simple Flask/Node.js app) connected to a database (e.g., PostgreSQL or Redis). Ensure both containers are running and accessible.
2.  **Prometheus & cAdvisor Deployment:** Deploy Prometheus and cAdvisor as additional services within your Docker Compose file. Configure Prometheus to scrape metrics from cAdvisor, targeting your application containers.
3.  **Prometheus Configuration:** Ensure Prometheus is configured to discover and scrape metrics from cAdvisor, specifically for the containers managed by your Docker Compose setup.
4.  **Grafana Dashboard:** Install and configure Grafana (can also be a Docker Compose service). Create a Grafana data source for Prometheus. Design a dashboard that visualizes:
    *   CPU usage per container.
    *   Memory usage per container.
    *   Network I/O for each container.
    *   Container restart counts or uptime.
    *   Use Grafana variables to allow filtering metrics by container name.
5.  **Container-Specific Alerting:** Configure a Grafana alert (or Prometheus alert with Alertmanager) for a critical container metric, such as a container's CPU usage exceeding 90% for a sustained period.

**Stretch Goals:**

*   Add a custom application-level metric to your web application (e.g., number of active users, API request latency) and expose it for Prometheus to scrape.
*   Implement more complex PromQL queries to calculate aggregate metrics across all containers or identify top resource consumers.
*   Explore using Grafana's "Table" panel with transformations to show a summary of container health.
*   Integrate a logging solution (e.g., Loki) alongside Prometheus for a more complete observability stack.

**Evaluation Criteria:**

*   Correct setup and functionality of the Docker Compose application, Prometheus, cAdvisor, and Grafana.
*   Successful scraping of container metrics by Prometheus.
*   Effective use of PromQL to query and display container-specific performance data.
*   Clarity and usefulness of the Grafana dashboard, including proper use of variables.
*   Correct setup and functionality of the container-specific alert.

**Estimated Time:** 10-15 hours

### Project Option 3: Advanced Alerting & Incident Response Simulation

This project emphasizes the crucial aspect of alerting and how Alertmanager can be configured to provide sophisticated notification routing. You will simulate a service failure and observe how your monitoring stack responds, ensuring that the right people are notified through the right channels.

**Requirements:**

1.  **Monitoring Base:** Start with a basic Prometheus and Node Exporter setup monitoring a Linux host (either a VM or a Docker container). Ensure Prometheus is successfully scraping host metrics.
2.  **Alertmanager Configuration:** Install and configure Alertmanager. Integrate Alertmanager with Prometheus.
3.  **Complex Alert Rules:** Define at least three different Prometheus alerting rules in `alert.rules` files:
    *   **High CPU Usage:** Trigger an alert if CPU idle time is consistently low (e.g., `node_cpu_seconds_total{mode="idle"}` below a threshold).
    *   **Low Disk Space:** Trigger an alert if a specific disk partition is running low on free space (e.g., `node_filesystem_avail_bytes` below a threshold).
    *   **Service Down:** Simulate a critical service (e.g., Nginx, or a simple custom script) failing on the monitored host. Create an alert rule that detects this service's unavailability (e.g., by checking if its process is running `node_procs_running` or using Blackbox Exporter if you prefer).
4.  **Notification Routing:** Configure Alertmanager to route different types of alerts to different "channels" (even if these are just logging to console for simplicity, or dummy webhooks if you don't have real channels). For example:
    *   High CPU to a "critical" channel.
    *   Low Disk Space to an "operations" channel.
    *   Service Down to a "pagers" channel.
    *   Implement inhibition rules (e.g., inhibit low disk space alerts if the entire host is down).
    *   Implement silence rules for planned maintenance.
5.  **Grafana Alerting (Optional but Recommended):** Create a Grafana dashboard that displays the status of your configured alerts using the Alert List panel.
6.  **Incident Simulation:** Document a step-by-step process to manually trigger each of your defined alerts (e.g., by overloading the CPU, filling disk space, stopping a service). Demonstrate the alerts firing and being routed correctly by Alertmanager.

**Stretch Goals:**

*   Integrate Alertmanager with real notification channels like Slack, PagerDuty, or email.
*   Implement more sophisticated Alertmanager features like grouping, repeat intervals, and custom templates for notifications.
*   Create a Grafana dashboard that visualizes the metrics related to your alerts, allowing for quick context when an alert fires.
*   Write a runbook for responding to one of the simulated incidents.

**Evaluation Criteria:**

*   Correct installation and integration of Prometheus, Node Exporter, and Alertmanager.
*   Accuracy and effectiveness of the three defined Prometheus alerting rules.
*   Correct configuration of Alertmanager for sophisticated routing, inhibition, and silencing.
*   Successful demonstration of triggering each alert and observing its correct routing.
*   Clarity of documentation for incident simulation and expected alert behavior.

**Estimated Time:** 8-12 hours

---

## Final Examination

This final examination is designed to assess your comprehensive understanding of Prometheus and Grafana, covering concepts, practical application, and troubleshooting. It combines various question types to ensure a thorough evaluation of your skills.

### Section 1: Concept Definitions (4 Questions)

**1. Question:** Explain the fundamental difference between Prometheus's "pull" model for metric collection and a "push" model. What are the primary advantages and disadvantages of Prometheus's chosen approach?

**Answer:** Prometheus primarily uses a "pull" model, where the Prometheus server actively scrapes metrics from configured targets (exporters, instrumented applications) at regular intervals. In contrast, a "push" model involves applications or services sending (pushing) their metrics to a central collector.

**Advantages of Prometheus's pull model:**
*   **Simplicity of targets:** Targets only need to expose an HTTP endpoint; no complex client-side logic for pushing.
*   **Service discovery:** Integrates well with dynamic environments (e.g., Kubernetes) where Prometheus can discover new targets automatically.
*   **Reduced load on targets:** Targets don't need to manage connection failures or retries to the monitoring system.
*   **Centralized configuration:** All scraping logic is managed in one place (Prometheus config), making it easier to audit and manage.
*   **Easier debugging:** If a target isn't being scraped, Prometheus logs will show the issue, rather than trying to debug why a push client isn't sending.

**Disadvantages of Prometheus's pull model:**
*   **Short-lived jobs:** Not ideal for very short-lived batch jobs that might finish before Prometheus can scrape them. For these, a Pushgateway is often used as an intermediary.
*   **Network reachability:** Prometheus must be able to initiate connections to all targets, which can be challenging across complex network topologies or firewalls.
*   **Scalability for massive numbers of targets:** While Prometheus scales well, extremely large numbers of targets might require sharding or federating Prometheus instances.

---

**2. Question:** Describe the role of a metric label in Prometheus. Provide an example of how labels enhance the utility of a simple metric like `http_requests_total`.

**Answer:** A metric label in Prometheus is a key-value pair that serves as a dimension for a metric. Labels allow a single metric name to represent multiple logical series of data, distinguishing them based on various characteristics. They are crucial for making metrics highly queryable and granular without needing to create separate metric names for every permutation.

**Example:**
Consider the metric `http_requests_total`, which counts the total number of HTTP requests. Without labels, this metric would just give a grand total, which is not very useful for analysis.

By adding labels, we can differentiate requests based on various attributes:
`http_requests_total{method="GET", path="/api/v1/users", status="200"}`
`http_requests_total{method="POST", path="/api/v1/login", status="500"}`

Here, `method`, `path`, and `status` are labels. This allows us to:
*   Query for all GET requests: `http_requests_total{method="GET"}`
*   Query for 500 errors on a specific path: `http_requests_total{path="/api/v1/login", status="500"}`
*   Group by method to see request counts for each method: `sum by (method) (http_requests_total)`
*   Calculate the error rate for a specific endpoint.

Labels transform a simple counter into a powerful, multi-dimensional dataset, enabling detailed analysis and filtering.

---

**3. Question:** What is the primary purpose of Alertmanager in the Prometheus ecosystem? How does it differ from Prometheus's own alerting rules?

**Answer:** The primary purpose of Alertmanager is to handle alerts sent by client applications like Prometheus. It acts as a central hub for alert processing, deduplicating, grouping, routing, and silencing alerts. Alertmanager ensures that notifications are sent to the right recipients through the correct channels, at the right time.

**Difference from Prometheus's own alerting rules:**
*   **Prometheus's alerting rules:** These rules, defined in Prometheus's configuration (e.g., `alert.rules.yml`), are responsible for *detecting* alert conditions. When a PromQL expression in an alert rule evaluates to true, Prometheus generates an "alert" and sends it to Alertmanager. Prometheus is the *alert generator*.
*   **Alertmanager:** Alertmanager *receives* these alerts from Prometheus. It then applies its own logic for:
    *   **Deduplication:** Preventing multiple identical notifications for the same alert.
    *   **Grouping:** Combining similar alerts into a single notification to reduce noise (e.g., 10 servers going down result in one "10 servers down" notification).
    *   **Routing:** Sending alerts to different receivers (email, Slack, PagerDuty, etc.) based on labels.
    *   **Inhibition:** Suppressing notifications for certain alerts if another, more severe alert is already active (e.g., don't notify about high CPU if the entire server is down).
    *   **Silencing:** Temporarily muting alerts for planned maintenance.

In essence, Prometheus *identifies* problems, and Alertmanager *manages* the notification process for those problems.

---

**4. Question:** Explain the concept of "templating" in Grafana dashboards. Why is it a powerful feature for managing complex monitoring environments?

**Answer:** Templating in Grafana dashboards allows you to create dynamic and interactive dashboards using variables. Instead of hardcoding values (like server names, job names, or data centers) into your PromQL queries, you can define variables that users can select from drop-down menus. These variables are then used within the queries of your dashboard panels.

**Why it's a powerful feature:**
*   **Reusability:** You can create a single "master" dashboard that works for multiple instances of a service, different environments (dev, staging, prod), or various hosts. Instead of creating a separate dashboard for `server-01`, `server-02`, etc., you create one dashboard and use a `$server` variable.
*   **Flexibility and Interactivity:** Users can dynamically change the context of the dashboard by selecting different values from the variable drop-downs, allowing for on-the-fly exploration of data.
*   **Reduced Maintenance:** If you add a new server or service, you don't need to create a new dashboard or modify existing panel queries. As long as your variable query discovers the new entity, it will automatically appear in the drop-down.
*   **Drill-down Capabilities:** Variables can be chained, allowing for hierarchical filtering (e.g., select a data center, then a cluster within that data center, then a specific host).
*   **Ad-hoc Queries:** Grafana's "Ad-hoc filters" feature can automatically create variables based on labels, enabling dynamic filtering without pre-defining specific variables.

Templating significantly reduces the effort required to manage and maintain dashboards in environments with many similar components, making monitoring more scalable and user-friendly.

---

### Section 2: PromQL Tracing & Interpretation (3 Questions)

**5. Question:** Given the following Prometheus metrics:

```
http_requests_total{job="api-server", instance="192.168.1.1:8080", method="GET", path="/users", status="200"} 1000
http_requests_total{job="api-server", instance="192.168.1.1:8080", method="POST", path="/users", status="201"} 50
http_requests_total{job="api-server", instance="192.168.1.2:8080", method="GET", path="/users", status="200"} 1200
http_requests_total{job="api-server", instance="192.168.1.2:8080", method="GET", path="/health", status="200"} 500
```

What would be the result of the following PromQL query? Explain your reasoning.

`sum by (instance) (rate(http_requests_total{job="api-server", status="200"}[5m]))`

**Answer:**
This query calculates the per-second average rate of HTTP requests with a `status="200"` over the last 5 minutes, grouped by `instance`.

1.  `http_requests_total{job="api-server", status="200"}`: This selects all `http_requests_total` series that have `job="api-server"` and `status="200"`.
    *   `http_requests_total{job="api-server", instance="192.168.1.1:8080", method="GET", path="/users", status="200"}`
    *   `http_requests_total{job="api-server", instance="192.168.1.2:8080", method="GET", path="/users", status="200"}`
    *   `http_requests_total{job="api-server", instance="192.168.1.2:8080", method="GET", path="/health", status="200"}`
    (The `POST` request with `status="201"` is excluded.)

2.  `rate(...[5m])`: For each of the selected series, `rate` calculates the per-second average increase over the last 5 minutes. Since we only have a snapshot of current values, we would need historical data points to calculate an actual rate. Assuming these are the *current* values and the rate is calculated based on previous scrapes:
    *   Let's assume the previous value for `192.168.1.1:8080, path="/users"` was 900 five minutes ago. Rate = (1000 - 900) / (5 * 60) = 100 / 300 = 0.333 requests/sec.
    *   Let's assume the previous value for `192.168.1.2:8080, path="/users"` was 1100 five minutes ago. Rate = (1200 - 1100) / (5 * 60) = 100 / 300 = 0.333 requests/sec.
    *   Let's assume the previous value for `192.168.1.2:8080, path="/health"` was 400 five minutes ago. Rate = (500 - 400) / (5 * 60) = 100 / 300 = 0.333 requests/sec.

3.  `sum by (instance)(...)`: This aggregates the results of the `rate` function, summing them up for each unique `instance` label.
    *   For `instance="192.168.1.1:8080"`, there's only one series matching the filter: `http_requests_total{..., path="/users", status="200"}`. Its rate is 0.333. So, `sum` for this instance is 0.333.
    *   For `instance="192.168.1.2:8080"`, there are two series matching the filter: `http_requests_total{..., path="/users", status="200"}` and `http_requests_total{..., path="/health", status="200"}`. Their rates are both 0.333. So, `sum` for this instance is 0.333 + 0.333 = 0.666.

**Result (example with assumed rates):**
```
{instance="192.168.1.1:8080"} 0.333
{instance="192.168.1.2:8080"} 0.666
```
The actual numbers would depend on the historical data, but the structure of the output would be two time series, one for each instance, showing their respective sums of successful request rates.

---

**6. Question:** Consider the following Alertmanager configuration snippet:

```yaml
# alertmanager.yml
route:
  group_by: ['alertname', 'instance']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
  receiver: 'default-receiver'
  routes:
  - match:
      severity: 'critical'
    receiver: 'critical-pager'
    group_wait: 10s
    repeat_interval: 1h
  - match:
      service: 'database'
    receiver: 'database-team'
    group_wait: 1m

receivers:
- name: 'default-receiver'
  webhook_configs:
  - url: 'http://localhost:9099/default'
- name: 'critical-pager'
  webhook_configs:
  - url: 'http://localhost:9099/pager'
- name: 'database-team'
  webhook_configs:
  - url: 'http://localhost:9099/db'
```

An alert named `HostDown` with labels `{severity="critical", instance="server-01", job="node-exporter"}` fires.
Simultaneously, an alert named `DiskFull` with labels `{severity="warning", instance="server-01", service="database"}` fires.

Describe how Alertmanager would process and route these two alerts, including which receiver(s) would get notifications and any grouping behavior.

**Answer:**

1.  **Alert 1: `HostDown` (`{severity="critical", instance="server-01", job="node-exporter"}`):**
    *   This alert first hits the top-level `route` block.
    *   It then checks the nested `routes`. The first nested route has `match: {severity: 'critical'}`. This alert matches.
    *   Therefore, this alert will be routed to the `critical-pager` receiver.
    *   The `group_wait` for this route is `10s`, and `repeat_interval` is `1h`.

2.  **Alert 2: `DiskFull` (`{severity="warning", instance="server-01", service="database"}`):**
    *   This alert also hits the top-level `route` block.
    *   It checks the first nested route (`severity: 'critical'`) and *does not match* (its severity is 'warning').
    *   It checks the second nested route (`service: 'database'`). This alert *does match*.
    *   Therefore, this alert will be routed to the `database-team` receiver.
    *   The `group_wait` for this route is `1m`.

**Grouping Behavior:**

Alertmanager groups alerts based on the `group_by` labels specified in the matching route.

*   **For `HostDown` (routed to `critical-pager`):** The `group_by` for this route is inherited from the parent route: `['alertname', 'instance']`. So, `HostDown` alerts for `server-01` will be grouped together.
*   **For `DiskFull` (routed to `database-team`):** The `group_by` for this route is also inherited from the parent route: `['alertname', 'instance']`. So, `DiskFull` alerts for `server-01` will be grouped together.

**Outcome:**

*   After a `group_wait` of 10 seconds, the `critical-pager` receiver will receive a notification for the `HostDown` alert (for `server-01`). If other `HostDown` alerts for `server-01` (e.g., if the alert condition persisted and Prometheus re-sent it) arrive within the `group_interval` (5m, inherited), they will be grouped into the same notification, and repeated notifications will only occur every `1h` (`repeat_interval`).
*   After a `group_wait` of 1 minute, the `database-team` receiver will receive a notification for the `DiskFull` alert (for `server-01`). Similarly, subsequent `DiskFull` alerts for `server-01` will be grouped, and repeated notifications will occur every `4h` (`repeat_interval`, inherited from the parent route as not overridden).

**Key Takeaways:**
*   Alerts are routed to the *first* matching child route. If no child route matches, they fall back to the parent route's receiver (`default-receiver` in this case).
*   `group_by`, `group_wait`, `group_interval`, and `repeat_interval` can be overridden at lower levels of the routing tree. If not overridden, they inherit from the parent.

---

**7. Question:** You are using Grafana to visualize metrics from a Prometheus data source. You have a variable named `$job` that dynamically lists all available `job` labels from your Prometheus instance using the query `label_values(job)`.

Now, you want to create a second variable, `$instance`, that should only show instances belonging to the currently selected `$job`. What PromQL query would you use for the `$instance` variable, and how does it achieve the desired filtering?

**Answer:**

To create a second variable `$instance` that dynamically lists instances based on the selected `$job` variable, you would use the following PromQL query:

`label_values(node_exporter_build_info{job="$job"}, instance)`

**Explanation:**

1.  **`label_values(metric_name{label_selector}, label_name)`:** This Grafana function is used to retrieve all possible values for a specific label (`label_name`) from a given metric (`metric_name`), optionally filtered by `label_selector`.
2.  **`node_exporter_build_info`:** We choose a common metric that is present on all instances (e.g., `node_exporter_build_info` if using Node Exporter, or any other metric that all your services expose). It's important to pick a metric that exists for all `job` and `instance` combinations you want to list.
3.  **`{job="$job"}`:** This is the crucial part. We are using the `$job` variable (which holds the value selected from the first variable's drop-down) as a label selector. Grafana will replace `$job` with the actual selected job name before executing the query against Prometheus.
4.  **`instance`:** This specifies that we want to extract the values of the `instance` label from the filtered metrics.

**How it achieves filtering:**
When a user selects a value for the `$job` variable (e.g., "api-server"), Grafana will execute the `$instance` variable query as `label_values(node_exporter_build_info{job="api-server"}, instance)`. Prometheus will then return only the `instance` label values that are associated with metrics having `job="api-server"`. If the user then changes `$job` to "database-server", the `$instance` variable will automatically re-query and update its drop-down to show only instances related to "database-server". This creates a cascading, interactive filtering experience.

---

### Section 3: PromQL & Configuration Writing (4 Questions)

**8. Question:** Write a PromQL query that calculates the 5-minute average CPU utilization across all cores of all servers being monitored by Node Exporter, excluding idle CPU time.

**Answer:**

```promql
100 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100
```

**Explanation:**
1.  `node_cpu_seconds_total{mode="idle"}`: Selects the counter metric for CPU time spent in idle mode.
2.  `rate(...[5m])`: Calculates the per-second average rate of increase of idle CPU time over the last 5 minutes. This gives us the fraction of CPU time spent idle.
3.  `avg by (instance) (...)`: Averages the idle CPU rate across all CPU cores for each `instance`. This is important because `node_cpu_seconds_total` typically has a `cpu` label for each core.
4.  `100 - ... * 100`: Since `rate` gives a fraction (e.g., 0.5 for 50% idle), we multiply by 100 to get a percentage. Then, we subtract this idle percentage from 100 to get the CPU *utilization* percentage.

**Common Mistake:** Forgetting `avg by (instance)` when dealing with multi-core CPU metrics, which would result in separate series for each core instead of an aggregated per-instance value.

---

**9. Question:** You are monitoring a web application that exposes a custom Prometheus metric `app_http_requests_total` (a counter) with labels `path` and `method`. Write a PromQL query to calculate the *total number of HTTP requests per second* for requests to the `/api` path, broken down by `method`, over the last 1 minute.

**Answer:**

```promql
sum by (method) (rate(app_http_requests_total{path="/api"}[1m]))
```

**Explanation:**
1.  `app_http_requests_total{path="/api"}`: Selects all `app_http_requests_total` series where the `path` label is exactly `/api`. This filters for requests to our target API endpoint.
2.  `rate(...[1m])`: Calculates the per-second average rate of increase for each matching series over the last 1 minute. This gives us the requests per second for each unique `method` and other labels still present.
3.  `sum by (method) (...)`: Aggregates the rates. By summing `by (method)`, we collapse all other labels (like `instance`, `job`) and get the total requests per second for each distinct HTTP method (e.g., GET, POST) specifically for the `/api` path.

---

**10. Question:** Write a Prometheus alerting rule that triggers a critical alert named `HighDiskUsage` if any filesystem on a monitored host (using Node Exporter) has less than 10% free space remaining. The alert should include labels for `instance`, `device`, and `mountpoint`.

**Answer:**

```yaml
# rules.yml
groups:
- name: host_alerts
  rules:
  - alert: HighDiskUsage
    expr: |
      (node_filesystem_avail_bytes{fstype!="rootfs", mountpoint!=""} / node_filesystem_size_bytes{fstype!="rootfs", mountpoint!=""}) * 100 < 10
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High disk usage on {{ $labels.instance }} ({{ $labels.mountpoint }})"
      description: "Filesystem {{ $labels.mountpoint }} on {{ $labels.instance }} has less than 10% free space remaining. Current usage: {{ printf "%.2f" (100 - ($value)) }}%"
```

**Explanation:**
1.  `groups: ... rules: ...`: Standard structure for Prometheus alert rules.
2.  `alert: HighDiskUsage`: Defines the name of the alert.
3.  `expr: ...`: The PromQL expression that, when true, will fire the alert.
    *   `node_filesystem_avail_bytes{fstype!="rootfs", mountpoint!=""}`: Selects the available bytes on filesystems, excluding the virtual `rootfs` and any empty mountpoints, which are usually not relevant for disk space monitoring.
    *   `node_filesystem_size_bytes{fstype!="rootfs", mountpoint!=""}`: Selects the total size of the same filesystems.
    *   `/`: Divides available bytes by total bytes to get the free space ratio.
    *   `* 100 < 10`: Multiplies by 100 to get a percentage, then checks if it's less than 10%.
4.  `for: 5m`: The alert will only fire if the condition remains true for 5 consecutive minutes, preventing flapping alerts.
5.  `labels: severity: critical`: Adds a `severity` label to the alert, useful for Alertmanager routing.
6.  `annotations: summary: ... description: ...`: Provides human-readable information for notifications. `$labels.instance`, `$labels.mountpoint` dynamically pull values from the alert's labels. `$value` refers to the result of the `expr` (the percentage of free space).

**Safety Note:** Be careful with `fstype` and `mountpoint` filters. Ensure you are not accidentally excluding critical filesystems or including irrelevant ones. Always test your alert expressions in Prometheus before deploying them to production.

---

**11. Question:** You need to create a new Grafana dashboard panel to display the current memory usage (in bytes) for a specific server instance. Describe the step-by-step process within the Grafana UI, including the PromQL query you would use.

**Answer:**

Here's a step-by-step process to create a Grafana dashboard panel for current memory usage:

1.  **Navigate to your Dashboard:** Open the Grafana dashboard where you want to add the panel.
2.  **Add a New Panel:** Click the "Add Panel" button (usually a plus icon at the top of the dashboard or within an empty row). Then select "Add an empty panel".
3.  **Choose Data Source:** In the "Query" tab of the new panel, ensure your Prometheus data source is selected from the "Data source" dropdown.
4.  **Enter PromQL Query:** In the PromQL query editor field (labeled "A"), enter the following query:
    ```promql
    node_memory_MemTotal_bytes{instance="your_server_instance_name"} - node_memory_MemFree_bytes{instance="your_server_instance_name"} - node_memory_Buffers_bytes{instance="your_server_instance_name"} - node_memory_Cached_bytes{instance="your_server_instance_name"}
    ```
    *   **Replace `your_server_instance_name`** with the actual `instance` label value for the server you want to monitor (e.g., `192.168.1.10:9100`).
    *   This query calculates used memory by subtracting free, buffered, and cached memory from the total memory.
5.  **Select Panel Type:** Go to the "Visualization" tab on the left. Choose a suitable panel type, such as "Gauge" for a single current value, or "Graph" if you want to see historical trends. For current usage, "Stat" or "Gauge" are often good choices.
6.  **Configure Panel Options (Example for Gauge):**
    *   **Title:** Set a descriptive title, e.g., "Server Memory Usage - `your_server_instance_name`".
    *   **Unit:** In the "Standard options" section, set the unit to "Bytes" (or "data -> bytes"). Grafana will automatically scale it to KB, MB, GB.
    *   **Thresholds (Optional):** Define color thresholds (e.g., 0-70% green, 70-90% yellow, 90-100% red) to visually indicate memory health.
    *   **Value Options:** Set "Show" to "Calculations" and "Calculation" to "Last *".
7.  **Apply Changes:** Click "Apply" in the top right corner of the panel editor to add the panel to your dashboard.
8.  **Save Dashboard:** Finally, save your dashboard to persist the changes.

**Common Mistake:** Forgetting to specify the `instance` label or using an incorrect `instance` value, which would either show aggregated memory for all servers or no data at all. Also, simply using `node_memory_MemAvailable_bytes` is often a better proxy for "free" memory for applications, but the above calculation provides a more explicit "used" value.

---

### Section 4: Design & Debugging Problems (4 Questions)

**12. Question:** You've just deployed a new service named `my-app` on `server-03` with a Prometheus client library exposing metrics on port `9090` at the `/metrics` endpoint. After configuring Prometheus to scrape it, you don't see any metrics for `my-app` in Prometheus, and the `Targets` page shows the `my-app` target as `DOWN`. Describe a systematic approach to debug this issue.

**Answer:**

Debugging a `DOWN` target in Prometheus requires a systematic approach, checking connectivity and configuration at each layer:

1.  **Check Prometheus Configuration:**
    *   **`prometheus.yml`:** Verify the `scrape_configs` for `my-app`.
        ```yaml
        - job_name: 'my-app'
          static_configs:
            - targets: ['server-03:9090']
        ```
        *   Is the `job_name` correct?
        *   Is the `targets` array correctly formatted, with the correct hostname/IP and port?
        *   Are there any typos in the `job_name` or `targets`?
        *   Did you reload Prometheus after making changes (`kill -HUP <prometheus_pid>` or `docker kill -s HUP <container_name>`)?
    *   **Prometheus UI -> Status -> Configuration:** Confirm that your `scrape_configs` are correctly loaded by Prometheus.

2.  **Check Prometheus Target Status:**
    *   **Prometheus UI -> Status -> Targets:** Look specifically for the `my-app` job.
        *   What is the exact error message? (e.g., "connection refused", "context deadline exceeded", "server returned HTTP 404"). This message is often the most direct clue.
        *   Is the target listed at all? If not, the configuration might be wrong or not loaded.

3.  **Network Connectivity (from Prometheus to `server-03:9090`):**
    *   **Ping:** From the machine running Prometheus, can you `ping server-03`? (Checks basic network reachability).
    *   **Telnet/Netcat:** Can you `telnet server-03 9090` or `nc -vz server-03 9090`?
        *   If `connection refused`, the service isn't listening or a firewall is blocking.
        *   If `connection timed out`, a firewall is likely blocking the connection or the host is unreachable.
    *   **Firewall on `server-03`:** Is the firewall (e.g., `ufw`, `firewalld`, `iptables`) on `server-03` allowing incoming connections on port `9090`?
    *   **Security Groups/Network ACLs (Cloud):** If `server-03` is in a cloud environment, check the relevant security groups or network ACLs to ensure port `9090` is open to the Prometheus server's IP.

4.  **Service Status on `server-03`:**
    *   **Is `my-app` running?** On `server-03`, check if the `my-app` process is active (`systemctl status my-app`, `docker ps`, `ps aux | grep my-app`).
    *   **Is `my-app` listening on port `9090`?** Use `netstat -tulnp | grep 9090` or `ss -tulnp | grep 9090` on `server-03`. Is it listening on `0.0.0.0:9090` or `server-03_IP:9090`? If it's listening on `127.0.0.1:9090`, it's only accessible locally.
    *   **Is the `/metrics` endpoint correct?** Try accessing `http://localhost:9090/metrics` directly from `server-03` using `curl`. Do you see Prometheus-formatted metrics?
        *   If you get a 404, the `/metrics` path might be wrong, or the application isn't exposing metrics correctly.
        *   If you get an empty response or an error, the application's metrics endpoint is faulty.

By following these steps, you can systematically pinpoint whether the problem lies in Prometheus configuration, network connectivity, or the `my-app` service itself.

---

**13. Question:** Design a basic monitoring solution using Prometheus and Grafana for a new microservice that processes orders. The service runs on Kubernetes, exposes custom metrics (e.g., `orders_processed_total`, `order_processing_duration_seconds_bucket`), and has a critical dependency on a PostgreSQL database. Outline the key components, how they would integrate, and what essential metrics/dashboards you would prioritize.

**Answer:**

**Monitoring Solution Design for an Order Processing Microservice on Kubernetes**

**Key Components & Integration:**

1.  **Kubernetes Cluster:** The foundation where our microservice and monitoring components will run.
2.  **Order Processing Microservice:**
    *   **Instrumentation:** The microservice itself must be instrumented using a Prometheus client library (e.g., client_golang for Go, Prometheus client for Python). It will expose custom metrics on a `/metrics` endpoint (e.g., port 8080).
    *   **Metrics:**
        *   `orders_processed_total`: A counter for the total number of orders processed (with labels like `status="success"` or `status="failure"`).
        *   `order_processing_duration_seconds`: A histogram for the latency of order processing (with labels for API endpoint, etc.).
        *   `database_query_duration_seconds`: A histogram for database query latency.
        *   `in_progress_orders`: A gauge for currently active order processing tasks.
3.  **Prometheus Operator (or Kube-Prometheus stack):**
    *   **Role:** This is the recommended way to deploy and manage Prometheus on Kubernetes. It provides custom resources (CRDs) like `ServiceMonitor` and `PodMonitor`.
    *   **Integration:**
        *   **ServiceMonitor for Microservice:** A `ServiceMonitor` resource will be created to discover the `orders-service` pods via its Kubernetes Service. It will instruct Prometheus to scrape the `/metrics` endpoint on port 8080.
        *   **ServiceMonitor for Node Exporter:** Node Exporter will be deployed as a DaemonSet to collect host-level metrics from each Kubernetes node. A `ServiceMonitor` will be configured to scrape these.
        *   **Prometheus for Database:** For PostgreSQL, we'd deploy the `postgres_exporter` (also as a Kubernetes Deployment/StatefulSet). A `ServiceMonitor` would then scrape its metrics (e.g., `pg_stat_activity_count`, `pg_database_size_bytes`).
4.  **Prometheus Server:**
    *   **Deployment:** Deployed via Prometheus Operator, it will automatically discover and scrape targets defined by `ServiceMonitor` and `PodMonitor` resources.
    *   **Configuration:** Its configuration will include `alert.rules` for critical conditions.
5.  **Alertmanager:**
    *   **Deployment:** Also deployed via Prometheus Operator.
    *   **Configuration:** Configured to receive alerts from Prometheus and route them to appropriate channels (e.g., Slack for warnings, PagerDuty for critical alerts).
6.  **Grafana:**
    *   **Deployment:** Deployed as a Kubernetes Deployment.
    *   **Integration:** Configured with Prometheus as a data source.
    *   **Dashboards:** Will host the dashboards for visualizing service health, performance, and database metrics.

**Essential Metrics & Prioritized Dashboards:**

**A. Order Processing Microservice Dashboard (High Priority):**

*   **Key Metrics:**
    *   **Throughput:** `rate(orders_processed_total[5m])` (total orders/sec).
    *   **Success/Error Rate:** `rate(orders_processed_total{status="success"}[5m]) / rate(orders_processed_total[5m])` (percentage of successful orders).
    *   **Latency:** `histogram_quantile(0.99, sum by (le, path) (rate(order_processing_duration_seconds_bucket[5m])))` (99th percentile latency for order processing).
    *   **In-Progress Orders:** `in_progress_orders` (gauge).
    *   **Resource Usage (from cAdvisor/Kubelet):** CPU, memory usage of the microservice containers.
*   **Panels:** Stat panels for current throughput/error rate, Graph panels for historical trends of latency and resource usage, Gauge for in-progress orders.

**B. PostgreSQL Database Health Dashboard (High Priority):**

*   **Key Metrics:**
    *   **Connection Count:** `pg_stat_activity_count` (number of active database connections).
    *   **Query Latency:** `histogram_quantile(0.99, sum by (le) (rate(database_query_duration_seconds_bucket[5m])))`.
    *   **Database Size:** `pg_database_size_bytes`.
    *   **Replication Lag (if applicable):** `pg_replication_lag_seconds`.
    *   **Error Count:** `pg_errors_total` (counter for database errors).
*   **Panels:** Graphs for connections, latency, size; Stat for error rate.

**C. Kubernetes Cluster & Node Health Dashboard (Medium Priority):**

*   **Key Metrics (from Node Exporter & Kubelet):**
    *   Node CPU, Memory, Disk usage.
    *   Network I/O.
    *   Pod counts per node.
*   **Panels:** Overview of cluster resource utilization, individual node health.

**Alerting Strategy:**

*   **Critical Alerts (via Alertmanager to PagerDuty/SMS):**
    *   High Error Rate for `orders_processed_total` (e.g., >5% errors for 1 minute).
    *   Order Processing Latency P99 exceeding critical threshold (e.g., >5 seconds for 2 minutes).
    *   Database connection pool exhaustion.
    *   PostgreSQL `pg_errors_total` rate spike.
    *   Node down (from Node Exporter).
*   **Warning Alerts (via Alertmanager to Slack/Email):**
    *   Order Processing Latency P99 exceeding warning threshold (e.g., >2 seconds for 5 minutes).
    *   High CPU/Memory usage of microservice pods.
    *   Low disk space on PostgreSQL data volume.

This design provides a comprehensive view of the order processing microservice, its critical database dependency, and the underlying infrastructure, enabling proactive identification and resolution of issues.

---

**14. Question:** You've set up a Grafana dashboard with multiple panels, and you notice that some panels are showing "No Data" or "N/A" even though you believe Prometheus is collecting the relevant metrics. What are the common reasons for this, and how would you troubleshoot it?

**Answer:**

When Grafana panels show "No Data" or "N/A", it indicates that Grafana isn't receiving the expected data from its data source (Prometheus in this case). Here's a systematic troubleshooting approach:

**Common Reasons for "No Data":**

1.  **Incorrect PromQL Query:** The most frequent cause.
    *   **Typos:** Simple spelling mistakes in metric names or label names.
    *   **Wrong Labels:** Using labels that don't exist for the metric, or incorrect label values.
    *   **Time Range Mismatch:** The query might be correct, but the data exists outside the dashboard's selected time range.
    *   **Aggregation Issues:** Query might return too many series, or aggregate them incorrectly, leading to no single value for a Stat/Gauge panel.
    *   **Instant vs. Range Queries:** Using a range query (e.g., `[5m]`) in a panel expecting an instant vector (like a Stat panel's "Last *").
2.  **Prometheus Data Source Issues:**
    *   **Grafana Data Source Configuration:** The Prometheus data source in Grafana might be misconfigured (wrong URL, authentication issues).
    *   **Prometheus Server Down/Unreachable:** Grafana cannot connect to the Prometheus server.
3.  **Prometheus Not Collecting Data:**
    *   **Target Down:** Prometheus is not successfully scraping the target that exposes the metrics (check Prometheus UI -> Status -> Targets).
    *   **Incorrect Scrape Configuration:** Prometheus's `scrape_configs` might be wrong (wrong `job_name`, `targets`, `metrics_path`).
    *   **Exporter/Application Not Exposing Metrics:** The application or exporter itself isn't running, or isn't exposing metrics on the expected port/path.
    *   **Metric Name Mismatch:** The metric name in the PromQL query doesn't match the actual metric name being exposed.
    *   **No Data Points Yet:** The service might have just started, and Prometheus hasn't scraped enough data points for the query to return a meaningful result (especially for `rate()` or `increase()` functions).

**Troubleshooting Steps:**

1.  **Check Grafana Panel Query:**
    *   **Open Panel in Edit Mode:** Go to the problematic panel, click its title, and select "Edit".
    *   **Inspect PromQL Query:** Carefully review the PromQL query in the "Query" tab. Look for typos in metric names, label names, and label values.
    *   **Run Query Directly in Prometheus:** Copy the exact PromQL query from Grafana and paste it into the Prometheus UI's expression browser.
        *   If it returns data in Prometheus, the issue is likely with Grafana's panel configuration (e.g., visualization type, transformations) or the data source.
        *   If it returns "No data points found" in Prometheus, the issue is with Prometheus's data collection or the query itself.
    *   **Adjust Time Range:** In Grafana, try expanding the dashboard's time range (e.g., to "Last 6 hours" or "Last 24 hours") to see if data appears historically.
    *   **Simplify Query:** If the query is complex, simplify it to just the metric name (e.g., `node_cpu_seconds_total`) to see if any data is returned at all. Then gradually add filters and functions.

2.  **Check Grafana Data Source:**
    *   **Grafana UI -> Connections -> Data sources:** Select your Prometheus data source.
    *   **Test Connection:** Click the "Save & Test" button. Does it show "Data source is working"? If not, check the URL and any authentication settings.
    *   **Browser Developer Tools:** Open your browser's developer tools (F12), go to the "Network" tab, and refresh the Grafana dashboard. Look for failed requests to your Prometheus data source.

3.  **Check Prometheus Data Collection:**
    *   **Prometheus UI -> Status -> Targets:**
        *   Find the `job` and `instance` corresponding to the metrics you expect. Is the target `UP` or `DOWN`?
        *   If `DOWN`, look at the `Error` message for clues (e.g., "connection refused", "context deadline exceeded").
        *   If `UP`, check the `Last Scrape` time and `Scrape Duration` to ensure it's actively scraping.
    *   **Prometheus UI -> Graph (Expression Browser):**
        *   Enter just the metric name (e.g., `node_cpu_seconds_total`) without any labels. Does it return any series?
        *   If not, Prometheus isn't collecting that metric at all. Check the exporter/application and Prometheus's `scrape_configs`.
    *   **Check Exporter/Application:**
        *   Directly access the exporter's `/metrics` endpoint (e.g., `curl http://server-ip:port/metrics`) from the Prometheus server machine. Do you see the expected metrics? If not, the exporter/application is the problem.

By systematically eliminating possibilities from the Grafana panel down to the data source and Prometheus's collection, you can effectively diagnose why a panel is showing "No Data."

---

## Course Conclusion

Congratulations, future DevOps and SRE professionals! You have successfully completed the Cohortia "Prometheus + Grafana" course. This journey has equipped you with a robust set of skills to tackle the complex world of modern system and application monitoring. You are no longer just observing; you are now actively instrumenting, collecting, visualizing, and alerting on the health and performance of your infrastructure and applications.

You can now confidently install and configure Prometheus, deploy various exporters to gather critical metrics, and master PromQL to extract meaningful insights from your time-series data. You've learned to wield Alertmanager for sophisticated notification routing, ensuring that the right people are informed at the right time. Furthermore, you are adept at installing and configuring Grafana, transforming raw metrics into compelling, interactive dashboards, and setting up intelligent alerts that proactively notify you of potential issues. These are not just theoretical concepts; they are practical, in-demand skills that are essential for maintaining reliable and performant systems in any technology stack.

### Where to Go Next: Continued Learning & Resources

Your learning journey doesn't end here; it's just beginning! The field of observability is constantly evolving, and continuous learning is key to staying ahead. Here are some recommended next steps and resources to deepen your expertise:

1.  **Advanced PromQL & Alerting:** Dive deeper into complex PromQL functions, subqueries, and advanced Alertmanager configurations (e.g., custom notification templates, complex inhibition rules). Practice writing more sophisticated alert rules for various failure scenarios.
    *   **Resources:** "Prometheus: Up & Running" by Brian Brazil and Björn Rabenstein (O'Reilly), official Prometheus documentation.
2.  **Kubernetes Monitoring with Prometheus:** Kubernetes has become the de-facto standard for container orchestration. Learn how to deploy the Kube-Prometheus stack, use `ServiceMonitor` and `PodMonitor` CRDs, and monitor Kubernetes clusters, pods, and services effectively.
    *   **Learning Path:** Cohortia's "Kubernetes Fundamentals" followed by "Kubernetes Observability with Prometheus."
3.  **Distributed Tracing & Logging:** Prometheus excels at metrics, but for deep debugging of distributed systems, you'll need tracing (e.g., Jaeger, OpenTelemetry) and centralized logging (e.g., Loki, ELK stack). Explore how these tools integrate with Prometheus for a complete observability picture.
    *   **Learning Path:** Cohortia's "Introduction to OpenTelemetry" or "Centralized Logging with Loki."
4.  **SRE Principles & SLOs:** Understand the principles of Site Reliability Engineering (SRE), including Service Level Objectives (SLOs), Service Level Indicators (SLIs), and error budgets. Learn how to define and measure these using Prometheus and Grafana.
    *   **Resources:** "Site Reliability Engineering" and "The Site Reliability Workbook" (Google SRE books).
5.  **Community Engagement & Open Source:** Join the Prometheus and Grafana communities. Participate in forums, contribute to open-source exporters, or even build your own custom exporter for a unique application. This hands-on experience is invaluable.
    *   **Communities:** Grafana Labs Community Forums, Prometheus Community on GitHub/Slack.

Keep practicing your skills by setting up monitoring for your personal projects, home lab, or even contributing to open-source initiatives. The more you build and troubleshoot, the more intuitive these powerful tools will become. We at Cohortia are proud of your dedication and look forward to seeing the incredible systems you'll build and maintain with your newfound expertise. Keep exploring, keep learning, and keep monitoring!

---


> End of Syllabus: Prometheus + Grafana
> Course ID: prometheus-grafana
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Cloud Computing & DevOps
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
