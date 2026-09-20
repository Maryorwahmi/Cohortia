---
Title: Blazor Bootcamp
Course ID: blazor-bootcamp
Provider: Cohortia
Original reference: Udemy / Online
Platform: Cohortia
Level: Beginner
Type: Course
Duration: Self-paced
Cost: Included with Cohortia
URL: Cohortia course page (original reference: (URL not verified))
Certification: Cohortia Certificate of Completion
Category: Computer Science
Subcategory: Web Development
Skills: Blazor, C#, .NET, Web Development, HTML, CSS, JavaScript, REST APIs, UI/UX, Front-end Development, Back-end Development
Ownership note: Cohortia curates and rebuilds the content for enhanced learning and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to the Cohortia Blazor Bootcamp, your comprehensive journey into building interactive web applications with C# and .NET! This course is meticulously designed for developers who are familiar with C# or object-oriented programming concepts and are eager to leverage their existing skills to create modern, full-stack web experiences without extensively relying on JavaScript. Blazor, Microsoft's innovative framework, allows you to build rich client-side UIs using Razor components, offering a powerful and productive alternative for web development. We will start from the absolute fundamentals, ensuring a solid foundation before progressively diving into more advanced topics.

Throughout this bootcamp, you will gain hands-on experience with both Blazor WebAssembly and Blazor Server hosting models, understanding their differences, advantages, and ideal use cases. We will explore the core concepts of Blazor components, including their lifecycle, parameter passing, event handling, and state management, which are crucial for building maintainable and scalable applications. A significant portion of the course will be dedicated to practical application development, where you will learn how to interact with backend APIs, perform CRUD operations, implement robust form validation, and manage application state effectively. Our goal is to equip you with the knowledge and confidence to build real-world Blazor applications from scratch.

This course emphasizes practical, project-based learning. You won't just learn theories; you'll apply them immediately through coding exercises and mini-projects. We'll cover essential topics such as integrating JavaScript when necessary (JS Interop), implementing authentication and authorization, and deploying your Blazor applications to various environments. By the end of this bootcamp, you will have a strong portfolio of Blazor projects and the expertise to confidently tackle complex web development challenges using the .NET ecosystem. Prepare to transform your C# skills into a powerful tool for modern web development, opening up new possibilities for your career.

Upon completion of this Blazor Bootcamp, you will be able to:

*   Understand the fundamental architecture and hosting models of Blazor (WebAssembly and Server).
*   Develop interactive user interfaces using Razor components, C#, and HTML.
*   Manage component state, handle events, and implement data binding effectively.
*   Implement client-side routing and navigate between different views in a Blazor application.
*   Integrate with RESTful APIs to fetch, display, and manipulate data.
*   Build robust forms with client-side validation using Blazor's built-in features.
*   Utilize Dependency Injection for managing services and application-wide state.
*   Perform JavaScript Interop to interact with existing JavaScript libraries and browser APIs.
*   Implement authentication and authorization mechanisms to secure Blazor applications.
*   Deploy Blazor applications to various hosting environments, including Azure and static web hosts.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Getting Started with Blazor | 3 |
| 2 | Blazor Component Fundamentals | 3 |
| 3 | State Management and Routing | 4 |
| 4 | Working with Data and APIs | 4 |
| 5 | Advanced Blazor Concepts | 5 |
| 6 | Building a Practical Blazor Application | 5 |

Total chapters: 24
---

## Module 1: Getting Started with Blazor

**Module Goal:** Equip learners with the foundational knowledge and practical skills to set up their Blazor development environment, understand the core concepts of Blazor, and build their first interactive Blazor application.

---

### Chapter 1.1 — Introduction to Blazor and Its Ecosystem

#### Learning objectives
*   Define Blazor and articulate its primary benefits for modern web development.
*   Differentiate between the Blazor Server and Blazor WebAssembly hosting models, including their respective advantages and use cases.
*   Identify the key components of the .NET ecosystem that are essential for Blazor development, such as C#, the .NET SDK, and common development environments.
*   Successfully set up a functional Blazor development environment on your local machine, verifying all necessary installations.

#### Detailed lesson content
Welcome to the exciting world of Blazor! Blazor is a free and open-source web framework developed by Microsoft that allows you to build interactive client-side web UI with .NET and C# instead of JavaScript. For seasoned .NET developers, this means leveraging existing C# skills, tools, and libraries to build full-stack web applications. For newcomers, it presents a powerful, type-safe, and highly productive environment for web development. The primary benefits of Blazor include the ability to write full-stack applications in a single language (C#), access to the vast .NET ecosystem and its robust class libraries, improved performance for certain scenarios, and excellent tooling support within Visual Studio and Visual Studio Code. This consistency across the stack can significantly streamline development workflows and reduce context switching.

At its core, Blazor applications are built using Razor components, which are essentially `.razor` files combining HTML markup with C# code. These components are reusable UI blocks that can manage their own state and render dynamically. What makes Blazor particularly versatile is its support for two distinct hosting models: Blazor Server and Blazor WebAssembly. Understanding the differences between these two is crucial for choosing the right approach for your project.

Blazor Server applications run on the server, and UI updates, event handling, and JavaScript interop calls are all handled over a SignalR connection. When a user interacts with the UI (e.g., clicks a button), the event is sent to the server, the server processes it, updates the component's render tree, and then sends a diff back to the client over SignalR, which updates the DOM. The main advantages of Blazor Server are a smaller initial download size, faster load times, and the ability to leverage full server-side processing power, making it ideal for applications requiring extensive backend integration or those deployed in environments with strict security requirements where client-side code execution is limited. However, it requires a persistent connection to the server, meaning higher latency and a lack of offline support.

In contrast, Blazor WebAssembly (Wasm) applications run directly in the user's browser, powered by a WebAssembly-based .NET runtime. This means the entire application, including the .NET runtime and your application code, is downloaded to the browser and executed client-side. Blazor WebAssembly offers true client-side execution, enabling offline capabilities, reduced server load after initial download, and the ability to deploy as static files (e.g., to a CDN). While the initial download size can be larger and load times potentially longer due to downloading the .NET runtime, subsequent interactions are lightning-fast as they don't require server round-trips. It's an excellent choice for single-page applications (SPAs) that need to run entirely client-side, offering a similar experience to frameworks like React or Angular but with the power of .NET.

To get started with Blazor, you'll need a few essential tools from the .NET ecosystem. The cornerstone is the **.NET SDK**, which includes the .NET runtime, libraries, and command-line interface (CLI) tools necessary for building, running, and publishing .NET applications. You'll primarily be writing code in **C#**, Microsoft's versatile, object-oriented programming language. For your development environment, **Visual Studio Code** is a popular, lightweight, and highly extensible code editor that works across all major operating systems. If you're on Windows, **Visual Studio IDE** offers an even more integrated and feature-rich development experience, though VS Code is perfectly sufficient for this bootcamp.

Let's get your environment set up. First, download and install the latest **.NET SDK** from the official Microsoft website (search for ".NET SDK download"). It's recommended to choose the latest Long Term Support (LTS) version for stability. Once installed, open your terminal or command prompt and verify the installation by typing `dotnet --version`. You should see a version number like `8.0.x`. Next, if you don't already have it, download and install **Visual Studio Code**. After installing VS Code, open it and navigate to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X). Search for and install the **C# extension** by Microsoft. This extension provides rich language support, including IntelliSense, debugging, and code navigation, which are indispensable for C# development. For those using Visual Studio IDE on Windows, simply ensure you select the "ASP.NET and web development" workload during installation to get all the necessary Blazor components.

A common mistake beginners make is not installing the correct .NET SDK version or forgetting to install the C# extension for VS Code, which can lead to a frustrating lack of IntelliSense or build errors. Always double-check your installations. Another potential issue, especially with Blazor Server, can be firewall configurations blocking SignalR connections, though this is less common in development environments. By setting up these foundational tools, you're laying the groundwork for building powerful web applications with Blazor.

#### Key concepts
*   **Blazor:** A free and open-source web framework by Microsoft for building interactive client-side web UI with .NET and C#.
*   **Blazor Server:** A hosting model where Blazor applications run on the server, and UI updates are communicated to the client over a SignalR connection.
*   **Blazor WebAssembly (Wasm):** A hosting model where Blazor applications, including the .NET runtime, run directly in the user's browser using WebAssembly.
*   **.NET SDK:** The Software Development Kit that includes the .NET runtime, libraries, and command-line tools for building .NET applications.
*   **C#:** Microsoft's primary object-oriented programming language used for Blazor development.
*   **Razor:** A markup syntax for combining .NET code with HTML.
*   **SignalR:** An open-source library that simplifies adding real-time web functionality to applications, used by Blazor Server for client-server communication.
*   **WebAssembly:** A binary instruction format for a stack-based virtual machine, designed as a portable compilation target for high-level languages like C/C++/Rust/C#, enabling them to run on the web.

#### Hands-on activity
1.  **Install .NET SDK:** Download and install the latest .NET SDK (preferably an LTS version like .NET 8) from [dot.net](https://dotnet.microsoft.com/download).
2.  **Verify .NET SDK Installation:** Open your terminal or command prompt and run `dotnet --version`. Confirm that a version number is displayed.
3.  **Install Visual Studio Code:** If you don't have it, download and install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com/).
4.  **Install C# Extension for VS Code:** Open VS Code, go to the Extensions view (Ctrl+Shift+X), search for "C#", and install the extension by Microsoft.
5.  **Test Environment:** Create a new empty folder on your desktop named `BlazorBootcamp`. Open this folder in VS Code. This will be your workspace for the bootcamp.

#### Assessment idea
1.  **Question:** A developer is building a new web application that requires minimal initial load time, heavy server-side processing, and does not need to function offline. Which Blazor hosting model would be most appropriate, and why?
    *   **Correct Answer:** Blazor Server. It offers a smaller initial download size and faster load times because the .NET runtime and application code remain on the server. All UI processing and business logic execute server-side, making it suitable for heavy server-side processing. Since it relies on a persistent SignalR connection, offline functionality is not a requirement, aligning with the problem statement.
2.  **Question:** You've just installed the .NET SDK and Visual Studio Code. What is the next crucial step to ensure you have a productive development experience for C# and Blazor within VS Code, and what command would you use to verify your .NET SDK installation?
    *   **Correct Answer:** The next crucial step is to install the C# extension by Microsoft within Visual Studio Code. This extension provides essential features like IntelliSense, debugging, and syntax highlighting for C# code, significantly enhancing productivity. To verify the .NET SDK installation, you would use the command `dotnet --version` in your terminal or command prompt.

#### AI generation note
Create a 12-minute mixed video/slide deck. Start with an engaging animated diagram that visually compares Blazor Server (showing client-server communication via SignalR) and Blazor WebAssembly (showing client-side execution within the browser's WebAssembly sandbox). Then, transition to a step-by-step walkthrough of installing the .NET SDK, demonstrating the `dotnet --version` command in the terminal. Follow this with a visual guide on installing Visual Studio Code and the C# extension, using clear screenshots and cursor highlights. The tone should be beginner-friendly and encouraging. Conclude with a 2-question interactive quiz about the differences between Blazor hosting models.

---

### Chapter 1.2 — Your First Blazor Project: Structure and Components

#### Learning objectives
*   Successfully create a new Blazor project using the .NET Command-Line Interface (CLI) for both Blazor Server and Blazor WebAssembly templates.
*   Identify and explain the purpose of the core files and folders within a newly created Blazor project, such as `Pages`, `Shared`, `wwwroot`, `App.razor`, and `Program.cs`.
*   Understand the fundamental structure of a Razor component (`.razor` file), including the use of HTML markup and the `@code` block for C# logic.
*   Implement basic two-way data binding using the `@bind` directive to connect UI elements with C# properties within a component.

#### Detailed lesson content
Now that your development environment is set up, it's time to create your very first Blazor application! The .NET Command-Line Interface (CLI) is your primary tool for this. It's a powerful, cross-platform tool that allows you to create, build, run, and publish .NET projects. To create a new Blazor project, you'll use the `dotnet new` command, specifying the template and an output directory. For a Blazor Server application, you would typically run `dotnet new blazorserver -o MyFirstBlazorApp` in your terminal. If you prefer a Blazor WebAssembly project, the command is `dotnet new blazorwasm -o MyFirstBlazorApp`. The `-o` flag specifies the output directory, which will also be the name of your project. After running this command, navigate into the newly created `MyFirstBlazorApp` directory using `cd MyFirstBlazorApp` and then run `dotnet watch run` to launch your application. The `watch` command automatically rebuilds and restarts the application when code changes are detected, which is incredibly useful during development. You'll then be able to open your browser to the URL provided (usually `https://localhost:70XX` or `http://localhost:5XXX`).

Upon creating and opening your project in Visual Studio Code, you'll notice a standard Blazor project structure. Let's walk through the most important parts:
*   **`Pages/` folder:** This directory contains your routable components. Any `.razor` file in this folder (or its subfolders) that includes an `@page` directive at the top will be accessible directly via a URL. For example, `Pages/Counter.razor` maps to `/counter`.
*   **`Shared/` folder:** This is where you place reusable UI components that are not directly routable. Examples include the `NavMenu.razor` (the navigation sidebar) and `MainLayout.razor` (the main layout for your application, defining common UI elements like the header, footer, and navigation).
*   **`wwwroot/` folder:** This folder is for static assets. Any files placed here, such as CSS stylesheets (`app.css`), JavaScript files, images, or favicons, are served directly by the web server without any processing. This is similar to the `public` folder in many other web frameworks.
*   **`_Imports.razor`:** This file contains common `using` directives that are automatically applied to all `.razor` components in the project. This saves you from having to add the same `using` statements at the top of every component file.
*   **`App.razor`:** This is the root component of your Blazor application. It sets up client-side routing and displays the `MainLayout` and the currently active page component.
*   **`Program.cs`:** This is the entry point of your application. For Blazor Server, it configures the web host, adds services to the dependency injection container, and defines the request processing pipeline. For Blazor WebAssembly, it sets up the `WebAssemblyHostBuilder` to configure and run the client-side application.
*   **`_Host.cshtml` (Blazor Server) / `index.html` (Blazor WebAssembly):** These files serve as the host page for your Blazor application. They contain the initial HTML markup that loads the Blazor runtime and bootstraps your application. For Blazor Server, `_Host.cshtml` is a Razor Page that renders the Blazor application, while for Blazor WebAssembly, `index.html` is a static HTML file.

The core building block of any Blazor application is the **Razor component**, represented by a `.razor` file. These files combine HTML markup with C# code. Let's look at the default `Counter.razor` component found in the `Pages` folder:

```razor
@page "/counter"

<h1>Counter</h1>

<p role="status">Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}
```

In this example, `@page "/counter"` is a **directive** that makes this component routable at the `/counter` URL. The HTML markup defines a heading, a paragraph displaying the `currentCount`, and a button. The `@code` block is where you write your C# logic. Here, `private int currentCount = 0;` declares a private field, and `private void IncrementCount()` is a method that increments this field. The `@onclick="IncrementCount"` attribute on the button is an **event handler** that calls the `IncrementCount` method when the button is clicked. When `currentCount` changes, Blazor automatically detects this and re-renders the affected parts of the component, updating the UI.

Beyond simple display, Blazor excels at **data binding**. The `@bind` directive provides a convenient way to perform two-way data binding between UI elements and C# properties. This means changes in the UI element (e.g., typing into an input box) automatically update the C# property, and changes to the C# property automatically update the UI element. Let's modify our `Counter.razor` to include an input field that binds to a string:

```razor
@page "/counter"

<h1>Counter</h1>

<p role="status">Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

<hr />

<h2>Your Name:</h2>
<input @bind="name" placeholder="Enter your name" />
<p>Hello, @name!</p>

@code {
    private int currentCount = 0;
    private string name = "World"; // Default value for the name

    private void IncrementCount()
    {
        currentCount++;
    }
}
```

In this updated component, we've added a `private string name = "World";` field. The `<input @bind="name" ... />` line establishes a two-way binding. As you type into the input field, the `name` variable in the C# code is updated in real-time, and consequently, the `Hello, @name!` paragraph immediately reflects your input. This `@bind` directive is a powerful feature that simplifies handling user input and displaying dynamic data.

A common mistake for beginners is to forget the `@page` directive when they intend a component to be directly accessible via a URL, leading to routing errors. Another pitfall is trying to access UI elements directly from the `@code` block without using data binding or event handlers, which goes against Blazor's component-based reactive model. Always remember that Blazor's strength lies in its ability to react to state changes and automatically update the UI, so focus on manipulating your C# state.

#### Key concepts
*   **.NET CLI:** Command-Line Interface for .NET, used to create, build, run, and publish .NET projects.
*   **Blazor Project Templates:** Pre-configured project types for Blazor Server (`blazorserver`) and Blazor WebAssembly (`blazorwasm`).
*   **Razor Component:** The fundamental building block of Blazor applications, a `.razor` file combining HTML markup with C# code.
*   **`@page` Directive:** A Blazor directive used in `.razor` files to specify a route template, making the component accessible via a URL.
*   **`@code` Block:** A section within a `.razor` component where C# logic (fields, properties, methods) is defined.
*   **`wwwroot` Folder:** A directory in a Blazor project that serves static files (CSS, JavaScript, images) directly to the browser.
*   **Data Binding:** The process of synchronizing data between the UI and the underlying C# component logic.
*   **`@bind` Directive:** A Blazor directive used for two-way data binding, connecting UI input elements to C# properties.

#### Hands-on activity
1.  **Create a Blazor Server Project:** Open your terminal in the `BlazorBootcamp` folder you created in Chapter 1.1. Run the command: `dotnet new blazorserver -o MyFirstBlazorApp`.
2.  **Navigate and Run:** Change directory into your new project: `cd MyFirstBlazorApp`. Then, run the application: `dotnet watch run`. Open your browser to the URL provided (e.g., `https://localhost:7001`). Explore the default application.
3.  **Modify `Counter.razor`:** Open the `MyFirstBlazorApp` project in Visual Studio Code. Navigate to `Pages/Counter.razor`.
4.  **Implement Data Binding:** Add a new text input and a paragraph below the existing button. Bind the input's value to a new string property in the `@code` block.

    ```razor
    @page "/counter"

    <h1>Counter</h1>

    <p role="status">Current count: @currentCount</p>

    <button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

    <hr /> <!-- Add a horizontal rule for separation -->

    <h2>Your Message:</h2>
    <input type="text" @bind="message" placeholder="Type something here..." />
    <p>You typed: <strong>@message</strong></p>

    @code {
        private int currentCount = 0;
        private string message = "Hello Blazor!"; // Initialize with a default value

        private void IncrementCount()
        {
            currentCount++;
        }
    }
    ```
5.  **Observe Changes:** Save the `Counter.razor` file. Since you're using `dotnet watch run`, the application should automatically recompile and refresh in your browser. Navigate to the `/counter` page and test your new input field. Type into it and observe the paragraph updating in real-time.

#### Assessment idea
1.  **Question:** You've created a new Blazor Server project and want to add a new page that displays a list of products. In which folder should you create the `.razor` component for this page, and what directive must you include at the top of the component file to make it routable at `/products`?
    *   **Correct Answer:** The `.razor` component for the products page should be created in the `Pages/` folder. To make it routable at `/products`, you must include the `@page "/products"` directive at the very top of the `.razor` file.
2.  **Question:** Explain the purpose of the `@code` block within a Blazor component and provide an example of how you would use the `@bind` directive to connect a `<textarea>` element to a C# string property named `FeedbackText`.
    *   **Correct Answer:** The `@code` block within a Blazor component is where all the C# logic for that component resides. This includes declaring fields, properties, and methods that control the component's state and behavior. It separates the presentation (HTML) from the logic (C#). To connect a `<textarea>` element to a C# string property named `FeedbackText` using two-way data binding, you would use the `@bind` directive like this:
        ```razor
        <textarea @bind="FeedbackText" placeholder="Enter your feedback here..."></textarea>

        @code {
            private string FeedbackText { get; set; } = ""; // Initialize the property
        }
        ```

#### AI generation note
Create a 15-minute live coding video. Begin by demonstrating the `dotnet new blazorserver -o MyFirstBlazorApp` command and running the application with `dotnet watch run`. Then, open the project in VS Code and perform a detailed walkthrough of each key folder (`Pages`, `Shared`, `wwwroot`) and file (`App.razor`, `Program.cs`, `_Imports.razor`), explaining their roles with clear on-screen annotations. Focus specifically on modifying the existing `Counter.razor` component. Show how to add a new input field and bind it to a C# string property using `@bind`, demonstrating the real-time update in the browser (split-screen code and browser view). Conclude with a reflection prompt asking learners to consider the advantages of a component-based structure over traditional HTML pages.

---

### Chapter 1.3 — Understanding Razor Syntax and Component Interaction

#### Learning objectives
*   Utilize various Razor syntax elements, including `@`, `@()`, `@{}`, `@if`, and `@foreach`, to embed C# logic and control flow directly within HTML markup.
*   Implement event handling for common user interactions (e.g., clicks, input changes) by binding UI events to C# methods within Blazor components.
*   Master the technique of passing data from a parent component to a child component using the `[Parameter]` attribute.
*   Understand and implement child-to-parent component communication using `EventCallback<T>` to notify parent components of events or data changes.
*   Describe the basic lifecycle methods of a Blazor component and know when to use `StateHasChanged()` to manually trigger a re-render.

#### Detailed lesson content
Building on our understanding of basic Blazor project structure and components, let's dive deeper into the powerful Razor syntax that allows us to seamlessly blend C# with HTML, and then explore how components interact with each other to build complex UIs. Razor syntax is incredibly flexible, enabling you to execute C# code, display values, and implement control flow directly within your HTML markup.

The simplest form of Razor syntax is the `@` symbol, which allows you to output the value of a C# expression directly into the HTML. For example, `@myVariable` will render the current value of `myVariable`. For more complex expressions, you can wrap them in parentheses: `@(myObject.PropertyName.ToString())`. If you need to write multi-statement C# code blocks directly within your HTML, you can use `@{}`, like `@ { var greeting = "Hello"; var name = "Blazor!"; }`. This is useful for declaring local variables or executing short snippets of logic that don't belong in the `@code` block.

Control flow directives are essential for dynamic rendering. `@if`, `@else if`, `@else` allow you to conditionally render parts of your UI:

```razor
@if (IsLoggedIn)
{
    <p>Welcome back, user!</p>
}
else
{
    <p>Please log in.</p>
}
```

Similarly, `@foreach` is indispensable for rendering lists of items:

```razor
<ul>
    @foreach (var item in ShoppingCartItems)
    {
        <li>@item.Name - Quantity: @item.Quantity</li>
    }
</ul>
```

These constructs make it easy to generate dynamic HTML based on your component's C# state.

User interaction is at the heart of any web application, and Blazor makes event handling straightforward. You can bind UI events like clicks, input changes, or form submissions directly to C# methods using attributes like `@onclick`, `@onchange`, `@oninput`, `@onsubmit`, and many more. For instance, `@onclick="MyMethod"` will execute `MyMethod` when the element is clicked. Blazor automatically provides event argument objects (e.g., `MouseEventArgs` for clicks, `ChangeEventArgs` for input changes) that you can access in your C# methods:

```razor
<button @onclick="HandleButtonClick">Click Me</button>
<input type="text" @onchange="HandleInputChange" />

@code {
    private void HandleButtonClick(MouseEventArgs e)
    {
        Console.WriteLine($"Button clicked at X: {e.ClientX}, Y: {e.ClientY}");
    }

    private void HandleInputChange(ChangeEventArgs e)
    {
        string newValue = e.Value?.ToString();
        Console.WriteLine($"Input value changed to: {newValue}");
    }
}
```

This direct binding simplifies the process of making your UI interactive without writing any JavaScript.

As your applications grow, you'll inevitably break down your UI into smaller, reusable components. This leads to the need for **component communication**. The most common scenario is passing data from a **parent component to a child component**. This is achieved using the `[Parameter]` attribute. A child component declares properties decorated with `[Parameter]`, making them public and settable from its parent.

Let's imagine a `ParentComponent` wants to display a message using a `ChildComponent`:

```razor
<!-- ChildComponent.razor -->
<h3>Child Component</h3>
<p>Message from Parent: <strong>@Message</strong></p>

@code {
    [Parameter]
    public string Message { get; set; }
}

<!-- ParentComponent.razor -->
@page "/parent"

<h1>Parent Component</h1>
<ChildComponent Message="Hello from the Parent!" />
<ChildComponent Message="Another message!" />
```

The `ParentComponent` renders `ChildComponent` instances and sets their `Message` parameter. Blazor automatically populates these `[Parameter]` properties when the child component is rendered.

What about **child-to-parent communication**? When an event occurs in a child component (e.g., a button click, a value change) that the parent needs to know about, you use `EventCallback<T>`. An `EventCallback<T>` is a special Blazor type that allows a child component to expose an event that its parent can subscribe to. The child invokes the `EventCallback`, and the parent's subscribed method is executed.

```razor
<!-- ChildComponent.razor -->
<h3>Child Component Counter</h3>
<p>Internal Count: @internalCount</p>
<button @onclick="IncrementAndNotify">Increment Child</button>

@code {
    private int internalCount = 0;

    [Parameter]
    public EventCallback<int> OnCountChanged { get; set; } // T is the type of data to pass

    private async Task IncrementAndNotify()
    {
        internalCount++;
        await OnCountChanged.InvokeAsync(internalCount); // Invoke the callback, passing the new count
    }
}

<!-- ParentComponent.razor -->
@page "/parent"

<h1>Parent Component</h1>
<p>Count from Child: @childCount</p>
<ChildComponent OnCountChanged="HandleChildCountChange" />

@code {
    private int childCount = 0;

    private void HandleChildCountChange(int newCount)
    {
        childCount = newCount;
        // No need for StateHasChanged here, as EventCallback.InvokeAsync
        // implicitly calls it on the receiving component.
    }
}
```

Here, `ChildComponent` declares `OnCountChanged` as an `EventCallback<int>`. When `IncrementAndNotify` is called, it increments its internal count and then `InvokeAsync` the `OnCountChanged` callback, passing the new `internalCount`. The `ParentComponent` subscribes to this event by setting `OnCountChanged="HandleChildCountChange"`, and its `HandleChildCountChange` method receives the `newCount` from the child. This is the standard, safe, and efficient way for children to communicate with their parents in Blazor.

Finally, let's briefly touch on **component lifecycle**. Blazor components go through various stages from initialization to rendering and disposal. Key methods you might encounter include:
*   `OnInitializedAsync`/`OnInitialized`: Called once when the component is initialized. Good for initial data loading.
*   `OnParametersSetAsync`/`OnParametersSet`: Called when parameters from the parent are received or updated. Use this if your component's state depends on its parameters.
*   `ShouldRender`: Allows you to control whether the component should re-render. Returning `false` can improve performance for static components.
*   `StateHasChanged()`: This method explicitly tells Blazor that the component's state has changed and it should re-render. Blazor usually handles this automatically after event handlers or lifecycle methods complete, but you might need to call it manually if state changes occur outside of Blazor's rendering pipeline (e.g., from a timer or an external service).

A common mistake is to perform expensive operations in `OnParametersSet` without checking if the relevant parameters have actually changed, leading to unnecessary re-renders. Always consider performance when dealing with lifecycle methods. Another safety note: avoid directly manipulating the DOM with JavaScript where possible; leverage Blazor's data binding and component model for UI updates. Direct DOM manipulation can interfere with Blazor's internal render tree and lead to unexpected behavior.

#### Key concepts
*   **Razor Expressions:** Using `@` to embed C# variables, properties, or method calls directly into HTML markup.
*   **Razor Code Blocks:** Using `@{ ... }` for multi-statement C# code snippets within HTML.
*   **Control Flow Directives:** `@if`, `@else`, `@foreach` for conditional rendering and looping in Razor markup.
*   **Event Handling:** Binding UI events (e.g., `@onclick`, `@onchange`) to C# methods in a component.
*   **`[Parameter]` Attribute:** Used to define properties in a child component that can receive values from its parent component.
*   **`EventCallback<T>`:** A special Blazor type used for child-to-parent communication, allowing a child component to expose an event that a parent can subscribe to.
*   **`InvokeAsync()`:** A method on `EventCallback<T>` used by a child component to trigger the parent's subscribed method.
*   **Component Lifecycle:** The sequence of events a Blazor component goes through from creation to destruction, including methods like `OnInitialized`, `OnParametersSet`.
*   **`StateHasChanged()`:** A method to explicitly notify Blazor that a component's state has changed and it should re-render.

#### Hands-on activity
1.  **Create a New Blazor Server Project:** If you don't have one open from the previous chapter, create a new Blazor Server project named `BlazorInteractionApp` using `dotnet new blazorserver -o BlazorInteractionApp` and run it with `dotnet watch run`.
2.  **Create a Child Component:** In the `Shared` folder, create a new Razor component file named `MessageDisplay.razor`.
    ```razor
    <!-- Shared/MessageDisplay.razor -->
    <div class="card p-3 mb-3">
        <h4>@Title</h4>
        <p>@Content</p>
        <button class="btn btn-info" @onclick="HandleButtonClick">Acknowledge</button>
    </div>

    @code {
        [Parameter]
        public string Title { get; set; } = "Default Title";

        [Parameter]
        public string Content { get; set; } = "No content provided.";

        [Parameter]
        public EventCallback<string> OnAcknowledged { get; set; } // Event to notify parent

        private async Task HandleButtonClick()
        {
            await OnAcknowledged.InvokeAsync($"Message '{Title}' acknowledged!");
        }
    }
    ```
3.  **Create a Parent Component:** In the `Pages` folder, create a new Razor component file named `InteractionDemo.razor`.
    ```razor
    <!-- Pages/InteractionDemo.razor -->
    @page "/interaction"

    <h1>Component Interaction Demo</h1>

    <p>Last acknowledged message: <strong>@lastAcknowledgedMessage</strong></p>

    <MessageDisplay Title="Important Notice" Content="Please read this carefully." OnAcknowledged="HandleAcknowledgement" />
    <MessageDisplay Title="Reminder" Content="Don't forget your tasks." OnAcknowledged="HandleAcknowledgement" />

    <hr />

    <h2>Dynamic List Example</h2>
    <input type="text" @bind="newItemText" placeholder="Add new item" />
    <button class="btn btn-success" @onclick="AddItemToList">Add Item</button>

    <ul>
        @if (items.Any())
        {
            @foreach (var item in items)
            {
                <li>@item</li>
            }
        }
        else
        {
            <li>No items yet.</li>
        }
    </ul>

    @code {
        private string lastAcknowledgedMessage = "None";
        private List<string> items = new List<string> { "Item 1", "Item 2" };
        private string newItemText = "";

        private void HandleAcknowledgement(string message)
        {
            lastAcknowledgedMessage = message;
        }

        private void AddItemToList()
        {
            if (!string.IsNullOrWhiteSpace(newItemText))
            {
                items.Add(newItemText);
                newItemText = string.Empty; // Clear the input after adding
            }
        }
    }
    ```
4.  **Observe Interaction:** Save both files. Navigate to `/interaction` in your browser.
    *   Observe how the `MessageDisplay` components receive `Title` and `Content` from the `InteractionDemo` parent.
    *   Click the "Acknowledge" buttons on the child components and see the `lastAcknowledgedMessage` in the parent update, demonstrating child-to-parent communication via `EventCallback`.
    *   Test the dynamic list: type into the input field and click "Add Item" to see the list update using `@foreach` and `@if`.

#### Assessment idea
1.  **Question:** Describe how a Blazor parent component typically passes a string value, let's say a `UserName`, to a child component. Include the necessary C# attribute in the child component and how the parent would set this value.
    *   **Correct Answer:** A Blazor parent component passes a string value to a child component by declaring a public property in the child component and decorating it with the `[Parameter]` attribute. For example, in the child component (`ChildComponent.razor`):
        ```csharp
        // ChildComponent.razor @code block
        [Parameter]
        public string UserName { get; set; }
        ```
        The parent component (`ParentComponent.razor`) would then set this parameter when rendering the child component, treating it like an HTML attribute:
        ```razor
        // ParentComponent.razor
        <ChildComponent UserName="Alice" />
        ```
2.  **Question:** You have a child component with a button. When this button is clicked, you want to notify the parent component that an action has occurred and pass an integer value (e.g., an ID) back to the parent. How would you implement this child-to-parent communication using Blazor's recommended approach? Provide the relevant code snippets for both the child and parent components.
    *   **Correct Answer:** The recommended approach for child-to-parent communication in Blazor is to use `EventCallback<T>`.
        **Child Component (`ChildComponent.razor`):**
        ```razor
        <button @onclick="NotifyParent">Click to Notify</button>

        @code {
            [Parameter]
            public EventCallback<int> OnActionCompleted { get; set; } // T is the integer value

            private async Task NotifyParent()
            {
                int someId = 123; // Example integer value to pass
                await OnActionCompleted.InvokeAsync(someId); // Invoke the callback
            }
        }
        ```
        **Parent Component (`ParentComponent.razor`):**
        ```razor
        <p>Received ID from child: @receivedId</p>
        <ChildComponent OnActionCompleted="HandleChildAction" />

        @code {
            private int receivedId;

            private void HandleChildAction(int id)
            {
                receivedId = id;
                // Blazor automatically re-renders the parent after EventCallback.InvokeAsync
            }
        }
        ```
        The child component declares an `EventCallback<int>` parameter. When its button is clicked, it calls `InvokeAsync()` on this `EventCallback`, passing the integer value. The parent component then subscribes to this `OnActionCompleted` event by assigning a method (`HandleChildAction`) to it, which receives the integer value from the child.

#### AI generation note
Create an 18-minute interactive code demo. Start with a simple Blazor component and progressively add examples of Razor syntax: `@myVar`, `@ (DateTime.Now.ToShortTimeString())`, `@{ var temp = 1; }`, `@if`, and `@foreach` (iterating over a `List<string>`). Then, refactor the component to extract a new child component. Demonstrate `[Parameter]` by passing a string and an integer from the parent to the child. Next, implement `EventCallback<T>` for child-to-parent communication, showing the child button triggering an update in the parent. Use a split-screen view of code and browser output throughout. Include a mini-coding challenge: "Modify the current setup to pass a custom C# object (e.g., a `Product` object with `Id` and `Name`) from the parent to the child, and then have the child notify the parent with an updated `Product` object when a property changes."

---

## Module 2: Blazor Component Fundamentals
**Goal:** Master the creation, styling, and interaction of reusable Blazor components, laying the groundwork for building dynamic web applications.

### Chapter 2.1 — Building Your First Blazor Component

#### Learning objectives
*   Define what a Blazor component is and its fundamental structure using `.razor` files.
*   Create a basic Blazor component that renders HTML and C# logic.
*   Understand and implement component parameters to pass data from a parent component to a child.
*   Handle simple user interactions within a component using event handlers like `@onclick`.

#### Detailed lesson content
Welcome to the heart of Blazor development: components! In Blazor, everything you see on the screen, from a simple button to an entire page layout, is built using components. A Blazor component is a self-contained block of UI and logic, designed for reusability and maintainability. Think of them as custom HTML elements that you define with C# behavior. These components are typically defined in `.razor` files, which combine HTML, CSS, and C# code into a single, cohesive unit. This approach, often called "Razor Components," allows for a highly productive development experience, blending markup and logic seamlessly.

When you open a `.razor` file, you'll immediately notice a mix of familiar HTML tags and special Razor syntax, which begins with the `@` symbol. This `@` symbol is Blazor's way of indicating that what follows is C# code or a Razor directive. The HTML part of your `.razor` file defines the component's visual structure. For instance, you might have `<div>` elements, `<p>` tags, or `<button>` elements, just as you would in a standard HTML page. However, within this HTML, you can embed C# expressions directly using `@variableName` or `@methodCall()`, allowing you to dynamically render content based on your component's state or properties.

The C# logic for a Blazor component resides within an `@code` block. This block is where you declare properties, fields, methods, and implement lifecycle hooks that dictate the component's behavior. Any public property declared within the `@code` block can be accessed from the HTML markup of the component. For example, if you declare `public string Message { get; set; }`, you can display its value in your HTML using `@Message`. This separation of concerns within a single file makes components easy to understand and manage.

One of the most powerful features of components is their ability to accept input, making them highly reusable. This is achieved through **component parameters**. To define a parameter, you declare a public property within your `@code` block and decorate it with the `[Parameter]` attribute. For example, `[Parameter] public string Title { get; set; }`. When a parent component uses this child component, it can pass values to these parameters just like setting attributes on an HTML element: `<MyComponent Title="Hello World" />`. Blazor automatically populates these `[Parameter]` properties with the values provided by the parent. It's crucial that parameter properties have public getters and setters for Blazor to bind them correctly. A common mistake here is forgetting to make the property `public` or omitting the `set` accessor, which will prevent Blazor from assigning values.

Handling user interaction is fundamental to any dynamic web application. Blazor provides a straightforward way to attach event handlers to HTML elements using Razor syntax. For instance, to respond to a button click, you can use `@onclick="MyMethod"`. When the button is clicked, the `MyMethod` C# method in your `@code` block will be executed. Blazor handles all the underlying JavaScript interop to make this seamless. You can also pass event arguments to your methods, such as `MouseEventArgs` for click events, allowing you to access details like mouse coordinates or which button was pressed. This simple yet powerful mechanism allows you to build interactive UIs where user actions directly trigger C# logic.

Let's consider a practical scenario: creating a reusable `ProductCard` component. This component might display a product's name, description, and price. Instead of hardcoding these details, you'd define `ProductName`, `Description`, and `Price` as `[Parameter]` properties. The parent component, perhaps a `ProductList` page, would then iterate over a collection of products and render a `ProductCard` for each, passing in the specific product details. This demonstrates the power of components for building modular and scalable applications. When designing components, always think about what data they need to display and what actions they might need to perform, and then define parameters and event handlers accordingly. This thoughtful design leads to highly reusable and maintainable code.

```razor
<!-- Components/GreetingCard.razor -->
<h3>@Title</h3>
<p>Hello, @Name! @message</p>
<button @onclick="ChangeGreeting">Say Something Else</button>

@code {
    [Parameter]
    public string Title { get; set; } = "Default Title"; // Default value if not provided

    [Parameter]
    public string Name { get; set; } = "Guest"; // Default value for Name

    private string message = "Welcome to Blazor!";

    private void ChangeGreeting()
    {
        message = "Hope you're having a great day!";
        // In simple cases, Blazor often re-renders automatically.
        // For more complex scenarios or external changes, StateHasChanged() might be needed.
    }
}
```

To use this component in a parent page (e.g., `Pages/Index.razor`):

```razor
@page "/"

<PageTitle>Index</PageTitle>

<h1>Welcome to our Blazor App!</h1>

<GreetingCard Title="My First Blazor Component" Name="Cohortia Learner" />

<GreetingCard Name="Blazor Fan" /> <!-- Title will use its default value -->
```

This example illustrates how `GreetingCard` takes `Title` and `Name` as parameters and has an internal `message` state that changes when the button is clicked. The parent `Index` page then uses this component, passing different values for its parameters.

#### Key concepts
*   **Blazor Component:** A self-contained, reusable block of UI and logic, typically defined in a `.razor` file.
*   **Razor Syntax (`@`):** Special syntax used in `.razor` files to embed C# code, expressions, and directives within HTML markup.
*   **`@code` Block:** The section within a `.razor` file where C# logic (properties, fields, methods, lifecycle hooks) for the component is defined.
*   **`[Parameter]` Attribute:** Used to mark a public property in a component's `@code` block, indicating that it can receive data from a parent component.
*   **Event Handling (`@onclick`):** A mechanism to respond to user interactions (like button clicks) by executing a C# method defined in the component's `@code` block.

#### Hands-on activity
**Task:** Create a `ProductDisplay` component that showcases a product's name, price, and includes an "Add to Cart" button.

1.  **Create a new Blazor component:** In your Blazor project's `Components` folder, create a new file named `ProductDisplay.razor`.
2.  **Define parameters:** In the `ProductDisplay.razor` file, declare two `[Parameter]` properties: `ProductName` (string) and `Price` (decimal).
3.  **Render product details:** In the HTML section of `ProductDisplay.razor`, display the `ProductName` and `Price` using Razor syntax. Format the price as currency.
4.  **Add an "Add to Cart" button:** Include a `<button>` element.
5.  **Implement an event handler:** Add an `@onclick` event handler to the button that calls a C# method named `AddToCart`. Inside `AddToCart`, simply print a message to the console indicating which product was added (e.g., `Console.WriteLine($"Added {ProductName} to cart.");`).
6.  **Use the component:** In `Pages/Index.razor` (or any other page), use your `ProductDisplay` component multiple times, passing different product names and prices as parameters.

**Starter Code for `ProductDisplay.razor`:**

```razor
<!-- Components/ProductDisplay.razor -->
<div class="product-card">
    <h4>@ProductName</h4>
    <p>Price: @Price.ToString("C")</p>
    <button @onclick="AddToCart">Add to Cart</button>
</div>

@code {
    [Parameter]
    public string ProductName { get; set; } = "Unknown Product";

    [Parameter]
    public decimal Price { get; set; }

    private void AddToCart()
    {
        Console.WriteLine($"Added {ProductName} to cart for {Price:C}.");
        // In a real application, this would update a shopping cart service.
    }
}
```

**Example Usage in `Pages/Index.razor`:**

```razor
@page "/"

<PageTitle>Products</PageTitle>

<h1>Our Amazing Products</h1>

<div class="product-grid">
    <ProductDisplay ProductName="Blazor Masterpiece" Price="99.99m" />
    <ProductDisplay ProductName="Component Toolkit" Price="49.50m" />
    <ProductDisplay ProductName="Razor Essentials" Price="29.00m" />
</div>

<style>
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
    }
    .product-card {
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: white;
        text-align: center;
    }
    .product-card h4 {
        margin-top: 0;
        color: #333;
    }
    .product-card p {
        color: #666;
        font-size: 1.1em;
    }
    .product-card button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.2s;
    }
    .product-card button:hover {
        background-color: #0056b3;
    }
</style>
```

#### Assessment idea
1.  **Question:** You are building a `UserProfileCard` component. It needs to display the user's `FirstName` and `LastName`. How would you define these properties in the component, and how would a parent component pass these values? Provide a code snippet for both the child component's property definition and the parent's usage.
    **Correct Answer:**
    In the `UserProfileCard.razor` child component:
    ```csharp
    // UserProfileCard.razor @code block
    [Parameter]
    public string FirstName { get; set; }

    [Parameter]
    public string LastName { get; set; }
    ```
    In the parent component (e.g., `Index.razor`):
    ```razor
    <UserProfileCard FirstName="Jane" LastName="Doe" />
    ```
    **Explanation:** The `[Parameter]` attribute on public properties (`FirstName`, `LastName`) allows the parent component to pass data to the child. The parent then uses these properties as attributes on the child component tag, assigning string values directly.

2.  **Question:** Consider a Blazor component that has a button. When this button is clicked, a C# method `IncrementCounter()` should execute. Write the necessary HTML and C# code snippet for this interaction. What is a common mistake related to event handlers that developers often make?
    **Correct Answer:**
    HTML:
    ```razor
    <button @onclick="IncrementCounter">Click Me</button>
    ```
    C# (`@code` block):
    ```csharp
    private int currentCount = 0;

    private void IncrementCounter()
    {
        currentCount++;
        Console.WriteLine($"Counter is now: {currentCount}");
    }
    ```
    **Common Mistake:** A common mistake is accidentally calling the method immediately by including parentheses in the `@onclick` directive, like `@onclick="IncrementCounter()"`. This executes the method once when the component renders, instead of waiting for the button click. The correct syntax for assigning an event handler is to provide only the method name without parentheses: `@onclick="IncrementCounter"`.

#### AI generation note
Create a 12-minute live coding video. Begin by creating a new Blazor Web App project. Demonstrate the creation of a `GreetingCard.razor` component from scratch. Show how to add `[Parameter]` properties for `Title` and `Name`, explaining their purpose for data input. Implement a simple `@onclick` event handler for a button that changes an internal `message` string. Use a split-screen view, with VS Code on the left and the browser output (showing the component rendering and button interaction) on the right. Highlight the `.razor` file structure and the `@code` block. Conclude with a 2-question interactive quiz on the correct syntax for `[Parameter]` and event handlers. Ensure captions and high-contrast visuals are used.

### Chapter 2.2 — Component Lifecycle and State Management

#### Learning objectives
*   Identify and explain the key lifecycle methods of a Blazor component.
*   Implement `OnInitializedAsync` and `OnParametersSetAsync` for asynchronous data loading and responding to parameter changes.
*   Understand the concept of component state and how Blazor tracks and re-renders components.
*   Apply two-way data binding using the `@bind` directive for common HTML input elements.

#### Detailed lesson content
As your Blazor applications grow in complexity, understanding the component lifecycle becomes crucial for managing data, performing initial setup, and reacting to changes. Every Blazor component goes through a series of predictable stages from its creation to its destruction. These stages are exposed as **lifecycle methods**, which you can override in your `@code` block to inject custom logic at specific points. The most commonly used lifecycle methods are `OnInitialized` (and `OnInitializedAsync`), `OnParametersSet` (and `OnParametersSetAsync`), and `OnAfterRender` (and `OnAfterRenderAsync`).

`OnInitialized` (or its asynchronous counterpart `OnInitializedAsync`) is invoked once when the component is first initialized. This is the ideal place to perform initial setup tasks that do not depend on parameter values. For example, if your component needs to fetch some static configuration data from a service, `OnInitializedAsync` is the perfect spot. It's important to note that if you're fetching data asynchronously, you *must* use `OnInitializedAsync` and `await` your data retrieval calls. A common mistake is trying to perform `async` operations in the synchronous `OnInitialized` method, which will lead to compiler warnings or runtime issues.

`OnParametersSet` (or `OnParametersSetAsync`) is called after the component has received parameters from its parent and after `OnInitialized` has completed. This method is invoked every time the component's parameters are set, which includes the first time and any subsequent times a parent component changes a parameter value. This makes `OnParametersSetAsync` the perfect place to fetch data that depends on parameter values. For instance, if you have a `UserProfile` component that takes a `UserId` parameter, you would use `OnParametersSetAsync` to fetch the user's data from an API based on the provided `UserId`. You should always check if the parameter value has actually changed before re-fetching data to avoid unnecessary network requests.

`OnAfterRender` (or `OnAfterRenderAsync`) is called after the component has finished rendering and the Blazor renderer has updated the browser's DOM. This method is useful for interacting with JavaScript libraries that need to operate on the rendered DOM elements, or for performing actions that require the UI to be fully updated. For example, if you're integrating a third-party charting library that needs a specific `<div>` element to exist in the DOM, you would initialize it within `OnAfterRenderAsync`. This method has a `firstRender` boolean parameter, allowing you to run logic only once after the initial render.

Understanding **component state management** is fundamental. Blazor components maintain their own internal state (the values of their properties and fields). When this state changes, Blazor needs to know to re-render the component and update the UI. Typically, Blazor automatically detects state changes that occur as a direct result of UI events (like `@onclick`). However, if a state change occurs outside of Blazor's normal event handling flow – for example, if data is updated by a timer, a background service, or an external JavaScript interop call – Blazor might not automatically detect the change. In such cases, you must explicitly tell Blazor to re-render the component by calling `StateHasChanged()`. Forgetting to call `StateHasChanged()` in these scenarios is a very common mistake, leading to the UI not updating even though the underlying data has changed.

**Two-way data binding** is another cornerstone of interactive Blazor applications. It allows you to synchronize the value of an HTML input element with a C# property in your component. When the user types into an input field, the C# property automatically updates. Conversely, when the C# property changes, the input field's value is automatically updated. Blazor simplifies this with the `@bind` directive. For example, `<input type="text" @bind="UserName" />` will bind the `value` of the input field to the `UserName` string property in your `@code` block. Blazor intelligently handles the underlying event listeners (like `onchange` or `oninput`) to ensure this synchronization. You can also specify the event that triggers the update, for example, `@bind:event="oninput"` for more immediate updates as the user types, rather than waiting for the input to lose focus.

Let's imagine you're building a user profile editor. You'd use `OnInitializedAsync` to load the user's existing data from an API. Then, for each input field (like username, email), you'd use `@bind` to connect it to the corresponding property in your user model. When the user types, the model updates. If another part of your application modifies the user model, the input fields automatically reflect those changes. This seamless data flow provided by `@bind` significantly reduces the boilerplate code typically required for form handling. Always remember to initialize your bound properties to avoid null reference exceptions, especially for complex objects.

```razor
<!-- Components/UserEditor.razor -->
<h3>Edit User Profile</h3>

@if (user == null)
{
    <p><em>Loading user data...</em></p>
}
else
{
    <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" class="form-control" @bind="user.Username" />
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" class="form-control" @bind="user.Email" />
    </div>
    <p>Current Username: <strong>@user.Username</strong></p>
    <p>Current Email: <strong>@user.Email</strong></p>
    <button class="btn btn-primary" @onclick="SaveUser">Save Changes</button>
}

@code {
    private User? user; // Using nullable reference type

    protected override async Task OnInitializedAsync()
    {
        // Simulate an asynchronous API call to fetch user data
        await Task.Delay(1000); // Simulate network latency
        user = new User { Username = "cohortia_learner", Email = "learner@cohortia.com" };
        Console.WriteLine("User data initialized.");
    }

    private void SaveUser()
    {
        if (user != null)
        {
            Console.WriteLine($"Saving user: {user.Username}, {user.Email}");
            // In a real app, you'd send this data to a backend API
        }
    }

    // Example of a data model
    public class User
    {
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }
}
```

This `UserEditor` component demonstrates `OnInitializedAsync` to load user data and `@bind` for two-way data binding with input fields.

#### Key concepts
*   **Component Lifecycle:** The sequence of stages a Blazor component goes through from creation to destruction, with methods available to inject custom logic.
*   **`OnInitializedAsync`:** A lifecycle method called once when the component is first initialized, suitable for asynchronous setup that doesn't depend on parameters.
*   **`OnParametersSetAsync`:** A lifecycle method called after parameters are set, both initially and whenever they change, suitable for data loading dependent on parameters.
*   **Component State:** The internal data (properties and fields) that a component manages, which determines its current appearance and behavior.
*   **`StateHasChanged()`:** A method explicitly called to notify Blazor that a component's state has changed and it needs to re-render, especially for changes outside of Blazor's event handling.
*   **Two-Way Data Binding (`@bind`):** A mechanism that automatically synchronizes the value of an HTML input element with a C# property, updating both sides when either changes.

#### Hands-on activity
**Task:** Create a `FeedbackForm` component that uses `OnInitializedAsync` to load a default message and `@bind` to capture user input, displaying the character count.

1.  **Create `FeedbackForm.razor`:** In your `Components` folder, create a new file named `FeedbackForm.razor`.
2.  **Define state:** In the `@code` block, declare a `string` property `FeedbackMessage` initialized to an empty string, and an `int` property `CharacterCount`.
3.  **Implement `OnInitializedAsync`:** Override `OnInitializedAsync`. Inside this method, simulate an asynchronous call (e.g., `await Task.Delay(500);`) and then set `FeedbackMessage` to a default value like "Please provide your feedback here...". Also, update `CharacterCount` based on the default message.
4.  **Create a `<textarea>`:** In the HTML section, add a `<textarea>` element.
5.  **Bind the textarea:** Use `@bind="FeedbackMessage"` on the `<textarea>`. To update the character count in real-time as the user types, also add `@bind:event="oninput"`.
6.  **Display character count:** Below the `<textarea>`, display the current `CharacterCount`.
7.  **Update character count logic:** You'll need a method or a computed property that updates `CharacterCount` whenever `FeedbackMessage` changes. A simple way is to use a property with a setter that also updates the `CharacterCount`.
8.  **Add a submit button:** Include a button that, when clicked, prints the `FeedbackMessage` to the console.
9.  **Use the component:** Add your `FeedbackForm` component to `Pages/Index.razor`.

**Starter Code for `FeedbackForm.razor`:**

```razor
<!-- Components/FeedbackForm.razor -->
<div class="feedback-container">
    <h3>Your Feedback Matters!</h3>
    <div class="form-group">
        <label for="feedbackTextarea">Your Message:</label>
        <textarea id="feedbackTextarea" class="form-control"
                  @bind="FeedbackMessage"
                  @bind:event="oninput"
                  rows="5"></textarea>
    </div>
    <p class="text-muted">Characters: @CharacterCount</p>
    <button class="btn btn-success" @onclick="SubmitFeedback">Submit Feedback</button>
</div>

@code {
    private string feedbackMessage = string.Empty;
    public string FeedbackMessage
    {
        get => feedbackMessage;
        set
        {
            feedbackMessage = value;
            CharacterCount = feedbackMessage.Length;
        }
    }

    public int CharacterCount { get; private set; }

    protected override async Task OnInitializedAsync()
    {
        // Simulate loading a default message from a service
        await Task.Delay(750); // Artificial delay
        FeedbackMessage = "Type your valuable feedback here..."; // This will also update CharacterCount
        Console.WriteLine("Default feedback message loaded.");
    }

    private void SubmitFeedback()
    {
        Console.WriteLine($"Feedback Submitted: \"{FeedbackMessage}\" (Length: {CharacterCount})");
        // In a real application, this would send data to a backend.
        // Optionally, reset the form:
        // FeedbackMessage = string.Empty;
    }
}
```

**Example Usage in `Pages/Index.razor`:**

```razor
@page "/"

<PageTitle>Feedback</PageTitle>

<h1>Provide Your Feedback</h1>

<FeedbackForm />

<style>
    .feedback-container {
        max-width: 600px;
        margin: 30px auto;
        padding: 25px;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        background-color: #fdfdfd;
    }
    .feedback-container h3 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #555;
    }
    .form-control {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-sizing: border-box; /* Ensures padding doesn't increase width */
        font-size: 1em;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .form-control:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        outline: none;
    }
    .text-muted {
        font-size: 0.9em;
        color: #777;
        text-align: right;
        margin-top: -10px;
        margin-bottom: 15px;
    }
    .btn {
        display: inline-block;
        font-weight: 400;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: #007bff;
        border: 1px solid #007bff;
        padding: 10px 20px;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }
    .btn-success {
        background-color: #28a745;
        border-color: #28a745;
    }
    .btn-success:hover {
        background-color: #218838;
        border-color: #1e7e34;
    }
</style>
```

#### Assessment idea
1.  **Question:** You have a Blazor component that needs to fetch a list of products from an API. This API call is asynchronous and should happen only once when the component first loads. Which lifecycle method would you use, and why? Provide a simple code snippet demonstrating its usage.
    **Correct Answer:**
    You would use the `OnInitializedAsync` lifecycle method.
    **Explanation:** `OnInitializedAsync` is called exactly once when the component is first initialized. It's designed for asynchronous operations that should run at the start of a component's life and do not depend on parameter values. Using its `Async` version allows you to `await` network calls without blocking the UI thread.
    **Code Snippet:**
    ```csharp
    // @code block in your component
    private List<Product> products = new List<Product>();

    protected override async Task OnInitializedAsync()
    {
        // Simulate fetching data from an API
        await Task.Delay(1500); // Simulate network latency
        products = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop" },
            new Product { Id = 2, Name = "Mouse" }
        };
        Console.WriteLine("Products loaded successfully!");
    }

    public class Product { public int Id { get; set; } public string Name { get; set; } = string.Empty; }
    ```

2.  **Question:** You have a Blazor component with a `string SearchQuery` property. You want to bind this property to an `<input type="search">` element so that the `SearchQuery` updates immediately as the user types, not just when they press Enter or blur the input. How would you achieve this using Blazor's data binding?
    **Correct Answer:**
    You would use the `@bind` directive along with the `@bind:event="oninput"` modifier.
    **Explanation:** The `@bind` directive provides two-way data binding. By default, for text inputs, it often binds to the `onchange` event, meaning the C# property updates only when the input loses focus. Adding `@bind:event="oninput"` explicitly tells Blazor to update the bound property every time the `input` event fires (i.e., immediately as the user types), providing a more responsive user experience.
    **Code Snippet:**
    ```razor
    <input type="search" @bind="SearchQuery" @bind:event="oninput" placeholder="Search..." />

    @code {
        public string SearchQuery { get; set; } = string.Empty;

        // You could add a method here to react to SearchQuery changes,
        // or use it in other parts of your component's rendering logic.
        private void PerformSearch()
        {
            Console.WriteLine($"Searching for: {SearchQuery}");
        }
    }
    ```

#### AI generation note
Create a 15-minute interactive lab walkthrough. Start with a partially built `UserProfileEditor` component. First, demonstrate `OnInitializedAsync` by implementing a simulated async data fetch for initial user data. Next, introduce a `UserId` `[Parameter]` and show how `OnParametersSetAsync` can be used to re-fetch user data when the `UserId` changes (e.g., by having a parent component change the `UserId` parameter). Highlight the `StateHasChanged()` method's role with an example where an external timer updates a value, requiring an explicit call to `StateHasChanged()`. Conclude by demonstrating two-way data binding using `@bind` for multiple input fields in the `UserProfileEditor`, showing immediate UI updates. Use VS Code with clear code highlighting and browser dev tools to observe component renders. Provide a starter project with the basic component structure.

### Chapter 2.3 — Event Handling, Data Binding, and Component Interaction

#### Learning objectives
*   Implement advanced event handling using `EventCallback<T>` for child-to-parent communication.
*   Create custom two-way data binding for reusable input components using the `Value` and `ValueChanged` pattern.
*   Understand and apply `CaptureUnmatchedValues` to pass arbitrary HTML attributes to components.
*   Design components that effectively communicate and interact with each other in a Blazor application.

#### Detailed lesson content
Effective communication between components is paramount for building modular and maintainable Blazor applications. While parameters allow parent components to pass data down to children, often a child component needs to notify its parent about an event or a change in its internal state. This is where **`EventCallback<T>`** comes into play. `EventCallback<T>` is a Blazor-specific delegate type that provides a structured and type-safe way for child components to raise events that parent components can subscribe to.

To implement child-to-parent communication, the child component declares a public `[Parameter]` of type `EventCallback` or `EventCallback<T>`. For example, a `DeleteButton` component might have `[Parameter] public EventCallback OnDelete { get; set; }`. When the button is clicked, the child component invokes this callback using `await OnDelete.InvokeAsync()`. The parent component then assigns a method to this `EventCallback` parameter, just like it would assign a value to any other parameter: `<DeleteButton OnDelete="HandleDeleteConfirmed" />`. If the child needs to pass data back to the parent (e.g., the ID of the item being deleted), you would use `EventCallback<T>` where `T` is the type of data being passed: `[Parameter] public EventCallback<int> OnItemDeleted { get; set; }`, invoked as `await OnItemDeleted.InvokeAsync(itemId)`. This pattern ensures a clean separation of concerns, where the child component doesn't need to know anything about its parent's implementation details. A common mistake is forgetting to `await` the `InvokeAsync()` call, which can lead to unexpected behavior if the parent's event handler is asynchronous.

Beyond simple event notification, Blazor also allows for **custom two-way data binding** for your own components. This means you can create a highly reusable input component (e.g., a styled numeric input or a custom dropdown) that behaves just like a native HTML input element when used with `@bind`. The convention for custom two-way binding is to define a `[Parameter]` named `Value` (of type `T`) and an `[Parameter]` named `ValueChanged` (of type `EventCallback<T>`). When the internal value of your custom component changes, you invoke `ValueChanged.InvokeAsync(newValue)`. The parent component can then use this custom component with the familiar `@bind-Value="parentProperty"` syntax. Blazor automatically wires up the `Value` parameter for reading and the `ValueChanged` `EventCallback` for writing, enabling seamless two-way binding. This is incredibly powerful for building design systems and consistent UI elements.

Finally, when creating wrapper components or highly customizable UI elements, you often want to allow consumers to pass arbitrary HTML attributes (like `class`, `style`, `id`, `data-tooltip`) that your component doesn't explicitly define as parameters. The **`CaptureUnmatchedValues`** attribute solves this. By marking a `[Parameter]` of type `Dictionary<string, object>` with `[Parameter(CaptureUnmatchedValues = true)]`, your component will capture all attributes passed to it that don't match any other defined parameters. You can then apply these captured attributes to an underlying HTML element using `@attributes="YourDictionaryProperty"`. This allows your custom components to be as flexible and extensible as native HTML elements. For example, a `StyledButton` component could accept `class="btn btn-primary"` and `data-toggle="modal"` even if it doesn't have explicit `class` or `data-toggle` parameters, passing them directly to its internal `<button>` element.

Let's consider a scenario where you're building a `Rating` component. This component would display stars and allow the user to select a rating. It would have an `int Value` parameter (e.g., 1-5) and an `EventCallback<int> ValueChanged` to notify the parent when the rating changes. The parent could then use `<Rating @bind-Value="userRating" />`. Additionally, you might want to allow the parent to pass a `class` attribute like `class="large-stars"` to style the rating component, which would be handled by `CaptureUnmatchedValues`. This combination of `EventCallback`, custom two-way binding, and `CaptureUnmatchedValues` provides a robust toolkit for building rich, interactive, and highly reusable Blazor components.

```razor
<!-- Components/CustomTextInput.razor -->
<div class="form-group">
    <label for="@Id">@Label</label>
    <input id="@Id" type="text" class="form-control"
           @attributes="AdditionalAttributes"
           value="@CurrentValue"
           @oninput="OnInputChanged" />
</div>

@code {
    [Parameter]
    public string Id { get; set; } = Guid.NewGuid().ToString(); // Unique ID for accessibility

    [Parameter]
    public string Label { get; set; } = "Input Field";

    [Parameter]
    public string CurrentValue { get; set; } = string.Empty; // This is the 'Value' part of @bind-Value

    [Parameter]
    public EventCallback<string> CurrentValueChanged { get; set; } // This is the 'ValueChanged' part

    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object> AdditionalAttributes { get; set; } = new Dictionary<string, object>();

    private async Task OnInputChanged(ChangeEventArgs e)
    {
        CurrentValue = e.Value?.ToString() ?? string.Empty;
        await CurrentValueChanged.InvokeAsync(CurrentValue);
    }
}
```

To use this `CustomTextInput` with two-way binding in a parent component (e.g., `Pages/Index.razor`):

```razor
@page "/"

<PageTitle>Component Interaction</PageTitle>

<h1>Component Interaction Demo</h1>

<h2>Custom Two-Way Binding</h2>
<CustomTextInput Label="Your Name" @bind-CurrentValue="userName" placeholder="Enter your name" class="my-custom-input" />
<p>Hello, <strong>@userName</strong>!</p>

<hr />

<h2>Child-to-Parent Event (Delete Confirmation)</h2>
<DeleteConfirmationButton OnConfirmed="HandleDeleteConfirmed" ItemName="User Account" />
<p>Status: @deleteStatus</p>

@code {
    // For Custom Two-Way Binding
    private string userName = "Guest";

    // For Child-to-Parent Event
    private string deleteStatus = "Waiting for confirmation...";

    private void HandleDeleteConfirmed()
    {
        deleteStatus = "Delete operation confirmed by user!";
        Console.WriteLine("Parent received delete confirmation.");
    }
}
```

And the `DeleteConfirmationButton` component:

```razor
<!-- Components/DeleteConfirmationButton.razor -->
<button class="btn btn-danger" @onclick="ShowConfirmation">Delete @ItemName</button>

@if (showConfirm)
{
    <div class="confirmation-overlay">
        <div class="confirmation-box">
            <p>Are you sure you want to delete the @ItemName?</p>
            <button class="btn btn-primary" @onclick="ConfirmDelete">Yes, Delete</button>
            <button class="btn btn-secondary" @onclick="CancelDelete">Cancel</button>
        </div>
    </div>
}

@code {
    [Parameter]
    public string ItemName { get; set; } = "item";

    [Parameter]
    public EventCallback OnConfirmed { get; set; }

    private bool showConfirm = false;

    private void ShowConfirmation()
    {
        showConfirm = true;
    }

    private async Task ConfirmDelete()
    {
        showConfirm = false;
        await OnConfirmed.InvokeAsync(); // Notify parent
    }

    private void CancelDelete()
    {
        showConfirm = false;
    }
}

<style>
    .confirmation-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .confirmation-box {
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        text-align: center;
        max-width: 400px;
    }
    .confirmation-box p {
        margin-bottom: 20px;
        font-size: 1.1em;
    }
    .confirmation-box button {
        margin: 0 10px;
    }
    /* Basic button styles for demo */
    .btn {
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        font-size: 1em;
    }
    .btn-danger { background-color: #dc3545; color: white; }
    .btn-danger:hover { background-color: #c82333; }
    .btn-primary { background-color: #007bff; color: white; }
    .btn-primary:hover { background-color: #0056b3; }
    .btn-secondary { background-color: #6c757d; color: white; }
    .btn-secondary:hover { background-color: #5a6268; }

    .my-custom-input {
        border: 2px solid #007bff;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
    }
</style>
```

#### Key concepts
*   **`EventCallback<T>`:** A Blazor-specific delegate type used to pass methods from a parent component to a child, enabling the child to notify the parent about events or data changes. `T` specifies the type of data passed with the event.
*   **Child-to-Parent Communication:** The pattern where a child component notifies its parent about an action or state change, typically using `EventCallback`.
*   **Custom Two-Way Data Binding:** The ability to create your own reusable input components that can be used with the `@bind-Property` syntax, by defining a `Value` parameter and a `ValueChanged` `EventCallback`.
*   **`CaptureUnmatchedValues`:** An attribute that allows a `Dictionary<string, object>` parameter to capture any HTML attributes passed to a component that are not explicitly defined as other parameters.
*   **Component Interaction:** The overall process of how Blazor components communicate and share data, including parent-to-child (parameters) and child-to-parent (EventCallback) mechanisms.

#### Hands-on activity
**Task:** Build a `NumberInput` component that allows users to increment or decrement a numeric value, and demonstrate its custom two-way binding.

1.  **Create `NumberInput.razor`:** In your `Components` folder, create `NumberInput.razor`.
2.  **Define custom binding parameters:** In the `@code` block, declare `[Parameter] public int Value { get; set; }` and `[Parameter] public EventCallback<int> ValueChanged { get; set; }`.
3.  **Implement UI:** In the HTML, create a layout with a display for the `Value`, a "Decrement" button, and an "Increment" button.
4.  **Implement `Increment` and `Decrement` methods:** Create `Increment()` and `Decrement()` methods. These methods should update the internal `Value` and then invoke `await ValueChanged.InvokeAsync(Value)` to notify the parent.
5.  **Add `CaptureUnmatchedValues` (Optional but good practice):** Include `[Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object> AdditionalAttributes { get; set; }` and apply `@attributes="AdditionalAttributes"` to a root `div` or internal input if you want to allow external styling.
6.  **Use in parent:** In `Pages/Index.razor`, declare an `int` property (e.g., `currentQuantity`). Use your `NumberInput` component with `@bind-Value="currentQuantity"`. Display `currentQuantity` in the parent to show the two-way binding in action.

**Starter Code for `NumberInput.razor`:**

```razor
<!-- Components/NumberInput.razor -->
<div class="number-input-container" @attributes="AdditionalAttributes">
    <button class="btn btn-outline-secondary" @onclick="Decrement">-</button>
    <span class="current-value">@Value</span>
    <button class="btn btn-outline-secondary" @onclick="Increment">+</button>
</div>

@code {
    [Parameter]
    public int Value { get; set; }

    [Parameter]
    public EventCallback<int> ValueChanged { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object> AdditionalAttributes { get; set; } = new Dictionary<string, object>();

    private async Task Increment()
    {
        Value++;
        await ValueChanged.InvokeAsync(Value);
    }

    private async Task Decrement()
    {
        Value--;
        await ValueChanged.InvokeAsync(Value);
    }
}
```

**Example Usage in `Pages/Index.razor`:**

```razor
@page "/"

<PageTitle>Number Input</PageTitle>

<h1>Custom Number Input Demo</h1>

<p>Current Quantity in Parent: <strong>@productQuantity</strong></p>

<NumberInput @bind-Value="productQuantity" class="my-custom-number-input" />

<hr />

<p>Another Quantity: <strong>@anotherQuantity</strong></p>
<NumberInput @bind-Value="anotherQuantity" />

@code {
    private int productQuantity = 5;
    private int anotherQuantity = 10;
}

<style>
    .number-input-container {
        display: inline-flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        overflow: hidden;
        margin: 10px;
    }
    .number-input-container .btn {
        padding: 8px 12px;
        border: none;
        background-color: #f0f0f0;
        cursor: pointer;
        font-size: 1.1em;
        transition: background-color 0.2s;
    }
    .number-input-container .btn:hover {
        background-color: #e0e0e0;
    }
    .number-input-container .current-value {
        padding: 8px 15px;
        font-size: 1.2em;
        min-width: 30px;
        text-align: center;
        background-color: white;
    }
    .my-custom-number-input {
        border: 2px solid #28a745;
        box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
    }
</style>
```

#### Assessment idea
1.  **Question:** You have a `ProductCard` child component that displays a product's details and has a "View Details" button. When this button is clicked, the parent component needs to be notified and receive the `ProductId` so it can navigate to the product's detail page. How would you implement this child-to-parent communication using `EventCallback<T>`? Provide the necessary code snippets for both child and parent.
    **Correct Answer:**
    **Child Component (`ProductCard.razor`):**
    ```csharp
    // @code block in ProductCard.razor
    [Parameter]
    public int ProductId { get; set; }

    [Parameter]
    public EventCallback<int> OnViewDetails { get; set; } // EventCallback with int payload

    private async Task HandleViewDetailsClick()
    {
        // Invoke the callback, passing the ProductId
        await OnViewDetails.InvokeAsync(ProductId);
    }
    ```
    HTML in `ProductCard.razor`:
    ```razor
    <button @onclick="HandleViewDetailsClick">View Details</button>
    ```
    **Parent Component (`ProductList.razor` or `Index.razor`):**
    ```csharp
    // @code block in parent component
    private void NavigateToProductDetails(int id)
    {
        Console.WriteLine($"Parent received request to view details for Product ID: {id}");
        // In a real app, you'd use NavigationManager here:
        // NavigationManager.NavigateTo($"/products/{id}");
    }
    ```
    HTML in parent component:
    ```razor
    <ProductCard ProductId="101" OnViewDetails="NavigateToProductDetails" />
    ```
    **Explanation:** The `ProductCard` declares `OnViewDetails` as an `EventCallback<int>` parameter. When its button is clicked, it invokes this callback, passing its `ProductId`. The parent component then assigns its `NavigateToProductDetails` method to this `OnViewDetails` parameter, which will be executed with the `ProductId` when the child's event fires.

2.  **Question:** You are creating a custom `StyledInput` component that wraps a standard HTML `<input type="text">`. You want users of your `StyledInput` component to be able to pass any standard HTML attributes (like `placeholder`, `class`, `data-custom`) directly to your component, and have them applied to the underlying `<input>` element. How would you achieve this in Blazor?
    **Correct Answer:**
    You would use the `[Parameter(CaptureUnmatchedValues = true)]` attribute on a `Dictionary<string, object>` property.
    **Explanation:** The `CaptureUnmatchedValues` attribute allows a component to collect any attributes passed to it that don't match its explicitly defined parameters. These collected attributes are stored in the specified `Dictionary<string, object>`. By then applying `@attributes="YourDictionaryProperty"` to the underlying HTML element (in this case, the `<input type="text">`), all the unmatched attributes are rendered directly onto that element.
    **Code Snippet:**
    ```csharp
    // @code block in StyledInput.razor
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object> AdditionalAttributes { get; set; } = new Dictionary<string, object>();
    ```
    HTML in `StyledInput.razor`:
    ```razor
    <input type="text" class="styled-input-base" @attributes="AdditionalAttributes" />
    ```
    Usage in parent component:
    ```razor
    <StyledInput placeholder="Enter text here" class="form-control my-special-class" data-validation="required" />
    ```

#### AI generation note
Create a 15-minute live coding demo. Begin with a `ProductList` parent component. First, create a `ProductCard` child component that displays product details and has an "Add to Cart" button. Demonstrate child-to-parent communication by having the `ProductCard` use `EventCallback<Product>` to notify the `ProductList` when a product is added, updating a cart display in the parent. Next, refactor a standard `<input type="text" />` into a custom `StyledTextInput` component. Show how to implement custom two-way data binding using `Value` and `ValueChanged` parameters, allowing the parent to use `@bind-Value="someStringProperty"`. Finally, integrate `CaptureUnmatchedValues` into `StyledTextInput` to allow passing `class` and `placeholder` attributes from the parent. Use VS Code, browser dev tools, and clear component hierarchy diagrams as overlays. Conclude with a hands-on exercise to extend the `ProductCard` with a quantity selector using the custom `NumberInput` component developed in the activity.

---

## Module 3: State Management and Routing

**Module 3: State Management and Routing**

**Module Goal:** By the end of this module, learners will be able to implement robust client-side routing, effectively pass data between components using various techniques, and manage application state to create dynamic and interactive Blazor applications.

### Chapter 3.1 — Introduction to Blazor Routing

#### Learning objectives
*   Understand the fundamental principles of client-side routing in Blazor applications.
*   Implement basic page routing using the `@page` directive and define multiple routes for a single component.
*   Utilize the `NavLink` component to create navigation links that automatically highlight the active route.
*   Navigate programmatically within a Blazor application using the `NavigationManager` service.
*   Identify and avoid common routing configuration mistakes.

#### Detailed lesson content
Welcome to the exciting world of Blazor routing! In single-page applications (SPAs) like those built with Blazor, routing is crucial for providing a traditional multi-page user experience without full page reloads. Instead of requesting a new HTML document from the server for every navigation, Blazor handles routing entirely on the client-side. When a user clicks a link or types a URL, Blazor intercepts the request, matches the URL to a specific component, and then renders that component dynamically within the existing page. This approach results in incredibly fast and fluid user interfaces, enhancing the user experience significantly.

At the heart of Blazor's routing mechanism is the `@page` directive. You place this directive at the top of a `.razor` component file to declare that the component should be treated as a routable page. The value provided to `@page` specifies the URL path that will trigger the rendering of this component. For instance, if you have a component named `ProductDetails.razor` and you want it to be accessible at `/products/details`, you would add `@page "/products/details"` at the top of the file. It's important to remember that a single component can respond to multiple routes. You can simply add multiple `@page` directives, each on its own line, to achieve this. This is particularly useful when you want to provide alternative paths to the same content, perhaps for legacy URLs or different entry points, without duplicating component logic.

Let's look at a simple example. Imagine you have a `HomePage.razor` component and you want it to be the default landing page for your application, as well as accessible via a specific `/home` path.

```csharp
@page "/"
@page "/home"

<h1>Welcome to Blazor Bootcamp!</h1>
<p>This is the home page of our application.</p>
```

When a user navigates to the root URL (`/`) or `/home`, this `HomePage` component will be rendered. Blazor's router, which is typically configured in `App.razor` using the `Router` component, will intercept the URL and find the matching component. The `Router` component works by wrapping a `Found` and `NotFound` block. The `Found` block specifies what to render when a route match is found (usually a `RouteView` component), and the `NotFound` block defines what to display when no route matches the requested URL. This provides a graceful way to handle non-existent pages, often showing a "404 Not Found" message, which is a good practice for user feedback.

For navigation within your application, Blazor provides the `NavLink` component. This is a specialized anchor tag (`<a>`) that automatically applies an `active` CSS class to itself when its `href` matches the current URL. This feature is incredibly useful for highlighting the currently active menu item in a navigation bar, giving users clear visual feedback about their current location in the application. You simply use it like a regular `<a>` tag, but instead of `<a href="...">`, you use `<NavLink href="...">`.

```html
<nav>
    <NavLink href="/" Match="NavLinkMatch.All">Home</NavLink>
    <NavLink href="/products">Products</NavLink>
    <NavLink href="/about">About Us</NavLink>
</nav>
```

In the example above, `Match="NavLinkMatch.All"` for the home link ensures that it's only active when the URL is exactly `/`. For other links, the default `NavLinkMatch.Prefix` is often sufficient, meaning the link is active if the current URL starts with the `href` value. For instance, `/products` would be active for `/products` and `/products/details`. Understanding `NavLinkMatch` is crucial for correct navigation highlighting and avoiding situations where multiple links appear active simultaneously. A common mistake is using `NavLinkMatch.All` for parent routes when you want child routes (e.g., `/products/123`) to also keep the parent navigation item (`/products`) active.

Sometimes, you need to trigger navigation programmatically, perhaps after a form submission, a successful API call, or based on some application logic. For this, Blazor provides the `NavigationManager` service. This service allows you to navigate to different URLs, refresh the current page, or even get information about the current URL. To use it, you simply inject it into your component using the `@inject` directive.

```csharp
@page "/submit-order"
@inject NavigationManager NavigationManager

<h3>Order Submitted!</h3>
<button @onclick="NavigateToOrderHistory">View My Orders</button>

@code {
    private void NavigateToOrderHistory()
    {
        NavigationManager.NavigateTo("/order-history");
    }
}
```

In this snippet, after an order is submitted (or any other event), the `NavigateToOrderHistory` method is called, which then uses `NavigationManager.NavigateTo("/order-history")` to redirect the user. The `NavigationManager` also offers an overload for `NavigateTo` that accepts a `forceLoad` boolean parameter. Setting `forceLoad` to `true` will bypass Blazor's client-side routing and force a full page reload from the server. This is rarely needed in a typical SPA as it defeats the purpose of client-side routing, but it can be useful in specific scenarios, such as when dealing with external authentication redirects or when you need to completely reset the client-side application state.

Common mistakes in routing often involve incorrect `@page` directives, leading to "404 Not Found" errors, or issues with `NavLinkMatch` causing incorrect highlighting. Always double-check your `@page` paths for typos and ensure they are unique if they don't involve parameters. If you have overlapping routes (e.g., `/products` and `/products/{id}`), Blazor's router prioritizes the most specific match. Another pitfall is trying to use plain `<a>` tags for internal navigation instead of `NavLink`. While `<a>` tags technically work, they won't provide the automatic active class highlighting, leading to a less polished user experience. Finally, be mindful of case sensitivity in URLs, especially on different operating systems or deployment environments, although Blazor's default router is generally case-insensitive for paths. Always test your routes thoroughly across different navigation methods (direct URL entry, `NavLink` clicks, programmatic navigation) to ensure robustness and a smooth user journey.

#### Key concepts
*   **Client-Side Routing:** A mechanism in Single-Page Applications (SPAs) where navigation between different "pages" occurs without a full page reload, handled entirely by the browser and application logic.
*   **`@page` Directive:** A Blazor directive used at the top of a `.razor` component to declare it as a routable page and specify the URL path(s) that will render it.
*   **`Router` Component:** The core Blazor component (typically found in `App.razor`) responsible for intercepting URLs, matching them to `@page` directives, and rendering the appropriate component.
*   **`NavLink` Component:** A specialized Blazor component that renders an HTML `<a>` tag and automatically applies an `active` CSS class to itself when its `href` matches the current route.
*   **`NavLinkMatch`:** An enumeration (`All` or `Prefix`) used with `NavLink` to specify how strictly the `href` should match the current URL for the `active` class to be applied.
*   **`NavigationManager` Service:** A built-in Blazor service that allows programmatic navigation (e.g., `NavigateTo`), refreshing the current page, and accessing information about the current URL.

#### Hands-on activity
**Activity: Building a Simple Navigation Menu**

Create three new Blazor components: `Home.razor`, `Products.razor`, and `Contact.razor`. Configure each with an appropriate `@page` directive. Then, update `NavMenu.razor` (or create a new `Navigation.razor` component) to use `NavLink` components to navigate between these pages. Ensure the active link is highlighted correctly.

**Starter Code (NavMenu.razor):**

```html
<!-- Components/NavMenu.razor -->
<div class="top-row ps-3 navbar navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="">BlazorRoutingApp</a>
        <button title="Navigation menu" class="navbar-toggler" @onclick="ToggleNavMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>

<div class="@NavMenuCssClass" @onclick="ToggleNavMenu">
    <nav class="flex-column">
        <div class="nav-item px-3">
            <!-- Add your NavLink components here -->
            <NavLink class="nav-link" href="/" Match="NavLinkMatch.All">
                <span class="oi oi-home" aria-hidden="true"></span> Home
            </NavLink>
            <!-- Add Products and Contact NavLinks below -->
        </div>
    </nav>
</div>

@code {
    private bool collapseNavMenu = true;

    private string? NavMenuCssClass => collapseNavMenu ? "collapse" : null;

    private void ToggleNavMenu()
    {
        collapseNavMenu = !collapseNavMenu;
    }
}
```

**Instructions:**
1.  Create `Pages/Home.razor` with `@page "/"`. Add some simple content like `<h1>Welcome Home!</h1>`.
2.  Create `Pages/Products.razor` with `@page "/products"`. Add content like `<h1>Our Products</h1>`.
3.  Create `Pages/Contact.razor` with `@page "/contact"`. Add content like `<h1>Contact Us</h1>`.
4.  Modify `Components/NavMenu.razor` to include `NavLink` components for `/products` and `/contact`. Ensure they have appropriate `class="nav-link"` and `Match` attributes (default `Prefix` is fine for these).
5.  Run the application and verify that clicking the links navigates to the correct pages and that the active link in the navigation menu is highlighted. Test both direct navigation and clicking links.

#### Assessment idea
1.  **Question:** You have a Blazor component `UserDetails.razor` that you want to be accessible at `/users/{id}` and `/profile/{id}`. Which of the following is the correct way to configure its routing?
    *   a) `@page "/users/{id}" @page "/profile/{id}"`
    *   b) `@page "/users/{id}"`, then on the next line `@page "/profile/{id}"`
    *   c) `@page "/users/{id}, /profile/{id}"`
    *   d) You can only define one route per component.

    **Correct Answer:** b) `@page "/users/{id}"`, then on the next line `@page "/profile/{id}"`
    **Explanation:** Blazor allows a single component to respond to multiple routes. Each `@page` directive must be on its own line at the top of the component file to be parsed correctly. Option 'a' is syntactically incorrect, 'c' uses an invalid comma-separated format, and 'd' is false as multiple routes are supported.

2.  **Question:** You have a button in your Blazor component that, when clicked, should navigate the user to the `/dashboard` page. Which Blazor service would you inject and what method would you use to achieve this programmatic navigation?
    *   a) Inject `HttpClient` and use `HttpClient.GetAsync("/dashboard")`.
    *   b) Inject `IJSRuntime` and use `IJSRuntime.InvokeVoidAsync("window.location.href", "/dashboard")`.
    *   c) Inject `NavigationManager` and use `NavigationManager.NavigateTo("/dashboard")`.
    *   d) Inject `Router` and use `Router.Navigate("/dashboard")`.

    **Correct Answer:** c) Inject `NavigationManager` and use `NavigationManager.NavigateTo("/dashboard")`.
    **Explanation:** The `NavigationManager` service is specifically designed for programmatic navigation within Blazor applications. `HttpClient` is for making HTTP requests, `IJSRuntime` is for JavaScript interop, and `Router` is a component, not an injectable service for navigation. Using `NavigationManager.NavigateTo` is the idiomatic Blazor way to handle internal redirects.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute animated diagram illustrating client-side routing flow (URL change -> Router intercepts -> Component renders). Follow with a 7-minute live coding demo showing how to add `@page` directives for single and multiple routes, use `NavLink` with `NavLinkMatch.All` and `Prefix`, and inject/use `NavigationManager` for programmatic navigation after a button click. Display the browser's URL bar changing and the active `NavLink` highlighting. Conclude with a 2-minute segment on common routing errors (e.g., 404s due to typos, incorrect `NavLinkMatch` leading to bad highlighting) with quick code examples of fixes. Use a split-screen view for code and browser output. Include captions, a transcript, and high-contrast visuals for accessibility.

### Chapter 3.2 — Query Strings and Route Constraints

#### Learning objectives
*   Understand how to pass data to Blazor components using query string parameters.
*   Access and utilize query string values within a Blazor component.
*   Implement route constraints to enforce data types for route parameters.
*   Define optional route parameters and handle their presence or absence gracefully.
*   Differentiate between route parameters and query string parameters and choose the appropriate method for data passing.

#### Detailed lesson content
Building upon our understanding of basic routing, let's explore more sophisticated ways to pass data to our Blazor components: query strings and route constraints. While simple `@page` directives are great for static paths, real-world applications often need to display dynamic content based on identifiers or filters provided in the URL. This dynamic data passing is essential for creating flexible and user-friendly web applications.

Query strings are a familiar pattern from traditional web development. They appear after a question mark (`?`) in the URL and consist of key-value pairs separated by ampersands (`&`), like `/products?category=electronics&page=2`. In Blazor, you can easily access these query string parameters within any component. The most straightforward way is to use the `[SupplyParameterFromQuery]` attribute. You apply this attribute to a public property in your component, and Blazor's framework will automatically bind the corresponding query string value to that property. This significantly reduces the boilerplate code you'd otherwise need to write for manual parsing.

Consider a `ProductList.razor` component that needs to filter products by category and display a specific page number:

```csharp
@page "/products"
@using Microsoft.AspNetCore.Components.Web.RenderMode // Required for [SupplyParameterFromQuery] in some Blazor versions

<h3>Product List</h3>

@if (Category != null)
{
    <p>Showing products for category: <strong>@Category</strong></p>
}
<p>Current page: <strong>@Page</strong></p>

@code {
    [SupplyParameterFromQuery]
    public string? Category { get; set; } = "All"; // Default value if not present

    [SupplyParameterFromQuery]
    public int Page { get; set; } = 1; // Default value if not present

    protected override void OnInitialized()
    {
        // Logic to fetch products based on Category and Page
        Console.WriteLine($"Fetching products for category: {Category}, page: {Page}");
    }
}
```

If a user navigates to `/products?category=books&page=3`, the `Category` property will be "books" and `Page` will be 3. If `category` or `page` are missing from the query string, the properties will retain their default values (or `null` for `string?` if no default is set). This attribute simplifies the process significantly, as you don't have to manually parse the `NavigationManager.Uri` and extract parameters yourself. It also handles type conversion automatically, which is a major convenience.

Now, let's talk about route parameters and route constraints. Route parameters are segments of the URL path that represent variable data, often used for unique identifiers. We briefly saw `{id}` in the previous chapter. For example, `/products/{productId}` would mean `productId` is a variable part of the URL. Blazor allows you to define these parameters directly in your `@page` directive.

```csharp
@page "/product-details/{ProductId:int}" // This route requires ProductId to be an integer
@page "/product-details/{ProductId}"     // This route allows ProductId to be any string

<h3>Product Details</h3>
<p>Displaying details for Product ID: <strong>@ProductId</strong></p>

@code {
    [Parameter] // Route parameters require the [Parameter] attribute
    public int ProductId { get; set; }

    protected override void OnParametersSet()
    {
        // Logic to fetch product details based on ProductId
        Console.WriteLine($"Fetching details for product ID: {ProductId}");
    }
}
```

Notice the `[Parameter]` attribute on `ProductId`. This is essential for Blazor to bind the route parameter value to the component property. The key difference between `[Parameter]` and `[SupplyParameterFromQuery]` is that `[Parameter]` binds from the URL path segments, while `[SupplyParameterFromQuery]` binds from the query string. `OnParametersSet` is a crucial lifecycle method here, as route parameters are set *after* `OnInitialized` but *before* `OnParametersSet`, making it an ideal place to perform actions that depend on the parameter values.

The real power comes with **route constraints**. In the example above, `{ProductId:int}` is a route constraint. It tells Blazor that the `ProductId` segment in the URL *must* be an integer. If a user tries to navigate to `/product-details/abc`, this route will not match, and Blazor's router will look for another route or render the `NotFound` content. This is a crucial safety mechanism, preventing invalid data types from reaching your component logic and potentially causing errors, leading to a more robust application. Blazor provides several built-in constraints:
*   `:int` (integer)
*   `:bool` (boolean)
*   `:datetime` (DateTime)
*   `:decimal` (decimal)
*   `:double` (double)
*   `:guid` (Guid)
*   `:long` (long)
*   `:float` (float)
*   `:string` (string, default if no constraint is specified, but can be explicitly used)

You can also make route parameters optional. This is done by adding a question mark `?` after the parameter name in the `@page` directive: `{Category?}`.

```csharp
@page "/products/{Category?}"

<h3>Products by Category</h3>
@if (Category != null)
{
    <p>Showing products for category: <strong>@Category</strong></p>
}
else
{
    <p>Showing all products.</p>
}

@code {
    [Parameter]
    public string? Category { get; set; }

    protected override void OnInitialized()
    {
        Console.WriteLine($"Category: {Category ?? "All"}");
    }
}
```

Now, `/products` will match, and `Category` will be `null`. `/products/electronics` will also match, and `Category` will be "electronics". This flexibility allows you to design routes that cater to different levels of specificity, providing a more intuitive URL structure for users.

Choosing between route parameters and query strings depends on the data's nature. Route parameters are best for identifying a specific resource (e.g., `/users/123`, `/posts/my-first-post`). They are part of the resource's identity and are typically required. Query strings are better for filtering, sorting, pagination, or other non-identifying data that modifies the view of a resource (e.g., `/users?filter=active&sort=name`). Query string parameters are often optional and can be numerous. A common mistake is using query strings for primary identifiers when a route parameter would be semantically more appropriate, or vice-versa. Always think about whether the data is part of the resource's unique path or merely an optional modifier for how the resource is displayed.

Another common pitfall with route constraints is being too restrictive or not restrictive enough. If you use `:int` but some IDs are GUIDs, your route won't match. If you don't use a constraint when you expect an integer, you might end up with `string` values in your `int` properties, leading to runtime errors during parsing. Always consider the expected data type and apply the most appropriate constraint. Remember that `[Parameter]` properties are set *after* `OnInitialized` but *before* `OnParametersSet`. If you need to use the parameter values to fetch data, `OnParametersSet` or `OnInitializedAsync` (with `await base.OnParametersSetAsync()`) are the correct lifecycle methods to ensure the parameters have been populated.

#### Key concepts
*   **Query String Parameters:** Key-value pairs appended to a URL after a question mark (`?`), used for passing optional data like filters, sorting, or pagination information.
*   **`[SupplyParameterFromQuery]` Attribute:** A Blazor attribute used on a public property in a component to automatically bind a query string parameter's value to that property.
*   **Route Parameters:** Variable segments within a URL path (e.g., `{id}`), typically used to identify specific resources.
*   **`[Parameter]` Attribute:** A Blazor attribute used on a public property in a component to bind a route parameter's value to that property.
*   **Route Constraints:** Suffixes applied to route parameters (e.g., `{id:int}`) in the `@page` directive to enforce specific data types, ensuring type safety and correct route matching.
*   **Optional Route Parameters:** Route parameters marked with a question mark (e.g., `{id?}`) that allow the URL segment to be omitted, making the parameter `null` if not present.

#### Hands-on activity
**Activity: Product Filtering and Details**

You will enhance a product listing page to support filtering by category via route parameters and searching via query strings, and display product details using a route parameter with a constraint.

**Starter Code:**

1.  **`Pages/ProductList.razor`:**
    ```csharp
    @page "/products"
    @page "/products/{categoryName}"

    @inject NavigationManager NavManager

    <h3>Our Products</h3>

    @if (!string.IsNullOrEmpty(CategoryName))
    {
        <p>Currently viewing products in category: <strong>@CategoryName</strong></p>
    }
    else
    {
        <p>Viewing all products.</p>
    }

    <p>Filter by query string:</p>
    <input type="text" @bind="SearchTerm" placeholder="Search products..." />
    <button @onclick="ApplySearch">Apply Filter</button>

    <div class="product-grid">
        @foreach (var product in GetFilteredProducts())
        {
            <div class="product-item">
                <h4>@product.Name</h4>
                <p>Category: @product.Category</p>
                <p>Price: $@product.Price</p>
                <a href="/product-details/@product.Id">View Details</a>
            </div>
        }
    </div>

    @code {
        [Parameter] // For /products/{categoryName}
        public string? CategoryName { get; set; }

        [SupplyParameterFromQuery] // For /products?searchTerm=...
        public string? SearchTerm { get; set; }

        private List<Product> allProducts = new List<Product>
        {
            new Product { Id = 1, Name = "Laptop", Category = "Electronics", Price = 1200.00m },
            new Product { Id = 2, Name = "Mouse", Category = "Electronics", Price = 25.00m },
            new Product { Id = 3, Name = "Keyboard", Category = "Electronics", Price = 75.00m },
            new Product { Id = 4, Name = "Novel", Category = "Books", Price = 15.00m },
            new Product { Id = 5, Name = "Textbook", Category = "Books", Price = 80.00m },
            new Product { Id = 6, Name = "Desk Chair", Category = "Furniture", Price = 250.00m }
        };

        private List<Product> GetFilteredProducts()
        {
            var filtered = allProducts.AsEnumerable();

            if (!string.IsNullOrEmpty(CategoryName))
            {
                filtered = filtered.Where(p => p.Category.Equals(CategoryName, StringComparison.OrdinalIgnoreCase));
            }

            if (!string.IsNullOrEmpty(SearchTerm))
            {
                filtered = filtered.Where(p => p.Name.Contains(SearchTerm, StringComparison.OrdinalIgnoreCase));
            }

            return filtered.ToList();
        }

        private void ApplySearch()
        {
            // Navigate to update the query string
            var uriBuilder = new UriBuilder(NavManager.Uri);
            var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query); // Requires System.Web.HttpUtility
            query["searchTerm"] = SearchTerm;
            uriBuilder.Query = query.ToString();
            NavManager.NavigateTo(uriBuilder.ToString());
        }

        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; } = string.Empty;
            public string Category { get; set; } = string.Empty;
            public decimal Price { get; set; }
        }
    }
    ```

2.  **`Pages/ProductDetails.razor`:**
    ```csharp
    @page "/product-details/{ProductId:int}"
    @inject NavigationManager NavManager

    <h3>Product Details</h3>

    @if (product != null)
    {
        <h4>@product.Name</h4>
        <p>ID: @product.Id</p>
        <p>Category: @product.Category</p>
        <p>Price: $@product.Price</p>
        <button class="btn btn-secondary" @onclick="GoBack">Back to Products</button>
    }
    else
    {
        <p>Product not found for ID: @ProductId</p>
    }

    @code {
        [Parameter]
        public int ProductId { get; set; }

        private Product? product;

        protected override void OnParametersSet()
        {
            // In a real app, you'd fetch this from a service
            var allProducts = new List<Product>
            {
                new Product { Id = 1, Name = "Laptop", Category = "Electronics", Price = 1200.00m },
                new Product { Id = 2, Name = "Mouse", Category = "Electronics", Price = 25.00m },
                new Product { Id = 3, Name = "Keyboard", Category = "Electronics", Price = 75.00m },
                new Product { Id = 4, Name = "Novel", Category = "Books", Price = 15.00m },
                new Product { Id = 5, Name = "Textbook", Category = "Books", Price = 80.00m },
                new Product { Id = 6, Name = "Desk Chair", Category = "Furniture", Price = 250.00m }
            };
            product = allProducts.FirstOrDefault(p => p.Id == ProductId);
        }

        private void GoBack()
        {
            NavManager.NavigateTo("/products");
        }

        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; } = string.Empty;
            public string Category { get; set; } = string.Empty;
            public decimal Price { get; set; }
        }
    }
    ```

**Instructions:**
1.  Ensure you have `ProductList.razor` and `ProductDetails.razor` as provided above in your `Pages` folder.
2.  **Important:** For `System.Web.HttpUtility.ParseQueryString` to work, you might need to add a package reference to `System.Web.HttpUtility` or `Microsoft.AspNetCore.WebUtilities` (preferred for modern Blazor) in your `.csproj` file. For simplicity, `System.Web.HttpUtility` is used here, but `QueryHelpers.ParseQuery` from `Microsoft.AspNetCore.WebUtilities` is a more modern alternative.
3.  Run the application.
4.  Navigate to `/products`. Observe the full list of products.
5.  Navigate to `/products/electronics`. Observe the list filtered by category.
6.  Type "Mouse" into the search box on `/products` and click "Apply Filter". Observe the URL change to `/products?searchTerm=Mouse` and the list filters accordingly.
7.  Click "View Details" for any product. Observe the URL `/product-details/{id}` and the details page.
8.  Try navigating to `/product-details/abc` (a non-integer ID). What happens? (It should show the `NotFound` content from `App.razor` because the constraint isn't met, demonstrating the power of route constraints).

#### Assessment idea
1.  **Question:** You have a Blazor component `OrderSearch.razor` that needs to display orders based on a `customerName` (optional string) and a `minAmount` (optional decimal). How would you configure the component to receive these parameters via the URL's query string?
    *   a) `@page "/orders?customerName={customerName}&minAmount={minAmount}"` and use `[Parameter]` attributes.
    *   b) `@page "/orders"` and use `[SupplyParameterFromQuery]` attributes on `public string? CustomerName` and `public decimal? MinAmount`.
    *   c) `@page "/orders/{customerName}/{minAmount:decimal?}"` and use `[Parameter]` attributes.
    *   d) Inject `NavigationManager` and manually parse `NavigationManager.Uri.Query`.

    **Correct Answer:** b) `@page "/orders"` and use `[SupplyParameterFromQuery]` attributes on `public string? CustomerName` and `public decimal? MinAmount`.
    **Explanation:** Query string parameters are typically handled by the `[SupplyParameterFromQuery]` attribute on properties within a component. Route parameters (options 'a' and 'c') are part of the path segments, not the query string. While 'd' would work, `[SupplyParameterFromQuery]` is the idiomatic and simpler Blazor way to bind query string values automatically, handling parsing and type conversion for you.

2.  **Question:** Consider a route defined as `@page "/items/{itemId:guid}"`. If a user navigates to `/items/123` what will happen, and why?
    *   a) The `itemId` property in the component will be set to `123` as a string.
    *   b) The `itemId` property in the component will be set to `123` as an integer.
    *   c) The route will not match, and Blazor will display its `NotFound` content.
    *   d) Blazor will attempt to convert `123` to a GUID, resulting in a runtime error.

    **Correct Answer:** c) The route will not match, and Blazor will display its `NotFound` content.
    **Explanation:** The `:guid` route constraint explicitly requires the `itemId` segment to be a valid GUID. Since `123` is not a GUID, the router will fail to match this specific route and will proceed to look for other matching routes or, if none are found, render the `NotFound` content defined in `App.razor`. This is a safety feature to ensure type correctness for route parameters, preventing invalid data from reaching your component.

#### AI generation note
Produce a 10-minute interactive code demo. Start by demonstrating how to add `[SupplyParameterFromQuery]` to a `ProductList` component to filter by `category` and `page`. Show how to navigate using `NavLink` with query strings, and how to update query strings programmatically. Then, introduce a `ProductDetails` component, adding a route parameter `{id:int}` with the `[Parameter]` attribute. Demonstrate navigating to `/products/123` and `/products/abc` to highlight the route constraint's effect and the `NotFound` page. Include a live refactoring challenge where learners have to add an optional string parameter to a route. Use side-by-side code editor and browser preview. Emphasize the difference between route parameters and query strings with a small diagram overlay, and ensure keyboard navigation works for the demo.

### Chapter 3.3 — Component Parameters and Cascading Parameters

#### Learning objectives
*   Pass data from a parent component to a child component using `[Parameter]` attributes.
*   Understand and implement `EventCallback` for child-to-parent communication.
*   Explain the concept and purpose of cascading parameters in Blazor.
*   Implement `CascadingValue` and `[CascadingParameter]` to share data down the component tree.
*   Identify appropriate scenarios for using regular parameters versus cascading parameters.

#### Detailed lesson content
As your Blazor applications grow, you'll inevitably break down complex UIs into smaller, reusable components. This modularity is a cornerstone of good component-based architecture, promoting maintainability, reusability, and easier testing. However, these components often need to communicate with each other to share data or trigger actions. In this chapter, we'll dive deep into two primary mechanisms for passing data between components: regular component parameters (for parent-to-child communication) and cascading parameters (for sharing data efficiently down a component tree).

The most common way to pass data from a parent component to a child component is through **component parameters**. You define these parameters as public properties on the child component and decorate them with the `[Parameter]` attribute. When the parent component renders the child, it can set the values for these parameters, much like setting attributes on an HTML element. This creates a clear, explicit data flow from parent to child, making component interactions easy to understand.

Let's imagine a `ProductCard` component that displays details for a single product, and a `ProductList` component that renders multiple `ProductCard` instances.

**Child Component (`ProductCard.razor`):**

```csharp
<div class="product-card">
    <h3>@Product.Name</h3>
    <p>Category: @Product.Category</p>
    <p>Price: $@Product.Price</p>
    <button class="btn btn-primary" @onclick="(() => OnAddToCart.InvokeAsync(Product.Id))">Add to Cart</button>
</div>

@code {
    [Parameter]
    public Product Product { get; set; } = new Product(); // Initialize to avoid null reference

    [Parameter]
    public EventCallback<int> OnAddToCart { get; set; }

    // Product model (can be a separate file in a real app, or nested as shown)
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}
```

**Parent Component (`ProductList.razor`):**

```csharp
@page "/component-params"

<h3>Available Products</h3>

@foreach (var p in products)
{
    <ProductCard Product="p" OnAddToCart="HandleAddToCart" />
}

@code {
    private List<ProductCard.Product> products = new List<ProductCard.Product>
    {
        new ProductCard.Product { Id = 1, Name = "Smartphone", Category = "Electronics", Price = 800.00m },
        new ProductCard.Product { Id = 2, Name = "Headphones", Category = "Electronics", Price = 150.00m }
    };

    private void HandleAddToCart(int productId)
    {
        Console.WriteLine($"Product ID {productId} added to cart!");
        // In a real app, you'd update a cart service here or a local state
    }
}
```

In this example, `ProductList` passes a `Product` object to each `ProductCard` using the `Product` parameter. This is a straightforward, explicit way to flow data downwards. The `[Parameter]` attribute is crucial here; without it, Blazor wouldn't know to bind the value from the parent.

But what about communication back up the component tree, from child to parent? This is where `EventCallback` comes in. An `EventCallback` is a special Blazor type that allows a child component to notify its parent when an event occurs, effectively calling a method on the parent. In our `ProductCard`, `OnAddToCart` is an `EventCallback<int>`. When the "Add to Cart" button is clicked, `OnAddToCart.InvokeAsync(Product.Id)` is called, which in turn triggers the `HandleAddToCart` method in the `ProductList` parent component, passing the `productId` back up. `EventCallback` is crucial for maintaining a clean component hierarchy and adhering to the principle of "data down, events up," which makes state changes predictable and manageable.

A common mistake with `[Parameter]` is forgetting to initialize complex type parameters (like `Product` in our example) to a non-null default or handling null checks, which can lead to `NullReferenceException` if the parent doesn't provide a value. Another mistake is trying to directly modify a parameter's value from within the child component. Parameters are intended to be read-only from the child's perspective; if the child needs to change the data, it should raise an `EventCallback` for the parent to handle. Directly modifying a parameter can lead to unexpected behavior and make debugging difficult.

Now, let's explore **cascading parameters**. While regular parameters are excellent for direct parent-child communication, they can become cumbersome when you need to pass the *same* data through multiple layers of nested components. Imagine a theme object, a user context, or a configuration setting that needs to be available to many components deep within a hierarchy. Passing it explicitly through every single component as a regular parameter would lead to "prop drilling" – a tedious and error-prone process that clutters component signatures and makes refactoring harder.

Cascading parameters solve this by providing a way to "cascade" a value down the component tree, making it available to any descendant component that requests it, without needing to pass it through intermediate components. This is achieved using the `CascadingValue` component and the `[CascadingParameter]` attribute.

First, the `CascadingValue` component wraps the part of your UI where you want the value to be available. It has a `Value` property that holds the data you want to cascade, and optionally a `Name` property if you want to cascade multiple values of the same type (or multiple values of the *same type*).

**Parent Component (e.g., `MainLayout.razor` or a higher-level component):**

```csharp
<CascadingValue Value="CurrentTheme" Name="AppTheme">
    <div class="main-content @CurrentTheme.CssClass">
        @Body
    </div>
</CascadingValue>

@code {
    private AppTheme CurrentTheme { get; set; } = new AppTheme { Name = "Light", CssClass = "light-theme" };

    public class AppTheme
    {
        public string Name { get; set; } = string.Empty;
        public string CssClass { get; set; } = string.Empty;
    }
}
```

Then, any descendant component that needs this cascaded value can declare a public property with the `[CascadingParameter]` attribute. If a `Name` was specified in `CascadingValue`, the `[CascadingParameter]` property must also have a matching `Name`. If no `Name` is provided, Blazor will look for a cascaded value of the same type.

**Descendant Component (e.g., `Header.razor` or `Footer.razor`):**

```csharp
<div class="header">
    <h1>My App</h1>
    <p>Current Theme: @AppTheme.Name</p>
</div>

@code {
    [CascadingParameter(Name = "AppTheme")]
    public MainLayout.AppTheme AppTheme { get; set; } = new MainLayout.AppTheme(); // Initialize
}
```

Now, `Header.razor` (or any other component nested under `MainLayout`) can directly access `AppTheme` without `MainLayout` explicitly passing it as a parameter to every immediate child, and those children passing it to *their* children, and so on. This significantly cleans up component signatures and reduces boilerplate, especially in deeply nested component trees.

When should you use which? Use regular `[Parameter]` for data that is specific to a direct parent-child relationship and changes frequently or is unique to each instance of the child. It makes dependencies explicit. Use `[CascadingParameter]` for data that is global or semi-global to a subtree of components, changes infrequently, and needs to be accessed by many deeply nested components (e.g., user authentication state, application settings, UI themes, localization settings). A common mistake is overusing cascading parameters for data that should be passed explicitly, which can make component dependencies less obvious and harder to trace, potentially leading to "magic" behavior. Another mistake is forgetting to initialize the `[CascadingParameter]` property, leading to null reference exceptions if the cascading value isn't provided by an ancestor.

Safety note: Be cautious when cascading mutable objects. If multiple components modify the same cascaded object, it can lead to unexpected side effects and make state changes difficult to track. For immutable data, cascading is generally safe. For mutable data, consider cascading an interface and providing methods for modification, or using a state management pattern (which we'll cover in the next chapter) that centralizes mutations and provides notifications. This helps maintain a single source of truth and predictable state updates.

#### Key concepts
*   **Component Parameters:** Public properties on a child component decorated with `[Parameter]` that allow a parent component to pass data directly to its child.
*   **`EventCallback`:** A special Blazor type used for child-to-parent communication, allowing a child component to invoke a method on its parent when an event occurs.
*   **Prop Drilling:** The anti-pattern of passing data through multiple layers of intermediate components that don't directly use the data, solely to reach a deeply nested descendant.
*   **Cascading Parameters:** A mechanism to share data down a component tree without explicitly passing it through every intermediate component, useful for global or semi-global state within a subtree.
*   **`CascadingValue` Component:** A Blazor component that wraps a part of the UI and makes a specified `Value` available to all its descendant components. It can optionally be named.
*   **`[CascadingParameter]` Attribute:** An attribute used on a public property in a descendant component to receive a value cascaded by an ancestor `CascadingValue` component. It can also specify a `Name` to match.

#### Hands-on activity
**Activity: Building a Themed Product Display**

You will create a simple application with a `MainLayout` that cascades a `Theme` object. A `ProductList` component will render `ProductCard` components. The `ProductCard` will use the cascaded theme to style itself and also demonstrate an `EventCallback` to notify the `ProductList` when a product is added to the cart.

**Starter Code:**

1.  **`Shared/MainLayout.razor`:**
    ```csharp
    @inherits LayoutComponentBase

    <div class="page @CurrentTheme.CssClass">
        <div class="sidebar">
            <NavMenu />
        </div>

        <main>
            <div class="top-row px-4">
                <a href="https://docs.microsoft.com/aspnet/" target="_blank">About</a>
                <button class="btn btn-secondary" @onclick="ToggleTheme">Toggle Theme</button>
            </div>

            <article class="content px-4">
                <CascadingValue Value="CurrentTheme" Name="AppTheme">
                    @Body
                </CascadingValue>
            </article>
        </main>
    </div>

    @code {
        private AppTheme CurrentTheme { get; set; } = new AppTheme { Name = "Light", CssClass = "light-theme" };

        private void ToggleTheme()
        {
            if (CurrentTheme.Name == "Light")
            {
                CurrentTheme = new AppTheme { Name = "Dark", CssClass = "dark-theme" };
            }
            else
            {
                CurrentTheme = new AppTheme { Name = "Light", CssClass = "light-theme" };
            }
        }

        public class AppTheme
        {
            public string Name { get; set; } = string.Empty;
            public string CssClass { get; set; } = string.Empty;
        }
    }
    ```

2.  **`wwwroot/css/app.css` (add these styles):**
    ```css
    /* Theme styles */
    .light-theme {
        background-color: #f8f9fa;
        color: #212529;
    }

    .dark-theme {
        background-color: #343a40;
        color: #f8f9fa;
    }

    .product-card {
        border: 1px solid #ccc;
        padding: 15px;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        background-color: white; /* Default for light theme */
    }

    .dark-theme .product-card {
        border-color: #555;
        box-shadow: 0 2px 5px rgba(255,255,255,0.1);
        background-color: #495057; /* Darker background for card */
    }
    ```

3.  **`Components/ProductCard.razor`:**
    ```csharp
    <div class="product-card">
        <h4>@Product.Name</h4>
        <p>Category: @Product.Category</p>
        <p>Price: $@Product.Price</p>
        <p>Theme: @AppTheme.Name</p>
        <button class="btn btn-success" @onclick="(() => OnAddToCart.InvokeAsync(Product.Id))">Add to Cart</button>
    </div>

    @code {
        [Parameter]
        public Product Product { get; set; } = new Product();

        [Parameter]
        public EventCallback<int> OnAddToCart { get; set; }

        [CascadingParameter(Name = "AppTheme")]
        public MainLayout.AppTheme AppTheme { get; set; } = new MainLayout.AppTheme();

        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; } = string.Empty;
            public string Category { get; set; } = string.Empty;
            public decimal Price { get; set; }
        }
    }
    ```

4.  **`Pages/ProductDisplay.razor` (create this new page):**
    ```csharp
    @page "/product-display"

    <h3>Product Catalog</h3>

    @foreach (var p in products)
    {
        <ProductCard Product="p" OnAddToCart="HandleAddToCart" />
    }

    <p>Items in cart: @cartItems.Count</p>

    @code {
        private List<ProductCard.Product> products = new List<ProductCard.Product>
        {
            new ProductCard.Product { Id = 101, Name = "Smart TV", Category = "Electronics", Price = 1500.00m },
            new ProductCard.Product { Id = 102, Name = "Blender", Category = "Kitchen", Price = 75.00m },
            new ProductCard.Product { Id = 103, Name = "Bookcase", Category = "Furniture", Price = 120.00m }
        };

        private List<int> cartItems = new List<int>();

        private void HandleAddToCart(int productId)
        {
            cartItems.Add(productId);
            Console.WriteLine($"Product ID {productId} added to cart. Total items: {cartItems.Count}");
        }
    }
    ```

**Instructions:**
1.  Add the provided CSS to `wwwroot/css/app.css`.
2.  Replace the existing `MainLayout.razor` with the provided code.
3.  Create the `ProductCard.razor` component in the `Components` folder.
4.  Create the `ProductDisplay.razor` page in the `Pages` folder.
5.  Run the application and navigate to `/product-display`.
6.  Observe the product cards. Click the "Toggle Theme" button in the `MainLayout`. Notice how the `ProductCard` (a grandchild of `MainLayout`) automatically updates its displayed theme name and its styling (due to the CSS classes applied).
7.  Click "Add to Cart" on various products. Observe the `cartItems` count updating in the `ProductDisplay` component, demonstrating child-to-parent `EventCallback` communication.

#### Assessment idea
1.  **Question:** You have a `UserProfile` component that needs to display a user's `Name` and `Email`. The parent component `UserDashboard` has this user data. How would you pass the `User` object from `UserDashboard` to `UserProfile`?
    *   a) In `UserProfile.razor`, define `public User User { get; set; }` and in `UserDashboard.razor`, render `<UserProfile User="currentUser" />`.
    *   b) In `UserProfile.razor`, define `[Parameter] public User User { get; set; }` and in `UserDashboard.razor`, render `<UserProfile User="currentUser" />`.
    *   c) In `UserProfile.razor`, define `[CascadingParameter] public User User { get; set; }` and in `UserDashboard.razor`, render `<CascadingValue Value="currentUser"><UserProfile /></CascadingValue>`.
    *   d) Inject `NavigationManager` in `UserProfile` and read user data from the URL.

    **Correct Answer:** b) In `UserProfile.razor`, define `[Parameter] public User User { get; set; }` and in `UserDashboard.razor`, render `<UserProfile User="currentUser" />`.
    **Explanation:** For direct parent-to-child communication of specific data, the `[Parameter]` attribute is the correct and most explicit mechanism. Option 'a' is missing the essential `[Parameter]` attribute. Option 'c' describes cascading parameters, which are for sharing data across multiple levels of the component tree, not typically for direct parent-child data. Option 'd' is incorrect as user profiles are not usually passed via URL for security and practical reasons, and it's not the Blazor way for component data.

2.  **Question:** You are building a complex form with many nested input components. Each input component needs access to a `FormValidationContext` object provided by the top-level `Form` component. Which Blazor feature is best suited to efficiently provide `FormValidationContext` to all nested input components without prop drilling?
    *   a) Use `[Parameter]` on every intermediate component to pass the context down.
    *   b) Use `EventCallback` from the `Form` component to pass the context to children.
    *   c) Use `CascadingValue` in the `Form` component and `[CascadingParameter]` in the input components.
    *   d) Inject `NavigationManager` in each input component to retrieve the context.

    **Correct Answer:** c) Use `CascadingValue` in the `Form` component and `[CascadingParameter]` in the input components.
    **Explanation:** Cascading parameters are specifically designed to avoid "prop drilling" by making a value available to all descendant components within a specified subtree. This is ideal for shared contexts like `FormValidationContext` that many deeply nested components might need. Option 'a' describes prop drilling, which is what cascading parameters aim to avoid. Option 'b' is for child-to-parent communication, and 'd' is for routing, neither of which addresses the problem of sharing context efficiently down a tree.

#### AI generation note
Create a 15-minute live coding video. Start with a `ProductList` component rendering multiple `ProductCard` components. First, demonstrate passing a `Product` object using `[Parameter]`. Then, add an "Add to Cart" button to `ProductCard` and implement `EventCallback<int>` for child-to-parent communication, showing the parent component updating a cart count. Next, introduce a `MainLayout` component, define a `Theme` class, and use `CascadingValue` to cascade a `Theme` object. Modify `ProductCard` to consume the `Theme` using `[CascadingParameter]` and update its styling based on the theme (using CSS classes). Include a clear explanation of when to use each approach with a decision tree diagram overlay. Use a split-screen view for code and browser output, highlighting changes in real-time. Ensure accessibility with captions and a clear audio track.

### Chapter 3.4 — Basic State Management Patterns

#### Learning objectives
*   Understand the concept of component-level state and how to manage it using local variables and `StateHasChanged()`.
*   Implement parent-child communication for state updates using `[Parameter]` and `EventCallback`.
*   Utilize dependency injection to share state across unrelated components via a shared service.
*   Differentiate between various state management approaches and choose the most suitable for different scenarios.
*   Identify common pitfalls in Blazor state management and learn how to avoid them.

#### Detailed lesson content
State management is a critical aspect of any interactive application, and Blazor is no exception. "State" refers to any data that changes over time and affects what is rendered on the screen. Effectively managing this state ensures your application is predictable, maintainable, and performs well. Without proper state management, applications can quickly become spaghetti code, difficult to debug, and prone to inconsistencies. In this chapter, we'll explore fundamental state management patterns in Blazor, starting from the simplest component-level state to more advanced techniques involving shared services.

The most basic form of state management is **component-level state**. This is when a component manages its own internal data using private fields or properties within its `@code` block. This state is isolated to that specific component instance. When this internal state changes, Blazor needs to be notified to re-render the component and reflect those changes in the UI. By default, Blazor automatically re-renders a component after certain events, such as UI events (button clicks, input changes), lifecycle method calls (`OnInitialized`, `OnParametersSet`), or when a parent component re-renders. However, if you modify state outside of these automatic triggers (e.g., in an asynchronous callback, a timer, or a JavaScript interop call), you might need to manually tell Blazor to re-render using `StateHasChanged()`.

Let's consider a simple counter component:

```csharp
@page "/counter-state"

<h3>Counter: @currentCount</h3>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
        // StateHasChanged() is implicitly called after UI events like @onclick,
        // so it's not strictly needed here.
    }

    protected override async Task OnInitializedAsync()
    {
        // Example of when StateHasChanged might be needed if state is updated asynchronously
        // and not triggered by a UI event.
        await Task.Delay(1000); // Simulate an async operation
        currentCount = 100;
        // If this method didn't end with a synchronous state change,
        // Blazor might not automatically re-render.
        // InvokeAsync ensures StateHasChanged is called on the UI thread.
        // InvokeAsync(StateHasChanged);
    }
}
```

In this example, `currentCount` is the component's state. When `IncrementCount` is called, `currentCount` updates, and Blazor automatically re-renders the component, displaying the new value. The `InvokeAsync(StateHasChanged)` pattern is crucial when state updates occur on a non-UI thread (e.g., from a background task or a timer callback), ensuring the re-render happens safely on Blazor's synchronization context. Failing to call it in such scenarios is a common beginner mistake, leading to a UI that doesn't update despite the underlying data changing.

For communication between a parent and child component, we often combine `[Parameter]` for data flowing down and `EventCallback` for events flowing up. This pattern is often referred to as "lifting state up" or "data down, events up." The parent component holds the authoritative state, and passes parts of that state as parameters to its children. When a child needs to modify that state, it invokes an `EventCallback`, which triggers a method in the parent. The parent then updates its state, causing itself and its children (whose parameters have changed) to re-render. This maintains a single source of truth and clear data flow.

```csharp
<!-- Parent: ProductManager.razor -->
@page "/product-manager"

<h3>Product Manager</h3>
<p>Total products: @products.Count</p>

@foreach (var product in products)
{
    <ProductEditor Product="product" OnProductUpdated="HandleProductUpdate" />
}

@code {
    private List<ProductEditor.Product> products = new List<ProductEditor.Product>
    {
        new ProductEditor.Product { Id = 1, Name = "Laptop", Price = 1200m },
        new ProductEditor.Product { Id = 2, Name = "Keyboard", Price = 75m }
    };

    private void HandleProductUpdate(ProductEditor.Product updatedProduct)
    {
        var existingProduct = products.FirstOrDefault(p => p.Id == updatedProduct.Id);
        if (existingProduct != null)
        {
            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;
            Console.WriteLine($"Product {updatedProduct.Name} updated.");
            // StateHasChanged() is implicitly called because this method is triggered by an EventCallback.
        }
    }
}

<!-- Child: ProductEditor.razor -->
<div class="product-editor">
    <input @bind="Product.Name" />
    <input @bind="Product.Price" type="number" step="0.01" />
    <button class="btn btn-primary" @onclick="(() => OnProductUpdated.InvokeAsync(Product))">Save</button>
</div>

@code {
    [Parameter]
    public Product Product { get; set; } = new Product(); // Initialize to prevent null refs

    [Parameter]
    public EventCallback<Product> OnProductUpdated { get; set; }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}
```

Here, `ProductManager` owns the `products` list. It passes individual `Product` objects to `ProductEditor` components. When a `ProductEditor` saves changes, it invokes `OnProductUpdated`, telling `ProductManager` to update its internal list. This pattern ensures a single source of truth for the `products` state, making it easier to track and debug changes.

For state that needs to be shared across components that are not directly related (i.e., not in a parent-child relationship), or for global application state, **shared services** are an excellent solution. Blazor's dependency injection (DI) system makes this straightforward. You create a C# class that holds the shared state and methods to modify it, then register it with the DI container. Components can then inject this service and interact with it. This pattern centralizes state logic and allows for easy access from anywhere in the application.

```csharp
// Services/ShoppingCartService.cs
using System;
using System.Collections.Generic;

public class ShoppingCartService
{
    public event Action? OnChange; // Event to notify subscribers of state changes

    private List<string> _items = new List<string>();
    public IReadOnlyList<string> Items => _items.AsReadOnly(); // Expose as read-only

    public void AddItem(string item)
    {
        _items.Add(item);
        NotifyStateChanged(); // Notify all subscribers
    }

    public void RemoveItem(string item)
    {
        _items.Remove(item);
        NotifyStateChanged(); // Notify all subscribers
    }

    private void NotifyStateChanged() => OnChange?.Invoke();
}
```

To register this service, you'd add it to `Program.cs`:

```csharp
// Program.cs
// In the ConfigureServices method or top-level statements
builder.Services.AddSingleton<ShoppingCartService>(); // Or AddScoped/AddTransient
```

Now, any component can inject `ShoppingCartService` and subscribe to its `OnChange` event to be notified when the cart state changes. When `OnChange` is invoked, subscribing components can call `StateHasChanged()` to re-render themselves.

```csharp
@page "/cart-display"
@inject ShoppingCartService CartService
@implements IDisposable // Important for unsubscribing

<h3>Shopping Cart</h3>
<ul>
    @foreach (var item in CartService.Items)
    {
        <li>@item</li>
    }
</ul>
<button class="btn btn-success" @onclick="(() => CartService.AddItem($"Item {DateTime.Now.Second}"))">Add Random Item</button>

@code {
    protected override void OnInitialized()
    {
        CartService.OnChange += StateHasChanged; // Subscribe to state changes
    }

    public void Dispose()
    {
        CartService.OnChange -= StateHasChanged; // Unsubscribe to prevent memory leaks
    }
}
```

This pattern is incredibly powerful. `AddSingleton` means a single instance of `ShoppingCartService` will exist for the entire application lifetime, making it truly global. `AddScoped` provides one instance per user session (Blazor Server) or per request (Blazor WebAssembly). `AddTransient` provides a new instance every time it's requested. Choosing the correct lifetime is crucial for shared state. For global, application-wide state, `Singleton` is often appropriate. For user-specific state that resets with a new session, `Scoped` is better.

Common mistakes in state management include:
1.  **Forgetting `StateHasChanged()`:** If you update state outside of Blazor's rendering lifecycle (e.g., in a `Task.Run` or a JavaScript interop callback), Blazor won't know to re-render. Always call `InvokeAsync(StateHasChanged)` in such cases to ensure the UI updates.
2.  **Mutable parameters:** Modifying `[Parameter]` values directly in a child component. This breaks the "data down, events up" principle and can lead to unpredictable state and difficult-to-trace bugs. Children should only read parameters and raise events to request changes.
3.  **Memory leaks with shared services:** Forgetting to unsubscribe from `OnChange` events in shared services when a component is disposed (`IDisposable`). If a component subscribes but never unsubscribes, it will remain in memory and continue to receive notifications, leading to performance issues and memory leaks.
4.  **Over-complicating simple state:** Using a shared service for state that only affects a single component or a direct parent-child pair. Start with component-level state or parent-child communication, and only escalate to shared services when truly necessary for cross-component or global state. Keep it simple until complexity demands a more robust solution.

Blazor's flexibility allows you to pick the right tool for the job. Start simple, and introduce more complex patterns only when the complexity of your state warrants it. This progressive approach helps maintain clarity and performance in your applications as they grow.

#### Key concepts
*   **Component-Level State:** Data managed internally by a single Blazor component instance, typically within its `@code` block.
*   **`StateHasChanged()`:** A method called to explicitly notify Blazor that a component's state has changed and it should re-render. Often used when state updates occur outside of Blazor's automatic rendering triggers.
*   **Parent-Child Communication (Data Down, Events Up):** A fundamental pattern where parent components pass state to children via `[Parameter]` and children notify parents of changes via `EventCallback`.
*   **Shared Service State:** A state management pattern where mutable state is held in a dedicated C# service class, registered with Blazor's dependency injection container, and injected into multiple components to share data and provide a single source of truth.
*   **Dependency Injection (DI):** A software design pattern used in Blazor to provide services (like state management services) to components and other services, promoting loose coupling, modularity, and testability.
*   **`AddSingleton` / `AddScoped` / `AddTransient`:** DI lifetimes for services: `Singleton` (one instance for the entire application), `Scoped` (one instance per user session in Blazor Server, or per request in Blazor WebAssembly), `Transient` (a new instance every time it's requested).

#### Hands-on activity
**Activity: Building a Shared Shopping Cart**

You will implement a `ShoppingCartService` and use it to share cart state across two unrelated components: a `ProductCatalog` (where items are added) and a `CartSummary` (which displays the current cart items).

**Starter Code:**

1.  **`Services/ShoppingCartService.cs` (create this file in a `Services` folder):**
    ```csharp
    using System;
    using System.Collections.Generic;
    using System.Linq; // Add for Any() method in CartSummary

    namespace BlazorBootcamp.Services // Use your project's namespace or create one
    {
        public class ShoppingCartService
        {
            public event Action? OnChange;

            private List<string> _items = new List<string>();
            public IReadOnlyList<string> Items => _items.AsReadOnly();

            public void AddItem(string itemName)
            {
                _items.Add(itemName);
                NotifyStateChanged();
            }

            public void RemoveItem(string itemName)
            {
                _items.Remove(itemName); // Removes the first occurrence
                NotifyStateChanged();
            }

            private void NotifyStateChanged() => OnChange?.Invoke();
        }
    }
    ```

2.  **`Program.cs` (add service registration):**
    ```csharp
    // Add this line inside the `builder.Services` section, e.g., after `AddRazorPages()`
    builder.Services.AddSingleton<BlazorBootcamp.Services.ShoppingCartService>();
    ```
    *(Note: Adjust `BlazorBootcamp.Services` to match the namespace you used for `ShoppingCartService`.)*

3.  **`Pages/ProductCatalog.razor` (create this file):**
    ```csharp
    @page "/catalog"
    @inject BlazorBootcamp.Services.ShoppingCartService CartService // Inject the service

    <h3>Product Catalog</h3>
    <p>Click to add items to your cart:</p>

    <button class="btn btn-info m-1" @onclick="(() => AddProductToCart("Laptop"))">Add Laptop</button>
    <button class="btn btn-info m-1" @onclick="(() => AddProductToCart("Mouse"))">Add Mouse</button>
    <button class="btn btn-info m-1" @onclick="(() => AddProductToCart("Keyboard"))">Add Keyboard</button>

    @code {
        private void AddProductToCart(string productName)
        {
            CartService.AddItem(productName);
            Console.WriteLine($"Added {productName} to cart.");
        }
    }
    ```

4.  **`Components/CartSummary.razor` (create this file):**
    ```csharp
    @inject BlazorBootcamp.Services.ShoppingCartService CartService // Inject the service
    @implements IDisposable

    <div class="card mt-4">
        <div class="card-header">
            <h4>Your Cart (@CartService.Items.Count items)</h4>
        </div>
        <div class="card-body">
            @if (CartService.Items.Any())
            {
                <ul>
                    @foreach (var item in CartService.Items)
                    {
                        <li>@item <button class="btn btn-sm btn-danger ms-2" @onclick="(() => CartService.RemoveItem(item))">X</button></li>
                    }
                </ul>
            }
            else
            {
                <p>Your cart is empty.</p>
            }
        </div>
    </div>

    @code {
        protected override void OnInitialized()
        {
            CartService.OnChange += StateHasChanged; // Subscribe to state changes
        }

        public void Dispose()
        {
            CartService.OnChange -= StateHasChanged; // Unsubscribe to prevent memory leaks
        }
    }
    ```

5.  **`Shared/MainLayout.razor` (add `CartSummary` to layout):**
    ```html
    <!-- Add this line somewhere in your MainLayout.razor, e.g., below @Body or in the sidebar -->
    <div class="container">
        @Body
        <CartSummary /> <!-- Place it where you want it to appear -->
    </div>
    ```

**Instructions:**
1.  Create a `Services` folder in your project root and add `ShoppingCartService.cs` to it. Adjust the namespace if necessary.
2.  Add the `builder.Services.AddSingleton<ShoppingCartService>();` line to your `Program.cs` file.
3.  Create the `ProductCatalog.razor` page in the `Pages` folder.
4.  Create the `CartSummary.razor` component in the `Components` folder.
5.  Add the `<CartSummary />` component to your `MainLayout.razor` so it's always visible.
6.  Run the application and navigate to `/catalog`.
7.  Click the "Add" buttons in `ProductCatalog`. Observe that the `CartSummary` component (which is in `MainLayout` and not a direct child of `ProductCatalog`) updates automatically.
8.  Try removing items from the `CartSummary` by clicking the 'X' buttons. Observe the `ProductCatalog` does not need to re-render, only `CartSummary` does, demonstrating efficient updates.

#### Assessment idea
1.  **Question:** You have a Blazor component that fetches data from an API using `HttpClient` in its `OnInitializedAsync` method. After the `HttpClient` call completes, you update a private field `_dataLoaded = true`. However, the UI doesn't reflect this change immediately. What is the most likely reason and how would you fix it?
    *   a) `HttpClient` calls are synchronous; the UI should update automatically.
    *   b) The `_dataLoaded` field is private, so Blazor cannot detect its change.
    *   c) The state update happened outside Blazor's rendering context, so `StateHasChanged()` needs to be called.
    *   d) `OnInitializedAsync` is the wrong lifecycle method for data fetching.

    **Correct Answer:** c) The state update happened outside Blazor's rendering context, so `StateHasChanged()` needs to be called.
    **Explanation:** While `OnInitializedAsync` is the correct place for initial data fetching, if the `HttpClient` call is awaited, the component's state update (`_dataLoaded = true`) happens *after* the initial render and potentially outside the synchronization context that triggers UI updates. To ensure the UI reflects the change, `StateHasChanged()` (or `InvokeAsync(StateHasChanged)` if on a non-UI thread) must be explicitly called after the state modification.

2.  **Question:** You need to manage a user's authentication status (logged in/out) across your entire Blazor application. This status needs to be accessible by the `NavMenu` component, a `UserProfile` page, and a `LoginStatus` component in the footer, none of which are directly related in the component hierarchy. Which state management pattern is most appropriate for this scenario?
    *   a) Component-level state in each component, updated via `StateHasChanged()`.
    *   b) Parent-child communication using `[Parameter]` and `EventCallback` between all components.
    *   c) A shared service (e.g., `AuthService`) registered with dependency injection, with components subscribing to its `OnChange` event.
    *   d) Storing authentication status in `localStorage` and retrieving it in each component.

    **Correct Answer:** c) A shared service (e.g., `AuthService`) registered with dependency injection, with components subscribing to its `OnChange` event.
    **Explanation:** For global or application-wide state that needs to be accessed by many unrelated components, a shared service injected via DI is the most robust and maintainable solution. It provides a single source of truth and a clear mechanism for components to react to state changes. Options 'a' and 'b' would lead to significant prop drilling and duplicated, hard-to-manage logic. Option 'd' relies on client-side storage, which is less secure for sensitive data and doesn't provide real-time updates across components without manual polling or complex event mechanisms.

---

## Module 4: Working with Data and APIs

**Module 4: Working with Data and APIs**

**Goal:** Equip learners with the skills to integrate Blazor applications with various data sources and external APIs, covering both client-side and server-side data fetching strategies.

### Chapter 4.1 — Consuming RESTful APIs from Blazor WebAssembly

#### Learning objectives
*   Understand how to configure `HttpClient` for making API requests in Blazor WebAssembly applications.
*   Perform asynchronous GET requests to retrieve data from RESTful APIs.
*   Deserialize JSON responses into C# objects using `System.Text.Json`.
*   Implement POST, PUT, and DELETE operations to interact with API resources.
*   Identify and troubleshoot common issues like CORS policies and network errors when consuming APIs.

#### Detailed lesson content
Welcome back, future Blazor experts! Up until now, we've focused on building interactive UI components and managing state within the Blazor application itself. But what good is a front-end without data? In the real world, your Blazor applications will almost always need to communicate with external services to fetch, store, and manipulate data. This chapter dives deep into consuming RESTful APIs from a Blazor WebAssembly application, which means your client-side code will be making direct HTTP requests to a backend server.

The primary tool for making HTTP requests in .NET is `HttpClient`. In Blazor WebAssembly, `HttpClient` is pre-configured and available via dependency injection. To get started, you'll typically inject `HttpClient` into your component or service. For example, in a Razor component, you'd use the `@inject` directive: `@inject HttpClient Http`. Once injected, you can use its methods like `GetAsync`, `PostAsJsonAsync`, `PutAsJsonAsync`, and `DeleteAsync` to interact with your API. It's crucial to remember that all network operations are inherently asynchronous. This means you'll almost always be using the `async` and `await` keywords to ensure your UI remains responsive and doesn't freeze while waiting for a response from the server. Failing to use `await` with `HttpClient` methods can lead to race conditions, unhandled exceptions, or your UI attempting to process data that hasn't arrived yet.

Let's consider a practical scenario: building a simple product catalog. You'll need to fetch a list of products from an API. First, define a C# class that mirrors the structure of the JSON data you expect from the API. For instance, if your API returns `[ { "id": 1, "name": "Laptop", "price": 1200.00 }, ... ]`, you'd create a `Product` class:
```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
```
Now, in your component, you can make a GET request. After getting the `HttpResponseMessage`, you'll need to check if the request was successful (e.g., `response.IsSuccessStatusCode`) and then read the response body. Blazor WebAssembly automatically includes `System.Text.Json` for efficient JSON serialization and deserialization. The `GetFromJsonAsync<T>` extension method (from `System.Net.Http.Json` namespace) is incredibly convenient for this:
```csharp
@using System.Net.Http.Json
@inject HttpClient Http

<h3>Product List</h3>

@if (products == null)
{
    <p><em>Loading products...</em></p>
}
else
{
    <ul>
        @foreach (var product in products)
        {
            <li>@product.Name (@product.Price.ToString("C"))</li>
        }
    </ul>
}

@code {
    private Product[]? products;

    protected override async Task OnInitializedAsync()
    {
        try
        {
            products = await Http.GetFromJsonAsync<Product[]>("api/products");
        }
        catch (HttpRequestException ex)
        {
            // Handle network errors, e.g., API not running, DNS issues
            Console.WriteLine($"Error fetching products: {ex.Message}");
        }
        catch (NotSupportedException ex) // When content type is not valid
        {
            Console.WriteLine($"The API did not return valid JSON: {ex.Message}");
        }
        catch (Exception ex) // General error
        {
            Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        }
    }
}
```
Common mistakes often arise here. One of the most frequent is Cross-Origin Resource Sharing (CORS) errors. If your Blazor WebAssembly app is running on `http://localhost:5000` and your API is on `http://localhost:5001`, the browser's security model will block requests from the Blazor app to the API unless the API explicitly allows it. To fix this, your API needs to be configured to allow requests from your Blazor app's origin. In an ASP.NET Core Web API, this is typically done in `Program.cs`:
```csharp
// In your API's Program.cs
var app = builder.Build();

app.UseCors(policy => policy.WithOrigins("http://localhost:5000") // Your Blazor app's origin
                           .AllowAnyMethod()
                           .AllowAnyHeader());

// ... rest of your API configuration
```
Beyond GET requests, you'll often need to send data to the API. For creating a new product, you'd use `PostAsJsonAsync`:
```csharp
private async Task AddProduct(Product newProduct)
{
    var response = await Http.PostAsJsonAsync("api/products", newProduct);
    if (response.IsSuccessStatusCode)
    {
        // Product added successfully, maybe refresh the list or navigate
        Console.WriteLine("Product added!");
        // products = await Http.GetFromJsonAsync<Product[]>("api/products"); // Refresh list
    }
    else
    {
        Console.WriteLine($"Error adding product: {response.StatusCode}");
        var errorContent = await response.Content.ReadAsStringAsync();
        Console.WriteLine($"Details: {errorContent}");
    }
}
```
Similarly, `PutAsJsonAsync` is used for updating existing resources, and `DeleteAsync` for removing them. When performing `DELETE` operations, you typically pass the ID of the resource in the URL: `await Http.DeleteAsync($"api/products/{productId}")`. Always remember to handle potential errors from the API, not just network errors. The `HttpResponseMessage` contains valuable information, including the `StatusCode` and the response body, which might contain error messages from the server. Safety note: When sending sensitive data, ensure your API uses HTTPS to encrypt the communication, even in development. For production, HTTPS is non-negotiable.

Finally, while `HttpClient` is powerful, directly injecting it into every component can lead to repetitive code and make testing harder. For more complex applications, consider creating dedicated service classes (e.g., `ProductService`) that encapsulate all API interaction logic. These services can then be injected into your components, promoting cleaner architecture and better separation of concerns. This also makes it easier to implement caching, retry logic, or centralized error handling for your API calls.

#### Key concepts
*   **`HttpClient`**: A class in .NET used for sending HTTP requests and receiving HTTP responses from a resource identified by a URI.
*   **RESTful API**: An architectural style for designing networked applications, using standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources.
*   **`async` and `await`**: C# keywords used to perform asynchronous operations, preventing the UI from freezing during long-running tasks like network requests.
*   **JSON (JavaScript Object Notation)**: A lightweight data-interchange format, commonly used for data transmission in web applications.
*   **`System.Text.Json`**: The built-in .NET library for efficient JSON serialization and deserialization.
*   **CORS (Cross-Origin Resource Sharing)**: A browser security feature that restricts web pages from making requests to a different domain than the one that served the web page. APIs must explicitly allow cross-origin requests.
*   **`HttpResponseMessage`**: The object returned by `HttpClient` methods, containing details about the server's response, including status code, headers, and body content.

#### Hands-on activity
**Build a Simple Product Viewer and Creator**

**Goal:** Create a Blazor WebAssembly component that fetches a list of products from a mock API and allows adding a new product.

**Instructions:**
1.  **Create a `Product` model:** If you don't have one, create a `Product.cs` file (or define it in your component) with `Id`, `Name`, and `Price` properties.
2.  **Mock API Setup:** For this exercise, we'll use a public mock API or a simple in-memory list if you don't want to spin up a backend yet. A good option is `JSONPlaceholder` (though it doesn't support custom POSTs easily) or `MockAPI.io`. For simplicity, let's assume a local mock API running at `http://localhost:5001/api/products` that supports GET and POST. If you don't have a backend, you can simulate it with a static list and just focus on the `HttpClient` calls, printing the "posted" data to the console.
    *   **Alternative (No Backend):** Create a `ProductService` that simulates API calls with `Task.FromResult` and `Task.Delay` to mimic async operations on an in-memory `List<Product>`.
3.  **`Products.razor` Component:**
    *   Inject `HttpClient`.
    *   In `OnInitializedAsync`, make a `GetFromJsonAsync` call to fetch products and display them in a list.
    *   Add a form with input fields for `Name` and `Price` to create a new product.
    *   Add a button that, when clicked, calls a method to `PostAsJsonAsync` the new product to the API.
    *   After adding, clear the form and optionally refresh the product list.
    *   Include basic error handling for `HttpRequestException`.

**Starter Code (`Pages/Products.razor`):**
```razor
@page "/products"
@using System.Net.Http.Json
@inject HttpClient Http

<h3>Our Products</h3>

@if (products == null)
{
    <p><em>Loading products...</em></p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var product in products)
            {
                <tr>
                    <td>@product.Id</td>
                    <td>@product.Name</td>
                    <td>@product.Price.ToString("C")</td>
                </tr>
            }
        </tbody>
    </table>
}

<h4>Add New Product</h4>
<EditForm Model="@newProduct" OnValidSubmit="@HandleAddProduct">
    <DataAnnotationsValidator />
    <ValidationSummary />

    <div class="form-group">
        <label for="name">Name:</label>
        <InputText id="name" @bind-Value="newProduct.Name" class="form-control" />
    </div>
    <div class="form-group">
        <label for="price">Price:</label>
        <InputNumber id="price" @bind-Value="newProduct.Price" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary mt-2">Add Product</button>
</EditForm>

@code {
    private Product[]? products;
    private Product newProduct = new Product(); // For the add form

    protected override async Task OnInitializedAsync()
    {
        await LoadProducts();
    }

    private async Task LoadProducts()
    {
        try
        {
            // IMPORTANT: Replace with your actual API endpoint or mock service
            products = await Http.GetFromJsonAsync<Product[]>("http://localhost:5001/api/products");
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Error fetching products: {ex.Message}");
            // In a real app, you'd show a user-friendly error message
        }
    }

    private async Task HandleAddProduct()
    {
        try
        {
            // IMPORTANT: Replace with your actual API endpoint or mock service
            var response = await Http.PostAsJsonAsync("http://localhost:5001/api/products", newProduct);
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("Product added successfully!");
                newProduct = new Product(); // Reset form
                await LoadProducts(); // Refresh the list
            }
            else
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                Console.WriteLine($"Error adding product: {response.StatusCode} - {errorContent}");
            }
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Network error adding product: {ex.Message}");
        }
    }

    // Define Product class if not in a separate file
    public class Product
    {
        public int Id { get; set; } // API usually assigns ID on creation
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}
```

#### Assessment idea
1.  **Question:** You are building a Blazor WebAssembly application that needs to display a list of blog posts from an external API at `https://api.example.com/posts`. The API returns a JSON array of objects, each with `id`, `title`, and `content` properties. Which of the following code snippets correctly fetches and deserializes this data into a `List<BlogPost>`? Assume `BlogPost` class is defined correctly.
    ```csharp
    // Option A
    @inject HttpClient Http
    private List<BlogPost> posts;
    protected override async Task OnInitializedAsync()
    {
        posts = Http.GetFromJsonAsync<List<BlogPost>>("https://api.example.com/posts");
    }

    // Option B
    @inject HttpClient Http
    private List<BlogPost> posts;
    protected override async Task OnInitializedAsync()
    {
        var response = await Http.GetAsync("https://api.example.com/posts");
        posts = await response.Content.ReadFromJsonAsync<List<BlogPost>>();
    }

    // Option C
    @inject HttpClient Http
    private List<BlogPost> posts;
    protected override async Task OnInitializedAsync()
    {
        var response = Http.GetAsync("https://api.example.com/posts").Result;
        posts = System.Text.Json.JsonSerializer.Deserialize<List<BlogPost>>(await response.Content.ReadAsStringAsync());
    }

    // Option D
    @inject HttpClient Http
    private List<BlogPost> posts;
    protected override async Task OnInitializedAsync()
    {
        posts = await Http.GetFromJsonAsync<List<BlogPost>>("https://api.example.com/posts");
    }
    ```
    **Correct Answer:** Option D.
    **Explanation:**
    *   Option A is incorrect because `GetFromJsonAsync` returns a `Task<T>`, which needs to be `await`ed.
    *   Option B is correct, but `ReadFromJsonAsync` is an extension method from `System.Net.Http.Json` which is often used with `GetFromJsonAsync` for brevity. While it works, Option D is more idiomatic and concise.
    *   Option C is incorrect because `.Result` on an `async` method can lead to deadlocks in certain contexts (though less common in Blazor WebAssembly's single-threaded nature, it's a bad practice). Also, manually deserializing with `JsonSerializer` is less convenient than `ReadFromJsonAsync` or `GetFromJsonAsync`.
    *   Option D correctly uses `await` with `GetFromJsonAsync<T>`, which is the most common and recommended way to fetch and deserialize JSON data in Blazor WebAssembly.

2.  **Question:** Your Blazor WebAssembly application fails to fetch data from your locally running ASP.NET Core Web API, showing a "CORS policy" error in the browser console. What is the most likely cause and how would you typically resolve it?
    **Correct Answer:** The most likely cause is that your ASP.NET Core Web API has not been configured to allow cross-origin requests from your Blazor WebAssembly application's origin.
    **Explanation:** Browsers implement a security feature called Cross-Origin Resource Sharing (CORS) that prevents web pages from making requests to a domain different from the one that served the web page, unless the target server explicitly permits it. To resolve this, you need to configure your ASP.NET Core Web API to allow requests from your Blazor app's origin (e.g., `http://localhost:5000`). This is typically done by adding CORS middleware in your API's `Program.cs` file, specifying the allowed origins, HTTP methods, and headers. For example:
    ```csharp
    // In your API's Program.cs
    var builder = WebApplication.CreateBuilder(args);
    // ... other services
    builder.Services.AddCors(options =>
    {
        options.AddDefaultPolicy(policy =>
        {
            policy.WithOrigins("http://localhost:5000") // Replace with your Blazor app's URL
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
    });
    var app = builder.Build();
    // ... other middleware
    app.UseCors(); // Ensure this is called before UseAuthorization/UseEndpoints
    // ... rest of your API configuration
    ```

#### AI generation note
Create a 12-minute live coding video. Begin with an empty Blazor WebAssembly project. Demonstrate injecting `HttpClient` and using `GetFromJsonAsync` to fetch data from a public API (e.g., JSONPlaceholder for `todos`). Show the `Product` class definition and how to display the fetched data in a table. Then, introduce a simple form to `PostAsJsonAsync` a new item (simulating to a mock API or console log). Highlight common CORS errors by intentionally misconfiguring the API (or explaining the error message) and then showing the correct CORS setup in an ASP.NET Core Web API `Program.cs` file. Use a split-screen view showing code editor and browser developer console. Include a 2-question interactive quiz covering `async/await` and CORS.

---

### Chapter 4.2 — Interacting with Server-Side Data in Blazor Server

#### Learning objectives
*   Understand the fundamental differences in data access strategies between Blazor WebAssembly and Blazor Server.
*   Learn how to directly access server-side resources, such as databases, from Blazor Server components.
*   Integrate Entity Framework Core (EF Core) into a Blazor Server application for data persistence.
*   Perform CRUD (Create, Read, Update, Delete) operations on a database using EF Core within Blazor Server components.
*   Address security and performance considerations when handling sensitive data directly on the server.

#### Detailed lesson content
In the previous chapter, we explored how Blazor WebAssembly applications, running entirely in the browser, communicate with external APIs using `HttpClient`. Now, let's shift our focus to Blazor Server, which offers a fundamentally different approach to data access. Because Blazor Server applications execute on the server and maintain a SignalR connection with the client, they have direct access to all server-side resources, including databases, file systems, and other internal services. This means you don't necessarily need a separate RESTful API layer for your Blazor Server app to interact with data; you can directly integrate with your data persistence layer, often using an Object-Relational Mapper (ORM) like Entity Framework Core (EF Core).

This direct access simplifies your architecture by removing the need for a separate API project and the associated complexities of HTTP requests, JSON serialization, and CORS. However, it introduces new considerations, particularly around security and performance. Since your Blazor components are running on the server, any data access code you write within them is executed with server-side privileges. This makes it paramount to implement proper authorization and validation to prevent malicious users from gaining unauthorized access or manipulating data.

Let's integrate EF Core into a Blazor Server application. First, you'll need to install the necessary NuGet packages: `Microsoft.EntityFrameworkCore.SqlServer` (or your chosen database provider) and `Microsoft.EntityFrameworkCore.Tools` for migrations. Then, define your data model classes (e.g., `Product`) and a `DbContext` class that represents your database session.
```csharp
// Data/Product.cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}

// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    public DbSet<Product> Products { get; set; } = default!;
}
```
Next, configure your `DbContext` in `Program.cs` and register it with the dependency injection container. You'll typically use a connection string from your `appsettings.json`.
```csharp
// Program.cs
using Microsoft.EntityFrameworkCore;
using YourAppName.Data; // Adjust namespace

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>(); // Example service

// Configure DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// ... other app configuration
```
And in `appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=BlazorServerDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
  // ...
}
```
After setting up EF Core, you'll perform database migrations to create your database schema. Open your Package Manager Console (or terminal) and run: `Add-Migration InitialCreate` and then `Update-Database`.

Now, within a Blazor Server component, you can inject `ApplicationDbContext` and use it to perform CRUD operations. It's crucial to understand that `DbContext` is typically scoped per request. In Blazor Server, a "request" can be thought of as a user's connection. However, injecting `DbContext` directly into a `Singleton` or `Scoped` service can lead to issues if not managed carefully, especially with `DbContext` not being thread-safe for concurrent operations. The recommended pattern is to inject `IDbContextFactory<ApplicationDbContext>` and create a new `DbContext` instance for each operation, or to register your `DbContext` with a `Scoped` lifetime and ensure your component's lifecycle aligns. For simplicity in components, you can inject `DbContext` directly, but be mindful of its lifecycle.

Let's fetch and display products:
```csharp
@page "/serverproducts"
@inject ApplicationDbContext DbContext // For simplicity, direct injection for now

<h3>Server Products</h3>

@if (products == null)
{
    <p><em>Loading products...</em></p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var product in products)
            {
                <tr>
                    <td>@product.Id</td>
                    <td>@product.Name</td>
                    <td>@product.Price.ToString("C")</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @onclick="() => DeleteProduct(product.Id)">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    </table>
}

<button class="btn btn-primary" @onclick="AddSampleProduct">Add Sample Product</button>

@code {
    private List<Product>? products;

    protected override async Task OnInitializedAsync()
    {
        await LoadProducts();
    }

    private async Task LoadProducts()
    {
        products = await DbContext.Products.ToListAsync();
    }

    private async Task AddSampleProduct()
    {
        var newProduct = new Product
        {
            Name = $"New Product {DateTime.Now.Ticks}",
            Price = (decimal)(new Random().NextDouble() * 1000)
        };
        DbContext.Products.Add(newProduct);
        await DbContext.SaveChangesAsync();
        await LoadProducts(); // Refresh list
    }

    private async Task DeleteProduct(int productId)
    {
        var productToDelete = await DbContext.Products.FindAsync(productId);
        if (productToDelete != null)
        {
            DbContext.Products.Remove(productToDelete);
            await DbContext.SaveChangesAsync();
            await LoadProducts(); // Refresh list
        }
    }
}
```
This example shows `Add`, `Delete`, and `Read` operations. For `Update`, you would fetch the entity, modify its properties, and then call `DbContext.SaveChangesAsync()`.

**Common Mistakes and Safety Notes:**
1.  **Blocking UI:** Since Blazor Server runs on the server, long-running database queries can block the UI thread, leading to a unresponsive experience for the user. Always use `async` and `await` with EF Core methods (e.g., `ToListAsync()`, `SaveChangesAsync()`) to ensure non-blocking operations.
2.  **Security:** Direct database access means any vulnerability in your Blazor component could potentially expose your database. Always sanitize user input, use parameterized queries (EF Core does this automatically), and implement robust authorization checks (e.g., `[Authorize]` attributes or custom policies) to ensure users only access data they are permitted to see or modify. Never expose raw database errors to the client.
3.  **Performance:** Fetching large datasets or performing complex queries can be slow. Consider pagination, filtering, and efficient query design (e.g., using `Include` sparingly, `Select` for specific columns) to optimize performance. Also, be mindful of the number of round trips to the database.
4.  **`DbContext` Lifecycle:** As mentioned, directly injecting `DbContext` into a component can be problematic in complex scenarios. For robust applications, especially when using services that are not `Transient`, consider injecting `IDbContextFactory<ApplicationDbContext>` and creating `DbContext` instances within your methods using `await DbFactory.CreateDbContextAsync()`. This ensures each operation gets a fresh, isolated context.
5.  **Error Handling:** Wrap your database operations in `try-catch` blocks to gracefully handle exceptions (e.g., database connection issues, constraint violations) and provide meaningful feedback to the user.

Blazor Server's direct data access is a powerful feature that can significantly streamline development for many internal or line-of-business applications. By understanding its unique characteristics and adhering to best practices for security and performance, you can build highly responsive and data-rich applications with fewer moving parts.

#### Key concepts
*   **Blazor Server Data Access**: The ability of Blazor Server applications, running on the server, to directly interact with server-side resources like databases without needing a separate API layer.
*   **Entity Framework Core (EF Core)**: A modern, cross-platform object-relational mapper (ORM) for .NET, used to interact with databases using C# objects.
*   **`DbContext`**: In EF Core, a class that represents a session with the database, allowing you to query and save instances of your entities.
*   **`DbSet<TEntity>`**: A property on `DbContext` that represents a collection of all entities in the context, or that can be queried from the database.
*   **Migrations**: A feature in EF Core that allows you to evolve your database schema as your model changes, using code.
*   **CRUD Operations**: Acronym for Create, Read, Update, and Delete, the four basic functions of persistent storage.
*   **`async` and `await` (EF Core context)**: Essential for ensuring database operations do not block the server's UI thread, maintaining application responsiveness.
*   **`IDbContextFactory<TContext>`**: A factory pattern for creating `DbContext` instances, recommended for Blazor Server to manage `DbContext` lifecycles effectively and avoid concurrency issues.

#### Hands-on activity
**Build a Simple Task Manager with Blazor Server and EF Core**

**Goal:** Create a Blazor Server application that uses EF Core to store and manage a list of tasks in a SQL Server (or SQLite) database.

**Instructions:**
1.  **Setup a Blazor Server Project:** Start with a new Blazor Server project.
2.  **Install EF Core Packages:**
    *   `Microsoft.EntityFrameworkCore.SqlServer` (or `Microsoft.EntityFrameworkCore.Sqlite` for a simpler local setup)
    *   `Microsoft.EntityFrameworkCore.Tools`
3.  **Define `TaskItem` Model:** Create a `TaskItem.cs` class in a `Data` folder:
    ```csharp
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public bool IsComplete { get; set; }
        public DateTime DueDate { get; set; } = DateTime.Now.AddDays(7);
    }
    ```
4.  **Create `ApplicationDbContext`:** Create `ApplicationDbContext.cs` in the `Data` folder:
    ```csharp
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<TaskItem> Tasks { get; set; } = default!;
    }
    ```
5.  **Configure `DbContext` in `Program.cs`:** Add the connection string to `appsettings.json` and register `ApplicationDbContext` with `AddDbContext`.
    ```csharp
    // In Program.cs
    // ...
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))); // Or UseSqlite(...)
    // ...
    ```
    ```json
    // In appsettings.json
    "ConnectionStrings": {
      "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=BlazorServerTasks;Trusted_Connection=True;MultipleActiveResultSets=true"
      // For SQLite: "DefaultConnection": "Data Source=tasks.db"
    }
    ```
6.  **Run Migrations:** Open Package Manager Console and run `Add-Migration InitialCreate` then `Update-Database`.
7.  **Create `TaskManager.razor` Component:**
    *   Inject `ApplicationDbContext`.
    *   In `OnInitializedAsync`, fetch all `TaskItem`s from the database and display them in a table.
    *   Add a form to create new tasks (Title, DueDate, IsComplete checkbox).
    *   Implement methods to `Add`, `Update` (toggle `IsComplete`), and `Delete` tasks. Remember to call `DbContext.SaveChangesAsync()` after modifications.
    *   Ensure all database operations are `async` and `await`ed.
    *   Add basic error handling (e.g., `try-catch` for `DbContext` operations).

**Starter Code (`Pages/TaskManager.razor`):**
```razor
@page "/tasks"
@inject ApplicationDbContext DbContext

<h3>My Tasks</h3>

@if (tasks == null)
{
    <p><em>Loading tasks...</em></p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Due Date</th>
                <th>Complete</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var task in tasks)
            {
                <tr>
                    <td>@task.Title</td>
                    <td>@task.DueDate.ToShortDateString()</td>
                    <td><InputCheckbox @bind-Value="task.IsComplete" @onchange="() => ToggleTaskCompletion(task)" /></td>
                    <td>
                        <button class="btn btn-danger btn-sm" @onclick="() => DeleteTask(task.Id)">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    </table>
}

<h4>Add New Task</h4>
<EditForm Model="@newTask" OnValidSubmit="@HandleAddTask">
    <DataAnnotationsValidator />
    <ValidationSummary />

    <div class="form-group">
        <label for="title">Title:</label>
        <InputText id="title" @bind-Value="newTask.Title" class="form-control" />
    </div>
    <div class="form-group">
        <label for="dueDate">Due Date:</label>
        <InputDate id="dueDate" @bind-Value="newTask.DueDate" class="form-control" />
    </div>
    <div class="form-group form-check mt-2">
        <InputCheckbox id="isComplete" @bind-Value="newTask.IsComplete" class="form-check-input" />
        <label class="form-check-label" for="isComplete">Is Complete?</label>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Add Task</button>
</EditForm>

@code {
    private List<TaskItem>? tasks;
    private TaskItem newTask = new TaskItem();

    protected override async Task OnInitializedAsync()
    {
        await LoadTasks();
    }

    private async Task LoadTasks()
    {
        try
        {
            tasks = await DbContext.Tasks.OrderBy(t => t.DueDate).ToListAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading tasks: {ex.Message}");
            // In a real app, display an error message to the user
        }
    }

    private async Task HandleAddTask()
    {
        if (!string.IsNullOrWhiteSpace(newTask.Title))
        {
            try
            {
                DbContext.Tasks.Add(newTask);
                await DbContext.SaveChangesAsync();
                newTask = new TaskItem(); // Reset form
                await LoadTasks(); // Refresh list
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error adding task: {ex.Message}");
            }
        }
    }

    private async Task ToggleTaskCompletion(TaskItem task)
    {
        try
        {
            DbContext.Tasks.Update(task); // Mark as modified
            await DbContext.SaveChangesAsync();
            // No need to reload all tasks, as the UI is already bound to 'task'
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error updating task: {ex.Message}");
            // Revert UI change if save fails, or show error
            task.IsComplete = !task.IsComplete; // Revert for UX
        }
    }

    private async Task DeleteTask(int taskId)
    {
        try
        {
            var taskToDelete = await DbContext.Tasks.FindAsync(taskId);
            if (taskToDelete != null)
            {
                DbContext.Tasks.Remove(taskToDelete);
                await DbContext.SaveChangesAsync();
                await LoadTasks(); // Refresh list
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleting task: {ex.Message}");
        }
    }

    // TaskItem class definition (if not in a separate file)
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public bool IsComplete { get; set; }
        public DateTime DueDate { get; set; } = DateTime.Now.AddDays(7);
    }
}
```

#### Assessment idea
1.  **Question:** You are developing a Blazor Server application and need to display a list of customers stored in a SQL Server database using Entity Framework Core. You have already configured your `ApplicationDbContext` and performed migrations. Which of the following code snippets correctly fetches all customers from the database within a Blazor component using the recommended asynchronous pattern?
    ```csharp
    // Option A
    @inject ApplicationDbContext DbContext
    private List<Customer> customers;
    protected override void OnInitialized()
    {
        customers = DbContext.Customers.ToList();
    }

    // Option B
    @inject ApplicationDbContext DbContext
    private List<Customer> customers;
    protected override async Task OnInitializedAsync()
    {
        customers = await DbContext.Customers.ToListAsync();
    }

    // Option C
    @inject ApplicationDbContext DbContext
    private List<Customer> customers;
    protected override async Task OnInitializedAsync()
    {
        customers = DbContext.Customers.ToList(); // Missing await
    }

    // Option D
    @inject ApplicationDbContext DbContext
    private List<Customer> customers;
    protected override void OnInitialized()
    {
        customers = await DbContext.Customers.ToListAsync(); // Missing async/await on method
    }
    ```
    **Correct Answer:** Option B.
    **Explanation:**
    *   Option A is incorrect because `OnInitialized` is synchronous, and `ToList()` on a `DbSet` performs a synchronous database call, which can block the UI thread in Blazor Server. Asynchronous operations are crucial for responsiveness.
    *   Option B correctly uses `OnInitializedAsync` and `await DbContext.Customers.ToListAsync()`. This ensures the database query is executed asynchronously, preventing the server's UI thread from blocking and maintaining a responsive user experience.
    *   Option C is incorrect because it calls `ToList()` synchronously within an `async` method, defeating the purpose of asynchronous programming and potentially leading to blocking.
    *   Option D is incorrect because `OnInitialized` is synchronous and cannot use `await`. The method signature must be `async Task OnInitializedAsync()`.

2.  **Question:** What is a significant security concern when directly accessing a database from a Blazor Server component, and what is a primary mitigation strategy?
    **Correct Answer:** A significant security concern is that any data access code in your Blazor Server component executes with server-side privileges, potentially exposing your database to unauthorized access or manipulation if not properly secured.
    **Explanation:** Since Blazor Server components run on the server, they have direct access to the database. If a malicious user finds a way to inject harmful input or bypass client-side validation, this input could be directly passed to database operations. A primary mitigation strategy is to implement robust **authorization and input validation** on the server-side. This includes:
    *   Using ASP.NET Core's built-in authorization mechanisms (e.g., `[Authorize]` attributes on components or methods) to ensure only authenticated and authorized users can perform specific data operations.
    *   Thoroughly validating all user input on the server before passing it to EF Core or any database query, preventing SQL injection (though EF Core helps with this by default) and ensuring data integrity.
    *   Never exposing sensitive database error messages directly to the client.

#### AI generation note
Create a 15-minute live coding video. Start with a new Blazor Server project. Demonstrate installing EF Core SQL Server packages. Define a `Book` model with `Id`, `Title`, `Author`, `IsAvailable` properties. Create an `ApplicationDbContext`. Configure the connection string in `appsettings.json` and register `DbContext` in `Program.cs`. Walk through `Add-Migration` and `Update-Database` in the Package Manager Console. Then, create a `Books.razor` component. Inject `ApplicationDbContext`. Show how to fetch all books using `await DbContext.Books.ToListAsync()`. Implement a form to add new books and a button to toggle `IsAvailable` status, demonstrating `DbContext.Add`, `DbContext.Update`, and `DbContext.SaveChangesAsync()`. Emphasize `async/await` throughout. Discuss security implications and the importance of server-side validation. Include a reflection prompt asking about the pros and cons of direct database access vs. API calls.

---

### Chapter 4.3 — Building and Consuming Custom Web APIs for Blazor

#### Learning objectives
*   Design and implement a basic ASP.NET Core Web API project to serve data.
*   Define API endpoints for common CRUD operations (GET, POST, PUT, DELETE).
*   Understand how to use controller actions, routing, and HTTP verbs in a Web API.
*   Configure the Web API for database interaction using Entity Framework Core.
*   Consume the custom-built Web API from both Blazor WebAssembly and Blazor Server applications.
*   Implement basic error handling and response formatting in the API.

#### Detailed lesson content
Having learned how to consume existing APIs and how Blazor Server can directly access databases, it's time to put on our backend developer hats and build our own Web API. A custom Web API serves as a powerful, decoupled backend for your Blazor applications (especially Blazor WebAssembly) and can also be consumed by other clients like mobile apps, desktop applications, or even other web services. This approach promotes a clean separation of concerns: your Blazor app focuses solely on the user interface, while the API handles data storage, business logic, and external integrations.

We'll use ASP.NET Core to build our Web API. It’s a robust, high-performance framework that integrates seamlessly with Blazor. Start by creating a new "ASP.NET Core Web API" project. This project will typically contain controllers, which are classes that handle incoming HTTP requests and send back responses. Each public method in a controller can be an action that corresponds to an API endpoint.

Let's define a simple API for managing `Author` entities. First, create your `Author` model and `ApplicationDbContext` (similar to Chapter 4.2, but in your API project).
```csharp
// Models/Author.cs
public class Author
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
}

// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    public DbSet<Author> Authors { get; set; } = default!;
}
```
Configure `DbContext` and add migrations in your API project's `Program.cs`. Remember to add CORS configuration if your Blazor app will be on a different origin (which is typical for Blazor WebAssembly).

Now, let's create an `AuthorsController`. Controllers are typically decorated with `[ApiController]` and `[Route("[controller]")]` attributes. `[ApiController]` enables API-specific behaviors like automatic model validation, while `[Route("[controller]")]` sets the base route for the controller (e.g., `/api/authors` if the controller is named `AuthorsController`).
```csharp
// Controllers/AuthorsController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourApiName.Data; // Adjust namespace
using YourApiName.Models; // Adjust namespace

[Route("api/[controller]")]
[ApiController]
public class AuthorsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AuthorsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Authors
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Author>>> GetAuthors()
    {
        return await _context.Authors.ToListAsync();
    }

    // GET: api/Authors/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Author>> GetAuthor(int id)
    {
        var author = await _context.Authors.FindAsync(id);

        if (author == null)
        {
            return NotFound();
        }

        return author;
    }

    // POST: api/Authors
    [HttpPost]
    public async Task<ActionResult<Author>> PostAuthor(Author author)
    {
        _context.Authors.Add(author);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAuthor), new { id = author.Id }, author);
    }

    // PUT: api/Authors/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAuthor(int id, Author author)
    {
        if (id != author.Id)
        {
            return BadRequest();
        }

        _context.Entry(author).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AuthorExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/Authors/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAuthor(int id)
    {
        var author = await _context.Authors.FindAsync(id);
        if (author == null)
        {
            return NotFound();
        }

        _context.Authors.Remove(author);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool AuthorExists(int id)
    {
        return _context.Authors.Any(e => e.Id == id);
    }
}
```
This controller provides all standard CRUD operations. Notice the HTTP verb attributes (`[HttpGet]`, `[HttpPost]`, etc.) and route templates (`{id}`) which map incoming requests to the correct action. `ActionResult<T>` is a convenient return type that allows you to return either a specific type or an `IActionResult` (like `NotFound()`, `BadRequest()`, `CreatedAtAction()`). `CreatedAtAction` is particularly useful for POST requests, as it returns a 201 Created status code along with a `Location` header pointing to the newly created resource.

**Consuming the API from Blazor:**
Once your API is running (e.g., on `http://localhost:5001`), you can consume it from your Blazor application.

**Blazor WebAssembly:** As covered in Chapter 4.1, you'll inject `HttpClient` and use methods like `GetFromJsonAsync`, `PostAsJsonAsync`, etc.
```csharp
// In Blazor WebAssembly component
@inject HttpClient Http

private List<Author>? authors;

protected override async Task OnInitializedAsync()
{
    authors = await Http.GetFromJsonAsync<List<Author>>("http://localhost:5001/api/authors");
}

private async Task AddAuthor(Author newAuthor)
{
    var response = await Http.PostAsJsonAsync("http://localhost:5001/api/authors", newAuthor);
    // ... handle response
}
```
Remember to configure CORS in your API to allow requests from your Blazor WebAssembly app's origin.

**Blazor Server:** While Blazor Server *could* directly access the database, using an API still offers benefits like scalability, reusability, and a clear architectural boundary. If you choose to consume your API from Blazor Server, the process is very similar to WebAssembly, but without the CORS concerns (as the `HttpClient` requests are made from the server, not the browser).
```csharp
// In Blazor Server component
@inject HttpClient Http // HttpClient is also available in Blazor Server

private List<Author>? authors;

protected override async Task OnInitializedAsync()
{
    // No CORS issues here as the request is server-to-server
    authors = await Http.GetFromJsonAsync<List<Author>>("http://localhost:5001/api/authors");
}
```
**Common Mistakes and Safety Notes:**
1.  **Missing CORS:** This is the most common pitfall when connecting Blazor WebAssembly to a separate API. Always ensure your API's `Program.cs` has the correct `UseCors` configuration.
2.  **Incorrect Routing:** Ensure your `[Route]` attributes on controllers and `[HttpGet]`, `[HttpPost]`, etc., attributes on actions correctly define your API's URL structure. Test your API endpoints using tools like Postman, Insomnia, or Swagger/OpenAPI UI (which comes built-in with ASP.NET Core Web API templates).
3.  **Error Handling:** Your API should return meaningful error responses (e.g., 404 Not Found, 400 Bad Request, 500 Internal Server Error) with descriptive messages, not just raw exceptions. `ActionResult<T>` and `IActionResult` help with this.
4.  **Data Validation:** Implement model validation in your API (e.g., using data annotations like `[Required]`, `[StringLength]`) to ensure incoming data is valid before processing. The `[ApiController]` attribute automatically handles basic validation and returns a 400 Bad Request for invalid models.
5.  **Authentication and Authorization:** For any real-world application, your API will need security. This typically involves implementing authentication (e.g., JWT Bearer tokens) to verify user identity and authorization to control what actions authenticated users can perform. This is a complex topic usually covered in advanced modules, but be aware it's essential for production.
6.  **HTTPS:** Always use HTTPS for your API in production to encrypt data in transit. Even in development, it's good practice to enable HTTPS.

Building your own API gives you complete control over your data layer and business logic, providing a scalable and flexible foundation for your Blazor applications.

#### Key concepts
*   **ASP.NET Core Web API**: A framework for building HTTP services that support a wide range of clients, including browsers and mobile devices.
*   **Controller**: A class in ASP.NET Core Web API that handles incoming HTTP requests and prepares the response.
*   **Action Method**: A public method within a controller that handles a specific HTTP request (e.g., GET, POST).
*   **Routing**: The process of mapping incoming HTTP requests to specific action methods in controllers.
*   **HTTP Verbs (GET, POST, PUT, DELETE)**: Standard methods used to indicate the desired action to be performed on the identified resource.
*   **`[ApiController]`**: An attribute that enables API-specific behaviors, such as automatic HTTP 400 responses for validation errors.
*   **`[Route]`**: An attribute used to define the URL patterns that map to a controller or action.
*   **`ActionResult<T>` / `IActionResult`**: Return types for API actions that allow flexible responses, including status codes and data.
*   **Decoupled Architecture**: Separating the frontend (Blazor) from the backend (Web API) to allow independent development, deployment, and scaling.

#### Hands-on activity
**Build a Book API and Consume it from Blazor WebAssembly**

**Goal:** Create a simple ASP.NET Core Web API for managing books and then consume it from a Blazor WebAssembly application.

**Instructions (Part 1: Build the API):**
1.  **Create API Project:** Start a new "ASP.NET Core Web API" project.
2.  **Install EF Core Packages:** `Microsoft.EntityFrameworkCore.SqlServer` (or `Sqlite`) and `Microsoft.EntityFrameworkCore.Tools`.
3.  **Define `Book` Model:**
    ```csharp
    // Models/Book.cs in your API project
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public int PublicationYear { get; set; }
    }
    ```
4.  **Create `ApplicationDbContext`:**
    ```csharp
    // Data/ApplicationDbContext.cs in your API project
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Book> Books { get; set; } = default!;
    }
    ```
5.  **Configure `DbContext` and CORS in `Program.cs` (API project):**
    *   Add connection string to `appsettings.json`.
    *   Register `DbContext` with `AddDbContext`.
    *   **Crucially, add CORS policy** to allow your Blazor WebAssembly app's origin (e.g., `http://localhost:5000` or `https://localhost:5001` if running on HTTPS).
6.  **Run Migrations:** `Add-Migration InitialCreate` then `Update-Database`.
7.  **Create `BooksController`:** Use the `dotnet aspnet-codegenerator controller -name BooksController -async -api -m Book -dc ApplicationDbContext` command (or manually create) to generate a controller with CRUD endpoints for the `Book` model. Ensure it has `[Route("api/[controller]")]` and `[ApiController]`.
8.  **Test API:** Run the API project. Use Swagger UI (usually available at `/swagger`) or Postman to test your GET, POST, PUT, DELETE endpoints.

**Instructions (Part 2: Consume from Blazor WebAssembly):**
1.  **Create Blazor WebAssembly Project:** If you don't have one, create a new Blazor WebAssembly project.
2.  **Define `Book` Model:** Create the same `Book` class in your Blazor WebAssembly project.
3.  **Create `BookList.razor` Component:**
    *   Inject `HttpClient`.
    *   In `OnInitializedAsync`, fetch all books from your API using `GetFromJsonAsync`.
    *   Display the books in a table.
    *   Add a form to create a new book using `PostAsJsonAsync`.
    *   Add buttons to `Delete` a book using `DeleteAsync`.
    *   Include basic error handling.

**Starter Code (Blazor WebAssembly `Pages/BookList.razor`):**
```razor
@page "/books-api"
@using System.Net.Http.Json
@inject HttpClient Http

<h3>Books from API</h3>

@if (books == null)
{
    <p><em>Loading books...</em></p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var book in books)
            {
                <tr>
                    <td>@book.Id</td>
                    <td>@book.Title</td>
                    <td>@book.Author</td>
                    <td>@book.PublicationYear</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @onclick="() => DeleteBook(book.Id)">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    </table>
}

<h4>Add New Book</h4>
<EditForm Model="@newBook" OnValidSubmit="@HandleAddBook">
    <DataAnnotationsValidator />
    <ValidationSummary />

    <div class="form-group">
        <label for="title">Title:</label>
        <InputText id="title" @bind-Value="newBook.Title" class="form-control" />
    </div>
    <div class="form-group">
        <label for="author">Author:</label>
        <InputText id="author" @bind-Value="newBook.Author" class="form-control" />
    </div>
    <div class="form-group">
        <label for="year">Publication Year:</label>
        <InputNumber id="year" @bind-Value="newBook.PublicationYear" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary mt-2">Add Book</button>
</EditForm>

@code {
    private List<Book>? books;
    private Book newBook = new Book { PublicationYear = DateTime.Now.Year };

    // IMPORTANT: Ensure this matches your API's base URL
    private const string ApiBaseUrl = "http://localhost:5001/api/books"; // Adjust port if necessary

    protected override async Task OnInitializedAsync()
    {
        await LoadBooks();
    }

    private async Task LoadBooks()
    {
        try
        {
            books = await Http.GetFromJsonAsync<List<Book>>(ApiBaseUrl);
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Error fetching books: {ex.Message}");
            // Handle API not running or network issues
        }
    }

    private async Task HandleAddBook()
    {
        try
        {
            var response = await Http.PostAsJsonAsync(ApiBaseUrl, newBook);
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("Book added successfully!");
                newBook = new Book { PublicationYear = DateTime.Now.Year }; // Reset form
                await LoadBooks(); // Refresh the list
            }
            else
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                Console.WriteLine($"Error adding book: {response.StatusCode} - {errorContent}");
            }
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Network error adding book: {ex.Message}");
        }
    }

    private async Task DeleteBook(int bookId)
    {
        try
        {
            var response = await Http.DeleteAsync($"{ApiBaseUrl}/{bookId}");
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine($"Book {bookId} deleted successfully!");
                await LoadBooks(); // Refresh the list
            }
            else
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                Console.WriteLine($"Error deleting book: {response.StatusCode} - {errorContent}");
            }
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Network error deleting book: {ex.Message}");
        }
    }

    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public int PublicationYear { get; set; }
    }
}
```

#### Assessment idea
1.  **Question:** You have built an ASP.NET Core Web API with a `ProductsController` that exposes `/api/products` for GET requests. Your Blazor WebAssembly application, running on `http://localhost:5000`, needs to fetch products from this API, which is running on `http://localhost:5001`. Upon attempting to fetch data, you encounter a CORS error in the browser console. What is the most direct way to resolve this issue in your API project?
    **Correct Answer:** Configure the API's `Program.cs` to use CORS middleware, specifically allowing requests from the Blazor application's origin (`http://localhost:5000`).
    **Explanation:** The browser's security model prevents a web page from making requests to a different origin (domain, protocol, or port) than the one it originated from, unless the server explicitly grants permission via CORS headers. To resolve this, your ASP.NET Core Web API needs to be configured to include the necessary `Access-Control-Allow-Origin` header in its responses. This is achieved by adding and configuring the CORS middleware in the API's `Program.cs` file, specifying `WithOrigins("http://localhost:5000")` to allow your Blazor app to make requests.

2.  **Question:** Consider an ASP.NET Core Web API `AuthorsController` with the following action method:
    ```csharp
    [HttpPost]
    public async Task<ActionResult<Author>> CreateAuthor(Author author)
    {
        _context.Authors.Add(author);
        await _context.SaveChangesAsync();
        return Ok(author); // Line A
    }
    ```
    While this code works, what is a more semantically appropriate and RESTful way to return a response from a `POST` operation that successfully creates a new resource, and why?
    **Correct Answer:** A more semantically appropriate and RESTful way is to return `CreatedAtAction(nameof(GetAuthor), new { id = author.Id }, author);` instead of `Ok(author);`.
    **Explanation:**
    *   `Ok(author)` returns an HTTP 200 OK status code. While technically indicating success, it's not the most precise status code for a resource creation.
    *   `CreatedAtAction` returns an HTTP 201 Created status code, which is the standard for successful resource creation.
    *   Crucially, `CreatedAtAction` also includes a `Location` header in the response. This header provides the URI of the newly created resource (e.g., `/api/authors/5`), allowing the client to easily retrieve the resource directly. This follows the HATEOAS (Hypermedia as the Engine of Application State) principle of REST, guiding clients on how to interact with the API. It also takes advantage of the existing `GetAuthor` action to construct the URI.

#### AI generation note
Create a 15-minute mixed-format lesson. Start with 5 minutes of slide-based explanation on API design principles (resource-based URLs, HTTP verbs, status codes). Then, transition to a 10-minute live coding demo. In the demo, create a new ASP.NET Core Web API project. Define a simple `Movie` model (`Id`, `Title`, `Director`, `ReleaseYear`). Scaffold a basic `MoviesController` using EF Core. Show how to configure CORS in `Program.cs`. Then, switch to a Blazor WebAssembly project and demonstrate consuming the `Movie` API for GET (displaying a list) and POST (adding a new movie). Use browser dev tools to show network requests and responses. Include a diagram overlay illustrating the communication flow between Blazor WebAssembly, the API, and the database. End with an interactive coding exercise where learners modify the Blazor app to implement a DELETE operation.

---

### Chapter 4.4 — Advanced Data Handling: Loading States, Error Handling, and Pagination

#### Learning objectives
*   Implement visual loading indicators to improve user experience during asynchronous data fetching.
*   Develop robust error handling strategies for API and database interactions, providing meaningful feedback to users.
*   Understand the concept and necessity of pagination for large datasets.
*   Implement client-side and/or server-side pagination techniques in Blazor applications.
*   Apply best practices for managing data fetching lifecycle and state in complex scenarios.

#### Detailed lesson content
As your Blazor applications grow and interact with more data, simply fetching and displaying information isn't enough. A truly professional and user-friendly application needs to gracefully handle the realities of network latency, potential errors, and large datasets. This chapter focuses on advanced data handling techniques: providing visual feedback during loading, implementing comprehensive error handling, and efficiently managing large result sets through pagination.

First, let's tackle **Loading States**. When your application makes an asynchronous call to an API or database, there's a delay before the data arrives. During this time, the user might perceive the application as frozen or broken if no feedback is provided. Implementing a loading indicator (like a spinner, skeleton UI, or simple "Loading..." text) is crucial for a good user experience. In Blazor, you can achieve this by using a boolean flag that is set to `true` before the data fetch begins and `false` once it completes (or fails).

```csharp
@if (isLoading)
{
    <p><em><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading products...</em></p>
}
else if (errorMessage != null)
{
    <div class="alert alert-danger">Error: @errorMessage</div>
}
else if (products == null || !products.Any())
{
    <p>No products found.</p>
}
else
{
    <table class="table">
        <!-- Display products -->
    </table>
}

@code {
    private bool isLoading = true;
    private string? errorMessage;
    private List<Product>? products;

    protected override async Task OnInitializedAsync()
    {
        isLoading = true;
        errorMessage = null;
        try
        {
            products = await Http.GetFromJsonAsync<List<Product>>("api/products");
        }
        catch (HttpRequestException ex)
        {
            errorMessage = $"Network error: {ex.Message}";
        }
        catch (Exception ex)
        {
            errorMessage = $"An unexpected error occurred: {ex.Message}";
        }
        finally
        {
            isLoading = false;
        }
    }
}
```
This pattern provides clear visual feedback and also introduces a place for **Error Handling**. Beyond network errors, your API might return specific error codes (e.g., 404 Not Found, 400 Bad Request, 500 Internal Server Error) or custom error messages in its response body. Your Blazor application should be prepared to parse these and display user-friendly messages. For `HttpClient` calls, you can check `response.IsSuccessStatusCode` and then read the error content if it's `false`. For EF Core operations, `try-catch` blocks are essential. It's important to distinguish between errors that are temporary (e.g., network issues, which might warrant a retry button) and permanent errors (e.g., invalid input, which requires user *Pagination**. When dealing with hundreds, thousands, or even millions of records, fetching all of them at once is highly inefficient and can severely degrade performance for both your server and the client. Pagination involves fetching data in smaller, manageable chunks (pages).

There are two main approaches to pagination:
1.  **Client-Side Pagination:** You fetch all data once, and then the Blazor application handles displaying only a subset of that data at a time. This is suitable for smaller datasets (e.g., a few hundred records) where the initial load time is acceptable, and you want to enable rich client-side sorting/filtering without repeated server calls.
    ```csharp
    // Example for client-side pagination
    private List<Product>? allProducts;
    private List<Product>? currentPageProducts;
    private int pageSize = 10;
    private int currentPage = 1;

    protected override async Task OnInitializedAsync()
    {
        allProducts = await Http.GetFromJsonAsync<List<Product>>("api/products");
        UpdateCurrentPageProducts();
    }

    private void UpdateCurrentPageProducts()
    {
        if (allProducts != null)
        {
            currentPageProducts = allProducts
                .Skip((currentPage - 1) * pageSize)
                .Take(pageSize)
                .ToList();
        }
    }

    private void GoToPage(int pageNumber)
    {
        currentPage = pageNumber;
        UpdateCurrentPageProducts();
    }
    // Add UI for page numbers and next/previous buttons
    ```
2.  **Server-Side Pagination:** The API itself handles fetching only the requested page of data. This is the preferred method for large datasets, as it minimizes network traffic and server memory usage. Your API typically accepts `pageNumber` and `pageSize` parameters, and returns a subset of data along with total count.
    ```csharp
    // API endpoint (example in C# Web API controller)
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int pageNumber = 1, int pageSize = 10)
    {
        var products = await _context.Products
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
        var totalCount = await _context.Products.CountAsync();
        Response.Headers.Add("X-Total-Count", totalCount.ToString()); // Custom header for total count
        return Ok(products);
    }

    // Blazor component consuming server-side paginated API
    private List<Product>? products;
    private int totalProducts;
    private int currentPage = 1;
    private int pageSize = 10;

    protected override async Task OnInitializedAsync()
    {
        await LoadProducts(currentPage, pageSize);
    }

    private async Task LoadProducts(int page, int size)
    {
        isLoading = true;
        errorMessage = null;
        try
        {
            var response = await Http.GetAsync($"api/products?pageNumber={page}&pageSize={size}");
            response.EnsureSuccessStatusCode(); // Throws HttpRequestException for 4xx/5xx
            products = await response.Content.ReadFromJsonAsync<List<Product>>();
            if (response.Headers.TryGetValues("X-Total-Count", out var totalCountHeaders))
            {
                totalProducts = int.Parse(totalCountHeaders.First());
            }
        }
        catch (HttpRequestException ex)
        {
            errorMessage = $"API error: {ex.Message}";
        }
        finally
        {
            isLoading = false;
        }
    }

    private async Task GoToPage(int pageNumber)
    {
        currentPage = pageNumber;
        await LoadProducts(currentPage, pageSize);
    }
    ```
    Server-side pagination requires careful coordination between your Blazor client and your Web API. The API must expose endpoints that accept pagination parameters and return the appropriate subset of data, often including metadata like the total number of items, which is crucial for building the pagination UI.

**Common Mistakes and Best Practices:**
*   **Over-fetching:** Always fetch only the data you need. For large datasets, server-side pagination is almost always superior.
*   **Ignoring API Errors:** Don't assume API calls will always succeed. Implement `try-catch` blocks and check `HttpResponseMessage.IsSuccessStatusCode`.
*   **Poor User Feedback:** A blank screen or frozen UI is frustrating. Always show a loading indicator.
*   **Security for Pagination:** Ensure pagination parameters (page number, page size) are validated on the server to prevent denial-of-service attacks or attempts to retrieve excessive data.
*   **State Management for Filters/Sorts:** When combining pagination with filtering or sorting, ensure your component's state (current page, filter criteria, sort order) is correctly managed and passed to the data fetching method.
*   **Reusability:** For complex data grids, consider creating reusable Blazor components for pagination controls, loading indicators, and error displays.

By mastering these advanced data handling techniques, you'll elevate your Blazor applications from functional prototypes to robust, performant, and delightful user experiences.

#### Key concepts
*   **Loading State**: A visual indication (e.g., spinner, text) shown to the user while asynchronous data is being fetched, improving perceived performance and user experience.
*   **Error Handling**: The process of anticipating, detecting, and responding to errors (e.g., network failures, API errors, database exceptions) in a graceful and user-friendly manner.
*   **Pagination**: A technique for dividing a large dataset into smaller, discrete pages, allowing for efficient retrieval and display of data.
*   **Client-Side Pagination**: Fetching all data to the client and then using client-side logic to display data in pages. Suitable for smaller datasets.
*   **Server-Side Pagination**: The server (API/database) handles dividing data into pages and only sends the requested page to the client. Essential for large datasets.
*   **`finally` block**: A C# construct used in `try-catch-finally` blocks to ensure certain code (like setting `isLoading = false`) always executes, regardless of whether an exception occurred.
*   **`HttpRequestException`**: An exception thrown by `HttpClient` when an HTTP request fails due to network issues, DNS problems, or when `EnsureSuccessStatusCode()` is called on a non-success response.
*   **`X-Total-Count` header**: A common practice in RESTful APIs to send the total number of available items (before pagination) to the client, useful for building pagination UI.

#### Hands-on activity
**Implement Advanced Data Handling for a Product List**

**Goal:** Enhance the product list from Chapter 4.1 or 4.3 (consuming an API) by adding loading indicators, robust error handling, and server-side pagination.

**Instructions:**
1.  **Start with Existing Project:** Use your Blazor WebAssembly project that consumes the `Product` or `Book` API from Chapter 4.1 or 4.3.
2.  **Modify API (if applicable for server-side pagination):**
    *   If you're using a custom API (Chapter 4.3), modify its `Get` endpoint to accept `pageNumber` and `pageSize` parameters.
    *   Implement `Skip` and `Take` with EF Core to return only the requested page.
    *   Add `Response.Headers.Add("X-Total-Count", totalCount.ToString());` to return the total count.
    *   **If using a mock API that doesn't support server-side pagination, you can simulate it by fetching all and then applying client-side pagination for this exercise.**
3.  **Enhance Blazor Component (`ProductList.razor` or `BookList.razor`):**
    *   **Loading State:** Add a `bool isLoading` flag. Set it to `true` at the start of `LoadProducts` and `false` in a `finally` block. Display a spinner or "Loading..." message when `isLoading` is `true`.
    *   **Error Handling:** Add a `string? errorMessage` field. In the `catch` blocks of your data fetching, set `errorMessage` to a user-friendly message. Display this message in an `alert-danger` div when `errorMessage` is not null.
    *   **Server-Side Pagination:**
        *   Add `int currentPage = 1;`, `int pageSize = 5;`, `int totalItems;`.
        *   Modify `LoadProducts` to accept `page` and `size` parameters and construct the API URL accordingly (e.g., `api/products?pageNumber={page}&pageSize={size}`).
        *   After fetching data, try to read the `X-Total-Count` header from the `HttpResponseMessage` to set `totalItems`.
        *   Create UI elements for pagination: "Previous", "Next" buttons, and potentially page number buttons. These buttons should call a `GoToPage(int pageNumber)` method that updates `currentPage` and reloads products.
        *   Calculate `totalPages` based on `totalItems` and `pageSize`.
        *   Disable "Previous" on the first page and "Next" on the last page.

**Starter Code (Blazor WebAssembly `Pages/ProductList.razor` with server-side pagination focus):**
```razor
@page "/products-advanced"
@using System.Net.Http.Json
@inject HttpClient Http

<h3>Advanced Product List</h3>

@if (isLoading)
{
    <p><em><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading products...</em></p>
}
else if (errorMessage != null)
{
    <div class="alert alert-danger">Error: @errorMessage <button class="btn btn-link" @onclick="() => LoadProducts(currentPage, pageSize)">Retry</button></div>
}
else if (products == null || !products.Any())
{
    <p>No products found.</p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var product in products)
            {
                <tr>
                    <td>@product.Id</td>
                    <td>@product.Name</td>
                    <td>@product.Price.ToString("C")</td>
                </tr>
            }
        </tbody>
    </table>

    <nav>
        <ul class="pagination">
            <li class="page-item @(currentPage == 1 ? "disabled" : "")">
                <button class="page-link" @onclick="() => GoToPage(currentPage - 1)">Previous</button>
            </li>
            @for (int i = 1; i <= TotalPages; i++)
            {
                var pageNumber = i;
                <li class="page-item @(currentPage == pageNumber ? "active" : "")">
                    <button class="page-link" @onclick="() => GoToPage(pageNumber)">@pageNumber</button>
                </li>
            }
            <li class="page-item @(currentPage == TotalPages ? "disabled" : "")">
                <button class="page-link" @onclick="() => GoToPage(currentPage + 1)">Next</button>
            </li>
        </ul>
    </nav>
    <p>Displaying page @currentPage of @TotalPages (Total products: @totalItems)</p>
}

@code {
    private List<Product>? products;
    private bool isLoading = true;
    private string? errorMessage;

    private int currentPage = 1;
    private int pageSize = 5; // Display 5 items per page
    private int totalItems;
    private int TotalPages => (int)Math.Ceiling((double)totalItems / pageSize);

    // IMPORTANT: Ensure this matches your API's base URL
    private const string ApiBaseUrl = "http://localhost:5001/api/products"; // Adjust port if necessary

    protected override async Task OnInitializedAsync()
    {
        await LoadProducts(currentPage, pageSize);
    }

    private async Task LoadProducts(int page, int size)
    {
        isLoading = true;
        errorMessage = null; // Clear previous errors
        products = null; // Clear previous products
        StateHasChanged(); // Force UI update to show loading state immediately

        try
        {
            var response = await Http.GetAsync($"{ApiBaseUrl}?pageNumber={page}&pageSize={size}");
            response.EnsureSuccessStatusCode(); // Throws HttpRequestException for 4xx/5xx responses

            products = await response.Content.ReadFromJsonAsync<List<Product>>();

            // Read total count from custom header
            if (response.Headers.TryGetValues("X-Total-Count", out var totalCountHeaders))
            {
                totalItems = int.Parse(totalCountHeaders.First());
            }
            else
            {
                // Fallback if header not present (e.g., if API doesn't provide it)
                totalItems = products?.Count ?? 0;
            }
        }
        catch (HttpRequestException ex)
        {
            errorMessage = $"Network or API error: {ex.Message}. Status: {(ex.StatusCode.HasValue ? ex.StatusCode.Value.ToString() : "Unknown")}";
            Console.WriteLine($"Error: {ex.Message}");
        }
        catch (Exception ex)
        {
            errorMessage = $"An unexpected error occurred: {ex.Message}";
            Console.WriteLine($"Error: {ex.Message}");
        }
        finally
        {
            isLoading = false;
        }
    }

    private async Task GoToPage(int pageNumber)
    {
        if (pageNumber < 1 || pageNumber > TotalPages || pageNumber == currentPage)
        {
            return; // Invalid page or already on this page
        }
        currentPage = pageNumber;
        await LoadProducts(currentPage, pageSize);
    }

    // Product class definition (if not in a separate file)
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}
```

#### Assessment idea
1.  **Question:** You have a Blazor component that fetches a list of `Order` objects from an API. You want to display a loading spinner while the data is being fetched and a user-friendly error message if the API call fails. Which of the following approaches best combines these requirements?
    ```csharp
    // Option A
    private List<Order> orders;
    private bool isLoading;
    protected override async Task OnInitializedAsync()
    {
        isLoading = true;
        orders = await Http.GetFromJsonAsync<List<Order>>("api/orders");
        isLoading = false;
    }

    // Option B
    private List<Order> orders;
    private bool isLoading = true;
    private string errorMessage;
    protected override async Task OnInitializedAsync()
    {
        try
        {
            orders = await Http.GetFromJsonAsync<List<Order>>("api/orders");
        }
        catch (HttpRequestException ex)
        {
            errorMessage = "Failed to load orders: " + ex.Message;
        }
        finally
        {
            isLoading = false;
        }
    }

    // Option C
    private List<Order> orders;
    protected override void OnInitialized()
    {
        // No async, no loading, no error handling
        orders = Http.GetFromJsonAsync<List<Order>>("api/orders").Result;
    }

    // Option D
    private List<Order> orders;
    private bool isLoading = true;
    protected override async Task OnInitializedAsync()
    {
        isLoading = true;
        var response = await Http.GetAsync("api/orders");
        if (!response.IsSuccessStatusCode)
        {
            // Just log error, no user message
            Console.WriteLine("API Error");
        }
        orders = await response.Content.ReadFromJsonAsync<List<Order>>();
        isLoading = false;
    }
    ```
    **Correct Answer:** Option B.
    **Explanation:**
    *   Option A correctly uses `isLoading` but lacks any error handling, leaving the user with a potentially blank screen if the API fails.
    *   Option B correctly initializes `isLoading` to `true`, uses a `try-catch-finally` block to handle `HttpRequestException` (setting a user-friendly `errorMessage`), and ensures `isLoading` is set to `false` regardless of success or failure. This provides both loading feedback and robust error handling.
    *   Option C uses synchronous `.Result` which is a bad practice that can lead to deadlocks, and completely lacks loading states and error handling.
    *   Option D checks for `IsSuccessStatusCode` but only logs the error to the console, failing to provide user feedback. It also doesn't clear `isLoading` in case of an error within the `ReadFromJsonAsync` call.

2.  **Question:** You are building a Blazor application that needs to display a catalog of 10,000 products. Your API provides an endpoint `/api/products` that can accept `pageNumber` and `pageSize` query parameters. Which type of pagination should you implement, and why?
    **Correct Answer:** You should implement **server-side pagination**.
    **Explanation:** For a large dataset of 10,000 products, server-side pagination is crucial for performance and scalability.
    *   **Reason 1: Reduced Network Traffic:** With server-side pagination, only a small subset of data (one page) is transferred over the network at a time, significantly reducing bandwidth usage and improving load times compared to fetching all 10,000 products initially.
    *   **Reason 2: Improved Server Performance:** The database query on the server only needs to retrieve a limited number of records (`Skip` and `Take`), which is much faster and consumes less memory than querying the entire dataset.
    *   **Reason 3: Better Client-Side Responsiveness:** The Blazor application doesn't have to manage or render a massive list of items in memory, leading to a more responsive and fluid user interface.
    Client-side pagination would involve fetching all 10,000 products to the browser, which would be slow, consume significant client memory, and potentially crash the browser.

#### AI generation note
Create a 12-minute live coding video. Revisit the `ProductList` component from Chapter 4.1. Introduce a `bool isLoading` and `string errorMessage` state. Wrap the `HttpClient` call in a `try-catch-finally` block to demonstrate setting these states. Show a `spinner-border` (from Bootstrap) when `isLoading` is true and an `alert-danger` when `errorMessage` is present. Then, modify the API (briefly show API code) to accept `pageNumber` and `pageSize` parameters and return `X-Total-Count` header. In the Blazor component, implement `currentPage`, `pageSize`, `totalItems` state. Create "Previous" and "Next" buttons, and a series of page number buttons, dynamically generated based on `totalItems` and `pageSize`. Demonstrate how clicking these buttons triggers `LoadProducts` with new pagination parameters. Use a split-screen view of code and browser output, highlighting the loading state and network requests in dev tools. Include a reflection prompt on the importance of user feedback during data operations.
---

## Module 5: Advanced Blazor Concepts

**Module Goal:** To equip learners with advanced Blazor techniques, enabling them to build more robust, interactive, and secure applications by mastering component lifecycle, JavaScript interoperability, templated components, authentication, and advanced routing.

---

### Chapter 5.1 — Component Lifecycle and Event Handling

#### Learning objectives
*   Understand the sequence and purpose of key Blazor component lifecycle methods.
*   Differentiate between synchronous and asynchronous lifecycle methods and their appropriate use cases.
*   Master the `StateHasChanged()` method for explicit UI re-rendering.
*   Implement `EventCallback<T>` for effective child-to-parent component communication.
*   Identify and avoid common pitfalls related to component lifecycle and event handling.

#### Detailed lesson content
Blazor components, like many UI frameworks, follow a predictable lifecycle, a series of stages from creation to destruction. Understanding this lifecycle is crucial for managing component state, fetching data at the right time, and optimizing performance. The primary lifecycle methods you'll encounter are `OnInitialized`, `OnParametersSet`, `OnAfterRender`, and their asynchronous counterparts (`OnInitializedAsync`, `OnParametersSetAsync`, `OnAfterRenderAsync`).

The journey begins when a component is first initialized. `OnInitialized` and `OnInitializedAsync` are called once when the component is first created and added to the render tree. This is the ideal place for one-time initialization logic, such as setting up default values or subscribing to services. If you need to perform asynchronous operations, like fetching initial data from an API, always use `OnInitializedAsync` and leverage `async/await`. A common mistake here is performing heavy, blocking operations in `OnInitialized`, which can freeze the UI. Always remember to call the base method (`base.OnInitialized()`) if you override these methods to ensure the framework's internal logic is executed.

Following initialization, or whenever a parent component provides new parameters, `OnParametersSet` or `OnParametersSetAsync` is invoked. This method is called after parameters from the parent component have been supplied and their values are available. It's an excellent place to react to changes in input parameters, for instance, reloading data based on a new `ProductId` passed from the parent. Be cautious here: if you trigger a state change within `OnParametersSet` that causes the component to re-render and its parameters to be set again, you could inadvertently create an infinite loop. To prevent this, always check if the parameters have actually changed before performing expensive operations. For example, store the previous parameter value and compare it with the new one.

After the component has rendered its UI, `OnAfterRender` or `OnAfterRenderAsync` is called. This method is invoked after the component has finished rendering and the Blazor renderer has updated the browser's DOM. This is the perfect spot for JavaScript interop calls that require access to the rendered DOM elements, or for integrating third-party JavaScript libraries. The `firstRender` boolean parameter is particularly useful here; it allows you to execute code only once after the initial render, preventing redundant operations on subsequent re-renders. For example, if you're initializing a charting library, you only want to do that once, not every time the component updates.

Sometimes, Blazor's automatic change detection might not pick up on a state change, especially when working with mutable objects or when changes occur outside of Blazor's rendering pipeline (e.g., from a background service). In such cases, you need to explicitly tell Blazor to re-render the component using `StateHasChanged()`. This method signals to the component that its state has changed and it should re-render itself. However, overuse of `StateHasChanged()` can lead to performance issues, as it forces a re-render even if one isn't strictly necessary. Use it judiciously, primarily when external events or complex internal logic modifies state without a direct UI interaction.

Effective communication between components is fundamental for building complex Blazor applications. While parameters handle parent-to-child communication, `EventCallback<T>` is the standard and most robust way for child components to notify their parents about events or state changes. An `EventCallback` is a special Blazor type that wraps a delegate, allowing the parent component to provide a method that the child can invoke. The `<T>` in `EventCallback<T>` specifies the type of data that the child component will pass back to the parent. For example, `EventCallback<string>` means the child will send a string, while `EventCallback` (without `<T>`) means no data is passed.

When defining an `EventCallback` in a child component, declare it as a public parameter: `[Parameter] public EventCallback<string> OnItemClicked { get; set; }`. In the parent component, you can then bind a method to this callback: `<ChildComponent OnItemClicked="HandleItemClick" />`. When the child wants to raise the event, it calls `OnItemClicked.InvokeAsync(data)`. Using `InvokeAsync` is crucial because it correctly dispatches the event back to the parent's synchronization context, ensuring that any UI updates triggered by the parent's handler are processed safely and efficiently. Common mistakes include forgetting to `await` `InvokeAsync` or trying to use a regular `Action` delegate instead of `EventCallback`, which doesn't integrate properly with Blazor's rendering system.

```csharp
// ParentComponent.razor
@page "/lifecycle-demo"

<h3>Parent Component</h3>
<p>Counter from child: @childCounter</p>

<button @onclick="ResetChildCounter">Reset Child Counter</button>

<ChildComponent OnCounterChanged="HandleCounterChanged" />

@code {
    private int childCounter = 0;

    private void HandleCounterChanged(int newCount)
    {
        childCounter = newCount;
        Console.WriteLine($"Parent received new count: {newCount}");
    }

    private void ResetChildCounter()
    {
        childCounter = 0;
        // In a real scenario, you might pass a parameter to the child
        // to tell it to reset, which would trigger OnParametersSet in the child.
        // For this demo, we just reset the parent's view of the count.
    }
}

// ChildComponent.razor
<h3>Child Component</h3>
<p>Current count: @currentCount</p>
<button @onclick="IncrementCount">Increment</button>

@code {
    [Parameter]
    public EventCallback<int> OnCounterChanged { get; set; }

    private int currentCount = 0;
    private string lifecycleLog = string.Empty;

    // 1. OnInitialized / OnInitializedAsync
    protected override void OnInitialized()
    {
        lifecycleLog += "OnInitialized called.\n";
        Console.WriteLine("Child: OnInitialized");
        base.OnInitialized();
    }

    protected override async Task OnInitializedAsync()
    {
        lifecycleLog += "OnInitializedAsync called.\n";
        Console.WriteLine("Child: OnInitializedAsync - Simulating data fetch...");
        await Task.Delay(50); // Simulate async operation
        Console.WriteLine("Child: OnInitializedAsync - Data fetch complete.");
        base.OnInitializedAsync();
    }

    // 2. OnParametersSet / OnParametersSetAsync
    protected override void OnParametersSet()
    {
        lifecycleLog += "OnParametersSet called.\n";
        Console.WriteLine("Child: OnParametersSet");
        base.OnParametersSet();
    }

    protected override async Task OnParametersSetAsync()
    {
        lifecycleLog += "OnParametersSetAsync called.\n";
        Console.WriteLine("Child: OnParametersSetAsync");
        await Task.Delay(50); // Simulate async operation
        base.OnParametersSetAsync();
    }

    // 3. ShouldRender
    protected override bool ShouldRender()
    {
        // lifecycleLog += "ShouldRender called.\n"; // Can be called very frequently, don't log directly here in production
        Console.WriteLine("Child: ShouldRender");
        return base.ShouldRender();
    }

    // 4. OnAfterRender / OnAfterRenderAsync
    protected override void OnAfterRender(bool firstRender)
    {
        lifecycleLog += $"OnAfterRender called (firstRender: {firstRender}).\n";
        Console.WriteLine($"Child: OnAfterRender (firstRender: {firstRender})");
        if (firstRender)
        {
            Console.WriteLine("Child: This runs only once after initial render.");
        }
        base.OnAfterRender(firstRender);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        lifecycleLog += $"OnAfterRenderAsync called (firstRender: {firstRender}).\n";
        Console.WriteLine($"Child: OnAfterRenderAsync (firstRender: {firstRender})");
        if (firstRender)
        {
            await Task.Delay(50); // Simulate async DOM manipulation
            Console.WriteLine("Child: Async post-render logic for first render.");
        }
        base.OnAfterRenderAsync(firstRender);
    }

    private async Task IncrementCount()
    {
        currentCount++;
        // Explicitly notify Blazor if state changes outside of standard event handlers
        // StateHasChanged(); // Often not needed for simple events like @onclick, but good to know

        // Notify parent component
        if (OnCounterChanged.HasDelegate)
        {
            await OnCounterChanged.InvokeAsync(currentCount);
        }
    }

    public void ForceRender()
    {
        Console.WriteLine("Child: ForceRender called via StateHasChanged()");
        StateHasChanged();
    }
}
```
In this example, the `ChildComponent` demonstrates the various lifecycle methods by logging messages to the console. The `IncrementCount` method also shows how `EventCallback<T>` is used to pass the updated `currentCount` back to the `ParentComponent`. The parent then updates its own state and displays the received count. This pattern is fundamental for building modular and reusable components. Remember that `StateHasChanged()` is automatically called after most UI events (like `onclick`) and after lifecycle methods complete, so you often don't need to call it manually unless you're updating state from a non-UI thread or an external service.

#### Key concepts
*   **Component Lifecycle:** The sequence of methods a Blazor component executes from creation to destruction.
*   **`OnInitialized` / `OnInitializedAsync`:** Called once when the component is first created; ideal for one-time setup and initial data fetching.
*   **`OnParametersSet` / `OnParametersSetAsync`:** Called when parameters are set or updated by the parent; useful for reacting to parameter changes.
*   **`OnAfterRender` / `OnAfterRenderAsync`:** Called after the component has rendered and the DOM is updated; suitable for JS interop or DOM-dependent operations.
*   **`firstRender`:** A boolean parameter in `OnAfterRender` and `OnAfterRenderAsync` that is `true` only for the very first render of the component instance.
*   **`StateHasChanged()`:** A method to explicitly notify Blazor that a component's state has changed and it should re-render.
*   **`EventCallback<T>`:** A Blazor-specific delegate type used for child-to-parent component communication, ensuring proper UI updates.
*   **`InvokeAsync()`:** The method used to raise an `EventCallback`, ensuring the event is dispatched correctly within Blazor's synchronization context.

#### Hands-on activity
**Activity: Building a Data-Fetching and Interactive Counter Component**

1.  **Create a new Blazor component** named `DataDisplayCounter.razor`.
2.  **Implement `OnInitializedAsync`**: In this method, simulate an asynchronous data fetch. For example, fetch a list of strings or numbers after a `Task.Delay(1000)`. Store this data in a private field.
3.  **Display the fetched data**: Render the fetched data in an unordered list (`<ul>`).
4.  **Add a counter**: Include a button that increments a local `count` variable. Display the `count`.
5.  **Implement `EventCallback<int>`**: Create an `EventCallback<int>` parameter named `OnCountUpdated`. Every time the counter is incremented, invoke this callback, passing the new `count` value.
6.  **Create a `ParentView.razor` component**:
    *   Host the `DataDisplayCounter` component.
    *   Implement a method `HandleCountChange(int newCount)` that receives the updated count from the child.
    *   Display the count received from the child in the `ParentView`.
    *   Add a button in `ParentView` that, when clicked, calls a public method on `DataDisplayCounter` (e.g., `RefreshData()`) which in turn calls `StateHasChanged()` to force a re-render of the child. Observe the lifecycle methods in the console.

**Starter Code for `DataDisplayCounter.razor`:**
```csharp
@* DataDisplayCounter.razor *@
<h3>Data Display & Counter</h3>

@if (isLoading)
{
    <p>Loading data...</p>
}
else
{
    <h4>Fetched Items:</h4>
    <ul>
        @foreach (var item in fetchedItems)
        {
            <li>@item</li>
        }
    </ul>
}

<p>Current Count: @currentCount</p>
<button @onclick="IncrementCount">Increment Counter</button>

@code {
    [Parameter]
    public EventCallback<int> OnCountUpdated { get; set; }

    private List<string> fetchedItems = new List<string>();
    private int currentCount = 0;
    private bool isLoading = true;

    protected override async Task OnInitializedAsync()
    {
        Console.WriteLine("DataDisplayCounter: OnInitializedAsync - Starting data fetch.");
        await Task.Delay(1500); // Simulate API call
        fetchedItems = new List<string> { "Item A", "Item B", "Item C", "Item D" };
        isLoading = false;
        Console.WriteLine("DataDisplayCounter: OnInitializedAsync - Data fetch complete.");
    }

    private async Task IncrementCount()
    {
        currentCount++;
        if (OnCountUpdated.HasDelegate)
        {
            await OnCountUpdated.InvokeAsync(currentCount);
        }
        Console.WriteLine($"DataDisplayCounter: Count incremented to {currentCount}");
    }

    public void RefreshData()
    {
        // This method is called from the parent to force a re-render.
        // In a real app, you might re-fetch data here or update parameters.
        Console.WriteLine("DataDisplayCounter: RefreshData called, forcing re-render.");
        StateHasChanged(); // Explicitly trigger a re-render
    }
}
```

**Starter Code for `ParentView.razor`:**
```csharp
@* ParentView.razor *@
@page "/parent-lifecycle"

<h3>Parent View</h3>
<p>Count received from child: @receivedChildCount</p>

<button @onclick="CallChildRefresh">Refresh Child Data (via parent)</button>

<DataDisplayCounter @ref="childRef" OnCountUpdated="HandleChildCountUpdate" />

@code {
    private int receivedChildCount = 0;
    private DataDisplayCounter childRef; // Reference to the child component

    private void HandleChildCountUpdate(int newCount)
    {
        receivedChildCount = newCount;
        Console.WriteLine($"ParentView: Received updated count from child: {newCount}");
    }

    private void CallChildRefresh()
    {
        if (childRef != null)
        {
            childRef.RefreshData();
        }
    }
}
```

#### Assessment idea
1.  **Question:** A Blazor component needs to fetch data from an API only once when it's first loaded, and then display that data. Which lifecycle method is the most appropriate for this task, and why should its asynchronous version be preferred if the data fetching is an `async` operation?
    *   **Correct Answer:** The `OnInitializedAsync` method is the most appropriate. It is called only once when the component is first created and added to the render tree. Its asynchronous nature (`async Task`) allows for non-blocking operations like API calls (`await HttpClient.GetFromJsonAsync(...)`) without freezing the UI thread, providing a smoother user experience. Using the synchronous `OnInitialized` for an `async` operation would lead to blocking the UI, which is highly undesirable.

2.  **Question:** You have a child component that needs to notify its parent component when a button is clicked, passing a `string` message back to the parent. Describe how you would define this communication channel in both the child and parent components, including the specific Blazor types and methods involved.
    *   **Correct Answer:** In the **child component**, you would define a public parameter of type `EventCallback<string>`. For example: `[Parameter] public EventCallback<string> OnMessageSent { get; set; }`. When the button is clicked, you would invoke this callback, passing the string message: `await OnMessageSent.InvokeAsync("Hello from child!");`. In the **parent component**, you would bind a method to this `EventCallback` parameter when instantiating the child. For example: `<ChildComponent OnMessageSent="HandleChildMessage" />`. The `HandleChildMessage` method in the parent would have a signature that matches the `EventCallback<string>`, such as `private void HandleChildMessage(string message) { /* ... */ }`. This setup ensures that the child can safely and efficiently communicate state changes or events back to its parent, triggering UI updates in the parent if necessary.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with a 3-minute animated diagram illustrating the Blazor component lifecycle flow (`OnInitialized` -> `OnParametersSet` -> `OnAfterRender`, with `ShouldRender` and `StateHasChanged` points). Follow with a 7-minute live coding demo using the provided `ParentComponent.razor` and `ChildComponent.razor` examples. Show the console output as the lifecycle methods fire and parameters change. Demonstrate how `EventCallback` works by clicking the child's button and observing the parent's UI update. Conclude with a 2-minute explanation of common mistakes, such as infinite loops in `OnParametersSet` or forgetting `await` with `InvokeAsync`. Include side-by-side code and browser output during the demo.

---

### Chapter 5.2 — JavaScript Interoperability (JS Interop)

#### Learning objectives
*   Explain the necessity and use cases for JavaScript interoperability in Blazor applications.
*   Demonstrate how to invoke JavaScript functions from C# code using `IJSRuntime`.
*   Implement `[JSInvokable]` methods to allow JavaScript to call .NET methods.
*   Understand data marshaling considerations when passing data between C# and JavaScript.
*   Identify and mitigate common issues and security considerations in JS interop.

#### Detailed lesson content
While Blazor allows you to build rich, interactive web UIs entirely with C#, there are scenarios where you'll inevitably need to interact with existing JavaScript libraries, browser APIs not yet exposed directly to .NET, or perform highly optimized DOM manipulations that are more efficiently handled by JavaScript. This is where JavaScript interoperability, or JS Interop, comes into play. Blazor provides a robust mechanism to call JavaScript functions from .NET code and, conversely, to call .NET methods from JavaScript.

The primary interface for calling JavaScript from C# is `IJSRuntime`. You inject this service into your components or services, and then use its `InvokeVoidAsync` or `InvokeAsync<TValue>` methods. `InvokeVoidAsync` is used when the JavaScript function does not return a value (e.g., displaying an alert or manipulating the DOM). `InvokeAsync<TValue>` is used when the JavaScript function returns a value, and `TValue` specifies the expected .NET type that the JavaScript return value will be marshaled into. Both methods are asynchronous, reflecting the nature of browser operations.

When calling JavaScript, you pass the name of the JavaScript function as a string, followed by any arguments. These arguments are then serialized to JSON and passed to the JavaScript context. For instance, to call a simple JavaScript `alert` function, you would write `await JSRuntime.InvokeVoidAsync("alert", "Hello from Blazor!");`. For more complex scenarios, you might need to create a JavaScript module or define functions globally in `wwwroot/index.html` (for Blazor WebAssembly) or `_Host.cshtml` (for Blazor Server) or a dedicated `.js` file referenced in your `index.html`. It's generally a good practice to encapsulate your JavaScript functions within a module to avoid polluting the global namespace. You can then obtain a reference to this module using `await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./path/to/your/module.js")` and call methods on the returned object reference.

```csharp
// Example: Calling JavaScript from C#
// In a Blazor component (.razor file)
@inject IJSRuntime JSRuntime

<button @onclick="ShowAlert">Show JS Alert</button>
<button @onclick="GetBrowserWidth">Get Browser Width</button>
<p>Browser Width: @browserWidth</p>

@code {
    private int browserWidth;

    private async Task ShowAlert()
    {
        await JSRuntime.InvokeVoidAsync("alert", "This alert comes from Blazor C#!");
    }

    private async Task GetBrowserWidth()
    {
        // Call a JavaScript function defined in wwwroot/js/app.js
        browserWidth = await JSRuntime.InvokeAsync<int>("getBrowserWidth");
    }
}
```
```javascript
// wwwroot/js/app.js
window.getBrowserWidth = function() {
    return window.innerWidth;
};

// Example of a module-based JS function
export function showCustomPrompt(message) {
    return prompt(message);
}
```
To call `showCustomPrompt` from C#, you'd first import the module:
```csharp
// In a Blazor component
@inject IJSRuntime JSRuntime

private IJSObjectReference _module;

protected override async Task OnInitializedAsync()
{
    _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./js/app.js");
}

private async Task ShowModulePrompt()
{
    if (_module != null)
    {
        string result = await _module.InvokeAsync<string>("showCustomPrompt", "Enter your name:");
        Console.WriteLine($"User entered: {result}");
    }
}
```

Calling .NET methods from JavaScript is equally powerful. This is achieved using the `[JSInvokable]` attribute. You apply this attribute to a public static or instance method in your C# code. To allow JavaScript to invoke an instance method, you first need to create a .NET object reference using `DotNetObjectReference.Create(this)` (where `this` refers to the component instance). This reference is then passed to JavaScript, which can store it and call the `invokeMethod` function on it, specifying the name of the `[JSInvokable]` method and any arguments.

```csharp
// Example: Calling C# from JavaScript
// In a Blazor component (.razor file)
@inject IJSRuntime JSRuntime

<p>Message from JS: @jsMessage</p>
<button @onclick="CallJsToCallNet">Trigger JS to call .NET</button>

@code {
    private string jsMessage = "No message yet.";
    private DotNetObjectReference<MyComponent> _dotNetObjectReference;

    protected override void OnInitialized()
    {
        // Create a .NET object reference to this component instance
        _dotNetObjectReference = DotNetObjectReference.Create(this);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            // Pass the .NET object reference to JavaScript
            await JSRuntime.InvokeVoidAsync("setDotNetHelper", _dotNetObjectReference);
        }
    }

    [JSInvokable] // Mark this method as invokable from JavaScript
    public void ReceiveMessageFromJs(string message)
    {
        jsMessage = $"Received: {message} at {DateTime.Now.ToShortTimeString()}";
        StateHasChanged(); // Update UI
        Console.WriteLine($"C#: Received message from JS: {message}");
    }

    private async Task CallJsToCallNet()
    {
        // Call a JS function that will, in turn, call our .NET method
        await JSRuntime.InvokeVoidAsync("triggerDotNetCall", "Hello from C# via JS!");
    }

    public void Dispose()
    {
        _dotNetObjectReference?.Dispose(); // Important for memory management
    }
}
```
```javascript
// wwwroot/js/app.js
let dotNetHelper;

window.setDotNetHelper = (helper) => {
    dotNetHelper = helper;
    console.log("JS: .NET helper set.");
};

window.triggerDotNetCall = (message) => {
    if (dotNetHelper) {
        console.log("JS: Calling .NET method ReceiveMessageFromJs...");
        dotNetHelper.invokeMethodAsync('ReceiveMessageFromJs', message);
    } else {
        console.error("JS: .NET helper not set.");
    }
};
```

Data marshaling between C# and JavaScript is handled automatically by Blazor, which serializes and deserializes data using JSON. Primitive types (strings, numbers, booleans) are straightforward. Complex types (objects, arrays) are serialized to JSON objects/arrays. It's important to ensure that the C# types and JavaScript objects have compatible structures for successful marshaling. For example, if you pass a C# object with properties `Name` and `Age`, JavaScript will receive an object `{ name: "...", age: ... }` (note the camelCasing convention in JavaScript).

Common mistakes in JS Interop often involve forgetting to `await` asynchronous calls, leading to unexpected behavior or race conditions. Another pitfall is not disposing `DotNetObjectReference` instances, which can lead to memory leaks, especially in Blazor WebAssembly applications. Always call `Dispose()` on `DotNetObjectReference` when the component or service that created it is no longer needed. Security is also a concern: be careful about what data you pass to JavaScript, especially sensitive information, and validate any data received from JavaScript, as it could be malicious. Avoid directly injecting untrusted user input into `IJSRuntime.InvokeAsync` calls, as this could lead to cross-site scripting (XSS) vulnerabilities. Always sanitize or escape user-provided strings before passing them to JavaScript functions that might interpret them as code.

#### Key concepts
*   **JS Interop:** The mechanism in Blazor that allows C# code to call JavaScript functions and JavaScript code to call .NET methods.
*   **`IJSRuntime`:** The primary Blazor service used to invoke JavaScript functions from C# code.
*   **`InvokeVoidAsync()`:** Used with `IJSRuntime` to call JavaScript functions that do not return a value.
*   **`InvokeAsync<TValue>()`:** Used with `IJSRuntime` to call JavaScript functions that return a value, which is then marshaled to the specified .NET type `TValue`.
*   **`[JSInvokable]`:** An attribute applied to public C# methods (static or instance) to make them callable from JavaScript.
*   **`DotNetObjectReference<T>`:** A wrapper around a .NET object instance that allows JavaScript to hold a reference to it and invoke its `[JSInvokable]` methods.
*   **Data Marshaling:** The process of converting data types between C# and JavaScript, typically via JSON serialization/deserialization.
*   **`IJSObjectReference`:** Represents a reference to a JavaScript object, often used for module imports or specific DOM elements, allowing C# to invoke methods on that specific JS object.

#### Hands-on activity
**Activity: Integrating a Third-Party JavaScript Library for Charts**

In this activity, you will integrate a simple JavaScript charting library (e.g., Chart.js for simplicity, or a custom one) into a Blazor component using JS Interop.

1.  **Add Chart.js (or similar) to your project:**
    *   In `wwwroot/index.html` (for Blazor WebAssembly) or `_Host.cshtml` (for Blazor Server), add a `<script>` tag to include Chart.js from a CDN:
        ```html
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        ```
    *   Create a new JavaScript file `wwwroot/js/chartInterop.js`.
2.  **Define JavaScript functions for charting:**
    *   In `chartInterop.js`, create a function `createChart(canvasId, chartType, labels, data)` that initializes a Chart.js chart on a given canvas element.
    *   Add another function `updateChartData(chartRef, newData)` that updates an existing chart's data.
    *   The `createChart` function should return the Chart.js chart instance, which you'll pass back to .NET as an `IJSObjectReference`.

    ```javascript
    // wwwroot/js/chartInterop.js
    window.chartReferences = {}; // Store chart instances

    window.createChart = (canvasId, chartType, labels, data) => {
        const ctx = document.getElementById(canvasId).getContext('2d');
        const chart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sales Data',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        window.chartReferences[canvasId] = chart; // Store reference
        return chart; // Return the JS chart object
    };

    window.updateChartData = (canvasId, newData) => {
        const chart = window.chartReferences[canvasId];
        if (chart) {
            chart.data.datasets[0].data = newData;
            chart.update();
        }
    };
    ```
3.  **Create a Blazor component `ChartComponent.razor`:**
    *   Inject `IJSRuntime`.
    *   Add a `<canvas>` element with a unique `id` (e.g., `myChartCanvas`).
    *   In `OnAfterRenderAsync(bool firstRender)`, if `firstRender` is `true`, call the `createChart` JavaScript function to initialize the chart. Pass the canvas ID, chart type (e.g., 'bar'), labels, and initial data. Store the returned `IJSObjectReference` from `createChart`.
    *   Add a button that, when clicked, generates new random data and calls the `updateChartData` JavaScript function to update the chart.
    *   Implement `IDisposable` and dispose of the `IJSObjectReference` when the component is removed.

**Starter Code for `ChartComponent.razor`:**
```csharp
@page "/chart-demo"
@inject IJSRuntime JSRuntime
@implements IDisposable

<h3>Sales Data Chart</h3>

<canvas id="myChartCanvas" style="max-width: 600px; max-height: 400px;"></canvas>

<button class="btn btn-primary mt-3" @onclick="UpdateChart">Update Chart Data</button>

@code {
    private IJSObjectReference _chartJsRef; // To hold the JS chart object reference
    private readonly string _canvasId = "myChartCanvas";
    private string[] _labels = new[] { "Jan", "Feb", "Mar", "Apr" };
    private double[] _data = new[] { 12.0, 19.0, 3.0, 5.0 };

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            // Load the JS interop script
            await JSRuntime.InvokeVoidAsync("import", "./js/chartInterop.js");

            // Create the chart and get a reference to the JS chart object
            // We don't actually need to store the chart instance in C# for this simple update,
            // as the JS side manages it via window.chartReferences.
            // But if we needed to call methods directly on the JS chart object from C#, we would store it.
            await JSRuntime.InvokeVoidAsync("createChart", _canvasId, "bar", _labels, _data);
        }
    }

    private async Task UpdateChart()
    {
        // Generate new random data
        Random rnd = new Random();
        _data = _labels.Select(_ => (double)rnd.Next(5, 25)).ToArray();

        // Call JS function to update the chart
        await JSRuntime.InvokeVoidAsync("updateChartData", _canvasId, _data);
    }

    public void Dispose()
    {
        // If you stored an IJSObjectReference to the chart instance itself, dispose it here.
        // For this example, the JS side manages the chart references, so no direct C# dispose needed for _chartJsRef.
        // If _chartJsRef was, for example, a module reference, you'd dispose it.
        // _chartJsRef?.DisposeAsync();
    }
}
```
3.  **Ensure `chartInterop.js` is loaded**: Add `<script src="js/chartInterop.js"></script>` to `wwwroot/index.html` (or `_Host.cshtml`) *after* the Chart.js CDN script.

#### Assessment idea
1.  **Question:** You need to display a native browser confirmation dialog (`confirm("Are you sure?")`) from your Blazor component and react to the user's choice (OK or Cancel). How would you achieve this using `IJSRuntime`, and what would be the return type in your C# code? Provide a small code snippet.
    *   **Correct Answer:** You would use `IJSRuntime.InvokeAsync<bool>()` because the `confirm()` JavaScript function returns a boolean (`true` for OK, `false` for Cancel).
        ```csharp
        @inject IJSRuntime JSRuntime

        <button @onclick="ConfirmAction">Perform Action</button>
        <p>Confirmation Result: @confirmationResult</p>

        @code {
            private string confirmationResult = "Pending...";

            private async Task ConfirmAction()
            {
                bool confirmed = await JSRuntime.InvokeAsync<bool>("confirm", "Are you sure you want to proceed?");
                confirmationResult = confirmed ? "Action confirmed!" : "Action cancelled.";
            }
        }
        ```

2.  **Question:** Explain the purpose of the `[JSInvokable]` attribute and `DotNetObjectReference<T>`. When would you use them, and what is a critical memory management step related to `DotNetObjectReference<T>`?
    *   **Correct Answer:** The `[JSInvokable]` attribute is used to mark a public C# method (either static or instance) within a Blazor component or service, making it callable from JavaScript. `DotNetObjectReference<T>` is a wrapper that allows JavaScript to hold a safe, managed reference to a specific .NET object instance (`T`). You would use them when you need JavaScript code (e.g., a third-party library, a browser event handler) to trigger C# logic, such as updating component state, performing calculations, or calling other .NET services. A critical memory management step is to **dispose** the `DotNetObjectReference<T>` instance when it is no longer needed (e.g., in the `Dispose()` method of the component or service that created it) to prevent memory leaks, especially in Blazor WebAssembly where the garbage collector might not immediately reclaim unreferenced JavaScript-held .NET objects.

#### AI generation note
Create a 10-minute live coding video. Start by setting up a basic Blazor project and adding `Chart.js` via CDN. Then, demonstrate how to create `chartInterop.js` with `createChart` and `updateChartData` functions. Show the process of injecting `IJSRuntime` into `ChartComponent.razor`, initializing the chart in `OnAfterRenderAsync`, and updating it with new data via a button click. Visually highlight the interaction between C# and JavaScript in the browser's developer console. Include a split-screen view of the Blazor code and the browser showing the dynamic chart. End with a quick quiz on `InvokeVoidAsync` vs `InvokeAsync<T>`.

---

### Chapter 5.3 — Templated Components and Render Fragments

#### Learning objectives
*   Understand the concept of templated components and their role in creating flexible and reusable UI.
*   Utilize `RenderFragment` and `ChildContent` to accept arbitrary UI content as a component parameter.
*   Implement `RenderFragment<TValue>` to create components that render content based on a provided context object.
*   Design and build advanced templated components that accept multiple `RenderFragment` parameters for distinct UI sections.
*   Recognize scenarios where templated components significantly improve code reusability and maintainability.

#### Detailed lesson content
In Blazor, components are the building blocks of your UI. While simple components are great for specific, fixed UI elements, real-world applications often demand more flexible and reusable UI patterns. This is where templated components, powered by `RenderFragment` and `RenderFragment<TValue>`, become invaluable. A templated component is essentially a component that accepts UI content (markup and other components) as a parameter, allowing its users to define *how* parts of its internal structure should look, rather than the component dictating every pixel. This promotes the "separation of concerns" principle, where the component manages its logic and layout structure, while the consumer provides the specific content.

The most common way to create a templated component is by using the `ChildContent` parameter, which is of type `RenderFragment`. When you define a `[Parameter] public RenderFragment ChildContent { get; set; }` in your component, Blazor automatically treats any content placed between the component's opening and closing tags in the parent as the value for `ChildContent`. Inside your component's `.razor` markup, you simply render `@ChildContent` wherever you want that provided content to appear. This is incredibly powerful for creating wrappers, layouts, or containers that need to host arbitrary content. For example, a `Card` component might define a basic border and shadow, but the content inside the card (text, images, buttons) is entirely up to the parent component.

```csharp
// CardComponent.razor
<div class="card shadow p-3 mb-3">
    <div class="card-body">
        @ChildContent
    </div>
</div>

// Usage in a parent component
<CardComponent>
    <h3>Welcome to My Dashboard</h3>
    <p>This is some content inside the card.</p>
    <button class="btn btn-primary">Learn More</button>
</CardComponent>
```
Beyond simple `ChildContent`, you can define multiple `RenderFragment` parameters to allow for more structured content injection. For example, a `Modal` component might accept `HeaderContent`, `BodyContent`, and `FooterContent` as separate `RenderFragment` parameters, giving the consumer fine-grained control over each section of the modal while the `Modal` component itself handles the overlay, positioning, and close logic. By convention, these parameters are often named with "Content" or "Template" suffixes.

When you need to render a collection of items, and you want the consumer to define how each item in that collection should be displayed, `RenderFragment<TValue>` is the perfect solution. This type allows the component to pass a context object of type `TValue` to the provided render fragment. The consumer can then use this context object (often named `context` or `item`) within their template to display properties of the individual item. This is analogous to how `foreach` loops work in many templating engines, where `TValue` would be the type of a single item in the collection.

```csharp
// GenericListComponent.razor
@typeparam TItem

<div class="list-group">
    @foreach (var item in Items)
    {
        <div class="list-group-item">
            @ItemTemplate(item)
        </div>
    }
</div>

@code {
    [Parameter]
    public IEnumerable<TItem> Items { get; set; }

    [Parameter]
    public RenderFragment<TItem> ItemTemplate { get; set; }
}

// Usage in a parent component
<GenericListComponent Items="products">
    <ItemTemplate Context="product">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">@product.Name</h5>
            <small>Price: @product.Price.ToString("C")</small>
        </div>
        <p class="mb-1">@product.Description</p>
    </ItemTemplate>
</GenericListComponent>

@code {
    private List<Product> products = new List<Product>
    {
        new Product { Id = 1, Name = "Laptop", Description = "Powerful machine", Price = 1200.00m },
        new Product { Id = 2, Name = "Mouse", Description = "Wireless ergonomic mouse", Price = 25.00m }
    };

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}
```
In the `GenericListComponent` example, the `ItemTemplate` parameter is of type `RenderFragment<TItem>`. When the parent consumes this component, it provides a block of UI (`<ItemTemplate Context="product">...</ItemTemplate>`) where `product` is the context object. Inside this block, the parent can access properties of the `product` object to render the individual item's details. The `Context` attribute provides a name for the context parameter; if omitted, the default name `context` is used.

Building templated components significantly enhances the reusability of your Blazor applications. Instead of duplicating markup or logic for similar UI patterns, you can create a single, flexible component. This also improves maintainability, as changes to the core structure or logic of the templated component are applied consistently wherever it's used. Common mistakes include forgetting to use the `Context` attribute when providing a `RenderFragment<TValue>`, or trying to access properties of the context object outside the `ItemTemplate` block. Also, remember that `RenderFragment` parameters are typically optional; if a parent doesn't provide content for a `RenderFragment`, it will simply render nothing. You can add default content or conditional rendering if a fragment is optional.

#### Key concepts
*   **Templated Components:** Blazor components that accept UI content (markup and other components) as parameters, allowing consumers to define parts of their rendering.
*   **`RenderFragment`:** A delegate type in Blazor that represents a block of UI content. It's used for parameters like `ChildContent` to accept arbitrary markup.
*   **`ChildContent`:** A special `RenderFragment` parameter that automatically receives any content placed between a component's opening and closing tags.
*   **`RenderFragment<TValue>`:** A generic `RenderFragment` that allows a component to pass a context object of type `TValue` to the provided UI content, enabling context-aware rendering.
*   **`Context` attribute:** Used when providing a `RenderFragment<TValue>` to specify the name of the parameter that receives the context object (e.g., `<ItemTemplate Context="product">`).
*   **Component Reusability:** The ability to use the same component in multiple places or with different content, reducing code duplication.
*   **Parameter Convention:** Naming `RenderFragment` parameters with suffixes like `Content` or `Template` (e.g., `HeaderContent`, `ItemTemplate`) to indicate their purpose.

#### Hands-on activity
**Activity: Creating a Reusable Modal Dialog Component**

You will build a flexible `ModalDialog` component that uses multiple `RenderFragment` parameters for its header, body, and footer sections.

1.  **Create a new Blazor component `ModalDialog.razor`:**
    *   This component will encapsulate the basic structure and styling of a modal dialog.
    *   It should include a backdrop, a modal container, and distinct areas for a header, body, and footer.
    *   Define three `RenderFragment` parameters: `HeaderContent`, `BodyContent`, and `FooterContent`.
    *   Add a boolean parameter `IsVisible` to control the modal's visibility.
    *   Add an `EventCallback` parameter `OnClose` that the footer (or a close button in the header) can invoke to signal the parent to hide the modal.

    ```csharp
    @* ModalDialog.razor *@
    @if (IsVisible)
    {
        <div class="modal-backdrop fade show"></div>
        <div class="modal d-block" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        @HeaderContent
                        <button type="button" class="close" aria-label="Close" @onclick="CloseModal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        @BodyContent
                    </div>
                    <div class="modal-footer">
                        @FooterContent
                    </div>
                </div>
            </div>
        </div>
    }

    @code {
        [Parameter]
        public bool IsVisible { get; set; }

        [Parameter]
        public RenderFragment HeaderContent { get; set; }

        [Parameter]
        public RenderFragment BodyContent { get; set; }

        [Parameter]
        public RenderFragment FooterContent { get; set; }

        [Parameter]
        public EventCallback OnClose { get; set; }

        private async Task CloseModal()
        {
            if (OnClose.HasDelegate)
            {
                await OnClose.InvokeAsync();
            }
        }
    }
    ```
2.  **Create a `ModalDemo.razor` page:**
    *   Include a button that, when clicked, toggles the `IsVisible` state of the `ModalDialog`.
    *   Instantiate the `ModalDialog` component.
    *   Provide custom content for `HeaderContent`, `BodyContent`, and `FooterContent` using different HTML elements and Blazor components (e.g., a `<h3>` for the header, a `<p>` and an `<img>` for the body, and buttons for the footer).
    *   Implement a method to handle the `OnClose` event from the modal to hide it.

**Starter Code for `ModalDemo.razor`:**
```csharp
@page "/modal-demo"

<h3>Modal Dialog Demonstration</h3>

<button class="btn btn-primary" @onclick="ShowModal">Open Custom Modal</button>

<ModalDialog IsVisible="showCustomModal" OnClose="HandleModalClose">
    <HeaderContent>
        <h5 class="modal-title">Custom Blazor Modal Title</h5>
    </HeaderContent>
    <BodyContent>
        <p>This is the main content of our custom modal dialog.</p>
        <p>You can put any HTML or other Blazor components here.</p>
        <img src="https://via.placeholder.com/150" alt="Placeholder" class="img-fluid" />
    </BodyContent>
    <FooterContent>
        <button type="button" class="btn btn-secondary" @onclick="HandleModalClose">Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
    </FooterContent>
</ModalDialog>

@code {
    private bool showCustomModal = false;

    private void ShowModal()
    {
        showCustomModal = true;
    }

    private void HandleModalClose()
    {
        showCustomModal = false;
    }
}
```

#### Assessment idea
1.  **Question:** You are building a `DashboardWidget` component that needs to display different content based on its purpose (e.g., a "Sales Summary" widget, a "User Activity" widget). The widget itself should provide a consistent border, title styling, and a refresh button. How would you design this `DashboardWidget` component to allow its consumers to inject only the specific content for the widget's body, while keeping the title and refresh button consistent? Provide the parameter definition in the `DashboardWidget.razor` component.
    *   **Correct Answer:** You would use the `ChildContent` parameter, which is of type `RenderFragment`. This allows the consumer to place any arbitrary UI content directly between the `DashboardWidget` tags. The `DashboardWidget` component would then render this `ChildContent` in its body section.
        ```csharp
        // DashboardWidget.razor
        <div class="widget-container">
            <div class="widget-header">
                <h3>@Title</h3>
                <button @onclick="RefreshData">Refresh</button>
            </div>
            <div class="widget-body">
                @ChildContent // This is where the consumer's content goes
            </div>
        </div>

        @code {
            [Parameter]
            public string Title { get; set; }

            [Parameter]
            public RenderFragment ChildContent { get; set; } // The key parameter

            [Parameter]
            public EventCallback OnRefresh { get; set; }

            private async Task RefreshData()
            {
                if (OnRefresh.HasDelegate)
                {
                    await OnRefresh.InvokeAsync();
                }
            }
        }
        ```

2.  **Question:** Explain the difference between `RenderFragment` and `RenderFragment<TValue>`. Provide a scenario where `RenderFragment<TValue>` would be essential and demonstrate its usage with a simple example.
    *   **Correct Answer:**
        *   **`RenderFragment`** is a delegate that represents a block of UI content without any context. It's used when the component simply needs to host arbitrary content provided by its parent, like a generic container or wrapper (e.g., `ChildContent`).
        *   **`RenderFragment<TValue>`** is a generic delegate that also represents a block of UI content, but it allows the component to pass a context object of type `TValue` to that content. This is essential when the component is iterating over a collection and needs the parent to define how *each individual item* in that collection should be rendered.
        *   **Scenario and Example:** A `DataTable` component that displays a list of objects. The `DataTable` itself handles sorting, pagination, and the table structure, but the consumer needs to define how each row (representing an item of type `TItem`) should be rendered.
            ```csharp
            // DataTable.razor
            @typeparam TItem

            <table>
                <thead>
                    <tr><th>Item Details</th></tr>
                </thead>
                <tbody>
                    @foreach (var item in Items)
                    {
                        <tr>
                            <td>@RowTemplate(item)</td> @* Pass 'item' as context *@
                        </tr>
                    }
                </tbody>
            </table>

            @code {
                [Parameter]
                public IEnumerable<TItem> Items { get; set; }

                [Parameter]
                public RenderFragment<TItem> RowTemplate { get; set; } // Essential for item-specific rendering
            }

            // Usage in a parent component
            <DataTable Items="myUsers">
                <RowTemplate Context="user"> @* 'user' is the TItem context object *@
                    <div>
                        <strong>@user.FirstName @user.LastName</strong> - @user.Email
                    </div>
                </RowTemplate>
            </DataTable>

            @code {
                private List<User> myUsers = new List<User>
                {
                    new User { FirstName = "Alice", LastName = "Smith", Email = "alice@example.com" },
                    new User { FirstName = "Bob", LastName = "Johnson", Email = "bob@example.com" }
                };

                public class User { public string FirstName { get; set; } public string LastName { get; set; } public string Email { get; set; } }
            }
            ```

#### AI generation note
Create a 10-minute live coding video. Begin by explaining the concept of templated components with a simple analogy (e.g., a picture frame vs. the picture). First, demonstrate `ChildContent` by building a `Panel` component that takes arbitrary content. Then, introduce `RenderFragment<TValue>` by refactoring a hardcoded list of products into a `ProductList` component that takes an `ItemTemplate` parameter. Show how the `Context` attribute is used. Highlight the flexibility gained by the consumer of these components. Include side-by-side code and browser output. End with a reflection prompt asking learners to identify a component in their own projects that could benefit from templating.

---

### Chapter 5.4 — Authentication and Authorization in Blazor

#### Learning objectives
*   Differentiate between authentication (who you are) and authorization (what you can do) in Blazor applications.
*   Implement `AuthenticationStateProvider` to manage and provide user authentication state.
*   Utilize the `AuthorizeView` component to conditionally render UI based on user authentication and authorization status.
*   Apply the `[Authorize]` attribute to components and pages to restrict access.
*   Understand and work with `CascadingAuthenticationState` for efficient state propagation.
*   Configure role-based authorization to control access based on user roles.

#### Detailed lesson content
Building secure web applications requires robust mechanisms for both authentication and authorization. In Blazor, these concepts are distinct but work hand-in-hand. **Authentication** is the process of verifying who a user is (e.g., by checking a username and password). **Authorization** is the process of determining what an authenticated user is allowed to do or access within the application. Blazor provides built-in features and patterns to integrate with various authentication systems and implement fine-grained authorization rules.

The cornerstone of authentication in Blazor is the `AuthenticationStateProvider`. This abstract class defines a single method, `GetAuthenticationStateAsync()`, which returns an `AuthenticationState` object. This object contains a `ClaimsPrincipal`, which represents the currently authenticated user and their associated claims (e.g., username, email, roles). You typically implement a custom `AuthenticationStateProvider` that integrates with your chosen authentication system (e.g., ASP.NET Core Identity, Azure AD B2C, JWT tokens). For Blazor Server, the authentication state is derived from the ASP.NET Core authentication middleware. For Blazor WebAssembly, you often implement a custom provider that fetches and validates tokens from an API.

Once an `AuthenticationStateProvider` is configured and registered, you can access the authentication state throughout your application. The most common way to consume this state is by cascading it down the component tree using `CascadingAuthenticationState`. This component wraps your application's main router or layout, making the `AuthenticationState` available as a cascading parameter to all descendant components. This avoids the need to inject `AuthenticationStateProvider` into every component and manually await `GetAuthenticationStateAsync()`.

```csharp
// In your App.razor (or MainLayout.razor for Blazor Server)
<CascadingAuthenticationState>
    <Router AppAssembly="@typeof(Program).Assembly">
        <Found Context="routeData">
            <AuthorizeRouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />
        </Found>
        <NotFound>
            <LayoutView Layout="@typeof(MainLayout)">
                <p>Sorry, there's nothing at this address.</p>
            </LayoutView>
        </NotFound>
    </Router>
</CascadingAuthenticationState>
```
The `AuthorizeView` component is your primary tool for conditionally rendering UI based on the user's authentication and authorization status. It provides different `RenderFragment`s for `Authorized`, `NotAuthorized`, and optionally `Authorizing` states. You can specify policies, roles, or even custom authorization logic directly within `AuthorizeView`.

```csharp
// Example using AuthorizeView
<AuthorizeView>
    <Authorized>
        <p>Hello, <b>@context.User.Identity.Name</b>! You are authorized.</p>
        <button @onclick="Logout">Logout</button>
    </Authorized>
    <NotAuthorized>
        <p>You are not logged in. Please <a href="/login">login</a>.</p>
    </NotAuthorized>
    <Authorizing>
        <p>Checking authorization...</p>
    </Authorizing>
</AuthorizeView>

<AuthorizeView Roles="Admin">
    <Authorized>
        <p>Welcome, Admin! You have special privileges.</p>
    </Authorized>
    <NotAuthorized>
        <p>You must be an Admin to see this content.</p>
    </NotAuthorized>
</AuthorizeView>
```
For restricting access to entire pages or components, the `[Authorize]` attribute is used. When applied to a `@page` directive or a component class, it ensures that only authenticated users can access that route or component. If an unauthenticated user tries to access an authorized page, Blazor's `AuthorizeRouteView` (used in `App.razor`) will redirect them to a configured login page. You can also specify roles or policies with the `[Authorize]` attribute, such as `[Authorize(Roles = "Admin,Manager")]` or `[Authorize(Policy = "RequireElevatedRights")]`.

```csharp
// Example: Authorize attribute on a page
@page "/admin-dashboard"
@attribute [Authorize(Roles = "Admin")]

<h3>Admin Dashboard</h3>
<p>Only administrators can view this page.</p>
```
For role-based authorization, you define roles (e.g., "Admin", "User", "Editor") within your authentication system. When a user authenticates, these roles are included as claims in their `ClaimsPrincipal`. You then use `AuthorizeView Roles="Admin"` or `[Authorize(Roles = "Admin")]` to restrict access. For more complex scenarios, you can define custom authorization policies in your `Program.cs` (or `Startup.cs` for older projects) and then reference them by name.

Common mistakes include not registering the `AuthenticationStateProvider` correctly in `Program.cs` (or `Startup.cs`), forgetting to wrap the `Router` with `CascadingAuthenticationState`, or not handling the `NotAuthorized` content in `AuthorizeView`, leading to a blank screen for unauthorized users. Another pitfall is mixing client-side (Blazor WebAssembly) and server-side (Blazor Server) authentication concepts, as their implementations can differ significantly regarding token handling and state persistence. Always ensure that sensitive data and actions are also protected on the backend API, as client-side authorization is only for UI presentation and can be bypassed.

#### Key concepts
*   **Authentication:** The process of verifying a user's identity.
*   **Authorization:** The process of determining what an authenticated user is allowed to do.
*   **`AuthenticationStateProvider`:** An abstract class that provides the authentication state (including the `ClaimsPrincipal`) of the current user.
*   **`AuthenticationState`:** An object containing the `ClaimsPrincipal` for the current user.
*   **`ClaimsPrincipal`:** Represents the security context of the current user, including their identity and claims (e.g., roles, permissions).
*   **`CascadingAuthenticationState`:** A component that makes the `AuthenticationState` available as a cascading parameter to all descendant components, avoiding direct `AuthenticationStateProvider` injection.
*   **`AuthorizeView`:** A Blazor component used to conditionally render UI content based on the user's authentication and authorization status.
*   **`[Authorize]` attribute:** An attribute applied to components or pages to restrict access to authenticated users, or users with specific roles/policies.
*   **`AuthorizeRouteView`:** A component used in `App.razor` that handles routing for authorized pages and redirects unauthorized users.
*   **Role-Based Authorization:** Granting or denying access based on the roles assigned to a user (e.g., "Admin", "Editor").

#### Hands-on activity
**Activity: Implementing Basic In-Memory Authentication and Authorization**

You will create a simplified in-memory `AuthenticationStateProvider` to simulate user login/logout and then use `AuthorizeView` and `[Authorize]` to protect parts of your application.

1.  **Create a custom `AuthenticationStateProvider`:**
    *   Create a class `CustomAuthenticationStateProvider.cs` that inherits from `AuthenticationStateProvider`.
    *   Implement `GetAuthenticationStateAsync` to return an `AuthenticationState` with a `ClaimsPrincipal` for a "logged in" user (e.g., "testuser" with "User" and "Admin" roles) or an "anonymous" user.
    *   Add methods `MarkUserAsAuthenticated` and `MarkUserAsLoggedOut` that notify the framework of changes in authentication state using `NotifyAuthenticationStateChanged`.

    ```csharp
    // CustomAuthenticationStateProvider.cs
    using System.Security.Claims;
    using Microsoft.AspNetCore.Components.Authorization;

    public class CustomAuthenticationStateProvider : AuthenticationStateProvider
    {
        private ClaimsPrincipal anonymous = new ClaimsPrincipal(new ClaimsIdentity());

        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            // Simulate checking for a stored token or session
            await Task.Delay(500); // Simulate async operation

            // In a real app, you'd check cookies, local storage, etc.
            // For this demo, we'll start as anonymous.
            return await Task.FromResult(new AuthenticationState(anonymous));
        }

        public void MarkUserAsAuthenticated(string username, string[] roles)
        {
            var identity = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(ClaimTypes.Email, $"{username}@example.com")
            }, "CustomAuth");

            foreach (var role in roles)
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, role));
            }

            var user = new ClaimsPrincipal(identity);
            NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(user)));
        }

        public void MarkUserAsLoggedOut()
        {
            NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(anonymous)));
        }
    }
    ```
2.  **Register the `AuthenticationStateProvider`:**
    *   In `Program.cs` (Blazor WebAssembly) or `Startup.cs` (Blazor Server), register your `CustomAuthenticationStateProvider` and `AuthenticationStateProvider` as a scoped service.
    *   Add `builder.Services.AddAuthorizationCore();`

    ```csharp
    // Program.cs (Blazor WebAssembly)
    // ...
    builder.Services.AddScoped<AuthenticationStateProvider, CustomAuthenticationStateProvider>();
    builder.Services.AddAuthorizationCore(); // Important!
    // ...
    ```
3.  **Update `App.razor`:**
    *   Wrap the `<Router>` with `<CascadingAuthenticationState>`.
    *   Change `<RouteView>` to `<AuthorizeRouteView>` and add `DefaultLayout="@typeof(MainLayout)"`.

    ```csharp
    // App.razor
    <CascadingAuthenticationState>
        <Router AppAssembly="@typeof(Program).Assembly">
            <Found Context="routeData">
                <AuthorizeRouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)">
                    <NotAuthorized>
                        @* Optional: Custom content for unauthorized access to a page *@
                        <p>You are not authorized to view this page. Please log in.</p>
                    </NotAuthorized>
                </AuthorizeRouteView>
            </Found>
            <NotFound>
                <LayoutView Layout="@typeof(MainLayout)">
                    <p>Sorry, there's nothing at this address.</p>
                </LayoutView>
            </NotFound>
        </Router>
    </CascadingAuthenticationState>
    ```
4.  **Create a `LoginLogout.razor` component/page:**
    *   Inject `CustomAuthenticationStateProvider`.
    *   Include buttons for "Login as User", "Login as Admin", and "Logout".
    *   Use `AuthorizeView` to display different content based on login status.
    *   Call the `MarkUserAsAuthenticated` and `MarkUserAsLoggedOut` methods.

    ```csharp
    @page "/auth-demo"
    @inject CustomAuthenticationStateProvider CustomAuthStateProvider
    @attribute [CascadingParameter] private Task<AuthenticationState> authenticationStateTask { get; set; }

    <h3>Authentication & Authorization Demo</h3>

    <AuthorizeView>
        <Authorized>
            <p>Hello, <b>@context.User.Identity.Name</b>! You are logged in.</p>
            <p>Your roles: @string.Join(", ", context.User.Claims.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value))</p>
            <button class="btn btn-warning" @onclick="Logout">Logout</button>
        </Authorized>
        <NotAuthorized>
            <p>You are not logged in.</p>
            <button class="btn btn-primary" @onclick="LoginAsUser">Login as User</button>
            <button class="btn btn-info" @onclick="LoginAsAdmin">Login as Admin</button>
        </NotAuthorized>
    </AuthorizeView>

    <h4 class="mt-4">Protected Content:</h4>

    <AuthorizeView Roles="User">
        <Authorized>
            <div class="alert alert-success">
                <p>You are a <b>User</b> and can see this content.</p>
            </div>
        </Authorized>
        <NotAuthorized>
            <div class="alert alert-danger">
                <p>You must be a <b>User</b> to see this content.</p>
            </div>
        </NotAuthorized>
    </AuthorizeView>

    <AuthorizeView Roles="Admin">
        <Authorized>
            <div class="alert alert-success">
                <p>You are an <b>Admin</b> and can see this content.</p>
            </div>
        </Authorized>
        <NotAuthorized>
            <div class="alert alert-danger">
                <p>You must be an <b>Admin</b> to see this content.</p>
            </div>
        </NotAuthorized>
    </AuthorizeView>

    @code {
        private async Task LoginAsUser()
        {
            CustomAuthStateProvider.MarkUserAsAuthenticated("john.doe", new[] { "User" });
        }

        private async Task LoginAsAdmin()
        {
            CustomAuthStateProvider.MarkUserAsAuthenticated("admin.user", new[] { "User", "Admin" });
        }

        private async Task Logout()
        {
            CustomAuthStateProvider.MarkUserAsLoggedOut();
        }
    }
    ```
5.  **Create a `SecretPage.razor`:**
    *   Apply `[Authorize(Roles = "Admin")]` to restrict access.

    ```csharp
    @page "/secret-admin-page"
    @attribute [Authorize(Roles = "Admin")]

    <h3>Secret Admin Page</h3>
    <p>This content is only visible to users with the 'Admin' role.</p>
    ```
    Test by logging in as different users and observing access to content and pages.

#### Assessment idea
1.  **Question:** You have a Blazor component that should only display a "Delete" button if the logged-in user has the "Administrator" role. If the user is logged in but does not have the "Administrator" role, the button should not be visible. If the user is not logged in at all, a "Please Log In" message should appear instead. How would you implement this UI logic using Blazor's authorization features? Provide a code snippet.
    *   **Correct Answer:** You would use the `AuthorizeView` component, leveraging its `Roles` parameter and `Authorized` and `NotAuthorized` sections.
        ```csharp
        <AuthorizeView Roles="Administrator">
            <Authorized>
                <button class="btn btn-danger">Delete Item</button>
            </Authorized>
            <NotAuthorized>
                @* This section runs if user is NOT an Administrator,
                   regardless of whether they are authenticated or not. *
                <AuthorizeView> @* Nested AuthorizeView to check general authentication status *
                    <Authorized>
                        <p>You do not have permission to delete this item.</p>
                    </Authorized>
                    <NotAuthorized>
                        <p>Please log in to perform actions.</p>
                    </NotAuthorized>
                </AuthorizeView>
            </NotAuthorized>
        </AuthorizeView>
        ```
        Alternatively, and often more simply for the "NotAuthorized" case:
        ```csharp
        <AuthorizeView>
            <Authorized>
                @if (context.User.IsInRole("Administrator"))
                {
                    <button class="btn btn-danger">Delete Item</button>
                }
                else
                {
                    <p>You do not have permission to delete this item.</p>
                }
            </Authorized>
            <NotAuthorized>
                <p>Please log in to perform actions.</p>
            </NotAuthorized>
        </AuthorizeView>
        ```

2.  **Question:** Describe the primary purpose of the `[Authorize]` attribute when applied to a Blazor page (`@page` directive) compared to using `AuthorizeView` within the page's content. What happens if an unauthenticated user tries to navigate to a page protected by `[Authorize]`?
    *   **Correct Answer:** The `[Authorize]` attribute, when applied to a Blazor page, provides **page-level authorization**. Its primary purpose is to restrict *access to the entire page or component* before it even starts rendering. If an unauthenticated user tries to navigate to a page protected by `[Authorize]`, Blazor's `AuthorizeRouteView` (configured in `App.razor`) will intercept the navigation and automatically redirect the user to a configured login page (or display the `NotAuthorized` content defined within `AuthorizeRouteView` in `App.razor`). In contrast, `AuthorizeView` is used for **component-level or UI-segment authorization**, allowing you to conditionally render *parts of a page's UI* based on the user's authorization status, even if the user has access to the page itself.

#### AI generation note
Create a 15-minute live coding video. Start by explaining authentication vs. authorization with a real-world analogy (e.g., airport security). Then, guide the learner through creating `CustomAuthenticationStateProvider.cs` and registering it in `Program.cs`. Demonstrate updating `App.razor` with `CascadingAuthenticationState` and `AuthorizeRouteView`. Build the `LoginLogout.razor` page, showing how `AuthorizeView` reacts to different login states and roles. Finally, create `SecretPage.razor` and apply the `[Authorize]` attribute, demonstrating how access is restricted and the user is redirected or shown `NotAuthorized` content when attempting to navigate to it without proper roles. Use browser developer tools to show the `ClaimsPrincipal` details.

---

### Chapter 5.5 — Advanced Routing and Deep Linking

#### Learning objectives
*   Master the use of route constraints to enforce data types for route parameters.
*   Implement optional route parameters for flexible URL structures.
*   Utilize `NavLink` with advanced matching options for dynamic active link styling.
*   Perform programmatic navigation using `NavigationManager` to control application flow.
*   Handle and process query string parameters for stateful navigation.
*   Understand how to work with browser history and deep linking in Blazor.

#### Detailed lesson content
While basic routing in Blazor allows you to map URLs to components, real-world applications often require more sophisticated routing capabilities. Advanced routing features enable more flexible, robust, and user-friendly URL structures, supporting scenarios like optional parameters, data type validation, and dynamic link styling.

**Route constraints** are a powerful way to ensure that route parameters match specific data types. By default, route parameters are treated as strings. However, you can enforce types like `int`, `guid`, `datetime`, `bool`, `float`, `decimal`, `long`, `double`, and `alpha` (for alphabetic characters only). This is done by appending a colon and the type name to the parameter in the `@page` directive. For example, `@page "/products/{id:int}"` ensures that `id` must be an integer. If the URL segment for `id` cannot be parsed as an integer, Blazor's router will not match that route, and the `NotFound` content will be displayed. This helps prevent invalid data from reaching your components and simplifies parameter parsing logic.

**Optional route parameters** allow parts of a URL to be present or absent. This is indicated by adding a question mark `?` after the parameter name. For example, `@page "/products/{category?}/{id:int}"` means that the `category` segment is optional. If the category is not provided in the URL (e.g., `/products/123`), the `category` parameter in your component will be `null`. This is useful for creating flexible URLs where some filters or identifiers might not always be present. You can even make the entire route segment optional, like `/products/{category:alpha?}/{id:int?}`.

```csharp
// ProductDetail.razor
@page "/products/{id:int}"
@page "/products/{category:alpha}/{id:int}"
@page "/products/{category:alpha?}" // Optional category, no ID

<h3>Product Details</h3>

@if (Id.HasValue)
{
    <p>Product ID: @Id</p>
    <p>Category: @(Category ?? "N/A")</p>
}
else if (!string.IsNullOrEmpty(Category))
{
    <p>Displaying products for category: @Category</p>
}
else
{
    <p>No specific product or category selected.</p>
}

@code {
    [Parameter]
    public int? Id { get; set; }

    [Parameter]
    public string Category { get; set; }
}
```
**`NavLink`** is Blazor's specialized component for creating navigation links. Unlike a regular `<a>` tag, `NavLink` automatically applies an `active` CSS class to the link when its `href` matches the current URL. This is crucial for highlighting the currently active page in navigation menus. For more control over matching, `NavLink` provides the `Match` attribute, which can be set to `NavLinkMatch.All` or `NavLinkMatch.Prefix`. `Match.Prefix` (the default) matches if the `href` is a prefix of the current URL. `Match.All` requires an exact match. Use `Match.All` for specific pages like a "Home" link, and `Match.Prefix` for parent routes like a "Products" link that should remain active for `/products/1` or `/products/category`.

```csharp
<nav>
    <NavLink href="/" Match="NavLinkMatch.All">Home</NavLink>
    <NavLink href="/products" Match="NavLinkMatch.Prefix">Products</NavLink>
    <NavLink href="/products/electronics/101">Product 101 (Electronics)</NavLink>
</nav>
```
**Programmatic navigation** allows you to navigate to different routes from your C# code, which is essential for handling form submissions, redirects after an action, or dynamic navigation based on user input. The `NavigationManager` service is injected into your component and provides methods like `NavigateTo(string uri, bool forceLoad = false, bool replace = false)`. `NavigateTo` changes the current URL. `forceLoad = true` forces a full page reload, bypassing Blazor's client-side routing (useful for external links or refreshing the entire app). `replace = true` replaces the current entry in the browser's history stack instead of adding a new one (useful for login redirects where you don't want the user to be able to go "back" to the login page).

```csharp
@inject NavigationManager NavManager

<button @onclick="GoToHomePage">Go to Home</button>
<button @onclick="GoToProduct">Go to Product 456</button>

@code {
    private void GoToHomePage()
    {
        NavManager.NavigateTo("/");
    }

    private void GoToProduct()
    {
        NavManager.NavigateTo("/products/electronics/456");
    }
}
```
**Query string parameters** are another way to pass data between pages without making them part of the route itself. They are appended to the URL after a `?` (e.g., `/search?query=blazor&page=1`). While Blazor doesn't automatically bind query string parameters to component parameters like route parameters, you can easily access them via the `NavigationManager.Uri` property or by parsing `NavigationManager.ToBaseRelativePath(NavManager.Uri)`. A more convenient way is to use a helper method or a custom route attribute that extracts them, or simply parse `NavigationManager.Uri` manually in `OnInitializedAsync`.

```csharp
// SearchResults.razor
@page "/search"
@inject NavigationManager NavManager

<h3>Search Results</h3>
<p>Search Query: @SearchQuery</p>
<p>Page Number: @Page</p>

@code {
    public string SearchQuery { get; set; }
    public int Page { get; set; } = 1;

    protected override void OnInitialized()
    {
        var uri = NavManager.ToAbsoluteUri(NavManager.Uri);
        var queryParams = System.Web.HttpUtility.ParseQueryString(uri.Query);

        SearchQuery = queryParams["query"];
        if (int.TryParse(queryParams["page"], out int pageNum))
        {
            Page = pageNum;
        }
    }
}
```
Understanding browser history and deep linking is crucial. Blazor's client-side routing manipulates the browser's history API, allowing users to use the back/forward buttons. Deep linking means that any valid URL in your Blazor application should be directly accessible by typing it into the browser or sharing it, and Blazor will correctly render the corresponding component. This is handled automatically by Blazor's routing system, provided your `index.html` (or `_Host.cshtml`) is configured to catch all unknown routes and pass them to Blazor.

Common mistakes include incorrect route constraint syntax, leading to routes not matching. Forgetting `Match.All` for exact `NavLink` matches can cause multiple navigation items to appear active. When using `NavigationManager.NavigateTo`, be aware that it might not trigger a full component re-initialization if the route is the same but query parameters change; you might need to manually re-fetch data in `OnParametersSetAsync` or `OnInitializedAsync` by checking `NavManager.Uri` changes. Always test your routes thoroughly with various inputs to ensure they behave as expected.

#### Key concepts
*   **Route Constraints:** Rules applied to route parameters (e.g., `:int`, `:alpha`, `:guid`) to enforce specific data types and improve route matching.
*   **Optional Parameters:** Route parameters marked with `?` (e.g., `{id?}`) that can be omitted from the URL, providing routing flexibility.
*   **`NavLink`:** A Blazor component for creating navigation links that automatically apply an `active` CSS class when matching the current URL.
*   **`NavLinkMatch.All`:** `NavLink` match option requiring an exact match between the `href` and the current URL.
*   **`NavLinkMatch.Prefix`:** `NavLink` match option (default) that matches if the `href` is a prefix of the current URL.
*   **`NavigationManager`:** A Blazor service for programmatic navigation, allowing C# code to change the current URL.
*   **`NavigateTo()`:** A method of `NavigationManager` used to programmatically navigate to a specified URI.
*   **`forceLoad`:** A parameter in `NavigateTo` that, when `true`, forces a full page reload instead of client-side routing.
*   **`replace`:** A parameter in `NavigateTo` that, when `true`, replaces the current entry in the browser history.
*   **Query String Parameters:** Key-value pairs appended to a URL after a `?` (e.g., `?key=value`) for passing additional, non-route-specific data.
*   **Deep Linking:** The ability to access any specific page within a web application directly via its URL.

#### Hands-on activity
**Activity: Building a Filterable Product List with Advanced Routing**

You will create a product listing page that uses route constraints, optional parameters, programmatic navigation, and query strings for filtering.

1.  **Create a `ProductList.razor` component/page:**
    *   Define multiple `@page` directives to support different routing patterns:
        *   `/products` (no category, no filter)
        *   `/products/{category:alpha}` (with category, no filter)
        *   `/products/{category:alpha?}/{page:int}` (with optional category and page number)
    *   Inject `NavigationManager`.
    *   Add `[Parameter]` properties for `Category` (string) and `Page` (int, default to 1).
    *   In `OnInitializedAsync` (or `OnParametersSetAsync`), simulate fetching products based on the `Category` and `Page` parameters.
    *   Also, extract a `search` query string parameter from `NavigationManager.Uri` to apply an additional filter.
    *   Display the current category, page, and search query.
    *   Include `NavLink` elements for different categories, using `Match.Prefix` for category links.
    *   Add a simple search input and button that uses `NavigationManager.NavigateTo` to update the URL with a query string.
    *   Add "Next Page" and "Previous Page" buttons that use `NavigationManager.NavigateTo` to update the `page` route parameter.

**Starter Code for `ProductList.razor`:**
```csharp
@page "/products"
@page "/products/{category:alpha}"
@page "/products/{category:alpha?}/{page:int}"
@inject NavigationManager NavManager

<h3>Product Listing</h3>

<p>Current Category: <strong>@(Category ?? "All")</strong></p>
<p>Current Page: <strong>@Page</strong></p>
<p>Search Query: <strong>@(SearchQuery ?? "None")</strong></p>

<div class="mb-3">
    <input type="text" @bind="currentSearchTerm" placeholder="Search products..." />
    <button class="btn btn-sm btn-primary" @onclick="ApplySearch">Search</button>
</div>

<div class="mb-3">
    <h4>Categories:</h4>
    <NavLink class="btn btn-outline-secondary me-2" href="/products" Match="NavLinkMatch.All">All Products</NavLink>
    <NavLink class="btn btn-outline-secondary me-2" href="/products/electronics" Match="NavLinkMatch.Prefix">Electronics</NavLink>
    <NavLink class="btn btn-outline-secondary me-2" href="/products/books" Match="NavLinkMatch.Prefix">Books</NavLink>
    <NavLink class="btn btn-outline-secondary me-2" href="/products/clothing" Match="NavLinkMatch.Prefix">Clothing</NavLink>
</div>

<div class="mt-4">
    <h4>Products:</h4>
    @if (products.Any())
    {
        <ul>
            @foreach (var product in products)
            {
                <li>@product</li>
            }
        </ul>
    }
    else
    {
        <p>No products found for this selection.</p>
    }
</div>

<div class="mt-4">
    <button class="btn btn-secondary" @onclick="GoToPreviousPage" disabled="@(Page <= 1)">Previous Page</button>
    <button class="btn btn-secondary" @onclick="GoToNextPage">Next Page</button>
</div>

@code {
    [Parameter]
    public string Category { get; set; }

    [Parameter]
    public int Page { get; set; } = 1;

    public string SearchQuery { get; set; }
    private string currentSearchTerm;

    private List<string> allProducts = new List<string>
    {
        "Laptop (Electronics)", "Smartphone (Electronics)", "Headphones (Electronics)",
        "The Lord of the Rings (Books)", "Pride and Prejudice (Books)", "1984 (Books)",
        "T-Shirt (Clothing)", "Jeans (Clothing)", "Jacket (Clothing)"
    };
    private List<string> products = new List<string>();

    protected override void OnInitialized()
    {
        // Set initial search term from query string if present
        var uri = NavManager.ToAbsoluteUri(NavManager.Uri);
        var queryParams = System.Web.HttpUtility.ParseQueryString(uri.Query);
        currentSearchTerm = queryParams["search"];
    }

    protected override async Task OnParametersSetAsync()
    {
        // This method is called when parameters change (e.g., Category or Page)
        // or when the component is initialized.
        Console.WriteLine($"ProductList: OnParametersSetAsync - Category: {Category}, Page: {Page}");

        var uri = NavManager.ToAbsoluteUri(NavManager.Uri);
        var queryParams = System.Web.HttpUtility.ParseQueryString(uri.Query);
        SearchQuery = queryParams["search"];

        await LoadProducts();
    }

    private async Task LoadProducts()
    {
        // Simulate API call
        await Task.Delay(200);

        var filtered = allProducts.AsEnumerable();

        if (!string.IsNullOrEmpty(Category))
        {
            filtered = filtered.Where(p => p.Contains($"({Category})", StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrEmpty(SearchQuery))
        {
            filtered = filtered.Where(p => p.Contains(SearchQuery, StringComparison.OrdinalIgnoreCase));
        }

        // Simulate pagination (very basic)
        int pageSize = 3;
        products = filtered.Skip((Page - 1) * pageSize).Take(pageSize).ToList();
    }

    private void ApplySearch()
    {
        var uriBuilder = new UriBuilder(NavManager.ToAbsoluteUri(NavManager.Uri));
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);

        if (!string.IsNullOrEmpty(currentSearchTerm))
        {
            query["search"] = currentSearchTerm;
        }
        else
        {
            query.Remove("search");
        }
        uriBuilder.Query = query.ToString();

        NavManager.NavigateTo(uriBuilder.Uri.PathAndQuery);
    }

    private void GoToNextPage()
    {
        var currentUri = NavManager.ToBaseRelativePath(NavManager.Uri);
        var newUri = $"/products/{Category ?? ""}/{Page + 1}";
        if (!string.IsNullOrEmpty(SearchQuery))
        {
            newUri += $"?search={SearchQuery}";
        }
        NavManager.NavigateTo(newUri);
    }

    private void GoToPreviousPage()
    {
        if (Page > 1)
        {
            var currentUri = NavManager.ToBaseRelativePath(NavManager.Uri);
            var newUri = $"/products/{Category ?? ""}/{Page - 1}";
            if (!string.IsNullOrEmpty(SearchQuery))
            {
                newUri += $"?search={SearchQuery}";
            }
            NavManager.NavigateTo(newUri);
        }
    }
}
```

#### Assessment idea
1.  **Question:** You are designing a Blazor application with a user profile page. This page can be accessed in two ways: `/profile` (to view the current user's profile) or `/profile/{userId:guid}` (to view a specific user's profile by their GUID). How would you define the `@page` directives for the `UserProfile.razor` component to support both scenarios, and how would you access the `userId` parameter within the component?
    *   **Correct Answer:** You would define two `@page` directives, one for the base path and one with an optional `guid` parameter.
        ```csharp
        // UserProfile.razor
        @page "/profile"
        @page "/profile/{userId:guid}"

        <h3>User Profile</h3>
        @if (UserId.HasValue)
        {
            <p>Viewing profile for user ID: @UserId</p>
        }
        else
        {
            <p>Viewing current user's profile.</p>
        }

        @code {
            [Parameter]
            public Guid? UserId { get; set; } // Use nullable Guid for optional parameter

            protected override void OnParametersSet()
            {
                // Logic to load user data based on UserId or current user
                if (UserId.HasValue)
                {
                    Console.WriteLine($"Loading profile for: {UserId.Value}");
                }
                else
                {
                    Console.WriteLine("Loading current user's profile.");
                }
            }
        }
        ```

2.  **Question:** Explain the difference between `NavLinkMatch.All` and `NavLinkMatch.Prefix` for the `NavLink` component. Provide a scenario where `NavLinkMatch.Prefix` would be more appropriate than `NavLinkMatch.All`, and vice-versa.
    *   **Correct Answer:**
        *   **`NavLinkMatch.All`**: This option requires an *exact match* between the `href` of the `NavLink` and the current URL. It's suitable for single, specific pages.
        *   **`NavLinkMatch.Prefix`**: This option matches if the `href` of the `NavLink` is a *prefix* of the current URL. It's suitable for navigation items that represent a section or category, where multiple sub-pages should keep the parent link active.

        *   **Scenario for `NavLinkMatch.Prefix`:** A navigation menu for an e-commerce site. You have a "Products" link (`href="/products"`) and various sub-pages like `/products/electronics`, `/products/clothing`, `/products/123`. Using `Match="NavLinkMatch.Prefix"` for the "Products" link ensures that it remains active even when the user navigates to any of its sub-pages, indicating they are still within the "Products" section.
            ```html
            <NavLink href="/products" Match="NavLinkMatch.Prefix">Products</NavLink>
            ```
        *   **Scenario for `NavLinkMatch.All`:** A "Home" link (`href="/"`) should only be active when the user is precisely on the root URL. If the user navigates to `/about` or `/contact`, the "Home" link should no longer be active.
            ```html
            <NavLink href="/" Match="NavLinkMatch.All">Home</NavLink>
            ```

#### AI generation note
Create a 12-minute live coding video. Start with a basic `ProductList.razor` component. First, demonstrate route constraints by adding `/products/{id:int}` and showing how invalid IDs result in `NotFound`. Then, introduce optional parameters like `{category:alpha?}`. Next, show the `NavLink` component with `Match.All` and `Match.Prefix` in a navigation menu, highlighting the active class changes. Finally, implement the search functionality using `NavigationManager.NavigateTo` to update query strings and the pagination logic to update route parameters. Show the URL changes in the browser and the component reacting to them. Include a split-screen view of the code and the browser.

---

## Module 6: Building a Practical Blazor Application

This module guides you through the exciting process of building a complete, practical Blazor application from the ground up. You will integrate all the concepts learned in previous modules, from component fundamentals and data binding to routing and API communication, into a cohesive, functional project. By the end of this module, you will have the confidence and skills to tackle your own Blazor application development challenges, understanding the full lifecycle from initial setup to deployment.

---

### Chapter 6.1 — Project Setup and Initial Structure

#### Learning objectives
*   Set up a new Blazor Web App project using the .NET CLI or Visual Studio.
*   Understand the purpose and interaction of the `Client`, `Server`, and `Shared` projects within a Blazor Web App solution.
*   Configure essential services and dependencies for a full-stack Blazor application.
*   Design and implement a basic application layout and navigation structure.
*   Identify and troubleshoot common initial project setup issues.

#### Detailed lesson content
Welcome to the final module, where we bring everything together by building a practical Blazor application! The journey begins with setting up our project, which is the foundation upon which all our features will be built. For modern Blazor development, especially when combining Blazor WebAssembly and Blazor Server capabilities with a .NET backend, the "Blazor Web App" template is your go-to choice. This template, often referred to as "Blazor United" before its official release, provides a unified solution structure that streamlines full-stack development.

To create a new Blazor Web App project, you can use the .NET CLI. Open your terminal or command prompt and execute the following command:
```bash
dotnet new blazor -o BlazorProjectName --interactivity Auto
```
Here, `-o BlazorProjectName` specifies the output directory and project name, and `--interactivity Auto` is crucial. It configures the project to automatically determine the best rendering mode (Server or WebAssembly) for components, providing a highly flexible and performant approach. Other options include `--interactivity Server` for Blazor Server only or `--interactivity WebAssembly` for Blazor WebAssembly only. For a practical application that might leverage both, `Auto` is often the best starting point.

Once created, you'll notice a solution structure typically comprising three main projects: `BlazorProjectName.Client`, `BlazorProjectName.Server`, and `BlazorProjectName.Shared`. The `Client` project is your Blazor application itself, containing all your `.razor` components, client-side logic, and UI assets. This project can run as Blazor WebAssembly in the browser or be rendered as Blazor Server on the server, depending on the interactivity mode of specific components. The `Server` project is a standard ASP.NET Core web application. Its primary roles are to host the Blazor Client application, serve static files, provide API endpoints for data access, and potentially handle server-side rendering and Blazor Server interactivity. Finally, the `Shared` project is a class library designed to hold common code, such as data models, DTOs (Data Transfer Objects), and shared utility classes, that need to be accessed by both the `Client` and `Server` projects. This separation ensures consistency and avoids code duplication across your full-stack application.

Configuring initial services is done primarily in the `Program.cs` files of both the `Client` and `Server` projects. In the `Server`'s `Program.cs`, you'll find services for controllers, Razor Pages, and Blazor Server interactivity already registered. This is also where you'd add services for database contexts (e.g., Entity Framework Core), authentication, and any custom backend services. For instance, to enable controller support for your API endpoints, you'll see `builder.Services.AddControllers();` and `app.MapControllers();`. In the `Client`'s `Program.cs`, you typically register `HttpClient` for making API calls to your `Server` project, and any client-side services or state management solutions. A common mistake here is forgetting to configure the base address for `HttpClient` when running in development, which can lead to failed API calls. Ensure you have something like `builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });` or a more specific base address if your API is hosted separately.

Designing the basic layout and navigation is crucial for user experience. The `MainLayout.razor` component, located in the `Client/Components/Layout` folder, defines the overall structure of your application, including headers, footers, and sidebars. It typically contains a `@Body` directive, which is where the content of the currently routed page will be rendered. The `NavMenu.razor` component, also in the `Client/Components/Layout` folder, provides the navigation links. You can customize these components using standard HTML and CSS, or integrate a UI framework like Bootstrap (which is often included by default) or a Blazor-specific component library. Remember that `NavMenu.razor` uses `NavLink` components to provide active link styling, which is a nice touch for user feedback. When building your navigation, consider the logical flow of your application and how users will move between different sections. For instance, a simple e-commerce application might have links for "Products," "Cart," and "Orders."

One common mistake developers encounter early on is confusion regarding where to place files. Data models that are used by both the client and server should always reside in the `Shared` project. Components that are purely client-side UI go into the `Client` project. API controllers and database logic belong in the `Server` project. Another common pitfall is misconfiguring the interactivity modes. If a component is intended to be interactive (e.g., respond to user clicks), it needs an `@rendermode` directive (e.g., `@rendermode InteractiveServer` or `@rendermode InteractiveWebAssembly`) either on the component itself or in a parent component/route definition. Without it, the component will be static HTML rendered from the server. Always ensure your `_Imports.razor` files in both `Client` and `Server` projects have the necessary `using` directives for common namespaces to avoid repetitive declarations.

#### Key concepts
*   **Blazor Web App Template:** A unified project template that combines Blazor WebAssembly and Blazor Server capabilities with an ASP.NET Core backend.
*   **`--interactivity Auto`:** A CLI option for Blazor Web App that configures components to automatically choose between Blazor Server and Blazor WebAssembly rendering modes.
*   **`Client` Project:** Contains the Blazor UI components, client-side logic, and static assets.
*   **`Server` Project:** An ASP.NET Core application that hosts the Blazor Client, provides API endpoints, and handles server-side rendering/Blazor Server interactivity.
*   **`Shared` Project:** A class library for common code (data models, DTOs) accessible by both `Client` and `Server` projects.
*   **`MainLayout.razor`:** The root layout component defining the overall structure of the Blazor application.
*   **`NavMenu.razor`:** A component typically used within `MainLayout.razor` to provide application navigation links.
*   **`NavLink` Component:** A Blazor component that renders an anchor tag (`<a>`) and automatically applies an `active` CSS class when its `href` matches the current URL.

#### Hands-on activity
**Activity: Initialize and Customize Your Blazor Project**

1.  **Create the Project:** Open your terminal and create a new Blazor Web App project named `MyBlazorApp` with automatic interactivity:
    ```bash
    dotnet new blazor -o MyBlazorApp --interactivity Auto
    cd MyBlazorApp
    ```
2.  **Explore the Structure:** Open the `MyBlazorApp.sln` file in Visual Studio or VS Code. Familiarize yourself with the `Client`, `Server`, and `Shared` projects.
3.  **Customize Navigation:**
    *   Open `MyBlazorApp.Client/Components/Layout/NavMenu.razor`.
    *   Remove the existing "Counter" and "Weather" links.
    *   Add a new `NavLink` for a future "Products" page. The `href` should be `/products`.
    *   Add a new `NavLink` for a future "About" page. The `href` should be `/about`.
    *   Your `NavMenu.razor` should look something like this:
        ```razor
        <div class="top-row ps-3 navbar navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">MyBlazorApp</a>
                <button title="Navigation menu" class="navbar-toggler" @onclick="ToggleNavMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>

        <div class="@NavMenuCssClass nav-scrollable" @onclick="ToggleNavMenu">
            <nav class="flex-column">
                <div class="nav-item px-3">
                    <NavLink class="nav-link" href="" Match="NavLinkMatch.All">
                        <span class="bi bi-house-door-fill-nav-menu" aria-hidden="true"></span> Home
                    </NavLink>
                </div>
                <div class="nav-item px-3">
                    <NavLink class="nav-link" href="products">
                        <span class="bi bi-grid-fill-nav-menu" aria-hidden="true"></span> Products
                    </NavLink>
                </div>
                <div class="nav-item px-3">
                    <NavLink class="nav-link" href="about">
                        <span class="bi bi-info-circle-fill-nav-menu" aria-hidden="true"></span> About
                    </NavLink>
                </div>
            </nav>
        </div>

        @code {
            private bool collapseNavMenu = true;

            private string? NavMenuCssClass => collapseNavMenu ? "collapse" : null;

            private void ToggleNavMenu()
            {
                collapseNavMenu = !collapseNavMenu;
            }
        }
        ```
4.  **Create Placeholder Pages:**
    *   In `MyBlazorApp.Client/Components/Pages`, create a new file `Products.razor` with the following content:
        ```razor
        @page "/products"
        @rendermode InteractiveWebAssembly

        <h3>Products Page</h3>
        <p>This is where our product list will go.</p>
        ```
    *   Create a new file `About.razor` with the following content:
        ```razor
        @page "/about"
        @rendermode InteractiveServer

        <h3>About Us</h3>
        <p>Learn more about our awesome Blazor application.</p>
        ```
5.  **Run and Verify:** Run the application (`dotnet run --project MyBlazorApp.Server`) and navigate through your new "Products" and "About" links. Observe the URL changes and the content rendered. Notice how one page uses `InteractiveWebAssembly` and the other `InteractiveServer`.

#### Assessment idea
1.  **Question:** You've created a new Blazor Web App. You want to define a `Product` class that will be used by both your client-side Blazor components and your server-side API. In which project should you place the `Product.cs` file to ensure proper sharing and avoid code duplication?
    *   A) `MyBlazorApp.Client`
    *   B) `MyBlazorApp.Server`
    *   C) `MyBlazorApp.Shared`
    *   D) It doesn't matter, as long as it's in the solution.

    **Correct Answer:** C) `MyBlazorApp.Shared`
    **Explanation:** The `Shared` project is specifically designed to hold common code, such as data models (like `Product`), DTOs, and utility classes, that are needed by both the client-side Blazor application and the server-side ASP.NET Core API. Placing it here ensures that both projects can reference the same definition, preventing inconsistencies and promoting maintainability.

2.  **Question:** You've added a new page component, `Settings.razor`, to your Blazor Web App. When you navigate to this page, the content appears, but any interactive elements (like a button with an `@onclick` handler) do not respond. What is the most likely reason for this behavior, and how would you fix it?

    **Correct Answer:** The most likely reason is that the `Settings.razor` component is being rendered statically from the server and does not have an active interactivity mode applied. Blazor Web App components, by default, are static unless explicitly marked for interactivity.
    **Explanation:** To fix this, you need to add an `@rendermode` directive to the `Settings.razor` component or its parent. For example, to make it interactive using Blazor WebAssembly, you would add:
    ```razor
    @page "/settings"
    @rendermode InteractiveWebAssembly

    <h3>Settings</h3>
    <button @onclick="HandleClick">Click Me</button>

    @code {
        private void HandleClick()
        {
            // Logic for the button click
        }
    }
    ```
    Alternatively, you could use `@rendermode InteractiveServer` for Blazor Server interactivity, or `@rendermode InteractiveAuto` to let Blazor decide based on available resources.

#### AI generation note
Create a 12-minute live coding video. Begin by demonstrating `dotnet new blazor -o MyBlazorApp --interactivity Auto` and explaining the output. Then, open the solution in Visual Studio, visually highlight the `Client`, `Server`, and `Shared` projects, and explain their roles with diagram overlays. Walk through modifying `NavMenu.razor` to add new links and create simple placeholder `.razor` pages (`Products.razor`, `About.razor`) in the `Client/Components/Pages` folder, explicitly showing the `@page` directive and different `@rendermode` options. Run the application and demonstrate navigation. Include a common mistake segment showing a component without `@rendermode` failing to respond to clicks, then fix it. The tone should be encouraging and hands-on. End with a reflection prompt asking learners to consider how the project structure aids in organizing a complex application.

---

### Chapter 6.2 — Data Modeling and Backend API Integration

#### Learning objectives
*   Define data models within the `Shared` project for consistent data representation across client and server.
*   Implement a simple RESTful API using ASP.NET Core controllers in the `Server` project.
*   Configure Entity Framework Core for data persistence in the `Server` project.
*   Consume data from the backend API using `HttpClient` in Blazor client components.
*   Perform basic CRUD (Create, Read, Update, Delete) operations through the integrated API.
*   Troubleshoot common issues like CORS policies and asynchronous programming errors.

#### Detailed lesson content
Now that our Blazor application has a solid structural foundation, it's time to make it dynamic by integrating with a backend for data persistence. Most real-world applications need to store and retrieve information, and for a Blazor Web App, this typically involves creating a RESTful API in the `Server` project and consuming it from the `Client` project.

Our first step is to define the data models. These models represent the structure of the data we'll be working with (e.g., a `Product`, a `Customer`, an `Order`). It's crucial that these models are consistent between the client and the server. This is where the `Shared` project becomes invaluable. By defining our data models in `MyBlazorApp.Shared`, both `MyBlazorApp.Client` and `MyBlazorApp.Server` can reference the same types, ensuring type safety and reducing potential errors. Let's create a simple `Product` model in `MyBlazorApp.Shared/Models/Product.cs`:

```csharp
// MyBlazorApp.Shared/Models/Product.cs
using System.ComponentModel.DataAnnotations;

namespace MyBlazorApp.Shared.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Product name is required.")]
        [StringLength(100, ErrorMessage = "Product name cannot exceed 100 characters.")]
        public string Name { get; set; } = string.Empty;

        [Range(0.01, 10000.00, ErrorMessage = "Price must be between $0.01 and $10,000.00.")]
        public decimal Price { get; set; }

        public string? Description { get; set; }
    }
}
```
Notice the `DataAnnotations` attributes like `[Required]` and `[Range]`. These are useful for both server-side validation (in our API) and client-side validation (in our Blazor forms), further emphasizing the benefit of shared models.

Next, we'll set up our backend API in the `Server` project. We'll use Entity Framework Core (EF Core) as our Object-Relational Mapper (ORM) to interact with a database. First, install the necessary EF Core packages in `MyBlazorApp.Server`:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design
```
Then, create a `DbContext` class in `MyBlazorApp.Server/Data/ApplicationDbContext.cs`:
```csharp
// MyBlazorApp.Server/Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using MyBlazorApp.Shared.Models; // Reference the shared model

namespace MyBlazorApp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; } = default!; // Represents our Products table
    }
}
```
Register this `DbContext` in `MyBlazorApp.Server/Program.cs`:
```csharp
// MyBlazorApp.Server/Program.cs
// ... other usings ...
using MyBlazorApp.Server.Data; // Add this using

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// ... other service registrations ...
```
And add a connection string to `appsettings.json` in the `Server` project:
```json
// MyBlazorApp.Server/appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=MyBlazorAppDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
  // ... other settings ...
}
```
Now, create your initial database migration and update the database:
```bash
dotnet ef migrations add InitialCreate -p MyBlazorApp.Server
dotnet ef database update -p MyBlazorApp.Server
```

With the database set up, we can create our API controller. In `MyBlazorApp.Server/Controllers/ProductsController.cs`, add a new API controller:
```csharp
// MyBlazorApp.Server/Controllers/ProductsController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyBlazorApp.Server.Data;
using MyBlazorApp.Shared.Models;

namespace MyBlazorApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Defines the base route for this controller
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
```
This controller provides standard CRUD endpoints for our `Product` model.

Now, let's consume this API from our Blazor client. In `MyBlazorApp.Client/Components/Pages/Products.razor`, we can fetch and display products:
```razor
@page "/products"
@rendermode InteractiveWebAssembly

@using MyBlazorApp.Shared.Models
@inject HttpClient Http

<h3>Product List</h3>

@if (products == null)
{
    <p><em>Loading products...</em></p>
}
else if (!products.Any())
{
    <p>No products found. Add some!</p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @foreach (var product in products)
            {
                <tr>
                    <td>@product.Id</td>
                    <td>@product.Name</td>
                    <td>@product.Price.ToString("C")</td>
                    <td>@product.Description</td>
                    <td>
                        <button class="btn btn-info btn-sm" @onclick="() => EditProduct(product.Id)">Edit</button>
                        <button class="btn btn-danger btn-sm" @onclick="() => DeleteProduct(product.Id)">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    </table>
}

@code {
    private Product[]? products;

    protected override async Task OnInitializedAsync()
    {
        await LoadProducts();
    }

    private async Task LoadProducts()
    {
        try
        {
            products = await Http.GetFromJsonAsync<Product[]>("api/products");
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Error fetching products: {ex.Message}");
            // Handle error, e.g., display a user-friendly message
            products = Array.Empty<Product>(); // Show empty list on error
        }
    }

    private void EditProduct(int id)
    {
        // Navigate to an edit page or open a modal
        Console.WriteLine($"Edit product with ID: {id}");
    }

    private async Task DeleteProduct(int id)
    {
        var confirmed = await JSRuntime.InvokeAsync<bool>("confirm", $"Are you sure you want to delete product {id}?");
        if (confirmed)
        {
            try
            {
                var response = await Http.DeleteAsync($"api/products/{id}");
                response.EnsureSuccessStatusCode(); // Throws if not 2xx
                await LoadProducts(); // Reload products after deletion
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error deleting product: {ex.Message}");
                // Handle error
            }
        }
    }

    [Inject]
    public IJSRuntime JSRuntime { get; set; } = default!;
}
```
This component injects `HttpClient` and uses `GetFromJsonAsync` to fetch products. We've also added placeholder methods for `EditProduct` and `DeleteProduct`. The `DeleteProduct` method demonstrates how to send a `DELETE` request and then refresh the list.

A common mistake when integrating APIs is encountering Cross-Origin Resource Sharing (CORS) issues. This happens when your Blazor client (running on one origin, e.g., `localhost:5000`) tries to make a request to an API on a different origin (e.g., `localhost:7000`). For Blazor Web Apps, the `Server` project typically hosts the `Client` project, so CORS isn't usually an issue in production. However, during development, if you run the `Server` and `Client` projects separately or debug the `Client` in isolation, you might hit CORS errors. The Blazor Web App template usually configures CORS policies in `MyBlazorApp.Server/Program.cs` to allow requests from the client's development origin. If you modify these or run into trouble, ensure your `Server` project's `Program.cs` has `builder.Services.AddCors(...)` and `app.UseCors(...)` correctly configured to allow requests from your client's origin. Another common mistake is neglecting asynchronous programming best practices. Always use `async` and `await` correctly when making HTTP requests to avoid blocking the UI thread and ensure proper error handling. Wrap your API calls in `try-catch` blocks to gracefully handle network errors or server responses indicating failure.

#### Key concepts
*   **Data Models in `Shared`:** Defining C# classes in the `Shared` project to represent data structures, ensuring consistency between client and server.
*   **Entity Framework Core (EF Core):** An Object-Relational Mapper (ORM) for .NET that allows developers to work with databases using .NET objects.
*   **`DbContext`:** An EF Core class that represents a session with the database and allows querying and saving instances of your entities.
*   **RESTful API:** An architectural style for networked applications, using standard HTTP methods (GET, POST, PUT, DELETE) for CRUD operations on resources.
*   **`[ApiController]` and `[Route("api/[controller]")]`:** Attributes used in ASP.NET Core controllers to enable API-specific behaviors and define routing.
*   **`HttpClient`:** A class in .NET used to send HTTP requests and receive HTTP responses from a resource identified by a URI.
*   **`GetFromJsonAsync<T>()` / `PostAsJsonAsync<T>()`:** Extension methods on `HttpClient` for easily sending and receiving JSON data.
*   **CRUD Operations:** The four basic functions of persistent storage: Create, Read, Update, Delete.
*   **CORS (Cross-Origin Resource Sharing):** A security mechanism that restricts web pages from making requests to a different domain than the one that served the web page.

#### Hands-on activity
**Activity: Implement Product Data and API Interaction**

1.  **Add Product Model:** In `MyBlazorApp.Shared`, create a new folder `Models` and add a `Product.cs` file with the content provided in the lesson.
2.  **Configure EF Core and Database:**
    *   In `MyBlazorApp.Server`, install the `Microsoft.EntityFrameworkCore.SqlServer` and `Microsoft.EntityFrameworkCore.Design` NuGet packages.
    *   Create a `Data` folder and add `ApplicationDbContext.cs` with the `DbSet<Product>`.
    *   Update `MyBlazorApp.Server/Program.cs` to register `ApplicationDbContext` with a SQL Server connection string (from `appsettings.json`).
    *   Add the `DefaultConnection` string to `MyBlazorApp.Server/appsettings.json`.
    *   Open your terminal in the `MyBlazorApp.Server` directory and run:
        ```bash
        dotnet ef migrations add InitialProductModel
        dotnet ef database update
        ```
3.  **Create Products API Controller:** In `MyBlazorApp.Server/Controllers`, add `ProductsController.cs` with the full CRUD implementation provided in the lesson.
4.  **Update `Products.razor` to Display Data:**
    *   Open `MyBlazorApp.Client/Components/Pages/Products.razor`.
    *   Replace its content with the full `Products.razor` code provided in the lesson, including the `HttpClient` injection, `OnInitializedAsync` to load products, and the table for display.
    *   Add `@using MyBlazorApp.Shared.Models` at the top of `Products.razor`.
5.  **Test the Application:**
    *   Run the `MyBlazorApp.Server` project.
    *   Navigate to `/products`. You should see "Loading products..." and then "No products found." (since the database is empty).
    *   Use a tool like Postman or Insomnia, or even a simple HTML form, to `POST` a few products to `https://localhost:70XX/api/products` (replace 70XX with your server's port).
    *   Refresh your Blazor `/products` page. You should now see the products listed in the table.
    *   Test the "Delete" button functionality.

#### Assessment idea
1.  **Question:** You've created a `Product` model in your `Shared` project and an `ApplicationDbContext` in your `Server` project. After adding a `DbSet<Product> Products` to your `DbContext` and registering it in `Program.cs`, you try to run `dotnet ef migrations add InitialCreate -p MyBlazorApp.Server`, but it fails, stating "The type or namespace name 'Product' could not be found." What is the most likely cause of this error?
    *   A) You forgot to install `Microsoft.EntityFrameworkCore.SqlServer` in the `Server` project.
    *   B) You didn't add a `using MyBlazorApp.Shared.Models;` directive to your `ApplicationDbContext.cs` file.
    *   C) The `Product` class is missing a primary key property.
    *   D) The connection string in `appsettings.json` is incorrect.

    **Correct Answer:** B) You didn't add a `using MyBlazorApp.Shared.Models;` directive to your `ApplicationDbContext.cs` file.
    **Explanation:** For the `ApplicationDbContext` in the `Server` project to recognize and use the `Product` model defined in the `Shared` project, it needs a `using` directive that points to the namespace where `Product` resides. Without `using MyBlazorApp.Shared.Models;`, the compiler cannot locate the `Product` type. Options A, C, and D are potential issues but would manifest with different error messages or at later stages.

2.  **Question:** Your Blazor client application is trying to fetch a list of products from `api/products` on your backend. You've confirmed the backend API is running and accessible directly via a browser or Postman. However, your Blazor component's `HttpClient.GetFromJsonAsync()` call consistently fails with an error related to "Cross-Origin Request Blocked" or similar. What is the most probable cause and how can you resolve it during development?

    **Correct Answer:** The most probable cause is a Cross-Origin Resource Sharing (CORS) policy issue.
    **Explanation:** This typically occurs during development when the Blazor client (e.g., running on `https://localhost:5000`) attempts to make a request to an API endpoint hosted on a different origin (e.g., `https://localhost:7000`). The browser's security model prevents this by default. To resolve this during development, you need to configure your ASP.NET Core `Server` project to explicitly allow requests from the client's development origin. This is done in `MyBlazorApp.Server/Program.cs` by:
    1.  Adding CORS services: `builder.Services.AddCors(options => { options.AddDefaultPolicy(policy => { policy.WithOrigins("https://localhost:5000", "http://localhost:5001").AllowAnyHeader().AllowAnyMethod(); }); });` (adjust ports as needed for your client).
    2.  Enabling the CORS middleware: `app.UseCors();` (ensure this is placed after `app.UseRouting()` and before `app.UseAuthorization()`).
    In a Blazor Web App template, these settings are often pre-configured to allow the client's default development URL.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with a slide explaining data modeling in the `Shared` project. Then, switch to a live coding demo: define the `Product` model with `DataAnnotations`. Transition to the `Server` project, show installing EF Core packages, creating `ApplicationDbContext`, registering it in `Program.cs`, and running `dotnet ef migrations` and `database update` commands in the terminal with clear output. Next, build the `ProductsController` with all CRUD methods, explaining each endpoint's purpose. Finally, switch back to the `Client` project, show updating `Products.razor` to inject `HttpClient`, fetch and display products using `GetFromJsonAsync`, and implement the `DeleteProduct` method. Visually highlight `async/await` and `try-catch` blocks. Include a "Common Mistakes" overlay discussing CORS issues and showing how to check/configure `Program.cs` in the `Server` project for CORS. The tone should be professional and highly practical, with clear step-by-step instructions.

---

### Chapter 6.3 — Building Interactive UI Components and Forms

#### Learning objectives
*   Design and implement reusable Blazor components for displaying and editing data.
*   Utilize Blazor's `EditForm` component for robust data entry and submission.
*   Implement client-side form validation using `DataAnnotationsValidator` and `ValidationSummary`.
*   Handle user input and events effectively within Blazor components.
*   Integrate simple styling or a basic UI framework to enhance component appearance.
*   Understand common mistakes in form handling, such as improper binding or validation setup.

#### Detailed lesson content
With our backend API in place, the next crucial step is to build a user-friendly interface that allows users to interact with our data. This involves creating interactive UI components for displaying lists, and robust forms for creating and editing data. Blazor provides powerful features for building forms, particularly with the `EditForm` component, which simplifies data binding, submission, and validation.

Let's start by enhancing our `Products.razor` page to include a form for adding new products. We'll create a dedicated component for the product form to promote reusability. In `MyBlazorApp.Client/Components`, create a new component called `ProductForm.razor`. This component will be responsible for both creating and updating products.

```razor
@using MyBlazorApp.Shared.Models
@inject HttpClient Http
@inject NavigationManager NavManager
@inject IJSRuntime JSRuntime

<h3>@Title Product</h3>

<EditForm Model="@Product" OnValidSubmit="HandleValidSubmit" OnInvalidSubmit="HandleInvalidSubmit">
    <DataAnnotationsValidator />
    <ValidationSummary />

    <div class="mb-3">
        <label for="name" class="form-label">Product Name:</label>
        <InputText id="name" class="form-control" @bind-Value="Product.Name" />
        <ValidationMessage For="@(() => Product.Name)" />
    </div>

    <div class="mb-3">
        <label for="price" class="form-label">Price:</label>
        <InputNumber id="price" class="form-control" @bind-Value="Product.Price" Culture="System.Globalization.CultureInfo.InvariantCulture" />
        <ValidationMessage For="@(() => Product.Price)" />
    </div>

    <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <InputTextArea id="description" class="form-control" @bind-Value="Product.Description" rows="3" />
        <ValidationMessage For="@(() => Product.Description)" />
    </div>

    <button type="submit" class="btn btn-primary">@ButtonText</button>
    <button type="button" class="btn btn-secondary" @onclick="Cancel">Cancel</button>
</EditForm>

@code {
    [Parameter]
    public Product Product { get; set; } = new Product();

    [Parameter]
    public string Title { get; set; } = "Create";

    [Parameter]
    public string ButtonText { get; set; } = "Save";

    [Parameter]
    public EventCallback OnProductSaved { get; set; }

    private async Task HandleValidSubmit()
    {
        try
        {
            HttpResponseMessage response;
            if (Product.Id == 0) // New product
            {
                response = await Http.PostAsJsonAsync("api/products", Product);
            }
            else // Existing product
            {
                response = await Http.PutAsJsonAsync($"api/products/{Product.Id}", Product);
            }

            response.EnsureSuccessStatusCode(); // Throws if not 2xx

            await OnProductSaved.InvokeAsync(); // Notify parent component
            NavManager.NavigateTo("/products"); // Navigate back to list
        }
        catch (HttpRequestException ex)
        {
            await JSRuntime.InvokeVoidAsync("alert", $"Error saving product: {ex.Message}");
            Console.WriteLine($"Error saving product: {ex.Message}");
        }
    }

    private void HandleInvalidSubmit()
    {
        Console.WriteLine("Form has validation errors.");
        // Optionally, display a more prominent error message to the user
    }

    private void Cancel()
    {
        NavManager.NavigateTo("/products");
    }
}
```
This `ProductForm.razor` component leverages `EditForm` for handling form submission. The `Model` parameter binds the form to our `Product` object. `OnValidSubmit` is triggered only when all validation rules defined by `DataAnnotations` on the `Product` model are met. `OnInvalidSubmit` is called if there are validation errors.

Inside the `EditForm`, we use Blazor's built-in input components like `InputText`, `InputNumber`, and `InputTextArea`. These components automatically bind to properties of the `Product` model using `@bind-Value`. Crucially, `DataAnnotationsValidator` enables client-side validation based on the `DataAnnotations` attributes on our `Product` model, and `ValidationSummary` displays a list of all validation messages. `ValidationMessage For="@(() => Product.Name)"` displays a specific validation message next to the input field.

The `HandleValidSubmit` method checks if `Product.Id` is 0 to determine if it's a new product (POST) or an existing one (PUT). It then sends the appropriate HTTP request to our API. After a successful save, `OnProductSaved.InvokeAsync()` is called to notify any parent component that might be listening, and `NavManager.NavigateTo("/products")` redirects the user back to the product list.

Now, let's integrate this form into our `Products.razor` page and create a new `ProductEdit.razor` page for editing.

First, modify `Products.razor` to include an "Add New Product" button and update the "Edit" button:
```razor
@page "/products"
@rendermode InteractiveWebAssembly

@using MyBlazorApp.Shared.Models
@inject HttpClient Http
@inject NavigationManager NavManager
@inject IJSRuntime JSRuntime

<h3>Product List</h3>

<button class="btn btn-success mb-3" @onclick="NavigateToCreate">Add New Product</button>

@if (products == null)
{
    <p><em>Loading products...</em></p>
}
else if (!products.Any())
{
    <p>No products found. Add some!</p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @foreach (var product in products)
            {
                <tr>
                    <td>@product.Id</td>
                    <td>@product.Name</td>
                    <td>@product.Price.ToString("C")</td>
                    <td>@product.Description</td>
                    <td>
                        <button class="btn btn-info btn-sm" @onclick="() => NavigateToEdit(product.Id)">Edit</button>
                        <button class="btn btn-danger btn-sm" @onclick="() => DeleteProduct(product.Id)">Delete</button>
                    </td>
                </tr>
            }
        </tbody>
    </table>
}

@code {
    private Product[]? products;

    protected override async Task OnInitializedAsync()
    {
        await LoadProducts();
    }

    private async Task LoadProducts()
    {
        try
        {
            products = await Http.GetFromJsonAsync<Product[]>("api/products");
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Error fetching products: {ex.Message}");
            // Handle error, e.g., display a user-friendly message
            products = Array.Empty<Product>(); // Show empty list on error
        }
    }

    private void NavigateToCreate()
    {
        NavManager.NavigateTo("/products/create");
    }

    private void NavigateToEdit(int id)
    {
        NavManager.NavigateTo($"/products/edit/{id}");
    }

    private async Task DeleteProduct(int id)
    {
        var confirmed = await JSRuntime.InvokeAsync<bool>("confirm", $"Are you sure you want to delete product {id}?");
        if (confirmed)
        {
            try
            {
                var response = await Http.DeleteAsync($"api/products/{id}");
                response.EnsureSuccessStatusCode(); // Throws if not 2xx
                await LoadProducts(); // Reload products after deletion
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error deleting product: {ex.Message}");
                // Handle error
            }
        }
    }
}
```
Now, create `MyBlazorApp.Client/Components/Pages/ProductCreate.razor`:
```razor
@page "/products/create"
@rendermode InteractiveWebAssembly

<ProductForm Title="Create" ButtonText="Add Product" OnProductSaved="HandleProductSaved" />

@code {
    private async Task HandleProductSaved()
    {
        // Logic after product is saved (e.g., refresh data on parent, if this were a modal)
        Console.WriteLine("Product created successfully!");
    }
}
```
And `MyBlazorApp.Client/Components/Pages/ProductEdit.razor`:
```razor
@page "/products/edit/{id:int}"
@rendermode InteractiveWebAssembly

@using MyBlazorApp.Shared.Models
@inject HttpClient Http
@inject NavigationManager NavManager
@inject IJSRuntime JSRuntime

@if (product == null && !isLoading)
{
    <p><em>Product not found or an error occurred.</em></p>
}
else if (isLoading)
{
    <p><em>Loading product...</em></p>
}
else
{
    <ProductForm Product="product" Title="Edit" ButtonText="Update Product" OnProductSaved="HandleProductSaved" />
}

@code {
    [Parameter]
    public int Id { get; set; }

    private Product? product;
    private bool isLoading = true;

    protected override async Task OnInitializedAsync()
    {
        if (Id > 0)
        {
            await LoadProduct();
        }
        else
        {
            isLoading = false;
        }
    }

    private async Task LoadProduct()
    {
        isLoading = true;
        try
        {
            product = await Http.GetFromJsonAsync<Product>($"api/products/{Id}");
        }
        catch (HttpRequestException ex)
        {
            await JSRuntime.InvokeVoidAsync("alert", $"Error loading product: {ex.Message}");
            Console.WriteLine($"Error loading product: {ex.Message}");
            product = null; // Indicate product not found
        }
        finally
        {
            isLoading = false;
        }
    }

    private async Task HandleProductSaved()
    {
        // Logic after product is saved (e.g., refresh data on parent, if this were a modal)
        Console.WriteLine($"Product {Id} updated successfully!");
    }
}
```
The `ProductEdit.razor` component takes an `Id` parameter from the route, fetches the existing product using `HttpClient`, and then passes that product to the `ProductForm` component. This demonstrates how to reuse a single form component for both creation and editing by passing different initial `Product` objects and adjusting parameters like `Title` and `ButtonText`.

Common mistakes in form handling include:
1.  **Forgetting `DataAnnotationsValidator`:** Without this, your `DataAnnotations` attributes on the model won't trigger client-side validation.
2.  **Incorrect `@bind-Value` usage:** Ensure the property you're binding to is writable. For complex objects, bind directly to the property (e.g., `@bind-Value="Product.Name"`).
3.  **Missing `EditContext`:** While `EditForm` handles this internally when using `Model`, if you were to use `EditContext` directly, forgetting to instantiate it or pass it to `EditForm` would break validation.
4.  **Not handling `OnInvalidSubmit`:** While `OnValidSubmit` is crucial, `OnInvalidSubmit` provides an opportunity to give user feedback when validation fails, rather than silently doing nothing.
5.  **Cultures for `InputNumber`:** As shown in the `ProductForm`, `InputNumber` can be sensitive to culture settings for decimal separators. Using `Culture="System.Globalization.CultureInfo.InvariantCulture"` can help standardize input, especially if your backend expects a specific format.

By structuring our UI into reusable components and leveraging Blazor's `EditForm` and validation features, we create a robust and maintainable data entry experience.

#### Key concepts
*   **`EditForm` Component:** A Blazor component that provides context for data editing, simplifying data binding, submission, and validation.
*   **`Model` Parameter:** Used with `EditForm` to bind the form to a specific data model instance.
*   **`OnValidSubmit` / `OnInvalidSubmit`:** Event callbacks on `EditForm` that trigger when the form is submitted and passes/fails validation, respectively.
*   **`DataAnnotationsValidator`:** A Blazor component that enables client-side validation based on `DataAnnotations` attributes applied to the model.
*   **`ValidationSummary`:** A Blazor component that displays a list of all current validation messages.
*   **`InputText`, `InputNumber`, `InputTextArea`:** Blazor's built-in input components that provide automatic two-way data binding (`@bind-Value`) and integrate with `EditForm` validation.
*   **`ValidationMessage`:** A Blazor component that displays a validation message for a specific field.
*   **`@bind-Value`:** Blazor's syntax for two-way data binding, connecting an input element's value to a C# property.
*   **`EventCallback`:** A Blazor type used to define parameters that can be invoked by a child component to notify a parent component of an event.

#### Hands-on activity
**Activity: Build and Integrate Product Forms**

1.  **Create `ProductForm.razor` Component:**
    *   In `MyBlazorApp.Client/Components`, create a new file `ProductForm.razor`.
    *   Paste the complete `ProductForm.razor` code provided in the lesson.
2.  **Update `Products.razor`:**
    *   Modify `MyBlazorApp.Client/Components/Pages/Products.razor` to include the "Add New Product" button and update the "Edit" button to navigate to the edit page, as shown in the lesson.
3.  **Create `ProductCreate.razor` Page:**
    *   In `MyBlazorApp.Client/Components/Pages`, create `ProductCreate.razor`.
    *   Paste the code for `ProductCreate.razor` from the lesson, which uses the `ProductForm` component.
4.  **Create `ProductEdit.razor` Page:**
    *   In `MyBlazorApp.Client/Components/Pages`, create `ProductEdit.razor`.
    *   Paste the code for `ProductEdit.razor` from the lesson, which fetches a product by ID and passes it to the `ProductForm`.
5.  **Test CRUD Functionality:**
    *   Run the `MyBlazorApp.Server` project.
    *   Navigate to `/products`.
    *   Click "Add New Product," fill out the form (test validation by leaving fields empty or entering invalid prices), and save. Verify the new product appears in the list.
    *   Click "Edit" on an existing product, modify its details, and save. Verify the changes are reflected.
    *   Test the "Delete" functionality again.

#### Assessment idea
1.  **Question:** You're building a Blazor form for a `Customer` model that has a `[Required]` attribute on its `Name` property. You've used an `InputText` component for the name field within an `EditForm`. However, when you submit the form with an empty name, no validation error message appears, and `OnValidSubmit` is still triggered. What crucial component or setting have you most likely forgotten to include in your form?
    *   A) `ValidationSummary`
    *   B) `InputText`'s `@bind-Value`
    *   C) `DataAnnotationsValidator`
    *   D) `OnInvalidSubmit` handler

    **Correct Answer:** C) `DataAnnotationsValidator`
    **Explanation:** While `ValidationSummary` displays messages and `OnInvalidSubmit` handles the event, it's the `DataAnnotationsValidator` component that actively processes the `DataAnnotations` attributes on your model and populates the `EditContext` with validation messages. Without it, the `EditForm` won't know to perform client-side validation based on your model's attributes, and thus `OnValidSubmit` will always fire.

2.  **Question:** You have a `ProductForm` component designed to both create and update `Product` objects. It has a `Product` parameter (`[Parameter] public Product Product { get; set; }`). When creating a new product, you pass `new Product()` to it. When editing, you fetch an existing product and pass that. Explain how the `ProductForm` component can distinguish between a "create" operation and an "update" operation to send the correct HTTP method (POST vs. PUT) to the API.

    **Correct Answer:** The `ProductForm` component can distinguish between a "create" and "update" operation by checking the `Id` property of the `Product` object passed to it.
    **Explanation:** In many database systems, a new entity (like a `Product`) will have its primary key (`Id`) set to a default value (e.g., 0 for an `int`) until it's persisted to the database, at which point the database assigns a unique ID. Therefore, inside the `HandleValidSubmit` method of `ProductForm`, you can check:
    ```csharp
    if (Product.Id == 0) // Assuming 0 is the default/unassigned ID for a new product
    {
        // This is a new product, send a POST request
        response = await Http.PostAsJsonAsync("api/products", Product);
    }
    else
    {
        // This is an existing product, send a PUT request
        response = await Http.PutAsJsonAsync($"api/products/{Product.Id}", Product);
    }
    ```
    This pattern allows a single form component to handle both scenarios effectively.

#### AI generation note
Create a 15-minute live coding video. Start by introducing the need for interactive forms. Demonstrate creating `ProductForm.razor` in `Client/Components`. Walk through adding `EditForm`, `DataAnnotationsValidator`, `ValidationSummary`, and `InputText`/`InputNumber`/`InputTextArea` components, explaining `@bind-Value` and `ValidationMessage`. Show how `OnValidSubmit` and `OnInvalidSubmit` work. Then, modify `Products.razor` to add "Add New" and "Edit" buttons that navigate. Create `ProductCreate.razor` to host `ProductForm` for new products. Finally, create `ProductEdit.razor` to fetch an existing product by ID from the API and pass it to `ProductForm`, demonstrating parameter passing and `OnInitializedAsync` for data loading. Show the application running, demonstrating form validation (empty fields, invalid numbers) and successful CRUD operations. Highlight common mistakes like missing `DataAnnotationsValidator`. The visual style should be split-screen: code on the left, browser output on the right, with occasional diagram overlays for component hierarchy.

---

### Chapter 6.4 — Authentication, Authorization, and State Management Refinement

#### Learning objectives
*   Implement user authentication using ASP.NET Core Identity in the Blazor Web App.
*   Configure and utilize `AuthenticationStateProvider` for client-side authentication status.
*   Apply authorization rules to Blazor components and API endpoints using `[Authorize]` attributes.
*   Manage user roles and permissions for fine-grained access control.
*   Explore advanced state management techniques (e.g., cascading parameters, services) for larger applications.
*   Understand security best practices and common pitfalls in Blazor authentication.

#### Detailed lesson content
Securing our application is paramount. For any practical application, users need to log in, and their access to certain features or data must be controlled. In a Blazor Web App, authentication and authorization are typically handled by ASP.NET Core Identity in the `Server` project, with the client-side Blazor application consuming this authentication state. We'll also revisit state management, looking at more robust ways to share data across components in a growing application.

First, let's enable authentication in our Blazor Web App. When you create a new Blazor Web App project, you have the option to include authentication. If you didn't select it initially, you can add it manually. The simplest way to integrate ASP.NET Core Identity is to use the `Individual Accounts` option. This sets up a local user store, login pages, and registration.

In `MyBlazorApp.Server/Program.cs`, you'll typically find the following services registered for Identity:
```csharp
// MyBlazorApp.Server/Program.cs
// ... other usings ...
using Microsoft.AspNetCore.Identity;
using MyBlazorApp.Server.Data; // Your DbContext
using MyBlazorApp.Server.Models; // Your ApplicationUser (if customized)

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString)); // Re-use our existing DbContext or create a new one for Identity

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>(); // Link Identity to our DbContext

builder.Services.AddRazorPages(); // Needed for Identity UI
builder.Services.AddControllers(); // For API endpoints

// ... other service registrations ...

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery(); // Important for Blazor forms and security

app.UseRouting();

app.UseAuthorization(); // Must be after UseRouting and before MapRazorPages/MapControllers

app.MapRazorPages(); // Maps Identity UI
app.MapControllers(); // Maps our API controllers
app.MapBlazorHub(); // For Blazor Server interactivity
app.MapFallbackToPage("/_Host"); // For Blazor WebAssembly fallback

app.Run();
```
You'll also need an `ApplicationUser` class in `MyBlazorApp.Server/Models/ApplicationUser.cs` that inherits from `IdentityUser`. If you're using the same `DbContext` for both your application data and Identity, you'll need to run EF Core migrations for Identity tables as well.

On the client side, Blazor uses `AuthenticationStateProvider` to provide the authentication state to components. This is typically set up in `MyBlazorApp.Client/Program.cs`:
```csharp
// MyBlazorApp.Client/Program.cs
// ... usings ...
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication; // If using WebAssembly auth

var builder = WebAssemblyHostBuilder.CreateDefault(args);
// ... other builder setup ...

builder.Services.AddAuthorizationCore();
builder.Services.AddCascadingAuthenticationState(); // Makes AuthenticationState available via CascadingParameter

// If using Blazor WebAssembly authentication (e.g., with Identity Server or JWT)
// builder.Services.AddScoped<AuthenticationStateProvider, SomeCustomAuthenticationStateProvider>();
// For Blazor Web App, the server handles the initial authentication, and the client receives it.
// The default Blazor Web App template usually handles this implicitly or via a specific server-side provider.
// For WebAssembly, you might use:
// builder.Services.AddHttpClient("ServerAPI", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress))
//     .AddHttpMessageHandler<BaseAddressAuthorizationMessageHandler>();
// builder.Services.AddScoped(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("ServerAPI"));
// builder.Services.AddApiAuthorization(); // If using Identity Server

await builder.Build().RunAsync();
```
The `AddCascadingAuthenticationState()` method is key. It makes the `AuthenticationState` available as a cascading parameter, which can then be consumed by any descendant component using `[CascadingParameter] private Task<AuthenticationState> authenticationStateTask { get; set; }`.

To apply authorization, you can use the `[Authorize]` attribute on Blazor components or specific methods within them. For example, to restrict access to the `Products.razor` page:
```razor
@page "/products"
@rendermode InteractiveWebAssembly
@attribute [Authorize] // Only authenticated users can access this page

// ... rest of the component
```
You can also specify roles: `@attribute [Authorize(Roles = "Admin")]`. For API endpoints in the `Server` project, the `[Authorize]` attribute works similarly on controllers or individual actions:
```csharp
// MyBlazorApp.Server/Controllers/ProductsController.cs
[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin")] // Only Admins can access product API
public class ProductsController : ControllerBase
{
    // ...
}
```
This ensures that unauthorized requests to your API are rejected at the server level.

For displaying user-specific content or conditionally showing UI elements, use the `AuthorizeView` component:
```razor
<AuthorizeView>
    <Authorized>
        Hello, @context.User.Identity?.Name!
        <button class="btn btn-warning" @onclick="Logout">Logout</button>
    </Authorized>
    <NotAuthorized>
        <p>You are not logged in. Please <a href="authentication/login">log in</a>.</p>
    </NotAuthorized>
</AuthorizeView>
```
The `context` variable inside `Authorized` provides access to the `AuthenticationState` and the `ClaimsPrincipal` representing the authenticated user.

Managing user roles and permissions is an extension of authorization. ASP.NET Core Identity supports roles out of the box. You can create roles and assign users to them. For example, to check if a user is in a specific role:
```csharp
<AuthorizeView Roles="Admin">
    <Authorized>
        <p>Welcome, Administrator!</p>
        <button class="btn btn-danger">Manage Users</button>
    </Authorized>
</AuthorizeView>
```
For more complex permission systems, you might implement policy-based authorization, where you define custom authorization policies (e.g., "CanEditProducts") and then apply them using `[Authorize(Policy = "CanEditProducts")]`.

For state management beyond simple parent-child communication, cascading parameters are useful for passing data down a component hierarchy without prop drilling. We already saw `AuthenticationState` as a cascading parameter. You can create your own cascading parameters for application-wide settings or user preferences. For more complex global state, consider using a dedicated state management library like Fluxor (a Flux/Redux pattern implementation for Blazor) or building a custom service that holds state and notifies components of changes. A simple custom service might look like this:
```csharp
// MyBlazorApp.Client/Services/AppStateService.cs
public class AppStateService
{
    public string GlobalMessage { get; private set; } = "Welcome!";
    public event Action? OnChange;

    public void SetGlobalMessage(string message)
    {
        GlobalMessage = message;
        NotifyStateChanged();
    }

    private void NotifyStateChanged() => OnChange?.Invoke();
}
```
Register it as a singleton or scoped service in `Program.cs`: `builder.Services.AddSingleton<AppStateService>();`. Then, components can inject it, call `SetGlobalMessage`, and subscribe to `OnChange` to re-render.

Common security mistakes include:
1.  **Client-side only authorization:** Never rely solely on client-side `[Authorize]` attributes or `AuthorizeView` for security. Always duplicate authorization checks on your API endpoints in the `Server` project. A malicious user can bypass client-side checks.
2.  **Exposing sensitive data:** Ensure your API endpoints only return data that the authenticated user is authorized to see.
3.  **Weak password policies:** Use strong password requirements provided by Identity.
4.  **Not using anti-forgery tokens:** Blazor Web App templates include `app.UseAntiforgery()`, which is crucial for protecting against Cross-Site Request Forgery (CSRF) attacks. Ensure it's enabled.
5.  **Hardcoding secrets:** Never hardcode API keys, connection strings, or other sensitive information directly in your code. Use `appsettings.json` and environment variables, or Azure Key Vault for production.

By diligently implementing these authentication, authorization, and state management techniques, you'll build a secure and maintainable Blazor application.

#### Key concepts
*   **ASP.NET Core Identity:** A membership system that adds user login functionality to ASP.NET Core applications, including user management, roles, and password hashing.
*   **`AuthenticationStateProvider`:** A Blazor service that provides the current authentication state (whether a user is logged in and who they are) to client-side components.
*   **`AddCascadingAuthenticationState()`:** A method that makes the `AuthenticationState` available as a cascading parameter to descendant components.
*   **`[Authorize]` Attribute:** An attribute used to restrict access to Blazor components or API endpoints to authenticated users or users in specific roles/policies.
*   **`AuthorizeView` Component:** A Blazor component that conditionally renders UI content based on the user's authentication and authorization state.
*   **`ClaimsPrincipal`:** Represents the security context of the current user, containing their claims (e.g., name, roles, email).
*   **Roles:** A mechanism in Identity to group users and apply authorization based on these groups (e.g., "Admin", "User").
*   **Policy-based Authorization:** A more flexible authorization system where you define custom requirements and handlers for authorization.
*   **Cascading Parameters:** A Blazor mechanism to pass data down a component hierarchy without explicitly passing it through every intermediate component's parameters.
*   **State Management Service:** A custom C# service designed to hold application state and provide methods for components to update and subscribe to changes in that state.
*   **Anti-forgery Tokens:** Security tokens used to prevent Cross-Site Request Forgery (CSRF) attacks.

#### Hands-on activity
**Activity: Implement Authentication and Role-Based Authorization**

*This activity assumes you started your Blazor Web App project with individual user accounts enabled. If not, you'll need to add ASP.NET Core Identity scaffolding to your `Server` project first.*

1.  **Verify Identity Setup:**
    *   Ensure your `MyBlazorApp.Server/Program.cs` has `AddDefaultIdentity`, `AddRazorPages`, `UseAuthorization`, `MapRazorPages` configured as shown in the lesson.
    *   Run `dotnet ef migrations add AddIdentityTables -p MyBlazorApp.Server` (if you haven't already for Identity) and `dotnet ef database update -p MyBlazorApp.Server`.
    *   Run the application, register a new user via the `/Identity/Account/Register` page, and log in.
2.  **Restrict Product Management to Admins:**
    *   **Server-side Authorization:** Open `MyBlazorApp.Server/Controllers/ProductsController.cs`. Add `[Authorize(Roles = "Admin")]` to the `ProductsController` class definition.
    *   **Client-side Authorization:** Open `MyBlazorApp.Client/Components/Pages/Products.razor`, `ProductCreate.razor`, and `ProductEdit.razor`. Add `@attribute [Authorize(Roles = "Admin")]` to the top of each.
3.  **Add Admin Role and Assign User:**
    *   Stop the application.
    *   To assign roles, you'll need to interact with the database or use a tool. For simplicity, let's create a small console app or a temporary endpoint in `MyBlazorApp.Server` to assign the "Admin" role.
    *   **Option A (Temporary Code in Server):** In `MyBlazorApp.Server/Program.cs`, *temporarily* add code *before* `app.Run()` to create a role and assign it. **Remember to remove this code after running it once.**
        ```csharp
        // MyBlazorApp.Server/Program.cs (TEMPORARY CODE - REMOVE AFTER USE)
        using Microsoft.AspNetCore.Identity;
        using MyBlazorApp.Server.Models; // Assuming ApplicationUser is here

        // ... after app.Build() ...
        using (var scope = app.Services.CreateScope())
        {
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            // Create "Admin" role if it doesn't exist
            if (!await roleManager.RoleExistsAsync("Admin"))
            {
                await roleManager.CreateAsync(new IdentityRole("Admin"));
                Console.WriteLine("Admin role created.");
            }

            // Find your registered user (replace with actual email)
            var adminUser = await userManager.FindByEmailAsync("your.email@example.com");
            if (adminUser != null && !await userManager.IsInRoleAsync(adminUser, "Admin"))
            {
                await userManager.AddToRoleAsync(adminUser, "Admin");
                Console.WriteLine($"User {adminUser.Email} added to Admin role.");
            }
        }
        // ... app.Run() ...
        ```
        Run the server once, then remove this temporary code.
4.  **Test Authorization:**
    *   Run the application.
    *   Try to access `/products` while logged out. You should be redirected to the login page.
    *   Log in with a regular user account (not an admin). Try to access `/products`. You should see an "Access denied" message or be redirected to an access denied page.
    *   Log in with the user account you assigned to the "Admin" role. You should now be able to access `/products` and perform CRUD operations.
5.  **Display User Info with `AuthorizeView`:**
    *   Open `MyBlazorApp.Client/Components/Layout/MainLayout.razor`.
    *   Add an `AuthorizeView` component in the header (e.g., near the app title) to display the logged-in user's name or a login/register link.
        ```razor
        <div class="top-row ps-3 navbar navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">MyBlazorApp</a>
                <button title="Navigation menu" class="navbar-toggler" @onclick="ToggleNavMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <AuthorizeView>
                    <Authorized>
                        <span class="navbar-text text-white">Hello, @context.User.Identity?.Name!</span>
                        <a href="Identity/Account/Logout" class="btn btn-link text-white">Logout</a>
                    </Authorized>
                    <NotAuthorized>
                        <a href="Identity/Account/Register" class="btn btn-link text-white">Register</a>
                        <a href="Identity/Account/Login" class="btn btn-link text-white">Login</a>
                    </NotAuthorized>
                </AuthorizeView>
            </div>
        </div>
        ```
    *   Run the app and observe the header changing based on your login status.

#### Assessment idea
1.  **Question:** You have a Blazor component, `AdminDashboard.razor`, that should only be accessible to users with the "Administrator" role. You've added `@attribute [Authorize(Roles = "Administrator")]` to the component. However, when a logged-in user who is *not* an Administrator tries to access it, they are simply redirected to the login page, not an "Access Denied" page. What is the most likely reason for this behavior in a Blazor Web App, and how would you ensure they see an "Access Denied" message instead?
    *   A) The `AuthenticationStateProvider` is not correctly registered.
    *   B) The "Administrator" role does not exist in the Identity database.
    *   C) The default redirect for unauthorized access in Blazor is to the login page. You need to configure a custom `AccessDeniedPath`.
    *   D) The `[Authorize]` attribute should be on the controller, not the Blazor component.

    **Correct Answer:** C) The default redirect for unauthorized access in Blazor is to the login page. You need to configure a custom `AccessDeniedPath`.
    **Explanation:** By default, if an authenticated user attempts to access a resource they are not authorized for (e.g., missing a required role), Blazor's authorization handler will often redirect them to the configured login path, which might then redirect to `/Identity/Account/Login`. To provide a specific "Access Denied" page, you need to configure the `AccessDeniedPath` in your `Server` project's `Program.cs` within the `AddIdentity` or `AddDefaultIdentity` options:
    ```csharp
    builder.Services.AddDefaultIdentity<ApplicationUser>(options => {
        options.SignIn.RequireConfirmedAccount = true;
        options.AccessDeniedPath = "/Identity/Account/AccessDenied"; // Configure this path
    })
    .AddEntityFrameworkStores<ApplicationDbContext>();
    ```
    You would then need to ensure an `AccessDenied.cshtml` Razor Page exists at that path (or a Blazor component with `@page "/Identity/Account/AccessDenied"`).

2.  **Question:** You're building a Blazor Web App and want to display a user's email address in the `MainLayout.razor` component's header if they are logged in. If they are not logged in, you want to show "Guest". Which Blazor component or mechanism is best suited for this conditional rendering based on authentication state, and how would you use it?

    **Correct Answer:** The `AuthorizeView` component is best suited for this.
    **Explanation:** `AuthorizeView` allows you to render different content based on the authentication state of the current user. It has `Authorized` and `NotAuthorized` child content sections.
    ```razor
    <AuthorizeView>
        <Authorized>
            <span>Hello, @context.User.Identity?.Name (@context.User.FindFirst(ClaimTypes.Email)?.Value)!</span>
        </Authorized>
        <NotAuthorized>
            <span>Hello, Guest!</span>
        </NotAuthorized>
    </AuthorizeView>
    ```
    Inside the `Authorized` context, the `context.User` property provides access to the `ClaimsPrincipal` of the authenticated user, allowing you to retrieve claims like `Name` or `Email`. This component automatically reacts to changes in the authentication state.

#### AI generation note
Create a 15-minute interactive lab walkthrough. Start by showing the `Program.cs` in the `Server` project, highlighting the Identity service registrations (`AddDefaultIdentity`, `UseAuthorization`, `MapRazorPages`). Then, demonstrate adding `[Authorize(Roles = "Admin")]` to `ProductsController` and `Products.razor`. Guide learners through the process of creating an "Admin" role using temporary code in `Program.cs` (emphasize removing it) and assigning a registered user to it. Show the application running, first attempting to access `/products` while logged out, then as a non-admin user (showing access denied), and finally as an admin user (showing success). Conclude by demonstrating `AuthorizeView` in `MainLayout.razor` to conditionally display user information or login links, explaining the `context` object. Include a mini-quiz question about the importance of server-side authorization. Visuals should include code editor, browser output, and a simple diagram illustrating the flow of authentication state from server to client.

---

### Chapter 6.5 — Deployment and Best Practices

#### Learning objectives
*   Prepare a Blazor Web App for production deployment, including configuration and build optimization.
*   Deploy a Blazor Web App to a cloud platform like Azure App Service.
*   Implement robust error handling and logging strategies for production environments.
*   Understand performance considerations and optimization techniques for Blazor applications.
*   Review essential best practices for developing maintainable and scalable Blazor applications.
*   Identify common deployment pitfalls and how to avoid them.

#### Detailed lesson content
Congratulations! You've built a functional Blazor application with data persistence, interactive forms, and authentication. The final frontier is taking your application live. Deployment involves preparing your application for a production environment, optimizing it for performance, and ensuring it runs reliably.

Preparing your Blazor Web App for deployment primarily involves creating a release build. When you run `dotnet publish`, the .NET CLI compiles your application, optimizes it, and bundles all necessary files into a deployment-ready package.
```bash
dotnet publish MyBlazorApp.Server -c Release -o ./publish
```
The `-c Release` flag specifies a release configuration, which includes optimizations like code minification and tree-shaking (removing unused code). The `-o ./publish` specifies the output directory for the published files. For Blazor WebAssembly, this process also performs ahead-of-time (AOT) compilation if enabled, which can significantly improve startup performance, though it increases build time and payload size.

Configuration management is critical for different environments. Your `appsettings.json` file in the `Server` project can have environment-specific versions, such as `appsettings.Development.json` and `appsettings.Production.json`. These files allow you to override settings like database connection strings, API keys, and logging levels based on the environment. For example, your production connection string would be in `appsettings.Production.json` and would point to your production database. When deploying to Azure App Service, you can override these settings using Application Settings in the Azure portal, which are more secure than storing them directly in files.

Deploying to a cloud platform like Azure App Service is a common scenario. Azure App Service provides a robust, scalable, and fully managed platform for hosting web applications. You can deploy your Blazor Web App using several methods:
1.  **Visual Studio Publish:** Right-click your `MyBlazorApp.Server` project in Visual Studio, select "Publish," and follow the wizard to create a new Azure App Service or select an existing one. This automates much of the process.
2.  **Azure CLI:** Use `az webapp deployment source config-zip` or `az webapp up` to deploy a zip file of your published output.
3.  **GitHub Actions/Azure DevOps:** Set up continuous integration/continuous deployment (CI/CD) pipelines to automatically build and deploy your application whenever changes are pushed to your repository. This is the recommended approach for professional development.

Error handling and logging are crucial for monitoring your application in production. Blazor provides several mechanisms:
*   **Error Boundaries:** In Blazor, you can use the `ErrorBoundary` component to gracefully handle unhandled exceptions within its child content. Instead of crashing the entire UI, the `ErrorBoundary` renders fallback content. You can implement your own custom `ErrorBoundary` to log errors to a service like Application Insights.
    ```razor
    <ErrorBoundary>
        <ChildContent>
            <!-- Your potentially error-prone component here -->
        </ChildContent>
        <ErrorContent Context="ex">
            <p class="alert alert-danger">An error occurred: @ex.Message</p>
            <!-- Log ex to a service -->
        </ErrorContent>
    </ErrorBoundary>
    ```
*   **Server-side Logging:** ASP.NET Core has a powerful logging infrastructure. Inject `ILogger<T>` into your components and services to log messages. In `MyBlazorApp.Server/Program.cs`, you can configure logging providers (e.g., Console, Debug, Azure Application Insights). For production, integrate with a centralized logging solution.
*   **Client-side Logging:** For Blazor WebAssembly, client-side errors can be captured using JavaScript interop to send them to your server-side logging endpoint or a client-side error tracking service.

Performance considerations are vital for a good user experience.
*   **Blazor WebAssembly Specifics:**
    *   **Initial Download Size:** Minimize your client-side assets. Use the `-c Release` build, enable Brotli/Gzip compression on your web server, and consider trimming unused assemblies.
    *   **AOT Compilation:** Enable AOT for significant runtime performance gains, but be aware of increased download size and build times.
    *   **Lazy Loading Assemblies:** For large applications, lazy-load assemblies that are not immediately needed.
*   **General Blazor Optimizations:**
    *   **Minimize Re-renders:** Blazor components re-render when their parameters change or `StateHasChanged()` is called. Use `ShouldRender` or `PureComponent` patterns (inheriting from `ComponentBase` and overriding `ShouldRender`) to prevent unnecessary re-renders.
    *   **Asynchronous Operations:** Always use `async`/`await` for I/O operations to keep the UI responsive.
    *   **Virtualization:** For long lists, use Blazor's `Virtualize` component to render only the visible portion of the list, improving performance.
    *   **Efficient Data Fetching:** Fetch only the data you need. Implement pagination, filtering, and sorting at the API level.

Best practices for Blazor development:
*   **Component Reusability:** Design small, focused components that can be reused throughout your application.
*   **Separation of Concerns:** Keep UI logic (`.razor` markup) separate from business logic (in `@code` blocks or dedicated services).
*   **Parameterize Components:** Use `[Parameter]` to make components configurable and reusable.
*   **Error Handling:** Implement robust error handling on both client and server.
*   **Security First:** Always assume malicious input. Validate all user input on the server, and implement proper authentication and authorization.
*   **Testing:** Write unit tests for your components and services, and integration tests for your API.
*   **Code Reviews:** Regularly review code to catch bugs and ensure adherence to best practices.
*   **Documentation:** Document your components, services, and APIs.

Common deployment pitfalls include:
*   **Missing `appsettings.Production.json`:** Forgetting to configure production-specific settings, leading to applications trying to connect to development databases.
*   **CORS issues in production:** If your client and server are hosted on different domains, ensure CORS is correctly configured on the server to allow requests from the client's production domain.
*   **Database connection string issues:** Incorrect connection strings, firewall rules blocking database access, or missing database migrations on the production server.
*   **Static file serving issues:** Forgetting to configure the web server to serve static files (e.g., CSS, JavaScript, images) correctly.
*   **SSL/TLS certificates:** Ensuring your production environment has valid SSL certificates configured for HTTPS.
*   **Not using `dotnet publish -c Release`:** Deploying debug builds to production, which are larger and less optimized.

By following these guidelines, you'll be well-equipped to deploy and maintain high-quality Blazor applications.

#### Key concepts
*   **`dotnet publish`:** The .NET CLI command used to compile, optimize, and package an application for deployment.
*   **Release Build:** A build configuration optimized for performance and size, typically used for production deployments.
*   **`appsettings.json`:** Configuration files in ASP.NET Core that allow environment-specific settings (e.g., `appsettings.Production.json`).
*   **Azure App Service:** A fully managed platform-as-a-service (PaaS) for hosting web applications, REST APIs, and mobile backends.
*   **CI/CD (Continuous Integration/Continuous Deployment):** Automation pipelines that build, test, and deploy code changes automatically.
*   **`ErrorBoundary` Component:** A Blazor component that catches unhandled exceptions in its child content and renders fallback UI.
*   **`ILogger<T>`:** The interface for logging in ASP.NET Core, used to record messages about application events.
*   **Performance Optimization:** Techniques to improve application speed, responsiveness, and resource usage (e.g., minification, AOT, virtualization).
*   **`Virtualize` Component:** A Blazor component that optimizes rendering of long lists by only rendering items visible in the viewport.
*   **Component Reusability:** The practice of designing components that can be used multiple times in different contexts.
*   **Separation of Concerns:** Structuring code so that different responsibilities are handled by distinct components or layers.

#### Hands-on activity
**Activity: Prepare for Deployment and Implement Basic Error Handling**

1.  **Review Production Configuration:**
    *   Open `MyBlazorApp.Server/appsettings.json`.
    *   Create a new file `MyBlazorApp.Server/appsettings.Production.json`.
    *   In `appsettings.Production.json`, change the `DefaultConnection` string to simulate a production database (e.g., point to a non-existent server or a different database name).
        ```json
        {
          "ConnectionStrings": {
            "DefaultConnection": "Server=tcp:yourprodserver.database.windows.net,1433;Initial Catalog=MyBlazorAppProdDb;Persist Security Info=False;User ID=youruser;Password=yourpassword;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
          },
          "Logging": {
            "LogLevel": {
              "Default": "Warning", // Log less verbose in production
              "Microsoft.AspNetCore": "Warning"
            }
          }
        }
        ```
    *   Discuss how these settings would be overridden in Azure App Service.
2.  **Create a Release Publish Profile:**
    *   Open your terminal in the solution directory (`MyBlazorApp`).
    *   Run the publish command:
        ```bash
        dotnet publish MyBlazorApp.Server -c Release -o ./publish_output
        ```
    *   Inspect the `publish_output` folder. Notice the optimized files, especially in `publish_output/wwwroot/_framework/blazor.webassembly.js` (if WebAssembly is used).
3.  **Implement a Global Error Boundary:**
    *   Open `MyBlazorApp.Client/Components/Layout/MainLayout.razor`.
    *   Wrap the `@Body` content with an `ErrorBoundary` component.
        ```razor
        <div class="page">
            <div class="sidebar">
                <NavMenu />
            </div>

            <main>
                <div class="top-row px-4">
                    <a href="https://learn.microsoft.com/aspnet/core/" target="_blank">About</a>
                </div>

                <article class="content px-4">
                    <ErrorBoundary>
                        <ChildContent>
                            @Body
                        </ChildContent>
                        <ErrorContent Context="ex">
                            <h4 class="text-danger">Oops! Something went wrong.</h4>
                            <p>We're sorry for the inconvenience. Please try again later.</p>
                            <p class="text-muted">Error details: @ex.Message</p>
                            <!-- In a real app, you'd log 'ex' here -->
                        </ErrorContent>
                    </ErrorBoundary>
                </article>
            </main>
        </div>
        ```
    *   To test, temporarily introduce a deliberate error in one of your pages (e.g., `Products.razor`):
        ```csharp
        // In Products.razor, inside @code block:
        protected override void OnInitialized()
        {
            throw new InvalidOperationException("Simulated client-side error!");
        }
        ```
    *   Run the application and navigate to `/products`. Observe the `ErrorBoundary` catching the error and displaying the fallback content instead of crashing the page. **Remember to remove the simulated error after testing.**
4.  **Discuss Deployment Strategy:**
    *   In a brief reflection, consider how you would deploy this application to Azure App Service. What are the key steps you would take (e.g., creating App Service, setting connection strings, choosing deployment method)?

#### Assessment idea
1.  **Question:** You've finished developing your Blazor Web App and are preparing it for deployment to a production server. You execute `dotnet publish MyBlazorApp.Server -c Debug -o ./publish`. What is a significant drawback of using the `-c Debug` flag for a production deployment, and what should you use instead?
    *   A) Debug builds are slower to compile and publish.
    *   B) Debug builds disable client-side validation.
    *   C) Debug builds are larger in size and less optimized for performance, potentially exposing sensitive debugging information.
    *   D) Debug builds prevent the application from connecting to a production database.

    **Correct Answer:** C) Debug builds are larger in size and less optimized for performance, potentially exposing sensitive debugging information.
    **Explanation:** Using the `-c Debug` flag for production deployment results in larger application bundles, slower load times, and reduced runtime performance because compiler optimizations like minification and tree-shaking are often skipped. It can also include debugging symbols that are unnecessary in production and could potentially expose internal details. You should always use `-c Release` (e.g., `dotnet publish MyBlazorApp.Server -c Release -o ./publish`) for production deployments to ensure the application is fully optimized.

2.  **Question:** Your Blazor Web App is deployed to Azure App Service. Users are reporting that the application is trying to connect to your local development database instead of the production database. You've confirmed that `appsettings.Production.json` has the correct production connection string. What is the most likely reason the application isn't using the production connection string, and how should you correctly configure it in Azure?

    **Correct Answer:** The most likely reason is that environment-specific `appsettings.json` files are not automatically used by Azure App Service in the same way they are locally, or the connection string is not being overridden.
    **Explanation:** While `appsettings.Production.json` is useful for local testing of production configurations, in Azure App Service, the recommended and most secure way to manage environment-specific settings like connection strings is through **Application Settings** in the Azure portal. These settings override any values found in `appsettings.json` or `appsettings.Production.json`. To fix this, you should navigate to your App Service in the Azure portal, go to "Configuration" -> "Application settings," and add a new connection string entry (e.g., `ConnectionStrings:DefaultConnection`) with the value of your production database connection string. This ensures the correct connection string is injected into your application at runtime in the production environment.

#### AI generation note
Create a 12-minute mixed-media lesson. Begin with a slide summarizing the importance of release builds and configuration. Then, switch to a live coding demonstration: show `dotnet publish -c Release` in the terminal, explaining the output folder and its contents. Transition to the Azure portal (simulated or real screenshots) to demonstrate where to set "Application settings" for connection strings and environment variables in an Azure App Service. Next, return to the code editor to implement a global `ErrorBoundary` in `MainLayout.razor`, showing how to catch and display client-side errors gracefully. Briefly discuss server-side logging with `ILogger`. Conclude with a visual summary of Blazor performance tips (e.g., AOT, virtualization) and a final slide on general best practices. The tone should be professional and forward-looking, emphasizing readiness for production.

---

## Final Capstone Project

Congratulations on reaching the final stage of your Blazor Bootcamp! This is where you'll consolidate all the knowledge and skills you've gained throughout the course by building a substantial project. You have the opportunity to choose one of three distinct project options, each designed to challenge you to integrate various Blazor concepts, from component design and state management to data interaction and routing. This project is your chance to demonstrate your proficiency and creativity in building interactive web applications with Blazor.

Remember, the goal is not just to make something work, but to apply best practices, write clean and maintainable code, and consider the user experience. Approach this as a real-world application development scenario, and don't hesitate to refer back to course materials or official Blazor documentation as you build.

### Project Option 1: Blazor Task Manager

**Project Description:**
Develop a single-page Blazor application that allows users to manage their tasks. This application should enable users to add new tasks, mark existing tasks as complete, edit task details, and delete tasks. The application should provide a clear and intuitive user interface for managing these tasks, potentially categorizing them or filtering them by status. This project will test your ability to create interactive components, handle user input through forms, manage application state, and persist data.

**Core Requirements:**
*   **Task Creation:** A form to add new tasks with at least a title and a description.
*   **Task Listing:** Display all tasks in a list, showing their current status (e.g., pending, completed).
*   **Task Status Toggle:** A button or checkbox to mark a task as complete or incomplete.
*   **Task Editing:** Functionality to modify the title and description of an existing task.
*   **Task Deletion:** A button to remove a task from the list.
*   **Data Persistence:** Tasks should be stored locally (e.g., using `localStorage` via JS Interop for Blazor WebAssembly, or an in-memory service for Blazor Server) or by interacting with a simple mock API you create.
*   **Routing:** Implement basic routing to view all tasks, or potentially a detail page for a single task.
*   **Validation:** Basic form validation for new task creation (e.g., title cannot be empty).

**Stretch Goals:**
*   **Filtering/Sorting:** Add options to filter tasks by status (all, pending, completed) or sort them by creation date/priority.
*   **Categories/Tags:** Allow users to assign categories or tags to tasks and filter by them.
*   **Due Dates:** Include a due date field for tasks and display upcoming deadlines.
*   **Confirmation Dialogs:** Implement a confirmation dialog before deleting a task.
*   **Component Library Integration:** Utilize a Blazor component library (e.g., MudBlazor, Blazorise) for enhanced UI elements.

**Evaluation Criteria:**
*   **Functionality (40%):** All core requirements are met and work as expected.
*   **Code Quality (30%):** Code is well-structured, readable, follows C# and Blazor conventions, and includes appropriate comments.
*   **User Interface/Experience (20%):** The application is intuitive, visually appealing, and responsive.
*   **Blazor Concepts (10%):** Effective use of Blazor components, state management, event handling, and data binding.

**Estimated Time:** 15-20 hours

### Project Option 2: Simple Product Catalog & Shopping Cart

**Project Description:**
Build a Blazor application that displays a catalog of products and allows users to add items to a shopping cart. The catalog should fetch product data from a mock API (or an in-memory service). Users should be able to view product details, add items to a cart, and see the contents and total of their cart. This project emphasizes data fetching, state management across multiple components, and component communication.

**Core Requirements:**
*   **Product Listing:** Display a list of products, each with at least a name, description, price, and an "Add to Cart" button.
*   **Product Details Page:** A separate page for each product showing more detailed information.
*   **Shopping Cart:** A component that displays items currently in the cart, their quantities, and a running total.
*   **Add to Cart Functionality:** When a user clicks "Add to Cart," the item should be added to the cart, updating the cart component.
*   **Remove from Cart:** Functionality to remove items from the shopping cart.
*   **Data Source:** Products should be loaded from a simulated API endpoint (e.g., a simple C# class returning `List<Product>` or a JSON file served locally).
*   **Routing:** Implement routing for the product catalog, individual product details, and the shopping cart view.
*   **State Management:** The shopping cart state must be managed effectively across different components (e.g., using a service, cascading parameters, or an `AppState` pattern).

**Stretch Goals:**
*   **Quantity Adjustment:** Allow users to adjust the quantity of items directly within the cart.
*   **Empty Cart State:** Display a message when the cart is empty.
*   **Checkout Simulation:** A "Checkout" button that clears the cart and perhaps shows a "Thank You" message.
*   **Search/Filter:** Add search functionality or filters for product categories.
*   **Loading Indicators:** Display loading indicators while fetching product data.

**Evaluation Criteria:**
*   **Functionality (40%):** All core requirements are met, and the cart logic is correct.
*   **Code Quality (30%):** Code is well-organized, follows Blazor and C# best practices, and is easy to understand.
*   **User Interface/Experience (20%):** The catalog and cart are easy to navigate and use.
*   **Blazor Concepts (10%):** Effective use of HTTPClient, component parameters, event callbacks, and advanced state management.

**Estimated Time:** 18-22 hours

### Project Option 3: Interactive Survey/Quiz Application

**Project Description:**
Create a Blazor application that presents a series of survey questions or quiz questions to the user. After the user completes the survey/quiz, the application should display their results or a summary of their responses. This project will focus heavily on dynamic UI generation, form handling, validation, and managing complex user input flows.

**Core Requirements:**
*   **Question Display:** Present questions one by one or all at once on a single page.
*   **Multiple Question Types:** Support at least two types of questions (e.g., text input, radio buttons for multiple choice, checkboxes for multiple select).
*   **User Input Collection:** Capture user responses for each question.
*   **Form Validation:** Ensure users provide valid answers (e.g., text fields are not empty, at least one option is selected).
*   **Results/Summary Page:** After completion, display a summary of the user's answers or their score if it's a quiz.
*   **Data Source:** Questions and their options should be loaded from a simulated API endpoint or an in-memory service.
*   **Routing:** Implement routing for the survey/quiz entry, the question pages, and the results page.
*   **Navigation:** Clear navigation between questions (e.g., "Next," "Previous," "Submit").

**Stretch Goals:**
*   **Progress Indicator:** Show a progress bar or "X of Y questions answered" indicator.
*   **Timer:** Implement a timer for quiz questions.
*   **Dynamic Question Loading:** Load questions dynamically based on previous answers.
*   **User Authentication (Mock):** Simulate a logged-in user to save their quiz results.
*   **Admin Panel (Simple):** A very basic component to add new questions (no persistence required for this part).

**Evaluation Criteria:**
*   **Functionality (40%):** All core features work, and the logic for collecting and presenting results is sound.
*   **Code Quality (30%):** Code is modular, maintainable, and demonstrates good Blazor component design.
*   **User Interface/Experience (20%):** The survey/quiz flow is clear, and the UI is user-friendly.
*   **Blazor Concepts (10%):** Effective use of `EditForm`, `Input` components, `DataAnnotations`, and dynamic rendering.

**Estimated Time:** 16-20 hours

## Final Examination

This comprehensive examination is designed to assess your understanding of the core concepts and practical skills covered throughout the Blazor Bootcamp. It includes a mix of question types to evaluate your conceptual knowledge, ability to trace code execution, write Blazor components, and debug common issues. Take your time, read each question carefully, and provide detailed answers where requested.

**Instructions:**
*   Answer all questions to the best of your ability.
*   For code-writing questions, strive for correct syntax and logical implementation.
*   For explanation questions, be clear, concise, and demonstrate your understanding of Blazor principles.

---

**Section 1: Concept Definitions (4 Questions)**

1.  **Question:** Explain the fundamental difference between Blazor Server and Blazor WebAssembly hosting models. Discuss one advantage and one disadvantage for each.
    *   **Answer:**
        *   **Blazor Server:** The application runs on the server, and UI updates, event handling, and JavaScript interop calls are handled over a SignalR connection. The browser only receives UI diffs.
            *   **Advantage:** Smaller initial download size, can leverage full .NET API access on the server, faster initial load.
            *   **Disadvantage:** Requires a persistent SignalR connection, higher server resource usage, increased latency due to network round trips for every interaction.
        *   **Blazor WebAssembly:** The application (including the .NET runtime) is downloaded to the client's browser as WebAssembly and JavaScript. The application runs entirely client-side.
            *   **Advantage:** No server dependency after initial download (can be hosted as static files), reduced server load, offline capabilities.
            *   **Disadvantage:** Larger initial download size (including .NET runtime), slower initial load, limited direct access to server resources (requires APIs).

2.  **Question:** What is the purpose of the `@bind` directive in Blazor, and how does it simplify two-way data binding compared to manual event handling?
    *   **Answer:** The `@bind` directive in Blazor provides a convenient way to implement two-way data binding between a UI element's value and a C# property. It automatically sets up both the initial value display and the event handling for changes. For example, `@bind="MyProperty"` on an `<input>` element is equivalent to setting `value="@MyProperty"` and handling the `onchange` event to update `MyProperty = e.Value.ToString()`. This significantly reduces boilerplate code, making forms and interactive components much cleaner and easier to develop compared to manually wiring up `value` attributes and `onchange` event handlers.

3.  **Question:** Describe the role of `IJSRuntime` in Blazor applications. Provide a simple example of when you would use it.
    *   **Answer:** `IJSRuntime` is an interface in Blazor that allows you to invoke JavaScript functions from C# code and vice-versa (though the latter typically uses `[JSInvokable]`). Its primary role is to enable interoperability between your Blazor application's .NET code and existing JavaScript libraries or browser APIs that don't have direct Blazor equivalents.
        *   **Example Use Case:** Displaying a browser alert.
            ```csharp
            @inject IJSRuntime JSRuntime

            <button @onclick="ShowAlert">Show JS Alert</button>

            @code {
                private async Task ShowAlert()
                {
                    await JSRuntime.InvokeVoidAsync("alert", "Hello from Blazor!");
                }
            }
            ```

4.  **Question:** Explain the concept of "component parameters" in Blazor. How do they facilitate communication between parent and child components?
    *   **Answer:** Component parameters are public properties on a Blazor child component that are decorated with the `[Parameter]` attribute. They allow a parent component to pass data down to its child components. When the parent renders the child component, it can set the values of these parameters. This is the primary mechanism for parent-to-child communication, enabling components to be reusable and configurable. For example, a `ProductCard` component might have a `[Parameter]` for `Product` data, which the parent `ProductList` component would populate for each card.

---

**Section 2: Code Tracing (3 Questions)**

5.  **Question:** Consider the following Blazor component. What will be displayed in the browser after the component initially renders and then after the button is clicked once?

    ```razor
    @page "/counter-trace"

    <h3>Counter Trace</h3>

    <p>Current count: @currentCount</p>

    <button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

    @code {
        private int currentCount = 0;

        protected override void OnInitialized()
        {
            currentCount = 5;
        }

        private void IncrementCount()
        {
            currentCount++;
        }
    }
    ```
    *   **Answer:**
        *   **After initial render:** "Current count: 5" (The `OnInitialized` method sets `currentCount` to 5 before the component is rendered for the first time).
        *   **After button clicked once:** "Current count: 6" (The `IncrementCount` method increments `currentCount` by 1, and Blazor automatically re-renders the component).

6.  **Question:** Analyze the following Blazor component. What will be the output in the browser when the component first loads, and what will happen if the "Update Message" button is clicked?

    ```razor
    @page "/message-trace"

    <h3>Message Trace</h3>

    <p>Message: @message</p>

    <button @onclick="UpdateMessage">Update Message</button>

    @code {
        private string message = "Initial message";

        protected override async Task OnInitializedAsync()
        {
            await Task.Delay(100); // Simulate an async operation
            message = "Message from OnInitializedAsync";
        }

        private void UpdateMessage()
        {
            message = "Message updated by button";
        }
    }
    ```
    *   **Answer:**
        *   **After initial load:** The browser will first display "Message: Initial message". Shortly after (approximately 100 milliseconds due to `Task.Delay`), `OnInitializedAsync` will complete, updating `message` to "Message from OnInitializedAsync", and Blazor will re-render, displaying "Message: Message from OnInitializedAsync".
        *   **After "Update Message" button is clicked:** The `UpdateMessage` method will set `message` to "Message updated by button", and Blazor will re-render the component, displaying "Message: Message updated by button".

7.  **Question:** Given the following parent and child components, what will be displayed when the `ParentComponent` is loaded, and what happens when the "Change Name" button is clicked?

    **ParentComponent.razor:**
    ```razor
    @page "/parent-child-trace"

    <h3>Parent Component</h3>
    <p>Parent's Name: @parentName</p>

    <ChildComponent Name="@parentName" OnNameChanged="HandleNameChange" />

    <button @onclick="ChangeParentName">Change Name</button>

    @code {
        private string parentName = "Alice";

        private void HandleNameChange(string newName)
        {
            parentName = newName;
            // StateHasChanged() is implicitly called by Blazor for event handlers
        }

        private void ChangeParentName()
        {
            parentName = "Bob";
        }
    }
    ```

    **ChildComponent.razor:**
    ```razor
    <h3>Child Component</h3>
    <p>Child received: @Name</p>

    @code {
        [Parameter]
        public string Name { get; set; } = "Default";

        [Parameter]
        public EventCallback<string> OnNameChanged { get; set; }

        protected override void OnParametersSet()
        {
            // This method runs when parameters are set or updated.
            Console.WriteLine($"ChildComponent: Name parameter set to {Name}");
        }
    }
    ```
    *   **Answer:**
        *   **When `ParentComponent` is loaded:**
            *   The browser will display:
                ```
                Parent Component
                Parent's Name: Alice
                Child Component
                Child received: Alice
                ```
            *   The console will output: `ChildComponent: Name parameter set to Alice`.
        *   **When "Change Name" button is clicked:**
            *   The `ChangeParentName` method in `ParentComponent` will update `parentName` to "Bob".
            *   Blazor detects the state change in `ParentComponent` and re-renders it.
            *   During re-rendering, `ChildComponent` receives the updated `Name` parameter ("Bob").
            *   The `OnParametersSet` method in `ChildComponent` will be invoked, and the console will output: `ChildComponent: Name parameter set to Bob`.
            *   The browser display will update to:
                ```
                Parent Component
                Parent's Name: Bob
                Child Component
                Child received: Bob
                ```

---

**Section 3: Code Writing (4 Questions)**

8.  **Question:** Write a simple Blazor component named `GreetingComponent` that takes a `Name` parameter (defaulting to "Guest" if not provided) and displays a personalized greeting.
    *   **Answer:**
        **GreetingComponent.razor:**
        ```razor
        <h3>Greeting Component</h3>

        <p>Hello, @Name!</p>

        @code {
            [Parameter]
            public string Name { get; set; } = "Guest";
        }
        ```
        *   **Partial Credit Guidance:** Full credit for correct parameter usage and default value. Partial credit for correct parameter usage but missing default value, or for a component that displays a greeting but doesn't correctly use a parameter.

9.  **Question:** Create a Blazor `EditForm` component that allows a user to input their email address. Include basic `DataAnnotations` validation to ensure the input is a valid email format and is not empty. Display validation messages.
    *   **Answer:**
        **EmailForm.razor:**
        ```razor
        @page "/email-form"

        <h3>Email Input Form</h3>

        <EditForm Model="@model" OnValidSubmit="HandleValidSubmit">
            <DataAnnotationsValidator />
            <ValidationSummary />

            <div class="form-group">
                <label for="email">Email:</label>
                <InputText id="email" class="form-control" @bind-Value="model.Email" />
                <ValidationMessage For="@(() => model.Email)" />
            </div>

            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </EditForm>

        @if (!string.IsNullOrEmpty(submittedEmail))
        {
            <p class="mt-3">Submitted Email: @submittedEmail</p>
        }

        @code {
            private EmailModel model = new EmailModel();
            private string submittedEmail;

            private void HandleValidSubmit()
            {
                submittedEmail = model.Email;
                Console.WriteLine($"Valid submission: {model.Email}");
            }

            public class EmailModel
            {
                [Required(ErrorMessage = "Email address is required.")]
                [EmailAddress(ErrorMessage = "Invalid email address format.")]
                public string Email { get; set; }
            }
        }
        ```
        *   **Partial Credit Guidance:** Full credit for correct `EditForm` structure, `DataAnnotationsValidator`, `ValidationSummary`, `InputText`, `@bind-Value`, and `Required`/`EmailAddress` attributes. Partial credit for missing `ValidationSummary` or `ValidationMessage`, or incorrect attribute usage.

10. **Question:** Write the C# code within a Blazor component that makes an asynchronous HTTP GET request to `https://jsonplaceholder.typicode.com/todos/1` and displays the `title` property from the JSON response. Assume `HttpClient` is injected.
    *   **Answer:**
        **TodoFetcher.razor:**
        ```razor
        @page "/todo-fetcher"
        @inject HttpClient Http

        <h3>Todo Fetcher</h3>

        @if (todoTitle != null)
        {
            <p>Todo Title: @todoTitle</p>
        }
        else if (errorMessage != null)
        {
            <p style="color: red;">Error: @errorMessage</p>
        }
        else
        {
            <p>Loading todo...</p>
        }

        @code {
            private string todoTitle;
            private string errorMessage;

            protected override async Task OnInitializedAsync()
            {
                try
                {
                    var todo = await Http.GetFromJsonAsync<TodoItem>("https://jsonplaceholder.typicode.com/todos/1");
                    if (todo != null)
                    {
                        todoTitle = todo.Title;
                    }
                    else
                    {
                        errorMessage = "Failed to deserialize todo item.";
                    }
                }
                catch (HttpRequestException ex)
                {
                    errorMessage = $"Network error: {ex.Message}";
                }
                catch (Exception ex)
                {
                    errorMessage = $"An unexpected error occurred: {ex.Message}";
                }
            }

            public class TodoItem
            {
                public int UserId { get; set; }
                public int Id { get; set; }
                public string Title { get; set; }
                public bool Completed { get; set; }
            }
        }
        ```
        *   **Partial Credit Guidance:** Full credit for correct `HttpClient` injection, `GetFromJsonAsync`, and displaying the `title`. Partial credit for missing error handling, or not using `async`/`await` correctly.

11. **Question:** Create a Blazor component named `ClickCounter` that displays a count. Include a button that increments the count by 1. Also, add a button that resets the count to 0.
    *   **Answer:**
        **ClickCounter.razor:**
        ```razor
        <h3>Click Counter</h3>

        <p>Current Count: @currentCount</p>

        <button class="btn btn-primary" @onclick="IncrementCount">Increment</button>
        <button class="btn btn-secondary ms-2" @onclick="ResetCount">Reset</button>

        @code {
            private int currentCount = 0;

            private void IncrementCount()
            {
                currentCount++;
            }

            private void ResetCount()
            {
                currentCount = 0;
            }
        }
        ```
        *   **Partial Credit Guidance:** Full credit for correctly implementing both increment and reset functionality. Partial credit for only implementing one of the functionalities or for minor syntax errors.

---

**Section 4: Design & Debugging Problems (5 Questions)**

12. **Question:** You've built a Blazor WebAssembly application, and when you try to fetch data from an external API, you encounter a CORS (Cross-Origin Resource Sharing) error in the browser console.
    *   **a) What is CORS, and why does it occur in this scenario?**
    *   **b) What is the most common solution to resolve a CORS issue when consuming an API you control?**
    *   **Answer:**
        *   **a) What is CORS:** CORS is a security mechanism implemented by web browsers that restricts web pages from making requests to a different domain than the one the web page originated from. It occurs in this scenario because your Blazor WebAssembly application (e.g., running on `localhost:5000`) is attempting to make an HTTP request to an API hosted on a different origin (e.g., `api.example.com` or `localhost:7000`), and the browser's security policy blocks this by default unless the API explicitly allows it.
        *   **b) Common solution:** The most common solution when you control the API is to configure the API server to include appropriate CORS headers in its responses. Specifically, the API should send an `Access-Control-Allow-Origin` header that includes the origin of your Blazor application (e.g., `Access-Control-Allow-Origin: http://localhost:5000` or `Access-Control-Allow-Origin: *` for development purposes, though `*` is generally not recommended for production). In ASP.NET Core, this is typically done by adding CORS services and middleware in `Program.cs`.

13. **Question:** You have a Blazor component that displays a list of items. You're updating the list in an event handler, but the UI isn't refreshing automatically.
    *   **a) What is the likely reason the UI isn't refreshing?**
    *   **b) How would you explicitly tell Blazor to re-render the component?**
    *   **Answer:**
        *   **a) Likely reason:** The UI isn't refreshing automatically because the code modifying the list is likely running outside of Blazor's rendering pipeline or an event handler that Blazor monitors. For instance, if the list is updated by a callback from a JavaScript interop call or a timer that doesn't originate from a Blazor event, Blazor won't automatically detect the state change and trigger a re-render.
        *   **b) How to re-render:** You would explicitly tell Blazor to re-render the component by calling `StateHasChanged()` within the component's `@code` block after the state (the list in this case) has been updated. This method notifies Blazor that the component's state has changed and it should be re-rendered.

14. **Question:** You're building a Blazor Server application and notice that after a period of inactivity, your application seems to "lose" its state, and you get disconnected.
    *   **a) What Blazor Server specific mechanism is likely causing this behavior?**
    *   **b) What are two ways to mitigate or handle this situation?**
    *   **Answer:**
        *   **a) Specific mechanism:** This behavior is likely caused by the SignalR circuit being disconnected due to inactivity. Blazor Server relies on a persistent SignalR connection (the "circuit") between the client and the server to manage UI updates and event handling. If this connection is lost (e.g., due to network issues, server restart, or client inactivity timeout), the server-side state associated with that client's circuit is lost, leading to a disconnected experience.
        *   **b) Ways to mitigate:**
            1.  **Configure SignalR keep-alives/timeouts:** Increase the `CircuitOptions.DisconnectedCircuitRetentionPeriod` and `CircuitOptions.IdleTimeout` in `Program.cs` on the server to allow for longer periods of inactivity before the circuit is torn down. You can also configure SignalR's client-side keep-alive interval.
            2.  **Implement persistent state management:** For critical application state, consider storing it outside the SignalR circuit, such as in a database, `localStorage` (with JS interop), or a server-side cache that can be re-hydrated if a new circuit is established. This allows users to resume their session even after a temporary disconnection.

15. **Question:** You are designing a Blazor application where multiple components need to share and update a common piece of data (e.g., a user's login status or a shopping cart).
    *   **a) Briefly describe why passing data solely through `[Parameter]` and `EventCallback` might become cumbersome in this scenario.**
    *   **b) Suggest two alternative Blazor patterns or techniques to manage this shared state more effectively.**
    *   **Answer:**
        *   **a) Why cumbersome:** Passing data solely through `[Parameter]` and `EventCallback` (often called "prop drilling") can become cumbersome in scenarios with deeply nested components or when many disparate components need access to the same shared state. You would have to pass the data down through multiple intermediate components that don't actually use the data themselves, and similarly, pass `EventCallback`s up through multiple parents to reach the component responsible for updating the state. This leads to verbose, hard-to-maintain code and tightly coupled components.
        *   **b) Alternative patterns:**
            1.  **Cascading Parameters:** For state that needs to be accessible by many descendant components without explicit passing, a cascading parameter can be used. A parent component can provide a value (e.g., an `AppState` object) using a `<CascadingValue>` component, and any descendant component can then receive this value by declaring a `[CascadingParameter]` property.
            2.  **Dependency Injection (Services):** For truly global or application-wide state, creating a dedicated C# service (e.g., `ShoppingCartService` or `AuthService`) and registering it with Blazor's dependency injection system is highly effective. Components can then `[Inject]` this service and interact with its properties and methods to read or update the shared state. This decouples components from each other and centralizes state logic.

16. **Question:** You're working on a Blazor WebAssembly application and notice that your application's initial load time is quite long. You suspect the size of the downloaded assets might be a factor.
    *   **a) What is a primary contributor to the initial download size of a Blazor WebAssembly application?**
    *   **b) Name two strategies you can employ to reduce the initial download size and improve load times for Blazor WebAssembly. (Exclude server-side compression, as that's a general web optimization).**
    *   **Answer:**
        *   **a) Primary contributor:** The primary contributor to the initial download size of a Blazor WebAssembly application is the .NET runtime itself, along with all the application's compiled C# assemblies and their transitive dependencies. Even for a simple "Hello World" app, a significant amount of .NET infrastructure needs to be downloaded.
        *   **b) Strategies to reduce download size:**
            1.  **Trim unused assemblies/code:** Blazor WebAssembly projects can be configured to "trim" unused code from the .NET SDK and application assemblies during publishing. This process removes methods, types, and even entire assemblies that are not detected as being used by the application, significantly reducing the final bundle size. This is typically enabled by setting `<PublishTrimmed>true</PublishTrimmed>` in the `.csproj` file.
            2.  **Lazy loading assemblies:** For parts of your application that are not immediately needed on startup (e.g., an admin panel or a rarely visited feature), you can configure Blazor to lazy load specific assemblies only when they are navigated to. This defers the download of those assemblies until they are required, improving the initial load time for the core application. This is done using `RouterOutlet` and `AdditionalAssemblies` in `App.razor` and `LazyAssemblyLoader` service.

---

## Course Conclusion

Congratulations, Blazor developer! You have successfully completed the Blazor Bootcamp, moving from foundational concepts to building interactive, data-driven web applications. This journey has equipped you with a robust set of skills that empower you to leverage your C# knowledge for both front-end and full-stack web development. You've mastered the art of component-based UI design, understood how to manage application state effectively, integrated with external APIs, and navigated the nuances of Blazor's hosting models.

Specifically, you can now confidently:
*   **Design and build interactive Blazor components** using Razor syntax, C# logic, and lifecycle methods.
*   **Manage component state** and facilitate communication between parent and child components using parameters, event callbacks, and cascading values.
*   **Implement robust forms** with client-side validation using `EditForm` and `DataAnnotations`.
*   **Consume RESTful APIs** to fetch and manipulate data, making your applications dynamic and data-driven.
*   **Configure routing and layouts** to create multi-page Blazor applications with a consistent user experience.
*   **Understand the differences and use cases** for Blazor Server and Blazor WebAssembly.
*   **Perform basic JavaScript interoperability** to extend Blazor's capabilities with existing JS libraries.
*   **Identify and troubleshoot common Blazor development issues** like CORS errors and UI refresh problems.

### Where to go next: Continuing Your Blazor Journey

The world of Blazor and .NET is vast and continuously evolving. Your Blazor Bootcamp is a strong foundation, but there's always more to explore. Here are some recommended next steps and resources to deepen your expertise:

1.  **Dive Deeper into .NET Core and C#:** Blazor is built on .NET. A stronger grasp of advanced C# features (LINQ, async/await patterns, generics) and .NET Core fundamentals (middleware, dependency injection patterns, logging) will make you a more effective Blazor developer. Consider exploring more advanced .NET courses or documentation.
2.  **Explore Blazor Component Libraries:** Enhance your UI development speed and aesthetics by learning popular Blazor component libraries like MudBlazor, Blazorise, or Syncfusion Blazor. These libraries offer pre-built, styled components that can significantly accelerate your development workflow.
3.  **Master Authentication and Authorization:** For real-world applications, securing your Blazor app is crucial. Learn about Blazor's built-in authentication features, integrating with identity providers (e.g., Identity Server, Azure AD B2C), and implementing role-based authorization.
4.  **Build Progressive Web Applications (PWAs) with Blazor WebAssembly:** Discover how to turn your Blazor WebAssembly app into a PWA, offering offline capabilities, installability, and a native-app-like experience.
5.  **Contribute to Open Source or Personal Projects:** The best way to solidify your learning is by building. Start a new personal project, contribute to an existing open-source Blazor project, or actively participate in the Blazor community forums (e.g., Stack Overflow, Reddit's r/Blazor). Practical application of your skills will accelerate your growth exponentially.

Keep practicing, keep building, and stay curious! The Blazor community is vibrant and supportive, and your skills are now highly valuable in the modern web development landscape. We at Cohortia are incredibly proud of your accomplishments and look forward to seeing the amazing applications you'll create.

---


> End of Syllabus: Blazor Bootcamp
> Course ID: blazor-bootcamp
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Web Development
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
