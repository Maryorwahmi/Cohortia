# Syllabus: Computer Architecture

> **Course ID:** `computer-architecture`  
> **Title:** Computer Architecture  
> **Provider:** Cohortia  
> **Original reference:** Princeton / Coursera  
> **Platform:** Cohortia  
> **Level:** Advanced  
> **Type:** Course  
> **Duration:** 12–14 weeks (self-paced, ~10–12 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page (original reference: https://www.coursera.org/learn/comparch)  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** Computer architecture, processor design, pipelining, cache memory, virtual memory, superscalar processors, out-of-order execution, branch prediction, VLIW, parallel architectures, SIMD, GPUs, multithreading, cache coherence, memory consistency, interconnects, performance analysis  
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from Princeton University, Coursera, and other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

Computer architecture is the discipline that bridges hardware and software, defining how processors are designed, how memory is organized, and how computational tasks are executed efficiently. It is the foundation upon which all modern computing rests — from the smartphone in your pocket to the supercomputer simulating climate change, from the embedded controller in a car's engine to the GPU training billion-parameter neural networks. Understanding computer architecture is essential for anyone who wants to write efficient software, design hardware systems, optimize performance-critical applications, or contribute to the future of computing.

This course provides a rigorous, quantitative study of modern computer architecture. You will learn how processors execute instructions, how pipelining increases throughput, how caches bridge the speed gap between processors and memory, and how modern processors use superscalar and out-of-order execution to extract parallelism from sequential programs. You will explore advanced topics including branch prediction, virtual memory, vector processing, multithreading, and the cache coherence protocols that enable multicore processors. Throughout the course, you will analyze real processor designs and use quantitative methods to evaluate architectural trade-offs.

This course is designed for advanced learners who have completed courses in digital logic, basic processor organization, and programming. You should understand how combinational and sequential logic works, how a simple single-cycle processor fetches and executes instructions, and how to write programs in C or a similar language. This course builds on that foundation, taking you from the simple single-cycle processor to the complex superscalar, out-of-order, multicore processors that power the modern world.

By the end of this course, you will be able to:

1. Distinguish between computer architecture (the instruction set interface) and microarchitecture (the implementation) and explain how they interact.
2. Analyze the performance of a pipelined processor, identify pipeline hazards, and apply techniques to resolve them.
3. Design and evaluate cache memory hierarchies, including direct-mapped, set-associative, and fully-associative caches, with write policies and replacement strategies.
4. Explain how superscalar processors issue multiple instructions per cycle and how out-of-order execution uses dynamic scheduling to improve performance.
5. Implement Tomasulo's algorithm with register renaming and understand how reorder buffers handle precise exceptions.
6. Evaluate static and dynamic branch prediction techniques and quantify their impact on processor performance.
7. Describe the design philosophy of VLIW processors and the role of compiler-driven optimizations in architecture.
8. Explain virtual memory, page tables, and translation lookaside buffers (TLBs) and their role in memory protection and management.
9. Analyze parallel architectures including vector processors, SIMD units, GPUs, and multithreaded processors.
10. Understand cache coherence protocols (snooping and directory-based), memory consistency models, and interconnect topologies for multiprocessors.
11. Calculate performance metrics including CPI, IPC, speedup, and throughput using quantitative methods.
12. Apply Amdahl's Law to identify performance bottlenecks and evaluate the potential impact of architectural improvements.

---

## Syllabus Structure

| Module | Theme | Chapters | Approx. Hours |
|--------|-------|----------|---------------|
| 1 | Foundations of Computer Architecture | 6 | 8–10 |
| 2 | Instruction Set Architecture | 7 | 10–12 |
| 3 | Microarchitecture and Control | 6 | 8–10 |
| 4 | Pipelined Processor Design | 8 | 12–14 |
| 5 | Advanced Pipelining and Superscalar | 7 | 10–12 |
| 6 | Out-of-Order Execution | 8 | 12–14 |
| 7 | Memory Hierarchy and Cache Design | 8 | 12–14 |
| 8 | Advanced Memory System | 8 | 12–14 |
| 9 | Branch Prediction and VLIW | 8 | 12–14 |
| 10 | Parallel Architectures | 8 | 12–14 |
| 11 | Multiprocessors and Coherence | 8 | 12–14 |
| 12 | Interconnects and Performance Analysis | 7 | 10–12 |

---

## Module 1: Foundations of Computer Architecture

> **Goal:** Establish the quantitative foundation of computer architecture, including performance metrics, technology trends, and design principles.

---

### Chapter 1.1 — What Is Computer Architecture?

#### Learning objectives
- Distinguish between computer architecture (ISA) and microarchitecture (implementation).
- Explain the roles of architecture, microarchitecture, and logic/technology in processor design.
- Identify the key metrics for evaluating computer architecture: performance, power, area, cost, and reliability.
- Understand the concept of the implementation stack and how decisions at each level affect the others.

#### Detailed lesson content

Computer architecture is often misunderstood as the design of circuits and transistors. In reality, it is a multilayered discipline that sits at the intersection of hardware engineering, software engineering, and system design. To understand computer architecture, we must first understand its layers.

At the **highest level**, **computer architecture** (often called the **instruction set architecture** or **ISA**) is the contract between software and hardware. It defines the interface that programmers and compilers use to communicate with the machine: the instructions available, the registers, the memory model, the addressing modes, and the exception handling. The ISA is the **programmer-visible interface**. It does not dictate how instructions are implemented, only what they do and how they appear to the programmer. Examples of ISAs include x86, ARM, RISC-V, MIPS, and PowerPC. A program compiled for one ISA cannot run on a processor with a different ISA without translation or emulation.

At the **middle level**, **microarchitecture** (also called **organization**) is the implementation of the ISA. It defines how the processor executes the instructions specified by the ISA: the pipeline structure, the cache hierarchy, the branch predictor, the out-of-order execution engine, and the register file. Two processors can implement the same ISA with completely different microarchitectures. For example, the Intel Core i9 and the Intel Atom both implement the x86 ISA, but the Core i9 is a high-performance out-of-order superscalar processor, while the Atom is a low-power in-order processor. The ISA is the same; the microarchitecture is radically different.

At the **lowest level**, **logic and circuit design** implements the microarchitecture using transistors, gates, and wires. This is the domain of VLSI (Very Large Scale Integration) design: how to build the fastest adder, the densest register file, the most efficient cache array. Technology considerations — such as transistor size (measured in nanometers), clock frequency, and power consumption — dominate at this level. The same microarchitecture can be fabricated at different technology nodes (e.g., 7nm vs. 14nm), yielding different performance, power, and area characteristics.

These three layers — ISA, microarchitecture, and logic/technology — form the **implementation stack**. Decisions at each level constrain and enable decisions at the other levels. A complex ISA like x86 requires a complex microarchitecture to decode its variable-length instructions, which in turn requires more area and power at the circuit level. A simple ISA like RISC-V allows for simpler microarchitectures, which can be implemented more efficiently at the circuit level. However, a simple ISA may require more instructions to accomplish the same task, which affects performance at the architectural level.

**Key metrics for evaluating architecture:**
- **Performance:** How fast does the processor execute programs? Measured in instructions per cycle (IPC), cycles per instruction (CPI), clock frequency, or benchmark scores.
- **Power:** How much energy does the processor consume? Critical for mobile devices and data centers. Measured in watts (W) or joules per instruction.
- **Area:** How much silicon area does the processor occupy? Measured in mm². Smaller area means lower cost per chip.
- **Cost:** The total cost of the processor, including design, fabrication, testing, and packaging.
- **Reliability:** How resistant is the processor to errors, failures, and environmental conditions?

The **Iron Law of Processor Performance** relates these metrics:

```
Execution Time = Instruction Count × CPI × Clock Cycle Time
```

Where:
- **Instruction Count (IC):** The number of instructions executed. Determined by the ISA and the compiler.
- **CPI (Cycles Per Instruction):** The average number of clock cycles per instruction. Determined by the microarchitecture (pipeline, cache, branch prediction).
- **Clock Cycle Time:** The duration of one clock cycle (inverse of clock frequency). Determined by the microarchitecture and the technology node.

To improve performance, architects must reduce one or more of these factors. However, they often trade off against each other. For example, increasing the clock frequency (reducing cycle time) may require deeper pipelines, which increases CPI due to branch mispredictions. Adding cache (reducing CPI) increases area and power. The art of computer architecture is finding the optimal balance for a given application domain.

**Architecture vs. Microarchitecture:**

| Aspect | Architecture (ISA) | Microarchitecture |
|--------|-------------------|-------------------|
| Visibility | Programmer-visible | Implementation-internal |
| Changes | Rare (decades) | Frequent (every 1–2 years) |
| Examples | x86, ARM, RISC-V | Intel Skylake, AMD Zen, Apple M1 |
| Role | Defines what the machine does | Defines how the machine does it |
| Software Impact | Requires recompilation or emulation | Transparent to software |

#### Key concepts
- Computer architecture (ISA) as the software-hardware contract
- Microarchitecture as the ISA implementation
- Logic/circuit design as the transistor-level implementation
- Implementation stack: ISA → microarchitecture → logic/technology
- Iron Law: Execution Time = IC × CPI × Clock Cycle Time
- Performance, power, area, cost, and reliability as design metrics
- Trade-offs between performance, power, and area
- Architecture vs. microarchitecture: examples (x86 Core i9 vs. Atom)
- Impact of ISA on compiler and software ecosystem

#### Hands-on activity
Research three commercial processors that implement the same ISA (e.g., three ARM processors: Cortex-A78, Cortex-A55, and Apple M1). For each processor, create a table with: ISA version, microarchitecture name, number of cores, clock frequency, process node (nm), out-of-order vs. in-order, cache sizes, and TDP (thermal design power). Write a one-page analysis explaining how the microarchitectures differ despite sharing the same ISA, and what trade-offs each design makes (performance vs. power vs. area). Cite your sources.

#### Assessment idea
Ask: "Two processors implement the same ISA. Processor A has a clock frequency of 3 GHz and a CPI of 2. Processor B has a clock frequency of 2 GHz and a CPI of 1. Which processor is faster for the same program, and by what factor?" Answer: Execution time is proportional to CPI / frequency. Processor A: 2 / 3 = 0.667. Processor B: 1 / 2 = 0.5. Processor B is faster by a factor of 0.667 / 0.5 = 1.33×. This demonstrates that clock frequency alone does not determine performance; CPI is equally important. Then ask: "Why does the ISA rarely change, while microarchitectures change every 1–2 years?" Answer: The ISA is the software interface. Changing it requires all software (compilers, operating systems, applications) to be updated or recompiled, which is extremely costly and disruptive. The microarchitecture is internal to the processor and transparent to software. Improvements to the microarchitecture (better branch prediction, larger cache, out-of-order execution) can be made without changing the ISA, allowing performance gains without breaking software compatibility.

#### AI generation note
Create a 10-minute animated explainer. Show the implementation stack as three layers: the ISA layer (a contract document), the microarchitecture layer (a factory blueprint), and the circuit layer (a transistor map). Show how the same ISA contract can be implemented by different microarchitectures (a sports car vs. an economy car). Show the Iron Law as an equation with three knobs: Instruction Count, CPI, and Clock Cycle Time. Show an architect turning the knobs and observing the trade-offs. Show the x86 ISA being implemented by a Core i9 (large, complex) and an Atom (small, efficient). Include a real-world performance comparison table. End with a reflection: "If you could improve only one of the three factors in the Iron Law, which would you choose for a mobile phone processor?"

---

### Chapter 1.2 — Performance Metrics and the Iron Law

#### Learning objectives
- Apply the Iron Law to calculate execution time for a given program and processor.
- Compute CPI, IPC, and MIPS from processor specifications and workload data.
- Understand the relationship between clock frequency, pipeline depth, and performance.
- Use benchmark suites (SPEC, Geekbench, MLPerf) to evaluate processor performance.

#### Detailed lesson content

The Iron Law is the fundamental equation of computer architecture:
```
Execution Time = Instruction Count × CPI × Clock Cycle Time
```

To make this practical, architects decompose each factor and measure them independently.

**Instruction Count (IC):** The number of instructions executed by the program. IC depends on:
- The ISA (some ISAs require more instructions for the same task).
- The compiler (optimization level, register allocation, instruction selection).
- The algorithm (some algorithms require more operations than others).

IC can be measured using performance counters on real processors or instruction set simulators.

**CPI (Cycles Per Instruction):** The average number of clock cycles per instruction. CPI depends on:
- The pipeline structure (deeper pipelines have more hazards).
- The cache performance (cache misses stall the pipeline).
- The branch prediction accuracy (mispredictions flush the pipeline).
- The instruction mix (floating-point operations take more cycles than integer operations).

CPI can be decomposed into the base CPI plus stall cycles:
```
CPI = CPI_base + CPI_stalls
CPI_stalls = CPI_branch + CPI_load + CPI_structural + ...
```

For example, if a processor has:
- CPI_base = 1.0 (ideal pipeline)
- 20% of instructions are branches, 5% mispredict rate, 10-cycle penalty: CPI_branch = 0.20 × 0.05 × 10 = 0.1
- 25% of instructions are loads, 4% miss rate, 20-cycle penalty: CPI_load = 0.25 × 0.04 × 20 = 0.2
- CPI_total = 1.0 + 0.1 + 0.2 = 1.3

**Clock Cycle Time:** The duration of one clock cycle. Clock frequency (f) = 1 / Clock Cycle Time. Higher frequency means faster execution, but also higher power consumption and more pipeline hazards.

**Benchmarks:**
- **SPEC CPU:** The standard benchmark suite for processor performance. SPECint for integer workloads, SPECfp for floating-point workloads. The score is a ratio of the execution time of the benchmark on the test processor vs. a reference processor.
- **Geekbench:** A cross-platform benchmark that measures single-core and multi-core performance.
- **MLPerf:** A benchmark suite for machine learning training and inference.
- **STREAM:** A benchmark for memory bandwidth.
- **Coremark:** An embedded processor benchmark.

Benchmarks are essential because they represent real workloads. Architects cannot design processors based on theoretical performance alone; they must optimize for the workloads that users actually run.

#### Key concepts
- Iron Law formula and its three factors
- Instruction Count: ISA, compiler, algorithm dependence
- CPI decomposition: base CPI + stalls (branch, load, structural)
- Clock frequency vs. cycle time
- Benchmark suites: SPEC CPU, Geekbench, MLPerf, STREAM, Coremark
- Performance counters and measurement methodology
- Peak performance vs. sustained performance
- The gap between theoretical and actual performance

#### Hands-on activity
Calculate the execution time for a program with 10 billion instructions on three different processors:
- Processor A: 2 GHz, CPI = 1.5
- Processor B: 3 GHz, CPI = 2.0
- Processor C: 2.5 GHz, CPI = 1.2

Which processor is fastest? Which is slowest? By what percentage? Then, consider that Processor B has a deeper pipeline that increases CPI but allows higher frequency. If the pipeline depth is doubled and frequency increases by 50%, but CPI increases by 30%, does the performance improve or worsen? Show your calculations.

#### Assessment idea
Ask: "A processor designer claims their new processor is 20% faster because the clock frequency increased from 2.5 GHz to 3.0 GHz. However, the deeper pipeline required for this frequency increased CPI from 1.2 to 1.5. Is the processor actually faster, and by how much?" Answer: Execution time = IC × CPI / frequency. Old: 1.2 / 2.5 = 0.48. New: 1.5 / 3.0 = 0.50. The new processor is actually SLOWER by a factor of 0.50 / 0.48 = 1.04, or about 4% slower. This demonstrates that frequency alone is misleading. Then ask: "Why do processor vendors advertise clock frequency rather than actual benchmark performance?" Answer: Clock frequency is a simple, easy-to-understand number that consumers can compare. Actual benchmark performance depends on the workload, the compiler, and the entire system, making it harder to market. However, informed buyers and architects know that benchmark scores (like SPEC CPU) are the only meaningful comparison metric.

#### AI generation note
Create an animated calculator showing the Iron Law. Show three sliders: Instruction Count, CPI, and Clock Frequency. As the user moves each slider, show the execution time updating in real-time. Show a race between three processors with different configurations. Show benchmark results as a bar chart comparing theoretical vs. actual performance. Show the SPEC CPU suite as a collection of real-world programs running. End with a reflection: "Why is it so hard to predict real-world performance from specification sheets?"

---

### Chapter 1.3 — Technology Trends and Moore's Law

#### Learning objectives
- Describe Moore's Law and its historical accuracy.
- Understand Dennard scaling and why it ended (the power wall).
- Explain the shift from frequency scaling to multicore scaling.
- Analyze the impact of technology scaling on cost, power, and reliability.

#### Detailed lesson content

**Moore's Law:** In 1965, Gordon Moore observed that the number of transistors on a chip doubles approximately every two years. This prediction held true for over 50 years, driving exponential growth in computing power. However, Moore's Law is not a physical law; it is an economic observation about the semiconductor industry's ability to shrink transistors.

**Dennard scaling:** In 1974, Robert Dennard observed that as transistors shrink, their power density stays constant. This means that you could increase the clock frequency proportionally while keeping power constant. Dennard scaling allowed processor performance to grow exponentially for decades: smaller transistors → more transistors → higher frequency → faster performance.

**The end of Dennard scaling (circa 2005):** As transistors approached atomic scales (below 90nm), leakage current became significant. Power density began to increase, not stay constant. Processors could no longer be scaled to higher frequencies without exceeding thermal limits. This is the **power wall**. The Pentium 4 (2000) pushed clock frequency to 3.8 GHz with a 20-stage pipeline, but it consumed over 100W and was difficult to cool. Intel abandoned the Pentium 4 architecture and shifted to the Core series, which focused on efficiency rather than raw frequency.

**The shift to multicore:** With frequency scaling no longer viable, architects turned to **multicore scaling** — putting multiple processor cores on the same chip. If you cannot make a single core faster, make the chip do more work in parallel. This is why virtually all processors today are multicore: from 2 cores in mobile phones to 96 cores in server processors.

**Implications of the power wall:**
- **Dark silicon:** In advanced process nodes (7nm, 5nm), a chip cannot power all transistors simultaneously because of thermal limits. Some parts of the chip must be turned off (dark) while others are active.
- **Heterogeneous computing:** Chips combine big cores (high performance) and little cores (low power) to balance performance and efficiency. Examples: ARM big.LITTLE, Intel Performance/Efficient cores.
- **Specialized accelerators:** General-purpose cores are inefficient for some tasks. Dedicated accelerators (GPUs, NPUs, DSPs) provide better performance per watt.

**Cost trends:** As process nodes shrink, the cost per transistor initially decreases, but the cost of fabrication facilities (fabs) increases exponentially. A modern 5nm fab costs over $20 billion. Only a few companies (TSMC, Samsung, Intel) can afford to build them. This economic consolidation shapes the industry.

**Reliability challenges:** Smaller transistors are more susceptible to:
- **Process variation:** Not all transistors on a chip have the same characteristics.
- **Soft errors:** Cosmic rays can flip bits in memory.
- **Aging:** Transistors degrade over time (electromigration, negative bias temperature instability).
- **Thermal issues:** Hot spots on the chip can cause failures.

#### Key concepts
- Moore's Law: transistor count doubles every ~2 years
- Dennard scaling: power density constant as transistors shrink
- Power wall: leakage current ends frequency scaling
- Dark silicon: not all transistors can be powered simultaneously
- Multicore scaling as the response to the power wall
- Heterogeneous computing: big.LITTLE, P-cores and E-cores
- Specialized accelerators: GPU, NPU, DSP
- Fabrication cost trends and industry consolidation
- Reliability challenges: process variation, soft errors, aging, thermal issues

#### Hands-on activity
Research the transistor count, process node, clock frequency, and TDP for Intel processors from 2000 to 2024: Pentium 4, Core 2 Duo, Core i7-920, Core i7-4770K, Core i9-9900K, Core i9-13900K. Create a timeline graph showing how these metrics evolved. Annotate the graph with key events: the end of Dennard scaling, the introduction of multicore, the shift to heterogeneous cores. Discuss what the data reveals about the industry's response to physical limitations.

#### Assessment idea
Ask: "If Moore's Law continues but Dennard scaling has ended, how can architects continue to improve processor performance?" Answer: Since frequency scaling is no longer viable, architects must focus on: (1) parallelism — more cores, wider SIMD, better multithreading; (2) efficiency — heterogeneous cores, dynamic voltage/frequency scaling, better power management; (3) specialization — dedicated accelerators for common tasks (AI, video, cryptography); (4) memory system improvements — larger caches, better prefetching, 3D stacking (HBM); (5) software optimization — better compilers, vectorization, parallel algorithms. The era of "free" performance from process scaling is over; performance gains now require architectural and software innovation. Then ask: "What is dark silicon, and why does it become more prevalent at smaller process nodes?" Answer: Dark silicon refers to transistors on a chip that cannot be powered on simultaneously due to thermal constraints. At smaller process nodes (e.g., 5nm), the power density increases because leakage current does not scale down proportionally. If all transistors were active, the chip would overheat. Therefore, the chip must turn off (darken) some regions while others are active. This is managed by fine-grained power gating and dynamic scheduling. Dark silicon means that simply having more transistors does not automatically translate to more performance; the architecture must intelligently manage which transistors are active at any given time.

#### AI generation note
Create a timeline animation showing Moore's Law from 1970 to 2020. Show transistor counts growing exponentially. Show Dennard scaling as a parallel line that breaks around 2005. Show the power wall as a wall that stops the frequency line. Show the multicore shift as a new branch in the timeline. Show dark silicon as a chip with some areas glowing and others dark. Show a big.LITTLE chip with big cores and small cores. Show a modern SoC with CPU, GPU, NPU, and DSP. End with a reflection: "What will replace Moore's Law as the driver of computing progress?"

---

### Chapter 1.4 — Power and Energy Constraints

#### Learning objectives
- Distinguish between power (watts) and energy (joules) and their relevance to different design goals.
- Calculate dynamic power and static power using the CMOS power equations.
- Understand dynamic voltage and frequency scaling (DVFS) and its trade-offs.
- Describe the thermal design power (TDP) and its role in system design.

#### Detailed lesson content

Power is one of the most important constraints in modern processor design. It affects battery life in mobile devices, cooling costs in data centers, and reliability in all systems. Power and energy are related but distinct:
- **Power (Watts):** The rate of energy consumption. P = dE/dt. High power means high heat generation, which requires cooling.
- **Energy (Joules):** The total amount of work done. E = P × t. For a battery-powered device, energy determines battery life. For a data center, energy determines electricity cost.

A processor can have high power but low energy (if it completes the task quickly) or low power but high energy (if it takes a long time). The goal depends on the application:
- **Mobile:** Minimize energy (battery life).
- **Data center:** Minimize energy (electricity cost) but also manage power (cooling capacity).
- **Desktop:** Stay within thermal limits while maximizing performance.

**CMOS power equations:**

The power consumption of a CMOS processor has two components:

1. **Dynamic Power:** Power consumed when transistors switch.
   ```
   P_dynamic = α × C × V² × f
   ```
   Where:
   - α = activity factor (fraction of transistors switching per cycle)
   - C = capacitance being switched
   - V = supply voltage
   - f = clock frequency

   Dynamic power is proportional to V². This is why reducing voltage is so effective for power savings. However, reducing voltage also reduces the maximum frequency (since transistors switch slower at lower voltages).

2. **Static (Leakage) Power:** Power consumed when transistors are idle.
   ```
   P_static = V × I_leakage
   ```
   Leakage current flows even when the transistor is off. At smaller process nodes, leakage becomes a significant portion of total power (up to 50% in some designs). Techniques to reduce leakage include:
   - **Power gating:** Turning off unused blocks entirely.
   - **Body biasing:** Adjusting the transistor threshold voltage.
   - **Multi-threshold cells:** Using high-threshold cells for non-critical paths.

**Dynamic Voltage and Frequency Scaling (DVFS):**

DVFS adjusts the voltage and frequency of the processor based on workload. When the workload is light, the processor reduces voltage and frequency, saving power. When the workload is heavy, it increases voltage and frequency for maximum performance.

Because P_dynamic ∝ V² × f, and f ∝ V (approximately), reducing voltage by half reduces power by a factor of 8 (since both V² and f decrease). This is why DVFS is so effective.

DVFS is controlled by an **operating system governor** or **hardware power management unit**. Common governors:
- **Performance:** Always run at maximum frequency.
- **Powersave:** Always run at minimum frequency.
- **Ondemand:** Scale up frequency when CPU utilization is high.
- **Conservative:** Scale up gradually.

**Thermal Design Power (TDP):**

TDP is the maximum amount of heat a cooling system is required to dissipate. It is not the maximum power the processor can consume (which may be higher during brief bursts) but the sustained power under typical workloads. Processors have mechanisms to **throttle** (reduce frequency) if they exceed TDP to prevent overheating.

**Race-to-halt vs. pace-to-halt:**
- **Race-to-halt:** Run at maximum frequency to complete the task quickly, then shut down. This minimizes energy for CPU-bound tasks because the processor spends more time in a low-power idle state.
- **Pace-to-halt:** Run at the minimum frequency needed to complete the task by the deadline. This minimizes energy for real-time tasks because dynamic power is superlinear with frequency.

#### Key concepts
- Power vs. energy: rate vs. total consumption
- Dynamic power: α × C × V² × f
- Static/leakage power: V × I_leakage
- DVFS: dynamic voltage and frequency scaling
- Power gating and body biasing for leakage reduction
- TDP: thermal design power and thermal throttling
- Race-to-halt vs. pace-to-halt strategies
- Activity factor and capacitance in dynamic power
- Power management governors and OS control

#### Hands-on activity
Use a tool like Intel Power Gadget, HWiNFO, or Linux `perf` to measure the power consumption of your CPU under different workloads: idle, web browsing, video playback, and a CPU-intensive benchmark (like Prime95). Record the frequency, voltage, and power for each workload. Calculate the energy consumed per task (power × time). Then, manually force the CPU to different frequency levels using `cpufreq-set` or Windows power plan settings and measure how performance and power change. Plot power vs. frequency and performance vs. power. Discuss the optimal operating point for each workload type.

#### Assessment idea
Ask: "A processor can run at 3.0 GHz with 1.2V or at 1.5 GHz with 0.8V. If the workload is CPU-bound, which setting consumes less energy to complete the task, and why?" Answer: Assuming the task takes half the instructions at 3.0 GHz vs. 1.5 GHz, and dynamic power P ∝ V² × f, the power ratio is (1.2² × 3.0) / (0.8² × 1.5) = (1.44 × 3) / (0.64 × 1.5) = 4.32 / 0.96 = 4.5×. The 3.0 GHz setting uses 4.5× the power but completes the task in 0.5× the time. Energy = Power × Time, so the energy ratio is 4.5 × 0.5 = 2.25×. The 1.5 GHz setting uses less energy (2.25× less), demonstrating that lower frequency is more energy-efficient for CPU-bound tasks (pace-to-halt). However, if the task is latency-sensitive, the 3.0 GHz setting may be preferred despite higher energy. Then ask: "Why does leakage power become a dominant concern at process nodes below 32nm?" Answer: At larger process nodes, transistor dimensions are large enough that leakage current (subthreshold leakage and gate oxide leakage) is negligible compared to dynamic power. As transistors shrink, the gate oxide thickness decreases, causing more tunneling current (gate leakage). The subthreshold leakage also increases because the threshold voltage must be lowered to maintain performance at lower supply voltages. At 7nm and 5nm, leakage can account for 30–50% of total power, making it a critical design constraint. This is why power gating and multi-threshold design are essential in modern processors.

#### AI generation note
Create an animated power meter showing dynamic and static power components. Show the V² relationship as a curve that grows steeply. Show DVFS as a throttle that adjusts both voltage and frequency. Show race-to-halt as a sprinter who finishes quickly and rests vs. pace-to-halt as a marathon runner who maintains a steady pace. Show power gating as a light switch that turns off unused rooms. Show TDP as a thermostat that triggers cooling when the temperature rises. Show a smartphone battery draining under different workloads. End with a reflection: "If you were designing a processor for a Mars rover with limited solar power, would you prioritize low power or low energy?"

---

### Chapter 1.5 — Quantitative Design Principles

#### Learning objectives
- Apply Amdahl's Law to evaluate the potential speedup of an optimization.
- Use the principle of locality to justify cache hierarchy design.
- Understand the common case fast principle and its application to architecture.
- Analyze the trade-off between performance and cost using cost-performance metrics.

#### Detailed lesson content

Computer architecture is a quantitative discipline. Good design decisions are based on data, not intuition. Several fundamental principles guide architects:

**1. Amdahl's Law:**

Amdahl's Law states that the speedup from an improvement is limited by the fraction of time the improvement can affect.

```
Speedup = 1 / ((1 - f) + f/s)
```

Where f is the fraction of execution time affected by the improvement, and s is the speedup of that fraction.

For example, if a processor spends 40% of its time on memory accesses, and you improve the cache to speed up memory by 2×, the overall speedup is:
```
Speedup = 1 / (0.6 + 0.4/2) = 1 / 0.8 = 1.25×
```

The maximum possible speedup (if s → ∞) is:
```
Speedup_max = 1 / (1 - f) = 1 / 0.6 = 1.67×
```

Amdahl's Law tells us that optimizing the common case is far more important than optimizing the rare case. If a processor spends 90% of time on arithmetic and 10% on memory, improving arithmetic by 10× gives a speedup of 5.26×, while improving memory by 10× gives only 1.10×.

**2. Principle of Locality:**

Programs tend to access a small subset of memory locations repeatedly. This is the foundation of the memory hierarchy.
- **Temporal locality:** Recently accessed data is likely to be accessed again soon.
- **Spatial locality:** Nearby data is likely to be accessed soon.

Caches exploit temporal locality by keeping recently accessed data. They exploit spatial locality by fetching data in blocks (cache lines). The memory hierarchy is justified entirely by the principle of locality.

**3. Common Case Fast:**

Make the common case fast and the uncommon case correct. This means optimizing the hardware and software for the operations that occur most frequently, even if it makes rare operations slower.

For example:
- RISC processors optimize the simple, common instructions (ADD, SUB, LOAD) to execute in one cycle, even though complex instructions (like string operations) may take many cycles.
- Branch predictors optimize for the common case where loops iterate many times, even though some branches are unpredictable.
- Cache hierarchies optimize for the common case where data fits in cache, even though some workloads exceed cache capacity.

**4. Parallelism:**

Extract parallelism at every level: instruction-level parallelism (ILP) within a thread, data-level parallelism (DLP) across data elements, thread-level parallelism (TLP) across threads, and request-level parallelism (RLP) across independent tasks.

**5. Design for Moore's Law:**

Architects must anticipate that transistor budgets will double every two years. This means designing architectures that can scale with more transistors (e.g., wider issue, more cores, larger caches) rather than designs that are fixed in size.

**6. Cost-performance trade-off:**

The optimal design balances performance and cost. Cost-performance is often measured as performance per dollar or performance per watt. A design that is 10% faster but costs 50% more may not be the best choice for the market.

#### Key concepts
- Amdahl's Law: speedup limited by fraction affected
- Maximum speedup: 1 / (1 - f)
- Principle of locality: temporal and spatial
- Common case fast principle
- Parallelism levels: ILP, DLP, TLP, RLP
- Design for scalability with Moore's Law
- Cost-performance metrics
- Quantitative decision-making in architecture

#### Hands-on activity
A processor spends 30% of its time on integer operations, 20% on floating-point operations, 30% on memory accesses, and 20% on branches. You have a budget to implement ONE of the following optimizations:
- Option A: Improve integer ALU by 2×
- Option B: Improve floating-point unit by 4×
- Option C: Improve cache to reduce memory latency by 2×
- Option D: Improve branch predictor to reduce misprediction penalty by 3×

Use Amdahl's Law to calculate the speedup for each option. Which optimization provides the best speedup? Discuss why the best option might not be the one with the highest individual speedup. Then, calculate the maximum possible speedup if you could implement all four optimizations simultaneously (assuming independence).

#### Assessment idea
Ask: "A program spends 80% of its time in a loop that can be parallelized. If you run the program on a processor with 8 cores, what is the theoretical speedup according to Amdahl's Law?" Answer: Speedup = 1 / ((1 - 0.8) + 0.8/8) = 1 / (0.2 + 0.1) = 1 / 0.3 = 3.33×. Even with 8 cores, the speedup is only 3.33× because the serial portion (20%) limits the maximum speedup to 5×. Then ask: "Why does the principle of locality justify a memory hierarchy rather than a single, fast, large memory?" Answer: A single memory that is both fast and large would be prohibitively expensive. SRAM (fast) is about 100× more expensive per bit than DRAM (large but slower). By exploiting locality, we can use a small amount of fast SRAM (cache) to hold the frequently accessed data, and a large amount of slow DRAM for the rest. The cache captures the working set of the program, and the principle of locality ensures that most accesses hit in the cache. This hierarchy provides near-SRAM speed at near-DRAM cost, which is the optimal cost-performance trade-off.

#### AI generation note
Create an animated Amdahl's Law calculator. Show a pie chart where one slice can be expanded. Show that no matter how much you expand that slice, the total pie can only grow by a limited amount. Show the locality principle as a heat map of memory accesses, with hot spots concentrated in small regions. Show the common case fast principle as a highway with an express lane for frequent travelers. Show the cost-performance trade-off as a balance scale. Show the parallelism levels as nested circles: ILP inside a thread, DLP across data, TLP across threads, RLP across requests. End with a reflection: "If you had unlimited transistors but limited power, how would you allocate them?"

---

### Chapter 1.6 — Benchmarking and Workload Characterization

#### Learning objectives
- Describe the SPEC CPU benchmark suite and its methodology.
- Understand the importance of representative workloads in architecture evaluation.
- Analyze workload characteristics: instruction mix, cache behavior, branch behavior, and ILP.
- Evaluate the strengths and limitations of synthetic vs. real-world benchmarks.

#### Detailed lesson content

Benchmarking is the practice of measuring processor performance using standardized workloads. A good benchmark is representative of real-world usage, repeatable, and fair. Bad benchmarks can lead to optimizations that improve the benchmark but not real applications (a practice called **benchmarketing**).

**SPEC CPU:**

The Standard Performance Evaluation Corporation (SPEC) CPU benchmark suite is the gold standard for processor performance measurement. It includes:
- **SPEC CPU2017:** The current version, with integer benchmarks (C/C++ programs) and floating-point benchmarks (scientific and media applications).
- **Methodology:** Each benchmark is compiled with standard compiler flags and run on the test processor. The execution time is compared to a reference machine. The geometric mean of the ratios is the final score.
- **Base vs. Peak:** Base scores use conservative compiler flags that any user can replicate. Peak scores allow aggressive optimization, including architecture-specific tuning.

SPEC benchmarks are real applications (e.g., compilers, video compression, physics simulation, chess engine), not synthetic kernels. This makes them representative of actual workloads.

**Other benchmarks:**
- **Geekbench:** Cross-platform, easy to run, includes CPU and GPU tests. Good for consumer comparisons but less rigorous than SPEC.
- **MLPerf:** Machine learning training and inference benchmarks. Critical for AI accelerators.
- **STREAM:** Measures memory bandwidth, not compute performance. Useful for memory-bound workloads.
- **TPC-C / TPC-E:** Database transaction benchmarks for server evaluation.
- **EEMBC:** Embedded processor benchmarks.

**Workload characterization:**

To design an architecture, architects must understand what workloads actually do. Key metrics:
- **Instruction mix:** What fraction of instructions are loads, stores, branches, integer ALU, floating-point ALU? This determines the functional unit mix.
- **ILP (Instruction-Level Parallelism):** How many independent instructions are available per cycle? This determines the optimal issue width.
- **Cache behavior:** What are the miss rates for L1, L2, L3? What is the working set size? This determines the cache hierarchy.
- **Branch behavior:** What is the branch frequency and predictability? This determines the branch predictor design.
- **Memory footprint:** How much memory does the workload use? How much memory bandwidth is required?

Workload characterization is done using hardware performance counters (e.g., Intel VTune, Linux perf) or architectural simulators (e.g., Gem5, SimpleScalar).

**Synthetic vs. real-world benchmarks:**
- **Synthetic benchmarks** (e.g., Dhrystone, Whetstone) are small kernels designed to test specific aspects of the processor. They are easy to run but may not be representative of real workloads. Dhrystone, for example, was criticized for being too small to stress the cache and branch predictor.
- **Real-world benchmarks** (e.g., SPEC, MLPerf) are actual applications. They are representative but complex and difficult to run.
- **Trace-driven simulation** uses recorded instruction traces from real workloads to drive a simulator. This is accurate but requires large trace files.

#### Key concepts
- SPEC CPU benchmark suite: integer and floating-point benchmarks
- Base vs. Peak scores
- Benchmarking methodology: geometric mean, reference machine
- Other benchmarks: Geekbench, MLPerf, STREAM, TPC, EEMBC
- Workload characterization: instruction mix, ILP, cache behavior, branch behavior
- Performance counters and profiling tools
- Synthetic vs. real-world benchmarks
- Benchmarketing and the danger of optimizing for benchmarks
- Trace-driven simulation

#### Hands-on activity
Install and run the `perf` tool on Linux (or use a profiling tool on Windows/Mac). Profile a simple program (e.g., matrix multiplication, sorting, or a compression utility) and collect the following statistics:
- Total instructions executed
- Total cycles
- CPI (cycles / instructions)
- Cache misses (L1, L2, L3)
- Branch mispredictions
- Page faults

Calculate the cache miss rates and branch misprediction rate. Compare the CPI with the theoretical minimum for your processor. Discuss what the profile reveals about the workload's bottlenecks. If `perf` is not available, use a simulator like Gem5 or describe what you would expect to see based on the workload characteristics.

#### Assessment idea
Ask: "Why does SPEC CPU use the geometric mean rather than the arithmetic mean to compute the overall score?" Answer: The arithmetic mean is sensitive to outliers. If one benchmark is very fast (e.g., 100× faster than the reference), the arithmetic mean would be dominated by that benchmark, even if all other benchmarks are slow. The geometric mean is less sensitive to outliers and requires that all benchmarks improve to increase the overall score. It also has a meaningful interpretation: the geometric mean of the ratios is the ratio of the geometric means, which is a multiplicative measure of central tendency. This makes the SPEC score more robust and fair. Then ask: "A processor vendor optimizes their compiler to recognize SPEC benchmark code patterns and replace them with hand-optimized assembly. The SPEC score improves by 30%, but real-world application performance is unchanged. What is this an example of, and why is it problematic?" Answer: This is an example of **benchmarketing** — optimizing for the benchmark rather than for real workloads. It is problematic because it misleads consumers and researchers who use the benchmark to compare processors. The benchmark is supposed to measure the performance of the hardware on representative workloads. If the compiler is cheating by recognizing the benchmark and applying special optimizations, the score does not reflect the processor's performance on actual applications. This is why SPEC has strict rules about compiler optimizations and requires that the same compiler be used for all benchmarks.

#### AI generation note
Create an animated benchmark lab. Show various workloads running on a processor and being measured. Show SPEC CPU as a panel of real-world applications. Show workload characterization as a dashboard with gauges for instruction mix, ILP, cache misses, and branch mispredictions. Show synthetic benchmarks as simple geometric shapes that don't represent reality. Show benchmarketing as a vendor painting a fast car on the benchmark screen while the real car is slow. Show performance counters as sensors inside the processor. Show the geometric mean as a balanced scale. End with a reflection: "What makes a benchmark trustworthy?"

---

## Module 2: Instruction Set Architecture

> **Goal:** Master the design and analysis of instruction set architectures, from classical RISC/CISC to modern ARM, x86, and RISC-V.

---

### Chapter 2.1 — ISA as the Software-Hardware Interface

#### Learning objectives
- Explain the components of an ISA: instructions, registers, memory model, addressing modes, and exception handling.
- Understand how the ISA defines the contract between software and hardware.
- Describe the impact of ISA design on compiler complexity, code density, and implementation efficiency.
- Analyze the trade-offs between ISA features and microarchitecture complexity.

#### Detailed lesson content

The Instruction Set Architecture (ISA) is the most enduring design decision in computer architecture. Once an ISA is established, it creates an ecosystem of compilers, operating systems, and applications that is difficult and expensive to change. The ISA must be designed with foresight, balancing the needs of programmers, compilers, and hardware implementers.

**Components of an ISA:**

1. **Instruction Set:** The operations the processor can perform. Typically includes:
   - Arithmetic and logical operations (ADD, SUB, AND, OR, NOT)
   - Data movement instructions (LOAD, STORE, MOVE)
   - Control flow instructions (BRANCH, JUMP, CALL, RETURN)
   - Floating-point operations (FADD, FMUL, FDIV)
   - Special instructions (SIMD, atomic operations, system calls)

2. **Registers:** The programmer-visible storage locations. The number and size of registers affect:
   - Code density (more registers mean fewer memory accesses)
   - Compiler complexity (register allocation is harder with more registers)
   - Implementation cost (register files consume area and power)
   - Context switch overhead (more registers to save)

3. **Memory Model:** How the processor interacts with memory:
   - Address space size (32-bit, 64-bit)
   - Addressing modes (immediate, direct, indirect, indexed, scaled)
   - Alignment requirements (must data be aligned to word boundaries?)
   - Endianness (big-endian vs. little-endian)
   - Memory ordering (sequential consistency, weak ordering)

4. **Exception Handling:** How the processor responds to events like interrupts, page faults, and divide-by-zero. The ISA defines:
   - Exception types and priorities
   - How the processor state is saved
   - How control is transferred to the exception handler
   - How the processor returns from the exception

5. **Privilege Levels:** The ISA defines user mode and supervisor mode (or more levels), controlling which instructions can execute in which mode. This is essential for operating system security.

**ISA design trade-offs:**

- **Code density vs. simplicity:** A dense ISA (fewer bits per instruction) reduces memory usage but makes decoding complex. A simple ISA is easier to implement but requires more instructions for the same program.
- **Compiler vs. hardware complexity:** A rich ISA with complex instructions reduces compiler optimization effort but increases hardware complexity. A simple ISA pushes complexity to the compiler.
- **Forward compatibility:** The ISA should be designed to accommodate future extensions without breaking existing software. ARM and RISC-V handle this through versioned extensions.

**The ISA as a contract:**

The ISA is a contract between software and hardware. Software (compilers, OS, applications) assumes the ISA behaves in a certain way. Hardware must implement the ISA exactly as specified. If the hardware deviates (e.g., a bug in the implementation), software will fail. This is why ISA verification is critical and why processor bugs (errata) are taken so seriously.

#### Key concepts
- ISA components: instructions, registers, memory model, exceptions, privilege levels
- ISA as the software-hardware contract
- Register file design trade-offs: count, size, width
- Memory model: address space, addressing modes, alignment, endianness
- Exception handling architecture
- Privilege levels and protection rings
- ISA design trade-offs: code density, compiler complexity, hardware complexity
- Forward compatibility and extensions
- ISA verification and processor errata

#### Hands-on activity
Compare the register files of three ISAs: x86-64, ARM64 (AArch64), and RISC-V (RV64I). Create a table showing: number of general-purpose integer registers, number of floating-point registers, register widths, special-purpose registers (PC, stack pointer, frame pointer), and calling convention (which registers are callee-saved vs. caller-saved). Then, write a simple function in C (e.g., `int add(int a, int b) { return a + b; }`) and compile it to assembly for each ISA using an online compiler or cross-compiler. Compare the generated assembly code in terms of register usage, instruction count, and instruction size. Discuss which ISA seems most compiler-friendly.

#### Assessment idea
Ask: "Why does the number of architectural registers in an ISA affect both compiler performance and context switch overhead?" Answer: More registers reduce memory accesses because the compiler can keep more variables in registers, improving performance. However, more registers increase context switch overhead because the operating system must save and restore more registers when switching between threads or processes. This is why ISAs like x86-64 (16 integer registers) and ARM64 (31 integer registers) strike a balance. RISC-V with 32 registers provides more flexibility but requires more state to be saved. Some architectures (like SPARC) had register windows to reduce context switch overhead, but this added hardware complexity. Then ask: "What is the difference between big-endian and little-endian memory layout, and why does it matter for network protocols and file formats?" Answer: In big-endian, the most significant byte is stored at the lowest memory address. In little-endian, the least significant byte is stored at the lowest address. x86 is little-endian; ARM and many network protocols are big-endian (network byte order). When transferring data between systems with different endianness, the bytes must be swapped. This matters for network protocols (TCP/IP uses big-endian) and file formats (some formats specify endianness). Modern processors often have instructions to swap endianness (e.g., `BSWAP` on x86, `REV` on ARM) to handle cross-platform data.

#### AI generation note
Create a 10-minute animated lesson. Show the ISA as a contract document signed by software and hardware. Show the components as sections of the contract: instructions, registers, memory, exceptions. Show registers as numbered boxes. Show addressing modes as different ways to navigate a map. Show endianness as two people reading a book from opposite ends. Show the compiler as a lawyer interpreting the contract to write code. Show the hardware as an engineer building a machine that follows the contract exactly. Show x86, ARM, and RISC-V as three different contract templates. Show a processor bug as a breach of contract. End with a reflection: "What happens when software assumes an ISA behavior that the hardware doesn't guarantee?"

---

### Chapter 2.2 — RISC vs. CISC Design Philosophy

#### Learning objectives
- Compare and contrast RISC and CISC instruction set architectures.
- Understand the historical evolution from CISC to RISC and the reasons behind the shift.
- Describe the key characteristics of modern ISAs: load-store architecture, fixed vs. variable instruction length, register sets, and addressing modes.
- Evaluate the trade-offs between ISA complexity and implementation efficiency.

#### Detailed lesson content

Historically, ISAs evolved along two main paths: **CISC** (Complex Instruction Set Computer) and **RISC** (Reduced Instruction Set Computer). Understanding this dichotomy is essential because it explains the design philosophies behind the dominant ISAs today.

**CISC architectures** (e.g., x86) were developed in the 1970s when memory was expensive and compilers were primitive. The goal was to minimize the number of instructions per program by making each instruction do more work. CISC instructions can operate directly on memory, perform complex operations (like string manipulation or decimal arithmetic), and have variable lengths. For example, an x86 instruction can add a memory operand to a register, increment the memory address, and decrement a counter — all in a single instruction. This reduced instruction count and memory usage, which was critical when memory was measured in kilobytes.

However, CISC ISAs created implementation challenges. Variable-length instructions require complex decoders. Instructions that operate on memory require the processor to perform multiple memory accesses in a single cycle. Complex instructions take a variable number of cycles to execute, making pipelining difficult. As memory became cheaper and compilers improved, the benefits of CISC diminished, and the implementation costs grew.

**RISC architectures** (e.g., MIPS, ARM, RISC-V, PowerPC) emerged in the 1980s as a reaction to CISC complexity. The RISC philosophy is based on several key principles:
1. **Simple instructions:** Most instructions execute in a single clock cycle.
2. **Load-store architecture:** Only load and store instructions access memory. All other instructions operate on registers.
3. **Fixed instruction length:** All instructions are the same size (typically 32 bits), making decoding simple and fast.
4. **Large register files:** Many general-purpose registers (typically 32) to reduce memory accesses.
5. **Hardwired control:** Simple instructions are implemented directly in hardware rather than microcode.
6. **Compiler optimization:** Rely on the compiler to generate efficient code rather than complex hardware.

These principles made RISC processors easier to pipeline, easier to implement with high clock frequencies, and more power-efficient. Early RISC processors like MIPS and SPARC demonstrated that simple ISAs could outperform complex ISAs, leading to the RISC revolution. Today, ARM dominates the mobile market, and RISC-V is gaining traction in embedded and research systems. Even x86 processors internally translate x86 instructions into simpler RISC-like micro-operations (μops) before executing them.

**Key ISA characteristics:**
- **Instruction length:** Fixed (RISC: 32 bits) vs. variable (CISC: 1–15 bytes for x86). Fixed length simplifies fetching and decoding. Variable length reduces code size.
- **Memory access:** Load-store (RISC) vs. register-memory (CISC). Load-store architectures have simpler pipelines because memory accesses are decoupled from computation.
- **Register set:** RISC typically has 32 general-purpose registers. CISC typically has fewer (e.g., x86 has 8 general-purpose registers in 32-bit mode, 16 in 64-bit mode).
- **Addressing modes:** RISC typically has fewer addressing modes. CISC has many, including indirect, indexed, scaled, and displacement modes.
- **Code density:** CISC instructions are denser (fewer bytes per instruction), which is important for embedded systems with limited memory. RISC instructions are simpler but require more instructions for the same program.

**The RISC-V ISA:** RISC-V is a modern, open-source ISA that has gained significant traction in academia and industry. It is modular: a minimal base integer ISA (RV32I or RV64I) is extended with optional standard extensions for multiplication (M), floating-point (F, D), atomic operations (A), and compressed instructions (C). This modularity allows implementers to choose only the features they need, reducing complexity and area. RISC-V is designed to be simple, extensible, and free from patent restrictions, making it an attractive choice for custom processors.

**Modern ISA trends:**
- **x86-64:** AMD's 64-bit extension to x86, now the standard for desktop and server processors. It retains the CISC philosophy but adds more registers (16 general-purpose) and 64-bit addressing.
- **ARMv8-A:** ARM's 64-bit ISA (AArch64), used in Apple Silicon (M1, M2), Qualcomm Snapdragon, and AWS Graviton. It is a clean RISC ISA that has largely replaced ARMv7 (32-bit) in high-performance applications.
- **RISC-V:** The open ISA revolution. Used in microcontroller-class processors (SiFive FE310), high-performance application processors (SiFive P550), and research prototypes. It is also being used in accelerators and custom AI chips.

#### Key concepts
- CISC philosophy: complex instructions, memory-to-memory operations, variable length
- RISC philosophy: simple instructions, load-store architecture, fixed length, large register file
- Historical evolution: from CISC to RISC, and the internal RISCification of x86 (μops)
- ISA characteristics: instruction length, memory access model, register set, addressing modes
- Code density vs. implementation simplicity trade-off
- RISC-V as a modern, open, modular ISA
- ARMv8-A and x86-64 as dominant commercial ISAs
- ISA longevity and ecosystem lock-in

#### Hands-on activity
Write a simple C program that computes the sum of an array of 100 integers. Then, compile it to assembly for two different ISAs (if you have access to cross-compilers: e.g., `gcc -S` for x86 and `aarch64-linux-gnu-gcc -S` for ARM64). Compare the generated assembly code in terms of: (1) number of instructions, (2) instruction length variability, (3) memory access patterns (load-store vs. register-memory), and (4) register usage. If you cannot access cross-compilers, use an online compiler like Godbolt (godbolt.org) with x86-64 and ARM64 targets. Write a one-page analysis of the differences and which ISA generates more compact or efficient code for this task.

#### Assessment idea
Ask: "A processor designer is choosing between a CISC ISA and a RISC ISA for a new embedded microcontroller. The microcontroller has only 4 KB of program memory. Which ISA is more likely to produce smaller code, and why?" Answer: CISC. CISC instructions are more expressive and can perform complex operations in a single instruction. For example, a CISC instruction might increment a pointer, load a value, and add it to an accumulator in one instruction. A RISC processor would need three or four separate instructions (load, add, store, increment). This means CISC code is denser (fewer bytes per program), which is critical for memory-constrained embedded systems. However, the RISC processor would be simpler to implement and potentially more power-efficient. Then ask: "Why do modern x86 processors translate x86 instructions into micro-operations (μops) internally?" Answer: Because x86 is a complex, variable-length CISC ISA that is difficult to pipeline and execute out-of-order directly. By translating x86 instructions into simple, fixed-length RISC-like μops, the processor can use the same efficient execution engines (pipelines, reservation stations, reorder buffers) that RISC processors use. This "internal RISCification" allows x86 to maintain backward compatibility with the vast x86 software ecosystem while achieving the performance and efficiency of modern RISC implementations.

#### AI generation note
Create a 10-minute animated comparison. Show CISC as a Swiss Army knife with many tools (complex instructions) and RISC as a set of single-purpose screwdrivers (simple instructions). Show a CISC instruction doing a complex memory operation in one step, and the equivalent RISC sequence of load, compute, store. Show the x86 processor as a CISC exterior with a RISC interior (translating to μops). Show ARM and RISC-V as clean RISC designs. Show a code density comparison with CISC code being shorter but RISC code being simpler. Show RISC-V's modular extensions as LEGO blocks that can be added. Include a Godbolt compiler screenshot comparing x86 and ARM64 assembly. End with a reflection: "If you were designing a new processor for AI inference, would you choose an existing ISA or design a custom one?"

---

### Chapter 2.3 — Addressing Modes and Instruction Formats

#### Learning objectives
- Describe the common addressing modes: immediate, direct, indirect, indexed, scaled, and PC-relative.
- Analyze how addressing modes affect instruction format, code density, and compiler complexity.
- Understand the trade-offs between complex addressing modes and pipeline simplicity.
- Design instruction formats that balance decode complexity and code density.

#### Detailed lesson content

Addressing modes determine how the processor calculates the effective address of an operand. The choice of addressing modes has a profound impact on code density, compiler complexity, and pipeline design.

**Common addressing modes:**

1. **Immediate:** The operand is embedded in the instruction itself. Example: `ADD R1, R2, #5` (add 5 to R2). Fast because no memory access is needed, but limited by the size of the immediate field.

2. **Direct (Absolute):** The instruction contains the full memory address. Example: `LOAD R1, 0x1000`. Simple but requires a large address field, limiting code density.

3. **Register:** The operand is in a register. Example: `ADD R1, R2, R3`. The fastest and most common addressing mode in RISC processors.

4. **Register Indirect:** The address is in a register. Example: `LOAD R1, (R2)`. Used for pointer dereferencing.

5. **Indexed (Base + Displacement):** The address is the sum of a base register and a constant displacement. Example: `LOAD R1, 4(R2)`. Used for accessing struct fields and stack variables.

6. **Scaled Index:** The address is the sum of a base register, an index register multiplied by a scale factor, and a displacement. Example: `LOAD R1, 8(R2, R3, 4)` (address = R2 + R3*4 + 8). This is powerful for array access but complex to implement.

7. **PC-Relative:** The address is relative to the program counter. Example: `BEQ label` (target = PC + offset). Essential for position-independent code and branch instructions.

8. **Auto-increment/Auto-decrement:** The register is updated after the access. Example: `LOAD R1, (R2)+` (load from R2, then increment R2). Useful for stack operations and array traversal.

**Instruction formats:**

The instruction format determines how the instruction fields (opcode, register fields, immediate fields, addressing mode bits) are arranged in the instruction word.

- **Fixed-length formats (RISC):** All instructions are the same size (e.g., 32 bits). The fields are at fixed positions. This makes decoding simple and fast. However, the immediate field is limited in size (typically 12–16 bits), requiring the compiler to use multiple instructions for large constants.
- **Variable-length formats (CISC):** Instructions can be different sizes (e.g., 1–15 bytes for x86). The opcode determines the format, and the decoder must parse the instruction to find the fields. This allows large immediates and complex addressing modes but makes decoding slow and power-hungry.
- **Compressed formats (RISC-V C, ARM Thumb):** Some RISC ISAs provide compressed 16-bit instructions that are common operations. A 16-bit instruction can be used for common operations, improving code density while maintaining the simplicity of fixed-length 32-bit instructions for less common operations. The decoder expands 16-bit instructions to 32-bit internal representations.

**Trade-offs:**
- Complex addressing modes (scaled index, auto-increment) reduce instruction count and improve code density. However, they require complex address calculation units in the pipeline, increasing cycle time and power.
- Simple addressing modes (register, immediate, base+displacement) require more instructions but allow simpler, faster pipelines. The compiler can generate efficient code by using instruction scheduling and loop unrolling.
- PC-relative addressing is essential for branches and position-independent code. The displacement field limits the branch range, requiring the compiler to use indirect jumps for long branches.

#### Key concepts
- Addressing modes: immediate, direct, register, indirect, indexed, scaled, PC-relative, auto-increment
- Instruction formats: fixed-length, variable-length, compressed
- Opcode field and field encoding
- Address calculation and effective address computation
- Code density implications of addressing modes
- Pipeline complexity vs. instruction count trade-off
- Position-independent code and PC-relative addressing
- Compressed instruction sets (RISC-V C, ARM Thumb)
- Instruction decode complexity and power consumption

#### Hands-on activity
Design a simple 16-bit instruction format for a RISC processor with 8 registers. The format must support: (1) register-register ALU operations, (2) register-immediate ALU operations, (3) load and store with base+displacement addressing, (4) conditional branches with PC-relative addressing. Draw the bit fields for each instruction type and calculate the maximum immediate range, the maximum displacement for branches, and the maximum displacement for load/store. Discuss the limitations of the 16-bit format and how they affect compiler code generation. Then, compare your format to the actual ARM Thumb-2 16-bit instruction format.

#### Assessment idea
Ask: "Why does x86 allow complex addressing modes like `MOV EAX, [EBX + ESI*4 + 8]` while ARM AArch64 only allows simple base+displacement addressing like `LDR X0, [X1, #8]`?" Answer: x86 is a CISC ISA designed for code density and programmer convenience. The complex addressing mode allows a single instruction to compute an array element address and load it, reducing instruction count. ARM AArch64 is a RISC ISA designed for pipeline simplicity. The scaled index addressing mode would require a complex address calculation unit that would increase the pipeline depth and power. Instead, ARM AArch64 requires the compiler to compute the address in a separate instruction (`ADD X2, X1, X3, LSL #2`) and then use simple base+displacement addressing (`LDR X0, [X2, #8]`). This uses two instructions instead of one but keeps the pipeline simple and fast. The RISC philosophy trades instruction count for implementation simplicity. Then ask: "What is the advantage of PC-relative addressing for branch instructions, and why is it used in virtually all ISAs?" Answer: PC-relative addressing allows code to be position-independent — the binary can be loaded at any memory address without modification. This is essential for shared libraries, dynamic linking, and operating system loaders. If branches used absolute addresses, every branch target would need to be relocated when the program is loaded, which increases load time and complexity. PC-relative addressing also reduces the size of the branch displacement field because most branches are to nearby targets (loops, if-else blocks). A small displacement field (e.g., 12–21 bits) covers most common branch distances, improving code density.

#### AI generation note
Create a 10-minute animated lesson. Show addressing modes as different ways to find a treasure. Immediate: the treasure is in your pocket. Direct: the map shows the exact coordinates. Register: the coordinates are in a note. Indirect: the note points to another note. Indexed: the coordinates are a base location plus an offset. Scaled: the coordinates are base + index × scale + offset. PC-relative: the treasure is a few steps ahead. Show instruction formats as LEGO structures: fixed-length blocks are uniform, variable-length blocks are irregular. Show the decoder as a robot that reads the blocks. Show a complex x86 instruction as a large, irregular block that the decoder must parse slowly. Show a simple RISC instruction as a uniform block that the decoder reads instantly. Show compressed instructions as half-blocks that expand to full blocks. End with a reflection: "Why do some processors have both 16-bit and 32-bit instructions?"

---

### Chapter 2.4 — ARM Architecture and ARMv8-A

#### Learning objectives
- Describe the evolution of the ARM architecture from ARMv1 to ARMv8-A.
- Understand the ARMv8-A execution states: AArch32 and AArch64.
- Explain the ARMv8-A register file, instruction set, and exception model.
- Analyze the design decisions that make ARM dominant in mobile and emerging server markets.

#### Detailed lesson content

ARM (Advanced RISC Machine) is the most widely used ISA in the world, powering over 95% of smartphones, most embedded systems, and an increasing share of servers and laptops. Understanding ARM architecture is essential for modern system design.

**Evolution of ARM:**
- **ARMv1–v3 (1985–1992):** Early 32-bit RISC processors with 26-bit address space.
- **ARMv4 (1994):** Added halfword and signed byte loads, Thumb 16-bit compressed instruction set. Used in ARM7TDMI.
- **ARMv5 (1999):** Added DSP instructions, Jazelle Java acceleration. Used in ARM9.
- **ARMv6 (2001):** Added SIMD instructions (ARMv6 SIMD), Thumb-2 (mix of 16-bit and 32-bit instructions), multiprocessing support. Used in ARM11.
- **ARMv7 (2005):** Three profiles: A (Application), R (Real-time), M (Microcontroller). Added NEON (128-bit SIMD), VFPv3 (floating-point), and the Cortex-A series. Cortex-A8, A9, A15 used ARMv7-A.
- **ARMv8-A (2011):** The 64-bit revolution. Added AArch64 (64-bit execution state) while retaining AArch32 (32-bit compatibility). New register file (31 general-purpose 64-bit registers), new exception model, and the foundation for Apple Silicon, AWS Graviton, and modern mobile processors.
- **ARMv9-A (2021):** Added SVE2 (Scalable Vector Extension 2), Confidential Compute Architecture (CCA), and Memory Tagging Extension (MTE) for security.

**ARMv8-A AArch64:**

AArch64 is a clean-slate 64-bit ISA that fixes many limitations of ARMv7-A:
- **Register file:** 31 general-purpose 64-bit registers (X0–X30). X30 is the link register (LR). SP is a dedicated stack pointer. No register banking. This is much simpler than ARMv7's 16 registers with banking.
- **Instruction set:** Fixed 32-bit instructions (no Thumb mode in AArch64). Simpler condition codes: most instructions do not set condition flags; explicit `CMP` and `CCMP` instructions are used. This reduces pipeline dependencies.
- **Addressing:** 64-bit virtual addresses. Simple base+offset addressing with a 9-bit signed offset (for loads/stores) or 12-bit unsigned offset. Scaled index addressing requires a separate `ADD` instruction.
- **Exception model:** Four exception levels (EL0–EL3): EL0 = user, EL1 = OS kernel, EL2 = hypervisor, EL3 = secure monitor. This is a clean, hierarchical model for virtualization and security.
- **SIMD:** NEON is mandatory in AArch64, with 32 128-bit vector registers (V0–V31). SVE (Scalable Vector Extension) allows variable vector lengths (128–2048 bits), enabling vector code portability across different hardware implementations.

**Why ARM dominates:**
1. **Power efficiency:** ARM's simple RISC design and small pipeline enable low power consumption, critical for mobile devices.
2. **Licensing model:** ARM licenses its ISA and core designs to many companies (Apple, Qualcomm, Samsung, MediaTek), creating a competitive ecosystem.
3. **Ecosystem:** The ARM software ecosystem (compilers, operating systems, applications) is mature and widespread.
4. **Scalability:** ARM scales from tiny microcontrollers (Cortex-M0, 12K gates) to high-performance servers (Neoverse V1, Apple M2 Ultra).
5. **Customizability:** Licensees can design custom cores that implement the ARM ISA (e.g., Apple designs its own cores; Qualcomm uses ARM reference designs).

**ARM in servers and laptops:**
- **Apple Silicon (M1, M2, M3):** Custom ARM cores with industry-leading performance-per-watt. Demonstrated that ARM can compete with x86 in laptops.
- **AWS Graviton:** ARM-based server processors offering better price-performance than x86 for cloud workloads.
- **Ampere Altra:** ARM server processors with up to 128 cores, targeting high-density data centers.

#### Key concepts
- ARM architecture evolution: ARMv1 to ARMv9
- ARMv8-A AArch64: 64-bit execution state
- AArch64 register file: 31 × 64-bit general-purpose registers
- AArch32 backward compatibility
- ARMv8-A exception levels: EL0–EL3
- NEON SIMD: 32 × 128-bit vector registers
- SVE: Scalable Vector Extension (128–2048 bits)
- ARM licensing model and ecosystem
- ARM dominance in mobile, embedded, server, and laptop markets
- Apple Silicon, AWS Graviton, Ampere Altra

#### Hands-on activity
Install QEMU with ARM64 emulation (or use an ARM64 cloud instance like AWS Graviton). Write a simple ARM64 assembly program that computes the factorial of a number. Use the following AArch64 instructions: `MOV`, `SUB`, `MUL`, `CMP`, `B.NE`, `RET`. Compile and run the program. Then, compare your ARM64 assembly to the equivalent x86-64 assembly for the same program. Count the number of instructions and note the register naming conventions. Discuss the differences in instruction encoding and calling conventions between the two ISAs.

#### Assessment idea
Ask: "Why did ARM design AArch64 as a completely new ISA rather than extending ARMv7-A to 64 bits?" Answer: ARMv7-A had accumulated 20 years of legacy features that complicated the design: 16-bit Thumb mode, 32-bit Thumb-2 mode, conditional execution on most instructions, register banking, and a complex exception model. A clean-slate 64-bit design allowed ARM to: (1) remove legacy features, simplifying the decoder and pipeline; (2) design a modern register file with 31 64-bit registers, eliminating the register pressure of ARMv7's 16 registers; (3) create a simpler, hierarchical exception model (EL0–EL3) for virtualization and security; (4) make NEON mandatory and design it for 64-bit operations; (5) ensure the ISA is forward-compatible for future extensions. This is similar to how AMD designed x86-64 as a clean extension to x86, but ARM took the opportunity to remove legacy baggage entirely. Then ask: "What is the advantage of ARM's licensing model (selling IP and core designs) over Intel's integrated model (designing and manufacturing everything)?" Answer: ARM's licensing model creates a competitive ecosystem where multiple companies (Apple, Qualcomm, Samsung, MediaTek, Amazon) can design and sell ARM-based processors. This competition drives innovation and reduces prices. Intel's integrated model gave Intel complete control over the design and manufacturing, but it also meant that Intel was the only source of x86 processors. When Intel fell behind in manufacturing (e.g., the 10nm delay), there was no alternative x86 supplier. ARM's ecosystem allowed companies to switch between different ARM core designs or design their own, providing flexibility. The trade-off is that ARM licensees may fragment the ecosystem with incompatible extensions, though ARM manages this through architecture compliance testing.

#### AI generation note
Create a 10-minute animated timeline. Show ARM's evolution from a small British company (Acorn) to the dominant mobile ISA. Show ARMv7 as a 32-bit chip with 16 registers. Show ARMv8-A as a 64-bit chip with 31 registers and a cleaner design. Show AArch64 as a fresh start, sweeping away legacy features. Show the exception levels as a security hierarchy: user at the bottom, secure monitor at the top. Show NEON as a vector engine with 128-bit lanes. Show SVE as a scalable vector that grows with the hardware. Show Apple's M1 as a powerful ARM chip that surprises the industry. Show AWS Graviton as a server chip challenging x86. Show the ARM ecosystem as a network of connected companies. End with a reflection: "What would it take for ARM to fully replace x86 in the desktop and server markets?"

---

### Chapter 2.5 — x86 Architecture and x86-64

#### Learning objectives
- Describe the evolution of the x86 architecture from the 8086 to modern x86-64 processors.
- Understand the x86-64 register file, instruction set, and calling convention.
- Explain how x86 processors translate complex instructions into micro-operations (μops).
- Analyze the design decisions that keep x86 dominant in the desktop and server markets despite its complexity.

#### Detailed lesson content

x86 is the most dominant ISA in the desktop and server markets. It has survived for over 40 years despite its complexity, primarily because of backward compatibility and the massive software ecosystem built around it.

**Evolution of x86:**
- **8086 (1978):** 16-bit processor with segmented memory. The origin of x86.
- **80286 (1982):** Added protected mode and memory management.
- **80386 (1985):** 32-bit extension with flat memory model, paging, and virtual memory. Created the IA-32 architecture.
- **Pentium (1993):** Superscalar pipelined processor. Added MMX (SIMD) instructions.
- **Pentium Pro (1995):** Introduced out-of-order execution, register renaming, and speculative execution. Translated x86 to internal RISC-like μops.
- **Pentium 4 (2000):** Deep 20-stage pipeline, hyper-threading, high clock frequency (up to 3.8 GHz). Eventually abandoned due to power consumption.
- **Core 2 (2006):** Return to efficiency. Shorter pipeline, wider issue, better power management.
- **x86-64 (2003):** AMD's 64-bit extension to x86. Added 64-bit registers, more general-purpose registers (16 in 64-bit mode), and a flat 64-bit address space. Now the standard for all x86 processors.
- **Modern Core processors:** Sandy Bridge (2011), Skylake (2015), Alder Lake (2021), Raptor Lake (2022). Each generation improves the microarchitecture while keeping the same x86-64 ISA.

**x86-64 Register File:**

x86-64 expanded the register file from 8 32-bit registers to 16 64-bit registers (RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP, R8–R15). This was a significant improvement because the x86 register file was notoriously small, causing the compiler to generate many memory accesses. Additional registers (XMM0–XMM15 for SSE, YMM0–YMM15 for AVX, ZMM0–ZMM31 for AVX-512) were added for SIMD.

However, x86-64 retained the legacy registers and naming conventions for backward compatibility. This means the decoder must handle the old 8-bit, 16-bit, and 32-bit register aliases (e.g., AL, AX, EAX, RAX are all the same register).

**x86-64 instruction format:**

x86-64 instructions are variable-length, from 1 to 15 bytes. The format includes:
- Prefix bytes (optional): operand size override, address size override, segment override, REX prefix (for 64-bit operations and extended registers R8–R15).
- Opcode: 1–3 bytes. Some opcodes include addressing mode information.
- ModR/M: 1 byte that specifies register/memory operand and addressing mode.
- SIB: 1 byte for scaled index addressing (optional).
- Displacement: 1, 2, 4, or 8 bytes (optional).
- Immediate: 1, 2, 4, or 8 bytes (optional).

The variable-length format makes x86 instructions dense (good code density) but requires a complex, multi-stage decoder.

**Micro-operation translation:**

Modern x86 processors (Intel Core, AMD Zen) do not execute x86 instructions directly. Instead, they translate x86 instructions into simple, fixed-length **micro-operations (μops)**. The translation is done by hardware in the front-end of the processor.

- Simple x86 instructions (ADD, SUB, AND, OR) map to 1 μop.
- Complex x86 instructions (string operations, floating-point transcendental functions) map to multiple μops via a microcode ROM.
- The μops are then executed by the out-of-order execution engine, which is essentially a RISC processor at its core.

This "internal RISCification" allows x86 processors to maintain backward compatibility while achieving the performance of modern RISC implementations.

**Why x86 persists:**
1. **Backward compatibility:** Billions of lines of software, operating systems, and drivers are compiled for x86. Users and businesses cannot easily switch.
2. **Performance:** Intel and AMD have invested billions in x86 microarchitecture, making x86 processors extremely competitive.
3. **Software ecosystem:** Windows, Linux, and macOS (on Intel) all run on x86. The ecosystem is self-reinforcing.
4. **Binary translation:** Even when Apple switched to ARM, they included Rosetta 2 to translate x86 binaries to ARM. This shows the lock-in power of the x86 software base.

#### Key concepts
- x86 evolution: 8086 to modern x86-64
- x86-64 register file: 16 × 64-bit general-purpose registers
- Legacy register aliases: AL, AX, EAX, RAX
- Variable-length instruction format: 1–15 bytes
- Prefix bytes, REX prefix, ModR/M, SIB, displacement, immediate
- μop translation: x86 → RISC-like micro-operations
- Microcode ROM for complex instructions
- Internal RISCification of x86 processors
- Backward compatibility and software ecosystem lock-in
- AMD vs. Intel x86-64 implementations

#### Hands-on activity
Use an online disassembler or objdump to examine the machine code of a simple x86-64 program. For each instruction, identify the bytes and explain the format: prefix, opcode, ModR/M, displacement, immediate. Start with simple instructions like `MOV RAX, RBX` and progress to complex instructions like `MOV RAX, [RBX + RSI*8 + 16]`. Measure the instruction length for each. Then, compare the code density of x86-64 with ARM64 for the same C program by compiling both and counting the total bytes of the text section. Discuss which ISA is more compact and why.

#### Assessment idea
Ask: "Why does x86-64 retain the legacy 8-bit and 16-bit register aliases (AL, AH, AX) even though 64-bit code rarely uses them?" Answer: Backward compatibility. The x86-64 ISA was designed to run existing 32-bit and 16-bit code in compatibility mode. The 64-bit mode (long mode) still supports the legacy registers because the decoder hardware was already designed to handle them, and removing them would require new decoder logic without much benefit. However, the REX prefix system in x86-64 actually complicates the decoder because it must handle both the legacy register encoding (ModR/M) and the extended register encoding (REX + ModR/M). This is one of the costs of x86's backward compatibility: the decoder is more complex and power-hungry than a clean RISC decoder. Then ask: "How does the μop translation in x86 processors allow them to achieve RISC-like performance despite the CISC ISA?" Answer: The front-end of the x86 processor translates variable-length, complex x86 instructions into simple, fixed-length μops. These μops are then executed by a RISC-like out-of-order engine with Tomasulo's algorithm, register renaming, and a reorder buffer. This means that the complex part of x86 (decoding and translation) is confined to the front-end, while the execution engine is clean and efficient. The translation adds a small latency penalty (1–2 cycles), but the performance of the execution engine is comparable to RISC processors. The key insight is that x86 compatibility is a "tax" paid at the front-end, but the execution back-end can be as efficient as any RISC processor. This is why Intel and AMD can compete with ARM on performance despite the CISC ISA.

#### AI generation note
Create a 10-minute animated lesson. Show x86 as an ancient, multi-layered city with buildings from every era (8086, 386, Pentium, Core). Show x86-64 as a modern renovation that preserves the old buildings while adding new skyscrapers. Show the decoder as a translator that reads old, complex manuscripts and writes simple, modern notes. Show μops as standardized notes that a modern factory can process. Show the REX prefix as a special stamp that extends the note system. Show ARM as a new, planned city with uniform buildings. Show backward compatibility as a bridge that connects the old city to the new. Show software ecosystems as a web of connections that makes migration difficult. End with a reflection: "Will x86 eventually be replaced, or will it evolve forever?"

---

### Chapter 2.6 — RISC-V: The Open ISA

#### Learning objectives
- Describe the RISC-V ISA philosophy and its modular design.
- Understand the base integer ISA (RV32I/RV64I) and the standard extensions.
- Explain the RISC-V privilege architecture and exception model.
- Analyze the impact of RISC-V on the processor industry, academia, and custom silicon.

#### Detailed lesson content

RISC-V is a modern, open-source ISA that has gained significant traction in academia, industry, and government. Unlike proprietary ISAs (x86, ARM), RISC-V is free to use without licensing fees, and its open nature allows anyone to design, manufacture, and sell RISC-V processors without permission.

**RISC-V philosophy:**
1. **Simplicity:** The base ISA is minimal. RV32I has only 47 instructions. This makes it easy to implement, verify, and understand.
2. **Modularity:** The ISA is divided into a mandatory base and optional standard extensions. Implementers choose only what they need.
3. **Extensibility:** RISC-V provides reserved opcode space for custom extensions. This is critical for domain-specific accelerators (AI, cryptography, signal processing).
4. **Stability:** The base ISA and standard extensions are frozen and will not change. This ensures software compatibility.
5. **Openness:** The ISA specification is publicly available and maintained by the RISC-V International foundation (a nonprofit).

**Base integer ISA:**
- **RV32I:** 32-bit base integer ISA with 32 registers (x0 is hardwired to zero). Includes integer arithmetic, logical, shift, load, store, and branch instructions.
- **RV64I:** 64-bit base integer ISA. Same instructions as RV32I but with 64-bit operations and addressing.

**Standard extensions:**
- **M:** Integer multiplication and division.
- **A:** Atomic instructions (for multithreading and synchronization).
- **F/D:** Single-precision (F) and double-precision (D) floating-point.
- **C:** Compressed instructions (16-bit encoding for common operations). Improves code density by ~30%.
- **V:** Vector operations (SIMD). Scalable vector length like ARM SVE.
- **B:** Bit manipulation instructions.
- **J:** Dynamically translated languages (reserved for JavaScript, etc.).
- **T:** Transactional memory (proposed).

A processor is described by its ISA string: e.g., `RV64IMAFDC` (a common 64-bit configuration with integer, multiply, atomics, floating-point, and compressed instructions).

**Privilege architecture:**
- **User mode (U):** Application execution.
- **Supervisor mode (S):** Operating system execution.
- **Machine mode (M):** The most privileged mode, used for firmware and bootloader. Always present.
- **Hypervisor extension (H):** For virtualization.
- **User-level interrupt extension (N):** For real-time and embedded systems.

The exception model is clean and extensible. RISC-V uses a simple trap handler model with a `mtvec` register for the trap vector base address and `mepc` for the exception program counter.

**RISC-V impact:**
- **Academia:** RISC-V has become the standard teaching ISA. The simple, clean design makes it ideal for computer architecture courses. Simulators like Spike and QEMU support RISC-V.
- **Industry:** Companies like SiFive, Andes, and Microchip sell RISC-V processors. Western Digital uses RISC-V for storage controllers. Alibaba uses RISC-V for IoT and edge AI.
- **Custom silicon:** RISC-V's extensibility allows companies to add custom instructions for specific workloads. For example, a company might add a custom tensor operation extension for AI inference.
- **Government:** Some countries are adopting RISC-V to reduce dependence on foreign IP (x86 and ARM are US/British companies). RISC-V provides strategic independence.

**RISC-V cores:**
- **Rocket Chip:** A simple, configurable RISC-V core from UC Berkeley. Good for research and education.
- **BOOM (Berkeley Out-of-Order Machine):** A high-performance out-of-order RISC-V core. Comparable to ARM Cortex-A72 in performance.
- **CVA6:** An open-source 6-stage RISC-V CPU from the OpenHW Group.
- **SiFive P550:** A high-performance RISC-V application processor.
- **XiangShan:** A high-performance RISC-V processor from the Chinese Academy of Sciences, competitive with ARM Cortex-A76.

#### Key concepts
- RISC-V philosophy: simplicity, modularity, extensibility, stability, openness
- RV32I and RV64I base integer ISA
- Standard extensions: M, A, F, D, C, V, B, J, T
- ISA string notation: e.g., RV64IMAFDC
- Privilege architecture: U, S, M, H, N modes
- Exception model: mtvec, mepc, trap handlers
- RISC-V in academia, industry, custom silicon, and government
- RISC-V cores: Rocket Chip, BOOM, CVA6, SiFive P550, XiangShan
- Open-source hardware ecosystem
- Custom extensions and domain-specific accelerators

#### Hands-on activity
Set up the RISC-V toolchain (GNU toolchain for RISC-V) or use an online RISC-V simulator. Write a simple RISC-V assembly program that computes the sum of an array of 10 integers. Use the following instructions: `addi`, `lw`, `sw`, `add`, `bne`, `j`. Compile and simulate the program using Spike or QEMU. Then, examine the machine code bytes and compare the instruction encoding to x86-64 and ARM64. Discuss how the fixed 32-bit format simplifies decoding but affects code density compared to x86-64.

#### Assessment idea
Ask: "Why is RISC-V's extensibility (the ability to add custom instructions) a significant advantage over x86 and ARM for domain-specific accelerators?" Answer: x86 and ARM are proprietary ISAs controlled by Intel/AMD and ARM Limited, respectively. Adding custom instructions requires licensing agreements, compliance testing, and approval from the ISA owner. RISC-V provides reserved opcode space specifically for custom extensions. Any company or researcher can add custom instructions without permission. This is critical for AI accelerators, where custom tensor operations or matrix multiply instructions can provide 10–100× performance improvements. For example, a company designing an AI chip can add a custom `MATMUL` instruction to RISC-V, and the compiler can use it through intrinsics or auto-vectorization. This flexibility is why RISC-V is gaining traction in custom silicon and edge AI. Then ask: "What is the risk of RISC-V fragmentation if too many vendors create incompatible custom extensions?" Answer: Fragmentation is a real risk. If Vendor A adds a custom `CRYPTO` extension and Vendor B adds a different `CRYPTO` extension, software compiled for Vendor A's processor will not run on Vendor B's processor. This undermines the "open standard" benefit of RISC-V. To mitigate this, RISC-V International manages the standard extensions and encourages vendors to propose their custom extensions for standardization if they prove useful. The RISC-V ecosystem also uses feature detection (like CPUID on x86) so that software can check at runtime which extensions are available and fall back to generic code if a custom extension is missing. However, the risk of fragmentation remains, especially as the ecosystem grows.

#### AI generation note
Create a 10-minute animated lesson. Show RISC-V as a LEGO set with a small base and optional add-on pieces. Show x86 as a pre-built model that cannot be modified. Show ARM as a licensed LEGO set that you can assemble but cannot modify the pieces. Show the base ISA as a simple foundation with 47 blocks. Show extensions as colored add-ons: M (red), A (blue), F (green), D (yellow), C (orange). Show custom extensions as unique pieces that vendors create. Show the privilege modes as floors of a building: user on the ground, supervisor above, machine at the top. Show RISC-V cores as different buildings made from the same LEGO set. Show Rocket Chip as a small house, BOOM as a skyscraper, and SiFive P550 as a modern office building. Show academia as a school using the LEGO set to teach. Show custom silicon as a factory using the LEGO set to build specialized machines. End with a reflection: "Can an open ISA compete with proprietary ISAs that have decades of ecosystem investment?"

---

### Chapter 2.7 — ISA Extensions and Evolution

#### Learning objectives
- Explain how ISAs evolve over time through extensions while maintaining backward compatibility.
- Describe the x86 extension model: MMX, SSE, AVX, AVX-512.
- Understand the ARM extension model: NEON, SVE, SME.
- Analyze the trade-offs between adding new instructions vs. using existing instructions with wider data types.

#### Detailed lesson content

ISAs are designed to last decades, but computing needs evolve. New workloads (multimedia, AI, cryptography) require new operations. ISA extensions allow the architecture to evolve without breaking existing software.

**x86 extension model:**

x86 has evolved through a series of extensions, each adding new registers and instructions:
- **MMX (1997):** 64-bit SIMD registers (MM0–MM7) mapped onto the x87 floating-point registers. Added integer SIMD operations. Limited because it shared registers with x87.
- **SSE (1999):** 128-bit XMM registers (XMM0–XMM7). Added floating-point SIMD operations. Independent of x87. Used in Pentium III.
- **SSE2 (2001):** Added integer SIMD to XMM registers, double-precision floating-point. Made SSE the standard for floating-point.
- **SSE3/SSSE3/SSE4 (2004–2006):** Added horizontal operations, string operations, and multimedia instructions.
- **AVX (2011):** 256-bit YMM registers (YMM0–YMM15). Added three-operand SIMD instructions (non-destructive). Used in Sandy Bridge.
- **AVX2 (2013):** Added 256-bit integer SIMD, gather instructions, and FMA (fused multiply-add). Used in Haswell.
- **AVX-512 (2017):** 512-bit ZMM registers (ZMM0–ZMM31). Added masking, embedded rounding, and new operations. Used in Xeon Skylake-X and Ice Lake.

Each extension requires OS support to save the new registers during context switches. The processor has CPUID flags to indicate which extensions are available. Software checks these flags before using new instructions.

**ARM extension model:**
- **NEON (ARMv7-A):** 128-bit SIMD with 16 doubleword registers (or 32 single-word registers). Used for multimedia and signal processing.
- **VFP (ARMv7-A):** Vector floating-point. Replaced by NEON in most cases.
- **SVE (ARMv8-A):** Scalable Vector Extension. Variable vector length (128–2048 bits). The same binary runs on processors with different vector lengths. Used in Fujitsu A64FX (Fugaku supercomputer).
- **SVE2 (ARMv9-A):** Enhanced SVE with more integer and DSP operations.
- **SME (ARMv9-A):** Scalable Matrix Extension. Adds matrix tile storage and operations for AI workloads.

ARM's extension model is cleaner than x86's because AArch64 was designed with extensibility in mind. The encoding space is reserved for future extensions, and the compiler can generate code that uses new instructions when available.

**RISC-V extension model:**
- RISC-V uses the standard extension letters (M, A, F, D, C, V, B, etc.) to describe the ISA configuration.
- Custom extensions use reserved opcode space. The RISC-V toolchain supports custom instructions through inline assembly or compiler intrinsics.
- The RISC-V Vector (V) extension is particularly innovative because it uses a scalable vector length model similar to ARM SVE.

**Trade-offs:**
- Adding new instructions increases hardware complexity (decoder, execution units) but can dramatically improve performance for specific workloads.
- Using wider data types with existing instructions (e.g., using 256-bit AVX instead of 128-bit SSE) improves performance without adding new opcodes, but it requires wider execution units and registers.
- Extensions can fragment the software ecosystem if not all processors support them. Software must include fallback code for older processors.

#### Key concepts
- ISA evolution through extensions
- x86 extensions: MMX, SSE, SSE2, SSE3, AVX, AVX2, AVX-512
- ARM extensions: NEON, VFP, SVE, SVE2, SME
- RISC-V extension letters and custom opcode space
- CPUID/feature detection for extensions
- OS support for saving new registers
- Extension fragmentation and fallback code
- Three-operand vs. two-operand instruction formats
- Masking in AVX-512 and predicate registers in SVE
- Scalable vector length (SVE, RISC-V V)

#### Hands-on activity
Write a C program that performs a dot product of two float arrays using SIMD intrinsics. Implement three versions: SSE (128-bit), AVX (256-bit), and AVX-512 (512-bit). Use the corresponding intrinsic headers: `<xmmintrin.h>` for SSE, `<immintrin.h>` for AVX and AVX-512. Compile each version and run on a processor that supports AVX-512 (or use an online compiler). Measure the performance of each version. Calculate the speedup from SSE to AVX to AVX-512. Discuss why the speedup may not be linear (2× from SSE to AVX, 2× from AVX to AVX-512). If you don't have access to an AVX-512 processor, describe the expected results based on theoretical throughput.

#### Assessment idea
Ask: "Why does AVX-512 require OS support even though the instructions are executed by the hardware?" Answer: AVX-512 adds 16 new 512-bit registers (ZMM0–ZMM31) and 8 new mask registers (K0–K7). When the OS performs a context switch, it must save and restore all architectural state, including these new registers. If the OS does not know about AVX-512, it will not save the ZMM and mask registers, and when a thread resumes after a context switch, its register values will be corrupted by another thread's values. This is why OS vendors (Microsoft, Linux, Apple) must release updates to support new ISA extensions before applications can use them. The CPUID instruction reports whether the OS has enabled the extension by setting the XCR0 register. Then ask: "What is the advantage of ARM SVE's scalable vector length over x86 AVX-512's fixed 512-bit vectors?" Answer: ARM SVE allows the same compiled binary to run on processors with different vector lengths (e.g., 128-bit on a small core, 512-bit on a large core). The hardware determines the vector length at runtime, and the software uses predicate registers to handle the remainder. This provides binary portability: a single binary can run on both a low-end and a high-end ARM processor, extracting different levels of parallelism. With x86 AVX-512, a binary compiled for 512-bit vectors cannot run on a processor that only supports 256-bit AVX2 without emulation or separate compilation. This means software vendors must ship multiple binaries or use dynamic dispatch. SVE simplifies software distribution and hardware design because the compiler and hardware collaborate to handle variable vector lengths.

#### AI generation note
Create a 10-minute animated lesson. Show ISA extensions as upgrades to a tool set. Show MMX as a small wrench, SSE as a medium wrench, AVX as a large wrench, and AVX-512 as a massive wrench. Show x86 as a workshop that accumulates tools over decades. Show ARM as a modular workshop where tools are organized by category. Show RISC-V as a build-your-own workshop. Show CPUID as a checklist that the software reads before using a tool. Show context switching as a worker swapping toolboxes: the OS must know about all tools to swap them correctly. Show SVE as an adjustable wrench that scales to the job size. Show AVX-512 as a fixed-size wrench that only fits certain bolts. Show extension fragmentation as a workshop where some workers have different tools. End with a reflection: "Should ISAs be designed to last forever, or should they be regularly replaced?"

---

## Module 3: Microarchitecture and Control

> **Goal:** Understand how processors are implemented at the microarchitectural level, including control units, datapaths, and exception handling.

---

### Chapter 3.1 — Single-Cycle and Multi-Cycle Processors

#### Learning objectives
- Design a single-cycle processor datapath for a subset of RISC instructions.
- Calculate the clock cycle time of a single-cycle processor based on the critical path.
- Explain the limitations of single-cycle processors and why multi-cycle processors were developed.
- Design a multi-cycle processor that reuses functional units across cycles.

#### Detailed lesson content

Before pipelining, processors executed one instruction at a time. There are two basic approaches: single-cycle and multi-cycle execution.

**Single-cycle processor:**

In a single-cycle processor, every instruction completes in one clock cycle. The cycle time is determined by the longest instruction (typically a load or store that accesses memory). The datapath includes all functional units needed for any instruction, and each instruction uses only the subset of units it needs.

Components of a single-cycle datapath:
- **Program Counter (PC):** Holds the address of the current instruction.
- **Instruction Memory:** Stores the program instructions. Read-only.
- **Register File:** Stores the general-purpose registers. Two read ports, one write port.
- **ALU:** Performs arithmetic, logical, and address calculations.
- **Data Memory:** Stores program data. Read-write.
- **Control Unit:** Generates control signals based on the instruction opcode.
- **Sign Extension Unit:** Extends immediate values to the full register width.
- **Multiplexers:** Select between different sources (e.g., register vs. immediate, ALU result vs. memory data).

**Critical path and clock cycle time:**

The clock cycle time must be at least as long as the longest path through the datapath. For a load instruction, the critical path is:
```
PC → Instruction Memory → Register File → ALU (address calc) → Data Memory → Mux → Register File Write
```

This path includes multiple memory accesses and ALU operations, making the clock cycle very long. For a simple ADD instruction, the critical path is much shorter, but the clock cycle is still determined by the load instruction. This means the processor is slow for all instructions because the clock is set to the worst case.

**Limitations of single-cycle:**
- **Slow clock:** The clock cycle is determined by the longest instruction, wasting time for simple instructions.
- **Resource duplication:** Every instruction needs its own dedicated resources, even if they are not used. For example, the data memory is idle during an ADD instruction, but it still consumes power and area.
- **Inefficient:** Functional units cannot be reused. The ALU is used for address calculation during a load and for arithmetic during an ADD, but these happen in different instructions, so the ALU is idle during memory access.

**Multi-cycle processor:**

A multi-cycle processor breaks instruction execution into multiple clock cycles, reusing functional units across cycles. This allows a shorter clock cycle (because each cycle does less work) and better resource utilization.

Example multi-cycle execution for a load instruction:
- Cycle 1: Fetch instruction from instruction memory. Increment PC.
- Cycle 2: Decode instruction. Read register file.
- Cycle 3: Calculate memory address using ALU.
- Cycle 4: Read data from data memory.
- Cycle 5: Write data to register file.

The ALU is used in cycle 1 (PC increment), cycle 3 (address calculation), and could be used in cycle 5 (not needed for load). The same ALU is reused across cycles. The memory is used in cycle 1 (instruction memory) and cycle 4 (data memory), but these are different memories, so they can be separate or shared with a multiplexer.

**Trade-offs:**
- Single-cycle: simple control, easy to understand, but slow clock and inefficient resources.
- Multi-cycle: faster clock, better resource utilization, but more complex control (requires a state machine or microcode).

Modern processors do not use pure single-cycle or multi-cycle designs. Instead, they use pipelining, which is a form of multi-cycle execution where multiple instructions are in different stages simultaneously.

#### Key concepts
- Single-cycle processor datapath components
- Critical path analysis and clock cycle time
- Resource duplication and inefficiency in single-cycle design
- Multi-cycle processor: reusing functional units across cycles
- Multi-cycle state machine for control
- ALU reuse in multi-cycle design
- Instruction memory vs. data memory
- Trade-offs: single-cycle simplicity vs. multi-cycle efficiency
- Transition from single-cycle to pipelined design

#### Hands-on activity
Design a single-cycle datapath for a RISC processor that supports: ADD, SUB, AND, OR, LW (load word), SW (store word), BEQ (branch if equal). Draw the datapath diagram showing all components: PC, instruction memory, register file, ALU, data memory, sign extension, and multiplexers. Label the control signals for each instruction type. Then, calculate the critical path for a load instruction assuming the following delays: instruction memory = 2 ns, register file read = 1 ns, ALU = 2 ns, data memory = 2 ns, register file write = 1 ns, multiplexer = 0.5 ns. What is the maximum clock frequency? Then, redesign the datapath as a multi-cycle processor with a clock cycle of 2 ns. Show how many cycles each instruction type takes and calculate the total execution time for a sequence of 5 instructions.

#### Assessment idea
Ask: "A single-cycle processor has a clock cycle of 10 ns. A multi-cycle processor with the same functional units has a clock cycle of 2 ns. A load instruction takes 5 cycles in the multi-cycle design. Which processor is faster for a load instruction, and by how much?" Answer: The single-cycle processor completes the load in 10 ns. The multi-cycle processor completes the load in 5 × 2 = 10 ns. They are the same speed for a single load instruction. However, the multi-cycle processor is much faster for simple instructions: an ADD takes 1 cycle in the single-cycle (10 ns) but could take 4 cycles in the multi-cycle (8 ns), which is faster. The real advantage of multi-cycle is the shorter clock cycle, which allows faster execution for most instructions. Then ask: "Why does a multi-cycle processor need a state machine or microcode for control, while a single-cycle processor can use a simple combinational decoder?" Answer: In a single-cycle processor, every instruction completes in one cycle, so the control signals are generated by a combinational logic block that maps the opcode directly to the control signals. The signals are stable for the entire cycle. In a multi-cycle processor, the control signals change from cycle to cycle as the instruction progresses through different stages. A state machine (FSM) is needed to track which cycle the instruction is in and generate the appropriate control signals for that cycle. Alternatively, a microcode ROM can store the control sequence for each instruction, and the control unit fetches the microcode word for each cycle. This added complexity is the cost of multi-cycle execution.

#### AI generation note
Create a 10-minute animated lesson. Show a single-cycle processor as a factory where every product takes the same long time, regardless of complexity. Show the critical path as the longest conveyor belt. Show a multi-cycle processor as a factory where products move through multiple stations, and simple products skip stations. Show the ALU as a machine that is reused for different tasks. Show the control unit as a traffic light that changes based on the stage. Show the clock as a metronome that ticks faster for the multi-cycle factory. Show the single-cycle factory as slow but simple, and the multi-cycle factory as faster but with more complex logistics. End with a reflection: "Why did pipelining replace both single-cycle and multi-cycle designs in modern processors?"

---

### Chapter 3.2 — Hardwired Control Unit Design

#### Learning objectives
- Design a hardwired control unit using combinational logic for a simple processor.
- Create a truth table and logic equations for control signals based on the instruction opcode.
- Implement the control unit using AND-OR logic or a PLA (Programmable Logic Array).
- Analyze the speed and flexibility trade-offs of hardwired control.

#### Detailed lesson content

The **control unit** is the part of the processor that orchestrates the execution of instructions. It generates the control signals that open and close multiplexers, enable registers, activate ALU operations, and control memory access. In a **hardwired control unit**, these signals are generated by combinational logic gates (AND, OR, NOT) based on the instruction opcode and the current state.

**Control signals for a simple processor:**

For a single-cycle or multi-cycle RISC processor, the control signals typically include:
- **RegWrite:** Enable writing to the register file.
- **MemRead:** Enable reading from data memory.
- **MemWrite:** Enable writing to data memory.
- **ALUSrc:** Select the second ALU operand (register or immediate).
- **MemtoReg:** Select the data source for register write (ALU result or memory data).
- **Branch:** Enable branch condition checking.
- **ALUOp:** Select the ALU operation (2–4 bits, decoded by an ALU control unit).
- **PCSrc:** Select the next PC value (PC+4 or branch target).

**Truth table for control signals:**

| Instruction | RegWrite | MemRead | MemWrite | ALUSrc | MemtoReg | Branch | ALUOp |
|-------------|----------|---------|----------|--------|----------|--------|-------|
| ADD | 1 | 0 | 0 | 0 | 0 | 0 | 10 |
| LW | 1 | 1 | 0 | 1 | 1 | 0 | 00 |
| SW | 0 | 0 | 1 | 1 | X | 0 | 00 |
| BEQ | 0 | 0 | 0 | 0 | X | 1 | 01 |

**Logic equations:**

From the truth table, we can derive Boolean equations for each control signal:
- RegWrite = ADD + LW
- MemRead = LW
- MemWrite = SW
- ALUSrc = LW + SW
- MemtoReg = LW
- Branch = BEQ
- ALUOp1 = ADD
- ALUOp0 = BEQ

These equations can be implemented with AND-OR gates. For example, RegWrite = (Opcode == ADD) OR (Opcode == LW). In practice, a decoder generates the instruction type signals (ADD, LW, SW, BEQ) from the opcode, and the control equations use these signals.

**PLA implementation:**

A Programmable Logic Array (PLA) is a structured way to implement combinational logic. It consists of an AND plane (which generates product terms) and an OR plane (which combines product terms into outputs). The PLA can be programmed to implement any set of Boolean equations. Hardwired control units are often implemented as PLAs because they are regular, compact, and fast.

**Speed and flexibility:**
- **Speed:** Hardwired control is fast because the control signals are generated by combinational logic with minimal delay (typically 1–2 gate delays). The control signals are available almost immediately after the opcode is decoded.
- **Flexibility:** Hardwired control is inflexible. Changing the instruction set requires redesigning the control logic. This is why hardwired control is used for RISC processors with simple, stable instruction sets.
- **Complexity:** As the instruction set grows, the control logic becomes more complex. For x86, hardwired control is extremely complex because of the variable-length instructions and many addressing modes. This is why x86 uses microcode for complex instructions.

#### Key concepts
- Control unit function: generating control signals
- Hardwired control: combinational logic implementation
- Control signals: RegWrite, MemRead, MemWrite, ALUSrc, MemtoReg, Branch, ALUOp
- Truth table for control signals by instruction type
- Boolean equations and AND-OR implementation
- PLA (Programmable Logic Array): AND plane + OR plane
- Decoder for instruction type signals
- Speed advantage of hardwired control
- Inflexibility: changing ISA requires redesign
- Hardwired control for RISC vs. microcode for CISC

#### Hands-on activity
Design a hardwired control unit for a multi-cycle processor with 5 instruction types: ADD, SUB, LW, SW, BEQ. The processor has 5 stages: IF, ID, EX, MEM, WB. For each stage, list the control signals that must be active. Create a complete truth table showing the control signals for each instruction in each stage. Then, derive the Boolean equations for each control signal as a function of the instruction type and the stage (represented by a 3-bit state counter). Draw the logic diagram using AND, OR, and NOT gates. Calculate the propagation delay of the control unit assuming each gate has a 1 ns delay.

#### Assessment idea
Ask: "Why is a PLA a good implementation choice for a hardwired control unit in a RISC processor?" Answer: A PLA provides a regular, structured way to implement combinational logic. The AND plane generates all the product terms (instruction type signals AND stage signals), and the OR plane combines them to produce the control signals. PLAs are compact, fast, and easy to design. They can be implemented efficiently in silicon. For a RISC processor with a small number of instruction types and a fixed number of stages, the PLA size is manageable. The regular structure of the PLA also makes it easier to verify and test. The trade-off is that PLAs consume more power than random logic for sparse functions, but for control logic, the density is usually high enough to make PLAs efficient. Then ask: "Why did early CISC processors (like the VAX) use microcoded control instead of hardwired control?" Answer: The VAX had a very complex instruction set with hundreds of instructions, many addressing modes, and variable-length instructions. A hardwired control unit for the VAX would have been enormous and extremely complex. Microcode allowed the designers to implement the control logic as a program stored in ROM, which was much more flexible and easier to design. New instructions could be added by simply updating the microcode, without redesigning the hardware. The trade-off was slower performance because each instruction required multiple microcode cycles. However, at the time, the VAX was designed for ease of programming and code density, not raw performance. Later, RISC processors demonstrated that simple instructions with hardwired control could outperform complex microcoded instructions.

#### AI generation note
Create a 10-minute animated lesson. Show the control unit as a control panel with switches. Show hardwired control as a panel where each switch is connected directly to the instruction type through wires. Show the truth table as a grid of lights that turn on for each instruction. Show the Boolean equations as wire connections between AND and OR gates. Show the PLA as a regular grid of dots (programmable connections). Show the AND plane as a set of horizontal wires and the OR plane as a set of vertical wires. Show a RISC processor as a simple control panel with few switches. Show a CISC processor as a massive control panel with thousands of switches, requiring a programmable controller (microcode). End with a reflection: "Why do modern processors use hardwired control for simple instructions and microcode for complex ones?"

---

### Chapter 3.3 — Microcoded Control

#### Learning objectives
- Explain the difference between hardwired and microcoded control units.
- Understand how microcode implements complex instructions as sequences of micro-operations.
- Describe the trade-offs between hardwired control (fast, complex) and microcoded control (flexible, slower).
- Analyze how modern processors use a hybrid approach: hardwired control for simple instructions and microcode for complex instructions.

#### Detailed lesson content

**Microcoded control** stores the control signals in a memory called the **control store** or **microcode ROM**. Each machine instruction is translated into a sequence of **micro-instructions** (also called micro-operations or μops). The control unit fetches these micro-instructions from the control store and executes them one by one.

A micro-instruction typically contains fields for:
- ALU operation select (add, subtract, AND, OR, etc.)
- Register file read/write controls
- Memory read/write controls
- Multiplexer select signals
- Next micro-instruction address
- Condition flags for branching

The sequence of micro-instructions for a complex instruction like "string move" might be:
1. Load the source address into a temporary register.
2. Load the destination address into another temporary register.
3. Load the length counter into a third register.
4. Loop: Read a byte from the source address.
5. Write the byte to the destination address.
6. Increment the source and destination addresses.
7. Decrement the length counter.
8. If length > 0, branch back to step 4.
9. Set the done flag and return.

This sequence is stored in the control store as a microprogram. The control unit executes this microprogram every time the "string move" instruction is encountered.

**Microcoded control advantages:**
- **Flexibility:** Changing the instruction set only requires updating the microcode ROM, not redesigning the hardware. This was a major advantage for CISC processors in the 1970s and 1980s.
- **Simpler hardware design:** The control logic is replaced by a memory and a simple sequencer. The hardware design is more systematic.
- **Emulation:** New instructions can be added by microcode updates. Some processors have used microcode to emulate other ISAs.

**Microcoded control disadvantages:**
- **Slower performance:** Each micro-instruction requires a memory access (fetch from the control store). The microprogram may require many cycles to complete.
- **Control store size:** The ROM must be large enough to hold all microprograms. This consumes silicon area.
- **Inflexible at the hardware level:** While the microcode can be changed, the underlying datapath is fixed. The microcode cannot add new hardware features.

**Modern hybrid approach:** Modern processors, especially x86 processors, use a hybrid approach. Simple instructions (like ADD, SUB, AND) are executed directly with hardwired control for speed. Complex instructions (like string operations, floating-point transcendental functions, or system calls) are translated into a sequence of micro-operations by a microcode engine. This approach combines the speed of hardwired control for common operations with the flexibility of microcode for complex operations.

In modern x86 processors, the **microcode ROM** is used for:
- Complex x86 instructions that do not map directly to the execution units.
- Exception handling and fault recovery.
- System calls and virtualization support (VMX/SVM operations).
- Power management and configuration.
- Security patches (microcode updates for Spectre, Meltdown, etc.).

The x86 processor's **front-end** (instruction fetch and decode) translates x86 instructions into μops. These μops are simple, RISC-like operations that are then fed to the out-of-order execution engine. The translation is done by hardware for simple instructions and by microcode for complex instructions.

**Vertical vs. horizontal microcode:**
- **Vertical microcode:** Each micro-instruction controls a single resource (e.g., one ALU operation, one register read). It is narrow and compact but requires more micro-instructions per machine instruction. It resembles a simple assembly language.
- **Horizontal microcode:** Each micro-instruction controls many resources simultaneously (e.g., read two registers, add them, write the result, all in one micro-instruction). It is wide and requires more bits per micro-instruction but can execute faster. It is closer to hardwired control.

Modern processors tend to use horizontal or highly encoded microcode to maximize parallelism within each micro-instruction.

#### Key concepts
- Control unit: generates control signals for instruction execution
- Hardwired control: combinational logic, fast but inflexible
- Microcoded control: control store with micro-instructions, flexible but slower
- Micro-instruction fields: ALU, register, memory, multiplexer, next address
- Microprogram: sequence of micro-instructions for a machine instruction
- Hybrid control: hardwired for simple instructions, microcode for complex instructions
- x86 μop translation and internal RISCification
- Microcode ROM for exceptions, system calls, and complex instructions
- Vertical vs. horizontal microcode
- Control store memory access as a bottleneck

#### Hands-on activity
Design a simple microcode sequence for a 4-bit ALU that supports ADD, SUB, AND, OR, and NOT operations. Create a microcode table with the following columns: micro-address, ALU operation, register A enable, register B enable, result register enable, memory read, memory write, next address. Write the microprogram for the ADD instruction (register A + register B → result register). Then write the microprogram for a LOAD instruction (read memory at address in register A → result register). Simulate the execution of these microprograms step by step, showing the state of the control signals at each micro-instruction. Discuss how many micro-instructions each machine instruction requires and how this affects the CPI.

#### Assessment idea
Ask: "A processor uses hardwired control for all instructions and achieves a CPI of 1.2 for typical workloads. If the same processor is redesigned with microcoded control, the control store access adds one cycle to every instruction. What is the new CPI, and what is the performance impact?" Answer: The new CPI would be 2.2 (1.2 + 1.0 for the microcode fetch). The performance would decrease by a factor of 2.2 / 1.2 = 1.83×. The processor would be 83% slower. This illustrates why modern processors use hardwired control for simple instructions and only resort to microcode for complex instructions. Then ask: "Why does x86 use microcode for exception handling rather than hardwired control?" Answer: Exception handling is complex and varies depending on the type of exception, the operating mode (real, protected, long mode), and the virtualization state (VMX root vs. guest). Microcode allows Intel and AMD to implement this complexity in software-like sequences that can be updated (via microcode patches) to fix security vulnerabilities (like Spectre and Meltdown) or add new features. Hardwired exception handling would be extremely complex and impossible to patch after fabrication. This is why microcode updates are a critical security mechanism for x86 processors.

#### AI generation note
Create a 10-minute animated lesson. Show the control unit as an orchestra conductor. Show hardwired control as a mechanical music box with fixed pins (fast, inflexible). Show microcoded control as a player piano with a scroll of punched paper (flexible, slower). Show a hybrid system as a modern electronic keyboard with both pre-programmed sounds and custom synthesis. Show the x86 instruction decode as a translator converting a complex sentence (x86 instruction) into simple words (μops). Show the microcode ROM as a library of instruction books. Show a microcode update as a firmware patch being applied to the library. Show the vertical vs. horizontal comparison as narrow vs. wide instruction formats. Include a step-by-step animation of a microprogram executing. End with a reflection: "Why is microcode flexibility important for processor security?"

---

### Chapter 3.4 — Micro-operations and x86 Translation

#### Learning objectives
- Explain how x86 instructions are translated into micro-operations (μops) in modern processors.
- Describe the x86 front-end: instruction fetch, length decode, and μop generation.
- Understand the role of the microcode ROM in translating complex x86 instructions.
- Analyze the performance impact of μop translation on x86 processor performance.

#### Detailed lesson content

Modern x86 processors do not execute x86 instructions directly. Instead, they translate them into simple, fixed-length **micro-operations (μops)** that are executed by a RISC-like out-of-order engine. This translation is one of the most important innovations in x86 processor design and is the reason x86 has remained competitive despite its complex ISA.

**The x86 front-end:**

The front-end of an x86 processor is responsible for fetching x86 instructions from memory, decoding them, and generating μops. It consists of several stages:

1. **Instruction Fetch:** The processor fetches instruction bytes from the instruction cache (L1I). Because x86 instructions are variable-length (1–15 bytes), the processor does not know where the next instruction begins until the current instruction is decoded. The fetch unit reads a block of bytes (e.g., 16 bytes) and passes them to the decoder.

2. **Length Decode:** The length decoder determines the boundaries of each x86 instruction in the fetched block. This is a complex task because the instruction length depends on the opcode, prefixes, and addressing mode. Modern processors use parallel length decoders that guess the starting points of multiple instructions simultaneously.

3. **Instruction Decode:** The decoder translates each x86 instruction into one or more μops. Simple instructions (ADD, SUB, AND, OR, MOV between registers) map to a single μop. Complex instructions (string operations, PUSH, POP, CALL, RET) may map to multiple μops. Some instructions (like CPUID, floating-point transcendental functions) are handled by the microcode ROM.

4. **μop Queue:** The generated μops are placed in a queue (also called the instruction queue or trace cache) before being sent to the out-of-order execution engine.

**Trace cache (Intel Pentium 4, later replaced):**

The Pentium 4 introduced a **trace cache** that stores decoded μops instead of raw x86 instructions. When the processor encounters a sequence of instructions, it stores the μops in the trace cache. If the same sequence is encountered again, the μops are fetched directly from the trace cache, bypassing the decode stage. This reduces decode latency and power consumption. However, the trace cache is complex and consumes significant area. Intel later replaced it with a larger instruction cache and faster decoders in the Core architecture.

**μop format:**

A μop is typically a fixed-length, RISC-like instruction with fields for:
- Operation type (e.g., integer ALU, load, store, branch, floating-point)
- Source operands (register numbers or immediate values)
- Destination operand (register number)
- Flags (e.g., whether to update condition codes)

The μop format is internal to the processor and varies between microarchitectures. It is not visible to software.

**Microcode ROM for complex instructions:**

Some x86 instructions are too complex to be decoded by hardware. These are handled by the microcode ROM:
- **String operations:** REP MOVSB, REP STOSB (used for `memcpy` and `memset`).
- **Floating-point transcendental:** FSIN, FCOS, FPTAN (used for math libraries).
- **System instructions:** CPUID, RDTSC, IN, OUT, HLT.
- **Virtualization:** VMX instructions (VMLAUNCH, VMRESUME).
- **Security features:** ENCLS, ENCLU (Intel SGX).

When the decoder encounters one of these instructions, it triggers a microcode engine that reads the microprogram from the ROM and generates the corresponding μops.

**Performance impact of μop translation:**

The translation from x86 to μops adds latency to the front-end. A simple instruction takes 1 cycle to decode. A complex instruction may take 2–4 cycles. However, the front-end is typically faster than the execution engine, so the decode latency is often hidden by the out-of-order execution.

The **decode width** (number of x86 instructions decoded per cycle) is typically 4–6 in modern processors. The **μop width** (number of μops generated per cycle) is typically 4–6. Because some x86 instructions generate multiple μops, the μop width can be higher than the decode width.

**Macro-op fusion and micro-op fusion:**

To reduce the number of μops, processors use fusion techniques:
- **Macro-op fusion:** The decoder fuses two x86 instructions into a single μop. For example, a compare instruction followed by a branch instruction can be fused into a single μop. This reduces the pressure on the execution engine.
- **Micro-op fusion:** Two μops that use different resources (e.g., a load and an ALU operation) are fused into a single μop that the execution engine processes as one unit. This is used for load-op instructions like `ADD R1, [R2]`.

Fusion improves performance by reducing the number of μops that the execution engine must process, effectively increasing the issue width.

#### Key concepts
- x86 front-end: fetch, length decode, instruction decode, μop generation
- Variable-length instruction decoding challenge
- μop generation: simple instructions → 1 μop, complex instructions → multiple μops
- Trace cache: storing decoded μops to bypass decode
- Microcode ROM for very complex instructions
- μop format: fixed-length, RISC-like internal instructions
- Decode width vs. μop width
- Macro-op fusion: combining two x86 instructions into one μop
- Micro-op fusion: combining two μops into one execution unit
- Performance impact of translation latency
- Front-end bandwidth as a bottleneck

#### Hands-on activity
Research the front-end specifications of three x86 processors: Intel Core i7-9700K (Coffee Lake), AMD Ryzen 9 5900X (Zen 3), and Intel Core i9-13900K (Raptor Lake). For each processor, find: decode width (x86 instructions per cycle), μop cache size (if any), trace cache (if any), macro-op fusion capabilities, and front-end bandwidth (μops per cycle). Create a comparison table and discuss how the front-end design has evolved from Coffee Lake to Raptor Lake and from Zen 3 to Zen 4. Discuss why Intel moved away from the trace cache after the Pentium 4.

#### Assessment idea
Ask: "Why does the x86 instruction decode stage consume more power than the decode stage in an ARM processor?" Answer: x86 instructions are variable-length (1–15 bytes), which requires a complex length decoder to find instruction boundaries. The decoder must parse prefixes, opcodes, ModR/M bytes, SIB bytes, displacements, and immediates. This requires multiple parallel decoders and complex logic. In contrast, ARM AArch64 instructions are fixed-length 32-bit (or 16-bit compressed), so the decoder can simply read 4 bytes at a time and decode them in parallel. The x86 decode stage is one of the most power-hungry parts of the processor. Some estimates suggest that the x86 front-end consumes 10–20% of the total processor power. This is the "x86 tax" — the cost of backward compatibility. Then ask: "What is the difference between macro-op fusion and micro-op fusion, and why do they improve performance?" Answer: Macro-op fusion combines two x86 instructions into a single μop during decode. For example, `CMP R1, R2` followed by `JNE label` can be fused into a single "compare-and-branch" μop. This reduces the number of μops that the execution engine must process, effectively increasing the available execution bandwidth. Micro-op fusion combines two μops that were generated from a single x86 instruction into a single execution unit. For example, a load followed by an ALU operation can be fused so that the load and ALU execute together. This reduces the number of entries needed in the reservation stations and reorder buffer, allowing more instructions to be in flight. Both techniques increase the effective throughput of the processor without requiring wider execution hardware.

#### AI generation note
Create a 10-minute animated lesson. Show the x86 front-end as a translation bureau. Show instruction fetch as a courier bringing packets of text. Show length decode as a linguist trying to find sentence boundaries in a language where sentences can be any length. Show the decoder as a team of translators converting complex sentences into simple notes. Show the trace cache as a filing cabinet of previously translated notes. Show the microcode ROM as a library of reference books for very complex sentences. Show macro-op fusion as two short sentences being combined into one note. Show micro-op fusion as two related notes being stapled together. Show the μop queue as an outbox. Show the execution engine as a factory that only understands simple notes. Show the ARM front-end as a translation bureau where all sentences are the same length, making the process much faster. End with a reflection: "Is the x86 translation tax worth the benefit of backward compatibility?"

---

### Chapter 3.5 — Exception Handling and Interrupts

#### Learning objectives
- Explain the difference between exceptions, interrupts, and traps.
- Describe the exception handling mechanism: detection, saving state, handler execution, and return.
- Understand the role of the exception vector table and the processor state save mechanism.
- Analyze the impact of exceptions on pipelined and out-of-order processors.

#### Detailed lesson content

An **exception** is an event that causes the processor to deviate from its normal instruction sequence. Exceptions are essential for handling errors, hardware events, and system calls. They can be classified into three categories:

1. **Interrupts:** Asynchronous events caused by external hardware (e.g., timer, keyboard, network packet). The processor can delay handling an interrupt until the current instruction completes.

2. **Traps:** Synchronous, intentional events caused by executing a specific instruction (e.g., `SYSCALL`, `INT`, `BREAK`). The processor transfers control to the operating system to perform a requested service. The return address points to the instruction after the trap.

3. **Faults:** Synchronous, unintentional events caused by an error during instruction execution (e.g., page fault, divide-by-zero, illegal instruction). The instruction that caused the fault may or may not be restartable. The return address points to the faulting instruction (so the OS can retry after fixing the problem).

4. **Aborts:** Severe errors that make the program state unreliable (e.g., hardware failure, double fault). The program cannot continue.

**Exception handling mechanism:**

When an exception occurs, the processor must:
1. **Detect the exception:** The hardware checks for exceptions at specific pipeline stages (e.g., decode for illegal instruction, execute for divide-by-zero, memory for page fault).

2. **Save the processor state:** The processor saves the program counter (PC), the processor status register (PSR), and other architectural state so that execution can resume later. This is typically done by pushing the state onto a stack or by writing to special registers.

3. **Disable further interrupts:** To prevent nested exceptions from corrupting the saved state, the processor disables interrupts (sets an interrupt mask bit).

4. **Transfer control to the handler:** The processor looks up the handler address in the **exception vector table** (also called the interrupt vector table). The table is indexed by the exception type. The processor loads the handler address into the PC and begins executing the handler.

5. **Execute the handler:** The handler (typically part of the operating system) processes the exception. For a page fault, it loads the page from disk. For a system call, it performs the requested service.

6. **Return from exception:** The handler executes a return-from-exception instruction (e.g., `IRET`, `ERET`, `SRET`) that restores the saved state and resumes execution at the return address.

**Exception vector table:**

The exception vector table is an array of handler addresses. Each entry corresponds to a specific exception type. For example:
- Entry 0: Reset handler
- Entry 1: Non-maskable interrupt (NMI)
- Entry 2: Timer interrupt
- Entry 3: System call
- Entry 4: Page fault
- Entry 5: Divide-by-zero

The vector table base address is stored in a special register (e.g., `VBAR` on ARM, `IDT` on x86). The processor calculates the handler address by adding the exception number multiplied by the entry size to the base address.

**Impact on pipelined processors:**

Exceptions complicate pipelining because multiple instructions may be in flight when an exception occurs. The processor must:
- Flush all instructions after the excepting instruction from the pipeline.
- Ensure that no state changes from instructions after the excepting instruction are visible (precise exceptions).
- Save the PC of the excepting instruction (for faults) or the next instruction (for traps).

In a simple 5-stage pipeline, precise exceptions are handled by:
- Detecting exceptions in each stage (IF, ID, EX, MEM, WB).
- If an exception is detected in stage N, flushing stages N+1 through WB.
- Preventing the writeback of any instruction that is being flushed.
- Saving the PC of the excepting instruction and transferring to the handler.

In an out-of-order processor, precise exceptions are handled by the **reorder buffer (ROB)**, which ensures that instructions commit (write their results) in program order. If an exception occurs, the ROB flushes all uncommitted instructions and restores the architectural state to the point before the excepting instruction.

**Nested exceptions:**

If an exception occurs while another exception is being handled, the processor must save the state of the current handler and transfer to the new handler. This requires a stack (or multiple banks of saved state) to hold the nested exception contexts. Most processors support a limited number of nested exceptions (e.g., 2–4 levels) to avoid stack overflow.

**Virtualization and exceptions:**

In virtualized systems, exceptions may need to be handled by the hypervisor rather than the guest OS. The hardware provides mechanisms for exception redirection:
- **Trap-and-emulate:** The hypervisor intercepts exceptions and emulates the behavior.
- **Hardware virtualization extensions (Intel VT-x, AMD-V, ARM Virtualization):** The processor has two modes (root mode and guest mode). Exceptions in guest mode can be configured to trap to the hypervisor in root mode, reducing the overhead of virtualization.

#### Key concepts
- Exceptions: interrupts, traps, faults, aborts
- Exception detection in pipeline stages
- Saving processor state: PC, PSR, registers
- Exception vector table and handler addresses
- Disabling interrupts and interrupt masking
- Transfer to handler and return from exception
- Precise exceptions in pipelined processors
- Out-of-order processors and the ROB for precise exceptions
- Nested exceptions and exception stack
- Virtualization and exception redirection (VT-x, AMD-V, ARM Virtualization)

#### Hands-on activity
Write a simple exception handler in assembly for a RISC-V processor (or x86, or ARM). The handler should: (1) save the current PC and status register to a stack, (2) print a message indicating the exception type, (3) restore the state, and (4) return from the exception. Then, write a main program that triggers a divide-by-zero exception. Run the program in a simulator (QEMU for RISC-V or x86) and observe the exception handling sequence. Trace the execution: show the PC before the exception, the PC of the handler, and the PC after the return. If you cannot run a simulator, draw the pipeline diagram showing how the exception is detected in the EX stage and how the subsequent instructions are flushed.

#### Assessment idea
Ask: "Why is it important for a processor to support precise exceptions, and what hardware mechanism enables precise exceptions in an out-of-order processor?" Answer: Precise exceptions are important because the operating system must be able to identify exactly which instruction caused the exception and resume execution at a known point. Without precise exceptions, the OS would see an inconsistent architectural state where some instructions after the excepting instruction have already modified registers or memory. This makes debugging impossible and can cause OS crashes. In an out-of-order processor, the reorder buffer (ROB) enables precise exceptions by ensuring that instructions commit (write their results to the register file and memory) in program order. If an exception occurs, the processor can flush all uncommitted instructions from the ROB and restore the architectural state to the point before the excepting instruction. The ROB holds the speculative results until commit, so no architectural state is modified prematurely. Then ask: "What is the difference between a maskable interrupt and a non-maskable interrupt (NMI), and when is each type used?" Answer: A maskable interrupt can be disabled by the processor (by clearing the interrupt enable bit in the status register). The processor can delay handling a maskable interrupt until it is convenient. Maskable interrupts are used for routine hardware events like timer ticks, keyboard input, and network packets. A non-maskable interrupt (NMI) cannot be disabled. It is used for critical events that must be handled immediately, such as hardware failures (memory parity error, power failure), system reset, and watchdog timer expiration. The NMI handler typically performs emergency shutdown or diagnostic procedures.

#### AI generation note
Create a 10-minute animated lesson. Show the processor as a train traveling along tracks. Show an exception as a red light on the track. Show the train stopping, the passengers (state) being transferred to a waiting room (stack), and a rescue crew (handler) being dispatched. Show the vector table as a directory of emergency services. Show the pipeline as a multi-lane highway where an accident (exception) causes all lanes behind it to be closed (flushed). Show the out-of-order processor as a highway with an exit checkpoint (ROB) that only lets cars through in order. Show a precise exception as the checkpoint stopping all cars after the accident and returning the highway to the state before the accident. Show nested exceptions as multiple accidents requiring multiple rescue crews. Show virtualization as a highway within a highway, with a traffic controller (hypervisor) managing the inner highway. End with a reflection: "What would happen if a processor could not handle exceptions precisely?"

---

### Chapter 3.6 — Control Unit Performance and Trade-offs

#### Learning objectives
- Compare the performance of single-cycle, multi-cycle, and pipelined control units.
- Calculate the CPI for each control approach given a workload mix.
- Understand the role of the control unit in determining the processor's clock cycle time.
- Analyze the area and power trade-offs between different control implementations.

#### Detailed lesson content

The control unit is a critical determinant of processor performance. Its design affects the clock cycle time, the CPI, and the overall execution time. This chapter compares the three main control approaches quantitatively.

**Single-cycle control:**
- **Clock cycle time:** T_sc = T_fetch + T_decode + T_execute + T_memory + T_writeback
- **CPI:** 1.0 (by definition, one instruction per cycle).
- **Execution time:** T_sc × IC
- **Area:** High, because all functional units must be dedicated and cannot be shared.
- **Power:** High, because all units are active every cycle (even if unused).

**Multi-cycle control:**
- **Clock cycle time:** T_mc = max(T_fetch, T_decode, T_execute, T_memory, T_writeback) ≈ T_sc / 5 (if stages are balanced).
- **CPI:** Variable. Simple instructions (ADD) take 4 cycles. Complex instructions (LOAD) take 5 cycles. Average CPI depends on the instruction mix.
- **Execution time:** T_mc × CPI_avg × IC
- **Area:** Lower, because functional units are shared across cycles.
- **Power:** Lower, because only the active units are powered each cycle.

For example, if a workload has 50% ALU instructions (4 cycles) and 50% load/store instructions (5 cycles), the average CPI is 0.5 × 4 + 0.5 × 5 = 4.5. The execution time per instruction is 4.5 × T_mc. If T_mc ≈ T_sc / 5, then the execution time per instruction is 4.5 × T_sc / 5 = 0.9 × T_sc. The multi-cycle processor is faster than the single-cycle processor.

**Pipelined control:**
- **Clock cycle time:** T_pipe = T_mc + T_overhead (pipeline register delay)
- **CPI:** Ideally 1.0, but higher due to hazards (stalls, flushes). Typical CPI = 1.1–1.5 for simple pipelines, 2–3 for complex workloads.
- **Execution time:** T_pipe × CPI_avg × IC
- **Area:** Higher than multi-cycle due to pipeline registers and hazard detection logic.
- **Power:** Higher than multi-cycle due to pipeline registers and speculation.

For example, if T_pipe = T_mc + 0.1 × T_mc = 1.1 × T_mc, and CPI = 1.2 (due to stalls), the execution time per instruction is 1.2 × 1.1 × T_mc = 1.32 × T_mc. Compared to multi-cycle (4.5 × T_mc), the pipelined processor is much faster. Compared to single-cycle (T_sc = 5 × T_mc), the pipelined processor is 5 / 1.32 = 3.78× faster.

**Area and power trade-offs:**
- Single-cycle: highest area, highest power, lowest performance (slow clock).
- Multi-cycle: lowest area, lowest power, moderate performance.
- Pipelined: moderate area, moderate power, highest performance.
- Out-of-order: highest area, highest power, highest performance for complex workloads.

The control unit also affects the clock cycle time directly. In a hardwired control unit, the control signal generation delay is small (1–2 gate delays). In a microcoded control unit, the control store access delay adds to the cycle time. Modern processors use hardwired control for the common case to minimize the control delay.

**Control unit design considerations:**
- **Critical path:** The control unit must not be on the critical path. The clock cycle time is determined by the slowest stage (usually ALU or memory access). If the control unit is too slow, it becomes the bottleneck.
- **Power gating:** The control unit can be power-gated when the processor is idle to save energy.
- **Clock gating:** Control signals can be gated to prevent unnecessary switching in unused functional units.

#### Key concepts
- Single-cycle: CPI = 1.0, T_sc = sum of all stage delays
- Multi-cycle: CPI = variable, T_mc = max stage delay
- Pipelined: CPI ≈ 1.0 + stalls, T_pipe = T_mc + overhead
- Execution time comparison for different control approaches
- Area and power trade-offs
- Control unit delay and critical path
- Power gating and clock gating in the control unit
- Quantitative comparison of control strategies

#### Hands-on activity
A processor has the following stage delays: IF = 2 ns, ID = 1 ns, EX = 2 ns, MEM = 2 ns, WB = 1 ns. The instruction mix is: 40% ALU (4 cycles in multi-cycle), 30% load (5 cycles), 20% store (4 cycles), 10% branch (3 cycles). Calculate:
1. Single-cycle clock period and execution time for 1000 instructions.
2. Multi-cycle clock period, average CPI, and execution time for 1000 instructions.
3. Pipelined clock period (with 0.2 ns pipeline register overhead), average CPI (assume 1.2 due to stalls), and execution time for 1000 instructions.
4. Compare the three approaches in terms of execution time, area (qualitative), and power (qualitative).

#### Assessment idea
Ask: "A single-cycle processor has a clock period of 10 ns. A multi-cycle processor with the same functional units has a clock period of 2 ns. For a workload with 50% ALU instructions (4 cycles) and 50% load instructions (5 cycles), which processor is faster, and by what factor?" Answer: Single-cycle: 10 ns per instruction. Multi-cycle: average CPI = 0.5 × 4 + 0.5 × 5 = 4.5 cycles. Execution time per instruction = 4.5 × 2 = 9 ns. The multi-cycle processor is faster by 10 / 9 = 1.11×. The multi-cycle processor is faster because the shorter clock period compensates for the multi-cycle execution. However, a pipelined processor with the same clock period (2 ns + overhead) and CPI ≈ 1.2 would be even faster: 1.2 × 2.2 = 2.64 ns per instruction, which is 3.79× faster than single-cycle. Then ask: "Why does the control unit delay matter for the clock cycle time, and how do modern processors ensure it is not on the critical path?" Answer: The control unit generates the signals that control the datapath. If the control unit is slow, the datapath must wait for the control signals before it can proceed. Modern processors ensure the control unit is not on the critical path by: (1) using hardwired control with minimal gate delay; (2) pre-decoding instructions in the cache (storing pre-decoded control information with the instruction); (3) using a μop cache (like Intel's Decoded Stream Buffer) so that the control signals are already generated; (4) overlapping control signal generation with the previous stage (e.g., generating control signals during instruction fetch). These techniques reduce the control delay to the point where the ALU or memory access is the critical path, not the control unit.

#### AI generation note
Create a 10-minute animated lesson. Show three factories: single-cycle (one long assembly line where every product takes the same time), multi-cycle (a circular conveyor where products visit stations multiple times), and pipelined (a linear conveyor with multiple products at different stations). Show the clock as a metronome that ticks fastest for pipelined, slowest for single-cycle. Show area as the factory floor size: single-cycle is largest, multi-cycle is smallest. Show power as electricity usage: single-cycle is highest, multi-cycle is lowest. Show the control unit as the factory manager: in hardwired control, the manager makes instant decisions; in microcoded control, the manager reads a manual. Show the critical path as the slowest worker on the assembly line. Show the pipeline registers as transfer stations between workers. End with a reflection: "Why did pipelined control become the dominant design for modern processors?"

---

## Module 4: Pipelined Processor Design

> **Goal:** Understand pipelining as the fundamental technique for increasing instruction throughput, and master the analysis of pipeline hazards and their resolutions.

---

### Chapter 4.1 — The Pipeline Concept and Basic Pipeline Design

#### Learning objectives
- Explain the laundry analogy and how it applies to processor pipelining.
- Design a 5-stage instruction pipeline: IF, ID, EX, MEM, WB.
- Calculate the speedup of a pipelined processor over a single-cycle processor.
- Understand the role of pipeline registers and how they isolate pipeline stages.

#### Detailed lesson content

Pipelining is the most important technique for improving processor performance. It is the architectural equivalent of an assembly line: instead of completing one instruction entirely before starting the next, the processor overlaps the execution of multiple instructions, with each instruction passing through a series of stages. At any given moment, multiple instructions are in different stages of execution, just as multiple cars are being assembled simultaneously on an automotive assembly line.

**The laundry analogy:** Imagine you have four loads of laundry to wash, dry, and fold. Without pipelining (the sequential approach), you would wash the first load, dry it, fold it, and then start the second load. If each step takes 30 minutes, the total time is 4 loads × 3 steps × 30 minutes = 360 minutes.

With pipelining (the overlapping approach), you start washing the first load. After 30 minutes, you move the first load to the dryer and start washing the second load. After 60 minutes, the first load is folding, the second is drying, and the third is washing. At steady state, a new load is completed every 30 minutes. The total time for four loads is 30 (wash 1) + 30 (dry 1) + 30 (fold 1) + 30 (fold 2) + 30 (fold 3) + 30 (fold 4) = 180 minutes. The throughput has doubled.

The key insight is that pipelining does not reduce the latency of a single instruction (it still takes 3 steps × 30 minutes = 90 minutes to complete one load). Instead, it increases the throughput: the number of instructions completed per unit time. In a processor, the time to complete one instruction is the **latency**, while the number of instructions completed per cycle is the **throughput** (or **IPC** — instructions per cycle).

**A 5-stage instruction pipeline:**

Most modern processors use a variation of the classic 5-stage RISC pipeline:

1. **IF (Instruction Fetch):** Fetch the instruction from the instruction memory using the program counter (PC). Increment the PC.
2. **ID (Instruction Decode):** Decode the instruction to determine the operation and operands. Read the register file. For branch instructions, compare registers and compute the target address.
3. **EX (Execute):** Perform the ALU operation: arithmetic, logical, or address computation for load/store.
4. **MEM (Memory Access):** For load instructions, read data from data memory. For store instructions, write data to data memory. For other instructions, this stage does nothing (passes through).
5. **WB (Write Back):** Write the result back to the register file (from the ALU result or from memory).

Each stage takes one clock cycle. In a single-cycle processor, the entire instruction completes in one long cycle, and the clock period is the sum of all stage delays: `T_single = T_IF + T_ID + T_EX + T_MEM + T_WB`. In a pipelined processor, the clock period is determined by the slowest stage: `T_pipe = max(T_IF, T_ID, T_EX, T_MEM, T_WB)`. Typically, the stages are balanced so that each takes approximately the same time, giving `T_pipe ≈ T_single / 5`.

**Pipeline registers:** Between each stage, there are **pipeline registers** (also called latches or interstage buffers) that hold the intermediate results. At the end of each clock cycle, the outputs of one stage are captured in the pipeline register and passed to the next stage on the next clock cycle. These registers isolate the stages: the EX stage works on the result of the ID stage from the previous cycle, while the ID stage works on a new instruction.

```
IF → [IF/ID reg] → ID → [ID/EX reg] → EX → [EX/MEM reg] → MEM → [MEM/WB reg] → WB
```

**Ideal speedup:** In the ideal case, with a perfectly balanced pipeline and no hazards, the pipelined processor completes one instruction per cycle (IPC = 1), while the single-cycle processor completes one instruction every 5 cycles (IPC = 0.2). The speedup is approximately equal to the number of stages: **Speedup ≈ 5**.

However, the ideal speedup is rarely achieved in practice because of:
- **Pipeline hazards:** Situations where the pipeline must stall or flush, reducing throughput.
- **Imbalanced stages:** If one stage is much slower than the others, it becomes the bottleneck.
- **Pipeline fill and drain:** At the start of a program, the pipeline is empty; at the end, it is draining. These effects reduce the average throughput for short programs.

**Pipeline fill time:** For an N-stage pipeline, it takes N cycles for the first instruction to complete. After that, one instruction completes per cycle (in the ideal case). For a program of M instructions, the total time is approximately `N + M - 1` cycles. For large M, the overhead of filling the pipeline is negligible.

**Clock frequency and pipeline depth:** Deeper pipelines (more stages) allow higher clock frequencies because each stage does less work. For example, the Pentium 4 had a 20-stage pipeline and ran at 3.8 GHz. However, deeper pipelines increase the penalty for branch mispredictions (more instructions to flush) and increase the complexity of hazard detection. There is an optimal pipeline depth that balances clock frequency, hazard penalties, and area.

#### Key concepts
- Pipelining as an assembly line for instructions
- Laundry analogy: latency vs. throughput
- 5-stage pipeline: IF, ID, EX, MEM, WB
- Pipeline registers (interstage latches)
- Clock period: single-cycle vs. pipelined
- Ideal speedup ≈ number of stages
- Pipeline fill and drain time
- Pipeline depth vs. clock frequency trade-off
- IPC (instructions per cycle) and CPI (cycles per instruction)

#### Hands-on activity
Create a timing diagram for a 5-stage pipeline executing the following 6 instructions in sequence:
```
ADD R1, R2, R3    # R1 = R2 + R3
SUB R4, R1, R5    # R4 = R1 - R5
AND R6, R1, R7    # R6 = R1 & R7
OR R8, R1, R9     # R8 = R1 | R9
ADD R10, R1, R11  # R10 = R1 + R11
SUB R12, R1, R13  # R12 = R1 - R13
```
Show each instruction progressing through the 5 stages (IF, ID, EX, MEM, WB) cycle by cycle. Use a grid with cycles on the x-axis and instructions on the y-axis. Identify where data hazards occur (instructions that depend on the result of the first ADD). Then redraw the diagram with forwarding (bypassing) to eliminate the stalls, showing how the result from EX is forwarded to the next instruction's EX stage. Calculate the total cycles with and without forwarding.

#### Assessment idea
Ask: "A single-cycle processor has a clock period of 5 ns. A pipelined version with 5 stages has a clock period of 1.2 ns. What is the ideal speedup, and why is it not exactly 5×?" Answer: The ideal speedup is 5 ns / 1.2 ns = 4.17×. It is not exactly 5× because the pipeline stages are not perfectly balanced (the longest stage is 1.2 ns, not 1.0 ns). Also, pipeline overhead (register delays between stages) adds to the cycle time. In practice, the speedup is further reduced by hazards. Then ask: "Why do deeper pipelines enable higher clock frequencies but increase branch misprediction penalties?" Answer: Deeper pipelines divide the instruction execution into smaller, faster stages, allowing a shorter clock period. However, when a branch is mispredicted, all instructions in the pipeline after the branch must be flushed. A deeper pipeline means more instructions are in flight after the branch, so more work is wasted. The Pentium 4's 20-stage pipeline had a severe branch misprediction penalty of about 20 cycles, which negated much of the benefit of the high clock frequency for branch-heavy code.

#### AI generation note
Create a 10-minute animated lesson. Show the laundry pipeline as a conveyor belt with three stations: wash, dry, fold. Show loads moving through the stations sequentially (no pipelining) and then overlapping (pipelining). Show the processor pipeline as five colored stages with instructions moving through. Show pipeline registers as transfer stations between stages. Show a timing diagram as a grid with colored blocks. Show the ideal case (no stalls) vs. the real case (with hazards). Show deeper pipelines as narrower stages but with longer branch penalties. Show a branch misprediction as a train derailment that requires restarting the pipeline. Include the timing diagram exercise. End with a reflection: "What would be the optimal pipeline depth for a processor running scientific code with few branches?"

---

### Chapter 4.2 — Pipeline Datapath and Control

#### Learning objectives
- Design the datapath for a 5-stage pipelined processor.
- Identify the control signals needed for each pipeline stage.
- Understand how the control signals are pipelined along with the data.
- Analyze how the pipelined control unit differs from the single-cycle control unit.

#### Detailed lesson content

The pipelined datapath is an extension of the single-cycle datapath, with pipeline registers added between stages and the control signals pipelined along with the data.

**Pipelined datapath components:**

1. **IF Stage:**
   - PC register: holds the current instruction address.
   - Adder: increments PC by 4 (for byte-addressed, 32-bit instructions).
   - Instruction memory: fetches the instruction.
   - Multiplexer: selects between PC+4 and branch target (for branches).
   - Pipeline register IF/ID: stores the fetched instruction and PC+4.

2. **ID Stage:**
   - Register file: reads two source registers (Rs1, Rs2) based on the instruction fields.
   - Sign extension unit: extends the immediate field to 32 bits.
   - Control unit: generates the control signals for the instruction. In a pipelined processor, the control signals are passed down the pipeline through the pipeline registers.
   - Pipeline register ID/EX: stores the register values, immediate, PC+4, and control signals.

3. **EX Stage:**
   - ALU: performs the operation (arithmetic, logical, address calculation).
   - Multiplexer: selects the second ALU operand (register or immediate).
   - Branch target adder: computes the branch target address (PC + immediate).
   - Zero detection: checks if the ALU result is zero (for branches).
   - Pipeline register EX/MEM: stores the ALU result, register values, and control signals.

4. **MEM Stage:**
   - Data memory: reads or writes data based on the control signals.
   - Multiplexer: selects the data to write (from register file).
   - Pipeline register MEM/WB: stores the memory data, ALU result, and control signals.

5. **WB Stage:**
   - Multiplexer: selects the write-back data (ALU result or memory data).
   - Register file: writes the result to the destination register.

**Pipelined control signals:**

The control signals are generated in the ID stage and must be passed down the pipeline because they are needed in later stages. For example:
- `RegWrite` is generated in ID but used in WB.
- `MemRead` is generated in ID but used in MEM.
- `ALUSrc` is generated in ID but used in EX.
- `Branch` is generated in ID but used in EX (or IF, depending on the design).

The control signals are stored in the pipeline registers (ID/EX, EX/MEM, MEM/WB) along with the data. This is called **pipelined control**.

**Control signal propagation:**

```
Instruction → ID Stage Control → ID/EX Register → EX Stage Control → EX/MEM Register → MEM Stage Control → MEM/WB Register → WB Stage Control
```

Each pipeline register holds only the control signals needed for the subsequent stages. For example, the ID/EX register holds `RegWrite`, `MemRead`, `MemWrite`, `ALUSrc`, `MemtoReg`, `Branch`, and `ALUOp` because all of these are needed in EX, MEM, or WB. The EX/MEM register holds `RegWrite`, `MemRead`, `MemWrite`, and `MemtoReg` because `ALUSrc` and `ALUOp` are no longer needed after EX. The MEM/WB register holds only `RegWrite` and `MemtoReg` because only WB needs them.

**Pipelined control vs. single-cycle control:**
- In single-cycle control, the control signals are generated and used in the same cycle.
- In pipelined control, the control signals are generated in ID and used in later cycles. This requires the control signals to be stored in pipeline registers.
- The control unit is the same combinational logic in both cases, but the pipelined processor adds the overhead of storing and propagating the signals.

**Hazard detection in the control unit:**

The control unit in a pipelined processor must also handle hazards. It detects data hazards (e.g., a load followed by a use) and generates stall signals. It detects control hazards (branches) and generates flush signals. These hazard detection and resolution mechanisms are added to the basic control logic.

#### Key concepts
- Pipelined datapath: PC, instruction memory, register file, ALU, data memory
- Pipeline registers: IF/ID, ID/EX, EX/MEM, MEM/WB
- Pipelined control: control signals generated in ID, used in later stages
- Control signal propagation through pipeline registers
- Control signal reduction: fewer signals needed in later stages
- Hazard detection and control integration
- Differences between single-cycle and pipelined control
- Datapath diagram and signal flow

#### Hands-on activity
Draw the complete datapath diagram for a 5-stage pipelined RISC processor. Label all components: PC, adders, instruction memory, register file, ALU, data memory, sign extension unit, multiplexers, and pipeline registers. For each instruction type (ADD, LW, SW, BEQ), trace the data flow through the pipeline and list which control signals are active in each stage. Then, show how the control signals are stored in each pipeline register. Identify which control signals can be dropped at each stage (e.g., ALUSrc is not needed after EX).

#### Assessment idea
Ask: "Why must the control signals be pipelined along with the data in a pipelined processor?" Answer: Because the control signals are generated in the ID stage when the instruction is decoded, but they are needed in later stages (EX, MEM, WB) to control the datapath. For example, `MemRead` is needed in the MEM stage to enable the data memory, but it is generated in the ID stage. Without pipelining the control signals, the MEM stage would not know whether to read memory until the next instruction is decoded, which is too late. The pipeline registers between stages hold both the data and the control signals, ensuring that each stage has the correct control information when it needs it. Then ask: "Why can some control signals be dropped at earlier pipeline stages, while others must be propagated all the way to WB?" Answer: Control signals are needed only in the stages where they control the datapath. `ALUSrc` controls the ALU input multiplexer in the EX stage, so it is not needed after EX. `MemRead` controls the data memory in the MEM stage, so it is needed through EX/MEM but not after MEM. `RegWrite` and `MemtoReg` control the register file write in the WB stage, so they must be propagated all the way to MEM/WB. By dropping unused signals at each stage, the pipeline registers can be smaller, saving area and power.

#### AI generation note
Create an animated datapath showing the flow of data and control signals through the pipeline. Show the control signals as colored flags that travel with the instruction through each stage. Show some flags being dropped at each stage as they are no longer needed. Show the pipeline registers as transfer stations that hold both data and flags. Show the hazard detection unit as a separate controller that monitors the pipeline and injects stall/flush signals. End with a reflection: "How would you modify the pipelined control to support out-of-order execution?"

---

### Chapter 4.3 — Pipeline Hazards: Structural, Data, and Control

#### Learning objectives
- Identify and classify the three types of pipeline hazards: structural, data, and control.
- Analyze data hazards: RAW (read-after-write), WAW (write-after-write), and WAR (write-after-read).
- Apply forwarding (bypassing) to resolve data hazards without stalling.
- Understand control hazards caused by branches and the techniques to mitigate them: branch prediction, delayed branches, and branch target buffers.

#### Detailed lesson content

Pipeline hazards are situations where the pipeline cannot execute the next instruction as scheduled because of a dependency or resource conflict. Hazards are the primary reason why real pipelines do not achieve the ideal speedup. There are three types of hazards:

**1. Structural Hazards:**

A structural hazard occurs when two instructions in the pipeline need the same hardware resource at the same time. For example, if the instruction memory and data memory are combined into a single memory unit (as in some simple designs), a load/store instruction in the MEM stage and an instruction fetch in the IF stage would conflict. One of them must stall.

Solutions to structural hazards:
- **Separate resources:** Use separate instruction memory and data memory (Harvard architecture). Modern processors use separate L1 instruction and data caches.
- **Pipeline the resource:** If a resource like the multiplier takes multiple cycles, pipeline it so that new operations can start every cycle.
- **Replicate the resource:** Add multiple memory ports or multiple ALUs so that multiple instructions can access the resource simultaneously.
- **Stall:** If none of the above is possible, stall one instruction until the resource is free.

**2. Data Hazards:**

A data hazard occurs when an instruction depends on the result of a previous instruction that has not yet been computed. There are three types of data hazards:

- **RAW (Read After Write):** The most common hazard. Instruction J tries to read a register before instruction I has written to it. For example:
  ```
  ADD R1, R2, R3    # I: writes R1
  SUB R4, R1, R5    # J: reads R1 (RAW hazard)
  ```
  Without forwarding, the SUB instruction must wait for the ADD to complete its WB stage before it can read R1 in its ID stage. This requires a 2-cycle stall.

- **WAW (Write After Write):** Instruction J writes to a register before instruction I writes to it. This can occur in out-of-order pipelines where instructions complete in a different order than they were issued. For example, in a pipelined floating-point unit where operations take different numbers of cycles.

- **WAR (Write After Read):** Instruction J writes to a register before instruction I reads it. This can also occur in out-of-order pipelines. For example, if a later instruction (in program order) is executed before an earlier instruction that reads the same register.

Solutions to data hazards:
- **Forwarding (Bypassing):** The most important technique. Instead of waiting for the result to be written to the register file, the result is forwarded directly from the output of one stage to the input of another stage. For a RAW hazard between ADD and SUB:
  - The ADD instruction computes the result in its EX stage.
  - The SUB instruction needs the result in its EX stage (two cycles later).
  - The result is forwarded from the EX/MEM pipeline register to the ALU input of the SUB instruction.
  - No stall is needed.

Forwarding paths:
- EX/MEM → EX (for the next instruction's EX stage)
- MEM/WB → EX (for the instruction after the next one's EX stage)
- MEM/WB → MEM (for load-use hazards)

Forwarding handles most RAW hazards in integer pipelines, but it cannot handle all cases. A **load-use hazard** occurs when a load instruction is immediately followed by an instruction that uses the loaded value:
```
LW R1, 0(R2)      # Load into R1
ADD R3, R1, R4    # Use R1 (load-use hazard)
```
The load instruction does not have the data until the end of the MEM stage. The ADD instruction needs the data at the beginning of its EX stage. Even with forwarding from MEM/WB, the ADD instruction is already in the EX stage when the data arrives. This requires a **1-cycle stall** (also called a **bubble** or **NOP**).

**3. Control Hazards:**

A control hazard (or branch hazard) occurs when the processor encounters a branch instruction and does not know which instruction to fetch next. In a 5-stage pipeline, the branch target is not known until the end of the ID stage (or EX stage, depending on the design). Meanwhile, the processor has already fetched the next sequential instruction(s). If the branch is taken, these fetched instructions are wrong and must be discarded.

The **branch penalty** is the number of cycles wasted when a branch is taken. In a simple 5-stage pipeline where the branch is resolved in the ID stage, the penalty is 1 cycle (the instruction in the IF stage must be discarded). If the branch is resolved in the EX stage, the penalty is 2 cycles. In deep pipelines like the Pentium 4, the branch penalty can be 20+ cycles.

Solutions to control hazards:
- **Stall:** Wait until the branch target is known before fetching the next instruction. This is simple but wastes cycles.
- **Branch Prediction:** Predict whether the branch will be taken or not taken. If the prediction is correct, there is no penalty. If incorrect, the mispredicted instructions are flushed. This is the dominant technique in modern processors.
- **Delayed Branch:** The instruction after the branch is always executed (the "delay slot"). The compiler fills the delay slot with a useful instruction. This was used in early MIPS processors but is less common today because it complicates exception handling and compiler optimization.
- **Branch Target Buffer (BTB):** A cache that stores the target addresses of recently taken branches. When a branch is fetched, the BTB is checked. If the branch is in the BTB, the target address is known immediately, and fetching can begin speculatively.

**Hazard summary table:**

| Hazard Type | Cause | Example | Solution |
|-------------|-------|---------|----------|
| Structural | Resource conflict | Two instructions need memory | Separate caches, replicate resources |
| RAW | Read before write | `ADD R1, R2, R3` followed by `SUB R4, R1, R5` | Forwarding (bypassing) |
| WAW | Write before write | Out-of-order floating-point | Register renaming |
| WAR | Write before read | Out-of-order execution | Register renaming |
| Load-use | Load followed by use | `LW R1, 0(R2)` then `ADD R3, R1, R4` | 1-cycle stall + forwarding |
| Control | Branch direction unknown | `BEQ R1, R2, target` | Branch prediction, BTB |

#### Key concepts
- Three hazard types: structural, data, control
- Structural hazard: resource conflict, solutions (separate, pipeline, replicate)
- RAW hazard: most common, forwarding from EX/MEM and MEM/WB
- WAW and WAR hazards: occur in out-of-order pipelines
- Load-use hazard: 1-cycle stall even with forwarding
- Control hazard: branch penalty, flush mispredicted instructions
- Branch prediction as the dominant solution
- Delayed branch and branch target buffer (BTB)
- Stall (bubble/NOP) as the fallback solution

#### Hands-on activity
Write a pipeline simulator in Python (or pseudocode) for a 5-stage pipeline. The simulator should accept a sequence of instructions and simulate their execution cycle by cycle. Implement the following features:
1. Basic pipeline execution without hazards (show the timing diagram).
2. RAW hazard detection with forwarding (EX/MEM → EX and MEM/WB → EX).
3. Load-use hazard detection with a 1-cycle stall.
4. Control hazard with a 1-cycle stall for branches (no prediction).

Test the simulator with this sequence:
```
ADD R1, R2, R3
SUB R4, R1, R5
LW R6, 0(R1)
AND R7, R6, R8
BEQ R1, R2, label
OR R9, R10, R11
label: ADD R12, R13, R14
```

Show the timing diagram for each case. Count the total cycles and calculate the CPI for each configuration. Then extend the simulator to implement a simple branch predictor (always predict not-taken) and observe how it affects the cycle count.

#### Assessment idea
Ask: "In a 5-stage pipeline, why does forwarding from EX/MEM to EX eliminate the RAW hazard for `ADD R1, R2, R3` followed by `SUB R4, R1, R5`, but forwarding from MEM/WB to EX does not eliminate the load-use hazard for `LW R1, 0(R2)` followed by `ADD R3, R1, R4`?" Answer: For the ADD-SUB pair, the ADD produces its result at the end of the EX stage (cycle 3), and the SUB needs the result at the beginning of its EX stage (cycle 4). The EX/MEM pipeline register holds the result at the end of cycle 3, and forwarding can deliver it to the SUB's EX stage at the start of cycle 4. For the LW-ADD pair, the LW does not produce its result until the end of the MEM stage (cycle 4), but the ADD enters its EX stage at the start of cycle 4. Even though the result is available in the MEM/WB register at the end of cycle 4, the ADD has already passed its EX stage. The ADD must stall for one cycle to allow the MEM/WB forwarding to reach it in the next cycle. Then ask: "Why is a branch target buffer (BTB) more effective than simply predicting the branch direction for reducing the branch penalty?" Answer: Even if you correctly predict that a branch is taken, you still need to know the target address to start fetching from it. Without a BTB, the target address is not known until the branch is decoded/executed. The BTB stores the target address from previous executions, so as soon as the branch is fetched, the processor can look up the target address and start fetching speculatively, reducing the branch penalty to near zero for correctly predicted branches.

#### AI generation note
Create a 10-minute animated lesson. Show the three hazards as traffic problems: structural = two cars trying to use the same lane, data = a car trying to read a sign that hasn't been painted yet, control = a fork in the road with no sign. Show forwarding as a bridge that carries data directly from one stage to another, bypassing the register file. Show a load-use hazard as a bridge that is too short to reach the next stage. Show a branch misprediction as a car going down the wrong road and having to turn back. Show the timing diagram as a Gantt chart with instructions on rows and cycles on columns. Show stalls as empty gaps in the chart. Show the branch predictor as a GPS that guesses the route. Include a live coding segment of the pipeline simulator. End with a reflection: "What would be the most effective way to reduce the impact of branch mispredictions in a 20-stage pipeline?"

---

### Chapter 4.4 — Forwarding (Bypassing) and Hazard Detection

#### Learning objectives
- Implement forwarding paths in a 5-stage pipeline datapath.
- Design the hazard detection unit that identifies when forwarding is needed.
- Understand the limitations of forwarding and when stalls are unavoidable.
- Analyze the performance impact of forwarding on pipeline CPI.

#### Detailed lesson content

Forwarding (also called bypassing) is the most important technique for resolving data hazards in a pipelined processor. It allows the result of an instruction to be used by a subsequent instruction before it is written to the register file.

**Forwarding paths:**

In a 5-stage pipeline, there are three main forwarding paths:

1. **EX/MEM → EX (Forward A):** The result of an instruction in the EX stage is forwarded to the EX stage of the next instruction. This handles the case where the next instruction needs the result of the current instruction.
   - When: The instruction in EX/MEM has `RegWrite = 1` and its destination register matches the source register of the instruction in EX.
   - Source: EX/MEM pipeline register (ALU result).
   - Destination: ALU input of the instruction in EX.

2. **MEM/WB → EX (Forward B):** The result of an instruction that has completed MEM is forwarded to the EX stage of the instruction currently in EX. This handles the case where the instruction two cycles behind needs the result.
   - When: The instruction in MEM/WB has `RegWrite = 1` and its destination register matches the source register of the instruction in EX.
   - Source: MEM/WB pipeline register (ALU result or memory data).
   - Destination: ALU input of the instruction in EX.

3. **MEM/WB → MEM (Forward C):** Used for store instructions that need the value of a register that was just loaded. For example:
   ```
   LW R1, 0(R2)    # Load into R1
   SW R1, 0(R3)    # Store R1 (needs forwarding from MEM/WB to MEM)
   ```
   - When: The instruction in MEM/WB has `RegWrite = 1` and its destination register matches the source register of the store instruction in MEM.
   - Source: MEM/WB pipeline register.
   - Destination: Data memory write data input.

**Forwarding multiplexers:**

The ALU inputs in the EX stage have multiplexers that select between:
- The register file output (normal case, no forwarding).
- The EX/MEM pipeline register (Forward A).
- The MEM/WB pipeline register (Forward B).

The select signals for these multiplexers are generated by the **hazard detection unit** (also called the forwarding unit).

**Hazard detection unit logic:**

The hazard detection unit compares the destination register of instructions in later stages with the source registers of the instruction in EX:

```
ForwardA = 
  if (EX/MEM.RegWrite AND EX/MEM.Rd != 0 AND EX/MEM.Rd == ID/EX.Rs1) then "01" (EX/MEM)
  else if (MEM/WB.RegWrite AND MEM/WB.Rd != 0 AND MEM/WB.Rd == ID/EX.Rs1) then "10" (MEM/WB)
  else "00" (no forwarding)

ForwardB = 
  if (EX/MEM.RegWrite AND EX/MEM.Rd != 0 AND EX/MEM.Rd == ID/EX.Rs2) then "01" (EX/MEM)
  else if (MEM/WB.RegWrite AND MEM/WB.Rd != 0 AND MEM/WB.Rd == ID/EX.Rs2) then "10" (MEM/WB)
  else "00" (no forwarding)
```

Note: If both EX/MEM and MEM/WB could forward, the EX/MEM forwarding takes priority because it is the most recent result.

**Limitations of forwarding:**

Forwarding cannot handle all data hazards. The most important exception is the **load-use hazard**:
```
LW R1, 0(R2)      # Load into R1 (data available at end of MEM)
ADD R3, R1, R4    # Use R1 (needs data at start of EX)
```
The load instruction produces its data at the end of the MEM stage. The ADD instruction needs the data at the start of the EX stage. Even with forwarding from MEM/WB, the ADD instruction is already in the EX stage when the data arrives. The ADD instruction must stall for one cycle.

**Hazard detection for load-use:**
```
if (ID/EX.MemRead AND (ID/EX.Rd == IF/ID.Rs1 OR ID/EX.Rd == IF/ID.Rs2)) then
  Stall = 1
  Insert bubble in pipeline
```

When a load-use hazard is detected, the pipeline is stalled for one cycle. The instruction in ID is held, the instruction in IF is not fetched, and a bubble (NOP) is inserted into the EX stage.

**Performance impact:**

Forwarding reduces the CPI penalty for RAW hazards from 2 cycles to 0 cycles for most cases. Without forwarding, a typical workload might have a CPI of 1.5 due to stalls. With forwarding, the CPI drops to 1.1–1.2. The load-use stall adds 1 cycle for each load-use pair. If load-use pairs occur frequently (e.g., in pointer-chasing code), the CPI can increase significantly.

#### Key concepts
- Forwarding paths: EX/MEM→EX, MEM/WB→EX, MEM/WB→MEM
- Forwarding multiplexers at ALU inputs
- Hazard detection unit logic
- Priority of EX/MEM forwarding over MEM/WB
- Load-use hazard: 1-cycle stall, unavoidable
- Hazard detection for load-use: check ID/EX.MemRead and register match
- Pipeline stall: hold ID, insert bubble in EX
- Performance impact: CPI reduction from 1.5 to 1.1–1.2
- Forwarding limitations and stall requirements

#### Hands-on activity
Implement the forwarding unit and hazard detection unit in a Verilog or VHDL model (or draw the circuit diagram on paper). Show the logic for ForwardA and ForwardB using multiplexers and comparators. Then, simulate the following instruction sequence cycle by cycle, showing the forwarding path used for each hazard:
```
ADD R1, R2, R3
SUB R4, R1, R5
AND R6, R1, R7
OR R8, R4, R9
LW R10, 0(R1)
ADD R11, R10, R12
```

Identify which forwarding path (Forward A, B, or C) is used for each hazard. Calculate the total cycles with forwarding and compare with the total cycles without forwarding. Show that the load-use hazard requires a stall even with forwarding.

#### Assessment idea
Ask: "Why does the hazard detection unit prioritize EX/MEM forwarding over MEM/WB forwarding when both could apply?" Answer: Because EX/MEM contains the result of the most recent instruction (the instruction that is one stage ahead of MEM/WB). If two previous instructions write to the same register, the one in EX/MEM is the most recent in program order, and its result should be used. For example:
```
ADD R1, R2, R3
SUB R1, R4, R5
AND R6, R1, R7
```
For the AND instruction, both the ADD (in MEM/WB) and the SUB (in EX/MEM) write to R1. The SUB is more recent, so the AND should use the SUB's result from EX/MEM, not the ADD's result from MEM/WB. The forwarding logic checks EX/MEM first and only uses MEM/WB if EX/MEM does not match. Then ask: "Why can't forwarding eliminate the load-use stall, and what techniques can reduce the frequency of load-use stalls?" Answer: Forwarding cannot eliminate the load-use stall because the load instruction produces its data at the end of the MEM stage, but the dependent instruction needs the data at the beginning of its EX stage. The dependent instruction is already in the EX stage when the data becomes available, so it must stall for one cycle. Techniques to reduce load-use stalls include: (1) compiler scheduling — the compiler can insert an independent instruction between the load and the use to fill the delay slot; (2) speculative load execution — in out-of-order processors, loads can be moved earlier in the instruction stream; (3) value prediction — the processor guesses the loaded value and executes speculatively; (4) load-store optimization — the compiler can reorder instructions to separate loads from their uses. These techniques reduce the frequency of load-use stalls but cannot eliminate them entirely in an in-order pipeline.

#### AI generation note
Create a 10-minute animated lesson. Show the forwarding paths as express highways that bypass the register file. Show the hazard detection unit as a traffic control center that monitors all vehicles. Show the ALU inputs as intersections with three possible sources: the register file, the EX/MEM highway, and the MEM/WB highway. Show the load-use hazard as a delivery that arrives at the destination after the recipient has already left. Show the stall as a red light that stops the recipient for one cycle. Show the timing diagram with and without forwarding. Show the CPI reduction as a speedometer. End with a reflection: "Why is forwarding the single most important optimization for pipelined processors?"

---

### Chapter 4.5 — Load-Use Hazards and Pipeline Stalls

#### Learning objectives
- Explain why the load-use hazard is the only data hazard that cannot be resolved by forwarding alone.
- Implement the hazard detection logic that generates a stall for load-use hazards.
- Calculate the performance impact of load-use stalls on pipeline CPI.
- Understand compiler techniques for reducing load-use stalls through instruction scheduling.

#### Detailed lesson content

The load-use hazard is the most significant remaining hazard in a pipelined processor with forwarding. Unlike other RAW hazards, it cannot be fully resolved by forwarding because of the timing mismatch between the load's data availability and the dependent instruction's data need.

**Why the load-use hazard requires a stall:**

In a 5-stage pipeline:
- Cycle 1: LW is in IF
- Cycle 2: LW is in ID
- Cycle 3: LW is in EX (address calculation)
- Cycle 4: LW is in MEM (data read from memory). Data is available at the **end** of cycle 4.
- Cycle 5: LW is in WB (data written to register file).

The dependent instruction (e.g., ADD) needs the loaded data at the **beginning** of its EX stage. If the ADD immediately follows the LW:
- Cycle 1: ADD is in IF
- Cycle 2: ADD is in ID
- Cycle 3: ADD is in EX (needs R1, but LW is in EX — not yet in MEM)

By the time the data is available in MEM/WB at the end of cycle 4, the ADD has already passed its EX stage in cycle 3. The ADD must be stalled for one cycle so that the data can be forwarded from MEM/WB to the ADD's EX stage in cycle 4.

**Stall implementation:**

When the hazard detection unit detects a load-use hazard, it:
1. Stalls the IF and ID stages (PC does not increment, instruction in ID is held).
2. Inserts a bubble (NOP) into the EX stage.
3. Allows the MEM and WB stages to proceed normally.

This effectively freezes the pipeline for one cycle. After the stall, the ADD is re-issued in EX, and the data from LW can be forwarded from MEM/WB.

**Performance impact:**

If load-use pairs occur with frequency p, the CPI impact is:
```
CPI = CPI_base + p × 1
```

For example, if 20% of instructions are loads and 50% of loads are followed by a dependent instruction, then p = 0.20 × 0.50 = 0.10. The CPI increases by 0.10, from 1.0 to 1.10.

In pointer-chasing code (e.g., linked list traversal, tree traversal), nearly every load is followed by a use, so p approaches the load frequency (e.g., 0.25–0.30). This can significantly reduce performance.

**Compiler techniques to reduce load-use stalls:**

The compiler can reduce load-use stalls by **instruction scheduling** (also called code motion or pipeline scheduling). The compiler reorders instructions so that independent instructions are placed between the load and the use.

For example, before scheduling:
```
LW R1, 0(R2)    # Load
ADD R3, R1, R4  # Use (load-use hazard, 1-cycle stall)
SUB R5, R6, R7  # Independent
```

After scheduling:
```
LW R1, 0(R2)    # Load
SUB R5, R6, R7  # Independent instruction moved here
ADD R3, R1, R4  # Use (no stall, data forwarded from MEM/WB)
```

The compiler can also use **loop unrolling** to create more independent instructions within a loop body, giving the scheduler more opportunities to fill load-use delay slots.

**Hardware techniques:**
- **Speculative load execution:** In out-of-order processors, loads can be scheduled earlier than their program order, reducing the load-use delay.
- **Load buffering:** Some processors buffer the load data and allow the dependent instruction to read from the buffer before the writeback stage.
- **Value prediction:** The processor predicts the loaded value and executes the dependent instruction speculatively. If the prediction is wrong, the instruction is replayed.

#### Key concepts
- Load-use hazard timing: data available at end of MEM, needed at start of EX
- Stall mechanism: freeze IF/ID, insert bubble in EX
- Hazard detection logic: `ID/EX.MemRead AND (ID/EX.Rd == IF/ID.Rs1 OR ID/EX.Rd == IF/ID.Rs2)`
- CPI impact: CPI = base + p × 1, where p is load-use frequency
- Pointer-chasing code and high load-use frequency
- Compiler instruction scheduling to fill delay slots
- Loop unrolling for more scheduling opportunities
- Hardware techniques: speculative loads, load buffering, value prediction
- Load-use stall as the primary bottleneck in in-order pipelines

#### Hands-on activity
Write a simple compiler pass (in Python or pseudocode) that performs instruction scheduling to eliminate load-use stalls. The pass should:
1. Scan a sequence of instructions and identify load-use pairs.
2. Search for independent instructions that can be moved between the load and the use.
3. Reorder the instructions to fill the delay slot.
4. Handle cases where no independent instruction is available (insert NOP or keep stall).

Test the scheduler on the following sequences:
```
Sequence A:
LW R1, 0(R2)
ADD R3, R1, R4
SUB R5, R6, R7
AND R8, R9, R10

Sequence B:
LW R1, 0(R2)
ADD R3, R1, R4
SUB R5, R1, R6

Sequence C (loop body):
LW R1, 0(R2)
ADD R3, R1, R4
LW R5, 0(R6)
ADD R7, R5, R8
```

Show the scheduled code for each sequence and count the number of load-use stalls eliminated. Discuss the limitations of compiler scheduling when the code has few independent instructions.

#### Assessment idea
Ask: "A compiler schedules instructions to eliminate load-use stalls. In a loop body, there are 4 instructions: a load, an add (dependent on the load), another load, and a subtract (dependent on the second load). Can the compiler eliminate all load-use stalls, and if not, why?" Answer: The compiler cannot eliminate all load-use stalls because there are no independent instructions available to fill the delay slots. The sequence is:
```
LW R1, 0(R2)    # Load 1
ADD R3, R1, R4  # Dependent on load 1
LW R5, 0(R6)    # Load 2
SUB R7, R5, R8  # Dependent on load 2
```
There are no independent instructions between the loads and their dependent uses. The compiler could unroll the loop to create more instructions, but within this basic block, the stalls are unavoidable. This is a common problem in pointer-chasing code and deeply dependent chains. The only solutions are hardware techniques (out-of-order execution, value prediction) or algorithmic changes to reduce dependencies. Then ask: "Why does loop unrolling help reduce load-use stalls?" Answer: Loop unrolling duplicates the loop body, creating more instructions that the compiler can reorder. For example, if a loop body has only 2 instructions (a load and a dependent add), there is no room to schedule. After unrolling twice, the body has 4 instructions: load1, add1, load2, add2. The compiler can now schedule the independent instructions (load2 and add1) between load1 and add1, eliminating the load-use stall. Unrolling also reduces loop overhead (branch instructions, counter increments), providing additional performance benefits. The trade-off is increased code size and potential register pressure.

#### AI generation note
Create a 10-minute animated lesson. Show the load-use hazard as a train schedule where the cargo arrives at the station after the next train has already departed. Show the stall as the next train waiting at the station for one cycle. Show the compiler as a scheduler who rearranges the train schedule to fill gaps. Show loop unrolling as duplicating the schedule to create more flexibility. Show pointer-chasing as a chain of trains where each train depends on the cargo from the previous one. Show the CPI impact as a bar chart with and without load-use stalls. Show hardware techniques (speculative execution) as a crystal ball that predicts the cargo. End with a reflection: "Is it better to solve load-use stalls in hardware or in software?"

---

### Chapter 4.6 — Control Hazards and Branch Resolution

#### Learning objectives
- Calculate the branch penalty for different branch resolution stages in a pipeline.
- Implement branch resolution in the ID stage vs. the EX stage and compare their trade-offs.
- Understand the delayed branch mechanism and its compiler requirements.
- Describe the branch target buffer (BTB) and how it reduces the branch penalty.

#### Detailed lesson content

Control hazards are caused by branch instructions. When a branch is fetched, the processor does not know whether the branch will be taken or where the target is. This uncertainty creates a delay in fetching subsequent instructions.

**Branch penalty by resolution stage:**

The branch penalty depends on when the branch direction is known:
- **Resolved in ID stage:** The branch condition is checked during decode. The next instruction is fetched in IF. If the branch is taken, the instruction in IF is wrong. Penalty = 1 cycle (flush the IF instruction).
- **Resolved in EX stage:** The branch target is computed during execute. The next two instructions are fetched in IF and ID. If the branch is taken, both are wrong. Penalty = 2 cycles (flush IF and ID instructions).
- **Resolved in MEM stage:** Rare, but if the branch condition depends on a memory load. The next three instructions are fetched. Penalty = 3 cycles.

In a deep pipeline (e.g., 20 stages), the branch may not be resolved until much later, and the penalty can be 10–20 cycles. This is why branch prediction is critical.

**Branch resolution in ID vs. EX:**

Resolving branches in the ID stage reduces the penalty from 2 cycles to 1 cycle, but it requires additional hardware in the ID stage:
- A comparator to check the branch condition (e.g., equal, less than).
- An adder to compute the branch target (PC + sign-extended immediate).
- This adds to the ID stage delay, potentially increasing the clock cycle time.

Trade-offs:
- **ID resolution:** Lower branch penalty (1 cycle), but longer ID stage (may increase clock cycle time).
- **EX resolution:** Shorter ID stage (faster clock), but higher branch penalty (2 cycles).

For simple RISC pipelines, ID resolution is preferred because the penalty reduction outweighs the slight increase in cycle time. For deep pipelines, the branch is resolved in a dedicated branch unit that may be in its own pipeline stage.

**Delayed branch:**

The delayed branch is a mechanism where the instruction immediately after the branch (the delay slot) is always executed, regardless of whether the branch is taken. The compiler fills the delay slot with an instruction that is useful and independent of the branch direction.

Example (MIPS-style):
```
BEQ R1, R2, label    # Branch if equal
ADD R3, R4, R5       # Delay slot: always executed
label: SUB R6, R7, R8
```

If the branch is taken, the ADD executes before the SUB. If the branch is not taken, the ADD executes anyway. The compiler must ensure the ADD is safe to execute in both cases.

Advantages:
- No branch penalty (the delay slot is always filled with useful work).
- Simple hardware (no flushing needed).

Disadvantages:
- The compiler must find an independent instruction to fill the delay slot. If none is available, a NOP must be inserted, wasting the slot.
- Exception handling is complicated because the delay slot instruction is part of the branch's atomic unit.
- Modern processors with branch prediction make delayed branches less useful.

Delayed branches were used in early MIPS and SPARC processors but are rarely used today. RISC-V does not use delayed branches.

**Branch Target Buffer (BTB):**

The BTB is a cache that stores the target addresses of recently taken branches. When a branch is fetched, the processor looks up the PC in the BTB.
- **Hit:** The BTB contains the target address. The processor can start fetching from the target immediately, before the branch is decoded.
- **Miss:** The BTB does not contain the branch. The processor must wait until the branch is decoded/executed to know the target.

BTB organization:
- **Index:** The lower bits of the PC.
- **Tag:** The upper bits of the PC.
- **Data:** The target address and a prediction bit (taken/not taken).
- **Size:** Typically 512–4096 entries.

The BTB reduces the branch penalty to near zero for correctly predicted taken branches because the target address is known immediately. However, if the prediction is wrong, the penalty is still incurred.

**Branch penalty summary:**

| Resolution Stage | Penalty (no prediction) | Penalty (with BTB, correct) | Penalty (with BTB, wrong) |
|------------------|------------------------|----------------------------|--------------------------|
| ID | 1 cycle | 0 cycles | 1 cycle |
| EX | 2 cycles | 0 cycles | 2 cycles |
| MEM | 3 cycles | 0 cycles | 3 cycles |

#### Key concepts
- Branch penalty depends on resolution stage
- ID resolution: 1-cycle penalty, longer ID stage
- EX resolution: 2-cycle penalty, shorter ID stage
- Delayed branch: always-executed delay slot, compiler fills slot
- Delayed branch advantages and disadvantages
- Branch Target Buffer (BTB): cache of branch targets
- BTB hit vs. miss
- BTB reduces penalty to 0 for correctly predicted taken branches
- Trade-offs between branch resolution stage and clock cycle time

#### Hands-on activity
Modify the pipeline simulator from Chapter 4.3 to support branches resolved in the EX stage. Then modify it again to support branches resolved in the ID stage. Test both versions with the following branch-heavy sequence:
```
ADD R1, R2, R3
BEQ R1, R2, target1    # Taken
ADD R4, R5, R6
SUB R7, R8, R9
target1: AND R10, R11, R12
BEQ R10, R11, target2  # Not taken
OR R13, R14, R15
XOR R16, R17, R18
target2: LW R19, 0(R20)
```

Show the timing diagram for both versions. Count the total cycles and calculate the CPI. Then implement a BTB with 4 entries and show how it reduces the penalty for repeated branches. Discuss the trade-off between ID resolution (faster branch handling but longer cycle time) and EX resolution (shorter cycle time but more stalls).

#### Assessment idea
Ask: "A processor designer must choose between resolving branches in the ID stage (1-cycle penalty) or the EX stage (2-cycle penalty). The ID stage comparator and target adder increase the critical path by 0.3 ns, increasing the clock cycle from 1.0 ns to 1.3 ns. A workload has 20% branches, 50% of which are taken. Which design is better?" Answer: For ID resolution: clock cycle = 1.3 ns, branch penalty = 1 cycle. Branch CPI impact = 0.20 × 0.50 × 1 = 0.10. Total CPI = 1.10. Execution time per instruction = 1.10 × 1.3 = 1.43 ns. For EX resolution: clock cycle = 1.0 ns, branch penalty = 2 cycles. Branch CPI impact = 0.20 × 0.50 × 2 = 0.20. Total CPI = 1.20. Execution time per instruction = 1.20 × 1.0 = 1.20 ns. The EX resolution is better despite the higher penalty because the shorter clock cycle more than compensates. This demonstrates that clock cycle time is often more important than the branch penalty for simple pipelines. However, with branch prediction (which makes the penalty rare), the difference becomes smaller. Then ask: "Why did modern processors abandon the delayed branch mechanism in favor of branch prediction?" Answer: Delayed branches require the compiler to fill the delay slot with a useful instruction. This is difficult when the branch is unpredictable or when there are few independent instructions. If the compiler cannot fill the slot, a NOP is inserted, wasting the cycle. Additionally, delayed branches complicate exception handling because the delay slot instruction is architecturally tied to the branch. Modern processors have sophisticated branch predictors that achieve 95%+ accuracy, making the branch penalty rare. When the prediction is correct, there is no penalty. When wrong, the penalty is handled by flushing the pipeline. The hardware complexity of branch prediction is preferred over the compiler complexity and limitations of delayed branches.

#### AI generation note
Create a 10-minute animated lesson. Show a branch as a fork in a road. Show ID resolution as a sign that appears early (only 1 car goes the wrong way). Show EX resolution as a sign that appears later (2 cars go the wrong way). Show the delayed branch as a car that always drives straight through the fork before turning. Show the BTB as a GPS that knows the destination before the fork is reached. Show the timing diagram for each case with cars representing instructions. Show the penalty as wrong-way cars being removed. Show the CPI calculation as a race result. End with a reflection: "What is the most effective way to handle branches in a processor with a 20-stage pipeline?"

---

### Chapter 4.7 — Deep Pipelines and Superpipelining

#### Learning objectives
- Explain the concept of superpipelining and how it differs from the basic 5-stage pipeline.
- Analyze the trade-offs between pipeline depth, clock frequency, and branch penalty.
- Describe the Pentium 4's NetBurst architecture as a case study in deep pipelining.
- Understand the limits of pipeline depth and why processors returned to moderate depths.

#### Detailed lesson content

Superpipelining is the technique of dividing the instruction execution into more stages than the classic 5-stage pipeline. The goal is to reduce the work per stage, allowing a shorter clock cycle and higher clock frequency. For example, a 10-stage pipeline might divide the EX stage into two stages (integer EX1 and EX2) and the MEM stage into two stages (address calculation and data access).

**Benefits of deep pipelines:**
- **Higher clock frequency:** Each stage does less work, so the clock cycle can be shorter. If a 5-stage pipeline has a cycle time of 1.0 ns, a 10-stage pipeline with the same total work might have a cycle time of 0.55 ns (not exactly 0.5 because of pipeline register overhead).
- **Higher throughput:** With a shorter clock cycle, more instructions are completed per unit time (assuming IPC remains similar).

**Costs of deep pipelines:**
- **Increased branch penalty:** In a 5-stage pipeline, the branch penalty is 1–2 cycles. In a 20-stage pipeline, the branch penalty can be 15–20 cycles because there are more instructions in flight after the branch.
- **Increased pipeline fill time:** The pipeline takes longer to fill (N cycles for an N-stage pipeline), reducing throughput for short programs.
- **More pipeline registers:** Each stage boundary requires pipeline registers, which consume area and power.
- **More complex hazard detection:** With more stages, there are more forwarding paths and more opportunities for hazards.
- **Diminishing returns:** As stages become very short, the pipeline register overhead (setup time, hold time, propagation delay) becomes a significant fraction of the cycle time, reducing the benefit.

**The Pentium 4 case study:**

The Intel Pentium 4 (2000–2008) pushed deep pipelining to the extreme with its **NetBurst** architecture:
- **Pipeline depth:** 20 stages (later Prescott increased to 31 stages).
- **Clock frequency:** Up to 3.8 GHz.
- **Goal:** Maximize clock frequency to achieve high performance.

The Pentium 4's approach was based on the assumption that clock frequency scaling would continue indefinitely (as it had in the 1990s). However, the design faced severe problems:
- **Branch misprediction penalty:** With a 20-stage pipeline, a mispredicted branch wasted 19 cycles of work. On branch-heavy code, this made the processor slower than its predecessor (Pentium III).
- **Power consumption:** The high clock frequency and deep pipeline consumed over 100W, making cooling difficult.
- **Memory latency:** The pipeline could execute instructions very fast, but memory latency did not scale. The processor spent many cycles waiting for cache misses.
- **IPC limitations:** The NetBurst architecture had limited instruction-level parallelism (only 3-wide issue), so it could not keep the deep pipeline full.

Intel abandoned the Pentium 4 and returned to the **Core architecture** (2006), which used a shorter pipeline (14 stages in Core 2, 14–19 stages in modern Core processors) with a focus on IPC rather than raw frequency. The Core architecture was based on the Pentium M (a mobile processor derived from the Pentium III), which had a shorter, more efficient pipeline.

**Lessons from the Pentium 4:**
- Deep pipelines are effective only if branch prediction is extremely accurate and the workload has high ILP.
- Power consumption scales with frequency, making high-frequency designs unsustainable.
- IPC matters more than frequency for most workloads.
- Moderate pipeline depths (10–20 stages) are the sweet spot for modern processors.

**Modern pipeline depths:**
- **Intel Core (Skylake, Alder Lake):** 14–20 stages.
- **AMD Zen (Zen 3, Zen 4):** 13–19 stages.
- **ARM Cortex-A78:** 13 stages.
- **Apple M1/M2:** ~16 stages (estimated).

These processors balance clock frequency with branch penalty and power consumption. They use aggressive branch prediction, large caches, and out-of-order execution to keep the pipeline full despite moderate depths.

#### Key concepts
- Superpipelining: more stages than the classic 5-stage pipeline
- Benefits: higher clock frequency, higher throughput
- Costs: increased branch penalty, pipeline fill time, area, power, complexity
- Pentium 4 NetBurst: 20-stage pipeline, 3.8 GHz, high branch penalty
- Reasons for Pentium 4 failure: branch mispredictions, power, memory latency, limited IPC
- Return to moderate pipelines with Intel Core architecture
- Pipeline register overhead and diminishing returns
- Modern pipeline depths: 10–20 stages
- Sweet spot: balance of frequency, IPC, power, and branch penalty

#### Hands-on activity
Research the pipeline depth, issue width, and branch prediction accuracy of three processors: Intel Pentium 4 (Prescott), Intel Core i7-4770K (Haswell), and AMD Ryzen 9 5900X (Zen 3). For each processor, calculate the theoretical branch misprediction penalty (number of stages after the branch decode/execute stage). Assuming a branch frequency of 20% and a misprediction rate of 5%, calculate the CPI impact of branch mispredictions for each processor. Discuss why the Pentium 4's deep pipeline was a disadvantage despite its high clock frequency, and why modern processors use moderate depths.

#### Assessment idea
Ask: "The Pentium 4 had a 20-stage pipeline and ran at 3.8 GHz. The Pentium III had a 10-stage pipeline and ran at 1.4 GHz. For a branch-heavy workload with 20% branches and 10% misprediction rate, which processor is faster, and why?" Answer: Pentium 4: cycle time = 1/3.8 GHz = 0.263 ns. Branch penalty ≈ 19 cycles (20-stage pipeline minus the branch stage). CPI impact = 0.20 × 0.10 × 19 = 0.38. CPI = 1.38. Execution time per instruction = 1.38 × 0.263 = 0.363 ns. Pentium III: cycle time = 1/1.4 GHz = 0.714 ns. Branch penalty ≈ 9 cycles. CPI impact = 0.20 × 0.10 × 9 = 0.18. CPI = 1.18. Execution time per instruction = 1.18 × 0.714 = 0.843 ns. The Pentium 4 is faster for this workload despite the high branch penalty because its clock frequency advantage outweighs the penalty. However, if the misprediction rate increases to 15%, the Pentium 4's CPI impact becomes 0.20 × 0.15 × 19 = 0.57, CPI = 1.57, execution time = 0.413 ns. The Pentium III's CPI impact becomes 0.20 × 0.15 × 9 = 0.27, CPI = 1.27, execution time = 0.907 ns. The Pentium 4 is still faster, but the gap narrows. For very branch-heavy workloads with poor predictability, the Pentium 4's deep pipeline became a liability. Then ask: "Why do modern processors not use pipelines deeper than 20 stages?" Answer: Because the costs outweigh the benefits beyond a certain point. The branch penalty becomes too large, making the processor vulnerable to mispredictions. The pipeline register overhead consumes significant area and power. The memory latency gap (DRAM access takes hundreds of cycles) means that the processor will stall frequently regardless of pipeline depth. Modern processors have found that 10–20 stages is the optimal range, balancing clock frequency with branch penalty and power. Instead of deeper pipelines, they use wider issue (4–8 instructions per cycle), out-of-order execution, and larger caches to improve performance.

#### AI generation note
Create a 10-minute animated lesson. Show a pipeline as a series of workers. Show a 5-stage pipeline as 5 workers each doing a lot of work slowly. Show a 20-stage pipeline as 20 workers each doing a little work quickly. Show the clock as a drumbeat that beats faster for the 20-stage pipeline. Show a branch misprediction as a wrong turn that forces 20 workers to throw away their work. Show the Pentium 4 as a factory that runs at high speed but wastes a lot of work. Show the Intel Core as a factory that runs at moderate speed but wastes less work. Show power consumption as heat: the Pentium 4 glows red, the Core glows orange. Show modern processors as optimized factories with 14–16 workers. End with a reflection: "What is the optimal pipeline depth for a processor running AI inference workloads?"

---

### Chapter 4.8 — Pipeline Exceptions and Precise Interrupts

#### Learning objectives
- Explain how exceptions are handled in a pipelined processor.
- Implement a mechanism for precise exceptions in a 5-stage pipeline.
- Understand the difference between precise and imprecise exceptions.
- Describe how modern processors handle exceptions in deep and out-of-order pipelines.

#### Detailed lesson content

Exceptions in a pipelined processor are challenging because multiple instructions are in flight simultaneously. When an exception occurs, the processor must ensure that:
1. All instructions before the excepting instruction are completed.
2. No instructions after the excepting instruction modify the architectural state.
3. The processor can resume execution after the exception is handled.

This is called a **precise exception** (or precise interrupt). If the exception is not precise, the architectural state is inconsistent, making debugging and recovery impossible.

**Handling exceptions in a 5-stage pipeline:**

In a simple 5-stage pipeline, exceptions can be detected in each stage:
- **IF stage:** Page fault on instruction fetch, instruction access violation.
- **ID stage:** Illegal instruction, privilege violation.
- **EX stage:** Arithmetic overflow, divide-by-zero.
- **MEM stage:** Page fault on data access, data access violation, misaligned access.
- **WB stage:** None (no exceptions occur in writeback).

The processor must handle exceptions in program order, even if they are detected out of order. For example, if instruction I (in EX) causes a divide-by-zero, and instruction J (in IF) causes a page fault, the divide-by-zero must be handled first because it is earlier in program order.

**Mechanism for precise exceptions in a 5-stage pipeline:**

1. **Exception detection:** Each stage has an exception flag that is set if an exception occurs in that stage. The exception flag is passed down the pipeline through the pipeline registers.

2. **Exception prioritization:** When multiple exceptions are in the pipeline, the one from the earliest instruction (in program order) takes priority. This is typically done by comparing the instruction PC or pipeline stage.

3. **Pipeline flush:** When the exception reaches the WB stage (or the latest stage where the instruction can modify state), the processor flushes all instructions in the pipeline and transfers control to the exception handler.

4. **State saving:** The processor saves the PC of the excepting instruction (for faults) or the next instruction (for traps) and the processor status register.

5. **Handler execution:** The exception handler runs.

6. **Return:** The handler returns using an exception return instruction, which restores the saved state.

**Preventing state modification by flushed instructions:**

The key to precise exceptions is ensuring that no instruction after the excepting instruction writes to the register file or memory. This is done by:
- **Disabling writes in later stages:** When an exception is detected, the write-enable signals for all subsequent instructions are disabled.
- **Using a pipeline flush signal:** A global flush signal is asserted that clears the pipeline registers and prevents any writes.

**Exceptions in deep pipelines:**

In deep pipelines, the same principles apply, but there are more stages to flush. The exception must be propagated through all stages, and the flush must clear all pipeline registers. The latency to handle an exception increases with pipeline depth.

**Exceptions in out-of-order pipelines:**

Out-of-order pipelines handle exceptions using the **reorder buffer (ROB)**. The ROB ensures that instructions commit (write their results) in program order. If an exception occurs, the ROB:
1. Marks the excepting instruction in the ROB.
2. Prevents all instructions after the excepting instruction from committing.
3. Flushes all uncommitted instructions from the pipeline.
4. Restores the architectural state to the point before the excepting instruction.

This is discussed in detail in Module 6.

**Imprecise exceptions:**

Some processors (especially older vector processors and some embedded processors) do not support precise exceptions. Instead, they handle exceptions imprecisely: the processor state may be modified by instructions after the excepting instruction, and the exact instruction that caused the exception may not be known. Imprecise exceptions make debugging and recovery difficult, so they are avoided in modern general-purpose processors.

#### Key concepts
- Precise exception: all prior instructions complete, no later instructions modify state
- Exception detection in each pipeline stage
- Exception prioritization by program order
- Pipeline flush mechanism
- Disabling writes for flushed instructions
- Deep pipeline exception handling
- Out-of-order exception handling via reorder buffer (ROB)
- Imprecise exceptions and their limitations
- State saving and restoration for exceptions

#### Hands-on activity
Design an exception handling mechanism for a 5-stage pipeline. Show the exception flags in each pipeline register (IF/ID, ID/EX, EX/MEM, MEM/WB). Show how the exception flags are prioritized (the earliest stage has highest priority). Show the flush signal that clears all pipeline registers when an exception is detected. Simulate the following scenario:
```
Cycle 1: I1 (ADD) in IF, no exception
Cycle 2: I1 in ID, I2 (LW) in IF (page fault in IF)
Cycle 3: I1 in EX, I2 in ID, I3 (DIV) in IF
Cycle 4: I1 in MEM, I2 in EX (no exception), I3 in ID (divide-by-zero in ID)
Cycle 5: I1 in WB, I2 in MEM (page fault in MEM), I3 in EX
```

Which instruction causes the exception that is handled first? Show the pipeline flush and the saved PC. Discuss why I3's divide-by-zero is not handled before I2's page fault.

#### Assessment idea
Ask: "Why is it important to prioritize exceptions by program order rather than by the stage in which they are detected?" Answer: Because instructions are executed in program order, and exceptions must be handled in the same order. If a later instruction (in program order) is detected in an earlier stage, it should not be handled before an earlier instruction that is detected in a later stage. For example, if instruction I1 (in EX) causes a divide-by-zero and instruction I2 (in IF) causes a page fault, I1's exception should be handled first because it is earlier in program order. If I2's exception were handled first, the processor would be in an inconsistent state because I1 would not have been handled, and its effects might have been partially committed. Prioritizing by program order ensures that the architectural state is always consistent and that exceptions are handled in a predictable, serializable manner. Then ask: "How does the reorder buffer (ROB) in an out-of-order processor enable precise exceptions?" Answer: The ROB buffers the results of all out-of-order instructions until they are ready to commit in program order. Instructions do not write to the register file or memory until they commit. If an exception occurs, the processor can flush all uncommitted instructions from the ROB without any architectural state having been modified by instructions after the excepting instruction. The ROB ensures that the architectural state is only updated in program order, so the exception is precise. The processor can then restore the state to the point before the excepting instruction and transfer control to the handler. This is impossible without the ROB because out-of-order instructions would have already modified registers and memory.

#### AI generation note
Create a 10-minute animated lesson. Show the pipeline as a series of cars on a highway. Show an exception as a red car that must be dealt with first. Show all cars ahead of the red car passing through. Show all cars behind the red car being stopped and removed. Show the precise exception as a checkpoint that only lets cars through in order. Show the imprecise exception as a checkpoint that lets some cars through out of order. Show the ROB as a waiting area where cars line up in order before exiting. Show the flush as a gate that blocks all cars behind the exception. Show the state saving as a snapshot of the highway before the exception. End with a reflection: "Why do vector processors sometimes tolerate imprecise exceptions?"

---

## Module 5: Advanced Pipelining and Superscalar

> **Goal:** Extend pipelining to issue multiple instructions per cycle and explore the limits of instruction-level parallelism.

---

### Chapter 5.1 — Superscalar Pipelines and Multiple Issue

#### Learning objectives
- Explain how superscalar processors issue multiple instructions per cycle.
- Describe the fetch, decode, and issue logic for a 2-way and 4-way superscalar processor.
- Understand the role of the instruction window, reservation stations, and dispatch logic in dynamic scheduling.
- Analyze the trade-offs between in-order and out-of-order issue.

#### Detailed lesson content

The basic 5-stage pipeline completes one instruction per cycle (IPC = 1). However, modern processors need to execute many more instructions per cycle to keep up with demanding workloads. **Superscalar** processors address this by fetching, decoding, and executing multiple instructions per cycle. A 4-way superscalar processor can issue up to 4 instructions per cycle, potentially achieving IPC = 4.

**Superscalar pipelining:** In a superscalar processor, the fetch and decode stages are widened to handle multiple instructions simultaneously. The processor fetches a block of instructions (e.g., 4 instructions) from the instruction cache every cycle. The decode stage decodes all of them in parallel. The issue stage checks for dependencies and resource availability, then dispatches the independent instructions to multiple functional units (ALUs, multipliers, load/store units, branch units).

The challenge of superscalar design is that the number of dependencies and resource conflicts grows combinatorially with the issue width. In a 2-way superscalar processor, each pair of instructions could have a RAW dependency. In a 4-way processor, the number of pairwise dependencies is much larger. The issue logic must check all these dependencies every cycle, which becomes a critical path in the processor design.

**In-order vs. out-of-order issue:**

- **In-order issue:** Instructions are issued and executed in the order they appear in the program. If an instruction is stalled because its operands are not ready, all subsequent instructions must also wait. This is simple to implement but limits performance because independent instructions behind a stalled instruction cannot execute.
- **Out-of-order (OoO) issue:** Instructions are fetched and decoded in order, but they can be executed in a different order if their operands are ready. The processor maintains a buffer of instructions (the instruction window) and selects ready instructions to execute. After execution, instructions are completed in program order to maintain precise exceptions. This is more complex but significantly improves performance by extracting instruction-level parallelism (ILP) from the program.

**Instruction window:**

The instruction window is the set of instructions that the processor has fetched but not yet executed. In an in-order processor, the window is small (equal to the issue width). In an out-of-order processor, the window is large (tens to hundreds of instructions). A larger window finds more ILP but requires more hardware and power.

**Functional units:**

A superscalar processor has multiple functional units to execute instructions in parallel:
- **Integer ALUs:** 2–4 units for arithmetic and logical operations.
- **Floating-point ALUs:** 2–4 units for FP operations.
- **Load/Store Units:** 2–3 units for memory access.
- **Branch Units:** 1–2 units for branch resolution.
- **Multiplier/Divider:** 1–2 units for complex arithmetic.

The number of functional units is determined by the expected instruction mix. For example, a scientific workload may need more FP units, while a server workload may need more integer ALUs and load/store units.

**Dispatch logic:**

The dispatch logic determines which instructions are sent to which functional units. In a simple in-order superscalar processor, the dispatch logic checks:
1. Are the operands available? (No RAW dependencies with previous instructions in the same cycle.)
2. Is the functional unit available? (No structural hazards.)
3. Is the instruction independent of other instructions being issued in the same cycle?

If all conditions are met, the instruction is dispatched. Otherwise, it is stalled.

In an out-of-order processor, the dispatch logic is more complex. It uses reservation stations (or issue queues) to hold instructions waiting for operands. Instructions are dispatched to reservation stations when they are decoded, and they are sent to functional units when their operands are ready.

**Trade-offs:**
- **In-order issue:** Simple, low power, but limited ILP extraction. Good for embedded and low-power processors.
- **Out-of-order issue:** Complex, high power, but high ILP extraction. Good for high-performance desktop and server processors.
- **Issue width:** Wider issue increases throughput but requires more functional units, more dispatch logic, and more register file ports. The complexity grows with the square of the issue width.

#### Key concepts
- Superscalar: multiple instructions per cycle
- Issue width and functional units
- In-order vs. out-of-order issue
- Instruction window size
- Functional unit types: integer ALU, FP ALU, load/store, branch, multiplier
- Dispatch logic: dependency checking, resource availability
- Reservation stations for out-of-order issue
- Trade-offs: complexity, area, power, performance
- Limits of ILP extraction
- Combinatorial growth of dependency checking

#### Hands-on activity
Design a simplified 2-way superscalar, in-order pipeline for a subset of instructions (ADD, SUB, LW, SW, BEQ). Create a table showing the pipeline stages for each instruction, including the issue logic that checks for dependencies between the two instructions being issued simultaneously. Then, simulate the execution of this instruction sequence:
```
ADD R1, R2, R3
SUB R4, R1, R5
ADD R6, R7, R8
LW R9, 0(R6)
BEQ R1, R2, label
ADD R10, R11, R12
label: SUB R13, R14, R15
```
Show the timing diagram for both in-order and out-of-order execution. For out-of-order, show how instructions 3 and 5 can execute before instruction 2 if their operands are ready. Count the total cycles for each case and calculate the speedup. Discuss how the reorder buffer would maintain precise exceptions in the out-of-order case.

#### Assessment idea
Ask: "A 4-way superscalar processor can issue up to 4 instructions per cycle. Why does it rarely achieve an IPC of 4 in practice?" Answer: Several reasons: (1) Limited instruction-level parallelism (ILP) in the program — not all instructions are independent. (2) Data dependencies (RAW hazards) force instructions to wait for operands. (3) Structural hazards — there may not be enough functional units (ALUs, load/store units) to execute all 4 instructions simultaneously. (4) Control hazards — branch mispredictions flush the pipeline. (5) Cache misses — memory accesses stall the pipeline. (6) The issue logic complexity grows with the square of the issue width, making wide issue difficult. Typical sustained IPC for a 4-way superscalar processor is 2–3, not 4. Then ask: "Why does out-of-order execution require a reorder buffer (ROB) even when there are no exceptions?" Answer: The ROB is needed to ensure that instructions commit (write their results to the register file and memory) in program order. Without the ROB, an instruction that finishes early could write its result to the register file before a previous instruction that had a cache miss. If the previous instruction also writes to the same register, the early write would be overwritten by the late write, violating program order. The ROB buffers all results until all previous instructions have committed, ensuring that the architectural state is updated in program order. This is essential even without exceptions because it maintains the illusion of sequential execution that the programmer expects.

#### AI generation note
Create a 10-minute animated lesson. Show a superscalar pipeline as a multi-lane highway with 4 lanes. Show the issue logic as a traffic controller that checks for collisions (dependencies) before letting cars enter. Show in-order execution as a convoy where one slow truck stalls everyone behind it. Show out-of-order execution as an express lane where fast cars can pass the truck. Show reservation stations as waiting areas where cars wait for their passengers (operands). Show the reorder buffer as a finish line where cars must cross in the order they started, regardless of when they arrived. Show speculative execution as a car taking a detour based on a GPS prediction. Show the flush as the car returning to the main road when the prediction was wrong. Include a live coding segment of the superscalar timing diagram. End with a reflection: "Why do mobile processors (like ARM Cortex-A55) use in-order execution while desktop processors (like Intel Core) use out-of-order?"

---

### Chapter 5.2 — Instruction Fetch and Decode Bandwidth

#### Learning objectives
- Explain the challenges of fetching multiple instructions per cycle from a cache with variable-length instructions.
- Describe the instruction fetch unit and its components: branch prediction, predecoding, and instruction buffering.
- Understand the role of the instruction queue and how it decouples fetch from issue.
- Analyze the impact of taken branches on fetch bandwidth and the techniques to mitigate it.

#### Detailed lesson content

In a superscalar processor, the fetch unit must deliver multiple instructions per cycle to the decode unit. This is challenging because:
- **Cache line boundaries:** Instructions may span cache line boundaries, requiring the fetch unit to read two cache lines.
- **Taken branches:** A taken branch redirects the fetch stream, causing a bubble in the fetch pipeline.
- **Variable-length instructions:** In x86, instructions are 1–15 bytes, making it difficult to fetch multiple instructions per cycle without first decoding their lengths.

**Instruction fetch unit components:**

1. **Branch Predictor:** Predicts the next fetch address before the branch is decoded. The fetch unit uses the predicted address to fetch instructions speculatively. This is discussed in detail in Module 9.

2. **Instruction Cache (L1I):** Stores recently fetched instructions. The L1I cache is typically separate from the L1D cache (Harvard architecture) to avoid structural hazards. The L1I cache is accessed with the predicted PC.

3. **Predecoder:** For variable-length ISAs (x86), the predecoder determines instruction boundaries. In modern x86 processors, the predecoder is highly parallel, guessing multiple starting points and discarding incorrect guesses.

4. **Instruction Buffer / Queue:** A FIFO buffer between the fetch and decode stages. It decouples the fetch bandwidth from the issue bandwidth. The fetch unit can fill the buffer when the issue unit is stalled, and the issue unit can read from the buffer when the fetch unit is stalled (e.g., due to a cache miss).

5. **Line and Way Prediction:** The fetch unit predicts which cache line and which way (in a set-associative cache) contains the next instructions. This reduces the cache access time.

**Fetch bandwidth limitations:**

The fetch bandwidth is the number of instructions fetched per cycle. For a 4-way superscalar processor, the ideal fetch bandwidth is 4 instructions per cycle. However, taken branches reduce the effective fetch bandwidth.

If a branch is taken every 5 instructions (20% branch frequency), and the branch is predicted correctly, the fetch unit fetches 4 instructions, encounters the branch, and then fetches from the target. The fetch bandwidth is still 4 instructions per cycle, but the branch causes a redirect that wastes a cycle.

If the branch is mispredicted, the fetch unit fetches from the wrong path, wasting several cycles before fetching from the correct path. The effective fetch bandwidth drops significantly.

**Techniques to improve fetch bandwidth:**

1. **Branch Target Buffer (BTB):** Predicts the target address of taken branches, allowing the fetch unit to redirect immediately without waiting for decode.

2. **Return Address Stack (RAS):** Predicts the target of return instructions (function returns). Returns are highly predictable because functions usually return to their caller.

3. **Loop Stream Detector:** Detects small loops and stores the loop instructions in a buffer, bypassing the cache for loop iterations. This reduces power and improves fetch bandwidth for tight loops.

4. **Instruction Queue (IQ):** A large queue (e.g., 20–40 entries) that buffers fetched instructions. The IQ allows the fetch unit to run ahead of the issue unit, filling the queue during periods when the issue unit is stalled.

5. **μop Cache (Decoded Stream Buffer):** Stores decoded μops rather than raw instructions. The fetch unit reads μops from the cache, bypassing the decode stage. This is used in Intel Core processors (since Sandy Bridge) to reduce decode power and latency.

**Fetch bandwidth vs. issue bandwidth:**

The fetch bandwidth must be greater than or equal to the issue bandwidth. If the fetch unit can only deliver 2 instructions per cycle but the issue unit can issue 4, the issue unit will be starved. In practice, the fetch bandwidth is designed to be slightly higher than the issue bandwidth to account for bubbles caused by branches and cache misses.

#### Key concepts
- Instruction fetch unit components: branch predictor, L1I cache, predecoder, instruction queue
- Fetch bandwidth and its limitations
- Taken branches and fetch stream redirection
- Cache line boundaries and instruction spanning
- Variable-length instruction fetch challenges (x86)
- Predecoding and parallel length decode
- Instruction buffer/queue for decoupling fetch and issue
- BTB and RAS for branch and return prediction
- Loop stream detector and μop cache
- Fetch bandwidth vs. issue bandwidth design

#### Hands-on activity
Design a fetch unit for a 4-way superscalar processor. The fetch unit must deliver up to 4 instructions per cycle from a 64-byte cache line. Assume the instruction size is 4 bytes (fixed-length RISC). Show how the fetch unit handles: (1) sequential fetch (PC + 4, PC + 8, PC + 12, PC + 16), (2) a taken branch to an address that is not aligned to the cache line boundary, (3) a cache miss. Draw the fetch unit block diagram showing: PC, adder, L1I cache, instruction buffer, branch predictor, and alignment logic. Then, calculate the effective fetch bandwidth for a workload with 20% taken branches, assuming the branch predictor is 90% accurate. Discuss how the instruction buffer helps maintain bandwidth during branch mispredictions.

#### Assessment idea
Ask: "Why does a superscalar processor need an instruction buffer (queue) between the fetch and decode stages, even if the fetch unit and decode unit have the same bandwidth?" Answer: The instruction buffer decouples the fetch and decode stages, allowing them to operate at different rates. The fetch unit can run ahead and fill the buffer when the decode unit is stalled (e.g., due to a complex instruction or a full reservation station). Conversely, the decode unit can read from the buffer when the fetch unit is stalled (e.g., due to a cache miss or branch misprediction). Without the buffer, a stall in either stage would immediately stall the other stage. The buffer smooths out the bursty nature of fetch and decode, improving overall throughput. The buffer also allows the fetch unit to handle variable-length instructions and cache line boundaries without affecting the decode unit's timing. Then ask: "What is a μop cache, and why does it improve both performance and power efficiency?" Answer: A μop cache (also called a decoded stream buffer) stores decoded micro-operations rather than raw x86 instructions. When the processor encounters a sequence of instructions, it stores the decoded μops in the μop cache. On subsequent encounters, the fetch unit reads μops directly from the cache, bypassing the instruction decode stage. This improves performance because the decode stage is a bottleneck in x86 processors (due to variable-length instructions). It also improves power efficiency because the complex decode logic is only used when the μop cache misses. The μop cache is particularly effective for loop bodies and frequently executed code sequences. Intel introduced the μop cache in Sandy Bridge (2011) and has used it in subsequent Core processors. AMD uses a similar structure called the μop cache in Zen processors.

#### AI generation note
Create a 10-minute animated lesson. Show the fetch unit as a delivery truck that picks up packages (instructions) from a warehouse (cache). Show the branch predictor as a GPS that tells the truck where to go next. Show the predecoder as a worker who sorts packages of different sizes. Show the instruction queue as a loading dock that holds packages until the factory is ready. Show the μop cache as a pre-sorted shelf that bypasses the sorting step. Show a taken branch as a detour that wastes time. Show a misprediction as the truck going to the wrong warehouse. Show fetch bandwidth as the number of packages per trip. Show the decoupling effect as the loading dock keeping the factory busy even when the truck is delayed. End with a reflection: "What is the bottleneck in a modern processor: fetch, decode, or execute?"

---

### Chapter 5.3 — In-Order Multiple Issue and Scoreboarding

#### Learning objectives
- Explain how in-order multiple issue processors dispatch instructions to multiple functional units.
- Describe the scoreboard algorithm for dynamic scheduling in in-order processors.
- Understand the limitations of scoreboarding: WAR and WAW hazards.
- Compare scoreboarding with Tomasulo's algorithm.

#### Detailed lesson content

Before out-of-order execution became dominant, in-order processors used dynamic scheduling techniques to improve performance. The **scoreboard** is one of the earliest dynamic scheduling algorithms, used in the CDC 6600 supercomputer (1964).

**Scoreboard components:**

The scoreboard tracks the status of instructions, functional units, and registers. It has three main tables:

1. **Instruction Status Table:** Tracks the stage of each instruction (Issue, Read Operands, Execute, Write Result).

2. **Functional Unit Status Table:** Tracks the state of each functional unit. For each unit, it records:
   - Busy: Whether the unit is in use.
   - Operation: The operation being performed.
   - Destination register (Fi): The register that will receive the result.
   - Source registers (Fj, Fk): The registers that hold the operands.
   - Functional units producing the source operands (Qj, Qk): If an operand is being produced by another unit, this records which unit.
   - Ready flags (Rj, Rk): Whether the operands are ready.

3. **Register Result Table:** Tracks which functional unit will write to each register. If a register is not being written by any unit, the entry is empty.

**Scoreboard algorithm:**

An instruction proceeds through four stages:

1. **Issue:** The instruction is issued to a functional unit if:
   - The required functional unit is free.
   - No other instruction is writing to the same destination register (WAW hazard check).
   If the instruction cannot be issued, it is stalled until the conditions are met.

2. **Read Operands:** The instruction reads its operands from the register file when:
   - Both operands are ready (no other instruction is writing to the source registers).
   - The source registers are not waiting to be read by earlier instructions (WAR hazard check for CDC 6600, but not for modern implementations).
   If the operands are not ready, the instruction waits.

3. **Execute:** The functional unit performs the operation. When complete, the functional unit notifies the scoreboard.

4. **Write Result:** The result is written to the register file if:
   - No other instruction is currently reading the old value of the destination register (WAR hazard check).
   If a WAR hazard exists, the write is delayed until the reading instruction completes.

**Limitations of scoreboarding:**

The scoreboard does not use register renaming, so it cannot eliminate WAR and WAW hazards. It must stall instructions to avoid these hazards. This limits the amount of parallelism that can be extracted.

For example, if instruction I1 writes to R1 and instruction I2 (which appears later) also writes to R1, a WAW hazard occurs. The scoreboard must stall I2 until I1 writes its result. In an out-of-order processor with register renaming, both instructions can execute simultaneously because they write to different physical registers.

**Scoreboard vs. Tomasulo:**

| Feature | Scoreboard | Tomasulo's Algorithm |
|---------|------------|----------------------|
| WAR/WAW handling | Stall | Register renaming eliminates hazards |
| Operand availability | Check register file | Wait for result on CDB |
| Functional units | Fixed assignment | Reservation stations, flexible assignment |
| Complexity | Moderate | Higher |
| Performance | Good for its era | Much better for wide issue |

Tomasulo's algorithm (discussed in Module 6) improves upon the scoreboard by using register renaming and reservation stations, eliminating WAR and WAW hazards and allowing more flexible scheduling.

#### Key concepts
- Scoreboard algorithm: instruction status, functional unit status, register result tables
- Issue stage: check functional unit availability and WAW hazards
- Read operands stage: check operand availability and WAR hazards
- Execute stage: perform operation
- Write result stage: check WAR hazards before writing
- WAR and WAW hazards in scoreboarding
- Scoreboard limitations: no register renaming
- Comparison: scoreboard vs. Tomasulo's algorithm
- CDC 6600 as the first scoreboard implementation

#### Hands-on activity
Simulate the scoreboard algorithm for a 2-function-unit processor (one ALU, one multiplier) executing the following sequence:
```
ADD F1, F2, F3     # Uses ALU, 2 cycles
MUL F4, F1, F5     # Uses multiplier, 4 cycles, depends on ADD
SUB F6, F2, F3     # Uses ALU, 2 cycles, independent
DIV F7, F4, F6     # Uses multiplier, 6 cycles, depends on MUL and SUB
```

Show the scoreboard tables at each cycle: instruction status, functional unit status, and register result table. Track when each instruction issues, reads operands, executes, and writes results. Identify any WAR or WAW hazards that cause stalls. Compare the execution time with a simple in-order pipeline without scoreboarding. Then discuss how Tomasulo's algorithm would eliminate the WAW hazard between ADD and any subsequent instruction that writes to F1.

#### Assessment idea
Ask: "Why does the scoreboard check for WAR hazards before allowing a write result, and how does this limit performance?" Answer: The scoreboard checks for WAR hazards because if an instruction writes to a register before a previous instruction reads it, the previous instruction would get the new value instead of the old value. For example:
```
DIV F1, F2, F3    # I1: reads F2 and F3, writes F1
SUB F2, F4, F5    # I2: writes F2 (WAR hazard on F2)
```
If I2 writes F2 before I1 reads it, I1 would read the wrong value for F2. The scoreboard must delay I2's write until I1 reads its operands. This limits performance because the write is delayed even though the functional unit has completed the operation. In Tomasulo's algorithm, register renaming eliminates WAR hazards by giving I2 a different physical register for F2, so I1 can read the old F2 while I2 writes the new physical register. This allows the write to proceed without delay. Then ask: "Why is the scoreboard still relevant today, even though Tomasulo's algorithm is more powerful?" Answer: The scoreboard is simpler than Tomasulo's algorithm and requires less hardware. It is suitable for simpler processors where the cost of full out-of-order execution (register renaming, reservation stations, reorder buffer) is not justified. Some embedded processors and DSPs use scoreboard-like scheduling because it provides a good balance of performance and complexity. Additionally, understanding the scoreboard is essential for understanding the evolution of dynamic scheduling and the limitations that led to Tomasulo's algorithm. The scoreboard also forms the basis of more modern scheduling techniques used in GPUs and vector processors.

#### AI generation note
Create a 10-minute animated lesson. Show the scoreboard as a flight control tower tracking planes (instructions) on a runway. Show the instruction status table as a departure board. Show the functional unit status table as gate assignments. Show the register result table as a luggage tracking system. Show issue as a plane being assigned a gate. Show read operands as the plane loading passengers. Show execute as the plane taxiing. Show write result as the plane taking off. Show WAR hazards as two planes trying to use the same gate at the same time. Show WAW hazards as two planes with the same flight number. Show Tomasulo's algorithm as an advanced airport with multiple parallel runways and a baggage renaming system. End with a reflection: "Why was the CDC 6600's scoreboard so revolutionary for its time?"

---

### Chapter 5.4 — Register Renaming and the Register File

#### Learning objectives
- Explain how register renaming eliminates WAR and WAW hazards.
- Design a register renaming mechanism using a register map table and a free list.
- Understand the difference between architectural registers and physical registers.
- Analyze the area and power implications of a large physical register file.

#### Detailed lesson content

Register renaming is the technique that enables out-of-order execution to avoid WAR and WAW hazards. It is the key innovation that allows processors to execute instructions out of order while maintaining correct results.

**The problem:**

In a sequential processor, if two instructions write to the same architectural register, a WAW hazard occurs. If a later instruction writes to a register before an earlier instruction reads it, a WAR hazard occurs. These hazards force the processor to stall.

For example:
```
ADD R1, R2, R3     # I1: writes to R1
MUL R4, R1, R5     # I2: reads R1 (RAW hazard, handled by forwarding)
SUB R1, R6, R7     # I3: writes to R1 (WAW hazard with I1)
DIV R8, R1, R9     # I4: reads R1 (WAR hazard with I3, but I3 is later in program order)
```

Without renaming, I3 must wait until I1 writes to R1. I4 must wait until I3 writes to R1. This serializes execution.

**The solution:**

Register renaming maps architectural registers to a larger set of physical registers. Each write to an architectural register is assigned a new physical register. Reads use the most recent mapping.

**Register renaming mechanism:**

1. **Register Map Table (RAT):** Maps each architectural register to its current physical register. When an instruction is decoded, the RAT is read to find the physical registers for the source operands. The destination architectural register is mapped to a new physical register from the free list.

2. **Free List:** A list of physical registers that are not currently in use. When an instruction is decoded, a free physical register is allocated for its destination. When the instruction commits, the old physical register is returned to the free list.

3. **Physical Register File (PRF):** The actual register file that holds the values. It is much larger than the architectural register file (e.g., 256 physical registers for 32 architectural registers).

**Example:**
```
Initial: RAT[R1] = P1, RAT[R2] = P2, RAT[R3] = P3, ...

ADD R1, R2, R3     # Allocate P10 for R1. Read P2, P3. Write to P10.
                   # RAT[R1] = P10. Old mapping (P1) saved for recovery.

MUL R4, R1, R5     # Read RAT[R1] = P10, RAT[R5] = P5. Allocate P11 for R4.
                   # Write to P11. RAT[R4] = P11.

SUB R1, R6, R7     # Allocate P12 for R1. Read P6, P7. Write to P12.
                   # RAT[R1] = P12. Old mapping (P10) saved for recovery.

DIV R8, R1, R9     # Read RAT[R1] = P12, RAT[R9] = P9. Allocate P13 for R8.
                   # Write to P13. RAT[R8] = P13.
```

All four instructions can execute in parallel because they write to different physical registers (P10, P11, P12, P13). There are no WAW or WAR hazards.

**Area and power implications:**

The physical register file is large (e.g., 256 entries × 64 bits = 16,384 bits). It requires many read and write ports to support multiple instructions per cycle. For a 4-way superscalar processor, the PRF might need 8 read ports and 4 write ports. Multi-ported register files are expensive in area and power.

The RAT is smaller but must be accessed every cycle. The free list requires a hardware queue or bitmap.

Modern processors use several techniques to reduce PRF power:
- **Register file banking:** Dividing the PRF into banks to reduce the number of ports per bank.
- **Clock gating:** Disabling unused register file entries.
- **Hierarchical register file:** A small, fast register file for frequently accessed registers and a larger, slower file for the rest.

#### Key concepts
- Register renaming: eliminates WAR and WAW hazards
- Architectural registers vs. physical registers
- Register Map Table (RAT): maps architectural to physical registers
- Free list: allocates and reclaims physical registers
- Physical Register File (PRF): large, multi-ported register file
- Renaming process: read RAT for sources, allocate new physical register for destination
- Saved old mappings for precise exception recovery
- Area and power implications of large PRF
- Register file banking and clock gating for power reduction
- Renaming as the foundation of out-of-order execution

#### Hands-on activity
Simulate register renaming for a sequence of 6 instructions. Assume 8 architectural registers (R0–R7) and 16 physical registers (P0–P15). R0 is always mapped to P0 (hardwired zero). Initially, R1–R7 map to P1–P7. The free list contains P8–P15. Track the RAT, free list, and PRF state for each instruction:
```
ADD R1, R2, R3
MUL R4, R1, R5
SUB R1, R6, R7
AND R2, R1, R4
OR R3, R2, R1
ADD R5, R3, R4
```

Show the RAT after each instruction. Show which physical registers are allocated and freed. Show how WAW and WAR hazards are eliminated by renaming. Then, simulate a branch misprediction: after the third instruction, a branch is mispredicted, and the processor must recover the RAT to the state before the third instruction. Show how the saved old mappings are used to restore the RAT.

#### Assessment idea
Ask: "How many physical registers are needed for a processor with 32 architectural registers and a reorder buffer of 128 entries?" Answer: The number of physical registers must be at least the number of architectural registers plus the number of in-flight instructions that have not yet committed. Each instruction that writes to a register allocates a new physical register. The old physical register is not freed until the instruction commits. So the minimum number of physical registers is 32 + 128 = 160. However, modern processors typically use more physical registers (e.g., 256 or 512) to handle multiple writes per instruction and to provide a buffer for register allocation. The exact number depends on the workload: if many instructions write to the same architectural register, fewer physical registers are needed because the old mappings are freed quickly. If many instructions write to different architectural registers, more physical registers are needed. Then ask: "Why is a multi-ported register file expensive in area and power, and how does register file banking reduce this cost?" Answer: A multi-ported register file requires separate read and write circuitry for each port. Each additional port requires more transistors, more wires, and more decoding logic. The area of a register file grows with the square of the number of ports (for a given number of entries). Register file banking divides the register file into multiple smaller banks, each with fewer ports. An instruction accesses only one bank, so the total number of ports per bank is reduced. For example, a 256-entry register file with 8 read ports and 4 write ports might be divided into 4 banks of 64 entries each with 2 read ports and 1 write port. The area of each bank is much smaller than the full multi-ported file. The trade-off is that bank conflicts can occur if multiple instructions need to access the same bank, which may require arbitration or stalls.

#### AI generation note
Create a 10-minute animated lesson. Show architectural registers as name tags that people wear. Show physical registers as actual lockers in a locker room. Show the RAT as a directory that maps name tags to lockers. Show renaming as a person getting a new locker every time they receive something new. Show WAW hazards as two people trying to put things in the same locker — renaming gives them different lockers. Show WAR hazards as someone trying to read from a locker that is being emptied — renaming ensures the reader uses the old locker while the writer uses a new one. Show the free list as a pile of unused lockers. Show the branch misprediction recovery as restoring the old directory. Show the PRF as a large locker room with many more lockers than people. End with a reflection: "Why do out-of-order processors need more physical registers than architectural registers?"

---

### Chapter 5.5 — Dynamic Scheduling and the Reservation Station

#### Learning objectives
- Explain the dataflow model of execution and how it differs from sequential execution.
- Implement Tomasulo's algorithm with reservation stations, common data bus (CDB), and register tags.
- Understand how register renaming eliminates WAW and WAR hazards.
- Analyze the performance benefits of dynamic scheduling over static scheduling.

#### Detailed lesson content

In a simple in-order pipeline, an instruction must wait for all previous instructions to complete before it can execute. This is wasteful because many instructions are independent and could execute earlier if their operands were ready. **Dynamic scheduling** is the hardware technique that allows instructions to execute out of order when their operands are available, maximizing the utilization of functional units and improving throughput.

The seminal algorithm for dynamic scheduling is **Tomasulo's algorithm**, invented by Robert Tomasulo at IBM in 1967 for the IBM System/360 Model 91. It was the first practical solution to out-of-order execution with register renaming, and its principles are still used in virtually every modern high-performance processor.

**The dataflow model:**

Tomasulo's algorithm is based on the **dataflow model** of computation. In dataflow, an instruction executes as soon as its operands are available, regardless of its position in the program. The program is represented as a graph where nodes are instructions and edges are data dependencies. When an instruction's input edges all have values, the instruction fires. This model naturally exposes instruction-level parallelism (ILP) because independent instructions can execute simultaneously.

Tomasulo's algorithm implements dataflow execution on a von Neumann processor by dynamically building the dataflow graph at runtime. It uses three key structures:

1. **Reservation Stations:** Buffers that hold instructions waiting for their operands. Each functional unit (ALU, multiplier, load/store unit) has one or more reservation stations. When an instruction is issued, it is placed in a reservation station. The reservation station holds the operation, the operands, and a tag indicating where the operand will come from when it is ready.

2. **Common Data Bus (CDB):** A broadcast bus that carries the results of completed instructions to all reservation stations and the register file. When a functional unit completes an instruction, it broadcasts the result on the CDB along with the tag that identifies the instruction. All reservation stations and the register file snoop the CDB. If a reservation station is waiting for a result with that tag, it captures the value. If the register file sees a tag matching a pending write, it updates the register.

3. **Register Tags:** Instead of waiting for the register file to be updated, instructions that need a register value check if the register is "busy." If a previous instruction is going to write to that register, the register is marked with a tag (the reservation station number). The waiting instruction records this tag and waits for the result on the CDB. When the result arrives, the instruction has its operand and can execute. This is **register renaming** — the architectural register is renamed to a dynamic tag that tracks the instruction producing the value.

**Tomasulo's algorithm steps:**

1. **Issue:** The instruction is fetched and decoded. If a reservation station is available, the instruction is placed in it. The register file is checked for operands. If an operand is available in the register file, it is copied to the reservation station. If an operand will be produced by a previous instruction (the register is busy), the tag of the producing reservation station is recorded instead. The destination register is marked as busy with the new reservation station's tag.

2. **Execute:** The reservation station monitors the CDB. When all operands are available, the instruction is dispatched to the functional unit. For load/store instructions, the effective address is computed first, then the memory access is performed.

3. **Write Result:** When the functional unit completes, the result is broadcast on the CDB with the reservation station's tag. All reservation stations and the register file that are waiting for this tag capture the result. The register file updates the register if it is still waiting for this tag. The reservation station is freed.

**Register renaming:**

Register renaming is the key innovation that eliminates WAW and WAR hazards. In a sequential processor, if two instructions write to the same register, a WAW hazard occurs. In Tomasulo's algorithm, each instruction writes to a unique physical register (or reservation station tag), so there is no conflict. The register file maps architectural registers to the latest physical registers, and old mappings are discarded when overwritten.

For example:
```
ADD R1, R2, R3     # Instruction I1: writes to R1 (tagged as RS1)
SUB R4, R1, R5     # Instruction I2: reads R1 from RS1
MUL R1, R6, R7     # Instruction I3: writes to R1 (tagged as RS2)
DIV R8, R1, R9     # Instruction I4: reads R1 from RS2
```

Without renaming, I3 would write to R1 before I2 reads it (WAR hazard), and I4 would read R1 before I3 writes it (RAW hazard). With renaming, I1 writes to RS1, I2 reads from RS1, I3 writes to RS2, and I4 reads from RS2. There are no hazards because each instruction uses a different physical register.

**Limitations of Tomasulo's algorithm:**
- **Instruction window size:** The number of reservation stations determines how many instructions can be in flight. A larger window finds more ILP but requires more hardware and power.
- **Memory disambiguation:** Load instructions may depend on previous store instructions. If a load is executed before a store to the same address, it reads stale data. The processor must guess whether the load depends on the store (speculative disambiguation) or wait until the store address is known.
- **Exception handling:** Tomasulo's algorithm makes precise exceptions difficult because instructions complete out of order. The reorder buffer (ROB) is used to solve this, as discussed in Module 6.

#### Key concepts
- Dataflow model: instructions execute when operands are ready
- Tomasulo's algorithm: reservation stations, CDB, register tags
- Issue: place instruction in reservation station, read operands or record tags
- Execute: monitor CDB, dispatch when operands ready
- Write Result: broadcast on CDB, free reservation station
- Register renaming: eliminates WAW and WAR hazards
- Architectural registers vs. physical registers (tags)
- Instruction window size and ILP extraction
- Memory disambiguation and speculative loads
- WAW and WAR hazard elimination through renaming

#### Hands-on activity
Simulate Tomasulo's algorithm for a 2-function-unit processor (one ALU, one multiplier) with 2 reservation stations per unit. Execute the following instruction sequence:
```
ADD R1, R2, R3     # Latency: 1 cycle
MUL R4, R1, R5     # Latency: 3 cycles
ADD R6, R2, R3     # Latency: 1 cycle
MUL R7, R4, R6     # Latency: 3 cycles
ADD R8, R1, R7     # Latency: 1 cycle
```

Show the state of the reservation stations, the register file, and the CDB for each cycle. Identify when each instruction issues, executes, and writes back. Show how register renaming allows the second ADD to issue before the first MUL completes. Calculate the total cycles and compare with in-order execution. Then show how the reorder buffer would handle precise exceptions if the MUL instruction caused a divide-by-zero.

#### Assessment idea
Ask: "In Tomasulo's algorithm, why is the Common Data Bus (CDB) a broadcast bus rather than a point-to-point connection between each producer and consumer?" Answer: The CDB is a broadcast bus because the producer (a completed instruction) does not know which consumers are waiting for its result. Multiple reservation stations and the register file might all be waiting for the same result. By broadcasting the result with a tag, all consumers can snoop the bus and capture the value if they are waiting for that tag. This decouples producers from consumers and allows the dynamic dataflow graph to be built at runtime without explicit connections. A point-to-point network would require the producer to know all consumers in advance, which is impossible in a dynamically scheduled processor. Then ask: "Why does register renaming in Tomasulo's algorithm require more physical registers than architectural registers?" Answer: Because multiple instructions can be in flight simultaneously, each writing to a different physical register that corresponds to the same architectural register. For example, if instruction I1 writes to R1 and instruction I3 (which appears later in program order) also writes to R1, both instructions must have distinct physical registers until I1's result is no longer needed. The number of physical registers must be at least the number of architectural registers plus the number of reservation stations (to hold in-flight results). Modern processors have hundreds of physical registers but only 32 architectural registers.

#### AI generation note
Create a 10-minute animated lesson. Show the dataflow model as a network of pipes with water (data) flowing through. Show a reservation station as a waiting room with a sign showing which data is needed. Show the CDB as a loudspeaker announcement system that broadcasts results to all waiting rooms. Show register renaming as name tags that change dynamically. Show Tomasulo's algorithm as a three-step dance: Issue (check in), Execute (wait and work), Write Result (announce). Show WAW and WAR hazards as scheduling conflicts that are resolved by giving each person a unique ID. Show the simulation as a spreadsheet updating cycle by cycle. End with a reflection: "Why is Tomasulo's algorithm still relevant 50 years after its invention?"

---

### Chapter 5.6 — Limits of Instruction-Level Parallelism

#### Learning objectives
- Explain the factors that limit ILP: data dependencies, control dependencies, and name dependencies.
- Calculate the theoretical maximum IPC for a given instruction sequence.
- Understand the concept of the instruction window and how its size affects ILP extraction.
- Analyze the ILP of real workloads and why it is typically limited to 2–4 instructions per cycle.

#### Detailed lesson content

Instruction-Level Parallelism (ILP) is the potential overlap among instructions in a program. While modern processors can issue 4–8 instructions per cycle, real workloads rarely sustain more than 2–3 IPC. Understanding the limits of ILP is essential for processor design.

**Types of dependencies that limit ILP:**

1. **True Data Dependencies (RAW):** An instruction depends on the result of a previous instruction. These are fundamental and cannot be eliminated. For example:
   ```
   ADD R1, R2, R3
   SUB R4, R1, R5   # Depends on R1 from ADD
   ```
   The SUB must wait for the ADD to complete. Even with out-of-order execution and forwarding, the SUB cannot execute until the ADD produces its result.

2. **Control Dependencies:** Instructions after a branch depend on the branch outcome. Until the branch is resolved, subsequent instructions cannot be guaranteed to execute. Branch prediction and speculative execution mitigate this, but mispredictions waste resources.

3. **Name Dependencies (WAR and WAW):** These are not true data dependencies but are caused by register reuse. Register renaming eliminates these, but they still limit the number of instructions that can be in flight simultaneously.

**Theoretical maximum IPC:**

For a given instruction sequence, the maximum IPC is limited by the critical path — the longest chain of dependent instructions. For example:
```
ADD R1, R2, R3     # Cycle 1
ADD R4, R1, R5     # Cycle 2 (depends on R1)
ADD R6, R4, R7     # Cycle 3 (depends on R4)
ADD R8, R6, R9     # Cycle 4 (depends on R6)
```
This chain has a maximum IPC of 1 because each instruction depends on the previous one. Even with infinite issue width, the processor cannot execute more than one instruction per cycle from this chain.

For a sequence with independent instructions:
```
ADD R1, R2, R3     # Independent
ADD R4, R5, R6     # Independent
ADD R7, R8, R9     # Independent
ADD R10, R11, R12  # Independent
```
This sequence has a maximum IPC of 4 (or higher, depending on issue width).

**Real workload ILP:**

Studies of real workloads (e.g., SPEC CPU benchmarks) have found that the average ILP is typically 2–4 instructions per cycle. This is because:
- **Data dependencies:** Most programs have frequent data dependencies, especially in pointer-chasing code and linked data structures.
- **Memory latency:** Cache misses stall the processor, reducing the effective ILP.
- **Branch mispredictions:** Flushing the pipeline wastes cycles and reduces throughput.
- **Limited instruction window:** Even with out-of-order execution, the processor can only look ahead a limited number of instructions (e.g., 100–300). If the ILP is not available within the window, it cannot be extracted.

**The instruction window and ILP:**

The instruction window is the set of instructions that the processor has fetched but not yet committed. A larger window can find more ILP by looking further ahead in the program. However, the window size is limited by:
- **Hardware cost:** Larger windows require more reservation stations, a larger ROB, and more register renaming resources.
- **Power:** Larger windows consume more power because more instructions are tracked and more comparisons are made.
- **Diminishing returns:** Beyond a certain window size (e.g., 200 entries), the additional ILP found is small because most dependencies are local.

Research has shown that increasing the window size from 100 to 200 entries provides a significant ILP boost, but increasing from 200 to 400 entries provides only marginal improvement for most workloads.

**Wallace's ILP study:**

David Wallace's classic study (1991) analyzed the ILP of SPEC benchmarks with perfect branch prediction, perfect memory disambiguation, and infinite functional units. Even with these ideal conditions, the average IPC was only about 5–7. With realistic branch prediction and memory latency, the IPC drops to 2–3. This demonstrates that ILP is fundamentally limited by the structure of programs.

**Implications for processor design:**
- The ILP wall means that processors cannot rely on extracting more ILP from a single thread to improve performance.
- The industry has shifted to multicore and multithreading to increase throughput.
- Specialized accelerators (GPUs, NPUs) exploit data-level parallelism rather than instruction-level parallelism.

#### Key concepts
- ILP: instruction-level parallelism
- True data dependencies (RAW) as the fundamental limit
- Control dependencies and branch impact
- Name dependencies (WAR, WAW) eliminated by renaming
- Critical path and maximum IPC calculation
- Real workload ILP: 2–4 IPC typical
- Instruction window size and its effect on ILP extraction
- Diminishing returns of large windows
- Wallace's ILP study with ideal conditions
- ILP wall and the shift to multicore and accelerators

#### Hands-on activity
Analyze the ILP of the following instruction sequences. For each sequence, draw the dependency graph (showing RAW dependencies as edges) and calculate the theoretical maximum IPC for a processor with infinite issue width and no branch mispredictions.

Sequence A:
```
ADD R1, R2, R3
ADD R4, R5, R6
ADD R7, R8, R9
ADD R10, R11, R12
```

Sequence B:
```
ADD R1, R2, R3
MUL R4, R1, R5
ADD R6, R4, R7
MUL R8, R6, R9
```

Sequence C (loop body):
```
LW R1, 0(R2)
ADD R3, R1, R4
SW R3, 0(R2)
ADDI R2, R2, 4
```

Discuss why Sequence A has high ILP but Sequence B has low ILP. Discuss why Sequence C (pointer increment loop) has limited ILP despite appearing simple. Then, research the actual IPC achieved by modern processors (Intel Core, AMD Zen, Apple M1) on SPEC CPU benchmarks and compare with your theoretical analysis.

#### Assessment idea
Ask: "A processor designer claims that a new processor with 16-way issue width and a 512-entry instruction window will achieve an IPC of 10 on typical workloads. Based on ILP studies, is this claim realistic?" Answer: No, the claim is not realistic. Even with perfect branch prediction, perfect memory disambiguation, and infinite functional units, classic studies have shown that the average IPC of SPEC benchmarks is only about 5–7. With realistic branch prediction and memory latency, the IPC is typically 2–3. A 16-way issue width is far beyond the ILP available in most programs. The processor would rarely be able to fill all 16 issue slots, resulting in low utilization. The large instruction window (512 entries) would find slightly more ILP than a 200-entry window, but the improvement is marginal. The additional hardware cost (more reservation stations, larger ROB, more register renaming resources) would increase power and area without proportional performance gains. This is why modern high-performance processors issue 4–6 instructions per cycle, not 16. Then ask: "Why has the industry shifted from ILP extraction to multicore and multithreading?" Answer: Because the ILP wall limits the performance gains from extracting more parallelism within a single thread. Studies have shown that even with ideal conditions, the IPC of a single thread rarely exceeds 5–7. Realistic processors achieve 2–3 IPC. To continue improving performance, the industry has shifted to: (1) multicore processors — running multiple threads in parallel on separate cores; (2) multithreading (SMT) — running multiple threads on the same core to improve resource utilization; (3) data-level parallelism (SIMD, GPUs) — executing the same operation on multiple data elements; (4) specialized accelerators — dedicated hardware for common tasks (AI, video, cryptography). These approaches exploit parallelism at higher levels (thread-level, data-level, request-level) rather than trying to extract more ILP from a single thread.

#### AI generation note
Create a 10-minute animated lesson. Show ILP as a web of connected threads. Show true dependencies as unbreakable chains. Show control dependencies as doors that block paths until opened. Show name dependencies as tangled threads that renaming can untangle. Show the instruction window as a magnifying glass that shows only a small portion of the web. Show the critical path as the longest chain in the web. Show Wallace's study as a scientist measuring the web with perfect tools. Show the ILP wall as a brick wall that the web cannot penetrate. Show the shift to multicore as multiple webs being processed in parallel. Show GPUs as machines that process many identical threads at once. End with a reflection: "Is there any way to break through the ILP wall?"

---

### Chapter 5.7 — Speculative Execution and the Limits of Dynamic Scheduling

#### Learning objectives
- Explain speculative execution and how it relates to branch prediction.
- Describe the role of the reorder buffer (ROB) in speculative execution.
- Understand memory disambiguation and speculative loads.
- Analyze the trade-offs between speculation accuracy, recovery cost, and performance gain.

#### Detailed lesson content

Modern processors do not wait for branches to be resolved before fetching subsequent instructions. Instead, they use **branch prediction** to guess the direction of the branch and fetch instructions from the predicted path. These fetched instructions are executed **speculatively** — their results are computed but not yet committed to the architectural state. If the branch prediction is correct, the speculative results are committed (made permanent). If the prediction is incorrect, the speculative results are discarded (flushed), and the processor fetches from the correct path.

**Speculative execution goes beyond branches:**

Modern processors also speculate on:
- **Memory disambiguation:** Guessing whether a load depends on a previous store. If the guess is correct, the load can execute early. If incorrect, the load must be re-executed.
- **Value prediction:** Guessing the result of an instruction before it is computed. Rarely used in commercial processors but explored in research.
- **Cache line prediction:** Guessing which cache line will be needed next and prefetching it.

**The reorder buffer (ROB) in speculative execution:**

The ROB is a circular buffer that holds instructions in program order from the time they are issued until they are committed. Instructions execute out of order (in the reservation stations), but their results are not written to the register file or memory until they reach the head of the ROB and are **committed** in program order. This ensures that the architectural state is always consistent with program order, and exceptions can be handled precisely.

When a branch is predicted, instructions from the predicted path are placed in the ROB. These instructions are marked as speculative. They execute out of order in the reservation stations, but they cannot commit until the branch is resolved. If the branch prediction is correct, the speculative bit is cleared, and the instructions can commit normally. If the prediction is wrong, all speculative instructions after the branch are flushed from the ROB, and their results are discarded. The processor state is restored to the point before the branch, and fetching resumes from the correct path.

**Memory disambiguation speculation:**

In an aggressive out-of-order processor, loads are often scheduled before the addresses of previous stores are known. The processor must guess whether the load and store access the same address. If the guess is correct, the load executes early and performance improves. If incorrect, the load must be re-executed with the correct data.

The processor uses several techniques:
1. **Address-based disambiguation:** Once the store address is computed, the processor compares it with the load address. If they match, the load is re-executed (or the data is forwarded).
2. **Store set prediction:** The processor remembers which stores have previously conflicted with loads and predicts whether future loads will conflict with the same stores.
3. **Conservative scheduling:** Loads are not scheduled until all previous store addresses are known. This is safe but limits performance.

**Memory dependence speculation is one of the most performance-critical aspects of modern processor design.** A processor that can accurately predict memory dependencies and forward data efficiently achieves significantly higher performance than one that conservatively waits for all store addresses.

**Speculation trade-offs:**
- **Accuracy:** The fraction of speculations that are correct. High accuracy means good performance.
- **Recovery cost:** The cost of flushing speculative work when a speculation is wrong. This includes the cycles wasted on speculative instructions and the cycles to refill the pipeline.
- **Performance gain:** The benefit of executing instructions early when the speculation is correct.

For speculation to be profitable, the expected gain must exceed the expected cost:
```
Expected Gain = Accuracy × Gain_when_correct > (1 - Accuracy) × Cost_when_wrong
```

For example, if branch prediction is 95% accurate and the branch penalty is 15 cycles, the expected cost of a misprediction is 0.05 × 15 = 0.75 cycles per branch. If the gain from correct prediction is avoiding a 1-cycle stall per branch, the speculation is clearly profitable.

**Limits of speculation:**
- **Security vulnerabilities:** Speculative execution has been exploited to leak information (Spectre and Meltdown). This is discussed in Module 6.
- **Power consumption:** Speculative execution consumes power even when the speculation is wrong. This is a concern for mobile processors.
- **Diminishing returns:** As speculation becomes more aggressive, the accuracy decreases and the recovery cost increases, making further speculation less profitable.

#### Key concepts
- Speculative execution: executing instructions before their validity is confirmed
- Branch prediction and speculative path execution
- ROB for speculative instruction tracking and commit
- Speculation bits and branch resolution
- Flush on misprediction
- Memory disambiguation speculation
- Address-based disambiguation and store set prediction
- Speculation trade-offs: accuracy, recovery cost, performance gain
- Security implications: Spectre and Meltdown
- Power implications of speculative execution
- Limits of speculation profitability

#### Hands-on activity
Calculate the expected performance of a processor with speculative execution on a branch-heavy workload. The workload has 20% branches. The branch predictor is 90% accurate. The branch penalty is 15 cycles. The processor can execute 4 instructions per cycle. Without speculation, the processor stalls on every branch until it is resolved (2-cycle stall). With speculation, there is no stall on correct predictions, but a 15-cycle penalty on mispredictions. Calculate the effective CPI for both cases and the speedup from speculation. Then, repeat the calculation for a predictor with 95% accuracy and 99% accuracy. Discuss how the accuracy affects the profitability of speculation.

#### Assessment idea
Ask: "A processor speculates on memory disambiguation, allowing loads to execute before previous store addresses are known. The speculation is 98% accurate. When correct, the load executes 5 cycles earlier. When wrong, the load and all dependent instructions must be replayed, costing 20 cycles. Is this speculation profitable on average?" Answer: Expected gain per speculation = 0.98 × 5 + 0.02 × (-20) = 4.9 - 0.4 = 4.5 cycles. The speculation is profitable because the expected gain (4.5 cycles) is positive. However, this is a per-load calculation. If the load is on the critical path, the 5-cycle gain translates directly to a 5-cycle reduction in execution time. If the load is not on the critical path, the gain may not improve overall performance. The 2% misprediction rate is acceptable for most workloads, but if the workload has many aliasing loads (loads that frequently conflict with stores), the accuracy may drop and the speculation may become unprofitable. Then ask: "Why did the Spectre and Meltdown vulnerabilities cause a major rethinking of speculative execution in processors?" Answer: Spectre and Meltdown demonstrated that speculative execution can be exploited to leak sensitive information (passwords, encryption keys, personal data) across security boundaries. In Spectre, an attacker tricks the processor into speculatively executing code that accesses sensitive data, and the side effects of the speculative execution (cache state) are measured to infer the data. In Meltdown, the attacker exploits out-of-order execution to read kernel memory from user space. These vulnerabilities revealed that speculative execution, while essential for performance, creates a security risk. The industry responded with: (1) hardware patches (microcode updates) that reduce speculation in certain cases; (2) software mitigations (kernel page table isolation, retpoline); (3) new hardware designs that separate speculative state from architectural state more carefully. The trade-off between performance and security has become a central concern in modern processor design.

#### AI generation note
Create a 10-minute animated lesson. Show speculation as a detective making guesses. Show branch prediction as guessing which path a suspect took. Show correct prediction as the detective catching the suspect quickly. Show misprediction as the detective chasing the wrong suspect and having to start over. Show the ROB as a case file where guesses are recorded but not acted upon until confirmed. Show memory disambiguation as guessing whether two addresses are the same. Show Spectre as a thief using the detective's guesses to figure out secrets. Show Meltdown as a thief breaking into a secure vault by exploiting the detective's shortcuts. Show the trade-off as a balance scale: performance on one side, security on the other. End with a reflection: "How can processors maintain high performance while being secure against speculation attacks?"

---

## Module 6: Out-of-Order Execution

> **Goal:** Deeply understand the mechanisms that enable modern processors to execute instructions dynamically and out of program order while maintaining correctness.

---

### Chapter 6.1 — Tomasulo's Algorithm Revisited

#### Learning objectives
- Implement Tomasulo's algorithm with a detailed walkthrough of the issue, execute, and write stages.
- Understand the reservation station structure and how it handles multiple functional units.
- Describe the Common Data Bus (CDB) and its role in result forwarding.
- Analyze the performance of Tomasulo's algorithm on a sample instruction sequence.

#### Detailed lesson content

Tomasulo's algorithm is the foundation of modern out-of-order execution. We revisit it in detail to ensure complete understanding before moving to advanced topics.

**Reservation station structure:**

Each reservation station entry contains:
- **Op:** The operation to perform (ADD, SUB, MUL, DIV, LOAD, STORE).
- **Qj, Qk:** The tags of the reservation stations that will produce the source operands. If the operand is already available, Qj/Qk is 0.
- **Vj, Vk:** The values of the source operands. If Qj/Qk is not 0, Vj/Vk is invalid.
- **A:** The address offset for load/store instructions (used to compute the effective address).
- **Busy:** Whether the reservation station is occupied.

**Register file structure:**

Each register has two fields:
- **Qi:** The tag of the reservation station that will write to this register. If 0, the register is valid and no instruction is pending.
- **Value:** The current value of the register (valid only if Qi = 0).

**Tomasulo's algorithm detailed steps:**

1. **Issue (Dispatch):**
   - Wait until a reservation station is available for the operation.
   - Read the register file for source operands. If Qi[register] = 0, the operand is available; copy Vj/Vk. If Qi[register] ≠ 0, the operand is pending; copy Qj/Qk.
   - For the destination register, set Qi[destination] = tag of the reservation station.
   - Mark the reservation station as busy.

2. **Execute:**
   - Wait until Qj = 0 and Qk = 0 (both operands are available).
   - If the operation is a load/store, compute the effective address (base + offset) and wait for the memory unit.
   - Execute the operation in the functional unit.

3. **Write Result:**
   - Broadcast the result on the CDB with the reservation station tag.
   - All reservation stations with Qj or Qk matching the tag capture the value and set Qj/Qk = 0.
   - The register file updates the value if Qi matches the tag, and sets Qi = 0.
   - Mark the reservation station as not busy.

**Example walkthrough:**

Assume: 3 ADD reservation stations (RS1–RS3), 2 MUL reservation stations (RS4–RS5), 2 LOAD buffers (RS6–RS7).

Initial: R1=5, R2=3, R3=7, R4=2, R5=4. All Qi = 0.

Instruction sequence:
```
1. MUL R6, R2, R4    # RS4: MUL, Qj=0(Vj=3), Qk=0(Vk=2), dest=R6
2. SUB R8, R6, R5    # RS1: SUB, Qj=RS4(R6 pending), Qk=0(Vk=4), dest=R8
3. ADD R10, R8, R6   # RS2: ADD, Qj=RS1(R8 pending), Qk=RS4(R6 pending), dest=R10
4. DIV R12, R10, R3  # RS5: DIV, Qj=RS2(R10 pending), Qk=0(Vk=7), dest=R12
5. ADD R14, R6, R2   # RS3: ADD, Qj=RS4(R6 pending), Qk=0(Vk=3), dest=R14
```

Cycle-by-cycle execution:
- Cycle 1: Issue MUL to RS4. R6's Qi = RS4.
- Cycle 2: Issue SUB to RS1. R8's Qi = RS1. MUL starts executing (operands ready).
- Cycle 3: Issue ADD to RS2. R10's Qi = RS2. MUL completes (3-cycle latency assumed), writes result (6) on CDB. RS1 captures R6=6, Qj=0.
- Cycle 4: Issue DIV to RS5. R12's Qi = RS5. Issue ADD to RS3. R14's Qi = RS3. SUB starts executing (R6=6, R5=4). RS2 captures R6=6, Qk=0.
- Cycle 5: SUB completes (2), writes on CDB. RS2 captures R8=2, Qj=0. RS3 captures R6=6, Qj=0.
- Cycle 6: ADD (RS2) starts executing (R8=2, R6=6). ADD (RS3) starts executing (R6=6, R2=3).
- Cycle 7: ADD (RS2) completes (8), writes on CDB. RS5 captures R10=8, Qj=0. DIV starts executing (R10=8, R3=7).
- Cycle 8: ADD (RS3) completes (9), writes on CDB. R14's Qi = 0.
- Cycles 9–14: DIV executes (6-cycle latency for division, 8/7 ≈ 1.14, but integer division is slow). DIV completes, writes on CDB. R12's Qi = 0.

Total cycles: 14 (assuming 3-cycle MUL, 1-cycle ADD/SUB, 6-cycle DIV). With in-order execution, it would take 3 + 1 + 1 + 6 + 1 = 12 cycles. Wait, out-of-order is slower in this example because of the dependency chain. Let me recalculate: in-order would be sequential. With Tomasulo, SUB and ADD overlap. Actually, in this case, the dependency chain limits parallelism. A better example would show more independent instructions.

**Key takeaway:** Tomasulo's algorithm excels when there are independent instructions that can execute in parallel. When dependencies form long chains, the benefit is limited.

#### Key concepts
- Reservation station fields: Op, Qj, Qk, Vj, Vk, A, Busy
- Register file fields: Qi, Value
- Issue stage: read operands or record tags, allocate destination
- Execute stage: wait for operands, compute result
- Write stage: broadcast on CDB, update waiting stations and registers
- CDB as broadcast bus for result distribution
- Qi as pending-write indicator
- Tag matching for operand capture
- Functional unit latency and parallel execution
- Dependency chains limiting parallelism

#### Hands-on activity
Implement a Tomasulo's algorithm simulator in Python. The simulator should accept a sequence of instructions and simulate cycle-by-cycle execution. It should display the reservation station contents, register file Qi values, and CDB broadcasts at each cycle. Test with the following sequence:
```
ADD F1, F2, F3     # 1 cycle
MUL F4, F1, F5     # 3 cycles
SUB F6, F2, F3     # 1 cycle
DIV F7, F4, F6     # 6 cycles
ADD F8, F6, F2     # 1 cycle
MUL F9, F8, F1     # 3 cycles
```

Show how the independent instructions (SUB, ADD F8) execute in parallel with the dependent chain. Calculate the total cycles and compare with in-order execution. Then, vary the number of reservation stations and observe how the total cycles change. Plot the total cycles vs. number of reservation stations.

#### Assessment idea
Ask: "In Tomasulo's algorithm, why does the register file need a Qi field for each register, and what happens when a new instruction issues to a register that already has Qi ≠ 0?" Answer: The Qi field indicates that a reservation station is going to write to that register. When a new instruction issues to a register that already has Qi ≠ 0, the new instruction's reservation station tag is written to Qi, overwriting the old tag. This means the new instruction will produce the value that subsequent instructions should use. The old instruction still writes to its reservation station tag, but no subsequent instruction will wait for it because Qi now points to the new instruction. However, the old instruction's result is still broadcast on the CDB, and any reservation stations that were waiting for the old tag will capture it. But since Qi was overwritten, no new instructions will wait for the old tag. This is how WAW hazards are handled: the new instruction simply takes over the destination register mapping, and the old instruction's write is still performed but becomes invisible to subsequent instructions. The old physical register is freed when the old instruction commits. Then ask: "What happens if two reservation stations complete in the same cycle and both want to broadcast on the CDB?" Answer: The CDB is a single broadcast bus, so only one reservation station can broadcast per cycle. If two stations complete simultaneously, one must wait for the next cycle. This is a structural hazard on the CDB. Modern processors avoid this by having multiple result buses (e.g., 2–4 CDBs) or by pipelining the write stage so that completions are spread across cycles. The number of CDBs is a design parameter that trades off area and power against the probability of write conflicts. In Tomasulo's original design, there was a single CDB, so write conflicts were possible but rare because functional units had different latencies.

#### AI generation note
Create a 10-minute animated lesson. Show Tomasulo's algorithm as a restaurant kitchen. Show reservation stations as prep stations for different dishes. Show the register file as a pantry with labels indicating which prep station will deliver each ingredient. Show issue as a chef placing an order at a prep station. Show execute as the chef preparing the dish when ingredients arrive. Show the CDB as a delivery bell that rings when a dish is ready. Show all prep stations listening for the bell. Show register renaming as the pantry labels being updated to the newest prep station. Show WAW hazards as two chefs trying to deliver the same ingredient — the label simply points to the newest chef. Show the simulation as a kitchen timer ticking through each cycle. End with a reflection: "What is the bottleneck in Tomasulo's algorithm: functional units, reservation stations, or the CDB?"

---

### Chapter 6.2 — Reservation Stations and the CDB

#### Learning objectives
- Design the reservation station data structure and its control logic.
- Implement the CDB arbitration logic when multiple functional units complete simultaneously.
- Understand the area and timing implications of the CDB and reservation stations.
- Analyze the impact of CDB bandwidth on processor performance.

#### Detailed lesson content

The reservation station and the Common Data Bus (CDB) are the two most critical structures in Tomasulo's algorithm. Their design directly affects the processor's performance, area, and power.

**Reservation station design:**

Each reservation station is a small buffer that holds one instruction waiting for its operands. The number of reservation stations determines the instruction window size. A typical modern processor has:
- 10–20 integer reservation stations
- 10–20 floating-point reservation stations
- 10–20 load/store reservation stations

The reservation station contains:
- **Op (3–5 bits):** The operation.
- **Qj, Qk (5–8 bits each):** The tags of the producing reservation stations. 0 means the operand is available.
- **Vj, Vk (32–64 bits each):** The operand values (valid only if Qj/Qk = 0).
- **A (16–32 bits):** Address offset for load/store.
- **Busy (1 bit):** Whether the station is occupied.
- **Dest (5–8 bits):** The tag or register identifier for the result.

Total size per reservation station: 150–300 bits. For 50 reservation stations: 7,500–15,000 bits (about 1–2 KB). This is small compared to the cache and register file.

**Reservation station control logic:**

Each cycle, the reservation station control logic must:
1. **Issue:** Accept a new instruction if there is a free station. Match the instruction type to the appropriate station type (integer, FP, load/store).
2. **Operand monitoring:** Check the CDB every cycle. If Qj or Qk matches the CDB tag, capture the value and clear Qj/Qk.
3. **Dispatch:** When Qj = 0 and Qk = 0 and the functional unit is free, dispatch the instruction to the functional unit.
4. **Write:** When the functional unit completes, broadcast the result on the CDB.

**CDB design:**

The CDB is a broadcast bus that carries the result and the tag from the completing functional unit to all reservation stations and the register file. The CDB contains:
- **Tag (5–8 bits):** The reservation station tag that produced the result.
- **Value (32–64 bits):** The result value.
- **Valid (1 bit):** Whether the broadcast is valid.

**CDB arbitration:**

If multiple functional units complete in the same cycle, only one can broadcast on the CDB. The others must wait. The arbitration logic selects one unit based on a priority scheme (e.g., oldest instruction first, or round-robin).

To reduce CDB contention, modern processors use multiple CDBs (2–4). Each CDB handles a subset of functional units. For example, one CDB for integer results, one for floating-point results, one for load results. This increases bandwidth but requires more wires and comparators.

**CDB timing and area:**

The CDB is a long wire that spans the entire processor. It must drive the load of all reservation stations and the register file. This makes the CDB slow and power-hungry. The CDB is often the critical path in the write stage.

Techniques to reduce CDB overhead:
- **Segmented CDB:** Divide the CDB into segments that drive smaller groups of reservation stations.
- **Hierarchical CDB:** Use a tree of drivers to broadcast the result.
- **Multiple CDBs:** Reduce the load per CDB by using multiple buses.
- **Local bypassing:** Forward results directly between nearby reservation stations without using the CDB.

**CDB bandwidth impact:**

The CDB bandwidth (number of results per cycle) limits the throughput of the processor. If the CDB can only broadcast one result per cycle, but two functional units complete, one result is delayed. This reduces the effective IPC.

For example, if a processor has 4 integer ALUs and 2 FP ALUs, it can complete up to 6 instructions per cycle. If the CDB can only broadcast 2 results per cycle, the effective completion rate is 2 per cycle, and the processor cannot sustain its peak IPC.

Modern high-performance processors use 2–4 CDBs to match the functional unit bandwidth. For example, Intel Core processors use 4 CDBs (2 for integer, 1 for FP, 1 for load).

#### Key concepts
- Reservation station fields and size
- Reservation station control logic: issue, monitor, dispatch, write
- CDB structure: tag, value, valid
- CDB arbitration: priority schemes for multiple completions
- Multiple CDBs for bandwidth
- CDB timing and area challenges
- Segmented and hierarchical CDBs
- CDB bandwidth as a performance bottleneck
- Matching CDB bandwidth to functional unit throughput

#### Hands-on activity
Design a reservation station file and CDB for a 2-way superscalar processor with 2 integer ALUs, 1 FP ALU, and 1 load/store unit. The processor has 8 reservation stations: 4 for integer, 2 for FP, 2 for load/store. Calculate the total area of the reservation stations (in bits). Design the CDB arbitration logic: if multiple stations complete in the same cycle, how do you choose which one broadcasts? Implement a priority scheme (e.g., integer > FP > load, or oldest first). Then, simulate a scenario where 3 stations complete in the same cycle and show how the arbitration handles them. Calculate the CDB bandwidth requirement for this processor to avoid stalls.

#### Assessment idea
Ask: "Why is the CDB often the critical path in the write stage of an out-of-order processor, and what techniques reduce this delay?" Answer: The CDB is a long wire that must drive the capacitive load of all reservation stations and the register file. The delay of a wire is proportional to its length and the load it drives. In a processor with 50 reservation stations, the CDB must drive 50 comparators (for tag matching) and the register file ports. This large load makes the CDB slow. Techniques to reduce the delay include: (1) multiple CDBs — splitting the broadcast into 2–4 buses, each driving a smaller load; (2) segmented CDB — using repeaters or buffers along the wire to reduce the RC delay; (3) hierarchical CDB — using a tree of drivers so that each driver only drives a small segment; (4) local bypassing — forwarding results directly between nearby reservation stations without using the global CDB; (5) narrower CDB — broadcasting only the tag and having the reservation stations read the value from a separate data bus. These techniques trade off area and power for reduced CDB delay. Then ask: "How does increasing the number of CDBs affect the area and power of the processor?" Answer: Each additional CDB requires a separate set of wires, drivers, and comparators. The wires consume routing area, which is scarce in modern processors. The drivers consume power, especially when switching. The comparators (one per reservation station per CDB) consume both area and power. For example, with 50 reservation stations and 2 CDBs, there are 100 comparators. With 4 CDBs, there are 200 comparators. The area and power of the CDB system scale roughly linearly with the number of CDBs. However, the benefit is reduced CDB contention and improved throughput. Modern processors typically use 2–4 CDBs as a balance between bandwidth and cost.

#### AI generation note
Create a 10-minute animated lesson. Show the reservation stations as a row of waiting rooms. Show the CDB as a central announcement system with a loudspeaker. Show the tag matching as people in the waiting rooms listening for their number. Show CDB contention as two people trying to speak into the microphone at the same time. Show arbitration as a queue system. Show multiple CDBs as multiple microphones. Show the CDB wire as a long cable that gets slower as it gets longer. Show segmented CDBs as amplifiers along the cable. Show local bypassing as people passing notes directly to their neighbors. Show the area impact as the waiting rooms getting more crowded with more microphones. End with a reflection: "What is the optimal number of CDBs for a processor with 8 functional units?"

---

### Chapter 6.3 — Register Renaming in Detail

#### Learning objectives
- Implement a register renaming mechanism using a register map table and a free list.
- Understand the difference between architectural registers and physical registers.
- Describe the process of allocating and freeing physical registers during issue and commit.
- Analyze the area and power implications of a large physical register file.

#### Detailed lesson content

Register renaming is the technique that enables out-of-order execution to avoid WAR and WAW hazards. We explore it in detail to understand the hardware implementation.

**Architectural vs. Physical Registers:**

- **Architectural registers:** The programmer-visible registers defined by the ISA (e.g., 32 integer registers in RISC-V, 16 in x86-64, 31 in ARM64).
- **Physical registers:** The actual hardware registers used by the processor. There are typically 2–8× more physical registers than architectural registers (e.g., 256 physical registers for 32 architectural registers).

Each write to an architectural register allocates a new physical register. The old physical register is freed when the instruction commits. This ensures that multiple instructions can write to the same architectural register simultaneously without conflict.

**Register Map Table (RAT):**

The RAT maps architectural registers to physical registers. It is accessed in the decode stage:
- **Read:** For each source register, read the RAT to get the physical register number.
- **Write:** For the destination register, allocate a new physical register from the free list and update the RAT.

The RAT must be checkpointed (saved) for branch prediction recovery. When a branch is predicted, the RAT is copied to a checkpoint. If the branch is mispredicted, the checkpoint is restored.

**Free List:**

The free list tracks physical registers that are not currently in use. It is implemented as a hardware queue or a bitmap.
- **Allocate:** When an instruction issues, a free physical register is removed from the free list and assigned to the destination architectural register.
- **Free:** When an instruction commits, the old physical register (the one that was previously mapped to the architectural register) is returned to the free list.

The free list must have enough entries to handle the maximum number of in-flight instructions. If the free list is empty, the processor cannot issue new instructions until some instructions commit.

**Physical Register File (PRF):**

The PRF is the actual register file that holds the values. It is much larger than the architectural register file and has many read/write ports.
- **Read ports:** 2 per instruction (for 2 source operands). A 4-way processor needs 8 read ports.
- **Write ports:** 1 per instruction. A 4-way processor needs 4 write ports.
- **Size:** 256 entries × 64 bits = 16,384 bits. With 8 read ports and 4 write ports, the area is significant.

Multi-ported register files are expensive. Techniques to reduce cost:
- **Register file banking:** Divide the PRF into banks. Each bank has fewer ports. An instruction accesses one bank based on the physical register number.
- **Hierarchical register file:** A small, fast register file (e.g., 32 entries) for frequently accessed registers and a larger, slower file for the rest.
- **Read-after-write bypassing:** If a register is written and read in the same cycle, bypass the value directly without reading the register file.

**Renaming process example:**

Initial: RAT[R1] = P1, RAT[R2] = P2, RAT[R3] = P3. Free list: P8, P9, P10, ...

Instruction 1: ADD R1, R2, R3
- Read sources: P2 (for R2), P3 (for R3).
- Allocate destination: P8 for R1.
- Update RAT: RAT[R1] = P8.
- Save old mapping: P1 (to be freed when I1 commits).

Instruction 2: SUB R4, R1, R5
- Read sources: P8 (for R1, from RAT), P5 (for R5).
- Allocate destination: P9 for R4.
- Update RAT: RAT[R4] = P9.

Instruction 3: MUL R1, R6, R7
- Read sources: P6 (for R6), P7 (for R7).
- Allocate destination: P10 for R1.
- Update RAT: RAT[R1] = P10.
- Save old mapping: P8 (to be freed when I3 commits).

Now, I1 writes to P8, I2 writes to P9, I3 writes to P10. All three can execute in parallel because they write to different physical registers. I2 reads R1 from P8 (I1's result), and any subsequent instruction that reads R1 will use P10 (I3's result).

**Branch misprediction recovery:**

When a branch is mispredicted, the RAT must be restored to the state before the branch. The processor checkpoints the RAT at each branch prediction. If the prediction is wrong, the checkpoint is restored, and all speculative physical registers are returned to the free list.

The checkpoint can be implemented as:
- **Copy of the RAT:** Simple but expensive (32 entries × 8 bits = 256 bits per checkpoint). For 8 branches, this is 2,048 bits.
- **Checkpoint stack:** Store only the changed mappings. When a branch is predicted, push the changed mappings onto a stack. On misprediction, pop the stack to restore the RAT.
- **Future file:** Maintain a separate "future file" that tracks the speculative mappings. The architectural RAT is only updated on commit.

**Area and power implications:**

The PRF is one of the largest structures in the processor. It consumes significant area and power. The RAT is smaller but must be accessed every cycle. The free list requires queue management logic.

Modern processors use techniques to reduce PRF power:
- **Clock gating:** Disable the PRF clock when not in use.
- **Power gating:** Turn off unused PRF banks.
- **Voltage scaling:** Reduce the PRF voltage when the processor is idle.

#### Key concepts
- Architectural registers vs. physical registers
- Register Map Table (RAT): maps architectural to physical
- Free list: allocates and reclaims physical registers
- Physical Register File (PRF): large, multi-ported
- Renaming process: read RAT for sources, allocate new physical register for destination
- Saved old mappings for commit-time freeing
- PRF read/write ports: 2 reads + 1 write per instruction
- Register file banking and hierarchical design
- Branch misprediction recovery: RAT checkpointing
- Checkpoint implementations: copy, stack, future file
- Area and power implications of PRF

#### Hands-on activity
Implement a register renaming simulator in Python. The simulator should maintain a RAT, a free list, and a PRF. It should accept a sequence of instructions and show the physical register allocation for each. Test with:
```
ADD R1, R2, R3
SUB R4, R1, R5
MUL R1, R6, R7
DIV R8, R1, R4
ADD R4, R1, R8
```

Show the RAT after each instruction. Show the free list size. Show which physical registers are allocated and freed. Then simulate a branch misprediction after the third instruction: restore the RAT to the checkpoint and show which physical registers are reclaimed. Calculate the total number of physical registers used and discuss the minimum number needed for this sequence.

#### Assessment idea
Ask: "How many physical registers are needed for a processor with 32 architectural registers and a reorder buffer of 128 entries?" Answer: The number of physical registers must be at least the number of architectural registers plus the number of in-flight instructions that have not yet committed. Each instruction that writes to a register allocates a new physical register. The old physical register is not freed until the instruction commits. So the minimum number of physical registers is 32 + 128 = 160. However, modern processors typically use more physical registers (e.g., 256 or 512) to handle multiple writes per instruction and to provide a buffer for register allocation. The exact number depends on the workload: if many instructions write to the same architectural register, fewer physical registers are needed because the old mappings are freed quickly. If many instructions write to different architectural registers, more physical registers are needed. Then ask: "Why is a multi-ported register file expensive in area and power, and how does register file banking reduce this cost?" Answer: A multi-ported register file requires separate read and write circuitry for each port. Each additional port requires more transistors, more wires, and more decoding logic. The area of a register file grows with the square of the number of ports (for a given number of entries). Register file banking divides the register file into multiple smaller banks, each with fewer ports. An instruction accesses only one bank, so the total number of ports per bank is reduced. For example, a 256-entry register file with 8 read ports and 4 write ports might be divided into 4 banks of 64 entries each with 2 read ports and 1 write port. The area of each bank is much smaller than the full multi-ported file. The trade-off is that bank conflicts can occur if multiple instructions need to access the same bank, which may require arbitration or stalls.

#### AI generation note
Create a 10-minute animated lesson. Show architectural registers as name tags that people wear. Show physical registers as actual lockers in a locker room. Show the RAT as a directory that maps name tags to lockers. Show renaming as a person getting a new locker every time they receive something new. Show WAW hazards as two people trying to put things in the same locker — renaming gives them different lockers. Show WAR hazards as someone trying to read from a locker that is being emptied — renaming ensures the reader uses the old locker while the writer uses a new one. Show the free list as a pile of unused lockers. Show the branch misprediction recovery as restoring the old directory. Show the PRF as a large locker room with many more lockers than people. End with a reflection: "Why do out-of-order processors need more physical registers than architectural registers?"

---

### Chapter 6.4 — Reorder Buffer and In-Order Commit

#### Learning objectives
- Explain why out-of-order execution complicates exception handling.
- Implement a reorder buffer (ROB) that allows out-of-order execution with in-order completion.
- Understand the interaction between the ROB, reservation stations, and the register file.
- Describe the concept of speculative execution and how the ROB handles mispredictions.

#### Detailed lesson content

Tomasulo's algorithm enables out-of-order execution, but it creates a serious problem: **exception handling**. In a sequential processor, an exception (like a divide-by-zero or page fault) occurs in program order. The processor can stop, save the state, and hand control to the operating system. In an out-of-order processor, instructions execute and complete in different orders. If instruction 5 causes an exception but instruction 8 has already written its result to the register file, the processor cannot simply roll back to the state before instruction 5 — the state has been modified by instructions that should not have executed yet.

This is the problem of **imprecise exceptions**. An imprecise exception means that the processor cannot identify exactly which instruction caused the exception, and the state of the machine is inconsistent with the program order. Imprecise exceptions make debugging impossible and can cause operating system crashes because the OS cannot recover from an unknown state.

The **Reorder Buffer (ROB)** is the solution. The ROB is a circular buffer that holds instructions in program order from the time they are issued until they are committed. Instructions execute out of order (in the reservation stations), but their results are not written to the register file or memory until they reach the head of the ROB and are **committed** in program order. This ensures that the architectural state is always consistent with program order, and exceptions can be handled precisely.

**ROB structure:**

Each ROB entry contains:
- **Instruction type:** ALU, load, store, branch, etc.
- **Destination register:** The architectural register that will be written.
- **Value:** The result of the instruction (computed out of order).
- **Ready bit:** Whether the instruction has completed execution.
- **Exception status:** Whether the instruction caused an exception.
- **Speculation bit:** Whether the instruction was fetched speculatively (after a predicted branch).

**ROB operation:**

1. **Dispatch (Issue):** When an instruction is fetched, it is allocated an entry in the ROB in program order. The instruction is also placed in a reservation station. The destination register is marked as being written by the ROB entry (not by the reservation station directly).

2. **Execute:** The instruction executes in the reservation station. When it completes, the result is written to the ROB entry (not to the register file). The ROB entry is marked as ready.

3. **Commit:** The ROB has a head pointer that points to the oldest instruction that has not yet committed. The commit logic checks if the head entry is ready. If it is, the instruction is committed: its result is written to the register file (or memory for stores), and the head pointer is advanced. If the head entry caused an exception, the exception is handled now, and all subsequent instructions in the ROB are flushed.

4. **Flush:** If a branch is mispredicted or an exception occurs, all instructions after the branch/exception in the ROB are discarded. The register file and memory are not modified by these discarded instructions because they have not been committed yet. The processor state is restored to the last committed instruction, which is precise.

**ROB and register file interaction:**

There are two common approaches:

1. **ROB with register file:** The ROB holds the results, and the register file holds the committed state. When an instruction commits, its result is written to the register file. This is simple but requires the ROB to be searched for the most recent value of a register (which can be slow).

2. **ROB with physical register file (PRF):** This is the modern approach used in processors like Intel Core, AMD Zen, and ARM Cortex-A7x. The processor has a large physical register file (e.g., 256 physical registers) and a **register map table** that maps architectural registers to physical registers. When an instruction is dispatched, it is allocated a new physical register for its destination. The map table is updated to point the architectural register to the new physical register. The old physical register is not freed until the instruction commits (to allow precise recovery). When the instruction commits, the map table update is made permanent, and the old physical register is freed. This approach is faster because the register file is read directly, not through the ROB.

**Speculative execution and the ROB:**

When a branch is predicted, instructions from the predicted path are fetched and placed in the ROB. These instructions are marked as speculative. They execute out of order in the reservation stations, but they cannot commit until the branch is resolved. If the branch prediction is correct, the speculative bit is cleared, and the instructions can commit normally. If the prediction is wrong, all speculative instructions after the branch are flushed from the ROB, and their results are discarded. The processor state is restored to the point before the branch, and fetching resumes from the correct path.

The ROB thus serves as both an exception handler and a speculation recovery mechanism. It is the single most important structure in a modern out-of-order processor.

**ROB size:**

The ROB size determines how many instructions can be in flight. Modern processors have ROBs of 100–300 entries. A larger ROB allows more ILP to be extracted but requires more area, power, and commit logic. The ROB size is one of the key differentiators between processor families (e.g., Intel Core i7 has a 224-entry ROB, while AMD Zen 3 has a 256-entry ROB).

#### Key concepts
- Imprecise exceptions in out-of-order execution
- Reorder buffer (ROB) for in-order completion
- ROB structure: instruction type, destination, value, ready bit, exception status, speculation bit
- Dispatch, execute, commit, and flush stages
- ROB with register file vs. ROB with physical register file (PRF)
- Register map table and physical register allocation
- Speculative execution and branch misprediction recovery via ROB flush
- ROB size and its impact on ILP extraction
- Commit logic and head pointer advancement
- Precise exception handling by committing in program order

#### Hands-on activity
Extend the Tomasulo's algorithm simulation from Chapter 6.1 to include a reorder buffer. The ROB should have 8 entries. Implement the following:
1. Instructions are placed in the ROB in program order when they are issued.
2. Instructions execute in reservation stations and write their results to the ROB (not the register file).
3. The commit logic checks the head of the ROB every cycle. If the head instruction is ready, it commits: writes to the register file, frees resources, and advances the head pointer.
4. If a branch misprediction occurs at the ROB head, flush all instructions after the branch in the ROB and restore the register map.

Simulate the execution of this sequence with a predicted-taken branch that is mispredicted:
```
ADD R1, R2, R3     # I1
BEQ R1, R2, target # I2: predicted taken, actually not taken
ADD R4, R5, R6     # I3: speculative, on predicted path
SUB R7, R8, R9     # I4: speculative, on predicted path
target: MUL R10, R11, R12  # I5: on correct path
```

Show the ROB state cycle by cycle, including the speculative bits. Show the flush when the misprediction is detected. Show that I3 and I4 are discarded and their results never reach the register file. Calculate the penalty (number of cycles wasted) for the misprediction.

#### Assessment idea
Ask: "Why does a physical register file (PRF) with a register map table provide better performance than a ROB that stores results directly?" Answer: In a ROB-based design, reading a register requires checking the ROB to see if there is a pending write to that register. This requires searching the ROB, which is slow and power-hungry. In a PRF design, the register map table points directly to the physical register that holds the most recent value. Reading a register is a simple register file access, which is fast and efficient. The PRF also allows the register file to be larger (hundreds of entries) without slowing down reads. The trade-off is that the PRF requires more complex management (allocating and freeing physical registers, maintaining the map table, and restoring the map on flushes). Then ask: "A processor has a 128-entry ROB and a branch misprediction is detected at the head. How many instructions might be wasted (flushed) on average if the branch is in the middle of the ROB?" Answer: On average, half the ROB entries (64 instructions) would be speculative and would be flushed. Each flushed instruction represents wasted work: fetch, decode, issue, and potentially execution cycles. If the processor is 4-way superscalar, the 64 instructions represent about 16 cycles of issue bandwidth. The total penalty includes the cycles to fill the pipeline again, so the effective penalty is typically 15–20 cycles. This is why branch prediction accuracy is critical for out-of-order processors.

#### AI generation note
Create a 10-minute animated lesson. Show the ROB as a conveyor belt with slots for instructions in program order. Show instructions entering the belt at the tail, executing out of order while on the belt, and exiting at the head in order. Show an exception as a red flag that stops the belt at the head, with all subsequent instructions falling off. Show a branch misprediction as a wrong turn that causes all speculative cars to be redirected back to the main road. Show the PRF as a large warehouse with a map table that points to the correct box. Show the register file update as the box being delivered only when the instruction exits the belt. Show the flush as a garbage truck collecting all discarded instructions. Include the cycle-by-cycle simulation. End with a reflection: "Why is the ROB size a key marketing differentiator between high-end and low-end processors?"

---

### Chapter 6.5 — Memory Disambiguation and Load-Store Queues

#### Learning objectives
- Explain the memory disambiguation problem in out-of-order processors.
- Describe store-to-load forwarding and how it handles memory dependencies.
- Understand the role of the load-store queue (LSQ) in tracking memory operations.
- Analyze modern OoO techniques: register renaming with a physical register file, instruction queues, and wide issue.

#### Detailed lesson content

While register dependencies are easy to track (each instruction explicitly names its source and destination registers), memory dependencies are much harder. Memory instructions (loads and stores) access memory by address, not by register name. If a load instruction executes before a previous store instruction, and both access the same memory address, the load will read stale data. This is the **memory disambiguation** problem: the processor must determine whether a load depends on a previous store before allowing the load to execute.

**The store-to-load forwarding problem:**

Consider this sequence:
```
SW R1, 0(R2)    # Store word to address in R2
LW R3, 0(R2)    # Load word from address in R2
```

The store writes to memory, and the load reads from the same address. If the load executes before the store completes, it reads the old value from memory instead of the new value written by the store. The correct behavior is for the load to receive the store's data directly, bypassing memory. This is called **store-to-load forwarding**.

To handle this, out-of-order processors use a **load-store queue (LSQ)** or **memory order buffer (MOB)**. The LSQ tracks all outstanding loads and stores in program order. When a load is issued, it checks the LSQ for previous stores to the same address. If there is a matching store that has not yet written to memory, the load receives the store's data from the LSQ. If there is no matching store, the load accesses the cache or memory.

**Speculative memory disambiguation:**

In an aggressive out-of-order processor, loads are often scheduled before the addresses of previous stores are known. The processor must guess whether the load and store access the same address. If the guess is correct, the load executes early and performance improves. If incorrect, the load must be re-executed with the correct data. This is **speculative memory disambiguation**.

The processor uses several techniques:
1. **Address-based disambiguation:** Once the store address is computed, the processor compares it with the load address. If they match, the load is re-executed (or the data is forwarded).
2. **Store set prediction:** The processor remembers which stores have previously conflicted with loads and predicts whether future loads will conflict with the same stores.
3. **Conservative scheduling:** Loads are not scheduled until all previous store addresses are known. This is safe but limits performance.

**Memory dependence speculation is one of the most performance-critical aspects of modern processor design.** A processor that can accurately predict memory dependencies and forward data efficiently achieves significantly higher performance than one that conservatively waits for all store addresses.

**Load-store queue structure:**

The LSQ contains entries for loads and stores in program order. Each entry contains:
- The instruction's virtual address (when computed).
- The instruction's physical address (after translation).
- The data to be stored (for stores) or the data loaded (for loads).
- The ROB tag (to identify the instruction for commit and flush).
- A valid bit and an address-known bit.

When a store commits, it writes its data to the cache or memory. Until then, the data is held in the LSQ. When a load issues, it checks all previous stores in the LSQ. If a store has the same address and its data is available, the load receives the data from the LSQ. If the store address is not yet known, the load must either wait or speculate.

**Advanced OoO techniques:**

1. **Wide issue and large instruction windows:** Modern processors issue 4–8 instructions per cycle and have instruction windows of 100–300 entries. This requires massive issue logic, large register files, and many functional units. The complexity grows with the square of the issue width, making wide issue challenging.

2. **Clustered microarchitectures:** To reduce the complexity of wide issue, some processors divide the execution resources into clusters, each with its own register file and issue logic. Instructions are steered to the cluster that has their operands. This reduces the crossbar and broadcast costs but can increase latency for instructions that need to communicate between clusters.

3. **Value prediction:** Some research processors predict the result of instructions (e.g., loads from predictable addresses) before they execute. If the prediction is correct, the dependent instructions can execute earlier. If incorrect, the instructions are re-executed. Value prediction is not widely used in commercial processors because the misprediction penalty is high and the benefits are limited.

4. **Instruction fusion:** The processor fuses two or more simple instructions into a single complex micro-operation. For example, compare-and-branch can be fused into a single operation that updates the condition codes and branches in one step. This reduces the number of operations in the pipeline and improves performance.

5. **Macro-op fusion and micro-op fusion:** In x86 processors, multiple x86 instructions (macro-ops) are fused into fewer micro-ops. In RISC processors, multiple micro-ops can be fused into a single operation that uses multiple functional units simultaneously.

#### Key concepts
- Memory disambiguation: load-store dependency detection
- Store-to-load forwarding: load receives data from pending store
- Load-store queue (LSQ) or memory order buffer (MOB)
- Speculative memory disambiguation: scheduling loads before store addresses are known
- Address-based disambiguation and store set prediction
- Conservative vs. speculative scheduling
- LSQ structure: virtual address, physical address, data, ROB tag
- Wide issue and large instruction windows
- Clustered microarchitectures
- Value prediction and instruction fusion
- Macro-op fusion and micro-op fusion

#### Hands-on activity
Simulate a load-store queue for a 4-instruction sequence:
```
SW R1, 0x1000(R0)   # Store 0xABCD to address 0x1000
LW R2, 0x1000(R0)   # Load from address 0x1000
SW R3, 0x1004(R0)   # Store 0xEF01 to address 0x1004
LW R4, 0x1000(R0)   # Load from address 0x1000
```

Show the LSQ state after each instruction is issued. Show how the first load checks the LSQ, finds the store to 0x1000, and receives the data via store-to-load forwarding. Show how the second load also checks the LSQ and finds the first store. Then, simulate a speculative disambiguation scenario where the second load (LW R4) is issued before the second store's address is known. The processor speculates that the addresses do not match. When the store address is later computed as 0x1004 (different from 0x1000), the speculation is correct. If the store address were 0x1000, the load would need to be re-executed. Draw a timeline showing both correct and incorrect speculation cases and calculate the penalty for incorrect speculation.

#### Assessment idea
Ask: "Why is memory disambiguation more difficult than register dependency tracking in out-of-order processors?" Answer: Register dependencies are explicit: the instruction names the source and destination registers in the instruction encoding. The hardware can check for dependencies by simply comparing register numbers. Memory dependencies are implicit: the load and store instructions specify addresses, not dependencies. The addresses are computed at runtime, and two different instructions might access the same address without the hardware knowing until the addresses are computed. This means the processor must either wait for all previous store addresses to be known before issuing a load (conservative, slow) or guess whether the load depends on a previous store (speculative, risky). This is fundamentally harder than register tracking. Then ask: "Why does store-to-load forwarding require the load to check all previous stores in the LSQ, not just the most recent store?" Answer: Because the most recent store in program order might not be the most recent store to the same address. Consider: `SW R1, 0x1000(R0)` then `SW R2, 0x2000(R0)` then `LW R3, 0x1000(R0)`. The most recent store is to 0x2000, but the load is from 0x1000. The load must skip the store to 0x2000 and find the store to 0x1000. Therefore, the load must check all previous stores and find the most recent one that matches its address. This requires associative comparison in the LSQ, which is expensive but necessary for correctness.

#### AI generation note
Create a 10-minute animated lesson. Show memory as a warehouse with loads as delivery requests and stores as incoming shipments. Show the LSQ as a loading dock that tracks pending shipments. Show store-to-load forwarding as a direct handoff from the dock to the delivery truck without going to the warehouse. Show speculative disambiguation as a delivery truck guessing that no shipments are for its address and leaving early. Show the incorrect guess as the truck having to return. Show the wide issue processor as a massive airport with multiple runways and a complex air traffic control system. Show clustered microarchitecture as regional airports that handle local flights. Show value prediction as a weather forecast that predicts sunny skies. Include the LSQ simulation timeline. End with a reflection: "What is the most challenging aspect of designing a high-performance out-of-order processor?"

---

### Chapter 6.6 — Speculative Execution and Security: Spectre and Meltdown

#### Learning objectives
- Explain how speculative execution can be exploited to leak information.
- Describe the Spectre vulnerability and its variants (Spectre-v1, Spectre-v2, Spectre-v4).
- Understand the Meltdown vulnerability and how it exploits out-of-order execution.
- Analyze the mitigations for Spectre and Meltdown and their performance impact.

#### Detailed lesson content

Speculative execution is essential for performance, but it creates a security risk. In 2018, researchers discovered two major vulnerabilities — **Spectre** and **Meltdown** — that exploit speculative execution to leak sensitive information across security boundaries.

**Spectre:**

Spectre exploits **speculative execution** to read sensitive data that the program should not have access to. The attack works by tricking the processor into speculatively executing code that accesses sensitive data, and then measuring the side effects of that speculative execution (specifically, cache timing) to infer the data.

**Spectre Variant 1 (Bounds Check Bypass):**

```c
if (x < array1_size) {
    y = array2[array1[x] * 256];
}
```

If the branch predictor predicts that the bounds check will pass (based on previous executions), the processor speculatively executes the memory access `array1[x]`. If `x` is out of bounds, `array1[x]` reads sensitive data (e.g., kernel memory, another process's memory). The speculative execution then uses this data to access `array2[array1[x] * 256]`. Although the speculative result is eventually discarded, the cache state is modified: the cache line corresponding to `array2[array1[x] * 256]` is loaded. The attacker then measures the access time to `array2` elements to determine which cache line was loaded, revealing the value of `array1[x]`.

**Spectre Variant 2 (Branch Target Injection):**

The attacker poisons the Branch Target Buffer (BTB) to redirect speculative execution to attacker-controlled code. This code then reads sensitive data and leaks it via the cache side channel.

**Spectre Variant 4 (Speculative Store Bypass):**

Exploits speculative memory disambiguation. A load is speculatively executed before a previous store to the same address, reading stale data that may contain sensitive information.

**Meltdown:**

Meltdown exploits **out-of-order execution** to read kernel memory from user space. In most operating systems, the kernel is mapped into the address space of every process for performance reasons (to avoid TLB flushes on system calls). However, the kernel memory is protected: user-mode accesses to kernel pages trigger a page fault.

Meltdown works by speculatively executing an instruction that reads kernel memory before the page fault is raised. The speculative execution uses the secret value to access a user-accessible array, modifying the cache state. The page fault is raised, but the cache modification remains. The attacker measures the cache state to infer the secret value.

Unlike Spectre, which requires some attacker-controlled code execution, Meltdown can be exploited by any unprivileged program to read kernel memory.

**Mitigations:**

1. **Kernel Page Table Isolation (KPTI):** Also known as KAISER. The kernel's page tables are no longer mapped in user space. This prevents Meltdown but increases the cost of system calls (because TLBs must be flushed on every kernel entry/exit). Performance impact: 1–30% depending on the workload (high for I/O-bound workloads).

2. **Retpoline:** A software mitigation for Spectre-v2. Replaces indirect branches with return instructions that are harder to poison. Performance impact: minimal for most workloads.

3. ** speculation barriers:** Instructions like `LFENCE` prevent speculative execution across the barrier. Used in software mitigations for Spectre-v1. Performance impact: significant because it disables speculation.

4. **Hardware mitigations:** Newer processors (Intel Coffee Lake Refresh, AMD Zen 2+, ARM Cortex-A76+) include hardware features to prevent speculation in certain cases, such as:
   - **Speculative Store Bypass Disable (SSBD):** Prevents speculative load-store bypassing.
   - **Indirect Branch Restricted Speculation (IBRS):** Restricts speculation across privilege boundaries.
   - **Enhanced IBPB:** Clears the BTB on privilege transitions.

5. **Site isolation:** Browser mitigations that isolate different websites in separate processes, preventing cross-site Spectre attacks.

**Performance impact of mitigations:**

The performance impact of Spectre and Meltdown mitigations varies widely:
- **KPTI:** 1–30% slowdown, highest for workloads with frequent system calls.
- **Retpoline:** Minimal impact for most workloads, but can hurt indirect branch-heavy code.
- **Software barriers:** 5–50% slowdown for speculation-heavy code.
- **Hardware mitigations:** Minimal impact because they are integrated into the processor design.

The security vs. performance trade-off is a major challenge in modern processor design. Some mitigations are disabled in high-performance computing environments where the threat model does not include local attackers.

#### Key concepts
- Spectre: exploits speculative execution to leak data via cache side channels
- Spectre-v1: bounds check bypass
- Spectre-v2: branch target injection (BTB poisoning)
- Spectre-v4: speculative store bypass
- Meltdown: exploits out-of-order execution to read kernel memory
- Cache side channels: timing attacks to infer speculative state
- Kernel Page Table Isolation (KPTI / KAISER)
- Retpoline for Spectre-v2 mitigation
- Speculation barriers (LFENCE)
- Hardware mitigations: SSBD, IBRS, IBPB
- Performance impact of mitigations
- Security vs. performance trade-off

#### Hands-on activity
Write a simple Spectre-like proof-of-concept in C (or analyze an existing one). The program should:
1. Allocate two arrays: `array1` (with a small size) and `array2` (with a large size).
2. Train the branch predictor to predict that a bounds check will pass.
3. Use an out-of-bounds index to read a secret value from `array1`.
4. Use the secret value to access `array2[secret * 256]`.
5. Measure the access time to `array2` elements to determine which cache line was loaded.
6. Reconstruct the secret value.

**Important:** Only run this on your own machine and do not use it to access data you do not own. This is for educational purposes only. Analyze the code and explain how each step contributes to the attack. Then, research the mitigations available on your processor (check `/proc/cpuinfo` on Linux for flags like `kpti`, `ibrs`, `ibpb`, `ssbd`) and discuss whether they prevent the attack.

#### Assessment idea
Ask: "Why does Spectre work even though the speculative execution is eventually rolled back and the architectural state is not modified?" Answer: Spectre works because while the speculative execution is rolled back at the architectural level (registers, memory), the microarchitectural state (specifically the cache) is not rolled back. When the processor speculatively accesses `array2[secret * 256]`, it loads the corresponding cache line. Even though the register state is restored, the cache line remains in the cache. The attacker can then measure the access time to different elements of `array2` to determine which cache line was loaded. This is a **cache side-channel attack**: the cache state leaks information about the speculative execution. The fundamental problem is that speculative execution affects microarchitectural state (cache, branch predictor, TLB) that is not fully restored on misprediction. Then ask: "Why is KPTI (Kernel Page Table Isolation) effective against Meltdown but not against Spectre?" Answer: KPTI is effective against Meltdown because Meltdown requires the attacker to access kernel memory that is mapped in the user process's address space. KPTI removes the kernel mapping from user space, so the attacker cannot access kernel memory at all, even speculatively. However, KPTI does not prevent Spectre because Spectre does not require accessing kernel memory. Spectre can be used to read data within the same process (e.g., reading data from a different security context within a browser) or across processes if they share memory. Spectre exploits the branch predictor and cache side channels, which KPTI does not address. Defending against Spectre requires different mitigations: retpoline for branch target injection, speculation barriers for bounds check bypass, and site isolation for cross-site attacks.

#### AI generation note
Create a 10-minute animated lesson. Show speculative execution as a detective making guesses. Show Spectre as a spy who watches the detective's guesses to infer secrets. Show Meltdown as a spy who breaks into a secure vault by exploiting the detective's shortcuts. Show the cache as a whiteboard that the detective uses but doesn't erase after a wrong guess. Show the attacker measuring the whiteboard to infer the guess. Show KPTI as removing the secure vault from the detective's map. Show retpoline as the detective using a different route to avoid poisoned GPS directions. Show hardware mitigations as the detective being trained to be more cautious. Show the performance impact as the detective working slower but more securely. End with a reflection: "Can we have both high-performance speculative execution and perfect security?"

---

### Chapter 6.7 — Modern Out-of-Order Microarchitectures

#### Learning objectives
- Describe the microarchitecture of modern high-performance processors: Intel Core, AMD Zen, and ARM Cortex-A7x.
- Compare the ROB sizes, issue widths, and cache hierarchies of different processor families.
- Understand the evolution of out-of-order execution from the Pentium Pro to modern processors.
- Analyze the design trends: wider issue, larger windows, more functional units, and specialized accelerators.

#### Detailed lesson content

Modern high-performance processors are the culmination of decades of out-of-order execution research. This chapter compares the microarchitectures of leading processor families.

**Intel Core Microarchitecture (Sandy Bridge to Raptor Lake):**

- **Front-end:** 4-wide instruction decode, μop cache (decoded stream buffer), branch predictor with TAGE and loop predictor.
- **Issue width:** 4–6 μops per cycle (Sandy Bridge: 6, Skylake: 6, Alder Lake: 6).
- **ROB size:** 168 entries (Sandy Bridge) to 224 entries (Skylake) to 512 entries (Raptor Lake).
- **Reservation stations:** Unified scheduler (not separate per functional unit). 60–120 entries.
- **Physical registers:** 180 (Sandy Bridge) to 256 (Skylake).
- **Functional units:** 8 execution ports (0–7). Port 0: ALU/branch, Port 1: ALU, Port 2: load, Port 3: load, Port 4: store, Port 5: ALU/branch, Port 6: ALU/branch, Port 7: store address.
- **Memory:** 32 KB L1I, 32 KB L1D, 256 KB L2 (per core), shared L3 (3–36 MB).
- **SIMD:** AVX-512 on some models (Xeon, HEDT).

**AMD Zen Microarchitecture (Zen 3, Zen 4, Zen 5):**

- **Front-end:** 4-wide instruction decode, μop cache, branch predictor with TAGE.
- **Issue width:** 6–8 μops per cycle (Zen 3: 6, Zen 4: 8, Zen 5: 8).
- **ROB size:** 256 entries (Zen 3) to 320 entries (Zen 4) to 384 entries (Zen 5).
- **Reservation stations:** Unified scheduler. 96 entries (Zen 3) to 120 entries (Zen 4).
- **Physical registers:** 224 (Zen 3) to 288 (Zen 4).
- **Functional units:** 10 execution ports. More integer and floating-point units than Intel.
- **Memory:** 32 KB L1I, 32 KB L1D, 512 KB L2 (per core), shared L3 (16–96 MB).
- **SIMD:** AVX-512 on Zen 4 and Zen 5.

**ARM Cortex-A7x (Cortex-A78, X1, X2, X3, X4):**

- **Front-end:** 4–6-wide instruction fetch, branch predictor with TAGE and loop predictor.
- **Issue width:** 4–6 μops per cycle (A78: 6, X1: 6, X4: 10).
- **ROB size:** 160 entries (A78) to 288 entries (X4).
- **Reservation stations:** Unified or distributed scheduler.
- **Physical registers:** 128–256.
- **Functional units:** 6–10 execution ports.
- **Memory:** 32–64 KB L1I, 32-64 KB L1D, 256 KB–1 MB L2, shared L3 (up to 8 MB).
- **SIMD:** NEON (mandatory), SVE (optional).

**Apple Silicon (M1, M2, M3, M4):**

- **Front-end:** 8-wide instruction fetch, massive μop cache, branch predictor.
- **Issue width:** 8–10 μops per cycle.
- **ROB size:** 630+ entries (M1), 900+ entries (M4) — among the largest in the industry.
- **Physical registers:** 600+.
- **Functional units:** 14+ execution ports.
- **Memory:** 64 KB L1I, 64 KB L1D, 4 MB L2 (per core), shared L3 (8–48 MB).
- **SIMD:** NEON, SVE.
- **Design philosophy:** Extremely wide issue, massive ROB, and large caches to maximize single-thread performance. The M4 achieves industry-leading performance per watt.

**Design trends:**
1. **Wider issue:** From 3-wide (Pentium Pro) to 8-wide (Apple M4) to 10-wide (Zen 5, ARM X4).
2. **Larger ROB:** From 40 entries (Pentium Pro) to 900+ entries (Apple M4).
3. **More functional units:** From 5 ports (Pentium Pro) to 14+ ports (Apple M4).
4. **Larger caches:** L2 caches have grown from 256 KB to 1 MB per core. L3 caches have grown from 8 MB to 96 MB.
5. **Specialized accelerators:** Neural processing units (NPUs), matrix multiply units, video encode/decode units, and cryptography accelerators are integrated on-chip.
6. **Heterogeneous cores:** Big cores (high performance) and little cores (high efficiency) on the same chip.

**The evolution of out-of-order execution:**
- **Pentium Pro (1995):** First Intel OoO processor. 3-wide issue, 40-entry ROB, reservation stations.
- **Pentium 4 (2000):** NetBurst architecture. Deep pipeline, trace cache, but limited IPC.
- **Core 2 (2006):** Return to moderate pipeline, wider issue, larger ROB (96 entries).
- **Sandy Bridge (2011):** μop cache, 6-wide issue, 168-entry ROB.
- **Skylake (2015):** 6-wide issue, 224-entry ROB, AVX-512 support.
- **Zen (2017):** AMD's return to high-performance OoO. 6-wide issue, 192-entry ROB.
- **Zen 3 (2020):** Unified L3 cache, 256-entry ROB, 6-wide issue.
- **Zen 4 (2022):** AVX-512, 320-entry ROB, 8-wide issue.
- **Apple M1 (2020):** 8-wide issue, 630-entry ROB, massive caches.
- **Apple M4 (2024):** 10-wide issue, 900+ entry ROB, industry-leading efficiency.

#### Key concepts
- Intel Core microarchitecture: Sandy Bridge to Raptor Lake
- AMD Zen microarchitecture: Zen 3, Zen 4, Zen 5
- ARM Cortex-A7x and X-series
- Apple Silicon: M1, M2, M3, M4
- ROB sizes, issue widths, reservation station sizes
- Functional unit ports and execution capabilities
- Cache hierarchy sizes and evolution
- Design trends: wider issue, larger ROB, more functional units
- Heterogeneous cores and specialized accelerators
- Evolution from Pentium Pro to modern processors

#### Hands-on activity
Research the microarchitecture specifications of three processors: Intel Core i9-13900K, AMD Ryzen 9 7950X, and Apple M3 Pro. Create a detailed comparison table with: process node, number of cores (P-cores and E-cores for Intel), issue width, ROB size, reservation station size, physical register count, number of execution ports, L1/L2/L3 cache sizes, peak memory bandwidth, and TDP. Discuss the design philosophy of each processor: Intel's hybrid approach, AMD's focus on high core counts, and Apple's focus on single-thread performance and efficiency. Discuss which processor is best suited for different workloads: gaming, video editing, scientific computing, and AI inference.

#### Assessment idea
Ask: "Apple's M4 processor has a 900+ entry ROB, while Intel's Core i9-13900K has a 512-entry ROB. Why does Apple use such a large ROB, and what are the trade-offs?" Answer: Apple uses a massive ROB because its design philosophy prioritizes single-thread performance and the ability to look far ahead in the instruction stream to find parallelism. A larger ROB allows more instructions to be in flight simultaneously, which helps hide memory latency (more loads can be outstanding) and extract more ILP from complex workloads. The M4 also has very wide issue (10 μops per cycle) and large caches, so it can consume the ILP found by the large ROB. The trade-offs are: (1) area — the ROB consumes significant silicon area; (2) power — a larger ROB requires more power to manage and search; (3) complexity — the commit logic and speculation recovery become more complex; (4) diminishing returns — beyond a certain size, the additional ILP found is small. However, Apple has shown that for their target workloads (web browsing, video editing, compilation, AI inference), the large ROB provides significant performance benefits that justify the cost. Intel and AMD have smaller ROBs because they prioritize multi-core scaling and power efficiency, and their workloads may not benefit as much from extremely large single-thread windows. Then ask: "Why have processor designers moved from separate reservation stations per functional unit (Tomasulo's original design) to unified reservation stations (or unified schedulers) in modern processors?" Answer: Unified reservation stations (or unified issue queues) provide better flexibility because any instruction can be assigned to any available functional unit, regardless of type. In Tomasulo's original design, each functional unit had its own reservation stations, so an instruction could only be issued to a specific unit type. If all ALU reservation stations were full but FP stations were empty, an ALU instruction would stall even though functional units were available. A unified scheduler allows dynamic assignment of instructions to functional units based on availability, improving utilization. The trade-off is that a unified scheduler is more complex to implement because it must arbitrate among all functional units. However, modern processors have found that the flexibility benefits outweigh the complexity costs. Some processors use a hybrid approach: unified schedulers for integer operations but separate queues for load/store units and floating-point units.

#### AI generation note
Create a 10-minute animated lesson. Show the evolution of out-of-order processors as a timeline of buildings. Show the Pentium Pro as a small house. Show the Pentium 4 as a tall, narrow skyscraper. Show the Core 2 as a wider, more efficient building. Show Sandy Bridge as a modern office tower. Show Skylake as a larger version. Show Zen as a competitor's tower. Show Apple Silicon as a massive, sleek campus. Show the ROB size as the number of floors. Show issue width as the number of elevators. Show functional units as the number of workstations. Show caches as storage rooms. Show the design trends as the buildings getting wider and taller over time. End with a reflection: "What will the next generation of out-of-order processors look like?"

---

### Chapter 6.8 — Advanced OoO Techniques: Clustering, Fusion, and Value Prediction

#### Learning objectives
- Describe clustered microarchitectures and their trade-offs.
- Explain instruction fusion and its impact on effective issue width.
- Understand value prediction and its potential benefits and risks.
- Analyze the trade-offs between complexity, power, and performance in advanced OoO designs.

#### Detailed lesson content

As processors have become wider and more complex, architects have developed advanced techniques to manage the complexity and improve performance.

**Clustered microarchitectures:**

A clustered microarchitecture divides the out-of-order execution engine into multiple clusters, each with its own register file, reservation stations, and functional units. Instructions are steered to the cluster that has their operands.

Benefits:
- **Reduced broadcast distance:** The CDB and result forwarding only need to span a cluster, not the entire processor. This reduces wire delay and power.
- **Smaller register files:** Each cluster has a smaller register file, which is faster and less power-hungry.
- **Modularity:** Clusters can be replicated to increase parallelism.

Costs:
- **Inter-cluster communication:** If an instruction needs an operand from another cluster, it must be communicated across a cluster boundary, which adds latency.
- **Load balancing:** If one cluster is heavily loaded while another is idle, utilization suffers.
- **Complexity:** The steering logic must balance load and minimize communication.

Examples: Some research processors (e.g., Alpha 21264 had two clusters for integer operations) and some GPU designs use clustering. Most modern CPUs use a unified design rather than clustering.

**Instruction fusion:**

Instruction fusion combines multiple instructions into a single execution unit, effectively increasing the issue width without adding more hardware.

- **Micro-op fusion:** In x86 processors, a load and an ALU operation can be fused into a single micro-op that uses both the load unit and the ALU in the same cycle. This reduces the number of μops in the pipeline and improves throughput.
- **Macro-op fusion:** The front-end fuses two x86 instructions (e.g., compare and branch) into a single μop. This reduces the pressure on the execution engine.
- **Compound instructions:** Some RISC processors (e.g., ARM) support instructions that perform multiple operations (e.g., load-multiple, store-multiple).

Fusion is transparent to software but requires complex hardware to identify and fuse instructions.

**Value prediction:**

Value prediction is the speculative technique of predicting the result of an instruction before it executes. If the prediction is correct, dependent instructions can execute earlier, reducing the critical path.

Types of value prediction:
- **Last-value prediction:** Predict that the result will be the same as the last time the instruction executed.
- **Stride prediction:** Predict that the result will change by a fixed stride (e.g., loop counter increments).
- **Context-based prediction:** Use a table that maps instruction PCs to predicted values based on history.
- **Memory value prediction:** Predict the value that will be loaded from memory.

Benefits:
- Can break dependency chains and increase ILP.
- Particularly effective for loop counters and predictable loads.

Risks:
- **Misprediction penalty:** If the prediction is wrong, all dependent instructions must be replayed, which is expensive.
- **Complexity:** The prediction tables require area and power.
- **Limited benefit:** Studies have shown that value prediction provides only modest performance gains (5–15%) because most instructions are not predictable.

Value prediction is not widely used in commercial processors because the benefits do not justify the costs. However, it remains an active research area.

**Advanced ROB designs:**

- **Virtual ROB:** The ROB is implemented as a linked list or a hierarchical structure to reduce the area of the commit logic.
- **Selective replay:** Instead of flushing the entire pipeline on a misprediction, only the dependent instructions are replayed. This reduces the misprediction penalty.
- **Checkpoint repair:** Multiple checkpoints of the architectural state are maintained so that recovery from mispredictions is faster.

**Trade-offs in advanced OoO design:**

| Technique | Performance Gain | Area Cost | Power Cost | Complexity |
|-----------|------------------|-----------|------------|------------|
| Larger ROB | High | High | High | Medium |
| Wider issue | High | Very High | Very High | Very High |
| Clustering | Medium | Medium | Medium | High |
| Instruction fusion | Medium | Low | Low | Medium |
| Value prediction | Low-Medium | Medium | Medium | High |
| Selective replay | Medium | Medium | Low | High |

#### Key concepts
- Clustered microarchitectures: multiple execution clusters
- Inter-cluster communication latency
- Instruction fusion: micro-op fusion, macro-op fusion
- Value prediction: last-value, stride, context-based
- Value prediction benefits and risks
- Virtual ROB and selective replay
- Advanced ROB designs for faster recovery
- Trade-off matrix for OoO techniques
- Diminishing returns of advanced techniques
- Research vs. commercial adoption of advanced techniques

#### Hands-on activity
Design a clustered microarchitecture for a 4-way superscalar processor. Divide the processor into 2 clusters, each with 2 ALUs, 1 load/store unit, and a local register file of 128 entries. The clusters share a global register file of 256 entries. Design the steering logic: when an instruction is issued, how do you decide which cluster it goes to? (Hint: steer to the cluster that has the source operands or the least load.) Simulate the execution of the following sequence on both a unified design and the clustered design:
```
ADD R1, R2, R3
ADD R4, R5, R6
MUL R7, R1, R4
ADD R8, R2, R5
SUB R9, R7, R8
```

Show how the clustered design handles inter-cluster communication when R7 (in cluster 1) is needed by R9 (in cluster 2). Calculate the penalty for inter-cluster communication (assume 1 cycle latency). Compare the total cycles with the unified design.

#### Assessment idea
Ask: "Why is instruction fusion particularly beneficial for x86 processors compared to RISC processors?" Answer: x86 instructions are variable-length and often map to multiple μops. For example, a memory-to-register ALU operation might require a load μop and an ALU μop. By fusing these into a single μop, the processor reduces the number of operations in the pipeline, effectively increasing the issue bandwidth. RISC processors typically have simpler instructions that already map to a single operation, so there is less opportunity for fusion. However, RISC processors can still benefit from macro-op fusion (e.g., fusing a compare and branch into a single operation) or from compound instructions that perform multiple operations. Fusion is particularly valuable for x86 because it mitigates the "x86 tax" — the overhead of translating complex CISC instructions into simple RISC-like μops. Then ask: "Why has value prediction not been widely adopted in commercial processors despite its potential to break dependency chains?" Answer: Value prediction has several practical challenges: (1) limited accuracy — many instructions produce values that are not predictable (e.g., data-dependent calculations, random numbers, cache misses); (2) high misprediction penalty — when the prediction is wrong, all dependent instructions must be replayed, which can cost 10–20 cycles; (3) area and power cost — the prediction tables require significant hardware; (4) diminishing returns — studies show that value prediction provides only 5–15% performance improvement on average, which is not enough to justify the cost for most processors; (5) security concerns — value prediction could potentially be exploited for side-channel attacks similar to Spectre. Some specialized processors (e.g., for specific workloads with highly predictable data patterns) might benefit from value prediction, but general-purpose processors have found that the costs outweigh the benefits.

#### AI generation note
Create a 10-minute animated lesson. Show a clustered microarchitecture as a campus with two buildings. Show unified architecture as a single large building. Show inter-cluster communication as a bridge between buildings. Show instruction fusion as two small cars merging into a larger car. Show value prediction as a fortune teller guessing lottery numbers. Show the fortune teller sometimes being right (happy dependent instructions) and sometimes wrong (replay required). Show advanced ROB as a smart conveyor belt that only reopens the affected section. Show the trade-off matrix as a dashboard with gauges. End with a reflection: "What is the next big innovation in out-of-order execution?"

---

## Module 7: Memory Hierarchy and Cache Design

> **Goal:** Master the design and analysis of memory hierarchies, from cache fundamentals to advanced cache organizations and their impact on performance.

---

### Chapter 7.1 — The Memory Hierarchy Concept

#### Learning objectives
- Explain why a memory hierarchy is necessary and how it bridges the processor-memory speed gap.
- Describe the principles of locality: temporal and spatial locality.
- Design direct-mapped, set-associative, and fully-associative caches.
- Calculate cache performance metrics: hit rate, miss rate, miss penalty, and average memory access time (AMAT).

#### Detailed lesson content

Processors have become exponentially faster over the decades, following Moore's Law. Memory, however, has not kept pace. While processors execute instructions in sub-nanosecond timescales, accessing main memory (DRAM) takes hundreds of nanoseconds. This **processor-memory speed gap** is one of the most fundamental challenges in computer architecture. If every instruction had to wait for a DRAM access, modern processors would spend 99% of their time idle.

The solution is the **memory hierarchy**: a pyramid of memory levels, each larger and slower than the one above it. The processor accesses the fastest level first. If the data is not there (a **miss**), it accesses the next level. If the data is there (a **hit**), it is returned quickly. The hierarchy works because of **locality** — the tendency of programs to access a small subset of memory locations repeatedly.

There are two types of locality:
- **Temporal locality:** If a memory location is accessed, it is likely to be accessed again soon. Example: loop counters, variables in a tight loop.
- **Spatial locality:** If a memory location is accessed, nearby locations are likely to be accessed soon. Example: sequential instruction fetching, array traversal.

The memory hierarchy exploits these principles by keeping recently accessed data in fast memory (cache) and fetching data in blocks (cache lines) that include nearby locations.

**Typical memory hierarchy:**

```
Level          | Size      | Access Time | Technology       | Managed By
---------------|-----------|-------------|------------------|------------
Registers      | ~1 KB     | ~0.3 ns     | SRAM (flip-flop) | Compiler
L1 Cache       | ~32 KB    | ~1 ns       | SRAM (6T cell)   | Hardware
L2 Cache       | ~256 KB   | ~4 ns       | SRAM             | Hardware
L3 Cache       | ~8 MB     | ~15 ns      | SRAM             | Hardware
Main Memory    | ~16 GB    | ~100 ns     | DRAM             | Hardware/OS
SSD/HDD        | ~1 TB     | ~10 μs-10 ms| Flash/ Magnetic  | OS
---------------|-----------|-------------|------------------|------------
```

**Cache organization:**

A cache is a small, fast memory that stores copies of recently accessed data from main memory. When the processor needs data, it checks the cache first. If the data is in the cache (a **hit**), it is returned quickly. If not (a **miss**), the data is fetched from the next level (main memory or a lower cache level) and stored in the cache for future access.

Caches are organized into **lines** (or **blocks**), which are the units of transfer between cache and memory. A typical cache line is 64 bytes. When a miss occurs, the entire 64-byte block containing the requested data is fetched from memory. This exploits spatial locality: if the program accesses one byte in the block, it is likely to access nearby bytes soon.

**Cache mapping strategies:**

1. **Direct-Mapped Cache:** Each memory block maps to exactly one cache line. The mapping is determined by a simple formula:
   ```
   Cache Line = (Block Address) mod (Number of Cache Lines)
   ```
   Direct-mapped caches are simple and fast but suffer from **conflict misses**: two frequently accessed blocks that map to the same cache line will evict each other repeatedly.

2. **Set-Associative Cache:** Each memory block can be placed in any of N cache lines in a **set**. The set is determined by:
   ```
   Set = (Block Address) mod (Number of Sets)
   ```
   An N-way set-associative cache has N lines per set. If N = 1, it is direct-mapped. If N equals the number of cache lines, it is fully-associative. Set-associative caches reduce conflict misses while remaining relatively simple to implement.

3. **Fully-Associative Cache:** Each memory block can be placed in any cache line. This eliminates conflict misses entirely but requires expensive hardware (comparators) to search all cache lines simultaneously. Fully-associative caches are used for small structures like TLBs (Translation Lookaside Buffers) and victim caches.

**Cache performance metrics:**

- **Hit Rate (H):** The fraction of memory accesses that find the data in the cache. `H = Hits / (Hits + Misses)`.
- **Miss Rate (M):** The fraction of accesses that do not find the data in the cache. `M = 1 - H`.
- **Hit Time:** The time to access the cache on a hit. Typically 1–4 cycles for L1.
- **Miss Penalty:** The time to fetch data from the next level on a miss. Typically 100+ cycles for L1 misses to DRAM.
- **Average Memory Access Time (AMAT):** The average time per access, considering both hits and misses.
  ```
  AMAT = Hit Time + Miss Rate × Miss Penalty
  ```

For example, if the L1 cache has a hit time of 2 cycles, a miss rate of 5%, and a miss penalty of 100 cycles (to L2 or DRAM), then:
```
AMAT = 2 + 0.05 × 100 = 2 + 5 = 7 cycles
```

The cache miss is 5× more expensive than the hit, so even a small miss rate has a large impact on performance.

**Cache address breakdown:**

A memory address is divided into three fields when accessing a cache:
- **Tag:** The high-order bits that uniquely identify the block. Stored in the cache to identify which memory block is cached.
- **Index:** The bits that select the set (or line, for direct-mapped). Derived from the block address.
- **Offset:** The low-order bits that select the byte within the cache line.

For a cache with 64-byte lines, 256 sets, and 2-way associativity:
- Offset: 6 bits (2^6 = 64 bytes per line)
- Index: 8 bits (2^8 = 256 sets)
- Tag: Remaining bits (32 - 6 - 8 = 18 bits for a 32-bit address)

**Cache contents (cache line metadata):**
Each cache line stores:
- The data (64 bytes)
- The tag (to identify the memory block)
- A **valid bit** (indicates whether the line contains valid data)
- A **dirty bit** (for write-back caches, indicates whether the line has been modified)

#### Key concepts
- Processor-memory speed gap and the memory hierarchy pyramid
- Temporal locality: recently accessed data accessed again
- Spatial locality: nearby data accessed together
- Cache line (block) as the unit of transfer
- Direct-mapped cache: one location per block, simple but conflict-prone
- Set-associative cache: N locations per set, reduces conflicts
- Fully-associative cache: any location, eliminates conflicts but expensive
- Hit rate, miss rate, hit time, miss penalty
- AMAT = Hit Time + Miss Rate × Miss Penalty
- Address fields: tag, index, offset
- Valid bit and dirty bit

#### Hands-on activity
Write a cache simulator in Python that models a configurable cache. The simulator should accept: cache size (in bytes), line size (in bytes), associativity (1 for direct-mapped, 2, 4, etc.), replacement policy (LRU or random), and write policy (write-through or write-back). The simulator should read a trace file of memory accesses (each line contains an address and an access type: R for read, W for write). For each access, the simulator should determine if it is a hit or miss, update the cache state, and print statistics. Test the simulator with the following trace:
```
R 0x0000
R 0x0040
R 0x0080
R 0x0000
R 0x0040
W 0x00C0
R 0x0080
R 0x0100
R 0x0000
```

Run the simulation with:
1. Direct-mapped cache, 256 bytes, 64-byte lines
2. 2-way set-associative cache, 256 bytes, 64-byte lines, LRU
3. 4-way set-associative cache, 256 bytes, 64-byte lines, LRU

Compare the hit rates and discuss why the more associative caches perform better. Then vary the cache size (128, 256, 512 bytes) and plot the hit rate vs. cache size for each associativity.

#### Assessment idea
Ask: "A processor has an L1 cache with a hit time of 2 cycles and a miss rate of 10%. The miss penalty to L2 is 20 cycles. The L2 cache has a hit rate of 80% (local) and a miss penalty to main memory of 200 cycles. What is the AMAT for the L1 cache?" Answer: AMAT = L1 Hit Time + L1 Miss Rate × (L2 Hit Time + L2 Miss Rate × L2 Miss Penalty). Wait, we need to be careful. The L2 hit time is not given directly, but we can compute the average L2 access time. Actually, the standard formula for multi-level caches is: AMAT = L1 Hit Time + L1 Miss Rate × (L2 Hit Time + L2 Miss Rate × L2 Miss Penalty). But we don't have L2 Hit Time. Let's reframe: If the L2 miss rate is 20% (local), then the effective miss penalty from L1 is: L2 Hit Time (assumed to be included in the L2 access) + L2 Miss Rate × L2 Miss Penalty. Without L2 Hit Time given, let's assume it's 0 (or we can say the 20 cycles includes the L2 hit time). More commonly, the formula is: AMAT = T_L1 + M_L1 × (T_L2 + M_L2 × T_memory). If T_L2 is not given, we might assume T_L2 = 0 for simplicity or that the 20 cycles includes the L2 hit time. Let's make a cleaner question:

"A processor has an L1 cache with a hit time of 2 cycles and a miss rate of 5%. The L2 cache has a hit time of 10 cycles and a miss rate of 20% (local). Main memory access takes 100 cycles. What is the AMAT?"

Answer: AMAT = 2 + 0.05 × (10 + 0.20 × 100) = 2 + 0.05 × (10 + 20) = 2 + 0.05 × 30 = 2 + 1.5 = 3.5 cycles. Then ask: "Why does a fully-associative cache eliminate conflict misses but is not used for large caches like L1 or L2?" Answer: A fully-associative cache requires comparing the tag of every cache line simultaneously to find a match. This requires N comparators for an N-line cache, which is expensive in area and power. For large caches (e.g., 32 KB L1 with 512 lines of 64 bytes), this would require 512 comparators, which is impractical. Direct-mapped caches require only one comparator. Set-associative caches require one comparator per way (e.g., 8 comparators for an 8-way cache), which is a practical compromise. Fully-associative caches are used for small structures like TLBs (typically 32–128 entries) where the number of entries is small enough to make the comparators feasible.

#### AI generation note
Create a 10-minute animated lesson. Show the memory hierarchy as a pyramid with the processor at the top and a hard drive at the bottom. Show the processor-memory speed gap as a chasm that the cache bridges. Show temporal locality as a person returning to the same desk repeatedly. Show spatial locality as a person reading a book page by page. Show the cache as a small bookshelf next to the desk. Show direct-mapped as a bookshelf with one slot per book category (conflicts when two books in the same category are needed). Show set-associative as a bookshelf with multiple slots per category. Show fully-associative as a bookshelf where any book can go anywhere. Show the address breakdown as a ruler divided into tag, index, and offset segments. Show the AMAT formula as a balance scale. Include the cache simulator demonstration with hit rate graphs. End with a reflection: "Why do modern processors have three levels of cache (L1, L2, L3) rather than one large cache?"

---

### Chapter 7.2 — Direct-Mapped, Set-Associative, and Fully-Associative Caches

#### Learning objectives
- Design and analyze a direct-mapped cache, including tag storage, index calculation, and hit detection.
- Implement a set-associative cache with LRU and random replacement policies.
- Understand the trade-offs between associativity, hit rate, and access time.
- Calculate the area and power of different cache organizations.

#### Detailed lesson content

The cache mapping strategy determines how memory blocks are placed in the cache. The choice of mapping affects the hit rate, access time, area, and power of the cache.

**Direct-mapped cache:**

In a direct-mapped cache, each memory block maps to exactly one cache line. The mapping is:
```
Cache Line = (Block Address) mod (Number of Cache Lines)
```

A direct-mapped cache consists of:
- **Data array:** Stores the cache lines (data).
- **Tag array:** Stores the tags for each line.
- **Valid bits:** One per line, indicating whether the line is valid.
- **Dirty bits:** One per line (for write-back caches), indicating whether the line has been modified.

**Access procedure:**
1. Extract the index bits from the address to select the cache line.
2. Read the tag and valid bit for that line.
3. Compare the address tag with the stored tag. If equal and valid bit is set, it's a hit.
4. If a hit, use the offset bits to select the data within the line.
5. If a miss, fetch the block from the next level and replace the current line.

**Set-associative cache:**

In a set-associative cache, each memory block maps to a set, and can be placed in any line within that set.
```
Set = (Block Address) mod (Number of Sets)
```

An N-way set-associative cache has N lines per set. The number of sets = Number of Cache Lines / N.

**Access procedure:**
1. Extract the index bits to select the set.
2. Read the tags and valid bits for all N lines in the set in parallel.
3. Compare the address tag with all N tags simultaneously. If any match and the corresponding valid bit is set, it's a hit.
4. If a hit, use the offset to select data from the matching line.
5. If a miss, select a line to replace using the replacement policy.

**Fully-associative cache:**

In a fully-associative cache, each memory block can be placed in any cache line. There is no index; the entire tag is compared against all lines simultaneously.

**Access procedure:**
1. Compare the address tag with all tags in the cache simultaneously.
2. If a match and valid, it's a hit.
3. If a miss, select any line to replace.

**Comparison:**

| Aspect | Direct-Mapped | Set-Associative | Fully-Associative |
|--------|---------------|-----------------|-------------------|
| Hit rate | Lowest (conflict misses) | Medium | Highest (no conflicts) |
| Access time | Fastest (1 comparator) | Medium (N comparators) | Slowest (all comparators) |
| Area | Smallest | Medium | Largest |
| Power | Lowest | Medium | Highest |
| Complexity | Simplest | Moderate | Most complex |
| Typical use | L1I (sometimes), small caches | L1D, L2 | TLB, victim cache |

**Why more associativity improves hit rate:**

Conflict misses occur when two frequently accessed blocks map to the same cache line. With more associativity, there are more places to put each block, reducing conflicts. However, the benefit diminishes as associativity increases. Going from 1-way (direct-mapped) to 2-way provides a large hit rate improvement. Going from 8-way to 16-way provides only marginal improvement.

**Access time vs. associativity:**

Higher associativity requires more comparators and more complex multiplexers, which increases the access time. The L1 cache must be fast (typically 2–4 cycles), so it is limited to 2–8-way associativity. The L2 cache can be slower (10–20 cycles), so it can use higher associativity (8–16 way).

**Area calculation:**

For a cache of size S bytes, line size L bytes, associativity A, and tag size T bits:
- Number of lines = S / L
- Number of sets = S / (L × A)
- Data array area = S × 8 bits (data storage)
- Tag array area = (S / L) × (T + 1 valid bit + 1 dirty bit)
- Total area ≈ Data area + Tag area + overhead (decoders, multiplexers, comparators)

The tag overhead is significant for small line sizes. For 64-byte lines and 32-bit addresses, the tag is about 20 bits, plus 2 bits for valid/dirty. The tag overhead per line is 22 bits / (64 bytes × 8 bits/byte) = 22 / 512 = 4.3%. For 32-byte lines, the tag overhead is 8.6%.

#### Key concepts
- Direct-mapped cache: one line per block, simple, fast, conflict-prone
- Set-associative cache: N lines per set, parallel tag comparison
- Fully-associative cache: any line, all tags compared simultaneously
- Access procedures for each mapping type
- Hit rate vs. associativity trade-off
- Access time vs. associativity trade-off
- Area calculation: data array + tag array + overhead
- Tag overhead as percentage of total cache size
- Replacement policy for set-associative and fully-associative caches
- Why L1 uses low associativity, L2 uses higher associativity

#### Hands-on activity
Design a cache organization for a 32 KB L1 data cache with 64-byte lines. Compare three designs:
1. Direct-mapped: 512 lines, 1 comparator.
2. 4-way set-associative: 128 sets, 4 lines per set, 4 comparators.
3. 8-way set-associative: 64 sets, 8 lines per set, 8 comparators.

For each design, calculate:
- Tag size (for a 32-bit address and a 64-bit address).
- Total area in bits (data + tag + valid + dirty).
- Approximate access time (qualitative: fast, medium, slow).
- Expected hit rate (qualitative: low, medium, high).

Then, write a simple cache simulator (or use a cache simulator tool) and measure the actual hit rate for each design on a memory access trace from a real program (e.g., SPEC CPU benchmark trace). Plot the hit rate vs. associativity and discuss the optimal associativity for this cache size.

#### Assessment idea
Ask: "A 32 KB cache with 32-byte lines has 1024 lines. If the cache is 4-way set-associative, how many sets are there, and how many bits are needed for the index?" Answer: Number of sets = Number of lines / Associativity = 1024 / 4 = 256 sets. The index needs log2(256) = 8 bits. The offset needs log2(32) = 5 bits. For a 32-bit address, the tag needs 32 - 8 - 5 = 19 bits. Each set has 4 lines, and each line has a 19-bit tag, a valid bit, and a dirty bit. The total tag storage is 1024 lines × 21 bits = 21,504 bits = 2,688 bytes. The data storage is 32 KB = 32,768 bytes. The tag overhead is 2,688 / 32,768 = 8.2%. Then ask: "Why does increasing associativity beyond 8-way provide diminishing returns for most workloads?" Answer: Because most conflict misses are eliminated by 2-way or 4-way associativity. The remaining misses are primarily capacity misses (the working set is larger than the cache) and compulsory misses (first-time accesses). These are not affected by associativity. Going from 8-way to 16-way might reduce conflict misses by a small amount, but the additional comparators and multiplexers increase access time and power. For most workloads, 4-way or 8-way associativity is the sweet spot, providing near-optimal hit rate with reasonable hardware cost. Some processors use 12-way or 16-way for L2 caches because the access time is less critical, but L1 caches rarely exceed 8-way.

#### AI generation note
Create a 10-minute animated lesson. Show the cache as a library. Show direct-mapped as a library where each book has a fixed shelf. Show set-associative as a library where books can go on any of N shelves in a section. Show fully-associative as a library where books can go anywhere. Show a conflict miss as two popular books fighting for the same shelf. Show associativity as adding more shelves to the section. Show the comparators as librarians checking multiple shelves at once. Show access time as the time to check shelves: 1 shelf is fast, 8 shelves is slower. Show area as the size of the library. Show hit rate as the number of satisfied readers. Show the sweet spot as a balance between shelves and speed. End with a reflection: "Why don't all caches use the highest possible associativity?"

---

### Chapter 7.3 — Cache Write Policies and Replacement Strategies

#### Learning objectives
- Compare write-through and write-back cache policies and their trade-offs.
- Implement LRU, FIFO, and random replacement strategies.
- Classify cache misses into compulsory, capacity, and conflict misses.
- Apply the 3C model to analyze and optimize cache performance.

#### Detailed lesson content

A cache miss is not just a miss — it has a cause, and understanding the cause is essential for optimizing cache performance. Cache misses are classified into three categories, known as the **3C model**:

1. **Compulsory Misses (Cold Start Misses):** These occur the first time a block is accessed. They are unavoidable because the cache starts empty. The only way to reduce compulsory misses is to increase the block size (fetching more data per miss) or use prefetching (anticipating future accesses).

2. **Capacity Misses:** These occur when the cache is too small to hold all the blocks needed by the program. Even with a fully-associative cache (no conflicts), a program that accesses more data than the cache size will have capacity misses. The solution is to increase the cache size.

3. **Conflict Misses:** These occur in set-associative and direct-mapped caches when multiple blocks map to the same set and evict each other. They are caused by the cache's mapping strategy, not by the program's access pattern. Increasing associativity reduces conflict misses.

The total miss rate is the sum of these three components (approximately, since they can overlap):
```
Miss Rate = Compulsory Miss Rate + Capacity Miss Rate + Conflict Miss Rate
```

**Write policies:**

When the processor writes to a memory location, the cache must be updated. There are two main write policies:

1. **Write-Through:** The data is written to both the cache and the next level of memory (main memory or L2 cache) simultaneously. This is simple and ensures memory consistency, but it generates a lot of memory traffic because every write goes to main memory.
   - Pros: Simple, memory always up-to-date, easy to implement coherence.
   - Cons: High memory bandwidth, slow writes (must wait for memory).
   - Optimization: Use a **write buffer** to hold writes and allow the processor to continue without waiting for memory.

2. **Write-Back:** The data is written only to the cache. The modified cache line is marked with a **dirty bit**. When the line is evicted (replaced) from the cache, it is written back to the next level. This reduces memory traffic because writes are batched and only modified lines are written back.
   - Pros: Low memory bandwidth, fast writes.
   - Cons: Complex, memory can be stale, harder to implement coherence.
   - Most modern caches use write-back because memory bandwidth is a critical bottleneck.

**Write allocation policies:**
- **Write-Allocate:** On a write miss, the block is fetched from memory and placed in the cache. The write is then performed in the cache. This is typically used with write-back caches.
- **No-Write-Allocate (Write-Around):** On a write miss, the data is written directly to memory without fetching the block into the cache. This is typically used with write-through caches.

**Replacement strategies:**

When a cache miss occurs and the set is full, a replacement strategy determines which cache line to evict. The goal is to evict the line that is least likely to be needed in the future.

1. **LRU (Least Recently Used):** Evict the line that has not been accessed for the longest time. This exploits temporal locality. LRU is effective but expensive to implement for high associativity (e.g., 16-way) because it requires tracking access order for all lines in a set.

2. **FIFO (First-In, First-Out):** Evict the line that has been in the cache the longest. Simpler than LRU but less effective because it does not consider access frequency.

3. **Random:** Evict a random line. Surprisingly effective in practice because it avoids pathological cases where LRU performs poorly (e.g., cyclic access patterns that thrash the cache). Random replacement is simple to implement and has low overhead.

4. **Pseudo-LRU (PLRU):** An approximation of LRU that uses fewer bits. For example, a binary tree of bits tracks which half of the set was recently used, then which quarter, etc. PLRU is used in many commercial processors (e.g., Intel's L1 caches).

**Impact of replacement strategy on miss rate:**

For typical workloads, the difference between LRU and random replacement is small (often less than 1% miss rate difference). However, for certain access patterns (e.g., streaming data that exceeds the cache size), LRU can perform significantly worse than random because it evicts the most recently used data, which is the data that will be accessed again in a cyclic pattern.

**Cache optimization techniques:**

1. **Victim Cache:** A small, fully-associative cache that holds recently evicted lines. When a miss occurs in the main cache, the victim cache is checked. If the line is there, it is swapped back into the main cache. Victim caches reduce conflict misses with minimal area overhead.

2. **Pseudo-Associative Cache:** A cache that can be searched in two ways. If a miss occurs in the direct-mapped portion, a secondary search is performed in a different mapping. This provides some of the benefits of set-associativity with lower lookup latency.

3. **Non-Blocking Cache:** A cache that can continue to serve hits while a miss is being processed. This is essential for out-of-order processors that issue multiple memory requests simultaneously. Non-blocking caches use **miss status handling registers (MSHRs)** to track outstanding misses.

4. **Prefetching:** The cache predicts which blocks will be needed next and fetches them before they are requested. Prefetching can be hardware-based (stride prefetching, next-line prefetching) or software-based (compiler-inserted prefetch instructions). Prefetching reduces compulsory and capacity misses but can increase memory bandwidth and cache pollution if the predictions are wrong.

#### Key concepts
- 3C model: Compulsory, Capacity, Conflict misses
- Write-through: writes to cache and memory simultaneously
- Write-back: writes to cache only, writes to memory on eviction
- Dirty bit for write-back tracking
- Write buffer for write-through optimization
- Write-allocate vs. no-write-allocate
- Replacement strategies: LRU, FIFO, Random, Pseudo-LRU
- Victim cache for reducing conflict misses
- Non-blocking cache with MSHRs
- Prefetching: hardware and software
- Cache optimization trade-offs: bandwidth, latency, area, power

#### Hands-on activity
Extend your cache simulator from Chapter 7.1 to support write policies and replacement strategies. Implement:
1. Write-through with write-allocate and write-buffer simulation.
2. Write-back with write-allocate and dirty bit tracking.
3. LRU, FIFO, and Random replacement strategies.
4. Miss classification: distinguish compulsory, capacity, and conflict misses.

Test the simulator with the following traces and analyze the results:
- **Trace A (sequential):** Access addresses 0, 1, 2, ..., 99 (exploits spatial locality).
- **Trace B (random):** Access 100 random addresses (no locality).
- **Trace C (cyclic):** Access addresses 0, 64, 128, 0, 64, 128 (conflict pattern).

For each trace, compare:
- Direct-mapped vs. 4-way set-associative
- Write-through vs. write-back
- LRU vs. Random replacement
- Cache sizes: 256 B, 512 B, 1024 B

Plot the miss rate for each configuration and classify the misses. Discuss which optimizations are most effective for each trace type.

#### Assessment idea
Ask: "A program has a working set of 512 KB that it accesses repeatedly. It runs on a processor with a 256 KB L2 cache. What type of miss dominates, and what is the solution?" Answer: Capacity misses dominate. The working set (512 KB) is larger than the cache (256 KB), so the cache cannot hold all the data the program needs. Even with a fully-associative cache, the program would still miss because the cache is too small. The solution is to increase the cache size to at least 512 KB (or use a higher level cache like L3 that is larger). Alternatively, the program can be restructured to reduce the working set size (e.g., by blocking or tiling loops). Then ask: "A program repeatedly accesses two arrays, A and B, each 64 KB. The arrays are located at memory addresses that are exact multiples of 256 KB apart. The cache is 32 KB, 4-way set-associative, with 64-byte lines. What type of miss dominates, and what is the solution?" Answer: Conflict misses dominate. The two arrays map to the same sets in the cache because their addresses are aligned to the same cache index bits. Even though the cache is large enough to hold both arrays (32 KB > 64 KB + 64 KB = 128 KB? No, 32 KB < 128 KB, so this is also capacity. But if we assume a larger cache, say 256 KB), the alignment causes the arrays to conflict. The solution is to increase associativity (so the arrays can coexist in the same sets) or change the memory layout (padding) so that the arrays map to different sets. This is a common optimization in high-performance computing: array padding to avoid cache conflicts.

#### AI generation note
Create a 10-minute animated lesson. Show the 3C model as three characters: Compulsory (a newcomer who hasn't been seen before), Capacity (a crowd that doesn't fit in the room), and Conflict (two people fighting for the same chair). Show write-through as a person writing on both a whiteboard and a notebook simultaneously. Show write-back as a person writing only on the whiteboard and copying to the notebook later. Show the dirty bit as a "modified" sticker on the whiteboard. Show LRU as a queue where the person at the back leaves. Show random as a lottery. Show the victim cache as a "just in case" drawer next to the main cache. Show prefetching as a crystal ball that predicts future accesses. Show the cache simulator output as graphs with bars for different configurations. Include the live simulator demonstration. End with a reflection: "If you could change only one parameter of a cache (size, associativity, line size, or replacement policy), which would have the biggest impact on a typical program?"

---

### Chapter 7.4 — Non-Blocking Caches and MSHRs

#### Learning objectives
- Describe how non-blocking caches allow multiple outstanding misses.
- Implement Miss Status Handling Registers (MSHRs) to track outstanding misses.
- Understand the difference between hit under miss and miss under miss.
- Analyze the impact of non-blocking caches on out-of-order processor performance.

#### Detailed lesson content

A non-blocking cache (also called a lockup-free cache) can continue to serve hits while a miss is being processed. In a blocking cache, a miss stalls the entire cache until the data is fetched. In a non-blocking cache, multiple misses can be in flight simultaneously. This is essential for out-of-order processors that issue multiple memory requests per cycle.

**Non-blocking cache operation:**

When a miss occurs in a non-blocking cache:
1. An MSHR is allocated to track the miss.
2. The cache continues to process other requests (hits and other misses).
3. When the data arrives from memory, the MSHR is updated and the waiting instructions are satisfied.
4. The MSHR is freed.

**Miss Status Handling Registers (MSHRs):**

An MSHR tracks the state of an outstanding miss. Each MSHR contains:
- **Address:** The block address being fetched.
- **Valid bit:** Whether the MSHR is in use.
- **Issued bit:** Whether the request has been sent to memory.
- **Waiting instructions:** A list of instructions that are waiting for the data (for load misses) or waiting for the write to complete (for store misses).
- **Data:** The data when it arrives from memory.

When a load misses, the cache checks if an MSHR already exists for the same block. If so, the load is merged with the existing MSHR (a **miss under miss**). When the data arrives, all waiting instructions are satisfied. If no MSHR exists, a new MSHR is allocated and the request is sent to memory.

**Hit under miss:**

A hit under miss occurs when the cache receives a hit request while a miss is being processed. The cache can serve the hit immediately because the hit does not depend on the miss (they access different blocks). This is the basic capability of a non-blocking cache.

**Miss under miss:**

A miss under miss occurs when the cache receives a miss request while another miss is being processed. If the second miss is to a different block, a new MSHR is allocated. If it is to the same block, the request is merged with the existing MSHR. The number of MSHRs determines how many simultaneous misses can be handled.

**MSHR design considerations:**
- **Number of MSHRs:** A typical L1 cache has 4–16 MSHRs. The L2 cache may have more. Too few MSHRs limit the number of outstanding misses. Too many waste area and power.
- **MSHR merging:** If multiple loads miss to the same block, they share an MSHR. This reduces memory traffic and MSHR usage.
- **Store misses:** Store misses are more complex because the store data must be merged with the fetched block. The MSHR must hold the store data and the byte mask indicating which bytes to update.

**Impact on out-of-order processors:**

Out-of-order processors can issue multiple loads and stores per cycle. Without a non-blocking cache, a single miss would stall the entire memory system, wasting the processor's ability to execute independent instructions. Non-blocking caches allow the processor to continue executing instructions that hit in the cache while misses are being resolved.

For example, if an out-of-order processor has 8 MSHRs, it can have up to 8 outstanding cache misses. This allows the processor to execute 8 independent loads simultaneously, hiding memory latency.

**Performance impact:**

The performance benefit of non-blocking caches depends on the workload:
- **High ILP workloads with many independent loads:** Benefit is large because the processor can keep many loads in flight.
- **Pointer-chasing workloads:** Benefit is small because each load depends on the previous one (the address of the next load is not known until the previous load completes).
- **Bandwidth-bound workloads:** Benefit is limited by memory bandwidth, not by the number of MSHRs.

#### Key concepts
- Non-blocking cache: serves hits while misses are in progress
- MSHR: Miss Status Handling Register
- MSHR fields: address, valid, issued, waiting instructions, data
- Miss under miss: multiple misses to different blocks
- MSHR merging: multiple misses to the same block
- Hit under miss: serving hits during a miss
- Store misses and data merging
- Number of MSHRs and design trade-offs
- Impact on out-of-order processor performance
- Workload-dependent benefits of non-blocking caches

#### Hands-on activity
Design a non-blocking cache with 4 MSHRs. Simulate the following sequence of memory accesses on a direct-mapped cache with 4 lines, 16-byte lines, and 4 MSHRs:
```
R 0x0000  (miss, allocate MSHR 0)
R 0x0010  (hit, line 1)
R 0x0040  (miss, allocate MSHR 1)
R 0x0080  (miss, allocate MSHR 2)
R 0x0000  (miss under miss, merge with MSHR 0)
R 0x00C0  (miss, allocate MSHR 3)
R 0x0100  (miss, MSHR full — stall)
W 0x0040  (store miss, merge with MSHR 1)
```

Show the MSHR state after each access. Show which accesses hit, which miss, which are merged, and which stall. When the data arrives from memory (assume memory latency of 4 cycles), show how the MSHRs are freed and the waiting instructions are satisfied. Compare the total cycles with a blocking cache that stalls on every miss.

#### Assessment idea
Ask: "Why do non-blocking caches require MSHRs rather than simply tracking misses in a single register?" Answer: A single register can only track one miss. In a non-blocking cache, multiple misses can be in flight simultaneously. Each MSHR tracks a different outstanding miss. The MSHR stores the address of the missing block, the status of the request (issued or not), and the list of instructions waiting for the data. Without MSHRs, the cache would not know which instructions to notify when the data arrives, nor would it know which block is being fetched. MSHRs also enable merging: if two instructions miss to the same block, they share an MSHR, reducing memory traffic. The number of MSHRs determines the degree of non-blocking: more MSHRs allow more simultaneous misses but require more hardware. Then ask: "A pointer-chasing workload (e.g., linked list traversal) has limited ILP because each load provides the address for the next load. Does a non-blocking cache provide significant benefit for this workload?" Answer: No, the benefit is limited. In pointer-chasing code, the address of load N+1 is not known until load N completes. This means the loads must be serialized: load N must complete before load N+1 can be issued. Even with a non-blocking cache, the processor cannot issue multiple loads simultaneously because each load depends on the previous one. The non-blocking cache can track the miss, but the next instruction cannot be issued until the data arrives. The only benefit is that the cache can serve hits to other instructions while the load miss is being resolved, but if the program is dominated by pointer chasing, there are few independent instructions. For pointer-chasing workloads, prefetching (especially hardware stride or pointer prefetching) is more effective than non-blocking caches.

#### AI generation note
Create a 10-minute animated lesson. Show a blocking cache as a single-lane bridge that closes for every boat (miss). Show a non-blocking cache as a multi-lane bridge where boats can pass while others are waiting. Show MSHRs as toll booths that track each waiting boat. Show hit under miss as a car crossing the bridge while a boat is waiting. Show miss under miss as multiple boats waiting at different toll booths. Show MSHR merging as two cars sharing the same toll booth because they're going to the same destination. Show a pointer-chasing workload as a chain of boats where each boat must wait for the previous one to arrive before it can depart. Show the limited benefit for pointer chasing. Show the large benefit for independent loads. End with a reflection: "How many MSHRs would you design for a processor with 4 load/store units?"

---

### Chapter 7.5 — Virtual Memory and Address Translation

#### Learning objectives
- Explain the concept of virtual memory and how it provides address isolation and memory protection.
- Describe page tables, page faults, and the translation from virtual to physical addresses.
- Understand the role of the Translation Lookaside Buffer (TLB) in accelerating address translation.
- Analyze TLB organization and the impact of TLB misses on performance.

#### Detailed lesson content

In a simple processor, the program directly accesses physical memory addresses. But in a modern operating system with multiple processes running simultaneously, this is dangerous and impractical. If two programs use the same physical address, they will corrupt each other's data. If a program has a bug and writes to a random address, it might crash the operating system or another program. **Virtual memory** solves these problems by providing each process with its own virtual address space, which is translated to physical addresses by the hardware.

**Virtual memory benefits:**
1. **Isolation:** Each process sees its own address space (e.g., 0 to 2^64-1 on a 64-bit system). Process A cannot access Process B's memory unless explicitly allowed.
2. **Protection:** The operating system can mark pages as read-only, read-write, or execute-only. A process that tries to write to a read-only page gets a segmentation fault.
3. **Simplification:** Compilers and programmers can assume a contiguous, large address space without worrying about physical memory fragmentation.
4. **Swapping:** The operating system can move infrequently used pages to disk (swap space) and bring them back when needed. This makes the physical memory appear larger than it actually is.
5. **Sharing:** Multiple processes can share the same physical memory (e.g., shared libraries, shared memory for IPC) by mapping different virtual addresses to the same physical page.

**Page tables and address translation:**

Virtual memory divides the address space into fixed-size blocks called **pages** (typically 4 KB). Physical memory is divided into **frames** of the same size. The operating system maintains a **page table** for each process, which maps virtual page numbers to physical frame numbers.

A virtual address is divided into:
- **Virtual Page Number (VPN):** The high-order bits that identify the page.
- **Page Offset:** The low-order bits that identify the byte within the page.

The page table lookup:
```
Physical Address = (PageTable[VPN] << PageOffsetBits) | PageOffset
```

Page tables are stored in main memory. Each memory access requires a page table lookup, which itself requires a memory access! This would double the memory access time. To avoid this, processors use a **Translation Lookaside Buffer (TLB)**.

**The Translation Lookaside Buffer (TLB):**

A TLB is a small, fast cache that stores recent virtual-to-physical address translations. When the processor generates a virtual address, it first checks the TLB. If the translation is in the TLB (a **TLB hit**), the physical address is available immediately. If not (a **TLB miss**), the processor must access the page table in memory, which is slow.

TLB characteristics:
- **Size:** Typically 32–128 entries (very small compared to data caches).
- **Associativity:** Typically fully-associative or 4-way set-associative. Fully-associative TLBs are feasible because of the small number of entries.
- **Hit time:** Typically 1 clock cycle (accessed in parallel with the cache tag lookup).
- **Miss penalty:** Typically 10–100 cycles (to access the page table in memory). If the page is not in memory (a page fault), the penalty is millions of cycles (to load from disk).

**TLB organization:**

A TLB entry contains:
- **VPN (Virtual Page Number):** The tag for the TLB.
- **PFN (Physical Frame Number):** The translated physical address.
- **Valid bit:** Indicates whether the entry is valid.
- **Protection bits:** Read, write, execute permissions.
- **ASID (Address Space ID):** Identifies which process owns the translation. This prevents the TLB from needing to be flushed on every context switch.
- **Dirty bit:** Whether the page has been written.

**TLB performance:**

The TLB hit rate is typically very high (95–99%) because of temporal locality in page accesses: programs tend to access the same pages repeatedly. However, TLB misses are expensive, so a small TLB miss rate can still have a significant impact on performance.

```
Effective Memory Access Time = TLB_Hit_Time + TLB_Miss_Rate × TLB_Miss_Penalty
```

For example, with TLB hit time = 1 cycle, TLB miss rate = 1%, and TLB miss penalty = 50 cycles:
```
Effective Access Time = 1 + 0.01 × 50 = 1 + 0.5 = 1.5 cycles
```

**Page faults and OS involvement:**

If a TLB miss occurs and the page table entry indicates that the page is not in physical memory (the **present bit** is 0), a **page fault** occurs. The processor traps to the operating system, which must:
1. Find a free physical frame (or evict a page using a replacement algorithm like LRU).
2. Load the requested page from disk into the physical frame.
3. Update the page table.
4. Restart the faulting instruction.

Page faults are extremely expensive (millions of cycles) because they involve disk I/O. The OS tries to minimize page faults by using page replacement algorithms (LRU, clock algorithm) and prefetching (preloading pages that are likely to be accessed soon).

**Multi-level page tables:**

For a 64-bit address space with 4 KB pages, the page table would have 2^52 entries. If each entry is 8 bytes, the page table would be 32 PB (petabytes), which is impossible to store. Instead, modern systems use **multi-level page tables** (hierarchical page tables). The virtual page number is divided into multiple levels, and each level is a page table that points to the next level. Only the page tables that are actually needed are allocated, saving memory.

For example, a 4-level page table for a 64-bit system:
- Level 1: Points to Level 2 page tables.
- Level 2: Points to Level 3 page tables.
- Level 3: Points to Level 4 page tables.
- Level 4: Contains the actual page table entries (PTEs) with PFN and protection bits.

A TLB miss on a multi-level page table requires multiple memory accesses (one per level), which is even more expensive than a single-level page table. This is why large TLBs and TLB prefetching are critical for performance.

#### Key concepts
- Virtual memory: address isolation, protection, simplification, swapping, sharing
- Pages and frames: fixed-size blocks (typically 4 KB)
- Page table: maps VPN to PFN, stored in memory
- Virtual address: VPN + Page Offset
- TLB: cache for virtual-to-physical translations
- TLB hit time, TLB miss rate, TLB miss penalty
- TLB entry: VPN, PFN, valid bit, protection bits, ASID, dirty bit
- Page fault: page not in memory, OS loads from disk
- Multi-level page tables for large address spaces
- TLB and cache interaction: parallel or serial access

#### Hands-on activity
Write a simple virtual-to-physical address translator in Python. The program should:
1. Define a page table as a dictionary mapping VPN to PFN.
2. Accept a virtual address and a page size.
3. Extract the VPN and page offset.
4. Look up the VPN in the page table. If found, compute the physical address. If not found, raise a page fault exception.
5. Simulate a TLB as a dictionary (fully-associative) with a limited number of entries. Implement LRU replacement for the TLB.

Test with the following scenario:
- Page size: 4096 bytes (12-bit offset)
- Virtual addresses: 0x1000, 0x2000, 0x3000, 0x1000, 0x4000, 0x2000, 0x5000
- Page table: VPN 1→PFN 10, VPN 2→PFN 20, VPN 3→PFN 30, VPN 4→PFN 40, VPN 5→PFN 50
- TLB size: 4 entries

Show the TLB state after each access, identifying hits and misses. Calculate the TLB hit rate. Then, simulate a multi-level page table with 2 levels. Level 1 has 4 entries, each pointing to a Level 2 page table with 4 entries. Show how a 64-bit virtual address is translated through both levels.

#### Assessment idea
Ask: "A processor has a 64-entry TLB with a hit rate of 99%. The TLB hit time is 1 cycle, and a TLB miss requires 20 cycles to access the page table. What is the effective memory access time for address translation?" Answer: Effective Access Time = 1 + 0.01 × 20 = 1.2 cycles. The TLB miss adds only 0.2 cycles to the average, which is very small. However, if the miss rate increases to 5%, the effective access time becomes 1 + 0.05 × 20 = 2 cycles, which is a 67% increase. This demonstrates why high TLB hit rates are critical for performance. Then ask: "Why does a multi-level page table reduce memory usage compared to a single-level page table for a 64-bit address space?" Answer: A single-level page table for a 64-bit address space with 4 KB pages would require 2^52 entries. If each entry is 8 bytes, the page table would be 32 PB. Most processes use only a tiny fraction of the 64-bit address space, so most of the page table entries would be unused. A multi-level page table allocates page tables only for the regions of the address space that are actually used. If a process uses only 1 GB of virtual memory, only the page tables for that 1 GB are allocated, saving enormous amounts of memory. The trade-off is that a TLB miss requires multiple memory accesses (one per level) instead of one.

#### AI generation note
Create a 10-minute animated lesson. Show virtual memory as a hotel where each guest (process) gets their own room (address space) and cannot enter other rooms. Show the page table as a directory that maps room numbers to actual building addresses. Show the TLB as a receptionist's desk with a quick lookup of recent guests. Show a TLB miss as the receptionist having to look up the directory in the back office. Show a page fault as a room that doesn't exist yet, requiring the hotel to build it (load from disk). Show multi-level page tables as a nested directory structure. Show the ASID as a VIP card that identifies the guest. Show address translation as a map with virtual streets being mapped to physical streets. Include the Python translator demonstration. End with a reflection: "Why is virtual memory essential for modern operating systems but not for simple embedded systems?"

---

### Chapter 7.6 — TLB Design and Virtual Caches

#### Learning objectives
- Design a TLB with configurable size, associativity, and replacement policy.
- Understand the interaction between the TLB and cache (parallel vs. serial access).
- Describe virtual caches and the challenges of cache coherence and aliasing.
- Analyze the impact of TLB size and associativity on TLB hit rate.

#### Detailed lesson content

The TLB is a critical component of the memory system. Its design affects the latency of every memory access. This chapter explores TLB design in detail.

**TLB design parameters:**

1. **Size:** The number of entries in the TLB. Larger TLBs have higher hit rates but consume more area and power. Typical sizes: 32–128 entries for L1 TLB, 512–4096 entries for L2 TLB.

2. **Associativity:** TLBs are typically fully-associative or 4-way set-associative. Fully-associative TLBs are feasible because of the small number of entries. Higher associativity reduces conflict misses.

3. **Page size support:** Modern TLBs support multiple page sizes (e.g., 4 KB, 2 MB, 1 GB). Large pages reduce the number of TLB entries needed for the same memory footprint, improving TLB hit rate. However, large pages can cause internal fragmentation and reduce the granularity of memory management.

4. **Replacement policy:** LRU is common for TLBs. Some processors use random replacement for simplicity.

5. **ASID support:** The TLB includes an ASID field to avoid flushing on context switches. Without ASID, the TLB must be flushed every time the OS switches processes, which is expensive.

**TLB and cache interaction:**

There are two approaches to accessing the TLB and cache:

1. **Serial access:** The TLB is accessed first, and the physical address is used to access the cache. This is simple but adds latency (TLB access time + cache access time).

2. **Parallel access:** The TLB and cache are accessed simultaneously. The cache is indexed using the virtual address (or a portion of it), and the TLB provides the physical address for tag comparison. This reduces latency but requires the cache index to be independent of the virtual-to-physical translation (i.e., the index bits must be the same in both virtual and physical addresses). This is achieved by ensuring that the page offset (which is the same in virtual and physical addresses) includes the cache index bits. For a 4 KB page and a 64-byte cache line, the page offset is 12 bits and the cache index is log2(sets) + log2(line size) bits. If the cache has 64 sets (6 bits) and 64-byte lines (6 bits), the index is 12 bits, which fits entirely within the page offset. This allows parallel access without aliasing issues.

**Virtual caches:**

A virtual cache is indexed and tagged using virtual addresses, avoiding the need for TLB translation on every access. This reduces latency because the TLB is bypassed for cache hits.

However, virtual caches have several challenges:
1. **Synonym problem (aliasing):** Two different virtual addresses can map to the same physical address. If both virtual addresses are cached, the cache may have two copies of the same data, which can become inconsistent. This is solved by: (a) restricting the cache index to bits that are the same in virtual and physical addresses (homonym problem), or (b) using physical tags in the cache (virtually indexed, physically tagged).

2. **Cache coherence:** In a multiprocessor system, cache coherence protocols use physical addresses. If the cache is virtual, coherence messages must be translated, which adds complexity.

3. **Context switch:** When a process switch occurs, the virtual cache may contain stale data from the previous process. The cache must be flushed or tagged with ASIDs.

Most modern processors use **virtually indexed, physically tagged (VIPT)** caches. The cache is indexed using the virtual address (allowing parallel TLB and cache access), but the tag is physical (allowing coherence and avoiding aliasing). For VIPT to work without aliasing, the cache index must fit within the page offset. This limits the cache size to (page size × associativity). For 4 KB pages and 8-way associativity, the maximum VIPT cache size is 32 KB. Larger caches must use **physically indexed, physically tagged (PIPT)** caches, which require serial TLB and cache access but avoid aliasing completely.

**Impact of TLB size:**

The TLB hit rate is crucial for performance. A TLB miss adds 10–100 cycles to every memory access. For a workload with a high memory footprint (e.g., large databases, scientific simulations), the TLB miss rate can be significant.

Techniques to improve TLB performance:
- **Large pages:** Using 2 MB or 1 GB pages reduces the number of TLB entries needed. For example, a 1 GB array needs only 1 TLB entry with 1 GB pages, but 262,144 entries with 4 KB pages.
- **TLB prefetching:** The processor prefetches TLB entries for adjacent pages when a page is accessed.
- **Multi-level TLBs:** An L1 TLB (small, fast) and an L2 TLB (larger, slower). The L2 TLB catches misses from the L1 TLB.
- **Hardware page table walker:** A dedicated hardware unit that walks the page table on a TLB miss, reducing the need for OS intervention.

#### Key concepts
- TLB design parameters: size, associativity, page size support, ASID
- Serial vs. parallel TLB and cache access
- Virtual caches: indexed and tagged by virtual address
- Synonym/aliasing problem in virtual caches
- Virtually Indexed, Physically Tagged (VIPT) caches
- VIPT cache size limit: page size × associativity
- Physically Indexed, Physically Tagged (PIPT) caches
- TLB and cache coherence challenges
- Large pages (2 MB, 1 GB) for TLB performance
- Multi-level TLBs (L1 TLB, L2 TLB)
- Hardware page table walker

#### Hands-on activity
Design a TLB for a processor with 4 KB pages and a 32 KB, 8-way set-associative L1 cache. Determine whether the cache can be virtually indexed without aliasing. Calculate the maximum VIPT cache size for 4 KB pages. Then, design a two-level TLB system: L1 TLB (32 entries, fully-associative, 1-cycle access) and L2 TLB (512 entries, 4-way set-associative, 4-cycle access). Simulate the TLB performance for a workload that accesses a 1 MB array sequentially. Calculate the hit rate for the L1 TLB and the L2 TLB. Discuss how using 2 MB pages would change the TLB hit rate.

#### Assessment idea
Ask: "Why does a virtually indexed, physically tagged (VIPT) cache require that the cache index fit within the page offset, and what happens if the cache is larger than this limit?" Answer: In a VIPT cache, the cache index is derived from the virtual address, and the tag is physical. If the cache index uses bits that are part of the virtual page number (not the page offset), those bits may differ between the virtual address and the physical address. This means two different virtual addresses that map to the same physical address could index different cache sets, causing the same data to appear in two cache lines (aliasing). To avoid aliasing, the cache index must be entirely within the page offset, which is the same in both virtual and physical addresses. For 4 KB pages, the page offset is 12 bits. If a cache has 64-byte lines (6 bits) and 64 sets (6 bits), the total index is 12 bits, which fits. The maximum cache size is 64 sets × 64 bytes × 8-way = 32 KB. If the cache is larger, the index exceeds 12 bits, and aliasing can occur. To support larger caches, the processor must use: (1) PIPT (physically indexed, physically tagged), which requires serial TLB access; (2) higher associativity, which increases the maximum VIPT size (page size × associativity); or (3) special hardware to detect and handle aliases. Then ask: "How do multi-level TLBs improve performance compared to a single-level TLB?" Answer: A single-level TLB must balance hit rate and access time. A large TLB has a higher hit rate but slower access time. A small TLB is fast but has more misses. A two-level TLB system uses a small, fast L1 TLB (e.g., 32 entries, 1 cycle) for the common case and a larger, slower L2 TLB (e.g., 512 entries, 4–10 cycles) for the rare L1 misses. The L1 TLB provides low latency for most accesses. The L2 TLB catches the majority of L1 misses without requiring a page table walk (which takes 20–100 cycles). The effective TLB miss rate is the product of the L1 miss rate and the L2 miss rate, which is much lower than the miss rate of a single-level TLB of the same total size. For example, if the L1 TLB has a 99% hit rate and the L2 TLB has a 90% hit rate for the remaining 1%, the overall miss rate is 0.1%, which is better than a single 256-entry TLB with a 98% hit rate. Multi-level TLBs are standard in modern processors (e.g., Intel Core has L1 DTLB, L2 STLB, and L1 ITLB).

#### AI generation note
Create a 10-minute animated lesson. Show the TLB as a reception desk with a quick-access card catalog. Show serial access as the receptionist looking up the address before letting you into the library. Show parallel access as the receptionist and the library door opening simultaneously. Show a virtual cache as a library organized by guest names instead of real addresses. Show aliasing as two guests with different names having the same book in different rooms. Show VIPT as a library where the room number is virtual but the book ID is physical. Show the page offset as a fixed part of the address that never changes. Show large pages as bigger rooms that reduce the number of entries needed. Show multi-level TLBs as a main desk and a backup desk. End with a reflection: "Why don't all processors use the largest possible page size?"

---

### Chapter 7.7 — Cache Coherence Basics and Snooping

#### Learning objectives
- Explain the cache coherence problem in shared-memory multiprocessors.
- Implement the snooping-based MSI coherence protocol.
- Describe the MESI protocol and its advantages over MSI.
- Analyze the performance and scalability trade-offs between snooping and directory protocols.

#### Detailed lesson content

A multiprocessor is a system with multiple processor cores that share a common memory. Each core has its own private cache (L1 and possibly L2). When multiple cores access the same memory location, the caches must be kept consistent. This is the **cache coherence problem**.

**The cache coherence problem:**

Consider two cores, P1 and P2, each with a private L1 cache. P1 writes to address A, setting its value to 5. P2 reads address A from its cache, which still has the old value (0). P2 sees stale data. This violates the fundamental expectation that all processors see a consistent view of memory.

A cache coherence protocol ensures that when one core writes to a location, all other cores that have cached that location either see the new value or invalidate their stale copy. The protocol must handle:
- Read requests from a core that does not have the data.
- Write requests from a core that wants to modify the data.
- Requests from other cores that need the latest value.

**Snooping protocols:**

In a snooping protocol, all caches monitor (snoop) a shared bus or broadcast network. When a core issues a memory request, all other caches check if they have a copy of the requested block. If they do, they respond accordingly (e.g., supplying the data or invalidating their copy).

The simplest snooping protocol is **MSI** (Modified, Shared, Invalid). Each cache line has a state:
- **M (Modified):** The line has been modified and is different from memory. Only this cache has the valid copy.
- **S (Shared):** The line is valid and unmodified. Multiple caches may have this line in Shared state.
- **I (Invalid):** The line is not valid.

**MSI protocol transitions:**
- **PrRd (Processor Read):** The processor reads a line. If the line is in M or S, the read is satisfied locally. If in I, the cache issues a read request on the bus. If another cache has the line in M, it supplies the data and transitions to S. If another cache has it in S, memory supplies the data (or another cache can supply it). The requesting cache transitions to S.
- **PrWr (Processor Write):** The processor writes to a line. If the line is in M, the write is done locally. If in S, the cache must invalidate all other copies. It issues an invalidation on the bus. Other caches that have the line in S transition to I. The requesting cache transitions to M. If in I, the cache must first fetch the line (issuing a read request) and then invalidate other copies. The requesting cache transitions to M.
- **BusRd (Bus Read):** Another cache wants to read the line. If this cache has it in M, it must write the data back to memory (or supply it directly) and transition to S. If in S, it stays in S.
- **BusRdX (Bus Read Exclusive):** Another cache wants to write to the line. If this cache has it in M or S, it must invalidate its copy (transition to I). If in M, it must write back to memory first.

**MESI protocol:**

MESI adds an **E (Exclusive)** state. A line in E is unmodified but is the only cache that has it. This allows the cache to write to the line without issuing an invalidation on the bus (because no other cache has the line). This optimization reduces bus traffic for write-after-read sequences.

- **E (Exclusive):** The line is valid, unmodified, and only this cache has it.
- Transition to E: On a PrRd, if no other cache has the line, the cache transitions to E (instead of S).
- From E, a PrWr does not need a BusRdX because no other cache has the line. This saves bus bandwidth.

MESI is the most widely used snooping protocol, implemented in Intel x86, ARM, and IBM Power processors.

**MOESI and beyond:**

- **MOESI** adds an **O (Owned)** state. A line in O is modified but shared. One cache owns the dirty copy and supplies it to other caches, while memory remains stale. This avoids writebacks when a cache in M transitions to S.
- **MESIF** (used in Intel processors) adds an **F (Forward)** state. The cache in F is responsible for forwarding the data to other caches, reducing memory accesses.

**Directory-based coherence:**

Snooping protocols work well for small-scale systems (2–16 cores) because they rely on a shared bus or broadcast network. As the number of cores increases, the bus becomes a bottleneck, and broadcast traffic overwhelms the interconnect. For large-scale systems (tens to thousands of cores), **directory-based coherence** is used.

In a directory protocol, a **directory** (usually distributed across memory controllers) keeps track of which caches have each memory block. When a cache wants to read or write a block, it sends a request to the directory. The directory looks up the sharers and forwards the request only to the caches that have the block. This is a point-to-point communication, not a broadcast, so it scales much better.

Directory entry for each block:
- **State:** Uncached, Shared, Modified (or Exclusive).
- **Sharers:** A bit vector indicating which caches have the block (in Shared state).
- **Owner:** The cache that has the block in Modified state.

**Trade-offs:**
- **Snooping:** Simple, fast for small systems, but limited scalability due to broadcast traffic. Requires a bus or ordered interconnect.
- **Directory:** Scalable, efficient for large systems, but higher latency (requires directory lookup) and more complex hardware (directory storage and management).
- **Hybrid:** Many modern processors use a hybrid approach: snooping within a socket (where cores share an L3 cache) and directory coherence between sockets.

#### Key concepts
- Cache coherence problem: multiple caches with shared data
- Snooping protocols: caches monitor bus for shared memory requests
- MSI protocol: Modified, Shared, Invalid states
- MESI protocol: adds Exclusive state for write optimization
- BusRd, BusRdX, BusUpgr (upgrade) transactions
- MOESI and MESIF extensions
- Directory-based coherence: directory tracks sharers and owner
- Point-to-point vs. broadcast communication
- Scalability: snooping for small systems, directory for large systems
- Hybrid protocols for multi-socket systems

#### Hands-on activity
Simulate a 2-processor MSI coherence protocol in Python. Each processor has a 4-line direct-mapped cache. The memory has 8 blocks (addresses 0–7). Implement:
1. Cache states (M, S, I) for each line.
2. Bus transactions: BusRd, BusRdX.
3. State transitions based on processor requests and bus snoops.

Trace the following sequence and show the state of both caches after each step:
```
P1: Read 0      # P1 reads address 0
P2: Read 0      # P2 reads address 0
P1: Write 0     # P1 writes to address 0
P2: Read 0      # P2 reads address 0 (should get latest value)
P2: Write 0     # P2 writes to address 0
P1: Read 0      # P1 reads address 0 (should get latest value)
```

Show the state transitions (e.g., "P1 cache line 0: I → S on PrRd, BusRd"). Then extend the simulation to MESI and show how the Exclusive state reduces bus transactions for the case where P1 reads and then writes to a block that no other cache has.

#### Assessment idea
Ask: "In the MESI protocol, what is the purpose of the Exclusive state, and how does it reduce bus traffic compared to MSI?" Answer: In MSI, when a processor reads a block and no other cache has it, the block enters the Shared state. If the processor then wants to write to the block, it must issue a BusRdX (Bus Read Exclusive) to invalidate all other caches. Since the block is in Shared state, this bus transaction is required even though no other cache actually has the block. In MESI, when a processor reads a block and no other cache has it, the block enters the Exclusive state. The processor knows it is the only cache with the block, so a subsequent write can transition directly to Modified without any bus transaction. This eliminates unnecessary bus traffic for the common pattern of read-then-write. Then ask: "Why do snooping protocols not scale beyond about 16 cores, and what alternative is used for larger systems?" Answer: Snooping protocols rely on broadcasting every coherence request to all caches. As the number of cores increases, the broadcast traffic grows linearly, and the bus or interconnect becomes a bottleneck. Each core must snoop every request, consuming power and bandwidth. Directory-based protocols solve this by storing a directory (at the memory controller) that tracks which caches have each block. Requests are sent only to the caches that have the block, not to all caches. This point-to-point communication scales much better. Modern manycore processors (e.g., Intel Xeon with many cores, AMD EPYC) use directory-based coherence or hybrid protocols.

#### AI generation note
Create a 10-minute animated lesson. Show two caches as two people reading the same book. Show the coherence problem as one person rewriting a page while the other still has the old version. Show the snooping bus as a shared bulletin board where everyone posts their requests. Show MSI states as colored tags on the book pages: M (red, modified), S (green, shared), I (gray, invalid). Show the MESI Exclusive state as a blue tag that means "I have the only clean copy." Show a directory as a librarian who knows exactly who has which book. Show a snooping bus as a crowded hallway where everyone shouts. Show a directory as a quiet phone call to the right person. Show the hybrid protocol as a building with bulletin boards inside each room and a phone system between rooms. Include the coherence simulation state transitions. End with a reflection: "Why is cache coherence harder to implement than cache consistency?"

---

### Chapter 7.8 — Advanced Cache Techniques and Prefetching

#### Learning objectives
- Describe advanced cache organizations: victim caches, skewed-associative caches, and cache compression.
- Implement hardware prefetching techniques: next-line, stride, and stream prefetching.
- Evaluate the impact of prefetching on cache performance, bandwidth, and pollution.
- Understand cache compression and the trade-offs between capacity and latency.

#### Detailed lesson content

As memory latency continues to be a bottleneck, processor designers have developed increasingly sophisticated cache techniques to reduce misses and hide latency. This chapter covers advanced cache organizations and prefetching strategies that are used in modern processors.

**Non-blocking caches:**

A non-blocking cache (also called a lockup-free cache) can continue to serve hits while a miss is being processed. In a blocking cache, a miss stalls the entire cache until the data is fetched. In a non-blocking cache, multiple misses can be in flight simultaneously. This is essential for out-of-order processors that issue multiple memory requests per cycle.

Non-blocking caches use **Miss Status Handling Registers (MSHRs)** to track outstanding misses. Each MSHR holds the address of the missing block, the type of access (read or write), and the instructions waiting for the data. When a miss occurs, an MSHR is allocated. If the same block is requested again by another instruction while the miss is in progress, the new request is merged with the existing MSHR (a **miss under miss**). When the data arrives from memory, all waiting instructions are satisfied, and the MSHR is freed.

The number of MSHRs determines the degree of non-blocking. A typical L1 cache has 4–16 MSHRs. The L2 cache may have more. Non-blocking caches are standard in modern processors because they allow the processor to continue executing independent instructions while memory accesses are in progress.

**Victim caches:**

A victim cache is a small, fully-associative cache that holds recently evicted blocks from the main cache. When a miss occurs in the main cache, the victim cache is checked before going to the next level. If the block is in the victim cache, it is swapped back into the main cache. Victim caches reduce conflict misses with minimal area overhead because they are small (typically 4–16 entries). The AMD Athlon and Intel Pentium 4 both used victim caches.

**Skewed-associative caches:**

A skewed-associative cache uses different hash functions for each way in a set-associative cache. In a standard set-associative cache, a block maps to the same set in all ways. In a skewed cache, the set index is computed differently for each way (e.g., using different hash functions). This spreads out conflicting blocks and reduces the probability of conflict misses. Skewed associativity provides some of the benefits of higher associativity without the full cost.

**Hardware prefetching:**

Prefetching is the technique of fetching data into the cache before it is requested, based on a prediction of future accesses. Prefetching reduces compulsory and capacity misses but increases memory bandwidth and can cause **cache pollution** (filling the cache with data that is not used, evicting useful data).

Types of hardware prefetching:

1. **Next-Line Prefetching:** When a block is accessed, the next sequential block is prefetched. This exploits spatial locality. Simple and effective for sequential access patterns (e.g., array traversal, instruction fetch).

2. **Stride Prefetching:** When the processor detects a regular stride pattern (e.g., accessing A[0], A[16], A[32], ...), it prefetches the next elements in the stride. This is effective for strided array accesses in scientific code. The prefetcher tracks the delta between consecutive addresses and prefetches at the same delta.

3. **Stream Prefetching:** Detects and prefetches contiguous streams of data. A stream buffer holds prefetched blocks and feeds them into the cache when requested. Multiple stream buffers can track multiple independent streams.

4. **Correlation Prefetching:** Uses a history of miss addresses to predict future misses. If a miss to address A is often followed by a miss to address B, the prefetcher prefetches B when A is accessed. This is complex but can capture irregular patterns that stride prefetchers miss.

5. **Global History Buffer (GHB) Prefetching:** Stores a history of miss addresses in a buffer and uses the history to compute a prefetch address. This is used in some research and commercial processors.

**Prefetching trade-offs:**
- **Bandwidth:** Prefetching consumes memory bandwidth. If the prefetcher is too aggressive, it can saturate the memory bus and slow down demand requests.
- **Cache pollution:** Prefetched data that is not used evicts useful data from the cache. This is particularly bad for small caches.
- **Timeliness:** Prefetched data should arrive just before it is needed. If it arrives too early, it may be evicted before use. If too late, the miss is not avoided.
- **Accuracy:** The ratio of useful prefetches to total prefetches. Low accuracy means wasted bandwidth and pollution.

**Cache compression:**

Cache compression stores data in compressed form in the cache, effectively increasing the cache capacity. For example, if data patterns are repetitive (common in memory-bound workloads), compressing the data can fit more blocks in the same cache size. However, compression and decompression add latency, which may negate the benefit. Some processors use compressed tags or line compression to increase capacity without full data compression.

**Write policies revisited:**

- **Write-allocate vs. no-write-allocate:** Write-allocate is used with write-back caches (fetch the block on a write miss). No-write-allocate is used with write-through caches (write directly to memory).
- **Critical word first:** When a cache line is fetched from memory, the word that caused the miss is sent first, allowing the processor to resume sooner. The rest of the line follows.
- **Early restart:** Similar to critical word first, but the processor resumes as soon as any word in the block arrives, not necessarily the critical word.

#### Key concepts
- Non-blocking cache and MSHRs
- Miss under miss and miss merging
- Victim cache for conflict miss reduction
- Skewed-associative cache with different hash functions per way
- Hardware prefetching: next-line, stride, stream, correlation, GHB
- Prefetching trade-offs: bandwidth, cache pollution, timeliness, accuracy
- Cache compression and latency trade-offs
- Critical word first and early restart
- Write-allocate vs. no-write-allocate
- Advanced cache organizations and their impact on performance

#### Hands-on activity
Extend the cache simulator from Chapter 7.1 to implement a stride prefetcher. The prefetcher should:
1. Track the last two miss addresses for each set.
2. If the difference (stride) between the last two misses is constant, prefetch the next block at address = last_miss + stride.
3. Place the prefetched block in the cache (or a separate prefetch buffer).

Test the prefetcher with the following traces:
- **Sequential:** 0, 64, 128, 192, 256, ... (stride = 64)
- **Strided:** 0, 128, 256, 384, ... (stride = 128)
- **Random:** Random addresses (no pattern)
- **Mixed:** 0, 64, 128, 256, 320, 384, ... (changing stride)

For each trace, compare the cache performance with and without prefetching. Measure:
- Hit rate
- Number of prefetches issued
- Number of useful prefetches (prefetched block is accessed before eviction)
- Cache pollution (number of useful blocks evicted by prefetched blocks)
- Bandwidth consumption (total memory accesses)

Plot the results and discuss under what conditions prefetching is beneficial and when it is harmful. Then implement a victim cache (4-entry fully-associative) and measure its impact on conflict misses.

#### Assessment idea
Ask: "A non-blocking cache with 8 MSHRs can handle 8 simultaneous misses. What happens if a 9th miss occurs while all 8 MSHRs are in use?" Answer: The 9th miss causes the cache (or the requester) to stall until one of the MSHRs is freed. The processor cannot issue more memory requests until an MSHR becomes available. This is a structural hazard in the memory system. Modern processors typically have enough MSHRs to handle the maximum number of outstanding memory requests that the processor can issue. If the MSHRs are a bottleneck, the processor's out-of-order execution capability is wasted because it cannot issue more loads and stores. Then ask: "A stride prefetcher detects a stride of 128 bytes and prefetches the next block. However, the program's stride changes to 64 bytes after 100 iterations. What happens to the prefetcher's accuracy?" Answer: The prefetcher will continue to prefetch at a stride of 128 bytes for several iterations after the change, issuing useless prefetches. The accuracy will drop significantly. Most stride prefetchers use a confidence counter or a threshold to detect stride changes. If the prefetched data is not used within a certain number of accesses, the prefetcher resets the stride and starts detecting again. The transient period of incorrect prefetching causes wasted bandwidth and cache pollution until the prefetcher adapts to the new stride.

#### AI generation note
Create a 10-minute animated lesson. Show a non-blocking cache as a highway with multiple lanes where cars (misses) can be in transit simultaneously. Show MSHRs as toll booths that track each car. Show a victim cache as a "lost and found" box for recently evicted blocks. Show a skewed-associative cache as a parking lot with different entrance rules for each section. Show the stride prefetcher as a detective that notices a pattern and predicts the next location. Show cache pollution as a clean room being filled with junk that pushes out useful items. Show bandwidth as a pipe that can get clogged by too many prefetches. Show the cache simulator output as animated graphs with bars for hit rate, accuracy, and pollution. Include the stride prefetcher demonstration. End with a reflection: "What is the biggest challenge in designing a prefetcher for a mixed workload?"

---

## Module 8: Advanced Memory System

> **Goal:** Explore the advanced memory system techniques used in modern processors, including prefetching, memory consistency, and multiprocessor memory hierarchies.

---

### Chapter 8.1 — Memory Consistency Models

#### Learning objectives
- Explain why memory consistency models are needed in multiprocessors.
- Distinguish between sequential consistency, total store order, and relaxed consistency models.
- Understand the memory model of x86 (TSO) and ARM (weak ordering).
- Analyze the performance implications of strong vs. weak consistency models.

#### Detailed lesson content

Cache coherence ensures that all processors see a single, up-to-date value for each memory location. But coherence is not enough. **Memory consistency** (or **memory ordering**) defines the order in which memory operations (loads and stores) appear to execute across all processors. It is the contract between the hardware and the programmer/compiler regarding what reorderings are allowed.

**Why consistency matters:**

Consider two processors executing this code:

Processor P1:
```
S1: A = 1
S2: B = 1
```

Processor P2:
```
L1: R1 = B
L2: R2 = A
```

What are the possible values of R1 and R2? Intuitively, we might expect that if P2 sees B = 1 (meaning S2 has executed), then it must also see A = 1 (meaning S1 has executed). But without a memory consistency model, the hardware could reorder S1 and S2 within P1, or reorder L1 and L2 within P2, or allow the stores to propagate to different cores at different times. This could result in R1 = 1 and R2 = 0, which is counterintuitive.

A **memory consistency model** specifies which reorderings are allowed and which are not. It is the foundation of correct multithreaded programming.

**Sequential Consistency (SC):**

Sequential consistency, defined by Leslie Lamport, is the most intuitive model. It requires that:
1. The result of any execution is the same as if the operations of all processors were executed in some sequential order.
2. The operations of each individual processor appear in this sequence in the order specified by its program.

In other words, SC preserves program order for each processor and ensures that all processors see a single, consistent interleaving of all memory operations. Under SC, the example above would never produce R1 = 1 and R2 = 0, because S1 must appear before S2 in the global order, and L2 must appear after L1.

SC is easy for programmers to reason about but difficult for hardware to implement efficiently. It prohibits the hardware from reordering loads and stores, which prevents many important optimizations:
- **Write buffers:** A store cannot be buffered; it must complete immediately.
- **Load bypassing:** A load cannot bypass a previous store to a different address.
- **Out-of-order execution:** Loads and stores must commit in program order.
- **Store merging:** Multiple stores cannot be merged into a single write.

Because of these restrictions, SC is rarely implemented in hardware. Instead, processors implement weaker models that allow more reordering.

**Total Store Order (TSO):**

TSO is the memory model used by x86 processors. It is a relaxation of SC that allows **load bypassing** (also called **load-store reordering**). In TSO:
- Stores are ordered with respect to each other (store-store order is preserved).
- Loads are ordered with respect to each other (load-load order is preserved).
- A load can bypass a previous store to a different address (load-store reordering is allowed).
- A store cannot bypass a previous load or store.

In TSO, the example above could still not produce R1 = 1 and R2 = 0 because S1 and S2 are stores to different addresses, and TSO preserves store-store order. However, TSO allows:
```
P1: S1: A = 1
    S2: R1 = B   (load bypasses store to A, allowed in TSO)
```

TSO is implemented using a **store buffer** (also called a write buffer). Stores are placed in the store buffer and are visible to other processors only when they are written to the cache. However, loads from the same processor can read from the store buffer, bypassing the cache. This allows loads to execute before previous stores complete.

TSO is much faster than SC but still relatively strong. It allows programmers to reason about memory using a simple model, and most multithreaded programs work correctly on TSO without special memory fence instructions.

**Relaxed (Weak) Memory Models:**

ARM, PowerPC, and RISC-V implement weak memory models that allow almost any reordering of loads and stores to different addresses. In these models:
- Loads can be reordered with other loads.
- Stores can be reordered with other stores.
- Loads can be reordered with stores.
- Stores can be reordered with loads.

The only guarantees are typically:
- Data dependency ordering: a load dependent on a previous load is ordered.
- Same-address ordering: loads and stores to the same address are ordered.
- Explicit synchronization: special instructions (memory fences, barriers) enforce ordering.

Weak models allow the hardware to maximize performance by reordering operations aggressively. However, they require programmers and compilers to insert memory fences explicitly to prevent unintended reorderings. This makes programming much more difficult and error-prone.

For example, in a weak model, the double-checked locking pattern requires explicit fences:
```cpp
// Double-checked locking (requires fences on weak models)
if (ptr == nullptr) {          // Check 1
    lock_guard<mutex> lock(m);
    if (ptr == nullptr) {      // Check 2
        auto* tmp = new Object();
        memory_fence();          // Store-store fence
        ptr = tmp;
    }
}
```

Without the fence, the store to `ptr` could be visible to other processors before the constructor completes, causing them to see a partially constructed object.

**Memory fences and barriers:**

A **memory fence** (or **memory barrier**) is an instruction that prevents certain reorderings across it. Common types:
- **Load-Load fence:** Prevents loads from being reordered across the fence.
- **Store-Store fence:** Prevents stores from being reordered across the fence.
- **Load-Store fence:** Prevents loads and stores from being reordered across the fence.
- **Full fence:** Prevents all reorderings across the fence.

High-level synchronization primitives (mutexes, semaphores, atomic operations) implicitly include the necessary fences. Programmers rarely need to use raw fences directly unless writing lock-free data structures or low-level synchronization code.

**Performance implications:**

| Model | Flexibility | Performance | Programming Difficulty |
|-------|-------------|-------------|--------------------------|
| Sequential Consistency | None | Low | Easy |
| Total Store Order (TSO) | Load bypassing | Medium | Easy |
| Weak/Relaxed | Almost all reorderings | High | Hard |

Modern processors have converged on a practical compromise: weak hardware models with strong software abstractions. The hardware allows aggressive reordering, but the ISA provides atomic instructions and memory ordering semantics that compilers and libraries use to implement safe synchronization.

#### Key concepts
- Memory consistency vs. cache coherence
- Sequential consistency: single global order, program order preserved
- Total Store Order (TSO): x86 model, load bypassing allowed
- Store buffer and load bypassing in TSO
- Weak/relaxed memory models: ARM, PowerPC, RISC-V
- Allowed reorderings in weak models: load-load, store-store, load-store, store-load
- Memory fences and barriers: load-load, store-store, full fence
- Data dependency ordering and same-address ordering
- Synchronization primitives and implicit fences
- Performance vs. programmability trade-off

#### Hands-on activity
Write a simple memory model simulator in Python that traces the execution of a small multithreaded program. The simulator should support three models: Sequential Consistency, TSO, and a Weak model. The program:

Processor P1:
```
S1: A = 1
S2: B = 1
```

Processor P2:
```
L1: R1 = B
L2: R2 = A
```

The simulator should enumerate all possible outcomes (values of R1 and R2) under each model. For SC, show that R1=1, R2=0 is impossible. For TSO, show the same. For the Weak model, show that R1=1, R2=0 is possible if S1 and S2 are reordered, or if L1 and L2 are reordered, or if the stores propagate to different cores at different times. Then, add a memory fence after S1 and show how it eliminates the weak outcome. Discuss which model is easiest to program and which is fastest to implement.

#### Assessment idea
Ask: "In x86 TSO, a load can bypass a previous store to a different address. Why is this optimization safe for most programs, and when does it cause problems?" Answer: Load bypassing is safe for most programs because typical programs do not have subtle dependencies between a store to one variable and a subsequent load to another variable. In most cases, the programmer assumes that the load and store to different addresses are independent. However, it causes problems in synchronization patterns like Dekker's algorithm or Peterson's algorithm, where one thread writes a flag and then reads another thread's flag. If the load bypasses the store, the flag might not be visible to the other thread before the load is executed. This is why x86 provides the `MFENCE` (memory fence) instruction and why atomic operations (like `LOCK` prefix) implicitly fence. These mechanisms allow programmers to enforce ordering when needed. Then ask: "Why do ARM and RISC-V use weak memory models instead of TSO like x86?" Answer: Weak models allow the hardware to reorder memory operations aggressively, which improves performance in several ways: (1) loads can be issued early to hide latency, even before previous stores complete; (2) stores can be buffered and merged, reducing memory traffic; (3) cache coherence traffic can be optimized by batching or reordering requests; (4) the memory controller can reorder requests to improve DRAM bandwidth. These optimizations are particularly important for mobile and embedded processors where power efficiency is critical. The trade-off is that programmers must use explicit synchronization (fences, atomic operations) to ensure correctness, which is handled by the compiler and standard libraries in most cases.

#### AI generation note
Create a 10-minute animated lesson. Show memory consistency as a set of traffic rules for a city with multiple drivers. Show sequential consistency as a single-lane road where everyone must drive in order. Show TSO as a road with a fast lane for loads that can bypass slow store trucks. Show a weak model as an intersection with no traffic lights, where drivers must use hand signals (fences) to coordinate. Show the store buffer as a loading dock where trucks wait before entering the main road. Show a memory fence as a traffic cop that stops all traffic. Show the double-checked locking bug as a house that is visible on the map before it is fully built. Show the three models as city maps with different levels of traffic control. Include the outcome enumeration for the example. End with a reflection: "Why is memory consistency one of the hardest topics in computer architecture?"

---

### Chapter 8.2 — Directory-Based Coherence

#### Learning objectives
- Describe the structure and operation of a directory-based coherence protocol.
- Compare directory protocols with snooping protocols in terms of scalability and latency.
- Understand the directory entry format: state, sharer list, and owner pointer.
- Analyze the trade-offs between distributed directories and centralized directories.

#### Detailed lesson content

Directory-based coherence is the alternative to snooping for large-scale multiprocessors. While snooping uses broadcast to maintain coherence, directories use point-to-point messages to specific caches, making them scalable to hundreds or thousands of cores.

**Directory structure:**

A directory stores information about each memory block in the system. The directory is typically distributed across memory controllers (or L3 cache banks), with each directory entry corresponding to a physical memory block.

Directory entry format:
- **State:** The coherence state of the block. Common states: Uncached (no cache has the block), Shared (multiple caches have read-only copies), Modified (one cache has a writable copy).
- **Sharers:** A bit vector indicating which caches have the block in Shared state. For a system with N cores, the sharer list is N bits.
- **Owner:** The ID of the cache that has the block in Modified state. If the block is in Shared state, the owner is the memory controller.

**Directory protocol operation:**

1. **Read request:** When a cache wants to read a block, it sends a read request to the directory. The directory looks up the state:
   - If Uncached: The directory forwards the request to memory. The directory updates the state to Shared and adds the requester to the sharer list.
   - If Shared: The directory forwards the request to one of the sharers (or to memory). The requester is added to the sharer list.
   - If Modified: The directory forwards the request to the owner. The owner supplies the data and transitions to Shared. The directory updates the sharer list to include both the owner and the requester.

2. **Write request:** When a cache wants to write to a block, it sends a write request to the directory.
   - If Uncached: The directory forwards the request to memory. The directory updates the state to Modified and sets the owner to the requester.
   - If Shared: The directory sends invalidations to all sharers. Once all sharers acknowledge, the directory updates the state to Modified and sets the owner.
   - If Modified: The directory forwards the request to the owner. The owner supplies the data and invalidates its copy. The directory updates the owner to the requester.

**Directory latency:**

Directory protocols have higher latency than snooping for small systems because each request requires a directory lookup and potentially multiple point-to-point messages. However, for large systems, the latency is lower than snooping because snooping requires broadcast to all caches, which consumes bandwidth and increases contention.

**Directory scalability:**

The scalability of a directory protocol depends on:
1. **Sharer list size:** For N cores, the sharer list is N bits. For 1024 cores, this is 128 bytes per directory entry. If memory has 1 billion blocks, the directory storage is 128 GB, which is impractical. Solutions:
   - **Coarse bit vectors:** Each bit represents a group of cores (e.g., 8 cores per bit). This reduces storage but requires broadcasting to the group.
   - **Limited pointers:** The directory stores only a small number of sharers (e.g., 4). If more than 4 caches have the block, the directory broadcasts to all caches or falls back to a broadcast protocol.
   - **Hierarchical directories:** Multiple levels of directories, each covering a subset of cores.

2. **Directory bandwidth:** The directory controller must handle all coherence requests. For large systems, this can become a bottleneck. Solutions:
   - **Distributed directories:** The directory is distributed across multiple memory controllers, each handling a subset of addresses.
   - **Directory caching:** Frequently accessed directory entries are cached in the directory controller.

3. **Directory access time:** The directory lookup adds latency to every coherence request. For systems with 100+ cores, the directory access time can be 10–20 cycles. This is acceptable for large systems but problematic for latency-sensitive applications.

**Comparison: Directory vs. Snooping:**

| Aspect | Snooping | Directory |
|--------|----------|-----------|
| Scalability | Poor (broadcast) | Good (point-to-point) |
| Latency | Low for small systems | Higher for small systems, lower for large systems |
| Bandwidth | High (broadcast) | Low (point-to-point) |
| Storage | Low (no directory) | High (directory entries) |
| Complexity | Low | High |
| Best for | 2–16 cores | 16–1000+ cores |

**Hybrid protocols:**

Many modern processors use a hybrid approach: snooping within a socket (where cores share an L3 cache) and directory coherence between sockets. For example, Intel Xeon processors use a directory protocol for multi-socket systems but snooping within each socket.

#### Key concepts
- Directory-based coherence: point-to-point instead of broadcast
- Directory entry: state, sharers, owner
- Read and write request handling by the directory
- Directory latency and scalability challenges
- Sharer list size and compression techniques
- Coarse bit vectors, limited pointers, hierarchical directories
- Directory bandwidth and distributed directories
- Directory access time and latency
- Comparison: directory vs. snooping
- Hybrid protocols for multi-socket systems

#### Hands-on activity
Design a directory-based coherence protocol for a 16-core system. Each directory entry has: state (2 bits), sharer list (16 bits), and owner (4 bits). The memory has 256 blocks. Calculate the total directory storage. Simulate the following sequence:
```
P1: Read 0    # Read block 0
P2: Read 0    # Read block 0 (should be shared)
P3: Write 0   # Write block 0 (invalidates P1 and P2)
P1: Read 0    # Read block 0 (should get from P3)
```

Show the directory state after each step. Show the messages sent: read request, read response, invalidation, writeback, etc. Count the total number of messages. Compare with a snooping protocol for the same sequence. Discuss the trade-offs in terms of message count and latency.

#### Assessment idea
Ask: "Why does a directory-based coherence protocol require more storage than a snooping protocol, and what techniques reduce this storage?" Answer: A directory protocol requires a directory entry for each memory block, containing the state, sharer list, and owner pointer. For a system with N cores and M memory blocks, the directory storage is M × (N + few bits). For large N, this is significant. Techniques to reduce storage include: (1) coarse bit vectors — each bit represents a group of cores, reducing the sharer list size; (2) limited pointers — the directory stores only a small number of sharers (e.g., 4), and if more sharers exist, it broadcasts or uses a different protocol; (3) hierarchical directories — multiple levels of directories, each covering a subset of cores; (4) directory caching — caching frequently accessed directory entries in the directory controller; (5) sparse directory representation — only storing directory entries for blocks that are cached, not for all memory blocks. These techniques trade off accuracy and latency for reduced storage. Then ask: "Why do hybrid protocols (snooping within a socket, directory between sockets) make sense for modern multi-socket servers?" Answer: Within a single socket, the cores share an L3 cache and are connected by a high-speed interconnect (e.g., ring or mesh). Snooping is efficient because the broadcast is confined to the socket and the L3 cache acts as a natural snooping filter. Between sockets, the interconnect is slower and broadcast is expensive. Directory-based coherence sends point-to-point messages only to the relevant sockets, reducing bandwidth and contention. This hybrid approach combines the low latency of snooping for intra-socket communication with the scalability of directories for inter-socket communication. It is the dominant approach in modern multi-socket processors (Intel Xeon, AMD EPYC).

#### AI generation note
Create a 10-minute animated lesson. Show a snooping protocol as a town square where everyone shouts announcements. Show a directory protocol as a post office where messages are delivered to specific addresses. Show the directory as a phone book that lists who has which package. Show a read request as a letter to the post office, which forwards it to the current owner. Show a write request as a letter that requires the post office to notify all previous holders. Show scalability as the town growing: the town square becomes too crowded, but the post office handles growth by adding more mail carriers. Show the sharer list as a mailing list that gets longer with more residents. Show coarse bit vectors as mailing lists by neighborhood. Show limited pointers as a mailing list with a maximum number of entries. Show hybrid protocols as a town with neighborhood bulletin boards and a central post office. End with a reflection: "At what system size does a directory protocol become necessary?"

---

### Chapter 8.3 — Interconnect Topologies and Routing

#### Learning objectives
- Describe the role of the interconnect in connecting processors, caches, and memory in a multiprocessor.
- Compare bus, ring, mesh, and torus topologies in terms of bandwidth, latency, and scalability.
- Understand packet-switched routing, flow control, and deadlock avoidance.
- Analyze the trade-offs between topology, routing algorithm, and cost in multiprocessor interconnects.

#### Detailed lesson content

In a multiprocessor, the **interconnect** is the network that connects the processor cores, caches, memory controllers, and I/O devices. The interconnect determines how fast data can move between components, how many simultaneous transactions can be in flight, and how the system scales as more components are added. The interconnect is often the bottleneck in large-scale systems, and its design is as important as the processor design itself.

**Interconnect topologies:**

1. **Bus:** A single shared communication medium. All devices connect to the bus, and only one transaction can occur at a time. Buses are simple but have limited bandwidth and scalability.
   - Used in: Early multiprocessors, single-chip systems with few cores (2–4 cores).
   - Bandwidth: Fixed, determined by bus width and frequency.
   - Latency: Low for small systems.
   - Scalability: Poor. Bus bandwidth is shared, so adding more cores reduces bandwidth per core.

2. **Ring:** Cores are connected in a ring topology. Data travels around the ring until it reaches the destination. Multiple transactions can be in flight simultaneously if they do not conflict.
   - Used in: Intel Xeon (Sandy Bridge, Ivy Bridge), some AMD processors.
   - Bandwidth: Higher than a bus. Multiple transactions can coexist if they travel in different directions or on different segments.
   - Latency: Proportional to the number of hops around the ring.
   - Scalability: Moderate. Latency increases linearly with the number of cores.

3. **Mesh:** Cores are arranged in a 2D grid, with each core connected to its north, south, east, and west neighbors. Packets are routed along the grid.
   - Used in: Intel Xeon Phi (Knights Landing), manycore research processors, Tilera TILE-Gx.
   - Bandwidth: High. Multiple paths between any two points.
   - Latency: Proportional to the Manhattan distance (number of hops in X + number of hops in Y).
   - Scalability: Good. Bandwidth scales with the number of cores (if the bisection bandwidth is sufficient).

4. **Torus:** A mesh with wrap-around connections. The edge cores connect to the opposite edge cores. This reduces the maximum distance between any two cores.
   - Used in: IBM BlueGene, Cray XT5.
   - Latency: Lower than mesh for large systems because the wrap-around reduces the maximum distance.
   - Scalability: Good.

5. **Crossbar:** A fully connected switch where every input can connect to every output simultaneously. This provides the highest bandwidth but is extremely expensive for large systems (N² switches for N cores).
   - Used in: Small switches (4×4 or 8×8), within a single chip's cache or memory controller.
   - Bandwidth: Maximum possible. No conflicts.
   - Cost: Grows quadratically with the number of ports.

6. **Fat Tree:** A hierarchical tree where the bandwidth increases toward the root. This provides high bandwidth and low latency for communication patterns with locality.
   - Used in: Some supercomputers and data center networks.

**Packet-switched routing:**

Modern interconnects use **packet switching** rather than circuit switching. Data is divided into packets, each with a header containing the destination address. Packets are routed hop-by-hop through the network. Each router has **buffers** to hold packets and **routing logic** to determine the next hop.

**Routing algorithms:**
- **Dimension-Order Routing (XY routing):** In a mesh, packets first travel along the X dimension, then along the Y dimension. This is simple and deadlock-free but may not be optimal for all traffic patterns.
- **Adaptive Routing:** The router chooses the path based on current network conditions (e.g., buffer occupancy). This can balance load but is more complex and may introduce deadlock if not carefully designed.
- **Minimal Routing:** The router always chooses the shortest path. Non-minimal routing may detour to avoid congestion.

**Flow control:**

Flow control manages how packets are transmitted when the network is congested. Common techniques:
- **Store-and-Forward:** The entire packet is received at each router before being forwarded. High latency.
- **Wormhole Switching:** The packet is divided into flits (flow control units). The header flit sets up the route, and subsequent flits follow immediately. If the header is blocked, the entire packet blocks. This is the most common technique in on-chip networks.
- **Virtual Channels:** Multiple buffers per physical link allow packets to bypass blocked packets. This reduces head-of-line blocking and can prevent deadlock.

**Deadlock avoidance:**

Deadlock occurs when a cycle of packets is waiting for each other (e.g., packet A is waiting for packet B to free a buffer, packet B is waiting for packet C, and packet C is waiting for packet A). Deadlock can be avoided by:
- **Acyclic routing:** Using dimension-order routing or turn models to prevent cycles.
- **Virtual channels:** Separating request and reply packets into different virtual channels, preventing protocol-level deadlock.
- **Resource allocation:** Ensuring that packets always have sufficient resources to make progress.

**On-chip networks (NoC):**

In modern manycore processors, the interconnect is an **Network-on-Chip (NoC)** — a packet-switched network built on the same silicon die as the cores. NoCs use routers, links, and buffers to connect cores and memory controllers. The NoC is designed to provide high bandwidth, low latency, and low power consumption within the area and power budget of the chip.

NoC design considerations:
- **Topology:** Mesh is the most common for on-chip networks because it maps well to the 2D layout of the chip and provides good scalability.
- **Router microarchitecture:** The router must have low latency (1–2 cycles per hop) and high throughput. This requires efficient arbitration, routing, and buffer management.
- **Link bandwidth:** The width of the links determines the flit size and bandwidth. Wider links provide more bandwidth but consume more area and power.
- **Power:** NoC routers and links consume a significant fraction of the chip's power (10–30%). Power management techniques include clock gating, voltage scaling, and adaptive routing.

#### Key concepts
- Interconnect as the communication backbone of multiprocessors
- Bus topology: shared medium, simple, poor scalability
- Ring topology: Intel Xeon, moderate scalability
- Mesh topology: 2D grid, good scalability, manycore processors
- Torus topology: mesh with wrap-around, reduced latency
- Crossbar: fully connected, maximum bandwidth, high cost
- Packet switching: data divided into packets with headers
- Routing algorithms: dimension-order (XY), adaptive, minimal
- Flow control: store-and-forward, wormhole switching, virtual channels
- Deadlock avoidance: acyclic routing, virtual channels, resource allocation
- Network-on-Chip (NoC) for manycore processors
- NoC design: topology, router microarchitecture, link bandwidth, power

#### Hands-on activity
Design a simple 4×4 mesh NoC in a simulator (or on paper). Each router has 5 ports: north, south, east, west, and local (to the core). Use XY routing (dimension-order). Simulate the transmission of packets between the following source-destination pairs:
- (0,0) → (3,3)
- (0,3) → (3,0)
- (1,1) → (2,2)
- (0,0) → (0,3)

Show the route for each packet (the sequence of routers visited). Calculate the number of hops and the latency assuming 1 cycle per hop and 1 cycle for routing decision at each router. Then, simulate a hotspot scenario where 10 packets are sent from various sources to (2,2) simultaneously. Show how XY routing causes congestion at the destination router. Discuss how adaptive routing or virtual channels could mitigate the congestion. Finally, calculate the bisection bandwidth of the 4×4 mesh (the minimum bandwidth across any cut that divides the network into two equal halves).

#### Assessment idea
Ask: "Why is a mesh topology preferred over a ring topology for manycore processors with 64+ cores?" Answer: In a ring topology, the latency between two cores is proportional to the number of hops around the ring. For 64 cores, the maximum latency is 32 hops. The bandwidth is also limited because all traffic shares the same ring. In a mesh topology, the latency is proportional to the Manhattan distance, which is at most 14 hops for an 8×8 mesh (7 in X + 7 in Y). More importantly, the mesh provides multiple paths between any two points, and the aggregate bandwidth scales with the number of cores. The bisection bandwidth of a mesh is much higher than that of a ring. For these reasons, mesh topologies are preferred for manycore processors like Intel Xeon Phi and research chips. Then ask: "What is the difference between wormhole switching and store-and-forward switching, and why is wormhole preferred for on-chip networks?" Answer: In store-and-forward switching, each router receives the entire packet before forwarding it to the next router. This requires large buffers and introduces high latency (proportional to packet size × number of hops). In wormhole switching, a packet is divided into flits, and the header flit sets up the route. Subsequent flits follow immediately, pipelined through the network. The latency is low (proportional to the number of hops plus the flit size), and the buffers can be small (only need to hold a few flits). Wormhole switching is preferred for on-chip networks because it minimizes buffer area (critical for silicon) and reduces latency (critical for core-to-core communication). The trade-off is that if the header flit is blocked, the entire packet blocks in the network, potentially causing deadlock, which must be handled by virtual channels or careful routing.

#### AI generation note
Create a 10-minute animated lesson. Show the interconnect as a city's transportation network. Show a bus as a single road that everyone shares. Show a ring as a beltway around the city. Show a mesh as a grid of streets. Show a torus as a grid where the edges wrap around (like a Pac-Man maze). Show a crossbar as a direct teleportation network. Show packet switching as a mail system with labeled envelopes. Show XY routing as a rule: always go east-west first, then north-south. Show wormhole switching as a train where the engine sets the route and the cars follow. Show a virtual channel as a separate track on the same road. Show deadlock as a traffic jam at a four-way intersection. Show the NoC as a city built on a single chip. Show routers as traffic lights and buffers as parking lots. Show the hotspot as a popular destination with long lines. Include the mesh routing simulation. End with a reflection: "What topology would you choose for a 256-core processor?"

---

### Chapter 8.4 — Memory Bandwidth and DRAM Technology

#### Learning objectives
- Explain the operation of DRAM and how it differs from SRAM.
- Describe the DRAM organization: banks, rows, columns, and the memory controller.
- Understand the concept of memory bandwidth and how it limits processor performance.
- Analyze the trade-offs between DRAM capacity, bandwidth, and latency.

#### Detailed lesson content

While caches and processors have become faster, main memory (DRAM) has not kept pace. Understanding DRAM technology and memory bandwidth is essential for system design.

**DRAM vs. SRAM:**
- **SRAM (Static RAM):** Uses 6 transistors per bit. Fast (1–2 ns access), low density, high power, expensive. Used for caches and register files.
- **DRAM (Dynamic RAM):** Uses 1 transistor + 1 capacitor per bit. Slower (50–100 ns access), high density, low power, cheap. Used for main memory.

DRAM is slower because it requires periodic refreshing (the capacitor leaks charge). The refresh operation consumes bandwidth and adds latency.

**DRAM organization:**

A DRAM module is organized into:
- **Ranks:** Independent sets of DRAM chips that share the data bus. A typical module has 1 or 2 ranks.
- **Banks:** Independent arrays within a chip. Each bank has its own row buffer. A typical chip has 4–16 banks.
- **Rows:** The addressable lines within a bank. A row is typically 8 KB.
- **Columns:** The addressable units within a row. A column is typically 64 bits (8 bytes).

**DRAM access procedure:**
1. **Activate (ACT):** Open a row in a bank. This copies the row into the row buffer. Takes ~15 ns.
2. **Read/Write (CAS):** Read or write a column from the row buffer. Takes ~15 ns.
3. **Precharge (PRE):** Close the row and write back any modified data. Takes ~15 ns.

If a subsequent access is to the same row (row hit), only the CAS step is needed. If it is to a different row in the same bank (row miss), the current row must be precharged and the new row activated. This takes ~45 ns.

**Memory controller:**

The memory controller manages DRAM access. It schedules requests to maximize row hits and minimize bank conflicts. Key techniques:
- **Open-page policy:** Keep rows open as long as possible to maximize row hits.
- **Close-page policy:** Precharge rows immediately after access to minimize latency for random accesses.
- **Bank interleaving:** Spread consecutive memory addresses across different banks to allow parallel access.
- **Request reordering:** Reorder memory requests to maximize row hits and minimize bank conflicts.

**Memory bandwidth:**

Memory bandwidth is the rate at which data can be transferred between memory and the processor. It is determined by:
- **Data bus width:** Typically 64 bits (8 bytes) per channel.
- **Data rate:** DDR4 runs at 3200 MT/s (million transfers per second), which is 25.6 GB/s per channel. DDR5 runs at 6400 MT/s, which is 51.2 GB/s per channel.
- **Number of channels:** Modern processors have 2–8 memory channels. A quad-channel DDR4 system provides 102.4 GB/s.

**Bandwidth vs. latency:**

Bandwidth and latency are different. Bandwidth is the total data transfer rate. Latency is the time for a single access. A system can have high bandwidth but high latency (e.g., many slow channels in parallel) or low bandwidth but low latency (e.g., one fast channel).

**Memory bandwidth as a bottleneck:**

For bandwidth-bound workloads (e.g., streaming data, graphics, AI), memory bandwidth is the bottleneck. If the processor can execute 100 GFLOPS but memory bandwidth is only 50 GB/s, and each FLOP requires 1 byte of data, the effective performance is limited to 50 GFLOPS.

**High Bandwidth Memory (HBM):**

HBM is a 3D-stacked DRAM technology that provides much higher bandwidth than traditional DDR. HBM stacks multiple DRAM dies on top of each other and connects them with through-silicon vias (TSVs). HBM2 provides 307 GB/s per stack, and HBM3 provides 819 GB/s. HBM is used in GPUs (NVIDIA A100, H100) and high-performance processors (AMD MI300).

**Trade-offs:**
- **DDR:** Lower bandwidth, higher capacity, lower cost, higher latency. Good for general-purpose systems.
- **HBM:** Higher bandwidth, lower capacity, higher cost, lower latency. Good for bandwidth-bound accelerators.
- **LPDDR:** Low-power DDR for mobile devices. Balances bandwidth and power.

#### Key concepts
- DRAM vs. SRAM: transistor count, speed, density, power, cost
- DRAM organization: ranks, banks, rows, columns
- DRAM access: activate, read/write, precharge
- Row hits, row misses, and bank conflicts
- Memory controller: open-page, close-page, bank interleaving, request reordering
- Memory bandwidth: data bus width, data rate, number of channels
- Bandwidth vs. latency
- Memory bandwidth as a performance bottleneck
- HBM (High Bandwidth Memory): 3D-stacked, TSVs, high bandwidth
- DDR vs. HBM vs. LPDDR trade-offs

#### Hands-on activity
Calculate the theoretical memory bandwidth for the following systems:
1. Dual-channel DDR4-3200 (64-bit bus, 3200 MT/s per channel).
2. Quad-channel DDR5-5600 (64-bit bus, 5600 MT/s per channel).
3. HBM2E with 4 stacks (307 GB/s per stack).

Then, calculate the memory bandwidth required for the following workloads:
- Matrix multiplication of two 4096×4096 matrices (assume each element is 8 bytes and each FLOP requires 2 bytes of memory traffic).
- Training a neural network with a batch size of 32, where each sample requires 224×224×3×4 bytes = 602,112 bytes, and the model processes 1000 samples per second.

Compare the required bandwidth with the available bandwidth for each system. Discuss which system is adequate and which is bandwidth-limited. Then, research the actual memory bandwidth achieved by these systems using tools like `stream` or `mbw` and compare with theoretical values.

#### Assessment idea
Ask: "Why does a memory controller reorder memory requests, and how does this affect the latency of individual requests?" Answer: The memory controller reorders requests to maximize row hits and minimize bank conflicts. For example, if the request queue contains: read row A (bank 0), read row B (bank 0), read row A (bank 0), the controller can reorder to: read row A (bank 0), read row A (bank 0), read row B (bank 0). This turns two of the three accesses into row hits (fast) instead of row misses (slow). However, reordering can increase the latency of individual requests because a request may be delayed while the controller services other requests that are more favorable for DRAM efficiency. The memory controller must balance throughput (total bandwidth) with fairness (latency for individual requests). Modern controllers use quality-of-service (QoS) mechanisms to prioritize critical requests (e.g., from the CPU) over less critical ones (e.g., from a DMA engine). Then ask: "What is the advantage of HBM over DDR for AI training workloads, and what is the disadvantage?" Answer: HBM provides much higher bandwidth than DDR (819 GB/s for HBM3 vs. 51.2 GB/s for DDR5 per channel). AI training workloads are extremely bandwidth-bound because they process large tensors and require massive data movement. HBM's high bandwidth allows the GPU to feed its compute units at full capacity. The disadvantage of HBM is: (1) cost — HBM is much more expensive than DDR because of the 3D stacking and TSV technology; (2) capacity — HBM stacks have lower capacity than DDR modules (e.g., 24 GB per HBM3 stack vs. 64 GB per DDR5 DIMM); (3) availability — HBM requires advanced packaging technology that only a few companies can manufacture; (4) thermal — HBM is located close to the GPU die, which increases heat density. For these reasons, HBM is used in high-end GPUs and AI accelerators where bandwidth is critical, while DDR is used in general-purpose systems where capacity and cost are more important.

#### AI generation note
Create a 10-minute animated lesson. Show DRAM as a library with bookshelves (banks). Show a row as a shelf that must be pulled out (activated) before reading. Show a row hit as reading multiple books from the same shelf. Show a row miss as having to push the shelf back in and pull out a new one. Show the memory controller as a librarian who rearranges the reading list to minimize shelf changes. Show bandwidth as the number of books per minute that can be carried. Show latency as the time to get a single book. Show HBM as a skyscraper library with bookshelves stacked vertically and connected by elevators (TSVs). Show DDR as a single-story library. Show the bandwidth bottleneck as a narrow doorway. Show AI training as a factory that needs a constant supply of books. End with a reflection: "Will memory bandwidth always be the bottleneck, or will new technologies solve it?"

---

### Chapter 8.5 — Cache Compression and Data Placement

#### Learning objectives
- Explain how cache compression increases effective cache capacity.
- Describe compression techniques: zero-value compression, frequent pattern compression, and base-delta-immediate compression.
- Understand the trade-offs between compression ratio, decompression latency, and hardware complexity.
- Analyze data placement strategies for non-uniform memory access (NUMA) systems.

#### Detailed lesson content

Cache compression stores data in compressed form in the cache, effectively increasing the cache capacity. This is particularly useful for workloads with compressible data patterns.

**Compression techniques:**

1. **Zero-value Compression (ZVC):** If a cache line is all zeros, store a single bit indicating "all zeros" instead of the full line. This is common for zero-initialized memory (e.g., bss section, sparse matrices).

2. **Frequent Pattern Compression (FPC):** Identify common patterns (e.g., 0x00000000, 0xFFFFFFFF, 0x00000001) and store them with short codes. Uncommon patterns are stored uncompressed.

3. **Base-Delta-Immediate (BDI) Compression:** For data with a base value and small deltas (e.g., array of pointers, integer sequences), store the base and the deltas instead of all values. This is effective for scientific data and certain pointer structures.

4. **Dictionary-based Compression:** Use a dictionary of common substrings. Effective for text and some binary data, but complex to implement in hardware.

**Hardware implementation:**

Cache compression requires:
- **Compression unit:** Compresses data before writing to the cache. This adds latency to the write path.
- **Decompression unit:** Decompresses data before reading. This adds latency to the read path.
- **Variable-size block management:** Compressed lines have different sizes. The cache must track the size of each line and manage free space.

**Trade-offs:**
- **Compression ratio:** The ratio of uncompressed size to compressed size. Higher is better.
- **Decompression latency:** Must be fast enough to not increase cache hit time. Typically 1–2 cycles.
- **Hardware complexity:** Compression/decompression units consume area and power.
- **Data-dependent compression:** Some data is not compressible (e.g., encrypted data, random data). The cache must handle incompressible data gracefully.

**Commercial adoption:**
- Cache compression is used in some processors (e.g., IBM z15, some ARM processors) but is not universal.
- Memory compression (compressing data in main memory) is more common (e.g., Microsoft Windows memory compression, zRAM in Linux).

**Data placement in NUMA systems:**

In a Non-Uniform Memory Access (NUMA) system, memory is physically distributed across multiple nodes. Each processor has local memory (fast access) and remote memory (slow access). Data placement affects performance significantly.

Data placement strategies:
1. **First-touch:** Data is allocated in the memory of the processor that first accesses it. This keeps data local to the processor that uses it.
2. **Round-robin:** Data is distributed evenly across all nodes. This balances load but may increase remote access latency.
3. **Interleave:** Data is striped across nodes at a fine granularity (e.g., page level). This provides load balancing with some locality.
4. **Migration:** Data is moved to the node that accesses it most frequently. This requires monitoring and adds overhead.

The operating system and runtime libraries (e.g., `numactl` in Linux) control data placement in NUMA systems.

#### Key concepts
- Cache compression: increasing effective capacity
- Compression techniques: ZVC, FPC, BDI, dictionary-based
- Hardware compression and decompression units
- Variable-size block management
- Compression ratio vs. decompression latency trade-off
- Data-dependent compression challenges
- NUMA systems: local vs. remote memory
- Data placement strategies: first-touch, round-robin, interleave, migration
- NUMA-aware programming and memory allocation

#### Hands-on activity
Implement a simple cache compression simulator in Python. The simulator should support:
1. Zero-value compression (detect all-zero lines).
2. Base-delta-immediate compression (for arrays with small deltas).

Test the simulator on the following data patterns:
- All zeros (1 KB)
- Sequential integers: 100, 101, 102, ... (1 KB)
- Random data (1 KB)
- Repeated pattern: 0xABCD, 0xABCD, ... (1 KB)

Calculate the compression ratio for each pattern. Discuss which patterns are compressible and which are not. Then, research the actual compression ratios achieved by commercial cache compression schemes (e.g., IBM's DICED, Intel's unused) and compare with your simulator.

#### Assessment idea
Ask: "Why is cache compression less common than memory compression in modern systems?" Answer: Cache compression requires extremely fast compression and decompression (1–2 cycles) to avoid increasing the cache hit time. This limits the complexity of the compression algorithm. Memory compression (in main memory) can use more complex algorithms because the latency is already high (100+ cycles). Additionally, cache data is often random (pointers, floating-point numbers) and not easily compressible, while memory data may have more regular patterns (text, sparse matrices). Cache compression also requires variable-size block management, which complicates the cache design. For these reasons, many processors have not adopted cache compression, instead preferring to increase cache size directly. Memory compression is more attractive because it increases effective memory capacity without requiring larger physical memory. Then ask: "In a NUMA system, why does the first-touch data placement policy often outperform round-robin for scientific workloads?" Answer: Scientific workloads typically have regular access patterns where each processor works on a contiguous subset of data. With first-touch, each processor's data is allocated in its local memory, so most accesses are local (fast). With round-robin, data is spread across all nodes, so each processor must access remote memory for some of its data, increasing latency. First-touch exploits the natural locality of scientific workloads. However, first-touch can cause load imbalance if the workload is not evenly distributed, and it can lead to memory fragmentation if processes allocate and deallocate memory frequently. Round-robin is better for workloads with unpredictable access patterns or when memory bandwidth must be balanced across nodes.

#### AI generation note
Create a 10-minute animated lesson. Show cache compression as a suitcase that holds more clothes when they are vacuum-sealed. Show zero-value compression as a suitcase that is empty except for a note saying "empty." Show BDI compression as packing a base outfit and only the small differences. Show decompression as unpacking the suitcase. Show the trade-off as a balance: more compression means more time to pack/unpack. Show NUMA as a city with multiple neighborhoods, each with its own store. Show first-touch as shopping at your local store. Show round-robin as spreading your shopping across all stores. Show remote access as taking a bus to another neighborhood. Show data migration as moving your groceries to your neighborhood after shopping. End with a reflection: "When would you prefer memory compression over larger physical memory?"

---

### Chapter 8.6 — Memory-Safe Architectures and Security

#### Learning objectives
- Explain memory safety vulnerabilities: buffer overflows, use-after-free, and dangling pointers.
- Describe hardware memory safety mechanisms: bounds checking, capabilities, and memory tagging.
- Understand ARM Memory Tagging Extension (MTE) and CHERI capabilities.
- Analyze the performance impact of memory safety mechanisms.

#### Detailed lesson content

Memory safety vulnerabilities are one of the most common causes of security breaches. Buffer overflows, use-after-free, and dangling pointers account for the majority of critical security vulnerabilities. While software techniques (safe languages, sanitizers) help, hardware memory safety mechanisms can provide stronger protection with lower overhead.

**Memory safety vulnerabilities:**

1. **Buffer Overflow:** Writing beyond the bounds of an allocated buffer. Can overwrite adjacent data or code, leading to crashes or arbitrary code execution.

2. **Use-After-Free:** Accessing memory after it has been freed. The memory may have been reallocated for a different purpose, leading to data corruption or information leakage.

3. **Dangling Pointers:** Pointers that reference memory that has been deallocated or reallocated.

4. **Integer Overflow:** Arithmetic overflow that leads to buffer overflows or incorrect memory accesses.

**Hardware memory safety mechanisms:**

1. **Bounds Checking:** Hardware checks that every memory access is within the bounds of the allocated object. This requires storing bounds metadata with pointers.
   - **Intel MPX (Memory Protection Extensions):** Added bounds registers to x86. However, MPX was deprecated due to performance overhead and complexity.
   - **ARM MTE (Memory Tagging Extension):** Tags memory and pointers with 4-bit color codes. Accesses are checked for matching tags. This catches use-after-free and some buffer overflows with low overhead (~1–2%).

2. **Capability-Based Addressing:** Pointers are replaced by capabilities, which are unforgeable tokens that grant access to a specific memory region with specific permissions (read, write, execute).
   - **CHERI (Capability Hardware Enhanced RISC Instructions):** A research project that extends RISC-V and ARM with capabilities. Capabilities are 128-bit values that include the base address, length, and permissions. CHERI can prevent all memory safety vulnerabilities with minimal overhead (~5%).
   - **Morello:** ARM's prototype processor implementing CHERI extensions.

3. **Memory Encryption:** Encrypts memory to protect against physical attacks and cold boot attacks.
   - **AMD SME (Secure Memory Encryption):** Encrypts all memory using a single key.
   - **AMD SEV (Secure Encrypted Virtualization):** Encrypts VM memory with per-VM keys.
   - **Intel TME (Total Memory Encryption):** Similar to SME.

4. **Control-Flow Integrity (CFI):** Hardware mechanisms to prevent return-oriented programming (ROP) and jump-oriented programming (JOP) attacks.
   - **Intel CET (Control-Flow Enforcement Technology):** Shadow stack and indirect branch tracking.
   - **ARM BTI (Branch Target Identification):** Instructions that mark valid branch targets.

**ARM Memory Tagging Extension (MTE):**

MTE is available in ARMv8.5-A and later. It works by:
- Assigning a 4-bit tag to every 16-byte granule of memory.
- Assigning a 4-bit tag to the upper bits of every pointer.
- On memory access, the hardware compares the pointer tag with the memory tag. If they don't match, a fault is raised.

MTE catches:
- Use-after-free (if the tag is changed when memory is freed).
- Some buffer overflows (if the overflow crosses a 16-byte boundary with a different tag).
- Some dangling pointer dereferences.

MTE does not catch all buffer overflows (e.g., intra-object overflows) and does not prevent all memory safety issues. However, it has very low overhead (~1–2%) and is suitable for production use.

**CHERI capabilities:**

CHERI is a more comprehensive solution. A capability includes:
- **Base and length:** Define the memory region.
- **Permissions:** Read, write, execute, etc.
- **Object type:** For sealed capabilities (used for software compartmentalization).
- **Tag:** A single bit indicating whether the capability is valid (prevents forgery).

CHERI prevents:
- All buffer overflows (accesses are bounded by the capability).
- All use-after-free (freed capabilities are invalidated).
- All dangling pointer dereferences (invalid capabilities cannot be used).
- Pointer forgery (capabilities cannot be manufactured).

CHERI requires significant changes to the architecture and software ecosystem. It is being explored in research and prototypes (Morello) but has not yet been deployed in mainstream processors.

**Performance impact:**

| Mechanism | Overhead | Security Coverage | Maturity |
|-----------|----------|-------------------|----------|
| Software sanitizers | 2–5× | High | Mature |
| ARM MTE | 1–2% | Medium | Deployed (Android, Linux) |
| Intel MPX | 10–20% | High | Deprecated |
| CHERI | 5–10% | Very High | Research/Prototype |
| Intel CET | 1–2% | Medium (CFI only) | Deployed |

#### Key concepts
- Memory safety vulnerabilities: buffer overflow, use-after-free, dangling pointers
- Hardware bounds checking: Intel MPX, ARM MTE
- ARM Memory Tagging Extension (MTE): 4-bit tags, 16-byte granules
- Capability-based addressing: CHERI, Morello
- CHERI capability structure: base, length, permissions, tag
- Memory encryption: AMD SME, SEV, Intel TME
- Control-flow integrity: Intel CET, ARM BTI
- Performance impact of memory safety mechanisms
- Security coverage vs. overhead trade-off
- Mature vs. research-stage mechanisms

#### Hands-on activity
Research the memory safety features available on your processor or a recent processor. Check CPU feature flags (e.g., `mte` on ARM, `cet` on Intel). If you have access to an ARM system with MTE, write a simple C program that demonstrates MTE catching a use-after-free bug. Use `mprotect` or `mmap` with `PROT_MTE` if available. If not, describe what the program would do: allocate memory, set a tag, free the memory, reallocate with a different tag, and try to access through the old pointer. The MTE hardware should raise a fault. Then, research CHERI and Morello. Write a one-page summary of how CHERI capabilities would prevent a buffer overflow in a C program, compared to MTE.

#### Assessment idea
Ask: "Why did Intel deprecate MPX while ARM deployed MTE, even though MPX provided stronger security guarantees?" Answer: MPX had several problems that limited its adoption: (1) high performance overhead (10–20% for some workloads); (2) complex software integration (required compiler support, runtime library, and OS changes); (3) compatibility issues (legacy code could not use MPX without recompilation); (4) limited coverage (MPX only checked bounds, not use-after-free or dangling pointers). In contrast, MTE has very low overhead (1–2%), is easier to integrate (tags are managed by the allocator), and catches the most common memory safety bugs (use-after-free and inter-object overflows). MTE is also compatible with legacy code because the tags are transparent to software that does not use them. ARM deployed MTE in Android and Linux because it provides a good balance of security coverage and performance. CHERI provides even stronger guarantees than MPX but requires more significant architectural and software changes, which is why it remains in the research/prototype stage. Then ask: "How does CHERI's capability-based addressing prevent pointer forgery, and why is this important?" Answer: In CHERI, a capability is a 128-bit value that includes the base address, bounds, permissions, and a 1-bit validity tag. The validity tag is maintained by hardware and cannot be modified by software. If software tries to forge a capability (e.g., by constructing a 128-bit value that looks like a capability), the validity tag will not be set, and the hardware will reject the forged capability. This prevents attackers from creating pointers to arbitrary memory locations, which is a common technique in exploit development. Pointer forgery prevention is important because it eliminates a wide class of attacks where the attacker manipulates pointers to access sensitive data or execute arbitrary code. Even if an attacker can read memory, they cannot create valid capabilities to new memory regions, limiting the damage they can cause.

#### AI generation note
Create a 10-minute animated lesson. Show memory safety vulnerabilities as unlocked doors in a building. Show buffer overflow as a door that leads to a restricted area. Show use-after-free as a door that was locked but the key was copied. Show hardware bounds checking as a security guard at each door checking IDs. Show MTE as a color-coded badge system where each room has a color and each badge must match. Show CHERI as a smart card that can only open specific doors and cannot be copied. Show pointer forgery as someone trying to make a fake key. Show the smart card rejecting the fake key. Show performance impact as the security guard slowing down traffic. Show MTE as a fast checkpoint and CHERI as a more thorough but slower security screening. End with a reflection: "Will hardware memory safety become standard in all processors?"

---

## Module 9: Branch Prediction and VLIW

> **Goal:** Master the techniques that processors use to predict control flow and explore compiler-driven architectures.

---

### Chapter 9.1 — The Branch Prediction Problem

#### Learning objectives
- Explain why branch prediction is critical for pipelined processor performance.
- Calculate the impact of branch prediction accuracy on processor CPI.
- Describe the trade-offs between static and dynamic branch prediction.
- Understand the role of branch frequency and branch predictability in workload analysis.

#### Detailed lesson content

Branches are the enemy of pipelined performance. Every branch instruction creates a **control hazard** because the processor does not know which instruction to fetch next until the branch is resolved. In a deep pipeline, the branch resolution may take many cycles, and all instructions fetched during that time are wasted if the branch is mispredicted. For a processor with a 20-stage pipeline, a single branch misprediction can waste 20 cycles of work. If a program has a branch every 5 instructions and the predictor is 95% accurate, the CPI penalty is still significant.

**Branch frequency:** Typical programs have a branch every 5–10 instructions. Loop structures have backward branches (taken) at the end of each iteration. If-else structures have forward branches (not taken for the if, taken for the else). The branch direction depends on the data, which is unpredictable in general.

**Impact of branch prediction on CPI:**

The impact of branch prediction on performance depends on the branch penalty (the number of cycles wasted on a misprediction) and the branch frequency. For a processor with a branch penalty of 20 cycles and a branch frequency of 20% (1 branch every 5 instructions):

```
CPI = Base CPI + Branch_Frequency × Mispredict_Rate × Branch_Penalty
    = 1.0 + 0.20 × 0.05 × 20 = 1.0 + 0.2 = 1.2
```

A 5% mispredict rate adds 20% to the CPI. Improving the predictor to 2% mispredict rate reduces the CPI to 1.08, a 10% performance improvement. This is why processor designers invest heavily in branch prediction.

**Static vs. dynamic prediction:**

- **Static prediction** does not use history. The prediction is fixed based on the branch direction or a compiler hint. Simple but limited accuracy.
- **Dynamic prediction** uses the history of each branch to predict its future behavior. More complex but much higher accuracy.

The choice between static and dynamic prediction depends on the workload and the processor design. Embedded processors with predictable loops may use static prediction. High-performance processors always use dynamic prediction.

**Branch predictability:**

Not all branches are equally predictable. Some branches are highly predictable:
- **Loop branches:** Backward branches at the end of loops are taken 90%+ of the time.
- **Error checks:** Branches that check for rare error conditions are usually not taken.
- **Induction variables:** Branches that depend on loop counters are predictable.

Some branches are difficult to predict:
- **Data-dependent branches:** Branches that depend on input data (e.g., sorting algorithms, search trees).
- **Indirect branches:** Function pointers, virtual function calls, switch statements.
- **Correlated branches:** Branches whose outcome depends on other branches.

Understanding branch predictability is essential for both hardware design and software optimization.

#### Key concepts
- Branch frequency and control hazards in deep pipelines
- Branch penalty and its impact on CPI
- CPI formula: Base CPI + Branch_Freq × Mispredict_Rate × Penalty
- Static vs. dynamic prediction trade-offs
- Branch predictability: loop branches, error checks, data-dependent branches
- Indirect branches and correlated branches
- Branch prediction as a critical performance factor
- Workload analysis for branch behavior

#### Hands-on activity
Profile a set of benchmark programs (e.g., SPEC CPU, your own programs) to measure branch frequency and branch predictability. Use `perf` or a similar profiling tool to collect:
- Total branches executed
- Total branch mispredictions
- Branch misprediction rate
- Distribution of branch types (conditional, unconditional, indirect, return)

Calculate the CPI impact of branch mispredictions assuming a branch penalty of 15 cycles. Compare the results across different programs and identify which programs are branch-intensive and which are branch-predictable. Discuss how the branch behavior affects the choice of processor architecture (e.g., in-order vs. out-of-order, shallow vs. deep pipeline).

#### Assessment idea
Ask: "A processor has a branch misprediction penalty of 10 cycles. A workload has 15% branches and a branch predictor accuracy of 92%. What is the CPI impact of branch mispredictions, and what would be the impact if the accuracy improved to 98%?" Answer: Current: CPI impact = 0.15 × 0.08 × 10 = 0.12. The CPI increases from 1.0 to 1.12. Improved: CPI impact = 0.15 × 0.02 × 10 = 0.03. The CPI increases from 1.0 to 1.03. The improvement from 92% to 98% accuracy reduces the CPI by 0.09, which is an 8% performance improvement. This demonstrates that even small improvements in branch prediction accuracy can have significant performance impact, especially for branch-heavy workloads. Then ask: "Why are loop branches typically very predictable, while branches in sorting algorithms are typically unpredictable?" Answer: Loop branches are predictable because they have a regular pattern: they are taken many times (for each iteration) and then not taken once (when the loop exits). The branch predictor quickly learns this pattern and predicts correctly. In contrast, branches in sorting algorithms depend on the relative ordering of data elements, which is irregular and data-dependent. For example, in quicksort, the branch that compares the pivot with each element depends on the input data distribution. If the data is random, the branch outcomes are effectively random, and no predictor can learn a pattern. This is why sorting algorithms are notoriously difficult for branch predictors and often have high misprediction rates.

#### AI generation note
Create a 10-minute animated lesson. Show a branch as a fork in a road with a fog obscuring the correct path. Show the pipeline as a train that must choose a track before the fog clears. Show a misprediction as the train going down the wrong track and having to back up. Show the CPI impact as a speedometer that drops when the train goes the wrong way. Show loop branches as a well-known path that the train takes repeatedly. Show data-dependent branches as a path that changes based on the cargo. Show branch prediction as a GPS that learns from past trips. Show the accuracy as a percentage of correct guesses. Show the performance impact as a graph of CPI vs. accuracy. End with a reflection: "What percentage of branch prediction accuracy is 'good enough' for most workloads?"

---

### Chapter 9.2 — Static Branch Prediction

#### Learning objectives
- Implement static branch prediction strategies: always-taken, always-not-taken, and backward-taken-forward-not-taken (BTFNT).
- Understand profile-guided prediction and its accuracy.
- Analyze the accuracy of static predictors on different branch types.
- Describe the compiler's role in static prediction through branch hints.

#### Detailed lesson content

Static prediction does not use history. The prediction is fixed based on the branch direction or a compiler hint. Static prediction is simple to implement and requires no hardware state, but its accuracy is limited.

**Always-Taken:** Predict that every branch is taken. Accuracy: ~60% for backward branches (loops) but terrible for forward branches (if statements). This is used in some very simple processors where the branch penalty is small.

**Always-Not-Taken:** Predict that every branch is not taken. Accuracy: ~40% for backward branches but good for forward branches. This was used in early MIPS processors. The advantage is that the processor can simply continue fetching sequentially, and only flush if the branch is taken.

**Backward-Taken, Forward-Not-Taken (BTFNT):** Predict that backward branches (loop branches) are taken, and forward branches (if statements) are not taken. This is simple and achieves ~65% accuracy because most loops execute many times.

**Profile-Guided Prediction:** The compiler runs the program with sample inputs, records which branches are taken, and encodes the prediction in the branch instruction. This achieves ~80% accuracy but requires profiling and recompilation. The prediction can be encoded as:
- A dedicated bit in the branch instruction (e.g., "likely" or "unlikely" hints in ARM).
- A separate prediction table accessed by the branch address.

**Compiler hints:**

Some ISAs provide branch hint instructions that tell the processor the likely direction of a branch. For example:
- ARM: `BNE` (branch if not equal) can be combined with condition code hints.
- x86: `Jcc` instructions can be prefixed with `HINT_TAKEN` or `HINT_NOT_TAKEN` (though these are rarely used in practice).
- MIPS: Branch instructions have a "likely" variant (e.g., `BEQL` — branch if equal likely) that indicates the branch is likely taken.

**Static prediction accuracy by branch type:**

| Branch Type | Always-Taken | Always-Not-Taken | BTFNT | Profile-Guided |
|-------------|--------------|------------------|-------|--------------|
| Loop backward | 95% | 5% | 95% | 98% |
| Loop forward | 5% | 95% | 95% | 98% |
| If-then | 30% | 70% | 70% | 80% |
| If-then-else | 50% | 50% | 50% | 75% |
| Data-dependent | 50% | 50% | 50% | 60% |

Static prediction works well for loops but poorly for data-dependent branches. This is why dynamic prediction is essential for general-purpose processors.

**When static prediction is used:**
- Embedded processors with simple pipelines and predictable workloads.
- As a fallback when dynamic predictor state is unavailable (e.g., first-time execution).
- For branches that are inherently unpredictable, where dynamic prediction provides no benefit.

#### Key concepts
- Static prediction: no history, fixed prediction
- Always-taken: good for loops, bad for forward branches
- Always-not-taken: good for forward branches, bad for loops
- BTFNT: backward-taken, forward-not-taken
- Profile-guided prediction: compiler records branch outcomes
- Compiler hints: branch likely/unlikely instructions
- Static prediction accuracy by branch type
- Static prediction use cases: embedded, fallback, unpredictable branches

#### Hands-on activity
Write a program that simulates static branch prediction. The program should accept a trace of branch outcomes (T for taken, N for not taken) and simulate:
1. Always-taken predictor
2. Always-not-taken predictor
3. BTFNT predictor (requires knowing branch direction: backward or forward)
4. Profile-guided predictor (requires a training phase to record outcomes)

Test the predictors on traces generated from:
- A simple for loop (100 iterations)
- A binary search algorithm
- A quicksort algorithm
- A random branching pattern

Calculate the accuracy of each predictor for each trace. Discuss which predictor works best for each workload and why. Then, modify the compiler (if using GCC or Clang) to add `__builtin_expect` hints to a branch and observe if the performance changes.

#### Assessment idea
Ask: "Why is BTFNT prediction more accurate than always-taken or always-not-taken for most workloads?" Answer: BTFNT exploits the fact that most loops have backward branches that are taken many times, and most if-statements have forward branches that are not taken. By predicting backward branches as taken and forward branches as not taken, BTFNT achieves ~65% accuracy on average, which is better than the 50% accuracy of always-taken or always-not-taken for mixed workloads. However, BTFNT is still much less accurate than dynamic prediction, which can achieve 95%+ accuracy by learning branch-specific patterns. BTFNT is useful in simple processors where the cost of dynamic prediction hardware is not justified, but it is not sufficient for high-performance processors. Then ask: "What are the limitations of profile-guided static prediction, and why is it not used in all compilers?" Answer: Profile-guided prediction has several limitations: (1) it requires running the program with representative inputs to collect branch statistics, which adds to the build time; (2) the prediction is only as good as the training inputs — if the actual inputs differ from the training inputs, the predictions may be wrong; (3) the branch behavior may change at runtime (e.g., depending on user input or data), making static predictions stale; (4) it requires recompilation, which is not always possible (e.g., for dynamically loaded code or JIT compilation). For these reasons, profile-guided prediction is typically used only for performance-critical applications where the build time overhead is acceptable, and dynamic prediction is used for the general case. Some compilers (e.g., GCC with `-fprofile-generate` and `-fprofile-use`) support profile-guided optimization, but it is not the default.

#### AI generation note
Create a 10-minute animated lesson. Show a branch as a fork in the road. Show always-taken as a driver who always turns left. Show always-not-taken as a driver who always goes straight. Show BTFNT as a driver who turns left at U-turns and goes straight at intersections. Show profile-guided as a driver who memorizes the route from a previous trip. Show compiler hints as road signs that suggest the best route. Show the accuracy as a scoreboard for each driver. Show loop branches as U-turns that are almost always taken. Show if-statements as intersections where going straight is common. Show data-dependent branches as intersections where the route changes unpredictably. End with a reflection: "When is static prediction sufficient, and when is dynamic prediction necessary?"

---

### Chapter 9.3 — Dynamic Branch Prediction: 1-bit and 2-bit Predictors

#### Learning objectives
- Design a 1-bit branch predictor and explain its limitations.
- Implement a 2-bit saturating counter predictor and analyze its improvement over 1-bit.
- Understand the branch history table (BHT) and its organization.
- Calculate the accuracy of 1-bit and 2-bit predictors on loop and conditional branches.

#### Detailed lesson content

Dynamic prediction uses the history of each branch to predict its future behavior. The most common technique is the **branch history table (BHT)** or **branch prediction buffer**, which is a small cache indexed by the branch address.

**1-bit predictor:**

Each entry in the BHT is a single bit: 1 = taken, 0 = not taken. When a branch is executed, the prediction bit is used. If the prediction was wrong, the bit is flipped.

The 1-bit predictor works well for branches that are usually taken or usually not taken. However, it mispredicts twice for every loop: once when the loop exits (predicting taken when it is not taken), and once on the next execution (predicting not taken when it is taken).

Example: A loop with 100 iterations.
- Iterations 1–99: branch is taken. Predictor starts at 0 (not taken). Mispredicts on iteration 1, then predicts taken for iterations 2–99. Total mispredictions: 1.
- Iteration 100: branch is not taken. Predictor predicts taken. Mispredicts. Total mispredictions: 2.
- Next loop execution: predictor is now 0 (not taken). Iteration 1: branch is taken. Mispredicts. Total mispredictions: 3.
- Iterations 2–99: predicts taken. No mispredictions.
- Iteration 100: not taken. Mispredicts. Total mispredictions: 4.

For 100 iterations, the 1-bit predictor mispredicts 2 times per loop execution. Accuracy = 1 - 2/100 = 98%.

For a loop with 10 iterations, the 1-bit predictor mispredicts 2 times per loop execution. Accuracy = 1 - 2/10 = 80%.

For a loop with 2 iterations, the 1-bit predictor mispredicts 2 times per loop execution. Accuracy = 1 - 2/2 = 0%.

**2-bit saturating counter:**

This is the standard predictor used in most processors. Each entry in the BHT is a 2-bit counter with four states:
- 00: Strongly Not Taken
- 01: Weakly Not Taken
- 10: Weakly Taken
- 11: Strongly Taken

The prediction is based on the most significant bit (0 = not taken, 1 = taken). When the branch is taken, the counter increments (saturating at 11). When not taken, it decrements (saturating at 00).

A branch that is usually taken will settle in the "Strongly Taken" state. A loop that is taken 99 times and not taken once will mispredict only once (when exiting). On the next loop execution, the predictor is in "Weakly Taken" (10), so it predicts taken and is correct. No misprediction on the first iteration of the next loop.

For a loop with 100 iterations:
- Iterations 1–2: The predictor may mispredict while transitioning to "Strongly Taken."
- Iterations 3–99: Predicts taken correctly.
- Iteration 100: Predicts taken, but branch is not taken. Mispredicts. Counter decrements to 10 (Weakly Taken).
- Next loop iteration 1: Predicts taken (from 10). Correct. Counter increments to 11.
- Iterations 2–99: Predicts taken correctly.
- Iteration 100: Mispredicts once. Counter decrements to 10.

Total mispredictions per loop: 1 (at exit). Accuracy = 99%.

For a loop with 10 iterations: 1 mispredict per loop. Accuracy = 90%.
For a loop with 2 iterations: 1 mispredict per 2 iterations. Accuracy = 50%.

The 2-bit predictor is significantly better than the 1-bit predictor for loops, especially loops with few iterations.

**BHT organization:**

The BHT is indexed by the lower bits of the branch address (PC). For example, a 1024-entry BHT uses bits 2–11 of the PC (bits 0–1 are always 0 for 4-byte aligned instructions). The BHT entry contains the 2-bit counter.

BHT size trade-offs:
- **Small BHT (256–1024 entries):** Low area, but many branches may map to the same entry (aliasing). Aliasing occurs when two different branches have the same index bits and interfere with each other's predictions.
- **Large BHT (4096–16384 entries):** Higher area, but less aliasing. Better accuracy for large programs with many branches.

**BHT aliasing:**

Aliasing occurs when two different branches map to the same BHT entry. One branch's history corrupts the other's prediction. For example, if branch A is usually taken and branch B is usually not taken, but they map to the same entry, the counter will oscillate and mispredict both branches.

Techniques to reduce aliasing:
- **XOR-based indexing:** XOR the branch address with a global history register to spread out the index distribution.
- **Tagged BHT:** Include a small tag in each BHT entry to verify that the entry belongs to the correct branch.
- **Multiple BHTs:** Use separate BHTs for different branch types.

#### Key concepts
- 1-bit predictor: single bit, flips on misprediction
- 1-bit limitation: two mispredictions per loop
- 2-bit saturating counter: strongly/weakly taken/not taken
- 2-bit predictor improvement: one misprediction per loop exit
- Branch History Table (BHT): indexed by branch address
- BHT size and aliasing
- Aliasing: different branches mapping to same entry
- XOR-based indexing and tagged BHTs to reduce aliasing
- 2-bit predictor as the standard in most processors
- Accuracy calculation for loop branches

#### Hands-on activity
Write a branch predictor simulator in Python. Implement:
1. 1-bit predictor with a 256-entry BHT
2. 2-bit saturating counter predictor with a 256-entry BHT
3. 2-bit predictor with a 4096-entry BHT

Test the predictors on the following traces:
- Trace A: A loop with 1000 iterations (T, T, T, ..., T, N)
- Trace B: A loop with 10 iterations, repeated 100 times
- Trace C: An if-else branch with 70% taken (random pattern)
- Trace D: Two alternating branches (A: T, B: N, A: T, B: N, ...)

For each trace, calculate the prediction accuracy for each predictor. Show how aliasing affects the 256-entry BHT for Trace D (both branches may map to the same entry). Plot the accuracy vs. BHT size for each trace. Discuss the conditions under which the 2-bit predictor is significantly better than the 1-bit predictor.

#### Assessment idea
Ask: "A loop executes 1000 times. The loop condition is a backward branch that is taken 999 times and not taken once (at the end). What is the accuracy of a 1-bit predictor and a 2-bit predictor for this branch?" Answer: The 1-bit predictor will mispredict twice: once when the loop exits (predicting taken, actual not taken, flips to not taken), and once on the next execution of the loop (predicting not taken, actual taken, flips to taken). So for 1000 iterations, it mispredicts 2 out of 1000 = 99.8% accuracy. The 2-bit predictor will settle in the "Strongly Taken" state after a few iterations. It mispredicts only once when the loop exits (predicting taken, actual not taken, moves to "Weakly Taken"). On the next loop execution, it predicts taken (from "Weakly Taken") and is correct, moving back to "Strongly Taken." So for 1000 iterations, it mispredicts 1 out of 1000 = 99.9% accuracy. This demonstrates why the 2-bit predictor is standard. Then ask: "Why does BHT aliasing reduce prediction accuracy, and what technique reduces aliasing without increasing BHT size?" Answer: BHT aliasing occurs when two different branches map to the same BHT entry. One branch may be usually taken while the other is usually not taken. They interfere with each other: the counter is incremented by one branch and decremented by the other, causing both to mispredict. Aliasing is particularly bad for large programs with many branches. Techniques to reduce aliasing without increasing BHT size include: (1) XOR-based indexing — XOR the branch PC with a global history register to randomize the index, spreading out branches more evenly; (2) tagged BHTs — store a small tag (e.g., 4–8 bits) with each BHT entry to verify that the entry belongs to the current branch, if the tag doesn't match, the entry is treated as uninitialized; (3) using multiple hash functions — some processors use multiple BHTs with different indexing functions and select the best prediction. These techniques improve accuracy without requiring a larger BHT.

#### AI generation note
Create a 10-minute animated lesson. Show the 1-bit predictor as a light switch that flips every time it is wrong. Show the 2-bit predictor as a dimmer switch with four settings that needs two wrong guesses to flip. Show the BHT as a panel of switches indexed by branch address. Show aliasing as two different branches controlling the same switch. Show XOR-based indexing as a randomizer that spreads branches across different switches. Show a loop as a train that goes around a track many times. Show the 1-bit predictor mispredicting at the exit and at the next entry. Show the 2-bit predictor only mispredicting at the exit. Show the accuracy as a percentage that approaches 100% for the 2-bit predictor. End with a reflection: "What would be the accuracy of a 3-bit predictor compared to a 2-bit predictor?"

---

### Chapter 9.4 — Correlation-Based and Tournament Predictors

#### Learning objectives
- Explain how correlation-based predictors use global branch history to improve accuracy.
- Implement a gshare predictor and analyze its performance on correlated branches.
- Describe tournament predictors that combine local and global predictors.
- Understand the role of the branch target buffer (BTB) and return address stack (RAS).

#### Detailed lesson content

The 2-bit predictor treats each branch independently. However, branches are often correlated with each other. Correlation-based predictors use the history of recent branches to predict the current branch, achieving higher accuracy.

**Global branch history:**

A global branch history register (GHR) records the outcomes of the last N branches. For example, a 8-bit GHR might contain: 10110101 (1 = taken, 0 = not taken). This history captures the context in which the current branch is executed.

**Correlation-based predictors:**

1. **Gshare predictor:** The GHR is XORed with the branch address to index the prediction table. This combines global history with branch-specific information. The gshare predictor is used in Intel Pentium 4 and later processors.
   ```
   Index = (PC XOR GHR) mod TableSize
   ```
   The prediction table contains 2-bit saturating counters. The gshare predictor captures correlations between branches because the GHR contains the outcomes of previous branches.

2. **PAg predictor:** Uses a per-branch history table (PHT) and a global pattern table. Each branch has its own history register, and the global table stores predictions for each history pattern. This captures branch-specific patterns as well as global correlations.

3. **GAg predictor:** Uses a global history register and a global pattern table. All branches share the same history and pattern table. This captures global correlations but may suffer from aliasing.

**Tournament predictors:**

A tournament predictor combines multiple predictors (e.g., a local predictor and a global predictor) and selects the best one for each branch. It uses a **meta-predictor** (also called a selector) to choose which predictor to use.

For example, a tournament predictor might combine:
- **Local predictor:** A 2-bit predictor indexed by the branch address. Good for branches with stable local behavior.
- **Global predictor:** A gshare predictor. Good for branches that are correlated with other branches.
- **Meta-predictor:** A 2-bit counter that tracks which predictor was more accurate for each branch in the past.

The tournament predictor achieves higher accuracy than either predictor alone because it adapts to the branch's behavior.

Tournament predictors are used in modern processors (e.g., Intel Core, AMD Zen). They can achieve 95–98% accuracy on typical workloads.

**Branch Target Buffer (BTB):**

Predicting the direction of a branch is only half the problem. The processor also needs to know the **target address** of a taken branch. For PC-relative branches, the target is computed by adding an offset to the PC. For indirect branches (function pointers, switch statements, virtual function calls), the target is stored in a register and is unpredictable.

The **Branch Target Buffer (BTB)** is a cache that stores the target addresses of recently taken branches. When a branch is fetched, the BTB is checked. If the branch is in the BTB, the target address is known immediately, and fetching can begin speculatively. If not, the target must be computed (for PC-relative branches) or loaded from a register (for indirect branches), which causes a delay.

BTB organization:
- **Index:** The lower bits of the PC.
- **Tag:** The upper bits of the PC.
- **Data:** The target address and a prediction bit (taken/not taken).
- **Size:** Typically 512–4096 entries.

**Return Address Stack (RAS):**

Returns from function calls are highly predictable because they usually return to the caller. The RAS is a small stack (typically 8–32 entries) that predicts return addresses. When a call instruction is executed, the return address is pushed onto the RAS. When a return instruction is executed, the predicted return address is popped from the RAS. This provides near-perfect prediction for nested function calls.

The RAS is limited by its size. For deeply nested calls (e.g., recursive functions with depth > 32), the RAS overflows and mispredicts. Some processors use a circular RAS or a larger RAS to handle deeper nesting.

#### Key concepts
- Global branch history register (GHR)
- Correlation-based predictors: gshare, PAg, GAg
- Gshare index: PC XOR GHR
- Tournament predictor: combining local and global predictors
- Meta-predictor (selector) for choosing the best predictor
- Branch Target Buffer (BTB): cache of branch targets
- Indirect branch prediction and BTB limitations
- Return Address Stack (RAS): predicting function returns
- RAS overflow and handling
- Modern predictor accuracy: 95–98% with tournament predictors

#### Hands-on activity
Extend the branch predictor simulator from Chapter 9.3 to implement:
1. A gshare predictor with an 8-bit global history register and a 256-entry prediction table.
2. A tournament predictor with a local 2-bit predictor (256 entries), a gshare predictor (256 entries), and a meta-predictor (256 entries).
3. A BTB with 16 entries.

Test the predictors on traces with correlated branches. For example:
```
if (a == 2)       # Branch 1
    a = 0;
if (b == 2)       # Branch 2
    b = 0;
if (a == b)       # Branch 3: highly correlated with Branches 1 and 2
```

Generate a trace of branch outcomes for different values of a and b. Show that the gshare predictor achieves higher accuracy than the 2-bit predictor for Branch 3 because it uses the global history. Show that the tournament predictor adapts to use the best predictor for each branch. Calculate the accuracy for each predictor and compare.

#### Assessment idea
Ask: "Why does a gshare predictor perform better than a simple 2-bit predictor for correlated branches?" Answer: The gshare predictor uses the global branch history (the outcomes of recent branches) to index the prediction table. When branches are correlated (the outcome of one branch depends on the outcomes of previous branches), the global history provides context that helps distinguish different execution patterns. For example, Branch B might be taken 90% of the time after Branch A is taken, but only 30% of the time after Branch A is not taken. A simple 2-bit predictor would see an average of 60% taken and predict accordingly. The gshare predictor uses the history to index different table entries for the two cases, achieving higher accuracy for each pattern. The XOR combination of PC and GHR ensures that different branches with the same history still use different table entries, reducing aliasing. Then ask: "Why does a tournament predictor combine a local predictor and a global predictor rather than using just one complex predictor?" Answer: Different branches have different predictability characteristics. Some branches are best predicted by their own local history (e.g., loops with fixed iteration counts). Other branches are best predicted by global history (e.g., branches that are correlated with other branches). A single predictor cannot be optimal for all branch types. A tournament predictor uses both a local and a global predictor and selects the best one for each branch based on past performance. The meta-predictor learns which predictor is more accurate for each branch and uses that predictor. This adaptive approach achieves higher overall accuracy than any single predictor. The cost is additional hardware (two predictors + meta-predictor), but the accuracy improvement justifies the cost for high-performance processors.

#### AI generation note
Create a 10-minute animated lesson. Show correlation-based prediction as a detective who considers the context of previous cases. Show the global history register as a notebook of recent cases. Show gshare as a detective who uses the notebook and the case number to look up a prediction. Show a tournament predictor as two detectives (one local expert, one global expert) with a manager who chooses the best one for each case. Show the BTB as a GPS that knows the destination before the driver decides to turn. Show the RAS as a breadcrumb trail for function returns. Show a correlated branch as a case where the outcome depends on previous cases. Show the accuracy improvement as a scoreboard. End with a reflection: "What would be the ultimate branch predictor?"

---

### Chapter 9.5 — Advanced Branch Prediction and Indirect Branches

#### Learning objectives
- Describe advanced branch predictors: TAGE, perceptron predictors, and neural network predictors.
- Understand the challenges of indirect branch prediction and the techniques used.
- Analyze the return address stack (RAS) and its role in predicting function returns.
- Evaluate the performance of different branch predictors on modern workloads.

#### Detailed lesson content

Branch prediction has evolved significantly since the 2-bit predictor. Modern processors use highly sophisticated predictors that achieve 98%+ accuracy on many workloads.

**TAGE predictor (TAgged GEometric history length):**

TAGE is one of the most accurate branch predictors, used in Intel and AMD processors. It uses multiple prediction tables, each indexed by a different length of global history. The idea is that different branches have different "history lengths" that are relevant for prediction.

- **Base predictor:** A simple 2-bit predictor that provides a default prediction.
- **Tagged tables:** Multiple tables (e.g., 8–12 tables) indexed by the branch PC XORed with a hash of the global history. Each table uses a different history length (geometrically increasing: 4, 8, 16, 32, 64, 128, ...).
- **Tag matching:** Each table entry has a tag. When making a prediction, all tables are checked. The table with the longest matching history that agrees with the base predictor provides the prediction.
- **Useful counter:** Each entry tracks whether it was useful. Entries that are not useful are replaced.

TAGE achieves very high accuracy because it adapts to the optimal history length for each branch. Some branches need only 2 bits of history, while others need 128 bits.

**Perceptron predictors:**

Perceptron predictors use a simple neural network (a perceptron) to predict branches. Each branch has a perceptron (a vector of weights). The prediction is a weighted sum of the global history bits. If the sum is positive, predict taken; if negative, predict not taken.

Perceptron predictors can capture complex correlations between branches and achieve higher accuracy than table-based predictors for some workloads. However, they require more computation (dot product) and storage (weight vectors).

**Neural network predictors:**

Research has explored more complex neural network predictors (e.g., multi-layer perceptrons, LSTM networks). These can capture very complex patterns but are too expensive for hardware implementation. They remain an active research area.

**Indirect branch prediction:**

Indirect branches (function pointers, virtual function calls, switch statements) are particularly challenging because the target can change. The BTB can only predict one target per branch, which is insufficient for indirect branches with multiple targets.

Techniques for indirect branch prediction:
1. **Target cache:** A cache that stores multiple targets per indirect branch. The target is selected based on the branch history or the path history.
2. **Path history:** The predictor uses the sequence of recent branch targets to predict the next target. This captures the call context.
3. **Virtual call speculation:** For object-oriented programs, the predictor learns the common type of the object and speculates on the corresponding method.

**Return Address Stack (RAS) details:**

The RAS is a stack of predicted return addresses. It is separate from the BTB because returns are highly predictable but not captured well by the BTB.

- **Push:** When a call instruction is executed, the return address is pushed onto the RAS.
- **Pop:** When a return instruction is executed, the top of the RAS is popped and used as the predicted target.
- **Overflow:** If the RAS overflows (too many nested calls), the oldest entry is discarded.
- **Underflow:** If the RAS underflows (more returns than calls), the prediction falls back to the BTB.
- **Speculative RAS:** The RAS must be updated speculatively (when a call is predicted) and recovered on misprediction. This requires checkpointing the RAS on branches.

Modern processors have RAS sizes of 16–32 entries. Some have a larger "shadow RAS" for deeper call stacks.

**Predictor performance on modern workloads:**

| Predictor | Typical Accuracy | Hardware Cost |
|-----------|-----------------|---------------|
| 2-bit BHT | 85–90% | Low |
| Gshare | 90–93% | Medium |
| Tournament | 93–95% | Medium |
| TAGE | 96–98% | High |
| Perceptron | 95–97% | High |
| Ideal | 99%+ | Impossible |

No predictor achieves 100% accuracy because some branches are inherently unpredictable (data-dependent with random inputs). The goal is to minimize the misprediction rate for the predictable branches.

#### Key concepts
- TAGE predictor: multiple tagged tables with geometric history lengths
- Base predictor and tagged tables in TAGE
- Tag matching and useful counters
- Perceptron predictor: weighted sum of history bits
- Neural network predictors: research-stage
- Indirect branch prediction: target cache, path history
- Return Address Stack (RAS): push on call, pop on return
- RAS overflow, underflow, speculative updates, and checkpointing
- Predictor accuracy comparison
- Limits of branch prediction accuracy

#### Hands-on activity
Research the branch predictor used in a recent processor (e.g., Intel Core i9-13900K, AMD Ryzen 9 7950X, Apple M3). Find information about the predictor type (TAGE, perceptron, hybrid), the size of the prediction tables, the history length, and the BTB size. Write a one-page summary comparing the predictors of three different processors. Discuss the design trade-offs: accuracy vs. area vs. power. Then, if you have access to a processor with `perf`, measure the branch misprediction rate for a set of benchmarks and compare with the theoretical accuracy of the predictor.

#### Assessment idea
Ask: "Why does TAGE use multiple tables with geometrically increasing history lengths rather than a single table with the maximum history length?" Answer: Because different branches have different optimal history lengths. A simple loop branch might only need 2–4 bits of history to predict correctly. A correlated branch might need 64–128 bits of history. A single table with the maximum history length would require enormous storage and would suffer from aliasing for branches that need short history. TAGE uses multiple tables with different history lengths. Each table is indexed by the branch PC and a hash of the global history of that length. For a given branch, the table with the longest matching history that provides a useful prediction is used. This allows TAGE to adapt to the optimal history length for each branch without wasting storage on unnecessary history. The geometric increase (e.g., 4, 8, 16, 32, 64, 128) provides a good coverage of history lengths with a manageable number of tables. Then ask: "Why is the Return Address Stack (RAS) better than the BTB for predicting function returns?" Answer: The BTB stores one target per branch address. For a return instruction, the target depends on where the function was called from, not on the return instruction itself. A function may be called from many different places, so the BTB cannot predict the correct return address. The RAS solves this by pushing the return address onto a stack when a call is executed and popping it when a return is executed. This naturally matches the LIFO behavior of function calls and returns. The RAS provides near-perfect prediction for returns (98–99% accuracy) as long as the stack does not overflow. The BTB would mispredict almost every return if used alone. This is why all modern processors have a dedicated RAS for return prediction.

#### AI generation note
Create a 10-minute animated lesson. Show TAGE as a library with multiple shelves, each containing a different length of history. Show a branch as a reader who finds the best shelf for their needs. Show perceptron prediction as a weighted voting system where each past event has a different weight. Show neural network prediction as a complex brain that learns patterns. Show indirect branches as a traveler who can go to multiple destinations. Show the target cache as a travel agent with multiple suggestions. Show the RAS as a stack of return tickets that are used in order. Show the RAS overflow as a stack of tickets that gets too tall and drops some. Show the accuracy comparison as a leaderboard. End with a reflection: "What is the fundamental limit of branch prediction accuracy?"

---

### Chapter 9.6 — VLIW Philosophy and Design

#### Learning objectives
- Explain the VLIW philosophy: moving instruction scheduling from hardware to the compiler.
- Describe the structure of a VLIW instruction bundle and how it is executed.
- Understand the challenges of VLIW: code bloat, fill slots, and binary compatibility.
- Compare VLIW with superscalar out-of-order processors in terms of complexity, power, and performance.

#### Detailed lesson content

Superscalar out-of-order processors are powerful but expensive. They require complex hardware for dynamic scheduling, register renaming, speculation, and memory disambiguation. This hardware consumes area, power, and design effort. An alternative approach is to move the scheduling complexity from hardware to software: let the compiler determine which instructions can execute in parallel, and package them into a single **Very Long Instruction Word (VLIW)**. The processor simply executes the operations in the VLIW bundle simultaneously, without dynamic scheduling.

**VLIW philosophy:**

In a VLIW processor, the instruction word is very wide (e.g., 256 bits or more) and contains multiple independent operations. A typical VLIW instruction might contain:
- 2 integer ALU operations
- 1 floating-point operation
- 1 memory operation (load or store)
- 1 branch operation

The compiler is responsible for analyzing the program's data dependencies, identifying independent operations, and packing them into the VLIW bundle. The hardware does not need to check for dependencies at runtime because the compiler has already guaranteed that all operations in a bundle are independent.

**VLIW execution:**

The VLIW processor fetches one instruction bundle per cycle. All operations in the bundle are dispatched to their respective functional units and execute simultaneously. The results are written back to the register file or memory. There is no dynamic scheduling, no register renaming, no speculation, and no reorder buffer. The hardware is simple, fast, and power-efficient.

**Example VLIW instruction bundle:**
```
Bundle 1: ADD R1, R2, R3 | MUL F4, F5, F6 | LW R7, 0(R8) | NOP | NOP
Bundle 2: SUB R9, R1, R10 | NOP | NOP | NOP | BEQ R1, R2, target
```

Each bundle contains 5 slots. The compiler fills the slots with operations. If there are not enough independent operations to fill all slots, the compiler inserts **NOPs** (no-operations). NOPs waste instruction space and reduce code density. This is one of the main drawbacks of VLIW.

**Advantages of VLIW:**
1. **Simplicity:** The hardware is much simpler than an out-of-order superscalar processor. No reservation stations, no ROB, no register renaming, no dynamic scheduling logic.
2. **Power efficiency:** Simple hardware uses less power. This is why VLIW processors are popular in embedded systems (DSPs, media processors) where power is critical.
3. **Predictable performance:** Because the compiler controls the schedule, performance is predictable and reproducible. This is important for real-time systems.
4. **Lower cost:** Fewer transistors mean smaller chips and lower manufacturing cost.

**Disadvantages of VLIW:**
1. **Code bloat:** The compiler must insert NOPs when there are not enough independent operations to fill the bundle. This increases code size. For example, if the processor has 5 slots but the average bundle only has 2 useful operations, 60% of the instruction space is wasted.
2. **Compile-time scheduling:** The compiler must know the exact latency of every operation and the exact number of functional units. If the processor generation changes (e.g., a new processor with different latencies), the compiled code must be recompiled. This breaks binary compatibility.
3. **Branch handling:** Branches are difficult because the compiler must schedule operations from both the taken and not-taken paths. If the branch is unpredictable, the compiler cannot schedule effectively.
4. **Memory latency:** The compiler cannot predict cache misses or memory latency. Static scheduling assumes fixed operation latencies, but memory access latency is variable. This makes it hard to schedule load-use sequences efficiently.
5. **Lock-in:** Code compiled for a 5-slot VLIW processor cannot run on a 3-slot VLIW processor because the bundle format is different. This is unlike superscalar processors, where the same binary runs on different microarchitectures.

**Code bloat and fill slots:**

One of the biggest challenges in VLIW is the **fill slot** problem. When the compiler cannot find enough independent operations to fill all slots in a bundle, it must insert NOPs. The number of NOPs depends on the available instruction-level parallelism (ILP) in the program. Scientific code with independent array operations has high ILP and fills bundles well. Branch-heavy code with unpredictable control flow has low ILP and results in many NOPs.

Techniques to reduce code bloat:
- **Software pipelining:** Overlap the execution of multiple loop iterations. The operations from different iterations are scheduled in the same bundle, increasing ILP.
- **Loop unrolling:** Duplicate the loop body to create more independent operations for scheduling.
- **Predication:** Convert branches into conditional operations. This eliminates branch mispredictions and allows operations from both paths to be scheduled together.
- **Variable-length bundles:** Some VLIW processors (like Intel IA-64) use variable-length bundles that encode only the non-NOP operations, reducing code size.

**Comparison: VLIW vs. Superscalar OoO:**

| Aspect | VLIW | Superscalar OoO |
|--------|------|-----------------|
| Scheduling | Compiler | Hardware |
| Hardware complexity | Low | High |
| Power consumption | Low | High |
| Code density | Low (NOPs) | High |
| Binary compatibility | No | Yes |
| Performance on predictable code | High | High |
| Performance on unpredictable code | Low | High |
| Design cost | Low | High |
| Examples | TI C6x DSP, Intel IA-64 | Intel Core, AMD Zen, ARM Cortex-A7x |

#### Key concepts
- VLIW philosophy: compiler-scheduled parallelism
- VLIW instruction bundle: multiple operations per word
- NOPs and fill slots: wasted instruction space
- Advantages: simplicity, power efficiency, predictable performance, low cost
- Disadvantages: code bloat, compile-time scheduling, branch handling, memory latency, lock-in
- Software pipelining and loop unrolling for ILP extraction
- Predication for eliminating branches
- Variable-length bundles for code density
- Comparison: VLIW vs. superscalar OoO

#### Hands-on activity
Simulate a simple VLIW processor with 4 slots: ALU, ALU, Memory, Branch. Write a compiler (in Python) that schedules the following loop into VLIW bundles. The loop computes the dot product of two arrays:
```c
for (i = 0; i < N; i++) {
    sum += a[i] * b[i];
}
```

The assembly-level operations (for a RISC-like ISA) are:
```
LOOP: LW R1, 0(Ra)       # Load a[i]
      LW R2, 0(Rb)       # Load b[i]
      MUL R3, R1, R2     # Multiply
      ADD Rsum, Rsum, R3 # Accumulate
      ADDI Ra, Ra, 4     # Increment pointer a
      ADDI Rb, Rb, 4     # Increment pointer b
      ADDI Ri, Ri, 1     # Increment counter
      BLT Ri, RN, LOOP   # Branch if i < N
```

Assume the processor has: 2 ALU units (integer add), 1 multiplier unit (latency 2 cycles), 1 load/store unit (latency 2 cycles), and 1 branch unit. The compiler must schedule operations into bundles, respecting dependencies and functional unit availability. Show the scheduled bundles with NOPs. Calculate the cycles per iteration. Then apply software pipelining to overlap iterations and show the improved schedule. Calculate the speedup.

#### Assessment idea
Ask: "A VLIW processor has 8 slots per bundle, but the compiler can only fill 3 slots on average for a given workload. What is the utilization, and what techniques can the compiler use to improve it?" Answer: The utilization is 3/8 = 37.5%. The remaining 62.5% of the instruction space is wasted on NOPs. Techniques to improve utilization include: (1) software pipelining — overlapping loop iterations to fill more slots with independent operations from different iterations; (2) loop unrolling — duplicating the loop body to create more independent operations; (3) predication — eliminating branches by converting them into conditional operations, allowing operations from both paths to be scheduled; (4) global instruction scheduling — moving instructions across basic block boundaries to fill slots; (5) if-conversion — converting control dependencies into data dependencies using conditional moves. Then ask: "Why did the Intel Itanium (IA-64) VLIW processor fail to compete with x86 out-of-order processors despite its simpler hardware?" Answer: The Itanium suffered from several problems: (1) code bloat — the EPIC bundles were large, and compilers could not consistently fill them with useful operations; (2) poor performance on unpredictable code — branch-heavy code and pointer-chasing code had low ILP, resulting in many NOPs; (3) memory latency — static scheduling cannot handle variable cache miss latency, so load-use sequences were conservatively scheduled; (4) compiler dependency — performance depended entirely on the compiler's ability to extract ILP, and compiler technology was not mature enough to extract enough ILP; (5) binary compatibility — code compiled for Itanium could not run on x86, fragmenting the software ecosystem. Meanwhile, x86 out-of-order processors improved dynamically and maintained backward compatibility with the vast x86 software base.

#### AI generation note
Create a 10-minute animated lesson. Show a VLIW processor as a simple assembly line where each station has a fixed task. Show the compiler as a scheduler that assigns workers to stations before the shift starts. Show a superscalar OoO processor as a dynamic factory where workers choose their own tasks based on availability. Show the VLIW bundle as a long conveyor belt with some stations empty (NOPs). Show software pipelining as overlapping shifts so that workers from different shifts share the same belt. Show predication as a switch that allows both paths to be processed simultaneously. Show the Itanium as a factory that was designed for efficiency but couldn't keep the workers busy. Show the x86 processor as a robust, adaptable factory that kept improving. Include the compiler scheduling simulation. End with a reflection: "When would you choose a VLIW processor over a superscalar processor?"

---

### Chapter 9.7 — Compiler Scheduling and Software Pipelining

#### Learning objectives
- Explain how the compiler schedules instructions for VLIW and superscalar processors.
- Implement software pipelining to overlap loop iterations.
- Understand loop unrolling and its impact on scheduling and register pressure.
- Describe the trade-offs between compiler optimization and code size.

#### Detailed lesson content

Compiler scheduling is the process of reordering instructions to maximize parallelism and minimize stalls. For VLIW processors, scheduling is essential because the hardware cannot reorder instructions at runtime. For superscalar processors, scheduling improves performance by reducing the burden on the hardware scheduler and minimizing stalls.

**Instruction scheduling for VLIW:**

The compiler builds a **dependency graph** (also called a dataflow graph) for each basic block. Nodes are instructions, and edges are dependencies (RAW, WAR, WAW). The scheduler then assigns instructions to bundles, respecting:
- **Data dependencies:** An instruction cannot be scheduled before its operands are ready.
- **Resource constraints:** Each functional unit can execute only one instruction per cycle.
- **Bundle width:** The number of slots per bundle.

The goal is to minimize the total number of bundles (cycles) while respecting dependencies and resource constraints. This is an NP-hard problem, so compilers use heuristics (e.g., list scheduling, trace scheduling).

**Software pipelining:**

Software pipelining is a technique for scheduling loops where operations from different iterations are overlapped. The loop is divided into stages, and each stage is scheduled in a separate bundle. This increases ILP by filling slots with independent operations from different iterations.

Example: A loop with 3 operations per iteration:
```
Iteration i: A[i] → B[i] → C[i]
Iteration i+1: A[i+1] → B[i+1] → C[i+1]
Iteration i+2: A[i+2] → B[i+2] → C[i+2]
```

Without software pipelining:
```
Cycle 1: A[i]
Cycle 2: B[i]
Cycle 3: C[i]
Cycle 4: A[i+1]
Cycle 5: B[i+1]
...
```

With software pipelining (3 stages):
```
Cycle 1: A[i]
Cycle 2: A[i+1], B[i]
Cycle 3: A[i+2], B[i+1], C[i]
Cycle 4: A[i+3], B[i+2], C[i+1]
...
```

After the pipeline fills, each cycle executes one operation from three different iterations. The throughput is 1 iteration per cycle, compared to 3 cycles per iteration without pipelining.

**Prologue and epilogue:**

Software pipelining requires a **prologue** to fill the pipeline and an **epilogue** to drain it. For a loop with N iterations and M stages, the prologue is M-1 cycles and the epilogue is M-1 cycles. The steady state is N - M + 1 cycles.

**Loop unrolling:**

Loop unrolling duplicates the loop body to create more instructions for scheduling. For example, unrolling a loop by 4:
```
for (i = 0; i < N; i += 4) {
    sum += a[i] * b[i];
    sum += a[i+1] * b[i+1];
    sum += a[i+2] * b[i+2];
    sum += a[i+3] * b[i+3];
}
```

Benefits:
- More independent instructions for scheduling.
- Reduced loop overhead (fewer branch instructions, fewer counter increments).
- Better utilization of functional units.

Costs:
- Increased code size.
- Increased register pressure (more temporary variables).
- May not be beneficial for small loops or loops with data dependencies.

**Register pressure:**

Scheduling and unrolling can increase the number of live variables, which increases register pressure. If the register file is too small, the compiler must spill variables to memory, which reduces performance. The compiler must balance ILP extraction with register pressure.

**Trade-offs:**
- **Optimization vs. compilation time:** Aggressive scheduling takes longer to compile.
- **Optimization vs. code size:** Unrolling and software pipelining increase code size, which may affect cache performance.
- **Optimization vs. portability:** Code optimized for one processor may not run well on another.

#### Key concepts
- Compiler instruction scheduling: dependency graph, resource constraints
- List scheduling and trace scheduling heuristics
- Software pipelining: overlapping loop iterations in stages
- Prologue and epilogue for software pipelining
- Loop unrolling: duplicating loop body for more ILP
- Benefits of loop unrolling: more instructions, fewer branches
- Costs of loop unrolling: code size, register pressure
- Register pressure and spilling
- Trade-offs: optimization vs. compilation time, code size, portability
- Compiler scheduling for VLIW vs. superscalar

#### Hands-on activity
Write a simple instruction scheduler in Python. The scheduler should:
1. Accept a sequence of instructions with dependencies and latencies.
2. Build a dependency graph.
3. Schedule instructions using list scheduling (prioritize instructions on the critical path).
4. Output the scheduled bundles for a VLIW processor with 4 slots.

Test the scheduler on the dot product loop from Chapter 9.6. Show the scheduled bundles with and without software pipelining. Calculate the cycles per iteration for both cases. Then, show how loop unrolling by 2 affects the schedule. Discuss the trade-offs between software pipelining and loop unrolling.

#### Assessment idea
Ask: "Why does software pipelining require a prologue and epilogue, and how do they affect the total execution time for a loop with few iterations?" Answer: Software pipelining overlaps operations from different iterations. Before the first iteration's operations can be overlapped with the second iteration's operations, the pipeline must be filled. This filling phase is the prologue. Similarly, after the last iteration starts, the pipeline must drain as the final operations complete. This draining phase is the epilogue. For a loop with many iterations, the prologue and epilogue overhead is negligible compared to the steady-state execution. However, for a loop with few iterations (e.g., fewer than the number of stages), the prologue and epilogue overhead can dominate. In some cases, software pipelining may actually increase the total execution time for small loops because the pipeline never reaches steady state. This is why compilers typically only apply software pipelining to loops with sufficient iteration counts. Then ask: "Why does loop unrolling increase register pressure, and how can the compiler mitigate this?" Answer: Loop unrolling duplicates the loop body, creating more temporary variables that are live simultaneously. For example, unrolling a loop by 4 creates 4 copies of the loop index, 4 loads, and 4 multiplications. All of these variables may need to be stored in registers at the same time. If the register file is not large enough, the compiler must spill some variables to memory (store them on the stack and reload them later), which reduces performance. The compiler can mitigate register pressure by: (1) reusing registers for independent values; (2) partially unrolling the loop (e.g., by 2 instead of 8) to balance ILP and register pressure; (3) using register allocation algorithms that minimize spills; (4) scheduling instructions to reduce the live range of temporary variables. The trade-off between unrolling factor and register pressure is a key consideration in compiler optimization.

#### AI generation note
Create a 10-minute animated lesson. Show compiler scheduling as a puzzle where pieces (instructions) must be arranged without violating rules (dependencies). Show the dependency graph as a network of connected nodes. Show list scheduling as a greedy algorithm that places the most constrained pieces first. Show software pipelining as a factory where multiple products are assembled in overlapping stages. Show the prologue as the startup phase where the first products are prepared. Show the epilogue as the shutdown phase where the last products are finished. Show loop unrolling as duplicating the assembly line to process more products at once. Show register pressure as a limited workspace that gets crowded with more products. Show spilling as moving some materials to a storage room. Show the trade-offs as a balance scale. End with a reflection: "How does a compiler decide whether to unroll a loop or software pipeline it?"

---

### Chapter 9.8 — Predication and the IA-64 Case Study

#### Learning objectives
- Explain predication as a technique for eliminating branches and enabling better scheduling.
- Understand the trade-offs between predication and branch prediction.
- Describe the Explicitly Parallel Instruction Computing (EPIC) philosophy of IA-64.
- Analyze the successes and failures of the Intel Itanium processor.

#### Detailed lesson content

One of the most powerful techniques for improving VLIW performance is **predication** — the conversion of control dependencies (branches) into data dependencies (conditional operations). Instead of using a branch instruction to choose between two paths, the processor executes both paths and uses a predicate register to select the correct result. This eliminates branch mispredictions and allows the compiler to schedule operations from both paths in the same bundle.

**Predication:**

In a traditional processor, a branch like `if (a > b) c = d; else c = e;` is implemented as:
```
CMP a, b
BLE else
MOV c, d
JMP end
else: MOV c, e
end:
```

This has a branch, which can be mispredicted, and the operations on the not-taken path are not executed.

In a predicated processor, the same code is:
```
CMP a, b       # Sets predicate P0 (true if a > b)
P0: MOV c, d   # Execute only if P0 is true
!P0: MOV c, e  # Execute only if P0 is false
```

Both moves are executed, but only the one with the correct predicate writes its result. The branch is eliminated. This is called **if-conversion**.

Predication requires the processor to have **predicate registers** (typically 8–64) that control the execution of instructions. Each instruction has a predicate field that specifies which predicate register must be true for the instruction to execute. If the predicate is false, the instruction is converted to a NOP.

**Trade-offs of predication:**
- **Pros:** Eliminates branch mispredictions, enables better scheduling, simplifies control flow, allows software pipelining of loops with conditional code.
- **Cons:** Both paths are executed, wasting resources and power if one path is much longer. Increases register pressure because both paths may need registers. Not all branches can be predicated (e.g., function calls, loops with early exits).

**Speculation in VLIW:**

VLIW processors can also use speculation to improve performance. The compiler schedules operations before they are known to be needed, using **speculative loads** and **speculative operations**. If the speculation is correct, the operation has been executed early. If incorrect, the result is discarded.

However, speculation in VLIW is different from speculation in out-of-order processors. In VLIW, the compiler controls speculation, not the hardware. The compiler must insert **check instructions** to verify that speculative operations were valid. For example, a speculative load might access an invalid address, which would cause an exception. The check instruction verifies the address and handles the exception if it was invalid.

**The Intel IA-64 / Itanium case study:**

Intel IA-64 (also called EPIC — Explicitly Parallel Instruction Computing) was the most ambitious VLIW processor ever designed. It was a joint project between Intel and Hewlett-Packard, launched in 2001 with the Itanium processor.

IA-64 features:
- **128 integer registers** and **128 floating-point registers** (massive register file to support extensive loop unrolling and software pipelining).
- **64 predicate registers** for predication.
- **Bundles of 3 instructions** (128 bits each), with template bits that specify which instructions are independent and which can be executed in parallel.
- **Software pipelining support** in hardware (rotating registers and loop counters).
- **Speculative loads** with check instructions.
- **Variable-latency operations** handled by the compiler using explicit stop bits.

**Why Itanium failed:**

Despite its elegant design, Itanium was a commercial failure. Several reasons contributed:

1. **Compiler dependency:** Itanium's performance depended entirely on the compiler's ability to extract ILP. Compilers were not able to consistently fill bundles or schedule memory operations effectively. The "compiler will solve it" promise was never fulfilled.

2. **Poor x86 compatibility:** Itanium could not run x86 code natively. It used a slow software emulator, which made migration from x86 painful. The software ecosystem never developed for Itanium because developers continued to target x86.

3. **Out-of-order x86 caught up:** While Intel was developing Itanium, AMD and Intel's own x86 teams were making dramatic improvements to out-of-order x86 processors. The Pentium 4, Core 2, and Core i series achieved performance comparable to or better than Itanium without requiring recompilation.

4. **Memory latency:** Static scheduling cannot handle the variable latency of memory accesses. Cache misses are unpredictable, and conservative scheduling severely limited performance on memory-bound workloads.

5. **Branch-heavy code:** Itanium excelled on scientific code with regular loops and predictable access patterns. But on branch-heavy code (operating systems, databases, web servers), the compiler could not find enough ILP to fill the bundles.

The lesson of Itanium is that hardware complexity and compiler complexity are not interchangeable. While VLIW is elegant in theory, the practical challenges of compiler technology, binary compatibility, and workload diversity make it difficult to compete with dynamically scheduled superscalar processors for general-purpose computing.

#### Key concepts
- Predication: converting branches into conditional operations
- Predicate registers and if-conversion
- Pros and cons of predication: no mispredictions vs. wasted execution
- Speculation in VLIW: compiler-controlled speculative loads
- Check instructions for validating speculation
- Intel IA-64 / EPIC architecture: bundles, templates, rotating registers
- Itanium design features: 128 registers, 64 predicates, software pipelining
- Itanium failure reasons: compiler dependency, x86 compatibility, memory latency, branch-heavy code
- EPIC vs. traditional VLIW
- Lessons from Itanium for architecture design

#### Hands-on activity
Implement a predication simulator in Python. The simulator should accept a simple C-like code snippet with an if-else statement and convert it to predicated assembly. For example:
```c
if (x > 0) {
    y = a + b;
} else {
    y = a - b;
}
```

Show the traditional branch-based assembly and the predicated assembly. Simulate both versions on a processor model with: (1) perfect branch prediction (no mispredictions), (2) 80% branch prediction accuracy. Show that the predicated version has no branch penalty but always executes both paths. Calculate the total cycles for each version under both conditions. Then, show a case where predication is worse: a deeply nested if-else where the false path is much longer. Calculate the wasted cycles from executing the false path. Discuss the conditions under which predication is beneficial vs. harmful.

#### Assessment idea
Ask: "Predication eliminates branch mispredictions but may execute instructions from both paths of a branch. Under what conditions is predication beneficial, and under what conditions is it harmful?" Answer: Predication is beneficial when: (1) the branch is unpredictable (high misprediction rate), (2) both paths are short (so the wasted execution is minimal), (3) the branch is inside a loop that is executed many times, (4) the operations on both paths use different functional units (so they don't compete for resources). Predication is harmful when: (1) one path is much longer than the other (wasting many cycles on the false path), (2) the operations on both paths compete for the same functional units, (3) the false path has side effects (like stores) that must be suppressed, (4) the branch is highly predictable (so branch prediction is already effective). Then ask: "What is the fundamental difference between speculation in a VLIW processor (like Itanium) and speculation in an out-of-order superscalar processor?" Answer: In a VLIW processor, speculation is controlled by the compiler. The compiler decides which operations to schedule speculatively and inserts check instructions to validate the speculation. If the speculation is wrong, the check instruction handles the recovery. In an out-of-order processor, speculation is controlled by hardware. The hardware predicts branches and memory dependencies and automatically rolls back if the prediction is wrong. The VLIW approach offloads complexity to the compiler but requires more intelligent compilers. The OoO approach handles speculation dynamically but requires complex hardware.

#### AI generation note
Create a 10-minute animated lesson. Show a branch as a fork in the road. Show predication as both roads being traveled simultaneously, with a filter at the end that keeps only the correct result. Show branch prediction as a GPS that guesses the route. Show the Itanium as a futuristic factory that was designed for peak efficiency but never reached full capacity because the scheduling software was not ready. Show the x86 processor as a robust, adaptable factory that kept improving. Show the IA-64 bundle as a three-car train with template bits specifying which cars can run side by side. Show rotating registers as a carousel that feeds data into the pipeline. Show the check instruction as a safety inspector that verifies speculative work. Include the predication simulation. End with a reflection: "What would it take for a VLIW architecture to succeed in today's market?"

---

## Module 10: Parallel Architectures

> **Goal:** Explore the parallel architectures that enable modern processors to execute multiple data elements and threads simultaneously.

---

### Chapter 10.1 — SIMD and Vector Processors

#### Learning objectives
- Explain the SIMD execution model and how it differs from MIMD.
- Describe vector processor architectures and vector instruction sets.
- Understand the trade-offs between SIMD width, vector length, and control flow divergence.
- Compare SIMD implementations: x86 SSE/AVX, ARM NEON, and dedicated vector processors (Cray-style).

#### Detailed lesson content

Most of the techniques we have discussed so far (pipelining, superscalar, out-of-order) exploit **instruction-level parallelism (ILP)** — executing multiple independent instructions simultaneously. However, ILP is limited. Typical programs have only 2–4 independent instructions per cycle that can be executed in parallel. To achieve higher performance, architects turned to **data-level parallelism (DLP)** — executing the same operation on multiple data elements simultaneously. This is the domain of **SIMD** (Single Instruction, Multiple Data) and **vector processors**.

**SIMD vs. MIMD:**
- **SIMD:** One instruction controls multiple processing elements that operate on different data elements. All elements execute the same instruction in lockstep. Example: Adding two arrays element by element.
- **MIMD:** Multiple independent processors execute different instructions on different data. Example: A multicore processor where each core runs a different thread.
- **SIMD is more efficient than MIMD for regular, data-parallel workloads** because it shares the instruction fetch and decode logic across all data elements. The control overhead is much lower.

**Vector processors:**

Vector processors are the original SIMD architectures, pioneered by Cray in the 1970s (Cray-1). A vector instruction operates on entire vectors (arrays) of data in a single instruction. For example:
```
VADD V1, V2, V3   # Add vectors V2 and V3, store in V1
```

This instruction adds N elements (e.g., 64 elements) in a single instruction. The processor has a **vector register file** (large registers that hold vectors) and **vector functional units** (pipelined ALUs that process one vector element per cycle). A vector instruction initiates the pipeline, and the vector unit processes all elements over N cycles. The processor can overlap vector operations with scalar operations.

Vector processor advantages:
- **Compact code:** One vector instruction replaces a loop of scalar instructions.
- **No loop overhead:** The loop counter, branch, and increment are eliminated.
- **Predictable memory access:** Vector loads and stores access memory in regular strides, enabling efficient memory access patterns and prefetching.
- **High memory bandwidth:** Vector processors typically have high-bandwidth memory systems (e.g., Cray's interleaved memory banks).

**Modern SIMD extensions:**

Modern processors implement SIMD through **SIMD extensions** to the scalar ISA, rather than dedicated vector processors. These extensions add SIMD registers and instructions to the existing processor:

- **x86 SSE (Streaming SIMD Extensions):** 128-bit registers (XMM) that can hold 4 floats or 2 doubles. Introduced with the Pentium III in 1999.
- **x86 AVX (Advanced Vector Extensions):** 256-bit registers (YMM) that can hold 8 floats or 4 doubles. Introduced with Sandy Bridge in 2011.
- **x86 AVX-512:** 512-bit registers (ZMM) that can hold 16 floats or 8 doubles. Introduced with Xeon Skylake-X and Ice Lake.
- **ARM NEON:** 128-bit SIMD architecture used in virtually all ARM processors. Supports 8×16-bit, 4×32-bit, or 2×64-bit operations.
- **ARM SVE (Scalable Vector Extension):** Variable-length vectors (128–2048 bits) that scale with the hardware. Used in the Fujitsu A64FX (Fugaku supercomputer).
- **RISC-V V (Vector Extension):** Standard vector extension for RISC-V with variable vector lengths.

**SIMD challenges:**

1. **Control flow divergence:** SIMD requires all elements to execute the same instruction. If an if-else statement has different behavior for different elements (e.g., `if (a[i] > 0) b[i] = c[i]; else b[i] = d[i];`), the SIMD processor must execute both paths and mask the results. This is called **predication in SIMD** or **masking**. Elements that are not active are masked off. This wastes execution resources for elements that take the else path.

2. **Data alignment:** SIMD loads and stores typically require data to be aligned to the SIMD register width (e.g., 16-byte alignment for 128-bit SSE). Unaligned accesses require multiple operations or special hardware support.

3. **Memory bandwidth:** SIMD increases the compute-to-memory ratio. If the memory bandwidth is not sufficient, the processor stalls waiting for data. This is the **memory wall** problem for SIMD.

4. **Programming complexity:** Writing efficient SIMD code requires manual vectorization or compiler auto-vectorization. Not all loops can be vectorized, and manual vectorization is error-prone and architecture-specific.

**Vector length and strip mining:**

Vector processors use **strip mining** to handle arrays longer than the vector length. The array is divided into strips (chunks) of the vector length, and each strip is processed with a vector instruction. The remaining elements (if the array length is not a multiple of the vector length) are processed with a scalar loop or a masked vector instruction.

**SIMD speedup:**

The theoretical speedup of SIMD is the SIMD width (number of elements processed per instruction). For AVX-512 with 16 floats, the theoretical speedup is 16×. However, real speedup is lower due to: memory bandwidth limitations, alignment overhead, control flow divergence, and non-vectorizable code.

#### Key concepts
- Data-level parallelism (DLP) vs. instruction-level parallelism (ILP)
- SIMD: single instruction, multiple data elements
- MIMD: multiple independent processors
- Vector processors: Cray-style, vector registers, vector functional units
- SIMD extensions: x86 SSE/AVX/AVX-512, ARM NEON/SVE, RISC-V V
- Vector length and strip mining
- Control flow divergence and masking in SIMD
- Data alignment requirements
- Memory bandwidth as the bottleneck for SIMD
- Programming complexity and auto-vectorization
- SIMD speedup: theoretical vs. actual

#### Hands-on activity
Write a simple C program that adds two arrays of 1,000,000 floats. Compile it with and without SIMD auto-vectorization:
```bash
gcc -O1 -o add_scalar add.c        # No vectorization
gcc -O3 -mavx2 -o add_simd add.c  # With AVX2 vectorization
```

Measure the execution time for both versions using `time` or a timing function. Calculate the speedup. Then, examine the assembly code (using `objdump -d`) to identify the SIMD instructions (look for `vaddps` or similar). Modify the C code to include an if-else statement inside the loop:
```c
for (i = 0; i < N; i++) {
    if (a[i] > 0)
        c[i] = a[i] + b[i];
    else
        c[i] = a[i] - b[i];
}
```

Compile with vectorization and measure the speedup again. Compare the SIMD speedup with and without the conditional. Discuss how control flow divergence affects SIMD performance. If you don't have access to a compiler with AVX2, use an online compiler or describe the expected results based on the principles discussed.

#### Assessment idea
Ask: "A processor has AVX-512 with 512-bit registers. It processes an array of 1,000,000 single-precision floats. What is the theoretical SIMD speedup, and why might the actual speedup be lower?" Answer: The theoretical speedup is 512 bits / 32 bits = 16×. One AVX-512 instruction can add 16 floats simultaneously. The actual speedup is lower for several reasons: (1) memory bandwidth — the memory system may not be able to supply 16 floats per cycle, causing the SIMD unit to stall; (2) alignment overhead — if the array is not 64-byte aligned, the first and last elements may need scalar processing; (3) loop overhead — the loop must handle the remainder when the array size is not a multiple of 16; (4) control flow divergence — if the loop contains conditionals, some SIMD lanes will be masked off, reducing utilization; (5) Amdahl's Law — if only part of the program is vectorizable, the overall speedup is limited. Real speedup for simple array operations on modern processors is typically 4–8×, not 16×. Then ask: "What is the advantage of ARM SVE's variable vector length over fixed-width SIMD like x86 AVX-512?" Answer: ARM SVE allows the same compiled binary to run on processors with different vector lengths (e.g., 128-bit on a small core, 512-bit on a large core). The vector length is determined at runtime by the hardware. This provides binary portability and scalability. With x86 AVX-512, code compiled for 512-bit registers cannot run on a processor that only supports 256-bit AVX2 without emulation or recompilation. SVE also simplifies strip mining because the hardware handles the loop remainder automatically with predication.

#### AI generation note
Create a 10-minute animated lesson. Show SIMD as an orchestra where one conductor (instruction) leads many musicians (data elements) playing the same note. Show vector processors as a factory assembly line that processes entire rows of products at once. Show control flow divergence as some musicians playing a different song, forcing the orchestra to play both songs and mask the wrong one. Show the memory bandwidth problem as a narrow pipe trying to feed a wide factory. Show x86 AVX-512 as a 16-lane highway and ARM SVE as a highway that can be any width. Show strip mining as cutting a long loaf of bread into slices that fit in the toaster. Show auto-vectorization as a compiler converting a simple loop into a vector operation. Include the C code compilation and timing comparison. End with a reflection: "What types of programs benefit most from SIMD, and what types do not benefit at all?"

---

### Chapter 10.2 — GPU Architecture and SIMT

#### Learning objectives
- Explain the GPU architecture and how it differs from CPU architecture.
- Understand the SIMT (Single Instruction, Multiple Threads) execution model.
- Describe the CUDA/OpenCL programming model: grids, blocks, warps, and threads.
- Analyze the trade-offs between GPU throughput and CPU latency for different workloads.

#### Detailed lesson content

Graphics Processing Units (GPUs) have evolved from specialized graphics accelerators into general-purpose parallel processors that dominate scientific computing, machine learning, and data analytics. Understanding GPU architecture is essential because GPUs are now the primary engines for training deep neural networks, simulating physical systems, and processing large datasets.

**GPU vs. CPU architecture:**

CPUs are designed for **latency-sensitive** tasks: running a single thread as fast as possible. They have large caches, complex branch predictors, out-of-order execution engines, and deep pipelines. CPUs excel at workloads with irregular control flow, complex data structures, and frequent branches.

GPUs are designed for **throughput-sensitive** tasks: running thousands of threads simultaneously. They have many simple cores (e.g., NVIDIA RTX 4090 has 16,384 CUDA cores), small caches, no branch prediction, and no out-of-order execution. GPUs excel at workloads with regular data parallelism: matrix multiplication, image processing, physics simulation, and neural network training.

| Feature | CPU | GPU |
|---------|-----|-----|
| Cores | Few (8–64) | Many (thousands) |
| Thread count | Few (tens) | Many (tens of thousands) |
| Cache | Large (MBs) | Small (KBs per core) |
| Branch handling | Complex prediction | Simple, divergent branches are costly |
| Memory latency | Hidden by cache | Hidden by thread switching |
| Clock frequency | High (3–5 GHz) | Lower (1–2 GHz) |
| Power per core | High | Low |
| Best for | Latency, complex control | Throughput, data parallelism |

**SIMT execution model:**

GPUs use the **SIMT (Single Instruction, Multiple Threads)** model. A GPU program consists of thousands of threads that execute the same kernel (function). Threads are grouped into **warps** (or **wavefronts** in AMD terminology) of 32 threads. All threads in a warp execute the same instruction in lockstep on different data. This is similar to SIMD but at the thread level.

However, unlike SIMD, SIMT allows threads to diverge. If threads in a warp take different paths in an if-else statement, the GPU executes both paths sequentially, with inactive threads masked off. This is called **branch divergence**. When the threads reconverge, they resume executing in lockstep. Divergent branches severely reduce GPU efficiency because the warp executes both paths.

**CUDA programming model:**

CUDA is NVIDIA's parallel computing platform. The programming model has a hierarchy:
- **Grid:** The entire GPU program. A grid consists of multiple blocks.
- **Block:** A group of threads that can cooperate via shared memory and synchronization. Blocks are independent and can run in any order.
- **Warp:** A group of 32 threads that execute in lockstep. Warps are the basic scheduling unit.
- **Thread:** An individual execution unit. Each thread has its own registers and executes the kernel on a specific data element.

**Memory hierarchy:**
- **Global memory:** Large, slow, accessible by all threads. Main data storage.
- **Shared memory:** Small, fast, accessible by threads in the same block. Used for data sharing and cooperation.
- **Registers:** Fastest, private to each thread. Limited in number (e.g., 255 per thread on NVIDIA).
- **Constant memory:** Read-only, cached, broadcast to all threads.
- **Texture memory:** Specialized for 2D spatial locality, cached.

**Latency hiding:**

GPUs do not have caches large enough to hide memory latency. Instead, they hide latency through **massive multithreading**. When a warp stalls waiting for memory, the GPU scheduler switches to another ready warp. With thousands of warps in flight, there is almost always a warp ready to execute. This is the GPU's answer to the memory wall: rather than reducing latency, they tolerate it by keeping the execution units busy with other threads.

**Memory coalescing:**

For optimal GPU performance, threads in a warp should access consecutive memory locations. When this happens, the memory controller can coalesce the 32 accesses into a single burst transaction. If threads access random locations, the memory controller must issue 32 separate transactions, severely reducing bandwidth. This is why GPU algorithms are designed to have consecutive thread IDs access consecutive memory addresses.

**GPU architecture (NVIDIA):**

- **Streaming Multiprocessor (SM):** The basic building block. Each SM has multiple CUDA cores, shared memory, register files, and schedulers. A GPU has many SMs (e.g., 128 SMs in the H100).
- **CUDA Core:** A simple ALU that executes integer or floating-point operations. One CUDA core per thread in a warp cannot execute simultaneously; instead, the SM has fewer cores than threads and switches between them.
- **Tensor Core:** A specialized matrix multiply-accumulate unit introduced in Volta. It can perform 4×4×4 matrix multiplications in a single instruction, dramatically accelerating deep learning.
- **RT Core:** A specialized ray tracing intersection unit introduced in Turing. Accelerates graphics ray tracing.

**GPU workload suitability:**
- **Excellent for:** Matrix operations, image processing, neural networks, Monte Carlo simulations, sorting, graph algorithms (with proper design).
- **Poor for:** Recursive algorithms, irregular data structures (linked lists, trees), workloads with frequent synchronization, tasks with low parallelism.

#### Key concepts
- GPU architecture: many simple cores, high throughput, low latency per thread
- CPU vs. GPU: latency vs. throughput design philosophy
- SIMT execution model: warps, wavefronts, lockstep execution
- CUDA hierarchy: grid, block, warp, thread
- GPU memory hierarchy: global, shared, registers, constant, texture
- Latency hiding through massive multithreading
- Memory coalescing for optimal bandwidth
- Branch divergence and its performance impact
- NVIDIA SM architecture: CUDA cores, tensor cores, RT cores
- GPU programming model: kernel, thread ID, block ID
- Workload suitability: when to use GPU vs. CPU

#### Hands-on activity
Write a simple CUDA kernel (or OpenCL kernel) that adds two arrays of 1,000,000 floats. The kernel should be launched with 256 threads per block and enough blocks to cover all elements. Show the host code that allocates GPU memory, copies data, launches the kernel, and copies results back. If you don't have access to a GPU, write the kernel code and describe the expected performance. Then, analyze the memory access pattern: show how thread 0 in warp 0 accesses `a[0]`, thread 1 accesses `a[1]`, etc., and how this is coalesced. Write a second version where each thread accesses elements with a stride of 1000 (thread 0 accesses `a[0]`, thread 1 accesses `a[1000]`, etc.) and explain why this is uncoalesced and slower. Discuss how you would optimize the strided access pattern.

#### Assessment idea
Ask: "A GPU has 10,000 threads in flight but only 1,000 CUDA cores. How can it keep all CUDA cores busy?" Answer: The GPU uses fine-grained multithreading (also called temporal multithreading). When a warp stalls waiting for memory, the GPU scheduler immediately switches to another warp that is ready to execute. With 10,000 threads in flight, there are many warps (e.g., 312 warps of 32 threads). At any given moment, some warps are executing, some are waiting for memory, and some are waiting for synchronization. The scheduler picks ready warps and executes them on the available CUDA cores. This latency hiding technique allows the GPU to achieve high throughput even though individual threads have high memory latency. Then ask: "Why does branch divergence severely hurt GPU performance, while branch misprediction hurts CPU performance?" Answer: In a GPU, all threads in a warp execute the same instruction in lockstep. If threads in a warp diverge (take different paths in an if-else), the GPU must execute both paths sequentially. First, it executes the "if" path with the threads that took it, masking off the others. Then it executes the "else" path with the remaining threads, masking off the first group. The warp takes twice as long to execute. In a CPU, each thread executes independently, so a branch misprediction only affects one thread. The CPU's branch predictor is designed to minimize mispredictions for single-threaded execution. GPUs rely on the programmer to avoid divergence, while CPUs rely on hardware to predict branches.

#### AI generation note
Create a 10-minute animated lesson. Show the CPU as a race car (fast, few) and the GPU as a fleet of delivery trucks (many, slower individually but high total throughput). Show SIMT as a marching band where all rows move in lockstep. Show branch divergence as a band where some members turn left and others turn right, forcing the band to split and march both paths. Show memory coalescing as 32 people boarding a bus together vs. taking 32 separate taxis. Show latency hiding as a factory with thousands of workers where idle workers are immediately replaced by others. Show the CUDA hierarchy as a city (grid) with neighborhoods (blocks) and families (warps). Show the memory hierarchy as a pyramid: global memory as a warehouse, shared memory as a neighborhood pantry, and registers as personal pockets. Include the CUDA kernel code with annotations. End with a reflection: "What is the largest challenge in porting a CPU algorithm to a GPU?"

---

### Chapter 10.3 — Multithreading and SMT

#### Learning objectives
- Explain coarse-grained, fine-grained, and simultaneous multithreading (SMT).
- Describe how SMT allows multiple threads to share a single processor core's resources.
- Analyze the impact of SMT on resource utilization, throughput, and single-thread performance.
- Understand the trade-offs between SMT and multicore design.

#### Detailed lesson content

While SIMD and GPUs exploit data-level parallelism, **multithreading** exploits **thread-level parallelism (TLP)** — the ability to run multiple independent threads of execution simultaneously. Multithreading is essential for modern processors because many workloads (web servers, databases, operating systems) have abundant thread-level parallelism but limited instruction-level parallelism within a single thread.

**Types of multithreading:**

1. **Coarse-Grained Multithreading (CGMT):** The processor switches threads only on long-latency events (e.g., cache misses). When a thread misses in the L2 cache, the processor stalls that thread and switches to another thread. The switch is fast (a few cycles) because the architectural state (registers) of both threads is maintained in the processor. CGMT is used in some IBM Power processors and Sun Niagara processors.
   - Pros: Simple to implement, no changes to the pipeline for short events.
   - Cons: Does not help with short latencies (e.g., L1 misses, branch mispredictions).

2. **Fine-Grained Multithreading (FGMT):** The processor switches threads every cycle (or every few cycles). This is the approach used by GPUs, where the scheduler switches warps every cycle to hide latency. On CPUs, FGMT means that instructions from different threads are interleaved in the pipeline.
   - Pros: Hides both short and long latencies. Keeps the pipeline full.
   - Cons: Slows down individual threads because they cannot use the entire pipeline. Threads compete for cache and bandwidth.

3. **Simultaneous Multithreading (SMT):** SMT allows multiple threads to execute instructions simultaneously in the same pipeline cycle. The processor fetches instructions from multiple threads and issues them to the functional units in the same cycle. This is the most aggressive form of multithreading and is used in Intel Hyper-Threading, IBM Power, and AMD Zen processors.
   - Pros: Maximizes resource utilization. If one thread cannot fill all issue slots, another thread can use them. Increases throughput without duplicating the entire core.
   - Cons: Threads compete for shared resources (caches, branch predictor, TLB, instruction queues). A "noisy neighbor" thread can degrade the performance of other threads. Cache thrashing can occur when threads have conflicting working sets.

**SMT implementation:**

In an SMT processor, the architectural state is replicated for each thread (program counters, register files, return address stacks). However, the execution resources (functional units, caches, TLBs, branch predictors) are shared. The fetch stage selects a thread to fetch from (usually round-robin or based on which thread has the most ready instructions). The decode and issue stages process instructions from multiple threads, issuing them to available functional units.

The key advantage of SMT is that it increases throughput without replicating the expensive execution resources. A single core with 2-way SMT can achieve 70–90% of the throughput of two separate cores, while using only 5–10% more area. This makes SMT extremely cost-effective for throughput-oriented workloads.

**Intel Hyper-Threading:**

Intel's Hyper-Threading (introduced with the Pentium 4 in 2002) is a 2-way SMT implementation. Each physical core appears as two logical processors to the operating system. The two threads share the L1 and L2 caches, the branch predictor, and the execution resources. When one thread is stalled, the other thread can use the idle resources. Hyper-Threading typically provides a 10–30% performance improvement for multithreaded workloads.

**SMT vs. multicore:**

- **SMT:** One core, multiple threads sharing resources. Low area overhead, good throughput gain, but threads compete for shared resources.
- **Multicore:** Multiple independent cores, each with its own resources. Higher area overhead, no resource contention between cores, but more power and cost.
- **Best practice:** Use a combination of SMT and multicore. For example, a processor with 8 cores and 2-way SMT per core provides 16 logical processors. The cores handle independent tasks, and SMT improves utilization within each core.

**SMT scheduling and resource allocation:**

The OS scheduler must be aware of SMT. If two compute-intensive threads are scheduled on the same physical core, they will compete for resources and run slower than if they were on separate cores. If a compute-intensive thread and an I/O-bound thread are scheduled on the same core, the I/O thread's stalls allow the compute thread to use more resources, improving overall throughput.

Modern OS schedulers (like Linux's CFS scheduler) try to spread compute threads across physical cores before sharing cores via SMT. They also implement **core scheduling** to ensure that threads with different security contexts do not share a core (to prevent side-channel attacks like Spectre and Meltdown).

#### Key concepts
- Thread-level parallelism (TLP) and multithreading
- Coarse-grained multithreading (CGMT): switch on long-latency events
- Fine-grained multithreading (FGMT): switch every cycle
- Simultaneous multithreading (SMT): multiple threads in the same cycle
- SMT resource sharing: architectural state replicated, execution resources shared
- SMT throughput gain vs. area overhead
- Intel Hyper-Threading as 2-way SMT
- SMT vs. multicore: resource contention vs. independent cores
- OS scheduling on SMT: spreading threads across physical cores
- Security implications: side-channel attacks on shared cores

#### Hands-on activity
If you have access to a system with SMT (Intel Hyper-Threading or AMD SMT), run the following experiment:
1. Disable SMT in the BIOS (or using `echo off > /sys/devices/system/cpu/smt/control` on Linux).
2. Compile a compute-intensive benchmark (e.g., a matrix multiplication or a prime number sieve) and run it with 1, 2, 4, and 8 threads.
3. Record the execution time and throughput for each thread count.
4. Enable SMT and repeat the experiment.
5. Compare the results. Calculate the SMT speedup for each thread count.

Discuss: At what thread count does SMT provide the most benefit? At what point does adding more threads hurt performance? If you cannot access an SMT system, research published benchmarks for processors like Intel Core i7 or AMD Ryzen and analyze the results. Write a one-page report with a graph showing performance vs. thread count for SMT enabled and disabled.

#### Assessment idea
Ask: "A processor has 8 physical cores with 2-way SMT per core. The OS scheduler assigns 16 compute-intensive threads to the 16 logical processors. What performance problem might occur, and how should the scheduler fix it?" Answer: The 16 threads will compete for resources within each physical core. Two compute-intensive threads sharing a core will contend for the L1 cache, L2 cache, branch predictor, and functional units. The performance of each thread will be lower than if it had the entire core to itself. The total throughput may not be much higher than 8 threads without SMT. The scheduler should spread the 16 threads across the 8 physical cores first, using SMT only when there are more threads than physical cores. If there are exactly 16 threads, the scheduler should pair threads that have different resource needs (e.g., one compute-intensive and one memory-bound) on the same core to maximize utilization. Modern Linux schedulers implement this with the `core_siblings` topology awareness. Then ask: "Why does SMT increase the vulnerability to side-channel attacks like Spectre and Meltdown?" Answer: In SMT, two threads share the same physical core and its caches, branch predictor, and execution units. A malicious thread can measure the timing of its own operations to infer what data the other thread is accessing. For example, the malicious thread can access a set of cache lines and measure which ones are evicted by the victim thread (a cache side-channel attack). With SMT, the attacker and victim share the L1 cache directly, making such attacks much easier than across separate cores. This is why modern OS schedulers implement core scheduling to isolate threads with different security contexts on separate physical cores.

#### AI generation note
Create a 10-minute animated lesson. Show a single-threaded core as a restaurant with one customer at a time. Show coarse-grained multithreading as a restaurant where the chef switches to another customer when the current one goes to the bathroom. Show fine-grained multithreading as a restaurant where the chef serves one bite to each customer in rotation. Show SMT as a restaurant where the chef serves multiple customers at the same table simultaneously. Show SMT resources as shared kitchen equipment. Show a noisy neighbor as a customer who hogs all the equipment. Show the OS scheduler as a maître d' who seats customers at different tables. Show side-channel attacks as a customer who watches what others order to infer their preferences. Show SMT vs. multicore as a food court with shared kitchens vs. separate restaurants. Include the benchmark results graph. End with a reflection: "When would you prefer more cores with no SMT over fewer cores with SMT?"

---

### Chapter 10.4 — Parallel Programming Models and OpenMP

#### Learning objectives
- Describe the shared-memory and message-passing programming models.
- Understand OpenMP directives and how they enable parallel programming on multicore processors.
- Explain the fork-join model and the role of threads, parallel regions, and synchronization.
- Analyze the performance of OpenMP programs: speedup, efficiency, and Amdahl's Law.

#### Detailed lesson content

Parallel programming models provide the abstractions that programmers use to write parallel programs. The two main models are shared-memory and message-passing.

**Shared-memory programming:**

In a shared-memory model, all threads share a common address space. Communication occurs by reading and writing shared variables. This is the model used by OpenMP, POSIX threads (pthreads), and C++ threads.

Advantages:
- Simple programming model: threads communicate through shared variables.
- No explicit message passing: data is accessed directly.
- Good for fine-grained parallelism: threads can cooperate on small tasks.

Disadvantages:
- Synchronization is required to prevent race conditions.
- Cache coherence traffic can be high.
- Scalability is limited by the shared-memory bottleneck.

**Message-passing programming:**

In a message-passing model, each process has its own private address space. Communication occurs by sending and receiving messages. This is the model used by MPI (Message Passing Interface).

Advantages:
- Scalable to thousands of processes: no shared memory bottleneck.
- Explicit communication makes data movement visible to the programmer.
- Good for coarse-grained parallelism: processes work on large chunks of data.

Disadvantages:
- More complex programming model: explicit send/receive operations.
- Higher communication overhead for fine-grained tasks.
- Difficult to load balance.

**OpenMP:**

OpenMP is the standard API for shared-memory parallel programming. It uses compiler directives (pragmas) to specify parallel regions, loops, and synchronization.

Key directives:
- `#pragma omp parallel`: Creates a parallel region. Each thread executes the code inside the region.
- `#pragma omp for`: Distributes loop iterations across threads.
- `#pragma omp parallel for`: Combines parallel region and loop distribution.
- `#pragma omp critical`: Specifies a critical section (only one thread can execute at a time).
- `#pragma omp barrier`: Synchronizes all threads at a barrier.
- `#pragma omp reduction`: Combines partial results from all threads (e.g., sum, max).

**Fork-join model:**

OpenMP uses the fork-join model. The program starts with a single master thread. When a parallel region is encountered, the master thread forks (creates) a team of worker threads. At the end of the parallel region, the worker threads join (terminate) and the master thread continues.

**Performance analysis:**

For a parallel program with N threads and a fraction P of parallelizable work:
```
Speedup = 1 / ((1 - P) + P/N)
Efficiency = Speedup / N
```

For example, if P = 0.9 and N = 8:
```
Speedup = 1 / (0.1 + 0.1125) = 1 / 0.2125 = 4.7×
Efficiency = 4.7 / 8 = 59%
```

The efficiency is less than 100% because of the serial portion (1 - P) and parallel overhead (thread creation, synchronization, load imbalance).

**OpenMP scheduling:**
- **Static scheduling:** Loop iterations are divided evenly among threads. Good for uniform workloads.
- **Dynamic scheduling:** Loop iterations are assigned to threads as they become available. Good for non-uniform workloads.
- **Guided scheduling:** A hybrid that starts with large chunks and decreases the chunk size. Good for workloads with decreasing cost per iteration.

#### Key concepts
- Shared-memory vs. message-passing programming models
- OpenMP directives: parallel, for, critical, barrier, reduction
- Fork-join model: master thread forks workers, workers join at the end
- Speedup and efficiency formulas
- Amdahl's Law for parallel speedup
- Static, dynamic, and guided scheduling in OpenMP
- Race conditions and synchronization in shared-memory programs
- Cache coherence and false sharing in parallel programs
- OpenMP vs. MPI trade-offs

#### Hands-on activity
Write an OpenMP program in C or C++ that parallelizes the matrix multiplication of two N×N matrices. Use `#pragma omp parallel for` to distribute the outer loop across threads. Measure the execution time for N = 512, 1024, and 2048 with 1, 2, 4, and 8 threads. Calculate the speedup and efficiency for each configuration. Then, experiment with different scheduling policies (static, dynamic, guided) and chunk sizes. Plot the speedup vs. number of threads for each matrix size and scheduling policy. Discuss the impact of cache locality and false sharing on performance. If you don't have access to an OpenMP compiler, describe the expected results and the factors that would affect performance.

#### Assessment idea
Ask: "An OpenMP program has a serial portion that takes 10% of the execution time and a parallel portion that takes 90%. What is the maximum speedup with infinite threads, and what is the speedup with 8 threads?" Answer: Maximum speedup (Amdahl's Law): 1 / 0.10 = 10×. With 8 threads: Speedup = 1 / (0.10 + 0.90/8) = 1 / (0.10 + 0.1125) = 1 / 0.2125 = 4.7×. The efficiency is 4.7 / 8 = 59%. This demonstrates that even with 90% parallelizable code, the speedup is limited by the serial portion. Then ask: "What is false sharing in OpenMP programs, and how does it affect performance?" Answer: False sharing occurs when two threads access different variables that happen to be in the same cache line. Even though the threads are not accessing the same variable, the cache coherence protocol treats the cache line as a single unit. When one thread writes to its variable, the cache line is invalidated in the other thread's cache, causing a cache miss. The other thread then re-reads the cache line, even though its variable has not changed. This creates unnecessary cache coherence traffic and degrades performance. False sharing can be avoided by padding data structures so that variables used by different threads are in different cache lines (e.g., adding unused bytes to align to 64-byte boundaries). This is a common optimization in high-performance parallel programming.

#### AI generation note
Create a 10-minute animated lesson. Show shared-memory programming as a group of people working on the same whiteboard. Show message-passing as people sending letters to each other. Show OpenMP as a team leader who divides tasks among workers. Show the fork-join model as the team leader creating a team for a project and disbanding it afterward. Show Amdahl's Law as a speed limit sign: no matter how many workers you add, the serial portion limits the speedup. Show false sharing as two people writing on different parts of the same sheet of paper, causing the paper to be passed back and forth unnecessarily. Show scheduling policies as different ways to divide a pile of work: static (equal piles), dynamic (grab as you go), guided (big piles first, then small). Show the performance graph as a race with different team sizes. End with a reflection: "When is OpenMP better than MPI, and vice versa?"

---

### Chapter 10.5 — Vectorization and Auto-Vectorization

#### Learning objectives
- Explain how compilers automatically vectorize loops using SIMD instructions.
- Understand the conditions that prevent auto-vectorization: data dependencies, aliasing, and control flow.
- Describe compiler hints and pragmas that help vectorization.
- Analyze the performance of vectorized code vs. scalar code.

#### Detailed lesson content

Vectorization is the process of converting scalar code (one operation at a time) to vector code (multiple operations simultaneously). Modern compilers can automatically vectorize loops using SIMD instructions, but programmers must understand the conditions that enable or prevent vectorization.

**Auto-vectorization conditions:**

For a loop to be auto-vectorized by the compiler, it must satisfy:
1. **Countable trip count:** The number of iterations must be known at compile time or at loop entry.
2. **No data dependencies:** There must be no loop-carried dependencies that prevent parallel execution. For example:
   ```c
   for (i = 0; i < N; i++) {
       a[i] = a[i-1] + 1;  // Loop-carried dependency, cannot vectorize
   }
   ```
3. **No aliasing:** The compiler must be able to prove that the arrays do not overlap. If they might overlap, the compiler cannot vectorize because reordering operations could change the result.
4. **No complex control flow:** The loop body should not contain branches or function calls that the compiler cannot inline.
5. **No memory alignment issues:** The compiler may need to know that arrays are aligned to the SIMD register width.

**Compiler hints:**

Programmers can help the compiler vectorize by providing hints:
- `__restrict__` keyword: Tells the compiler that pointers do not alias.
- `__builtin_assume_aligned()`: Tells the compiler that a pointer is aligned.
- `#pragma omp simd`: Forces the compiler to vectorize the loop (OpenMP 4.0+).
- `#pragma ivdep`: Tells the compiler to ignore vector dependencies (Intel compiler).
- `__attribute__((vector_size(n)))`: GCC/Clang attribute for vector types.

**Vectorization report:**

Most compilers can generate a vectorization report that shows which loops were vectorized and why others were not. For example, with GCC:
```bash
gcc -O3 -fopt-info-vec-all -o program program.c
```

The report will list:
- Loops that were vectorized and the SIMD width used.
- Loops that were not vectorized and the reason (e.g., "not vectorized: possible aliasing", "not vectorized: control flow").

**Performance analysis:**

Vectorized code can achieve significant speedup, but the actual speedup depends on:
- **SIMD width:** AVX-512 provides 16× theoretical speedup for floats, but AVX2 provides only 8×.
- **Memory bandwidth:** If the workload is memory-bound, vectorization may not help because the memory system is the bottleneck.
- **Alignment overhead:** Unaligned accesses may require extra instructions.
- **Remainder handling:** If the loop count is not a multiple of the SIMD width, the compiler generates a scalar remainder loop.
- **Control flow divergence:** If the loop contains conditionals, the compiler must use masking, which reduces efficiency.

**Manual vectorization:**

When auto-vectorization fails, programmers can use intrinsics or assembly to manually vectorize. For example, Intel AVX intrinsics:
```c
#include <immintrin.h>
__m256 a_vec = _mm256_load_ps(a + i);
__m256 b_vec = _mm256_load_ps(b + i);
__m256 c_vec = _mm256_add_ps(a_vec, b_vec);
_mm256_store_ps(c + i, c_vec);
```

Manual vectorization provides full control but is architecture-specific and error-prone.

#### Key concepts
- Auto-vectorization: compiler converting scalar loops to SIMD
- Conditions for vectorization: countable trip count, no dependencies, no aliasing
- Aliasing and its impact on vectorization
- Compiler hints: restrict, assume_aligned, pragma omp simd, ivdep
- Vectorization report and compiler flags
- Performance factors: SIMD width, memory bandwidth, alignment, remainder
- Manual vectorization with intrinsics
- Control flow divergence and masking in vectorized code
- Loop-carried dependencies and their prevention of vectorization

#### Hands-on activity
Write a C program with the following loops and compile it with `-O3 -mavx2 -fopt-info-vec-all` (GCC) or `-O3 -xHost -qopt-report` (Intel). For each loop, check the vectorization report and determine whether the loop was vectorized and why or why not. If it was not vectorized, modify the code to enable vectorization.

Loop 1 (simple sum):
```c
for (int i = 0; i < N; i++) {
    sum += a[i];
}
```

Loop 2 (potential aliasing):
```c
void add(float *a, float *b, float *c, int N) {
    for (int i = 0; i < N; i++) {
        c[i] = a[i] + b[i];
    }
}
```

Loop 3 (loop-carried dependency):
```c
for (int i = 1; i < N; i++) {
    a[i] = a[i-1] + 1;
}
```

Loop 4 (conditional):
```c
for (int i = 0; i < N; i++) {
    if (a[i] > 0) b[i] = a[i] * 2;
    else b[i] = a[i] + 1;
}
```

Measure the performance of each loop (vectorized and scalar versions) and calculate the speedup. Discuss the compiler's vectorization decisions.

#### Assessment idea
Ask: "Why does the compiler refuse to vectorize a loop when pointers might alias, and how can the programmer help the compiler?" Answer: The compiler refuses to vectorize aliasing pointers because vectorization reorders operations. If two pointers alias (point to overlapping memory), reordering operations could change the result. For example:
```c
void add(float *a, float *b, float *c, int N) {
    for (int i = 0; i < N; i++) c[i] = a[i] + b[i];
}
```
If `a` and `c` alias, vectorization might load `a[0..7]` and store `c[0..7]` before processing `a[8..15]`, which would overwrite `a[8..15]` if `a` and `c` overlap. The scalar version processes elements in order, so this is not a problem. The programmer can help the compiler by using the `__restrict__` keyword: `void add(float * __restrict__ a, float * __restrict__ b, float * __restrict__ c, int N)`. This tells the compiler that the pointers do not alias, allowing vectorization. Alternatively, the programmer can use `#pragma omp simd` or `__builtin_assume_aligned()` to provide additional information. Then ask: "Why does a loop with a loop-carried dependency (e.g., `a[i] = a[i-1] + 1`) prevent vectorization, and is there any way to vectorize such a loop?" Answer: A loop-carried dependency means that each iteration depends on the result of the previous iteration. In the example `a[i] = a[i-1] + 1`, iteration i cannot compute its result until iteration i-1 has completed, because `a[i]` depends on `a[i-1]`. This serial dependency prevents parallel execution, so the compiler cannot vectorize the loop. There is no way to vectorize this specific loop because the dependency is fundamental. However, some loops with apparent dependencies can be transformed. For example, a prefix sum (scan) operation can be vectorized using a parallel algorithm (e.g., the Blelloch scan algorithm), though this requires multiple passes and is more complex than simple vectorization. The compiler cannot automatically transform a serial dependency into a parallel algorithm, so the programmer must rewrite the algorithm if vectorization is desired.

#### AI generation note
Create a 10-minute animated lesson. Show the compiler as a factory worker trying to pack boxes (operations) onto a conveyor belt (SIMD lanes). Show auto-vectorization as the worker automatically arranging boxes in rows. Show a loop-carried dependency as a box that needs something from the previous box, preventing parallel packing. Show aliasing as two boxes that might contain the same item, making the worker cautious. Show compiler hints as instructions from the manager that help the worker pack faster. Show the vectorization report as a scorecard showing which boxes were packed and which were not. Show manual vectorization as the worker packing boxes by hand with precise control. Show the performance comparison as a race between scalar and vector packing. End with a reflection: "Why can't compilers vectorize all loops automatically?"

---

### Chapter 10.6 — Parallel Architecture Trends and Accelerators

#### Learning objectives
- Describe the trends in parallel architecture: heterogeneous computing, chiplets, and domain-specific accelerators.
- Understand the role of NPUs, TPUs, and other AI accelerators.
- Explain the concept of chiplets and their advantages over monolithic dies.
- Analyze the trade-offs between general-purpose and specialized processors.

#### Detailed lesson content

The era of general-purpose CPU scaling is ending. The industry is moving toward heterogeneous computing, where specialized accelerators handle specific workloads more efficiently than CPUs. This chapter explores the trends shaping the future of parallel architectures.

**Heterogeneous computing:**

Modern systems combine different types of processors to optimize for different workloads:
- **CPU:** General-purpose, handles sequential and complex tasks.
- **GPU:** Massively parallel, handles graphics and machine learning.
- **NPU (Neural Processing Unit):** Specialized for neural network inference. Used in smartphones (Apple Neural Engine, Qualcomm Hexagon) and edge devices.
- **TPU (Tensor Processing Unit):** Google's AI accelerator, optimized for matrix operations in TensorFlow.
- **DSP (Digital Signal Processor):** Specialized for audio, video, and signal processing.
- **FPGA (Field-Programmable Gate Array):** Reconfigurable hardware for custom accelerators.
- **ASIC (Application-Specific Integrated Circuit):** Custom chips for specific applications (e.g., Bitcoin mining, video encoding).

**Domain-specific accelerators:**

1. **AI Accelerators:**
   - **TPU v4:** 275 TFLOPS per chip, designed for training large models.
   - **NVIDIA Tensor Cores:** Integrated into GPUs, perform mixed-precision matrix multiply-accumulate.
   - **Apple Neural Engine:** 16-core NPU in the M1/M2/M3, designed for on-device AI inference.
   - **Intel Habana Gaudi:** AI training processor with high-bandwidth memory.

2. **Video Accelerators:**
   - Hardware encoders/decoders (e.g., NVIDIA NVENC, Intel Quick Sync) for H.264, HEVC, AV1.

3. **Cryptography Accelerators:**
   - AES-NI on x86 processors for hardware-accelerated encryption.
   - SHA extensions for hashing.

4. **Networking Accelerators:**
   - SmartNICs (e.g., NVIDIA BlueField, Pensando) that offload network processing from the CPU.

**Chiplets:**

A chiplet is a small, modular chip that can be combined with other chiplets on a single package. Instead of building one large monolithic die, the processor is composed of multiple chiplets connected by an interposer or advanced packaging.

Advantages:
- **Yield:** Smaller chiplets have higher manufacturing yield than large monolithic dies.
- **Cost:** Chiplets can be manufactured at different process nodes (e.g., CPU chiplets at 5nm, I/O chiplets at 7nm).
- **Scalability:** More cores can be added by adding more chiplets, without redesigning the entire chip.
- **Flexibility:** Different products can be created by combining different chiplets.

Examples:
- **AMD Zen 2/3/4:** CPU chiplets (CCD) and I/O chiplets (IOD) on a single package.
- **Intel Meteor Lake:** Compute tile, graphics tile, SoC tile, and I/O tile.
- **Apple M1 Ultra:** Two M1 Max dies connected by UltraFusion interconnect.

**Trade-offs: General-purpose vs. specialized:**

| Aspect | General-Purpose (CPU) | Specialized (Accelerator) |
|--------|----------------------|---------------------------|
| Flexibility | High | Low |
| Performance/Watt | Low | High |
| Programmability | Easy | Hard |
| Cost | Lower per unit | Higher per unit |
| Time to market | Fast | Slow |
| Best for | Diverse workloads | Specific workloads |

The trend is toward **system-on-chip (SoC)** designs that integrate CPU, GPU, NPU, ISP, and other accelerators on a single die or package. This provides the best of both worlds: general-purpose programmability for most tasks and specialized efficiency for common workloads.

**Future trends:**
- **3D stacking:** Stacking chiplets vertically to increase bandwidth and reduce latency (e.g., AMD V-Cache).
- **Photonics:** Using optical interconnects for higher bandwidth and lower power.
- **Neuromorphic computing:** Processors that mimic biological neural networks (e.g., Intel Loihi).
- **Quantum computing:** Still in early stages, but may eventually complement classical computing.

#### Key concepts
- Heterogeneous computing: CPU, GPU, NPU, TPU, DSP, FPGA, ASIC
- Domain-specific accelerators for AI, video, crypto, networking
- Chiplets: modular dies, higher yield, lower cost, scalability
- AMD chiplet architecture (CCD + IOD)
- Intel tile-based architecture (Meteor Lake)
- Apple UltraFusion for multi-die integration
- General-purpose vs. specialized trade-offs
- SoC integration trend
- 3D stacking, photonics, neuromorphic computing, quantum computing
- Future of parallel architecture

#### Hands-on activity
Research a recent processor or SoC that uses chiplets or heterogeneous integration (e.g., AMD Ryzen 9 7950X, Intel Core Ultra 9 185H, Apple M3 Max, NVIDIA GH100). Create a diagram showing the different components (CPU chiplets, GPU, NPU, memory, I/O) and how they are connected. Discuss the design philosophy: why did the manufacturer choose this architecture? What workloads does it optimize for? What are the trade-offs? Then, research the performance of an AI accelerator (e.g., Google TPU v4, NVIDIA H100, Apple Neural Engine) on a specific benchmark (e.g., MLPerf inference). Compare the performance per watt with a CPU and GPU running the same benchmark.

#### Assessment idea
Ask: "Why do AMD and Intel use chiplets instead of monolithic dies for their high-core-count processors, and what are the trade-offs?" Answer: Chiplets are used because manufacturing yield decreases exponentially with die size. A large monolithic die (e.g., 500 mm²) has a high probability of containing a defect, making it unusable. By splitting the processor into smaller chiplets (e.g., 80 mm² each), the yield of each chiplet is much higher, and defective chiplets can be discarded while good ones are used. The I/O die (which is less sensitive to process node) can be manufactured at a cheaper, older node. The trade-offs are: (1) inter-chiplet communication latency — data must travel between chiplets, which is slower than on-chip communication within a monolithic die; (2) packaging complexity — chiplets require advanced packaging (e.g., 2.5D interposers, EMIB) to connect them; (3) power — the inter-chiplet interconnect consumes additional power; (4) design complexity — the chiplet architecture requires careful design to balance load and minimize communication. AMD has successfully used chiplets to offer high core counts at competitive prices. Intel is moving toward tile-based architectures for similar reasons. Then ask: "What is the advantage of a domain-specific accelerator (like a TPU) over a general-purpose GPU for AI workloads, and what is the disadvantage?" Answer: A domain-specific accelerator like the TPU is designed specifically for the operations that dominate AI workloads (matrix multiply, convolutions). It can achieve much higher performance per watt than a GPU because it eliminates hardware that is unnecessary for AI (e.g., texture mapping units, rasterization, complex graphics pipelines). The TPU also has specialized memory hierarchies (e.g., large on-chip scratchpad memory) optimized for tensor data movement. The disadvantage is lack of flexibility: a TPU cannot efficiently run non-AI workloads (e.g., graphics, physics simulation, general-purpose computing). A GPU is more versatile and can run a wide range of parallel workloads. The choice between a TPU and a GPU depends on the workload: for pure AI training/inference, the TPU is more efficient; for mixed workloads or workloads that also need graphics, the GPU is more flexible. This is why data centers often deploy both GPUs and TPUs, and why cloud providers offer different instance types for different needs.

#### AI generation note
Create a 10-minute animated lesson. Show the evolution of processors from monolithic dies to chiplets. Show a monolithic die as a single large cake. Show a chiplet as a modular cake that can be assembled from smaller pieces. Show yield as the probability that a cake is perfect: smaller pieces have higher success rates. Show heterogeneous computing as a toolbox with different tools for different jobs. Show a CPU as a Swiss Army knife. Show a GPU as a power drill. Show a TPU as a specialized screwdriver. Show an SoC as a complete toolbox. Show 3D stacking as a toolbox with drawers on top of each other. Show photonics as fiber-optic cables in the toolbox. Show neuromorphic computing as a brain-shaped tool. Show quantum computing as a futuristic tool that is still in development. End with a reflection: "What is the future of general-purpose computing in a world of specialized accelerators?"

---

## Module 11: Multiprocessors and Coherence

> **Goal:** Understand the architecture of multicore and manycore processors, the protocols that keep their caches consistent, and the memory models that define program behavior.

---

### Chapter 11.1 — Multiprocessor Taxonomy and Organization

#### Learning objectives
- Describe the taxonomy of parallel computers: SISD, SIMD, MISD, and MIMD.
- Understand the difference between shared-memory and distributed-memory multiprocessors.
- Explain the organization of a multicore processor: cores, caches, interconnect, and memory controller.
- Analyze the trends in multicore scaling: core count, cache size, and memory bandwidth.

#### Detailed lesson content

Parallel computers can be classified using Flynn's taxonomy:

1. **SISD (Single Instruction, Single Data):** Traditional sequential processor. One instruction stream operates on one data stream. Example: A single-core CPU.

2. **SIMD (Single Instruction, Multiple Data):** One instruction operates on multiple data elements simultaneously. Example: Vector processors, GPUs, SIMD extensions.

3. **MISD (Multiple Instruction, Single Data):** Multiple instructions operate on the same data. Rare in practice. Example: Some fault-tolerant systems use multiple processors executing the same instruction on the same data for redundancy.

4. **MIMD (Multiple Instruction, Multiple Data):** Multiple processors execute different instructions on different data. This is the dominant class of parallel computers. Example: Multicore processors, multi-socket servers, clusters.

**Shared-memory vs. distributed-memory:**

- **Shared-memory multiprocessors:** All processors share a common physical memory. Each processor can access any memory location. Communication occurs implicitly through shared variables. Examples: Multicore processors, multi-socket servers.
- **Distributed-memory multiprocessors:** Each processor has its own private memory. Communication occurs explicitly through message passing. Examples: Clusters, supercomputers (e.g., Cray, IBM BlueGene).

**Multicore processor organization:**

A modern multicore processor consists of:
- **Cores:** Multiple independent processor cores on a single die. Each core has its own pipeline, register file, and L1 caches.
- **Private caches:** Each core typically has private L1 instruction and data caches.
- **Shared caches:** A larger L2 or L3 cache is shared among multiple cores or all cores.
- **Interconnect:** A bus, ring, or mesh connects the cores, caches, and memory controller.
- **Memory controller:** Manages access to external DRAM.
- **I/O:** PCIe, USB, and other interfaces for external devices.

**Multicore scaling trends:**
- **Core count:** Desktop processors have 4–24 cores. Server processors have 32–96 cores (e.g., AMD EPYC 9654 has 96 cores).
- **Cache size:** L3 caches have grown from 8 MB to 256 MB (e.g., AMD EPYC with V-Cache has 768 MB L3).
- **Memory bandwidth:** Per-core bandwidth has decreased as core counts increase. Memory bandwidth per core is a critical bottleneck.
- **Power:** Power consumption scales with core count. Modern processors use power management (DVFS, clock gating, core parking) to stay within TDP limits.

**Memory bandwidth per core:**

As core counts increase, the memory bandwidth per core decreases. For example, a quad-core processor with dual-channel DDR4 (51.2 GB/s) provides 12.8 GB/s per core. A 64-core processor with 8-channel DDR5 (409.6 GB/s) provides only 6.4 GB/s per core. This is why large multicore systems often use HBM or multiple memory channels to provide sufficient bandwidth.

**Heterogeneous multicore:**

Some processors combine different types of cores:
- **ARM big.LITTLE:** High-performance "big" cores (Cortex-X) and power-efficient "little" cores (Cortex-A) on the same die. The OS schedules demanding tasks on big cores and background tasks on little cores.
- **Intel Alder Lake/Raptor Lake:** Performance-cores (P-cores, based on Golden Cove/Raptor Cove) and Efficient-cores (E-cores, based on Gracemont). The OS uses Intel Thread Director to schedule tasks.

#### Key concepts
- Flynn's taxonomy: SISD, SIMD, MISD, MIMD
- Shared-memory vs. distributed-memory multiprocessors
- Multicore organization: cores, private caches, shared caches, interconnect, memory controller
- Multicore scaling trends: core count, cache size, memory bandwidth
- Memory bandwidth per core bottleneck
- Heterogeneous multicore: big.LITTLE, P-cores and E-cores
- Power management in multicore processors
- Thread scheduling on heterogeneous cores

#### Hands-on activity
Research the specifications of a recent multicore processor (e.g., AMD Ryzen 9 7950X, Intel Core i9-13900K, Apple M3 Max). Create a detailed diagram showing: number of cores, cache hierarchy (L1, L2, L3 sizes per core and total), interconnect type, memory channels and bandwidth, TDP, and process node. Calculate the memory bandwidth per core and the cache capacity per core. Discuss how this processor compares to a processor from 5 years ago in terms of core count, cache size, and memory bandwidth. Then, research the OS scheduler for heterogeneous cores (Linux's `schedutil`, Intel Thread Director, ARM's task placement) and explain how it decides which core to run a task on.

#### Assessment idea
Ask: "Why does memory bandwidth per core decrease as core count increases, and what techniques do processor designers use to mitigate this?" Answer: Memory bandwidth per core decreases because the total memory bandwidth does not scale proportionally with core count. DRAM technology improves slowly (e.g., DDR5 provides ~2× the bandwidth of DDR4), while core counts can increase by 4× or more in a single generation. The techniques used to mitigate this include: (1) more memory channels (e.g., 8-channel DDR5 vs. 2-channel DDR4); (2) HBM (High Bandwidth Memory) for bandwidth-bound applications; (3) larger caches (L3 caches have grown to 100+ MB to reduce memory traffic); (4) cache compression (increases effective cache capacity); (5) prefetching (reduces cache misses); (6) NUMA architectures (distribute memory across nodes to increase aggregate bandwidth). Despite these techniques, memory bandwidth per core remains a bottleneck for many-core processors. This is why some workloads (e.g., streaming, AI) benefit more from GPUs or specialized accelerators than from many-core CPUs. Then ask: "What is the advantage of heterogeneous multicore (big.LITTLE, P-cores/E-cores) over homogeneous multicore, and what are the challenges?" Answer: Heterogeneous multicore combines high-performance cores for demanding tasks with power-efficient cores for background tasks. This provides better power efficiency than homogeneous multicore because the small cores consume much less power than the large cores. For example, ARM's big.LITTLE can provide 2–3× better power efficiency than an all-big design. The challenges are: (1) thread scheduling complexity — the OS must decide which tasks run on which cores, balancing performance and power; (2) thread migration overhead — moving a thread between big and little cores requires saving and restoring state; (3) cache coherence — the big and little cores may have different cache sizes and associativities, which can affect coherence performance; (4) software optimization — applications must be aware of the heterogeneous architecture to maximize performance. Modern OS schedulers (Linux's `schedutil`, Intel Thread Director, ARM's task placement) use heuristics and hardware feedback to make scheduling decisions, but optimal scheduling remains an active research area.

#### AI generation note
Create a 10-minute animated lesson. Show Flynn's taxonomy as a 2×2 grid. Show SISD as a single worker with one task. Show SIMD as a team of workers all doing the same task on different materials. Show MIMD as a team of workers each doing different tasks. Show shared-memory as a communal workspace where everyone shares tools. Show distributed-memory as separate workshops that send packages to each other. Show multicore scaling as a factory that keeps adding workers but the supply line (memory) doesn't grow as fast. Show heterogeneous cores as a factory with both skilled craftsmen and apprentices. Show the scheduler as a manager who assigns tasks based on skill level. End with a reflection: "What is the optimal ratio of big cores to little cores in a heterogeneous processor?"

---

### Chapter 11.2 — Cache Coherence Protocols in Detail

#### Learning objectives
- Implement the MESI protocol with detailed state transition diagrams.
- Understand the MESIF and MOESI extensions and their use cases.
- Describe the cache-to-cache transfer mechanism and its performance implications.
- Analyze the coherence traffic generated by different memory access patterns.

#### Detailed lesson content

Cache coherence protocols are essential for maintaining consistency in shared-memory multiprocessors. This chapter provides a detailed analysis of the MESI protocol and its extensions.

**MESI protocol detailed state transitions:**

Each cache line can be in one of four states:
- **M (Modified):** The line is dirty and has been modified. Only this cache has the valid copy. Memory is stale.
- **E (Exclusive):** The line is clean and only this cache has it. No other cache has the line. Memory is up-to-date.
- **S (Shared):** The line is clean and may be present in multiple caches. Memory is up-to-date.
- **I (Invalid):** The line is not valid.

**Transitions on processor actions:**

| Current State | PrRd (Read) | PrWr (Write) |
|---------------|-------------|--------------|
| I | Issue BusRd. Transition to S (or E if no other cache has it). | Issue BusRdX. Transition to M. |
| S | Read locally. Stay in S. | Issue BusUpgr. Transition to M. Other caches invalidate. |
| E | Read locally. Stay in E. | Write locally. Transition to M. No bus transaction needed. |
| M | Read locally. Stay in M. | Write locally. Stay in M. |

**Transitions on bus actions:**

| Current State | BusRd (Other read) | BusRdX (Other write) | BusUpgr (Other upgrade) |
|---------------|-------------------|---------------------|------------------------|
| I | Stay in I. | Stay in I. | Stay in I. |
| S | Stay in S. Supply data if needed. | Transition to I. | Transition to I. |
| E | Transition to S. Supply data. | Transition to I. | Transition to I. |
| M | Transition to S. Write back to memory. Supply data. | Transition to I. Write back to memory. | (Not possible, M is exclusive) |

**MESI optimizations:**

1. **Silent evictions:** If a line is in E or S state and is evicted, no writeback is needed because memory is up-to-date. Only M-state lines require writeback on eviction.

2. **Cache-to-cache transfers:** When a cache needs data that is in another cache's M or E state, the data is transferred directly from the owning cache, bypassing memory. This is faster than reading from memory.

3. **BusUpgr:** When a cache in S state wants to write, it issues BusUpgr (Bus Upgrade) instead of BusRdX. This is a lighter-weight transaction that only invalidates other caches without fetching data from memory.

**MESIF (Forward):**

MESIF adds an F (Forward) state. When a line is in Shared state, one of the sharers is designated as the "forwarder." If a new cache wants to read the line, the forwarder supplies the data rather than memory. This reduces memory traffic.

- **F (Forward):** The line is clean and shared, but this cache is responsible for forwarding the data to new readers.
- When a new cache reads a Shared line, the forwarder supplies the data and transitions to S. The new cache becomes the forwarder (or memory supplies if no forwarder is designated).

MESIF is used in Intel processors to reduce the load on the memory controller.

**MOESI (Owned):**

MOESI adds an O (Owned) state. A line in O is dirty and shared. One cache owns the dirty copy and supplies it to other caches, while memory remains stale. This avoids writebacks when a cache in M state transitions to S.

- **O (Owned):** The line is dirty and shared. This cache is responsible for supplying the data to other caches. Memory is stale.
- When a cache in M state receives a BusRd, it transitions to O instead of S. It retains the dirty copy and supplies it to future readers.

MOESI is used in AMD processors (e.g., Opteron, EPYC) to reduce memory traffic.

**Coherence traffic analysis:**

Consider three caches (P1, P2, P3) and a memory block initially in memory. The sequence:
```
P1: Read A    # P1 gets A in E state. No other cache has it.
P2: Read A    # P2 gets A in S state. P1 transitions to S.
P3: Read A    # P3 gets A in S state. Memory or P1/P2 supplies.
P2: Write A   # P2 issues BusUpgr. P1 and P3 invalidate. P2 gets M.
P1: Read A    # P1 issues BusRd. P2 supplies data, transitions to O (MOESI) or S (MESI). P1 gets S.
```

The coherence traffic for this sequence includes: 1 BusRd, 1 BusUpgr, 1 BusRd. With MESI, the last BusRd causes a writeback to memory (if P2 transitions to S). With MOESI, no writeback is needed because P2 transitions to O and retains the dirty copy.

#### Key concepts
- MESI states: Modified, Exclusive, Shared, Invalid
- MESI state transitions on processor actions (PrRd, PrWr)
- MESI state transitions on bus actions (BusRd, BusRdX, BusUpgr)
- Silent evictions for E and S states
- Cache-to-cache transfers
- BusUpgr for S→M transitions
- MESIF: Forward state for reducing memory traffic
- MOESI: Owned state for reducing writebacks
- Coherence traffic analysis for memory access patterns
- Comparison of MESI, MESIF, and MOESI

#### Hands-on activity
Simulate the MESI protocol for three caches (P1, P2, P3) and memory. Trace the following sequence and show the state of each cache and the bus transactions at each step:
```
P1: Read 0x1000
P2: Read 0x1000
P3: Write 0x1000
P1: Read 0x1000
P2: Write 0x1000
P3: Read 0x1000
```

Show the state transitions (e.g., "P1: I → E on PrRd, BusRd"). Then repeat the simulation with MOESI and show how the Owned state reduces writebacks. Count the total number of bus transactions and writebacks for each protocol and compare.

#### Assessment idea
Ask: "In MESI, why does a transition from E to M not require a bus transaction, while a transition from S to M requires BusUpgr?" Answer: In the E state, the cache knows that no other cache has the line (because it received an exclusive response when it first read the line). Therefore, it can write to the line without notifying anyone. In the S state, multiple caches may have the line. To write to the line, the cache must invalidate all other copies. It does this by issuing BusUpgr (or BusRdX), which tells other caches to invalidate their copies. Without this bus transaction, other caches would continue to read stale data from their S-state copies. The E state is an optimization that avoids unnecessary bus transactions for read-then-write sequences. Then ask: "Why does MOESI reduce memory traffic compared to MESI for workloads with frequent read-sharing of modified data?" Answer: In MESI, when a cache in M state receives a BusRd (another cache wants to read), it transitions to S and writes the data back to memory. If another cache later wants to read the same data, it fetches from memory. In MOESI, when a cache in M state receives a BusRd, it transitions to O (Owned) instead of S. The O state means the cache retains the dirty copy and is responsible for supplying it to future readers. Memory remains stale. If another cache wants to read the data, the O-state cache supplies it directly, bypassing memory. This avoids a writeback to memory and a subsequent read from memory, saving two memory transactions. MOESI is particularly beneficial for workloads where data is frequently read by multiple caches after being modified, such as database workloads or shared data structures.

#### AI generation note
Create a 10-minute animated lesson. Show the MESI states as colored tags on books: M (red, modified), E (blue, exclusive), S (green, shared), I (gray, invalid). Show state transitions as the tags changing color based on events. Show a read as a person borrowing a book. Show a write as a person annotating a book. Show BusRd as a request to borrow. Show BusRdX as a request to take exclusive ownership. Show BusUpgr as a request to upgrade from shared to exclusive. Show MESIF as a designated library assistant who forwards books. Show MOESI as a person who keeps the annotated copy and shares it with others. Show the bus as a conveyor belt carrying requests. Show memory as a master copy in the archive. Show writebacks as returning annotated books to the archive. Include the state transition simulation. End with a reflection: "Which coherence protocol is best for a system with 64 cores sharing a large L3 cache?"

---

### Chapter 11.3 — Memory Consistency in Multiprocessors

#### Learning objectives
- Explain the memory consistency problem in multiprocessors and why it is harder than uniprocessor consistency.
- Implement sequential consistency and understand its limitations.
- Describe relaxed consistency models and the role of memory fences.
- Analyze the performance of different consistency models on parallel workloads.

#### Detailed lesson content

Memory consistency in multiprocessors is more complex than in uniprocessors because multiple processors can access memory simultaneously. The consistency model must specify how memory operations from different processors interleave.

**The multiprocessor consistency problem:**

Consider two processors:
```
P1: S1: A = 1
    S2: B = 1

P2: L1: R1 = B
    L2: R2 = A
```

Under sequential consistency, P2 must see R1 = 1 and R2 = 1, or R1 = 0 and R2 = 0, or R1 = 0 and R2 = 1. But it must never see R1 = 1 and R2 = 0, because that would mean S2 is visible before S1, violating program order.

However, in hardware with write buffers and out-of-order execution, S2 might become visible to P2 before S1. This violates sequential consistency unless the hardware prevents it.

**Implementing sequential consistency in multiprocessors:**

To implement SC, the hardware must:
1. Ensure that each processor's memory operations are executed in program order.
2. Ensure that all processors see the same interleaving of memory operations.

This requires:
- **Stalling the pipeline:** A store cannot be issued until all previous loads and stores are complete. A load cannot be issued until all previous stores are complete.
- **Flushing write buffers:** Stores must be written to memory (or made visible to other processors) before subsequent loads are issued.
- **Preventing cache bypassing:** A load cannot read from a cache or write buffer until all previous stores have been committed.

These restrictions severely limit performance. In a multiprocessor, the latency of a store is the time to broadcast the invalidation to all other caches, which can be tens of cycles. If the processor must stall for every store, performance is drastically reduced.

**Relaxed consistency models for multiprocessors:**

Because SC is too expensive, multiprocessors use weaker models. The most common models are:

1. **Processor Consistency (PC):** Similar to TSO. Stores are ordered with respect to each other, and loads are ordered with respect to each other. A load can bypass a previous store to a different address.

2. **Weak Ordering:** Synchronization operations (fences, locks) are used to enforce ordering. Ordinary loads and stores can be reordered freely. The programmer must insert synchronization to ensure consistency.

3. **Release Consistency:** Divides synchronization into acquire and release operations. An acquire ensures that all previous loads and stores are complete before subsequent operations. A release ensures that all previous operations are complete before the release is visible.

4. **Lazy Release Consistency:** Delays the propagation of updates until an acquire is performed. This reduces coherence traffic but requires more complex hardware or software.

**Memory fences in multiprocessors:**

Fences are critical for multiprocessor synchronization. Common fence types:
- **Store fence (SFENCE):** Ensures all stores are complete before subsequent stores.
- **Load fence (LFENCE):** Ensures all loads are complete before subsequent loads.
- **Memory fence (MFENCE):** Ensures all previous loads and stores are complete before subsequent loads and stores.
- **Acquire fence:** Ensures all previous loads and stores are complete before subsequent operations (used with lock acquire).
- **Release fence:** Ensures all previous operations are complete before the release is visible (used with lock release).

**Performance implications:**

Stronger consistency models (SC, PC) have lower performance because they require more stalling and less reordering. Weaker models (weak ordering, release consistency) have higher performance but require the programmer to insert fences correctly. Incorrect fence placement can lead to subtle bugs that are difficult to debug.

**Example: Dekker's algorithm:**

Dekker's algorithm is a classic mutual exclusion algorithm that relies on memory ordering:
```
P1: flag1 = 1
    if (flag2 == 0) critical_section();

P2: flag2 = 1
    if (flag1 == 0) critical_section();
```

Under SC, this algorithm works. Under TSO, it works because stores are ordered. Under weak ordering, it may fail because the stores to flag1 and flag2 might be reordered with the subsequent loads. Fences are required:
```
P1: flag1 = 1
    fence
    if (flag2 == 0) critical_section();
```

#### Key concepts
- Multiprocessor consistency problem: ordering of operations across processors
- Sequential consistency in multiprocessors: high implementation cost
- SC implementation: stall pipeline, flush write buffers, prevent cache bypassing
- Relaxed models: Processor Consistency, Weak Ordering, Release Consistency
- Acquire and release semantics
- Memory fences: SFENCE, LFENCE, MFENCE, acquire fence, release fence
- Performance vs. correctness trade-off
- Dekker's algorithm and memory ordering requirements
- Fence placement and subtle bugs

#### Hands-on activity
Write a simple program that demonstrates the memory consistency problem on a real multiprocessor. Use two threads and two shared variables. Thread 1 writes to A then B. Thread 2 reads B then A. Run the program many times and check if the outcome R1=1 and R2=0 ever occurs. If it does, your processor has a weak memory model. Then, insert memory fences (e.g., `std::atomic_thread_fence` in C++ or `__sync_synchronize` in GCC) between the writes and reads and verify that the forbidden outcome no longer occurs. Measure the performance with and without fences. Discuss the overhead of fences.

#### Assessment idea
Ask: "Why is sequential consistency much harder to implement in a multiprocessor than in a uniprocessor?" Answer: In a uniprocessor, sequential consistency can be maintained by ensuring that each processor's own operations are executed in program order. The processor can use a write buffer and cache as long as they preserve the appearance of program order to that processor. In a multiprocessor, sequential consistency requires that all processors see the same global order of all memory operations. This means that when one processor writes to a location, all other processors must see the write in the same order. The hardware must: (1) prevent stores from being reordered with other stores or loads; (2) ensure that stores become visible to all processors in program order; (3) prevent loads from reading stale values from other processors. This requires stalling the pipeline, flushing write buffers, and broadcasting invalidations, which are extremely expensive in a multiprocessor. This is why virtually all multiprocessors use weaker consistency models and rely on software synchronization. Then ask: "What is the difference between acquire and release semantics in memory consistency, and why are they useful for lock-based synchronization?" Answer: Acquire semantics ensure that all loads and stores before the acquire in program order are completed before any loads or stores after the acquire. This is used when acquiring a lock: the critical section code must not be reordered before the lock acquisition. Release semantics ensure that all loads and stores before the release are completed before the release is visible to other processors. This is used when releasing a lock: all modifications in the critical section must be visible before the lock is released. Acquire and release semantics are useful because they are weaker than full memory fences (which order all operations in both directions). They allow more reordering between independent operations, improving performance while still ensuring correctness for lock-based synchronization. For example, two independent critical sections can have their operations reordered relative to each other as long as the operations within each critical section are properly ordered by the acquire and release.

#### AI generation note
Create a 10-minute animated lesson. Show a multiprocessor as a network of post offices. Show sequential consistency as a rule that all letters must be delivered in the exact order they were sent. Show relaxed consistency as a rule that allows letters to be delivered out of order as long as important letters are synchronized. Show a memory fence as a certified mail service that guarantees delivery order. Show Dekker's algorithm as two people trying to enter a room through different doors. Show the fence as a doorman who ensures that the "I'm entering" sign is posted before the person checks the other door. Show acquire as a "do not enter" sign that is respected by all subsequent visitors. Show release as a "vacancy" sign that is only posted after all work is done. Show performance as the speed of mail delivery. End with a reflection: "Why don't all multiprocessors use sequential consistency?"

---

### Chapter 11.4 — Synchronization and Locking Mechanisms

#### Learning objectives
- Implement basic synchronization primitives: test-and-set, compare-and-swap, and load-linked/store-conditional.
- Understand the difference between spinlocks and mutexes and when to use each.
- Describe cache-aware locking and the problem of lock contention.
- Analyze the performance of different locking mechanisms on multiprocessors.

#### Detailed lesson content

Synchronization is essential for correct parallel programming. Hardware provides atomic instructions that enable the implementation of locks, semaphores, and other synchronization primitives.

**Atomic instructions:**

1. **Test-and-Set (TAS):**
   ```
   TAS(address): 
     old_value = *address
     *address = 1
     return old_value
   ```
   The instruction atomically reads the old value and sets the address to 1. If the old value was 0, the lock was acquired. If it was 1, the lock was already held.

2. **Compare-and-Swap (CAS):**
   ```
   CAS(address, expected, new_value):
     if (*address == expected) {
       *address = new_value
       return true
     } else {
       return false
     }
   ```
   CAS is more powerful than TAS because it allows the programmer to specify both the expected and new values. It is used in lock-free data structures.

3. **Load-Linked/Store-Conditional (LL/SC):**
   ```
   LL(address): return *address
   SC(address, value):
     if (address has not been modified since LL) {
       *address = value
       return true
     } else {
       return false
     }
   ```
   LL/SC is used in RISC architectures (MIPS, ARM, PowerPC, RISC-V). It provides a way to implement atomic operations without a dedicated CAS instruction. The processor monitors the address between LL and SC. If another processor writes to the address, SC fails.

**Spinlocks vs. mutexes:**

- **Spinlock:** A thread that fails to acquire the lock "spins" (busy-waits) in a loop, repeatedly checking the lock. Spinlocks are efficient when the lock is held for a short time because they avoid the overhead of context switching. However, they waste CPU cycles and power when the lock is held for a long time.
- **Mutex:** A thread that fails to acquire the lock is blocked (descheduled) and placed in a wait queue. The OS schedules another thread. Mutexes are efficient when the lock is held for a long time because they do not waste CPU cycles. However, they have higher overhead due to context switching.

**Cache-aware locking:**

When multiple processors contend for the same lock, the lock variable bounces between caches, causing high coherence traffic. This is called **lock contention**.

Techniques to reduce contention:
1. **Test-and-test-and-set:** Instead of using TAS immediately, the processor first reads the lock variable. If it is 1 (locked), it spins on the read without issuing TAS. Only when the read shows 0 does it issue TAS. This reduces coherence traffic because the read does not require ownership of the cache line.

2. **Backoff strategies:** When a lock acquisition fails, the processor waits for a random or exponential time before retrying. This reduces the probability of multiple processors trying to acquire the lock simultaneously.

3. **Ticket locks:** Each requester gets a ticket number. The lock is granted in ticket order. This ensures fairness and reduces contention.

4. **MCS locks:** A linked-list-based lock where each waiting processor spins on a local variable. This eliminates cache line bouncing because each processor spins on its own cache line.

**Lock granularity:**
- **Coarse-grained locks:** One lock protects a large data structure. Simple but limits parallelism.
- **Fine-grained locks:** Multiple locks protect different parts of a data structure. More complex but allows more parallelism.
- **Lock-free data structures:** No locks are used. Instead, CAS or LL/SC is used to update data structures atomically. More complex but avoids lock contention entirely.

#### Key concepts
- Atomic instructions: TAS, CAS, LL/SC
- Test-and-set and compare-and-swap semantics
- Load-linked/store-conditional in RISC architectures
- Spinlocks: busy-waiting, efficient for short critical sections
- Mutexes: blocking, efficient for long critical sections
- Lock contention and cache line bouncing
- Test-and-test-and-set to reduce coherence traffic
- Backoff strategies: random, exponential
- Ticket locks and MCS locks for fairness and reduced contention
- Lock granularity: coarse-grained, fine-grained, lock-free

#### Hands-on activity
Implement a spinlock using test-and-set in C or assembly. Measure the time to acquire and release the lock 1 million times on a single core. Then, run the same test with 2, 4, and 8 threads contending for the same lock. Measure the total time and calculate the throughput (lock acquisitions per second). Implement the test-and-test-and-set optimization and measure the improvement. Then, implement a ticket lock and compare its performance with the simple spinlock. Plot the throughput vs. number of threads for each lock type. Discuss the impact of cache line bouncing on performance.

#### Assessment idea
Ask: "Why is test-and-test-and-set more efficient than test-and-set on a multiprocessor with a cache coherence protocol?" Answer: In test-and-set, every attempt to acquire the lock issues a TAS instruction, which requires exclusive ownership of the cache line containing the lock. When multiple processors are contending for the lock, the cache line bounces between their caches, causing significant coherence traffic (BusRdX and invalidate messages). In test-and-test-and-set, the processor first reads the lock variable (a shared read that does not require exclusive ownership). If the lock is already held, the processor spins on the local read without generating coherence traffic. Only when the read shows that the lock is free does the processor issue TAS. This dramatically reduces the number of TAS instructions and the associated coherence traffic. The read-only spinning is much cheaper because the cache line can remain in Shared state in multiple caches. Then ask: "Why do MCS locks eliminate cache line bouncing, and what is the trade-off compared to simple spinlocks?" Answer: MCS locks maintain a linked list of waiting processors. Each waiting processor spins on a local variable (in its own cache line) rather than on the global lock variable. When the lock is released, the owner notifies only the next processor in the list. This eliminates cache line bouncing because each processor spins on a different cache line, and the lock handoff is point-to-point rather than broadcast. The trade-off is increased complexity and memory overhead: the MCS lock requires more memory to store the linked list nodes, and the lock acquisition/release involves pointer updates. Additionally, MCS locks have higher latency for lock acquisition because the processor must enqueue itself in the list and wait for the previous owner to point to it. However, for high-contention scenarios, MCS locks provide much better scalability than simple spinlocks.

#### AI generation note
Create a 10-minute animated lesson. Show a lock as a key to a room. Show TAS as a person grabbing the key atomically. Show cache line bouncing as the key being thrown back and forth between people. Show test-and-test-and-set as a person looking through a window before trying the door. Show spinlocks as people waiting outside a room, repeatedly checking if it's empty. Show mutexes as people taking a number and waiting in a lounge. Show ticket locks as a numbered queue system. Show MCS locks as a chain of people where each person taps the next when they're done. Show lock granularity as the size of the room: a big room (coarse lock) vs. many small rooms (fine locks). Show lock-free as a self-organizing system where no one needs a key. End with a reflection: "What is the best locking strategy for a high-contention data structure?"

---

### Chapter 11.5 — Directory Protocols and Scalability

#### Learning objectives
- Describe the directory protocol operation in detail: read, write, and upgrade requests.
- Understand the directory entry format and how it tracks sharers and owners.
- Analyze the scalability of directory protocols vs. snooping protocols.
- Implement a simple directory protocol simulation.

#### Detailed lesson content

Directory protocols are essential for scaling cache coherence to large systems. This chapter provides a detailed analysis of directory operation.

**Directory entry format:**

For each memory block, the directory stores:
- **State:** Uncached, Shared, Modified (or Exclusive).
- **Sharers:** A bit vector or list of caches that have the block in Shared state.
- **Owner:** The cache that has the block in Modified state. If the block is in Shared state, the owner is the memory controller.
- **Pending:** A flag indicating whether a request is currently being processed for this block.

**Directory protocol messages:**

1. **Read Request (RdReq):** Sent by a cache to the directory when it wants to read a block.
2. **Write Request (WrReq):** Sent by a cache to the directory when it wants to write to a block.
3. **Upgrade Request (UpgReq):** Sent by a cache in Shared state to the directory when it wants to write to the block.
4. **Data Reply (DReply):** Sent by the owner or memory to the requester with the data.
5. **Invalidation (Inv):** Sent by the directory to sharers to invalidate their copies.
6. **Acknowledgment (Ack):** Sent by a cache to the directory to confirm an invalidation or data receipt.
7. **Writeback (WB):** Sent by a cache to memory when it evicts a Modified block.

**Read request handling:**

When the directory receives a RdReq:
- **Uncached:** Forward to memory. Directory updates state to Shared and adds requester to sharers.
- **Shared:** Forward to one of the sharers or memory. Add requester to sharers.
- **Modified:** Forward to owner. Owner supplies data and transitions to Shared. Directory updates sharers to include owner and requester.

**Write request handling:**

When the directory receives a WrReq:
- **Uncached:** Forward to memory. Directory updates state to Modified and sets owner to requester.
- **Shared:** Send invalidations to all sharers. Wait for acknowledgments. Directory updates state to Modified and sets owner to requester.
- **Modified:** Forward to owner. Owner supplies data and invalidates its copy. Directory updates owner to requester.

**Upgrade request handling:**

When the directory receives an UpgReq from a cache in Shared state:
- Send invalidations to all other sharers (not the requester).
- Wait for acknowledgments.
- Directory updates state to Modified and sets owner to requester.
- No data transfer needed because the requester already has the data.

**Directory latency:**

A directory request involves multiple message hops:
- RdReq to directory: 1 hop
- Directory to owner/memory: 1 hop
- Owner/memory to requester: 1 hop
- Total: 3 hops (plus acknowledgments for invalidations)

For comparison, a snooping request involves:
- Broadcast to all caches: 1 hop (but must wait for all responses)
- Total: 1 hop + arbitration delay

For small systems, snooping is faster. For large systems, the broadcast delay dominates, and directory protocols become faster.

**Scalability analysis:**

For a system with N cores:
- **Snooping traffic:** O(N) per request (broadcast to all caches).
- **Directory traffic:** O(1) for uncached/modified blocks, O(S) for shared blocks (where S is the number of sharers). With limited pointers, this is O(1) or O(P) where P is the pointer limit.
- **Directory storage:** O(N × M) where M is the number of memory blocks. With compression, this can be reduced.

For N > 16, directory protocols typically have lower latency and bandwidth than snooping protocols.

#### Key concepts
- Directory protocol messages: RdReq, WrReq, UpgReq, DReply, Inv, Ack, WB
- Directory entry: state, sharers, owner, pending
- Read request handling: uncached, shared, modified
- Write request handling: uncached, shared, modified
- Upgrade request handling: shared → modified
- Directory latency: 3 hops vs. snooping 1 hop + arbitration
- Scalability analysis: O(N) snooping vs. O(1) or O(P) directory
- Message counts and bandwidth comparison
- Directory storage requirements

#### Hands-on activity
Implement a directory protocol simulator in Python. The simulator should support 4 caches and a directory with 8 memory blocks. Each directory entry has: state (Uncached, Shared, Modified), sharer list (4 bits), and owner (2 bits). Simulate the following sequence:
```
P1: Read 0
P2: Read 0
P3: Write 0
P1: Read 0
P4: Write 0
P2: Read 0
```

Show the directory state after each step. Show all messages sent between caches and the directory. Count the total number of messages. Compare with a snooping protocol for the same sequence. Discuss the trade-offs in terms of message count and latency. Then, simulate a scenario where the sharer list overflows (e.g., all 4 caches have block 0 in Shared state, and a fifth cache wants to read). Show how the directory handles this (it must either broadcast or use a fallback mechanism).

#### Assessment idea
Ask: "Why does a directory protocol require 3 hops for a read miss to a modified block, while a snooping protocol requires only 1 hop (broadcast)?" Answer: In a directory protocol, the read miss request must first go to the directory (1 hop). The directory looks up the owner and forwards the request to the owner (2nd hop). The owner then sends the data directly to the requester (3rd hop). In a snooping protocol, the read miss is broadcast to all caches and memory simultaneously (1 hop). The owner responds directly. The snooping protocol is faster for this case because it avoids the directory lookup. However, the broadcast consumes bandwidth from all caches, and the arbitration delay increases with the number of caches. For large systems, the directory protocol's 3-hop latency is lower than the snooping protocol's broadcast delay plus arbitration. The directory also uses less bandwidth because messages are point-to-point rather than broadcast. Then ask: "How does a directory protocol handle a situation where the sharer list is full (all pointers are used) and a new cache wants to read a shared block?" Answer: When the sharer list is full, the directory has several options: (1) broadcast the read request to all caches (falling back to snooping behavior); (2) evict one of the existing sharers from the list and send an invalidation to it (reducing the number of sharers); (3) use a coarse bit vector where each bit represents a group of caches, and broadcast to the group; (4) transition the block to a "broadcast" state where all future requests are broadcast. The choice depends on the protocol design. Broadcasting is the simplest but increases bandwidth. Invalidating a sharer reduces sharing but may cause future misses. Coarse bit vectors provide a balance. This is a design trade-off in directory protocols: limited pointers reduce storage but may require occasional broadcasts.

#### AI generation note
Create a 10-minute animated lesson. Show the directory as a central post office. Show a read request as a letter to the post office. Show the post office forwarding the letter to the owner. Show the owner sending the package directly to the requester. Show a snooping protocol as a town crier who shouts the request to everyone. Show the 3-hop directory as a more organized but slower process for small towns. Show the snooping broadcast as a chaotic but fast process for small towns. Show scalability as the town growing: the crier's voice doesn't reach everyone, but the post office adds more mail carriers. Show the sharer list as a mailing list with a maximum number of entries. Show overflow as the post office sending a general delivery notice. Show the directory state as a ledger that tracks who has which package. Include the directory simulation. End with a reflection: "What is the optimal number of sharer pointers for a 64-core system?"

---

### Chapter 11.6 — Memory Ordering and Fences

#### learning objectives
- Explain the different types of memory fences and their effects on instruction reordering.
- Implement correct synchronization using memory fences in C/C++ (std::atomic).
- Understand the C++ memory model: sequential consistency, acquire-release, and relaxed.
- Analyze the performance impact of different memory ordering constraints.

#### Detailed lesson content

Modern programming languages provide memory ordering abstractions that map to hardware fences. This chapter explores the C++ memory model and its relationship to hardware.

**C++ memory model:**

C++11 introduced a standard memory model for concurrent programming. It defines several memory ordering constraints:

1. **memory_order_seq_cst (Sequential Consistency):** The strongest ordering. All operations are ordered in a single global sequence. This is the default for `std::atomic` operations. Maps to full fences on weak hardware (MFENCE on x86, DMB on ARM).

2. **memory_order_acquire:** Ensures that all loads and stores after the acquire in program order are not reordered before the acquire. Used with lock acquisition. Maps to load fence or acquire fence.

3. **memory_order_release:** Ensures that all loads and stores before the release in program order are not reordered after the release. Used with lock release. Maps to store fence or release fence.

4. **memory_order_acq_rel:** Combines acquire and release semantics. Used with read-modify-write operations (e.g., CAS).

5. **memory_order_relaxed:** No ordering constraints. Only atomicity is guaranteed. Used for counters and flags where ordering does not matter. Maps to no fence on most hardware.

6. **memory_order_consume:** Similar to acquire but only applies to operations that are data-dependent on the loaded value. Rarely used because it is difficult to implement correctly.

**Mapping C++ memory orders to hardware:**

| C++ Order | x86 | ARM | RISC-V |
|-----------|-----|-----|--------|
| seq_cst | MFENCE (or LOCK prefix) | DMB ISH | fence rw, rw |
| acquire | (no fence needed) | DMB ISHLD | fence r, rw |
| release | (no fence needed) | DMB ISH | fence rw, w |
| acq_rel | (no fence needed) | DMB ISH | fence rw, rw |
| relaxed | (no fence) | (no fence) | (no fence) |

Note: x86's TSO is strong enough that acquire and release do not require additional fences. The compiler must only prevent compiler reordering (using compiler barriers). ARM and RISC-V require hardware fences for acquire and release.

**Performance impact:**

The performance of atomic operations depends on the memory order:
- **Relaxed:** Fastest. No fences. On x86, a relaxed atomic load is just a regular load. On ARM, it is also a regular load.
- **Acquire/Release:** Moderate. On x86, no hardware fence (but compiler barrier). On ARM, requires DMB.
- **Seq_cst:** Slowest. Requires full hardware fence on all architectures.

For example, on ARM, a `memory_order_seq_cst` operation requires a DMB (Data Memory Barrier), which can stall the pipeline for 10–20 cycles. A `memory_order_relaxed` operation has no overhead.

**Correct synchronization with fences:**

Example: Producer-consumer with a flag.
```cpp
// Producer
std::atomic<int> data(0);
std::atomic<bool> ready(false);

void producer() {
    data.store(42, std::memory_order_relaxed);
    ready.store(true, std::memory_order_release);  // Release fence
}

void consumer() {
    while (!ready.load(std::memory_order_acquire)) {}  // Acquire fence
    int value = data.load(std::memory_order_relaxed);
    // value is guaranteed to be 42
}
```

The release ensures that the store to `data` is visible before the store to `ready`. The acquire ensures that the load of `data` is not reordered before the load of `ready`. This guarantees that the consumer sees `value = 42`.

Without fences (using `memory_order_relaxed` for all operations), the compiler and hardware could reorder the stores in the producer or the loads in the consumer, and the consumer might see `value = 0`.

#### Key concepts
- C++ memory model: seq_cst, acquire, release, acq_rel, relaxed, consume
- Mapping C++ orders to hardware fences
- x86 TSO: acquire/release need no hardware fence
- ARM: acquire/release require DMB
- RISC-V: acquire/release require fence instructions
- Performance impact of memory orders: relaxed < acquire/release < seq_cst
- Producer-consumer synchronization with acquire/release
- Correct synchronization patterns and common mistakes
- Compiler barriers vs. hardware fences

#### Hands-on activity
Write a C++ program that implements a simple spinlock using `std::atomic` and different memory orders. Implement three versions:
1. `memory_order_seq_cst` for all operations.
2. `memory_order_acquire` for lock, `memory_order_release` for unlock.
3. `memory_order_relaxed` for all operations (incorrect, but measure anyway).

Measure the time to acquire and release the lock 1 million times with 4 threads contending. Compare the performance of the three versions. Discuss why version 2 is correct and faster than version 1, and why version 3 is incorrect. Then, implement a producer-consumer queue using `std::atomic` with acquire/release semantics and verify correctness.

#### Assessment idea
Ask: "Why does `memory_order_acquire` not require a hardware fence on x86 but requires a DMB on ARM?" Answer: x86 implements Total Store Order (TSO), which guarantees that loads are ordered with respect to each other and stores are ordered with respect to each other. A load with acquire semantics cannot be reordered with subsequent loads or stores on x86 because TSO already prohibits such reorderings. Therefore, the compiler only needs to insert a compiler barrier (preventing compiler reordering) without a hardware fence. On ARM, which implements a weak memory model, loads can be reordered with other loads and stores. A `memory_order_acquire` operation requires a DMB (Data Memory Barrier) to ensure that subsequent loads and stores are not reordered before the acquire. This is why atomic operations on ARM are generally more expensive than on x86 for acquire/release semantics. The x86 TSO model provides stronger ordering by default, which simplifies synchronization but can limit performance for certain workloads. Then ask: "What is the difference between a compiler barrier and a hardware fence, and why are both needed for correct synchronization?" Answer: A compiler barrier prevents the compiler from reordering instructions across the barrier. It does not emit any hardware instructions; it simply tells the compiler not to reorder loads and stores. A hardware fence prevents the processor (and memory system) from reordering instructions across the barrier. It emits actual hardware instructions (e.g., MFENCE, DMB). Both are needed because reordering can happen at two levels: the compiler may reorder instructions during optimization, and the hardware may reorder instructions at runtime for performance. A compiler barrier alone is not sufficient on weak memory model hardware because the hardware may still reorder instructions. A hardware fence alone is not sufficient because the compiler may reorder instructions before the fence is even emitted. For example, on x86, `memory_order_acquire` requires a compiler barrier but no hardware fence because x86 TSO already prevents the hardware reordering. On ARM, `memory_order_acquire` requires both a compiler barrier and a DMB hardware fence.

#### AI generation note
Create a 10-minute animated lesson. Show the C++ memory model as a set of rules for a relay race. Show sequential consistency as a rule that all runners must stay in their lanes in exact order. Show acquire as a rule that a runner cannot pass the baton backward. Show release as a rule that a runner must finish before handing off the baton. Show relaxed as a free-for-all race with no rules. Show x86 as a strict race organizer who already enforces many rules. Show ARM as a lenient organizer who needs extra referees (fences). Show compiler barriers as coaches who tell runners not to switch lanes. Show hardware fences as referees who physically prevent lane switching. Show the producer-consumer as a baton pass between two teams. Show the performance impact as the race time with different rule sets. End with a reflection: "Why is relaxed memory ordering used for atomic counters?"

---

### Chapter 11.7 — Performance Analysis of Parallel Programs

#### learning objectives
- Calculate speedup, efficiency, and scalability for parallel programs.
- Understand Amdahl's Law and Gustafson's Law and their implications for parallel computing.
- Measure the performance of parallel programs using profiling tools.
- Identify bottlenecks in parallel programs: load imbalance, synchronization overhead, and communication overhead.

#### Detailed lesson content

Performance analysis of parallel programs requires understanding how well the program scales with the number of processors and identifying the factors that limit scalability.

**Speedup, efficiency, and scalability:**

- **Speedup (S):** The ratio of sequential execution time to parallel execution time. S = T1 / Tp.
- **Efficiency (E):** Speedup divided by the number of processors. E = S / P = T1 / (P × Tp).
- **Scalability:** The ability of a program to maintain efficiency as the number of processors increases.

Ideal speedup is linear: S = P. In practice, speedup is sublinear due to overhead.

**Amdahl's Law:**

Amdahl's Law states that the speedup is limited by the serial fraction of the program:
```
S = 1 / (f + (1-f)/P)
```
Where f is the serial fraction and P is the number of processors.

For example, if f = 0.1 (10% serial) and P = 64:
```
S = 1 / (0.1 + 0.9/64) = 1 / (0.1 + 0.014) = 1 / 0.114 = 8.77×
```

Even with 64 processors, the speedup is only 8.77× because the serial portion limits the maximum speedup to 1 / 0.1 = 10×.

**Gustafson's Law:**

Gustafson's Law challenges Amdahl's Law by assuming that the problem size scales with the number of processors. If the parallel portion grows with P while the serial portion stays constant:
```
S = P - f × (P - 1)
```

For example, if f = 0.1 and P = 64:
```
S = 64 - 0.1 × 63 = 64 - 6.3 = 57.7×
```

Gustafson's Law suggests that large parallel systems can achieve near-linear speedup if the problem size is scaled appropriately. This is the basis for weak scaling studies.

**Strong scaling vs. weak scaling:**
- **Strong scaling:** Fixed problem size, increasing number of processors. Speedup is limited by Amdahl's Law.
- **Weak scaling:** Problem size increases proportionally with the number of processors. Speedup is governed by Gustafson's Law.

**Bottlenecks in parallel programs:**

1. **Load imbalance:** Some processors have more work than others. Causes: uneven data distribution, dynamic workloads, communication delays.
   - Solution: Dynamic scheduling, work stealing, better data partitioning.

2. **Synchronization overhead:** Time spent waiting for locks, barriers, or other synchronization primitives. Causes: fine-grained locking, frequent barriers, contention.
   - Solution: Coarse-grained locking, lock-free data structures, reducing synchronization frequency.

3. **Communication overhead:** Time spent sending data between processors. In shared-memory systems, this is cache coherence traffic. In distributed-memory systems, this is message passing.
   - Solution: Minimize sharing, use local data, reduce message size, overlap communication with computation.

4. **Memory bandwidth:** The memory system cannot supply data fast enough for all processors.
   - Solution: Increase cache locality, use cache blocking, reduce memory traffic.

5. **Sequential bottlenecks:** Parts of the program that cannot be parallelized.
   - Solution: Algorithmic changes, better parallelization, overlapping sequential and parallel work.

**Profiling parallel programs:**

Tools for profiling parallel programs:
- **Intel VTune:** Profiles CPU, memory, and threading performance. Shows hotspots, lock contention, and cache misses.
- **Linux perf:** Low-overhead profiling. Shows CPU cycles, cache misses, branch mispredictions.
- **HPCToolkit:** HPC-focused profiling. Shows parallel speedup, load imbalance, and communication overhead.
- **MPI profiling:** Tools like Scalasca and TAU profile MPI communication patterns.

**Roofline model for parallel programs:**

The roofline model can be extended to parallel programs by considering the aggregate memory bandwidth and compute capacity of all processors. The model helps identify whether a parallel program is compute-bound, memory-bound, or communication-bound.

#### Key concepts
- Speedup, efficiency, and scalability definitions
- Amdahl's Law: speedup limited by serial fraction
- Gustafson's Law: speedup with scaled problem size
- Strong scaling vs. weak scaling
- Load imbalance and solutions
- Synchronization overhead and solutions
- Communication overhead and solutions
- Memory bandwidth bottleneck
- Sequential bottlenecks and algorithmic changes
- Profiling tools: VTune, perf, HPCToolkit, Scalasca, TAU
- Roofline model for parallel programs

#### Hands-on activity
Write a parallel program (e.g., matrix multiplication, parallel reduction, or a parallel sorting algorithm) using OpenMP or pthreads. Measure the execution time for 1, 2, 4, 8, and 16 threads. Calculate the speedup and efficiency for each thread count. Plot speedup vs. thread count and identify where the speedup deviates from linear. Use a profiling tool (e.g., `perf`, Intel VTune, or GNU gprof) to identify the bottleneck: load imbalance, synchronization overhead, or memory bandwidth. Discuss how you would optimize the program to improve scalability. If you don't have access to a multi-core system, describe the expected results and the optimization strategies.

#### Assessment idea
Ask: "A program has a serial fraction of 5%. According to Amdahl's Law, what is the maximum speedup with 100 processors, and what is the efficiency?" Answer: Speedup = 1 / (0.05 + 0.95/100) = 1 / (0.05 + 0.0095) = 1 / 0.0595 = 16.8×. Efficiency = 16.8 / 100 = 16.8%. The efficiency is very low because most processors are idle waiting for the serial portion. This demonstrates that even a small serial fraction severely limits scalability. Then ask: "What is the difference between strong scaling and weak scaling, and why might a program show good weak scaling but poor strong scaling?" Answer: Strong scaling measures speedup for a fixed problem size as the number of processors increases. It is limited by Amdahl's Law: the serial fraction becomes a bottleneck as more processors are added. Weak scaling measures the time to solve a problem whose size increases proportionally with the number of processors. It is governed by Gustafson's Law: if the parallel work scales with P while the serial work remains constant, the speedup can be near-linear. A program might show good weak scaling but poor strong scaling because: (1) the communication overhead per processor decreases as the problem size increases (each processor has more local work relative to communication); (2) the memory bandwidth per processor is sufficient for larger local problems; (3) the load imbalance is reduced when each processor has more work. However, for strong scaling, the problem size is fixed, so adding more processors means each processor has less work, and the overhead (communication, synchronization) becomes a larger fraction of the total time. Strong scaling is harder to achieve and is the ultimate test of a parallel program's efficiency.

#### AI generation note
Create a 10-minute animated lesson. Show Amdahl's Law as a race car with a trailer. The trailer is the serial portion that cannot be speeded up. No matter how many engines you add to the car, the trailer limits the speed. Show Gustafson's Law as a train that adds more cars as you add more engines. The speedup is nearly linear because the load scales with the power. Show strong scaling as a fixed-size load being divided among more workers. Show weak scaling as the load growing with the number of workers. Show load imbalance as workers finishing at different times. Show synchronization overhead as workers waiting for a meeting. Show communication overhead as workers passing notes. Show memory bandwidth as a narrow doorway that bottlenecks the workers. Show the roofline model as a ceiling that limits performance. Show profiling tools as detectives that find the bottlenecks. End with a reflection: "What is the most important factor for achieving good strong scaling?"

---

### Chapter 11.8 — Case Studies: Modern Multiprocessors

#### learning objectives
- Describe the architecture of modern multiprocessors: AMD EPYC, Intel Xeon, and ARM Neoverse.
- Compare the cache coherence, memory hierarchy, and interconnect of these processors.
- Understand the design decisions that make each processor family suitable for different workloads.
- Analyze the performance characteristics of these processors on parallel benchmarks.

#### Detailed lesson content

This chapter provides case studies of three modern multiprocessor families that dominate the server and HPC markets.

**AMD EPYC (Zen 4, Genoa):**

- **Cores:** Up to 96 cores per socket (Zen 4c), up to 128 cores (Zen 5c).
- **Chiplets:** 8–12 CCDs (Core Complex Dies), each with 8 cores and 32 MB L3 cache. Plus 1 IOD (I/O Die) for memory and I/O.
- **Cache:** 32 KB L1I, 32 KB L1D per core. 1 MB L2 per core. 32 MB L3 per CCD (shared by 8 cores).
- **Memory:** 12-channel DDR5-4800. Up to 6 TB per socket.
- **Interconnect:** Infinity Fabric (on-package and off-package). Mesh-like topology between CCDs and IOD.
- **Coherence:** Directory-based coherence between CCDs. Snooping within each CCD.
- **I/O:** 128 PCIe 5.0 lanes.
- **Target:** Cloud servers, HPC, virtualization.
- **Strengths:** High core count, large L3 cache, high memory bandwidth, competitive price-performance.

**Intel Xeon (Sapphire Rapids, Emerald Rapids):**

- **Cores:** Up to 64 cores per socket (Sapphire Rapids), up to 128 cores (Emerald Rapids, using E-cores in some models).
- **Tiles:** 4 tiles (Intel's term for chiplets) connected by EMIB (Embedded Multi-die Interconnect Bridge). Each tile has up to 15 cores and 37.5 MB L3 cache.
- **Cache:** 32 KB L1I, 48 KB L1D per core. 2 MB L2 per core. Shared L3 per tile.
- **Memory:** 8-channel DDR5-4800. Up to 4 TB per socket.
- **Interconnect:** Intel UPI (Ultra Path Interconnect) for multi-socket. Mesh interconnect on-die.
- **Coherence:** Directory-based coherence between tiles and sockets. Snooping within tiles.
- **I/O:** 80 PCIe 5.0 lanes.
- **Accelerators:** Integrated AMX (Advanced Matrix Extensions) for AI inference. Data Streaming Accelerator (DSA) for data movement.
- **Target:** Cloud servers, AI inference, enterprise workloads.
- **Strengths:** AI acceleration (AMX), strong single-thread performance, ecosystem compatibility.

**ARM Neoverse (V2, V3, N2):**

- **Cores:** Neoverse V2 (high-performance, 2-wide SVE-256), Neoverse N2 (efficiency, 2-wide SVE-128). Up to 128 cores per socket.
- **Cache:** 64 KB L1I, 64 KB L1D per core. 1 MB L2 per core. Shared L3 (up to 64 MB).
- **Memory:** 8-channel DDR5.
- **Interconnect:** CMN-700 (Coherent Mesh Network) for on-die. CXL for off-die memory expansion.
- **Coherence:** Directory-based coherence via CMN-700.
- **I/O:** PCIe 5.0, CXL 2.0/3.0.
- **Target:** Cloud servers (AWS Graviton, Microsoft Cobalt), HPC (Fugaku successor), edge AI.
- **Strengths:** Power efficiency, SVE vector extensions, CXL memory expansion, growing ecosystem.

**Comparison:**

| Feature | AMD EPYC | Intel Xeon | ARM Neoverse |
|---------|----------|------------|--------------|
| Max cores | 96–128 | 64–128 | 128+ |
| Chiplet/tile design | CCD + IOD | 4 tiles | Monolithic or chiplet |
| L3 cache | 32 MB per CCD | 37.5 MB per tile | Up to 64 MB shared |
| Memory channels | 12 | 8 | 8 |
| Max memory | 6 TB | 4 TB | CXL expandable |
| AI acceleration | No | AMX | SVE |
| Interconnect | Infinity Fabric | UPI + mesh | CMN-700 |
| PCIe lanes | 128 | 80 | 128 |
| Target | General cloud, HPC | AI, enterprise | Cloud, HPC, edge |
| Power efficiency | Good | Moderate | Excellent |

**Performance on parallel benchmarks:**
- **SPEC CPU (rate):** All three achieve high throughput with many cores.
- **HPCG (HPC benchmark):** Memory-bound. EPYC and Neoverse excel due to high memory bandwidth and cache capacity.
- **MLPerf inference:** Intel Xeon with AMX leads for INT8 inference. EPYC and Neoverse compete for FP32/FP16.
- **Database (TPC-C, TPC-H):** EPYC leads for high core count. Intel leads for single-thread latency-sensitive workloads.

#### Key concepts
- AMD EPYC architecture: CCDs, IOD, Infinity Fabric
- Intel Xeon architecture: tiles, EMIB, UPI, AMX
- ARM Neoverse architecture: CMN-700, SVE, CXL
- Cache coherence: directory-based between chiplets/tiles, snooping within
- Memory hierarchy and bandwidth comparison
- Interconnect topologies and bandwidth
- AI acceleration: AMX (Intel), SVE (ARM), none (AMD)
- Target workloads and design philosophies
- Performance characteristics on parallel benchmarks
- Power efficiency comparison

#### Hands-on activity
Research the latest specifications of AMD EPYC 9654, Intel Xeon Platinum 8480+, and AWS Graviton4 (or ARM Neoverse V2). Create a detailed comparison table with: core count, thread count, base/boost frequency, L1/L2/L3 cache sizes, memory channels and bandwidth, TDP, PCIe lanes, process node, and price (if available). Discuss which processor is best suited for: (1) a web server running thousands of concurrent connections, (2) a scientific simulation with heavy floating-point computation, (3) an AI inference server processing image recognition requests, (4) a database server handling transactional workloads. Justify your answers based on the architecture and performance characteristics.

#### Assessment idea
Ask: "Why does AMD EPYC use more memory channels (12) than Intel Xeon (8) per socket, and what advantage does this provide?" Answer: AMD EPYC uses 12 memory channels to provide higher aggregate memory bandwidth per socket. With DDR5-4800, each channel provides ~38.4 GB/s, so 12 channels provide ~460 GB/s per socket. Intel Xeon with 8 channels provides ~307 GB/s. The higher memory bandwidth is critical for AMD's high core count (up to 96 cores) because each core needs sufficient bandwidth to avoid being memory-bound. EPYC's design philosophy prioritizes throughput and memory bandwidth for cloud and HPC workloads. The trade-off is increased pin count and motherboard complexity. Intel's Xeon focuses on single-thread performance and AI acceleration (AMX), which may not require as much raw memory bandwidth. However, for bandwidth-bound workloads (e.g., streaming, large-scale HPC), EPYC's 12 channels provide a significant advantage. Then ask: "What is CXL (Compute Express Link) and why is it important for ARM Neoverse and future server architectures?" Answer: CXL is an open industry standard for high-speed, low-latency interconnect between processors, accelerators, and memory devices. CXL 3.0 supports memory pooling (sharing memory across multiple processors), memory expansion (adding DRAM beyond the processor's native channels), and accelerator attachment. For ARM Neoverse, CXL is important because it allows cloud providers to build flexible memory systems where memory is disaggregated from compute. For example, a server could have processors with small local memory and access a large pool of shared memory via CXL. This enables better memory utilization and allows workloads to scale memory independently of compute. CXL is also important for AI workloads because it allows accelerators (GPUs, TPUs) to access host memory coherently. Intel and AMD are also adopting CXL, but ARM Neoverse has been particularly aggressive in integrating CXL support early.

#### AI generation note
Create a 10-minute animated lesson. Show the three processor families as three different cities. Show AMD EPYC as a city with many neighborhoods (CCDs) and a central hub (IOD). Show Intel Xeon as a city with four districts (tiles) connected by bridges (EMIB). Show ARM Neoverse as a city with a mesh network (CMN-700) and expandable suburbs (CXL). Show memory channels as highways: EPYC has 12 lanes, Xeon has 8. Show cache as storage warehouses: EPYC has distributed warehouses, Xeon has district warehouses, ARM has a central warehouse. Show AI acceleration as a specialized factory: Intel has AMX, ARM has SVE, AMD relies on general cores. Show the interconnect as a transportation network. Show performance benchmarks as productivity reports for each city. End with a reflection: "What is the most important factor for choosing a server processor: core count, memory bandwidth, or specialized acceleration?"

---

## Module 12: Interconnects and Performance Analysis

> **Goal:** Apply all learned concepts to analyze and design a modern processor, and master quantitative performance analysis techniques.

---

### Chapter 12.1 — On-Chip Interconnects and NoC Design

#### learning objectives
- Describe the design of on-chip networks (NoC): routers, links, and virtual channels.
- Understand the trade-offs between mesh, ring, and tree NoC topologies.
- Analyze the latency, throughput, and power of NoC designs.
- Design a simple NoC router and understand its microarchitecture.

#### Detailed lesson content

On-chip networks (NoCs) have become the standard interconnect for multicore and manycore processors. This chapter explores NoC design in detail.

**NoC router microarchitecture:**

A NoC router has the following components:
1. **Input buffers:** Store incoming flits. Each input port has a buffer. Buffer size is typically 4–16 flits.
2. **Route computation unit:** Determines the output port for each packet based on the destination address and the routing algorithm.
3. **Switch allocator:** Arbitrates between packets competing for the same output port. Uses round-robin or priority-based arbitration.
4. **Crossbar:** Connects input ports to output ports. A 5×5 crossbar for a 5-port router (north, south, east, west, local).
5. **Output buffers:** Store outgoing flits (optional, some routers use cut-through buffering).

**Router pipeline:**
A typical router has a 3-stage pipeline:
1. **Buffer Write (BW):** The incoming flit is written to the input buffer.
2. **Route Computation + Switch Allocation (RC/SA):** The route is computed and the switch is allocated.
3. **Switch Traversal + Link Traversal (ST/LT):** The flit traverses the crossbar and the link to the next router.

Some routers use **lookahead routing** to compute the route for the next hop in advance, reducing the pipeline to 2 stages or even 1 stage (for single-flit packets).

**Virtual channels:**

Virtual channels (VCs) provide multiple logical buffers per physical link. They are used for:
- **Deadlock avoidance:** Separating request and reply packets into different VCs prevents protocol-level deadlock.
- **Quality of service:** High-priority traffic can use dedicated VCs.
- **Head-of-line blocking reduction:** If a packet is blocked, other packets in different VCs can still proceed.

A typical router has 2–4 VCs per input port. Each VC has its own buffer and flow control.

**NoC topologies for multicore:**

1. **Ring:** Used in Intel processors (Sandy Bridge to Skylake). Simple, low latency for small systems, but limited bandwidth for large systems.
2. **Mesh:** Used in Intel Xeon Phi, Tilera, and many research processors. Good scalability, regular layout, but higher latency for diagonal communication.
3. **Crossbar:** Used within small clusters (e.g., 4 cores). Provides full bandwidth but scales poorly.
4. **Hierarchical mesh/ring:** Combines rings for local clusters and a mesh for global communication. Used in some research processors.

**NoC design trade-offs:**
- **Latency:** Determined by the number of hops and the router pipeline depth. Mesh: O(√N) hops for N cores. Ring: O(N) hops.
- **Throughput:** Determined by the bisection bandwidth. Mesh: O(√N) links across the bisection. Ring: O(1) link across the bisection.
- **Power:** Determined by the number of routers, links, and buffers. Mesh: more routers but shorter links. Ring: fewer routers but longer links.
- **Area:** Mesh routers are small and regular. Ring routers are simpler but the ring must traverse the entire chip.

**Flow control:**
- **Credit-based flow control:** The sender tracks available buffer space at the receiver. A flit is sent only if the receiver has space. This prevents buffer overflow.
- **On/off flow control:** The receiver sends on/off signals to the sender. Simpler than credit-based but less efficient.

**NoC power management:**
- **Clock gating:** Routers can be clock-gated when idle.
- **Voltage-frequency scaling:** The NoC can run at a lower voltage/frequency when traffic is low.
- **Power gating:** Unused routers can be power-gated in systems with workload variation.

#### Key concepts
- NoC router components: input buffers, route computation, switch allocator, crossbar
- Router pipeline: BW, RC/SA, ST/LT
- Lookahead routing for reduced latency
- Virtual channels: deadlock avoidance, QoS, head-of-line blocking reduction
- NoC topologies: ring, mesh, crossbar, hierarchical
- Latency, throughput, power, and area trade-offs
- Credit-based flow control
- NoC power management: clock gating, DVFS, power gating

#### Hands-on activity
Design a 4×4 mesh NoC router with 5 ports, 2 virtual channels per port, and 4-flit buffers per VC. Calculate the total buffer size in bits (assuming 128-bit flits). Design the switch allocator using round-robin arbitration. Simulate the routing of a packet from (0,0) to (3,3) using XY routing. Show the flit's path through the routers, including the VC allocation at each hop. Calculate the latency assuming 2 cycles per router (lookahead routing) and 1 cycle per link. Then, simulate a deadlock scenario where two packets are routed in a cycle (e.g., (0,0)→(1,0) and (1,0)→(0,0)) and show how virtual channels prevent the deadlock.

#### Assessment idea
Ask: "Why does a mesh NoC provide higher throughput than a ring NoC for manycore processors, and what is the trade-off?" Answer: A mesh NoC has multiple paths between any two nodes and multiple links across the bisection. For an N×N mesh, there are N links across the vertical bisection and N links across the horizontal bisection. This means the aggregate bandwidth scales with N. A ring NoC has only 2 links across any bisection (one in each direction), so the bandwidth is constant regardless of the number of cores. The mesh provides higher throughput because it can route multiple packets simultaneously in different directions. The trade-off is latency: a mesh requires O(√N) hops on average, while a ring requires O(N) hops. However, for large N, the mesh's lower hop count (for N=64, mesh=7 hops, ring=32 hops) and higher bandwidth make it superior. The mesh also has more routers, which increases area and power, but each router is simpler and the links are shorter. Then ask: "What is the purpose of virtual channels in a NoC router, and how do they prevent deadlock?" Answer: Virtual channels provide multiple logical buffers per physical link. They prevent deadlock by separating different types of traffic into different channels. For example, request packets and reply packets can use different VCs. This prevents a cycle of dependencies where a request is waiting for a reply, and the reply is waiting for the request. In a 2D mesh with XY routing, deadlock can also occur if packets are routed in a cycle (e.g., east→south→west→north). VCs break this cycle by allowing packets to be routed in different "virtual" networks. For example, one VC might be used for eastward routes and another for westward routes. By ensuring that packets in one VC never create a cycle, deadlock is prevented. VCs also improve throughput by reducing head-of-line blocking: if a packet is blocked in one VC, other packets in different VCs can still proceed.

#### AI generation note
Create a 10-minute animated lesson. Show a NoC router as a post office with multiple mailboxes (input buffers). Show route computation as a sorting clerk who decides which outgoing mailbox to use. Show the switch allocator as a manager who resolves conflicts when two clerks want the same mailbox. Show the crossbar as a conveyor system that connects all mailboxes. Show virtual channels as separate delivery trucks on the same road. Show deadlock as a traffic jam where trucks are blocking each other in a circle. Show VCs as different-colored trucks that never block each other. Show a mesh as a grid city with multiple routes. Show a ring as a beltway with limited exits. Show flow control as a traffic light system that prevents trucks from entering a full road. Show power management as turning off post offices in quiet neighborhoods. End with a reflection: "What is the most important design parameter for a NoC in a 64-core processor?"

---

### Chapter 12.2 — Amdahl's Law and Speedup Analysis

#### learning objectives
- Apply Amdahl's Law to evaluate the potential speedup of an optimization.
- Use the principle of locality to justify cache hierarchy design.
- Understand the common case fast principle and its application to architecture.
- Analyze the trade-off between performance and cost using cost-performance metrics.

#### Detailed lesson content

Computer architecture is a quantitative discipline. Good design decisions are based on data, not intuition. Several fundamental principles guide architects:

**1. Amdahl's Law:**

Amdahl's Law states that the speedup from an improvement is limited by the fraction of time the improvement can affect.

```
Speedup = 1 / ((1 - f) + f/s)
```

Where f is the fraction of execution time affected by the improvement, and s is the speedup of that fraction.

For example, if a processor spends 40% of its time on memory accesses, and you improve the cache to speed up memory by 2×, the overall speedup is:
```
Speedup = 1 / (0.6 + 0.4/2) = 1 / 0.8 = 1.25×
```

The maximum possible speedup (if s → ∞) is:
```
Speedup_max = 1 / (1 - f) = 1 / 0.6 = 1.67×
```

Amdahl's Law tells us that optimizing the common case is far more important than optimizing the rare case. If a processor spends 90% of time on arithmetic and 10% on memory, improving arithmetic by 10× gives a speedup of 5.26×, while improving memory by 10× gives only 1.10×.

**2. Principle of Locality:**

Programs tend to access a small subset of memory locations repeatedly. This is the foundation of the memory hierarchy.
- **Temporal locality:** Recently accessed data is likely to be accessed again soon.
- **Spatial locality:** Nearby data is likely to be accessed soon.

Caches exploit temporal locality by keeping recently accessed data. They exploit spatial locality by fetching data in blocks (cache lines). The memory hierarchy is justified entirely by the principle of locality.

**3. Common Case Fast:**

Make the common case fast and the uncommon case correct. This means optimizing the hardware and software for the operations that occur most frequently, even if it makes rare operations slower.

For example:
- RISC processors optimize the simple, common instructions (ADD, SUB, LOAD) to execute in one cycle, even though complex instructions (like string operations) may take many cycles.
- Branch predictors optimize for the common case where loops iterate many times, even though some branches are unpredictable.
- Cache hierarchies optimize for the common case where data fits in cache, even though some workloads exceed cache capacity.

**4. Parallelism:**

Extract parallelism at every level: instruction-level parallelism (ILP) within a thread, data-level parallelism (DLP) across data elements, thread-level parallelism (TLP) across threads, and request-level parallelism (RLP) across independent tasks.

**5. Design for Moore's Law:**

Architects must anticipate that transistor budgets will double every two years. This means designing architectures that can scale with more transistors (e.g., wider issue, more cores, larger caches) rather than designs that are fixed in size.

**6. Cost-performance trade-off:**

The optimal design balances performance and cost. Cost-performance is often measured as performance per dollar or performance per watt. A design that is 10% faster but costs 50% more may not be the best choice for the market.

#### Key concepts
- Amdahl's Law: speedup limited by fraction affected
- Maximum speedup: 1 / (1 - f)
- Principle of locality: temporal and spatial
- Common case fast principle
- Parallelism levels: ILP, DLP, TLP, RLP
- Design for scalability with Moore's Law
- Cost-performance metrics
- Quantitative decision-making in architecture

#### Hands-on activity
A processor spends 30% of its time on integer operations, 20% on floating-point operations, 30% on memory accesses, and 20% on branches. You have a budget to implement ONE of the following optimizations:
- Option A: Improve integer ALU by 2×
- Option B: Improve floating-point unit by 4×
- Option C: Improve cache to reduce memory latency by 2×
- Option D: Improve branch predictor to reduce misprediction penalty by 3×

Use Amdahl's Law to calculate the speedup for each option. Which optimization provides the best speedup? Discuss why the best option might not be the one with the highest individual speedup. Then, calculate the maximum possible speedup if you could implement all four optimizations simultaneously (assuming independence).

#### Assessment idea
Ask: "A program spends 80% of its time in a loop that can be parallelized. If you run the program on a processor with 8 cores, what is the theoretical speedup according to Amdahl's Law?" Answer: Speedup = 1 / ((1 - 0.8) + 0.8/8) = 1 / (0.2 + 0.1) = 1 / 0.3 = 3.33×. Even with 8 cores, the speedup is only 3.33× because the serial portion (20%) limits the maximum speedup to 5×. Then ask: "Why does the principle of locality justify a memory hierarchy rather than a single, fast, large memory?" Answer: A single memory that is both fast and large would be prohibitively expensive. SRAM (fast) is about 100× more expensive per bit than DRAM (large but slower). By exploiting locality, we can use a small amount of fast SRAM (cache) to hold the frequently accessed data, and a large amount of slow DRAM for the rest. The cache captures the working set of the program, and the principle of locality ensures that most accesses hit in the cache. This hierarchy provides near-SRAM speed at near-DRAM cost, which is the optimal cost-performance trade-off.

#### AI generation note
Create an animated Amdahl's Law calculator. Show a pie chart where one slice can be expanded. Show that no matter how much you expand that slice, the total pie can only grow by a limited amount. Show the locality principle as a heat map of memory accesses, with hot spots concentrated in small regions. Show the common case fast principle as a highway with an express lane for frequent travelers. Show the cost-performance trade-off as a balance scale. Show the parallelism levels as nested circles: ILP inside a thread, DLP across data, TLP across threads, RLP across requests. End with a reflection: "If you had unlimited transistors but limited power, how would you allocate them?"

---

### Chapter 12.3 — Roofline Model and Bottleneck Analysis

#### learning objectives
- Construct and interpret a roofline model for a given processor and workload.
- Identify whether a workload is compute-bound, memory-bound, or bandwidth-bound.
- Use the roofline model to guide optimization decisions.
- Calculate operational intensity for different algorithms and data structures.

#### Detailed lesson content

The roofline model is a visual tool for understanding the performance limits of a processor for a given workload. It plots performance (FLOPS or operations per second) against **operational intensity** (operations per byte of memory traffic).

**The roofline has two parts:**
1. **Memory bandwidth ceiling:** A diagonal line representing the maximum performance limited by memory bandwidth. Performance = Bandwidth × Operational Intensity.
2. **Compute ceiling:** A horizontal line representing the maximum performance limited by the processor's peak compute capability.

A workload is **memory-bound** if its operational intensity is low (it touches memory frequently). It lies on the diagonal part of the roofline. A workload is **compute-bound** if its operational intensity is high (it reuses data extensively). It lies on the horizontal part of the roofline.

**Example roofline:**

For a processor with:
- Peak compute: 100 GFLOPS
- Memory bandwidth: 25 GB/s

The memory bandwidth ceiling is: Performance = 25 × Operational Intensity (GFLOPS).
The compute ceiling is: Performance = 100 GFLOPS.

The ridge point (where the two lines meet) is at Operational Intensity = 100 / 25 = 4 FLOPs/byte.

- Workload A (matrix multiplication, intensity = 8): Compute-bound. Performance = 100 GFLOPS.
- Workload B (vector addition, intensity = 0.125): Memory-bound. Performance = 25 × 0.125 = 3.125 GFLOPS.
- Workload C (dot product, intensity = 0.25): Memory-bound. Performance = 25 × 0.25 = 6.25 GFLOPS.

**Using the roofline model for optimization:**

1. **Memory-bound workloads:** Optimize by increasing operational intensity (e.g., cache blocking, loop tiling, data reuse) or by increasing memory bandwidth (e.g., using faster memory, more channels, HBM).

2. **Compute-bound workloads:** Optimize by increasing compute utilization (e.g., better vectorization, more ILP, using fused multiply-add instructions).

3. **Ridge point:** Workloads near the ridge point are balanced. Small improvements in either compute or memory can help.

**Operational intensity calculation:**

For an algorithm, operational intensity is:
```
Operational Intensity = Total Operations / Total Memory Traffic (bytes)
```

Example: Matrix multiplication of N×N matrices.
- Operations: 2N³ (N³ multiplications and N³ additions).
- Memory traffic: 3N² × 8 bytes (reading A and B, writing C, assuming double precision).
- Operational intensity = 2N³ / (24N²) = N/12 FLOPs/byte.

For N = 1024: Intensity = 85.3 FLOPs/byte. This is well above the ridge point for most processors, so matrix multiplication is compute-bound.

Example: Vector addition of N elements.
- Operations: N additions.
- Memory traffic: 3N × 8 bytes (reading A and B, writing C).
- Operational intensity = N / (24N) = 0.042 FLOPs/byte.

This is well below the ridge point, so vector addition is memory-bound.

**Ceilings (sub-rooflines):**

The roofline model can be extended with additional ceilings:
- **L1 bandwidth ceiling:** If the workload fits in L1 cache, the L1 bandwidth may be the bottleneck.
- **L2 bandwidth ceiling:** For workloads that fit in L2 but not L1.
- **In-core parallelism ceiling:** If the processor cannot issue enough operations per cycle.
- **Non-fused multiply-add ceiling:** If the workload does not use FMA instructions.

These ceilings help identify specific bottlenecks within the processor.

#### Key concepts
- Roofline model: memory bandwidth ceiling vs. compute ceiling
- Operational intensity: operations per byte
- Memory-bound vs. compute-bound workloads
- Ridge point: intersection of memory and compute ceilings
- Optimization strategies for memory-bound and compute-bound workloads
- Operational intensity calculation for algorithms
- Sub-rooflines: L1 bandwidth, L2 bandwidth, in-core parallelism
- Using roofline to guide optimization decisions

#### Hands-on activity
Construct a roofline model for your processor (or a processor of your choice). Determine:
- Peak compute performance (from specifications or benchmarks like LINPACK).
- Memory bandwidth (from STREAM benchmark or specifications).
- Calculate the ridge point.

Then, calculate the operational intensity for the following algorithms:
1. Matrix multiplication (N×N)
2. Matrix-vector multiplication (N×N matrix, N vector)
3. Vector dot product (N elements)
4. Sparse matrix-vector multiplication (sparse matrix with M non-zero elements, N rows)

Plot each algorithm on the roofline model. Identify which are memory-bound and which are compute-bound. Discuss optimization strategies for each algorithm based on its position on the roofline. If you cannot run benchmarks, use theoretical values from the processor specifications.

#### Assessment idea
Ask: "A processor has a peak compute of 200 GFLOPS and a memory bandwidth of 50 GB/s. At what operational intensity does a workload transition from memory-bound to compute-bound?" Answer: The ridge point is at Operational Intensity = Peak Compute / Memory Bandwidth = 200 / 50 = 4 FLOPs/byte. Workloads with operational intensity below 4 are memory-bound. Workloads with operational intensity above 4 are compute-bound. A workload with intensity exactly at 4 is balanced and limited by both compute and memory. Then ask: "A matrix multiplication algorithm has an operational intensity of 16 FLOPs/byte. The processor's roofline has a ridge point at 4 FLOPs/byte. The current implementation achieves only 50 GFLOPS. What is the most likely bottleneck, and what optimization would you apply?" Answer: Since the operational intensity (16) is above the ridge point (4), the workload is theoretically compute-bound. The peak compute is 200 GFLOPS, but the current implementation achieves only 50 GFLOPS (25% of peak). This suggests that the bottleneck is within the processor's compute capabilities, not memory bandwidth. Possible bottlenecks: (1) poor vectorization — the compiler may not be using SIMD instructions effectively; (2) insufficient instruction-level parallelism — the processor may not be issuing enough instructions per cycle; (3) lack of fused multiply-add (FMA) usage — matrix multiplication is dominated by multiply-add operations, and FMA doubles the throughput; (4) cache thrashing — the memory access pattern may not be cache-friendly, causing cache misses even though the operational intensity suggests compute-bound behavior. Optimizations to apply: (1) ensure the compiler is vectorizing with AVX-512 or similar; (2) use cache blocking (tiling) to improve data reuse; (3) use FMA instructions; (4) optimize the loop nest order to maximize spatial locality. If cache blocking does not improve performance, the bottleneck is likely in-core parallelism or vectorization.

#### AI generation note
Create a 10-minute animated lesson. Show the roofline model as a graph with a diagonal line (memory bound) and a horizontal line (compute bound). Show a matrix multiplication as a dot high on the graph (compute-bound). Show a vector addition as a dot low on the graph (memory-bound). Show the ridge point as the intersection. Show optimization as moving the dot: cache blocking moves the dot rightward (higher intensity), vectorization moves the dot upward (higher performance). Show sub-rooflines as intermediate ceilings: L1 bandwidth, L2 bandwidth, in-core parallelism. Show a workload hitting the L1 ceiling as a dot that cannot reach the compute ceiling because it is limited by cache bandwidth. Show the roofline as a roof that limits how high performance can go. End with a reflection: "How would you use the roofline model to optimize a deep neural network training workload?"

---

### Chapter 12.4 — Power and Energy Analysis

#### learning objectives
- Calculate the power consumption of a processor using the CMOS power equation.
- Distinguish between dynamic power and static power and their trends over technology generations.
- Understand the power wall and its implications for processor design.
- Analyze the energy efficiency of different architectures using performance per watt metrics.

#### Detailed lesson content

Power is one of the most important constraints in modern processor design. It affects battery life in mobile devices, cooling costs in data centers, and reliability in all systems. Power and energy are related but distinct:
- **Power (Watts):** The rate of energy consumption. P = dE/dt. High power means high heat generation, which requires cooling.
- **Energy (Joules):** The total amount of work done. E = P × t. For a battery-powered device, energy determines battery life. For a data center, energy determines electricity cost.

A processor can have high power but low energy (if it completes the task quickly) or low power but high energy (if it takes a long time). The goal depends on the application:
- **Mobile:** Minimize energy (battery life).
- **Data center:** Minimize energy (electricity cost) but also manage power (cooling capacity).
- **Desktop:** Stay within thermal limits while maximizing performance.

**CMOS power equations:**

The power consumption of a CMOS processor has two components:

1. **Dynamic Power:** Power consumed when transistors switch.
   ```
   P_dynamic = α × C × V² × f
   ```
   Where:
   - α = activity factor (fraction of transistors switching per cycle)
   - C = capacitance being switched
   - V = supply voltage
   - f = clock frequency

   Dynamic power is proportional to V². This is why reducing voltage is so effective for power savings. However, reducing voltage also reduces the maximum frequency (since transistors switch slower at lower voltages).

2. **Static (Leakage) Power:** Power consumed when transistors are idle.
   ```
   P_static = V × I_leakage
   ```
   Leakage current flows even when the transistor is off. At smaller process nodes, leakage becomes a significant portion of total power (up to 50% in some designs). Techniques to reduce leakage include:
   - **Power gating:** Turning off unused blocks entirely.
   - **Body biasing:** Adjusting the transistor threshold voltage.
   - **Multi-threshold cells:** Using high-threshold cells for non-critical paths.

**Dynamic Voltage and Frequency Scaling (DVFS):**

DVFS adjusts the voltage and frequency of the processor based on workload. When the workload is light, the processor reduces voltage and frequency, saving power. When the workload is heavy, it increases voltage and frequency for maximum performance.

Because P_dynamic ∝ V² × f, and f ∝ V (approximately), reducing voltage by half reduces power by a factor of 8 (since both V² and f decrease). This is why DVFS is so effective.

DVFS is controlled by an **operating system governor** or **hardware power management unit**. Common governors:
- **Performance:** Always run at maximum frequency.
- **Powersave:** Always run at minimum frequency.
- **Ondemand:** Scale up frequency when CPU utilization is high.
- **Conservative:** Scale up gradually.

**Thermal Design Power (TDP):**

TDP is the maximum amount of heat a cooling system is required to dissipate. It is not the maximum power the processor can consume (which may be higher during brief bursts) but the sustained power under typical workloads. Processors have mechanisms to **throttle** (reduce frequency) if they exceed TDP to prevent overheating.

**Race-to-halt vs. pace-to-halt:**
- **Race-to-halt:** Run at maximum frequency to complete the task quickly, then shut down. This minimizes energy for CPU-bound tasks because the processor spends more time in a low-power idle state.
- **Pace-to-halt:** Run at the minimum frequency needed to complete the task by the deadline. This minimizes energy for real-time tasks because dynamic power is superlinear with frequency.

#### Key concepts
- Power vs. energy: rate vs. total consumption
- Dynamic power: α × C × V² × f
- Static/leakage power: V × I_leakage
- DVFS: dynamic voltage and frequency scaling
- Power gating and body biasing for leakage reduction
- TDP: thermal design power and thermal throttling
- Race-to-halt vs. pace-to-halt strategies
- Activity factor and capacitance in dynamic power
- Power management governors and OS control

#### Hands-on activity
Use a tool like Intel Power Gadget, HWiNFO, or Linux `perf` to measure the power consumption of your CPU under different workloads: idle, web browsing, video playback, and a CPU-intensive benchmark (like Prime95). Record the frequency, voltage, and power for each workload. Calculate the energy consumed per task (power × time). Then, manually force the CPU to different frequency levels using `cpufreq-set` or Windows power plan settings and measure how performance and power change. Plot power vs. frequency and performance vs. power. Discuss the optimal operating point for each workload type.

#### Assessment idea
Ask: "A processor can run at 3.0 GHz with 1.2V or at 1.5 GHz with 0.8V. If the workload is CPU-bound, which setting consumes less energy to complete the task, and why?" Answer: Assuming the task takes half the instructions at 3.0 GHz vs. 1.5 GHz, and dynamic power P ∝ V² × f, the power ratio is (1.2² × 3.0) / (0.8² × 1.5) = (1.44 × 3) / (0.64 × 1.5) = 4.32 / 0.96 = 4.5×. The 3.0 GHz setting uses 4.5× the power but completes the task in 0.5× the time. Energy = Power × Time, so the energy ratio is 4.5 × 0.5 = 2.25×. The 1.5 GHz setting uses less energy (2.25× less), demonstrating that lower frequency is more energy-efficient for CPU-bound tasks (pace-to-halt). However, if the task is latency-sensitive, the 3.0 GHz setting may be preferred despite higher energy. Then ask: "Why does leakage power become a dominant concern at process nodes below 32nm?" Answer: At larger process nodes, transistor dimensions are large enough that leakage current (subthreshold leakage and gate oxide leakage) is negligible compared to dynamic power. As transistors shrink, the gate oxide thickness decreases, causing more tunneling current (gate leakage). The subthreshold leakage also increases because the threshold voltage must be lowered to maintain performance at lower supply voltages. At 7nm and 5nm, leakage can account for 30–50% of total power, making it a critical design constraint. This is why power gating and multi-threshold design are essential in modern processors.

#### AI generation note
Create an animated power meter showing dynamic and static power components. Show the V² relationship as a curve that grows steeply. Show DVFS as a throttle that adjusts both voltage and frequency. Show race-to-halt as a sprinter who finishes quickly and rests vs. pace-to-halt as a marathon runner who maintains a steady pace. Show power gating as a light switch that turns off unused rooms. Show TDP as a thermostat that triggers cooling when the temperature rises. Show a smartphone battery draining under different workloads. End with a reflection: "If you were designing a processor for a Mars rover with limited solar power, would you prioritize low power or low energy?"

---

### Chapter 12.5 — Performance Counters and Profiling

#### learning objectives
- Use hardware performance counters to measure processor events: cycles, instructions, cache misses, branch mispredictions.
- Understand the difference between inclusive and exclusive events in profiling.
- Describe the Top-Down Method for identifying performance bottlenecks.
- Analyze a profile to identify the bottleneck in a program.

#### Detailed lesson content

Hardware performance counters are registers built into the processor that count specific events during execution. They are essential for understanding program performance and identifying bottlenecks.

**Common performance counters:**
- **CPU_CLK_UNHALTED:** Total cycles the processor was running.
- **INST_RETIRED:** Total instructions retired (committed).
- **BR_INST_RETIRED:** Branch instructions retired.
- **BR_MISP_RETIRED:** Branch mispredictions retired.
- **L1D_CACHE_LOAD_MISS:** L1 data cache load misses.
- **L2_RQSTS_MISS:** L2 cache misses.
- **LLC_REFERENCES / LLC_MISSES:** Last-level cache references and misses.
- **MEM_LOAD_RETIRED:** Memory load instructions retired.
- **UOPS_ISSUED / UOPS_RETIRED:** Micro-operations issued and retired.
- **CYCLE_ACTIVITY:** Cycles spent in various pipeline stages.

**Calculating metrics from counters:**
- **CPI:** CPU_CLK_UNHALTED / INST_RETIRED
- **IPC:** INST_RETIRED / CPU_CLK_UNHALTED
- **Branch misprediction rate:** BR_MISP_RETIRED / BR_INST_RETIRED
- **L1 miss rate:** L1D_CACHE_LOAD_MISS / MEM_LOAD_RETIRED
- **L2 miss rate:** L2_RQSTS_MISS / L1D_CACHE_LOAD_MISS
- **LLC miss rate:** LLC_MISSES / LLC_REFERENCES

**Top-Down Method:**

The Top-Down Method (developed by Intel) is a structured approach to identifying performance bottlenecks. It categorizes pipeline slots into four categories:

1. **Front-End Bound:** The front-end (fetch, decode) is not delivering enough μops to the back-end. Causes: instruction cache misses, branch mispredictions, decode bottlenecks.

2. **Back-End Bound:** The back-end (execution, memory) cannot execute μops fast enough. Divided into:
   - **Memory Bound:** Stalled on cache misses or memory bandwidth.
   - **Core Bound:** Stalled on execution port contention, long-latency instructions, or lack of ILP.

3. **Bad Speculation:** The processor speculated incorrectly and wasted work. Causes: branch mispredictions, memory disambiguation failures.

4. **Retiring:** Useful work is being done. High retiring is good, but if the IPC is low, the program may be inefficient.

The Top-Down Method uses a hierarchy of metrics to drill down from high-level categories to specific events. For example, if a program is "Back-End Bound → Memory Bound → L1 Bound," the bottleneck is L1 cache misses.

**Profiling tools:**
- **Linux perf:** The standard Linux profiling tool. Uses `perf_event_open` syscall to access counters.
  ```bash
  perf stat ./program
  perf record ./program
  perf report
  ```
- **Intel VTune:** Commercial profiler with Top-Down Method support. Provides detailed analysis of hotspots, threading, and memory.
- **AMD uProf:** AMD's profiler for Zen processors.
- **oprofile:** Linux profiler with low overhead.
- **PAPI:** Portable API for performance counter access.

**Using profiles to optimize:**
1. Measure the baseline performance (execution time, IPC).
2. Identify the bottleneck using the Top-Down Method or counter ratios.
3. Apply the appropriate optimization (e.g., cache blocking for memory bound, loop unrolling for core bound, better branch prediction for bad speculation).
4. Re-measure and verify the improvement.

#### Key concepts
- Hardware performance counters: cycles, instructions, cache misses, branch mispredictions
- Counter ratios: CPI, IPC, miss rates, misprediction rate
- Top-Down Method: front-end bound, back-end bound, bad speculation, retiring
- Front-end bound: fetch, decode, branch prediction bottlenecks
- Back-end bound: memory bound (cache misses) and core bound (execution contention)
- Bad speculation: branch mispredictions, wasted work
- Profiling tools: perf, VTune, uProf, oprofile, PAPI
- Optimization workflow: measure, identify, optimize, verify

#### Hands-on activity
Write a C program that performs a simple computation (e.g., matrix multiplication, dot product, or prime number sieve). Profile the program using `perf stat` on Linux or a similar tool. Collect the following counters:
- CPU cycles and instructions (calculate CPI)
- L1 cache misses
- L2 cache misses
- LLC misses
- Branch mispredictions

Use the Top-Down Method to identify the bottleneck. Is the program front-end bound, back-end bound, or retiring? If back-end bound, is it memory bound or core bound? Apply an optimization based on the bottleneck (e.g., cache blocking if memory bound, loop unrolling if core bound). Re-profile and measure the improvement. If you don't have access to `perf`, describe the expected counters and the optimization strategy.

#### Assessment idea
Ask: "A program has an IPC of 0.5 and the Top-Down Method shows it is 'Back-End Bound → Memory Bound → LLC Miss.' What optimizations would you apply, and why?" Answer: An IPC of 0.5 is low (modern processors can achieve 2–4 IPC). The Top-Down Method indicates the bottleneck is last-level cache (LLC) misses. This means the program is frequently accessing data that is not in any cache, causing long stalls while data is fetched from memory. Optimizations to apply: (1) cache blocking (tiling) — restructure the algorithm to work on small blocks that fit in cache, improving data reuse; (2) loop interchange — change the order of nested loops to improve spatial locality; (3) prefetching — add software prefetch instructions or rely on hardware prefetching for regular access patterns; (4) reduce data structure size — use smaller data types (e.g., float instead of double) to fit more data in cache; (5) data layout optimization — use structure-of-arrays (SoA) instead of array-of-structures (AoS) for better cache utilization. These optimizations aim to reduce LLC misses by improving data locality and reuse. After applying optimizations, the program should show reduced LLC misses and higher IPC. Then ask: "Why is the Top-Down Method more useful than simply looking at individual counter values for performance analysis?" Answer: The Top-Down Method provides a structured hierarchy that guides the programmer to the root cause of the bottleneck. Individual counter values can be overwhelming: there are hundreds of counters, and it is not always clear which ones are relevant. The Top-Down Method organizes counters into four high-level categories (front-end, back-end, bad speculation, retiring) and then drills down into subcategories. This structure helps identify the bottleneck quickly and suggests the appropriate optimization strategy. For example, if the method shows "Back-End Bound → Memory Bound → L1 Bound," the programmer knows to focus on L1 cache optimizations. Without the Top-Down Method, the programmer might look at many counters and miss the key bottleneck. The method also provides a common language for performance analysis, making it easier to communicate and compare results across different programs and processors.

#### AI generation note
Create a 10-minute animated lesson. Show performance counters as a dashboard with many gauges. Show the Top-Down Method as a diagnostic tree: start with the four main branches, then drill down to specific causes. Show a program as a car on a track. Show front-end bound as the engine not getting enough fuel. Show back-end bound as the wheels slipping or the brakes dragging. Show memory bound as the car running out of gas. Show core bound as the engine not firing on all cylinders. Show bad speculation as the car taking wrong turns and having to backtrack. Show retiring as the car cruising smoothly. Show profiling tools as mechanics who inspect the car. Show perf as a basic diagnostic tool. Show VTune as a full-service garage. Show the optimization workflow as a cycle: drive, diagnose, fix, test. End with a reflection: "What is the most common bottleneck in modern programs?"

---

### Chapter 12.6 — Design Space Exploration

#### learning objectives
- Explain the concept of design space exploration in computer architecture.
- Use simulation to evaluate different microarchitectural configurations.
- Understand the trade-offs between pipeline depth, cache size, issue width, and other parameters.
- Describe the role of architectural simulators like Gem5 and SimpleScalar.

#### Detailed lesson content

Design space exploration is the process of systematically evaluating different architectural configurations to find the optimal design for a given set of constraints (performance, power, area, cost).

**The design space:**

The design space of a processor includes:
- Pipeline depth: 5–20 stages
- Issue width: 1–8 instructions per cycle
- Cache size: 8 KB–64 MB
- Cache associativity: 1–32 way
- Number of functional units: 2–20
- ROB size: 40–900 entries
- Branch predictor size: 1K–64K entries
- Memory bandwidth: 10–1000 GB/s

The total number of possible configurations is enormous (e.g., 10 parameters with 5 options each = 5^10 = 9,765,625 configurations). Evaluating all configurations is impossible, so architects use techniques to explore the space efficiently.

**Simulation:**

Architectural simulators are the primary tool for design space exploration. They model the processor at the cycle level and execute benchmark programs to measure performance.

- **SimpleScalar:** One of the earliest widely used simulators. Models a MIPS-like processor with configurable parameters.
- **Gem5:** The current standard for academic research. Models x86, ARM, and RISC-V processors with detailed cache, memory, and interconnect models. Supports full-system and syscall-emulation modes.
- **Sniper:** A faster simulator that uses interval modeling rather than cycle-by-cycle simulation. Good for exploring large design spaces.
- **ZSim:** Another fast simulator using parallel simulation techniques.
- **Marss-x86:** A detailed x86 simulator based on PTLSim.

**Simulation methodology:**
1. **Select benchmarks:** Use representative workloads (e.g., SPEC CPU, PARSEC, SPLASH-2).
2. **Select metrics:** Performance (IPC), power (watts), energy (joules), area (mm²).
3. **Configure simulator:** Set the parameters for the architecture being evaluated.
4. **Run simulations:** Execute the benchmarks and collect statistics.
5. **Analyze results:** Compare configurations and identify trade-offs.

**Sampling and statistical techniques:**

Because full benchmark simulations are slow (hours to days per benchmark), architects use sampling techniques:
- **SimPoint:** Identifies representative phases of a program and simulates only those phases. Reduces simulation time by 1000× while maintaining accuracy.
- **SmartSim:** Uses machine learning to predict performance based on a small number of simulations.
- **Regression models:** Fit a mathematical model to the simulation data and use it to predict performance for untested configurations.

**Pareto-optimal designs:**

A design is Pareto-optimal if no other design is better in all metrics. For example, if design A is faster than design B but consumes more power, both may be Pareto-optimal (depending on the trade-off). The set of Pareto-optimal designs forms the "Pareto frontier," which represents the best trade-offs between metrics.

**Machine learning for design space exploration:**

Recent research uses machine learning to accelerate design space exploration:
- **Surrogate models:** Train a neural network or Gaussian process on a small set of simulations to predict performance for other configurations.
- **Bayesian optimization:** Iteratively select configurations to simulate based on the model's uncertainty, focusing on promising regions.
- **Reinforcement learning:** Train an agent to explore the design space and find optimal configurations.

These techniques can reduce the number of simulations needed by 10–100×.

#### Key concepts
- Design space exploration: systematic evaluation of architectural configurations
- Design space parameters: pipeline depth, issue width, cache size, ROB size, etc.
- Architectural simulators: SimpleScalar, Gem5, Sniper, ZSim, Marss-x86
- Simulation methodology: benchmarks, metrics, configuration, execution, analysis
- Sampling techniques: SimPoint, SmartSim, regression models
- Pareto-optimal designs and the Pareto frontier
- Machine learning for design space exploration: surrogate models, Bayesian optimization, reinforcement learning
- Trade-off analysis between performance, power, and area

#### Hands-on activity
Install Gem5 (or use a pre-built binary) and run a simple simulation of a processor with different cache configurations. Use the following parameters:
- Base configuration: 2 GHz, 4-issue, 128-entry ROB, 32 KB L1, 256 KB L2, 8 MB L3.
- Variant A: Double L1 size to 64 KB.
- Variant B: Double L2 size to 512 KB.
- Variant C: Double L3 size to 16 MB.
- Variant D: Increase issue width to 8.

Run a benchmark (e.g., a simple matrix multiplication or a SPEC CPU benchmark if available) on each configuration. Measure the IPC and execution time. Compare the results and identify which configuration provides the best speedup per unit of area (assuming area is proportional to cache size and issue width). Discuss the trade-offs. If you cannot run Gem5, describe the expected results based on the principles discussed in the course.

#### Assessment idea
Ask: "Why is SimPoint sampling essential for design space exploration, and how does it maintain accuracy while reducing simulation time?" Answer: Full benchmark simulations are extremely slow because benchmarks like SPEC CPU run for hundreds of billions of instructions. Simulating each configuration for the entire benchmark would take weeks or months. SimPoint identifies the program phases that are representative of the entire execution by analyzing basic block vectors (BBVs). It clusters the execution into phases and selects a small number of simulation points (e.g., 1–10) that represent the entire program. Each simulation point is only a few million instructions long, so the total simulation time is reduced by 1000× or more. SimPoint maintains accuracy because the selected phases have similar behavior (instruction mix, cache miss rate, branch behavior) to the full program. Studies have shown that SimPoint achieves less than 3% error compared to full simulation. Without SimPoint, design space exploration would be impractical for large spaces. Then ask: "What is the Pareto frontier in design space exploration, and why is it important for decision-making?" Answer: The Pareto frontier is the set of designs where no design is dominated by another in all metrics. A design A dominates design B if A is better than B in at least one metric and not worse in any other metric. The Pareto frontier represents the best trade-offs between competing objectives (e.g., performance vs. power vs. area). It is important for decision-making because it narrows the choices to only the designs that are worth considering. A designer can choose any design on the Pareto frontier based on their specific constraints (e.g., if power is limited, choose the design with the best performance within the power budget). Designs not on the Pareto frontier are suboptimal and can be discarded. The Pareto frontier also helps visualize trade-offs and communicate design options to stakeholders.

#### AI generation note
Create a 10-minute animated lesson. Show the design space as a vast landscape with many hills and valleys. Show each configuration as a point on the landscape. Show simulation as a drone flying over the landscape to measure the height (performance). Show SimPoint as a smart drone that only visits the most interesting landmarks. Show the Pareto frontier as a ridge line connecting the highest points. Show machine learning as a crystal ball that predicts the landscape without visiting every point. Show Gem5 as a detailed mapmaker. Show Sniper as a faster but less detailed mapmaker. Show the trade-offs as a balance scale between speed, power, and cost. Show the design process as an explorer choosing the best route through the landscape. End with a reflection: "What is the most important metric for evaluating a processor design?"

---

### Chapter 12.7 — Capstone Project: Design and Analysis of a Modern Processor

#### learning objectives
- Design a processor microarchitecture for a given application domain and performance target.
- Make quantitative trade-offs between pipeline depth, cache size, associativity, and branch prediction.
- Evaluate the design using the Iron Law, Amdahl's Law, and the roofline model.
- Present the design with clear diagrams, specifications, and performance projections.

#### Detailed lesson content

The capstone project is the culmination of your computer architecture studies. You will design a processor microarchitecture for a specific application domain, justify your design decisions with quantitative analysis, and project the performance of your design.

**Project specification:**

Design a processor for one of the following application domains:
1. **Mobile/Embedded:** Low power, moderate performance. Target: smartphone SoC. Constraints: area < 10 mm², power < 2 W, performance comparable to ARM Cortex-A78.
2. **High-Performance Desktop:** Maximum single-thread performance. Target: gaming and productivity. Constraints: area < 200 mm², power < 125 W, competitive with Intel Core i7.
3. **Server/Cloud:** High throughput for parallel workloads. Target: web servers, databases. Constraints: area < 400 mm², power < 250 W, many cores, high memory bandwidth.
4. **AI/ML Accelerator:** Specialized for neural network inference. Target: edge AI device. Constraints: area < 50 mm², power < 10 W, high throughput for matrix operations.

**Deliverables:**

1. **Architecture Specification (2 pages):**
   - ISA choice (x86, ARM, RISC-V) and justification.
   - Microarchitecture: pipeline depth, issue width, in-order vs. out-of-order.
   - Cache hierarchy: L1, L2, L3 sizes, associativity, line size, write policy.
   - Branch predictor: type, table sizes, target predictor.
   - Memory: bus width, DRAM channels, prefetching strategy.

2. **Quantitative Analysis (2 pages):**
   - Projected CPI breakdown using typical workload characteristics.
   - Cache performance analysis using the 3C model and AMAT.
   - Branch prediction accuracy and impact on CPI.
   - Amdahl's Law analysis for key optimizations.
   - Roofline model showing expected performance for representative workloads.

3. **Area and Power Estimation (1 page):**
   - Estimated area for major components (core, caches, interconnect, memory controller).
   - Estimated power consumption using typical power densities (W/mm²).
   - Comparison with a commercial processor in the same domain.

4. **Performance Projection (1 page):**
   - Projected SPEC CPU score or MLPerf score (depending on domain).
   - Comparison with 2–3 existing processors.
   - Sensitivity analysis: how does performance change if cache size is doubled or branch prediction is improved?

5. **Design Diagram:**
   - A block diagram showing the major components and their connections.
   - A pipeline diagram showing the stages and the forwarding paths.
   - A cache hierarchy diagram showing the levels and capacities.

**Evaluation rubric:**
- **Architecture choices:** Are the ISA, pipeline, and cache choices justified for the target domain?
- **Quantitative analysis:** Are the calculations correct and well-explained?
- **Trade-offs:** Does the design make intelligent trade-offs between performance, power, and area?
- **Realism:** Is the design feasible given current technology constraints?
- **Presentation:** Is the report clear, well-organized, and professional?
- **Innovation:** Does the design include any creative or novel features?

#### Key concepts
- Processor design as a system-level trade-off problem
- Application domain constraints: mobile, desktop, server, AI
- Quantitative analysis for design justification
- Amdahl's Law for optimization prioritization
- Roofline model for workload characterization
- Area and power estimation
- Performance projection and benchmarking
- Sensitivity analysis for design decisions
- Real-world processor constraints and feasibility

#### Hands-on activity
Complete the capstone project over two weeks. Choose your application domain. Research existing processors in that domain (e.g., for mobile: ARM Cortex-A78, Apple A15, Qualcomm Snapdragon; for desktop: Intel Core i9-13900K, AMD Ryzen 9 7950X; for server: AMD EPYC 9654, Intel Xeon Platinum; for AI: NVIDIA Jetson, Google TPU). Use their specifications as a baseline and propose improvements. Write the report with all deliverables. Include a 5-minute presentation (slides or video) summarizing your design and the key results. Be prepared to defend your design choices against questions about trade-offs and feasibility.

#### Assessment idea
The capstone project is graded using the rubric above. The evaluation will focus on whether the student demonstrates understanding of the quantitative tools (Amdahl's Law, Iron Law, roofline) and can apply them to make informed design decisions. The design should be realistic — a processor with 1000 cores and 1 TB of cache in a 10 mm² area would receive low marks for feasibility. The best projects will show thoughtful trade-offs, clear calculations, and creative but realistic innovations.

#### AI generation note
Create a 15-minute capstone project walkthrough. Show the design process as a funnel: start with the application domain, narrow down to the ISA, then the microarchitecture, then the cache, then the branch predictor, then the memory system. Show the quantitative analysis as a spreadsheet with formulas. Show the Amdahl's Law calculation as a pie chart being optimized. Show the roofline model as a graph with the workload marked. Show the area estimation as a floor plan of the chip. Show the comparison with existing processors as a benchmark chart. Show the design diagram as a detailed block diagram with labeled components. Show the sensitivity analysis as a tornado chart. End with the grading rubric and a checklist of deliverables.

---

## Course Conclusion

Congratulations on completing Computer Architecture. You have mastered the fundamental principles and advanced techniques that define modern processors. You can now analyze a processor's performance using the Iron Law, Amdahl's Law, and the roofline model. You understand how pipelining increases throughput, how caches bridge the processor-memory gap, how out-of-order execution extracts parallelism, and how multiprocessors coordinate through cache coherence and memory consistency. You have explored the design space from simple embedded processors to complex server chips, from GPUs to vector processors.

The skills you have gained are the foundation of a career in hardware design, performance engineering, compiler development, and systems research. Whether you are designing a new processor, optimizing software for existing hardware, or researching the next generation of computing paradigms, the principles of computer architecture will guide your decisions.

To continue your learning, consider these next steps:
- **Study VLSI design:** Learn how to implement the microarchitectures you have studied using hardware description languages (Verilog, VHDL) and CAD tools.
- **Explore emerging architectures:** Study quantum computing, neuromorphic computing, and optical computing to understand the future of computer architecture.
- **Work on open-source processors:** Contribute to RISC-V core designs (Rocket Chip, BOOM, CVA6) to gain hands-on experience.
- **Read research papers:** Follow top architecture conferences (ISCA, MICRO, HPCA, ASPLOS) and read papers on topics that interest you.
- **Benchmark and optimize:** Use tools like perf, Intel VTune, and Linux perf to analyze real-world program performance and apply your architectural knowledge.

Computer architecture is both a science and an art. The science is in the quantitative analysis, the models, and the metrics. The art is in the intuition, the trade-offs, and the creativity of designing something that has never existed before. You are now equipped to practice both. Go design the future of computing.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
