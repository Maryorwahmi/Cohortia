# Syllabus: Arduino Programming

> **Course ID:** `arduino-programming`  
> **Title:** Arduino Programming  
> **Provider:** Cohortia  
> **Original reference:** Arduino / Coursera  
> **Platform:** Cohortia  
> **Level:** Beginner  
> **Type:** Course  
> **Duration:** 6–8 weeks (self-paced, ~5–7 hours/week)  
> **Cost:** Included with Cohortia  
> **URL:** Cohortia course page
> **Certification:** Cohortia Certificate of Completion  
> **Category:** Computer Science  
> **Subcategory:** Hardware, Embedded & IoT  
> **Skills:** Arduino, C/C++, embedded systems, digital I/O, analog I/O, PWM, sensors, actuators, serial communication, IoT fundamentals  
> **Source catalog:** `docs/catalog-computer-science-research.md`


---

## Course Overview

Arduino Programming is a hands-on introduction to embedded systems and physical computing. The course teaches you how to use the Arduino open-source electronics platform to build interactive devices that sense the environment and control lights, motors, displays, and other physical components. You will learn the essentials of the C/C++ programming language as it is used in Arduino sketches, how to read electronic schematics, how to wire circuits on a breadboard, and how to upload programs to a microcontroller.

By the end of this course, you will be able to:

1. Identify the main parts of an Arduino board and explain how a microcontroller differs from a full computer.
2. Install and configure the Arduino IDE, select the correct board and port, and upload sketches.
3. Write structured Arduino programs using variables, data types, operators, control structures, functions, and arrays.
4. Interface digital and analog inputs and outputs, including LEDs, buttons, potentiometers, and PWM-driven devices.
5. Read data from common sensors such as temperature, light, distance, and motion sensors.
6. Control actuators such as servos, DC motors, stepper motors, buzzers, and relays.
7. Use software libraries and standard communication protocols (Serial, I2C, SPI) to connect external modules.
8. Build, debug, and present a complete Arduino-based capstone project.

---

## Syllabus Structure

| Module | Theme | Weeks | Approx. Hours |
|--------|-------|-------|---------------|
| 1 | Introduction to Arduino & Electronics Foundations | 1 | 6–8 |
| 2 | Arduino C Programming Fundamentals | 1–2 | 8–10 |
| 3 | Digital & Analog Input/Output | 2–3 | 8–10 |
| 4 | Sensors, Actuators & Motors | 3–4 | 8–10 |
| 5 | Libraries, Communication Protocols & Displays | 4–5 | 8–10 |
| 6 | Real-World Projects & IoT Basics | 5–6 | 8–10 |

---

## Module 1: Introduction to Arduino & Electronics Foundations

> **Goal:** Understand what Arduino is, identify the parts of an Arduino Uno, set up the development environment, and build simple circuits safely.

---

### Chapter 1.1 — What is Arduino and Why Use It?

#### Learning objectives
- Define Arduino as an open-source hardware and software platform for physical computing.
- Explain the difference between a microcontroller and a microprocessor.
- List common real-world applications of Arduino in education, prototyping, and IoT.
- Identify the benefits of the Arduino ecosystem: low cost, large community, and extensive libraries.

#### Detailed lesson content

Arduino is an open-source electronics platform created in 2005 by a group of students and educators in Ivrea, Italy. Its purpose was to make microcontroller programming accessible to artists, designers, hobbyists, and anyone interested in creating interactive objects or environments. Today, Arduino consists of a family of microcontroller boards, a free Integrated Development Environment (IDE), and a vast collection of software libraries and community projects.

A microcontroller is a small computer on a single integrated circuit. Unlike the microprocessor in your laptop or phone, a microcontroller is designed to run one specific program repeatedly, controlling hardware such as LEDs, motors, sensors, and displays. It has limited memory and processing power, but it is extremely efficient at reading inputs, making decisions, and producing outputs in real time. Arduino boards wrap a microcontroller in a beginner-friendly package with easy-to-use pins, a USB connector for programming and power, and voltage regulators that protect the chip.

The most common board for beginners is the Arduino Uno. The Uno is based on the ATmega328P microcontroller. It has 14 digital pins, 6 analog input pins, a USB port, a power jack, and a reset button. The board can be powered through USB or an external 7–12V power supply. Because the board is open-source, many companies produce compatible versions, but the official Arduino Uno remains the reference design.

Arduino is used in thousands of applications. In education, it helps students learn programming and electronics by making abstract concepts tangible. In product development, it allows engineers to build prototypes quickly before designing custom hardware. In art and design, it enables interactive installations that respond to touch, sound, light, or motion. In IoT, it connects sensors and actuators to the internet through Wi-Fi, Bluetooth, or Ethernet shields. The key advantage of Arduino is that it removes much of the complexity of embedded development, letting you focus on your idea rather than low-level hardware configuration.

#### Key concepts
- Microcontroller vs. microprocessor
- Open-source hardware and software
- Arduino Uno, ATmega328P
- Physical computing and IoT
- Prototyping and rapid iteration

#### Hands-on activity
Research three real-world Arduino projects online (for example, a weather station, a smart garden, or a simple robot). Write one paragraph for each project describing the inputs (sensors) and outputs (actuators) it uses.

#### Assessment idea
Ask learners to match five application descriptions to the correct Arduino use case (education, prototyping, art, IoT, automation).

#### AI generation note
Create a 6-minute animated explainer video. Start with the story of Arduino's origin, then compare a microcontroller to a laptop microprocessor using a traffic-light analogy. Show images of real Arduino projects and end with a short reflection prompt: "What is one physical device you would like to build?"

---

### Chapter 1.2 — The Arduino Uno Board and Its Pinout

#### Learning objectives
- Identify the main components of an Arduino Uno board.
- Distinguish between digital pins, analog input pins, power pins, and ground pins.
- Understand pin capabilities such as PWM, interrupts, and serial communication.
- Read a simple pinout diagram.

#### Detailed lesson content

Before writing any code, it is essential to understand the board you are programming. The Arduino Uno is the reference board for learning because it is robust, well-documented, and has enough pins for most beginner projects.

The brain of the Uno is the ATmega328P microcontroller. This chip runs at 16 MHz and has 32 KB of flash memory for storing programs, 2 KB of SRAM for variables while the program runs, and 1 KB of EEPROM for storing data that persists after power is removed. The microcontroller operates at 5 volts, which means most digital signals on an Uno are either 0V (LOW) or 5V (HIGH).

The board has 14 digital input/output pins numbered 0 through 13. Pins 0 and 1 are also used for serial communication with the computer, so beginners should avoid using them for other tasks when possible. Some digital pins support Pulse Width Modulation (PWM), which allows them to produce a variable analog-like output. On the Uno, the PWM pins are 3, 5, 6, 9, 10, and 11. These pins are marked with a tilde (~) on the board.

There are 6 analog input pins labeled A0 through A5. These pins can read a voltage between 0V and 5V and convert it into a number between 0 and 1023 using a 10-bit Analog-to-Digital Converter (ADC). Although they are called analog inputs, they can also be used as additional digital pins if needed.

The power section of the board provides 5V, 3.3V, and several ground (GND) connections. The 5V pin can supply power to small components, but it should not be used for high-current devices such as motors. Each I/O pin can source or sink a maximum of 40 milliamps, but 20 milliamps is the recommended safe limit. Drawing too much current from a pin can permanently damage the microcontroller.

Other important parts of the board include the USB-B connector for programming and power, the barrel jack for external power, the reset button, and the LED connected to digital pin 13. There are also ICSP headers for advanced programming and a power LED that indicates whether the board is turned on.

Understanding the pinout is critical because every wire in a circuit must be connected to the correct pin. A common beginner mistake is connecting a component to the wrong pin or confusing 5V with 3.3V. Always double-check the pinout diagram before powering the circuit.

#### Key concepts
- ATmega328P microcontroller
- Digital pins 0–13, PWM pins (~)
- Analog input pins A0–A5
- 5V, 3.3V, GND power pins
- Current limits and voltage levels
- Pinout diagrams

#### Hands-on activity
Print or open an Arduino Uno pinout diagram. Label each PWM pin, each analog pin, the 5V pin, and two GND pins. Identify which pin the onboard LED is connected to.

#### Assessment idea
Show a pinout diagram and ask three questions: "Which pins support PWM?", "What is the maximum safe current per pin?", and "What voltage does a HIGH signal represent on an Uno?"

#### AI generation note
Create a 7-minute interactive board tour. Use a labeled image of the Arduino Uno. As each section is discussed, highlight it visually. Include a short drag-and-drop exercise where learners match pin names to their functions.

---

### Chapter 1.3 — Setting Up the Arduino IDE and Uploading Your First Sketch

#### Learning objectives
- Download and install the Arduino IDE on Windows, macOS, or Linux.
- Connect an Arduino board to a computer and select the correct board and port.
- Understand the upload process: compile, link, and transfer the program.
- Run the built-in Blink example and modify it.

#### Detailed lesson content

The Arduino Integrated Development Environment, or IDE, is the software you use to write programs, called sketches, and upload them to the board. The classic Arduino IDE has a simple interface with a text editor, a message area, and buttons for verifying and uploading code. A newer version, Arduino IDE 2.x, adds features such as code autocomplete and an integrated debugger.

To install the IDE, visit the official Arduino website and download the installer for your operating system. During installation, the installer may also install drivers for the USB-to-serial chip on the board. On Windows, this driver is usually necessary for the computer to recognize the board. On macOS and most Linux distributions, the board is often recognized automatically.

Once the IDE is installed, connect the Arduino Uno to the computer using a USB A-to-B cable. A green power LED on the board should turn on, indicating that the board is receiving power through USB. In the IDE, open the Tools menu and select Board > Arduino AVR Boards > Arduino Uno. Then select Port and choose the COM port (Windows) or /dev/ttyACM0 or /dev/cu.usbmodem... (macOS/Linux) that corresponds to the Arduino. If you are unsure which port is correct, disconnect the board, note the listed ports, reconnect the board, and identify the new port.

The simplest way to test the setup is to open the Blink example. Go to File > Examples > 01.Basics > Blink. This sketch turns the onboard LED on for one second, then off for one second, repeatedly. Click the Verify button (checkmark icon) to compile the sketch. The IDE translates your code into machine language that the microcontroller can execute. If there are no errors, click the Upload button (right arrow icon). The IDE will compile the sketch again if necessary, reset the board, and transfer the program through the USB cable. After a few seconds, the onboard LED should start blinking.

The upload process involves several steps. First, a preprocessor modifies your sketch by adding a main function and including the Arduino core library. Then a compiler turns the C/C++ code into object files. A linker combines those object files with the Arduino core and library code. Finally, a tool called avrdude sends the compiled binary to the bootloader on the ATmega328P, which writes it into flash memory. Once the upload is complete, the board automatically resets and starts running the new program.

Try modifying the Blink sketch. Change the number inside the `delay(1000)` functions to `delay(200)` and upload again. The LED will now blink much faster. This simple experiment confirms that you can edit code and control hardware.

#### Key concepts
- Arduino IDE installation and setup
- Board selection and port selection
- Verify, compile, and upload
- Blink example
- Bootloader and avrdude
- Sketch structure preview

#### Hands-on activity
Install the Arduino IDE, connect an Arduino Uno, upload the Blink example, and then change the blink interval to 250 milliseconds on and 250 milliseconds off. Record a short video or screenshot showing the result.

#### Assessment idea
Ask learners to put the upload steps in the correct order: select board, write/modify code, verify, select port, upload, observe hardware behavior.

#### AI generation note
Create a 10-minute screen-capture tutorial. Show the download page, installation steps, IDE layout, selecting board/port, uploading Blink, and modifying the delay. Include captions and zoom in on the relevant buttons. End with a troubleshooting tip for the most common error: selecting the wrong port.

---

### Chapter 1.4 — Basic Electronics for Arduino: Voltage, Current, Resistance, and Breadboards

#### Learning objectives
- Explain the relationships between voltage, current, and resistance using Ohm's Law.
- Identify common electronic components: resistors, LEDs, jumper wires, and breadboards.
- Build a simple LED circuit on a breadboard with a current-limiting resistor.
- Follow safety guidelines to avoid damaging components or the Arduino board.

#### Detailed lesson content

Arduino projects combine software with electronics, so a basic understanding of electricity is necessary. Electricity can be understood using a water analogy. Voltage is like water pressure: it is the force that pushes electrons through a circuit. Current is like the flow rate: it is the amount of charge passing through a point per second. Resistance is like a narrow section of pipe: it limits how much current can flow.

Ohm's Law relates these three quantities: V = I × R, where V is voltage in volts, I is current in amps, and R is resistance in ohms. This law is essential for choosing resistors. For example, if you connect a red LED to the 5V output of an Arduino pin, the LED might try to draw too much current and burn out. By adding a 220-ohm resistor, you limit the current to a safe value. Using Ohm's Law, I = V / R = (5V - 2V) / 220Ω ≈ 13.6 milliamps, which is within the safe range for both the LED and the Arduino pin.

A breadboard is a reusable platform for building circuits without soldering. It has a grid of holes connected internally by metal clips. The holes along the long edges, usually marked with red and blue lines, are power rails. All holes in a single rail are connected together. The holes in the middle section are arranged in short rows of five, with each row connected internally but separated by a central groove. This groove matches the width of integrated circuits and other components. Components plug into the breadboard, and jumper wires connect them to the Arduino pins and power rails.

When building a circuit, always turn off or disconnect power before making changes. Use the correct color convention for jumper wires: red for positive power, black or blue for ground, and other colors for signals. Check that LED polarity is correct: the longer leg is the anode (positive) and the shorter leg is the cathode (negative). If connected backwards, the LED will not light. Resistors are not polarized, so they can be inserted either way.

Common mistakes include connecting a component directly across 5V and GND without a resistor, which creates a short circuit; exceeding the current limit of an Arduino pin; and confusing rows on the breadboard. Always verify your wiring against a diagram before applying power, and use the current-limiting resistor whenever an LED is involved.

#### Key concepts
- Voltage, current, resistance, and Ohm's Law
- LED polarity and forward voltage
- Current-limiting resistors
- Breadboard layout and power rails
- Safe wiring practices

#### Hands-on activity
Build the classic "LED blink" circuit on a breadboard: connect a 220Ω resistor in series with an LED from Arduino pin 13 to GND. Upload the Blink sketch and confirm the external LED blinks. Then swap the resistor for a 1kΩ resistor and observe the change in brightness.

#### Assessment idea
Calculate the current through a 330Ω resistor connected to a 5V pin. Answer: I = 5 / 330 ≈ 15.2 mA. Then ask why a resistor is needed in series with an LED.

#### AI generation note
Create an 8-minute lesson with animated water-tank analogies for voltage, current, and resistance. Show a real breadboard close-up and demonstrate how the internal connections work. Include a step-by-step wiring diagram for the LED circuit and highlight safety rules with visual warning icons.

## Module 2: Arduino C Programming Fundamentals

> **Goal:** Learn the C/C++ programming concepts used in Arduino sketches, including variables, control structures, functions, and arrays.

---

### Chapter 2.1 — Structure of an Arduino Sketch: setup() and loop()

#### Learning objectives
- Explain the two required functions in every Arduino sketch: `setup()` and `loop()`.
- Describe the difference between initialization code and repeating code.
- Understand the role of the Arduino core and the `main()` function that is added automatically.
- Write a simple sketch that initializes a pin and repeats an action.

#### Detailed lesson content

Every Arduino program, called a sketch, has a very simple structure. At minimum, it contains two functions: `setup()` and `loop()`. The Arduino core adds a hidden `main()` function that calls `setup()` once and then calls `loop()` repeatedly forever, until the board is reset or powered off.

The `setup()` function is where you place code that should run only once when the board starts or resets. Typical tasks inside `setup()` include configuring pin modes with `pinMode()`, starting serial communication with `Serial.begin()`, initializing variables, attaching servo objects, and reading configuration from EEPROM. This function is the preparation phase of your program.

The `loop()` function is where the main behavior of your program lives. After `setup()` finishes, the microcontroller runs every line in `loop()` from top to bottom, and as soon as it reaches the end, it immediately jumps back to the top and runs again. This happens thousands of times per second, depending on how much work the loop does. Because `loop()` repeats forever, you can read sensors, check buttons, update displays, and control motors continuously.

Here is the smallest meaningful sketch:

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

In this example, `setup()` configures the built-in LED pin as an output. `loop()` then turns the LED on, waits one second, turns it off, waits one second, and repeats. The `delay()` function pauses the program for a specified number of milliseconds. During a delay, the microcontroller does nothing else, which is fine for simple programs but can become a problem in more advanced projects.

Understanding the `setup()`/`loop()` model is important because it shapes how you think about embedded programs. Unlike a script that runs from start to finish, an Arduino program is always running. The code you write must be organized so that each trip through `loop()` checks the current state of the world and updates outputs accordingly.

#### Key concepts
- Sketch, setup(), loop()
- Hidden main() function
- Initialization vs. repeating logic
- pinMode() and LED_BUILTIN
- delay() and milliseconds

#### Hands-on activity
Write a sketch that turns the built-in LED on for 500 milliseconds and off for 500 milliseconds. Then modify it so the LED stays on for 2 seconds and off for 250 milliseconds.

#### Assessment idea
Ask: "If you put a `Serial.println()` statement inside `setup()`, how many times will it print? What if you put it inside `loop()`?"

#### AI generation note
Create a 6-minute animated explanation of the program lifecycle. Show `setup()` running once, then visualize `loop()` as a circular path that repeats. Use a simple LED circuit to demonstrate the effect of changing delay values.

---

### Chapter 2.2 — Variables, Data Types, and Operators

#### Learning objectives
- Declare and use variables in an Arduino sketch.
- Choose appropriate data types for integers, decimals, characters, booleans, and large numbers.
- Use arithmetic, comparison, and logical operators.
- Understand type conversion and overflow risks.

#### Detailed lesson content

Variables are named containers that store data while your program runs. In Arduino programming, which is based on C/C++, you must declare the type of every variable before you use it. The compiler needs to know how much memory to allocate and what operations are allowed.

The most common integer type is `int`. On the Arduino Uno, an `int` uses 2 bytes of memory and can hold values from -32,768 to 32,767. For larger numbers, use `long`, which uses 4 bytes. For small positive numbers, `byte` uses only 1 byte and holds 0 to 255. For decimal numbers, use `float`, which uses 4 bytes and can represent values with fractional parts, although it is slower and less precise than integer math. For true/false values, use `boolean` or `bool`. For single characters, use `char`.

Here are examples of declarations:

```cpp
int sensorValue = 0;
float temperature = 23.5;
byte ledPin = 13;
bool isRunning = true;
char grade = 'A';
```

Constants are values that do not change during program execution. You can declare a constant using the `const` keyword or the `#define` preprocessor directive. Using constants makes your code easier to read and maintain:

```cpp
const int BUTTON_PIN = 2;
const float VOLTAGE_REF = 5.0;
```

Operators allow you to manipulate values. Arithmetic operators include `+`, `-`, `*`, `/`, and `%` (modulo, which gives the remainder of division). Comparison operators include `==` (equal to), `!=` (not equal to), `<`, `>`, `<=`, and `>=`. Logical operators include `&&` (AND), `||` (OR), and `!` (NOT).

Be careful with integer division. In C/C++, `5 / 2` equals `2`, not `2.5`, because both operands are integers. If you want a decimal result, at least one operand must be a float: `5.0 / 2` equals `2.5`.

Overflow is another common issue. If an `int` variable holds 32,767 and you add 1, it wraps around to -32,768. This can cause confusing bugs in sensor readings or counters. Always choose a data type that is large enough for the range of values you expect.

#### Key concepts
- int, long, byte, float, bool, char
- const and #define
- Arithmetic, comparison, and logical operators
- Integer division and modulo
- Overflow and type selection

#### Hands-on activity
Write a sketch that declares variables for `potentiometerValue`, `mappedValue`, and `threshold`. Use arithmetic operators to calculate the average of three sensor readings and print the result to the Serial Monitor.

#### Assessment idea
Predict the output of several expressions: `7 / 2`, `7.0 / 2`, `10 % 3`, `(5 > 3) && (2 < 4)`.

#### AI generation note
Create a 7-minute slide-based lesson with live code examples. Show variable declarations, common data type sizes, and operator usage. Include a short interactive exercise where learners choose the correct data type for five scenarios.

---

### Chapter 2.3 — Control Structures: Conditionals and Loops

#### Learning objectives
- Use `if`, `else if`, and `else` to make decisions in code.
- Write `for`, `while`, and `do-while` loops.
- Combine conditions using logical operators.
- Apply control structures to real Arduino scenarios such as button presses and sensor thresholds.

#### Detailed lesson content

Control structures let your program make decisions and repeat actions. They are essential because microcontrollers interact with a changing physical world. A sensor value may cross a threshold, a button may be pressed, or a timer may expire. Your code must respond appropriately.

An `if` statement checks a condition and runs a block of code only when the condition is true. You can add `else if` to check additional conditions and `else` to run code when none of the conditions are true:

```cpp
int reading = analogRead(A0);
if (reading > 800) {
  Serial.println("Bright");
} else if (reading > 400) {
  Serial.println("Medium");
} else {
  Serial.println("Dark");
}
```

A `switch` statement is useful when you need to compare one variable against many constant values. It can make code cleaner than a long chain of `if-else` statements, especially for menu systems or state machines.

Loops repeat code. A `for` loop is best when you know how many times you want to repeat something. It has three parts: initialization, condition, and increment:

```cpp
for (int i = 0; i < 5; i++) {
  Serial.println(i);
}
```

A `while` loop repeats as long as a condition remains true. It is useful when the number of repetitions is not known in advance, such as waiting for a sensor to stabilize:

```cpp
while (analogRead(A0) < 500) {
  // keep waiting
}
```

A `do-while` loop is similar, but it checks the condition after running the body once. This guarantees the body executes at least one time.

In Arduino, `for` loops are commonly used to fade LEDs by writing PWM values from 0 to 255, to iterate over arrays of sensor readings, or to repeat a calibration routine. `while` loops are often used with serial input, where the program waits until data is available.

Logical operators let you combine conditions. For example, you might want to turn on a fan only if the temperature is high AND the motion sensor detects a person:

```cpp
if (temperature > 30 && motionDetected) {
  digitalWrite(FAN_PIN, HIGH);
}
```

Understanding control structures is the foundation of making your Arduino projects interactive and responsive.

#### Key concepts
- if, else if, else, switch
- for, while, do-while loops
- Logical operators &&, ||, !
- Threshold detection
- State-based behavior

#### Hands-on activity
Write a sketch that reads a light sensor and prints "Daytime" when the value is above 700, "Evening" between 400 and 700, and "Night" below 400. Add an LED that turns on only at night.

#### Assessment idea
Trace the output of a nested loop that prints a 3x3 grid of numbers, or ask learners to write a loop that blinks an LED exactly 10 times without using `delay()` inside the loop.

#### AI generation note
Create an 8-minute interactive lesson. Use a traffic-light scenario to explain `if-else`, a conveyor-belt animation for `for` loops, and a waiting-room scenario for `while` loops. Include a coding mini-challenge at the end.

---

### Chapter 2.4 — Functions and Modular Programming

#### Learning objectives
- Define and call custom functions in Arduino.
- Understand parameters, return values, and function scope.
- Use functions to organize code into reusable blocks.
- Explain the difference between local and global variables.

#### Detailed lesson content

Functions are reusable blocks of code that perform a specific task. They help you organize large sketches, avoid repetition, and make your code easier to read and debug. The Arduino language already provides many built-in functions such as `pinMode()`, `digitalWrite()`, `analogRead()`, and `delay()`. You can also write your own.

A function has a return type, a name, optional parameters, and a body. Here is a simple function that adds two integers and returns the result:

```cpp
int add(int a, int b) {
  return a + b;
}
```

To call the function, you use its name and provide values for the parameters:

```cpp
int result = add(3, 5);  // result is 8
```

If a function does not return a value, its return type is `void`. Many Arduino helper functions are `void` because they perform an action rather than calculate a value:

```cpp
void blinkLED(int pin, int duration) {
  digitalWrite(pin, HIGH);
  delay(duration);
  digitalWrite(pin, LOW);
  delay(duration);
}
```

This function takes two parameters: the pin number and the blink duration. You can call it from `loop()` with different values to blink different LEDs:

```cpp
blinkLED(13, 500);
blinkLED(12, 250);
```

Variables declared inside a function are called local variables. They only exist while the function is running and cannot be accessed from outside. Variables declared outside any function are called global variables. They can be read and modified from any function, but overusing them makes code harder to understand and debug. A good practice is to pass data into functions as parameters and return results, keeping global variables limited to constants and shared hardware objects.

Modular programming becomes essential as projects grow. Instead of writing one long `loop()`, you split the behavior into functions such as `readSensors()`, `updateDisplay()`, `checkAlarms()`, and `controlMotors()`. Each function has one responsibility, making the program easier to test and maintain.

#### Key concepts
- Function declaration, definition, and call
- Parameters and return values
- void functions
- Local vs. global variables
- Code modularity and single responsibility

#### Hands-on activity
Refactor a long `loop()` that reads a sensor, prints a value, and blinks an LED into three separate functions: `readSensor()`, `printValue()`, and `blinkLED()`. Call all three from `loop()`.

#### Assessment idea
Ask learners to identify the return type, parameters, and purpose of a given function, then write a function that converts an analog reading (0–1023) to a voltage (0.0–5.0).

#### AI generation note
Create a 7-minute lesson using a kitchen analogy: each function is a specialized cook who receives ingredients (parameters), follows a recipe (body), and delivers a dish (return value). Show before-and-after code refactoring with split-screen visuals.

---

### Chapter 2.5 — Arrays, Strings, and Memory Basics

#### Learning objectives
- Declare and access arrays of integers and characters.
- Use loops to process arrays of sensor readings.
- Understand the difference between C-strings and Arduino String objects.
- Avoid common memory problems on microcontrollers with limited RAM.

#### Detailed lesson content

An array is a collection of values of the same type stored under one name. Arrays are useful when you need to store multiple related values, such as a history of sensor readings or a sequence of LED pins. You declare an array by specifying the type, name, and size:

```cpp
int ledPins[] = {3, 5, 6, 9, 10, 11};
```

In this example, the compiler automatically determines the size based on the number of values. You access individual elements using an index, starting from 0:

```cpp
ledPins[0] = 255;  // sets the first element
```

A common pattern is to iterate over an array with a `for` loop:

```cpp
for (int i = 0; i < 6; i++) {
  pinMode(ledPins[i], OUTPUT);
}
```

This loop configures each pin in the array as an output. Arrays make it easy to manage groups of related hardware pins without writing repetitive code.

Strings in Arduino can be represented in two ways. A C-string is an array of characters ending with a special null character `\0`. C-strings are memory-efficient but can be tricky to manipulate. The Arduino `String` class is easier to use but dynamically allocates memory, which can lead to memory fragmentation and program crashes on microcontrollers with limited RAM. For small, fixed messages, C-strings are preferred. For complex text processing, the `String` class may be acceptable on boards with more memory.

Memory on the Arduino Uno is limited. SRAM, which holds variables while the program runs, is only 2 KB. Flash memory, which stores the program, is 32 KB. EEPROM is 1 KB and is used for non-volatile storage. Because SRAM is small, you should avoid large arrays, long strings, and excessive use of the `String` class. The `F()` macro helps save RAM by keeping constant strings in flash memory:

```cpp
Serial.println(F("This message stays in flash memory"));
```

Understanding memory constraints is a key part of embedded programming. As your projects grow, you will need to balance functionality with the limited resources of the microcontroller.

#### Key concepts
- Arrays and indexing
- Iterating over arrays with loops
- C-strings vs. String objects
- SRAM, flash, and EEPROM
- F() macro for flash strings

#### Hands-on activity
Create an array of 5 integers representing sensor readings. Write a `for` loop that calculates the average. Then modify the sketch to find the highest and lowest values in the array.

#### Assessment idea
Ask: "Why is `F()` used around strings sent to `Serial.println()`?" Answer: it keeps the string in flash memory instead of consuming limited SRAM.

#### AI generation note
Create a 7-minute lesson visualizing memory as three storage rooms: flash (large, read-only program storage), SRAM (small, fast workspace), and EEPROM (small, persistent notebook). Show arrays as labeled boxes and explain why the `String` class can cause problems on small boards.

## Module 3: Digital & Analog Input/Output

> **Goal:** Control outputs and read inputs using digital and analog pins, including PWM and debouncing techniques.

---

### Chapter 3.1 — Digital Output: Controlling LEDs and Other Devices

#### Learning objectives
- Use `pinMode()` to configure a pin as an output.
- Use `digitalWrite()` to set a pin HIGH or LOW.
- Control multiple LEDs and understand the importance of current-limiting resistors.
- Build simple patterns such as blink, chase, and toggle.

#### Detailed lesson content

Digital output is the simplest way for an Arduino to control the physical world. A digital pin can be set to either HIGH (5V on an Uno) or LOW (0V). When a pin is HIGH and connected to an LED through a resistor, current flows and the LED lights up. When the pin is LOW, no current flows and the LED turns off.

Before using a pin, you must tell the Arduino whether it is an input or an output. This is done once in `setup()` with `pinMode()`:

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```

In `loop()`, you can turn the pin on and off:

```cpp
void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```

This is the Blink sketch again, but now you understand what each line does. `pinMode(13, OUTPUT)` configures pin 13 as an output. `digitalWrite(13, HIGH)` sets it to 5V, lighting the LED. `delay(1000)` waits one second. `digitalWrite(13, LOW)` sets it to 0V, turning the LED off.

When connecting an external LED, always use a current-limiting resistor. A typical value is 220Ω. Without the resistor, the LED and the Arduino pin may draw too much current, damaging both. The LED's longer leg (anode) connects to the Arduino pin through the resistor, and the shorter leg (cathode) connects to ground.

You can control multiple LEDs by using additional pins. Arrays and loops make it easy to create patterns. For example, a chasing light effect can be created by turning LEDs on in sequence:

```cpp
int leds[] = {3, 4, 5, 6, 7};

void setup() {
  for (int i = 0; i < 5; i++) {
    pinMode(leds[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(leds[i], HIGH);
    delay(200);
    digitalWrite(leds[i], LOW);
  }
}
```

Digital outputs are not limited to LEDs. They can also control relays, buzzers, transistors, and the signal lines of many modules. However, each pin has a current limit of about 20 mA safely and 40 mA absolutely. For devices that need more current, such as motors or large relays, you must use a transistor, MOSFET, or dedicated driver module.

#### Key concepts
- pinMode(), digitalWrite(), OUTPUT
- HIGH and LOW logic levels
- LED wiring and current-limiting resistors
- LED arrays and patterns
- Current limits and driver circuits

#### Hands-on activity
Build a circuit with three LEDs on pins 9, 10, and 11. Write a sketch that creates a traffic-light sequence: green for 3 seconds, yellow for 1 second, red for 3 seconds, repeating.

#### Assessment idea
Show a diagram of an LED connected directly from pin 13 to GND without a resistor. Ask what the risk is and how to fix it.

#### AI generation note
Create an 8-minute lesson with a real circuit demonstration. Show the LED, resistor, breadboard connections, and the effect of changing pin numbers and delay times. Include a wiring diagram overlay and a safety reminder about current limits.

---

### Chapter 3.2 — Digital Input: Reading Buttons and Switches

#### Learning objectives
- Configure a pin as an input and read its state with `digitalRead()`.
- Understand floating inputs and the need for pull-up or pull-down resistors.
- Use the internal pull-up resistors built into the Arduino.
- Implement button debouncing in software.

#### Detailed lesson content

Digital input allows the Arduino to read the state of a button, switch, or any device that produces a HIGH or LOW signal. To read a digital pin, you first configure it as an input:

```cpp
pinMode(2, INPUT);
```

Then you read the state in `loop()`:

```cpp
int buttonState = digitalRead(2);
```

A problem arises when a button is not pressed. If the pin is not connected to either 5V or ground, it is said to be floating. A floating pin can pick up electrical noise and randomly read HIGH or LOW. To prevent this, you need a pull-up or pull-down resistor.

A pull-down resistor connects the pin to ground through a 10kΩ resistor. When the button is not pressed, the pin reads LOW. When the button is pressed, it connects the pin to 5V, and the pin reads HIGH. A pull-up resistor does the opposite: it connects the pin to 5V, so the pin reads HIGH when the button is not pressed and LOW when pressed.

The Arduino Uno has internal pull-up resistors that you can enable in code:

```cpp
pinMode(2, INPUT_PULLUP);
```

With `INPUT_PULLUP`, you do not need an external resistor. The pin reads HIGH when the button is open and LOW when the button is pressed and connects the pin to ground. This is the most common way to connect a button to an Arduino.

Another challenge is switch bounce. When a mechanical button is pressed, the metal contacts do not close cleanly. They bounce against each other for a few milliseconds, causing the signal to fluctuate rapidly between HIGH and LOW. If your code checks the button too quickly, it may count one press as many. This is called bouncing.

A simple software debounce technique waits a short time after detecting a change before reading the button again:

```cpp
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;
int lastButtonState = HIGH;
int buttonState = HIGH;

void loop() {
  int reading = digitalRead(2);
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != buttonState) {
      buttonState = reading;
      if (buttonState == LOW) {
        // button was pressed
      }
    }
  }
  lastButtonState = reading;
}
```

This code uses the `millis()` function, which returns the number of milliseconds since the board started. By tracking the time of the last state change and waiting 50 milliseconds, the code ignores the bounce and only accepts a stable reading.

#### Key concepts
- digitalRead(), INPUT, INPUT_PULLUP
- Floating inputs and pull-up/pull-down resistors
- Button wiring with internal pull-ups
- Switch bounce and debouncing
- millis() for non-blocking timing

#### Hands-on activity
Connect a pushbutton to pin 2 using `INPUT_PULLUP`. Write a sketch that toggles an LED on pin 13 each time the button is pressed. Implement software debouncing.

#### Assessment idea
Ask why `INPUT_PULLUP` makes the unpressed button read HIGH, and what would happen if the pin were left as a plain INPUT with no external resistor.

#### AI generation note
Create a 9-minute lesson. Use an oscilloscope-style animation to show switch bounce. Demonstrate the difference between a floating input and a pull-up input. Walk through the debounce code line by line, highlighting how `millis()` replaces `delay()`.

---

### Chapter 3.3 — Analog Input: Reading Sensors with analogRead()

#### Learning objectives
- Explain how the Arduino's Analog-to-Digital Converter (ADC) works.
- Read analog values from sensors using `analogRead()`.
- Convert ADC readings (0–1023) into meaningful units such as voltage or temperature.
- Calibrate sensors using known reference values.

#### Detailed lesson content

The real world is analog. Light intensity, temperature, distance, and sound pressure are continuous values, not just on or off. The Arduino Uno cannot read true analog voltages directly, but it has a built-in Analog-to-Digital Converter (ADC) on the ATmega328P. The ADC measures the voltage on an analog pin and converts it into a digital number that the program can use.

The ADC on the Uno has 10-bit resolution, which means it divides the input voltage range into 1024 steps. The default reference voltage is 5V, so a reading of 0 corresponds to 0V and a reading of 1023 corresponds to 5V. To convert a raw ADC value to a voltage, use the formula:

```cpp
float voltage = (analogRead(A0) / 1023.0) * 5.0;
```

A common analog sensor is the potentiometer. A potentiometer is a variable resistor with three pins. When connected across 5V and ground, the middle pin produces a voltage between 0V and 5V depending on the position of the knob. Reading this voltage with `analogRead()` lets you create variable controls for brightness, speed, volume, or any other parameter.

Other analog sensors include light-dependent resistors (LDRs), temperature sensors such as the TMP36 or LM35, and flex sensors. These sensors change their resistance in response to physical conditions. They are usually used in a voltage divider circuit with a fixed resistor so that the Arduino can read a changing voltage.

To make a sensor reading meaningful, you often need to convert it into real-world units. For example, the LM35 temperature sensor produces 10 millivolts per degree Celsius. If the ADC reading is 143, the voltage is about 0.699V, which corresponds to about 69.9°C. The exact conversion depends on the sensor's datasheet.

Calibration improves accuracy. For a simple light sensor, you might record the ADC value in bright light and in complete darkness, then map those values to a 0–100% scale using the `map()` function:

```cpp
int raw = analogRead(A0);
int percent = map(raw, darkValue, brightValue, 0, 100);
```

Always check that `darkValue` is less than `brightValue` when using `map()`. If the values are reversed, the output will also be reversed.

#### Key concepts
- ADC, 10-bit resolution, 0–1023 range
- analogRead() and analog pins A0–A5
- Voltage divider circuits
- Sensor datasheets and conversion formulas
- map() and calibration

#### Hands-on activity
Connect a potentiometer to analog pin A0. Read the value and print both the raw ADC reading and the corresponding voltage to the Serial Monitor. Then use the potentiometer to control the blink speed of an LED.

#### Assessment idea
Given an ADC reading of 512 and a 5V reference, what is the input voltage? If a sensor outputs 0.01V per degree Celsius, what temperature does that voltage represent?

#### AI generation note
Create a 9-minute lesson. Use a ruler analogy for the 10-bit ADC: 0 to 1023 marks along a 5V line. Show a potentiometer circuit and live-read values in the Serial Monitor. Include a short animation of `map()` scaling one range to another.

---

### Chapter 3.4 — Analog Output: PWM and Controlling Brightness, Speed, and Tone

#### Learning objectives
- Understand Pulse Width Modulation (PWM) and how it simulates analog output.
- Use `analogWrite()` to control LED brightness, motor speed, and servo position.
- Identify PWM-capable pins on the Arduino Uno.
- Generate simple tones with a buzzer using `tone()`.

#### Detailed lesson content

The Arduino Uno does not have a true Digital-to-Analog Converter (DAC) for producing smooth analog voltages. Instead, it uses Pulse Width Modulation (PWM) to approximate analog output on specific digital pins. PWM works by turning the pin on and off very quickly. The duty cycle, which is the percentage of time the pin is on, determines the average voltage delivered to the load.

For example, if a PWM pin is on 50% of the time and off 50% of the time, the average voltage is 2.5V. To the human eye, an LED driven by this signal appears half as bright as when it is fully on. To a motor, the average voltage determines speed. The PWM frequency on most Arduino Uno pins is about 490 Hz, fast enough for LEDs and motors but audible in some cases.

On the Arduino Uno, the PWM-capable pins are 3, 5, 6, 9, 10, and 11. They are marked with a tilde (~) on the board. You use `analogWrite()` with a value from 0 to 255:

```cpp
analogWrite(9, 127);  // approximately 50% duty cycle
```

A value of 0 means the pin is always off, and 255 means the pin is always on. Values in between produce varying average voltages. PWM is perfect for fading LEDs smoothly, controlling the speed of DC motors through a transistor or driver, and controlling the position of standard hobby servos.

For LEDs, a fade effect can be created by increasing the PWM value from 0 to 255 and then decreasing it back:

```cpp
for (int brightness = 0; brightness <= 255; brightness++) {
  analogWrite(9, brightness);
  delay(10);
}
for (int brightness = 255; brightness >= 0; brightness--) {
  analogWrite(9, brightness);
  delay(10);
}
```

For sound, the Arduino has a built-in `tone()` function that produces a square wave of a specified frequency on a PWM pin. You can connect a piezo buzzer or small speaker to the pin and play simple melodies or alarms. `noTone()` stops the sound.

```cpp
tone(8, 1000, 500);  // play 1000 Hz tone on pin 8 for 500 ms
```

It is important to remember that PWM is not true analog output. Some devices, such as audio amplifiers or precision control systems, need a real DAC. For those applications, you can add an external DAC module or use a different board such as the Arduino Due.

#### Key concepts
- PWM, duty cycle, frequency
- analogWrite() and PWM pins (~)
- Fading LEDs and motor speed control
- tone() and noTone() for sound
- Difference between PWM and true DAC

#### Hands-on activity
Build a circuit with an LED on pin 9 and a potentiometer on A0. Use the potentiometer value to control LED brightness in real time. Then add a piezo buzzer on pin 8 that beeps when the brightness exceeds 80%.

#### Assessment idea
Ask: "If `analogWrite(9, 64)` is used on a 5V Uno, what is the approximate average voltage?" Answer: 64/255 * 5 ≈ 1.25V.

#### AI generation note
Create a 9-minute lesson with an oscilloscope-style animation showing PWM waveforms at different duty cycles. Demonstrate LED fading and motor speed control. Show the `tone()` function with a simple buzzer melody. End with a quick quiz on identifying PWM pins.

## Module 4: Sensors and Actuators

> **Goal:** Connect and program common sensors and actuators, including temperature, distance, motion, displays, motors, and servos.

---

### Chapter 4.1 — Environmental Sensors: Temperature, Humidity, Light, and Gas

#### Learning objectives
- Interface with analog temperature sensors such as the TMP36 and LM35.
- Use digital sensors such as the DHT11 and DHT22 for temperature and humidity.
- Read light levels using a light-dependent resistor (LDR).
- Understand the role of sensor datasheets and libraries.

#### Detailed lesson content

Sensors are the input devices that let an Arduino perceive the physical world. Environmental sensors measure conditions such as temperature, humidity, light, and air quality. Each sensor produces an electrical signal that the Arduino can read and convert into useful information.

The TMP36 is a popular analog temperature sensor. It has three pins: power, ground, and signal. The output voltage changes linearly with temperature. At 25°C, the output is 750 mV, and the scale is 10 mV per degree Celsius. To read temperature from a TMP36 on analog pin A0:

```cpp
int reading = analogRead(A0);
float voltage = (reading / 1023.0) * 5.0;
float temperatureC = (voltage - 0.5) * 100.0;
```

The LM35 is similar but has a different scale: 10 mV per degree Celsius with no offset. Always consult the sensor's datasheet to get the correct formula.

For both temperature and humidity, the DHT11 and DHT22 sensors are very common. These are digital sensors that use a single-wire protocol to send data. You cannot read them with a simple `analogRead()`. Instead, you use a library such as the Adafruit DHT sensor library. The library handles the communication timing and gives you easy functions:

```cpp
#include "DHT.h"
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  Serial.print("Humidity: ");
  Serial.print(h);
  Serial.print("%  Temperature: ");
  Serial.print(t);
  Serial.println("C");
  delay(2000);
}
```

Light-dependent resistors, or LDRs, change resistance based on light intensity. In a voltage divider with a fixed resistor, the Arduino reads a changing voltage. More light usually means lower resistance and a lower voltage, or higher depending on whether the LDR is connected to power or ground. You can calibrate the sensor to produce a percentage or simply use it to detect light vs. dark.

Gas sensors such as the MQ-2 detect gases like smoke, methane, and propane. They output an analog voltage proportional to gas concentration. These sensors often need a warm-up time before readings stabilize. They are useful in safety and air-quality projects.

Using libraries is a key skill in Arduino development. Libraries package complex communication protocols into simple functions. You install them through the Library Manager, include them at the top of your sketch with `#include`, and then use the objects and functions they provide. Reading library examples is one of the fastest ways to learn how a new sensor works.

#### Key concepts
- TMP36, LM35, DHT11/DHT22, LDR, MQ-2
- Analog vs. digital sensors
- Sensor datasheets and formulas
- Installing and using libraries
- Voltage divider circuits

#### Hands-on activity
Connect a DHT11 sensor and print temperature and humidity to the Serial Monitor every 2 seconds. Add an LED that turns on when the temperature rises above a threshold you set.

#### Assessment idea
Provide a TMP36 output voltage of 0.73V. Ask learners to calculate the temperature using the TMP36 formula.

#### AI generation note
Create a 10-minute lesson. Show real sensor hardware, wiring diagrams, and Serial Monitor output. Explain how to install the DHT library through the Arduino IDE. Use a datasheet excerpt to show where the conversion formula comes from.

---

### Chapter 4.2 — Distance and Motion Sensors: Ultrasonic and PIR

#### Learning objectives
- Measure distance with an HC-SR04 ultrasonic sensor.
- Detect motion with a PIR sensor.
- Combine sensor data to make interactive projects.
- Understand timing and trigger/echo concepts.

#### Detailed lesson content

Distance and motion sensors allow Arduino projects to react to nearby objects or people. The HC-SR04 ultrasonic distance sensor is one of the most popular. It measures distance by sending out a short burst of high-frequency sound and listening for the echo. Because sound travels at a known speed, the time between the pulse and the echo can be converted into distance.

The HC-SR04 has four pins: VCC, Trig, Echo, and GND. To use it, you send a 10-microsecond HIGH pulse to the Trig pin. The sensor then sends eight ultrasonic pulses and sets the Echo pin HIGH for the amount of time it takes the sound to travel to the object and back. You measure the duration of the Echo pulse with the `pulseIn()` function and convert it to distance.

```cpp
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  float distanceCm = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distanceCm);
  Serial.println(" cm");
  delay(500);
}
```

The factor 0.034 is the speed of sound in centimeters per microsecond. Dividing by 2 accounts for the round trip. The sensor can measure from about 2 cm to 400 cm, though accuracy drops beyond a few meters.

PIR, or Passive Infrared, sensors detect motion by sensing changes in infrared radiation. Warm bodies such as humans and animals emit infrared light. A PIR sensor detects changes in the infrared pattern in front of it and outputs a HIGH signal when motion is detected. PIR sensors usually have two potentiometers for adjusting sensitivity and the time the output stays HIGH after detection.

A PIR sensor has three pins: VCC, OUT, and GND. You connect OUT to a digital input pin and read it with `digitalRead()`. Because the sensor holds the output HIGH for a configurable time, you may not need debouncing:

```cpp
int pirPin = 2;
int ledPin = 13;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (digitalRead(pirPin) == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

Combining sensors leads to richer projects. For example, you can build an automatic light that turns on when motion is detected and stays on only while a person is within a certain distance. This kind of logic uses both a PIR sensor and an ultrasonic sensor together.

#### Key concepts
- HC-SR04 ultrasonic sensor and pulseIn()
- Speed of sound and distance formula
- PIR sensor principles and adjustment
- Combining multiple sensors
- Real-world sensor limitations

#### Hands-on activity
Build a parking sensor: use an HC-SR04 to measure distance and make a buzzer beep faster as an object gets closer. Add a PIR sensor to activate the system only when motion is detected.

#### Assessment idea
If the Echo pulse lasts 1000 microseconds, what is the distance to the object? Answer: 1000 * 0.034 / 2 = 17 cm.

#### AI generation note
Create a 10-minute lesson. Animate the ultrasonic pulse traveling to an object and returning. Show a live demo of the parking sensor with changing beep rates. Explain PIR sensitivity adjustments with close-ups of the sensor module.

---

### Chapter 4.3 — Displays: Character LCD and OLED

#### Learning objectives
- Connect and control a 16x2 or 20x4 character LCD using I2C.
- Display sensor data and messages on an LCD.
- Use a monochrome OLED display with the SSD1306 library.
- Format output for readable screens.

#### Detailed lesson content

Displays make your projects interactive by showing data, status, and menus. The classic character LCD, often a 16x2 or 20x4 model, displays text using predefined character blocks. Modern versions use an I2C backpack, which reduces the number of wires from many pins to just four: VCC, GND, SDA, and SCL.

To use a character LCD with I2C, install the `LiquidCrystal_I2C` library. Include it and create an object with the I2C address, which is usually `0x27` or `0x3F`. In `setup()`, initialize the display and turn on the backlight. In `loop()`, use `setCursor()` to choose where to write, and `print()` to show text:

```cpp
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello, Arduino!");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print(millis() / 1000);
  lcd.print(" sec");
}
```

OLED displays are more flexible than character LCDs. A 0.96-inch monochrome OLED with an SSD1306 driver can display text, shapes, and simple graphics. It also uses I2C, so wiring is simple. The Adafruit SSD1306 library provides functions for drawing pixels, lines, rectangles, and text. OLEDs have better contrast and do not require a backlight.

When displaying sensor data, formatting matters. Floating-point numbers can be hard to read if they have too many decimal places. Use `String()` or `dtostrf()` to control the number of digits. Clear old text before writing new values to avoid leftover characters on the screen. Updating the display too frequently can cause flicker, so refresh only when values change or at a moderate rate.

Displays are useful for debugging too. Instead of relying only on the Serial Monitor, you can show values directly on the device, which is helpful when the Arduino is not connected to a computer.

#### Key concepts
- 16x2/20x4 character LCD with I2C
- LiquidCrystal_I2C library
- SSD1306 OLED and Adafruit libraries
- setCursor(), print(), clear()
- Formatting sensor output for screens

#### Hands-on activity
Connect a 16x2 I2C LCD and display temperature and humidity from a DHT11 sensor. Update the display every 2 seconds and add labels for each reading.

#### Assessment idea
Ask: "Why is I2C preferred over parallel wiring for LCDs?" Answer: it uses fewer pins and simpler wiring.

#### AI generation note
Create a 10-minute lesson. Compare LCD and OLED side by side. Show the I2C wiring diagram and library installation. Walk through formatting sensor data, and demonstrate clearing old values before printing new ones.

---

### Chapter 4.4 — Actuators: Motors, Servos, and Relays

#### Learning objectives
- Control the position of a servo motor using the Servo library.
- Drive a DC motor with a transistor or motor driver module.
- Use a relay to switch high-voltage devices safely.
- Understand power requirements and external power supplies.

#### Detailed lesson content

Actuators are the output devices that let an Arduino move or control things in the physical world. The three most common types are servos, DC motors, and relays.

A servo motor is a motor that can be positioned at a specific angle. Standard hobby servos can move from 0 to 180 degrees. They have three wires: power (usually red), ground (usually brown or black), and signal (usually yellow or orange). The signal wire is connected to a PWM-capable pin. The Arduino Servo library makes control easy:

```cpp
#include <Servo.h>
Servo myServo;

void setup() {
  myServo.attach(9);
}

void loop() {
  myServo.write(0);
  delay(1000);
  myServo.write(90);
  delay(1000);
  myServo.write(180);
  delay(1000);
}
```

The `write()` function sets the target angle, and the servo moves to that position. Servos are used in robotics arms, model vehicles, and animatronics. Some servos are continuous rotation servos, which rotate like DC motors rather than moving to a fixed angle.

DC motors spin continuously when power is applied. They cannot be connected directly to an Arduino pin because they draw too much current and can damage the board. Instead, use a transistor, MOSFET, or a motor driver module such as the L298N or L293D. These modules allow you to control motor speed with PWM and direction with additional logic pins.

A relay is an electrically operated switch. It lets an Arduino control high-voltage devices such as lamps, fans, or pumps using a low-voltage signal. Relays have a coil that opens or closes a set of contacts. Always use a relay module with an optocoupler and a flyback diode to protect the Arduino. Never work with mains voltage unless you have proper training and safety equipment.

Power is a critical consideration when using actuators. Arduino pins can supply only small amounts of current. Motors and relays often need their own power supply, with the ground connected to the Arduino ground. Trying to power a large motor from the Arduino's 5V pin can cause resets and damage.

#### Key concepts
- Servo motor and Servo library
- DC motor and motor driver modules
- Relay modules and high-voltage switching
- PWM for motor speed
- External power supplies and grounding

#### Hands-on activity
Connect a servo motor and make it sweep from 0 to 180 degrees and back. Then add a potentiometer to control the servo position manually.

#### Assessment idea
Ask why a DC motor should not be connected directly to an Arduino digital pin, and what component should be used instead.

#### AI generation note
Create a 10-minute lesson. Show a servo sweeping, a DC motor speed controlled by PWM, and a relay module clicking. Emphasize power wiring with diagrams and safety warnings for mains voltage. Include an external power supply example.

## Module 5: Communication Protocols

> **Goal:** Connect Arduino to other devices and systems using Serial, I2C, SPI, Bluetooth, and Wi-Fi.

---

### Chapter 5.1 — Serial Communication with the Computer and Other Boards

#### Learning objectives
- Use `Serial.begin()`, `Serial.print()`, and `Serial.println()` for debugging.
- Read incoming serial data with `Serial.available()` and `Serial.read()`.
- Parse simple commands sent from the Serial Monitor.
- Communicate between two Arduino boards using SoftwareSerial.

#### Detailed lesson content

Serial communication is one of the most important tools in Arduino programming. It allows the Arduino to send text and data to a computer for debugging, and to receive commands from a computer or another microcontroller. The Arduino Uno has a built-in hardware UART on pins 0 (RX) and 1 (TX), which is also used for USB communication with the computer.

To start serial communication, call `Serial.begin()` in `setup()` with a baud rate. The baud rate is the speed of communication in bits per second. Common values are 9600 and 115200. Both sides must use the same baud rate:

```cpp
void setup() {
  Serial.begin(9600);
}
```

You can then print values to the Serial Monitor:

```cpp
Serial.println("Hello, world!");
Serial.print("Sensor value: ");
Serial.println(analogRead(A0));
```

`Serial.print()` writes text without a newline, while `Serial.println()` adds a newline at the end. Printing data is extremely useful for debugging because you can see the values your program is working with.

To receive data, check whether anything has arrived with `Serial.available()`, then read a byte with `Serial.read()`. For text commands, you can read characters into a string until a newline is received:

```cpp
String command = "";

void loop() {
  while (Serial.available()) {
    char c = Serial.read();
    if (c == '\n') {
      handleCommand(command);
      command = "";
    } else {
      command += c;
    }
  }
}

void handleCommand(String cmd) {
  if (cmd == "on") {
    digitalWrite(13, HIGH);
  } else if (cmd == "off") {
    digitalWrite(13, LOW);
  }
}
```

When two Arduino boards need to communicate, you can use the hardware serial on one board, but pins 0 and 1 are already used for USB on the Uno. The `SoftwareSerial` library lets you create additional serial ports on any digital pins. This is useful for communicating with modules such as GPS units, GSM modems, or other Arduinos.

```cpp
#include <SoftwareSerial.h>
SoftwareSerial otherBoard(10, 11); // RX, TX

void setup() {
  otherBoard.begin(9600);
}
```

Serial communication is the foundation for more advanced topics such as Bluetooth and Wi-Fi modules, which often appear to the Arduino as serial devices.

#### Key concepts
- Serial.begin(), Serial.print(), Serial.println()
- Baud rate and Serial Monitor
- Serial.available() and Serial.read()
- Parsing text commands
- SoftwareSerial for extra serial ports

#### Hands-on activity
Write a sketch that reads a potentiometer and prints the raw value and voltage to the Serial Monitor. Then extend it so that typing "on" turns on an LED and typing "off" turns it off.

#### Assessment idea
If the Serial Monitor is set to 9600 baud but the sketch uses `Serial.begin(115200)`, what will appear? Answer: garbled or unreadable text.

#### AI generation note
Create a 9-minute lesson. Demonstrate the Serial Monitor in the Arduino IDE. Show live printing of sensor values and command parsing. Include a two-board communication example with SoftwareSerial wiring.

---

### Chapter 5.2 — I2C and SPI: Connecting Multiple Devices Efficiently

#### Learning objectives
- Explain the difference between I2C and SPI communication.
- Wire multiple I2C devices to the same bus using different addresses.
- Understand SPI connections: MOSI, MISO, SCK, and SS.
- Choose the right protocol for common sensors and displays.

#### Detailed lesson content

I2C and SPI are two common protocols that allow microcontrollers to communicate with multiple peripheral devices using shared wires. They are faster and more organized than bit-banging individual pins.

I2C, pronounced "I-squared-C," uses only two wires: SDA for data and SCL for the clock signal. Each device on the bus has a unique 7-bit address. Multiple devices can share the same two wires as long as their addresses are different. This makes I2C excellent for projects with limited pins. The Arduino Uno uses analog pin A4 for SDA and A5 for SCL. Newer boards may have separate SDA and SCL pins.

Common I2C devices include LCD displays, OLED displays, real-time clock modules (DS3231), temperature sensors, and port expanders. Each device is created as an object in code, and the library handles addressing:

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
```

SPI, pronounced "S-P-I," uses four wires: MOSI (Master Out Slave In), MISO (Master In Slave Out), SCK (Serial Clock), and SS (Slave Select). SPI is generally faster than I2C and is used for devices such as SD cards, shift registers, some displays, and radio modules. Each SPI device needs its own SS pin, which the master sets LOW to select that device.

On the Arduino Uno, the SPI pins are fixed: MOSI is pin 11, MISO is pin 12, SCK is pin 13, and SS is pin 10 by default. You can use any pin as SS for additional devices. The SPI library provides functions such as `SPI.transfer()` to send and receive data.

When choosing between I2C and SPI, consider pin count, speed, and device availability. I2C uses fewer pins and supports multiple devices on two wires, but it is slower. SPI is faster and simpler for some devices, but it requires more pins and a separate SS line for each device. Many sensors support both, so your choice may depend on the other devices in your project.

#### Key concepts
- I2C: SDA, SCL, addresses
- SPI: MOSI, MISO, SCK, SS
- Wire library and SPI library
- Address conflicts on I2C
- Speed vs. pin-count trade-off

#### Hands-on activity
Connect an I2C LCD and an I2C RTC module to the same SDA/SCL bus. Display the current time on the LCD. If addresses conflict, use an I2C scanner sketch to find devices.

#### Assessment idea
Ask: "You need to connect three sensors and a display, and you are running out of digital pins. Which protocol would you prefer and why?" Expected answer: I2C because it uses only two wires for many devices.

#### AI generation note
Create a 10-minute lesson. Use animated diagrams to show data traveling on I2C and SPI buses. Show a real I2C scanner sketch output. Compare I2C and SPI with a side-by-side feature table.

---

### Chapter 5.3 — Bluetooth and Wi-Fi Modules

#### Learning objectives
- Communicate wirelessly with a smartphone using an HC-05 or HC-06 Bluetooth module.
- Send and receive commands over Bluetooth serial.
- Introduce the ESP8266 and ESP32 for Wi-Fi projects.
- Discuss security considerations for wireless IoT devices.

#### Detailed lesson content

Wireless communication turns an Arduino project into an IoT device. The easiest way to add Bluetooth to an Arduino is with an HC-05 or HC-06 module. These modules behave like serial devices. You communicate with them using the same `Serial.print()` and `Serial.read()` functions, and the module handles the wireless transmission.

The HC-05 has six pins: VCC, GND, TXD, RXD, EN, and STATE. Connect VCC to 5V, GND to ground, TXD to the Arduino RX pin (pin 0) through a voltage divider if needed, and RXD to the Arduino TX pin (pin 1). Because pins 0 and 1 are used for USB programming, many projects use `SoftwareSerial` on other pins to talk to the Bluetooth module.

Once paired with a smartphone, you can use a Bluetooth terminal app to send commands. For example, sending "on" might turn on an LED, and sending "off" might turn it off. The Arduino code is almost identical to parsing serial commands from the USB Serial Monitor.

For Wi-Fi, the Arduino Uno has no built-in wireless capability. You can add an ESP8266 module, but a more common approach is to use an ESP8266-based board such as the NodeMCU or WeMos D1 Mini, or an ESP32 board. These boards can be programmed with the Arduino IDE, use the same language and libraries, and have built-in Wi-Fi. They are faster and have more memory than the Uno.

A simple ESP8266 web server project serves a webpage that controls an LED:

```cpp
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";
ESP8266WebServer server(80);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
}
```

Security is important for wireless projects. Hard-coding Wi-Fi passwords in sketches is fine for learning but risky for real products. Use HTTPS when possible, protect endpoints with authentication, and keep firmware updated. Never expose unauthenticated control interfaces to the public internet.

#### Key concepts
- HC-05/HC-06 Bluetooth modules and AT commands
- SoftwareSerial for Bluetooth
- ESP8266 and ESP32 as Wi-Fi-capable Arduino-compatible boards
- Simple web server on ESP8266
- IoT security basics

#### Hands-on activity
Build a Bluetooth-controlled LED: pair an HC-06 with a phone, send "1" to turn the LED on and "0" to turn it off. Alternatively, if an ESP8266 board is available, create a web page with on/off buttons.

#### Assessment idea
Ask: "What is the main advantage of using an ESP32 instead of an Arduino Uno with an ESP8266 add-on module?" Expected answer: built-in Wi-Fi/Bluetooth, more memory, faster processor.

#### AI generation note
Create a 10-minute lesson. Show the Bluetooth module wiring and a phone app sending commands. Demonstrate an ESP8266 web server and the resulting control page. Discuss password security with a warning slide.

## Module 6: Capstone & Advanced Topics

> **Goal:** Apply everything learned to a real project and explore advanced concepts such as interrupts, timers, low power, and debugging.

---

### Chapter 6.1 — Interrupts and Timers

#### Learning objectives
- Use external interrupts to respond to events immediately.
- Attach interrupt service routines with `attachInterrupt()`.
- Avoid common pitfalls such as long ISRs and shared variables.
- Use `millis()` for non-blocking timing.

#### Detailed lesson content

In a normal Arduino program, the `loop()` function checks inputs and updates outputs repeatedly. But what if an event happens between two checks and must be handled instantly? Interrupts solve this problem. An interrupt pauses the main program, runs a special function called an Interrupt Service Routine (ISR), and then returns to the main program.

External interrupts are triggered by changes on specific pins. On the Arduino Uno, external interrupts are available on pins 2 and 3. You attach an ISR to a pin with `attachInterrupt()`:

```cpp
const int buttonPin = 2;
volatile int buttonCount = 0;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(buttonPin), countPress, FALLING);
  Serial.begin(9600);
}

void loop() {
  Serial.println(buttonCount);
  delay(500);
}

void countPress() {
  buttonCount++;
}
```

The `FALLING` mode triggers the ISR when the pin goes from HIGH to LOW. Other modes include `RISING`, `CHANGE`, and `LOW`. Because the ISR can run at any moment, variables shared between the ISR and the main program must be declared `volatile`. This tells the compiler not to optimize them in ways that would miss updates from the ISR.

Interrupts are powerful but must be used carefully. ISRs should be as short and fast as possible. Avoid `delay()`, `Serial.print()`, and long calculations inside an ISR. If you need to do complex work, set a flag in the ISR and handle the work in `loop()`.

For timing without blocking the program, `millis()` is usually better than `delay()`. It lets you check whether enough time has passed without stopping everything else. The combination of `millis()` and interrupts covers most real-time needs in beginner and intermediate projects.

#### Key concepts
- Interrupts and ISRs
- attachInterrupt() and interrupt modes
- volatile variables
- millis() for non-blocking code
- ISR best practices

#### Hands-on activity
Modify the button counter sketch to use an interrupt instead of polling. Compare how the interrupt version catches fast presses that the polling version misses.

#### Assessment idea
Ask why a variable shared between an ISR and `loop()` must be `volatile`. Answer: because the ISR can change it at any time and the compiler must not cache the value.

#### AI generation note
Create a 9-minute lesson. Use an animation showing the main loop being interrupted, the ISR running, and control returning. Show the button-counting example with before-and-after comparison. Warn against long ISRs.

---

### Chapter 6.2 — Power Management and Battery Operation

#### Learning objectives
- Compare power sources for Arduino projects.
- Use sleep modes to reduce battery consumption.
- Measure current draw with a multimeter.
- Choose components and strategies for low-power design.

#### Detailed lesson content

Many Arduino projects run on batteries, so power management is important. The Arduino Uno is not the most power-efficient board, but you can still reduce its power consumption with a few techniques. For very low power needs, consider the Arduino Pro Mini, Adafruit Feather, or ESP32 deep-sleep modes.

The simplest way to reduce power is to remove unnecessary components. An Arduino Uno running from a 9V battery through the barrel jack wastes power because the onboard voltage regulator converts 9V to 5V. Powering the board through the 5V pin with a regulated 5V source, or using a 3.3V board with batteries, is more efficient.

Unused peripherals can be turned off. LEDs, sensors, and modules that are always on draw current even when not needed. You can power sensors from a digital pin and turn them off by setting the pin LOW, or use a transistor to switch larger loads.

The `LowPower` library for AVR-based Arduinos makes it easy to enter sleep modes. In sleep mode, the microcontroller stops most operations and wakes up only when an interrupt or timer occurs. This can reduce current draw from tens of milliamps to microamps.

```cpp
#include <LowPower.h>

void setup() {
  pinMode(2, INPUT_PULLUP);
}

void loop() {
  // Sleep until pin 2 goes LOW
  LowPower.powerDown(SLEEP_FOREVER, ADC_OFF, BOD_OFF);
  // Wakeup code here
}
```

To measure current, set a multimeter to the milliamp or microamp range and place it in series with the power supply. Be careful not to exceed the multimeter's fuse. Measuring before and after optimizations helps you see the impact of your changes.

#### Key concepts
- Battery and regulator efficiency
- Sleep modes and the LowPower library
- Turning off unused peripherals
- Measuring current with a multimeter
- Low-power board alternatives

#### Hands-on activity
Measure the current draw of a running Arduino Uno. Then add a `delay()` and measure again. If a LowPower library is available, compare active and sleep currents.

#### Assessment idea
Ask why powering an Uno with 9V through the barrel jack is less efficient than using 5V directly. Answer: the linear regulator dissipates excess voltage as heat.

#### AI generation note
Create a 7-minute lesson. Show different battery options, a multimeter in series, and a chart of typical current draws. Explain sleep modes with a simple animation and mention low-power board alternatives.

---

### Chapter 6.3 — Debugging, Best Practices, and Going Further

#### Learning objectives
- Use Serial printing, LEDs, and breakpoints for debugging.
- Follow code organization and commenting practices.
- Use version control and document projects.
- Identify paths for continued learning in embedded systems and IoT.

#### Detailed lesson content

Debugging is a normal part of programming. On Arduino, you often do not have a step-by-step debugger, so you use other techniques. The most common method is adding `Serial.println()` statements to show the values of variables and the flow of the program. After fixing the problem, you can remove or comment out the debug prints.

Another useful technique is the "heartbeat" LED. Blink an LED in `loop()` to confirm the program is running. If the LED stops blinking, the program may be stuck in an infinite loop or a long `delay()`. This is especially helpful when the Serial Monitor is not available.

When a project has multiple files, use tabs in the Arduino IDE or move to a more advanced editor such as PlatformIO in Visual Studio Code. Split code into `.h` header files and `.cpp` implementation files. This keeps `loop()` short and makes the project easier to navigate.

Commenting is important. Explain why you are doing something, not just what the code does. Use meaningful variable names. Avoid magic numbers by using constants. Format your code consistently so it is readable to others and to your future self.

Version control with Git helps you track changes and collaborate. Even for personal projects, committing regularly saves you from losing work. Pair your code with a README file that explains the wiring, required libraries, and how to use the project.

To continue learning, explore topics such as real-time operating systems (FreeRTOS), PCB design, Raspberry Pi integration, ROS for robotics, and machine learning on microcontrollers with TensorFlow Lite for Microcontrollers. Each of these builds on the Arduino fundamentals covered in this course.

#### Key concepts
- Serial debugging and heartbeat LEDs
- Code organization with multiple files
- Comments, constants, and naming conventions
- Git and README documentation
- Advanced directions: RTOS, PCB design, ML on microcontrollers

#### Hands-on activity
Take a previous sketch with a bug, such as a sensor that always reads zero. Use `Serial.println()` to find the problem, fix it, and add comments explaining the solution.

#### Assessment idea
Ask what should be included in a project README. Expected answer: description, wiring diagram, parts list, required libraries, installation steps, and usage instructions.

#### AI generation note
Create a 7-minute lesson. Show a debugging session where a heartbeat LED and Serial prints identify a logic error. Demonstrate code refactoring and a simple Git commit. End with a roadmap of advanced topics.

---

### Chapter 6.4 — Capstone Project Brief: Smart Plant Monitoring System

#### Project description
Design and build a smart plant monitoring system that helps keep a plant healthy. The system should measure soil moisture, ambient light, and temperature, display the values on an LCD or OLED, and alert the user when the plant needs water or is in poor lighting. Optionally, the system can include a small water pump controlled by a relay.

#### Required components
- Arduino Uno or compatible board
- Soil moisture sensor
- DHT11 or DHT22 temperature/humidity sensor
- Light-dependent resistor (LDR) or light sensor module
- 16x2 I2C LCD or 0.96-inch OLED display
- Relay module and small water pump (optional)
- Buzzer or LED for alerts
- Breadboard, jumper wires, resistors

#### Functional requirements
1. Read soil moisture, temperature, and light level at regular intervals.
2. Display all three values on the screen with clear labels.
3. Turn on a warning LED or buzzer when soil moisture falls below a threshold.
4. Provide a calibration routine so the user can set dry and wet soil values.
5. Optionally, activate a water pump for a few seconds when soil is too dry.
6. Use non-blocking timing with `millis()` so sensors and alerts update smoothly.

#### Recommended milestones
- Day 1: Test each sensor individually and print values to Serial.
- Day 2: Add the display and format the output.
- Day 3: Implement threshold detection and alerts.
- Day 4: Add optional relay/pump control and calibration.
- Day 5: Assemble the project in an enclosure, document, and present.

#### Assessment criteria
- All required sensors produce readable values.
- Display is clear and updates without flicker.
- Alerts activate at appropriate thresholds.
- Code is organized into functions and commented.
- Project includes a wiring diagram and README.

#### AI generation note
Create a capstone overview video of 10 minutes. Walk through the block diagram, wiring, expected code structure, and grading criteria. Show example photos or renders of a finished enclosure. Encourage learners to customize the project.

## Module 7: Assessments and Final Examination

> **Goal:** Evaluate understanding of electronics fundamentals, C/C++ programming, input/output, sensors, actuators, communication protocols, and project design.

---

### Module quizzes

Each module includes a short quiz that checks conceptual understanding and practical skills. Answers are provided for self-assessment.

#### Module 1 quiz: Electronics and Arduino basics
1. What is the difference between voltage, current, and resistance?
   - Voltage is electrical pressure, current is the flow of charge, and resistance opposes current flow.
2. How much current can an Arduino Uno pin safely source or sink?
   - About 20 mA per pin, with a total limit for the chip.
3. What does `INPUT_PULLUP` do?
   - It enables the internal pull-up resistor so an unconnected input pin reads HIGH.
4. What is the purpose of a breadboard?
   - It allows temporary, solderless connection of components and circuits.
5. Which pins on the Arduino Uno support hardware PWM?
   - Pins 3, 5, 6, 9, 10, and 11.

#### Module 2 quiz: C programming fundamentals
1. What is the difference between `setup()` and `loop()`?
   - `setup()` runs once at startup; `loop()` repeats continuously.
2. Name three numeric data types and their typical sizes on an Arduino Uno.
   - `byte` (1 byte), `int` (2 bytes), `long` (4 bytes), `float` (4 bytes).
3. What is wrong with this expression: `5 / 2`?
   - Integer division gives `2`, not `2.5`.
4. Why should functions be used in larger programs?
   - They organize code, reduce repetition, and make debugging easier.
5. What is the difference between a local and a global variable?
   - A local variable exists only inside its function; a global variable is accessible everywhere.

#### Module 3 quiz: Input and output
1. Convert an ADC reading of 512 to voltage with a 5V reference.
   - 512 / 1023.0 * 5.0 ≈ 2.5V.
2. Why is debouncing needed for mechanical buttons?
   - Contacts bounce, creating multiple false transitions.
3. What is PWM duty cycle?
   - The percentage of time the signal is HIGH within one period.
4. Which pin mode should be used with a pushbutton connected between the pin and ground?
   - `INPUT_PULLUP`.
5. What does `analogWrite(9, 128)` approximately produce?
   - A 50% duty cycle PWM signal on pin 9.

#### Module 4 quiz: Sensors and actuators
1. How does an HC-SR04 ultrasonic sensor measure distance?
   - It sends a sound pulse and measures the time until the echo returns.
2. What library is commonly used to control a servo motor?
   - The built-in `Servo` library.
3. Why should a DC motor not be connected directly to an Arduino pin?
   - Motors draw too much current and can damage the pin or the board.
4. What does a PIR sensor detect?
   - Changes in infrared radiation caused by motion of warm objects.
5. How many wires are needed for an I2C LCD display?
   - Four: VCC, GND, SDA, and SCL.

#### Module 5 quiz: Communication protocols
1. What does a baud rate describe?
   - The speed of serial communication in bits per second.
2. Name the two I2C lines.
   - SDA (data) and SCL (clock).
3. Why might you use `SoftwareSerial`?
   - To create an additional serial port on pins other than 0 and 1.
4. What is one advantage of an ESP32 over an Arduino Uno?
   - Built-in Wi-Fi and Bluetooth, more memory, and a faster processor.
5. What is the main security concern when creating a Wi-Fi IoT device?
   - Exposing unauthenticated control interfaces or storing passwords in plaintext.

#### Module 6 quiz: Advanced topics and capstone
1. Why must variables shared with an ISR be declared `volatile`?
   - To prevent the compiler from optimizing away changes made by the ISR.
2. What should an ISR avoid doing?
   - Long delays, Serial printing, and complex calculations.
3. Name one way to reduce power consumption in a battery-powered project.
   - Use sleep modes, turn off unused peripherals, or use a more efficient board.
4. What is the purpose of a heartbeat LED?
   - To confirm the program is still running.
5. What should a project README include?
   - Description, wiring, parts list, libraries, setup steps, and usage.

---

### Final examination

#### Section A: Multiple choice (20 points)
1. What is the maximum current an Arduino Uno digital pin should source continuously?
   - a) 5 mA  b) 20 mA  c) 200 mA  d) 1 A
2. Which function initializes serial communication?
   - a) Serial.start()  b) Serial.begin()  c) Serial.init()  d) Serial.open()
3. What does the `map()` function do?
   - a) Converts analog to digital  b) Scales a value from one range to another  c) Maps memory addresses  d) Creates arrays
4. Which sensor measures distance using sound pulses?
   - a) PIR  b) LDR  c) HC-SR04  d) TMP36
5. How many analog inputs does the Arduino Uno have?
   - a) 6  b) 8  c) 10  d) 14

#### Section B: Short answer (30 points)
1. Explain the difference between digital and analog signals, and give one example of each.
2. Describe the steps needed to read a button press reliably using `INPUT_PULLUP`.
3. Convert an ADC reading of 768 to a voltage assuming a 5V reference.
4. What is PWM, and why is it useful for controlling LED brightness?
5. Why is it risky to use the `String` class heavily on an Arduino Uno?

#### Section C: Code analysis (20 points)
Given the following sketch:

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(1500);
}
```

1. How long is the LED on during one full cycle?
2. How long is the LED off during one full cycle?
3. What is the duty cycle of the LED as a percentage of the full cycle?
4. How could you make the LED blink twice as fast without changing the ratio?

#### Section D: Practical problem (30 points)
Design a sketch for a simple intrusion detector. The system has:
- A PIR motion sensor on pin 2
- A red LED on pin 13
- A buzzer on pin 8

When motion is detected, the LED should turn on and the buzzer should sound for 2 seconds. After 2 seconds, the system should wait at least 5 seconds before responding to motion again. Use `millis()` for non-blocking timing. Write the complete `setup()` and `loop()` functions.

---

### Final exam answer key

#### Section A
1. b) 20 mA
2. b) Serial.begin()
3. b) Scales a value from one range to another
4. c) HC-SR04
5. a) 6

#### Section B
1. Digital signals have discrete states, HIGH or LOW. Analog signals are continuous. Example digital: button state. Example analog: temperature sensor voltage.
2. Configure the pin as `INPUT_PULLUP`. The pin reads HIGH when the button is open and LOW when pressed. Use debouncing to avoid counting bounce as multiple presses.
3. 768 / 1023.0 * 5.0 ≈ 3.75V.
4. PWM rapidly switches a pin on and off. The duty cycle controls average power, making the LED appear dimmer or brighter.
5. The `String` class dynamically allocates memory, which can fragment the small SRAM and cause crashes.

#### Section C
1. On for 500 ms.
2. Off for 1500 ms.
3. Duty cycle = 500 / (500 + 1500) = 25%.
4. Halve both delays: 250 ms on and 750 ms off.

#### Section D (sample solution)

```cpp
const int pirPin = 2;
const int ledPin = 13;
const int buzzerPin = 8;

unsigned long motionStartTime = 0;
unsigned long cooldownStartTime = 0;
bool alarmActive = false;
bool inCooldown = false;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  unsigned long now = millis();

  if (alarmActive) {
    if (now - motionStartTime >= 2000) {
      digitalWrite(ledPin, LOW);
      noTone(buzzerPin);
      alarmActive = false;
      inCooldown = true;
      cooldownStartTime = now;
    }
  } else if (inCooldown) {
    if (now - cooldownStartTime >= 5000) {
      inCooldown = false;
    }
  } else {
    if (digitalRead(pirPin) == HIGH) {
      alarmActive = true;
      motionStartTime = now;
      digitalWrite(ledPin, HIGH);
      tone(buzzerPin, 1000);
    }
  }
}
```

---

## Course conclusion

By completing this course, learners should be able to:
- Read basic electronic schematics and build circuits on a breadboard.
- Write, upload, and debug Arduino sketches in C/C++.
- Control digital and analog inputs and outputs.
- Interface with common sensors and actuators.
- Use serial, I2C, SPI, Bluetooth, and Wi-Fi communication.
- Apply interrupts, timers, and power-saving techniques.
- Plan, build, and document a complete Arduino capstone project.

This syllabus is designed to serve as a pilot template for future courses. Every module and chapter includes the content, context, examples, activities, and AI generation guidance needed to produce high-quality slides, audio, or video lessons automatically.
