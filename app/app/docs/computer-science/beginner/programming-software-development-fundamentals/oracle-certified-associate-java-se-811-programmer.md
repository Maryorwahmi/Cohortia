---
Title: Oracle Certified Associate, Java SE 8/11 Programmer
Course ID: oracle-certified-associate-java-se-811-programmer
Provider: Cohortia
Original reference: Oracle / Online
Platform: Cohortia
Level: Beginner–Intermediate
Type: Certificate
Duration: Exam
Cost: Included with Cohortia
URL: Cohortia course page (original reference: (URL not verified))
Certification: Cohortia Certificate of Completion
Category: Computer Science
Subcategory: Programming & Software Development Fundamentals
Skills: Java syntax, OOP, APIs
Source catalog: docs/computer-science/catalog-courses-by-subcategory.json
Ownership note: Cohortia curates and rebuilds this content for educational purposes and does not claim sole ownership of third-party source material, including Oracle's Java SE certification objectives.
---

## Course Overview

Welcome to the Cohortia course designed to prepare you for the Oracle Certified Associate (OCA), Java SE 8 or 11 Programmer certification exams! This comprehensive program is meticulously structured to guide aspiring Java developers through the foundational concepts and best practices necessary to build robust, efficient, and maintainable Java applications. Whether you're new to programming or looking to formalize your Java knowledge, this course will equip you with a deep understanding of the language's core features, object-oriented principles, and essential API usage. We believe in learning by doing, so expect a blend of theoretical explanations, practical coding exercises, and real-world scenarios to solidify your understanding.

Throughout this learning journey, we will progressively build your Java expertise, starting from the very basics of setting up your development environment and writing your first "Hello, World!" program. We'll then delve into the fundamental building blocks of Java, including data types, operators, and control flow statements, which are crucial for any logical program. A significant portion of the course is dedicated to mastering Object-Oriented Programming (OOP) concepts such as encapsulation, inheritance, and polymorphism, which are the bedrock of modern Java development and key to passing the OCA exam.

Beyond the core language constructs, we will explore vital aspects like exception handling, ensuring your applications can gracefully manage errors and unexpected situations. You'll also gain proficiency in using key classes from the Java API, including `String`, `StringBuilder`, wrapper classes, and essential components of the Collections Framework. For those targeting the Java SE 8/11 exams, we'll cover modern Java features like Lambda expressions and the `java.time` Date and Time API, demonstrating how these enhancements simplify code and improve readability.

By the end of this Cohortia course, you won't just be ready for the OCA exam; you'll have a solid foundation in Java programming that empowers you to confidently tackle real-world development projects. Our goal is to foster not just certification readiness, but true programming proficiency and a lifelong passion for software development. Let's embark on this exciting journey together to unlock the power of Java!

Upon successful completion of this course, you will be able to:
*   Set up a Java Development Kit (JDK) and an Integrated Development Environment (IDE) to write and execute Java programs.
*   Understand and apply Java's primitive data types, variables, and operators to manipulate data effectively.
*   Implement control flow statements, including `if/else`, `switch`, `for`, `while`, and `do-while` loops, to manage program execution.
*   Design and implement classes and objects, applying principles of encapsulation, constructors, and method overloading.
*   Master core Object-Oriented Programming (OOP) concepts such as inheritance, polymorphism, abstract classes, and interfaces.
*   Implement robust error handling using `try-catch-finally` blocks and understand checked versus unchecked exceptions.
*   Utilize common Java API classes like `String`, `StringBuilder`, wrapper classes, and the `java.time` Date and Time API.
*   Work with one-dimensional and multi-dimensional arrays, and understand the basics of the Java Collections Framework.
*   Apply modern Java 8 features, specifically Lambda expressions, to write more concise and functional code.
*   Demonstrate a comprehensive understanding of Java syntax and semantics required to pass the Oracle Certified Associate, Java SE 8/11 Programmer exam.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Java Fundamentals and Environment Setup | 3 |
| 2 | Control Flow and Arrays | 3 |
| 3 | Object-Oriented Programming I: Core Concepts | 4 |
| 4 | Object-Oriented Programming II: Inheritance and Polymorphism | 4 |
| 5 | Exception Handling and Core APIs | 5 |
| 6 | Advanced Language Features and Collections | 5 |

Total chapters: 24
---

## Module 1: Java Fundamentals and Environment Setup

This module will guide you through the initial steps of becoming a Java developer, from understanding the core components of the Java ecosystem to writing your very first program and mastering fundamental data handling.

---

### Chapter 1.1 — Introduction to Java and the Java Development Kit (JDK)

#### Learning objectives
- Explain the core principles and advantages of the Java programming language.
- Differentiate between the Java Development Kit (JDK), Java Runtime Environment (JRE), and Java Virtual Machine (JVM).
- Successfully download and install the appropriate Java Development Kit (JDK) for their operating system.
- Configure essential environment variables like `PATH` and `JAVA_HOME` to enable Java development.

#### Detailed lesson content
Welcome to the exciting world of Java programming! Java is one of the most popular and enduring programming languages, renowned for its versatility, robustness, and the principle of "Write Once, Run Anywhere" (WORA). Developed by James Gosling and his team at Sun Microsystems (now Oracle) in the mid-1990s, Java was designed to be platform-independent, meaning that code written on one operating system can run on any other operating system that has a Java Virtual Machine (JVM) installed, without needing recompilation. This fundamental design choice has made Java a cornerstone for enterprise applications, Android mobile development, big data processing, web applications (backend), and much more. Its object-oriented nature encourages modular, reusable, and maintainable code, which is crucial for large-scale software projects. Furthermore, Java's strong memory management (through garbage collection) and built-in security features make it a reliable choice for critical systems.

Before we can start writing Java code, we need to set up our development environment. This involves understanding and installing the Java Development Kit, or JDK. The Java ecosystem consists of three main components that beginners often find confusing: the JDK, JRE, and JVM. Let's clarify these. The **Java Virtual Machine (JVM)** is the heart of Java's platform independence. It's an abstract machine that provides a runtime environment in which Java bytecode can be executed. When you compile Java source code, it's translated into bytecode, which is then interpreted and executed by the JVM. Each operating system has its own specific JVM implementation, ensuring that the same bytecode can run universally. Think of the JVM as a translator that understands Java's universal language (bytecode) and speaks the native language of your specific computer.

Building upon the JVM, we have the **Java Runtime Environment (JRE)**. The JRE is essentially the JVM plus the core Java class libraries and other supporting files. If you only want to run Java applications on your computer, you only need the JRE. It provides everything necessary for a Java program to execute, but it does not contain the tools needed to *develop* Java applications. For instance, your web browser might use a JRE to run Java applets, or a standalone application like Minecraft might bundle its own JRE. It's the minimum requirement for executing compiled Java code.

Finally, for us as developers, the most crucial component is the **Java Development Kit (JDK)**. The JDK is a superset of the JRE, meaning it includes everything in the JRE (JVM + core libraries) *plus* development tools like the Java compiler (`javac`), the Java debugger (`jdb`), and other utilities used for creating, compiling, and packaging Java applications. When you install the JDK, you get the full suite of tools necessary to write, compile, and run your Java programs. For this course, you will need the JDK. Oracle provides different versions of the JDK, and for this course, we'll be focusing on concepts relevant to Java SE 8 and 11, which are Long-Term Support (LTS) releases. We recommend installing a recent LTS version like JDK 11 or newer, as the core concepts for the OCA exam remain consistent.

To install the JDK, you'll typically visit the Oracle website or an OpenJDK distribution site (like Adoptium/Eclipse Temurin). Download the installer appropriate for your operating system (Windows, macOS, Linux). The installation process is usually straightforward, involving running an executable and following the on-screen prompts. After installation, it's vital to configure your system's environment variables. Specifically, you need to ensure that the `bin` directory of your JDK installation is included in your system's `PATH` variable. This allows you to execute Java commands like `javac` and `java` directly from any command prompt or terminal window, without needing to specify the full path to the executables. You should also set a `JAVA_HOME` environment variable, pointing to the root directory of your JDK installation. Many development tools and build systems rely on `JAVA_HOME` to locate your Java installation.

Let's verify the installation. Open your terminal or command prompt and type:
```bash
java -version
```
You should see output indicating the Java version installed, for example:
```
openjdk version "11.0.12" 2021-07-20
OpenJDK Runtime Environment (build 11.0.12+7)
OpenJDK 64-Bit Server VM (build 11.0.12+7, mixed mode)
```
Next, check the compiler:
```bash
javac -version
```
This should show:
```
javac 11.0.12
```
If you encounter errors like "command not found" or similar, it usually means your `PATH` variable is not correctly configured. Double-check your system's environment variable settings. On Windows, you typically do this via "System Properties" -> "Environment Variables". On macOS/Linux, you might edit files like `.bashrc`, `.zshrc`, or `.profile`. A common mistake is pointing `PATH` to the JDK root instead of the `bin` subdirectory, or not restarting your terminal after making changes. Remember, a correctly configured environment is the foundation for a smooth Java development journey.

#### Key concepts
- **Java Virtual Machine (JVM):** An abstract machine that enables a computer to run Java programs. It converts Java bytecode into machine-specific instructions.
- **Java Runtime Environment (JRE):** The JVM plus the core Java class libraries. It's used to run Java applications.
- **Java Development Kit (JDK):** A superset of the JRE, including development tools like the Java compiler (`javac`) and debugger. Essential for Java developers.
- **Platform Independence:** The ability of Java code to run on any operating system that has a compatible JVM, encapsulated by the "Write Once, Run Anywhere" (WORA) principle.
- **Bytecode:** The intermediate code format that Java source code is compiled into, which is then executed by the JVM.
- **`PATH` Environment Variable:** A system variable that tells the operating system where to look for executable files, allowing commands like `java` and `javac` to be run from any directory.
- **`JAVA_HOME` Environment Variable:** A system variable pointing to the root directory of the JDK installation, used by many Java-based tools and applications.

#### Hands-on activity
**Activity: JDK Installation and Verification**
1.  **Download the JDK:** Visit the official Oracle JDK download page or Adoptium (Eclipse Temurin) and download the latest LTS version (e.g., JDK 11 or JDK 17) for your operating system.
2.  **Install the JDK:** Follow the installation wizard instructions. On Windows, this is typically an `.exe` file. On macOS, a `.dmg`. On Linux, you might use a package manager or extract a `.tar.gz` file.
3.  **Configure Environment Variables (if necessary):**
    -   **Windows:** Search for "Environment Variables" in the Start menu. Under "System variables," find `Path` and add the full path to your JDK's `bin` directory (e.g., `C:\Program Files\Java\jdk-11\bin`). Also, create a new system variable `JAVA_HOME` pointing to the JDK root (e.g., `C:\Program Files\Java\jdk-11`).
    -   **macOS/Linux:** Open your terminal and edit your shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`, or `~/.profile`). Add the following lines, replacing the path with your actual JDK installation path:
        ```bash
        export JAVA_HOME=/path/to/your/jdk-11
        export PATH=$PATH:$JAVA_HOME/bin
        ```
        Then, run `source ~/.bashrc` (or your respective file) to apply changes.
4.  **Verify Installation:** Open a *new* terminal or command prompt and execute the following commands:
    ```bash
    java -version
    javac -version
    ```
    Confirm that both commands display the correct Java version information. If not, re-check your environment variable configuration.

#### Assessment idea
1.  **Question:** You have a Java application that you want to distribute to users who only need to run it, not develop new Java code. Which component of the Java ecosystem should they install?
    a) Java Development Kit (JDK)
    b) Java Runtime Environment (JRE)
    c) Java Virtual Machine (JVM)
    d) Java Compiler (`javac`)
    **Correct Answer:** b) Java Runtime Environment (JRE)
    **Explanation:** The JRE provides the necessary components (JVM + core libraries) to run Java applications. The JDK is for development, the JVM is a part of the JRE, and `javac` is a development tool within the JDK.

2.  **Question:** After installing the JDK, you open your terminal and type `javac MyProgram.java`, but you receive an error message "javac: command not found". What is the most likely cause of this issue?
    a) The Java Virtual Machine (JVM) is not installed.
    b) The `JAVA_HOME` environment variable is incorrectly set.
    c) The `PATH` environment variable does not include the JDK's `bin` directory.
    d) The Java Runtime Environment (JRE) is corrupted.
    **Correct Answer:** c) The `PATH` environment variable does not include the JDK's `bin` directory.
    **Explanation:** The `javac` command is an executable found in the `bin` directory of the JDK installation. If this directory is not included in the system's `PATH` variable, the operating system won't know where to find the `javac` executable when you try to run it from an arbitrary directory in the terminal. While `JAVA_HOME` is important for many tools, it doesn't directly affect the ability to run `javac` from the command line without the `PATH` being set.

#### AI generation note
Create a 10-minute animated video explaining the JDK, JRE, and JVM. Use a clear visual metaphor, perhaps a car factory (JDK), a car (JRE), and the engine (JVM). Show the process of downloading and installing JDK, then a step-by-step walkthrough of configuring `PATH` and `JAVA_HOME` on both Windows and macOS/Linux using terminal commands and GUI screenshots. Include live terminal demonstrations of `java -version` and `javac -version` with common error messages and their resolutions. Use high-contrast visuals and ensure all text on screen is legible.

---

### Chapter 1.2 — Your First Java Program: "Hello, Cohortia!"

#### Learning objectives
- Write a basic Java program that prints output to the console.
- Understand the fundamental structure of a Java class and the `main` method.
- Successfully compile and run a Java program using the `javac` and `java` commands.
- Identify and correct common compilation and runtime errors in simple Java code.

#### Detailed lesson content
Now that your Java Development Kit (JDK) is properly installed and configured, you're ready to write your very first Java program! This is a significant milestone for any aspiring programmer. We'll start with the classic "Hello, Cohortia!" program, which is a simple yet powerful way to demonstrate the core steps of Java development: writing source code, compiling it into bytecode, and then executing that bytecode. Java programs are organized into classes, and every executable Java application must have at least one class that contains a special method called `main`. This `main` method is the entry point for your program – it's where the Java Virtual Machine (JVM) begins execution.

Let's dive straight into the code. Open a plain text editor (like VS Code, Sublime Text, Notepad++, or even basic Notepad) and type the following code exactly as shown:

```java
// Chapter 1.2: Your First Java Program - HelloCohortia.java

public class HelloCohortia {
    public static void main(String[] args) {
        System.out.println("Hello, Cohortia!"); // This line prints a message to the console
    }
}
```

Save this file as `HelloCohortia.java`. It's crucial that the filename exactly matches the public class name, including capitalization, and ends with the `.java` extension. Java is case-sensitive, and this naming convention is a strict requirement for the compiler. Let's break down each part of this simple program.

The line `public class HelloCohortia { ... }` declares a class named `HelloCohortia`. In Java, all code resides within classes. The `public` keyword is an access modifier, meaning this class is accessible from anywhere. We'll explore access modifiers in much more detail later, but for now, just know that `public` makes your class visible. The curly braces `{}` define the scope of the class.

Inside the class, we have `public static void main(String[] args) { ... }`. This is the `main` method, the special entry point for your program.
- `public`: Again, an access modifier, making the `main` method universally accessible.
- `static`: This keyword means the `main` method belongs to the class itself, not to any specific object of the class. This allows the JVM to call `main` without creating an instance of `HelloCohortia`.
- `void`: This indicates that the `main` method does not return any value.
- `main`: This is the name of the method. It *must* be `main` for the JVM to recognize it as the program's starting point.
- `(String[] args)`: This defines the method's parameters. `String[] args` means that the `main` method can accept an array of `String` objects as command-line arguments. While we won't use them in this first program, it's a standard part of the `main` method signature.

The core of our program is `System.out.println("Hello, Cohortia!");`. This line is responsible for printing the message "Hello, Cohortia!" to your console.
- `System`: This is a built-in Java class that provides access to system resources.
- `out`: This is a static member of the `System` class, representing the standard output stream (typically your console).
- `println()`: This is a method of the `PrintStream` class (which `System.out` is an instance of) that prints the given string to the console and then moves the cursor to the next line (prints a "line"). If you used `print()` instead, it would print the message but stay on the same line.
- `("Hello, Cohortia!")`: This is the string literal, the actual text we want to print. Notice it's enclosed in double-quotes.
- `;`: Every statement in Java must end with a semicolon. This is a common beginner mistake, forgetting the semicolon.

Now, let's compile and run your program. Open your terminal or command prompt, navigate to the directory where you saved `HelloCohortia.java`. For example, if you saved it in `C:\JavaPrograms` on Windows, you would type `cd C:\JavaPrograms`.

To compile the program, use the `javac` command:
```bash
javac HelloCohortia.java
```
If there are no syntax errors, `javac` will compile your `.java` source file into a `.class` file (bytecode). You should now see a new file named `HelloCohortia.class` in the same directory. If you get errors, `javac` will tell you what went wrong. Common compilation errors include typos, missing semicolons, incorrect capitalization, or mismatch between the class name and the filename. For example, if you forgot a semicolon, you might see an error like `error: ';' expected`. Pay close attention to the line number indicated by the compiler.

Once compiled, you can run the program using the `java` command:
```bash
java HelloCohortia
```
Notice that you specify the class name (`HelloCohortia`), *not* the `.class` extension. The `java` command invokes the Java Virtual Machine (JVM), which then loads and executes the bytecode in `HelloCohortia.class`, starting with the `main` method.

You should see the following output in your terminal:
```
Hello, Cohortia!
```
Congratulations! You've just written, compiled, and executed your first Java program. This fundamental process of edit-compile-run will be a constant throughout your Java development journey. Remember to always save your `.java` file after making changes before recompiling. If you run the old `.class` file without recompiling, you won't see your latest changes. This is another frequent mistake for newcomers. Always recompile with `javac` after any modification to your `.java` source code.

#### Key concepts
- **Class:** The fundamental building block of Java programs. All Java code resides within classes.
- **`main` method:** The entry point for any executable Java application. Its signature is `public static void main(String[] args)`.
- **`System.out.println()`:** A standard Java statement used to print output to the console, followed by a new line.
- **`javac` command:** The Java compiler, used to translate `.java` source code files into `.class` bytecode files.
- **`java` command:** The Java launcher, used to execute compiled `.class` bytecode files via the Java Virtual Machine (JVM).
- **Source Code (`.java` file):** Human-readable code written by a programmer.
- **Bytecode (`.class` file):** The intermediate, platform-independent code generated by the Java compiler, executed by the JVM.
- **Statement:** A complete instruction in Java, terminated by a semicolon (`;`).
- **Comments:** Non-executable lines in code used for explanation (e.g., `// single-line` or `/* multi-line */`).

#### Hands-on activity
**Activity: Personalizing Your Greeting**
1.  **Create a new Java file:** Open your text editor and create a new file named `MyGreeting.java`.
2.  **Write the initial code:**
    ```java
    public class MyGreeting {
        public static void main(String[] args) {
            System.out.println("Hello from Java!");
        }
    }
    ```
3.  **Compile and Run:** Navigate to the directory, then `javac MyGreeting.java` and `java MyGreeting`. Verify it prints "Hello from Java!".
4.  **Personalize the message:** Modify the `System.out.println()` line to print a personalized greeting, for example, "Hello, [Your Name]! I'm learning Java with Cohortia."
    ```java
    public class MyGreeting {
        public static void main(String[] args) {
            System.out.println("Hello, [Your Name]! I'm learning Java with Cohortia.");
        }
    }
    ```
    
5.  **Introduce a compilation error:** Deliberately remove the semicolon at the end of the `System.out.println()` line.
6.  **Attempt to compile:** Run `javac MyGreeting.java` again. Observe the error message.
7.  **Correct the error:** Add the semicolon back.
8.  **Recompile and Run:** `javac MyGreeting.java` and `java MyGreeting`. Confirm your personalized message prints successfully.

#### Assessment idea
1.  **Question:** Consider the following Java code snippet:
    ```java
    public class MyProgram {
        public static void main(String[] args) {
            System.out.print("First line.");
            System.out.println("Second line.");
            System.out.print("Third line.");
        }
    }
    ```
    What will be the exact output when this program is compiled and run?
    a)
    ```
    First line.
    Second line.
    Third line.
    ```
    b)
    ```
    First line.Second line.
    Third line.
    ```
    c)
    ```
    First line.Second line.Third line.
    ```
    d)
    ```
    First line.
    Second line.Third line.
    ```
    **Correct Answer:** d)
    ```
    First line.
    Second line.Third line.
    ```
    **Explanation:** The `System.out.print()` method prints its argument without adding a new line character at the end. The `System.out.println()` method prints its argument and then adds a new line character. So, "First line." is printed, then "Second line." is printed on the same line, followed by a new line. Finally, "Third line." is printed on the new line.

2.  **Question:** You have saved a Java source file as `MyApplication.java`. After making some changes, you try to run it directly using `java MyApplication`. However, the program executes the *old* version of your code, not the changes you just made. What is the most probable reason for this behavior?
    a) The `JAVA_HOME` environment variable is pointing to an incorrect JDK version.
    b) You forgot to recompile the `MyApplication.java` file after making changes.
    c) The `main` method signature in `MyApplication.java` is incorrect.
    d) The `System.out.println()` statement has a syntax error.
    **Correct Answer:** b) You forgot to recompile the `MyApplication.java` file after making changes.
    **Explanation:** When you run `java MyApplication`, the JVM executes the `MyApplication.class` file (the bytecode). If you made changes to `MyApplication.java` (the source code) but did not re-run `javac MyApplication.java`, the `.class` file would still contain the old bytecode. Therefore, the JVM would execute the outdated version of your program.

#### AI generation note
Create a 12-minute interactive coding demo. Start by showing how to create a `.java` file in a simple text editor. Live-code the "Hello, Cohortia!" program step-by-step, explaining each keyword (`public`, `static`, `void`, `main`, `System.out.println`). Demonstrate compiling with `javac` and running with `java` in a terminal. Intentionally introduce common errors (missing semicolon, wrong class name, `print` vs `println`) and show how the compiler/runtime errors manifest and how to debug them. Include a mini-quiz where learners identify the error in a given code snippet.

---

### Chapter 1.3 — Data Types, Variables, and Operators

#### Learning objectives
- Differentiate between primitive and reference data types in Java.
- Declare and initialize variables using appropriate primitive data types.
- Apply Java's naming conventions for variables and constants.
- Understand and correctly use various arithmetic, assignment, relational, and logical operators.
- Explain operator precedence and associativity in Java expressions.

#### Detailed lesson content
In any programming language, data is fundamental. To work with data, we need ways to store it and manipulate it. In Java, this is primarily done using **variables** and **data types**. A variable is a named memory location that stores a value, and its **data type** determines what kind of value it can hold (e.g., a whole number, a decimal number, a character, or a true/false value) and what operations can be performed on it. Java is a strongly-typed language, meaning you must declare the type of a variable before you can use it, and once declared, its type cannot change. This helps catch many errors at compile time rather than runtime, making Java applications more robust.

Java distinguishes between two main categories of data types: **primitive types** and **reference types**. For now, we'll focus on primitive types, which are the most basic data types directly supported by the language. There are eight primitive data types in Java:
-   **Integers (whole numbers):** `byte`, `short`, `int`, `long`. They differ in the range of values they can store, with `byte` being the smallest and `long` the largest. `int` is the most commonly used integer type.
-   **Floating-point numbers (decimal numbers):** `float`, `double`. `double` offers higher precision and is the default for decimal literals.
-   **Characters:** `char`. Stores a single Unicode character, enclosed in single quotes (e.g., `'A'`, `'@'`, `'5'`).
-   **Boolean:** `boolean`. Stores either `true` or `false`.

Here's how you declare and initialize variables:
```java
// Declaring variables
int age;
double price;
boolean isActive;
char initial;

// Initializing variables (assigning a value for the first time)
age = 30;
price = 19.99;
isActive = true;
initial = 'J';

// Declaration and initialization in one step
String firstName = "Cohortia"; // String is a reference type, but often treated like a primitive for basic use
long accountNumber = 123456789012345L; // 'L' suffix for long literals
float temperature = 98.6f; // 'f' suffix for float literals
byte level = 5;
```
Notice the `L` and `f` suffixes for `long` and `float` literals, respectively. Without `L`, a large number might be treated as an `int` and cause an error if it exceeds `int`'s range. Without `f`, `98.6` would be treated as a `double` by default, requiring an explicit cast if assigned to a `float` variable.

**Variable Naming Conventions:** Java has strict rules and widely accepted conventions for naming. Variable names must:
-   Start with a letter, `_`, or `$`.
-   Cannot start with a number.
-   Can contain letters, numbers, `_`, or `$`.
-   Cannot be a Java keyword (e.g., `public`, `static`, `int`).
-   Be descriptive and meaningful.
-   Follow **camelCase** convention: Start with a lowercase letter, and capitalize the first letter of subsequent words (e.g., `firstName`, `totalAmountDue`).
-   For constants (values that don't change), use `final` keyword and `ALL_CAPS_WITH_UNDERSCORES` (e.g., `final double PI = 3.14159;`).

Now, let's explore **operators**, which are special symbols used to perform operations on variables and values.
1.  **Arithmetic Operators:** Used for mathematical calculations.
    -   `+` (addition)
    -   `-` (subtraction)
    -   `*` (multiplication)
    -   `/` (division): Integer division truncates the decimal part if both operands are integers. For floating-point division, at least one operand must be a float or double.
    -   `%` (modulo/remainder): Returns the remainder of a division.

    ```java
    int a = 10;
    int b = 3;
    System.out.println(a + b); // 13
    System.out.println(a / b); // 3 (integer division)
    System.out.println(a % b); // 1 (remainder)

    double x = 10.0;
    double y = 3.0;
    System.out.println(x / y); // 3.3333333333333335 (floating-point division)
    ```

2.  **Assignment Operators:** Used to assign values to variables.
    -   `=` (simple assignment)
    -   `+=`, `-=`, `*=`, `/=`, `%=` (compound assignment operators). These are shorthand. `x += 5;` is equivalent to `x = x + 5;`.

    ```java
    int counter = 10;
    counter += 5; // counter is now 15
    counter *= 2; // counter is now 30
    ```

3.  **Increment/Decrement Operators:** `++` and `--`. These increase or decrease a variable's value by 1.
    -   **Prefix:** `++count` (increments then uses the new value)
    -   **Postfix:** `count++` (uses the current value then increments)

    ```java
    int i = 5;
    int j = i++; // j is 5, i is 6 (postfix: uses then increments)
    int k = ++i; // k is 7, i is 7 (prefix: increments then uses)
    System.out.println("i: " + i + ", j: " + j + ", k: " + k); // Output: i: 7, j: 5, k: 7
    ```
    This distinction is a common source of confusion and exam questions!

4.  **Relational Operators:** Used to compare two values, resulting in a `boolean` (`true` or `false`).
    -   `==` (equal to)
    -   `!=` (not equal to)
    -   `>` (greater than)
    -   `<` (less than)
    -   `>=` (greater than or equal to)
    -   `<=` (less than or equal to)

    ```java
    int num1 = 10;
    int num2 = 20;
    System.out.println(num1 == num2); // false
    System.out.println(num1 < num2);  // true
    ```

5.  **Logical Operators:** Used to combine boolean expressions.
    -   `&&` (logical AND): `true` if both operands are `true`. Short-circuits (if the first is `false`, the second isn't evaluated).
    -   `||` (logical OR): `true` if at least one operand is `true`. Short-circuits (if the first is `true`, the second isn't evaluated).
    -   `!` (logical NOT): Inverts the boolean value.

    ```java
    boolean isAdult = true;
    boolean hasLicense = false;
    System.out.println(isAdult && hasLicense); // false
    System.out.println(isAdult || hasLicense); // true
    System.out.println(!hasLicense);           // true
    ```

**Operator Precedence and Associativity:** When multiple operators are present in an expression, Java follows specific rules to determine the order of evaluation. This is called **operator precedence**. For example, multiplication and division have higher precedence than addition and subtraction. If operators have the same precedence, **associativity** (left-to-right or right-to-left) determines the order. Parentheses `()` can always be used to explicitly control the order of evaluation.

```java
int result = 5 + 3 * 2; // Multiplication (3*2=6) happens before addition (5+6=11)
System.out.println(result); // Output: 11

int result2 = (5 + 3) * 2; // Parentheses force addition (5+3=8) first, then multiplication (8*2=16)
System.out.println(result2); // Output: 16
```
Understanding operator precedence is critical for writing correct and predictable code. A common mistake is to assume left-to-right evaluation for all operators without considering precedence, leading to incorrect results. When in doubt, use parentheses to make your intent explicit and improve code readability.

**Type Casting:** Sometimes you need to convert a value from one data type to another.
-   **Implicit (Widening) Casting:** Automatically done by Java when converting from a smaller type to a larger type (e.g., `int` to `double`). No data loss.
-   **Explicit (Narrowing) Casting:** Requires a cast operator `()` when converting from a larger type to a smaller type (e.g., `double` to `int`). Potential for data loss or overflow.

```java
int myInt = 100;
double myDouble = myInt; // Implicit casting: int to double
System.out.println(myDouble); // 100.0

double anotherDouble = 10.99;
int anotherInt = (int) anotherDouble; // Explicit casting: double to int (truncates decimal)
System.out.println(anotherInt); // 10

byte bVal = (byte) 130; // Explicit casting: int 130 to byte. Byte range is -128 to 127.
                        // This will result in data loss due to overflow/underflow.
                        // 130 in binary is 10000010. For a byte, this is -126 due to two's complement.
System.out.println(bVal); // -126 (common mistake: not understanding overflow with narrowing casts)
```
Always be cautious with explicit narrowing casts, as they can lead to unexpected values if the number is outside the target type's range.

#### Key concepts
-   **Variable:** A named memory location that stores a value.
-   **Data Type:** Specifies the type of data a variable can hold and the operations that can be performed on it.
-   **Primitive Data Types:** Basic data types directly supported by Java: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`.
-   **Declaration:** Creating a variable by specifying its type and name (e.g., `int age;`).
-   **Initialization:** Assigning an initial value to a variable (e.g., `age = 30;`).
-   **CamelCase:** Naming convention for variables and methods (e.g., `totalAmount`).
-   **Operators:** Symbols that perform operations on operands (e.g., `+`, `=`, `==`, `&&`).
-   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`.
-   **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`.
-   **Increment/Decrement Operators:** `++`, `--` (prefix and postfix).
-   **Relational Operators:** `==`, `!=`, `>`, `<`, `>=`, `<=`.
-   **Logical Operators:** `&&`, `||`, `!`.
-   **Operator Precedence:** The order in which operators are evaluated in an expression.
-   **Associativity:** The rule for evaluating operators of the same precedence (usually left-to-right).
-   **Type Casting:** Converting a value from one data type to another (implicit/widening, explicit/narrowing).

#### Hands-on activity
**Activity: Operator Playground**
1.  **Create a new Java file:** Name it `OperatorPlayground.java`.
2.  **Declare and initialize variables:**
    ```java
    public class OperatorPlayground {
        public static void main(String[] args) {
            int num1 = 25;
            int num2 = 7;
            double decimal1 = 15.5;
            double decimal2 = 2.0;
            boolean condition1 = true;
            boolean condition2 = false;

            System.out.println("--- Arithmetic Operations ---");
            // Perform and print results for:
            // Addition of num1 and num2
            // Subtraction of num1 and num2
            // Multiplication of num1 and num2
            // Integer division of num1 and num2
            // Modulo of num1 and num2
            // Division of decimal1 and decimal2
            System.out.println("num1 + num2 = " + (num1 + num2));
            System.out.println("num1 - num2 = " + (num1 - num2));
            System.out.println("num1 * num2 = " + (num1 * num2));
            System.out.println("num1 / num2 (int div) = " + (num1 / num2));
            System.out.println("num1 % num2 = " + (num1 % num2));
            System.out.println("decimal1 / decimal2 = " + (decimal1 / decimal2));

            System.out.println("\n--- Assignment Operations ---");
            int counter = 10;
            System.out.println("Initial counter: " + counter);
            // Use compound assignment to:
            // Add 5 to counter
            counter += 5;
            System.out.println("counter after += 5: " + counter);
            // Multiply counter by 3
            counter *= 3;
            System.out.println("counter after *= 3: " + counter);
            // Print counter after each operation

            System.out.println("\n--- Increment/Decrement Operations ---");
            int x = 5;
            int y = x++; // What are x and y?
            System.out.println("After y = x++: x=" + x + ", y=" + y); // x=6, y=5
            int z = ++x; // What are x and z?
            System.out.println("After z = ++x: x=" + x + ", z=" + z); // x=7, z=7
            // Expected: x: 7, y: 5, z: 7

            System.out.println("\n--- Relational Operations ---");
            // Print results for:
            // num1 == num2
            System.out.println("num1 == num2: " + (num1 == num2));
            // num1 != num2
            System.out.println("num1 != num2: " + (num1 != num2));
            // decimal1 > decimal2
            System.out.println("decimal1 > decimal2: " + (decimal1 > decimal2));
            // num1 <= num2
            System.out.println("num1 <= num2: " + (num1 <= num2));

            System.out.println("\n--- Logical Operations ---");
            // Print results for:
            // condition1 && condition2
            System.out.println("condition1 && condition2: " + (condition1 && condition2));
            // condition1 || condition2
            System.out.println("condition1 || condition2: " + (condition1 || condition2));
            // !condition1
            System.out.println("!condition1: " + (!condition1));

            System.out.println("\n--- Operator Precedence ---");
            int complexResult = 10 + 4 * 2 / 2 - 1; // Predict the outcome!
            System.out.println("Complex Result: " + complexResult); // Expected: 10 + (4*2)/2 - 1 = 10 + 8/2 - 1 = 10 + 4 - 1 = 13

            System.out.println("\n--- Type Casting ---");
            double largeDecimal = 123.789;
            // Explicitly cast largeDecimal to an int and print it.
            int castedInt = (int) largeDecimal;
            System.out.println("largeDecimal (double) " + largeDecimal + " casted to int: " + castedInt);
            // Declare an int with value 200, explicitly cast it to a byte and print it.
            int intValue = 200;
            byte castedByte = (byte) intValue;
            System.out.println("intValue (int) " + intValue + " casted to byte: " + castedByte);
            // Observe the potential data loss/change.
        }
    }
    ```
3.  **Fill in the blanks:** Complete the operations as instructed in the comments.
4.  **Predict and Verify:** Before running, predict the output for each section. Then, compile (`javac OperatorPlayground.java`) and run (`java OperatorPlayground`) to verify your predictions. Pay close attention to the increment/decrement and type casting sections.

#### Assessment idea
1.  **Question:** What will be the value of `result` after the following Java code executes?
    ```java
    int a = 10;
    int b = 3;
    double c = 2.5;
    int result = (int) (a / b + c * 2);
    ```
    a) 8
    b) 10
    c) 11
    d) 10.0
    **Correct Answer:** a) 8
    **Explanation:**
    1.  `a / b`: `10 / 3` performs integer division, resulting in `3`.
    2.  `c * 2`: `2.5 * 2` results in `5.0`.
    3.  `3 + 5.0`: Integer `3` is promoted to `3.0`, then `3.0 + 5.0` results in `8.0`.
    4.  `(int) 8.0`: Explicitly casts `8.0` to an `int`, truncating the decimal part, resulting in `8`.

2.  **Question:** Consider the following Java code:
    ```java
    int p = 5;
    int q = 10;
    boolean expr1 = (p++ > 5) && (q-- < 10);
    boolean expr2 = (p == 6) || (q == 9);
    System.out.println("expr1: " + expr1);
    System.out.println("expr2: " + expr2);
    System.out.println("p: " + p + ", q: " + q);
    ```
    What will be the output of this program?
    a)
    ```
    expr1: false
    expr2: true
    p: 6, q: 10
    ```
    b)
    ```
    expr1: false
    expr2: true
    p: 6, q: 9
    ```
    c)
    ```
    expr1: true
    expr2: false
    p: 6, q: 9
    ```
    d)
    ```
    expr1: false
    expr2: false
    p: 7, q: 9
    ```
    **Correct Answer:** a)
    ```
    expr1: false
    expr2: true
    p: 6, q: 10
    ```
    **Explanation:**
    -   `int p = 5; int q = 10;`
    -   `boolean expr1 = (p++ > 5) && (q-- < 10);`
        -   `p++ > 5`: `p` is `5`. The comparison `5 > 5` is `false`. After the comparison, `p` increments to `6`.
        -   Because the left operand of `&&` is `false`, the logical AND operator short-circuits. This means the right operand `(q-- < 10)` is *not* evaluated. Therefore, `q` remains `10`.
        -   So, `expr1` is `false`.
    -   Current state: `p` is `6`, `q` is `10`.
    -   `boolean expr2 = (p == 6) || (q == 9);`
        -   `p == 6`: `6 == 6` is `true`.
        -   `q == 9`: `10 == 9` is `false`.
        -   `expr2` is `true || false`, which evaluates to `true`.
    -   Final values: `p` is `6`, `q` is `10`.

#### AI generation note
Create a 15-minute mixed media lesson. Start with animated slides explaining primitive data types with visual representations of memory size. Transition to a live coding demo where variables are declared, initialized, and modified with arithmetic, assignment, and increment/decrement operators. Show the difference between prefix and postfix `++`/`--` with clear step-by-step execution traces. Use diagrams to illustrate operator precedence. Include a segment on common mistakes with type casting (e.g., `int` to `byte` overflow) and logical operator short-circuiting. Conclude with an interactive drag-and-drop exercise to match operators to their functions.

---

## Module 2: Control Flow and Arrays

**Module Goal:** To equip learners with the fundamental skills to control program execution flow using conditional statements and loops, and to effectively manage collections of data using arrays in Java.

### Chapter 2.1 — Conditional Statements: `if`, `else if`, `else`, and `switch`

#### Learning objectives
*   Understand the purpose and syntax of `if`, `else if`, and `else` statements for decision-making in Java programs.
*   Utilize logical operators (`&&`, `||`, `!`) to construct complex boolean expressions within conditional statements.
*   Explain the concept of nested `if` statements and identify potential issues like the "dangling else" problem.
*   Implement `switch` statements to handle multiple discrete choices efficiently, including the use of `case`, `break`, and `default`.
*   Recognize common mistakes when working with conditional statements and apply best practices for robust code.

#### Detailed lesson content

Welcome to the exciting world of control flow in Java! Up until now, our programs have executed instructions sequentially, one after another. But what if we need our program to make decisions, to choose different paths based on certain conditions? This is where conditional statements come into play, allowing us to introduce logic and adaptability into our code. Mastering these constructs is fundamental to writing any non-trivial program.

The most basic conditional statement is the `if` statement. It allows a block of code to execute only if a specified boolean condition evaluates to `true`. The syntax is straightforward: `if (condition) { // code to execute if condition is true }`. The `condition` must always be a boolean expression, meaning it evaluates to either `true` or `false`. For example, if we want to check if a user's age is sufficient to access a feature, we might write `if (age >= 18) { System.out.println("Access granted."); }`. If the `age` variable holds a value less than 18, the code inside the curly braces will simply be skipped, and the program will continue with the next instruction after the `if` block.

Often, we need to provide an alternative path for when the `if` condition is `false`. This is precisely the role of the `else` statement. An `if-else` block ensures that exactly one of two code blocks will execute. The structure is `if (condition) { // code for true } else { // code for false }`. Consider a login scenario: `if (username.equals("admin") && password.equals("pass123")) { System.out.println("Login successful."); } else { System.out.println("Invalid credentials."); }`. Here, if the username and password match, the success message is printed; otherwise, the invalid credentials message is displayed.

For situations involving more than two possible outcomes, the `if-else if-else` ladder is invaluable. This construct allows you to test a series of conditions sequentially. The first condition that evaluates to `true` will have its corresponding code block executed, and all subsequent `else if` and `else` blocks will be skipped. If none of the `if` or `else if` conditions are met, the final `else` block (if present) will execute as a fallback. For instance, determining a student's grade based on a score:

```java
int score = 85;
if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
```

Notice how the order of conditions matters here. If we checked `score >= 70` before `score >= 90`, a score of 95 would incorrectly yield a 'C'. Java evaluates these conditions from top to bottom, executing the first matching block.

To build more complex conditions, we use logical operators:
*   `&&` (Logical AND): Returns `true` if *both* operands are `true`. Example: `(age >= 18 && hasLicense)`
*   `||` (Logical OR): Returns `true` if *at least one* operand is `true`. Example: `(isStudent || isTeacher)`
*   `!` (Logical NOT): Inverts the boolean value of its operand. Example: `(!isRaining)`

These operators follow specific precedence rules (NOT > AND > OR), but it's always good practice to use parentheses to clarify your intent and avoid ambiguity, especially in complex expressions. A common mistake is using a single `&` or `|` instead of `&&` or `||`. While `&` and `|` are bitwise operators and can be used with booleans, they do not short-circuit. `&&` and `||` are *short-circuiting* operators, meaning they stop evaluating as soon as the result is known (e.g., if the first operand of `&&` is `false`, the second is not evaluated). This can prevent `NullPointerException`s if the second operand involves dereferencing an object that might be null.

Nested `if` statements occur when one `if` (or `else if`, `else`) block contains another `if` statement. This is useful for handling conditions that depend on prior conditions. For example, checking if a user is logged in *and then* checking their role:

```java
boolean isLoggedIn = true;
String userRole = "admin";

if (isLoggedIn) {
    System.out.println("User is logged in.");
    if (userRole.equals("admin")) {
        System.out.println("Welcome, Administrator!");
    } else {
        System.out.println("Welcome, User!");
    }
} else {
    System.out.println("Please log in to continue.");
}
```

A common pitfall with nested `if` statements is the "dangling else" problem. Without curly braces, an `else` statement always associates with the nearest preceding `if` statement. This can lead to unexpected behavior if your indentation doesn't match the actual logic. Always use curly braces `{}` for `if` and `else` blocks, even for single statements, to prevent such ambiguities and improve code readability.

When you have a variable that can take on several discrete values, and you want to execute different code blocks based on these values, the `switch` statement often provides a cleaner and more readable alternative to a long `if-else if-else` ladder. The `switch` statement evaluates an expression and then attempts to match its value against `case` labels.

The basic syntax for a `switch` statement is:

```java
switch (expression) {
    case value1:
        // code to execute if expression == value1
        break; // Important!
    case value2:
        // code to execute if expression == value2
        break;
    default:
        // code to execute if no case matches
        break; // Optional for default if it's the last block
}
```

The `expression` in a `switch` statement can be of type `byte`, `short`, `char`, `int`, their corresponding wrapper classes (`Byte`, `Short`, `Character`, `Integer`), `String` (since Java 7), or `enum` types. Each `case` label must be a constant literal of a compatible type.

The `break` statement is crucial within a `switch`. Without it, once a `case` match is found, execution will "fall through" to the subsequent `case` blocks, executing their code until a `break` is encountered or the `switch` block ends. While sometimes intentional for specific logic, fall-through is often a source of bugs, so always remember to include `break;` unless you explicitly want fall-through behavior. The `default` block is optional and executes if none of the `case` values match the `expression`. It acts like the final `else` in an `if-else if-else` chain.

Let's look at an example using `switch` to determine the type of day:

```java
String dayOfWeek = "Wednesday";
String activity;

switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        activity = "Work day";
        break;
    case "Friday":
        activity = "Half-day work, then relax!";
        break;
    case "Saturday":
    case "Sunday":
        activity = "Weekend fun!";
        break;
    default:
        activity = "Invalid day";
        break;
}
System.out.println(dayOfWeek + ": " + activity);
```

In this example, notice how `Monday`, `Tuesday`, `Wednesday`, and `Thursday` share the same code block due to fall-through (no `break` after the first three). This is an intentional and valid use of fall-through.

Common mistakes with `switch` include forgetting `break` statements, leading to unintended fall-through. Also, ensure your `expression` type is compatible with `switch` (e.g., you cannot `switch` on a `long` or `double`). For objects, remember to use `.equals()` for comparison within `if` statements, not `==`, which compares object references. `switch` handles `String` comparisons correctly using `.equals()` internally.

In a real-world scenario, conditional statements are everywhere. Imagine a banking application: an `if-else if-else` structure might determine transaction fees based on account type and balance, or a `switch` statement could direct user input to different functions (e.g., "deposit", "withdraw", "check balance"). These constructs are the backbone of dynamic and responsive software, allowing programs to react intelligently to varying data and user interactions. Always strive for clear, concise, and correct logic in your conditional statements to build robust and reliable applications.

#### Key concepts
*   **`if` statement:** Executes a block of code only if a specified boolean condition is `true`.
*   **`else` statement:** Provides an alternative block of code to execute when the preceding `if` condition is `false`.
*   **`else if` statement:** Allows testing multiple conditions sequentially; executed if its condition is `true` and all preceding `if`/`else if` conditions were `false`.
*   **Logical Operators (`&&`, `||`, `!`):** Used to combine or negate boolean expressions (`AND`, `OR`, `NOT`). `&&` and `||` are short-circuiting.
*   **Nested `if` statements:** An `if` statement contained within another `if`, `else if`, or `else` block.
*   **Dangling Else:** A common pitfall where an `else` statement ambiguously associates with an `if` statement, resolved by using curly braces.
*   **`switch` statement:** A control flow statement that allows a variable to be tested for equality against a list of values (`case` labels).
*   **`case` label:** A constant value within a `switch` block that, if matched by the `switch` expression, causes its associated code to execute.
*   **`break` statement:** Used within `switch` to terminate the execution of the `switch` block and prevent "fall-through" to subsequent `case` labels.
*   **`default` label:** An optional block within a `switch` statement that executes if none of the `case` labels match the `switch` expression.
*   **Fall-through:** The behavior in a `switch` statement where execution continues into subsequent `case` blocks if no `break` statement is encountered.

#### Hands-on activity

**Scenario:** You need to write a program that first determines a student's letter grade based on their numerical score, and then provides a short message based on a chosen day of the week.

**Instructions:**
1.  Create a Java class named `GradeAndDayEvaluator`.
2.  Declare an `int` variable `studentScore` and initialize it with a value (e.g., 78).
3.  Use an `if-else if-else` ladder to assign a letter grade (`A`, `B`, `C`, `D`, `F`) based on the following scale:
    *   90-100: A
    *   80-89: B
    *   70-79: C
    *   60-69: D
    *   Below 60: F
4.  Print the student's score and their calculated letter grade.
5.  Declare a `String` variable `currentDay` and initialize it with a day of the week (e.g., "Tuesday").
6.  Use a `switch` statement to print a different message for each day:
    *   "Monday": "Start of the week, time to focus!"
    *   "Tuesday", "Wednesday", "Thursday": "Mid-week grind, keep pushing!"
    *   "Friday": "Almost there! Weekend vibes loading..."
    *   "Saturday", "Sunday": "Enjoy your well-deserved weekend!"
    *   Any other input: "That's not a valid day of the week."

**Code Template:**

```java
public class GradeAndDayEvaluator {
    public static void main(String[] args) {
        // Part 1: Grade Evaluation
        int studentScore = 78; // Try different scores like 95, 62, 45
        char letterGrade;

        // Your if-else if-else logic here to determine letterGrade
        // ...

        System.out.println("Student Score: " + studentScore);
        System.out.println("Letter Grade: " + letterGrade);

        System.out.println("\n--- Day of the Week Message ---");

        // Part 2: Day of the Week Message
        String currentDay = "Tuesday"; // Try different days like "Saturday", "Funday"
        String dayMessage;

        // Your switch statement logic here to determine dayMessage
        // ...

        System.out.println("Today is " + currentDay + ". " + dayMessage);
    }
}
```

#### Assessment idea

**Question 1:**
Consider the following Java code snippet:

```java
int x = 10;
int y = 5;
String result = "";

if (x > y) {
    if (x % y == 0) {
        result = "A";
    } else {
        result = "B";
    }
} else if (x == y) {
    result = "C";
} else {
    result = "D";
}

System.out.println(result);
```
What will be printed to the console when this code executes?
A) A
B) B
C) C
D) D

**Correct Answer and Explanation:**
**A) A**
*   First, the outer `if (x > y)` condition is evaluated: `(10 > 5)` is `true`.
*   The program enters the outer `if` block.
*   Inside, the nested `if (x % y == 0)` condition is evaluated: `(10 % 5 == 0)` is `(0 == 0)`, which is `true`.
*   The code inside the nested `if` block executes, setting `result = "A"`.
*   The program then skips the `else` associated with the nested `if`, and also skips the `else if` and `else` associated with the outer `if` because the first `if` condition was met.
*   Finally, `System.out.println(result)` prints "A".

**Question 2:**
Examine the following `switch` statement:

```java
char grade = 'B';
String feedback = "";

switch (grade) {
    case 'A':
        feedback = "Excellent!";
    case 'B':
        feedback = "Good job!";
    case 'C':
        feedback = "Pass.";
        break;
    default:
        feedback = "Needs improvement.";
}
System.out.println(feedback);
```
What will be the output of this code?
A) Excellent!
B) Good job!
C) Pass.
D) Needs improvement.

**Correct Answer and Explanation:**
**C) Pass.**
*   The `switch` expression `grade` has the value `'B'`.
*   Execution jumps to `case 'B'`.
*   `feedback` is set to "Good job!".
*   Crucially, there is **no `break` statement** after `case 'B'`. This causes "fall-through".
*   Execution continues to `case 'C'`.
*   `feedback` is updated to "Pass.".
*   A `break` statement is encountered after `case 'C'`, terminating the `switch` block.
*   The `System.out.println(feedback)` then prints the final value of `feedback`, which is "Pass.".

#### AI generation note
Create a 12-minute interactive video lesson. Begin with animated flowcharts illustrating the execution paths of `if-else` and `if-else if-else` structures. Then, transition to a live coding demonstration showing how to implement these with various numerical and string comparisons. Highlight the use of logical operators (`&&`, `||`, `!`) with clear examples, emphasizing short-circuiting. For the `switch` statement, use a visual analogy (e.g., a train switching tracks) to explain `case` matching and "fall-through." Demonstrate a `switch` with `String`s and `char`s, explicitly showing the effect of omitting `break` statements. Include a drag-and-drop exercise where learners match code snippets to their correct output, especially focusing on `if-else` nesting and `switch` fall-through. Ensure captions and alt text for all visual elements.

### Chapter 2.2 — Looping Constructs: `for`, `while`, and `do-while`

#### Learning objectives
*   Differentiate between `while`, `do-while`, and `for` loops and choose the appropriate loop type for various programming scenarios.
*   Implement `while` loops for indefinite iteration and `do-while` loops to guarantee at least one execution.
*   Construct `for` loops for definite iteration, including initialization, condition, and update expressions.
*   Utilize the enhanced `for` loop (for-each loop) to iterate over arrays and collections efficiently.
*   Employ `break` and `continue` statements to alter the normal flow of loop execution.
*   Identify and correct common loop-related errors, such as infinite loops and off-by-one errors.

#### Detailed lesson content

After mastering decision-making with conditional statements, the next crucial step in controlling program flow is iteration, or looping. Loops allow us to execute a block of code repeatedly, which is incredibly powerful for tasks like processing lists of data, repeating user prompts, or performing calculations that require multiple steps. Java provides three primary looping constructs: `while`, `do-while`, and `for` loops, each suited for slightly different situations.

Let's begin with the `while` loop. This loop is ideal when you don't know in advance how many times you need to iterate, but you want to continue as long as a certain condition remains true. The syntax is `while (condition) { // code to execute repeatedly }`. The `condition` is a boolean expression, similar to an `if` statement. Before each iteration, the condition is evaluated. If it's `true`, the loop body executes. If it's `false`, the loop terminates, and the program continues with the statement immediately following the `while` block. A critical point is that the loop's body *must* contain code that eventually makes the condition `false`; otherwise, you'll create an **infinite loop**, which will cause your program to run indefinitely, consuming resources and never finishing.

Consider a scenario where you want to keep asking a user for input until they enter a valid number:

```java
import java.util.Scanner;

public class InputValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = 0;
        boolean isValid = false;

        while (!isValid) { // Loop as long as input is NOT valid
            System.out.print("Enter a positive integer: ");
            if (scanner.hasNextInt()) {
                number = scanner.nextInt();
                if (number > 0) {
                    isValid = true; // Condition becomes false, loop exits
                } else {
                    System.out.println("Error: Number must be positive.");
                }
            } else {
                System.out.println("Error: Invalid input. Please enter an integer.");
                scanner.next(); // Consume the invalid input to prevent infinite loop
            }
        }
        System.out.println("You entered: " + number);
        scanner.close();
    }
}
```
In this example, `isValid` controls the loop. It starts as `false`, making `!isValid` `true`, so the loop runs. Once a valid positive integer is entered, `isValid` becomes `true`, `!isValid` becomes `false`, and the loop terminates. Notice the `scanner.next();` call in the `else` block for invalid input; without it, `scanner.hasNextInt()` would keep evaluating `false` for the same invalid token, leading to an infinite loop of error messages.

The `do-while` loop is very similar to the `while` loop, with one key difference: its body is guaranteed to execute at least once. This is because the condition is checked *after* the loop body has executed. The syntax is `do { // code to execute } while (condition);`. This is useful for situations where you always want to perform an action at least once, like presenting a menu to a user, and then decide whether to repeat based on their input.

```java
import java.util.Scanner;

public class MenuExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char choice;
        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Option A");
            System.out.println("2. Option B");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.next().charAt(0);

            switch (choice) {
                case '1': System.out.println("You chose Option A."); break;
                case '2': System.out.println("You chose Option B."); break;
                case '3': System.out.println("Exiting program."); break;
                default: System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != '3'); // Loop continues until '3' is entered
        scanner.close();
    }
}
```
Here, the menu is always displayed and a choice is always read at least once. The loop only terminates if the user enters '3'.

The `for` loop is typically used when you know exactly how many times you want to iterate, or when you need a clear, concise way to manage a loop counter. It consolidates the initialization, condition, and update of a loop control variable into a single line, making it very readable for definite iterations. The syntax is `for (initialization; condition; update) { // code to execute }`.
*   `initialization`: Executed once at the beginning of the loop. Often used to declare and initialize a loop counter.
*   `condition`: Evaluated before each iteration. If `true`, the loop body executes; if `false`, the loop terminates.
*   `update`: Executed after each iteration of the loop body. Often used to increment or decrement the loop counter.

Let's calculate the sum of numbers from 1 to 10 using a `for` loop:

```java
public class SumCalculator {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) { // i starts at 1, goes up to 10, increments by 1
            sum += i; // sum = sum + i;
        }
        System.out.println("Sum of numbers from 1 to 10: " + sum); // Output: 55
    }
}
```
Common mistakes with `for` loops include off-by-one errors (e.g., `i < 10` instead of `i <= 10` if you want to include 10), or incorrect update expressions. Forgetting to update the loop variable in a `while` or `do-while` loop is a classic cause of infinite loops.

Java also offers an enhanced `for` loop, often called the "for-each" loop, which simplifies iterating over arrays and collections. It's designed for readability and eliminates the need for an explicit loop counter when you just need to access each element in sequence. The syntax is `for (DataType element : collectionOrArray) { // code using element }`.

```java
public class ForEachExample {
    public static void main(String[] args) {
        String[] names = {"Alice", "Bob", "Charlie"};
        System.out.println("Names in the array:");
        for (String name : names) { // For each String 'name' in the 'names' array
            System.out.println(name);
        }
    }
}
```
The enhanced `for` loop is great for simply reading elements, but if you need to modify elements by index or iterate in reverse, a traditional `for` loop is necessary.

Sometimes, you need to alter the normal flow of a loop. The `break` statement allows you to exit a loop prematurely, immediately terminating the loop and continuing execution at the statement following the loop. This is useful for stopping a search once an item is found, or exiting a loop if an error occurs.

The `continue` statement, on the other hand, skips the rest of the current iteration of the loop and proceeds to the next iteration. It's useful when you want to bypass certain elements or conditions within a loop without stopping the entire loop.

```java
public class LoopControl {
    public static void main(String[] args) {
        System.out.println("Using continue:");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // Skip the rest of this iteration when i is 3
            }
            System.out.println("Current number (continue): " + i);
        }
        // Output: 1, 2, 4, 5

        System.out.println("\nUsing break:");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                break; // Exit the loop entirely when i is 3
            }
            System.out.println("Current number (break): " + i);
        }
        // Output: 1, 2
    }
}
```
Both `break` and `continue` can be used with `while`, `do-while`, and `for` loops. When dealing with nested loops, `break` and `continue` affect only the innermost loop they are contained within. If you need to break out of multiple nested loops, you can use labeled `break` statements, though this is less common and can sometimes make code harder to read.

In a real-world application, loops are indispensable. Imagine processing a batch of customer orders, iterating through a list of files in a directory, or repeatedly updating a game's state. Understanding when to use each type of loop, how to control their execution, and how to avoid common pitfalls like infinite loops and off-by-one errors, is crucial for writing efficient and correct Java programs. Always double-check your loop conditions and ensure that your loop control variables are updated correctly to prevent unexpected behavior.

#### Key concepts
*   **Looping:** The process of repeatedly executing a block of code.
*   **`while` loop:** A control flow statement that repeatedly executes a block of code as long as a specified boolean condition is `true`. The condition is checked *before* each iteration.
*   **`do-while` loop:** Similar to a `while` loop, but guarantees that the loop body executes at least once, as the condition is checked *after* each iteration.
*   **`for` loop:** A control flow statement primarily used for definite iteration, where the number of iterations is known. It combines initialization, condition, and update into a single line.
*   **Enhanced `for` loop (for-each loop):** A simplified `for` loop syntax for iterating over elements of arrays and collections without needing an explicit index.
*   **`break` statement:** Terminates the innermost loop (or `switch` statement) immediately, transferring control to the statement following the loop.
*   **`continue` statement:** Skips the remaining statements in the current iteration of the innermost loop and proceeds to the next iteration.
*   **Infinite loop:** A loop that never terminates because its condition always remains `true`.
*   **Off-by-one error:** A common programming error where a loop iterates one too many or one too few times.
*   **Loop control variable:** A variable (often an integer counter) whose value is used in the loop's condition and update expression to manage the number of iterations.

#### Hands-on activity

**Scenario:** You need to simulate a simple counter and then process a list of product prices, skipping certain items.

**Instructions:**
1.  Create a Java class named `LoopPractice`.
2.  **Part 1: `while` and `do-while` loop:**
    *   Use a `while` loop to print numbers from 1 to 5.
    *   Use a `do-while` loop to simulate a simple guessing game:
        *   Generate a random number between 1 and 10 (you can use `int targetNumber = (int) (Math.random() * 10) + 1;`).
        *   Prompt the user to guess the number.
        *   Keep prompting until the user guesses correctly.
        *   Print "Congratulations!" when they guess right.
3.  **Part 2: `for` and Enhanced `for` loop with `break`/`continue`:**
    *   Declare an array of `double`s named `productPrices` with at least 5 values (e.g., `{12.50, 20.00, -5.00, 35.75, 15.00}`).
    *   Use a traditional `for` loop to iterate through `productPrices`.
    *   Inside the loop, use a `continue` statement to skip any negative prices (simulating invalid data).
    *   Calculate the sum of valid product prices.
    *   If the sum exceeds `50.00` at any point, use a `break` statement to stop processing further prices and print a message like "Maximum order value reached!".
    *   After the loop, print the final calculated sum of valid prices.
    *   Then, use an enhanced `for` loop to simply print each valid product price (ignoring the sum limit).

**Code Template:**

```java
import java.util.Scanner;
import java.util.Random;

public class LoopPractice {
    public static void main(String[] args) {
        System.out.println("--- Part 1: While and Do-While Loops ---");

        // While loop: Print numbers 1 to 5
        int count = 1;
        System.out.println("Numbers from 1 to 5 (while loop):");
        // Your while loop here
        // ...

        // Do-while loop: Simple guessing game
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int targetNumber = random.nextInt(10) + 1; // Random number between 1 and 10
        int guess;
        System.out.println("\nGuess the number between 1 and 10!");
        // Your do-while loop here
        // ...
        System.out.println("Congratulations! You guessed " + targetNumber + ".");
        scanner.close(); // Close scanner after use

        System.out.println("\n--- Part 2: For and Enhanced For Loops with break/continue ---");

        double[] productPrices = {12.50, 20.00, -5.00, 35.75, 15.00, 8.25};
        double totalValidPriceSum = 0.0;
        final double MAX_ORDER_VALUE = 50.00;

        System.out.println("Processing product prices:");
        // Your traditional for loop with continue and break here
        // ...

        System.out.println("Final sum of valid prices (up to limit): " + totalValidPriceSum);

        System.out.println("\nAll valid product prices (using enhanced for loop):");
        // Your enhanced for loop here to print valid prices
        // ...
    }
}
```

#### Assessment idea

**Question 1:**
What will be the output of the following Java code snippet?

```java
int i = 0;
while (i < 5) {
    if (i == 2) {
        i++;
        continue;
    }
    System.out.print(i + " ");
    i++;
}
```
A) 0 1 2 3 4
B) 0 1 3 4
C) 0 1 2 4
D) 0 1 3 4 5

**Correct Answer and Explanation:**
**B) 0 1 3 4**
*   `i` starts at 0.
*   **Iteration 1:** `i=0`. `0 < 5` is `true`. `0 == 2` is `false`. Prints `0 `. `i` becomes 1.
*   **Iteration 2:** `i=1`. `1 < 5` is `true`. `1 == 2` is `false`. Prints `1 `. `i` becomes 2.
*   **Iteration 3:** `i=2`. `2 < 5` is `true`. `2 == 2` is `true`. `i` becomes 3. `continue` is executed, skipping `System.out.print(i + " ")` and `i++` for this iteration, and moving to the next loop condition check.
*   **Iteration 4:** `i=3`. `3 < 5` is `true`. `3 == 2` is `false`. Prints `3 `. `i` becomes 4.
*   **Iteration 5:** `i=4`. `4 < 5` is `true`. `4 == 2` is `false`. Prints `4 `. `i` becomes 5.
*   **Iteration 6:** `i=5`. `5 < 5` is `false`. The loop terminates.

**Question 2:**
Consider the following code:

```java
int count = 0;
do {
    System.out.print("Hello ");
    count++;
} while (count < 0);
System.out.println("Done.");
```
What is the output of this code?
A) Hello Hello Done.
B) Hello Done.
C) Done.
D) This is an infinite loop.

**Correct Answer and Explanation:**
**B) Hello Done.**
*   The `do-while` loop's body executes at least once before the condition is checked.
*   **First execution:** `System.out.print("Hello ")` prints "Hello ". `count` becomes 1.
*   **Condition check:** `count < 0` is `1 < 0`, which is `false`.
*   The loop terminates.
*   `System.out.println("Done.")` prints "Done." on a new line.
*   The final output is "Hello Done.".

#### AI generation note
Design a 10-15 minute interactive code demo. Start by visually comparing `while`, `do-while`, and `for` loop structures side-by-side, highlighting where the condition is checked. Live-code examples for each loop type, demonstrating a `while` loop for user input validation, a `do-while` for a menu system, and a `for` loop for counting. Use a debugger-style overlay to show the value of loop control variables changing with each iteration. Introduce the enhanced `for` loop with an array example. Conclude by demonstrating `break` and `continue` statements within a `for` loop, using color-coded text to show skipped iterations or early exits. Include a "fix the infinite loop" coding challenge where learners modify a provided faulty `while` loop. Ensure the tone is hands-on and problem-solving focused.

### Chapter 2.3 — Arrays: Declaration, Initialization, and Manipulation

#### Learning objectives
*   Declare and initialize one-dimensional arrays in Java using both `new` keyword and array literal syntax.
*   Access and modify individual elements of an array using their index.
*   Determine the length of an array and iterate through its elements using various loop constructs.
*   Understand the concept of multi-dimensional arrays, including declaration, initialization, and element access.
*   Identify and prevent common array-related errors, such as `ArrayIndexOutOfBoundsException`.
*   Utilize key methods from the `java.util.Arrays` utility class for common array operations like sorting and searching.

#### Detailed lesson content

As our programs grow more complex, we often need to store and manage collections of related data. Imagine keeping track of student scores, product inventory, or daily temperature readings. While individual variables work for single pieces of data, they become cumbersome for large collections. This is where arrays come in. An array is a fundamental data structure in Java that allows you to store a fixed-size, sequential collection of elements of the *same data type*. This homogeneity and sequential nature make arrays incredibly efficient for many tasks.

Before we can use an array, we must declare it. There are two common ways to declare an array variable:
1.  `dataType[] arrayName;` (e.g., `int[] numbers;`) - This is the preferred style as it clearly indicates that `dataType` is the type of the elements in the array.
2.  `dataType arrayName[];` (e.g., `int numbers[];`) - This is a C/C++ style declaration that Java supports for compatibility, but it's less common in modern Java code.

Declaring an array variable merely creates a reference; it doesn't allocate memory for the array itself. To actually create the array object and allocate memory, you must initialize it. There are two primary ways to initialize arrays:

**1. Using the `new` keyword:**
This approach specifies the size of the array, and Java automatically initializes elements to their default values (0 for numeric types, `false` for booleans, `null` for object types).
```java
int[] ages = new int[5]; // Declares an array named 'ages' that can hold 5 integers.
                         // Elements are initialized to 0: {0, 0, 0, 0, 0}
String[] names = new String[3]; // Declares an array for 3 String references.
                               // Elements are initialized to null: {null, null, null}
```

**2. Using an array literal (initializer list):**
This method declares and initializes the array in a single step, providing the initial values directly. The size of the array is determined by the number of elements provided.
```java
double[] temperatures = {25.5, 28.1, 22.0, 30.2}; // Array of 4 doubles
boolean[] flags = {true, false, true};           // Array of 3 booleans
```
You cannot combine these two approaches like `int[] numbers = new int[3] {1, 2, 3};`. It's either `new int[3];` or `int[] numbers = {1, 2, 3};`. However, you can declare and then initialize with `new` and values later, or declare and then assign an initializer list.

Once an array is created, you can access its individual elements using their **index**. In Java (and most programming languages), array indices are zero-based, meaning the first element is at index `0`, the second at `1`, and so on. The last element is at index `length - 1`.

```java
int[] scores = new int[4]; // Array of size 4
scores[0] = 95;            // Assign 95 to the first element
scores[1] = 88;            // Assign 88 to the second
scores[2] = 72;
scores[3] = 90;

System.out.println("First score: " + scores[0]); // Output: First score: 95
System.out.println("Last score: " + scores[3]);  // Output: Last score: 90

// Modifying an element
scores[1] = 89;
System.out.println("Updated second score: " + scores[1]); // Output: Updated second score: 89
```

A very common and critical error is trying to access an element outside the valid range of indices (0 to `length - 1`). This will result in an `ArrayIndexOutOfBoundsException` at runtime, which crashes your program. Always be mindful of array boundaries. For example, `scores[4]` in the above example would cause this exception.

Every array in Java has a built-in `length` property (note: it's a field, not a method, so no parentheses) that stores the number of elements it can hold. This is extremely useful for iterating through arrays.

```java
int[] numbers = {10, 20, 30, 40, 50};
System.out.println("Array length: " + numbers.length); // Output: Array length: 5
```

We can iterate through arrays using the loop constructs we just learned:

**1. Traditional `for` loop:** Best when you need to access the index or iterate in a specific order (e.g., reverse).
```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at index " + i + ": " + numbers[i]);
}
```

**2. Enhanced `for` loop (for-each loop):** Ideal for simply processing each element in sequence, without needing the index.
```java
for (int num : numbers) {
    System.out.println("Element: " + num);
}
```

Arrays are fixed in size once created. You cannot change an array's length after initialization. If you need a dynamic collection that can grow or shrink, you'll use classes from the Java Collections Framework, like `ArrayList`, which we'll cover in a later module.

So far, we've discussed one-dimensional arrays, which are like a single row or column of data. Java also supports **multi-dimensional arrays**, which are essentially arrays of arrays. The most common is a two-dimensional array, often visualized as a grid or matrix.

**Declaring and Initializing 2D Arrays:**
```java
// Declaration
int[][] matrix;

// Initialization with 'new' (3 rows, 4 columns)
matrix = new int[3][4]; // All elements initialized to 0

// Initialization with array literal
int[][] grid = {
    {1, 2, 3},    // Row 0
    {4, 5, 6},    // Row 1
    {7, 8, 9}     // Row 2
};
```
To access elements in a 2D array, you use two indices: `arrayName[rowIndex][columnIndex]`.
```java
System.out.println("Element at [1][2]: " + grid[1][2]); // Output: 6
grid[0][0] = 10; // Modify the top-left element
```

Java also supports **jagged arrays**, where each row in a multi-dimensional array can have a different number of columns.
```java
int[][] jaggedArray = new int[3][]; // Declare 3 rows, but column counts are not fixed yet
jaggedArray[0] = new int[2];       // Row 0 has 2 columns
jaggedArray[1] = new int[4];       // Row 1 has 4 columns
jaggedArray[2] = new int[1];       // Row 2 has 1 column

// You can then populate elements
jaggedArray[0][0] = 1;
jaggedArray[0][1] = 2;
// ... and so on
```

For common array operations, the `java.util.Arrays` utility class is incredibly helpful. It provides static methods for sorting, searching, comparing, and converting arrays to strings.

Some frequently used `Arrays` methods:
*   `Arrays.sort(array)`: Sorts the elements of the array in ascending order.
*   `Arrays.binarySearch(array, key)`: Searches for a specified value in a *sorted* array. Returns the index of the search key, or `(-(insertion point) - 1)` if the key is not found.
*   `Arrays.equals(array1, array2)`: Compares two arrays for equality (same elements in the same order). Remember, `array1 == array2` only checks if they are the *same object* in memory, not if their contents are identical.
*   `Arrays.copyOf(originalArray, newLength)`: Creates a new array with elements copied from the original array, truncating or padding with default values if `newLength` is different.
*   `Arrays.toString(array)`: Returns a string representation of the contents of the specified array. This is invaluable for printing array contents for debugging.

```java
import java.util.Arrays;

public class ArrayUtilsExample {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 9};
        System.out.println("Original array: " + Arrays.toString(numbers)); // Output: [5, 2, 8, 1, 9]

        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));   // Output: [1, 2, 5, 8, 9]

        int index = Arrays.binarySearch(numbers, 5);
        System.out.println("Index of 5: " + index); // Output: 2 (since 5 is at index 2 in the sorted array)

        int[] copy = Arrays.copyOf(numbers, numbers.length);
        System.out.println("Are original and copy equal? " + Arrays.equals(numbers, copy)); // Output: true
    }
}
```

Common mistakes with arrays include:
*   **`ArrayIndexOutOfBoundsException`**: As mentioned, accessing an index outside `0` to `length-1`.
*   **Forgetting `new`**: Declaring an array variable but not initializing it with `new` or an initializer list will result in a `NullPointerException` if you try to access its elements.
*   **Comparing arrays with `==`**: This compares references, not contents. Use `Arrays.equals()` for content comparison.
*   **Fixed size limitation**: Trying to add more elements than the array's declared capacity.

Arrays are a foundational concept in Java programming. They provide an efficient way to store and manipulate collections of data, making them indispensable for many algorithms and data processing tasks. Understanding their declaration, initialization, indexing, and the utility methods available will empower you to handle structured data effectively in your applications.

#### Key concepts
*   **Array:** A fixed-size, sequential collection of elements of the same data type.
*   **Element:** An individual value stored within an array.
*   **Index:** A zero-based integer value used to uniquely identify and access an element within an array.
*   **Declaration:** The process of defining an array variable, specifying its data type and name (e.g., `int[] numbers;`).
*   **Initialization:** The process of creating the array object in memory and assigning initial values to its elements, either with `new` or an array literal.
*   **`length` property:** A public final field of an array that stores the number of elements it can hold.
*   **`ArrayIndexOutOfBoundsException`:** A runtime exception thrown when a program attempts to access an array element using an invalid index (outside the range `0` to `length - 1`).
*   **Multi-dimensional array:** An array of arrays, commonly used to represent grids or matrices (e.g., `int[][] matrix;`).
*   **Jagged array:** A multi-dimensional array where the inner arrays (rows) can have different lengths.
*   **`java.util.Arrays` class:** A utility class providing static methods for common array operations like sorting, searching, and comparing.
*   **`Arrays.toString()`:** A method to get a string representation of an array's contents.
*   **`Arrays.sort()`:** A method to sort the elements of an array.
*   **`Arrays.binarySearch()`:** A method to efficiently search for an element in a *sorted* array.

#### Hands-on activity

**Scenario:** You need to manage a list of daily temperatures and then represent a simple tic-tac-toe board.

**Instructions:**
1.  Create a Java class named `ArrayManager`.
2.  **Part 1: One-dimensional array for temperatures:**
    *   Declare a `double` array named `dailyTemperatures` and initialize it with at least 7 temperature values using an array literal (e.g., `{22.5, 24.0, 21.8, 26.1, 23.5, 20.0, 25.3}`).
    *   Calculate and print the average temperature for the week.
    *   Find and print the highest temperature recorded.
    *   Use `Arrays.sort()` to sort the temperatures and print the sorted array using `Arrays.toString()`.
3.  **Part 2: Two-dimensional array for a game board:**
    *   Declare a `char` 2D array named `ticTacToeBoard` to represent a 3x3 tic-tac-toe board.
    *   Initialize the board with empty spaces (e.g., `' '`).
    *   Simulate a few moves:
        *   Place 'X' at `[0][0]`
        *   Place 'O' at `[1][1]`
        *   Place 'X' at `[0][2]`
    *   Print the current state of the `ticTacToeBoard` in a readable grid format (e.g., using nested `for` loops).

**Code Template:**

```java
import java.util.Arrays; // Don't forget to import Arrays utility class

public class ArrayManager {
    public static void main(String[] args) {
        System.out.println("--- Part 1: Daily Temperatures ---");

        double[] dailyTemperatures = {22.5, 24.0, 21.8, 26.1, 23.5, 20.0, 25.3}; // Example temperatures

        // Calculate average temperature
        double sum = 0;
        // Your loop to sum temperatures here
        // ...
        double averageTemperature = sum / dailyTemperatures.length;
        System.out.println("Average temperature: " + String.format("%.2f", averageTemperature) + "°C");

        // Find highest temperature
        double highestTemperature = dailyTemperatures[0]; // Assume first is highest initially
        // Your loop to find highest temperature here
        // ...
        System.out.println("Highest temperature: " + highestTemperature + "°C");

        // Sort and print
        System.out.println("Original temperatures: " + Arrays.toString(dailyTemperatures));
        // Your code to sort dailyTemperatures here
        // ...
        System.out.println("Sorted temperatures: " + Arrays.toString(dailyTemperatures));

        System.out.println("\n--- Part 2: Tic-Tac-Toe Board ---");

        char[][] ticTacToeBoard = new char[3][3]; // A 3x3 board

        // Initialize board with empty spaces
        for (int i = 0; i < ticTacToeBoard.length; i++) {
            for (int j = 0; j < ticTacToeBoard[i].length; j++) {
                ticTacToeBoard[i][j] = ' '; // Empty space
            }
        }

        // Simulate moves
        ticTacToeBoard[0][0] = 'X';
        ticTacToeBoard[1][1] = 'O';
        ticTacToeBoard[0][2] = 'X';

        // Print the board
        System.out.println("Current Tic-Tac-Toe Board:");
        // Your nested loops to print the board here
        // Example output format:
        // X |   | X
        //---|---|---
        //   | O |
        //---|---|---
        //   |   |
        // ...
    }
}
```

#### Assessment idea

**Question 1:**
Given the following Java code:

```java
String[] fruits = {"Apple", "Banana", "Cherry"};
System.out.println(fruits[3]);
```
What will be the result when this code is executed?
A) Cherry
B) An `IndexOutOfBoundsException` will be thrown.
C) `null`
D) The program will compile but print nothing.

**Correct Answer and Explanation:**
**B) An `IndexOutOfBoundsException` will be thrown.**
*   Arrays in Java are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
*   The `fruits` array has a length of 3, so its valid indices are 0, 1, and 2.
*   Attempting to access `fruits[3]` is trying to access an element beyond the array's bounds, which results in an `ArrayIndexOutOfBoundsException` at runtime.

**Question 2:**
Consider the following Java code snippet:

```java
import java.util.Arrays;

int[] data1 = {10, 20, 30};
int[] data2 = {10, 20, 30};
int[] data3 = data1;

System.out.println(data1 == data2);
System.out.println(Arrays.equals(data1, data2));
System.out.println(data1 == data3);
```
What will be the output of this code?
A)
false
true
true
B)
true
true
false
C)
false
false
true
D)
true
false
false

**Correct Answer and Explanation:**
**A)
false
true
true**
*   `System.out.println(data1 == data2);`: This compares the *references* of `data1` and `data2`. Even though they contain the same values, `data1` and `data2` are two distinct array objects created in memory. Therefore, their references are different, and this prints `false`.
*   `System.out.println(Arrays.equals(data1, data2));`: This method from `java.util.Arrays` compares the *contents* of the two arrays. Since `data1` and `data2` have the same elements in the same order, this prints `true`.
*   `System.out.println(data1 == data3);`: Here, `data3 = data1;` means `data3` now refers to the *exact same array object* in memory as `data1`. Therefore, their references are identical, and this prints `true`.

#### AI generation note
Produce a 12-minute animated video lesson with interactive elements. Start with a visual analogy for arrays, like a row of mailboxes or numbered compartments, to explain indexing and fixed size. Animate the declaration and initialization process, showing memory allocation for `new int[5]` vs. `{1, 2, 3}`. Demonstrate `ArrayIndexOutOfBoundsException` with a clear visual warning. For multi-dimensional arrays, use a grid animation (e.g., a spreadsheet) to illustrate `[row][col]` access. Dedicate a segment to `java.util.Arrays` methods, showing `sort()` with numbers reordering, `toString()` displaying array contents, and `equals()` comparing two arrays with a visual distinction between reference and content equality. Include an interactive element where learners click on an array index to reveal its value or drag values to populate an array. Use clear, high-contrast visuals and captions.

---

## Module 3: Object-Oriented Programming I: Core Concepts

Welcome to Module 3, where we embark on a foundational journey into the heart of Java programming: Object-Oriented Programming (OOP). This paradigm shift from procedural programming is crucial for writing robust, scalable, and maintainable applications. Over the next four chapters, we'll unravel the core concepts that define OOP in Java, starting with classes and objects, moving through encapsulation and static members, and concluding with the fundamentals of inheritance. By the end of this module, you'll not only understand *what* these concepts are but also *why* they are indispensable for effective Java development.

### Chapter 3.1 — Introduction to Object-Oriented Programming (OOP) and Classes

#### Learning objectives
*   Explain the fundamental principles and benefits of Object-Oriented Programming (OOP).
*   Differentiate between classes and objects, understanding their roles in Java.
*   Define a class in Java, including instance variables (fields) and methods.
*   Create objects (instances) of a class using the `new` keyword.
*   Access object members (fields and methods) using the dot operator.

#### Detailed lesson content
Welcome to the world of Object-Oriented Programming, or OOP! This is where Java truly shines, offering a powerful way to structure your code that mirrors the real world. Think about how we describe things around us: a car has attributes like color, make, and model, and it can perform actions like starting, accelerating, or braking. In OOP, we model these real-world entities as "objects."

At the core of OOP are four main principles: Encapsulation, Inheritance, Polymorphism, and Abstraction. While we'll dive deep into each of these throughout this module and the next, for now, let's grasp the most fundamental building blocks: classes and objects. Imagine a blueprint for a house. This blueprint isn't a house itself, but it defines what a house *will have* (number of rooms, square footage) and what it *can do* (provide shelter, have lights turned on). In Java, a **class** is exactly like that blueprint. It's a template or a prototype from which objects are created. A class defines the characteristics (data, known as **fields** or **instance variables**) and behaviors (actions, known as **methods**) that an object of that class will possess.

An **object**, on the other hand, is a concrete instance of a class. If the `House` class is the blueprint, then *your specific house* at 123 Main Street is an object of the `House` class. It has its own unique set of values for the characteristics defined in the blueprint (e.g., it's blue, has 3 bedrooms, 1500 sq ft) and it can perform the actions defined (you can turn *its* lights on). In Java, we define a class using the `class` keyword. Let's consider a simple `Dog` class:

```java
public class Dog {
    // Instance variables (fields) - characteristics of a Dog
    String name;
    String breed;
    int age;

    // Methods - behaviors a Dog can perform
    public void bark() {
        System.out.println(name + " says Woof!");
    }

    public void eat(String food) {
        System.out.println(name + " is eating " + food + ".");
    }
}
```

In this `Dog` class, `name`, `breed`, and `age` are instance variables. Each `Dog` object will have its own `name`, `breed`, and `age`. `bark()` and `eat()` are methods that define what a dog can do. Notice the `public` keyword; this is an access modifier, which we'll explore more deeply later, but for now, understand it means these members are accessible from outside the class.

Once you have a class defined, you can create objects from it. This process is called **instantiation**. We use the `new` keyword, followed by the class name and parentheses (which call a constructor, a special method we'll cover in the next chapter). For example, to create a `Dog` object:

```java
public class Kennel {
    public static void main(String[] args) {
        // Create an object (instance) of the Dog class
        Dog myDog = new Dog(); // myDog is now an object

        // Accessing and setting instance variables using the dot operator
        myDog.name = "Buddy";
        myDog.breed = "Golden Retriever";
        myDog.age = 3;

        // Calling methods on the object
        myDog.bark();
        myDog.eat("kibble");

        // Create another Dog object
        Dog yourDog = new Dog();
        yourDog.name = "Lucy";
        yourDog.breed = "Labrador";
        yourDog.age = 5;

        yourDog.bark(); // Lucy says Woof!
    }
}
```

In the `main` method above, `myDog` and `yourDog` are two distinct objects of the `Dog` class. Each has its own `name`, `breed`, and `age`. When `myDog.bark()` is called, it's Buddy who barks; when `yourDog.bark()` is called, it's Lucy. This demonstrates the power of objects: they encapsulate their own state (data) and behavior.

A common mistake beginners make is confusing the class with an object. Remember, the class is the blueprint; the object is the actual house built from it. You can't live in a blueprint, and you can't directly manipulate the `Dog` class's `name` variable without first creating a `Dog` object. Another pitfall is forgetting the `new` keyword when trying to create an object, leading to a compilation error because you're trying to use a class name where an object reference is expected. Always remember: `ClassName objectName = new ClassName();` is the standard way to create an object.

Understanding classes and objects is the bedrock of Java programming. It allows us to model complex systems in a modular and organized way, making our code easier to understand, debug, and extend. As we progress, you'll see how these fundamental concepts combine with the other OOP principles to create powerful and flexible applications.

#### Key concepts
*   **Object-Oriented Programming (OOP):** A programming paradigm based on the concept of "objects", which can contain data (fields) and code (methods).
*   **Class:** A blueprint or template for creating objects. It defines the structure (fields) and behavior (methods) that objects of that class will have.
*   **Object:** An instance of a class. A concrete entity created from a class blueprint, possessing its own unique state (values for its fields) and capable of performing the behaviors defined by its class's methods.
*   **Field (Instance Variable):** A variable declared within a class but outside any method, constructor, or block. It represents a characteristic or attribute of an object.
*   **Method:** A block of code within a class that defines a behavior or action an object can perform.
*   **Instantiation:** The process of creating an object (an instance) from a class using the `new` keyword.
*   **`new` keyword:** Used to create new objects in Java.
*   **Dot operator (`.`):** Used to access the fields and methods of an object.

#### Hands-on activity
**Activity: Design and Implement a `Book` Class**

Your task is to create a `Book` class that models a book with specific attributes and behaviors.

1.  **Define the `Book` class:**
    *   It should have instance variables for `title` (String), `author` (String), `isbn` (String), and `isBorrowed` (boolean).
    *   It should have a method `displayBookInfo()` that prints the book's title, author, ISBN, and its current borrowed status.
    *   It should have a method `borrowBook()` that sets `isBorrowed` to `true` and prints a confirmation message. It should only allow borrowing if the book is not already borrowed.
    *   It should have a method `returnBook()` that sets `isBorrowed` to `false` and prints a confirmation message. It should only allow returning if the book is currently borrowed.

2.  **Create a `Library` class with a `main` method:**
    *   Inside `main`, create at least two `Book` objects.
    *   Set their initial `title`, `author`, `isbn`, and `isBorrowed` status.
    *   Call `displayBookInfo()` for each book.
    *   Demonstrate borrowing and returning a book, including trying to borrow an already borrowed book or returning a non-borrowed book, to test your logic.

```java
// Book.java
public class Book {
    // TODO: Declare instance variables (fields) here: title, author, isbn, isBorrowed

    // TODO: Implement displayBookInfo() method

    // TODO: Implement borrowBook() method with logic to check if already borrowed

    // TODO: Implement returnBook() method with logic to check if not borrowed
}

// Library.java
public class Library {
    public static void main(String[] args) {
        // TODO: Create at least two Book objects
        // Book book1 = new Book();
        // book1.title = "...";

        // TODO: Set their attributes and demonstrate method calls
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements correctly describes the relationship between a class and an object in Java?
    a) A class is an instance of an object.
    b) An object is a blueprint for a class.
    c) A class is a blueprint, and an object is an instance created from that blueprint.
    d) Classes and objects are interchangeable terms for the same concept.

    **Correct Answer:** c) A class is a blueprint, and an object is an instance created from that blueprint.
    **Explanation:** A class defines the structure and behavior, much like a blueprint. An object is a concrete realization or instance of that class, with its own unique state based on the class's definition.

2.  **Question:** Consider the following Java code:
    ```java
    public class Product {
        String name;
        double price;

        public void displayDetails() {
            System.out.println("Product: " + name + ", Price: $" + price);
        }
    }

    public class Store {
        public static void main(String[] args) {
            // Line A
            // Line B
            product1.name = "Laptop";
            product1.price = 1200.00;
            product1.displayDetails();
        }
    }
    ```
    Which two lines of code, when inserted at `// Line A` and `// Line B` respectively, would correctly create an object of the `Product` class and assign it to a variable named `product1`?
    a) `Product product1;` and `product1 = new Product();`
    b) `new Product();` and `Product product1;`
    c) `product1 = new Product();` and `Product product1;`
    d) `Product product1 = Product();` and `new Product();`

    **Correct Answer:** a) `Product product1;` and `product1 = new Product();`
    **Explanation:** Line A declares a reference variable `product1` of type `Product`. Line B then uses the `new` keyword to create an actual `Product` object in memory and assigns its reference to `product1`. This is the correct two-step process for object creation and assignment. Option b) declares the variable after trying to create an object, which won't compile. Option c) tries to assign before declaration. Option d) uses `Product()` instead of `new Product()` and has incorrect syntax.

#### AI generation note
Create a 10-minute animated video explaining classes and objects. Start with a real-world analogy (e.g., cookie cutter and cookies, car blueprint and actual cars), then transition to Java code. Visualize the `Dog` class as a blueprint, and `myDog` and `yourDog` as distinct instances in memory, each with its own set of `name`, `breed`, `age` values. Show the `new` keyword "stamping out" objects. Demonstrate accessing fields and calling methods with the dot operator. Include a clear visual of the `Dog` class definition and then two separate `Dog` objects, highlighting how their instance variables hold different values. Emphasize the common mistake of confusing class with object. Use clear, concise language and encouraging tone.

---

### Chapter 3.2 — Constructors and Encapsulation

#### Learning objectives
*   Understand the purpose of constructors in Java and how they are used to initialize objects.
*   Differentiate between the default constructor and custom constructors.
*   Implement constructor overloading to provide multiple ways of initializing an object.
*   Utilize the `this` keyword to refer to the current object's instance variables and to call other constructors.
*   Apply the concept of encapsulation using access modifiers (`private`) and accessor/mutator methods (getters and setters).

#### Detailed lesson content
In the previous chapter, we learned how to define classes and create objects. But what happens when an object is created? How do its instance variables get their initial values? This is where **constructors** come into play. A constructor is a special type of method that is invoked automatically when an object is created using the `new` keyword. Its primary purpose is to initialize the newly created object's instance variables. Unlike regular methods, constructors have the same name as the class and do *not* have a return type (not even `void`).

If you don't provide any constructor in your class, Java automatically provides a **default constructor**. This default constructor is parameterless and simply initializes instance variables to their default values (e.g., `null` for objects, `0` for numeric types, `false` for booleans). However, in most real-world scenarios, you'll want to provide your own **custom constructors** to ensure objects are created in a valid and meaningful state. Let's enhance our `Dog` class:

```java
public class Dog {
    String name;
    String breed;
    int age;

    // Custom constructor
    public Dog(String name, String breed, int age) {
        this.name = name;   // 'this.name' refers to the instance variable
        this.breed = breed; // 'name' refers to the parameter
        this.age = age;
        System.out.println("A new dog named " + name + " has joined the pack!");
    }

    // Constructor overloading: another constructor with different parameters
    public Dog(String name, String breed) {
        this(name, breed, 0); // Calls the other constructor (Dog(String, String, int))
        System.out.println("A puppy named " + name + " (age unknown) has joined the pack!");
    }

    public void bark() {
        System.out.println(name + " says Woof!");
    }
}
```

In the example above, we've added two constructors. The first `Dog(String name, String breed, int age)` takes three parameters to initialize all instance variables. Notice the use of the `this` keyword: `this.name = name;`. When a parameter has the same name as an instance variable, `this` is used to explicitly refer to the instance variable of the current object, distinguishing it from the local parameter. This is a very common and important use of `this`.

The second constructor, `Dog(String name, String breed)`, demonstrates **constructor overloading**. Just like methods, constructors can be overloaded, meaning a class can have multiple constructors as long as they have different parameter lists (different number of parameters, different types of parameters, or different order of parameter types). This allows for flexible object creation. Also, observe `this(name, breed, 0);` inside the second constructor. This is another powerful use of `this`: it allows one constructor to call another constructor within the same class. This is called **constructor chaining** and is excellent for avoiding redundant code. When `this()` is used to call another constructor, it *must* be the very first statement in the calling constructor.

Now, let's talk about **encapsulation**, one of the pillars of OOP. Encapsulation is the practice of bundling data (fields) and methods that operate on the data within a single unit (the class), and restricting direct access to some of the object's components. Think of it like a pill capsule: the medicine (data) is inside, and you interact with the capsule as a whole, not directly with the individual chemicals. In Java, we achieve encapsulation primarily using **access modifiers**, specifically the `private` keyword. When a field is declared `private`, it can only be accessed from within the class itself. This prevents external code from directly manipulating an object's internal state, which could lead to inconsistent or invalid data.

To allow controlled access to `private` fields from outside the class, we provide **public accessor methods (getters)** and **public mutator methods (setters)**. Getters retrieve the value of a field, and setters modify it. This gives the class control over how its data is accessed and changed, allowing for validation or other logic to be applied.

```java
public class Dog {
    // Private instance variables - encapsulated
    private String name;
    private String breed;
    private int age;

    public Dog(String name, String breed, int age) {
        // Use setters for initial validation, if any, or direct assignment
        this.name = name;
        this.breed = breed;
        setAge(age); // Using the setter to ensure age is valid
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name (optional, if name should not change)
    public void setName(String name) {
        this.name = name;
    }

    // Getter for breed
    public String getBreed() {
        return breed;
    }

    // Setter for breed
    public void setBreed(String breed) {
        this.breed = breed;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Setter for age with validation
    public void setAge(int age) {
        if (age >= 0 && age <= 30) { // Simple validation
            this.age = age;
        } else {
            System.err.println("Invalid age provided: " + age + ". Age must be between 0 and 30.");
            // Optionally throw an exception or set a default value
        }
    }

    public void bark() {
        System.out.println(name + " says Woof!");
    }
}

public class Kennel {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever", 3);
        System.out.println("My dog's name is " + myDog.getName()); // Using getter
        myDog.setAge(4); // Using setter
        System.out.println("My dog's new age is " + myDog.getAge());
        myDog.setAge(-1); // Demonstrate validation
        System.out.println("My dog's age after invalid attempt: " + myDog.getAge()); // Age remains 4

        // myDog.age = -5; // This would cause a compile-time error because 'age' is private!
    }
}
```

By making fields `private` and providing public getters and setters, we achieve several benefits:
1.  **Data Hiding:** The internal representation of an object is hidden from the outside world.
2.  **Control:** We can control how data is accessed and modified. For example, in `setAge()`, we added validation to prevent invalid age values.
3.  **Flexibility:** The internal implementation can change without affecting external code that uses the object, as long as the public getter/setter interface remains the same.

Common mistakes include forgetting to use `this` when a parameter shadows an instance variable, leading to the parameter assigning to itself instead of the instance variable. Another mistake is forgetting the `()` when calling a constructor via `this()`, or placing `this()` call anywhere other than the first line of a constructor. For encapsulation, beginners sometimes make fields `private` but then don't provide getters/setters, making the data inaccessible, or they make fields `public` thus defeating the purpose of encapsulation. Always think about the level of control you need over your object's state.

#### Key concepts
*   **Constructor:** A special method in a class that is automatically called when an object is created. Its purpose is to initialize the object's instance variables.
*   **Default Constructor:** A parameterless constructor automatically provided by Java if no other constructors are explicitly defined in a class.
*   **Custom Constructor:** A constructor explicitly defined by the programmer, often taking parameters to initialize instance variables.
*   **Constructor Overloading:** The ability to define multiple constructors in a class, each with a different parameter list.
*   **`this` keyword:**
    *   Used to refer to the current object's instance variables when there is a naming conflict with local variables or parameters.
    *   Used to call another constructor within the same class (constructor chaining), always as the first statement in the calling constructor.
*   **Encapsulation:** An OOP principle that bundles data (fields) and methods that operate on the data into a single unit (class) and restricts direct access to some of the object's components.
*   **`private` access modifier:** Restricts access to a class member (field or method) so that it can only be accessed from within the class itself.
*   **Accessor Method (Getter):** A public method used to retrieve the value of a private instance variable.
*   **Mutator Method (Setter):** A public method used to modify the value of a private instance variable, often including validation logic.

#### Hands-on activity
**Activity: Refine the `Book` Class with Constructors and Encapsulation**

Let's improve our `Book` class from the previous activity by applying constructors and encapsulation.

1.  **Modify the `Book` class:**
    *   Make all instance variables (`title`, `author`, `isbn`, `isBorrowed`) `private`.
    *   Create a custom constructor `Book(String title, String author, String isbn)` that initializes these three fields. The `isBorrowed` field should default to `false`.
    *   Implement a second constructor `Book(String title, String author, String isbn, boolean isBorrowed)` that initializes all four fields, potentially using `this()` to call the first constructor.
    *   Add public getter methods for `title`, `author`, `isbn`, and `isBorrowed`.
    *   Add public setter methods for `title`, `author`, and `isbn`. (Consider if `isBorrowed` needs a setter or if `borrowBook()` and `returnBook()` are sufficient).
    *   Enhance `borrowBook()` and `returnBook()` methods to use the `isBorrowed` getter/setter (if you added one) and ensure they print appropriate messages based on the current status.

2.  **Update the `Library` class `main` method:**
    *   Create `Book` objects using your new constructors.
    *   Demonstrate accessing book information using getters.
    *   Demonstrate modifying book information using setters (e.g., correcting a typo in the title).
    *   Continue to test `borrowBook()` and `returnBook()` to ensure they work correctly with the new private fields.

```java
// Book.java (Updated)
public class Book {
    private String title;
    private String author;
    private String isbn;
    private boolean isBorrowed;

    // TODO: Implement the first custom constructor: Book(String title, String author, String isbn)

    // TODO: Implement the second custom constructor: Book(String title, String author, String isbn, boolean isBorrowed)

    // TODO: Implement all necessary public getter methods

    // TODO: Implement public setter methods for title, author, isbn (if desired)

    // TODO: Refine borrowBook() and returnBook() methods to use getters/setters and handle logic
    public void borrowBook() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            System.out.println("Book '" + this.title + "' has been borrowed.");
        } else {
            System.out.println("Book '" + this.title + "' is already borrowed.");
        }
    }

    public void returnBook() {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            System.out.println("Book '" + this.title + "' has been returned.");
        } else {
            System.out.println("Book '" + this.title + "' was not borrowed.");
        }
    }

    public void displayBookInfo() {
        System.out.println("Title: " + this.title + ", Author: " + this.author +
                           ", ISBN: " + this.isbn + ", Borrowed: " + (this.isBorrowed ? "Yes" : "No"));
    }
}

// Library.java (Updated)
public class Library {
    public static void main(String[] args) {
        // TODO: Create Book objects using the new constructors
        // Book book1 = new Book("The Great Java", "J. Coder", "978-1234567890");

        // TODO: Demonstrate using getters and setters
        // System.out.println("Book 1 Title: " + book1.getTitle());
        // book1.setTitle("The Amazing Java");

        // TODO: Test borrowBook() and returnBook()
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements about Java constructors is FALSE?
    a) A constructor must have the same name as its class.
    b) A constructor can have a `void` return type.
    c) If no constructor is explicitly defined, Java provides a default constructor.
    d) Constructors can be overloaded.

    **Correct Answer:** b) A constructor can have a `void` return type.
    **Explanation:** Constructors explicitly do *not* have a return type, not even `void`. If you specify `void` as a return type, it becomes a regular method with the same name as the class, not a constructor, and will not be automatically invoked upon object creation.

2.  **Question:** Consider the following class definition:
    ```java
    public class Account {
        private String accountNumber;
        private double balance;

        public Account(String accountNumber) {
            this.accountNumber = accountNumber;
            this.balance = 0.0;
        }

        // Assume getters and setters for accountNumber and balance exist
        public String getAccountNumber() { return accountNumber; }
        public double getBalance() { return balance; }
        public void deposit(double amount) {
            if (amount > 0) {
                this.balance += amount;
            }
        }
    }
    ```
    If you want to create an `Account` object with an initial balance, which of the following changes would correctly allow this while maintaining encapsulation?
    a) Change `private double balance;` to `public double balance;`
    b) Add a new constructor `public Account(String accountNumber, double initialBalance) { this.accountNumber = accountNumber; this.balance = initialBalance; }`
    c) Add a method `public void setInitialBalance(double initialBalance) { this.balance = initialBalance; }` and call it after creating the object with the existing constructor.
    d) Modify the existing constructor to `public Account(String accountNumber, double initialBalance) { this.accountNumber = accountNumber; this.balance = initialBalance; }`

    **Correct Answer:** b) Add a new constructor `public Account(String accountNumber, double initialBalance) { this.accountNumber = accountNumber; this.balance = initialBalance; }`
    **Explanation:** Option b) correctly uses constructor overloading to provide a new way to initialize an `Account` object with an initial balance at the time of creation, while keeping the `balance` field `private` (maintaining encapsulation). Option a) breaks encapsulation by making `balance` public. Option c) is possible but less ideal as it requires two steps to create an initialized object (creation then calling a setter), and `setInitialBalance` might be confusing if it's only meant for initial setup. Option d) would remove the existing constructor, forcing all accounts to have an initial balance, which might not be desired.

#### AI generation note
Design a 12-minute interactive code demo focusing on constructors and encapsulation. Start by demonstrating the default constructor's behavior, then introduce a custom constructor for `Car` objects (e.g., `Car(String make, String model)`). Show how to overload constructors (e.g., `Car(String make, String model, int year)`) and use `this()` for constructor chaining. Transition to encapsulation by making `Car` fields `private`. Visually represent how direct access to private fields is blocked. Then, introduce getters and setters, showing how they provide controlled access and can include validation logic (e.g., for `setYear()` to ensure a valid year range). The interactive element should be a small coding exercise where learners complete a `Person` class by adding a constructor and a getter/setter for a `private` `age` field with validation.

---

### Chapter 3.3 — Static Members and Method Overloading

#### Learning objectives
*   Understand the purpose and usage of the `static` keyword for fields and methods.
*   Differentiate between instance variables/methods and static (class) variables/methods.
*   Explain the context in which static members can be accessed and their limitations.
*   Illustrate the concept of method overloading and its rules.
*   Apply method overloading to create flexible methods with varying parameter lists.

#### Detailed lesson content
So far, we've focused on instance members – fields and methods that belong to a specific object. Each object has its own copy of instance variables, and instance methods operate on the data of that particular object. But what if we need a field or a method that belongs to the class itself, rather than to any individual object? What if we want a piece of data that is shared by *all* objects of a class, or a utility method that doesn't need an object to be called? This is where the `static` keyword comes in.

The `static` keyword in Java is used to declare members (fields or methods) that belong to the class itself, rather than to any specific instance of the class. These are often referred to as **class members**.

**Static Fields (Class Variables):**
When a field is declared `static`, there is only *one copy* of that field, shared by all objects of the class. It's stored in a common memory location, not duplicated for each object. This is ideal for constants or for tracking data that pertains to the class as a whole. A classic example is a counter for the number of objects created, or a mathematical constant like `PI`.

```java
public class Robot {
    private static int robotCount = 0; // Static field: shared by all Robot objects
    private String name;
    private int id;

    public Robot(String name) {
        this.name = name;
        this.id = ++robotCount; // Increment the shared counter
        System.out.println("Robot " + this.name + " (ID: " + this.id + ") created. Total robots: " + robotCount);
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    // Static method to get the total count of robots
    public static int getRobotCount() {
        return robotCount; // Static method can access static fields
    }
}

public class RobotFactory {
    public static void main(String[] args) {
        Robot r1 = new Robot("Optimus");
        Robot r2 = new Robot("Bumblebee");
        Robot r3 = new Robot("Megatron");

        System.out.println("Total robots in factory: " + Robot.getRobotCount()); // Access static method via class name
        // System.out.println(r1.robotCount); // This works but is discouraged. Access via class name is preferred.
    }
}
```
In the `Robot` class, `robotCount` is `static`. Every time a new `Robot` object is created, `robotCount` is incremented, reflecting the total number of `Robot` instances. We access `robotCount` and `getRobotCount()` using the class name (`Robot.robotCount`, `Robot.getRobotCount()`) rather than an object reference. This is the recommended practice for static members.

**Static Methods (Class Methods):**
A method declared `static` also belongs to the class, not to any specific object. You can call a static method directly using the class name, without needing to create an object of that class. Static methods are often used for utility functions that don't depend on the state of an object. For example, the `main` method where your Java program execution begins is `static`. Why? Because the Java Virtual Machine (JVM) needs to call `main()` to start your program, and it can't create an object of your `Main` class before it even starts executing any code.

**Important Restriction for Static Methods:**
A crucial rule to remember is that **a static method cannot directly access non-static (instance) members (fields or methods) of the class.** This is because static methods belong to the class and exist even before any objects are created. If a static method tried to access an instance variable, which object's variable would it be? There might not be any object yet! However, a static method *can* access other static members. Conversely, an instance method *can* access both static and non-static members.

```java
public class Calculator {
    public static final double PI = 3.14159; // A static constant

    public static int add(int a, int b) { // Static method
        return a + b;
    }

    public int subtract(int a, int b) { // Instance method
        // return this.PI - (a - b); // ERROR: Cannot use 'this' in a static context for PI, but PI is static, so it can be accessed directly as Calculator.PI
        return a - b;
    }

    public void printPi() { // Instance method
        System.out.println("Value of PI: " + PI); // Instance method can access static field
        System.out.println("Sum of 5 and 3: " + add(5, 3)); // Instance method can call static method
    }
}

public class MathOperations {
    public static void main(String[] args) {
        System.out.println("Sum: " + Calculator.add(10, 5)); // Call static method directly
        System.out.println("PI: " + Calculator.PI); // Access static field directly

        // To call subtract(), we need an object
        Calculator myCalc = new Calculator();
        System.out.println("Difference: " + myCalc.subtract(10, 5));
        myCalc.printPi();
    }
}
```
Common mistakes related to `static` include trying to access an instance variable from a static method without an object reference, or trying to use `this` inside a static method (since `this` refers to an *instance*).

Now, let's shift our focus to **method overloading**. We briefly touched upon constructor overloading in the previous chapter, and the concept is identical for regular methods. Method overloading allows a class to have multiple methods with the same name, but with different **parameter lists**. The compiler distinguishes between overloaded methods based on the number, type, or order of their parameters. The return type and access modifier of a method are *not* considered when distinguishing overloaded methods.

Consider a `Printer` class that can print different types of data:

```java
public class Printer {
    public void print(String text) {
        System.out.println("Printing String: " + text);
    }

    public void print(int number) {
        System.out.println("Printing int: " + number);
    }

    public void print(String text, int copies) {
        for (int i = 0; i < copies; i++) {
            System.out.println("Printing String (" + (i + 1) + "/" + copies + "): " + text);
        }
    }

    // This would NOT be valid overloading: same parameter list as print(String)
    // public int print(String message) { return 0; } // Compile-time error!
}

public class DocumentProcessor {
    public static void main(String[] args) {
        Printer myPrinter = new Printer();
        myPrinter.print("Hello Java!");       // Calls print(String)
        myPrinter.print(12345);               // Calls print(int)
        myPrinter.print("Report", 3);         // Calls print(String, int)
    }
}
```
In this `Printer` class, we have three `print` methods. The Java compiler determines which `print` method to call based on the arguments provided during the method call. This provides flexibility and improves code readability by allowing you to use a single, intuitive method name for similar operations that handle different data types or quantities of arguments.

The rules for method overloading are strict:
1.  **Different Parameter Lists:** The methods must have different numbers of parameters, different types of parameters, or a different order of parameter types.
2.  **Return Type Doesn't Matter:** You cannot overload a method simply by changing its return type.
3.  **Access Modifier Doesn't Matter:** You cannot overload a method simply by changing its access modifier.

A common mistake with overloading is confusing it with overriding (which we'll cover in the next module with inheritance). Overloading is about having multiple methods with the *same name but different signatures within the same class*. Overriding is about a subclass providing a specific implementation for a method that is already defined in its superclass.

Understanding `static` members and method overloading empowers you to write more organized, efficient, and flexible Java code. `static` members are perfect for class-level utilities and shared data, while overloading allows for cleaner, more intuitive method interfaces.

#### Key concepts
*   **`static` keyword:** A modifier that declares a class member (field or method) as belonging to the class itself, rather than to any specific object.
*   **Static Field (Class Variable):** A field declared with `static`. There is only one copy of this field, shared by all objects of the class. Accessed using the class name (e.g., `ClassName.staticField`).
*   **Static Method (Class Method):** A method declared with `static`. It belongs to the class and can be called using the class name (e.g., `ClassName.staticMethod()`) without creating an object.
*   **Instance Member:** A field or method that belongs to a specific object (instance) of a class. Each object has its own copy of instance variables.
*   **Static Context Restriction:** A static method cannot directly access non-static (instance) fields or methods because it exists independently of any object. It can only access other static members.
*   **Method Overloading:** The ability to define multiple methods within the same class that have the same name but different parameter lists (different number, type, or order of parameters).
*   **Parameter List (Method Signature):** The combination of the method name and the number, type, and order of its parameters. This is what the compiler uses to distinguish overloaded methods.

#### Hands-on activity
**Activity: Create a `MathUtility` Class with Static Members and Overloaded Methods**

Your task is to create a `MathUtility` class that provides various mathematical operations.

1.  **Define the `MathUtility` class:**
    *   Add a `static final double PI = 3.14159;` field to represent the mathematical constant PI. (`final` makes it a constant, meaning its value cannot be changed after initialization).
    *   Add a `static` method `add()` that is overloaded:
        *   `public static int add(int a, int b)`: Adds two integers.
        *   `public static double add(double a, double b)`: Adds two doubles.
        *   `public static int add(int a, int b, int c)`: Adds three integers.
    *   Add a `static` method `multiply()` that is overloaded:
        *   `public static int multiply(int a, int b)`: Multiplies two integers.
        *   `public static double multiply(double a, double b)`: Multiplies two doubles.
    *   Add a `static` method `getCircleArea(double radius)` that calculates the area of a circle using the `PI` constant.

2.  **Create a `CalculatorApp` class with a `main` method:**
    *   Call all the overloaded `add()` and `multiply()` methods with different arguments to demonstrate their functionality.
    *   Call the `getCircleArea()` method.
    *   Print the value of `MathUtility.PI`.
    *   Observe how you don't need to create an object of `MathUtility` to use its methods and fields.

```java
// MathUtility.java
public class MathUtility {
    // TODO: Declare the static final double PI field

    // TODO: Implement the overloaded static add() methods

    // TODO: Implement the overloaded static multiply() methods

    // TODO: Implement the static getCircleArea(double radius) method
}

// CalculatorApp.java
public class CalculatorApp {
    public static void main(String[] args) {
        System.out.println("Using MathUtility:");

        // TODO: Call MathUtility.add() with different parameter types/counts
        // System.out.println("Sum of 5 and 10: " + MathUtility.add(5, 10));

        // TODO: Call MathUtility.multiply() with different parameter types
        // System.out.println("Product of 2.5 and 4.0: " + MathUtility.multiply(2.5, 4.0));

        // TODO: Call MathUtility.getCircleArea()
        // System.out.println("Area of circle with radius 5: " + MathUtility.getCircleArea(5.0));

        // TODO: Print MathUtility.PI
        // System.out.println("Value of PI: " + MathUtility.PI);
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements about `static` members in Java is TRUE?
    a) `static` methods can directly access non-static instance variables.
    b) Each object of a class has its own copy of a `static` field.
    c) `static` members are accessed using an object reference, like `myObject.staticField`.
    d) `static` methods can be called directly using the class name, without creating an object.

    **Correct Answer:** d) `static` methods can be called directly using the class name, without creating an object.
    **Explanation:** Static members belong to the class, not an instance. Therefore, they are accessed via the class name. Static methods cannot directly access non-static instance variables because they exist independently of any object, and there might not be an object instance whose variable to access. There is only one copy of a static field, shared by all instances.

2.  **Question:** Consider the following Java class:
    ```java
    public class Processor {
        public void process(int data) {
            System.out.println("Processing integer: " + data);
        }

        // Method A
        // Method B
    }
    ```
    Which two method declarations, if added to the `Processor` class, would demonstrate valid method overloading?
    1.  `public void process(double data) { System.out.println("Processing double: " + data); }`
    2.  `public int process(int value) { return value * 2; }`
    3.  `public void process(String message, int repeat) { for(int i=0; i<repeat; i++) System.out.println(message); }`
    4.  `private void process(int data) { System.out.println("Private processing: " + data); }`

    a) 1 and 2
    b) 1 and 3
    c) 2 and 4
    d) 3 and 4

    **Correct Answer:** b) 1 and 3
    **Explanation:**
    *   Declaration 1 (`public void process(double data)`) is valid overloading because the parameter type is different (`double` vs `int`).
    *   Declaration 3 (`public void process(String message, int repeat)`) is valid overloading because the number and types of parameters are different.
    *   Declaration 2 (`public int process(int value)`) is NOT valid overloading. It has the same method name (`process`) and the same parameter list (`int`) as the original method. Only the return type is different, which is not sufficient for overloading.
    *   Declaration 4 (`private void process(int data)`) is NOT valid overloading. It has the same method name and parameter list. Only the access modifier is different, which is not sufficient for overloading.

#### AI generation note
Create an 11-minute mixed-media lesson. Start with an animated explanation of static vs. instance members using a `Car` class: show `Car.totalCarsCreated` (static) as a single shared counter and `myCar.color` (instance) as unique to each car object. Then, transition to a live coding demo for method overloading using the `MathUtility` example. Clearly show how the IDE suggests different `add()` method signatures as you type. Visually highlight the parameter lists that differentiate overloaded methods. Include a reflection prompt asking learners to identify scenarios where `static` methods would be more appropriate than instance methods. Use clear diagrams for memory allocation for static vs. instance fields.

---

### Chapter 3.4 — Inheritance Fundamentals and `super` Keyword

#### Learning objectives
*   Define inheritance and explain its role in promoting code reusability and establishing "is-a" relationships.
*   Use the `extends` keyword to create a subclass (child class) from a superclass (parent class).
*   Understand how subclass objects inherit fields and methods from their superclass.
*   Utilize the `super` keyword to call a superclass's constructor and to access superclass members.
*   Explain the concept of constructor chaining in the context of inheritance.

#### Detailed lesson content
We've built a solid foundation with classes, objects, constructors, and encapsulation. Now, let's explore **inheritance**, another cornerstone of Object-Oriented Programming that allows us to create new classes based on existing ones. Imagine you have a `Vehicle` class with attributes like `speed`, `color`, and methods like `accelerate()`, `brake()`. Now, you want to create a `Car` class and a `Motorcycle` class. Both cars and motorcycles are vehicles, so they share many common characteristics and behaviors. Instead of rewriting all the `Vehicle` code in `Car` and `Motorcycle`, we can make `Car` and `Motorcycle` *inherit* from `Vehicle`.

**Inheritance** is a mechanism in Java where one class acquires the properties (fields) and behaviors (methods) of another class. The class that is being inherited from is called the **superclass** (or parent class), and the class that inherits is called the **subclass** (or child class). This establishes an "**is-a**" relationship. For example, a `Car` *is a* `Vehicle`, and a `Motorcycle` *is a* `Vehicle`.

The primary benefits of inheritance are:
1.  **Code Reusability:** Common code is written once in the superclass and reused by all subclasses.
2.  **Extensibility:** New features can be added to subclasses without modifying the superclass.
3.  **Polymorphism:** (Which we'll cover in the next module) Allows objects of different subclasses to be treated as objects of their common superclass.

In Java, we use the `extends` keyword to indicate that a class is inheriting from another. A class can only directly `extends` one other class (Java does not support multiple inheritance of classes, though it supports multiple inheritance of interfaces, which we'll see later).

Let's illustrate with our `Vehicle` and `Car` example:

```java
// Superclass (Parent Class)
public class Vehicle {
    private String brand;
    private int speed;

    public Vehicle(String brand) {
        this.brand = brand;
        this.speed = 0;
        System.out.println("Vehicle created: " + brand);
    }

    public void accelerate(int increment) {
        this.speed += increment;
        System.out.println(brand + " accelerating to " + speed + " km/h.");
    }

    public void brake(int decrement) {
        this.speed = Math.max(0, this.speed - decrement);
        System.out.println(brand + " braking to " + speed + " km/h.");
    }

    public String getBrand() {
        return brand;
    }

    public int getSpeed() {
        return speed;
    }
}

// Subclass (Child Class)
public class Car extends Vehicle { // Car inherits from Vehicle
    private int numberOfDoors;

    public Car(String brand, int numberOfDoors) {
        super(brand); // Call the superclass constructor
        this.numberOfDoors = numberOfDoors;
        System.out.println("Car created: " + brand + " with " + numberOfDoors + " doors.");
    }

    public void honk() {
        System.out.println(getBrand() + " says Beep! Beep!"); // Access inherited method getBrand()
    }

    public int getNumberOfDoors() {
        return numberOfDoors;
    }
}
```

In this example, `Car` `extends` `Vehicle`. This means a `Car` object will automatically have the `brand`, `speed` fields, and `accelerate()`, `brake()`, `getBrand()`, `getSpeed()` methods from the `Vehicle` class, in addition to its own `numberOfDoors` field and `honk()` method.

**The `super` Keyword:**
The `super` keyword is incredibly important in inheritance. It has two primary uses:

1.  **Calling a Superclass Constructor:** When a subclass object is created, the constructor of its superclass must also be called to initialize the inherited parts of the object. If you don't explicitly call a superclass constructor, Java automatically inserts a call to the superclass's no-argument constructor (`super();`) as the first statement in the subclass constructor. If the superclass *only* has parameterized constructors (like our `Vehicle` class), you *must* explicitly call one of them using `super(...)` as the very first statement in the subclass constructor. This is known as **constructor chaining**.

    ```java
    public Car(String brand, int numberOfDoors) {
        super(brand); // Calls the Vehicle(String brand) constructor
        this.numberOfDoors = numberOfDoors;
    }
    ```
    If you omit `super(brand);` here, you'd get a compile-time error because `Vehicle` does not have a no-argument constructor, and Java's implicit `super()` call would fail.

2.  **Accessing Superclass Members:** You can use `super.fieldName` to access a field from the superclass (though usually fields are `private` and accessed via getters/setters) or `super.methodName()` to call a method from the superclass. This is particularly useful when a subclass **overrides** a method (provides its own implementation for an inherited method) but still needs to invoke the superclass's version of that method. We'll explore method overriding more deeply in the next module, but for now, understand that `super` provides a way to refer to the parent's implementation.

Let's see the `Car` and `Vehicle` in action:

```java
public class RoadTrip {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", 4);
        myCar.accelerate(50); // Calls inherited accelerate() from Vehicle
        myCar.honk();         // Calls Car's own honk()
        myCar.brake(20);      // Calls inherited brake()

        System.out.println("My car's brand: " + myCar.getBrand()); // Calls inherited getBrand()
        System.out.println("My car's current speed: " + myCar.getSpeed() + " km/h");
        System.out.println("My car has " + myCar.getNumberOfDoors() + " doors.");

        Vehicle genericVehicle = new Vehicle("Bicycle");
        genericVehicle.accelerate(10);
        // genericVehicle.honk(); // Compile-time error: Vehicle does not have a honk() method
    }
}
```
Notice that `myCar` (a `Car` object) can call all `Vehicle` methods because it inherited them. However, `genericVehicle` (a `Vehicle` object) cannot call `honk()` because `honk()` is specific to the `Car` subclass. This demonstrates that a subclass *is a* superclass, but a superclass is *not necessarily a* subclass.

A common mistake is forgetting to call a superclass constructor using `super()` when the superclass doesn't have a default (no-argument) constructor. This will result in a compile-time error. Another pitfall is trying to access `private` fields of the superclass directly from the subclass; remember, `private` members are only accessible within their own class, even by subclasses. You should use the superclass's public or protected getters and setters instead.

Inheritance is a powerful tool for building hierarchies of related classes, promoting a clean, modular, and reusable codebase. It's a fundamental concept for understanding how many Java API classes are structured and how you can design your own robust applications.

#### Key concepts
*   **Inheritance:** An OOP mechanism where a new class (subclass) acquires the properties (fields) and behaviors (methods) of an existing class (superclass).
*   **Superclass (Parent Class):** The class whose properties and behaviors are inherited by another class.
*   **Subclass (Child Class):** The class that inherits properties and behaviors from a superclass.
*   **`extends` keyword:** Used in Java to indicate that a class is a subclass of another class (e.g., `class Car extends Vehicle`).
*   **"Is-a" relationship:** A conceptual relationship indicating that a subclass is a specialized type of its superclass (e.g., a `Car` *is a* `Vehicle`).
*   **`super` keyword:**
    *   Used to call a superclass's constructor from a subclass constructor. This call (`super(...)`) must be the first statement in the subclass constructor.
    *   Used to access a superclass's members (fields or methods) that might be hidden or overridden by the subclass.
*   **Constructor Chaining:** The process by which a constructor's execution implicitly or explicitly calls a constructor in its direct superclass, which in turn calls its superclass's constructor, and so on, up the inheritance hierarchy.

#### Hands-on activity
**Activity: Implement a `Shape` Hierarchy**

Let's create a simple inheritance hierarchy for geometric shapes.

1.  **Define the `Shape` superclass:**
    *   It should have `private` fields for `color` (String) and `isFilled` (boolean).
    *   A constructor `Shape(String color, boolean isFilled)` to initialize these fields.
    *   Public getter methods for `color` and `isFilled`.
    *   A `public void displayInfo()` method that prints the shape's color and filled status.

2.  **Define the `Circle` subclass:**
    *   It should `extend` `Shape`.
    *   It should have a `private` field for `radius` (double).
    *   A constructor `Circle(String color, boolean isFilled, double radius)` that calls the superclass constructor using `super()` and initializes `radius`.
    *   A public getter for `radius`.
    *   A `public double getArea()` method that calculates and returns the area of the circle (using `Math.PI` and `radius`).
    *   Override the `displayInfo()` method to first call `super.displayInfo()` and then print the circle's radius and calculated area.

3.  **Create a `DrawingApp` class with a `main` method:**
    *   Create a `Shape` object.
    *   Create a `Circle` object.
    *   Call `displayInfo()` for both objects.
    *   Call `getArea()` for the `Circle` object and print its result.
    *   Observe how the `Circle` object has properties and behaviors from both `Shape` and `Circle`.

```java
// Shape.java
public class Shape {
    private String color;
    private boolean isFilled;

    // TODO: Implement the constructor Shape(String color, boolean isFilled)

    // TODO: Implement public getter methods for color and isFilled

    public void displayInfo() {
        System.out.println("Shape Color: " + this.color + ", Filled: " + (this.isFilled ? "Yes" : "No"));
    }
}

// Circle.java
public class Circle extends Shape {
    private double radius;

    // TODO: Implement the constructor Circle(String color, boolean isFilled, double radius)
    // Remember to call the superclass constructor!

    // TODO: Implement public getter method for radius

    // TODO: Implement public double getArea() method

    @Override // This annotation is good practice for overridden methods
    public void displayInfo() {
        super.displayInfo(); // Call the superclass's displayInfo method
        // TODO: Print Circle-specific info (radius and area)
    }
}

// DrawingApp.java
public class DrawingApp {
    public static void main(String[] args) {
        // TODO: Create a Shape object
        // Shape genericShape = new Shape("Red", true);
        // genericShape.displayInfo();

        // TODO: Create a Circle object
        // Circle myCircle = new Circle("Blue", false, 7.5);
        // myCircle.displayInfo();
        // System.out.println("Circle Area: " + myCircle.getArea());
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following is the primary keyword used to establish an inheritance relationship in Java, where one class acquires the properties and behaviors of another?
    a) `implements`
    b) `inherits`
    c) `extends`
    d) `uses`

    **Correct Answer:** c) `extends`
    **Explanation:** The `extends` keyword is used to declare that a class is a subclass of another class, thereby inheriting its members. `implements` is used for interfaces, and `inherits` and `uses` are not keywords for inheritance in Java.

2.  **Question:** Consider the following two classes:
    ```java
    class Animal {
        private String name;
        public Animal(String name) {
            this.name = name;
            System.out.println("Animal created: " + name);
        }
        public String getName() { return name; }
    }

    class Dog extends Animal {
        private String breed;
        public Dog(String name, String breed) {
            // Missing line A
            this.breed = breed;
            System.out.println("Dog created: " + name + ", Breed: " + breed);
        }
    }
    ```
    Which line of code should replace `// Missing line A` in the `Dog` class constructor to ensure proper constructor chaining and initialization of the inherited `name` field?
    a) `super();`
    b) `super.name = name;`
    c) `super(name);`
    d) `this.name = name;`

    **Correct Answer:** c) `super(name);`
    **Explanation:** The `Animal` superclass has a parameterized constructor `Animal(String name)`. Therefore, the `Dog` subclass constructor *must* explicitly call this superclass constructor using `super(name);` as its first statement. Option a) would fail because `Animal` does not have a no-argument constructor. Option b) attempts to access a private field directly, which is not allowed. Option d) attempts to assign to a private field of the superclass, which is also not allowed and would not correctly call the superclass constructor.

---

## Module 4: Object-Oriented Programming II: Inheritance and Polymorphism

This module delves deeper into the foundational principles of Object-Oriented Programming (OOP) in Java, focusing on inheritance and polymorphism. You'll learn how to build flexible, reusable, and maintainable code by leveraging these powerful concepts. We'll explore how classes can inherit properties and behaviors from others, how objects can take on "many forms," and how to design robust systems using abstract classes and interfaces. Finally, we'll examine inner classes as a tool for enhanced encapsulation and logical grouping within your code.

---

### Chapter 4.1 — Understanding Inheritance: The `extends` Keyword

#### Learning objectives
*   Define inheritance and explain its purpose in object-oriented design.
*   Demonstrate how to use the `extends` keyword to establish a superclass-subclass relationship.
*   Differentiate between method overriding and method overloading, and correctly apply the `@Override` annotation.
*   Utilize the `super` keyword to invoke superclass constructors and methods.
*   Understand the implications of access modifiers, particularly `protected`, within an inheritance hierarchy.

#### Detailed lesson content
Inheritance is one of the four pillars of Object-Oriented Programming, enabling a class to inherit properties and behaviors (fields and methods) from another class. This mechanism promotes code reusability, reduces redundancy, and establishes a natural "is-a" relationship between classes. For instance, a `Car` "is a" `Vehicle`, and a `Motorcycle` "is a" `Vehicle`. Instead of duplicating common attributes like `speed` or `color`, and common actions like `start()` or `stop()` in both `Car` and `Motorcycle` classes, we can define them once in a `Vehicle` superclass, and then `Car` and `Motorcycle` can simply inherit them. This makes our code more maintainable and easier to extend.

In Java, we use the `extends` keyword to declare an inheritance relationship. The class that is being inherited from is called the **superclass** (or parent class), and the class that does the inheriting is called the **subclass** (or child class). A subclass automatically gains access to all non-private members (fields and methods) of its superclass. This means if `Vehicle` has a `start()` method, a `Car` object can call `start()` without `Car` explicitly defining it.

Consider the following example:
```java
class Vehicle {
    String brand;
    int speed;

    public Vehicle(String brand) {
        this.brand = brand;
        this.speed = 0;
        System.out.println("Vehicle constructor called for " + brand);
    }

    public void start() {
        System.out.println(brand + " is starting.");
    }

    public void stop() {
        System.out.println(brand + " is stopping.");
    }

    public void accelerate(int increment) {
        speed += increment;
        System.out.println(brand + " accelerating. Current speed: " + speed + " mph.");
    }
}

class Car extends Vehicle {
    int numberOfDoors;

    public Car(String brand, int doors) {
        super(brand); // Calls the constructor of the superclass (Vehicle)
        this.numberOfDoors = doors;
        System.out.println("Car constructor called for " + brand + " with " + doors + " doors.");
    }

    // Method overriding: providing a specific implementation for a superclass method
    @Override
    public void start() {
        System.out.println("Car " + brand + " is starting with a key.");
    }

    public void honk() {
        System.out.println("Beep beep!");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", 4);
        myCar.start();      // Calls the overridden start() method in Car
        myCar.accelerate(50); // Calls the accelerate() method from Vehicle
        myCar.honk();       // Calls the honk() method specific to Car
        myCar.stop();       // Calls the stop() method from Vehicle
    }
}
```
In this example, `Car` `extends` `Vehicle`. The `Car` class inherits `brand`, `speed`, `start()`, `stop()`, and `accelerate()` from `Vehicle`. It also adds its own unique field `numberOfDoors` and method `honk()`.

A crucial concept in inheritance is **method overriding**. This occurs when a subclass provides its own specific implementation for a method that is already defined in its superclass. The method signature (name, parameter types, and order) must be exactly the same in both the superclass and subclass. The `@Override` annotation, while optional, is highly recommended. It tells the compiler that you intend to override a superclass method. If you make a mistake in the method signature (e.g., different parameter types), the compiler will flag an error, preventing subtle bugs. This helps ensure you are truly overriding, not just creating a new, unrelated method. Method overriding is a cornerstone of polymorphism, which we'll explore in the next chapter. It's important not to confuse method overriding with **method overloading**, which involves defining multiple methods with the same name but different parameter lists within the *same* class or an inheritance hierarchy. Overloading is about providing different ways to call a method; overriding is about providing a specific implementation for an inherited method.

The `super` keyword is indispensable when working with inheritance. It serves two primary purposes:
1.  **Calling a superclass constructor:** As seen in the `Car` constructor, `super(brand);` explicitly calls the `Vehicle` class's constructor. This *must* be the first statement in the subclass constructor. If you don't explicitly call `super()`, Java automatically inserts a call to the superclass's no-argument constructor (`super();`) as the first statement. If the superclass only has parameterized constructors and no no-argument constructor, you *must* explicitly call one of the superclass's parameterized constructors. Forgetting this is a common mistake that leads to compilation errors.
2.  **Calling a superclass method:** If a subclass has overridden a method, but you still need to invoke the original superclass implementation from within the subclass, you can use `super.methodName()`. For example, if `Car`'s `start()` method needed to perform some `Vehicle` specific startup logic *before* its own `Car`-specific logic, it could do `super.start();` at the beginning of its overridden `start()` method.

Access modifiers also play a significant role in inheritance. `public` members are always inherited and accessible. `private` members are inherited but not directly accessible by subclasses; they can only be accessed indirectly via public or protected methods of the superclass. The `protected` modifier is specifically designed for inheritance: `protected` members are accessible within their own package and by subclasses *in any package*. This offers a balance between strict encapsulation (`private`) and wide openness (`public`), allowing subclasses to interact with specific superclass internals while maintaining some level of restriction for unrelated classes.

A common mistake beginners make is attempting to override a `private` method. Since `private` methods are not inherited, you cannot override them. If you declare a method with the same signature in a subclass, it's considered a new, independent method, not an override. Another pitfall is changing the return type or parameter list when attempting to override, which results in overloading or a compilation error, not overriding. Always use `@Override` to catch such mistakes early. Inheritance is a powerful tool for building complex systems, but it requires careful design to avoid creating rigid hierarchies that are difficult to change.

#### Key concepts
*   **Inheritance:** A mechanism where one class acquires the properties and behaviors of another class.
*   **Superclass (Parent Class):** The class whose features are inherited.
*   **Subclass (Child Class):** The class that inherits features from a superclass.
*   **`extends` keyword:** Used to establish an inheritance relationship, indicating that a class is a subclass of another.
*   **Method Overriding:** Providing a specific implementation for a method that is already defined in the superclass, maintaining the same method signature.
*   **`@Override` annotation:** A compiler directive used to explicitly mark a method as an override, helping to catch errors if the signature doesn't match a superclass method.
*   **`super` keyword:** Used to refer to the immediate superclass's members, primarily to invoke a superclass constructor or method.
*   **`protected` access modifier:** Allows members to be accessed within their own package and by subclasses in any package.

#### Hands-on activity
**Objective:** Create a simple inheritance hierarchy for geometric shapes.

1.  **Create a `Shape` superclass:**
    *   It should have a `String color` field.
    *   A constructor `public Shape(String color)` that initializes the color.
    *   A `public void displayColor()` method that prints the shape's color.
    *   A `public double calculateArea()` method that returns `0.0` (as a generic shape doesn't have a specific area formula).

2.  **Create a `Circle` subclass:**
    *   It should `extend` `Shape`.
    *   Add a `double radius` field.
    *   A constructor `public Circle(String color, double radius)` that calls the superclass constructor and initializes `radius`.
    *   **Override** the `calculateArea()` method to return `Math.PI * radius * radius`.
    *   Add a `public void displayDetails()` method that prints the color and radius.

3.  **Create a `Rectangle` subclass:**
    *   It should `extend` `Shape`.
    *   Add `double length` and `double width` fields.
    *   A constructor `public Rectangle(String color, double length, double width)` that calls the superclass constructor and initializes `length` and `width`.
    *   **Override** the `calculateArea()` method to return `length * width`.
    *   Add a `public void displayDetails()` method that prints the color, length, and width.

4.  **Test your classes:** In a `main` method, create instances of `Circle` and `Rectangle`, call their `displayColor()`, `calculateArea()`, and `displayDetails()` methods. Observe which method implementations are executed.

```java
// Shape.java
class Shape {
    String color;

    public Shape(String color) {
        this.color = color;
    }

    public void displayColor() {
        System.out.println("Shape color: " + color);
    }

    public double calculateArea() {
        System.out.println("Calculating area for a generic shape.");
        return 0.0; // Generic shape has no specific area
    }
}

// Circle.java
class Circle extends Shape {
    double radius;

    public Circle(String color, double radius) {
        super(color); // Call superclass constructor
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    public void displayDetails() {
        displayColor(); // Call superclass method
        System.out.println("Radius: " + radius);
        System.out.println("Area: " + calculateArea());
    }
}

// Rectangle.java
class Rectangle extends Shape {
    double length;
    double width;

    public Rectangle(String color, double length, double width) {
        super(color); // Call superclass constructor
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }

    public void displayDetails() {
        displayColor(); // Call superclass method
        System.out.println("Length: " + length + ", Width: " + width);
        System.out.println("Area: " + calculateArea());
    }
}

// Main.java (for testing)
public class ShapeDemo {
    public static void main(String[] args) {
        Circle myCircle = new Circle("Blue", 5.0);
        myCircle.displayColor();
        System.out.println("Circle Area: " + myCircle.calculateArea());
        myCircle.displayDetails();
        System.out.println("---");

        Rectangle myRectangle = new Rectangle("Green", 10.0, 4.0);
        myRectangle.displayColor();
        System.out.println("Rectangle Area: " + myRectangle.calculateArea());
        myRectangle.displayDetails();
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements about method overriding in Java is true?
    a)  The overridden method must have a different return type than the method in the superclass.
    b)  The `@Override` annotation is mandatory for successful method overriding.
    c)  A private method in a superclass can be overridden by a subclass.
    d)  The signature (method name and parameter list) of the overridden method must be identical to the superclass method.

    **Correct Answer:** d) The signature (method name and parameter list) of the overridden method must be identical to the superclass method.
    **Explanation:** Method overriding requires the exact same method signature. Option (a) describes method overloading or a compilation error. Option (b) is false; `@Override` is optional but highly recommended. Option (c) is false because private methods are not inherited and thus cannot be overridden.

2.  **Question:** Consider the following Java code snippets:
    ```java
    class Animal {
        public Animal() {
            System.out.println("Animal constructor");
        }
        public void makeSound() {
            System.out.println("Animal makes a sound");
        }
    }

    class Dog extends Animal {
        public Dog() {
            System.out.println("Dog constructor");
        }
        @Override
        public void makeSound() {
            System.out.println("Woof!");
        }
    }

    public class Test {
        public static void main(String[] args) {
            Dog myDog = new Dog();
            myDog.makeSound();
        }
    }
    ```
    What will be the output when the `main` method of `Test` is executed?
    a)  Animal constructor
        Dog constructor
        Animal makes a sound
    b)  Animal constructor
        Dog constructor
        Woof!
    c)  Dog constructor
        Woof!
    d)  Compilation Error

    **Correct Answer:** b) Animal constructor
        Dog constructor
        Woof!
    **Explanation:** When `new Dog()` is called, the `Dog` constructor is executed. Since `Dog` extends `Animal`, the `Animal` class's no-argument constructor is implicitly called first by `super();` (even if not explicitly written). So, "Animal constructor" prints, then "Dog constructor" prints. After instantiation, `myDog.makeSound()` is called. Because `Dog` has overridden the `makeSound()` method, the `Dog`'s specific implementation ("Woof!") is executed.

#### AI generation note
Create a 10-minute animated video explaining inheritance. Start with a visual analogy (e.g., a family tree or a blueprint for a house and specific house designs). Show `Vehicle` as the superclass with fields/methods, then `Car` and `Motorcycle` extending it, visually demonstrating inherited members. Use side-by-side code comparisons to clearly differentiate method overriding (same signature, different implementation) from method overloading (same name, different parameters). Animate the flow of control when `super()` is called in a constructor and when `super.method()` is used. Include a visual warning for common mistakes like forgetting `super()` or incorrect method signatures.
**Interactive element:** A drag-and-drop exercise where learners match code snippets to "overriding" or "overloading" categories.
**Accessibility requirements:** Captions, alt text for all diagrams, and a full transcript.

---

### Chapter 4.2 — Polymorphism: Many Forms, One Interface

#### Learning objectives
*   Define polymorphism and distinguish between compile-time and runtime polymorphism.
*   Explain the concept of upcasting and demonstrate its practical application.
*   Understand the necessity and risks associated with downcasting, and learn to use the `instanceof` operator for safe type checking.
*   Apply polymorphism to work with collections of objects of different, but related, types.
*   Describe dynamic method dispatch and how the Java Virtual Machine (JVM) resolves method calls at runtime.

#### Detailed lesson content
Polymorphism, another cornerstone of OOP, literally means "many forms." In Java, it refers to the ability of an object to take on many forms, specifically, the ability of a reference variable to refer to objects of different types at different times. More precisely, it allows objects of different classes to be treated as objects of a common type (their superclass or an interface they implement). This powerful concept enables flexible and extensible code, allowing you to write generic code that can operate on a variety of specific objects.

There are two main types of polymorphism in Java:
1.  **Compile-time Polymorphism (Static Polymorphism):** Achieved through method overloading. The compiler determines which overloaded method to call based on the method signature (number, type, and order of parameters) at compile time.
2.  **Runtime Polymorphism (Dynamic Polymorphism):** Achieved through method overriding. The JVM determines which overridden method to call based on the actual type of the object (not the reference type) at runtime. This is the primary focus when we discuss polymorphism in the context of inheritance.

The core idea behind runtime polymorphism is **upcasting**. Upcasting occurs when you assign an object of a subclass to a reference variable of its superclass type. For example, if `Car` extends `Vehicle`, you can write:
```java
Vehicle myVehicle = new Car("Honda", 4);
```
Here, `myVehicle` is a reference variable of type `Vehicle`, but it points to an actual `Car` object. This is always safe because a `Car` *is a* `Vehicle`, meaning it has all the members of `Vehicle` (and potentially more). When you call a method on `myVehicle`, say `myVehicle.start()`, the JVM uses **dynamic method dispatch** to determine which `start()` method to execute. It looks at the *actual type of the object* (which is `Car`), not the type of the reference variable (`Vehicle`). If `Car` has overridden `start()`, the `Car`'s `start()` method will be invoked. If `Car` has not overridden `start()`, the `Vehicle`'s `start()` method will be invoked. This dynamic binding at runtime is what makes polymorphism so flexible.

Let's expand on our `Vehicle` and `Car` example:
```java
class Vehicle {
    public void service() {
        System.out.println("Generic vehicle service.");
    }
}

class Car extends Vehicle {
    @Override
    public void service() {
        System.out.println("Car specific service: oil change, tire rotation.");
    }

    public void wash() {
        System.out.println("Washing the car.");
    }
}

class Motorcycle extends Vehicle {
    @Override
    public void service() {
        System.out.println("Motorcycle specific service: chain lubrication, brake check.");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Vehicle v1 = new Car();         // Upcasting: Vehicle reference, Car object
        Vehicle v2 = new Motorcycle();  // Upcasting: Vehicle reference, Motorcycle object
        Vehicle v3 = new Vehicle();     // Vehicle reference, Vehicle object

        // All can be treated as Vehicle, but specific service() is called
        v1.service(); // Output: Car specific service: oil change, tire rotation.
        v2.service(); // Output: Motorcycle specific service: chain lubrication, brake check.
        v3.service(); // Output: Generic vehicle service.

        // v1.wash(); // COMPILE ERROR: Vehicle reference does not 'see' wash() method
    }
}
```
Notice that even though `v1` refers to a `Car` object, you cannot directly call `v1.wash()` because the `Vehicle` reference type does not "know" about the `wash()` method, which is specific to `Car`. The reference type determines what methods *can be called*, while the object type determines *which implementation* of an overridden method will be executed.

Sometimes, after upcasting, you might need to access methods or fields specific to the subclass type. This is where **downcasting** comes in. Downcasting involves casting a superclass reference back to its subclass type.
```java
Vehicle myVehicle = new Car("Ford", 2); // Upcast
// ... later in the code ...
if (myVehicle instanceof Car) { // Check if it's actually a Car object
    Car myCar = (Car) myVehicle; // Downcast
    myCar.wash(); // Now you can call Car-specific methods
} else {
    System.out.println("Not a Car object, cannot wash.");
}
```
Downcasting is inherently risky because if the object referenced by the superclass variable is *not* actually an instance of the target subclass (or a subclass of it), a `ClassCastException` will be thrown at runtime. To prevent this, Java provides the **`instanceof` operator**. This operator checks if an object is an instance of a particular class or an instance of a subclass of that class. It returns `true` or `false`, allowing for safe downcasting. In Java 16 and later, `instanceof` can be used with pattern matching, simplifying the code: `if (myVehicle instanceof Car myCar) { myCar.wash(); }`.

Polymorphism is incredibly useful when working with collections. Imagine you have a list of various `Vehicle` types that all need servicing. You can create an `ArrayList<Vehicle>` and add `Car`, `Motorcycle`, and `Truck` objects to it. Then, you can iterate through the list and call `service()` on each `Vehicle` reference. Due to polymorphism, the correct `service()` method (e.g., `Car`'s `service()`, `Motorcycle`'s `service()`) will be invoked for each object automatically, without needing explicit `if-else` checks for each type. This makes your code much cleaner and more scalable.

```java
import java.util.ArrayList;
import java.util.List;

public class PolymorphicCollectionDemo {
    public static void main(String[] args) {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(new Car());
        vehicles.add(new Motorcycle());
        vehicles.add(new Vehicle()); // Add a generic vehicle too

        for (Vehicle v : vehicles) {
            v.service(); // Polymorphic call
        }
    }
}
```
This demonstrates the power of polymorphism: treating different objects uniformly through a common interface (the `Vehicle` superclass in this case). It's a fundamental concept for designing flexible and maintainable object-oriented systems. Common mistakes include forgetting that the reference type limits accessible methods (even if the object has them) and attempting unsafe downcasts without `instanceof`, leading to runtime exceptions. Always prioritize upcasting and only downcast when absolutely necessary and always with `instanceof` checks.

#### Key concepts
*   **Polymorphism:** The ability of an object to take on many forms; specifically, a reference variable can refer to objects of different types at different times.
*   **Compile-time Polymorphism (Static Polymorphism):** Achieved through method overloading, resolved by the compiler.
*   **Runtime Polymorphism (Dynamic Polymorphism):** Achieved through method overriding, resolved by the JVM at runtime.
*   **Upcasting:** Assigning a subclass object to a superclass reference variable (e.g., `Vehicle v = new Car();`). Always safe.
*   **Dynamic Method Dispatch:** The mechanism by which the JVM determines which overridden method to execute at runtime, based on the actual type of the object.
*   **Downcasting:** Casting a superclass reference back to its subclass type (e.g., `Car c = (Car) v;`). Potentially unsafe.
*   **`instanceof` operator:** Used to check if an object is an instance of a particular class or an instance of a subclass, primarily for safe downcasting.
*   **`ClassCastException`:** A runtime exception thrown if an invalid downcast is attempted.

#### Hands-on activity
**Objective:** Apply polymorphism to manage a collection of different `Shape` objects.

1.  **Reuse your `Shape`, `Circle`, and `Rectangle` classes** from the previous chapter. Ensure `Shape` has a `calculateArea()` method and `Circle` and `Rectangle` override it.

2.  **Create a `ShapeManager` class** with a `main` method.
    *   Inside `main`, create an `ArrayList` that can hold `Shape` objects: `List<Shape> shapes = new ArrayList<>();`.
    *   Add at least one `Circle` object and one `Rectangle` object to this `shapes` list.
    *   Add a generic `Shape` object to the list as well.
    *   Iterate through the `shapes` list using a `for-each` loop.
    *   Inside the loop, for each `Shape` object, call its `displayColor()` method and its `calculateArea()` method. Observe how the correct `calculateArea()` implementation is called for `Circle` and `Rectangle`.
    *   **Challenge:** Inside the loop, try to downcast a `Shape` to a `Circle` and call a `Circle`-specific method (e.g., `displayDetails()` if you added it). Use the `instanceof` operator to safely perform the downcast.

```java
import java.util.ArrayList;
import java.util.List;

// Reuse Shape.java, Circle.java, Rectangle.java from Chapter 4.1
// Make sure they are in the same package or properly imported.

public class ShapeManager {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();

        // Add various shape objects (upcasting happens automatically)
        shapes.add(new Circle("Red", 7.0));
        shapes.add(new Rectangle("Yellow", 12.0, 5.0));
        shapes.add(new Circle("Purple", 3.5));
        shapes.add(new Shape("Gray")); // A generic shape

        System.out.println("Processing all shapes in the list:");
        for (Shape s : shapes) {
            System.out.println("---");
            s.displayColor(); // Calls Shape's displayColor()
            System.out.println("Calculated Area: " + s.calculateArea()); // Polymorphic call

            // Challenge: Safely downcast and call a specific method
            if (s instanceof Circle) {
                Circle c = (Circle) s; // Safe downcast
                System.out.println("This is a Circle with radius: " + c.radius);
                // c.displayDetails(); // If you have this method in Circle
            } else if (s instanceof Rectangle) {
                Rectangle r = (Rectangle) s; // Safe downcast
                System.out.println("This is a Rectangle with length " + r.length + " and width " + r.width);
                // r.displayDetails(); // If you have this method in Rectangle
            } else {
                System.out.println("This is a generic Shape.");
            }
        }
    }
}
```

#### Assessment idea
1.  **Question:** Consider the following code:
    ```java
    class A {
        public void print() {
            System.out.println("Class A");
        }
    }

    class B extends A {
        @Override
        public void print() {
            System.out.println("Class B");
        }
        public void specificB() {
            System.out.println("Specific to B");
        }
    }

    public class PolyTest {
        public static void main(String[] args) {
            A obj = new B();
            obj.print();
            // obj.specificB(); // Line X
        }
    }
    ```
    What will be the output of `obj.print()`? What will happen if `// obj.specificB();` (Line X) is uncommented and compiled?
    a)  Output: "Class A". Line X will compile and run, printing "Specific to B".
    b)  Output: "Class B". Line X will cause a compilation error.
    c)  Output: "Class A". Line X will cause a `ClassCastException` at runtime.
    d)  Output: "Class B". Line X will compile but do nothing.

    **Correct Answer:** b) Output: "Class B". Line X will cause a compilation error.
    **Explanation:** `A obj = new B();` is an upcast. The reference type is `A`, but the object type is `B`. When `obj.print()` is called, dynamic method dispatch ensures that the `print()` method of the actual object type (`B`) is executed, so "Class B" is printed. Line X, `obj.specificB()`, will cause a compilation error because the reference variable `obj` is of type `A`, and class `A` does not define a `specificB()` method. The compiler only "sees" the methods available in the reference type `A`.

2.  **Question:** When is it appropriate to use the `instanceof` operator in Java?
    a)  To check if two objects are equal in value.
    b)  To determine the memory address of an object.
    c)  To safely perform a downcast from a superclass reference to a subclass reference.
    d)  To compare the performance of different object creation methods.

    **Correct Answer:** c) To safely perform a downcast from a superclass reference to a subclass reference.
    **Explanation:** The `instanceof` operator is specifically designed to check if an object is an instance of a particular class or an instance of a subclass. This check is crucial before attempting a downcast, as an incorrect downcast would result in a `ClassCastException` at runtime. Options (a), (b), and (d) describe other functionalities not related to `instanceof`.

#### AI generation note
Create a 12-minute interactive coding demo focused on runtime polymorphism. Start by visually explaining upcasting with an animated diagram showing a `Car` object being referenced by a `Vehicle` variable. Demonstrate dynamic method dispatch by highlighting the `service()` method call and showing the JVM "looking up" the actual object type. Then, present a clear, step-by-step live coding example of safe downcasting using `instanceof`, showing what happens with and without the check (e.g., `ClassCastException`). Conclude with a practical scenario of processing a `List<Vehicle>` with different concrete types.
**Interactive element:** An in-browser coding exercise where learners complete a `for` loop to process a polymorphic list, including a safe downcast.
**Accessibility requirements:** Live captions during coding, clear audio, and a full transcript.

---

### Chapter 4.3 — Abstract Classes and Interfaces: Designing for Abstraction

#### Learning objectives
*   Define abstract classes and abstract methods, and explain when to use them.
*   Understand the rules and restrictions for creating and extending abstract classes.
*   Define interfaces and explain their role in defining contracts and achieving multiple inheritance of type.
*   Differentiate between abstract classes and interfaces, identifying their key similarities and differences.
*   Demonstrate the use of the `implements` keyword and understand `default` and `static` methods in interfaces (Java 8+).

#### Detailed lesson content
As we design more complex systems, we often encounter situations where a class represents a general concept that shouldn't be instantiated directly, or where we want to define a contract for behavior without providing a full implementation. This is where **abstract classes** and **interfaces** become invaluable tools for achieving abstraction. Abstraction focuses on showing only essential information and hiding the complex implementation details.

An **abstract class** is a class that cannot be instantiated directly; it must be subclassed. You declare a class as abstract using the `abstract` keyword: `public abstract class Shape { ... }`. Abstract classes can have both concrete (implemented) methods and **abstract methods**. An abstract method is a method declared without an implementation (no method body), also using the `abstract` keyword: `public abstract double calculateArea();`. If a class contains even one abstract method, the class itself must be declared abstract. Conversely, an abstract class can exist without any abstract methods, though this is less common. The purpose of an abstract method is to force concrete subclasses to provide their own specific implementation for that method. This ensures that all concrete subclasses adhere to a certain contract of behavior.

Here are key characteristics of abstract classes:
*   They can have constructors, but they are called by subclasses using `super()`.
*   They can have instance variables and static variables.
*   They can have concrete methods (with implementations) and abstract methods (without implementations).
*   A subclass of an abstract class must either implement all its inherited abstract methods or declare itself abstract.
*   A class can only extend one abstract class (due to Java's single inheritance model for classes).

Consider our `Shape` example. A generic `Shape` doesn't have a concrete `calculateArea()` method, as the formula depends on the specific shape. This makes `Shape` a perfect candidate for an abstract class:
```java
public abstract class Shape {
    String color;

    public Shape(String color) {
        this.color = color;
    }

    public void displayColor() {
        System.out.println("Shape color: " + color);
    }

    // An abstract method - no body, must be implemented by concrete subclasses
    public abstract double calculateArea();
}

public class Circle extends Shape {
    double radius;
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    @Override
    public double calculateArea() { // Must implement abstract method
        return Math.PI * radius * radius;
    }
}
// You cannot do: Shape s = new Shape("Green"); // Compile error!
```

**Interfaces**, on the other hand, are even more abstract. An interface defines a contract: a set of methods that a class must implement if it "implements" the interface. You declare an interface using the `interface` keyword: `public interface Drivable { ... }`. Before Java 8, all methods in an interface were implicitly `public abstract`, and all fields were implicitly `public static final` (constants). Interfaces represent a "can-do" or "has-a-capability" relationship, rather than an "is-a" relationship of inheritance. A class uses the `implements` keyword to indicate that it adheres to an interface's contract.

Key characteristics of interfaces:
*   They cannot have constructors.
*   Fields are implicitly `public static final`.
*   Methods (before Java 8) were implicitly `public abstract`.
*   A class can implement multiple interfaces, allowing for "multiple inheritance of type."
*   From Java 8 onwards, interfaces can have `default` methods (with implementations) and `static` methods. `default` methods provide a default implementation that implementing classes can use or override. `static` methods are utility methods tied to the interface itself.

Example of an interface:
```java
public interface Drivable {
    void startEngine();
    void stopEngine();
    void accelerate(int speed);

    // Java 8+ default method
    default void honk() {
        System.out.println("Default honk sound!");
    }

    // Java 8+ static method
    static String getVehicleType() {
        return "Generic Drivable Vehicle";
    }
}

public class Car implements Drivable {
    @Override
    public void startEngine() {
        System.out.println("Car engine started.");
    }
    @Override
    public void stopEngine() {
        System.out.println("Car engine stopped.");
    }
    @Override
    public void accelerate(int speed) {
        System.out.println("Car accelerating to " + speed + " mph.");
    }
    // Car can optionally override honk() or use the default
    @Override
    public void honk() {
        System.out.println("Car specific honk!");
    }
}
```

**Differences between Abstract Classes and Interfaces:**

| Feature               | Abstract Class                                  | Interface (pre-Java 8)                                | Interface (Java 8+)                                    |
| :-------------------- | :---------------------------------------------- | :---------------------------------------------------- | :----------------------------------------------------- |
| **Type of members**   | Abstract and concrete methods, fields, constructors | Only abstract methods (implicitly public), constants (implicitly public static final) | Abstract, default, static methods, constants. Private methods (Java 9+). |
| **Inheritance**       | Can extend only one abstract class              | Can implement multiple interfaces                     | Can implement multiple interfaces                      |
| **Constructors**      | Can have constructors                           | Cannot have constructors                              | Cannot have constructors                               |
| **Access modifiers**  | Can have any access modifier for members        | All methods implicitly `public abstract`              | Methods can be `public abstract`, `default`, `static`, `private` (Java 9+) |
| **Purpose**           | Defines a common base for related classes, sharing code | Defines a contract for behavior, achieves loose coupling | Defines contract, provides default implementations for backward compatibility |

**When to use which?**
*   **Abstract Class:** Use when you want to provide a common base implementation for a group of closely related classes, sharing code and state, and where the "is-a" relationship is strong. You might need to define some common behavior while leaving other behaviors to be defined by subclasses.
*   **Interface:** Use when you want to define a contract for behavior that unrelated classes might share, or when you need to achieve multiple inheritance of behavior. Interfaces are excellent for achieving loose coupling and promoting a "plug-and-play" architecture.

Common mistakes include trying to instantiate an abstract class directly, forgetting to implement all abstract methods when creating a concrete subclass, or trying to add instance variables to an interface without making them `static final`. Understanding these differences and use cases is crucial for designing robust and flexible Java applications.

#### Key concepts
*   **Abstract Class:** A class that cannot be instantiated directly and may contain abstract methods. Used to provide a common base for related subclasses.
*   **Abstract Method:** A method declared without an implementation (no method body) in an abstract class. Concrete subclasses must provide an implementation.
*   **`abstract` keyword:** Used to declare an abstract class or an abstract method.
*   **Interface:** A blueprint of a class, defining a contract of methods that implementing classes must provide.
*   **`interface` keyword:** Used to declare an interface.
*   **`implements` keyword:** Used by a class to declare that it adheres to the contract defined by an interface.
*   **Multiple Inheritance of Type:** The ability of a class to implement multiple interfaces, gaining the contracts of all of them.
*   **`default` methods (Java 8+):** Methods in an interface that have a default implementation, which implementing classes can use or override.
*   **`static` methods (Java 8+):** Utility methods in an interface that belong to the interface itself and can be called directly on the interface.

#### Hands-on activity
**Objective:** Refactor the `Shape` hierarchy using an abstract class and introduce an interface for additional capabilities.

1.  **Modify `Shape` to be an abstract class:**
    *   Change `class Shape` to `public abstract class Shape`.
    *   Change `public double calculateArea()` to `public abstract double calculateArea();` (remove the method body).

2.  **Create an interface `Resizable`:**
    *   Define a method `void resize(double factor);`

3.  **Modify `Circle` and `Rectangle`:**
    *   Ensure they `extend` `Shape` and correctly implement the `calculateArea()` method.
    *   Make `Circle` **implement** the `Resizable` interface.
    *   Implement the `resize(double factor)` method in `Circle` to multiply its `radius` by the `factor`.

4.  **Test your classes:** In a `main` method:
    *   Try to create `new Shape("Red")` (it should cause a compile error).
    *   Create instances of `Circle` and `Rectangle`.
    *   Call `calculateArea()` on both.
    *   For the `Circle` object, call `resize(2.0)` and then `calculateArea()` again to see the effect.

```java
// AbstractShape.java
public abstract class AbstractShape { // Changed to abstract
    String color;

    public AbstractShape(String color) {
        this.color = color;
    }

    public void displayColor() {
        System.out.println("Shape color: " + color);
    }

    public abstract double calculateArea(); // Abstract method
}

// Resizable.java
public interface Resizable {
    void resize(double factor);
    // Optional: add a default method for demonstration
    default void printResizeMessage(double factor) {
        System.out.println("Resizing by factor: " + factor);
    }
}

// Circle.java (modified)
public class Circle extends AbstractShape implements Resizable { // Implements Resizable
    double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public void resize(double factor) { // Implement Resizable method
        printResizeMessage(factor); // Call default interface method
        this.radius *= factor;
        System.out.println("New radius: " + this.radius);
    }
}

// Rectangle.java (modified)
public class Rectangle extends AbstractShape { // Does not implement Resizable
    double length;
    double width;

    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }
}

// Main.java (for testing)
public class AbstractionDemo {
    public static void main(String[] args) {
        // AbstractShape s = new AbstractShape("Blue"); // Compile error: cannot instantiate abstract class

        Circle myCircle = new Circle("Red", 5.0);
        System.out.println("Initial Circle Area: " + myCircle.calculateArea());
        myCircle.resize(1.5); // Call interface method
        System.out.println("Resized Circle Area: " + myCircle.calculateArea());
        System.out.println("---");

        Rectangle myRectangle = new Rectangle("Green", 10.0, 4.0);
        System.out.println("Rectangle Area: " + myRectangle.calculateArea());
        // myRectangle.resize(2.0); // Compile error: Rectangle does not implement Resizable
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements correctly describes a key difference between abstract classes and interfaces in Java (pre-Java 8)?
    a)  Abstract classes can have constructors, while interfaces cannot.
    b)  Interfaces can have concrete methods, while abstract classes cannot.
    c)  A class can extend multiple abstract classes, but only implement one interface.
    d)  Abstract classes can only have abstract methods, while interfaces can have both abstract and concrete methods.

    **Correct Answer:** a) Abstract classes can have constructors, while interfaces cannot.
    **Explanation:** Abstract classes can have constructors that are called by their subclasses. Interfaces, by definition, define a contract and do not have constructors. Option (b) is incorrect; abstract classes can have concrete methods, and pre-Java 8 interfaces could only have abstract methods. Option (c) is incorrect; Java supports single inheritance for classes (including abstract classes) but multiple inheritance of type for interfaces. Option (d) is incorrect; abstract classes can have both abstract and concrete methods, and pre-Java 8 interfaces could only have abstract methods.

2.  **Question:** You are designing a system for different types of employees (e.g., `SalariedEmployee`, `HourlyEmployee`). All employees must have a `calculatePay()` method, but the implementation varies. Additionally, some employees might be `Managable` (can `delegateTask()`), and some might be `Trainable` (can `attendTraining()`). Which OOP constructs would be most appropriate for `Employee`, `Managable`, and `Trainable`?
    a)  `Employee` as a concrete class, `Managable` and `Trainable` as abstract classes.
    b)  `Employee` as an interface, `Managable` and `Trainable` as interfaces.
    c)  `Employee` as an abstract class, `Managable` and `Trainable` as interfaces.
    d)  All three as concrete classes.

    **Correct Answer:** c) `Employee` as an abstract class, `Managable` and `Trainable` as interfaces.
    **Explanation:** `Employee` should be an abstract class because it represents a general concept that shouldn't be instantiated directly (you instantiate `SalariedEmployee` or `HourlyEmployee`). It also has a common method (`calculatePay()`) that needs a varying implementation, making it a perfect abstract method. `Managable` and `Trainable` represent capabilities that different, potentially unrelated, employee types might have. Since a class can implement multiple interfaces, using interfaces for these capabilities allows for flexible design (e.g., a `Manager` could implement both `Managable` and `Trainable`).

#### AI generation note
Generate a 10-minute mixed-media lesson. Start with an animated comparison table highlighting the key differences between abstract classes and interfaces (constructors, multiple inheritance, method types). Then, switch to a live coding session demonstrating the creation of an `abstract Animal` class with an `abstract makeSound()` method. Follow this by creating an `interface Flyable` with a `default` `takeOff()` method. Show a `Bird` class extending `Animal` and implementing `Flyable`, demonstrating both overriding the abstract method and using/overriding the default method. Emphasize common compilation errors when rules are broken (e.g., not implementing an abstract method).
**Interactive element:** A mini-quiz with 3 questions asking learners to identify whether a given scenario is better suited for an abstract class or an interface.
**Accessibility requirements:** High-contrast visuals for code, clear voiceover, and a downloadable code example.

---

### Chapter 4.4 — Inner Classes: Nested Structures for Encapsulation and Organization

#### Learning objectives
*   Define inner classes and explain their purpose in Java programming.
*   Differentiate between the four main types of inner classes: member, local, anonymous, and static nested classes.
*   Demonstrate how to declare, instantiate, and use each type of inner class.
*   Understand the access rules for inner classes to members of their enclosing class.
*   Identify practical use cases for each type of inner class, such as event handling or custom iterators.

#### Detailed lesson content
In Java, you can define a class within another class; these are known as **inner classes** or **nested classes**. The primary reasons for using inner classes are to increase encapsulation, improve code readability by logically grouping classes that are used only in one place, and to create more maintainable code. Inner classes have a special relationship with their enclosing (outer) class, often having access to the outer class's members, including private ones. This tight coupling can be very useful for certain design patterns.

There are four main types of inner classes, each with distinct characteristics and use cases:

1.  **Member Inner Classes:**
    *   Declared directly within another class, but not `static`.
    *   An instance of a member inner class is always associated with an instance of its outer class. You cannot create a member inner class object without first creating an outer class object.
    *   They have access to all members (fields and methods, including private ones) of the outer class instance that created them.
    *   Instantiation syntax: `OuterClass.InnerClass innerObj = outerObj.new InnerClass();`
    *   **Use Case:** Helper classes that are tightly coupled to the outer class and need to access its state. For example, an `Iterator` for a custom collection class.

    ```java
    class Outer {
        private String outerMessage = "Hello from Outer!";
        class Inner { // Member Inner Class
            public void display() {
                System.out.println(outerMessage); // Accesses outer class private member
            }
        }
        public void createAndDisplayInner() {
            Inner inner = new Inner();
            inner.display();
        }
    }
    // In main:
    // Outer outer = new Outer();
    // Outer.Inner inner = outer.new Inner(); // Specific instantiation syntax
    // inner.display();
    ```

2.  **Local Inner Classes:**
    *   Declared inside a method, constructor, or any block.
    *   Their scope is strictly limited to the block in which they are defined.
    *   They cannot be declared `static`.
    *   They can access `final` or effectively `final` local variables and parameters of the enclosing block. "Effectively final" means a variable whose value is never changed after it is initialized.
    *   **Use Case:** When a class is needed only once within a specific method or block, to encapsulate logic that's very specific to that context.

    ```java
    class Calculator {
        public void performOperation(int a, int b) {
            final String operationName = "Addition"; // Effectively final
            class Adder { // Local Inner Class
                public int add() {
                    System.out.println("Performing " + operationName);
                    return a + b; // Accesses effectively final local variables
                }
            }
            Adder adder = new Adder();
            System.out.println("Result: " + adder.add());
        }
    }
    // In main:
    // Calculator calc = new Calculator();
    // calc.performOperation(10, 20);
    ```

3.  **Anonymous Inner Classes:**
    *   Classes without a name. They are declared and instantiated in a single expression.
    *   They are used for one-time implementations of an interface or extensions of a class.
    *   They are often used for event handling (e.g., `ActionListener`), `Runnable` objects, or custom comparators.
    *   Cannot have explicit constructors, but can take arguments to pass to the superclass constructor.
    *   Can access `final` or effectively `final` local variables of the enclosing scope.
    *   **Use Case:** Short, single-use implementations of interfaces or abstract classes, reducing boilerplate code.

    ```java
    interface Greeter {
        void greet();
    }
    class App {
        public void start() {
            Greeter englishGreeter = new Greeter() { // Anonymous Inner Class
                @Override
                public void greet() {
                    System.out.println("Hello!");
                }
            };
            englishGreeter.greet();

            // Anonymous inner class extending a concrete class
            Thread myThread = new Thread(new Runnable() {
                @Override
                public void run() {
                    System.out.println("Running in an anonymous thread.");
                }
            });
            myThread.start();
        }
    }
    ```

4.  **Static Nested Classes:**
    *   Declared with the `static` keyword within another class.
    *   Unlike other inner classes, a static nested class does **not** have an implicit association with an instance of its outer class. It behaves like a top-level class but is nested for packaging convenience.
    *   It can access static members of the outer class, but **not** non-static (instance) members directly.
    *   Instantiation syntax: `OuterClass.StaticNestedClass nestedObj = new OuterClass.StaticNestedClass();`
    *   **Use Case:** When a nested class needs to be logically grouped with its outer class but does not require access to the outer class's instance members. Often used for building blocks like `Node` in a `LinkedList` or `Entry` in a `HashMap`.

    ```java
    class DataStructure {
        private static String structureName = "LinkedList";
        private int instanceCount = 0; // Not accessible by StaticNode directly

        static class Node { // Static Nested Class
            String data;
            Node next;

            public Node(String data) {
                this.data = data;
                System.out.println("Node created for " + structureName); // Accesses static outer member
                // System.out.println(instanceCount); // Compile error: cannot access non-static member
            }
        }
    }
    // In main:
    // DataStructure.Node head = new DataStructure.Node("First");
    ```

**Common Mistakes and Considerations:**
*   **`this` keyword:** In an inner class, `this` refers to the inner class instance. To refer to the outer class instance, use `OuterClass.this`.
*   **Memory Leaks:** Non-static inner classes implicitly hold a reference to their outer class instance. If the inner class object outlives the outer class object, it can prevent the outer object from being garbage collected, leading to memory leaks. Static nested classes avoid this issue as they don't hold an outer instance reference.
*   **Clarity vs. Complexity:** While useful, overusing inner classes can make code harder to read and understand. Use them judiciously where the logical grouping and encapsulation benefits are clear.

Understanding inner classes adds another dimension to your object-oriented design toolkit, allowing for more precise control over scope, access, and organization within your Java applications.

#### Key concepts
*   **Inner Class (Nested Class):** A class defined within another class.
*   **Member Inner Class:** A non-static class defined directly inside another class, associated with an outer class instance, and can access all outer class members.
*   **Local Inner Class:** A class defined inside a method, constructor, or block, with scope limited to that block, and can access effectively final local variables.
*   **Anonymous Inner Class:** A class without a name, declared and instantiated in a single expression, used for one-time implementation of an interface or extension of a class.
*   **Static Nested Class:** A class defined inside another class with the `static` keyword, not associated with an outer class instance, and can only access static members of the outer class.
*   **Encapsulation:** The bundling of data and methods that operate on the data within a single unit, and restricting direct access to some of the object's components.
*   **Effectively Final:** A local variable or parameter whose value is never changed after it is initialized, allowing it to be accessed by local or anonymous inner classes.

#### Hands-on activity
**Objective:** Implement different types of inner classes to understand their syntax and access rules.

1.  **Create an `OuterClass`:**
    *   Add a `private String outerField = "Outer data";`.
    *   **Implement a Member Inner Class `MemberInner`:**
        *   Inside `MemberInner`, add a method `void displayOuterField()` that prints `outerField`.
    *   Add a method `void useLocalInner(int value)`:
        *   Inside this method, declare a `final String message = "Local message: ";`.
        *   **Implement a Local Inner Class `LocalInner`:**
            *   Inside `LocalInner`, add a method `void printInfo()` that prints `message + value`.
            *   Instantiate `LocalInner` and call `printInfo()`.
    *   Add a method `void useAnonymousInner()`:
        *   Define an interface `Runnable` (or use `java.lang.Runnable`).
        *   **Implement an Anonymous Inner Class** that implements `Runnable` and prints "Running from anonymous inner class!".
        *   Create a `Thread` with this `Runnable` and start it.

2.  **Create a `StaticOuterClass`:**
    *   Add a `private static String staticOuterField = "Static outer data";`.
    *   Add a `private String instanceOuterField = "Instance outer data";`.
    *   **Implement a Static Nested Class `StaticNested`:**
        *   Inside `StaticNested`, add a method `void displayStaticOuterField()` that prints `staticOuterField`.
        *   Try to access `instanceOuterField` (it should cause a compile error).

3.  **Test in `main`:**
    *   Instantiate `OuterClass` and then `MemberInner` using the correct syntax. Call `displayOuterField()`.
    *   Call `useLocalInner(100)` on the `OuterClass` instance.
    *   Call `useAnonymousInner()` on the `OuterClass` instance.
    *   Instantiate `StaticOuterClass.StaticNested` directly and call `displayStaticOuterField()`.

```java
// OuterClass.java
class OuterClass {
    private String outerField = "Outer data";
    public int outerNumber = 10;

    // 1. Member Inner Class
    class MemberInner {
        public void displayOuterField() {
            System.out.println("MemberInner accessing outerField: " + outerField);
            System.out.println("MemberInner accessing outerNumber: " + outerNumber);
            System.out.println("MemberInner's 'this': " + this);
            System.out.println("OuterClass's 'this': " + OuterClass.this);
        }
    }

    // 2. Local Inner Class
    public void useLocalInner(int value) {
        final String message = "Local message: "; // Effectively final
        // value is also effectively final here

        class LocalInner {
            public void printInfo() {
                System.out.println("LocalInner accessing: " + message + value);
                // Cannot access outerField directly without OuterClass.this if LocalInner is static (but it can't be)
            }
        }
        LocalInner local = new LocalInner();
        local.printInfo();
    }

    // 3. Anonymous Inner Class
    public void useAnonymousInner() {
        System.out.println("Using Anonymous Inner Class for Runnable:");
        Thread myThread = new Thread(new Runnable() { // Anonymous class implementing Runnable
            @Override
            public void run() {
                System.out.println("Running from anonymous inner class!");
                // Can access outerField if it were effectively final or if OuterClass.this.outerField
                // For demonstration, let's just print its own message.
            }
        });
        myThread.start();
    }
}

// StaticOuterClass.java
class StaticOuterClass {
    private static String staticOuterField = "Static outer data";
    private String instanceOuterField = "Instance outer data (not accessible by StaticNested)";

    // 4. Static Nested Class
    static class StaticNested {
        public void displayStaticOuterField() {
            System.out.println("StaticNested accessing staticOuterField: " + staticOuterField);
            // System.out.println(instanceOuterField); // Compile error: cannot access non-static member
        }
    }
}

// Main.java (for testing)
public class InnerClassDemo {
    public static void main(String[] args) {
        // Member Inner Class Demo
        OuterClass outer = new OuterClass();
        OuterClass.MemberInner member = outer.new MemberInner(); // Correct instantiation
        member.displayOuterField();
        System.out.println("---");

        // Local Inner Class Demo
        outer.useLocalInner(200);
        System.out.println("---");

        // Anonymous Inner Class Demo
        outer.useAnonymousInner();
        try {
            Thread.sleep(100); // Give thread time to execute
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("---");

        // Static Nested Class Demo
        StaticOuterClass.StaticNested staticNested = new StaticOuterClass.StaticNested(); // Direct instantiation
        staticNested.displayStaticOuterField();
    }
}
```

#### Assessment idea
1.  **Question:** Which type of inner class in Java is declared without a name and is typically used for one-time implementations of an interface or extensions of a class?
    a)  Member Inner Class
    b)  Local Inner Class
    c)  Anonymous Inner Class
    d)  Static Nested Class

    **Correct Answer:** c) Anonymous Inner Class
    **Explanation:** Anonymous inner classes are unique because they do not have an explicit name. They are defined and instantiated at the same time, often used for concise, single-use implementations, such as event listeners or `Runnable` objects.

2.  **Question:** Consider the following code snippet:
    ```java
    class Outer {
        private int x = 10;
        static int y = 20;

        static class StaticNested {
            public void printValues() {
                // System.out.println(x); // Line A
                System.out.println(y);   // Line B
            }
        }
    }
    ```
    Which line(s) will cause a compilation error?
    a)  Line A only
    b)  Line B only
    c)  Both Line A and Line B
    d)  Neither Line A nor Line B

    **Correct Answer:** a) Line A only
    **Explanation:** A static nested class does not have an implicit association with an instance of its outer class. Therefore, it cannot directly access non-static (instance) members of the outer class, such as `x`. It can, however, access static members of the outer class, such as `y`. So, Line A will cause a compilation error, while Line B will compile successfully.

#### AI generation note
Create an 11-minute visual explanation and live coding demo for inner classes. Start with an animated diagram showing the hierarchical structure of an outer class and its various inner classes. For each type (member, local, anonymous, static nested), provide a distinct code example. Visually highlight the access rules for each type, showing which outer class members are accessible and which are not (especially for static nested classes vs. instance members). Use a clear analogy for anonymous inner classes, perhaps comparing them to a "one-off" custom tool. Demonstrate the `OuterClass.this` syntax for clarity.
**Interactive element:** A drag-and-drop exercise where learners match a code snippet of an inner class to its correct type.
**Accessibility requirements:** Visual cues for code changes, clear distinction between different inner class types using color coding, and a comprehensive transcript.

---

## Module 5: Exception Handling and Core APIs

This module will guide you through Java's robust mechanisms for handling unexpected events and introduce you to essential classes in the Java API that are fundamental for everyday programming tasks. You'll learn how to gracefully manage errors, work with strings efficiently, handle dates and times effectively, and seamlessly bridge the gap between primitive types and objects.

### Chapter 5.1 — Introduction to Exception Handling

#### Learning objectives
*   Differentiate between checked exceptions, unchecked exceptions, and errors in Java.
*   Implement `try-catch-finally` blocks to handle exceptions gracefully.
*   Understand the flow of control when an exception occurs and is caught.
*   Utilize the `throw` keyword to explicitly raise exceptions.
*   Identify and avoid common pitfalls in exception handling, such as overly broad catches.

#### Detailed lesson content
Welcome to a crucial aspect of writing robust Java applications: exception handling. In the world of programming, things don't always go as planned. A file might not exist, a network connection could drop, or a user might enter invalid data. These unexpected events, if not managed properly, can crash your program and lead to a poor user experience. Java provides a powerful, structured mechanism called exception handling to deal with these situations. An *exception* is an event that disrupts the normal flow of a program's instructions. When an error occurs within a method, the method creates an `Exception` object and hands it off to the runtime system. This process is called *throwing an exception*.

Java categorizes exceptions into three main types: checked exceptions, unchecked exceptions (runtime exceptions), and errors. Understanding the distinction is vital. *Checked exceptions* are those that the Java compiler forces you to acknowledge and handle. If a method might throw a checked exception, you must either catch it using a `try-catch` block or declare that your method throws it using the `throws` keyword in the method signature. Examples include `IOException` (for file operations) or `SQLException` (for database interactions). The compiler's insistence on handling these ensures that you, the programmer, are aware of potential issues that are recoverable. For instance, when you try to read from a file, the compiler knows that the file might not exist, and it will prompt you to handle this `FileNotFoundException`.

On the other hand, *unchecked exceptions*, which are subclasses of `RuntimeException`, do not require explicit handling or declaration. These typically represent programming errors that should ideally be prevented through careful coding and validation, rather than caught at runtime. Examples include `NullPointerException` (accessing a method or field on a `null` object), `ArrayIndexOutOfBoundsException` (accessing an array with an invalid index), or `ArithmeticException` (like division by zero). While you *can* catch these, the general philosophy is to fix the underlying bug that causes them. Lastly, *Errors* are serious problems that are usually external to the application and are generally unrecoverable, such as `OutOfMemoryError` or `StackOverflowError`. You typically don't catch errors; they indicate a severe system-level issue.

The core construct for handling exceptions is the `try-catch-finally` block. The `try` block encloses the code that might throw an exception. If an exception occurs within the `try` block, the normal execution flow is immediately interrupted, and the Java runtime looks for a matching `catch` block. A `catch` block specifies the type of exception it can handle and contains the code to execute when that specific exception is thrown. You can have multiple `catch` blocks, allowing you to handle different types of exceptions in different ways. The order of `catch` blocks matters: you should always catch more specific exceptions before more general ones. For example, `FileNotFoundException` should be caught before `IOException`, as `FileNotFoundException` is a subclass of `IOException`.

Consider a scenario where you're trying to parse a string into an integer, but the string isn't a valid number, or you're trying to access an array element beyond its bounds.

```java
public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        // Scenario 1: NumberFormatException
        String numberString = "abc";
        try {
            int number = Integer.parseInt(numberString); // This might throw NumberFormatException
            System.out.println("Parsed number: " + number);
        } catch (NumberFormatException e) {
            System.err.println("Error: Invalid number format for '" + numberString + "'. Please enter a valid integer.");
            System.err.println("Details: " + e.getMessage());
            // Common mistake: Ignoring the exception or just printing a generic message.
            // A better approach might be to log the full stack trace for debugging.
            // e.printStackTrace();
        }

        System.out.println("\n--- Moving to next scenario ---");

        // Scenario 2: ArrayIndexOutOfBoundsException
        int[] numbers = {10, 20, 30};
        try {
            System.out.println("Accessing element at index 1: " + numbers[1]);
            System.out.println("Accessing element at index 3: " + numbers[3]); // This will throw ArrayIndexOutOfBoundsException
            System.out.println("This line will not be executed if an exception occurs above.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.err.println("Error: Attempted to access array with an invalid index.");
            System.err.println("Details: " + e.getMessage());
            // In a real application, you might prompt the user for a valid index or log the error.
        } finally {
            // The finally block always executes, regardless of whether an exception occurred or was caught.
            // It's ideal for cleanup operations like closing resources.
            System.out.println("Finally block executed. This ensures cleanup happens.");
        }

        System.out.println("\nProgram continues after exception handling.");
    }
}
```
In the code above, the `finally` block is optional but extremely useful. Code within the `finally` block is guaranteed to execute, regardless of whether an exception was thrown or caught. This makes it the perfect place for cleanup operations, such as closing files, releasing network connections, or freeing up other system resources that were opened in the `try` block. Even if a `return` statement is encountered in the `try` or `catch` block, the `finally` block will still execute before the method returns.

You can also explicitly `throw` an exception using the `throw` keyword. This is useful when your code detects a situation that warrants an exception, even if the Java runtime hasn't thrown one automatically. For example, if a method receives an invalid argument, you might `throw new IllegalArgumentException("Invalid input value")`. If you `throw` a checked exception, your method must declare it using `throws` in its signature, or you must handle it within the method itself.

A common mistake beginners make is catching `Exception` (the superclass of all exceptions) too broadly. While `catch (Exception e)` will indeed catch any exception, it makes your code less specific and can hide underlying issues. It's generally better to catch specific exceptions and handle them appropriately. Another anti-pattern is to "swallow" exceptions by catching them and doing nothing (e.g., `catch (Exception e) { /* do nothing */ }`). This hides critical information and makes debugging incredibly difficult. Always log the exception or provide meaningful feedback to the user or system administrators. Remember, effective exception handling isn't just about preventing crashes; it's about providing clear, actionable feedback and maintaining the integrity of your application.

#### Key concepts
*   **Exception:** An event that disrupts the normal flow of a program.
*   **Error:** A serious, often unrecoverable problem that typically indicates a system-level issue.
*   **Checked Exception:** Exceptions that the compiler forces you to handle (e.g., `IOException`, `SQLException`).
*   **Unchecked Exception (Runtime Exception):** Exceptions that do not require explicit handling (e.g., `NullPointerException`, `ArrayIndexOutOfBoundsException`). Subclasses of `RuntimeException`.
*   **`try` block:** Encloses code that might throw an exception.
*   **`catch` block:** Handles a specific type of exception thrown in the `try` block.
*   **`finally` block:** Contains code that is guaranteed to execute, regardless of whether an exception occurred.
*   **`throw` keyword:** Used to explicitly raise an exception.
*   **`throws` keyword:** Used in a method signature to declare that the method might throw a checked exception.
*   **Call Stack:** The sequence of method calls that leads to the current point of execution. Exception stack traces show this.

#### Hands-on activity
**Activity: Refactoring for Robustness**

You are given a simple Java program that attempts to read an integer from the command line and perform a division. This program is fragile and will crash with `NumberFormatException` if the input isn't a number, or `ArithmeticException` if division by zero occurs.

**Starter Code:**
```java
public class FragileCalculator {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java FragileCalculator <number1> <number2>");
            return;
        }

        int num1 = Integer.parseInt(args[0]);
        int num2 = Integer.parseInt(args[1]);

        int result = num1 / num2;
        System.out.println("Result of division: " + result);
    }
}
```

**Task:**
Modify the `FragileCalculator` program to incorporate robust exception handling using `try-catch` blocks.
1.  Handle `NumberFormatException` if `args[0]` or `args[1]` cannot be parsed into an integer.
2.  Handle `ArithmeticException` if `num2` is zero.
3.  Add a `finally` block that always prints "Calculation attempt complete."
4.  Ensure that if an exception occurs, the program provides a user-friendly error message and continues to execute the `finally` block, rather than crashing.

#### Assessment idea
1.  **Question:** Consider the following Java code snippet:
    ```java
    public class ExceptionQuiz {
        public static void main(String[] args) {
            try {
                int[] arr = new int[5];
                System.out.println(arr[10]); // Line A
                String s = null;
                System.out.println(s.length()); // Line B
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Array error caught.");
            } catch (NullPointerException e) {
                System.out.println("Null pointer error caught.");
            } finally {
                System.out.println("Finally block executed.");
            }
            System.out.println("Program finished.");
        }
    }
    ```
    What will be the output of this program when executed?

    **Correct Answer and Explanation:**
    The output will be:
    ```
    Array error caught.
    Finally block executed.
    Program finished.
    ```
    **Explanation:**
    1.  The code inside the `try` block attempts to access `arr[10]`. Since `arr` has a size of 5 (indices 0-4), accessing index 10 will immediately throw an `ArrayIndexOutOfBoundsException` at Line A.
    2.  Once an exception is thrown, the `try` block's execution stops, and the Java runtime looks for a matching `catch` block.
    3.  The first `catch` block `catch (ArrayIndexOutOfBoundsException e)` matches the thrown exception. Its code `System.out.println("Array error caught.");` is executed.
    4.  The second `catch` block (`NullPointerException`) is skipped because the exception was already handled.
    5.  The `finally` block is guaranteed to execute, so `System.out.println("Finally block executed.");` is printed.
    6.  Finally, the program continues its normal flow after the `try-catch-finally` block, printing `System.out.println("Program finished.");`.
    *Note: Line B (`System.out.println(s.length());`) is never reached because the exception at Line A causes an immediate jump to the `catch` block.*

2.  **Question:** Which of the following statements about Java exceptions is TRUE?
    A) `NullPointerException` is a checked exception.
    B) A `finally` block will not execute if an uncaught exception occurs in the `try` block.
    C) You must catch `Error` types in a `try-catch` block.
    D) `IOException` is a checked exception, requiring explicit handling or declaration.

    **Correct Answer and Explanation:**
    D) `IOException` is a checked exception, requiring explicit handling or declaration.

    **Explanation:**
    *   A) `NullPointerException` is an *unchecked* exception (a `RuntimeException`), meaning the compiler does not force you to handle it.
    *   B) A `finally` block is *always* executed, even if an uncaught exception occurs (before the program terminates due to the uncaught exception). It's designed for cleanup regardless of the `try` block's outcome.
    *   C) `Error` types (like `OutOfMemoryError`) represent serious, unrecoverable problems, and while you *can* technically catch them, it's generally not recommended or useful as they indicate critical system failures.
    *   D) `IOException` is a classic example of a *checked* exception. Methods that might throw an `IOException` must either declare `throws IOException` or wrap the potentially problematic code in a `try-catch` block to handle it.

#### AI generation note
Create a 10-12 minute mixed-format lesson. Start with an animated visual explanation of what an exception is, showing a program's normal flow being interrupted and an exception object being created and "thrown." Use a clear diagram to illustrate the hierarchy of `Throwable`, `Exception`, `RuntimeException`, and `Error`. Then, transition to a live coding demo where an instructor walks through the `try-catch-finally` structure using the `FragileCalculator` example. Visually highlight which lines execute when an exception is thrown and caught, and when no exception occurs. Show how `e.printStackTrace()` helps with debugging. Emphasize common mistakes like catching `Exception` too broadly with a side-by-side comparison of good vs. bad practice. Include captions and alt text for all diagrams. The interactive element should be a drag-and-drop exercise where learners correctly place `try`, `catch`, and `finally` blocks around a piece of error-prone code.

### Chapter 5.2 — Custom Exceptions and `try-with-resources`

#### Learning objectives
*   Design and implement custom checked and unchecked exceptions.
*   Determine when to create a custom exception versus using a built-in one.
*   Utilize the `try-with-resources` statement for automatic resource management.
*   Understand the `AutoCloseable` interface and its role in `try-with-resources`.
*   Explain the concept of suppressed exceptions in the context of `try-with-resources`.

#### Detailed lesson content
Building upon our understanding of Java's built-in exception hierarchy, we now turn our attention to creating custom exceptions. While Java provides a rich set of standard exception classes, there will be times when your application logic requires more specific error reporting. Custom exceptions allow you to define domain-specific problems, making your code more readable, maintainable, and robust. Instead of throwing a generic `RuntimeException` like `IllegalArgumentException` when a specific business rule is violated, you can throw a `ProductNotFoundException` or `InsufficientFundsException`. This immediately communicates the nature of the problem to anyone reading or using your code, leading to clearer error handling and better application design.

To create a custom exception, you simply extend an existing exception class. If you want to create a *checked exception* (meaning the compiler will force callers to handle it), you typically extend `java.lang.Exception`. If you want to create an *unchecked exception* (a `RuntimeException` that callers are not forced to handle), you extend `java.lang.RuntimeException`. The choice between checked and unchecked custom exceptions follows the same guidelines as built-in exceptions: if the caller can reasonably recover from the exception, make it checked; if it indicates a programming error or a situation from which recovery is unlikely, make it unchecked.

Let's illustrate with an example. Suppose we're building a banking application and want to signal when an account has insufficient funds.

```java
// Custom Checked Exception
class InsufficientFundsException extends Exception {
    private double requiredAmount;
    private double availableBalance;

    public InsufficientFundsException(String message, double requiredAmount, double availableBalance) {
        super(message);
        this.requiredAmount = requiredAmount;
        this.availableBalance = availableBalance;
    }

    public double getRequiredAmount() {
        return requiredAmount;
    }

    public double getAvailableBalance() {
        return availableBalance;
    }
}

// Custom Unchecked Exception (less common for business logic, more for configuration/setup errors)
class InvalidConfigurationException extends RuntimeException {
    public InvalidConfigurationException(String message) {
        super(message);
    }
    public InvalidConfigurationException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class BankAccount {
    private double balance;
    private String accountNumber;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public void withdraw(double amount) throws InsufficientFundsException { // Declaring checked exception
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive."); // Using built-in unchecked exception
        }
        if (balance < amount) {
            throw new InsufficientFundsException(
                "Cannot withdraw " + amount + ". Insufficient funds.", amount, balance);
        }
        balance -= amount;
        System.out.println("Withdrew " + amount + ". New balance: " + balance);
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount myAccount = new BankAccount("12345", 100.00);

        try {
            myAccount.withdraw(50.00);
            myAccount.withdraw(70.00); // This will throw InsufficientFundsException
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction failed for account " + myAccount.accountNumber + ": " + e.getMessage());
            System.err.println("Required: " + e.getRequiredAmount() + ", Available: " + e.getAvailableBalance());
        } catch (IllegalArgumentException e) { // Catching built-in unchecked exception
            System.err.println("Withdrawal error: " + e.getMessage());
        }

        // Example of using custom unchecked exception (less common in direct business logic)
        try {
            if (System.getProperty("app.config") == null) {
                throw new InvalidConfigurationException("Application configuration not set.");
            }
        } catch (InvalidConfigurationException e) {
            System.err.println("Configuration issue: " + e.getMessage());
        }
    }
}
```
Notice how `InsufficientFundsException` provides specific details (required amount, available balance) that a generic `Exception` would not, making the error handling more informative.

Another significant enhancement in Java 7 for exception handling is the `try-with-resources` statement. Before Java 7, programmers had to manually ensure that resources like file streams, network sockets, or database connections were properly closed in a `finally` block to prevent resource leaks. This often led to verbose and error-prone code, especially when multiple resources needed to be managed. The `try-with-resources` statement simplifies this by automatically closing any resource that implements the `java.lang.AutoCloseable` interface (or `java.io.Closeable`, which extends `AutoCloseable`).

The syntax is straightforward: you declare the resource within the parentheses of the `try` statement. At the end of the `try` block (whether it completes normally or an exception is thrown), the resource's `close()` method is automatically invoked. This guarantees that resources are always released, even if exceptions occur.

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        String filePath = "example.txt"; // Make sure this file exists or create it for testing

        // Traditional way (pre-Java 7) - verbose and error-prone
        BufferedReader reader1 = null;
        try {
            reader1 = new BufferedReader(new FileReader(filePath));
            String line;
            while ((line = reader1.readLine()) != null) {
                System.out.println("Traditional: " + line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file (traditional): " + e.getMessage());
        } finally {
            if (reader1 != null) {
                try {
                    reader1.close(); // Must handle potential IOException on close
                } catch (IOException e) {
                    System.err.println("Error closing reader (traditional): " + e.getMessage());
                }
            }
        }

        System.out.println("\n--- Using try-with-resources ---");

        // try-with-resources (Java 7+) - concise and safe
        try (BufferedReader reader2 = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader2.readLine()) != null) {
                System.out.println("TWR: " + line);
            }
        } catch (IOException e) { // Catches exceptions from both readLine() and close()
            System.err.println("Error reading or closing file (TWR): " + e.getMessage());
        }

        // Multiple resources in try-with-resources
        System.out.println("\n--- Multiple resources in try-with-resources ---");
        try (FileReader fr = new FileReader(filePath);
             BufferedReader br = new BufferedReader(fr)) { // Resources are closed in reverse order of declaration
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println("Multiple TWR: " + line);
            }
        } catch (IOException e) {
            System.err.println("Error with multiple resources: " + e.getMessage());
        }
    }
}
```
In the `try-with-resources` example, the `BufferedReader` (and `FileReader`) will be automatically closed when the `try` block exits, even if an `IOException` occurs during `readLine()`. This is a massive improvement in terms of code clarity and safety.

A subtle but important concept related to `try-with-resources` is *suppressed exceptions*. If an exception is thrown within the `try` block, and then another exception is thrown while the resource's `close()` method is being invoked, the exception from the `try` block is the *primary* exception, and the exception from the `close()` method is *suppressed*. The primary exception is the one propagated to the `catch` block. You can retrieve suppressed exceptions using `Throwable.getSuppressed()`. This mechanism ensures that the original cause of the failure (from the `try` block) is not lost, while still providing access to any issues encountered during cleanup. This is a powerful feature for debugging complex resource management scenarios.

Common mistakes with `try-with-resources` include trying to use it with classes that don't implement `AutoCloseable` (which will result in a compile-time error) or incorrectly assuming that `close()` will handle all possible errors without needing a `catch` block (you still need `catch` for exceptions thrown *within* the `try` block or by the `close()` method itself, as the `catch` block handles both). Always remember that `try-with-resources` is about *automatic closing*, not *automatic handling* of exceptions.

#### Key concepts
*   **Custom Exception:** A user-defined exception class, typically extending `Exception` (for checked) or `RuntimeException` (for unchecked).
*   **`try-with-resources` Statement:** A Java 7+ construct that automatically closes resources that implement `AutoCloseable` at the end of the `try` block.
*   **`AutoCloseable` Interface:** An interface (part of `java.lang`) that defines a single method, `void close() throws Exception`. Resources implementing this interface can be used in `try-with-resources`.
*   **`Closeable` Interface:** An interface (part of `java.io`) that extends `AutoCloseable` and defines `void close() throws IOException`. Many I/O resources implement this.
*   **Suppressed Exception:** An exception that occurs during the automatic closing of a resource in a `try-with-resources` statement, when another exception was already thrown in the `try` block. The primary exception is propagated, and suppressed exceptions can be retrieved via `Throwable.getSuppressed()`.

#### Hands-on activity
**Activity: Building a File Processor with Custom Exceptions and `try-with-resources`**

You need to create a simple file processing utility. This utility should:
1.  Define a custom checked exception called `FileProcessingException` that takes a message and an optional `cause` (another `Throwable`).
2.  Define a custom `ResourceReader` class that implements `AutoCloseable`. This class should simulate reading a line from a resource and throw `IOException` if it's "closed" or if `readLine()` is called too many times (e.g., after 3 reads). Its `close()` method should print a message indicating it's closing.
3.  In the `main` method, use `try-with-resources` with your `ResourceReader` to read a few lines.
4.  Wrap any `IOException` from `ResourceReader` within your `FileProcessingException` and catch `FileProcessingException` in the `main` method, printing its message and the cause's stack trace if present.

**Starter Code for `ResourceReader` (you need to complete `readLine` and `close` logic):**
```java
import java.io.IOException;

// Custom Checked Exception
class FileProcessingException extends Exception {
    public FileProcessingException(String message) {
        super(message);
    }
    public FileProcessingException(String message, Throwable cause) {
        super(message, cause);
    }
}

// ResourceReader class (implement AutoCloseable)
class ResourceReader implements AutoCloseable {
    private String resourceName;
    private boolean closed = false;
    private int readCount = 0;

    public ResourceReader(String name) {
        this.resourceName = name;
        System.out.println("ResourceReader '" + resourceName + "' opened.");
    }

    public String readLine() throws IOException {
        if (closed) {
            throw new IOException("Resource '" + resourceName + "' is closed.");
        }
        readCount++;
        if (readCount > 3) { // Simulate resource exhaustion
            throw new IOException("Resource '" + resourceName + "' exhausted after " + (readCount-1) + " reads.");
        }
        return "Data line " + readCount + " from " + resourceName;
    }

    @Override
    public void close() throws IOException {
        // Implement close logic here
        // Set 'closed' to true and print a message
        // You can optionally throw an IOException here to demonstrate suppressed exceptions
        System.out.println("ResourceReader '" + resourceName + "' closing...");
        this.closed = true;
        // Example: throw new IOException("Error during close of " + resourceName);
    }
}

public class CustomResourceProcessor {
    public static void main(String[] args) {
        // Implement try-with-resources here
        // Use your ResourceReader and catch FileProcessingException
        try (ResourceReader reader = new ResourceReader("MyLogFile")) {
            System.out.println(reader.readLine());
            System.out.println(reader.readLine());
            System.out.println(reader.readLine());
            System.out.println(reader.readLine()); // This should trigger an IOException
        } catch (FileProcessingException e) {
            System.err.println("Caught FileProcessingException: " + e.getMessage());
            if (e.getCause() != null) {
                System.err.println("Caused by:");
                e.getCause().printStackTrace(); // Print stack trace of the original cause
            }
        }
    }
}
```

#### Assessment idea
1.  **Question:** You are designing a method that processes user authentication. If a user provides incorrect credentials, you want to throw a specific exception. Which type of custom exception would be most appropriate for `InvalidCredentialsException`, and why?
    A) Extend `java.lang.Error` because it's a critical system issue.
    B) Extend `java.lang.RuntimeException` because it's an unchecked exception, and the caller shouldn't be forced to handle it.
    C) Extend `java.lang.Exception` because it's a checked exception, forcing the caller to explicitly handle the authentication failure.
    D) Extend `java.io.IOException` because it's related to input/output operations.

    **Correct Answer and Explanation:**
    C) Extend `java.lang.Exception` because it's a checked exception, forcing the caller to explicitly handle the authentication failure.

    **Explanation:**
    Authentication failure is a recoverable situation. The calling code (e.g., a login screen) needs to know that authentication failed so it can inform the user, prompt for retry, or take other specific actions. By making `InvalidCredentialsException` a checked exception (extending `Exception`), the compiler ensures that any method calling the authentication logic explicitly handles this potential outcome, leading to more robust and predictable application behavior. Extending `RuntimeException` would mean the caller isn't forced to handle it, potentially leading to unhandled crashes. `Error` is for unrecoverable system issues, and `IOException` is for I/O problems, neither of which fit this scenario.

2.  **Question:** Consider the following `try-with-resources` block:
    ```java
    import java.io.FileWriter;
    import java.io.IOException;

    public class ResourceTest {
        public static void main(String[] args) {
            try (FileWriter writer = new FileWriter("output.txt")) {
                writer.write("Hello, Cohortia!");
                throw new IOException("Simulating an error during write.");
            } catch (IOException e) {
                System.out.println("Caught: " + e.getMessage());
                for (Throwable suppressed : e.getSuppressed()) {
                    System.out.println("Suppressed: " + suppressed.getMessage());
                }
            }
        }
    }
    ```
    If `FileWriter`'s `close()` method also throws an `IOException` (e.g., "Error during close"), what will be printed to the console?
    A) `Caught: Simulating an error during write.`
       `Suppressed: Error during close`
    B) `Caught: Error during close`
       `Suppressed: Simulating an error during write.`
    C) Only `Caught: Simulating an error during write.`
    D) Only `Caught: Error during close`

    **Correct Answer and Explanation:**
    A) `Caught: Simulating an error during write.`
       `Suppressed: Error during close`

    **Explanation:**
    In a `try-with-resources` statement, if an exception is thrown within the `try` block (the "primary" exception) and then another exception is thrown during the automatic closing of the resource (the "suppressed" exception), the primary exception is the one that propagates to the `catch` block. The exception from the `close()` method is then added to the primary exception as a suppressed exception. Therefore, the `catch` block will catch the "Simulating an error during write" exception, and the "Error during close" exception will be available via `e.getSuppressed()`.

#### AI generation note
Develop a 12-15 minute interactive lesson. Begin with an animated segment explaining the motivation for custom exceptions, contrasting a generic `RuntimeException` with a specific `InsufficientFundsException` and showing how the latter improves code clarity. Then, transition to a live coding demonstration where the instructor builds the `BankAccount` and `InsufficientFundsException` classes step-by-step, highlighting where `throws` is used and how the custom exception is caught. Next, introduce `try-with-resources` with an animation that visually depicts a resource (like a file stream) being opened, used, and then automatically closed, even when an exception occurs. Use a side-by-side comparison of pre-Java 7 manual closing versus `try-with-resources`. Conclude with a visual explanation of suppressed exceptions, showing how the primary exception is propagated and the `close()` exception is attached. Include captions, alt text, and code snippets. The interactive element should be a coding challenge where learners complete a `try-with-resources` block for a given `AutoCloseable` resource.

### Chapter 5.3 — Core Java API: String, StringBuilder, StringBuffer

#### Learning objectives
*   Explain the concept of `String` immutability and its implications.
*   Utilize common `String` methods for manipulation and comparison.
*   Differentiate between `String`, `StringBuilder`, and `StringBuffer` based on mutability and thread-safety.
*   Identify appropriate use cases for `String`, `StringBuilder`, and `StringBuffer` to optimize performance.
*   Avoid common pitfalls related to `String` comparison and concatenation.

#### Detailed lesson content
The `String` class is arguably one of the most fundamental and frequently used classes in Java. You've likely been using it since your very first "Hello, World!" program. However, there's more to `String` than meets the eye, especially concerning its immutability and how it impacts performance and memory. A `String` object in Java is *immutable*, meaning once it's created, its content cannot be changed. Any operation that appears to modify a string, such as `concat()`, `substring()`, or `replace()`, actually creates a *new* `String` object with the modified content, leaving the original string untouched. This immutability has several important implications:

Firstly, it makes strings inherently thread-safe, as their state cannot be altered by multiple threads simultaneously. Secondly, it allows for string literal interning, where identical string literals (e.g., `"hello"`) refer to the same object in a special area of memory called the "string pool." This optimizes memory usage. Thirdly, strings are excellent candidates for keys in `HashMap`s or elements in `HashSet`s because their hash code can be cached and doesn't change, ensuring consistent behavior. However, the downside of immutability is performance overhead when performing many modifications. If you repeatedly concatenate strings in a loop, each concatenation creates a new `String` object, which can be inefficient and consume excessive memory.

Let's explore some common `String` methods:

```java
public class StringManipulation {
    public static void main(String[] args) {
        String greeting = "  Hello, Cohortia!  ";
        String name = "cohortia";

        // Basic information
        System.out.println("Original string: '" + greeting + "'");
        System.out.println("Length: " + greeting.length());
        System.out.println("Is empty? " + greeting.isEmpty()); // Java 6+
        System.out.println("Is blank? " + greeting.isBlank()); // Java 11+ (checks for empty or whitespace-only)

        // Trimming whitespace
        String trimmedGreeting = greeting.trim();
        System.out.println("Trimmed string: '" + trimmedGreeting + "'");

        // Case conversion
        System.out.println("Uppercase: " + trimmedGreeting.toUpperCase());
        System.out.println("Lowercase: " + trimmedGreeting.toLowerCase());

        // Substring extraction
        System.out.println("Substring (0, 5): " + trimmedGreeting.substring(0, 5)); // "Hello"
        System.out.println("Substring (7): " + trimmedGreeting.substring(7));     // "Cohortia!"

        // Searching
        System.out.println("Contains 'Cohortia'? " + trimmedGreeting.contains("Cohortia"));
        System.out.println("Index of 'o': " + trimmedGreeting.indexOf('o')); // First occurrence
        System.out.println("Last index of 'o': " + trimmedGreeting.lastIndexOf('o'));
        System.out.println("Starts with 'Hello'? " + trimmedGreeting.startsWith("Hello"));
        System.out.println("Ends with '!'? " + trimmedGreeting.endsWith("!"));

        // Replacement
        System.out.println("Replace 'o' with '*': " + trimmedGreeting.replace('o', '*'));
        System.out.println("Replace 'Cohortia' with 'World': " + trimmedGreeting.replace("Cohortia", "World"));

        // Concatenation (creates new String objects)
        String combined = trimmedGreeting.concat(" Welcome!");
        System.out.println("Concatenated: " + combined);

        // Comparison - CRITICAL: Use .equals() for content comparison, NOT ==
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");
        System.out.println("\nString Comparison:");
        System.out.println("s1 == s2: " + (s1 == s2)); // true (string pool)
        System.out.println("s1 == s3: " + (s1 == s3)); // false (different objects)
        System.out.println("s1.equals(s3): " + s1.equals(s3)); // true (content comparison)
        System.out.println("Ignoring case: " + "java".equalsIgnoreCase("Java")); // true

        // Splitting
        String csvData = "apple,banana,cherry";
        String[] fruits = csvData.split(",");
        System.out.println("Split data:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
    }
}
```
A common and critical mistake is comparing strings using the `==` operator. `==` compares object references (whether two variables point to the *exact same object in memory*), not their content. For string content comparison, always use the `equals()` method (or `equalsIgnoreCase()` if case sensitivity doesn't matter).

When you need to perform frequent modifications to string content, such as building a long string dynamically in a loop, `StringBuilder` and `StringBuffer` come to the rescue. Unlike `String`, these classes are *mutable*, meaning their content can be changed without creating new objects. This makes them significantly more efficient for string manipulation tasks that involve many appends, insertions, or deletions.

The primary difference between `StringBuilder` and `StringBuffer` lies in thread-safety:
*   **`StringBuilder`**: This class is *not synchronized* (not thread-safe). It is generally faster than `StringBuffer` because it doesn't incur the overhead of synchronization. It's the preferred choice for single-threaded environments or when you handle synchronization externally.
*   **`StringBuffer`**: This class is *synchronized* (thread-safe). All its public methods are synchronized, meaning only one thread can access a `StringBuffer` instance at a time. This makes it suitable for multi-threaded environments where multiple threads might try to modify the same string buffer concurrently. However, the synchronization overhead makes it slower than `StringBuilder`.

Here's an example demonstrating their usage and performance implications:

```java
public class MutableStringDemo {
    public static void main(String[] args) {
        // Using StringBuilder (preferred for single-threaded)
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(", ");
        sb.append("World!");
        sb.insert(6, "Java "); // Insert at index 6
        sb.delete(0, 5); // Delete "Hello"
        System.out.println("StringBuilder result: " + sb.toString()); // Output: ", Java World!"

        // Using StringBuffer (for multi-threaded scenarios)
        StringBuffer sbuf = new StringBuffer(100); // Can specify initial capacity
        sbuf.append("First part.");
        sbuf.append(" Second part.");
        System.out.println("StringBuffer result: " + sbuf.toString());

        // Performance comparison: String vs. StringBuilder
        long startTime;
        long endTime;

        int iterations = 100000;
        String baseString = "Java";

        // String concatenation (inefficient)
        startTime = System.nanoTime();
        String resultString = "";
        for (int i = 0; i < iterations; i++) {
            resultString += baseString; // Creates a new String object in each iteration
        }
        endTime = System.nanoTime();
        System.out.println("\nString concatenation time: " + (endTime - startTime) / 1_000_000 + " ms");
        // System.out.println("Final String length: " + resultString.length()); // Be careful printing very long strings

        // StringBuilder concatenation (efficient)
        startTime = System.nanoTime();
        StringBuilder resultBuilder = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            resultBuilder.append(baseString);
        }
        endTime = System.nanoTime();
        System.out.println("StringBuilder concatenation time: " + (endTime - startTime) / 1_000_000 + " ms");
        // System.out.println("Final StringBuilder length: " + resultBuilder.length());

        // StringBuffer concatenation (thread-safe, slightly slower)
        startTime = System.nanoTime();
        StringBuffer resultBuffer = new StringBuffer();
        for (int i = 0; i < iterations; i++) {
            resultBuffer.append(baseString);
        }
        endTime = System.nanoTime();
        System.out.println("StringBuffer concatenation time: " + (endTime - startTime) / 1_000_000 + " ms");
        // System.out.println("Final StringBuffer length: " + resultBuffer.length());
    }
}
```
The performance comparison clearly shows that `StringBuilder` is orders of magnitude faster than `String` for repeated modifications. `StringBuffer` is also much faster than `String` concatenation, but typically a bit slower than `StringBuilder` due to its synchronization overhead.

In summary, use `String` for fixed, immutable text, especially when string literals are involved or when strings are used as keys in collections. Use `StringBuilder` when you need to perform many modifications to a string within a single thread, prioritizing performance. Use `StringBuffer` when you need mutable string operations in a multi-threaded environment where thread-safety is paramount. Understanding these distinctions is crucial for writing efficient and correct Java code.

#### Key concepts
*   **`String`:** An immutable sequence of characters. Once created, its content cannot be changed.
*   **Immutability:** The state of an object cannot be modified after it's created.
*   **String Pool (String Literal Pool):** A special memory area where Java stores string literals to optimize memory usage by reusing identical string objects.
*   **`equals()` method:** Used to compare the content of two strings.
*   **`==` operator:** Used to compare the object references (memory addresses) of two strings.
*   **`StringBuilder`:** A mutable sequence of characters, not thread-safe. Optimized for performance in single-threaded environments.
*   **`StringBuffer`:** A mutable sequence of characters, thread-safe (synchronized). Suitable for multi-threaded environments but slightly slower than `StringBuilder`.
*   **Concatenation:** The operation of joining two or more strings end-to-end.

#### Hands-on activity
**Activity: Dynamic Message Builder**

You need to build a program that dynamically constructs a personalized message based on user input and then performs some manipulations.

**Task:**
1.  Prompt the user to enter their first name, last name, and favorite programming language.
2.  Use a `StringBuilder` to construct a message in the format: "Hello, [FirstName] [LastName]! Your favorite language is [Language]."
3.  After constructing the initial message, use `StringBuilder` methods to:
    *   Insert the current year (e.g., " (2023) ") right after "Hello,".
    *   Replace "favorite language" with "preferred coding tool".
    *   Convert the entire message to uppercase and print it.
    *   Finally, print the original message (before uppercase conversion) to demonstrate that `StringBuilder` modifies the object in place.

**Code Template (fill in the blanks):**
```java
import java.util.Scanner;

public class MessageBuilder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your first name: ");
        String firstName = scanner.nextLine();

        System.out.print("Enter your last name: ");
        String lastName = scanner.nextLine();

        System.out.print("Enter your favorite programming language: ");
        String language = scanner.nextLine();

        // 1. Use StringBuilder to construct the initial message
        StringBuilder messageBuilder = new StringBuilder();
        // Your code here to append parts of the message

        System.out.println("Initial message: " + messageBuilder.toString());

        // 2. Insert the current year
        int currentYear = java.time.Year.now().getValue();
        // Your code here to insert "(YYYY) " after "Hello, "
        // Hint: Find the index of ", " and add 2 to it.

        // 3. Replace "favorite language" with "preferred coding tool"
        // Your code here to find and replace

        System.out.println("Modified message (before uppercase): " + messageBuilder.toString());

        // 4. Convert the entire message to uppercase and print
        String finalUpperCaseMessage = messageBuilder.toString().toUpperCase();
        System.out.println("Final uppercase message: " + finalUpperCaseMessage);

        scanner.close();
    }
}
```

#### Assessment idea
1.  **Question:** You need to build a log message by appending 10,000 lines of text in a loop. Which of the following would be the most efficient choice for constructing this log message in a single-threaded application?
    A) Using the `+` operator for `String` concatenation.
    B) Using `String.concat()` method repeatedly.
    C) Using `StringBuilder`.
    D) Using `StringBuffer`.

    **Correct Answer and Explanation:**
    C) Using `StringBuilder`.

    **Explanation:**
    Both `+` operator and `String.concat()` create a new `String` object in memory with each operation, leading to significant performance overhead and memory consumption when done repeatedly in a loop. `StringBuffer` is mutable and efficient, but it's synchronized, which adds overhead that is unnecessary in a single-threaded application. `StringBuilder` is also mutable but *not* synchronized, making it the most efficient choice for string manipulation in a single-threaded context.

2.  **Question:** Consider the following Java code:
    ```java
    String s1 = "Java";
    String s2 = "Java";
    String s3 = new String("Java");
    String s4 = s3.intern();

    System.out.println(s1 == s2);
    System.out.println(s1 == s3);
    System.out.println(s1 == s4);
    System.out.println(s3.equals(s1));
    ```
    What will be the output of this code?
    A) `true`, `false`, `true`, `true`
    B) `true`, `true`, `false`, `true`
    C) `false`, `false`, `true`, `true`
    D) `true`, `false`, `false`, `true`

    **Correct Answer and Explanation:**
    A) `true`, `false`, `true`, `true`

    **Explanation:**
    *   `s1 == s2`: `true`. Both `s1` and `s2` are string literals with the same value, so they refer to the same object in the string pool.
    *   `s1 == s3`: `false`. `s3` is created using `new String("Java")`, which explicitly creates a new object on the heap, even if its content is "Java". It does not refer to the string pool object that `s1` points to.
    *   `s1 == s4`: `true`. `s4 = s3.intern()` explicitly puts `s3`'s content into the string pool (if not already there) and returns a reference to the interned string. Since "Java" is already in the pool (from `s1`), `s4` will refer to the same object as `s1`.
    *   `s3.equals(s1)`: `true`. The `equals()` method compares the *content* of the strings, and both `s3` and `s1` contain "Java".

#### AI generation note
Create a 10-12 minute video lesson. Start with an animated visual demonstrating `String` immutability: show a `String` object in memory, then show how `concat()` or `replace()` creates a *new* object rather than modifying the original. Illustrate the string pool with multiple `String` variables pointing to the same literal. Then, transition to a live coding segment showcasing common `String` methods like `substring`, `indexOf`, `replace`, and critically, the difference between `==` and `equals()`. Use a visual overlay to explain memory addresses for `==` vs. content for `equals()`. Follow this with a side-by-side comparison of `String`, `StringBuilder`, and `StringBuffer`, highlighting their mutability and thread-safety. Use a clear performance graph or visual metaphor to show the efficiency gain of `StringBuilder` in a loop. The interactive element should be a mini-quiz asking learners to identify the correct string comparison method for different scenarios.

### Chapter 5.4 — Core Java API: Date and Time (java.time package)

#### Learning objectives
*   Understand the limitations of `java.util.Date` and `java.util.Calendar` and the benefits of `java.time`.
*   Utilize `LocalDate`, `LocalTime`, and `LocalDateTime` for date and time operations without time zones.
*   Work with `Instant` for machine-readable timestamps and `Duration` and `Period` for measuring time.
*   Handle time zones using `ZonedDateTime` and `ZoneId`.
*   Format and parse date and time objects using `DateTimeFormatter`.

#### Detailed lesson content
Handling dates and times accurately and efficiently is a common requirement in almost any application. Historically, Java's date and time API (`java.util.Date` and `java.util.Calendar`) was notoriously difficult to use, prone to errors, and lacked clear separation between date, time, and time zone concepts. These older classes were mutable, not thread-safe, and had confusing API designs. Recognizing these challenges, Java 8 introduced a completely new and improved Date and Time API, located in the `java.time` package. This modern API is inspired by Joda-Time and offers immutability, thread-safety, clear domain models, and a fluent API, making date and time manipulation much more intuitive and robust.

The `java.time` package provides several core classes for different aspects of date and time:
*   **`LocalDate`**: Represents a date without a time or time zone (e.g., 2023-10-27). Ideal for birthdays or holidays.
*   **`LocalTime`**: Represents a time without a date or time zone (e.g., 10:30:00). Ideal for daily opening hours.
*   **`LocalDateTime`**: Represents both a date and a time without a time zone (e.g., 2023-10-27T10:30:00). Useful for events that happen at a specific time on a specific day, where the time zone context is handled separately or not needed.
*   **`Instant`**: Represents a point in time on the timeline, often used for machine-readable timestamps (e.g., 2023-10-27T09:30:00Z). It's essentially the number of nanoseconds since the epoch (January 1, 1970, 00:00:00 GMT/UTC).
*   **`ZonedDateTime`**: Represents a date and time with a time zone (e.g., 2023-10-27T10:30:00-05:00[America/New_York]). Critical for applications dealing with global events or user-specific time zones.

Let's see these in action:

```java
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class NewDateTimeAPI {
    public static void main(String[] args) {
        // 1. LocalDate, LocalTime, LocalDateTime
        LocalDate today = LocalDate.now();
        System.out.println("Today's date: " + today); // e.g., 2023-10-27

        LocalTime currentTime = LocalTime.now();
        System.out.println("Current time: " + currentTime); // e.g., 10:30:45.123

        LocalDateTime now = LocalDateTime.now();
        System.out.println("Current date and time: " + now); // e.g., 2023-10-27T10:30:45.123

        // Creating specific dates/times
        LocalDate birthDate = LocalDate.of(1990, 5, 15);
        LocalTime meetingTime = LocalTime.of(14, 30); // 2:30 PM
        LocalDateTime specificEvent = LocalDateTime.of(2024, 1, 1, 9, 0, 0); // Jan 1, 2024, 9:00 AM

        System.out.println("Birth Date: " + birthDate);
        System.out.println("Meeting Time: " + meetingTime);
        System.out.println("Specific Event: " + specificEvent);

        // Immutability and manipulation
        LocalDate nextWeek = today.plusWeeks(1);
        System.out.println("Next week: " + nextWeek);
        System.out.println("Today (original): " + today); // Original 'today' is unchanged

        LocalTime earlier = currentTime.minusHours(2);
        System.out.println("2 hours earlier: " + earlier);

        // 2. Instant - Machine-readable timestamp
        Instant currentInstant = Instant.now();
        System.out.println("\nCurrent Instant (UTC): " + currentInstant); // Always in UTC

        // 3. Duration and Period - Measuring time
        // Duration for time-based amounts (hours, minutes, seconds)
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 30);
        Duration workDuration = Duration.between(start, end);
        System.out.println("Work duration: " + workDuration.toHours() + " hours " + (workDuration.toMinutes() % 60) + " minutes");

        // Period for date-based amounts (years, months, days)
        LocalDate projectStart = LocalDate.of(2023, 1, 1);
        LocalDate projectEnd = LocalDate.of(2024, 6, 15);
        Period projectPeriod = Period.between(projectStart, projectEnd);
        System.out.println("Project duration: " + projectPeriod.getYears() + " years, "
                           + projectPeriod.getMonths() + " months, "
                           + projectPeriod.getDays() + " days");

        // Calculating age using Period
        LocalDate personBirthDate = LocalDate.of(1990, 5, 15);
        Period age = Period.between(personBirthDate, LocalDate.now());
        System.out.println("Age: " + age.getYears() + " years, " + age.getMonths() + " months, " + age.getDays() + " days");

        // 4. ZonedDateTime and ZoneId - Time zones
        ZoneId newYorkZone = ZoneId.of("America/New_York");
        ZonedDateTime newYorkTime = ZonedDateTime.now(newYorkZone);
        System.out.println("\nNew York Time: " + newYorkTime);

        ZoneId londonZone = ZoneId.of("Europe/London");
        ZonedDateTime londonTime = newYorkTime.withZoneSameInstant(londonZone); // Convert to London time
        System.out.println("London Time: " + londonTime);

        // 5. DateTimeFormatter - Formatting and Parsing
        // Custom format
        DateTimeFormatter customFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDateTime = now.format(customFormatter);
        System.out.println("Formatted Date-Time: " + formattedDateTime);

        // ISO standard formats (built-in)
        System.out.println("ISO_LOCAL_DATE: " + today.format(DateTimeFormatter.ISO_LOCAL_DATE));
        System.out.println("ISO_DATE_TIME: " + now.format(DateTimeFormatter.ISO_DATE_TIME));

        // Parsing a string into a date/time object
        String dateString = "2025-12-25 18:00:00";
        DateTimeFormatter parser = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime parsedDateTime = LocalDateTime.parse(dateString, parser);
        System.out.println("Parsed Date-Time: " + parsedDateTime);

        // Common mistake: Using old API
        // java.util.Date oldDate = new java.util.Date(); // Avoid for new code!
        // System.out.println("Old Date: " + oldDate);
    }
}
```
The `java.time` API promotes a clear separation of concerns. `LocalDate`, `LocalTime`, and `LocalDateTime` are "local" in the sense that they represent dates and times as observed in a specific location, but without carrying the time zone information themselves. This makes them ideal for representing values like "Christmas Day" or "9 AM meeting" where the time zone might be implied by context or applied separately. `Instant` is for machine-level precision, representing a timestamp that is the same globally. `ZonedDateTime` is where time zones come into play, combining a `LocalDateTime` with a `ZoneId` to represent a full, unambiguous point in time for a specific geographical region.

`Duration` and `Period` are essential for calculating differences between dates and times. `Duration` measures time in seconds and nanoseconds, suitable for time-based intervals (e.g., "3 hours, 15 minutes"). `Period` measures time in years, months, and days, ideal for date-based intervals (e.g., "2 years, 3 months, 10 days").

`DateTimeFormatter` is your go-to class for converting date/time objects to human-readable strings and vice-versa (parsing). It supports various predefined formats (like `ISO_LOCAL_DATE`) and allows you to define custom patterns using a flexible set of symbols (e.g., `dd` for day, `MM` for month, `yyyy` for year, `HH` for 24-hour, `hh` for 12-hour, `mm` for minute, `ss` for second).

A crucial safety note: always be mindful of time zones when dealing with dates and times, especially in distributed systems or applications serving users in different geographical locations. If you don't explicitly handle time zones, `LocalDate`, `LocalTime`, and `LocalDateTime` will use the system's default time zone implicitly when converting to/from `Instant` or `ZonedDateTime`. It's generally best practice to store timestamps in UTC (`Instant`) in databases and convert them to the user's local time zone only for display. Never use the old `java.util.Date` and `java.util.Calendar` for new development; they are considered legacy and should be avoided.

#### Key concepts
*   **`java.time` package:** The modern, improved Date and Time API introduced in Java 8.
*   **`LocalDate`:** Represents a date (year, month, day) without time or time zone.
*   **`LocalTime`:** Represents a time (hour, minute, second, nanosecond) without date or time zone.
*   **`LocalDateTime`:** Represents both a date and a time without a time zone.
*   **`Instant`:** Represents a point in time on the timeline, typically in UTC (machine-readable timestamp).
*   **`ZonedDateTime`:** Represents a date and time with a specific time zone.
*   **`ZoneId`:** An identifier for a time zone (e.g., "America/New_York").
*   **`Duration`:** Measures a time-based amount of time (e.g., hours, minutes, seconds).
*   **`Period`:** Measures a date-based amount of time (e.g., years, months, days).
*   **`DateTimeFormatter`:** Used for formatting date/time objects into strings and parsing strings into date/time objects.
*   **Immutability:** All classes in `java.time` are immutable and thread-safe.

#### Hands-on activity
**Activity: Event Scheduler**

You are tasked with creating a simple event scheduler. The program should:
1.  Get the current `LocalDateTime`.
2.  Ask the user for an event name.
3.  Ask the user for the event date (e.g., "2024-03-15") and time (e.g., "14:30").
4.  Parse the user's input into `LocalDate` and `LocalTime`, then combine them into a `LocalDateTime`.
5.  Calculate the `Period` and `Duration` between the current `LocalDateTime` and the event `LocalDateTime`.
6.  Print a formatted message showing the event details and how long until the event.

**Code Template:**
```java
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class EventScheduler {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 1. Get current LocalDateTime
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Current Date and Time: " + now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")));

        // 2. Ask for event name
        System.out.print("Enter event name: ");
        String eventName = scanner.nextLine();

        // 3. Ask for event date and time
        LocalDate eventDate = null;
        LocalTime eventTime = null;
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");

        while (eventDate == null) {
            System.out.print("Enter event date (yyyy-MM-dd): ");
            String dateInput = scanner.nextLine();
            try {
                eventDate = LocalDate.parse(dateInput, dateFormatter);
            } catch (DateTimeParseException e) {
                System.out.println("Invalid date format. Please use yyyy-MM-dd.");
            }
        }

        while (eventTime == null) {
            System.out.print("Enter event time (HH:mm): ");
            String timeInput = scanner.nextLine();
            try {
                eventTime = LocalTime.parse(timeInput, timeFormatter);
            } catch (DateTimeParseException e) {
                System.out.println("Invalid time format. Please use HH:mm.");
            }
        }

        // 4. Combine into LocalDateTime
        LocalDateTime eventDateTime = LocalDateTime.of(eventDate, eventTime);

        // 5. Calculate Period and Duration
        // Your code here to calculate Period and Duration
        Period periodUntilEvent = Period.between(now.toLocalDate(), eventDateTime.toLocalDate());
        long hoursUntilEvent = ChronoUnit.HOURS.between(now, eventDateTime);
        long minutesUntilEvent = ChronoUnit.MINUTES.between(now, eventDateTime) % 60;

        // 6. Print formatted message
        System.out.println("\n--- Event Details ---");
        System.out.println("Event: " + eventName);
        System.out.println("Scheduled for: " + eventDateTime.format(DateTimeFormatter.ofPattern("EEEE, MMM dd, yyyy 'at' hh:mm a")));

        System.out.println("Time until event:");
        System.out.println("  " + periodUntilEvent.getYears() + " years, "
                           + periodUntilEvent.getMonths() + " months, "
                           + periodUntilEvent.getDays() + " days");
        System.out.println("  Approximately " + hoursUntilEvent + " hours and " + minutesUntilEvent + " minutes.");

        scanner.close();
    }
}
```

#### Assessment idea
1.  **Question:** You need to store a user's birthday in your application. Which `java.time` class is the most appropriate for this purpose, and why?
    A) `Instant`, because it represents a precise point in time.
    B) `LocalDateTime`, because it includes both date and time.
    C) `LocalDate`, because a birthday is a date without a specific time or time zone relevant for calculation.
    D) `ZonedDateTime`, because it handles time zones for global users.

    **Correct Answer and Explanation:**
    C) `LocalDate`, because a birthday is a date without a specific time or time zone relevant for calculation.

    **Explanation:**
    A birthday is typically celebrated on a specific date, regardless of the time of day or the time zone. While a person is born at a specific `Instant` in a specific `ZonedDateTime`, for the purpose of storing *their birthday*, only the `LocalDate` (year, month, day) is relevant. `LocalDate` correctly models this concept without unnecessary time or time zone components.

2.  **Question:** You have a `LocalDateTime` object `eventTime` set to `2024-07-20T10:00:00`. You want to display this time in the "America/Los_Angeles" time zone. Which sequence of operations correctly achieves this?
    A) `eventTime.atZone(ZoneId.of("America/Los_Angeles"))`
    B) `ZonedDateTime.of(eventTime, ZoneId.of("America/Los_Angeles"))`
    C) `eventTime.toInstant().atZone(ZoneId.of("America/Los_Angeles"))`
    D) `ZoneId.of("America/Los_Angeles").getRules().getOffset(eventTime.toInstant())`

    **Correct Answer and Explanation:**
    B) `ZonedDateTime.of(eventTime, ZoneId.of("America/Los_Angeles"))`

    **Explanation:**
    *   `LocalDateTime.atZone(ZoneId)` (Option A) is the most direct and idiomatic way to combine a `LocalDateTime` with a `ZoneId` to create a `ZonedDateTime`. It interprets the `LocalDateTime` *as if it were already in that zone*.
    *   `ZonedDateTime.of(eventTime, ZoneId.of("America/Los_Angeles"))` (Option B) also works and is essentially equivalent to `eventTime.atZone(...)`. Both are correct.
    *   `eventTime.toInstant().atZone(...)` (Option C) would first convert the `LocalDateTime` to an `Instant` using the system's default time zone, and *then* convert that `Instant` to the target `ZonedDateTime`. This is generally not what you want if `eventTime` is already meant to be interpreted in the target zone. It would shift the time if the system default zone is different.
    *   Option D only gets the offset, not the full `ZonedDateTime`.

    * in this timezone". Both A and B do this. Let's pick the most common and clear one.*

    *Revisiting: `LocalDateTime.atZone()` is the most direct method on `LocalDateTime` itself to assign a zone. `ZonedDateTime.of()` is a static factory method. Both are valid. The question asks for "correctly achieves this". Let's stick with A as it's a method on the `LocalDateTime` object itself.*

    *Final decision: Both A and B are correct. However, `atZone()` is a method on `LocalDateTime`, which is often more intuitive when starting from a `LocalDateTime` object. `ZonedDateTime.of()` is a static factory method. I will choose A as the primary correct answer, but acknowledge B's validity in the explanation.*

    Let's re-evaluate the question and options carefully.
    `LocalDateTime eventTime = 2024-07-20T10:00:00`.
    Goal: Display this time *in* "America/Los_Angeles". This means we interpret `10:00:00` as `10:00:00` in Los Angeles.

    A) `eventTime.atZone(ZoneId.of("America/Los_Angeles"))`: This takes the `LocalDateTime` and assigns it the `ZoneId`, creating a `ZonedDateTime` where the local date-time component is preserved and the zone is applied. This is correct.
    B) `ZonedDateTime.of(eventTime, ZoneId.of("America/Los_Angeles"))`: This is a static factory method that does exactly the same as A. This is also correct.
    C) `eventTime.toInstant().atZone(ZoneId.of("America/Los_Angeles"))`: This first converts `eventTime` to an `Instant` using the *system default time zone*. Then it converts that `Instant` to a `ZonedDateTime` in "America/Los_Angeles". This would *change the time* if the system default zone is not "America/Los_Angeles", which is likely not the intent of "display this time in".
    D) `ZoneId.of("America/Los_Angeles").getRules().getOffset(eventTime.toInstant())`: This only gets the offset, not the `ZonedDateTime` itself.

    Given that both A and B are correct, and the question asks "Which sequence... correctly achieves this?", either could be chosen. However, in multiple choice, there's usually a single best answer. Often, method calls on the object itself are preferred for fluency. Let's go with A and elaborate that B is also valid.

    *interpreting* the `LocalDateTime` as being in that `ZoneId`. `LocalDateTime.atZone(ZoneId zone)` does the same. Both are correct. Let's choose B as it's a static factory method and sometimes seen as more direct for "creating" a ZonedDateTime. But the explanation must cover both. I will pick B for the answer and explain A is also correct. This is a common trick.

    Let's go with B as the answer and explain A is also correct.

    **Correct Answer and Explanation (Revised):**
    B) `ZonedDateTime.of(eventTime, ZoneId.of("America/Los_Angeles"))`

    **Explanation:**
    When you have a `LocalDateTime` and you want to associate it with a specific `ZoneId` to create a `ZonedDateTime`, you are essentially saying "this local date and time *is* in this particular time zone."
    *   Option B (`ZonedDateTime.of(eventTime, ZoneId.of("America/Los_Angeles"))`) directly constructs a `ZonedDateTime` by combining the `LocalDateTime` and the `ZoneId`, interpreting `eventTime` as being in the "America/Los_Angeles" zone.
    *   Option A (`eventTime.atZone(ZoneId.of("America/Los_Angeles"))`) achieves the exact same result and is also a perfectly valid and common way to do this, using a method directly on the `LocalDateTime` object.
    *   Option C (`eventTime.toInstant().atZone(ZoneId.of("America/Los_Angeles"))`) would first convert `eventTime` to an `Instant` using the *system's default time zone*. Then, that `Instant` would be converted to a `ZonedDateTime` in "America/Los_Angeles". This would likely result in a different time than `10:00:00` in Los Angeles, as it involves an intermediate conversion through the default zone. This is generally not the desired behavior when you want to interpret a given `LocalDateTime` in a specific target zone.
    *   Option D only retrieves the offset, not the full `ZonedDateTime`.

    Therefore, both A and B correctly achieve the desired outcome of interpreting the `LocalDateTime` as being in the specified time zone. In an exam, both might be considered correct, but `ZonedDateTime.of()` is a very explicit static factory method for this purpose.

#### AI generation note
Create a 12-15 minute interactive lesson. Start with a visual comparison of the old (`java.util.Date`/`Calendar`) vs. new (`java.time`) APIs, highlighting mutability/immutability and thread-safety differences. Then, use an interactive timeline or calendar UI to demonstrate `LocalDate`, `LocalTime`, and `LocalDateTime`, showing how to create them and perform simple manipulations (e.g., `plusDays`, `minusHours`). Introduce `Instant` with a visual of a global clock. Follow with a clear diagram explaining `Duration` vs. `Period` using real-world examples (e.g., "flight duration" vs. "project length"). Dedicate a segment to `ZonedDateTime` and `ZoneId`, using an animated map to show time zone conversions (e.g., New York time vs. London time). Conclude with a live coding demo of `DateTimeFormatter` for custom formatting and parsing. The interactive element should be a drag-and-drop activity where learners match date/time use cases (e.g., "birthday," "flight departure," "system log timestamp") to the most appropriate `java.time` class.

### Chapter 5.5 — Core Java API: Wrapper Classes and Autoboxing/Unboxing

#### Learning objectives
*   Explain the purpose and necessity of Java's wrapper classes.
*   Identify the wrapper classes for common primitive types.
*   Understand the concepts of autoboxing and unboxing and how they work.
*   Convert between primitive types and their corresponding wrapper objects manually and automatically.
*   Recognize potential `NullPointerException` issues related to unboxing.

#### Detailed lesson content
Java is often described as an object-oriented language, but it also includes primitive data types like `int`, `double`, `boolean`, and `char`. These primitives are not objects; they do not have methods, and they are stored directly in memory, offering performance benefits. However, there are many scenarios in Java where objects are required. For instance, Java's Collections Framework (like `ArrayList`, `HashMap`) can only store objects, not primitive types. Generics also work exclusively with objects. To bridge this gap, Java provides *wrapper classes* for each primitive type. These wrapper classes "wrap" a primitive value into an object, allowing primitives to be treated as objects when needed.

Each primitive type has a corresponding wrapper class:
*   `byte` -> `Byte`
*   `short` -> `Short`
*   `int` -> `Integer`
*   `long` -> `Long`
*   `float` -> `Float`
*   `double` -> `Double`
*   `boolean` -> `Boolean`
*   `char` -> `Character`

These wrapper classes are part of the `java.lang` package, so they are automatically imported. They are immutable, meaning once a wrapper object is created, its primitive value cannot be changed. They also provide useful methods for converting between strings and primitive types, or between different numeric types.

```java
import java.util.ArrayList;
import java.util.List;

public class WrapperClassesDemo {
    public static void main(String[] args) {
        // Manual boxing (primitive to wrapper object)
        int primitiveInt = 100;
        Integer wrapperInt1 = Integer.valueOf(primitiveInt); // Preferred way to box
        Integer wrapperInt2 = new Integer(primitiveInt);     // Deprecated in Java 9, avoid

        System.out.println("Primitive int: " + primitiveInt);
        System.out.println("Wrapper Integer (valueOf): " + wrapperInt1);
        System.out.println("Wrapper Integer (constructor - deprecated): " + wrapperInt2);

        // Manual unboxing (wrapper object to primitive)
        int unboxedInt1 = wrapperInt1.intValue();
        System.out.println("Unboxed int: " + unboxedInt1);

        // Using wrapper classes in collections
        List<Integer> numbers = new ArrayList<>();
        numbers.add(5);  // Autoboxing: int 5 is converted to Integer object
        numbers.add(new Integer(10)); // Explicit boxing
        numbers.add(15);
        System.out.println("\nNumbers in ArrayList: " + numbers);

        int sum = 0;
        for (Integer num : numbers) {
            sum += num; // Autounboxing: Integer object is converted to int primitive
        }
        System.out.println("Sum of numbers: " + sum);

        // Useful methods of wrapper classes
        String strNum = "12345";
        int parsedInt = Integer.parseInt(strNum); // Static method to parse String to int
        System.out.println("\nParsed int from string '" + strNum + "': " + parsedInt);

        double parsedDouble = Double.parseDouble("98.76");
        System.out.println("Parsed double from string '98.76': " + parsedDouble);

        String binaryString = "1010";
        int binaryToDecimal = Integer.parseInt(binaryString, 2); // Parse with radix (base 2)
        System.out.println("Binary '1010' to decimal: " + binaryToDecimal);

        System.out.println("Max Integer value: " + Integer.MAX_VALUE);
        System.out.println("Min Double value: " + Double.MIN_VALUE);

        // Comparing wrapper objects
        Integer a = 127;
        Integer b = 127;
        Integer c = 128;
        Integer d = 128;
        System.out.println("\nComparing Integers:");
        System.out.println("a == b: " + (a == b)); // true (cached values for -128 to 127)
        System.out.println("c == d: " + (c == d)); // false (new objects created for values outside cache)
        System.out.println("c.equals(d): " + c.equals(d)); // true (content comparison)

        // Common mistake: NullPointerException with unboxing
        Integer nullableInt = null;
        try {
            int result = nullableInt + 5; // Autounboxing a null Integer
            System.out.println("Result: " + result);
        } catch (NullPointerException e) {
            System.err.println("Caught NullPointerException: Cannot unbox a null wrapper object.");
        }
    }
}
```
Java 5 introduced a powerful feature called **autoboxing** and **unboxing**, which significantly simplifies the use of wrapper classes.
*   **Autoboxing:** The automatic conversion that the Java compiler makes between a primitive type and its corresponding wrapper class object. For example, when you assign an `int` to an `Integer` variable, the compiler automatically converts the `int` into an `Integer` object.
*   **Unboxing:** The automatic conversion that the Java compiler makes between a wrapper class object and its corresponding primitive type. For example, when you assign an `Integer` object to an `int` variable, the compiler automatically converts the `Integer` object into an `int` primitive.

This automatic conversion makes working with collections and generics much more convenient, as you can often treat primitives as if they were objects without explicit casting or method calls.

```java
// Autoboxing and Unboxing in action
Integer autoBoxedInt = 20; // Autoboxing: 20 (int) -> new Integer(20)
int autoUnboxedInt = autoBoxedInt; // Autounboxing: autoBoxedInt (Integer) -> 20 (int)

List<Double> grades = new ArrayList<>();
grades.add(85.5); // Autoboxing: double -> Double
grades.add(92.0);

double total = 0;
for (double grade : grades) { // Autounboxing: Double -> double
    total += grade;
}
System.out.println("Total grades: " + total);
```
While convenient, autoboxing and unboxing can introduce subtle issues, most notably `NullPointerException`. If a wrapper object is `null` and you attempt to unbox it (e.g., assign it to a primitive variable or perform an arithmetic operation), Java will throw a `NullPointerException`. This is a common mistake and a critical safety note: always check for `null` before unboxing if there's a possibility the wrapper object could be `null`.

Another point of comparison is `Integer.valueOf(int)` versus `new Integer(int)`. `Integer.valueOf()` is generally preferred because it can leverage a cache of `Integer` objects for values between -128 and 127. This means that `Integer.valueOf(10)` will often return the same object reference for the same value within this range, saving memory. `new Integer(int)` (now deprecated in Java 9) *always* creates a new object, even for cached values, which is less efficient. For values outside the -128 to 127 range, `valueOf()` will also create a new object, but it still has the advantage of potential caching.

Understanding wrapper classes and autoboxing/unboxing is essential for writing correct and efficient Java code, especially when interacting with the Collections Framework or other APIs that require object types.

#### Key concepts
*   **Wrapper Class:** A class that "wraps" a primitive data type into an object (e.g., `Integer` for `int`).
*   **Primitive Type:** Basic data types in Java that are not objects (e.g., `int`, `double`, `boolean`).
*   **Autoboxing:** The automatic conversion of a primitive type to its corresponding wrapper class object by the Java compiler.
*   **Unboxing:** The automatic conversion of a wrapper class object to its corresponding primitive type by the Java compiler.
*   **`NullPointerException`:** An error that occurs if you attempt to unbox a `null` wrapper object.
*   **`Integer.valueOf()`:** A static factory method for creating `Integer` objects, preferred over the constructor due to potential caching.
*   **Immutability:** Wrapper objects are immutable; their wrapped primitive value cannot be changed after creation.

#### Hands-on activity
**Activity: Grade Calculator with Collections**

You need to create a simple program that calculates the average of a list of student grades. Since `ArrayList` only works with objects, you'll use `Integer` wrapper classes and rely on autoboxing/unboxing.

**Task:**
1.  Create an `ArrayList` of `Integer` to store grades.
2.  Add at least 5 integer grades (e.g., 85, 90, 78, 92, 88) to the `ArrayList`. Observe autoboxing in action.
3.  Iterate through the `ArrayList` using a `for-each` loop. In each iteration, add the grade to a `sum` variable (which should be a primitive `int`). Observe autounboxing.
4.  Calculate the average grade as a `double`.
5.  Introduce a potential `NullPointerException` scenario: temporarily add a `null` to your `ArrayList` and then try to sum the grades again. Implement a `try-catch` block to gracefully handle the `NullPointerException` that occurs during unboxing.

**Code Template:**
```java
import java.util.ArrayList;
import java.util.List;

public class GradeCalculator {
    public static void main(String[] args) {
        // 1. Create an ArrayList of Integer
        List<Integer> grades = new ArrayList<>();

        // 2. Add grades (autoboxing in action)
        grades.add(85);
        grades.add(90);
        grades.add(78);
        grades.add(92);
        grades.add(88);
        System.out.println("Initial grades: " + grades);

        // 3. Calculate sum (autounboxing in action)
        int sum = 0;
        for (Integer grade : grades) {
            sum += grade; // Autounboxing
        }

        // 4. Calculate average
        double average = (double) sum / grades.size();
        System.out.println("Sum of grades: " + sum);
        System.out.println("Average grade: " + String.format("%.2f", average));

        // 5. Introduce NullPointerException scenario
        System.out.println("\n--- Testing NullPointerException ---");
        grades.add(null); // Adding a null to demonstrate the issue
        grades.add(70); // Add another valid grade after null

        int sumWithNull = 0;
        try {
            for (Integer grade : grades) {
                sumWithNull += grade; // This will throw NullPointerException when 'grade' is null
            }
            System.out.println("Sum with null (should not reach here): " + sumWithNull);
        } catch (NullPointerException e) {
            System.err.println("Error: Caught NullPointerException during grade calculation!");
            System.err.println("Details: " + e.getMessage());
            System.err.println("A null Integer object cannot be unboxed to a primitive int.");
        }

        // Remove the null for further operations if needed
        grades.remove(grades.size() - 2); // Remove the null we just added
        System.out.println("Grades after removing null: " + grades);
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements about autoboxing and unboxing in Java is TRUE?
    A) Autoboxing converts a wrapper class object to its corresponding primitive type.
    B) Unboxing converts a primitive type to its corresponding wrapper class object.
    C) Autoboxing and unboxing can lead to `NullPointerException` if a `null` wrapper object is unboxed.
    D) `Integer.valueOf(100)` always creates a new `Integer` object, regardless of the value.

    **Correct Answer and Explanation:**
    C) Autoboxing and unboxing can lead to `NullPointerException` if a `null` wrapper object is unboxed.

    **Explanation:**
    *   A) This describes unboxing, not autoboxing.
    *   B) This describes autoboxing, not unboxing.
    *   C) This is true. If a wrapper object holds a `null` reference and an attempt is made to unbox it (e.g., assign it to a primitive variable or use it in an arithmetic operation), a `NullPointerException` will occur.
    *   D) `Integer.valueOf(100)` might return a cached `Integer` object for values between -128 and 127, so it does not *always* create a new `Integer` object.

2.  **Question:** You are given an `ArrayList<Double>` named `measurements`. You want to find the maximum value among the elements. Which of the following code snippets correctly and safely finds the maximum value?
    A)
    ```java
    double max = 0.0;
    for (Double val : measurements) {
        max = Math.max(max, val);
    }
    ```
    B)
    ```java
    double max = Double.MIN_VALUE;
    for (Double val : measurements) {
        if (val != null) {
            max = Math.max(max, val);
        }
    }
    ```
    C)
    ```java
    double max = measurements.get(0);
    for (int i = 1; i < measurements.size(); i++) {
        max = Math.max(max, measurements.get(i));
    }
    ```
    D)
    ```java
    Double max = null;
    for (Double val : measurements) {
        if (max == null || (val != null && val > max)) {
            max = val;
        }
    }
    ```

    **Correct Answer and Explanation:**
    B)
    ```java
    double max = Double.MIN_VALUE;
    for (Double val : measurements) {
        if (val != null) {
            max = Math.max(max, val);
        }
    }
    ```

    **Explanation:**
    *   Option A: If `measurements` contains negative numbers, initializing `max` to `0.0` would be incorrect. More importantly, if `measurements` contains `null` values, `max = Math.max(max, val);` would cause a `NullPointerException` during unboxing.
    *   Option B: This is the most robust solution. It initializes `max` to `Double.MIN_VALUE` to correctly handle negative numbers. Crucially, it includes a `null` check (`if (val != null)`) before attempting to unbox `val` and use it in `Math.max()`, preventing a `NullPointerException`.
    *   Option C: This assumes `measurements` is not empty. If it's empty, `measurements.get(0)` will throw an `IndexOutOfBoundsException`. It also doesn't handle `null` values within the list, which would cause a `NullPointerException` during unboxing.
    *   Option D: While this attempts to handle `null` values, the `max` variable itself is a `Double` wrapper. If `measurements` contains only `null` values, `max` will remain `null`. If the list contains valid numbers and `null`s, `val > max` would still trigger unboxing of `max` (if `max` is not `null`) or `val` (if `val` is not `null`), and the logic `val > max` itself is problematic if `max` is `null`. The question asks for the maximum *value* (a primitive `double`), not a `Double` object.

---

## Module 6: Advanced Language Features and Collections

**Module 6: Advanced Language Features and Collections**
**Module Goal:** By the end of this module, learners will be able to leverage advanced Java language features such as generics, lambda expressions, and the Stream API, and effectively utilize the Java Collections Framework to manage and process data efficiently.

---

### Chapter 6.1 — Mastering Generics for Type Safety

#### Learning objectives
*   Explain the purpose and benefits of using generics in Java for type safety and code reusability.
*   Declare and use generic classes, interfaces, and methods with type parameters.
*   Differentiate between raw types, unbounded wildcards, and bounded wildcards (`? extends T`, `? super T`).
*   Identify and resolve common compile-time errors related to incorrect generic usage, such as type erasure limitations.
*   Apply generics effectively to create more robust and flexible Java applications.

#### Detailed lesson content
Welcome to the exciting world of generics in Java! As your journey into Java programming progresses, you'll inevitably encounter situations where you need to write code that operates on objects of various types in a type-safe manner. Before generics were introduced in Java 5, developers often relied on `Object` as a universal type, leading to extensive casting and a high risk of `ClassCastException` at runtime. Generics address this fundamental problem by allowing you to define classes, interfaces, and methods with type parameters, enabling the compiler to enforce type checks at compile time rather than deferring them to runtime. This significantly enhances code reliability, readability, and maintainability.

At its core, a generic type is a class or interface that is parameterized over types. Instead of working with a specific type like `String` or `Integer`, you can define a placeholder type, commonly represented by a single uppercase letter like `T` (for Type), `E` (for Element), `K` (for Key), `V` (for Value), or `N` (for Number). For instance, consider the `ArrayList` class. Without generics, you'd declare `ArrayList list = new ArrayList();` and add any `Object` to it. Retrieving elements would require casting: `String s = (String) list.get(0);`. If you accidentally added an `Integer` and tried to cast it to `String`, you'd get a `ClassCastException`. With generics, you declare `ArrayList<String> list = new ArrayList<String>();`. Now, the compiler knows `list` can only hold `String` objects. Any attempt to add a non-`String` object will result in a compile-time error, preventing runtime surprises. This compile-time type checking is the primary benefit of generics.

Let's delve into how to declare and use generic types. You can create your own generic classes. For example, a simple `Box` class that can hold any type of object:

```java
public class Box<T> {
    private T content;

    public void setContent(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }

    public static void main(String[] args) {
        Box<String> stringBox = new Box<>(); // Type inference (diamond operator)
        stringBox.setContent("Hello Generics!");
        String message = stringBox.getContent();
        System.out.println(message);

        Box<Integer> integerBox = new Box<>();
        integerBox.setContent(123);
        Integer number = integerBox.getContent();
        System.out.println(number);

        // Common mistake: Trying to assign incompatible types
        // stringBox.setContent(100); // Compile-time error!
    }
}
```

Notice the `<T>` after the class name. This declares `T` as a type parameter. Inside the class, `T` acts as a regular type. When `Box<String>` is instantiated, `T` effectively becomes `String`. The diamond operator `<>` in `new Box<>();` is a Java 7 feature that allows the compiler to infer the type arguments, reducing verbosity.

Generics also extend to methods. You can write generic methods that can operate on different types. A generic method's type parameter is declared *before* the return type.

```java
public class GenericMethods {
    // A generic method to print an array of any type
    public static <E> void printArray(E[] inputArray) {
        for (E element : inputArray) {
            System.out.printf("%s ", element);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4, 5};
        Double[] doubleArray = {1.1, 2.2, 3.3, 4.4};
        String[] stringArray = {"Hello", "World", "Java"};

        System.out.print("Integer Array: ");
        printArray(intArray); // E is inferred as Integer

        System.out.print("Double Array: ");
        printArray(doubleArray); // E is inferred as Double

        System.out.print("String Array: ");
        printArray(stringArray); // E is inferred as String
    }
}
```

A crucial concept to grasp with generics is **type erasure**. While generics provide compile-time type safety, the type information (like `<String>` or `<Integer>`) is *erased* by the Java compiler during compilation. At runtime, generic types essentially revert to their raw types (e.g., `Box<String>` becomes `Box`, and `T` becomes `Object`). This is done for backward compatibility with older Java versions that didn't support generics. The implication is that you cannot use type parameters in certain ways at runtime, such as creating instances of type parameters (`new T()`), using `instanceof T`, or creating arrays of type parameters (`new T[10]`). For example, `new ArrayList<String>[10]` is illegal. Instead, you'd create `new ArrayList[10]` and cast.

Now, let's explore **wildcards**, which provide more flexibility when working with collections of generic types.
*   **Unbounded Wildcard (`<?>`)**: This means "an unknown type." It's useful when you want to write a method that can operate on a generic collection regardless of its specific type parameter. For example, `List<?>` means a list of *any* type. You can read elements from it (they'll be `Object`s), but you cannot add elements (except `null`) because the compiler doesn't know what type is expected.

    ```java
    public static void printList(List<?> list) {
        for (Object elem : list) {
            System.out.print(elem + " ");
        }
        System.out.println();
    }
    // Usage: printList(new ArrayList<String>()); printList(new ArrayList<Integer>());
    ```

*   **Bounded Wildcards**: These restrict the unknown type to a certain range.
    *   **Upper Bounded Wildcard (`? extends T`)**: This means "an unknown type that is `T` or a subtype of `T`." This is used when you want to *read* values from a generic collection. For instance, `List<? extends Number>` means a list of `Number` or any of its subclasses (like `Integer`, `Double`). You can safely read `Number` objects from such a list, but you cannot add new elements (except `null`) because you don't know the *exact* subtype. If it's a `List<Integer>`, you can't add a `Double`.

        ```java
        public static double sumOfList(List<? extends Number> list) {
            double sum = 0.0;
            for (Number n : list) { // Safely read Numbers
                sum += n.doubleValue();
            }
            return sum;
        }
        // Usage:
        // List<Integer> integers = Arrays.asList(1, 2, 3);
        // System.out.println(sumOfList(integers)); // Works
        // List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
        // System.out.println(sumOfList(doubles)); // Works
        // list.add(new Integer(4)); // Compile-time error! Cannot add.
        ```

    *   **Lower Bounded Wildcard (`? super T`)**: This means "an unknown type that is `T` or a supertype of `T`." This is used when you want to *write* values into a generic collection. For example, `List<? super Integer>` means a list of `Integer` or any of its superclasses (like `Number`, `Object`). You can safely add `Integer` objects (or any of its subtypes) to such a list because you know that `Integer` is compatible with `Integer`, `Number`, or `Object`. When reading, elements are treated as `Object`.

        ```java
        public static void addIntegers(List<? super Integer> list) {
            list.add(10); // Safely add Integer
            list.add(20);
            // list.add(new Double(30.0)); // Compile-time error! Not an Integer or supertype.
        }
        // Usage:
        // List<Number> numbers = new ArrayList<>();
        // addIntegers(numbers); // Works
        // List<Object> objects = new ArrayList<>();
        // addIntegers(objects); // Works
        // List<Integer> integers = new ArrayList<>();
        // addIntegers(integers); // Works
        ```

A common mnemonic for remembering when to use `extends` vs. `super` is **PECS**: **P**roducer **E**xtends, **C**onsumer **S**uper. If your generic type is *producing* values (you're reading from it), use `? extends T`. If it's *consuming* values (you're writing to it), use `? super T`.

Understanding generics is vital for working with the Java Collections Framework, which is heavily genericized, and for writing flexible, type-safe, and reusable code. While type erasure can sometimes feel like a limitation, its benefits in terms of backward compatibility and compile-time safety far outweigh the complexities. Always aim to use generics to prevent runtime errors and make your code more robust.

#### Key concepts
*   **Generics**: A feature that allows classes, interfaces, and methods to operate on objects of various types while providing compile-time type safety.
*   **Type Parameter**: A placeholder type (e.g., `T`, `E`, `K`, `V`) used in generic declarations.
*   **Type Argument**: The actual type (e.g., `String`, `Integer`) supplied when instantiating a generic type.
*   **Diamond Operator (`<>`)**: A Java 7 feature allowing the compiler to infer type arguments for generic constructors, reducing verbosity.
*   **Type Erasure**: The process by which the Java compiler replaces generic type parameters with their bounds (or `Object` if unbounded) during compilation, removing generic type information at runtime for backward compatibility.
*   **Raw Type**: A generic type used without type arguments (e.g., `List` instead of `List<String>`). Leads to compile-time warnings and potential runtime errors.
*   **Unbounded Wildcard (`<?>`)**: Represents an unknown type; useful for methods that operate on generic collections without needing specific type information, primarily for reading.
*   **Upper Bounded Wildcard (`? extends T`)**: Represents an unknown type that is `T` or a subtype of `T`; used when reading elements from a generic collection (producer).
*   **Lower Bounded Wildcard (`? super T`)**: Represents an unknown type that is `T` or a supertype of `T`; used when adding elements to a generic collection (consumer).
*   **PECS (Producer Extends, Consumer Super)**: A mnemonic to remember when to use `? extends T` (for producers/reading) and `? super T` (for consumers/writing).

#### Hands-on activity
**Activity: Building a Generic Pair Class**

Create a generic `Pair` class that can hold two objects of potentially different types. Implement methods to get and set both elements. Then, demonstrate its usage with different type combinations and show how type safety is enforced.

**Starter Code:**
```java
public class Pair<K, V> {
    private K key;
    private V value;

    // TODO: Implement constructor
    // TODO: Implement getKey() and getValue() methods
    // TODO: Implement setKey() and setValue() methods

    public static void main(String[] args) {
        // 1. Create a Pair of String and Integer
        // Pair<String, Integer> studentGrade = new Pair<>("Alice", 95);
        // System.out.println("Student: " + studentGrade.getKey() + ", Grade: " + studentGrade.getValue());

        // 2. Create a Pair of Integer and String
        // Pair<Integer, String> errorCode = new Pair<>(404, "Not Found");
        // System.out.println("Error Code: " + errorCode.getKey() + ", Message: " + errorCode.getValue());

        // 3. Demonstrate type safety (uncomment and observe compile error)
        // studentGrade.setKey(123); // Should cause a compile-time error
    }
}
```

**Expected Solution Structure (Guidance):**
```java
public class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }

    public void setKey(K key) {
        this.key = key;
    }

    public void setValue(V value) {
        this.value = value;
    }

    public static void main(String[] args) {
        Pair<String, Integer> studentGrade = new Pair<>("Alice", 95);
        System.out.println("Student: " + studentGrade.getKey() + ", Grade: " + studentGrade.getValue());

        Pair<Integer, String> errorCode = new Pair<>(404, "Not Found");
        System.out.println("Error Code: " + errorCode.getKey() + ", Message: " + errorCode.getValue());

        // Demonstrating type safety:
        // studentGrade.setKey(123); // Compile-time error: incompatible types: int cannot be converted to java.lang.String
        System.out.println("Attempting to set an invalid type for key (commented out due to compile error).");
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements about Java generics and type erasure is true?
    a) Generic type information is available at runtime, allowing `instanceof` checks on type parameters.
    b) Type erasure means that generic types are replaced by `Object` or their upper bound during compilation.
    c) Generics primarily prevent runtime `ClassCastException`s by deferring type checks to runtime.
    d) You can create an array of a parameterized type, e.g., `new List<String>[10]`.

    **Correct Answer:** b) Type erasure means that generic types are replaced by `Object` or their upper bound during compilation.
    **Explanation:** Type erasure is a core concept of Java generics, where type parameters are removed at compile time and replaced with their most restrictive type (usually `Object` or their specified upper bound). This ensures backward compatibility but means generic type information is not available at runtime, making `instanceof` checks on type parameters impossible (a). Generics prevent `ClassCastException`s by performing type checks at *compile time* (c). Creating arrays of parameterized types is not allowed due to type erasure (d).

2.  **Question:** Consider the following method signature: `public static void processList(List<? extends Number> numbers)`. Which of the following operations would be allowed inside this method?
    a) `numbers.add(new Integer(10));`
    b) `numbers.add(new Double(5.5));`
    c) `Number n = numbers.get(0);`
    d) `numbers.clear();`

    **Correct Answer:** c) `Number n = numbers.get(0);`
    **Explanation:** The `? extends Number` wildcard signifies an upper-bounded wildcard. This means the list can hold `Number` or any of its subtypes (like `Integer`, `Double`). This makes the list a "producer" of `Number` objects. You can safely *read* `Number` objects from it, as any element retrieved will be at least a `Number` (c). However, you cannot *add* any elements (except `null`) because the compiler doesn't know the exact subtype. If `numbers` was actually a `List<Integer>`, adding a `Double` would be incorrect, and if it was a `List<Double>`, adding an `Integer` would be incorrect. Thus, `add` operations (a, b) are disallowed for type safety reasons. While `numbers.clear()` (d) is a non-type-specific operation that removes all elements and is allowed, `get(0)` is the operation that directly demonstrates the type-safe *reading* capability enabled by `? extends Number`.

#### AI generation note
Create a 12-minute animated video explaining Java Generics. Start with a visual analogy of a "magic box" that can only hold one type of item, showing how `Object` required runtime checks and `ClassCastException`s. Then introduce `<T>` as a label on the box that the compiler reads. Visualize type erasure by showing the labels disappearing after compilation, but the compiler having already done its job. Dedicate a section to unbounded, upper-bounded (`? extends T`), and lower-bounded (`? super T`) wildcards, using a clear visual metaphor (e.g., a conveyor belt for producers, a funnel for consumers) and simple code examples for each. Show common compile-time errors when violating generic rules. Include an interactive quiz question after the wildcard explanation.

---

### Chapter 6.2 — Lambda Expressions and Functional Interfaces

#### Learning objectives
*   Define lambda expressions and explain their role in enabling functional programming in Java.
*   Write concise and readable lambda expressions to implement functional interfaces.
*   Identify and utilize common built-in functional interfaces from the `java.util.function` package.
*   Distinguish between lambda expressions and anonymous inner classes, understanding the benefits of lambdas.
*   Apply method references as a shorthand for specific lambda expressions.

#### Detailed lesson content
Java 8 introduced a groundbreaking feature: lambda expressions. This addition fundamentally changed how we write code, moving Java closer to a functional programming paradigm. Before lambdas, implementing simple interfaces, especially those with a single abstract method (known as functional interfaces), often involved verbose anonymous inner classes. Lambda expressions provide a concise syntax for representing an instance of a functional interface, making your code cleaner, more readable, and significantly more expressive. They allow you to treat functionality as a method argument or code as data, which is a powerful concept for concurrent programming, stream processing, and event handling.

Let's start by understanding the problem lambdas solve. Imagine you need to sort a list of strings by their length. Traditionally, you'd create an anonymous inner class implementing the `Comparator` interface:

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Pre-Java 8: Anonymous inner class
Collections.sort(names, new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        return s1.length() - s2.length();
    }
});
System.out.println("Sorted by length (anonymous inner class): " + names);
```

This code works, but it's quite verbose for such a simple operation. The `Comparator` interface is a functional interface because it has only one abstract method: `compare`. This is where lambda expressions shine.

A lambda expression consists of three parts:
1.  **Parameter list**: `(parameters)` – similar to method parameters. Can be empty, single (without parentheses), or multiple.
2.  **Arrow token**: `->` – separates parameters from the body.
3.  **Body**: `{expression}` or `{statements}` – the code to be executed.

Applying a lambda expression to the sorting example:

```java
List<String> namesLambda = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Java 8+: Lambda expression
Collections.sort(namesLambda, (s1, s2) -> s1.length() - s2.length());
System.out.println("Sorted by length (lambda): " + namesLambda);
```

Notice how much shorter and clearer the lambda version is. The compiler infers the types of `s1` and `s2` from the `Comparator` interface's `compare` method signature. If there's only one parameter, the parentheses can be omitted (e.g., `x -> x * x`). If the body is a single expression, the curly braces and `return` keyword can also be omitted. If the body contains multiple statements, curly braces are required, and `return` must be used explicitly for methods that return a value.

Lambda expressions are intrinsically linked to **functional interfaces**. A functional interface is any interface that contains exactly one abstract method. They can have default and static methods, but only one abstract method. The `@FunctionalInterface` annotation is optional but highly recommended. It tells the compiler to enforce the single abstract method rule, preventing you from accidentally adding another abstract method and breaking its functional interface status.

Java 8 introduced a new package, `java.util.function`, which contains a rich set of built-in functional interfaces for common use cases. Some of the most frequently used ones include:
*   `Predicate<T>`: Represents a boolean-valued function of one argument. `test(T t)` returns `boolean`.
    ```java
    Predicate<String> startsWithA = s -> s.startsWith("A");
    System.out.println("Does 'Apple' start with A? " + startsWithA.test("Apple")); // true
    ```
*   `Consumer<T>`: Represents an operation that accepts a single input argument and returns no result. `accept(T t)` returns `void`.
    ```java
    Consumer<String> printUpperCase = s -> System.out.println(s.toUpperCase());
    printUpperCase.accept("hello"); // HELLO
    ```
*   `Function<T, R>`: Represents a function that accepts one argument and produces a result. `apply(T t)` returns `R`.
    ```java
    Function<Integer, String> intToString = i -> "Number: " + i;
    System.out.println(intToString.apply(123)); // Number: 123
    ```
*   `Supplier<T>`: Represents a supplier of results. `get()` returns `T`.
    ```java
    Supplier<Double> randomValue = () -> Math.random();
    System.out.println("Random: " + randomValue.get());
    ```
*   `UnaryOperator<T>`: Represents an operation on a single operand of type `T` that produces a result of type `T`. Extends `Function<T, T>`.
    ```java
    UnaryOperator<Integer> square = x -> x * x;
    System.out.println("Square of 5: " + square.apply(5)); // 25
    ```
*   `BinaryOperator<T>`: Represents an operation upon two operands of type `T` that produces a result of type `T`. Extends `BiFunction<T, T, T>`.
    ```java
    BinaryOperator<Integer> sum = (a, b) -> a + b;
    System.out.println("Sum of 10 and 20: " + sum.apply(10, 20)); // 30
    ```
There are also primitive specializations (e.g., `IntPredicate`, `LongConsumer`, `DoubleFunction`) to avoid auto-boxing/unboxing overhead.

**Method references** are an even more compact way to express lambdas that simply call an existing method. They are syntactic sugar for specific lambda expressions. There are four main types:
1.  **Static method reference**: `ClassName::staticMethodName`
    ```java
    // Lambda: (s) -> System.out.println(s)
    Consumer<String> printer = System.out::println;
    printer.accept("Hello, Method Reference!");
    ```
2.  **Instance method reference of a particular object**: `objectName::instanceMethodName`
    ```java
    String prefix = "MSG: ";
    // Lambda: (s) -> prefix.concat(s)
    Function<String, String> addPrefix = prefix::concat;
    System.out.println(addPrefix.apply("Hello")); // MSG: Hello
    ```
3.  **Instance method reference of an arbitrary object of a particular type**: `ClassName::instanceMethodName`
    ```java
    // Lambda: (s1, s2) -> s1.compareToIgnoreCase(s2)
    Comparator<String> caseInsensitiveComparator = String::compareToIgnoreCase;
    List<String> words = Arrays.asList("Apple", "banana", "Cherry");
    Collections.sort(words, caseInsensitiveComparator);
    System.out.println("Sorted case-insensitively: " + words); // [Apple, banana, Cherry]
    ```
4.  **Constructor reference**: `ClassName::new`
    ```java
    // Lambda: () -> new ArrayList<String>()
    Supplier<List<String>> listSupplier = ArrayList::new;
    List<String> newList = listSupplier.get();
    newList.add("Item 1");
    System.out.println("New list: " + newList);
    ```

When should you use method references? When your lambda expression simply invokes an existing method without any additional logic. They make the code even more readable by directly stating *what* method is being called rather than *how* it's called.

A common mistake beginners make is trying to use lambdas with interfaces that are not functional interfaces (i.e., have more than one abstract method). The compiler will immediately flag this as an error. Another mistake is misunderstanding variable scope within lambdas. Lambdas can access effectively final local variables (variables that are not explicitly final but whose value is never changed after initialization). If you try to modify a local variable from within a lambda, you'll get a compile-time error. This is to prevent concurrency issues and ensure the lambda captures a stable value.

Lambda expressions and functional interfaces are foundational for the Java Stream API, which we'll explore in the next chapter. Mastering them is crucial for writing modern, efficient, and expressive Java code.

#### Key concepts
*   **Lambda Expression**: A concise way to represent an anonymous function (a block of code that can be passed around).
*   **Functional Interface**: An interface with exactly one abstract method. It can have default and static methods.
*   `@FunctionalInterface`: An optional annotation that instructs the compiler to verify that an interface has only one abstract method.
*   `java.util.function` package: Contains many pre-defined functional interfaces like `Predicate`, `Consumer`, `Function`, `Supplier`, `UnaryOperator`, `BinaryOperator`.
*   **Method Reference**: A shorthand syntax for lambda expressions that simply call an existing method.
*   **Effectively Final**: A local variable that is not explicitly declared `final` but whose value is not changed after it is initialized. Lambdas can only access effectively final local variables.

#### Hands-on activity
**Activity: Filtering and Transforming a List with Lambdas**

You have a list of `Person` objects (assume `Person` has `name` and `age` fields). Your task is to use lambda expressions and built-in functional interfaces to:
1.  Filter the list to include only people older than 30.
2.  Transform the filtered list into a list of their names (Strings).
3.  Print each name in uppercase.

**Starter Code:**
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.function.Function;
import java.util.function.Consumer;

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}

public class LambdaActivity {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25),
            new Person("Bob", 35),
            new Person("Charlie", 40),
            new Person("David", 30),
            new Person("Eve", 28)
        );

        // TODO 1: Create a Predicate to filter people older than 30
        // Predicate<Person> isOlderThan30 = /* your lambda here */;

        // TODO 2: Create a Function to map a Person to their name
        // Function<Person, String> getName = /* your lambda here */;

        // TODO 3: Create a Consumer to print a String in uppercase
        // Consumer<String> printUpperCase = /* your lambda here */;

        // --- Now, apply these lambdas ---
        List<String> namesOfOlderPeople = new ArrayList<>();
        for (Person p : people) {
            // if (isOlderThan30.test(p)) {
            //     String name = getName.apply(p);
            //     namesOfOlderPeople.add(name);
            // }
        }

        // System.out.println("Names of people older than 30:");
        // for (String name : namesOfOlderPeople) {
        //     printUpperCase.accept(name);
        // }
    }
}
```

**Expected Solution Structure (Guidance):**
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.function.Function;
import java.util.function.Consumer;

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}

public class LambdaActivity {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25),
            new Person("Bob", 35),
            new Person("Charlie", 40),
            new Person("David", 30),
            new Person("Eve", 28)
        );

        // TODO 1: Create a Predicate to filter people older than 30
        Predicate<Person> isOlderThan30 = p -> p.getAge() > 30;

        // TODO 2: Create a Function to map a Person to their name
        Function<Person, String> getName = Person::getName; // Using method reference for conciseness

        // TODO 3: Create a Consumer to print a String in uppercase
        Consumer<String> printUpperCase = s -> System.out.println(s.toUpperCase());

        // --- Now, apply these lambdas ---
        List<String> namesOfOlderPeople = new ArrayList<>();
        for (Person p : people) {
            if (isOlderThan30.test(p)) {
                String name = getName.apply(p);
                namesOfOlderPeople.add(name);
            }
        }

        System.out.println("Names of people older than 30:");
        for (String name : namesOfOlderPeople) {
            printUpperCase.accept(name);
        }
        // Expected Output:
        // Names of people older than 30:
        // BOB
        // CHARLIE
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following is NOT a valid lambda expression for a functional interface `MyConverter<F, T>` with an abstract method `T convert(F from)`?
    a) `(from) -> { return "Converted: " + from.toString(); }`
    b) `f -> "Converted: " + f.toString()`
    c) `(F from) -> "Converted: " + from.toString()`
    d) `(from, to) -> "Converted: " + from.toString()`

    **Correct Answer:** d) `(from, to) -> "Converted: " + from.toString()`
    **Explanation:** A lambda expression's parameter list must match the abstract method's signature in the functional interface. The `convert` method takes one parameter (`F from`). Option (d) provides two parameters (`from, to`), which does not match the functional interface's single-parameter method. Options (a), (b), and (c) are all valid variations of a single-parameter lambda expression.

2.  **Question:** You have a `List<Integer>` called `numbers`. You want to print each number, but only if it's even. Which of the following code snippets correctly uses a lambda expression and a built-in functional interface to achieve this?
    a) `numbers.forEach(i -> if (i % 2 == 0) System.out.println(i));`
    b) `Predicate<Integer> isEven = i -> i % 2 == 0; numbers.forEach(i -> { if (isEven.test(i)) System.out.println(i); });`
    c) `numbers.stream().filter(i -> i % 2 == 0).forEach(System.out::println);`
    d) `Consumer<Integer> printEven = i -> System.out.println(i % 2 == 0 ? i : ""); numbers.forEach(printEven);`

    **Correct Answer:** c) `numbers.stream().filter(i -> i % 2 == 0).forEach(System.out::println);`
    **Explanation:**
    *   Option (a) is syntactically incorrect; an `if` statement cannot directly be the body of a single-expression lambda.
    *   Option (b) is functionally correct but more verbose than necessary for this task, using a `Predicate` explicitly within a loop.
    *   Option (c) is the most idiomatic and concise Java 8 solution using the Stream API, which combines filtering and printing efficiently. This is the intended modern approach.
    *   Option (d) uses a `Consumer` but prints an empty string for odd numbers, which is not the desired behavior (only print even numbers).

#### AI generation note
Create a 10-minute interactive code demo focusing on lambda expressions and functional interfaces. Start by showing the verbose anonymous inner class for `Comparator` and then refactor it step-by-step into a concise lambda. Introduce the `java.util.function` package, demonstrating `Predicate`, `Consumer`, and `Function` with live coding examples (e.g., filtering a list, printing elements, transforming data). Then, introduce method references as a further simplification, showing examples for static, instance, and constructor references side-by-side with their lambda equivalents. Include a drag-and-drop exercise where learners match a lambda expression to its equivalent method reference. Emphasize common mistakes like non-functional interfaces or modifying effectively final variables, showing compiler errors.

---

### Chapter 6.3 — The Stream API

#### Learning objectives
*   Explain the concept of streams in Java and their benefits for processing collections.
*   Differentiate between intermediate and terminal stream operations.
*   Apply common intermediate operations suchs as `filter()`, `map()`, `distinct()`, `sorted()`, and `peek()`.
*   Utilize various terminal operations like `forEach()`, `collect()`, `reduce()`, `count()`, `min()`, `max()`, `anyMatch()`, `allMatch()`, and `noneMatch()`.
*   Construct complex data processing pipelines using the Stream API for efficient and expressive code.

#### Detailed lesson content
Building upon our understanding of lambda expressions and functional interfaces, we now arrive at one of Java 8's most powerful features: the Stream API. The Stream API provides a new, functional way to process collections of objects. Unlike collections, which are about storing and managing data, streams are about *processing* data. They allow you to perform complex data manipulation tasks in a declarative, concise, and often parallelizable manner, making your code more readable and efficient, especially for large datasets. Think of a stream as a pipeline through which data flows, undergoing various transformations and computations along the way.

A key characteristic of streams is that they are **lazy** and **immutable**. Lazy means that operations on a stream are not executed until a terminal operation is invoked. Immutable means that stream operations do not modify the original data source; instead, they produce new streams or a final result. This non-destructive nature is crucial for functional programming principles. Streams can be created from various data sources, including collections, arrays, I/O channels, and even generated sequences.

The lifecycle of a stream typically involves three stages:
1.  **Source**: Where the stream originates (e.g., `List.stream()`, `Arrays.stream(array)`, `Stream.of(elements)`).
2.  **Intermediate Operations**: These operations transform the stream into another stream. They are lazy and return a new `Stream` object, allowing for chaining. Examples include `filter()`, `map()`, `distinct()`, `sorted()`, `peek()`, `limit()`, `skip()`.
3.  **Terminal Operation**: These operations produce a result or a side effect and close the stream. Once a terminal operation is performed, the stream cannot be reused. Examples include `forEach()`, `collect()`, `reduce()`, `count()`, `min()`, `max()`, `anyMatch()`, `allMatch()`, `noneMatch()`, `findFirst()`, `findAny()`.

Let's explore some common intermediate operations:
*   `filter(Predicate<T> predicate)`: Selects elements that match a given condition.
    ```java
    List<String> words = Arrays.asList("apple", "banana", "cat", "dog", "elephant");
    words.stream()
         .filter(s -> s.length() > 3) // Keep only words longer than 3 characters
         .forEach(System.out::println); // Output: apple, banana, elephant
    ```
*   `map(Function<T, R> mapper)`: Transforms each element into a new form.
    ```java
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    numbers.stream()
           .map(i -> i * i) // Square each number
           .forEach(System.out::println); // Output: 1, 4, 9, 16, 25
    ```
*   `distinct()`: Returns a stream with unique elements (based on `equals()`).
    ```java
    List<Integer> duplicates = Arrays.asList(1, 2, 2, 3, 1, 4);
    duplicates.stream()
              .distinct()
              .forEach(System.out::println); // Output: 1, 2, 3, 4
    ```
*   `sorted()` / `sorted(Comparator<T> comparator)`: Sorts the elements.
    ```java
    List<String> unsorted = Arrays.asList("zebra", "apple", "banana");
    unsorted.stream()
            .sorted() // Natural order
            .forEach(System.out::println); // Output: apple, banana, zebra
    ```
*   `peek(Consumer<T> action)`: Performs an action on each element as it passes through the stream, primarily for debugging. It's an intermediate operation, unlike `forEach`.
    ```java
    List<String> debugWords = Arrays.asList("one", "two", "three");
    debugWords.stream()
              .filter(s -> s.length() > 2)
              .peek(s -> System.out.println("Debugging: " + s)) // See elements after filter
              .map(String::toUpperCase)
              .forEach(System.out::println);
    // Output:
    // Debugging: three
    // THREE
    ```

Now, let's look at terminal operations:
*   `forEach(Consumer<T> action)`: Performs an action for each element in the stream. This is a common way to consume elements when no specific return value is needed.
    ```java
    List<String> names = Arrays.asList("Alice", "Bob");
    names.stream().forEach(System.out::println); // Prints each name
    ```
*   `collect(Collector<T, A, R> collector)`: Gathers elements into a collection or summarizes them. This is one of the most versatile terminal operations, often used with `Collectors` utility class.
    ```java
    List<String> fruits = Arrays.asList("apple", "banana", "cherry");
    List<String> upperCaseFruits = fruits.stream()
                                         .map(String::toUpperCase)
                                         .collect(Collectors.toList()); // Collect into a List
    System.out.println(upperCaseFruits); // [APPLE, BANANA, CHERRY]

    String combinedFruits = fruits.stream()
                                  .collect(Collectors.joining(", ")); // Join into a single string
    System.out.println(combinedFruits); // apple, banana, cherry
    ```
*   `reduce(T identity, BinaryOperator<T> accumulator)`: Performs a reduction on the elements of this stream, using an associative accumulation function, and returns an `Optional<T>`. `identity` is the initial value.
    ```java
    List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
    int sum = nums.stream().reduce(0, (a, b) -> a + b); // Sum of elements
    System.out.println("Sum: " + sum); // 15
    ```
*   `count()`: Returns the count of elements in the stream.
    ```java
    long count = fruits.stream().filter(s -> s.startsWith("a")).count(); // Count fruits starting with 'a'
    System.out.println("Count of 'a' fruits: " + count); // 1
    ```
*   `min(Comparator<T> comparator)` / `max(Comparator<T> comparator)`: Returns the minimum/maximum element according to the provided `Comparator`, wrapped in an `Optional`.
    ```java
    Optional<Integer> maxNum = nums.stream().max(Integer::compare);
    maxNum.ifPresent(m -> System.out.println("Max number: " + m)); // Max number: 5
    ```
*   `anyMatch(Predicate<T> predicate)` / `allMatch(Predicate<T> predicate)` / `noneMatch(Predicate<T> predicate)`: Perform short-circuiting terminal operations that return a boolean.
    ```java
    boolean hasEven = nums.stream().anyMatch(i -> i % 2 == 0); // Is there any even number?
    System.out.println("Has even: " + hasEven); // true
    ```

**Common Mistakes and Best Practices:**
*   **Reusing a Stream:** A stream can only be consumed once. After a terminal operation, the stream is "closed." Attempting to perform another operation on the same stream will result in an `IllegalStateException`. If you need to perform multiple terminal operations, create a new stream from the source each time.
    ```java
    List<String> data = Arrays.asList("A", "B", "C");
    Stream<String> myStream = data.stream();
    myStream.forEach(System.out::println); // Terminal operation
    // myStream.count(); // ERROR: stream has already been operated upon or closed
    ```
*   **Forgetting a Terminal Operation:** Intermediate operations are lazy. If you build a pipeline but don't include a terminal operation, nothing will execute.
*   **Side Effects in Intermediate Operations:** While `peek()` is for debugging side effects, generally avoid modifying external state within `filter()` or `map()` for cleaner, more predictable functional code.
*   **Performance:** For very small collections, a traditional `for` loop might be marginally faster due to stream overhead. However, for larger collections, especially with parallel streams (`collection.parallelStream()`), streams can offer significant performance benefits and improved readability. Use parallel streams judiciously, as they introduce complexity and potential performance pitfalls if not used correctly (e.g., non-thread-safe operations, high contention).

The Stream API is a cornerstone of modern Java development. It encourages a more declarative style of programming, allowing you to express *what* you want to achieve rather than *how* to achieve it, leading to more maintainable and scalable code.

#### Key concepts
*   **Stream API**: A Java 8 feature for processing sequences of elements from a data source in a functional style.
*   **Lazy Evaluation**: Stream operations are not executed until a terminal operation is invoked.
*   **Immutability**: Stream operations do not modify the original data source; they produce new streams or a final result.
*   **Stream Pipeline**: A sequence of stream operations, starting with a source, followed by zero or more intermediate operations, and ending with a terminal operation.
*   **Intermediate Operation**: An operation that transforms a stream into another stream (e.g., `filter()`, `map()`, `distinct()`, `sorted()`, `peek()`). They are lazy.
*   **Terminal Operation**: An operation that produces a result or a side effect and closes the stream (e.g., `forEach()`, `collect()`, `reduce()`, `count()`, `min()`, `max()`, `anyMatch()`).
*   **`Collectors`**: A utility class providing implementations of `Collector` interface, used with `collect()` for common reduction tasks (e.g., `toList()`, `toSet()`, `joining()`, `groupingBy()`).
*   **`Optional<T>`**: A container object that may or may not contain a non-null value. Used by terminal operations like `min()`, `max()`, `findFirst()` to handle cases where no element is found.
*   **Parallel Stream**: A stream that can process elements in parallel, potentially speeding up operations on large datasets. Accessed via `parallelStream()`.

#### Hands-on activity
**Activity: Analyzing Student Scores with Streams**

You have a list of `Student` objects, each with a `name` (String) and `score` (int). Your task is to use the Stream API to:
1.  Filter out students who scored less than 70.
2.  Map the remaining students to their names.
3.  Sort the names alphabetically.
4.  Collect the sorted names into a new `List<String>`.
5.  Print the average score of all students (including those below 70).

**Starter Code:**
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.OptionalDouble;

class Student {
    String name;
    int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() { return name; }
    public int getScore() { return score; }

    @Override
    public String toString() {
        return "Student{" + "name='" + name + '\'' + ", score=" + score + '}';
    }
}

public class StreamActivity {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Alice", 85),
            new Student("Bob", 60),
            new Student("Charlie", 92),
            new Student("David", 75),
            new Student("Eve", 68),
            new Student("Frank", 80)
        );

        // TODO 1-4: Filter, map, sort, and collect names of students with score >= 70
        // List<String> highAchieverNames = students.stream()
        //     .filter(...) // Filter students with score >= 70
        //     .map(...)    // Map to student names
        //     .sorted()    // Sort names alphabetically
        //     .collect(Collectors.toList()); // Collect into a List

        // System.out.println("High Achievers (names): " + highAchieverNames);

        // TODO 5: Calculate and print the average score of ALL students
        // OptionalDouble averageScore = students.stream()
        //     .mapToInt(...) // Map to an IntStream of scores
        //     .average();    // Calculate average

        // averageScore.ifPresent(avg -> System.out.println("Average score of all students: " + String.format("%.2f", avg)));
    }
}
```

**Expected Solution Structure (Guidance):**
```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.OptionalDouble;

class Student {
    String name;
    int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() { return name; }
    public int getScore() { return score; }

    @Override
    public String toString() {
        return "Student{" + "name='" + name + '\'' + ", score=" + score + '}';
    }
}

public class StreamActivity {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Alice", 85),
            new Student("Bob", 60),
            new Student("Charlie", 92),
            new Student("David", 75),
            new Student("Eve", 68),
            new Student("Frank", 80)
        );

        // TODO 1-4: Filter, map, sort, and collect names of students with score >= 70
        List<String> highAchieverNames = students.stream()
            .filter(s -> s.getScore() >= 70) // Filter students with score >= 70
            .map(Student::getName)           // Map to student names (using method reference)
            .sorted()                        // Sort names alphabetically
            .collect(Collectors.toList());   // Collect into a List

        System.out.println("High Achievers (names): " + highAchieverNames);
        // Expected Output: High Achievers (names): [Alice, Charlie, David, Frank]

        // TODO 5: Calculate and print the average score of ALL students
        OptionalDouble averageScore = students.stream()
            .mapToInt(Student::getScore) // Map to an IntStream of scores
            .average();                  // Calculate average

        averageScore.ifPresent(avg -> System.out.println("Average score of all students: " + String.format("%.2f", avg)));
        // Expected Output: Average score of all students: 76.67
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following statements about Java Streams is FALSE?
    a) Intermediate operations are lazy and return a new stream.
    b) A stream can be reused multiple times after a terminal operation.
    c) Terminal operations produce a result or a side effect and close the stream.
    d) Streams do not modify the original data source.

    **Correct Answer:** b) A stream can be reused multiple times after a terminal operation.
    **Explanation:** Streams are designed for single-use. Once a terminal operation is performed, the stream is considered consumed and cannot be reused. Attempting to do so will result in an `IllegalStateException`. Intermediate operations are indeed lazy and return new streams (a), terminal operations close the stream (c), and streams are non-destructive to their source (d).

2.  **Question:** You have a `List<String>` called `items`. You want to count how many unique items start with the letter 'A' (case-insensitive). Which Stream API pipeline correctly achieves this?
    a) `items.stream().filter(s -> s.startsWith("A")).distinct().count();`
    b) `items.stream().map(String::toLowerCase).filter(s -> s.startsWith("a")).distinct().count();`
    c) `items.stream().distinct().filter(s -> s.toLowerCase().startsWith("a")).count();`
    d) `items.stream().filter(s -> s.toLowerCase().startsWith("a")).distinct().count();`

    **Correct Answer:** b) `items.stream().map(String::toLowerCase).filter(s -> s.startsWith("a")).distinct().count();`
    **Explanation:** To count unique items case-insensitively, you must first normalize the case of all items (`map(String::toLowerCase)`). Then, you can filter for items starting with 'a' (which are now all lowercase). Finally, `distinct()` will correctly identify unique items based on their lowercase representation. Option (d) would apply `distinct()` to the original casing of the filtered items, potentially counting "Apple" and "apple" as two distinct items, which is not desired for "unique items...case-insensitive". Option (a) does not handle case-insensitivity for the filter or distinctness. Option (c) applies `distinct()` before normalizing case, which would incorrectly treat "Apple" and "apple" as distinct before the filter.

#### AI generation note
Design a 15-minute interactive lab walkthrough for the Stream API. Begin with a visual animation of a collection transforming into a stream (a river of data). Then, demonstrate live coding for a sequence of operations: `filter` (e.g., filtering numbers), `map` (e.g., squaring numbers), `distinct` (e.g., unique names), and `sorted` (e.g., sorting strings). Explain the lazy nature of intermediate operations by showing nothing happens until `forEach` is called. Conclude with `collect(Collectors.toList())` and `reduce()` for aggregation. Include a step-by-step coding challenge where learners build a stream pipeline to process a list of custom objects (e.g., `Product` objects with price and category). Highlight the `IllegalStateException` when reusing a stream.

---

### Chapter 6.4 — Collections Framework: Lists and Sets

#### Learning objectives
*   Understand the fundamental role of the Java Collections Framework in managing data.
*   Differentiate between the `List` and `Set` interfaces and their primary characteristics.
*   Identify and apply common `List` implementations: `ArrayList` and `LinkedList`, understanding their performance trade-offs.
*   Identify and apply common `Set` implementations: `HashSet`, `LinkedHashSet`, and `TreeSet`, understanding their performance and ordering characteristics.
*   Choose the appropriate `List` or `Set` implementation based on specific application requirements.

#### Detailed lesson content
The Java Collections Framework is a unified architecture for representing and manipulating collections, allowing them to be manipulated independently of their implementation details. It provides interfaces (like `List`, `Set`, `Map`, `Queue`), abstract classes, and concrete implementations (like `ArrayList`, `HashSet`, `HashMap`). Mastering the Collections Framework is essential for any Java developer, as it provides robust, efficient, and reusable data structures for almost any data management task. We'll start by focusing on two fundamental interfaces: `List` and `Set`.

The `Collection` interface is the root of the collection hierarchy. It defines common operations that all collections support, such as `add()`, `remove()`, `size()`, `isEmpty()`, `contains()`, and `iterator()`.

### The `List` Interface
A `List` is an ordered collection (also known as a *sequence*). It allows duplicate elements. Users of a `List` have precise control over where each element is inserted in the list. Elements can be accessed by their integer index (position), and elements can be searched for. Think of a `List` like a dynamic array.

Key characteristics of `List`:
*   **Ordered**: Elements maintain their insertion order.
*   **Indexed**: Elements can be accessed by index (0 to `size() - 1`).
*   **Allows Duplicates**: You can add the same element multiple times.

Common `List` implementations:

1.  **`ArrayList`**: This is the most commonly used `List` implementation. It is backed by a dynamic array.
    *   **Pros**: Excellent for random access (getting an element by index) because it's an array (`O(1)`). Adding elements to the end is typically `O(1)` amortized time.
    *   **Cons**: Inserting or deleting elements in the middle of the list is expensive (`O(n)`) because all subsequent elements need to be shifted. Resizing the underlying array (when capacity is exceeded) can also be `O(n)`.
    *   **Use Case**: When you need frequent random access to elements and fewer insertions/deletions in the middle.
    ```java
    List<String> names = new ArrayList<>();
    names.add("Alice"); // Adds to end
    names.add("Bob");
    names.add(1, "Charlie"); // Inserts at index 1, shifts "Bob"
    System.out.println(names.get(0)); // Alice (O(1))
    System.out.println(names); // [Alice, Charlie, Bob]
    names.remove(0); // Removes Alice, shifts Charlie, Bob
    System.out.println(names); // [Charlie, Bob]
    ```

2.  **`LinkedList`**: This implementation uses a doubly-linked list data structure. Each element (node) stores a reference to the next and previous elements.
    *   **Pros**: Excellent for insertions and deletions anywhere in the list (`O(1)`) once the position is found. Good for implementing stacks and queues (it also implements `Deque`).
    *   **Cons**: Poor for random access (`O(n)`) because you have to traverse the list from the beginning or end to reach a specific index.
    *   **Use Case**: When you need frequent insertions/deletions at arbitrary positions, or when using it as a queue/stack.
    ```java
    List<String> tasks = new LinkedList<>();
    tasks.add("Task 1");
    tasks.addFirst("Urgent Task"); // LinkedList specific method
    tasks.add(1, "Mid-priority Task");
    System.out.println(tasks); // [Urgent Task, Mid-priority Task, Task 1]
    System.out.println(tasks.get(2)); // Task 1 (O(n) traversal)
    tasks.removeFirst(); // Urgent Task removed (O(1))
    System.out.println(tasks); // [Mid-priority Task, Task 1]
    ```

**Common List Mistakes**:
*   Using `LinkedList` when `ArrayList` would be faster for `get(index)` operations.
*   Performing many `add(index, element)` or `remove(index)` operations on an `ArrayList` in a loop, leading to `O(n^2)` performance.

### The `Set` Interface
A `Set` is a collection that cannot contain duplicate elements. It models the mathematical set abstraction. Unlike `List`, `Set` does not guarantee any specific order of elements.

Key characteristics of `Set`:
*   **No Duplicates**: Adding a duplicate element has no effect (the `add()` method returns `false`).
*   **Unordered (generally)**: Elements typically do not maintain insertion order, though some implementations provide it.
*   **No Indexed Access**: You cannot access elements by index.

Common `Set` implementations:

1.  **`HashSet`**: The most common `Set` implementation. It uses a hash table for storage.
    *   **Pros**: Provides constant-time performance (`O(1)`) for basic operations like `add()`, `remove()`, `contains()`, assuming a good hash function. Very fast for checking membership.
    *   **Cons**: Does not guarantee any order of elements. Iteration order is unpredictable and can change over time.
    *   **Important**: For `HashSet` to work correctly, the elements you store in it must correctly implement `hashCode()` and `equals()` methods. If not, `HashSet` might store duplicate objects or fail to find existing objects.
    *   **Use Case**: When you need to store a collection of unique items and order is not important, and fast lookup is critical.
    ```java
    Set<String> uniqueColors = new HashSet<>();
    uniqueColors.add("Red");
    uniqueColors.add("Green");
    uniqueColors.add("Red"); // Duplicate, ignored
    System.out.println(uniqueColors.size()); // 2
    System.out.println(uniqueColors.contains("Green")); // true
    System.out.println(uniqueColors); // [Red, Green] or [Green, Red] - order not guaranteed
    ```

2.  **`LinkedHashSet`**: This `Set` implementation also uses a hash table but maintains a doubly-linked list running through all its entries.
    *   **Pros**: Provides insertion-order iteration. It's almost as fast as `HashSet` for basic operations.
    *   **Cons**: Slightly slower than `HashSet` due to maintaining the linked list.
    *   **Use Case**: When you need the fast `O(1)` operations of `HashSet` but also require predictable iteration order (the order elements were inserted).
    ```java
    Set<String> orderedUniqueColors = new LinkedHashSet<>();
    orderedUniqueColors.add("Red");
    orderedUniqueColors.add("Green");
    orderedUniqueColors.add("Blue");
    System.out.println(orderedUniqueColors); // [Red, Green, Blue] - insertion order maintained
    ```

3.  **`TreeSet`**: This `Set` implementation stores its elements in a sorted tree structure (specifically, a Red-Black tree).
    *   **Pros**: Elements are stored in natural sorted order (if they implement `Comparable`) or by a `Comparator` provided at construction time. Provides guaranteed `log(n)` time cost for `add()`, `remove()`, `contains()`. Also offers methods like `first()`, `last()`, `headSet()`, `tailSet()`.
    *   **Cons**: Slower than `HashSet` and `LinkedHashSet` for basic operations due to the overhead of maintaining the sorted tree structure (`O(log n)` vs `O(1)`).
    *   **Important**: Elements stored in a `TreeSet` must be mutually comparable. If they don't implement `Comparable`, or if you need a custom sort order, you must provide a `Comparator`.
    *   **Use Case**: When you need a sorted collection of unique elements, or when you need to perform range-based queries.
    ```java
    Set<Integer> sortedNumbers = new TreeSet<>();
    sortedNumbers.add(5);
    sortedNumbers.add(1);
    sortedNumbers.add(3);
    System.out.println(sortedNumbers); // [1, 3, 5] - natural sorted order
    ```

Choosing the right collection is a critical decision that impacts your application's performance and correctness. Always consider the specific requirements: Do you need order? Do you allow duplicates? What operations will be most frequent (add, remove, get by index, check containment)?

#### Key concepts
*   **Collections Framework**: A set of interfaces and classes that represent and manipulate groups of objects.
*   **`Collection` Interface**: The root interface in the collection hierarchy, defining common operations.
*   **`List` Interface**: An ordered collection that allows duplicate elements and provides indexed access.
*   **`ArrayList`**: A `List` implementation backed by a dynamic array, good for random access, poor for middle insertions/deletions.
*   **`LinkedList`**: A `List` implementation backed by a doubly-linked list, good for middle insertions/deletions, poor for random access. Also implements `Deque`.
*   **`Set` Interface**: A collection that cannot contain duplicate elements and generally does not guarantee order.
*   **`HashSet`**: A `Set` implementation backed by a hash table, offering `O(1)` average-case performance for basic operations, but no guaranteed order. Requires proper `hashCode()` and `equals()` implementation for elements.
*   **`LinkedHashSet`**: A `Set` implementation that maintains insertion order while still providing `O(1)` average-case performance.
*   **`TreeSet`**: A `Set` implementation that stores elements in a sorted tree structure, guaranteeing sorted order (natural or custom `Comparator`). Offers `O(log n)` performance. Requires elements to be `Comparable` or a `Comparator` to be provided.
*   **`hashCode()` and `equals()`**: Crucial methods that must be correctly overridden for custom objects stored in hash-based collections (`HashSet`, `HashMap`) to ensure correct behavior regarding uniqueness and retrieval.

#### Hands-on activity
**Activity: Managing User Preferences**

Imagine you're building a system to manage user preferences for a website.
1.  **Shopping Cart (`List` scenario):** A user adds items to their shopping cart. The order matters, and they can add multiple quantities of the same item. Use an `ArrayList`.
2.  **Visited Pages (`Set` scenario):** Keep track of unique pages a user has visited. The order they visited doesn't matter, but duplicates should be ignored. Use a `HashSet`.
3.  **Recent Searches (`LinkedHashSet` scenario):** Store a user's recent search terms. You need to remember the order they searched, but only store unique terms. If a term is searched again, it should move to the "most recent" position. (Hint: `LinkedHashSet` can be used, but for "move to most recent", a custom implementation or `Deque` is better. For this activity, just add unique terms in insertion order).
4.  **Favorite Tags (`TreeSet` scenario):** A user has a list of favorite tags, and they want them always displayed alphabetically. Use a `TreeSet`.

**Starter Code:**
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class CollectionsActivity {
    public static void main(String[] args) {
        // 1. Shopping Cart (ArrayList)
        List<String> shoppingCart = new ArrayList<>();
        System.out.println("--- Shopping Cart ---");
        // TODO: Add "Laptop", "Mouse", "Laptop", "Keyboard" to the cart
        // System.out.println("Cart: " + shoppingCart); // Expected: [Laptop, Mouse, Laptop, Keyboard]

        // 2. Visited Pages (HashSet)
        Set<String> visitedPages = new HashSet<>();
        System.out.println("\n--- Visited Pages ---");
        // TODO: Add "/home", "/products/laptop", "/home", "/profile"
        // System.out.println("Visited: " + visitedPages); // Expected: Unique pages, order arbitrary

        // 3. Recent Searches (LinkedHashSet - for insertion order)
        Set<String> recentSearches = new LinkedHashSet<>();
        System.out.println("\n--- Recent Searches ---");
        // TODO: Add "java", "generics", "java", "streams"
        // System.out.println("Searches: " + recentSearches); // Expected: [java, generics, streams] (insertion order)

        // 4. Favorite Tags (TreeSet)
        Set<String> favoriteTags = new TreeSet<>();
        System.out.println("\n--- Favorite Tags ---");
        // TODO: Add "programming", "java", "oop", "generics"
        // System.out.println("Tags: " + favoriteTags); // Expected: [generics, java, oop, programming] (alphabetical)
    }
}
```

**Expected Solution Structure (Guidance):**
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class CollectionsActivity {
    public static void main(String[] args) {
        // 1. Shopping Cart (ArrayList)
        List<String> shoppingCart = new ArrayList<>();
        System.out.println("--- Shopping Cart ---");
        shoppingCart.add("Laptop");
        shoppingCart.add("Mouse");
        shoppingCart.add("Laptop"); // Duplicate allowed
        shoppingCart.add("Keyboard");
        System.out.println("Cart: " + shoppingCart); // Expected: [Laptop, Mouse, Laptop, Keyboard]

        // 2. Visited Pages (HashSet)
        Set<String> visitedPages = new HashSet<>();
        System.out.println("\n--- Visited Pages ---");
        visitedPages.add("/home");
        visitedPages.add("/products/laptop");
        visitedPages.add("/home"); // Duplicate ignored
        visitedPages.add("/profile");
        System.out.println("Visited: " + visitedPages); // Expected: Unique pages, order arbitrary (e.g., [/profile, /home, /products/laptop])

        // 3. Recent Searches (LinkedHashSet - for insertion order)
        Set<String> recentSearches = new LinkedHashSet<>();
        System.out.println("\n--- Recent Searches ---");
        recentSearches.add("java");
        recentSearches.add("generics");
        recentSearches.add("java"); // Duplicate ignored, but preserves original insertion order
        recentSearches.add("streams");
        System.out.println("Searches: " + recentSearches); // Expected: [java, generics, streams] (insertion order)

        // 4. Favorite Tags (TreeSet)
        Set<String> favoriteTags = new TreeSet<>();
        System.out.println("\n--- Favorite Tags ---");
        favoriteTags.add("programming");
        favoriteTags.add("java");
        favoriteTags.add("oop");
        favoriteTags.add("generics");
        System.out.println("Tags: " + favoriteTags); // Expected: [generics, java, oop, programming] (alphabetical)
    }
}
```

#### Assessment idea
1.  **Question:** You need to store a list of customer orders. The order in which they were received is important, and customers can place multiple identical orders. Which Java Collection interface and its common implementation would be most appropriate?
    a) `Set` and `HashSet`
    b) `List` and `LinkedList`
    c) `Set` and `TreeSet`
    d) `List` and `ArrayList`

    **Correct Answer:** d) `List` and `ArrayList`
    **Explanation:** The requirements state "order in which they were received is important" (implies `List`) and "customers can place multiple identical orders" (implies `List`, as `Set` disallows duplicates). Both `ArrayList` and `LinkedList` are `List` implementations. `ArrayList` is generally preferred for general-purpose lists where random access is common, and insertions/deletions are mostly at the end. While `LinkedList` could also work, `ArrayList` is typically the default choice unless specific `LinkedList` advantages (like frequent middle insertions/deletions or `Deque` functionality) are needed. Given the general scenario, `ArrayList` is a very strong candidate.

2.  **Question:** You are building a system to track unique visitor IDs to your website. You need very fast checks to see if an ID has been seen before, and the order of IDs doesn't matter. Which `Set` implementation should you choose, and what is a critical consideration for the `VisitorID` class if it's a custom object?
    a) `LinkedHashSet`; `VisitorID` must implement `Comparable`.
    b) `TreeSet`; `VisitorID` must implement `Serializable`.
    c) `HashSet`; `VisitorID` must correctly override `hashCode()` and `equals()`.
    d) `ArrayList`; `VisitorID` must have a unique ID field.

    **Correct Answer:** c) `HashSet`; `VisitorID` must correctly override `hashCode()` and `equals()`.
    **Explanation:** For "very fast checks" and "order doesn't matter," `HashSet` is the ideal choice due to its `O(1)` average-case performance for `add()`, `remove()`, and `contains()`. For `HashSet` to correctly determine uniqueness and retrieve objects, any custom object stored within it (like `VisitorID`) *must* have correctly overridden `hashCode()` and `equals()` methods. If these are not overridden, `HashSet` will use the default `Object` implementations, which typically compare object references, leading to incorrect behavior for value-based equality.

#### AI generation note
Create a 10-minute slide deck with clear diagrams comparing `List` and `Set`. For `List`, use animated slides to show `ArrayList`'s array-based storage (resizing, shifting elements for middle insertion) versus `LinkedList`'s node-based storage (pointers, efficient middle insertion/deletion). For `Set`, explain `HashSet`'s reliance on `hashCode()` and `equals()` with a visual of hash buckets, `LinkedHashSet` adding a linked list overlay, and `TreeSet` showing a binary search tree structure. Include a comparison table summarizing performance characteristics (`O(1)`, `O(n)`, `O(log n)`) for common operations for each implementation. Conclude with a scenario-based multiple-choice quiz question to test understanding of when to use which collection.

---

### Chapter 6.5 — Collections Framework: Maps and Queues

#### Learning objectives
*   Understand the purpose and characteristics of the `Map` interface for key-value pair storage.
*   Identify and apply common `Map` implementations: `HashMap`, `LinkedHashMap`, and `TreeMap`, understanding their performance and ordering characteristics.
*   Understand the purpose and characteristics of the `Queue` and `Deque` interfaces for ordered element processing.
*   Identify and apply common `Queue` and `Deque` implementations: `PriorityQueue` and `ArrayDeque`.
*   Choose the appropriate `Map` or `Queue` implementation based on specific application requirements.

#### Detailed lesson content
Continuing our exploration of the Java Collections Framework, we now turn our attention to two more powerful interfaces: `Map` and `Queue`. While `List` and `Set` deal with single elements, `Map` is designed for storing key-value pairs, providing a way to look up values based on unique keys. `Queue` and `Deque` are specialized collections for managing elements in a specific order for processing, often used in scenarios like task scheduling or breadth-first searches.

### The `Map` Interface
A `Map` is an object that maps keys to values. A `Map` cannot contain duplicate keys; each key can map to at most one value. It is not considered a true `Collection` because it doesn't extend the `Collection` interface, but it's an integral part of the Collections Framework.

Key characteristics of `Map`:
*   **Key-Value Pairs**: Stores data as associations between a unique key and a value.
*   **Unique Keys**: Each key in a `Map` must be unique. If you try to put a value with an existing key, the old value is replaced.
*   **No Order (generally)**: Similar to `Set`, `Map` implementations generally do not guarantee any specific order of key-value pairs, though some do.

Common `Map` implementations:

1.  **`HashMap`**: The most commonly used `Map` implementation. It uses a hash table for storage.
    *   **Pros**: Provides constant-time performance (`O(1)`) for `get()`, `put()`, `remove()`, and `containsKey()` operations on average, assuming a good hash function. Very fast for lookup by key.
    *   **Cons**: Does not guarantee any order of keys or values. Iteration order is unpredictable.
    *   **Important**: Keys (and values, if they are custom objects) stored in a `HashMap` must correctly implement `hashCode()` and `equals()`. If not, `HashMap` might fail to find existing keys or store duplicate entries based on value.
    *   **Use Case**: When you need to store key-value pairs for fast retrieval based on the key, and the order of elements is not important.
    ```java
    Map<String, Integer> studentScores = new HashMap<>();
    studentScores.put("Alice", 95);
    studentScores.put("Bob", 88);
    studentScores.put("Alice", 98); // Updates Alice's score
    System.out.println(studentScores.get("Bob")); // 88 (O(1))
    System.out.println(studentScores.containsKey("Alice")); // true
    System.out.println(studentScores); // {Bob=88, Alice=98} - order not guaranteed
    ```

2.  **`LinkedHashMap`**: This `Map` implementation uses a hash table but maintains a doubly-linked list running through all its entries.
    *   **Pros**: Provides insertion-order iteration of keys (or access order, if configured). It's almost as fast as `HashMap` for basic operations.
    *   **Cons**: Slightly slower than `HashMap` due to maintaining the linked list.
    *   **Use Case**: When you need the fast `O(1)` operations of `HashMap` but also require predictable iteration order (the order elements were inserted or last accessed).
    ```java
    Map<String, String> userSettings = new LinkedHashMap<>();
    userSettings.put("theme", "dark");
    userSettings.put("language", "en");
    userSettings.put("notifications", "on");
    System.out.println(userSettings); // {theme=dark, language=en, notifications=on} - insertion order
    ```

3.  **`TreeMap`**: This `Map` implementation stores its entries in a sorted tree structure (a Red-Black tree).
    *   **Pros**: Keys are stored in natural sorted order (if they implement `Comparable`) or by a `Comparator` provided at construction time. Provides guaranteed `log(n)` time cost for `get()`, `put()`, `remove()`, and `containsKey()`. Offers methods for range-based queries (e.g., `firstKey()`, `lastKey()`, `subMap()`).
    *   **Cons**: Slower than `HashMap` and `LinkedHashMap` for basic operations due to the overhead of maintaining the sorted tree structure (`O(log n)` vs `O(1)`).
    *   **Important**: Keys stored in a `TreeMap` must be mutually comparable. If they don't implement `Comparable`, or if you need a custom sort order, you must provide a `Comparator`.
    *   **Use Case**: When you need a sorted collection of key-value pairs, or when you need to perform range-based queries on keys.
    ```java
    Map<Integer, String> errorCodes = new TreeMap<>();
    errorCodes.put(500, "Internal Server Error");
    errorCodes.put(404, "Not Found");
    errorCodes.put(200, "OK");
    System.out.println(errorCodes); // {200=OK, 404=Not Found, 500=Internal Server Error} - sorted by key
    ```

**Common Map Mistakes**:
*   Forgetting to override `hashCode()` and `equals()` for custom objects used as keys in `HashMap` or `LinkedHashMap`. This can lead to `get()` returning `null` even if the key exists, or duplicate entries being stored.
*   Using `TreeMap` when sorting isn't needed, incurring unnecessary performance overhead.

### The `Queue` and `Deque` Interfaces
The `Queue` interface is designed for holding elements prior to processing. Besides basic `Collection` operations, `Queue` provides additional insertion, extraction, and inspection operations. Queues typically (but not necessarily) order elements in a FIFO (first-in, first-out) manner.

Key `Queue` operations:
*   `add(E e)` / `offer(E e)`: Adds an element. `add()` throws an exception if full, `offer()` returns `false`.
*   `remove()` / `poll()`: Retrieves and removes the head of the queue. `remove()` throws an exception if empty, `poll()` returns `null`.
*   `element()` / `peek()`: Retrieves, but does not remove, the head of the queue. `element()` throws an exception if empty, `peek()` returns `null`.

The `Deque` (Double-Ended Queue) interface extends `Queue` to support element insertion and removal at both ends. It can be used as a FIFO queue or a LIFO (last-in, first-out) stack.

Common `Queue` and `Deque` implementations:

1.  **`PriorityQueue`**: Implements the `Queue` interface. Elements are ordered according to their natural ordering (if they implement `Comparable`) or by a `Comparator` provided at construction time. It does not allow `null` elements.
    *   **Pros**: Efficiently retrieves the smallest (or largest, based on comparator) element. `add()` and `poll()` operations are `O(log n)`.
    *   **Cons**: Not thread-safe. Iterating over a `PriorityQueue` does not guarantee any specific order.
    *   **Use Case**: Task scheduling, event processing where items need to be processed based on priority.
    ```java
    Queue<Integer> pq = new PriorityQueue<>();
    pq.offer(5);
    pq.offer(1);
    pq.offer(3);
    System.out.println(pq.poll()); // 1 (smallest)
    System.out.println(pq.poll()); // 3
    System.out.println(pq); // [5]
    ```

2.  **`ArrayDeque`**: Implements the `Deque` interface. It's a resizable-array implementation of the `Deque` interface. It's faster than `LinkedList` when used as a stack or queue.
    *   **Pros**: Can be used as both a FIFO queue and a LIFO stack. `addLast()`, `removeFirst()` (queue operations) and `addFirst()`, `removeFirst()` (stack operations) are `O(1)` amortized time. Generally more efficient than `LinkedList` for these purposes.
    *   **Cons**: Not thread-safe. Does not support `null` elements.
    *   **Use Case**: Implementing queues (e.g., message queues) or stacks (e.g., undo functionality) where fast additions/removals from both ends are needed.
    ```java
    Deque<String> messageQueue = new ArrayDeque<>();
    messageQueue.offer("Message A"); // Add to end (queue)
    messageQueue.offer("Message B");
    messageQueue.addFirst("Urgent Message"); // Add to front (deque/stack)
    System.out.println(messageQueue.poll()); // Urgent Message (FIFO from front)
    System.out.println(messageQueue.pop()); // Message A (LIFO from front, acting as stack)
    System.out.println(messageQueue); // [Message B]
    ```

Choosing the right collection for your data structures is a fundamental skill in Java programming. By understanding the underlying mechanics and performance characteristics of `Map`, `Queue`, and `Deque` implementations, you can write more efficient, robust, and maintainable code.

#### Key concepts
*   **`Map` Interface**: An object that maps keys to values, where each key is unique.
*   **`HashMap`**: A `Map` implementation using a hash table, offering `O(1)` average-case performance for basic operations, but no guaranteed order. Requires proper `hashCode()` and `equals()` for keys.
*   **`LinkedHashMap`**: A `Map` implementation that maintains insertion order (or access order) while providing `O(1)` average-case performance.
*   **`TreeMap`**: A `Map` implementation that stores entries in a sorted tree structure, guaranteeing sorted order of keys (natural or custom `Comparator`). Offers `O(log n)` performance. Requires keys to be `Comparable` or a `Comparator` to be provided.
*   **`Queue` Interface**: A collection designed for holding elements prior to processing, typically (but not necessarily) in a FIFO (first-in, first-out) manner.
*   **`Deque` Interface**: (Double-Ended Queue) Extends `Queue`, supporting element insertion and removal at both ends, allowing it to be used as a FIFO queue or a LIFO stack.
*   **`PriorityQueue`**: A `Queue` implementation that orders elements according to their natural order or by a `Comparator`, always retrieving the "highest priority" element. `O(log n)` for add/poll.
*   **`ArrayDeque`**: A `Deque` implementation backed by a resizable array, efficient for both queue and stack operations (`O(1)` amortized).

#### Hands-on activity
**Activity: Building a Simple Cache and Task Processor**

You will implement two scenarios:
1.  **URL Shortener Cache (`LinkedHashMap` scenario):** Simulate a simple cache for a URL shortener. Store short URLs (keys) and their original long URLs (values). You need to retrieve URLs quickly, and if the cache exceeds a certain size, the *least recently used* entry should be removed. `LinkedHashMap` can be configured for access-order.
2.  **Print Job Queue (`ArrayDeque` scenario):** Simulate a print queue where jobs are added and processed in FIFO order. Also, allow for "urgent" jobs to be added to the front of the queue.

**Starter Code:**
```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedHashMap;
import java.util.Map;

public class MapQueueActivity {

    public static void main(String[] args) {
        // 1. URL Shortener Cache (LinkedHashMap)
        // Create a LinkedHashMap that removes the oldest entry when size exceeds capacity
        // Override removeEldestEntry method
        final int CACHE_CAPACITY = 3;
        Map<String, String> urlCache = new LinkedHashMap<String, String>(CACHE_CAPACITY + 1, .75F, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
                return size() > CACHE_CAPACITY;
            }
        };

        System.out.println("--- URL Shortener Cache ---");
        // TODO: Add short URLs and long URLs
        // urlCache.put("short1", "https://long.url/1");
        // urlCache.put("short2", "https://long.url/2");
        // urlCache.put("short3", "https://long.url/3");
        // System.out.println("Cache after 3 additions: " + urlCache);
        // urlCache.get("short1"); // Access short1, making it most recent
        // urlCache.put("short4", "https://long.url/4"); // Add new, should remove oldest (short2)
        // System.out.println("Cache after accessing short1 and adding short4: " + urlCache); // Expected: {short3, short1, short4} (order by access)

        // 2. Print Job Queue (ArrayDeque)
        Deque<String> printQueue = new ArrayDeque<>();
        System.out.println("\n--- Print Job Queue ---");
        // TODO: Add "Job A", "Job B" to the queue
        // printQueue.offer("Job A");
        // printQueue.offer("Job B");
        // System.out.println("Initial queue: " + printQueue);
        // TODO: Add "Urgent Job" to the front
        // printQueue.addFirst("Urgent Job");
        // System.out.println("Queue after urgent job: " + printQueue);
        // TODO: Process (poll) two jobs
        // System.out.println("Processing: " + printQueue.poll());
        // System.out.println("Processing: " + printQueue.poll());
        // System.out.println("Remaining queue: " + printQueue); // Expected: [Job B]
    }
}
```

**Expected Solution Structure (Guidance):**
```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedHashMap;
import java.util.Map;

public class MapQueueActivity {

    public static void main(String[] args) {
        // 1. URL Shortener Cache (LinkedHashMap)
        // Create a LinkedHashMap that removes the oldest entry when size exceeds capacity
        // The 'true' in the constructor makes it access-order instead of insertion-order
        final int CACHE_CAPACITY = 3;
        Map<String, String> urlCache = new LinkedHashMap<String, String>(CACHE_CAPACITY + 1, .75F, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
                return size() > CACHE_CAPACITY;
            }
        };

        System.out.println("--- URL Shortener Cache ---");
        urlCache.put("short1", "https://long.url/1");
        urlCache.put("short2", "https://long.url/2");
        urlCache.put("short3", "https://long.url/3");
        System.out.println("Cache after 3 additions: " + urlCache); // {short1=..., short2=..., short3=...}

        urlCache.get("short1"); // Access short1, making it most recent
        System.out.println("Cache after accessing short1: " + urlCache); // {short2=..., short3=..., short1=...}

        urlCache.put("short4", "https://long.url/4"); // Add new, should remove oldest (short2)
        System.out.println("Cache after adding short4: " + urlCache); // {short3=..., short1=..., short4=...} (short2 removed)

        // 2. Print Job Queue (ArrayDeque)
        Deque<String> printQueue = new ArrayDeque<>();
        System.out.println("\n--- Print Job Queue ---");
        printQueue.offer("Job A"); // Add to end (queue)
        printQueue.offer("Job B");
        System.out.println("Initial queue: " + printQueue); // [Job A, Job B]

        printQueue.addFirst("Urgent Job"); // Add to front (deque/stack)
        System.out.println("Queue after urgent job: " + printQueue); // [Urgent Job, Job A, Job B]

        System.out.println("Processing: " + printQueue.poll()); // Removes Urgent Job
        System.out.println("Processing: " + printQueue.poll()); // Removes Job A
        System.out.println("Remaining queue: " + printQueue); // [Job B]
    }
}
```

#### Assessment idea
1.  **Question:** You need to store user preferences, where each preference has a unique name (e.g., "theme", "language") and a corresponding value. You also need to retrieve these preferences very quickly by name. The order of preferences is not important. Which `Map` implementation is the most efficient choice for this scenario?
    a) `TreeMap`
    b) `LinkedHashMap`
    c) `HashMap`
    d) `ConcurrentHashMap` (assuming single-threaded access)

    **Correct Answer:** c) `HashMap`
    **Explanation:** The requirements emphasize "unique name" (key) and "retrieve very quickly" (`O(1)` average time complexity). "Order is not important" rules out `LinkedHashMap` (insertion order) and `TreeMap` (sorted order) if their specific ordering features are not needed, as they introduce slight overhead. `HashMap` provides the fastest average-case performance for basic operations like `get()` and `put()`, making it the most efficient choice when order is not a concern. `ConcurrentHashMap` is for multi-threaded scenarios, which is not specified here.

2.  **Question:** You are implementing a feature where users can "undo" their last action. You need a data structure that allows adding actions and retrieving/removing the most recently added action efficiently. Which interface and its common implementation would be most suitable?
    a) `Queue` and `PriorityQueue`
    b) `List` and `ArrayList`
    c) `Deque` and `ArrayDeque`
    d) `Set` and `HashSet`

    **Correct Answer:** c) `Deque` and `ArrayDeque`
    **Explanation:** An "undo" feature typically requires a LIFO (Last-In, First-Out) behavior, which is characteristic of a stack. The `Deque` interface provides stack operations (`push`, `pop`, `peekFirst`) in addition to queue operations. `ArrayDeque` is an efficient, array-backed implementation of `Deque` that offers `O(1)` amortized time for adding and removing elements from both ends, making it ideal for stack-like use cases. `PriorityQueue` orders elements by priority, not insertion order (a). `ArrayList` is a a general-purpose list, and while it could be used, `ArrayDeque` is specifically optimized for stack/queue operations (b). `HashSet` is for unique, unordered elements (d).

#### AI generation note
Create a 12-minute interactive video tutorial for `Map` and `Queue`/`Deque`. For `Map`, visualize `HashMap` with hash buckets and collisions, then show `LinkedHashMap` adding a linked list for order, and `TreeMap` as a self-balancing binary search tree. Demonstrate `put`, `get`, `containsKey` with code examples for each. For `Queue` and `Deque`, use an animation of a physical queue (line of people) for FIFO, and a stack (plates) for LIFO. Show `PriorityQueue` as a heap structure always serving the "smallest" element. Demonstrate `ArrayDeque` as a flexible structure for both stack and queue operations. Include a coding challenge where learners implement a basic `LRU (Least Recently Used)` cache using `LinkedHashMap` and a simple task scheduler using `PriorityQueue`.

---

## Final Capstone Project

Congratulations on reaching the final stage of your Oracle Certified Associate, Java SE 8/11 Programmer journey! This capstone project is your opportunity to synthesize the knowledge and skills you've acquired throughout the course. You will choose one of three distinct project options, each designed to challenge you to apply core Java concepts in a practical, integrated manner. This is where you transform theoretical understanding into tangible creation. Remember, the goal is not just to complete the project, but to demonstrate your ability to design, implement, and debug a Java application effectively.

Each project includes core requirements to ensure you hit the essential learning objectives, along with stretch goals for those who wish to delve deeper and explore more advanced concepts. We've also provided clear evaluation criteria to guide your development and an estimated time commitment to help you plan your work. Choose the project that excites you most and best aligns with your interests, and let's build something impressive!

### Project Option 1: Inventory Management System (Console-Based)

This project challenges you to build a simple command-line application for managing product inventory. It's an excellent way to practice object-oriented design, data structures, and basic user interaction.

**Requirements:**
1.  **Product Class:** Create a `Product` class with attributes like `productId` (String, unique), `name` (String), `price` (double), and `quantity` (int). Ensure proper encapsulation with private fields and public getter/setter methods. Include a constructor to initialize these attributes.
2.  **Inventory Management Class:** Create an `InventoryManager` class that uses an `ArrayList<Product>` to store the inventory. This class should provide methods for:
    *   `addProduct(Product product)`: Adds a new product. Handle cases where a product with the same ID already exists.
    *   `removeProduct(String productId)`: Removes a product by its ID.
    *   `updateProductQuantity(String productId, int newQuantity)`: Updates the quantity of an existing product.
    *   `findProductById(String productId)`: Returns a `Product` object or `null` if not found.
    *   `listAllProducts()`: Displays details of all products in the inventory.
3.  **Main Application Loop:** Implement a `main` method in a separate class (`InventoryApp`) that presents a menu to the user (e.g., Add Product, Remove Product, Update Quantity, View All Products, Exit). Use a `Scanner` for user input and a `switch` statement or `if-else` ladder to handle menu choices within a `while` loop.
4.  **Error Handling:** Implement basic exception handling for invalid user input (e.g., non-numeric input when expecting a number, product not found).

**Stretch Goals:**
*   **File Persistence:** Implement functionality to save the inventory to a text file (CSV or simple custom format) and load it back when the application starts. Use `java.io.FileWriter` and `java.io.FileReader` or `java.nio.file.Files`.
*   **Search by Name:** Add a feature to search for products by a partial name match.
*   **Sorting:** Allow users to view products sorted by name, price, or quantity.
*   **Unique ID Generation:** Instead of user-provided IDs, generate unique product IDs automatically (e.g., using a counter or `UUID`).

**Evaluation Criteria:**
*   **Correctness:** Does the application perform all required operations accurately?
*   **Object-Oriented Design:** Are classes well-designed with proper encapsulation, constructors, and methods?
*   **Code Readability:** Is the code well-commented, consistently formatted, and easy to understand?
*   **Error Handling:** Does the application gracefully handle invalid user input and unexpected scenarios?
*   **User Experience:** Is the console interface intuitive and easy to navigate?
*   **Stretch Goals (if attempted):** Correct implementation and integration of chosen advanced features.

**Estimated Time:** 10-15 hours

### Project Option 2: Command-Line Task Scheduler

This project focuses on managing tasks with due dates, utilizing the `java.time` package for date and time manipulation. It's an excellent way to work with custom objects, collections, and date/time APIs.

**Requirements:**
1.  **Task Class:** Create a `Task` class with attributes: `description` (String), `dueDate` (LocalDate), `priority` (int, e.g., 1-5), and `isCompleted` (boolean). Ensure encapsulation and provide a constructor.
2.  **TaskManager Class:** Create a `TaskManager` class that uses an `ArrayList<Task>` to store tasks. Implement methods for:
    *   `addTask(String description, LocalDate dueDate, int priority)`: Adds a new task.
    *   `markTaskAsCompleted(String description)`: Finds a task by description and sets its `isCompleted` status to `true`. Handle cases where the task is not found.
    *   `viewAllTasks()`: Displays all tasks, indicating their completion status and due date.
    *   `viewPendingTasks()`: Displays only tasks that are not yet completed, sorted by `dueDate`.
    *   `viewTasksDueToday()`: Displays tasks whose `dueDate` is today.
3.  **Main Application Loop:** Implement a `main` method in a separate class (`TaskApp`) that provides a menu-driven interface (e.g., Add Task, Mark Complete, View All, View Pending, View Today, Exit). Use `Scanner` for input and handle menu choices.
4.  **Date Input:** Guide the user to input dates in a specific format (e.g., YYYY-MM-DD) and use `LocalDate.parse()` with appropriate `DateTimeFormatter` if needed, or `LocalDate.of()`. Implement error handling for invalid date formats.

**Stretch Goals:**
*   **File Persistence:** Save and load tasks to/from a file (e.g., CSV).
*   **Task Editing:** Allow users to edit task descriptions, due dates, or priorities.
*   **Recurring Tasks:** Implement a basic mechanism for tasks that repeat daily, weekly, or monthly. This would involve adding a `recurrencePattern` attribute to the `Task` class.
*   **Filtering by Priority:** Add an option to view tasks filtered by a specific priority level.
*   **Sorting Options:** Allow users to sort tasks by priority, due date, or creation date.

**Evaluation Criteria:**
*   **Correctness:** Does the application manage tasks and dates accurately?
*   **Object-Oriented Design:** Is the `Task` class well-structured with appropriate fields and methods?
*   **`java.time` API Usage:** Is the `LocalDate` API used correctly and effectively for date operations?
*   **Error Handling:** Does the application handle invalid date formats and non-existent tasks gracefully?
*   **Code Quality:** Is the code clean, readable, and well-organized?
*   **Stretch Goals (if attempted):** Correct implementation and integration of chosen advanced features.

**Estimated Time:** 12-18 hours

### Project Option 3: Simple Banking Application (Console-Based)

This project focuses on simulating basic banking operations for multiple accounts, emphasizing object interaction, inheritance (optional, but good practice), and error handling.

**Requirements:**
1.  **Account Class:** Create an `Account` class with attributes: `accountNumber` (String, unique), `accountHolderName` (String), and `balance` (double). Ensure encapsulation. Include a constructor.
2.  **Basic Operations:** Implement methods for:
    *   `deposit(double amount)`: Adds `amount` to `balance`. Ensure `amount` is positive.
    *   `withdraw(double amount)`: Subtracts `amount` from `balance`. Ensure `amount` is positive and `balance` is sufficient. Return `true` on success, `false` otherwise.
    *   `getBalance()`: Returns the current `balance`.
    *   `getAccountNumber()`: Returns the `accountNumber`.
3.  **Bank Class:** Create a `Bank` class that manages multiple `Account` objects using an `ArrayList<Account>`. Provide methods for:
    *   `createAccount(String accountHolderName, double initialDeposit)`: Creates a new account with a unique account number (e.g., generated sequentially or using `UUID`).
    *   `findAccount(String accountNumber)`: Returns an `Account` object or `null` if not found.
    *   `performDeposit(String accountNumber, double amount)`: Finds the account and calls its `deposit` method. Handle account not found.
    *   `performWithdrawal(String accountNumber, double amount)`: Finds the account and calls its `withdraw` method. Handle account not found or insufficient funds.
    *   `transferFunds(String fromAccountNum, String toAccountNum, double amount)`: Transfers money between two accounts. Ensure both accounts exist, sufficient funds, and handle all error conditions.
    *   `listAllAccounts()`: Displays details of all accounts.
4.  **Main Application Loop:** Implement a `main` method in a separate class (`BankApp`) that provides a menu (e.g., Create Account, Deposit, Withdraw, Transfer, View All Accounts, Exit). Use `Scanner` for input and handle menu choices.
5.  **Error Handling:** Implement robust error handling for invalid input (non-numeric, negative amounts), account not found, and insufficient funds.

**Stretch Goals:**
*   **Account Types:** Introduce `SavingsAccount` and `CheckingAccount` classes that inherit from `Account`. `SavingsAccount` might have an interest rate and `CheckingAccount` might have an overdraft limit.
*   **Transaction History:** For each account, maintain a list of `Transaction` objects (e.g., `Transaction` class with `type`, `amount`, `date`).
*   **File Persistence:** Save and load account data to/from a file.
*   **Unique Account Number Generation:** Implement a more robust unique account number generation strategy.

**Evaluation Criteria:**
*   **Correctness:** Does the application accurately simulate banking operations, including transfers and error conditions?
*   **Object-Oriented Design:** Are classes well-designed? Is inheritance used effectively if attempted?
*   **Error Handling:** Does the application gracefully handle all specified error conditions (invalid amounts, non-existent accounts, insufficient funds)?
*   **Code Structure:** Is the code modular, readable, and well-organized?
*   **User Interaction:** Is the console interface clear and easy to use?
*   **Stretch Goals (if attempted):** Correct implementation and integration of chosen advanced features.

**Estimated Time:** 15-20 hours

---

## Final Examination

This final examination is designed to assess your comprehensive understanding of Java SE 8/11 programming concepts covered throughout this course. It includes a variety of question types to evaluate your knowledge of syntax, object-oriented principles, API usage, and problem-solving skills. Take your time, read each question carefully, and demonstrate your proficiency. Good luck!

### Section 1: Concept Definitions (4 questions)

1.  **Question:** Explain the concept of **polymorphism** in Java, providing an example of how it is achieved.
    **Answer:** Polymorphism, meaning "many forms," is a core OOP principle that allows objects to take on multiple forms. In Java, it primarily manifests through method overriding and interface implementation. It enables a single interface to represent different underlying forms.
    **Example:**
    ```java
    class Animal {
        void makeSound() {
            System.out.println("Animal makes a sound");
        }
    }

    class Dog extends Animal {
        @Override
        void makeSound() {
            System.out.println("Dog barks");
        }
    }

    class Cat extends Animal {
        @Override
        void makeSound() {
            System.out.println("Cat meows");
        }
    }

    public class PolymorphismDemo {
        public static void main(String[] args) {
            Animal myAnimal = new Animal();
            Animal myDog = new Dog(); // Polymorphic assignment
            Animal myCat = new Cat(); // Polymorphic assignment

            myAnimal.makeSound(); // Output: Animal makes a sound
            myDog.makeSound();    // Output: Dog barks (runtime polymorphism/dynamic method dispatch)
            myCat.makeSound();    // Output: Cat meows
        }
    }
    ```
    Here, `myDog` and `myCat` are declared as `Animal` types but refer to `Dog` and `Cat` objects, respectively. When `makeSound()` is called, the JVM determines which version of the method to execute at runtime based on the actual object type, demonstrating polymorphism.

2.  **Question:** Differentiate between an **`interface`** and an **`abstract class`** in Java. When would you choose one over the other?
    **Answer:**
    *   **`interface`**: A blueprint of a class. It can only contain abstract methods (before Java 8), default and static methods (Java 8+), and constant fields. A class can implement multiple interfaces. It defines a contract for behavior.
    *   **`abstract class`**: A class that cannot be instantiated directly. It can have abstract methods (without implementation) and concrete methods (with implementation), as well as fields (both static and non-static). A class can only extend one abstract class. It defines a common base for a group of related classes.

    **When to choose:**
    *   Choose an **`interface`** when you want to define a contract for behavior that unrelated classes might share, or when a class needs to implement multiple contracts. It's about "can do" or "has a capability." For example, `Runnable`, `Comparable`.
    *   Choose an **`abstract class`** when you want to provide a common base implementation for a group of closely related classes, sharing common state and behavior, but where some behavior needs to be customized by subclasses. It's about "is a type of." For example, `AbstractList`, `AbstractMap`.

3.  **Question:** What is the purpose of the **`static`** keyword in Java? Provide examples of its use with fields and methods.
    **Answer:** The `static` keyword in Java is used to declare members (fields, methods, nested classes) that belong to the class itself, rather than to any specific instance of the class. This means `static` members can be accessed directly using the class name, without creating an object of that class.

    **Examples:**
    *   **Static Field (Class Variable):** A `static` field is shared by all instances of the class. There's only one copy of the `static` field, regardless of how many objects are created.
        ```java
        class Counter {
            static int count = 0; // Shared by all instances
            Counter() {
                count++;
            }
        }
        // Usage:
        // Counter c1 = new Counter();
        // Counter c2 = new Counter();
        // System.out.println(Counter.count); // Output: 2
        ```
    *   **Static Method (Class Method):** A `static` method can be called directly on the class. It cannot access non-static (instance) fields or methods directly, as it doesn't operate on a specific object. It's often used for utility functions or to manipulate static fields.
        ```java
        class MathUtils {
            static double PI = 3.14159; // Static field

            static double calculateCircleArea(double radius) {
                return PI * radius * radius; // Accesses static field
            }
        }
        // Usage:
        // double area = MathUtils.calculateCircleArea(5.0);
        // System.out.println(area);
        ```

4.  **Question:** Describe the purpose and usage of **`try`**, **`catch`**, **`finally`**, and **`throws`** in Java's exception handling mechanism.
    **Answer:** Java's exception handling mechanism uses these keywords to manage runtime errors and ensure program robustness.
    *   **`try`**: A `try` block encloses code that might throw an exception. If an exception occurs within the `try` block, the normal flow of execution is interrupted, and control is transferred to an appropriate `catch` block.
    *   **`catch`**: A `catch` block immediately follows a `try` block and specifies the type of exception it can handle. If an exception of that type (or a subclass) is thrown in the `try` block, the code within the `catch` block is executed. A `try` block can have multiple `catch` blocks for different exception types.
    *   **`finally`**: A `finally` block also immediately follows `try` (and `catch` blocks, if any). The code inside the `finally` block is *always* executed, regardless of whether an exception occurred in the `try` block, was caught by a `catch` block, or if the `try` block completed normally. It's typically used for cleanup operations, like closing resources.
    *   **`throws`**: The `throws` keyword is used in a method signature to declare that the method *might* throw one or more specified checked exceptions. This informs callers of the method that they must either handle these exceptions (using `try-catch`) or re-declare them in their own `throws` clause. It's a way to delegate exception handling.

    **Example:**
    ```java
    import java.io.FileNotFoundException;
    import java.io.FileReader;
    import java.io.IOException;

    public class ExceptionDemo {
        public static void readFile(String fileName) throws FileNotFoundException, IOException { // throws declaration
            FileReader reader = null;
            try {
                reader = new FileReader(fileName); // Code that might throw an exception
                int data = reader.read();
                System.out.println("First char: " + (char) data);
            } catch (FileNotFoundException e) { // Catch specific exception
                System.err.println("Error: File not found! " + e.getMessage());
            } catch (IOException e) { // Catch another specific exception
                System.err.println("Error reading file! " + e.getMessage());
            } finally {
                if (reader != null) {
                    try {
                        reader.close(); // Cleanup in finally block
                        System.out.println("Reader closed.");
                    } catch (IOException e) {
                        System.err.println("Error closing reader: " + e.getMessage());
                    }
                }
            }
        }

        public static void main(String[] args) {
            try {
                readFile("nonexistent.txt");
                readFile("existing.txt"); // Assume this file exists
            } catch (FileNotFoundException | IOException e) { // Multi-catch for main
                System.err.println("An unexpected file operation error occurred in main: " + e.getMessage());
            }
        }
    }
    ```
    **Partial credit guidance:** Full credit requires explaining all four keywords and their roles. Partial credit can be given for explaining at least two or three correctly, or for a good example that demonstrates some but not all.

### Section 2: Code Tracing (3 questions)

5.  **Question:** What will be the output of the following Java code?
    ```java
    public class LoopTrace {
        public static void main(String[] args) {
            int[] numbers = {10, 20, 30, 40, 50};
            int sum = 0;
            for (int i = 0; i < numbers.length; i++) {
                if (i % 2 == 0) {
                    sum += numbers[i];
                } else {
                    sum -= numbers[i];
                }
            }
            System.out.println("Final Sum: " + sum);
        }
    }
    ```
    **Answer:**
    The loop iterates through the `numbers` array:
    *   `i = 0`: `0 % 2 == 0` is true. `sum = 0 + numbers[0] = 0 + 10 = 10`.
    *   `i = 1`: `1 % 2 == 0` is false. `sum = 10 - numbers[1] = 10 - 20 = -10`.
    *   `i = 2`: `2 % 2 == 0` is true. `sum = -10 + numbers[2] = -10 + 30 = 20`.
    *   `i = 3`: `3 % 2 == 0` is false. `sum = 20 - numbers[3] = 20 - 40 = -20`.
    *   `i = 4`: `4 % 2 == 0` is true. `sum = -20 + numbers[4] = -20 + 50 = 30`.
    The loop finishes.

    **Output:**
    ```
    Final Sum: 30
    ```
    **Partial credit guidance:** Full credit for the correct final sum. Partial credit for showing correct intermediate sums or correctly identifying the pattern of addition/subtraction.

6.  **Question:** Consider the following classes. What will be printed when the `main` method of `TestClass` is executed?
    ```java
    class Parent {
        void display() {
            System.out.println("Parent's display");
        }
        static void show() {
            System.out.println("Parent's static show");
        }
    }

    class Child extends Parent {
        @Override
        void display() {
            System.out.println("Child's display");
        }
        static void show() { // This hides Parent's static show, not overrides
            System.out.println("Child's static show");
        }
    }

    public class TestClass {
        public static void main(String[] args) {
            Parent obj1 = new Child();
            obj1.display();
            obj1.show();
            Child obj2 = new Child();
            obj2.show();
        }
    }
    ```
    **Answer:**
    *   `Parent obj1 = new Child();`: Here, `obj1` is declared as `Parent` type but refers to a `Child` object.
    *   `obj1.display();`: `display()` is an instance method, so runtime polymorphism applies. The `Child` class's `display()` method will be invoked. Output: `Child's display`.
    *   `obj1.show();`: `show()` is a `static` method. Static methods are resolved at compile time based on the *reference type*, not the actual object type. Since `obj1` is of type `Parent`, `Parent.show()` will be invoked. Output: `Parent's static show`.
    *   `Child obj2 = new Child();`: `obj2` is declared as `Child` type and refers to a `Child` object.
    *   `obj2.show();`: Again, `show()` is static. Since `obj2` is of type `Child`, `Child.show()` will be invoked. Output: `Child's static show`.

    **Output:**
    ```
    Child's display
    Parent's static show
    Child's static show
    ```
    **Partial credit guidance:** Full credit for all three correct lines. Partial credit for correctly identifying the output of `display()` and at least one of the `show()` calls. Emphasize the difference between method overriding (instance methods) and method hiding (static methods).

7.  **Question:** What is the output of the following code snippet?
    ```java
    public class TypeConversion {
        public static void main(String[] args) {
            double d = 10.5;
            int i = (int) d;
            long l = 20L;
            float f = l;
            byte b = 100;
            b += 28; // Compound assignment
            System.out.println(i + ", " + f + ", " + b);
        }
    }
    ```
    **Answer:**
    *   `double d = 10.5; int i = (int) d;`: The `double` `10.5` is explicitly cast to an `int`. This truncates the decimal part, so `i` becomes `10`.
    *   `long l = 20L; float f = l;`: The `long` `20L` is implicitly converted to a `float`. `f` becomes `20.0f`. This is a widening primitive conversion.
    *   `byte b = 100; b += 28;`: `b` is initially `100`. The compound assignment operator `+=` implicitly casts the result of the addition back to `byte`. `100 + 28 = 128`. However, the maximum value a `byte` can hold is `127`. When `128` is cast to `byte`, it overflows. In Java, byte overflow wraps around. `127 + 1 = -128`, `127 + 2 = -127`, ..., `127 + 1 = -128`. So, `100 + 28 = 128`, which wraps around to `-128`.
        *(
        
        `b` becomes `-128`.

    **Output:**
    ```
    10, 20.0, -128
    ```
    **Partial credit guidance:** Full credit for all three correct values. Partial credit for correctly identifying the values of `i` and `f`, or for identifying the overflow behavior of `byte` even if the exact wrapped value is slightly off.

### Section 3: Code Writing (4 questions)

8.  **Question:** Write a Java class named `Book` with the following characteristics:
    *   Private instance variables: `title` (String), `author` (String), `isbn` (String), and `price` (double).
    *   A constructor that initializes all four instance variables.
    *   Public getter methods for all instance variables.
    *   A public setter method only for `price`.
    *   An `equals()` method that compares two `Book` objects based on their `isbn`.
    *   A `toString()` method that returns a formatted string representation of the book.

    **Answer:**
    ```java
    public class Book {
        private String title;
        private String author;
        private String isbn;
        private double price;

        public Book(String title, String author, String isbn, double price) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
            this.price = price;
        }

        // Getters
        public String getTitle() {
            return title;
        }

        public String getAuthor() {
            return author;
        }

        public String getIsbn() {
            return isbn;
        }

        public double getPrice() {
            return price;
        }

        // Setter for price only
        public void setPrice(double price) {
            if (price > 0) { // Basic validation
                this.price = price;
            } else {
                System.err.println("Price cannot be negative.");
            }
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null || getClass() != obj.getClass()) return false;
            Book book = (Book) obj;
            return isbn.equals(book.isbn); // Compare based on ISBN
        }

        @Override
        public int hashCode() { // Good practice to override hashCode with equals
            return isbn.hashCode();
        }

        @Override
        public String toString() {
            return "Book{" +
                   "title='" + title + '\'' +
                   ", author='" + author + '\'' +
                   ", isbn='" + isbn + '\'' +
                   ", price=" + String.format("%.2f", price) +
                   '}';
        }

        public static void main(String[] args) {
            Book book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "978-0345391803", 12.99);
            Book book2 = new Book("The Restaurant at the End of the Universe", "Douglas Adams", "978-0345391803", 14.50); // Same ISBN as book1
            Book book3 = new Book("Pride and Prejudice", "Jane Austen", "978-0141439518", 9.99);

            System.out.println(book1);
            System.out.println(book3);

            System.out.println("Book1 equals Book2? " + book1.equals(book2)); // Should be true
            System.out.println("Book1 equals Book3? " + book1.equals(book3)); // Should be false

            book1.setPrice(13.50);
            System.out.println("Updated price for book1: " + book1.getPrice());
        }
    }
    ```
    **Partial credit guidance:** Full credit for a complete and correct implementation. Partial credit for correctly implementing encapsulation, constructor, getters, and setters. Further partial credit for a correct `equals()` based on ISBN, and a reasonable `toString()`.

9.  **Question:** Define a functional interface named `StringModifier` with a single abstract method `modify(String text)` that returns a `String`. Then, write a class `TextProcessor` with a static method `process(String text, StringModifier modifier)` that applies the modifier to the text and prints the result. Finally, demonstrate its usage by passing a lambda expression that converts the input string to uppercase.

    **Answer:**
    ```java
    @FunctionalInterface
    interface StringModifier {
        String modify(String text);
    }

    class TextProcessor {
        public static void process(String text, StringModifier modifier) {
            String result = modifier.modify(text);
            System.out.println("Original: \"" + text + "\"");
            System.out.println("Modified: \"" + result + "\"");
        }
    }

    public class LambdaDemo {
        public static void main(String[] args) {
            // Using a lambda expression to convert to uppercase
            TextProcessor.process("hello world", s -> s.toUpperCase());

            // Another example: reverse the string
            TextProcessor.process("Java Programming", s -> new StringBuilder(s).reverse().toString());
        }
    }
    ```
    **Partial credit guidance:** Full credit for correctly defining the functional interface, the `process` method, and the lambda expression for uppercase conversion. Partial credit for correct interface and method definition, even if the lambda is slightly off.

10. **Question:** Write a Java method `calculateAverage(int[] numbers)` that takes an array of integers and returns their average as a `double`. The method should throw an `IllegalArgumentException` if the input array is `null` or empty.

    **Answer:**
    ```java
    public class ArrayOperations {

        /**
         * Calculates the average of an array of integers.
         *
         * @param numbers The array of integers.
         * @return The average as a double.
         * @throws IllegalArgumentException If the array is null or empty.
         */
        public static double calculateAverage(int[] numbers) {
            if (numbers == null || numbers.length == 0) {
                throw new IllegalArgumentException("Array cannot be null or empty.");
            }

            long sum = 0; // Use long to prevent overflow for large sums
            for (int number : numbers) {
                sum += number;
            }

            return (double) sum / numbers.length;
        }

        public static void main(String[] args) {
            int[] arr1 = {10, 20, 30, 40, 50};
            System.out.println("Average of arr1: " + calculateAverage(arr1)); // Expected: 30.0

            int[] arr2 = {5, 10, 15};
            System.out.println("Average of arr2: " + calculateAverage(arr2)); // Expected: 10.0

            try {
                int[] emptyArr = {};
                System.out.println("Average of emptyArr: " + calculateAverage(emptyArr));
            } catch (IllegalArgumentException e) {
                System.err.println("Error: " + e.getMessage()); // Expected to catch this
            }

            try {
                int[] nullArr = null;
                System.out.println("Average of nullArr: " + calculateAverage(nullArr));
            } catch (IllegalArgumentException e) {
                System.err.println("Error: " + e.getMessage()); // Expected to catch this
            }
        }
    }
    ```
    **Partial credit guidance:** Full credit for a correct method that calculates average and throws the specified exception correctly. Partial credit for correct average calculation but missing or incorrect exception handling, or vice-versa.

11. **Question:** Create an interface `Shape` with a method `getArea()`. Then, implement two classes, `Circle` and `Rectangle`, that implement the `Shape` interface. `Circle` should have a `radius` and `Rectangle` should have `width` and `height`. Ensure `getArea()` returns the correct area for each shape.

    **Answer:**
    ```java
    interface Shape {
        double getArea();
    }

    class Circle implements Shape {
        private double radius;

        public Circle(double radius) {
            this.radius = radius;
        }

        @Override
        public double getArea() {
            return Math.PI * radius * radius;
        }

        public double getRadius() {
            return radius;
        }
    }

    class Rectangle implements Shape {
        private double width;
        private double height;

        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }

        @Override
        public double getArea() {
            return width * height;
        }

        public double getWidth() {
            return width;
        }

        public double getHeight() {
            return height;
        }
    }

    public class ShapeDemo {
        public static void main(String[] args) {
            Shape circle = new Circle(5.0);
            Shape rectangle = new Rectangle(4.0, 6.0);

            System.out.println("Area of Circle: " + circle.getArea());       // Expected: ~78.539...
            System.out.println("Area of Rectangle: " + rectangle.getArea()); // Expected: 24.0

            // Demonstrate polymorphism
            Shape[] shapes = new Shape[2];
            shapes[0] = new Circle(3.0);
            shapes[1] = new Rectangle(2.0, 5.0);

            for (Shape s : shapes) {
                System.out.println("Shape area: " + s.getArea());
            }
        }
    }
    ```
    **Partial credit guidance:** Full credit for correct interface definition and two correct implementing classes. Partial credit for correct interface and one correct implementing class, or for correct class structures even if `getArea()` calculation is slightly off.

### Section 4: Design and Debugging Problems (4 questions)

12. **Question:** The following code snippet attempts to create a `Person` object and print its name. However, it fails to compile. Identify the compilation error and provide the corrected code.

    ```java
    // Original Code (with error)
    class Person {
        String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }

    public class ErrorFixer {
        public static void main(String[] args) {
            Person p = new Person("Alice", 30);
            System.out.println("Person's name: " + p.name);
            System.out.println("Person's age: " + p.age); // Error here
        }
    }
    ```
    **Answer:**
    **Compilation Error:** The error occurs on the line `System.out.println("Person's age: " + p.age);`. The `age` field in the `Person` class is declared as `private`. Private members are only accessible within the class they are declared in. Attempting to access `p.age` directly from `ErrorFixer` (a different class) violates encapsulation and results in a compilation error: "age has private access in Person".

    **Corrected Code:** To fix this, we need to provide a public getter method for `age` in the `Person` class.
    ```java
    class Person {
        String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Public getter for age
        public int getAge() {
            return age;
        }

        // It's also good practice to make 'name' private and provide a getter
        public String getName() {
            return name;
        }
    }

    public class ErrorFixer {
        public static void main(String[] args) {
            Person p = new Person("Alice", 30);
            System.out.println("Person's name: " + p.getName()); // Use getter for name
            System.out.println("Person's age: " + p.getAge());   // Use getter for age
        }
    }
    ```
    **Partial credit guidance:** Full credit for correctly identifying the private access modifier as the cause and providing a getter method. Partial credit for identifying the error but providing an incomplete or incorrect fix (e.g., changing `age` to public directly, which breaks encapsulation).

13. **Question:** The following code is intended to calculate the sum of elements in an array, but it throws an `ArrayIndexOutOfBoundsException` at runtime. Identify the line causing the error and explain why it occurs. Then, provide the corrected code.

    ```java
    // Original Code (with error)
    public class ArraySum {
        public static void main(String[] args) {
            int[] numbers = {1, 2, 3, 4, 5};
            int sum = 0;
            for (int i = 0; i <= numbers.length; i++) { // Error here
                sum += numbers[i];
            }
            System.out.println("Sum: " + sum);
        }
    }
    ```
    **Answer:**
    **Runtime Error:** The code throws an `ArrayIndexOutOfBoundsException`.
    **Explanation:** The `for` loop condition is `i <= numbers.length`.
    *   The `numbers` array has a `length` of `5`.
    *   Valid indices for this array are `0, 1, 2, 3, 4`.
    *   When `i` reaches `5` in the loop, the condition `5 <= 5` is still true.
    *   Inside the loop, `sum += numbers[i];` attempts to access `numbers[5]`.
    *   Since `5` is not a valid index (the last valid index is `length - 1`, which is `4`), an `ArrayIndexOutOfBoundsException` is thrown.

    **Corrected Code:** The loop condition should be `i < numbers.length` to ensure `i` never exceeds the last valid index.
    ```java
    public class ArraySum {
        public static void main(String[] args) {
            int[] numbers = {1, 2, 3, 4, 5};
            int sum = 0;
            for (int i = 0; i < numbers.length; i++) { // Corrected: i < numbers.length
                sum += numbers[i];
            }
            System.out.println("Sum: " + sum); // Output: Sum: 15
        }
    }
    ```
    **Partial credit guidance:** Full credit for correctly identifying the line, explaining the `ArrayIndexOutOfBoundsException`, and providing the correct loop condition. Partial credit for identifying the error but a less precise explanation or an incorrect fix.

14. **Question:** You are asked to design a class hierarchy for different types of vehicles. All vehicles should have a `make`, `model`, and `year`. Cars also have a `numberOfDoors`, and Motorcycles have a `hasSidecar` boolean. Design the classes using inheritance, ensuring proper constructors and at least one common method (e.g., `startEngine()`) that can be overridden.

    **Answer:**
    ```java
    // Base class
    class Vehicle {
        private String make;
        private String model;
        private int year;

        public Vehicle(String make, String model, int year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        public void startEngine() {
            System.out.println("The " + make + " " + model + "'s engine starts with a generic sound.");
        }

        // Getters
        public String getMake() { return make; }
        public String getModel() { return model; }
        public int getYear() { return year; }
    }

    // Subclass Car
    class Car extends Vehicle {
        private int numberOfDoors;

        public Car(String make, String model, int year, int numberOfDoors) {
            super(make, model, year); // Call parent constructor
            this.numberOfDoors = numberOfDoors;
        }

        @Override
        public void startEngine() {
            System.out.println("The " + getMake() + " " + getModel() + " car's engine purrs to life.");
        }

        public int getNumberOfDoors() {
            return numberOfDoors;
        }
    }

    // Subclass Motorcycle
    class Motorcycle extends Vehicle {
        private boolean hasSidecar;

        public Motorcycle(String make, String model, int year, boolean hasSidecar) {
            super(make, model, year); // Call parent constructor
            this.hasSidecar = hasSidecar;
        }

        @Override
        public void startEngine() {
            System.out.println("The " + getMake() + " " + getModel() + " motorcycle's engine roars!");
        }

        public boolean hasSidecar() {
            return hasSidecar;
        }
    }

    public class VehicleDemo {
        public static void main(String[] args) {
            Vehicle genericVehicle = new Vehicle("Generic", "ModelX", 2020);
            Car myCar = new Car("Toyota", "Camry", 2023, 4);
            Motorcycle myBike = new Motorcycle("Harley-Davidson", "Fat Boy", 2022, false);

            System.out.println("--- Vehicle Actions ---");
            genericVehicle.startEngine();
            myCar.startEngine();
            myBike.startEngine();

            System.out.println("\n--- Vehicle Details ---");
            System.out.println(myCar.getMake() + " " + myCar.getModel() + " has " + myCar.getNumberOfDoors() + " doors.");
            System.out.println(myBike.getMake() + " " + myBike.getModel() + " has a sidecar: " + myBike.hasSidecar());

            // Polymorphic array
            Vehicle[] vehicles = new Vehicle[3];
            vehicles[0] = new Car("Honda", "Civic", 2021, 4);
            vehicles[1] = new Motorcycle("Kawasaki", "Ninja", 2023, false);
            vehicles[2] = new Vehicle("Boeing", "747", 1969); // Just for fun

            System.out.println("\n--- Polymorphic Vehicle Array ---");
            for (Vehicle v : vehicles) {
                v.startEngine();
            }
        }
    }
    ```
    **Partial credit guidance:** Full credit for a correct base class, two correct subclasses extending it, proper use of `super()`, and method overriding. Partial credit for a correct base class and one subclass, or for correct class structures but issues with constructors or overriding.

15. **Question:** The following code snippet is inefficient and hard to read. Refactor it to use a more appropriate control flow structure and improve readability. The goal is to print a message based on a student's grade (A, B, C, D, F).

    ```java
    // Original Code (inefficient and hard to read)
    public class GradeAnalyzer {
        public static void main(String[] args) {
            char grade = 'B'; // Can be 'A', 'B', 'C', 'D', 'F'

            if (grade == 'A') {
                System.out.println("Excellent work!");
            } else {
                if (grade == 'B') {
                    System.out.println("Very good!");
                } else {
                    if (grade == 'C') {
                        System.out.println("Good effort.");
                    } else {
                        if (grade == 'D') {
                            System.out.println("Needs improvement.");
                        } else {
                            if (grade == 'F') {
                                System.out.println("Failed. Please see instructor.");
                            } else {
                                System.out.println("Invalid grade.");
                            }
                        }
                    }
                }
            }
        }
    }
    ```
    **Answer:**
    **Inefficiency and Readability Issues:** The original code uses deeply nested `if-else` statements, which makes it difficult to read, understand, and maintain. For checking multiple discrete values of a single variable, a `switch` statement is a much more appropriate and readable control flow structure.

    **Refactored Code:**
    ```java
    public class GradeAnalyzerRefactored {
        public static void main(String[] args) {
            char grade = 'B'; // Can be 'A', 'B', 'C', 'D', 'F', or other

            switch (grade) {
                case 'A':
                    System.out.println("Excellent work!");
                    break;
                case 'B':
                    System.out.println("Very good!");
                    break;
                case 'C':
                    System.out.println("Good effort.");
                    break;
                case 'D':
                    System.out.println("Needs improvement.");
                    break;
                case 'F':
                    System.out.println("Failed. Please see instructor.");
                    break;
                default: // Handles any other character
                    System.out.println("Invalid grade.");
                    break;
            }

            // Example with a different grade
            char anotherGrade = 'Z';
            System.out.print("For grade '" + anotherGrade + "': ");
            switch (anotherGrade) {
                case 'A': System.out.println("Excellent work!"); break;
                case 'B': System.out.println("Very good!"); break;
                case 'C': System.out.println("Good effort."); break;
                case 'D': System.out.println("Needs improvement."); break;
                case 'F': System.out.println("Failed. Please see instructor."); break;
                default: System.out.println("Invalid grade."); break;
            }
        }
    }
    ```
    **Partial credit guidance:** Full credit for correctly using a `switch` statement with `case` and `default` blocks, and `break` statements. Partial credit for using `if-else if-else` ladder (which is better than nested `if-else` but not as ideal as `switch` for this scenario), or for a `switch` statement with minor errors (e.g., missing `break` statements in some cases).

---

## Course Conclusion

Congratulations! You have successfully completed the Oracle Certified Associate, Java SE 8/11 Programmer course. This journey has equipped you with a robust foundation in Java programming, transforming you from a novice to a confident developer capable of writing clear, efficient, and object-oriented Java code. You can now confidently:

*   **Understand and apply core Java syntax and language constructs:** Including data types, operators, control flow statements (if/else, switch, loops), and arrays.
*   **Master Object-Oriented Programming (OOP) principles:** You can design classes with proper encapsulation, utilize inheritance for code reuse, and leverage polymorphism and abstraction to create flexible and extensible systems.
*   **Work with essential Java APIs:** You are proficient in using core classes from `java.lang`, `java.util` (especially `ArrayList`), and `java.time` for date and time manipulation.
*   **Implement robust error handling:** You can effectively use `try-catch-finally` blocks and `throws` declarations to manage exceptions and write resilient applications.
*   **Utilize modern Java features (SE 8/11):** You have a foundational understanding of lambda expressions and functional interfaces, enabling you to write more concise and expressive code.
*   **Develop and debug small to medium-sized Java applications:** You possess the practical skills to solve programming problems, trace code execution, and identify and fix common errors.

These skills are not just theoretical; they are the building blocks for a successful career in software development. You are now well-prepared to tackle more complex Java projects and pursue advanced certifications.

### Where to go next?

The world of Java is vast and exciting, and your learning journey doesn't stop here. Here are some recommended next steps and resources to continue your growth:

1.  **Oracle Certified Professional (OCP), Java SE 8/11 Programmer:** This is the natural progression from the OCA. The OCP certification delves deeper into advanced Java topics like concurrency, file I/O, JDBC, and more complex API usage. Consider enrolling in Cohortia's OCP preparation course.
2.  **Explore Advanced Java Frameworks:** Dive into popular frameworks like **Spring Boot** for enterprise-level web development, **Hibernate** for database interaction, or **Apache Kafka** for stream processing. These frameworks are industry standards and highly sought after.
3.  **Specialized Development Paths:**
    *   **Web Development with Java:** Learn technologies like Servlets, JSP, Spring MVC, and RESTful APIs to build dynamic web applications.
    *   **Android Development:** Use Java (or Kotlin) to build mobile applications for the Android platform.
    *   **Enterprise Java (Jakarta EE):** Explore technologies for large-scale, distributed enterprise applications.
4.  **Continuous Practice and Project Building:** The best way to solidify your knowledge is through hands-on practice. Work on personal projects, contribute to open-source initiatives, or participate in coding challenges. The capstone project you just completed is a perfect starting point for your portfolio.
5.  **Community and Resources:**
    *   **Books:** "Effective Java" by Joshua Bloch and "Head First Java" are excellent resources for deepening your understanding.
    *   **Online Communities:** Engage with the Java community on platforms like Stack Overflow, Reddit (r/java), and various Java forums. Learning from others and contributing your knowledge is invaluable.
    *   **Blogs and Tutorials:** Follow leading Java blogs and tutorial sites for the latest updates, best practices, and new features.

Keep coding, keep learning, and keep building! The skills you've gained are powerful, and with continued dedication, you will achieve great things in your programming career.

---

You've completed a significant milestone by finishing this course. The path to becoming an expert Java developer is a continuous one, filled with exciting challenges and endless opportunities for creativity. Remember the principles of clean code, object-oriented design, and problem-solving that you've diligently practiced.

Cohortia is proud to have been a part of your educational journey. We encourage you to apply your new skills, tackle ambitious projects, and never stop exploring the fascinating world of software development. Your future in Java is bright!

---


> End of Syllabus: Oracle Certified Associate, Java SE 8/11 Programmer
> Course ID: oracle-certified-associate-java-se-811-programmer
> Total modules: 6
> Total chapters: 24
> Level: Beginner–Intermediate
> Subcategory: Programming & Software Development Fundamentals
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
