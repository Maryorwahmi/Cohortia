---
Title: 100 Days of Code: The Complete Python Pro Bootcamp
Course ID: 100-days-of-code-the-complete-python-pro-bootcamp
Provider: Cohortia
Original reference: Udemy (Angela Yu) / Online
Platform: Cohortia
Level: Beginner
Type: Course
Duration: Self-paced
Cost: Included with Cohortia
URL: Cohortia course page (original reference: (URL not verified))
Certification: Cohortia Certificate of Completion
Category: Computer Science
Subcategory: Programming & Software Development Fundamentals
Skills: Python Programming, Object-Oriented Programming (OOP), Data Structures, Control Flow, Functions, File I/O, Error Handling, API Integration, Web Scraping, GUI Development (Tkinter), Database Interaction (SQLite), Version Control (Git), Basic Data Analysis (NumPy, Pandas), Data Visualization (Matplotlib), Web Development Fundamentals (Flask/Django basics), Software Testing, Deployment
Source catalog: docs/computer-science/catalog-courses-by-subcategory.json
---

## Course Overview

Welcome to the "100 Days of Code: The Complete Python Pro Bootcamp," a comprehensive and immersive journey designed to transform you from a complete beginner into a confident Python developer. This course is meticulously structured to provide a hands-on, project-based learning experience, mirroring the popular "100 Days of Code" challenge format. Instead of just watching lectures, you'll be actively building a new project almost every day, solidifying your understanding through practical application. We believe that the best way to learn programming is by doing, and this bootcamp is engineered to maximize your coding practice, ensuring you gain not just theoretical knowledge but also the crucial problem-solving skills essential for a professional developer.

Throughout this bootcamp, you will progressively build a robust portfolio of real-world Python projects, starting from simple command-line applications and advancing to complex web applications, GUI tools, and data analysis scripts. We'll cover everything from the absolute basics of Python syntax, data types, and control flow, to advanced topics like object-oriented programming, working with external APIs, web scraping, database integration, and even an introduction to data science libraries. Each concept is introduced with clear explanations, followed by immediate opportunities to apply what you've learned in challenging and engaging coding exercises and mini-projects.

Our approach emphasizes not just writing code, but writing *good* code. You'll learn best practices, debugging techniques, and how to effectively use version control with Git. By the end of this course, you won't just know Python; you'll be able to think like a programmer, break down complex problems, and confidently build your own applications from scratch. This bootcamp is perfect for anyone serious about starting a career in technology, automating tasks, or simply bringing their ideas to life with the power of Python. Join us and embark on a rewarding journey that will equip you with a highly sought-after skill set.

Upon successful completion of this Cohortia course, you will be able to:

*   Write clean, efficient, and well-structured Python code using fundamental programming concepts.
*   Master core Python data structures, including lists, dictionaries, tuples, and sets, and apply them effectively to solve various problems.
*   Implement object-oriented programming principles to design and build scalable and maintainable applications.
*   Interact with external services and data sources by consuming RESTful APIs and performing web scraping.
*   Develop graphical user interfaces (GUIs) using Tkinter to create desktop applications.
*   Connect Python applications to databases like SQLite for persistent data storage and retrieval.
*   Utilize version control with Git and GitHub to manage code, collaborate on projects, and track changes.
*   Apply basic data analysis techniques using libraries like NumPy and Pandas, and visualize data with Matplotlib.
*   Understand basic web development concepts and build simple web applications using frameworks like Flask or Django.
*   Debug Python code effectively, handle errors gracefully, and implement basic testing strategies for robust applications.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Python Basics & Setup | 3 |
| 2 | Core Data Structures & Logic | 3 |
| 3 | Object-Oriented Programming & Modules | 4 |
| 4 | Working with Data & APIs | 4 |
| 5 | GUI, Web & Database Interaction | 5 |
| 6 | Advanced Concepts & Project Workflow | 5 |

Total chapters: 24
---

## Module 1: Python Basics & Setup

**Module Goal:** By the end of this module, you will have successfully set up your Python development environment, written your very first Python program, and gained a foundational understanding of variables, basic data types, user input, and arithmetic operations.

---

### Chapter 1.1 — Getting Started with Python: Installation and Your First Program

#### Learning objectives
*   Successfully install Python and configure your development environment.
*   Understand the role of the Python interpreter and the Integrated Development Environment (IDE).
*   Write and execute your first Python program using the `print()` function.
*   Interact with the Python interpreter in interactive mode (REPL).
*   Identify and troubleshoot common installation and basic syntax errors.

#### Detailed lesson content
Welcome to the exciting world of Python programming! You've made an excellent choice, as Python is one of the most versatile, beginner-friendly, and in-demand programming languages today. Before we dive into writing complex applications, our first crucial step is to get Python up and running on your computer. Think of it like preparing your workshop before you start building something; you need the right tools in place.

Our journey begins with installing the Python interpreter. The interpreter is essentially the program that reads and executes your Python code. Without it, your computer wouldn't understand the instructions you write in Python. The official and most reliable place to download Python is from `python.org`. When you visit the site, look for the latest stable version for your operating system (Windows, macOS, or Linux). While installing, especially on Windows, pay close attention to a checkbox that says "Add Python to PATH." **This is critically important!** Checking this box ensures that your operating system knows where to find the Python interpreter when you type `python` or `pip` into your terminal or command prompt, saving you a lot of hassle later. If you miss it, you'll have to manually add Python to your system's PATH environment variable, which can be a bit more complex for beginners.

Once Python is installed, we'll verify the installation. Open your terminal (Command Prompt on Windows, Terminal on macOS/Linux) and type `python --version` (or `python3 --version` on some systems). You should see the version number printed, confirming Python is ready. Similarly, `pip --version` will confirm that `pip`, Python's package installer, is also working. `pip` is your gateway to installing thousands of useful Python libraries, but we'll explore that in later modules. With Python installed, we'll also set up an Integrated Development Environment (IDE). While you can write Python code in any text editor, an IDE like Visual Studio Code (VS Code) provides a much richer experience with features like syntax highlighting, code completion, debugging tools, and integrated terminals. We highly recommend VS Code for this course due to its popularity, extensive features, and excellent Python support. Install VS Code and then install the official Python extension from the marketplace within VS Code. This extension will transform VS Code into a powerful Python development environment.

Now for the fun part: writing your very first program! Open VS Code, create a new file, and save it as `hello.py`. The `.py` extension is crucial as it tells the operating system that this is a Python script. Inside `hello.py`, type the following line of code:

```python
print("Hello, Cohortia!")
```

This simple line uses the built-in `print()` function, which is one of the most fundamental tools in Python. Its purpose is straightforward: it displays whatever you pass inside its parentheses to the console. In this case, it's displaying the string "Hello, Cohortia!". To run this program, open the integrated terminal in VS Code (usually accessible via `Ctrl+` or `Cmd+` backtick), navigate to the directory where you saved `hello.py` using `cd` commands, and then type `python hello.py`. You should see "Hello, Cohortia!" printed right there in your terminal!

Beyond running scripts, Python also offers an interactive mode, often referred to as the Read-Eval-Print Loop (REPL). You can enter REPL by simply typing `python` (or `python3`) in your terminal without any file name. Here, you can type Python commands one by one, and the interpreter will execute them immediately and print the result. For example, type `print("Hello from REPL!")` and press Enter. This is incredibly useful for quickly testing snippets of code, experimenting with new functions, or debugging small issues without needing to create and save a file. It's a fantastic playground for immediate feedback.

As a beginner, you might encounter some common mistakes. Typos are frequent; Python is case-sensitive, so `Print()` is not the same as `print()`. Forgetting to save your file before running it will mean you're executing an older version of your code. Incorrect file extensions (e.g., `hello.txt` instead of `hello.py`) will prevent the Python interpreter from recognizing it as Python code. And, as mentioned, not adding Python to your system's PATH during installation is a common source of "command not found" errors when trying to run `python` from the terminal. Don't get discouraged by errors; they are a natural part of learning to code and provide valuable clues for understanding how the interpreter works.

#### Key concepts
*   **Python Interpreter:** The program that reads and executes Python code.
*   **Integrated Development Environment (IDE):** A software application that provides comprehensive facilities to computer programmers for software development (e.g., VS Code).
*   **PATH Environment Variable:** A system variable that tells your operating system where to find executable programs.
*   **`print()` function:** A built-in Python function used to display output to the console.
*   **REPL (Read-Eval-Print Loop):** Python's interactive mode, allowing immediate execution of commands.
*   **Syntax:** The set of rules that defines how a Python program must be written.

#### Hands-on activity
**Task:** Install Python and VS Code, then write and run a custom greeting program.

1.  **Install Python:** Download and install the latest stable version of Python from `python.org`. **Crucially, ensure "Add Python to PATH" is checked during installation.**
2.  **Verify Python Installation:** Open your terminal/command prompt and run `python --version` and `pip --version`. Confirm both commands output version numbers.
3.  **Install VS Code:** Download and install Visual Studio Code from `code.visualstudio.com`.
4.  **Install Python Extension for VS Code:** Open VS Code, go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`), search for "Python" by Microsoft, and install it.
5.  **Create and Run Your First Script:**
    *   In VS Code, create a new file (`File > New File`).
    *   Save it as `my_greeting.py` in a new folder (e.g., `my_python_projects`).
    *   Type the following code into the file, replacing `[Your Name]` with your actual name:
        ```python
        # This is your first Python program!
        # The 'print()' function displays text to the console.
        print("Hello there, [Your Name]! Welcome to Cohortia's 100 Days of Code.")
        print("I'm excited to start this journey with you!")
        ```
    *   Open the integrated terminal in VS Code (`View > Terminal`).
    *   Navigate to the directory where you saved `my_greeting.py` using `cd` commands (e.g., `cd my_python_projects`).
    *   Run your program by typing `python my_greeting.py` and pressing Enter.
    *   Experiment: Change the text inside the `print()` function and run the script again.

#### Assessment idea
1.  **Question:** You've just installed Python, but when you type `python --version` in your terminal, you get an error message like "python is not recognized as an internal or external command." What is the most likely cause of this issue, and how can you quickly verify if Python itself is installed?
    *   **Correct Answer:** The most likely cause is that Python was not added to your system's PATH environment variable during installation. This means your operating system doesn't know where to find the `python` executable. To quickly verify if Python is installed, you can try to locate the Python installation directory (e.g., `C:\Python39` on Windows or `/usr/local/bin/python3` on macOS/Linux) and then try to run the `python.exe` (or `python3`) directly from there. If it runs, Python is installed, but the PATH needs to be configured.
2.  **Question:** Which of the following Python commands would you use to display the text "Cohortia is awesome!" to the console, and why?
    *   `display("Cohortia is awesome!")`
    *   `print("Cohortia is awesome!")`
    *   `show "Cohortia is awesome!"`
    *   `console.log("Cohortia is awesome!")`
    *   **Correct Answer:** `print("Cohortia is awesome!")`. The `print()` function is the standard, built-in Python function specifically designed to output text or other values to the console. The other options are either not valid Python functions (`display`, `show`) or belong to other programming languages (`console.log` is JavaScript).

#### AI generation note
Create a 10-12 minute mixed-format lesson. Start with a 3-minute animated explanation of the Python interpreter's role and the importance of PATH, using a visual analogy of a chef needing to find ingredients (Python) in a kitchen (OS). Then, transition to a 7-minute live coding demo showing step-by-step Python installation (mentioning the "Add to PATH" checkbox), VS Code installation, Python extension setup, creating `hello.py`, running it from the integrated terminal, and a brief interactive REPL session. Use clear, high-contrast visuals for code and terminal output. Emphasize common mistakes visually (e.g., a "red X" over `Print()` with an explanation). Include a reflection prompt about the difference between running a script and using REPL.

---

### Chapter 1.2 — Variables, Data Types, and Basic Input

#### Learning objectives
*   Define and declare variables to store data in Python programs.
*   Identify and differentiate between fundamental Python data types: integers, floats, strings, and booleans.
*   Utilize the `input()` function to receive user input from the console.
*   Perform explicit type conversion (casting) between different data types.
*   Understand and apply Python's variable naming conventions.

#### Detailed lesson content
Now that you can run a basic Python program, let's make our programs more dynamic and useful by introducing the concept of variables. Imagine variables as labeled boxes or containers in your computer's memory. Each box can hold a piece of information, and the label on the box allows you to easily find and retrieve that information later. In Python, you create a variable by giving it a name and assigning a value to it using the `=` operator. For example:

```python
user_name = "Alice"
user_age = 30
pi_value = 3.14159
is_student = True
```

In these examples, `user_name`, `user_age`, `pi_value`, and `is_student` are our variable names, and `"Alice"`, `30`, `3.14159`, and `True` are the values they hold. Python is dynamically typed, which means you don't need to explicitly declare the type of data a variable will hold; Python figures it out automatically based on the value you assign. This makes Python very flexible! However, it's crucial to understand the different *types* of data we can store, as they behave differently.

Python has several fundamental data types:
*   **Integers (`int`):** Whole numbers, positive or negative, without a decimal point. Examples: `10`, `-5`, `0`, `100000`.
*   **Floating-point numbers (`float`):** Numbers with a decimal point. Examples: `3.14`, `-0.5`, `99.99`. They are used when precision beyond whole numbers is required.
*   **Strings (`str`):** Sequences of characters, used for text. Strings are enclosed in either single quotes (`'hello'`) or double quotes (`"world"`). Both are equally valid, but consistency is key. You can combine strings using the `+` operator, a process called concatenation: `greeting = "Hello" + " " + "World"`.
*   **Booleans (`bool`):** Represent truth values, either `True` or `False`. These are essential for making decisions in your code. Note that `True` and `False` must be capitalized.

You can always check the type of a variable using the built-in `type()` function. For instance, `print(type(user_age))` would output `<class 'int'>`.

When naming variables, follow Python's conventions for readability. Variable names should be descriptive (e.g., `first_name` instead of `fn`). They must start with a letter or an underscore, and can contain letters, numbers, and underscores. They cannot start with a number. Python uses `snake_case` for variable names, where words are lowercase and separated by underscores (e.g., `total_price`, `is_logged_in`). Avoid using Python's reserved keywords (like `if`, `for`, `while`, `print`, `True`, `False`) as variable names, as this will lead to syntax errors or unexpected behavior.

To make our programs interactive, we often need to get input from the user. Python's `input()` function is perfect for this. When `input()` is called, the program pauses, displays a prompt to the user, and waits for them to type something and press Enter. Whatever the user types is then returned as a string.

```python
name = input("What is your name? ")
print("Hello, " + name + "!")

age_str = input("How old are you? ")
# If we try to do math with age_str directly, it will cause an error because it's a string.
# For example: next_year_age = age_str + 1 (TypeError)
```

Notice a crucial detail: the `input()` function *always* returns a string, regardless of what the user types. This is a very common beginner mistake. If a user types `30` for their age, `age_str` will hold the string `"30"`, not the integer `30`. If you want to perform mathematical operations with this input, you must convert it to a numeric type first. This process is called **type conversion** or **casting**. Python provides functions like `int()`, `float()`, and `str()` for this purpose.

```python
age_str = input("How old are you? ") # age_str is "30" (string)
age_int = int(age_str)              # age_int is 30 (integer)
next_year_age = age_int + 1
print(f"Next year, you will be {next_year_age} years old.")

price_str = input("Enter a price: ") # price_str is "19.99" (string)
price_float = float(price_str)     # price_float is 19.99 (float)
discounted_price = price_float * 0.9
print(f"Discounted price: {discounted_price}")
```

It's important to handle potential errors during type conversion. If a user types "twenty" when `int()` is expected, Python will raise a `ValueError`. We'll learn how to gracefully handle such errors in later modules, but for now, assume valid input for numeric conversions. Understanding variables, data types, and user input forms the bedrock of almost any interactive program you'll ever write.

#### Key concepts
*   **Variable:** A named storage location in memory used to hold data.
*   **Data Type:** A classification that specifies which type of value a variable has (e.g., integer, float, string, boolean).
*   **`int` (Integer):** A whole number data type.
*   **`float` (Floating-point number):** A number with a decimal point data type.
*   **`str` (String):** A sequence of characters (text) data type.
*   **`bool` (Boolean):** A data type representing truth values (`True` or `False`).
*   **`input()` function:** A built-in Python function used to get text input from the user.
*   **Type Conversion (Casting):** The process of converting a value from one data type to another (e.g., using `int()`, `float()`, `str()`).
*   **`type()` function:** A built-in Python function that returns the type of an object.
*   **Snake Case:** A naming convention where words are lowercase and separated by underscores (e.g., `my_variable_name`).

#### Hands-on activity
**Task:** Create a program that gathers user information, performs a simple calculation, and displays the result using different data types.

1.  **Create a new Python file** named `user_profile.py`.
2.  **Write the following code**, filling in the blanks and completing the calculation:

    ```python
    # 1. Get user's name (string)
    name = input("What is your full name? ")

    # 2. Get user's birth year (string, then convert to integer)
    birth_year_str = input("What year were you born? ")
    birth_year_int = int(birth_year_str) # Convert string to integer

    # 3. Get user's current city (string)
    city = input("Which city do you live in? ")

    # 4. Get user's favorite number (string, then convert to float)
    fav_number_str = input("What is your favorite number (can be a decimal)? ")
    fav_number_float = float(fav_number_str) # Convert string to float

    # 5. Perform a simple calculation: Calculate approximate current age
    #    Assume the current year is 2024 for simplicity.
    current_year = 2024
    current_age = current_year - birth_year_int

    # 6. Print all the gathered information and the calculated age
    print("\n--- Your Profile Summary ---")
    print("Name: " + name)
    print("Born in: " + str(birth_year_int)) # Convert int back to str for concatenation
    print("City: " + city)
    print("Favorite Number: " + str(fav_number_float)) # Convert float back to str for concatenation
    print("Approximate Age: " + str(current_age) + " years old")
    print("--------------------------")
    ```
3.  **Run the `user_profile.py` script** from your terminal and test it with different inputs. Observe how the program handles the different data types and the conversion.

#### Assessment idea
1.  **Question:** Consider the following Python code snippet:
    ```python
    value1 = "123"
    value2 = 456
    result = value1 + value2
    print(result)
    ```
    What will be the output of this code?
    *   A) `579`
    *   B) `"123456"`
    *   C) A `TypeError`
    *   D) `123456`
    *   **Correct Answer:** C) A `TypeError`. Python does not allow direct concatenation (using `+`) of a string (`value1`) and an integer (`value2`). To perform this operation, one of the values would need to be explicitly converted to the other's type (e.g., `int(value1) + value2` or `value1 + str(value2)`).
2.  **Question:** You want to ask the user for their height in centimeters and then store it as a number so you can later calculate their height in meters. Which of the following code snippets correctly achieves this?
    *   A) `height_cm = input("Enter your height in cm: ")`
    *   B) `height_cm = int(input("Enter your height in cm: "))`
    *   C) `height_cm = float(input("Enter your height in cm: "))`
    *   D) `height_cm = str(input("Enter your height in cm: "))`
    *   **Correct Answer:** C) `height_cm = float(input("Enter your height in cm: "))`. The `input()` function always returns a string. Since height can be a decimal number (e.g., 175.5 cm), converting it to a `float` is the most appropriate choice for numerical operations. While `int()` would work for whole numbers, `float()` is more versatile for measurements. Option A leaves it as a string, and Option D is redundant as `input()` already returns a string.

#### AI generation note
Create a 12-15 minute interactive code demo. Start with a visual analogy for variables (labeled containers) for 2 minutes. Then, spend 5-7 minutes live coding, demonstrating variable declaration for `int`, `float`, `str`, `bool`, using `type()` to show their types, and illustrating string concatenation. Dedicate 3-5 minutes to the `input()` function, showing how it always returns a string, followed by practical examples of `int()`, `float()` casting for calculations. Visually highlight the `TypeError` when trying to add a string and an integer without conversion. Include a drag-and-drop exercise where learners match values to their correct data types.

---

### Chapter 1.3 — Basic Arithmetic Operators and F-Strings

#### Learning objectives
*   Apply fundamental arithmetic operators (`+`, `-`, `*`, `/`, `//`, `%`, `**`) in Python.
*   Understand and correctly apply operator precedence rules in mathematical expressions.
*   Utilize f-strings (formatted string literals) for clear and concise output formatting.
*   Identify and avoid common pitfalls related to division and operator precedence.
*   Implement basic calculations using user input and formatted output.

#### Detailed lesson content
With variables and data types under our belt, it's time to make our programs perform actual work: calculations! Python provides a comprehensive set of arithmetic operators that allow you to perform common mathematical operations. These operators are intuitive and work much like you'd expect from basic algebra.

Let's explore them:
*   **Addition (`+`):** Adds two operands. `result = 10 + 5` (result is 15)
*   **Subtraction (`-`):** Subtracts the right operand from the left. `result = 10 - 5` (result is 5)
*   **Multiplication (`*`):** Multiplies two operands. `result = 10 * 5` (result is 50)
*   **Division (`/`):** Divides the left operand by the right. This *always* returns a float, even if the result is a whole number. `result = 10 / 5` (result is 2.0)
*   **Floor Division (`//`):** Divides and returns the integer part of the quotient, discarding any fractional part. `result = 10 // 3` (result is 3). `result = 10.0 // 3` (result is 3.0).
*   **Modulo (`%`):** Returns the remainder of the division. Useful for checking if a number is even/odd or for cyclic operations. `result = 10 % 3` (result is 1, because 10 divided by 3 is 3 with a remainder of 1).
*   **Exponentiation (`**`):** Raises the left operand to the power of the right. `result = 2 ** 3` (result is 8, which is 2*2*2).

A crucial concept when combining multiple operators is **operator precedence**. Just like in mathematics, certain operations are performed before others. The acronym PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) or BODMAS (Brackets, Orders, Division and Multiplication, Addition and Subtraction) applies here. Python follows these rules:
1.  **Parentheses `()`:** Expressions inside parentheses are evaluated first.
2.  **Exponents `**`:** Next come exponentiations.
3.  **Multiplication `*`, Division `/`, Floor Division `//`, Modulo `%`:** These are evaluated from left to right.
4.  **Addition `+`, Subtraction `-`:** These are evaluated last, also from left to right.

Let's see an example:
```python
calculation = 5 + 3 * 2 # Without parentheses, multiplication happens first
print(calculation) # Output: 11 (3 * 2 = 6, then 5 + 6 = 11)

calculation_with_parentheses = (5 + 3) * 2 # Parentheses override precedence
print(calculation_with_parentheses) # Output: 16 (5 + 3 = 8, then 8 * 2 = 16)
```
Using parentheses explicitly is a great practice, even when not strictly necessary, as it makes your code clearer and less prone to misinterpretation. A common mistake is forgetting that `/` always yields a float, which can lead to unexpected decimal results when you might have expected an integer. Also, remember the **safety note**: you cannot divide by zero. Attempting `10 / 0` will result in a `ZeroDivisionError`.

Now, let's talk about presenting our calculation results beautifully. In Chapter 1.2, we used string concatenation with `+` to combine text and variables for printing. While functional, it can become cumbersome, especially when dealing with many variables and type conversions (`str()` calls). Python offers a much more elegant solution: **f-strings** (formatted string literals), introduced in Python 3.6.

An f-string is created by prefixing a string literal with the letter `f` (or `F`). Inside an f-string, you can embed Python expressions directly by enclosing them in curly braces `{}`. Python will evaluate these expressions and convert their results to strings, inserting them into the f-string.

```python
name = "Charlie"
age = 25
height = 1.75

# Old way (concatenation)
print("Hello, " + name + "! You are " + str(age) + " years old.")

# Older way (format method)
print("Hello, {}! You are {} years old.".format(name, age))

# The f-string way (clean and readable!)
print(f"Hello, {name}! You are {age} years old and {height:.2f} meters tall.")
```
Notice in the f-string example, we can even include formatting specifications like `:.2f` inside the curly braces to format floating-point numbers to two decimal places. F-strings significantly improve code readability and reduce the need for explicit `str()` conversions within your `print()` statements. They are the recommended way to format strings in modern Python. Using f-strings, you can easily create clear output for real-world scenarios, such as displaying a calculated total price, a user's BMI, or the remaining time in a countdown.

#### Key concepts
*   **Arithmetic Operators:** Symbols used to perform mathematical calculations (`+`, `-`, `*`, `/`, `//`, `%`, `**`).
*   **Operator Precedence:** The order in which operations are performed in an expression (e.g., multiplication before addition).
*   **Division (`/`):** Returns a float result.
*   **Floor Division (`//`):** Returns the integer part of the division.
*   **Modulo (`%`):** Returns the remainder of a division.
*   **Exponentiation (`**`):** Raises a number to a power.
*   **F-string (Formatted String Literal):** A way to embed expressions inside string literals by prefixing the string with `f` or `F`.
*   **`ZeroDivisionError`:** A runtime error that occurs when attempting to divide a number by zero.

#### Hands-on activity
**Task:** Create a simple tip calculator that takes the bill amount and tip percentage from the user, then calculates and displays the total bill, including the tip, using f-strings for clear output.

1.  **Create a new Python file** named `tip_calculator.py`.
2.  **Write the following code:**

    ```python
    # Simple Tip Calculator

    # 1. Get the total bill amount from the user
    bill_amount_str = input("What was the total bill? $")
    bill_amount = float(bill_amount_str) # Convert to float for calculations

    # 2. Get the desired tip percentage from the user
    tip_percentage_str = input("What percentage tip would you like to give? (e.g., 10, 15, 20) ")
    tip_percentage = int(tip_percentage_str) # Convert to integer

    # 3. Calculate the tip amount
    #    Remember to convert percentage to a decimal (e.g., 15% is 0.15)
    tip_as_decimal = tip_percentage / 100
    tip_amount = bill_amount * tip_as_decimal

    # 4. Calculate the total bill
    total_bill = bill_amount + tip_amount

    # 5. Display the results using f-strings, formatted to two decimal places for currency
    print(f"\nYour bill was: ${bill_amount:.2f}")
    print(f"You chose to tip: {tip_percentage}%")
    print(f"The tip amount is: ${tip_amount:.2f}")
    print(f"Your total bill (including tip) is: ${total_bill:.2f}")

    # Common mistake to consider: What if the user enters non-numeric input?
    # For this chapter, assume valid numeric input. Error handling comes later!
    ```
3.  **Run the `tip_calculator.py` script** and test it with different bill amounts and tip percentages. Observe the formatted output.

#### Assessment idea
1.  **Question:** What will be the value of `result` after executing the following Python code?
    ```python
    a = 15
    b = 4
    result = a // b + a % b * 2
    ```
    *   A) `5`
    *   B) `7`
    *   C) `9`
    *   D) `11`
    *   **Correct Answer:** B) `7`.
        *   First, `a // b` (floor division): `15 // 4` equals `3`.
        *   Next, `a % b` (modulo): `15 % 4` equals `3` (remainder of 15 divided by 4).
        *   Then, `a % b * 2`: `3 * 2` equals `6`.
        *   Finally, `3 + 6` equals `9`. (Wait, let me re-evaluate based on PEMDAS: `15 // 4` is 3. `15 % 4` is 3. `3 * 2` is 6. `3 + 6` is 9. My initial mental calculation was wrong. Let's re-run this in my head.
        *   `a = 15`, `b = 4`
        *   `a // b` -> `15 // 4` -> `3` (integer division)
        *   `a % b` -> `15 % 4` -> `3` (remainder is 3)
        *   `a % b * 2` -> `3 * 2` -> `6` (multiplication before addition)
        *   `result = 3 + 6` -> `9`
        *   Okay, the correct answer is `9`. Let me correct the options or my explanation. The provided options don't have 9. Let me make sure my calculation is correct.
        *   `15 // 4` is 3.
        *   `15 % 4` is 3.
        *   `3 + 3 * 2`
        *   Multiplication first: `3 * 2 = 6`
        *   Then addition: `3 + 6 = 9`
        *   The options need to be updated to include `9`. Let's assume the options were `A) 5`, `B) 7`, `C) 9`, `D) 11`.
        *   **Correct Answer:** C) `9`.
            *   `a // b` (floor division): `15 // 4` evaluates to `3`.
            *   `a % b` (modulo): `15 % 4` evaluates to `3` (because 15 divided by 4 is 3 with a remainder of 3).
            *   According to operator precedence (PEMDAS/BODMAS), multiplication (`*`) is performed before addition (`+`). So, `a % b * 2` becomes `3 * 2`, which evaluates to `6`.
            *   Finally, `result = 3 + 6`, which equals `9`.
2.  **Question:** You have variables `product_name = "Laptop"` and `price = 1200.50`. Which f-string correctly displays "The Laptop costs $1200.50"?
    *   A) `f"The {product_name} costs ${price}"`
    *   B) `f"The {product_name} costs ${price:.2f}"`
    *   C) `f"The product_name costs $price"`
    *   D) `f"The {product_name} costs $" + str(price)`
    *   **Correct Answer:** B) `f"The {product_name} costs ${price:.2f}"`. This f-string correctly embeds the `product_name` and `price` variables. The `:.2f` formatting specifier ensures that the `price` (a float) is displayed with exactly two decimal places, which is standard for currency. Option A is close but doesn't format the price. Option C treats the variable names as literal strings. Option D mixes f-string syntax with old-style concatenation, which is less readable and not the intended use of f-strings.

#### AI generation note
Create a 10-12 minute video lesson. Begin with a 3-minute animated explanation of arithmetic operators, using simple visual examples for each. Then, dedicate 4-5 minutes to operator precedence, using a visual "stack" or "hierarchy" to show PEMDAS/BODMAS, demonstrating how parentheses change evaluation order with a single complex expression. Conclude with a 3-4 minute live coding segment demonstrating f-strings with variables of different types (int, float, str), showcasing basic formatting like `:.2f` for currency. Include a mini-quiz question where learners predict the output of an expression involving multiple operators.

---

## Module 2: Core Data Structures & Logic

Welcome to Module 2! In this module, we'll dive into the fundamental building blocks of almost any Python program: how we store and manipulate data, and how our programs can make decisions. You'll learn about variables, different types of data Python handles, how to perform calculations, and how to introduce conditional logic to make your code smarter and more responsive. Get ready to bring your programs to life!

### Chapter 2.1 — Understanding Variables and Basic Data Types

#### Learning objectives
*   Define what a variable is and explain its purpose in programming.
*   Declare and assign values to variables in Python, adhering to naming conventions.
*   Identify and differentiate between Python's basic data types: integers, floats, strings, and booleans.
*   Perform explicit type conversions between different data types and understand when they are necessary.
*   Utilize f-strings for efficient and readable string formatting.

#### Detailed lesson content
In the world of programming, variables are essentially named storage locations that hold data. Think of a variable as a labeled box in which you can store a piece of information. The label on the box is the variable's name, and the content inside is its value. Just like you can put different things into a box – a book, a toy, or a letter – a variable can hold different types of data. This ability to store and change data is fundamental to creating dynamic and useful programs. In Python, you don't need to explicitly declare a variable's type before using it; you simply assign a value to a name, and Python intelligently infers its type. For example, `age = 30` creates a variable named `age` and stores the integer `30` in it.

When naming your variables, it's crucial to follow Python's conventions for readability and maintainability, primarily outlined in PEP 8. Variable names should be descriptive, use `snake_case` (lowercase words separated by underscores, like `user_name` or `total_price`), and start with a letter or an underscore. Avoid starting with numbers, using special characters (like `!`, `@`, `#`), or using Python's reserved keywords (like `if`, `for`, `print`). A common mistake beginners make is using single-letter variable names or non-descriptive names, which makes code hard to understand later. Always aim for clarity; `customer_age` is far better than `ca` or `x`.

Python comes with several built-in basic data types to handle different kinds of information. The most common ones you'll encounter are integers, floats, strings, and booleans. An **integer** (`int`) represents whole numbers, positive or negative, without any decimal point. Examples include `5`, `-100`, or `0`. When you're counting items or dealing with quantities that can't be fractional, integers are your go-to. A **floating-point number** (`float`) represents real numbers, including those with decimal points. Examples are `3.14`, `-0.5`, or `2.0`. Floats are essential for calculations involving precision, like measurements, prices, or scientific data. It's worth noting that due to how computers store floating-point numbers, sometimes you might encounter tiny precision errors in complex calculations, though for most beginner tasks, this won't be an issue.

**Strings** (`str`) are sequences of characters used to represent text. You can define a string using either single quotes (`'Hello World'`) or double quotes (`"Python is fun!"`). Both work identically, but it's good practice to be consistent or use the alternative if your string itself contains quotes (e.g., `"He said, 'Hello!'"`). Strings are incredibly versatile for displaying messages, storing names, or handling any textual data. You can combine strings using the `+` operator, a process called **concatenation**, like `'Hello' + ' ' + 'Python'`. A more modern and powerful way to embed variables directly into strings is using **f-strings** (formatted string literals), introduced in Python 3.6. For example, if `name = "Alice"` and `age = 30`, you can write `f"My name is {name} and I am {age} years old."` This is much cleaner and more readable than concatenation.

Finally, **booleans** (`bool`) are the simplest data type, representing one of two values: `True` or `False`. These are fundamental for decision-making and control flow in your programs, as we'll explore in later chapters. For instance, a variable `is_active = True` might indicate a user's status. Python provides a built-in function `type()` that allows you to check the data type of any variable, which can be very helpful for debugging or understanding your code. For example, `print(type(age))` would output `<class 'int'>`.

Sometimes, you'll need to change a variable from one data type to another, a process known as **type conversion** or **type casting**. Python provides built-in functions for this: `int()`, `float()`, `str()`, and `bool()`. For instance, if you get user input using the `input()` function, it always returns a string. If you want to perform arithmetic with that input, you'll need to convert it to an `int` or `float`. `user_age = int(input("Enter your age: "))` converts the user's input string to an integer. A common mistake here is trying to convert a string that doesn't represent a valid number (e.g., `int("hello")`) which will result in a `ValueError`. Similarly, converting a float to an int using `int()` will truncate the decimal part (e.g., `int(3.8)` becomes `3`), not round it. Understanding when and how to correctly convert types is crucial for preventing errors and ensuring your program handles data as expected.

#### Key concepts
*   **Variable:** A named storage location in a program's memory that holds a value.
*   **Assignment Operator (`=`):** Used to assign a value to a variable.
*   **Integer (`int`):** A whole number, positive or negative, without a decimal point.
*   **Floating-point number (`float`):** A number with a decimal point, representing real numbers.
*   **String (`str`):** A sequence of characters used for text, enclosed in single or double quotes.
*   **Boolean (`bool`):** A data type with two possible values: `True` or `False`, used for logical conditions.
*   **Type Conversion (Type Casting):** The process of changing a variable's data type (e.g., `int()`, `float()`, `str()`, `bool()`).
*   **Concatenation:** Combining two or more strings using the `+` operator.
*   **f-string (Formatted String Literal):** A way to embed expressions inside string literals for easy formatting, prefixed with `f` or `F`.

#### Hands-on activity
Let's create a simple Python script to gather some personal information, store it in variables, and then display it using f-strings and practice type conversion.

```python
# --- Starter Code: Chapter 2.1 Hands-on Activity ---

# 1. Ask the user for their name and store it in a string variable.
user_name = input("What is your name? ")

# 2. Ask the user for their age and store it. Remember input() returns a string!
user_age_str = input("How old are you? ")

# 3. Ask the user for their height in meters (e.g., 1.75) and store it.
user_height_str = input("What is your height in meters (e.g., 1.75)? ")

# 4. Ask if they are a student (True/False) and store it as a boolean.
#    Consider how to convert user input like "yes"/"no" into a boolean.
is_student_str = input("Are you currently a student? (yes/no): ").lower() # Convert to lowercase for easier comparison

# --- Your Task Below This Line ---

# Task A: Convert user_age_str to an integer and user_height_str to a float.
#         Store them in new variables: user_age_int and user_height_float.
#         Handle potential errors if the user enters non-numeric input for age/height.
try:
    user_age_int = int(user_age_str)
    user_height_float = float(user_height_str)
except ValueError:
    print("Invalid input for age or height. Please enter numbers.")
    user_age_int = 0 # Default value
    user_height_float = 0.0 # Default value

# Task B: Convert is_student_str to a boolean. If the input is "yes", it should be True, otherwise False.
is_student_bool = (is_student_str == "yes")

# Task C: Print out all the collected information using a single f-string.
#         Example output: "Hello [Name]! You are [Age] years old and [Height] meters tall. Student status: [True/False]."
print(f"Hello {user_name}! You are {user_age_int} years old and {user_height_float} meters tall. Student status: {is_student_bool}.")

# --- End of Activity ---
```

#### Assessment idea
1.  **Question:** Which of the following is an invalid Python variable name, and why?
    a) `_my_variable`
    b) `1st_variable`
    c) `myVariable`
    d) `total_amount`

    **Correct Answer:** b) `1st_variable`. Python variable names cannot start with a number. They must start with a letter or an underscore.

2.  **Question:** What will be the output of the following Python code snippet?
    ```python
    value_str = "12.5"
    value_int = int(value_str)
    print(value_int)
    ```
    a) `12.5`
    b) `12`
    c) `13`
    d) This code will raise a `ValueError`.

    **Correct Answer:** d) This code will raise a `ValueError`. The `int()` function can only convert strings that represent whole numbers (integers). A string like `"12.5"` which represents a floating-point number cannot be directly converted to an integer using `int()`. You would first need to convert it to a float (`float("12.5")`) and then to an int (`int(12.5)`), which would truncate it to `12`.

#### AI generation note
Create a 10-minute animated video explaining variables and data types. Start with a visual analogy of variables as labeled boxes, showing different types of items (numbers, text, true/false signs) being placed inside. Demonstrate Python's dynamic typing by showing `age = 30` then `age = "thirty"` and how the type changes. Use a side-by-side comparison of `int`, `float`, `str`, and `bool` with clear examples and their `type()` output. Include a segment on common variable naming mistakes (starting with numbers, keywords) with visual error indicators. Conclude with a live coding demonstration of type conversion, showing successful conversions and the `ValueError` when attempting `int("12.5")`, explaining why. The interactive element will be a drag-and-drop exercise where learners match a value to its correct Python data type.

### Chapter 2.2 — Working with Operators and Expressions

#### Learning objectives
*   Identify and correctly use Python's arithmetic operators for mathematical calculations.
*   Understand and apply the rules of operator precedence to evaluate complex expressions accurately.
*   Utilize comparison operators to create boolean expressions for evaluating relationships between values.
*   Combine boolean expressions effectively using logical operators (`and`, `or`, `not`).
*   Employ augmented assignment operators as a shorthand for updating variable values.

#### Detailed lesson content
Now that we understand how to store data in variables, the next crucial step is learning how to manipulate that data. This is where **operators** come into play. Operators are special symbols that perform operations on one or more values (called **operands**) and return a result. A combination of values, variables, and operators that Python can evaluate is called an **expression**. For example, `5 + 3` is an expression that uses the `+` operator to add `5` and `3`.

Python provides a rich set of **arithmetic operators** for performing mathematical calculations. These include `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulo), `**` (exponentiation), and `//` (floor division). The first four are straightforward. The `%` (modulo) operator returns the remainder of a division. For example, `10 % 3` evaluates to `1` because 10 divided by 3 is 3 with a remainder of 1. This is incredibly useful for tasks like checking if a number is even or odd (`number % 2 == 0`). The `**` (exponentiation) operator raises a number to a power, so `2 ** 3` is `2 * 2 * 2`, which equals `8`. Finally, `//` (floor division) performs division and then rounds the result down to the nearest whole number. For instance, `10 // 3` is `3`, and `7 // 2` is `3`. It's important to remember that standard division (`/`) always returns a float, even if the result is a whole number (e.g., `10 / 2` is `5.0`).

When multiple operators are present in a single expression, Python follows a specific order of operations, known as **operator precedence**, similar to PEMDAS/BODMAS in mathematics. Exponentiation (`**`) has the highest precedence, followed by multiplication, division, floor division, and modulo (`*`, `/`, `//`, `%`), and then addition and subtraction (`+`, `-`). Operators with the same precedence are typically evaluated from left to right. Just like in math, you can use parentheses `()` to explicitly control the order of evaluation, forcing certain operations to happen first. For example, `5 + 2 * 3` evaluates to `11` (2 * 3 first), but `(5 + 2) * 3` evaluates to `21` (5 + 2 first). A common mistake is to assume operations will always happen left-to-right without considering precedence, leading to incorrect results. Always use parentheses if you are unsure or want to make your code's intent clearer.

Beyond arithmetic, Python offers **comparison operators** which allow you to compare two values and determine their relationship. These operators always return a boolean value (`True` or `False`). The comparison operators are: `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to). For example, `5 == 5` is `True`, `5 != 5` is `False`, `10 > 7` is `True`, and `3 <= 3` is `True`. These operators are fundamental for creating conditions in `if` statements, which we'll cover in the next chapter.

To build more complex conditions, you'll use **logical operators**: `and`, `or`, and `not`. These operators work with boolean values or expressions that evaluate to booleans.
*   The `and` operator returns `True` only if *both* operands are `True`. Otherwise, it returns `False`. Example: `(age > 18) and (has_license == True)`.
*   The `or` operator returns `True` if *at least one* of the operands is `True`. It only returns `False` if both operands are `False`. Example: `(is_weekend) or (is_holiday)`.
*   The `not` operator negates a boolean value. If the operand is `True`, `not` makes it `False`, and vice-versa. Example: `not is_raining`.
Understanding how these logical operators combine conditions is vital for creating sophisticated decision-making logic in your programs.

Finally, Python provides **augmented assignment operators** as a convenient shorthand for updating the value of a variable. Instead of writing `x = x + 1`, you can write `x += 1`. Similarly, `x -= 5` is equivalent to `x = x - 5`, `x *= 2` is `x = x * 2`, and so on for all arithmetic operators. These operators make your code more concise and often slightly more efficient, especially when dealing with long variable names or complex expressions. For example, `total_score += points_earned` is much cleaner than `total_score = total_score + points_earned`. Using these operators is a good practice for clean and efficient code.

#### Key concepts
*   **Operator:** A symbol that performs an operation on one or more values (operands).
*   **Expression:** A combination of values, variables, and operators that Python evaluates to produce a result.
*   **Arithmetic Operators:** Operators for mathematical calculations (`+`, `-`, `*`, `/`, `%`, `**`, `//`).
*   **Operator Precedence:** The order in which operators are evaluated in an expression (e.g., `**` before `*`/`/`, then `+`/`-`).
*   **Comparison Operators:** Operators that compare two values and return a boolean (`True`/`False`) result (`==`, `!=`, `>`, `<`, `>=`, `<=`).
*   **Logical Operators:** Operators that combine or modify boolean expressions (`and`, `or`, `not`).
*   **Augmented Assignment Operators:** Shorthand operators for performing an operation and assigning the result back to the same variable (e.g., `+=`, `-=`, `*=`).

#### Hands-on activity
Let's build a small program that calculates the Body Mass Index (BMI) and then evaluates if a person falls into a certain weight category using comparison and logical operators.

```python
# --- Starter Code: Chapter 2.2 Hands-on Activity ---

# 1. Get user input for weight in kilograms and height in meters.
weight_kg_str = input("Enter your weight in kilograms: ")
height_m_str = input("Enter your height in meters: ")

# --- Your Task Below This Line ---

# Task A: Convert the input strings to appropriate numeric types (float).
#         Handle potential ValueError if input is not numeric.
try:
    weight_kg = float(weight_kg_str)
    height_m = float(height_m_str)
except ValueError:
    print("Invalid input. Please enter numeric values for weight and height.")
    weight_kg = 0.0
    height_m = 1.0 # Avoid division by zero for height

# Task B: Calculate BMI using the formula: BMI = weight (kg) / (height (m) ** 2)
#         Ensure you use the correct arithmetic operators and precedence.
if height_m > 0: # Prevent division by zero if height was invalid
    bmi = weight_kg / (height_m ** 2)
    print(f"Your calculated BMI is: {bmi:.2f}") # .2f formats to two decimal places
else:
    bmi = 0.0
    print("Cannot calculate BMI with a height of zero.")

# Task C: Define a variable `is_healthy_weight` using comparison and logical operators.
#         A healthy BMI is typically between 18.5 and 24.9 (inclusive).
#         The expression should evaluate to True if BMI is in this range, False otherwise.
is_healthy_weight = (bmi >= 18.5) and (bmi <= 24.9)

# Task D: Print whether the person is in a healthy weight range.
print(f"Are you in a healthy weight range? {is_healthy_weight}")

# Task E (Bonus): Use an augmented assignment operator to simulate gaining 2 kg.
#                 Then print the new weight.
weight_kg += 2
print(f"After gaining 2 kg, your new weight is: {weight_kg} kg")

# --- End of Activity ---
```

#### Assessment idea
1.  **Question:** Evaluate the following Python expression, considering operator precedence:
    `result = 10 + 4 * 2 / 2 - 3`
    What is the final value of `result`?
    a) `11.0`
    b) `10.0`
    c) `7.0`
    d) `9.0`

    **Correct Answer:** a) `11.0`
    **Explanation:**
    1.  Multiplication and Division have higher precedence than Addition and Subtraction. They are evaluated from left to right.
    2.  `4 * 2` evaluates to `8`.
    3.  `8 / 2` evaluates to `4.0` (division always returns a float).
    4.  The expression becomes `10 + 4.0 - 3`.
    5.  Addition and Subtraction are evaluated from left to right.
    6.  `10 + 4.0` evaluates to `14.0`.
    7.  `14.0 - 3` evaluates to `11.0`.

2.  **Question:** Given the following variables:
    ```python
    temperature = 25
    is_raining = True
    ```
    What will be the result of the following expression?
    `print((temperature > 20 and not is_raining) or (temperature < 15))`
    a) `True`
    b) `False`
    c) `SyntaxError`
    d) `TypeError`

    **Correct Answer:** b) `False`
    **Explanation:**
    Let's break down the expression:
    *   `temperature > 20` is `25 > 20`, which is `True`.
    *   `not is_raining` is `not True`, which is `False`.
    *   `temperature > 20 and not is_raining` becomes `True and False`, which is `False`.
    *   `temperature < 15` is `25 < 15`, which is `False`.
    *   Finally, the entire expression becomes `False or False`, which is `False`.

#### AI generation note
Design a 12-minute interactive slide deck with integrated mini-quizzes. Begin with a visual hierarchy of operator precedence (like a pyramid) for arithmetic operators. Each operator should have a dedicated slide with a simple example and an explanation of its function (e.g., modulo for even/odd checks, floor division for integer results). Use animated step-by-step evaluation of complex expressions to demonstrate precedence. Transition to comparison operators, showing how they return `True`/`False` with various number and string comparisons. Dedicate a section to logical operators (`and`, `or`, `not`), using truth tables and real-world scenarios (e.g., "eligible for discount if (age > 60 or student == True)"). Conclude with augmented assignment operators, showing `x = x + 1` transforming into `x += 1` with a visual animation. The interactive element will be a fill-in-the-blanks exercise where learners complete expressions using the correct operator.

### Chapter 2.3 — Introduction to Conditional Logic (If/Elif/Else)

#### Learning objectives
*   Write basic `if` statements to execute code blocks based on a single condition.
*   Implement `else` statements to provide an alternative execution path when an `if` condition is false.
*   Utilize `elif` statements to handle multiple, mutually exclusive conditions in a structured way.
*   Understand and correctly apply Python's strict indentation rules for defining code blocks.
*   Combine conditional statements with logical operators to create more complex decision-making logic.

#### Detailed lesson content
Up until now, our Python programs have executed instructions sequentially, one after another, from top to bottom. But what if we want our programs to make decisions, to choose different paths of execution based on certain conditions? This is where **conditional logic** comes in, and the `if`, `elif`, and `else` statements are your primary tools for controlling the flow of your program. These statements allow your code to be dynamic and respond intelligently to different inputs or situations.

The most basic form of conditional logic is the **`if` statement**. It allows a block of code to be executed *only if* a specified condition evaluates to `True`. The syntax is straightforward: `if condition:`. The `condition` is typically a boolean expression (using comparison or logical operators) that Python evaluates. If the condition is `True`, the code indented below the `if` statement is executed. If the condition is `False`, that indented block is skipped entirely, and the program continues with the code after the `if` block. For example:

```python
age = 20
if age >= 18:
    print("You are an adult.")
print("Program continues here.")
```
In this example, "You are an adult." will be printed because `age >= 18` is `True`. If `age` was `16`, the `print` statement inside the `if` block would be skipped.

A critical aspect of Python's syntax, especially with conditional statements, is **indentation**. Unlike many other programming languages that use curly braces `{}` to define code blocks, Python uses whitespace (specifically, four spaces by convention) to indicate which lines of code belong to an `if`, `elif`, or `else` block. All lines within a block must have the same level of indentation. Incorrect indentation will lead to an `IndentationError`, which is a very common mistake for beginners. Always be mindful of your spacing!

To provide an alternative path when an `if` condition is `False`, you use the **`else` statement**. The `else` block executes when the `if` condition (and any preceding `elif` conditions) is `False`. An `else` statement must always follow an `if` or `elif` statement. It doesn't have a condition of its own, as it acts as the "catch-all" for all other cases.

```python
temperature = 15
if temperature > 25:
    print("It's hot outside!")
else:
    print("It's not too hot.")
```
Here, because `temperature > 25` is `False`, the code inside the `else` block will execute, printing "It's not too hot."

When you have more than two possible outcomes or multiple conditions to check, the **`elif` statement** (short for "else if") becomes incredibly useful. You can chain multiple `elif` statements between an `if` and an `else`. Python checks these conditions in order, from top to bottom. As soon as it finds a condition that is `True`, it executes that corresponding block of code and then skips the rest of the `elif`/`else` chain. This means that only one block of code within an `if`/`elif`/`else` structure will ever be executed. The order of your `elif` conditions matters significantly; always place more specific conditions before more general ones.

```python
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```
In this example, since `score` is `85`, the first condition (`score >= 90`) is `False`. The second condition (`score >= 80`) is `True`, so "Grade: B" is printed, and the rest of the `elif` and `else` blocks are skipped.

You can also combine conditions within your `if`, `elif`, or `else` statements using the logical operators `and`, `or`, and `not` that we discussed in the previous chapter. This allows for very precise control over when a block of code executes. For example, `if age >= 18 and has_ticket:`. This condition will only be `True` if *both* `age` is 18 or greater *and* `has_ticket` is `True`.

Sometimes, you might find yourself needing to use **nested `if` statements**, where one `if` statement is entirely contained within another `if` or `else` block. This is useful when a secondary decision needs to be made only after a primary condition has been met. For instance, `if user_logged_in: if user_is_admin: ...`. While powerful, deeply nested `if` statements can make code harder to read and maintain. Often, a combination of `elif` statements or logical operators (`and`, `or`) can achieve the same result with flatter, more readable code. Always strive for clarity and simplicity when designing your conditional logic.

#### Key concepts
*   **Control Flow:** The order in which instructions are executed in a program.
*   **Conditional Statement:** A programming construct that allows different blocks of code to be executed based on whether a condition is `True` or `False`.
*   **`if` statement:** Executes a block of code if its condition is `True`.
*   **`else` statement:** Provides an alternative block of code to execute if the preceding `if` (or `elif`) conditions are all `False`.
*   **`elif` statement:** (short for "else if") Allows checking multiple conditions sequentially. Only one `elif` block (or the `if` or `else` block) will execute.
*   **Indentation:** The use of whitespace (typically four spaces) to define code blocks in Python, crucial for correct syntax and program execution.
*   **Code Block:** A group of statements that are executed together, defined by their shared indentation level.
*   **Nested `if` statements:** An `if` statement placed inside another `if` or `else` block.

#### Hands-on activity
Let's create a simple program that simulates a movie ticket dispenser. It will ask the user for their age and whether they have a student ID, then determine the ticket price based on these conditions.

```python
# --- Starter Code: Chapter 2.3 Hands-on Activity ---

print("Welcome to the Cohortia Movie Theater!")

# 1. Get user input for age. Remember to convert it to an integer.
age_str = input("Please enter your age: ")

# 2. Get user input for student status.
is_student_str = input("Do you have a student ID? (yes/no): ").lower()

# --- Your Task Below This Line ---

# Task A: Convert age_str to an integer. Handle potential ValueError.
try:
    age = int(age_str)
except ValueError:
    print("Invalid age entered. Defaulting to 18.")
    age = 18 # Default age

# Task B: Determine if the user is a student (boolean).
is_student = (is_student_str == "yes")

# Task C: Implement conditional logic to calculate ticket price.
#         Use if/elif/else statements with logical operators.
#         Ticket prices:
#         - Children (under 13): $8
#         - Teens (13-17): $10
#         - Adults (18-64): $12
#         - Seniors (65+): $9
#         - Students (any age with student ID, overrides other prices): $7

ticket_price = 0

if is_student:
    ticket_price = 7
    print("Student discount applied!")
elif age < 13:
    ticket_price = 8
    print("Child ticket price applied.")
elif age >= 13 and age <= 17: # or simply age < 18
    ticket_price = 10
    print("Teen ticket price applied.")
elif age >= 65: # This condition must come before the general adult condition to be effective for seniors
    ticket_price = 9
    print("Senior ticket price applied.")
else: # This covers adults aged 18-64
    ticket_price = 12
    print("Adult ticket price applied.")

# Task D: Print the final ticket price.
print(f"Your ticket price is: ${ticket_price}")

# --- End of Activity ---
```

#### Assessment idea
1.  **Question:** What will be the output of the following Python code?
    ```python
    x = 10
    y = 5
    if x > y:
        print("A")
    elif x == y:
        print("B")
    else:
        print("C")
    print("D")
    ```
    a) `A`
       `D`
    b) `A`
    c) `B`
       `D`
    d) `C`
       `D`

    **Correct Answer:** a)
    **Explanation:**
    1.  `x > y` (10 > 5) is `True`.
    2.  The code inside the `if` block executes, printing "A".
    3.  Since an `if` condition was met, the `elif` and `else` blocks are skipped.
    4.  The program continues after the `if`/`elif`/`else` structure, printing "D".

2.  **Question:** Consider the following code snippet. What is the most likely error if this code is run as written?
    ```python
    temperature = 30
    if temperature > 25:
    print("It's hot!")
        print("Stay hydrated.")
    else:
        print("It's pleasant.")
    ```
    a) `SyntaxError: invalid syntax`
    b) `IndentationError: expected an indented block`
    c) `IndentationError: unexpected indent`
    d) `TypeError: unsupported operand type(s)`

    **Correct Answer:** c) `IndentationError: unexpected indent`
    **Explanation:**
    Python uses indentation to define code blocks. The line `print("It's hot!")` is correctly indented by 4 spaces after the `if` statement. However, the line `print("Stay hydrated.")` is indented by 8 spaces (or more) which is an "unexpected indent" because it's not aligned with the first `print` statement and doesn't belong to a nested block. All statements within the same `if` block must have the same level of indentation.

#### AI generation note
Produce an 11-minute animated video that visually explains control flow. Start with a branching path analogy to introduce `if`, `elif`, and `else`. Use a clear flowchart animation to show how conditions are evaluated sequentially and how only one path is taken. Emphasize Python's indentation rules with visual cues (e.g., highlighting indentation, showing red error boxes for incorrect spacing). Provide real-world examples like a simple grading system or a traffic light controller. Include a live coding segment demonstrating how to combine `if`/`elif`/`else` with logical operators for more complex decisions, and briefly touch upon nested `if` statements with a warning about readability. The interactive element will be a drag-and-drop activity where learners arrange `if`, `elif`, and `else` blocks to solve a given problem.

---

## Module 3: Object-Oriented Programming & Modules
**Goal:** Master the principles of Object-Oriented Programming (OOP) in Python and effectively organize code using modules and packages to build scalable and maintainable applications.

### Chapter 3.1 — Introduction to Object-Oriented Programming (OOP) in Python

#### Learning objectives
*   Define the core principles of Object-Oriented Programming (OOP) and explain its benefits.
*   Differentiate between classes and objects, understanding their relationship as blueprints and instances.
*   Design and implement a basic Python class with attributes and methods.
*   Explain the purpose of the `self` keyword and the `__init__` constructor method.
*   Create objects (instances) from a class and interact with their attributes and methods.

#### Detailed lesson content
Welcome to the exciting world of Object-Oriented Programming, or OOP! Up until now, you've been writing code in a procedural style, where you define functions and execute them in a sequence. While effective for smaller scripts, this approach can become unwieldy as programs grow in complexity. OOP offers a powerful paradigm for structuring your code, allowing you to model real-world entities and their interactions, leading to more organized, reusable, and maintainable software. Think of OOP as a way to build software using modular, self-contained "objects" that represent things like users, products, cars, or bank accounts.

At the heart of OOP are two fundamental concepts: **classes** and **objects**. Imagine you're building a house. You don't just start laying bricks; you first need a blueprint. In OOP, a **class** is like that blueprint. It's a template or a design that defines the characteristics (what an object *has*) and behaviors (what an object *does*) that all objects of a certain type will possess. For instance, a `Car` class might define that all cars have a `make`, `model`, and `year` (these are called **attributes**), and they can `start_engine()` or `drive()` (these are called **methods**). A class doesn't actually *do* anything on its own; it just describes what something *can* be.

An **object**, on the other hand, is a concrete instance of a class. Following our house analogy, an object is the actual house built from the blueprint. If `Car` is the class, then your specific Toyota Camry from 2020 or a friend's Tesla Model 3 from 2023 are individual `Car` objects. Each object has its own unique set of attribute values (e.g., one car's make is "Toyota," another's is "Tesla") but shares the same defined behaviors (both can `start_engine()`). To create a class in Python, you use the `class` keyword, followed by the class name (conventionally capitalized using CamelCase) and a colon.

Let's define a simple `Car` class:

```python
class Car:
    # This is a class attribute, shared by all instances
    wheels = 4

    def __init__(self, make, model, year):
        # This is the constructor method
        # 'self' refers to the instance of the class being created
        self.make = make    # Instance attribute
        self.model = model  # Instance attribute
        self.year = year    # Instance attribute
        self.is_running = False

    def start_engine(self):
        # This is a method (a function associated with the class)
        if not self.is_running:
            self.is_running = True
            print(f"The {self.year} {self.make} {self.model}'s engine started.")
        else:
            print(f"The {self.make} {self.model} is already running.")

    def drive(self, distance):
        if self.is_running:
            print(f"The {self.make} {self.model} is driving {distance} miles.")
        else:
            print(f"Cannot drive the {self.make} {self.model}. Engine is off.")

    def stop_engine(self):
        if self.is_running:
            self.is_running = False
            print(f"The {self.make} {self.model}'s engine stopped.")
        else:
            print(f"The {self.make} {self.model} is already off.")
```

Notice the `__init__` method. This is a special method in Python called the **constructor**. It's automatically called whenever you create a new object (an instance) of the class. Its primary purpose is to initialize the object's attributes with the values you provide when creating it. The `self` parameter is crucial here. It's a convention (though not a keyword) that refers to the instance of the class itself. When you call `car1.start_engine()`, Python automatically passes `car1` as the `self` argument to the `start_engine` method. This allows methods to access and modify the attributes specific to *that particular object*. Forgetting `self` when defining methods or referring to instance attributes within methods is a very common beginner mistake. Another common mistake is forgetting the parentheses `()` when calling a method, e.g., `car1.start_engine` instead of `car1.start_engine()`. The first would just give you a reference to the method, not execute it.

Now, let's create some `Car` objects and interact with them:

```python
# Creating objects (instantiating the class)
my_car = Car("Toyota", "Camry", 2020)
friend_car = Car("Tesla", "Model 3", 2023)

# Accessing attributes
print(f"My car is a {my_car.year} {my_car.make} {my_car.model}.")
print(f"My car has {my_car.wheels} wheels.") # Accessing a class attribute
print(f"Friend's car is a {friend_car.year} {friend_car.make} {friend_car.model}.")

# Calling methods
my_car.start_engine()
my_car.drive(50)
my_car.stop_engine()
my_car.drive(10) # This won't work because the engine is off

print("-" * 20)

friend_car.start_engine()
friend_car.drive(100)
friend_car.start_engine() # Already running
friend_car.stop_engine()
```

When you run this code, you'll see how each `Car` object maintains its own state (`make`, `model`, `year`, `is_running`) and how the methods operate on that specific object's data. This modularity is a core strength of OOP. You can create as many `Car` objects as you need, each independent but sharing the common structure defined by the `Car` class. This approach makes your code more readable, easier to debug, and much more scalable, as you can add new features or types of objects without disrupting existing ones.

#### Key concepts
*   **Object-Oriented Programming (OOP):** A programming paradigm based on the concept of "objects," which can contain data (attributes) and code (methods).
*   **Class:** A blueprint or template for creating objects, defining their attributes and methods.
*   **Object (Instance):** A concrete realization of a class; an individual entity created from the class blueprint.
*   **Attribute:** A variable associated with a class or object, representing a characteristic or piece of data.
*   **Method:** A function associated with a class or object, representing a behavior or action.
*   **`self`:** A convention (first parameter of any instance method) that refers to the instance of the class itself, allowing methods to access and modify instance-specific attributes.
*   **`__init__`:** A special method in Python (the constructor) that is automatically called when a new object is created, used to initialize the object's attributes.

#### Hands-on activity
Let's apply what you've learned! Your task is to create a Python class called `Dog`.

1.  Define the `Dog` class.
2.  Implement an `__init__` method that takes `name` and `breed` as parameters and initializes these as instance attributes.
3.  Add a `sound` attribute (e.g., "Woof!") as a class attribute, shared by all dogs.
4.  Create two methods:
    *   `bark()`: Prints a message like "Buddy barks: Woof!" using the dog's name and its sound.
    *   `sit()`: Prints a message like "Max sits down."
5.  Create two different `Dog` objects with unique names and breeds.
6.  Call the `bark()` and `sit()` methods for both of your `Dog` objects.

```python
# Your code goes here
class Dog:
    # Class attribute
    sound = "Woof!"

    def __init__(self, name, breed):
        # Instance attributes
        self.name = name
        self.breed = breed

    def bark(self):
        print(f"{self.name} barks: {self.sound}")

    def sit(self):
        print(f"{self.name} sits down.")

# Create your Dog objects and call their methods below
# my_dog = ...
# your_dog = ...
```

#### Assessment idea
1.  **Question:** Which of the following best describes the relationship between a class and an object in Python?
    a) A class is a specific instance, while an object is a general blueprint.
    b) A class is a blueprint or template, while an object is a concrete instance created from that blueprint.
    c) A class and an object are interchangeable terms for the same concept.
    d) A class contains objects, but objects cannot contain classes.

    **Correct Answer:** b) A class is a blueprint or template, while an object is a concrete instance created from that blueprint.
    **Explanation:** A class defines the structure and behavior, like a cookie cutter. An object is a specific item created using that structure, like an individual cookie. Each object has its own data but follows the class's design.

2.  **Question:** Consider the following Python class definition:
    ```python
    class Book:
        def __init__(self, title, author):
            self.title = title
            self.author = author

        def get_description(self):
            return f"{self.title} by {self.author}"

    my_book = Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams")
    print(my_book.get_description())
    ```
    What is the purpose of the `self` parameter in the `__init__` and `get_description` methods?
    a) It's a reserved keyword that makes the method private.
    b) It refers to the class itself, allowing access to class-level attributes.
    c) It's a convention that refers to the instance of the class, allowing methods to access and modify instance-specific attributes.
    d) It's an optional parameter that can be used to pass external data to the method.

    **Correct Answer:** c) It's a convention that refers to the instance of the class, allowing methods to access and modify instance-specific attributes.
    **Explanation:** `self` is implicitly passed by Python when you call a method on an object (e.g., `my_book.get_description()`). It allows the method to know which specific `Book` object it is operating on, enabling access to `my_book.title` and `my_book.author`. Without `self`, the method wouldn't know which object's attributes to use.

#### AI generation note
Create a 10-12 minute animated video explaining OOP fundamentals. Start with a visual metaphor of a blueprint (class) and houses built from it (objects). Show the `Car` class definition with attributes and methods, then animate the creation of `my_car` and `friend_car` objects, highlighting how `__init__` is called and how `self` points to the current object. Visually demonstrate attribute access (`my_car.make`) and method calls (`my_car.start_engine()`), showing the `is_running` attribute changing state. Include a "Common Mistakes" overlay for forgetting `self` or `()` for method calls. The tone should be beginner-friendly and encouraging. An interactive element could be a drag-and-drop exercise where learners match code snippets to "Class," "Object," "Attribute," and "Method."

---

### Chapter 3.2 — Encapsulation and Abstraction: Properties and Private Attributes

#### Learning objectives
*   Explain the concept of encapsulation and its importance in OOP.
*   Understand Python's conventions for "private" attributes using single and double underscores.
*   Implement controlled attribute access using getters, setters, and the `@property` decorator.
*   Describe the principle of abstraction and how it relates to hiding implementation details.
*   Apply encapsulation and abstraction techniques in a practical Python class example.

#### Detailed lesson content
As you become more comfortable with creating classes and objects, you'll naturally want to ensure your objects behave predictably and maintain data integrity. This is where the OOP principles of **encapsulation** and **abstraction** come into play. Encapsulation is essentially the bundling of data (attributes) and the methods that operate on that data within a single unit, the object, and restricting direct access to some of the object's components. Think of a remote control for your TV. You press a button (a method), and the TV changes channels (modifies its internal state). You don't need to know *how* the TV changes channels internally; you just interact with its public interface. This protects the TV's internal mechanisms from being accidentally or maliciously altered.

In Python, true "private" attributes like those found in languages like Java or C++ don't strictly exist. Python's philosophy is "we're all consenting adults," meaning it trusts developers to know what they're doing. However, it provides conventions to indicate that an attribute or method is intended for internal use and should not be directly accessed or modified from outside the class.

1.  **Single Underscore (`_attribute_name`):** This is a convention indicating that an attribute or method is "protected" or "internal." It suggests to other developers, "Hey, this isn't part of the public API; please don't mess with it directly unless you know what you're doing." Python will still allow you to access and modify it, but it's a strong hint.
2.  **Double Underscore (`__attribute_name`):** This triggers a mechanism called "name mangling." Python internally renames the attribute to `_ClassName__attribute_name`. This makes it harder (though not impossible) to access directly from outside the class, primarily to prevent naming conflicts in inheritance scenarios. It's not about making attributes truly private, but rather about avoiding accidental overwrites in subclasses. For most day-to-day encapsulation, the single underscore convention is sufficient and more commonly used.

While direct access to attributes is common in Python, there are scenarios where you need more control. For example, you might want to validate data before it's assigned to an attribute, or perform some action whenever an attribute is read or modified. This is where **getters** and **setters** come in. A getter is a method that retrieves the value of an attribute, and a setter is a method that sets or modifies the value of an attribute. Python provides a beautiful way to implement these using the `@property` decorator. This allows you to define methods that behave like attributes, giving you the best of both worlds: the ease of attribute access with the control of method execution.

Let's consider a `BankAccount` class. We want to ensure that the `_balance` can only be changed through `deposit` and `withdraw` methods, and that the balance never drops below zero.

```python
class BankAccount:
    def __init__(self, initial_balance):
        # Use a "private" convention for the balance
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self._balance = initial_balance

    # Getter for balance using @property decorator
    @property
    def balance(self):
        print("Accessing balance...") # For demonstration
        return self._balance

    # No setter for balance, meaning it's read-only from outside (except via deposit/withdraw)
    # If we wanted a setter, it would look like this:
    # @balance.setter
    # def balance(self, new_balance):
    #     if new_balance < 0:
    #         raise ValueError("Balance cannot be negative.")
    #     self._balance = new_balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self._balance += amount
        print(f"Deposited {amount}. New balance: {self._balance}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self._balance:
            raise ValueError("Insufficient funds.")
        self._balance -= amount
        print(f"Withdrew {amount}. New balance: {self._balance}")

# Creating an account
account = BankAccount(100)

# Accessing balance using the property (behaves like an attribute)
print(f"Current balance: {account.balance}")

# Attempting to directly modify the "private" attribute (discouraged but possible)
# account._balance = -500 # This would bypass our validation!

# Using methods to modify balance
account.deposit(50)
account.withdraw(20)

# Attempting invalid operations
try:
    account.withdraw(200) # Insufficient funds
except ValueError as e:
    print(f"Error: {e}")

try:
    account.deposit(-10) # Negative deposit
except ValueError as e:
    print(f"Error: {e}")

# If we had a setter for balance:
# try:
#     account.balance = -100 # Would trigger setter validation
# except ValueError as e:
#     print(f"Error: {e}")
```

In this `BankAccount` example, `_balance` is marked with a single underscore, indicating it's an internal detail. We then define a `balance` property using `@property`. This property acts as a getter, allowing you to read `account.balance` as if it were a regular attribute, but behind the scenes, it calls the `balance` method. We deliberately *don't* define a `@balance.setter` to make the `balance` effectively read-only from outside, forcing modifications through `deposit` and `withdraw` methods which include validation logic. This is a powerful form of encapsulation.

**Abstraction** goes hand-in-hand with encapsulation. While encapsulation is about bundling data and methods and controlling access, abstraction is about showing only the essential features of an object and hiding the complex implementation details. When you use `account.deposit(50)`, you don't need to know the exact arithmetic or internal state changes happening. You just need to know that `deposit` adds money to your account. The complexity of how the `_balance` is updated and validated is abstracted away. This simplifies the interface for users of your class, making it easier to use and reducing cognitive load. A common mistake is to expose too many internal details, making the class harder to maintain and prone to misuse. By using properties and well-defined methods, you create a clear, abstract interface for your objects.

#### Key concepts
*   **Encapsulation:** The bundling of data (attributes) and methods that operate on the data into a single unit (an object), and restricting direct access to some of the object's components.
*   **Abstraction:** The principle of showing only essential information and hiding complex implementation details from the user.
*   **"Private" Attributes (Python Convention):** Attributes prefixed with a single underscore (`_attribute`) indicate they are intended for internal use. Attributes prefixed with a double underscore (`__attribute`) trigger name mangling to prevent direct access and avoid naming conflicts in subclasses.
*   **Getter:** A method used to retrieve the value of an attribute.
*   **Setter:** A method used to set or modify the value of an attribute.
*   **`@property` Decorator:** A Python decorator that allows a method to be accessed like an attribute, providing a clean way to implement getters and setters for controlled attribute access.

#### Hands-on activity
Let's enhance our `Dog` class from the previous chapter to incorporate encapsulation and properties.

1.  Modify the `Dog` class to include an internal `_health` attribute, initialized to `100` in the `__init__` method.
2.  Create a `@property` decorator for `health`. This property should act as a getter, returning the `_health` value.
3.  Add a `@health.setter` decorator. This setter should ensure that `_health` never goes below `0` or above `100`. If an attempt is made to set it outside this range, it should adjust the value to `0` or `100` respectively, or raise a `ValueError` if you prefer.
4.  Implement a `feed()` method that increases the dog's `health` by a specified amount (e.g., 10), ensuring it doesn't exceed 100 using the setter.
5.  Implement a `take_damage()` method that decreases the dog's `health` by a specified amount, ensuring it doesn't go below 0 using the setter.
6.  Create a `Dog` object, then demonstrate feeding and taking damage, printing the `health` after each operation using the `health` property.

```python
class Dog:
    sound = "Woof!"

    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        self._health = 100 # Internal health attribute

    @property
    def health(self):
        return self._health

    @health.setter
    def health(self, new_health):
        if not isinstance(new_health, (int, float)):
            raise TypeError("Health must be a number.")
        if new_health < 0:
            self._health = 0
        elif new_health > 100:
            self._health = 100
        else:
            self._health = new_health
        print(f"{self.name}'s health updated to {self._health}")

    def bark(self):
        print(f"{self.name} barks: {self.sound}")

    def sit(self):
        print(f"{self.name} sits down.")

    def feed(self, amount=10):
        print(f"Feeding {self.name}...")
        self.health += amount # This will use the setter!

    def take_damage(self, amount=20):
        print(f"{self.name} takes {amount} damage!")
        self.health -= amount # This will use the setter!

# Create a Dog object and test its health management
my_dog = Dog("Buddy", "Golden Retriever")
print(f"{my_dog.name}'s initial health: {my_dog.health}")

my_dog.take_damage(30)
my_dog.feed(20)
my_dog.take_damage(90) # Should cap at 0
my_dog.feed(150) # Should cap at 100
print(f"{my_dog.name}'s final health: {my_dog.health}")
```

#### Assessment idea
1.  **Question:** In Python, what is the primary purpose of using a single underscore prefix (e.g., `_my_attribute`) for an instance attribute?
    a) It makes the attribute truly private and inaccessible from outside the class.
    b) It signifies that the attribute should only be accessed by methods within the same class.
    c) It's a convention to indicate that the attribute is intended for internal use and should not be directly accessed or modified from outside the class.
    d) It automatically creates a getter and setter for the attribute.

    **Correct Answer:** c) It's a convention to indicate that the attribute is intended for internal use and should not be directly accessed or modified from outside the class.
    **Explanation:** Python does not enforce strict privacy. The single underscore is a widely accepted convention among Python developers to signal that an attribute or method is "protected" or "internal" and should be treated with care, though it can still be accessed directly.

2.  **Question:** Consider the following class:
    ```python
    class Product:
        def __init__(self, name, price):
            self._name = name
            self._price = price

        @property
        def price(self):
            return self._price

        @price.setter
        def price(self, new_price):
            if new_price < 0:
                raise ValueError("Price cannot be negative.")
            self._price = new_price

    item = Product("Laptop", 1200)
    item.price = 1300
    print(item.price)
    # What happens if you try to execute: item.price = -500 ?
    ```
    What will be the output of `print(item.price)` after `item.price = 1300`, and what will happen if you then try to execute `item.price = -500`?
    a) Output: `1300`. `item.price = -500` will set the price to -500.
    b) Output: `1200`. `item.price = -500` will raise a `ValueError`.
    c) Output: `1300`. `item.price = -500` will raise a `ValueError`.
    d) Output: `1200`. `item.price = -500` will set the price to -500.

    **Correct Answer:** c) Output: `1300`. `item.price = -500` will raise a `ValueError`.
    **Explanation:** When `item.price = 1300` is executed, the `@price.setter` method is called, which successfully updates `_price` to 1300. So, `print(item.price)` will output `1300`. When `item.price = -500` is executed, the setter is called again. However, the `if new_price < 0:` condition is met, causing a `ValueError` to be raised, preventing the price from becoming negative.

#### AI generation note
Design an 8-10 minute interactive slide deck with live coding examples. Start with a visual analogy for encapsulation (e.g., a car engine hidden under the hood, only accessible via controls). Explain `_` and `__` with clear code examples showing how they behave differently. Then, introduce `@property` with a step-by-step build-up: first a simple getter, then adding a setter with validation. Use the `BankAccount` example, visually highlighting the `_balance` attribute and how `deposit`/`withdraw` methods interact with it, while direct assignment to `balance` (if a setter exists) triggers validation. An interactive element could be a mini-quiz asking learners to predict the outcome of setting an attribute with and without a `@property` setter. Emphasize the benefits of data integrity and a clean interface.

---

### Chapter 3.3 — Inheritance and Polymorphism

#### Learning objectives
*   Explain the concept of inheritance and its role in code reuse and establishing "is-a" relationships.
*   Implement single inheritance in Python, creating base (parent) and derived (child) classes.
*   Demonstrate method overriding in derived classes to specialize behavior.
*   Utilize the `super()` function to call methods and constructors of the parent class.
*   Understand and apply the principle of polymorphism in Python.

#### Detailed lesson content
One of the most powerful features of Object-Oriented Programming is **inheritance**. Inheritance allows you to define a new class based on an existing class, inheriting its attributes and methods. This concept is fundamental for code reuse and for modeling hierarchical relationships in your programs. Think of it like a family tree: children inherit characteristics from their parents. In OOP, a **base class** (or parent class) provides the common functionality, and a **derived class** (or child class) extends or specializes that functionality. This creates an "is-a" relationship: a `Dog` *is an* `Animal`, a `Car` *is a* `Vehicle`.

Why use inheritance?
1.  **Code Reusability:** You don't have to write the same code multiple times. Common attributes and methods can be defined once in the base class.
2.  **Logical Structure:** It helps organize your code into a clear, hierarchical structure that mirrors real-world relationships.
3.  **Extensibility:** You can easily extend existing functionality without modifying the original class.

Let's illustrate with an `Animal` base class and `Dog` and `Cat` derived classes:

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self):
        raise NotImplementedError("Subclass must implement abstract method")

    def eat(self):
        print(f"{self.name} is eating.")

class Dog(Animal): # Dog inherits from Animal
    def __init__(self, name, breed):
        # Call the parent class's __init__ method
        super().__init__(name, species="Canine")
        self.breed = breed

    def make_sound(self): # Overriding the make_sound method
        print(f"{self.name} barks: Woof!")

    def fetch(self, item):
        print(f"{self.name} fetches the {item}.")

class Cat(Animal): # Cat inherits from Animal
    def __init__(self, name, color):
        super().__init__(name, species="Feline")
        self.color = color

    def make_sound(self): # Overriding the make_sound method
        print(f"{self.name} meows: Meow!")

    def scratch(self, surface):
        print(f"{self.name} scratches the {surface}.")

# Creating objects
my_dog = Dog("Buddy", "Golden Retriever")
my_cat = Cat("Whiskers", "Tabby")

# Calling inherited methods
my_dog.eat()
my_cat.eat()

# Calling overridden methods
my_dog.make_sound()
my_cat.make_sound()

# Calling child-specific methods
my_dog.fetch("ball")
my_cat.scratch("couch")

print(f"{my_dog.name} is a {my_dog.species}.")
print(f"{my_cat.name} is a {my_cat.species}.")
```

In this example, `Dog` and `Cat` are derived classes of `Animal`. They automatically inherit the `name`, `species` attributes and the `eat()` method from `Animal`. Notice how `Dog` and `Cat` define their own `__init__` methods. When you do this, you almost always need to call the parent class's `__init__` method using `super().__init__(...)`. The `super()` function gives you access to methods of the parent class. Forgetting to call `super().__init__()` is a very common mistake and can lead to uninitialized attributes from the parent class.

**Method overriding** is when a derived class provides its own implementation of a method that is already defined in its base class. Both `Dog` and `Cat` classes override the `make_sound()` method. While `Animal` has a generic `make_sound()` (or even raises `NotImplementedError` to force subclasses to implement it), `Dog` provides a barking sound, and `Cat` provides a meowing sound. This allows each type of animal to have its unique sound behavior while still conforming to the general `Animal` interface.

This leads us to another core OOP principle: **polymorphism**. The word "polymorphism" means "many forms." In OOP, it refers to the ability of different objects to respond to the same method call in their own specific ways. Because `Dog` and `Cat` both inherit from `Animal` and override `make_sound()`, we can treat them generically as `Animal` objects and call `make_sound()` on them, and each will produce its appropriate sound.

```python
animals = [Dog("Max", "German Shepherd"), Cat("Bella", "Siamese"), Dog("Lucy", "Labrador")]

for animal in animals:
    animal.make_sound() # Each animal makes its specific sound
    animal.eat()        # All animals can eat (inherited behavior)
```

Here, `animal.make_sound()` behaves differently depending on whether `animal` is a `Dog` object or a `Cat` object. This is polymorphism in action. It allows you to write more flexible and extensible code, as you can work with collections of diverse objects through a common interface.

Python also supports **multiple inheritance**, where a class can inherit from multiple base classes. While powerful, it can lead to complex class hierarchies and potential issues like the "diamond problem" (where a method is inherited from two different paths). Python uses a **Method Resolution Order (MRO)** to determine the order in which base classes are searched for methods. You can inspect the MRO using `ClassName.__mro__`. For beginners, it's generally best to stick to single inheritance or use mixins (small classes providing specific functionality) to achieve similar goals without the complexity of deep multiple inheritance. Focus on understanding single inheritance and polymorphism first, as they are the most commonly used and beneficial aspects of inheritance.

#### Key concepts
*   **Inheritance:** An OOP mechanism where a new class (derived/child) is created from an existing class (base/parent), inheriting its attributes and methods.
*   **Base Class (Parent Class):** The existing class from which other classes inherit.
*   **Derived Class (Child Class):** A new class that inherits from a base class, extending or specializing its functionality.
*   **"Is-a" Relationship:** A conceptual relationship indicating that a derived class is a specialized type of its base class (e.g., a `Dog` *is an* `Animal`).
*   **Method Overriding:** Providing a new implementation for a method in a derived class that is already defined in its base class.
*   **`super()`:** A built-in function that allows you to call methods (especially `__init__`) of the parent or sibling class.
*   **Polymorphism:** The ability of different objects to respond to the same method call in their own specific ways, based on their class type.
*   **Method Resolution Order (MRO):** The order in which Python searches for methods in a class hierarchy, especially relevant for multiple inheritance.

#### Hands-on activity
Let's build a simple `Vehicle` hierarchy.

1.  Create a `Vehicle` base class with an `__init__` method that takes `brand` and `model` as parameters. It should also have a `start_engine()` method that prints a generic "Engine started." message.
2.  Create a `Car` class that inherits from `Vehicle`.
    *   Its `__init__` method should take `brand`, `model`, and `num_doors` as parameters.
    *   It must call the parent's `__init__` using `super()`.
    *   It should override `start_engine()` to print "Car engine started with a vroom!"
    *   Add a new method `drive()` that prints "Driving the [brand] [model] with [num_doors] doors."
3.  Create a `Motorcycle` class that also inherits from `Vehicle`.
    *   Its `__init__` method should take `brand`, `model`, and `has_sidecar` (boolean) as parameters.
    *   It must call the parent's `__init__` using `super()`.
    *   It should override `start_engine()` to print "Motorcycle engine started with a roar!"
    *   Add a new method `wheelie()` that prints "Popping a wheelie on the [brand] [model]!" (Only if `has_sidecar` is False).
4.  Create instances of `Car` and `Motorcycle`.
5.  Demonstrate polymorphism by putting both a `Car` and a `Motorcycle` object into a list and iterating through them, calling `start_engine()` on each.

```python
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def start_engine(self):
        print("Engine started.")

class Car(Vehicle):
    def __init__(self, brand, model, num_doors):
        super().__init__(brand, model)
        self.num_doors = num_doors

    def start_engine(self):
        print(f"Car engine started with a vroom! ({self.brand} {self.model})")

    def drive(self):
        print(f"Driving the {self.brand} {self.model} with {self.num_doors} doors.")

class Motorcycle(Vehicle):
    def __init__(self, brand, model, has_sidecar):
        super().__init__(brand, model)
        self.has_sidecar = has_sidecar

    def start_engine(self):
        print(f"Motorcycle engine started with a roar! ({self.brand} {self.model})")

    def wheelie(self):
        if not self.has_sidecar:
            print(f"Popping a wheelie on the {self.brand} {self.model}!")
        else:
            print(f"Cannot wheelie with a sidecar on the {self.brand} {self.model}.")

# Create instances and demonstrate
my_car = Car("Toyota", "Camry", 4)
my_motorcycle = Motorcycle("Harley-Davidson", "Iron 883", False)
sidecar_motorcycle = Motorcycle("BMW", "R 75/5", True)

print(f"{my_car.brand} {my_car.model} has {my_car.num_doors} doors.")
my_car.start_engine()
my_car.drive()
print("-" * 20)

my_motorcycle.start_engine()
my_motorcycle.wheelie()
print("-" * 20)

sidecar_motorcycle.start_engine()
sidecar_motorcycle.wheelie()
print("-" * 20)

# Demonstrate polymorphism
vehicles = [my_car, my_motorcycle, sidecar_motorcycle]
print("Demonstrating polymorphism:")
for vehicle in vehicles:
    vehicle.start_engine() # Each vehicle calls its own overridden start_engine
```

#### Assessment idea
1.  **Question:** You have a base class `Shape` and a derived class `Circle`. `Shape` has an `__init__` method that takes `color` and `name`. `Circle` also has an `__init__` method that takes `radius` in addition to `color` and `name`. Which of the following is the correct way for `Circle`'s `__init__` to properly initialize the attributes inherited from `Shape`?
    a) `self.color = color` and `self.name = name`
    b) `Shape.__init__(self, color, name)`
    c) `super().__init__(color, name)`
    d) Both b) and c) are correct and commonly used, but c) is generally preferred.

    **Correct Answer:** d) Both b) and c) are correct and commonly used, but c) is generally preferred.
    **Explanation:** Option a) would re-implement the initialization logic, which is against the principle of code reuse. Both b) and c) correctly call the parent constructor. `super().__init__(color, name)` is the more modern and flexible way, especially in complex inheritance hierarchies or when dealing with multiple inheritance, as `super()` automatically handles the Method Resolution Order (MRO).

2.  **Question:** Consider the following classes:
    ```python
    class Animal:
        def speak(self):
            return "Generic animal sound"

    class Dog(Animal):
        def speak(self):
            return "Woof!"

    class Cat(Animal):
        def speak(self):
            return "Meow!"

    animals = [Dog(), Cat(), Animal()]
    for animal in animals:
        print(animal.speak())
    ```
    What OOP principle is best demonstrated by the output of this code, and what will the output be?
    a) Encapsulation; Output: "Woof!", "Meow!", "Generic animal sound"
    b) Inheritance; Output: "Woof!", "Meow!", "Generic animal sound"
    c) Polymorphism; Output: "Woof!", "Meow!", "Generic animal sound"
    d) Abstraction; Output: "Generic animal sound", "Generic animal sound", "Generic animal sound"

    **Correct Answer:** c) Polymorphism; Output: "Woof!", "Meow!", "Generic animal sound"
    **Explanation:** The code demonstrates polymorphism because different objects (`Dog`, `Cat`, `Animal`) respond to the same method call (`speak()`) in their own specific ways. The `Dog` and `Cat` objects use their overridden `speak()` methods, while the `Animal` object uses its own base `speak()` method. The output will correctly reflect each object's distinct behavior.

#### AI generation note
Produce a 12-15 minute video with animated diagrams and live coding. Start with a tree diagram illustrating the `Animal` -> `Dog`/`Cat` hierarchy. Visually show how attributes and methods flow down from the base class. When discussing `super()`, animate the call stack to show how `super().__init__` invokes the parent's constructor. For method overriding, use a side-by-side comparison of the base `make_sound` and the derived versions. Dedicate a segment to polymorphism, showing a list of mixed `Animal` types and animating the `for` loop, highlighting how each object's specific `make_sound` is called. Include a "Common Mistake" alert for forgetting `super().__init__()`. An interactive element could be a code completion exercise where learners fill in the `super()` call in a new derived class.

---

### Chapter 3.4 — Modules, Packages, and pip

#### Learning objectives
*   Understand the purpose of modules and packages for organizing Python code.
*   Demonstrate how to import and use functions, classes, and variables from modules.
*   Explain the significance of `if __name__ == "__main__":` and when to use it.
*   Create and structure a basic Python package.
*   Utilize `pip` to install, upgrade, and uninstall third-party Python packages.
*   Set up and manage virtual environments using `venv` to isolate project dependencies.

#### Detailed lesson content
As your Python projects grow beyond a single script, keeping all your code in one file quickly becomes unmanageable. It hurts readability, makes code reuse difficult, and introduces conflicts. This is where **modules** and **packages** come to the rescue! They are Python's way of organizing code into logical, reusable units.

A **module** is simply a Python file (`.py` file) containing Python definitions and statements. When you create a `.py` file, its name becomes the module name. Modules allow you to logically organize your code, putting related functions, classes, and variables together. For example, you might have a `math_operations.py` module for mathematical functions, or a `user_management.py` module for user-related classes.

To use code from one module in another, you use the `import` statement. There are a few ways to import:

1.  **`import module_name`**: Imports the entire module. You then access its contents using `module_name.function()` or `module_name.Class`.
2.  **`from module_name import item1, item2`**: Imports specific items (functions, classes, variables) directly into your current namespace. You can then use `item1()` or `Class` directly without the module prefix.
3.  **`from module_name import *`**: Imports all public items from the module. This is generally discouraged in larger projects because it can lead to name clashes and make it harder to tell where a function or variable came from.
4.  **`import module_name as alias`**: Imports the module and gives it a shorter alias. Useful for long module names or to avoid name clashes.

Consider a `my_utils.py` module:

```python
# my_utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

class Calculator:
    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero.")
        return a / b

print("my_utils.py is being executed!") # This will run on import
```

Now, in a `main.py` file:

```python
# main.py
import my_utils
from my_utils import Calculator, add as addition_func # Renaming add to addition_func

print(f"Sum: {my_utils.add(5, 3)}") # Using module prefix
print(f"Difference: {my_utils.subtract(10, 4)}")

calc = Calculator()
print(f"Product: {calc.multiply(6, 7)}")
print(f"Division: {calc.divide(10, 2)}")

print(f"Using aliased add: {addition_func(2, 2)}")
```

When you run `main.py`, you'll notice "my_utils.py is being executed!" is printed. This is because when a module is imported, Python executes all the code within it. Sometimes, you have code in a module that you only want to run when that module is executed directly as a script, not when it's imported by another module. This is where the `if __name__ == "__main__":` idiom comes in handy. `__name__` is a special built-in variable that Python sets. If the module is run directly, `__name__` is set to `"__main__"`. If it's imported, `__name__` is set to the module's name.

```python
# my_utils_with_main.py
def add(a, b):
    return a + b

# ... other functions/classes ...

if __name__ == "__main__":
    print("This code runs only when my_utils_with_main.py is executed directly!")
    print(f"Result of add(10, 5): {add(10, 5)}")
```
Now, if you import `my_utils_with_main` into `main.py`, the `print` statements inside `if __name__ == "__main__":` will not execute, but the `add` function will still be available.

As projects grow even larger, you might have many related modules. **Packages** are a way to organize related modules into a directory hierarchy. A package is essentially a directory containing a special file named `__init__.py` (which can be empty) and other module files or sub-packages. This `__init__.py` file tells Python that the directory should be treated as a package.

Example package structure:
```
my_project/
├── main.py
└── calculations/
    ├── __init__.py
    ├── basic_ops.py
    └── advanced_ops.py
```
In `basic_ops.py`:
```python
# basic_ops.py
def add(a, b):
    return a + b
```
In `advanced_ops.py`:
```python
# advanced_ops.py
def power(base, exp):
    return base ** exp
```
In `main.py`:
```python
# main.py
from calculations import basic_ops
from calculations.advanced_ops import power

print(f"Basic add: {basic_ops.add(8, 2)}")
print(f"Advanced power: {power(2, 3)}")
```
This structure makes your project highly organized and scalable.

Beyond your own code, Python's strength lies in its vast ecosystem of third-party libraries. **`pip`** (Pip Installs Packages) is the standard package-management system used to install and manage software packages written in Python. It connects to the Python Package Index (PyPI), a repository of thousands of open-source projects.

Common `pip` commands:
*   `pip install package_name`: Installs a package (e.g., `pip install requests`).
*   `pip install package_name==version`: Installs a specific version.
*   `pip uninstall package_name`: Uninstalls a package.
*   `pip list`: Shows all installed packages.
*   `pip freeze > requirements.txt`: Saves a list of all installed packages and their versions to a file, useful for sharing project dependencies.
*   `pip install -r requirements.txt`: Installs all packages listed in `requirements.txt`.

A critical best practice for managing dependencies is using **virtual environments**. Imagine you're working on two Python projects. Project A needs `requests` version 2.20, but Project B needs `requests` version 2.25. If you install both globally, you'll run into conflicts. A **virtual environment** (`venv`) creates an isolated Python environment for each project. It has its own Python interpreter and its own set of installed packages, completely separate from other projects and the system-wide Python installation.

To create and activate a virtual environment:
1.  **Create:** `python -m venv my_project_venv` (creates a directory named `my_project_venv` in your project root).
2.  **Activate (Linux/macOS):** `source my_project_venv/bin/activate`
3.  **Activate (Windows PowerShell):** `.\my_project_venv\Scripts\Activate.ps1`
4.  **Activate (Windows Cmd):** `my_project_venv\Scripts\activate.bat`

Once activated, your terminal prompt usually changes to indicate the active `venv` (e.g., `(my_project_venv) $`). Any `pip install` commands you run now will install packages only into *this* virtual environment, keeping your project's dependencies isolated and preventing conflicts. To exit the virtual environment, simply type `deactivate`. Using virtual environments is a non-negotiable best practice for any serious Python development. Common mistakes include forgetting to activate the `venv` before installing packages, or installing packages globally when they should be project-specific. Always remember to activate your `venv` when working on a project!

#### Key concepts
*   **Module:** A single Python file (`.py`) containing Python definitions and statements, used to organize related code.
*   **`import` Statement:** Used to bring code from one module into another.
*   **`if __name__ == "__main__":`:** A common idiom used to specify code that should only run when the script is executed directly, not when it's imported as a module.
*   **Package:** A directory containing multiple modules and a special `__init__.py` file, used to organize related modules into a hierarchical structure.
*   **`__init__.py`:** A special (potentially empty) file that signals to Python that a directory should be treated as a package.
*   **`pip`:** The standard package installer for Python, used to install, upgrade, and manage third-party libraries from PyPI.
*   **Virtual Environment (`venv`):** An isolated Python environment that allows you to manage dependencies for different projects separately, preventing conflicts.
*   **`requirements.txt`:** A file listing all the Python packages and their versions required for a project, typically generated using `pip freeze`.

#### Hands-on activity
Let's practice organizing code with modules and packages, and managing dependencies.

1.  **Project Setup:** Create a new directory for this activity, e.g., `my_python_project`.
2.  **Virtual Environment:** Inside `my_python_project`, create and activate a virtual environment named `env`.
    *   `python -m venv env`
    *   `source env/bin/activate` (or appropriate command for Windows)
3.  **Create a Package:** Inside `my_python_project`, create a subdirectory named `text_utils`.
    *   Inside `text_utils`, create an empty `__init__.py` file.
    *   Inside `text_utils`, create a module `string_helpers.py`.
        *   In `string_helpers.py`, define a function `reverse_string(s)` that returns the reversed version of the input string `s`.
        *   Add an `if __name__ == "__main__":` block to `string_helpers.py` that calls `reverse_string("hello")` and prints the result.
    *   Inside `text_utils`, create another module `case_helpers.py`.
        *   In `case_helpers.py`, define a function `to_uppercase(s)` that returns the uppercase version of `s`.
        *   Define a function `to_lowercase(s)` that returns the lowercase version of `s`.
4.  **Main Script:** Back in `my_python_project`, create a `main.py` file.
    *   From the `text_utils` package, import `reverse_string` from `string_helpers` and `to_uppercase` from `case_helpers`.
    *   Use these imported functions to:
        *   Reverse the string "Python is fun!"
        *   Convert the string "Hello World" to uppercase.
    *   Print the results.
5.  **Install a Third-Party Library:** Use `pip` (while your `env` is active) to install the `requests` library.
    *   `pip install requests`
6.  **Use the Library:** In `main.py`, add code to make a simple HTTP GET request to `https://www.example.com` using `requests` and print the status code.
7.  **Generate Requirements:** Generate a `requirements.txt` file for your project.
    *   `pip freeze > requirements.txt`
8.  **Deactivate:** Deactivate your virtual environment.

```python
# --- my_python_project/text_utils/__init__.py ---
# (This file can be empty)

# --- my_python_project/text_utils/string_helpers.py ---
def reverse_string(s):
    return s[::-1]

if __name__ == "__main__":
    print("Running string_helpers directly:")
    print(f"Reversed 'hello': {reverse_string('hello')}")

# --- my_python_project/text_utils/case_helpers.py ---
def to_uppercase(s):
    return s.upper()

def to_lowercase(s):
    return s.lower()

# --- my_python_project/main.py ---
# Don't forget to activate your virtual environment before running this!
import requests # This requires 'requests' to be installed in your venv
from text_utils.string_helpers import reverse_string
from text_utils.case_helpers import to_uppercase

def main():
    # Using functions from our custom package
    original_string = "Python is fun!"
    reversed = reverse_string(original_string)
    print(f"Original: '{original_string}', Reversed: '{reversed}'")

    another_string = "Hello World"
    uppercased = to_uppercase(another_string)
    print(f"Original: '{another_string}', Uppercased: '{uppercased}'")

    # Using a third-party library
    print("\nMaking a request to example.com...")
    try:
        response = requests.get("https://www.example.com")
        print(f"Status Code for example.com: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error making request: {e}")

if __name__ == "__main__":
    main()

# --- After running main.py, generate requirements.txt: ---
# pip freeze > requirements.txt
```

#### Assessment idea
1.  **Question:** You have a Python project with the following structure:
    ```
    my_project/
    ├── main.py
    └── data_processing/
        ├── __init__.py
        └── cleaning.py
    ```
    The `cleaning.py` module contains a function `clean_text(text)`. Which of the following `import` statements in `main.py` would allow you to call this function as `clean_text("some string")`?
    a) `import data_processing.cleaning`
    b) `from data_processing import cleaning`
    c) `from data_processing.cleaning import clean_text`
    d) `import cleaning from data_processing`

    **Correct Answer:** c) `from data_processing.cleaning import clean_text`
    **Explanation:**
    a) `import data_processing.cleaning` would require calling `data_processing.cleaning.clean_text("some string")`.
    b) `from data_processing import cleaning` would require calling `cleaning.clean_text("some string")`.
    c) `from data_processing.cleaning import clean_text` directly imports the function into the `main.py` namespace, allowing direct calls like `clean_text("some string")`.
    d) `import cleaning from data_processing` is syntactically incorrect.

2.  **Question:** You are starting a new Python project and need to install a library called `pandas`. You also want to ensure that this library and its specific version are isolated to your project and don't conflict with other Python projects on your system. Describe the exact steps you would take from creating a new project directory to installing `pandas` and then listing your project's dependencies.

    **Correct Answer:**
    1.  **Create Project Directory:** First, create a new directory for your project.
        ```bash
        mkdir my_data_project
        cd my_data_project
        ```
    2.  **Create Virtual Environment:** Create a virtual environment inside your project directory.
        ```bash
        python -m venv env
        ```
    3.  **Activate Virtual Environment:** Activate the newly created virtual environment.
        *   On Linux/macOS: `source env/bin/activate`
        *   On Windows (PowerShell): `.\env\Scripts\Activate.ps1`
        *   On Windows (Cmd): `env\Scripts\activate.bat`
    4.  **Install `pandas`:** With the virtual environment active, install the `pandas` library using `pip`.
        ```bash
        pip install pandas
        ```
    5.  **List Dependencies:** To record the exact versions of installed packages for your project, generate a `requirements.txt` file.
        ```bash
        pip freeze > requirements.txt
        ```
    **Explanation:** These steps ensure that `pandas` is installed only within the `env` virtual environment, keeping your project's dependencies separate and manageable. The `requirements.txt` file then serves as a blueprint for recreating this exact environment later or on another machine.

#### AI generation note
Create a 15-minute mixed-format lesson combining animated diagrams for package structure and a live terminal walkthrough for `pip` and `venv`. Start with a visual explanation of why modules and packages are needed, using a growing codebase metaphor. Show the file system structure for the `text_utils` package and animate the `import` process in `main.py`. Explain `if __name__ == "__main__":` with a clear before/after demonstration. Transition to a live terminal for `venv` creation, activation, `pip install requests`, `pip freeze`, and `deactivate`. Visually highlight how the terminal prompt changes when `venv` is active. Emphasize the importance of virtual environments for dependency management. An interactive element could be a short command-line simulation where learners type `pip install` or `source activate` commands.

---

## Module 4: Working with Data & APIs

This module will equip you with the essential skills to interact with various data sources, from local files on your computer to remote web services through APIs. You'll learn how to read, write, and manipulate structured data formats like CSV and JSON, and then extend your Python programs to communicate with the vast world of web APIs, fetching and sending information to build dynamic and interactive applications.

### Chapter 4.1 — Reading and Writing Local Files

#### Learning objectives
*   Understand the fundamental concepts of file I/O (Input/Output) in Python.
*   Learn how to open, read from, and write to text files using various modes.
*   Master the `with` statement for safe and efficient file handling.
*   Identify and handle common errors associated with file operations.

#### Detailed lesson content
Working with files is a cornerstone of many applications, allowing your Python programs to persist data beyond a single execution or to process information stored on your local system. Whether you're saving user preferences, logging events, or reading configuration settings, file I/O is an indispensable skill. In Python, the built-in `open()` function is your gateway to interacting with files. It takes at least two arguments: the file path (a string) and the mode in which you want to open the file.

Let's explore the common file modes. The `'r'` mode is for reading, and it's the default. If you try to open a file in read mode that doesn't exist, Python will raise a `FileNotFoundError`. The `'w'` mode is for writing. Be cautious with `'w'` mode, as it will create the file if it doesn't exist, but if the file *does* exist, it will truncate it (empty its content) before writing. This means any existing data will be lost! For appending data to an existing file without overwriting, you use the `'a'` mode. If the file doesn't exist, `'a'` will create it. There are also modes like `'x'` for exclusive creation (fails if the file already exists) and binary modes like `'rb'` or `'wb'` for non-text files, but we'll focus on text files for now.

Once a file is opened, it's crucial to close it to release system resources and ensure all data is properly written to disk. Forgetting to close files can lead to data corruption or resource leaks. While you can explicitly call the `.close()` method on the file object, Python provides a much safer and more elegant way: the `with` statement. The `with` statement ensures that the file is automatically closed, even if errors occur during file operations. This pattern is often referred to as a "context manager" and is highly recommended for all file handling.

Let's see some basic examples. To write some text to a file:

```python
# Writing to a file (overwrites if file exists, creates if not)
with open("my_notes.txt", "w") as file:
    file.write("This is my first line of notes.\n")
    file.write("And this is the second line.\n")
    file.write("Don't forget to save important thoughts!\n")

print("Content written to my_notes.txt")
```

After running this, you'll find a file named `my_notes.txt` in the same directory as your Python script, containing the three lines of text. If you run it again, the file will be completely overwritten. To add more content without losing the old, switch to append mode:

```python
# Appending to a file
with open("my_notes.txt", "a") as file:
    file.write("Adding a new thought: Remember to buy groceries.\n")

print("Content appended to my_notes.txt")
```

Now, let's read the content back. When reading, you can read the entire file at once using `.read()`, read line by line using `.readline()`, or iterate over the file object directly, which reads line by line efficiently:

```python
# Reading the entire file
with open("my_notes.txt", "r") as file:
    content = file.read()
    print("--- Entire file content ---")
    print(content)

# Reading line by line using a loop
print("\n--- Reading line by line ---")
with open("my_notes.txt", "r") as file:
    for line in file:
        print(f"Line: {line.strip()}") # .strip() removes leading/trailing whitespace, including newline characters
```

A common mistake beginners make is forgetting to handle `FileNotFoundError`. If your program expects a file to exist and it doesn't, it will crash. You can gracefully handle this using a `try-except` block:

```python
try:
    with open("non_existent_file.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("Error: The file 'non_existent_file.txt' was not found. Please check the path.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

Another common scenario is working with relative versus absolute file paths. A relative path is specified in relation to the current working directory of your script (e.g., `data/my_file.txt`). An absolute path provides the full path from the root of the file system (e.g., `/Users/yourname/Documents/data/my_file.txt` on macOS/Linux or `C:\Users\yourname\Documents\data\my_file.txt` on Windows). When sharing scripts, relative paths are often preferred as they make the code more portable, but you must ensure the expected directory structure exists.

For more complex data, you might write multiple lines from a list using `writelines()`. Remember that `writelines()` does not add newline characters automatically, so you'll need to include them in your strings if you want each item on a new line.

```python
shopping_list = [
    "Milk\n",
    "Eggs\n",
    "Bread\n",
    "Cheese\n"
]

with open("shopping_list.txt", "w") as file:
    file.writelines(shopping_list)

print("Shopping list saved.")
```

File I/O is a fundamental skill that opens up a world of possibilities for your Python applications. By understanding file modes, the `with` statement, and error handling, you're well on your way to building more robust and data-aware programs.

#### Key concepts
*   **File I/O:** The process of reading data from or writing data to files on a storage device.
*   **`open()` function:** Python's built-in function for opening files, returning a file object.
*   **File modes:** Strings passed to `open()` that specify how the file should be accessed (`'r'` for read, `'w'` for write, `'a'` for append, `'x'` for exclusive creation, etc.).
*   **`with` statement (Context Manager):** A Python construct that ensures resources (like open files) are properly managed and automatically closed, even if errors occur.
*   **`read()`:** A method of file objects that reads the entire content of the file as a single string.
*   **`readline()`:** A method that reads a single line from the file.
*   **`readlines()`:** A method that reads all lines from the file and returns them as a list of strings.
*   **`write()`:** A method that writes a string to the file.
*   **`writelines()`:** A method that writes a list of strings to the file.
*   **`FileNotFoundError`:** An exception raised when attempting to open a file in read mode that does not exist.

#### Hands-on activity
**Task: Simple To-Do List Manager**

Create a Python script that allows a user to add tasks to a to-do list, view all tasks, and clear the list. The tasks should be saved to a file named `todo.txt` so they persist between program runs.

**Starter Code:**

```python
# todo_app.py

FILE_NAME = "todo.txt"

def load_tasks():
    """Loads tasks from the todo.txt file."""
    try:
        with open(FILE_NAME, "r") as file:
            tasks = [line.strip() for line in file if line.strip()] # Read non-empty lines
        return tasks
    except FileNotFoundError:
        return [] # Return empty list if file doesn't exist

def save_tasks(tasks):
    """Saves tasks to the todo.txt file."""
    with open(FILE_NAME, "w") as file:
        for task in tasks:
            file.write(task + "\n")

def add_task(tasks, new_task):
    """Adds a new task to the list."""
    tasks.append(new_task)
    print(f"Task '{new_task}' added.")
    save_tasks(tasks)

def view_tasks(tasks):
    """Displays all tasks."""
    if not tasks:
        print("Your to-do list is empty!")
        return
    print("\n--- Your To-Do List ---")
    for i, task in enumerate(tasks, 1):
        print(f"{i}. {task}")
    print("-----------------------")

def clear_all_tasks():
    """Clears all tasks from the file."""
    with open(FILE_NAME, "w") as file:
        pass # Truncates the file, effectively clearing it
    print("All tasks cleared.")

def main():
    tasks = load_tasks()

    while True:
        print("\n--- To-Do App Menu ---")
        print("1. Add a task")
        print("2. View tasks")
        print("3. Clear all tasks")
        print("4. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            task = input("Enter the task: ")
            add_task(tasks, task)
        elif choice == '2':
            view_tasks(tasks)
        elif choice == '3':
            confirm = input("Are you sure you want to clear all tasks? (yes/no): ").lower()
            if confirm == 'yes':
                clear_all_tasks()
                tasks = [] # Update in-memory list as well
            else:
                print("Clear operation cancelled.")
        elif choice == '4':
            print("Exiting To-Do App. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
```

**Instructions:**
1.  Save the starter code as `todo_app.py`.
2.  Run the script from your terminal: `python todo_app.py`.
3.  Test adding tasks, viewing them, and then exiting.
4.  Run the script again. Do your tasks persist?
5.  Test the "Clear all tasks" functionality.

#### Assessment idea
1.  **Question:** Which Python file mode should you use if you want to add new content to the end of an existing file without deleting its current content?
    *   **A) `'w'`**
    *   **B) `'r'`**
    *   **C) `'a'`**
    *   **D) `'x'`

    **Correct Answer:** C) `'a'`
    **Explanation:** The `'a'` mode stands for "append." It opens the file for writing, and if the file already exists, the new content is added to the end. If the file does not exist, it will be created. `'w'` (write) would overwrite the file, `'r'` (read) is only for reading, and `'x'` (exclusive creation) would raise an error if the file already exists.

2.  **Question:** Consider the following code snippet:
    ```python
    try:
        with open("data.txt", "r") as f:
            content = f.read()
        print(content)
    except FileNotFoundError:
        print("File not found!")
    except Exception as e:
        print(f"An error occurred: {e}")
    ```
    If `data.txt` does not exist in the same directory as the script, what will be the output when this code is executed?

    **Correct Answer:** The output will be: `File not found!`
    **Explanation:** The `open("data.txt", "r")` call attempts to open `data.txt` in read mode. Since the file does not exist, a `FileNotFoundError` is raised. The `try-except` block catches this specific exception, and the code within the `except FileNotFoundError:` block is executed, printing "File not found!".

#### AI generation note
Create a 10-minute interactive code demo focusing on file I/O. Start with basic `open()`, `read()`, `write()`, `close()`. Then immediately introduce and emphasize the `with` statement as the best practice, showing how it simplifies error handling and resource management. Demonstrate `'w'` vs. `'a'` modes clearly with visual feedback on file content changes. Include a segment on reading line by line using a `for` loop. Visually highlight the `FileNotFoundError` and demonstrate the `try-except` block for robust error handling. The interactive element should be a mini-challenge where the user completes a `with open(...)` statement and chooses the correct mode to append to a log file. Use a professional, hands-on tone.

---

### Chapter 4.2 — Working with CSV and JSON Data

#### Learning objectives
*   Understand the structure and purpose of CSV (Comma Separated Values) files for tabular data.
*   Learn to read and write CSV files using Python's `csv` module.
*   Comprehend the JSON (JavaScript Object Notation) format for structured, hierarchical data.
*   Master the `json` module to serialize Python objects to JSON and deserialize JSON back into Python.
*   Recognize common use cases and best practices for working with both CSV and JSON.

#### Detailed lesson content
As your programs deal with more complex data, plain text files often become insufficient. You need structured formats that allow for easy parsing and generation. Two of the most common and versatile data formats you'll encounter are CSV (Comma Separated Values) and JSON (JavaScript Object Notation). Both are human-readable and widely used for data exchange, but they serve different purposes.

**CSV Files:**
CSV is a simple, tabular data format where each line represents a row, and values within a row are separated by a delimiter, most commonly a comma. It's excellent for spreadsheet-like data, such as lists of users, product inventories, or sensor readings. Python's built-in `csv` module provides robust tools for handling CSV files, taking care of nuances like quoted fields containing commas or newlines.

When reading a CSV file, you typically use `csv.reader` to iterate over rows as lists of strings, or `csv.DictReader` to treat each row as a dictionary where column headers are keys. `DictReader` is often preferred because it makes your code more readable and less prone to errors if column order changes.

Let's imagine we have a `students.csv` file:
```csv
name,age,grade
Alice,16,10
Bob,17,11
Charlie,16,10
```

To read this data:
```python
import csv

students = []
with open("students.csv", "r", newline='') as file:
    reader = csv.DictReader(file) # Use DictReader for dictionary-like access
    for row in reader:
        students.append(row)
        print(f"Name: {row['name']}, Age: {row['age']}, Grade: {row['grade']}")

print("\nAll students loaded:", students)
```
Notice the `newline=''` argument in `open()`. This is crucial when working with the `csv` module to prevent blank rows from appearing due to how different operating systems handle line endings. Forgetting `newline=''` is a very common mistake!

Writing to a CSV file is equally straightforward using `csv.writer` or `csv.DictWriter`. `DictWriter` requires you to specify the `fieldnames` (column headers) upfront.

```python
import csv

new_students = [
    {'name': 'David', 'age': 18, 'grade': 12},
    {'name': 'Eve', 'age': 16, 'grade': 10}
]

# Append new students to the existing CSV
with open("students.csv", "a", newline='') as file:
    fieldnames = ['name', 'age', 'grade']
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    # If the file is new or empty, write the header row
    # This check is a bit more complex for append, often you'd write header once
    # For simplicity, we'll assume header exists or handle it carefully.
    # A robust solution might check if file is empty before writing header.
    # For this example, we'll just write the data.
    # If starting a new file, you'd do: writer.writeheader()

    writer.writerows(new_students)

print("New students added to students.csv")

# Example of creating a new CSV with header
new_data = [
    {'product': 'Laptop', 'price': 1200},
    {'product': 'Mouse', 'price': 25}
]
with open("products.csv", "w", newline='') as file:
    fieldnames = ['product', 'price']
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader() # Writes the header row
    writer.writerows(new_data)
print("products.csv created with header.")
```

**JSON Files:**
JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It's built on two structures: a collection of name/value pairs (like Python dictionaries) and an ordered list of values (like Python lists). This makes JSON ideal for representing hierarchical or nested data, which is common in web APIs and configuration files. Python's `json` module handles the conversion between Python objects (dictionaries, lists, strings, numbers, booleans, `None`) and JSON strings.

*   **Serialization (Python to JSON):** Converting Python objects into a JSON formatted string.
    *   `json.dumps()`: Dumps a Python object to a JSON formatted *string*.
    *   `json.dump()`: Dumps a Python object to a JSON formatted *file*.
*   **Deserialization (JSON to Python):** Converting a JSON formatted string back into Python objects.
    *   `json.loads()`: Loads a JSON formatted *string* into a Python object.
    *   `json.load()`: Loads a JSON formatted *file* into a Python object.

Let's save some game configuration data to a JSON file:

```python
import json

game_config = {
    "game_name": "Space Invaders Remake",
    "version": "1.0.1",
    "settings": {
        "difficulty": "medium",
        "sound_enabled": True,
        "player_name": "PlayerOne"
    },
    "high_scores": [
        {"name": "Alice", "score": 1500},
        {"name": "Bob", "score": 1200}
    ]
}

# Writing to a JSON file
with open("game_config.json", "w") as file:
    json.dump(game_config, file, indent=4) # indent makes the JSON human-readable

print("Game configuration saved to game_config.json")
```
The `indent=4` argument is very helpful for making the JSON output pretty-printed with 4 spaces for indentation, which significantly improves readability. Without it, the entire JSON object would be on a single line.

Now, let's load this configuration back into our Python program:

```python
import json

# Reading from a JSON file
try:
    with open("game_config.json", "r") as file:
        loaded_config = json.load(file)
    print("\nLoaded game configuration:")
    print(loaded_config)
    print(f"Player name: {loaded_config['settings']['player_name']}")
    print(f"First high score: {loaded_config['high_scores'][0]['score']}")

except FileNotFoundError:
    print("Error: game_config.json not found.")
except json.JSONDecodeError:
    print("Error: Could not decode JSON. File might be corrupted or malformed.")
```
Common mistakes with JSON include trying to `json.load()` a string (use `json.loads()` instead) or `json.dumps()` a file object (use `json.dump()` instead). Also, ensure your JSON data is valid; even a misplaced comma or bracket can lead to a `json.JSONDecodeError`.

Both CSV and JSON are powerful tools for data management. CSV is best for simple, flat, tabular data, while JSON excels at representing complex, nested, and hierarchical data structures, making it the preferred format for web APIs. Mastering these formats will significantly enhance your ability to work with real-world data.

#### Key concepts
*   **CSV (Comma Separated Values):** A simple text-based format for tabular data, where values are typically separated by commas.
*   **`csv` module:** Python's built-in module for reading and writing CSV files, handling various delimiters and quoting rules.
*   **`csv.reader`:** An iterator that reads lines from a CSV file and returns them as lists of strings.
*   **`csv.DictReader`:** An iterator that reads lines from a CSV file and returns them as dictionaries, using the first row as fieldnames (keys).
*   **`csv.writer`:** An object that writes data to a CSV file from lists of strings.
*   **`csv.DictWriter`:** An object that writes data to a CSV file from dictionaries, using specified fieldnames.
*   **`newline=''`:** A crucial argument for `open()` when working with the `csv` module to prevent extra blank rows.
*   **JSON (JavaScript Object Notation):** A lightweight, human-readable data-interchange format, based on key-value pairs and ordered lists.
*   **`json` module:** Python's built-in module for encoding (serializing) and decoding (deserializing) JSON data.
*   **`json.dump()`:** Serializes a Python object and writes the JSON formatted data to a file.
*   **`json.load()`:** Reads JSON formatted data from a file and deserializes it into a Python object.
*   **`json.dumps()`:** Serializes a Python object into a JSON formatted string.
*   **`json.loads()`:** Deserializes a JSON formatted string into a Python object.
*   **Serialization:** The process of converting an object into a format that can be stored or transmitted.
*   **Deserialization:** The process of converting serialized data back into an object.
*   **`indent` argument:** Used with `json.dump()` or `json.dumps()` to pretty-print JSON output for readability.
*   **`json.JSONDecodeError`:** An exception raised when attempting to decode malformed JSON data.

#### Hands-on activity
**Task: Inventory Management System**

You'll create a simple inventory system that stores product data (name, quantity, price) in a JSON file. The system should allow you to add new products, update existing product quantities, and view the entire inventory.

**Starter Code:**

```python
# inventory_manager.py
import json
import os # For checking if file exists

INVENTORY_FILE = "inventory.json"

def load_inventory():
    """Loads inventory from the JSON file."""
    if not os.path.exists(INVENTORY_FILE) or os.path.getsize(INVENTORY_FILE) == 0:
        return [] # Return empty list if file doesn't exist or is empty
    try:
        with open(INVENTORY_FILE, "r") as file:
            return json.load(file)
    except json.JSONDecodeError:
        print("Warning: Inventory file is corrupted. Starting with empty inventory.")
        return []

def save_inventory(inventory):
    """Saves inventory to the JSON file."""
    with open(INVENTORY_FILE, "w") as file:
        json.dump(inventory, file, indent=4)

def add_product(inventory, name, quantity, price):
    """Adds a new product or updates quantity if product exists."""
    for product in inventory:
        if product['name'].lower() == name.lower():
            product['quantity'] += quantity
            print(f"Updated quantity for {name}. New quantity: {product['quantity']}")
            save_inventory(inventory)
            return
    
    new_product = {"name": name, "quantity": quantity, "price": price}
    inventory.append(new_product)
    print(f"Added new product: {name}")
    save_inventory(inventory)

def view_inventory(inventory):
    """Displays the current inventory."""
    if not inventory:
        print("Inventory is empty.")
        return
    print("\n--- Current Inventory ---")
    for product in inventory:
        print(f"Name: {product['name']}, Quantity: {product['quantity']}, Price: ${product['price']:.2f}")
    print("-------------------------")

def main():
    inventory = load_inventory()

    while True:
        print("\n--- Inventory Manager ---")
        print("1. Add/Update Product")
        print("2. View Inventory")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            name = input("Enter product name: ")
            try:
                quantity = int(input("Enter quantity: "))
                price = float(input("Enter price: "))
                add_product(inventory, name, quantity, price)
            except ValueError:
                print("Invalid input for quantity or price. Please enter numbers.")
        elif choice == '2':
            view_inventory(inventory)
        elif choice == '3':
            print("Exiting Inventory Manager. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
```

**Instructions:**
1.  Save the starter code as `inventory_manager.py`.
2.  Run the script.
3.  Add several products.
4.  View the inventory.
5.  Add an existing product again, but with a new quantity. Observe if it updates or adds a duplicate.
6.  Exit the program and then run it again to verify that the inventory persists.
7.  Open `inventory.json` in a text editor to see the JSON structure.

#### Assessment idea
1.  **Question:** You have a list of dictionaries, `users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]`. You want to save this data to a file named `users.json` in a human-readable format. Which of the following code snippets correctly accomplishes this?
    *   **A)**
        ```python
        import json
        users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]
        with open("users.json", "w") as f:
            f.write(json.loads(users, indent=4))
        ```
    *   **B)**
        ```python
        import json
        users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]
        with open("users.json", "w") as f:
            json.dump(users, f, indent=4)
        ```
    *   **C)**
        ```python
        import json
        users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]
        json_string = json.dumps(users)
        with open("users.json", "w") as f:
            f.write(json_string)
        ```
    *   **D)**
        ```python
        import json
        users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]
        with open("users.json", "w", newline='') as f:
            json.dump(users, f, indent=4)
        ```

    **Correct Answer:** B)
    **Explanation:**
    *   Option A is incorrect because `json.loads()` is for deserializing a JSON *string*, not a Python object, and `f.write()` expects a string.
    *   Option B is correct. `json.dump()` is used to serialize a Python object directly to a file object, and `indent=4` ensures pretty-printing.
    *   Option C is partially correct in terms of serialization (`json.dumps()` creates a string), but it doesn't use `indent=4` when writing to the file, so it won't be human-readable, and it's less direct than `json.dump()` for writing to a file.
    *   Option D is incorrect because `newline=''` is specifically for the `csv` module and is not necessary or standard practice for JSON files.

2.  **Question:** You are reading a CSV file using `csv.DictReader`. The file `data.csv` contains:
    ```csv
    id,name,city
    1,Alice,New York
    2,Bob,London
    ```
    Which line of code would correctly access Bob's city after reading a row?
    *   **A) `row[2]`**
    *   **B) `row['city']`**
    *   **C) `row.city`**
    *   **D) `row['2']`**

    **Correct Answer:** B) `row['city']`
    **Explanation:** When using `csv.DictReader`, each row is treated as a dictionary. The column headers from the first line of the CSV file become the keys in this dictionary. Therefore, to access Bob's city, you would use the key `'city'`, which is `row['city']`. `row[2]` would be used if `csv.reader` was used and you were accessing by index.

#### AI generation note
Develop a 12-minute mixed-media lesson. Start with an animated explanation differentiating CSV (tabular, spreadsheet-like) and JSON (hierarchical, nested, web-friendly), showing their typical structures side-by-side. Transition to a live coding demo for reading/writing CSVs using `csv.DictReader` and `csv.DictWriter`, emphasizing `newline=''` and `writeheader()`. Then, move to JSON, demonstrating `json.dump()` with `indent=4` for writing and `json.load()` for reading, showcasing nested data access. Include common mistakes like `newline=''` omission for CSV and `JSONDecodeError` for JSON. The interactive element should be a drag-and-drop exercise matching Python data structures (list of dicts, dict of dicts) to their appropriate JSON/CSV serialization methods. Use clear diagrams for data structures.

---

### Chapter 4.3 — Making HTTP Requests with `requests`

#### Learning objectives
*   Understand the basic principles of HTTP (Hypertext Transfer Protocol) and how web APIs work.
*   Learn to use the `requests` library to make various HTTP requests (GET, POST).
*   Extract information from API responses, including status codes, headers, and JSON data.
*   Construct requests with query parameters and request bodies.
*   Implement basic error handling for network requests.

#### Detailed lesson content
The internet is a vast network of interconnected systems, and much of the data exchange happens via HTTP, the Hypertext Transfer Protocol. When your web browser loads a page, it's making HTTP requests. When your phone app fetches new data, it's making HTTP requests. And when your Python program needs to interact with a web service, it too will use HTTP requests, often to communicate with an API (Application Programming Interface). APIs provide a structured way for different software systems to talk to each other.

While Python has built-in modules for HTTP, the `requests` library is the de facto standard for making HTTP requests due to its simplicity, power, and elegance. It's not part of the standard library, so you'll need to install it: `pip install requests`.

The most common HTTP method is GET, used to retrieve data from a server. When you type a URL into your browser, you're performing a GET request. With `requests`, it's as simple as calling `requests.get()`:

```python
import requests

# Making a simple GET request to a public API
response = requests.get("https://api.kanye.rest") # Fetches a random Kanye West quote

# Check the status code
print(f"Status Code: {response.status_code}")

# Access the response content
if response.status_code == 200: # 200 OK means the request was successful
    print("Request successful!")
    print(f"Raw text: {response.text}") # The raw response content as a string

    # Most APIs return JSON, so we can parse it directly
    data = response.json()
    print(f"Parsed JSON: {data}")
    print(f"Kanye says: {data['quote']}")
else:
    print(f"Request failed with status code {response.status_code}")
```

The `response` object returned by `requests.get()` (and other methods) is incredibly rich. Key attributes include:
*   `response.status_code`: An integer indicating the HTTP status (e.g., 200 for OK, 404 for Not Found, 500 for Server Error).
*   `response.text`: The raw content of the response body as a string.
*   `response.json()`: If the response contains JSON data, this method parses it into a Python dictionary or list. It will raise a `json.JSONDecodeError` if the content is not valid JSON.
*   `response.headers`: A dictionary-like object containing the response headers.

Many GET requests require additional information, often passed as **query parameters** in the URL. These are key-value pairs appended to the URL after a `?`, separated by `&` (e.g., `https://example.com/search?q=python&limit=10`). The `requests` library makes this easy with the `params` argument:

```python
import requests

# Example with query parameters (e.g., fetching posts from JSONPlaceholder)
url = "https://jsonplaceholder.typicode.com/posts"
parameters = {
    "userId": 1,
    "id": 5 # Fetch post with ID 5 by userId 1
}

response = requests.get(url, params=parameters)

if response.status_code == 200:
    posts = response.json()
    print("\nPosts retrieved with specific parameters:")
    for post in posts:
        print(f"Title: {post['title']}")
else:
    print(f"Failed to retrieve posts. Status: {response.status_code}")
```

Beyond GET, the POST method is used to send data to the server, typically to create a new resource. When you submit a form on a website, it often makes a POST request. The data you send is included in the **request body**. For JSON data, you use the `json` argument:

```python
import requests

# Making a POST request (e.g., creating a new post on JSONPlaceholder)
url = "https://jsonplaceholder.typicode.com/posts"
new_post_data = {
    "title": "My New Python Post",
    "body": "This is the content of my exciting new post about Python APIs.",
    "userId": 1
}

response = requests.post(url, json=new_post_data) # Use 'json' argument for JSON body

print(f"\nPOST Request Status Code: {response.status_code}")
if response.status_code == 201: # 201 Created means resource was successfully created
    created_post = response.json()
    print("New post created successfully:")
    print(f"ID: {created_post['id']}")
    print(f"Title: {created_post['title']}")
else:
    print(f"Failed to create post. Status: {response.status_code}")
    print(f"Error details: {response.text}")
```
For other types of data (like form-encoded data), you might use the `data` argument instead of `json`.

**Common Mistakes and Safety Notes:**
*   **Network Errors:** Your program might encounter `requests.exceptions.ConnectionError` if there's no internet connection or the server is unreachable. Always wrap your `requests` calls in `try-except` blocks.
*   **Incorrect URLs:** A typo in the URL will lead to `404 Not Found` or other errors.
*   **Not Checking Status Codes:** Never assume a request was successful. Always check `response.status_code` before trying to process `response.json()`. A `400 Bad Request` or `500 Internal Server Error` means the server didn't process your request as expected.
*   **Rate Limiting:** Many APIs limit how many requests you can make in a given time frame. Exceeding this limit will result in `429 Too Many Requests`. Be mindful of API documentation for rate limits.
*   **Sensitive Data:** Never hardcode API keys or sensitive credentials directly into your code. Use environment variables or configuration files for such data.

The `requests` library is a powerful tool for interacting with the web. By understanding GET and POST methods, handling responses, and managing parameters, you can start building Python applications that integrate with countless online services.

#### Key concepts
*   **HTTP (Hypertext Transfer Protocol):** The foundation of data communication for the World Wide Web.
*   **API (Application Programming Interface):** A set of rules and definitions that allow different software applications to communicate with each other.
*   **`requests` library:** A popular third-party Python library for making HTTP requests, simplifying web interaction.
*   **`pip install requests`:** The command to install the `requests` library.
*   **HTTP Methods:**
    *   **GET:** Used to request data from a specified resource.
    *   **POST:** Used to send data to a server to create/update a resource.
    *   (Other common methods include PUT, DELETE, PATCH).
*   **`requests.get()`:** Function to send an HTTP GET request.
*   **`requests.post()`:** Function to send an HTTP POST request.
*   **`response` object:** The object returned by `requests` calls, containing information about the server's response.
*   **`response.status_code`:** An integer representing the HTTP status code (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
*   **`response.text`:** The raw content of the HTTP response body as a string.
*   **`response.json()`:** A method that parses the response body as JSON and returns a Python dictionary or list. Raises an error if the content is not valid JSON.
*   **Query Parameters:** Key-value pairs appended to a URL (after `?`) to filter or specify data for a GET request. Passed via the `params` argument in `requests`.
*   **Request Body:** The data sent with a POST (or PUT/PATCH) request, typically containing the resource to be created or updated. Passed via the `json` or `data` argument in `requests`.
*   **`requests.exceptions.ConnectionError`:** An exception raised when a network-related problem occurs (e.g., no internet, DNS failure).

#### Hands-on activity
**Task: Random Joke Fetcher**

Use the `requests` library to fetch a random programming joke from a public API. Display the joke setup and punchline to the user.

**API Endpoint:** `https://official-joke-api.appspot.com/random_joke`

**Starter Code:**

```python
# joke_fetcher.py
import requests

def fetch_random_joke():
    """Fetches a random programming joke from an API."""
    url = "https://official-joke-api.appspot.com/random_joke"
    
    try:
        response = requests.get(url)
        response.raise_for_status() # Raises an HTTPError for bad responses (4xx or 5xx)
        
        joke_data = response.json()
        
        setup = joke_data['setup']
        punchline = joke_data['punchline']
        
        print("\n--- Random Programming Joke ---")
        print(f"Setup: {setup}")
        print(f"Punchline: {punchline}")
        print("-------------------------------")
        
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.ConnectionError as conn_err:
        print(f"Connection error occurred: {conn_err}. Check your internet connection.")
    except requests.exceptions.Timeout as timeout_err:
        print(f"Request timed out: {timeout_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"An unexpected request error occurred: {req_err}")
    except KeyError:
        print("Error: Joke data format unexpected. Missing 'setup' or 'punchline'.")
    except Exception as e:
        print(f"An unknown error occurred: {e}")

if __name__ == "__main__":
    fetch_random_joke()
```

**Instructions:**
1.  Ensure you have the `requests` library installed (`pip install requests`).
2.  Save the starter code as `joke_fetcher.py`.
3.  Run the script: `python joke_fetcher.py`.
4.  Observe the output. Run it multiple times to get different jokes.
5.  (Optional challenge): Modify the code to fetch 5 jokes and display them one after another.

#### Assessment idea
1.  **Question:** You want to send data to an API endpoint `https://api.example.com/items` to create a new item. The item data is a Python dictionary: `item_data = {"name": "Laptop", "price": 1200}`. Which `requests` method and argument combination should you use?
    *   **A) `requests.get(url, params=item_data)`**
    *   **B) `requests.post(url, data=item_data)`**
    *   **C) `requests.post(url, json=item_data)`**
    *   **D) `requests.put(url, params=item_data)`**

    **Correct Answer:** C) `requests.post(url, json=item_data)`
    **Explanation:** To create a new resource, the HTTP POST method is typically used. When sending data as a JSON payload in the request body, the `requests` library provides the `json` argument, which automatically serializes the Python dictionary to JSON and sets the `Content-Type` header appropriately. Option B (`data=item_data`) would send form-encoded data, which is different from JSON. Options A and D use incorrect HTTP methods (GET and PUT) for creating a new resource in this context, and `params` is for query parameters, not request bodies.

2.  **Question:** After making an API call using `response = requests.get(some_url)`, you want to check if the request was successful before attempting to process the data. Which of the following is the most robust way to do this?
    *   **A) `if response.status_code == 200:`**
    *   **B) `if response.ok:`**
    *   **C) `try: response.json() except json.JSONDecodeError:`**
    *   **D) `response.raise_for_status()`**

    **Correct Answer:** D) `response.raise_for_status()`
    **Explanation:** While `if response.status_code == 200:` (A) and `if response.ok:` (B) both work for checking success, `response.raise_for_status()` (D) is considered the most robust and Pythonic way. It will raise an `HTTPError` for 4xx or 5xx client or server error responses, allowing you to catch specific HTTP errors gracefully in a `try-except` block. This simplifies error handling logic compared to manually checking status codes for every possible error. Option C only checks if the response *can be parsed as JSON*, not if the request itself was successful.

#### AI generation note
Create a 10-12 minute live coding session demonstrating the `requests` library. Start with installing `requests`. Show a basic GET request to a public API (like `jsonplaceholder.typicode.com/todos/1`), explaining `response.status_code`, `response.text`, and `response.json()`. Then, demonstrate GET with query parameters. Follow with a POST request, showing how to send JSON data using the `json` argument. Throughout, emphasize error handling using `try-except` blocks for `requests.exceptions.ConnectionError` and `response.raise_for_status()` for HTTP errors. Use clear console output to show request and response details. The interactive element could be a guided coding exercise where learners complete a simple GET request for a different public API (e.g., a cat fact API).

---

### Chapter 4.4 — Integrating with RESTful APIs

#### Learning objectives
*   Deepen your understanding of RESTful API principles and common HTTP methods.
*   Learn how to handle API authentication using API keys or basic authentication.
*   Practice sending data using different HTTP methods like PUT and DELETE.
*   Implement robust error handling strategies for various API responses.
*   Understand pagination and rate limiting concepts for large-scale API interactions.

#### Detailed lesson content
Building upon our introduction to HTTP requests, this chapter dives into the world of RESTful APIs, which are the backbone of modern web services. REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, which are typically identified by URLs.

Let's quickly recap the common HTTP methods in a REST context:
*   **GET:** Retrieve a resource (e.g., `GET /users/1` to get user with ID 1).
*   **POST:** Create a new resource (e.g., `POST /users` to create a new user).
*   **PUT:** Update an existing resource, replacing the entire resource (e.g., `PUT /users/1` to update user 1's entire data).
*   **PATCH:** Partially update an existing resource (e.g., `PATCH /users/1` to update only user 1's email).
*   **DELETE:** Remove a resource (e.g., `DELETE /users/1` to delete user with ID 1).

The `requests` library provides straightforward functions for PUT and DELETE as well:

```python
import requests

# Assuming a base URL for a mock API
BASE_URL = "https://jsonplaceholder.typicode.com" # A free fake API for testing and prototyping

# --- PUT Request: Update an entire resource ---
# Let's say we want to update post with ID 1
post_id_to_update = 1
update_data = {
    "id": post_id_to_update, # Often required to be in the body for PUT
    "title": "Updated Python Post Title",
    "body": "This entire post content has been replaced.",
    "userId": 1 # User ID remains the same
}

print(f"\nAttempting to update post {post_id_to_update} with PUT...")
response_put = requests.put(f"{BASE_URL}/posts/{post_id_to_update}", json=update_data)

if response_put.status_code == 200:
    updated_post = response_put.json()
    print("Post updated successfully (PUT):")
    print(updated_post)
else:
    print(f"Failed to update post (PUT). Status: {response_put.status_code}")
    print(f"Error: {response_put.text}")

# --- DELETE Request: Remove a resource ---
post_id_to_delete = 1 # Deleting the same post we just updated
print(f"\nAttempting to delete post {post_id_to_delete}...")
response_delete = requests.delete(f"{BASE_URL}/posts/{post_id_to_delete}")

if response_delete.status_code == 200: # 200 OK or 204 No Content are common for successful DELETE
    print(f"Post {post_id_to_delete} deleted successfully.")
    # DELETE responses often have no body, so response.json() might fail.
    # Check status code is usually sufficient.
else:
    print(f"Failed to delete post. Status: {response_delete.status_code}")
    print(f"Error: {response_delete.text}")
```

**API Authentication:**
Many real-world APIs require authentication to ensure only authorized users can access or modify data. The most common methods include:
1.  **API Keys:** A unique string provided by the API service. Often sent as a query parameter or in a custom HTTP header.
2.  **Basic Authentication:** Sending a username and password (base64 encoded) in the `Authorization` header. `requests` simplifies this with the `auth` argument.
3.  **Token-based Authentication (e.g., OAuth 2.0, JWT):** After an initial login, the API provides a token that is then sent in the `Authorization` header for subsequent requests. This is very common.

Let's illustrate with a hypothetical API key in the header:

```python
import requests
import os # To get API key from environment variables

# NEVER hardcode API keys directly in your script!
# Use environment variables or a secure configuration file.
# For demonstration, we'll use a placeholder.
# You would typically set this in your shell: export MY_API_KEY="your_secret_key_here"
API_KEY = os.getenv("MY_API_KEY", "YOUR_FALLBACK_API_KEY_IF_NOT_SET") # Replace with a real key if using a real API

# Example: Using a hypothetical API that requires an API key in the header
# For this example, we'll use a public API that doesn't strictly need a key,
# but demonstrate how you'd send it.
AUTH_URL = "https://api.nasa.gov/planetary/apod" # NASA APOD API, requires a key
# For NASA APOD, you'd get a key from https://api.nasa.gov/
# Then: API_KEY = "YOUR_NASA_API_KEY"

headers = {
    "Authorization": f"Bearer {API_KEY}", # Common for token-based auth
    "X-Api-Key": API_KEY # Common for API key in custom header
}
params = {
    "api_key": API_KEY, # Often API keys are passed as a query parameter too
    "date": "2023-10-26"
}

print("\nAttempting to fetch NASA APOD with API key...")
try:
    # NASA APOD actually uses the api_key as a query parameter, not header for simple access
    # So we'll use 'params' for the actual request, but keep 'headers' for demonstration
    response_auth = requests.get(AUTH_URL, params=params)
    response_auth.raise_for_status() # Check for HTTP errors

    apod_data = response_auth.json()
    print("NASA APOD fetched successfully:")
    print(f"Title: {apod_data.get('title')}")
    print(f"Explanation: {apod_data.get('explanation')[:100]}...") # First 100 chars
    print(f"Image URL: {apod_data.get('url')}")

except requests.exceptions.HTTPError as err:
    print(f"HTTP error occurred: {err} (Status: {err.response.status_code})")
    if err.response.status_code == 401:
        print("Authentication failed. Check your API key.")
    elif err.response.status_code == 403:
        print("Forbidden. You don't have permission to access this resource.")
except requests.exceptions.RequestException as err:
    print(f"An error occurred: {err}")
```
**Safety Note:** Always manage your API keys securely. Never commit them directly to version control (like Git). Use environment variables, or dedicated configuration management tools.

**Error Handling:**
Beyond `response.raise_for_status()`, you'll often need more granular error handling.
*   **4xx Client Errors:** Your request was malformed or unauthorized.
    *   `400 Bad Request`: Your request body or parameters were invalid.
    *   `401 Unauthorized`: Authentication credentials missing or invalid.
    *   `403 Forbidden`: Authenticated, but you don't have permission.
    *   `404 Not Found`: The requested resource does not exist.
    *   `429 Too Many Requests`: You've exceeded the API's rate limit.
*   **5xx Server Errors:** The server encountered an issue.
    *   `500 Internal Server Error`: A generic server-side error.
    *   `503 Service Unavailable`: The server is temporarily unable to handle the request.

Your code should anticipate these and provide user-friendly feedback.

**Pagination and Rate Limiting:**
For APIs that return large datasets, you'll often encounter **pagination**. This means the API won't send all data at once but in smaller "pages." You'll typically use query parameters like `page`, `limit`, `offset`, or `per_page` to navigate through these pages. You'll need to make multiple requests, often in a loop, until all data is retrieved.

**Rate Limiting** is a common restriction where APIs limit the number of requests you can make within a certain timeframe (e.g., 100 requests per minute). Exceeding this limit usually results in a `429 Too Many Requests` status code. You might need to implement delays in your code (`time.sleep()`) or use libraries that handle rate limiting automatically.

Integrating with RESTful APIs is a powerful skill, allowing your Python applications to fetch real-time data, automate tasks, and connect with a vast ecosystem of online services. By understanding methods, authentication, and robust error handling, you're ready to build truly dynamic applications.

#### Key concepts
*   **REST (Representational State Transfer):** An architectural style for designing networked applications, emphasizing stateless client-server communication and manipulation of resources via standard HTTP methods.
*   **RESTful API:** An API that adheres to the REST architectural style.
*   **HTTP Methods (revisited):**
    *   **PUT:** Used to completely replace an existing resource with new data.
    *   **DELETE:** Used to remove a specified resource.
    *   **PATCH:** Used to apply partial modifications to a resource.
*   **API Authentication:** The process of verifying a client's identity and permissions to access an API.
    *   **API Key:** A secret token used to authenticate requests, often sent as a query parameter or custom header.
    *   **Basic Authentication:** Sending a username and password in the `Authorization` header.
    *   **Token-based Authentication (Bearer Token):** Sending a generated token (e.g., JWT, OAuth token) in the `Authorization` header.
*   **HTTP Headers:** Key-value pairs sent with HTTP requests or responses, providing metadata (e.g., `Authorization`, `Content-Type`).
*   **Environment Variables:** A way to store configuration data (like API keys) outside of your code, making it more secure and portable.
*   **Error Handling (API specific):**
    *   **4xx Client Errors:** Indicate issues with the client's request (e.g., `401 Unauthorized`, `404 Not Found`, `429 Too Many Requests`).
    *   **5xx Server Errors:** Indicate issues on the API server's side (e.g., `500 Internal Server Error`).
*   **Pagination:** A technique used by APIs to divide large datasets into smaller, manageable "pages" for retrieval.
*   **Rate Limiting:** A restriction imposed by APIs on the number of requests a client can make within a specific time frame to prevent abuse and ensure fair usage.

#### Hands-on activity
**Task: Simple Task Manager with a Mock API**

You'll interact with a mock API (JSONPlaceholder) to simulate a task management system. You will:
1.  Fetch all existing tasks (GET).
2.  Add a new task (POST).
3.  Update an existing task's status (PUT or PATCH).
4.  Delete a task (DELETE).

**API Base URL:** `https://jsonplaceholder.typicode.com`
**Endpoints:** `/todos` for all tasks, `/todos/{id}` for a specific task.

**Starter Code:**

```python
# api_task_manager.py
import requests
import json # For pretty printing JSON responses

BASE_URL = "https://jsonplaceholder.typicode.com"

def get_all_tasks():
    """Fetches and prints all tasks."""
    print("\n--- Fetching All Tasks ---")
    try:
        response = requests.get(f"{BASE_URL}/todos")
        response.raise_for_status()
        tasks = response.json()
        for task in tasks[:5]: # Print only first 5 for brevity
            print(f"ID: {task['id']}, Title: {task['title']}, Completed: {task['completed']}")
        print(f"... and {len(tasks) - 5} more tasks.")
    except requests.exceptions.RequestException as e:
        print(f"Error fetching tasks: {e}")

def add_new_task(title, user_id=1):
    """Adds a new task."""
    print(f"\n--- Adding New Task: '{title}' ---")
    new_task_data = {
        "title": title,
        "completed": False,
        "userId": user_id
    }
    try:
        response = requests.post(f"{BASE_URL}/todos", json=new_task_data)
        response.raise_for_status()
        created_task = response.json()
        print("Task added successfully:")
        print(json.dumps(created_task, indent=2))
        return created_task['id'] # Return the ID of the new task
    except requests.exceptions.RequestException as e:
        print(f"Error adding task: {e}")
        return None

def update_task_status(task_id, completed_status):
    """Updates the 'completed' status of an existing task."""
    print(f"\n--- Updating Task {task_id} Status to {completed_status} ---")
    # For a partial update, PATCH is more appropriate.
    # JSONPlaceholder supports PATCH, but we'll use PUT for full replacement as per learning objectives.
    # To use PATCH: requests.patch(f"{BASE_URL}/todos/{task_id}", json={"completed": completed_status})

    # To use PUT, we need to fetch the existing task first to get all its data
    try:
        get_response = requests.get(f"{BASE_URL}/todos/{task_id}")
        get_response.raise_for_status()
        existing_task = get_response.json()

        existing_task['completed'] = completed_status # Update the status

        response = requests.put(f"{BASE_URL}/todos/{task_id}", json=existing_task)
        response.raise_for_status()
        updated_task = response.json()
        print("Task updated successfully:")
        print(json.dumps(updated_task, indent=2))
    except requests.exceptions.RequestException as e:
        print(f"Error updating task: {e}")

def delete_task(task_id):
    """Deletes a task."""
    print(f"\n--- Deleting Task {task_id} ---")
    try:
        response = requests.delete(f"{BASE_URL}/todos/{task_id}")
        response.raise_for_status()
        print(f"Task {task_id} deleted successfully.")
    except requests.exceptions.RequestException as e:
        print(f"Error deleting task: {e}")

def main():
    get_all_tasks()

    new_task_id = add_new_task("Learn RESTful APIs", user_id=1)
    if new_task_id:
        update_task_status(new_task_id, True)
        # Note: JSONPlaceholder is a mock API, changes are not persistent server-side.
        # So, if you try to get_all_tasks() again, you won't see your new task.
        # The API simulates the response as if it were saved.
        delete_task(new_task_id)

if __name__ == "__main__":
    main()
```

**Instructions:**
1.  Ensure you have `requests` installed.
2.  Save the code as `api_task_manager.py`.
3.  Run the script: `python api_task_manager.py`.
4.  Observe the output for fetching, adding, updating, and deleting tasks.
5.  **Challenge:** Modify the `update_task_status` function to use a `PATCH` request instead of `PUT` for updating only the `completed` field. (Hint: `requests.patch()` and send only `{"completed": completed_status}` in the `json` body).

#### Assessment idea
1.  **Question:** You are interacting with an API that requires an API key for authentication. The documentation states the key should be sent in a custom header named `X-API-Key`. If your API key is `my_secret_key_123`, which `requests` argument should you use, and how should it be structured?
    *   **A) `params={"X-API-Key": "my_secret_key_123"}`**
    *   **B) `auth=("X-API-Key", "my_secret_key_123")`**
    *   **C) `headers={"X-API-Key": "my_secret_key_123"}`**
    *   **D) `data={"X-API-Key": "my_secret_key_123"}`**

    **Correct Answer:** C) `headers={"X-API-Key": "my_secret_key_123"}`
    **Explanation:** Custom headers are passed to `requests` functions using the `headers` argument, which expects a dictionary where keys are header names and values are header values. `params` is for query parameters, `auth` is for basic or digest authentication, and `data` is for the request body.

2.  **Question:** An API you are using implements rate limiting, and you receive a `429 Too Many Requests` status code. What is the most appropriate immediate action your program should take to handle this error gracefully?
    *   **A) Immediately retry the request.**
    *   **B) Terminate the program with an error message.**
    *   **C) Pause execution for a short period (e.g., using `time.sleep()`) and then retry the request.**
    *   **D) Change the API endpoint.**

    **Correct Answer:** C) Pause execution for a short period (e.g., using `time.sleep()`) and then retry the request.
    **Explanation:** A `429 Too Many Requests` status code indicates that you've exceeded the API's rate limit. The most common and graceful way to handle this is to pause your program for a specified duration (often indicated by a `Retry-After` header in the API response, if available) and then retry the request. Immediately retrying (A) would likely result in another `429`. Terminating the program (B) is not graceful. Changing the API endpoint (D) is irrelevant to a rate limit issue.

#### AI generation note
Design a 15-minute interactive lab walkthrough. Begin with a quick review of REST principles and HTTP methods (GET, POST, PUT, DELETE) with clear visual mapping to CRUD operations. Then, guide learners through a step-by-step live coding session using a mock API (like JSONPlaceholder). First, demonstrate fetching all resources (GET). Second, show how to add a new resource (POST), highlighting the `json` argument. Third, illustrate updating a resource (PUT) by first fetching it, modifying the Python object, and then sending the updated object. Fourth, demonstrate deleting a resource (DELETE). Integrate a segment on API key handling (using environment variables for security) and robust `try-except` blocks for network and HTTP errors. The interactive element should involve the learner modifying the code to use `PATCH` instead of `PUT` for a partial update, and then verifying the difference in API behavior. Use side-by-side code and console output.

---

## Module 5: GUI, Web & Database Interaction

This module empowers you to build interactive applications, connect to the vast world of the internet, and manage persistent data. You'll learn how to create graphical user interfaces (GUIs) for desktop applications, interact with web services and APIs to fetch and send data, and store information reliably using databases. This journey will transform your Python scripts from command-line tools into fully-fledged, interactive programs that can communicate with external systems and remember their state.

---

### Chapter 5.1 — Introduction to GUI Programming with Tkinter

#### Learning objectives
*   Understand the fundamental concepts of Graphical User Interface (GUI) programming in Python.
*   Create and manage basic Tkinter windows and widgets like Labels, Buttons, and Entry fields.
*   Implement event handling to respond to user interactions, such as button clicks.
*   Arrange widgets within a window using the `pack()` layout manager.
*   Develop a simple, interactive Tkinter application from scratch.

#### Detailed lesson content
Welcome to the exciting world of Graphical User Interface (GUI) programming in Python! Up until now, most of our Python interactions have been through the command line, printing text to the console and receiving input there. While powerful, this isn't always the most user-friendly way to interact with software. GUIs provide a visual, intuitive way for users to interact with your programs, using windows, buttons, text boxes, and other graphical elements. Python offers several libraries for GUI development, and for beginners, Tkinter is an excellent starting point. It's built right into Python, meaning you don't need to install anything extra, and it's relatively straightforward to learn, making it perfect for our initial foray into visual programming.

Tkinter is Python's standard GUI toolkit. It provides a set of tools and widgets that allow you to build desktop applications. At its core, a Tkinter application consists of a main window (often called the root window) and various widgets placed within it. Widgets are the building blocks of any GUI – they are the buttons, labels, text entry fields, checkboxes, and more that users interact with. The process of building a Tkinter application generally involves creating the main window, instantiating widgets, configuring their properties (like text, size, or color), arranging them within the window, and then starting an event loop that listens for user interactions.

Let's begin by creating our very first Tkinter window. Every Tkinter application starts by importing the `tkinter` module, usually aliased as `tk` for convenience. Then, you create an instance of `tk.Tk()`, which represents the main application window. This root window is the foundation upon which all other widgets will be built. After creating the window, you can set its title using `window.title()` and define its initial size using `window.geometry()`. The `geometry()` method takes a string in the format "WidthxHeight", for example, "400x300" for a window 400 pixels wide and 300 pixels tall. Finally, and crucially, you must call `window.mainloop()`. This method starts the Tkinter event loop, which continuously listens for events (like mouse clicks, key presses, or window resizing) and keeps the window open until the user explicitly closes it. Without `mainloop()`, your window would appear and immediately disappear.

```python
import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("My First Tkinter App")
root.geometry("400x200") # Width x Height

# Start the Tkinter event loop
root.mainloop()
```

This simple script will open an empty window titled "My First Tkinter App" with dimensions 400x200 pixels. It's a humble beginning, but it's the canvas for all our future GUI creations.

Now, let's add some basic widgets to make our window interactive. A `tk.Label` widget is used to display static text or images. You create a label by passing the parent widget (our `root` window) and its text content. A `tk.Button` widget, as the name suggests, is a clickable button. When creating a button, you specify its parent, its text, and most importantly, a `command` argument. The `command` argument takes a function that Tkinter will execute when the button is clicked. An `tk.Entry` widget provides a single-line text box where users can input data. You can retrieve the text entered into an `Entry` widget using its `get()` method.

After creating widgets, you need to place them within the window. Tkinter provides several layout managers, and `pack()` is the simplest. The `pack()` method arranges widgets in blocks before placing them in the parent widget. By default, it packs widgets from top to bottom. You can control its behavior with options like `side` (e.g., `tk.LEFT`, `tk.RIGHT`, `tk.TOP`, `tk.BOTTOM`), `fill` (e.g., `tk.X`, `tk.Y`, `tk.BOTH`), and `expand` (True/False). While `pack()` is easy for simple layouts, it can become less intuitive for complex arrangements, which we'll explore in the next chapter.

Consider a common mistake: forgetting to assign the function to the `command` argument without parentheses. If you write `command=my_function()`, Tkinter will execute `my_function` immediately when the button is created, not when it's clicked. Instead, you should pass the function object itself: `command=my_function`. Tkinter will then call this function when the event occurs. Another common pitfall for beginners is not understanding the event loop. If your program seems to "hang" or doesn't respond, it's often because you've introduced a blocking operation within the event loop, preventing Tkinter from processing other events. Keep your event handler functions short and quick to execute. If you need to perform a long-running task, consider using threading to avoid freezing the GUI.

Let's build a simple application where a user can enter their name, and upon clicking a button, a greeting message appears.

```python
import tkinter as tk
from tkinter import messagebox # Import messagebox for simple pop-ups

def greet_user():
    """Function to be called when the 'Greet' button is clicked."""
    user_name = name_entry.get() # Get text from the Entry widget
    if user_name:
        greeting_label.config(text=f"Hello, {user_name}!") # Update the Label text
        # You could also use a messagebox for a pop-up
        # messagebox.showinfo("Greeting", f"Hello, {user_name}!")
    else:
        greeting_label.config(text="Please enter your name.")
        # messagebox.showwarning("Input Error", "Please enter your name.")

# Create the main window
root = tk.Tk()
root.title("Simple Greeter App")
root.geometry("350x150")

# Create a Label widget
instruction_label = tk.Label(root, text="Enter your name:")
instruction_label.pack(pady=5) # Add some vertical padding

# Create an Entry widget for user input
name_entry = tk.Entry(root, width=30)
name_entry.pack(pady=5)
name_entry.focus_set() # Set focus to the entry field on start

# Create a Button widget
greet_button = tk.Button(root, text="Greet", command=greet_user)
greet_button.pack(pady=10)

# Create another Label to display the greeting message
greeting_label = tk.Label(root, text="")
greeting_label.pack(pady=5)

# Start the Tkinter event loop
root.mainloop()
```
In this example, `greet_user` is our event handler. When `greet_button` is clicked, `greet_user` is executed. It retrieves the text from `name_entry` using `get()`, and then updates the `text` property of `greeting_label` using `config()`. The `config()` method is incredibly useful for changing widget properties dynamically after they've been created. We also introduced `pady` in `pack()` calls, which adds vertical padding around the widgets, making the layout look cleaner. The `focus_set()` method on `name_entry` ensures that the cursor is automatically placed in the entry field when the application starts, ready for user input. This small detail significantly improves user experience.

Remember that GUI programming is all about reacting to user actions. The `command` attribute of a button is your primary tool for this. For other widgets, you might use different mechanisms, but the core idea of linking an event to a function remains the same. As you build more complex GUIs, you'll find yourself creating many such functions, each responsible for a specific piece of logic triggered by a user interaction. Tkinter also offers `messagebox` for simple pop-up dialogs, which can be very useful for providing feedback or warnings to the user without cluttering the main window. We imported `messagebox` and showed how you might use `showinfo` or `showwarning` as an alternative to updating a label. This provides a clear, modal interaction that demands user attention.

Finally, while Tkinter is generally safe, be mindful of resource management in larger applications. If you're loading many images or large data sets, ensure you handle them efficiently to prevent your application from becoming sluggish or consuming excessive memory. Always test your application thoroughly, especially for edge cases like empty input or unexpected user actions, to ensure a robust and pleasant user experience.

#### Key concepts
*   **GUI (Graphical User Interface):** A visual interface that allows users to interact with electronic devices through graphical icons and visual indicators, rather than text-based commands.
*   **Tkinter:** Python's standard library for creating desktop GUI applications.
*   **Widget:** A basic visual building block of a GUI, such as a button, label, entry field, or text area.
*   **Root Window:** The main, top-level window of a Tkinter application, created with `tk.Tk()`.
*   **Event Loop:** A continuous process (`mainloop()`) that listens for user interactions (events) and dispatches them to the appropriate event handler functions.
*   **Layout Manager:** A mechanism (e.g., `pack()`) used to arrange and size widgets within a parent window or frame.
*   **`pack()`:** A simple Tkinter layout manager that organizes widgets in blocks before placing them in the parent widget.
*   **`command` attribute:** Used with widgets like `Button` to specify a function to be executed when the widget is interacted with (e.g., clicked).
*   **`config()` method:** Used to modify the properties (like text, color, size) of a widget after it has been created.

#### Hands-on activity
**Build a Simple Counter Application**

Create a Tkinter application with:
1.  A main window titled "Simple Counter".
2.  A `Label` widget displaying the current count, initialized to 0.
3.  A `Button` widget labeled "Increment" that, when clicked, increases the count displayed in the label by 1.
4.  A `Button` widget labeled "Decrement" that, when clicked, decreases the count displayed in the label by 1.
5.  A `Button` widget labeled "Reset" that, when clicked, sets the count back to 0.

**Code Template:**
```python
import tkinter as tk

# Initialize the counter variable
current_count = 0

def update_count_display():
    # This function will update the label with the current_count
    pass # You need to implement this

def increment_count():
    global current_count
    # Increment current_count and update display
    pass # You need to implement this

def decrement_count():
    global current_count
    # Decrement current_count and update display
    pass # You need to implement this

def reset_count():
    global current_count
    # Reset current_count to 0 and update display
    pass # You need to implement this

root = tk.Tk()
root.title("Simple Counter")
root.geometry("250x150")

# Create the count display label
count_label = tk.Label(root, text=f"Count: {current_count}", font=("Arial", 24))
count_label.pack(pady=10)

# Create buttons
increment_button = tk.Button(root, text="Increment", command=increment_count)
increment_button.pack(side=tk.LEFT, padx=5)

decrement_button = tk.Button(root, text="Decrement", command=decrement_count)
decrement_button.pack(side=tk.LEFT, padx=5)

reset_button = tk.Button(root, text="Reset", command=reset_count)
reset_button.pack(side=tk.RIGHT, padx=5)

root.mainloop()
```

#### Assessment idea
1.  **Question:** Which of the following is the correct way to start the Tkinter event loop for a window named `my_window`?
    a) `my_window.start_loop()`
    b) `my_window.run()`
    c) `my_window.event_loop()`
    d) `my_window.mainloop()`
    **Correct Answer:** d) `my_window.mainloop()`
    **Explanation:** The `mainloop()` method is essential for a Tkinter application. It starts the event loop, which listens for events (like button clicks, key presses, window resizing) and keeps the window displayed until it's closed by the user. Without it, the window would appear and immediately close.

2.  **Question:** You want to change the text of a `tk.Label` widget named `status_label` from "Loading..." to "Ready." after an operation completes. Which method should you use?
    a) `status_label.set_text("Ready.")`
    b) `status_label.update_text("Ready.")`
    c) `status_label.config(text="Ready.")`
    d) `status_label["text"] = "Ready."`
    **Correct Answer:** c) `status_label.config(text="Ready.")` or d) `status_label["text"] = "Ready."`
    **Explanation:** Both `config()` and direct dictionary-style access are valid ways to change widget options after creation. `config()` is generally preferred for its clarity and consistency with initial widget configuration, but direct access is also commonly used. `set_text()` and `update_text()` are not standard Tkinter methods for this purpose.

#### AI generation note
Create an 8-minute animated video explaining basic Tkinter GUI development. Start by showing a blank console, then transition to a visual representation of `tk.Tk()` creating a window. Animate the `pack()` method placing `Label`, `Entry`, and `Button` widgets. Visually demonstrate the `command` attribute linking a button click to a Python function, showing the function executing and then `config()` updating a label's text. Highlight the importance of `mainloop()` by showing a window appearing and disappearing without it, then staying open with it. Use clear, simple code snippets overlayed on the animations. The tone should be beginner-friendly and encouraging. Include captions and alt text for any diagrams.

---

### Chapter 5.2 — Advanced Tkinter Widgets and Layout Management

#### Learning objectives
*   Utilize more advanced Tkinter widgets such as `Text`, `Canvas`, `Checkbutton`, and `Radiobutton`.
*   Understand and apply the `grid()` layout manager for more precise widget positioning.
*   Explore the `place()` layout manager for absolute positioning and its trade-offs.
*   Implement `StringVar` and `IntVar` for dynamic data binding with widgets.
*   Design and build a more complex Tkinter application incorporating multiple widget types and layout strategies.

#### Detailed lesson content
Building upon our foundational understanding of Tkinter, we're now ready to explore a richer set of widgets and more sophisticated ways to arrange them. While `Label`, `Button`, and `Entry` are fundamental, real-world applications often require more complex input, display, and selection mechanisms. Furthermore, the `pack()` layout manager, while simple, can quickly become cumbersome for intricate designs. This chapter will introduce you to widgets like `Text` for multi-line input, `Canvas` for drawing, and `Checkbutton` and `Radiobutton` for user selections. We'll also dive deep into `grid()` and `place()`, Tkinter's other powerful layout managers, enabling you to create professional-looking interfaces.

Let's start with new widgets. The `tk.Text` widget is a multi-line text area, perfect for notes, log displays, or simple text editors. Unlike `Entry`, it can handle multiple lines of text, and you can insert and retrieve text at specific indices. For example, `text_widget.insert(tk.END, "Hello\nWorld")` adds text to the end, and `text_widget.get("1.0", tk.END)` retrieves all text from the first character of the first line to the end. Be mindful that indices in `Text` widgets are strings like "line.column". The `tk.Canvas` widget is a versatile drawing area where you can create shapes (lines, rectangles, circles), text, and even images. It's excellent for custom graphics, simple games, or data visualization. You can create items on a canvas using methods like `create_line()`, `create_rectangle()`, `create_text()`, and `create_image()`. Each item created returns an ID that can be used to modify or delete it later.

For user selections, Tkinter offers `tk.Checkbutton` and `tk.Radiobutton`. A `Checkbutton` allows the user to toggle an option on or off. It's typically associated with a `tk.IntVar()` (Integer Variable) to store its state (0 for unchecked, 1 for checked). A `Radiobutton` is part of a group where only one option can be selected at a time. All `Radiobutton`s in a group must share the same `tk.IntVar()` and each must have a unique `value` associated with it. When a radio button is selected, its `value` is stored in the shared `IntVar`. These `IntVar`s and `tk.StringVar()` (String Variable) are special Tkinter variables that can be directly linked to widgets, allowing for automatic updates when the widget's value changes, or when the variable's value is changed programmatically. This concept is called data binding and is incredibly powerful for keeping your GUI in sync with your application's data.

```python
import tkinter as tk

def show_selections():
    # Retrieve values from Checkbutton and Radiobutton
    pizza_choice = pizza_var.get()
    extra_cheese = cheese_var.get() # 1 if checked, 0 if unchecked
    
    status_text = f"You ordered a {pizza_choice} pizza."
    if extra_cheese:
        status_text += " with extra cheese."
    
    output_label.config(text=status_text)

root = tk.Tk()
root.title("Pizza Order")

# --- Radiobuttons for Pizza Type ---
pizza_var = tk.StringVar(value="Pepperoni") # Default selection
tk.Label(root, text="Choose your pizza:").pack(anchor=tk.W, padx=10, pady=5)

tk.Radiobutton(root, text="Pepperoni", variable=pizza_var, value="Pepperoni").pack(anchor=tk.W, padx=20)
tk.Radiobutton(root, text="Mushroom", variable=pizza_var, value="Mushroom").pack(anchor=tk.W, padx=20)
tk.Radiobutton(root, text="Vegetable", variable=pizza_var, value="Vegetable").pack(anchor=tk.W, padx=20)

# --- Checkbutton for Extra Cheese ---
cheese_var = tk.IntVar() # 0 for unchecked, 1 for checked
tk.Checkbutton(root, text="Extra Cheese", variable=cheese_var, onvalue=1, offvalue=0).pack(anchor=tk.W, padx=10, pady=10)

# --- Order Button and Output Label ---
order_button = tk.Button(root, text="Place Order", command=show_selections)
order_button.pack(pady=10)

output_label = tk.Label(root, text="")
output_label.pack(pady=5)

root.mainloop()
```

Next, let's tackle layout management. While `pack()` is simple, `grid()` offers much more control. It organizes widgets in a table-like structure of rows and columns. When using `widget.grid()`, you specify the `row` and `column` where the widget should be placed. You can also use `rowspan` and `columnspan` to make a widget span multiple rows or columns, similar to HTML tables. The `sticky` option (e.g., `tk.N+tk.S+tk.E+tk.W` or `tk.NSEW`) is crucial for controlling how a widget expands to fill its cell when the window is resized. `padx` and `pady` add external padding, while `ipadx` and `ipady` add internal padding within the widget itself.

A common mistake with `grid()` is forgetting to configure row and column weights. By default, rows and columns don't expand when the window is resized. You need to tell Tkinter which rows and columns should expand and by how much using `root.grid_rowconfigure(index, weight=value)` and `root.grid_columnconfigure(index, weight=value)`. A `weight` of 1 means that row/column will expand proportionally. If multiple rows/columns have a weight of 1, they will share the extra space equally.

```python
import tkinter as tk

root = tk.Tk()
root.title("Grid Layout Example")

# Configure rows and columns to expand
root.grid_rowconfigure(0, weight=1)
root.grid_rowconfigure(1, weight=3) # Row 1 gets more space
root.grid_columnconfigure(0, weight=1)
root.grid_columnconfigure(1, weight=1)

# Create some widgets
label1 = tk.Label(root, text="Top-Left", bg="lightblue")
label2 = tk.Label(root, text="Top-Right", bg="lightcoral")
label3 = tk.Label(root, text="Bottom-Left (Spans 2 columns)", bg="lightgreen")
text_area = tk.Text(root, height=5, width=30) # A Text widget for the bottom-right

# Place widgets using grid()
label1.grid(row=0, column=0, sticky=tk.NSEW, padx=5, pady=5)
label2.grid(row=0, column=1, sticky=tk.NSEW, padx=5, pady=5)
label3.grid(row=1, column=0, columnspan=2, sticky=tk.NSEW, padx=5, pady=5) # Spans two columns
# The Text widget will be placed implicitly by the next grid call, but let's place it explicitly
# text_area.grid(row=2, column=0, columnspan=2, sticky=tk.NSEW, padx=5, pady=5) # Example if we had a 3rd row

# Let's refine the example to use the Text widget more effectively within the grid
# Create a frame to hold the Text widget and a scrollbar
text_frame = tk.Frame(root, bg="lightgray")
text_frame.grid(row=2, column=0, columnspan=2, sticky=tk.NSEW, padx=5, pady=5)
root.grid_rowconfigure(2, weight=2) # Give the text area row some weight

text_area = tk.Text(text_frame, wrap="word", height=5, width=30)
text_area.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

scrollbar = tk.Scrollbar(text_frame, command=text_area.yview)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
text_area.config(yscrollcommand=scrollbar.set)

text_area.insert(tk.END, "This is a multi-line text area. You can type a lot of text here, and it will wrap automatically. Try resizing the window to see how the widgets expand based on grid weights.")

root.mainloop()
```
In the `grid()` example, notice how `sticky=tk.NSEW` makes the labels expand to fill their cells. We also configured `grid_rowconfigure` and `grid_columnconfigure` to ensure the layout adapts when the window is resized. We also introduced a `tk.Frame` to group the `Text` widget and its `Scrollbar`. Frames are incredibly useful for organizing complex layouts, allowing you to apply different layout managers within different sections of your window. Here, the `text_frame` uses `grid()` to position itself, but internally, the `text_area` and `scrollbar` use `pack()` within the frame. This nesting of layout managers is a powerful technique.

Finally, the `place()` layout manager allows for absolute positioning of widgets using `x`, `y`, `width`, and `height` coordinates. For example, `widget.place(x=50, y=100, width=150, height=30)`. While it offers pixel-perfect control, it's generally discouraged for most applications because it doesn't handle window resizing gracefully. If the user resizes the window, your absolutely placed widgets will remain fixed, potentially leading to overlapping or empty spaces. It's best reserved for very specific scenarios, like a splash screen or a fixed overlay, where dynamic resizing is not a concern. For responsive layouts, `grid()` is almost always the superior choice.

When designing your GUI, always prioritize user experience. Think about the logical flow of your application, how users will interact with different elements, and how your layout will adapt to different screen sizes. Avoid cluttering the interface with too many widgets. Use `Frame` widgets to group related components, making your code more organized and your GUI easier to understand. Remember to handle potential errors, such as invalid user input, gracefully. For example, if you're expecting a number in an `Entry` field, validate the input before attempting to perform calculations.

#### Key concepts
*   **`tk.Text`:** A multi-line text input and display widget, suitable for larger blocks of text.
*   **`tk.Canvas`:** A widget for drawing graphics, shapes, text, and images.
*   **`tk.Checkbutton`:** A widget that allows users to toggle an option on or off, typically bound to a `tk.IntVar`.
*   **`tk.Radiobutton`:** A widget that allows users to select one option from a mutually exclusive group, all bound to the same `tk.IntVar` or `tk.StringVar`.
*   **`tk.StringVar()` / `tk.IntVar()`:** Special Tkinter variables that can be linked directly to widgets for automatic data binding and updates.
*   **`grid()`:** A powerful layout manager that arranges widgets in a table-like structure of rows and columns.
*   **`rowspan` / `columnspan`:** Options for `grid()` that allow a widget to occupy multiple rows or columns.
*   **`sticky`:** An option for `grid()` that controls how a widget expands within its cell (e.g., `tk.NSEW` to fill all directions).
*   **`grid_rowconfigure()` / `grid_columnconfigure()`:** Methods used to specify how rows and columns should expand when the parent window is resized.
*   **`place()`:** A layout manager that positions widgets at absolute `x`, `y` coordinates, generally less flexible for responsive designs.
*   **`tk.Frame`:** A container widget used to group other widgets, often to apply different layout managers to different sections of a window.

#### Hands-on activity
**Build a Simple Calculator Layout**

Design a basic calculator interface using the `grid()` layout manager. Your calculator should have:
1.  A single `Entry` widget at the top, spanning all columns, to display input and results.
2.  Buttons for numbers 0-9.
3.  Buttons for basic operations: `+`, `-`, `*`, `/`.
4.  An "Equals" button `=`.
5.  A "Clear" button `C`.

Arrange these buttons in a grid, similar to a standard calculator. Don't worry about implementing the calculation logic yet; focus solely on the layout. Use `grid_rowconfigure` and `grid_columnconfigure` to ensure the buttons expand nicely when the window is resized.

**Code Template:**
```python
import tkinter as tk

root = tk.Tk()
root.title("Grid Calculator Layout")

# Configure rows and columns for responsiveness
# Hint: You'll need more rows and columns than just 2x2.
# Think about how many rows and columns a calculator typically has.
# Example: root.grid_rowconfigure(0, weight=1) for the display row
#          root.grid_columnconfigure(0, weight=1) for a button column

# Entry widget for display
display_entry = tk.Entry(root, width=25, font=("Arial", 18), bd=5, relief=tk.SUNKEN, justify=tk.RIGHT)
# Place display_entry using grid, spanning multiple columns
# display_entry.grid(...)

# Define button labels
button_labels = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+'
]

# Create and place buttons in a grid
# You'll need nested loops or careful manual placement
# Example:
# row_num = 1
# col_num = 0
# for label in button_labels:
#     button = tk.Button(root, text=label, font=("Arial", 14), width=5, height=2)
#     button.grid(row=row_num, column=col_num, sticky=tk.NSEW, padx=2, pady=2)
#     col_num += 1
#     if col_num > 3: # Assuming 4 columns for buttons
#         col_num = 0
#         row_num += 1

root.mainloop()
```

#### Assessment idea
1.  **Question:** You are designing a form where users can select multiple interests (e.g., "Sports", "Music", "Reading"). Which Tkinter widget is most appropriate for this scenario, and what type of Tkinter variable would you typically bind to it?
    a) `tk.Radiobutton` with `tk.StringVar()`
    b) `tk.Checkbutton` with `tk.IntVar()`
    c) `tk.Entry` with `tk.StringVar()`
    d) `tk.Text` with `tk.StringVar()`
    **Correct Answer:** b) `tk.Checkbutton` with `tk.IntVar()`
    **Explanation:** `tk.Checkbutton` allows for multiple independent selections, which is suitable for choosing multiple interests. Each `Checkbutton` typically binds to a `tk.IntVar()` to store its state (0 for unchecked, 1 for checked). `Radiobutton`s are for single selections from a group, and `Entry`/`Text` widgets are for free-form text input.

2.  **Question:** Explain why `grid()` is generally preferred over `place()` for creating responsive Tkinter layouts, and provide an example of a `grid()` configuration that demonstrates responsiveness.
    **Correct Answer:** `grid()` is preferred over `place()` because `grid()` organizes widgets in a relative, table-like structure, making layouts inherently more responsive to window resizing. Widgets placed with `place()` use absolute pixel coordinates, meaning they remain fixed in position and size even if the window changes, which can lead to overlapping elements or large empty spaces. In contrast, `grid()` allows you to define how rows and columns expand proportionally using `grid_rowconfigure()` and `grid_columnconfigure()` with `weight` values.
    **Example:**
    ```python
    import tkinter as tk
    root = tk.Tk()
    root.title("Responsive Grid")
    
    # Configure column 0 to expand twice as much as column 1
    root.grid_columnconfigure(0, weight=2)
    root.grid_columnconfigure(1, weight=1)
    # Configure row 0 to expand
    root.grid_rowconfigure(0, weight=1)
    
    label_left = tk.Label(root, text="Left Pane", bg="lightgray")
    label_right = tk.Label(root, text="Right Pane", bg="lightblue")
    
    # Widgets stick to all sides and expand with their cells
    label_left.grid(row=0, column=0, sticky=tk.NSEW, padx=5, pady=5)
    label_right.grid(row=0, column=1, sticky=tk.NSEW, padx=5, pady=5)
    
    root.mainloop()
    ```
    In this example, `label_left` will always take up twice the width of `label_right` when the window is resized horizontally, and both will expand vertically to fill the available space in row 0, demonstrating responsiveness.

#### AI generation note
Generate a 10-minute interactive slide deck with live coding demonstrations. The slides should introduce `Text`, `Canvas`, `Checkbutton`, `Radiobutton` widgets with simple code snippets for each. Then, transition to a detailed explanation of `grid()`, showing a visual grid overlay on a Tkinter window. Demonstrate `row`, `column`, `rowspan`, `columnspan`, and `sticky` options with step-by-step code. Explain `grid_rowconfigure` and `grid_columnconfigure` with animations showing how widgets expand. Briefly contrast `place()` with `grid()` using a side-by-side comparison of their behavior during window resizing. Include a mini-quiz question on choosing the right widget for a scenario. Use a professional and hands-on tone.

---

### Chapter 5.3 — Making HTTP Requests with `requests` and Web Scraping Basics

#### Learning objectives
*   Understand the fundamentals of the Hypertext Transfer Protocol (HTTP) and common HTTP methods (GET, POST).
*   Learn to use the `requests` library to send HTTP GET and POST requests to web servers.
*   Process HTTP responses, including status codes, headers, and body content (text and JSON).
*   Introduce basic web scraping techniques using `BeautifulSoup` to parse HTML content.
*   Understand the ethical considerations and potential pitfalls of web scraping, including `robots.txt` and rate limiting.

#### Detailed lesson content
Our journey into Python's capabilities now extends beyond the local machine to the vast and interconnected world of the internet. The ability to programmatically interact with websites and web services is a cornerstone of modern application development. Whether you're fetching data from an API, submitting information to a web form, or extracting specific content from a webpage, understanding HTTP requests is crucial. In Python, the `requests` library is the de facto standard for making HTTP requests. It's incredibly user-friendly and handles many complexities behind the scenes, allowing us to focus on the data we want to send and receive.

At its heart, the internet operates on the Hypertext Transfer Protocol (HTTP). When you type a URL into your browser, you're essentially sending an HTTP request to a web server. The server then processes your request and sends back an HTTP response, which your browser renders as a webpage. The two most common HTTP methods you'll encounter are GET and POST. A **GET** request is used to retrieve data from a specified resource. When you visit a webpage, your browser sends a GET request. GET requests should only retrieve data and have no other effect on the data. A **POST** request is used to send data to a server to create or update a resource. For example, submitting a form on a website typically involves a POST request. Other methods include PUT (for updating resources) and DELETE (for removing resources), but GET and POST are where we'll focus our initial efforts.

The `requests` library makes sending these requests incredibly simple. To send a GET request, you simply call `requests.get()` and pass the URL as an argument. The function returns a `Response` object, which contains all the information about the server's response, including the HTTP status code (e.g., 200 for success, 404 for Not Found, 500 for server error), headers, and the body of the response. The response body can be accessed as raw bytes (`response.content`), as text (`response.text`), or, if the content is JSON, as a Python dictionary (`response.json()`). Always check the `response.status_code` to ensure your request was successful before attempting to process the data. A `status_code` of 200 indicates success.

```python
import requests

# Example 1: Making a simple GET request
url = "https://www.example.com"
try:
    response = requests.get(url)
    response.raise_for_status() # Raises an HTTPError for bad responses (4xx or 5xx)

    print(f"Status Code: {response.status_code}")
    print(f"Headers: {response.headers['Content-Type']}")
    print(f"First 200 characters of content:\n{response.text[:200]}...")

except requests.exceptions.HTTPError as errh:
    print(f"HTTP Error: {errh}")
except requests.exceptions.ConnectionError as errc:
    print(f"Error Connecting: {errc}")
except requests.exceptions.Timeout as errt:
    print(f"Timeout Error: {errt}")
except requests.exceptions.RequestException as err:
    print(f"Something went wrong: {err}")

# Example 2: Making a GET request with parameters
# This is equivalent to https://httpbin.org/get?name=Alice&age=30
params = {"name": "Alice", "age": 30}
response_with_params = requests.get("https://httpbin.org/get", params=params)
print("\nGET request with parameters:")
print(response_with_params.json()) # httpbin.org returns JSON

# Example 3: Making a POST request with form data
# This simulates submitting a form
post_data = {"username": "cohortia_user", "password": "securepassword123"}
response_post = requests.post("https://httpbin.org/post", data=post_data)
print("\nPOST request with form data:")
print(response_post.json()) # httpbin.org returns JSON
```
In these examples, `response.raise_for_status()` is a convenient way to immediately raise an `HTTPError` if the response was a client error (4xx) or server error (5xx). This helps prevent your program from continuing with invalid data. We also included robust error handling using `try-except` blocks, which is crucial when dealing with network requests, as connections can fail, servers can be down, or timeouts can occur. For POST requests, you pass the data as a dictionary to the `data` parameter. `requests` will automatically encode this as `application/x-www-form-urlencoded`, which is standard for HTML forms. If you need to send JSON data, you'd use the `json` parameter instead of `data`.

Now, let's move to **web scraping**. While APIs provide structured data, many websites don't offer an API for the specific information you need. Web scraping is the process of programmatically extracting data from websites by parsing their HTML content. It's like teaching your Python script to "read" a webpage and pick out the relevant pieces. For this, we'll use a fantastic library called `BeautifulSoup` (often imported as `bs4` from `bs4`). `BeautifulSoup` takes raw HTML content and turns it into a parse tree, which you can then navigate and search using Python.

The general workflow for web scraping is:
1.  Send an HTTP GET request to the target URL using `requests`.
2.  Get the HTML content from the `response.text`.
3.  Create a `BeautifulSoup` object by passing the HTML content and a parser (usually `'html.parser'`).
4.  Use `BeautifulSoup`'s methods like `find()`, `find_all()`, `select()` (for CSS selectors) to locate specific HTML elements.
5.  Extract the desired data (text, attributes) from the found elements.

```python
import requests
from bs4 import BeautifulSoup

# URL of a simple static page for demonstration (e.g., a Wikipedia page)
# For real-world scraping, always check robots.txt and terms of service.
scrape_url = "https://en.wikipedia.org/wiki/Python_(programming_language)"

try:
    response = requests.get(scrape_url)
    response.raise_for_status() # Check for HTTP errors

    # Create a BeautifulSoup object
    soup = BeautifulSoup(response.text, 'html.parser')

    # Example 1: Get the title of the page
    page_title = soup.find('h1', class_='firstHeading') # Find h1 tag with class 'firstHeading'
    if page_title:
        print(f"\nPage Title: {page_title.get_text()}")

    # Example 2: Find all paragraph tags and print the first few
    paragraphs = soup.find_all('p')
    print("\nFirst 3 paragraphs:")
    for i, p in enumerate(paragraphs[:3]):
        print(f"Paragraph {i+1}: {p.get_text()[:150]}...") # Print first 150 chars

    # Example 3: Find a specific link (e.g., the link to Guido van Rossum)
    # Using CSS selectors with .select_one()
    guido_link = soup.select_one('a[title="Guido van Rossum"]')
    if guido_link:
        print(f"\nLink to Guido van Rossum: {guido_link['href']}")
        print(f"Link text: {guido_link.get_text()}")
    else:
        print("\nCould not find link to Guido van Rossum.")

except requests.exceptions.RequestException as e:
    print(f"Error during web request: {e}")
```
In this example, `soup.find()` finds the first matching element, while `soup.find_all()` returns a list of all matching elements. We can specify the tag name (e.g., `'h1'`, `'p'`, `'a'`) and attributes (e.g., `class_='firstHeading'`, `id='some_id'`). The `get_text()` method extracts the visible text content from an HTML tag, stripping out all child tags. `select_one()` and `select()` allow you to use powerful CSS selectors, which can be very precise for locating elements.

**Ethical Considerations and Safety Notes for Web Scraping:**
Web scraping comes with significant ethical and legal responsibilities.
1.  **`robots.txt`:** Always check a website's `robots.txt` file (e.g., `https://www.example.com/robots.txt`) before scraping. This file specifies which parts of the site web crawlers are allowed or disallowed to access. Respecting `robots.txt` is crucial for ethical scraping.
2.  **Terms of Service:** Many websites explicitly prohibit scraping in their Terms of Service. Violating these terms can lead to legal action.
3.  **Rate Limiting:** Do not bombard a server with too many requests in a short period. This can be seen as a Denial-of-Service (DoS) attack and get your IP address blocked. Introduce `time.sleep()` between requests to be polite and avoid overwhelming the server.
4.  **Dynamic Content:** Be aware that `requests` and `BeautifulSoup` are best for static HTML content. Websites that heavily rely on JavaScript to load content (Single Page Applications or SPAs) will often return incomplete HTML with `requests`. For these, you might need more advanced tools like Selenium, which can control a web browser.
5.  **Data Usage:** Be clear about how you intend to use the scraped data. Do not use it for commercial purposes without explicit permission, and always respect copyright.

Common mistakes include not handling network errors, trying to scrape dynamic content as if it were static, and not respecting `robots.txt` or rate limits. Always start with small, controlled scrapes and gradually increase complexity. Use `print()` statements to inspect the `response.text` and `soup` object to understand the HTML structure you're working with.

#### Key concepts
*   **HTTP (Hypertext Transfer Protocol):** The foundation of data communication for the World Wide Web.
*   **GET Request:** An HTTP method used to retrieve data from a specified resource.
*   **POST Request:** An HTTP method used to send data to a server to create or update a resource.
*   **`requests` library:** A popular Python library for making HTTP requests.
*   **`Response` object:** The object returned by `requests` methods, containing the server's response details (status code, headers, content).
*   **HTTP Status Code:** A three-digit number indicating the status of an HTTP request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
*   **Web Scraping:** The process of automatically extracting data from websites.
*   **`BeautifulSoup`:** A Python library for parsing HTML and XML documents, making it easy to extract data.
*   **`find()` / `find_all()`:** `BeautifulSoup` methods to locate the first or all matching HTML elements based on tag name and attributes.
*   **`get_text()`:** A `BeautifulSoup` method to extract the visible text content from an HTML tag.
*   **`robots.txt`:** A file on a website that tells web crawlers which pages or files they can or cannot request.
*   **Rate Limiting:** The practice of restricting the number of requests a user or client can make to a server over a given period to prevent abuse.

#### Hands-on activity
**Scrape a Quote from a Public Domain Quote Website**

Use `requests` and `BeautifulSoup` to extract a specific quote and its author from a public domain quote website.
A good target for this exercise is `http://quotes.toscrape.com/`.

Your task is to:
1.  Send a GET request to `http://quotes.toscrape.com/`.
2.  Parse the HTML content using `BeautifulSoup`.
3.  Find the first quote on the page. Each quote is typically within a `div` element with class `quote`.
4.  From that quote `div`, extract the text of the quote (usually in a `span` with class `text`) and the author's name (usually in a `small` tag with class `author`).
5.  Print the extracted quote and author.

**Code Template:**
```python
import requests
from bs4 import BeautifulSoup

url = "http://quotes.toscrape.com/"

try:
    response = requests.get(url)
    response.raise_for_status() # Check for HTTP errors

    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the first quote div
    # Hint: Look for a div with class 'quote'
    first_quote_div = None # Implement this

    if first_quote_div:
        # Extract the quote text
        # Hint: Look for a span with class 'text' inside first_quote_div
        quote_text = None # Implement this

        # Extract the author name
        # Hint: Look for a small tag with class 'author' inside first_quote_div
        author_name = None # Implement this

        if quote_text and author_name:
            print(f"Quote: {quote_text.get_text()}")
            print(f"Author: {author_name.get_text()}")
        else:
            print("Could not extract quote text or author.")
    else:
        print("No quote div found on the page.")

except requests.exceptions.RequestException as e:
    print(f"Error during web request: {e}")
```

#### Assessment idea
1.  **Question:** You are building a Python script to submit user registration data (username, email, password) to a web server. Which HTTP method should you primarily use for this operation, and why?
    a) GET, because it's simple for sending data.
    b) POST, because it's designed for sending data to create or update resources and is more secure for sensitive information.
    c) PUT, because it's used for updating existing data.
    d) DELETE, because it removes data.
    **Correct Answer:** b) POST, because it's designed for sending data to create or update resources and is more secure for sensitive information.
    **Explanation:** POST requests are specifically designed for sending data to the server, often to create new resources (like a new user registration) or update existing ones. Unlike GET requests, POST requests typically send data in the request body, which is not exposed in the URL, making it more suitable for sensitive information like passwords.

2.  **Question:** What is the purpose of `response.raise_for_status()` in the `requests` library, and why is it good practice to include it in your code when making HTTP requests?
    **Correct Answer:** `response.raise_for_status()` is a method in the `requests` library that raises an `HTTPError` exception if the HTTP request returned a "bad" status code (i.e., a 4xx client error or 5xx server error).
    **Explanation:** It's good practice to include it because it provides a quick and explicit way to check if a request was successful. If the status code indicates an error, `raise_for_status()` immediately stops execution and raises an exception, preventing your program from attempting to process potentially incomplete or erroneous data. This makes error handling more robust and helps in debugging by clearly signaling when a web request failed.

#### AI generation note
Create a 12-minute video tutorial with live coding. Begin with an animated explanation of HTTP GET/POST requests, showing client-server interaction and data flow. Transition to live coding demonstrating `requests.get()` and `requests.post()` with `httpbin.org` for clear input/output. Show how to access `status_code`, `headers`, `text`, and `json()`. Then, introduce web scraping with `BeautifulSoup`. Live code scraping a simple static site (like `quotes.toscrape.com`), demonstrating `BeautifulSoup(html, 'html.parser')`, `find()`, `find_all()`, `get_text()`, and CSS selectors. Throughout, emphasize ethical scraping, `robots.txt`, and rate limiting with visual warnings. The tone should be hands-on and safety-conscious. Include code examples and visual overlays for HTTP concepts.

---

### Chapter 5.4 — Working with APIs and JSON Data

#### Learning objectives
*   Understand what an API (Application Programming Interface) is and its role in modern web development.
*   Learn to consume RESTful APIs using the `requests` library.
*   Work effectively with JSON (JavaScript Object Notation) data, including parsing and serialization.
*   Implement API key authentication for accessing protected resources.
*   Handle common API-related challenges such as rate limiting, pagination, and error responses.

#### Detailed lesson content
Having mastered basic HTTP requests and web scraping, we're now ready to engage with the internet in a more structured and robust way: through Application Programming Interfaces (APIs). An API is essentially a set of rules and protocols that allows different software applications to communicate with each other. Instead of scraping unstructured HTML, APIs provide data in a standardized, machine-readable format, most commonly JSON. This makes it significantly easier and more reliable to integrate external services into your applications, whether it's fetching weather data, accessing social media feeds, or interacting with payment gateways.

Most modern web APIs follow the **REST (Representational State Transfer)** architectural style, often called RESTful APIs. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, which are identified by unique URLs. For example, a GET request to `/users` might retrieve a list of users, while a POST request to `/users` with user data might create a new user. The beauty of REST is its statelessness (each request from a client to a server contains all the information needed to understand the request) and its use of standard HTTP operations, making it predictable and easy to work with.

When interacting with APIs, you'll primarily use the `requests` library, just as we did for basic HTTP requests. The key difference is often in the expected response format: JSON. **JSON (JavaScript Object Notation)** is a lightweight, human-readable data interchange format. It's built on two structures: a collection of name/value pairs (like Python dictionaries) and an ordered list of values (like Python lists). Python's `json` module allows you to easily convert JSON strings into Python dictionaries/lists (`json.loads()`) and Python dictionaries/lists into JSON strings (`json.dumps()`). However, `requests` simplifies this even further: if a response has a `Content-Type` header indicating JSON, `response.json()` will automatically parse the JSON string into a Python object for you.

```python
import requests
import json # Useful for pretty printing or manual parsing if response.json() fails

# Example 1: Consuming a public API (e.g., Bored API for activity suggestions)
api_url = "https://www.boredapi.com/api/activity/"

try:
    response = requests.get(api_url)
    response.raise_for_status() # Check for HTTP errors

    activity_data = response.json() # Automatically parses JSON into a Python dict

    print("Suggested Activity:")
    print(f"  Activity: {activity_data['activity']}")
    print(f"  Type: {activity_data['type']}")
    print(f"  Participants: {activity_data['participants']}")
    print(f"  Price: {activity_data['price']}")

except requests.exceptions.RequestException as e:
    print(f"Error fetching activity: {e}")
except json.JSONDecodeError:
    print("Error: Could not decode JSON from response.")
    print(f"Raw response text: {response.text}")

# Example 2: Making a POST request with JSON data (using httpbin.org for testing)
post_api_url = "https://httpbin.org/post"
my_json_data = {
    "name": "Cohortia Student",
    "course": "Python Pro Bootcamp",
    "progress": "Module 5"
}

try:
    # Use the 'json' parameter for requests to automatically set Content-Type to application/json
    response_post_json = requests.post(post_api_url, json=my_json_data)
    response_post_json.raise_for_status()

    result = response_post_json.json()
    print("\nPOST request with JSON data:")
    print(f"  Sent JSON: {result['json']}") # httpbin reflects the sent JSON
    print(f"  Headers: {result['headers']['Content-Type']}") # Should be application/json

except requests.exceptions.RequestException as e:
    print(f"Error posting data: {e}")
```
In the first example, we fetch a random activity from the Bored API. The `response.json()` call is very convenient. In the second, we demonstrate sending JSON data in a POST request using the `json` parameter, which automatically sets the `Content-Type` header to `application/json`. This is crucial for many APIs that expect JSON payloads.

**API Key Authentication:** Many APIs require authentication to ensure only authorized users access their resources and to track usage. The most common form of authentication for public APIs is an **API key**. This is a unique string assigned to you when you register with an API provider. You typically include the API key in your requests, either as a query parameter in the URL or as a custom header. Always keep your API keys secure and never hardcode them directly into publicly shared code (e.g., GitHub). Use environment variables or configuration files to store them.

```python
# Example 3: API with API key (using OpenWeatherMap as a conceptual example)
# Replace 'YOUR_API_KEY' with a real key from OpenWeatherMap if you want to run this.
# You would typically get this from an environment variable:
# import os
# api_key = os.environ.get("OPENWEATHER_API_KEY")
api_key = "YOUR_API_KEY" # Placeholder - get a real one!

if api_key == "YOUR_API_KEY":
    print("\nWarning: Please replace 'YOUR_API_KEY' with a real OpenWeatherMap API key to run this example.")
else:
    weather_api_url = "http://api.openweathermap.org/data/2.5/weather"
    city = "London"
    
    params = {
        "q": city,
        "appid": api_key, # API key as a query parameter
        "units": "metric" # Get temperature in Celsius
    }

    try:
        weather_response = requests.get(weather_api_url, params=params)
        weather_response.raise_for_status()
        weather_data = weather_response.json()

        print(f"\nWeather in {city}:")
        print(f"  Description: {weather_data['weather'][0]['description']}")
        print(f"  Temperature: {weather_data['main']['temp']}°C")
        print(f"  Humidity: {weather_data['main']['humidity']}%")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
    except KeyError as e:
        print(f"Error parsing weather data: Missing key {e}. Response: {weather_response.text}")
```
In this example, the API key is passed as a query parameter `appid`. Other APIs might require it in a header like `Authorization: Bearer YOUR_API_KEY`. Always consult the API's documentation for specific authentication requirements.

**Common API Challenges and How to Handle Them:**
1.  **Rate Limiting:** APIs often restrict the number of requests you can make within a certain timeframe to prevent abuse. If you exceed the limit, you'll typically receive a 429 Too Many Requests status code. Implement `time.sleep()` between requests, especially in loops, or check response headers (like `X-RateLimit-Remaining`) to manage your request frequency.
2.  **Pagination:** When an API returns a large dataset, it's often split into smaller "pages." You'll need to make multiple requests, incrementing a `page` or `offset` parameter, until all data is retrieved.
3.  **Error Handling:** Beyond `response.raise_for_status()`, always check the API's specific error responses. Many APIs return JSON objects with error messages (e.g., `{"error": "Invalid API Key"}`) for 4xx or 5xx status codes. Parse these messages to provide meaningful feedback to your users.
4.  **Network Issues:** Internet connections can be unreliable. Implement `try-except` blocks for `requests.exceptions.RequestException` to gracefully handle network errors, timeouts, and connection issues.
5.  **Schema Changes:** APIs can evolve. If an API provider changes its data structure, your code might break. Be prepared to adapt your parsing logic.

A common mistake is assuming the API will always return perfect data. Always validate the structure of the JSON response before trying to access keys. For example, use `data.get('key', None)` instead of `data['key']` to avoid `KeyError` if a key might be missing. When dealing with nested JSON, it's good practice to check if intermediate dictionaries or lists exist before trying to access their elements.

Working with APIs is a fundamental skill for any modern developer. It allows your Python applications to become dynamic, pulling in real-time information and interacting with a vast ecosystem of online services. By understanding REST principles, mastering JSON, and handling common challenges, you'll unlock immense possibilities for your projects.

#### Key concepts
*   **API (Application Programming Interface):** A set of rules and protocols that allows software applications to communicate with each other.
*   **REST (Representational State Transfer):** An architectural style for designing networked applications, emphasizing statelessness and standard HTTP methods for resource manipulation.
*   **RESTful API:** An API that adheres to the REST architectural principles.
*   **JSON (JavaScript Object Notation):** A lightweight, human-readable data interchange format commonly used by web APIs.
*   **`response.json()`:** A `requests` library method that automatically parses a JSON response body into a Python dictionary or list.
*   **`json.loads()` / `json.dumps()`:** Functions from Python's `json` module for converting JSON strings to Python objects and vice-versa.
*   **API Key:** A unique identifier used to authenticate a user or application when accessing an API.
*   **Rate Limiting:** A restriction on the number of API requests a client can make within a specific time frame.
*   **Pagination:** The practice of dividing large API responses into smaller, manageable chunks (pages).
*   **Error Handling (API):** Strategies for gracefully managing and responding to API errors, including status codes and specific error messages in the response body.

#### Hands-on activity
**Fetch and Display a Random Dad Joke**

Use the `icanhazdadjoke.com` API to fetch a random dad joke and display it. This API is simple and doesn't require an API key.

Your task is to:
1.  Define the API endpoint for a random joke: `https://icanhazdadjoke.com/`.
2.  Make a GET request to this endpoint. Crucially, you need to tell the API you want a JSON response. The `icanhazdadjoke.com` API requires a specific `Accept` header for this: `Accept: application/json`. You can pass headers to `requests.get()` using the `headers` parameter.
3.  Parse the JSON response. The joke text will typically be under a key like `'joke'`.
4.  Print the fetched dad joke.

**Code Template:**
```python
import requests

joke_api_url = "https://icanhazdadjoke.com/"

# Define headers to request JSON response
headers = {
    "Accept": "application/json"
}

try:
    response = requests.get(joke_api_url, headers=headers)
    response.raise_for_status() # Check for HTTP errors

    joke_data = None # Parse the JSON response here

    if joke_data and 'joke' in joke_data:
        print("Here's a dad joke for you:")
        print(joke_data['joke'])
    else:
        print("Could not retrieve a joke or parse the response.")
        print(f"Raw response: {response.text}")

except requests.exceptions.RequestException as e:
    print(f"Error fetching dad joke: {e}")
except Exception as e: # Catch other potential errors, e.g., JSON parsing issues
    print(f"An unexpected error occurred: {e}")
```

#### Assessment idea
1.  **Question:** You receive the following JSON response from an API: `{"user": {"id": 123, "name": "Alice"}, "status": "active"}`. How would you access the user's name in Python after parsing this JSON into a dictionary called `data`?
    a) `data['name']`
    b) `data['user']['name']`
    c) `data.user.name`
    d) `data.get('name')`
    **Correct Answer:** b) `data['user']['name']`
    **Explanation:** The JSON structure represents nested dictionaries. To access 'name', you first need to access the 'user' dictionary within the main `data` dictionary, and then access the 'name' key within the 'user' dictionary.

2.  **Question:** Describe two common challenges you might face when working with third-party APIs and how you would approach solving them in your Python code.
    **Correct Answer:**
    1.  **Challenge 1: Rate Limiting.** APIs often limit the number of requests you can make in a given time period. Exceeding this limit results in a 429 status code.
        **Solution:** Implement `time.sleep()` between requests, especially when making multiple calls in a loop. Some APIs provide `X-RateLimit-Remaining` headers; you can read these to dynamically adjust your request frequency. If a 429 is received, implement an exponential backoff strategy (wait for increasing periods before retrying).
    2.  **Challenge 2: Inconsistent or Missing Data (Error Handling).** API responses might not always contain all expected keys, or the data structure might vary slightly, leading to `KeyError` exceptions.
        **Solution:** Use the `.get()` method for dictionary access with a default value (e.g., `data.get('key_name', None)`) instead of direct bracket access (`data['key_name']`). This prevents `KeyError` if a key is absent. Additionally, implement robust `try-except` blocks to catch `json.JSONDecodeError` if the response isn't valid JSON, and `KeyError` for missing data, providing graceful error messages or fallback logic.

#### AI generation note
Design a 10-minute interactive lab walkthrough. Start with a brief explanation of APIs and JSON with visual analogies (e.g., API as a restaurant menu, JSON as a structured order slip). Then, guide the user through live coding exercises:
1.  Fetching data from a public API (e.g., `boredapi.com`), showing `requests.get()` and `response.json()`.
2.  Demonstrating how to parse and navigate the JSON response.
3.  A conceptual example of API key usage (showing where it would go in `params` or `headers`).
4.  Discuss common API errors (rate limits, missing data) and show code for `try-except` blocks and using `.get()` for safe dictionary access.
The interactive element should be a coding exercise where learners modify the API call to fetch a different type of activity or add an additional parameter. Use a hands-on, problem-solving tone. Include visual representations of JSON data structure.

---

### Chapter 5.5 — Database Interaction with SQLite

#### Learning objectives
*   Understand the fundamental concepts of relational databases and SQL (Structured Query Language).
*   Learn how to connect to and interact with SQLite databases using Python's built-in `sqlite3` module.
*   Perform basic CRUD (Create, Read, Update, Delete) operations on database tables using SQL commands.
*   Implement parameterized queries to prevent SQL injection vulnerabilities.
*   Manage database connections and transactions effectively, including committing changes and closing connections.

#### Detailed lesson content
Up to this point, our Python applications have primarily dealt with data in memory or temporary files. While effective for short-lived tasks, many applications require persistent storage – the ability to save data so it remains available even after the program closes. This is where databases come in. A database is an organized collection of data, typically stored electronically in a computer system. Relational databases, which organize data into tables with rows and columns, are one of the most common types. SQL (Structured Query Language) is the standard language used to communicate with relational databases.

For Python developers, especially beginners, **SQLite** is an excellent choice for learning database interaction. SQLite is a C library that provides a lightweight, file-based relational database management system. Unlike client-server databases like PostgreSQL or MySQL, SQLite databases are stored in a single file on your disk, making them incredibly easy to set up and use without needing a separate server process. Python has a built-in module, `sqlite3`, that provides a SQL interface compliant with the DB-API 2.0 specification, allowing us to interact with SQLite databases directly from our Python code.

The basic workflow for interacting with an SQLite database in Python involves:
1.  **Connecting to the database:** Use `sqlite3.connect('database_name.db')`. If the file doesn't exist, SQLite will create it. This returns a `Connection` object.
2.  **Creating a cursor:** The `Connection` object has a `cursor()` method that returns a `Cursor` object. The cursor is what you use to execute SQL commands.
3.  **Executing SQL commands:** Use `cursor.execute("SQL COMMAND HERE")`.
4.  **Committing changes:** For SQL commands that modify the database (INSERT, UPDATE, DELETE, CREATE TABLE), you must call `connection.commit()` to save the changes permanently to the database file. Without `commit()`, your changes will not be saved.
5.  **Fetching results (for SELECT queries):** After executing a SELECT query, you can use `cursor.fetchone()` to retrieve the next row, `cursor.fetchall()` to retrieve all remaining rows as a list of tuples, or iterate over the cursor directly.
6.  **Closing the connection:** Always close the connection using `connection.close()` when you're done to release database resources. A common and recommended practice is to use a `with` statement for connections, as it automatically handles closing the connection even if errors occur.

Let's start with creating a database and a simple table.

```python
import sqlite3

# Connect to a database (or create it if it doesn't exist)
# Using 'with' statement ensures the connection is properly closed
with sqlite3.connect('todo_list.db') as conn:
    cursor = conn.cursor()

    # Create a table if it doesn't already exist
    # id: INTEGER PRIMARY KEY AUTOINCREMENT - unique ID, automatically increments
    # task: TEXT NOT NULL - text field, cannot be empty
    # completed: BOOLEAN DEFAULT FALSE - boolean, defaults to false
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL,
            completed BOOLEAN DEFAULT FALSE
        )
    ''')
    conn.commit() # Save the table creation
    print("Database 'todo_list.db' and table 'tasks' ensured.")

# --- INSERT (Create) ---
def add_task(task_description):
    with sqlite3.connect('todo_list.db') as conn:
        cursor = conn.cursor()
        # Parameterized query to prevent SQL injection
        cursor.execute("INSERT INTO tasks (task) VALUES (?)", (task_description,))
        conn.commit()
        print(f"Task '{task_description}' added.")

add_task("Learn SQLite with Python")
add_task("Build a GUI with Tkinter")
add_task("Integrate API for weather data")

# --- SELECT (Read) ---
def get_all_tasks():
    with sqlite3.connect('todo_list.db') as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id, task, completed FROM tasks")
        tasks = cursor.fetchall() # Fetch all results
        print("\nAll Tasks:")
        for task_id, task_desc, task_completed in tasks:
            status = "✓" if task_completed else " "
            print(f"[{status}] {task_id}. {task_desc}")
    return tasks

get_all_tasks()

# --- UPDATE ---
def mark_task_completed(task_id):
    with sqlite3.connect('todo_list.db') as conn:
        cursor = conn.cursor()
        cursor.execute("UPDATE tasks SET completed = TRUE WHERE id = ?", (task_id,))
        conn.commit()
        print(f"\nTask {task_id} marked as completed.")

mark_task_completed(1)
get_all_tasks() # Show updated list

# --- DELETE ---
def delete_task(task_id):
    with sqlite3.connect('todo_list.db') as conn:
        cursor = conn.cursor()
        cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
        conn.commit()
        print(f"\nTask {task_id} deleted.")

delete_task(2)
get_all_tasks() # Show list after deletion
```
In this comprehensive example, we cover the full CRUD lifecycle. Notice the use of `?` as a placeholder in `INSERT`, `UPDATE`, and `DELETE` queries, followed by a tuple of values. This is crucial for **parameterized queries**, which are the primary defense against **SQL injection**. SQL injection is a security vulnerability where an attacker can manipulate your SQL queries by injecting malicious SQL code into user input. By using placeholders, the `sqlite3` module correctly sanitizes the input, treating it as data rather than executable SQL, thus preventing injection attacks. Never concatenate user input directly into your SQL queries!

When performing `SELECT` queries, `cursor.fetchone()` returns a single row as a tuple, while `cursor.fetchall()` returns a list of all remaining rows, where each row is a tuple. You can also iterate directly over the `cursor` object, which yields one row at a time, making it memory-efficient for large result sets.

Common mistakes include:
*   **Forgetting `conn.commit()`:** This is perhaps the most frequent error. If you perform an `INSERT`, `UPDATE`, or `DELETE` and don't `commit()`, your changes will not be saved to the database file.
*   **Not closing the connection:** While the `with` statement handles this automatically, if you open a connection manually (`conn = sqlite3.connect(...)`), you must remember to call `conn.close()`. Failing to do so can lead to resource leaks or database locking issues.
*   **SQL Injection:** As discussed, concatenating user input directly into SQL strings is a major security flaw. Always use parameterized queries.
*   **Incorrect SQL syntax:** SQL has its own syntax rules. Typos or incorrect keywords will lead to `sqlite3.OperationalError` or `sqlite3.ProgrammingError`. Always double-check your SQL.
*   **Schema changes:** If you change your table structure (e.g., add a column), existing code that expects the old structure might break. You might need to drop and recreate tables during development, or use `ALTER TABLE` for production systems.

Error handling is important: `sqlite3` operations can raise exceptions like `sqlite3.OperationalError` (e.g., database file not found, syntax error) or `sqlite3.IntegrityError` (e.g., trying to insert a duplicate primary key or a NULL into a `NOT NULL` column). Wrap your database operations in `try-except` blocks to handle these gracefully.

SQLite is incredibly versatile. You can use it for local application data, caching, configuration storage, and even as a simple backend for small web applications. Its file-based nature makes it ideal for embedded systems or applications that need a self-contained database without the overhead of a full database server. Mastering database interaction is a crucial step towards building powerful, data-driven applications in Python.

#### Key concepts
*   **Database:** An organized collection of structured information, or data, typically stored electronically in a computer system.
*   **Relational Database:** A type of database that organizes data into one or more tables (or "relations") of rows and columns.
*   **SQL (Structured Query Language):** The standard language for managing and manipulating relational databases.
*   **SQLite:** A lightweight, file-based relational database management system that is built into Python.
*   **`sqlite3` module:** Python's built-in library for interacting with SQLite databases.
*   **`Connection` object:** Represents an open connection to an SQLite database.
*   **`Cursor` object:** An object used to execute SQL commands and fetch results from a database.
*   **CRUD Operations:** The four basic functions of persistent storage: Create, Read, Update, Delete.
*   **`CREATE TABLE`:** SQL command to define a new table in the database.
*   **`INSERT INTO`:** SQL command to add new rows of data into a table.
*   **`SELECT FROM`:** SQL command to retrieve data from one or more tables.
*   **`UPDATE SET`:** SQL command to modify existing data in a table.
*   **`DELETE FROM`:** SQL command to remove rows of data from a table.
*   **`conn.commit()`:** A method on the `Connection` object that saves all pending changes to the database.
*   **`cursor.execute()`:** A method on the `Cursor` object that executes a SQL command.
*   **`cursor.fetchone()` / `cursor.fetchall()`:** Methods to retrieve query results one row at a time or all at once.
*   **Parameterized Queries:** A secure method of executing SQL queries where values are passed separately from the SQL string, preventing SQL injection.
*   **SQL Injection:** A code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.

#### Hands-on activity
**Build a Simple Contact Manager (Database Part)**

Create a Python script that uses SQLite to manage a simple contact list.
Your script should:
1.  Connect to an SQLite database named `contacts.db`.
2.  Create a table named `contacts` with columns for `id` (primary key, auto-increment), `name` (TEXT, NOT NULL), `phone` (TEXT), and `email` (TEXT).
3.  Implement a function `add_contact(name, phone, email)` that inserts a new contact into the table using a parameterized query.
4.  Implement a function `view_contacts()` that retrieves and prints all contacts from the table.
5.  Implement a function `update_contact_phone(contact_id, new_phone)` that updates the phone number for a specific contact.
6.  Implement a function `delete_contact(contact_id)` that removes a contact by its ID.
7.  Call these functions to demonstrate adding a few contacts, viewing them, updating one, and deleting another.

**Code Template:**
```python
import sqlite3

DATABASE_NAME = 'contacts.db'

def create_contacts_table():
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phone TEXT,
                email TEXT
            )
        ''')
        conn.commit()
        print("Contacts table ensured.")

def add_contact(name, phone, email):
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        # Use parameterized query here
        cursor.execute("INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)", (name, phone, email))
        conn.commit()
        print(f"Contact '{name}' added.")

def view_contacts():
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, phone, email FROM contacts")
        contacts = cursor.fetchall()
        print("\n--- All Contacts ---")
        if not contacts:
            print("No contacts found.")
            return
        for contact_id, name, phone, email in contacts:
            print(f"ID: {contact_id}, Name: {name}, Phone: {phone if phone else 'N/A'}, Email: {email if email else 'N/A'}")
        print("--------------------")
    return contacts

def update_contact_phone(contact_id, new_phone):
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        # Use parameterized query here
        cursor.execute("UPDATE contacts SET phone = ? WHERE id = ?", (new_phone, contact_id))
        conn.commit()
        print(f"Contact ID {contact_id} phone updated to {new_phone}.")

def delete_contact(contact_id):
    with sqlite3.connect(DATABASE_NAME) as conn:
        cursor = conn.cursor()
        # Use parameterized query here
        cursor.execute("DELETE FROM contacts WHERE id = ?", (contact_id,))
        conn.commit()
        print(f"Contact ID {contact_id} deleted.")

if __name__ == "__main__":
    create_contacts_table()

    # Demonstrate CRUD operations
    add_contact("Alice Smith", "111-222-3333", "alice@example.com")
    add_contact("Bob Johnson", "444-555-6666", "bob@example.com")
    add_contact("Charlie Brown", None, "charlie@example.com") # Example with missing phone

    view_contacts()

    # Assuming Alice is ID 1 (based on auto-increment)
    update_contact_phone(1, "111-222-4444")
    view_contacts()

    # Assuming Bob is ID 2
    delete_contact(2)
    view_contacts()
```

#### Assessment idea
1.  **Question:** You execute an `INSERT` statement to add a new row to your SQLite database. After `cursor.execute()`, your program ends, and you find the new row was not saved. What crucial step did you likely miss?
    a) Calling `cursor.close()`
    b) Calling `conn.close()`
    c) Calling `conn.commit()`
    d) Re-running the script with administrator privileges
    **Correct Answer:** c) Calling `conn.commit()`
    **Explanation:** For any SQL statements that modify the database (INSERT, UPDATE, DELETE, CREATE TABLE), `conn.commit()` is essential to save the changes permanently to the database file. Without it, changes are only staged and will be lost if the connection is closed or the program terminates.

2.  **Question:** Explain the concept of SQL injection and how parameterized queries help prevent it. Provide a simple Python `sqlite3` code snippet demonstrating a parameterized query.
    **Correct Answer:**
    **SQL Injection:** SQL injection is a security vulnerability where an attacker can manipulate an application's database queries by injecting malicious SQL code into user-supplied input. If an application directly concatenates user input into an SQL query string without proper sanitization, the attacker's input can change the intended logic of the query, potentially leading to unauthorized data access, modification, or deletion.
    **Prevention with Parameterized Queries:** Parameterized queries (also known as prepared statements) prevent SQL injection by separating the SQL command structure from the actual data values. Instead of inserting user input directly into the SQL string, placeholders (like `?` in `sqlite3`) are used in the query string, and the actual values are passed as a separate tuple or list to the `execute()` method. The database driver then handles the values safely, treating them purely as data and not as executable SQL code. This ensures that even if a user tries to inject malicious SQL, it will be treated as a literal string value and not alter the query's structure.
    **Code Snippet:**
    ```python
    import sqlite3

    user_input = "'; DROP TABLE users; --" # Malicious input attempt
    user_id = 1

    with sqlite3.connect('example.db') as conn:
        cursor = conn.cursor()
        # Correct and safe way using a parameterized query
        cursor.execute("UPDATE users SET name = ? WHERE id = ?", (user_input, user_id))
        conn.commit()
        print("Update attempted with parameterized query.")

        # If we were vulnerable, the table would be dropped.
        # With parameterized query, 'user_input' is just a string for the name.
    ```

#### AI generation note
Create a 12-minute lab walkthrough video. Start with a visual analogy for databases (e.g., a filing cabinet). Then, live code step-by-step:
1.  Connecting to SQLite (`sqlite3.connect`).
2.  Creating a table (`CREATE TABLE IF NOT EXISTS`) and committing.
3.  Inserting data (`INSERT INTO`) with a clear demonstration of parameterized queries (`?` placeholders).
4.  Retrieving data (`SELECT FROM`) using `fetchall()` and iterating the cursor.
5.  Updating data (`UPDATE SET`).
6.  Deleting data (`DELETE FROM`).
Emphasize `conn.commit()` with a visual cue (e.g., a save icon). Crucially, demonstrate a simulated SQL injection attempt if user input were directly concatenated, then show how parameterized queries prevent it. Use clear on-screen code, terminal output, and visual highlights for SQL commands. The tone should be hands-on, practical, and security-conscious. Include a reflection prompt on the importance of `commit()`.

---

## Module 6: Advanced Concepts & Project Workflow

This module elevates your Python skills by diving into sophisticated language features, robust development practices, and essential project management techniques. We'll explore powerful constructs like decorators and generators, master asynchronous programming for high-performance applications, and fortify your code with advanced error handling and comprehensive testing. Finally, you'll learn how to structure, package, and prepare your Python projects for real-world deployment, equipping you to build and deliver professional-grade applications.

---

### Chapter 6.1 — Decorators & Generators

#### Learning objectives
*   Understand the purpose and syntax of Python decorators for extending function behavior.
*   Implement custom decorators to add functionality like logging, timing, or access control.
*   Grasp the concept of generators for creating memory-efficient iterators.
*   Utilize the `yield` keyword to define generator functions and generator expressions.
*   Identify practical scenarios where decorators and generators significantly improve code quality and performance.

#### Detailed lesson content

Welcome to a fascinating exploration of two of Python's most elegant and powerful features: decorators and generators. These constructs allow you to write more concise, efficient, and readable code, especially when dealing with repetitive tasks or large datasets. Let's begin by unraveling the magic of decorators.

At its core, a **decorator** is a design pattern that allows you to add new functionality to an existing object without modifying its structure. In Python, decorators are essentially functions that take another function as an argument, extend its behavior, and return the modified function. This is incredibly useful for cross-cutting concerns—things like logging, timing, authentication, or caching—that apply to multiple functions but aren't central to any single function's logic. Instead of repeating the same boilerplate code in every function, you can encapsulate that logic in a decorator and apply it with a simple `@` syntax.

Consider a scenario where you want to log every time a specific function is called and how long it takes to execute. Without decorators, you'd have to manually add logging and timing code at the beginning and end of each function. This quickly becomes cumbersome and error-prone. With a decorator, you define this logging and timing logic once.

```python
import time
import functools

def timer_decorator(func):
    @functools.wraps(func) # Preserves original function's metadata
    def wrapper(*args, **kwargs):
        start_time = time.time()
        print(f"Calling function '{func.__name__}'...")
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function '{func.__name__}' finished in {end_time - start_time:.4f} seconds.")
        return result
    return wrapper

@timer_decorator
def calculate_sum(a, b):
    time.sleep(1) # Simulate some work
    return a + b

@timer_decorator
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(f"Sum: {calculate_sum(5, 7)}")
print(f"Factorial of 5: {factorial(5)}")
```

In this example, `@timer_decorator` is syntactic sugar for `calculate_sum = timer_decorator(calculate_sum)`. The `timer_decorator` function takes `calculate_sum` as input, defines an inner `wrapper` function that adds timing logic around the original `calculate_sum` call, and then returns this `wrapper`. When `calculate_sum(5, 7)` is invoked, it's actually the `wrapper` function that executes, performing the timing, calling the original `calculate_sum`, and then reporting the duration. A common mistake beginners make is forgetting `functools.wraps`. Without it, the decorated function loses its original name and docstring, making debugging and introspection harder. Always remember `functools.wraps` when creating decorators!

Now, let's shift our focus to **generators**. Generators are a special type of iterator that allow you to iterate over a sequence of values without storing the entire sequence in memory. This is incredibly powerful when dealing with very large datasets, infinite sequences, or streaming data, where loading everything into RAM at once would be impractical or impossible. Unlike regular functions that compute a value and return it once, generator functions `yield` a value, pause their execution, and then resume from where they left off the next time a value is requested.

The key to understanding generators is the `yield` keyword. When a generator function encounters `yield`, it produces a value to the caller, and its state (including local variables and the instruction pointer) is frozen. The next time `next()` is called on the generator, it picks up exactly where it left off, continuing execution until it hits another `yield` or finishes.

Consider reading a very large file, line by line. If you read all lines into a list using `readlines()`, you might run out of memory for a multi-gigabyte file. A generator provides an elegant solution:

```python
def read_large_file(filepath):
    with open(filepath, 'r') as f:
        for line in f:
            yield line.strip() # Yield one line at a time

# Example usage (imagine 'large_data.txt' has millions of lines)
# Create a dummy large file for demonstration
with open("large_data.txt", "w") as f:
    for i in range(100000):
        f.write(f"This is line {i+1} of the large file.\n")

line_generator = read_large_file("large_data.txt")

# Process the first few lines without loading the entire file
for _ in range(3):
    print(next(line_generator))

# You can continue iterating through the rest of the file
# for line in line_generator:
#     process(line)

# Generator expressions are a concise way to create generators
# Similar to list comprehensions but use parentheses instead of square brackets
squares_generator = (x * x for x in range(10))
print(f"First square: {next(squares_generator)}")
print(f"Second square: {next(squares_generator)}")
print(f"All remaining squares: {list(squares_generator)}") # Converts remaining to list
```

In the `read_large_file` example, `yield line.strip()` returns one line at a time. The function's state is preserved, so when `next(line_generator)` is called again, it continues from the next line in the file, without needing to load the entire file into memory. This is a massive memory saving for large files or infinite data streams. A common mistake with generators is trying to iterate over them multiple times. Once a generator has yielded all its values, it's exhausted. If you need to iterate again, you must create a new generator instance.

Both decorators and generators are powerful tools for writing more Pythonic and efficient code. Decorators promote code reuse and separation of concerns, making your functions cleaner and more focused. Generators enable you to handle vast amounts of data efficiently, preventing memory exhaustion and improving performance in data-intensive applications. Mastering these concepts will significantly elevate your ability to design and implement robust Python solutions.

#### Key concepts
*   **Decorator**: A function that takes another function as an argument, adds some functionality, and returns the modified function. It's syntactic sugar using the `@` symbol.
*   **`@functools.wraps`**: A decorator used within other decorators to preserve the original function's metadata (like `__name__` and `__doc__`).
*   **Generator**: A special type of iterator that generates values on the fly, one at a time, instead of storing them all in memory.
*   **`yield` keyword**: Used in a generator function to produce a value to the caller and pause the function's execution until the next value is requested.
*   **Generator Expression**: A concise way to create a generator, similar to a list comprehension but using parentheses `()` instead of square brackets `[]`.
*   **Iterator Protocol**: The underlying mechanism that allows objects to be iterated over, typically involving `__iter__` and `__next__` methods. Generators automatically adhere to this protocol.

#### Hands-on activity

**Activity: Building a Retry Decorator and a Fibonacci Generator**

1.  **Retry Decorator**: Create a decorator called `retry_on_exception` that takes an optional `max_retries` argument (defaulting to 3). This decorator should attempt to execute the decorated function. If it raises a specific `Exception` (e.g., `ValueError` or a custom one you define), it should retry the function up to `max_retries` times, waiting 1 second between retries. If all retries fail, re-raise the last exception.
    *   **Hint**: You'll need a `try...except` block and a loop inside your `wrapper` function.
    *   **Starter Code**:
    ```python
    import time
    import functools

    def retry_on_exception(max_retries=3, allowed_exception=Exception):
        def decorator(func):
            @functools.wraps(func)
            def wrapper(*args, **kwargs):
                # Your retry logic here
                pass # Replace this
            return wrapper
        return decorator

    # Example function to test the decorator
    call_count = 0
    @retry_on_exception(max_retries=2, allowed_exception=ValueError)
    def unreliable_function():
        global call_count
        call_count += 1
        print(f"Attempt {call_count} to call unreliable_function...")
        if call_count < 3:
            raise ValueError("Simulating a temporary error!")
        return "Success!"

    # print(unreliable_function()) # Uncomment to test
    ```

2.  **Fibonacci Generator**: Write a generator function `fibonacci_sequence(n)` that yields the first `n` Fibonacci numbers. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones (e.g., 0, 1, 1, 2, 3, 5, 8...).
    *   **Hint**: You'll need two variables to keep track of the last two numbers in the sequence.
    *   **Starter Code**:
    ```python
    def fibonacci_sequence(n):
        # Your generator logic here
        pass # Replace this

    # Example usage:
    # for num in fibonacci_sequence(10):
    #     print(num)
    ```

#### Assessment idea

1.  **Question**: You are building a web application and want to ensure that only authenticated users can access certain API endpoints. Which Python feature would be most suitable for adding this authentication check to multiple endpoint functions without modifying their core logic, and why? Provide a simple pseudocode example of how it might be used.
    *   **Correct Answer**: The most suitable feature is a **decorator**. Decorators allow you to wrap functions and add pre- or post-processing logic without altering the function's original source code. This is perfect for cross-cutting concerns like authentication, where the logic is common across many functions but isn't part of their primary responsibility.
    *   **Pseudocode Example**:
        ```python
        def authenticate_user(func):
            def wrapper(*args, **kwargs):
                if user_is_authenticated(): # Check authentication status
                    return func(*args, **kwargs)
                else:
                    raise PermissionError("User not authenticated.")
            return wrapper

        @authenticate_user
        def get_user_profile(user_id):
            # Logic to fetch user profile
            return {"id": user_id, "name": "John Doe"}
        ```

2.  **Question**: You are tasked with processing a log file that could be several gigabytes in size, line by line, to extract specific error messages. If you were to load the entire file into memory using `file.readlines()`, your application might crash due to `MemoryError`. How can you process this file efficiently in Python without consuming excessive memory? Explain the concept and provide a brief code snippet.
    *   **Correct Answer**: You should use a **generator** to process the file line by line. A generator yields one line at a time, pausing its execution and maintaining its state, rather than loading the entire file into a list. This significantly reduces memory consumption because only one line (or a small buffer of lines) is held in memory at any given moment.
    *   **Code Snippet**:
        ```python
        def process_large_log(filepath):
            with open(filepath, 'r') as f:
                for line in f:
                    yield line.strip() # Yield each line as it's read

        # Usage:
        for log_entry in process_large_log("my_app.log"):
            if "ERROR" in log_entry:
                print(f"Found error: {log_entry}")
        ```

#### AI generation note
Create a 12-minute mixed-media lesson. Start with an animated explanation of decorators: visualize a function as a gift box, and the decorator as wrapping paper adding new features (like a ribbon for timing or a lock for authentication) without changing the gift inside. Show the `@` syntax transforming into the `func = decorator(func)` equivalent. Then, transition to generators with a visual comparison of loading a huge list into memory vs. yielding items one by one from a file stream, using a memory usage graph. Demonstrate the `yield` keyword's pause/resume behavior with a simple counter generator. Include live coding examples for both a `logger` decorator and a `csv_reader` generator. The interactive element should be a fill-in-the-blanks exercise for a simple decorator definition. Ensure captions and alt text for all visuals.

---

### Chapter 6.2 — Asynchronous Programming with `asyncio`

#### Learning objectives
*   Differentiate between concurrency and parallelism and understand when to apply each.
*   Explain the concept of blocking I/O and its implications for application performance.
*   Understand the fundamental components of `asyncio`: the event loop, coroutines, `async`, and `await`.
*   Write basic asynchronous Python code to perform non-blocking I/O operations.
*   Apply `asyncio` to practical scenarios such as making multiple network requests concurrently.

#### Detailed lesson content

As your Python programs grow in complexity, especially when they interact with external resources like databases, web APIs, or file systems, you'll inevitably encounter situations where operations take time to complete. These are often referred to as I/O-bound operations. If your program waits idly for each of these operations to finish one after another, it becomes slow and inefficient. This is where **asynchronous programming** with Python's `asyncio` library comes into play, offering a powerful way to handle many tasks seemingly at once without true parallelism.

First, let's clarify the distinction between **concurrency** and **parallelism**. Parallelism is about doing multiple tasks *at the exact same time*, typically requiring multiple CPU cores or processors. Think of it like having multiple chefs working simultaneously on different dishes. Concurrency, on the other hand, is about *managing multiple tasks that appear to run at the same time* but might actually be taking turns on a single CPU core. Imagine a single chef juggling multiple dishes, switching attention between them during their idle times (e.g., while one dish is baking, the chef preps another). `asyncio` enables concurrency, not true parallelism (though it can be combined with parallelism using processes).

The core problem `asyncio` addresses is **blocking I/O**. When your program makes a request to a database, fetches data from a website, or reads a file, it typically has to *wait* for that operation to complete before it can do anything else. This waiting period, where the CPU is idle, is called blocking. `asyncio` allows your program to "yield" control during these waiting periods, letting the CPU switch to another task until the I/O operation is ready.

The heart of `asyncio` is the **event loop**. This loop monitors asynchronous tasks and dispatches them when they are ready to run. When an `asyncio` task encounters an I/O operation (like a network request), it tells the event loop, "I'm going to wait for this to finish, you can go run something else." The event loop then puts that task aside and picks up another one. When the I/O operation completes, the event loop is notified, and it can resume the original task.

To write asynchronous code, Python introduced the `async` and `await` keywords.
*   The `async` keyword is used to define a **coroutine**, which is a special type of function that can be paused and resumed. Coroutines are the building blocks of `asyncio` applications.
*   The `await` keyword can only be used inside an `async` function (a coroutine). It's used to pause the execution of the current coroutine until another awaitable object (like another coroutine or a future) completes. When `await` is called, control is given back to the event loop, allowing other tasks to run.

Let's look at a simple example of fetching multiple URLs concurrently using `asyncio` and the `aiohttp` library (a popular asynchronous HTTP client for Python).

```python
import asyncio
import aiohttp
import time

async def fetch_url(session, url):
    """An asynchronous function to fetch content from a URL."""
    start_time = time.time()
    print(f"Starting fetch for {url}")
    async with session.get(url) as response:
        content = await response.text()
        end_time = time.time()
        print(f"Finished fetch for {url} in {end_time - start_time:.2f}s. Content length: {len(content)} characters.")
        return content

async def main():
    """The main asynchronous function that orchestrates fetching multiple URLs."""
    urls = [
        "http://example.com",
        "http://www.python.org",
        "http://quotes.toscrape.com",
        # "http://slowapi.com/delay/5" # Imagine a slow API endpoint
    ]

    async with aiohttp.ClientSession() as session:
        # Create a list of coroutine objects
        tasks = [fetch_url(session, url) for url in urls]
        # Run all tasks concurrently and wait for them to complete
        results = await asyncio.gather(*tasks)
        print("\nAll URLs fetched successfully!")
        # for url, content in zip(urls, results):
        #     print(f"--- Content from {url} (first 100 chars):\n{content[:100]}...\n")

if __name__ == "__main__":
    # This is the entry point for running asyncio programs
    start_total_time = time.time()
    asyncio.run(main())
    end_total_time = time.time()
    print(f"\nTotal execution time: {end_total_time - start_total_time:.2f} seconds.")

# To run this code, you need to install aiohttp: pip install aiohttp
```

In this example, `fetch_url` is an `async` function. When `await response.text()` is called, `fetch_url` pauses, and the event loop can switch to another `fetch_url` task. This allows all URLs to be fetched concurrently. If we had fetched them sequentially (without `asyncio`), the total time would be the sum of individual fetch times. With `asyncio`, it's closer to the time taken by the *slowest* individual fetch, assuming network bandwidth isn't a bottleneck.

A common mistake is forgetting to `await` a coroutine. If you call an `async` function like `fetch_url(session, url)` without `await`, it returns a coroutine object, but it doesn't actually run the coroutine. The event loop needs the `await` keyword to know when to pause and switch tasks. Another pitfall is mixing synchronous and asynchronous code incorrectly; synchronous functions will block the entire event loop, negating the benefits of `asyncio`. Always ensure that any I/O-bound operations within your `async` functions are themselves `await`-able.

`asyncio` is particularly valuable for I/O-bound applications like web servers, API clients, web scrapers, and real-time data processing systems. It allows a single Python process to handle a large number of concurrent connections efficiently, leading to highly scalable and responsive applications. While it has a steeper learning curve than synchronous programming, the performance benefits for certain types of workloads are substantial.

#### Key concepts
*   **Concurrency**: The ability to manage multiple tasks, making progress on more than one at a time, often by interleaving their execution on a single processor.
*   **Parallelism**: The ability to execute multiple tasks simultaneously, typically requiring multiple processors or CPU cores.
*   **Blocking I/O**: An operation that causes the program to halt and wait until the I/O (Input/Output) task (e.g., reading from disk, network request) is completed.
*   **`asyncio`**: Python's standard library for writing concurrent code using the `async`/`await` syntax.
*   **Event Loop**: The central component of `asyncio` that manages and dispatches asynchronous tasks, switching between them when one is waiting for an I/O operation.
*   **Coroutine**: A special function defined with `async def` that can be paused and resumed. It's the fundamental unit of concurrency in `asyncio`.
*   **`async` keyword**: Used to define a coroutine function.
*   **`await` keyword**: Used inside an `async` function to pause its execution until an `await`-able object (like another coroutine) completes, yielding control back to the event loop.
*   **`asyncio.run()`**: The function used to run the top-level `async` function (the entry point) of an `asyncio` application.
*   **`asyncio.gather()`**: A function that runs multiple awaitable objects concurrently and waits for all of them to complete.

#### Hands-on activity

**Activity: Concurrent API Calls with `asyncio`**

You're going to build a small program that fetches data from a public API for multiple items concurrently. We'll use the JSONPlaceholder API, which provides fake online REST APIs for testing.

1.  **Set up**: Ensure you have `aiohttp` installed (`pip install aiohttp`).
2.  **Define `fetch_post` coroutine**: Create an `async` function `fetch_post(session, post_id)` that takes an `aiohttp.ClientSession` and a `post_id`. It should fetch a specific post from `https://jsonplaceholder.typicode.com/posts/{post_id}` and return its JSON content. Include `print` statements to indicate when a fetch starts and finishes for each `post_id`.
3.  **Define `main` coroutine**: Create an `async` function `main()` that defines a list of `post_id`s (e.g., `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`). Inside `main`, create an `aiohttp.ClientSession` and then use `asyncio.gather` to concurrently call `fetch_post` for all these `post_id`s. Print the total time taken for all fetches.
4.  **Run the program**: Use `asyncio.run(main())` to execute your asynchronous program.

*   **Starter Code**:
    ```python
    import asyncio
    import aiohttp
    import time

    async def fetch_post(session, post_id):
        url = f"https://jsonplaceholder.typicode.com/posts/{post_id}"
        print(f"Starting fetch for post {post_id} from {url}")
        # Your async request logic here
        async with session.get(url) as response:
            data = await response.json()
            print(f"Finished fetch for post {post_id}")
            return data

    async def main():
        post_ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        start_time = time.time()
        async with aiohttp.ClientSession() as session:
            # Your asyncio.gather logic here
            tasks = [fetch_post(session, pid) for pid in post_ids]
            results = await asyncio.gather(*tasks)
        end_time = time.time()
        print(f"\nTotal time taken: {end_time - start_time:.2f} seconds.")
        # Optionally, print a sample of results
        # print(f"First post title: {results[0]['title']}")

    if __name__ == "__main__":
        asyncio.run(main())
    ```

#### Assessment idea

1.  **Question**: You have a Python script that needs to download 100 images from different URLs. Each download takes approximately 0.5 seconds. If you download them sequentially, it would take about 50 seconds. How can you significantly reduce the total execution time of this script using Python's `asyncio` library, assuming the downloads are I/O-bound? Describe the key `asyncio` components you would use.
    *   **Correct Answer**: To reduce the total execution time, you would use `asyncio` to perform the downloads concurrently. The key components would be:
        *   **`async` functions (coroutines)**: Define a function, say `download_image(url)`, as `async def` to make it an awaitable coroutine. Inside this function, you'd use an asynchronous HTTP client (like `aiohttp`) and `await` its network operations.
        *   **`await` keyword**: Use `await` whenever an I/O-bound operation is performed within your `async` function (e.g., `await session.get(url)` or `await response.read()`). This allows the event loop to switch to other tasks while waiting.
        *   **`asyncio.gather()`**: Collect all the individual `download_image` coroutine objects into a list, and then pass them to `await asyncio.gather(*tasks)`. This will run all the download tasks concurrently, waiting for all of them to complete.
        *   **`asyncio.run()`**: Use `asyncio.run(main_async_function())` to start the event loop and execute your top-level asynchronous logic.
    *   By using these, the total time would be closer to the time of the slowest single download (0.5 seconds) plus a small overhead, rather than the sum of all download times.

2.  **Question**: Consider the following Python code snippet. Explain what will happen when `some_async_function()` is called directly without `await` inside another `async` function, and what the correct way to call it would be.
    ```python
    import asyncio

    async def some_async_function():
        print("Starting async task...")
        await asyncio.sleep(1) # Simulate some async work
        print("Async task finished.")
        return "Task Result"

    async def main():
        print("Main function started.")
        task = some_async_function() # Line in question
        print(f"Task object created: {task}")
        # What happens here?
        print("Main function finished.")

    if __name__ == "__main__":
        asyncio.run(main())
    ```
    *   **Correct Answer**: When `task = some_async_function()` is called without `await` inside `main()`, `some_async_function()` will *not* actually execute its logic. Instead, it will merely return a **coroutine object**. The `print("Starting async task...")` and `print("Async task finished.")` lines within `some_async_function` will never be reached, and `asyncio.sleep(1)` will not be executed. The `main` function will print "Main function started.", then print the representation of the coroutine object, and then "Main function finished.", completing almost instantly.
    *   The correct way to call `some_async_function()` within `main()` to ensure its execution and for `main()` to wait for its completion would be:
        ```python
        async def main():
            print("Main function started.")
            result = await some_async_function() # Corrected line
            print(f"Async task returned: {result}")
            print("Main function finished.")
        ```
        This uses `await` to tell the event loop to pause `main()` until `some_async_function()` has completed its execution.

#### AI generation note
Create a 10-minute animated video explaining `asyncio`. Start with an analogy of a single chef managing multiple orders (concurrency) versus multiple chefs (parallelism). Visually demonstrate blocking I/O as the chef waiting idly for an oven to finish, then show `asyncio` as the chef switching to prep another dish while the oven is busy. Animate the event loop as a central dispatcher. Use clear visual cues for `async def` creating a "pausable task" and `await` signaling "pause here, let the event loop run something else." Include a side-by-side comparison of sequential vs. `asyncio.gather` for fetching three URLs, showing the timeline difference. The interactive element should be a drag-and-drop exercise to correctly place `async` and `await` keywords in a provided code snippet.

---

### Chapter 6.3 — Advanced Error Handling & Debugging

#### Learning objectives
*   Design and implement custom exception classes for specific error scenarios.
*   Understand and utilize context managers (`with` statement) for resource management and error handling.
*   Implement robust logging practices using Python's `logging` module.
*   Effectively use the `pdb` debugger to step through code, inspect variables, and identify issues.
*   Develop strategies for writing more resilient and maintainable code through advanced error handling and debugging techniques.

#### Detailed lesson content

Even the most carefully written code can encounter unexpected situations, from invalid user input to network failures or file system issues. How your program responds to these challenges is crucial for its reliability and user experience. This chapter moves beyond basic `try-except` blocks to explore more sophisticated error handling mechanisms, proper logging, and essential debugging techniques that will help you build robust and maintainable Python applications.

While Python's built-in exceptions cover many common errors, there are times when you need to define your own. **Custom exceptions** allow you to signal specific, application-domain errors that are more meaningful to your program's logic. This improves code readability and allows callers to catch and handle errors with greater precision. To create a custom exception, you typically inherit from Python's base `Exception` class (or a more specific built-in exception like `ValueError` or `IOError`).

```python
class InsufficientFundsError(Exception):
    """Custom exception raised when a transaction exceeds available funds."""
    def __init__(self, message="Insufficient funds for this transaction.", balance=0, amount=0):
        super().__init__(message)
        self.balance = balance
        self.amount = amount

class BankAccount:
    def __init__(self, initial_balance):
        self.balance = initial_balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFundsError(
                f"Attempted to withdraw {amount} but only {self.balance} available.",
                balance=self.balance,
                amount=amount
            )
        self.balance -= amount
        return self.balance

# Example usage
account = BankAccount(100)
try:
    print(f"Current balance: {account.balance}")
    account.withdraw(50)
    print(f"Balance after withdrawing 50: {account.balance}")
    account.withdraw(80) # This will raise an exception
except InsufficientFundsError as e:
    print(f"Error: {e}")
    print(f"Details: Balance={e.balance}, Attempted={e.amount}")
except Exception as e: # Catch other unexpected errors
    print(f"An unexpected error occurred: {e}")
```
Custom exceptions make your error handling more semantic. Instead of catching a generic `Exception` and then checking error messages, you can catch `InsufficientFundsError` directly, knowing exactly what went wrong.

Next, let's talk about **context managers**, which are invaluable for managing resources that need to be set up and torn down reliably, regardless of whether an error occurs. The most common example you've already used is `with open('file.txt', 'r') as f:`. The `with` statement ensures that `f.close()` is called automatically, even if an error occurs while reading the file. You can create your own context managers using classes with `__enter__` and `__exit__` methods, or more simply with the `@contextlib.contextmanager` decorator.

```python
import contextlib
import time

@contextlib.contextmanager
def timer_context(name):
    """A context manager to time a block of code."""
    start_time = time.time()
    print(f"[{name}] Starting...")
    try:
        yield # Code inside the 'with' block executes here
    finally:
        end_time = time.time()
        print(f"[{name}] Finished in {end_time - start_time:.4f} seconds.")

# Example usage
with timer_context("Data Processing"):
    time.sleep(0.5)
    result = 10 / 2
    print(f"Result: {result}")
    # raise ValueError("Oops, something went wrong!") # Test error handling

print("\nOutside the timer context.")
```
The `yield` in `timer_context` is crucial: the code within the `with` block executes at that point. The `finally` block ensures the timer stops and prints, even if an exception occurs within the `with` block. This pattern is extremely useful for database connections, network sockets, or any resource that needs guaranteed cleanup.

While `print()` statements are useful for quick checks, **logging** is the professional way to monitor your application's behavior. Python's `logging` module provides a flexible framework for emitting log messages at different severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) and directing them to various destinations (console, file, network). This allows you to control the verbosity and destination of messages without altering your code.

```python
import logging

# Configure basic logging to console
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Configure logging to a file
file_logger = logging.getLogger('file_logger')
file_logger.setLevel(logging.DEBUG)
file_handler = logging.FileHandler('app.log')
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
file_logger.addHandler(file_handler)

def divide(a, b):
    logging.info(f"Attempting to divide {a} by {b}")
    file_logger.debug(f"Input parameters: a={a}, b={b}")
    try:
        result = a / b
        logging.info(f"Division successful: {result}")
        return result
    except ZeroDivisionError:
        logging.error("Attempted to divide by zero!")
        file_logger.exception("Detailed traceback for ZeroDivisionError:") # Logs exception info
        return None
    except TypeError:
        logging.warning("Invalid types for division.")
        return None

divide(10, 2)
divide(10, 0)
divide("hello", 5)
```
Using `logging.exception()` is particularly useful within `except` blocks as it automatically includes the current exception information and traceback in the log message.

Finally, when errors do occur, **debugging** is your primary tool for finding and fixing them. Python's built-in debugger, `pdb`, allows you to pause your program's execution, step through code line by line, inspect variables, and change their values.

To use `pdb`:
1.  **Insert a breakpoint**: Add `import pdb; pdb.set_trace()` at the point in your code where you want execution to pause.
2.  **Run your script**: When Python hits `set_trace()`, it will drop you into the `pdb` prompt.
3.  **Use commands**:
    *   `n` (next): Execute the current line and move to the next line in the current function.
    *   `s` (step): Step into the function call on the current line.
    *   `c` (continue): Continue execution until the next breakpoint or the end of the program.
    *   `p <variable>` (print): Print the value of a variable.
    *   `l` (list): List the source code around the current line.
    *   `q` (quit): Exit the debugger.

```python
# Example for pdb debugging
def calculate_average(numbers):
    total = 0
    count = 0
    for num in numbers:
        total += num
        count += 1
    # import pdb; pdb.set_trace() # Uncomment this line to start debugging here
    if count == 0:
        return 0 # Avoid ZeroDivisionError
    return total / count

data = [10, 20, 30]
avg = calculate_average(data)
print(f"Average: {avg}")

data_empty = []
avg_empty = calculate_average(data_empty)
print(f"Average of empty list: {avg_empty}")
```
Debugging is an art, and `pdb` is a powerful brush. Practice using it to become proficient at diagnosing complex issues. Common mistakes include not setting specific enough breakpoints, or not understanding the scope of variables when stepping through functions. Combining custom exceptions, context managers, robust logging, and effective debugging forms a comprehensive strategy for building highly reliable Python applications.

#### Key concepts
*   **Custom Exception**: A user-defined exception class, typically inheriting from `Exception`, used to signal specific, application-domain errors.
*   **`raise` statement**: Used to explicitly trigger an exception.
*   **Context Manager**: An object that defines the runtime context for a `with` statement, ensuring resources are properly acquired and released (e.g., files, locks, network connections).
*   **`__enter__` method**: Called when entering the `with` statement's block.
*   **`__exit__` method**: Called when exiting the `with` statement's block, handling cleanup and exceptions.
*   **`@contextlib.contextmanager`**: A decorator that simplifies creating context managers from generator functions.
*   **Logging**: The process of recording events that occur in a software system, providing insights into its operation and potential issues.
*   **`logging` module**: Python's standard library for flexible and configurable logging.
*   **Log Levels**: Severity categories for log messages (DEBUG, INFO, WARNING, ERROR, CRITICAL).
*   **`pdb`**: Python Debugger, a built-in interactive source-level debugger for Python programs.
*   **Breakpoint**: A point in the code where execution is paused, allowing for inspection and step-by-step debugging.

#### Hands-on activity

**Activity: Secure File Operations with Custom Exceptions, Context Managers, and Logging**

You will create a simplified file processing utility that demonstrates advanced error handling and logging.

1.  **Define a Custom Exception**: Create a custom exception `FileAccessException` that inherits from `IOError`. This exception should be raised if there's an issue opening or reading a file, and it should optionally store the filename and the original error message.

2.  **Create a File Locker Context Manager**: Implement a context manager, `file_locker(filepath)`, using `@contextlib.contextmanager`. This context manager should:
    *   Print a message when it attempts to "lock" the file (e.g., "Attempting to lock {filepath}...").
    *   Yield control to the `with` block.
    *   Print a message when it "unlocks" the file (e.g., "Unlocking {filepath}.").
    *   Ensure the "unlocking" message is always printed, even if an error occurs within the `with` block.

3.  **Implement a `read_secure_file` function**:
    *   This function should take a `filepath` as an argument.
    *   Use the `file_locker` context manager.
    *   Inside the `with` block, attempt to open and read the file's content.
    *   If an `IOError` occurs during file opening/reading, catch it and `raise` your custom `FileAccessException`, providing the original error details.
    *   Use the `logging` module to:
        *   Log an `INFO` message when starting to read the file.
        *   Log a `DEBUG` message with the file content if successful.
        *   Log an `ERROR` message if `FileAccessException` is caught, including the exception details.
        *   Log a `CRITICAL` message if any other unexpected exception occurs.

4.  **Test your implementation**:
    *   Call `read_secure_file` with a valid file path (create a dummy `test.txt` first).
    *   Call `read_secure_file` with a non-existent file path.
    *   Call `read_secure_file` with a path to a directory (which will cause a different `IOError`).

*   **Starter Code**:
    ```python
    import logging
    import contextlib
    import os

    # 1. Configure logging
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    file_logger = logging.getLogger('file_ops')
    file_logger.setLevel(logging.DEBUG)
    file_handler = logging.FileHandler('file_operations.log')
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    file_logger.addHandler(file_handler)

    # 2. Define custom exception
    class FileAccessException(IOError):
        def __init__(self, message, filename=None, original_error=None):
            super().__init__(message)
            self.filename = filename
            self.original_error = original_error

    # 3. Create file_locker context manager
    @contextlib.contextmanager
    def file_locker(filepath):
        # Your context manager logic here
        pass # Replace this

    # 4. Implement read_secure_file function
    def read_secure_file(filepath):
        file_logger.info(f"Attempting to read file: {filepath}")
        try:
            with file_locker(filepath):
                with open(filepath, 'r') as f:
                    content = f.read()
                    file_logger.debug(f"File content: {content[:100]}...") # Log first 100 chars
                    return content
        except FileAccessException as e:
            file_logger.error(f"File access error for {e.filename}: {e.args[0]} (Original: {e.original_error})")
            return None
        except Exception as e:
            file_logger.critical(f"An unexpected critical error occurred: {e}", exc_info=True)
            return None

    if __name__ == "__main__":
        # Create a dummy file
        with open("test.txt", "w") as f:
            f.write("This is a test file for secure operations.\nLine 2.\nLine 3.")

        print("\n--- Testing with valid file ---")
        read_secure_file("test.txt")

        print("\n--- Testing with non-existent file ---")
        read_secure_file("non_existent.txt")

        print("\n--- Testing with a directory (should cause error) ---")
        # Create a dummy directory for testing
        if not os.path.exists("dummy_dir"):
            os.makedirs("dummy_dir")
        read_secure_file("dummy_dir")

        # Clean up dummy files/dirs
        os.remove("test.txt")
        os.rmdir("dummy_dir")
    ```

#### Assessment idea

1.  **Question**: You are developing a financial application where a user might try to withdraw more money than they have in their account. Instead of just catching a generic `Exception`, you want to provide a very specific error message and potentially log additional details like the attempted amount and current balance. How would you achieve this using Python's error handling features, and why is this approach better than a generic `try-except`? Provide a code snippet for the custom exception.
    *   **Correct Answer**: You should create a **custom exception** (e.g., `InsufficientFundsError`) that inherits from `Exception`. This custom exception can store specific attributes like `balance` and `amount` and provide a more descriptive error message. This approach is better than a generic `try-except` because it allows for more precise error handling:
        *   **Clarity**: The type of error is immediately clear from the exception class name.
        *   **Specificity**: You can catch `InsufficientFundsError` specifically, rather than a broad `Exception`, ensuring you only handle this particular scenario.
        *   **Information**: The custom exception can carry relevant data (like `balance` and `amount`) that can be used for logging, user feedback, or further processing, which a generic exception might not provide without extra logic.
    *   **Code Snippet**:
        ```python
        class InsufficientFundsError(Exception):
            def __init__(self, message, balance, amount):
                super().__init__(message)
                self.balance = balance
                self.amount = amount

        # Usage:
        # try:
        #     if withdrawal_amount > account_balance:
        #         raise InsufficientFundsError("Withdrawal exceeds available balance.", account_balance, withdrawal_amount)
        # except InsufficientFundsError as e:
        #     print(f"Transaction failed: {e.args[0]} Available: {e.balance}, Attempted: {e.amount}")
        ```

2.  **Question**: You have a function that opens a network connection, sends some data, and then needs to close the connection. It's critical that the connection is always closed, even if an error occurs during data transmission. Which Python construct would you use to guarantee this cleanup, and how does it work under the hood to ensure reliability?
    *   **Correct Answer**: You would use a **context manager** with the `with` statement. The `with` statement guarantees that a specific cleanup action is performed when exiting the block, regardless of whether the block completes normally or an exception is raised.
    *   **How it works**: A context manager object must implement two special methods:
        *   `__enter__(self)`: This method is called when the `with` statement is entered. It sets up the resource (e.g., opens the network connection) and can return an object (which is then bound to the `as` variable).
        *   `__exit__(self, exc_type, exc_val, exc_tb)`: This method is called when the `with` block is exited. It performs the cleanup (e.g., closes the network connection). It receives details about any exception that occurred within the block. If `__exit__` returns `True`, it suppresses the exception; otherwise, the exception is re-raised. This ensures cleanup happens reliably.
    *   **Example (conceptual)**:
        ```python
        class NetworkConnection:
            def __init__(self, host, port):
                self.host = host
                self.port = port
                self.connection = None

            def __enter__(self):
                print(f"Opening connection to {self.host}:{self.port}...")
                # Simulate opening connection
                self.connection = "active_connection_object"
                return self.connection

            def __exit__(self, exc_type, exc_val, exc_tb):
                print(f"Closing connection to {self.host}:{self.port}...")
                # Simulate closing connection
                self.connection = None
                if exc_type:
                    print(f"An error occurred: {exc_val}")
                    # return False to re-raise the exception, or True to suppress it
                return False

        # Usage:
        # with NetworkConnection("example.com", 8080) as conn:
        #     print(f"Using connection: {conn}")
        #     # Send data, potentially raise error
        #     raise ValueError("Failed to send data!")
        ```

#### AI generation note
Create a 15-minute mixed-media lesson. Start with an animated explanation of custom exceptions: visualize them as specialized error flags that provide more context than generic ones. Then, use a visual metaphor for context managers, like a "safe zone" (`with` block) that automatically cleans up (e.g., closes a door, turns off a light) when you leave, even if you trip. Demonstrate `__enter__` and `__exit__` flow. Transition to logging with a comparison of `print()` vs. `logging` for different log levels, showing how `logging` can filter and direct output. Finally, conduct a live coding walkthrough of a `pdb` debugging session on a small, buggy function, demonstrating `n`, `s`, `p`, `l`, `c`, and `q` commands, highlighting how to inspect variables at different points. The interactive element should be a short quiz on matching log levels to appropriate scenarios.

---

### Chapter 6.4 — Testing Your Code with `unittest` and `pytest`

#### Learning objectives
*   Explain the importance of testing in software development and differentiate between unit and integration tests.
*   Write basic unit tests using Python's built-in `unittest` framework.
*   Understand and utilize `unittest.TestCase` methods for test setup, teardown, and assertions.
*   Discover `pytest` as a powerful and simpler alternative for writing tests.
*   Implement `pytest` fixtures for efficient test setup and resource management.
*   Grasp the fundamental concepts of Test-Driven Development (TDD).

#### Detailed lesson content

Writing code that works is one thing; writing code that *continues* to work reliably, even as it evolves, is another. This is where **testing** becomes an indispensable part of the software development lifecycle. Testing helps you catch bugs early, ensures your code behaves as expected, and provides a safety net when refactoring or adding new features. Without tests, every change carries the risk of breaking existing functionality, leading to a fragile and difficult-to-maintain codebase.

There are various types of tests, but two fundamental categories are **unit tests** and **integration tests**.
*   **Unit tests** focus on testing the smallest testable parts of an application, typically individual functions or methods, in isolation. The goal is to verify that each unit of code performs its specific task correctly, independent of other components.
*   **Integration tests** verify that different modules or services used in your application work together correctly. For example, testing if your application can successfully interact with a database or an external API.

Python comes with a built-in testing framework called `unittest`, which is inspired by JUnit. It provides a structured way to write tests using classes and methods.

To use `unittest`, you create test classes that inherit from `unittest.TestCase`. Each test method within these classes should start with `test_`. Inside these methods, you use assertion methods (like `assertEqual`, `assertTrue`, `assertRaises`) to check if the code produces the expected results.

```python
import unittest

# The function we want to test
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

class TestCalculator(unittest.TestCase):

    def setUp(self):
        """Set up any resources needed for tests. Runs before each test method."""
        print("\nSetting up for a test...")
        self.num1 = 10
        self.num2 = 5

    def tearDown(self):
        """Clean up resources after tests. Runs after each test method."""
        print("Tearing down after a test.")
        # self.num1 = None # Example cleanup
        # self.num2 = None

    def test_add(self):
        """Test the add function."""
        print("Running test_add...")
        self.assertEqual(add(self.num1, self.num2), 15)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-1, -1), -2)

    def test_subtract(self):
        """Test the subtract function."""
        print("Running test_subtract...")
        self.assertEqual(subtract(self.num1, self.num2), 5)
        self.assertEqual(subtract(5, 10), -5)

    def test_multiply_by_zero(self):
        """Test multiplication by zero."""
        print("Running test_multiply_by_zero...")
        self.assertEqual(multiply(self.num1, 0), 0)

    def test_divide_by_zero_raises_error(self):
        """Test that division by zero raises a ValueError."""
        print("Running test_divide_by_zero_raises_error...")
        with self.assertRaises(ValueError): # Use self.assertRaises for expected exceptions
            # Assuming a divide function that raises ValueError for division by zero
            # For demonstration, let's just raise it directly
            raise ValueError("Cannot divide by zero!")

# To run the tests from the command line: python -m unittest your_test_file.py
# Or within the script:
if __name__ == '__main__':
    unittest.main()
```
The `setUp` method runs before *each* test method, allowing you to prepare a clean state for every test. `tearDown` runs after each test, cleaning up resources. A common mistake is to put too much logic in `setUp` that isn't strictly necessary for *every* test, making tests slower.

While `unittest` is robust, many Python developers prefer **`pytest`** for its simpler syntax and powerful features. `pytest` automatically discovers tests (functions starting with `test_` or files named `test_*.py` or `*_test.py`), requires less boilerplate, and has a rich plugin ecosystem.

```python
# Save this as test_calculator_pytest.py
# The functions to test (can be in a separate file, e.g., calculator.py)
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def divide(x, y):
    if y == 0:
        raise ValueError("Cannot divide by zero!")
    return x / y

# Pytest test functions directly
def test_add_pytest():
    assert add(10, 5) == 15
    assert add(-1, 1) == 0

def test_subtract_pytest():
    assert subtract(10, 5) == 5
    assert subtract(5, 10) == -5

def test_divide_by_zero_raises_error_pytest():
    import pytest
    with pytest.raises(ValueError, match="Cannot divide by zero!"):
        divide(10, 0)

# To run pytest: navigate to the directory in your terminal and type `pytest`
```
Notice how `pytest` tests are just functions, not classes, and use the standard `assert` statement directly. For setup and teardown, `pytest` introduces **fixtures**. Fixtures are functions that can provide data, test doubles, or initialized components to test functions. They are declared with `@pytest.fixture` and can be requested as arguments by test functions. `pytest` automatically discovers and runs fixtures before the tests that depend on them.

```python
# Example of pytest fixtures
import pytest

@pytest.fixture
def sample_data():
    """A fixture that provides sample data for tests."""
    print("\nSetting up sample data fixture...")
    data = {'a': 1, 'b': 2, 'c': 3}
    yield data # 'yield' makes it a teardown fixture
    print("Tearing down sample data fixture.")
    # Any cleanup code goes after yield

def test_data_keys(sample_data):
    """Test that the sample data has expected keys."""
    assert 'a' in sample_data
    assert 'd' not in sample_data

def test_data_values(sample_data):
    """Test that the sample data has expected values."""
    assert sample_data['b'] == 2
    assert len(sample_data) == 3
```
Fixtures are incredibly powerful for managing test dependencies and ensuring a consistent testing environment.

Finally, a brief introduction to **Test-Driven Development (TDD)**. TDD is a development methodology where you write tests *before* writing the code they are meant to test. The cycle is:
1.  **Red**: Write a small test that fails (because the feature doesn't exist yet).
2.  **Green**: Write just enough code to make the test pass.
3.  **Refactor**: Improve the code's design without changing its behavior (ensured by the passing tests).
This cycle encourages writing minimal, clean code and ensures comprehensive test coverage from the start.

Testing is not just about finding bugs; it's about building confidence in your code. Adopting a testing mindset and utilizing frameworks like `unittest` or `pytest` will make you a more effective and professional Python developer.

#### Key concepts
*   **Testing**: The process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.
*   **Unit Test**: A test that verifies the functionality of a small, isolated piece of code (a "unit"), typically a function or method.
*   **Integration Test**: A test that verifies that different modules or services of an application work together correctly.
*   **`unittest`**: Python's built-in testing framework, providing a class-based approach to writing tests.
*   **`unittest.TestCase`**: The base class for creating test cases in `unittest`.
*   **Assertion Methods**: Methods like `assertEqual()`, `assertTrue()`, `assertRaises()` used within tests to check for expected outcomes.
*   **`setUp()`**: A method in `unittest.TestCase` that runs before each test method to prepare the test environment.
*   **`tearDown()`**: A method in `unittest.TestCase` that runs after each test method to clean up the test environment.
*   **`pytest`**: A popular third-party testing framework known for its simpler syntax, powerful features, and extensive plugin ecosystem.
*   **`assert` statement**: Used directly in `pytest` tests to check conditions.
*   **`pytest.raises()`**: A `pytest` context manager used to assert that a specific exception is raised.
*   **Fixture**: In `pytest`, a function decorated with `@pytest.fixture` that provides a consistent baseline environment for tests, often used for setup and teardown.
*   **Test-Driven Development (TDD)**: A software development process where tests are written before the code, following a Red-Green-Refactor cycle.

#### Hands-on activity

**Activity: Testing a Simple String Utility with `unittest` and `pytest`**

You'll write tests for a small module that contains string manipulation functions.

1.  **Create a `string_utils.py` file**:
    ```python
    # string_utils.py
    def reverse_string(s):
        """Reverses a given string."""
        return s[::-1]

    def is_palindrome(s):
        """Checks if a string is a palindrome (reads the same forwards and backwards, ignoring case and spaces)."""
        cleaned_s = "".join(char.lower() for char in s if char.isalnum())
        return cleaned_s == cleaned_s[::-1]

    def count_vowels(s):
        """Counts the number of vowels (a, e, i, o, u, case-insensitive) in a string."""
        vowels = "aeiou"
        return sum(1 for char in s.lower() if char in vowels)
    ```

2.  **Write `unittest` tests**: Create a file named `test_string_utils_unittest.py`.
    *   Create a class `TestStringUtils(unittest.TestCase)`.
    *   Write test methods (`test_reverse_string`, `test_is_palindrome`, `test_count_vowels`) for each function in `string_utils.py`.
    *   Include at least 3 assertions per test method, covering various inputs (e.g., empty string, string with spaces, mixed case).
    *   For `is_palindrome`, ensure you test cases like "Racecar", "A man a plan a canal Panama", and "hello".
    *   **Hint**: Remember `from string_utils import reverse_string, is_palindrome, count_vowels`.

3.  **Write `pytest` tests**: Create a file named `test_string_utils_pytest.py`.
    *   Write test functions (`test_reverse_string_pytest`, `test_is_palindrome_pytest`, `test_count_vowels_pytest`) for each function.
    *   Use direct `assert` statements.
    *   Create a `pytest` fixture called `sample_strings` that yields a dictionary of strings to test, and use it in at least one of your test functions.

*   **Starter Code for `test_string_utils_unittest.py`**:
    ```python
    import unittest
    from string_utils import reverse_string, is_palindrome, count_vowels

    class TestStringUtils(unittest.TestCase):
        def test_reverse_string(self):
            self.assertEqual(reverse_string("hello"), "olleh")
            # Add more assertions here
            pass

        def test_is_palindrome(self):
            self.assertTrue(is_palindrome("madam"))
            # Add more assertions here
            pass

        def test_count_vowels(self):
            self.assertEqual(count_vowels("hello"), 2)
            # Add more assertions here
            pass

    if __name__ == '__main__':
        unittest.main()
    ```

*   **Starter Code for `test_string_utils_pytest.py`**:
    ```python
    import pytest
    from string_utils import reverse_string, is_palindrome, count_vowels

    @pytest.fixture
    def sample_strings():
        return {
            "simple": "python",
            "palindrome_phrase": "A man a plan a canal Panama",
            "vowel_rich": "education"
        }

    def test_reverse_string_pytest():
        assert reverse_string("world") == "dlrow"
        # Add more assertions here
        pass

    def test_is_palindrome_pytest(sample_strings):
        assert is_palindrome(sample_strings["palindrome_phrase"]) is True
        # Add more assertions here
        pass

    def test_count_vowels_pytest():
        assert count_vowels("Cohortia") == 4
        # Add more assertions here
        pass
    ```

#### Assessment idea

1.  **Question**: You are writing a `User` class with a method `is_valid_email(email)` that checks if a given string is a valid email format. You want to test this method thoroughly.
    *   a) Describe at least three different test cases (inputs) you would use for `is_valid_email`.
    *   b) For each test case, state the expected outcome (True/False) and the `unittest` assertion method you would use.
    *   **Correct Answer**:
        *   a) **Test Cases**:
            1.  **Valid Email**: `test@example.com`
            2.  **Invalid Email (missing '@')**: `testexample.com`
            3.  **Invalid Email (missing domain)**: `test@.com`
            4.  **Invalid Email (empty string)**: `""`
            5.  **Valid Email (with subdomain)**: `user.name@sub.example.co.uk`
        *   b) **Expected Outcomes & Assertions**:
            1.  **Valid Email (`test@example.com`)**: Expected: `True`. Assertion: `self.assertTrue(user.is_valid_email("test@example.com"))`
            2.  **Invalid Email (`testexample.com`)**: Expected: `False`. Assertion: `self.assertFalse(user.is_valid_email("testexample.com"))`
            3.  **Invalid Email (`test@.com`)**: Expected: `False`. Assertion: `self.assertFalse(user.is_valid_email("test@.com"))`
            4.  **Invalid Email (`""`)**: Expected: `False`. Assertion: `self.assertFalse(user.is_valid_email(""))`
            5.  **Valid Email (`user.name@sub.example.co.uk`)**: Expected: `True`. Assertion: `self.assertTrue(user.is_valid_email("user.name@sub.example.co.uk"))`

2.  **Question**: Explain the primary advantage of using `pytest` fixtures over `unittest`'s `setUp` and `tearDown` methods, especially in larger test suites. Provide a simple conceptual example of a `pytest` fixture.
    *   **Correct Answer**: The primary advantage of `pytest` fixtures is their **granularity and reusability**.
        *   **Granularity**: `unittest`'s `setUp` and `tearDown` run before and after *every single test method* within a `TestCase` class. If some tests don't need the setup, it's still executed, leading to slower, less efficient tests. Fixtures, on the other hand, are only run when explicitly requested by a test function or another fixture. This means you only incur the setup cost for the tests that actually need it.
        *   **Reusability**: Fixtures can be defined in separate `conftest.py` files and automatically discovered and shared across multiple test files and classes in a project. `unittest`'s setup/teardown methods are typically confined to their specific `TestCase` class, making sharing more cumbersome. Fixtures also support dependency injection, where one fixture can request another.
    *   **Conceptual Example of a `pytest` fixture**:
        ```python
        import pytest

        @pytest.fixture(scope="module") # 'module' scope means it runs once per module
        def database_connection():
            """Fixture to provide a database connection."""
            print("\n--- Establishing database connection ---")
            conn = "DatabaseConnectionObject" # Simulate connection
            yield conn # Provide the connection to tests
            print("--- Closing database connection ---")
            # Cleanup code runs after all tests in the module that use this fixture

        def test_fetch_user(database_connection):
            # database_connection is automatically provided by the fixture
            assert database_connection == "DatabaseConnectionObject"
            print("Test fetch user passed.")

        def test_insert_data(database_connection):
            assert database_connection is not None
            print("Test insert data passed.")
        ```

#### AI generation note
Create a 12-minute mixed-media lesson. Start with an animated explanation of why testing is crucial, using an analogy of building a house with quality checks at each stage. Visually differentiate unit vs. integration tests (e.g., testing a single brick vs. testing if walls and roof fit). Then, show a side-by-side comparison of `unittest` (class-based, `self.assertEqual`) and `pytest` (function-based, direct `assert`), highlighting `pytest`'s conciseness. Animate the flow of `setUp`/`tearDown` in `unittest` vs. a `pytest` fixture with `yield` for resource management. Include a live coding demo of writing a simple test for a `calculator` function using both frameworks. The interactive element should be a mini-quiz asking users to identify the correct assertion for given test scenarios.

---

### Chapter 6.5 — Project Structure, Packaging & Deployment Basics

#### Learning objectives
*   Understand best practices for structuring a Python project for maintainability and collaboration.
*   Utilize virtual environments (`venv`) to manage project dependencies effectively.
*   Manage project dependencies using `pip` and `requirements.txt`.
*   Learn the basics of packaging a Python application for distribution using `pyproject.toml`.
*   Grasp fundamental concepts of deploying a Python application to a production environment.
*   Recognize the importance of version control (Git) in a professional project workflow.

#### Detailed lesson content

Congratulations on reaching the final chapter of this bootcamp! You've learned a tremendous amount about writing Python code, but building a professional application involves more than just writing functions and classes. It requires careful organization, proper dependency management, and a clear path to getting your code into the hands of users. This chapter will equip you with the essential knowledge for structuring your projects, packaging them for distribution, and understanding the basics of deployment.

A well-organized **project structure** is paramount for readability, maintainability, and collaboration, especially as projects grow. While there's no single "perfect" structure, a common and highly recommended layout for Python projects looks something like this:

```
my_project/
├── .venv/                   # Virtual environment (ignored by Git)
├── src/                     # Source code for the main application
│   ├── my_project_package/  # The actual Python package
│   │   ├── __init__.py      # Makes 'my_project_package' a Python package
│   │   ├── main.py
│   │   ├── utils.py
│   │   └── models/
│   │       ├── __init__.py
│   │       └── user.py
│   └── scripts/             # Standalone scripts not part of the main package
│       └── run_etl.py
├── tests/                   # Unit and integration tests
│   ├── test_main.py
│   └── test_user_model.py
├── docs/                    # Project documentation
│   └── index.md
├── .gitignore               # Specifies files/directories to ignore in Git
├── README.md                # Project description, setup, usage
├── requirements.txt         # List of project dependencies
├── pyproject.toml           # Project metadata and build configuration (modern packaging)
└── LICENSE                  # Project license
```
The `src/` directory is a common convention to separate your actual package code from other project-level files like tests or scripts. This helps prevent accidental imports and ensures your package is installed correctly.

One of the most critical tools for any Python developer is the **virtual environment (`venv`)**. A virtual environment is a self-contained directory that holds a specific Python interpreter and a set of installed packages (libraries) for a particular project. Why is this crucial? Imagine you have Project A that needs `requests` library version 2.20 and Project B that needs `requests` version 2.28. Without virtual environments, installing one version globally might break the other project. `venv` isolates these dependencies, ensuring each project has its own set of packages without conflicts.

To create and activate a virtual environment:
```bash
# From your project root directory (e.g., my_project/)
python3 -m venv .venv  # Creates a virtual environment named '.venv'
# On macOS/Linux:
source .venv/bin/activate
# On Windows (Command Prompt):
.venv\Scripts\activate.bat
# On Windows (PowerShell):
.venv\Scripts\Activate.ps1
```
Once activated, your terminal prompt will usually show `(.venv)` or similar, indicating you're in the virtual environment. All `pip install` commands will now install packages into *this specific environment*. To deactivate, simply type `deactivate`.

**Dependency management** is handled primarily by `pip`, Python's package installer. After activating your `venv`, you install packages like this:
```bash
pip install requests beautifulsoup4
```
To record your project's exact dependencies, you generate a `requirements.txt` file:
```bash
pip freeze > requirements.txt
```
This file lists all installed packages and their versions. When someone else (or your deployment server) gets your code, they can easily install all necessary dependencies:
```bash
pip install -r requirements.txt
```

**Packaging** refers to the process of bundling your Python code and its metadata into a distributable format, typically a wheel (`.whl`) or a source distribution (`.tar.gz`). This allows others to easily install your project using `pip`. The modern way to configure your package is using `pyproject.toml` (defined by PEP 517/621), which replaces the older `setup.py` for defining project metadata.

Here's a simplified `pyproject.toml` example:
```toml
# pyproject.toml
[project]
name = "my-project-package"
version = "0.1.0"
description = "A short description of my project."
authors = [
    { name = "Your Name", email = "your.email@example.com" }
]
requires-python = ">=3.8"
dependencies = [
    "requests>=2.28.1",
    "beautifulsoup4>=4.11.1",
]
readme = "README.md"
license = { file = "LICENSE" }
keywords = ["web", "scraper", "utility"]

[project.urls]
"Homepage" = "https://github.com/yourusername/my-project"
"Bug Tracker" = "https://github.com/yourusername/my-project/issues"

[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"
```
To build your package, you'd typically use the `build` tool (install with `pip install build`):
```bash
python -m build
```
This will create `dist/my_project_package-0.1.0-py3-none-any.whl` and `dist/my_project_package-0.1.0.tar.gz` files, which can then be uploaded to PyPI or installed locally.

Finally, **deployment** is the process of getting your application from your development machine to a server where it can run continuously and be accessed by users. While a full deployment strategy is complex and depends heavily on your application type (web app, data pipeline, etc.) and chosen platform (Heroku, AWS, Azure, Google Cloud, Docker), the basic steps often involve:
1.  **Server Setup**: Provisioning a server or cloud instance.
2.  **Code Transfer**: Copying your code to the server (e.g., via Git clone).
3.  **Environment Setup**: Installing Python and creating/activating a virtual environment.
4.  **Dependency Installation**: Running `pip install -r requirements.txt`.
5.  **Configuration**: Setting up environment variables, database connections, etc.
6.  **Running the Application**: Starting your application, often using a process manager (like Gunicorn/uWSGI for web apps, or systemd for background scripts).

Throughout this entire project workflow, **version control with Git** is non-negotiable. Git allows you to track changes to your code, collaborate with others, revert to previous versions, and manage different features through branches. It's the backbone of modern software development.

Mastering project structure, virtual environments, packaging, and understanding deployment fundamentals are crucial steps in transitioning from writing isolated scripts to building and delivering professional, robust Python applications. This knowledge will serve as a strong foundation for your journey as a Python developer.

#### Key concepts
*   **Project Structure**: The organized layout of files and directories within a software project, promoting maintainability and collaboration.
*   **Virtual Environment (`venv`)**: An isolated Python environment that allows projects to have their own dependencies without conflicts.
*   **`pip`**: Python's package installer, used for installing, upgrading, and managing Python packages.
*   **`requirements.txt`**: A file listing all direct and transitive dependencies of a Python project, typically generated by `pip freeze`.
*   **Packaging**: The process of bundling a Python project into a distributable format (e.g., wheel, source distribution) for easy installation via `pip`.
*   **`pyproject.toml`**: The modern standard (PEP 517/621) for defining project metadata, build system requirements, and dependencies in a Python project.
*   **`build` tool**: A Python tool used to create standard Python distribution artifacts (wheels and source distributions) from a project.
*   **Deployment**: The process of making a software application available for use, typically on a production server or cloud platform.
*   **Git**: A distributed version control system for tracking changes in source code during software development.
*   **`activate` script**: A script within a virtual environment used to activate it, modifying the shell's PATH variable.
*   **`deactivate` command**: Used to exit an active virtual environment.

#### Hands-on activity

**Activity: Setting Up a Project, Managing Dependencies, and Creating a `pyproject.toml`**

You'll practice setting up a new Python project with proper structure, virtual environments, and dependency management.

1.  **Create a New Project Directory**:
    ```bash
    mkdir my_new_app
    cd my_new_app
    ```

2.  **Initialize a Virtual Environment**:
    *   Create a virtual environment named `.venv` inside `my_new_app`.
    *   Activate the virtual environment.

3.  **Create Project Structure**:
    *   Inside `my_new_app`, create the following directories: `src/`, `tests/`, `docs/`.
    *   Inside `src/`, create a directory `my_app_package/`.
    *   Inside `my_app_package/`, create an empty `__init__.py` file and a `main.py` file.
    *   Add some simple code to `main.py`:
        ```python
        # src/my_app_package/main.py
        import requests

        def fetch_data(url):
            try:
                response = requests.get(url)
                response.raise_for_status() # Raise HTTPError for bad responses (4xx or 5xx)
                return response.json()
            except requests.exceptions.RequestException as e:
                print(f"Error fetching data: {e}")
                return None

        if __name__ == "__main__":
            data = fetch_data("https://jsonplaceholder.typicode.com/todos/1")
            if data:
                print(f"Fetched data: {data}")
            else:
                print("Failed to fetch data.")
        ```

4.  **Install Dependencies**:
    *   With your virtual environment activated, install the `requests` library.
    *   Generate a `requirements.txt` file.

5.  **Create `pyproject.toml`**:
    *   In the root of `my_new_app`, create a `pyproject.toml` file.
    *   Populate it with basic project metadata: `name`, `version`, `description`, `authors`, `requires-python`, `dependencies` (listing `requests`), and `build-system` as shown in the lesson.

6.  **Test the Application**:
    *   Run `python src/my_app_package/main.py` (ensure your `venv` is active).
    *   Deactivate your virtual environment.
    *   Try running `python src/my_app_package/main.py` again and observe the error (it should fail because `requests` is not installed globally).

*   **Commands to use**:
    ```bash
    # Step 1
    mkdir my_new_app
    cd my_new_app

    # Step 2
    python3 -m venv .venv
    source .venv/bin/activate # or .venv\Scripts\activate.bat on Windows

    # Step 3
    mkdir src tests docs
    mkdir src/my_app_package
    touch src/my_app_package/__init__.py
    # Then create src/my_app_package/main.py with the content above

    # Step 4
    pip install requests
    pip freeze > requirements.txt

    # Step 5
    # Create pyproject.toml with content as described

    # Step 6
    python src/my_app_package/main.py
    deactivate
    python src/my_app_package/main.py # This should fail
    ```

#### Assessment idea

1.  **Question**: You are starting a new Python project that will use the `pandas` and `matplotlib` libraries. Explain why it's crucial to use a virtual environment for this project, and outline the exact steps (commands) you would take to set up, activate, install dependencies, and deactivate a virtual environment named `my_project_env` in your project directory.
    *   **Correct Answer**:
        *   **Why a virtual environment is crucial**: A virtual environment isolates the project's dependencies (`pandas`, `matplotlib`) from other Python projects and the system's global Python installation. This prevents dependency conflicts (e.g., if another project requires an older version of `pandas`), ensures reproducibility across different development machines, and keeps the global Python environment clean.
        *   **Steps (Commands)**:
            1.  **Navigate to project directory**: `cd /path/to/your/project`
            2.  **Create virtual environment**: `python3 -m venv my_project_env`
            3.  **Activate virtual environment (macOS/Linux)**: `source my_project_env/bin/activate`
            4.  **Activate virtual environment (Windows Command Prompt)**: `my_project_env\Scripts\activate.bat`
            5.  **Install dependencies**: `pip install pandas matplotlib`
            6.  **Deactivate virtual environment**: `deactivate`

2.  **Question**: Your Python web application uses `Flask` and `SQLAlchemy`. You need to share your project with a colleague. What file would you provide to ensure your colleague can easily install all the necessary dependencies, and what command would they use to install them after setting up their virtual environment?
    *   **Correct Answer**: You would provide a `requirements.txt` file. This file lists all the Python packages and their exact versions that your project depends on.
    *   To generate this file, you would run `pip freeze > requirements.txt` in your activated virtual environment.
    *   Your colleague, after creating and activating their own virtual environment, would use the command `pip install -r requirements.txt` to install all the specified dependencies.

#### AI generation note
Create a 12-minute interactive lab walkthrough. Start with a visual representation of a messy global Python environment vs. clean, isolated virtual environments. Live-code the entire process: `mkdir`, `python -m venv`, `source activate`, `pip install requests`, `pip freeze > requirements.txt`, `deactivate`, and then showing the error when running without `venv`. Then, walk through creating a `pyproject.toml` file step-by-step, explaining each section (`[project]`, `dependencies`, `[build-system]`). Use a simple web scraper example to demonstrate the practical use of `requirements.txt`. The interactive element should be a guided exercise where users type the correct `venv` activation command for their OS. Include clear visual cues for terminal commands and file edits.

---

## Final Capstone Project

Congratulations on reaching this stage! The capstone project is your opportunity to synthesize the knowledge and skills you've gained throughout the "100 Days of Code" bootcamp. It's a chance to build something meaningful, apply best practices, and truly solidify your understanding of Python programming. You will choose one of the following three projects, each designed to challenge you in different ways and integrate concepts from multiple modules, including data structures, functions, object-oriented programming, file I/O, error handling, and potentially working with external libraries. Take your time to review each option and select the one that excites you most and aligns with your personal learning goals.

### Project Option 1: Command-Line Personal Budget Tracker

This project challenges you to build a robust command-line application that helps users track their income and expenses. It requires careful data management, user interaction, and robust error handling. You'll be applying your knowledge of dictionaries, lists, functions, and file I/O to create a practical tool.

**Core Requirements:**

*   **Add Transactions:** Allow users to input income or expense transactions, including a description, amount, and category (e.g., 'Groceries', 'Salary', 'Rent').
*   **View Transactions:** Display a list of all recorded transactions, possibly filtered by type (income/expense) or category.
*   **Calculate Balance:** Show the current total balance based on all recorded income and expenses.
*   **Categorized Spending:** Provide a summary of spending per category.
*   **Persistence:** Save and load transaction data to/from a file (e.g., CSV or JSON) so that data is not lost when the program closes.
*   **Error Handling:** Implement `try-except` blocks to handle invalid inputs (e.g., non-numeric amounts) and file operations.
*   **User Interface:** A clear, text-based menu system for navigation.

**Stretch Goals:**

*   **Date Filtering:** Allow users to view transactions within a specific date range.
*   **Editing/Deleting Transactions:** Provide functionality to modify or remove existing transactions.
*   **Budgeting Feature:** Allow users to set monthly budgets for specific categories and alert them if they exceed it.
*   **Advanced Reporting:** Generate a simple text-based chart or a more detailed report of spending trends.

**Evaluation Criteria:**

*   **Functionality (40%):** Does the application meet all core requirements? Are all features working as expected?
*   **Code Quality (30%):** Is the code readable, well-structured, and does it follow PEP 8 guidelines? Are functions and variables appropriately named? Is there proper modularization?
*   **Error Handling (15%):** Are common errors (e.g., invalid input, file not found) gracefully handled?
*   **Persistence (15%):** Is data saved and loaded correctly and reliably?

**Estimated Time:** 2-3 days of focused work (16-24 hours).

### Project Option 2: Simple Web Scraper for Product Information

In this project, you will build a Python script to scrape product information from a publicly accessible e-commerce website (ensure you comply with the website's `robots.txt` and terms of service, and avoid overly aggressive scraping). This project will introduce you to external libraries like `requests` for fetching web pages and `BeautifulSoup` for parsing HTML, alongside your core Python skills for data manipulation and storage.

**Core Requirements:**

*   **Fetch Web Page:** Use the `requests` library to fetch the HTML content of a specified product listing page.
*   **Parse HTML:** Use `BeautifulSoup` to parse the HTML and extract specific data points for multiple products (e.g., product name, price, rating, availability).
*   **Data Storage:** Store the extracted data in a structured format (e.g., a list of dictionaries).
*   **Export to CSV:** Save the collected product data into a CSV file, with appropriate headers.
*   **Error Handling:** Handle potential network errors (e.g., connection issues) and cases where expected HTML elements are not found.
*   **User Input:** Allow the user to specify the URL of the page to scrape.

**Stretch Goals:**

*   **Multi-Page Scraping:** Extend the scraper to navigate and scrape data from multiple pages (e.g., using pagination links).
*   **Search Functionality:** Allow the user to input a search term and scrape results from a search page.
*   **Data Analysis:** Perform basic analysis on the scraped data, such as finding the average price, highest-rated product, or counting available items.
*   **GUI Interface:** Implement a simple GUI using Tkinter to input the URL and display progress.

**Evaluation Criteria:**

*   **Functionality (40%):** Can the script successfully fetch and parse data from the target website? Is the extracted data accurate?
*   **Code Quality (30%):** Is the code well-organized, readable, and does it follow Python best practices? Are functions used effectively to encapsulate logic?
*   **Robustness (15%):** Does the scraper handle common issues like missing elements or network problems gracefully?
*   **Data Output (15%):** Is the CSV output correctly formatted and easy to understand?

**Estimated Time:** 3-4 days of focused work (24-32 hours).

### Project Option 3: Graphical To-Do List Application

This project challenges you to build a desktop To-Do List application with a graphical user interface (GUI) using Python's built-in `Tkinter` library. This will be an excellent opportunity to apply your understanding of event-driven programming, object-oriented design, and persistence.

**Core Requirements:**

*   **Add Tasks:** A text input field and a button to add new tasks to the list.
*   **Display Tasks:** Show all current tasks in a list format within the GUI.
*   **Mark as Complete:** A way to mark tasks as completed (e.g., a checkbox or a button next to each task). Completed tasks should be visually distinct (e.g., strikethrough text).
*   **Delete Tasks:** A button or mechanism to remove tasks from the list.
*   **Persistence:** Save and load tasks to/from a file (e.g., a text file or JSON) so the list is retained between sessions.
*   **Basic Layout:** Use `Tkinter` widgets to create a functional and reasonably organized layout.

**Stretch Goals:**

*   **Edit Tasks:** Allow users to modify the description of an existing task.
*   **Prioritization:** Add a feature to assign priority levels to tasks (e.g., High, Medium, Low) and sort the list accordingly.
*   **Due Dates:** Include an option to add a due date to tasks and display them.
*   **Filtering:** Allow users to filter tasks (e.g., show only incomplete tasks, show tasks due today).
*   **Improved Aesthetics:** Experiment with `Tkinter` styling or consider using an external library like `CustomTkinter` for a more modern look.

**Evaluation Criteria:**

*   **Functionality (40%):** Does the GUI application perform all core To-Do list operations correctly?
*   **User Experience (25%):** Is the interface intuitive and easy to use? Is the layout logical?
*   **Code Quality (20%):** Is the code well-structured, especially regarding event handling and `Tkinter` widget management? Does it demonstrate good object-oriented principles?
*   **Persistence (15%):** Are tasks saved and loaded reliably and without data corruption?

**Estimated Time:** 3-4 days of focused work (24-32 hours).

## Final Examination

This final examination is designed to comprehensively assess your understanding of the Python programming concepts covered throughout the "100 Days of Code" bootcamp. It includes a mix of question types to evaluate your conceptual knowledge, problem-solving abilities, and practical coding skills. Please read each question carefully and provide detailed answers. Good luck!

---

**Instructions:** Answer all questions to the best of your ability. For coding questions, strive for clean, readable, and correct Python code.

---

**Part 1: Concept Definitions (4 questions)**

1.  **Question:** Explain the difference between `mutable` and `immutable` data types in Python. Provide an example of each.
    **Answer:**
    Mutable data types are those whose internal state can be changed after they are created. This means you can modify elements within the data structure without creating a new object. Examples include `lists`, `dictionaries`, and `sets`.
    Immutable data types, on the other hand, cannot be changed after they are created. Any operation that appears to modify an immutable object actually creates a new object. Examples include `integers`, `floats`, `strings`, `tuples`, and `frozensets`.

    *Example of Mutable:*
    ```python
    my_list = [1, 2, 3]
    my_list.append(4) # Modifies the original list
    print(my_list) # Output: [1, 2, 3, 4]
    ```

    *Example of Immutable:*
    ```python
    my_string = "hello"
    # my_string[0] = 'H' # This would raise a TypeError
    new_string = my_string.upper() # Creates a new string "HELLO"
    print(my_string) # Output: hello (original string unchanged)
    print(new_string) # Output: HELLO
    ```

2.  **Question:** Describe the concept of `scope` in Python, specifically differentiating between `local`, `enclosing (nonlocal)`, and `global` scope.
    **Answer:**
    Scope in Python refers to the region of a program where a variable is accessible. Python follows the LEGB rule (Local, Enclosing, Global, Built-in) to determine the order in which scopes are searched for a variable.

    *   **Local Scope:** Variables defined inside a function. They are only accessible from within that function. Once the function finishes execution, local variables are destroyed.
        ```python
        def my_function():
            local_var = "I am local"
            print(local_var)
        my_function()
        # print(local_var) # This would raise a NameError
        ```
    *   **Enclosing (Nonlocal) Scope:** Applies to nested functions. If a variable is not found in the local scope of an inner function, Python looks in the scope of the enclosing (outer) function. The `nonlocal` keyword can be used to modify a variable in an enclosing scope.
        ```python
        def outer_function():
            enclosing_var = "I am in enclosing scope"
            def inner_function():
                # nonlocal enclosing_var # Uncomment to modify enclosing_var
                print(enclosing_var)
            inner_function()
        outer_function()
        ```
    *   **Global Scope:** Variables defined at the top level of a script, outside of any function. They are accessible from anywhere in the module. The `global` keyword can be used inside a function to explicitly modify a global variable.
        ```python
        global_var = "I am global"
        def another_function():
            print(global_var)
        another_function()
        ```

3.  **Question:** What is `Polymorphism` in the context of Object-Oriented Programming (OOP) in Python? Provide a simple example.
    **Answer:**
    Polymorphism, meaning "many forms," is a core concept in OOP that allows objects of different classes to be treated as objects of a common interface or superclass. In Python, polymorphism is often achieved through method overriding (where a subclass provides a specific implementation for a method that is already defined in its superclass) or through duck typing (where the type of an object is less important than *what methods it implements*). If an object "walks like a duck and quacks like a duck," then Python treats it as a duck, regardless of its actual class.

    *Example:*
    ```python
    class Dog:
        def speak(self):
            return "Woof!"

    class Cat:
        def speak(self):
            return "Meow!"

    class Duck:
        def speak(self):
            return "Quack!"

    def make_animal_speak(animal):
        print(animal.speak())

    dog = Dog()
    cat = Cat()
    duck = Duck()

    make_animal_speak(dog)  # Output: Woof!
    make_animal_speak(cat)  # Output: Meow!
    make_animal_speak(duck) # Output: Quack!
    ```
    In this example, `make_animal_speak` can accept any object that has a `speak()` method, demonstrating polymorphism through duck typing.

4.  **Question:** Why is `PEP 8` important in Python development? List at least three key benefits of adhering to it.
    **Answer:**
    PEP 8 (Python Enhancement Proposal 8) is the style guide for Python code. It provides conventions for writing clear, readable, and consistent Python code.

    *   **Benefits of adhering to PEP 8:**
        1.  **Readability:** Consistent styling makes code much easier to read and understand, not just for others, but also for the original author when revisiting it later. This reduces cognitive load.
        2.  **Maintainability:** Well-formatted code is easier to debug, modify, and extend. Developers spend less time trying to decipher confusing syntax and more time on actual problem-solving.
        3.  **Collaboration:** When multiple developers work on the same codebase, a shared style guide ensures consistency across contributions, making merging and code reviews smoother and more efficient.
        4.  **Professionalism:** Adhering to established conventions is a mark of professional development and indicates attention to detail and a commitment to quality.
        5.  **Reduced Errors:** Clearer code often leads to fewer subtle bugs that might arise from misinterpretations of logic due to poor formatting.

**Part 2: Code Tracing (3 questions)**

5.  **Question:** What will be the output of the following Python code? Explain your reasoning.
    ```python
    def calculate_sum(numbers):
        total = 0
        for num in numbers:
            if num % 2 == 0:
                total += num
            else:
                total -= num
        return total

    data = [10, 5, 8, 3, 12]
    result = calculate_sum(data)
    print(result)
    ```
    **Answer:**
    The output will be `22`.

    *Reasoning:*
    The `calculate_sum` function iterates through the `numbers` list.
    -   `num = 10` (even): `total = 0 + 10 = 10`
    -   `num = 5` (odd): `total = 10 - 5 = 5`
    -   `num = 8` (even): `total = 5 + 8 = 13`
    -   `num = 3` (odd): `total = 13 - 3 = 10`
    -   `num = 12` (even): `total = 10 + 12 = 22`
    Finally, the function returns `22`, which is then printed.

6.  **Question:** Consider the following dictionary and loop. What will be printed?
    ```python
    inventory = {
        "apples": 50,
        "bananas": 30,
        "oranges": 70,
        "grapes": 25
    }

    for item, quantity in inventory.items():
        if quantity > 40:
            print(f"High stock: {item}")
        elif quantity < 30:
            print(f"Low stock: {item}")
        else:
            print(f"Medium stock: {item}")
    ```
    **Answer:**
    The output will be:
    ```
    High stock: apples
    Medium stock: bananas
    High stock: oranges
    Low stock: grapes
    ```

    *Reasoning:*
    The code iterates through the `inventory` dictionary's key-value pairs using `items()`.
    -   `item="apples"`, `quantity=50`: `50 > 40` is true, so "High stock: apples" is printed.
    -   `item="bananas"`, `quantity=30`: `30 > 40` is false, `30 < 30` is false, so "Medium stock: bananas" is printed.
    -   `item="oranges"`, `quantity=70`: `70 > 40` is true, so "High stock: oranges" is printed.
    -   `item="grapes"`, `quantity=25`: `25 > 40` is false, `25 < 30` is true, so "Low stock: grapes" is printed.

7.  **Question:** What is the final value of `x` after the execution of this code snippet?
    ```python
    x = 0
    for i in range(3):
        for j in range(2):
            if i == j:
                x += 1
            else:
                x -= 1
    ```
    **Answer:**
    The final value of `x` will be `-3`.

    *Reasoning:*
    The code uses nested loops. The outer loop runs for `i = 0, 1, 2`. The inner loop runs for `j = 0, 1`.
    -   **i = 0:**
        -   `j = 0`: `i == j` (0 == 0) is true. `x = 0 + 1 = 1`.
        -   `j = 1`: `i == j` (0 == 1) is false. `x = 1 - 1 = 0`.
    -   **i = 1:**
        -   `j = 0`: `i == j` (1 == 0) is false. `x = 0 - 1 = -1`.
        -   `j = 1`: `i == j` (1 == 1) is true. `x = -1 + 1 = 0`.
    -   **i = 2:**
        -   `j = 0`: `i == j` (2 == 0) is false. `x = 0 - 1 = -1`.
        -   `j = 1`: `i == j` (2 == 1) is false. `x = -1 - 1 = -2`.
    -   `x` is initialized to `0`. After the loops, the final value of `x` is `-2`.
    
    `x = 0`

    `i = 0`:
      `j = 0`: `i == j` (0 == 0) is true. `x = 0 + 1 = 1`.
      `j = 1`: `i == j` (0 == 1) is false. `x = 1 - 1 = 0`.
    (End of `i = 0` loop, `x` is `0`)

    `i = 1`:
      `j = 0`: `i == j` (1 == 0) is false. `x = 0 - 1 = -1`.
      `j = 1`: `i == j` (1 == 1) is true. `x = -1 + 1 = 0`.
    (End of `i = 1` loop, `x` is `0`)

    `i = 2`:
      `j = 0`: `i == j` (2 == 0) is false. `x = 0 - 1 = -1`.
      `j = 1`: `i == j` (2 == 1) is false. `x = -1 - 1 = -2`.
    (End of `i = 2` loop, `x` is `-2`)

    Final value of `x` is `-2`.

    
    Initial: `x = 0`

    Loop `i` from `0` to `2`:
    -   **`i = 0`**:
        -   Loop `j` from `0` to `1`:
            -   **`j = 0`**: `i == j` (0 == 0) is true. `x = x + 1` -> `x = 0 + 1 = 1`.
            -   **`j = 1`**: `i == j` (0 == 1) is false. `x = x - 1` -> `x = 1 - 1 = 0`.
    -   **`i = 1`**:
        -   Loop `j` from `0` to `1`:
            -   **`j = 0`**: `i == j` (1 == 0) is false. `x = x - 1` -> `x = 0 - 1 = -1`.
            -   **`j = 1`**: `i == j` (1 == 1) is true. `x = x + 1` -> `x = -1 + 1 = 0`.
    -   **`i = 2`**:
        -   Loop `j` from `0` to `1`:
            -   **`j = 0`**: `i == j` (2 == 0) is false. `x = x - 1` -> `x = 0 - 1 = -1`.
            -   **`j = 1`**: `i == j` (2 == 1) is false. `x = x - 1` -> `x = -1 - 1 = -2`.

    The final value of `x` is `-2`. My previous answer was correct, I just doubted myself. I will stick with `-2`.

**Part 3: Code Writing (4 questions)**

8.  **Question:** Write a Python function called `reverse_string_words` that takes a sentence (string) as input and returns a new string where the order of words is reversed, but the characters within each word remain in their original order.
    *Example:* `reverse_string_words("Python is fun")` should return `"fun is Python"`.
    **Answer:**
    ```python
    def reverse_string_words(sentence):
        """
        Reverses the order of words in a sentence while keeping characters within words intact.

        Args:
            sentence (str): The input sentence.

        Returns:
            str: The sentence with words reversed.
        """
        words = sentence.split() # Splits the sentence into a list of words
        reversed_words = words[::-1] # Reverses the order of words in the list
        return " ".join(reversed_words) # Joins the reversed words back into a string

    # Example usage:
    print(reverse_string_words("Python is fun"))
    print(reverse_string_words("Hello world from Python"))
    ```

9.  **Question:** Create a Python class named `Book` with an `__init__` method that takes `title`, `author`, and `isbn` as arguments. Include a method `display_info` that prints the book's details. Then, create two `Book` objects and call `display_info` for each.
    **Answer:**
    ```python
    class Book:
        def __init__(self, title, author, isbn):
            """
            Initializes a new Book object.

            Args:
                title (str): The title of the book.
                author (str): The author of the book.
                isbn (str): The International Standard Book Number.
            """
            self.title = title
            self.author = author
            self.isbn = isbn

        def display_info(self):
            """
            Prints the details of the book.
            """
            print(f"Title: {self.title}")
            print(f"Author: {self.author}")
            print(f"ISBN: {self.isbn}")
            print("-" * 20) # Separator for readability

    # Create two Book objects
    book1 = Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "978-0345391803")
    book2 = Book("Clean Code", "Robert C. Martin", "978-0132350884")

    # Call display_info for each book
    book1.display_info()
    book2.display_info()
    ```

10. **Question:** Write a Python function `read_and_count_words` that takes a filename as input. The function should open the file, read its content, and return a dictionary where keys are words (case-insensitive) and values are their counts. Ensure proper error handling for `FileNotFoundError`.
    **Answer:**
    ```python
    def read_and_count_words(filename):
        """
        Reads a text file, counts the occurrences of each word (case-insensitive),
        and returns the results in a dictionary.

        Args:
            filename (str): The path to the text file.

        Returns:
            dict: A dictionary where keys are words and values are their counts.
                  Returns an empty dictionary if the file is empty or not found.
        """
        word_counts = {}
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                content = file.read()
                # Simple tokenization: convert to lowercase and split by non-alphanumeric
                # This is a basic approach; more robust tokenization might use regex or NLTK
                words = [word.strip(".,!?;:\"'()").lower() for word in content.split() if word.strip(".,!?;:\"'()")]
                
                for word in words:
                    word_counts[word] = word_counts.get(word, 0) + 1
        except FileNotFoundError:
            print(f"Error: The file '{filename}' was not found.")
            return {} # Return an empty dictionary on error
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
            return {}
        return word_counts

    # Create a dummy file for testing
    with open("sample.txt", "w") as f:
        f.write("Python is a powerful language. Python is fun. Fun to learn.")

    # Example usage:
    print("Word counts for 'sample.txt':")
    print(read_and_count_words("sample.txt"))

    print("\nWord counts for a non-existent file:")
    print(read_and_count_words("non_existent_file.txt"))

    # Expected output for sample.txt:
    # {'python': 2, 'is': 2, 'a': 1, 'powerful': 1, 'language': 1, 'fun': 2, 'to': 1, 'learn': 1}
    ```
    *Partial Credit Guidance:* Full credit requires correct word counting, case-insensitivity, and `FileNotFoundError` handling. Partial credit for correct word counting but missing case-insensitivity or error handling.

11. **Question:** Write a Python function `fetch_random_joke` that makes an API request to `https://official-joke-api.appspot.com/random_joke` and prints the setup and punchline of the joke. Include error handling for network issues or unexpected API responses.
    **Answer:**
    ```python
    import requests

    def fetch_random_joke():
        """
        Fetches a random joke from the Official Joke API and prints its setup and punchline.
        Includes error handling for network issues and API response parsing.
        """
        api_url = "https://official-joke-api.appspot.com/random_joke"
        try:
            response = requests.get(api_url, timeout=5) # Set a timeout for the request
            response.raise_for_status() # Raises an HTTPError for bad responses (4xx or 5xx)

            joke_data = response.json() # Parse the JSON response

            if "setup" in joke_data and "punchline" in joke_data:
                print("--- Random Joke ---")
                print(f"Setup: {joke_data['setup']}")
                print(f"Punchline: {joke_data['punchline']}")
                print("-------------------")
            else:
                print("Error: Unexpected joke format from API.")
                print(f"Raw API response: {joke_data}")

        except requests.exceptions.Timeout:
            print("Error: The API request timed out.")
        except requests.exceptions.ConnectionError:
            print("Error: Could not connect to the API. Check your internet connection.")
        except requests.exceptions.HTTPError as e:
            print(f"Error: HTTP request failed with status code {e.response.status_code}.")
        except ValueError: # Catches JSON decoding errors
            print("Error: Could not decode JSON response from API.")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

    # Example usage:
    fetch_random_joke()
    ```
    *Partial Credit Guidance:* Full credit requires correct API call, printing setup/punchline, and handling at least `requests.exceptions.ConnectionError` and `requests.exceptions.HTTPError`. Partial credit for making the API call but missing robust error handling or incorrect data extraction.

**Part 4: Design and Debugging Problems (4 questions)**

12. **Question:** You are given the following Python code that intends to calculate the average of numbers in a list. Identify and explain the bug(s) in the code, then provide the corrected version.
    ```python
    def calculate_average(numbers):
        total = 0
        for num in numbers:
            total += num
        average = total / len(numbers)
        return average

    data = []
    avg = calculate_average(data)
    print(avg)
    ```
    **Answer:**
    *   **Bug Identification and Explanation:**
        The primary bug occurs when the input list `numbers` is empty. In this scenario, `len(numbers)` would return `0`. Attempting to perform `total / len(numbers)` (which becomes `0 / 0`) will result in a `ZeroDivisionError`. The current code does not handle this edge case.

    *   **Corrected Version:**
        ```python
        def calculate_average(numbers):
            """
            Calculates the average of numbers in a list.
            Handles the case of an empty list to prevent ZeroDivisionError.

            Args:
                numbers (list): A list of numeric values.

            Returns:
                float: The average of the numbers, or 0.0 if the list is empty.
            """
            if not numbers: # Check if the list is empty
                print("Warning: Cannot calculate average of an empty list. Returning 0.")
                return 0.0 # Or raise a ValueError, depending on desired behavior
            
            total = sum(numbers) # Use built-in sum() for conciseness
            average = total / len(numbers)
            return average

        # Test cases
        data1 = [10, 20, 30]
        print(f"Average of {data1}: {calculate_average(data1)}") # Expected: 20.0

        data2 = []
        print(f"Average of {data2}: {calculate_average(data2)}") # Expected: Warning and 0.0

        data3 = [5]
        print(f"Average of {data3}: {calculate_average(data3)}") # Expected: 5.0
        ```
    *Partial Credit Guidance:* Full credit for identifying the `ZeroDivisionError` and providing a robust fix. Partial credit for identifying the error but providing a less robust fix (e.g., only checking `len(numbers) == 0` without a clear return value or error message).

13. **Question:** You are tasked with designing a system to manage user accounts for a new application. Each user needs a `username`, `email`, and `password`. You also need to track if their account is `active` and when it was `created`.
    *   **a) Design:** Propose a Python class structure (`User` class) to represent a single user, including its attributes and an `__init__` method.
    *   **b) Enhancement:** Add a method to the `User` class called `deactivate_account` that changes the `active` status to `False`.
    **Answer:**
    *   **a) Design of `User` class:**
        ```python
        import datetime

        class User:
            def __init__(self, username, email, password):
                """
                Initializes a new User account.

                Args:
                    username (str): The unique username for the user.
                    email (str): The user's email address.
                    password (str): The user's password (in a real app, this would be hashed).
                """
                self.username = username
                self.email = email
                self._password = password # Using a convention for "private" attribute
                self.is_active = True
                self.created_at = datetime.datetime.now()

            def display_user_info(self):
                """Prints basic user information."""
                print(f"Username: {self.username}")
                print(f"Email: {self.email}")
                print(f"Account Active: {self.is_active}")
                print(f"Created On: {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}")
        ```

    *   **b) Enhancement: `deactivate_account` method:**
        ```python
        import datetime

        class User:
            def __init__(self, username, email, password):
                self.username = username
                self.email = email
                self._password = password
                self.is_active = True
                self.created_at = datetime.datetime.now()

            def display_user_info(self):
                print(f"Username: {self.username}")
                print(f"Email: {self.email}")
                print(f"Account Active: {self.is_active}")
                print(f"Created On: {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}")

            def deactivate_account(self):
                """
                Deactivates the user's account by setting is_active to False.
                """
                if self.is_active:
                    self.is_active = False
                    print(f"Account for '{self.username}' has been deactivated.")
                else:
                    print(f"Account for '{self.username}' is already inactive.")

        # Example usage:
        user1 = User("johndoe", "john@example.com", "securepass123")
        user1.display_user_info()
        user1.deactivate_account()
        user1.display_user_info()
        user1.deactivate_account() # Attempt to deactivate again
        ```
    *Partial Credit Guidance:* Full credit for a correct class definition with all attributes and the `deactivate_account` method. Partial credit for correct attributes but missing the `deactivate_account` method or incorrect initialization.

14. **Question:** You have a list of dictionaries, where each dictionary represents a student with keys `name` (string) and `score` (integer). You want to sort this list by `score` in descending order. Explain how you would achieve this using Python, providing a code example.
    **Answer:**
    To sort a list of dictionaries by a specific key, we can use Python's built-in `sort()` method for lists or the `sorted()` function. The key to sorting by a specific dictionary value is to provide a `key` argument to these functions, which should be a function that extracts the comparison key from each element in the list. A `lambda` function is particularly useful for this.

    *Explanation:*
    We'll use `sorted()` for this example as it returns a new sorted list, leaving the original list unchanged. The `key` argument will be a `lambda` function, `lambda student: student['score']`, which tells `sorted()` to use the value associated with the 'score' key for comparison. To sort in descending order, we also set the `reverse` argument to `True`.

    *Code Example:*
    ```python
    students = [
        {"name": "Alice", "score": 85},
        {"name": "Bob", "score": 92},
        {"name": "Charlie", "score": 78},
        {"name": "David", "score": 92}, # Added to test stable sort if scores are equal
        {"name": "Eve", "score": 95}
    ]

    # Sort the list of dictionaries by 'score' in descending order
    sorted_students = sorted(students, key=lambda student: student['score'], reverse=True)

    print("Students sorted by score (descending):")
    for student in sorted_students:
        print(student)
    ```
    *Expected Output:*
    ```
    Students sorted by score (descending):
    {'name': 'Eve', 'score': 95}
    {'name': 'Bob', 'score': 92}
    {'name': 'David', 'score': 92}
    {'name': 'Alice', 'score': 85}
    {'name': 'Charlie', 'score': 78}
    ```
    *Partial Credit Guidance:* Full credit for using `sorted()` or `list.sort()` with a `lambda` function and `reverse=True`. Partial credit for attempting to sort but missing the `key` argument or `reverse` argument, or using a less efficient/correct method.

15. **Question:** You are writing a script that processes user input. You want to repeatedly ask the user for a number until they enter a valid integer. If they enter non-numeric input, you should print an error message and ask again. If they enter an integer, the loop should terminate. Provide the Python code for this interaction.
    **Answer:**
    To handle this scenario, we'll use a `while True` loop that continues indefinitely until a valid integer is provided. Inside the loop, we'll use a `try-except` block. The `try` block will attempt to convert the user's input to an integer. If this conversion is successful, we'll print a success message and `break` out of the loop. If a `ValueError` occurs (meaning the input was not a valid integer), the `except` block will catch it, print an error message, and the loop will continue to the next iteration, prompting the user again.

    *Code Example:*
    ```python
    def get_valid_integer_input():
        """
        Prompts the user to enter an integer repeatedly until valid input is received.

        Returns:
            int: The valid integer entered by the user.
        """
        while True:
            user_input = input("Please enter an integer: ")
            try:
                number = int(user_input)
                print(f"Thank you! You entered the integer: {number}")
                return number
            except ValueError:
                print("Invalid input. That was not a valid integer. Please try again.")
            except Exception as e:
                print(f"An unexpected error occurred: {e}. Please try again.")

    # Example usage:
    my_number = get_valid_integer_input()
    print(f"Program continues with number: {my_number}")
    ```
    *Partial Credit Guidance:* Full credit for a `while True` loop with a `try-except ValueError` block that correctly handles invalid input and breaks on valid input. Partial credit for attempting a loop and error handling but with logical flaws or incorrect error type catching.

---

## Course Conclusion

Congratulations! You have successfully completed the "100 Days of Code: The Complete Python Pro Bootcamp." This journey has been an intensive and rewarding dive into the world of Python programming, transforming you from a complete beginner into a capable and confident Python developer. You've not just learned syntax; you've built projects, debugged code, understood core computer science concepts, and developed a problem-solving mindset crucial for any programmer.

You are now equipped with a robust foundation in Python. You can write clean, readable, and efficient Python code following PEP 8 guidelines. You understand and can apply fundamental programming constructs like control flow, functions, and data structures (lists, dictionaries, tuples, sets). You've mastered object-oriented programming principles, enabling you to design and implement complex, modular applications. Furthermore, you've gained practical experience with file I/O, error handling, and interacting with external APIs, which are essential skills for building real-world applications. The capstone project and final examination have demonstrated your ability to integrate these diverse skills into functional solutions.

### Where to Go Next: Continuing Your Python Journey

The completion of this bootcamp is a significant milestone, but it's also just the beginning of your continuous learning journey in programming. To truly master Python and expand your career opportunities, consistent practice and exploration are key. Here are some recommended next steps and resources to help you continue building upon your strong foundation:

1.  **Build More Projects:** The best way to learn is by doing. Start small, think of problems you want to solve, and build projects. Revisit your capstone project and add more features. Explore online platforms like HackerRank, LeetCode, or Codewars for coding challenges. Consider contributing to open-source projects on GitHub.
2.  **Deepen Your Knowledge with Books:**
    *   **"Automate the Boring Stuff with Python" by Al Sweigart:** Excellent for practical scripting and automation tasks.
    *   **"Fluent Python" by Luciano Ramalho:** For intermediate to advanced Pythonistas looking to understand Python's internal mechanisms and idiomatic usage.
    *   **"Python Crash Course" by Eric Matthes:** Another great resource for reinforcing fundamentals and building projects.
3.  **Explore Advanced Python Courses & Specializations:**
    *   **Web Development with Python:** Dive into frameworks like **Flask** or **Django** to build powerful web applications. Cohortia offers specialized courses in these areas.
    *   **Data Science and Machine Learning:** Learn to use libraries like **Pandas**, **NumPy**, **Matplotlib**, and **Scikit-learn** to analyze data and build intelligent systems. Cohortia has learning paths dedicated to Data Science.
    *   **Game Development with Pygame:** If you're interested in creating games, `Pygame` is a fantastic library to get started.
    *   **DevOps and Automation:** Python is heavily used in scripting for system administration, cloud automation, and CI/CD pipelines.
4.  **Join the Python Community:** Engage with other Python developers.
    *   **Online Forums & Communities:** Stack Overflow, Reddit's r/python, Python Discord servers.
    *   **Local Meetups:** Search for Python user groups (PyUGs) in your area to network and learn from experienced developers.
    *   **Conferences:** Attend PyCon or other regional Python conferences (virtually or in person).
5.  **Understand Data Structures and Algorithms:** While this bootcamp introduced some, a deeper dive into common algorithms and data structures (like linked lists, trees, graphs) will significantly enhance your problem-solving skills and prepare you for technical interviews.

Remember, every expert was once a beginner. Embrace challenges, don't be afraid to make mistakes, and keep coding. Your journey as a Python developer has just begun, and the possibilities are endless. We at Cohortia are incredibly proud of your dedication and progress. Keep learning, keep building, and keep innovating!

---


> End of Syllabus: 100 Days of Code: The Complete Python Pro Bootcamp
> Course ID: 100-days-of-code-the-complete-python-pro-bootcamp
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Programming & Software Development Fundamentals
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
