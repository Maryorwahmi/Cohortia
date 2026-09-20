# Syllabus: Embedded Systems Essentials

> **Course ID:** `embedded-systems-essentials`  
> **Title:** Embedded Systems Essentials  
> **Provider:** Cohortia  
> **Original reference:** UT Austin / edX  
> **Platform:** Cohortia  
> **Level:** Beginner  
> **Type:** Course  
> **Duration:** 8–10 weeks (self-paced, ~5–7 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page (original reference: https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output)  
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** Embedded systems, ARM Cortex-M, C programming, GPIO, digital I/O, finite state machines, serial communication, debugging, Ohm's Law, digital logic, bit manipulation  
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references may be drawn from the University of Texas at Austin, edX, the ARM ecosystem, Texas Instruments, university open-courseware, or other educational sources. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

Embedded Systems Essentials is a hands-on introduction to the world of embedded computing, where software meets hardware to control the physical world. Unlike desktop software that runs on a general-purpose computer, an embedded system is a dedicated computer designed to perform a specific task inside a larger device. Your washing machine, car engine, digital thermostat, and fitness tracker all contain embedded systems that read sensors, make decisions, and control actuators in real time.

This course teaches you how to think like an embedded systems engineer. You will learn the fundamentals of the ARM Cortex-M processor architecture, write C programs that directly manipulate hardware registers, build circuits on a breadboard, and design systems that respond to real-world events using finite state machines. The course uses the Texas Instruments Tiva C LaunchPad (TM4C123G) with an ARM Cortex-M4F processor, a powerful and affordable development board that is widely used in university courses and industry prototyping. All labs can first be completed in simulation and then on the physical board.

By the end of this course, you will be able to:

1. Define what an embedded system is and distinguish it from general-purpose computers.
2. Explain the ARM Cortex-M architecture, including the register set, memory map, and instruction set basics.
3. Set up and use the TI Tiva C LaunchPad development board and its integrated development environment.
4. Apply Ohm's Law and digital logic concepts to analyze and build simple electronic circuits.
5. Write C programs for embedded systems, including functions, pointers, bit manipulation, and memory-mapped I/O.
6. Configure and use GPIO ports to read switches and control LEDs, including pull-up and pull-down resistors.
7. Use the UART serial port to send debug information and communicate with other devices.
8. Use arrays and data structures to collect sensor data and implement functional debugging techniques.
9. Design and implement finite state machines to model complex system behavior such as traffic lights and vending machines.
10. Build, test, and debug a complete embedded system capstone project that integrates multiple hardware and software components.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Introduction to Embedded Systems and the ARM Cortex-M | 1 | 5–7 |
| 2 | Electronics Foundations for Embedded Systems | 1 | 6–8 |
| 3 | C Programming for Embedded Systems | 1–2 | 8–10 |
| 4 | Microcontroller GPIO and Digital I/O | 1–2 | 8–10 |
| 5 | Arrays, Data Structures, and Functional Debugging | 1 | 6–8 |
| 6 | Finite State Machines and System Design | 1 | 7–9 |
| 7 | Serial Communication, Interrupts, and Capstone | 1 | 7–9 |

---

## Module 1: Introduction to Embedded Systems and the ARM Cortex-M

> **Goal:** Understand what embedded systems are, explore the ARM Cortex-M processor architecture, set up the development environment, and run your first program on the TI LaunchPad.

---

### Chapter 1.1 — What Are Embedded Systems?

#### Learning objectives
- Define an embedded system and give examples from everyday life.
- Compare embedded systems with general-purpose computers and microcontrollers.
- Explain the characteristics of embedded systems: dedicated function, real-time constraints, resource limitations, and reliability requirements.
- Identify the components of an embedded system: processor, memory, I/O, software, and power.

#### Detailed lesson content

An embedded system is a computer system with a dedicated function within a larger mechanical or electrical system. Unlike a laptop or smartphone, which is designed to run many different applications for a user, an embedded system is built to do one thing very well, often without any direct human interaction. It is "embedded" because it is hidden inside another product, doing its job quietly and continuously.

Consider a microwave oven. Inside is a small embedded system that reads the keypad, displays the time on a seven-segment display, runs a timer, and turns the magnetron on and off. The user does not think of it as a computer, but it is one. The same is true for the engine control unit in a car, the pacemaker in a patient's chest, the flight controller in a drone, and the thermostat on a wall. Each of these devices contains a processor, memory, and software that work together to sense, decide, and act.

Embedded systems share several defining characteristics. They have a **dedicated function** — they are designed for a specific task rather than general computing. They often operate under **real-time constraints**, meaning they must respond to events within a fixed time limit. A car's anti-lock braking system must react to wheel slip within milliseconds, or it is useless. They are usually **resource-constrained**, with limited memory, processing power, and energy. They must also be **reliable**, because a failure in an embedded medical device or automotive system can be dangerous or fatal.

The components of an embedded system include:
- **Processor:** A microcontroller or microprocessor that executes the program. In this course, we use the ARM Cortex-M4F processor.
- **Memory:** Volatile RAM for program data and non-volatile flash memory for storing the program. The TM4C123G has 32 KB of SRAM and 256 KB of flash.
- **Input/Output (I/O):** Hardware interfaces that connect the processor to sensors, actuators, displays, and communication modules. The most common type is GPIO (General Purpose Input/Output).
- **Software:** The firmware — a program written in C or C++ that runs directly on the processor without an operating system (in bare-metal programming) or with a lightweight real-time operating system.
- **Power:** Embedded systems often run on batteries and must be designed to minimize power consumption.

A general-purpose computer has a powerful processor, large amounts of RAM and storage, a keyboard, a mouse, and a display. It runs an operating system like Windows or Linux and can execute many different programs. An embedded system is the opposite: it has a small, efficient processor, limited memory, no keyboard or display, and runs one program continuously. The Raspberry Pi blurs this line because it is a general-purpose computer that can also do embedded tasks. The Arduino is closer to a pure embedded system because it is a microcontroller that runs one program at a time. The TI LaunchPad, which we use in this course, is an embedded system with a powerful ARM Cortex-M4F processor that can run complex control algorithms, digital signal processing, and real-time tasks.

Understanding the difference between these platforms helps you choose the right tool for a project. If you need a user interface, networking, and file storage, use a Raspberry Pi. If you need simple, real-time control of LEDs and sensors, use an Arduino. If you need high-performance processing, precise timing, and professional-grade debugging, use an ARM Cortex-M board like the LaunchPad.

#### Key concepts
- Embedded system definition and examples
- Dedicated function vs. general-purpose computing
- Real-time constraints and reliability
- Processor, memory, I/O, software, and power components
- Comparison: Arduino, Raspberry Pi, ARM Cortex-M LaunchPad

#### Hands-on activity
Research three embedded systems in your home or workplace. For each one, identify the inputs (sensors, buttons), the outputs (displays, motors, lights), and the processor type if you can find it online. Write a short paragraph describing what the embedded system does and why it is "embedded."

#### Assessment idea
Ask learners to match five device descriptions to the correct platform type (general-purpose computer, microcontroller, single-board computer, embedded system with OS, embedded system without OS).

#### AI generation note
Create a 7-minute animated explainer video. Open with a montage of embedded devices (car, microwave, fitness tracker, drone). Use a split-screen comparison between a desktop computer and a pacemaker to show the difference. Show the ARM Cortex-M4F processor die and the TI LaunchPad board. End with a reflection prompt: "Name one device you own that contains an embedded system you never noticed before."

---

### Chapter 1.2 — The ARM Cortex-M Architecture and the TI LaunchPad

#### Learning objectives
- Identify the key features of the ARM Cortex-M4F processor.
- Explain the Harvard and Von Neumann architectures and how they relate to the Cortex-M.
- Describe the register set, memory map, and bus architecture of the TM4C123G.
- Set up the development environment and run the first "Hello LED" program.

#### Detailed lesson content

The ARM Cortex-M4F is a 32-bit processor designed specifically for embedded applications. It is part of the ARM Cortex-M family, which is the most widely used processor architecture in embedded systems. Billions of Cortex-M processors ship every year in devices ranging from toys to medical equipment. The "M" stands for microcontroller, and the "4" indicates the fourth generation, which includes digital signal processing (DSP) instructions and a hardware floating-point unit (FPU). The "F" suffix means the processor has a single-precision floating-point unit.

The Cortex-M4F inside the TM4C123G runs at 80 MHz. It has a 32-bit data bus, a 32-bit address bus, and can address up to 4 GB of memory space. It uses a **Harvard architecture**, which means it has separate buses for instructions and data, allowing the processor to fetch the next instruction while reading or writing data at the same time. This makes the processor faster than a Von Neumann architecture, which shares a single bus for both instructions and data.

The processor has sixteen 32-bit general-purpose registers named R0 through R15. Register R15 is the Program Counter (PC), which holds the address of the next instruction to execute. Register R14 is the Link Register (LR), which stores the return address when a function is called. Register R13 is the Stack Pointer (SP), which points to the top of the stack in memory. Register R12 is a general-purpose scratch register. In addition to these, there are special registers such as the Program Status Register (PSR), which holds flags and the current processor state, and the Interrupt Control State Register (ICSR), which manages interrupts.

The memory map of the TM4C123G is organized into regions. The **Code region** at addresses 0x0000_0000 to 0x1FFF_FFFF contains the flash memory where the program is stored. The **SRAM region** at 0x2000_0000 to 0x3FFF_FFFF contains the RAM where variables are stored while the program runs. The **Peripheral region** at 0x4000_0000 to 0x5FFF_FFFF contains memory-mapped registers for controlling the GPIO, UART, timers, ADC, and other hardware. The **External RAM** and **External Device** regions are available for expansion. Memory-mapped I/O means that the hardware peripherals are controlled by reading from and writing to specific memory addresses. For example, writing to a specific address in the Peripheral region might turn an LED on or off.

The TM4C123G LaunchPad is a small, low-cost development board that includes the TM4C123GH6PM microcontroller, a USB connector for programming and power, two user buttons, an RGB LED, and breakout pins for all the GPIO ports. The board also includes an onboard debugger called the In-Circuit Debug Interface (ICDI), which allows you to download programs, set breakpoints, and step through code without any additional hardware. To program the board, you need an Integrated Development Environment (IDE) such as Code Composer Studio (CCS), Keil µVision, or IAR Embedded Workbench. The course also supports an online simulator that lets you test code before running it on the physical board.

The first program every embedded developer writes is the equivalent of "Hello, World" — blinking an LED. On the LaunchPad, the RGB LED is connected to GPIO Port F pins 1, 2, and 3 (red, blue, and green). The following code configures Port F and blinks the blue LED:

```c
#include <stdint.h>

// Register addresses for GPIO Port F (TM4C123G)
#define SYSCTL_RCGCGPIO_R   (*((volatile uint32_t *)0x400FE608))
#define GPIO_PORTF_DIR_R    (*((volatile uint32_t *)0x40025400))
#define GPIO_PORTF_DEN_R    (*((volatile uint32_t *)0x4002551C))
#define GPIO_PORTF_DATA_R   (*((volatile uint32_t *)0x400253FC))

void delay(void) {
    volatile uint32_t i;
    for (i = 0; i < 1000000; i++) {}
}

int main(void) {
    // Enable clock for GPIO Port F
    SYSCTL_RCGCGPIO_R |= 0x20;
    // Wait for clock to stabilize
    while ((SYSCTL_RCGCGPIO_R & 0x20) == 0) {}

    // Set PF2 as output
    GPIO_PORTF_DIR_R |= 0x04;
    // Enable digital function for PF2
    GPIO_PORTF_DEN_R |= 0x04;

    while (1) {
        GPIO_PORTF_DATA_R |= 0x04;   // Turn blue LED on
        delay();
        GPIO_PORTF_DATA_R &= ~0x04;  // Turn blue LED off
        delay();
    }
}
```

This code directly manipulates hardware registers. Each register is accessed as a pointer to a volatile unsigned 32-bit integer. The `volatile` keyword is essential because it tells the compiler that the value at this memory address can change outside the program's control (because the hardware can change it), so the compiler should not optimize away reads or writes to it.

#### Key concepts
- ARM Cortex-M4F processor features
- Harvard architecture vs. Von Neumann architecture
- Register set: R0-R15, PC, LR, SP, PSR
- Memory map: Code, SRAM, Peripheral, External regions
- Memory-mapped I/O
- TM4C123G LaunchPad hardware
- IDE setup: Code Composer Studio, Keil, or simulator
- `volatile` keyword and register access

#### Hands-on activity
Install the IDE (Code Composer Studio or Keil) or open the online simulator. Create a new project for the TM4C123G. Type the blink program above, compile it, and download it to the LaunchPad. Verify that the blue LED blinks. Then modify the delay to make it blink faster or slower.

#### Assessment idea
Ask: "What is the purpose of the `volatile` keyword when accessing hardware registers? What could happen if you omitted it?" Answer: `volatile` prevents the compiler from optimizing away reads/writes to hardware registers. Without it, the compiler might remove what it thinks are unnecessary writes, causing the program to fail.

#### AI generation note
Create a 10-minute board tour and setup tutorial. Use labeled images of the LaunchPad board. Show the IDE download, installation, and project creation steps. Demonstrate the first blink program with register-level explanations. Highlight the RGB LED and the onboard debugger. Include a troubleshooting tip for driver installation issues on Windows.

---

## Module 2: Electronics Foundations for Embedded Systems

> **Goal:** Learn the essential electronics concepts needed to build and understand embedded circuits, including voltage, current, resistance, Ohm's Law, and digital logic.

---

### Chapter 2.1 — Voltage, Current, Resistance, and Ohm's Law

#### Learning objectives
- Define voltage, current, and resistance and explain their relationship using Ohm's Law.
- Calculate voltage, current, or resistance when given two of the three quantities.
- Understand how resistors are used in embedded circuits for current limiting and voltage division.
- Build simple circuits on a breadboard and measure voltages with a multimeter.

#### Detailed lesson content

Embedded systems are not just software — they are software that controls physical hardware. To understand why a circuit works or why it fails, you need a basic understanding of electricity. The three fundamental quantities are voltage, current, and resistance.

**Voltage** (V) is the electrical potential difference between two points. It is the "pressure" that pushes electric charge through a circuit. Voltage is measured in volts. A typical AA battery provides 1.5 volts. The LaunchPad's GPIO pins output 3.3 volts when they are HIGH. The USB port provides 5 volts to power the board.

**Current** (I) is the flow of electric charge through a conductor. It is measured in amperes, or amps. A small LED might draw 10 milliamps (0.01 amps). A motor might draw hundreds of milliamps or several amps. The TM4C123G GPIO pins can source or sink a maximum of about 8 milliamps per pin, and the total current across all pins must be limited to avoid overheating the chip.

**Resistance** (R) is the opposition to the flow of current. It is measured in ohms (Ω). A resistor is a component designed to provide a specific amount of resistance. Resistors are essential in embedded circuits because they limit current, divide voltage, and pull signals up or down.

**Ohm's Law** relates these three quantities in a simple equation: V = I × R. If you know any two of the three, you can calculate the third. For example, if you connect a 220 Ω resistor to a 3.3V GPIO pin, the current through the resistor is I = V / R = 3.3 / 220 ≈ 0.015 amps, or 15 milliamps. This is within the safe limit for the GPIO pin and enough to light an LED brightly.

A common mistake is to connect an LED directly to a GPIO pin without a resistor. An LED has very low resistance when it is on, so it would try to draw too much current, burning out the LED and possibly damaging the microcontroller. A **current-limiting resistor** is always required in series with an LED. The value of the resistor depends on the LED's forward voltage and the desired current. A red LED typically has a forward voltage of about 2 volts. If you power it from 3.3V and want 10 milliamps, the resistor value should be R = (3.3 - 2.0) / 0.010 = 130 Ω. A standard 150 Ω or 220 Ω resistor works well.

A **voltage divider** is a circuit with two resistors in series. It produces an output voltage that is a fraction of the input voltage. The formula is Vout = Vin × (R2 / (R1 + R2)). Voltage dividers are useful for interfacing 5V sensors with a 3.3V microcontroller. For example, if a sensor outputs 5V and your microcontroller can only accept 3.3V, you can use a voltage divider with R1 = 10 kΩ and R2 = 20 kΩ to scale the signal down to 3.3V.

A **breadboard** is a reusable prototyping platform. It has rows of holes connected internally by metal clips. The long horizontal strips on the edges are power rails, and the short vertical rows in the middle are connected in groups of five. When building circuits, always connect the ground (GND) of the LaunchPad to the negative power rail, and connect the 3.3V or 5V power to the positive rail. Use red wires for power and black or blue wires for ground to avoid confusion.

#### Key concepts
- Voltage, current, resistance, and Ohm's Law
- Current-limiting resistors for LEDs
- Voltage dividers for level shifting
- Breadboard layout and wiring conventions
- Safe current limits for GPIO pins

#### Hands-on activity
Build a circuit on a breadboard: connect a 220 Ω resistor in series with an LED from the LaunchPad's 3.3V power pin to GND. Verify that the LED lights. Then connect the LED to a GPIO pin (PF1 for red) and write a program to blink it. Use a multimeter to measure the voltage across the resistor and the LED when they are on.

#### Assessment idea
Calculate the current through a 330 Ω resistor connected to a 3.3V pin. Answer: I = 3.3 / 330 = 0.01 A = 10 mA. Then ask: "A GPIO pin can safely source 8 mA. What is the minimum resistor value you should use when connecting an LED with a 2V forward voltage to a 3.3V pin?" Answer: R = (3.3 - 2.0) / 0.008 = 162.5 Ω, so use at least 180 Ω or 220 Ω.

#### AI generation note
Create an 8-minute lesson with animated water-pipe analogies for voltage (pressure), current (flow), and resistance (narrow pipe). Show a real breadboard close-up and demonstrate how the internal connections work. Include a step-by-step wiring diagram for the LED circuit and highlight the current-limiting resistor calculation with an on-screen formula animation.

---

### Chapter 2.2 — Digital Logic: Transistors, Flip-Flops, and Logic Functions

#### Learning objectives
- Explain how a transistor acts as an electronic switch.
- Understand the behavior of basic logic gates: AND, OR, NOT, NAND, NOR, XOR.
- Describe how flip-flops store a single bit of information.
- Use truth tables to analyze logic functions and circuit behavior.

#### Detailed lesson content

Digital logic is the foundation of all modern computing. Inside the ARM Cortex-M4F processor, every operation is performed by billions of tiny switches called transistors. Understanding how these switches work and how they are combined into logic gates is essential for understanding how a microcontroller reads inputs and produces outputs.

A **transistor** is a semiconductor device that can act as an electronic switch. In a digital circuit, a transistor is either fully on (conducting current) or fully off (blocking current). It has no in-between states. This binary behavior is why computers use binary numbers: a voltage of 3.3V represents a binary 1 (HIGH), and a voltage of 0V represents a binary 0 (LOW). A single transistor can be controlled by a small voltage at its gate terminal. When the gate voltage is high, the transistor turns on and allows current to flow between its other two terminals. When the gate voltage is low, the transistor turns off.

**Logic gates** are circuits made from transistors that perform basic logical operations. The most common gates are:

- **AND gate:** The output is HIGH only if both inputs are HIGH. The Boolean expression is Y = A AND B, or Y = A · B.
- **OR gate:** The output is HIGH if at least one input is HIGH. The Boolean expression is Y = A OR B, or Y = A + B.
- **NOT gate (inverter):** The output is the opposite of the input. The Boolean expression is Y = NOT A, or Y = Ā.
- **NAND gate:** AND followed by NOT. It is HIGH unless both inputs are HIGH.
- **NOR gate:** OR followed by NOT. It is HIGH only if both inputs are LOW.
- **XOR gate:** The output is HIGH if the inputs are different.

Each gate has a **truth table** that lists the output for every possible combination of inputs. For example, a two-input AND gate has the following truth table:

| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

A **flip-flop** is a circuit made from logic gates that can store one bit of information. It has two stable states: it can store a 0 or a 1. The most common type is the D flip-flop, which has a data input (D), a clock input, and an output (Q). When the clock signal transitions from LOW to HIGH, the value at D is copied to Q and stored there. Flip-flops are the building blocks of registers, memory, and counters inside the microcontroller. Every register in the ARM Cortex-M4F is made from flip-flops. The program counter, the general-purpose registers, and even the individual bits in memory-mapped I/O registers are all stored in flip-flops.

In embedded programming, you often need to manipulate individual bits in registers. For example, to turn on the clock for a GPIO port, you might set bit 5 of a register. To do this, you use bitwise operations in C: `register |= (1 << 5);` sets bit 5 to 1 without changing the other bits. `register &= ~(1 << 5);` clears bit 5 to 0. These operations are the software equivalent of wiring logic gates together.

#### Key concepts
- Transistor as an electronic switch
- Logic gates: AND, OR, NOT, NAND, NOR, XOR
- Truth tables and Boolean expressions
- Flip-flops and data storage
- Bitwise operations: set, clear, toggle, and test

#### Hands-on activity
Build a simple logic circuit using two switches and an LED on a breadboard. Wire the switches so that the LED lights only when both switches are pressed (an AND function). Then rewire it so the LED lights when either switch is pressed (an OR function). Document the behavior with a truth table for each circuit.

#### Assessment idea
Given a three-input logic function Y = (A AND B) OR (NOT C), write the truth table for all 8 combinations of A, B, and C. Then ask: "How would you set bit 3 of a register without changing the other bits in C?" Answer: `register |= (1 << 3);`

#### AI generation note
Create a 9-minute lesson with animated transistor switches. Show a water-gate analogy for the transistor. Animate the logic gates with colored balls representing HIGH and LOW signals. Show the internal construction of a D flip-flop with gates. Include a short interactive exercise where learners predict the output of a logic circuit.

---

## Module 3: C Programming for Embedded Systems

> **Goal:** Master the C programming concepts used in embedded development, including variables, operators, control structures, functions, pointers, and bit manipulation.

---

### Chapter 3.1 — C Programming Fundamentals

#### Learning objectives
- Write and compile C programs for the ARM Cortex-M processor.
- Use variables, data types, operators, and control structures in C.
- Understand the difference between signed and unsigned integers, and fixed-width types.
- Write structured programs with comments and proper formatting.

#### Detailed lesson content

C is the language of embedded systems. It is used because it provides direct control over hardware, produces efficient machine code, and is supported by every microcontroller vendor. Unlike Python or Java, C compiles to native machine instructions that run directly on the processor without an interpreter or virtual machine. This makes C programs fast and predictable, which is essential for real-time systems.

Every C program has a `main()` function, which is the entry point where execution begins. In embedded systems, `main()` is the only function that runs in a loop, and the program never exits. Here is the structure of a simple embedded C program:

```c
#include <stdint.h>

int main(void) {
    // Initialization code runs once
    uint32_t counter = 0;

    // Infinite loop runs forever
    while (1) {
        counter = counter + 1;
        // Do something useful
    }
}
```

The `while (1)` loop is an infinite loop. In embedded programming, the main loop never ends because the microcontroller is always running. The program only stops when the power is removed or the reset button is pressed. Inside the loop, the program reads sensors, makes decisions, and updates outputs.

C has several built-in data types, but in embedded programming, it is best practice to use fixed-width types from `<stdint.h>` because they explicitly specify the size of the variable:
- `uint8_t` — unsigned 8-bit integer (0 to 255)
- `int8_t` — signed 8-bit integer (-128 to 127)
- `uint16_t` — unsigned 16-bit integer (0 to 65,535)
- `int16_t` — signed 16-bit integer (-32,768 to 32,767)
- `uint32_t` — unsigned 32-bit integer (0 to 4,294,967,295)
- `int32_t` — signed 32-bit integer (-2,147,483,648 to 2,147,483,647)

Using fixed-width types is important because the size of `int` and `long` can vary between compilers and platforms. On the ARM Cortex-M4F, an `int` is 32 bits, but on some 8-bit microcontrollers, an `int` is only 16 bits. Using `uint32_t` guarantees the same size everywhere.

Operators in C include arithmetic operators (`+`, `-`, `*`, `/`, `%`), comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`), logical operators (`&&`, `||`, `!`), and bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`). Bitwise operators are especially important in embedded programming because they allow you to manipulate individual bits in hardware registers.

Control structures let your program make decisions and repeat actions. The `if` statement checks a condition and runs code only when the condition is true:

```c
if (counter > 100) {
    // reset counter
    counter = 0;
} else {
    // keep counting
    counter = counter + 1;
}
```

The `for` loop is best when you know how many times to repeat something:

```c
for (uint32_t i = 0; i < 10; i++) {
    // do this 10 times
}
```

The `switch` statement is useful when you need to compare one variable against many constant values, such as handling different states in a state machine:

```c
switch (state) {
    case 0:
        // state 0 actions
        break;
    case 1:
        // state 1 actions
        break;
    default:
        // handle unexpected state
        break;
}
```

#### Key concepts
- C program structure: `main()`, infinite `while (1)` loop
- Fixed-width types: `uint8_t`, `int16_t`, `uint32_t`, etc.
- Arithmetic, comparison, logical, and bitwise operators
- `if`, `else`, `for`, `while`, `switch` control structures
- Comments, formatting, and readability

#### Hands-on activity
Write a C program that counts from 0 to 255 using a `uint8_t` variable, then wraps back to 0. Add a delay between each count. Print the count to the serial port using `printf` (if the simulator supports it) or observe the value in the debugger.

#### Assessment idea
Predict the output of the following code:
```c
uint8_t a = 250;
uint8_t b = 20;
uint8_t c = a + b;
```
Answer: `c` will be 14 (overflow wraps around from 270 to 14 because `uint8_t` can only hold 0-255). This demonstrates why overflow is dangerous in embedded systems.

#### AI generation note
Create a 10-minute interactive coding lesson. Show the IDE with live coding. Demonstrate variable declarations, operators, and control structures. Highlight the difference between standard types and fixed-width types. Include a mini-quiz where learners choose the correct data type for five embedded scenarios (e.g., "a GPIO pin number from 0 to 7" → `uint8_t`).

---

### Chapter 3.2 — Functions, Pointers, and Bit Manipulation in C

#### Learning objectives
- Define and call functions with parameters and return values.
- Understand pointer syntax and use pointers to access memory-mapped registers.
- Perform bitwise operations to set, clear, toggle, and test individual bits.
- Explain the relationship between pointers and memory addresses in embedded systems.

#### Detailed lesson content

Functions are reusable blocks of code that perform a specific task. In embedded programming, functions help you organize code into logical units such as initialization, input reading, and output control. A function has a return type, a name, a parameter list, and a body:

```c
uint32_t add(uint32_t a, uint32_t b) {
    return a + b;
}
```

If a function does not return a value, its return type is `void`. If it takes no parameters, the parameter list is `void`:

```c
void delay(uint32_t count) {
    volatile uint32_t i;
    for (i = 0; i < count; i++) {}
}
```

The `volatile` keyword in the `delay` function is important. Without it, the compiler might optimize away the loop because the variable `i` is never used after the loop ends. The `volatile` keyword tells the compiler that `i` might be changed by something outside the program (in this case, the hardware timer that increments the loop counter), so the loop must be executed exactly as written.

**Pointers** are variables that store memory addresses. In embedded systems, pointers are the primary way to access hardware registers. The GPIO Port F data register is at address `0x400253FC`. To access it, you create a pointer to that address:

```c
uint32_t *portFData = (uint32_t *)0x400253FC;
*portFData = 0x04;  // Write to the register
```

The `*` operator dereferences the pointer, meaning it accesses the value at the memory address stored in the pointer. The `&` operator gets the address of a variable:

```c
uint32_t x = 10;
uint32_t *p = &x;  // p now holds the address of x
*p = 20;           // x is now 20
```

**Bit manipulation** is the art of changing individual bits in a register without affecting the others. The most common operations are:
- **Set a bit:** `register |= (1 << bitNumber);` — uses OR to turn the bit on
- **Clear a bit:** `register &= ~(1 << bitNumber);` — uses AND with the complement to turn the bit off
- **Toggle a bit:** `register ^= (1 << bitNumber);` — uses XOR to flip the bit
- **Test a bit:** `if (register & (1 << bitNumber))` — uses AND to check if the bit is 1

For example, to set bit 2 of a register:

```c
#define GPIO_PORTF_DATA_R  (*((volatile uint32_t *)0x400253FC))
GPIO_PORTF_DATA_R |= 0x04;  // Set bit 2 (0x04 = 1 << 2)
```

To clear bit 2:

```c
GPIO_PORTF_DATA_R &= ~0x04;  // Clear bit 2
```

To toggle bit 2:

```c
GPIO_PORTF_DATA_R ^= 0x04;  // Toggle bit 2
```

Bitwise operations are essential because hardware registers control many different functions with a single 32-bit word. If you want to turn on the clock for GPIO Port F without affecting the clocks for other ports, you must set only bit 5 of the clock register, not write the entire register.

#### Key concepts
- Function definition, declaration, and call
- `void` return type and `void` parameters
- Pointers: declaration, dereferencing, and address-of
- Memory-mapped register access via pointers
- Bitwise operations: set, clear, toggle, test
- `volatile` keyword

#### Hands-on activity
Write a function called `GPIO_SetBit(uint32_t *reg, uint8_t bit)` that sets a specific bit in a register. Write another function called `GPIO_ClearBit(uint32_t *reg, uint8_t bit)` that clears it. Test these functions by blinking the red, blue, and green LEDs on the LaunchPad in a pattern.

#### Assessment idea
Given a register value of `0x3A` (binary `00111010`), what is the result after executing `register |= (1 << 1)`? Answer: `0x3A` already has bit 1 set, so it remains `0x3A`. Then ask: what is the result after `register &= ~(1 << 4)`? Answer: `0x3A` is `00111010`, bit 4 is `00010000`, complement is `11101111`, AND gives `00101010` = `0x2A`.

#### AI generation note
Create a 10-minute lesson with a split-screen view. On the left, show C code being written. On the right, show a memory diagram with addresses and values. Animate the pointer dereferencing process with arrows from the pointer to the memory cell. Show bit manipulation as flipping individual light switches in a panel of 32 switches. Include a live coding challenge at the end.

---

### Chapter 3.3 — Program Structure and Memory in Embedded Systems

#### Learning objectives
- Explain the structure of an embedded C program: startup code, main, and infinite loop.
- Describe the memory layout of an embedded program: code, data, stack, and heap.
- Understand the difference between global, local, and static variables.
- Avoid common memory mistakes: buffer overflow, stack overflow, and uninitialized pointers.

#### Detailed lesson content

An embedded C program is more than just the `main()` function you write. When the microcontroller powers on or resets, it starts executing code from a fixed address (the reset vector). The first code to run is the **startup code**, which is written in assembly or C and is provided by the compiler or the chip vendor. The startup code performs several important tasks: it initializes the stack pointer, copies initialized global variables from flash to RAM, zeros out uninitialized global variables, and then calls `main()`.

After `main()` is called, your program takes over. The typical structure of an embedded program is:

```c
// Global variables and constants
uint32_t g_systemState = 0;

// Function prototypes
void init_hardware(void);
void process_input(void);
void update_output(void);

int main(void) {
    // Initialization (runs once)
    init_hardware();

    // Main loop (runs forever)
    while (1) {
        process_input();
        update_output();
    }
}
```

The memory of an embedded system is divided into regions. The **Code** region (also called `.text`) contains the machine instructions of your program. It is stored in flash memory and is read-only during execution. The **Data** region (also called `.data`) contains global and static variables that have initial values. These values are copied from flash to RAM at startup. The **BSS** region contains global and static variables that are initialized to zero. The **Stack** is a region of RAM used for local variables, function parameters, and return addresses. It grows downward from a high address. The **Heap** is a region of RAM used for dynamic memory allocation (using `malloc` and `free`).

In embedded systems, the heap is often avoided because dynamic memory allocation can lead to fragmentation and unpredictable behavior. It is better to use fixed-size arrays and global variables. The stack is also limited — on the TM4C123G, the stack might be only a few kilobytes. Deep recursion or large local arrays can cause a **stack overflow**, which corrupts memory and crashes the program.

**Global variables** are declared outside any function and can be accessed from any function in the file (or from other files if declared with `extern`). They persist for the entire lifetime of the program. **Local variables** are declared inside a function and exist only while the function is running. They are stored on the stack. **Static variables** are like global variables but have limited scope. A static variable inside a function retains its value between function calls, but it cannot be accessed from outside the function.

Common memory mistakes in embedded systems include:
- **Buffer overflow:** Writing past the end of an array corrupts adjacent memory.
- **Stack overflow:** Using too much stack space causes the stack to overwrite other memory regions.
- **Uninitialized pointer:** Using a pointer that has not been set to a valid address causes a hard fault.
- **Dangling pointer:** Using a pointer to memory that has been freed or went out of scope.
- **Memory leak:** Allocating memory with `malloc` and never freeing it exhausts the heap.

The best practice in embedded programming is to avoid dynamic memory allocation entirely, use fixed-size arrays, and keep the stack usage small by avoiding large local variables and deep recursion.

#### Key concepts
- Startup code and reset vector
- Memory layout: `.text`, `.data`, `.bss`, stack, heap
- Global, local, and static variables
- Stack overflow and buffer overflow
- Avoiding dynamic memory allocation in embedded systems

#### Hands-on activity
Write a program that declares a global array of 100 `uint32_t` values, a local array of 10 values inside a function, and a static counter inside a function. Use the debugger to inspect the memory addresses of these variables and observe where they are located in memory (global in `.data`, local on stack, static in `.bss`).

#### Assessment idea
Ask: "Why is `malloc` generally discouraged in embedded bare-metal programming?" Answer: it can cause memory fragmentation, the heap size is small, and failure to allocate might not be handled gracefully. Also ask: "What happens if a function declares `uint32_t bigArray[1000];` as a local variable on a microcontroller with 2 KB of RAM?" Answer: stack overflow, program crash.

#### AI generation note
Create a 9-minute animated memory map visualization. Show the startup code running, then the stack growing and shrinking as functions are called and return. Show the difference between global and local variables with labeled boxes. Use a warning animation for stack overflow. Include a short quiz about where each variable type lives.

---

## Module 4: Microcontroller GPIO and Digital I/O

> **Goal:** Configure and use the GPIO ports to read switches and control LEDs, including pull-up resistors, current limits, and the hardware abstraction layer.

---

### Chapter 4.1 — GPIO Configuration and Digital I/O

#### Learning objectives
- Explain how GPIO ports work on the TM4C123G.
- Enable the clock for a GPIO port and configure pins as inputs or outputs.
- Use the data register to read inputs and write outputs.
- Understand the direction register, digital enable register, and alternate function register.

#### Detailed lesson content

GPIO stands for General Purpose Input/Output. It is the simplest and most common way for a microcontroller to interact with the physical world. A GPIO pin can be configured as an input (to read a switch or sensor) or an output (to control an LED or motor). The TM4C123G has six GPIO ports named A, B, C, D, E, and F. Each port has up to 8 pins, giving a total of 43 GPIO pins (some pins are shared with special functions like JTAG debugging).

The TM4C123G uses a **memory-mapped I/O** model. Each GPIO port has a set of registers at fixed memory addresses. To control a port, you read from and write to these registers. The key registers for basic digital I/O are:

- **RCGCGPIO (Run-Mode Clock Gating Control for GPIO):** This register at address `0x400FE608` controls the clock for each GPIO port. Before you can use a port, you must enable its clock by setting the corresponding bit. For Port F, bit 5 must be set (`0x20`).
- **GPIODIR (Direction Register):** This register at `0x40025400` for Port F sets each pin as an input (0) or output (1). Bit 0 corresponds to pin 0, bit 1 to pin 1, and so on.
- **GPIODEN (Digital Enable Register):** This register at `0x4002551C` for Port F enables the digital function for each pin. A pin must be digitally enabled before it can be used for digital I/O.
- **GPIODATA (Data Register):** This register at `0x400253FC` for Port F is used to read inputs and write outputs. The address mask determines which bits are affected. Writing to the base address plus an offset mask allows you to change only specific bits without affecting others.

The address decoding of the data register is special. The TM4C123G uses address bits [9:2] as a mask. For example, writing to address `0x400253FC` (mask `0xFF`) affects all bits, while writing to `0x40025004` (mask `0x02`) affects only bit 1. However, the simplest approach is to use the full data register address `0x400253FC` and use bitwise operations to modify specific bits.

Here is the complete code to configure Port F pin 2 (blue LED) as an output and blink it:

```c
#include <stdint.h>

#define SYSCTL_RCGCGPIO_R   (*((volatile uint32_t *)0x400FE608))
#define GPIO_PORTF_DIR_R    (*((volatile uint32_t *)0x40025400))
#define GPIO_PORTF_DEN_R    (*((volatile uint32_t *)0x4002551C))
#define GPIO_PORTF_DATA_R   (*((volatile uint32_t *)0x400253FC))

#define PF2                 (1 << 2)

void delay(volatile uint32_t count) {
    while (count--) {}
}

int main(void) {
    // Enable clock for GPIO Port F
    SYSCTL_RCGCGPIO_R |= 0x20;
    // Wait for clock to stabilize
    while ((SYSCTL_RCGCGPIO_R & 0x20) == 0) {}

    // Set PF2 as output
    GPIO_PORTF_DIR_R |= PF2;
    // Enable digital function for PF2
    GPIO_PORTF_DEN_R |= PF2;

    while (1) {
        GPIO_PORTF_DATA_R |= PF2;   // Blue LED on
        delay(1000000);
        GPIO_PORTF_DATA_R &= ~PF2;  // Blue LED off
        delay(1000000);
    }
}
```

The process is always the same: enable the clock, set the direction, enable the digital function, and then read or write the data register. Some pins have alternate functions (UART, I2C, PWM, etc.) controlled by the GPIO Alternate Function Select (GPIOAFSEL) register, but for basic digital I/O, we leave them as GPIO.

#### Key concepts
- GPIO ports A-F on the TM4C123G
- Memory-mapped I/O registers: RCGCGPIO, GPIODIR, GPIODEN, GPIODATA
- Clock gating: enabling the clock before using a port
- Direction register: input (0) vs. output (1)
- Digital enable register
- Bitwise operations for register manipulation

#### Hands-on activity
Write a program that configures Port F pins 1, 2, and 3 (red, blue, green LEDs) as outputs and creates a color pattern: red on for 1 second, blue on for 1 second, green on for 1 second, then all three on for 1 second (which appears white). Repeat forever. Use a multimeter to measure the voltage on each pin when it is HIGH and LOW.

#### Assessment idea
Ask: "You want to configure Port F pin 0 as an input. What three steps must you perform, and which registers do you use?" Answer: (1) Enable clock for Port F by setting bit 5 in `SYSCTL_RCGCGPIO_R`. (2) Clear bit 0 in `GPIO_PORTF_DIR_R` to make it an input. (3) Set bit 0 in `GPIO_PORTF_DEN_R` to enable digital function.

#### AI generation note
Create a 10-minute lesson with a live coding demonstration. Show the IDE, the register map, and the LaunchPad board side by side. Highlight the PF2 pin on the board. Use animated register diagrams showing bits being set one at a time. Include a common mistake: forgetting to enable the clock, and show the symptom (LED does not blink).

---

### Chapter 4.2 — Interfacing Switches and LEDs

#### Learning objectives
- Interface external switches and LEDs to the LaunchPad using a breadboard.
- Understand the need for pull-up and pull-down resistors.
- Use the internal pull-up resistors on the TM4C123G.
- Debounce a switch in software to eliminate false triggers.

#### Detailed lesson content

The LaunchPad has two user switches connected to Port F pins 0 and 4 (SW1 and SW2). These switches are active-low, meaning they pull the pin to ground when pressed. The board also has an RGB LED connected to pins 1, 2, and 3. To interface external switches and LEDs, you need to understand the concepts of pull-up resistors, pull-down resistors, and switch debouncing.

When a switch is not pressed, the pin is disconnected from both power and ground. This is called a **floating input**. A floating input can pick up electrical noise and randomly read HIGH or LOW. To prevent this, you need a pull-up or pull-down resistor. A **pull-up resistor** connects the pin to the power supply (3.3V) through a resistor, so the pin reads HIGH when the switch is not pressed. When the switch is pressed, it connects the pin to ground, and the pin reads LOW. A **pull-down resistor** does the opposite: it connects the pin to ground, so the pin reads LOW when the switch is not pressed and HIGH when pressed.

The TM4C123G has internal pull-up and pull-down resistors for each GPIO pin. These are controlled by the **GPIOPUR (Pull-Up Register)** and **GPIOPDR (Pull-Down Register)**. For the built-in switches on the LaunchPad, the internal pull-up resistors are already enabled by the board design. For external switches, you can enable the internal pull-up in software:

```c
#define GPIO_PORTF_PUR_R    (*((volatile uint32_t *)0x40025510))

// Enable pull-up for PF0 and PF4
GPIO_PORTF_PUR_R |= 0x11;  // Bits 0 and 4
```

Alternatively, you can use external pull-up or pull-down resistors on the breadboard. A typical value is 10 kΩ. External resistors are useful when you need a specific value or when the internal resistors are not available.

When a mechanical switch is pressed, the metal contacts bounce against each other for a few milliseconds, causing the signal to fluctuate rapidly between HIGH and LOW. This is called **switch bounce**. If your program checks the switch too quickly, it may count one press as many. A simple software debounce technique waits a short time after detecting a change before reading the switch again:

```c
uint32_t lastState = 0;
uint32_t debounceCounter = 0;

uint32_t debouncedRead(void) {
    uint32_t currentState = GPIO_PORTF_DATA_R & 0x10;  // Read PF4

    if (currentState != lastState) {
        debounceCounter = 0;
        lastState = currentState;
    } else {
        debounceCounter++;
        if (debounceCounter > 10000) {
            return currentState;
        }
    }
    return lastState;  // Return stable state
}
```

A simpler approach is to read the switch, wait a few milliseconds, and then read it again. If the reading is the same, accept it. This is less precise but works for many applications:

```c
uint32_t readSwitch(void) {
    uint32_t first = GPIO_PORTF_DATA_R & 0x10;
    delay(10000);  // Wait for bounce to settle
    uint32_t second = GPIO_PORTF_DATA_R & 0x10;
    if (first == second) {
        return second;
    }
    return 0x10;  // Not pressed if bouncing
}
```

For external LEDs, always use a current-limiting resistor. A 220 Ω resistor is standard for 3.3V GPIO pins. Connect the LED's anode (longer leg) to the GPIO pin through the resistor, and the cathode (shorter leg) to ground. When the pin is HIGH, current flows through the LED and resistor to ground, lighting the LED. When the pin is LOW, no current flows, and the LED is off.

#### Key concepts
- Floating inputs and the need for pull-up/pull-down resistors
- Internal pull-up resistors: GPIOPUR
- External pull-up and pull-down resistors
- Switch bounce and software debouncing
- LED wiring with current-limiting resistors
- Active-low vs. active-high switches

#### Hands-on activity
Build a circuit on a breadboard with two external switches and two external LEDs. Connect one switch to Port F pin 0 (with internal pull-up enabled) and the other to an external switch on Port E pin 0 (with an external 10 kΩ pull-down resistor). Connect the LEDs to Port B pins 0 and 1 with 220 Ω resistors. Write a program where pressing the first switch toggles the first LED and pressing the second switch toggles the second LED. Implement software debouncing.

#### Assessment idea
Show a diagram of a switch connected directly to a GPIO pin with no resistor. Ask: "What is the problem with this circuit?" Answer: when the switch is not pressed, the pin is floating and can read random values. Then ask: "How would you fix it?" Answer: add a pull-up or pull-down resistor, or enable the internal pull-up.

#### AI generation note
Create a 10-minute lesson with oscilloscope-style animations showing switch bounce. Show the difference between a floating input and a pull-up input. Walk through the debounce code with a timing diagram. Show a real breadboard with switch and LED wiring. Include a safety note about GPIO current limits.

---

### Chapter 4.3 — Debugging with the Serial Port (UART)

#### Learning objectives
- Configure the UART0 serial port for communication with a PC.
- Send and receive characters using the UART.
- Use printf-style debugging to display variable values and program state.
- Understand baud rate, data bits, stop bits, and parity.

#### Detailed lesson content

Debugging an embedded program is challenging because there is no screen to print messages. The most common debugging technique is to use the UART (Universal Asynchronous Receiver/Transmitter) serial port to send text messages to a computer. The TM4C123G has multiple UART modules, and UART0 is connected to the USB debugger on the LaunchPad. This means you can send serial data through the same USB cable used for programming and power, and the computer will see it as a virtual COM port.

UART communication is asynchronous, meaning there is no shared clock between the sender and receiver. Instead, both sides agree on a **baud rate**, which is the number of bits per second. The standard baud rate for debugging is 115200. The data format is typically 8 data bits, 1 stop bit, and no parity (8N1).

To configure UART0, you must:
1. Enable the clock for UART0 and GPIO Port A (UART0 uses PA0 and PA1).
2. Enable the alternate function for PA0 and PA1 so they act as UART pins instead of GPIO.
3. Set the baud rate by writing to the UART Integer Baud-Rate Divisor (UARTIBRD) and UART Fractional Baud-Rate Divisor (UARTFBRD) registers.
4. Configure the line control register for 8 data bits, 1 stop bit, no parity.
5. Enable the UART transmitter and receiver.

Here is the code to initialize UART0 at 115200 baud (system clock = 16 MHz):

```c
#include <stdint.h>

#define SYSCTL_RCGCUART_R   (*((volatile uint32_t *)0x400FE618))
#define SYSCTL_RCGCGPIO_R   (*((volatile uint32_t *)0x400FE608))
#define UART0_DR_R          (*((volatile uint32_t *)0x4000C000))
#define UART0_FR_R          (*((volatile uint32_t *)0x4000C018))
#define UART0_IBRD_R        (*((volatile uint32_t *)0x4000C024))
#define UART0_FBRD_R        (*((volatile uint32_t *)0x4000C028))
#define UART0_LCRH_R        (*((volatile uint32_t *)0x4000C02C))
#define UART0_CTL_R         (*((volatile uint32_t *)0x4000C030))
#define GPIO_PORTA_AFSEL_R  (*((volatile uint32_t *)0x40004420))
#define GPIO_PORTA_DEN_R    (*((volatile uint32_t *)0x4000451C))

#define UART_FR_TXFF        0x20  // UART Transmit FIFO Full

void UART0_Init(void) {
    // Enable clock for UART0 and GPIO Port A
    SYSCTL_RCGCUART_R |= 0x01;
    SYSCTL_RCGCGPIO_R |= 0x01;
    // Wait for clocks to stabilize
    while ((SYSCTL_RCGCGPIO_R & 0x01) == 0) {}

    // Enable alternate function for PA0 and PA1
    GPIO_PORTA_AFSEL_R |= 0x03;
    // Enable digital function for PA0 and PA1
    GPIO_PORTA_DEN_R |= 0x03;

    // Disable UART0 during configuration
    UART0_CTL_R &= ~0x01;
    // Set baud rate to 115200 (BRD = 16,000,000 / (16 * 115200) = 8.6805)
    UART0_IBRD_R = 8;
    UART0_FBRD_R = 44;  // round(0.6805 * 64) = 44
    // Configure line control: 8 data bits, 1 stop bit, no parity, FIFOs enabled
    UART0_LCRH_R = 0x70;
    // Enable UART0
    UART0_CTL_R |= 0x01;
}

void UART0_SendChar(char c) {
    // Wait until transmit FIFO is not full
    while ((UART0_FR_R & UART_FR_TXFF) != 0) {}
    UART0_DR_R = c;
}

void UART0_SendString(char *str) {
    while (*str) {
        UART0_SendChar(*str);
        str++;
    }
}

int main(void) {
    UART0_Init();
    UART0_SendString("Hello, Embedded World!\r\n");

    while (1) {
        // Main program logic
    }
}
```

The UART0_DR_R (Data Register) is used to send and receive characters. Before writing, you check the UART_FR_R (Flag Register) to make sure the transmit FIFO is not full. When the computer receives the characters, they appear in a terminal program such as PuTTY, Tera Term, or the Serial Monitor in the IDE.

Once UART0 is configured, you can implement a simple `printf` function by sending characters one at a time. This is the most powerful debugging tool in embedded development. You can print variable values, program state, and error messages to understand what your program is doing.

#### Key concepts
- UART0 configuration and baud rate calculation
- UART registers: UARTIBRD, UARTFBRD, UARTLCRH, UARTCTL, UARTDR, UARTFR
- GPIO alternate function for UART pins
- Sending characters and strings via UART
- `printf`-style debugging in embedded systems

#### Hands-on activity
Initialize UART0 in your program and send a message that counts from 0 to 100, printing each number on a new line. Open a terminal program on your computer, connect to the virtual COM port at 115200 baud, and verify that you see the numbers. Then modify the program to print the state of the switches and the value of a counter variable.

#### Assessment idea
Given a system clock of 16 MHz and a desired baud rate of 9600, calculate the values for UARTIBRD and UARTFBRD. Answer: BRD = 16,000,000 / (16 * 9600) = 104.1667. IBRD = 104, FBRD = round(0.1667 * 64) = 11.

#### AI generation note
Create a 10-minute lesson with a split-screen view. On the left, show the C code for UART initialization. On the right, show the terminal program receiving the characters. Animate the baud rate calculation. Show the data format with a timing diagram (start bit, 8 data bits, stop bit). Include a troubleshooting tip for the most common error: wrong baud rate setting.

---

## Module 5: Arrays, Data Structures, and Functional Debugging

> **Goal:** Use arrays and data structures to collect and analyze sensor data, and implement functional debugging techniques to verify system behavior.

---

### Chapter 5.1 — Arrays and Data Collection

#### Learning objectives
- Declare and use arrays of integers and structures in C.
- Use arrays to store a history of sensor readings or system states.
- Implement circular buffers for continuous data collection.
- Pass arrays to functions and return data from functions.

#### Detailed lesson content

Arrays are collections of variables of the same type stored in contiguous memory. In embedded systems, arrays are essential for storing sequences of sensor readings, lookup tables, and state histories. Unlike desktop computers, embedded systems have limited memory, so you must choose array sizes carefully.

An array of `uint32_t` values is declared as:

```c
uint32_t sensorData[100];  // Array of 100 unsigned 32-bit integers
```

You access elements using an index starting from 0:

```c
sensorData[0] = 42;
sensorData[1] = 55;
```

A common pattern is to iterate over an array with a `for` loop:

```c
for (uint32_t i = 0; i < 100; i++) {
    sensorData[i] = readSensor();  // Read sensor and store
    delay(1000);                   // Wait 1 second between readings
}
```

A **circular buffer** (also called a ring buffer) is a fixed-size array that overwrites the oldest data when it becomes full. This is useful for continuous data collection where you only need the most recent N samples. A circular buffer has a head index (where the next write goes) and a tail index (where the next read comes from). When the head reaches the end of the array, it wraps around to 0:

```c
#define BUFFER_SIZE 64

uint32_t buffer[BUFFER_SIZE];
uint32_t head = 0;
uint32_t tail = 0;

void bufferWrite(uint32_t value) {
    buffer[head] = value;
    head = (head + 1) % BUFFER_SIZE;
    if (head == tail) {
        tail = (tail + 1) % BUFFER_SIZE;  // Overwrite oldest data
    }
}

uint32_t bufferRead(void) {
    if (tail == head) {
        return 0;  // Buffer empty
    }
    uint32_t value = buffer[tail];
    tail = (tail + 1) % BUFFER_SIZE;
    return value;
}
```

A **structure** in C lets you group related data together. For example, a sensor reading might include a timestamp, a value, and a status flag:

```c
typedef struct {
    uint32_t timestamp;
    uint32_t value;
    uint8_t status;
} SensorReading;

SensorReading readings[50];
```

Structures are useful for organizing data and passing multiple related values to functions. In embedded systems, structures are often used to represent hardware registers, packet formats, and configuration data.

When passing arrays to functions, you pass a pointer to the first element. The function can then modify the array in place:

```c
void calculateAverage(uint32_t *data, uint32_t size, uint32_t *result) {
    uint32_t sum = 0;
    for (uint32_t i = 0; i < size; i++) {
        sum += data[i];
    }
    *result = sum / size;
}
```

#### Key concepts
- Array declaration, indexing, and iteration
- Circular buffers and ring buffers
- Structures and `typedef`
- Passing arrays to functions via pointers
- Memory constraints for arrays in embedded systems

#### Hands-on activity
Write a program that reads the value of a switch every 100 milliseconds and stores the result in a circular buffer of 64 elements. After 10 seconds, dump the entire buffer contents to the UART so you can see the history of switch presses. Then calculate the average time between presses.

#### Assessment idea
Given a 10-element array initialized to `{5, 3, 8, 1, 9, 2, 7, 4, 6, 0}`, write a function that finds the maximum value and its index. Then ask: "What is the difference between `array[i]` and `*(array + i)`?" Answer: they are equivalent in C; both access the element at index i.

#### AI generation note
Create a 9-minute lesson with a memory visualization. Show an array as a row of labeled boxes. Animate the circular buffer head and tail moving around the ring. Show a structure as a grouped block of fields. Include a live coding segment where an array is passed to a function and modified.

---

### Chapter 5.2 — Functional Debugging and Performance Analysis

#### Learning objectives
- Use functional debugging to dump array data and verify system behavior.
- Measure the execution time of code blocks using the SysTick timer.
- Analyze the performance of a function by counting clock cycles.
- Implement assertions and sanity checks to catch errors early.

#### Detailed lesson content

Debugging embedded systems is difficult because you cannot easily see what the program is doing. A common technique is **functional debugging**, where you store intermediate results in an array and then dump the array to the serial port or inspect it in the debugger. This lets you verify that a function is producing the correct output for a known input.

For example, if you are writing a function that converts an analog reading to a temperature, you can test it by creating a table of known inputs and expected outputs:

```c
typedef struct {
    uint32_t input;
    uint32_t expectedOutput;
    uint32_t actualOutput;
    uint8_t passed;
} TestCase;

TestCase tests[5] = {
    {0,    0, 0, 0},
    {512,  25, 0, 0},
    {1023, 50, 0, 0},
    {256,  12, 0, 0},
    {768,  37, 0, 0}
};

void runTests(void) {
    for (uint32_t i = 0; i < 5; i++) {
        tests[i].actualOutput = convertToTemperature(tests[i].input);
        tests[i].passed = (tests[i].actualOutput == tests[i].expectedOutput);
    }
}
```

After running the tests, you can dump the results to the UART to see which tests passed and which failed. This is a form of **unit testing** that is especially valuable in embedded systems where hardware is involved.

The **SysTick timer** is a 24-bit countdown timer built into the ARM Cortex-M processor. It is perfect for measuring the execution time of code. To use it, you load a value into the SysTick Reload Value Register, enable the timer, and then read the Current Value Register before and after the code you want to measure. The difference tells you how many clock cycles the code took:

```c
#define NVIC_ST_CTRL_R      (*((volatile uint32_t *)0xE000E010))
#define NVIC_ST_RELOAD_R    (*((volatile uint32_t *)0xE000E014))
#define NVIC_ST_CURRENT_R   (*((volatile uint32_t *)0xE000E018))

void SysTick_Init(void) {
    NVIC_ST_CTRL_R = 0;              // Disable SysTick during setup
    NVIC_ST_RELOAD_R = 0x00FFFFFF;   // Maximum reload value
    NVIC_ST_CURRENT_R = 0;           // Clear current value
    NVIC_ST_CTRL_R = 0x05;           // Enable SysTick with core clock
}

uint32_t SysTick_Read(void) {
    return NVIC_ST_CURRENT_R;
}

uint32_t measureFunction(void) {
    uint32_t start = SysTick_Read();
    // Call the function to measure
    myFunction();
    uint32_t end = SysTick_Read();
    return start - end;  // SysTick counts down, so subtract end from start
}
```

Because SysTick counts down, the elapsed time is `start - end`. If the timer wraps around during the measurement, you may need to handle that case, but for short functions, the 24-bit timer is more than enough.

**Assertions** are checks that verify assumptions in your code. In embedded systems, you can implement a simple assertion macro that sends an error message to the UART if a condition is false:

```c
#define ASSERT(condition) \
    if (!(condition)) { \
        UART0_SendString("ASSERTION FAILED at line "); \
        UART0_SendNumber(__LINE__); \
        UART0_SendString("\r\n"); \
        while (1) {}  // Halt on failure \
    }
```

Assertions are useful for catching errors during development, such as null pointers, invalid array indices, and unexpected return values. They should be disabled in production by defining the macro to nothing, but during development, they are invaluable.

#### Key concepts
- Functional debugging and test arrays
- Unit testing in embedded systems
- SysTick timer for performance measurement
- Clock cycle counting and execution time analysis
- Assertions and sanity checks

#### Hands-on activity
Write a function that calculates the factorial of a number. Create a table of test cases with expected outputs. Use functional debugging to dump the inputs and outputs to the UART. Then use the SysTick timer to measure how many clock cycles the function takes for inputs 1, 5, 10, and 15.

#### Assessment idea
Ask: "You measure a function and find it takes 8000 clock cycles on an 80 MHz processor. How long does it take in microseconds?" Answer: 8000 / 80 = 100 microseconds. Then ask: "Why is the SysTick timer better than a software delay loop for measuring time?" Answer: it is a hardware timer with a fixed clock source, so it is accurate and does not depend on compiler optimization.

#### AI generation note
Create a 9-minute lesson with a split-screen view. On the left, show the C code for a test case table. On the right, show the UART output with pass/fail results. Animate the SysTick timer counting down with a clock icon. Show the assertion macro in action with a red error message. Include a performance graph showing clock cycle counts for different functions.

---

## Module 6: Finite State Machines and System Design

> **Goal:** Learn to design and implement finite state machines to model complex system behavior, and apply a structured design process to embedded projects.

---

### Chapter 6.1 — Finite State Machines in Embedded Systems

#### Learning objectives
- Define a finite state machine (FSM) and its components: states, inputs, outputs, and transitions.
- Draw state transition diagrams for simple systems.
- Implement an FSM in C using a switch statement and a state variable.
- Explain the difference between a Moore machine and a Mealy machine.

#### Detailed lesson content

A finite state machine (FSM) is a mathematical model of computation that describes a system with a finite number of states. At any moment, the system is in one of its states. When an input arrives, the system transitions to a new state and may produce an output. FSMs are one of the most powerful tools in embedded systems because they allow you to model complex behavior in a structured, predictable way.

Every FSM has four components:
1. **States:** A finite set of conditions the system can be in. For example, a traffic light can be in one of three states: Green, Yellow, or Red.
2. **Inputs:** Events or conditions that cause the system to change state. For example, a timer expiring or a button being pressed.
3. **Transitions:** Rules that define which new state to enter when an input arrives in a given state. For example, "If in Green state and timer expires, go to Yellow state."
4. **Outputs:** Actions or signals produced when entering a state or when a transition occurs.

There are two types of FSMs. A **Moore machine** produces outputs based only on the current state. A **Mealy machine** produces outputs based on both the current state and the current input. In embedded systems, Moore machines are more common because they are easier to reason about: the output is determined solely by the state, and you can see the state by looking at the outputs.

To design an FSM, you first draw a **state transition diagram**. This is a visual representation of the states and transitions. States are drawn as circles, and transitions are drawn as arrows labeled with the input that causes the transition. Here is the state diagram for a simple traffic light:

```
      +--------+    timer    +---------+    timer    +-------+
      |  GREEN | ---------> |  YELLOW | ---------> |  RED  |
      +--------+            +---------+            +-------+
         ^                                              |
         |                                              |
         +------------------ timer ---------------------+
```

In this diagram, the traffic light starts in the Green state. When a timer expires, it transitions to Yellow. When the timer expires again, it transitions to Red. When the timer expires a third time, it transitions back to Green.

To implement an FSM in C, you use a state variable (an integer or enum) and a `switch` statement. Here is the traffic light FSM in C:

```c
typedef enum { GREEN, YELLOW, RED } TrafficLightState;

TrafficLightState state = GREEN;

void trafficLightFSM(uint8_t timerExpired) {
    switch (state) {
        case GREEN:
            if (timerExpired) {
                state = YELLOW;
                setYellowLED();
            }
            break;
        case YELLOW:
            if (timerExpired) {
                state = RED;
                setRedLED();
            }
            break;
        case RED:
            if (timerExpired) {
                state = GREEN;
                setGreenLED();
            }
            break;
        default:
            state = GREEN;
            break;
    }
}
```

The key insight is that the FSM code has a very regular structure: it checks the current state, checks the input condition, and either transitions to a new state or stays in the current state. This structure makes the code easy to read, test, and modify. If you need to add a new state or transition, you add a new case to the switch statement.

A more complex FSM might have multiple inputs. For example, a vending machine FSM has inputs for "coin inserted," "button pressed," and "cancel pressed." The states represent the machine's internal condition: Idle, CoinInserted, SelectionMade, Dispensing, and ChangeReturned. Each transition depends on the current state and the input.

#### Key concepts
- Finite state machine components: states, inputs, outputs, transitions
- State transition diagrams
- Moore machine vs. Mealy machine
- Implementing FSMs in C with switch statements and state variables
- Advantages of FSMs: structured, predictable, easy to test

#### Hands-on activity
Design a state transition diagram for a simple door lock system with the following states: Locked, Unlocked, and Alarm. The inputs are: correct code entered, wrong code entered, and timeout. Draw the diagram on paper, then implement it in C. Use the LaunchPad's switches as inputs and LEDs as outputs to simulate the lock behavior.

#### Assessment idea
Given a state diagram for a simple washing machine with states Idle, Fill, Wash, Drain, and Spin, ask learners to write the corresponding C switch statement. Then ask: "Is this a Moore machine or a Mealy machine?" Answer: it depends on whether the outputs (motor on, water valve open) are determined by the state alone or by both state and input. If outputs are determined by state alone, it is a Moore machine.

#### AI generation note
Create a 10-minute animated lesson. Show the traffic light FSM as a diagram with glowing states. Animate the transitions with arrows moving between circles. Show the C code side by side with the diagram, highlighting how each arrow corresponds to a case in the switch statement. Use a real LaunchPad demo with three LEDs blinking in a traffic light pattern.

---

### Chapter 6.2 — Traffic Light, Vending Machine, and Line-Tracking Robot FSMs

#### Learning objectives
- Implement a traffic light FSM with timing and input sensing.
- Design a vending machine FSM with multiple states and inputs.
- Use FSMs to control a line-tracking robot.
- Debug an FSM by adding trace output to the UART.

#### Detailed lesson content

Real-world embedded systems often use FSMs to manage complex behavior. In this chapter, we will implement three practical FSM examples: a traffic light controller, a vending machine, and a line-tracking robot.

**Traffic Light Controller:** A real traffic light at a four-way intersection has more complexity than a simple three-state system. It must handle pedestrian buttons, emergency vehicle sensors, and timing based on time of day. For our implementation, we will add a pedestrian button that, when pressed, causes the light to transition to Yellow and then Red, regardless of the normal timing. The pedestrian button is an input that overrides the timer.

Here is the enhanced traffic light FSM:

```c
typedef enum { GREEN, YELLOW, RED, WALK } TrafficLightState;

TrafficLightState state = GREEN;
uint32_t greenTimer = 0;
uint32_t yellowTimer = 0;
uint32_t redTimer = 0;

void trafficLightFSM(uint8_t pedestrianButton, uint8_t timerExpired) {
    switch (state) {
        case GREEN:
            setGreenLED();
            clearWalkLED();
            if (pedestrianButton || timerExpired) {
                state = YELLOW;
                greenTimer = 0;
            }
            break;
        case YELLOW:
            setYellowLED();
            clearWalkLED();
            if (timerExpired) {
                state = RED;
                yellowTimer = 0;
            }
            break;
        case RED:
            setRedLED();
            if (timerExpired) {
                state = WALK;
                redTimer = 0;
            }
            break;
        case WALK:
            setWalkLED();
            if (timerExpired) {
                state = GREEN;
            }
            break;
        default:
            state = GREEN;
            break;
    }
}
```

**Vending Machine:** A vending machine FSM is a classic example of a system with multiple inputs and outputs. The states are Idle, AcceptingCoins, SelectionMade, Dispensing, and ReturningChange. The inputs are CoinInserted, ButtonPressed, CancelPressed, and ItemDispensed. The outputs are DisplayMessage, OpenDispenser, and ReturnCoins.

The key insight is that the FSM separates the state logic from the output logic. The state logic decides what to do next based on the current state and input. The output logic decides what to display or activate based on the current state. This separation makes the code easier to maintain and test.

**Line-Tracking Robot:** A line-tracking robot uses two infrared sensors to detect a black line on a white surface. The robot has three states: MovingForward, TurningLeft, and TurningRight. If both sensors see white, the robot moves forward. If the left sensor sees black, the robot turns left. If the right sensor sees black, the robot turns right. This is a reactive FSM where the state transitions are based on sensor inputs.

Debugging an FSM can be challenging because you cannot easily see the internal state. A useful technique is to add trace output to the UART that prints the current state and input every time the FSM runs:

```c
void traceFSM(uint32_t state, uint32_t input) {
    UART0_SendString("State: ");
    UART0_SendNumber(state);
    UART0_SendString(", Input: ");
    UART0_SendNumber(input);
    UART0_SendString("\r\n");
}
```

This trace output lets you verify that the FSM transitions correctly for each input sequence. You can also use a logic analyzer or oscilloscope to observe the timing of state changes relative to inputs and outputs.

#### Key concepts
- Traffic light FSM with pedestrian override
- Vending machine FSM with multiple inputs and outputs
- Line-tracking robot FSM with sensor inputs
- Separation of state logic and output logic
- FSM debugging with UART trace output

#### Hands-on activity
Build the traffic light FSM on the LaunchPad using the RGB LED (green, yellow = red + green, red) and one external switch as the pedestrian button. Implement the timing using a simple delay loop. Add UART trace output to print the state transitions. Verify that pressing the pedestrian button causes the light to change to Yellow, then Red, then Walk, then back to Green.

#### Assessment idea
Show a state transition diagram for a vending machine with an error: one arrow is missing. Ask learners to identify the missing transition and explain what would happen if the system encountered that input in that state. Then ask them to write the C code that handles the missing transition.

#### AI generation note
Create a 12-minute lesson with three demos. First, show the traffic light FSM with the LaunchPad and a breadboard. Second, show a vending machine simulation on the screen with a state diagram that highlights the current state. Third, show a line-tracking robot video (or animation). Include UART trace output scrolling on the terminal. End with a design challenge: "Add a 'Yellow Blink' state to the traffic light for late-night operation."

---

## Module 7: Serial Communication, Interrupts, and Capstone

> **Goal:** Understand advanced interfacing topics including UART communication between devices, interrupts for real-time response, and build a complete capstone project that integrates all course concepts.

---

### Chapter 7.1 — UART Communication Between Devices

#### Learning objectives
- Configure two LaunchPads to communicate via UART.
- Send and receive data packets between embedded devices.
- Implement a simple protocol for reliable communication.
- Handle errors such as frame errors and overrun errors.

#### Detailed lesson content

So far, we have used UART0 to send debug messages to a computer. But UART is also used to communicate between embedded devices. For example, you might have a sensor module that sends data to a main controller, or two microcontrollers that work together to control a robot. In this chapter, we will configure two LaunchPads to send messages to each other via UART.

The TM4C123G has multiple UART modules (UART0 through UART7). UART0 is already used for the USB debugger, so we will use UART1 for device-to-device communication. UART1 uses pins PB0 (RX) and PB1 (TX). To connect two LaunchPads, you connect the TX pin of one to the RX pin of the other, and the RX pin of one to the TX pin of the other. You also connect their grounds together. This is called a **null modem** or **crossover** connection.

The configuration of UART1 is similar to UART0, but with different register addresses and GPIO pins. After configuring the baud rate and enabling the transmitter and receiver, you can send data from one LaunchPad to the other:

```c
void UART1_SendChar(char c) {
    while ((UART1_FR_R & UART_FR_TXFF) != 0) {}
    UART1_DR_R = c;
}

char UART1_ReceiveChar(void) {
    while ((UART1_FR_R & UART_FR_RXFE) != 0) {}  // Wait for data
    return (char)(UART1_DR_R & 0xFF);
}
```

When two devices communicate, they need a **protocol** — a set of rules for how data is formatted and exchanged. A simple protocol might define a message as a start byte, a command byte, a data byte, and a checksum byte. For example, to send a command to turn an LED on, the message might be: `0xAA` (start), `0x01` (command: LED control), `0x01` (data: turn on), `0xAC` (checksum = 0xAA + 0x01 + 0x01).

The receiving device checks the start byte, verifies the checksum, and executes the command. If the checksum does not match, the message is discarded. This simple protocol catches most transmission errors.

UART errors that can occur include:
- **Frame error:** The stop bit was not detected correctly, usually due to a baud rate mismatch.
- **Overrun error:** A new byte arrived before the previous byte was read from the receive buffer.
- **Parity error:** The parity bit did not match the data (only if parity is enabled).

To detect these errors, you check the UART Error (UARTECR) register after reading the data register. If an error occurred, you can log it and request a retransmission.

#### Key concepts
- UART1 configuration for device-to-device communication
- Crossover wiring: TX to RX, RX to TX, GND to GND
- Simple communication protocol: start byte, command, data, checksum
- UART errors: frame error, overrun error, parity error
- Error handling and retransmission

#### Hands-on activity
Set up two LaunchPads to communicate via UART1. Write a program for the first LaunchPad that sends a command to toggle an LED on the second LaunchPad. Write a program for the second LaunchPad that listens for the command and toggles its LED. Add a checksum to verify message integrity. Use the UART to report successful and failed transmissions.

#### Assessment idea
Ask: "You connect two LaunchPads with UART1 but nothing is received. What are three possible causes?" Answer: (1) baud rate mismatch, (2) TX and RX not crossed (TX to TX instead of TX to RX), (3) grounds not connected. Then ask: "Why is a checksum important in a communication protocol?" Answer: it detects corrupted data caused by noise or timing errors.

#### AI generation note
Create a 10-minute lesson with two LaunchPads side by side. Show the wiring diagram with crossed TX/RX lines. Show one board sending a message and the other receiving it. Animate the protocol packet with start byte, command, data, and checksum fields. Show a corrupted packet being rejected. Include a troubleshooting flowchart for common UART communication problems.

---

### Chapter 7.2 — Interrupts and Real-Time Response

#### Learning objectives
- Explain what an interrupt is and how it enables real-time response.
- Configure the NVIC (Nested Vectored Interrupt Controller) on the ARM Cortex-M.
- Write an interrupt service routine (ISR) for a GPIO pin.
- Understand the trade-offs between polling and interrupts.

#### Detailed lesson content

In all the programs we have written so far, the microcontroller has used **polling** to check for events. The main loop repeatedly checks whether a switch is pressed, whether a timer has expired, or whether data has arrived on the UART. Polling is simple, but it has a major drawback: the processor spends most of its time checking for events that have not happened yet. If the event is rare, polling wastes CPU cycles. If the event is urgent, polling might miss it because the processor was busy doing something else.

An **interrupt** is a hardware signal that tells the processor to stop what it is doing and handle an urgent event. When an interrupt occurs, the processor saves its current state, jumps to a special function called an **Interrupt Service Routine (ISR)**, executes the ISR, and then returns to where it left off. Interrupts enable **real-time response** because the processor reacts to events immediately, without waiting for the main loop to check.

The ARM Cortex-M4F has a sophisticated interrupt system called the **Nested Vectored Interrupt Controller (NVIC)**. The NVIC supports up to 240 interrupts, with 16 priority levels. Interrupts can be nested, meaning a higher-priority interrupt can interrupt a lower-priority ISR. This is essential for systems where some events are more urgent than others. For example, a motor emergency stop should have higher priority than a user button press.

To configure an interrupt, you must:
1. Enable the interrupt in the peripheral (e.g., the GPIO port).
2. Enable the interrupt in the NVIC.
3. Set the priority of the interrupt (optional, defaults to priority 0).
4. Write the ISR function with the correct name and attribute.

Here is an example of configuring a falling-edge interrupt on GPIO Port F pin 4 (SW1 on the LaunchPad):

```c
#define NVIC_EN0_R          (*((volatile uint32_t *)0xE000E100))
#define NVIC_PRI7_R         (*((volatile uint32_t *)0xE000E41C))
#define GPIO_PORTF_IS_R     (*((volatile uint32_t *)0x40025404))
#define GPIO_PORTF_IBE_R    (*((volatile uint32_t *)0x40025408))
#define GPIO_PORTF_IEV_R    (*((volatile uint32_t *)0x4002540C))
#define GPIO_PORTF_IM_R     (*((volatile uint32_t *)0x40025410))
#define GPIO_PORTF_ICR_R    (*((volatile uint32_t *)0x4002541C))

volatile uint32_t switchCount = 0;

void GPIOF_Handler(void) {
    // Check if PF4 caused the interrupt
    if (GPIO_PORTF_RIS_R & 0x10) {
        switchCount++;
        // Clear the interrupt flag for PF4
        GPIO_PORTF_ICR_R |= 0x10;
    }
}

void GPIOF_InitInterrupt(void) {
    // Disable interrupts during configuration
    GPIO_PORTF_IM_R &= ~0x10;
    // Configure PF4 for falling-edge trigger (button press)
    GPIO_PORTF_IS_R &= ~0x10;   // Edge-sensitive
    GPIO_PORTF_IBE_R &= ~0x10;  // Not both edges
    GPIO_PORTF_IEV_R &= ~0x10;  // Falling edge
    // Clear any previous interrupt
    GPIO_PORTF_ICR_R |= 0x10;
    // Enable interrupt for PF4
    GPIO_PORTF_IM_R |= 0x10;
    // Enable Port F interrupt in NVIC (interrupt number 30)
    NVIC_EN0_R |= (1 << 30);
    // Set priority (lower number = higher priority)
    NVIC_PRI7_R = (NVIC_PRI7_R & 0xFF00FFFF) | 0x00A00000;
}
```

The ISR is named `GPIOF_Handler` because the vector table expects specific names for each interrupt. In the ARM Cortex-M, the vector table is a list of function pointers at the beginning of flash memory. The entry for interrupt 30 (GPIO Port F) points to the `GPIOF_Handler` function. When the interrupt occurs, the processor looks up this address and jumps to it.

After the ISR runs, it must **clear the interrupt flag** by writing to the Interrupt Clear (GPIOICR) register. If the flag is not cleared, the interrupt will fire again immediately, causing an infinite loop of interrupts.

The trade-offs between polling and interrupts are important to understand. Polling is simpler, more predictable, and easier to debug. Interrupts are more responsive, more efficient, and enable the processor to sleep when there is no work to do. For events that happen infrequently but require fast response (like a button press or an emergency stop), interrupts are better. For events that happen continuously and predictably (like a timer tick), polling is often sufficient.

#### Key concepts
- Interrupts vs. polling
- NVIC and interrupt priorities
- Interrupt configuration: edge-triggered, level-triggered, falling-edge, rising-edge
- ISR (Interrupt Service Routine) and vector table
- Clearing interrupt flags
- Trade-offs: simplicity vs. responsiveness

#### Hands-on activity
Write a program that uses an interrupt on PF4 to count button presses. The main loop should do nothing but sleep in a low-power mode. The ISR increments a counter and toggles an LED. Use the UART to print the count every 5 seconds. Compare the CPU usage with a polling version that checks the button in the main loop.

#### Assessment idea
Ask: "What happens if an ISR does not clear the interrupt flag before returning?" Answer: the interrupt will fire again immediately, causing an infinite loop of interrupts and potentially crashing the system. Then ask: "Why is it dangerous to use `delay()` inside an ISR?" Answer: delays block the processor and prevent higher-priority interrupts from running, which can cause missed deadlines.

#### AI generation note
Create a 10-minute lesson with animated timing diagrams. Show the main loop running, then an interrupt signal arriving. Animate the processor saving its state, jumping to the ISR, executing it, and returning. Show the NVIC priority levels as a stack of interrupt levels. Include a side-by-side comparison of polling (processor busy-waiting) vs. interrupts (processor sleeping). Use a real LaunchPad demo with a button press lighting an LED via interrupt.

---

### Chapter 7.3 — Capstone Project: Building a Complete Embedded System

#### Learning objectives
- Design a complete embedded system from requirements to implementation.
- Integrate GPIO, UART, FSM, and interrupt concepts into a single project.
- Follow a structured design and development process.
- Test, debug, and document the final system.

#### Detailed lesson content

The capstone project is the culmination of everything you have learned in this course. You will design, build, and test a complete embedded system that integrates multiple hardware and software components. The recommended project is a **Smart Home Controller** that combines all the concepts from the course.

**Project Requirements:**
1. The system has two user buttons (input) and an RGB LED (output).
2. Button 1 toggles between three modes: Security, Lighting, and Climate.
3. In Security mode, Button 2 arms and disarms the system. When armed, the LED is red. When disarmed, the LED is green. If the system is armed and a simulated intrusion is detected (via another switch or a timer), the LED blinks red and a message is sent via UART.
4. In Lighting mode, Button 2 cycles through LED colors: red, green, blue, yellow, cyan, magenta, white.
5. In Climate mode, the LED brightness changes based on a simulated temperature reading (using a potentiometer or a timer-based simulation). The UART sends temperature readings every 2 seconds.
6. The system uses an FSM to manage the three modes and their sub-states.
7. The system uses interrupts for button presses (debounced in software) and uses the main loop for periodic tasks like UART output and sensor reading.

**Design Process:**
1. **Requirements:** Write a clear list of what the system must do.
2. **Architecture:** Draw a block diagram showing the hardware components (LaunchPad, switches, LED) and the software components (FSM, UART, interrupts).
3. **State Diagram:** Draw the FSM state diagram showing all modes, sub-states, and transitions.
4. **Implementation:** Write the C code, starting with initialization, then the FSM, then the ISRs, then the main loop.
5. **Testing:** Test each mode independently, then test all transitions between modes. Use the UART to log state changes and errors.
6. **Debugging:** If a mode does not work, use functional debugging (dump state variables to UART) and the SysTick timer to measure timing.
7. **Documentation:** Write a brief report describing the system, how it works, and any challenges you faced.

**Implementation Tips:**
- Use a global `systemState` variable for the FSM state.
- Use an enum for the modes: `typedef enum { SECURITY, LIGHTING, CLIMATE } SystemMode;`
- Use a `volatile` flag for button presses that is set in the ISR and read in the main loop.
- Use modular functions: `initHardware()`, `runFSM()`, `sendStatus()`, `readSensor()`.
- Keep ISRs short: set a flag and return. Do the heavy work in the main loop.

**Alternative Capstone Projects:**
- **Digital Piano:** Use the UART to receive key presses, generate tones using PWM (if available), and implement a simple sequencer.
- **Autonomous Robot:** Use two distance sensors and an FSM to navigate a simple course (steer left, steer right, go straight).
- **Handheld Video Game:** Implement a simple game (like Pong or Snake) using switches for input and LEDs or a simple display for output.

#### Key concepts
- System design process: requirements, architecture, state diagram, implementation, testing, debugging, documentation
- Integration of GPIO, UART, FSM, and interrupts
- Modular design and function separation
- ISR design: keep it short, use flags
- Testing and debugging strategies
- Documentation and presentation

#### Hands-on activity
Complete the capstone project over the course of one week. Start with the requirements and state diagram, then implement the hardware and software incrementally. Test each mode before adding the next. Use the UART to log your progress and debug any issues. When finished, record a short video demonstrating all three modes and their transitions.

#### Assessment idea
The capstone project is graded using a rubric that includes: (1) functionality — does the system meet all requirements? (2) code quality — is the code organized, commented, and readable? (3) FSM design — is the state diagram clear and correct? (4) debugging — does the student demonstrate effective debugging techniques? (5) documentation — is the report clear and complete?

#### AI generation note
Create a 15-minute capstone project walkthrough video. Show the project requirements, the state diagram being drawn, the code being written in the IDE, and the final system running on the LaunchPad. Use a split screen to show the hardware and the UART output simultaneously. Include a time-lapse of the breadboard wiring. End with a checklist of deliverables and a grading rubric.

---

## Final Examination and Answer Key

### Section A: Multiple Choice (10 questions, 2 points each)

1. What is the primary difference between a microcontroller and a general-purpose computer?
   - A) A microcontroller is faster.
   - B) A microcontroller is designed for a specific, dedicated task. ✓
   - C) A microcontroller has more memory.
   - D) A microcontroller uses a different programming language.

2. What is the purpose of the `volatile` keyword when accessing hardware registers?
   - A) It makes the variable read-only.
   - B) It tells the compiler not to optimize away reads or writes. ✓
   - C) It prevents the variable from being modified by interrupts.
   - D) It allocates the variable in flash memory.

3. Ohm's Law states that V = I × R. If a resistor of 330 Ω is connected to 3.3V, what is the current?
   - A) 1 mA
   - B) 10 mA ✓
   - C) 100 mA
   - D) 1 A

4. What is a floating input?
   - A) A pin connected to a voltage divider.
   - B) A pin that is not connected to either power or ground. ✓
   - C) A pin connected to an analog sensor.
   - D) A pin that outputs a random voltage.

5. What does the bitwise operation `register |= (1 << 3)` do?
   - A) Clears bit 3.
   - B) Sets bit 3. ✓
   - C) Toggles bit 3.
   - D) Reads bit 3.

6. Which register must be configured before using a GPIO port on the TM4C123G?
   - A) UARTCTL
   - B) NVIC_EN0_R
   - C) RCGCGPIO ✓
   - D) SysTick CURRENT

7. In a Moore state machine, the outputs depend on:
   - A) The current state and the current input.
   - B) The current state only. ✓
   - C) The previous state only.
   - D) The transition condition.

8. What is the purpose of a checksum in a communication protocol?
   - A) To encrypt the data.
   - B) To detect data corruption. ✓
   - C) To compress the data.
   - D) To route the data.

9. Why should an ISR be kept short?
   - A) To save stack space.
   - B) To prevent blocking higher-priority interrupts. ✓
   - C) To reduce power consumption.
   - D) To avoid using the UART.

10. What is the most common cause of a stack overflow in embedded systems?
    - A) Too many global variables.
    - B) Too many function calls or large local arrays. ✓
    - C) Not enough flash memory.
    - D) A missing interrupt handler.

### Section B: Short Answer (5 questions, 4 points each)

1. **Explain the difference between Harvard and Von Neumann architectures.**
   Answer: The Harvard architecture has separate buses for instructions and data, allowing simultaneous access. The Von Neumann architecture shares a single bus for both instructions and data, which is simpler but can create a bottleneck. The ARM Cortex-M uses a modified Harvard architecture.

2. **Describe the steps required to configure a GPIO pin as a digital output on the TM4C123G.**
   Answer: (1) Enable the clock for the GPIO port by setting the corresponding bit in `SYSCTL_RCGCGPIO_R`. (2) Set the direction bit in `GPIODIR` to 1 (output). (3) Enable the digital function by setting the bit in `GPIODEN`. (4) Write to the data register to control the output.

3. **What is switch bounce, and how can it be eliminated in software?**
   Answer: Switch bounce is the rapid oscillation of a mechanical switch's contacts when pressed or released. It can be eliminated in software by reading the switch, waiting a short time (typically 10–50 ms), and reading it again. If the reading is stable, accept it. Alternatively, use a counter-based debounce algorithm that requires the switch to remain in the same state for a minimum number of consecutive reads.

4. **Write a C function that toggles bit 5 of a 32-bit register without changing the other bits.**
   Answer: `void toggleBit5(uint32_t *reg) { *reg ^= (1 << 5); }`

5. **Explain why dynamic memory allocation (`malloc`/`free`) is generally avoided in embedded bare-metal programming.**
   Answer: Dynamic memory allocation can cause memory fragmentation, where the heap becomes divided into small, unusable blocks. It also has unpredictable execution time, which is problematic for real-time systems. Additionally, if `malloc` fails to allocate memory, the program may crash or behave unexpectedly. In embedded systems, it is safer to use fixed-size arrays and global variables.

### Section C: Code Analysis (3 questions, 5 points each)

1. **Analyze the following code. What does it do, and what is the potential problem?**
   ```c
   void delay(uint32_t count) {
       uint32_t i;
       for (i = 0; i < count; i++) {}
   }
   ```
   Answer: The function creates a busy-wait delay by looping `count` times. The potential problem is that the compiler may optimize away the entire loop because `i` is not used after the loop. The fix is to declare `i` as `volatile`: `volatile uint32_t i;`.

2. **The following code is supposed to blink the red LED on PF1. Identify and fix the bugs.**
   ```c
   int main(void) {
       GPIO_PORTF_DIR_R |= 0x02;
       GPIO_PORTF_DEN_R |= 0x02;
       while (1) {
           GPIO_PORTF_DATA_R |= 0x02;
           for (volatile uint32_t i = 0; i < 100000; i++) {}
           GPIO_PORTF_DATA_R &= ~0x02;
           for (volatile uint32_t i = 0; i < 100000; i++) {}
       }
   }
   ```
   Answer: Bug 1: The clock for Port F is not enabled (`SYSCTL_RCGCGPIO_R |= 0x20;` is missing). Bug 2: The code does not wait for the clock to stabilize after enabling it. Fix: Add `SYSCTL_RCGCGPIO_R |= 0x20;` and wait with `while ((SYSCTL_RCGCGPIO_R & 0x20) == 0) {}` before configuring the port.

3. **The following FSM has a missing transition. Identify the missing transition and write the code to handle it.**
   ```c
   typedef enum { IDLE, RUNNING, PAUSED } State;
   State state = IDLE;

   void fsm(uint8_t start, uint8_t stop, uint8_t pause) {
       switch (state) {
           case IDLE:
               if (start) state = RUNNING;
               break;
           case RUNNING:
               if (pause) state = PAUSED;
               break;
           case PAUSED:
               if (start) state = RUNNING;
               break;
       }
   }
   ```
   Answer: The missing transition is from `RUNNING` to `IDLE` when `stop` is pressed. The fix is to add `if (stop) state = IDLE;` inside the `RUNNING` case, and also from `PAUSED` to `IDLE` when `stop` is pressed. The corrected `RUNNING` case should be:
   ```c
   case RUNNING:
       if (stop) state = IDLE;
       else if (pause) state = PAUSED;
       break;
   ```
   And the `PAUSED` case should be:
   ```c
   case PAUSED:
       if (stop) state = IDLE;
       else if (start) state = RUNNING;
       break;
   ```

### Section D: Practical Problem (10 points)

**Design a system that implements a simple door alarm using the LaunchPad.**

Requirements:
- The system has a door sensor (simulated by a switch on PF4) and a status LED (PF2).
- When the system is first powered on, it is in the DISARMED state, and the LED is green.
- Pressing a button (PF0) toggles between ARMED and DISARMED states.
- In the ARMED state, the LED is red.
- If the door sensor is triggered while in the ARMED state, the LED blinks red rapidly, and a message "ALARM!" is sent via UART0.
- The alarm continues until the button is pressed to disarm the system.

**Answer:**

```c
#include <stdint.h>

#define SYSCTL_RCGCGPIO_R   (*((volatile uint32_t *)0x400FE608))
#define GPIO_PORTF_DIR_R    (*((volatile uint32_t *)0x40025400))
#define GPIO_PORTF_DEN_R    (*((volatile uint32_t *)0x4002551C))
#define GPIO_PORTF_PUR_R    (*((volatile uint32_t *)0x40025510))
#define GPIO_PORTF_DATA_R   (*((volatile uint32_t *)0x400253FC))

#define RED_LED     0x02  // PF1
#define BLUE_LED    0x04  // PF2
#define GREEN_LED   0x08  // PF3
#define BUTTON      0x10  // PF4 (SW1)
#define DOOR_SENSOR 0x01  // PF0 (SW2)

typedef enum { DISARMED, ARMED, ALARM } State;
State state = DISARMED;

void delay(volatile uint32_t count) {
    while (count--) {}
}

void UART0_Init(void);       // Assume implemented from Chapter 4.3
void UART0_SendString(char *); // Assume implemented from Chapter 4.3

void setLED(uint32_t color) {
    GPIO_PORTF_DATA_R &= ~(RED_LED | GREEN_LED | BLUE_LED);
    GPIO_PORTF_DATA_R |= color;
}

int main(void) {
    // Enable clock for Port F
    SYSCTL_RCGCGPIO_R |= 0x20;
    while ((SYSCTL_RCGCGPIO_R & 0x20) == 0) {}

    // Configure outputs: PF1, PF2, PF3
    GPIO_PORTF_DIR_R |= (RED_LED | BLUE_LED | GREEN_LED);
    // Configure inputs: PF0, PF4
    GPIO_PORTF_DIR_R &= ~(DOOR_SENSOR | BUTTON);
    // Enable digital function for all used pins
    GPIO_PORTF_DEN_R |= (RED_LED | BLUE_LED | GREEN_LED | DOOR_SENSOR | BUTTON);
    // Enable pull-up for PF0 and PF4
    GPIO_PORTF_PUR_R |= (DOOR_SENSOR | BUTTON);

    UART0_Init();

    uint8_t lastButton = 0;
    uint32_t alarmBlink = 0;

    while (1) {
        uint8_t button = (GPIO_PORTF_DATA_R & BUTTON) == 0;  // Active low
        uint8_t door = (GPIO_PORTF_DATA_R & DOOR_SENSOR) == 0;  // Active low

        // Button press detection (simple)
        if (button && !lastButton) {
            delay(10000);  // Simple debounce
            if (state == DISARMED) {
                state = ARMED;
            } else {
                state = DISARMED;
            }
        }
        lastButton = button;

        // FSM
        switch (state) {
            case DISARMED:
                setLED(GREEN_LED);
                if (door) {
                    // Door open while disarmed — no alarm
                }
                break;
            case ARMED:
                setLED(RED_LED);
                if (door) {
                    state = ALARM;
                    UART0_SendString("ALARM!\r\n");
                }
                break;
            case ALARM:
                alarmBlink++;
                if (alarmBlink & 0x1000) {
                    setLED(RED_LED);
                } else {
                    setLED(0);
                }
                // Alarm continues until button is pressed (handled above)
                break;
        }
    }
}
```

---

## Course Conclusion

Congratulations on completing Embedded Systems Essentials. You have learned the fundamentals of embedded computing, from the ARM Cortex-M processor architecture to C programming for hardware registers, from building circuits on a breadboard to designing finite state machines that control real-world behavior. You can now write programs that directly manipulate hardware, read switches and sensors, control LEDs and motors, and communicate with other devices using serial protocols.

The skills you have gained are the foundation of a career in embedded systems engineering, IoT development, robotics, and hardware design. Whether you are building a smart home device, a medical instrument, an automotive control system, or a wearable fitness tracker, the principles you learned in this course — register-level programming, bit manipulation, real-time response, and structured design — will serve you every day.

To continue your learning, consider the following next steps:
- **Explore the advanced topics** from the second part of the UT Austin course (UT.6.20x): interrupts in depth, timers, PWM, ADC, DAC, and wireless communication.
- **Build more projects** with the LaunchPad, such as a digital oscilloscope, a motor controller, or a data logger.
- **Learn about real-time operating systems (RTOS)** such as FreeRTOS, which add multitasking and scheduling to embedded systems.
- **Study the ARM Cortex-M reference manual** to understand the processor in greater detail, including the memory protection unit (MPU), the floating-point unit (FPU), and the debug interface.
- **Contribute to open-source embedded projects** on GitHub to gain experience with large codebases and industry practices.

Remember: embedded systems are everywhere, and the world needs engineers who can bridge the gap between software and hardware. You are now one of them.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
