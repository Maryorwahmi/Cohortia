import { CohortTrackId } from "../types";

export interface DashboardLesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "concept" | "practice" | "project" | "checkpoint" | "connect";
}

export interface DashboardMilestone {
  id: string;
  number: number;
  title: string;
  description: string;
  goals?: string[];
  lessons: DashboardLesson[];
  projectTitle: string;
  projectDescription: string;
}

export interface ProjectBrief {
  id: string;
  title: string;
  client: string;
  logo: string;
  difficulty: string;
  duration: string;
  description: string;
  deliverables: string[];
  tasks: string[];
}

export const TRACK_CURRICULA: Record<CohortTrackId, DashboardMilestone[]> = {

  frontend: [
    {
      id: "fe_m1",
      number: 1,
      title: "Advanced Object-Oriented Programming",
      description: "Master inheritance nuances, virtual functions, abstract classes, diamond resolution, and the Rule of Five/Zero.",
      projectTitle: "High-Frequency Order Book OOP Model",
      projectDescription: "Implement a low-latency price matching structure modeling financial asset instruments.",
      lessons: [
        { id: "fe_l1", title: "Ch 1.1: Deep Dive into Inheritance and Access Specifiers", duration: "25 min", type: "video" },
        { id: "fe_l2", title: "Ch 1.2: Virtual Functions and Polymorphism", duration: "30 min", type: "concept" },
        { id: "fe_l3", title: "Ch 1.3: Abstract Classes and Pure Virtual Functions", duration: "20 min", type: "concept" },
        { id: "fe_l4", title: "Ch 1.4: Multiple Inheritance and the Diamond Problem", duration: "35 min", type: "practice" },
        { id: "fe_l5", title: "Ch 1.5: Virtual Destructors and Memory Safety", duration: "25 min", type: "video" },
        { id: "fe_l6", title: "Ch 1.6: Run-Time Type Information (RTTI) and Casts", duration: "30 min", type: "practice" },
        { id: "fe_l7", title: "Ch 1.7: Overriding, Overloading and Hiding Rules", duration: "20 min", type: "concept" },
        { id: "fe_l8", title: "Ch 1.8: Custom Copy and Move Constructors", duration: "40 min", type: "practice" },
        { id: "fe_l9", title: "Ch 1.9: Master the Rule of Five and Rule of Zero", duration: "30 min", type: "video" },
        { id: "fe_l10", title: "Ch 1.10: Object Oriented Interface Design Patterns", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m2",
      number: 2,
      title: "Memory Management and Pointers",
      description: "Deep dive into raw vs smart pointers, memory layouts, cache friendliness, custom allocators, and arena storage.",
      projectTitle: "Custom Smart Pointer & Arena Allocator Library",
      projectDescription: "Design a block-based memory allocator with local custom smart pointers to avoid system heap allocation overhead.",
      lessons: [
        { id: "fe_l11", title: "Ch 2.1: Stack vs Heap Allocation Models", duration: "25 min", type: "video" },
        { id: "fe_l12", title: "Ch 2.2: Memory Leak Detection and Prevention", duration: "30 min", type: "concept" },
        { id: "fe_l13", title: "Ch 2.3: Raw Pointers, References, and Nullpointer Safety", duration: "20 min", type: "concept" },
        { id: "fe_l14", title: "Ch 2.4: Deep Dive into std::unique_ptr", duration: "35 min", type: "practice" },
        { id: "fe_l15", title: "Ch 2.5: Deep Dive into std::shared_ptr", duration: "25 min", type: "video" },
        { id: "fe_l16", title: "Ch 2.6: Avoiding Cycles with std::weak_ptr", duration: "30 min", type: "practice" },
        { id: "fe_l17", title: "Ch 2.7: RAII Pattern for Memory Management", duration: "20 min", type: "concept" },
        { id: "fe_l18", title: "Ch 2.8: Custom Memory Allocators in Critical Systems", duration: "40 min", type: "practice" },
        { id: "fe_l19", title: "Ch 2.9: Placement New and Arena Allocation", duration: "30 min", type: "video" },
        { id: "fe_l20", title: "Ch 2.10: Memory Alignment and Cache Optimizations", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m3",
      number: 3,
      title: "Exception Handling",
      description: "Explore robust try-catch mechanisms, custom exceptions, stack unwinding, and exception-safe container design.",
      projectTitle: "Exception-Safe Transaction Coordinator",
      projectDescription: "Build a rollback-capable state coordinator that guarantees ACID properties under runtime exceptions.",
      lessons: [
        { id: "fe_l21", title: "Ch 3.1: Exception Basics and Try-Catch Blocks", duration: "20 min", type: "video" },
        { id: "fe_l22", title: "Ch 3.2: Custom Exception Classes and Inheritance", duration: "30 min", type: "concept" },
        { id: "fe_l23", title: "Ch 3.3: Stack Unwinding and Resource Cleanup", duration: "25 min", type: "concept" },
        { id: "fe_l24", title: "Ch 3.4: The noexcept Specifier and Move Semantics", duration: "35 min", type: "practice" },
        { id: "fe_l25", title: "Ch 3.5: Exception Safety Guarantees (Basic, Strong)", duration: "30 min", type: "video" },
        { id: "fe_l26", title: "Ch 3.6: Writing Exception-Safe Containers", duration: "45 min", type: "practice" },
        { id: "fe_l27", title: "Ch 3.7: Resource Leak Prevention during Exceptions", duration: "20 min", type: "concept" },
        { id: "fe_l28", title: "Ch 3.8: Re-throwing Exceptions and Nested Exceptions", duration: "30 min", type: "practice" },
        { id: "fe_l29", title: "Ch 3.9: Standard Library Exceptions Hierarchy", duration: "25 min", type: "video" },
        { id: "fe_l30", title: "Ch 3.10: Best Practices for Exception-Safe APIs", duration: "30 min", type: "project" }
      ]
    },
    {
      id: "fe_m4",
      number: 4,
      title: "Templates - Fundamentals",
      description: "Learn function/class templates, parameter types, explicit specialization, and simple compile-time programming.",
      projectTitle: "Generic Compile-Time JSON Parser",
      projectDescription: "Develop a basic template-driven parser that converts native structures into strings at compile time.",
      lessons: [
        { id: "fe_l31", title: "Ch 4.1: Introduction to Function Templates", duration: "25 min", type: "video" },
        { id: "fe_l32", title: "Ch 4.2: Class Templates and Member Functions", duration: "30 min", type: "concept" },
        { id: "fe_l33", title: "Ch 4.3: Template Parameter Types and Non-Type Parameters", duration: "20 min", type: "concept" },
        { id: "fe_l34", title: "Ch 4.4: Template Argument Deduction", duration: "35 min", type: "practice" },
        { id: "fe_l35", title: "Ch 4.5: Explicit Template Specialization", duration: "30 min", type: "video" },
        { id: "fe_l36", title: "Ch 4.6: Partial Template Specialization", duration: "40 min", type: "practice" },
        { id: "fe_l37", title: "Ch 4.7: Default Template Arguments", duration: "20 min", type: "concept" },
        { id: "fe_l38", title: "Ch 4.8: Dependent Names and the typename Keyword", duration: "30 min", type: "practice" },
        { id: "fe_l39", title: "Ch 4.9: Template Compilation Models and Headers", duration: "25 min", type: "video" },
        { id: "fe_l40", title: "Ch 4.10: Writing Reusable Generic Libraries", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m5",
      number: 5,
      title: "Templates - Advanced",
      description: "Master variadic templates, perfect forwarding, SFINAE, std::enable_if, and type-traits metaprogramming.",
      projectTitle: "Metaprogramming Type-Traits Inspector",
      projectDescription: "Construct a static validation system that audits and displays properties of C++ classes at compile-time.",
      lessons: [
        { id: "fe_l41", title: "Ch 5.1: Variadic Templates and Fold Expressions", duration: "30 min", type: "video" },
        { id: "fe_l42", title: "Ch 5.2: Perfect Forwarding and std::forward", duration: "35 min", type: "concept" },
        { id: "fe_l43", title: "Ch 5.3: Introduction to SFINAE", duration: "25 min", type: "concept" },
        { id: "fe_l44", title: "Ch 5.4: Master std::enable_if", duration: "40 min", type: "practice" },
        { id: "fe_l45", title: "Ch 5.5: Type Traits Library and Compile-Time Checks", duration: "30 min", type: "video" },
        { id: "fe_l46", title: "Ch 5.6: Template Metaprogramming Loops and Recursion", duration: "45 min", type: "practice" },
        { id: "fe_l47", title: "Ch 5.7: Compile-Time Decisions with if constexpr", duration: "20 min", type: "concept" },
        { id: "fe_l48", title: "Ch 5.8: Custom Type Trait Implementations", duration: "35 min", type: "practice" },
        { id: "fe_l49", title: "Ch 5.9: Template template Parameters", duration: "25 min", type: "video" },
        { id: "fe_l50", title: "Ch 5.10: Performance Cost of Advanced Templates", duration: "30 min", type: "project" }
      ]
    },
    {
      id: "fe_m6",
      number: 6,
      title: "Standard Template Library (STL) - Containers",
      description: "Dive into STL sequential and associative structures, custom allocators, memory layouts, and rehashing details.",
      projectTitle: "Lock-Free Single-Producer Single-Consumer Queue",
      projectDescription: "Develop an STL-compatible thread-safe circular buffer queue for low-latency messaging.",
      lessons: [
        { id: "fe_l51", title: "Ch 6.1: Vector Internal Layout and Dynamic Growth", duration: "25 min", type: "video" },
        { id: "fe_l52", title: "Ch 6.2: Deque, List, and Forward List Mechanics", duration: "30 min", type: "concept" },
        { id: "fe_l53", title: "Ch 6.3: Map and Set: Red-Black Tree Implementations", duration: "20 min", type: "concept" },
        { id: "fe_l54", title: "Ch 6.4: Unordered Containers and Hash Buckets", duration: "35 min", type: "practice" },
        { id: "fe_l55", title: "Ch 6.5: Container Adaptors: Stack, Queue, Priority Queue", duration: "25 min", type: "video" },
        { id: "fe_l56", title: "Ch 6.6: Custom Comparators and Hash Functions", duration: "40 min", type: "practice" },
        { id: "fe_l57", title: "Ch 6.7: Iterator Invalidation Rules", duration: "20 min", type: "concept" },
        { id: "fe_l58", title: "Ch 6.8: Emplace vs Insert for Modern Performance", duration: "30 min", type: "practice" },
        { id: "fe_l59", title: "Ch 6.9: STL Allocator Concept and Rebinding", duration: "30 min", type: "video" },
        { id: "fe_l60", title: "Ch 6.10: High-Performance Cache-Friendly Container Choice", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m7",
      number: 7,
      title: "STL - Algorithms and Iterators",
      description: "Master standard search, sort, transform, set, and partition algorithms, custom predicates, and parallel executors.",
      projectTitle: "Parallelized STL Search and Sort Engine",
      projectDescription: "Develop a multi-core parallel sorting and query manager that runs across large file datasets using STL Parallel policies.",
      lessons: [
        { id: "fe_l61", title: "Ch 7.1: Iterator Categories and Utility Functions", duration: "25 min", type: "video" },
        { id: "fe_l62", title: "Ch 7.2: Non-Modifying STL Algorithms", duration: "30 min", type: "concept" },
        { id: "fe_l63", title: "Ch 7.3: Modifying STL Algorithms and Copying", duration: "20 min", type: "concept" },
        { id: "fe_l64", title: "Ch 7.4: Sorting, Binary Search, and Partitions", duration: "35 min", type: "practice" },
        { id: "fe_l65", title: "Ch 7.5: Set Operations and Merging", duration: "25 min", type: "video" },
        { id: "fe_l66", title: "Ch 7.6: Min/Max, Numeric, and Accumulate Algorithms", duration: "40 min", type: "practice" },
        { id: "fe_l67", title: "Ch 7.7: Custom Predicates and Lambda Captures", duration: "20 min", type: "concept" },
        { id: "fe_l68", title: "Ch 7.8: Standard Library Function Objects", duration: "30 min", type: "practice" },
        { id: "fe_l69", title: "Ch 7.9: STL Parallel Execution Policies (C++17)", duration: "30 min", type: "video" },
        { id: "fe_l70", title: "Ch 7.10: Writing custom STL-compliant Algorithms", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m8",
      number: 8,
      title: "Input/Output Operations",
      description: "Deep dive into iostreams, file handling, stringstreams, custom stream operators, and binary serialization.",
      projectTitle: "Binary Serialization and Network Protocol Parser",
      projectDescription: "Develop a custom file archiver and binary layout parser that serializes structures onto disk space-efficiently.",
      lessons: [
        { id: "fe_l71", title: "Ch 8.1: Stream Hierarchy and Standard I/O Streams", duration: "25 min", type: "video" },
        { id: "fe_l72", title: "Ch 8.2: Stream States, Flags, and Error Handling", duration: "30 min", type: "concept" },
        { id: "fe_l73", title: "Ch 8.3: File I/O with ifstream and ofstream", duration: "20 min", type: "concept" },
        { id: "fe_l74", title: "Ch 8.4: Formatted and Unformatted I/O", duration: "35 min", type: "practice" },
        { id: "fe_l75", title: "Ch 8.5: Stream Manipulators and Custom Formatting", duration: "25 min", type: "video" },
        { id: "fe_l76", title: "Ch 8.6: Stringstreams and Parsing Techniques", duration: "40 min", type: "practice" },
        { id: "fe_l77", title: "Ch 8.7: Overloading Operator<< and Operator>>", duration: "20 min", type: "concept" },
        { id: "fe_l78", title: "Ch 8.8: Binary File Operations and Serialization", duration: "30 min", type: "practice" },
        { id: "fe_l79", title: "Ch 8.9: File Buffering and Stream Performance", duration: "30 min", type: "video" },
        { id: "fe_l80", title: "Ch 8.10: Multi-Format JSON/CSV Exporter System", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m9",
      number: 9,
      title: "Concurrency and Multi-threading",
      description: "Master std::thread, mutexes, lock_guards, condition variables, futures, promises, and atomic operations.",
      projectTitle: "Multithreaded Task Scheduler & Thread Pool",
      projectDescription: "Build a lock-free task runner thread pool with priority scheduling and work-stealing queues.",
      lessons: [
        { id: "fe_l81", title: "Ch 9.1: Concurrency Basics and std::thread", duration: "25 min", type: "video" },
        { id: "fe_l82", title: "Ch 9.2: Thread Synchronization with std::mutex", duration: "30 min", type: "concept" },
        { id: "fe_l83", title: "Ch 9.3: Advanced Locks: unique_lock and shared_lock", duration: "20 min", type: "concept" },
        { id: "fe_l84", title: "Ch 9.4: Deadlocks, Prevention, and std::lock", duration: "35 min", type: "practice" },
        { id: "fe_l85", title: "Ch 9.5: Condition Variables and Thread Signaling", duration: "25 min", type: "video" },
        { id: "fe_l86", title: "Ch 9.7: Asynchronous Tasks with std::async and futures", duration: "40 min", type: "practice" },
        { id: "fe_l87", title: "Ch 9.7: Promises, Packaged Tasks, and Exception Propagation", duration: "20 min", type: "concept" },
        { id: "fe_l88", title: "Ch 9.8: Atomic Operations and std::atomic", duration: "30 min", type: "practice" },
        { id: "fe_l89", title: "Ch 9.9: Memory Barriers and Lock-Free Concepts", duration: "30 min", type: "video" },
        { id: "fe_l90", title: "Ch 9.10: Designing a Thread-Safe Shared Queue", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m10",
      number: 10,
      title: "Modern C++ Features",
      description: "Unlock modern C++11 to C++23 mechanics: lambdas, rvalue references, move semantics, std::optional, and coroutines.",
      projectTitle: "C++20 Ranges & Coroutines Stream Processor",
      projectDescription: "Build an event pipeline utilizing C++20 generator coroutines and ranges to transform datasets on the fly.",
      lessons: [
        { id: "fe_l91", title: "Ch 10.1: Lambdas, Captures, and Generic Lambdas", duration: "25 min", type: "video" },
        { id: "fe_l92", title: "Ch 10.2: Rvalue References and Move Semantics", duration: "30 min", type: "concept" },
        { id: "fe_l93", title: "Ch 10.3: Constexpr and Consteval Specifiers", duration: "20 min", type: "concept" },
        { id: "fe_l94", title: "Ch 10.4: Master std::optional, std::variant, and std::any", duration: "35 min", type: "practice" },
        { id: "fe_l95", title: "Ch 10.5: Smart Pointers and Custom deleters revisited", duration: "25 min", type: "video" },
        { id: "fe_l96", title: "Ch 10.6: Three-Way Comparison Operator (<=>)", duration: "40 min", type: "practice" },
        { id: "fe_l97", title: "Ch 10.7: C++20 Modules and build performance", duration: "20 min", type: "concept" },
        { id: "fe_l98", title: "Ch 10.8: C++20 Ranges and Views pipeline", duration: "30 min", type: "practice" },
        { id: "fe_l99", title: "Ch 10.9: C++20 Coroutines: Generators and Awaitables", duration: "30 min", type: "video" },
        { id: "fe_l100", title: "Ch 10.10: Previewing C++23 static operators & monadic types", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m11",
      number: 11,
      title: "Design Patterns and Best Practices",
      description: "Deep dive into solid OOP design patterns, SOLID architecture rules, dependency injection, and clean refactoring.",
      projectTitle: "Enterprise Dependency Injection Framework",
      projectDescription: "Author a lightweight C++ Dependency Injection container that maps class lifetimes dynamically.",
      lessons: [
        { id: "fe_l101", title: "Ch 11.1: Creational Patterns: Singleton, Factory, Builder", duration: "25 min", type: "video" },
        { id: "fe_l102", title: "Ch 11.2: Structural Patterns: Adapter, Decorator, Proxy", duration: "30 min", type: "concept" },
        { id: "fe_l103", title: "Ch 11.3: Behavioral Patterns: Observer, Strategy, Command", duration: "20 min", type: "concept" },
        { id: "fe_l104", title: "Ch 11.4: SOLID Principles of Object-Oriented Design", duration: "35 min", type: "practice" },
        { id: "fe_l105", title: "Ch 11.5: Dependency Injection and IoC", duration: "25 min", type: "video" },
        { id: "fe_l106", title: "Ch 11.6: Coding Standards, Style Guides, and Guidelines", duration: "40 min", type: "practice" },
        { id: "fe_l107", title: "Ch 11.7: Code Review Best Practices in Production", duration: "20 min", type: "concept" },
        { id: "fe_l108", title: "Ch 11.8: Refactoring Legacy C++ Systems", duration: "30 min", type: "practice" },
        { id: "fe_l109", title: "Ch 11.9: Writing Testable and Modular C++ Code", duration: "30 min", type: "video" },
        { id: "fe_l110", title: "Ch 11.10: Architecture Design Document Compilation", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "fe_m12",
      number: 12,
      title: "Performance Optimization and Debugging",
      description: "Equip yourself with profiling tools (GProf, Valgrind), memory layout audits, assembly analysis, and compiler flags.",
      projectTitle: "Distributed Low-Latency Engine Profiling",
      projectDescription: "Conduct a full profiling audit, identify execution bottlenecks, and optimize assembly output in a low-latency pipeline.",
      lessons: [
        { id: "fe_l111", title: "Ch 12.1: Profiling C++ Applications: GProf and Valgrind", duration: "25 min", type: "video" },
        { id: "fe_l112", title: "Ch 12.2: Benchmarking Code with Google Benchmark", duration: "30 min", type: "concept" },
        { id: "fe_l113", title: "Ch 12.3: Compiler Optimizations: Understanding -O flags", duration: "20 min", type: "concept" },
        { id: "fe_l114", title: "Ch 12.4: Cache-Friendly Code & Locality of Reference", duration: "35 min", type: "practice" },
        { id: "fe_l115", title: "Ch 12.5: Algorithmic Complexity Analysis Revisited", duration: "25 min", type: "video" },
        { id: "fe_l116", title: "Ch 12.6: Advanced Memory Optimizations & Custom Pools", duration: "40 min", type: "practice" },
        { id: "fe_l117", title: "Ch 12.7: Advanced GDB Debugging Techniques", duration: "20 min", type: "concept" },
        { id: "fe_l118", title: "Ch 12.8: Static Analysis with Clang-Tidy & Cppcheck", duration: "30 min", type: "practice" },
        { id: "fe_l119", title: "Ch 12.9: Writing Robust Unit Tests with Google Test", duration: "30 min", type: "video" },
        { id: "fe_l120", title: "Ch 12.10: Final Course Conclusion and Exit Exam Prep", duration: "35 min", type: "project" }
      ]
    }
  ],
  design: [
    {
      id: "de_m1",
      number: 1,
      title: "Assessment & Onboarding",
      description: "Familiarize yourself with workspace guidelines, review typography scales, and inspect UI structures.",
      projectTitle: "Creative Moodboard Handoff",
      projectDescription: "Compile visual styles, asset libraries, and moodboard structures for client briefing sheets.",
      lessons: [
        { id: "de_l1", title: "Why Assessment & Onboarding matters", duration: "12 min", type: "video" },
        { id: "de_l2", title: "Core concepts for Figma UI Basics", duration: "30 min", type: "concept" },
        { id: "de_l3", title: "Practice Frame Layouts & Grids", duration: "45 min", type: "practice" },
        { id: "de_l4", title: "Apply: Creative Moodboard Handoff", duration: "60 min", type: "project" },
        { id: "de_l5", title: "Assessment & Onboarding Checkpoint", duration: "10 min", type: "checkpoint" },
        { id: "de_l6", title: "Connect: Peer Design critiques", duration: "15 min", type: "connect" }
      ]
    },
    {
      id: "de_m2",
      number: 2,
      title: "Foundation Building",
      description: "Understand spacing rhythms, modular typographic setups, and color application frameworks.",
      projectTitle: "Custom Component Style Guide",
      projectDescription: "Design a comprehensive component set in Figma with responsive auto-layout structures.",
      lessons: [
        { id: "de_l7", title: "Why Foundation Building matters", duration: "15 min", type: "video" },
        { id: "de_l8", title: "Core concepts for Typography & Colors", duration: "45 min", type: "concept" },
        { id: "de_l9", title: "Practice Auto-Layout 4.0 systems", duration: "60 min", type: "practice" },
        { id: "de_l10", title: "Apply: Custom Component Style Guide", duration: "90 min", type: "project" },
        { id: "de_l11", title: "Foundation Building Checkpoint", duration: "15 min", type: "checkpoint" },
        { id: "de_l12", title: "Connect: Align with developer specs", duration: "20 min", type: "connect" }
      ]
    },
    {
      id: "de_m3",
      number: 3,
      title: "Skill Acquisition",
      description: "Formulate interactive, stateful variant groups in Figma, creating robust user-flows.",
      projectTitle: "CarbonHQ Admin Design Specs",
      projectDescription: "Create pixel-perfect, detailed designs for the CarbonHQ Clean Energy telemetry portal.",
      lessons: [
        { id: "de_l13", title: "Why Skill Acquisition matters", duration: "20 min", type: "video" },
        { id: "de_l14", title: "Core concepts for Interactive Prototyping", duration: "50 min", type: "concept" },
        { id: "de_l15", title: "Practice Variables & Variant transitions", duration: "75 min", type: "practice" },
        { id: "de_l16", title: "Apply: CarbonHQ Admin Design Specs", duration: "120 min", type: "project" },
        { id: "de_l17", title: "Skill Acquisition Checkpoint", duration: "20 min", type: "checkpoint" },
        { id: "de_l18", title: "Connect: Handoff specs review", duration: "25 min", type: "connect" }
      ]
    },
    {
      id: "de_m4",
      number: 4,
      title: "Real-World Application",
      description: "Deploy Mid-Fi usability tests, extract heuristic data, and analyze product interface friction.",
      projectTitle: "EcoSync Mobile Dashboard Design",
      projectDescription: "Build mobile-first app layouts for EcoSync, establishing seamless user transitions.",
      lessons: [
        { id: "de_l19", title: "Why Real-World Application matters", duration: "25 min", type: "video" },
        { id: "de_l20", title: "Core concepts for User Testing & Analytics", duration: "60 min", type: "concept" },
        { id: "de_l21", title: "Practice Mid-fidelity usability testing", duration: "90 min", type: "practice" },
        { id: "de_l22", title: "Apply: EcoSync Mobile Dashboard Design", duration: "180 min", type: "project" },
        { id: "de_l23", title: "Real-World Application Checkpoint", duration: "30 min", type: "checkpoint" },
        { id: "de_l24", title: "Connect: Pitching designs to clients", duration: "30 min", type: "connect" }
      ]
    },
    {
      id: "de_m5",
      number: 5,
      title: "Career Transition",
      description: "Construct captivating Behance layout specifications, and compile standard case studies.",
      projectTitle: "Design Portfolio Case Study",
      projectDescription: "Draft a beautiful end-to-end UX case study analyzing your design decisions.",
      lessons: [
        { id: "de_l25", title: "Why Career Transition matters", duration: "30 min", type: "video" },
        { id: "de_l26", title: "Core concepts for Presentation Deck building", duration: "60 min", type: "concept" },
        { id: "de_l27", title: "Practice Behance/Dribbble layouts", duration: "120 min", type: "practice" },
        { id: "de_l28", title: "Apply: Design Portfolio Case Study", duration: "180 min", type: "project" },
        { id: "de_l29", title: "Career Transition Checkpoint", duration: "30 min", type: "checkpoint" },
        { id: "de_l30", title: "Connect: Direct UX Mentor matching", duration: "45 min", type: "connect" }
      ]
    }
  ],
  product: [
    {
      id: "pm_m1",
      number: 1,
      title: "Assessment & Onboarding",
      description: "Define product vision statements, align target user groups, and study market contexts.",
      projectTitle: "Competitor Feature Matrix",
      projectDescription: "Draft a competitive analysis matrix analyzing core feature differences across SaaS rivals.",
      lessons: [
        { id: "pm_l1", title: "Why Assessment & Onboarding matters", duration: "12 min", type: "video" },
        { id: "pm_l2", title: "Core concepts for PM Role expectations", duration: "30 min", type: "concept" },
        { id: "pm_l3", title: "Practice Writing simple user stories", duration: "45 min", type: "practice" },
        { id: "pm_l4", title: "Apply: Competitor Feature Matrix", duration: "60 min", type: "project" },
        { id: "pm_l5", title: "Assessment & Onboarding Checkpoint", duration: "10 min", type: "checkpoint" },
        { id: "pm_l6", title: "Connect: Team charter creation", duration: "15 min", type: "connect" }
      ]
    },
    {
      id: "pm_m2",
      number: 2,
      title: "Foundation Building",
      description: "Acquire Scrum methodology, coordinate backlogs, and prioritize features cleanly.",
      projectTitle: "Milestone Sprint Backlog",
      projectDescription: "Configure a highly detailed backlog showing points estimation, sprint schedules and story maps.",
      lessons: [
        { id: "pm_l7", title: "Why Foundation Building matters", duration: "15 min", type: "video" },
        { id: "pm_l8", title: "Core concepts for Agile & Scrum sprints", duration: "45 min", type: "concept" },
        { id: "pm_l9", title: "Practice Backlog grooming with Jira", duration: "60 min", type: "practice" },
        { id: "pm_l10", title: "Apply: Milestone Sprint Backlog", duration: "90 min", type: "project" },
        { id: "pm_l11", title: "Foundation Building Checkpoint", duration: "15 min", type: "checkpoint" },
        { id: "pm_l12", title: "Connect: Negotiating with engineers", duration: "20 min", type: "connect" }
      ]
    },
    {
      id: "pm_m3",
      number: 3,
      title: "Skill Acquisition",
      description: "Draft professional Product Requirement Briefs (PRBs), establishing precise metrics and KPIs.",
      projectTitle: "EcoSync Sprint Scope Brief",
      projectDescription: "Produce a detailed PRB establishing technical scopes, user stories, and acceptance tests for EcoSync.",
      lessons: [
        { id: "pm_l13", title: "Why Skill Acquisition matters", duration: "20 min", type: "video" },
        { id: "pm_l14", title: "Core concepts for PRB drafting & Metrics", duration: "50 min", type: "concept" },
        { id: "pm_l15", title: "Practice Feature cost-benefit estimates", duration: "75 min", type: "practice" },
        { id: "pm_l16", title: "Apply: EcoSync Sprint Scope Brief", duration: "120 min", type: "project" },
        { id: "pm_l17", title: "Skill Acquisition Checkpoint", duration: "20 min", type: "checkpoint" },
        { id: "pm_l18", title: "Connect: Spec presentation review", duration: "25 min", type: "connect" }
      ]
    },
    {
      id: "pm_m4",
      number: 4,
      title: "Real-World Application",
      description: "Model dynamic user retention funnels, identify leakages, and configure corrective strategies.",
      projectTitle: "Stripe Checkout Brief Specs",
      projectDescription: "Create a conversion optimization specification brief targeting checkout funnels for Stripe.",
      lessons: [
        { id: "pm_l19", title: "Why Real-World Application matters", duration: "25 min", type: "video" },
        { id: "pm_l20", title: "Core concepts for User Journey & Analytics", duration: "60 min", type: "concept" },
        { id: "pm_l21", title: "Practice Product-Market Fit metrics", duration: "90 min", type: "practice" },
        { id: "pm_l22", title: "Apply: Stripe Checkout Brief Specs", duration: "180 min", type: "project" },
        { id: "pm_l23", title: "Real-World Application Checkpoint", duration: "30 min", type: "checkpoint" },
        { id: "pm_l24", title: "Connect: Mentor client alignment", duration: "30 min", type: "connect" }
      ]
    },
    {
      id: "pm_m5",
      number: 5,
      title: "Career Transition",
      description: "Structure high-impact PM resumes, practice interactive system product design cases, and build pitches.",
      projectTitle: "Complete Product Pitch Deck",
      projectDescription: "Design a comprehensive pitch deck summarizing product vision, release cycles, and monetization strategies.",
      lessons: [
        { id: "pm_l25", title: "Why Career Transition matters", duration: "30 min", type: "video" },
        { id: "pm_l26", title: "Core concepts for PM Resume pitching", duration: "60 min", type: "concept" },
        { id: "pm_l27", title: "Practice Product Design cases", duration: "120 min", type: "practice" },
        { id: "pm_l28", title: "Apply: Complete Product Pitch Deck", duration: "180 min", type: "project" },
        { id: "pm_l29", title: "Career Transition Checkpoint", duration: "30 min", type: "checkpoint" },
        { id: "pm_l30", title: "Connect: Recruiter networking day", duration: "45 min", type: "connect" }
      ]
    }
  ],
  cpp: [
    {
      id: "cpp_m1",
      number: 1,
      title: "Advanced Object-Oriented Programming",
      description: "Master inheritance nuances, virtual functions, abstract classes, diamond resolution, and the Rule of Five/Zero.",
      projectTitle: "High-Frequency Order Book OOP Model",
      projectDescription: "Implement a low-latency price matching structure modeling financial asset instruments.",
      lessons: [
        { id: "cpp_l1", title: "Ch 1.1: Deep Dive into Inheritance and Access Specifiers", duration: "25 min", type: "video" },
        { id: "cpp_l2", title: "Ch 1.2: Virtual Functions and Polymorphism", duration: "30 min", type: "concept" },
        { id: "cpp_l3", title: "Ch 1.3: Abstract Classes and Pure Virtual Functions", duration: "20 min", type: "concept" },
        { id: "cpp_l4", title: "Ch 1.4: Multiple Inheritance and the Diamond Problem", duration: "35 min", type: "practice" },
        { id: "cpp_l5", title: "Ch 1.5: Virtual Destructors and Memory Safety", duration: "25 min", type: "video" },
        { id: "cpp_l6", title: "Ch 1.6: Run-Time Type Information (RTTI) and Casts", duration: "30 min", type: "practice" },
        { id: "cpp_l7", title: "Ch 1.7: Overriding, Overloading and Hiding Rules", duration: "20 min", type: "concept" },
        { id: "cpp_l8", title: "Ch 1.8: Custom Copy and Move Constructors", duration: "40 min", type: "practice" },
        { id: "cpp_l9", title: "Ch 1.9: Master the Rule of Five and Rule of Zero", duration: "30 min", type: "video" },
        { id: "cpp_l10", title: "Ch 1.10: Object Oriented Interface Design Patterns", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m2",
      number: 2,
      title: "Memory Management and Pointers",
      description: "Deep dive into raw vs smart pointers, memory layouts, cache friendliness, custom allocators, and arena storage.",
      projectTitle: "Custom Smart Pointer & Arena Allocator Library",
      projectDescription: "Design a block-based memory allocator with local custom smart pointers to avoid system heap allocation overhead.",
      lessons: [
        { id: "cpp_l11", title: "Ch 2.1: Stack vs Heap Allocation Models", duration: "25 min", type: "video" },
        { id: "cpp_l12", title: "Ch 2.2: Memory Leak Detection and Prevention", duration: "30 min", type: "concept" },
        { id: "cpp_l13", title: "Ch 2.3: Raw Pointers, References, and Nullpointer Safety", duration: "20 min", type: "concept" },
        { id: "cpp_l14", title: "Ch 2.4: Deep Dive into std::unique_ptr", duration: "35 min", type: "practice" },
        { id: "cpp_l15", title: "Ch 2.5: Deep Dive into std::shared_ptr", duration: "25 min", type: "video" },
        { id: "cpp_l16", title: "Ch 2.6: Avoiding Cycles with std::weak_ptr", duration: "30 min", type: "practice" },
        { id: "cpp_l17", title: "Ch 2.7: RAII Pattern for Memory Management", duration: "20 min", type: "concept" },
        { id: "cpp_l18", title: "Ch 2.8: Custom Memory Allocators in Critical Systems", duration: "40 min", type: "practice" },
        { id: "cpp_l19", title: "Ch 2.9: Placement New and Arena Allocation", duration: "30 min", type: "video" },
        { id: "cpp_l20", title: "Ch 2.10: Memory Alignment and Cache Optimizations", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m3",
      number: 3,
      title: "Exception Handling",
      description: "Explore robust try-catch mechanisms, custom exceptions, stack unwinding, and exception-safe container design.",
      projectTitle: "Exception-Safe Transaction Coordinator",
      projectDescription: "Build a rollback-capable state coordinator that guarantees ACID properties under runtime exceptions.",
      lessons: [
        { id: "cpp_l21", title: "Ch 3.1: Exception Basics and Try-Catch Blocks", duration: "20 min", type: "video" },
        { id: "cpp_l22", title: "Ch 3.2: Custom Exception Classes and Inheritance", duration: "30 min", type: "concept" },
        { id: "cpp_l23", title: "Ch 3.3: Stack Unwinding and Resource Cleanup", duration: "25 min", type: "concept" },
        { id: "cpp_l24", title: "Ch 3.4: The noexcept Specifier and Move Semantics", duration: "35 min", type: "practice" },
        { id: "cpp_l25", title: "Ch 3.5: Exception Safety Guarantees (Basic, Strong)", duration: "30 min", type: "video" },
        { id: "cpp_l26", title: "Ch 3.6: Writing Exception-Safe Containers", duration: "45 min", type: "practice" },
        { id: "cpp_l27", title: "Ch 3.7: Resource Leak Prevention during Exceptions", duration: "20 min", type: "concept" },
        { id: "cpp_l28", title: "Ch 3.8: Re-throwing Exceptions and Nested Exceptions", duration: "30 min", type: "practice" },
        { id: "cpp_l29", title: "Ch 3.9: Standard Library Exceptions Hierarchy", duration: "25 min", type: "video" },
        { id: "cpp_l30", title: "Ch 3.10: Best Practices for Exception-Safe APIs", duration: "30 min", type: "project" }
      ]
    },
    {
      id: "cpp_m4",
      number: 4,
      title: "Templates - Fundamentals",
      description: "Learn function/class templates, parameter types, explicit specialization, and simple compile-time programming.",
      projectTitle: "Generic Compile-Time JSON Parser",
      projectDescription: "Develop a basic template-driven parser that converts native structures into strings at compile time.",
      lessons: [
        { id: "cpp_l31", title: "Ch 4.1: Introduction to Function Templates", duration: "25 min", type: "video" },
        { id: "cpp_l32", title: "Ch 4.2: Class Templates and Member Functions", duration: "30 min", type: "concept" },
        { id: "cpp_l33", title: "Ch 4.3: Template Parameter Types and Non-Type Parameters", duration: "20 min", type: "concept" },
        { id: "cpp_l34", title: "Ch 4.4: Template Argument Deduction", duration: "35 min", type: "practice" },
        { id: "cpp_l35", title: "Ch 4.5: Explicit Template Specialization", duration: "30 min", type: "video" },
        { id: "cpp_l36", title: "Ch 4.6: Partial Template Specialization", duration: "40 min", type: "practice" },
        { id: "cpp_l37", title: "Ch 4.7: Default Template Arguments", duration: "20 min", type: "concept" },
        { id: "cpp_l38", title: "Ch 4.8: Dependent Names and the typename Keyword", duration: "30 min", type: "practice" },
        { id: "cpp_l39", title: "Ch 4.9: Template Compilation Models and Headers", duration: "25 min", type: "video" },
        { id: "cpp_l40", title: "Ch 4.10: Writing Reusable Generic Libraries", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m5",
      number: 5,
      title: "Templates - Advanced",
      description: "Master variadic templates, perfect forwarding, SFINAE, std::enable_if, and type-traits metaprogramming.",
      projectTitle: "Metaprogramming Type-Traits Inspector",
      projectDescription: "Construct a static validation system that audits and displays properties of C++ classes at compile-time.",
      lessons: [
        { id: "cpp_l41", title: "Ch 5.1: Variadic Templates and Fold Expressions", duration: "30 min", type: "video" },
        { id: "cpp_l42", title: "Ch 5.2: Perfect Forwarding and std::forward", duration: "35 min", type: "concept" },
        { id: "cpp_l43", title: "Ch 5.3: Introduction to SFINAE", duration: "25 min", type: "concept" },
        { id: "cpp_l44", title: "Ch 5.4: Master std::enable_if", duration: "40 min", type: "practice" },
        { id: "cpp_l45", title: "Ch 5.5: Type Traits Library and Compile-Time Checks", duration: "30 min", type: "video" },
        { id: "cpp_l46", title: "Ch 5.6: Template Metaprogramming Loops and Recursion", duration: "45 min", type: "practice" },
        { id: "cpp_l47", title: "Ch 5.7: Compile-Time Decisions with if constexpr", duration: "20 min", type: "concept" },
        { id: "cpp_l48", title: "Ch 5.8: Custom Type Trait Implementations", duration: "35 min", type: "practice" },
        { id: "cpp_l49", title: "Ch 5.9: Template template Parameters", duration: "25 min", type: "video" },
        { id: "cpp_l50", title: "Ch 5.10: Performance Cost of Advanced Templates", duration: "30 min", type: "project" }
      ]
    },
    {
      id: "cpp_m6",
      number: 6,
      title: "Standard Template Library (STL) - Containers",
      description: "Dive into STL sequential and associative structures, custom allocators, memory layouts, and rehashing details.",
      projectTitle: "Lock-Free Single-Producer Single-Consumer Queue",
      projectDescription: "Develop an STL-compatible thread-safe circular buffer queue for low-latency messaging.",
      lessons: [
        { id: "cpp_l51", title: "Ch 6.1: Vector Internal Layout and Dynamic Growth", duration: "25 min", type: "video" },
        { id: "cpp_l52", title: "Ch 6.2: Deque, List, and Forward List Mechanics", duration: "30 min", type: "concept" },
        { id: "cpp_l53", title: "Ch 6.3: Map and Set: Red-Black Tree Implementations", duration: "20 min", type: "concept" },
        { id: "cpp_l54", title: "Ch 6.4: Unordered Containers and Hash Buckets", duration: "35 min", type: "practice" },
        { id: "cpp_l55", title: "Ch 6.5: Container Adaptors: Stack, Queue, Priority Queue", duration: "25 min", type: "video" },
        { id: "cpp_l56", title: "Ch 6.6: Custom Comparators and Hash Functions", duration: "40 min", type: "practice" },
        { id: "cpp_l57", title: "Ch 6.7: Iterator Invalidation Rules", duration: "20 min", type: "concept" },
        { id: "cpp_l58", title: "Ch 6.8: Emplace vs Insert for Modern Performance", duration: "30 min", type: "practice" },
        { id: "cpp_l59", title: "Ch 6.9: STL Allocator Concept and Rebinding", duration: "30 min", type: "video" },
        { id: "cpp_l60", title: "Ch 6.10: High-Performance Cache-Friendly Container Choice", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m7",
      number: 7,
      title: "STL - Algorithms and Iterators",
      description: "Master standard search, sort, transform, set, and partition algorithms, custom predicates, and parallel executors.",
      projectTitle: "Parallelized STL Search and Sort Engine",
      projectDescription: "Develop a multi-core parallel sorting and query manager that runs across large file datasets using STL Parallel policies.",
      lessons: [
        { id: "cpp_l61", title: "Ch 7.1: Iterator Categories and Utility Functions", duration: "25 min", type: "video" },
        { id: "cpp_l62", title: "Ch 7.2: Non-Modifying STL Algorithms", duration: "30 min", type: "concept" },
        { id: "cpp_l63", title: "Ch 7.3: Modifying STL Algorithms and Copying", duration: "20 min", type: "concept" },
        { id: "cpp_l64", title: "Ch 7.4: Sorting, Binary Search, and Partitions", duration: "35 min", type: "practice" },
        { id: "cpp_l65", title: "Ch 7.5: Set Operations and Merging", duration: "25 min", type: "video" },
        { id: "cpp_l66", title: "Ch 7.6: Min/Max, Numeric, and Accumulate Algorithms", duration: "40 min", type: "practice" },
        { id: "cpp_l67", title: "Ch 7.7: Custom Predicates and Lambda Captures", duration: "20 min", type: "concept" },
        { id: "cpp_l68", title: "Ch 7.8: Standard Library Function Objects", duration: "30 min", type: "practice" },
        { id: "cpp_l69", title: "Ch 7.9: STL Parallel Execution Policies (C++17)", duration: "30 min", type: "video" },
        { id: "cpp_l70", title: "Ch 7.10: Writing custom STL-compliant Algorithms", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m8",
      number: 8,
      title: "Input/Output Operations",
      description: "Deep dive into iostreams, file handling, stringstreams, custom stream operators, and binary serialization.",
      projectTitle: "Binary Serialization and Network Protocol Parser",
      projectDescription: "Develop a custom file archiver and binary layout parser that serializes structures onto disk space-efficiently.",
      lessons: [
        { id: "cpp_l71", title: "Ch 8.1: Stream Hierarchy and Standard I/O Streams", duration: "25 min", type: "video" },
        { id: "cpp_l72", title: "Ch 8.2: Stream States, Flags, and Error Handling", duration: "30 min", type: "concept" },
        { id: "cpp_l73", title: "Ch 8.3: File I/O with ifstream and ofstream", duration: "20 min", type: "concept" },
        { id: "cpp_l74", title: "Ch 8.4: Formatted and Unformatted I/O", duration: "35 min", type: "practice" },
        { id: "cpp_l75", title: "Ch 8.5: Stream Manipulators and Custom Formatting", duration: "25 min", type: "video" },
        { id: "cpp_l76", title: "Ch 8.6: Stringstreams and Parsing Techniques", duration: "40 min", type: "practice" },
        { id: "cpp_l77", title: "Ch 8.7: Overloading Operator<< and Operator>>", duration: "20 min", type: "concept" },
        { id: "cpp_l78", title: "Ch 8.8: Binary File Operations and Serialization", duration: "30 min", type: "practice" },
        { id: "cpp_l79", title: "Ch 8.9: File Buffering and Stream Performance", duration: "30 min", type: "video" },
        { id: "cpp_l80", title: "Ch 8.10: Multi-Format JSON/CSV Exporter System", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m9",
      number: 9,
      title: "Concurrency and Multi-threading",
      description: "Master std::thread, mutexes, lock_guards, condition variables, futures, promises, and atomic operations.",
      projectTitle: "Multithreaded Task Scheduler & Thread Pool",
      projectDescription: "Build a lock-free task runner thread pool with priority scheduling and work-stealing queues.",
      lessons: [
        { id: "cpp_l81", title: "Ch 9.1: Concurrency Basics and std::thread", duration: "25 min", type: "video" },
        { id: "cpp_l82", title: "Ch 9.2: Thread Synchronization with std::mutex", duration: "30 min", type: "concept" },
        { id: "cpp_l83", title: "Ch 9.3: Advanced Locks: unique_lock and shared_lock", duration: "20 min", type: "concept" },
        { id: "cpp_l84", title: "Ch 9.4: Deadlocks, Prevention, and std::lock", duration: "35 min", type: "practice" },
        { id: "cpp_l85", title: "Ch 9.5: Condition Variables and Thread Signaling", duration: "25 min", type: "video" },
        { id: "cpp_l86", title: "Ch 9.7: Asynchronous Tasks with std::async and futures", duration: "40 min", type: "practice" },
        { id: "cpp_l87", title: "Ch 9.7: Promises, Packaged Tasks, and Exception Propagation", duration: "20 min", type: "concept" },
        { id: "cpp_l88", title: "Ch 9.8: Atomic Operations and std::atomic", duration: "30 min", type: "practice" },
        { id: "cpp_l89", title: "Ch 9.9: Memory Barriers and Lock-Free Concepts", duration: "30 min", type: "video" },
        { id: "cpp_l90", title: "Ch 9.10: Designing a Thread-Safe Shared Queue", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m10",
      number: 10,
      title: "Modern C++ Features",
      description: "Unlock modern C++11 to C++23 mechanics: lambdas, rvalue references, move semantics, std::optional, and coroutines.",
      projectTitle: "C++20 Ranges & Coroutines Stream Processor",
      projectDescription: "Build an event pipeline utilizing C++20 generator coroutines and ranges to transform datasets on the fly.",
      lessons: [
        { id: "cpp_l91", title: "Ch 10.1: Lambdas, Captures, and Generic Lambdas", duration: "25 min", type: "video" },
        { id: "cpp_l92", title: "Ch 10.2: Rvalue References and Move Semantics", duration: "30 min", type: "concept" },
        { id: "cpp_l93", title: "Ch 10.3: Constexpr and Consteval Specifiers", duration: "20 min", type: "concept" },
        { id: "cpp_l94", title: "Ch 10.4: Master std::optional, std::variant, and std::any", duration: "35 min", type: "practice" },
        { id: "cpp_l95", title: "Ch 10.5: Smart Pointers and Custom deleters revisited", duration: "25 min", type: "video" },
        { id: "cpp_l96", title: "Ch 10.6: Three-Way Comparison Operator (<=>)", duration: "40 min", type: "practice" },
        { id: "cpp_l97", title: "Ch 10.7: C++20 Modules and build performance", duration: "20 min", type: "concept" },
        { id: "cpp_l98", title: "Ch 10.8: C++20 Ranges and Views pipeline", duration: "30 min", type: "practice" },
        { id: "cpp_l99", title: "Ch 10.9: C++20 Coroutines: Generators and Awaitables", duration: "30 min", type: "video" },
        { id: "cpp_l100", title: "Ch 10.10: Previewing C++23 static operators & monadic types", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m11",
      number: 11,
      title: "Design Patterns and Best Practices",
      description: "Deep dive into solid OOP design patterns, SOLID architecture rules, dependency injection, and clean refactoring.",
      projectTitle: "Enterprise Dependency Injection Framework",
      projectDescription: "Author a lightweight C++ Dependency Injection container that maps class lifetimes dynamically.",
      lessons: [
        { id: "cpp_l101", title: "Ch 11.1: Creational Patterns: Singleton, Factory, Builder", duration: "25 min", type: "video" },
        { id: "cpp_l102", title: "Ch 11.2: Structural Patterns: Adapter, Decorator, Proxy", duration: "30 min", type: "concept" },
        { id: "cpp_l103", title: "Ch 11.3: Behavioral Patterns: Observer, Strategy, Command", duration: "20 min", type: "concept" },
        { id: "cpp_l104", title: "Ch 11.4: SOLID Principles of Object-Oriented Design", duration: "35 min", type: "practice" },
        { id: "cpp_l105", title: "Ch 11.5: Dependency Injection and IoC", duration: "25 min", type: "video" },
        { id: "cpp_l106", title: "Ch 11.6: Coding Standards, Style Guides, and Guidelines", duration: "40 min", type: "practice" },
        { id: "cpp_l107", title: "Ch 11.7: Code Review Best Practices in Production", duration: "20 min", type: "concept" },
        { id: "cpp_l108", title: "Ch 11.8: Refactoring Legacy C++ Systems", duration: "30 min", type: "practice" },
        { id: "cpp_l109", title: "Ch 11.9: Writing Testable and Modular C++ Code", duration: "30 min", type: "video" },
        { id: "cpp_l110", title: "Ch 11.10: Architecture Design Document Compilation", duration: "35 min", type: "project" }
      ]
    },
    {
      id: "cpp_m12",
      number: 12,
      title: "Performance Optimization and Debugging",
      description: "Equip yourself with profiling tools (GProf, Valgrind), memory layout audits, assembly analysis, and compiler flags.",
      projectTitle: "Distributed Low-Latency Engine Profiling",
      projectDescription: "Conduct a full profiling audit, identify execution bottlenecks, and optimize assembly output in a low-latency pipeline.",
      lessons: [
        { id: "cpp_l111", title: "Ch 12.1: Profiling C++ Applications: GProf and Valgrind", duration: "25 min", type: "video" },
        { id: "cpp_l112", title: "Ch 12.2: Benchmarking Code with Google Benchmark", duration: "30 min", type: "concept" },
        { id: "cpp_l113", title: "Ch 12.3: Compiler Optimizations: Understanding -O flags", duration: "20 min", type: "concept" },
        { id: "cpp_l114", title: "Ch 12.4: Cache-Friendly Code & Locality of Reference", duration: "35 min", type: "practice" },
        { id: "cpp_l115", title: "Ch 12.5: Algorithmic Complexity Analysis Revisited", duration: "25 min", type: "video" },
        { id: "cpp_l116", title: "Ch 12.6: Advanced Memory Optimizations & Custom Pools", duration: "40 min", type: "practice" },
        { id: "cpp_l117", title: "Ch 12.7: Advanced GDB Debugging Techniques", duration: "20 min", type: "concept" },
        { id: "cpp_l118", title: "Ch 12.8: Static Analysis with Clang-Tidy & Cppcheck", duration: "30 min", type: "practice" },
        { id: "cpp_l119", title: "Ch 12.9: Writing Robust Unit Tests with Google Test", duration: "30 min", type: "video" },
        { id: "cpp_l120", title: "Ch 12.10: Final Course Conclusion and Exit Exam Prep", duration: "35 min", type: "project" }
      ]
    }
  ]

};


export const TRACK_PROJECT_BRIEFS: Record<CohortTrackId, ProjectBrief[]> = {
  frontend: [
    {
      id: "fe_p1",
      title: "CarbonHQ Telemetry Widget",
      client: "CarbonHQ Inc.",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&fit=crop&q=80",
      difficulty: "Challenging",
      duration: "Recommended: 4 Days",
      description: "Build an elegant, lightning-fast dashboard widget that tracks clean energy telemetry feeds. It must visualize high-frequency loads, display safety thresholds, and adapt beautifully.",
      deliverables: [
        "Fully typed React 19 component using Tailwind styling utility rules.",
        "Interactive SVG chart rendering live load telemetry simulation streams.",
        "Custom hooks to manage state and throttle update cycles dynamically."
      ],
      tasks: [
        "Initialize clean component structures.",
        "Implement throttle/debounce helpers.",
        "Incorporate micro-animations for grid items.",
        "Document performance bottlenecks."
      ]
    },
    {
      id: "fe_p2",
      title: "Dynamic Job Assessment Grid",
      client: "EcoSync Tech",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&fit=crop&q=80",
      difficulty: "Intermediate",
      duration: "Recommended: 3 Days",
      description: "Develop a responsive candidate evaluation matrix. The platform demands clean tabular rendering, filtering, sorting, and inline rating controls.",
      deliverables: [
        "Interactive datagrid featuring instant sorting and query filtering.",
        "Responsive grid/list layout toggle.",
        "Comprehensive form inputs to insert mock candidates."
      ],
      tasks: [
        "Design schema interfaces.",
        "Write custom filter reducers.",
        "Incorporate drag-and-drop sort orders."
      ]
    }
  ],
  design: [
    {
      id: "de_p1",
      title: "CarbonHQ Admin Design Specs",
      client: "CarbonHQ Inc.",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&fit=crop&q=80",
      difficulty: "Intermediate",
      duration: "Recommended: 3 Days",
      description: "Craft pixel-perfect admin layouts in Figma. Deliver consistent auto-layouts, custom component systems, and spacing configurations.",
      deliverables: [
        "High-fidelity Figma files detailing responsive layout breakpoints.",
        "Reusable color palettes, text systems, and grid alignment maps.",
        "Interactive prototyping showcasing seamless page transfers."
      ],
      tasks: [
        "Define typography hierarchy grids.",
        "Build nested variant components.",
        "Document handoff instructions."
      ]
    },
    {
      id: "de_p2",
      title: "EcoSync Mobile Dashboard Design",
      client: "EcoSync Tech",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&fit=crop&q=80",
      difficulty: "Challenging",
      duration: "Recommended: 4 Days",
      description: "Create a mobile-first interface tracking individual carbon footprint credits. Focus heavily on touch target margins, thumb zones, and ambient styling rules.",
      deliverables: [
        "12 high-fidelity mobile frames illustrating complete user journeys.",
        "A comprehensive UI Component kit in Figma.",
        "Interactive gesture animations in Figma prototypes."
      ],
      tasks: [
        "Map user friction flowcharts.",
        "Develop dark-mode alternate systems.",
        "Conduct peer layout reviews."
      ]
    }
  ],
  product: [
    {
      id: "pm_p1",
      title: "EcoSync Sprint Scope Documentation",
      client: "EcoSync Tech",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&fit=crop&q=80",
      difficulty: "Intermediate",
      duration: "Recommended: 3 Days",
      description: "Produce high-quality Product Requirement Documents (PRDs). Author complete sprint timelines, feature priorities, stories, and explicit checklists.",
      deliverables: [
        "An exhaustive PRB specifying feature scopes, acceptance rules, and exclusions.",
        "A complete Jira-ready sprint backlog spreadsheet.",
        "A user story map linking product journeys to development releases."
      ],
      tasks: [
        "Document user onboarding personas.",
        "Perform feature prioritization mappings.",
        "Write Gherkin style user story acceptance checks."
      ]
    },
    {
      id: "pm_p2",
      title: "Stripe Checkout Brief Specs",
      client: "Stripe Inc.",
      logo: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=100&fit=crop&q=80",
      difficulty: "Challenging",
      duration: "Recommended: 4 Days",
      description: "Design specifications focused on funnel optimization. Conduct meticulous friction point analyses, detail local compliance, and outline conversion layouts.",
      deliverables: [
        "Conversion optimization report detailing checkouts bottlenecks.",
        "A design spec detailing Multi-step checkout wireframe maps.",
        "Strict localization and compliance requirement matrices."
      ],
      tasks: [
        "Conduct checkout funnel analytics walkthroughs.",
        "Draft payment method prioritization scripts.",
        "Formulate a quantitative validation matrix."
      ]
    }
  ],
  analytics: [
    {
      id: "da_p1",
      title: "CarbonHQ Energy Grid Analytics Audit",
      client: "CarbonHQ Inc.",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&fit=crop&q=80",
      difficulty: "Challenging",
      duration: "Recommended: 4 Days",
      description: "Conduct an analysis of clean energy consumption. Clean and structure dense logs, write grouping scripts, and compile dynamic diagnostics reports.",
      deliverables: [
        "An executive telemetry audit report illustrating energy usage trends.",
        "Clean, commented SQL grouping and transformation query files.",
        "A Python notebook with statistical descriptions and visualizations."
      ],
      tasks: [
        "Filter telemetry outlier anomalies.",
        "Perform SQL subquery optimizations.",
        "Map regional load averages."
      ]
    },
    {
      id: "da_p2",
      title: "User Journey Funnel Analysis",
      client: "Stripe Inc.",
      logo: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=100&fit=crop&q=80",
      difficulty: "Intermediate",
      duration: "Recommended: 3 Days",
      description: "Construct user retention matrices. Map user drops at distinct checkout layers, perform segment analysis, and compile actionable insights.",
      deliverables: [
        "Funnel analytics diagnostic report showcasing dropoff ratios.",
        "Multi-cohort user retention grid layouts.",
        "A statistical recommendation brief."
      ],
      tasks: [
        "Compile transaction conversion matrices.",
        "Define cohort entry criteria filters.",
        "Formulate PM optimization suggestions."
      ]
    }
  ],
  cpp: [
    {
      id: "cpp_p1",
      title: "HFT Ultra Low-Latency Matcher",
      client: "CapitalTrading LLC",
      logo: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=100&fit=crop&q=80",
      difficulty: "Challenging",
      duration: "Recommended: 5 Days",
      description: "Implement a low-latency price matching structure modeling financial asset instruments in modern C++. Optimize cache alignment and prevent thread contention.",
      deliverables: [
        "A multi-threaded order book with sub-microsecond matching speed.",
        "Custom lock-free execution ring buffers.",
        "Unit tests verifying safety bounds and throughput metrics."
      ],
      tasks: [
        "Structure order bucket memory hierarchies.",
        "Write custom alignment declarations.",
        "Develop a mock matching clock thread loop."
      ]
    },
    {
      id: "cpp_p2",
      title: "Real-Time Distributed Key-Value Store",
      client: "Infrastructure Corp",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&fit=crop&q=80",
      difficulty: "Challenging",
      duration: "Recommended: 6 Days",
      description: "Build an ACID-compliant disk-backed key-value datastore. Support custom index caching, thread-safe access pools, and high-frequency binary serialization.",
      deliverables: [
        "Thread-safe binary storage engine supporting concurrent reads and writes.",
        "Write-Ahead Log (WAL) ensuring database crash recovery capabilities.",
        "A customized LRU database page buffer pool."
      ],
      tasks: [
        "Design binary layout index strategies.",
        "Implement concurrency read/write mutex locks.",
        "Write file commit rollback synchronization checks."
      ]
    }
  ]
};
