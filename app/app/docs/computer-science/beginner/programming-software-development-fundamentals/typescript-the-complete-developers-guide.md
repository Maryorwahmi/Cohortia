---
Title: TypeScript: The Complete Developer's Guide
Course ID: typescript-the-complete-developers-guide
Provider: Cohortia
Original reference: Udemy (Stephen Grider) / Online
Platform: Cohortia
Level: Beginner
Type: Course
Duration: Self-paced
Cost: Included with Cohortia
URL: Cohortia course page (original reference: (URL not verified))
Certification: Cohortia Certificate of Completion
Category: Computer Science
Subcategory: Programming & Software Development Fundamentals
Skills: TypeScript, JavaScript, Web Development, Node.js, React, Angular, Vue.js, Static Typing, Object-Oriented Programming, Frontend Development, Backend Development
Ownership note: Cohortia curates and rebuilds content for enhanced learning experiences and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "TypeScript: The Complete Developer's Guide," a comprehensive journey designed to transform your JavaScript development skills by introducing the power of static typing. In today's complex software landscape, maintaining large-scale applications with JavaScript alone can become a significant challenge due to its dynamic nature. TypeScript, a superset of JavaScript, addresses these challenges head-on by providing type safety, robust tooling, and enhanced code readability and maintainability, making it an indispensable tool for modern developers. This course will guide you from the foundational concepts of TypeScript to advanced type manipulation techniques, ensuring you gain a deep understanding of how to leverage TypeScript effectively in any project.

This course is meticulously structured to provide a hands-on learning experience. We begin by exploring the fundamental reasons for adopting TypeScript, setting up your development environment, and understanding basic types and type inference. As we progress, you will delve into more complex type annotations, interfaces, classes, and enums, learning how to structure your code for clarity and error prevention. We will then tackle advanced topics such as generics, decorators, and module systems, demonstrating how TypeScript integrates seamlessly with modern JavaScript ecosystems like Node.js, React, Angular, and Vue.js, enhancing both development speed and application reliability.

Throughout the curriculum, you will engage with practical examples, real-world scenarios, and coding exercises designed to solidify your understanding. We emphasize not just *what* TypeScript features are, but *why* they exist and *how* to apply them effectively to solve common development problems. You'll learn best practices for configuring your TypeScript projects, integrating with existing JavaScript libraries, and preparing your TypeScript code for production environments. By the end of this course, you will not only be proficient in writing robust, scalable TypeScript applications but also possess the confidence to advocate for and implement TypeScript in your professional projects.

Whether you are a seasoned JavaScript developer looking to enhance your toolkit, or a beginner eager to start your programming journey with a language that offers both flexibility and safety, this guide provides all the knowledge and practical experience you need. Join us to unlock the full potential of TypeScript and elevate your development prowess, building applications that are easier to understand, debug, and scale.

Upon completing this course, you will be able to:
*   Understand the core benefits of TypeScript and how it enhances JavaScript development.
*   Set up a TypeScript development environment and compile TypeScript code effectively.
*   Master basic and advanced type annotations, including primitives, arrays, tuples, and objects.
*   Design robust application architectures using interfaces, classes, and enums.
*   Implement powerful type-safe functions, including overloads and generics.
*   Manage code organization and dependencies using TypeScript modules and namespaces.
*   Leverage advanced TypeScript features like decorators, utility types, and conditional types.
*   Integrate TypeScript seamlessly into existing JavaScript projects and popular frameworks.
*   Configure `tsconfig.json` for various project needs and apply best practices for linting and formatting.
*   Write maintainable, scalable, and error-resistant code using TypeScript's type system.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Getting Started with TypeScript | 3 |
| 2 | Core TypeScript Features - Types in Depth | 3 |
| 3 | Classes, Enums, and Advanced Types | 4 |
| 4 | Working with Modules, Decorators, and Modern JS | 4 |
| 5 | Advanced Generics, Utility Types, and Type Manipulation | 5 |
| 6 | Project Setup, Configuration, and Best Practices | 5 |

Total chapters: 24
---

## Module 1: Getting Started with TypeScript

**Module Goal:** Equip learners with a foundational understanding of TypeScript, its core benefits, and the practical skills to set up a development environment and write basic, type-safe code.

---

### Chapter 1.1 — Why TypeScript? Understanding the Core Problem

#### Learning objectives
*   Understand the inherent limitations and common pitfalls of large-scale JavaScript development.
*   Identify the core benefits that static typing, as implemented in TypeScript, brings to software projects.
*   Explain how TypeScript acts as a superset of JavaScript and its role in improving code quality and developer experience.
*   Compare and contrast the development workflow and error detection mechanisms between pure JavaScript and TypeScript.
*   Recognize common misconceptions about TypeScript and clarify its true purpose and capabilities.

#### Detailed lesson content
Welcome to the exciting world of TypeScript! Before we dive into writing code, it's crucial to understand *why* TypeScript exists and the fundamental problems it aims to solve. Many developers coming from a JavaScript background might wonder if another layer of complexity is truly necessary. The answer, especially for larger, more complex applications, is a resounding yes. JavaScript, by its very nature, is a dynamically typed language. This means that variable types are determined at runtime, and the language is very forgiving about what kind of data you can assign to a variable. While this flexibility can be great for quick scripts and prototyping, it becomes a significant liability as projects grow in size and complexity.

Consider a scenario where you're working on a large e-commerce application. You have a function designed to calculate the total price of items in a user's shopping cart. In pure JavaScript, you might write something like `function calculateTotal(items) { /* ... */ }`. What if, by mistake, someone calls this function with an array of strings instead of an array of objects with `price` properties? Or perhaps they pass a single item object instead of an array? JavaScript won't complain until that line of code actually executes, potentially deep within your application, leading to a `TypeError` or `undefined is not a function` error that crashes the user experience. These are known as "runtime errors," and they are notoriously difficult to track down and debug, especially in production environments. The core problem is that JavaScript lacks "implicit contracts"—there's no clear, enforced agreement about the types of data a function expects or returns.

TypeScript addresses this challenge head-on by introducing *static typing*. Static typing means that variable types are checked *before* the code runs, typically during the compilation phase. TypeScript is a "superset" of JavaScript, meaning all valid JavaScript code is also valid TypeScript code. However, TypeScript adds optional static types to JavaScript, allowing you to explicitly declare the expected type of variables, function parameters, and return values. When you write TypeScript code, a special program called the TypeScript compiler (or `tsc`) checks your code for type errors. If you try to pass a string where a number is expected, the compiler will flag it immediately, preventing potential runtime errors. This early error detection is one of TypeScript's most powerful features, catching bugs before they even reach the browser or Node.js environment.

The benefits of static typing extend far beyond just catching errors. It significantly improves code readability and maintainability. When you see `function calculateTotal(items: Product[]): number`, you immediately understand that `items` is expected to be an array of `Product` objects, and the function will return a `number`. This clarity acts as living documentation, making it easier for new team members to onboard and for existing developers to refactor or extend existing code with confidence. Furthermore, TypeScript dramatically enhances the developer experience by empowering modern IDEs (like VS Code). With type information available, your IDE can provide intelligent autocompletion, helpful hints, signature help, and robust refactoring tools that simply aren't possible with dynamically typed JavaScript. Imagine refactoring a property name across hundreds of files; with TypeScript, your IDE can do it safely and accurately, knowing exactly where that property is used and what its type is.

A common misconception is that TypeScript is a completely new programming language you need to learn from scratch. This isn't true; TypeScript *is* JavaScript, just with an added type system. If you know JavaScript, you already know most of TypeScript. Another frequent concern is that TypeScript adds too much boilerplate or slows down development. While there's an initial learning curve and some setup, the time saved by preventing runtime errors, improving refactoring safety, and leveraging superior tooling often far outweighs the initial investment, especially in medium to large projects. TypeScript code is ultimately "transpiled" back into plain JavaScript, which then runs in any JavaScript environment. This means your users never see or download TypeScript; they only interact with standard JavaScript. By embracing TypeScript, you're not abandoning JavaScript; you're simply giving it a powerful upgrade, making your codebases more robust, scalable, and a joy to work with.

#### Key concepts
*   **Dynamic Typing:** A characteristic of languages like JavaScript where variable types are determined at runtime, offering flexibility but increasing the risk of runtime errors.
*   **Static Typing:** A characteristic of languages like TypeScript where variable types are checked at compile-time (before execution), catching type-related errors early.
*   **Superset:** TypeScript is a superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code, but TypeScript adds additional features (like types).
*   **Transpilation:** The process by which TypeScript code is converted ("transpiled") into plain JavaScript code that can be executed by browsers or Node.js.
*   **Runtime Errors:** Errors that occur during the execution of a program, often due to unexpected data types or values.
*   **Compile-time Errors:** Errors detected by the TypeScript compiler before the program runs, typically related to type mismatches or syntax issues.

#### Hands-on activity
**Activity: Identifying JavaScript's Type Pitfalls**

Let's explore a common JavaScript function and identify where type-related issues could arise.

**Instructions:**
1.  Open your preferred JavaScript development environment (e.g., a browser console, a local `.js` file, or a tool like CodePen).
2.  Copy and paste the following JavaScript function:

    ```javascript
    function processUserData(user) {
        console.log(`Welcome, ${user.firstName} ${user.lastName}!`);
        if (user.isAdmin) {
            console.log("You have administrative privileges.");
        }
        // Imagine more complex logic here that depends on user properties
        // For example, accessing user.preferences.theme
    }
    ```
3.  Now, try calling this function with different kinds of inputs and observe the behavior:

    *   **Scenario 1 (Expected):**
        ```javascript
        const validUser = {
            firstName: "Alice",
            lastName: "Smith",
            age: 30,
            isAdmin: true
        };
        processUserData(validUser);
        ```
    *   **Scenario 2 (Missing property):**
        ```javascript
        const incompleteUser = {
            firstName: "Bob",
            age: 25
            // lastName and isAdmin are missing
        };
        processUserData(incompleteUser);
        ```
    *   **Scenario 3 (Incorrect type):**
        ```javascript
        const wrongTypeUser = {
            firstName: "Charlie",
            lastName: 42, // lastName should be a string, but it's a number
            isAdmin: "yes" // isAdmin should be a boolean, but it's a string
        };
        processUserData(wrongTypeUser);
        ```
    *   **Scenario 4 (Completely wrong input):**
        ```javascript
        processUserData("Dave"); // Passing a string instead of an object
        ```

**Reflection:**
*   For which scenarios did JavaScript throw an error immediately?
*   For which scenarios did it produce unexpected output without an error, or an error later in the execution?
*   How would TypeScript's static analysis have helped prevent these issues *before* running the code? Think about what kind of type definition you would write for `user`.

#### Assessment idea
1.  **Question:** Which of the following is a primary benefit of using TypeScript over plain JavaScript for large-scale applications?
    a) TypeScript code runs faster in the browser.
    b) TypeScript eliminates the need for a package manager like npm.
    c) TypeScript catches type-related errors at compile-time, preventing many runtime bugs.
    d) TypeScript is a completely new programming language that replaces JavaScript.

    **Correct Answer:** c) TypeScript catches type-related errors at compile-time, preventing many runtime bugs.
    **Explanation:** While TypeScript can lead to more robust applications, it doesn't inherently make code run faster (it compiles to JS). It still relies on package managers. Most importantly, it's a superset of JavaScript, not a replacement, and its main advantage is early error detection through static typing.

2.  **Question:** You are maintaining a large JavaScript codebase for a financial application. A critical function `calculateInterest(principal, rate, years)` is sometimes called with `principal` as a string instead of a number, leading to incorrect calculations that are only discovered during end-of-month reports. How would TypeScript most effectively help prevent this specific issue?

    **Correct Answer:** TypeScript would allow you to explicitly define the types for `principal`, `rate`, and `years` as `number` in the function signature, like `function calculateInterest(principal: number, rate: number, years: number): number`. The TypeScript compiler would then flag any attempt to call `calculateInterest` with a string for `principal` as a compile-time error, preventing the incorrect calculation from ever reaching production. This shifts error detection from runtime to development time.

#### AI generation note
Create an 8-minute animated explainer video comparing JavaScript's dynamic typing pitfalls with TypeScript's static typing benefits. Visually demonstrate a JavaScript function failing at runtime due to an incorrect type input (e.g., `user.age.toFixed()` when `age` is `undefined`). Then, show the same scenario in TypeScript, highlighting how the compiler immediately flags the type error during development. Use side-by-side comparisons of code snippets. The tone should be encouraging and professional, emphasizing problem-solving. Include an interactive element where the user identifies a type error in a simple JS snippet before the TS solution is revealed. Accessibility: provide captions and a full transcript.

---

### Chapter 1.2 — Setting Up Your TypeScript Development Environment

#### Learning objectives
*   Successfully install Node.js and npm, understanding their roles in a TypeScript workflow.
*   Install the TypeScript compiler (`tsc`) globally using npm.
*   Initialize a new TypeScript project and understand the purpose of `tsconfig.json`.
*   Configure essential options within `tsconfig.json` such as `target`, `outDir`, `rootDir`, and `strict`.
*   Compile TypeScript files into JavaScript using the `tsc` command and run the resulting JavaScript.
*   Identify and troubleshoot common setup and compilation errors.

#### Detailed lesson content
Now that we understand *why* TypeScript is so valuable, let's get your development environment ready to start writing some type-safe code. Setting up TypeScript is straightforward, but it involves a few key tools that work together seamlessly. The foundation of almost any modern JavaScript (and therefore TypeScript) development environment is Node.js and its accompanying package manager, npm (Node Package Manager).

**Step 1: Install Node.js and npm**
TypeScript code ultimately needs to be compiled into plain JavaScript to run in browsers or Node.js environments. Node.js provides the JavaScript runtime outside of a browser, and npm is essential for installing packages, including the TypeScript compiler itself. If you don't have Node.js and npm installed, head over to the official Node.js website ([nodejs.org](https://nodejs.org/)) and download the LTS (Long Term Support) version for your operating system. The installation process is typically a simple wizard. Once installed, you can verify your installation by opening your terminal or command prompt and running:

```bash
node -v
npm -v
```
You should see version numbers for both, confirming they are ready.

**Step 2: Install the TypeScript Compiler (`tsc`)**
With npm available, installing the TypeScript compiler is a single command. We'll install it globally so it's accessible from any project directory:

```bash
npm install -g typescript
```
The `-g` flag ensures a global installation. After this, you can verify the TypeScript compiler's version:

```bash
tsc -v
```
This command should output the installed TypeScript version. Congratulations, you now have the core tool!

**Step 3: Initialize a New TypeScript Project**
For any serious TypeScript project, you'll want to set up a project structure. Navigate to your desired project directory in the terminal and create a new folder. Then, initialize a new npm project (which creates a `package.json` file to manage dependencies) and then a TypeScript configuration:

```bash
mkdir my-ts-project
cd my-ts-project
npm init -y # The -y flag accepts all defaults
tsc --init
```
The `tsc --init` command is crucial. It generates a `tsconfig.json` file in your project root. This file is the heart of your TypeScript project's configuration. It tells the TypeScript compiler how to compile your `.ts` files into `.js` files, what language features to target, where to put the output, and much more.

**Step 4: Understanding `tsconfig.json`**
Open the generated `tsconfig.json` file. It's heavily commented, but let's focus on a few key options you'll frequently use:

*   `"target": "es2016"`: This specifies the ECMAScript target version for the compiled JavaScript. For modern applications, `es2016` or `es2018` is often a good balance, ensuring compatibility with most browsers and Node.js versions while allowing modern JS features. If you need to support older environments, you might choose `es5`.
*   `"module": "commonjs"`: This defines the module system for the generated JavaScript. `commonjs` is standard for Node.js projects, while `esnext` or `es2015` might be preferred for browser-based projects using modern import/export syntax.
*   `"outDir": "./dist"`: This is the output directory where the compiled JavaScript files will be placed. It keeps your source TypeScript files separate from your generated JavaScript.
*   `"rootDir": "./src"`: This specifies the root directory of your TypeScript source files. It's common practice to put all your `.ts` files in a `src` folder.
*   `"strict": true`: This is a highly recommended setting! It enables a suite of strict type-checking options that enforce best practices and catch more potential errors. While it might feel a bit restrictive at first, it significantly improves code quality and reduces bugs.
*   `"esModuleInterop": true`: This helps with interoperability between CommonJS and ES Modules, particularly when importing modules. It's generally good to keep this enabled.

For our first project, let's simplify `tsconfig.json`. You can uncomment and adjust these lines:

```json
{
  "compilerOptions": {
    "target": "es2018",                     /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ES2022', 'ESNext'. */
    "module": "commonjs",                   /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', 'es2022', 'esnext'. */
    "outDir": "./dist",                     /* Redirect output structure to the directory. */
    "rootDir": "./src",                     /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "strict": true,                         /* Enable all strict type-checking options. */
    "esModuleInterop": true,                /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    "skipLibCheck": true,                   /* Skip type checking all .d.ts files. */
    "forceConsistentCasingInFileNames": true /* Ensure that casing is consistent in imports. */
  },
  "include": ["src/**/*.ts"],               /* Specify an array of filenames or patterns to include in the program. */
  "exclude": ["node_modules"]               /* Specify an array of filenames or patterns that should be skipped when resolving 'include'. */
}
```

**Step 5: Write Your First TypeScript File and Compile**
Create a new folder named `src` in your project root, and inside `src`, create a file named `index.ts`. Add some simple TypeScript code:

```typescript
// src/index.ts
function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}!`);
}

greet("TypeScript");
// greet(123); // Uncommenting this line will cause a compile-time error!
```

Now, open your terminal in the `my-ts-project` directory and run the TypeScript compiler:

```bash
tsc
```
If everything is set up correctly, you should see a new `dist` folder created, and inside it, an `index.js` file containing the compiled JavaScript:

```javascript
// dist/index.js (compiled from src/index.ts)
function greet(name) {
    console.log("Hello, ".concat(name.toUpperCase(), "!"));
}
greet("TypeScript");
// greet(123); // The TypeScript compiler removed this line if it was commented out,
             // or it would have prevented compilation if uncommented.
```
Notice how the type annotation `: string` is gone in the compiled JavaScript. TypeScript only uses it for type checking, not for runtime execution.

To run your compiled JavaScript, use Node.js:

```bash
node dist/index.js
```
You should see `Hello, TYPESCRIPT!` printed to the console.

**Common Mistakes and Troubleshooting:**
*   **Forgetting `tsc --init`:** Without `tsconfig.json`, `tsc` won't know how to compile your project or where to put outputs.
*   **Incorrect `outDir` or `rootDir`:** Double-check your paths in `tsconfig.json`. If `rootDir` is `src`, ensure your `.ts` files are actually in `src`.
*   **Not running `tsc` after changes:** TypeScript doesn't automatically recompile. You need to run `tsc` again or use `tsc --watch` for continuous compilation.
*   **Global vs. Local TypeScript:** While `npm install -g typescript` is convenient, in professional projects, it's common to install TypeScript as a *dev dependency* (`npm install --save-dev typescript`) and run it via `npx tsc` or npm scripts to ensure all developers use the exact same TypeScript version defined in `package.json`.

By following these steps, you've established a robust foundation for your TypeScript development journey.

#### Key concepts
*   **Node.js:** A JavaScript runtime environment that allows JavaScript to be executed outside of a web browser.
*   **npm (Node Package Manager):** The default package manager for Node.js, used to install, manage, and share JavaScript libraries and tools, including the TypeScript compiler.
*   **TypeScript Compiler (`tsc`):** The command-line tool that transpiles TypeScript code (`.ts` files) into plain JavaScript code (`.js` files).
*   **`tsconfig.json`:** The configuration file for a TypeScript project, which specifies compiler options, root files, and other settings.
*   **`target` (compiler option):** Determines the ECMAScript version of the JavaScript output (e.g., `es5`, `es2018`).
*   **`outDir` (compiler option):** Specifies the directory where compiled JavaScript files will be placed.
*   **`rootDir` (compiler option):** Specifies the root directory of TypeScript source files.
*   **`strict` (compiler option):** A powerful setting that enables a set of strict type-checking rules for improved code quality.

#### Hands-on activity
**Activity: Setting Up Your First TypeScript Project**

This activity will guide you through setting up a complete TypeScript project from scratch.

**Instructions:**
1.  **Create a New Project Directory:**
    ```bash
    mkdir my-first-ts-app
    cd my-first-ts-app
    ```
2.  **Initialize npm:**
    ```bash
    npm init -y
    ```
3.  **Install TypeScript (globally if not already, or locally as a dev dependency):**
    *   If you haven't installed globally: `npm install -g typescript`
    *   For project-specific control (recommended for teams): `npm install --save-dev typescript`
4.  **Initialize TypeScript Configuration:**
    ```bash
    tsc --init
    ```
5.  **Modify `tsconfig.json`:** Open the `tsconfig.json` file. Uncomment and set the following options:
    *   `"target": "es2018"`
    *   `"module": "commonjs"`
    *   `"outDir": "./build"` (let's use `build` instead of `dist` for this exercise)
    *   `"rootDir": "./source"` (let's use `source` instead of `src` for this exercise)
    *   `"strict": true`
    *   `"esModuleInterop": true`
    *   Add `"include": ["source/**/*.ts"]` and `"exclude": ["node_modules"]` at the root level of the JSON object.
6.  **Create Source Files:**
    *   Create a new directory named `source` in your project root.
    *   Inside `source`, create a file named `app.ts`.
    *   Add the following TypeScript code to `source/app.ts`:
        ```typescript
        // source/app.ts
        function calculateArea(length: number, width: number): number {
            return length * width;
        }

        const roomLength: number = 10;
        const roomWidth: number = 7.5;

        const area = calculateArea(roomLength, roomWidth);
        console.log(`The area of the room is: ${area} square units.`);

        // Try to introduce a type error:
        // const invalidArea = calculateArea("10", 7.5); // Uncomment this line and try to compile!
        ```
7.  **Compile Your TypeScript Code:**
    ```bash
    tsc
    ```
    *   Observe the output. If you uncommented the error line, what message did you get?
    *   Check for a new `build` directory containing `app.js`.
8.  **Run the Compiled JavaScript:**
    ```bash
    node build/app.js
    ```
    *   Verify the output in your console.

**Challenge:**
*   Modify `tsconfig.json` to target `"es5"` instead of `"es2018"`. Recompile (`tsc`) and observe the differences in the generated `build/app.js` file. What changes do you notice in the JavaScript syntax? (Hint: `const` might be converted to `var`).

#### Assessment idea
1.  **Question:** You've created a TypeScript file `main.ts` in your `src` directory. After running `tsc`, you don't see any JavaScript output, and your terminal reports "error TS5023: Unknown compiler option 'outDir'." What is the most likely cause of this error?
    a) Node.js is not installed correctly.
    b) You forgot to install the TypeScript compiler globally.
    c) The `tsconfig.json` file is missing or incorrectly configured in your project root.
    d) The `main.ts` file contains syntax errors.

    **Correct Answer:** c) The `tsconfig.json` file is missing or incorrectly configured in your project root.
    **Explanation:** The error message "Unknown compiler option 'outDir'" strongly suggests that the TypeScript compiler (`tsc`) is running without a valid configuration file (`tsconfig.json`) that defines options like `outDir`. Without `tsconfig.json`, `tsc` might not know where to look for source files or where to output compiled JavaScript.

2.  **Question:** Describe the purpose of the `target` option in `tsconfig.json` and explain why a developer might choose `"es5"` over `"es2018"` for a project.

    **Correct Answer:** The `target` option in `tsconfig.json` specifies the ECMAScript version that the TypeScript compiler should output as JavaScript. For example, if `target` is set to `"es5"`, TypeScript will transpile modern JavaScript features (like arrow functions, `const`/`let`, classes) into their ES5 equivalents to ensure compatibility with older browsers or environments that do not support newer ECMAScript standards. A developer might choose `"es5"` if their application needs to run in environments with limited or outdated JavaScript engine support, such as very old web browsers (e.g., Internet Explorer 11) or specific embedded systems. Conversely, `"es2018"` would be chosen for modern environments that fully support newer JavaScript features, resulting in more concise and potentially more performant output code.

#### AI generation note
Create a 10-minute live coding demonstration walking through the entire setup process. Show terminal commands for Node.js/npm installation verification, global TypeScript installation, `npm init`, `tsc --init`. Visually highlight and explain key `tsconfig.json` options (`target`, `outDir`, `rootDir`, `strict`) as they are modified. Then, write a simple `index.ts` file, compile it using `tsc`, and run the resulting `index.js` with `node`. Include a common mistake (e.g., trying to compile without `tsconfig.json` or with a type error) and show how to fix it. The tone should be hands-on and problem-solving oriented. Interactive element: a mini-quiz asking about the purpose of a specific `tsconfig.json` option.

---

### Chapter 1.3 — Your First TypeScript Code: Variables and Basic Types

#### Learning objectives
*   Declare variables in TypeScript using explicit type annotations for primitive types.
*   Understand and correctly use the `number`, `string`, and `boolean` primitive types.
*   Explain the concept of type inference and recognize when TypeScript automatically assigns types.
*   Identify the `any` type, understand its purpose, and learn why its use should be minimized.
*   Recognize and interpret common type-related errors reported by the TypeScript compiler.
*   Apply basic type safety principles to write more robust and readable code.

#### Detailed lesson content
With your TypeScript environment set up, it's time to write your first lines of type-safe code! One of the most fundamental aspects of any programming language is declaring variables and assigning values. In JavaScript, you're used to `let name = "Alice";` or `const age = 30;`. TypeScript builds on this by allowing you to explicitly state the *type* of data a variable is expected to hold. This is where the magic of static typing truly begins.

**Explicit Type Annotations**
The most direct way to introduce types is through *type annotations*. You append a colon (`:`) followed by the type name after the variable declaration.

Let's start with the most common primitive types:

1.  **`number` Type:** This type represents both integer and floating-point numbers. Unlike some other languages, TypeScript doesn't distinguish between them.
    ```typescript
    let studentCount: number = 25;
    let averageScore: number = 88.75;
    const PI: number = 3.14159;

    // You can also use hexadecimal, binary, and octal literals:
    let hexValue: number = 0xf00d;
    let binaryValue: number = 0b1010;
    ```
    **Common Mistake:** Trying to assign a non-numeric value to a `number` type.
    ```typescript
    let temperature: number = "twenty"; // Error: Type 'string' is not assignable to type 'number'.
    ```

2.  **`string` Type:** This represents text data. You can use single quotes, double quotes, or backticks (for template literals).
    ```typescript
    let userName: string = "Jane Doe";
    let greeting: string = 'Hello, world!';
    let message: string = `The user is ${userName}.`;
    ```
    **Common Mistake:** Assuming a number can be assigned to a string without conversion.
    ```typescript
    let productId: string = 12345; // Error: Type 'number' is not assignable to type 'string'.
    ```

3.  **`boolean` Type:** This represents a logical value, either `true` or `false`.
    ```typescript
    let isActive: boolean = true;
    let hasPermission: boolean = false;
    ```
    **Common Mistake:** Using strings like `"true"` or `"false"` instead of actual boolean literals.
    ```typescript
    let isLoggedIn: boolean = "true"; // Error: Type '"true"' is not assignable to type 'boolean'.
    ```

**Type Inference: When TypeScript Figures it Out**
While explicit type annotations are powerful, you don't always need to write them. TypeScript is smart enough to *infer* the type of a variable based on its initial value. This is called **type inference**.

```typescript
let inferredName = "Alice"; // TypeScript infers 'inferredName' as type 'string'
let inferredAge = 30;     // TypeScript infers 'inferredAge' as type 'number'
let inferredActive = false; // TypeScript infers 'inferredActive' as type 'boolean'
```
Even though we didn't explicitly write `: string` or `: number`, TypeScript still applies type checking. If you later try to assign a number to `inferredName`, the compiler will throw an error:

```typescript
inferredName = 42; // Error: Type 'number' is not assignable to type 'string'.
```
Type inference is incredibly useful for reducing boilerplate, especially for local variables where the type is obvious from the assignment. However, for function parameters, return types, or public API properties, explicit annotations are often preferred for clarity and better documentation.

**The `any` Type: A Type-Checking Escape Hatch**
TypeScript also has a special type called `any`. When a variable is declared with type `any`, or if TypeScript cannot infer a type and no explicit type is provided (e.g., `let unknownValue;`), TypeScript essentially opts out of type checking for that variable.

```typescript
let dynamicValue: any = "hello";
dynamicValue = 10;
dynamicValue = false;
dynamicValue.toUpperCase(); // No error, even though dynamicValue might be a number or boolean at this point
dynamicValue();             // No error, even though dynamicValue might not be a function
```
The `any` type is useful when you're migrating a JavaScript codebase to TypeScript, dealing with third-party libraries that don't have type definitions, or working with data of an unknown structure. However, **you should use `any` sparingly**. Overuse of `any` defeats the purpose of TypeScript, as it reintroduces the very runtime errors that TypeScript aims to prevent. Think of `any` as a last resort, a temporary solution, or a deliberate decision when type safety is genuinely impossible or impractical for a specific piece of data. When your `tsconfig.json` has `"strict": true` (which is highly recommended), TypeScript will be more aggressive about inferring `any` and might require explicit annotations or more specific types.

**Practical Scenario: User Input**
Imagine you're building a web form where users enter their age. The input field always returns a `string`. Without TypeScript, you might forget to convert it to a number before performing calculations, leading to `NaN` (Not a Number) or string concatenation instead of addition.

```typescript
// JavaScript (potential issue)
let ageInput = "30"; // This comes from an HTML input field
let nextYearAge = ageInput + 1; // Result: "301" (string concatenation)

// TypeScript (with type safety)
let ageInputTS: string = "30";
// let nextYearAgeTS: number = ageInputTS + 1; // Error: Operator '+' cannot be applied to types 'string' and 'number'.

// Correct way in TypeScript:
let parsedAge: number = parseInt(ageInputTS);
let nextYearAgeTS: number = parsedAge + 1; // Result: 31
console.log(nextYearAgeTS);
```
This simple example demonstrates how TypeScript guides you towards correct data handling, preventing logical errors that are hard to spot in plain JavaScript. By explicitly defining types, you're creating a contract for your code, making it more predictable and easier to maintain.

#### Key concepts
*   **Type Annotation:** Explicitly declaring the type of a variable, function parameter, or return value using `variable: Type`.
*   **Primitive Types:** Basic data types in TypeScript (and JavaScript) including `number`, `string`, and `boolean`.
*   **`number`:** Represents both integer and floating-point numbers.
*   **`string`:** Represents sequences of characters (text).
*   **`boolean`:** Represents a logical value, either `true` or `false`.
*   **Type Inference:** The ability of the TypeScript compiler to automatically deduce the type of a variable based on its initial value, without explicit annotation.
*   **`any` Type:** A special type that bypasses TypeScript's type checking, allowing variables to hold values of any type. Its use should be minimized.
*   **Type Safety:** The degree to which a programming language prevents type errors, ensuring that operations are performed on data of the correct type.

#### Hands-on activity
**Activity: Experimenting with Basic Types and Inference**

Let's get hands-on with declaring variables and observing TypeScript's type checking.

**Instructions:**
1.  Ensure your TypeScript project from Chapter 1.2 is open in your code editor (e.g., VS Code).
2.  Open the `source/app.ts` file (or create a new `source/types.ts` file).
3.  Add the following code snippets, one by one, and observe the TypeScript compiler's feedback. If you're using VS Code, you'll see red squiggly lines and error messages directly in the editor. If not, run `tsc` in your terminal after each change.

    ```typescript
    // 1. Explicitly typed variables
    let courseName: string = "TypeScript Fundamentals";
    let durationHours: number = 20.5;
    let isLiveCourse: boolean = true;

    console.log(`Course: ${courseName}, Duration: ${durationHours} hours, Live: ${isLiveCourse}`);

    // 2. Type inference in action
    let studentName = "Emily"; // Inferred as string
    let studentAge = 28;       // Inferred as number
    let hasCompleted = false;  // Inferred as boolean

    console.log(`Student: ${studentName}, Age: ${studentAge}, Completed: ${hasCompleted}`);

    // 3. Intentionally creating type errors (uncomment one at a time and observe)
    // durationHours = "twenty hours"; // Error: Type 'string' is not assignable to type 'number'.
    // courseName = 123;             // Error: Type 'number' is not assignable to type 'string'.
    // isLiveCourse = "yes";         // Error: Type '"yes"' is not assignable to type 'boolean'.

    // 4. Experimenting with the 'any' type
    let flexibleData: any = "This can be anything";
    console.log(flexibleData);

    flexibleData = 100;
    console.log(flexibleData);

    flexibleData = { id: 1, name: "Object Data" };
    console.log(flexibleData.name); // TypeScript doesn't complain, even if 'name' might not exist

    // flexibleData.nonExistentMethod(); // No compile-time error, but would be a runtime error!
    ```

**Reflection:**
*   When did TypeScript provide immediate feedback (red squiggly lines or `tsc` errors)?
*   How did type inference simplify your code while still providing type safety?
*   What are the risks associated with using the `any` type, as demonstrated by the last example?

#### Assessment idea
1.  **Question:** Consider the following TypeScript code snippet:
    ```typescript
    let quantity = 50;
    let itemName: string = "Laptop";
    quantity = itemName; // Line A
    itemName = "Monitor"; // Line B
    ```
    Which line (A or B) will cause a compile-time error in TypeScript, and why?

    **Correct Answer:** Line A (`quantity = itemName;`) will cause a compile-time error.
    **Explanation:**
    *   `quantity` is initially inferred as a `number` type because it's assigned the value `50`.
    *   `itemName` is explicitly declared as a `string` type.
    *   Line A attempts to assign a `string` (`itemName`) to a variable that is typed as `number` (`quantity`). TypeScript's static type checker will catch this type mismatch and report an error: "Type 'string' is not assignable to type 'number'."
    *   Line B is perfectly valid because it assigns a `string` literal to a `string`-typed variable.

2.  **Question:** You receive data from an external API that sometimes returns a user's age as a `number` and sometimes as a `string` (e.g., `30` or `"thirty"`). You need to store this age in a variable in your TypeScript application. Explain how you would declare this variable to accommodate both possibilities, and what the implications are for type safety.

    **Correct Answer:** To accommodate both `number` and `string` types for the `age` variable, you could declare it using a *union type* (which will be covered in a later module, but is the correct long-term solution) or, as a temporary measure given our current knowledge of basic types, the `any` type.

    *   **Using `any` (current module's scope):**
        ```typescript
        let userAge: any;
        // Later, userAge could be assigned:
        userAge = 30;
        userAge = "thirty";
        ```
        **Implications for Type Safety with `any`:** Using `any` effectively bypasses TypeScript's type checking for this variable. While it allows you to store both `number` and `string`, you lose all type safety benefits. If you later try to perform a numeric operation like `userAge + 5`, and `userAge` happens to be `"thirty"`, you will get a runtime error or unexpected string concatenation (`"thirty5"`). You would have to manually check `typeof userAge` before performing operations, essentially reverting to JavaScript's dynamic typing behavior for this specific variable. This is why `any` should be used sparingly and is often a sign that a more specific type (like a union type `number | string`) is needed.

#### AI generation note
Create a 9-minute interactive code editor session focusing on variable declaration and primitive types. Start by demonstrating explicit typing for `number`, `string`, and `boolean` with various examples (e.g., `let price: number = 99.99;`, `let product: string = "Keyboard";`, `let inStock: boolean = true;`). Then, show type inference by removing annotations and highlighting how VS Code (or similar IDE) still understands the type. Introduce intentional type errors and show the compiler's immediate feedback. Finally, demonstrate the `any` type, explaining its behavior and the loss of type safety, perhaps by trying to call a non-existent method on an `any` typed variable. The visual style should be clear code with annotations and error highlighting. Interactive element: a drag-and-drop exercise where learners match values to their correct primitive types.

---

## Module 2: Core TypeScript Features - Types in Depth

Welcome back, future TypeScript masters! In our first module, we laid the groundwork by understanding what TypeScript is and how to get it running. Now, we're going to dive deep into the very heart of TypeScript: its powerful type system. This module will equip you with a robust understanding of how to declare, infer, and manipulate types to write more reliable, maintainable, and understandable code. We'll start with the fundamental building blocks – primitive types – and progressively explore how to define complex data structures, ensuring your applications are robust from the ground up. Get ready to unlock the true potential of static typing!

### Chapter 2.1 — Primitive Types and Type Inference

#### Learning objectives
*   Identify and correctly use TypeScript's core primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
*   Explain the concept of type inference and how TypeScript automatically assigns types to variables.
*   Demonstrate how to explicitly annotate primitive types when inference is insufficient or desired for clarity.
*   Recognize and avoid common pitfalls related to `null` and `undefined` in TypeScript.

#### Detailed lesson content
Hello everyone! Let's kick off our deep dive into TypeScript's type system by exploring the fundamental building blocks: primitive types. Just like in JavaScript, TypeScript has several built-in primitive types that represent the simplest forms of data. Understanding these is crucial because they form the basis for all more complex types we'll encounter. The primary primitives you'll work with daily are `string`, `number`, and `boolean`.

A `string` type in TypeScript is used for text data, just as you'd expect. You can declare a string variable and assign it any sequence of characters enclosed in single or double quotes. For example: `let greeting: string = "Hello, Cohortia learners!";` or `let courseName: string = 'TypeScript Masterclass';`. Notice the `: string` after the variable name. This is a *type annotation*, explicitly telling TypeScript that `greeting` must always hold a string value. If you later try to assign a number to `greeting`, TypeScript will immediately flag it as an error, preventing a common source of bugs.

The `number` type covers both integers and floating-point numbers. Unlike some other languages, TypeScript doesn't differentiate between them; they're all just `number`. So, `let age: number = 30;` and `let pi: number = 3.14159;` are both perfectly valid. You can perform all standard arithmetic operations on `number` types, and TypeScript will ensure you're not accidentally trying to add a string to a number, for instance. This immediate feedback during development is one of TypeScript's greatest strengths.

For truthy/falsy values, we have the `boolean` type, which can only hold `true` or `false`. This is incredibly useful for conditional logic and flags. For example: `let isActive: boolean = true;` or `let hasPermission: boolean = false;`. Again, attempting to assign anything other than `true` or `false` to a `boolean` variable will result in a type error. These three (`string`, `number`, `boolean`) are your bread and butter for most applications.

Beyond these core three, TypeScript also includes `null` and `undefined`. These represent the intentional absence of any object value (`null`) and a variable that has been declared but not yet assigned a value (`undefined`). By default, in strict mode (which we highly recommend you always enable in your `tsconfig.json` with `strict: true`), `null` and `undefined` are distinct types and cannot be assigned to other types like `string` or `number` without explicitly allowing it (which we'll cover with union types later). This strictness helps prevent the infamous "null pointer" or "undefined is not a function" errors that plague JavaScript development. For instance, `let username: string = null;` would be an error in strict mode, forcing you to handle potential null values explicitly.

Two more primitive types, `symbol` and `bigint`, are less frequently used in typical application development but are important to know. `symbol` is a unique and immutable data type introduced in ES6, often used for unique object property keys to avoid name collisions. `let id: symbol = Symbol('uniqueId');` creates a new, distinct symbol. `bigint` was introduced to handle arbitrarily large integers, beyond the safe integer limit of the `number` type (which is `2^53 - 1`). You define a `bigint` by appending `n` to an integer literal: `let largeNumber: bigint = 9007199254740991n;`. While powerful, `bigint` operations can't be mixed with `number` operations directly, requiring explicit conversions or separate handling.

Now, let's talk about one of TypeScript's most helpful features: **type inference**. This is TypeScript's ability to automatically deduce the type of a variable, function return value, or expression based on its initial value or usage, without you having to explicitly write a type annotation. For instance, if you write `let message = "Hello, world!";`, TypeScript doesn't need you to add `: string`. It looks at the value `"Hello, world!"` and infers that `message` must be a `string`. Similarly, `let count = 10;` will infer `count` as a `number`, and `let isValid = true;` will infer `isValid` as a `boolean`.

Type inference is incredibly convenient because it allows you to write less boilerplate code while still benefiting from TypeScript's type checking. You only need to provide explicit type annotations when:
1.  TypeScript can't infer the type (e.g., when declaring a variable without an initial value: `let data;` would infer `data` as `any`, which is usually undesirable).
2.  You want to be more explicit for documentation purposes or to enforce a narrower type than what TypeScript might infer.
3.  You are defining function parameters, where inference often isn't possible, or function return types, for clarity and safety.

Consider a common mistake: declaring a variable without an initial value and not providing a type annotation. If you write `let value;`, TypeScript will infer `value` as `any`. The `any` type essentially opts out of type checking for that variable, allowing you to assign values of any type to it. While `any` can be useful in rare, specific scenarios (like migrating a large JavaScript codebase), it defeats the purpose of using TypeScript and should be avoided whenever possible. Instead, if you know `value` will eventually be a number, write `let value: number;`. This tells TypeScript to expect a number later, and it will flag errors if you try to assign something else.

Another common pitfall is forgetting the distinction between `null` and `undefined`. While both signify "no value," `undefined` typically means a variable hasn't been assigned *anything yet*, whereas `null` usually represents an *intentional absence* of a value. For example, a function might return `undefined` if it doesn't explicitly return anything, but it might return `null` if it explicitly searched for something and found nothing. In strict mode, TypeScript helps enforce this by making them distinct types, reducing errors where you might expect a string but get `null` instead. Always be mindful of whether a variable *could* legitimately be `null` or `undefined` and handle those cases explicitly, often using union types which we'll cover soon. Mastering these primitive types and understanding type inference is your first big step towards writing robust TypeScript applications.

#### Key concepts
*   **Primitive Types:** Fundamental data types in TypeScript, including `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
*   **String Type:** Represents text data, enclosed in single or double quotes.
*   **Number Type:** Represents both integers and floating-point numbers.
*   **Boolean Type:** Represents logical values, either `true` or `false`.
*   **Null Type:** Represents the intentional absence of any object value.
*   **Undefined Type:** Represents a variable that has been declared but not yet assigned a value.
*   **Symbol Type:** A unique and immutable data type, often used for unique object property keys.
*   **BigInt Type:** Handles arbitrarily large integers beyond the `number` type's safe limit.
*   **Type Annotation:** Explicitly declaring the type of a variable, function parameter, or return value using the `: Type` syntax.
*   **Type Inference:** TypeScript's ability to automatically deduce the type of a variable or expression based on its initial value or usage, reducing the need for explicit annotations.
*   **`any` Type:** A type that opts out of type checking, allowing variables to hold values of any type. Should be used sparingly.

#### Hands-on activity
**Activity: Primitive Type Playground**

In this exercise, you'll practice declaring variables with primitive types, experimenting with type inference, and observing TypeScript's error checking.

1.  Create a new TypeScript file named `primitives.ts`.
2.  Declare variables for each primitive type, using both explicit type annotations and relying on type inference.
3.  Intentionally introduce type errors to see how TypeScript responds.

**Starter Code:**

```typescript
// --- Part 1: Explicit Type Annotations ---

// Declare a string variable for your favorite book title
let bookTitle: string = "The Hitchhiker's Guide to the Galaxy";

// Declare a number variable for the year the book was published
let publicationYear: number = 1979;

// Declare a boolean variable indicating if you've read it
let hasRead: boolean = true;

// Declare a variable that can be null (we'll learn unions later, for now, let's demonstrate the strictness)
// In strict mode, you can't assign null to string directly. For demonstration, we'll use 'any' temporarily,
// but remember this is generally discouraged.
let authorBio: string | null = null; // This is a union type, which we'll cover in a later chapter.
                                      // For now, just know it allows both string and null.

// Declare a variable for a unique identifier using Symbol
const uniqueKey: symbol = Symbol('userSessionId');

// --- Part 2: Type Inference in Action ---

// Declare a variable for your favorite programming language. Let TypeScript infer the type.
let programmingLanguage = "TypeScript";

// Declare a variable for the current year. Let TypeScript infer the type.
let currentYear = 2024;

// Declare a variable for whether you enjoy coding. Let TypeScript infer the type.
let enjoysCoding = true;

// --- Part 3: Observing Type Errors (Intentionally introduce errors and observe) ---

// Uncomment the following lines one by one and observe the TypeScript errors.
// Try to assign a number to a string variable:
// bookTitle = 1984;

// Try to assign a string to a number variable:
// publicationYear = "nineteen seventy-nine";

// Try to assign a string to a boolean variable:
// hasRead = "yes";

// Try to reassign a variable whose type was inferred:
// programmingLanguage = 123; // This will cause an error because programmingLanguage was inferred as string.

// What happens if you declare a variable without initial value and no type?
let uninitializedVariable; // What type does TypeScript infer? Hover over it!
// uninitializedVariable = "Now it's a string";
// uninitializedVariable = 123; // This will work because it's 'any'. Why is this generally bad?

// --- Part 4: Using BigInt (Optional, requires target ES2020 or later in tsconfig.json) ---
// If your tsconfig.json target is ES2020 or later, you can experiment with BigInt.
// Otherwise, you might get a compilation error.
// let veryLargeId: bigint = 12345678901234567890n;
// console.log(veryLargeId);

// You cannot mix BigInt and Number directly:
// let sum = veryLargeId + 10; // This will be a type error!
// let sumCorrect = veryLargeId + BigInt(10); // Correct way to add a BigInt to a BigInt
```

**Instructions:**
1.  Save the code as `primitives.ts`.
2.  Open your terminal in the same directory.
3.  Compile the file: `tsc primitives.ts`
4.  Observe any errors reported by the TypeScript compiler.
5.  Comment out the error-causing lines and recompile to ensure it passes.
6.  Experiment by changing inferred types (e.g., try assigning a number to `programmingLanguage` after it's been inferred as a string).

#### Assessment idea
1.  **Question:** Consider the following TypeScript code snippet:
    ```typescript
    let quantity = 500;
    let productName = "Laptop Charger";
    let inStock = true;
    let orderId;
    ```
    What types does TypeScript infer for `quantity`, `productName`, `inStock`, and `orderId` respectively? Explain why `orderId` receives the type it does.

    **Correct Answer:**
    *   `quantity`: `number` (inferred from the initial numeric value `500`).
    *   `productName`: `string` (inferred from the initial string value `"Laptop Charger"`).
    *   `inStock`: `boolean` (inferred from the initial boolean value `true`).
    *   `orderId`: `any` (inferred because it is declared without an initial value and without an explicit type annotation).
    The `orderId` variable receives the `any` type because TypeScript has no initial value to infer a more specific type from, and no explicit type annotation was provided. This means `orderId` can later be assigned a value of any type without TypeScript reporting an error, which often defeats the purpose of using TypeScript for type safety.

2.  **Question:** You are building a user profile system. Which primitive type would be most appropriate for each of the following pieces of data, and why?
    a) User's email address
    b) User's age
    c) Whether the user has enabled two-factor authentication
    d) A unique identifier for the user (e.g., a UUID string)

    **Correct Answer:**
    a) **User's email address:** `string`. Email addresses are sequences of characters and are best represented as text.
    b) **User's age:** `number`. Age is a numerical value, and `number` is suitable for both integer and floating-point values (though age is typically an integer).
    c) **Whether the user has enabled two-factor authentication:** `boolean`. This is a binary state (either enabled or not enabled), perfectly represented by `true` or `false`.
    d) **A unique identifier for the user (e.g., a UUID string):** `string`. While it represents a unique ID, a UUID (Universally Unique Identifier) is typically a formatted string (e.g., "a1b2c3d4-e5f6-7890-1234-567890abcdef"). If we needed a truly unique, non-string identifier within the application's memory, `symbol` could be an option, but for IDs stored and transmitted as data, `string` is the standard.

#### AI generation note
Create a 10-minute animated video explaining primitive types and type inference. Start with a visual analogy of "data containers" for `string`, `number`, and `boolean`, showing how values fit perfectly into their respective containers. Then, introduce `null` and `undefined` as special empty containers, emphasizing their strict mode differences. Visualize type inference as a "smart assistant" automatically labeling containers based on their initial contents. Show live coding examples where type annotations are added and removed, highlighting the immediate error feedback from TypeScript. Include a common mistake scenario where `any` is inferred and explain why it's generally undesirable. Use clear, high-contrast text for code snippets and animated diagrams for concepts.

---

### Chapter 2.2 — Working with Arrays and Objects

#### Learning objectives
*   Correctly declare and type arrays, including arrays of primitives and arrays of specific object shapes.
*   Define object types using type annotations, interfaces, and type aliases to specify property names and their corresponding types.
*   Understand and implement optional properties within object types.
*   Work with nested objects and arrays within objects, ensuring comprehensive type safety for complex data structures.

#### Detailed lesson content
Building on our understanding of primitive types, let's now explore how TypeScript helps us manage collections of data using arrays and structured data using objects. These are the workhorses of almost any application, and TypeScript provides powerful tools to ensure they are used correctly and consistently.

First, let's tackle **arrays**. In JavaScript, an array is just a list of items. In TypeScript, we want to specify what *kind* of items are in that list. The most common way to type an array is by placing `[]` after the type of its elements. For example, an array of strings would be `string[]`, and an array of numbers would be `number[]`. So, you might declare `let names: string[] = ["Alice", "Bob", "Charlie"];` or `let scores: number[] = [85, 92, 78];`. TypeScript will then enforce that only strings can be added to `names` and only numbers to `scores`. If you try `names.push(123);`, TypeScript will immediately report a type error, preventing a runtime bug.

Another way to declare array types is using the generic `Array<Type>` syntax, like `Array<string>` or `Array<number>`. Both `string[]` and `Array<string>` are equivalent and largely a matter of preference, though `string[]` is often considered more readable for simple cases. For instance, `let ages: Array<number> = [25, 30, 35];` achieves the same result as `let ages: number[] = [25, 30, 35];`. The generic syntax becomes more prevalent when dealing with more complex types, which we'll see later.

What if an array contains different types? For example, `[1, "hello", true]`. This would be an array of a union type, `(number | string | boolean)[]`, which we'll explore in the next chapter. For now, focus on homogeneous arrays, where all elements are of the same type, as this is the most common and safest pattern. A common mistake here is to declare an array without typing it, like `let mixedArray = [1, "two", true];`. TypeScript will infer `mixedArray` as `(string | number | boolean)[]`, which is correct, but if you intended it to be only numbers, you'd need to explicitly type it as `let numbersOnly: number[] = [1, 2, 3];`.

Next, let's move to **objects**. Objects are fundamental for representing structured data, like a user profile or a product. In TypeScript, we define the "shape" of an object, specifying what properties it *must* have and what types those properties *must* be. The simplest way to do this inline is with a type annotation:

```typescript
let user: { name: string; age: number; isActive: boolean } = {
    name: "Jane Doe",
    age: 28,
    isActive: true
};
```

This works, but it can get verbose quickly. For reusable object shapes, we use **interfaces** or **type aliases**. Interfaces are a cornerstone of object-oriented programming in TypeScript and are primarily used to define the shape of objects.

```typescript
interface Product {
    id: string;
    name: string;
    price: number;
    description?: string; // The '?' makes 'description' an optional property
    categories: string[]; // An array of strings
}

let laptop: Product = {
    id: "prod-001",
    name: "Super Laptop X",
    price: 1200.00,
    categories: ["Electronics", "Computers"]
};

let keyboard: Product = {
    id: "prod-002",
    name: "Ergo Keyboard Pro",
    price: 99.99,
    description: "Ergonomic mechanical keyboard with custom switches.",
    categories: ["Electronics", "Peripherals"]
};
```

In the `Product` interface, `description?: string;` introduces an **optional property**. The `?` means that `description` *might* be present on an object of type `Product`, but it's not strictly required. If it is present, it *must* be a `string`. This is incredibly useful for properties that don't always apply or might be loaded asynchronously.

**Type aliases** (`type`) provide similar capabilities to interfaces, allowing you to define a new name for any type, including object types. While there are subtle differences (interfaces can be "re-opened" to add new properties, type aliases cannot), for defining object shapes, they are often interchangeable.

```typescript
type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    department: string;
    managerId?: number; // Optional property
};

let newEmployee: Employee = {
    id: 101,
    firstName: "John",
    lastName: "Smith",
    department: "Engineering"
};
```

You'll notice that `managerId` is optional. If we tried to create `newEmployee` without `department`, TypeScript would throw an error because `department` is a required property. This level of enforcement at compile-time saves countless hours of debugging.

Working with **nested objects and arrays within objects** is also straightforward. You simply define the types for the inner structures. Consider a `Company` object that has a list of `Employee` objects:

```typescript
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Company {
    name: string;
    address: Address; // Nested object
    employees: Employee[]; // Array of Employee objects
    foundedYear: number;
}

let cohortiaHQ: Company = {
    name: "Cohortia Inc.",
    address: {
        street: "123 Learning Lane",
        city: "Techville",
        zipCode: "10001"
    },
    employees: [
        { id: 201, firstName: "Alice", lastName: "Johnson", department: "HR" },
        { id: 202, firstName: "Bob", lastName: "Williams", department: "Engineering", managerId: 201 }
    ],
    foundedYear: 2020
};
```

Here, `Company` has an `address` property which is itself an `Address` object, and an `employees` property which is an array of `Employee` objects. TypeScript ensures that when you access `cohortiaHQ.address.city`, it knows `city` is a `string`, and when you iterate `cohortiaHQ.employees`, it knows each element is an `Employee` object with its defined properties. This provides incredible confidence when refactoring or extending your data models.

A common mistake is forgetting to define types for nested structures, leading to `any` being inferred for parts of your object. Always strive to define the full shape, even for deeply nested data. This ensures that every part of your data structure benefits from type safety, making your code more predictable and easier to maintain. By mastering arrays and objects with TypeScript, you're building a strong foundation for handling virtually any data structure your applications require.

#### Key concepts
*   **Array Type:** Specifies that a variable holds a collection of elements of a particular type (e.g., `string[]` or `Array<number>`).
*   **Object Type:** Defines the structure or "shape" of an object, specifying its properties and their corresponding types.
*   **Interface:** A powerful way to define custom object types, ensuring objects conform to a specific contract. Can be extended and implemented.
*   **Type Alias (`type`):** Another way to define a custom name for any type, including object types. More flexible for non-object types, but for object shapes, often interchangeable with interfaces.
*   **Optional Property:** A property within an object type that may or may not be present, denoted by a `?` after the property name (e.g., `description?: string`).
*   **Nested Objects:** Objects that contain other objects as properties, allowing for complex hierarchical data structures.
*   **Arrays of Objects:** Arrays where each element is an object conforming to a specific type or interface.

#### Hands-on activity
**Activity: Building a `LibraryItem` Catalog**

You'll define interfaces for different types of library items (books, magazines) and then create an array to hold a collection of these items.

1.  Create a new TypeScript file named `library.ts`.
2.  Define interfaces for a `Book` and a `Magazine`.
3.  Create an array that can hold a mix of `Book` and `Magazine` objects (using a union type for the array, which we'll fully cover next, but for now, you can guess the syntax).
4.  Populate the array with a few instances of each.

**Starter Code:**

```typescript
// Define an interface for a Book
interface Book {
    title: string;
    author: string;
    isbn: string; // International Standard Book Number
    publicationYear: number;
    genre?: string; // Optional genre
}

// Define an interface for a Magazine
interface Magazine {
    title: string;
    issueNumber: number;
    publisher: string;
    publicationDate: Date; // Using Date object for dates
}

// Now, let's create an array to hold our library items.
// This array should be able to hold both Books and Magazines.
// We use a "union type" (Book | Magazine) to indicate that each element can be EITHER a Book OR a Magazine.
let libraryCatalog: (Book | Magazine)[] = [];

// Create some instances of Book and Magazine
const book1: Book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "978-0618053267",
    publicationYear: 1954,
    genre: "Fantasy"
};

const magazine1: Magazine = {
    title: "National Geographic",
    issueNumber: 250,
    publisher: "National Geographic Society",
    publicationDate: new Date("2023-10-01")
};

const book2: Book = {
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    publicationYear: 1949
    // Note: genre is optional, so we don't have to include it here
};

// Add them to our catalog
libraryCatalog.push(book1);
libraryCatalog.push(magazine1);
libraryCatalog.push(book2);

console.log("Our Library Catalog:");
libraryCatalog.forEach(item => {
    console.log(`- Title: ${item.title}`);
    // How can we safely access properties specific to Book or Magazine?
    // We'll learn about type guards later, but for now, we can check for unique properties.
    if ('author' in item) { // This is a simple type guard check
        console.log(`  Author: ${(item as Book).author}`); // Type assertion for demonstration
    } else if ('issueNumber' in item) {
        console.log(`  Issue: ${(item as Magazine).issueNumber}`);
    }
});

// Try to add an item that doesn't match either type (this should cause an error)
// libraryCatalog.push({
//     name: "Random Item",
//     id: 123
// });
```

**Instructions:**
1.  Save the code as `library.ts`.
2.  Compile the file: `tsc library.ts`
3.  Run the compiled JavaScript: `node library.js`
4.  Observe the output.
5.  Uncomment the last `libraryCatalog.push` line and try to compile again. Observe the type error. This demonstrates TypeScript enforcing the defined types.

#### Assessment idea
1.  **Question:** You need to define a type for a `BlogPost` object. Each post must have a `title` (string), `content` (string), and `author` (string). It *may* also have an array of `tags` (strings) and a `publishedDate` (Date object). Write a TypeScript interface that correctly represents this `BlogPost` structure.

    **Correct Answer:**
    ```typescript
    interface BlogPost {
        title: string;
        content: string;
        author: string;
        tags?: string[]; // Optional array of strings
        publishedDate?: Date; // Optional Date object
    }
    ```
    **Explanation:** The `title`, `content`, and `author` properties are defined as required strings. `tags` is defined as an optional array of strings (`string[]`), indicated by the `?`. `publishedDate` is defined as an optional `Date` object.

2.  **Question:** Given the following interface and an attempt to create an array of `Task` objects, identify and explain the type error(s) in the `tasks` array declaration and its initialization.
    ```typescript
    interface Task {
        id: number;
        description: string;
        isCompleted: boolean;
    }

    let tasks: Task[] = [
        { id: 1, description: "Learn TypeScript", isCompleted: false },
        { id: 2, description: "Build a project", completed: true }, // Error here
        { id: "3", description: "Review code", isCompleted: false } // Error here
    ];
    ```

    **Correct Answer:**
    There are two type errors in the `tasks` array initialization:
    1.  **Error 1 (`{ id: 2, description: "Build a project", completed: true }`):** The property name `completed` does not match the required property `isCompleted` in the `Task` interface. TypeScript expects `isCompleted: boolean`, but it received `completed: true`. The property name must be an exact match.
    2.  **Error 2 (`{ id: "3", description: "Review code", isCompleted: false }`):** The `id` property is assigned a string value (`"3"`), but the `Task` interface specifies that `id` must be a `number`. TypeScript expects `id: number`, but it received `id: string`.

    To fix these errors, the `tasks` array should be initialized as follows:
    ```typescript
    let tasks: Task[] = [
        { id: 1, description: "Learn TypeScript", isCompleted: false },
        { id: 2, description: "Build a project", isCompleted: true },
        { id: 3, description: "Review code", isCompleted: false }
    ];
    ```

#### AI generation note
Produce a 12-minute interactive code demo focusing on arrays and objects. Start with simple `string[]` and `number[]` arrays, demonstrating `push` and `pop` operations with type checks. Transition to defining object shapes using an `interface` for a `User` profile. Show how to add optional properties (`?`) and explain their use. Then, expand the `User` interface to include nested objects (e.g., `address: Address`) and arrays of objects (e.g., `roles: string[]`). The demo should feature live coding, with the instructor explaining each step and showing TypeScript's immediate feedback in VS Code. Include a hands-on challenge where learners complete a partially defined interface for a `ShoppingCartItem` and then create an array of these items. Use side-by-side code editor and console output.

---

### Chapter 2.3 — Union and Literal Types

#### Learning objectives
*   Construct and utilize union types (`|`) to allow a variable to hold values of multiple specified types.
*   Define and apply literal types to restrict variables to specific string, number, or boolean values.
*   Combine union and literal types to create highly specific and safe type definitions for common scenarios like status flags or configuration options.
*   Understand the benefits of using union and literal types for improved code readability, maintainability, and error prevention.

#### Detailed lesson content
Alright, let's unlock some truly powerful features of TypeScript's type system: **Union Types** and **Literal Types**. These allow us to express much more nuanced and precise type relationships, moving beyond simple primitives and rigid object shapes to handle scenarios where data can legitimately vary in type or value.

A **union type** is exactly what it sounds like: a type that can be one of several types. You define a union type using the `|` (pipe) symbol between the types. For example, if you have a variable that might hold either a `string` or a `number`, you would declare it as `let id: string | number;`. This tells TypeScript that `id` is valid if it contains a string *or* a number, but nothing else. So, `id = "abc-123";` is fine, and `id = 456;` is also fine. However, `id = true;` would result in a type error.

Union types are incredibly useful for handling flexible data. Think about a function that accepts either a single item or an array of items: `function processInput(input: string | string[]) { /* ... */ }`. Or a status message that could be a string for a custom error, or `null` if there's no error: `let errorMessage: string | null = null;`. This explicit typing of possibilities helps prevent runtime errors by forcing you to consider all potential types a variable might hold. When working with a union type, TypeScript will only allow operations that are valid for *all* types in the union. For example, if `id` is `string | number`, you can't call `id.toUpperCase()` directly because `number` doesn't have that method. You would first need to narrow the type (e.g., using an `if (typeof id === 'string')` check), which we'll explore in more detail in a later module on type guards.

Now, let's introduce **literal types**. While primitive types like `string` allow *any* string value, literal types allow you to specify that a variable can *only* hold a very specific string, number, or boolean value. For instance, if you want a variable to represent a specific HTTP method, you might define it like this: `let method: "GET" = "GET";`. This variable `method` can *only* hold the string `"GET"`. If you try to assign `"POST"` to it, TypeScript will report an error.

At first glance, a single literal type might seem trivial, but its power truly shines when combined with union types. This is where you can define highly constrained and incredibly safe types. Consider a `status` variable for a network request. It might only ever be `"pending"`, `"success"`, or `"error"`. We can define this using a union of literal types:

```typescript
type RequestStatus = "pending" | "success" | "error";

let currentStatus: RequestStatus = "pending";
currentStatus = "success";
// currentStatus = "failed"; // Type error: '"failed"' is not assignable to type 'RequestStatus'.
```

This `RequestStatus` type ensures that `currentStatus` can only ever be one of those three specific strings. This prevents typos, ensures consistency, and provides excellent auto-completion in your IDE. Similarly, you could have `type LogLevel = 1 | 2 | 3 | 4;` for specific numeric log levels, or `type BinaryChoice = true | false;` (though `boolean` is usually sufficient for `true | false`).

Combining union and literal types is a fantastic pattern for defining configuration options, state machines, or any scenario where a property can only take a predefined set of values. For example, imagine a UI component that can have different visual `size` options:

```typescript
type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
    text: string;
    size: ButtonSize;
    variant: ButtonVariant;
    onClick: () => void;
}

const submitButton: ButtonProps = {
    text: "Submit",
    size: "medium",
    variant: "primary",
    onClick: () => console.log("Form submitted!")
};

// const invalidButton: ButtonProps = {
//     text: "Cancel",
//     size: "extra-large", // Type error!
//     variant: "warning", // Type error!
//     onClick: () => console.log("Canceled")
// };
```

Here, `ButtonSize` and `ButtonVariant` are union literal types, ensuring that `submitButton`'s `size` and `variant` properties are always valid options. This makes your component APIs much safer and easier to use, as developers get immediate feedback if they try to pass an unsupported option.

A common mistake when faced with varying types or values is to resort to the `any` type. While `any` will silence TypeScript errors, it completely bypasses type checking, sacrificing all the benefits TypeScript provides. Instead of `let flexibleValue: any;`, consider if `flexibleValue` can be expressed as a union type, like `let flexibleValue: string | number | boolean;`. This way, you maintain type safety for the specific types you expect, while still allowing flexibility.

Another pitfall is over-complicating types. While powerful, don't create union or literal types for every single string in your application. They are best used when a variable's value is *constrained* to a specific, finite set of options. For free-form text, a simple `string` type is perfectly appropriate.

The benefits of using union and literal types are substantial:
*   **Enhanced Type Safety:** Prevents assigning invalid values to variables, catching errors at compile-time.
*   **Improved Readability:** Clearly communicates the exact range of possible values a variable can hold.
*   **Better Developer Experience:** Provides excellent auto-completion and helpful error messages in IDEs.
*   **Easier Refactoring:** If you decide to add a new status or remove an old one, TypeScript will guide you to all places that need updating.

By incorporating union and literal types into your TypeScript toolkit, you're building incredibly robust, self-documenting, and maintainable code. They are indispensable for handling the dynamic nature of real-world data while retaining the strong guarantees of a static type system.

#### Key concepts
*   **Union Type (`|`):** A type formed by combining two or more types, indicating that a variable can hold a value of *any one* of the specified types (e.g., `string | number`).
*   **Literal Type:** A type that represents a single, specific string, number, or boolean value (e.g., `"GET"`, `100`, `true`).
*   **Union of Literal Types:** A powerful combination where a variable can only hold one of a finite set of specific literal values (e.g., `"pending" | "success" | "error"`).
*   **Type Narrowing:** The process by which TypeScript refines the type of a variable within a conditional block (e.g., `if (typeof value === 'string')`), allowing operations specific to that narrowed type. (Introduced, but covered in depth later).
*   **`any` vs. Union Types:** The distinction between using `any` (which disables type checking) and union types (which provide explicit type safety for multiple allowed types).

#### Hands-on activity
**Activity: Event Logger with Union and Literal Types**

You'll create an event logger that accepts different types of messages and assigns specific log levels.

1.  Create a new TypeScript file named `eventLogger.ts`.
2.  Define a union type for `LogLevel` using literal strings (e.g., `"info"`, `"warn"`, `"error"`, `"debug"`).
3.  Define a union type for `LogMessage` that can be either a `string` or an `object` with a `message` and `details` property.
4.  Create a function `logEvent` that takes a `LogLevel` and a `LogMessage` and prints them to the console.

**Starter Code:**

```typescript
// 1. Define a union type for LogLevel using literal strings
type LogLevel = "info" | "warn" | "error" | "debug";

// 2. Define a union type for LogMessage
// It can be a simple string, or a more structured object
type StructuredLogMessage = {
    message: string;
    details?: any; // 'any' here for flexibility, but in a real app, you might type this more strictly
};

type LogMessage = string | StructuredLogMessage;

// 3. Create a function to log events
function logEvent(level: LogLevel, message: LogMessage): void {
    const timestamp = new Date().toISOString();

    if (typeof message === 'string') {
        console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    } else {
        console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message.message}`);
        if (message.details) {
            console.log("  Details:", message.details);
        }
    }
}

// --- Test cases ---

// Simple string messages
logEvent("info", "User logged in successfully.");
logEvent("warn", "Database connection is slow.");
logEvent("error", "Failed to process payment for order #123.");

// Structured messages
logEvent("debug", {
    message: "Function 'calculateTotal' called.",
    details: { input: [10, 20, 30], caller: "checkoutService" }
});

logEvent("error", {
    message: "API endpoint returned 500.",
    details: { endpoint: "/api/products", statusCode: 500, response: "Internal Server Error" }
});

// Try to call with an invalid log level (this should cause a type error)
// logEvent("critical", "System shutdown imminent.");

// Try to call with an invalid message type (this should cause a type error if not string or StructuredLogMessage)
// logEvent("info", 12345);
```

**Instructions:**
1.  Save the code as `eventLogger.ts`.
2.  Compile the file: `tsc eventLogger.ts`
3.  Run the compiled JavaScript: `node eventLogger.js`
4.  Observe the output.
5.  Uncomment the lines with intentional errors (`"critical"` log level, `12345` message) and try to compile. Observe how TypeScript catches these invalid assignments.

#### Assessment idea
1.  **Question:** You are designing a `Payment` transaction system. A transaction can have a `status` that is either `"pending"`, `"completed"`, or `"failed"`. The `method` of payment can be `"credit_card"`, `"paypal"`, or `"bank_transfer"`. Define two type aliases, `TransactionStatus` and `PaymentMethod`, using union and literal types, and then create an `interface` for `Transaction` that uses these types.

    **Correct Answer:**
    ```typescript
    type TransactionStatus = "pending" | "completed" | "failed";
    type PaymentMethod = "credit_card" | "paypal" | "bank_transfer";

    interface Transaction {
        id: string;
        amount: number;
        currency: string;
        status: TransactionStatus;
        method: PaymentMethod;
        timestamp: Date;
    }
    ```
    **Explanation:** `TransactionStatus` is a union of three literal strings, ensuring only these specific values are allowed for the `status` property. Similarly, `PaymentMethod` is a union of three literal strings for the `method` property. The `Transaction` interface then uses these type aliases, making the object definition clear and type-safe.

2.  **Question:** Consider the following TypeScript function and its usage. Identify the line that will cause a type error and explain why.
    ```typescript
    type Direction = "up" | "down" | "left" | "right";

    function movePlayer(direction: Direction, steps: number): string {
        return `Player moved ${steps} steps to the ${direction}.`;
    }

    // Line A
    let currentDirection: Direction = "up";
    console.log(movePlayer(currentDirection, 5));

    // Line B
    console.log(movePlayer("left", 10));

    // Line C
    console.log(movePlayer("forward", 3)); // This line
    ```

    **Correct Answer:**
    **Line C** will cause a type error.
    **Explanation:** The `movePlayer` function expects its `direction` parameter to be of type `Direction`, which is defined as a union of literal strings: `"up" | "down" | "left" | "right"`. In Line C, the value `"forward"` is passed as the `direction`. Since `"forward"` is not one of the allowed literal strings in the `Direction` type, TypeScript will report an error, stating that `'"forward"' is not assignable to type 'Direction'`. This demonstrates how literal types, especially in unions, enforce strict adherence to a predefined set of values.

---

## Module 3: Classes, Enums, and Advanced Types

This module dives into the structured world of Object-Oriented Programming (OOP) with TypeScript, exploring how to define classes, manage inheritance, and leverage advanced type features like enums, interfaces, and type aliases to build robust and maintainable applications. We'll also learn how to use type guards to safely work with complex data structures.

### Chapter 3.1 — Understanding Classes and Object-Oriented Programming (OOP) in TypeScript

#### Learning objectives
*   Define and instantiate classes in TypeScript, understanding their role in Object-Oriented Programming.
*   Explain the core principles of Encapsulation, Inheritance, and Polymorphism in the context of TypeScript classes.
*   Utilize constructors to initialize class properties and understand parameter properties.
*   Apply access modifiers (`public`, `private`, `protected`, `readonly`) to control the visibility and mutability of class members.
*   Differentiate between instance and static members of a class.

#### Detailed lesson content
Welcome to the exciting world of Object-Oriented Programming (OOP) in TypeScript! If you've worked with JavaScript before, you might be familiar with prototypes and constructor functions. TypeScript builds on this foundation by introducing a class syntax that is much closer to what you'd find in languages like Java or C#, making it easier to structure your code and reason about complex systems. At its heart, OOP is a programming paradigm that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

The three pillars of OOP are Encapsulation, Inheritance, and Polymorphism. **Encapsulation** is the bundling of data (properties) and methods (functions) that operate on the data into a single unit, or class. It also involves restricting direct access to some of an object's components, which prevents external code from accidentally changing the internal state of an object. Think of it like a remote control for your TV: you can use the buttons (methods) to change channels or volume, but you don't need to know or manipulate the intricate wiring (internal data) inside the remote. TypeScript helps enforce encapsulation through access modifiers, which we'll explore shortly.

Let's start by defining a simple class. A class is essentially a blueprint for creating objects. It defines the properties (data) and methods (behavior) that an object of that class will have.

```typescript
class Car {
    // Properties (data)
    make: string;
    model: string;
    year: number;
    private _speed: number = 0; // Private property

    // Constructor: a special method for creating and initializing an object
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        console.log(`A new ${this.year} ${this.make} ${this.model} has been created.`);
    }

    // Method (behavior)
    accelerate(amount: number): void {
        this._speed += amount;
        console.log(`${this.make} ${this.model} is now going ${this._speed} mph.`);
    }

    brake(amount: number): void {
        this._speed = Math.max(0, this._speed - amount);
        console.log(`${this.make} ${this.model} slowed down to ${this._speed} mph.`);
    }

    getCurrentSpeed(): number {
        return this._speed;
    }
}

// Instantiating (creating an object from) the Car class
const myCar = new Car("Toyota", "Camry", 2023);
myCar.accelerate(50); // Output: Toyota Camry is now going 50 mph.
myCar.brake(10);      // Output: Toyota Camry slowed down to 40 mph.
// console.log(myCar._speed); // Error: Property '_speed' is private and only accessible within class 'Car'.
console.log(`Current speed: ${myCar.getCurrentSpeed()} mph`); // Output: Current speed: 40 mph
```

In this `Car` class, `make`, `model`, and `year` are properties. `accelerate` and `brake` are methods. The `constructor` is a special method that gets called automatically when you create a new instance of the class using the `new` keyword. It's responsible for setting up the initial state of the object. A common mistake here is forgetting to use `this.` when referring to class properties inside methods or the constructor. `this` refers to the current instance of the class.

TypeScript also offers a convenient shorthand for constructor parameters if they are directly assigned to properties with the same name and access modifiers. This is called **parameter properties**:

```typescript
class ElectricCar {
    // Shorthand for defining properties and assigning constructor parameters
    constructor(public make: string, public model: string, public readonly batteryCapacityKWh: number) {
        console.log(`An electric car ${this.make} ${this.model} with ${this.batteryCapacityKWh} kWh battery has been created.`);
    }

    charge(): void {
        console.log(`Charging the ${this.make} ${this.model}...`);
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", 75);
console.log(tesla.batteryCapacityKWh); // 75
// tesla.batteryCapacityKWh = 80; // Error: Cannot assign to 'batteryCapacityKWh' because it is a read-only property.
```

Notice the `public` and `readonly` keywords in the `ElectricCar` constructor. These are **access modifiers**, and they are crucial for encapsulation.
*   `public`: Members marked `public` are accessible from anywhere, both inside and outside the class. This is the default modifier if you don't specify one.
*   `private`: Members marked `private` are only accessible from within the class where they are defined. They cannot be accessed from outside the class or from derived classes. This is excellent for truly internal state. The `_speed` property in our first `Car` example demonstrated this. Trying to access `myCar._speed` directly resulted in a compile-time error.
*   `protected`: Members marked `protected` are accessible from within the class itself and from any classes that extend it (derived classes). They are not accessible from outside the class hierarchy. We'll see this in action more clearly when we discuss inheritance.
*   `readonly`: This modifier can be applied to properties to ensure that their value can only be assigned during initialization (either at the declaration or in the constructor). After that, their value cannot be changed. This is perfect for properties that should remain constant once an object is created, like `batteryCapacityKWh` in our `ElectricCar`.

Beyond instance members (properties and methods that belong to an instance of the class), classes can also have **static members**. Static members belong to the class itself, not to any particular instance. You access them directly on the class name, not on an object created from the class. They are often used for utility functions or properties that are shared across all instances of a class.

```typescript
class MathUtil {
    static PI: number = 3.14159; // Static property

    static circleArea(radius: number): number { // Static method
        return this.PI * radius * radius;
    }

    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathUtil.PI); // Accessing static property
console.log(MathUtil.circleArea(5)); // Accessing static method
// const util = new MathUtil(); // Cannot instantiate static class directly
// console.log(util.PI); // Error: Property 'PI' does not exist on type 'MathUtil'.
```

In this `MathUtil` example, `PI` and `circleArea` are static. You don't need to create a `new MathUtil()` object to use them; you just call them directly on the `MathUtil` class. This is useful for helper functions that don't depend on the state of a specific object.

Understanding classes and access modifiers is fundamental to building well-structured, maintainable, and robust applications in TypeScript. By carefully designing your classes and controlling access to their internal state, you can prevent many common programming errors and make your code easier to understand and extend. Remember, the goal is to create clear contracts for how objects interact, hiding complexity where it's not needed.

#### Key concepts
*   **Class:** A blueprint for creating objects, defining their properties (data) and methods (behavior).
*   **Object (Instance):** A concrete realization of a class, created using the `new` keyword.
*   **Constructor:** A special method within a class that is automatically called when a new object is created, used for initialization.
*   **Property:** A variable associated with a class or object, representing its data or state.
*   **Method:** A function associated with a class or object, representing its behavior or actions.
*   **Encapsulation:** The principle of bundling data and methods that operate on the data into a single unit (class) and restricting direct access to some of an object's components.
*   **Access Modifiers (`public`, `private`, `protected`):** Keywords that control the visibility and accessibility of class members.
    *   `public`: Accessible from anywhere.
    *   `private`: Accessible only within the defining class.
    *   `protected`: Accessible within the defining class and its derived classes.
*   **`readonly` Modifier:** A keyword that makes a property immutable after its initial assignment in the declaration or constructor.
*   **Static Members:** Properties or methods that belong to the class itself, rather than to any specific instance of the class. Accessed directly on the class name.
*   **Parameter Properties:** A TypeScript shorthand to declare a constructor parameter and a class property of the same name and assign the parameter's value to the property in one step.

#### Hands-on activity
**Activity: Building a `BankAccount` Class**

Your task is to create a `BankAccount` class that demonstrates the use of private properties, public methods, and a `readonly` account number.

1.  **Define the `BankAccount` class:**
    *   It should have a `readonly` property `accountNumber` of type `string`.
    *   It should have a `private` property `_balance` of type `number`, initialized to `0`.
    *   It should have a `public` property `accountHolder` of type `string`.
2.  **Implement the constructor:**
    *   It should accept `accountHolder` and `accountNumber` as parameters.
    *   Use parameter properties for `accountHolder` and `accountNumber` (remember `readonly` for `accountNumber`).
3.  **Implement methods:**
    *   `deposit(amount: number): void`: Increases the balance. Ensure `amount` is positive.
    *   `withdraw(amount: number): boolean`: Decreases the balance. Ensure `amount` is positive and there are sufficient funds. Return `true` on success, `false` otherwise.
    *   `getBalance(): number`: Returns the current balance.
    *   `getAccountInfo(): string`: Returns a formatted string with account holder, account number, and current balance.
4.  **Test your class:**
    *   Create an instance of `BankAccount`.
    *   Perform deposits and withdrawals.
    *   Try to access `_balance` directly (observe the TypeScript error).
    *   Try to reassign `accountNumber` (observe the TypeScript error).

```typescript
// Starter Code:
class BankAccount {
    // TODO: Add properties and constructor using parameter properties
    // accountNumber should be readonly
    // _balance should be private and initialized to 0
    // accountHolder should be public

    constructor(public accountHolder: string, public readonly accountNumber: string) {
        this._balance = 0; // Initialize private balance
        console.log(`Account ${this.accountNumber} created for ${this.accountHolder}.`);
    }

    private _balance: number; // Private property

    // TODO: Implement deposit, withdraw, getBalance, and getAccountInfo methods

    deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): boolean {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            return false;
        }
        if (this._balance >= amount) {
            this._balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
            return true;
        } else {
            console.log("Insufficient funds.");
            return false;
        }
    }

    getBalance(): number {
        return this._balance;
    }

    getAccountInfo(): string {
        return `Account Holder: ${this.accountHolder}, Account Number: ${this.accountNumber}, Balance: $${this._balance}`;
    }
}

// Test your BankAccount class here:
const myAccount = new BankAccount("Alice Smith", "TS12345");
myAccount.deposit(200);
myAccount.withdraw(50);
myAccount.withdraw(300); // Should fail due to insufficient funds
console.log(myAccount.getAccountInfo());
// console.log(myAccount._balance); // Uncomment to see the private access error
// myAccount.accountNumber = "TS67890"; // Uncomment to see the readonly error
```

#### Assessment idea
1.  **Question:** Consider the following TypeScript class:
    ```typescript
    class Product {
        public name: string;
        private _price: number;
        readonly productId: string;

        constructor(name: string, price: number, productId: string) {
            this.name = name;
            this._price = price;
            this.productId = productId;
        }

        public getPrice(): number {
            return this._price;
        }

        public setPrice(newPrice: number): void {
            if (newPrice > 0) {
                this._price = newPrice;
            } else {
                console.log("Price must be positive.");
            }
        }
    }

    const item = new Product("Laptop", 1200, "LPT101");
    // Which of the following lines of code would result in a TypeScript compilation error?
    // A) console.log(item.name);
    // B) item.setPrice(1300);
    // C) console.log(item._price);
    // D) item.productId = "LPT102";
    ```
    **Answer:** Both C and D would result in compilation errors.
    *   **C) `console.log(item._price);`**: This is an error because `_price` is a `private` property, meaning it can only be accessed from within the `Product` class itself.
    *   **D) `item.productId = "LPT102";`**: This is an error because `productId` is a `readonly` property, which means its value can only be assigned during declaration or in the constructor, not after the object has been initialized.

2.  **Question:** Explain the primary difference between `private` and `protected` access modifiers in TypeScript classes, and provide a scenario where `protected` would be more appropriate than `private`.
    **Answer:**
    *   **`private`**: A member declared `private` is accessible only from within the class where it is defined. It is not accessible from outside the class, nor from any derived (child) classes. It completely encapsulates the member within its own class.
    *   **`protected`**: A member declared `protected` is accessible from within the class where it is defined, and also from any classes that extend or inherit from that class (derived classes). It is not accessible from outside the class hierarchy.
    *   **Scenario for `protected`**: Imagine a base class `Vehicle` with a `protected` method `startEngine()` and a `protected` property `_engineTemperature`.
        ```typescript
        class Vehicle {
            protected _engineTemperature: number = 20;

            protected startEngine(): void {
                console.log("Engine starting...");
                this._engineTemperature = 90; // Only accessible within Vehicle and its subclasses
            }
        }

        class Car extends Vehicle {
            drive(): void {
                this.startEngine(); // Accessible because Car extends Vehicle
                console.log(`Driving with engine temperature: ${this._engineTemperature}°C`); // Also accessible
            }
        }

        const myCar = new Car();
        myCar.drive();
        // myCar.startEngine(); // Error: Property 'startEngine' is protected and only accessible within class 'Vehicle' and its subclasses.
        ```
        In this scenario, `startEngine` and `_engineTemperature` are internal operations and state that `Vehicle` and its specialized types (like `Car`) need to manage. Making them `protected` allows derived classes to directly interact with the engine's starting mechanism and temperature, which is necessary for their specific behaviors (like `drive()`), while still preventing external code from haphazardly starting the engine or modifying its temperature directly. If `startEngine` were `private`, `Car` would not be able to call it, forcing awkward workarounds or breaking the logical flow of inheritance.

#### AI generation note
Create a 10-minute animated video explaining OOP principles and TypeScript classes. Start with a visual analogy of a blueprint (class) and houses (objects). Demonstrate class definition, constructor, and property assignment with `Car` and `ElectricCar` examples. Visually differentiate `public`, `private`, `protected`, and `readonly` by showing access attempts from inside/outside the class and from derived classes (using color-coded access zones). Include a segment on static members with the `MathUtil` example, showing how they're called directly on the class. Use clear code overlays and highlight keywords. Provide captions and alt text for diagrams.

---

### Chapter 3.2 — Inheritance and Abstract Classes

#### Learning objectives
*   Implement class inheritance in TypeScript using the `extends` keyword to create specialized classes from a base class.
*   Understand and correctly use the `super()` keyword to call the constructor and methods of a parent class.
*   Override methods in derived classes to provide specialized implementations while maintaining the parent's interface.
*   Define and utilize abstract classes and abstract methods to establish common contracts for subclasses.
*   Identify scenarios where inheritance and abstract classes improve code reusability and maintainability.

#### Detailed lesson content
Building upon our understanding of basic classes, let's delve into one of the most powerful features of Object-Oriented Programming: **Inheritance**. Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and establishing a clear "is-a" relationship between classes. For example, a `Car` "is a" `Vehicle`, and a `Motorcycle` "is a" `Vehicle`. This means `Car` and `Motorcycle` can share common `Vehicle` characteristics and behaviors, while also having their own unique features.

In TypeScript, you achieve inheritance using the `extends` keyword. The class being inherited from is called the **base class** or **parent class**, and the class that inherits is called the **derived class** or **child class**.

```typescript
class Vehicle {
    constructor(public brand: string, public model: string, protected _speed: number = 0) {
        console.log(`Vehicle ${brand} ${model} created.`);
    }

    accelerate(amount: number): void {
        this._speed += amount;
        console.log(`${this.brand} ${this.model} is now going ${this._speed} mph.`);
    }

    brake(amount: number): void {
        this._speed = Math.max(0, this._speed - amount);
        console.log(`${this.brand} ${this.model} slowed down to ${this._speed} mph.`);
    }

    getSpeed(): number {
        return this._speed;
    }
}

class Car extends Vehicle {
    constructor(brand: string, model: string, public numberOfDoors: number) {
        // Call the constructor of the base class (Vehicle)
        super(brand, model);
        this.numberOfDoors = numberOfDoors;
        console.log(`Car ${brand} ${model} with ${numberOfDoors} doors created.`);
    }

    // New method specific to Car
    openTrunk(): void {
        console.log(`Opening the trunk of the ${this.brand} ${this.model}.`);
    }

    // Method overriding: providing a specialized implementation
    accelerate(amount: number): void {
        // Optionally call the parent's accelerate method
        super.accelerate(amount * 1.2); // Cars accelerate faster!
        console.log(`(Car specific acceleration applied)`);
    }
}

const mySedan = new Car("Honda", "Civic", 4);
mySedan.accelerate(30); // Calls Car's accelerate, which in turn calls Vehicle's accelerate
mySedan.openTrunk();
console.log(`My sedan's speed: ${mySedan.getSpeed()} mph`);

class Motorcycle extends Vehicle {
    constructor(brand: string, model: string, public hasSidecar: boolean) {
        super(brand, model);
        this.hasSidecar = hasSidecar;
        console.log(`Motorcycle ${brand} ${model} ${hasSidecar ? 'with' : 'without'} sidecar created.`);
    }

    // Method overriding: providing a specialized implementation
    accelerate(amount: number): void {
        // Motorcycles might accelerate differently than cars or generic vehicles
        this._speed += amount * 1.5; // Direct access to protected _speed
        console.log(`Motorcycle ${this.brand} ${this.model} is now going ${this._speed} mph (motorcycle specific).`);
    }

    wheelie(): void {
        console.log(`Performing a wheelie on the ${this.brand} ${this.model}!`);
    }
}

const myBike = new Motorcycle("Harley-Davidson", "Iron 883", false);
myBike.accelerate(40);
myBike.wheelie();
console.log(`My bike's speed: ${myBike.getSpeed()} mph`);
```

A critical aspect of inheritance is the `super()` keyword. When a derived class has its own constructor, it **must** call `super()` within its constructor before accessing `this`. This is because `super()` is responsible for calling the constructor of the parent class and ensuring that the parent's properties are properly initialized. Forgetting `super()` is a very common mistake that leads to runtime errors. You can also use `super.methodName()` to call a method from the parent class, as seen in the `Car`'s `accelerate` method, allowing you to extend or modify parent behavior rather than completely replacing it.

**Method overriding** is another powerful concept. Both `Car` and `Motorcycle` classes in our example provide their own `accelerate` method. When you call `mySedan.accelerate(30)`, TypeScript executes the `accelerate` method defined in the `Car` class, not the one in `Vehicle`. This allows derived classes to provide specialized implementations for methods inherited from their parent, while still adhering to the same method signature (name, parameters, return type). This is a key aspect of **Polymorphism**, the third pillar of OOP, which means "many forms" – an object can take on many forms, or rather, different objects can respond to the same method call in different ways.

Notice how the `Motorcycle` class directly accessed `this._speed`. This is possible because `_speed` in the `Vehicle` class was declared as `protected`. If it had been `private`, `Motorcycle` would not have been able to access it directly, reinforcing the difference between `private` and `protected` access modifiers in the context of inheritance.

Now, let's talk about **Abstract Classes**. Sometimes, you want to define a base class that provides a common structure but should never be instantiated directly. You want to force subclasses to provide specific implementations for certain methods. This is where abstract classes come in. An abstract class cannot be instantiated directly; it must be extended by another class. Abstract classes can contain both concrete (implemented) methods and abstract methods. An **abstract method** is declared without an implementation; it only defines the method signature. Any non-abstract class that extends an abstract class must provide an implementation for all of its abstract methods.

```typescript
abstract class Shape {
    constructor(public name: string) {}

    // Abstract method: must be implemented by derived classes
    abstract getArea(): number;

    // Concrete method: can be used as is or overridden by derived classes
    display(): void {
        console.log(`This is a ${this.name}.`);
    }
}

// const myShape = new Shape("Generic"); // Error: Cannot create an instance of an abstract class.

class Circle extends Shape {
    constructor(name: string, public radius: number) {
        super(name);
    }

    // Implementation of the abstract method
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(name: string, public width: number, public height: number) {
        super(name);
    }

    // Implementation of the abstract method
    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle("My Circle", 10);
circle.display(); // Output: This is a My Circle.
console.log(`Circle area: ${circle.getArea()}`); // Output: Circle area: 314.159...

const rectangle = new Rectangle("My Rectangle", 5, 8);
rectangle.display(); // Output: This is a My Rectangle.
console.log(`Rectangle area: ${rectangle.getArea()}`); // Output: Rectangle area: 40
```

In the `Shape` example, `Shape` is an abstract class. It defines a contract: any concrete `Shape` must have a `name` and must implement a `getArea()` method. `Circle` and `Rectangle` are concrete implementations of `Shape`, and they are forced to provide their own `getArea()` logic. This ensures consistency across different types of shapes while allowing for specialized calculations. Abstract classes are powerful tools for designing large-scale applications, enforcing architectural patterns, and ensuring that specific behaviors are implemented by subclasses. They are particularly useful when you have a common concept (like `Shape`) but its exact behavior (like `getArea()`) varies significantly among its concrete manifestations.

Common mistakes include:
*   Forgetting to call `super()` in a derived class constructor.
*   Trying to instantiate an abstract class directly.
*   Failing to implement all abstract methods in a concrete derived class.
*   Misunderstanding the scope of `protected` vs. `private` members in inheritance.

By mastering inheritance and abstract classes, you gain the ability to create highly organized, reusable, and extensible codebases, which is a hallmark of professional software development.

#### Key concepts
*   **Inheritance:** A mechanism where a new class (derived class) is created from an existing class (base class), inheriting its properties and methods.
*   **Base Class (Parent Class):** The class from which other classes inherit.
*   **Derived Class (Child Class):** The class that inherits from a base class.
*   **`extends` Keyword:** Used in TypeScript to indicate that a class is inheriting from another class.
*   **`super()` Keyword:** Used in a derived class's constructor to call the constructor of its base class. It must be called before `this` is accessed in the derived class's constructor.
*   **`super.methodName()`:** Used in a derived class to call a method from its base class.
*   **Method Overriding:** Providing a new implementation for a method in a derived class that already exists in its base class, while maintaining the same method signature.
*   **Polymorphism:** The ability of objects of different classes to respond to the same method call in different ways, often achieved through method overriding in inheritance.
*   **Abstract Class:** A class that cannot be instantiated directly and is designed to be extended by other classes. It can contain both concrete and abstract methods.
*   **Abstract Method:** A method declared in an abstract class without an implementation. Any non-abstract derived class must provide an implementation for all abstract methods.

#### Hands-on activity
**Activity: Designing a Payment Processor with Abstract Classes**

You are tasked with designing a payment processing system. All payment methods share some common characteristics but have distinct ways of processing payments. Use an abstract class to enforce a consistent interface.

1.  **Create an `abstract` class `PaymentProcessor`:**
    *   It should have a `protected readonly` property `transactionIdPrefix` of type `string`.
    *   It should have a `constructor` that takes `transactionIdPrefix` and sets it.
    *   It should have an `abstract` method `processPayment(amount: number): boolean` that returns `true` on success, `false` otherwise.
    *   It should have a concrete method `generateTransactionId(): string` that uses `transactionIdPrefix` and a random number to create a unique ID.
    *   It should have a concrete method `logTransaction(id: string, amount: number, status: string): void` that logs the transaction details.

2.  **Create a concrete class `CreditCardPayment` that `extends PaymentProcessor`:**
    *   It should have a `constructor` that takes `cardNumber` (string), `expiryDate` (string), and `cvv` (string), and calls `super("CC-")`.
    *   Implement the `processPayment` method:
        *   Simulate a successful payment if `amount` is less than 1000.
        *   Simulate a failure if `amount` is 1000 or more (e.g., "Transaction declined due to high amount").
        *   Generate a transaction ID and log the transaction status (success/failure).
        *   Return `true` for success, `false` for failure.

3.  **Create a concrete class `PayPalPayment` that `extends PaymentProcessor`:**
    *   It should have a `constructor` that takes `payerEmail` (string) and calls `super("PP-")`.
    *   Implement the `processPayment` method:
        *   Simulate a successful payment if `amount` is an even number.
        *   Simulate a failure if `amount` is an odd number (e.g., "PayPal only accepts even amounts for this demo").
        *   Generate a transaction ID and log the transaction status.
        *   Return `true` for success, `false` for failure.

4.  **Test your payment processors:**
    *   Create instances of `CreditCardPayment` and `PayPalPayment`.
    *   Call `processPayment` with various amounts and observe the output.

```typescript
// Starter Code:
abstract class PaymentProcessor {
    protected readonly transactionIdPrefix: string;

    constructor(transactionIdPrefix: string) {
        this.transactionIdPrefix = transactionIdPrefix;
    }

    abstract processPayment(amount: number): boolean;

    generateTransactionId(): string {
        return `${this.transactionIdPrefix}${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    }

    logTransaction(id: string, amount: number, status: string): void {
        console.log(`Transaction ID: ${id}, Amount: $${amount}, Status: ${status}`);
    }
}

class CreditCardPayment extends PaymentProcessor {
    constructor(private cardNumber: string, private expiryDate: string, private cvv: string) {
        super("CC-");
    }

    processPayment(amount: number): boolean {
        const transactionId = this.generateTransactionId();
        if (amount < 1000) {
            this.logTransaction(transactionId, amount, "Success (Credit Card)");
            return true;
        } else {
            this.logTransaction(transactionId, amount, "Failed (Credit Card) - Transaction declined due to high amount.");
            return false;
        }
    }
}

class PayPalPayment extends PaymentProcessor {
    constructor(private payerEmail: string) {
        super("PP-");
    }

    processPayment(amount: number): boolean {
        const transactionId = this.generateTransactionId();
        if (amount % 2 === 0) {
            this.logTransaction(transactionId, amount, "Success (PayPal)");
            return true;
        } else {
            this.logTransaction(transactionId, amount, "Failed (PayPal) - PayPal only accepts even amounts for this demo.");
            return false;
        }
    }
}

// Test your classes here:
const creditCardProcessor = new CreditCardPayment("1234-5678-9012-3456", "12/25", "123");
console.log("Credit Card Payment attempts:");
creditCardProcessor.processPayment(500); // Should succeed
creditCardProcessor.processPayment(1500); // Should fail

const payPalProcessor = new PayPalPayment("user@example.com");
console.log("\nPayPal Payment attempts:");
payPalProcessor.processPayment(100); // Should succeed
payPalProcessor.processPayment(101); // Should fail
```

#### Assessment idea
1.  **Question:** You have a base class `Animal` with a `makeSound()` method. You want to create a `Dog` class that extends `Animal` and has its own specific `makeSound()` behavior, but also needs to call the `Animal` constructor. Write the basic structure of the `Dog` class, including its constructor and the overridden `makeSound()` method.
    ```typescript
    class Animal {
        constructor(public name: string) {}
        makeSound(): void {
            console.log("Generic animal sound.");
        }
    }

    // Your Dog class here:
    class Dog extends Animal {
        constructor(name: string, public breed: string) {
            // Must call super() first to initialize parent class properties
            super(name);
            this.breed = breed;
        }

        makeSound(): void {
            // Override the parent method
            console.log("Woof! Woof!");
            // Optionally call the parent's method if you want to extend its behavior
            // super.makeSound();
        }

        fetch(): void {
            console.log(`${this.name} is fetching!`);
        }
    }

    const myDog = new Dog("Buddy", "Golden Retriever");
    myDog.makeSound(); // Expected: "Woof! Woof!"
    myDog.fetch();     // Expected: "Buddy is fetching!"
    ```
    **Answer:**
    ```typescript
    class Dog extends Animal {
        constructor(name: string, public breed: string) {
            super(name); // Call the parent constructor
            this.breed = breed;
        }

        makeSound(): void {
            // Override the makeSound method
            console.log("Woof! Woof!");
        }
    }
    ```
    **Explanation:** The `Dog` class uses `extends Animal` to inherit from `Animal`. Its constructor takes `name` (for the `Animal` part) and `breed` (for the `Dog` part). Crucially, `super(name)` is called first to ensure the `Animal`'s constructor is executed and `this.name` is initialized before `this.breed` is set. The `makeSound()` method is then overridden to provide a dog-specific sound.

2.  **Question:** You are designing a system for different types of employees. All employees have a `name` and must have a `calculateSalary()` method, but the calculation varies greatly. Some employees might also have a `department` property. Which of the following best describes how you would model the base `Employee` concept to enforce the `calculateSalary()` method for all derived classes, while also allowing for common properties?
    *   A) A regular class `Employee` with a default `calculateSalary()` that returns 0.
    *   B) An interface `Employee` with `name` and `calculateSalary()`.
    *   C) An abstract class `Employee` with a concrete `name` property and an abstract `calculateSalary()` method.
    *   D) A type alias `Employee` for an object literal with `name` and `calculateSalary()` as a function.

    **Answer:** C) An abstract class `Employee` with a concrete `name` property and an abstract `calculateSalary()` method.
    **Explanation:**
    *   **A) Regular class:** While possible, a default `calculateSalary()` of 0 doesn't enforce that subclasses *must* provide a meaningful implementation. It also allows direct instantiation of a generic `Employee`, which might not be desired if `Employee` is purely a conceptual base.
    *   **B) Interface:** An interface defines a contract, which is good for `calculateSalary()`. However, interfaces cannot have properties with implementations (like a concrete `name` property that's initialized in a constructor) or concrete methods. They are purely structural.
    *   **C) Abstract class:** This is the ideal solution. An abstract class can have concrete properties (like `name`) and methods, and it can also declare `abstract` methods (`calculateSalary()`) that *must* be implemented by any non-abstract derived class. It also prevents direct instantiation of the `Employee` class, ensuring only specific employee types are created.
    *   **D) Type alias:** A type alias is a way to give a new name to an existing type. It's useful for complex types but doesn't provide the class-based inheritance, method overriding, or enforcement mechanisms of abstract classes.

#### AI generation note
Produce a 12-minute interactive code demo focusing on inheritance and abstract classes. Start with the `Vehicle` -> `Car`/`Motorcycle` example, live-coding the base class, then extending it. Emphasize `super()` by showing the error when it's omitted and then correcting it. Demonstrate method overriding with both `super.methodName()` and complete replacement. Transition to abstract classes with the `Shape` example, showing how an abstract class cannot be instantiated and how derived classes *must* implement abstract methods. Use side-by-side code comparisons to highlight changes. Include a small coding challenge where learners fill in a missing `super()` call or an abstract method implementation. Ensure high-contrast visuals for code.

---

### Chapter 3.3 — Enums: Organizing Related Constants

#### Learning objectives
*   Define and use numeric enums to represent a set of named constants.
*   Understand the concept of reverse mapping in numeric enums and its implications.
*   Define and use string enums for more readable and debuggable code.
*   Differentiate between numeric and string enums, and choose the appropriate type for various scenarios.
*   Apply best practices for enum usage to improve code clarity and maintainability.

#### Detailed lesson content
In programming, we often encounter situations where a variable needs to hold one of a fixed set of possible values. For instance, the days of the week, the status of a user (e.g., `Active`, `Inactive`, `Pending`), or the direction a character can move (e.g., `Up`, `Down`, `Left`, `Right`). While you could use simple numbers or strings for these, TypeScript provides a dedicated feature called **Enums** (short for enumerations) to make such sets of constants more organized, readable, and type-safe.

Enums allow you to define a collection of related named constants. They make your code more self-documenting by giving meaningful names to otherwise arbitrary numerical or string values.

Let's start with **Numeric Enums**, which are the default type if you don't explicitly assign values.

```typescript
// Numeric Enum
enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let playerDirection: Direction = Direction.Up;
console.log(playerDirection); // Output: 0

if (playerDirection === Direction.Up) {
    console.log("Player is moving upwards.");
}

// You can explicitly assign values, and subsequent members will auto-increment
enum StatusCode {
    NotFound = 404,
    Success = 200,
    BadRequest = 400,
    InternalServerError // Auto-increments from previous, so 401
}

console.log(StatusCode.Success); // Output: 200
console.log(StatusCode.InternalServerError); // Output: 401

function handleResponse(status: StatusCode): void {
    if (status === StatusCode.NotFound) {
        console.log("Resource not found.");
    } else if (status === StatusCode.Success) {
        console.log("Operation successful.");
    } else {
        console.log("Unhandled status code.");
    }
}

handleResponse(StatusCode.Success);
handleResponse(404); // You can pass numbers directly if they match enum values, but it's less type-safe
```

In the `Direction` enum, `Up` automatically gets the value `0`, `Down` gets `1`, and so on. You can explicitly set the starting value or any value, and subsequent members will increment from there. A unique feature of numeric enums in TypeScript is **reverse mapping**. This means you can get the string name of an enum member from its numeric value.

```typescript
enum UserRole {
    Admin = 1,
    Editor, // 2
    Viewer  // 3
}

console.log(UserRole.Editor);    // Output: 2
console.log(UserRole[2]);        // Output: Editor (Reverse mapping)
console.log(UserRole[UserRole.Admin]); // Output: Admin
```

While reverse mapping can sometimes be useful, it adds extra code to your compiled JavaScript, which might not always be desirable, especially in performance-critical applications or when bundle size is a concern. It also means that `UserRole[2]` works, but `UserRole["Editor"]` does not directly give you the number `2` without casting, which can be confusing.

To avoid the complexities of reverse mapping and to provide more readable and debuggable values, TypeScript introduced **String Enums**. String enums are often preferred because their values are meaningful strings, which can be very helpful during debugging or when interacting with external APIs that use string-based status codes.

```typescript
// String Enum
enum LogLevel {
    ERROR = "ERROR",
    WARN = "WARN",
    INFO = "INFO",
    DEBUG = "DEBUG"
}

let currentLogLevel: LogLevel = LogLevel.INFO;
console.log(currentLogLevel); // Output: INFO

function logMessage(level: LogLevel, message: string): void {
    if (level === LogLevel.ERROR) {
        console.error(`[${level}] ${message}`);
    } else if (level === LogLevel.WARN) {
        console.warn(`[${level}] ${message}`);
    } else {
        console.log(`[${level}] ${message}`);
    }
}

logMessage(LogLevel.ERROR, "Failed to connect to database.");
logMessage(LogLevel.INFO, "User logged in successfully.");
```

String enums do **not** support reverse mapping. You cannot get the string name from its value (because the value *is* the string name). This makes them simpler and often more predictable. When should you use string enums versus numeric enums?
*   **String Enums:**
    *   **Pros:** Better readability, easier debugging (you see "ERROR" instead of "0"), can be directly used with string-based APIs (e.g., `fetch('/api/status/' + LogLevel.INFO)`). No reverse mapping overhead.
    *   **Cons:** Slightly larger runtime code than numeric enums if you don't use `const enum`.
    *   **Use cases:** HTTP status messages, user roles, application states, API response codes.
*   **Numeric Enums:**
    *   **Pros:** Can be more compact in compiled JavaScript (especially with `const enum`), supports reverse mapping.
    *   **Cons:** Less readable values, can be confusing if you rely on auto-incrementing values.
    *   **Use cases:** Bit flags (though union types with literal types are often preferred now), when you truly need integer values and reverse mapping is a benefit.

It's also possible to mix numeric and string enum members, creating **Heterogeneous Enums**, but this is generally discouraged as it can lead to confusion and is rarely necessary. Sticking to purely numeric or purely string enums is a best practice for clarity.

```typescript
// Heterogeneous Enum (Discouraged)
enum Mixed {
    No = 0,
    Yes = "YES"
}
console.log(Mixed.No);  // 0
console.log(Mixed.Yes); // YES
// console.log(Mixed[0]); // No reverse mapping for 'Yes' if it's a string.
```

A common mistake is to overuse enums or to use them where a simple union of literal types might be more appropriate, especially for small, fixed sets of strings. For example, instead of `enum Color { Red = "RED", Green = "GREEN" }`, you could use `type Color = "RED" | "GREEN";`. The choice often depends on whether you need the `enum` object itself as a collection (e.g., iterating over `Object.values(Color)`) or just the type safety.

Finally, TypeScript offers **`const enum`**. If you declare an enum with `const`, TypeScript will completely remove the enum object at runtime and inline the enum member values directly into the code where they are used. This can significantly reduce the generated JavaScript bundle size and improve performance, as there's no runtime object to look up.

```typescript
const enum Environment {
    Development,
    Staging,
    Production
}

function deploy(env: Environment): void {
    if (env === Environment.Production) {
        console.log("Deploying to production!");
    } else {
        console.log("Deploying to a non-production environment.");
    }
}

deploy(Environment.Development);
// In compiled JS, this might become: deploy(0);
// If you access Environment.Development, it will be replaced by 0 at compile time.
```
`const enum` is a powerful optimization, but it comes with a limitation: you can only access `const enum` members using string literal access (e.g., `Environment.Development`). You cannot use reverse mapping or iterate over `const enum` values at runtime because the enum object simply doesn't exist in the compiled JavaScript.

In summary, enums are a fantastic way to introduce type safety and readability to collections of related constants. String enums are generally preferred for their clarity, while numeric enums offer reverse mapping. `const enum` is an excellent choice for optimization when you only need the compile-time type safety and value inlining. Choose the enum type that best fits your specific needs for clarity, maintainability, and runtime behavior.

#### Key concepts
*   **Enum (Enumeration):** A special data type that allows for a variable to be a set of predefined named constants. Improves code readability and type safety.
*   **Numeric Enum:** An enum where members are assigned numeric values. By default, the first member is `0`, and subsequent members auto-increment.
*   **Reverse Mapping:** A feature of numeric enums where you can retrieve the string name of an enum member from its numeric value (e.g., `Direction[0]` returns `"Up"`). This adds runtime overhead.
*   **String Enum:** An enum where members are assigned string literal values. Provides better readability and debugging, and values can be used directly with string-based APIs. Does not support reverse mapping.
*   **Heterogeneous Enum:** An enum that mixes both numeric and string members. Generally discouraged due to potential confusion.
*   **`const enum`:** A compile-time optimization for enums. The enum object is completely removed from the generated JavaScript, and enum member usages are inlined with their values. This reduces bundle size but removes runtime access to the enum object (no reverse mapping, no `Object.values()`).
*   **Literal Type Unions:** An alternative to enums for small, fixed sets of string or number values (e.g., `type Status = "ACTIVE" | "INACTIVE";`). Often preferred when you don't need the runtime enum object or its specific features.

#### Hands-on activity
**Activity: Managing Task Status with Enums**

You are building a task management application. Tasks can have different statuses. Use enums to define these statuses and demonstrate their usage.

1.  **Define a `TaskStatus` string enum:**
    *   Include statuses like `TODO`, `IN_PROGRESS`, `PAUSED`, `COMPLETED`, `CANCELLED`.
    *   Assign descriptive string values to each.

2.  **Define a `TaskPriority` numeric enum:**
    *   Include priorities like `LOW`, `MEDIUM`, `HIGH`, `URGENT`.
    *   Assign numeric values, starting `LOW` at `1` and letting others auto-increment.

3.  **Create a `Task` class:**
    *   Properties: `id` (string), `title` (string), `status` (of type `TaskStatus`), `priority` (of type `TaskPriority`).
    *   Constructor: Initialize all properties.
    *   Method `updateStatus(newStatus: TaskStatus): void`: Updates the task's status and logs the change.
    *   Method `displayTask(): void`: Logs all task details in a readable format.

4.  **Test your enums and class:**
    *   Create a few `Task` instances with different statuses and priorities.
    *   Update the status of one task.
    *   Display the details of all tasks.
    *   Try to access a numeric enum's reverse mapping (e.g., `TaskPriority[2]`).

```typescript
// Starter Code:

// 1. Define TaskStatus string enum
enum TaskStatus {
    TODO = "TO DO",
    IN_PROGRESS = "IN PROGRESS",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

// 2. Define TaskPriority numeric enum
enum TaskPriority {
    LOW = 1,
    MEDIUM, // 2
    HIGH,   // 3
    URGENT  // 4
}

// 3. Create a Task class
class Task {
    constructor(
        public id: string,
        public title: string,
        public status: TaskStatus,
        public priority: TaskPriority
    ) {}

    updateStatus(newStatus: TaskStatus): void {
        console.log(`Task '${this.title}' status changing from '${this.status}' to '${newStatus}'.`);
        this.status = newStatus;
    }

    displayTask(): void {
        console.log(`--- Task Details ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Status: ${this.status}`);
        console.log(`Priority: ${TaskPriority[this.priority]} (${this.priority})`); // Using reverse mapping for priority
        console.log(`--------------------`);
    }
}

// 4. Test your enums and class here:
const task1 = new Task("T001", "Implement user authentication", TaskStatus.TODO, TaskPriority.HIGH);
const task2 = new Task("T002", "Design database schema", TaskStatus.IN_PROGRESS, TaskPriority.URGENT);
const task3 = new Task("T003", "Write unit tests", TaskStatus.PAUSED, TaskPriority.MEDIUM);

task1.displayTask();
task2.displayTask();

task1.updateStatus(TaskStatus.IN_PROGRESS);
task1.displayTask();

console.log("\nAccessing numeric enum reverse mapping:");
console.log(`Priority 3 is: ${TaskPriority[3]}`); // Should output "HIGH"
// console.log(`Status "TO DO" is: ${TaskStatus["TO DO"]}`); // This won't work for string enums directly
```

#### Assessment idea
1.  **Question:** You are building an application where users can select their preferred theme: `Light`, `Dark`, or `System`. You want to store this preference and display it clearly in logs. Which type of enum (`numeric`, `string`, or `const`) would be most appropriate, and why? Provide an example of how you would define and use it.
    **Answer:** A `string enum` would be most appropriate.
    **Explanation:**
    *   **Why `string enum`?** String enums provide highly readable and self-documenting values. When logging or displaying the theme, seeing "Light" or "Dark" is much clearer than "0" or "1". It also aligns well if these values need to be sent to a backend API or stored in a database as strings. There's no need for reverse mapping here, and the slight runtime overhead compared to `const enum` is negligible for this use case, while the flexibility of having a runtime object can sometimes be useful (e.g., for iterating over possible themes).
    *   **Example:**
        ```typescript
        enum Theme {
            LIGHT = "Light",
            DARK = "Dark",
            SYSTEM = "System"
        }

        let userPreference: Theme = Theme.DARK;
        console.log(`User's selected theme: ${userPreference}`); // Output: User's selected theme: Dark

        function applyTheme(theme: Theme): void {
            console.log(`Applying ${theme} theme...`);
            // Logic to change CSS classes or UI elements based on theme
        }

        applyTheme(userPreference);
        ```

2.  **Question:** Consider the following enum and code snippet:
    ```typescript
    enum LogLevel {
        DEBUG = 1,
        INFO,
        WARN,
        ERROR
    }

    function processLog(level: LogLevel, message: string): void {
        if (level === LogLevel.ERROR) {
            console.error(`[ERROR] ${message}`);
        } else if (level === 3) {
            console.warn(`[WARN] ${message}`);
        } else {
            console.log(`[${LogLevel[level]}] ${message}`);
        }
    }

    processLog(LogLevel.INFO, "User logged in.");
    processLog(LogLevel.ERROR, "Database connection failed.");
    processLog(2, "Data fetched successfully.");
    ```
    What will be the output of the `processLog` calls, and what is a potential pitfall demonstrated by this code?
    **Answer:**
    *   **Output:**
        ```
        [INFO] User logged in.
        [ERROR] Database connection failed.
        [INFO] Data fetched successfully.
        ```
    *   **Potential Pitfall:** The pitfall is using raw numeric literals (`3` and `2`) directly in comparisons or function calls instead of the enum members (`LogLevel.WARN`, `LogLevel.INFO`).
        *   In the `if (level === 3)` condition, `3` correctly matches `LogLevel.WARN`. So, `processLog(LogLevel.WARN, "...")` would correctly trigger this branch. However, `processLog(2, "...")` passes the number `2` directly.
        *   `LogLevel.INFO` has a value of `2`. So, when `processLog(LogLevel.INFO, "User logged in.")` is called, the `level` parameter is `2`. It doesn't match `LogLevel.ERROR` (which is `4`) or `3`. It falls into the `else` block, where `LogLevel[level]` correctly resolves `LogLevel[2]` to "INFO".
        *   When `processLog(2, "Data fetched successfully.")` is called, `level` is `2`. Again, it doesn't match `LogLevel.ERROR` or `3`, so it falls into the `else` block, resolving `LogLevel[2]` to "INFO".
        *   This demonstrates that numeric enums can be implicitly treated as their underlying numeric values. While TypeScript allows this for numeric enums, it reduces type safety. A better practice is to always use the enum member (e.g., `LogLevel.INFO`) instead of its raw numeric value (`2`) to prevent confusion, especially if the enum values might change in the future. If `LogLevel.INFO` were to change its value from `2` to `5`, the comparison `level === 2` would silently break without a type error.

#### AI generation note
Design a 9-minute interactive slide deck with integrated mini-quizzes on enums. Start by defining numeric enums with auto-incrementing values, showing the compiled JavaScript for reverse mapping. Then, introduce string enums, highlighting their readability and lack of reverse mapping. Use a "Theme Selector" example for string enums and a "Game Difficulty" example for numeric enums. Include a slide on `const enum` and its compilation benefits. Each section should have a drag-and-drop or multiple-choice mini-quiz question (e.g., "Which enum type is best for API responses?"). Visuals should include code snippets with syntax highlighting and clear output logs.

---

### Chapter 3.4 — Advanced Type Concepts: Type Aliases, Interfaces, and Type Guards

#### Learning objectives
*   Define and apply type aliases to create custom names for existing or complex types, including union and intersection types.
*   Define and implement interfaces to specify contracts for object shapes and class structures.
*   Compare and contrast type aliases and interfaces, understanding their respective strengths and use cases.
*   Utilize type guards (`typeof`, `instanceof`, and user-defined type guards) to narrow down types within conditional blocks.
*   Implement discriminated unions to handle complex data structures with varying shapes based on a common literal property.

#### Detailed lesson content
As you build more complex applications, you'll inevitably encounter situations where you need to define custom types or enforce specific structures for your data. TypeScript provides powerful tools for this: **Type Aliases** and **Interfaces**. While they often seem similar, they have distinct characteristics and preferred use cases. We'll also explore **Type Guards**, which are essential for safely working with these complex types.

Let's begin with **Type Aliases**. A type alias is simply a new name for any type. You can use it to give a custom name to a primitive type, a union type, an intersection type, a tuple, or even a function signature. They are incredibly flexible for creating readable and reusable type definitions.

```typescript
// Type Alias for a primitive type
type ID = string;
type Age = number;

let userId: ID = "abc-123";
let userAge: Age = 30;

// Type Alias for a complex object shape
type User = {
    id: ID;
    name: string;
    email: string;
    isActive: boolean;
    roles?: string[]; // Optional property
};

const adminUser: User = {
    id: "admin-456",
    name: "Admin User",
    email: "admin@example.com",
    isActive: true,
    roles: ["admin", "editor"]
};

// Type Alias for a Union Type (a value can be one of several types)
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 123;

// Type Alias for an Intersection Type (combining multiple types into one)
type Point2D = { x: number; y: number; };
type Point3D = Point2D & { z: number; }; // Point3D has x, y, and z

const p3: Point3D = { x: 10, y: 20, z: 30 };

// Type Alias for a Function Signature
type Greeter = (name: string) => string;
const sayHello: Greeter = (name) => `Hello, ${name}!`;
console.log(sayHello("Cohortia"));
```

Type aliases are particularly useful for creating descriptive names for union and intersection types, making your code much cleaner.

Now, let's look at **Interfaces**. Interfaces are a core concept in TypeScript for defining contracts within your code and with code outside your project. They describe the shape of an object, specifying what properties and methods an object *must* have. Interfaces are primarily used for object types and can also be implemented by classes.

```typescript
// Interface for an object shape
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): string; // Method signature
}

const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};
console.log(person1.greet());

// Interfaces can extend other interfaces
interface Employee extends Person {
    employeeId: string;
    department: string;
    hireDate: Date;
}

const employee1: Employee = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    employeeId: "EMP001",
    department: "Engineering",
    hireDate: new Date(),
    greet() {
        return `Hello, I'm ${this.firstName} ${this.lastName} from ${this.department}.`;
    }
};
console.log(employee1.greet());

// Classes can implement interfaces
interface Logger {
    log(message: string): void;
    error(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[LOG] ${message}`);
    }
    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }
}

const myLogger = new ConsoleLogger();
myLogger.log("Application started.");
myLogger.error("Something went wrong!");
```

**Type Aliases vs. Interfaces: When to use which?**
This is a common point of confusion. Here's a quick guide:
*   **Interfaces:**
    *   Can be `implemented` by classes (`class MyClass implements MyInterface`).
    *   Can be `extended` by other interfaces (`interface Child extends Parent`).
    *   Can be `merged` (declaration merging): if you declare two interfaces with the same name, TypeScript will merge their properties. This is useful for augmenting existing library types.
    *   **Best for:** Defining public APIs, object shapes, and contracts that classes will adhere to.
*   **Type Aliases:**
    *   Can define primitive types, union types, intersection types, tuples, and function signatures.
    *   Can `intersect` (`&`) and `union` (`|`) with other types.
    *   Cannot be `implemented` by classes directly (though you can implement an object type defined by an alias).
    *   Cannot be `merged` (no declaration merging).
    *   **Best for:** Creating custom names for complex or composite types, especially union/intersection types, and function signatures.

A good rule of thumb: If you're defining the shape of an object that might be implemented by a class or needs to be extended by other object shapes, lean towards an `interface`. If you're creating a new name for a combination of types (like `string | number`), a literal type, or a function signature, use a `type alias`. Many modern TypeScript developers use interfaces by default for object shapes and switch to type aliases when they need specific features like union or intersection types.

Working with union types often means you have a variable that could be one of several types. To safely access properties or call methods specific to one of those types, you need **Type Guards**. Type guards are special checks that narrow the type of a variable within a certain scope.

```typescript
type Result = { success: true; data: string; } | { success: false; error: string; };

function processResult(res: Result): void {
    if (res.success) {
        // TypeScript knows res is { success: true; data: string; } here
        console.log(`Success! Data: ${res.data}`);
    } else {
        // TypeScript knows res is { success: false; error: string; } here
        console.log(`Error! Message: ${res.error}`);
    }
}

processResult({ success: true, data: "User profile loaded" });
processResult({ success: false, error: "Network error" });

// typeof type guard (for primitive types)
function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(`Your ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`Your ID is a number: ${id.toFixed(2)}`);
    }
}
printId("abc");
printId(123.456);

// instanceof type guard (for classes)
class Cat { meow() { console.log("Meow!"); } }
class Dog { bark() { console.log("Woof!"); } }
type Pet = Cat | Dog;

function playWithPet(pet: Pet): void {
    if (pet instanceof Cat) {
        pet.meow(); // TypeScript knows pet is a Cat here
    } else {
        pet.bark(); // TypeScript knows pet is a Dog here
    }
}
playWithPet(new Cat());
playWithPet(new Dog());

// User-defined type guards
interface Bird { fly(): void; }
interface Fish { swim(): void; }

function isBird(pet: Bird | Fish): pet is Bird {
    return (pet as Bird).fly !== undefined; // Check for a unique property/method
}

function move(pet: Bird | Fish): void {
    if (isBird(pet)) {
        pet.fly();
    } else {
        pet.swim();
    }
}

class Sparrow implements Bird { fly() { console.log("Sparrow flying!"); } }
class Salmon implements Fish { swim() { console.log("Salmon swimming!"); } }

move(new Sparrow());
move(new Salmon());
```

The `processResult` example above uses a technique called **Discriminated Unions**. This is a powerful pattern for working with union types where each type in the union has a common property (the "discriminant") with a literal type. TypeScript can then use this discriminant property to narrow down the type. In our example, `success: true` or `success: false` acts as the discriminant. This pattern is incredibly useful for handling different states or variations of an object in a type-safe manner.

Understanding type aliases, interfaces, and type guards is crucial for writing robust, scalable, and maintainable TypeScript applications. They allow you to precisely describe your data structures and ensure that your code handles different data shapes correctly, minimizing runtime errors and enhancing developer productivity.

#### Key concepts
*   **Type Alias (`type` keyword):** A way to create a new name for any type, including primitive types, object types, union types, intersection types, tuples, and function signatures.
*   **Interface (`interface` keyword):** A way to define contracts for the shape of objects. Can specify properties and method signatures. Primarily used for object types and can be implemented by classes.
*   **Union Type (`|`):** A type that can be one of several other types (e.g., `string | number`).
*   **Intersection Type (`&`):** A type that combines multiple types into a single type, having all the properties of the combined types (e.g., `TypeA & TypeB`).
*   **Declaration Merging:** A feature specific to interfaces where multiple interface declarations with the same name are merged into a single interface.
*   **Type Guard:** A conditional block that narrows the type of a variable within that block, allowing TypeScript to infer a more specific type.
*   **`typeof` Type Guard:** Used to narrow types based on the JavaScript `typeof` operator (e.g., `typeof x === "string"`). Works for primitive types.
*   **`instanceof` Type Guard:** Used to narrow types based on the JavaScript `instanceof` operator (e.g., `x instanceof MyClass`). Works for classes and constructor functions.
*   **User-Defined Type Guard:** A function that returns a boolean and uses a type predicate (`parameterName is Type`) to inform TypeScript about a type narrowing.
*   **Discriminated Union:** A powerful pattern for working with union types where each type in the union has a common literal property (the "discriminant") that TypeScript can use to safely narrow the type.

#### Hands-on activity
**Activity: Building a Notification System with Type Aliases, Interfaces, and Discriminated Unions**

You need to design a notification system that can send different types of messages (email, SMS, push notification). Each notification type has unique properties.

1.  **Define a `NotificationType` string literal union:** `type NotificationType = "email" | "sms" | "push";`

2.  **Define interfaces for specific notification details:**
    *   `EmailDetails`: `subject: string`, `recipientEmail: string`, `body: string`
    *   `SmsDetails`: `phoneNumber: string`, `message: string`
    *   `PushDetails`: `deviceId: string`, `title: string`, `content: string`

3.  **Define a `BaseNotification` interface:**
    *   `id: string`
    *   `timestamp: Date`
    *   `type: NotificationType` (this will be your discriminant)

4.  **Create a `Notification` type alias using discriminated unions:**
    *   Combine `BaseNotification` with `EmailDetails`, `SmsDetails`, or `PushDetails` based on the `type` property.
    *   Example structure:
        ```typescript
        type Notification =
            (BaseNotification & { type: "email" } & EmailDetails) |
            (BaseNotification & { type: "sms" } & SmsDetails) |
            (BaseNotification & { type: "push" } & PushDetails);
        ```

5.  **Implement a `sendNotification` function:**
    *   It should accept a `Notification` object.
    *   Use type guards (specifically, the discriminated union property `notification.type`) to determine the exact type of notification.
    *   Log appropriate messages for each notification type, accessing its specific properties.

6.  **Test your system:**
    *   Create instances of each notification type.
    *   Call `sendNotification` for each, verifying that the correct logic is executed and specific properties are accessed without type errors.

```typescript
// Starter Code:

// 1. Define NotificationType string literal union
type NotificationType = "email" | "sms" | "push";

// 2. Define interfaces for specific notification details
interface EmailDetails {
    subject: string;
    recipientEmail: string;
    body: string;
}

interface SmsDetails {
    phoneNumber: string;
    message: string;
}

interface PushDetails {
    deviceId: string;
    title: string;
    content: string;
}

// 3. Define a BaseNotification interface
interface BaseNotification {
    id: string;
    timestamp: Date;
    type: NotificationType; // Discriminant property
}

// 4. Create a Notification type alias using discriminated unions
type Notification =
    (BaseNotification & { type: "email" } & EmailDetails) |
    (BaseNotification & { type: "sms" } & SmsDetails) |
    (BaseNotification & { type: "push" } & PushDetails);

// 5. Implement a sendNotification function
function sendNotification(notification: Notification): void {
    console.log(`\n--- Sending Notification (ID: ${notification.id}) ---`);
    console.log(`Timestamp: ${notification.timestamp.toLocaleString()}`);

    switch (notification.type) {
        case "email":
            // TypeScript knows notification is (BaseNotification & { type: "email" } & EmailDetails) here
            console.log(`Type: Email`);
            console.log(`To: ${notification.recipientEmail}`);
            console.log(`Subject: ${notification.subject}`);
            console.log(`Body: ${notification.body}`);
            break;
        case "sms":
            // TypeScript knows notification is (BaseNotification & { type: "sms" } & SmsDetails) here
            console.log(`Type: SMS`);
            console.log(`Phone: ${notification.phoneNumber}`);
            console.log(`Message: ${notification.message}`);
            break;
        case "push":
            // TypeScript knows notification is (BaseNotification & { type: "push" } & PushDetails) here
            console.log(`Type: Push Notification`);
            console.log(`Device ID: ${notification.deviceId}`);
            console.log(`Title: ${notification.title}`);
            console.log(`Content: ${notification.content}`);
            break;
        default:
            // This case should ideally be unreachable if all types are covered
            console.log("Unknown notification type.");
    }
    console.log(`------------------------------------`);
}

// 6. Test your system here:
const emailNotif: Notification = {
    id: "N001",
    timestamp: new Date(),
    type: "email",
    recipientEmail: "user@example.com",
    subject: "Your Order Confirmation",
    body: "Thank you for your purchase!"
};

const smsNotif: Notification = {
    id: "N002",
    timestamp: new Date(),
    type: "sms",
    phoneNumber: "+15551234567",
    message: "Your delivery is on its way!"
};

const pushNotif: Notification = {
    id: "N003",
    timestamp: new Date(),
    type: "push",
    deviceId: "device-xyz-789",
    title: "New Message!",
    content: "You have 3 unread messages."
};

sendNotification(emailNotif);
sendNotification(smsNotif);
sendNotification(pushNotif);
```

#### Assessment idea
1.  **Question:** You need to define a type for a configuration object. This object might contain a `timeout` (number) and an optional `debugMode` (boolean). Additionally, it could have a `logger` property which is a function that takes a string and returns void.
    *   A) Define this configuration type using an `interface`.
    *   B) Define this configuration type using a `type alias`.
    *   C) Explain which approach you would prefer for this specific scenario and why.

    **Answer:**
    *   **A) Using an `interface`:**
        ```typescript
        interface LoggerFunction {
            (message: string): void;
        }

        interface AppConfig {
            timeout: number;
            debugMode?: boolean;
            logger?: LoggerFunction;
        }
        ```
    *   **B) Using a `type alias`:**
        ```typescript
        type LoggerFunction = (message: string) => void;

        type AppConfig = {
            timeout: number;
            debugMode?: boolean;
            logger?: LoggerFunction;
        };
        ```
    *   **C) Preference and Explanation:** For this specific scenario, either an `interface` or a `type alias` would work equally well, as both can define object shapes and function signatures. However, many developers would lean towards an **interface** (`AppConfig`) for defining the shape of the configuration object itself, as it's a clear contract for an object. For the `logger` function signature, a `type alias` (`LoggerFunction`) is slightly more idiomatic and concise than an interface for defining a function type. If `AppConfig` were ever to be extended by another configuration or implemented by a class, an interface would offer more flexibility. If there was a need for union or intersection types within `AppConfig` itself, a type alias might become more convenient. Given the simple object shape, `interface` is a solid choice.

2.  **Question:** You have a function `processData` that accepts a parameter `input` which can be either a `string` or an array of `string`s (`string[]`). Inside the function, you need to perform different operations based on whether `input` is a single string or an array. Write the `processData` function using a type guard to correctly narrow the type of `input`. If it's a string, print its length. If it's an array, print the number of elements.

    **Answer:**
    ```typescript
    function processData(input: string | string[]): void {
        if (typeof input === "string") {
            // TypeScript knows 'input' is a string here
            console.log(`Input is a single string. Length: ${input.length}`);
        } else {
            // TypeScript knows 'input' is a string[] here
            console.log(`Input is an array of strings. Number of elements: ${input.length}`);
        }
    }

    processData("hello world"); // Output: Input is a single string. Length: 11
    processData(["apple", "banana", "cherry"]); // Output: Input is an array of strings. Number of elements: 3
    ```
    **Explanation:** The `typeof` type guard is used here. When `typeof input === "string"` evaluates to `true`, TypeScript's control flow analysis understands that `input` must be a `string` within that `if` block, allowing safe access to `input.length`. In the `else` block, because `input` is not a `string` and the only other possibility in the union is `string[]`, TypeScript correctly infers `input` as `string[]`, allowing safe access to `input.length` for arrays. This demonstrates effective type narrowing for union types.

#### AI generation note
Create a 15-minute live coding session demonstrating type aliases, interfaces, and type guards. Start with simple type aliases for primitives, then move to object shapes and union/intersection types. Introduce interfaces for object shapes, showing how they can be extended and how classes can implement them. Dedicate a significant portion to type guards: `typeof` with `string | number`, `instanceof` with `Cat | Dog` classes, and then build the `Notification` discriminated union example from the hands-on activity, live-coding the `sendNotification` function and explaining how `switch (notification.type)` acts as a powerful type guard. Encourage learners to code along. Use clear console output to show type narrowing in action. Provide captions and code highlights.

---

## Module 4: Working with Modules, Decorators, and Modern JS

This module dives into advanced organizational patterns and powerful features that enable you to build robust, scalable, and maintainable TypeScript applications. We'll explore how to structure your codebase using modern ES Modules, understand the role of namespaces, and unlock the metaprogramming capabilities of decorators. Finally, we'll see how TypeScript seamlessly integrates with and enhances the latest JavaScript features, ensuring your code is both cutting-edge and type-safe.

---

### Chapter 4.1 — Understanding ES Modules in TypeScript

#### Learning objectives
*   Explain the purpose and benefits of ES Modules for structuring TypeScript applications.
*   Differentiate between named and default exports, and correctly implement their import syntax.
*   Configure TypeScript's module resolution strategies in `tsconfig.json`.
*   Demonstrate how to export and import various TypeScript constructs like types, interfaces, classes, and functions.
*   Identify common mistakes when working with modules and apply best practices for module organization.

#### Detailed lesson content
As your TypeScript applications grow in complexity, managing code organization and preventing global namespace pollution becomes critically important. This is where ES Modules (ECMAScript Modules) come into play. Modules provide a mechanism for encapsulating code, allowing you to define private variables and functions within a file and explicitly expose only what's necessary for other parts of your application to use. This modularity enhances maintainability, reusability, and testability, as each module can focus on a specific piece of functionality. Before modules, developers often relied on IIFEs (Immediately Invoked Function Expressions) or global objects, which were prone to naming conflicts and difficult to manage in large codebases. ES Modules solve these problems by introducing a standardized, declarative syntax for importing and exporting functionality between files.

In TypeScript, you use the `export` keyword to make declarations available outside of a module. You can export almost anything: variables, functions, classes, interfaces, types, and even enums. There are two primary types of exports: named exports and default exports. Named exports allow you to export multiple values from a single module, and consumers must import them by their exact names. For example, if you have a `utils.ts` file, you might `export function add(a: number, b: number): number { return a + b; }` and `export const PI = 3.14159;`. To use these in another file, you would `import { add, PI } from './utils';`. You can also alias named imports to avoid naming conflicts or improve readability, like `import { add as sum, PI } from './utils';`. This explicit naming ensures clarity and makes it easy to see exactly what dependencies a module has.

Default exports, on the other hand, allow a module to export a single primary value. This is often used when a module's main purpose is to provide one specific class, function, or object. For instance, a `Logger.ts` file might `export default class Logger { /* ... */ }`. When importing a default export, you can give it any name you choose, as there's only one default export per module. So, you could `import MyLogger from './Logger';` or `import ConsoleLogger from './Logger';`. It's a common mistake to try and `import { MyLogger } from './Logger';` for a default export, which will result in a compilation error. Remember, curly braces `{}` are for named imports, while a direct name after `import` is for a default import. You can also combine named and default exports in a single file, though it's generally good practice to keep them separate for clarity, especially for the main export of a module.

TypeScript's `tsconfig.json` file plays a crucial role in how modules are handled. The `module` compiler option determines the module code generation strategy, such as `ESNext`, `CommonJS`, `UMD`, or `AMD`. For modern web development targeting browsers or Node.js, `ESNext` (or `ES2015`/`ES6` and above) is generally preferred as it emits native ES Module syntax. The `moduleResolution` option is equally important, as it tells TypeScript how to resolve module paths. Common values include `node` (which mimics Node.js's module resolution algorithm, looking in `node_modules` and relative paths) and `bundler` (a newer strategy optimized for modern bundlers like Webpack, Rollup, or Vite, which can be more permissive). Understanding these options is key to avoiding "module not found" errors, especially when dealing with third-party libraries or complex project structures. For example, if you're using a library that exports CommonJS modules, setting `moduleResolution: "node"` will help TypeScript correctly locate its type definitions.

Let's consider a practical scenario. Imagine building a user management system. You might have a `user.ts` file defining the `User` interface and a `UserService` class.
```typescript
// src/models/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// src/services/userService.ts
import { User } from '../models/user'; // Import the User interface

export class UserService {
  private users: User[] = [];

  constructor() {
    // Initialize with some dummy data
    this.users.push({ id: '1', name: 'Alice', email: 'alice@example.com' });
    this.users.push({ id: '2', name: 'Bob', email: 'bob@example.com' });
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getAllUsers(): User[] {
    return [...this.users]; // Return a copy to prevent external modification
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

// src/app.ts
import { UserService } from './services/userService';
import { User } from './models/user'; // Also import User if needed in app.ts

const userService = new UserService();

const newUser: User = { id: '3', name: 'Charlie', email: 'charlie@example.com' };
userService.addUser(newUser);

console.log('All users:', userService.getAllUsers());
const bob = userService.getUserById('2');
if (bob) {
  console.log('Found Bob:', bob);
}
```
In this example, `user.ts` exports an interface, and `userService.ts` exports a class, both using named exports. `app.ts` then imports and uses them. This structure clearly separates concerns: `user.ts` defines data shapes, `userService.ts` handles business logic for users, and `app.ts` orchestrates the application. A common mistake is using relative paths incorrectly (e.g., `../` vs `./`). Always ensure your paths accurately reflect the file system structure. Another pitfall is circular dependencies, where Module A imports Module B, and Module B imports Module A. While TypeScript and JavaScript can sometimes handle simple cases, it often leads to `undefined` values or unexpected behavior at runtime. It's best to refactor your code to break such cycles.

#### Key concepts
*   **ES Modules:** A standardized system for organizing JavaScript/TypeScript code into reusable, encapsulated units using `import` and `export` statements.
*   **Named Export:** Allows a module to export multiple values (functions, variables, classes, interfaces, types) by their specific names. Imported using curly braces: `import { name1, name2 } from './module';`.
*   **Default Export:** Allows a module to export a single primary value. Imported without curly braces, and can be aliased: `import MyValue from './module';`.
*   **Module Resolution:** The process by which TypeScript (and JavaScript runtimes/bundlers) determines the exact file location for an `import` statement, configured via `moduleResolution` in `tsconfig.json`.
*   **`tsconfig.json`:** The TypeScript configuration file, where `module` and `moduleResolution` compiler options are set to control how modules are compiled and resolved.

#### Hands-on activity
Create a small TypeScript project with the following structure:
```
my-app/
├── src/
│   ├── data/
│   │   └── products.ts
│   ├── services/
│   │   └── productService.ts
│   ├── utils/
│   │   └── mathUtils.ts
│   └── app.ts
├── tsconfig.json
└── package.json
```
1.  **`src/data/products.ts`**: Define and export an interface `Product` and an array of `Product` objects.
    ```typescript
    // src/data/products.ts
    export interface Product {
      id: string;
      name: string;
      price: number;
      category: string;
    }

    export const allProducts: Product[] = [
      { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics' },
      { id: 'p2', name: 'Mouse', price: 25, category: 'Electronics' },
      { id: 'p3', name: 'Keyboard', price: 75, category: 'Electronics' },
      { id: 'p4', name: 'Desk Chair', price: 300, category: 'Furniture' }
    ];
    ```
2.  **`src/services/productService.ts`**: Import `Product` and `allProducts`. Create a class `ProductService` that provides methods to `getAllProducts()`, `getProductById(id: string)`, and `getProductsByCategory(category: string)`. Export `ProductService` as a **default export**.
    ```typescript
    // src/services/productService.ts
    import { Product, allProducts } from '../data/products';

    class ProductService { // No export keyword here for the class definition
      private products: Product[] = allProducts;

      getAllProducts(): Product[] {
        return [...this.products];
      }

      getProductById(id: string): Product | undefined {
        return this.products.find(p => p.id === id);
      }

      getProductsByCategory(category: string): Product[] {
        return this.products.filter(p => p.category === category);
      }
    }

    export default ProductService; // Default export for the class
    ```
3.  **`src/utils/mathUtils.ts`**: Define and export a function `calculateTotalPrice(products: Product[])` that sums up the prices of products. Use a named export.
    ```typescript
    // src/utils/mathUtils.ts
    import { Product } from '../data/products'; // Import Product interface

    export function calculateTotalPrice(products: Product[]): number {
      return products.reduce((total, product) => total + product.price, 0);
    }

    export function getAveragePrice(products: Product[]): number {
      if (products.length === 0) return 0;
      return calculateTotalPrice(products) / products.length;
    }
    ```
4.  **`src/app.ts`**: Import `ProductService` (default import), `Product` (named import), and `calculateTotalPrice` (named import). Instantiate `ProductService`, fetch all products, filter by category, calculate the total price, and log the results to the console.
    ```typescript
    // src/app.ts
    import ProductService from './services/productService'; // Default import
    import { Product } from './data/products'; // Named import
    import { calculateTotalPrice, getAveragePrice } from './utils/mathUtils'; // Named import

    const productService = new ProductService();

    console.log('--- All Products ---');
    const allProducts = productService.getAllProducts();
    allProducts.forEach(p => console.log(`${p.name} (${p.category}): $${p.price}`));
    console.log(`Total price of all products: $${calculateTotalPrice(allProducts)}`);
    console.log(`Average price of all products: $${getAveragePrice(allProducts)}`);

    console.log('\n--- Electronics Products ---');
    const electronicsProducts = productService.getProductsByCategory('Electronics');
    electronicsProducts.forEach(p => console.log(`${p.name}: $${p.price}`));
    console.log(`Total price of electronics: $${calculateTotalPrice(electronicsProducts)}`);

    console.log('\n--- Specific Product ---');
    const laptop = productService.getProductById('p1');
    if (laptop) {
      console.log(`Found laptop: ${laptop.name} - $${laptop.price}`);
    } else {
      console.log('Laptop not found.');
    }
    ```
5.  **`tsconfig.json`**: Ensure `module` is set to `ESNext` and `moduleResolution` to `node` (or `bundler`).
    ```json
    {
      "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./src"
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```
6.  Compile and run using `tsc && node dist/app.js`.

#### Assessment idea
1.  **Question:** You have a file `dataProcessor.ts` that exports a function `processData` as a named export and a class `DataValidator` as a default export. Which of the following `import` statements in `main.ts` is syntactically correct to use both?
    a) `import { processData, DataValidator } from './dataProcessor';`
    b) `import DataValidator, { processData } from './dataProcessor';`
    c) `import { processData } from './dataProcessor'; import DataValidator from './dataProcessor';`
    d) `import * as Data from './dataProcessor';`

    **Correct Answer:** b) `import DataValidator, { processData } from './dataProcessor';`
    **Explanation:** When a module has both a default export and named exports, the default export is listed first (without curly braces), followed by a comma, and then the named exports within curly braces. Option (a) incorrectly tries to import `DataValidator` as a named export. Option (c) uses two separate import statements, which is valid but less concise than combining them. Option (d) imports everything as a namespace object, which would require accessing them as `Data.default` and `Data.processData`, which is not the most direct way to import both.

2.  **Question:** Consider the following `tsconfig.json` snippet:
    ```json
    {
      "compilerOptions": {
        "module": "CommonJS",
        "moduleResolution": "node"
      }
    }
    ```
    If you have an `index.ts` file with `import { utilityFunction } from './utils';` and `utils.ts` exports `export function utilityFunction() {}`, what will be the output JavaScript for the `import` statement after compilation?
    a) `import { utilityFunction } from './utils';`
    b) `const { utilityFunction } = require('./utils');`
    c) `const utilityFunction = require('./utils').utilityFunction;`
    d) `import * as utils_1 from './utils'; const utilityFunction = utils_1.utilityFunction;`

    **Correct Answer:** c) `const utilityFunction = require('./utils').utilityFunction;`
    **Explanation:** When `module` is set to `CommonJS`, TypeScript transpiles ES Module `import` statements into `require()` calls, which is the CommonJS module syntax. For named imports, it typically maps to destructuring the object returned by `require()`. Option (b) is close but misses the direct assignment. Option (d) is what TypeScript might do for `import * as utils_1 from './utils';`. Option (a) would only be correct if `module` was set to an ES Module target like `ESNext`.

#### AI generation note
Create a 10-minute animated video explaining ES Modules. Start with a visual analogy of separate workshops (modules) with specific tools (exports) that can be shared with other workshops (imports). Demonstrate named exports with multiple tools being passed, and default exports with a single main tool. Show code examples side-by-side with visual representations of files and their exported/imported contents. Include a segment on `tsconfig.json` options (`module`, `moduleResolution`) and how they affect the compiled output. Highlight common errors like incorrect import syntax for default vs. named exports using red X marks. The interactive element should be a drag-and-drop exercise where learners match `export` types to their correct `import` syntax. Accessibility: captions, alt text for all diagrams.

---

### Chapter 4.2 — Exploring Namespaces (Internal Modules) and Global Augmentation

#### Learning objectives
*   Understand the historical context and purpose of TypeScript's `namespace` keyword.
*   Implement and use namespaces for organizing code, including nested namespaces and aliasing.
*   Differentiate between ES Modules and TypeScript namespaces, and identify scenarios where each is appropriate.
*   Explain the concept of global augmentation and its use cases for extending existing types.
*   Apply global augmentation responsibly to add properties to global objects or third-party modules.

#### Detailed lesson content
Before the widespread adoption of ES Modules (which we discussed in the previous chapter), JavaScript and TypeScript faced challenges with code organization, particularly in larger applications. The primary issue was the global namespace, where all variables and functions were accessible, leading to potential naming collisions and making it difficult to manage dependencies. To address this, TypeScript introduced the `namespace` keyword, often referred to as "internal modules." A `namespace` provides a way to logically group related code, such as interfaces, classes, functions, and variables, under a single named container, effectively creating a local scope within the global scope. This helps prevent naming conflicts by enclosing declarations within a unique identifier.

You can define a namespace using the `namespace` keyword followed by its name, like `namespace MyUtility { /* ... */ }`. Any declarations inside this namespace are accessible using the dot notation, e.g., `MyUtility.someFunction()`. Namespaces can also be nested, allowing for further hierarchical organization: `namespace App.Data { /* ... */ }`. To make declarations within a namespace accessible from outside, you must explicitly use the `export` keyword within the namespace. For example, `namespace Validation { export function isValidEmail(email: string): boolean { /* ... */ } }`. Without `export`, the declarations remain private to the namespace. When consuming a namespace, you can use the `/// <reference path="..." />` directive (for older compilation targets) or simply include the files in your `tsconfig.json` and rely on the compiler to merge them if they share the same namespace name across multiple files. For modern TypeScript projects using ES Modules, namespaces are generally considered a legacy feature, primarily useful for organizing code that isn't intended to be a separate module or for integrating with older JavaScript libraries that expose global objects.

Consider this example of a namespace:
```typescript
// src/validators.ts
namespace App.Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// src/app.ts
// No explicit import needed if both files are compiled together and share the same namespace.
// TypeScript will merge declarations from the same namespace across different files.

let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: App.Validation.StringValidator; } = {};
validators["ZIP code"] = new App.Validation.ZipCodeValidator();
validators["Letters only"] = new App.Validation.LettersOnlyValidator();

for (let s of strings) {
  for (let name in validators) {
    let validator = validators[name];
    let isMatch = validator.isAcceptable(s);
    console.log(`'${s}' - ${name} ${isMatch ? "matches" : "does not match"}`);
  }
}

// You can also alias a namespace for shorter access
import Validation = App.Validation;
let zipValidator = new Validation.ZipCodeValidator();
console.log(`'12345' is a valid zip code: ${zipValidator.isAcceptable('12345')}`);
```
In this scenario, `App.Validation` groups related validator logic. Notice how `app.ts` directly accesses `App.Validation.ZipCodeValidator` without an `import` statement in the ES Module sense. This is because TypeScript treats declarations within the same namespace across different files as belonging to the same logical unit when compiled together. While namespaces offer organization, they don't provide the same level of module isolation and dependency management as ES Modules, which are designed for truly independent, reusable code units that can be bundled and loaded asynchronously. The main distinction is that ES Modules create a file-level scope, while namespaces create a logical grouping within the global scope (or within another namespace).

Moving beyond code organization, sometimes you need to extend existing types that are globally available or come from external libraries, without modifying their original source files. This is where **global augmentation** comes in. Global augmentation allows you to add new properties or methods to existing global interfaces (like `Window`, `Array`, `String`, `Date`) or to modules. It's a powerful feature, but it must be used with caution, as it affects the global scope and can lead to unexpected behavior or conflicts if not managed carefully. The primary mechanism for global augmentation is to use a `declare global` block or to re-open a module declaration.

For example, if you want to add a custom property to the `Window` object in a browser environment, you can do this:
```typescript
// src/global.d.ts (or any .ts file that's part of your compilation)
declare global {
  interface Window {
    myCustomGlobalProperty: string;
    logMessage(message: string): void;
  }
}

// Now you can use it in your application code without TypeScript complaining
// src/app.ts
window.myCustomGlobalProperty = "Hello Cohortia!";
window.logMessage = (msg: string) => console.log(`[GLOBAL LOG]: ${msg}`);

console.log(window.myCustomGlobalProperty);
window.logMessage("This is a global message.");
```
This augmentation tells TypeScript that `window` now has `myCustomGlobalProperty` and `logMessage`, providing type safety for these additions. You can also augment modules, for instance, to add types to a third-party library that might be missing some definitions or to extend its existing types. For example, if you're using a library `my-library` and want to add a new method to one of its interfaces:
```typescript
// src/types/my-library.d.ts
declare module 'my-library' {
  interface MyLibraryConfig {
    newOption?: boolean;
  }

  // Extend an existing class or interface from the library
  export class MyLibraryClient {
    sendCustomRequest(data: any): Promise<any>;
  }
}

// Now in your app.ts, TypeScript will recognize the new method
import { MyLibraryClient } from 'my-library';
const client = new MyLibraryClient();
client.sendCustomRequest({ type: 'status' }).then(res => console.log(res));
```
When performing global augmentation, it's a best practice to place these declarations in dedicated `.d.ts` files or within a file that is clearly designated for type extensions. This makes it easier to track and manage global changes. Always be mindful of potential conflicts with other libraries or future versions of the augmented types. Overuse of global augmentation can make your codebase harder to reason about and maintain, so reserve it for scenarios where you genuinely need to extend existing global or external types.

#### Key concepts
*   **Namespace (Internal Module):** A TypeScript feature (using the `namespace` keyword) for logically grouping related code within a named container, primarily to prevent global naming conflicts in older or non-module-based codebases.
*   **`export` within Namespace:** The keyword used inside a namespace to make its declarations (interfaces, classes, functions, variables) accessible from outside the namespace.
*   **Namespace Aliasing:** Using `import Alias = Namespace.SubNamespace;` to create a shorter, more convenient name for accessing deeply nested namespace members.
*   **Global Augmentation:** The process of extending existing global types (like `Window`, `Array`, `String`) or external module types by adding new properties or methods, typically using `declare global` or `declare module '...'`.
*   **`declare global`:** A TypeScript syntax used to augment the global scope, allowing you to add type definitions that become available everywhere in your project.

#### Hands-on activity
Let's create a project that uses both a namespace for some utility functions and demonstrates global augmentation.

1.  **`src/utils/stringUtils.ts`**: Define a namespace `App.StringUtils` with exported functions for `capitalize(s: string)` and `reverse(s: string)`.
    ```typescript
    // src/utils/stringUtils.ts
    namespace App.StringUtils {
      export function capitalize(s: string): string {
        if (!s) return '';
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
      }

      export function reverse(s: string): string {
        if (!s) return '';
        return s.split('').reverse().join('');
      }
    }
    ```
2.  **`src/types/custom-array.d.ts`**: Create a declaration file to augment the global `Array` interface, adding a new method `first<T>()` that returns the first element or `undefined`.
    ```typescript
    // src/types/custom-array.d.ts
    declare global {
      interface Array<T> {
        first(): T | undefined;
        last(): T | undefined;
      }
    }

    // You might also need a corresponding implementation if this is not just for types
    // In a real project, you'd typically add this to a utility file that's loaded globally
    // For demonstration, let's add a simple implementation here as well.
    if (!Array.prototype.first) {
      Array.prototype.first = function<T>(): T | undefined {
        return this.length > 0 ? this[0] : undefined;
      };
    }
    if (!Array.prototype.last) {
      Array.prototype.last = function<T>(): T | undefined {
        return this.length > 0 ? this[this.length - 1] : undefined;
      };
    }
    ```
3.  **`src/app.ts`**: Use the functions from `App.StringUtils` and demonstrate the augmented `Array.prototype.first()` and `Array.prototype.last()` methods.
    ```typescript
    // src/app.ts
    // No import needed for App.StringUtils if compiled together
    // The custom-array.d.ts file will be picked up by TypeScript automatically

    console.log('--- Using App.StringUtils Namespace ---');
    const greeting = 'hello cohortia';
    console.log(`Capitalized: ${App.StringUtils.capitalize(greeting)}`);
    console.log(`Reversed: ${App.StringUtils.reverse(greeting)}`);

    // Using alias for convenience
    import StringUtils = App.StringUtils;
    const word = 'typescript';
    console.log(`Capitalized (alias): ${StringUtils.capitalize(word)}`);

    console.log('\n--- Using Augmented Array Methods ---');
    const numbers = [10, 20, 30, 40, 50];
    console.log(`First number: ${numbers.first()}`);
    console.log(`Last number: ${numbers.last()}`);

    const emptyArray: number[] = [];
    console.log(`First element of empty array: ${emptyArray.first()}`);
    ```
4.  **`tsconfig.json`**: Ensure all `src` files are included.
    ```json
    {
      "compilerOptions": {
        "target": "ES2020",
        "module": "CommonJS", // Or ESNext, but CommonJS might be more common for older namespace usage
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./src"
      },
      "include": ["src/**/*.ts"], // Ensure both .ts and .d.ts files in src are included
      "exclude": ["node_modules"]
    }
    ```
5.  Compile and run using `tsc && node dist/app.js`.

#### Assessment idea
1.  **Question:** You are working on a legacy TypeScript project that uses namespaces for organization. You have `namespace Data.Models { export interface User { id: number; name: string; } }` in `models.ts` and `namespace Data.Services { export class UserService { /* ... */ } }` in `services.ts`. In your `app.ts`, how would you correctly declare an alias for `Data.Models` to refer to `User` as `MyUser`?
    a) `import { User as MyUser } from Data.Models;`
    b) `import MyUser = Data.Models.User;`
    c) `namespace MyUser = Data.Models.User;`
    d) `import Models = Data.Models; let user: Models.User;`

    **Correct Answer:** d) `import Models = Data.Models; let user: Models.User;`
    **Explanation:** For namespace aliasing, you use the `import Alias = OriginalNamespace;` syntax. This creates a local alias for the entire namespace. Then you can access its members using the alias, like `Models.User`. Option (b) attempts to alias a specific type, which is not how namespace aliasing works. Option (a) is ES Module import syntax and wouldn't work for namespaces. Option (c) is incorrect syntax.

2.  **Question:** You are integrating a third-party library `chartjs` which has a type `ChartOptions`. You want to add a new optional property `customLegendPosition: 'top' | 'bottom';` to this interface for your specific application needs. Which of the following is the correct way to augment the `chartjs` module's `ChartOptions` interface?
    a)
    ```typescript
    declare module 'chartjs' {
      interface ChartOptions {
        customLegendPosition?: 'top' | 'bottom';
      }
    }
    ```
    b)
    ```typescript
    interface ChartOptions {
      customLegendPosition?: 'top' | 'bottom';
    }
    ```
    c)
    ```typescript
    declare global {
      interface ChartOptions {
        customLegendPosition?: 'top' | 'bottom';
      }
    }
    ```
    d)
    ```typescript
    import { ChartOptions } from 'chartjs';
    interface ChartOptions {
      customLegendPosition?: 'top' | 'bottom';
    }
    ```

    **Correct Answer:** a)
    ```typescript
    declare module 'chartjs' {
      interface ChartOptions {
        customLegendPosition?: 'top' | 'bottom';
      }
    }
    ```
    **Explanation:** To augment an interface that belongs to an external module, you must re-open the module declaration using `declare module 'module-name' { ... }`. Inside this block, you can then declare the interface with the same name, and TypeScript will merge the declarations. Option (b) would declare a new global `ChartOptions` interface, not augment the one from `chartjs`. Option (c) would augment a global `ChartOptions` if one existed, but not the one specifically from the `chartjs` module. Option (d) imports the interface but then declares a new one, which doesn't augment the original.

#### AI generation note
Produce a 9-minute animated video that visually contrasts TypeScript namespaces with ES Modules. Start with a historical perspective, showing how namespaces solved global pollution before ES Modules. Use a "nested boxes" analogy for namespaces, demonstrating `export` within them. Then, transition to global augmentation, showing how to "patch" or "extend" existing global objects (like `window`) or external module types. Use side-by-side code examples for namespace definition/usage and `declare global` blocks. Emphasize the caution needed with global augmentation with a "warning" icon. The interactive element should be a mini-quiz asking users to identify the correct scenario for using a namespace versus an ES Module. Accessibility: captions, clear voiceover, high-contrast visuals.

---

### Chapter 4.3 — Mastering Decorators in TypeScript

#### Learning objectives
*   Explain what decorators are and their role in metaprogramming in TypeScript.
*   Enable decorator support in `tsconfig.json` and understand its implications.
*   Implement and apply class, method, property, and parameter decorators.
*   Create decorator factories to customize decorator behavior with arguments.
*   Identify practical use cases for decorators in real-world applications, such as logging, validation, or dependency injection.

#### Detailed lesson content
Decorators are a special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters. They are functions that get invoked at declaration time, with information about the declared construct. Their primary purpose is to add metadata or modify the behavior of the declaration they are attached to, without directly changing its code. This is a form of metaprogramming, where code operates on other code. While decorators are an experimental feature in TypeScript (and currently a Stage 3 proposal for ECMAScript), they are widely used in frameworks like Angular, NestJS, and TypeORM to enable powerful patterns such as dependency injection, aspect-oriented programming, and declarative configuration.

To use decorators in TypeScript, you must enable the `experimentalDecorators` compiler option in your `tsconfig.json` file. Additionally, if you plan to use decorators that rely on type metadata (e.g., for reflection purposes in frameworks), you'll also need to enable `emitDecoratorMetadata`.
```json
{
  "compilerOptions": {
    "target": "ES2016",
    "module": "CommonJS",
    "experimentalDecorators": true, // Essential for using decorators
    "emitDecoratorMetadata": true, // Needed for reflection-based decorators
    // ... other options
  }
}
```
Forgetting these flags is a common mistake that leads to compilation errors. A decorator is essentially a function. The signature of this function varies depending on what it's decorating. Let's explore the different types:

**Class Decorators:** Applied to class constructors. They receive the constructor function as their only argument. A class decorator can observe, modify, or replace a class definition.
```typescript
function LogClass(constructor: Function) {
  console.log(`Class ${constructor.name} was declared.`);
  // You could also return a new constructor here to replace the class
}

@LogClass
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Alice"); // Output: Class User was declared.
```

**Method Decorators:** Applied to methods of a class. They receive three arguments: the target object (either the constructor function for a static member or the prototype for an instance member), the name of the method, and the property descriptor of the method. They can be used to modify, replace, or wrap a method's implementation.
```typescript
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // Store the original method

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey} with args: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args); // Call the original method
    console.log(`Method ${propertyKey} returned: ${result}`);
    return result;
  };
  return descriptor; // Return the modified descriptor
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 3);
// Output:
// Calling method: add with args: [5,3]
// Method add returned: 8
```

**Property Decorators:** Applied to properties of a class. They receive two arguments: the target object and the name of the property. Property decorators are primarily used to add metadata to a property, as they don't have access to the property's descriptor (and thus cannot directly modify its value or getter/setter behavior at declaration time).
```typescript
function DefaultValue(value: any) {
  return function (target: any, propertyKey: string) {
    // We can't directly set the value here in a way that persists for instances
    // Instead, we might add metadata or use defineProperty for instance creation
    // For simplicity, let's just log for now.
    console.log(`Property ${propertyKey} will have default value: ${value}`);
  };
}

class Product {
  @DefaultValue('N/A')
  name: string;

  constructor(name?: string) {
    this.name = name || 'Default Product'; // Actual initialization still needed
  }
}

const p = new Product(); // Output: Property name will have default value: N/A
console.log(p.name); // Output: Default Product (from constructor, not decorator)
```
Note that property decorators are more about adding metadata that other decorators or frameworks can read later, rather than directly controlling initial values.

**Parameter Decorators:** Applied to parameters of methods or constructors. They receive three arguments: the target object, the name of the method, and the index of the parameter in the method's argument list. Parameter decorators are typically used to add metadata about a parameter, which can be useful for dependency injection or validation frameworks to know what types of arguments to provide or validate.
```typescript
function ParameterInfo(target: any, propertyKey: string | symbol, parameterIndex: number) {
  console.log(`Parameter at index ${parameterIndex} of method ${String(propertyKey)}`);
}

class Service {
  doSomething(@ParameterInfo id: number, @ParameterInfo name: string) {
    console.log(`Executing doSomething with id: ${id}, name: ${name}`);
  }
}

const svc = new Service();
svc.doSomething(1, "Test");
// Output:
// Parameter at index 0 of method doSomething
// Parameter at index 1 of method doSomething
// Executing doSomething with id: 1, name: Test
```

**Decorator Factories:** Often, you'll want to pass arguments to your decorators to configure their behavior. This is achieved using a "decorator factory," which is a function that returns the actual decorator function.
```typescript
function Log(message: string) { // This is the factory function
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) { // This is the actual method decorator
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${message} - Calling method: ${propertyKey} with args: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

class DataProcessor {
  @Log("DEBUG") // Now we can pass arguments to our decorator
  process(data: string): string {
    return `Processed: ${data.toUpperCase()}`;
  }
}

const dp = new DataProcessor();
dp.process("hello");
// Output: DEBUG - Calling method: process with args: ["hello"]
```
Here, `Log("DEBUG")` is called first, which returns the actual method decorator. This returned decorator is then applied to the `process` method.

Common mistakes include forgetting to enable `experimentalDecorators` and `emitDecoratorMetadata` in `tsconfig.json`, or misunderstanding the arguments passed to different types of decorators. The order of execution for multiple decorators is also important: decorators applied to a single declaration are executed from bottom to top, while decorators on different declarations (e.g., parameter, then method, then class) are executed from the inside out. Decorators are a powerful tool for adding cross-cutting concerns (like logging, authentication, validation) in a declarative way, keeping your core business logic clean. However, their experimental nature means their specification might change, and they can add a layer of indirection that might make debugging slightly more complex if not used judiciously.

#### Key concepts
*   **Decorator:** A special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters to add metadata or modify behavior.
*   **Metaprogramming:** A programming technique where computer programs have the ability to treat other programs as their data, or to modify themselves. Decorators are a form of this.
*   **`experimentalDecorators`:** A TypeScript compiler option that must be enabled in `tsconfig.json` to use decorators.
*   **`emitDecoratorMetadata`:** A TypeScript compiler option that emits design-time type metadata for decorated declarations, used by reflection-based frameworks.
*   **Decorator Factory:** A function that returns a decorator function, allowing the decorator to accept arguments for configuration.
*   **Class Decorator:** A function that receives the class constructor and can modify or replace the class definition.
*   **Method Decorator:** A function that receives the target, method name, and property descriptor, allowing modification of method behavior.
*   **Property Decorator:** A function that receives the target and property name, primarily used for adding metadata to a property.
*   **Parameter Decorator:** A function that receives the target, method name, and parameter index, used for adding metadata to a parameter.

#### Hands-on activity
Let's build a simple logging and validation system using decorators.

1.  **`src/decorators.ts`**: Create two decorator factories:
    *   `LogExecution(message: string)`: A method decorator that logs a custom message before and after method execution, along with arguments and return value.
    *   `Validate(validationFn: (value: any) => boolean, errorMsg: string)`: A parameter decorator that performs validation on a specific parameter. If validation fails, it should throw an error. (Note: Parameter decorators primarily add metadata; for runtime validation, you'd typically have a method decorator or aspect that reads this metadata. For this exercise, we'll simplify by having the parameter decorator directly throw, though a real-world scenario would be more sophisticated).

    ```typescript
    // src/decorators.ts

    // Method Decorator Factory: Logs method execution
    export function LogExecution(message: string = "Executing method") {
      return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
          console.log(`[${message}] Entering ${propertyKey} with args: ${JSON.stringify(args)}`);
          try {
            const result = originalMethod.apply(this, args);
            console.log(`[${message}] Exiting ${propertyKey} with result: ${JSON.stringify(result)}`);
            return result;
          } catch (error: any) {
            console.error(`[${message}] Error in ${propertyKey}: ${error.message}`);
            throw error;
          }
        };
        return descriptor;
      };
    }

    // Parameter Decorator Factory: Basic validation (simplified for direct throwing)
    // In a real app, this would typically add metadata that a method decorator or AOP framework reads.
    export function Validate(validationFn: (value: any) => boolean, errorMsg: string) {
      return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        // Here we're just logging that a validation is attached.
        // For actual runtime validation, you'd need a method decorator to iterate over parameters
        // and apply these validation functions.
        // For this exercise, let's make a simple direct check.
        // This is a simplification; typically parameter decorators add metadata,
        // and a method decorator uses that metadata to perform validation *before* the method runs.
        // For a simple demo, we'll just log its presence.
        console.log(`Validation '${errorMsg}' attached to parameter ${parameterIndex} of ${String(propertyKey)}`);

        // To make it actually validate, we'd need to modify the method descriptor,
        // which is the job of a method decorator. Let's adjust the exercise to reflect this.
        // For a parameter decorator to *directly* validate, it would need to modify the method itself,
        // which isn't its primary role. Let's make `Validate` a simple metadata adder,
        // and `LogExecution` will be our primary functional decorator.
        // We'll add a separate example for method-level validation using metadata.
      };
    }

    // Let's refine the Validate decorator to be used with a method decorator for actual validation
    // This requires a more advanced setup. For this exercise, we'll stick to simpler decorators.
    // Let's create a simple property decorator for a default value instead, as it's more straightforward.

    // Property Decorator Factory: Sets a default value if undefined
    export function SetDefault<T>(defaultValue: T) {
      return function (target: any, propertyKey: string) {
        let value: T = defaultValue; // Private variable to store the actual value

        // Define a getter and setter for the property
        Object.defineProperty(target, propertyKey, {
          get: () => value,
          set: (newValue: T) => {
            value = newValue === undefined ? defaultValue : newValue;
          },
          enumerable: true,
          configurable: true,
        });
      };
    }
    ```
2.  **`src/user-service.ts`**: Create a `UserService` class.
    *   Apply `LogExecution` to a method like `createUser(name: string, email: string)`.
    *   Apply `SetDefault` to a property like `status: string`.
    ```typescript
    // src/user-service.ts
    import { LogExecution, SetDefault } from './decorators';

    export class UserService {
      @SetDefault('active')
      status: string; // This property will have 'active' as default if not explicitly set

      constructor() {
        this.status = 'pending'; // This will override the decorator's default initially,
                               // but the decorator ensures a default if `undefined` is passed later.
                               // For SetDefault to work as intended for initial value,
                               // it often needs to be applied after constructor or handle it differently.
                               // Let's simplify: the decorator ensures the *getter* returns default if value is undefined.
      }

      @LogExecution("USER_SERVICE")
      createUser(name: string, email: string): { id: string; name: string; email: string; status: string } {
        if (!name || !email) {
          throw new Error('Name and email are required.');
        }
        const id = Math.random().toString(36).substr(2, 9);
        console.log(`New user created: ${name}, ${email}`);
        return { id, name, email, status: this.status };
      }

      @LogExecution("USER_SERVICE")
      updateUserStatus(userId: string, newStatus: string): string {
        console.log(`Updating status for user ${userId} to ${newStatus}`);
        // In a real app, you'd find and update the user
        return `User ${userId} status updated to ${newStatus}`;
      }
    }
    ```
3.  **`src/app.ts`**: Instantiate `UserService` and call its methods to observe decorator effects.
    ```typescript
    // src/app.ts
    import { UserService } from './user-service';

    const userService = new UserService();

    console.log('--- Creating User ---');
    try {
      const newUser = userService.createUser('Alice Smith', 'alice@example.com');
      console.log('Created:', newUser);
    } catch (error: any) {
      console.error('Error creating user:', error.message);
    }

    console.log('\n--- Attempting to create user with missing info ---');
    try {
      userService.createUser('', 'bob@example.com');
    } catch (error: any) {
      console.error('Error creating user:', error.message);
    }

    console.log('\n--- Updating User Status ---');
    userService.updateUserStatus('some-user-id', 'inactive');

    console.log('\n--- Checking Default Property Value ---');
    const anotherService = new UserService();
    anotherService.status = undefined as any; // Simulate setting to undefined
    console.log(`Another service status (after setting undefined): ${anotherService.status}`); // Should revert to 'active' due to decorator
    ```
4.  **`tsconfig.json`**: Make sure `experimentalDecorators` and `emitDecoratorMetadata` are enabled.
    ```json
    {
      "compilerOptions": {
        "target": "ES2016",
        "module": "CommonJS",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./src"
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```
5.  Compile and run using `tsc && node dist/app.js`. Observe the console output from the decorators.

#### Assessment idea
1.  **Question:** You have a class `Product` and want to log whenever its `calculatePrice` method is called. You also want to ensure that a `description` property, if not provided, defaults to "No Description". Which combination of decorators correctly achieves this?
    ```typescript
    // Decorator definitions
    function LogMethodCall(target: any, propertyKey: string, descriptor: PropertyDescriptor) { /* ... */ }
    function SetDefaultValue(value: string) { return function(target: any, propertyKey: string) { /* ... */ }; }

    class Product {
      id: string;
      name: string;
      // [A]
      description: string;

      constructor(id: string, name: string, description?: string) {
        this.id = id;
        this.name = name;
        this.description = description || "No Description"; // Initial value set here
      }

      // [B]
      calculatePrice(): number {
        // logic to calculate price
        return 100;
      }
    }
    ```
    a) `[A]` should be `@SetDefaultValue("No Description")`, `[B]` should be `@LogMethodCall`
    b) `[A]` should be `@LogMethodCall`, `[B]` should be `@SetDefaultValue("No Description")`
    c) `[A]` should be `@SetDefaultValue("No Description")`, `[B]` should be `@SetDefaultValue("No Description")`
    d) `[A]` should be `@LogMethodCall`, `[B]` should be `@LogMethodCall`

    **Correct Answer:** a) `[A]` should be `@SetDefaultValue("No Description")`, `[B]` should be `@LogMethodCall`
    **Explanation:** `LogMethodCall` is a method decorator, so it should be applied to the `calculatePrice` method (`[B]`). `SetDefaultValue` is a property decorator factory, so it should be applied to the `description` property (`[A]`). The constructor's `this.description = description || "No Description";` would still be needed for initial value setting, but the decorator would ensure the getter/setter behavior for subsequent assignments or if the initial value was `undefined`.

2.  **Question:** What is the primary reason for enabling `experimentalDecorators` in `tsconfig.json` when working with decorators in TypeScript?
    a) To allow decorators to be used with JavaScript files.
    b) To enable type checking for decorator functions.
    c) Because decorators are an experimental feature and require explicit opt-in.
    d) To automatically import decorator definitions from `node_modules`.

    **Correct Answer:** c) Because decorators are an experimental feature and require explicit opt-in.
    **Explanation:** Decorators are an experimental feature in TypeScript, meaning they are not yet part of the official ECMAScript standard. TypeScript requires you to explicitly enable them via the `experimentalDecorators` compiler option to acknowledge their non-standard status and potential for future changes. Options (a), (b), and (d) are not the primary reasons for this specific flag.

#### AI generation note
Design a 12-minute interactive coding demo focused on decorators. Start by explaining the concept with a simple analogy (e.g., "wrapping" or "enhancing" existing code). Live-code the `tsconfig.json` changes. Then, live-code examples of a class decorator, a method decorator (e.g., for logging execution time), and a property decorator (e.g., for `readonly` or `non-enumerable` metadata). Show how to create a decorator factory for customization. Visually highlight the arguments passed to each decorator type. The interactive element should be a small coding challenge where the learner modifies an existing class method using a provided decorator factory. Accessibility: live captions, clear code formatting, explanations of each line of code.

---

### Chapter 4.4 — Integrating Modern JavaScript Features with TypeScript

#### Learning objectives
*   Demonstrate the use of `async/await` with TypeScript for type-safe asynchronous programming.
*   Apply optional chaining (`?.`) for safe property access and nullish coalescing (`??`) for robust default value assignments.
*   Understand and implement private class fields (`#field`) and differentiate them from TypeScript's `private` keyword.
*   Utilize top-level `await` in ES Modules for simplified asynchronous module loading.
*   Explain how TypeScript enhances these modern JavaScript features with static type checking and improved developer experience.

#### Detailed lesson content
TypeScript's primary goal is to bring type safety and tooling benefits to JavaScript. As JavaScript evolves rapidly with new features, TypeScript consistently integrates these advancements, often providing compile-time checks and an improved developer experience even before they are fully standardized. In this chapter, we'll explore how TypeScript leverages and enhances several modern JavaScript features that have become indispensable for writing clean, robust, and concise code.

One of the most significant advancements in asynchronous programming is the introduction of `async/await`. This syntax allows you to write asynchronous code that looks and behaves like synchronous code, making it much easier to read and reason about, especially when dealing with multiple asynchronous operations. An `async` function implicitly returns a `Promise`. The `await` keyword can only be used inside an `async` function and pauses the execution of that function until the `Promise` it's waiting for settles (either resolves or rejects). TypeScript provides excellent support for `async/await`, inferring `Promise` return types and ensuring that `await` is only used on `PromiseLike` values. This means you get compile-time errors if you try to `await` a non-Promise value, or if you don't handle the potential `Promise` return type correctly.
```typescript
async function fetchData(url: string): Promise<string> {
  try {
    const response = await fetch(url); // TypeScript knows fetch returns Promise<Response>
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // TypeScript knows response.text() returns Promise<string>
    return data;
  } catch (error: any) {
    console.error("Failed to fetch data:", error.message);
    throw error; // Re-throw to propagate the error
  }
}

// Usage
fetchData('https://api.example.com/data')
  .then(data => console.log('Data received:', data.substring(0, 50) + '...'))
  .catch(err => console.error('Application error:', err.message));
```
TypeScript ensures that `fetchData`'s return type is `Promise<string>`, and it correctly types `response` as `Response` and `data` as `string`. This static analysis helps catch potential runtime errors related to asynchronous operations early in the development cycle.

Another pair of highly useful features for dealing with potentially `null` or `undefined` values are **optional chaining (`?.`)** and **nullish coalescing (`??`)**. Optional chaining allows you to safely access properties or call methods on an object that might be `null` or `undefined` without explicitly checking each level. If any part of the chain is `null` or `undefined`, the entire expression short-circuits and evaluates to `undefined`.
```typescript
interface UserProfile {
  name: string;
  address?: {
    street: string;
    city?: string;
  };
  getContactEmail?(): string;
}

const user1: UserProfile = { name: 'Alice' };
const user2: UserProfile = { name: 'Bob', address: { street: '123 Main' } };
const user3: UserProfile = { name: 'Charlie', address: { street: '456 Oak', city: 'Springfield' }, getContactEmail: () => 'charlie@example.com' };

console.log(user1.address?.city); // Output: undefined (no error)
console.log(user2.address?.city); // Output: undefined (no error)
console.log(user3.address?.city); // Output: Springfield

console.log(user1.getContactEmail?.()); // Output: undefined (no error)
console.log(user3.getContactEmail?.()); // Output: charlie@example.com
```
TypeScript understands the type implications of optional chaining, narrowing types where appropriate and correctly typing the result as potentially `undefined`.

**Nullish coalescing (`??`)** provides a way to assign a default value only when an expression evaluates to `null` or `undefined` (the "nullish" values). This is distinct from the logical OR operator (`||`), which assigns a default if the expression is any "falsy" value (e.g., `0`, `''`, `false`, `null`, `undefined`).
```typescript
const username: string | null = null;
const defaultName = 'Guest';

const display1 = username ?? defaultName; // Output: Guest (because username is null)
const display2 = username || defaultName; // Output: Guest (same here, null is falsy)

const count: number = 0;
const defaultCount = 1;

const result1 = count ?? defaultCount; // Output: 0 (because 0 is not nullish)
const result2 = count || defaultCount; // Output: 1 (because 0 is falsy)

console.log(`User display (nullish): ${display1}, (falsy): ${display2}`);
console.log(`Count result (nullish): ${result1}, (falsy): ${result2}`);
```
TypeScript correctly infers the resulting type, helping you avoid common pitfalls when dealing with `0`, `''`, or `false` as valid values that shouldn't trigger a default.

Another modern JavaScript feature that TypeScript embraces is **private class fields**, denoted by a `#` prefix (e.g., `#myField`). These are true private fields at the JavaScript runtime level, meaning they are not accessible from outside the class, even through reflection. This is a stronger form of privacy compared to TypeScript's `private` keyword, which only enforces privacy at compile time; `private` properties are still accessible at runtime (e.g., via `object['privateField']`).
```typescript
class BankAccount {
  #balance: number; // True private field
  private owner: string; // TypeScript private field

  constructor(initialBalance: number, owner: string) {
    this.#balance = initialBalance;
    this.owner = owner;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  getBalance(): number {
    return this.#balance;
  }

  getOwner(): string {
    return this.owner;
  }
}

const account = new BankAccount(100, 'Jane Doe');
account.deposit(50);
// console.log(account.#balance); // Syntax error at runtime (and compile time in TS)
// console.log(account.owner); // Compile-time error in TS, but accessible at runtime in JS
// console.log(account['owner']); // Accessible at runtime in JS
console.log(account.getBalance()); // Access via public method
```
TypeScript fully supports `#` private fields, providing compile-time checks and ensuring that you adhere to their strict privacy rules. When compiling to older JavaScript targets, TypeScript will transpile these private fields into a form that mimics their behavior, typically using `WeakMap`s or other techniques.

Finally, **top-level `await`** simplifies asynchronous module loading. Historically, `await` could only be used inside `async` functions. With top-level `await`, you can use `await` directly at the top level of an ES Module, allowing you to pause module execution until an asynchronous operation completes before the module's exports are made available. This is incredibly useful for tasks like fetching configuration, loading dynamic dependencies, or initializing databases before the rest of your application starts.
```typescript
// config.ts (an ES Module)
async function loadConfig() {
  const response = await fetch('/api/config');
  return response.json();
}

export const config = await loadConfig(); // Top-level await!

// app.ts (another ES Module)
import { config } from './config'; // This import will wait for config to be resolved

console.log('Application config loaded:', config);
// Use config here
```
This feature is supported in TypeScript when targeting `ES2022` or `ESNext` for the `target` and `module` options in `tsconfig.json`. It streamlines the setup of modules that depend on asynchronous initialization, making your module structure cleaner and more declarative.

By embracing these modern JavaScript features, TypeScript not only provides type safety but also acts as a powerful transpiler, allowing you to write cutting-edge code today that runs reliably in various environments.

#### Key concepts
*   **`async/await`:** A modern JavaScript syntax for writing asynchronous code that looks and behaves synchronously, improving readability and error handling. `async` functions return `Promise`s, and `await` pauses execution until a `Promise` settles.
*   **Optional Chaining (`?.`):** A syntax for safely accessing properties or calling methods on objects that might be `null` or `undefined` without causing a runtime error.
*   **Nullish Coalescing (`??`):** An operator that provides a default value only when the left-hand side expression evaluates to `null` or `undefined` (not other falsy values like `0`, `''`, `false`).
*   **Private Class Fields (`#field`):** A JavaScript language feature for truly private class members, enforced at runtime, unlike TypeScript's `private` keyword which is compile-time only.
*   **Top-Level `await`:** The ability to use the `await` keyword directly at the top level of an ES Module, allowing the module to pause execution until an asynchronous operation completes before its exports are available.

#### Hands-on activity
Let's create a small application demonstrating `async/await`, optional chaining, nullish coalescing, and private class fields.

1.  **`src/data-fetcher.ts`**: Create a module that simulates fetching user data asynchronously.
    ```typescript
    // src/data-fetcher.ts
    interface UserData {
      id: string;
      name: string;
      email?: string;
      preferences?: {
        theme?: 'dark' | 'light';
        notifications?: boolean;
      };
    }

    const mockUsers: UserData[] = [
      { id: 'u1', name: 'Alice', email: 'alice@example.com', preferences: { theme: 'dark', notifications: true } },
      { id: 'u2', name: 'Bob', preferences: { theme: 'light' } }, // No email, notifications
      { id: 'u3', name: 'Charlie' } // No email, no preferences
    ];

    export async function fetchUserById(id: string): Promise<UserData | undefined> {
      return new Promise(resolve => {
        setTimeout(() => {
          const user = mockUsers.find(u => u.id === id);
          resolve(user);
        }, 500); // Simulate network delay
      });
    }
    ```
2.  **`src/user-manager.ts`**: Create a class `UserManager` that uses private class fields and methods, and demonstrates optional chaining/nullish coalescing.
    ```typescript
    // src/user-manager.ts
    import { fetchUserById } from './data-fetcher';

    interface UserDisplayInfo {
      id: string;
      displayName: string;
      contactEmail: string;
      theme: 'dark' | 'light';
    }

    class UserManager {
      #activeUsers: Map<string, UserDisplayInfo> = new Map(); // Private class field
      #lastFetchTime: Date | null = null;

      async loadAndDisplayUser(userId: string): Promise<void> {
        console.log(`\n--- Loading user ${userId} ---`);
        const user = await fetchUserById(userId);

        if (user) {
          const displayName = user.name ?? 'Anonymous User'; // Nullish coalescing for name (though name is required by interface)
          const contactEmail = user.email ?? 'N/A'; // Nullish coalescing for email
          const theme = user.preferences?.theme ?? 'light'; // Optional chaining and nullish coalescing

          const userInfo: UserDisplayInfo = {
            id: user.id,
            displayName,
            contactEmail,
            theme
          };
          this.#activeUsers.set(user.id, userInfo);
          this.#lastFetchTime = new Date();
          console.log(`User ${user.id} loaded:`, userInfo);
        } else {
          console.log(`User ${userId} not found.`);
        }
      }

      getLoadedUserCount(): number {
        return this.#activeUsers.size;
      }

      #logPrivateActivity(): void { // Private method (JavaScript private field syntax)
        console.log(`[Private Activity] Data fetched at ${this.#lastFetchTime?.toISOString() ?? 'never'}`);
      }

      displayAllLoadedUsers(): void {
        console.log('\n--- Currently Loaded Users ---');
        this.#activeUsers.forEach(user => console.log(user));
        this.#logPrivateActivity(); // Call private method
      }
    }

    export const userManager = new UserManager();
    ```
3.  **`src/app.ts`**: Use top-level `await` to immediately load some users and display them.
    ```typescript
    // src/app.ts
    import { userManager } from './user-manager'; // This import will wait for userManager to be ready if it had top-level await

    console.log('Application starting...');

    // Using top-level await to perform initial setup
    await userManager.loadAndDisplayUser('u1');
    await userManager.loadAndDisplayUser('u2');
    await userManager.loadAndDisplayUser('u4'); // Non-existent user

    userManager.displayAllLoadedUsers();
    console.log(`Total active users: ${userManager.getLoadedUserCount()}`);

    console.log('Application finished initial loading.');
    ```
4.  **`tsconfig.json`**: Ensure `target` and `module` are set to `ES2022` or `ESNext` to support private class fields and top-level `await`.
    ```json
    {
      "compilerOptions": {
        "target": "ES2022", // Or ESNext for latest features
        "module": "ESNext", // Important for top-level await
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "outDir": "./dist",
        "rootDir": "./src"
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules"]
    }
    ```
5.  Compile and run using `tsc && node dist/app.js`.

#### Assessment idea
1.  **Question:** You have an object `config` that might look like `{ settings: { theme: 'dark' } }` or `{}`. You want to get the `theme` property, defaulting to `'light'` if `settings` is `null`/`undefined` or if `theme` itself is `null`/`undefined`. Which expression correctly achieves this in TypeScript?
    a) `config.settings.theme || 'light'`
    b) `config.settings?.theme || 'light'`
    c) `config.settings?.theme ?? 'light'`
    d) `(config.settings && config.settings.theme) ?? 'light'`

    **Correct Answer:** c) `config.settings?.theme ?? 'light'`
    **Explanation:**
    *   `config.settings?.theme`: This uses optional chaining to safely access `theme`. If `config.settings` is `null` or `undefined`, the expression evaluates to `undefined` without an error. If `config.settings` exists but `theme` is `null` or `undefined`, it also evaluates to `undefined`.
    *   `?? 'light'`: This nullish coalescing operator then provides `'light'` as a default only if the left-hand side (`config.settings?.theme`) is strictly `null` or `undefined`. This is crucial because if `theme` could potentially be `false` or `0` (which are falsy but not nullish), `??` would preserve those values, whereas `||` would incorrectly default to `'light'`.

2.  **Question:** What is the key difference between TypeScript's `private` keyword and JavaScript's new private class fields (`#field`)?
    a) TypeScript's `private` fields are accessible via reflection at runtime, while `#field` private fields are not.
    b) `#field` private fields are only available in older JavaScript environments, while TypeScript's `private` is for modern ones.
    c) TypeScript's `private` enforces privacy at runtime, while `#field` private fields enforce it at compile time.
    d) `#field` private fields can only be used on methods, while TypeScript's `private` can be used on properties.

    **Correct Answer:** a) TypeScript's `private` fields are accessible via reflection at runtime, while `#field` private fields are not.
    **Explanation:** TypeScript's `private` keyword provides compile-time privacy; the property is still present and accessible on the compiled JavaScript object at runtime (e.g., `instance['privateProp']`). JavaScript's `#field` private class fields, however, are a language feature that enforces true privacy at the runtime level, making them inaccessible from outside the class instance, even through dynamic property access or reflection.

#### AI generation note
Create an 11-minute mixed-media lesson. Start with an animated explanation of `async/await` using a visual metaphor (e.g., ordering food and waiting for it to be prepared). Transition to live coding examples showing TypeScript's type inference for `Promise`s. Then, visually explain optional chaining and nullish coalescing with side-by-side examples demonstrating the difference between `?.` and `.` and `??` vs `||`. Use diagrams to show how `?.` short-circuits. Introduce private class fields (`#field`) with a clear visual comparison to TypeScript's `private` keyword, highlighting runtime vs. compile-time enforcement. Conclude with a brief live-coding demo of top-level `await`. The interactive element should be a reflection prompt asking learners to identify a scenario in their own code where optional chaining or nullish coalescing could improve safety. Accessibility: captions, clear code examples, visual cues for new syntax.

---

## Module 5: Advanced Generics, Utility Types, and Type Manipulation

**Module Goal:** This module aims to elevate your TypeScript skills by exploring advanced generic patterns, mastering built-in utility types for powerful type transformations, and delving into sophisticated type manipulation techniques like mapped and template literal types. You will also learn to enhance runtime type safety using type guards and assertion functions, enabling you to write more robust, flexible, and maintainable TypeScript code.

---

### Chapter 5.1 — Deep Dive into Generics: Constraints, Default Types, and Conditional Types

#### Learning objectives
*   Understand and apply generic constraints to ensure type safety and enable property access within generic functions and classes.
*   Utilize default generic types to provide sensible fallback types, simplifying usage when a specific type argument is often implied.
*   Master conditional types to create types that behave like `if-else` statements, allowing for dynamic type resolution based on specific conditions.
*   Implement advanced generic patterns to build highly flexible and reusable components that adapt to various data structures.

#### Detailed lesson content
Welcome back, Cohortia learners! In our previous modules, we touched upon the fundamentals of generics, understanding their power in creating reusable components that work with a variety of types while maintaining type safety. We saw how a simple generic function like `identity<T>(arg: T): T` allows us to pass any type `T` and get back a value of that same type, without losing type information. However, the true power of generics unfolds when we start imposing rules on what types `T` can be, providing default behaviors, or even making types conditional based on other types. This chapter will take you on a deep dive into these advanced generic concepts, starting with constraints.

Generic constraints are essential when you need to perform operations on a generic type `T` that are only available on a subset of all possible types. For instance, if you want to write a generic function that logs the `length` property of an argument, you can't just assume `T` will have a `length` property. TypeScript would correctly flag this as an error because `T` could be a number or a boolean, neither of which has a `length` property. This is where the `extends` keyword comes in. By using `T extends { length: number }`, you're telling TypeScript that `T` must be a type that has at least a `length` property of type `number`. This allows you to safely access `arg.length` within your function, as TypeScript now guarantees that any type passed to `T` will satisfy this constraint. A common constraint is `T extends object` or `T extends keyof any` (which means `T` must be a string, number, or symbol, effectively any valid property key), enabling you to work with object properties or keys safely. For example, a generic function to merge two objects might require `T` and `U` to extend `object`, ensuring that spread syntax `...` is valid.

```typescript
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // OK, because T is guaranteed to have a 'length' property
    return arg;
}

logLength("hello"); // Works, string has length
logLength([1, 2, 3]); // Works, array has length
// logLength(3); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let user = { name: "Alice", age: 30 };
let userName = getProperty(user, "name"); // userName is string
let userAge = getProperty(user, "age");   // userAge is number
// let userAddress = getProperty(user, "address"); // Error: Argument of type '"address"' is not assignable to parameter of type '"name" | "age"'.
```
In the `getProperty` example, `K extends keyof T` ensures that the `key` argument is always a valid property name of the `obj` argument, providing strong type safety when accessing object properties dynamically. A common mistake here is forgetting the `extends keyof T` constraint, which would lead to `obj[key]` being a type error because `key` could be any string.

Next, let's explore default generic types. Sometimes, when designing generic components, you might find that a particular type argument is used so frequently that it becomes the de facto default. TypeScript allows you to specify a default type for a generic parameter, much like default function parameters. This makes your generic components more convenient to use, as consumers don't have to explicitly provide the type argument if the default is what they intend. For instance, if you're building a generic `Box` class that usually holds `string` values but can hold anything, you could define it as `class Box<T = string>`. Now, `new Box()` creates a `Box<string>`, while `new Box<number>()` creates a `Box<number>`. This reduces verbosity and improves readability, especially in complex type signatures where many generic parameters are involved.

```typescript
interface ApiResponse<Data = any, Error = string> {
    data?: Data;
    error?: Error;
    status: number;
}

// Usage without specifying Data and Error types, defaults to any and string
const defaultResponse: ApiResponse = { status: 200, data: { message: "Success" } };
// defaultResponse.data is 'any'
// defaultResponse.error is 'string | undefined'

// Usage specifying Data type, Error defaults to string
const userResponse: ApiResponse<{ id: number; name: string }> = {
    status: 200,
    data: { id: 1, name: "Bob" }
};
// userResponse.data is '{ id: number; name: string } | undefined'

// Usage specifying both Data and Error types
const detailedErrorResponse: ApiResponse<null, { code: number; message: string }> = {
    status: 500,
    error: { code: 1001, message: "Internal Server Error" }
};
// detailedErrorResponse.error is '{ code: number; message: string } | undefined'
```
Default generic types are particularly useful in libraries or frameworks where certain generic parameters have a common primary use case. They make the API easier to consume for typical scenarios while retaining the flexibility for advanced ones.

Finally, we arrive at conditional types, a truly powerful feature that introduces `if-else` logic into the TypeScript type system. A conditional type takes the form `T extends U ? X : Y`. This reads as: "If type `T` is assignable to type `U`, then the resulting type is `X`; otherwise, it's `Y`." This mechanism allows you to define types that vary based on the relationship between other types. For example, you could define a type `NonFunction<T>` that resolves to `T` if `T` is not a function, and `never` (a type that represents the empty set of values) if it is. This is incredibly useful for filtering types within unions or creating highly adaptive type definitions.

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
type C = IsString<"hello">; // "Yes" (literal string is assignable to string)

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string): string {
    return `Hello, ${name}`;
}

function add(a: number, b: number): number {
    return a + b;
}

type GreetResult = GetReturnType<typeof greet>; // string
type AddResult = GetReturnType<typeof add>;     // number
type NotAFunctionResult = GetReturnType<number>; // never
```
The `infer` keyword, as seen in `GetReturnType`, is often used in conjunction with conditional types. It allows you to "infer" a type within the `extends` clause and then use that inferred type in the `true` branch of the conditional type. In `GetReturnType`, `infer R` tells TypeScript to capture the return type of the function `T` into a new type variable `R`, which is then used as the result of the conditional type. This is how many of TypeScript's built-in utility types (which we'll cover in the next chapters) are implemented under the hood. Conditional types open up a vast array of possibilities for creating sophisticated and context-aware type definitions, making your type system as expressive as your runtime logic. A common mistake with conditional types is misinterpreting the `extends` keyword; it doesn't mean "is exactly" but rather "is assignable to." This distinction is crucial for understanding how types are resolved.

By combining generic constraints, default types, and conditional types, you gain an unprecedented level of control over your type system. You can build components that are not only reusable but also intelligently adapt their behavior and type signatures based on the specific types they are given, leading to more robust, flexible, and maintainable codebases.

#### Key concepts
*   **Generic Constraints:** Using `extends` with generic type parameters to restrict the types that can be used, ensuring they have certain properties or methods (e.g., `T extends { length: number }`).
*   **Default Generic Types:** Assigning a default type to a generic parameter (e.g., `T = string`) that is used if no explicit type argument is provided, simplifying common use cases.
*   **Conditional Types:** Types that resolve to one of two different types based on whether a type `T` is assignable to another type `U`, using the syntax `T extends U ? X : Y`.
*   **`infer` Keyword:** Used within the `extends` clause of a conditional type to declare a new type variable and infer its type from the type being checked, often used to extract parts of a type (e.g., function return types).

#### Hands-on activity
**Activity: Building a Flexible Data Store with Advanced Generics**

You're tasked with building a generic `DataStore` class that can store collections of items. This store needs to support a `findById` method. To ensure `findById` works, the items stored in the `DataStore` must have an `id` property. Additionally, the `DataStore` should allow for a default item type if none is specified, and a method that conditionally returns a specific property type.

**Instructions:**
1.  Define an interface `Identifiable` that requires an `id` property of type `string | number`.
2.  Create a generic class `DataStore<T extends Identifiable = { id: string; name: string }>` that:
    *   Takes a generic type `T` constrained by `Identifiable`.
    *   Provides a default type for `T` (e.g., `{ id: string; name: string }`).
    *   Has a private array `items: T[]`.
    *   Has an `add(item: T)` method.
    *   Has a `findById(id: string | number): T | undefined` method.
    *   Implement a method `getSpecificProperty<P extends keyof T>(id: string | number, property: P): T[P] | undefined`.
    *   Implement a conditional type based method `getItemDetail<K extends keyof T>(id: string | number, key: K): K extends "name" ? string | undefined : T[K] | undefined`. This method should return `string | undefined` if the key is "name", otherwise `T[K] | undefined`.

**Code Template:**
```typescript
interface Identifiable {
    id: string | number;
}

// 1. Define the DataStore class
class DataStore<T /* Add constraint and default type here */> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    findById(id: string | number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    // 2. Implement getSpecificProperty
    getSpecificProperty<P /* Add constraint here */>(id: string | number, property: P): T[P] | undefined {
        const item = this.findById(id);
        return item ? item[property] : undefined;
    }

    // 3. Implement getItemDetail using a conditional type
    getItemDetail<K /* Add constraint here */>(id: string | number, key: K): /* Add conditional type here */ {
        const item = this.findById(id);
        if (!item) {
            return undefined;
        }
        // This cast is often necessary with complex conditional types,
        // as TypeScript might not fully infer the exact return type in the implementation.
        return item[key] as any; // We'll refine this in the explanation
    }
}

// --- Test your DataStore ---

// Test with default type
const defaultStore = new DataStore();
defaultStore.add({ id: "1", name: "Default Item 1" });
defaultStore.add({ id: "2", name: "Default Item 2", description: "This is extra" }); // This will work because of structural typing
console.log("Default store item 1:", defaultStore.findById("1"));
console.log("Default store item 2 name:", defaultStore.getSpecificProperty("2", "name"));
console.log("Default store item 2 detail (name):", defaultStore.getItemDetail("2", "name"));
console.log("Default store item 2 detail (id):", defaultStore.getItemDetail("2", "id"));

interface Product extends Identifiable {
    name: string;
    price: number;
    category: string;
}

const productStore = new DataStore<Product>();
productStore.add({ id: 101, name: "Laptop", price: 1200, category: "Electronics" });
productStore.add({ id: 102, name: "Mouse", price: 25, category: "Electronics" });

console.log("\nProduct store item 101:", productStore.findById(101));
console.log("Product store item 102 price:", productStore.getSpecificProperty(102, "price"));
console.log("Product store item 101 detail (name):", productStore.getItemDetail(101, "name"));
console.log("Product store item 101 detail (price):", productStore.getItemDetail(101, "price"));

// Expected error if adding non-Identifiable
// productStore.add({ productName: "Keyboard", cost: 75 });
```

#### Assessment idea
1.  **Question:** Consider the following TypeScript code:
    ```typescript
    interface HasId {
        id: string;
    }

    function processItem<T extends HasId>(item: T): T {
        console.log(`Processing item with ID: ${item.id}`);
        // return { ...item, processed: true }; // Assume 'processed' property might be added
        return item;
    }

    interface User {
        id: string;
        name: string;
    }

    interface Product {
        productId: string;
        name: string;
    }

    const user: User = { id: "u123", name: "Alice" };
    const product: Product = { productId: "p456", name: "Laptop" };

    processItem(user);
    // processItem(product); // Is this line valid? Why or why not?

    type GetPropertyType<T, K extends keyof T> = T extends { [P in K]: infer R } ? R : never;

    type UserNameType = GetPropertyType<User, "name">; // What is UserNameType?
    type ProductIdType = GetPropertyType<Product, "productId">; // What is ProductIdType?
    ```
    Which of the following statements is true regarding the validity of `processItem(product)` and the resulting types `UserNameType` and `ProductIdType`?
    A) `processItem(product)` is valid. `UserNameType` is `string`. `ProductIdType` is `string`.
    B) `processItem(product)` is invalid because `Product` does not extend `HasId`. `UserNameType` is `string`. `ProductIdType` is `string`.
    C) `processItem(product)` is invalid because `Product` does not extend `HasId`. `UserNameType` is `string`. `ProductIdType` is `never`.
    D) `processItem(product)` is valid. `UserNameType` is `string`. `ProductIdType` is `never`.

    **Correct Answer:** B) `processItem(product)` is invalid because `Product` does not extend `HasId`. `UserNameType` is `string`. `ProductIdType` is `string`.

    **Explanation:**
    *   The `processItem` function has a generic constraint `T extends HasId`, meaning `T` must have an `id: string` property. The `Product` interface has `productId: string`, not `id: string`. Therefore, `Product` does not satisfy the `HasId` constraint, making `processItem(product)` invalid.
    *   For `UserNameType`: `User` is `{ id: string; name: string }`. `K` is `"name"`. The conditional type checks if `User` extends `{ name: infer R }`. Yes, it does, and `R` becomes `string`. So, `UserNameType` is `string`.
    *   For `ProductIdType`: `Product` is `{ productId: string; name: string }`. `K` is `"productId"`. The conditional type checks if `Product` extends `{ productId: infer R }`. Yes, it does, and `R` becomes `string`. So, `ProductIdType` is `string`. The `GetPropertyType` conditional type effectively extracts the type of a specific property `K` from type `T`.

2.  **Question:** You are designing a generic `EventBus` that emits events. You want to allow event types to be specified, but if no type is given, it should default to a generic `string` event. Additionally, you want a utility type `EventPayload<TEvent>` that extracts the payload type from an event object, assuming events are objects with a `type` and `payload` property. If an event doesn't have a `payload`, its payload type should be `void`.

    ```typescript
    interface BaseEvent {
        type: string;
    }

    interface DataEvent extends BaseEvent {
        payload: { data: any };
    }

    interface ErrorEvent extends BaseEvent {
        payload: { message: string; code: number };
    }

    // Define EventBus with a default generic type
    class EventBus</* Add generic parameter with default here */> {
        // ... implementation
    }

    // Define EventPayload conditional type
    type EventPayload<TEvent /* Add constraint here */> = /* Add conditional type here */;

    // Test cases
    type StringEventPayload = EventPayload<BaseEvent>; // Expected: void
    type MyDataEventPayload = EventPayload<DataEvent>; // Expected: { data: any }
    type MyErrorEventPayload = EventPayload<ErrorEvent>; // Expected: { message: string; code: number }
    ```
    Provide the correct generic parameter definition for `EventBus` and the `EventPayload` conditional type definition.

    **Correct Answer:**
    ```typescript
    // Define EventBus with a default generic type
    class EventBus<TEvent extends BaseEvent = BaseEvent> {
        // ... implementation
    }

    // Define EventPayload conditional type
    type EventPayload<TEvent extends BaseEvent> = TEvent extends { payload: infer P } ? P : void;
    ```

    **Explanation:**
    *   For `EventBus`: The generic parameter `TEvent` needs to `extend BaseEvent` to ensure all events have at least a `type` property. The default type is `BaseEvent` itself, meaning if you create `new EventBus()`, it will handle `BaseEvent` instances by default.
    *   For `EventPayload`: The conditional type `TEvent extends { payload: infer P } ? P : void` checks if `TEvent` has a `payload` property. If it does, it infers the type of that `payload` into `P` and returns `P`. If `TEvent` does not have a `payload` property (like `BaseEvent`), it returns `void`. This correctly handles both events with and without payloads.

#### AI generation note
Create a 10-12 minute mixed-media lesson. Start with a 3-minute animated explanation of generic constraints, showing type `T` being narrowed by `extends { length: number }` with visual examples of valid (string, array) and invalid (number, boolean) types. Follow with a 2-minute live coding demo demonstrating default generic types using the `ApiResponse` example, showing how the type changes when arguments are omitted or provided. Conclude with a 5-minute interactive code demo for conditional types, walking through the `IsString` and `GetReturnType` examples step-by-step, using a visual debugger-like interface to show how `infer R` captures the return type. Include a small coding exercise where learners modify a `FilterByProperty<T, K, V>` conditional type to filter objects based on a specific property value. Ensure captions and alt text for all visual elements.

---

### Chapter 5.2 — Mastering TypeScript Utility Types: Part 1 (Partial, Required, Readonly, Pick, Omit)

#### Learning objectives
*   Understand the purpose and practical applications of TypeScript's built-in utility types for common type transformations.
*   Effectively use `Partial<T>` to create types where all properties of `T` are optional, suitable for update operations.
*   Apply `Required<T>` to make all properties of `T` mandatory, useful for ensuring data completeness.
*   Utilize `Readonly<T>` to create immutable versions of types, enhancing data integrity.
*   Master `Pick<T, K>` to select a subset of properties from an existing type, ideal for Data Transfer Objects (DTOs) or view models.
*   Employ `Omit<T, K>` to exclude specific properties from a type, useful for removing sensitive data or creating derived types.

#### Detailed lesson content
Welcome back, Cohortia learners! As you delve deeper into TypeScript, you'll inevitably encounter scenarios where you need to transform existing types. Perhaps you have a `User` type, but for an update operation, you need all its properties to be optional. Or maybe you need to create a new type that only includes a few specific properties from a larger interface. Manually redefining these types can be tedious, error-prone, and lead to code duplication. This is where TypeScript's powerful **Utility Types** come into play. These are built-in generic types that provide common type transformations, allowing you to derive new types from existing ones with minimal effort and maximum type safety. In this chapter, we'll explore the first set of these indispensable tools: `Partial`, `Required`, `Readonly`, `Pick`, and `Omit`.

Let's start with `Partial<T>`. Imagine you have an interface `User` with `id`, `name`, and `email` properties, all of which are required. When you want to update a user, you typically don't send all properties; you only send the ones that have changed. If you tried to use the `User` type directly for an update payload, TypeScript would complain if you omitted any required properties. `Partial<T>` solves this by taking a type `T` and constructing a new type where all properties of `T` are made optional. So, `Partial<User>` would result in a type `{ id?: string; name?: string; email?: string; }`. This is incredibly useful for defining parameters for update functions or for forms where not all fields are mandatory.

```typescript
interface User {
    id: string;
    name: string;
    email: string;
    age: number;
}

// UpdateUser allows any subset of User properties
type UpdateUser = Partial<User>;

const user1: User = { id: "1", name: "Alice", email: "alice@example.com", age: 30 };

function updateUserProfile(id: string, updates: UpdateUser) {
    console.log(`Updating user ${id} with:`, updates);
    // In a real application, you'd merge updates with the existing user data
}

updateUserProfile("1", { name: "Alicia", age: 31 }); // Valid
updateUserProfile("1", { email: "alicia.smith@example.com" }); // Valid
// updateUserProfile("1", { nonExistentProperty: "value" }); // Error: Object literal may only specify known properties
```
A common mistake is to use `Partial<T>` when you only want a *few* properties to be optional, but others to remain required. In such cases, you might need a more custom type or a combination of utility types.

The inverse of `Partial<T>` is `Required<T>`. This utility type takes a type `T` and constructs a type consisting of all properties of `T` set to required. If you have an interface where some properties are optional (e.g., `interface Config { port?: number; host: string; }`), but after some validation or default value assignment, you know all properties will be present, `Required<Config>` can be used to reflect this certainty in your type system. For example, after parsing a configuration file, you might want to ensure that all necessary fields are present before proceeding.

```typescript
interface ProductConfig {
    id: string;
    name?: string;
    description?: string;
    price: number;
}

// FinalizedProductConfig ensures name and description are present
type FinalizedProductConfig = Required<ProductConfig>;

const draftProduct: ProductConfig = { id: "p1", price: 10.99 }; // Valid, name and description are optional

function processProduct(config: FinalizedProductConfig) {
    // Now we can safely access config.name and config.description without null checks
    console.log(`Processing product: ${config.name} (ID: ${config.id}) - ${config.description}`);
}

// processProduct(draftProduct); // Error: Property 'name' is missing in type 'ProductConfig' but required in type 'FinalizedProductConfig'.

const completeProduct: FinalizedProductConfig = {
    id: "p1",
    name: "Widget",
    description: "A useful widget.",
    price: 10.99
};
processProduct(completeProduct); // Valid
```
`Required<T>` is excellent for enforcing completeness after initial optionality, often seen after data deserialization or configuration loading where default values are applied.

Next, we have `Readonly<T>`. This type constructs a type with all properties of `T` set to `readonly`, meaning the properties of the constructed type cannot be re-assigned. This is incredibly useful for promoting immutability, especially when passing objects around in a system where you want to ensure they are not accidentally modified. For example, if you fetch configuration settings or user data that should not be changed by certain parts of your application, wrapping them in `Readonly<T>` provides compile-time protection.

```typescript
interface Point {
    x: number;
    y: number;
}

type ReadonlyPoint = Readonly<Point>;

const origin: ReadonlyPoint = { x: 0, y: 0 };
// origin.x = 10; // Error: Cannot assign to 'x' because it is a read-only property.

function printPoint(p: ReadonlyPoint) {
    console.log(`Point coordinates: (${p.x}, ${p.y})`);
    // p.x = 5; // Error here if uncommented
}

printPoint(origin);
```
Using `Readonly<T>` helps prevent unintended side effects and makes your code easier to reason about, especially in functional programming paradigms.

Now, let's look at `Pick<T, K>`. This utility type constructs a type by picking the set of properties `K` (which must be string literals or a union of string literals) from type `T`. This is perfect when you need to create a new type that is a subset of an existing one. For example, if you have a `User` interface with many properties, but for a user list display, you only need `id` and `name`, you can use `Pick<User, 'id' | 'name'>`. This creates a new type `{ id: string; name: string; }`, ensuring you only work with the relevant data. This is a common pattern for Data Transfer Objects (DTOs) or view models.

```typescript
interface Employee {
    id: string;
    name: string;
    email: string;
    department: string;
    salary: number;
}

// EmployeeSummary only includes id and name
type EmployeeSummary = Pick<Employee, "id" | "name">;

const emp1: Employee = {
    id: "e1",
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    salary: 80000
};

const summary: EmployeeSummary = {
    id: emp1.id,
    name: emp1.name
};

console.log(summary); // { id: 'e1', name: 'John Doe' }
// summary.email; // Error: Property 'email' does not exist on type 'EmployeeSummary'.
```
`Pick<T, K>` is incredibly precise for selecting exactly what you need. A common mistake is to try and `Pick` a property that doesn't exist on `T`, which TypeScript will correctly flag as an error.

Finally, we have `Omit<T, K>`. As the name suggests, this is the inverse of `Pick<T, K>`. It constructs a type by picking all properties from `T` and then removing `K` (a union of string literals or a single string literal) from them. If you have a `User` type but need to pass it to a function that shouldn't see the `password` field, you can use `Omit<User, 'password'>`. This creates a new type with all `User` properties except `password`. This is particularly useful for security-sensitive operations or for creating types that exclude specific internal fields.

```typescript
interface UserWithPassword {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
}

// PublicUser excludes passwordHash
type PublicUser = Omit<UserWithPassword, "passwordHash" | "createdAt">;

const secureUser: UserWithPassword = {
    id: "u1",
    name: "Bob",
    email: "bob@example.com",
    passwordHash: "abc123xyz",
    createdAt: new Date()
};

const publicProfile: PublicUser = {
    id: secureUser.id,
    name: secureUser.name,
    email: secureUser.email,
};

console.log(publicProfile); // { id: 'u1', name: 'Bob', email: 'bob@example.com' }
// publicProfile.passwordHash; // Error: Property 'passwordHash' does not exist on type 'PublicUser'.
```
`Omit<T, K>` is powerful for creating "sanitized" versions of types or for defining input types that exclude automatically generated fields (like `id` or `createdAt` when creating a new record).

These five utility types are fundamental tools in your TypeScript arsenal. They allow you to manipulate and transform types declaratively, leading to more concise, readable, and maintainable code. By understanding when and how to apply `Partial`, `Required`, `Readonly`, `Pick`, and `Omit`, you'll significantly enhance your ability to model complex data structures and application states with precision and safety.

#### Key concepts
*   **Utility Types:** Built-in generic types provided by TypeScript for common type transformations, allowing derivation of new types from existing ones.
*   **`Partial<T>`:** A utility type that makes all properties of type `T` optional (`?`).
*   **`Required<T>`:** A utility type that makes all properties of type `T` mandatory.
*   **`Readonly<T>`:** A utility type that makes all properties of type `T` read-only (`readonly`).
*   **`Pick<T, K>`:** A utility type that constructs a type by selecting a set of properties `K` from type `T`. `K` must be a union of string literals (keys of `T`).
*   **`Omit<T, K>`:** A utility type that constructs a type by taking all properties from `T` and then removing the properties `K` from it. `K` must be a union of string literals (keys of `T`).

#### Hands-on activity
**Activity: Building a User Management API with Utility Types**

You are developing a user management system. You have a core `User` interface, but for different API endpoints (creating, updating, viewing), you need different versions of this type.

**Instructions:**
1.  Define a base `User` interface with `id`, `name`, `email`, `passwordHash`, and `createdAt` properties. `id` and `createdAt` should be `readonly` and `passwordHash` should be `string`.
2.  Create a `CreateUserInput` type using `Omit<T, K>` that excludes `id` and `createdAt` from `User` (as these are server-generated).
3.  Create an `UpdateUserInput` type using `Partial<T>` and `Omit<T, K>` that makes all properties of `CreateUserInput` optional (for partial updates).
4.  Create a `PublicUserView` type using `Pick<T, K>` that only includes `id`, `name`, and `email` from `User` (for public display).
5.  Create a `ValidatedUser` type using `Required<T>` that ensures all properties of `User` are present and non-optional, useful after data validation.

**Code Template:**
```typescript
interface User {
    readonly id: string;
    name: string;
    email: string;
    passwordHash: string;
    readonly createdAt: Date;
}

// 1. CreateUserInput: Exclude 'id' and 'createdAt'
type CreateUserInput = /* Your type here */;

// 2. UpdateUserInput: Make all properties of CreateUserInput optional
type UpdateUserInput = /* Your type here */;

// 3. PublicUserView: Pick only 'id', 'name', 'email'
type PublicUserView = /* Your type here */;

// 4. ValidatedUser: Ensure all properties of User are present
type ValidatedUser = /* Your type here */;

// --- Test your types ---

// Test CreateUserInput
const newUser: CreateUserInput = {
    name: "Jane Doe",
    email: "jane@example.com",
    passwordHash: "hashed_password_123"
};
// newUser.id = "abc"; // Should be a type error
console.log("CreateUserInput:", newUser);

// Test UpdateUserInput
const partialUpdate: UpdateUserInput = {
    email: "jane.doe@newdomain.com"
};
// partialUpdate.id = "xyz"; // Should be a type error
console.log("UpdateUserInput:", partialUpdate);

// Test PublicUserView
const fullUser: User = {
    id: "u456",
    name: "John Smith",
    email: "john@example.com",
    passwordHash: "another_hash",
    createdAt: new Date()
};
const publicProfile: PublicUserView = fullUser; // Should be assignable
console.log("PublicUserView:", publicProfile);
// publicProfile.passwordHash; // Should be a type error

// Test ValidatedUser
const incompleteUser: Partial<User> = { id: "u789", name: "Incomplete" };
// const validated: ValidatedUser = incompleteUser; // Should be a type error
const completeUser: ValidatedUser = {
    id: "u789",
    name: "Complete User",
    email: "complete@example.com",
    passwordHash: "final_hash",
    createdAt: new Date()
};
console.log("ValidatedUser:", completeUser);
```

#### Assessment idea
1.  **Question:** You are working with a `Product` interface and need to define a type for a shopping cart item. A shopping cart item should include the `id`, `name`, and `price` of the product, but it also needs an additional `quantity` property.

    ```typescript
    interface Product {
        id: string;
        name: string;
        description: string;
        price: number;
        stock: number;
        imageUrl: string;
    }

    // Which of the following correctly defines the ShoppingCartItem type?
    type ShoppingCartItem = /* ... */;
    ```
    A) `type ShoppingCartItem = Pick<Product, 'id' | 'name' | 'price'> & { quantity: number; };`
    B) `type ShoppingCartItem = Omit<Product, 'description' | 'stock' | 'imageUrl'> | { quantity: number; };`
    C) `type ShoppingCartItem = Partial<Product> & { quantity: number; };`
    D) `type ShoppingCartItem = Product & { quantity: number; };`

    **Correct Answer:** A) `type ShoppingCartItem = Pick<Product, 'id' | 'name' | 'price'> & { quantity: number; };`

    **Explanation:**
    *   We need *only* `id`, `name`, and `price` from `Product`. `Pick<Product, 'id' | 'name' | 'price'>` achieves this precisely.
    *   We then need to add an *additional* `quantity` property. The `&` (intersection type) operator is used to combine types, adding `quantity: number` to the picked properties.
    *   Option B uses `Omit`, which would include all properties *except* the omitted ones, which is not what we want. The `|` (union type) would mean it's *either* the omitted type *or* `{ quantity: number }`, not a combination.
    *   Option C uses `Partial`, making all properties optional, and still includes `description`, `stock`, `imageUrl`, which are not desired.
    *   Option D uses `Product`, which would include all original properties plus `quantity`, which is also not desired as we only want a subset of product properties.

2.  **Question:** Consider the following TypeScript types:
    ```typescript
    interface Settings {
        theme?: "dark" | "light";
        notifications: boolean;
        language: string;
    }

    type DefaultSettings = Required<Settings>;
    type UserPreferences = Partial<Omit<Settings, 'language'>>;

    // What are the exact types of DefaultSettings and UserPreferences?
    ```
    **Correct Answer:**
    ```typescript
    type DefaultSettings = {
        theme: "dark" | "light";
        notifications: boolean;
        language: string;
    };

    type UserPreferences = {
        theme?: "dark" | "light";
        notifications?: boolean;
    };
    ```
    **Explanation:**
    *   `DefaultSettings = Required<Settings>`: The `Required` utility type makes all properties of `Settings` mandatory. Since `theme` was optional in `Settings`, it becomes required in `DefaultSettings`. `notifications` and `language` were already required, so they remain required.
    *   `UserPreferences = Partial<Omit<Settings, 'language'>>`:
        1.  First, `Omit<Settings, 'language'>` creates a type that is `Settings` without the `language` property. This results in `{ theme?: "dark" | "light"; notifications: boolean; }`.
        2.  Next, `Partial<...>` is applied to this intermediate type. This makes all its properties optional. So, `theme` (already optional) remains optional, and `notifications` (originally required) becomes optional.
        The final type is `{ theme?: "dark" | "light"; notifications?: boolean; }`.

#### AI generation note
Create a 12-15 minute interactive code demo. Start with a quick visual introduction to utility types as "type transformers." For each utility type (`Partial`, `Required`, `Readonly`, `Pick`, `Omit`):
1.  Show the original `User` or `Product` interface.
2.  Demonstrate the utility type's syntax and the resulting transformed type (e.g., `type UpdateUser = Partial<User>;`).
3.  Provide a live coding example where the transformed type is used, highlighting how TypeScript's type checking changes (e.g., allowing optional properties for `Partial`, disallowing assignment for `Readonly`).
4.  Include a brief real-world scenario for each (e.g., `Partial` for API update payloads, `Pick` for DTOs, `Omit` for security).
At the end, include a drag-and-drop exercise where learners match a scenario (e.g., "Make all properties optional") to the correct utility type. Ensure clear side-by-side comparisons of original vs. transformed types.

---

### Chapter 5.3 — Mastering TypeScript Utility Types: Part 2 (Exclude, Extract, NonNullable, Parameters, ReturnType)

#### Learning objectives
*   Differentiate and apply `Exclude<T, U>` to remove specific types from a union type.
*   Understand and use `Extract<T, U>` to select specific types from a union type that are assignable to `U`.
*   Utilize `NonNullable<T>` to remove `null` and `undefined` from a type, ensuring a value is always present.
*   Master `Parameters<T>` to extract the parameter types of a function type, useful for creating argument types for higher-order functions.
*   Employ `ReturnType<T>` to extract the return type of a function type, enabling precise type definitions for function results.
*   Combine these utility types to create complex and highly specific type definitions for advanced scenarios.

#### Detailed lesson content
Hello again, Cohortia learners! In the previous chapter, we explored foundational utility types like `Partial`, `Required`, `Readonly`, `Pick`, and `Omit`, which are primarily used for transforming object types by modifying their properties or selecting subsets. Now, we're going to dive into another set of equally powerful utility types that focus more on manipulating union types and extracting information from function types. These tools, `Exclude`, `Extract`, `NonNullable`, `Parameters`, and `ReturnType`, are crucial for refining type unions, ensuring non-nullability, and working effectively with higher-order functions and function signatures.

Let's begin with `Exclude<T, U>`. This utility type constructs a type by excluding from `T` all union members that are assignable to `U`. Think of it as a type-level filter for union types. For example, if you have a union `string | number | boolean` and you want to exclude `boolean`, `Exclude<string | number | boolean, boolean>` would result in `string | number`. This is incredibly useful when you're working with a broad union type but, in a specific context, you only want to allow a subset of those types. A practical scenario might be filtering out specific error codes from a union of all possible API error codes, or ensuring a variable can only hold non-function values.

```typescript
type AllPrimitives = string | number | boolean | symbol | null | undefined;

// Exclude all non-string primitives
type OnlyStrings = Exclude<AllPrimitives, number | boolean | symbol | null | undefined>;
// OnlyStrings is 'string'

type EventType = "CLICK" | "SUBMIT" | "LOAD" | "ERROR";

// Exclude error events for a success handler
type SuccessEventType = Exclude<EventType, "ERROR">;
// SuccessEventType is 'CLICK' | 'SUBMIT' | 'LOAD'

function handleSuccessEvent(event: SuccessEventType) {
    console.log(`Handling success event: ${event}`);
}

handleSuccessEvent("CLICK"); // Valid
// handleSuccessEvent("ERROR"); // Error: Argument of type '"ERROR"' is not assignable to parameter of type 'SuccessEventType'.
```
A common mistake with `Exclude` is to confuse it with `Omit`. `Exclude` operates on union types to filter out members, while `Omit` operates on object types to remove properties.

The counterpart to `Exclude<T, U>` is `Extract<T, U>`. This utility type constructs a type by extracting from `T` all union members that are assignable to `U`. Where `Exclude` removes, `Extract` keeps. So, `Extract<string | number | boolean, string>` would result in `string`. This is perfect for when you have a mixed union and you only care about a specific category of types within it. For example, if you have a union of different object types and you only want to work with those that have a specific property, `Extract` can help you narrow down the union.

```typescript
type MixedData = string | number | { id: string; value: number } | boolean;

// Extract only object types
type ObjectData = Extract<MixedData, { id: string; value: number }>;
// ObjectData is '{ id: string; value: number }'

// Extract only string types
type StringData = Extract<MixedData, string>;
// StringData is 'string'

type Status = "pending" | "success" | "error" | 0 | 1;

// Extract only string statuses
type StringStatus = Extract<Status, string>;
// StringStatus is '"pending" | "success" | "error"'
```
`Extract` and `Exclude` are powerful tools for precisely controlling the members of union types, making your type definitions more granular and context-specific.

Moving on, `NonNullable<T>` is a straightforward yet incredibly useful utility type. It constructs a type by excluding `null` and `undefined` from `T`. In JavaScript, `null` and `undefined` are pervasive, and often you want to guarantee that a variable actually holds a value. Instead of manually writing `T | null | undefined` and then `T`, `NonNullable<T>` provides a clean way to express this. For example, `NonNullable<string | null | undefined>` resolves to `string`. This is particularly helpful when dealing with optional parameters or API responses where fields might be `null` but you need to process them only when they have a concrete value.

```typescript
type NullableString = string | null | undefined;

// NonNullableString is 'string'
type NonNullableString = NonNullable<NullableString>;

const myString: NonNullableString = "hello";
// const anotherString: NonNullableString = null; // Error: Type 'null' is not assignable to type 'string'.

interface UserProfile {
    name: string;
    avatarUrl?: string | null; // Optional and can be null
}

function displayAvatar(user: NonNullable<UserProfile["avatarUrl"]>) {
    // We know user is definitely a string here, not null or undefined
    console.log(`Displaying avatar from: ${user}`);
}

const profile1: UserProfile = { name: "Alice", avatarUrl: "http://example.com/avatar.png" };
const profile2: UserProfile = { name: "Bob", avatarUrl: null };
const profile3: UserProfile = { name: "Charlie" };

if (profile1.avatarUrl) {
    displayAvatar(profile1.avatarUrl); // Valid, avatarUrl is string
}
// displayAvatar(profile2.avatarUrl); // Error: Argument of type 'string | null | undefined' is not assignable to parameter of type 'string'.
// displayAvatar(profile3.avatarUrl); // Error: Argument of type 'string | null | undefined' is not assignable to parameter of type 'string'.
```
`NonNullable<T>` is your go-to when you need to enforce the presence of a value, eliminating the need for repetitive `if (value !== null && value !== undefined)` checks in your type definitions.

Next, we have `Parameters<T>`. This utility type constructs a tuple type of the parameter types of a function type `T`. If `T` is not a function type, `Parameters<T>` resolves to `never`. This is incredibly powerful when you're creating higher-order functions, decorators, or wrappers that need to know the exact arguments of the function they are operating on. For example, if you have a logging decorator that needs to capture the arguments passed to a method, `Parameters<typeof someMethod>` would give you the type signature of those arguments.

```typescript
function greet(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old.`;
}

type GreetParams = Parameters<typeof greet>;
// GreetParams is '[name: string, age: number]' (a tuple type)

function logAndCall<T extends (...args: any[]) => any>(
    func: T,
    ...args: Parameters<T> // Ensures args match func's parameters
): ReturnType<T> {
    console.log(`Calling function ${func.name} with arguments:`, args);
    return func(...args);
}

const result = logAndCall(greet, "Alice", 30);
console.log(result); // Hello Alice, you are 30 years old.

// logAndCall(greet, "Bob"); // Error: Expected 2 arguments, but got 1.
// logAndCall(greet, "Bob", "twenty"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```
`Parameters<T>` ensures that when you're passing arguments to a wrapped function, those arguments are type-checked against the original function's signature, maintaining strong type safety.

Finally, `ReturnType<T>`. This utility type constructs a type consisting of the return type of function type `T`. Similar to `Parameters<T>`, if `T` is not a function type, `ReturnType<T>` resolves to `any`. This is invaluable when you need to define a variable or another type that should precisely match the output of a specific function. For instance, if you have an asynchronous function that returns a `Promise<User>`, `ReturnType<typeof fetchUser>` would give you `Promise<User>`, allowing you to correctly type the result of calling that function.

```typescript
function calculateSum(a: number, b: number): number {
    return a + b;
}

async function fetchData(): Promise<{ data: string }> {
    return { data: "Some fetched data" };
}

type SumResult = ReturnType<typeof calculateSum>;
// SumResult is 'number'

type FetchDataResult = ReturnType<typeof fetchData>;
// FetchDataResult is 'Promise<{ data: string }>'

const sum: SumResult = calculateSum(5, 3);
// const wrongSum: SumResult = "eight"; // Error: Type 'string' is not assignable to type 'number'.

let dataPromise: FetchDataResult;
dataPromise = fetchData(); // Valid
// dataPromise = Promise.resolve(123); // Error: Type 'number' is not assignable to type '{ data: string }'.
```
`ReturnType<T>` ensures that variables holding function results are correctly typed, preventing mismatches and improving code predictability.

These utility types are incredibly powerful for fine-grained type control, especially when dealing with complex union types or dynamically working with function signatures. By mastering `Exclude`, `Extract`, `NonNullable`, `Parameters`, and `ReturnType`, you'll be able to write more robust, adaptable, and type-safe code that precisely reflects your application's logic.

#### Key concepts
*   **`Exclude<T, U>`:** A utility type that creates a new union type by removing all members from union `T` that are assignable to union `U`.
*   **`Extract<T, U>`:** A utility type that creates a new union type by selecting all members from union `T` that are assignable to union `U`.
*   **`NonNullable<T>`:** A utility type that removes `null` and `undefined` from type `T`, resulting in a type that is guaranteed to have a concrete value.
*   **`Parameters<T>`:** A utility type that extracts the parameter types of a function type `T` into a tuple type.
*   **`ReturnType<T>`:** A utility type that extracts the return type of a function type `T`.

#### Hands-on activity
**Activity: Building a Flexible Event Handler with Utility Types**

You are tasked with building a flexible event handling system. You have a set of predefined event types, some of which carry data, and you need to create types for handlers, filtered events, and non-nullable event data.

**Instructions:**
1.  Define a union type `AppEvent` that includes `string` literals like `"userLogin"`, `"userLogout"`, `"productView"`, and object types like `{ type: "itemAdded"; payload: { itemId: string; quantity: number } }`, `{ type: "error"; message: string }`, and `null`.
2.  Create a type `DataEvents` using `Extract<T, U>` that only includes the object-based events from `AppEvent` (i.e., those with a `type` property).
3.  Create a type `NonErrorEvents` using `Exclude<T, U>` that removes the `{ type: "error"; message: string }` and `null` types from `AppEvent`.
4.  Define a function `handleItemAdded(event: { type: "itemAdded"; payload: { itemId: string; quantity: number } }): void`.
5.  Create a type `ItemAddedPayload` using `Parameters<T>` and `NonNullable<T>` that extracts the payload type from the `handleItemAdded` function's first argument, ensuring it's not null/undefined.
6.  Create a type `GetEventReturnType<T extends (...args: any[]) => any>` that uses `ReturnType<T>` to get the return type of any function.

**Code Template:**
```typescript
// 1. Define AppEvent union type
type AppEvent =
    "userLogin"
    | "userLogout"
    | "productView"
    | { type: "itemAdded"; payload: { itemId: string; quantity: number } }
    | { type: "error"; message: string }
    | null;

// 2. DataEvents: Extract only object-based events from AppEvent
type DataEvents = /* Your type here */;

// 3. NonErrorEvents: Exclude error event and null from AppEvent
type NonErrorEvents = /* Your type here */;

// 4. Define handleItemAdded function
function handleItemAdded(event: { type: "itemAdded"; payload: { itemId: string; quantity: number } }): void {
    console.log(`Item ${event.payload.itemId} added with quantity ${event.payload.quantity}`);
}

// 5. ItemAddedPayload: Extract payload type from handleItemAdded's first arg, ensuring non-nullable
type ItemAddedPayload = /* Your type here */;

// 6. GetEventReturnType: Generic type to get return type of any function
type GetEventReturnType<T extends (...args: any[]) => any> = /* Your type here */;

// --- Test your types ---

// Test DataEvents
const dataEvent1: DataEvents = { type: "itemAdded", payload: { itemId: "p1", quantity: 2 } };
// const dataEvent2: DataEvents = "userLogin"; // Should be a type error
console.log("DataEvents example:", dataEvent1);

// Test NonErrorEvents
const nonErrorEvent1: NonErrorEvents = "userLogin";
const nonErrorEvent2: NonErrorEvents = { type: "itemAdded", payload: { itemId: "p2", quantity: 1 } };
// const nonErrorEvent3: NonErrorEvents = { type: "error", message: "Failed" }; // Should be a type error
// const nonErrorEvent4: NonErrorEvents = null; // Should be a type error
console.log("NonErrorEvents example 1:", nonErrorEvent1);
console.log("NonErrorEvents example 2:", nonErrorEvent2);

// Test ItemAddedPayload
const payload: ItemAddedPayload = { itemId: "p3", quantity: 5 };
// const invalidPayload: ItemAddedPayload = null; // Should be a type error
console.log("ItemAddedPayload example:", payload);

// Test GetEventReturnType
function processOrder(orderId: string): { success: boolean; orderId: string } {
    return { success: true, orderId };
}
type OrderProcessingResult = GetEventReturnType<typeof processOrder>;
const orderResult: OrderProcessingResult = { success: true, orderId: "o123" };
console.log("OrderProcessingResult example:", orderResult);
```

#### Assessment idea
1.  **Question:** You have a union type `MixedInput` that can be a `string`, `number`, `boolean`, or a `function` that takes a string and returns a number. You need to create two new types: `OnlyFunctions` (which should only contain the function type) and `NonStringInputs` (which should contain everything except `string`).

    ```typescript
    type MixedInput = string | number | boolean | ((s: string) => number);

    // Define OnlyFunctions and NonStringInputs using utility types
    type OnlyFunctions = /* ... */;
    type NonStringInputs = /* ... */;

    // What are the exact types of OnlyFunctions and NonStringInputs?
    ```
    A) `OnlyFunctions` is `(s: string) => number`. `NonStringInputs` is `number | boolean | ((s: string) => number)`.
    B) `OnlyFunctions` is `MixedInput`. `NonStringInputs` is `number | boolean`.
    C) `OnlyFunctions` is `(s: string) => number`. `NonStringInputs` is `string | number | boolean`.
    D) `OnlyFunctions` is `never`. `NonStringInputs` is `number | boolean | ((s: string) => number)`.

    **Correct Answer:** A) `OnlyFunctions` is `(s: string) => number`. `NonStringInputs` is `number | boolean | ((s: string) => number)`.

    **Explanation:**
    *   `OnlyFunctions`: To extract only the function type from `MixedInput`, we use `Extract<MixedInput, Function>`. Since `((s: string) => number)` is assignable to `Function`, it will be extracted. So, `OnlyFunctions` is `(s: string) => number`.
    *   `NonStringInputs`: To exclude `string` from `MixedInput`, we use `Exclude<MixedInput, string>`. This will remove `string` from the union, leaving `number | boolean | ((s: string) => number)`.

2.  **Question:** You have a function `fetchUserById` that returns a `Promise<User | null>`. You want to define a type `UserResult` that represents the resolved `User` object (guaranteed to be non-null) and a type `FetchUserArguments` that represents the parameters required by `fetchUserById`.

    ```typescript
    interface User {
        id: string;
        name: string;
    }

    async function fetchUserById(id: string, includeDetails: boolean): Promise<User | null> {
        // ... API call simulation
        if (id === "123") {
            return { id: "123", name: "Alice" };
        }
        return null;
    }

    // Define UserResult and FetchUserArguments using utility types
    type UserResult = /* ... */;
    type FetchUserArguments = /* ... */;

    // What are the exact types of UserResult and FetchUserArguments?
    ```
    **Correct Answer:**
    ```typescript
    type UserResult = NonNullable<Awaited<ReturnType<typeof fetchUserById>>>;
    // Or, if Awaited is not covered yet, then:
    // type UserResult = NonNullable<User>; // After manually resolving Promise

    type FetchUserArguments = Parameters<typeof fetchUserById>;
    ```
    **Explanation:**
    *   `UserResult`:
        1.  `ReturnType<typeof fetchUserById>` gives `Promise<User | null>`.
        2.  `Awaited<Promise<User | null>>` (a built-in utility type for unwrapping promises, often implicitly used) resolves to `User | null`. If `Awaited` is not explicitly covered, you might conceptually resolve the `Promise` to `User | null`.
        3.  `NonNullable<User | null>` removes `null`, resulting in `User`.
        So, `UserResult` is `{ id: string; name: string; }`.
    *   `FetchUserArguments`: `Parameters<typeof fetchUserById>` directly extracts the parameter types of the function `fetchUserById`, which are `id: string` and `includeDetails: boolean`. This results in the tuple type `[id: string, includeDetails: boolean]`.

#### AI generation note
Create an 11-14 minute mixed-media lesson. Start with a 2-minute animated segment explaining `Exclude` and `Extract` using Venn diagrams to visually represent union types and how members are filtered or selected. Follow with a 2-minute live coding demo for `NonNullable` using an optional API response field, showing how type errors are prevented after applying the utility type. Transition to a 6-minute interactive code demo for `Parameters` and `ReturnType`, demonstrating their use with a `logAndCall` higher-order function example. Use a visual trace to show how argument types are matched and return types are inferred. Include a mini-quiz with 3 questions at the end, testing comprehension of which utility type to use for specific union or function type transformations. Ensure high-contrast visuals and captions.

---

### Chapter 5.4 — Advanced Type Manipulation: Mapped Types and Template Literal Types

#### Learning objectives
*   Master mapped types to create new object types by transforming the properties of an existing type, including key remapping.
*   Understand and apply template literal types to generate new string literal types based on existing string literal unions.
*   Combine mapped types with template literal types to build highly dynamic and expressive type transformations.
*   Implement real-world scenarios such as generating getter/setter types, event handler types, or API request/response types using these advanced techniques.
*   Identify common pitfalls and best practices when working with complex type manipulations.

#### Detailed lesson content
Welcome back, Cohortia learners! So far, we've seen how generics allow us to write flexible code and how utility types provide common transformations. Now, we're going to push the boundaries of TypeScript's type system even further by diving into **Mapped Types** and **Template Literal Types**. These advanced features enable you to perform powerful, programmatic transformations on types, allowing you to generate new types based on the structure and names of existing ones. This is where TypeScript truly shines in its ability to model complex data relationships and API contracts with incredible precision.

Let's begin with **Mapped Types**. At their core, mapped types allow you to create new object types by iterating over the properties of an existing type and transforming each property. The syntax looks similar to a `for...in` loop in JavaScript, but it operates on types: `[P in K]`. Here, `K` is typically `keyof T`, meaning `P` iterates over all property keys of type `T`. For each property `P`, you can then define its new type. For example, `type Readonly<T> = { readonly [P in keyof T]: T[P]; }` is how the built-in `Readonly` utility type is implemented. It iterates over each property `P` in `T` and makes it `readonly`, keeping its original type `T[P]`.

Mapped types become even more powerful with **Key Remapping** using the `as` keyword. This allows you to change the names of the properties as you iterate over them. The syntax is `[P in K as NewKeyType]: ValueType`. `NewKeyType` can be a template literal type (which we'll discuss next) or another type that resolves to a string, number, or symbol. For instance, you could transform an interface `User { name: string; age: number; }` into `Getters { getName: () => string; getAge: () => number; }` by adding a "get" prefix to each property name and changing its type to a function that returns the original property's type. This capability is incredibly useful for generating boilerplate code or defining interfaces for automatically generated accessors.

```typescript
interface User {
    name: string;
    age: number;
    email?: string;
}

// Example 1: Make all properties nullable
type NullableUser = {
    [P in keyof User]: User[P] | null;
};
// NullableUser is { name: string | null; age: number | null; email?: string | null; }

// Example 2: Create a type with getter methods (key remapping)
type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type UserGetters = Getters<User>;
// UserGetters is { getName: () => string; getAge: () => number; getEmail?: () => string | undefined; }

// Example 3: Remove 'readonly' or 'optional' modifiers
type MutableRequired<T> = {
    -readonly [P in keyof T]-?: T[P];
};

interface ReadonlyOptionalConfig {
    readonly host?: string;
    readonly port?: number;
}

type WritableConfig = MutableRequired<ReadonlyOptionalConfig>;
// WritableConfig is { host: string; port: number; }
// Note: -readonly and -? remove the modifiers. +readonly and +? add them.
```
In `Getters<T>`, `Capitalize<string & P>` is a built-in template literal type that converts the first letter of a string literal type to uppercase. This demonstrates the seamless integration of mapped types with other advanced features. A common mistake with mapped types is forgetting to use `keyof T` or trying to iterate over non-object types.

Now, let's introduce **Template Literal Types**. These are types that act like JavaScript template string literals, allowing you to create new string literal types by concatenating existing string literal types. The syntax uses backticks (` `) and interpolation (`${ }`). For example, if you have a union of string literals `type Colors = "red" | "blue";`, you could create `type ColorId = `id_${Colors}`;`, which would resolve to `"id_red" | "id_blue"`. This is incredibly powerful for generating related string literal types, such as event names, CSS class names, or API endpoint paths.

```typescript
type Direction = "up" | "down" | "left" | "right";
type MoveEvent = `move${Capitalize<Direction>}`;
// MoveEvent is "moveUp" | "moveDown" | "moveLeft" | "moveRight"

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type APIEndpoint<Resource extends string> = `/${Resource}/${HTTPMethod}`;
// type UserAPI = APIEndpoint<"users">; // "/users/GET" | "/users/POST" | "/users/PUT" | "/users/DELETE"
```
Template literal types are particularly useful when you need to enforce naming conventions or generate a set of related string constants.

The true magic happens when you **combine Mapped Types with Template Literal Types**. This combination allows you to transform both the keys and values of an object type in highly sophisticated ways. For example, you can create a type for event listeners where the property names are derived from event types, and the values are functions that handle those events.

```typescript
type Feature = "Auth" | "User" | "Product";
type EventName = "Created" | "Updated" | "Deleted";

// Combines Feature and EventName to create event types like "AuthCreatedEvent"
type SpecificEvent = `${Feature}${EventName}Event`;
// SpecificEvent is "AuthCreatedEvent" | "AuthUpdatedEvent" | "AuthDeletedEvent" | "UserCreatedEvent" | ...

// Create a type for event handlers, e.g., { onAuthCreated: (payload: any) => void; ... }
type EventHandlers<T extends string> = {
    [P in T as `on${Capitalize<P>}`]: (payload: any) => void;
};

type AppEventHandlers = EventHandlers<SpecificEvent>;
/* AppEventHandlers is:
{
    onAuthCreatedEvent: (payload: any) => void;
    onAuthUpdatedEvent: (payload: any) => void;
    onAuthDeletedEvent: (payload: any) => void;
    onUserCreatedEvent: (payload: any) => void;
    // ... and so on for all combinations
}
*/

// Another example: Creating a type for environment variables with prefixes
type EnvConfig = {
    API_KEY: string;
    DEBUG_MODE: boolean;
    PORT: number;
};

type PrefixedEnvConfig<T> = {
    [P in keyof T as `APP_${string & P}`]: T[P];
};

type MyAppEnv = PrefixedEnvConfig<EnvConfig>;
/* MyAppEnv is:
{
    APP_API_KEY: string;
    APP_DEBUG_MODE: boolean;
    APP_PORT: number;
}
*/
```
This combination is incredibly powerful for generating types that adhere to strict naming conventions, integrate with code generation tools, or define complex API interfaces where endpoint paths or request/response types are systematically derived. A common pitfall is to create overly complex template literal types that become hard to read or debug. Always strive for clarity and break down complex transformations into smaller, more manageable steps. Also, remember that template literal types work with *string literal types*, not generic `string`. If you pass a generic `string` to a template literal, it will just resolve to `string`.

By mastering mapped types and template literal types, you unlock a new dimension of type safety and expressiveness in TypeScript. You can programmatically define types that precisely match your application's logic and conventions, reducing manual type declarations and increasing the robustness of your codebase.

#### Key concepts
*   **Mapped Types:** A type transformation that iterates over the properties of an existing type (`[P in keyof T]`) to create a new object type, potentially modifying property names, types, or modifiers.
*   **Key Remapping (`as`):** Used within mapped types (`[P in K as NewKeyType]`) to change the name of the properties during the mapping process, often combined with template literal types.
*   **Template Literal Types:** Types that use JavaScript's template string syntax (` `) to create new string literal types by interpolating string literal unions, allowing for powerful string manipulation at the type level.
*   **`Capitalize<S>` / `Uncapitalize<S>`:** Built-in utility types that transform string literal types by changing the case of their first letter.
*   **`Uppercase<S>` / `Lowercase<S>`:** Built-in utility types that transform string literal types to all uppercase or all lowercase.

#### Hands-on activity
**Activity: Building a Dynamic Form Field Generator**

You are creating a system that dynamically generates form fields based on a configuration object. You need to define types for form fields and their corresponding validation rules, using mapped types and template literal types to enforce naming conventions.

**Instructions:**
1.  Define an interface `FormFieldConfig` with properties `name: string`, `label: string`, and `type: "text" | "number" | "email"`.
2.  Create a type `FormValues<T>` that takes a union of `FormFieldConfig` objects and generates an object type where keys are `name` from `FormFieldConfig` and values are `string | number`. Use a mapped type with key remapping.
    *   Hint: You'll need to extract the `name` property as the key and determine the value type.
    *   `T extends { name: string; type: any }` will be a useful constraint.
    *   You might need a conditional type within the mapped type to determine the value type based on `type`.
3.  Create a type `ValidationRules<T>` that takes the same union of `FormFieldConfig` objects and generates an object type where keys are `name` from `FormFieldConfig` prefixed with `"validate"` (e.g., `validateName`, `validateEmail`), and values are `(value: any) => string | undefined` (a function that returns an error message or undefined).

**Code Template:**
```typescript
interface FormFieldConfig {
    name: string;
    label: string;
    type: "text" | "number" | "email";
}

// Example field configurations
type UserFields =
    | { name: "username"; label: "Username"; type: "text" }
    | { name: "age"; label: "Age"; type: "number" }
    | { name: "email"; label: "Email Address"; type: "email" };

// 1. FormValues<T>: Generates an object type for form values
type FormValues<T extends FormFieldConfig> = {
    [P in T as P["name"]]: P["type"] extends "number" ? number : string;
};

// 2. ValidationRules<T>: Generates an object type for validation functions
type ValidationRules<T extends FormFieldConfig> = {
    [P in T as `validate${Capitalize<P["name"]>}`]: (value: any) => string | undefined;
};

// --- Test your types ---

// Test FormValues
type UserFormValues = FormValues<UserFields>;
/* Expected:
{
    username: string;
    age: number;
    email: string;
}
*/
const userFormData: UserFormValues = {
    username: "johndoe",
    age: 30,
    email: "john.doe@example.com"
};
console.log("UserFormValues:", userFormData);
// userFormData.age = "thirty"; // Should be a type error

// Test ValidationRules
type UserValidationRules = ValidationRules<UserFields>;
/* Expected:
{
    validateUsername: (value: any) => string | undefined;
    validateAge: (value: any) => string | undefined;
    validateEmail: (value: any) => string | undefined;
}
*/
const userValidators: UserValidationRules = {
    validateUsername: (value) => value.length < 3 ? "Too short" : undefined,
    validateAge: (value) => value < 18 ? "Must be 18+" : undefined,
    validateEmail: (value) => !value.includes("@") ? "Invalid email" : undefined,
};
console.log("UserValidationRules:", userValidators.validateUsername("jd"));
console.log("UserValidationRules:", userValidators.validateAge(25));
```

#### Assessment idea
1.  **Question:** You have an interface `ApiConfig` and you want to create a new type `ApiEnvVars` where each property name from `ApiConfig` is prefixed with `API_` and converted to uppercase.

    ```typescript
    interface ApiConfig {
        baseUrl: string;
        timeoutMs: number;
        apiKey: string;
    }

    // Which of the following correctly defines ApiEnvVars?
    type ApiEnvVars = /* ... */;
    ```
    A) `type ApiEnvVars = { [P in keyof ApiConfig as `API_${Uppercase<string & P>}`]: ApiConfig[P]; };`
    B) `type ApiEnvVars = { [P in keyof ApiConfig]: `API_${Uppercase<string & P>}`; };`
    C) `type ApiEnvVars = { [P in keyof ApiConfig as `API_${P}`]: ApiConfig[P]; };`
    D) `type ApiEnvVars = { [P in keyof ApiConfig as `API_${string & P}`]: ApiConfig[P]; };`

    **Correct Answer:** A) `type ApiEnvVars = { [P in keyof ApiConfig as `API_${Uppercase<string & P>}`]: ApiConfig[P]; };`

    **Explanation:**
    *   We need to iterate over `keyof ApiConfig` (so `P in keyof ApiConfig`).
    *   We need to remap the key using `as`. The new key should be `API_` followed by the uppercase version of the original key. `Uppercase<string & P>` correctly converts the string literal type `P` to uppercase. The `string & P` is a common pattern to ensure `P` is treated as a string literal type, which `Uppercase` expects.
    *   The value type should remain the same as the original, `ApiConfig[P]`.
    *   Option B incorrectly tries to assign the template literal type to the *value* of the property, not the key.
    *   Option C and D do not convert the key to uppercase, which was a requirement.

2.  **Question:** You are designing a system for managing user permissions. You have a union type `Permission` representing different actions. You want to generate a type `PermissionFlags` which is an object where each property name is a `Permission` value prefixed with `can` (e.g., `canRead`, `canWrite`), and its value is `boolean`.

    ```typescript
    type Permission = "read" | "write" | "delete";

    // Which of the following correctly defines PermissionFlags?
    type PermissionFlags = /* ... */;

    // What is the exact type of PermissionFlags?
    ```
    **Correct Answer:**
    ```typescript
    type PermissionFlags = {
        [P in Permission as `can${Capitalize<P>}`]: boolean;
    };

    // Exact type of PermissionFlags:
    // {
    //     canRead: boolean;
    //     canWrite: boolean;
    //     canDelete: boolean;
    // }
    ```
    **Explanation:**
    *   We need to iterate over the `Permission` union type (so `P in Permission`).
    *   We need to remap the key using `as`. The new key should be `can` followed by the capitalized version of the `Permission` value. `Capitalize<P>` correctly capitalizes the first letter of each string literal in the `Permission` union.
    *   The value type for each property should be `boolean`.
    *   This mapped type effectively transforms a union of string literals into an object type with dynamically generated keys and a consistent value type.

#### AI generation note
Create a 12-15 minute interactive code demo. Start with a 2-minute visual explanation of mapped types, showing how `[P in keyof T]` iterates and `as` renames properties. Then, a 3-minute segment on template literal types, demonstrating `Capitalize`, `Uppercase`, and string concatenation with examples like `MoveEvent`. The core of the lesson (7-10 minutes) should be a live coding session combining both:
1.  Build the `UserGetters` example from scratch, showing the type inference step-by-step.
2.  Build the `EventHandlers` example, emphasizing how `SpecificEvent` is generated first, then used in the mapped type.
3.  Include a challenge where learners modify a mapped type to add a `_changed` suffix to all boolean properties.
Use a split-screen view showing code on one side and the resulting type definitions on the other. Provide clear error messages for common mistakes (e.g., trying to use `Uppercase` on a non-string literal type).

---

### Chapter 5.5 — Type Guards and Assertion Functions: Enhancing Type Safety at Runtime

#### Learning objectives
*   Understand the fundamental role of type guards in narrowing types at runtime to ensure type safety within conditional blocks.
*   Implement custom user-defined type guards using type predicates (`parameter is Type`) for complex type narrowing scenarios.
*   Utilize discriminated unions in conjunction with type guards to safely handle different variants of a union type.
*   Master assertion functions (`asserts condition is Type` or `asserts condition`) to enforce conditions and narrow types, particularly for validating inputs or prerequisites.
*   Differentiate between type guards and assertion functions and choose the appropriate mechanism for various runtime type safety needs.
*   Identify common mistakes and best practices when applying type guards and assertion functions in real-world applications.

#### Detailed lesson content
Hello, Cohortia learners! As we've journeyed through TypeScript, we've focused heavily on compile-time type safety. However, JavaScript is a dynamic language, and sometimes, the exact type of a variable isn't known until runtime. This is where **Type Guards** and **Assertion Functions** become indispensable. They allow you to perform runtime checks that inform the TypeScript compiler about the more specific type of a variable within a certain scope, effectively narrowing down its type and maintaining type safety even in dynamic scenarios.

Let's start with **Type Guards**. A type guard is simply a runtime check that guarantees the type of a value within a certain scope. TypeScript uses this information to narrow the type of the variable. You've likely already encountered some built-in type guards:
*   **`typeof` type guards:** `if (typeof x === 'string')` narrows `x` to `string`.
*   **`instanceof` type guards:** `if (x instanceof MyClass)` narrows `x` to `MyClass`.
*   **`in` operator type guards:** `if ('propertyName' in obj)` checks for the presence of a property.
*   **Equality narrowing:** `if (x === null)` or `if (x !== undefined)`.

These built-in guards are powerful, but often, you need more sophisticated checks. This is where **User-Defined Type Guards** come in. You can create your own type guard function by defining a return type called a **type predicate**. A type predicate takes the form `parameterName is Type`. When TypeScript sees a function with a type predicate return type, it understands that if the function returns `true`, then the `parameterName` within the scope of that `if` block can be treated as `Type`.

```typescript
interface Dog {
    bark(): void;
    name: string;
}

interface Cat {
    meow(): void;
    name: string;
}

type Pet = Dog | Cat;

// User-defined type guard
function isDog(pet: Pet): pet is Dog {
    return (pet as Dog).bark !== undefined; // Runtime check
}

function handlePet(pet: Pet) {
    if (isDog(pet)) {
        pet.bark(); // OK, pet is narrowed to Dog
        console.log(`Dog's name: ${pet.name}`);
    } else {
        pet.meow(); // OK, pet is narrowed to Cat
        console.log(`Cat's name: ${pet.name}`);
    }
}

const myDog: Dog = { name: "Buddy", bark: () => console.log("Woof!") };
const myCat: Cat = { name: "Whiskers", meow: () => console.log("Meow!") };

handlePet(myDog);
handlePet(myCat);
```
In `isDog`, the `pet is Dog` predicate tells TypeScript that if `isDog` returns `true`, then `pet` can be safely treated as a `Dog`. The runtime check `(pet as Dog).bark !== undefined` is the actual logic that determines this. A common mistake is to forget the `is` keyword in the return type, which makes it a regular boolean function that doesn't narrow types.

A particularly powerful pattern for type narrowing is **Discriminated Unions**. This involves a union type where each member shares a common, literal-typed property (the "discriminant"). By checking the value of this discriminant property, TypeScript can narrow down the specific member of the union.

```typescript
interface SuccessResult {
    status: "success";
    data: any;
}

interface ErrorResult {
    status: "error";
    message: string;
    code: number;
}

type APIResult = SuccessResult | ErrorResult;

function processResult(result: APIResult) {
    if (result.status === "success") {
        console.log("Success! Data:", result.data); // result is SuccessResult
    } else {
        console.log("Error! Message:", result.message, "Code:", result.code); // result is ErrorResult
    }
}

processResult({ status: "success", data: { user: "Alice" } });
processResult({ status: "error", message: "Failed to fetch", code: 500 });
```
The `status` property acts as the discriminant. When `result.status === "success"`, TypeScript knows `result` must be `SuccessResult` and allows access to `data`. If you forget to handle all cases in a discriminated union (e.g., in a `switch` statement), TypeScript will often warn you, which is a great safety net.

Now, let's turn our attention to **Assertion Functions**. While type guards narrow types within conditional blocks, assertion functions are used to assert that a condition *must be true* at a certain point in your code. If the condition is false, the function is expected to throw an error, preventing further execution. TypeScript understands this behavior and, if the function doesn't throw, it narrows the type of the variable for the rest of the scope.

There are two forms of assertion functions:
1.  `asserts condition`: This asserts that `condition` must be true. If the function returns, `condition` is guaranteed to be true for the remainder of the scope.
2.  `asserts parameterName is Type`: This asserts that `parameterName` must be of `Type`. If the function returns, `parameterName` is guaranteed to be `Type` for the remainder of the scope.

Assertion functions are excellent for validating inputs, checking for prerequisites, or handling situations where a `null` or `undefined` value would be a catastrophic error.

```typescript
function assertIsDefined<T>(val: T, message?: string): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new Error(message || `Expected 'val' to be defined, but received ${val}`);
    }
}

function processData(data: string | null | undefined) {
    assertIsDefined(data, "Data must be provided to process it."); // If this doesn't throw, data is string
    console.log("Processing data:", data.toUpperCase()); // OK, data is string
}

processData("hello"); // Works
// processData(null); // Throws Error: Data must be provided to process it.
// processData(undefined); // Throws Error: Data must be provided to process it.

interface UserSettings {
    theme: "dark" | "light";
}

let config: unknown = JSON.parse('{"theme": "dark"}');

function assertIsUserSettings(val: unknown): asserts val is UserSettings {
    if (typeof val !== 'object' || val === null || !('theme' in val)) {
        throw new Error("Invalid UserSettings object.");
    }
    const theme = (val as UserSettings).theme;
    if (theme !== "dark" && theme !== "light") {
        throw new Error("Invalid theme value in UserSettings.");
    }
}

assertIsUserSettings(config);
console.log(config.theme); // OK, config is narrowed to UserSettings
```
The `asserts val is NonNullable<T>` form is particularly powerful as it not only asserts a condition but also explicitly narrows the type of a variable. Assertion functions are typically used for "fail-fast" scenarios where an invalid state should immediately halt execution.

The key difference between type guards and assertion functions lies in their intent and behavior. Type guards are for conditional branching based on type, allowing you to gracefully handle different types. Assertion functions are for enforcing preconditions; if the condition isn't met, they throw an error, indicating an unrecoverable state. Choosing between them depends on whether you want to branch your logic or halt execution upon an unexpected type. Both are vital for building robust TypeScript applications that are safe both at compile-time and runtime.

#### Key concepts
*   **Type Guards:** Runtime checks that allow TypeScript to narrow the type of a variable within a specific code block (e.g., `typeof`, `instanceof`, `in`, equality checks).
*   **User-Defined Type Guards:** Functions that define a type predicate (`parameterName is Type`) as their return type, allowing custom runtime logic to narrow types for the compiler.
*   **Discriminated Unions:** A union type where each member has a common, literal-typed property (the "discriminant"), enabling type narrowing based on the discriminant's value.
*   **Assertion Functions:** Functions that assert a condition must be true. If the condition is false, they throw an error. TypeScript uses this to narrow types for the remainder of the scope if the function doesn't throw.
*   **`asserts condition`:** An assertion function signature that asserts a boolean condition.
*   **`asserts parameterName is Type`:** An assertion function signature that asserts a variable's type, narrowing it for the rest of the scope if no error is thrown.

#### Hands-on activity
**Activity: Building a Robust Data Parser with Type Guards and Assertion Functions**

You are building a data parsing utility that receives `unknown` input and needs to validate it against specific interfaces. You'll use type guards for conditional handling and assertion functions for critical validation.

**Instructions:**
1.  Define two interfaces: `ApiResponse` with `status: "success" | "error"` and `data?: any` or `message?: string`, and `UserPayload` with `id: string`, `name: string`, `email: string`.
2.  Create a user-defined type guard `isApiResponse(obj: unknown): obj is ApiResponse`. This guard should check for `status` property.
3.  Create a user-defined type guard `isUserPayload(obj: unknown): obj is UserPayload`. This guard should check for `id`, `name`, and `email` properties, ensuring they are strings.
4.  Create an assertion function `assertIsString(val: unknown, name: string): asserts val is string`. This function should throw if `val` is not a string.
5.  Implement a function `parseAndProcess(input: unknown)` that:
    *   Uses `isApiResponse` to check if the input is an API response.
    *   If it's an API response:
        *   If `status === "success"`, use `isUserPayload` to check if `data` is a `UserPayload`. If it is, log the user's name and email. Otherwise, log "Invalid user data in success response."
        *   If `status === "error"`, log the error message.
    *   If it's not an API response, use `assertIsString` to ensure the input is a string. If it is, log "Received non-API string input: " followed by the string in uppercase.

**Code Template:**
```typescript
interface ApiResponse {
    status: "success" | "error";
    data?: unknown; // Can be any data, or undefined for error
    message?: string; // Only for error
}

interface UserPayload {
    id: string;
    name: string;
    email: string;
}

// 1. User-defined type guard for ApiResponse
function isApiResponse(obj: unknown): obj is ApiResponse {
    return (
        typeof obj === 'object' && obj !== null &&
        'status' in obj &&
        (obj.status === 'success' || obj.status === 'error')
    );
}

// 2. User-defined type guard for UserPayload
function isUserPayload(obj: unknown): obj is UserPayload {
    return (
        typeof obj === 'object' && obj !== null &&
        'id' in obj && typeof obj.id === 'string' &&
        'name' in obj && typeof obj.name === 'string' &&
        'email' in obj && typeof obj.email === 'string'
    );
}

// 3. Assertion function for string
function assertIsString(val: unknown, name: string): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error(`Expected ${name} to be a string, but received ${typeof val}.`);
    }
}

// 4. Implement parseAndProcess function
function parseAndProcess(input: unknown) {
    if (isApiResponse(input)) {
        if (input.status === "success") {
            if (input.data && isUserPayload(input.data)) {
                console.log(`Processing user: ${input.data.name}, Email: ${input.data.email}`);
            } else {
                console.log("Invalid user data in success response.");
            }
        } else { // input.status === "error"
            console.error(`API Error: ${input.message || "Unknown error"}`);
        }
    } else {
        try {
            assertIsString(input, "input");
            console.log("Received non-API string input:", input.toUpperCase());
        } catch (error: any) {
            console.error("Input is neither API response nor a valid string:", error.message);
        }
    }
}

// --- Test your functions ---
console.log("--- Test Case 1: Valid API Success with User ---");
parseAndProcess({ status: "success", data: { id: "u1", name: "Alice", email: "alice@example.com" } });

console.log("\n--- Test Case 2: Valid API Error ---");
parseAndProcess({ status: "error", message: "User not found" });

console.log("\n--- Test Case 3: API Success with invalid data ---");
parseAndProcess({ status: "success", data: { id: 123, name: "Bob" } }); // Data is not UserPayload

console.log("\n--- Test Case 4: Non-API string input ---");
parseAndProcess("This is a simple message.");

console.log("\n--- Test Case 5: Non-API non-string input (should throw from assertIsString) ---");
parseAndProcess(12345); // This will cause assertIsString to throw
```

#### Assessment idea
1.  **Question:** You have a function `processValue(value: string | number | boolean)` that needs to perform different actions based on the type of `value`. You want to ensure that if `value` is a `string`, you can safely call `value.toUpperCase()`, and if `value` is a `number`, you can safely perform arithmetic operations.

    ```typescript
    function processValue(value: string | number | boolean) {
        if (/* Condition 1 */) {
            console.log(value.toUpperCase()); // Should be safe for string
        } else if (/* Condition 2 */) {
            console.log(value * 2); // Should be safe for number
        } else {
            console.log("Boolean value:", value); // Value is boolean
        }
    }
    ```
    Which of the following correctly fills `Condition 1` and `Condition 2` to achieve the desired type narrowing?
    A) `Condition 1`: `typeof value === 'string'`, `Condition 2`: `typeof value === 'number'`
    B) `Condition 1`: `value instanceof String`, `Condition 2`: `value instanceof Number`
    C) `Condition 1`: `value is string`, `Condition 2`: `value is number`
    D) `Condition 1`: `value !== undefined`, `Condition 2`: `value !== null`

    **Correct Answer:** A) `Condition 1`: `typeof value === 'string'`, `Condition 2`: `typeof value === 'number'`

    **Explanation:**
    *   `typeof` is a built-in type guard that correctly narrows primitive types like `string`, `number`, and `boolean`.
    *   `value.toUpperCase()` is a method available only on `string` types. `value * 2` is an operation for `number` types.
    *   Option B (`instanceof`) would not work for primitive string/number values, as they are not instances of `String` or `Number` objects unless explicitly created as such (e.g., `new String("hello")`), which is generally discouraged.
    *   Option C (`is string`) is for user-defined type guards, not for direct use in `if` conditions.
    *   Option D (`!== undefined`, `!== null`) would only narrow away `undefined` and `null`, which are not part of the `string | number | boolean` union anyway, and would not distinguish between `string`, `number`, or `boolean`.

2.  **Question:** You are writing a function `getUser(id: string | null)` that fetches a user by ID. Before proceeding with the fetch, you need to ensure the `id` is a non-null string. If `id` is `null`, it's a critical error, and the function should stop.

    ```typescript
    function assertIdIsString(id: string | null): /* Add assertion function signature here */ {
        if (id === null) {
            throw new Error("User ID cannot be null.");
        }
        // If we reach here, id is guaranteed to be a string.
    }

    function getUser(id: string | null) {
        assertIdIsString(id);
        // At this point, what is the type of 'id'?
        console.log("Fetching user with ID:", id.toUpperCase()); // Safe to call toUpperCase()
    }

    // What is the correct assertion function signature for assertIdIsString,
    // and what is the type of 'id' after the assertion in getUser?
    ```
    **Correct Answer:**
    Assertion function signature: `asserts id is string`
    Type of `id` after assertion in `getUser`: `string`

    **Explanation:**
    *   The assertion function `asserts id is string` tells TypeScript that if the function `assertIdIsString` returns without throwing an error, then the `id` parameter must be of type `string`.
    *   Inside `getUser`, after `assertIdIsString(id)` is called and doesn't throw, TypeScript narrows the type of `id` from `string | null` to `string`. This allows you to safely call `id.toUpperCase()` without a type error, as `id` is guaranteed to be a `string` at that point.

#### AI generation note
Create a 10-12 minute video lesson. Begin with a 2-minute animated overview of type guards (typeof, instanceof) and their role in narrowing types. Transition to a 4-minute live coding demo illustrating user-defined type guards and discriminated unions using the `Pet` and `APIResult` examples. Show how type safety is achieved within `if/else` blocks. Conclude with a 4-minute interactive code demo on assertion functions (`assertIsDefined`, `assertIsUserSettings`). Visually demonstrate how `asserts` changes the perceived type of a variable for the rest of the function's scope, and show how a thrown error prevents further execution. Include a reflection prompt asking learners when they would choose a type guard versus an assertion function. Ensure clear visual cues for type narrowing and error states.

---

## Module 6: Project Setup, Configuration, and Best Practices

Welcome to the final module of our TypeScript journey! Having mastered the core language features, advanced types, and modern JavaScript integration, it's time to bring everything together into well-structured, maintainable, and robust projects. This module will equip you with the essential tools and best practices for setting up, configuring, and managing TypeScript applications, ensuring your code is not only functional but also high-quality, testable, and scalable. We'll cover everything from compiler configuration to build tools, linting, testing, and strategies for large-scale development.

## Chapter 6.1 — Setting Up a TypeScript Project with `tsconfig.json`

#### Learning objectives
*   Initialize a new TypeScript project and understand the role of `tsconfig.json`.
*   Configure essential compiler options within `tsconfig.json` for different project needs.
*   Manage file inclusion and exclusion using `include`, `exclude`, and `files` properties.
*   Explain the significance of strict type checking and other advanced `tsconfig.json` settings.
*   Identify and troubleshoot common configuration mistakes in TypeScript projects.

#### Detailed lesson content
Embarking on any TypeScript project begins with proper setup, and at the heart of every TypeScript project lies the `tsconfig.json` file. This configuration file dictates how the TypeScript compiler (`tsc`) behaves, from which files it should process to how it should transpile your code into JavaScript. Without a `tsconfig.json`, the compiler will use default settings, which are often not optimal for real-world applications. To kickstart a project, you typically run `tsc --init` in your project root. This command generates a `tsconfig.json` file pre-populated with common options, most of which are commented out. Your task as a developer is to uncomment and adjust these options to suit your project's specific requirements.

Let's delve into some of the most crucial compiler options you'll encounter. The `target` option specifies the ECMAScript target version for the output JavaScript. For instance, setting `"target": "es2018"` means your TypeScript code will be transpiled into JavaScript compatible with ES2018 features. Choosing an appropriate target is vital for browser compatibility or Node.js versions. If you target an older version, TypeScript will polyfill or transpile newer language features down to the specified target, ensuring broader compatibility. Conversely, `module` defines the module system for the generated JavaScript code, such as `"commonjs"`, `"esnext"`, or `"amd"`. For modern web applications, `"esnext"` or `"es2020"` is often preferred, allowing bundlers like Webpack or Rollup to handle module resolution efficiently. For Node.js projects, `"commonjs"` is a traditional choice, though newer Node.js versions increasingly support ES modules.

Another fundamental pair of options are `outDir` and `rootDir`. `outDir` specifies the directory where the transpiled JavaScript files will be emitted, typically `dist` or `build`. `rootDir`, on the other hand, designates the root directory of your TypeScript source files. By default, `rootDir` is inferred from the common parent directory of all non-declaration input files. Explicitly setting `rootDir` helps maintain a consistent project structure and prevents `tsc` from creating an output directory structure that mirrors your entire project, including non-source files. For example, if your source code lives in `src/`, you'd set `"rootDir": "./src"` and `"outDir": "./dist"`. This ensures that `src/index.ts` compiles to `dist/index.js`, maintaining the relative path structure.

The `strict` option is a cornerstone of robust TypeScript development. When `"strict": true` is enabled, it activates a suite of stricter type-checking options, including `noImplicitAny`, `noImplicitReturns`, `noUnusedLocals`, `noUnusedParameters`, `strictNullChecks`, `strictFunctionTypes`, `strictPropertyInitialization`, and `alwaysStrict`. While initially it might seem more challenging, enabling strict mode from the outset is highly recommended. It significantly reduces the likelihood of runtime errors by catching many common programming mistakes during compilation. For instance, `noImplicitAny` forces you to explicitly type variables, parameters, and return values that TypeScript cannot infer, preventing `any` from silently propagating throughout your codebase. `strictNullChecks` is particularly powerful, requiring you to explicitly handle `null` and `undefined` values, which are notorious sources of bugs in JavaScript.

Beyond these, several other options are crucial for a well-configured project. `esModuleInterop` allows for better compatibility when importing CommonJS modules into ES module-style TypeScript code, often resolving issues with default imports. `forceConsistentCasingInFileNames` ensures that all references to a file use the same casing, which is vital for cross-platform compatibility, especially between case-sensitive (Linux) and case-insensitive (Windows/macOS) file systems. `skipLibCheck` can speed up compilation by skipping type checking of declaration files (`.d.ts`) from external libraries, which are generally assumed to be correct. While helpful for performance, be cautious if you suspect issues within a library's type definitions.

Managing which files TypeScript processes is handled by `include`, `exclude`, and `files`. `include` specifies an array of glob patterns relative to the `tsconfig.json` file to include in the program. For example, `["src/**/*.ts"]` will include all `.ts` files within the `src` directory and its subdirectories. `exclude` is the inverse, specifying files or directories to omit from compilation, commonly `["node_modules", "dist"]`. Finally, `files` allows you to explicitly list individual files to be included, which is less common for larger projects but useful for small scripts or specific compilation units. A common mistake is not correctly configuring `include` and `exclude`, leading to either missing files during compilation or unnecessary files being processed, slowing down the build. Always double-check these paths, especially when restructuring your project.

In summary, a thoughtfully configured `tsconfig.json` is your project's blueprint, guiding the TypeScript compiler to produce robust, efficient, and maintainable JavaScript. Taking the time to understand and fine-tune these settings will save you countless hours debugging runtime issues and ensure your project adheres to best practices from the very beginning.

#### Key concepts
*   **`tsconfig.json`**: The configuration file for a TypeScript project, dictating compiler options and file inclusion/exclusion.
*   **`tsc --init`**: Command-line utility to generate a default `tsconfig.json` file.
*   **`target`**: Compiler option specifying the ECMAScript version for the output JavaScript.
*   **`module`**: Compiler option defining the module system (e.g., CommonJS, ESNext) for the generated JavaScript.
*   **`outDir`**: Compiler option specifying the output directory for compiled JavaScript files.
*   **`rootDir`**: Compiler option indicating the root directory of TypeScript source files.
*   **`strict`**: A meta-option that enables a suite of strict type-checking flags, promoting safer code.
*   **`noImplicitAny`**: A strict mode flag that disallows variables, parameters, or return values from implicitly having the `any` type.
*   **`strictNullChecks`**: A strict mode flag that requires explicit handling of `null` and `undefined` values.
*   **`esModuleInterop`**: Compiler option enabling better compatibility for importing CommonJS modules into ES module-style TypeScript.
*   **`include`/`exclude`**: `tsconfig.json` properties used to specify which files and directories should be included or excluded from the TypeScript compilation process.

#### Hands-on activity
Let's set up a new TypeScript project from scratch and configure its `tsconfig.json`.

1.  **Initialize Project:**
    Create a new directory named `ts-project-setup`. Navigate into it in your terminal.
    ```bash
    mkdir ts-project-setup
    cd ts-project-setup
    npm init -y
    npm install typescript --save-dev
    npx tsc --init
    ```
2.  **Configure `tsconfig.json`:**
    Open the generated `tsconfig.json`. Modify the following options:
    ```json
    {
      "compilerOptions": {
        "target": "es2020",             /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ESNext'. */
        "module": "esnext",             /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'. */
        "outDir": "./dist",             /* Redirect output structure to the directory. */
        "rootDir": "./src",             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
        "strict": true,                 /* Enable all strict type-checking options. */
        "esModuleInterop": true,        /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
        "forceConsistentCasingInFileNames": true, /* Ensure that casing is consistent throughout a file path. */
        "skipLibCheck": true,           /* Skip type checking all .d.ts files. */
        "declaration": true,            /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
        "sourceMap": true,              /* Create source map files for emitted JavaScript files. */
        "allowJs": false,               /* Allow JavaScript files to be a part of your program. Use the `checkJs` option to get errors from these files. */
        "noEmitOnError": true,          /* Do not emit outputs if any errors were reported. */
      },
      "include": [
        "src/**/*.ts"
      ],
      "exclude": [
        "node_modules",
        "**/*.test.ts"
      ]
    }
    ```
3.  **Create Source Files:**
    Create a `src` directory and add an `index.ts` file inside it.
    ```typescript
    // src/index.ts
    function greet(name: string): string {
        if (name === null) { // This will trigger a strictNullChecks error if not handled
            console.warn("Name cannot be null.");
            return "Hello, Guest!";
        }
        return `Hello, ${name.toUpperCase()}!`;
    }

    const userName: string = "Alice";
    console.log(greet(userName));

    // Example of implicit any (will error with strict: true)
    // function processData(data) { // data implicitly has 'any' type
    //     console.log(data.length);
    // }
    // processData("test");

    // Corrected version
    function processData(data: string | any[]): void {
        console.log(data.length);
    }
    processData("test");
    processData([1, 2, 3]);
    ```
4.  **Compile and Run:**
    Add a build script to your `package.json`:
    ```json
    // package.json
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js"
    },
    ```
    Now, run:
    ```bash
    npm run build
    npm run start
    ```
    Observe the output in `dist/`. You should see `index.js`, `index.d.ts`, and `index.js.map`. Experiment by changing `target` or `strict` to `false` and observe the compiler behavior. Try to introduce an implicit `any` error or a `null` value without checking it to see `strict` mode in action.

#### Assessment idea
1.  **Question:** You are setting up a new TypeScript project that needs to run on older browsers (ES5 compatible) but also leverage modern ES module syntax for bundling. Your source files are in `src/` and compiled output should go to `build/`. Which of the following `tsconfig.json` configurations is most appropriate for the `compilerOptions` section?
    A)
    ```json
    {
      "target": "esnext",
      "module": "commonjs",
      "outDir": "./build",
      "rootDir": "./src"
    }
    ```
    B)
    ```json
    {
      "target": "es5",
      "module": "esnext",
      "outDir": "./build",
      "rootDir": "./src"
    }
    ```
    C)
    ```json
    {
      "target": "es5",
      "module": "commonjs",
      "outDir": "./build",
      "rootDir": "./src"
    }
    ```
    D)
    ```json
    {
      "target": "esnext",
      "module": "esnext",
      "outDir": "./build",
      "rootDir": "./src"
    }
    ```
    **Correct Answer:** B)
    **Explanation:** The requirement is for ES5 compatibility (`target: "es5"`) for older browsers, while still using modern ES module syntax (`module: "esnext"`) for bundling. Option B correctly combines these two, allowing TypeScript to transpile down to ES5 while preserving ES module syntax for bundlers to process. Options A and D would target newer JavaScript versions, potentially breaking older browsers. Option C would use CommonJS modules, which is not the desired modern ES module syntax for bundling.

2.  **Question:** Consider the following `tsconfig.json` snippet and TypeScript code. What will be the outcome when you try to compile `index.ts`?
    `tsconfig.json`:
    ```json
    {
      "compilerOptions": {
        "strict": true,
        "outDir": "./dist"
      },
      "include": ["src/**/*.ts"]
    }
    ```
    `src/index.ts`:
    ```typescript
    function calculateArea(width: number, height: number) {
        return width * height;
    }

    let myWidth: number | null = 10;
    let myHeight: number = 5;

    const area = calculateArea(myWidth, myHeight);
    console.log(`Area: ${area}`);
    ```
    A) The code will compile successfully, and `Area: 50` will be logged.
    B) The code will compile successfully, but `Area: NaN` will be logged if `myWidth` is `null` at runtime.
    C) The TypeScript compiler will report a type error because `myWidth` could be `null`.
    D) The TypeScript compiler will report an error because `calculateArea` does not specify a return type.

    **Correct Answer:** C)
    **Explanation:** With `"strict": true` enabled in `tsconfig.json`, `strictNullChecks` is active. This means TypeScript will not allow `null` or `undefined` values to be assigned to types that don't explicitly allow them. In this case, `calculateArea` expects `width: number`, but `myWidth` is typed as `number | null`. Passing `myWidth` directly to `calculateArea` without a null check will result in a type error at compile time, preventing a potential runtime error if `myWidth` were `null`. The error message would be similar to "Argument of type 'number | null' is not assignable to parameter of type 'number'."

#### AI generation note
Create a 10-minute interactive lab walkthrough video. Start with a terminal showing `tsc --init` and the initial `tsconfig.json`. Then, guide the learner through modifying key options like `target`, `module`, `outDir`, `rootDir`, and especially `strict`. Use a side-by-side view to show changes in `tsconfig.json` and the resulting compiled JavaScript in `dist/`. Demonstrate how `strict: true` catches errors by intentionally introducing an implicit `any` and a `null` value without a check, then show how to fix them. Include a visual overlay explaining each `compilerOption` as it's modified. The interactive element will be a small coding challenge where the user has to fix a `tsconfig.json` to correctly compile a given `src/index.ts` file that has strict mode violations.

## Chapter 6.2 — Integrating TypeScript with Build Tools (Webpack/Rollup)

#### Learning objectives
*   Understand the necessity of build tools like Webpack or Rollup in modern TypeScript development.
*   Configure Webpack to bundle TypeScript applications using `ts-loader`.
*   Set up Rollup for efficient TypeScript library bundling, emphasizing tree-shaking benefits.
*   Compare and contrast Webpack and Rollup for different project types.
*   Troubleshoot common issues related to TypeScript integration with build tools, such as source map configuration.

#### Detailed lesson content
While the TypeScript compiler (`tsc`) is excellent at transpiling `.ts` files into `.js`, it primarily focuses on type checking and language transformation. For modern web applications and libraries, you often need more sophisticated processing, such as bundling multiple JavaScript files into one or a few, optimizing assets, handling CSS and images, and enabling features like hot module replacement. This is where build tools like Webpack and Rollup become indispensable. They act as module bundlers, taking your entire application (TypeScript, JavaScript, CSS, images, etc.) and transforming it into a set of optimized static assets ready for deployment.

Webpack is a powerful and highly configurable module bundler, widely used for complex single-page applications. It treats every file in your project as a module and builds a dependency graph, then bundles all these modules into one or more output files. To integrate TypeScript with Webpack, you'll primarily use `ts-loader`. This loader tells Webpack how to process `.ts` and `.tsx` files, essentially delegating the TypeScript compilation to `tsc` itself, but within Webpack's build pipeline.

Let's walk through a basic Webpack setup for TypeScript. First, you'll need to install Webpack, `webpack-cli`, and `ts-loader`, along with TypeScript itself:
```bash
npm install webpack webpack-cli ts-loader typescript --save-dev
```
Next, you'll create a `webpack.config.js` file in your project root. This file is a standard Node.js module that exports a configuration object. Inside this object, you'll define entry points, output paths, and most importantly, rules for how different file types should be processed. For TypeScript, a typical rule looks like this:
```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to files ending with .ts
        use: 'ts-loader', // Use ts-loader for these files
        exclude: /node_modules/, // Don't process files in node_modules
      },
    ],
  },
  devtool: 'inline-source-map', // Essential for debugging TypeScript in the browser
};
```
In this configuration, `ts-loader` is specified to handle all files ending with `.ts`. The `resolve.extensions` array is crucial; it tells Webpack which file extensions to resolve when importing modules, allowing you to write `import { MyClass } from './my-class'` instead of `import { MyClass } from './my-class.ts'`. The `devtool` option is also incredibly important for development. Setting it to `'inline-source-map'` or `'source-map'` ensures that when you debug your bundled JavaScript in the browser, you can see and step through your original TypeScript source code, which is a massive productivity booster. Without source maps, debugging transpiled and bundled code can be a nightmare.

Rollup, on the other hand, is another popular module bundler, often favored for building JavaScript libraries and components due to its highly efficient tree-shaking capabilities. Tree-shaking is a process where unused code is eliminated from the final bundle, resulting in smaller, faster, and more optimized output. While Webpack also supports tree-shaking, Rollup's approach is often considered more aggressive and effective for libraries. To integrate TypeScript with Rollup, you'll typically use `@rollup/plugin-typescript`.

Here’s a basic Rollup configuration for a TypeScript library:
```bash
npm install rollup @rollup/plugin-typescript typescript --save-dev
```
Then, create a `rollup.config.js`:
```javascript
// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'; // For minification

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js', // CommonJS for Node.js
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js', // ES Module for modern browsers/bundlers
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // Rollup plugin for TypeScript
    terser(),     // Minify the output
  ],
};
```
Notice how Rollup allows for multiple output formats from a single build, which is ideal for libraries that need to support different environments (e.g., CommonJS for Node.js and ES Modules for browsers). The `@rollup/plugin-typescript` handles the TypeScript compilation, and `terser` is a common plugin for minification.

Choosing between Webpack and Rollup often comes down to your project's nature. Webpack excels in complex applications with many assets (CSS, images, fonts) and features like hot module replacement, code splitting, and a vast ecosystem of loaders and plugins. It's a general-purpose bundler. Rollup shines for libraries and smaller applications where bundle size and tree-shaking efficiency are paramount. It produces cleaner, flatter bundles, especially for ES Modules. For a full-fledged application with a UI framework, Webpack is often the default choice. For a reusable utility library, Rollup might be a better fit.

Common mistakes when integrating TypeScript with build tools include:
1.  **Missing `ts-loader` or `@rollup/plugin-typescript`**: Without the appropriate loader/plugin, the bundler won't know how to process `.ts` files.
2.  **Incorrect `resolve.extensions`**: If `.ts` is not included, Webpack/Rollup might fail to find your TypeScript modules.
3.  **Source maps issues**: Forgetting `devtool` in Webpack or `sourcemap: true` in Rollup makes debugging extremely difficult. Always ensure source maps are correctly configured, especially in development environments.
4.  **`tsconfig.json` conflicts**: Ensure your `tsconfig.json` (especially `module` and `target`) is compatible with your bundler's expectations. For instance, if Webpack is handling module resolution, you might set `module` to `esnext` in `tsconfig.json` and let Webpack transpile it further.
5.  **Performance**: Large projects can suffer from slow build times. Consider options like `fork-ts-checker-webpack-plugin` with Webpack to run type checking in a separate process, speeding up builds.

By effectively integrating TypeScript with a build tool, you gain powerful capabilities for optimizing, debugging, and deploying your applications and libraries, moving beyond simple compilation to a robust development workflow.

#### Key concepts
*   **Module Bundler**: A tool (like Webpack or Rollup) that takes multiple JavaScript modules and their dependencies and combines them into one or more optimized bundles for deployment.
*   **Webpack**: A highly configurable module bundler popular for complex web applications, known for its extensive plugin ecosystem and features like hot module replacement and code splitting.
*   **Rollup**: A module bundler often preferred for JavaScript libraries and components, known for its efficient tree-shaking and cleaner, flatter bundles.
*   **`ts-loader`**: A Webpack loader that enables Webpack to process and compile TypeScript files.
*   **`@rollup/plugin-typescript`**: A Rollup plugin that enables Rollup to process and compile TypeScript files.
*   **Tree-shaking**: An optimization technique used by bundlers to eliminate unused code from the final bundle, reducing its size.
*   **Source Maps**: Files that map the transpiled/bundled code back to the original source code, essential for debugging in development environments.
*   **`webpack.config.js`**: The configuration file for Webpack.
*   **`rollup.config.js`**: The configuration file for Rollup.

#### Hands-on activity
Let's set up a basic Webpack project with TypeScript.

1.  **Initialize Project & Install Dependencies:**
    Create a new directory `ts-webpack-project`.
    ```bash
    mkdir ts-webpack-project
    cd ts-webpack-project
    npm init -y
    npm install typescript webpack webpack-cli ts-loader --save-dev
    npx tsc --init
    ```
2.  **Configure `tsconfig.json`:**
    Modify `tsconfig.json` to suit Webpack's needs. We'll set `module` to `esnext` and `target` to `es2020`, letting Webpack handle the final JavaScript output.
    ```json
    {
      "compilerOptions": {
        "target": "es2020",
        "module": "esnext", // Let Webpack handle module resolution
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true,
        "sourceMap": true // Ensure source maps are generated
      },
      "include": [
        "src/**/*.ts"
      ]
    }
    ```
3.  **Create Source Files:**
    Create a `src` directory. Inside `src`, create `greeter.ts` and `index.ts`.
    `src/greeter.ts`:
    ```typescript
    export class Greeter {
      constructor(private message: string) {}

      greet(): string {
        return `Hello from Greeter: ${this.message}`;
      }
    }
    ```
    `src/index.ts`:
    ```typescript
    import { Greeter } from './greeter';

    const myGreeter = new Greeter("TypeScript and Webpack!");
    console.log(myGreeter.greet());

    function add(a: number, b: number): number {
        return a + b;
    }

    const sum = add(5, 3);
    console.log(`The sum is: ${sum}`);
    ```
4.  **Create `webpack.config.js`:**
    ```javascript
    // webpack.config.js
    const path = require('path');

    module.exports = {
      mode: 'development', // Set to 'production' for optimized output
      entry: './src/index.ts', // Your main TypeScript file
      output: {
        filename: 'bundle.js', // The name of the output bundle
        path: path.resolve(__dirname, 'dist'), // The output directory
      },
      resolve: {
        extensions: ['.ts', '.js'], // Tell Webpack to resolve .ts and .js files
      },
      module: {
        rules: [
          {
            test: /\.ts$/, // Apply this rule to .ts files
            use: 'ts-loader', // Use ts-loader for transpilation
            exclude: /node_modules/, // Exclude node_modules from processing
          },
        ],
      },
      devtool: 'inline-source-map', // Generate source maps for debugging
    };
    ```
5.  **Add Build Script & Run:**
    Add a build script to your `package.json`:
    ```json
    // package.json
    "scripts": {
      "build": "webpack",
      "start": "node dist/bundle.js"
    },
    ```
    Run `npm run build`. This will compile your TypeScript and bundle it into `dist/bundle.js`.
    Then run `npm run start` to execute the bundled application.
    Open `dist/bundle.js` and `dist/bundle.js.map` to observe the generated output and source map.

#### Assessment idea
1.  **Question:** You are developing a new TypeScript library that needs to be as small as possible and highly efficient, leveraging tree-shaking to remove unused exports. Which build tool would generally be the better choice for this scenario, and what is a key plugin you would use for TypeScript integration?
    A) Webpack, using `babel-loader`
    B) Rollup, using `@rollup/plugin-typescript`
    C) Webpack, using `ts-loader`
    D) Rollup, using `rollup-plugin-babel`

    **Correct Answer:** B)
    **Explanation:** Rollup is generally preferred for building JavaScript libraries due to its superior tree-shaking capabilities, which result in smaller bundles. The `@rollup/plugin-typescript` is the standard plugin for integrating TypeScript with Rollup. While Webpack with `ts-loader` can also build libraries and perform tree-shaking, Rollup is often considered more optimized for this specific use case. `babel-loader` and `rollup-plugin-babel` are for Babel integration, not direct TypeScript compilation.

2.  **Question:** A developer is trying to debug their TypeScript application in the browser after bundling it with Webpack, but they can only see the transpiled JavaScript code, not their original TypeScript source. Which `webpack.config.js` option is most likely missing or incorrectly configured?
    A) `entry`
    B) `output.filename`
    C) `resolve.extensions`
    D) `devtool`

    **Correct Answer:** D)
    **Explanation:** The `devtool` option in `webpack.config.js` is responsible for configuring how source maps are generated. Source maps are crucial for mapping the bundled JavaScript back to the original TypeScript source files, allowing developers to debug their original code in the browser's developer tools. If `devtool` is missing or set to a value that doesn't generate source maps (e.g., `false` or `none`), the developer will only see the transpiled JavaScript. The other options (`entry`, `output.filename`, `resolve.extensions`) are essential for bundling but do not directly control source map generation for debugging.

#### AI generation note
Create a 12-minute live coding demonstration. Start with a simple TypeScript project. First, show how `tsc` compiles it. Then, introduce Webpack. Live-code the installation of Webpack, `ts-loader`, and the creation of `webpack.config.js`. Explain each section (entry, output, resolve, module rules, devtool) as you type. Demonstrate compilation with `npm run build` and show the `bundle.js` and `bundle.js.map` files. Then, briefly introduce Rollup, explaining its niche for libraries. Show a minimal `rollup.config.js` with `@rollup/plugin-typescript` and `terser` and compile a simple library. Use visual cues (highlighting code, drawing arrows on screen) to emphasize the flow from `.ts` to bundled `.js`. The interactive element will be a drag-and-drop exercise where the user matches `webpack.config.js` properties to their descriptions or common values.

## Chapter 6.3 — Linting and Formatting with ESLint and Prettier

#### Learning objectives
*   Explain the importance of consistent code style and quality in collaborative projects.
*   Set up ESLint for TypeScript projects, including necessary plugins and configuration.
*   Integrate Prettier for automatic code formatting and understand its role in maintaining style consistency.
*   Configure ESLint and Prettier to work together without conflicts.
*   Implement editor integration for real-time linting and formatting feedback.

#### Detailed lesson content
In any software development project, especially those involving multiple contributors, maintaining a consistent code style and ensuring code quality are paramount. Inconsistent styling can make code harder to read, understand, and maintain, leading to unnecessary cognitive load and potential bugs. This is where linting and formatting tools come into play. Linting tools analyze your code for potential errors, stylistic inconsistencies, and adherence to best practices, while formatting tools automatically reformat your code to a predefined style. For TypeScript projects, the go-to tools are ESLint for linting and Prettier for formatting.

ESLint is a powerful and highly configurable static analysis tool that can identify problematic patterns in JavaScript and TypeScript code. It's extensible, allowing you to add plugins for specific frameworks, environments, or languages (like TypeScript). To set up ESLint for TypeScript, you'll need a few packages:
```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```
*   `eslint`: The core ESLint library.
*   `@typescript-eslint/parser`: A parser that allows ESLint to understand TypeScript syntax.
*   `@typescript-eslint/eslint-plugin`: A plugin containing a rich set of ESLint rules specifically for TypeScript code.

After installation, you can initialize ESLint with `npx eslint --init`. This command will guide you through a series of questions to generate an `.eslintrc.js` (or `.json`, `.yaml`) configuration file. For a TypeScript project, you'll typically choose to use a popular style guide (like Airbnb or Google, or a custom one), then ensure it's configured to work with TypeScript. A basic `.eslintrc.js` might look like this:
```javascript
// .eslintrc.js
module.exports = {
  root: true, // Ensures ESLint stops looking for config files in parent directories
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  plugins: [
    '@typescript-eslint', // Enables the TypeScript ESLint plugin
  ],
  extends: [
    'eslint:recommended', // Uses the recommended rules from ESLint
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // You might add 'plugin:@typescript-eslint/recommended-requiring-type-checking'
    // if you have a tsconfig.json and want more advanced type-aware rules.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    // project: './tsconfig.json', // Required for rules that need type information
  },
  rules: {
    // Custom rules can be added here, or override extended rules
    'no-console': 'warn', // Warns about console.log statements
    'indent': ['error', 2], // Enforce 2-space indentation
    'linebreak-style': ['error', 'unix'], // Enforce Unix-style line endings
    'quotes': ['error', 'single'], // Enforce single quotes
    'semi': ['error', 'always'], // Enforce semicolons
  },
};
```
The `extends` property is powerful, allowing you to inherit configurations from other ESLint presets or plugins. `plugin:@typescript-eslint/recommended` provides a good starting point for TypeScript-specific linting. If you want more advanced rules that require type information (like checking for unused variables across module boundaries or enforcing consistent return types), you can also extend `plugin:@typescript-eslint/recommended-requiring-type-checking`, but this requires setting `parserOptions.project` to your `tsconfig.json` path.

Prettier, on the other hand, is an opinionated code formatter. Unlike ESLint, which focuses on code quality and potential errors, Prettier's sole purpose is to reformat your code to a consistent style. It parses your code and then prints it with its own rules, ensuring that everyone on the team adheres to the same visual style without manual effort. This is particularly useful because it eliminates style debates during code reviews.

To integrate Prettier:
```bash
npm install prettier --save-dev
```
You can create a `.prettierrc` file (e.g., `.prettierrc.json`) to configure its options:
```json
// .prettierrc.json
{
  "semi": true,          // Print semicolons at the end of statements.
  "singleQuote": true,   // Use single quotes instead of double quotes.
  "tabWidth": 2,         // Specify the number of spaces per indentation-level.
  "trailingComma": "all",// Print trailing commas wherever possible.
  "printWidth": 100      // Specify the line length that the printer will wrap on.
}
```
Now, how do ESLint and Prettier work together? They have distinct roles, but their rules can overlap. For example, both might have rules about indentation or semicolons. To prevent them from conflicting, you use `eslint-config-prettier` and `eslint-plugin-prettier`.
```bash
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```
`eslint-config-prettier` disables all ESLint rules that might conflict with Prettier's formatting rules. `eslint-plugin-prettier` runs Prettier as an ESLint rule, reporting formatting differences as ESLint errors. You add them to your `.eslintrc.js` like this:
```javascript
// .eslintrc.js (updated)
module.exports = {
  // ... other configs
  extends: [
    // ... other extends
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  rules: {
    // ... your custom rules
    // Make sure Prettier rules are defined in .prettierrc and not here to avoid conflicts
    // 'prettier/prettier': 'error', // This rule is automatically added by 'plugin:prettier/recommended'
  },
};
```
The `plugin:prettier/recommended` extension is a shortcut that does two things: it adds `eslint-plugin-prettier` to your plugins and `eslint-config-prettier` to your extends. Make sure this `extends` entry is *always the last one* in your `extends` array, so it can override any conflicting rules from previous extensions.

Finally, integrating these tools into your development workflow and editor is crucial. You can add scripts to your `package.json` to run linting and formatting:
```json
// package.json
"scripts": {
  "lint": "eslint \"{src,apps,libs}/**/*.ts\" --fix",
  "format": "prettier --write \"{src,apps,libs}/**/*.ts\""
},
```
The `--fix` flag for ESLint automatically fixes many linting issues, and `--write` for Prettier formats files in place. Most modern IDEs (like VS Code) have extensions for ESLint and Prettier that provide real-time feedback, highlight issues as you type, and can even automatically fix/format on save. This immediate feedback loop is invaluable for maintaining code quality without interrupting your development flow.

Common mistakes include:
1.  **ESLint and Prettier conflicts**: Not using `eslint-config-prettier` can lead to tools fighting over style rules. Always ensure `eslint-config-prettier` is the last item in your `extends` array.
2.  **Missing TypeScript parser/plugin**: Forgetting `@typescript-eslint/parser` or `@typescript-eslint/eslint-plugin` will prevent ESLint from correctly parsing or linting TypeScript code.
3.  **Ignoring linting errors**: While `--fix` can resolve many issues, some require manual intervention. Don't push code with linting errors; treat them as build failures.
4.  **Inconsistent configuration**: Ensure your `.prettierrc` and ESLint rules (especially those that Prettier doesn't handle, like `no-console`) are aligned with your team's coding standards.

By leveraging ESLint and Prettier, you establish a robust system for maintaining code quality, consistency, and readability, fostering a healthier and more productive development environment.

#### Key concepts
*   **Linting**: The process of analyzing source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.
*   **Formatting**: The process of automatically adjusting the visual presentation of code (e.g., indentation, line breaks, spacing) to adhere to a consistent style guide.
*   **ESLint**: A widely used static analysis tool for identifying problematic patterns in JavaScript and TypeScript code, highly configurable and extensible.
*   **Prettier**: An opinionated code formatter that enforces a consistent style by parsing code and re-printing it with its own rules.
*   **`@typescript-eslint/parser`**: An ESLint parser that enables ESLint to understand TypeScript syntax.
*   **`@typescript-eslint/eslint-plugin`**: An ESLint plugin providing TypeScript-specific linting rules.
*   **`eslint-config-prettier`**: An ESLint configuration that turns off all ESLint rules that are unnecessary or might conflict with Prettier.
*   **`eslint-plugin-prettier`**: An ESLint plugin that runs Prettier as an ESLint rule, reporting formatting differences as ESLint errors.
*   **`--fix` / `--write`**: Command-line flags for ESLint and Prettier, respectively, to automatically fix/format files in place.

#### Hands-on activity
Let's set up ESLint and Prettier in a new TypeScript project.

1.  **Initialize Project & Install Dependencies:**
    Create a new directory `ts-lint-format`.
    ```bash
    mkdir ts-lint-format
    cd ts-lint-format
    npm init -y
    npm install typescript eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier --save-dev
    npx tsc --init
    ```
2.  **Configure `tsconfig.json`:**
    Ensure `tsconfig.json` is present and correctly configured (e.g., `strict: true`, `sourceMap: true`).
    ```json
    {
      "compilerOptions": {
        "target": "es2020",
        "module": "esnext",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true,
        "sourceMap": true
      },
      "include": [
        "src/**/*.ts"
      ]
    }
    ```
3.  **Configure `.eslintrc.js`:**
    Create `.eslintrc.js` in the project root.
    ```javascript
    // .eslintrc.js
    module.exports = {
      root: true,
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Must be last to disable conflicting rules
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        // project: './tsconfig.json', // Uncomment if you use rules that require type information
      },
      rules: {
        'no-console': 'warn', // Example custom rule
        // Prettier rules are handled by prettierrc, not here.
      },
    };
    ```
4.  **Configure `.prettierrc.json`:**
    Create `.prettierrc.json` in the project root.
    ```json
    // .prettierrc.json
    {
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "trailingComma": "all",
      "printWidth": 100
    }
    ```
5.  **Create Source File with Errors:**
    Create a `src` directory and `index.ts` with some intentional linting and formatting issues.
    `src/index.ts`:
    ```typescript
    // src/index.ts
    function calculate_sum (  a :  number, b: number )  {
        console.log("Calculating sum...");
        const result = a+b;
        return result
    }

    const x = 10;
    const y = 20;
    let message = "The sum is: " + calculate_sum(x,y);
    console.log(message);
    ```
6.  **Add Scripts & Run:**
    Add scripts to `package.json`:
    ```json
    // package.json
    "scripts": {
      "lint": "eslint \"src/**/*.ts\"",
      "lint:fix": "eslint \"src/**/*.ts\" --fix",
      "format": "prettier --write \"src/**/*.ts\"",
      "check-format": "prettier --check \"src/**/*.ts\""
    },
    ```
    First, run `npm run lint`. Observe the errors.
    Then, run `npm run format`. Check `src/index.ts` again. Many formatting issues should be fixed.
    Finally, run `npm run lint:fix`. This should fix remaining ESLint-fixable issues.
    You'll notice `no-console` is a warning, not an error, as configured.

#### Assessment idea
1.  **Question:** Your team is experiencing inconsistent code styles across different developers, leading to friction during code reviews. You want to enforce a consistent style automatically without needing manual intervention for basic formatting, but also catch potential logical errors or bad practices. Which combination of tools and their primary roles would best address this problem?
    A) ESLint for automatic formatting, and Prettier for catching logical errors.
    B) Prettier for automatic formatting, and ESLint for catching logical errors and stylistic issues.
    C) TypeScript compiler for formatting, and ESLint for type checking.
    D) Webpack for formatting, and Rollup for linting.

    **Correct Answer:** B)
    **Explanation:** Prettier's primary role is automatic code formatting, ensuring consistent style. ESLint's primary role is linting, which includes catching potential logical errors, enforcing best practices, and identifying stylistic issues that Prettier might not cover (e.g., `no-console`, `no-unused-vars`). This combination provides both automatic style consistency and code quality checks. Options A reverses the roles. Options C and D involve tools not primarily designed for linting or formatting.

2.  **Question:** You've set up ESLint and Prettier in your TypeScript project. However, when you run `npm run lint`, you notice that ESLint is reporting errors for formatting issues (like indentation or missing semicolons) that Prettier should be handling. What is the most likely reason for this conflict, and how would you typically resolve it in your `.eslintrc.js`?
    A) `@typescript-eslint/parser` is missing, preventing ESLint from understanding TypeScript. You need to install it.
    B) `eslint-config-prettier` is not included or is not the last item in the `extends` array in `.eslintrc.js`.
    C) `prettier --write` was not run, so the files are still unformatted.
    D) The `target` option in `tsconfig.json` is set incorrectly, causing compilation issues.

    **Correct Answer:** B)
    **Explanation:** The scenario describes a conflict where ESLint's stylistic rules are clashing with Prettier's formatting. This is a classic problem resolved by `eslint-config-prettier`. This configuration disables all ESLint rules that might conflict with Prettier. It's crucial that `eslint-config-prettier` (or `plugin:prettier/recommended`, which includes it) is the *last* item in the `extends` array in `.eslintrc.js` to ensure it overrides any conflicting rules from previous extensions. Option A would cause parsing errors, not formatting conflicts. Option C is about running Prettier, not resolving the conflict between the tools. Option D relates to TypeScript compilation, not linting/formatting.

#### AI generation note
Create an 11-minute animated explanation and live coding demo. Start with an animation illustrating the problem of inconsistent code style. Then, transition to a live coding session. Show the installation of ESLint and Prettier, then guide the user through creating and configuring `.eslintrc.js` and `.prettierrc.json`. Intentionally introduce formatting and linting errors in a `src/index.ts` file. First, run `eslint` to show linting errors, then `prettier --write` to fix formatting, and finally `eslint --fix` to fix remaining fixable linting errors. Visually highlight the changes in the code file. Emphasize the `extends` order in `.eslintrc.js` for `plugin:prettier/recommended`. The interactive element will be a code snippet with mixed formatting and linting issues, and the user has to identify which tool (ESLint or Prettier) would fix each specific issue.

## Chapter 6.4 — Testing TypeScript Applications (Jest/Vitest)

#### Learning objectives
*   Understand the importance of testing in TypeScript application development.
*   Set up Jest for unit testing TypeScript code, including `ts-jest` configuration.
*   Write effective unit tests for TypeScript functions and classes using Jest's API.
*   Explore mocking techniques to isolate units of code during testing.
*   Introduce Vitest as a modern, faster alternative to Jest and discuss its benefits.

#### Detailed lesson content
Developing robust and reliable software requires more than just writing code; it demands rigorous testing. Testing is a critical practice that helps ensure your application behaves as expected, prevents regressions when changes are introduced, and provides confidence in your codebase. For TypeScript applications, testing is particularly beneficial as it complements the compile-time type checking with runtime behavior validation. While TypeScript catches type-related errors, tests catch logical errors, integration issues, and ensure your business logic works correctly. The most common type of testing we'll focus on is unit testing, where individual components or functions of your application are tested in isolation.

Jest is a popular and widely adopted testing framework, especially in the JavaScript and TypeScript ecosystems. Developed by Facebook, it's a complete testing solution that includes a test runner, assertion library, and mocking capabilities. To use Jest with TypeScript, you'll need `ts-jest`, a preprocessor that transforms TypeScript code into JavaScript before Jest runs the tests.

Let's get started by installing the necessary packages:
```bash
npm install jest ts-jest @types/jest --save-dev
```
*   `jest`: The core Jest testing framework.
*   `ts-jest`: A Jest preprocessor for TypeScript.
*   `@types/jest`: TypeScript type definitions for Jest, providing autocompletion and type checking for your test files.

After installation, you need to configure Jest to use `ts-jest`. The simplest way is to add a `jest` configuration section to your `package.json` or create a `jest.config.js` file. Using `jest.config.js` is generally preferred for larger configurations:
```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript
  testEnvironment: 'node', // Or 'jsdom' for browser environments
  roots: ['<rootDir>/src'], // Specify where your source files are
  testMatch: ['<rootDir>/src/**/*.test.ts'], // Pattern for test files
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true, // Collect code coverage information
  coverageDirectory: 'coverage', // Output directory for coverage reports
};
```
The `preset: 'ts-jest'` line is crucial as it tells Jest to use `ts-jest` for processing TypeScript files. `testEnvironment` should be `'node'` for backend applications or `'jsdom'` for frontend applications that interact with the DOM. `testMatch` defines the glob pattern for your test files, typically `*.test.ts` or `*.spec.ts`.

Now, let's write a simple TypeScript function and its corresponding unit test.
`src/math.ts`:
```typescript
// src/math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}
```
`src/math.test.ts`:
```typescript
// src/math.test.ts
import { add, subtract, multiply } from './math';

describe('Math operations', () => {
  test('add should correctly sum two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('subtract should correctly subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiply should correctly multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });
});
```
In this test file, `describe` groups related tests, and `test` (or `it`) defines an individual test case. `expect` is used with a matcher (like `toBe`, `toEqual`, `toHaveBeenCalledWith`, etc.) to assert the expected outcome. To run these tests, add a script to your `package.json`:
```json
// package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
},
```
Then, `npm run test` will execute your tests.

**Mocking** is a crucial technique in unit testing. When testing a specific unit of code, you often want to isolate it from its dependencies (e.g., database calls, API requests, external services). Mocking allows you to replace these dependencies with controlled, simulated versions. Jest provides powerful mocking capabilities. For example, if a function makes an HTTP request, you can mock the `axios` or `fetch` library to return predefined data, ensuring your test is fast and deterministic.
```typescript
// src/api.ts
import axios from 'axios';

export async function fetchUser(id: number) {
  const response = await axios.get(`https://api.example.com/users/${id}`);
  return response.data;
}
```
```typescript
// src/api.test.ts
import { fetchUser } from './api';
import axios from 'axios';

jest.mock('axios'); // Mock the entire axios module

const mockedAxios = axios as jest.Mocked<typeof axios>; // Type assertion for better autocompletion

describe('fetchUser', () => {
  test('should fetch user data successfully', async () => {
    const userData = { id: 1, name: 'Alice' };
    mockedAxios.get.mockResolvedValue({ data: userData }); // Mock the get method to return a resolved promise

    const user = await fetchUser(1);
    expect(user).toEqual(userData);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
  });

  test('should handle API errors', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockRejectedValue(new Error(errorMessage)); // Mock to return a rejected promise

    await expect(fetchUser(2)).rejects.toThrow(errorMessage);
  });
});
```
Here, `jest.mock('axios')` tells Jest to replace the actual `axios` module with a mock. Then, `mockedAxios.get.mockResolvedValue` or `mockedAxios.get.mockRejectedValue` allows us to control the return value of the `get` method, simulating successful or failed API calls.

**Vitest** is a relatively new testing framework that has gained significant popularity due to its speed and modern developer experience. It's built on top of Vite and leverages ES modules, offering extremely fast test execution, especially with its instant hot module reloading (HMR) for tests. Vitest aims to be Jest-compatible, meaning many existing Jest tests can run with Vitest with minimal changes. If you're starting a new project, especially one using Vite, Vitest is an excellent choice.

To set up Vitest:
```bash
npm install vitest @vitest/coverage-v8 --save-dev
```
Then, add a `test` script to `package.json`:
```json
// package.json
"scripts": {
  "test": "vitest",
  "test:watch": "vitest --watch",
  "test:coverage": "vitest run --coverage"
},
```
Vitest automatically detects your `tsconfig.json` and works with TypeScript out-of-the-box, often requiring less configuration than Jest. Your `src/math.test.ts` would run perfectly fine with Vitest.

Common mistakes in testing include:
1.  **Not testing edge cases**: Always consider boundary conditions, invalid inputs, and error scenarios.
2.  **Writing brittle tests**: Tests that break easily with minor code changes (e.g., relying on implementation details rather than public API). Focus on testing behavior, not implementation.
3.  **Lack of isolation**: Not using mocks or stubs, leading to tests that depend on external systems (like databases), making them slow and unreliable.
4.  **Incomplete test coverage**: While 100% coverage isn't always the goal, having significant coverage for critical parts of your application is essential.
5.  **Forgetting `async/await`**: When testing asynchronous code, remember to use `async/await` or return promises from your tests, otherwise, the test runner might finish before the async operation completes.

By embracing testing, you build a safety net for your application, allowing you to refactor and add new features with confidence, knowing that your existing functionality remains intact.

#### Key concepts
*   **Unit Testing**: A software testing method where individual units or components of a software are tested in isolation to determine if they are fit for use.
*   **Jest**: A popular JavaScript testing framework developed by Facebook, providing a test runner, assertion library, and mocking capabilities.
*   **`ts-jest`**: A preprocessor for Jest that allows it to compile and run TypeScript test files.
*   **`expect`**: Jest's assertion function used to make assertions about values in tests.
*   **Matchers**: Functions (e.g., `toBe`, `toEqual`, `toHaveBeenCalledWith`) used with `expect` to check values.
*   **Mocking**: The process of replacing real dependencies (e.g., API calls, database interactions) with controlled, simulated versions during testing to isolate the unit under test.
*   **Vitest**: A modern, fast testing framework built on Vite, offering Jest-compatible APIs and leveraging ES modules for quick test execution.
*   **Test Coverage**: A metric that measures the percentage of your codebase that is executed by your tests.

#### Hands-on activity
Let's set up Jest for a TypeScript project and write some tests, including a mock.

1.  **Initialize Project & Install Dependencies:**
    Create a new directory `ts-jest-testing`.
    ```bash
    mkdir ts-jest-testing
    cd ts-jest-testing
    npm init -y
    npm install typescript jest ts-jest @types/jest axios --save-dev
    npx tsc --init
    ```
2.  **Configure `tsconfig.json`:**
    Ensure `tsconfig.json` is present and correctly configured.
    ```json
    {
      "compilerOptions": {
        "target": "es2020",
        "module": "commonjs", // Jest often prefers CommonJS
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true,
        "sourceMap": true
      },
      "include": [
        "src/**/*.ts"
      ]
    }
    ```
3.  **Configure `jest.config.js`:**
    Create `jest.config.js` in the project root.
    ```javascript
    // jest.config.js
    module.exports = {
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/src'],
      testMatch: ['<rootDir>/src/**/*.test.ts'],
      moduleFileExtensions: ['ts', 'js', 'json', 'node'],
      collectCoverage: true,
      coverageDirectory: 'coverage',
    };
    ```
4.  **Create Source Files:**
    Create a `src` directory. Inside `src`, create `user-service.ts` and `user-service.test.ts`.
    `src/user-service.ts`:
    ```typescript
    // src/user-service.ts
    import axios from 'axios';

    interface User {
      id: number;
      name: string;
      email: string;
    }

    export class UserService {
      private baseUrl: string;

      constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
      }

      async getUserById(id: number): Promise<User | null> {
        try {
          const response = await axios.get<User>(`${this.baseUrl}/users/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Error fetching user ${id}:`, error);
          return null;
        }
      }

      async createUser(user: Omit<User, 'id'>): Promise<User> {
        const response = await axios.post<User>(`${this.baseUrl}/users`, user);
        return response.data;
      }
    }
    ```
    `src/user-service.test.ts`:
    ```typescript
    // src/user-service.test.ts
    import { UserService } from './user-service';
    import axios from 'axios';

    // Mock the entire axios module
    jest.mock('axios');

    // Type assertion for better autocompletion on the mocked axios
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    describe('UserService', () => {
      let userService: UserService;
      const baseUrl = 'http://api.example.com';

      beforeEach(() => {
        // Reset mocks before each test to ensure isolation
        mockedAxios.get.mockClear();
        mockedAxios.post.mockClear();
        userService = new UserService(baseUrl);
      });

      test('getUserById should fetch a user successfully', async () => {
        const mockUser = { id: 1, name: 'Alice', email: 'alice@example.com' };
        mockedAxios.get.mockResolvedValue({ data: mockUser });

        const user = await userService.getUserById(1);

        expect(user).toEqual(mockUser);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/users/1`);
      });

      test('getUserById should return null on error', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network error'));
        // Suppress console.error during this test to avoid noisy output
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        const user = await userService.getUserById(999);

        expect(user).toBeNull();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        consoleErrorSpy.mockRestore(); // Restore console.error
      });

      test('createUser should create a new user', async () => {
        const newUserInput = { name: 'Bob', email: 'bob@example.com' };
        const createdUser = { id: 2, ...newUserInput };
        mockedAxios.post.mockResolvedValue({ data: createdUser });

        const user = await userService.createUser(newUserInput);

        expect(user).toEqual(createdUser);
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
        expect(mockedAxios.post).toHaveBeenCalledWith(`${baseUrl}/users`, newUserInput);
      });
    });
    ```
5.  **Add Test Script & Run:**
    Add a test script to `package.json`:
    ```json
    // package.json
    "scripts": {
      "test": "jest",
      "test:coverage": "jest --coverage"
    },
    ```
    Run `npm run test`. Observe the test results and the coverage report.

#### Assessment idea
1.  **Question:** You have a TypeScript function `processOrder(orderId: string)` that interacts with a payment gateway API. When writing a unit test for `processOrder`, you want to ensure that the payment gateway interaction is simulated and doesn't make actual network calls. Which Jest feature is most appropriate for this scenario, and what is its primary benefit?
    A) Snapshot testing, which captures the UI state to prevent regressions.
    B) `expect().toBe()`, which asserts exact value equality.
    C) Mocking, which replaces the actual payment gateway dependency with a controlled, simulated version, ensuring test isolation and speed.
    D) `testEnvironment: 'jsdom'`, which simulates a browser environment.

    **Correct Answer:** C)
    **Explanation:** Mocking is the most appropriate feature for this scenario. It allows you to replace the external dependency (the payment gateway API) with a mock object that you control, preventing real network calls. This ensures that your unit test for `processOrder` is isolated, fast, and deterministic, focusing solely on the logic within `processOrder` itself. Snapshot testing is for UI. `expect().toBe()` is an assertion. `testEnvironment: 'jsdom'` is for browser-like environments, not for mocking external APIs.

2.  **Question:** Consider the following TypeScript function and its incomplete Jest test. What is the correct way to complete the test to verify that `fetchData` correctly returns the data?
    `src/data-fetcher.ts`:
    ```typescript
    import axios from 'axios';

    export async function fetchData(url: string): Promise<any> {
        const response = await axios.get(url);
        return response.data;
    }
    ```
    `src/data-fetcher.test.ts`:
    ```typescript
    import { fetchData } from './data-fetcher';
    import axios from 'axios';

    jest.mock('axios');
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    describe('fetchData', () => {
      test('should return data from the API', async () => {
        const mockUrl = 'https://api.example.com/data';
        const mockResponseData = { message: 'Success' };

        // [MISSING CODE HERE]

        const result = await fetchData(mockUrl);
        expect(result).toEqual(mockResponseData);
        expect(mockedAxios.get).toHaveBeenCalledWith(mockUrl);
      });
    });
    ```
    A) `mockedAxios.get.mockReturnValue(mockResponseData);`
    B) `mockedAxios.get.mockResolvedValue(mockResponseData);`
    C) `mockedAxios.get.mockResolvedValue({ data: mockResponseData });`
    D) `mockedAxios.get.mockImplementation(() => Promise.resolve(mockResponseData));`

    **Correct Answer:** C)
    **Explanation:** The `fetchData` function uses `axios.get(url)` which returns a Promise that resolves to an object with a `data` property (i.e., `response.data`). Therefore, to mock this behavior, `mockedAxios.get` should be configured to resolve with an object that *contains* the `data` property set to `mockResponseData`. `mockResolvedValue` is the correct Jest mock function for asynchronous operations that resolve successfully. Option A is incorrect because `mockReturnValue` is for synchronous functions. Option B is incorrect because `axios.get` resolves with a response *object*, not just the data directly. Option D is also correct but C is more concise and idiomatic for Jest's `mockResolvedValue`.

#### AI generation note
Create a 15-minute mixed format lesson with live coding and animated diagrams. Start with an animation explaining the concept of unit testing and mocking. Then, transition to a live coding demo where you set up Jest with `ts-jest` in a new TypeScript project. Write a simple function and its test, demonstrating `expect` and matchers. Next, introduce a function with an `axios` dependency and show how to mock `axios` using `jest.mock` and `mockResolvedValue`. Visually trace the execution flow during the mocked test. Briefly introduce Vitest's benefits (speed, HMR) with a quick demo of running the same tests with Vitest. The interactive element will be a fill-in-the-blanks exercise where the user completes a Jest test file with the correct `expect` assertions and mocking setup.

## Chapter 6.5 — Best Practices for Large-Scale TypeScript Projects

#### Learning objectives
*   Design effective project structures for large-scale TypeScript applications.
*   Understand and implement monorepo strategies for managing multiple related TypeScript packages.
*   Work with TypeScript declaration files (`.d.ts`) for integrating with JavaScript libraries.
*   Implement strategies for publishing TypeScript packages to npm.
*   Discuss continuous integration/continuous deployment (CI/CD) considerations for TypeScript projects.

#### Detailed lesson content
As TypeScript projects grow in complexity and size, managing them effectively becomes crucial for long-term maintainability, scalability, and team collaboration. What works for a small script might quickly become a bottleneck for a large application or a suite of interconnected services. This chapter explores best practices for structuring, managing, and deploying large-scale TypeScript projects, ensuring they remain robust and easy to evolve.

One of the first considerations for a large project is its **project structure**. A well-organized structure makes it easy for developers to find code, understand responsibilities, and onboard new team members. While there's no single "perfect" structure, common patterns include:
*   **Feature-based organization**: Grouping files by feature (e.g., `src/features/auth`, `src/features/products`) rather than by type (e.g., `src/components`, `src/services`). This keeps related code together.
*   **Layered architecture**: Separating concerns into distinct layers (e.g., `domain`, `application`, `infrastructure`, `presentation`). This promotes modularity and testability.
*   **Clear separation of concerns**: Ensuring that modules or files have a single responsibility.

For very large projects, especially those with multiple related applications, libraries, or services, a **monorepo** strategy often proves beneficial. A monorepo is a single repository containing multiple distinct projects, as opposed to a polyrepo where each project has its own repository. Tools like Nx, Lerna, and Yarn Workspaces are designed to manage monorepos. The advantages include:
*   **Simplified dependency management**: All projects share a single `node_modules` and versioning strategy.
*   **Easier code sharing**: Common utilities or components can be easily shared and consumed across projects within the monorepo.
*   **Atomic changes**: A single commit can update multiple related projects, ensuring consistency.
*   **Centralized tooling**: Linting, testing, and build configurations can be shared and applied consistently.
*   **Improved refactoring**: Changes that span multiple projects are easier to manage and verify.

For example, using Yarn Workspaces, you'd define a `workspaces` array in your root `package.json`:
```json
// root/package.json
{
  "name": "my-monorepo",
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*"
  ],
  "scripts": {
    "build": "yarn workspaces run build",
    "test": "yarn workspaces run test"
  }
}
```
Then, inside `packages/my-library` or `apps/my-app`, each project would have its own `package.json` and `tsconfig.json`.

**Type Declaration Files (`.d.ts`)** are fundamental for working with TypeScript, especially when integrating with existing JavaScript libraries or when publishing your own TypeScript libraries. A `.d.ts` file describes the shape of JavaScript code using TypeScript types, allowing TypeScript to provide type checking, autocompletion, and refactoring support for JavaScript modules.
*   **For external JS libraries**: If a JavaScript library doesn't come with its own `.d.ts` files, you can often find them on DefinitelyTyped (e.g., `@types/lodash`). If not, you might need to write your own.
*   **For your own TS libraries**: When you build a TypeScript library, you typically want to generate `.d.ts` files alongside your compiled JavaScript. This allows consumers of your library (even if they are JavaScript projects) to benefit from TypeScript's type checking. You enable this by setting `"declaration": true` in your `tsconfig.json`.
    ```typescript
    // src/my-lib.ts
    export function greet(name: string): string {
      return `Hello, ${name}!`;
    }
    ```
    Compiling this with `"declaration": true` would produce `dist/my-lib.js` and `dist/my-lib.d.ts`:
    ```typescript
    // dist/my-lib.d.ts
    export declare function greet(name: string): string;
    ```

**Publishing TypeScript packages to npm** involves a few key steps to ensure your package is usable by others:
1.  **Compile to JavaScript**: Your package consumers will typically use the JavaScript output, so ensure your build process compiles your TypeScript to a suitable `target` (e.g., `es2018`, `es2020`) and `module` (e.g., `commonjs`, `esnext`).
2.  **Generate Declaration Files**: Set `"declaration": true` in `tsconfig.json` to generate `.d.ts` files.
3.  **Configure `package.json`**:
    *   `main`: Points to your main CommonJS entry point (e.g., `dist/index.js`).
    *   `module`: Points to your main ES module entry point (e.g., `dist/index.esm.js`), for bundlers.
    *   `types` or `typings`: Points to your main declaration file (e.g., `dist/index.d.ts`).
    *   `files`: An array of files/directories to include when publishing (e.g., `["dist"]`).
    *   `private: false`: Essential for public packages.
    *   `version`: Use **semantic versioning** (e.g., `1.0.0`) to communicate changes.
4.  **`npm publish`**: After logging in to npm (`npm login`), run `npm publish` from your project root.

**Continuous Integration/Continuous Deployment (CI/CD)** is vital for large projects. For TypeScript, this means:
*   **CI (Continuous Integration)**: Every code change (e.g., pull request) triggers an automated pipeline that:
    *   Installs dependencies (`npm install`).
    *   Lints the code (`npm run lint`).
    *   Type-checks the code (`tsc --noEmit`).
    *   Runs tests (`npm run test --coverage`).
    *   Builds the project (`npm run build`).
    *   If any step fails, the build fails, preventing problematic code from merging.
*   **CD (Continuous Deployment)**: After a successful CI build on the main branch, the pipeline automatically deploys the application or publishes the library.

Common mistakes in large-scale TypeScript projects:
1.  **Ignoring `tsconfig.json` for libraries**: Forgetting `declaration: true` means consumers won't get type information.
2.  **Poor `package.json` configuration for publishing**: Incorrect `main`, `module`, or `types` fields can make your library unusable or hard to consume.
3.  **Lack of CI/CD**: Manual processes are prone to errors and slow down development. Automate everything possible.
4.  **Inconsistent tooling**: Different teams or projects using different versions of linters, formatters, or compilers can lead to integration headaches. Monorepos help centralize this.
5.  **Over-reliance on `any`**: While sometimes necessary, excessive use of `any` defeats the purpose of TypeScript and can lead to runtime errors in large codebases. Strive for explicit types.

By adopting these best practices, you can navigate the complexities of large TypeScript projects with confidence, building scalable, maintainable, and high-quality software.

#### Key concepts
*   **Project Structure**: The organization of files and directories within a project, influencing maintainability and developer experience.
*   **Monorepo**: A single version-controlled repository containing multiple distinct projects, often managed with tools like Nx, Lerna, or Yarn Workspaces.
*   **Polyrepo**: A development strategy where each project or component resides in its own separate repository.
*   **Type Declaration File (`.d.ts`)**: A file that describes the shape of JavaScript code using TypeScript types, providing type checking and autocompletion for JavaScript modules.
*   **DefinitelyTyped**: A large repository of high-quality TypeScript type definitions for JavaScript libraries.
*   **`declaration: true`**: A `tsconfig.json` option that instructs the TypeScript compiler to generate `.d.ts` files alongside compiled JavaScript.
*   **npm publish**: The command used to publish a package to the npm registry.
*   **Semantic Versioning (SemVer)**: A versioning scheme (MAJOR.MINOR.PATCH) that communicates the nature of changes in releases.
*   **Continuous Integration (CI)**: An automated process of frequently integrating code changes into a shared repository, followed by automated builds and tests.
*   **Continuous Deployment (CD)**: An automated process that deploys code changes to production after successful CI.

#### Hands-on activity
Let's simulate publishing a simple TypeScript library to npm, focusing on `tsconfig.json` and `package.json` configuration.

1.  **Initialize Library Project:**
    Create a new directory `my-ts-library`.
    ```bash
    mkdir my-ts-library
    cd my-ts-library
    npm init -y
    npm install typescript --save-dev
    npx tsc --init
    ```
2.  **Configure `tsconfig.json` for Library:**
    Modify `tsconfig.json` to generate declaration files and target modern Node.js while also providing ES module output.
    ```json
    {
      "compilerOptions": {
        "target": "es2020",
        "module": "esnext", // For ES module output
        "declaration": true, // Crucial: Generate .d.ts files
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "moduleResolution": "node" // Important for module resolution
      },
      "include": [
        "src/**/*.ts"
      ]
    }
    ```
3.  **Create Library Source:**
    Create a `src` directory and `index.ts`.
    `src/index.ts`:
    ```typescript
    // src/index.ts
    /**
     * Greets a person by name.
     * @param name The name of the person to greet.
     * @returns A greeting string.
     */
    export function greetPerson(name: string): string {
      return `Hello, ${name}! Welcome to my TS library.`;
    }

    /**
     * Calculates the square of a number.
     * @param num The number to square.
     * @returns The square of the number.
     */
    export function square(num: number): number {
      return num * num;
    }

    // This function is not exported, so it won't appear in .d.ts
    function privateHelper(): string {
        return "This is a private helper.";
    }
    ```
4.  **Configure `package.json` for Publishing:**
    Modify `package.json` to include build scripts and proper entry points.
    ```json
    // package.json
    {
      "name": "my-ts-library-example",
      "version": "1.0.0",
      "description": "A simple TypeScript library example for Cohortia.",
      "main": "dist/index.js",        // CommonJS entry point
      "module": "dist/index.esm.js",   // ES Module entry point
      "types": "dist/index.d.ts",      // Type declaration file
      "files": [
        "dist"                       // Only include the 'dist' folder when publishing
      ],
      "scripts": {
        "build": "tsc && tsc --module commonjs --outDir dist/cjs", // Build ESNext and CommonJS
        "build:esm": "tsc --module esnext --outDir dist",
        "build:cjs": "tsc --module commonjs --outDir dist/cjs",
        "prepublishOnly": "npm run build:esm && npm run build:cjs", // Build before publishing
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "typescript",
        "library",
        "example"
      ],
      "author": "Cohortia Instructor",
      "license": "MIT",
      "devDependencies": {
        "typescript": "^5.0.0"
      }
    }
    ```
    *Note: For a real library, you'd likely use a bundler like Rollup to generate both CJS and ESM outputs more cleanly from a single source, but this `tsc` approach demonstrates the concept.*

5.  **Build the Library:**
    Run the build script:
    ```bash
    npm run build:esm
    npm run build:cjs
    ```
    Check the `dist` and `dist/cjs` folders. You should see `index.js`, `index.d.ts` in `dist` (for ESM) and `index.js`, `index.d.ts` in `dist/cjs` (for CommonJS). Notice how `privateHelper` is not in `index.d.ts`.

6.  **Simulate Consumption (Optional):**
    You can create a separate "consumer" project, install `my-ts-library-example` locally (`npm install ../my-ts-library`), and verify that type definitions work.

#### Assessment idea
1.  **Question:** Your team is developing a large application suite that includes a shared UI component library, a backend API service, and a frontend web application. All these projects are written in TypeScript and frequently share code. You want to simplify dependency management, enable easier code sharing, and ensure consistent tooling across all projects. Which project management strategy would be most suitable?
    A) A polyrepo strategy, with each project in its own repository, using Git submodules for shared code.
    B) A monorepo strategy, using tools like Nx or Yarn Workspaces to manage the multiple projects within a single repository.
    C) A microservices architecture, where each service is entirely independent with no shared code.
    D) A monolithic application, where all code resides in a single, tightly coupled project.

    **Correct Answer:** B)
    **Explanation:** A monorepo strategy is ideal for this scenario. It allows multiple related projects (UI library, backend, frontend) to coexist in a single repository, simplifying dependency management (one `node_modules`), facilitating code sharing (easy imports between packages), and enabling consistent tooling (shared ESLint, Prettier, `tsconfig.json`). While microservices promote independence, the problem explicitly mentions "frequently share code" and "consistent tooling," which monorepos excel at. Polyrepos with submodules can become cumbersome for frequent changes across shared code. A monolith would tightly couple everything, which is often undesirable for large application suites.

2.  **Question:** You are publishing a TypeScript library to npm. You've compiled your TypeScript files to JavaScript, but when consumers try to use your library, they don't get any type checking or autocompletion in their TypeScript projects. What is the most likely missing configuration in your library's `package.json` or `tsconfig.json`?
    A) The `main` field in `package.json` is incorrect.
    B) The `target` compiler option in `tsconfig.json` is set to `es5`.
    C) The `declaration` compiler option in `tsconfig.json` is set to `false` or omitted, and the `types` field in `package.json` is missing or points to a non-existent file.
    D) The `module` compiler option in `tsconfig.json` is set to `commonjs`.

    **Correct Answer:** C)
    **Explanation:** For consumers to get type checking and autocompletion, your published library must include type declaration files (`.d.ts`). These are generated by setting `"declaration": true` in your `tsconfig.json`. Additionally, your `package.json` needs a `types` (or `typings`) field that points to the main declaration file (e.g., `"types": "dist/index.d.ts"`). If `declaration` is `false` or omitted, no `.d.ts` files are generated. If `types` is missing or points incorrectly, consumers won't find the declaration files. Options A, B, and D relate to JavaScript output and module resolution, which affect runtime behavior, but not directly the availability of type information for TypeScript consumers.

#### AI generation note
Create a 14-minute video lesson with animated diagrams and a conceptual walkthrough. Start with an animation comparing polyrepos vs. monorepos, highlighting the benefits of monorepos for large-scale projects. Then, explain the role of `.d.ts` files with an example of a JavaScript library and its corresponding type definition. Show the `tsconfig.json` setting (`"declaration": true`) and the resulting `.d.ts` file. Transition to a conceptual walkthrough of `package.json` for publishing, explaining `main`, `module`, `types`, and `files`. Conclude with a high-level overview of a CI/CD pipeline for TypeScript, using a flow diagram to show linting, type checking, testing, and building stages. The interactive element will be a drag-and-drop where users match `package.json` fields (e.g., `main`, `types`, `files`) to their descriptions for publishing a library.

---

### Chapter 6.1 — Initializing a TypeScript Project and `tsconfig.json` Fundamentals

#### Learning objectives
*   Initialize a new TypeScript project from scratch using standard tools.
*   Understand the purpose and basic structure of the `tsconfig.json` file.
*   Configure essential compiler options like `target`, `module`, `rootDir`, and `outDir`.
*   Implement the `strict` compiler option and understand its benefits for type safety.
*   Compile TypeScript code using the `tsc` command and interpret its output.

#### Detailed lesson content
Welcome to the final module of our TypeScript journey! We've covered a vast landscape of TypeScript features, from basic types to advanced generics and decorators. Now, it's time to bring all that knowledge together and learn how to set up, configure, and maintain robust TypeScript projects. This chapter is your foundational guide to getting a TypeScript project off the ground, focusing on the crucial `tsconfig.json` file, which acts as the brain of your TypeScript compilation process.

To begin any new JavaScript or TypeScript project, the first step is almost always to initialize a Node.js project. This is done using `npm init` or `yarn init`. This command creates a `package.json` file, which manages your project's metadata, scripts, and dependencies. Once you have your `package.json`, you'll need to install TypeScript itself as a development dependency. We typically install it locally to ensure project-specific versions and avoid global dependency conflicts. You can do this with `npm install --save-dev typescript` or `yarn add --dev typescript`. After installation, the `tsc` command-line tool becomes available within your project's `node_modules/.bin` directory.

The next critical step is to initialize a TypeScript configuration file, `tsconfig.json`. This file tells the TypeScript compiler (`tsc`) how to compile your project. You can generate a basic `tsconfig.json` with recommended defaults by running `npx tsc --init` in your project's root directory. This command creates a `tsconfig.json` file with a comprehensive set of commented-out options, providing a great starting point for understanding what's available. While it might seem overwhelming at first, many options are self-explanatory, and we'll focus on the most important ones.

Let's dive into some of the fundamental compiler options you'll find in `tsconfig.json`. The `target` option specifies the ECMAScript target version for the generated JavaScript code. For instance, if you set `"target": "es2020"`, TypeScript will compile your code into JavaScript that adheres to the ES2020 standard. This is crucial for browser compatibility or Node.js versions. A common mistake is setting `target` too low, which might transpile modern features unnecessarily, or setting it too high, leading to compatibility issues with older environments. Always choose a `target` that matches your deployment environment's capabilities.

Another vital option is `module`. This dictates the module system that TypeScript should use for the generated JavaScript. Common values include `"commonjs"` for Node.js environments and `"esnext"` or `"es2020"` for modern browsers or bundlers like Webpack. The choice here impacts how `import` and `export` statements are transpiled. For example, if you're building a Node.js backend, `"commonjs"` is usually appropriate, resulting in `require()` and `module.exports` syntax. For a frontend application using a bundler, `"esnext"` is often preferred, allowing the bundler to optimize ES module syntax.

To keep your source code organized and separate from your compiled output, `rootDir` and `outDir` are indispensable. `rootDir` specifies the root directory of your TypeScript source files. By default, `tsc` will infer this, but explicitly setting it (e.g., `"rootDir": "./src"`) is good practice. `outDir` specifies the directory where the compiled JavaScript files will be emitted (e.g., `"outDir": "./dist"`). This separation ensures a clean project structure where your development files (`.ts`) are distinct from your deployable assets (`.js`). A common pitfall is forgetting to create the `outDir` directory, though `tsc` will usually create it for you. However, ensuring your build scripts correctly reference this path is important.

Perhaps one of the most impactful compiler options for leveraging TypeScript's full potential is `strict`. When `"strict": true` is enabled, it turns on a wide range of strict type-checking options, including `noImplicitAny`, `noImplicitThis`, `alwaysStrict`, `strictNullChecks`, `strictFunctionTypes`, `strictPropertyInitialization`, and `noUncheckedIndexedAccess`. While it might seem daunting at first due to the increased number of type errors it might reveal in existing codebases, enabling `strict` mode is highly recommended for new projects. It significantly enhances type safety, catches subtle bugs early, and leads to more predictable and maintainable code. For example, `strictNullChecks` prevents you from accidentally using `null` or `undefined` values without explicit checks, which is a major source of runtime errors in JavaScript. Embrace strict mode from the start; it's an investment that pays dividends in code quality and developer confidence.

Let's put this into practice. Imagine you have a simple `src/index.ts` file:
```typescript
// src/index.ts
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("Cohortia Learner");

// This would cause an error with strictNullChecks enabled
// let user: string | null = null;
// greet(user); // Argument of type 'string | null' is not assignable to parameter of type 'string'.
```

And your `tsconfig.json` might look like this:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```
After running `npx tsc`, TypeScript will compile `src/index.ts` into `dist/index.js`, which you can then execute with Node.js. The `include` and `exclude` options are also important here; they tell the compiler which files to consider and which to ignore. `include` specifies an array of glob patterns to include in the program, while `exclude` specifies files to be excluded. This is particularly useful for ignoring test files during a regular build or skipping `node_modules`. Understanding these fundamental options is the cornerstone of effective TypeScript project management.

#### Key concepts
*   **`package.json`**: A manifest file for Node.js projects, managing dependencies, scripts, and metadata.
*   **`tsconfig.json`**: The TypeScript configuration file that specifies root files and compiler options for a project.
*   **`target` (compiler option)**: Defines the ECMAScript version that TypeScript will compile down to (e.g., `es5`, `es2020`).
*   **`module` (compiler option)**: Specifies the module system for the generated JavaScript code (e.g., `commonjs`, `esnext`).
*   **`rootDir` (compiler option)**: The root directory containing TypeScript source files.
*   **`outDir` (compiler option)**: The directory where compiled JavaScript files will be emitted.
*   **`strict` (compiler option)**: A meta-option that enables a suite of strict type-checking options, significantly improving type safety.
*   **`npx tsc --init`**: Command to generate a default `tsconfig.json` file.
*   **`npx tsc`**: Command to compile TypeScript files based on the `tsconfig.json` configuration.

#### Hands-on activity
**Project Setup and Basic Configuration**

1.  **Initialize Project:** Create a new empty directory called `my-ts-app`. Navigate into it in your terminal.
    ```bash
    mkdir my-ts-app
    cd my-ts-app
    npm init -y # Initializes a package.json with defaults
    npm install --save-dev typescript
    npx tsc --init
    ```
2.  **Configure `tsconfig.json`:** Open the generated `tsconfig.json` file.
    *   Uncomment and set `"target": "es2020"`.
    *   Uncomment and set `"module": "commonjs"`.
    *   Uncomment and set `"rootDir": "./src"`.
    *   Uncomment and set `"outDir": "./dist"`.
    *   Uncomment and set `"strict": true`.
    *   Ensure `esModuleInterop`, `forceConsistentCasingInFileNames`, and `skipLibCheck` are also uncommented and set to `true` (these are good defaults).
3.  **Create Source File:** Create a directory named `src` inside `my-ts-app`. Inside `src`, create a file named `app.ts`.
    ```typescript
    // src/app.ts
    interface User {
        id: number;
        name: string;
        email?: string; // Optional property
    }

    function createUser(id: number, name: string, email?: string): User {
        if (!name) {
            throw new Error("User name cannot be empty.");
        }
        return { id, name, email };
    }

    const newUser = createUser(1, "Alice Smith");
    console.log(`Created user: ${newUser.name}, ID: ${newUser.id}`);

    // Try to create a user with a missing name to see strict mode in action
    // const invalidUser = createUser(2, ""); // This will throw a runtime error if not handled
    // console.log(invalidUser);

    // Demonstrate a potential null issue (caught by strictNullChecks)
    let maybeName: string | null = "Bob";
    // console.log(maybeName.toUpperCase()); // This would error if maybeName could be null and strictNullChecks is on.
                                          // TypeScript correctly flags it as 'maybeName is possibly null.'
    if (maybeName) {
        console.log(maybeName.toUpperCase()); // OK, type guard ensures maybeName is string
    }
    ```
4.  **Compile and Run:**
    ```bash
    npx tsc
    node dist/app.js
    ```
    Observe the output. Experiment by changing `strict` to `false` in `tsconfig.json` and re-compiling. Notice how TypeScript might stop warning you about potential `null` issues. Then, revert `strict` to `true`.

#### Assessment idea
1.  **Question:** You're starting a new TypeScript project for a Node.js backend that will run on Node.js v14. You want to use modern JavaScript features but ensure compatibility and leverage TypeScript's full type-checking capabilities. Which of the following `compilerOptions` in `tsconfig.json` would be most appropriate for `target`, `module`, and `strict`?
    *   A) `"target": "es5", "module": "esnext", "strict": false`
    *   B) `"target": "es2020", "module": "commonjs", "strict": true`
    *   C) `"target": "es2015", "module": "umd", "strict": true`
    *   D) `"target": "esnext", "module": "amd", "strict": false`

    **Answer:** B) `"target": "es2020", "module": "commonjs", "strict": true`
    **Explanation:**
    *   `"target": "es2020"` is suitable for Node.js v14, as it supports modern ES2020 features.
    *   `"module": "commonjs"` is the standard module system for Node.js environments.
    *   `"strict": true` enables all strict type-checking options, which is highly recommended for robust and maintainable TypeScript code, catching many potential errors at compile time.

2.  **Question:** Consider the following `tsconfig.json` snippet and project structure. What will be the path to the compiled JavaScript file for `src/data/users.ts` after running `npx tsc`?

    ```json
    // tsconfig.json
    {
      "compilerOptions": {
        "rootDir": "./source",
        "outDir": "./build"
      },
      "include": [
        "source/**/*.ts"
      ]
    }
    ```
    Project structure:
    ```
    my-project/
    ├── source/
    │   ├── app.ts
    │   └── data/
    │       └── users.ts
    └── tsconfig.json
    ```

    **Answer:** `my-project/build/data/users.js`
    **Explanation:** The `rootDir` option specifies `source` as the base for the input files, and `outDir` specifies `build` as the base for the output files. TypeScript preserves the directory structure relative to `rootDir` when emitting files to `outDir`. Therefore, `source/data/users.ts` becomes `build/data/users.js`.

#### AI generation note
Create a 10-12 minute mixed-format lesson. Start with a conceptual animation explaining `tsconfig.json` as a "compiler's instruction manual." Then transition to a live coding demo showing `npm init`, `npm install typescript`, and `npx tsc --init`. Walk through modifying `target`, `module`, `rootDir`, `outDir`, and `strict` in `tsconfig.json` with a simple `src/index.ts` example. Visually highlight the changes in the generated `dist` folder. Show the difference in type errors when `strict` is toggled. Include clear terminal output for commands. The interactive element should be a drag-and-drop exercise matching `tsconfig.json` options to their descriptions. Ensure captions and alt text for any diagrams.

---

### Chapter 6.2 — Advanced `tsconfig.json` Options and Compiler Flags

#### Learning objectives
*   Configure module resolution strategies using `baseUrl` and `paths` for cleaner imports.
*   Manage type definitions for external libraries with `lib` and `typeRoots`.
*   Understand and apply `esModuleInterop` for consistent module interoperability.
*   Utilize `skipLibCheck` and `forceConsistentCasingInFileNames` for improved build performance and consistency.
*   Explore common TypeScript compiler flags for specific compilation scenarios.

#### Detailed lesson content
Building upon our understanding of fundamental `tsconfig.json` options, we'll now delve into more advanced configurations that significantly enhance developer experience, project maintainability, and build efficiency. As your TypeScript projects grow, managing imports, external library types, and subtle compiler behaviors becomes crucial. This chapter will equip you with the knowledge to fine-tune your `tsconfig.json` for complex scenarios.

One of the most common frustrations in larger JavaScript/TypeScript projects is deeply nested relative imports (e.g., `import { someUtil } from '../../../../utils/someUtil';`). TypeScript offers elegant solutions with `baseUrl` and `paths`. The `baseUrl` option specifies the base directory for resolving non-relative module names. For instance, if you set `"baseUrl": "./src"`, then any import like `import { User } from 'models/User';` will look for `src/models/User.ts`. This simplifies import paths dramatically. Building on `baseUrl`, the `paths` option allows you to create alias mappings. You can map specific module names to a list of locations relative to the `baseUrl`. For example, `"paths": { "@app/*": ["./*"] }` would allow you to write `import { UserService } from '@app/services/UserService';` which resolves to `src/services/UserService.ts`. This is incredibly powerful for creating clear, concise, and refactor-friendly import statements across your codebase. A common mistake here is forgetting to set `baseUrl` when using `paths`, as `paths` relies on `baseUrl` for its resolution context.

Let's consider an example for `baseUrl` and `paths`:
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```
With this, if you have `src/components/Button.ts` and `src/utils/helpers.ts`, you can import them as:
```typescript
// src/pages/Dashboard.ts
import { Button } from '@components/Button';
import { capitalize } from '@utils/helpers';
```
This makes your code much cleaner and easier to navigate.

Another critical aspect is managing type definitions for the JavaScript ecosystem. The `lib` option specifies a list of built-in declaration files to be included in the compilation. These files define intrinsic types like `Array`, `Promise`, `DOM` APIs, etc. For example, `"lib": ["es2020", "dom"]` tells TypeScript to include types for ES2020 features and standard browser DOM APIs. If you're building a Node.js application, you might use `"lib": ["es2020"]` and potentially add `@types/node` as a dev dependency. The `typeRoots` option, on the other hand, specifies an array of directories to search for type definition files. By default, it includes `node_modules/@types`, which is where most `@types/` packages reside. You might use `typeRoots` if you have custom global type definitions outside of `node_modules` that you want TypeScript to discover.

Module interoperability is a significant concern when mixing CommonJS and ES Modules, especially in transitional periods or when working with older libraries. The `esModuleInterop` option, when set to `true`, enables a set of compatibility flags that provide better interoperability between CommonJS and ES Modules. Specifically, it allows you to use `import React from 'react';` even if `react` is a CommonJS module that exports `module.exports = React;` instead of `export default React;`. Without `esModuleInterop`, you might have to write `import * as React from 'react';` which can be cumbersome. This option is highly recommended for most modern projects to avoid module resolution headaches and ensure consistent import syntax.

For larger projects with many third-party dependencies, compilation time can become an issue. The `skipLibCheck` option can help here. When set to `true`, TypeScript will skip type checking of all declaration files (`.d.ts`) that are part of your `node_modules` directory. This can significantly speed up compilation, especially in projects with numerous or complex libraries. While it means you're trusting the type definitions provided by the library authors, it's a common and generally safe practice, as issues in widely used libraries are usually quickly patched.

Finally, `forceConsistentCasingInFileNames` is a small but mighty option. When `true`, it ensures that all references to a file use the same casing. This is critical for cross-platform compatibility, as some operating systems (like Windows) are case-insensitive by default, while others (like Linux/macOS) are case-sensitive. Without this option, you might have `import { Foo } from './Foo';` and `import { Bar } from './foo';` referring to the same file but with different casing, which could lead to build errors or runtime issues when deployed to a case-sensitive environment. Enabling this prevents such subtle bugs.

Beyond `tsconfig.json`, you can also pass compiler flags directly to the `tsc` command. While `tsconfig.json` is for project-wide configuration, command-line flags can override or augment these settings for specific compilation tasks. For example, `tsc --noEmit` will perform type checking without emitting any JavaScript files, useful for a quick syntax check. `tsc --watch` will start the compiler in watch mode, recompiling files automatically when changes are detected – invaluable during development. `tsc --project ./path/to/another/tsconfig.json` allows you to compile using a different `tsconfig.json` file, perhaps for a specific build target or test environment. Understanding these flags provides flexibility in your development workflow.

In summary, these advanced `tsconfig.json` options and compiler flags provide powerful mechanisms to tailor TypeScript's behavior to your project's specific needs, improving developer experience, ensuring code quality, and optimizing the build process. Experiment with them in your projects to find the configuration that best suits your team and application.

#### Key concepts
*   **`baseUrl` (compiler option)**: Specifies the base directory for resolving non-relative module imports.
*   **`paths` (compiler option)**: Allows creation of module alias mappings relative to `baseUrl` for simplified imports.
*   **`lib` (compiler option)**: Specifies which built-in declaration files (e.g., `dom`, `es2020`) are included in the compilation.
*   **`typeRoots` (compiler option)**: Specifies directories to search for type definition files, defaulting to `node_modules/@types`.
*   **`esModuleInterop` (compiler option)**: Enables compatibility flags for better interoperability between CommonJS and ES Modules.
*   **`skipLibCheck` (compiler option)**: Skips type checking of declaration files (`.d.ts`) in `node_modules` for faster compilation.
*   **`forceConsistentCasingInFileNames` (compiler option)**: Enforces consistent casing for file references, preventing cross-platform issues.
*   **`tsc --noEmit`**: Compiler flag to perform type checking without generating output files.
*   **`tsc --watch`**: Compiler flag to run TypeScript in watch mode, recompiling on file changes.

#### Hands-on activity
**Configuring Module Aliases and Library Types**

1.  **Continue from previous activity:** Use your `my-ts-app` project.
2.  **Update `tsconfig.json`:** Modify your `tsconfig.json` to include `baseUrl` and `paths`.
    ```json
    // tsconfig.json (add/modify these options)
    {
      "compilerOptions": {
        // ... other options from 6.1
        "baseUrl": "./src", // Set the base URL to your source directory
        "paths": {
          "@models/*": ["models/*"], // Alias for src/models
          "@services/*": ["services/*"] // Alias for src/services
        },
        "lib": ["es2020", "dom"], // Include DOM types for potential browser use
        "esModuleInterop": true, // Ensure good module interoperability
        "skipLibCheck": true, // Speed up compilation by skipping lib checks
        "forceConsistentCasingInFileNames": true // Enforce consistent casing
      },
      "include": [
        "src/**/*.ts"
      ],
      "exclude": [
        "node_modules",
        "**/*.spec.ts"
      ]
    }
    ```
3.  **Create Aliased Directories and Files:**
    Create `src/models/User.ts`:
    ```typescript
    // src/models/User.ts
    export interface User {
        id: number;
        name: string;
        email?: string;
    }

    export class UserClass implements User {
        constructor(public id: number, public name: string, public email?: string) {}

        getFullName(): string {
            return `${this.name} (ID: ${this.id})`;
        }
    }
    ```
    Create `src/services/UserService.ts`:
    ```typescript
    // src/services/UserService.ts
    import { User, UserClass } from '@models/User'; // Using alias

    export class UserService {
        private users: User[] = [];
        private nextId = 1;

        addUser(name: string, email?: string): User {
            const newUser = new UserClass(this.nextId++, name, email);
            this.users.push(newUser);
            return newUser;
        }

        getAllUsers(): User[] {
            return [...this.users];
        }

        getUserById(id: number): User | undefined {
            return this.users.find(user => user.id === id);
        }
    }
    ```
4.  **Update `src/app.ts` to use aliases:**
    ```typescript
    // src/app.ts
    import { UserService } from '@services/UserService'; // Using alias
    import { User } from '@models/User'; // Using alias

    const userService = new UserService();

    userService.addUser("Alice Johnson", "alice@example.com");
    userService.addUser("Bob Williams");

    const allUsers = userService.getAllUsers();
    console.log("All users:");
    allUsers.forEach(user => console.log(`- ${user.name} (${user.email || 'No Email'})`));

    const foundUser = userService.getUserById(1);
    if (foundUser) {
        console.log(`\nFound user by ID 1: ${foundUser.name}`);
    }

    // Demonstrate DOM lib usage (if targetting browser)
    // const button = document.createElement('button'); // This would only type-check if "dom" is in lib
    // button.textContent = "Click Me";
    // document.body.appendChild(button);
    ```
5.  **Compile and Run:**
    ```bash
    npx tsc
    node dist/app.js
    ```
    Verify that the imports resolve correctly and the application runs. Experiment by removing `baseUrl` or `paths` entries to see the compiler errors.

#### Assessment idea
1.  **Question:** You are working on a large TypeScript project with a deeply nested folder structure. To simplify import statements like `import { config } from '../../../config/settings';` to `import { config } from '@config/settings';`, which `tsconfig.json` options should you configure? Provide an example of how they would be set.

    **Answer:** You should configure `baseUrl` and `paths`.
    **Explanation:**
    *   `baseUrl` establishes a root for module resolution, so TypeScript knows where to start looking for non-relative imports.
    *   `paths` allows you to define specific alias mappings.
    Example `tsconfig.json` snippet:
    ```json
    {
      "compilerOptions": {
        "baseUrl": "./src", // Assuming your source code is in the 'src' directory
        "paths": {
          "@config/*": ["config/*"] // Maps '@config/settings' to './src/config/settings'
        }
      }
    }
    ```
    With this configuration, `import { config } from '@config/settings';` would correctly resolve to `src/config/settings.ts`.

2.  **Question:** A developer on your team complains that `tsc` compilation is very slow, especially after installing new large third-party libraries. They also notice inconsistent casing issues when deploying to a Linux server, even though their local Windows machine doesn't show errors. What two `tsconfig.json` options can you suggest to address these specific problems, and how do they help?

    **Answer:**
    1.  **`skipLibCheck: true`**: This option tells TypeScript to skip type checking of all declaration files (`.d.ts`) found in `node_modules`. For large projects with many dependencies, type checking these files can be time-consuming. By skipping them, compilation speed can be significantly improved.
    2.  **`forceConsistentCasingInFileNames: true`**: This option ensures that all references to a file use the same casing. On case-insensitive file systems (like Windows), `foo.ts` and `Foo.ts` might refer to the same file. However, on case-sensitive systems (like Linux), these are distinct. Enabling this option forces developers to use consistent casing, preventing build or runtime errors when deploying to case-sensitive environments.

#### AI generation note
Create a 12-15 minute interactive code demo. Begin by showing a "before" scenario with deeply nested relative imports. Then, live-code the addition of `baseUrl` and `paths` to `tsconfig.json`, demonstrating how imports become cleaner. Next, explain `lib` by showing how `document.createElement` would error without `"dom"` in `lib`, and then fix it. Briefly discuss `esModuleInterop` with a simple `require()` vs `import` example. Conclude by explaining `skipLibCheck` and `forceConsistentCasingInFileNames` with visual cues (e.g., a timer for `skipLibCheck`, a "cross-platform compatibility" icon for casing). The interactive element should be a small coding challenge where learners refactor relative imports to use aliases.

---

### Chapter 6.3 — Integrating TypeScript with Build Tools (Webpack, Rollup, Vite)

#### Learning objectives
*   Understand why modern build tools are necessary for TypeScript projects beyond `tsc`.
*   Configure Webpack to compile TypeScript using `ts-loader`.
*   Integrate TypeScript with Rollup for library builds using `@rollup/plugin-typescript`.
*   Set up a fast development environment with Vite and TypeScript.
*   Compare the strengths and weaknesses of different build tools in a TypeScript context.

#### Detailed lesson content
While the TypeScript compiler (`tsc`) is excellent for transforming `.ts` files into `.js`, it primarily focuses on type checking and transpilation. In real-world applications, especially for web development, you often need more than just transpilation. You need to bundle multiple JavaScript files, optimize assets (CSS, images), handle hot module replacement (HMR), tree-shaking, code splitting, and much more. This is where modern JavaScript build tools like Webpack, Rollup, and Vite come into play. This chapter will guide you through integrating TypeScript with these powerful tools, enabling you to build robust, optimized, and performant applications.

**Webpack** has been a dominant force in the JavaScript ecosystem for years, known for its extensive configurability and plugin ecosystem. When integrating TypeScript with Webpack, the primary tool is `ts-loader`. First, you'll need to install Webpack, `webpack-cli`, and `ts-loader` as development dependencies: `npm install --save-dev webpack webpack-cli ts-loader typescript`. Your `webpack.config.js` file will then need to be configured to tell Webpack how to handle `.ts` and `.tsx` files. The core idea is to define a rule that uses `ts-loader` for these file types.

Here's a basic `webpack.config.js` example:
```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.ts', // Your main TypeScript entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Tell Webpack to resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to files ending with .ts
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map', // Enable source maps for easier debugging
};
```
In this configuration, `ts-loader` will pick up your TypeScript files, use your `tsconfig.json` settings (by default) to transpile them into JavaScript, and then Webpack will bundle the resulting JavaScript. Webpack's strength lies in its ability to handle complex asset pipelines and optimize for various deployment targets. Common mistakes include forgetting to add `.ts` to `resolve.extensions` or not excluding `node_modules` from the `ts-loader` rule, which can lead to slow builds or errors.

**Rollup** is another popular bundler, often favored for building JavaScript libraries and components due to its efficient tree-shaking capabilities, which remove unused code. Integrating TypeScript with Rollup is straightforward using `@rollup/plugin-typescript`. You'll install it along with Rollup: `npm install --save-dev rollup @rollup/plugin-typescript typescript`. Rollup's configuration is typically in `rollup.config.js`:

```javascript
// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // Your library's entry point
  output: {
    dir: 'dist',
    format: 'esm', // or 'cjs', 'umd'
    sourcemap: true,
  },
  plugins: [
    typescript(), // Apply the TypeScript plugin
  ],
};
```
Rollup's configuration is generally simpler than Webpack's, making it a good choice for smaller bundles and libraries. The `@rollup/plugin-typescript` integrates seamlessly with your `tsconfig.json`. Rollup's focus on ES Modules and tree-shaking makes it ideal for producing highly optimized, lightweight packages.

**Vite** is a relatively newer build tool that has gained immense popularity for its incredibly fast development server and optimized build process. Unlike Webpack and Rollup which pre-bundle your code during development, Vite leverages native ES Modules in the browser. This means it only transforms and serves code on demand, leading to near-instantaneous hot module replacement (HMR) and startup times. For production builds, Vite uses Rollup under the hood. To use TypeScript with Vite, you simply create a project using `npm init vite@latest` and select the `vanilla-ts` or a framework-specific TypeScript template (e.g., `react-ts`). Vite automatically detects and uses your `tsconfig.json`.

Here's a minimal `vite.config.ts` (often not even needed for basic setups):
```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  // Vite automatically handles TypeScript, no explicit plugin needed for basic setup
  // You might add plugins for frameworks like React or Vue here
});
```
Vite's approach with native ES Modules and its use of `esbuild` for transpilation (which is written in Go and extremely fast) makes it a game-changer for developer productivity. It handles TypeScript out of the box, often requiring minimal to no configuration for basic projects. The main difference to note is that Vite uses `esbuild` for transpilation during development, which is faster than `tsc` but only performs syntax transformation, not full type checking. Full type checking is usually run as a separate process or during the production build.

When choosing a build tool for your TypeScript project, consider the following:
*   **Webpack:** Best for complex, large-scale applications, especially SPAs, where you need extensive control over the asset pipeline, code splitting, and a vast plugin ecosystem. It has a steeper learning curve.
*   **Rollup:** Ideal for building JavaScript libraries, UI components, and small-to-medium-sized applications where tree-shaking and producing lightweight bundles are priorities.
*   **Vite:** Excellent for rapid development of modern web applications, offering unparalleled development server performance. It's becoming a strong contender for production builds as well, especially for framework-based projects.

Each tool has its strengths, and the best choice often depends on the specific requirements of your project. The key takeaway is that integrating TypeScript with these tools allows you to combine TypeScript's type safety with the powerful bundling, optimization, and development features that modern web development demands.

#### Key concepts
*   **Build Tool**: Software (like Webpack, Rollup, Vite) that automates tasks like bundling, transpiling, optimizing, and deploying code.
*   **Webpack**: A module bundler primarily for complex web applications, known for its extensive configurability and plugin ecosystem.
*   **`ts-loader`**: A Webpack loader that transpiles TypeScript code into JavaScript.
*   **Rollup**: A module bundler optimized for JavaScript libraries, focusing on efficient tree-shaking and smaller output bundles.
*   **`@rollup/plugin-typescript`**: A Rollup plugin for integrating TypeScript compilation.
*   **Vite**: A next-generation frontend tool that leverages native ES Modules for incredibly fast development server startup and HMR, using Rollup for production builds.
*   **Tree-shaking**: An optimization technique that removes unused code from the final bundle.
*   **Hot Module Replacement (HMR)**: A development feature that allows modules to be updated in a running application without a full page reload.

#### Hands-on activity
**Setting up a TypeScript Project with Webpack**

1.  **Initialize a new project:** Create a new directory `ts-webpack-app`.
    ```bash
    mkdir ts-webpack-app
    cd ts-webpack-app
    npm init -y
    npm install --save-dev webpack webpack-cli ts-loader typescript
    npx tsc --init # Generate tsconfig.json
    ```
2.  **Configure `tsconfig.json`:** Ensure your `tsconfig.json` has `target`, `module`, `outDir` (e.g., `"es2020"`, `"esnext"`, `"./dist"` respectively), and `strict: true`. For Webpack, setting `module` to `esnext` or `es2020` is often preferred as Webpack handles the module resolution.
    ```json
    // tsconfig.json
    {
      "compilerOptions": {
        "target": "es2020",
        "module": "esnext", // Important for Webpack to handle ES modules
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
      },
      "include": [
        "src/**/*.ts"
      ],
      "exclude": [
        "node_modules"
      ]
    }
    ```
3.  **Create `webpack.config.js`:** In the root of your project, create `webpack.config.js`.
    ```javascript
    // webpack.config.js
    const path = require('path');

    module.exports = {
      mode: 'development',
      entry: './src/index.ts',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      devtool: 'inline-source-map',
    };
    ```
4.  **Create source files:**
    Create a `src` directory. Inside `src`, create `greeter.ts`:
    ```typescript
    // src/greeter.ts
    export function greet(name: string): string {
        return `Hello from greeter, ${name}!`;
    }
    ```
    And `src/index.ts`:
    ```typescript
    // src/index.ts
    import { greet } from './greeter';

    function runApplication() {
        const message = greet("Cohortia Learner");
        console.log(message);

        // Example of a DOM interaction (if you were building for browser)
        // const appDiv = document.getElementById('app');
        // if (appDiv) {
        //     appDiv.innerHTML = `<h1>${message}</h1>`;
        // }
    }

    runApplication();
    ```
5.  **Add a build script:** In `package.json`, add a `build` script:
    ```json
    // package.json
    {
      "name": "ts-webpack-app",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "build": "webpack",
        "start": "node dist/bundle.js"
      },
      // ... rest of package.json
    }
    ```
6.  **Build and Run:**
    ```bash
    npm run build
    npm run start
    ```
    Observe that `dist/bundle.js` is created and contains the compiled and bundled code.

#### Assessment idea
1.  **Question:** You are building a new TypeScript library that needs to be as small as possible and support ES Modules for optimal tree-shaking when consumed by other applications. Which build tool would be the most appropriate choice, and what plugin would you use to integrate TypeScript?

    **Answer:** Rollup would be the most appropriate choice.
    **Explanation:** Rollup is specifically optimized for building JavaScript libraries and components, excelling at tree-shaking to produce smaller, more efficient bundles. The plugin to integrate TypeScript with Rollup is `@rollup/plugin-typescript`.

2.  **Question:** A developer is using Webpack with `ts-loader` for their TypeScript project but is encountering errors like "Module not found: Error: Can't resolve './my-module' in '...'" for their `.ts` files, even though the paths are correct. They've checked their `tsconfig.json` and it seems fine. What common configuration mistake in `webpack.config.js` might be causing this, and how would you fix it?

    **Answer:** The most common mistake is forgetting to tell Webpack to resolve `.ts` extensions.
    **Explanation:** Webpack, by default, only resolves `.js` files. To fix this, you need to add `.ts` to the `resolve.extensions` array in `webpack.config.js`.
    **Fix:**
    ```javascript
    // webpack.config.js
    module.exports = {
      // ... other config
      resolve: {
        extensions: ['.ts', '.js'], // Add .ts here
      },
      // ... rest of config
    };
    ```
    This tells Webpack that when it encounters an `import 'module'`, it should also look for `module.ts` in addition to `module.js`.

#### AI generation note
Create a 15-minute live coding demo. Start with a simple TypeScript project. First, show how to set up Webpack with `ts-loader`, demonstrating the `webpack.config.js` and `package.json` scripts. Compile and run. Next, briefly show the equivalent setup for Rollup with `@rollup/plugin-typescript`, emphasizing its use for libraries. Finally, demonstrate Vite by initializing a new Vite-TS project, highlighting its instant startup and HMR. Use side-by-side terminal windows to show `npm run dev` for Vite and `npm run build` for Webpack. Visually compare the bundle sizes or build times for a simple app. The interactive element should be a guided lab where learners modify an existing `webpack.config.js` to add support for a new asset type (e.g., CSS with `css-loader`).

---

### Chapter 6.4 — Linting, Formatting, and Code Quality with ESLint and Prettier

#### Learning objectives
*   Understand the importance of linting and code formatting for team collaboration and code quality.
*   Set up ESLint with TypeScript support using `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`.
*   Configure Prettier for automatic code formatting and integrate it with ESLint.
*   Implement pre-commit hooks using Husky and lint-staged to enforce code quality standards.
*   Write custom ESLint rules or configurations to match specific project requirements.

#### Detailed lesson content
Maintaining a consistent and high-quality codebase is paramount, especially in team environments. As projects grow, different coding styles and potential errors can creep in, making code harder to read, debug, and maintain. This is where linting and code formatting tools become indispensable. This chapter will guide you through setting up ESLint for static code analysis and Prettier for automatic code formatting, ensuring your TypeScript projects adhere to a unified style and catch common pitfalls before they become bugs.

**Linting with ESLint** is the process of statically analyzing code to find programmatic errors, bugs, stylistic issues, and suspicious constructs. For TypeScript, ESLint is the de-facto standard. To integrate ESLint with TypeScript, you need a few key packages: `eslint`, `@typescript-eslint/parser` (which allows ESLint to understand TypeScript syntax), and `@typescript-eslint/eslint-plugin` (which provides TypeScript-specific linting rules). You'll install these as dev dependencies: `npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`.

After installation, you'll create an ESLint configuration file, typically `.eslintrc.js` or `.eslintrc.json`. A common setup involves extending recommended configurations and adding specific rules. Here's a basic `.eslintrc.js` for a TypeScript project:
```javascript
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json', // Required for rules that need type information
  },
  rules: {
    // Place to add your custom ESLint rules
    // e.g., '@typescript-eslint/explicit-function-return-type': 'off',
    // 'no-console': 'warn', // Warns about console.log statements
  },
};
```
The `parserOptions.project` setting is crucial for enabling rules that require type information, such as checking for unused variables or strict null checks. Without it, many powerful TypeScript-specific rules won't function. A common mistake is forgetting to include this, which leads to ESLint not catching type-related issues. You can then add a script to your `package.json` to run ESLint: `"lint": "eslint \"{src,apps,libs}/**/*.ts\" --fix"`. The `--fix` flag attempts to automatically fix some linting issues.

**Code Formatting with Prettier** focuses purely on stylistic consistency, such as indentation, line length, semicolons, and quotes. It's an opinionated formatter that aims to eliminate bikeshedding over style. Prettier works exceptionally well with TypeScript out of the box. Install it: `npm install --save-dev prettier`. You can create a `.prettierrc.js` file for configuration:
```javascript
// .prettierrc.js
module.exports = {
  semi: true, // Print semicolons at the end of statements
  trailingComma: 'es5', // Print trailing commas wherever valid in ES5
  singleQuote: true, // Use single quotes instead of double quotes
  printWidth: 100, // Specify the line length that the printer will wrap on
  tabWidth: 2, // Specify the number of spaces per indentation-level
};
```
To run Prettier, you can add a script: `"format": "prettier --write \"{src,apps,libs}/**/*.ts\""`. The `--write` flag formats files in place.

**Integrating ESLint and Prettier** is key to a harmonious workflow. You want ESLint to handle code quality and potential bugs, and Prettier to handle formatting, without them conflicting. The best way to achieve this is to use `eslint-config-prettier` and `eslint-plugin-prettier`. `eslint-config-prettier` turns off all ESLint rules that might conflict with Prettier, and `eslint-plugin-prettier` runs Prettier as an ESLint rule, reporting formatting issues as ESLint errors.
Install them: `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`.
Then, update your `.eslintrc.js`:
```javascript
// .eslintrc.js (updated)
module.exports = {
  // ... other configs
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Add this last to ensure Prettier overrides conflicting rules
  ],
  rules: {
    // Your custom rules
  },
};
```
Now, running `eslint --fix` will both lint and format your code.

To **enforce these standards** before code even reaches your version control system, you can use **pre-commit hooks**. **Husky** is a tool that makes it easy to manage Git hooks, and **lint-staged** allows you to run linters on Git staged files only.
Install them: `npm install --save-dev husky lint-staged`.
Configure Husky in `package.json`:
```json
// package.json
{
  "name": "my-ts-app",
  // ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": "eslint --fix" // Run ESLint --fix on staged .ts and .tsx files
  }
}
```
After installing Husky, you need to enable it: `npx husky install`. This sets up the Git hook. Now, every time you try to `git commit`, `lint-staged` will run ESLint on your staged TypeScript files, and if any errors are found (or if `--fix` fails to resolve them), the commit will be blocked. This is a powerful safety net for maintaining code quality across a team.

Finally, for unique project requirements, you might need to **write custom ESLint rules** or create more granular configurations. While writing custom rules is an advanced topic, you can easily override or disable specific rules in your `.eslintrc.js` to tailor the linting experience. For example, if you find `no-console` too restrictive during development, you can set `'no-console': 'warn'` or `'no-console': 'off'`. The ESLint documentation is an excellent resource for exploring the vast array of available rules.

By implementing ESLint, Prettier, and pre-commit hooks, you establish a robust system for code quality and consistency, reducing technical debt and fostering a more collaborative and efficient development environment.

#### Key concepts
*   **Linting**: Static code analysis to identify potential errors, bugs, stylistic issues, and suspicious constructs.
*   **ESLint**: The most popular JavaScript/TypeScript linter.
*   **`@typescript-eslint/parser`**: An ESLint parser that enables ESLint to understand TypeScript syntax.
*   **`@typescript-eslint/eslint-plugin`**: An ESLint plugin providing TypeScript-specific linting rules.
*   **Prettier**: An opinionated code formatter that enforces a consistent style across the codebase.
*   **`eslint-config-prettier`**: An ESLint configuration that disables rules conflicting with Prettier.
*   **`eslint-plugin-prettier`**: An ESLint plugin that runs Prettier as an ESLint rule.
*   **Husky**: A tool for managing Git hooks (e.g., pre-commit, pre-push).
*   **`lint-staged`**: A utility that runs linters on Git staged files, preventing bad code from being committed.
*   **Pre-commit hook**: A Git hook that runs automatically before a commit is finalized, often used for linting and testing.

#### Hands-on activity
**Setting up ESLint, Prettier, and Pre-commit Hooks**

1.  **Continue from previous activity:** Use your `ts-webpack-app` or `my-ts-app` project.
2.  **Install dependencies:**
    ```bash
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged
    ```
3.  **Configure `.eslintrc.js`:** Create or update `.eslintrc.js` in your project root.
    ```javascript
    // .eslintrc.js
    module.exports = {
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Must be last
      ],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json', // Ensure this path is correct
      },
      rules: {
        // Example custom rule: disallow explicit `any` type (warn)
        '@typescript-eslint/no-explicit-any': 'warn',
        // Example custom rule: enforce consistent type definitions (error)
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // Example: Warn on unused variables, but allow args to be unused if prefixed with _
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        // Prettier rules are handled by plugin:prettier/recommended
      },
    };
    ```
4.  **Configure `.prettierrc.js`:** Create `.prettierrc.js` in your project root.
    ```javascript
    // .prettierrc.js
    module.exports = {
      semi: true,
      trailingComma: 'all', // 'all' is often preferred for Git diffs
      singleQuote: true,
      printWidth: 100,
      tabWidth: 2,
    };
    ```
5.  **Add scripts to `package.json`:**
    ```json
    // package.json
    {
      "name": "my-ts-app",
      // ...
      "scripts": {
        "lint": "eslint \"{src,apps,libs}/**/*.ts\" --fix",
        "format": "prettier --write \"{src,apps,libs}/**/*.ts\"",
        "build": "webpack", // or whatever your build command is
        "prepare": "husky install" // Add this for Husky
      },
      "husky": {
        "hooks": {
          "pre-commit": "lint-staged"
        }
      },
      "lint-staged": {
        "*.{ts,tsx}": "eslint --fix"
      },
      // ... rest of package.json
    }
    ```
6.  **Initialize Husky:**
    ```bash
    npm run prepare # Or npx husky install
    ```
7.  **Test the setup:**
    *   Modify `src/index.ts` to introduce a linting error (e.g., an unused variable without `_` prefix, or use `any` explicitly).
    *   Introduce a formatting error (e.g., inconsistent indentation, double quotes instead of single quotes).
    *   Stage the changes: `git add src/index.ts`.
    *   Attempt to commit: `git commit -m "Test linting and formatting"`.
    *   Observe ESLint and Prettier running, fixing what they can, and potentially blocking the commit if unfixable errors remain. Fix any remaining errors and commit successfully.

#### Assessment idea
1.  **Question:** Your team is experiencing frequent arguments over code style (e.g., tabs vs. spaces, semicolon usage) and occasionally commits code with minor syntax errors. You want to automate the enforcement of a consistent style and catch basic errors before they reach the main branch. What two tools would you primarily recommend, and how would you configure them to work together effectively?

    **Answer:**
    *   **Prettier** for automatic code formatting. It enforces a consistent style without developer intervention.
    *   **ESLint** for static code analysis, catching programmatic errors and stylistic issues.
    To make them work together:
    1.  Install `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `prettier`, `eslint-config-prettier`, and `eslint-plugin-prettier`.
    2.  Configure `.eslintrc.js` to `extend` `plugin:prettier/recommended` as the *last* item in the `extends` array. This ensures Prettier's formatting rules override any conflicting ESLint stylistic rules.
    3.  Configure `.prettierrc.js` with the desired formatting options.
    This setup allows ESLint to handle code quality and Prettier to handle formatting, with ESLint deferring to Prettier for style, preventing conflicts.

2.  **Question:** A developer attempts to commit their changes, but the commit is blocked with an error message indicating linting failures on a staged file. They haven't explicitly run any linting commands. Which tools are likely responsible for this behavior, and what is the benefit of this setup?

    **Answer:** Husky and `lint-staged` are likely responsible.
    **Explanation:**
    *   **Husky** is used to manage Git hooks, specifically a `pre-commit` hook in this scenario.
    *   **`lint-staged`** is configured to run linters (like ESLint) on only the files that are currently staged for commit.
    The **benefit** of this setup is that it enforces code quality and formatting standards *before* code is committed to the repository. This prevents bad or inconsistently formatted code from entering the version control system, reducing technical debt, improving code review efficiency, and ensuring a higher baseline quality for the entire codebase.

#### AI generation note
Create a 12-15 minute interactive lab walkthrough. Start with a TypeScript project that has some style inconsistencies and a minor linting error. Live-code the installation of ESLint and Prettier, then show the creation and configuration of `.eslintrc.js` and `.prettierrc.js`. Demonstrate running `eslint --fix` and `prettier --write` separately. Then, integrate them using `eslint-config-prettier` and `eslint-plugin-prettier`, showing how `eslint --fix` now handles both. Finally, set up Husky and `lint-staged`, demonstrating a failed commit due to linting errors and a successful one after fixes. Visuals should include terminal output, code diffs showing formatting changes, and a "Git commit blocked" animation. The interactive element should be a mini-challenge to fix a provided code snippet using the newly configured linting/formatting setup.

---

### Chapter 6.5 — Testing TypeScript Applications (Jest, React Testing Library/Cypress)

#### Learning objectives
*   Understand the importance of testing in TypeScript projects for reliability and maintainability.
*   Set up Jest for unit and integration testing in a TypeScript environment.
*   Write effective unit tests for TypeScript functions and classes using Jest's matchers.
*   Configure Jest to work with TypeScript, including `ts-jest` for transpilation.
*   Briefly explore how TypeScript enhances integration and end-to-end testing with tools like React Testing Library or Cypress.

#### Detailed lesson content
After meticulously setting up your TypeScript project, configuring your compiler, and enforcing code quality with linters and formatters, the final crucial step in building robust applications is testing. Testing ensures that your code behaves as expected, catches regressions, and provides confidence for future refactoring and feature development. TypeScript adds an extra layer of confidence by catching type-related errors at compile time, but it doesn't replace the need for runtime validation through testing. This chapter will focus on setting up and using Jest, a popular testing framework, for TypeScript applications, and briefly touch upon how TypeScript integrates with other testing paradigms.

**Jest** is a delightful JavaScript testing framework, widely adopted for its simplicity, speed, and comprehensive features, including assertion libraries, mocking, and code coverage. Integrating Jest with TypeScript requires `ts-jest`, a preprocessor that transpiles TypeScript code on the fly before Jest runs the tests. To get started, install Jest, `ts-jest`, and `@types/jest` as development dependencies: `npm install --save-dev jest ts-jest @types/jest`.

Once installed, you'll need to configure Jest. This can be done in your `package.json` or a separate `jest.config.js` file. A common `jest.config.js` setup for TypeScript looks like this:
```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript
  testEnvironment: 'node', // Or 'jsdom' for browser environments
  roots: ['<rootDir>/src'], // Where to find your source files and tests
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)', // Match test files in __tests__ directories
    '**/?(*.)+(spec|test).+(ts|tsx|js)', // Match .spec.ts or .test.ts files
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform .ts and .tsx files using ts-jest
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1', // If you use path aliases in tsconfig.json
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Point to your tsconfig.json
    },
  },
};
```
The `preset: 'ts-jest'` handles most of the heavy lifting, but explicitly defining `testMatch` and `transform` provides clarity. If you're using `paths` aliases in your `tsconfig.json` (as discussed in Chapter 6.2), you'll also need to configure `moduleNameMapper` in Jest to ensure your tests can resolve those aliased imports. A common mistake is forgetting this, leading to "Module not found" errors during test execution.

Now, let's write some unit tests. Unit tests focus on testing individual, isolated units of code (functions, classes, modules). Consider a simple utility function in `src/utils/math.ts`:
```typescript
// src/utils/math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}
```
You would create a corresponding test file, typically `src/utils/math.test.ts` or `src/utils/__tests__/math.test.ts`:
```typescript
// src/utils/math.test.ts
import { add, subtract } from './math';

describe('Math Utilities', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  it('should correctly subtract two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 15)).toBe(-5);
  });

  // Example of a failing test to demonstrate Jest output
  // it('should fail this test', () => {
  //   expect(add(1, 1)).toBe(3); // This will fail
  // });
});
```
To run your tests, add a script to `package.json`: `"test": "jest"`. Then execute `npm run test`. Jest will discover your test files, run them, and report the results. Jest's rich set of matchers (e.g., `toBe`, `toEqual`, `toHaveBeenCalled`, `toThrow`) makes assertions intuitive and readable.

**Integration Testing** with TypeScript often involves testing how different units or components interact. For frontend applications, tools like **React Testing Library** (for React) or **Vue Test Utils** (for Vue) are excellent for testing components in a way that mimics user interaction. TypeScript enhances these by providing strong typing for props, events, and component state, ensuring that your test setup matches the component's expected interface. For example, when testing a React component, TypeScript will ensure you pass the correct types for props in your test render function, catching errors before the test even runs.

**End-to-End (E2E) Testing** simulates a user's journey through the entire application, often involving a real browser. Tools like **Cypress** or **Playwright** are popular for E2E testing. While the tests themselves are often written in JavaScript, TypeScript can be used for defining page objects, custom commands, and fixtures, providing type safety for selectors, input values, and expected outcomes. For instance, you could define an interface for a `LoginPage` object that includes typed methods for `fillUsername(username: string)` and `fillPassword(password: string)`, ensuring consistency and catching typos in your test scripts.

In summary, testing is an integral part of the software development lifecycle. By combining TypeScript's compile-time type safety with robust testing frameworks like Jest for unit/integration tests and E2E tools like Cypress, you build applications that are not only type-safe but also functionally correct and resilient to change. Embrace testing from the outset; it's an investment in your project's long-term health and your peace of mind.

#### Key concepts
*   **Testing Framework**: A set of tools and rules for writing and running tests (e.g., Jest).
*   **Unit Test**: Tests an individual, isolated unit of code (function, class, module).
*   **Integration Test**: Tests how different units or components interact with each other.
*   **End-to-End (E2E) Test**: Simulates a user's full journey through the application, testing the entire system.
*   **Jest**: A popular JavaScript testing framework supporting unit, integration, and snapshot testing.
*   **`ts-jest`**: A Jest preprocessor that transpiles TypeScript code for Jest to run.
*   **`jest.config.js`**: The configuration file for Jest.
*   **Matchers**: Functions in Jest (e.g., `toBe`, `toEqual`) used to assert conditions in tests.
*   **React Testing Library**: A library for testing React components in a user-centric way.
*   **Cypress**: A modern E2E testing framework for web applications.

#### Hands-on activity
**Setting up Jest for a TypeScript Project**

1.  **Continue from previous activity:** Use your `my-ts-app` project (or create a new one if preferred).
2.  **Install dependencies:**
    ```bash
    npm install --save-dev jest ts-jest @types/jest
    ```
3.  **Configure `jest.config.js`:** Create `jest.config.js` in your project root.
    ```javascript
    // jest.config.js
    module.exports = {
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/src'],
      testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
      ],
      transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      },
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.json',
        },
      },
      // If you used path aliases in tsconfig.json (e.g., "@models/*"),
      // you'll need to map them here for Jest:
      // moduleNameMapper: {
      //   '^@models/(.*)$': '<rootDir>/src/models/$1',
      // },
    };
    ```
4.  **Create source code to test:**
    Create `src/calculator.ts`:
    ```typescript
    // src/calculator.ts
    export class Calculator {
        add(a: number, b: number): number {
            return a + b;
        }

        subtract(a: number, b: number): number {
            return a - b;
        }

        multiply(a: number, b: number): number {
            return a * b;
        }

        divide(a: number, b: number): number {
            if (b === 0) {
                throw new Error("Cannot divide by zero.");
            }
            return a / b;
        }
    }
    ```
5.  **Create a test file:**
    Create a `src/__tests__` directory, and inside it, `calculator.test.ts`:
    ```typescript
    // src/__tests__/calculator.test.ts
    import { Calculator } from '../calculator'; // Adjust path if needed

    describe('Calculator', () => {
      let calculator: Calculator;

      beforeEach(() => {
        calculator = new Calculator();
      });

      it('should correctly add two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, 1)).toBe(0);
      });

      it('should correctly subtract two numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
        expect(calculator.subtract(2, 5)).toBe(-3);
      });

      it('should correctly multiply two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, 5)).toBe(-5);
      });

      it('should correctly divide two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3);
        expect(calculator.divide(10, 4)).toBe(2.5);
      });

      it('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero.");
      });
    });
    ```
6.  **Add a test script to `package.json`:**
    ```json
    // package.json
    {
      "name": "my-ts-app",
      // ...
      "scripts": {
        "test": "jest",
        // ... other scripts
      },
      // ... rest of package.json
    }
    ```
7.  **Run tests:**
    ```bash
    npm run test
    ```
    Observe Jest running your tests and reporting the results. Try intentionally breaking a test (e.g., change `expect(calculator.add(2, 3)).toBe(6);`) and rerun to see the failure output.

#### Assessment idea
1.  **Question:** You are setting up Jest for a new TypeScript project. You've installed `jest` and `ts-jest`, but when you run your tests, you get errors indicating that TypeScript syntax isn't being understood. What is the most likely missing configuration step in your `jest.config.js` or `package.json`?

    **Answer:** The `preset` or `transform` configuration for `ts-jest` is likely missing or incorrect in `jest.config.js`.
    **Explanation:** Jest needs to know how to process TypeScript files before running tests. This is typically done by setting `preset: 'ts-jest'` or explicitly configuring the `transform` option to use `ts-jest` for `.ts` and `.tsx` files. Without this, Jest will try to interpret TypeScript syntax as plain JavaScript, leading to errors.

2.  **Question:** Consider the following TypeScript function and a Jest test for it. Identify a potential improvement for the test regarding its robustness and best practices.

    ```typescript
    // src/data-processor.ts
    export function processData(data: string[] | null): number {
        if (data === null) {
            throw new Error("Data cannot be null.");
        }
        return data.length;
    }

    // src/__tests__/data-processor.test.ts
    import { processData } from '../data-processor';

    describe('processData', () => {
      it('should return the length of the array', () => {
        expect(processData(['a', 'b', 'c'])).toBe(3);
      });
    });
    ```

    **Answer:** The test should include a case for when `data` is `null` to ensure the error handling works as expected.
    **Explanation:** While TypeScript's type system helps, runtime checks are still necessary for values that can be `null` or `undefined` (especially from external sources). The `processData` function explicitly handles `null` input by throwing an error. A robust test suite should verify this error-handling path.
    **Improved Test:**
    ```typescript
    // src/__tests__/data-processor.test.ts (Improved)
    import { processData } from '../data-processor';

    describe('processData', () => {
      it('should return the length of the array', () => {
        expect(processData(['a', 'b', 'c'])).toBe(3);
      });

      it('should throw an error when data is null', () => {
        expect(() => processData(null)).toThrow("Data cannot be null.");
      });

      it('should return 0 for an empty array', () => {
        expect(processData([])).toBe(0);
      });
    });
    ```

#### AI generation note
Create a 15-minute live coding demo. Start with a simple TypeScript class (e.g., a `ShoppingCart` class). Live-code the installation of Jest and `ts-jest`. Then, create a `jest.config.js` and explain each key option. Write a unit test file for the `ShoppingCart` class, demonstrating various Jest matchers (`toBe`, `toEqual`, `toThrow`). Show how to run tests via `npm run test` and interpret the output, including intentional failures. Briefly discuss how TypeScript types contribute to writing better tests for UI components (e.g., a `render` function in React Testing Library with typed props). The interactive element should be a coding challenge where learners add a new test case to an existing test file to cover an edge case (e.g., testing an empty shopping cart or adding a negative quantity).

---

## Final Capstone Project

Congratulations on reaching the final stage of your TypeScript journey! This course has equipped you with a robust understanding of TypeScript's core features, from basic types to advanced patterns, classes, and generics. Now it's time to consolidate that knowledge by building a substantial project.

The capstone project is your opportunity to apply everything you've learned in a practical, hands-on scenario. You'll choose one of three distinct project options, each designed to challenge you and demonstrate your proficiency in TypeScript. Remember to focus on writing clean, well-typed, and maintainable code. This is not just about making something work, but about building it *correctly* with TypeScript.

For each project, you'll find a set of core requirements that must be met, along with stretch goals to push your skills further. We also provide evaluation criteria to help you understand how your project will be assessed and an estimated time commitment. Choose the project that excites you most and aligns with your personal learning goals. Good luck, and have fun building!

### Project Option 1: Interactive Task Management Application (Web-based)

This project challenges you to build a single-page web application for managing tasks. You'll need to leverage TypeScript for defining task structures, managing application state, and ensuring type safety throughout your UI interactions. This project emphasizes data modeling, functional programming with types, and event handling.

**Core Requirements:**
*   **Task Definition:** Define a TypeScript `interface` or `type alias` for a `Task` that includes properties like `id` (unique string), `title` (string), `description` (string, optional), `isCompleted` (boolean), and `createdAt` (Date).
*   **Task Creation:** Implement a form to add new tasks. Ensure input validation and proper type conversion before creating a new `Task` object.
*   **Task Listing:** Display all tasks in a clear, sortable list. Each task should show its title and completion status.
*   **Task Actions:** Provide buttons or checkboxes to:
    *   Mark a task as complete/incomplete.
    *   Delete a task.
*   **Task Filtering:** Implement filters to show "All Tasks," "Active Tasks," and "Completed Tasks."
*   **Local Storage Persistence:** Save and load tasks from the browser's `localStorage` so that tasks persist across page refreshes. Ensure type safety when deserializing data from `localStorage`.
*   **Modular Structure:** Organize your code into logical TypeScript modules (e.g., `models.ts`, `taskManager.ts`, `domRenderer.ts`).

**Stretch Goals:**
*   **Task Editing:** Allow users to edit the title and description of existing tasks.
*   **Drag-and-Drop Reordering:** Implement drag-and-drop functionality to reorder tasks within the list.
*   **Due Dates:** Add a `dueDate` property (Date, optional) to tasks and allow sorting by due date.
*   **User Interface Framework:** Integrate a lightweight UI library or framework (e.g., Lit, Preact, or even just vanilla DOM manipulation with a component-like structure) and ensure all components are type-safe.

**Evaluation Criteria:**
*   **Type Safety:** Comprehensive use of TypeScript types, interfaces, and type aliases throughout the application. Minimal use of `any`.
*   **Code Structure:** Clear, modular, and well-organized code. Adherence to good programming practices.
*   **Functionality:** All core requirements are met and work as expected.
*   **Error Handling:** Graceful handling of potential errors (e.g., invalid input, `localStorage` issues).
*   **User Experience:** The application is intuitive and easy to use.

**Estimated Time:** 10-15 hours

### Project Option 2: Simple E-commerce Product Catalog (Web-based)

Develop a web-based product catalog that displays a list of items, allows users to filter and search, and view detailed information for each product. This project emphasizes complex data modeling with interfaces, array manipulation, and dynamic rendering of data.

**Core Requirements:**
*   **Product Data Model:** Define a TypeScript `interface` for a `Product` that includes properties like `id` (string), `name` (string), `description` (string), `price` (number), `category` (string literal type or enum), and `imageUrl` (string, optional).
*   **Category Data:** Define a `type alias` for `Category` that is a union of specific string literals (e.g., `'Electronics' | 'Books' | 'Clothing'`).
*   **Product Listing:** Display a grid or list of products, showing their name, price, and a small image.
*   **Product Details Page/Modal:** When a product is clicked, show a detailed view of that product, including all its properties.
*   **Filtering by Category:** Implement buttons or a dropdown to filter products by their category.
*   **Search Functionality:** Add a search bar that filters products by name (case-insensitive).
*   **Sorting:** Allow users to sort products by price (ascending/descending) or name (A-Z/Z-A).
*   **Mock Data:** Create a `products.ts` file that exports an array of at least 10-15 mock `Product` objects.

**Stretch Goals:**
*   **Shopping Cart (Frontend Only):** Implement a basic "Add to Cart" button. Maintain a type-safe `cart` array in memory (no persistence needed for this goal). Display the number of items in the cart.
*   **Pagination:** If you have many products, implement pagination to display a limited number of products per page.
*   **User Reviews:** Add an interface for `Review` (rating, comment, author) and allow products to have an array of reviews. Display average rating.
*   **Generic Filtering/Sorting Component:** Design a generic TypeScript function or class that can filter/sort any array of objects based on a property.

**Evaluation Criteria:**
*   **Type System Design:** Robust and accurate type definitions for `Product`, `Category`, and any other data structures.
*   **Data Manipulation:** Correct and efficient implementation of filtering, searching, and sorting logic using type-safe methods.
*   **User Interface:** Clear presentation of product information and intuitive interaction for filtering/searching.
*   **Modularity:** Logical separation of concerns into distinct TypeScript files/modules.
*   **Code Quality:** Readability, comments where necessary, and adherence to TypeScript best practices.

**Estimated Time:** 12-18 hours

### Project Option 3: Command-Line Data Processor (Node.js)

Build a command-line interface (CLI) tool using Node.js and TypeScript that processes data from a file. This project focuses on backend TypeScript development, file I/O, error handling, and robust argument parsing.

**Core Requirements:**
*   **Input File Processing:** The CLI should accept a path to a CSV file as an argument.
*   **Data Model:** Define a TypeScript `interface` or `type alias` for the expected structure of each row in the CSV (e.g., `Transaction` with `id`, `amount`, `date`, `description`).
*   **CSV Parsing:** Read the CSV file, parse its contents, and convert each row into a type-safe object according to your data model. You may use a library like `csv-parser` or implement a basic parser yourself.
*   **Data Aggregation:** Implement a function to perform a simple aggregation on the data, such as:
    *   Calculating the total sum of `amount` for all transactions.
    *   Counting transactions per month.
    *   Finding the average `amount`.
*   **Output:** Print the aggregated results to the console in a clear, human-readable format.
*   **Error Handling:** Implement robust error handling for scenarios like:
    *   File not found.
    *   Invalid file format (e.g., missing columns).
    *   Incorrect command-line arguments.
*   **Command-Line Arguments:** Use `process.argv` to parse command-line arguments (e.g., `node dist/index.js --file transactions.csv --operation sum`). Define an interface for your parsed arguments.

**Stretch Goals:**
*   **Multiple Operations:** Allow the user to specify different aggregation operations (e.g., `sum`, `average`, `count`). Use a union type for the operation argument.
*   **Output to File:** Add an option to write the results to an output file (e.g., JSON or another CSV).
*   **Configuration File:** Allow the CLI to read configuration from a `config.json` file (e.g., default input file, default operation). Define an interface for the configuration object.
*   **Validation Schema:** Use a validation library (like `zod` or `io-ts`) to validate the parsed CSV rows against your TypeScript data model at runtime.

**Evaluation Criteria:**
*   **Type Safety:** Thorough use of TypeScript for data models, function signatures, and argument parsing.
*   **Robustness:** Effective error handling for file operations, parsing, and invalid input.
*   **CLI Design:** Intuitive command-line interface and clear output.
*   **Code Organization:** Well-structured Node.js application using TypeScript modules.
*   **Correctness:** The data processing and aggregation logic produces accurate results.

**Estimated Time:** 15-20 hours

---

## Final Examination

This final examination is designed to assess your comprehensive understanding of TypeScript, covering all the modules you've completed. It includes a mix of question types to evaluate your conceptual knowledge, ability to trace code, write type-safe code, and debug common issues. Take your time, read each question carefully, and demonstrate your mastery of TypeScript.

**Instructions:**
*   Answer all questions to the best of your ability.
*   For code-writing questions, strive for idiomatic and type-safe TypeScript.
*   For debugging questions, clearly identify the error and provide the corrected code.
*   Partial credit may be awarded for well-reasoned but incomplete answers.

---

### Section 1: Concept Definitions (4 Questions)

1.  **Question:** Explain the primary benefit of using TypeScript over plain JavaScript in a large-scale application development context.
    **Answer:** The primary benefit of TypeScript over plain JavaScript in large-scale applications is its ability to provide **static type checking** during development. This means that type-related errors can be caught *before* the code runs, leading to fewer runtime bugs, improved code quality, and enhanced maintainability. TypeScript's types also act as self-documenting code, making it easier for developers to understand the expected data shapes and API contracts, especially in large teams or when working with unfamiliar codebases. This significantly boosts developer productivity and confidence.

2.  **Question:** Describe the key difference between an `interface` and a `type alias` in TypeScript, and provide a scenario where you might prefer one over the other.
    **Answer:** Both `interface` and `type alias` are used to define custom types in TypeScript. The key difference lies in their capabilities and extensibility.
    *   An `interface` can be **reopened and augmented** (declaration merging), meaning you can define an interface with the same name multiple times, and TypeScript will merge their properties. Interfaces are also typically used for defining the shape of objects and for implementing classes.
    *   A `type alias` cannot be reopened or augmented. However, `type alias` is more versatile as it can define not only object shapes but also **union types, intersection types, primitive types, tuple types, and mapped types**.
    A scenario where you might prefer an `interface` is when defining a public API for a library or framework, as it allows consumers to augment the interface with their own properties (e.g., adding custom properties to `Window` or `Request` objects). You would prefer a `type alias` when defining a union of string literals (e.g., `type Status = 'pending' | 'completed'`) or a complex intersection type, which interfaces cannot directly achieve.

3.  **Question:** What is a `union type` in TypeScript, and provide a simple code example demonstrating its use.
    **Answer:** A `union type` in TypeScript allows a variable or parameter to hold values of *one of several* specified types. It's declared using the `|` (pipe) symbol. This is useful when a value can legitimately be of different types, and you want to ensure type safety while still allowing flexibility.
    **Example:**
    ```typescript
    function printId(id: number | string) {
        if (typeof id === "string") {
            // In this block, 'id' is narrowed to type 'string'
            console.log(`Your ID is a string: ${id.toUpperCase()}`);
        } else {
            // In this block, 'id' is narrowed to type 'number'
            console.log(`Your ID is a number: ${id.toFixed(2)}`);
        }
    }

    printId(101);      // Output: Your ID is a number: 101.00
    printId("202a");   // Output: Your ID is a string: 202A
    // printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
    ```
    In this example, `id` can be either a `number` or a `string`. The `typeof` type guard helps TypeScript narrow down the type within the conditional blocks, allowing safe access to type-specific methods like `toUpperCase()` or `toFixed()`.

4.  **Question:** Describe the purpose of `declaration files (.d.ts)` in TypeScript projects.
    **Answer:** `Declaration files (.d.ts)` serve a crucial purpose in TypeScript by providing type information for existing JavaScript code or libraries that were not originally written in TypeScript. Their main purpose is to allow TypeScript projects to safely consume and interact with JavaScript codebases by describing the types of variables, functions, classes, and modules within those JavaScript files.
    When you install a JavaScript library (e.g., `lodash`, `jQuery`), TypeScript needs to know the types of its functions and objects to perform static analysis and provide autocompletion. If the library doesn't ship with its own `.d.ts` files, you can often install them separately (e.g., `@types/lodash`). These files contain only type definitions, no executable code, acting as a "header file" that tells the TypeScript compiler what to expect from the JavaScript code at runtime, without actually changing the runtime behavior of the JavaScript.

### Section 2: Code Tracing (3 Questions)

1.  **Question:** Consider the following TypeScript code. What will be logged to the console, and why?
    ```typescript
    interface Person {
        name: string;
        age: number;
    }

    class Employee implements Person {
        constructor(public name: string, public age: number, public employeeId: string) {}

        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old. My employee ID is ${this.employeeId}.`;
        }
    }

    function introduce(p: Person): string {
        return `This person's name is ${p.name} and they are ${p.age} years old.`;
    }

    const alice = new Employee("Alice", 30, "EMP001");
    console.log(introduce(alice));
    // console.log(alice.greet()); // If this line were uncommented, what would it output?
    ```
    **Answer:**
    The code will log: `This person's name is Alice and they are 30 years old.`

    **Explanation:**
    1.  An `interface Person` is defined with `name` and `age` properties.
    2.  A `class Employee` is defined that `implements Person`. This means `Employee` must have `name` and `age` properties, which it does (via `public name` and `public age` in the constructor). It also has an additional `employeeId` property and a `greet` method.
    3.  The `introduce` function accepts an argument `p` of type `Person`.
    4.  An instance `alice` of `Employee` is created.
    5.  When `introduce(alice)` is called, `alice` is passed as an argument. Even though `alice` is an `Employee` object, it *also* conforms to the `Person` interface (because `Employee` implements `Person`). TypeScript allows this because `Employee` has all the properties required by `Person`. This is an example of **polymorphism** and **structural typing**.
    6.  Inside `introduce`, only the `name` and `age` properties (which are part of the `Person` interface) are accessed. The `employeeId` and `greet` method specific to `Employee` are not accessible via the `p: Person` parameter type.
    7.  Therefore, the function returns and logs the string using only `alice.name` and `alice.age`.

    If `console.log(alice.greet());` were uncommented, it would output: `Hello, my name is Alice and I am 30 years old. My employee ID is EMP001.` This is because `alice` itself is of type `Employee`, and the `greet` method is directly accessible on the `Employee` instance.

2.  **Question:** Consider the following generic TypeScript function. What are the inferred types for `T` and `U` in the two `console.log` calls, and what will each call output?
    ```typescript
    function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
        return { ...obj1, ...obj2 } as T & U;
    }

    const user = { name: "Bob", age: 42 };
    const address = { street: "123 Main St", city: "Anytown" };

    const mergedData1 = mergeObjects(user, address);
    console.log(mergedData1);

    const product = { id: 1, name: "Laptop" };
    const details = { price: 1200, category: "Electronics" };

    const mergedData2 = mergeObjects(product, details);
    console.log(mergedData2.category);
    ```
    **Answer:**
    **Inferred Types and Output:**

    *   **`mergedData1 = mergeObjects(user, address)`:**
        *   `T` is inferred as `{ name: string; age: number; }`
        *   `U` is inferred as `{ street: string; city: string; }`
        *   The return type `T & U` is `{ name: string; age: number; } & { street: string; city: string; }`, which simplifies to `{ name: string; age: number; street: string; city: string; }`.
        *   **Output:**
            ```
            { name: 'Bob', age: 42, street: '123 Main St', city: 'Anytown' }
            ```

    *   **`mergedData2 = mergeObjects(product, details)`:**
        *   `T` is inferred as `{ id: number; name: string; }`
        *   `U` is inferred as `{ price: number; category: string; }`
        *   The return type `T & U` is `{ id: number; name: string; } & { price: number; category: string; }`, which simplifies to `{ id: number; name: string; price: number; category: string; }`.
        *   **Output:**
            ```
            Electronics
            ```

    **Explanation:**
    The `mergeObjects` function is a generic function that takes two objects, `obj1` (of type `T`) and `obj2` (of type `U`), and returns an intersection type `T & U`. The `extends object` constraint ensures that `T` and `U` must be object types.
    1.  For `mergedData1`, TypeScript infers `T` from `user` and `U` from `address`. The spread syntax `{ ...obj1, ...obj2 }` creates a new object containing all properties from both `user` and `address`. The `as T & U` assertion is used to tell TypeScript that the resulting object will indeed conform to the intersection type.
    2.  For `mergedData2`, `T` is inferred from `product` and `U` from `details`. Similarly, a new object is created with properties from both. When `mergedData2.category` is accessed, it correctly retrieves the `category` property from the merged object. The type inference correctly ensures that `mergedData2` is known to have a `category` property of type `string`.

3.  **Question:** Examine the following code snippet. What will be the type of `result` after the `if` statement, and what will be the output of `console.log(result.toFixed(2))`?
    ```typescript
    type Data = string | number | boolean;

    function processData(input: Data): number | string {
        if (typeof input === 'number') {
            return input * 2;
        } else if (typeof input === 'string') {
            return input.length;
        }
        return 0; // Default for boolean or other unexpected types
    }

    const value: Data = 123.456;
    const result = processData(value);

    if (typeof result === 'number') {
        console.log(result.toFixed(2));
    } else {
        console.log("Result is not a number.");
    }
    ```
    **Answer:**
    *   **Type of `result` after the `if` statement:** `number`
    *   **Output of `console.log(result.toFixed(2))`:** `246.91`

    **Explanation:**
    1.  The `value` variable is initialized as a `number` (`123.456`).
    2.  The `processData` function is called with `value`.
    3.  Inside `processData`, the first `if (typeof input === 'number')` condition is true.
    4.  `input * 2` is calculated: `123.456 * 2 = 246.912`.
    5.  The function returns `246.912`.
    6.  The `result` variable is assigned `246.912`. Its type is inferred as `number | string` based on the function's return type signature.
    7.  The subsequent `if (typeof result === 'number')` condition is true, acting as a **type guard**.
    8.  Inside this `if` block, TypeScript **narrows** the type of `result` specifically to `number`.
    9.  Therefore, `result.toFixed(2)` is safely called on the number `246.912`, which formats it to two decimal places, resulting in `246.91`.

### Section 3: Code Writing (4 Questions)

1.  **Question:** Define a TypeScript `interface` named `BlogPost` that represents a blog post. It should have the following properties:
    *   `id`: a unique identifier (string)
    *   `title`: the title of the post (string)
    *   `content`: the main body of the post (string)
    *   `author`: an object with `name` (string) and `email` (string) properties
    *   `tags`: an array of strings (optional)
    *   `publishedDate`: a `Date` object
    *   `isPublished`: a boolean indicating if the post is published (default to `false` if not provided)

    Then, create an example `BlogPost` object that adheres to this interface.

    **Answer:**
    ```typescript
    interface Author {
        name: string;
        email: string;
    }

    interface BlogPost {
        id: string;
        title: string;
        content: string;
        author: Author;
        tags?: string[]; // Optional property
        publishedDate: Date;
        isPublished?: boolean; // Optional, assumed false if not provided
    }

    // Example BlogPost object
    const myBlogPost: BlogPost = {
        id: "post-123",
        title: "Understanding TypeScript Interfaces",
        content: "Interfaces are powerful tools for defining contracts...",
        author: {
            name: "Jane Doe",
            email: "jane.doe@example.com"
        },
        tags: ["TypeScript", "Programming", "Interfaces"],
        publishedDate: new Date("2023-10-26T10:00:00Z"),
        isPublished: true
    };

    const draftBlogPost: BlogPost = {
        id: "post-456",
        title: "Drafting a New Article",
        content: "This is content for a draft...",
        author: {
            name: "John Smith",
            email: "john.smith@example.com"
        },
        publishedDate: new Date(), // Current date
        // isPublished is omitted, so it implicitly defaults to false if handled by logic
        // or would be undefined if not explicitly set.
        // For strict adherence, if it truly defaults, it's often handled by a constructor or factory.
        // Here, it's just an optional property.
    };

    console.log(myBlogPost);
    console.log(draftBlogPost);
    ```

2.  **Question:** Write a generic TypeScript function named `getFirstElement` that takes an array of any type `T` and returns the first element of that array. The function should safely handle an empty array by returning `undefined`. Ensure the function is type-safe.

    **Answer:**
    ```typescript
    function getFirstElement<T>(arr: T[]): T | undefined {
        if (arr.length === 0) {
            return undefined;
        }
        return arr[0];
    }

    // Example Usage:
    const numbers = [10, 20, 30];
    const firstNum = getFirstElement(numbers); // firstNum is inferred as number | undefined
    console.log(`First number: ${firstNum}`); // Output: First number: 10

    const strings = ["apple", "banana", "cherry"];
    const firstString = getFirstElement(strings); // firstString is inferred as string | undefined
    console.log(`First string: ${firstString}`); // Output: First string: apple

    const emptyArray: number[] = [];
    const firstOfEmpty = getFirstElement(emptyArray); // firstOfEmpty is inferred as number | undefined
    console.log(`First of empty: ${firstOfEmpty}`); // Output: First of empty: undefined

    // Demonstrating type safety:
    if (firstNum !== undefined) {
        console.log(firstNum.toFixed(2)); // OK, firstNum is narrowed to number
    }
    // console.log(firstOfEmpty.toFixed(2)); // Error: Object is possibly 'undefined'.
    ```

3.  **Question:** Implement a TypeScript class `Vehicle` with a `make` (string) and `year` (number) property, both of which should be `protected`. Include a `public` method `getDetails()` that returns a string describing the vehicle. Then, create a derived class `Car` that extends `Vehicle` and adds a `private` property `_doors` (number) and a `public` method `getCarDetails()` that includes the number of doors along with the vehicle details.

    **Answer:**
    ```typescript
    class Vehicle {
        protected make: string;
        protected year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        public getDetails(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private _doors: number; // Private property

        constructor(make: string, year: number, doors: number) {
            super(make, year); // Call the parent class constructor
            this._doors = doors;
        }

        public getCarDetails(): string {
            // Access protected properties from the base class
            return `${this.getDetails()}, Doors: ${this._doors}`;
        }

        // Example of a public getter for the private property
        public get doors(): number {
            return this._doors;
        }
    }

    // Example Usage:
    const myCar = new Car("Toyota", 2020, 4);
    console.log(myCar.getCarDetails()); // Output: Make: Toyota, Year: 2020, Doors: 4
    console.log(myCar.getDetails());    // Output: Make: Toyota, Year: 2020

    // console.log(myCar.make); // Error: Property 'make' is protected and only accessible within class 'Vehicle' and its subclasses.
    // console.log(myCar._doors); // Error: Property '_doors' is private and only accessible within class 'Car'.
    console.log(myCar.doors); // Output: 4 (Accessing private property via public getter)
    ```

4.  **Question:** Refactor the following JavaScript function into a type-safe TypeScript function. The function should take an array of numbers and an optional `factor` to multiply each number by. If `factor` is not provided, it should default to `1`. The function should return a new array with the multiplied numbers.

    **JavaScript Function:**
    ```javascript
    function multiplyArray(numbers, factor) {
        factor = factor === undefined ? 1 : factor;
        return numbers.map(num => num * factor);
    }
    ```

    **Answer:**
    ```typescript
    function multiplyArray(numbers: number[], factor?: number): number[] {
        // Use nullish coalescing operator for conciseness and type safety
        const actualFactor = factor ?? 1;

        // Ensure 'numbers' is indeed an array of numbers
        if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
            // In a real application, you might throw an error or handle this more gracefully.
            // For this exercise, we assume valid input or return an empty array if invalid.
            console.warn("Invalid input: 'numbers' must be an array of numbers.");
            return [];
        }

        return numbers.map((num: number) => num * actualFactor);
    }

    // Example Usage:
    const myNumbers = [1, 2, 3, 4, 5];

    const multipliedByTwo = multiplyArray(myNumbers, 2);
    console.log(multipliedByTwo); // Output: [2, 4, 6, 8, 10]

    const multipliedByDefault = multiplyArray(myNumbers);
    console.log(multipliedByDefault); // Output: [1, 2, 3, 4, 5]

    const emptyArray: number[] = [];
    console.log(multiplyArray(emptyArray, 5)); // Output: []

    // Demonstrating type errors caught by TypeScript:
    // multiplyArray([1, 'a', 3]); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
    // multiplyArray(myNumbers, 'x'); // Error: Argument of type 'string' is not assignable to parameter of type 'number | undefined'.
    ```
    **Explanation of Changes:**
    1.  **Parameter Types:** `numbers: number[]` explicitly states that `numbers` must be an array of numbers. `factor?: number` indicates that `factor` is an optional parameter of type `number`.
    2.  **Return Type:** `: number[]` specifies that the function will always return an array of numbers.
    3.  **Default Value:** The original `factor = factor === undefined ? 1 : factor;` is replaced with `const actualFactor = factor ?? 1;`. The nullish coalescing operator (`??`) is a modern JavaScript feature that provides a concise way to assign a default value if the left-hand operand is `null` or `undefined`. This is perfectly type-safe.
    4.  **Input Validation (Optional but good practice):** Added a check `!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')` to ensure runtime robustness, although TypeScript's static analysis already prevents many such issues at compile time.

### Section 4: Design/Debugging Problems (3 Questions)

1.  **Question:** The following TypeScript code is intended to fetch user data and display it. However, it contains several type errors. Identify all type errors and provide the corrected code.

    ```typescript
    // Original code with errors
    interface User {
        id: number;
        name: string;
        email: string;
        isActive: boolean;
    }

    async function fetchUser(userId: string): Promise<User> {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const userData = await response.json();
        return userData;
    }

    async function displayUser(id: number) {
        try {
            const user = await fetchUser(id);
            console.log(`User Name: ${user.fullname}`);
            if (user.status) {
                console.log("User is active.");
            } else {
                console.log("User is inactive.");
            }
        } catch (error) {
            console.error("Failed to fetch user:", error.message);
        }
    }

    displayUser(1);
    ```

    **Answer:**
    **Identified Type Errors:**
    1.  **`fetchUser(userId: string)`:** The `displayUser` function calls `fetchUser` with a `number` (`id`), but `fetchUser` expects a `string` for `userId`.
    2.  **`return userData;` in `fetchUser`:** The `fetch` API's `response.json()` returns `any` by default. Assigning `any` to `Promise<User>` without explicit type assertion or validation can lead to runtime errors if the actual data structure doesn't match `User`.
    3.  **`console.log(user.fullname);`:** The `User` interface defines `name`, not `fullname`.
    4.  **`if (user.status)`:** The `User` interface defines `isActive`, not `status`. Also, `isActive` is a boolean, so directly using it in an `if` condition is correct, but accessing a non-existent `status` property is a type error.
    5.  **`error.message`:** The `catch` block's `error` parameter is of type `unknown` by default in strict mode. Accessing `error.message` directly without a type guard or assertion is a type error.

    **Corrected Code:**
    ```typescript
    interface User {
        id: number;
        name: string;
        email: string;
        isActive: boolean;
    }

    async function fetchUser(userId: string): Promise<User> {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Explicitly cast the JSON response to User type, assuming the API returns a valid User structure.
        // In a real app, consider runtime validation (e.g., with Zod) for robustness.
        const userData: User = await response.json();
        return userData;
    }

    async function displayUser(id: number) {
        try {
            // Corrected: Convert number ID to string for fetchUser
            const user = await fetchUser(id.toString());
            // Corrected: Access 'name' property
            console.log(`User Name: ${user.name}`);
            // Corrected: Access 'isActive' property
            if (user.isActive) {
                console.log("User is active.");
            } else {
                console.log("User is inactive.");
            }
        } catch (error: unknown) { // Explicitly type error as unknown
            // Corrected: Type guard for 'error' to safely access 'message'
            if (error instanceof Error) {
                console.error("Failed to fetch user:", error.message);
            } else {
                console.error("An unknown error occurred:", error);
            }
        }
    }

    displayUser(1);
    ```

2.  **Question:** Design a type structure (using interfaces, type aliases, or both) for a `ShoppingCart` in an e-commerce application. The cart should contain `CartItem`s. Each `CartItem` needs to track the `productId` (string), `productName` (string), `price` (number), and `quantity` (number). The `ShoppingCart` itself should have a list of `items` and a `totalAmount` (number) which is the sum of `price * quantity` for all items.

    **Answer:**
    ```typescript
    interface CartItem {
        productId: string;
        productName: string;
        price: number;
        quantity: number;
    }

    interface ShoppingCart {
        items: CartItem[];
        totalAmount: number; // This could also be a computed property in a class
    }

    // Example Usage:
    const item1: CartItem = {
        productId: "P001",
        productName: "Laptop",
        price: 1200.00,
        quantity: 1
    };

    const item2: CartItem = {
        productId: "P002",
        productName: "Mouse",
        price: 25.50,
        quantity: 2
    };

    // Function to calculate total amount (demonstrates usage)
    function calculateTotal(cartItems: CartItem[]): number {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    const myCart: ShoppingCart = {
        items: [item1, item2],
        totalAmount: calculateTotal([item1, item2])
    };

    console.log("My Shopping Cart:", myCart);
    console.log("Total Amount:", myCart.totalAmount);

    // If you were to implement this with a class, the totalAmount would likely be a getter:
    class ShoppingCartClass implements ShoppingCart {
        public items: CartItem[] = [];

        constructor(initialItems: CartItem[] = []) {
            this.items = initialItems;
        }

        public addItem(item: CartItem): void {
            const existingItem = this.items.find(i => i.productId === item.productId);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.items.push(item);
            }
        }

        public get totalAmount(): number {
            return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        }
    }

    const cartInstance = new ShoppingCartClass();
    cartInstance.addItem(item1);
    cartInstance.addItem(item2);
    console.log("Cart Instance Total:", cartInstance.totalAmount); // Access as a property
    ```

3.  **Question:** You are setting up a new TypeScript project. Explain how you would configure the `tsconfig.json` file to achieve the following:
    *   Target ES2020 JavaScript.
    *   Enable strict type checking.
    *   Output compiled JavaScript files to a `dist` directory.
    *   Exclude `node_modules` from compilation.
    *   Allow importing JSON modules directly.

    Provide the relevant sections of the `tsconfig.json` file.

    **Answer:**
    To configure the `tsconfig.json` file for the specified requirements, you would modify the `compilerOptions` and `exclude` fields as follows:

    ```json
    {
      "compilerOptions": {
        "target": "ES2020",             /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ES2022', 'ESNext'. */
        "strict": true,                 /* Enable all strict type-checking options. */
        "outDir": "./dist",             /* Redirect output structure to the directory. */
        "esModuleInterop": true,        /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
        "moduleResolution": "node",     /* Specify how modules are resolved. */
        "forceConsistentCasingInFileNames": true, /* Ensure that casing is consistent across all file paths. */
        "skipLibCheck": true,           /* Skip type checking all .d.ts files. */
        "module": "CommonJS",           /* Specify module code generation: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015', 'ES2020', 'ES2022', 'ESNext', 'Node16', 'NodeNext'. */
        "resolveJsonModule": true       /* Allow importing modules with a '.json' extension, which will result in a commonjs module with a default export. */
      },
      "include": [
        "src/**/*.ts"                   /* Specify files to include in compilation. */
      ],
      "exclude": [
        "node_modules",                 /* Exclude node_modules from compilation. */
        "**/*.spec.ts"                  /* Exclude test files, common practice */
      ]
    }
    ```

    **Explanation of Configuration:**
    *   **`"target": "ES2020"`**: This sets the ECMAScript version that the compiled JavaScript will target. Using `ES2020` allows for modern JavaScript features to be preserved or polyfilled as needed.
    *   **`"strict": true`**: This is a crucial setting that enables a broad range of strict type-checking options, including `noImplicitAny`, `noImplicitThis`, `alwaysStrict`, `strictNullChecks`, `strictFunctionTypes`, `strictPropertyInitialization`, and `strictBindCallApply`. It's highly recommended for robust TypeScript development.
    *   **`"outDir": "./dist"`**: This specifies the output directory for the compiled JavaScript files. All `.js` files generated from your `.ts` files will be placed inside a folder named `dist` in your project root.
    *   **`"exclude": ["node_modules"]`**: This array tells the TypeScript compiler which files or directories to *not* include in the compilation process. `node_modules` is typically excluded because these are third-party libraries that are already compiled or have their own type definitions, and you don't want to recompile them.
    *   **`"resolveJsonModule": true`**: This option allows you to import `.json` files directly into your TypeScript code as modules. When enabled, `import config from './config.json';` will work, and `config` will be correctly typed based on the JSON structure.

    Other options like `esModuleInterop`, `moduleResolution`, `forceConsistentCasingInFileNames`, `skipLibCheck`, and `module` are also commonly used for modern TypeScript projects to ensure better compatibility and development experience.

---

## Course Conclusion

Congratulations, future TypeScript expert! You have successfully completed "TypeScript: The Complete Developer's Guide." This journey has taken you from the foundational concepts of type safety to advanced patterns, equipping you with the skills to build robust, scalable, and maintainable applications.

You are no longer just writing JavaScript; you are crafting code with confidence, armed with the power of static typing. You can now:
*   **Set up and configure** TypeScript projects, understanding `tsconfig.json` deeply.
*   **Master core types**, including primitives, arrays, objects, and literal types.
*   **Design complex data structures** using `interfaces` and `type aliases`.
*   **Implement object-oriented patterns** with type-safe `classes`, `inheritance`, and access modifiers.
*   **Leverage advanced type features** like `union types`, `intersection types`, `type guards`, and `generics` to write flexible yet safe code.
*   **Integrate TypeScript** with existing JavaScript libraries using declaration files.
*   **Identify and resolve** common TypeScript type errors, transforming them into learning opportunities.
*   **Write cleaner, more maintainable code** that is easier to debug and collaborate on.

The skills you've gained are highly sought after in the modern development landscape. TypeScript is a cornerstone technology for many leading frameworks and platforms, and your proficiency will open doors to exciting opportunities.

### Where to Go Next: Continued Learning and Resources

Your learning journey doesn't end here; it's just beginning! To solidify your knowledge and expand your expertise, we highly recommend the following next steps and resources:

1.  **Build More Projects:** The best way to learn is by doing. Pick another capstone project idea, or start a personal project using a framework you're interested in (e.g., React, Angular, Vue, Node.js with Express/NestJS) and apply TypeScript from the ground up. Try to integrate a database or an external API to make it more realistic.
2.  **Explore Advanced TypeScript Patterns:** Dive deeper into topics like utility types (`Partial`, `Required`, `Pick`, `Omit`), conditional types, infer keyword, and advanced decorator usage. These patterns can help you write even more powerful and flexible type definitions.
    *   **Resource:** The official TypeScript documentation is an excellent, continuously updated resource.
    *   **Resource:** Books like "Programming TypeScript" by Boris Cherny and "Effective TypeScript" by Dan Vanderkam offer deep dives and best practices.
3.  **Integrate with Frameworks/Libraries:**
    *   **Frontend:** Take a course on **React with TypeScript**, **Angular**, or **Vue with TypeScript**. These frameworks are heavily optimized for TypeScript usage.
    *   **Backend:** Explore **Node.js with TypeScript** using frameworks like Express, NestJS, or Fastify.
    *   **Full-stack:** Combine your frontend and backend skills to build complete, type-safe applications.
4.  **Contribute to Open Source:** Look for open-source projects on GitHub that use TypeScript. Contributing, even with small bug fixes or documentation improvements, is a fantastic way to learn from experienced developers and see real-world TypeScript in action.
5.  **Join the Community:** Engage with the TypeScript community on platforms like the official TypeScript Discord server, Stack Overflow, or Reddit (r/typescript). Asking questions and helping others is a great way to deepen your understanding.

### Learning Paths from Here

*   **Frontend Developer:** Focus on a UI framework (React/Angular/Vue) and build complex, interactive web applications.
*   **Backend Developer:** Master Node.js with TypeScript, database interactions (SQL/NoSQL), and API design.
*   **Full-Stack Developer:** Combine both frontend and backend skills to own entire application development cycles.
*   **DevOps Engineer (with a focus on tooling):** Learn how TypeScript projects are built, tested, and deployed, exploring tools like Webpack, Vite, CI/CD pipelines, and cloud platforms.

Remember, the journey of a developer is one of continuous learning. Embrace challenges, experiment with new ideas, and keep building. Your new TypeScript skills are a powerful asset, and we at Cohortia are incredibly proud of your dedication and progress. We wish you all the best in your future endeavors!

---


> End of Syllabus: TypeScript: The Complete Developer's Guide
> Course ID: typescript-the-complete-developers-guide
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Programming & Software Development Fundamentals
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
