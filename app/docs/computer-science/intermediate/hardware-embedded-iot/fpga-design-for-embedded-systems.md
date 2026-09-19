# Syllabus: FPGA Design for Embedded Systems

> **Course ID:** `fpga-design-for-embedded-systems`  
> **Title:** FPGA Design for Embedded Systems  
> **Provider:** Cohortia  
> **Original reference:** University of Colorado Boulder / Coursera  
> **Platform:** Cohortia  
> **Level:** Intermediate  
> **Type:** Course  
> **Duration:** 10–12 weeks (self-paced, ~6–8 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page (original reference: https://www.coursera.org/specializations/fpga-design-embedded-systems)  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** FPGA design, Verilog, VHDL, digital logic, RTL design, Quartus Prime, ModelSim, timing analysis, NIOS II soft-core processor, IP cores, Qsys, embedded systems, programmable logic, hardware-software co-design  
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from the University of Colorado Boulder, Coursera, Intel (Altera), Xilinx, and other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

Field Programmable Gate Arrays (FPGAs) are one of the most powerful and flexible technologies in modern electronics. Unlike a microprocessor that executes a sequence of instructions stored in memory, an FPGA is a blank canvas of programmable logic gates, flip-flops, and routing wires that you configure to create a custom digital circuit. When you program an FPGA, you are not writing software — you are designing hardware. The result is a digital circuit that runs in parallel, processes data at the speed of the clock, and can be reconfigured for completely different applications simply by loading a new configuration file.

This course teaches you the complete skill set required to design, build, and verify FPGA-based embedded systems. You will learn the architecture of programmable logic devices, the difference between FPGAs and other programmable platforms, and how to describe digital circuits using Hardware Description Languages (Verilog and VHDL). You will follow the industry-standard FPGA design flow from specification through synthesis, simulation, timing analysis, and hardware programming. You will build circuits ranging from simple adders and counters to complex finite state machines and soft-core processors. By the end, you will design a complete FPGA embedded system that integrates a NIOS II processor, custom hardware peripherals, and third-party IP cores on a real Intel MAX 10 FPGA development board.

This course is designed for learners who have a foundational understanding of digital logic (logic gates, flip-flops, Boolean algebra) and basic programming in C. It is the natural next step after studying microcontroller-based embedded systems, and it opens doors to careers in digital design, hardware verification, signal processing, telecommunications, and aerospace.

By the end of this course, you will be able to:

1. Explain the architecture, history, and technology of FPGAs, CPLDs, and ASICs, and select the right device for a given application.
2. Describe the internal structure of an FPGA, including LUTs, CLBs, programmable interconnect, and I/O blocks, and explain how a configuration bitstream maps to physical hardware.
3. Compare SRAM-based, FLASH-based, and anti-fuse FPGA technologies and understand their trade-offs in speed, cost, power, and reprogrammability.
4. Design combinational and sequential digital circuits using both Verilog and VHDL, following synthesizable coding conventions.
5. Write and execute testbenches in ModelSim to verify that a digital design behaves correctly before hardware implementation.
6. Follow the complete FPGA design flow: specification, RTL coding, synthesis, place-and-route, simulation, timing analysis, and bitstream generation.
7. Use Intel Quartus Prime and ModelSim to create, compile, simulate, and program an FPGA design on a DE10-Lite development board.
8. Apply static timing analysis and timing constraints to ensure a design meets clock frequency requirements and achieves timing closure.
9. Build a system-on-chip (SoC) using Qsys by integrating a NIOS II soft-core processor, custom hardware peripherals, and third-party IP cores.
10. Write embedded C software for a soft-core processor, compile it, and run it on an FPGA alongside custom hardware.
11. Evaluate the trade-offs between implementing custom hardware logic and acquiring third-party IP cores.
12. Design, implement, and debug a complete FPGA-based embedded system capstone project that demonstrates hardware-software co-design.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Introduction to Programmable Logic and FPGAs | 1 | 5–7 |
| 2 | FPGA Architecture Deep Dive | 1 | 6–8 |
| 3 | Digital Logic Design for FPGA | 1–2 | 7–9 |
| 4 | Hardware Description Languages — Verilog | 1–2 | 8–10 |
| 5 | Hardware Description Languages — VHDL | 1–2 | 8–10 |
| 6 | The FPGA Design Flow and Development Tools | 1–2 | 8–10 |
| 7 | Timing Analysis, Constraints, and Design Optimization | 1 | 6–8 |
| 8 | Embedded Processors, IP Cores, and System Design | 1–2 | 8–10 |
| 9 | FPGA Applications and Capstone Project | 1–2 | 7–9 |

---

## Module 1: Introduction to Programmable Logic and FPGAs

> **Goal:** Understand what FPGAs are, how they differ from other programmable devices, explore their history and evolution, and set up the development environment.

---

### Chapter 1.1 — What Are FPGAs and Why Do They Matter?

#### Learning objectives
- Define an FPGA as a programmable digital integrated circuit.
- Contrast FPGAs with microprocessors, microcontrollers, and fixed-function ASICs.
- Explain the key advantages of FPGAs: parallelism, reconfigurability, deterministic timing, and rapid prototyping.
- Identify real-world applications of FPGAs in aerospace, telecommunications, automotive, medical, and high-performance computing.

#### Detailed lesson content

A Field Programmable Gate Array, or FPGA, is an integrated circuit that contains a two-dimensional array of programmable logic blocks surrounded by a programmable routing network and programmable input/output cells. Unlike a microprocessor, which fetches and executes instructions one at a time from memory, an FPGA implements a digital circuit directly in hardware. When you "program" an FPGA, you are not writing software — you are creating a configuration file, called a bitstream, that tells the FPGA how to connect its internal logic blocks and routing wires to form a specific circuit. Once the bitstream is loaded, the FPGA behaves exactly like a custom-designed digital chip.

The most fundamental difference between an FPGA and a processor is the concept of **parallelism**. A processor executes one instruction at a time (or a few in a pipelined superscalar core). An FPGA, by contrast, can execute thousands of operations simultaneously because every logic block operates in parallel. If you design an FPGA circuit with 1,000 adders, all 1,000 adders produce results at the same time on the next clock edge. This makes FPGAs ideal for applications that require massive parallelism, high throughput, or deterministic real-time response.

Consider the difference between computing a 1,024-point Fast Fourier Transform (FFT) on a processor versus an FPGA. A processor might execute a software FFT algorithm using loops, taking thousands of clock cycles. An FPGA can implement a pipelined FFT architecture with dedicated butterflies, twiddle factor multipliers, and memory buffers, producing one output sample every clock cycle after the initial latency. The FPGA approach is faster, uses less energy per operation, and has deterministic timing — you know exactly how many clock cycles the result will take.

FPGAs are used in nearly every industry that demands high-performance digital signal processing, real-time control, or rapid prototyping. In **telecommunications**, FPGAs implement high-speed data converters, digital modulation, and error correction for 5G base stations. In **aerospace and defense**, they process radar signals, implement cryptography, and control satellite systems. In **automotive**, FPGAs are used in advanced driver assistance systems (ADAS), sensor fusion, and electric motor control. In **medical imaging**, they accelerate MRI and CT reconstruction algorithms. In **high-performance computing**, FPGAs are used as accelerators in data centers for machine learning, genomics, and financial modeling. In **prototyping**, they allow engineers to test digital designs before committing millions of dollars to an ASIC fabrication run.

The key advantages of FPGAs are:
- **Parallelism:** Thousands of operations run simultaneously.
- **Reconfigurability:** The same hardware can be reprogrammed for different applications.
- **Deterministic timing:** Every signal propagation delay is known and predictable.
- **Rapid prototyping:** Designs can be tested in hours instead of months.
- **Long product life:** FPGAs can be reprogrammed to fix bugs or add features after deployment.

The disadvantages are:
- **Higher cost per unit** than ASICs for high-volume production.
- **Higher power consumption** than equivalent ASICs because programmable routing consumes extra energy.
- **Steeper learning curve** than software programming because you must think in hardware.

#### Key concepts
- FPGA definition and architecture overview
- Parallelism vs. sequential execution (processor vs. FPGA)
- Deterministic timing and real-time response
- FPGA applications across industries
- Advantages and disadvantages of FPGAs

#### Hands-on activity
Research three real-world FPGA applications. For each one, write one paragraph explaining (1) what the FPGA does, (2) why an FPGA is better than a processor for this application, and (3) what would happen if a processor were used instead. Choose applications from different industries (e.g., one from telecommunications, one from automotive, one from medical).

#### Assessment idea
Ask learners to match five application descriptions to the correct platform: FPGA, ASIC, Microcontroller, GPU, or General-Purpose Processor. For example: "A prototype for a new video compression algorithm that needs to change weekly" → FPGA.

#### AI generation note
Create an 8-minute animated explainer video. Open with a split-screen comparison: a processor executing instructions one by one (sequential) vs. an FPGA executing a thousand operations at once (parallel). Use a traffic light analogy: a processor is a single traffic cop directing one car at a time; an FPGA is a thousand-lane highway where every car moves simultaneously. Show real FPGA applications with footage: 5G base stations, MRI machines, and satellite dishes. End with a reflection prompt: "What is one computational task you can think of that would benefit from massive parallelism?"

---

### Chapter 1.2 — FPGA vs. ASIC vs. CPLD vs. ASSP vs. Microcontroller

#### Learning objectives
- Distinguish between FPGAs, CPLDs, ASICs, ASSPs, and microcontrollers.
- Explain the trade-offs in cost, performance, power, flexibility, and time-to-market for each platform.
- Identify when to use an FPGA, when to use a CPLD, and when to design an ASIC.
- Describe the role of ASSPs and structured ASICs in the programmable logic ecosystem.

#### Detailed lesson content

The world of programmable and custom logic is not limited to FPGAs. Engineers must choose from a spectrum of devices, each with different strengths and weaknesses. Understanding these differences is essential for selecting the right platform for a given application.

A **Complex Programmable Logic Device (CPLD)** is the smaller cousin of the FPGA. It uses a simpler, more predictable interconnect structure and is typically used for glue logic, state machines, and simple control functions. CPLDs have lower density (fewer logic gates) than FPGAs but have faster and more deterministic pin-to-pin delays. They are non-volatile (their configuration is stored in FLASH memory), so they are ready to operate immediately when power is applied. A CPLD is ideal for simple tasks like address decoding, bus arbitration, and power sequencing. If your design needs fewer than 1,000 logic gates and requires instant-on behavior, a CPLD is often cheaper and simpler than an FPGA.

An **Application-Specific Integrated Circuit (ASIC)** is a custom-designed chip manufactured for a single purpose. Once the design is complete, it is sent to a semiconductor foundry (like TSMC or Samsung) where photolithography masks are created and silicon wafers are fabricated. ASICs offer the highest performance, lowest power consumption, and lowest cost per unit for high-volume production. However, the non-recurring engineering (NRE) cost for an ASIC can be millions of dollars, and the time from design to silicon is typically 12 to 24 months. ASICs are used when the product volume is high (millions of units) and the design is fixed.

An **Application-Specific Standard Product (ASSP)** is an off-the-shelf chip designed for a specific application but sold to multiple customers. For example, a USB controller chip, an Ethernet PHY, or a Bluetooth transceiver are ASSPs. They are not programmable, but they are cheaper than custom ASICs because the development cost is amortized across many customers. ASSPs are used when a standard function is needed and no customization is required.

A **microcontroller** is a small computer on a single chip, containing a processor core, memory, and I/O peripherals. It executes software instructions stored in flash memory. Microcontrollers are ideal for control-oriented tasks with moderate processing requirements, such as reading sensors, driving displays, and managing motors. They are much cheaper than FPGAs for simple tasks, but they cannot match the parallelism or deterministic timing of an FPGA.

The **FPGA** sits in the middle of this spectrum. It offers more logic and flexibility than a CPLD, more parallelism and determinism than a microcontroller, and lower NRE cost and faster time-to-market than an ASIC. The trade-off is higher per-unit cost and higher power consumption than an equivalent ASIC.

Here is a summary table:

| Platform | Flexibility | Performance | Power | Cost (Low Volume) | Cost (High Volume) | Time-to-Market |
|----------|-------------|-------------|-------|-------------------|-------------------|----------------|
| Microcontroller | Low | Low | Very Low | Very Low | Very Low | Weeks |
| CPLD | Medium | Medium | Low | Low | Low | Days |
| FPGA | High | High | Medium | Medium | Medium | Weeks |
| ASIC | None | Very High | Very Low | Very High | Very Low | 12–24 months |
| ASSP | None | High | Low | Low | Low | Immediate |

A **Structured ASIC** or **eFPGA** (embedded FPGA) is a hybrid approach. A structured ASIC has pre-diffused base layers with customizable metal layers, reducing NRE cost compared to a full custom ASIC. An eFPGA embeds FPGA fabric inside an ASIC or SoC, allowing post-silicon reconfiguration of critical functions. These technologies blur the lines between the categories and represent the future of programmable logic.

#### Key concepts
- FPGA, CPLD, ASIC, ASSP, and microcontroller definitions
- Trade-offs: flexibility, performance, power, cost, time-to-market
- Non-recurring engineering (NRE) cost
- When to choose each platform
- Structured ASICs and eFPGAs as hybrid solutions

#### Hands-on activity
For each of the following scenarios, choose the most appropriate platform and justify your choice: (1) A prototype for a new digital camera image processor that needs to change algorithms weekly. (2) A car engine control unit that will be produced in 10 million units. (3) A simple temperature monitor with a display and a buzzer. (4) A glue logic chip that decodes addresses and enables memory chips instantly at power-on. (5) A USB-to-serial converter for a laptop.

#### Assessment idea
Show a scenario: "A startup needs to build a prototype for a new AI accelerator. They have $50,000 budget and need to ship in 6 months. The final product, if successful, will sell 100,000 units." Ask: "What platform should they use for the prototype, and what should they use for the final product?" Answer: FPGA for the prototype (fast, flexible, low NRE), ASIC for the final product if volume justifies it.

#### AI generation note
Create a 9-minute slide-based lesson with a comparison table. Use a spectrum graphic showing flexibility on one axis and performance on the other, with each device plotted on it. Show real products for each category: an Arduino (microcontroller), a GAL16V8 (CPLD), an Intel MAX 10 (FPGA), an Apple A-series chip (ASIC), and a USB hub chip (ASSP). Include a decision-tree flowchart for platform selection.

---

### Chapter 1.3 — The History and Evolution of Programmable Logic

#### Learning objectives
- Trace the historical development from PROMs to PALs to CPLDs to FPGAs.
- Explain the significance of Xilinx's invention of the FPGA in 1985 and Altera's role in CPLDs.
- Describe the technological trends that have shaped modern FPGAs: Moore's Law, increasing logic density, embedded hard cores, and high-level synthesis.
- Identify the major FPGA vendors and their current product families.

#### Detailed lesson content

The story of programmable logic begins in the 1970s with **Programmable Read-Only Memory (PROM)** devices. A PROM is a memory chip that can be programmed once with a fixed truth table. Engineers realized that a PROM could be used as a lookup table to implement any combinational logic function. By storing the output of a Boolean function for every possible input combination, a PROM could replace a network of gates. However, PROMs were inefficient because they required 2^n memory locations for n inputs, making them impractical for functions with more than a few inputs.

In the late 1970s, **Monolithic Memories Inc. (MMI)** introduced the **Programmable Array Logic (PAL)** device. A PAL combined a programmable AND array with a fixed OR array, making it much more efficient than a PROM for logic implementation. PALs could implement multiple Boolean functions with shared product terms. The PAL architecture was revolutionary because it allowed engineers to replace dozens of discrete logic chips with a single programmable device. MMI's PAL Handbook became the bible of digital design for a generation.

In the 1980s, **Altera** (founded in 1983) introduced the **Erasable Programmable Logic Device (EPLD)** and later the **CPLD**. Altera's MAX series used an EEPROM-based programmable interconnect, allowing devices to be erased and reprogrammed electrically. CPLDs became the standard for simple glue logic and state machines.

The true revolution came in 1985 when **Ross Freeman**, an engineer at **Xilinx**, invented the **Field Programmable Gate Array**. Freeman's insight was to create a device with a two-dimensional array of small logic blocks, each connected to its neighbors through a programmable routing network. The first Xilinx FPGA, the XC2064, had 64 configurable logic blocks (CLBs) and was manufactured on a 2.5-micron process. Today, a single Xilinx Versal FPGA contains billions of transistors and hundreds of thousands of CLBs.

The FPGA industry has evolved through several generations:
- **First Generation (1985–1995):** Simple LUT-based logic, limited routing, used for prototyping and glue logic.
- **Second Generation (1995–2005):** Embedded block RAM, multipliers, and Phase-Locked Loops (PLLs) for clock generation. FPGAs became viable for signal processing.
- **Third Generation (2005–2015):** Embedded hard processors (ARM cores), high-speed transceivers, and PCIe interfaces. FPGAs became System-on-Chip (SoC) platforms.
- **Fourth Generation (2015–present):** AI/ML accelerators, High-Level Synthesis (HLS) tools, and advanced packaging (3D stacking). FPGAs compete with GPUs in data centers.

The major FPGA vendors today are:
- **AMD (formerly Xilinx):** The inventor of the FPGA. Current families include Artix-7, Kintex-7, Virtex-7, Zynq-7000, Zynq UltraScale+, and Versal.
- **Intel (formerly Altera):** Acquired by Intel in 2015. Current families include MAX 10, Cyclone V, Arria 10, Stratix 10, and Agilex.
- **Lattice Semiconductor:** Focuses on low-power and small-form-factor FPGAs. Families include iCE40, MachXO, and ECP.
- **Microchip (formerly Microsemi):** Focuses on radiation-tolerant and security-focused FPGAs. Families include IGLOO, ProASIC, and SmartFusion.

A key trend is the integration of **hard intellectual property (IP)** blocks directly into the FPGA silicon. Modern FPGAs contain hard ARM Cortex-A9 or Cortex-A53 processors, DDR memory controllers, PCIe Gen4 interfaces, and even AI/ML inference engines. This transforms the FPGA from a pure logic device into a complete heterogeneous computing platform.

#### Key concepts
- PROM, PAL, CPLD, and FPGA evolution
- Ross Freeman and the invention of the FPGA
- Xilinx vs. Altera/Intel history
- Generational trends: logic → memory → DSP → hard processors → AI/ML
- Major FPGA vendors and product families
- Hard IP integration and heterogeneous computing

#### Hands-on activity
Create a timeline of programmable logic from 1970 to the present. For each decade, list the key inventions, the most important company, and one representative device. Then research the specifications of a modern FPGA (e.g., Intel Agilex or Xilinx Versal) and compare its logic cell count, memory, DSP blocks, and transceivers to the original Xilinx XC2064 from 1985.

#### Assessment idea
Ask: "What was the key insight that made Ross Freeman's FPGA invention different from a CPLD?" Answer: the two-dimensional array of small logic blocks with a programmable routing network, allowing arbitrary connections and scalable parallelism. Then ask: "Why did Intel acquire Altera in 2015?" Answer: to integrate FPGA technology with Intel processors for data center acceleration and heterogeneous computing.

#### AI generation note
Create a 9-minute historical documentary-style video. Use a timeline graphic with photos of the key devices. Show the XC2064 die photo and compare it to a modern Versal die photo. Include short clips of Ross Freeman's original patent diagram. Show how Moore's Law has driven FPGA density. End with a montage of modern FPGA applications and a prompt: "Which FPGA vendor family would you research for a low-power IoT sensor node?"

---

## Module 2: FPGA Architecture Deep Dive

> **Goal:** Understand the internal structure of an FPGA, from the basic logic cell to the global routing network, and learn how different configuration technologies work.

---

### Chapter 2.1 — Inside the FPGA: LUTs, CLBs, and Programmable Interconnect

#### Learning objectives
- Explain how a Look-Up Table (LUT) implements any combinational logic function.
- Describe the Configurable Logic Block (CLB) or Logic Element (LE) and its components.
- Understand the programmable interconnect network and how signals travel between logic blocks.
- Explain the role of the switch matrix and routing channels in FPGA connectivity.

#### Detailed lesson content

To understand how an FPGA works, you must look inside it. The fundamental building block of an FPGA is the **Look-Up Table (LUT)**. A LUT is a small memory (typically 16x1 for a 4-input LUT, or 64x1 for a 6-input LUT) that stores the truth table of a Boolean function. The inputs to the LUT serve as the address bits, and the output is the data bit stored at that address. For example, a 4-input LUT can implement any Boolean function of four variables because there are 2^4 = 16 possible input combinations, and the LUT can store a 0 or 1 for each combination.

Here is how a 4-input LUT implements an AND-OR function: suppose the function is F = (A AND B) OR (C AND D). The truth table has 16 rows. For each row where A=1, B=1, C=0, D=0, the output is 1 (because A AND B is true). The FPGA configuration tool calculates the truth table, stores it in the LUT's SRAM cells, and the LUT produces the correct output for any combination of inputs. The LUT itself is just a multiplexer connected to SRAM cells. The inputs A, B, C, and D select which SRAM cell drives the output. This means the LUT is a universal logic element — it can implement any function of its inputs, not just AND, OR, or XOR.

A LUT is typically combined with a **D flip-flop** and a **carry chain** to form a **Logic Element (LE)** or **Configurable Logic Block (CLB)**. In Intel terminology, this is called a Logic Element (LE). In Xilinx terminology, it is called a Slice. A single CLB contains:
- One or more LUTs (usually 4-input or 6-input)
- One or more D flip-flops (for sequential logic)
- A carry chain (for fast arithmetic operations like addition)
- A multiplexer to select between LUT output and flip-flop output
- Control signals for clock, enable, and asynchronous set/reset

The combination of a LUT and a flip-flop allows a CLB to implement either combinational logic (the LUT output feeds directly to the routing) or sequential logic (the LUT output feeds the flip-flop, and the flip-flop output feeds the routing). This is the basis of all digital design in FPGAs: combinational logic computes the next state, and sequential logic stores it.

The **programmable interconnect** is the network of wires that connects CLBs to each other and to the I/O blocks. It is the most complex and area-consuming part of the FPGA. The interconnect consists of horizontal and vertical routing channels with wires of different lengths (short wires for local connections, long wires for global connections). At the intersections of these channels are **switch matrices**, which contain programmable switches that can connect any wire to any other wire. The switch matrix is what makes the FPGA "field programmable" — by changing the configuration of the switches, you can create any wiring topology.

The interconnect is also the biggest performance bottleneck in an FPGA. A signal may pass through multiple switch matrices and wire segments, each adding delay. The longest path through the combinational logic and interconnect determines the maximum clock frequency of the design. This is why **static timing analysis** is critical: the tool must verify that every signal arrives at its destination before the next clock edge.

Modern FPGAs also contain **specialized hard blocks** that are not programmable but are pre-designed for specific functions:
- **Block RAM (BRAM):** Dedicated memory blocks, typically 18 Kb or 36 Kb, used for FIFOs, buffers, and lookup tables.
- **Digital Signal Processing (DSP) blocks:** Pre-designed multipliers and accumulators for fast arithmetic.
- **Phase-Locked Loops (PLLs):** Clock generation and frequency synthesis circuits.
- **High-speed transceivers:** Serial communication blocks for PCIe, Ethernet, and other protocols.
- **I/O blocks:** Configurable input/output cells that support various voltage standards (LVCMOS, LVDS, HSTL, SSTL).

#### Key concepts
- Look-Up Table (LUT) and truth table implementation
- Configurable Logic Block (CLB) / Logic Element (LE)
- LUT + flip-flop + carry chain architecture
- Programmable interconnect and switch matrices
- Routing channels and wire delays
- Hard blocks: BRAM, DSP, PLL, transceivers, I/O blocks

#### Hands-on activity
Given a 2-input XOR function (F = A XOR B), draw the truth table and show how it would be stored in a 2-input LUT. Then calculate how many 4-input LUTs are needed to implement a 4-input XOR function (F = A XOR B XOR C XOR D). Answer: A 4-input XOR requires three 2-input XORs in a tree. Each 2-input XOR fits in one LUT. So three LUTs are needed. Draw a diagram showing the LUT connections.

#### Assessment idea
Ask: "How many different Boolean functions can a 4-input LUT implement?" Answer: 2^(2^4) = 2^16 = 65,536. Then ask: "Why does a LUT use SRAM cells instead of logic gates to implement the function?" Answer: SRAM cells store the truth table directly, making the LUT a universal logic element that can implement any function without changing the physical structure.

#### AI generation note
Create a 10-minute animated 3D tour of an FPGA die. Start with a zoomed-out view showing the array of CLBs. Zoom into one CLB and show the LUT as a multiplexer with SRAM cells. Show the flip-flop, carry chain, and output mux. Then zoom out and show the routing channels and switch matrices as a city grid with programmable intersections. Animate a signal traveling from one CLB to another through the routing network. Use color coding for different signal paths.

---

### Chapter 2.2 — FPGA Configuration Technologies: SRAM, FLASH, and Anti-Fuse

#### Learning objectives
- Explain how SRAM-based FPGAs store their configuration and why they are volatile.
- Describe FLASH-based and anti-fuse FPGA technologies and their non-volatile behavior.
- Compare the trade-offs in reprogrammability, power, cost, security, and instant-on capability.
- Explain the configuration process: power-on, bitstream loading, and configuration memory.

#### Detailed lesson content

An FPGA is only useful if it can be programmed, and the way it stores its configuration determines many of its characteristics. There are three main configuration technologies used in FPGAs: **SRAM-based**, **FLASH-based**, and **anti-fuse**. Each has distinct advantages and disadvantages.

**SRAM-based FPGAs** are the most common type. They store their configuration in static RAM cells distributed throughout the device. The SRAM cells control the multiplexers in the LUTs, the switches in the routing network, and the settings in the I/O blocks. Because SRAM is volatile, the configuration is lost when power is removed. This means an SRAM-based FPGA must be reprogrammed every time it powers on. The configuration data, called a **bitstream**, is typically stored in an external non-volatile memory such as a serial flash chip (e.g., an EPCS or QSPI flash). When the FPGA powers on, it reads the bitstream from the external flash and configures itself. This process takes anywhere from a few milliseconds to a few seconds depending on the bitstream size.

The advantages of SRAM-based FPGAs are:
- **Unlimited reprogrammability:** You can reprogram the FPGA an infinite number of times.
- **Fast reprogramming:** The entire device can be reconfigured in milliseconds.
- **Advanced features:** SRAM-based FPGAs tend to have the latest logic densities, fastest transceivers, and most advanced features.

The disadvantages are:
- **Volatility:** Configuration is lost at power-off, requiring external storage.
- **Power consumption:** SRAM cells consume standby power.
- **Security risk:** The bitstream can be intercepted when loaded from external memory, making it vulnerable to reverse engineering. (Modern FPGAs support bitstream encryption to mitigate this.)

**FLASH-based FPGAs** store their configuration in non-volatile FLASH memory embedded inside the FPGA. The FLASH cells control the routing and LUT settings just like SRAM cells, but they retain their state when power is removed. This means the FPGA is ready to operate immediately when power is applied — there is no external flash chip and no configuration delay. FLASH-based FPGAs are used in applications where instant-on behavior is critical, such as automotive power sequencing, industrial control systems, and aerospace avionics.

The advantages of FLASH-based FPGAs are:
- **Instant-on:** The device is operational immediately at power-up.
- **Single-chip solution:** No external configuration memory needed.
- **Lower standby power:** FLASH cells do not consume power to retain state.
- **Security:** The bitstream is stored internally and cannot be intercepted.

The disadvantages are:
- **Limited reprogrammability:** FLASH cells can be erased and reprogrammed typically 10,000 to 100,000 times, which is far fewer than SRAM.
- **Slower reprogramming:** Erasing FLASH takes milliseconds, compared to microseconds for SRAM.
- **Lower density:** FLASH-based FPGAs typically have fewer logic resources than SRAM-based FPGAs of the same process generation.

**Anti-fuse FPGAs** use a one-time programmable (OTP) technology. An anti-fuse is a microscopic insulating layer between two metal conductors. Before programming, the anti-fuse has very high resistance (it is an open circuit). During programming, a high voltage is applied, which permanently breaks down the insulating layer and creates a low-resistance connection. Once programmed, the connection cannot be erased. Anti-fuse FPGAs are used in extreme environments where radiation, vibration, or security requirements make reprogrammable devices unsuitable. They are common in military, aerospace, and automotive safety systems.

The advantages of anti-fuse FPGAs are:
- **Extreme reliability:** No configuration memory to corrupt from radiation or voltage transients.
- **High security:** The device cannot be reverse-engineered by reading the configuration.
- **Low power:** No standby power for configuration memory.

The disadvantages are:
- **One-time programmable:** If the design has a bug, the device must be discarded.
- **High cost:** Anti-fuse technology is more expensive per gate.
- **Limited availability:** Fewer vendors and families compared to SRAM and FLASH.

The **configuration process** for an SRAM-based FPGA works as follows:
1. Power is applied to the FPGA.
2. The FPGA's internal configuration controller reads a mode pin to determine the configuration source (active serial, passive serial, JTAG, etc.).
3. The FPGA sends a clock to the external flash chip and reads the bitstream serially.
4. As the bitstream is read, it is shifted into the FPGA's configuration SRAM cells.
5. A CRC check is performed to verify the integrity of the bitstream.
6. The FPGA releases its I/O pins from tri-state and begins operating according to the loaded design.

#### Key concepts
- SRAM-based FPGA: volatile, external flash, unlimited reprogramming
- FLASH-based FPGA: non-volatile, instant-on, limited reprogramming
- Anti-fuse FPGA: one-time programmable, extreme reliability
- Bitstream and configuration memory
- Configuration process: power-on, loading, CRC check, startup
- Trade-offs: reprogrammability, power, cost, security, instant-on

#### Hands-on activity
Research the Intel MAX 10 FPGA (used in the DE10-Lite board). Determine whether it is SRAM-based, FLASH-based, or hybrid. (Answer: The MAX 10 is a hybrid — it has embedded FLASH for configuration storage and SRAM for the logic operation, giving it instant-on capability while maintaining reprogrammability.) Write a one-page comparison of the MAX 10 to the Intel Cyclone V (SRAM-based) and the Microchip RTG4 (anti-fuse).

#### Assessment idea
Ask: "You are designing a brake controller for a commercial aircraft. Which FPGA technology would you choose and why?" Answer: Anti-fuse or FLASH-based, because of extreme reliability, instant-on, and immunity to radiation-induced configuration corruption. Then ask: "You are prototyping a new machine learning accelerator that changes algorithms daily. Which technology would you choose?" Answer: SRAM-based, because of unlimited reprogrammability and fast reconfiguration.

#### AI generation note
Create a 9-minute lesson with animated cross-sections of each technology. Show the SRAM cell as a 6-transistor circuit. Show the FLASH cell with a floating gate. Show the anti-fuse as a microscopic insulating layer being broken down by a high voltage. Animate the configuration process: power-on, clock pulses, bitstream shifting into the FPGA. Use a comparison table graphic that highlights each technology's strengths in green and weaknesses in red.

---

### Chapter 2.3 — Modern FPGA Families and Selecting the Right Device

#### Learning objectives
- Compare the major FPGA families from Intel (Altera) and AMD (Xilinx).
- Identify the key specifications of an FPGA: logic elements, memory, DSP blocks, I/O count, and transceivers.
- Select an appropriate FPGA for a given application based on resource requirements and constraints.
- Understand the role of development boards and evaluation kits in FPGA learning and prototyping.

#### Detailed lesson content

The FPGA market is dominated by two giants: **Intel** (which acquired Altera in 2015) and **AMD** (which acquired Xilinx in 2022). Each company offers a range of FPGA families optimized for different applications, from low-cost IoT devices to high-performance data center accelerators. Understanding these families is essential for selecting the right device and development board.

**Intel FPGA Families:**
- **MAX 10:** Low-cost, instant-on FPGAs with embedded FLASH and ADC. Ideal for sensor fusion, motor control, and IoT. The DE10-Lite board uses the MAX 10 (10M50DAF484C7G), which has 50,000 logic elements, 1,638 Kbits of M9K memory, 144 DSP blocks, and an embedded 12-bit ADC.
- **Cyclone V:** Low-cost, low-power FPGAs for industrial, automotive, and wireless applications. The Cyclone V SoC combines FPGA fabric with a dual-core ARM Cortex-A9 processor.
- **Arria 10:** Mid-range FPGAs with higher performance, hard PCIe Gen3, and DDR4 memory controllers. Used in high-speed networking and video processing.
- **Stratix 10:** High-performance FPGAs with Intel Hyperflex architecture, hard ARM Cortex-A53 cores, and transceivers up to 58 Gbps. Used in data centers, 5G, and AI/ML acceleration.
- **Agilex:** Intel's newest family with 10nm SuperFin process, PCIe Gen5, and DDR5 support. Targets AI, networking, and high-performance computing.

**AMD (Xilinx) FPGA Families:**
- **Artix-7:** Low-cost, low-power FPGAs for cost-sensitive applications. The Basys 3 and Nexys A7 boards use Artix-7 devices.
- **Kintex-7:** Mid-range FPGAs with high-performance transceivers. Used in 10G Ethernet, software-defined radio, and medical imaging.
- **Virtex-7:** High-end FPGAs with the highest logic density and fastest transceivers. Used in military, aerospace, and test equipment.
- **Zynq-7000:** SoC devices combining FPGA fabric with a dual-core ARM Cortex-A9 processor (hard processor system). The Zybo and PYNQ boards use Zynq-7000.
- **Zynq UltraScale+:** Advanced SoC with quad-core ARM Cortex-A53, dual-core Cortex-R5, and Mali GPU. Used in ADAS, machine vision, and 5G.
- **Versal:** Adaptive compute acceleration platform (ACAP) with scalar engines, adaptable engines (FPGA), and AI engines. Represents the next generation of heterogeneous computing.

When selecting an FPGA for a project, you must estimate the resource requirements:
- **Logic Elements (LEs) or LUTs:** How many combinational and sequential functions does your design need? A simple state machine might need 100 LEs. A complex processor might need 10,000.
- **Memory (BRAM):** How much on-chip memory do you need for buffers, FIFOs, and lookup tables? Each M9K block provides 9 Kbits. A 1Kx32 RAM needs 4 M9K blocks.
- **DSP Blocks:** How many multipliers and accumulators do you need? A FIR filter with 100 taps needs 100 multipliers. If the FPGA has 144 DSP blocks, it can handle it.
- **I/O Pins:** How many external connections do you need? Count the switches, LEDs, sensors, communication ports, and memory interfaces.
- **Clocks:** How many different clock domains does your design have? Each PLL can generate multiple clock frequencies from a single reference.
- **Transceivers:** Do you need high-speed serial communication (PCIe, Ethernet, SATA)? If so, you need an FPGA with transceivers.
- **Power and Cost:** What is your budget and power envelope? Low-cost FPGAs like MAX 10 or Artix-7 are ideal for learning and small projects. High-end FPGAs like Stratix 10 or Virtex are for production systems with demanding requirements.

The **DE10-Lite** board, which is the recommended hardware for this course, is an excellent learning platform. It features the Intel MAX 10 (10M50DAF484C7G) FPGA, 64 MB of SDRAM, an Arduino-compatible header, a MicroSD card slot, an accelerometer, an ADC, and a 10-pin JTAG connector. The board is powered by USB, and the Intel Quartus Prime Lite Edition software is free and supports the MAX 10 device. The DE10-Lite is affordable, well-documented, and has enough resources for all the projects in this course.

#### Key concepts
- Intel FPGA families: MAX 10, Cyclone, Arria, Stratix, Agilex
- AMD/Xilinx FPGA families: Artix, Kintex, Virtex, Zynq, Versal
- FPGA specifications: LEs, LUTs, BRAM, DSP blocks, I/O pins, PLLs, transceivers
- Resource estimation for design selection
- DE10-Lite development board features
- Development boards vs. production modules

#### Hands-on activity
Download the datasheets for the Intel MAX 10 (10M50DAF484C7G) and the AMD Xilinx Artix-7 (XC7A35T). Create a comparison table with the following specifications: logic elements/LUTs, total memory (Kb), DSP blocks, I/O pins, ADC, PLLs, and approximate cost. Then, for each of the following projects, choose which FPGA family would be most appropriate and justify your choice: (1) a 32-tap FIR filter running at 100 MHz, (2) a simple UART-to-SPI bridge, (3) a 4K video processing pipeline.

#### Assessment idea
Ask: "A design requires 5,000 logic elements, 50 Kbits of memory, 20 multipliers, and 40 I/O pins. Which of these FPGAs would be the most cost-effective choice: Intel MAX 10 (50K LEs), Intel Cyclone V (25K LEs), or Xilinx Artix-7 (33K LUTs)?" Answer: The Intel MAX 10 is the most cost-effective because it meets all requirements with the lowest cost. The Cyclone V and Artix-7 are overkill and more expensive.

#### AI generation note
Create a 10-minute buyer's-guide style video. Show the DE10-Lite board with callouts for each component. Display spec comparison tables for Intel and Xilinx families. Use a decision tree graphic: "Do you need a hard processor? → Yes → Zynq or Cyclone V SoC. → No → Do you need high-speed transceivers? → Yes → Kintex/Arria. → No → MAX 10 or Artix." Include a cost-vs-performance scatter plot.

---

## Module 3: Digital Logic Design for FPGA

> **Goal:** Review and deepen the digital logic concepts that form the foundation of all FPGA design, from combinational circuits to sequential circuits and their FPGA implementation.

---

### Chapter 3.1 — Combinational Logic: Gates, Adders, Multiplexers, and Decoders

#### Learning objectives
- Design combinational logic circuits using Boolean algebra and truth tables.
- Implement half-adders, full-adders, ripple-carry adders, and carry-lookahead adders.
- Use multiplexers and demultiplexers as universal logic building blocks.
- Implement decoders and encoders for address decoding and data selection.

#### Detailed lesson content

Combinational logic is the foundation of digital design. A combinational circuit is one where the output depends only on the current inputs, not on any previous state. The basic building blocks are logic gates: AND, OR, NOT, NAND, NOR, XOR, and XNOR. In FPGA design, we rarely implement gates directly in hardware because the FPGA uses LUTs to implement arbitrary Boolean functions. However, understanding gate-level behavior is essential for designing efficient circuits and for interpreting the output of synthesis tools.

A **half-adder** is the simplest arithmetic circuit. It adds two single-bit inputs (A and B) and produces a sum (S) and a carry-out (Cout). The Boolean equations are: S = A XOR B, and Cout = A AND B. A half-adder cannot accept a carry-in from a previous stage, so it is only useful for the least significant bit of a multi-bit addition.

A **full-adder** adds three bits: A, B, and a carry-in (Cin). It produces a sum and a carry-out. The Boolean equations are: S = A XOR B XOR Cin, and Cout = (A AND B) OR (Cin AND (A XOR B)). Full-adders can be chained together to create a **ripple-carry adder**, which adds two N-bit numbers. In a ripple-carry adder, the carry propagates from the least significant bit to the most significant bit, one stage at a time. This means the total delay is proportional to the number of bits, making ripple-carry adders slow for wide data paths (e.g., 64-bit addition).

A **carry-lookahead adder** solves this problem by calculating the carry bits in parallel. It uses generate (G = A AND B) and propagate (P = A XOR B) signals. The carry-out for each bit is computed as Cout = G OR (P AND Cin). By expanding this equation recursively, the carry for each bit can be computed with only a few gate delays, regardless of the adder width. Modern FPGAs have dedicated carry chains that implement this lookahead logic in hardware, making arithmetic operations extremely fast.

A **multiplexer (MUX)** is a circuit that selects one of several input signals and forwards it to a single output. A 2-to-1 MUX has two data inputs (D0, D1), one select input (S), and one output (Y). When S=0, Y=D0; when S=1, Y=D1. The Boolean equation is Y = (D0 AND NOT S) OR (D1 AND S). Multiplexers are universal logic elements: a 2-to-1 MUX can implement any function of two variables, and a 4-to-1 MUX can implement any function of three variables. In FPGAs, the routing network is essentially a giant multiplexer tree, and LUTs are implemented using multiplexer structures.

A **decoder** converts a binary code into a one-hot output. A 3-to-8 decoder has three inputs and eight outputs. Only one output is active (HIGH) at a time, corresponding to the binary value of the inputs. Decoders are used for address decoding in memory systems, chip select generation, and controlling seven-segment displays. An **encoder** does the opposite: it converts a one-hot input into a binary code. A **priority encoder** outputs the binary code of the highest-priority active input.

In FPGA design, these circuits are described using Hardware Description Languages (HDLs) rather than drawing schematics. The synthesis tool automatically maps the HDL description to LUTs, carry chains, and routing resources. For example, a 4-bit adder described in Verilog will be synthesized to use the FPGA's dedicated carry chain, not a ripple of generic LUTs, resulting in much higher performance.

#### Key concepts
- Combinational logic: gates, truth tables, Boolean equations
- Half-adder, full-adder, ripple-carry adder, carry-lookahead adder
- Multiplexer (MUX) as universal logic
- Decoder, encoder, and priority encoder
- FPGA implementation: LUTs, carry chains, and synthesis

#### Hands-on activity
Design a 4-bit binary adder/subtractor circuit. The circuit has two 4-bit inputs (A and B), a mode control input (M), and a 4-bit output (S) plus a carry-out. When M=0, the circuit performs A + B. When M=1, it performs A - B by computing A + (two's complement of B). Draw the logic diagram using full-adders and XOR gates. Then write the Verilog code for this circuit.

#### Assessment idea
Given a 4-to-1 multiplexer with inputs I0=0, I1=1, I2=0, I3=1, and select lines S1=1, S0=0, what is the output? Answer: Y = I2 = 0. Then ask: "How many 4-to-1 multiplexers are needed to build an 8-to-1 multiplexer?" Answer: Two 4-to-1 MUXes plus one 2-to-1 MUX, or two 4-to-1 MUXes with a select line controlling the output MUX.

#### AI generation note
Create a 9-minute lesson with animated logic diagrams. Show a half-adder and full-adder with gates lighting up. Animate the carry rippling through a 4-bit ripple-carry adder, then show a carry-lookahead adder computing all carries in parallel. Show a multiplexer as a railroad switch selecting one track. Show a decoder lighting up one of eight outputs. Include a live Quartus Prime RTL Viewer screenshot showing the synthesized circuit.

---

### Chapter 3.2 — Sequential Logic: Flip-Flops, Registers, Counters, and Shift Registers

#### Learning objectives
- Explain the behavior of D flip-flops, T flip-flops, and JK flip-flops.
- Design synchronous and asynchronous counters.
- Use shift registers for parallel-to-serial and serial-to-parallel conversion.
- Understand setup time, hold time, and clock-to-Q delay in sequential circuits.

#### Detailed lesson content

While combinational logic computes outputs based on current inputs, **sequential logic** computes outputs based on both current inputs and the current state (stored in memory). Sequential circuits are what make digital systems capable of memory, counting, and state-based behavior. The fundamental building block of sequential logic is the **flip-flop**.

A **D flip-flop** (data flip-flop) is the most common type. It has a data input (D), a clock input (CLK), and an output (Q). On the rising edge of the clock (the transition from LOW to HIGH), the value at D is captured and stored in the flip-flop. The output Q then holds this value until the next rising clock edge. Between clock edges, changes at D are ignored. This means the D flip-flop is an edge-triggered device: it only updates at the clock edge.

The D flip-flop is the workhorse of FPGA design. Every register, counter, and state machine in an FPGA is built from D flip-flops. In an FPGA, each CLB contains one or more D flip-flops with additional control signals: clock enable (CE), synchronous reset, asynchronous reset, and preset.

A **T flip-flop** (toggle flip-flop) toggles its output on every clock edge when its T input is HIGH. If T is LOW, the output remains unchanged. A T flip-flop is useful for building counters because connecting T to a constant HIGH creates a circuit that toggles every clock cycle, dividing the clock frequency by 2.

A **JK flip-flop** is a universal flip-flop with two inputs (J and K). When J=K=0, the output holds. When J=1, K=0, the output sets to 1. When J=0, K=1, the output resets to 0. When J=K=1, the output toggles. The JK flip-flop is more flexible than the D flip-flop but is rarely used in modern FPGA design because D flip-flops are simpler and more efficient in LUT-based architectures.

A **register** is a group of flip-flops that store a multi-bit value. An 8-bit register consists of eight D flip-flops sharing the same clock signal. Registers are used to hold data between clock cycles, pipeline stages, and processor states. In Verilog, a register is described as an array of flip-flops triggered by a clock edge.

A **counter** is a sequential circuit that increments or decrements its value on each clock edge. A **binary counter** counts in binary: 0000, 0001, 0010, 0011, and so on. A **modulo-N counter** counts from 0 to N-1 and then wraps around. Counters are built from flip-flops and combinational logic (usually XOR gates for incrementing). The Intel 74LS163 is a classic 4-bit synchronous binary counter. In FPGA design, counters are described in HDL and synthesized to flip-flops and LUTs.

A **shift register** is a sequential circuit that shifts its contents one position left or right on each clock edge. A **serial-in, parallel-out (SIPO)** shift register accepts one bit per clock cycle and outputs all bits simultaneously. A **parallel-in, serial-out (PISO)** shift register loads all bits at once and outputs them one bit per clock cycle. Shift registers are used for serial communication (UART, SPI), delay lines, and pattern generation.

**Timing parameters** are critical for sequential circuits:
- **Setup time (tsu):** The minimum time the D input must be stable before the clock edge.
- **Hold time (th):** The minimum time the D input must remain stable after the clock edge.
- **Clock-to-Q delay (tco):** The time from the clock edge to when the Q output becomes stable.
- **Propagation delay (tpd):** The time for a signal to propagate through combinational logic.

For a sequential circuit to work correctly, the clock period must be greater than the sum of the setup time, the combinational logic delay, and the clock-to-Q delay: T_clock > tco + tpd + tsu. This is the fundamental timing equation for synchronous digital design. If this inequality is violated, the circuit will fail with unpredictable behavior (metastability).

#### Key concepts
- D flip-flop, T flip-flop, JK flip-flop
- Registers and multi-bit storage
- Binary counters and modulo-N counters
- Shift registers: SIPO, PISO, SISO, PIPO
- Setup time, hold time, clock-to-Q delay
- Timing equation for synchronous circuits

#### Hands-on activity
Design a 4-bit Johnson counter (also called a twisted-ring counter). A Johnson counter is a shift register where the complement of the last bit is fed back to the first bit. It has 2N states for N flip-flops. Draw the state diagram, write the Verilog code, and simulate it to verify the sequence. Compare the Johnson counter to a standard binary counter in terms of state count and decoding complexity.

#### Assessment idea
Given a D flip-flop with setup time = 2 ns, hold time = 1 ns, and clock-to-Q delay = 3 ns, and combinational logic with a propagation delay of 8 ns, what is the maximum clock frequency? Answer: T_clock > 3 + 8 + 2 = 13 ns, so f_max = 1 / 13 ns ≈ 76.9 MHz. Then ask: "What happens if the clock frequency is 100 MHz?" Answer: The setup time is violated, and the flip-flop may capture an incorrect value (metastability).

#### AI generation note
Create a 10-minute lesson with animated timing diagrams. Show a D flip-flop capturing data on the rising edge with a setup time window highlighted in green. Show a metastability event where the setup time is violated and the output becomes unstable. Animate a 4-bit binary counter incrementing with each clock pulse. Show a shift register shifting bits left with animated arrows. Include a real oscilloscope trace showing clock and data signals.

---

### Chapter 3.3 — From Logic Equations to LUTs: How FPGAs Implement Digital Circuits

#### Learning objectives
- Explain how a combinational logic function is mapped to a LUT.
- Describe how flip-flops are mapped to the registers in a CLB.
- Understand how carry chains implement arithmetic operations efficiently.
- Explain the role of synthesis and technology mapping in the FPGA design flow.

#### Detailed lesson content

When you write a digital design in Verilog or VHDL, the FPGA design tool must translate your high-level description into a configuration for the physical FPGA. This process involves several steps: **synthesis**, **technology mapping**, **placement**, and **routing**. Understanding how your logic description maps to FPGA hardware is essential for writing efficient code and debugging timing problems.

**Synthesis** is the process of converting your HDL description into a netlist of primitive logic elements. The synthesis tool reads your Verilog or VHDL code, infers the logic functions, and produces an intermediate representation using generic gates (AND, OR, NOT, flip-flops, multiplexers). For example, if you write `assign Y = (A & B) | (C & D);`, the synthesis tool creates an AND gate for `A & B`, another AND gate for `C & D`, and an OR gate combining them. If you write `always @(posedge clk) Q <= D;`, the synthesis tool infers a D flip-flop.

**Technology mapping** is the process of converting the generic netlist into a netlist of the specific primitives available in the target FPGA. For an Intel FPGA, the target primitives are Logic Elements (LEs), each containing a 4-input LUT, a flip-flop, and a carry chain. The technology mapping tool groups the generic gates into sets that fit into the LUTs and assigns flip-flops to the registers.

For example, consider a 4-input AND function: `Y = A & B & C & D`. This function has four inputs and one output. A 4-input LUT can implement any function of four variables, so the technology mapper places this entire function into a single LUT. The LUT's SRAM cells are programmed with the truth table: the output is 1 only when A=B=C=D=1, and 0 for all other 15 combinations.

Now consider a 5-input AND function: `Y = A & B & C & D & E`. A 4-input LUT can only handle four variables, so the function must be split across two LUTs. The first LUT computes `X = A & B & C & D`, and the second LUT computes `Y = X & E`. This requires two LUTs and one routing connection between them. The technology mapper handles this automatically, but the designer should be aware that wide logic functions consume more LUTs.

For arithmetic operations, the FPGA uses dedicated **carry chains**. A full-adder can be implemented in a single LE: the LUT computes the sum bit, and the dedicated carry logic computes the carry-out using a fast, low-delay path. The carry chain connects adjacent LEs directly, bypassing the general routing network. This is why FPGA adders are much faster than adders built from generic logic gates. When you write `assign sum = a + b;` in Verilog, the synthesis tool recognizes the addition operator and maps it to the carry chain.

For sequential logic, the synthesis tool maps inferred flip-flops to the registers in the CLBs. If you write `always @(posedge clk) q <= d;`, the tool places a D flip-flop in the CLB. The clock signal is connected to the global clock network, which is a specialized, low-skew routing network designed to distribute the clock to all flip-flops simultaneously. The clock enable, reset, and preset signals are also routed through dedicated networks.

The synthesis tool provides reports that show how your design was mapped to the FPGA. The **RTL Viewer** shows the generic netlist before technology mapping, displaying your design as a schematic of gates and flip-flops. The **Technology Map Viewer** shows the netlist after technology mapping, displaying the actual LUTs, flip-flops, and carry chains used. These viewers are powerful debugging tools because they let you verify that the synthesis tool interpreted your HDL code correctly.

#### Key concepts
- Synthesis: HDL to generic netlist
- Technology mapping: generic netlist to FPGA primitives (LUTs, flip-flops, carry chains)
- How LUTs implement combinational logic of any width
- Carry chains for fast arithmetic
- Clock networks and clock distribution
- RTL Viewer and Technology Map Viewer

#### Hands-on activity
Write a Verilog module that implements a 4-bit magnitude comparator (compares two 4-bit numbers A and B and outputs A>B, A=B, A<B). Synthesize it in Quartus Prime for the MAX 10 device. Open the RTL Viewer and the Technology Map Viewer. Count how many LUTs and flip-flops are used. Compare the resource usage to a 4-bit adder module. Document your findings with screenshots.

#### Assessment idea
Ask: "You write a Verilog module with a 6-input AND gate: `assign Y = A & B & C & D & E & F;`. How many 4-input LUTs are needed on an Intel FPGA?" Answer: At least two LUTs. The first LUT computes `X = A & B & C & D`, and the second LUT computes `Y = X & E & F`. Then ask: "Why is a 4-bit adder synthesized to fewer LUTs than a 4-input AND gate would suggest?" Answer: the adder uses dedicated carry chains, so each bit of the adder uses only one LUT for the sum bit, with the carry handled by the fast carry logic.

#### AI generation note
Create a 10-minute animated visualization. Start with Verilog code on the screen. Animate the synthesis process: gates appearing, then being grouped into LUTs. Show a 4-input AND gate fitting into one LUT. Show a 5-input AND gate being split across two LUTs. Show an adder using the carry chain. Then show the RTL Viewer and Technology Map Viewer side by side. Use color coding to distinguish LUTs, flip-flops, and carry chains.

---

## Module 4: Hardware Description Languages — Verilog

> **Goal:** Master the Verilog language for describing digital circuits, from basic syntax to combinational and sequential logic, testbenches, and simulation.

---

### Chapter 4.1 — Introduction to Verilog: Modules, Ports, Wires, and Nets

#### Learning objectives
- Explain the history and purpose of Verilog as a hardware description language.
- Write a Verilog module with input and output ports.
- Understand the difference between wire and reg data types.
- Use vectors, parameters, and constants in Verilog.

#### Detailed lesson content

Verilog is a hardware description language (HDL) created in the early 1980s by Gateway Design Automation (later acquired by Cadence). It was originally a simulation language, but it was quickly adopted for synthesis as well. Today, Verilog (along with its modern extension, SystemVerilog) is one of the two dominant HDLs used in the semiconductor industry, the other being VHDL. Verilog is particularly popular in North America and Asia, and it is the primary language for FPGA design at Intel and Xilinx.

Verilog is not a programming language like C or Python. It is a **description language** for hardware. Every Verilog statement describes a physical component or a connection. When you write `assign Y = A & B;`, you are describing a physical AND gate. When you write `always @(posedge clk)`, you are describing a physical flip-flop. This is a fundamentally different mindset from software: in Verilog, everything happens in parallel, not sequentially. There is no "main function" that executes line by line. Instead, every module, every gate, and every wire exists simultaneously and operates continuously.

The basic unit of Verilog is the **module**. A module is a self-contained block of hardware with a defined interface (ports) and internal behavior. It is analogous to a function in software or a chip in hardware. Here is a simple Verilog module for a 2-input AND gate:

```verilog
module and_gate (
    input  wire A,
    input  wire B,
    output wire Y
);
    assign Y = A & B;
endmodule
```

The module is named `and_gate`. It has two inputs (`A` and `B`) and one output (`Y`). The `input` and `output` keywords define the direction of the ports. The `wire` keyword declares a physical wire connection. The `assign` statement creates a continuous assignment: whenever `A` or `B` changes, `Y` is updated immediately. This describes combinational logic.

**Data types** in Verilog are different from software types because they represent physical wires and storage elements:
- **wire:** Represents a physical connection between components. It can only be driven by continuous assignments (`assign`) or module instantiations. It does not store a value.
- **reg:** Represents a variable that can store a value. It is used in procedural blocks (`always` blocks). Despite its name, `reg` does not necessarily mean a register — it is simply a variable that holds its value until explicitly changed.
- **integer:** A 32-bit signed variable used for loop counters and indices. It is not synthesizable into hardware; it is only for simulation.

**Vectors** are multi-bit wires or registers. A 4-bit vector is declared as `wire [3:0] data;`, where `[3:0]` means bit 3 is the most significant bit and bit 0 is the least significant bit. You can access individual bits with `data[2]` or ranges with `data[3:1]`.

**Parameters** are constants that can be overridden when a module is instantiated. They are used to create reusable, configurable modules. For example, a parameter can specify the width of a data bus:

```verilog
module adder #(parameter WIDTH = 8) (
    input  wire [WIDTH-1:0] A,
    input  wire [WIDTH-1:0] B,
    output wire [WIDTH-1:0] SUM,
    output wire             COUT
);
    assign {COUT, SUM} = A + B;
endmodule
```

This module creates an adder with a default width of 8 bits. When instantiating it, you can override the width: `adder #(16) my_adder (.A(a), .B(b), .SUM(sum), .COUT(cout));` creates a 16-bit adder.

**Module instantiation** is how you connect modules together to build larger systems. When you instantiate a module, you create a copy of it with specific connections:

```verilog
module top (
    input  wire [3:0] a,
    input  wire [3:0] b,
    output wire [4:0] result
);
    wire cout;
    adder #(4) u1 (.A(a), .B(b), .SUM(result[3:0]), .COUT(cout));
    assign result[4] = cout;
endmodule
```

Here, `u1` is the instance name of the adder module. The ports are connected using named association (`.A(a)`), which is clearer and less error-prone than positional association.

#### Key concepts
- Verilog history and purpose as an HDL
- Module definition and ports
- wire vs. reg data types
- Vectors and bit/select operations
- Parameters for configurable modules
- Module instantiation and port connections
- Continuous assignment (`assign`)

#### Hands-on activity
Write a Verilog module for a 2-to-1 multiplexer with an 8-bit data width. Use a parameter for the width. Instantiate it in a top-level module with two 8-bit inputs, a select line, and an 8-bit output. Simulate the design in ModelSim to verify that the select line correctly chooses between the two inputs. Show the waveform for all inputs and the output.

#### Assessment idea
Ask: "What is the difference between a `wire` and a `reg` in Verilog?" Answer: A `wire` represents a physical connection and can only be driven by continuous assignments or module outputs. A `reg` is a variable that holds a value and is used inside procedural blocks. Then ask: "What happens if you declare an output as `reg` but drive it with an `assign` statement?" Answer: It is a compilation error — a `reg` cannot be driven by a continuous assignment.

#### AI generation note
Create a 10-minute interactive coding lesson. Show the Verilog code editor with syntax highlighting. Demonstrate module declaration, port listing, and instantiation. Animate the difference between `wire` and `reg` using a physical wire that carries a signal vs. a box that stores a value. Show a vector as a bundle of parallel wires. Include a mini-quiz where learners identify syntax errors in sample code.

---

### Chapter 4.2 — Verilog for Combinational Logic: assign, always, and Operators

#### Learning objectives
- Use continuous assignment (`assign`) for combinational logic.
- Use procedural blocks (`always @(*)`) for combinational logic.
- Apply Verilog operators for arithmetic, logical, bitwise, and comparison operations.
- Avoid common combinational logic mistakes: inferred latches, incomplete sensitivity lists, and blocking vs. non-blocking assignments.

#### Detailed lesson content

Combinational logic in Verilog can be described in two ways: continuous assignments and procedural blocks. Each has its place, and understanding when to use each is essential for writing clean, synthesizable code.

**Continuous assignment** with the `assign` keyword is the simplest way to describe combinational logic. It creates a direct connection between an expression and a wire. Whenever any input in the expression changes, the output is updated immediately. This is the Verilog equivalent of wiring gates together.

```verilog
// Basic gates
assign y1 = a & b;        // AND
assign y2 = a | b;        // OR
assign y3 = a ^ b;        // XOR
assign y4 = ~a;           // NOT
assign y5 = ~(a & b);     // NAND

// Wider logic
assign y = (a & b) | (c & d);  // Sum of products
assign z = a ? b : c;           // 2-to-1 multiplexer
```

The conditional operator (`? :`) is particularly powerful. It is the Verilog equivalent of an if-else statement for combinational logic. It can be nested to create multi-way multiplexers.

**Procedural blocks** with `always @(*)` are used for more complex combinational logic that cannot be easily expressed in a single expression. The `always @(*)` syntax means "execute this block whenever any of the variables on the right-hand side change." This is called a combinational always block.

```verilog
always @(*) begin
    if (sel == 2'b00)
        y = a;
    else if (sel == 2'b01)
        y = b;
    else if (sel == 2'b10)
        y = c;
    else
        y = d;
end
```

This code describes a 4-to-1 multiplexer. The `if-else` chain is synthesizable because every possible value of `sel` has a corresponding output assignment. The `@(*)` sensitivity list ensures that the block is evaluated whenever any input changes.

A critical rule for combinational always blocks is that every output must be assigned in every possible path through the code. If an output is not assigned in one branch of an `if` statement, the synthesis tool will infer a **latch** — a level-sensitive storage element. Latches are generally undesirable in FPGA design because they are harder to analyze for timing and can cause glitches. To avoid inferred latches, always include a default assignment at the beginning of the block or ensure every branch assigns every output.

```verilog
// Good practice: default assignment prevents latch inference
always @(*) begin
    y = 4'b0000;  // Default assignment
    case (sel)
        2'b00: y = a;
        2'b01: y = b;
        2'b10: y = c;
        2'b11: y = d;
    endcase
end
```

**Operators** in Verilog include:
- **Arithmetic:** `+`, `-`, `*`, `/`, `%` (modulo). Division and modulo by non-powers-of-two are expensive in hardware and should be avoided when possible.
- **Bitwise:** `&`, `|`, `^`, `~`. These operate on each bit independently.
- **Logical:** `&&`, `||`, `!`. These produce a single-bit result (true/false).
- **Reduction:** `&a` (AND all bits), `|a` (OR all bits), `^a` (XOR all bits). These produce a single-bit result from a multi-bit vector.
- **Comparison:** `==`, `!=`, `<`, `>`, `<=`, `>=`. `===` and `!==` are used in simulation for 4-state comparisons (including X and Z).
- **Shift:** `<<`, `>>`, `<<<`, `>>>`. Logical shifts fill with zeros. Arithmetic right shift (`>>>`) fills with the sign bit.
- **Concatenation:** `{a, b, c}` combines bits or vectors into a larger vector.
- **Replication:** `{4{a}}` replicates `a` four times.

```verilog
assign sum = a + b;                    // Addition
assign and_result = a & b;             // Bitwise AND
assign all_ones = &a;                  // Reduction AND
assign extended = {{8{a[7]}}, a};      // Sign extension: replicate bit 7 eight times
assign {cout, sum} = a + b + cin;      // Concatenation for carry-out
```

#### Key concepts
- Continuous assignment (`assign`) for simple combinational logic
- Combinational always block (`always @(*)`) for complex logic
- Conditional operator (`? :`) for multiplexers
- Avoiding inferred latches with default assignments
- Verilog operators: arithmetic, bitwise, logical, reduction, comparison, shift, concatenation
- Sign extension and concatenation

#### Hands-on activity
Write a Verilog module for a 4-bit Arithmetic Logic Unit (ALU) that performs eight operations based on a 3-bit opcode: addition, subtraction, AND, OR, XOR, NOT (A), shift left, and shift right. Use a combinational always block with a `case` statement. Synthesize the design in Quartus Prime and verify the resource usage in the Technology Map Viewer. Then write a testbench that applies all 8 opcodes with the same operands and displays the results.

#### Assessment idea
Given the following Verilog code, identify the bug:
```verilog
always @(*) begin
    if (a > b)
        y = 1;
end
```
Answer: `y` is not assigned when `a <= b`, so the synthesis tool will infer a latch. The fix is to add `else y = 0;` or initialize `y = 0;` at the beginning of the block. Then ask: "What is the difference between `==` and `===` in Verilog?" Answer: `==` is a logical equality that compares values; `===` is a case equality that also compares X and Z states, and it is used in simulation but not synthesizable.

#### AI generation note
Create a 10-minute lesson with live coding. Show a combinational always block being written step by step. Use animation to show the sensitivity list: when `sel` changes, the entire block re-evaluates. Show a latch being inferred with a warning icon when a branch is missing. Demonstrate the ALU with a truth table and the Verilog case statement side by side. Include a waveform animation showing the output changing immediately after an input change.

---

### Chapter 4.3 — Verilog for Sequential Logic: always @(posedge clk) and FSMs

#### Learning objectives
- Use `always @(posedge clk)` to describe synchronous sequential logic.
- Implement registers, counters, and shift registers in Verilog.
- Design and implement a finite state machine (FSM) in Verilog.
- Distinguish between Mealy and Moore state machines and choose the appropriate type.

#### Detailed lesson content

Sequential logic in Verilog is described using `always @(posedge clk)` blocks. This syntax means "execute this block on the rising edge of the clock." Inside the block, you assign values to `reg` variables. Each assignment to a `reg` inside a clocked always block infers a flip-flop. This is the fundamental pattern for all synchronous digital design in FPGAs.

```verilog
// A simple D flip-flop
module d_ff (
    input  wire clk,
    input  wire d,
    output reg  q
);
    always @(posedge clk) begin
        q <= d;
    end
endmodule
```

The `<=` operator is the **non-blocking assignment**. In a sequential always block, you should always use non-blocking assignments. This means that all right-hand sides are evaluated immediately, but all left-hand sides are updated simultaneously at the end of the time step. This behavior matches the physical reality of flip-flops: all flip-flops capture their inputs on the clock edge and update their outputs at the same time.

A **register** (multi-bit flip-flop) is described by assigning a vector on the clock edge:

```verilog
module register_8bit (
    input  wire        clk,
    input  wire        en,      // Clock enable
    input  wire [7:0]  d,
    output reg  [7:0]  q
);
    always @(posedge clk) begin
        if (en)
            q <= d;
    end
endmodule
```

The clock enable (`en`) is a common control signal. When `en` is HIGH, the register updates on the clock edge. When `en` is LOW, the register holds its value. Synthesis tools map this to the clock enable input of the FPGA's D flip-flop.

A **counter** is a register that increments or decrements on each clock edge:

```verilog
module counter_8bit (
    input  wire        clk,
    input  wire        rst,     // Active-high synchronous reset
    input  wire        en,
    output reg  [7:0]  count
);
    always @(posedge clk) begin
        if (rst)
            count <= 8'b0;
        else if (en)
            count <= count + 1'b1;
    end
endmodule
```

This is a **synchronous reset** because the reset is checked inside the clocked always block. The reset only takes effect on the clock edge. An **asynchronous reset** would use `always @(posedge clk or posedge rst)` and would reset the flip-flop immediately when `rst` goes HIGH, regardless of the clock. In modern FPGA design, synchronous resets are generally preferred because they are easier to analyze for timing and work better with clock gating and scan-based testing.

A **finite state machine (FSM)** in Verilog is implemented using a state register and a combinational always block for next-state logic. The recommended style is the **three-always-block** approach:
1. One always block for state register update (sequential)
2. One always block for next-state logic (combinational)
3. One always block for output logic (combinational)

However, a simpler **two-always-block** approach is also common and works well for most designs:

```verilog
module traffic_light_fsm (
    input  wire        clk,
    input  wire        rst,
    input  wire        timer_done,
    output reg  [2:0]  light       // 001=Red, 010=Yellow, 100=Green
);
    // State encoding using parameters
    localparam GREEN  = 2'b00;
    localparam YELLOW = 2'b01;
    localparam RED    = 2'b10;

    reg [1:0] state, next_state;

    // State register (sequential)
    always @(posedge clk) begin
        if (rst)
            state <= GREEN;
        else
            state <= next_state;
    end

    // Next-state logic (combinational)
    always @(*) begin
        case (state)
            GREEN:  next_state = timer_done ? YELLOW : GREEN;
            YELLOW: next_state = timer_done ? RED    : YELLOW;
            RED:    next_state = timer_done ? GREEN  : RED;
            default: next_state = GREEN;
        endcase
    end

    // Output logic (combinational)
    always @(*) begin
        case (state)
            GREEN:  light = 3'b100;
            YELLOW: light = 3'b010;
            RED:    light = 3'b001;
            default: light = 3'b100;
        endcase
    end
endmodule
```

This is a **Moore machine** because the outputs depend only on the current state. A **Mealy machine** would have outputs that depend on both the current state and the inputs. Mealy machines can have fewer states but their outputs may change asynchronously with the inputs. Moore machines are preferred in FPGA design because the outputs change only on the clock edge, making them easier to synchronize with other circuits.

The `localparam` keyword is used for constants that are local to the module. It is better than `parameter` for state encodings because the values should not be overridden.

#### Key concepts
- Clocked always block (`always @(posedge clk)`) for sequential logic
- Non-blocking assignment (`<=`) for flip-flops
- Synchronous vs. asynchronous reset
- Registers, counters, and shift registers in Verilog
- FSM design with state register, next-state logic, and output logic
- Moore machine vs. Mealy machine
- `localparam` for state encoding

#### Hands-on activity
Write a Verilog module for a 4-state sequence detector FSM that detects the pattern "1011" in a serial input stream. The FSM has one input (`data_in`) and one output (`detected`). When the pattern is detected, `detected` is HIGH for one clock cycle. Use the two-always-block style. Draw the state diagram first, then write the Verilog code. Simulate it in ModelSim with a testbench that sends the sequence `0, 1, 0, 1, 1, 0, 1, 1, 0` and verify that `detected` pulses at the correct times.

#### Assessment idea
Ask: "Why should non-blocking assignments (`<=`) be used in sequential always blocks?" Answer: Because they model the simultaneous update of all flip-flops on the clock edge. Blocking assignments (`=`) would cause the updates to happen sequentially within the simulation time step, which does not match physical hardware. Then ask: "What is the difference between a synchronous reset and an asynchronous reset?" Answer: A synchronous reset only takes effect on the clock edge; an asynchronous reset takes effect immediately when the reset signal is asserted.

#### AI generation note
Create a 12-minute lesson with a split-screen view. On the left, show the Verilog code for the traffic light FSM. On the right, show an animated state diagram with the current state highlighted. Show a clock waveform with arrows indicating when the state changes. Animate the Moore vs. Mealy distinction: in Moore, the output changes only on the clock edge; in Mealy, the output can change immediately when the input changes. Include a real FPGA demo with three LEDs showing the traffic light pattern.

---

### Chapter 4.4 — Verilog Testbenches and Simulation with ModelSim

#### Learning objectives
- Write a Verilog testbench to verify a design under test (DUT).
- Generate clock and reset signals in a testbench.
- Use initial blocks, delays, and display statements for stimulus generation.
- Interpret waveform output in ModelSim to verify correct behavior.

#### Detailed lesson content

Simulation is the most important verification step in FPGA design. Before you program the FPGA, you must verify that your design behaves correctly in simulation. A **testbench** is a Verilog module that instantiates the design under test (DUT), generates input signals (stimulus), and observes the outputs. The testbench is not synthesized into hardware; it exists only in simulation.

A testbench has no input or output ports because it is the top-level module in the simulation hierarchy. It drives the DUT's inputs and monitors its outputs using internal signals.

```verilog
`timescale 1ns / 1ps

module tb_and_gate;
    // Signals to connect to the DUT
    reg  a, b;
    wire y;

    // Instantiate the DUT
    and_gate uut (
        .A(a),
        .B(b),
        .Y(y)
    );

    // Stimulus generation
    initial begin
        // Apply all combinations of inputs
        a = 0; b = 0; #10;
        a = 0; b = 1; #10;
        a = 1; b = 0; #10;
        a = 1; b = 1; #10;

        // End simulation
        #10;
        $finish;
    end

    // Monitor outputs
    initial begin
        $monitor("Time=%0t | A=%b B=%b | Y=%b", $time, a, b, y);
    end
endmodule
```

The `` `timescale `` directive specifies the time unit and precision. `` `timescale 1ns / 1ps `` means time values are in nanoseconds with a precision of 1 picosecond. The `#10` delay means wait for 10 nanoseconds before executing the next statement.

Generating a **clock** in a testbench is done with a simple `always` block or `forever` loop inside an `initial` block:

```verilog
reg clk = 0;
always #5 clk = ~clk;  // 10 ns period = 100 MHz
```

Or equivalently:

```verilog
initial begin
    clk = 0;
    forever #5 clk = ~clk;
end
```

A **reset** signal is typically generated in an `initial` block with a delay:

```verilog
initial begin
    rst = 1;        // Assert reset
    #20 rst = 0;    // Deassert after 20 ns
end
```

For more complex designs, you should use **self-checking testbenches** that compare the DUT's output against expected values:

```verilog
initial begin
    // Test case 1: 5 + 3 = 8
    a = 5; b = 3; #10;
    if (sum !== 8) begin
        $display("ERROR: Test 1 failed! Expected 8, got %d", sum);
        $stop;
    end else begin
        $display("PASS: Test 1");
    end

    // Test case 2: 10 + 6 = 16
    a = 10; b = 6; #10;
    if (sum !== 16) begin
        $display("ERROR: Test 2 failed! Expected 16, got %d", sum);
        $stop;
    end

    $display("All tests passed!");
    $finish;
end
```

The `$display` and `$monitor` system tasks print messages to the console. `$time` returns the current simulation time. `$stop` pauses the simulation, and `$finish` ends it.

**ModelSim** is the industry-standard simulator for Verilog and VHDL. It is included with Intel Quartus Prime. To simulate a design in ModelSim:
1. Create a new project in ModelSim.
2. Add your design files (`.v`) and testbench files.
3. Compile the design.
4. Load the simulation (run the testbench).
5. Add signals to the waveform viewer.
6. Run the simulation and observe the waveforms.
7. Verify that the outputs match expectations at every time step.

The waveform viewer is the most powerful tool for debugging. You can zoom in to see nanosecond-level transitions, measure delays between edges, and compare multiple signals. If the DUT output does not match the expected value, you can trace back through the hierarchy to find the source of the error.

A common debugging technique is to add internal signals to the waveform. For example, if a counter is not incrementing correctly, you can add the `count` register and the `en` signal to the waveform to see if the enable is asserted and if the counter is receiving the clock.

#### Key concepts
- Testbench structure: no ports, instantiates DUT
- `initial` blocks for stimulus and reset generation
- `always` blocks and `forever` loops for clock generation
- `#delay` for timing control
- `$display`, `$monitor`, `$time`, `$stop`, `$finish`
- Self-checking testbenches with expected values
- ModelSim workflow: compile, load, simulate, waveform analysis
- `timescale directive

#### Hands-on activity
Write a self-checking testbench for the 4-bit ALU module from the previous chapter. The testbench should apply all 8 opcodes with at least two test cases each (one for correct operation, one for edge cases like overflow). Use `$display` to print PASS/FAIL for each test case. Simulate in ModelSim and capture the waveform. Verify that the output changes at the correct time relative to the clock edge.

#### Assessment idea
Ask: "What is the difference between `$stop` and `$finish` in a Verilog testbench?" Answer: `$stop` pauses the simulation and allows you to resume; `$finish` ends the simulation and closes the simulator. Then ask: "Why should a testbench use `reg` for inputs and `wire` for outputs when connecting to the DUT?" Answer: The testbench drives the DUT's inputs, so they must be `reg` (or `logic` in SystemVerilog). The testbench observes the DUT's outputs, so they are `wire`.

#### AI generation note
Create a 12-minute screen recording tutorial. Show the ModelSim interface: project creation, file addition, compilation, and simulation. Demonstrate adding signals to the waveform viewer. Show a clock signal, a reset signal, and the DUT output. Zoom in to measure the clock-to-Q delay. Show the `$display` output in the transcript window. Include a side-by-side view of the Verilog code and the waveform, with the current line of code highlighted as the simulation progresses.

---

## Module 5: Hardware Description Languages — VHDL

> **Goal:** Learn the VHDL language for describing digital circuits, understand its differences from Verilog, and gain proficiency in both languages for FPGA design.

---

### Chapter 5.1 — Introduction to VHDL: Entities, Architectures, and Signals

#### Learning objectives
- Explain the history and purpose of VHDL as an IEEE-standard hardware description language.
- Write a VHDL entity with ports and an architecture with internal signals.
- Understand VHDL data types: std_logic, std_logic_vector, unsigned, and signed.
- Use generics for configurable module parameters.

#### Detailed lesson content

VHDL (VHSIC Hardware Description Language) was developed in the 1980s for the U.S. Department of Defense's VHSIC (Very High Speed Integrated Circuit) program. It was standardized by the IEEE in 1987 (IEEE 1076) and has been updated several times since. VHDL is a strongly typed language, which means every signal and variable must have an explicitly defined type, and type conversions must be explicit. This makes VHDL more verbose than Verilog but also less prone to subtle bugs caused by type mismatches.

VHDL is particularly popular in Europe, aerospace, defense, and government projects. Many universities teach VHDL as the first HDL. In the FPGA industry, both VHDL and Verilog are used, and many engineers are fluent in both. The choice between them often depends on the company, the project, and the existing codebase. Intel Quartus Prime and Xilinx Vivado support both languages equally well.

The basic unit of VHDL is the **entity-architecture pair**. The **entity** declares the interface of the module: its name, ports, and generics. The **architecture** defines the internal behavior of the module.

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity and_gate is
    port (
        A : in  std_logic;
        B : in  std_logic;
        Y : out std_logic
    );
end entity and_gate;

architecture behavioral of and_gate is
begin
    Y <= A and B;
end architecture behavioral;
```

Every VHDL file starts with library declarations. The `IEEE.STD_LOGIC_1164` library defines the `std_logic` type, which is the standard type for digital signals in VHDL. `std_logic` is a 9-value logic type that includes `'0'`, `'1'`, `'X'` (unknown), `'Z'` (high-impedance), `'U'` (uninitialized), `'-'` (don't care), `'W'` (weak unknown), `'L'` (weak 0), and `'H'` (weak 1). This makes VHDL more powerful for simulation than Verilog's 4-value logic (0, 1, X, Z).

**Data types** in VHDL:
- **std_logic:** A single bit with 9 possible values. Used for individual signals.
- **std_logic_vector:** A vector of std_logic bits. Declared as `std_logic_vector(7 downto 0)` for an 8-bit bus. Note that VHDL uses `downto` (most significant bit first) or `to` (least significant bit first). The `downto` convention is standard for data buses.
- **bit and bit_vector:** Simpler types with only `'0'` and `'1'`. Rarely used in modern design because they lack X and Z states.
- **unsigned and signed:** Types from the `IEEE.NUMERIC_STD` library for arithmetic operations. `unsigned` is interpreted as a binary number; `signed` is interpreted as two's complement.
- **integer:** A 32-bit signed integer. Not synthesizable for hardware but useful for loop indices and constants.
- **boolean:** `true` or `false`. Used for conditions and flags.

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL;

signal data_bus : std_logic_vector(15 downto 0);
signal counter  : unsigned(7 downto 0);
signal temp     : signed(11 downto 0);
```

**Generics** in VHDL are similar to parameters in Verilog. They allow you to create configurable modules:

```vhdl
entity adder is
    generic (
        WIDTH : integer := 8
    );
    port (
        A    : in  unsigned(WIDTH-1 downto 0);
        B    : in  unsigned(WIDTH-1 downto 0);
        SUM  : out unsigned(WIDTH-1 downto 0);
        COUT : out std_logic
    );
end entity adder;

architecture behavioral of adder is
    signal temp : unsigned(WIDTH downto 0);
begin
    temp  <= ('0' & A) + ('0' & B);
    SUM   <= temp(WIDTH-1 downto 0);
    COUT  <= temp(WIDTH);
end architecture behavioral;
```

The `generic` clause declares a constant (`WIDTH`) that can be overridden when the entity is instantiated. The default value is 8. When instantiating the adder, you override the generic: `u1: adder generic map (WIDTH => 16) port map (A => a, B => b, SUM => sum, COUT => cout);`.

VHDL is more explicit than Verilog. You must declare every signal, specify every type, and use explicit type conversions. For example, to add two std_logic_vectors, you must convert them to `unsigned` or `signed` using `unsigned(signal)` because `std_logic_vector` does not support arithmetic operations directly. This verbosity is a strength of VHDL: it catches errors at compile time that might go unnoticed in Verilog until simulation.

#### Key concepts
- VHDL history and IEEE standardization
- Entity (interface) and architecture (behavior) separation
- std_logic, std_logic_vector, unsigned, signed types
- Library declarations: IEEE.STD_LOGIC_1164, IEEE.NUMERIC_STD
- Generics for configurable modules
- Strong typing and explicit type conversions
- 9-value logic system (std_logic)

#### Hands-on activity
Write a VHDL entity and architecture for a 2-to-1 multiplexer with an 8-bit data width. Use a generic for the width. Instantiate it in a top-level entity with two 8-bit inputs, a select line, and an 8-bit output. Simulate the design in ModelSim to verify correct operation. Show the waveform for all inputs and outputs.

#### Assessment idea
Ask: "What is the difference between `std_logic` and `bit` in VHDL?" Answer: `std_logic` has 9 values (including X, Z, U) and is the standard for digital design. `bit` has only 2 values (0 and 1) and lacks the simulation and tri-state capabilities of `std_logic`. Then ask: "Why is the `downto` convention used for std_logic_vector instead of `to`?" Answer: `downto` places the most significant bit at the left, which matches the convention for writing binary numbers and makes arithmetic operations more intuitive.

#### AI generation note
Create a 9-minute lesson comparing VHDL and Verilog syntax side by side. Show the same AND gate in both languages. Highlight VHDL's explicit type declarations and library imports. Show the 9-value logic system with a colorful table. Animate the entity-architecture separation as a contract (entity) and an implementation (architecture). Include a mini-quiz where learners convert a simple Verilog module to VHDL.

---

### Chapter 5.2 — VHDL for Combinational and Sequential Logic

#### Learning objectives
- Use concurrent signal assignments and conditional signal assignments for combinational logic.
- Use processes with sensitivity lists for sequential logic.
- Implement registers, counters, and state machines in VHDL.
- Understand the difference between signals and variables in VHDL processes.

#### Detailed lesson content

VHDL has two ways to describe logic: **concurrent statements** (which execute in parallel, like physical hardware) and **sequential statements** (which execute inside a process, like software).

**Concurrent statements** describe combinational logic. The most common concurrent statement is the **concurrent signal assignment**:

```vhdl
Y <= A and B;
```

This is equivalent to `assign Y = A & B;` in Verilog. It executes whenever `A` or `B` changes.

For more complex combinational logic, VHDL provides **conditional signal assignments** and **selected signal assignments**:

```vhdl
-- Conditional signal assignment (if-else style)
Y <= A when (SEL = "00") else
     B when (SEL = "01") else
     C when (SEL = "10") else
     D;

-- Selected signal assignment (case style)
with SEL select
    Y <= A when "00",
         B when "01",
         C when "10",
         D when others;
```

The `when` statement is powerful and readable. The `with ... select` statement is the VHDL equivalent of a case statement for concurrent logic. Both are synthesizable and produce combinational logic.

**Processes** are sequential blocks that execute when a signal in the sensitivity list changes. A combinational process has a sensitivity list with all inputs, and it uses `if`, `case`, and `for` statements:

```vhdl
process (A, B, SEL)
begin
    if SEL = "00" then
        Y <= A;
    elsif SEL = "01" then
        Y <= B;
    elsif SEL = "10" then
        Y <= C;
    else
        Y <= D;
    end if;
end process;
```

Note that in VHDL, every `if` must have a matching `end if`, and every `process` must have a matching `end process`. This is more verbose than Verilog but prevents errors from missing `end` keywords.

For sequential logic, the process sensitivity list includes the clock signal (and optionally the reset signal for asynchronous reset):

```vhdl
process (clk)
begin
    if rising_edge(clk) then
        if rst = '1' then
            q <= (others => '0');
        elsif en = '1' then
            q <= d;
        end if;
    end if;
end process;
```

The `rising_edge(clk)` function is the preferred way to detect a clock edge in VHDL. It is more readable and less error-prone than `clk'event and clk = '1'`. The `others => '0'` syntax assigns all bits of a vector to '0'.

A **counter** in VHDL:

```vhdl
process (clk)
begin
    if rising_edge(clk) then
        if rst = '1' then
            count <= (others => '0');
        elsif en = '1' then
            count <= count + 1;
        end if;
    end if;
end process;
```

Note that `count` must be declared as `unsigned` (from `IEEE.NUMERIC_STD`) for the `+` operator to work. If it is `std_logic_vector`, you cannot add 1 directly.

A **finite state machine** in VHDL uses a process for the state register and a process for the next-state logic:

```vhdl
type state_type is (GREEN, YELLOW, RED);
signal state, next_state : state_type;

-- State register
process (clk)
begin
    if rising_edge(clk) then
        if rst = '1' then
            state <= GREEN;
        else
            state <= next_state;
        end if;
    end if;
end process;

-- Next-state logic (combinational)
process (state, timer_done)
begin
    case state is
        when GREEN =>
            if timer_done = '1' then
                next_state <= YELLOW;
            else
                next_state <= GREEN;
            end if;
        when YELLOW =>
            if timer_done = '1' then
                next_state <= RED;
            else
                next_state <= YELLOW;
            end if;
        when RED =>
            if timer_done = '1' then
                next_state <= GREEN;
            else
                next_state <= RED;
            end if;
        when others =>
            next_state <= GREEN;
    end case;
end process;
```

In VHDL, the state type is defined using an **enumeration type** (`type state_type is (...)`). This makes the code more readable and self-documenting than using binary encodings. The synthesis tool automatically assigns binary codes to the enumerated states.

**Signals vs. Variables:** Inside a process, you can use both signals and variables. A **signal** is updated at the end of the process (non-blocking behavior). A **variable** is updated immediately (blocking behavior). Variables are declared with `variable` and are local to the process. They are useful for intermediate calculations and loop indices but do not represent physical wires unless they are assigned to a signal outside the process.

```vhdl
process (clk)
    variable temp : unsigned(7 downto 0);
begin
    if rising_edge(clk) then
        temp := a + b;  -- Variable updated immediately
        sum <= temp;    -- Signal updated at end of process
    end if;
end process;
```

#### Key concepts
- Concurrent signal assignments for combinational logic
- Conditional and selected signal assignments
- Process statement with sensitivity list
- `rising_edge(clk)` for clock edge detection
- Synchronous reset with `if rising_edge(clk)`
- FSM design with enumerated types
- Signals vs. variables in processes
- `others => '0'` for vector initialization

#### Hands-on activity
Write a VHDL module for the 4-bit sequence detector FSM from Chapter 4.3 (detecting "1011"). Use an enumerated type for the states. Write a VHDL testbench that applies the same input sequence and verifies the output. Simulate in ModelSim and compare the resource usage to the Verilog version. Document which language you found more readable for this design and why.

#### Assessment idea
Ask: "What is the difference between a signal and a variable in a VHDL process?" Answer: A variable is updated immediately within the process (blocking), while a signal is updated at the end of the process (non-blocking). Variables are local to the process and do not appear as physical wires unless assigned to a signal. Then ask: "Why is `rising_edge(clk)` preferred over `clk'event and clk = '1'`?" Answer: `rising_edge(clk)` is more readable, explicitly detects a rising edge (not just a transition to '1'), and is the standard coding convention recommended by IEEE.

#### AI generation note
Create a 10-minute lesson with a side-by-side comparison. Show the same FSM in Verilog and VHDL. Highlight VHDL's enumerated type as a state label. Animate the process execution: show signals updating at the end of the process with a time-advance arrow, while variables update immediately. Show a waveform with the state name displayed as text (GREEN, YELLOW, RED) rather than binary, which is a feature of VHDL simulation. Include a readability quiz.

---

### Chapter 5.3 — VHDL Testbenches and Simulation

#### Learning objectives
- Write a VHDL testbench with stimulus generation and output monitoring.
- Use wait statements, assert statements, and report statements for verification.
- Generate clock and reset signals in a VHDL testbench.
- Use ModelSim to simulate and debug VHDL designs.

#### Detailed lesson content

A VHDL testbench is structurally similar to a Verilog testbench but uses VHDL syntax and constructs. It is an entity with no ports, containing processes that generate stimulus and verify outputs.

```vhdl
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL;

entity tb_adder is
end entity tb_adder;

architecture sim of tb_adder is
    signal a, b, sum : unsigned(3 downto 0);
    signal cout      : std_logic;
begin
    -- Instantiate the DUT
    uut: entity work.adder
        generic map (WIDTH => 4)
        port map (A => a, B => b, SUM => sum, COUT => cout);

    -- Clock generation (not needed for combinational DUT, but shown for reference)
    -- process
    -- begin
    --     clk <= '0'; wait for 5 ns;
    --     clk <= '1'; wait for 5 ns;
    -- end process;

    -- Stimulus generation
    process
    begin
        a <= "0101"; b <= "0011"; wait for 10 ns;  -- 5 + 3 = 8
        assert (sum = "1000" and cout = '0')
            report "Test 1 failed!" severity error;

        a <= "1111"; b <= "0001"; wait for 10 ns;  -- 15 + 1 = 16
        assert (sum = "0000" and cout = '1')
            report "Test 2 failed!" severity error;

        a <= "1000"; b <= "1000"; wait for 10 ns;  -- 8 + 8 = 16
        assert (sum = "0000" and cout = '1')
            report "Test 3 failed!" severity error;

        report "All tests completed!";
        wait;
    end process;
end architecture sim;
```

The `assert` statement checks a condition. If the condition is false, it prints the report message with the specified severity level (`note`, `warning`, `error`, or `failure`). The `wait;` statement at the end of the process causes the process to suspend indefinitely, which is the standard way to end a testbench process.

For clock generation in a sequential testbench:

```vhdl
process
begin
    clk <= '0';
    wait for 5 ns;
    clk <= '1';
    wait for 5 ns;
end process;
```

This creates a 10 ns period clock (100 MHz). The process repeats forever because it has no terminating `wait;` statement.

For reset generation:

```vhdl
process
begin
    rst <= '1';
    wait for 20 ns;
    rst <= '0';
    wait;
end process;
```

The `wait for` statement is the VHDL equivalent of Verilog's `#delay`. It suspends the process for the specified time and then resumes.

VHDL testbenches can also use **component instantiation** instead of direct entity instantiation. Component instantiation requires a component declaration in the architecture:

```vhdl
architecture sim of tb_adder is
    component adder is
        generic (WIDTH : integer);
        port (A, B : in unsigned; SUM : out unsigned; COUT : out std_logic);
    end component;

    signal a, b, sum : unsigned(3 downto 0);
    signal cout      : std_logic;
begin
    uut: adder generic map (WIDTH => 4) port map (A => a, B => b, SUM => sum, COUT => cout);
end architecture sim;
```

Component instantiation is older but still widely used because it allows the testbench to be compiled without the actual entity being present, which is useful for top-down design.

**ModelSim** supports both Verilog and VHDL simulation. The workflow is the same: compile the design files, load the testbench, add signals to the waveform, and run. One advantage of VHDL in ModelSim is that enumerated types (like state machine states) are displayed as text labels in the waveform, making debugging much more intuitive than looking at binary codes.

#### Key concepts
- VHDL testbench entity with no ports
- `assert` and `report` for self-checking
- `wait for` for timing control
- Clock and reset generation processes
- Component instantiation vs. direct entity instantiation
- Enumerated type display in ModelSim waveforms
- `wait;` to suspend a process indefinitely

#### Hands-on activity
Write a VHDL testbench for the 4-bit sequence detector FSM from the previous chapter. The testbench should generate a serial input stream, apply the clock, and use `assert` to verify that the `detected` output is HIGH only when the pattern "1011" is detected. Use `report` statements to print the current state name and the test result. Simulate in ModelSim and capture the waveform showing the state transitions as text labels.

#### Assessment idea
Ask: "What is the purpose of the `wait;` statement at the end of a stimulus process in a VHDL testbench?" Answer: It suspends the process forever, preventing it from repeating and generating unwanted additional stimulus. Then ask: "What is the advantage of using `assert` statements over manual waveform inspection?" Answer: `assert` statements automatically check for errors and report them, making the testbench self-checking and suitable for regression testing.

#### AI generation note
Create a 9-minute lesson showing a VHDL testbench being written. Show the `assert` statement highlighting a failed test in red. Show the ModelSim waveform with state names displayed as text (GREEN, YELLOW, RED). Demonstrate the difference between `wait for 10 ns` and `wait;`. Show a component instantiation diagram with the component declaration separate from the instantiation. Include a side-by-side comparison of the Verilog and VHDL testbench for the same DUT.

---

### Chapter 5.4 — Comparing Verilog and VHDL: When to Use Which

#### Learning objectives
- Compare the syntax, type systems, and design philosophies of Verilog and VHDL.
- Identify the strengths and weaknesses of each language for different applications.
- Understand mixed-language design and how to instantiate Verilog modules in VHDL and vice versa.
- Choose the appropriate language based on project requirements, team expertise, and tool support.

#### Detailed lesson content

Verilog and VHDL are both capable of describing any digital circuit, but they have different philosophies, syntaxes, and ecosystems. Understanding their differences helps you choose the right language for a project and work effectively in mixed-language environments.

**Syntax and Verbosity:**
- Verilog is concise and C-like. A simple AND gate fits on one line. This makes it fast to write and easy for software engineers to learn.
- VHDL is verbose and Pascal-like. It requires explicit library declarations, entity-architecture pairs, and type definitions. This makes it slower to write but more self-documenting and easier to maintain for large projects.

**Type System:**
- Verilog is weakly typed. A `wire` can be connected to a `reg` without explicit conversion. A 4-bit vector can be assigned to an 8-bit vector with silent truncation. This flexibility can lead to subtle bugs.
- VHDL is strongly typed. You cannot connect a `std_logic_vector` to an `unsigned` without explicit conversion. You cannot assign a 4-bit vector to an 8-bit vector without a resize function. This catches errors at compile time but requires more code.

**Simulation and Debugging:**
- Verilog's 4-value logic (0, 1, X, Z) is simpler but less powerful for detecting uninitialized signals.
- VHDL's 9-value logic (`std_logic`) catches uninitialized signals (`U`) and weak states (`L`, `H`) early in simulation, making debugging easier.
- VHDL's enumerated types for state machines display as text labels in waveforms, which is a major debugging advantage.

**Synthesis:**
- Both languages synthesize to the same hardware. The synthesis tool produces identical LUT and flip-flop mappings for equivalent designs.
- Verilog is more commonly used in North America and Asia; VHDL is more common in Europe and defense/aerospace.
- SystemVerilog (an extension of Verilog) has become the dominant language for ASIC verification and is increasingly used in FPGA design.

**Mixed-Language Design:**
Modern FPGA tools support mixed-language designs. You can instantiate a Verilog module inside a VHDL architecture and vice versa. For example, if you have a VHDL design and need to use a third-party IP core written in Verilog, you can instantiate it directly:

```vhdl
-- VHDL architecture instantiating a Verilog module
component verilog_module is
    port (
        clk : in  std_logic;
        rst : in  std_logic;
        din : in  std_logic_vector(7 downto 0);
        dout : out std_logic_vector(7 downto 0)
    );
end component;
```

Similarly, a Verilog module can instantiate a VHDL entity:

```verilog
// Verilog module instantiating a VHDL entity
vhdl_entity u1 (
    .clk(clk),
    .rst(rst),
    .din(din),
    .dout(dout)
);
```

The tool handles the language translation automatically. However, you must ensure that the port types are compatible. For example, a VHDL `std_logic_vector` maps to a Verilog `wire` or `reg` of the same width.

**When to choose Verilog:**
- You are working in North America or Asia.
- The project is fast-paced and requires rapid prototyping.
- The team has a software background and prefers C-like syntax.
- You are using SystemVerilog for verification.
- You are working with Xilinx/AMD tools (which have strong Verilog support).

**When to choose VHDL:**
- You are working in Europe or on a defense/aerospace project.
- The project requires strict type safety and long-term maintainability.
- The team has an engineering background and prefers explicit documentation.
- You are using Intel/Altera tools (which have strong VHDL support).
- The design involves complex state machines that benefit from enumerated types.

In practice, many engineers are fluent in both languages, and the choice is often dictated by the existing codebase or client requirements. For learning, it is valuable to know both because it gives you access to a wider range of jobs, IP cores, and reference designs.

#### Key concepts
- Verilog: concise, C-like, weakly typed, 4-value logic
- VHDL: verbose, Pascal-like, strongly typed, 9-value logic
- Type safety and compile-time error checking
- Enumerated types and waveform readability
- Mixed-language design and port compatibility
- Industry preferences by region and application domain

#### Hands-on activity
Take the 4-bit ALU design from Chapter 4.2 (written in Verilog) and rewrite it in VHDL. Then write a VHDL testbench for it. Compare the two implementations in terms of lines of code, readability, and the ease of catching errors. Write a one-page summary of your observations, including which language you prefer for this design and why.

#### Assessment idea
Ask: "You are joining a European aerospace company that designs avionics systems. They have a 20-year-old VHDL codebase with strict coding standards. Which language should you use for your new module?" Answer: VHDL, to maintain consistency with the existing codebase and meet the company's type-safety requirements. Then ask: "You are joining a Silicon Valley startup building a machine learning accelerator. The team is mostly software engineers, and they need to iterate quickly. Which language should you use?" Answer: Verilog (or SystemVerilog), because the team will learn it faster and the C-like syntax is more familiar.

#### AI generation note
Create a 9-minute animated comparison. Show two characters: one writing Verilog (fast, concise, C-like) and one writing VHDL (methodical, explicit, strongly typed). Show a compiler catching a type error in VHDL and silently accepting it in Verilog. Show a ModelSim waveform with state names in VHDL vs. binary codes in Verilog. End with a decision matrix graphic summarizing the trade-offs.

---

## Module 6: The FPGA Design Flow and Development Tools

> **Goal:** Master the complete FPGA design flow from specification to programming, using Intel Quartus Prime and ModelSim as the primary tools.

---

### Chapter 6.1 — The FPGA Design Flow: Specification to Bitstream

#### Learning objectives
- Describe the complete FPGA design flow: specification, RTL design, synthesis, place-and-route, simulation, timing analysis, and bitstream generation.
- Explain the purpose of each step and the files produced at each stage.
- Understand the difference between functional simulation and timing simulation.
- Identify the key files in a Quartus Prime project: .qpf, .qsf, .v, .vhd, .sdc, .sof, .pof.

#### Detailed lesson content

The FPGA design flow is a systematic process that transforms a high-level specification into a configuration file that programs the FPGA. While the exact steps vary slightly between vendors, the fundamental flow is the same across all FPGA platforms. Understanding this flow is essential for debugging problems, optimizing designs, and meeting project deadlines.

**Step 1: Specification and Architecture Design**
Every FPGA project begins with a clear specification. What does the system do? What are the inputs and outputs? What is the clock frequency? What are the power, cost, and size constraints? The specification is usually written in natural language and may include block diagrams, timing diagrams, and interface definitions. For example, a specification might say: "Design a UART receiver that receives 8-bit serial data at 115200 baud, stores it in a FIFO, and makes it available on a parallel 8-bit bus. The system clock is 50 MHz."

**Step 2: RTL Design**
The Register Transfer Level (RTL) design is the process of describing the digital circuit using a Hardware Description Language (Verilog or VHDL). RTL code describes the flow of data between registers, controlled by combinational logic. It is the most critical step because it defines what the hardware does. RTL design is typically done in a text editor or IDE. The code is organized into modules, each with a specific function. Good RTL design practices include: using descriptive names, adding comments, following a consistent coding style, and writing synthesizable code (avoiding constructs that cannot be mapped to hardware).

**Step 3: Functional Simulation (Pre-Synthesis)**
Before synthesis, you simulate the RTL code to verify that it behaves correctly. This is called **functional simulation** or **behavioral simulation** because it simulates the logical behavior without considering timing delays. You write a testbench that applies stimulus to the design and checks the outputs. ModelSim is used for this step. If the simulation fails, you fix the RTL code and re-simulate. This loop continues until the design passes all test cases.

**Step 4: Synthesis**
Synthesis is the process of converting the RTL code into a netlist of the FPGA's primitive logic elements (LUTs, flip-flops, carry chains, memory blocks, DSP blocks). The synthesis tool (Quartus Prime's Analysis & Synthesis) reads the HDL files, infers the logic, performs optimizations, and produces a technology-mapped netlist. Synthesis reports show the resource usage: how many LUTs, registers, memory blocks, and DSP blocks are used. If the design uses too many resources, you may need to optimize the RTL code or choose a larger FPGA.

**Step 5: Place-and-Route**
Place-and-route (also called fitting in Intel terminology) is the process of assigning the netlist's logic elements to physical locations on the FPGA (placement) and connecting them using the programmable routing network (routing). The Quartus Prime Fitter performs this step. It tries to minimize the total wire length and meet the timing constraints. The result is a fully physical design that can be converted into a bitstream. Place-and-route is the most time-consuming step and can take minutes to hours for large designs.

**Step 6: Static Timing Analysis**
After place-and-route, the tool performs **Static Timing Analysis (STA)** to verify that the design meets all timing constraints. The tool calculates the delay of every path from a flip-flop, through combinational logic, to another flip-flop, and checks that the total delay is less than the clock period minus the setup time. If any path is too slow, the tool reports a **timing violation**. You can fix timing violations by: optimizing the RTL code, adding pipeline stages, using timing constraints, or choosing a faster FPGA speed grade.

**Step 7: Timing Simulation (Post-Synthesis or Post-Fit)**
Timing simulation is an optional but valuable step. It simulates the design using the actual delays extracted from the placed-and-routed design. This reveals timing problems that functional simulation cannot catch, such as setup time violations, hold time violations, and glitches. Timing simulation is slower than functional simulation but is essential for high-speed designs.

**Step 8: Bitstream Generation**
The final step is to generate the configuration file (bitstream) that programs the FPGA. For Intel FPGAs, the bitstream is called a **.sof file** (SRAM Object File) for JTAG programming or a **.pof file** (Programmer Object File) for flash programming. The Assembler tool in Quartus Prime generates these files from the placed-and-routed design.

**Step 9: Hardware Programming and Verification**
The bitstream is downloaded to the FPGA using a USB-Blaster cable connected to the JTAG header on the development board. The FPGA is configured in seconds, and the design begins running immediately. You then verify the hardware behavior using LEDs, switches, oscilloscopes, logic analyzers, and serial terminals. If the hardware behavior does not match the simulation, you debug by checking the pin assignments, the clock frequency, and the physical connections.

**Key Quartus Prime Files:**
- `.qpf` — Quartus Prime Project File
- `.qsf` — Quartus Settings File (lists source files, device, pin assignments)
- `.v`, `.vhd` — Verilog and VHDL source files
- `.sdc` — Synopsys Design Constraints file (timing constraints)
- `.sof` — SRAM Object File (JTAG programming)
- `.pof` — Programmer Object File (flash programming)
- `.qsys` — Qsys system design file (for SoC designs)

#### Key concepts
- FPGA design flow: specification → RTL → simulation → synthesis → place-and-route → timing analysis → bitstream → programming
- Functional simulation vs. timing simulation
- Synthesis and technology mapping
- Place-and-route (fitting)
- Static Timing Analysis (STA)
- Bitstream generation (.sof, .pof)
- Key Quartus Prime project files

#### Hands-on activity
Create a new Quartus Prime project for the DE10-Lite board (MAX 10 device). Write a simple Verilog module that blinks an LED at 1 Hz using a counter. Follow the complete design flow: write the code, compile, view the RTL Viewer, run functional simulation in ModelSim, verify the timing reports, generate the .sof file, and program the FPGA. Document each step with screenshots. Measure the actual LED blink rate with a stopwatch.

#### Assessment idea
Ask: "What is the difference between functional simulation and timing simulation?" Answer: Functional simulation checks logical correctness without considering delays. Timing simulation checks logical correctness using the actual delays from the placed-and-routed design. Then ask: "What does a timing violation mean, and what are three ways to fix it?" Answer: A timing violation means a signal does not arrive at its destination before the setup time. Fixes: (1) optimize the RTL to reduce logic depth, (2) add pipeline stages to break long paths, (3) use a lower clock frequency or a faster FPGA.

#### AI generation note
Create a 10-minute animated flowchart of the FPGA design flow. Show each step as a box with arrows connecting them. Animate the files being produced at each step (.v → .qsf → .vo → .sof). Show the RTL Viewer, the Technology Map Viewer, and the timing report side by side. Use a color code: green for passed steps, yellow for warnings, red for errors. Include a troubleshooting guide at the bottom for common errors at each stage.

---

### Chapter 6.2 — Using Quartus Prime for FPGA Development

#### Learning objectives
- Create and configure a new project in Intel Quartus Prime.
- Add source files, set the target device, and configure pin assignments.
- Compile a design and interpret the compilation reports.
- Use the RTL Viewer, Technology Map Viewer, and Chip Planner to analyze the design.

#### Detailed lesson content

Intel Quartus Prime is the flagship FPGA development tool for Intel (formerly Altera) FPGAs. It integrates all the steps of the FPGA design flow into a single graphical environment. The free **Lite Edition** supports the MAX 10, Cyclone V, and other low-cost families, making it ideal for learning. This chapter walks you through the essential features of Quartus Prime.

**Creating a Project:**
1. Open Quartus Prime and select **File > New Project Wizard**.
2. Choose a project directory and name. For example: `C:\FPGA_Projects\BlinkLED`.
3. Add your Verilog or VHDL source files. You can also add them later.
4. Select the target device. For the DE10-Lite board, choose **MAX 10 > 10M50DAF484C7G**.
5. Select the EDA tools. For simulation, choose **ModelSim-Intel FPGA**.
6. Finish the wizard. Quartus Prime creates the `.qpf` and `.qsf` files.

**Writing RTL Code:**
Quartus Prime has a built-in text editor with syntax highlighting for Verilog and VHDL. You can create a new file with **File > New > Verilog HDL File**. Write your module, save it with a `.v` extension, and add it to the project with **Project > Add/Remove Files in Project**.

**Compiling the Design:**
Click the **Start Compilation** button (the purple triangle). Quartus Prime runs the complete flow: Analysis & Synthesis (synthesis), Fitter (place-and-route), Assembler (bitstream generation), and Timing Analyzer. The Compilation Report window shows the results of each stage. Key reports include:
- **Flow Summary:** Total logic elements, registers, memory bits, and DSP blocks used.
- **Fitter Summary:** Resource utilization by type and the maximum clock frequency (fmax).
- **Timing Analyzer:** Detailed timing analysis of all clock domains.

**Pin Assignments:**
Before programming the FPGA, you must assign the module's ports to physical pins on the FPGA. The DE10-Lite board has LEDs connected to specific pins, switches to others, and a 50 MHz clock to a dedicated clock pin. To assign pins:
1. Open **Assignments > Pin Planner**.
2. Find the port name in the list.
3. Double-click the Location column and type the pin number (e.g., `PIN_A8` for LED0).
4. The pin numbers are documented in the DE10-Lite user manual and schematics.

You can also assign pins using a Tcl script or by editing the `.qsf` file directly:

```tcl
set_location_assignment PIN_A8 -to LED[0]
set_location_assignment PIN_A9 -to LED[1]
set_location_assignment PIN_A10 -to LED[2]
set_location_assignment PIN_A11 -to LED[3]
set_location_assignment PIN_A12 -to LED[4]
set_location_assignment PIN_A13 -to LED[5]
set_location_assignment PIN_A14 -to LED[6]
set_location_assignment PIN_A15 -to LED[7]
set_location_assignment PIN_B8 -to KEY[0]
set_location_assignment PIN_B9 -to KEY[1]
set_location_assignment PIN_P11 -to CLK
```

**Design Visualization:**
Quartus Prime provides several viewers to help you understand how your design was synthesized and implemented:
- **RTL Viewer:** Shows the generic netlist before technology mapping. It displays your design as a schematic of gates, multiplexers, and flip-flops. This is useful for verifying that the synthesis tool interpreted your code correctly.
- **Technology Map Viewer:** Shows the netlist after technology mapping, displaying the actual LUTs, flip-flops, and carry chains used. This is useful for analyzing resource usage and identifying optimization opportunities.
- **Chip Planner:** Shows the physical layout of the design on the FPGA die. You can see which CLBs were used, how the routing was routed, and where the I/O pins are located. This is useful for debugging placement and routing issues.

To open these viewers, go to **Tools > Netlist Viewers > RTL Viewer** or **Technology Map Viewer (Post-Mapping)**.

**Programming the FPGA:**
1. Connect the DE10-Lite board to your computer via USB.
2. Open **Tools > Programmer**.
3. Click **Hardware Setup** and select **USB-Blaster**.
4. Click **Auto Detect** to identify the device.
5. Right-click the device and select **Change File**. Browse to the `.sof` file in the `output_files` directory.
6. Check the **Program/Configure** checkbox.
7. Click **Start**. The bitstream is downloaded to the FPGA, and the design begins running.

The FPGA is now configured and running your design. If you power off the board, the configuration is lost (because the MAX 10 is SRAM-based for the logic fabric, though its flash stores the configuration). To make the design permanent, you can program the on-chip flash using the `.pof` file.

#### Key concepts
- Quartus Prime project creation and configuration
- Device selection (MAX 10, Cyclone, etc.)
- Compilation flow: Analysis & Synthesis, Fitter, Assembler, Timing Analyzer
- Compilation reports: resource usage, fmax, timing summary
- Pin assignments via Pin Planner and `.qsf` file
- RTL Viewer, Technology Map Viewer, and Chip Planner
- Programmer tool and JTAG configuration

#### Hands-on activity
Create a Quartus Prime project for a 4-bit binary counter that displays its value on the 8 LEDs of the DE10-Lite board. Assign the clock to the 50 MHz oscillator pin, the counter output to 4 LEDs, and a reset button to a KEY pin. Compile the design, view the RTL Viewer and Technology Map Viewer, and program the FPGA. Verify that the LEDs count in binary. Use the Chip Planner to locate the flip-flops used for the counter.

#### Assessment idea
Ask: "You compile a design and the Flow Summary shows 150% logic element utilization. What does this mean, and what are your options?" Answer: The design uses more logic elements than the FPGA has. Options: (1) optimize the RTL to reduce logic depth, (2) use hard blocks (DSP, memory) instead of logic, (3) choose a larger FPGA device. Then ask: "What is the purpose of the RTL Viewer?" Answer: It shows the generic netlist before technology mapping, allowing you to verify that the synthesis tool correctly interpreted your HDL code.

#### AI generation note
Create a 12-minute screen recording tutorial. Show the Quartus Prime interface: project wizard, source editor, compilation window, and compilation report. Show the Pin Planner with a map of the FPGA pins. Show the RTL Viewer with a zoomed-in schematic. Show the Programmer tool with the USB-Blaster connected. Include callouts and annotations for every important button and field. End with a troubleshooting checklist for common compilation errors.

---

### Chapter 6.3 — RTL Viewer, Technology Map Viewer, and Design Visualization

#### Learning objectives
- Use the RTL Viewer to verify the logical structure of a synthesized design.
- Use the Technology Map Viewer to analyze the mapped design and resource usage.
- Interpret the resource utilization report to optimize the design.
- Use the Chip Planner to understand physical placement and routing.

#### Detailed lesson content

One of the most powerful features of modern FPGA tools is the ability to visualize your design at multiple levels of abstraction. Quartus Prime provides three complementary viewers that show your design from the logical level down to the physical level. Learning to use these viewers effectively is essential for debugging, optimization, and understanding how HDL code maps to hardware.

**RTL Viewer:**
The RTL Viewer displays the generic netlist produced by the Analysis & Synthesis stage. It shows your design as a schematic of logic primitives: AND gates, OR gates, XOR gates, multiplexers, adders, comparators, and flip-flops. This is the closest representation to your mental model of the circuit. The RTL Viewer is invaluable for verifying that the synthesis tool correctly interpreted your HDL code.

For example, if you write a priority encoder in Verilog, the RTL Viewer should show a tree of multiplexers and comparators. If it shows something unexpected (like a latch or a counter), you know there is a bug in your code. Common issues caught in the RTL Viewer include:
- Inferred latches from incomplete if-else or case statements
- Unexpected counters from arithmetic operations inside always blocks
- Incorrect multiplexer structures from nested conditional operators
- Missing flip-flops from incorrect clock edge specifications

To use the RTL Viewer:
1. Compile the design through Analysis & Synthesis.
2. Go to **Tools > Netlist Viewers > RTL Viewer**.
3. Navigate through the hierarchy by double-clicking modules.
4. Zoom in to see individual gates and their connections.
5. Trace signals by clicking on wires and following the highlighted path.

**Technology Map Viewer:**
The Technology Map Viewer shows the netlist after technology mapping. It displays the actual FPGA primitives: Logic Elements (LEs), Adaptive Logic Modules (ALMs), DSP blocks, memory blocks, and I/O cells. This viewer is essential for understanding resource usage and identifying optimization opportunities.

For example, if you design a 16-tap FIR filter, the Technology Map Viewer will show how many DSP blocks and memory blocks are used. If the design uses too many LUTs, you might decide to use DSP blocks for the multipliers instead. If the design uses too many registers, you might pipeline the data path differently.

The Technology Map Viewer has two modes:
- **Post-Mapping:** Shows the netlist after technology mapping but before placement. This is useful for analyzing the logical structure of the mapped design.
- **Post-Fitting:** Shows the netlist after placement and routing. This is useful for analyzing the physical implementation, including the actual delay of each path.

To use the Technology Map Viewer:
1. Compile the design through the Fitter.
2. Go to **Tools > Netlist Viewers > Technology Map Viewer (Post-Mapping)** or **(Post-Fitting)**.
3. Navigate the hierarchy and zoom in to see individual LEs.
4. Click on an LE to see its LUT contents, flip-flop configuration, and carry chain connections.

**Chip Planner:**
The Chip Planner shows the physical layout of the design on the FPGA die. It displays the array of logic blocks, the routing channels, the I/O pads, and the hard blocks (DSP, memory, PLL). The Chip Planner is the most detailed view and is used for advanced optimization and debugging.

You can use the Chip Planner to:
- See where your design was placed on the FPGA die.
- Identify routing congestion (areas where too many signals compete for the same routing channels).
- Verify that critical paths are routed with short, low-delay connections.
- Manually place logic blocks for timing-critical designs.
- Locate unused resources for future expansion.

The Chip Planner uses color coding: logic elements are shown as small squares, routing wires as colored lines, and I/O pads as larger rectangles on the edges. You can search for specific nodes by name and see their physical location.

**Resource Utilization Report:**
After compilation, the Compilation Report window shows detailed resource usage. For a MAX 10 design, the report shows:
- Total logic elements used vs. available
- Total registers used vs. available
- Total memory bits used vs. available
- Total DSP blocks used vs. available
- Total PLLs used vs. available
- Pin usage (input, output, bidirectional)

The **Flow Summary** page gives a quick overview, while the **Fitter > Place Stage** page gives detailed per-region usage. If the design uses 90% of the logic elements, you have little room for expansion. If it uses only 10%, you might be able to use a smaller, cheaper FPGA.

#### Key concepts
- RTL Viewer: generic netlist, logical verification
- Technology Map Viewer: mapped netlist, resource analysis
- Chip Planner: physical layout, placement and routing
- Resource utilization report: LEs, registers, memory, DSP, PLLs, pins
- Inferred latch detection in RTL Viewer
- Post-Mapping vs. Post-Fitting views

#### Hands-on activity
Take the 4-bit ALU design from Chapter 4.2 and compile it in Quartus Prime. Open the RTL Viewer and trace the path from the inputs to the output for the ADD operation. Then open the Technology Map Viewer and count how many LEs are used. Open the Chip Planner and locate the LEs used for the ALU. Write a report documenting: (1) the logical structure in the RTL Viewer, (2) the number of LEs and registers used, (3) the physical location of the LEs in the Chip Planner, and (4) whether any resources were wasted or could be optimized.

#### Assessment idea
Show a screenshot of an RTL Viewer schematic with an unexpected latch. Ask: "What is wrong with this design, and how would you fix it in the HDL code?" Answer: The design has an incomplete if-else or case statement where one output is not assigned in every branch. Fix: add a default assignment or ensure every branch assigns every output. Then ask: "The Technology Map Viewer shows that your design uses 100 LEs but only 20 registers. What might this tell you about the design?" Answer: The design is heavily combinational (lots of logic, few flip-flops), which might mean it has long combinational paths and potential timing issues.

#### AI generation note
Create a 10-minute lesson with a screen recording of Quartus Prime. Show the RTL Viewer zooming in on an adder and a multiplexer. Show the Technology Map Viewer displaying individual LEs with their LUT contents. Show the Chip Planner with a bird's-eye view of the FPGA die and a zoom-in on a specific region. Use color-coded overlays to highlight critical paths, routing congestion, and unused resources. Include a voice-over explaining what each view tells you about the design.

---

### Chapter 6.4 — Simulation with ModelSim and Quartus Prime Simulator

#### Learning objectives
- Set up and run a ModelSim simulation from within Quartus Prime.
- Use the ModelSim waveform viewer to debug designs.
- Run Quartus Prime's built-in simulator for quick functional checks.
- Compare the simulation workflows and choose the appropriate tool for a given task.

#### Detailed lesson content

Simulation is the most critical verification step in FPGA design. It allows you to find and fix bugs before programming the hardware, saving hours of debugging time. Intel Quartus Prime integrates with two simulation tools: **ModelSim-Intel FPGA** (a full-featured simulator) and the **Quartus Prime Simulator** (a built-in tool for quick functional checks).

**ModelSim** is the industry-standard simulator for Verilog and VHDL. It supports both languages, mixed-language designs, and advanced debugging features like breakpoints, signal tracing, and code coverage. ModelSim-Intel FPGA is a version of ModelSim that is optimized for Intel FPGAs and included with Quartus Prime.

To run a simulation in ModelSim from Quartus Prime:
1. Write your testbench file and add it to the project.
2. Go to **Assignments > Settings > EDA Tool Settings > Simulation**.
3. Set the tool name to **ModelSim-Intel FPGA**.
4. Set the format to **Verilog** or **VHDL**.
5. Go to **Tools > Run Simulation Tool > RTL Simulation**.
6. Quartus Prime automatically launches ModelSim, compiles the design files, and loads the testbench.
7. In ModelSim, add signals to the waveform viewer by dragging them from the Objects window.
8. Run the simulation with **Run -all** or by specifying a time (e.g., **Run 1000 ns**).
9. Observe the waveforms and verify correctness.

The ModelSim waveform viewer is powerful. You can:
- Zoom in and out with the mouse wheel.
- Measure the time between two edges with the cursor.
- Group signals into buses and display them in decimal, hex, or binary.
- Change the radix (display format) of signals by right-clicking.
- Add dividers and labels to organize the waveform.
- Save the waveform configuration as a `.do` file for reuse.

For debugging, you can use **breakpoints** to pause the simulation at a specific line of code. This is useful for stepping through a testbench or examining the state of a design at a specific time. You can also use the **Transcript** window to view `$display` and `$monitor` output from Verilog testbenches.

**Quartus Prime Simulator** is a simpler, built-in simulator that is useful for quick functional checks without launching ModelSim. It is not as feature-rich as ModelSim but is faster for small designs. To use it:
1. Go to **Tools > Simulator**.
2. Create a vector file (`.vwf`) that defines the input waveforms.
3. Add input signals and draw their waveforms (HIGH, LOW, clocks).
4. Run the simulation and observe the output waveforms.

The Vector Waveform File (VWF) editor is a graphical tool where you draw the input waveforms with the mouse. It is intuitive for beginners but becomes cumbersome for complex testbenches. For serious verification, ModelSim with a self-checking testbench is always preferred.

**Comparison:**
- **ModelSim:** Full-featured, supports self-checking testbenches, better for complex designs, supports code coverage and advanced debugging.
- **Quartus Simulator:** Built-in, quick to use, graphical waveform entry, good for simple designs and quick checks.

For this course, ModelSim is the primary simulation tool. You should use it for all testbenches and verification tasks.

**Common Simulation Mistakes:**
- **Forgetting to initialize signals:** In Verilog, uninitialized registers default to `X` (unknown). Always initialize signals in the testbench or the design's reset logic.
- **Clock and reset race conditions:** If the reset is deasserted at the same time as a clock edge, the simulation result may be ambiguous. Use non-overlapping clock and reset transitions.
- **Missing sensitivity list:** In Verilog combinational always blocks, missing an input in the sensitivity list causes the simulation to not update the output when that input changes. Use `@(*)` to avoid this.
- **Blocking vs. non-blocking assignments:** Using blocking assignments (`=`) in sequential always blocks can cause incorrect simulation behavior. Always use non-blocking assignments (`<=`) in clocked blocks.

#### Key concepts
- ModelSim workflow: compile, load, simulate, waveform analysis
- ModelSim waveform viewer features: zoom, measure, radix, groups
- Breakpoints and signal tracing in ModelSim
- Quartus Prime Simulator and VWF files
- Comparison of ModelSim vs. Quartus Simulator
- Common simulation mistakes and debugging techniques

#### Hands-on activity
Take the 4-bit sequence detector FSM from Chapter 4.3. Simulate it in ModelSim from Quartus Prime. Add all internal signals (including the state register) to the waveform. Zoom in to verify that the state transitions occur on the rising clock edge and that the output `detected` is HIGH for exactly one clock cycle when the pattern is detected. Measure the time between the input bit arriving and the output asserting. Save the waveform configuration as a `.do` file.

#### Assessment idea
Ask: "You run a simulation and the output remains 'X' (unknown) for all time. What are three possible causes?" Answer: (1) The output register was not initialized and was never assigned a value. (2) The clock signal is not toggling. (3) The reset signal is held active, preventing the design from operating. Then ask: "Why is a self-checking testbench better than manual waveform inspection?" Answer: It automatically verifies correctness, runs faster, and can be reused for regression testing without human intervention.

#### AI generation note
Create a 10-minute screen recording tutorial. Show the Quartus Prime menu for launching ModelSim. Show the ModelSim interface: transcript window, Objects window, and waveform viewer. Demonstrate adding signals, changing the radix to hexadecimal, and measuring time between edges. Show a breakpoint being set and the simulation pausing. Show a VWF file being created in the Quartus Simulator. Include annotations for every step.

---

## Module 7: Timing Analysis, Constraints, and Design Optimization

> **Goal:** Ensure that FPGA designs meet their timing requirements through static timing analysis, timing constraints, and optimization techniques.

---

### Chapter 7.1 — Static Timing Analysis and Timing Constraints

#### Learning objectives
- Explain the principles of Static Timing Analysis (STA) and why it is used instead of dynamic simulation for timing verification.
- Define setup time, hold time, clock-to-Q delay, and propagation delay.
- Write Synopsys Design Constraints (SDC) files for clock definitions, input delays, and output delays.
- Interpret timing reports from the TimeQuest Timing Analyzer (Quartus Prime) or Vivado Timing Analyzer.

#### Detailed lesson content

Static Timing Analysis (STA) is the method used to verify that a digital circuit meets its timing requirements without simulating the design. Unlike dynamic simulation, which checks logic behavior, STA mathematically analyzes every possible path in the circuit to ensure that signals arrive at flip-flops before the setup time and remain stable through the hold time. STA is exhaustive: it checks every path, not just the ones exercised by a testbench. This makes it the gold standard for timing verification in both FPGA and ASIC design.

The fundamental timing equation for a synchronous circuit is:

```
T_clock >= T_co + T_logic + T_setup + T_skew
```

Where:
- **T_clock:** The clock period (time between clock edges). For a 50 MHz clock, T_clock = 20 ns.
- **T_co (Clock-to-Q delay):** The time from the clock edge to when the flip-flop output becomes stable. For a typical FPGA flip-flop, T_co is about 0.2 ns.
- **T_logic (Propagation delay):** The time for a signal to travel through the combinational logic between flip-flops. This is the sum of LUT delays, routing delays, and carry chain delays.
- **T_setup (Setup time):** The minimum time the data input must be stable before the clock edge. For a typical FPGA flip-flop, T_setup is about 0.1 ns.
- **T_skew (Clock skew):** The difference in arrival time of the clock at different flip-flops. Clock skew is caused by unequal wire lengths in the clock distribution network. It can be positive or negative.

If the total delay (T_co + T_logic + T_setup + T_skew) is less than the clock period, the design meets setup time. If it is greater, the design has a **setup time violation**, which means the flip-flop may capture an incorrect value.

**Hold time** is the minimum time the data input must remain stable after the clock edge. A hold time violation occurs when the new data arrives too quickly after the clock edge, before the flip-flop has finished capturing the old data. Hold time violations are less common in FPGAs because the routing delay between flip-flops is usually long enough, but they can occur in designs with clock skew or when using the same clock edge for launch and capture.

**Timing constraints** are directives that tell the timing analyzer what the design requirements are. Without constraints, the tool cannot verify timing because it does not know the clock frequency or the expected input/output delays. Constraints are written in the **Synopsys Design Constraints (SDC)** format, which is an industry standard supported by Quartus Prime, Vivado, and other tools.

The most important SDC command is `create_clock`, which defines the clock frequency and name:

```sdc
create_clock -name {clk} -period 20.000 [get_ports {clk}]
```

This defines a 50 MHz clock (20 ns period) on the port named `clk`. You can also add duty cycle, offset, and uncertainty:

```sdc
create_clock -name {clk} -period 20.000 -waveform {0.000 10.000} [get_ports {clk}]
set_clock_uncertainty -setup 0.200 [get_clocks {clk}]
```

Input delays are defined with `set_input_delay`:

```sdc
set_input_delay -clock {clk} -max 5.000 [get_ports {data_in}]
set_input_delay -clock {clk} -min 1.000 [get_ports {data_in}]
```

This tells the timing analyzer that the external device driving `data_in` provides it at most 5 ns after the clock edge and at least 1 ns after the clock edge. The FPGA must capture the data within the remaining window.

Output delays are defined with `set_output_delay`:

```sdc
set_output_delay -clock {clk} -max 3.000 [get_ports {data_out}]
```

This tells the timing analyzer that the external device requires `data_out` to be stable at least 3 ns before the next clock edge.

**False paths** and **multicycle paths** are also specified in the SDC file:
- A **false path** is a path that is never exercised in the design (e.g., a reset signal that is only active at power-up). You tell the tool to ignore it with `set_false_path`.
- A **multicycle path** is a path where the data is allowed to take multiple clock cycles (e.g., a slow divider output). You tell the tool with `set_multicycle_path`.

In Quartus Prime, the **TimeQuest Timing Analyzer** reads the SDC file and generates detailed timing reports. The key report is the **Setup Summary**, which shows the worst-case setup slack for each clock domain. Slack is the difference between the required time and the actual arrival time. Positive slack means the design meets timing; negative slack means it fails.

```
Setup Slack = Data Required Time - Data Arrival Time
```

If the slack is negative, the tool reports the **critical path** — the longest path from a launch flip-flop to a capture flip-flop. You can view the critical path in the TimeQuest GUI or in the timing report file. The critical path shows every node along the path: the launching flip-flop, the combinational logic (LUTs, carry chains), the routing delays, and the capturing flip-flop.

#### Key concepts
- Static Timing Analysis (STA) vs. dynamic simulation
- Setup time, hold time, clock-to-Q delay, propagation delay, clock skew
- Timing equation: T_clock >= T_co + T_logic + T_setup + T_skew
- Synopsys Design Constraints (SDC) format
- `create_clock`, `set_input_delay`, `set_output_delay`
- False paths and multicycle paths
- Slack and critical path analysis
- TimeQuest Timing Analyzer reports

#### Hands-on activity
Take the 4-bit ALU design and add a timing constraint to the Quartus Prime project. Create an `.sdc` file with a 50 MHz clock constraint. Compile the design and run the TimeQuest Timing Analyzer. View the Setup Summary report and identify the critical path. Then increase the clock frequency to 100 MHz (10 ns period) and recompile. Observe how the slack changes and whether the design still meets timing. Document the critical path delay and the maximum achievable frequency.

#### Assessment idea
Given a design with T_co = 0.3 ns, T_logic = 12 ns, T_setup = 0.2 ns, and T_skew = 0.5 ns, what is the minimum clock period, and what is the maximum clock frequency? Answer: T_clock_min = 0.3 + 12 + 0.2 + 0.5 = 13.0 ns, f_max = 1 / 13.0 ns ≈ 76.9 MHz. Then ask: "If you add a pipeline stage that splits the combinational logic into two equal halves, what is the new maximum clock frequency?" Answer: Each stage has T_logic = 6 ns, so T_clock_min = 0.3 + 6 + 0.2 + 0.5 = 7.0 ns, f_max ≈ 142.9 MHz. Throughput is doubled, but latency increases by one clock cycle.

#### AI generation note
Create a 10-minute animated lesson. Show a flip-flop launching a signal, the signal traveling through logic and routing, and arriving at the capture flip-flop. Show the setup time window as a green zone before the clock edge. Show a violation as a red arrow arriving after the window closes. Animate the SDC file being written with `create_clock` and `set_input_delay`. Show the TimeQuest report with a highlighted critical path. Use a pipeline animation to show how adding a register breaks a long path into two shorter paths.

---

### Chapter 7.2 — Metastability, Clock Domains, and Clock Domain Crossing

#### Learning objectives
- Define metastability and explain why it occurs when a flip-flop samples an asynchronous input.
- Identify situations where clock domain crossing (CDC) is necessary.
- Implement a two-flip-flop synchronizer for single-bit signals crossing clock domains.
- Use FIFOs and handshaking protocols for multi-bit signal crossing.

#### Detailed lesson content

Metastability is one of the most insidious problems in digital design. It occurs when a flip-flop samples an input that is changing at the same time as the clock edge. If the input is not stable during the setup and hold window, the flip-flop may enter a **metastable state** where its output is neither a valid 0 nor a valid 1 but hovers at an intermediate voltage level. The flip-flop will eventually settle to 0 or 1, but the time it takes is unpredictable. If the metastable output is used by other logic before it settles, it can cause cascading errors and system failure.

Metastability cannot be eliminated. It is a fundamental property of sampling asynchronous signals with synchronous circuits. However, its probability can be reduced to an acceptable level by using **synchronizers**. A synchronizer is a chain of flip-flops that resamples an asynchronous signal with the destination clock, giving it time to settle before being used.

The simplest and most common synchronizer is the **two-flip-flop synchronizer**:

```verilog
module synchronizer (
    input  wire clk_dest,    // Destination clock domain
    input  wire async_in,    // Asynchronous input
    output wire sync_out     // Synchronized output
);
    reg sync_ff1, sync_ff2;

    always @(posedge clk_dest) begin
        sync_ff1 <= async_in;
        sync_ff2 <= sync_ff1;
    end

    assign sync_out = sync_ff2;
endmodule
```

The first flip-flop (`sync_ff1`) samples the asynchronous input. If a metastability occurs, the output of `sync_ff1` may be unstable for a short time. The second flip-flop (`sync_ff2`) samples `sync_ff1` one clock cycle later. By this time, the metastable state has almost certainly resolved to a valid 0 or 1. The probability of metastability persisting through two flip-flops is extremely small (typically less than 10^-20 per second for a 100 MHz clock).

For critical applications, a **three-flip-flop synchronizer** can be used to reduce the probability even further. However, each additional flip-flop adds one clock cycle of latency, so there is a trade-off between reliability and latency.

**Clock Domain Crossing (CDC)** occurs when a signal travels from one clock domain to another clock domain. This is common in FPGA designs because different parts of the system may run at different frequencies. For example, a USB controller might run at 48 MHz while the main processor runs at 100 MHz. Signals crossing between these domains must be synchronized to prevent metastability.

For **single-bit signals** (like flags, interrupts, or enables), a two-flip-flop synchronizer is sufficient. The signal may be delayed by one or two clock cycles, but it will be stable and glitch-free.

For **multi-bit signals** (like data buses or counters), a simple synchronizer is not enough because each bit may be sampled at a different time, causing the receiver to see an inconsistent value. For example, if a 4-bit counter changes from 0111 to 1000, the synchronizer might capture 0110 or 0101 if the bits cross the clock domain at different times. This is called **data coherency** loss.

There are three standard solutions for multi-bit CDC:
1. **Gray Code Counter:** If the data is a counter, use Gray code encoding. In Gray code, only one bit changes at a time, so the synchronizer will never capture an inconsistent value. The receiver converts the Gray code back to binary.
2. **FIFO (First-In-First-Out Buffer):** A FIFO with dual clocks (one for write, one for read) is the standard solution for transferring data between clock domains. The FIFO stores data in memory and uses synchronized pointers to manage the read and write operations. The write side operates in the source clock domain; the read side operates in the destination clock domain. The FIFO ensures that data is transferred in order and without loss.
3. **Handshaking Protocol:** A request-acknowledge handshake ensures that the sender does not change the data until the receiver has acknowledged it. This is slower than a FIFO but requires less hardware.

In modern FPGA design, CDC is a critical verification topic. Tools like Questa CDC and Vivado CDC analyze the design to find unsynchronized crossings and report them as violations. You should always verify that every CDC path in your design has a proper synchronizer or FIFO.

#### Key concepts
- Metastability and its causes
- Two-flip-flop synchronizer
- Mean Time Between Failures (MTBF) and synchronizer reliability
- Clock Domain Crossing (CDC)
- Single-bit vs. multi-bit synchronization
- Gray code counters for multi-bit CDC
- FIFOs for dual-clock data transfer
- Handshaking protocols
- CDC verification tools

#### Hands-on activity
Write a Verilog module that implements a two-flip-flop synchronizer and a 4-bit Gray code counter. Write a testbench that simulates the Gray code counter incrementing in a 50 MHz clock domain and being sampled by a 100 MHz clock domain through the synchronizer. Verify in the waveform that the synchronized Gray code value is always valid (only one bit changes at a time). Then convert the Gray code back to binary in the destination domain and verify that the binary value is correct.

#### Assessment idea
Ask: "Why is a two-flip-flop synchronizer sufficient for a single-bit flag but not for a multi-bit data bus?" Answer: A single-bit synchronizer can only be metastable or stable; there is no intermediate value. A multi-bit bus synchronizer might capture each bit at a different time, resulting in an inconsistent value (e.g., a counter value that never existed). Then ask: "What is the advantage of a Gray code counter over a binary counter for clock domain crossing?" Answer: In Gray code, only one bit changes at each increment, so the synchronizer will always capture either the old value or the new value, never an invalid combination.

#### AI generation note
Create a 10-minute lesson with animated timing diagrams. Show a flip-flop entering metastability with an oscillating output. Show the two-flip-flop synchronizer with the first flip-flop possibly metastable and the second flip-flop stable. Show a binary counter crossing clock domains and capturing an invalid value (0110 instead of 0111 or 1000). Then show a Gray code counter with only one bit changing. Show a dual-clock FIFO with write and read pointers being synchronized. Include a CDC violation report from a tool like Questa CDC.

---

### Chapter 7.3 — Pipelining, Resource Sharing, and Design Optimization

#### Learning objectives
- Use pipelining to increase clock frequency and throughput.
- Apply resource sharing to reduce area usage.
- Understand retiming and how it moves registers across combinational logic.
- Use design constraints to guide the synthesis tool toward optimization goals.

#### Detailed lesson content

FPGA design is a trade-off between speed, area, and power. Optimization is the process of improving one or more of these metrics while maintaining correct functionality. This chapter covers three fundamental optimization techniques: pipelining, resource sharing, and retiming.

**Pipelining** is the technique of inserting registers (pipeline stages) into a long combinational path to break it into shorter paths. This increases the maximum clock frequency because each stage has less logic to compute. The trade-off is increased latency: the result takes more clock cycles to appear. However, the throughput (results per clock cycle after the initial latency) is maintained or improved.

Consider a 32-bit combinational multiplier. Without pipelining, the multiplication completes in one clock cycle, but the combinational path is very long (many LUTs and carry chains), limiting the clock frequency to, say, 20 MHz. If we insert three pipeline stages, the combinational path is divided into four shorter paths, each with about one-fourth the delay. The clock frequency can now be 80 MHz. The latency increases from 1 cycle to 4 cycles, but after the initial latency, one multiplication result is produced every clock cycle.

Pipelining in Verilog is implemented by adding intermediate registers:

```verilog
module pipelined_multiplier (
    input  wire        clk,
    input  wire [15:0] a, b,
    output reg  [31:0] product
);
    reg [15:0] a_reg, b_reg;
    reg [31:0] partial1, partial2;

    always @(posedge clk) begin
        // Stage 1: Register inputs
        a_reg <= a;
        b_reg <= b;

        // Stage 2: Partial product
        partial1 <= a_reg * b_reg;

        // Stage 3: Final product (placeholder for multi-stage pipeline)
        partial2 <= partial1;

        // Stage 4: Output register
        product <= partial2;
    end
endmodule
```

For a true multi-stage multiplier, the partial products would be computed in stages. The key principle is that each stage should have roughly equal delay to maximize the clock frequency benefit.

**Resource sharing** is the technique of reusing hardware resources (like multipliers or adders) for multiple operations instead of duplicating them. For example, if a design needs to compute `A * B` and `C * D` but never at the same time, a single multiplier can be shared using a multiplexer:

```verilog
always @(*) begin
    if (sel == 0)
        result = a * b;
    else
        result = c * d;
end
```

The synthesis tool will infer a single multiplier and a multiplexer, saving logic resources. However, resource sharing may reduce throughput because the shared resource can only perform one operation per clock cycle. The trade-off is area vs. throughput.

**Retiming** is an advanced optimization technique where the synthesis tool automatically moves registers across combinational logic boundaries to balance the delay between stages. For example, if a design has a long path followed by a short path, retiming can move a register from the short path to the long path, improving the overall clock frequency without changing the design's functionality. Retiming is enabled in Quartus Prime with the **Perform gate-level register retiming** option.

**Design constraints** can also guide optimization. For example, if you specify a high clock frequency in the SDC file, the synthesis tool will work harder to optimize the design. You can also use **multicycle path** constraints to tell the tool that certain paths have more than one clock cycle, allowing it to relax timing on those paths and focus on the truly critical paths.

**Other optimization techniques include:**
- **State encoding:** Using one-hot encoding for FSMs can reduce the next-state logic and improve speed, though it uses more flip-flops.
- **Logic duplication:** Duplicating high-fanout signals can reduce routing delay.
- **Physical synthesis:** The tool modifies the netlist during place-and-route to improve timing.
- **Memory inference:** Using standard HDL patterns (like arrays with clocked read/write) allows the tool to map the design to dedicated BRAM blocks instead of LUTs, saving area and improving speed.

#### Key concepts
- Pipelining: latency vs. throughput trade-off
- Resource sharing: area vs. throughput trade-off
- Retiming: moving registers to balance delay
- Design constraints guiding optimization
- State encoding: binary vs. one-hot vs. Gray code
- Logic duplication and physical synthesis
- Memory inference and BRAM usage

#### Hands-on activity
Take a 16-bit combinational adder and convert it into a 4-stage pipelined adder. Simulate both versions in ModelSim and compare the resource usage and maximum clock frequency reported by Quartus Prime. Measure the latency (in clock cycles) and throughput (additions per second) of both designs. Write a report showing: (1) the Verilog code for both versions, (2) the resource usage comparison, (3) the timing comparison (fmax), and (4) the latency and throughput calculations.

#### Assessment idea
Ask: "You have a design that runs at 50 MHz and uses 10,000 LEs. You need to increase the clock frequency to 100 MHz. Which optimization technique would you try first, and what would be the trade-off?" Answer: Pipelining would be the first technique to try. The trade-off is increased latency: the result will take more clock cycles to appear. Then ask: "You have two multipliers in your design, but they are never used at the same time. Which technique would you apply?" Answer: Resource sharing to reduce the number of multipliers from two to one, saving LEs and DSP blocks.

#### AI generation note
Create a 10-minute animated lesson. Show a long combinational path with a slow clock. Show pipeline registers being inserted, breaking the path into shorter segments. Animate the clock speeding up as the segments get shorter. Show a throughput graph: the pipelined design has higher throughput after the initial latency. Show resource sharing as a single multiplier being multiplexed between two inputs. Show retiming as a register sliding across a logic boundary. Include a side-by-side comparison table of latency, throughput, and area for each optimization.

---

## Module 8: Embedded Processors, IP Cores, and System Design

> **Goal:** Learn to build complete FPGA-based embedded systems using soft-core processors, IP cores, and system design tools like Qsys.

---

### Chapter 8.1 — Soft-Core vs. Hard-Core Processors: NIOS II, MicroBlaze, and ARM

#### Learning objectives
- Distinguish between soft-core processors (implemented in FPGA logic) and hard-core processors (dedicated silicon on the FPGA die).
- Describe the NIOS II soft-core processor architecture and its instruction set.
- Explain the trade-offs between soft-core and hard-core processors in terms of flexibility, performance, cost, and power.
- Identify applications where a soft-core processor is appropriate and where a hard-core processor is necessary.

#### Detailed lesson content

One of the most powerful features of modern FPGAs is the ability to integrate a processor inside the FPGA fabric. This allows you to build a **System-on-Chip (SoC)** that combines the flexibility of software with the performance of custom hardware. There are two types of embedded processors in FPGAs: **soft-core processors** and **hard-core processors**.

A **soft-core processor** is a processor architecture described in HDL (Verilog or VHDL) that is synthesized into the FPGA's logic elements. It is "soft" because it is implemented in programmable logic and can be customized. The most widely used soft-core processors are:
- **Intel NIOS II:** The soft-core processor from Intel (Altera). It is a 32-bit RISC processor with a Harvard architecture, optional cache, and a wide range of peripherals. The NIOS II is highly configurable: you can choose the core type (economy, standard, or fast), add or remove peripherals, and define custom instructions.
- **Xilinx MicroBlaze:** The soft-core processor from Xilinx. It is also a 32-bit RISC processor with configurable features, cache, and peripherals. MicroBlaze is similar to NIOS II in capabilities and is used in Xilinx FPGAs.
- **RISC-V soft cores:** Open-source RISC-V processors like VexRiscv, PicoRV32, and SiFive E31 are increasingly popular because they are royalty-free and highly customizable.

A **hard-core processor** is a dedicated processor silicon fabricated directly on the FPGA die alongside the programmable logic. It is "hard" because it is a fixed, optimized silicon block, not synthesized from LUTs. Examples include:
- **ARM Cortex-A9:** Found in Xilinx Zynq-7000 SoCs. It is a dual-core ARM processor with NEON SIMD, floating-point, and cache.
- **ARM Cortex-A53:** Found in Xilinx Zynq UltraScale+ and Intel Agilex. It is a 64-bit quad-core processor with advanced power management.
- **ARM Cortex-R5:** A real-time processor found in Zynq UltraScale+ for safety-critical applications.
- **ARM Cortex-M1/M3:** Smaller ARM cores available as soft cores in some FPGAs.

The trade-offs are significant:

| Feature | Soft-Core Processor | Hard-Core Processor |
|---------|---------------------|---------------------|
| Implementation | Synthesized in FPGA logic | Dedicated silicon |
| Performance | Lower (50–200 MHz typical) | Higher (1+ GHz typical) |
| Power | Higher per MHz | Lower per MHz |
| Flexibility | Very high (customizable) | Low (fixed architecture) |
| Area | Uses FPGA logic resources | Uses no FPGA logic resources |
| Cost | Included with FPGA tools | Increases FPGA cost |
| Peripherals | Configurable via Qsys/Vivado | Fixed set + FPGA peripherals |

Soft-core processors are ideal when:
- You need a simple control processor to manage hardware peripherals.
- You want to customize the processor (add custom instructions, special peripherals).
- You are using a low-cost FPGA without a hard processor.
- You need to maintain a single-chip solution without external processors.

Hard-core processors are ideal when:
- You need high performance for running Linux, Android, or complex algorithms.
- You need low power consumption for battery-operated devices.
- You are building a product that requires a standard processor ecosystem (compilers, debuggers, operating systems).
- You need advanced features like cache coherency, virtualization, or hardware floating-point.

The **NIOS II** processor, which is the focus of this course, has three core types:
- **NIOS II/e (Economy):** Smallest core, no cache, no hardware multiply/divide. Ideal for simple control tasks.
- **NIOS II/s (Standard):** Balanced core with instruction cache and hardware multiply/divide. Good for general-purpose applications.
- **NIOS II/f (Fast):** Largest core with instruction and data cache, branch prediction, and hardware multiply/divide. Best for performance-critical applications.

The NIOS II processor connects to peripherals through the **Avalon Memory-Mapped Interface**, a bus protocol designed by Intel for connecting processor cores to memory and peripherals in FPGAs. Peripherals include UART, SPI, I2C, timers, GPIO, and custom hardware components.

#### Key concepts
- Soft-core processor (NIOS II, MicroBlaze, RISC-V) vs. hard-core processor (ARM Cortex-A9, Cortex-A53)
- Trade-offs: performance, power, flexibility, area, cost
- NIOS II core types: Economy, Standard, Fast
- Avalon Memory-Mapped Interface
- Applications of soft-core vs. hard-core processors

#### Hands-on activity
Research the specifications of the NIOS II/f processor and the ARM Cortex-A9 processor. Create a comparison table with: clock frequency, DMIPS/MHz, cache size, hardware multiply/divide, floating-point support, power consumption, and typical FPGA family. Then write a one-page recommendation for which processor to use in each of these scenarios: (1) a simple motor controller running a PID loop at 1 kHz, (2) a video processing system running OpenCV on Linux, (3) a battery-powered IoT sensor node with a 10-year lifetime.

#### Assessment idea
Ask: "What is the fundamental difference between a soft-core processor and a hard-core processor in an FPGA?" Answer: A soft-core is implemented in programmable logic (LUTs and flip-flops) and is customizable; a hard-core is dedicated silicon fabricated on the FPGA die and is fixed. Then ask: "You are designing a system that needs to run a real-time operating system at 500 MHz with hardware floating-point. Should you choose a NIOS II or a Zynq ARM Cortex-A9?" Answer: The Zynq ARM Cortex-A9, because it can run at much higher frequencies, has hardware floating-point, and supports a full operating system with cache and MMU.

#### AI generation note
Create a 10-minute animated comparison. Show a soft-core processor as a block diagram built from LUTs and flip-flops, with arrows showing customization options. Show a hard-core processor as a fixed silicon block on the FPGA die. Animate the Avalon bus connecting the NIOS II to UART, GPIO, and custom peripherals. Show a performance comparison bar chart with NIOS II at 150 MHz and ARM Cortex-A9 at 1 GHz. Include a decision matrix for choosing between soft-core and hard-core.

---

### Chapter 8.2 — IP Cores and Third-Party IP Acquisition

#### Learning objectives
- Define an Intellectual Property (IP) core and explain its role in FPGA design.
- Distinguish between hard IP, soft IP, and firm IP.
- Evaluate the trade-offs between implementing custom logic and acquiring third-party IP.
- Use the IP Catalog in Quartus Prime and Vivado to integrate standard IP cores.

#### Detailed lesson content

An **Intellectual Property (IP) core** is a pre-designed, pre-verified block of logic that performs a specific function. IP cores are the building blocks of modern FPGA design. Instead of designing a UART controller, a DDR memory interface, or an FFT engine from scratch, you can acquire an IP core and integrate it into your design. This dramatically reduces development time, risk, and cost.

IP cores come in three forms:
- **Hard IP:** Pre-designed silicon blocks that are physically placed on the FPGA die. They cannot be modified. Examples include ARM Cortex-A9 processors, PCIe controllers, and DDR memory controllers in Zynq devices. Hard IP offers the highest performance and lowest power but zero flexibility.
- **Soft IP:** HDL descriptions (Verilog or VHDL) of a function that is synthesized into the FPGA's logic. Soft IP is customizable and portable across different FPGA families. Examples include NIOS II processor, FIR filters, and soft UART controllers. The performance and area depend on the target FPGA and synthesis settings.
- **Firm IP:** Synthesized netlists (e.g., EDIF or QXP files) that are technology-mapped to a specific FPGA family but not yet placed and routed. Firm IP offers a balance between portability and optimization.

IP cores can be acquired from several sources:
- **FPGA Vendor IP:** Intel and Xilinx provide extensive libraries of free and licensed IP cores through their tools (Quartus Prime IP Catalog, Vivado IP Catalog). These cores are optimized for the vendor's FPGAs and include UART, SPI, I2C, Ethernet, DDR controllers, PCIe, FFT, FIR filters, and more.
- **Third-Party IP:** Companies like CAST, IP Cores, Inc., and OpenCores provide commercial and open-source IP cores for a wide range of functions.
- **Open-Source IP:** The OpenCores website (opencores.org) hosts thousands of open-source IP cores contributed by the community. These are free to use but may vary in quality and documentation.
- **Custom IP:** You can design your own IP core and reuse it across multiple projects. This is common for company-specific algorithms, protocols, or interfaces.

The trade-off between **implementing custom logic** and **acquiring IP** depends on several factors:
- **Time:** Acquiring IP saves weeks or months of development and verification time.
- **Cost:** Vendor IP may have licensing fees, but the cost is often less than the engineering time to design and verify the equivalent function.
- **Performance:** Vendor IP is usually highly optimized. Custom logic may not match its performance unless you are an expert.
- **Flexibility:** Custom logic can be tailored exactly to your needs. IP cores may have features you don't need or lack features you do need.
- **Risk:** Vendor IP is pre-verified and supported. Custom logic must be verified by you, which introduces risk.
- **Portability:** Soft IP can be ported to different FPGAs. Hard IP is tied to a specific device.

In Quartus Prime, the **IP Catalog** is accessed via **Tools > IP Catalog**. You can search for IP cores by category, generate an instance with your desired parameters, and integrate it into your design. For example, to add a UART controller:
1. Open the IP Catalog.
2. Search for "UART" or "RS-232".
3. Select the UART (RS-232 Serial Port) IP core.
4. Specify parameters: baud rate, data bits, parity, stop bits.
5. Generate the IP instance (creates Verilog/VHDL files and a simulation model).
6. Instantiate the generated module in your design.
7. Connect the IP to the NIOS II processor via the Avalon bus.

The IP Catalog also generates simulation models and example designs, which are invaluable for verification and learning.

#### Key concepts
- IP core definition and types: hard IP, soft IP, firm IP
- IP sources: vendor IP, third-party IP, open-source IP, custom IP
- Trade-offs: time, cost, performance, flexibility, risk, portability
- IP Catalog in Quartus Prime and Vivado
- IP generation and integration workflow
- Licensing models: free, evaluation, perpetual, subscription

#### Hands-on activity
Open the Quartus Prime IP Catalog and browse the available IP cores. Find the following IP cores and write a one-sentence description of each: UART, SPI, I2C, DDR3 Controller, PCIe Gen3 x8, FFT, FIR Compiler, NIOS II Processor. Then choose one IP core (e.g., UART) and generate an instance with your desired parameters. Examine the generated files and identify the instantiation template, the simulation model, and the documentation.

#### Assessment idea
Ask: "You need to add a DDR3 memory controller to your FPGA design. Should you design it yourself or acquire an IP core? Justify your answer." Answer: Acquire an IP core. DDR3 memory controllers are extremely complex, requiring precise timing calibration, refresh management, and command scheduling. Designing one from scratch would take months and has a high risk of errors. Vendor IP is pre-verified and optimized. Then ask: "What is the difference between hard IP and soft IP?" Answer: Hard IP is fixed silicon on the FPGA die (e.g., ARM Cortex-A9). Soft IP is an HDL description that is synthesized into FPGA logic (e.g., NIOS II).

#### AI generation note
Create a 9-minute lesson with a screen recording of the Quartus Prime IP Catalog. Show the search function, parameter configuration, and IP generation. Show the generated files in the project directory. Use an animated diagram to show how an IP core (UART) connects to a NIOS II processor via the Avalon bus. Show a cost-benefit analysis graph: time saved vs. licensing cost vs. custom development cost. Include a quiz about IP types.

---

### Chapter 8.3 — Building an FPGA SoC with Qsys and IP Integrator

#### Learning objectives
- Use Qsys (Quartus Prime) to build a system with a NIOS II processor, memory, and peripherals.
- Understand the Avalon Memory-Mapped Interface and how components connect via the system interconnect fabric.
- Configure the NIOS II processor core, on-chip memory, UART, timer, and GPIO peripherals.
- Generate the system HDL files and integrate them into the Quartus Prime project.

#### Detailed lesson content

Qsys (now called **Platform Designer** in newer versions of Quartus Prime) is a system design tool that allows you to build complex FPGA SoCs by connecting IP cores through a graphical interface. Instead of writing HDL code to connect a processor to a UART, a memory, and a timer, you use Qsys to drag-and-drop components and connect them with the mouse. Qsys then automatically generates the interconnect logic, address decoding, and HDL files for the entire system.

The Qsys workflow is:
1. Open Qsys from Quartus Prime (**Tools > Platform Designer**).
2. Add a NIOS II processor core to the system canvas.
3. Add on-chip memory (RAM) for the processor's program and data.
4. Add peripherals: UART, timer, GPIO, and any custom components.
5. Connect the components using the Avalon Memory-Mapped bus.
6. Assign base addresses to each peripheral.
7. Generate the system HDL files.
8. Instantiate the generated system in your top-level Quartus Prime project.
9. Write embedded C software for the NIOS II processor.
10. Compile the software and download it to the FPGA along with the hardware bitstream.

The **Avalon Memory-Mapped Interface** is the bus protocol used by Qsys to connect components. It is a simple, synchronous bus with read and write transactions. Each component connected to the bus has a set of signals: `address`, `read`, `write`, `writedata`, `readdata`, and `waitrequest`. The system interconnect fabric (generated by Qsys) acts as an arbiter that routes transactions between the processor (master) and the peripherals (slaves).

When you add a NIOS II processor to Qsys, you configure its parameters:
- **Core type:** Economy, Standard, or Fast.
- **Instruction cache:** Size and line size (for Standard and Fast cores).
- **Data cache:** Size and line size (for Fast core).
- **JTAG debug module:** Enables debugging via the USB-Blaster.
- **Custom instructions:** Allows adding hardware-accelerated operations.

When you add **on-chip memory**, you specify the size (e.g., 64 KB) and the type (RAM or ROM). The on-chip memory is implemented using the FPGA's M9K memory blocks. It is fast and has deterministic access time, but it is limited in size compared to external SDRAM.

When you add a **UART** peripheral, you specify the baud rate, data bits, parity, and stop bits. The UART connects to the NIOS II processor via the Avalon bus and to the external world via FPGA pins (RX and TX).

When you add a **timer** peripheral, you specify the number of timers and their resolution. The timer is used for delay functions, timeouts, and periodic interrupts in the embedded software.

When you add **GPIO** peripherals, you specify the number of input and output bits. GPIO is used for LEDs, switches, and simple digital I/O.

After connecting all components, Qsys generates a system with a unified memory map. Each peripheral is assigned a base address (e.g., UART at 0x00001000, timer at 0x00002000). The processor accesses peripherals by reading from or writing to these addresses. The NIOS II Software Build Tools (SBT) for Eclipse generate C header files with the base addresses and register offsets, so you do not need to hardcode addresses in your software.

The generated system is instantiated in your top-level Verilog or VHDL module:

```verilog
my_qsys_system u0 (
    .clk_clk       (CLK),
    .reset_reset_n (RST_N),
    .uart_0_rxd    (UART_RX),
    .uart_0_txd    (UART_TX),
    .pio_0_export  (LED)
);
```

This instantiation connects the Qsys system's ports to the top-level pins.

#### Key concepts
- Qsys / Platform Designer workflow
- Avalon Memory-Mapped Interface and bus protocol
- NIOS II processor configuration: core type, cache, debug module
- On-chip memory, UART, timer, and GPIO peripherals
- System interconnect fabric and address decoding
- Memory map and base address assignment
- HDL generation and system instantiation

#### Hands-on activity
Build a Qsys system with the following components: NIOS II/f processor, 64 KB on-chip memory, one UART (115200 baud), one timer, and one 8-bit GPIO output. Connect all components via the Avalon bus. Generate the system and instantiate it in a Quartus Prime project. Assign the UART pins to the DE10-Lite's USB-to-UART bridge pins and the GPIO output to the LEDs. Compile and program the FPGA. Write a simple "Hello, World" C program that prints to the UART and blinks the LEDs. Run the program and verify that the message appears in a terminal and the LEDs blink.

#### Assessment idea
Ask: "What is the role of the system interconnect fabric in a Qsys design?" Answer: It acts as an arbiter and router that connects the processor (master) to all peripherals (slaves) via the Avalon bus, handling address decoding, wait states, and data routing. Then ask: "Why is on-chip memory used for the NIOS II program instead of external SDRAM in a simple design?" Answer: On-chip memory is faster, has deterministic access time, and does not require a memory controller or pin assignments. It is sufficient for small programs and simple designs.

#### AI generation note
Create a 12-minute screen recording tutorial. Show the Qsys interface with the component library on the left and the system canvas on the right. Show dragging a NIOS II processor, on-chip memory, UART, and GPIO onto the canvas. Show the connections being made automatically. Show the address map table with base addresses. Show the HDL generation and the instantiation in the top-level module. Show the NIOS II SBT for Eclipse with the "Hello, World" program. Show the terminal receiving the message and the LEDs blinking. Include annotations at every step.

---

### Chapter 8.4 — Embedded Software for Soft-Core Processors

#### Learning objectives
- Write, compile, and debug C programs for the NIOS II processor using the NIOS II SBT for Eclipse.
- Understand the board support package (BSP) and its role in abstracting hardware access.
- Use the HAL (Hardware Abstraction Layer) API to access UART, GPIO, timer, and other peripherals.
- Download and run software on the FPGA via the JTAG debugger.

#### Detailed lesson content

Once the hardware system is built in Qsys, the next step is to write the embedded software that runs on the NIOS II processor. The software controls the hardware peripherals, implements algorithms, and handles communication. The NIOS II Software Build Tools (SBT) for Eclipse is the integrated development environment (IDE) used for writing, compiling, and debugging NIOS II software.

When you create a new software project in the NIOS II SBT, you must first create a **Board Support Package (BSP)**. The BSP is a set of libraries and configuration files that abstract the hardware details of your Qsys system. It includes:
- **HAL (Hardware Abstraction Layer):** A set of C functions for accessing peripherals (UART, GPIO, timer, etc.) without knowing their base addresses or register formats.
- **Newlib:** A standard C library ported for embedded systems (printf, malloc, string operations).
- **Device drivers:** Low-level code for each peripheral in the Qsys system.
- **Linker script:** Defines where the program code and data are stored (on-chip memory, external SDRAM, etc.).
- **System header files:** Define the base addresses and register offsets for all peripherals.

The BSP is generated automatically from the Qsys system file (.sopcinfo). When you change the hardware system (e.g., add a new peripheral), you must regenerate the BSP so that the software knows about the new hardware.

The HAL API provides high-level functions for common tasks:

```c
#include <stdio.h>
#include <unistd.h>
#include "system.h"
#include "altera_avalon_uart.h"
#include "altera_avalon_pio.h"
#include "alt_types.h"

// Accessing UART using HAL
printf("Hello, FPGA World!\n");  // Automatically uses the JTAG UART or STDOUT UART

// Accessing GPIO using HAL
alt_u32 led_value = 0xFF;
IOWR_ALTERA_AVALON_PIO_DATA(PIO_LED_BASE, led_value);  // Turn all LEDs on

// Accessing timer using HAL
alt_u32 timer_value = IORD_ALTERA_AVALON_TIMER_STATUS(TIMER_BASE);
```

The `IOWR` macro writes to a peripheral register, and `IORD` reads from it. The `_BASE` macros (e.g., `PIO_LED_BASE`) are defined in the `system.h` header file generated by the BSP. They contain the base addresses assigned in Qsys. Using the HAL API instead of raw addresses makes the code portable across different Qsys systems.

A simple "Blink LED" program for the NIOS II:

```c
#include <unistd.h>
#include "system.h"
#include "altera_avalon_pio_regs.h"

int main(void) {
    alt_u32 led_pattern = 0x01;

    while (1) {
        IOWR_ALTERA_AVALON_PIO_DATA(PIO_LED_BASE, led_pattern);
        usleep(500000);  // Sleep for 500 milliseconds

        // Shift the LED pattern
        led_pattern = led_pattern << 1;
        if (led_pattern == 0)
            led_pattern = 0x01;
    }
    return 0;
}
```

This program blinks the LEDs in a chasing pattern. The `usleep` function uses the system timer to create a delay. The HAL provides the `usleep` implementation automatically.

**Debugging** is done via the JTAG interface. The NIOS II processor has a JTAG debug module that allows you to:
- Set breakpoints in the C code.
- Step through code line by line.
- Inspect variables and memory.
- View the processor registers.
- Reset the processor.

To debug, you connect the USB-Blaster cable to the DE10-Lite board, start the debugger in Eclipse, and run the program. The debugger downloads the program to the FPGA's memory and starts execution. You can then pause the program, inspect variables, and step through the code.

**Memory Management:**
The NIOS II processor uses a flat memory model. The program code is stored in on-chip memory or external flash. The data (variables, stack, heap) is stored in on-chip memory or external SDRAM. The BSP linker script defines the memory regions. For small programs, on-chip memory is sufficient. For larger programs, you may need to add external SDRAM to the Qsys system and configure the linker script to use it.

#### Key concepts
- NIOS II SBT for Eclipse and BSP generation
- HAL (Hardware Abstraction Layer) API
- IOWR and IORD macros for register access
- `system.h` header file with base addresses
- JTAG debugging: breakpoints, stepping, variable inspection
- Linker script and memory regions
- `printf` via JTAG UART or STDOUT UART

#### Hands-on activity
Extend the Qsys system from the previous chapter by adding a pushbutton GPIO input. Write a C program that reads the pushbutton state and toggles the LED pattern when the button is pressed. Add a UART output that prints "Button pressed!" each time the button is pressed. Use the JTAG debugger to set a breakpoint inside the button press handler and inspect the GPIO register value. Run the program on the FPGA and verify the behavior.

#### Assessment idea
Ask: "What is the purpose of the Board Support Package (BSP) in a NIOS II software project?" Answer: The BSP abstracts the hardware details of the Qsys system, providing HAL functions, device drivers, linker scripts, and header files so that the application software can access peripherals without knowing their base addresses or register formats. Then ask: "Why should you use `IOWR_ALTERA_AVALON_PIO_DATA` instead of writing directly to a memory address?" Answer: The HAL macro is portable, readable, and type-safe. It works across different Qsys systems because the base address is defined in `system.h`, not hardcoded in the application.

#### AI generation note
Create a 12-minute lesson with a split-screen view. On the left, show the Eclipse IDE with C code being written. On the right, show the Qsys system diagram with the corresponding peripherals highlighted. Show the `system.h` file with base addresses. Show the JTAG debugger pausing at a breakpoint and displaying variable values. Show the terminal receiving the UART message. Include a live FPGA demo with LEDs and a pushbutton.

---

## Module 9: FPGA Applications and Capstone Project

> **Goal:** Explore practical FPGA applications and complete a comprehensive capstone project that integrates hardware design, embedded software, and system verification.

---

### Chapter 9.1 — FPGA Interfacing: GPIO, UART, SPI, Memory, and Analog

#### Learning objectives
- Interface external devices to an FPGA using GPIO, UART, SPI, and I2C protocols.
- Implement memory interfaces using on-chip BRAM and external SDRAM.
- Use the Intel MAX 10 embedded ADC for analog signal acquisition.
- Write Verilog modules for protocol controllers and verify them with testbenches.

#### Detailed lesson content

FPGAs are powerful because they can interface with a wide variety of external devices. Unlike microcontrollers, which have fixed peripheral sets, FPGAs can implement any interface protocol in hardware, allowing you to connect to custom sensors, legacy devices, and high-speed peripherals. This chapter covers the most common interfaces used in FPGA-based embedded systems.

**GPIO (General Purpose Input/Output):** GPIO is the simplest interface. FPGA pins can be configured as inputs or outputs, and you can read or write them directly from your HDL code. The DE10-Lite board has 8 LEDs and 2 pushbuttons connected to GPIO pins. A GPIO controller in Verilog is just a register connected to the I/O pins:

```verilog
module gpio_controller (
    input  wire        clk,
    input  wire        wr_en,
    input  wire [7:0]  wr_data,
    output reg  [7:0]  gpio_out,
    input  wire [1:0]  gpio_in,
    output reg  [1:0]  gpio_in_reg
);
    always @(posedge clk) begin
        if (wr_en)
            gpio_out <= wr_data;
        gpio_in_reg <= gpio_in;
    end
endmodule
```

**UART (Universal Asynchronous Receiver/Transmitter):** UART is a serial communication protocol used for debugging, GPS modules, Bluetooth modules, and PC communication. A UART controller in Verilog consists of a baud rate generator, a transmitter shift register, and a receiver shift register. The transmitter serializes parallel data by shifting it out one bit at a time. The receiver deserializes incoming serial data by sampling the input at the baud rate. A typical UART frame is: start bit (0), 8 data bits, optional parity bit, and 1 or 2 stop bits (1).

```verilog
module uart_tx (
    input  wire        clk,
    input  wire        tx_start,
    input  wire [7:0]  tx_data,
    output reg         tx_busy,
    output reg         tx_serial
);
    // Baud rate counter and shift register logic
    // ... (implementation details)
endmodule
```

**SPI (Serial Peripheral Interface):** SPI is a synchronous serial protocol used for flash memory, SD cards, displays, and sensors. It has four signals: SCLK (clock), MOSI (master out, slave in), MISO (master in, slave out), and CS (chip select). An SPI master controller in Verilog generates the clock and shifts data in and out. SPI is faster than UART and supports full-duplex communication.

**I2C (Inter-Integrated Circuit):** I2C is a two-wire synchronous serial protocol (SDA for data, SCL for clock) used for sensors, EEPROMs, and real-time clocks. It is slower than SPI but uses fewer wires and supports multiple masters and slaves on the same bus. An I2C controller in Verilog must implement start/stop condition detection, bit-level arbitration, and acknowledge bit handling. I2C is more complex to implement in hardware than SPI because of the open-drain bus and arbitration.

**Memory Interfaces:**
- **On-chip BRAM:** FPGA Block RAM (BRAM) provides fast, dedicated memory. A dual-port BRAM can be read and written simultaneously from two different clock domains. In Verilog, BRAM is inferred by describing a memory array with clocked read and write operations:

```verilog
reg [7:0] memory [0:1023];  // 1K x 8 RAM

always @(posedge clk) begin
    if (we)
        memory[addr] <= wr_data;
    rd_data <= memory[addr];
end
```

- **External SDRAM:** The DE10-Lite board has 64 MB of external SDRAM. Accessing SDRAM requires a memory controller that handles refresh cycles, row/column addressing, and burst transfers. Fortunately, the Quartus Prime IP Catalog provides a ready-to-use SDRAM controller that connects to the NIOS II processor via the Avalon bus.

**Analog Interfaces:**
The Intel MAX 10 FPGA has a built-in **12-bit Analog-to-Digital Converter (ADC)** with up to 18 channels. This is a unique feature of the MAX 10 that makes it ideal for sensor-based applications. The ADC can be accessed through the Quartus Prime IP Catalog or directly from the NIOS II processor using the ADC IP core. The ADC supports single-ended and differential inputs, programmable sample rates, and internal temperature sensing.

To use the ADC:
1. Add the ADC IP core to your Qsys system.
2. Configure the sample rate and input channels.
3. Connect the ADC to the NIOS II processor via the Avalon bus.
4. In software, read the ADC value using the HAL API:

```c
alt_u32 adc_value = IORD(ADC_BASE, 0);  // Read channel 0
float voltage = (adc_value / 4095.0) * 3.3;  // Convert to voltage
```

This allows the FPGA to acquire analog signals from sensors, potentiometers, or microphones without any external ADC chip.

#### Key concepts
- GPIO controller in Verilog
- UART protocol and controller implementation
- SPI protocol and master controller implementation
- I2C protocol challenges and controller implementation
- BRAM inference in Verilog
- External SDRAM controller via IP
- Intel MAX 10 embedded ADC
- Analog signal acquisition in FPGA systems

#### Hands-on activity
Design and implement a UART controller in Verilog that transmits and receives 8-bit data at 115200 baud with a 50 MHz system clock. Write a testbench that verifies the timing of the start bit, data bits, and stop bit. Synthesize the design in Quartus Prime and program the DE10-Lite board. Connect the FPGA's UART to a USB-to-UART bridge and communicate with a PC terminal. Send a character from the PC and verify that the FPGA echoes it back. Use an oscilloscope or logic analyzer to observe the UART waveform.

#### Assessment idea
Ask: "Why is SPI generally faster than I2C?" Answer: SPI has a dedicated clock line and separate data lines for input and output, allowing full-duplex communication at higher clock rates. I2C uses open-drain pull-ups and requires bus arbitration, which limits its speed. Then ask: "The MAX 10 FPGA has a built-in 12-bit ADC. What is the voltage resolution if the ADC reference is 3.3V?" Answer: 3.3V / 4096 = 0.805 mV per LSB (Least Significant Bit).

#### AI generation note
Create a 12-minute lesson with multiple demos. Show a UART waveform on an oscilloscope with labeled start bit, data bits, and stop bit. Show an SPI transaction with a logic analyzer capturing SCLK, MOSI, MISO, and CS. Show the MAX 10 ADC block diagram with the analog input multiplexer. Show a Verilog BRAM inference with the RTL Viewer showing an M9K block. Include a real FPGA demo with the UART echo program running on the DE10-Lite.

---

### Chapter 9.2 — FPGA-Based Signal Processing and Motor Control

#### Learning objectives
- Implement a Finite Impulse Response (FIR) filter in Verilog using DSP blocks.
- Understand the basics of FPGA-based motor control: PWM generation, encoder reading, and PID control.
- Explain why FPGAs are preferred over processors for high-speed real-time control.
- Design a simple PWM generator and verify it with a testbench.

#### Detailed lesson content

FPGAs excel at real-time signal processing and control because they can implement algorithms in parallel hardware with deterministic timing. Two classic FPGA application domains are digital signal processing (DSP) and motor control.

**Digital Signal Processing (DSP):**
A **Finite Impulse Response (FIR) filter** is one of the most common DSP operations. It computes the weighted sum of the current input and the previous N-1 inputs:

```
y[n] = b[0]*x[n] + b[1]*x[n-1] + b[2]*x[n-2] + ... + b[N-1]*x[n-(N-1)]
```

On a processor, this is implemented as a loop with N multiply-accumulate operations. On an FPGA, each multiplication and addition can be performed in parallel. A pipelined FIR filter can produce one output sample every clock cycle after the initial latency. For a 100-tap FIR filter at 100 MHz, the FPGA can produce 100 million output samples per second, while a processor might take hundreds of clock cycles per sample.

In Verilog, a simple FIR filter is implemented as a shift register (for the delay line) and a tree of multipliers and adders:

```verilog
module fir_filter (
    input  wire        clk,
    input  wire signed [15:0] x,
    output reg  signed [31:0] y
);
    parameter N = 16;
    reg signed [15:0] delay_line [0:N-1];
    wire signed [31:0] products [0:N-1];

    // Coefficients (example: low-pass filter)
    wire signed [15:0] coeff [0:N-1];
    assign coeff[0] = 16'd100;  // etc.

    // Shift register
    always @(posedge clk) begin
        delay_line[0] <= x;
        for (integer i = 1; i < N; i = i + 1)
            delay_line[i] <= delay_line[i-1];
    end

    // Multipliers (in parallel)
    genvar i;
    generate
        for (i = 0; i < N; i = i + 1) begin : mult_gen
            assign products[i] = delay_line[i] * coeff[i];
        end
    endgenerate

    // Adder tree (simplified)
    always @(posedge clk) begin
        y <= products[0] + products[1] + ... + products[N-1];
    end
endmodule
```

In practice, modern FPGAs have dedicated **DSP blocks** that contain hardwired multipliers and accumulators. The synthesis tool automatically maps the multiplications to DSP blocks, saving LUTs and improving speed. For large filters, the DSP blocks can be chained together to form a **MAC (Multiply-Accumulate)** pipeline.

**Motor Control:**
FPGAs are widely used in motor control because they can generate high-resolution PWM signals and read encoder feedback with precise timing. A **Pulse Width Modulation (PWM)** generator in Verilog compares a counter to a duty cycle register:

```verilog
module pwm_generator (
    input  wire        clk,
    input  wire [15:0] duty_cycle,  // 0 to 65535
    output reg         pwm_out
);
    reg [15:0] counter;

    always @(posedge clk) begin
        counter <= counter + 1'b1;
        pwm_out <= (counter < duty_cycle);
    end
endmodule
```

This produces a PWM signal with a resolution of 16 bits (65,536 levels) and a frequency of `clk / 65536`. For a 50 MHz clock, the PWM frequency is about 762 Hz. For higher frequencies, you can use a smaller counter or a faster clock.

A **quadrature encoder reader** counts the pulses from a rotary encoder. The encoder has two signals (A and B) that are 90 degrees out of phase. By detecting the edges and the phase relationship, the FPGA can determine the direction and count of rotation. A simple encoder reader in Verilog:

```verilog
module quadrature_decoder (
    input  wire        clk,
    input  wire        a,
    input  wire        b,
    output reg  signed [31:0] position
);
    reg a_prev, b_prev;
    wire a_rising = a && !a_prev;
    wire b_rising = b && !b_prev;

    always @(posedge clk) begin
        a_prev <= a;
        b_prev <= b;

        if (a_rising) begin
            if (b)
                position <= position + 1;  // Forward
            else
                position <= position - 1;  // Reverse
        end
    end
endmodule
```

A **PID controller** can be implemented in the FPGA as a combinational or sequential circuit. The FPGA can compute the PID output every clock cycle, providing much faster response than a software PID running on a microcontroller. The PID algorithm is:

```
error = setpoint - measured_value
integral = integral + error * dt
derivative = (error - previous_error) / dt
output = Kp * error + Ki * integral + Kd * derivative
```

In Verilog, the multiplication by Kp, Ki, and Kd can be implemented as constant multiplications (shifts and adds) or using DSP blocks. The FPGA can run the PID loop at MHz rates, while a microcontroller might run it at kHz rates. This is critical for high-performance motor control where fast response prevents oscillation and overshoot.

#### Key concepts
- FIR filter implementation in Verilog
- DSP blocks and multiply-accumulate (MAC) operations
- Parallelism in FPGA signal processing
- PWM generation with counters and comparators
- Quadrature encoder decoding
- PID controller implementation in hardware
- FPGA advantages for real-time control: speed, determinism, parallelism

#### Hands-on activity
Design a PWM generator in Verilog with a 16-bit resolution and a 50 MHz clock. Simulate it in ModelSim and verify the duty cycle and frequency. Connect the PWM output to an LED on the DE10-Lite board and vary the duty cycle to change the LED brightness. Use a potentiometer connected to the MAX 10 ADC to control the duty cycle: read the ADC value in the NIOS II processor and write it to the PWM duty cycle register. Observe the LED brightness changing smoothly as you turn the potentiometer.

#### Assessment idea
Ask: "Why is an FPGA better than a microcontroller for implementing a 100-tap FIR filter at 100 MHz?" Answer: The FPGA can perform all 100 multiplications and additions in parallel, producing one output per clock cycle. A microcontroller would need to execute 100 multiply-accumulate instructions sequentially, taking at least 100 clock cycles per sample. Then ask: "A motor control system needs a PID loop running at 1 MHz. Can a typical microcontroller handle this? Can an FPGA?" Answer: A typical microcontroller (e.g., ARM Cortex-M4 at 100 MHz) might struggle to run a PID at 1 MHz because it needs to execute the algorithm in software. An FPGA can implement the PID in hardware and run it at the clock frequency (e.g., 50 MHz), easily meeting the 1 MHz requirement.

#### AI generation note
Create a 12-minute lesson with multiple animations. Show an FIR filter as a shift register with parallel multipliers and an adder tree. Show the DSP blocks in the FPGA being used for the multiplications. Show a PWM waveform with varying duty cycles and the corresponding LED brightness. Show a quadrature encoder signal with A and B waveforms and the decoded position counter. Show a PID block diagram with Kp, Ki, and Kd gains. Include a real FPGA demo with the PWM-controlled LED and potentiometer.

---

### Chapter 9.3 — Capstone Project: Building a Complete FPGA Embedded System

#### Learning objectives
- Design a complete FPGA-based embedded system from specification to implementation.
- Integrate custom hardware (Verilog), soft-core processor (NIOS II), and embedded software (C) into a single system.
- Follow the complete FPGA design flow: Qsys system design, Quartus Prime compilation, ModelSim verification, and hardware programming.
- Test, debug, and document the final system.

#### Detailed lesson content

The capstone project is the culmination of everything you have learned in this course. You will design, build, and verify a complete FPGA-based embedded system that demonstrates hardware-software co-design, IP integration, and real-world interfacing. The recommended project is a **Digital Oscilloscope and Signal Analyzer** that combines analog input, digital signal processing, and a user interface.

**Project Specification:**

Design a system that:
1. Acquires an analog signal using the MAX 10 embedded ADC (12-bit, up to 1 MSPS).
2. Stores the samples in a circular buffer implemented in on-chip BRAM.
3. Applies a digital signal processing algorithm to the samples (e.g., a 16-tap FIR low-pass filter or an FFT).
4. Displays the processed signal on a PC terminal via UART (as numerical values or a simple ASCII waveform).
5. Provides a user interface via the DE10-Lite pushbuttons: Button 1 starts/stops acquisition, Button 2 changes the filter cutoff frequency or display mode.
6. Uses the NIOS II processor to manage the user interface, configure the ADC, and handle UART communication.
7. Uses custom Verilog hardware for the ADC interface, circular buffer, and FIR filter (to demonstrate hardware-software partitioning).
8. Implements a simple trigger mechanism: when the ADC value crosses a threshold, the system captures 256 samples and sends them to the PC.

**System Architecture:**

The system consists of two parts: the hardware system (built in Qsys and Verilog) and the software system (written in C for the NIOS II).

**Hardware System (Qsys):**
- NIOS II/f processor with JTAG debug module.
- 64 KB on-chip memory for program and data.
- 8 KB on-chip memory for the ADC sample buffer (dual-port BRAM).
- MAX 10 ADC IP core (connected to the analog input channel).
- UART IP core (115200 baud, connected to the USB-UART bridge).
- Timer IP core (for periodic interrupts).
- 2-bit GPIO input (for the pushbuttons).
- 8-bit GPIO output (for status LEDs).
- Custom Verilog peripheral: FIR filter engine (connected via Avalon bus).

**Custom Verilog Modules:**
- `adc_interface`: Reads the ADC IP core, generates a data valid signal, and passes samples to the buffer.
- `circular_buffer`: Stores 256 samples in BRAM. Supports write (from ADC) and read (from NIOS II or FIR filter).
- `fir_filter`: Implements a 16-tap FIR filter with fixed coefficients. Receives samples from the buffer and produces filtered output.

**Software System (C for NIOS II):**
- Initialize the UART, ADC, timer, and GPIO.
- Main loop: wait for button press, start ADC acquisition, collect 256 samples, trigger the FIR filter, read the filtered output, and send it to the PC via UART.
- Interrupt service routine (ISR) for the timer: blink a status LED to indicate the system is running.
- UART command handler: receive commands from the PC to change the filter mode or trigger threshold.

**Design Process:**
1. **Specification:** Write the project specification, including block diagrams, interface definitions, and performance requirements.
2. **Hardware Design:** Build the Qsys system. Add all IP cores and custom peripherals. Assign base addresses. Generate the system.
3. **RTL Design:** Write the Verilog modules for the ADC interface, circular buffer, and FIR filter. Verify each module with a ModelSim testbench.
4. **Integration:** Instantiate the Qsys system and custom modules in the top-level Verilog module. Assign FPGA pins for the ADC input, buttons, LEDs, and UART.
5. **Synthesis and Place-and-Route:** Compile the design in Quartus Prime. Check the resource usage and timing reports. Ensure the design meets the 50 MHz clock constraint.
6. **Software Development:** Generate the BSP in the NIOS II SBT. Write the C application. Test the software on the NIOS II instruction set simulator first.
7. **Hardware-Software Integration:** Program the FPGA. Download the software via JTAG. Verify that the system acquires samples, applies the filter, and sends data to the PC.
8. **Testing and Debugging:** Use the JTAG debugger to step through the C code. Use the logic analyzer to observe the ADC interface signals. Use the terminal to verify the output data.
9. **Documentation:** Write a project report with block diagrams, code listings, test results, and a discussion of challenges and solutions.

**Alternative Capstone Projects:**
- **Audio Spectrum Analyzer:** Use the ADC to sample audio from a microphone, compute an FFT in hardware or software, and display the frequency spectrum on the PC terminal.
- **Digital Lock-In Amplifier:** Implement a lock-in amplifier for precision sensor measurement using the ADC, a reference oscillator, and a multiplier-integrator in Verilog.
- **Motor Speed Controller:** Use the PWM generator to control a DC motor, the quadrature decoder to read the speed, and a PID controller to maintain a set speed set via the UART.
- **VGA Pattern Generator:** Generate VGA video signals from the FPGA to display test patterns, images, or simple graphics on a monitor.

#### Key concepts
- System specification and architecture design
- Qsys system integration with custom peripherals
- Hardware-software partitioning
- Complete FPGA design flow applied to a real project
- Testing and debugging techniques
- Project documentation and presentation

#### Hands-on activity
Complete the capstone project over the course of two weeks. Follow the design process step by step. Start with the specification and Qsys system, then implement the custom Verilog modules, then write the software, then integrate and test. Use the JTAG debugger and logic analyzer extensively. When finished, record a short video demonstrating the system acquiring a signal, filtering it, and displaying the results on the PC terminal. Submit the project report with all design files.

#### Assessment idea
The capstone project is graded using a rubric that includes: (1) **Hardware Design** — does the Qsys system include all required components? (2) **RTL Quality** — is the Verilog code well-structured, commented, and synthesizable? (3) **Software Quality** — is the C code well-organized and does it correctly interface with hardware? (4) **Functionality** — does the system meet all specification requirements? (5) **Testing** — are there testbenches and verification results? (6) **Documentation** — is the report clear, complete, and professional? (7) **Innovation** — does the project include any creative extensions beyond the specification?

#### AI generation note
Create a 15-minute capstone project walkthrough video. Show the project specification document with block diagrams. Show the Qsys system being built component by component. Show the Verilog code for the FIR filter and the circular buffer. Show the ModelSim waveform with ADC samples and filtered output. Show the NIOS II software in Eclipse with the main loop. Show the PC terminal receiving the data. Show the DE10-Lite board with the potentiometer being turned and the LED blinking. End with a checklist of deliverables and the grading rubric.

---

## Final Examination and Answer Key

### Section A: Multiple Choice (10 questions, 2 points each)

1. What is the fundamental difference between an FPGA and a microprocessor?
   - A) An FPGA has more memory.
   - B) An FPGA executes instructions in parallel hardware rather than sequentially. ✓
   - C) An FPGA is always faster than a microprocessor.
   - D) An FPGA cannot be reprogrammed.

2. What does a 4-input LUT implement?
   - A) Only AND and OR functions.
   - B) Any combinational logic function of up to 4 variables. ✓
   - C) Only sequential logic functions.
   - D) Only arithmetic operations.

3. Which FPGA configuration technology is non-volatile and provides instant-on behavior?
   - A) SRAM-based
   - B) FLASH-based ✓
   - C) Anti-fuse
   - D) DRAM-based

4. In Verilog, what is the purpose of the `always @(posedge clk)` block?
   - A) To describe combinational logic.
   - B) To describe sequential logic that updates on the clock edge. ✓
   - C) To generate a clock signal.
   - D) To define a testbench.

5. What is the difference between a `wire` and a `reg` in Verilog?
   - A) `wire` is for sequential logic; `reg` is for combinational logic.
   - B) `wire` represents a physical connection; `reg` holds a value in procedural blocks. ✓
   - C) `wire` can only be 1 bit; `reg` can be multi-bit.
   - D) There is no difference; they are interchangeable.

6. What is the role of a testbench in FPGA design?
   - A) To program the FPGA.
   - B) To verify the design's behavior before hardware implementation. ✓
   - C) To generate the bitstream.
   - D) To replace the need for synthesis.

7. What is a setup time violation?
   - A) The data arrives too early at the flip-flop.
   - B) The data does not arrive before the clock edge by the required setup time. ✓
   - C) The clock frequency is too low.
   - D) The flip-flop is metastable.

8. What is the purpose of a two-flip-flop synchronizer?
   - A) To increase the clock frequency.
   - B) To reduce metastability when crossing clock domains. ✓
   - C) To implement a FIFO.
   - D) To generate a reset signal.

9. What is a soft-core processor?
   - A) A processor implemented in dedicated silicon on the FPGA die.
   - B) A processor described in HDL and synthesized into FPGA logic. ✓
   - C) A processor that only runs software.
   - D) A processor that cannot be debugged.

10. What is the primary advantage of using an IP core instead of designing custom logic?
    - A) IP cores are always free.
    - B) IP cores reduce development time and risk. ✓
    - C) IP cores always use fewer resources.
    - D) IP cores are faster than custom logic.

### Section B: Short Answer (5 questions, 4 points each)

1. **Explain why pipelining increases the maximum clock frequency of a design.**
   Answer: Pipelining breaks long combinational paths into shorter segments by inserting registers between stages. Each stage has less logic to compute, so its propagation delay is smaller. The clock period is determined by the longest stage, not the total path, so the maximum clock frequency increases. The trade-off is increased latency, because the result takes more clock cycles to appear.

2. **Describe the difference between a Moore machine and a Mealy machine, and explain which is preferred in FPGA design.**
   Answer: In a Moore machine, the outputs depend only on the current state. In a Mealy machine, the outputs depend on both the current state and the current inputs. Moore machines are preferred in FPGA design because the outputs change only on the clock edge, making them easier to synchronize and less prone to glitches caused by input changes.

3. **What is the purpose of the SDC file in an FPGA design, and what does `create_clock` do?**
   Answer: The SDC (Synopsys Design Constraints) file defines the timing requirements of the design. The `create_clock` command specifies the clock frequency, period, and duty cycle, which the timing analyzer uses to verify that all paths meet setup and hold times. Without SDC constraints, the timing analyzer cannot determine if the design is fast enough.

4. **Why is a Gray code counter preferred over a binary counter when crossing clock domains?**
   Answer: In a Gray code counter, only one bit changes at each increment. When the counter value is synchronized across clock domains using a two-flip-flop synchronizer, the receiver will capture either the old value or the new value, but never an invalid combination. In a binary counter, multiple bits may change simultaneously, and the synchronizer might capture an inconsistent value.

5. **Explain the trade-offs between a soft-core processor (like NIOS II) and a hard-core processor (like ARM Cortex-A9) in an FPGA.**
   Answer: A soft-core processor is synthesized into FPGA logic, offering high flexibility and customization but lower performance and higher power consumption. A hard-core processor is dedicated silicon on the FPGA die, offering higher performance, lower power, and a standard software ecosystem but no customization. Soft-cores are ideal for simple control and prototyping; hard-cores are needed for high-performance applications like Linux and complex algorithms.

### Section C: Code Analysis (3 questions, 5 points each)

1. **Analyze the following Verilog code. What does it implement, and what is the potential bug?**
   ```verilog
   module mystery (
       input  wire [3:0] a, b,
       input  wire       sel,
       output reg  [3:0] y
   );
       always @(*) begin
           if (sel)
               y = a;
       end
   endmodule
   ```
   Answer: The module is a 2-to-1 multiplexer that selects between `a` and `b`. However, when `sel` is 0, `y` is not assigned, which causes the synthesis tool to infer a latch. The fix is to add `else y = b;` or initialize `y` at the beginning of the always block: `y = b;` before the if statement.

2. **The following Verilog code describes a counter. Identify and explain the bug.**
   ```verilog
   module counter (
       input  wire        clk,
       input  wire        rst,
       output reg  [7:0]  count
   );
       always @(posedge clk) begin
           if (rst)
               count = 8'b0;
           else
               count = count + 1;
       end
   endmodule
   ```
   Answer: The bug is the use of **blocking assignments (`=`) instead of non-blocking assignments (`<=`) in a sequential always block**. Blocking assignments can cause simulation mismatches and incorrect synthesis behavior because they update the variable immediately, not at the clock edge. The correct code should use `<=`: `count <= 8'b0;` and `count <= count + 1;`.

3. **The following is a VHDL FSM with a missing transition. Identify the missing transition and write the corrected code for the IDLE state.**
   ```vhdl
   type state_type is (IDLE, RUNNING, PAUSED);
   signal state, next_state : state_type;

   process (state, start, stop, pause)
   begin
       case state is
           when IDLE =>
               if start = '1' then
                   next_state <= RUNNING;
               end if;
           when RUNNING =>
               if pause = '1' then
                   next_state <= PAUSED;
               end if;
           when PAUSED =>
               if start = '1' then
                   next_state <= RUNNING;
               end if;
           when others =>
               next_state <= IDLE;
       end case;
   end process;
   ```
   Answer: The missing transition is from `RUNNING` to `IDLE` when `stop` is asserted, and from `PAUSED` to `IDLE` when `stop` is asserted. The corrected `RUNNING` state should be:
   ```vhdl
   when RUNNING =>
       if stop = '1' then
           next_state <= IDLE;
       elsif pause = '1' then
           next_state <= PAUSED;
       else
           next_state <= RUNNING;
       end if;
   ```
   The corrected `PAUSED` state should be:
   ```vhdl
   when PAUSED =>
       if stop = '1' then
           next_state <= IDLE;
       elsif start = '1' then
           next_state <= RUNNING;
       else
           next_state <= PAUSED;
       end if;
   ```

### Section D: Practical Problem (10 points)

**Design a system that implements a simple temperature monitoring system using the DE10-Lite board.**

Requirements:
- The system uses the MAX 10 ADC to read a temperature sensor (simulated by a potentiometer or a voltage divider).
- The ADC value is read by the NIOS II processor and converted to a temperature value (assuming a linear sensor with 10 mV/°C and a 3.3V reference).
- The temperature is displayed on the PC terminal via UART every 1 second.
- If the temperature exceeds a threshold (e.g., 50°C), an LED blinks rapidly (2 Hz) and an alarm message is sent via UART.
- The threshold is set using one of the pushbuttons: pressing the button increments the threshold by 5°C (wrapping from 50°C to 20°C).
- The system uses a Qsys system with NIOS II, UART, ADC, timer, and GPIO.

**Answer:**

Hardware (Qsys):
- NIOS II/e processor (simple control task).
- 32 KB on-chip memory.
- UART (115200 baud) for PC communication.
- MAX 10 ADC IP core (1 channel).
- Interval timer (1 ms resolution for delays).
- 1-bit GPIO input for the pushbutton.
- 8-bit GPIO output for LEDs.

Software (C):
```c
#include <stdio.h>
#include <unistd.h>
#include "system.h"
#include "altera_avalon_uart.h"
#include "altera_avalon_pio_regs.h"
#include "altera_avalon_timer_regs.h"

#define ADC_RESOLUTION 4095
#define VREF 3.3
#define MV_PER_C 10.0

int main(void) {
    alt_u32 adc_raw, threshold_raw;
    float temperature;
    alt_u32 threshold = 50;  // Threshold in degrees C
    alt_u32 button_prev = 1;
    alt_u32 alarm = 0;
    alt_u32 led_pattern = 0;
    alt_u32 timer_count = 0;

    printf("Temperature Monitor Started\n");

    while (1) {
        // Read ADC
        adc_raw = IORD(ADC_BASE, 0);
        temperature = ((adc_raw / (float)ADC_RESOLUTION) * VREF) / (MV_PER_C / 1000.0);

        // Check button for threshold adjustment
        alt_u32 button = IORD_ALTERA_AVALON_PIO_DATA(PIO_BUTTON_BASE) & 0x01;
        if (button == 0 && button_prev == 1) {  // Active low, falling edge
            threshold += 5;
            if (threshold > 50)
                threshold = 20;
            printf("Threshold set to %lu C\n", threshold);
        }
        button_prev = button;

        // Check alarm
        if (temperature > threshold) {
            alarm = 1;
        } else {
            alarm = 0;
        }

        // Update LED
        if (alarm) {
            led_pattern = (timer_count & 0x80) ? 0xFF : 0x00;  // 2 Hz blink
        } else {
            led_pattern = 0x01;  // Steady on
        }
        IOWR_ALTERA_AVALON_PIO_DATA(PIO_LED_BASE, led_pattern);

        // Print temperature every 1 second
        timer_count++;
        if (timer_count >= 1000) {
            timer_count = 0;
            printf("Temperature: %.1f C (Threshold: %lu C)\n", temperature, threshold);
            if (alarm) {
                printf("ALARM: Temperature exceeds threshold!\n");
            }
        }

        usleep(1000);  // 1 ms loop
    }

    return 0;
}
```

The ADC base address and other base addresses are defined in `system.h` generated by the BSP. The program reads the ADC, converts the raw value to temperature using the sensor's scale factor, checks for the alarm condition, and prints the temperature every second. The button is polled to adjust the threshold, and the LED blinks when the alarm is active.

---

## Course Conclusion

Congratulations on completing FPGA Design for Embedded Systems. You have mastered one of the most powerful and versatile technologies in modern electronics. You can now look at a blank FPGA and see not a mysterious black box, but a canvas of programmable logic waiting to be shaped into a custom digital circuit. You understand the internal architecture of FPGAs — the LUTs, the CLBs, the routing networks, and the configuration technologies. You can describe digital circuits in both Verilog and VHDL, simulate them with ModelSim, synthesize them with Quartus Prime, and program them onto real hardware. You can build systems that integrate soft-core processors, IP cores, and custom peripherals using Qsys. You can analyze timing, optimize designs, and cross clock domains safely.

The skills you have gained are in high demand across industries. FPGA engineers work on 5G base stations, autonomous vehicles, medical imaging systems, satellite communications, high-frequency trading, and AI accelerators. The combination of hardware design expertise and embedded systems knowledge makes you uniquely qualified to bridge the gap between software and silicon.

To continue your learning, consider the following next steps:
- **Explore SystemVerilog:** The modern extension of Verilog with advanced verification features like assertions, coverage, and object-oriented testbenches.
- **Learn High-Level Synthesis (HLS):** Tools like Intel HLS and Xilinx Vitis HLS allow you to write FPGA designs in C/C++ instead of HDL, accelerating development for algorithm-heavy applications.
- **Study Advanced FPGA Architectures:** Investigate the latest families like Intel Agilex and AMD Versal, which integrate AI engines, high-speed transceivers, and advanced memory interfaces.
- **Build More Complex Projects:** Design a video processing pipeline, a software-defined radio, or a custom CPU architecture.
- **Contribute to OpenCores:** Share your designs with the community and learn from other engineers' projects.
- **Pursue FPGA Certifications:** Consider vendor certifications like the Intel FPGA Developer or Xilinx FPGA Designer to validate your skills.

Remember: FPGAs are the ultimate expression of digital creativity. Unlike software, which runs on someone else's hardware, an FPGA design is your hardware. You are not just programming a computer — you are designing one. Welcome to the world of hardware design.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
