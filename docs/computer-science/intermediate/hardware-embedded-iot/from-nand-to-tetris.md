# Syllabus: From Nand to Tetris

> **Course ID:** `from-nand-to-tetris`
> **Title:** From Nand to Tetris
> **Provider:** Hebrew University / Coursera
> **Platform:** Cohortia
> **Level:** Intermediate
> **Type:** Course
> **Duration:** 12–14 weeks (self-paced, ~10–12 hours/week)
> **Cost:** Included with Cohortia
> **URL:** Cohortia course page (original reference: https://www.nand2tetris.org/)
> **Certification:** Cohortia Certificate of Completion
> **Category:** Computer Science
> **Subcategory:** Hardware, Embedded & IoT
> **Skills:** Boolean logic, digital logic design, logic gates, combinational logic, sequential logic, flip-flops, registers, ALU, CPU design, computer architecture, machine language, assembly, assembler, virtual machine, stack-based computing, compiler construction, lexing, parsing, code generation, high-level language design, operating system fundamentals, memory management, I/O handling, Jack programming language, hardware description language (HDL), simulation
> **Source catalog:** `docs/computer-science/catalog-courses-by-subcategory.json`

> **Ownership & attribution note:** This course is curated, rebuilt, and delivered by **Cohortia**. The original subject matter and public references are drawn from the Nand2Tetris project by Noam Nisan and Shimon Schocken at the Hebrew University of Jerusalem. Cohortia does not claim sole ownership of any underlying third-party source material; we restructure, expand, and present the content as part of the Cohortia learning experience.

---

## Course Overview

What if you could build a complete, working computer from the ground up — starting with nothing but a single type of logic gate (the Nand gate) and ending with a functioning operating system that can run programs written in a high-level language? That is the audacious promise of "From Nand to Tetris," a course that takes you on the most extraordinary journey in computer science: constructing a general-purpose computer system, layer by layer, from absolute first principles.

This course is not merely an introduction to computer architecture or a survey of systems topics. It is a hands-on, build-it-yourself expedition through the entire computing stack. You will begin by learning that every digital device — from a microwave oven to a supercomputer — is built from a single primitive: the Nand gate. From this humble starting point, you will construct increasingly complex building blocks: logic gates, arithmetic units, memory systems, processors, assemblers, virtual machines, compilers, and finally an operating system. By the end, you will have built a computer that can run Tetris — or any other program you choose to write.

The course is divided into two major parts. **Part 1: Hardware** takes you from Nand gates to a working computer. You will design chips using a Hardware Description Language (HDL), simulate them, and watch your computer come to life. **Part 2: Software** takes you from machine language to a high-level language and its compiler, culminating in a simple operating system. Along the way, you will demystify every layer of abstraction that makes modern computing possible.

This course is designed for intermediate learners who have some programming experience. No prior knowledge of hardware, electronics, or digital logic is required — everything is built from first principles. What you need is curiosity, persistence, and a willingness to build things yourself. By the end of this course, you will never look at a computer the same way again. You will understand not just *how* computers work, but *why* they are designed the way they are. You will see the beauty in the stack of abstractions that turns silicon and electricity into the digital world we inhabit.

**Prerequisites:**
- Basic programming experience in any language (C, Python, Java, etc.). You should understand variables, loops, conditionals, and functions.
- Familiarity with basic algebra and binary numbers (though both are reviewed in the course).
- No prior knowledge of hardware, digital logic, or computer architecture is assumed.

**Textbook:**
- *The Elements of Computing Systems* (Second Edition) by Noam Nisan and Shimon Schocken (MIT Press, 2021). Known as "Nand2Tetris," this book is the companion to the course and contains all the projects, specifications, and explanations.

---

## Syllabus Structure

| Module | Theme | Chapters |
|--------|-------|----------|
| 1 | Boolean Logic and Logic Gates | 6 |
| 2 | Combinational and Sequential Logic | 6 |
| 3 | Computer Architecture: CPU and Memory | 7 |
| 4 | Machine Language and Assembler | 6 |
| 5 | Virtual Machine I: Stack Arithmetic | 5 |
| 6 | Virtual Machine II: Program Control | 5 |
| 7 | Compiler: Syntax Analysis and Code Generation | 7 |
| 8 | Operating System and Integration | 6 |

**Total:** 8 modules, 48 chapters

---

## Module 1: Boolean Logic and Logic Gates

> **Goal:** Build the foundational digital logic layer of the computer from a single primitive gate: Nand.

---

### Chapter 1.1 — The Nand Gate: The Universal Primitive

#### Learning objectives
- Understand that all digital logic can be constructed from a single gate: Nand.
- Describe the truth table and behavior of the Nand gate.
- Explain why Nand is a universal gate and how it can implement any Boolean function.
- Build basic logic gates (Not, And, Or, Xor) using only Nand gates.

#### Detailed lesson content

The entire digital world — every computer, smartphone, calculator, and microprocessor — is built from a single type of logic gate. That gate is the **Nand** gate (Not-And). The Nand gate is one of several logic gates that form the foundation of digital electronics, but it has a remarkable property: it is a **universal gate**. This means that any Boolean function, no matter how complex, can be implemented using only Nand gates. This is not merely an academic curiosity — it is the practical reality of how modern integrated circuits are manufactured. By standardizing on a single type of gate, chip fabrication becomes simpler, more reliable, and more cost-effective.

**What is the Nand gate?**

A Nand gate has two inputs and one output. Its behavior is defined by the following truth table:

| Input A | Input B | Output (A Nand B) |
|---------|---------|-------------------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

The Nand gate outputs 0 (false) only when both inputs are 1 (true). In all other cases, it outputs 1. This is the negation of the And gate: `A Nand B = NOT (A AND B)`.

**Why Nand is universal:**

A gate is universal if it can be used to implement any other Boolean function. The Nand gate is universal because:
1. We can build a **Not** gate from a Nand gate by connecting both inputs together:
   ```
   Not(x) = Nand(x, x)
   ```
   If x = 0, Nand(0, 0) = 1. If x = 1, Nand(1, 1) = 0. This is exactly the Not function.

2. We can build an **And** gate by inverting the output of a Nand gate:
   ```
   And(x, y) = Not(Nand(x, y)) = Nand(Nand(x, y), Nand(x, y))
   ```

3. We can build an **Or** gate using De Morgan's laws:
   ```
   Or(x, y) = Not(And(Not(x), Not(y))) = Nand(Nand(x, x), Nand(y, y))
   ```

4. We can build an **Xor** gate:
   ```
   Xor(x, y) = Or(And(x, Not(y)), And(Not(x), y))
   ```
   This can be expanded entirely into Nand gates.

Since any Boolean function can be expressed as a combination of Not, And, and Or operations, and since these can all be built from Nand gates, any Boolean function can be built from Nand gates alone. This is the theoretical foundation of digital electronics.

**Physical implementation:**

In practice, a Nand gate is implemented using transistors (typically CMOS: Complementary Metal-Oxide-Semiconductor). A CMOS Nand gate uses four transistors: two PMOS (pull-up) transistors and two NMOS (pull-down) transistors. When both inputs are high, the NMOS transistors conduct, pulling the output to ground (0). When either input is low, the corresponding PMOS transistor conducts, pulling the output to the supply voltage (1). The actual physics of transistor operation is beyond the scope of this course, but the key insight is that transistors are physical switches that implement the logical behavior we have described.

**Hardware Description Language (HDL):**

In this course, we will not build physical circuits. Instead, we will use a **Hardware Description Language (HDL)** to design chips at the logical level. HDL allows us to specify the behavior of a chip by describing how its output pins are computed from its input pins. The Nand gate is provided as a primitive in our HDL. Every other chip we build will be constructed from Nand gates and the chips we have already built.

A simple HDL specification for a Not gate built from Nand:
```hdl
CHIP Not {
    IN in;
    OUT out;

    PARTS:
    Nand(a=in, b=in, out=out);
}
```

This says: "To build a Not chip, use one Nand gate. Connect the input `in` to both inputs of the Nand gate. The output of the Nand gate is the output of the Not chip."

**The beauty of the approach:**

The Nand2Tetris approach is elegant because it demonstrates that complexity emerges from simplicity. A computer with billions of transistors is, at its deepest level, just a vast network of Nand gates. Each layer of abstraction — gates, chips, ALU, CPU, computer — hides the complexity of the layer below while providing a new set of capabilities. This is the essence of computer science: building powerful abstractions from simple primitives.

#### Key concepts
- Nand gate truth table and behavior
- Universal gate: any Boolean function can be built from Nand
- Building Not, And, Or, Xor from Nand gates
- De Morgan's laws and Boolean algebra
- CMOS transistor implementation (brief overview)
- Hardware Description Language (HDL) as a design tool
- Chip abstraction: chips as black boxes with input/output pins
- The power of abstraction layers in computing

#### Hands-on activity
Build the following chips using only Nand gates in the Nand2Tetris HDL:
1. **Not** gate: `Not(x) = Nand(x, x)`
2. **And** gate: `And(x, y) = Not(Nand(x, y))`
3. **Or** gate: `Or(x, y) = Nand(Not(x), Not(y))`
4. **Xor** gate: Build using And, Or, and Not gates, then expand to use only Nand gates.

For each chip, write the HDL specification, test it with a supplied test script, and verify the truth table. Use the Nand2Tetris Hardware Simulator to load your HDL files and run the tests. The simulator will compare your chip's output against the expected truth table and report any discrepancies.

#### Assessment idea
Ask: "Why is the Nand gate called a universal gate, and how does this property make chip manufacturing more efficient?" Answer: A universal gate is one that can be used to implement any Boolean function. The Nand gate is universal because any Boolean function can be expressed as a combination of Nand operations. This makes chip manufacturing more efficient because fabricating a single type of gate (Nand) is simpler than fabricating multiple types (And, Or, Not, Xor, etc.). The manufacturing process can be optimized for one gate type, reducing defects and improving yield. Additionally, the layout of Nand gates on silicon can be standardized, making the design process more systematic. In modern VLSI design, standard cell libraries do include multiple gate types for efficiency, but conceptually, the universality of Nand demonstrates that complexity arises from simplicity. Then ask: "How many Nand gates are needed to implement an Xor gate, and what is the significance of this number?" Answer: An Xor gate requires 4 Nand gates if built directly (using the formula Xor(a, b) = Nand(Nand(a, Nand(a, b)), Nand(b, Nand(a, b)))). If built from And, Or, and Not gates (And needs 2 Nands, Or needs 3 Nands, Not needs 1 Nand), the naive implementation would require more. The direct 4-Nand implementation is more efficient. This demonstrates an important principle in digital design: different implementations of the same logical function can have very different costs in terms of gate count, delay, and area. Optimizing these implementations is a key skill in hardware design.

#### AI generation note
Create an animated lesson showing a single Nand gate as a magical building block. Show it transforming into Not, And, Or, and Xor gates. Show the truth tables as colored lights. Show the HDL as a recipe that combines ingredients. Show the Hardware Simulator as a kitchen where recipes are tested. End with a reflection: "If you could only use one type of gate to build a computer, why would Nand be a good choice?"

---

### Chapter 1.2 — Boolean Algebra and Truth Tables

#### Learning objectives
- Manipulate Boolean expressions using the laws of Boolean algebra.
- Construct and simplify truth tables for Boolean functions.
- Apply De Morgan's laws to transform Boolean expressions.
- Understand the relationship between Boolean algebra and digital logic circuits.

#### Detailed lesson content

Boolean algebra is the mathematical language of digital logic. It was developed by George Boole in the 19th century, long before the invention of digital computers, but it turned out to be the perfect tool for describing and analyzing digital circuits. In Boolean algebra, variables can take only two values: 0 (false) and 1 (true). Operations are defined on these values, and the entire algebra is built from three basic operations: And, Or, and Not.

**Basic Boolean operations:**

- **And (∧ or ·):** The output is 1 only if both inputs are 1.
  - 0 ∧ 0 = 0
  - 0 ∧ 1 = 0
  - 1 ∧ 0 = 0
  - 1 ∧ 1 = 1

- **Or (∨ or +):** The output is 1 if at least one input is 1.
  - 0 ∨ 0 = 0
  - 0 ∨ 1 = 1
  - 1 ∨ 0 = 1
  - 1 ∨ 1 = 1

- **Not (¬ or ' or overbar):** The output is the opposite of the input.
  - ¬0 = 1
  - ¬1 = 0

**Truth tables:**

A truth table is a systematic way to enumerate all possible input combinations and their corresponding outputs. For a function with n inputs, the truth table has 2^n rows. For example, a function with 3 inputs has 8 rows.

Example: The majority function outputs 1 if at least two of its three inputs are 1.

| a | b | c | Majority(a, b, c) |
|---|---|---|-------------------|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

**Boolean identities and laws:**

1. **Identity:** x ∧ 1 = x, x ∨ 0 = x
2. **Null:** x ∧ 0 = 0, x ∨ 1 = 1
3. **Idempotent:** x ∧ x = x, x ∨ x = x
4. **Complement:** x ∧ ¬x = 0, x ∨ ¬x = 1
5. **Commutative:** x ∧ y = y ∧ x, x ∨ y = y ∨ x
6. **Associative:** (x ∧ y) ∧ z = x ∧ (y ∧ z), (x ∨ y) ∨ z = x ∨ (y ∨ z)
7. **Distributive:** x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z), x ∨ (y ∧ z) = (x ∨ y) ∧ (x ∨ z)
8. **Absorption:** x ∧ (x ∨ y) = x, x ∨ (x ∧ y) = x
9. **Double Negation:** ¬(¬x) = x
10. **De Morgan's Laws:** ¬(x ∧ y) = ¬x ∨ ¬y, ¬(x ∨ y) = ¬x ∧ ¬y

**De Morgan's Laws are particularly important** because they show how to convert between And-based and Or-based expressions. They are the key to building Or gates from Nand gates and vice versa.

**Canonical forms:**

Any Boolean function can be expressed in two canonical forms:
1. **Sum of Products (SOP):** A disjunction (Or) of conjunctions (And). Each term is a minterm (a product of all inputs, either true or negated) that corresponds to a row where the output is 1.
2. **Product of Sums (POS):** A conjunction (And) of disjunctions (Or). Each term is a maxterm (a sum of all inputs, either true or negated) that corresponds to a row where the output is 0.

For the majority function, the SOP form is:
```
Majority(a, b, c) = (¬a ∧ b ∧ c) ∨ (a ∧ ¬b ∧ c) ∨ (a ∧ b ∧ ¬c) ∨ (a ∧ b ∧ c)
```

This can be simplified using Boolean algebra to:
```
Majority(a, b, c) = (a ∧ b) ∨ (a ∧ c) ∨ (b ∧ c)
```

**Simplification and optimization:**

Boolean algebra allows us to simplify expressions, reducing the number of gates needed. For example:
```
(x ∧ y) ∨ (x ∧ ¬y) = x ∧ (y ∨ ¬y) = x ∧ 1 = x
```

This simplification shows that the expression `(x ∧ y) ∨ (x ∧ ¬y)` is equivalent to just `x`, saving two gates. In practice, we use **Karnaugh maps** (K-maps) or the **Quine-McCluskey algorithm** for systematic simplification, but the algebraic approach is sufficient for the functions we will encounter in this course.

#### Key concepts
- Boolean algebra: variables, operations, and identities
- Truth tables: systematic enumeration of all input/output combinations
- And, Or, Not operations and their truth tables
- De Morgan's laws: transforming between And and Or expressions
- Boolean identities: identity, null, idempotent, complement, commutative, associative, distributive, absorption
- Canonical forms: Sum of Products (SOP) and Product of Sums (POS)
- Minterms and maxterms
- Simplification using Boolean algebra
- Relationship between Boolean algebra and circuit design

#### Hands-on activity
For each of the following Boolean functions, construct the truth table, derive the canonical Sum of Products form, simplify the expression using Boolean algebra, and implement the simplified function using Nand gates in HDL:

1. **Mux (Multiplexer):** A 2-to-1 multiplexer has three inputs (a, b, sel) and one output. If sel = 0, output = a; if sel = 1, output = b.
   ```
   Mux(a, b, sel) = (a ∧ ¬sel) ∨ (b ∧ sel)
   ```

2. **DMux (Demultiplexer):** A 1-to-2 demultiplexer has two inputs (in, sel) and two outputs (a, b). If sel = 0, a = in and b = 0; if sel = 1, a = 0 and b = in.
   ```
   DMux(in, sel) = (a = in ∧ ¬sel, b = in ∧ sel)
   ```

3. **Majority function:** Output is 1 if at least two of three inputs are 1.

4. **Odd function (parity):** Output is 1 if an odd number of inputs are 1. Implement for 3 inputs.

For each function, test your HDL implementation using the Hardware Simulator with the provided test scripts. Compare the number of Nand gates used in the canonical form versus the simplified form.

#### Assessment idea
Ask: "Simplify the Boolean expression (x ∧ y) ∨ (x ∧ ¬y) ∨ (¬x ∧ y) using Boolean algebra, and explain what logical function it represents." Answer: (x ∧ y) ∨ (x ∧ ¬y) = x ∧ (y ∨ ¬y) = x ∧ 1 = x. Then the full expression becomes x ∨ (¬x ∧ y) = (x ∨ ¬x) ∧ (x ∨ y) = 1 ∧ (x ∨ y) = x ∨ y. So the entire expression simplifies to x ∨ y. This is the Or function. The expression is a redundant way of writing x ∨ y. This demonstrates how Boolean algebra can reveal that complex expressions are equivalent to simpler ones. Then ask: "Why are De Morgan's laws essential for implementing digital circuits using only Nand gates?" Answer: De Morgan's laws state that ¬(x ∧ y) = ¬x ∨ ¬y and ¬(x ∨ y) = ¬x ∧ ¬y. These laws allow us to convert Or operations into And operations (and vice versa) by introducing negations. Since we can implement any negation using a Nand gate (Not(x) = Nand(x, x)), De Morgan's laws give us a systematic way to convert any circuit that uses And, Or, and Not into an equivalent circuit that uses only Nand gates. For example, Or(x, y) = ¬(¬x ∧ ¬y) = Nand(Not(x), Not(y)), which is implemented entirely with Nand gates. Without De Morgan's laws, there would be no systematic way to eliminate Or operations from a circuit.

#### AI generation note
Create an animated lesson showing Boolean algebra as a puzzle game. Show truth tables as grids that light up. Show De Morgan's laws as mirrors that flip And into Or. Show simplification as a game of collapsing blocks. Show the canonical forms as building from the ground up vs. building from the top down. Show the hands-on activity as a workshop where students build circuits and test them. End with a reflection: "Why did George Boole's algebra, invented in 1854, become the foundation of digital computers a century later?"

---

### Chapter 1.3 — Combinational Logic: Multiplexers and Demultiplexers

#### Learning objectives
- Design and implement multiplexers (Mux) and demultiplexers (DMux) using logic gates.
- Build wider multiplexers (4-way, 8-way) from 2-way multiplexers.
- Understand the role of selection bits in routing data.
- Implement multi-bit versions (multi-bit Mux, multi-bit DMux) of these chips.

#### Detailed lesson content

Combinational logic is the class of digital circuits where the output depends only on the current inputs. There is no memory or state — the circuit is a pure function of its inputs. We have already built basic combinational gates (Not, And, Or, Xor). Now we will build more complex combinational chips that are essential for computer design: multiplexers and demultiplexers.

**Multiplexer (Mux):**

A multiplexer is a digital switch that selects one of several input signals and forwards it to a single output line. It is one of the most fundamental building blocks in digital design. A 2-to-1 multiplexer (Mux) has three inputs: two data inputs (a, b) and one selection input (sel). It has one output (out). The behavior is:
- If sel = 0, out = a
- If sel = 1, out = b

The Boolean expression is:
```
Mux(a, b, sel) = (a ∧ ¬sel) ∨ (b ∧ sel)
```

This can be implemented using And, Not, and Or gates, or directly using Nand gates. In HDL:
```hdl
CHIP Mux {
    IN a, b, sel;
    OUT out;

    PARTS:
    Not(in=sel, out=notSel);
    And(a=a, b=notSel, out=aAndNotSel);
    And(a=b, b=sel, out=bAndSel);
    Or(a=aAndNotSel, b=bAndSel, out=out);
}
```

**Wider multiplexers:**

A 4-way Mux selects one of four inputs using two selection bits. We can build it by combining three 2-way Muxes:
```
Mux4Way(a, b, c, d, sel[0..1]) = Mux(Mux(a, b, sel[0]), Mux(c, d, sel[0]), sel[1])
```

Similarly, an 8-way Mux selects one of eight inputs using three selection bits. It is built by combining two 4-way Muxes and one 2-way Mux. The pattern is recursive: a 2^n-way Mux can be built from two 2^(n-1)-way Muxes and one 2-way Mux.

**Demultiplexer (DMux):**

A demultiplexer is the inverse of a multiplexer. It takes one input signal and routes it to one of several output lines based on a selection input. A 1-to-2 DMux has two inputs (in, sel) and two outputs (a, b):
- If sel = 0, a = in, b = 0
- If sel = 1, a = 0, b = in

The Boolean expressions are:
```
DMux(in, sel) = (a = in ∧ ¬sel, b = in ∧ sel)
```

**Wider demultiplexers:**

A 1-to-4 DMux routes one input to one of four outputs using two selection bits. It is built from three 1-to-2 DMuxes. A 1-to-8 DMux is built from two 1-to-4 DMuxes and one 1-to-2 DMux.

**Multi-bit (bus) versions:**

In a computer, data is often processed in multi-bit buses (e.g., 16-bit or 32-bit words). We need multi-bit versions of Mux and DMux. A multi-bit Mux (Mux16) is simply 16 independent 1-bit Muxes operating in parallel, sharing the same selection bit. The HDL implementation uses arrays:
```hdl
CHIP Mux16 {
    IN a[16], b[16], sel;
    OUT out[16];

    PARTS:
    Mux(a=a[0], b=b[0], sel=sel, out=out[0]);
    Mux(a=a[1], b=b[1], sel=sel, out=out[1]);
    ...
    Mux(a=a[15], b=b[15], sel=sel, out=out[15]);
}
```

This is a direct, parallel implementation. In practice, the selection bit is broadcast to all 16 Muxes simultaneously.

**Applications of Mux and DMux:**
- **Mux:** Selecting between different data sources (e.g., choosing which register to read, selecting an ALU operation).
- **DMux:** Distributing data to different destinations (e.g., routing a value to the correct memory address, directing control signals).
- **Together:** Mux and DMux are the building blocks of data routing in a computer. They enable the CPU to select which data path to use at any given time.

#### Key concepts
- Combinational logic: output depends only on current inputs
- Multiplexer (Mux): selects one of N inputs using selection bits
- 2-way, 4-way, 8-way Mux construction from smaller Muxes
- Demultiplexer (DMux): routes one input to one of N outputs
- 1-to-2, 1-to-4, 1-to-8 DMux construction
- Multi-bit (bus) versions: Mux16, DMux16, Mux4Way16, etc.
- Data routing and selection in digital circuits
- Recursive construction of wider Mux/DMux from smaller ones

#### Hands-on activity
Build the following chips in HDL and test them with the Hardware Simulator:

1. **Mux:** 2-to-1 multiplexer (already described above).
2. **Mux16:** 16-bit version of Mux.
3. **Mux4Way16:** 4-way, 16-bit multiplexer. Selects one of four 16-bit inputs using two selection bits.
4. **Mux8Way16:** 8-way, 16-bit multiplexer. Selects one of eight 16-bit inputs using three selection bits.
5. **DMux:** 1-to-2 demultiplexer.
6. **DMux4Way:** 1-to-4 demultiplexer.
7. **DMux8Way:** 1-to-8 demultiplexer.

For each chip, draw the internal gate-level diagram (or block diagram using smaller chips) showing how it is built from simpler components. Test each chip with the provided test scripts. For the multi-bit versions, verify that the selection works correctly for all bits simultaneously.

#### Assessment idea
Ask: "A 4-way Mux is built from three 2-way Muxes. Why three and not four? Explain the structure." Answer: A 4-way Mux selects one of four inputs (a, b, c, d) using two selection bits (sel[0], sel[1]). The structure is: first, use two 2-way Muxes to select between (a, b) and between (c, d), both using sel[0]. This gives two intermediate results. Then use a third 2-way Mux to select between these two intermediate results using sel[1]. So the structure is: Mux(Mux(a, b, sel[0]), Mux(c, d, sel[0]), sel[1]). This requires 3 Muxes, not 4, because the selection is hierarchical. The first level narrows the choice from 4 to 2, and the second level narrows from 2 to 1. This is the most efficient structure. Using 4 Muxes would be redundant and would not correctly implement the selection logic. Then ask: "Why is a multi-bit Mux (like Mux16) simply 16 copies of a 1-bit Mux, rather than a more complex design?" Answer: A multi-bit Mux performs the same selection operation on each bit independently. If the selection bit is 0, every bit of output comes from the corresponding bit of input a. If the selection bit is 1, every bit comes from input b. There is no interaction between bits — each bit is selected independently. Therefore, the most straightforward and efficient implementation is 16 parallel 1-bit Muxes, all sharing the same selection bit. This is both simpler to design and faster (all bits are selected in parallel) than a more complex design that tried to process bits together. In hardware, this parallel structure is natural because gates can be replicated across the width of the bus.

#### AI generation note
Create an animated lesson showing a Mux as a railroad switch that directs a train to one of two tracks. Show a 4-way Mux as a series of switches. Show a DMux as a fork in the road. Show the multi-bit versions as parallel railroad tracks with synchronized switches. Show the recursive construction as building a large switch from smaller switches. Show the test scripts as trains traveling through the tracks to verify they take the correct path. End with a reflection: "Where in a computer would you find hundreds of Muxes working together?"

---

### Chapter 1.4 — Basic Logic Gates: And, Or, Not, Xor, and Their Multi-bit Versions

#### Learning objectives
- Implement the basic logic gates (Not, And, Or, Xor) in HDL using Nand gates.
- Build multi-bit versions (Not16, And16, Or16, Xor16) by replicating 1-bit gates.
- Understand the multi-way Or gate (Or8Way) for zero-detection.
- Verify all implementations using the Hardware Simulator and test scripts.

#### Detailed lesson content

Having built the Mux and DMux, we now return to the basic logic gates and construct their multi-bit versions. These chips are the workhorses of digital design and will be used extensively in the ALU, memory, and CPU.

**Basic 1-bit gates (already built in Chapter 1.1):**

- **Not(x):** `Nand(x, x)` — outputs the opposite of x.
- **And(x, y):** `Not(Nand(x, y))` — outputs 1 only if both inputs are 1.
- **Or(x, y):** `Nand(Not(x), Not(y))` — outputs 1 if at least one input is 1.
- **Xor(x, y):** `(x ∧ ¬y) ∨ (¬x ∧ y)` — outputs 1 if exactly one input is 1.

**Multi-bit gates:**

A multi-bit gate operates on buses (arrays of bits). For example, And16 takes two 16-bit inputs and produces a 16-bit output where each bit is the And of the corresponding input bits:
```
And16(a[0..15], b[0..15]) = out[0..15] where out[i] = a[i] ∧ b[i]
```

This is implemented by replicating the 1-bit gate 16 times:
```hdl
CHIP And16 {
    IN a[16], b[16];
    OUT out[16];

    PARTS:
    And(a=a[0], b=b[0], out=out[0]);
    And(a=a[1], b=b[1], out=out[1]);
    ...
    And(a=a[15], b=b[15], out=out[15]);
}
```

Similarly, **Or16** and **Xor16** are built by replicating Or and Xor gates across 16 bits.

**Not16:**
```hdl
CHIP Not16 {
    IN in[16];
    OUT out[16];

    PARTS:
    Not(in=in[0], out=out[0]);
    Not(in=in[1], out=out[1]);
    ...
    Not(in=in[15], out=out[15]);
}
```

**Multi-way Or (Or8Way):**

A multi-way Or gate outputs 1 if any of its inputs is 1. Or8Way takes 8 inputs and outputs 1 if at least one input is 1. This is built from a tree of 2-way Or gates:
```
Or8Way(a, b, c, d, e, f, g, h) = Or(Or(Or(a, b), Or(c, d)), Or(Or(e, f), Or(g, h)))
```

Or8Way is particularly useful for **zero-detection**: to check if a 16-bit value is zero, we can split it into two 8-bit halves and use Or8Way on each half. If both halves are all zeros, the entire value is zero.

**Why multi-bit gates are essential:**

Computers process data in words (typically 16, 32, or 64 bits). Every arithmetic operation (addition, subtraction, comparison) and every data transfer (register to register, memory to register) operates on multi-bit buses. The multi-bit gates are the primitives that make these operations possible. The ALU, which we will build in Module 2, is essentially a collection of multi-bit gates and arithmetic circuits operating in parallel.

**Testing and verification:**

Every chip built in this course must be tested. The Nand2Tetris Hardware Simulator loads your HDL file and compares its output against a test script that specifies the expected behavior for all possible input combinations. For a 16-bit gate, testing all 2^32 input combinations is impractical, so the test scripts use representative values (all zeros, all ones, alternating patterns, etc.) to verify correctness. You should also write your own test cases to exercise edge cases.

#### Key concepts
- Not, And, Or, Xor gate implementations from Nand
- Multi-bit gates: Not16, And16, Or16, Xor16
- Multi-way Or: Or8Way for zero-detection
- Bus operations: parallel processing of multi-bit words
- Gate replication as the standard technique for multi-bit versions
- Testing methodology: test scripts, edge cases, representative values
- The role of basic gates as ALU primitives

#### Hands-on activity
Build and test the following chips in HDL:
1. **Not16, And16, Or16, Xor16:** Multi-bit versions of the basic gates.
2. **Or8Way:** 8-way Or gate.
3. **Mux16, Mux4Way16, Mux8Way16:** Multi-bit multiplexers (if not already completed).
4. **DMux4Way, DMux8Way:** Wider demultiplexers (if not already completed).

For each chip, write a brief explanation of how it works and draw the internal structure. Run the test scripts and verify that all tests pass. For the multi-bit gates, create additional test cases that verify behavior with specific patterns (e.g., `0xAAAA`, `0x5555`, `0xFFFF`, `0x0000`).

#### Assessment idea
Ask: "How many Nand gates are used in the internal implementation of And16, and why is this number the same as 16 independent And gates?" Answer: Each 1-bit And gate requires 2 Nand gates (Nand followed by Not, which is another Nand). And16 contains 16 such And gates operating in parallel. Therefore, And16 uses 16 × 2 = 32 Nand gates internally. This is the same as 16 independent And gates because And16 is literally 16 independent And gates, each processing one bit of the bus. There is no sharing or optimization between bits because each bit's And operation is independent. This demonstrates the power of parallelism in digital design: we can process 16 bits simultaneously with the same latency as processing 1 bit, at the cost of 16× the area. Then ask: "How would you use Or8Way to determine if a 16-bit number is zero? Describe the circuit." Answer: To check if a 16-bit number is zero, we need to determine if all 16 bits are 0. We can split the 16-bit number into two 8-bit halves: the high byte (bits 8-15) and the low byte (bits 0-7). We apply Or8Way to each half. If the high byte is all zeros, Or8Way(high byte) = 0. If the low byte is all zeros, Or8Way(low byte) = 0. If both halves are all zeros, the entire number is zero. We can combine the two Or8Way outputs with a final Or gate: `IsZero = Not(Or(Or8Way(high), Or8Way(low)))`. If IsZero = 1, the number is zero. This circuit is efficient because it uses only two Or8Way gates and one Or gate, rather than a 16-way Or gate. We will use this exact circuit in the ALU's zero-detection logic.

#### AI generation note
Create an animated lesson showing 16-bit buses as trains with 16 cars. Show And16 as two trains passing through a gate where each car is compared. Show Or8Way as a detector that scans half the train for any occupied car. Show zero-detection as a security scan that checks if the entire train is empty. Show the test scripts as inspection checkpoints. End with a reflection: "Why do computers process 16, 32, or 64 bits at a time instead of 1 bit at a time?"

---

### Chapter 1.5 — The Hardware Description Language (HDL)

#### Learning objectives
- Understand the syntax and semantics of the Nand2Tetris HDL.
- Write HDL specifications for combinational chips.
- Use the Hardware Simulator to test and debug chips.
- Describe the internal parts of a chip using other chips as building blocks.

#### Detailed lesson content

The Hardware Description Language (HDL) is the tool we use to design digital chips in this course. It is a simple, textual language that allows us to specify the behavior of a chip by describing how its output pins are computed from its input pins using other chips as building blocks. The Nand2Tetris HDL is intentionally minimal — it has only the features needed to describe combinational and sequential logic at the gate level.

**HDL syntax:**

An HDL file describes a single chip. It has the following structure:
```hdl
CHIP ChipName {
    IN input1, input2, ...;
    OUT output1, output2, ...;

    PARTS:
    // List of internal chip instances
    ChipName1(param1=..., param2=..., out=...);
    ChipName2(...);
    ...
}
```

**Key elements:**
1. **CHIP declaration:** Names the chip being defined.
2. **IN section:** Lists the input pins (the interface to the outside world).
3. **OUT section:** Lists the output pins.
4. **PARTS section:** Lists the internal chips that make up this chip. Each line instantiates a chip and connects its pins to either the chip's inputs, outputs, or internal wires.

**Pin connections:**
- Pins are connected using the syntax `pinName=value`.
- The value can be a chip input, a chip output, or an internal wire.
- Internal wires are created implicitly by using the same name on the left side of one connection and the right side of another.

**Example: Mux in HDL:**
```hdl
CHIP Mux {
    IN a, b, sel;
    OUT out;

    PARTS:
    Not(in=sel, out=notSel);
    And(a=a, b=notSel, out=aAndNotSel);
    And(a=b, b=sel, out=bAndSel);
    Or(a=aAndNotSel, b=bAndSel, out=out);
}
```

In this example, `notSel`, `aAndNotSel`, and `bAndSel` are internal wires. They are not visible outside the chip but are used to connect the internal parts.

**Multi-bit buses:**

Buses (arrays of bits) are declared with a width in square brackets:
```hdl
CHIP And16 {
    IN a[16], b[16];
    OUT out[16];

    PARTS:
    And(a=a[0], b=b[0], out=out[0]);
    ...
    And(a=a[15], b=b[15], out=out[15]);
}
```

**Sub-busing:**

You can access sub-ranges of a bus using the syntax `busName[i..j]`:
```hdl
Mux4Way16(a=a[0..15], b=b[0..15], c=c[0..15], d=d[0..15], sel=sel[0..1], out=out[0..15]);
```

**The Hardware Simulator:**

The Hardware Simulator is a Java program that loads your HDL files and tests them against test scripts. It simulates the behavior of the chip by evaluating the logic gates for each combination of inputs specified in the test script.

**Test script format:**
```
load ChipName.hdl,
output-file ChipName.out,
compare-to ChipName.cmp,
output-list a%B3.1.3 b%B3.1.3 sel%B3.1.3 out%B3.1.3;

set a 0, set b 0, set sel 0, eval, output;
set a 0, set b 0, set sel 1, eval, output;
...
```

The test script:
1. Loads the HDL file.
2. Sets the inputs to specific values.
3. Evaluates the chip (computes the outputs).
4. Compares the outputs against the expected values in the `.cmp` file.
5. Reports any discrepancies.

**Debugging:**

When a test fails, the simulator shows the line where the output differed from the expected value. You can use the simulator's GUI to inspect the internal state of the chip — the values of all internal wires and the outputs of all internal parts. This is invaluable for debugging. Common mistakes include:
- Swapping input connections (e.g., `a=sel` instead of `a=a`).
- Forgetting to connect an output pin.
- Using the wrong internal chip.
- Naming conflicts with internal wires.

**HDL as abstraction:**

HDL enforces the principle of abstraction. Once you have built and tested a chip (e.g., Mux), you can use it as a black box in other chips without worrying about its internal implementation. This is exactly how real hardware design works: engineers design chips at one level of abstraction and use them as building blocks at the next level. The internal implementation of Mux might use 4 Nand gates or 400 — as long as it satisfies the specification, it is a valid Mux.

#### Key concepts
- HDL syntax: CHIP, IN, OUT, PARTS sections
- Pin connections and internal wires
- Multi-bit bus declarations and sub-busing
- The Hardware Simulator: loading, testing, comparing
- Test script format: load, set, eval, output, compare-to
- Debugging techniques: internal inspection, discrepancy reports
- HDL as an abstraction tool: black-box chip design
- The role of HDL in the chip design hierarchy

#### Hands-on activity
Write HDL specifications for the following chips and test them in the Hardware Simulator:
1. **Not:** Using only Nand gates.
2. **And:** Using Nand and Not gates.
3. **Or:** Using Nand and Not gates (via De Morgan's laws).
4. **Xor:** Using And, Or, and Not gates.
5. **Mux:** Using And, Or, and Not gates.
6. **DMux:** Using And and Not gates.

For each chip, write a test script that covers all possible input combinations (for 1-, 2-, and 3-input chips). Verify that the output matches the expected truth table. Experiment with the Hardware Simulator's GUI: click on the chip to expand it and see its internal parts. Trace the values of internal wires as you step through the test cases.

#### Assessment idea
Ask: "In the HDL specification of Mux, the internal wire `notSel` is used. Why can't we simply write `And(a=a, b=Not(sel), out=...)` instead of using an explicit wire?" Answer: HDL requires that every chip input be connected to a named pin or wire. The expression `Not(sel)` is not valid HDL syntax because HDL does not allow nested function calls or expressions. Each chip in the PARTS section must be a complete chip instantiation with its own output pin. The output of the Not gate must be given a name (an internal wire) so that it can be referenced by the And gate. This is a fundamental feature of HDL: it describes a circuit as a network of interconnected components, not as a sequence of expressions. Each component produces a signal that travels along a wire to other components. This reflects the physical reality of digital circuits: gates are physical devices connected by physical wires. Then ask: "What is the purpose of the `compare-to` directive in a test script, and what happens if you omit it?" Answer: The `compare-to` directive specifies a file containing the expected output for each test case. After evaluating the chip for a given set of inputs, the simulator compares the actual output against the expected output in the `.cmp` file. If they differ, the simulator reports an error and stops. If you omit `compare-to`, the simulator will still evaluate the chip and write the output to the `.out` file, but it will not perform any comparison. You would have to manually inspect the `.out` file to verify correctness. The `compare-to` directive is essential for automated testing and is the primary mechanism for verifying that your chip behaves correctly. In the Nand2Tetris projects, the `.cmp` files are provided by the course, so you can focus on building the chip, not on writing the test expectations.

#### AI generation note
Create an animated lesson showing HDL as a blueprint language. Show a CHIP declaration as a box with input and output ports. Show PARTS as components inside the box connected by wires. Show the Hardware Simulator as a factory that builds the chip from the blueprint and tests it. Show a test script as a quality control checklist. Show debugging as an X-ray vision that reveals the internal wires. Show the abstraction principle as a set of nested boxes where each box hides its internal complexity. End with a reflection: "How does HDL enforce the principle of modularity in hardware design?"

---

### Chapter 1.6 — Project 1: Building the Elementary Logic Gates

#### Learning objectives
- Complete the first project of the Nand2Tetris course.
- Build all the elementary logic gates from a single Nand primitive.
- Verify each gate using the Hardware Simulator and test scripts.
- Understand the hierarchical nature of chip design.

#### Detailed lesson content

This chapter consolidates the material from Module 1 into a single project. You will build a library of elementary logic gates that will serve as the foundation for all subsequent chips. These gates are the "standard library" of digital logic — they are simple, well-tested, and will be used as building blocks throughout the course.

**Project 1 specification:**

Build the following chips in HDL, using only the Nand gate as a primitive (and the chips you have already built):

**1-bit chips:**
1. **Not** — `out = not in`
2. **And** — `out = a and b`
3. **Or** — `out = a or b`
4. **Xor** — `out = a xor b`
5. **Mux** — `out = a if sel=0, else b`
6. **DMux** — `(a, b) = (in, 0) if sel=0, else (0, in)`

**Multi-bit chips (16-bit versions):**
7. **Not16** — bitwise Not
8. **And16** — bitwise And
9. **Or16** — bitwise Or
10. **Mux16** — 16-bit Mux

**Multi-way chips:**
11. **Or8Way** — 8-way Or
12. **Mux4Way16** — 4-way, 16-bit Mux
13. **Mux8Way16** — 8-way, 16-bit Mux
14. **DMux4Way** — 1-to-4 DMux
15. **DMux8Way** — 1-to-8 DMux

**Design methodology:**

For each chip, follow this process:
1. **Understand the specification:** Read the chip's description and truth table. Understand what it should do for every input combination.
2. **Design the logic:** Write the Boolean expression or draw the circuit diagram. Decide which simpler chips to use as building blocks.
3. **Write the HDL:** Translate the design into HDL syntax. Pay attention to pin names and internal wire names.
4. **Test the chip:** Run the test script in the Hardware Simulator. Fix any errors.
5. **Verify correctness:** Make sure the chip passes all test cases. If not, debug using the simulator's internal view.

**The hierarchy of chips:**

Project 1 establishes a hierarchy:
```
Nand (primitive)
  → Not, And, Or, Xor, Mux, DMux
    → Not16, And16, Or16, Mux16
      → Mux4Way16, Mux8Way16, DMux4Way, DMux8Way
        → Or8Way
```

Each level builds on the previous level. This is the fundamental principle of computer design: complex systems are built from simple components, and each component is tested independently before being used in larger systems. This is called **modular design** or **compositional design**.

**Why start with Nand?**

The Nand2Tetris approach deliberately starts with the Nand gate to demonstrate that everything in computing is built from a single, simple primitive. This is not how real chips are manufactured (commercial chips use optimized libraries of many gate types), but it is how the *logic* of computing works. The philosophical message is: complexity is not magic; it is the result of combining simple things in systematic ways. This principle applies not just to hardware but to software, biology, and all complex systems.

**Common pitfalls:**
- **Wrong pin names:** HDL is case-sensitive and uses exact pin names. `out` is not the same as `Out`.
- **Missing connections:** Every output pin of the chip must be connected to exactly one source. Every input pin of an internal chip must be connected to something.
- **Floating wires:** If a wire is not connected to anything, its value is undefined.
- **Circularity:** The connections must form a directed acyclic graph. You cannot have a cycle where the output of chip A feeds into the input of chip B, and the output of chip B feeds back into the input of chip A (this would be sequential logic, which we handle in Module 2).

#### Key concepts
- Project 1 as the foundation of the Nand2Tetris journey
- The complete set of elementary logic gates
- Hierarchical chip design: Nand → basic gates → multi-bit gates → multi-way gates
- Modular design and compositional verification
- The design methodology: understand, design, implement, test, verify
- Common HDL pitfalls and debugging strategies
- The philosophical significance of building complexity from simplicity
- The role of Project 1 as the standard library for all future chips

#### Hands-on activity
Complete Project 1 of the Nand2Tetris course. Build all 15 chips listed above. For each chip:
1. Write the HDL specification.
2. Test it with the provided test script.
3. Keep a log of your design decisions and any debugging steps you took.
4. Time yourself: how long does each chip take to design and test?

After completing all chips, write a reflection (1 page) on what you learned. Specifically:
- Which chips were the most challenging to design? Why?
- How did the hierarchical approach (building simple chips first) help you?
- What debugging techniques did you find most useful?
- How does this project change your understanding of what a computer is?

#### Assessment idea
Ask: "Project 1 requires you to build Mux8Way16 from smaller chips. Which chips do you need, and how many of each? Draw the hierarchy." Answer: Mux8Way16 selects one of eight 16-bit inputs using three selection bits. The hierarchy is: Mux8Way16 is built from two Mux4Way16 chips and one Mux16 chip. Each Mux4Way16 is built from three Mux16 chips. So the total hierarchy is: Mux8Way16 uses 2 Mux4Way16 + 1 Mux16 = 2 × (3 Mux16) + 1 Mux16 = 7 Mux16 chips. Each Mux16 is built from 16 Mux chips. So the complete hierarchy from the bottom is: Mux8Way16 → 7 Mux16 → 112 Mux → 448 Nand gates (since each Mux uses 4 Nand gates). This is a 4-level hierarchy. The significance is that a seemingly complex chip (selecting 1 of 8 inputs) is built from a small set of simple, well-tested components. This modularity is the key to managing complexity in hardware design. Then ask: "Why does the Nand2Tetris Hardware Simulator not allow you to use the built-in And, Or, or Xor gates in Project 1, even though they exist in the simulator's library?" Answer: The simulator restricts Project 1 to using only the Nand gate (and chips you have already built) to enforce the pedagogical principle that everything is built from a single primitive. If you could use the built-in And, Or, and Xor gates, you would miss the fundamental insight that these gates are themselves constructed from Nand gates. This restriction forces you to understand the universality of Nand and to appreciate the hierarchical nature of digital design. In later projects, the simulator relaxes this restriction and allows you to use any chip from the library, but the first project is deliberately constrained to build the foundation properly. This is similar to how a mathematics course might require you to prove theorems from axioms before allowing you to use theorems as black boxes.

#### AI generation note
Create a project walkthrough video showing the complete process for one chip (e.g., Xor). Show the specification, the truth table, the Boolean expression, the HDL code, the test script, and the simulator output. Show the hierarchy as a tree diagram. Show the debugging process for a common mistake (e.g., wrong pin connection). Show the completed project as a library of tested chips. End with a reflection: "What does it mean to say that a computer is 'just' a lot of Nand gates?"

---

## Module 2: Combinational and Sequential Logic

> **Goal:** Build the arithmetic and memory components of the computer: the ALU, registers, and RAM.

---

### Chapter 2.1 — Binary Number Representation and Two's Complement

#### Learning objectives
- Understand binary, octal, and hexadecimal number systems.
- Convert between decimal and binary representations.
- Explain two's complement representation for signed integers.
- Perform binary addition and subtraction on paper and in logic.

#### Detailed lesson content

All digital computers represent numbers using binary — a base-2 number system where each digit (bit) can be only 0 or 1. This is not a choice made by computer designers for convenience; it is a physical necessity. Transistors have two stable states (on/off, conducting/not conducting), and these states naturally map to 0 and 1. The entire edifice of digital computing rests on this binary foundation.

**Binary number system:**

In the decimal system, each digit represents a power of 10. In binary, each digit represents a power of 2:
```
Binary: 1 0 1 1 0 1
Place:  5 4 3 2 1 0
Value: 2^5 + 0 + 2^3 + 2^2 + 0 + 2^0 = 32 + 8 + 4 + 1 = 45 (decimal)
```

**Hexadecimal (base-16):**

Hexadecimal is a compact way to represent binary numbers. Each hex digit represents 4 bits:
```
Hex: 0 1 2 3 4 5 6 7 8 9 A B C D E F
Bin: 0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111
```

A 16-bit binary number can be written as four hex digits. For example, `1011010100111100` = `B53C` in hex. Hexadecimal is used extensively in programming, debugging, and hardware documentation because it is much more compact than binary while maintaining a direct mapping.

**Unsigned binary representation:**

An n-bit unsigned integer can represent values from 0 to 2^n - 1. For example, a 16-bit unsigned integer can represent 0 to 65,535.

**Signed binary representation (Two's Complement):**

Computers need to represent negative numbers as well as positive ones. The standard representation for signed integers is **two's complement**. In an n-bit two's complement system:
- The most significant bit (MSB) is the sign bit: 0 for positive, 1 for negative.
- Positive numbers are represented as in unsigned binary.
- Negative numbers are represented by inverting all bits of the positive number and adding 1.

For example, in 8-bit two's complement:
- +5 = `00000101`
- -5: invert `00000101` → `11111010`, add 1 → `11111011`

The range of n-bit two's complement is -2^(n-1) to 2^(n-1) - 1. For 16 bits: -32,768 to 32,767.

**Why two's complement?**

Two's complement is the dominant representation because it has several advantages:
1. **Single zero:** There is only one representation of zero (`00000000`). Other representations (like one's complement) have positive and negative zero.
2. **Simple arithmetic:** Addition and subtraction work the same way for signed and unsigned numbers. The same hardware adder can be used for both.
3. **Easy negation:** Negating a number requires only inverting all bits and adding 1.
4. **Range:** The range is asymmetric, but it is well-defined and easy to work with.

**Binary addition:**

Binary addition follows the same rules as decimal addition, but with only two digits:
```
  0 + 0 = 0, carry 0
  0 + 1 = 1, carry 0
  1 + 0 = 1, carry 0
  1 + 1 = 0, carry 1
```

For multi-bit addition, the carry from one bit position propagates to the next. A **full adder** takes three inputs (a, b, carry-in) and produces two outputs (sum, carry-out). We will build the full adder in the next chapter.

**Binary subtraction:**

Subtraction is performed by adding the two's complement of the subtrahend:
```
a - b = a + (-b) = a + (~b + 1)
```

Where `~b` is the bitwise complement of b. This means the same hardware adder can perform both addition and subtraction — we simply complement the second input and set the carry-in to 1.

#### Key concepts
- Binary number system: base-2, powers of 2
- Hexadecimal: base-16, compact representation of binary
- Unsigned binary: range 0 to 2^n - 1
- Two's complement: signed integer representation
- Sign bit, magnitude, and range in two's complement
- Negation in two's complement: invert and add 1
- Binary addition and carry propagation
- Binary subtraction via two's complement addition
- Advantages of two's complement: single zero, unified arithmetic, easy negation

#### Hands-on activity
1. Convert the following decimal numbers to 16-bit binary and hexadecimal: 0, 1, 255, 1024, 32767, -1, -32768, -5.
2. Perform the following binary additions by hand, showing carries:
   - `00001101 + 00000111` (13 + 7)
   - `11111111 + 00000001` (-1 + 1, in 8-bit two's complement)
   - `01111111 + 00000001` (127 + 1, observe overflow)
3. Perform subtraction using two's complement:
   - `15 - 7` in 8-bit binary
   - `-5 - 3` in 8-bit binary
4. What is the 16-bit two's complement representation of -32,768? Why is this number special?

Write a simple Python program that converts decimal to 16-bit binary and hex, and vice versa. Use it to verify your hand calculations.

#### Assessment idea
Ask: "In 16-bit two's complement, what is the decimal value of `0xFFFF`? What is the decimal value of `0x8000`? Why are these values significant?" Answer: `0xFFFF` in binary is `1111111111111111`. In two's complement, this represents -1 (all bits set to 1 is the representation of -1). `0x8000` in binary is `1000000000000000`. In two's complement, this represents -32,768, which is the most negative number representable in 16-bit signed integers. These values are significant because they represent the boundary cases of the two's complement range: `0xFFFF` is the maximum negative value (-1), and `0x8000` is the minimum representable value (-32,768). The range is asymmetric: there are 32,768 negative numbers but only 32,767 positive numbers. This asymmetry is a consequence of the two's complement representation, where the most negative number has no positive counterpart (its negation would be itself, which is mathematically incorrect). Then ask: "Why does binary subtraction use addition of the two's complement rather than a separate subtraction circuit?" Answer: Using addition of the two's complement allows the same hardware adder to perform both addition and subtraction. This simplifies the ALU design because we only need one adder circuit instead of separate adder and subtractor circuits. To compute a - b, we invert all bits of b (bitwise Not) and add 1 (which is the two's complement of b), then add a. The same hardware can also handle unsigned subtraction. This unification is a key principle in computer design: reuse hardware for multiple operations rather than building separate units. It reduces chip area, power consumption, and design complexity. The trade-off is that subtraction requires an extra step (inversion), but this is minimal compared to the cost of a separate subtractor.

#### AI generation note
Create an animated lesson showing binary numbers as rows of light bulbs. Show decimal-to-binary conversion as assigning weights to each bulb. Show two's complement as flipping all bulbs and adding one more. Show addition as combining two rows of bulbs with carries propagating like a wave. Show overflow as the leftmost bulb changing when it shouldn't. Show hex as a compact color code for groups of four bulbs. End with a reflection: "Why do computers use two's complement instead of a simpler sign-magnitude representation?"

---

### Chapter 2.2 — Half Adders, Full Adders, and the ALU

#### Learning objectives
- Design and implement a half adder and a full adder using logic gates.
- Build a 16-bit ripple-carry adder from full adders.
- Understand the design of the Hack ALU: its operations, flags, and control bits.
- Implement the Hack ALU in HDL and verify its operation.

#### Detailed lesson content

Arithmetic is the heart of computation. Every program, from a simple calculator to a neural network, ultimately reduces to arithmetic operations performed by the Arithmetic Logic Unit (ALU). In this chapter, we build the ALU from the ground up, starting with the simplest adder and progressing to the complete ALU that will be the core of our computer's CPU.

**Half Adder:**

A half adder adds two single-bit numbers and produces a sum and a carry:
```
Sum   = a XOR b
Carry = a AND b
```

| a | b | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

The half adder is called "half" because it does not handle a carry-in from a previous bit position. It is the building block for the full adder.

**Full Adder:**

A full adder adds three single-bit numbers (a, b, and carry-in) and produces a sum and a carry-out:
```
Sum   = a XOR b XOR c
Carry = (a AND b) OR (c AND (a XOR b))
```

| a | b | c | Sum | Carry |
|---|---|---|-----|-------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

The full adder can be built from two half adders and an Or gate:
```
HalfAdder(a, b) → (sum1, carry1)
HalfAdder(sum1, c) → (sum, carry2)
Carry = carry1 OR carry2
```

**16-bit Adder (Ripple-Carry Adder):**

A 16-bit adder is built by connecting 16 full adders in a chain. The carry-out of each full adder becomes the carry-in of the next. This is called a **ripple-carry adder** because the carry "ripples" from the least significant bit to the most significant bit.

```
Add16(a[0..15], b[0..15]) = out[0..15]
  FullAdder(a[0], b[0], 0) → (out[0], carry[0])
  FullAdder(a[1], b[1], carry[0]) → (out[1], carry[1])
  ...
  FullAdder(a[15], b[15], carry[14]) → (out[15], carry[15])
```

The ripple-carry adder is simple but slow. The carry must propagate through all 16 full adders, so the delay is 16 times the delay of a single full adder. For our Hack computer, this is acceptable because we are building a simple, educational processor. Real processors use faster adders (carry-lookahead, carry-select) that compute the carry in parallel.

**The Hack ALU:**

The ALU is the computational heart of the CPU. The Hack ALU is designed to be simple yet powerful. It has two 16-bit inputs (x, y), one 16-bit output (out), and six 1-bit control inputs (zx, nx, zy, ny, f, no) that determine which operation to perform. It also computes two status outputs: zr (true if out = 0) and ng (true if out < 0).

The Hack ALU can compute 18 different functions, but the most important are:
- `x + y` (addition)
- `x - y` (subtraction)
- `x & y` (bitwise And)
- `x | y` (bitwise Or)
- `-x` (negation)
- `!x` (bitwise Not)
- `0`, `1`, `-1` (constants)

**ALU control bits:**

The six control bits manipulate the inputs and output:
- **zx (zero x):** If 1, set x = 0
- **nx (negate x):** If 1, set x = ~x (bitwise Not)
- **zy (zero y):** If 1, set y = 0
- **ny (negate y):** If 1, set y = ~y (bitwise Not)
- **f (function):** If 1, compute x + y; if 0, compute x & y
- **no (negate output):** If 1, negate the output (bitwise Not)

**ALU operation example (x + y):**

To compute x + y, we set:
- zx = 0, nx = 0 (x passes through unchanged)
- zy = 0, ny = 0 (y passes through unchanged)
- f = 1 (select addition)
- no = 0 (output is not negated)

**ALU operation example (x - y):**

To compute x - y, we use the fact that x - y = x + (-y) = x + (~y + 1). The ALU control bits are:
- zx = 0, nx = 0 (x passes through)
- zy = 0, ny = 1 (y is negated: ~y)
- f = 1 (addition)
- no = 1 (negate output: ~(x + ~y) = ~x & y ... wait, this doesn't work directly)

Actually, the Hack ALU computes x - y using a different trick. The ALU's design is clever and pre-computes the two's complement internally. The exact control bits for x - y are part of the specification and will be provided in the project.

**Status flags:**
- **zr (zero):** Set to 1 if the ALU output is all zeros. Computed using an Or8Way on both halves of the output, followed by a Not.
- **ng (negative):** Set to 1 if the ALU output is negative (MSB = 1). This is simply the most significant bit of the output.

These status flags are essential for conditional branching. The CPU uses them to decide whether to jump to a different instruction.

#### Key concepts
- Half adder: adds two bits, produces sum and carry
- Full adder: adds three bits (including carry-in), produces sum and carry-out
- Ripple-carry adder: chain of full adders for multi-bit addition
- Carry propagation delay and its impact on adder speed
- The Hack ALU: two inputs, one output, six control bits
- ALU control bits: zx, nx, zy, ny, f, no
- ALU functions: add, subtract, and, or, negate, not, constants
- Status flags: zr (zero), ng (negative)
- Zero-detection using Or8Way and Not
- Sign detection using the MSB

#### Hands-on activity
Build the following chips in HDL and test them:
1. **HalfAdder:** Implement using Xor and And gates.
2. **FullAdder:** Implement using two HalfAdders and one Or gate, or directly using Boolean expressions.
3. **Add16:** Implement as a ripple-carry adder using 16 FullAdders.
4. **ALU:** Implement the Hack ALU according to the specification. This is the most complex chip in Project 2.

For the ALU, start by designing the pre-processing stage (zeroing and negating inputs), then the function selection stage (addition vs. And), then the post-processing stage (negating output), and finally the status flag computation (zr and ng). Draw a block diagram showing the internal structure. Test the ALU with all the operations listed in the specification (x+y, x-y, x&y, x|y, -x, !x, 0, 1, -1, etc.).

#### Assessment idea
Ask: "A ripple-carry adder has a delay of 16 gate delays for 16 bits. Why is this a problem for high-performance processors, and what techniques do real processors use to reduce this delay?" Answer: In a ripple-carry adder, the carry must propagate through all 16 full adders sequentially. If each full adder has a delay of 2 gate delays, the total delay is 32 gate delays. At high clock frequencies (e.g., 3 GHz = 333 ps per cycle), this delay is too long. Real processors use faster adder designs: (1) carry-lookahead adders compute the carry for each bit position in parallel using generate (g) and propagate (p) signals, reducing the delay to O(log n); (2) carry-select adders pre-compute sums for both carry-in possibilities and select the correct one; (3) prefix adders use parallel prefix networks to compute all carries simultaneously. These designs are more complex (use more gates and area) but much faster. The Hack computer uses a ripple-carry adder because it is simple and sufficient for an educational processor. Then ask: "The Hack ALU has six control bits but can compute 18 different functions. How is this possible with only six bits?" Answer: The six control bits are not a binary encoding of 18 functions. Instead, they control six independent stages of the ALU: pre-processing of x (zx, nx), pre-processing of y (zy, ny), function selection (f), and post-processing (no). By combining these six independent choices, we get 2^6 = 64 possible combinations, but only 18 of them produce unique and useful functions. The other combinations produce redundant or useless outputs (e.g., zeroing both inputs and then adding them). This is an example of a control word where each bit controls a specific feature rather than encoding a complete function. This design is simpler than a full decoder and allows the ALU to be built with minimal additional logic beyond the basic adder and And/Or gates.

#### AI generation note
Create an animated lesson showing a half adder as a small calculator with two buttons. Show a full adder as a calculator with three buttons (including a carry from the neighbor). Show the ripple-carry adder as a row of 16 calculators where each passes a note to the next. Show the ALU as a control panel with switches (zx, nx, zy, ny, f, no) that route signals through different operations. Show the status flags as indicator lights (zero and negative). Show the ALU testing as a pilot running through a pre-flight checklist. End with a reflection: "Why is the ALU called the 'heart' of the CPU?"

---

### Chapter 2.3 — Sequential Logic: Flip-Flops and Clocks

#### Learning objectives
- Understand the concept of time and state in digital circuits.
- Explain how a clock signal synchronizes sequential logic.
- Describe the Data Flip-Flop (DFF) and its role as the basic memory element.
- Implement sequential chips (Register, RAM, PC) using the DFF as a primitive.

#### Detailed lesson content

So far, we have only built **combinational** chips, where the output depends solely on the current inputs. But computers need memory — they need to remember things from one moment to the next. A computer without memory would be unable to execute a program, store data, or even maintain a counter. Memory is the defining feature that transforms a static circuit into a computing machine.

Memory is implemented using **sequential logic** — circuits whose output depends not only on the current inputs but also on the past inputs. Sequential logic introduces the concept of **time** into digital circuits. The fundamental building block of sequential logic is the **flip-flop**.

**The clock:**

In a digital system, time is discrete, not continuous. It is divided into equal intervals called **clock cycles**. A clock signal is a square wave that oscillates between 0 and 1 at a regular frequency. All sequential operations in the computer are synchronized to this clock signal. On the rising edge (or falling edge) of the clock, the state of the system is updated.

The clock is essential because it prevents races and ambiguities. Without a clock, signals could propagate through the circuit in unpredictable ways, and the output would depend on the exact timing of gate delays. The clock ensures that all state changes happen at well-defined moments, making the behavior of the circuit predictable.

**The Data Flip-Flop (DFF):**

The DFF is the simplest memory element. It has one input (in), one output (out), and a clock input. The DFF copies the input to the output on every clock cycle. In other words, `out(t) = in(t-1)` — the output at time t is whatever the input was at the previous clock cycle.

The DFF is the boundary between the combinational and sequential worlds. It is the only chip in our design that "remembers" — everything else is combinational. The DFF is provided as a primitive in the Nand2Tetris HDL, just like the Nand gate. We do not build it from Nand gates (that would require understanding transistor-level timing, which is beyond the scope of this course), but we use it as the foundation for all memory chips.

**From DFF to Register:**

A **register** is a multi-bit memory element that stores a word. A 1-bit register is built from a DFF and a Mux:
```
Bit(in, load):
  If load = 1, the DFF loads the input on the next clock cycle.
  If load = 0, the DFF retains its current value.
```

```hdl
CHIP Bit {
    IN in, load;
    OUT out;

    PARTS:
    Mux(a=feedback, b=in, sel=load, out=muxOut);
    DFF(in=muxOut, out=out, out=feedback);
}
```

The key insight is the **feedback loop**: the output of the DFF is fed back into the Mux. When `load = 0`, the Mux selects the feedback path, so the DFF loads its own output on the next clock cycle — effectively maintaining its value. When `load = 1`, the Mux selects the external input, so the DFF loads the new value.

**Register:**

A 16-bit Register is simply 16 Bit chips operating in parallel, sharing the same `load` signal:
```hdl
CHIP Register {
    IN in[16], load;
    OUT out[16];

    PARTS:
    Bit(in=in[0], load=load, out=out[0]);
    Bit(in=in[1], load=load, out=out[1]);
    ...
    Bit(in=in[15], load=load, out=out[15]);
}
```

**RAM (Random Access Memory):**

RAM is a collection of registers, each addressable by a unique address. The Hack computer has two types of RAM:
- **Data memory (RAM16K):** Stores data used by programs. 16K 16-bit words.
- **Instruction memory (ROM32K):** Stores the program instructions. 32K 16-bit words.

A RAM chip has an address input, a data input, a data output, and a load signal. When `load = 1`, the data input is stored at the specified address. When `load = 0`, the data output contains the value stored at the specified address.

RAM is built hierarchically:
- A RAM8 chip contains 8 Registers, a DMux8Way to route the load signal, and a Mux8Way16 to select the output.
- A RAM64 chip is built from 8 RAM8 chips.
- A RAM512 chip is built from 8 RAM64 chips.
- A RAM4K chip is built from 8 RAM512 chips.
- A RAM16K chip is built from 4 RAM4K chips.

This recursive construction is elegant and efficient. The DMux routes the load signal to exactly one register (the one at the specified address), while the Mux selects the output from that register.

**Program Counter (PC):**

The PC is a special register that holds the address of the next instruction to execute. It has three control signals:
- **inc:** Increment the PC by 1.
- **load:** Load the PC with a new value (for jumps).
- **reset:** Reset the PC to 0.

The PC is built from a Register and an incrementer. The incrementer adds 1 to the current value. The Muxes select between: (current value), (current + 1), (new value), and 0, based on the control signals.

#### Key concepts
- Combinational vs. sequential logic
- Clock signal: discrete time, synchronization
- Data Flip-Flop (DFF): out(t) = in(t-1)
- DFF as the only memory primitive
- 1-bit register (Bit): DFF + Mux with feedback loop
- 16-bit Register: 16 Bit chips in parallel
- RAM: addressable collection of registers
- Recursive RAM construction: RAM8 → RAM64 → RAM512 → RAM4K → RAM16K
- DMux for routing load signals to specific registers
- Mux for selecting output from specific registers
- Program Counter (PC): register with increment, load, and reset
- Feedback loops and the concept of state in digital circuits

#### Hands-on activity
Build the following sequential chips in HDL:
1. **Bit:** 1-bit register using DFF and Mux.
2. **Register:** 16-bit register using 16 Bit chips.
3. **RAM8:** 8-register memory using Register, DMux8Way, and Mux8Way16.
4. **RAM64:** Built from 8 RAM8 chips.
5. **RAM512:** Built from 8 RAM64 chips.
6. **RAM4K:** Built from 8 RAM512 chips.
7. **RAM16K:** Built from 4 RAM4K chips.
8. **PC:** Program Counter with increment, load, and reset.

For each chip, test it using the Hardware Simulator. Pay special attention to the RAM chips: verify that writing to one address does not affect other addresses, and that reading from an address returns the last value written to that address. For the PC, verify that it increments correctly, loads a new value when told to, and resets to 0.

#### Assessment idea
Ask: "Why does the Bit chip (1-bit register) require a Mux in addition to the DFF? Why can't we simply connect the input directly to the DFF and use the load signal to enable or disable the clock?" Answer: The DFF copies its input to its output on every clock cycle — it has no "enable" or "load" control. To make the DFF retain its value when load=0, we must feed its own output back into its input. The Mux selects between the feedback path (load=0) and the external input (load=1). This creates a feedback loop that allows the DFF to "remember" its value. We cannot simply disable the clock because clock gating is complex and can cause timing problems in real circuits. The Mux-based approach is the standard way to build a loadable register from a DFF. It is simple, reliable, and works at the logical level without requiring clock manipulation. Then ask: "A RAM16K chip contains 16,384 registers. Why is it built recursively (RAM8 → RAM64 → RAM512 → RAM4K → RAM16K) rather than as a flat collection of 16,384 registers?" Answer: Building RAM16K as a flat collection of 16,384 registers would require a 16,384-way DMux and a 16,384-way Mux, which is impractical. The recursive construction breaks the problem into manageable pieces. At each level, we only need 8-way DMuxes and Muxes, which we have already built. The recursive structure also matches the binary addressing: a 14-bit address is divided into groups of 3 bits (for selecting among 8 sub-chips) at each level. This hierarchical approach is used in real memory designs as well: large memories are organized as banks and sub-banks, not as flat arrays. The recursive construction is elegant, modular, and scalable.

#### AI generation note
Create an animated lesson showing a clock as a metronome that ticks at regular intervals. Show a DFF as a photographer who takes a snapshot of the input on each tick and displays it. Show a register as a photo album that holds a snapshot. Show RAM as a library of photo albums indexed by address. Show the recursive construction as a building with floors and sub-floors. Show the DMux as a librarian who directs a new book to the correct shelf. Show the Mux as a retrieval system that fetches the correct book. Show the PC as a bookmark that advances, jumps, or resets. End with a reflection: "What would a computer be without memory?"

---

### Chapter 2.4 — Project 2: The ALU and Memory

#### Learning objectives
- Complete Project 2 of the Nand2Tetris course.
- Build the ALU and all memory chips (Register, RAM, PC).
- Verify each chip using the Hardware Simulator.
- Understand the role of the ALU and memory in the computer architecture.

#### Detailed lesson content

Project 2 is the second major milestone in the Nand2Tetris journey. You will build the arithmetic and memory components of the computer: the ALU, which performs computations, and the memory hierarchy, which stores data and instructions. These chips are the most complex combinational and sequential chips you will build, and they form the computational core of the Hack computer.

**Project 2 specification:**

**Arithmetic chips:**
1. **HalfAdder:** Adds two bits.
2. **FullAdder:** Adds three bits (with carry).
3. **Add16:** 16-bit ripple-carry adder.
4. **Inc16:** 16-bit incrementer (adds 1 to a 16-bit number).
5. **ALU:** The Arithmetic Logic Unit with 6 control bits and 2 status flags.

**Sequential chips:**
6. **Bit:** 1-bit register.
7. **Register:** 16-bit register.
8. **RAM8:** 8-register RAM.
9. **RAM64:** 64-register RAM.
10. **RAM512:** 512-register RAM.
11. **RAM4K:** 4K-register RAM.
12. **RAM16K:** 16K-register RAM.
13. **PC:** Program Counter.

**The ALU specification:**

The Hack ALU computes one of 18 functions based on the six control bits. The specification is given as a table:

| zx | nx | zy | ny | f | no | out |
|----|----|----|----|---|---|-----|
| 1 | 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 | 0 | -1 |
| 0 | 0 | 1 | 1 | 0 | 0 | x |
| 1 | 1 | 0 | 0 | 0 | 0 | y |
| ... | ... | ... | ... | ... | ... | ... |

The ALU is the most complex chip in the project. Its design involves:
1. **Pre-processing stage:** Zero and/or negate the x and y inputs based on zx, nx, zy, ny.
2. **Function stage:** Select between addition (f=1) and bitwise And (f=0).
3. **Post-processing stage:** Negate the output based on no.
4. **Status computation:** Compute zr (zero) and ng (negative) flags.

**The memory hierarchy:**

The memory chips form a hierarchy from the smallest (Bit) to the largest (RAM16K). Each level is built from the previous level, demonstrating the recursive nature of memory design. The RAM16K will be the data memory of the Hack computer, and the PC will be the instruction pointer.

**Testing strategy:**
- For the ALU, test all 18 functions specified in the ALU table. Verify that the correct output is produced for each combination of control bits.
- For the RAM chips, test that reading from an uninitialized address returns 0, that writing to an address and then reading from it returns the written value, and that writing to one address does not affect other addresses.
- For the PC, test that it increments by 1, that it loads a new value when load=1, and that it resets to 0 when reset=1.

#### Key concepts
- Project 2 as the computational core of the Hack computer
- ALU specification: 18 functions from 6 control bits
- ALU design stages: pre-processing, function, post-processing, status flags
- Memory hierarchy: Bit → Register → RAM8 → RAM64 → RAM512 → RAM4K → RAM16K
- PC design: increment, load, reset
- Testing methodology for ALU (all functions) and RAM (read/write isolation)
- The recursive construction of memory
- The role of the ALU and memory in the von Neumann architecture

#### Hands-on activity
Complete Project 2 of the Nand2Tetris course. Build all the chips listed above. For each chip:
1. Write the HDL specification.
2. Draw the internal block diagram (especially for the ALU and RAM).
3. Test it with the provided test scripts.
4. Keep a log of any debugging challenges and how you resolved them.

After completing the project, write a reflection (1 page) comparing the complexity of combinational chips (ALU) versus sequential chips (RAM). Which was more challenging to design? Why? How does the feedback loop in sequential logic change the design approach compared to combinational logic?

#### Assessment idea
Ask: "The Hack ALU can compute `x - y` using the control bits. Explain the mathematical trick that allows subtraction to be performed using the same hardware as addition." Answer: The ALU computes x - y by computing x + (~y + 1), where ~y is the bitwise complement of y and +1 is achieved by setting the carry-in of the least significant bit to 1. This is the two's complement representation of -y. The ALU control bits for x - y are: zx=0, nx=0, zy=0, ny=1, f=1, no=0. Let's trace: y is negated bitwise (ny=1), so the ALU computes x + (~y). But wait, the ALU doesn't have a carry-in control. Actually, the Hack ALU specification includes specific control bit combinations for each function. The exact combination for x - y is provided in the project specification. The key insight is that the ALU pre-computes the two's complement by manipulating the inputs before addition. The ny bit flips all bits of y, and the ALU design includes a way to add 1 implicitly (this is part of the ALU's internal design, which students will discover as they build it). The mathematical foundation is that x - y = x + (-y) = x + (~y + 1), and the ALU hardware is designed to perform this computation with the appropriate control settings. Then ask: "A RAM chip must support both reading and writing. Why is the load signal necessary, and what would happen if the RAM wrote on every clock cycle regardless of the load signal?" Answer: The load signal is necessary to distinguish between read operations and write operations. When load=0, the RAM should output the value stored at the specified address without modifying the stored data. When load=1, the RAM should write the input data to the specified address. If the RAM wrote on every clock cycle regardless of load, it would be impossible to read data without overwriting it. Every read operation would destroy the data being read. This would make the RAM useless as a storage device because you could never retrieve data without destroying it. The load signal provides the necessary control to make RAM a true memory device: you can read without writing, and you can write when needed. This is a fundamental principle of memory design: the read and write operations must be separable and controllable.

#### AI generation note
Create a project walkthrough video showing the ALU design process. Show the specification table, the control bits, the internal stages (pre-processing, function, post-processing), and the status flag computation. Show the RAM construction as a recursive tree. Show testing of the ALU with multiple functions. Show testing of RAM with read-after-write patterns. End with a reflection: "What is the most important chip you built in Project 2, and why?"

---

### Chapter 2.5 — Synchronizing Sequential Logic: Timing and Stability

#### Learning objectives
- Understand the concept of setup time and hold time in sequential circuits.
- Explain why the clock period must be longer than the longest combinational path.
- Describe metastability and how it is avoided in well-designed circuits.
- Analyze the timing constraints of a simple sequential circuit.

#### Detailed lesson content

Sequential logic introduces time into digital circuits, and with time comes the need to manage timing. If a sequential circuit is not properly timed, it can produce incorrect results, oscillate, or enter an undefined state. Understanding timing is essential for building reliable memory and processors.

**Setup time and hold time:**

A flip-flop (DFF) requires that the input be stable for a certain amount of time before the clock edge (setup time) and for a certain amount of time after the clock edge (hold time). If the input changes during the setup or hold window, the DFF may capture an incorrect value or enter a metastable state.

- **Setup time (t_setup):** The minimum time the input must be stable before the clock edge.
- **Hold time (t_hold):** The minimum time the input must be stable after the clock edge.
- **Clock-to-Q delay (t_cq):** The time it takes for the output to change after the clock edge.

**Clock period constraint:**

The clock period (T) must be long enough to allow the signal to propagate through the combinational logic between two flip-flops, plus the setup time of the destination flip-flop:
```
T ≥ t_cq + t_combinational + t_setup
```

Where t_combinational is the delay of the combinational logic between the flip-flops. This is the fundamental timing constraint of synchronous circuits. If the clock is too fast, the signal will not have time to propagate, and the circuit will fail.

**Metastability:**

Metastability occurs when a flip-flop samples an input that is changing at the same time as the clock edge. The flip-flop may enter an unstable state where its output oscillates between 0 and 1 for an unpredictable amount of time before settling to a stable value. Metastability cannot be completely eliminated, but it can be made extremely rare by:
- Ensuring that inputs are stable during the setup/hold window.
- Using synchronizer circuits (two flip-flops in series) for asynchronous inputs.
- Designing the clock period to be much longer than the typical metastability resolution time.

**The Hack computer's timing:**

The Hack computer is designed to be simple, so its timing constraints are straightforward. The longest combinational path is through the ALU (which includes the adder). The clock period must be longer than the ALU delay plus the memory access delay plus the register setup time. In practice, the Hardware Simulator does not model timing explicitly — it assumes that all combinational logic settles instantly between clock cycles. Real hardware would need careful timing analysis, but the logical design is the same.

**Feedback loops and stability:**

The Bit chip (1-bit register) contains a feedback loop: the output of the DFF is fed back into the Mux, which feeds back into the DFF. This creates a circular dependency. However, the circle is "broken" by the DFF, which acts as a barrier. The combinational logic (Mux) computes its output based on the current DFF output, and the DFF updates its state on the next clock edge. This separation between combinational evaluation and sequential update is what makes synchronous circuits stable and predictable.

**Clock distribution:**

In a real chip, the clock signal must be distributed to all flip-flops with minimal skew (difference in arrival time). Clock skew can cause setup and hold time violations if one flip-flop receives the clock earlier than another. Modern processors use clock trees and PLLs (Phase-Locked Loops) to distribute the clock evenly across the chip.

#### Key concepts
- Setup time and hold time requirements for flip-flops
- Clock-to-Q delay
- Clock period constraint: T ≥ t_cq + t_combinational + t_setup
- Metastability: causes, consequences, and mitigation
- Synchronizer circuits for asynchronous inputs
- The role of the DFF as a timing barrier in feedback loops
- Clock distribution and skew in real chips
- The separation of combinational evaluation and sequential update
- Timing in the Hack computer (simplified model)

#### Hands-on activity
Analyze the timing of a simple circuit: a 4-bit counter built from four Bit chips connected in a chain. Each Bit increments when the previous Bit overflows. Calculate the minimum clock period assuming:
- DFF clock-to-Q delay: 1 ns
- Mux delay: 2 ns
- Full adder delay: 3 ns
- Setup time: 1 ns

Trace the longest combinational path through the circuit and determine the minimum clock period. Then, discuss what would happen if the clock period were set to half this value. How would the circuit behave incorrectly?

#### Assessment idea
Ask: "Why does a DFF act as a 'barrier' that prevents combinational cycles in a synchronous circuit? What would happen if we tried to build a feedback loop using only combinational gates (without a DFF)?" Answer: A DFF acts as a barrier because it separates the circuit into discrete time steps. Between clock edges, the combinational logic evaluates its outputs based on the current DFF outputs. On the clock edge, the DFFs update their state simultaneously. The DFFs "break" the feedback loop by inserting a one-clock-cycle delay. If we tried to build a feedback loop using only combinational gates, the output would feed back into the input instantaneously. This would create an oscillation or an unstable state because the gates would continuously try to update each other. For example, if we connect a Not gate's output to its own input, the output would oscillate between 0 and 1 at the speed of light (or the gate delay). This is not a useful circuit. The DFF is essential because it makes the feedback loop stable and predictable by introducing a discrete time step. Then ask: "What is metastability, and why is it a concern when a digital system receives inputs from an external, asynchronous source?" Answer: Metastability occurs when a flip-flop samples an input that is changing at the same time as the clock edge. The flip-flop may enter an unstable state where its output is neither a valid 0 nor a valid 1 for some time. When a digital system receives inputs from an external source (e.g., a user pressing a button, a sensor sending data), the timing of these inputs is not synchronized with the system's clock. The input may change during the flip-flop's setup or hold window, causing metastability. This is a concern because the metastable output can propagate through the system and cause incorrect behavior. The standard solution is to use a synchronizer: two DFFs in series. The first DFF may go metastable, but by the time the second DFF samples its output, the metastability has resolved (with very high probability). This does not eliminate metastability entirely but makes it so rare that it is negligible for practical purposes.

#### AI generation note
Create an animated lesson showing a clock as a conductor leading an orchestra. Show the DFF as a musician who only plays when the conductor signals. Show setup time as the musician needing to see the sheet music before the signal. Show hold time as the musician needing to keep playing briefly after the signal. Show metastability as a musician who hesitates between two notes. Show the clock period constraint as the conductor's tempo being limited by the slowest section. Show the feedback loop as a round of music where each musician passes a note to the next, but the conductor ensures they all move in sync. End with a reflection: "Why is timing the most challenging aspect of real hardware design?"

---

### Chapter 2.6 — Project 3: Memory and the Program Counter

#### Learning objectives
- Complete the sequential chips for the Hack computer.
- Build and test the Register, RAM, and PC.
- Understand the role of memory in the von Neumann architecture.
- Prepare for the computer architecture module by having all memory components ready.

#### Detailed lesson content

Project 3 completes the memory subsystem of the Hack computer. You have already built the ALU (combinational logic) in Project 2. Now you will build the remaining sequential chips that form the computer's memory hierarchy.

**Project 3 specification:**

Build the following sequential chips:
1. **Bit:** 1-bit register (DFF + Mux).
2. **Register:** 16-bit register (16 Bit chips).
3. **RAM8:** 8-register RAM.
4. **RAM64:** 64-register RAM.
5. **RAM512:** 512-register RAM.
6. **RAM4K:** 4096-register RAM.
7. **RAM16K:** 16384-register RAM.
8. **PC:** Program Counter with increment, load, and reset.

**Design notes:**

The RAM chips are built recursively. For example, RAM64 is built from 8 RAM8 chips. Each RAM8 chip has an address width of 3 bits (to address 8 registers). The RAM64 chip has an address width of 6 bits. The lower 3 bits select one of the 8 RAM8 chips, and the upper 3 bits select the register within that RAM8 chip.

Wait, actually the addressing is slightly different. In the Nand2Tetris design:
- RAM8 has 8 registers, addressed by 3 bits. The address directly selects the register.
- RAM64 has 64 registers, addressed by 6 bits. The lower 3 bits are used to select the register within a RAM8 chip, and the upper 3 bits are used to select which of the 8 RAM8 chips is active.
- Similarly, RAM512 (9 bits) uses the lower 3 bits for intra-chip selection and the upper 6 bits for inter-chip selection.

This addressing scheme is implemented using DMux and Mux chips at each level.

**PC design:**

The PC is a 16-bit register with three control inputs:
- **inc:** When 1, the PC increments by 1 on the next clock cycle.
- **load:** When 1, the PC loads the value from the `in` input on the next clock cycle.
- **reset:** When 1, the PC resets to 0 on the next clock cycle.

The priority is: reset > load > inc. If reset=1, the PC resets to 0 regardless of load and inc. If reset=0 and load=1, the PC loads the input value. If reset=0 and load=0 and inc=1, the PC increments. If all are 0, the PC holds its current value.

The PC is built from a Register, an Add16 (or Inc16), and Muxes to select the next value:
```
next = Mux16(a=hold, b=increment, sel=inc)
next = Mux16(a=next, b=in, sel=load)
next = Mux16(a=next, b=0, sel=reset)
Register(in=next, load=true, out=pc)
```

Where `hold` is the current value of the PC (fed back from the Register output), and `increment` is the current value plus 1.

**The memory map of the Hack computer:**

The Hack computer has two memory spaces:
- **Data memory (RAM16K):** A 16K-word RAM that stores data. Addressed by the CPU using a 15-bit address.
- **Instruction memory (ROM32K):** A 32K-word ROM that stores the program. Addressed by the PC using a 15-bit address.

The RAM16K you build will be used as the data memory. The ROM32K will be provided by the simulator (it loads the program from a file).

**Testing the RAM:**

RAM testing requires care because:
- Uninitialized RAM locations should return 0.
- Writing to one address should not affect other addresses.
- The RAM should correctly handle reads and writes at the same address in successive clock cycles.

The test scripts provided by the course cover these cases. Make sure your RAM passes all tests before proceeding to the next module.

#### Key concepts
- Project 3: completing the memory subsystem
- Recursive RAM construction and addressing
- PC design: priority of reset > load > inc
- Mux selection chain for the PC
- Memory map: data memory (RAM16K) and instruction memory (ROM32K)
- RAM testing: uninitialized values, read/write isolation, sequential access
- The von Neumann architecture: shared memory for data and instructions
- Preparing for the computer architecture module

#### Hands-on activity
Complete Project 3 of the Nand2Tetris course. Build all the sequential chips. For each RAM chip, draw the hierarchical structure showing how it is built from smaller RAM chips, DMuxes, and Muxes. For the PC, draw the selection chain showing how reset, load, and inc are prioritized.

After completing the project, write a reflection (1 page) on the recursive construction of RAM. Why is recursion such a powerful technique for building memory? How does it compare to how you would build memory in software (e.g., an array of arrays)?

#### Assessment idea
Ask: "The PC has three control signals: reset, load, and inc. Why is the priority reset > load > inc, and what would happen if the priority were different?" Answer: The priority reset > load > inc ensures that the computer can always be reset to a known state (address 0) regardless of other control signals. This is essential for system initialization and recovery. If load had higher priority than reset, a reset signal might be ignored if load was also active, preventing the system from resetting. If inc had higher priority than load, a jump instruction (load) might be ignored if the increment signal was also active, causing the program to continue to the next instruction instead of jumping. The priority reset > load > inc is the most natural: reset is an emergency override, load is a deliberate control transfer, and inc is the normal sequential execution. This priority ensures that the most urgent action (reset) always takes precedence, followed by the deliberate control action (load), followed by the default behavior (increment). Then ask: "A RAM16K chip contains 16,384 16-bit registers. If each register requires about 20 logic gates (for the DFF, Mux, and associated logic), how many total gates are in the RAM16K? What does this tell you about the scale of modern memory chips?" Answer: 16,384 registers × 20 gates ≈ 327,680 gates. This is a large but manageable number for a chip. Modern memory chips (e.g., 8 GB DRAM) contain billions of memory cells. If we scale proportionally, an 8 GB chip has about 8 × 10^9 bytes, which is roughly 4 × 10^9 16-bit words. At 20 gates per word, that's about 80 billion gates. In reality, DRAM uses much more compact storage (1 transistor + 1 capacitor per bit, not 20 gates per bit), but the scale is enormous. This comparison tells us that the memory industry relies on extremely compact, specialized manufacturing processes that pack billions of storage elements into a single chip. The Hack computer's RAM16K is tiny by modern standards but illustrates the same principles of addressable, hierarchical memory.

#### AI generation note
Create an animated project walkthrough showing the RAM hierarchy as a fractal tree. Show the PC as a counter with three buttons (reset, load, increment). Show the priority as a traffic light system where red (reset) overrides yellow (load) overrides green (increment). Show the memory map as a city with two neighborhoods: data memory and instruction memory. Show the testing process as a census taker who verifies each address. End with a reflection: "How much memory does a modern smartphone have compared to the Hack computer's 16K words?"

---

## Module 3: Computer Architecture: CPU and Memory

> **Goal:** Assemble the ALU, registers, and memory into a complete, working computer.

---

### Chapter 3.1 — The von Neumann Architecture

#### Learning objectives
- Describe the von Neumann architecture and its key components: CPU, memory, and I/O.
- Understand the stored-program concept and its significance.
- Compare the von Neumann architecture with the Harvard architecture.
- Explain the fetch-execute cycle and its role in program execution.

#### Detailed lesson content

The **von Neumann architecture** is the conceptual model that underlies virtually all modern computers. It was first described by John von Neumann in 1945 in the "First Draft of a Report on the EDVAC." Despite being nearly 80 years old, the von Neumann architecture remains the dominant paradigm for general-purpose computing. Understanding it is essential for understanding how computers work.

**Key components of the von Neumann architecture:**

1. **Memory:** A single storage unit that holds both data and instructions. Memory is addressable: each location has a unique address.
2. **Central Processing Unit (CPU):** The brain of the computer. The CPU contains:
   - **Arithmetic Logic Unit (ALU):** Performs arithmetic and logical operations.
   - **Control Unit:** Directs the operation of the processor. It fetches instructions, decodes them, and executes them.
   - **Registers:** Small, fast storage locations within the CPU that hold data being actively processed.
3. **Input/Output (I/O):** Mechanisms for the computer to communicate with the outside world (keyboard, screen, disk, network).
4. **Bus:** A communication pathway that connects the CPU, memory, and I/O devices.

**The stored-program concept:**

The most revolutionary aspect of the von Neumann architecture is the **stored-program concept**. Before von Neumann, computers were programmed by physically rewiring the machine (e.g., plugging cables into different sockets). The von Neumann architecture stores the program as data in memory, alongside the data the program operates on. This means:
- The program can be modified by the program itself (self-modifying code, though this is generally discouraged today).
- The same hardware can run different programs simply by loading different instructions into memory.
- Programs can be treated as data: they can be stored on disk, transmitted over networks, and compiled from high-level languages.

**The fetch-execute cycle:**

The CPU operates in a continuous loop called the **fetch-execute cycle** (or instruction cycle):
1. **Fetch:** The CPU reads the instruction from the memory address pointed to by the Program Counter (PC).
2. **Decode:** The CPU interprets the instruction to determine what operation to perform.
3. **Execute:** The CPU performs the operation (e.g., add two numbers, read from memory, write to memory).
4. **Update PC:** The CPU updates the Program Counter to point to the next instruction (or to a different address for jumps).

This cycle repeats billions of times per second in modern computers. Each instruction is simple, but the sheer speed and volume of instructions make the computer powerful.

**The Hack computer's von Neumann architecture:**

The Hack computer follows the von Neumann architecture with some simplifications:
- **Memory:** 16K words of data memory (RAM) and 32K words of instruction memory (ROM). The two are separate, which is actually a Harvard architecture feature, but the logical model is von Neumann (the CPU treats instructions and data as words in memory).
- **CPU:** Contains the ALU, registers (A and D), and the PC.
- **I/O:** The screen (memory-mapped display) and keyboard (memory-mapped input).
- **Bus:** The data bus connects the CPU to memory and I/O.

**Harvard vs. von Neumann:**
- **von Neumann:** Single memory for instructions and data. Simpler but can have a "von Neumann bottleneck" (the CPU cannot fetch instructions and data simultaneously).
- **Harvard:** Separate memories for instructions and data. The CPU can fetch an instruction and read data at the same time, improving throughput. Used in DSPs and some modern processors (L1 instruction cache and L1 data cache are separate, which is a Harvard feature at the cache level).

Most modern processors are "modified Harvard" architectures: they have separate caches for instructions and data but share a unified memory at the main memory level.

#### Key concepts
- von Neumann architecture: memory, CPU, I/O, bus
- Stored-program concept: programs as data in memory
- CPU components: ALU, Control Unit, Registers
- Fetch-execute cycle: fetch, decode, execute, update PC
- Program Counter (PC) as the instruction pointer
- Harvard architecture: separate instruction and data memory
- Modified Harvard: separate caches, unified main memory
- The von Neumann bottleneck
- The Hack computer's architecture

#### Hands-on activity
Draw a block diagram of the Hack computer showing the CPU, data memory, instruction memory, screen, and keyboard. Label the data paths and control signals. Trace the fetch-execute cycle for a simple program:
```
@5     // Load 5 into A register
D=A    // Copy A to D register
@6     // Load 6 into A register
D=D+A  // Add A to D, store in D
```

Show the state of the PC, A register, D register, and ALU at each step of the fetch-execute cycle. Identify which memory address is being read for the instruction and which for the data.

#### Assessment idea
Ask: "Why is the stored-program concept considered one of the most important ideas in computer science?" Answer: The stored-program concept revolutionized computing by making computers general-purpose machines. Before von Neumann, each computer was designed for a specific task and had to be physically rewired to perform a different task. With stored programs, the same hardware can execute any program simply by loading different instructions into memory. This means: (1) computers can be mass-produced and sold to different users with different needs; (2) software can be developed independently of hardware; (3) programs can be stored, copied, transmitted, and modified like any other data; (4) the same machine can run an operating system, a web browser, a game, or a scientific simulation. The stored-program concept is the foundation of the software industry and the reason computers are universal machines. It transformed computing from a specialized craft into a general-purpose tool. Then ask: "What is the von Neumann bottleneck, and how do modern processors mitigate it?" Answer: The von Neumann bottleneck is the limitation that a single memory bus cannot transfer both instructions and data simultaneously. In a pure von Neumann architecture, the CPU must fetch instructions and read/write data over the same bus, which limits throughput. Modern processors mitigate this by using: (1) separate L1 instruction and data caches (a Harvard architecture feature at the cache level), allowing simultaneous instruction fetch and data access; (2) pipelining, where instruction fetch and execution overlap; (3) prefetching, where instructions are fetched before they are needed; (4) wider memory buses and multiple memory channels; (5) out-of-order execution, which keeps the CPU busy while waiting for memory. These techniques make modern processors much more efficient than the simple von Neumann model, but the fundamental stored-program concept remains unchanged.

#### AI generation note
Create an animated lesson showing the von Neumann architecture as a factory. Show memory as a warehouse that stores both raw materials (data) and instruction manuals (programs). Show the CPU as a workshop that reads the manual, fetches materials, and produces output. Show the fetch-execute cycle as a worker reading a manual, performing the step, and turning to the next page. Show the Harvard architecture as two warehouses: one for manuals and one for materials. Show the bottleneck as a narrow doorway between the warehouse and the workshop. Show modern processors as factories with conveyor belts, multiple workers, and pre-fetching robots. End with a reflection: "Is the von Neumann architecture still the best model for all types of computing?"

---

### Chapter 3.2 — The Hack Computer Architecture

#### Learning objectives
- Describe the specific architecture of the Hack computer: its registers, memory map, and instruction set.
- Understand the roles of the A register, D register, and M register.
- Explain the memory map: data memory, instruction memory, screen, and keyboard.
- Analyze the instruction format of the Hack machine language.

#### Detailed lesson content

The Hack computer is a simple yet complete computer designed for educational purposes. It has all the essential components of a von Neumann computer but is stripped down to the minimum needed to illustrate the principles. Understanding the Hack computer is the key to understanding how real computers work, because the same principles apply at a larger scale.

**CPU registers:**

The Hack CPU has three registers that are visible to the programmer:
1. **A register (Address register):** A 16-bit register that holds a data value or a memory address. When used as an address, it points to a location in data memory (RAM). The value stored at that location is referred to as **M** (Memory).
2. **D register (Data register):** A 16-bit register that holds a data value. It is used for arithmetic and logical operations.
3. **M register (Memory):** Not a physical register in the CPU, but a shorthand for RAM[A] — the value stored in data memory at the address contained in the A register.

In addition, the CPU has internal registers that are not directly visible to the programmer:
- **PC (Program Counter):** Holds the address of the next instruction to execute.
- **ALU output:** A temporary register that holds the result of the ALU computation.

**Memory map:**

The Hack computer's memory is organized as follows:
- **Data memory (RAM):** 16K words (addresses 0 to 16383).
  - **RAM[0..15]:** Pre-defined symbols (R0, R1, ..., R15) that can be used as variables.
  - **RAM[16..255]:** General-purpose variables (static variables in the Jack language).
  - **RAM[256..2047]:** Stack (used by the VM and compiler).
  - **RAM[2048..16383]:** Heap (used for object allocation in the Jack language).
- **Screen memory map:** A dedicated memory area where writing to specific addresses updates pixels on the screen.
  - **Screen addresses:** 16384 to 24575 (8K words = 256 rows × 32 words/row × 16 bits/word = 256 × 512 pixels = 131,072 pixels, but wait — actually the Hack screen is 256 rows × 512 pixels per row, where each pixel is 1 bit. 512 pixels = 32 words of 16 bits each. So 256 rows × 32 words = 8,192 words = 8K. Addresses 16384 to 24575.)
- **Keyboard memory map:** A single word (address 24576) that holds the ASCII code of the currently pressed key.
- **Instruction memory (ROM):** 32K words (addresses 0 to 32767). Stores the program. The CPU cannot write to ROM; it is loaded by the simulator before execution.

**Instruction format:**

The Hack machine language has two types of instructions, each 16 bits long:

1. **A-instruction (Address instruction):**
   ```
   0vvvvvvvvvvvvvvv
   ```
   The first bit is 0, and the remaining 15 bits are a value. This instruction loads the value into the A register. For example, `@5` loads 5 into A.

2. **C-instruction (Compute instruction):**
   ```
   111accccccdddjjj
   ```
   The first bit is 1, the second and third bits are 1 (to distinguish from A-instruction). The remaining bits are:
   - **a (1 bit):** Selects between A and M as the ALU's y input.
   - **c (6 bits):** The ALU control bits (comp field).
   - **d (3 bits):** The destination bits (where to store the ALU output).
   - **j (3 bits):** The jump bits (conditional branching).

**C-instruction fields:**
- **comp:** Determines what the ALU computes. For example, `D+A` (add D and A), `D-M` (subtract M from D), `D&M` (bitwise And), `!D` (bitwise Not of D), etc. The 6-bit comp field maps to the ALU's zx, nx, zy, ny, f, no control bits.
- **dest:** Determines where to store the result. Can be any combination of: A, D, M. For example, `M=D` stores D in memory at address A, `D=A` loads A into D, `AMD=D+A` stores the result in A, D, and M simultaneously.
- **jump:** Determines whether to jump. The jump condition is based on the ALU output: if the condition is true, the PC is loaded with the value in A. Conditions include: JGT (greater than 0), JEQ (equal to 0), JGE (greater or equal), JLT (less than 0), JNE (not equal), JLE (less or equal), JMP (unconditional jump).

**Example program:**
```
// Add 2 + 3 and store the result in RAM[0]
@2      // A-instruction: A = 2
D=A     // C-instruction: D = A (D = 2)
@3      // A-instruction: A = 3
D=D+A   // C-instruction: D = D + A (D = 5)
@0      // A-instruction: A = 0
M=D     // C-instruction: M = D (RAM[0] = 5)
```

This program uses 6 instructions (6 words in ROM) to add 2 and 3 and store the result in RAM[0].

#### Key concepts
- Hack computer architecture: A register, D register, M register
- Memory map: RAM16K, Screen, Keyboard, ROM32K
- Screen memory mapping: 256×512 pixels, memory-mapped I/O
- Keyboard memory mapping: single address for ASCII input
- A-instruction format: 0 + 15-bit value
- C-instruction format: 111 + a + comp + dest + jump
- comp field: ALU control bits (zx, nx, zy, ny, f, no)
- dest field: A, D, M destination selection
- jump field: conditional branching based on ALU output
- The relationship between assembly language and machine code

#### Hands-on activity
Write the following Hack assembly programs and translate them to machine code by hand:

1. **Swap two values:** Write a program that swaps the values in RAM[0] and RAM[1] using RAM[2] as temporary storage.

2. **Countdown:** Write a program that starts with RAM[0] = 10 and decrements it to 0, storing each intermediate value in successive memory locations (RAM[1] = 9, RAM[2] = 8, ..., RAM[10] = 0).

3. **Find max:** Write a program that finds the maximum of two values stored in RAM[0] and RAM[1] and stores the result in RAM[2]. Use conditional jumps.

For each program, write the assembly, then translate each instruction to 16-bit binary using the A-instruction and C-instruction formats. Verify your machine code by loading it into the CPU Emulator and running it.

#### Assessment idea
Ask: "In the Hack computer, why does the A register serve double duty as both a data register and an address register? What is the advantage of this design, and what is the trade-off?" Answer: The A register serves double duty to reduce the number of registers and instructions in the CPU. By using A for both data and addresses, the Hack computer needs only two programmer-visible registers (A and D) instead of three (A, D, and a separate address register). This simplifies the hardware design significantly: fewer registers means fewer data paths, less control logic, and a simpler instruction format. The trade-off is that programmers must be careful to manage the A register: when using M (memory access), the A register contains the address, so any data value that was in A is overwritten. This means programmers often need to save A to D before loading an address, or load the address first and then perform the computation. This is a minor inconvenience for the programmer but a major simplification for the hardware designer. Real CPUs have more registers (e.g., x86 has 16 general-purpose registers, ARM has 31), but the Hack computer's minimal design is pedagogically valuable because it shows the bare minimum needed for computation. Then ask: "The Hack C-instruction has a 3-bit jump field that can specify 8 conditions (JGT, JEQ, JGE, JLT, JNE, JLE, JMP, and no jump). How does the CPU implement these conditions using only the ALU's zr and ng flags?" Answer: The ALU computes two status flags: zr (true if output is zero) and ng (true if output is negative). These two flags, combined with the fact that a positive number is neither zero nor negative, can determine all comparison conditions: zero (zr), negative (ng), positive (neither zr nor ng), greater than or equal (not ng), less than or equal (ng or zr), not equal (not zr), greater than (not ng and not zr), less than (ng). The jump field encodes which combination of these conditions should trigger a jump. The CPU's control logic checks the jump bits against the ALU flags and loads the PC with the address in A if the condition is met. This is elegant because the ALU already computes these flags as a side effect of every operation, so no additional comparison hardware is needed. The jump logic is simply a small combinational circuit that maps the jump bits and flags to a load signal for the PC.

#### AI generation note
Create an animated lesson showing the Hack computer as a Lego model. Show the A register as a box that can hold a number or an address. Show the D register as a dedicated data box. Show M as a window into the RAM warehouse. Show the instruction format as a 16-brick Lego piece with colored sections. Show the A-instruction as a single-color piece and the C-instruction as a multi-color piece. Show the memory map as a city map with labeled districts. Show the screen as a giant billboard controlled by memory. Show the keyboard as a single mailbox. End with a reflection: "Why is the Hack computer's instruction set so minimal compared to real processors?"

---

### Chapter 3.3 — The CPU: Datapath and Control Logic

#### Learning objectives
- Design the CPU datapath: the ALU, registers, and memory connections.
- Implement the control logic that fetches, decodes, and executes instructions.
- Build the Hack CPU in HDL and verify its operation.
- Understand the instruction fetch and decode stages.

#### Detailed lesson content

The CPU is the central component of the computer. It fetches instructions from memory, decodes them, and executes them. The CPU we will build is the Hack CPU, a simple but complete processor that implements the Hack machine language.

**CPU datapath:**

The datapath is the network of connections that carries data between the CPU's components. The Hack CPU datapath consists of:
1. **A register:** Holds an address or data value.
2. **D register:** Holds a data value.
3. **ALU:** Performs arithmetic and logical operations on its two inputs.
4. **PC:** Holds the address of the next instruction.
5. **Memory connections:** The CPU reads instructions from ROM and reads/writes data from/to RAM.

**Datapath connections:**
- The A register can be loaded from: the instruction value (for A-instructions), the ALU output (for C-instructions where A is the destination).
- The D register can be loaded from: the ALU output (for C-instructions where D is the destination).
- The ALU inputs can come from: D register (always), A register or M (RAM[A]) (selected by the C-instruction's a-bit).
- The ALU output can go to: A register, D register, M (RAM[A]), or any combination.
- The PC can be loaded from: A register (for jumps), or incremented by 1 (for sequential execution), or reset to 0.

**Instruction fetch:**

On every clock cycle, the CPU fetches the instruction from ROM at the address specified by the PC. The instruction is a 16-bit word. The first bit determines whether it is an A-instruction (bit 0 = 0) or a C-instruction (bit 0 = 1).

**Instruction decode:**

For an A-instruction:
- The remaining 15 bits are the value to load into the A register.
- The PC is incremented by 1.

For a C-instruction:
- The a-bit selects the ALU's y input (0 = A, 1 = M).
- The comp bits (6 bits) control the ALU operation.
- The dest bits (3 bits) determine where to store the ALU output (A, D, M).
- The jump bits (3 bits) determine whether to jump to the address in A.
- The PC is either incremented by 1 or loaded with the value in A (if the jump condition is met).

**Control logic:**

The control logic is a combinational circuit that generates the control signals for the datapath based on the current instruction. It is essentially a decoder that maps the instruction bits to the appropriate control signals:
- For A-instructions: load A with the instruction value, increment PC.
- For C-instructions: set ALU control bits, enable destination registers, check jump condition, update PC.

The control logic is built from the elementary logic gates we designed in Project 1. It is a pure combinational circuit (no memory or state) because the control signals are determined entirely by the current instruction.

**CPU HDL implementation:**

The CPU is built from the chips we have already designed:
- A register and D register (from Project 2).
- ALU (from Project 2).
- PC (from Project 2).
- Muxes and logic gates (from Project 1).

The CPU has the following interface:
```hdl
CHIP CPU {
    IN inM[16],         // Value from data memory (M)
       instruction[16], // Instruction from ROM
       reset;           // Reset signal
    OUT outM[16],       // Value to write to data memory
        writeM,         // Write to data memory?
        addressM[15],   // Address in data memory
        pc[15];         // Address of next instruction
}
```

The CPU internal logic:
1. If instruction[15] = 0 (A-instruction): load A with instruction[0..14], PC = PC + 1.
2. If instruction[15] = 1 (C-instruction):
   - Decode the instruction into ALU control bits, destination, and jump.
   - Select ALU y input: A or M based on instruction[12].
   - Execute ALU operation.
   - Store result in destinations (A, D, M) based on instruction[3..5].
   - Check jump condition using ALU flags and instruction[0..2].
   - If jump: PC = A; else: PC = PC + 1.

**CPU testing:**

The CPU is tested using the CPU Emulator, which loads the CPU HDL file and runs test scripts that provide instructions and verify the CPU's state (A, D, PC, outM, writeM) after each clock cycle. The test scripts include simple programs that exercise all aspects of the CPU: A-instructions, C-instructions with different ALU operations, different destinations, and different jump conditions.

#### Key concepts
- CPU datapath: A register, D register, ALU, PC, memory connections
- Instruction fetch: reading from ROM at PC address
- Instruction decode: extracting control bits from instruction
- A-instruction vs. C-instruction handling
- Control logic: combinational circuit generating control signals
- ALU input selection: A vs. M based on a-bit
- Destination decoding: A, D, M write enables
- Jump condition checking: ALU flags + jump bits
- PC update: increment vs. load (jump)
- CPU HDL interface and internal implementation
- CPU testing with the CPU Emulator

#### Hands-on activity
Build the Hack CPU in HDL. The CPU is the most complex chip you have built so far. Follow this design process:
1. Draw the datapath diagram showing all connections between A, D, ALU, PC, and memory.
2. Draw the control logic diagram showing how the instruction bits generate control signals.
3. Write the HDL specification, building the CPU from the chips you have already designed (A register, D register, ALU, PC, Muxes, gates).
4. Test the CPU using the provided test scripts.

Start with a simple test: a program that loads A with 5, then loads D with A, then stores D in M. Verify that the CPU produces the correct output at each step. Then test more complex programs: addition, subtraction, conditional jumps, and loops.

#### Assessment idea
Ask: "The Hack CPU's control logic is a combinational circuit that generates control signals based on the current instruction. Why must the control logic be combinational (no memory or state)? What would happen if the control logic had its own internal state?" Answer: The control logic must be combinational because the control signals must be determined immediately from the current instruction. The CPU must know what to do with the instruction in the same clock cycle that it fetches it. If the control logic had internal state, it would need to "remember" previous instructions to determine the current control signals, which would introduce latency and complexity. More importantly, the control signals must be stable during the entire clock cycle so that the datapath can operate correctly. A combinational circuit produces the same output for the same input every time, making the CPU's behavior predictable and deterministic. If the control logic had state, it could produce different control signals for the same instruction depending on prior history, which would make the CPU behavior dependent on the execution path rather than just the instruction itself. This would violate the fundamental principle that each instruction is self-contained and decoded independently. Then ask: "When the CPU executes a C-instruction with M as a destination (e.g., `M=D`), what is the sequence of operations that occurs in the datapath? Trace the data flow." Answer: The sequence is: (1) The instruction is fetched from ROM at the address in the PC. (2) The control logic decodes the instruction and determines that M is a destination. (3) The A register already contains the memory address (it was loaded in a previous A-instruction). (4) The ALU computes the value to store (in this case, D passes through the ALU unchanged). (5) The ALU output is placed on the outM bus. (6) The addressM bus carries the value from the A register (the memory address). (7) The writeM signal is set to 1. (8) On the next clock cycle, the memory system writes the value on outM to the address specified by addressM. The CPU does not directly access memory; it produces the data, address, and write signal, and the memory system (which is outside the CPU chip) performs the actual write. This separation allows the CPU to be a pure processing unit while the memory system handles storage.

#### AI generation note
Create an animated lesson showing the CPU as a control room. Show the datapath as a network of conveyor belts connecting the A register, D register, ALU, and PC. Show the control logic as a control panel with switches that are set based on the instruction. Show the fetch stage as a robot retrieving an instruction from ROM. Show the decode stage as the robot reading the instruction and flipping switches. Show the execute stage as the conveyor belts moving data through the ALU. Show the PC update as the robot advancing to the next instruction or jumping to a new one. End with a reflection: "What is the most complex part of the CPU to design, and why?"

---

### Chapter 3.4 — Memory and I/O: Screen and Keyboard

#### Learning objectives
- Understand memory-mapped I/O and how the Hack computer handles screen and keyboard.
- Describe the screen memory map and how pixels are controlled by writing to memory.
- Implement the keyboard interface as a single memory-mapped register.
- Build the complete Hack computer in HDL.

#### Detailed lesson content

Input and output (I/O) are how the computer communicates with the outside world. The Hack computer uses a simple but powerful technique called **memory-mapped I/O**, where I/O devices are treated as memory locations. Writing to certain memory addresses updates the screen, and reading from a certain address returns the state of the keyboard.

**Memory-mapped I/O:**

In memory-mapped I/O, there is no separate I/O bus or I/O instructions. Instead, I/O devices are assigned addresses in the memory space. The CPU reads and writes to these addresses just like any other memory location, but the hardware intercepts these accesses and performs the appropriate I/O operation.

Advantages of memory-mapped I/O:
- **Simplicity:** No special I/O instructions are needed. The same load and store instructions work for both memory and I/O.
- **Uniformity:** I/O devices can be accessed using the same addressing modes as memory.
- **Flexibility:** New I/O devices can be added by assigning them memory addresses.

**The Hack screen:**

The Hack screen is a black-and-white display with 256 rows and 512 columns of pixels. Each pixel is either black (1) or white (0). The screen is memory-mapped to addresses 16384 to 24575 (8K words). Each word controls 16 pixels (one row of 16 pixels). The screen is organized as 256 rows, with 32 words per row (32 × 16 = 512 pixels per row).

To draw a pixel at row r, column c:
1. Compute the word address: `Screen[r * 32 + c / 16]`
2. Compute the bit position within the word: `c % 16`
3. Set the corresponding bit to 1 (black) or 0 (white).

For example, to draw a black pixel at row 0, column 0:
- Address = 16384 + 0 * 32 + 0 / 16 = 16384
- Bit position = 0 % 16 = 0
- Write `1` to bit 0 of address 16384.

To draw a black pixel at row 0, column 17:
- Address = 16384 + 0 * 32 + 17 / 16 = 16384 + 1 = 16385
- Bit position = 17 % 16 = 1
- Write `1` to bit 1 of address 16385.

**The Hack keyboard:**

The keyboard is memory-mapped to address 24576. Reading from this address returns the ASCII code of the currently pressed key. If no key is pressed, the value is 0. The keyboard interface is extremely simple: it is a read-only register that the hardware updates whenever a key is pressed or released.

**Keyboard codes:**
- The keyboard returns ASCII codes for printable characters (e.g., 'A' = 65, '0' = 48).
- Special keys have extended codes: newline = 128, backspace = 129, left arrow = 130, up arrow = 131, right arrow = 132, down arrow = 133, home = 134, end = 135, page up = 136, page down = 137, insert = 138, delete = 139, escape = 140, F1-F12 = 141-152.

**Building the complete computer:**

The complete Hack computer is built from three chips:
1. **CPU:** The processor we built in the previous chapter.
2. **Memory:** The RAM16K chip we built, plus the screen and keyboard memory maps. The Memory chip combines data memory, screen, and keyboard into a single addressable space.
3. **ROM:** The instruction memory. This is provided by the simulator and loads the program from a file.

The Computer chip connects these three components:
```hdl
CHIP Computer {
    IN reset;

    PARTS:
    ROM32K(address=pc, out=instruction);
    CPU(inM=inM, instruction=instruction, reset=reset, outM=outM, writeM=writeM, addressM=addressM, pc=pc);
    Memory(in=outM, load=writeM, address=addressM, out=inM);
}
```

The connections are:
- The PC output from the CPU is connected to the ROM address input (fetching the next instruction).
- The ROM output (instruction) is connected to the CPU instruction input.
- The CPU's outM, writeM, and addressM are connected to the Memory chip (writing to data memory or screen).
- The Memory output (inM) is connected to the CPU's inM input (reading from data memory or keyboard).
- The reset signal initializes the computer (resets the PC to 0).

This is the complete computer! It fetches instructions from ROM, executes them in the CPU, and reads/writes data from/to memory. The screen and keyboard are part of the memory space, so programs can draw graphics and read keyboard input simply by writing to and reading from memory addresses.

#### Key concepts
- Memory-mapped I/O: I/O devices as memory addresses
- Advantages of memory-mapped I/O: simplicity, uniformity, flexibility
- Hack screen: 256×512 pixels, black and white, 8K words (16384-24575)
- Screen addressing: row * 32 + col / 16, bit position = col % 16
- Hack keyboard: single address (24576), ASCII code, 0 if no key pressed
- Keyboard special codes: newline, backspace, arrow keys, function keys
- Complete computer: CPU + Memory + ROM
- Computer chip connections: PC to ROM, instruction to CPU, CPU to Memory, Memory to CPU
- Reset signal and initialization
- The von Neumann cycle in action: fetch from ROM, execute in CPU, read/write memory

#### Hands-on activity
Write a Hack assembly program that draws a horizontal line across the middle of the screen. The program should:
1. Set the A register to the screen address for row 128 (the middle row).
2. Write `0xFFFF` (all 1s = 16 black pixels) to each word in that row (32 words total).

Then write a program that waits for a key press and displays the key's ASCII code on the screen. The program should:
1. Read the keyboard memory map (address 24576).
2. If the value is non-zero, draw a character representing that key on the screen.
3. Loop until a key is pressed.

Test your programs using the Computer Simulator, which simulates the complete Hack computer including the screen and keyboard.

#### Assessment idea
Ask: "Why does the Hack screen use memory-mapped I/O instead of special 'draw pixel' instructions? What are the advantages of this approach?" Answer: Memory-mapped I/O is used because it eliminates the need for special I/O instructions and hardware. The CPU can write to the screen using the same instructions it uses for writing to RAM (e.g., `M=D`). This simplifies the CPU design because no special I/O control logic is needed. The advantages are: (1) simplicity — the CPU doesn't need special instructions or buses for I/O; (2) flexibility — any program can draw graphics without special system calls; (3) performance — writing to memory is fast and direct; (4) uniformity — the same addressing mechanism works for all memory and I/O. The trade-off is that programs must compute the correct memory addresses and bit positions for pixels, which is more complex than a high-level "draw pixel" command. However, this complexity is exactly what makes the Hack computer educational: it forces the programmer to understand the low-level representation of graphics. Then ask: "How many memory addresses does the Hack screen occupy, and how many pixels does it control? Calculate the ratio of memory words to pixels." Answer: The Hack screen occupies 8,192 memory addresses (24575 - 16384 + 1 = 8192). It controls 256 rows × 512 columns = 131,072 pixels. The ratio is 8192 words / 131,072 pixels = 1 word per 16 pixels. This is because each memory word is 16 bits, and each pixel is 1 bit (black or white). So each word controls 16 horizontal pixels. This is an efficient representation: the screen requires only 8K words of memory out of the 16K total data memory, leaving 8K for program data. The trade-off is that drawing individual pixels requires bit manipulation (reading the current word, modifying one bit, and writing the word back), which is more complex than writing entire words. But this is a reasonable trade-off for a simple educational computer.

#### AI generation note
Create an animated lesson showing memory-mapped I/O as a special district in the memory city. Show the screen district as a billboard where each memory word controls 16 lights. Show the keyboard district as a single sensor that reports the current key. Show the complete computer as three connected buildings: the CPU factory, the ROM library, and the Memory warehouse. Show data flowing between the buildings on conveyor belts. Show the reset signal as a fire alarm that resets everything to zero. Show a program drawing on the screen as a painter coloring the billboard. End with a reflection: "What would be the advantage of having separate I/O instructions instead of memory-mapped I/O?"

---

### Chapter 3.5 — The Fetch-Execute Cycle in Detail

#### Learning objectives
- Trace the fetch-execute cycle for both A-instructions and C-instructions.
- Understand how the PC, A register, D register, and ALU interact during each cycle.
- Analyze the timing of instruction execution in the Hack computer.
- Describe how the CPU handles jumps and conditional branching.

#### Detailed lesson content

The fetch-execute cycle is the heartbeat of the computer. Every instruction a program executes goes through this cycle. Understanding it in detail is essential for understanding how programs run, how to write efficient assembly code, and how to debug programs at the machine level.

**The fetch-execute cycle step by step:**

At the beginning of each clock cycle, the CPU is in a known state: the PC holds the address of the next instruction, and the registers (A, D) hold their current values. The cycle proceeds as follows:

**Step 1: Fetch**
- The CPU sends the PC value to the ROM.
- The ROM returns the instruction at that address.
- The instruction is available at the start of the cycle.

**Step 2: Decode**
- The CPU examines the first bit of the instruction.
- If bit 15 = 0, it is an A-instruction.
- If bit 15 = 1, it is a C-instruction.
- For a C-instruction, the CPU extracts the a-bit, comp bits, dest bits, and jump bits.

**Step 3: Execute**
- **For A-instructions:** The CPU loads the 15-bit value into the A register. The PC is incremented by 1.
- **For C-instructions:**
  - The CPU selects the ALU inputs based on the a-bit (A or M).
  - The ALU computes the result based on the comp bits.
  - The CPU stores the result in the destinations specified by the dest bits (A, D, M).
  - The CPU checks the jump condition using the ALU flags (zr, ng) and the jump bits.
  - If the jump condition is true, the PC is loaded with the value in the A register.
  - If the jump condition is false, the PC is incremented by 1.

**Step 4: Update**
- On the clock edge, all state changes take effect: registers are updated, memory is written, and the PC is updated.
- The cycle repeats with the new PC value.

**Example trace:**

Program:
```
@5     // Address 0: A-instruction, value 5
D=A    // Address 1: C-instruction, D=A
@10    // Address 2: A-instruction, value 10
D=D+A  // Address 3: C-instruction, D=D+A
```

Cycle 1 (Fetch @0):
- PC = 0, instruction = `@5` (A-instruction)
- Execute: A = 5, PC = 1

Cycle 2 (Fetch @1):
- PC = 1, instruction = `D=A` (C-instruction, comp=A, dest=D, jump=no jump)
- Execute: ALU computes A = 5, stores in D. D = 5. PC = 2.

Cycle 3 (Fetch @2):
- PC = 2, instruction = `@10` (A-instruction)
- Execute: A = 10, PC = 3

Cycle 4 (Fetch @3):
- PC = 3, instruction = `D=D+A` (C-instruction, comp=D+A, dest=D, jump=no jump)
- Execute: ALU computes D + A = 5 + 10 = 15. Stores in D. D = 15. PC = 4.

**Conditional branching:**

Conditional branching is implemented by the jump bits of the C-instruction. For example:
```
@100   // A = 100
D=D-A  // D = D - A (compute D - 100)
@END   // A = address of END label
D;JLT  // If D < 0 (i.e., original D < 100), jump to END
```

The `D;JLT` instruction computes `D - A` (which is `D - 100`), and if the result is negative (ALU ng flag = 1), the PC is loaded with the address of END. This is how if-statements and loops are implemented at the machine level.

**Timing considerations:**

In the Hack computer, each instruction takes exactly one clock cycle. This is a simplified model — real processors have multi-cycle execution for complex instructions and pipelining for overlapping instructions. But the principle is the same: the CPU fetches, decodes, and executes one instruction per cycle (or per pipeline stage).

**The von Neumann bottleneck in the Hack computer:**

The Hack computer exhibits the von Neumann bottleneck: the CPU can only fetch one instruction per cycle from ROM, and it can only read or write one memory location per cycle from RAM. It cannot fetch an instruction and read data simultaneously because it uses the same address/data paths for both. This is a deliberate simplification. Real processors have separate instruction and data caches (Harvard architecture at the cache level) to overcome this bottleneck.

#### Key concepts
- Fetch-execute cycle: fetch, decode, execute, update
- A-instruction execution: load A, increment PC
- C-instruction execution: ALU compute, store to destinations, check jump, update PC
- PC update: increment for sequential, load for jumps
- Conditional branching: jump bits + ALU flags
- Example trace: step-by-step execution of a simple program
- One instruction per clock cycle (simplified model)
- von Neumann bottleneck in the Hack computer
- Real processors: pipelining, multi-cycle execution, separate caches

#### Hands-on activity
Trace the fetch-execute cycle for the following program by hand. Show the state of PC, A, D, and ALU flags at each cycle:

```
@7
D=A
@3
D=D-A
@LOOP
D;JGT
@END
0;JMP
(LOOP)
@1
D=D-A
@LOOP
D;JGT
(END)
@END
0;JMP
```

This program computes 7 - 3 - 1 - 1 = 2 using a loop. Count the total number of cycles. Then, load the program into the CPU Emulator and verify your trace. Compare your hand trace with the emulator's output. Identify any discrepancies and explain why they occurred.

#### Assessment idea
Ask: "Why does the Hack CPU require that the A register be loaded with the target address before a C-instruction with a jump is executed? Why can't the jump instruction specify the target address directly?" Answer: The C-instruction format is limited to 16 bits, and the jump field uses only 3 bits. There is no room in the C-instruction to encode a 15-bit target address. The A-instruction format can hold a 15-bit value, but it only loads the A register. Therefore, the standard pattern for a jump is: first load the target address into A using an A-instruction, then execute a C-instruction with a jump that uses the address in A. This is a two-instruction sequence for every jump. This is a limitation of the Hack instruction set, but it is a common pattern in many processors (e.g., some RISC processors use a similar pattern where the target address is loaded into a register first). The trade-off is that jumps require two instructions instead of one, but the instruction format is simpler and more regular. Then ask: "A program loop executes 1000 times. The loop body is 5 instructions long, and the loop control (increment, compare, jump) is 3 instructions. How many clock cycles does the loop take, and what is the overhead of the loop control as a percentage?" Answer: Each iteration executes 5 + 3 = 8 instructions. With 1000 iterations, the total instructions are 8000. Since each instruction takes one cycle, the loop takes 8000 cycles. The loop body takes 5 × 1000 = 5000 cycles. The loop control takes 3 × 1000 = 3000 cycles. The overhead is 3000 / 8000 = 37.5%. This means 37.5% of the cycles are spent on loop control rather than useful work. In a real processor with pipelining and branch prediction, the loop control overhead would be much lower because the branch prediction would correctly predict the jump most of the time. But in the Hack computer, every jump instruction is executed, and the overhead is significant. This demonstrates why loop optimization and unrolling are important in performance-critical code.

#### AI generation note
Create an animated lesson showing the fetch-execute cycle as a clockwork mechanism. Show the PC as a gear that advances one tooth per cycle. Show the fetch stage as a claw grabbing an instruction from ROM. Show the decode stage as a sorter reading the instruction type. Show the execute stage as workers (ALU, registers) performing the operation. Show the jump as a lever that resets the PC gear to a new position. Show the trace as a timeline with the state at each tick. Show the loop as a repeating pattern of operations. End with a reflection: "How does a modern processor execute billions of cycles per second?"

---

### Chapter 3.6 — Project 4: Building the Hack Computer

#### Learning objectives
- Complete Project 3 of the Nand2Tetris course (building the CPU and memory).
- Build and test the CPU, Memory, and Computer chips in HDL.
- Write and run simple assembly programs on the Hack computer.
- Understand the complete computer architecture from gates to system.

#### Detailed lesson content

Project 4 is the culmination of the hardware portion of the Nand2Tetris course. You will assemble the CPU, memory, and I/O into a complete, working computer. This is the moment when all the pieces come together: the logic gates you built in Project 1, the ALU and memory you built in Project 2, and the CPU you designed in the previous chapters.

**Project 4 specification:**

Build the following chips in HDL:
1. **CPU:** The Hack CPU with A register, D register, ALU, PC, and control logic.
2. **Memory:** The memory subsystem that combines RAM16K, screen, and keyboard.
3. **Computer:** The top-level chip that connects CPU, Memory, and ROM32K.

**CPU design:**

The CPU is the most complex chip in this project. It is built from:
- A register (Register chip from Project 2)
- D register (Register chip from Project 2)
- ALU (from Project 2)
- PC (from Project 2)
- Muxes and gates (from Project 1)

The CPU interface:
```hdl
CHIP CPU {
    IN inM[16], instruction[16], reset;
    OUT outM[16], writeM, addressM[15], pc[15];
}
```

The CPU internal logic is divided into:
1. **Instruction type detection:** Check bit 15 to distinguish A-instructions from C-instructions.
2. **A register logic:** Load A with instruction value (A-instruction) or ALU output (C-instruction with A as destination).
3. **D register logic:** Load D with ALU output (C-instruction with D as destination).
4. **ALU logic:** Select inputs (A or M), set control bits, compute result.
5. **Memory write logic:** Write ALU output to M (C-instruction with M as destination).
6. **PC logic:** Increment PC or load with A (for jumps) or reset to 0.

**Memory design:**

The Memory chip combines three address ranges:
- **RAM:** Addresses 0 to 16383 (16K words). Uses the RAM16K chip.
- **Screen:** Addresses 16384 to 24575 (8K words). Uses a memory-mapped screen device.
- **Keyboard:** Address 24576. Uses a memory-mapped keyboard device.

The Memory chip routes access based on the address:
```hdl
CHIP Memory {
    IN in[16], load, address[15];
    OUT out[16];

    PARTS:
    // Route to RAM, screen, or keyboard based on address
    // If address < 16384: access RAM16K
    // If 16384 <= address < 24576: access screen
    // If address = 24576: access keyboard
}
```

The routing is done using a DMux to select the load signal and a Mux to select the output.

**Computer design:**

The Computer chip is the top-level chip that connects everything:
```hdl
CHIP Computer {
    IN reset;

    PARTS:
    ROM32K(address=pc, out=instruction);
    CPU(inM=inM, instruction=instruction, reset=reset, outM=outM, writeM=writeM, addressM=addressM, pc=pc);
    Memory(in=outM, load=writeM, address=addressM, out=inM);
}
```

This is a complete computer! It can fetch instructions from ROM, execute them in the CPU, and read/write data from/to memory.

**Testing the computer:**

The Computer chip is tested using the Hardware Simulator with test scripts that load a program into ROM and verify the computer's behavior. The test scripts include:
- A simple program that adds two numbers.
- A program that uses conditional jumps.
- A program that writes to the screen.
- A program that reads from the keyboard.

**Running your own programs:**

Once the Computer chip is built, you can write your own assembly programs and run them on the computer using the CPU Emulator or the Hardware Simulator. The CPU Emulator is a software simulator that runs the Hack machine language without requiring the HDL implementation. It is useful for testing programs before running them on the hardware simulator.

**Writing assembly programs:**

The Hack assembly language is a symbolic version of the machine language. It uses mnemonics for instructions and allows labels and symbolic variables. For example:
```asm
// Add 2 + 3
@2
D=A
@3
D=D+A
@0
M=D

// Loop forever
(END)
@END
0;JMP
```

The assembly language is translated to machine code by the assembler (which we will build in Module 4).

#### Key concepts
- Project 4: the complete Hack computer
- CPU internal design: A register logic, D register logic, ALU logic, memory write, PC logic
- Memory chip: RAM16K + screen + keyboard with address-based routing
- Computer chip: CPU + Memory + ROM32K
- Testing the computer with test scripts
- CPU Emulator vs. Hardware Simulator
- Hack assembly language: mnemonics, labels, variables
- Writing and running assembly programs
- The moment of truth: seeing a program run on a computer you built from Nand gates

#### Hands-on activity
Complete Project 4 of the Nand2Tetris course. Build the CPU, Memory, and Computer chips. Test them with the provided test scripts. Then, write and run the following assembly programs on your computer:

1. **Add two numbers:** Add the values in RAM[0] and RAM[1] and store the result in RAM[2].

2. **Multiply two numbers:** Compute RAM[0] × RAM[1] using repeated addition and store in RAM[2]. Assume both numbers are non-negative and small (e.g., less than 100).

3. **Fill the screen:** Write a program that turns the entire screen black when any key is pressed and turns it white when no key is pressed. This program should run in an infinite loop, continuously checking the keyboard.

For each program, write the assembly, translate it to machine code (using the assembler or by hand), load it into the Computer Simulator, and observe the results. Debug any issues by tracing the fetch-execute cycle.

#### Assessment idea
Ask: "Project 4 requires building the CPU, Memory, and Computer chips. Which of these three chips is the most complex, and why?" Answer: The CPU is the most complex because it contains the most internal logic and the most interconnections. The Memory chip is mostly routing logic (selecting between RAM, screen, and keyboard based on address). The Computer chip is just three connections. The CPU, however, contains: the A register with its load logic (A-instruction or C-instruction destination), the D register with its load logic, the ALU with its input selection and control, the PC with its increment/load/reset logic, and the control logic that decodes instructions and generates all the control signals. The CPU has many internal wires and Muxes that must be correctly connected. It is the most error-prone chip to build because a single wrong connection can cause the entire computer to malfunction. The CPU is also the most interesting chip because it is where the "intelligence" of the computer resides — it is the component that makes decisions, performs calculations, and controls the flow of execution. Then ask: "The Fill program (turn screen black when a key is pressed) is one of the test programs for the computer. Explain how it works at the hardware level. What memory addresses does it read and write?" Answer: The Fill program works by continuously reading the keyboard memory map (address 24576) and writing to the screen memory map (addresses 16384 to 24575). The program logic is: (1) read the keyboard address; (2) if the value is non-zero (a key is pressed), set the A register to the screen base address (16384) and write `0xFFFF` (all black) to each screen word in a loop; (3) if the value is zero (no key pressed), write `0x0000` (all white) to each screen word. The program runs in an infinite loop, so it continuously monitors the keyboard and updates the screen. At the hardware level, each write to a screen address causes the corresponding pixels to be updated on the display. The keyboard address is read-only and is updated by the hardware whenever a key is pressed or released. This program demonstrates the power of memory-mapped I/O: a simple loop that reads and writes memory can create interactive graphics.

#### AI generation note
Create a project walkthrough video showing the complete computer assembly. Show the three chips (CPU, Memory, Computer) being built and connected. Show the internal CPU structure with all its components. Show the memory routing logic. Show a test program running on the computer. Show the Fill program turning the screen black and white. Show the moment when the student first sees their computer running a program. End with a reflection: "What does it mean to have built a computer from Nand gates?"

---

## Module 4: Machine Language and Assembler

> **Goal:** Learn the Hack machine language and build an assembler that translates symbolic assembly into binary machine code.

---

### Chapter 4.1 — Machine Language: Bits, Instructions, and the CPU

#### Learning objectives
- Understand the relationship between machine language and the hardware.
- Describe the binary encoding of A-instructions and C-instructions.
- Translate between Hack assembly and machine code.
- Explain how the CPU interprets the bits of an instruction.

#### Detailed lesson content

Machine language is the lowest-level programming language — it is the language that the CPU understands directly. Every program, no matter how high-level, is ultimately translated into machine language before it can be executed. Understanding machine language is essential for understanding how software interacts with hardware, how compilers work, and how to write efficient low-level code.

**Machine language as bits:**

Machine language is simply a sequence of binary numbers (bits) stored in memory. Each instruction is a binary pattern that encodes an operation. The CPU fetches these binary patterns from memory and executes them. The hardware does not understand text, symbols, or high-level concepts — it only understands bits.

**The Hack machine language:**

The Hack machine language is extremely simple, consisting of two instruction types, each 16 bits long:

1. **A-instruction (Address instruction):**
   ```
   0vvvvvvvvvvvvvvv
   ```
   - Bit 15: 0 (identifies as A-instruction)
   - Bits 0-14: A 15-bit value
   - Operation: Load the value into the A register
   - Example: `@5` → `0000000000000101` (binary)

2. **C-instruction (Compute instruction):**
   ```
   111accccccdddjjj
   ```
   - Bits 15-13: `111` (identifies as C-instruction)
   - Bit 12 (a): Selects ALU y input (0 = A, 1 = M)
   - Bits 11-6 (comp): 6-bit ALU control word (zx, nx, zy, ny, f, no)
   - Bits 5-3 (dest): 3-bit destination (A, D, M)
   - Bits 2-0 (jump): 3-bit jump condition

**The comp field:**

The comp field determines what the ALU computes. Each of the 64 possible 6-bit combinations maps to a specific ALU operation. The most common operations are:

| comp bits | ALU operation | Meaning |
|-----------|---------------|---------|
| 101010 | 0 | Constant 0 |
| 111111 | 1 | Constant 1 |
| 111010 | -1 | Constant -1 |
| 001100 | D | D register |
| 110000 | A | A register (or M if a=1) |
| 001101 | !D | Bitwise Not of D |
| 110001 | !A | Bitwise Not of A (or M) |
| 001111 | -D | Negation of D |
| 110011 | -A | Negation of A (or M) |
| 011111 | D+1 | Increment D |
| 110111 | A+1 | Increment A (or M) |
| 001110 | D-1 | Decrement D |
| 110010 | A-1 | Decrement A (or M) |
| 000010 | D+A | Add D and A (or M) |
| 010011 | D-A | Subtract A from D |
| 000111 | A-D | Subtract D from A |
| 000000 | D&A | Bitwise And |
| 010101 | D|A | Bitwise Or |

**The dest field:**

The dest field determines where the ALU output is stored:

| dest bits | Destination | Registers written |
|-----------|-------------|-------------------|
| 000 | null | None (discard result) |
| 001 | M | RAM[A] |
| 010 | D | D register |
| 011 | MD | RAM[A] and D register |
| 100 | A | A register |
| 101 | AM | A register and RAM[A] |
| 110 | AD | A register and D register |
| 111 | AMD | All three |

**The jump field:**

The jump field determines whether the PC is loaded with the value in A:

| jump bits | Condition | ALU flag check |
|-----------|-----------|----------------|
| 000 | null | No jump |
| 001 | JGT | Jump if out > 0 (not zr and not ng) |
| 010 | JEQ | Jump if out = 0 (zr) |
| 011 | JGE | Jump if out >= 0 (not ng) |
| 100 | JLT | Jump if out < 0 (ng) |
| 101 | JNE | Jump if out != 0 (not zr) |
| 110 | JLE | Jump if out <= 0 (zr or ng) |
| 111 | JMP | Unconditional jump |

**Example translation:**

Assembly: `D=M+1` (load M+1 into D register)
- C-instruction
- a = 1 (M is the y input)
- comp = M+1 = `110111`
- dest = D = `010`
- jump = null = `000`
- Machine code: `111` + `1` + `110111` + `010` + `000` = `1111110111010000`

#### Key concepts
- Machine language as binary instructions stored in memory
- A-instruction format: 0 + 15-bit value
- C-instruction format: 111 + a + comp + dest + jump
- comp field: 64 ALU operations encoded in 6 bits
- dest field: 8 destination combinations (A, D, M, and combinations)
- jump field: 8 jump conditions based on ALU flags
- Translation between assembly mnemonics and binary machine code
- The CPU as a decoder of binary instruction patterns

#### Hands-on activity
Translate the following assembly instructions to 16-bit binary machine code. Show your work for each instruction:

1. `@42` (A-instruction)
2. `D=A` (C-instruction)
3. `M=D+1` (C-instruction)
4. `D=D-M` (C-instruction)
5. `D;JGT` (C-instruction with jump)
6. `M=D&M` (C-instruction)
7. `AMD=D+1` (C-instruction with multiple destinations)

Then, translate the following binary machine code back to assembly:
1. `0000000000010100`
2. `1110110000010000`
3. `1110001100000001`
4. `1110101010000111`

Verify your translations using the reference tables for comp, dest, and jump fields.

#### Assessment idea
Ask: "The C-instruction has 6 bits for the comp field, 3 bits for the dest field, and 3 bits for the jump field. How many total unique C-instructions can be encoded? How many of these are actually useful?" Answer: The total number of unique C-instructions is 2^6 (comp) × 2^3 (dest) × 2^3 (jump) = 64 × 8 × 8 = 4096. However, not all of these are useful. The comp field has 64 possible values, but only about 18 of them correspond to meaningful ALU operations. The remaining 46 comp values produce either duplicate operations or nonsensical results (e.g., combinations of zx, nx, zy, ny, f, no that don't correspond to a useful function). The dest field has 8 useful combinations (including "null" which means don't store). The jump field has 8 useful combinations (including "null" which means don't jump). So the number of "useful" C-instructions is approximately 18 × 8 × 8 = 1152, but even many of these are redundant. The Hack computer only needs about 18 basic computations, 8 destinations, and 8 jumps, for a total of about 100 commonly used instructions. The large encoding space is a byproduct of the bit-field design, where each bit controls a specific feature independently. This is a common design pattern in processor instruction sets: the control word is wide to allow many combinations, but only a subset is used. Then ask: "Why does the A-instruction only have 15 bits for the value, not 16? What is the significance of the first bit being 0?" Answer: The first bit of every instruction is used to distinguish between A-instructions (0) and C-instructions (1). This is the instruction type bit. If it were not reserved, the CPU would not know how to interpret the remaining bits. By using the first bit as a type identifier, the CPU can immediately determine whether the instruction is an A-instruction (load a value) or a C-instruction (compute, store, jump). The trade-off is that A-instructions can only hold 15-bit values, limiting the range to 0 to 32767. In the Hack computer, this is sufficient because the memory address space is 15 bits (32K ROM, 16K RAM). The C-instruction, which starts with `111`, uses the first 3 bits for identification, leaving 13 bits for control. This is a simple and effective encoding scheme that the CPU can decode with minimal logic.

#### AI generation note
Create an animated lesson showing machine language as a secret code. Show the A-instruction as a single bar of light with a dark prefix. Show the C-instruction as a bar with three colored sections (comp, dest, jump). Show the comp field as a calculator keypad. Show the dest field as a set of mailboxes. Show the jump field as a traffic signal. Show translation as a decoder ring that converts symbols to binary. Show the CPU as a decoder that reads the pattern and executes the command. End with a reflection: "Why do computers need a 'language' at all? Why can't they just understand English?"

---

### Chapter 4.2 — Assembly Language: Symbols, Labels, and Mnemonics

#### Learning objectives
- Understand the purpose of assembly language as a human-readable form of machine language.
- Describe the syntax of Hack assembly: A-instructions, C-instructions, labels, and symbols.
- Translate between assembly programs and machine code.
- Explain the role of the assembler in the translation process.

#### Detailed lesson content

Writing programs in binary machine code is tedious and error-prone. Assembly language is a symbolic representation of machine language that is easier for humans to read and write. The assembler is a program that translates assembly language into machine code.

**Why assembly language?**

- **Readability:** `D=D+A` is much easier to understand than `1110000010000000`.
- **Symbolic addresses:** Labels like `@LOOP` and `@END` are easier to remember than numeric addresses like `@14`.
- **Variables:** Symbolic names like `@i` and `@sum` make programs self-documenting.
- **Portability:** Labels and symbols are resolved by the assembler, so the programmer doesn't need to know the exact memory addresses.

**Hack assembly syntax:**

1. **A-instructions:**
   ```
   @value
   ```
   - `value` is either a non-negative decimal number (0 to 32767) or a symbol.
   - If `value` is a number, the instruction loads that number into A.
   - If `value` is a symbol, the assembler resolves it to an address and loads that address into A.

2. **C-instructions:**
   ```
   dest=comp;jump
   ```
   - Either the `dest=` or `;jump` part may be omitted (but not both).
   - `comp` is a computation (e.g., `D+A`, `M-1`, `!D`, `0`).
   - `dest` is a destination (e.g., `M`, `D`, `MD`, `AMD`, `A`).
   - `jump` is a jump condition (e.g., `JGT`, `JEQ`, `JGE`, `JLT`, `JNE`, `JLE`, `JMP`).

   Examples:
   - `D=A` (load A into D, no jump)
   - `D=D+A` (add A to D, store in D, no jump)
   - `M=D;JGT` (store D in M, jump if D > 0)
   - `0;JMP` (unconditional jump, no store)

3. **Labels:**
   ```
   (LABEL_NAME)
   ```
   - Labels are pseudo-instructions that define a symbol for the current ROM address.
   - They are not translated into machine code; they are used to resolve symbolic addresses.
   - Example: `(LOOP)` defines the symbol `LOOP` to be the address of the next instruction.

4. **Symbols:**
   - **Predefined symbols:** The Hack assembly language defines a set of predefined symbols for RAM addresses:
     - `R0` to `R15` → addresses 0 to 15
     - `SCREEN` → 16384
     - `KBD` → 24576
     - `SP`, `LCL`, `ARG`, `THIS`, `THAT` → 0, 1, 2, 3, 4 (used by the VM and compiler)
   - **User-defined symbols:** Labels and variables defined by the programmer.
   - **Variables:** Any symbol that is not a predefined symbol or a label is treated as a variable. The assembler assigns variables to addresses starting from 16.

**Example assembly program:**
```asm
// Compute RAM[2] = RAM[0] + RAM[1]
@R0
D=M
@R1
D=D+M
@R2
M=D

// Infinite loop
(END)
@END
0;JMP
```

Translation:
- `@R0` → `@0` (predefined symbol) → `0000000000000000`
- `D=M` → `D=M` → `1111110000010000`
- `@R1` → `@1` → `0000000000000001`
- `D=D+M` → `D=D+M` → `1111000010000000`
- `@R2` → `@2` → `0000000000000010`
- `M=D` → `M=D` → `1110001100001000`
- `(END)` → label at address 6 (ROM address of next instruction)
- `@END` → `@6` → `0000000000000110`
- `0;JMP` → `0;JMP` → `1110101010000111`

**The assembler's job:**

The assembler performs two main tasks:
1. **Symbol resolution:** It builds a symbol table that maps symbol names to numeric addresses. It scans the program twice: first to find all labels and their addresses, then to translate all instructions and resolve symbols.
2. **Instruction translation:** It converts each A-instruction and C-instruction into its 16-bit binary representation using the reference tables for comp, dest, and jump fields.

#### Key concepts
- Assembly language as symbolic machine code
- A-instruction syntax: @value (number or symbol)
- C-instruction syntax: dest=comp;jump
- Labels: (LABEL_NAME) defining ROM addresses
- Predefined symbols: R0-R15, SCREEN, KBD, SP, LCL, ARG, THIS, THAT
- User-defined symbols and variables
- Variable allocation: starting from address 16
- The assembler's two-pass process: symbol resolution and instruction translation
- Symbol table: mapping names to addresses

#### Hands-on activity
Write the following Hack assembly programs and translate them to machine code by hand (or using the assembler):

1. **Max of two numbers:** Find the maximum of RAM[0] and RAM[1] and store in RAM[2].

2. **Sum of 1 to n:** Compute the sum of integers from 1 to RAM[0] and store in RAM[1]. Use a loop.

3. **Count negative numbers:** Count how many of the first 10 RAM locations (RAM[0] to RAM[9]) contain negative numbers. Store the count in RAM[10].

For each program, write the assembly with comments, then show the machine code translation. Include the symbol table showing all labels and variables and their resolved addresses.

#### Assessment idea
Ask: "In Hack assembly, a symbol like `@i` is treated as a variable if it is not predefined and not a label. How does the assembler know whether a symbol is a label, a predefined symbol, or a variable?" Answer: The assembler determines the type of a symbol by its context: (1) if the symbol is defined in a label declaration `(LABEL_NAME)`, it is a label; (2) if the symbol is in the predefined symbol table (R0-R15, SCREEN, KBD, SP, LCL, ARG, THIS, THAT), it is a predefined symbol; (3) otherwise, it is a variable. The assembler builds the symbol table in two passes: the first pass scans the entire program and records all labels with their ROM addresses; the second pass translates instructions and resolves symbols. For variables, the assembler assigns addresses starting from 16, incrementing for each new variable encountered. This two-pass approach ensures that all labels are known before any symbol references are resolved, so forward references (using a label before it is defined) work correctly. Then ask: "Why are variables allocated starting from address 16, and what happens if a program uses more than 240 variables?" Answer: Variables are allocated starting from address 16 because addresses 0 to 15 are reserved for predefined symbols (R0 to R15). These are commonly used as general-purpose registers or temporary variables. The variable allocation continues from 16 upward. If a program uses more than 240 variables, it would reach address 255, which is the last address before the stack area (which starts at 256). Using more than 240 variables would collide with the stack and cause memory corruption. In practice, programs written in assembly typically use few variables, and high-level programs (written in Jack) use the stack and heap for most storage, so this limit is rarely reached. However, it is a constraint of the Hack platform that programmers must be aware of.

#### AI generation note
Create an animated lesson showing assembly language as a human-readable map of machine code. Show mnemonics as friendly street names instead of numbers. Show labels as landmarks that make navigation easier. Show symbols as shortcuts that the assembler resolves. Show the two-pass assembler as a surveyor who first marks all landmarks (labels) and then draws the map (translates instructions). Show the symbol table as a legend. Show translation as converting the map to a set of GPS coordinates. End with a reflection: "Why do we need assemblers if compilers can generate machine code directly?"

---

### Chapter 4.3 — Writing Assembly Programs: Loops, Conditionals, and I/O

#### Learning objectives
- Write Hack assembly programs using loops, conditionals, and subroutines.
- Implement I/O operations: reading from the keyboard and writing to the screen.
- Understand the stack-based subroutine calling convention.
- Debug assembly programs using the CPU Emulator.

#### Detailed lesson content

Writing assembly programs requires thinking at the machine level. There are no variables in the traditional sense, no loops or conditionals as language constructs, and no built-in I/O functions. Everything must be implemented using the primitive operations of the machine: register loads, ALU operations, memory reads/writes, and jumps.

**Loops in assembly:**

A loop is implemented using a label and a conditional jump. For example, a loop that counts down from 10 to 0:
```asm
@10
D=A
@counter
M=D

(LOOP)
@counter
D=M
@END
D;JEQ    // If counter == 0, jump to END

@counter
D=M-1
M=D
@LOOP
0;JMP    // Unconditional jump back to LOOP

(END)
@END
0;JMP    // Infinite loop at END
```

**Conditionals in assembly:**

An if-statement is implemented using a conditional jump around a block of code. For example, `if (x > y) { z = x; } else { z = y; }`:
```asm
@x
D=M
@y
D=D-M   // D = x - y
@IF_TRUE
D;JGT   // If x > y, jump to IF_TRUE

@y      // else: z = y
D=M
@z
M=D
@END
0;JMP

(IF_TRUE)
@x      // z = x
D=M
@z
M=D

(END)
@END
0;JMP
```

**Screen I/O in assembly:**

Drawing to the screen requires writing to the screen memory map. For example, drawing a filled rectangle:
```asm
@SCREEN
D=A
@addr
M=D

@8192   // 8K words = full screen
D=A
@n
M=D

(LOOP)
@n
D=M
@END
D;JEQ

@addr
A=M
M=-1    // 0xFFFF = all black pixels

@addr
M=M+1

@n
M=M-1
@LOOP
0;JMP

(END)
@END
0;JMP
```

**Keyboard I/O in assembly:**

Reading the keyboard is a single memory read:
```asm
@KBD
D=M     // D = ASCII code of pressed key (0 if none)
```

**Subroutines:**

Subroutines (functions) in assembly require manual management of the return address. The caller must save the return address, jump to the subroutine, and the subroutine must return to the saved address. This is complex in Hack assembly because there is no hardware stack for return addresses. The standard approach is to use the stack (which we will implement in the VM module).

**Debugging assembly programs:**

The CPU Emulator is the primary debugging tool for Hack assembly. It allows you to:
- Load an assembly program and run it step by step.
- Inspect the state of all registers (A, D, PC) and memory.
- Set breakpoints at specific instructions.
- Watch variables by monitoring memory addresses.
- Trace the execution flow.

Common debugging techniques:
- Start with small test cases.
- Verify each loop iteration by hand.
- Check boundary conditions (zero, negative, maximum values).
- Use the screen and keyboard to create interactive test programs.

#### Key concepts
- Assembly programming: loops via labels and jumps
- Conditionals: conditional jumps around code blocks
- Screen I/O: writing to memory-mapped screen addresses
- Keyboard I/O: reading from memory-mapped keyboard address
- Rectangle drawing: looping over screen addresses
- Subroutines: manual return address management
- Debugging with the CPU Emulator: step-by-step, breakpoints, memory inspection
- Common assembly patterns: initialization, loop, conditional, I/O

#### Hands-on activity
Write and debug the following Hack assembly programs using the CPU Emulator:

1. **Fill screen with pattern:** Write a program that fills the screen with a checkerboard pattern (alternating black and white rows).

2. **Keyboard echo:** Write a program that displays the ASCII code of the currently pressed key on the screen. The program should update the display in real-time as keys are pressed.

3. **Factorial:** Write a program that computes n! (factorial) for a small n (e.g., n = 5) and stores the result in RAM[0]. Use a loop.

4. **String length:** Write a program that counts the length of a null-terminated string stored in RAM (starting at address 16) and stores the length in RAM[0].

For each program, write the assembly, test it in the CPU Emulator, debug any issues, and document the solution. Record the number of instructions and estimate the execution time (number of cycles).

#### Assessment idea
Ask: "A student writes an assembly program with a loop that should execute 10 times, but it executes 11 times. What is the most likely cause, and how would you debug it?" Answer: The most likely cause is an off-by-one error in the loop condition. Common mistakes include: (1) checking the counter at the end of the loop body instead of the beginning, causing an extra iteration; (2) using the wrong jump condition (e.g., `JGE` instead of `JGT`); (3) initializing the counter to the wrong value; (4) decrementing the counter after the jump check instead of before. To debug this, you would: (1) add a breakpoint at the jump instruction and inspect the counter value each iteration; (2) trace the first few iterations by hand to verify the logic; (3) check the initialization and update of the counter; (4) verify the jump condition matches the intended logic. In assembly, off-by-one errors are common because there is no high-level loop construct — the programmer must manage the counter, condition, and jump explicitly. Then ask: "The Hack assembly language has no built-in multiply or divide instructions. How would you implement multiplication of two numbers stored in RAM[0] and RAM[1]?" Answer: Multiplication is implemented using repeated addition. The algorithm is: initialize a result variable to 0, then add RAM[0] to the result RAM[1] times (or add RAM[1] to the result RAM[0] times). In assembly:
```asm
@R0
D=M
@a
M=D
@R1
D=M
@b
M=D
@result
M=0

(LOOP)
@b
D=M
@END
D;JEQ    // If b == 0, done

@a
D=M
@result
M=M+D    // result = result + a

@b
M=M-1    // b = b - 1
@LOOP
0;JMP

(END)
@result
D=M
@R2
M=D
```
This is the naive O(n) multiplication algorithm. For the small numbers used in the Hack computer, this is sufficient. Real processors have hardware multiply instructions that use much faster algorithms (e.g., Booth's algorithm, Wallace tree multipliers), but the Hack computer's simplicity means we implement multiplication in software.

#### AI generation note
Create an animated lesson showing assembly programming as a puzzle game. Show loops as circular paths with a gate that checks a counter. Show conditionals as forked paths with a guard that decides which way to go. Show screen I/O as a painter coloring a billboard. Show keyboard I/O as a sensor that triggers actions. Show debugging as a detective following clues through the program. Show the CPU Emulator as a time machine that lets you step through the program one cycle at a time. End with a reflection: "What is the hardest part of writing assembly programs compared to high-level languages?"

---

### Chapter 4.4 — The Assembler: Design and Implementation

#### Learning objectives
- Understand the two-pass assembler architecture.
- Implement a Hack assembler that translates assembly language to machine code.
- Build the symbol table and handle predefined symbols, labels, and variables.
- Write the assembler in a high-level language (Python, Java, etc.).

#### Detailed lesson content

The assembler is the first software tool we build in the Nand2Tetris course. It is a program that translates symbolic assembly language into binary machine code. Building the assembler is an important milestone because it is the first time we write a program that runs on the computer we built. It is also a practical introduction to the concepts of compilation, parsing, and code generation that we will explore in more detail in Module 7.

**Assembler architecture:**

The Hack assembler is a two-pass assembler. It reads the assembly source file twice:
1. **First pass:** Builds the symbol table by scanning the entire program. It identifies all labels `(LABEL)` and assigns them ROM addresses. It also initializes the predefined symbols (R0-R15, SCREEN, KBD, etc.).
2. **Second pass:** Translates each instruction to machine code. It resolves all symbols using the symbol table. For variables (symbols that are not labels or predefined), it assigns them addresses starting from 16.

**Symbol table:**

The symbol table is a dictionary (hash map) that maps symbol names to addresses. It starts with the predefined symbols:
```
R0  → 0, R1  → 1, ..., R15 → 15
SP  → 0, LCL → 1, ARG  → 2, THIS → 3, THAT → 4
SCREEN → 16384, KBD → 24576
```

During the first pass, labels are added:
```
(LOOP) at ROM address 4 → LOOP → 4
(END) at ROM address 12 → END → 12
```

During the second pass, variables are added:
```
@i (first occurrence) → i → 16
@sum (first occurrence) → sum → 17
```

**Translation rules:**

For A-instructions (`@value`):
- If `value` is a number, convert it to a 15-bit binary string.
- If `value` is a symbol, look it up in the symbol table and convert the address to binary.
- Prefix with `0` to form a 16-bit instruction.

For C-instructions (`dest=comp;jump`):
- Parse the instruction into dest, comp, and jump fields.
- Look up each field in the reference tables to get the binary codes.
- Combine: `111` + `a` + `comp` + `dest` + `jump`.

**Assembler implementation:**

The assembler can be written in any high-level language. A Python implementation is straightforward:
1. Read the source file line by line.
2. Remove comments and whitespace.
3. First pass: identify labels and build the symbol table.
4. Second pass: translate each instruction and write to the output file.
5. Output the binary machine code as a `.hack` file.

**Example translation:**

Input (assembly):
```asm
@2
D=A
@3
D=D+A
@0
M=D
```

Output (machine code):
```
0000000000000010
1110110000010000
0000000000000011
1110000010000000
0000000000000000
1110001100001000
```

**Parser module:**

The assembler can be structured as a pipeline:
1. **Parser:** Reads the input file, parses each line, and classifies it as A-instruction, C-instruction, or label.
2. **Code module:** Contains the translation tables (comp, dest, jump) and translates parsed instructions to binary.
3. **SymbolTable module:** Manages the symbol table (add, lookup, contains).
4. **Main:** Orchestrates the two passes and writes the output.

This modular design is the same pattern used in compilers, which we will build in Module 7.

#### Key concepts
- Two-pass assembler architecture: first pass for symbols, second pass for translation
- Symbol table: dictionary mapping names to addresses
- Predefined symbols: R0-R15, SP, LCL, ARG, THIS, THAT, SCREEN, KBD
- Label processing: assigning ROM addresses to labels
- Variable processing: assigning RAM addresses starting from 16
- A-instruction translation: number or symbol → 15-bit binary + prefix 0
- C-instruction translation: parsing dest=comp;jump → binary via lookup tables
- Assembler pipeline: Parser → Code module → SymbolTable → Main
- Modular design: separation of parsing, translation, and symbol management

#### Hands-on activity
Implement the Hack assembler in a programming language of your choice (Python, Java, C++, etc.). The assembler should:
1. Read a `.asm` file (Hack assembly).
2. Remove all whitespace and comments.
3. Build the symbol table in the first pass (handle labels and predefined symbols).
4. Translate all instructions to binary in the second pass (handle variables).
5. Write the output to a `.hack` file (one 16-bit binary instruction per line).

Test your assembler with the following programs:
- **Add.asm:** Adds two numbers (provided by the course).
- **Max.asm:** Finds the maximum of two numbers (provided by the course).
- **Rect.asm:** Draws a rectangle on the screen (provided by the course).
- **Pong.asm:** The Pong game (provided by the course — this is a large program that tests the assembler's robustness).

Compare your assembler's output with the reference `.hack` files provided by the course. If there are discrepancies, debug your assembler by tracing the symbol table and translation for each instruction.

#### Assessment idea
Ask: "Why does the Hack assembler need two passes instead of one? Could it be implemented as a single-pass assembler?" Answer: The Hack assembler needs two passes because labels can be referenced before they are defined (forward references). For example, a program might have `JMP` to a label `(LOOP)` that appears later in the file. In a single pass, when the assembler encounters the `JMP` instruction, it doesn't yet know the address of `(LOOP)` because it hasn't reached that label yet. A single-pass assembler would have to leave the address unresolved and patch it later, which is more complex. The two-pass approach is simpler: the first pass scans the entire program and builds a complete symbol table with all labels and their addresses. The second pass then translates all instructions, and all symbols are already known. This is a standard technique in assembler and compiler design. While a single-pass assembler is possible (and used in some systems), the two-pass approach is easier to implement and understand, especially for an educational project. Then ask: "What is the maximum number of variables a Hack assembly program can use, and why?" Answer: Variables are allocated starting from address 16. The data memory is 16K words (addresses 0 to 16383). However, the stack starts at address 256, and the heap grows upward from the stack. In practice, the usable variable space is from 16 to 255 (240 variables) before colliding with the stack area. If a program uses more than 240 variables, it would overwrite the stack, causing memory corruption. However, this is a soft limit: the VM and compiler manage memory more carefully, and a carefully written assembly program could use more addresses if it doesn't use the stack. But for typical assembly programs, the practical limit is about 240 variables. This is a constraint of the Hack platform but is rarely a problem in practice because high-level programs use the stack and heap for most storage, and assembly programs typically use few variables.

#### AI generation note
Create an animated lesson showing the assembler as a factory. Show the first pass as a scanner that marks all landmarks (labels). Show the second pass as a translator that converts symbols to numbers. Show the symbol table as a rolodex. Show the parser as a sorter that separates A-instructions, C-instructions, and labels. Show the code module as a lookup machine that converts mnemonics to binary. Show the output as a stack of binary cards. Show the assembler pipeline as a conveyor belt with stations. End with a reflection: "What is the difference between an assembler and a compiler?"

---

### Chapter 4.5 — Project 5: The Assembler

#### Learning objectives
- Complete Project 6 of the Nand2Tetris course (building the assembler).
- Test the assembler on a variety of programs, including the Pong game.
- Understand the relationship between assembly language and machine code.
- Reflect on the process of building a tool that translates human-readable code into machine-executable code.

#### Detailed lesson content

Project 5 is the first software project in the Nand2Tetris course. You will build an assembler that translates Hack assembly language into Hack machine code. This project bridges the gap between hardware and software: you are writing a program that runs on a conventional computer (your laptop) to produce code that runs on the computer you built (the Hack computer).

**Project 5 specification:**

Implement a Hack assembler program that:
1. Accepts a single command-line argument: the name of a `.asm` file (e.g., `Prog.asm`).
2. Outputs a file named `Prog.hack` containing the translated machine code.
3. Each line in the output file consists of 16 `0`/`1` characters, representing a single 16-bit instruction.
4. Handles all features of the Hack assembly language: A-instructions, C-instructions, labels, and variables.

**Recommended implementation language:**

The assembler can be written in any language. Python is recommended because:
- It has excellent string handling and file I/O.
- Its dictionary type is perfect for the symbol table.
- It is concise and easy to debug.
- The Nand2Tetris course provides starter code in Python, Java, and C++.

**Assembler structure:**

```python
def main():
    # Read input file
    input_file = sys.argv[1]
    output_file = input_file.replace('.asm', '.hack')
    
    # Initialize
    parser = Parser(input_file)
    symbol_table = SymbolTable()
    code = Code()
    
    # First pass: build symbol table
    rom_address = 0
    while parser.has_more_lines():
        parser.advance()
        if parser.instruction_type() == 'L_INSTRUCTION':
            symbol = parser.symbol()
            symbol_table.add_entry(symbol, rom_address)
        else:
            rom_address += 1
    
    # Second pass: translate
    parser.reset()
    ram_address = 16
    with open(output_file, 'w') as out:
        while parser.has_more_lines():
            parser.advance()
            if parser.instruction_type() == 'A_INSTRUCTION':
                symbol = parser.symbol()
                if symbol.isdigit():
                    address = int(symbol)
                else:
                    if not symbol_table.contains(symbol):
                        symbol_table.add_entry(symbol, ram_address)
                        ram_address += 1
                    address = symbol_table.get_address(symbol)
                out.write(f'{address:016b}\n')
            elif parser.instruction_type() == 'C_INSTRUCTION':
                comp = code.comp(parser.comp())
                dest = code.dest(parser.dest())
                jump = code.jump(parser.jump())
                out.write(f'111{comp}{dest}{jump}\n')
```

**Testing:**

Test your assembler with the programs provided by the course:
1. **Add.asm:** A simple program that adds two numbers. Tests basic A-instructions and C-instructions.
2. **Max.asm:** Finds the maximum of two numbers. Tests labels and conditional jumps.
3. **Rect.asm:** Draws a rectangle on the screen. Tests variables and screen memory access.
4. **Pong.asm:** A complete Pong game. Tests the assembler on a large, complex program with hundreds of instructions, labels, and variables.

Compare your output with the reference `.hack` files. If there are differences, trace through your assembler to find the bug. Common bugs include:
- Off-by-one errors in label addresses (forgetting that labels point to the *next* instruction).
- Incorrect handling of whitespace or comments.
- Missing predefined symbols.
- Incorrect variable allocation (starting from the wrong address).
- Wrong lookup in the comp/dest/jump tables.

**The significance of the assembler:**

The assembler is the first program you write that bridges the gap between human-readable code and machine-executable code. It is the simplest form of a compiler. Understanding how the assembler works is the foundation for understanding compilers, which we will build in Module 7. The assembler demonstrates that computers can manipulate programs as data — a program (the assembler) reads another program (the assembly source) and produces a third program (the machine code). This self-referential capability is a profound aspect of computing.

#### Key concepts
- Project 5: building the Hack assembler
- Command-line interface: input `.asm` file, output `.hack` file
- Assembler implementation in Python/Java/C++
- Parser, SymbolTable, and Code modules
- First pass: label resolution
- Second pass: instruction translation and variable allocation
- Testing with provided programs: Add, Max, Rect, Pong
- Common assembler bugs and debugging strategies
- The assembler as the simplest compiler
- Programs manipulating programs: the self-referential nature of computing

#### Hands-on activity
Complete Project 5 of the Nand2Tetris course. Build the Hack assembler and test it thoroughly. After completing the project, answer the following questions:
1. How many lines of code is your assembler? How many modules (classes/functions)?
2. What was the most challenging part of the assembler to implement? Why?
3. How does your assembler handle comments and whitespace?
4. What would you need to change to make your assembler a single-pass assembler?
5. Write a reflection (1 page) on the relationship between the assembler and the hardware. How does the assembler "know" the instruction format of the Hack computer? What would happen if the hardware instruction format changed?

#### Assessment idea
Ask: "The Pong.asm program contains hundreds of instructions, labels, and variables. What does testing your assembler on Pong reveal that testing on Add.asm does not?" Answer: Testing on Pong reveals several issues that don't appear in small programs: (1) the assembler must handle large symbol tables efficiently; (2) it must correctly handle many variables and allocate them without conflicts; (3) it must parse complex C-instructions with all combinations of dest, comp, and jump; (4) it must handle forward references where labels are used before they are defined; (5) it must be robust against different formatting styles (spacing, comments, blank lines). Pong is a real-world stress test that validates the assembler's correctness and robustness. A small program like Add might pass even if the assembler has subtle bugs, but Pong will expose any issues. This is why testing on progressively larger programs is essential. Then ask: "The Hack assembler is a program that runs on your laptop (x86 or ARM) and produces code for the Hack computer (a different architecture). What is this an example of, and why is it significant?" Answer: This is an example of **cross-compilation** or **cross-assembly**: a tool running on one architecture produces code for a different architecture. This is significant because it means you can develop software for a target platform (the Hack computer) using a development machine (your laptop) that is more powerful and has better tools. This is how all embedded systems and mobile devices are developed: developers write code on PCs and compile it for ARM processors, microcontrollers, or other targets. The assembler demonstrates that software development is a layered process: you can build tools on one platform to create software for another. This abstraction is what makes computing scalable — you don't need to write machine code by hand; you write programs that write machine code. This is the foundation of the entire software industry.

#### AI generation note
Create a project walkthrough showing the assembler implementation. Show the code structure, the parser, the symbol table, and the translation logic. Show testing on Add, Max, Rect, and Pong. Show the output comparison with reference files. Show debugging of a common bug. Show the assembler running on a laptop and producing code for the Hack computer. End with a reflection: "What is the next logical step after building an assembler?"

---

### Chapter 4.6 — Beyond the Assembler: High-Level Languages and Compilation

#### Learning objectives
- Understand the role of the assembler in the software toolchain.
- Describe the compilation process: from high-level language to machine code.
- Compare assembly language with high-level languages.
- Preview the compiler and VM that will be built in subsequent modules.

#### Detailed lesson content

The assembler is the first step in the software toolchain, but it is not the last. Real programs are rarely written in assembly because it is too low-level and error-prone. Instead, programmers write in high-level languages (like C, Java, Python), which are then translated to machine code by compilers and interpreters. Understanding the assembler gives us the foundation for understanding the entire compilation process.

**The software toolchain:**

The path from source code to machine code typically involves several stages:
1. **High-level source code:** Written by the programmer in a language like C, Java, or Python.
2. **Compiler:** Translates high-level code to assembly or an intermediate representation.
3. **Assembler:** Translates assembly to machine code (object files).
4. **Linker:** Combines multiple object files and resolves external references.
5. **Loader:** Loads the executable into memory and prepares it for execution.

In the Nand2Tetris course, we will build:
- The assembler (Project 5, completed in Module 4).
- The Virtual Machine (VM) translator (Module 5 and 6).
- The compiler (Module 7).
- The operating system (Module 8).

Together, these form a complete toolchain from a high-level language (Jack) to machine code.

**Why high-level languages?**

High-level languages provide abstractions that make programming easier:
- **Variables and types:** Instead of managing registers and memory addresses, programmers use named variables with types.
- **Control structures:** Loops, conditionals, and function calls are expressed directly rather than via jumps and labels.
- **Functions and modularity:** Code is organized into reusable functions with parameters and return values.
- **Data structures:** Arrays, records, objects, and lists are built-in or easily constructed.
- **Portability:** High-level programs can be compiled for different architectures.

**The cost of abstraction:**

Each layer of abstraction has a cost. High-level languages are more convenient but may produce less efficient code than hand-written assembly. The compiler makes trade-offs between optimization and compilation time. Modern compilers use sophisticated optimization techniques (constant folding, loop unrolling, register allocation, inline expansion) to produce code that is often as efficient as hand-written assembly.

**The Jack language:**

In the Nand2Tetris course, the high-level language is called **Jack**. Jack is a simple, Java-like language designed for educational purposes. It supports:
- Classes, methods, and variables.
- Integers, booleans, and arrays.
- Control structures: if, while, for.
- Function calls and recursion.
- Object-oriented programming (classes, objects, methods, constructors).

Jack is simple enough to be compiled by a student-built compiler, yet powerful enough to write games (like Pong and Tetris) and an operating system.

**The compilation pipeline in Nand2Tetris:**

```
Jack source code (.jack)
  → Compiler (Module 7) → VM code (.vm)
  → VM Translator (Modules 5-6) → Assembly code (.asm)
  → Assembler (Module 4) → Machine code (.hack)
  → Computer (Modules 1-3) → Execution
```

This is a complete, end-to-end toolchain. You will build every component of this pipeline, from the high-level compiler to the low-level hardware.

#### Key concepts
- Software toolchain: compiler, assembler, linker, loader
- The Nand2Tetris toolchain: Jack → VM → Assembly → Machine code
- High-level language advantages: variables, control structures, functions, data structures
- The cost of abstraction: efficiency vs. convenience
- The Jack programming language: simple, Java-like, educational
- Jack features: classes, methods, variables, arrays, control structures, OOP
- Compilation pipeline: Jack source → VM code → Assembly → Machine code
- End-to-end toolchain from high-level language to hardware execution

#### Hands-on activity
Write a simple program in Jack (use the provided Jack compiler and OS for testing). The program should:
1. Read two numbers from the keyboard.
2. Compute their sum.
3. Print the result to the screen.

Then, trace the compilation pipeline:
1. Write the Jack source code.
2. Compile it to VM code using the provided Jack compiler.
3. Translate the VM code to assembly using the provided VM translator.
4. Assemble the assembly to machine code using your assembler from Project 5.
5. Run the machine code on the Computer Simulator.

Observe the output at each stage. How does the Jack code compare to the VM code? How does the VM code compare to the assembly? How does the assembly compare to the machine code? Write a brief comparison (1 page) of the four representations of the same program.

#### Assessment idea
Ask: "The Jack compiler produces VM code, not assembly or machine code directly. What is the advantage of this two-stage compilation (Jack → VM → Assembly) over a single-stage compilation (Jack → Assembly)?" Answer: The two-stage compilation has several advantages: (1) modularity — the compiler and VM translator are separate tools that can be developed and tested independently; (2) portability — the VM code is architecture-independent; if the target hardware changes, only the VM translator needs to be rewritten, not the compiler; (3) simplicity — the compiler only needs to generate VM code, which is higher-level than assembly; the VM translator handles the low-level details of register allocation and instruction selection; (4) optimization — the VM translator can optimize the VM code before generating assembly, improving code quality. This is the same architecture used by real compilers: Java compiles to bytecode (VM code), which is then translated to machine code by the JVM. C# compiles to IL (Intermediate Language), which is translated by the CLR. The two-stage approach is a proven pattern in compiler design. Then ask: "If you had to write a Tetris game, would you prefer to write it in Jack, VM code, assembly, or machine code? Why?" Answer: Jack is the obvious choice because it is the highest-level language and provides the most abstractions (variables, functions, objects, arrays). Writing Tetris in VM code would be tedious because you would have to manage the stack and memory manually. Writing it in assembly would be extremely difficult because you would have to implement all data structures and control flow using registers and jumps. Writing it in machine code would be nearly impossible for a human because it is just binary numbers with no symbolic names. Jack provides the right level of abstraction for writing complex programs while still being simple enough to understand the compilation process. This is why the Nand2Tetris course culminates in writing Tetris in Jack — it demonstrates that the entire toolchain, from Jack to hardware, works together to run a real, complex program.

#### AI generation note
Create an animated lesson showing the software toolchain as a factory assembly line. Show Jack source code as raw materials. Show the compiler as a refining station that produces VM code. Show the VM translator as a shaping station that produces assembly. Show the assembler as a packaging station that produces machine code. Show the computer as a delivery truck that executes the code. Show the layers of abstraction as a set of nested boxes: Jack inside VM inside Assembly inside Machine Code inside Hardware. End with a reflection: "What would be the ultimate high-level language — one that requires no compilation at all?"

---

## Module 5: Virtual Machine I: Stack Arithmetic

> **Goal:** Understand virtual machines and build a translator that converts VM code to assembly.

---

### Chapter 5.1 — The Virtual Machine Concept

#### Learning objectives
- Explain the concept of a virtual machine and its role in the software stack.
- Describe the stack-based execution model.
- Understand the advantages of a VM as an intermediate layer between high-level language and machine code.
- Compare the VM approach with direct compilation to machine code.

#### Detailed lesson content

A **virtual machine (VM)** is a software abstraction of a computer. It provides an execution environment that is independent of the underlying hardware. Instead of compiling a high-level language directly to machine code for a specific processor, the compiler generates code for a virtual machine. A separate program (the VM translator or interpreter) then translates or executes the VM code on the target hardware.

**Why use a virtual machine?**

1. **Portability:** The same VM code can run on any hardware that has a VM translator. The compiler only needs to target the VM, not every possible hardware platform. This is how Java works: Java compilers produce bytecode for the Java Virtual Machine (JVM), which runs on Windows, Linux, macOS, Android, and many other platforms.

2. **Simplicity:** The VM is simpler than real hardware. It has fewer instructions, a simpler memory model, and no hardware-specific details (registers, caches, pipelines). This makes the compiler easier to write and maintain.

3. **Optimization:** The VM translator can optimize the code for the target hardware without changing the compiler. This separation of concerns allows hardware vendors to optimize their VM translators without modifying the compiler.

4. **Security:** The VM can enforce safety checks (bounds checking, type checking, null pointer checks) that are difficult to implement at the hardware level. This is why Java and C# are considered "safe" languages — the VM prevents programs from accessing memory they shouldn't.

5. **Interoperability:** Multiple high-level languages can target the same VM. For example, Kotlin, Scala, and Groovy all compile to JVM bytecode, allowing them to interoperate with Java code.

**The stack-based VM model:**

The Hack VM is a **stack-based** virtual machine. All operations are performed on a stack. The stack is a region of memory where values are pushed and popped. Arithmetic operations pop operands from the stack, compute the result, and push the result back onto the stack.

For example, to compute `3 + 5`:
```
push 3    // Stack: [3]
push 5    // Stack: [3, 5]
add       // Pop 5 and 3, compute 3+5=8, push 8. Stack: [8]
```

The stack-based model is simple because it eliminates the need for registers. The compiler doesn't need to worry about register allocation — it just generates push and pop operations. The VM translator handles the mapping of stack operations to the underlying hardware's registers and memory.

**VM memory segments:**

The Hack VM uses several memory segments, each serving a different purpose:
1. **Stack:** The working stack for expressions and function calls. Grows and shrinks dynamically.
2. **Local:** Stores local variables of the current function.
3. **Argument:** Stores arguments passed to the current function.
4. **This:** Stores the base address of the current object (for object-oriented access).
5. **That:** Stores the base address of an array or another object.
6. **Constant:** A virtual segment that holds constant values (not stored in memory).
7. **Static:** Stores static variables (shared across all instances of a class).
8. **Pointer:** Stores the base addresses of this and that segments.
9. **Temp:** Stores temporary variables (for the VM translator's internal use).

These segments are mapped to the Hack hardware's RAM by the VM translator. For example, the Stack is mapped to RAM addresses starting at 256, the Local segment to addresses based on the LCL register, and so on.

**VM commands:**

The Hack VM has a small set of commands:
- **Stack arithmetic:** `add`, `sub`, `neg`, `eq`, `gt`, `lt`, `and`, `or`, `not`.
- **Memory access:** `push segment index`, `pop segment index`.
- **Program flow:** `label`, `goto`, `if-goto`.
- **Function calling:** `function`, `call`, `return`.

In this module, we focus on the stack arithmetic and memory access commands. Program flow and function calling are covered in Module 6.

#### Key concepts
- Virtual machine: software abstraction of a computer
- VM advantages: portability, simplicity, optimization, security, interoperability
- Stack-based VM: all operations on a stack
- Stack operations: push, pop, arithmetic
- VM memory segments: stack, local, argument, this, that, constant, static, pointer, temp
- VM commands: arithmetic, memory access, program flow, function calling
- VM as an intermediate layer between compiler and hardware
- Comparison with register-based VMs (e.g., LLVM IR)

#### Hands-on activity
Trace the execution of the following VM code by hand, showing the stack state after each command:

```
push constant 3
push constant 5
add
push constant 7
sub
neg
```

Then, trace the execution of:
```
push constant 10
push constant 5
push constant 3
add
sub
```

For each trace, show the stack contents after each command. Then, write the equivalent Hack assembly code for each VM program. Compare the VM code with the assembly — how much shorter is the VM code?

#### Assessment idea
Ask: "Why is a stack-based VM easier to compile to than a register-based architecture? What does the compiler not need to worry about?" Answer: A stack-based VM is easier to compile to because the compiler doesn't need to perform register allocation. In a register-based architecture (like x86 or ARM), the compiler must decide which values to keep in registers and which to spill to memory. This is a complex optimization problem (NP-complete in general). In a stack-based VM, the compiler simply pushes values onto the stack and pops them when needed. The VM translator handles the mapping from the stack to the hardware's registers and memory. The compiler also doesn't need to worry about the number of registers available or the calling convention for register usage. The trade-off is that stack-based VM code may be less efficient than register-based code because every operation involves memory accesses (push and pop), whereas register-based operations are faster. However, the VM translator can optimize these accesses during translation. Then ask: "The Java Virtual Machine (JVM) and the .NET Common Language Runtime (CLR) both use virtual machines. What are the similarities and differences between these industrial VMs and the Hack VM?" Answer: Similarities: (1) all three are intermediate layers between high-level languages and machine code; (2) all use bytecode that is translated or interpreted at runtime; (3) all provide portability across different hardware platforms. Differences: (1) the JVM and CLR are register-based or use hybrid models, while the Hack VM is purely stack-based; (2) the JVM and CLR have rich type systems and support for objects, generics, and exceptions, while the Hack VM is much simpler; (3) the JVM and CLR have Just-In-Time (JIT) compilers that translate bytecode to machine code at runtime, while the Hack VM translator is a static translator that produces assembly ahead of time; (4) the JVM and CLR have garbage collection, while the Hack VM has manual memory management; (5) the JVM and CLR are industrial-strength systems with decades of optimization, while the Hack VM is an educational tool. Despite these differences, the Hack VM illustrates the same fundamental principles: abstraction, portability, and the separation of compilation from execution.

#### AI generation note
Create an animated lesson showing a virtual machine as a theater stage. Show the stack as a stack of plates where operations are performed. Show the memory segments as labeled boxes backstage. Show the VM translator as a stage manager who translates the play (VM code) into actions (assembly) for the actors (hardware). Show portability as the same play being performed on different stages. Show Java as a famous traveling theater company. End with a reflection: "What would be the advantage of a universal virtual machine that all languages could target?"

---

### Chapter 5.2 — VM Stack Arithmetic: Add, Sub, Neg, and Comparisons

#### Learning objectives
- Implement the VM arithmetic commands: add, sub, neg.
- Implement the VM comparison commands: eq, gt, lt.
- Translate VM arithmetic commands to Hack assembly.
- Understand how the VM uses the stack for expression evaluation.

#### Detailed lesson content

The VM arithmetic commands operate on the top values of the stack. They pop operands, compute the result, and push the result back. This is the execution model of the stack-based VM.

**Arithmetic commands:**

1. **add:** Pop two values, compute their sum, push the result.
   ```
   Stack before: [..., x, y]
   Stack after: [..., x+y]
   ```
   Assembly implementation:
   ```asm
   @SP
   AM=M-1   // SP = SP - 1, A = SP (point to y)
   D=M      // D = y
   @SP
   AM=M-1   // SP = SP - 1, A = SP (point to x)
   D=D+M    // D = x + y
   M=D      // Push result
   @SP
   M=M+1    // SP = SP + 1
   ```

2. **sub:** Pop two values, compute `x - y` (x is below y on the stack), push the result.
   ```
   Stack before: [..., x, y]
   Stack after: [..., x-y]
   ```
   Assembly implementation: similar to add, but with `D=M-D` (x - y) instead of `D=D+M`.

3. **neg:** Pop one value, negate it, push the result.
   ```
   Stack before: [..., x]
   Stack after: [..., -x]
   ```
   Assembly implementation:
   ```asm
   @SP
   A=M-1    // A = top of stack
   M=-M     // Negate top value
   ```

**Comparison commands:**

Comparison commands pop two values, compare them, and push -1 (true) or 0 (false) onto the stack.

4. **eq:** Pop x and y, push -1 if x == y, else 0.
5. **gt:** Pop x and y, push -1 if x > y, else 0.
6. **lt:** Pop x and y, push -1 if x < y, else 0.

The comparison commands are tricky to implement because the Hack hardware does not have a native comparison instruction. We must use the ALU's subtraction and jump features:

Assembly implementation for `eq`:
```asm
// Compute x - y
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M-D    // D = x - y

// If D == 0, jump to EQ_TRUE
@EQ_TRUE
D;JEQ

// Not equal: push 0
@SP
A=M
M=0
@EQ_END
0;JMP

(EQ_TRUE)
@SP
A=M
M=-1     // Push -1 (true)

(EQ_END)
@SP
M=M+1
```

This requires generating unique labels for each comparison command to avoid conflicts. The VM translator typically generates labels like `EQ_1`, `EQ_2`, etc., using a global counter.

**Stack manipulation:**

The stack pointer (SP) is maintained in RAM[0] (address 0). The SP always points to the next free location on the stack. The stack grows from address 256 upward.
- **Push:** Store value at RAM[SP], then increment SP.
- **Pop:** Decrement SP, then read value from RAM[SP].

**The VM translator's job:**

The VM translator reads a `.vm` file and produces an `.asm` file. For each VM command, it generates a sequence of assembly instructions that implement the command on the Hack hardware. The translator must:
- Maintain the stack pointer (SP) in RAM[0].
- Generate the correct sequence of instructions for each VM command.
- Generate unique labels for comparisons and other control flow.
- Map VM memory segments to the correct hardware addresses.

#### Key concepts
- Stack arithmetic: pop operands, compute, push result
- add, sub, neg commands and their assembly implementation
- Comparison commands: eq, gt, lt and their assembly implementation
- True (-1) and false (0) representation in the VM
- Stack pointer (SP) management in RAM[0]
- Push and pop operations on the stack
- Label generation for comparisons
- VM translator as a code generator from VM to assembly

#### Hands-on activity
Implement the VM translator for the arithmetic commands (add, sub, neg, eq, gt, lt). Write a Python program that reads a `.vm` file containing only these commands and produces an `.asm` file. Test your translator with the following VM programs:

1. **Simple addition:**
   ```
   push constant 3
   push constant 5
   add
   ```

2. **Subtraction and negation:**
   ```
   push constant 10
   push constant 7
   sub
   neg
   ```

3. **Comparison:**
   ```
   push constant 5
   push constant 3
   gt
   push constant 5
   push constant 5
   eq
   ```

For each test, run the generated assembly through the assembler and execute it on the Computer Simulator. Verify that the stack contains the correct values after each program.

#### Assessment idea
Ask: "The comparison commands (eq, gt, lt) require generating unique labels in the assembly output. Why is this necessary, and what would happen if all eq commands used the same label?" Answer: If all eq commands used the same label (e.g., `EQ_TRUE`), then multiple eq commands in the same program would create duplicate labels in the assembly output. This would cause the assembler to fail because labels must be unique. Even if the assembler accepted duplicate labels, the jumps would be ambiguous: when an eq command jumps to `EQ_TRUE`, it would not know which `EQ_TRUE` to jump to. Unique labels (e.g., `EQ_TRUE_1`, `EQ_TRUE_2`) ensure that each comparison command has its own destination, avoiding conflicts. The VM translator maintains a global counter that increments for each comparison command, generating unique labels. This is a standard technique in code generation. Then ask: "Why does the VM use -1 for true and 0 for false, rather than 1 and 0?" Answer: The VM uses -1 for true because -1 in two's complement is represented as all 1s (`1111111111111111`). This is convenient for bitwise operations: if a boolean value is used in a bitwise And or Or, -1 acts as an identity element for And (`x & -1 = x`) and 0 acts as an identity element for Or (`x | 0 = x`). Additionally, the Hack assembly language's ALU can produce -1 directly with the control bits for the constant -1. The choice of -1 for true is a design decision that simplifies some operations, though it requires care when converting boolean values to integers for arithmetic. This is similar to how some programming languages represent true as -1 (e.g., Visual Basic).

#### AI generation note
Create an animated lesson showing stack arithmetic as a chef cooking. Show push as adding ingredients to a pile. Show add as taking the top two ingredients, mixing them, and putting the result back. Show comparison as a taste test that results in a thumbs up (-1) or thumbs down (0). Show the VM translator as a recipe converter that turns abstract recipes into step-by-step cooking instructions. Show unique labels as numbered recipe steps. End with a reflection: "Why is a stack a natural data structure for expression evaluation?"

---

### Chapter 5.3 — VM Memory Access: Push and Pop

#### Learning objectives
- Implement the VM memory access commands: push and pop.
- Map VM memory segments to Hack hardware addresses.
- Handle the constant, local, argument, this, that, pointer, temp, and static segments.
- Translate VM memory access commands to Hack assembly.

#### Detailed lesson content

The VM memory access commands (`push` and `pop`) transfer data between the stack and the VM's memory segments. Each segment is mapped to a specific region of the Hack hardware's RAM. The VM translator must generate the correct assembly code to access each segment.

**VM memory segments and their hardware mapping:**

| Segment | Purpose | Hardware Mapping |
|---------|---------|------------------|
| constant | Holds constant values | Virtual (no memory, values are embedded in instructions) |
| local | Local variables of current function | RAM[LCL + index] |
| argument | Arguments of current function | RAM[ARG + index] |
| this | Current object base address | RAM[THIS + index] |
| that | Array/object base address | RAM[THAT + index] |
| pointer | Stores base addresses of this and that | RAM[3 + index] (0=this, 1=that) |
| temp | Temporary variables | RAM[5 + index] (fixed locations) |
| static | Static variables per class | RAM[16 + index] (global for the class) |

**The special registers:**
- **SP (RAM[0]):** Stack pointer.
- **LCL (RAM[1]):** Base address of the local segment.
- **ARG (RAM[2]):** Base address of the argument segment.
- **THIS (RAM[3]):** Base address of the this segment.
- **THAT (RAM[4]):** Base address of the that segment.

**Push constant:**

The constant segment is virtual — it does not exist in memory. Pushing a constant simply loads the value into the stack:
```asm
@value
D=A
@SP
A=M
M=D
@SP
M=M+1
```

**Push local:**

Pushing from the local segment requires reading from RAM[LCL + index]:
```asm
@LCL
D=M      // D = base address of local
@index
A=D+A    // A = LCL + index
D=M      // D = value at local[index]
@SP
A=M
M=D
@SP
M=M+1
```

**Pop local:**

Popping to the local segment requires writing to RAM[LCL + index]:
```asm
@index
D=A
@LCL
D=M+D    // D = LCL + index (save in temp register)
@R13
M=D      // Save target address in temp
@SP
AM=M-1
D=M      // D = popped value
@R13
A=M
M=D      // Store at target address
```

Note: pop is more complex than push because we need to compute the target address before accessing the stack. We use a temporary register (R13) to hold the target address.

**Pointer segment:**

The pointer segment (RAM[3] and RAM[4]) is used to store the base addresses of the `this` and `that` segments. Pushing/popping the pointer segment manipulates these base addresses directly. For example, `pop pointer 0` sets `THIS` to the popped value.

**Temp segment:**

The temp segment is mapped to fixed RAM addresses (RAM[5] to RAM[12]). These are general-purpose temporary locations used by the VM translator.

**Static segment:**

The static segment is mapped to RAM addresses starting from 16. Each static variable in a class is assigned a unique address. Static variables are shared across all instances of a class and persist for the lifetime of the program.

**Segment access summary:**

| Command | Assembly approach |
|---------|-----------------|
| push constant i | Load i, push to stack |
| push local i | Read RAM[LCL + i], push to stack |
| pop local i | Pop from stack, write to RAM[LCL + i] |
| push argument i | Read RAM[ARG + i], push to stack |
| pop argument i | Pop from stack, write to RAM[ARG + i] |
| push this i | Read RAM[THIS + i], push to stack |
| pop this i | Pop from stack, write to RAM[THIS + i] |
| push that i | Read RAM[THAT + i], push to stack |
| pop that i | Pop from stack, write to RAM[THAT + i] |
| push pointer i | Read RAM[3 + i], push to stack |
| pop pointer i | Pop from stack, write to RAM[3 + i] |
| push temp i | Read RAM[5 + i], push to stack |
| pop temp i | Pop from stack, write to RAM[5 + i] |
| push static i | Read RAM[16 + i], push to stack |
| pop static i | Pop from stack, write to RAM[16 + i] |

#### Key concepts
- VM memory segments and their hardware mapping
- Special registers: SP, LCL, ARG, THIS, THAT
- Push constant: virtual segment, no memory access
- Push local/argument/this/that: base + index addressing
- Pop local/argument/this/that: compute target address, then pop
- Pointer segment: manipulates THIS and THAT base addresses
- Temp segment: fixed RAM locations (5-12)
- Static segment: global variables per class (starting at 16)
- The complexity of pop vs. push (target address computation)

#### Hands-on activity
Implement the VM memory access commands (push and pop for all segments) in your VM translator. Extend your Python program to handle:
- `push constant n`
- `push local n`, `pop local n`
- `push argument n`, `pop argument n`
- `push this n`, `pop this n`
- `push that n`, `pop that n`
- `push pointer n`, `pop pointer n`
- `push temp n`, `pop temp n`
- `push static n`, `pop static n`

Test your translator with the following VM programs:
1. Push and pop constants:
   ```
   push constant 10
   push constant 20
   pop local 0
   pop local 1
   push local 0
   push local 1
   add
   ```

2. Pointer manipulation:
   ```
   push constant 3000
   pop pointer 0
   push constant 4000
   pop pointer 1
   push this 0
   push that 0
   add
   ```

Verify the results by running the generated assembly on the Computer Simulator.

#### Assessment idea
Ask: "Why is the pop operation more complex than the push operation in terms of assembly code generation? What extra step does pop require?" Answer: Pop is more complex because it requires computing the target memory address before accessing the stack. For push, we simply compute the source address, read the value, and push it onto the stack. For pop, we must compute the destination address (e.g., LCL + index), then pop the value from the stack, and then write it to the destination. The problem is that we cannot hold both the destination address and the popped value in the D register simultaneously. The standard solution is to use a temporary register (R13) to hold the destination address while the value is popped from the stack. This requires extra instructions compared to push. Push requires about 5-6 assembly instructions, while pop requires about 8-9 instructions. This is a fundamental asymmetry in stack-based architectures: popping to memory is more expensive than pushing from memory. Then ask: "The static segment is mapped to RAM addresses starting from 16, and each class has its own static variables. How does the VM translator ensure that different classes don't use the same static addresses?" Answer: The VM translator ensures that different classes don't conflict by using a naming convention for static variables. Each static variable is named with the class name and the variable index, e.g., `ClassName.index`. The translator maintains a global symbol table for static variables across all classes. When a static variable is first encountered, it is assigned the next available RAM address starting from 16. Subsequent references to the same static variable use the same address. This is possible because the VM translator sees all the VM files in the program and can coordinate static allocation across classes. The Jack compiler generates static variable names that include the class name, so the translator can distinguish `Foo.0` from `Bar.0`. This global allocation ensures that static variables are shared across all instances of a class and persist for the program's lifetime, which is the correct semantics for static (class-level) variables.

#### AI generation note
Create an animated lesson showing the VM memory segments as a set of labeled drawers. Show the stack as a growing and shrinking pile of papers on a desk. Show push as taking a paper from a drawer and adding it to the pile. Show pop as taking a paper from the pile and filing it in a drawer. Show the constant segment as a virtual drawer that doesn't exist — the paper is created on the spot. Show the pointer segment as a drawer that controls which drawer is "this" and which is "that". Show the assembly code as a detailed filing instruction manual. End with a reflection: "Why does the VM have so many different memory segments instead of just one big memory?"

---

### Chapter 5.4 — VM Program Flow: Labels, Goto, and If-Goto

#### Learning objectives
- Implement the VM program flow commands: label, goto, if-goto.
- Translate VM program flow commands to Hack assembly using labels and jumps.
- Understand how the VM implements conditional and unconditional branching.
- Test VM program flow with simple control structures.

#### Detailed lesson content

Program flow control (branching and looping) is essential for any programming language. The VM provides three commands for program flow: `label`, `goto`, and `if-goto`. These commands are translated to assembly labels and jumps.

**VM program flow commands:**

1. **label labelName:** Defines a label at the current position. The label is used as a target for goto and if-goto commands.
2. **goto labelName:** Unconditional jump to the specified label.
3. **if-goto labelName:** Conditional jump to the specified label. The jump is taken if the top of the stack is non-zero (true). The top value is popped.

**Assembly translation:**

- `label LOOP` → `(LOOP)` in assembly.
- `goto LOOP` → `@LOOP` followed by `0;JMP` in assembly.
- `if-goto LOOP` → Pop the top value, then jump if non-zero:
  ```asm
  @SP
  AM=M-1
  D=M      // D = top value (popped)
  @LOOP
  D;JNE    // Jump if D != 0
  ```

**Label uniqueness:**

Labels in the VM are local to the current function. However, when translating to assembly, labels must be globally unique because the assembler does not have a concept of function scope. The VM translator typically generates unique labels by prefixing them with the function name. For example, a label `LOOP` in function `Main.main` becomes `Main.main$LOOP` in the assembly output.

**Implementing control structures:**

These three VM commands are sufficient to implement all control structures:
- **If-then:** `if-goto ELSE` ... `goto END` ... `label ELSE` ... `label END`
- **If-then-else:** `if-goto ELSE` ... `goto END` ... `label ELSE` ... `label END`
- **While loop:** `label LOOP` ... `if-goto END` ... `goto LOOP` ... `label END`
- **For loop:** Initialize counter, `label LOOP` ... decrement counter, `if-goto END` ... `goto LOOP` ... `label END`

The Jack compiler generates these patterns when translating high-level control structures to VM code.

**Example: If-then-else in VM:**

High-level Jack:
```jack
if (x > y) {
    x = x - y;
} else {
    y = y - x;
}
```

VM code:
```
push local 0    // x
push local 1    // y
gt              // x > y?
if-goto IF_TRUE
// else block
push local 1
push local 0
sub
pop local 1
goto IF_END
label IF_TRUE
// if block
push local 0
push local 1
sub
pop local 0
label IF_END
```

**Example: While loop in VM:**

High-level Jack:
```jack
while (i < n) {
    sum = sum + i;
    i = i + 1;
}
```

VM code:
```
label WHILE_START
push local 0    // i
push local 1    // n
lt
if-goto WHILE_END
push local 2    // sum
push local 0    // i
add
pop local 2
push local 0
push constant 1
add
pop local 0
goto WHILE_START
label WHILE_END
```

#### Key concepts
- VM program flow: label, goto, if-goto
- Assembly translation: labels, unconditional jumps, conditional jumps
- Label uniqueness: function-scoped labels with unique prefixes
- Control structures from VM commands: if-then, if-then-else, while, for
- Jack compiler's generation of VM code for control structures
- The if-goto pattern: pop condition, jump if true
- The power of three simple commands for all control flow

#### Hands-on activity
Extend your VM translator to handle program flow commands. Test it with the following VM programs:

1. **Simple loop:**
   ```
   push constant 5
   pop local 0
   label LOOP
   push local 0
   push constant 0
   gt
   if-goto END
   push local 0
   push constant 1
   sub
   pop local 0
   goto LOOP
   label END
   ```

2. **If-then-else:**
   ```
   push constant 10
   push constant 5
   gt
   if-goto ELSE
   push constant 1
   pop local 0
   goto END
   label ELSE
   push constant 2
   pop local 0
   label END
   ```

Verify that the control flow works correctly by running the generated assembly on the Computer Simulator. Trace the execution of the loop program and count how many iterations it performs.

#### Assessment idea
Ask: "The VM has only three program flow commands (label, goto, if-goto), yet these are sufficient to implement all control structures in high-level languages. How is this possible?" Answer: These three commands are sufficient because all control structures can be reduced to combinations of unconditional and conditional jumps. An if-then-else is implemented as: evaluate condition, if-goto else-block, execute then-block, goto end, label else-block, execute else-block, label end. A while loop is implemented as: label loop-start, evaluate condition, if-goto loop-end, execute loop body, goto loop-start, label loop-end. A for loop is implemented as: initialize counter, label loop-start, evaluate condition, if-goto loop-end, execute body, update counter, goto loop-start, label loop-end. All high-level control structures (switch, break, continue, nested loops) can be compiled into these basic patterns. This is the same principle used by all compilers: high-level constructs are translated into low-level jumps. The VM commands are the minimal set needed to express any control flow graph. This minimality is what makes the VM simple yet powerful. Then ask: "Why does the VM translator need to make labels globally unique by prefixing them with the function name, even though labels in VM code are local to a function?" Answer: The VM translator generates assembly code, and the Hack assembler treats all labels as global symbols. There is no concept of function scope or local labels in the assembly language. If two functions both contain a label `LOOP`, the assembly output would have two definitions of `LOOP`, which would cause the assembler to fail (or produce incorrect results). By prefixing labels with the function name (e.g., `Main.main$LOOP`), the translator ensures that each label is unique across the entire program. This is a standard technique in compiler design: mangling or decorating names to avoid conflicts when flattening nested scopes into a single global namespace. The same technique is used in real compilers (e.g., C++ name mangling) to handle overloaded functions, namespaces, and classes.

#### AI generation note
Create an animated lesson showing program flow as a maze. Show labels as rooms in the maze. Show goto as a teleport to a room. Show if-goto as a door that only opens if a condition is met. Show the VM translator as a maze designer who converts high-level maps into a network of rooms and doors. Show the Jack compiler as a cartographer who draws loops and branches. Show the VM code as a simplified maze with only three types of doors. End with a reflection: "Can any program be written using only goto statements? What are the dangers?"

---

### Chapter 5.5 — Project 6: VM Translator I (Stack Arithmetic and Memory Access)

#### Learning objectives
- Complete the first part of the VM translator project.
- Implement the VM arithmetic and memory access commands.
- Test the VM translator on provided VM programs.
- Understand the VM as a bridge between high-level language and hardware.

#### Detailed lesson content

Project 6 is the first part of the VM translator. You will implement a program that translates VM code to Hack assembly code. The translator handles the arithmetic and memory access commands, which are the foundation of the VM execution model.

**Project 6 specification:**

Implement a VM translator that accepts a `.vm` file or a directory containing `.vm` files and produces a single `.asm` file. The translator must handle:
- Stack arithmetic: `add`, `sub`, `neg`, `eq`, `gt`, `lt`, `and`, `or`, `not`.
- Memory access: `push` and `pop` for all segments (`constant`, `local`, `argument`, `this`, `that`, `pointer`, `temp`, `static`).
- Program flow: `label`, `goto`, `if-goto`.

**VM translator structure:**

The translator can be structured as a pipeline:
1. **Parser:** Reads each VM command, parses it into type and arguments.
2. **CodeWriter:** Generates the corresponding assembly code for each command.
3. **Main:** Orchestrates the translation process, handling files and directories.

**Example:**

Input (`SimpleAdd.vm`):
```
push constant 7
push constant 8
add
```

Output (`SimpleAdd.asm`):
```asm
// push constant 7
@7
D=A
@SP
A=M
M=D
@SP
M=M+1

// push constant 8
@8
D=A
@SP
A=M
M=D
@SP
M=M+1

// add
@SP
AM=M-1
D=M
@SP
AM=M-1
D=D+M
M=D
@SP
M=M+1
```

**Testing:**

Test the VM translator with the provided test programs:
- **SimpleAdd.vm:** Tests push constant and add.
- **StackTest.vm:** Tests all arithmetic and comparison commands.
- **BasicTest.vm:** Tests push and pop for all segments.
- **PointerTest.vm:** Tests pointer manipulation.
- **StaticTest.vm:** Tests static variables across multiple files.

For each test, compare the generated assembly with the reference output. Run the assembly through the assembler and execute it on the Computer Simulator to verify correctness.

**The VM translator as a compiler backend:**

The VM translator is essentially the backend of a compiler. It takes an intermediate representation (VM code) and generates target code (assembly). This is the same role that LLVM backends play in modern compilers. Understanding the VM translator gives you insight into how compilers generate code for real hardware.

#### Key concepts
- Project 6: VM translator for arithmetic and memory access
- Translator structure: Parser, CodeWriter, Main
- Handling all VM commands: arithmetic, memory access, program flow
- Generating assembly for each VM command
- Testing with provided VM programs
- The VM translator as a compiler backend
- Comparison with real compiler backends (LLVM, GCC)

#### Hands-on activity
Complete Project 6 of the Nand2Tetris course. Build the VM translator and test it on all provided programs. After completing the project, answer the following questions:
1. How many lines of code is your VM translator? How many modules?
2. Which VM command was the most difficult to translate? Why?
3. How does your translator handle the initialization of the stack pointer (SP = 256)?
4. What would you need to change to support multiple VM files in a single directory?
5. Write a reflection (1 page) on the relationship between the VM and the hardware. How does the VM abstract the hardware? What details does it hide? What details does it expose?

#### Assessment idea
Ask: "The VM translator generates assembly code that is much longer than the original VM code. For example, a single `add` VM command generates about 7 assembly instructions. Why is this expansion necessary, and does it make the VM approach inefficient?" Answer: The expansion is necessary because the VM is a higher-level abstraction than the hardware. Each VM command maps to multiple hardware instructions because the hardware does not have direct support for stack operations. The hardware has registers and ALU operations, but no stack pointer or automatic push/pop. The VM translator must implement these abstractions using the available hardware primitives. While this expansion seems inefficient, the VM approach is not inherently inefficient because: (1) the VM code is compact and easy to generate; (2) the VM translator can optimize the generated assembly (e.g., peephole optimization); (3) the overhead of stack manipulation is acceptable for many applications; (4) real VMs (like the JVM) use Just-In-Time (JIT) compilation to generate highly optimized machine code at runtime. The Hack VM translator is a static translator that does not optimize, but the principle is the same: a higher-level abstraction is compiled to a lower-level representation. The trade-off is between the convenience of the VM and the efficiency of the generated code. Then ask: "The VM translator initializes the stack pointer to 256. Why 256, and what is the significance of the addresses below 256?" Answer: The stack pointer is initialized to 256 because addresses 0 to 255 are reserved for special purposes. Address 0 holds the stack pointer (SP). Addresses 1 to 4 hold the base addresses of the local, argument, this, and that segments (LCL, ARG, THIS, THAT). Addresses 5 to 12 are the temp segment. Addresses 13 to 15 are reserved for general use by the VM translator (e.g., storing temporary values during pop operations). This leaves address 256 as the first free address for the stack. The stack grows upward from 256, and the heap grows downward from the top of memory (address 16383). The address 256 is a design choice that provides enough space for the reserved registers and temp variables while leaving most of memory for the stack and heap. This memory layout is part of the VM specification and is known to both the VM translator and the compiler.

#### AI generation note
Create a project walkthrough showing the VM translator architecture. Show the parser reading VM commands and extracting fields. Show the code writer generating assembly for each command. Show the testing process with SimpleAdd, StackTest, BasicTest, PointerTest, and StaticTest. Show the comparison with reference output. Show the VM translator as a bridge between VM code and hardware. End with a reflection: "What would a VM translator for a real processor (like x86 or ARM) look like?"

---

## Module 6: Virtual Machine II: Program Control

> **Goal:** Complete the VM translator by implementing function calling, the call stack, and program initialization.

---

### Chapter 6.1 — Function Calling: The Call Stack

#### Learning objectives
- Understand the call stack and its role in function invocation.
- Describe the calling convention: how arguments are passed, how the return address is saved, and how local variables are allocated.
- Implement the VM function commands: function, call, and return.
- Translate function calling to Hack assembly using the stack.

#### Detailed lesson content

Function calling is the mechanism by which a program transfers control from one function to another, passes arguments, and returns a result. The VM implements function calling using a **call stack** — a stack of **stack frames**, one for each active function call.

**The stack frame:**

Each time a function is called, a new stack frame is created on the stack. The stack frame contains:
1. **Arguments:** The values passed to the function by the caller.
2. **Local variables:** Variables declared within the function.
3. **Return address:** The address of the instruction in the caller that should be executed after the function returns.
4. **Saved segment pointers:** The previous values of LCL, ARG, THIS, and THAT, so they can be restored when the function returns.

**The function command:**

```
function functionName nLocals
```

This command declares the start of a function and specifies the number of local variables. The assembly implementation:
1. Generate a label for the function: `(functionName)`.
2. Push nLocals zeros onto the stack to initialize local variables.

**The call command:**

```
call functionName nArgs
```

This command calls a function with nArgs arguments. The assembly implementation is the most complex in the VM translator:
1. Push the return address onto the stack.
2. Push the current LCL, ARG, THIS, and THAT onto the stack (save the caller's frame).
3. Set ARG = SP - nArgs - 5 (the base of the arguments in the new frame).
4. Set LCL = SP (the base of the local variables in the new frame).
5. Jump to the function.

**The return command:**

```
return
```

This command returns from the current function to the caller. The assembly implementation:
1. Save the return value (the top of the stack) in a temporary location.
2. Restore the caller's stack frame: restore SP, LCL, ARG, THIS, THAT from the saved values.
3. Push the return value back onto the stack.
4. Jump to the return address.

**The calling convention:**

The calling convention is a contract between the caller and the callee. It specifies:
- How arguments are passed (pushed onto the stack by the caller).
- How the return address is saved (pushed by the call command).
- How local variables are allocated (pushed by the function command).
- How the return value is passed (left on the stack by the return command).
- Which registers are saved and restored (LCL, ARG, THIS, THAT).

This convention ensures that functions can call each other correctly, regardless of who wrote them.

**Example function call:**

Jack code:
```jack
class Main {
    function int add(int a, int b) {
        return a + b;
    }
    function void main() {
        var int x;
        let x = add(3, 5);
    }
}
```

VM code for `main` calling `add`:
```
// In main:
push constant 3
push constant 5
call Main.add 2
pop local 0

// In add:
function Main.add 0
push argument 0
push argument 1
add
return
```

**Nested function calls:**

When a function calls another function, the call stack grows. Each call adds a new stack frame. When a function returns, its stack frame is removed and the caller's frame is restored. This is how recursion works: each recursive call adds a new frame to the stack, and each return removes one.

#### Key concepts
- Function calling and the call stack
- Stack frame: arguments, local variables, return address, saved segment pointers
- function command: declare function, initialize locals
- call command: save frame, set up new frame, jump to function
- return command: restore frame, return value, jump to caller
- Calling convention: contract between caller and callee
- LCL, ARG, THIS, THAT saving and restoration
- Nested function calls and recursion
- The call stack as a runtime data structure

#### Hands-on activity
Trace the call stack for the following recursive function:

VM code:
```
function Main.factorial 0
push argument 0
push constant 1
eq
if-goto BASE
push argument 0
push argument 0
push constant 1
sub
call Main.factorial 1
mult
return
label BASE
push constant 1
return
```

Trace the stack frames for `factorial(3)`. Show the stack contents, LCL, ARG, and return address for each call. How many stack frames are created? How many are active at the deepest point?

Then, implement the function, call, and return commands in your VM translator. Test with the provided VM programs that include function calls (e.g., `FibonacciElement`, `StaticsTest`, `NestedCall`).

#### Assessment idea
Ask: "The call command saves five values on the stack: return address, LCL, ARG, THIS, and THAT. Why are these five values necessary, and why is ARG set to SP - nArgs - 5?" Answer: These five values are necessary to restore the caller's state when the function returns. The return address tells the function where to jump back to. The saved LCL, ARG, THIS, and THAT pointers are needed because the called function will overwrite these registers with its own values. By saving them on the stack, the return command can restore them to their original values. ARG is set to `SP - nArgs - 5` because: at the point of the call, SP points to the first free location after the pushed arguments. The arguments occupy nArgs locations. Below the arguments are the 5 saved values (return address, LCL, ARG, THIS, THAT). So the base of the arguments is `SP - nArgs - 5`. This formula places the ARG pointer at the first argument, which is what the function expects. The -5 accounts for the 5 saved values that are pushed after the arguments but before the function starts executing. This is a carefully designed convention that ensures the function can access its arguments via `argument 0`, `argument 1`, etc. Then ask: "What happens if a function calls itself recursively without a base case? What would the stack look like, and why would the program fail?" Answer: If a recursive function has no base case, it will call itself forever (infinite recursion). Each call pushes a new stack frame onto the call stack. The stack will grow indefinitely until it overflows into the heap or exceeds the available memory. Since the Hack computer has a fixed memory size (16K words), the stack will eventually overflow, overwriting data in the heap or causing unpredictable behavior. In practice, the program will appear to hang or crash because the stack pointer (SP) will exceed the valid memory range. This is a common bug in recursive programs and demonstrates why the call stack is a finite resource. Real operating systems handle stack overflow by detecting when the stack exceeds its limit and terminating the program with an error (stack overflow exception). The Hack computer does not have such protection, so the program would simply corrupt memory.

#### AI generation note
Create an animated lesson showing the call stack as a stack of trays in a cafeteria. Show function call as adding a new tray with food (arguments) and a note (return address). Show function return as removing the tray and reading the note to find where to go next. Show saved segment pointers as borrowed utensils that must be returned. Show recursion as a stack of trays that grows deeper with each call. Show stack overflow as the stack toppling over. End with a reflection: "What is the maximum recursion depth in the Hack computer, and how would you calculate it?"

---

### Chapter 6.2 — The VM Translator: Implementing Function Calling

#### Learning objectives
- Implement the function, call, and return commands in the VM translator.
- Generate the bootstrap code that initializes the VM and calls the main function.
- Handle multiple VM files and global labels.
- Test the complete VM translator with complex programs.

#### Detailed lesson content

This chapter completes the VM translator by implementing the function calling mechanism. This is the most complex part of the translator because it involves manipulating the stack, saving and restoring state, and managing the control flow between functions.

**The function command:**

```
function functionName nLocals
```

Assembly implementation:
```asm
(functionName)     // Function entry label
// Push nLocals zeros onto the stack
@nLocals
D=A
(LOOP)
@END_LOCALS
D;JEQ
@SP
A=M
M=0
@SP
M=M+1
D=D-1
@LOOP
0;JMP
(END_LOCALS)
```

**The call command:**

```
call functionName nArgs
```

Assembly implementation:
```asm
// Push return address
@RET_LABEL
D=A
@SP
A=M
M=D
@SP
M=M+1

// Push LCL, ARG, THIS, THAT
@LCL
D=M
@SP
A=M
M=D
@SP
M=M+1
// ... (similar for ARG, THIS, THAT)

// ARG = SP - nArgs - 5
@SP
D=M
@nArgs
D=D-A
@5
D=D-A
@ARG
M=D

// LCL = SP
@SP
D=M
@LCL
M=D

// Jump to function
@functionName
0;JMP

(RET_LABEL)
```

**The return command:**

```asm
// Save return value in temp
@SP
A=M-1
D=M
@R14
M=D

// Restore THAT, THIS, ARG, LCL
@LCL
D=M
@R13
M=D
// ... (restore segment pointers from the saved frame)

// Set SP = ARG + 1
@ARG
D=M+1
@SP
M=D

// Push return value
@R14
D=M
@SP
A=M-1
M=D

// Jump to return address
@R13
A=M
0;JMP
```

**Bootstrap code:**

When the VM program starts, the VM translator must initialize the VM state and call the main function. The bootstrap code:
```asm
// Initialize SP = 256
@256
D=A
@SP
M=D

// Call Sys.init (the OS entry point)
@Sys.init
0;JMP
```

The bootstrap code is added at the beginning of the generated assembly file. It sets up the stack and calls the operating system's initialization function.

**Handling multiple VM files:**

When the VM translator is given a directory, it processes all `.vm` files in the directory and generates a single `.asm` file. The translator must:
- Ensure that static variables are allocated globally across all files.
- Ensure that function names are unique (they are already unique by convention: `ClassName.functionName`).
- Concatenate the generated assembly for all files in the correct order.

**Testing:**

Test the complete VM translator with the following programs:
- **SimpleFunction:** Tests basic function calling with no arguments and one local.
- **NestedCall:** Tests nested function calls.
- **FibonacciElement:** Tests recursive function calls (Fibonacci).
- **StaticsTest:** Tests static variables across multiple files.
- **Pong:** Tests the complete VM with a real game.

#### Key concepts
- Function command assembly implementation
- Call command assembly implementation: saving frame, setting up new frame
- Return command assembly implementation: restoring frame, returning value
- Bootstrap code: initializing SP and calling Sys.init
- Handling multiple VM files: global static allocation, concatenation
- The call stack manipulation: pushing and popping frames
- Testing with complex programs: NestedCall, FibonacciElement, StaticsTest, Pong
- The complete VM translator architecture

#### Hands-on activity
Complete the function calling implementation in your VM translator. Add the bootstrap code and support for multiple files. Test with all provided programs. After completing the implementation, trace the execution of the Fibonacci program:

1. How many assembly instructions are generated for the Fibonacci VM code?
2. How many stack frames are created when computing fib(5)?
3. What is the maximum stack depth during the computation?
4. How many instructions are executed to compute fib(5)?

Use the CPU Emulator to run the generated assembly and count the cycles. Compare with the theoretical number of calls in the Fibonacci recursion.

#### Assessment idea
Ask: "The bootstrap code initializes SP to 256 and calls Sys.init. Why is Sys.init the entry point rather than Main.main?" Answer: Sys.init is the operating system's initialization function. It performs system setup (e.g., initializing the memory allocator, setting up the screen, initializing keyboard handling) and then calls Main.main to start the user's program. Using Sys.init as the entry point ensures that the OS is properly initialized before the user program runs. This is a standard pattern in operating systems: the boot process starts with system initialization, then transfers control to the user program. If Main.main were the entry point, the OS would not be initialized, and programs that rely on OS services (memory allocation, screen output) would fail. The bootstrap code is the lowest-level code that runs when the computer starts, and it must set up the environment before any user code executes. Then ask: "What is the purpose of saving and restoring LCL, ARG, THIS, and THAT during function calls? Why not just let the called function overwrite them?" Answer: LCL, ARG, THIS, and THAT are global registers that define the current function's context. The caller's values of these registers must be preserved so that when the called function returns, the caller can continue executing in its own context. If these registers were not saved, the caller would lose its local variables, arguments, and object/array base addresses. For example, if function A calls function B, and B overwrites LCL, then when B returns to A, A would no longer be able to access its local variables because LCL points to B's frame instead of A's frame. Saving and restoring these registers is what makes the call stack work: each function has its own context, and the context is preserved across function calls. This is the same principle used by all processors: the calling convention specifies which registers must be saved by the caller and which by the callee.

#### AI generation note
Create an animated lesson showing the complete function calling mechanism. Show the call command as a traveler packing a suitcase (saving the frame), buying a ticket (pushing return address), and boarding a plane (jumping to function). Show the function command as arriving at a hotel and setting up a room (initializing locals). Show the return command as packing up, returning the room key (restoring frame), and flying back (jumping to return address). Show the bootstrap code as the airport opening and the first flight departing. Show multiple VM files as different cities connected by flights. End with a reflection: "What would happen if the return address were not saved during a function call?"

---

### Chapter 6.3 — Project 7: The Complete VM Translator

#### Learning objectives
- Complete the VM translator project.
- Test the translator on all provided VM programs, including Pong and Tetris.
- Understand the VM as a complete abstraction layer.
- Reflect on the journey from VM code to hardware execution.

#### Detailed lesson content

Project 7 completes the VM translator. You now have a tool that translates VM code to assembly code, which can then be assembled to machine code and run on the Hack computer you built. This is a major milestone: you have built a complete software toolchain that runs on the hardware you designed from Nand gates.

**Project 7 specification:**

The complete VM translator must handle:
- All arithmetic commands.
- All memory access commands (push/pop for all segments).
- All program flow commands (label, goto, if-goto).
- All function commands (function, call, return).
- Bootstrap code for program initialization.
- Multiple VM files in a single directory.

**Testing the complete translator:**

Test with the following programs:
1. **SimpleFunction:** Basic function calling.
2. **NestedCall:** Nested function calls.
3. **FibonacciElement:** Recursive Fibonacci.
4. **StaticsTest:** Static variables across files.
5. **Pong:** The Pong game. A large program that tests all VM features.
6. **Tetris:** The Tetris game. An even larger program that tests the limits of the VM.

For each test, run the VM translator on the `.vm` files, assemble the generated `.asm` file, and run the resulting `.hack` file on the Computer Simulator. Verify that the program behaves correctly.

**The Pong game:**

Pong is a complete, interactive game written in Jack and compiled to VM code. It demonstrates:
- Object-oriented programming (classes for the ball, paddle, and game state).
- Graphics (drawing on the screen using the OS).
- User input (reading the keyboard using the OS).
- Real-time animation (updating the screen in a game loop).
- Complex control flow (game logic, collision detection, scoring).

Running Pong on your computer is a profound moment: you are seeing a real game run on a computer that you built from Nand gates, through a VM translator that you wrote, using an assembler that you wrote, running on hardware that you designed. This is the full stack.

**The Tetris game:**

Tetris is the ultimate test of the system. It is a complex game with:
- Multiple game states (menu, playing, game over).
- Complex graphics (drawing shapes, rotating blocks, clearing lines).
- Score tracking and level progression.
- Keyboard input for piece movement and rotation.

Running Tetris on your computer is the culmination of the Nand2Tetris journey. It demonstrates that the entire toolchain — from high-level language to hardware — works together to run a real, complex, interactive program.

#### Key concepts
- Project 7: the complete VM translator
- All VM commands: arithmetic, memory access, program flow, function calling
- Bootstrap code for initialization
- Multiple VM file handling
- Testing with Pong and Tetris
- The full software stack: Jack → VM → Assembly → Machine code → Hardware
- The significance of running a real game on a computer built from scratch
- The VM as a complete abstraction layer
- Reflection on the journey from Nand gates to Tetris

#### Hands-on activity
Complete Project 7 of the Nand2Tetris course. Run the VM translator on all test programs, especially Pong and Tetris. Document your experience:
1. How long does it take to translate Pong and Tetris to assembly?
2. How many lines of assembly are generated for each game?
3. How long does each game take to execute on the Computer Simulator?
4. What is the most impressive aspect of seeing Pong or Tetris run on your computer?

Write a final reflection (2 pages) on the entire Nand2Tetris journey so far. What have you learned? How has your understanding of computers changed? What was the most challenging part? What was the most rewarding part?

#### Assessment idea
Ask: "Pong and Tetris are written in Jack and compiled to VM code, which your translator converts to assembly, which your assembler converts to machine code, which runs on the computer you built from Nand gates. How many layers of abstraction are in this stack, and what is the purpose of each layer?" Answer: There are 6 layers of abstraction: (1) Jack (high-level language) — provides variables, functions, objects, and control structures for human programmers; (2) VM code — intermediate representation that abstracts the hardware's registers and memory; (3) Assembly — symbolic representation of machine code with labels and mnemonics; (4) Machine code — binary instructions that the CPU decodes and executes; (5) CPU (microarchitecture) — the ALU, registers, and control logic that execute instructions; (6) Logic gates (Nand) — the physical building blocks that implement the CPU. Each layer hides the complexity of the layer below and provides a simpler, more powerful interface for the layer above. The purpose of this stack is to manage complexity: no human could design a computer by directly manipulating Nand gates, and no programmer could write Tetris in machine code. The layers of abstraction allow each group of experts (chip designers, compiler writers, application programmers) to work at their appropriate level without needing to understand all the details below. This is the fundamental principle of computer science: abstraction manages complexity. Then ask: "The VM translator generates assembly code that is much longer than the VM code. For a large program like Tetris, the generated assembly might be 50,000+ lines. Does this mean the VM approach is inefficient? Why or why not?" Answer: The VM approach is not inherently inefficient, though the generated assembly is verbose. The expansion is due to the VM's abstraction level: each VM command maps to multiple assembly instructions because the hardware does not directly support VM operations. However, the VM approach has several efficiency advantages: (1) the VM code is compact and generated by a compiler, reducing compiler complexity; (2) the VM translator can optimize the generated code (though the Hack translator does not); (3) the VM enables portability — the same VM code runs on any hardware with a VM translator; (4) the overhead of the VM abstraction is acceptable for many applications. In real systems, VMs like the JVM use Just-In-Time (JIT) compilation to translate VM bytecode to highly optimized machine code at runtime, achieving performance comparable to native code. The Hack VM translator is a static translator for educational purposes, but the principle is the same: a higher-level abstraction is compiled to a lower-level representation, and optimization can be applied at any stage. The length of the generated assembly is a trade-off for the simplicity and portability of the VM.

#### AI generation note
Create a final project showcase showing the entire toolchain in action. Show Jack source code being compiled to VM code. Show VM code being translated to assembly. Show assembly being assembled to machine code. Show machine code running on the Hack computer. Show Pong and Tetris running on the screen. Show the call stack growing and shrinking during gameplay. Show the memory map with data being read and written. End with a reflection: "You have built a computer from Nand gates to Tetris. What will you build next?"

---

## Module 7: Compiler: Syntax Analysis and Code Generation

> **Goal:** Build a compiler that translates the Jack high-level language into VM code.

---

### Chapter 7.1 — The Jack Programming Language

#### Learning objectives
- Describe the syntax and semantics of the Jack programming language.
- Understand Jack's type system: int, boolean, char, and object types.
- Write simple Jack programs: variables, expressions, control structures, and function calls.
- Explain the object-oriented features of Jack: classes, objects, methods, and constructors.

#### Detailed lesson content

Jack is a simple, Java-like programming language designed for the Nand2Tetris course. It is simple enough to be compiled by a student-built compiler, yet powerful enough to write real programs like Pong and Tetris. Jack is the high-level language that sits at the top of the Nand2Tetris toolchain.

**Jack features:**

1. **Primitive types:**
   - `int`: 16-bit signed integer (-32768 to 32767).
   - `boolean`: `true` or `false`.
   - `char`: A single character (ASCII code).

2. **Complex types:**
   - Arrays: `Array a = Array.new(10);`
   - Objects: Instances of classes.

3. **Classes:**
   - Every Jack program is a collection of classes.
   - Each class is defined in a separate `.jack` file.
   - A class has fields (object variables), static variables, and methods.

4. **Variables:**
   - `static`: Class-level variables (shared across all instances).
   - `field`: Object-level variables (each instance has its own copy).
   - `local`: Local variables within a method.
   - `parameter`: Arguments passed to a method.

5. **Methods:**
   - `function`: A class method that does not operate on a specific object instance.
   - `method`: An object method that operates on the current object (has access to `this`).
   - `constructor`: A special method that creates and returns a new object instance.

6. **Control structures:**
   - `if-then-else`
   - `while`
   - `do` (statement for function calls that don't return a value)
   - `return`

7. **Statements:**
   - `let`: Variable assignment.
   - `do`: Function/method call (discards return value).
   - `if`: Conditional.
   - `while`: Loop.
   - `return`: Return from function.

**Example Jack program:**
```jack
// Main.jack
class Main {
    function void main() {
        var int a, b, sum;
        let a = 3;
        let b = 5;
        let sum = Main.add(a, b);
        do Output.printInt(sum);
        return;
    }
    
    function int add(int x, int y) {
        return x + y;
    }
}
```

**Object-oriented features:**

Jack supports basic object-oriented programming:
```jack
// Point.jack
class Point {
    field int x, y;
    
    constructor Point new(int ax, int ay) {
        let x = ax;
        let y = ay;
        return this;
    }
    
    method int getX() {
        return x;
    }
    
    method int getY() {
        return y;
    }
    
    method void setX(int ax) {
        let x = ax;
        return;
    }
}
```

The `this` keyword refers to the current object. In the VM, `this` is implemented by setting the `this` segment pointer to the object's base address.

**The Jack OS:**

Jack programs rely on an operating system (OS) that provides standard library functions:
- **Memory:** Memory allocation and deallocation.
- **Array:** Array creation and access.
- **Math:** Mathematical functions (sqrt, abs, min, max, etc.).
- **String:** String manipulation.
- **Output:** Text output to the screen.
- **Screen:** Graphics (drawing pixels, lines, circles, rectangles).
- **Keyboard:** Keyboard input.
- **Sys:** System functions (halt, error, wait).

The OS is written in Jack and compiled to VM code, just like user programs. You will implement the OS in Module 8.

#### Key concepts
- Jack programming language: simple, Java-like, educational
- Primitive types: int, boolean, char
- Complex types: arrays, objects
- Classes, static variables, field variables
- Methods: function, method, constructor
- Control structures: if, while, do, return, let
- Object-oriented programming in Jack: classes, objects, this
- The Jack OS: Memory, Array, Math, String, Output, Screen, Keyboard, Sys
- The relationship between Jack and the VM

#### Hands-on activity
Write the following Jack programs and compile them using the provided Jack compiler:

1. **Hello World:** Print "Hello, World!" to the screen.
2. **Calculator:** Read two numbers from the keyboard, compute their sum, and print the result.
3. **Array sum:** Create an array of 10 integers, fill it with values, and compute the sum.
4. **Point class:** Define a Point class with x and y coordinates, a constructor, and getter/setter methods. Create two Point objects and print their coordinates.

For each program, write the Jack source code, compile it to VM code, and inspect the generated VM code. Compare the Jack code with the VM code — how much more compact is the Jack code? How many VM commands are generated for each Jack statement?

#### Assessment idea
Ask: "Jack is a very simple language compared to Java or C++. What features are missing from Jack, and why were they omitted?" Answer: Jack omits many features found in industrial languages: (1) floating-point types — only integers are supported, to simplify the compiler and hardware; (2) advanced control structures — no for, switch, or break/continue, to simplify code generation; (3) inheritance and polymorphism — Jack has classes and objects but no class inheritance, to simplify the object model; (4) generics and templates — not supported, to simplify the type system; (5) pointers and pointer arithmetic — not needed because arrays and objects are managed by the OS; (6) exceptions — not supported, to simplify control flow; (7) garbage collection — memory is manually managed (allocated via `Memory.alloc`, deallocated via `Memory.deAlloc`); (8) standard library — the OS is minimal and educational. These features were omitted to keep the compiler and language simple enough to be built by students in a single course. The goal is to teach the principles of compilation and object-oriented programming, not to create a production language. Despite its simplicity, Jack is Turing-complete and can express any computable function. Then ask: "In Jack, a constructor must end with `return this;`. Why is this necessary, and what does it tell you about how objects are implemented in the VM?" Answer: `return this;` is necessary because the constructor must return the newly created object to the caller. In Jack, `this` is a reference to the current object. The constructor allocates memory for the object (using `Memory.alloc`), initializes the object's fields, and then returns the object's base address. The VM implements `this` by setting the `this` segment pointer to the object's base address. When the constructor returns, the caller receives the base address and can use it to access the object's methods and fields. This design reveals that objects in the VM are simply blocks of memory: an object is a contiguous region of memory where the first words are the object's fields, and the object's "identity" is the base address of this block. Methods operate on objects by setting the `this` pointer to the object's base address and accessing fields via the `this` segment. This is the same way objects are implemented in many real systems: they are memory blocks with a known layout, and method calls pass the object reference (this) as a hidden argument.

#### AI generation note
Create an animated lesson showing Jack as a simplified toy language. Show classes as building blueprints. Show objects as houses built from blueprints. Show methods as rooms in the house. Show the constructor as a builder who sets up the house. Show the OS as a neighborhood with utilities (screen, keyboard, memory). Show compilation as a translator converting blueprints into construction instructions. End with a reflection: "What is the minimum set of language features needed to write any program?"

---

### Chapter 7.2 — Lexical Analysis and Tokenization

#### Learning objectives
- Understand the role of the lexer (tokenizer) in the compiler.
- Implement a lexer that reads Jack source code and produces a stream of tokens.
- Describe the token types: keywords, symbols, identifiers, integer constants, string constants.
- Handle comments and whitespace in the lexer.

#### Detailed lesson content

Compilation is the process of translating high-level source code into low-level code. The compiler is typically divided into two main phases: the **front-end** (syntax analysis) and the **back-end** (code generation). The front-end is further divided into **lexical analysis** (tokenization) and **parsing** (syntax analysis).

**The compilation pipeline:**
```
Jack source code (.jack)
  → Lexical Analyzer (Lexer) → Token stream
  → Parser → Parse tree (XML)
  → Code Generator → VM code (.vm)
```

**Lexical analysis:**

The lexer reads the source code character by character and groups characters into **tokens**. A token is the smallest unit of meaning in the language. For example, the Jack statement `let x = 5;` is tokenized into:
```
KEYWORD(let)
IDENTIFIER(x)
SYMBOL(=)
INT_CONST(5)
SYMBOL(;)
```

**Token types in Jack:**

1. **Keywords:** `class`, `constructor`, `function`, `method`, `field`, `static`, `var`, `int`, `char`, `boolean`, `void`, `true`, `false`, `null`, `this`, `let`, `do`, `if`, `else`, `while`, `return`.

2. **Symbols:** `{`, `}`, `(`, `)`, `[`, `]`, `.`, `,`, `;`, `+`, `-`, `*`, `/`, `&`, `|`, `<`, `>`, `=`, `~`.

3. **Identifiers:** A sequence of letters, digits, and underscores, not starting with a digit. Examples: `x`, `sum`, `Main`, `getX`, `x1`.

4. **Integer constants:** A decimal number in the range 0 to 32767. Examples: `0`, `123`, `32767`.

5. **String constants:** A sequence of characters enclosed in double quotes. Examples: `"Hello"`, `"World"`.

**Comments:**

Jack has two types of comments:
- `//` line comment: Everything from `//` to the end of the line is ignored.
- `/*` block comment: Everything from `/*` to `*/` is ignored (can span multiple lines).

The lexer must skip comments and not produce tokens for them.

**Whitespace:**

Spaces, tabs, and newlines are used to separate tokens but are not themselves tokens. The lexer skips whitespace between tokens.

**Lexer implementation:**

The lexer can be implemented as a state machine that reads characters and transitions between states based on the character type:
- Start state: Read a character.
- If letter: Read letters/digits/underscores to form an identifier or keyword. Check if it's a keyword.
- If digit: Read digits to form an integer constant.
- If `"`: Read characters until the next `"` to form a string constant.
- If symbol: Return the symbol token.
- If whitespace: Skip and continue.
- If `/`: Check if next character is `/` (line comment) or `*` (block comment). If so, skip comment. Otherwise, return `/` symbol.

**The tokenizer's output:**

The Nand2Tetris compiler project requires the tokenizer to output an XML file that represents the token stream. This XML file is used for testing and debugging. For example:
```xml
<tokens>
  <keyword> let </keyword>
  <identifier> x </identifier>
  <symbol> = </symbol>
  <integerConstant> 5 </integerConstant>
  <symbol> ; </symbol>
</tokens>
```

#### Key concepts
- Compilation pipeline: lexer → parser → code generator
- Lexical analysis: grouping characters into tokens
- Token types: keywords, symbols, identifiers, integer constants, string constants
- Jack keywords and symbols
- Identifier rules: letters, digits, underscores, not starting with digit
- Integer constants: 0 to 32767
- String constants: double-quoted character sequences
- Comments: line comments (//) and block comments (/* */)
- Whitespace handling
- Lexer as a state machine
- Tokenizer XML output for testing

#### Hands-on activity
Implement the Jack tokenizer in a programming language of your choice. The tokenizer should:
1. Read a `.jack` file.
2. Remove all comments and whitespace.
3. Produce a stream of tokens.
4. Output the tokens as an XML file.

Test your tokenizer with the provided Jack test files (e.g., `ArrayTest`, `Square`, `ExpressionLessSquare`). Compare your XML output with the reference XML files provided by the course. Debug any discrepancies.

#### Assessment idea
Ask: "Why does the lexer remove comments rather than treating them as tokens? What would happen if comments were treated as tokens?" Answer: Comments are removed because they are not part of the language's syntax. They are annotations for human readers and have no meaning to the compiler. If comments were treated as tokens, the parser would need to handle them, which would complicate the grammar and the parser implementation. The parser would need to explicitly allow comments between any two tokens, which would significantly increase the grammar's size and complexity. By removing comments in the lexer, the parser sees a clean token stream with only meaningful tokens. This separation of concerns is a standard compiler design principle: the lexer handles lexical issues (tokenization, comments, whitespace), and the parser handles syntactic issues (structure, nesting, relationships). This modularity makes the compiler easier to design, implement, and maintain. Then ask: "The Jack language has only 5 types of tokens, yet these are sufficient to express any program. What does this tell you about the expressive power of simple token sets?" Answer: The small token set demonstrates that the expressive power of a language comes from the composition of tokens, not the variety of tokens. With just keywords, symbols, identifiers, integers, and strings, Jack can express: variables, functions, classes, objects, control structures, expressions, and I/O operations. This is because the language's grammar (how tokens are combined) provides the structure, while the tokens themselves are just the building blocks. This is analogous to how DNA uses only 4 nucleotides to encode all life, or how computers use only 0 and 1 to represent all information. The power is in the combination, not the components. This principle is central to computer science: simple primitives combined in complex ways can produce enormous expressive power.

#### AI generation note
Create an animated lesson showing the lexer as a scanner that reads a document. Show characters being grouped into words (tokens). Show keywords as highlighted words. Show identifiers as named boxes. Show numbers as numeric values. Show strings as quoted phrases. Show comments as invisible ink that disappears. Show whitespace as empty space that is skipped. Show the XML output as a structured list of tokens. End with a reflection: "What is the difference between a lexer and a parser?"

---

### Chapter 7.3 — Parsing and Syntax Trees

#### Learning objectives
- Understand the role of the parser in the compiler.
- Implement a recursive descent parser for the Jack language.
- Build a parse tree (syntax tree) that represents the grammatical structure of the program.
- Generate XML output for the parse tree.

#### Detailed lesson content

The parser is the second stage of the compiler front-end. It takes the token stream from the lexer and organizes it into a hierarchical structure called a **parse tree** or **syntax tree**. The parse tree represents the grammatical structure of the program according to the language's grammar.

**Grammar:**

A grammar is a set of rules that define the structure of a language. Jack's grammar is a context-free grammar, which means it can be parsed using recursive descent parsing. The grammar includes rules for:
- **Class:** `class ClassName { classVarDec* subroutineDec* }`
- **Class variable declaration:** `static|field type varName (, varName)* ;`
- **Subroutine declaration:** `constructor|function|method void|type subroutineName ( parameterList ) subroutineBody`
- **Parameter list:** `type varName (, type varName)*`
- **Subroutine body:** `{ varDec* statements }`
- **Variable declaration:** `var type varName (, varName)* ;`
- **Statements:** `letStatement | ifStatement | whileStatement | doStatement | returnStatement`
- **Let statement:** `let varName ([ expression ])? = expression ;`
- **If statement:** `if ( expression ) { statements } (else { statements })?`
- **While statement:** `while ( expression ) { statements }`
- **Do statement:** `do subroutineCall ;`
- **Return statement:** `return expression? ;`
- **Expression:** `term (op term)*`
- **Term:** `integerConstant | stringConstant | keywordConstant | varName | varName[ expression ] | subroutineCall | ( expression ) | unaryOp term`
- **Subroutine call:** `subroutineName ( expressionList ) | ( className | varName ) . subroutineName ( expressionList )`
- **Expression list:** `expression (, expression)*`

**Recursive descent parsing:**

Recursive descent parsing is a top-down parsing technique where each grammar rule is implemented as a function. The parser starts with the top-level rule (class) and recursively calls functions for sub-rules. For example:
```python
def parse_class():
    expect_keyword('class')
    class_name = expect_identifier()
    expect_symbol('{')
    while current_token in ['static', 'field']:
        parse_class_var_dec()
    while current_token in ['constructor', 'function', 'method']:
        parse_subroutine_dec()
    expect_symbol('}')

def parse_class_var_dec():
    kind = expect_keyword()  # 'static' or 'field'
    type = expect_type()
    names = [expect_identifier()]
    while current_token == ',':
        expect_symbol(',')
        names.append(expect_identifier())
    expect_symbol(';')
```

**Parse tree:**

The parse tree is a tree structure where each node represents a grammar construct. For example, the Jack statement `let x = 5;` has the parse tree:
```
letStatement
├── keyword: let
├── identifier: x
├── symbol: =
├── expression
│   └── term
│       └── integerConstant: 5
└── symbol: ;
```

**XML output:**

The Nand2Tetris compiler project requires the parser to output the parse tree as an XML file. This XML file is used for testing and debugging. For example:
```xml
<letStatement>
  <keyword> let </keyword>
  <identifier> x </identifier>
  <symbol> = </symbol>
  <expression>
    <term>
      <integerConstant> 5 </integerConstant>
    </term>
  </expression>
  <symbol> ; </symbol>
</letStatement>
```

**Error handling:**

The parser should detect syntax errors (e.g., missing semicolons, mismatched braces, invalid expressions) and report them with a meaningful error message and the line number where the error occurred.

#### Key concepts
- Parser: organizes tokens into a grammatical structure
- Context-free grammar: rules for language structure
- Recursive descent parsing: top-down, rule-based parsing
- Grammar rules: class, variable declaration, subroutine, statement, expression, term
- Parse tree: hierarchical representation of program structure
- XML output for parse tree testing
- Error handling: syntax errors, meaningful error messages
- The relationship between grammar and parser implementation

#### Hands-on activity
Implement the Jack parser using recursive descent parsing. The parser should:
1. Read the token stream from the tokenizer.
2. Parse the tokens according to the Jack grammar.
3. Build a parse tree (internally or as XML output).
4. Handle syntax errors gracefully.

Test your parser with the provided Jack test files. Compare your parse tree XML with the reference XML files. Trace the parsing of a simple class, a method with an if-statement, and an expression with multiple operators.

#### Assessment idea
Ask: "Recursive descent parsing is a top-down technique. What does 'top-down' mean in this context, and why is Jack's grammar suitable for this approach?" Answer: 'Top-down' means the parser starts with the highest-level grammar rule (class) and recursively breaks it down into sub-rules (variable declarations, subroutines, statements, expressions). The parser descends from the top of the grammar to the bottom, matching tokens along the way. Jack's grammar is suitable for recursive descent parsing because it is a LL(1) grammar: at each point in the parsing, the parser can determine which rule to apply by looking at the next token (or a small number of tokens). There are no ambiguities where multiple rules could apply to the same token sequence. This property makes the grammar easy to parse with a simple recursive descent parser. If the grammar were ambiguous or required looking ahead many tokens, a more complex parsing technique (like LR parsing or backtracking) would be needed. The recursive descent approach is also pedagogically valuable because it directly mirrors the grammar: each grammar rule becomes a parser function, making the implementation intuitive and easy to understand. Then ask: "What is the difference between a parse tree and an abstract syntax tree (AST), and why does the Nand2Tetris compiler use a parse tree instead of an AST?" Answer: A parse tree is a concrete representation of the grammar rules applied to the input. It includes every token and every intermediate grammar rule. An abstract syntax tree (AST) is a simplified representation that omits unnecessary details (like parentheses, semicolons, and intermediate rules) and focuses on the semantic structure. The Nand2Tetris compiler uses a parse tree instead of an AST because: (1) it is simpler to generate — the parser directly outputs the tree without needing to simplify it; (2) it is easier to test — the XML output can be directly compared with reference output; (3) it is sufficient for code generation — the parse tree contains all the information needed to generate VM code; (4) it is pedagogically clearer — students can see the full grammatical structure. Real compilers use ASTs because they are more compact and easier to manipulate for optimization and code generation. But for an educational compiler, the parse tree is an excellent intermediate representation that teaches the principles of parsing without the complexity of AST construction.

#### AI generation note
Create an animated lesson showing the parser as a librarian organizing books. Show tokens as individual books on a cart. Show the grammar as a classification system. Show recursive descent as a librarian who first sorts by category, then by sub-category, then by author. Show the parse tree as a hierarchical shelf system. Show XML as a catalog card for each book. Show syntax errors as misplaced books that the librarian catches. End with a reflection: "What makes a grammar 'unambiguous,' and why is this important for parsing?"

---

### Chapter 7.4 — Code Generation: Expressions and Statements

#### Learning objectives
- Implement the code generator that translates parse trees into VM code.
- Generate VM code for expressions: arithmetic, logical, and comparison.
- Generate VM code for statements: let, if, while, do, return.
- Understand the symbol table and how it manages variable scope.

#### Detailed lesson content

The code generator is the back-end of the compiler. It takes the parse tree and generates VM code. The code generator walks the parse tree, visiting each node and emitting the corresponding VM commands.

**Symbol table:**

The symbol table is a data structure that stores information about identifiers in the program. For each identifier (variable, parameter, field, static), the symbol table stores:
- Name
- Type (int, boolean, char, or class name)
- Kind (static, field, local, parameter)
- Index (the offset within the segment)

The symbol table is scoped: each subroutine has its own symbol table for local variables and parameters. The class has a symbol table for static and field variables. When the compiler encounters an identifier, it looks it up in the symbol table to determine its type, kind, and index, which tells the code generator which VM segment to use.

**Code generation for expressions:**

Expressions are translated using the stack-based VM model. The code generator recursively generates code for each term and combines them with arithmetic operations.

Example: `x + y * 2`
```
push local 0    // x (assuming x is local 0)
push local 1    // y (assuming y is local 1)
push constant 2
mult
add
```

Note: The compiler must respect operator precedence. Multiplication has higher precedence than addition, so `y * 2` is computed before adding `x`. The parser's grammar encodes this precedence, and the code generator follows the parse tree structure.

**Code generation for statements:**

1. **Let statement:** `let x = expression;`
   ```
   // Generate code for expression (leaves result on stack)
   // Pop result to variable x
   pop local i   // i is the index of x in the symbol table
   ```

2. **If statement:** `if (expression) { statements1 } else { statements2 }`
   ```
   // Generate code for expression
   // if-goto ELSE
   // Generate code for statements1
   // goto END
   // label ELSE
   // Generate code for statements2
   // label END
   ```

3. **While statement:** `while (expression) { statements }`
   ```
   // label LOOP
   // Generate code for expression
   // if-goto END
   // Generate code for statements
   // goto LOOP
   // label END
   ```

4. **Do statement:** `do subroutineCall();`
   ```
   // Generate code for subroutine call
   // pop temp 0   // Discard return value
   ```

5. **Return statement:** `return expression;`
   ```
   // Generate code for expression
   // return
   ```

**Subroutine call code generation:**

For a method call like `obj.method(args)`:
1. Push the object reference (this) as the first argument.
2. Push the arguments.
3. Call the method.

For a function call like `ClassName.function(args)`:
1. Push the arguments.
2. Call the function.

For a constructor call like `new ClassName(args)`:
1. Allocate memory for the object (using `Memory.alloc`).
2. Push the object reference.
3. Push the arguments.
4. Call the constructor (which initializes fields and returns this).

**The code generator's structure:**

The code generator is a visitor that traverses the parse tree:
```python
def compile_class(node):
    for subroutine in node.subroutines:
        compile_subroutine(subroutine)

def compile_subroutine(node):
    # Initialize symbol table for parameters and locals
    for var_dec in node.var_decs:
        symbol_table.define(var_dec.name, var_dec.type, 'local')
    # Generate code for statements
    for statement in node.statements:
        compile_statement(statement)

def compile_expression(node):
    compile_term(node.terms[0])
    for i, op in enumerate(node.operators):
        compile_term(node.terms[i+1])
        compile_operator(op)
```

#### Key concepts
- Code generator: translates parse tree to VM code
- Symbol table: name, type, kind, index for each identifier
- Scoped symbol tables: class-level and subroutine-level
- Expression code generation: recursive, stack-based
- Statement code generation: let, if, while, do, return
- If-then-else pattern: if-goto, goto, labels
- While loop pattern: label, if-goto, goto, label
- Subroutine call code generation: method vs. function vs. constructor
- Object allocation: Memory.alloc for constructors
- Visitor pattern for parse tree traversal

#### Hands-on activity
Implement the code generator for the Jack compiler. Start with simple expressions and statements, then add control structures and subroutine calls. Test with the provided Jack test files (ExpressionLessSquare, Square, ArrayTest). For each test, compare the generated VM code with the reference VM code. Debug any discrepancies by tracing the code generation for each parse tree node.

#### Assessment idea
Ask: "The Jack compiler's code generator uses a symbol table to track variable types, kinds, and indices. Why is the symbol table necessary, and what would happen if the code generator tried to generate code without it?" Answer: The symbol table is necessary because the code generator needs to know how to access each variable. For a local variable `x`, the code generator needs to know its index in the local segment (e.g., `local 0`) to generate `push local 0` or `pop local 0`. Without the symbol table, the code generator would not know which segment and index to use for each variable. It would also not know the variable's type, which is needed for type checking and for determining the size of objects. If the code generator tried to generate code without the symbol table, it would have to embed all variable information directly in the parse tree, which would make the parse tree much larger and more complex. The symbol table provides a clean separation between parsing (which identifies variables) and code generation (which uses variable information). This separation is a standard compiler design principle. Then ask: "When generating code for a method call like `obj.method(a, b)`, why must the object reference `obj` be pushed as the first argument before the explicit arguments `a` and `b`?" Answer: In Jack (and many object-oriented languages), the object reference is passed as an implicit first argument to the method. This is how the method knows which object it is operating on. In the VM, this is implemented by pushing the object's base address onto the argument segment before the explicit arguments. When the method is called, the VM translator sets the `this` segment pointer to the first argument (the object reference), allowing the method to access the object's fields via `this 0`, `this 1`, etc. This convention is essential for object-oriented programming: without it, the method would not know which object instance to operate on. The implicit `this` argument is the mechanism by which object-oriented languages implement the "current object" concept. This is the same in Java, C++, and Python, though the details differ.

#### AI generation note
Create an animated lesson showing the code generator as a factory that converts parse trees into VM code. Show the symbol table as a registry of workers. Show expressions as assembly lines where parts are combined. Show if-statements as branching conveyor belts. Show while loops as circular conveyor belts. Show subroutine calls as sending a package to another factory. Show the constructor as a factory that builds a new object. End with a reflection: "What is the hardest part of code generation, and why?"

---

### Chapter 7.5 — Object-Oriented Code Generation

#### Learning objectives
- Understand how objects are implemented in the VM.
- Generate code for constructors, methods, and object field access.
- Implement the `this` segment and object allocation.
- Generate code for arrays and array access.

#### Detailed lesson content

Object-oriented programming (OOP) is a paradigm where programs are organized around objects rather than functions. Jack supports basic OOP features: classes, objects, methods, and constructors. The code generator must translate these high-level constructs into VM code.

**Objects in the VM:**

An object is a contiguous block of memory that stores the object's fields. The first word of the object is the first field, the second word is the second field, and so on. The object's "address" is the base address of this block. Methods access fields by indexing from the base address using the `this` segment.

For example, a `Point` object with fields `x` and `y` is stored as:
```
RAM[base + 0] = x
RAM[base + 1] = y
```

The `this` segment pointer is set to `base`, so `this 0` accesses `x` and `this 1` accesses `y`.

**Constructor code generation:**

A constructor is responsible for creating a new object. The generated code:
1. Allocate memory for the object: `push constant nFields`, `call Memory.alloc 1` (returns base address in `this`).
2. Set the `this` segment pointer to the returned base address.
3. Initialize the object's fields (if needed).
4. Return `this`.

Example VM code for `Point.new(ax, ay)`:
```
function Point.new 0
push constant 2      // 2 fields (x, y)
call Memory.alloc 1  // Allocate memory, returns base in THIS
pop pointer 0          // Set this = base address
push argument 0      // ax
pop this 0             // x = ax
push argument 1      // ay
pop this 1             // y = ay
push pointer 0       // return this
return
```

**Method code generation:**

A method operates on an existing object. The generated code:
1. The caller pushes the object reference as the first argument.
2. The method sets `this` to the first argument (the object reference).
3. The method accesses fields via `this` segment.
4. The method returns a value (or void).

Example VM code for `Point.getX()`:
```
function Point.getX 0
push argument 0      // Object reference
pop pointer 0          // Set this = object reference
push this 0            // return x
return
```

**Array access:**

Arrays in Jack are objects managed by the OS. The `Array.new(size)` function allocates a block of memory and returns the base address. Array elements are accessed using bracket notation: `arr[i]`.

The generated code for `arr[i]`:
```
push local 0      // arr (base address)
push local 1      // i (index)
add               // base + i
pop pointer 1       // Set that = base + i
push that 0         // Access arr[i]
```

The `that` segment is used for array access because the base address plus index points to the array element. The `this` segment is used for object fields, and the `that` segment is used for array elements.

**Field access in methods:**

Within a method, fields are accessed via the `this` segment. The Jack compiler generates `push this i` or `pop this i` for field access, where `i` is the field's index in the symbol table.

#### Key concepts
- Objects as contiguous memory blocks
- Object base address and field indexing
- this segment pointer for object field access
- Constructor code generation: Memory.alloc, setting this, initializing fields
- Method code generation: implicit this argument, this segment setup
- Array implementation: Array.new, base address, that segment access
- Array access code: base + index, set that, access via that segment
- The distinction between this (object fields) and that (array elements)
- Object-oriented code generation patterns

#### Hands-on activity
Implement the object-oriented code generation in your Jack compiler. Test with the following Jack programs:

1. **Point class:** Define a Point class with x, y fields, a constructor, and getX/getY methods. Create Point objects and call methods.

2. **Array sum:** Create an array of 10 integers, fill it with values, and compute the sum using array indexing.

3. **Object array:** Create an array of Point objects, initialize them, and call methods on each element.

For each test, inspect the generated VM code for constructors, methods, and array access. Verify that the object reference is passed correctly and that fields are accessed via the `this` segment.

#### Assessment idea
Ask: "In the VM, the `this` segment is used for object fields and the `that` segment is used for array elements. Why are two different segments needed instead of just one?" Answer: Two segments are needed because objects and arrays can be accessed simultaneously. For example, within a method that accesses an object's fields, the code might also need to access an array. If there were only one segment, changing it to access an array would overwrite the object's base address, making it impossible to access the object's fields afterward. By having separate `this` and `that` segments, the compiler can set `this` to the object's base address (for the entire method) and temporarily set `that` to an array element address (for a single array access). This allows nested access to both objects and arrays without conflict. The `this` segment is stable across the method (set at the beginning), while the `that` segment can change dynamically for each array access. This separation is a key design decision that enables the VM to support both object-oriented and array-based code efficiently. Then ask: "When a constructor calls `Memory.alloc`, how does the compiler know how many words to allocate for the object?" Answer: The compiler knows the number of fields in the class from the class's symbol table. When compiling a constructor, the compiler counts the number of field declarations in the class and generates a `push constant nFields` followed by `call Memory.alloc 1`. The symbol table is built during the first pass of the compiler (or during parsing), so the compiler knows the total number of fields (including inherited fields, though Jack does not support inheritance). This information is stored in the class-level symbol table. For example, if the Point class has two fields (x and y), the compiler generates `push constant 2` before calling `Memory.alloc`. The OS function `Memory.alloc` allocates a block of the requested size and returns the base address. The compiler then sets `this` to this base address, allowing the constructor to initialize the fields.

#### AI generation note
Create an animated lesson showing objects as houses with rooms (fields). Show the constructor as a builder who lays the foundation (Memory.alloc) and builds the rooms. Show methods as visitors who enter the house (set this) and look at the rooms. Show arrays as apartment buildings with numbered units. Show array access as a visitor going to a specific unit number. Show this as the address of the current house. Show that as the address of the current apartment unit. End with a reflection: "How does object-oriented code generation differ from procedural code generation?"

---

### Chapter 7.6 — The Complete Jack Compiler

#### Learning objectives
- Complete the Jack compiler project.
- Test the compiler on all provided Jack programs, including Pong and Tetris.
- Understand the complete compilation pipeline: Jack → VM → Assembly → Machine code.
- Reflect on the compiler as a program that translates programs.

#### Detailed lesson content

Project 8 is the culmination of the software portion of the Nand2Tetris course. You will build a complete Jack compiler that translates Jack source code into VM code. This is the most complex software project in the course, and it brings together all the concepts you have learned: tokenization, parsing, code generation, symbol tables, and object-oriented programming.

**Project 8 specification:**

Build a Jack compiler that:
1. Accepts a directory containing `.jack` files.
2. For each `.jack` file, produces a `.vm` file containing the translated VM code.
3. Handles all features of the Jack language: classes, variables, methods, expressions, control structures, and subroutine calls.
4. Produces correct VM code that can be translated by the VM translator and run on the Hack computer.

**Compiler structure:**

The compiler consists of four main modules:
1. **JackTokenizer:** Reads Jack source code and produces a stream of tokens.
2. **CompilationEngine:** Parses the token stream and generates VM code. This is the core of the compiler.
3. **SymbolTable:** Manages variable information (name, type, kind, index) for class-level and subroutine-level scopes.
4. **VMWriter:** Writes VM commands to the output file.

**CompilationEngine:**

The CompilationEngine is a recursive descent parser that also generates code. It visits each node in the parse tree and emits the corresponding VM commands. The engine has methods for each grammar rule:
- `compileClass()`
- `compileClassVarDec()`
- `compileSubroutine()`
- `compileParameterList()`
- `compileVarDec()`
- `compileStatements()`
- `compileLet()`
- `compileIf()`
- `compileWhile()`
- `compileDo()`
- `compileReturn()`
- `compileExpression()`
- `compileTerm()`
- `compileExpressionList()`

Each method generates VM code for the corresponding construct.

**Testing:**

Test the compiler with the provided Jack programs:
- **Seven:** A simple program that returns 7. Tests basic compilation.
- **ConvertToBin:** Converts a decimal number to binary. Tests expressions and loops.
- **Square:** A class with methods. Tests object-oriented features.
- **Average:** Computes the average of an array. Tests arrays and arithmetic.
- **Pong:** The Pong game. Tests all language features in a real program.
- **Tetris:** The Tetris game. The ultimate test.

For each test, compile the Jack program to VM code, translate the VM code to assembly using the VM translator, assemble the assembly to machine code, and run the machine code on the Computer Simulator. Verify that the program behaves correctly.

**The compiler as a meta-program:**

The compiler is a program that manipulates other programs. It reads source code, analyzes it, and transforms it into a different form. This self-referential capability is one of the deepest aspects of computing. The compiler you build is a testament to the power of abstraction: you have written a program (in a high-level language) that translates programs (in another high-level language) into code that runs on a computer (that you built from Nand gates).

#### Key concepts
- Project 8: the complete Jack compiler
- Compiler modules: JackTokenizer, CompilationEngine, SymbolTable, VMWriter
- CompilationEngine: recursive descent parser + code generator
- SymbolTable: class-level and subroutine-level scopes
- VMWriter: outputting VM commands
- Testing with Seven, ConvertToBin, Square, Average, Pong, Tetris
- The complete compilation pipeline: Jack → VM → Assembly → Machine code → Hardware
- The compiler as a self-referential program
- The power of abstraction: from high-level language to hardware

#### Hands-on activity
Complete Project 8 of the Nand2Tetris course. Build the complete Jack compiler and test it on all provided programs. After completing the project, answer the following questions:
1. How many lines of code is your compiler? How many modules/classes?
2. Which part of the compiler was the most challenging to implement? Why?
3. How does your compiler handle the difference between methods, functions, and constructors?
4. What was the most surprising thing you learned about compilation?
5. Write a final reflection (2 pages) on the entire software toolchain. How does it feel to have built a compiler, a VM translator, an assembler, and a computer from scratch?

#### Assessment idea
Ask: "The Jack compiler is a multi-pass compiler: it tokenizes, parses, and generates code. Could it be implemented as a single-pass compiler? What would be the trade-offs?" Answer: A single-pass Jack compiler would be possible but more complex. In a single-pass compiler, the compiler would need to resolve forward references (e.g., method calls before method definitions) without a separate pass. This would require backpatching or lazy resolution. The trade-offs are: (1) complexity — single-pass compilers are harder to write because they must handle forward references and scope management dynamically; (2) optimization — multi-pass compilers can perform better optimization because they have a complete view of the program; (3) error handling — multi-pass compilers can report more meaningful errors because they understand the full program structure. The Jack compiler uses two main passes: parsing (which builds the symbol table and parse tree) and code generation (which walks the parse tree and generates VM code). This is a standard design that balances simplicity and power. For an educational compiler, the multi-pass approach is ideal because it clearly separates the phases of compilation and makes each phase easier to understand. Then ask: "You have now built every layer of the computing stack from Nand gates to Tetris. What is the single most important principle you have learned from this experience?" Answer: The single most important principle is the **power of abstraction**. Every layer of the computing stack — from Nand gates to logic gates, to ALU, to CPU, to assembly, to VM, to high-level language — is an abstraction that hides the complexity of the layer below and provides a simpler, more powerful interface for the layer above. Without abstraction, no human could design or program a computer. Abstraction is what makes computing scalable: chip designers work at the transistor level, compiler writers work at the language level, and application programmers work at the API level, each without needing to understand all the details below. This principle applies not just to computing but to all complex systems: biology, economics, and society all rely on layers of abstraction to manage complexity. The Nand2Tetris course demonstrates this principle by forcing you to build every layer, so you understand both the abstractions and the implementations beneath them. This deep understanding is what makes a great computer scientist.

#### AI generation note
Create a final project showcase showing the complete compiler in action. Show Jack source code being tokenized, parsed, and compiled to VM code. Show the VM code being translated to assembly. Show the assembly being assembled to machine code. Show the machine code running on the Hack computer. Show Pong and Tetris running. Show the call stack during gameplay. Show the memory map during execution. End with a reflection: "You have built a computer from Nand gates to Tetris. What does this tell you about the nature of computing?"

---

## Module 8: Operating System and Integration

> **Goal:** Build the Jack operating system and understand the complete computing stack.

---

### Chapter 8.1 — Operating System Fundamentals

#### Learning objectives
- Understand the role of an operating system in a computer system.
- Describe the Jack OS and its components: Memory, Array, Math, String, Output, Screen, Keyboard, Sys.
- Explain how the OS provides abstractions for hardware resources.
- Implement the Memory and Array modules of the Jack OS.

#### Detailed lesson content

An operating system (OS) is a program that manages the computer's hardware resources and provides services to application programs. The OS is the layer between the hardware and the applications. It abstracts the hardware's complexity and provides a uniform interface for programs to use.

**The Jack OS:**

The Jack OS is a simple operating system written in Jack and compiled to VM code. It provides eight standard library classes:

1. **Memory:** Memory allocation and deallocation.
   - `Memory.init()`: Initialize the memory manager.
   - `Memory.peek(address)`: Read a value from memory.
   - `Memory.poke(address, value)`: Write a value to memory.
   - `Memory.alloc(size)`: Allocate a block of memory.
   - `Memory.deAlloc(object)`: Deallocate a block of memory.

2. **Array:** Array creation and access.
   - `Array.new(size)`: Create a new array of the given size.
   - `Array.dispose()`: Dispose of the array (deallocate memory).

3. **Math:** Mathematical functions.
   - `Math.init()`: Initialize the math module.
   - `Math.abs(x)`: Absolute value.
   - `Math.multiply(x, y)`: Multiplication.
   - `Math.divide(x, y)`: Integer division.
   - `Math.sqrt(x)`: Integer square root.
   - `Math.max(x, y)`, `Math.min(x, y)`: Maximum and minimum.

4. **String:** String manipulation.
   - `String.new(maxLength)`: Create a new string.
   - `String.length()`, `String.charAt(i)`, `String.setCharAt(i, c)`, `String.appendChar(c)`, `String.appendString(s)`, `String.eraseLastChar()`, `String.intValue()`, `String.setInt(i)`, `String.backSpace()`, `String.doubleQuote()`, `String.newLine()`.

5. **Output:** Text output to the screen.
   - `Output.init()`: Initialize the output module.
   - `Output.moveCursor(i, j)`: Move the cursor to row i, column j.
   - `Output.printChar(c)`: Print a character.
   - `Output.printString(s)`: Print a string.
   - `Output.printInt(i)`: Print an integer.
   - `Output.println()`: New line.
   - `Output.backSpace()`: Backspace.

6. **Screen:** Graphics output.
   - `Screen.init()`: Initialize the screen module.
   - `Screen.clearScreen()`: Clear the screen.
   - `Screen.setColor(b)`: Set drawing color (black or white).
   - `Screen.drawPixel(x, y)`: Draw a pixel.
   - `Screen.drawLine(x1, y1, x2, y2)`: Draw a line.
   - `Screen.drawRectangle(x1, y1, x2, y2)`: Draw a rectangle.
   - `Screen.drawCircle(x, y, r)`: Draw a circle.

7. **Keyboard:** Keyboard input.
   - `Keyboard.init()`: Initialize the keyboard module.
   - `Keyboard.keyPressed()`: Return the key currently pressed (0 if none).
   - `Keyboard.readChar()`: Wait for a key press and return it.
   - `Keyboard.readLine(message)`: Read a string from the keyboard.
   - `Keyboard.readInt(message)`: Read an integer from the keyboard.

8. **Sys:** System services.
   - `Sys.init()`: Initialize the OS and call Main.main.
   - `Sys.halt()`: Halt the program.
   - `Sys.error(errorCode)`: Report an error.
   - `Sys.wait(duration)`: Wait for a duration.

**The OS as abstraction:**

The OS provides abstractions that hide the hardware's complexity:
- **Memory:** Instead of directly manipulating memory addresses, programs use `Memory.alloc` and `Memory.deAlloc`.
- **Screen:** Instead of writing to memory-mapped screen addresses, programs use `Screen.drawPixel` and `Screen.drawLine`.
- **Keyboard:** Instead of reading from the keyboard memory map, programs use `Keyboard.readChar`.
- **Math:** Instead of implementing multiplication and division in software, programs use `Math.multiply` and `Math.divide`.

These abstractions make programming easier and more portable. The OS is the final layer of abstraction between the hardware and the application programmer.

**Memory management:**

The Memory module manages a heap of available memory. It uses a **linked list** to track free memory blocks. When a program calls `Memory.alloc(size)`, the memory manager searches the free list for a block of sufficient size. When a program calls `Memory.deAlloc(object)`, the memory manager returns the block to the free list.

The memory manager is a simple **best-fit allocator**: it searches the free list for the smallest block that is large enough to satisfy the request. This is not the most efficient allocator, but it is simple and sufficient for the Hack platform.

**Array implementation:**

Arrays in Jack are implemented as contiguous blocks of memory. `Array.new(size)` calls `Memory.alloc(size)` to allocate the block. Array elements are accessed directly by the compiler using pointer arithmetic (the `that` segment).

#### Key concepts
- Operating system: manages hardware resources, provides services to applications
- Jack OS components: Memory, Array, Math, String, Output, Screen, Keyboard, Sys
- OS as abstraction layer: hiding hardware complexity
- Memory management: heap, free list, best-fit allocation
- Memory.alloc and Memory.deAlloc
- Array implementation: contiguous memory blocks
- Math functions: multiply, divide, sqrt as software algorithms
- String manipulation: character arrays, append, setInt, intValue
- Output and Screen: high-level graphics and text output
- Keyboard: high-level input abstraction
- Sys.init as the OS entry point

#### Hands-on activity
Implement the Memory and Array modules of the Jack OS. The Memory module should:
1. Initialize the free list with a single block covering all available heap memory.
2. Implement `Memory.alloc(size)` using a best-fit search of the free list.
3. Implement `Memory.deAlloc(object)` by adding the block back to the free list.
4. Test with simple allocation and deallocation patterns.

Then implement the Math module. Start with `Math.abs` and `Math.max`/`Math.min`. Then implement `Math.multiply` using the shift-and-add algorithm (efficient multiplication using bit shifts). Implement `Math.divide` using long division. Implement `Math.sqrt` using Newton's method or binary search.

Test each function with edge cases: zero, negative numbers, large numbers, and boundary conditions.

#### Assessment idea
Ask: "The Jack OS Memory module uses a best-fit allocation strategy. What are the advantages and disadvantages of best-fit compared to first-fit and worst-fit?" Answer: Best-fit searches the free list for the smallest block that is large enough to satisfy the request. Advantages: (1) it minimizes wasted space by using the smallest suitable block, leaving larger blocks for larger requests; (2) it tends to produce small leftover fragments that are less likely to be useful for future allocations. Disadvantages: (1) it requires searching the entire free list, which is O(n) and slower than first-fit; (2) it can produce many small fragments that are too small to be useful, leading to external fragmentation. First-fit is faster (stops at the first suitable block) but may waste more space. Worst-fit allocates the largest block, which tends to produce large leftover fragments that can be useful for future allocations, but it also wastes the most space on the initial allocation. The choice of allocation strategy depends on the workload. For the Hack platform, best-fit is a reasonable compromise between space efficiency and simplicity. Then ask: "Why does the Jack OS need a `Sys.init` function, and what happens if a program tries to call OS functions before `Sys.init` has been called?" Answer: `Sys.init` is the operating system's initialization function. It sets up the OS state: initializes the memory manager, sets up the screen, initializes the keyboard, and then calls `Main.main` to start the user's program. If a program tries to call OS functions before `Sys.init` has been called, the OS state may be uninitialized. For example, `Memory.alloc` might fail because the free list has not been set up. `Screen.drawPixel` might draw to the wrong memory locations because the screen module has not been initialized. `Keyboard.readChar` might return garbage because the keyboard module has not been set up. The bootstrap code (generated by the VM translator) ensures that `Sys.init` is called before any user code runs. This is a standard pattern in operating systems: the OS must be initialized before applications can use its services.

#### AI generation note
Create an animated lesson showing the OS as a hotel manager. Show Memory as a room allocator who tracks vacant rooms. Show Array as a block of adjacent rooms. Show Math as a calculator service. Show String as a secretary who handles text. Show Output as a billboard operator. Show Screen as a graphics artist. Show Keyboard as a receptionist who takes messages. Show Sys as the hotel manager who opens the hotel and handles emergencies. End with a reflection: "What is the most important function of an operating system?"

---

### Chapter 8.2 — Screen Graphics and Output

#### Learning objectives
- Implement the Screen module of the Jack OS.
- Understand how the screen memory map works and how to draw pixels, lines, and shapes.
- Implement the Output module for text display.
- Create simple graphics programs using the Screen and Output modules.

#### Detailed lesson content

The Screen and Output modules are the graphics and text output components of the Jack OS. They provide high-level functions for drawing on the screen, abstracting the low-level memory-mapped I/O that we explored in Module 3.

**Screen module:**

The Screen module provides functions for drawing graphics on the Hack screen. The screen is 256 rows by 512 columns of pixels, each pixel being black (1) or white (0). The screen is memory-mapped to addresses 16384 to 24575.

**Screen memory organization:**
- The screen is divided into 256 rows.
- Each row has 512 pixels, stored as 32 words of 16 bits each.
- The address of a word at row r, word w is: `16384 + r * 32 + w`.
- The bit position of pixel c within a word is: `c % 16`.

**Drawing a pixel:**
```jack
Screen.drawPixel(x, y):
    // Compute word address: 16384 + y * 32 + x / 16
    // Compute bit mask: 1 << (x % 16)
    // Read current word, OR with mask (for black) or AND with ~mask (for white), write back
```

**Drawing a line (Bresenham's algorithm):**

The Screen module uses a simple line drawing algorithm. For a line from (x1, y1) to (x2, y2):
1. Calculate the slope: `dy = y2 - y1`, `dx = x2 - x1`.
2. Iterate along the x-axis (or y-axis for steep lines), computing the corresponding y (or x) value.
3. Draw a pixel at each computed point.

Bresenham's algorithm is an efficient integer-only line drawing algorithm that avoids floating-point arithmetic. It uses an error term to decide when to increment the secondary coordinate.

**Drawing a rectangle:**

A rectangle is drawn by drawing four lines (top, bottom, left, right) or by filling the rectangle with a color.

**Drawing a circle (Midpoint circle algorithm):**

The circle drawing algorithm uses symmetry to draw a circle by computing points in one octant and mirroring them to the other seven octants. The algorithm uses the equation `x^2 + y^2 = r^2` and increments x while adjusting y based on the error term.

**Output module:**

The Output module provides text output on the screen. It maintains a cursor position (row, column) and prints characters at that position. The screen has 23 rows of text (each text row is 11 pixels high) and 64 columns (each character is 8 pixels wide).

The Output module stores a font: a bitmap for each character (ASCII 32 to 126). Each character is an 11×8 bitmap. When printing a character, the Output module copies the character's bitmap to the screen at the current cursor position.

**Character set:**

The Jack OS font includes all printable ASCII characters. Each character is stored as an array of 11 integers, each integer representing one row of 8 pixels. The font is stored in the Output module's static data.

**Cursor management:**

The Output module maintains the cursor position (current row and column). When printing a character, it advances the cursor. When reaching the end of a row, it moves to the next row. When reaching the end of the screen, it may scroll or wrap.

#### Key concepts
- Screen module: pixel, line, rectangle, circle drawing
- Screen memory map: 256 rows × 512 pixels, 32 words per row
- Pixel addressing: word = 16384 + row * 32 + col / 16, bit = col % 16
- Line drawing: Bresenham's algorithm
- Circle drawing: midpoint circle algorithm
- Output module: text output, cursor management, font bitmaps
- Character bitmaps: 11×8 pixels per character
- Font storage: static arrays of character bitmaps
- Cursor position: row and column tracking
- Text output as a high-level abstraction over screen memory

#### Hands-on activity
Implement the Screen and Output modules of the Jack OS. Start with:
1. `Screen.drawPixel(x, y)`: Draw a single pixel.
2. `Screen.drawLine(x1, y1, x2, y2)`: Draw a line using Bresenham's algorithm.
3. `Screen.drawRectangle(x1, y1, x2, y2)`: Draw a rectangle.
4. `Screen.drawCircle(x, y, r)`: Draw a circle.

Then implement the Output module:
1. `Output.printChar(c)`: Print a character at the current cursor position.
2. `Output.printString(s)`: Print a string.
3. `Output.printInt(i)`: Print an integer.
4. `Output.println()`: Move to the next line.

Test with simple graphics programs: draw a checkerboard pattern, draw a house (rectangle + triangle), print text on the screen, print numbers.

#### Assessment idea
Ask: "Bresenham's line drawing algorithm uses only integer arithmetic. Why is this important for the Hack computer, and how does it compare to a naive line drawing algorithm that uses floating-point arithmetic?" Answer: Bresenham's algorithm uses only integer arithmetic because the Hack computer does not have floating-point hardware. All arithmetic is integer arithmetic. A naive line drawing algorithm that uses floating-point arithmetic would require software emulation of floating-point operations, which is extremely slow. Bresenham's algorithm avoids this by using an error term that tracks the deviation from the ideal line and adjusts the pixel coordinates accordingly. This makes it both efficient and accurate. The algorithm is also simpler to implement because it avoids division and floating-point calculations, using only addition, subtraction, and bit shifts. This is a classic example of how algorithm design can compensate for hardware limitations. Then ask: "The Output module stores a font as bitmaps for each character. Why is a bitmap font used instead of a vector font, and what are the trade-offs?" Answer: A bitmap font is used because it is simple to render: the Output module simply copies the bitmap pixels to the screen. Each character is a fixed-size grid of pixels (11×8), and rendering is just a memory copy operation. A vector font would require complex geometric calculations (curves, lines) to render each character, which is far too complex for the Hack platform. The trade-offs are: (1) bitmap fonts are fixed-size and cannot be scaled without distortion, while vector fonts can be scaled smoothly; (2) bitmap fonts are faster to render, while vector fonts require more computation; (3) bitmap fonts consume more memory (each size needs a separate bitmap), while vector fonts are resolution-independent. For the Hack computer, the simplicity and speed of bitmap fonts are the right choice. Modern operating systems use vector fonts (TrueType, OpenType) for scalability, but embedded systems and simple platforms still use bitmap fonts.

#### AI generation note
Create an animated lesson showing screen graphics as a painter's canvas. Show pixels as individual dots of paint. Show line drawing as connecting dots with a ruler. Show Bresenham's algorithm as a clever way to draw straight lines without a ruler. Show circles as symmetrical patterns of dots. Show text output as a typesetter placing letter stamps on the canvas. Show the font bitmap as a stamp collection. Show cursor management as a typesetter moving to the next line. End with a reflection: "How did early computer games draw graphics before modern GPUs?"

---

### Chapter 8.3 — Keyboard Input and String Handling

#### Learning objectives
- Implement the Keyboard module of the Jack OS.
- Understand keyboard polling and event-driven input.
- Implement the String module with dynamic memory allocation.
- Create interactive programs using keyboard input and string manipulation.

#### Detailed lesson content

The Keyboard and String modules handle user input and text manipulation. The Keyboard module provides a high-level interface for reading keys from the keyboard, while the String module provides dynamic string operations.

**Keyboard module:**

The Keyboard module abstracts the memory-mapped keyboard interface (address 24576). It provides three main functions:

1. **keyPressed():** Returns the ASCII code of the currently pressed key, or 0 if no key is pressed. This is a non-blocking function: it returns immediately.

2. **readChar():** Waits for a key to be pressed and released, then returns the key's ASCII code. This is a blocking function: it waits until the user presses a key.

3. **readLine(message):** Displays a prompt message, waits for the user to type a line of text (ending with Enter), and returns the string.

4. **readInt(message):** Displays a prompt, waits for the user to type an integer, and returns the integer value.

**Keyboard implementation:**

The `readChar()` function uses a polling loop:
```jack
function char readChar() {
    var char c;
    // Wait for a key press
    while (Keyboard.keyPressed() = 0) {}
    let c = Keyboard.keyPressed();
    // Wait for key release
    while (~(Keyboard.keyPressed() = 0)) {}
    return c;
}
```

This loop polls the keyboard until a key is pressed, reads the key, then waits for the key to be released. This ensures that each key press generates exactly one character, even if the key is held down for a long time.

**String module:**

The String module provides dynamic string operations. A string is implemented as an object with two fields:
- `length`: The current length of the string.
- `maxLength`: The maximum length of the string.
- `charArray`: An array of characters (allocated dynamically).

**String operations:**
- `new(maxLength)`: Allocate a new string with the given maximum length.
- `length()`: Return the current length.
- `charAt(i)`: Return the character at index i.
- `setCharAt(i, c)`: Set the character at index i to c.
- `appendChar(c)`: Append a character to the end of the string.
- `appendString(s)`: Append another string to the end.
- `eraseLastChar()`: Remove the last character.
- `intValue()`: Parse the string as an integer.
- `setInt(i)`: Convert an integer to a string.

**String implementation:**

Strings are implemented using the Memory module for dynamic allocation. The character array is allocated with `Memory.alloc(maxLength)`. The string object itself is also allocated dynamically. This is why strings in Jack are objects and must be created with `String.new` and disposed with `String.dispose`.

**Integer to string conversion:**

The `setInt` method converts an integer to a string. It handles negative numbers and computes each digit by repeatedly dividing by 10. The digits are collected in reverse order and then reversed to produce the correct string.

**String to integer conversion:**

The `intValue` method parses a string as an integer. It handles optional leading minus signs and computes the value by iterating over the digits and accumulating the result.

#### Key concepts
- Keyboard module: keyPressed, readChar, readLine, readInt
- Keyboard polling: non-blocking and blocking input
- Key press and release detection
- String module: dynamic string operations
- String implementation: length, maxLength, charArray
- Memory allocation for strings: Memory.alloc
- String operations: append, erase, intValue, setInt
- Integer to string conversion: division by 10, digit extraction
- String to integer conversion: digit accumulation, negative handling
- Interactive programs: combining keyboard input and screen output

#### Hands-on activity
Implement the Keyboard and String modules of the Jack OS. Then write an interactive Jack program that:
1. Prompts the user for their name using `Keyboard.readLine`.
2. Greets the user by printing "Hello, [name]!" using `Output.printString`.
3. Prompts the user for two numbers using `Keyboard.readInt`.
4. Computes and prints the sum of the two numbers.

Test your program using the Jack OS and the provided compiler. Debug any issues with keyboard input or string manipulation.

#### Assessment idea
Ask: "The Keyboard.readChar function waits for a key to be pressed and then released before returning. Why is the release detection necessary, and what would happen without it?" Answer: The release detection is necessary to prevent a single key press from generating multiple characters. When a key is pressed, the keyboard hardware reports the key continuously until the key is released. Without release detection, `readChar` would return the same character repeatedly as long as the key is held down. This would make typing impossible because holding a key for a fraction of a second would generate dozens of characters. The release detection ensures that each physical key press generates exactly one character, regardless of how long the key is held. This is a standard technique in keyboard input handling: the key press is detected, the character is read, and then the function waits for the key to be released before returning. This is similar to how real keyboards work: the operating system generates a key press event when the key is pressed and a key release event when the key is released. Then ask: "The String module in Jack requires explicit memory allocation and deallocation. Why is there no automatic garbage collection in the Jack OS, and what are the implications for programmers?" Answer: There is no automatic garbage collection in the Jack OS because garbage collection is a complex algorithm that requires significant runtime overhead (tracking object references, detecting unreachable objects, compacting memory). Implementing a garbage collector would be a major project in itself and is beyond the scope of the educational Jack OS. The implications for programmers are that they must manage memory manually: they must call `Memory.alloc` when creating objects and `Memory.deAlloc` when objects are no longer needed. This is similar to programming in C or C++. If a programmer forgets to deallocate memory, the program will leak memory and eventually run out of heap space. If a programmer deallocates memory too early, the program may use freed memory and crash. This is a common source of bugs in manual memory management. The trade-off is that manual memory management gives the programmer full control over memory usage, which can be more efficient than garbage collection, but it also requires more care and discipline.

#### AI generation note
Create an animated lesson showing keyboard input as a telegraph operator. Show keyPressed as a quick check of the telegraph line. Show readChar as waiting for a complete message. Show readLine as receiving a full telegram. Show the String module as a typewriter with a dynamic paper roll. Show appendChar as typing a letter. Show setInt as a number converter that prints digits. Show interactive programs as a conversation between the user and the computer. End with a reflection: "How does modern keyboard input differ from the simple polling used in the Hack computer?"

---

### Chapter 8.4 — Advanced Math and Memory Management

#### Learning objectives
- Implement the Math module: multiplication, division, and square root.
- Understand the algorithms used for software-based arithmetic.
- Implement the Sys module: initialization, halt, error, and wait.
- Optimize the OS modules for performance and correctness.

#### Detailed lesson content

The Math and Sys modules complete the Jack OS. The Math module provides software implementations of arithmetic functions that are not directly supported by the hardware, and the Sys module provides system-level services.

**Math.multiply:**

The Hack hardware does not have a multiplication instruction. The Math module implements multiplication using the **shift-and-add** algorithm. This algorithm is based on the observation that multiplication by powers of 2 can be done with bit shifts, and any number can be expressed as a sum of powers of 2.

```jack
function int multiply(int x, int y) {
    var int sum, shiftedX, i;
    let sum = 0;
    let shiftedX = x;
    let i = 0;
    while (i < 16) {  // 16-bit integers
        if (y & (1 << i)) {
            let sum = sum + shiftedX;
        }
        let shiftedX = shiftedX + shiftedX;  // shiftedX = x * 2^i
        let i = i + 1;
    }
    return sum;
}
```

This algorithm uses bit shifts (implemented as addition to itself) and conditional addition. It is efficient for the Hack platform because it avoids nested loops.

**Math.divide:**

Division is implemented using **long division**. The algorithm repeatedly subtracts the divisor from the dividend, shifting the divisor as needed.

```jack
function int divide(int x, int y) {
    var int q, i, temp;
    if (y = 0) {
        do Sys.error(3);  // Division by zero error
    }
    // Handle signs
    if ((x < 0) & (y > 0)) { return -Math.divide(-x, y); }
    if ((x > 0) & (y < 0)) { return -Math.divide(x, -y); }
    if ((x < 0) & (y < 0)) { return Math.divide(-x, -y); }
    
    let q = 0;
    let i = 15;  // Start with highest bit
    while (~(i < 0)) {
        let temp = (y << i);  // y * 2^i
        if (temp < (x + 1)) {  // temp <= x
            let q = q + (1 << i);
            let x = x - temp;
        }
        let i = i - 1;
    }
    return q;
}
```

**Math.sqrt:**

The square root is computed using **Newton's method** (or binary search). Newton's method iteratively improves the estimate:
```
guess = (guess + n / guess) / 2
```

For integer square root, binary search is simpler:
```jack
function int sqrt(int n) {
    var int low, high, mid, midSquared;
    if (n < 0) { do Sys.error(4); }
    let low = 0;
    let high = n + 1;
    while ((high - low) > 1) {
        let mid = (low + high) / 2;
        let midSquared = mid * mid;
        if (midSquared = n) { return mid; }
        if (midSquared < n) { let low = mid; }
        else { let high = mid; }
    }
    return low;
}
```

**Sys module:**

The Sys module provides system-level services:
- **Sys.init():** Initializes the OS and calls Main.main. This is the entry point of every Jack program.
- **Sys.halt():** Enters an infinite loop, effectively stopping the program.
- **Sys.error(errorCode):** Prints an error message and halts.
- **Sys.wait(duration):** Waits for a specified duration by executing a busy loop.

**Sys.init:**
```jack
function void init() {
    do Memory.init();
    do Math.init();
    do Output.init();
    do Screen.init();
    do Keyboard.init();
    do Main.main();
    do Sys.halt();
}
```

**Sys.wait:**
```jack
function void wait(int duration) {
    var int i, j;
    let i = 0;
    while (i < duration) {
        let j = 0;
        while (j < 100) {  // Inner loop for delay
            let j = j + 1;
        }
        let i = i + 1;
    }
    return;
}
```

Note: `Sys.wait` is a busy loop that wastes CPU cycles. It is not precise but is sufficient for simple timing in the Hack platform.

**Memory management optimization:**

The Memory module can be optimized by using a ** segregated free list** or **best-fit with coalescing** to reduce fragmentation. However, for the Hack platform, a simple linked list allocator is sufficient.

#### Key concepts
- Math.multiply: shift-and-add algorithm
- Math.divide: long division algorithm with sign handling
- Math.sqrt: binary search or Newton's method
- Software arithmetic: implementing hardware operations in software
- Sys.init: OS initialization sequence
- Sys.halt: program termination
- Sys.error: error reporting
- Sys.wait: busy-loop timing
- Algorithm complexity: O(n) for multiply, O(log n) for divide and sqrt
- Performance trade-offs in software algorithms

#### Hands-on activity
Implement the Math and Sys modules of the Jack OS. Test each function with edge cases:
- **multiply:** Test with 0, 1, negative numbers, large numbers, and overflow cases.
- **divide:** Test with 0, 1, negative numbers, division by zero, and large numbers.
- **sqrt:** Test with 0, 1, perfect squares, non-perfect squares, and negative numbers.
- **Sys.wait:** Test with different durations and verify approximate timing.

Then, write a Jack program that computes and prints the first 20 Fibonacci numbers using the Math module. Compare the performance of the recursive Fibonacci with a loop-based Fibonacci.

#### Assessment idea
Ask: "The shift-and-add multiplication algorithm has a time complexity of O(n) where n is the number of bits. For 16-bit integers, this requires up to 16 iterations. Why is this acceptable for the Hack computer, and what would be a faster algorithm for larger integers?" Answer: The shift-and-add algorithm is acceptable for the Hack computer because 16-bit integers are small, and 16 iterations is a manageable number. The algorithm is also simple to implement and uses only addition and bit testing, which are efficient on the Hack hardware. For larger integers (e.g., 64-bit), a faster algorithm would be the Karatsuba algorithm or FFT-based multiplication, which have complexities of O(n^1.585) and O(n log n) respectively. However, these algorithms are much more complex to implement and require more memory. For the Hack platform, the simplicity of shift-and-add outweighs the performance benefits of more complex algorithms. This is a common trade-off in computer design: simpler algorithms are preferred when the problem size is small, while more complex algorithms are justified for larger problems. Then ask: "Why does Sys.wait use a busy loop instead of a hardware timer?" Answer: The Hack computer does not have a hardware timer or interrupt mechanism. The only way to implement a delay is to execute a loop that wastes CPU cycles. A busy loop is simple but inefficient: it consumes 100% CPU during the wait and provides only approximate timing (the actual delay depends on the CPU clock speed). Real computers use hardware timers that generate interrupts after a specified interval, allowing the CPU to do other work while waiting. The OS then schedules the waiting process to resume when the timer fires. The Hack computer's lack of interrupts and timers is a deliberate simplification that makes the hardware and OS easier to understand. The busy loop is a brute-force solution that works but is not suitable for real-time systems or multitasking environments.

#### AI generation note
Create an animated lesson showing software math as a student doing arithmetic by hand. Show multiplication as repeated addition with shortcuts. Show division as repeated subtraction with estimation. Show square root as a guessing game that narrows down. Show Sys.init as a startup sequence for a spaceship. Show Sys.halt as an emergency stop button. Show Sys.wait as a countdown timer. End with a reflection: "What hardware features would make the Jack OS more efficient?"

---

### Chapter 8.5 — Project 9: The Operating System and Integration

#### Learning objectives
- Complete the Jack OS implementation.
- Test the OS with all provided Jack programs.
- Understand the complete computing stack from hardware to OS.
- Reflect on the journey from Nand to Tetris.

#### Detailed lesson content

Project 9 is the final project of the Nand2Tetris course. You will complete the Jack OS and run the complete computing stack. This is the moment when everything comes together: the hardware you built, the software tools you wrote, and the operating system that ties them all together.

**Project 9 specification:**

Complete the implementation of the Jack OS modules:
1. **Memory:** Memory allocation and deallocation.
2. **Array:** Array creation and disposal.
3. **Math:** Mathematical functions.
4. **String:** String manipulation.
5. **Output:** Text output.
6. **Screen:** Graphics output.
7. **Keyboard:** Keyboard input.
8. **Sys:** System services.

**OS testing:**

Test the OS with the provided test programs:
- **MemoryTest:** Tests memory allocation and deallocation.
- **MathTest:** Tests mathematical functions.
- **StringTest:** Tests string operations.
- **KeyboardTest:** Tests keyboard input.
- **ScreenTest:** Tests graphics output.
- **OutputTest:** Tests text output.
- **Pong:** Tests the complete OS with a real game.
- **Tetris:** The ultimate test.

**The complete stack:**

When you run Tetris on your computer, the following happens:
1. The Computer Simulator loads the Tetris machine code into ROM.
2. The bootstrap code initializes SP and calls Sys.init.
3. Sys.init initializes the OS (Memory, Math, Output, Screen, Keyboard).
4. Sys.init calls Main.main, which is the entry point of the Tetris game.
5. The game runs, using the OS to draw graphics, read keyboard input, and manage memory.
6. The game loop continues until the program ends or the user quits.

Every layer of this stack was built by you:
- The hardware (Nand gates → CPU → computer) — Modules 1-3.
- The assembler (assembly → machine code) — Module 4.
- The VM translator (VM code → assembly) — Modules 5-6.
- The compiler (Jack → VM code) — Module 7.
- The operating system (OS services) — Module 8.

**Reflection:**

The Nand2Tetris journey is one of the most profound educational experiences in computer science. You have built a complete computer system from absolute first principles. You started with a single Nand gate and ended with a working computer that can run Tetris. Along the way, you learned:
- How digital logic works.
- How to build combinational and sequential circuits.
- How to design a CPU and memory hierarchy.
- How to write machine language and assembly.
- How to design a virtual machine and a compiler.
- How to build an operating system.
- How all these layers work together to create a functioning computer.

This knowledge is not just theoretical — it gives you a deep, intuitive understanding of how computers work. You will never look at a computer the same way again. You will understand why programs crash, why memory leaks happen, why compilation takes time, and why hardware design matters. You will be a better programmer, a better engineer, and a better computer scientist because of this journey.

#### Key concepts
- Project 9: completing the Jack OS
- OS modules: Memory, Array, Math, String, Output, Screen, Keyboard, Sys
- Testing the OS with all provided programs
- The complete computing stack in action
- From Nand gates to Tetris: the full journey
- The Computer Simulator running Tetris
- Reflection on the entire Nand2Tetris experience
- The power of understanding every layer of abstraction
- The significance of building a complete computer system

#### Hands-on activity
Complete Project 9 of the Nand2Tetris course. Finish the OS implementation and run Tetris on your computer. Document your experience:
1. How long did it take to complete the entire OS?
2. Which OS module was the most challenging to implement? Why?
3. How does it feel to see Tetris running on a computer you built from scratch?
4. What is the most important thing you learned from the entire course?

Write a final reflection (3-5 pages) on the Nand2Tetris journey. Discuss:
- The progression from simple to complex.
- The role of abstraction in managing complexity.
- The relationship between hardware and software.
- How this course has changed your understanding of computers.
- What you will do next with this knowledge.

#### Assessment idea
Ask: "Tetris is a complex game with graphics, animation, user input, and game logic. How is it possible that this game runs on a computer built from nothing but Nand gates? What does this tell you about the nature of computation?" Answer: Tetris runs on the Hack computer because the computer is a universal machine: it can execute any program that can be expressed as a sequence of instructions. The complexity of the game is not in the hardware but in the software. The hardware is simple (Nand gates, registers, ALU, memory), but the software is layered: the OS provides high-level services, the compiler generates VM code, the VM translator generates assembly, and the assembler generates machine code. Each layer adds complexity and capability. The game itself is just a program — a sequence of instructions that manipulates memory and I/O. This demonstrates the fundamental principle of computing: simple hardware + layered software = unlimited capability. The Turing machine, the theoretical foundation of computing, proves that a very simple machine can compute anything that is computable, given enough time and memory. The Hack computer is a practical demonstration of this principle. Then ask: "If you could add one feature to the Hack computer to make it more powerful, what would it be, and why?" Answer: Possible answers include: (1) a hardware multiplier — this would make the Math module much faster and enable more complex graphics; (2) more memory — 16K words is very limiting for modern programs; (3) a floating-point unit — this would enable scientific computing and more realistic graphics; (4) interrupts — this would enable real-time input handling and multitasking; (5) a larger instruction set — more ALU operations, more registers, more addressing modes; (6) a cache hierarchy — this would reduce memory latency and improve performance; (7) a GPU — this would enable hardware-accelerated graphics. Each of these features would make the Hack computer more powerful but would also increase its complexity. The Hack computer is designed to be minimal to teach the principles; adding features would make it more realistic but less pedagogically clear. The best answer is one that demonstrates understanding of the trade-offs between simplicity and power.

#### AI generation note
Create a final showcase video showing the entire journey. Start with a single Nand gate. Show the progression through logic gates, ALU, memory, CPU, computer, assembly, VM, compiler, and OS. Show each layer building on the previous. Show the final moment: Tetris running on the screen. Show the call stack during gameplay. Show the memory being read and written. Show the keyboard input being processed. Show the OS drawing graphics. End with a reflection: "You started with a Nand gate and ended with Tetris. What will you build next?"

---

## Course Conclusion

Congratulations on completing "From Nand to Tetris." You have accomplished something extraordinary: you have built a complete, working computer system from absolute first principles. You started with a single Nand gate — the simplest building block of digital logic — and ended with a computer that can run a real, interactive game like Tetris. Along the way, you built logic gates, an ALU, memory, a CPU, an assembler, a virtual machine, a compiler, and an operating system. You have traversed the entire computing stack, from silicon to software, and you understand how every layer works.

This course is not just about building hardware and writing code. It is about understanding the deep, beautiful principles that make computing possible. You have learned that complexity arises from simplicity, that abstraction is the key to managing complexity, and that a computer is nothing more than a very fast machine that manipulates bits according to a program. You have demystified the computer — you now know that there is no magic inside the box, only logic, design, and engineering.

The skills you have gained are foundational to a career in computer science, software engineering, hardware design, and systems research. Whether you are debugging a program, optimizing a compiler, designing a processor, or researching new computing paradigms, the principles you learned in this course will guide you. You will never again take a computer for granted, because you know exactly what it takes to build one.

To continue your learning, consider these next steps:
- **Study real processors:** Compare the Hack computer with real processors like x86, ARM, and RISC-V. How do they differ? What optimizations do they use?
- **Learn Verilog or VHDL:** Implement the Hack computer (or a more advanced processor) in a real hardware description language and run it on an FPGA.
- **Study compiler optimization:** Learn about register allocation, instruction scheduling, and loop optimization.
- **Explore operating systems:** Study real operating systems (Linux, Windows) and understand how they manage memory, processes, and I/O.
- **Build a more advanced computer:** Add features to the Hack computer (multiplication, floating-point, interrupts, cache, pipelining).

You have built a computer from Nand to Tetris. The world of computing is now open to you. Go explore it.

---

> **End of syllabus.** This file was generated for Cohortia and follows the approved pilot format.
