---
course_title: Design Patterns in C# and .NET
course_id: design-patterns-in-c-and-net
provider: Cohortia
original_reference: Udemy / Online
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Software Engineering, Architecture & Design
skills: Object-Oriented Programming, C#, .NET Framework, Software Design, Architectural Patterns, Refactoring, Code Maintainability, Scalability, Testability, Problem Solving
ownership_note: Cohortia curates and rebuilds educational content to provide a comprehensive learning experience. While the foundational concepts of design patterns are universal, this course's specific structure, examples, and instructional approach are unique to Cohortia and do not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "Design Patterns in C# and .NET," a foundational course designed to empower you with the knowledge and practical skills to write cleaner, more maintainable, and scalable C# applications. This course is meticulously crafted for beginner-level developers who have a grasp of C# fundamentals and object-oriented programming (OOP) concepts, but are looking to elevate their code quality and architectural thinking. We'll embark on a journey through the world of established software design solutions, exploring how to apply them effectively within the .NET ecosystem. Understanding design patterns is not just about memorizing solutions; it's about learning to identify common problems in software development and applying proven, elegant solutions that have stood the test of time.

Throughout this course, we will demystify the core principles behind design patterns, starting with the crucial SOLID principles that underpin robust object-oriented design. We'll then systematically explore the three main categories of patterns: Creational, Structural, and Behavioral. For each pattern, you'll gain a deep understanding of its purpose, structure, and most importantly, practical C# implementations. We'll discuss the "when" and "why" to use a particular pattern, as well as the potential pitfalls and common mistakes to avoid. Our goal is to move beyond theoretical knowledge to practical application, enabling you to confidently integrate these powerful tools into your daily development workflow.

By the end of this course, you won't just know what design patterns are; you'll understand how to think like a seasoned architect, making informed decisions about your code structure. You'll be equipped to write code that is more flexible, easier to extend, simpler to test, and more resilient to change. This will significantly boost your productivity, enhance your collaboration with other developers, and ultimately lead to the development of higher-quality software solutions. Prepare to transform your approach to C# development, moving from simply writing code that works to crafting code that is truly well-designed and future-proof.

Upon successful completion of this course, you will be able to:

*   Articulate the purpose and benefits of design patterns in modern software development.
*   Apply the SOLID principles to design more robust and maintainable C# applications.
*   Implement common Creational design patterns (e.g., Singleton, Factory Method, Builder) to manage object instantiation effectively.
*   Utilize Structural design patterns (e.g., Adapter, Decorator, Facade) to compose objects into larger, more flexible structures.
*   Employ Behavioral design patterns (e.g., Strategy, Observer, Command, State) to manage object interactions and responsibilities.
*   Identify opportunities to refactor existing C# code to incorporate appropriate design patterns.
*   Understand the role of Dependency Injection and Inversion of Control in building loosely coupled systems.
*   Recognize common anti-patterns and understand how to avoid them in your C# projects.
*   Design and implement C# solutions that are more scalable, testable, and easier to maintain.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations: Introduction & SOLID Principles | 3 |
| 2 | Creational Patterns: Object Creation | 3 |
| 3 | Structural Patterns: Object Composition | 4 |
| 4 | Behavioral Patterns Part 1: Interaction & Responsibility | 4 |
| 5 | Behavioral Patterns Part 2 & Concurrency | 5 |
| 6 | Advanced Topics & Best Practices | 5 |

Total chapters: 24
---

## Module 1: Foundations: Introduction & SOLID Principles

**Module Goal:** Establish a strong foundational understanding of software design patterns, their purpose, and the critical role of the SOLID principles in building maintainable, flexible, and scalable C# and .NET applications.

### Chapter 1.1 — What are Design Patterns and Why Do We Need Them?

#### Learning objectives
*   Define what software design patterns are and their purpose in modern software development.
*   Explain the historical context and significance of the Gang of Four (GoF) patterns.
*   Identify the key benefits of applying design patterns in C# and .NET development.
*   Recognize potential pitfalls and anti-patterns associated with misusing design patterns.
*   Understand when to consider using a design pattern versus a simpler solution.

#### Detailed lesson content
Welcome to the exciting world of Design Patterns! As you embark on your journey to become a more proficient C# and .NET developer, you'll encounter complex problems that seem to recur across different projects. While every software system has its unique challenges, many architectural and design problems are surprisingly common. This is precisely where design patterns come into play. A design pattern is not a finished design that can be directly transformed into code; rather, it is a description or template for how to solve a problem that can be used in many different situations. Think of them as blueprints for common software structures, offering generalized, reusable solutions to common problems in software design.

The concept of design patterns was popularized by four authors—Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides—who became known as the "Gang of Four" (GoF). Their seminal 1994 book, "Design Patterns: Elements of Reusable Object-Oriented Software," documented 23 classic patterns, categorizing them into Creational, Structural, and Behavioral types. These patterns provided a common vocabulary and a structured way to think about object-oriented design problems, transforming how developers approached software architecture. Before the GoF book, developers often reinvented the wheel or struggled to communicate complex design ideas. With patterns, we gained a shared language to discuss proven solutions.

So, why should you, as a C# developer, invest time in learning design patterns? The benefits are manifold and directly impact the quality and longevity of your software. Firstly, patterns provide a **common vocabulary**. Instead of lengthy explanations for a specific architectural approach, you can simply say "I'm using the Singleton pattern here," and experienced developers immediately grasp the intent. This significantly improves communication within development teams. Secondly, they offer **proven solutions**. These aren't experimental ideas; they are tried-and-tested approaches that have been refined over years of real-world application. This reduces the risk of introducing new bugs or architectural flaws, saving development time and effort.

Furthermore, applying design patterns often leads to code that is more **maintainable and extensible**. Patterns promote modularity, meaning your code is broken down into smaller, more focused units. This makes it easier to understand, debug, and modify individual components without affecting the entire system. When new features are required, patterns often guide you towards adding new code rather than altering existing, working code, adhering to principles like the Open/Closed Principle (which we'll explore shortly). Lastly, patterns foster **reusability**. While you're not reusing exact code snippets, you're reusing design ideas and architectural principles, which can be applied across different projects and contexts, leading to more efficient development cycles.

Let's consider a practical scenario to illustrate the problem patterns aim to solve. Imagine you're building a C# application that processes customer orders. Initially, your `OrderProcessor` class might directly handle logging order events to the console:

```csharp
public class Order
{
    public int Id { get; set; }
    public decimal Amount { get; set; }
    public string CustomerEmail { get; set; }
}

public class OrderProcessor
{
    public void ProcessOrder(Order order)
    {
        // ... core order processing logic ...
        Console.WriteLine($"Order {order.Id} for {order.CustomerEmail} processed successfully."); // Hardcoded logging
        // ... more logic ...
    }
}
```
This seems fine at first. However, what if your business requirements change? You might need to log to a file, then to a database, then to a cloud-based logging service like Azure Application Insights or Serilog. If the `Console.WriteLine` call is scattered throughout `OrderProcessor` and other classes, every time the logging mechanism changes, you'd have to modify numerous places in your codebase. This creates a brittle system that is hard to maintain and prone to errors. A design pattern (like Strategy or Factory, which we'll cover later) could abstract this logging concern, allowing you to switch logging destinations without ever touching the `OrderProcessor`'s core logic. This separation of concerns is a cornerstone of good design.

While design patterns offer significant advantages, it's crucial to be aware of potential pitfalls and anti-patterns. The most common mistake is **over-engineering**, often referred to as the "Golden Hammer Syndrome." This occurs when developers apply patterns simply for the sake of using a pattern, even when a simpler, more straightforward solution would suffice. If all you have is a hammer, everything looks like a nail. Forcing a complex pattern onto a simple problem can introduce unnecessary complexity, reduce readability, and make the system harder to maintain than if no pattern had been used at all. Always start simple and introduce patterns only when the complexity of the problem genuinely warrants it.

Another pitfall is **misunderstanding** a pattern. Incorrectly implementing a pattern or using it in a context where it doesn't fit can lead to code that is worse than before, creating confusion and potential bugs. This often goes hand-in-hand with **cargo cult programming**, where developers copy a pattern's structure without fully grasping its underlying principles or the problem it's intended to solve. Always strive for deep understanding rather than superficial application. As a **safety note**, remember that patterns introduce abstraction, which can sometimes come at the cost of initial development time or even slight performance overhead. Always evaluate the trade-offs and prioritize clarity, maintainability, and suitability for the specific problem at hand. Design patterns are tools to solve problems, not goals in themselves.

#### Key concepts
*   **Design Pattern:** A general, reusable solution to a commonly occurring problem within a given context in software design. It's a template, not a finished code.
*   **Gang of Four (GoF):** The collective term for Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, authors of the influential book "Design Patterns: Elements of Reusable Object-Oriented Software."
*   **Anti-Pattern:** A common response to a recurring problem that is usually ineffective and may be counterproductive, leading to negative consequences.
*   **Over-engineering (Golden Hammer Syndrome):** The act of designing a product or system to be more robust or complex than necessary for its requirements, often by misapplying advanced solutions like design patterns.
*   **Common Vocabulary:** The shared language provided by design patterns that facilitates communication among developers about architectural solutions.

#### Hands-on activity
**Scenario:** You are building a simple e-commerce application where product notifications (e.g., "Product X is low in stock") are currently sent directly via `Console.WriteLine`. Your team lead anticipates that in the future, these notifications will need to be sent via email, SMS, or even integrated with a third-party notification service.

**Task:**
1.  Create a new C# console application project.
2.  Define a `Product` class with properties like `Id`, `Name`, and `StockLevel`.
3.  Implement a `ProductService` class with a `CheckStock` method. Inside `CheckStock`, if the `StockLevel` falls below a certain threshold (e.g., 10), call a private `NotifyLowStock` method.
4.  The `NotifyLowStock` method should currently just print a low stock alert to the console using `Console.WriteLine`.
5.  In your `Program.cs` `Main` method, create a `Product` instance with low stock and use `ProductService` to check its stock.
6.  **Reflection:** Without implementing a full design pattern yet, analyze your current `NotifyLowStock` implementation. If you had to add email and SMS notifications, what changes would you need to make to the `ProductService`? How does this design limit future extensibility? Think about how you might *start* to separate the notification logic from the `ProductService` to make it more flexible, perhaps by introducing an interface.

**Starter Code:**
```csharp
// Program.cs
using System;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int StockLevel { get; set; }
}

public class ProductService
{
    private const int LowStockThreshold = 10;

    public void CheckStock(Product product)
    {
        if (product.StockLevel < LowStockThreshold)
        {
            NotifyLowStock(product);
        }
        else
        {
            Console.WriteLine($"Product '{product.Name}' (ID: {product.Id}) stock is healthy: {product.StockLevel}.");
        }
    }

    private void NotifyLowStock(Product product)
    {
        // Current hardcoded notification mechanism
        Console.WriteLine($"ALERT: Product '{product.Name}' (ID: {product.Id}) is critically low in stock! Current level: {product.StockLevel}.");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var laptop = new Product { Id = 101, Name = "Gaming Laptop", StockLevel = 5 };
        var mouse = new Product { Id = 102, Name = "Wireless Mouse", StockLevel = 50 };
        var keyboard = new Product { Id = 103, Name = "Mechanical Keyboard", StockLevel = 8 };

        var productService = new ProductService();
        productService.CheckStock(laptop);
        productService.CheckStock(mouse);
        productService.CheckStock(keyboard);

        Console.WriteLine("\nPress any key to exit.");
        Console.ReadKey();
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following best describes the primary purpose of a software design pattern?
    a) To provide specific, ready-to-use code implementations for common algorithms.
    b) To establish a common vocabulary and provide proven solutions for recurring design problems.
    c) To enforce strict coding standards and prevent developers from writing inefficient code.
    d) To automatically generate boilerplate code for new projects.
    **Correct Answer:** b) To establish a common vocabulary and provide proven solutions for recurring design problems.
    **Explanation:** Design patterns are not concrete code but rather conceptual templates. Their main value lies in offering well-vetted solutions to common architectural challenges, fostering better communication among developers, and promoting maintainable, extensible codebases. They guide design, rather than providing direct code.

2.  **Question:** A junior developer on your team proposes using the "Factory Method" pattern for creating every single object in the application, arguing it makes the code more flexible. What common mistake or anti-pattern is this developer likely falling into, and why is it problematic in this scenario?
    **Correct Answer:** This developer is likely falling into the "Over-engineering" or "Golden Hammer Syndrome" anti-pattern.
    **Explanation:** While the Factory Method pattern is excellent for scenarios where object creation logic needs to be abstracted or varied, applying it to *every* object creation introduces unnecessary complexity. Most objects can be instantiated directly with `new` without any issues. Forcing a factory for simple objects:
    *   **Increases Code Verbosity:** Adds more classes and interfaces than necessary.
    *   **Reduces Readability:** Makes the code harder to follow for simple object creation.
    *   **Adds Maintenance Overhead:** More code to maintain and understand without a clear benefit.
    *   **Masks Simplicity:** Obscures the straightforward nature of simple object instantiation.
    Design patterns should be applied judiciously, only when the problem's complexity truly warrants their use, not as a default for all operations.

#### AI generation note
Create a 12-minute animated video explaining design patterns. Start with a visual metaphor of building with LEGO blocks, showing how patterns are like blueprints for common, robust structures. Illustrate the "logging problem" from the lesson content with before-and-after animated C# code snippets, highlighting the inflexibility of the "before" state and the potential for a more modular "after" state (without naming specific patterns yet). Include a brief segment on the GoF book cover and the three pattern categories (Creational, Structural, Behavioral). Conclude with a clear explanation of over-engineering and cargo cult programming using simple, relatable analogies. The video should have encouraging, professional narration and end with a 2-question interactive mini-quiz on the benefits and pitfalls of patterns.

### Chapter 1.2 — The SOLID Principles - Part 1 (SRP & OCP)

#### Learning objectives
*   Understand the origin and fundamental importance of the SOLID principles in object-oriented design and C# development.
*   Apply the Single Responsibility Principle (SRP) to design C# classes with clear, focused, and cohesive responsibilities.
*   Implement the Open/Closed Principle (OCP) to create C# code that is extensible with new functionality without requiring modification of existing, proven code.
*   Identify common violations of SRP and OCP in C# codebases and propose effective refactoring solutions.

#### Detailed lesson content
As we delve deeper into building robust and maintainable C# applications, understanding design patterns alone isn't enough. We also need a set of guiding principles that inform *how* we design our classes and modules. This is where the **SOLID principles** come in. Popularized by Robert C. Martin (Uncle Bob), SOLID is an acronym for five fundamental design principles that, when applied, help us create software that is more understandable, flexible, and maintainable. They are the bedrock upon which many effective design patterns are built, providing the "why" behind their structure. In this chapter, we'll focus on the first two: the Single Responsibility Principle and the Open/Closed Principle.

The **Single Responsibility Principle (SRP)** states: "A class should have only one reason to change." This is a deceptively simple statement that often gets misunderstood. It doesn't mean a class should only have one method, but rather that all its methods and properties should revolve around a single, well-defined purpose or responsibility. If a class has multiple responsibilities, changes to one responsibility can inadvertently affect others, leading to unexpected bugs, increased complexity, and making the code harder to test and maintain.

Consider a `User` class in a typical application.
*   **SRP Violation Example:**
    ```csharp
    public class User // Violates SRP
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public void SaveToDatabase()
        {
            Console.WriteLine($"Saving user {Name} to database...");
            // ... database persistence logic ...
        }

        public void SendWelcomeEmail()
        {
            Console.WriteLine($"Sending welcome email to {Email}...");
            // ... email sending logic ...
        }

        public bool IsValid()
        {
            // ... validation logic ...
            return !string.IsNullOrEmpty(Name) && !string.IsNullOrEmpty(Email);
        }
    }
    ```
    In this example, the `User` class has at least three distinct responsibilities: managing user data, persisting itself to a database, and sending emails. If the database schema changes, `SaveToDatabase` needs modification. If the email template changes, `SendWelcomeEmail` needs modification. If validation rules evolve, `IsValid` changes. Each of these is a "reason to change," making the `User` class fragile.

*   **Applying SRP:** To adhere to SRP, we would extract these separate responsibilities into their own dedicated classes or modules, often using interfaces to define contracts.
    ```csharp
    public class User // Now solely responsible for user data
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    public interface IUserRepository
    {
        void Save(User user);
    }

    public class SqlUserRepository : IUserRepository // Responsible for persistence
    {
        public void Save(User user)
        {
            Console.WriteLine($"Saving user {user.Name} to SQL database...");
            // ... SQL database persistence logic ...
        }
    }

    public interface IEmailService
    {
        void SendWelcomeEmail(User user);
    }

    public class SmtpEmailService : IEmailService // Responsible for email sending
    {
        public void SendWelcomeEmail(User user)
        {
            Console.WriteLine($"Sending welcome email to {user.Email} via SMTP...");
            // ... actual email sending logic ...
        }
    }

    public interface IUserValidator
    {
        bool Validate(User user);
    }

    public class BasicUserValidator : IUserValidator // Responsible for user validation
    {
        public bool Validate(User user)
        {
            Console.WriteLine($"Validating user {user.Name}...");
            return !string.IsNullOrEmpty(user.Name) && !string.IsNullOrEmpty(user.Email);
        }
    }

    // A high-level service now orchestrates these responsibilities
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IEmailService _emailService;
        private readonly IUserValidator _userValidator;

        public UserService(IUserRepository userRepository, IEmailService emailService, IUserValidator userValidator)
        {
            _userRepository = userRepository;
            _emailService = emailService;
            _userValidator = userValidator;
        }

        public void RegisterUser(User user)
        {
            if (!_userValidator.Validate(user))
            {
                Console.WriteLine("User validation failed.");
                return;
            }
            _userRepository.Save(user);
            _emailService.SendWelcomeEmail(user);
            Console.WriteLine($"User {user.Name} registered successfully.");
        }
    }
    ```
    Now, if email sending logic changes, only `SmtpEmailService` (or a new `IEmailService` implementation) is affected. The `User` class, `IUserRepository`, and `IUserValidator` remain untouched. This isolation of concerns makes the system far more robust and easier to manage. A common mistake is confusing "single responsibility" with "single method." A class can have multiple methods as long as they all contribute to its single, well-defined responsibility.

Next, let's explore the **Open/Closed Principle (OCP)**: "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification." This principle is crucial for building systems that can evolve without constant refactoring of existing, working code. When you need to add new functionality, you should be able to do so by adding new code, rather than altering code that has already been tested and deployed. This significantly reduces the risk of introducing new bugs into stable parts of your application.

OCP is typically achieved through abstraction and polymorphism. We define an abstraction (an interface or abstract class) that clients depend on. New functionality is then added by creating new concrete implementations of that abstraction, leaving the client code (which depends on the abstraction) unchanged.

*   **OCP Violation Example:**
    ```csharp
    public class Product
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; } // e.g., "Electronics", "Books", "Clothing"
    }

    public class DiscountCalculator // Violates OCP
    {
        public decimal CalculateDiscount(Product product)
        {
            decimal discount = 0;
            if (product.Category == "Electronics")
            {
                discount = product.Price * 0.10m; // 10% off electronics
            }
            else if (product.Category == "Books")
            {
                discount = product.Price * 0.15m; // 15% off books
            }
            // PROBLEM: Adding a new category (e.g., "HomeGoods") requires modifying this method.
            return discount;
        }
    }
    ```
    Here, if we introduce a new product category like "HomeGoods" with a different discount, we *must* modify the `CalculateDiscount` method in `DiscountCalculator`. This violates OCP because the class is not closed for modification when new functionality is added.

*   **Applying OCP:** We can refactor this using an interface to represent the discount strategy.
    ```csharp
    public interface IDiscountStrategy
    {
        decimal CalculateDiscount(Product product);
    }

    public class ElectronicsDiscountStrategy : IDiscountStrategy
    {
        public decimal CalculateDiscount(Product product)
        {
            return product.Category == "Electronics" ? product.Price * 0.10m : 0;
        }
    }

    public class BooksDiscountStrategy : IDiscountStrategy
    {
        public decimal CalculateDiscount(Product product)
        {
            return product.Category == "Books" ? product.Price * 0.15m : 0;
        }
    }

    // New strategy for a new category - no modification to existing code!
    public class HomeGoodsDiscountStrategy : IDiscountStrategy
    {
        public decimal CalculateDiscount(Product product)
        {
            return product.Category == "HomeGoods" ? product.Price * 0.05m : 0; // 5% off home goods
        }
    }

    public class FlexibleDiscountCalculator // Now closed for modification, open for extension
    {
        private readonly IEnumerable<IDiscountStrategy> _discountStrategies;

        public FlexibleDiscountCalculator(IEnumerable<IDiscountStrategy> discountStrategies)
        {
            _discountStrategies = discountStrategies;
        }

        public decimal GetTotalDiscount(Product product)
        {
            decimal totalDiscount = 0;
            foreach (var strategy in _discountStrategies)
            {
                totalDiscount += strategy.CalculateDiscount(product);
            }
            return totalDiscount;
        }
    }
    ```
    Now, to add a new discount category, you simply create a new class implementing `IDiscountStrategy` and register it with `FlexibleDiscountCalculator` (often via a Dependency Injection container, which we'll discuss with DIP). The `FlexibleDiscountCalculator` itself remains unchanged, making it open for extension (new discount types) but closed for modification. A **safety note** for OCP: while it encourages extensibility, avoid over-abstraction. Not every part of your system needs to be infinitely extensible from day one. Apply OCP where you genuinely anticipate future changes and extensions, as over-abstraction can introduce unnecessary complexity.

#### Key concepts
*   **SOLID Principles:** An acronym for five fundamental design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) intended to make software designs more understandable, flexible, and maintainable.
*   **Single Responsibility Principle (SRP):** A class should have only one reason to change, meaning it should have only one primary, well-defined responsibility.
*   **Open/Closed Principle (OCP):** Software entities should be open for extension (new functionality can be added) but closed for modification (existing, tested code should not need to change).
*   **Abstraction:** The process of hiding complex implementation details and showing only the essential features of an object. Interfaces and abstract classes are key to achieving OCP.
*   **Polymorphism:** The ability of an object to take on many forms. In C#, this is often achieved through interfaces and inheritance, allowing different objects to be treated as instances of a common type.

#### Hands-on activity
**Scenario:** You are developing a simple document management system. Currently, you have a `DocumentSaver` class that saves documents to a local file system. Your team expects to add cloud storage options (e.g., Azure Blob Storage, AWS S3) in the near future, and potentially database storage later.

**Task:**
1.  Create a C# console application.
2.  Define a `Document` class with properties like `Title` and `Content`.
3.  Implement an initial `FileDocumentSaver` class that saves a `Document` to a local file path. This initial design should *not* adhere to OCP.
4.  Refactor your design to adhere to the Open/Closed Principle. Introduce an `IDocumentSaver` interface.
5.  Modify `FileDocumentSaver` to implement `IDocumentSaver`.
6.  Create a hypothetical `CloudDocumentSaver` class that also implements `IDocumentSaver` (you don't need to implement actual cloud logic, just simulate it with `Console.WriteLine`).
7.  Demonstrate how a client (e.g., your `Program.cs` `Main` method) can use different `IDocumentSaver` implementations without modifying the client code itself, showcasing OCP.

**Starter Code (Initial OCP Violation):**
```csharp
// Program.cs
using System;
using System.IO;

public class Document
{
    public string Title { get; set; }
    public string Content { get; set; }
}

// Initial design - violates OCP if we add more saving types directly here
public class DocumentProcessor // This class will need modification if new saving methods are added
{
    public void SaveDocument(Document doc, string type, string destination)
    {
        if (type == "File")
        {
            Console.WriteLine($"Saving document '{doc.Title}' to local file: {destination}");
            File.WriteAllText(destination, doc.Content);
        }
        else if (type == "Cloud")
        {
            Console.WriteLine($"Saving document '{doc.Title}' to cloud storage: {destination}");
            // Imagine cloud specific API calls here
        }
        // PROBLEM: Adding "Database" saving would require modifying this method.
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var myDoc = new Document { Title = "Project Report", Content = "Executive summary:..." };
        var processor = new DocumentProcessor();

        // Using the OCP-violating processor
        processor.SaveDocument(myDoc, "File", "project_report.txt");
        processor.SaveDocument(myDoc, "Cloud", "my-bucket/reports/project_report.txt"); // If this was already added

        Console.WriteLine("\nPress any key to exit.");
        Console.ReadKey();
    }
}
```

#### Assessment idea
1.  **Question:** You have a `NotificationSender` class with a method `SendNotification(string message, string type)` that uses a series of `if/else if` statements to determine whether to send an email, SMS, or push notification based on the `type` parameter. Which SOLID principle is most clearly violated by this `NotificationSender` class, and why?
    **Correct Answer:** The Open/Closed Principle (OCP) is most clearly violated.
    **Explanation:** The `NotificationSender` class is not "closed for modification" because every time a new notification type (e.g., in-app message, webhook) needs to be added, the `SendNotification` method itself must be modified to include another `else if` block. This introduces a risk of breaking existing functionality and makes the class less extensible. To adhere to OCP, an abstraction (like an `INotificationSender` interface) should be used, allowing new notification types to be added as new implementations without changing the core `NotificationSender` logic.

2.  **Question:** Consider a `CustomerManager` class that contains methods for:
    1.  Creating a new customer record in the database.
    2.  Validating customer input (e.g., email format, address completeness).
    3.  Generating a PDF invoice for the customer.
    Explain how this `CustomerManager` class violates the Single Responsibility Principle (SRP) and describe how you would refactor it to better adhere to SRP.
    **Correct Answer:** The `CustomerManager` class violates the Single Responsibility Principle (SRP) because it has multiple reasons to change.
    **Explanation:**
    *   **Reason 1 (Database Operations):** If the database technology or schema for customer records changes, the methods related to creating customer records would need modification.
    *   **Reason 2 (Validation Logic):** If the rules for customer input validation change (e.g., new email regex, different address requirements), the validation methods would need modification.
    *   **Reason 3 (Invoice Generation):** If the format or content of the PDF invoice changes, the invoice generation methods would need modification.
    Each of these is a distinct responsibility.
    **Refactoring to adhere to SRP:**
    To refactor, we would extract each responsibility into its own dedicated class or module, often defined by interfaces:
    *   Create an `ICustomerRepository` interface (e.g., `SqlCustomerRepository`) for database operations.
    *   Create an `ICustomerValidator` interface (e.g., `EmailCustomerValidator`, `AddressCustomerValidator`) for validation logic.
    *   Create an `IInvoiceGenerator` interface (e.g., `PdfInvoiceGenerator`) for invoice creation.
    The `CustomerManager` would then become a higher-level orchestrator, taking instances of these specialized interfaces (via constructor injection) and coordinating their actions, rather than performing all the work itself. This makes each component focused, easier to test, and less prone to breaking when one specific responsibility changes.

#### AI generation note
Produce a 15-minute interactive coding demo. Begin by showing a clear violation of SRP in a C# `ReportProcessor` class (handling data fetching, formatting, and sending). Live refactor it step-by-step into separate `IDataFetcher`, `IReportFormatter`, and `IReportSender` components using interfaces and a new `ReportService` orchestrator. Then, demonstrate an OCP violation in a `ShippingCostCalculator` with `if/else if` statements for different shipping regions. Refactor it using an `IShippingStrategy` interface and show how to add a new region's shipping logic without touching the `ShippingCostCalculator`. Use a split-screen view for code and console output. Include a 3-question multiple-choice quiz after the explanation and refactoring of each principle.

### Chapter 1.3 — The SOLID Principles - Part 2 (LSP, ISP & DIP)

#### Learning objectives
*   Explain the Liskov Substitution Principle (LSP) and its implications for designing robust inheritance hierarchies in C#.
*   Apply the Interface Segregation Principle (ISP) to design granular and focused interfaces, avoiding "fat" interfaces.
*   Understand the Dependency Inversion Principle (DIP) and its crucial role in achieving loose coupling and testability in C# applications.
*   Demonstrate how to use dependency injection as a primary mechanism to achieve DIP in practical C# scenarios.
*   Identify common violations of LSP, ISP, and DIP and propose effective refactoring strategies.

#### Detailed lesson content
Continuing our exploration of the SOLID principles, we now delve into the remaining three: Liskov Substitution, Interface Segregation, and Dependency Inversion. These principles are vital for refining our approach to building robust, flexible, and maintainable C# applications, especially as systems grow in complexity. They guide us in structuring our code to be more resilient to change and easier to test.

The **Liskov Substitution Principle (LSP)** states: "Subtypes must be substitutable for their base types without altering the correctness of the program." In simpler terms, if you have a base class or an interface, you should be able to use any of its derived classes or implementations interchangeably wherever the base type is expected, and the program should still behave as expected, without unexpected errors or incorrect results. LSP ensures that inheritance (or interface implementation) is used correctly, preserving the "is-a" relationship and preventing client code from needing to know the specific concrete type it's dealing with.

A common violation of LSP occurs when a derived class overrides a base method in a way that fundamentally changes its expected behavior, often by throwing an exception or doing nothing when the base method promises an action.
*   **LSP Violation Example:**
    ```csharp
    public class Bird
    {
        public virtual void Fly()
        {
            Console.WriteLine("Bird is flying.");
        }
    }

    public class Penguin : Bird // Penguin is a Bird, but cannot fly.
    {
        public override void Fly()
        {
            // This violates LSP because a Penguin cannot fly,
            // so substituting a Penguin for a Bird breaks the expectation of the Fly method.
            throw new NotSupportedException("Penguins cannot fly!");
        }
    }

    public class Aviary
    {
        public void MakeBirdsFly(List<Bird> birds)
        {
            foreach (var bird in birds)
            {
                bird.Fly(); // This will crash if a Penguin is in the list
            }
        }
    }
    ```
    The problem here is that the `Bird` class has a `Fly` method, implying all `Bird`s can fly. When `Penguin` (a `Bird`) cannot fulfill this contract, it violates LSP. Client code expecting any `Bird` to fly will fail.

*   **Applying LSP:** The solution is to refine the abstraction. If not all birds can fly, then `Fly` should not be a method of the base `Bird` class. Instead, introduce an interface for flying behavior.
    ```csharp
    public class Bird // Base class for all birds, focuses on common bird attributes/behaviors
    {
        public string Species { get; set; }
        public virtual void Eat()
        {
            Console.WriteLine($"{Species} is eating.");
        }
    }

    public interface IFlyable // Abstraction for flying behavior
    {
        void Fly();
    }

    public class Sparrow : Bird, IFlyable // Sparrow is a Bird AND can Fly
    {
        public Sparrow() { Species = "Sparrow"; }
        public void Fly()
        {
            Console.WriteLine($"{Species} is flying high.");
        }
    }

    public class Penguin : Bird // Penguin is a Bird, but does NOT implement IFlyable
    {
        public Penguin() { Species = "Penguin"; }
        public void Swim()
        {
            Console.WriteLine($"{Species} is swimming gracefully.");
        }
    }

    public class Aviary
    {
        public void MakeBirdsEat(List<Bird> birds)
        {
            foreach (var bird in birds)
            {
                bird.Eat(); // All Birds can eat, so this is safe
            }
        }

        public void MakeFlyablesFly(List<IFlyable> flyables)
        {
            foreach (var flyable in flyables)
            {
                flyable.Fly(); // Only objects that can fly are in this list, so this is safe
            }
        }
    }
    ```
    By segregating the `Fly` behavior into an `IFlyable` interface, we ensure that only objects truly capable of flying are treated as such. `Penguin` can still be a `Bird` and exhibit common `Bird` behaviors (like `Eat`), but it won't be expected to fly. A **common mistake** is to use `NotSupportedException` or empty method bodies in derived classes to "implement" methods they can't actually perform; this is a strong indicator of an LSP violation.

Next, we have the **Interface Segregation Principle (ISP)**: "Clients should not be forced to depend on interfaces they do not use." This principle tackles the problem of "fat interfaces"—large, monolithic interfaces that bundle too many unrelated methods. When a class implements such a fat interface, it's forced to provide implementations for methods it doesn't need, often leading to empty method bodies or `NotSupportedException`s, which also hints at an LSP violation. ISP promotes smaller, role-specific interfaces, making systems more cohesive and loosely coupled.

*   **ISP Violation Example:**
    ```csharp
    // Violation of ISP - a "fat" interface
    public interface IMultiFunctionDevice
    {
        void Print(string document);
        void Scan(string document);
        void Fax(string document);
        void Copy(string document);
        void Staple(string document); // Not all devices can staple
    }

    public class BasicPrinter : IMultiFunctionDevice // Forced to implement all methods
    {
        public void Print(string document) => Console.WriteLine($"Basic Printer: Printing {document}");
        public void Scan(string document) => throw new NotSupportedException("Basic Printer cannot scan.");
        public void Fax(string document) => throw new NotSupportedException("Basic Printer cannot fax.");
        public void Copy(string document) => throw new NotSupportedException("Basic Printer cannot copy.");
        public void Staple(string document) => throw new NotSupportedException("Basic Printer cannot staple.");
    }
    ```
    Here, `BasicPrinter` is forced to implement methods like `Scan`, `Fax`, `Copy`, and `Staple` even though it doesn't support them. This makes the `BasicPrinter` class unnecessarily complex and fragile.

*   **Applying ISP:** We should break down `IMultiFunctionDevice` into smaller, more focused interfaces.
    ```csharp
    // Applying ISP - segregated interfaces
    public interface IPrinter
    {
        void Print(string document);
    }

    public interface IScanner
    {
        void Scan(string document);
    }

    public interface IFaxMachine
    {
        void Fax(string document);
    }

    public interface IStapler
    {
        void Staple(string document);
    }

    public class BasicPrinter : IPrinter // Only implements what it needs
    {
        public void Print(string document) => Console.WriteLine($"Basic Printer: Printing {document}");
    }

    public class OfficeMultiFunctionDevice : IPrinter, IScanner, IFaxMachine, IStapler // Implements all it supports
    {
        public void Print(string document) => Console.WriteLine($"Office MFD: Printing {document}");
        public void Scan(string document) => Console.WriteLine($"Office MFD: Scanning {document}");
        public void Fax(string document) => Console.WriteLine($"Office MFD: Faxing {document}");
        public void Staple(string document) => Console.WriteLine($"Office MFD: Stapling {document}");
    }
    ```
    Now, `BasicPrinter` only depends on `IPrinter`, and clients that only need printing functionality only depend on `IPrinter`. This reduces coupling and makes the system more flexible. A **safety note**: While ISP encourages small interfaces, avoid creating an interface for every single method. The goal is to group related behaviors that clients would typically use together, not to atomize every operation.

Finally, we arrive at the **Dependency Inversion Principle (DIP)**: "High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions." This is arguably the most crucial SOLID principle for achieving loose coupling, testability, and maintainability in large-scale applications. It essentially flips the traditional dependency flow: instead of high-level business logic depending directly on concrete implementations (low-level details), both depend on interfaces (abstractions).

*   **DIP Violation Example:**
    ```csharp
    public class SqlDatabaseLogger // Low-level concrete detail
    {
        public void LogError(string message)
        {
            Console.WriteLine($"SQL DB Logger: Logging error '{message}' to database.");
            // ... SQL database specific code ...
        }
    }

    public class OrderProcessor // High-level module directly depends on concrete logger
    {
        private SqlDatabaseLogger _logger; // Direct dependency on concrete class

        public OrderProcessor()
        {
            _logger = new SqlDatabaseLogger(); // OrderProcessor creates its own dependency
        }

        public void ProcessOrder(int orderId)
        {
            try
            {
                Console.WriteLine($"Processing order {orderId}...");
                // ... complex order processing logic ...
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to process order {orderId}: {ex.Message}");
            }
        }
    }
    ```
    In this example, `OrderProcessor` (a high-level module containing business logic) directly depends on `SqlDatabaseLogger` (a low-level concrete implementation). If you want to switch to a file logger or a cloud logger, you have to modify `OrderProcessor`. Furthermore, testing `OrderProcessor` becomes difficult because it's tightly coupled to a real database logger.

*   **Applying DIP (using Dependency Injection):**
    ```csharp
    public interface ILogger // Abstraction
    {
        void LogError(string message);
    }

    public class SqlDatabaseLogger : ILogger // Low-level detail depends on abstraction
    {
        public void LogError(string message)
        {
            Console.WriteLine($"SQL DB Logger: Logging error '{message}' to database.");
            // ... SQL database specific code ...
        }
    }

    public class FileLogger : ILogger // Another low-level detail depends on abstraction
    {
        public void LogError(string message)
        {
            Console.WriteLine($"File Logger: Writing error '{message}' to log.txt.");
            // ... file system specific code ...
        }
    }

    public class OrderProcessor // High-level module depends on abstraction
    {
        private readonly ILogger _logger; // Dependency on abstraction

        // Dependency Injected via constructor
        public OrderProcessor(ILogger logger)
        {
            _logger = logger;
        }

        public void ProcessOrder(int orderId)
        {
            try
            {
                Console.WriteLine($"Processing order {orderId}...");
                // ... complex order processing logic ...
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to process order {orderId}: {ex.Message}");
            }
        }
    }

    // In your application's composition root (e.g., Program.cs or Startup.cs)
    public class Program
    {
        public static void Main(string[] args)
        {
            // The concrete dependency is created here, outside the high-level module
            ILogger sqlLogger = new SqlDatabaseLogger();
            OrderProcessor processorWithSqlLogger = new OrderProcessor(sqlLogger);
            processorWithSqlLogger.ProcessOrder(101);

            Console.WriteLine("\n--- Switching Logger ---\n");

            ILogger fileLogger = new FileLogger();
            OrderProcessor processorWithFileLogger = new OrderProcessor(fileLogger);
            processorWithFileLogger.ProcessOrder(102);

            Console.WriteLine("\nPress any key to exit.");
            Console.ReadKey();
        }
    }
    ```
    Now, `OrderProcessor` doesn't know or care about the concrete logging mechanism; it only knows it needs an `ILogger`. This makes `OrderProcessor` highly flexible, easily testable (you can inject a mock `ILogger` for unit tests), and maintainable. Changes to logging implementation don't affect `OrderProcessor`. Dependency Injection (DI) frameworks (like the built-in one in .NET Core) greatly simplify managing these dependencies, but understanding the underlying DIP is key. A **safety note**: The most common DIP violation is directly instantiating dependencies (`new SomeConcreteClass()`) within your high-level business logic. Avoid this practice wherever possible.

#### Key concepts
*   **Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types without altering the correctness of the program. It ensures that derived classes extend the behavior of the base class without breaking its contract.
*   **Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use. It advocates for many small, specific interfaces over one large, general-purpose ("fat") interface.
*   **Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
*   **Dependency Injection (DI):** A technique where an object receives other objects that it depends on ("dependencies"). This is the primary mechanism used to achieve the Dependency Inversion Principle, typically via constructor, property, or method injection.
*   **Composition Root:** The specific location in an application where modules are composed together, and dependencies are wired up, typically at the application's startup.

#### Hands-on activity
**Scenario:** You are building a `PaymentGateway` service that needs to process various payment types (e.g., Credit Card, PayPal). Currently, your `PaymentGateway` directly instantiates a concrete `CreditCardProcessor` to handle payments. Your team wants to add support for PayPal and ensure the `PaymentGateway` is easily testable without making actual financial transactions.

**Task:**
1.  Create a C# console application.
2.  Define a simple `PaymentRequest` class (e.g., `Amount`, `CardNumber`, `PayPalEmail`).
3.  Implement an initial `CreditCardProcessor` class with a `Process(PaymentRequest request)` method that simulates credit card processing.
4.  Implement an initial `PaymentGateway` class that directly instantiates and uses the concrete `CreditCardProcessor`. This design should violate DIP.
5.  Refactor your design to adhere to the Dependency Inversion Principle.
    *   Introduce an `IPaymentProcessor` interface.
    *   Make `CreditCardProcessor` implement `IPaymentProcessor`.
    *   Create a new `PayPalProcessor` class that also implements `IPaymentProcessor` (simulate PayPal processing with `Console.WriteLine`).
    *   Modify `PaymentGateway` to accept an `IPaymentProcessor` via its constructor (Dependency Injection).
6.  Demonstrate how to process a credit card payment and a PayPal payment using the refactored `PaymentGateway` from your `Program.cs`, showcasing how the `PaymentGateway` is now decoupled from concrete payment processors.

**Starter Code (Initial DIP Violation):**
```csharp
// Program.cs
using System;

public class PaymentRequest
{
    public decimal Amount { get; set; }
    public string CardNumber { get; set; } // For credit card
    public string PayPalEmail { get; set; } // For PayPal
    public string PaymentMethod { get; set; } // "CreditCard" or "PayPal"
}

// Low-level concrete detail
public class CreditCardProcessor
{
    public void Process(PaymentRequest request)
    {
        Console.WriteLine($"Processing credit card payment of {request.Amount:C} for card {request.CardNumber.Substring(0, 4)}XXXXXX.");
        // Imagine actual credit card API calls here
    }
}

// High-level module directly depends on low-level concrete implementation
public class PaymentGateway // Violates DIP
{
    private CreditCardProcessor _creditCardProcessor;

    public PaymentGateway()
    {
        _creditCardProcessor = new CreditCardProcessor(); // Direct instantiation of dependency
    }

    public void InitiatePayment(PaymentRequest request)
    {
        if (request.PaymentMethod == "CreditCard")
        {
            _creditCardProcessor.Process(request);
        }
        else
        {
            Console.WriteLine($"Payment method '{request.PaymentMethod}' not supported by this gateway version.");
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var ccPayment = new PaymentRequest { Amount = 99.99m, CardNumber = "1111222233334444", PaymentMethod = "CreditCard" };
        var ppPayment = new PaymentRequest { Amount = 49.50m, PayPalEmail = "user@example.com", PaymentMethod = "PayPal" };

        var gateway = new PaymentGateway();
        gateway.InitiatePayment(ccPayment);
        gateway.InitiatePayment(ppPayment); // This will fail with the current design

        Console.WriteLine("\nPress any key to exit.");
        Console.ReadKey();
    }
}
```

#### Assessment idea
1.  **Question:** You have an interface `IWorker` with methods `Work()`, `Eat()`, `Sleep()`, and `ManageTeam()`. You then create two classes, `RobotWorker` and `HumanWorker`, both implementing `IWorker`. `RobotWorker` throws a `NotSupportedException` for `Eat()`, `Sleep()`, and `ManageTeam()`. Which SOLID principle is being violated here, and how would you refactor the interfaces to fix it?
    **Correct Answer:** The Interface Segregation Principle (ISP) is being violated.
    **Explanation:** The `IWorker` interface is a "fat interface" because `RobotWorker` is forced to implement methods (`Eat`, `Sleep`, `ManageTeam`) that are irrelevant to its capabilities. This leads to `NotSupportedException`s or empty implementations, which is a clear sign of ISP violation.
    **Refactoring:** To fix this, the `IWorker` interface should be segregated into smaller, more focused interfaces, each representing a distinct capability:
    ```csharp
    public interface IWorkable { void Work(); }
    public interface IEatable { void Eat(); }
    public interface ISleepable { void Sleep(); }
    public interface IManageable { void ManageTeam(); }

    public class RobotWorker : IWorkable // Robot only implements what it can do
    {
        public void Work() => Console.WriteLine("Robot working.");
    }

    public class HumanWorker : IWorkable, IEatable, ISleepable, IManageable // Human implements all relevant capabilities
    {
        public void Work() => Console.WriteLine("Human working.");
        public void Eat() => Console.WriteLine("Human eating.");
        public void Sleep() => Console.WriteLine("Human sleeping.");
        public void ManageTeam() => Console.WriteLine("Human managing team.");
    }
    ```
    Now, clients only depend on the interfaces they actually need, and `RobotWorker` is not forced to implement irrelevant methods, making the design more robust and flexible.

2.  **Question:** Explain how the Dependency Inversion Principle (DIP) contributes significantly to making a C# application more testable and maintainable. Provide a simple C# code example demonstrating a common violation of DIP and then show how to fix it using constructor injection.
    **Correct Answer:** DIP enhances testability and maintainability by decoupling high-level modules from low-level concrete implementations, making both depend on abstractions.
    **Explanation:**
    *   **Testability:** When a high-level module (e.g., a `ProductService`) depends on an abstraction (e.g., `IProductRepository`) rather than a concrete implementation (e.g., `EntityFrameworkProductRepository`), during unit testing, you can easily provide a "mock" or "fake" implementation of `IProductRepository`. This mock can simulate different scenarios (e.g., product found, product not found, database error) without needing a real database connection. This allows the `ProductService` to be tested in isolation, making tests faster, more reliable, and easier to write.
    *   **Maintainability:** Changes to a low-level detail (e.g., switching from Entity Framework to Dapper for data access, or changing from a local file system to Azure Blob Storage) only require creating a new implementation of the abstraction (e.g., `DapperProductRepository`, `AzureBlobProductRepository`) and updating the application's composition root (where dependencies are wired up). The high-level `ProductService` remains untouched, reducing the risk of introducing bugs into core business logic and making the system more resilient to technological changes.
    **DIP Violation Example:**
    ```csharp
    public class EmailSender // Low-level concrete detail
    {
        public void SendEmail(string to, string subject, string body)
        {
            Console.WriteLine($"Sending email to {to}: '{subject}' - '{body}'");
            // ... actual SMTP client code ...
        }
    }

    public class OrderConfirmationService // High-level module depends on concrete EmailSender
    {
        private EmailSender _emailSender;
        public OrderConfirmationService()
        {
            _emailSender = new EmailSender(); // Direct instantiation, tight coupling
        }
        public void ConfirmOrder(int orderId, string customerEmail)
        {
            string subject = $"Order {orderId} Confirmed";
            string body = $"Your order {orderId} has been successfully processed.";
            _emailSender.SendEmail(customerEmail, subject, body);
            Console.WriteLine($"Order {orderId} confirmed for {customerEmail}.");
        }
    }
    ```
    **DIP Fix with Constructor Injection:**
    ```csharp
    public interface IEmailSender // Abstraction
    {
        void SendEmail(string to, string subject, string body);
    }

    public class SmtpEmailSender : IEmailSender // Low-level detail depends on abstraction
    {
        public void SendEmail(string to, string subject, string body)
        {
            Console.WriteLine($"SMTP Sender: Sending email to {to}: '{subject}' - '{body}'");
            // ... actual SMTP client code ...
        }
    }

    public class MockEmailSender : IEmailSender // Another low-level detail (for testing)
    {
        public void SendEmail(string to, string subject, string body)
        {
            Console.WriteLine($"MOCK Sender: Simulating email to {to}: '{subject}' - '{body}'");
        }
    }

    public class OrderConfirmationService // High-level module depends on abstraction
    {
        private readonly IEmailSender _emailSender;
        public OrderConfirmationService(IEmailSender emailSender) // Dependency Injected
        {
            _emailSender = emailSender;
        }
        public void ConfirmOrder(int orderId, string customerEmail)
        {
            string subject = $"Order {orderId} Confirmed";
            string body = $"Your order {orderId} has been successfully processed.";
            _emailSender.SendEmail(customerEmail, subject, body);
            Console.WriteLine($"Order {orderId} confirmed for {customerEmail}.");
        }
    }
    ```
    The `OrderConfirmationService` is now decoupled from the specific `IEmailSender` implementation. This allows for easy substitution of different email senders (e.g., a real one in production, a mock one in tests) without modifying the core service logic.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with a 5-minute animated explanation of LSP using the `Bird`/`Penguin` example, visually demonstrating how `Aviary` breaks when `Penguin` is substituted and then showing the refactored `IFlyable` approach. Transition to a 5-minute interactive slide deck explaining ISP with the `IMultiFunctionDevice` example, showing the "fat" interface and then the segregated ones, with a drag-and-drop exercise to match methods to appropriate interfaces. Finally, a 5-minute live coding demo in C# showing a simple DIP setup with `ILogger` and `ConsoleLogger`/`FileLogger` being injected into a `Processor` class, emphasizing constructor injection and the benefits for testing. Use clear, concise narration throughout.

---

## Module 2: Creational Patterns: Object Creation

**Module Goal:** To equip learners with the understanding and practical skills to implement fundamental creational design patterns in C# and .NET, enabling them to design flexible, maintainable, and scalable object creation mechanisms.

### Chapter 2.1 — The Singleton Pattern: Ensuring a Single Instance

#### Learning objectives
*   Understand the purpose and benefits of the Singleton design pattern in C# applications.
*   Implement the Singleton pattern using various thread-safe techniques, including `lock` and `Lazy<T>`.
*   Identify appropriate scenarios for applying the Singleton pattern, such as resource management or configuration.
*   Recognize the potential drawbacks and common mistakes associated with the Singleton pattern.
*   Apply the Singleton pattern to create a centralized logging utility.

#### Detailed lesson content
Welcome to the world of Creational Design Patterns! Our journey begins with one of the simplest yet frequently debated patterns: the Singleton. At its core, the Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. Imagine a scenario where you absolutely need to guarantee that only one object of a particular type exists throughout your application's lifecycle. This could be for managing a shared resource like a database connection pool, a configuration manager that loads settings once, or a logging service that writes to a single file. Without a mechanism like Singleton, multiple instances could lead to resource contention, inconsistent state, or unnecessary overhead.

The fundamental idea behind implementing a Singleton in C# involves a few key steps. First, you must make the class's constructor `private`. This prevents external code from directly creating new instances using the `new` keyword. Second, you need to create a `static` member within the class itself to hold the single instance. Third, you provide a `public static` method or property that acts as the global access point. This method or property is responsible for creating the instance the first time it's requested and then returning the same instance on all subsequent calls.

Let's consider a basic, non-thread-safe implementation first, to grasp the core concept. While this version is simple, it's crucial to understand its limitations, especially in multi-threaded environments where multiple threads might try to create an instance concurrently, leading to more than one Singleton being created.

```csharp
public sealed class ConfigurationManager
{
    private static ConfigurationManager _instance;
    private readonly Dictionary<string, string> _settings;

    // Private constructor prevents direct instantiation
    private ConfigurationManager()
    {
        _settings = new Dictionary<string, string>();
        LoadSettingsFromFile(); // Simulate loading settings
        Console.WriteLine("ConfigurationManager instance created.");
    }

    // Public static property to get the instance
    public static ConfigurationManager Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = new ConfigurationManager();
            }
            return _instance;
        }
    }

    private void LoadSettingsFromFile()
    {
        // In a real app, this would read from appsettings.json, a database, etc.
        _settings.Add("DatabaseConnection", "Server=.;Database=AppDB;");
        _settings.Add("LogLevel", "Info");
    }

    public string GetSetting(string key)
    {
        return _settings.TryGetValue(key, out var value) ? value : null;
    }

    public void SetSetting(string key, string value)
    {
        _settings[key] = value;
    }
}

// Usage:
// string dbConn = ConfigurationManager.Instance.GetSetting("DatabaseConnection");
// Console.WriteLine($"DB Connection: {dbConn}");
// ConfigurationManager.Instance.SetSetting("LogLevel", "Debug");
```

The problem with the above code is evident in a multi-threaded application. If two threads simultaneously check `_instance == null` and both find it to be true, they might both proceed to create new `ConfigurationManager` instances, violating the core principle of the Singleton pattern. To address this, we need thread-safe implementations.

One common approach to achieve thread safety is using the `lock` keyword. This ensures that only one thread can enter a critical section of code at a time. The double-checked locking pattern is often employed here to minimize the performance overhead of the lock:

```csharp
public sealed class ThreadSafeConfigurationManager
{
    private static ThreadSafeConfigurationManager _instance;
    private static readonly object _lock = new object();
    private readonly Dictionary<string, string> _settings;

    private ThreadSafeConfigurationManager()
    {
        _settings = new Dictionary<string, string>();
        LoadSettingsFromFile();
        Console.WriteLine("ThreadSafeConfigurationManager instance created.");
    }

    public static ThreadSafeConfigurationManager Instance
    {
        get
        {
            if (_instance == null) // First check (no lock)
            {
                lock (_lock) // Lock only if instance might be null
                {
                    if (_instance == null) // Second check (inside lock)
                    {
                        _instance = new ThreadSafeConfigurationManager();
                    }
                }
            }
            return _instance;
        }
    }

    private void LoadSettingsFromFile() { /* ... same as above ... */ }
    public string GetSetting(string key) { /* ... same as above ... */ }
    public void SetSetting(string key, string value) { /* ... same as above ... */ }
}
```

While double-checked locking works, it can be tricky to implement correctly and has subtle issues in some memory models. A more elegant and idiomatic C# solution for lazy, thread-safe initialization is to use the `Lazy<T>` class, introduced in .NET Framework 4. This class handles all the complexities of thread safety and lazy initialization for you, making your code cleaner and less error-prone.

```csharp
public sealed class LazyConfigurationManager
{
    private static readonly Lazy<LazyConfigurationManager> _lazyInstance =
        new Lazy<LazyConfigurationManager>(() => new LazyConfigurationManager());

    private readonly Dictionary<string, string> _settings;

    private LazyConfigurationManager()
    {
        _settings = new Dictionary<string, string>();
        LoadSettingsFromFile();
        Console.WriteLine("LazyConfigurationManager instance created.");
    }

    public static LazyConfigurationManager Instance => _lazyInstance.Value;

    private void LoadSettingsFromFile() { /* ... same as above ... */ }
    public string GetSetting(string key) { /* ... same as above ... */ }
    public void SetSetting(string key, string value) { /* ... same as above ... */ }
}
```

The `Lazy<T>` approach is generally preferred in modern C# development for its simplicity and robustness. The instance is created only when `_lazyInstance.Value` is first accessed, and the `Lazy<T>` class guarantees thread safety.

Despite its utility, the Singleton pattern is often considered an anti-pattern by some developers. Common mistakes include overusing it for objects that don't truly require a single instance, which can lead to tight coupling throughout your application. When many parts of your code directly depend on `Singleton.Instance`, it becomes difficult to test components in isolation (mocking a Singleton can be challenging) and reduces flexibility. Another pitfall is making the Singleton responsible for too many things, violating the Single Responsibility Principle. A Singleton should ideally have a very focused role, like managing a specific resource or configuration. Before implementing a Singleton, always ask yourself: "Does this object *truly* need to be unique across the entire application, and is there no better way to manage its lifecycle or provide its services?" Often, dependency injection can provide a more flexible alternative for managing single instances of services without the global access point and tight coupling issues inherent in the Singleton pattern.

#### Key concepts
*   **Singleton Pattern:** A creational design pattern that ensures a class has only one instance and provides a global point of access to it.
*   **Private Constructor:** A constructor declared as `private` to prevent direct instantiation of a class from outside.
*   **Static Instance:** A `static` field within the Singleton class that holds the single instance of the class.
*   **Global Access Point:** A `public static` method or property that returns the single instance of the Singleton.
*   **Thread Safety:** The ability of code to function correctly in a multi-threaded environment, preventing issues like race conditions when multiple threads access shared resources.
*   **Double-Checked Locking:** A technique used to reduce the overhead of acquiring a lock by first checking a condition without a lock, and then re-checking it inside a lock.
*   **`Lazy<T>`:** A .NET class that provides support for lazy initialization, ensuring an object is created only when it's first accessed, with built-in thread safety.

#### Hands-on activity
**Activity: Implement a Thread-Safe Logger Singleton**

Your task is to create a simple logging utility using the `Lazy<T>`-based Singleton pattern. This logger should allow messages to be written to a console (or a simulated file).

**Starter Code:**

```csharp
using System;
using System.IO;
using System.Threading;

public sealed class Logger
{
    // TODO: Implement the Lazy<T> Singleton pattern here.
    // The instance should be created only when first accessed.
    private static readonly Lazy<Logger> _lazyInstance = new Lazy<Logger>(() => new Logger());

    // Private constructor
    private Logger()
    {
        Console.WriteLine("Logger instance initialized.");
        // In a real scenario, you might open a log file here.
    }

    // Public static property to get the instance
    public static Logger Instance => _lazyInstance.Value;

    public void LogMessage(string message)
    {
        string logEntry = $"{DateTime.Now:yyyy-MM-dd HH:mm:ss} [{Thread.CurrentThread.ManagedThreadId}] {message}";
        Console.WriteLine(logEntry);
        // In a real scenario, you would write this to a file.
        // For this exercise, writing to console is sufficient.
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Application started.");

        // Simulate multiple threads trying to log
        Thread t1 = new Thread(() =>
        {
            Logger.Instance.LogMessage("Message from Thread 1.");
            Logger.Instance.LogMessage("Another message from Thread 1.");
        });

        Thread t2 = new Thread(() =>
        {
            Logger.Instance.LogMessage("Message from Thread 2.");
        });

        Thread t3 = new Thread(() =>
        {
            Logger.Instance.LogMessage("Message from Thread 3.");
            Logger.Instance.LogMessage("Final message from Thread 3.");
        });

        t1.Start();
        t2.Start();
        t3.Start();

        t1.Join();
        t2.Join();
        t3.Join();

        Console.WriteLine("Application finished.");
        // Verify that "Logger instance initialized." appears only once.
    }
}
```

**Instructions:**
1.  Complete the `Logger` class implementation using the `Lazy<T>` Singleton pattern.
2.  Run the `Program.Main` method.
3.  Observe the output. You should see "Logger instance initialized." printed exactly once, regardless of how many threads access `Logger.Instance`. This demonstrates the lazy and thread-safe nature of your Singleton.

#### Assessment idea
1.  **Question:** You are designing a caching service for a high-traffic web application. This service needs to store frequently accessed data in memory and should be accessible from anywhere in the application. You want to ensure that there is only one instance of this caching service to avoid data inconsistencies and manage memory efficiently. Which design pattern would you use, and why is it suitable? Provide a brief C# code snippet demonstrating the core of its implementation.
    **Correct Answer:** The Singleton pattern is suitable for this scenario.
    **Why:** A caching service often manages a shared, application-wide resource (the cache itself). Ensuring a single instance prevents multiple caches from existing, which could lead to stale data, inconsistent reads, and wasted memory. A global point of access is also desirable for a service that needs to be easily accessed by various parts of the application.
    **C# Snippet (Core):**
    ```csharp
    public sealed class CacheService
    {
        private static readonly Lazy<CacheService> _lazyInstance =
            new Lazy<CacheService>(() => new CacheService());

        private CacheService() { /* Initialize cache storage */ }

        public static CacheService Instance => _lazyInstance.Value;

        // Add caching methods here, e.g., Get(key), Set(key, value)
    }
    ```

2.  **Question:** Consider the following non-thread-safe Singleton implementation. Explain why it fails in a multi-threaded environment and propose a specific C# */ }
    }
    ```
    **Correct Answer:**
    **Failure Explanation:** In a multi-threaded environment, if two threads call `LogWriter.Instance` simultaneously when `_instance` is `null`, both threads might pass the `if (_instance == null)` check. Then, both threads would proceed to execute `_instance = new LogWriter();`, resulting in two separate instances of `LogWriter` being created, violating the Singleton principle. This is a classic race condition.
    **Proposed *
    ```csharp
    public sealed class LogWriter
    {
        private static LogWriter _instance;
        private static readonly object _lock = new object(); // Synchronization object

        private LogWriter() { }

        public static LogWriter Instance
        {
            get
            {
                if (_instance == null) // First check (no lock)
                {
                    lock (_lock) // Acquire lock
                    {
                        if (_instance == null) // Second check (inside lock)
                        {
                            _instance = new LogWriter();
                        }
                    } // Release lock
                }
                return _instance;
            }
        }
        public void WriteLog(string message) { /* ... */ }
    }
    ```
    This 
*   Define the roles of the Product, Creator, Concrete Product, and Concrete Creator in the Factory Method pattern.
*   Implement the Factory Method pattern in C# to create different types of related objects.
*   Explain the benefits of using Factory Method, such as adherence to the Open/Closed Principle and improved extensibility.
*   Identify scenarios where the Factory Method pattern is a suitable solution for object creation.

#### Detailed lesson content
As we continue our exploration of creational patterns, we often encounter situations where the exact type of object we need to create isn't known until runtime, or we want to provide a framework for subclasses to decide which objects to create. Directly instantiating objects using `new` within our client code can lead to tight coupling, making our system rigid and difficult to extend. This is where the Factory Method pattern comes to the rescue.

The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. It defers instantiation to subclasses. Think of it like a factory that produces different types of products, but the decision of *which* specific product to make is left to specialized departments (subclasses of the factory). The client code only interacts with the general factory interface and the general product interface, without needing to know the concrete types being produced.

Let's break down the key components of the Factory Method pattern:
1.  **Product:** This is an interface or an abstract class that defines the common interface for the objects the factory method creates. All concrete products must implement or inherit from this.
2.  **Concrete Product:** These are the actual implementations of the Product interface.
3.  **Creator:** This is an abstract class or interface that declares the factory method, which returns an object of type Product. It might also define an implementation for methods that use the factory method.
4.  **Concrete Creator:** These are subclasses that override the factory method to return an instance of a Concrete Product.

Consider a scenario in a logistics application where you need to calculate shipping costs for different types of transport: trucks, ships, or airplanes. Each transport method has its own logic for calculating cost and delivery time. If your client code directly instantiated `new Truck()`, `new Ship()`, or `new Airplane()`, adding a new transport method (e.g., `Drone`) would require modifying all places where these objects are created. The Factory Method pattern elegantly solves this.

First, let's define our `Product` interface:

```csharp
// Product: Defines the interface of objects the factory method creates.
public interface ITransport
{
    string Deliver();
    double CalculateCost(double distance);
}

// Concrete Products: Implement the Product interface.
public class Truck : ITransport
{
    public string Deliver() => "Delivering by road in a truck.";
    public double CalculateCost(double distance) => distance * 0.5; // Example cost
}

public class Ship : ITransport
{
    public string Deliver() => "Delivering by sea in a ship.";
    public double CalculateCost(double distance) => distance * 0.2; // Example cost
}

public class Airplane : ITransport
{
    public string Deliver() => "Delivering by air in an airplane.";
    public double CalculateCost(double distance) => distance * 1.5; // Example cost
}
```

Next, we define our `Creator` abstract class with the `FactoryMethod`:

```csharp
// Creator: Declares the factory method, which returns an object of type ITransport.
public abstract class Logistics
{
    // The Factory Method
    public abstract ITransport CreateTransport();

    // The Creator may also contain some core logic that uses the factory method.
    public string PlanDelivery(double distance)
    {
        ITransport transport = CreateTransport(); // Use the factory method
        string deliveryMethod = transport.Deliver();
        double cost = transport.CalculateCost(distance);
        return $"Using: {deliveryMethod}. Estimated cost for {distance}km: ${cost:F2}";
    }
}
```

Finally, we implement `Concrete Creators` that override the `CreateTransport` method to produce specific `Concrete Products`:

```csharp
// Concrete Creators: Override the factory method to return an instance of a Concrete Product.
public class RoadLogistics : Logistics
{
    public override ITransport CreateTransport()
    {
        return new Truck();
    }
}

public class SeaLogistics : Logistics
{
    public override ITransport CreateTransport()
    {
        return new Ship();
    }
}

public class AirLogistics : Logistics
{
    public override ITransport CreateTransport()
    {
        return new Airplane();
    }
}
```

Now, the client code interacts only with the `Logistics` abstract class and `ITransport` interface:

```csharp
// Client Code
public class Client
{
    public void Main()
    {
        Logistics roadLogistics = new RoadLogistics();
        Console.WriteLine(roadLogistics.PlanDelivery(100)); // Using: Delivering by road...

        Logistics seaLogistics = new SeaLogistics();
        Console.WriteLine(seaLogistics.PlanDelivery(500)); // Using: Delivering by sea...

        Logistics airLogistics = new AirLogistics();
        Console.WriteLine(airLogistics.PlanDelivery(1000)); // Using: Delivering by air...
    }
}
```

The benefits of this approach are significant. Firstly, it adheres to the **Open/Closed Principle (OCP)**. The `Logistics` abstract class is "open for extension" (you can add new `Concrete Creators` like `DroneLogistics`) but "closed for modification" (you don't need to change existing `Logistics` or `ITransport` code). Secondly, it **decouples** the client code from the concrete product classes. The `Client` doesn't know or care if it's getting a `Truck`, `Ship`, or `Airplane`; it only knows it's getting an `ITransport`. This makes the system more flexible and easier to maintain.

A common mistake when using Factory Method is to confuse it with a simple factory (sometimes called a static factory method). A simple factory is just a static method that encapsulates the `new` operator, often using `if/else` or `switch` statements to return different object types. While it centralizes creation, it doesn't offer the same level of extensibility as the Factory Method pattern, which relies on inheritance and polymorphism. With a simple factory, adding a new product type requires modifying the factory method itself, violating OCP. With Factory Method, you simply add a new `Concrete Creator` and `Concrete Product`.

Another potential pitfall is over-engineering. If you only ever need to create one type of object, or if the creation logic is trivial and unlikely to change, the overhead of implementing the full Factory Method pattern might be unnecessary. Always weigh the benefits of extensibility and decoupling against the complexity introduced. The Factory Method shines when you have a family of related products that might grow over time, and you want to delegate the decision of which product to instantiate to subclasses or configuration.

#### Key concepts
*   **Factory Method Pattern:** A creational design pattern that defines an interface for creating an object, but lets subclasses decide which class to instantiate, deferring instantiation to subclasses.
*   **Product:** An interface or abstract class defining the common operations for objects created by the factory method.
*   **Concrete Product:** Specific implementations of the Product interface.
*   **Creator:** An abstract class or interface that declares the factory method, which returns a Product object. It may also define methods that operate on the Product.
*   **Concrete Creator:** Subclasses of the Creator that override the factory method to produce specific Concrete Products.
*   **Decoupling:** Reducing the dependencies between classes, making them more independent and easier to maintain.
*   **Open/Closed Principle (OCP):** A software design principle stating that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

#### Hands-on activity
**Activity: Document Converter Factory**

You are building a document processing application that needs to convert various document types (e.g., PDF, Word) into a common format. Use the Factory Method pattern to create different document converters.

**Starter Code:**

```csharp
using System;

// 1. Product Interface
public interface IDocumentConverter
{
    void Convert(string filePath);
}

// 2. Concrete Products
public class PdfConverter : IDocumentConverter
{
    public void Convert(string filePath)
    {
        Console.WriteLine($"Converting PDF file: {filePath} to common format.");
        // Simulate complex PDF parsing and conversion
    }
}

public class WordConverter : IDocumentConverter
{
    public void Convert(string filePath)
    {
        Console.WriteLine($"Converting Word document: {filePath} to common format.");
        // Simulate complex Word document parsing and conversion
    }
}

// TODO: Add an ExcelConverter concrete product here.
public class ExcelConverter : IDocumentConverter
{
    public void Convert(string filePath)
    {
        Console.WriteLine($"Converting Excel spreadsheet: {filePath} to common format.");
        // Simulate complex Excel parsing and conversion
    }
}

// 3. Creator Abstract Class
public abstract class DocumentProcessor
{
    // The Factory Method
    public abstract IDocumentConverter CreateConverter();

    public void ProcessDocument(string filePath)
    {
        IDocumentConverter converter = CreateConverter();
        Console.WriteLine($"Processing document: {filePath}");
        converter.Convert(filePath);
        Console.WriteLine("Document processing complete.");
    }
}

// 4. Concrete Creators
public class PdfDocumentProcessor : DocumentProcessor
{
    public override IDocumentConverter CreateConverter()
    {
        return new PdfConverter();
    }
}

public class WordDocumentProcessor : DocumentProcessor
{
    public override IDocumentConverter CreateConverter()
    {
        return new WordConverter();
    }
}

// TODO: Add an ExcelDocumentProcessor concrete creator here.
public class ExcelDocumentProcessor : DocumentProcessor
{
    public override IDocumentConverter CreateConverter()
    {
        return new ExcelConverter();
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("--- Document Conversion Application ---");

        // Process a PDF document
        DocumentProcessor pdfProcessor = new PdfDocumentProcessor();
        pdfProcessor.ProcessDocument("report.pdf");
        Console.WriteLine();

        // Process a Word document
        DocumentProcessor wordProcessor = new WordDocumentProcessor();
        wordProcessor.ProcessDocument("memo.docx");
        Console.WriteLine();

        // TODO: Process an Excel document using your new ExcelDocumentProcessor.
        DocumentProcessor excelProcessor = new ExcelDocumentProcessor();
        excelProcessor.ProcessDocument("data.xlsx");
        Console.WriteLine();

        Console.WriteLine("--- All documents processed ---");
    }
}
```

**Instructions:**
1.  Add a new `ExcelConverter` class that implements `IDocumentConverter`.
2.  Add a new `ExcelDocumentProcessor` class that inherits from `DocumentProcessor` and overrides `CreateConverter` to return an `ExcelConverter`.
3.  In the `Main` method, instantiate `ExcelDocumentProcessor` and use it to process a simulated Excel file.
4.  Run the application and observe the output, verifying that the correct converter is used for each document type.

#### Assessment idea
1.  **Question:** You are building a game where players can choose different character classes (Warrior, Mage, Archer). Each character class has unique abilities and attributes. You want to allow game designers to easily add new character classes in the future without modifying the core game logic that uses these characters. Which design pattern would best suit the creation of these character objects, and how would you structure the main components (Product, Creator, etc.)?
    **Correct Answer:** The Factory Method pattern is ideal here.
    **Structure:**
    *   **Product:** An `ICharacter` interface (or abstract `Character` class) with methods like `Attack()`, `Defend()`, `UseAbility()`.
    *   **Concrete Products:** `Warrior`, `Mage`, `Archer` classes, each implementing `ICharacter` with their specific logic.
    *   **Creator:** An abstract `CharacterFactory` class with an abstract `CreateCharacter()` method that returns `ICharacter`. It might also have a `PlayGame()` method that uses `CreateCharacter()`.
    *   **Concrete Creators:** `WarriorFactory`, `MageFactory`, `ArcherFactory` classes, each inheriting from `CharacterFactory` and overriding `CreateCharacter()` to return their respective concrete character types.
    This setup allows adding a `Rogue` character class by simply creating `Rogue` (Concrete Product) and `RogueFactory` (Concrete Creator) without touching existing code.

2.  **Question:** Explain the primary difference between a simple factory (a static method that returns different object types based on input) and the Factory Method pattern. When would you choose Factory Method over a simple factory?
    **Correct Answer:**
    **Primary Difference:**
    *   **Simple Factory:** A single static method (or non-static method in a utility class) that contains `if/else` or `switch` logic to instantiate and return different concrete product types. The decision logic is centralized in one place. It does not typically involve inheritance on the factory side.
    *   **Factory Method Pattern:** Relies on inheritance and polymorphism. It defines an *abstract* method in a *creator* class (or interface) that subclasses (concrete creators) *implement* to produce specific concrete products. The decision of which product to instantiate is deferred to the subclasses.
    **When to choose Factory Method:**
    You would choose the Factory Method pattern over a simple factory when:
    *   **Extensibility is key:** You anticipate adding new product types frequently and want to avoid modifying existing factory code (adhering to OCP). With Factory Method, you just add new `Concrete Creators` and `Concrete Products`.
    *   **Subclasses need to define creation:** You want to allow subclasses of a creator to determine which specific product to create, often as part of a larger framework or library.
    *   **Parallel class hierarchies:** You have a hierarchy of `Creator` classes that needs to create objects from a parallel hierarchy of `Product` classes.
    *   **Complex creation logic:** The creation process itself might involve multiple steps or dependencies that are best encapsulated within specialized creator subclasses.

#### AI generation note
Produce a 10-minute animated explainer video. Start with a scenario showing tightly coupled object creation (e.g., `new Truck()`, `new Ship()`) and the pain points of adding a new vehicle type. Introduce the Factory Method pattern using the logistics example, animating the roles of `ITransport`, `Truck/Ship/Airplane`, `Logistics`, and `Road/Sea/AirLogistics`. Use clear diagrams to show how the `CreateTransport()` method is overridden. Highlight the OCP benefits visually by demonstrating how a new `DroneLogistics` can be added without altering existing code. Include a brief interactive quiz comparing Factory Method to a simple factory.

### Chapter 2.3 — The Abstract Factory Pattern: Families of Related Objects

#### Learning objectives
*   Grasp the problem solved by the Abstract Factory pattern: creating families of related or dependent objects without specifying their concrete classes.
*   Distinguish between the roles of Abstract Factory, Concrete Factory, Abstract Product, and Concrete Product.
*   Implement the Abstract Factory pattern in C# to produce coherent sets of objects.
*   Understand the benefits of Abstract Factory, such as ensuring product compatibility and enabling platform independence.
*   Identify appropriate use cases for the Abstract Factory pattern in complex systems.

#### Detailed lesson content
Building upon our understanding of the Factory Method, we now delve into the Abstract Factory pattern. While the Factory Method focuses on creating a single product, the Abstract Factory pattern takes it a step further: it provides an interface for creating *families* of related or dependent objects without specifying their concrete classes. Imagine you're building a cross-platform UI toolkit. You might need to create different types of buttons, checkboxes, and textboxes, but crucially, all these UI elements must belong to the *same family* (e.g., Windows UI, Mac UI, Linux UI). You wouldn't want a Windows button paired with a Mac checkbox. The Abstract Factory ensures this consistency.

The core idea is to define an abstract factory that declares methods for creating each type of abstract product. Then, concrete factories implement these methods to produce specific concrete products belonging to a particular family. The client code interacts only with the abstract factory and abstract products, completely unaware of the concrete implementations. This allows you to swap out entire families of products simply by changing the concrete factory being used.

Let's define the key participants:
1.  **Abstract Product:** An interface or abstract class for a type of product (e.g., `IButton`, `ICheckbox`).
2.  **Concrete Product:** Specific implementations of Abstract Products, belonging to a particular family (e.g., `WindowsButton`, `MacButton`).
3.  **Abstract Factory:** An interface or abstract class that declares a set of factory methods, one for each distinct abstract product (e.g., `CreateButton()`, `CreateCheckbox()`).
4.  **Concrete Factory:** Implementations of the Abstract Factory that produce concrete products belonging to a specific family (e.g., `WindowsFactory`, `MacFactory`).
5.  **Client:** Code that uses the Abstract Factory and Abstract Products. It doesn't know or care about the concrete types.

Let's use the UI toolkit example. We want to create UI elements that look consistent across different operating systems.

First, define our `Abstract Products`:

```csharp
// Abstract Products: Interfaces for a family of related products.
public interface IButton
{
    string Render();
}

public interface ICheckbox
{
    string Render();
    bool IsChecked();
}

// Concrete Products: Implementations for Windows family
public class WindowsButton : IButton
{
    public string Render() => "Rendering a Windows-style button.";
}

public class WindowsCheckbox : ICheckbox
{
    private bool _checked = false;
    public string Render() => $"Rendering a Windows-style checkbox (Checked: {_checked}).";
    public bool IsChecked() => _checked;
}

// Concrete Products: Implementations for Mac family
public class MacButton : IButton
{
    public string Render() => "Rendering a Mac-style button.";
}

public class MacCheckbox : ICheckbox
{
    private bool _checked = true;
    public string Render() => $"Rendering a Mac-style checkbox (Checked: {_checked}).";
    public bool IsChecked() => _checked;
}
```

Next, define our `Abstract Factory`:

```csharp
// Abstract Factory: Declares an interface for operations that create abstract product objects.
public interface IGUIFactory
{
    IButton CreateButton();
    ICheckbox CreateCheckbox();
}

// Concrete Factories: Implement the factory methods to create concrete product objects.
public class WindowsGUIFactory : IGUIFactory
{
    public IButton CreateButton() => new WindowsButton();
    public ICheckbox CreateCheckbox() => new WindowsCheckbox();
}

public class MacGUIFactory : IGUIFactory
{
    public IButton CreateButton() => new MacButton();
    public ICheckbox CreateCheckbox() => new MacCheckbox();
}
```

Finally, the `Client` code interacts with the `IGUIFactory` and `IButton`/`ICheckbox` interfaces:

```csharp
// Client: Uses the Abstract Factory and Abstract Products.
public class Application
{
    private IGUIFactory _factory;
    private IButton _button;
    private ICheckbox _checkbox;

    public Application(IGUIFactory factory)
    {
        _factory = factory;
        _button = _factory.CreateButton();
        _checkbox = _factory.CreateCheckbox();
    }

    public void Paint()
    {
        Console.WriteLine(_button.Render());
        Console.WriteLine(_checkbox.Render());
        Console.WriteLine($"Is checkbox checked? {_checkbox.IsChecked()}");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("--- Windows Application ---");
        Application windowsApp = new Application(new WindowsGUIFactory());
        windowsApp.Paint();
        Console.WriteLine();

        Console.WriteLine("--- Mac Application ---");
        Application macApp = new Application(new MacGUIFactory());
        macApp.Paint();
        Console.WriteLine();
    }
}
```

The primary benefit of the Abstract Factory pattern is that it **ensures consistency among products**. All products created by a specific concrete factory are guaranteed to belong to the same family. This is crucial for maintaining a cohesive look and feel, or ensuring compatibility between dependent components. It also promotes **platform independence** by allowing you to easily switch between different families of products (e.g., changing from `WindowsGUIFactory` to `MacGUIFactory`) without altering the client code. This adheres to the **Open/Closed Principle** – you can introduce new product families by creating new concrete factories without modifying existing client code or abstract factory interfaces.

A common mistake is to confuse Abstract Factory with Factory Method. Remember, Factory Method uses inheritance to let subclasses decide which *single* product to create. Abstract Factory uses composition (a factory *has* factory methods) to create *multiple, related* products. If you only need to create one type of object but want to defer its instantiation, Factory Method is more appropriate. If you need to create a *suite* of related objects that must always be compatible, Abstract Factory is the way to go.

Another pitfall is the complexity it introduces. Abstract Factory can lead to a proliferation of interfaces and classes, especially if you have many product types and many families. Adding a *new type of product* (e.g., `IRadioButton`) means modifying the `Abstract Factory` interface and all `Concrete Factories`, which can be a significant change. This is a trade-off for the flexibility of adding new *product families*. Carefully consider if the benefits of managing families of objects outweigh this complexity for your specific problem. For simpler scenarios, a combination of Factory Method or even a simple factory might be sufficient.

#### Key concepts
*   **Abstract Factory Pattern:** A creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
*   **Abstract Product:** An interface or abstract class defining a type of product within a family.
*   **Concrete Product:** A specific implementation of an Abstract Product, belonging to a particular product family.
*   **Abstract Factory:** An interface or abstract class that declares a set of factory methods, one for each Abstract Product type.
*   **Concrete Factory:** An implementation of the Abstract Factory that creates Concrete Products for a specific family.
*   **Product Family:** A set of related or dependent products that are designed to work together and share a common theme or style.
*   **Consistency:** Ensuring that all products created by a factory belong to the same coherent set.
*   **Platform Independence:** The ability to easily switch between different implementations (product families) without changing client code.

#### Hands-on activity
**Activity: Database Connector Factory**

You are building an application that needs to connect to different types of databases (e.g., SQL Server, Oracle). For each database, you need to create a connection object and a command object. Use the Abstract Factory pattern to ensure that the connection and command objects are always compatible with the chosen database.

**Starter Code:**

```csharp
using System;

// 1. Abstract Products
public interface IDbConnection
{
    void Open();
    void Close();
    string GetConnectionString();
}

public interface IDbCommand
{
    void ExecuteQuery(string query);
    void SetConnection(IDbConnection connection);
}

// 2. Concrete Products (SQL Server Family)
public class SqlServerConnection : IDbConnection
{
    private string _connectionString;
    public SqlServerConnection(string connectionString) => _connectionString = connectionString;
    public void Open() => Console.WriteLine($"Opening SQL Server connection: {_connectionString}");
    public void Close() => Console.WriteLine("Closing SQL Server connection.");
    public string GetConnectionString() => _connectionString;
}

public class SqlServerCommand : IDbCommand
{
    private IDbConnection _connection;
    public void SetConnection(IDbConnection connection) => _connection = connection;
    public void ExecuteQuery(string query)
    {
        Console.WriteLine($"Executing SQL Server query: '{query}' on connection: {_connection?.GetConnectionString()}");
    }
}

// TODO: Create Concrete Products for Oracle Family (OracleConnection, OracleCommand)
public class OracleConnection : IDbConnection
{
    private string _connectionString;
    public OracleConnection(string connectionString) => _connectionString = connectionString;
    public void Open() => Console.WriteLine($"Opening Oracle connection: {_connectionString}");
    public void Close() => Console.WriteLine("Closing Oracle connection.");
    public string GetConnectionString() => _connectionString;
}

public class OracleCommand : IDbCommand
{
    private IDbConnection _connection;
    public void SetConnection(IDbConnection connection) => _connection = connection;
    public void ExecuteQuery(string query)
    {
        Console.WriteLine($"Executing Oracle query: '{query}' on connection: {_connection?.GetConnectionString()}");
    }
}

// 3. Abstract Factory
public interface IDbFactory
{
    IDbConnection CreateConnection(string connectionString);
    IDbCommand CreateCommand();
}

// 4. Concrete Factories (SQL Server Family)
public class SqlServerFactory : IDbFactory
{
    public IDbConnection CreateConnection(string connectionString) => new SqlServerConnection(connectionString);
    public IDbCommand CreateCommand() => new SqlServerCommand();
}

// TODO: Create a Concrete Factory for Oracle Family (OracleFactory)
public class OracleFactory : IDbFactory
{
    public IDbConnection CreateConnection(string connectionString) => new OracleConnection(connectionString);
    public IDbCommand CreateCommand() => new OracleCommand( );
}

// Client
public class DatabaseClient
{
    private IDbFactory _factory;
    private IDbConnection _connection;
    private IDbCommand _command;

    public DatabaseClient(IDbFactory factory, string connectionString)
    {
        _factory = factory;
        _connection = _factory.CreateConnection(connectionString);
        _command = _factory.CreateCommand();
        _command.SetConnection(_connection); // Ensure command uses the correct connection
    }

    public void RunDatabaseOperations(string query)
    {
        _connection.Open();
        _command.ExecuteQuery(query);
        _connection.Close();
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("--- SQL Server Operations ---");
        IDbFactory sqlFactory = new SqlServerFactory();
        DatabaseClient sqlClient = new DatabaseClient(sqlFactory, "Data Source=SQLServer;Initial Catalog=MyAppDB;");
        sqlClient.RunDatabaseOperations("SELECT * FROM Users");
        Console.WriteLine();

        // TODO: Create and use an OracleFactory to run database operations.
        Console.WriteLine("--- Oracle Operations ---");
        IDbFactory oracleFactory = new OracleFactory();
        DatabaseClient oracleClient = new DatabaseClient(oracleFactory, "User Id=OracleUser;Password=OraclePass;Data Source=ORCL;");
        oracleClient.RunDatabaseOperations("SELECT * FROM Employees");
        Console.WriteLine();
    }
}
```

**Instructions:**
1.  Create `OracleConnection` and `OracleCommand` classes that implement `IDbConnection` and `IDbCommand` respectively. Ensure their `Render()` methods clearly indicate they are Oracle-specific.
2.  Create an `OracleFactory` class that implements `IDbFactory` and returns instances of `OracleConnection` and `OracleCommand`.
3.  In the `Main` method, instantiate `OracleFactory`, then use it to create a `DatabaseClient` and run some simulated database operations.
4.  Run the application and verify that SQL Server and Oracle operations are handled by their respective, compatible product families.

#### Assessment idea
1.  **Question:** You are building a reporting tool that needs to generate reports in different formats (e.g., PDF, Excel, CSV). For each format, you need to create a specific `ReportHeader` and `ReportBody` component. The `ReportHeader` for a PDF might include page numbers, while for Excel it might include column headers. You want to ensure that the header and body components always match the chosen report format. Which design pattern is most appropriate, and why? Describe the key interfaces and classes you would define.
    **Correct Answer:** The Abstract Factory pattern is most appropriate.
    **Why:** This scenario involves creating *families* of related objects (a header and a body) that must be compatible and consistent for a given report format. The Abstract Factory ensures that when you choose to generate a PDF report, you get a PDF-specific header *and* a PDF-specific body, preventing mixing incompatible components.
    **Key Interfaces and Classes:**
    *   **Abstract Products:** `IReportHeader`, `IReportBody` (interfaces defining common methods).
    *   **Concrete Products:** `PdfReportHeader`, `PdfReportBody`, `ExcelReportHeader`, `ExcelReportBody`, `CsvReportHeader`, `CsvReportBody` (implementations for each format).
    *   **Abstract Factory:** `IReportFactory` (interface with methods like `CreateHeader()`, `CreateBody()`).
    *   **Concrete Factories:** `PdfReportFactory`, `ExcelReportFactory`, `CsvReportFactory` (implementations of `IReportFactory` that return their respective concrete product families).

2.  **Question:** You have implemented an Abstract Factory for creating different types of database access components (e.g., `SqlServerFactory` creates `SqlServerConnection` and `SqlServerCommand`, `MySqlFactory` creates `MySqlConnection` and `MySqlCommand`). Now, a new requirement comes in: you need to add support for a new type of database component, `IDbTransaction`, which should also be created by your factories. Explain the impact of this change on your existing Abstract Factory implementation.
    **Correct Answer:**
    Adding a new product type (`IDbTransaction`) to an existing Abstract Factory design requires modifications to the `Abstract Factory` interface itself and *all* `Concrete Factory` implementations.
    **Impact:**
    1.  **`IDbTransaction` Abstract Product:** You would first define a new abstract product interface: `public interface IDbTransaction { void Begin(); void Commit(); void Rollback(); }`.
    2.  **Concrete `IDbTransaction` Products:** You would then create concrete implementations for each existing product family, e.g., `SqlServerTransaction` and `MySqlTransaction`.
    3.  **Abstract Factory Modification:** The `IDbFactory` interface would need to be modified to include a new factory method: `IDbTransaction CreateTransaction();`.
    4.  **Concrete Factory Modifications:** Every existing `Concrete Factory` (e.g., `SqlServerFactory`, `MySqlFactory`) would need to be updated to implement the new `CreateTransaction()` method, returning its respective concrete transaction object.
    This demonstrates the primary drawback of the Abstract Factory pattern: it's easy to add new *product families*, but difficult to add new *product types* within existing families, as it requires changes across the entire factory hierarchy.

#### AI generation note
Design a 15-minute interactive lab walkthrough. Start by presenting the problem of inconsistent UI elements in a cross-platform application. Introduce the Abstract Factory pattern using the GUI toolkit example. Guide learners through implementing the `IGUIFactory`, `IButton`, `ICheckbox` interfaces, and then the `WindowsGUIFactory`/`MacGUIFactory` and their respective concrete products. Provide partially completed code and prompt learners to fill in the missing parts. Use a split-screen view showing the code editor and a simulated UI output. Conclude with a challenge to extend the pattern by adding a new `ITextbox` product type, highlighting the required modifications across the factory hierarchy. Ensure accessibility with clear voiceover instructions and on-screen code highlighting.

---

### Chapter 2.2 — Factory Method Pattern: Delegating Object Creation

#### Learning objectives
*   Explain the purpose and core principles of the Factory Method design pattern.
*   Identify the key components of the Factory Method pattern: Product, Concrete Product, Creator, and Concrete Creator.
*   Implement the Factory Method pattern in C# to defer object instantiation to subclasses.
*   Analyze scenarios where the Factory Method pattern is an appropriate solution for object creation.
*   Recognize the benefits and potential drawbacks of using the Factory Method pattern in software design.

#### Detailed lesson content
In software development, we frequently encounter situations where an object needs to create other objects. The simplest approach is often to use the `new` keyword directly, like `new MyObject()`. While straightforward, this direct instantiation creates a tight coupling between the class that needs an object and the concrete class of the object being created. This tight coupling can become a significant problem as your application grows, making it rigid, difficult to extend, and challenging to maintain. Imagine a reporting module that directly instantiates `PdfReport`, `ExcelReport`, and `CsvReport` classes. If you later need to add a `WordReport`, you'd have to modify the reporting module directly, violating the Open/Closed Principle (Open for extension, Closed for modification).

This is precisely the problem the **Factory Method pattern** aims to solve. It provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. Essentially, it delegates the responsibility of object instantiation to specialized "factory" methods within subclasses. Think of it like a professional print shop. The main shop (the Creator) knows *how* to process an order for a document, but it doesn't necessarily know *which specific machine* (the Concrete Creator) will produce a glossy brochure, a business card, or a large banner. Each specialized machine (subclass) knows how to produce its specific "product" (the document type). The main shop simply calls a "create product" method, and the appropriate machine handles the specific creation process.

The Factory Method pattern involves four key components:
1.  **Product:** This is an interface or an abstract class that declares the interface for objects the factory method creates. It defines the common contract for all concrete products. In C#, this is typically an `interface` or an `abstract class`.
2.  **Concrete Product:** These are specific implementations of the Product interface or abstract class. They represent the actual objects that the factory method will instantiate. For example, `PdfDocument`, `WordDocument`, `ExcelDocument`.
3.  **Creator:** This is an abstract class or an interface that declares the factory method, which returns an object of type Product. It might also define other methods that use the Product object returned by the factory method. The Creator doesn't know the concrete type of Product it will create; it only knows it will work with an object conforming to the Product interface.
4.  **Concrete Creator:** These are subclasses that implement the Creator and override the factory method to return an instance of a Concrete Product. Each Concrete Creator is responsible for creating a specific type of Concrete Product.

Let's walk through a practical example in C#. Imagine we're building an application that needs to process different types of notifications: Email, SMS, and Push notifications.

First, we define our `Product` interface:
```csharp
// Product Interface
public interface INotification
{
    string Send(string recipient, string message);
}
```

Next, our `Concrete Products`:
```csharp
// Concrete Products
public class EmailNotification : INotification
{
    public string Send(string recipient, string message)
    {
        Console.WriteLine($"Sending Email to {recipient}: {message}");
        return $"Email sent to {recipient}.";
    }
}

public class SmsNotification : INotification
{
    public string Send(string recipient, string message)
    {
        Console.WriteLine($"Sending SMS to {recipient}: {message}");
        return $"SMS sent to {recipient}.";
    }
}

public class PushNotification : INotification
{
    public string Send(string recipient, string message)
    {
        Console.WriteLine($"Sending Push Notification to {recipient}: {message}");
        return $"Push notification sent to {recipient}.";
    }
}
```

Now, the `Creator` abstract class. This class declares the factory method `CreateNotification()` and can also contain other business logic that operates on the `INotification` object.
```csharp
// Creator Abstract Class
public abstract class NotificationCreator
{
    // The factory method
    public abstract INotification CreateNotification();

    // Other business logic that uses the notification
    public string NotifyUser(string recipient, string message)
    {
        INotification notification = CreateNotification(); // Calls the factory method
        return notification.Send(recipient, message);
    }
}
```

Finally, our `Concrete Creators`. Each one overrides `CreateNotification()` to return a specific `Concrete Product`:
```csharp
// Concrete Creators
public class EmailNotificationCreator : NotificationCreator
{
    public override INotification CreateNotification()
    {
        return new EmailNotification();
    }
}

public class SmsNotificationCreator : NotificationCreator
{
    public override INotification CreateNotification()
    {
        return new SmsNotification();
    }
}

public class PushNotificationCreator : NotificationCreator
{
    public override INotification CreateNotification()
    {
        return new PushNotification();
    }
}
```

To use this pattern, our client code interacts only with the `NotificationCreator` and `INotification` interfaces, completely decoupled from the concrete notification types:
```csharp
// Client Code
public class NotificationService
{
    public void ProcessNotification(NotificationCreator creator, string recipient, string message)
    {
        // The client works with the Creator's interface
        // The actual notification type is determined by the specific creator passed in
        string result = creator.NotifyUser(recipient, message);
        Console.WriteLine($"Service log: {result}");
    }
}

// Usage:
// NotificationService service = new NotificationService();

// service.ProcessNotification(new EmailNotificationCreator(), "user@example.com", "Welcome to Cohortia!");
// service.ProcessNotification(new SmsNotificationCreator(), "+15551234567", "Your order has shipped.");
// service.ProcessNotification(new PushNotificationCreator(), "device_id_123", "New message received!");
```

In this example, the `NotificationService` doesn't need to know if it's sending an email, SMS, or push notification. It just receives a `NotificationCreator` and calls its `NotifyUser` method. The specific type of notification sent is determined by the `Concrete Creator` passed into `ProcessNotification`. This makes the system highly extensible; if we need to add a new notification type (e.g., `WhatsAppNotification`), we simply create a `WhatsAppNotification` class and a `WhatsAppNotificationCreator` class, without modifying any existing code in `NotificationCreator` or `NotificationService`. This perfectly adheres to the Open/Closed Principle.

**When to use the Factory Method Pattern:**
*   When a class can't anticipate the class of objects it must create.
*   When you want to provide a framework or library where users can extend the internal components without modifying the core code.
*   When you want to decouple the creation of objects from their usage.
*   When a class wants its subclasses to specify the objects it creates.

**Common Mistakes and Safety Notes:**
One common mistake is to confuse the Factory Method with a "Simple Factory" (which is not a GoF pattern). A Simple Factory often uses a static method to create objects based on a parameter, like `NotificationFactory.CreateNotification("email")`. While useful for centralizing creation, it doesn't offer the same extensibility and adherence to the Open/Closed Principle as the Factory Method because the Simple Factory method itself would need modification every time a new product type is introduced. The Factory Method, by contrast, relies on inheritance and polymorphism for extensibility.

Another pitfall is over-engineering. If you only have one type of product and no foreseeable need for others, the Factory Method pattern adds unnecessary complexity with extra interfaces and classes. Always consider if the benefits of extensibility and loose coupling outweigh the increased class count. Use it when you anticipate future variations or when your system already has a clear hierarchy of "products" and "creators."

Finally, ensure your `Product` interface or abstract class truly defines a common contract. If concrete products diverge too much, the `Creator` might struggle to work with them polymorphically, indicating that the pattern might not be the best fit or that your product hierarchy needs refinement.

#### Key concepts
*   **Factory Method:** A creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
*   **Product:** An interface or abstract class defining the common contract for objects created by the factory method.
*   **Concrete Product:** A specific implementation of the Product interface, representing the actual object created.
*   **Creator:** An abstract class or interface that declares the factory method, which returns an object of type Product. It may also contain business logic that uses the Product.
*   **Concrete Creator:** A subclass that implements the Creator and overrides the factory method to return an instance of a specific Concrete Product.
*   **Loose Coupling:** A design principle where components are independent and have minimal knowledge of each other, making systems more flexible and maintainable.
*   **Open/Closed Principle:** A SOLID principle stating that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

#### Hands-on activity
**Scenario:** You are developing a logging system for a web application. Currently, it only supports console logging, but requirements indicate that file logging and database logging will be added soon. Refactor the existing direct instantiation of a `ConsoleLogger` to use the Factory Method pattern, preparing it for future extensibility.

**Starter Code:**
```csharp
using System;

// Current simple logger
public class ConsoleLogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[Console Log] {message}");
    }
}

// Application that uses the logger
public class Application
{
    private ConsoleLogger _logger;

    public Application()
    {
        _logger = new ConsoleLogger(); // Direct instantiation
    }

    public void Run()
    {
        _logger.Log("Application started.");
        // ... more application logic ...
        _logger.Log("Application finished.");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Application app = new Application();
        app.Run();
    }
}
```

**Task:**
1.  Define an `ILogger` interface (Product) with a `Log(string message)` method.
2.  Make `ConsoleLogger` implement `ILogger`.
3.  Create an abstract `LoggerCreator` class (Creator) with an abstract `CreateLogger()` method that returns `ILogger`. Add a `PerformLogging(string message)` method that uses the logger created by `CreateLogger()`.
4.  Create a `ConsoleLoggerCreator` class (Concrete Creator) that inherits from `LoggerCreator` and overrides `CreateLogger()` to return a `ConsoleLogger`.
5.  Modify the `Application` class to accept a `LoggerCreator` in its constructor and use its `PerformLogging` method.
6.  Update `Program.Main` to instantiate `Application` with `ConsoleLoggerCreator`.

**Expected Output (after refactoring and running):**
```
[Console Log] Application started.
[Console Log] Application finished.
```

#### Assessment idea

**Question 1:**
Which of the following best describes the primary benefit of using the Factory Method pattern?
a) It ensures that only one instance of a class exists throughout the application.
b) It provides a way to create families of related objects without specifying their concrete classes.
c) It promotes loose coupling by allowing subclasses to decide which concrete classes to instantiate.
d) It converts the interface of a class into another interface clients expect.

**Correct Answer:** c) It promotes loose coupling by allowing subclasses to decide which concrete classes to instantiate.
**Explanation:**
a) Describes the Singleton pattern.
b) Describes the Abstract Factory pattern.
d) Describes the Adapter pattern.
The Factory Method's core purpose is to delegate object creation to subclasses, thereby decoupling the client code from the concrete types it instantiates and making the system more extensible (loose coupling).

**Question 2:**
Consider the following C# code snippet using a Factory Method pattern. Identify which component corresponds to the "Concrete Creator" role.

```csharp
// 1. Product Interface
public interface IButton { void Render(); }

// 2. Concrete Product
public class WindowsButton : IButton { public void Render() { Console.WriteLine("Rendering a Windows button."); } }
public class MacButton : IButton { public void Render() { Console.WriteLine("Rendering a Mac button."); } }

// 3. Creator Abstract Class
public abstract class Dialog
{
    public abstract IButton CreateButton(); // Factory Method
    public void RenderDialog()
    {
        IButton button = CreateButton();
        button.Render();
        Console.WriteLine("Rendering dialog specific elements.");
    }
}

// 4. Concrete Creator
public class WindowsDialog : Dialog
{
    public override IButton CreateButton()
    {
        return new WindowsButton();
    }
}

// 5. Concrete Creator
public class MacDialog : Dialog
{
    public override IButton CreateButton()
    {
        return new MacButton();
    }
}
```
Which of the numbered sections represents the "Concrete Creator"?
a) 1
b) 2
c) 3
d) 4 and 5

**Correct Answer:** d) 4 and 5
**Explanation:**
*   Section 1 (`IButton`) is the Product interface.
*   Section 2 (`WindowsButton`, `MacButton`) are Concrete Products.
*   Section 3 (`Dialog`) is the Creator abstract class, which declares the factory method `CreateButton()`.
*   Sections 4 (`WindowsDialog`) and 5 (`MacDialog`) are the Concrete Creators. They inherit from `Dialog` and override `CreateButton()` to return specific `IButton` implementations (`WindowsButton` and `MacButton` respectively).

#### AI generation note
Create a 12-minute mixed media lesson. Start with a 3-minute animated diagram illustrating the tight coupling problem with direct `new` calls, then transition to showing how the Factory Method pattern (Product, Concrete Product, Creator, Concrete Creator) solves it using a similar diagram. Follow this with a 7-minute live coding demonstration in Visual Studio, implementing the `INotification` example provided in the detailed lesson content. Show the step-by-step creation of interfaces, abstract classes, and concrete implementations, emphasizing how the client code remains decoupled. Use split-screen for code and console output. Conclude with a 2-minute interactive reflection prompt asking learners to consider a real-world scenario where they might apply the Factory Method pattern, encouraging them to share their ideas in a discussion forum. Ensure all code is clearly visible and explained verbally. Provide captions and alt text for diagrams.

---

## Module 3: Structural Patterns: Object Composition

**Module Goal:** To equip learners with the understanding and practical skills to apply key structural design patterns in C# and .NET, focusing on how objects and classes can be composed to form larger, more flexible, and maintainable structures.

### Chapter 3.1 — The Adapter Pattern: Bridging Incompatible Interfaces

#### Learning objectives
*   Understand the core problem that the Adapter pattern solves: enabling collaboration between objects with incompatible interfaces.
*   Differentiate between object adapter and class adapter implementations, focusing on the practical use of object adapters in C#.
*   Implement the Adapter pattern in C# to integrate a legacy component into a modern system.
*   Identify appropriate scenarios for applying the Adapter pattern to improve system flexibility and maintainability.
*   Recognize common pitfalls and best practices when using the Adapter pattern.

#### Detailed lesson content
Welcome to the realm of Structural Design Patterns! Our journey begins with the Adapter pattern, a powerful tool for resolving interface incompatibilities between existing classes. Imagine you have a beautifully designed, modern C# application, but you need to integrate with a legacy library or a third-party component that exposes an interface completely different from what your application expects. Rewriting the legacy component is often not an option, and modifying your entire application to conform to the legacy interface would be a significant, error-prone undertaking. This is precisely where the Adapter pattern shines. It acts as a bridge, allowing two otherwise incompatible interfaces to work together seamlessly.

The fundamental idea behind the Adapter pattern is to create an intermediate class, the "Adapter," which translates the interface of one class (the "Adaptee") into another interface that a client expects (the "Target"). Think of it like a universal travel adapter for electrical outlets. You have a device with a specific plug (the client's expected interface), and you're in a country with different outlets (the Adaptee's interface). The travel adapter doesn't change your device's plug or the wall outlet; it simply provides the necessary translation layer so they can connect and function. In software, this translation involves implementing the `ITarget` interface and, within its methods, calling the corresponding methods of the `Adaptee` object.

In C#, the most common and flexible implementation is the **Object Adapter**. This approach relies on object composition: the Adapter class holds an instance of the Adaptee class. Let's consider a practical scenario. Suppose your modern C# application expects a logging service that implements an `ILogger` interface with a `LogMessage(string message)` method. However, you have an older, third-party logging library, `LegacyLogger`, which has a method called `WriteToConsole(string text)`. These interfaces are incompatible.

Here's how we'd set up the interfaces and the legacy component:

```csharp
// The Target interface that our client expects
public interface ILogger
{
    void LogMessage(string message);
}

// The Adaptee: a legacy logging component with an incompatible interface
public class LegacyLogger
{
    public void WriteToConsole(string text)
    {
        Console.WriteLine($"[LEGACY LOG]: {text}");
    }

    public void WriteToFile(string data)
    {
        Console.WriteLine($"[LEGACY FILE LOG]: Saving '{data}' to file...");
        // In a real scenario, this would write to a file
    }
}
```

Now, we create the `LegacyLoggerAdapter` class. This adapter will implement `ILogger` and internally use an instance of `LegacyLogger` to fulfill the `LogMessage` request.

```csharp
// The Adapter class
public class LegacyLoggerAdapter : ILogger
{
    private readonly LegacyLogger _legacyLogger;

    public LegacyLoggerAdapter(LegacyLogger legacyLogger)
    {
        _legacyLogger = legacyLogger ?? throw new ArgumentNullException(nameof(legacyLogger));
    }

    // This method adapts the ILogger interface to the LegacyLogger's interface
    public void LogMessage(string message)
    {
        Console.WriteLine("Adapter translating message...");
        _legacyLogger.WriteToConsole(message); // Calls the Adaptee's method
    }
}
```

With the adapter in place, our client code, which expects an `ILogger`, can now seamlessly use the `LegacyLogger` through its adapter:

```csharp
// Client code that expects an ILogger
public class Application
{
    private readonly ILogger _logger;

    public Application(ILogger logger)
    {
        _logger = logger;
    }

    public void Run()
    {
        _logger.LogMessage("Application started successfully.");
        _logger.LogMessage("Processing data...");
    }
}

// Usage in Main method:
public class Program
{
    public static void Main(string[] args)
    {
        LegacyLogger legacy = new LegacyLogger();
        ILogger adapter = new LegacyLoggerAdapter(legacy);

        Application app = new Application(adapter);
        app.Run();

        // Output:
        // Adapter translating message...
        // [LEGACY LOG]: Application started successfully.
        // Adapter translating message...
        // [LEGACY LOG]: Processing data...
    }
}
```

Notice how the `Application` class remains completely unaware that it's interacting with a legacy component. It only knows about the `ILogger` interface, maintaining a clean separation of concerns. This is the power of the Adapter pattern: it promotes reusability of existing code without forcing modifications to either the client or the adaptee.

A less common variant, the **Class Adapter**, uses inheritance instead of composition. In C#, this is only possible if the `Adaptee` is an interface or if the `Adaptee` is a class and the `Target` is an interface, and the adapter inherits from both. However, C# does not support multiple inheritance of classes, making the Object Adapter generally preferred due to its flexibility, especially when adapting multiple `Adaptee` classes or when the `Adaptee` is a concrete class. The Object Adapter allows you to adapt an `Adaptee` and its subclasses, whereas a Class Adapter commits the adapter to a specific `Adaptee` class.

**Common mistakes** when using the Adapter pattern include over-adapting, where developers create adapters for every minor interface mismatch, leading to unnecessary complexity. It's crucial to apply the pattern only when there's a genuine incompatibility that cannot be resolved through simpler means like minor refactoring or extension methods. Another mistake is creating an adapter that does too much, essentially becoming a "god object" that tries to adapt multiple unrelated interfaces. An adapter should have a single responsibility: translating one interface to another. Always ensure your adapter is lean and focused.

Safety notes: When integrating legacy systems, be mindful of potential side effects or performance implications of the `Adaptee`. The Adapter pattern itself doesn't magically fix underlying issues in the legacy code; it merely provides a compatible interface. Thorough testing of the adapter and the integrated system is paramount to ensure correct behavior and prevent unexpected issues from the legacy component propagating into your modern application. The Adapter pattern is a robust solution for integration challenges, allowing you to leverage existing codebases while maintaining a clean, modern application architecture.

#### Key concepts
*   **Adapter Pattern**: A structural design pattern that allows objects with incompatible interfaces to collaborate. It acts as a bridge between two interfaces.
*   **Target Interface**: The interface that the client code expects to work with.
*   **Adaptee Class**: The existing class with an incompatible interface that needs to be adapted.
*   **Adapter Class**: The class that implements the `Target` interface and contains an instance of the `Adaptee` (for Object Adapter), translating calls from the `Target` to the `Adaptee`.
*   **Object Adapter**: The most common implementation in C#, where the Adapter class holds an instance of the Adaptee and delegates calls to it.
*   **Class Adapter**: A less common implementation (and not fully supported for classes in C# due to lack of multiple inheritance) where the Adapter inherits from both the `Target` interface and the `Adaptee` class.

#### Hands-on activity
**Scenario:** You have an existing image processing library that works with a custom `Image` object and a `ProcessImage(Image img)` method. Your new application, however, expects an `IProcessor` interface with a `ProcessData(byte[] data)` method, as it deals with raw image bytes. Create an adapter to bridge this gap.

**Instructions:**
1.  Define the `IProcessor` interface.
2.  Create a `LegacyImageProcessor` class that has a `ProcessImage(LegacyImage img)` method and a `LegacyImage` class. Assume `LegacyImage` has a constructor that takes `byte[]` for simplicity.
3.  Implement an `ImageProcessorAdapter` that implements `IProcessor` and uses an instance of `LegacyImageProcessor` to perform the processing.
4.  Write client code that uses the `IProcessor` interface to process some sample `byte[]` data, demonstrating the adapter in action.

**Starter Code:**
```csharp
using System;

// 1. Define the Target interface
public interface IProcessor
{
    void ProcessData(byte[] data);
}

// 2. Define the LegacyImage and LegacyImageProcessor (Adaptee)
public class LegacyImage
{
    private readonly byte[] _imageData;
    public LegacyImage(byte[] imageData)
    {
        _imageData = imageData;
        Console.WriteLine($"LegacyImage created with {imageData.Length} bytes.");
    }

    public byte[] GetImageData() => _imageData;
}

public class LegacyImageProcessor
{
    public void ProcessImage(LegacyImage img)
    {
        Console.WriteLine($"LegacyImageProcessor: Processing image data of size {img.GetImageData().Length} bytes.");
        // Imagine complex image manipulation here
        Console.WriteLine("LegacyImageProcessor: Image processing complete.");
    }
}

// 3. Implement the Adapter
public class ImageProcessorAdapter : IProcessor
{
    private readonly LegacyImageProcessor _legacyProcessor;

    public ImageProcessorAdapter(LegacyImageProcessor legacyProcessor)
    {
        _legacyProcessor = legacyProcessor;
    }

    public void ProcessData(byte[] data)
    {
        // Your adaptation logic goes here
        // Hint: Create a LegacyImage from the byte[] data
        // Then call the legacyProcessor's ProcessImage method
        throw new NotImplementedException(); // Replace this line
    }
}

// 4. Client Code
public class Client
{
    public void ExecuteProcessing(IProcessor processor, byte[] imageData)
    {
        Console.WriteLine("\nClient: Initiating data processing...");
        processor.ProcessData(imageData);
        Console.WriteLine("Client: Data processing request sent.");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        LegacyImageProcessor legacyProcessor = new LegacyImageProcessor();
        IProcessor adapter = new ImageProcessorAdapter(legacyProcessor); // Instantiate your adapter

        Client client = new Client();
        byte[] sampleImageData = new byte[] { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08 };

        client.ExecuteProcessing(adapter, sampleImageData);
    }
}
```

#### Assessment idea
1.  **Question:** You are tasked with integrating a new third-party analytics library into your C# application. Your application currently uses an `IAnalyticsService` interface with a `TrackEvent(string eventName, Dictionary<string, string> properties)` method. The new library, `ThirdPartyAnalytics`, only exposes a static method `SendMetric(string metricKey, int value)`. Which design pattern would you use to integrate `ThirdPartyAnalytics` without modifying your existing application code or the third-party library? Explain your choice and briefly outline the structure of the solution.
    **Correct Answer:** The **Adapter pattern** is the most suitable choice here. The problem describes an incompatibility between the interface your application expects (`IAnalyticsService`) and the interface provided by the third-party library (`ThirdPartyAnalytics.SendMetric`). The Adapter pattern allows us to create a bridge between these two incompatible interfaces.
    **Structure of the solution:**
    *   **Target Interface:** `IAnalyticsService` (already exists).
    *   **Adaptee:** The `ThirdPartyAnalytics` class with its `SendMetric` static method.
    *   **Adapter Class:** Create a class, for example, `ThirdPartyAnalyticsAdapter`, that implements `IAnalyticsService`.
    *   **Adaptation Logic:** Inside the `TrackEvent` method of `ThirdPartyAnalyticsAdapter`, you would translate the `eventName` and `properties` into a format suitable for `ThirdPartyAnalytics.SendMetric`. This might involve mapping specific event names to metric keys and potentially aggregating properties into a single integer `value` if the `SendMetric` method is truly limited to that signature. For example, `TrackEvent("UserLogin", {"user_id": "123"})` might be adapted to `ThirdPartyAnalytics.SendMetric("UserLoginCount", 1)` or `ThirdPartyAnalytics.SendMetric("UserActivity", 1)`. The adapter encapsulates this translation logic.

2.  **Question:** Consider a scenario where you have a `Shape` base class with a virtual `Draw()` method, and several derived classes like `Circle` and `Rectangle`. You now need to integrate a legacy `LegacyDrawingTool` that has a method `RenderGraphics(int x, int y, int width, int height, string color)` but doesn't work with your `Shape` hierarchy directly. If you were to implement an Adapter for `Circle` objects to be drawn by `LegacyDrawingTool`, would you primarily use an Object Adapter or a Class Adapter in C#? Justify your answer.
    **Correct Answer:** You would primarily use an **Object Adapter** in C#.
    **Justification:**
    *   **Class Adapter limitations in C#:** C# does not support multiple inheritance of classes. A Class Adapter would typically require the adapter class to inherit from both the `Target` (e.g., an `ILegacyDrawable` interface) and the `Adaptee` class (`Circle`). Since `Circle` is a class, this is not directly possible. Even if `Circle` were an interface, the Class Adapter would tie the adapter to a specific `Circle` implementation, making it less flexible.
    *   **Object Adapter advantages:** An Object Adapter would involve creating an `ICircleDrawingAdapter` (or similar `Target` interface) and then a `CircleToLegacyDrawingAdapter` class that implements this interface. This adapter class would hold an instance of a `Circle` object. When the adapter's `Draw` (or equivalent) method is called, it would extract the necessary information (position, size, color) from the `Circle` object and then call the `LegacyDrawingTool.RenderGraphics` method with the translated parameters. This approach is more flexible, allows adapting different `Shape` types with different adapters, and adheres to the principle of composition over inheritance.

#### AI generation note
Create a 12-minute video tutorial. Begin with a clear analogy of a travel power adapter. Then, live-code the `ILogger`, `LegacyLogger`, `LegacyLoggerAdapter`, `Application`, and `Program` classes as shown in the detailed content. Use a split-screen view showing the C# code in Visual Studio on the left and the console output on the right. Emphasize how the `Application` client remains oblivious to the legacy component. Include a brief animated diagram illustrating the flow of control from client to adapter to adaptee. Conclude with a 2-question interactive quiz covering the difference between Target and Adaptee, and the primary reason for choosing Object Adapter in C#. Ensure captions and high-contrast visuals.

### Chapter 3.2 — The Decorator Pattern: Enhancing Objects Dynamically

#### Learning objectives
*   Explain the purpose of the Decorator pattern: adding responsibilities to objects dynamically and transparently.
*   Compare and contrast the Decorator pattern with subclassing for extending functionality, highlighting the advantages of Decorator.
*   Implement the Decorator pattern in C# to add new behaviors to an existing object without altering its structure.
*   Identify scenarios where the Decorator pattern is more appropriate than inheritance for extending object capabilities.
*   Recognize potential drawbacks and common mistakes associated with overusing the Decorator pattern.

#### Detailed lesson content
Having explored how to make incompatible interfaces work together with the Adapter pattern, let's now turn our attention to another powerful structural pattern: the Decorator. The Decorator pattern offers a flexible alternative to subclassing for extending the functionality of individual objects. Instead of creating a rigid hierarchy of subclasses, which can lead to an explosion of classes when many combinations of features are needed, the Decorator allows you to "wrap" objects with new behaviors dynamically. This means you can add responsibilities to an object at runtime, rather than compile time, without modifying its original class.

Think of the Decorator pattern like ordering a coffee. You start with a simple coffee (your base component). Then, you can add milk, sugar, caramel syrup, or whipped cream. Each addition "decorates" the original coffee, adding new functionality (taste, cost) without changing the fundamental nature of the coffee itself. You don't create a `MilkSugarCaramelWhippedCreamCoffee` subclass; instead, you compose these additions around the base coffee. Each "decorator" enhances the coffee's behavior and potentially its cost, while still presenting itself as a "coffee."

The core components of the Decorator pattern are:
1.  **Component Interface:** An interface or abstract class that defines the common operations for both the concrete components and the decorators. This ensures that clients can treat decorated objects and undecorated objects uniformly.
2.  **Concrete Component:** The original object to which responsibilities can be added. It implements the Component interface.
3.  **Decorator (Abstract):** An abstract class that also implements the Component interface and holds a reference to a Component object. It typically delegates all operations to its wrapped component.
4.  **Concrete Decorators:** Concrete classes that extend the abstract Decorator and add specific responsibilities or behaviors. They override the delegated methods to perform their additional logic before or after calling the wrapped component's method.

Let's illustrate this with our coffee example in C#:

```csharp
using System;

// 1. Component Interface
public interface ICoffee
{
    string GetDescription();
    double GetCost();
}

// 2. Concrete Component
public class SimpleCoffee : ICoffee
{
    public string GetDescription()
    {
        return "Simple Coffee";
    }

    public double GetCost()
    {
        return 5.0; // Base cost
    }
}

// 3. Abstract Decorator
public abstract class CoffeeDecorator : ICoffee
{
    protected ICoffee _decoratedCoffee;

    public CoffeeDecorator(ICoffee coffee)
    {
        _decoratedCoffee = coffee;
    }

    // By default, decorators just pass calls to the wrapped object
    public virtual string GetDescription()
    {
        return _decoratedCoffee.GetDescription();
    }

    public virtual double GetCost()
    {
        return _decoratedCoffee.GetCost();
    }
}

// 4. Concrete Decorators
public class MilkDecorator : CoffeeDecorator
{
    public MilkDecorator(ICoffee coffee) : base(coffee) { }

    public override string GetDescription()
    {
        return _decoratedCoffee.GetDescription() + ", with Milk";
    }

    public override double GetCost()
    {
        return _decoratedCoffee.GetCost() + 1.5; // Add cost for milk
    }
}

public class SugarDecorator : CoffeeDecorator
{
    public SugarDecorator(ICoffee coffee) : base(coffee) { }

    public override string GetDescription()
    {
        return _decoratedCoffee.GetDescription() + ", with Sugar";
    }

    public override double GetCost()
    {
        return _decoratedCoffee.GetCost() + 0.5; // Add cost for sugar
    }
}

public class CaramelDecorator : CoffeeDecorator
{
    public CaramelDecorator(ICoffee coffee) : base(coffee) { }

    public override string GetDescription()
    {
        return _decoratedCoffee.GetDescription() + ", with Caramel";
    }

    public override double GetCost()
    {
        return _decoratedCoffee.GetCost() + 2.0; // Add cost for caramel
    }
}
```

Now, let's see how we can dynamically compose these decorators:

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        // Order a simple coffee
        ICoffee myCoffee = new SimpleCoffee();
        Console.WriteLine($"Description: {myCoffee.GetDescription()}, Cost: ${myCoffee.GetCost()}");
        // Output: Description: Simple Coffee, Cost: $5

        // Decorate with Milk
        myCoffee = new MilkDecorator(myCoffee);
        Console.WriteLine($"Description: {myCoffee.GetDescription()}, Cost: ${myCoffee.GetCost()}");
        // Output: Description: Simple Coffee, with Milk, Cost: $6.5

        // Decorate with Sugar
        myCoffee = new SugarDecorator(myCoffee); // Now decorating the milk-decorated coffee
        Console.WriteLine($"Description: {myCoffee.GetDescription()}, Cost: ${myCoffee.GetCost()}");
        // Output: Description: Simple Coffee, with Milk, with Sugar, Cost: $7

        // Order a new coffee, decorated with Caramel and then Milk
        ICoffee fancyCoffee = new CaramelDecorator(new MilkDecorator(new SimpleCoffee()));
        Console.WriteLine($"Description: {fancyCoffee.GetDescription()}, Cost: ${fancyCoffee.GetCost()}");
        // Output: Description: Simple Coffee, with Milk, with Caramel, Cost: $8.5
    }
}
```

This example clearly demonstrates how we can add features like milk, sugar, or caramel to a `SimpleCoffee` object without modifying the `SimpleCoffee` class itself. Each decorator simply wraps the existing `ICoffee` object and adds its specific behavior. The client code (the `Console.WriteLine` statements) interacts only with the `ICoffee` interface, completely unaware of the layers of decoration.

The Decorator pattern offers significant advantages over inheritance for extending functionality:
*   **Flexibility:** You can combine decorators in various ways at runtime, providing much greater flexibility than a fixed inheritance hierarchy. With inheritance, you'd need a separate class for every combination (e.g., `MilkCoffee`, `SugarCoffee`, `MilkSugarCoffee`, etc.), leading to class explosion.
*   **Open/Closed Principle:** The Decorator pattern adheres to the Open/Closed Principle. The core `SimpleCoffee` class is "closed for modification" but "open for extension" through new decorators.
*   **Single Responsibility Principle:** Each decorator has a single responsibility (e.g., adding milk, adding sugar), keeping classes focused.

**Common mistakes** with the Decorator pattern often involve creating decorators that are too complex or try to do too many things. Each decorator should ideally add one distinct responsibility. Another pitfall is performance overhead, as each decorator adds a layer of indirection. For very high-performance scenarios with many layers of decoration, this indirection might become noticeable, though for most applications, it's negligible. Also, be careful about the order of decorators, as it can sometimes matter (e.g., applying encryption before compression might be different from applying compression before encryption).

Safety notes: When using decorators, ensure that the order of application doesn't inadvertently break functionality. For instance, if one decorator expects data in a specific format and another modifies it, the sequence becomes critical. Always test decorator chains thoroughly. Moreover, if a decorator significantly alters the behavior of the wrapped object in a way that breaks client expectations of the `Component` interface, it might be a sign that the decorator is doing too much or that a different pattern might be more appropriate. The Decorator pattern is a powerful and elegant solution for flexible object enhancement, allowing you to build rich, configurable objects from simpler parts.

#### Key concepts
*   **Decorator Pattern**: A structural design pattern that allows adding new responsibilities to objects dynamically, providing a flexible alternative to subclassing.
*   **Component Interface**: Defines the common interface for both concrete components and decorators, ensuring uniform treatment by clients.
*   **Concrete Component**: The base object that gets decorated. It implements the Component interface.
*   **Abstract Decorator**: An abstract class that implements the Component interface and maintains a reference to a Component object. It typically delegates operations to the wrapped component.
*   **Concrete Decorator**: Specific decorator classes that extend the abstract decorator and add new behaviors or modify existing ones.
*   **Dynamic Extension**: The ability to add or remove functionality from an object at runtime, rather than being fixed at compile time through inheritance.
*   **Open/Closed Principle**: The Decorator pattern supports this principle by allowing new functionalities to be added without modifying existing code.

#### Hands-on activity
**Scenario:** You are building a notification system. You have a base `INotificationService` that can send a simple message. You need to add capabilities like SMS notification, Email notification, and Logging of notifications, which can be combined in various ways.

**Instructions:**
1.  Define an `INotificationService` interface with a `Send(string message)` method.
2.  Create a `BaseNotification` class that implements `INotificationService` and prints a basic console message.
3.  Create an abstract `NotificationDecorator` class that also implements `INotificationService` and holds a reference to an `INotificationService`.
4.  Implement `SmsDecorator` and `EmailDecorator` concrete decorator classes. Each should add its specific notification logic (e.g., print "Sending SMS: ..." or "Sending Email: ...") *in addition* to calling the wrapped service's `Send` method.
5.  Demonstrate creating a notification service that sends both SMS and Email for a single message.

**Starter Code:**
```csharp
using System;

// 1. Component Interface
public interface INotificationService
{
    void Send(string message);
}

// 2. Concrete Component
public class BaseNotification : INotificationService
{
    public void Send(string message)
    {
        Console.WriteLine($"Base Notification: {message}");
    }
}

// 3. Abstract Decorator
public abstract class NotificationDecorator : INotificationService
{
    protected INotificationService _notificationService;

    public NotificationDecorator(INotificationService notificationService)
    {
        _notificationService = notificationService;
    }

    public virtual void Send(string message)
    {
        _notificationService.Send(message); // Delegate to the wrapped service
    }
}

// 4. Implement Concrete Decorators
public class SmsDecorator : NotificationDecorator
{
    public SmsDecorator(INotificationService notificationService) : base(notificationService) { }

    public override void Send(string message)
    {
        base.Send(message); // Call the wrapped service's Send method first
        Console.WriteLine($"Sending SMS: {message}"); // Add SMS specific logic
    }
}

public class EmailDecorator : NotificationDecorator
{
    public EmailDecorator(INotificationService notificationService) : base(notificationService) { }

    public override void Send(string message)
    {
        // Implement the Email specific logic here, ensuring to also call base.Send(message)
        throw new NotImplementedException(); // Replace this line
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("--- Simple Notification ---");
        INotificationService simpleNotification = new BaseNotification();
        simpleNotification.Send("Hello World!");

        Console.WriteLine("\n--- SMS Notification ---");
        INotificationService smsNotification = new SmsDecorator(new BaseNotification());
        smsNotification.Send("Urgent update!");

        Console.WriteLine("\n--- Email and SMS Notification ---");
        // Create a notification service that sends both Email and SMS
        // Hint: Chain the decorators
        INotificationService emailAndSmsNotification = new BaseNotification(); // Start with base
        // Add Email decorator
        // Add SMS decorator
        // emailAndSmsNotification.Send("Meeting reminder!"); // Uncomment and use your chained decorators
    }
}
```

#### Assessment idea
1.  **Question:** You have a `DataProcessor` class with a `Process(byte[] data)` method. You need to add logging, compression, and encryption capabilities to this processor, but these capabilities should be optional and combinable in any order. For example, some data might need logging and encryption, while others need compression and then logging. Would you use inheritance or the Decorator pattern to implement this? Justify your choice.
    **Correct Answer:** The **Decorator pattern** is the ideal choice.
    **Justification:**
    *   **Inheritance drawbacks:** Using inheritance would lead to a "class explosion." You would need a separate subclass for every combination of features (e.g., `LoggingProcessor`, `CompressionProcessor`, `EncryptionProcessor`, `LoggingCompressionProcessor`, `LoggingEncryptionProcessor`, `CompressionEncryptionProcessor`, `LoggingCompressionEncryptionProcessor`, and so on). This quickly becomes unmanageable as the number of features grows. It also violates the Open/Closed Principle, as adding a new feature requires modifying the class hierarchy.
    *   **Decorator advantages:** The Decorator pattern allows you to add these responsibilities dynamically and combine them flexibly. You would define an `IDataProcessor` interface. `DataProcessor` would be a concrete component. Then, you'd create `LoggingDecorator`, `CompressionDecorator`, and `EncryptionDecorator` classes, each implementing `IDataProcessor` and wrapping another `IDataProcessor`. Clients can then compose these decorators in any desired order at runtime (e.g., `new LoggingDecorator(new EncryptionDecorator(new DataProcessor()))`). This adheres to the Open/Closed Principle and avoids class explosion.

2.  **Question:** In the context of the Decorator pattern, explain the role of the "Component Interface" and why it's crucial for the pattern's effectiveness.
    **Correct Answer:** The **Component Interface** (e.g., `ICoffee` or `INotificationService` in our examples) defines the common operations that both the concrete component (the base object) and all concrete decorators must implement.
    **Cruciality for effectiveness:**
    *   **Uniformity:** It ensures that clients can treat both simple, undecorated objects and complex, decorated objects uniformly. The client code only needs to know about the `Component Interface`, not the specific concrete component or the layers of decorators. This makes the client code simpler and more robust.
    *   **Transparency:** It allows decorators to wrap other decorators or the concrete component seamlessly. Each decorator, by implementing the `Component Interface`, can be passed wherever a `Component` is expected, maintaining transparency in the composition chain.
    *   **Flexibility:** Without a common interface, decorators would not be able to wrap each other, and the dynamic addition of responsibilities would be impossible, defeating the primary purpose of the Decorator pattern. It's the contract that allows the entire chain of responsibility to function cohesively.

#### AI generation note
Create a 10-minute interactive code demo video. Start by explaining the problem of class explosion with inheritance for optional features. Then, live-code the `ICoffee`, `SimpleCoffee`, `CoffeeDecorator`, `MilkDecorator`, `SugarDecorator`, and `CaramelDecorator` classes. Demonstrate the dynamic composition in the `Main` method, showing how the `GetDescription()` and `GetCost()` change with each added decorator. Use a split-screen view with code on the left and console output on the right. Include a visual representation (e.g., animated diagram) of how decorators wrap the base component. Conclude with a hands-on coding exercise where learners modify the `CaramelDecorator` to add a new property, like `HasWhippedCream`, and update the description and cost.

### Chapter 3.3 — The Composite Pattern: Tree Structures and Part-Whole Hierarchies

#### Learning objectives
*   Understand the Composite pattern's purpose: representing part-whole hierarchies and allowing clients to treat individual objects and compositions of objects uniformly.
*   Identify the key components of the Composite pattern: Component, Leaf, and Composite.
*   Implement the Composite pattern in C# to build tree-like structures, such as file systems or organizational charts.
*   Explain how the Composite pattern simplifies client code by providing a uniform interface for both simple and complex objects.
*   Recognize the trade-offs and common pitfalls when applying the Composite pattern, particularly regarding interface design.

#### Detailed lesson content
As we continue our exploration of structural patterns, we arrive at the Composite pattern, a design solution specifically tailored for representing part-whole hierarchies. Imagine you're building a system that deals with hierarchical structures, like a file system with files and folders, an organizational chart with individual employees and departments, or a graphical user interface with individual controls and panels. In such systems, you often want to treat individual objects (like a single file or an individual employee) and groups of objects (like a folder containing many files, or a department containing many employees) in the same manner. The Composite pattern allows you to do precisely this, simplifying client code by providing a uniform interface for both individual objects (leaves) and compositions of objects (composites).

The core idea is to define a common interface (the "Component") that both the individual objects (the "Leaves") and the containers of objects (the "Composites") implement. This enables clients to interact with any object in the hierarchy without needing to distinguish between individual objects and composite groups. This transparency is a hallmark of the Composite pattern.

Let's break down the key components:
1.  **Component (Interface/Abstract Class):** Declares the interface for objects in the composition. It provides methods common to both leaves and composites, such as `Operation()` or `Add(Component)`, `Remove(Component)`, `GetChild(int)`. The management methods (`Add`, `Remove`, `GetChild`) are typically defined in the Component, but for Leaf objects, these methods might throw an exception or do nothing, indicating they don't support child operations.
2.  **Leaf:** Represents individual objects in the composition. Leaves have no children and implement the Component interface. They perform the primitive operations.
3.  **Composite:** Represents components that can have children. Composites store child components and implement the Component interface, often delegating operations to their children. They also implement the child-management operations (`Add`, `Remove`, `GetChild`).

Consider a file system example. Both files and folders are "file system entries." A file is a "leaf" – it has no children. A folder is a "composite" – it can contain other files or folders. We want to be able to display the structure or calculate the total size regardless of whether we're looking at a single file or an entire folder.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

// 1. Component: Defines the common interface for all elements in the hierarchy
public abstract class FileSystemEntry
{
    public string Name { get; set; }
    public FileSystemEntry(string name) { Name = name; }

    public abstract void Display(int indent); // Common operation

    // Operations for managing children (might throw NotImplementedException for Leaf)
    public virtual void Add(FileSystemEntry component)
    {
        throw new NotSupportedException("Cannot add to a leaf entry.");
    }
    public virtual void Remove(FileSystemEntry component)
    {
        throw new NotSupportedException("Cannot remove from a leaf entry.");
    }
    public virtual FileSystemEntry GetChild(int index)
    {
        throw new NotSupportedException("Cannot get child from a leaf entry.");
    }
}

// 2. Leaf: Represents individual objects (files)
public class File : FileSystemEntry
{
    private long _size;
    public File(string name, long size) : base(name)
    {
        _size = size;
    }

    public override void Display(int indent)
    {
        Console.WriteLine(new string('-', indent) + $"File: {Name} ({_size} bytes)");
    }
}

// 3. Composite: Represents objects that can contain children (folders)
public class Folder : FileSystemEntry
{
    private List<FileSystemEntry> _children = new List<FileSystemEntry>();

    public Folder(string name) : base(name) { }

    public override void Add(FileSystemEntry component)
    {
        _children.Add(component);
    }

    public override void Remove(FileSystemEntry component)
    {
        _children.Remove(component);
    }

    public override FileSystemEntry GetChild(int index)
    {
        return _children[index];
    }

    public override void Display(int indent)
    {
        Console.WriteLine(new string('-', indent) + $"Folder: {Name}");
        foreach (var component in _children)
        {
            component.Display(indent + 2); // Recursively display children
        }
    }
}
```

Now, let's build a sample file system and interact with it:

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        // Create a root folder
        Folder root = new Folder("My Drive");

        // Create subfolders
        Folder documents = new Folder("Documents");
        Folder photos = new Folder("Photos");
        Folder projects = new Folder("Projects");

        // Add files to documents
        documents.Add(new File("Report.docx", 1024));
        documents.Add(new File("Resume.pdf", 512));

        // Add files to photos
        photos.Add(new File("Vacation.jpg", 2048));
        photos.Add(new File("Birthday.png", 1536));

        // Add a subfolder to projects
        Folder webApp = new Folder("WebApp");
        webApp.Add(new File("index.html", 256));
        webApp.Add(new File("style.css", 128));
        projects.Add(webApp);
        projects.Add(new File("README.md", 300));

        // Add subfolders to root
        root.Add(documents);
        root.Add(photos);
        root.Add(projects);
        root.Add(new File("ImportantNotes.txt", 100));

        // Display the entire file system hierarchy
        Console.WriteLine("--- File System Hierarchy ---");
        root.Display(0);

        // We can also display a specific subfolder
        Console.WriteLine("\n--- Documents Folder ---");
        documents.Display(0);

        // Remove a file from documents
        Console.WriteLine("\n--- Removing Resume.pdf ---");
        File resumeFile = new File("Resume.pdf", 512); // Note: For removal by object, equality needs to be handled
                                                        // For simplicity, assuming this specific instance or a match
        documents.Remove(documents._children.FirstOrDefault(f => f.Name == "Resume.pdf"));
        documents.Display(0);
    }
}
```

The output will clearly show the indented hierarchy, demonstrating how the `Display` method is called uniformly on both `File` (Leaf) and `Folder` (Composite) objects. The client code (in `Main`) doesn't need to check if an object is a file or a folder before calling `Display` or `Add`/`Remove` (though `Add`/`Remove` will throw exceptions if called on a `File`). This uniformity simplifies client interactions significantly.

**Common mistakes** with the Composite pattern often involve the "safety vs. transparency" trade-off. In our example, `Add`, `Remove`, and `GetChild` methods are defined in the `FileSystemEntry` abstract class (the Component). This provides **transparency** because clients can call these methods on any `FileSystemEntry`, whether it's a `File` or a `Folder`. However, it sacrifices **safety** because calling `Add` on a `File` will result in a `NotSupportedException` at runtime. An alternative (less transparent but safer) approach is to move the child-management methods (`Add`, `Remove`, `GetChild`) out of the `Component` interface and into the `Composite` class itself. This would force clients to check the type of component before attempting to add children, thus sacrificing transparency for compile-time safety. The choice depends on the specific needs and acceptable risk profile of your application.

Another pitfall is overcomplicating the `Component` interface. It should only contain operations that are truly common to both leaves and composites. Adding too many methods that only make sense for one type can lead to `NotImplementedException`s or empty implementations, which are generally code smells. Performance can also be a concern with very deep hierarchies, as recursive operations might lead to stack overflow issues or slow traversals. For extremely deep structures, consider iterative approaches or optimizing traversal algorithms.

Safety notes: When implementing the `Add` and `Remove` methods, ensure proper handling of child collections, especially concerning thread safety if the hierarchy can be modified concurrently. Also, be mindful of memory management in languages without automatic garbage collection, ensuring that child components are properly disposed of when a composite is removed. In C#, garbage collection handles much of this, but circular references can still lead to memory leaks if not managed carefully in specific contexts. The Composite pattern is a powerful way to manage complex hierarchical data structures, making them easier to navigate and manipulate.

#### Key concepts
*   **Composite Pattern**: A structural design pattern that composes objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly.
*   **Component**: The abstract base class or interface that defines the common operations for both Leaf and Composite objects. It provides uniformity.
*   **Leaf**: Represents individual objects in the hierarchy that have no children (e.g., a file in a file system). It implements the Component interface.
*   **Composite**: Represents objects that can contain other Component objects (children) (e.g., a folder in a file system). It implements the Component interface and manages its children.
*   **Part-Whole Hierarchy**: A structure where objects are composed of other objects, which themselves can be composed of still more objects, forming a tree-like arrangement.
*   **Transparency**: The ability for clients to interact with both Leaf and Composite objects through the common Component interface without needing to know their specific type.
*   **Safety vs. Transparency Trade-off**: A design consideration in Composite pattern regarding where to place child-management operations. Placing them in the Component provides transparency but can lead to runtime errors for Leaves; placing them only in Composite provides safety but reduces transparency.

#### Hands-on activity
**Scenario:** You are building a simple organizational chart system. You need to represent individual employees and departments (which contain employees and/or other sub-departments). You want to be able to display the structure and calculate the total number of employees in any given department or the entire organization.

**Instructions:**
1.  Define an abstract `OrganizationComponent` class with a `Name` property and an abstract `Display(int indent)` method. Also, include `Add(OrganizationComponent)` and `Remove(OrganizationComponent)` methods, which should throw `NotSupportedException` by default.
2.  Create an `Employee` class (Leaf) that inherits from `OrganizationComponent` and implements `Display`.
3.  Create a `Department` class (Composite) that inherits from `OrganizationComponent`, manages a list of `OrganizationComponent` children, and implements `Display`, `Add`, and `Remove`.
4.  Implement a `GetEmployeeCount()` method in both `Employee` (returns 1) and `Department` (recursively sums children's counts).
5.  Build a sample organizational chart and display it, then calculate the total employee count for a specific department and the entire organization.

**Starter Code:**
```csharp
using System;
using System.Collections.Generic;
using System.Linq;

// 1. Component
public abstract class OrganizationComponent
{
    public string Name { get; set; }
    public OrganizationComponent(string name) { Name = name; }

    public abstract void Display(int indent);
    public abstract int GetEmployeeCount(); // New method for this activity

    public virtual void Add(OrganizationComponent component)
    {
        throw new NotSupportedException("Cannot add to a leaf component.");
    }
    public virtual void Remove(OrganizationComponent component)
    {
        throw new NotSupportedException("Cannot remove from a leaf component.");
    }
}

// 2. Leaf
public class Employee : OrganizationComponent
{
    public Employee(string name) : base(name) { }

    public override void Display(int indent)
    {
        Console.WriteLine(new string(' ', indent) + $"Employee: {Name}");
    }

    public override int GetEmployeeCount()
    {
        return 1; // An employee is one person
    }
}

// 3. Composite
public class Department : OrganizationComponent
{
    private List<OrganizationComponent> _children = new List<OrganizationComponent>();

    public Department(string name) : base(name) { }

    public override void Add(OrganizationComponent component)
    {
        _children.Add(component);
    }

    public override void Remove(OrganizationComponent component)
    {
        _children.Remove(component);
    }

    public override void Display(int indent)
    {
        Console.WriteLine(new string(' ', indent) + $"Department: {Name}");
        foreach (var component in _children)
        {
            component.Display(indent + 4); // Indent children
        }
    }

    public override int GetEmployeeCount()
    {
        // Implement this method to sum the employee counts of all children
        throw new NotImplementedException(); // Replace this line
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // Build the organizational chart
        Department ceoOffice = new Department("CEO Office");
        ceoOffice.Add(new Employee("Alice - CEO"));

        Department salesDept = new Department("Sales");
        salesDept.Add(new Employee("Bob - Sales Manager"));
        salesDept.Add(new Employee("Charlie - Sales Rep"));

        Department marketingDept = new Department("Marketing");
        marketingDept.Add(new Employee("David - Marketing Director"));
        marketingDept.Add(new Employee("Eve - Social Media Specialist"));

        ceoOffice.Add(salesDept);
        ceoOffice.Add(marketingDept);

        // Display the chart
        Console.WriteLine("--- Organizational Chart ---");
        ceoOffice.Display(0);

        // Calculate total employees
        Console.WriteLine($"\nTotal employees in CEO Office: {ceoOffice.GetEmployeeCount()}");
        Console.WriteLine($"Total employees in Sales Department: {salesDept.GetEmployeeCount()}");
    }
}
```

#### Assessment idea
1.  **Question:** You are designing a graphical user interface (GUI) framework. You have individual UI elements like `Button`, `TextBox`, and `Label`, and also container elements like `Panel` and `Window` that can hold other UI elements. You want to implement a method `Render()` that draws any UI element, whether it's a single button or an entire window with many nested elements. Which design pattern is most appropriate for this scenario, and why?
    **Correct Answer:** The **Composite pattern** is most appropriate.
    **Explanation:** The scenario perfectly describes a part-whole hierarchy: individual UI elements (`Button`, `TextBox`, `Label`) are "leaves," and container elements (`Panel`, `Window`) are "composites" that can hold other UI elements (including other panels or windows). The goal is to treat both individual elements and groups of elements uniformly when rendering. The Composite pattern provides a common `IUIComponent` interface (with a `Render()` method) that both leaves and composites implement. The `Render()` method in a composite would then iterate through its children and call `Render()` on each of them, recursively drawing the entire structure. This simplifies client code, as it doesn't need to differentiate between individual and composite components when initiating a render operation.

2.  **Question:** In a Composite pattern implementation, what is the primary trade-off between "safety" and "transparency" when designing the `Component` interface? Provide an example of how this trade-off manifests in C#.
    **Correct Answer:** The primary trade-off is whether to include child-management operations (like `Add` and `Remove`) in the `Component` interface (or abstract class).
    *   **Transparency:** Including `Add` and `Remove` in the `Component` interface provides **transparency**. Clients can treat all components (leaves and composites) uniformly, calling `Add` or `Remove` on any `Component` object without knowing its specific type.
        *   **C# Example (Transparent but less safe):**
            ```csharp
            public abstract class UIComponent // Component
            {
                public virtual void Add(UIComponent child) { throw new NotSupportedException(); }
                public abstract void Render();
            }
            public class Button : UIComponent // Leaf
            {
                public override void Render() { Console.WriteLine("Drawing Button"); }
            }
            public class Panel : UIComponent // Composite
            {
                private List<UIComponent> children = new List<UIComponent>();
                public override void Add(UIComponent child) { children.Add(child); }
                public override void Render() { Console.WriteLine("Drawing Panel"); foreach (var c in children) c.Render(); }
            }
            // Client can write: UIComponent comp = new Button(); comp.Add(new Button()); // Runtime error
            ```
            Here, `Add` is in `UIComponent`, so a client can call `comp.Add()` on a `Button`, leading to a `NotSupportedException` at runtime.
    *   **Safety:** Excluding `Add` and `Remove` from the `Component` interface and placing them only in the `Composite` class provides **safety**. Clients are forced to check if a component is a `Composite` before attempting to add or remove children, preventing runtime errors. However, this reduces transparency because clients can no longer treat all components uniformly for child-management operations.
        *   **C# Example (Safe but less transparent):**
            ```csharp
            public interface IUIComponent // Component
            {
                void Render();
            }
            public class Button : IUIComponent // Leaf
            {
                public void Render() { Console.WriteLine("Drawing Button"); }
            }
            public class Panel : IUIComponent // Composite
            {
                private List<IUIComponent> children = new List<IUIComponent>();
                public void Add(IUIComponent child) { children.Add(child); } // Add/Remove only in Panel
                public void Render() { Console.WriteLine("Drawing Panel"); foreach (var c in children) c.Render(); }
            }
            // Client must write: if (comp is Panel panel) panel.Add(new Button()); // Compile-time safety
            ```
            Here, `Add` is only in `Panel`. A client cannot accidentally call `Add` on a `Button` through the `IUIComponent` interface; they must explicitly cast or check the type, sacrificing some transparency for compile-time safety.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with an animated diagram illustrating a file system hierarchy (folders containing files and other folders), highlighting how both are treated as "entries." Then, transition to a live coding session in Visual Studio. Implement the `FileSystemEntry`, `File`, and `Folder` classes as described. Show how to build a complex hierarchy and then traverse it using the `Display` method. Emphasize the uniform treatment. Discuss the "safety vs. transparency" trade-off with code examples for both approaches. Conclude with a hands-on lab task where learners extend the file system to include a `GetTotalSize()` method for both `File` and `Folder`. Include captions and clear code annotations.

### Chapter 3.4 — The Facade Pattern: Simplifying Subsystem Complexity

#### Learning objectives
*   Explain the purpose of the Facade pattern: providing a unified, higher-level interface to a set of interfaces in a subsystem.
*   Identify scenarios where a Facade can significantly reduce complexity and improve the usability of a complex system.
*   Implement the Facade pattern in C# to simplify interactions with a complex subsystem.
*   Understand how the Facade pattern promotes loose coupling between clients and the subsystem.
*   Recognize the benefits and potential drawbacks of using the Facade pattern, including the risk of creating a "God object."

#### Detailed lesson content
Our final structural pattern in this module is the Facade pattern, a design solution focused on simplifying complex systems. Imagine you're working with a large, intricate subsystem composed of many classes and objects, each with its own specialized interface. While this granular design might be necessary internally, clients of this subsystem often don't need to interact with every single class. They might only need to perform common, high-level operations that involve coordinating several of these internal classes. Directly exposing all these internal complexities to clients would lead to tightly coupled code, making the client code harder to write, understand, and maintain. This is where the Facade pattern comes into play.

The Facade pattern provides a unified, higher-level interface to a set of interfaces in a subsystem. It defines a single, simple entry point that makes the subsystem easier to use. Think of a car dashboard. You don't interact directly with the engine's fuel injectors, the transmission's gears, or the braking system's hydraulics when you want to drive. Instead, you use a simplified interface: the ignition button, the steering wheel, the accelerator, and the brake pedal. The dashboard acts as a facade, hiding the immense complexity of the underlying automotive subsystem and presenting a user-friendly interface for common operations.

The key aspects of the Facade pattern are:
1.  **Facade:** A single class that provides a simplified, unified interface to the complex subsystem. It knows which subsystem classes are responsible for a request and delegates the client requests to the appropriate objects within the subsystem.
2.  **Subsystem Classes:** The complex, interconnected classes that perform the actual work. The Facade interacts with these classes, but clients do not interact with them directly.

Let's illustrate this with an e-commerce order processing system. A typical order might involve checking inventory, processing payment, and notifying the customer. Each of these could be handled by a separate, complex service.

```csharp
using System;

// Subsystem Class 1: Inventory Management
public class InventoryService
{
    public bool CheckStock(string productId, int quantity)
    {
        Console.WriteLine($"InventoryService: Checking stock for {productId}, quantity {quantity}.");
        // Simulate stock check
        return true; // Assume always in stock for demo
    }

    public void UpdateStock(string productId, int quantity)
    {
        Console.WriteLine($"InventoryService: Updating stock for {productId}, quantity {quantity}.");
        // Simulate stock update
    }
}

// Subsystem Class 2: Payment Processing
public class PaymentGateway
{
    public bool ProcessPayment(string customerId, double amount)
    {
        Console.WriteLine($"PaymentGateway: Processing payment for customer {customerId}, amount ${amount}.");
        // Simulate payment processing
        return true; // Assume payment always successful
    }
}

// Subsystem Class 3: Notification Service
public class NotificationService
{
    public void SendOrderConfirmation(string customerId, string orderId)
    {
        Console.WriteLine($"NotificationService: Sending order confirmation for order {orderId} to customer {customerId}.");
        // Simulate sending email/SMS
    }

    public void SendShippingNotification(string customerId, string orderId)
    {
        Console.WriteLine($"NotificationService: Sending shipping notification for order {orderId} to customer {customerId}.");
    }
}

// Subsystem Class 4: Order Tracking
public class OrderTrackingService
{
    public string GenerateOrderId(string customerId)
    {
        string orderId = Guid.NewGuid().ToString().Substring(0, 8);
        Console.WriteLine($"OrderTrackingService: Generated Order ID: {orderId} for customer {customerId}.");
        return orderId;
    }

    public void UpdateOrderStatus(string orderId, string status)
    {
        Console.WriteLine($"OrderTrackingService: Order {orderId} status updated to '{status}'.");
    }
}
```

Without a facade, a client would have to interact with each of these services directly to place an order:

```csharp
// Client without Facade (more complex)
public class ClientWithoutFacade
{
    public void PlaceOrder(string customerId, string productId, int quantity, double amount)
    {
        InventoryService inventory = new InventoryService();
        PaymentGateway payment = new PaymentGateway();
        NotificationService notification = new NotificationService();
        OrderTrackingService orderTracking = new OrderTrackingService();

        if (inventory.CheckStock(productId, quantity))
        {
            if (payment.ProcessPayment(customerId, amount))
            {
                inventory.UpdateStock(productId, quantity);
                string orderId = orderTracking.GenerateOrderId(customerId);
                orderTracking.UpdateOrderStatus(orderId, "Processing");
                notification.SendOrderConfirmation(customerId, orderId);
                Console.WriteLine($"Order {orderId} placed successfully by client without facade.");
            }
            else
            {
                Console.WriteLine("Payment failed.");
            }
        }
        else
        {
            Console.WriteLine("Out of stock.");
        }
    }
}
```

Now, let's introduce the `OrderFacade` to simplify this process:

```csharp
// The Facade Class
public class OrderFacade
{
    private readonly InventoryService _inventoryService;
    private readonly PaymentGateway _paymentGateway;
    private readonly NotificationService _notificationService;
    private readonly OrderTrackingService _orderTrackingService;

    public OrderFacade()
    {
        _inventoryService = new InventoryService();
        _paymentGateway = new PaymentGateway();
        _notificationService = new NotificationService();
        _orderTrackingService = new OrderTrackingService();
    }

    public string PlaceOrder(string customerId, string productId, int quantity, double amount)
    {
        Console.WriteLine("\nOrderFacade: Initiating order placement...");
        string orderId = string.Empty;

        if (_inventoryService.CheckStock(productId, quantity))
        {
            if (_paymentGateway.ProcessPayment(customerId, amount))
            {
                _inventoryService.UpdateStock(productId, quantity);
                orderId = _orderTrackingService.GenerateOrderId(customerId);
                _orderTrackingService.UpdateOrderStatus(orderId, "Processing");
                _notificationService.SendOrderConfirmation(customerId, orderId);
                Console.WriteLine($"OrderFacade: Order {orderId} placed successfully.");
                return orderId;
            }
            else
            {
                Console.WriteLine("OrderFacade: Payment failed, order not placed.");
            }
        }
        else
        {
            Console.WriteLine("OrderFacade: Product out of stock, order not placed.");
        }
        return string.Empty;
    }

    public void ShipOrder(string customerId, string orderId)
    {
        Console.WriteLine($"\nOrderFacade: Initiating shipping for order {orderId}...");
        _orderTrackingService.UpdateOrderStatus(orderId, "Shipped");
        _notificationService.SendShippingNotification(customerId, orderId);
        Console.WriteLine($"OrderFacade: Order {orderId} shipped successfully.");
    }
}
```

And how the client interacts with the `OrderFacade`:

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("--- Client interaction without Facade ---");
        ClientWithoutFacade clientNoFacade = new ClientWithoutFacade();
        clientNoFacade.PlaceOrder("C123", "PROD001", 2, 99.99);

        Console.WriteLine("\n--- Client interaction with Facade ---");
        OrderFacade orderFacade = new OrderFacade();
        string newOrderId = orderFacade.PlaceOrder("C456", "PROD002", 1, 199.99);

        if (!string.IsNullOrEmpty(newOrderId))
        {
            orderFacade.ShipOrder("C456", newOrderId);
        }
    }
}
```

The client code using `OrderFacade` is significantly simpler and more readable. It calls a single method, `PlaceOrder`, and the facade handles all the intricate coordination between the various subsystem components. This dramatically reduces the client's dependency on the internal workings of the order processing subsystem, promoting loose coupling.

**Common mistakes** with the Facade pattern often involve the facade becoming a "God object" – a class that knows or does too much. A facade should primarily delegate requests to the appropriate subsystem objects; it should not contain significant business logic itself. If a facade starts accumulating complex logic, it might be a sign that it's violating the Single Responsibility Principle, and its responsibilities should be refactored. Another pitfall is creating a facade that hides too much or too little. A good facade strikes a balance, exposing only the necessary high-level operations while still allowing advanced clients to access the subsystem classes directly if needed (the Facade doesn't prevent direct access to subsystem classes, it just provides a simpler alternative).

Safety notes: While the Facade pattern simplifies client interaction, it does not inherently improve the underlying subsystem's robustness or performance. Any issues within the subsystem classes (e.g., database connection errors, external API failures) will still affect the facade's operations. Thorough error handling and logging within the subsystem and the facade itself are crucial. The Facade pattern is an excellent choice for structuring large applications, making complex modules more approachable and improving overall system maintainability by reducing dependencies.

#### Key concepts
*   **Facade Pattern**: A structural design pattern that provides a unified, higher-level interface to a set of interfaces in a subsystem, making the subsystem easier to use.
*   **Facade Class**: The class that acts as the entry point to the subsystem, encapsulating and delegating client requests to the appropriate subsystem classes.
*   **Subsystem Classes**: The individual, often complex, classes within the subsystem that perform the actual work. The Facade interacts with these directly.
*   **Loose Coupling**: The Facade pattern promotes loose coupling by reducing the client's direct dependencies on the numerous internal classes of a complex subsystem.
*   **Simplification**: The primary goal of the Facade pattern is to simplify the client's interaction with a complex system, making it more manageable.
*   **God Object Anti-Pattern**: A common mistake where the Facade class becomes overly complex and takes on too many responsibilities, violating the Single Responsibility Principle.

#### Hands-on activity
**Scenario:** You are developing a multimedia conversion tool. Converting a video file involves several steps: reading the video, decoding audio, decoding video, applying filters, encoding audio, encoding video, and writing the output file. Each step is handled by a separate, specialized class. Create a Facade to simplify the video conversion process for clients.

**Instructions:**
1.  Create several "subsystem" classes: `VideoReader`, `AudioDecoder`, `VideoDecoder`, `FilterProcessor`, `AudioEncoder`, `VideoEncoder`, `FileWriter`. Each class should have a simple method (e.g., `Read(string filename)`, `DecodeAudio(byte[] data)`) that prints a message indicating its operation.
2.  Implement a `VideoConverterFacade` class. Its constructor should initialize instances of all the subsystem classes.
3.  Add a `ConvertVideo(string inputFilePath, string outputFilePath, string format)` method to the `VideoConverterFacade`. This method should orchestrate the calls to the various subsystem classes in the correct sequence to perform a complete video conversion.
4.  Write client code that uses only the `VideoConverterFacade` to convert a video, demonstrating the simplified interaction.

**Starter Code:**
```csharp
using System;

// Subsystem Classes
public class VideoReader
{
    public byte[] Read(string filename)
    {
        Console.WriteLine($"VideoReader: Reading video file '{filename}'.");
        return new byte[] { 0x01, 0x02, 0x03 }; // Dummy data
    }
}

public class AudioDecoder
{
    public byte[] DecodeAudio(byte[] rawData)
    {
        Console.WriteLine("AudioDecoder: Decoding audio stream.");
        return new byte[] { 0x0A, 0x0B }; // Dummy data
    }
}

public class VideoDecoder
{
    public byte[] DecodeVideo(byte[] rawData)
    {
        Console.WriteLine("VideoDecoder: Decoding video stream.");
        return new byte[] { 0x0C, 0x0D }; // Dummy data
    }
}

public class FilterProcessor
{
    public byte[] ApplyFilters(byte[] videoData, string filter)
    {
        Console.WriteLine($"FilterProcessor: Applying '{filter}' to video data.");
        return videoData; // For simplicity, return same data
    }
}

public class AudioEncoder
{
    public byte[] EncodeAudio(byte[] decodedAudio, string format)
    {
        Console.WriteLine($"AudioEncoder: Encoding audio to {format} format.");
        return new byte[] { 0x1A, 0x1B }; // Dummy data
    }
}

public class VideoEncoder
{
    public byte[] EncodeVideo(byte[] decodedVideo, string format)
    {
        Console.WriteLine($"VideoEncoder: Encoding video to {format} format.");
        return new byte[] { 0x1C, 0x1D }; // Dummy data
    }
}

public class FileWriter
{
    public void Write(string filename, byte[] data)
    {
        Console.WriteLine($"FileWriter: Writing {data.Length} bytes to '{filename}'.");
    }
}

// 2. Implement the Facade Class
public class VideoConverterFacade
{
    private readonly VideoReader _reader;
    private readonly AudioDecoder _audioDecoder;
    private readonly VideoDecoder _videoDecoder;
    private readonly FilterProcessor _filterProcessor;
    private readonly AudioEncoder _audioEncoder;
    private readonly VideoEncoder _videoEncoder;
    private readonly FileWriter _writer;

    public VideoConverterFacade()
    {
        _reader = new VideoReader();
        _audioDecoder = new AudioDecoder();
        _videoDecoder = new VideoDecoder();
        _filterProcessor = new FilterProcessor();
        _audioEncoder = new AudioEncoder();
        _videoEncoder = new VideoEncoder();
        _writer = new FileWriter();
    }

    public void ConvertVideo(string inputFilePath, string outputFilePath, string format, string filter = null)
    {
        Console.WriteLine($"\nVideoConverterFacade: Starting conversion of '{inputFilePath}' to '{outputFilePath}' ({format}).");

        // Implement the orchestration logic here:
        // 1. Read video
        // 2. Decode audio
        // 3. Decode video
        // 4. Apply filters (if 'filter' is not null/empty)
        // 5. Encode audio
        // 6. Encode video
        // 7. Write output file

        throw new NotImplementedException(); // Replace this line
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        VideoConverterFacade converter = new VideoConverterFacade();
        converter.ConvertVideo("input.mp4", "output.avi", "AVI", "Grayscale");
        converter.ConvertVideo("another_input.mov", "output.mp4", "MP4");
    }
}
```

#### Assessment idea
1.  **Question:** Your company has a complex financial reporting system with numerous classes for data extraction, calculation, formatting, and report generation. A new requirement comes in to provide a simple "GenerateMonthlyReport(DateTime month)" function for non-technical users. Explain how the Facade pattern would help achieve this, and describe the key benefits for the client code.
    **Correct Answer:** The **Facade pattern** would be highly effective here.
    **Explanation:** The existing financial reporting system is described as having "numerous classes for data extraction, calculation, formatting, and report generation," which is a classic indicator of a complex subsystem. The "GenerateMonthlyReport(DateTime month)" function represents a high-level, simplified operation that orchestrates several of these internal complexities.
    *   **How Facade helps:** You would create a `FinancialReportFacade` class. This facade would have the `GenerateMonthlyReport(DateTime month)` method. Inside this method, the facade would instantiate or receive instances of the necessary subsystem classes (e.g., `DataExtractor`, `Calculator`, `Formatter`, `ReportGenerator`). It would then coordinate their operations in the correct sequence:
        1.  Call `DataExtractor` to get raw data for the specified month.
        2.  Pass the data to `Calculator` for computations.
        3.  Send the results to `Formatter` to structure the data.
        4.  Finally, use `ReportGenerator` to produce the actual report.
    *   **Benefits for client code:**
        *   **Simplicity:** The client (non-technical user interface or another application) only needs to call one method (`GenerateMonthlyReport`) on the facade, rather than understanding and orchestrating multiple subsystem classes.
        *   **Loose Coupling:** The client becomes loosely coupled to the subsystem. It depends only on the `FinancialReportFacade`, not on the individual `DataExtractor`, `Calculator`, etc. If the internal implementation of the reporting system changes (e.g., a new calculation engine is used), only the facade needs to be updated, not the client.
        *   **Reduced Learning Curve:** New developers or external systems integrating with the reporting functionality face a much simpler API, reducing the time and effort required to use the system.

2.  **Question:** While the Facade pattern offers significant benefits, it also carries a risk if not implemented carefully. What is this primary risk, and how can it be mitigated?
    **Correct Answer:** The primary risk is that the Facade class can become a **"God object"** (also known as an "Anemic Facade" or "Bloated Facade").
    **Explanation:** A God object is an anti-pattern where a single class holds too much responsibility, knows too much about other classes, and performs too many operations. If the Facade starts to accumulate significant business logic, complex decision-making, or state management that goes beyond mere delegation and orchestration, it becomes brittle, hard to test, and violates the Single Responsibility Principle. This defeats the purpose of simplifying the subsystem, as the complexity is merely shifted to the facade itself.
    **Mitigation:**
    *   **Strict Delegation:** Ensure the Facade's primary role is to delegate client requests to the appropriate subsystem objects. It should not implement complex business logic itself.
    *   **Keep it Thin:** The facade should be relatively "thin," meaning its methods are primarily calls to one or more subsystem objects, possibly with some parameter mapping or simple conditional logic for orchestration.
    *   **Single Responsibility Principle:** Continuously evaluate if the facade is taking on too many responsibilities. If a method within the facade becomes too complex, consider if that logic truly belongs in the facade or if it should be refactored into a new or existing subsystem class.
    *   **Multiple Facades:** For extremely large and complex subsystems, it might be appropriate to create multiple, smaller facades, each simplifying a specific aspect or use case of the subsystem, rather than one monolithic facade.
    *   **Allow Direct Access:** The Facade pattern does not prevent clients from accessing subsystem classes directly if they need more fine-grained control. It merely provides a simpler alternative. This can help prevent the facade from becoming overly complex by trying to cater to every possible scenario.

#### AI generation note
Create an 11-minute live coding video. Start by introducing the concept of a complex subsystem and the need for simplification using the car dashboard analogy. Then, quickly define the subsystem classes (`VideoReader`, `AudioDecoder`, etc.) with simple `Console.WriteLine` methods. Transition to showing a "client without facade" to highlight the complexity. Then, live-code the `VideoConverterFacade` class, demonstrating how it orchestrates the subsystem calls. Use a split-screen view with C# code on the left and console output on the right. Emphasize how the client code becomes much cleaner. Include a brief animated diagram illustrating the client-facade-subsystem interaction. End with a reflection prompt asking learners to identify a complex API or library they've used and how a facade could simplify it.

---

## Module 4: Behavioral Patterns Part 1: Interaction & Responsibility

**Module Goal:** Understand and apply fundamental behavioral design patterns in C# and .NET that govern object interaction and responsibility assignment, improving flexibility and maintainability.

### Chapter 4.1 — Introducing Behavioral Patterns: The Strategy Pattern

#### Learning objectives
*   Identify the core purpose and benefits of behavioral design patterns.
*   Understand the problem that the Strategy pattern solves: interchangeable algorithms.
*   Implement the Strategy pattern in C# using interfaces and dependency injection.
*   Recognize scenarios where the Strategy pattern can improve code flexibility and maintainability.
*   Avoid common pitfalls and anti-patterns when applying the Strategy pattern.

#### Detailed lesson content
Welcome to the realm of behavioral design patterns! While creational patterns focus on object instantiation and structural patterns deal with object composition, behavioral patterns are all about how objects interact and distribute responsibilities. They aim to improve the flexibility and maintainability of your code by decoupling algorithms and responsibilities from the objects that use them. This often leads to systems that are easier to understand, extend, and test. We'll kick off our exploration with one of the most fundamental and widely used behavioral patterns: the Strategy pattern.

The Strategy pattern allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. This means you can select an algorithm at runtime. Imagine you're building an e-commerce application, and you need to calculate shipping costs. Different shipping carriers (USPS, FedEx, UPS) might have different pricing algorithms based on weight, distance, or delivery speed. Without the Strategy pattern, you might end up with a large `if-else if` or `switch` statement within your `ShippingCalculator` class, checking the chosen carrier and then executing the corresponding logic. This approach quickly becomes rigid; adding a new carrier requires modifying the `ShippingCalculator` class, violating the Open/Closed Principle (part of SOLID, which we covered earlier).

The Strategy pattern elegantly solves this by defining a common interface for all shipping calculation algorithms. Each specific carrier's calculation logic then becomes a concrete implementation of this interface. The `ShippingCalculator` (which we call the "Context") holds a reference to one of these strategy objects and delegates the actual calculation to it. This way, the `ShippingCalculator` doesn't need to know the specifics of *how* the calculation is done; it just knows *that* it can perform a calculation through its strategy. When you want to change the shipping method, you simply swap out the strategy object at runtime.

Let's look at a C# example. We'll define an interface `IShippingStrategy` with a method `CalculateCost`. Then, we'll create concrete strategy classes like `USPSStrategy`, `FedExStrategy`, and `UPSStrategy`, each implementing `CalculateCost` with its specific logic. Finally, our `Order` or `ShippingService` class will act as the Context, taking an `IShippingStrategy` in its constructor or via a property.

```csharp
// 1. The Strategy Interface
public interface IShippingStrategy
{
    double CalculateCost(Order order);
}

// 2. Concrete Strategy A: USPS
public class USPSStrategy : IShippingStrategy
{
    public double CalculateCost(Order order)
    {
        Console.WriteLine($"Calculating USPS shipping for order {order.OrderId}...");
        // Simulate complex USPS logic: flat rate + weight-based
        return 5.00 + (order.WeightInKg * 1.50);
    }
}

// 3. Concrete Strategy B: FedEx
public class FedExStrategy : IShippingStrategy
{
    public double CalculateCost(Order order)
    {
        Console.WriteLine($"Calculating FedEx shipping for order {order.OrderId}...");
        // Simulate complex FedEx logic: base rate + volume-based
        return 8.00 + (order.VolumeInCubicMeters * 2.20);
    }
}

// 4. Concrete Strategy C: UPS
public class UPSStrategy : IShippingStrategy
{
    public double CalculateCost(Order order)
    {
        Console.WriteLine($"Calculating UPS shipping for order {order.OrderId}...");
        // Simulate complex UPS logic: distance-based + premium for express
        // For simplicity, let's just use a higher base rate
        return 10.00 + (order.WeightInKg * 1.80);
    }
}

// Helper class for the Order
public class Order
{
    public int OrderId { get; set; }
    public double WeightInKg { get; set; }
    public double VolumeInCubicMeters { get; set; }
    public string DestinationAddress { get; set; }
    // ... other order details
}

// 5. The Context: Uses a Strategy
public class ShippingService
{
    private IShippingStrategy _shippingStrategy;

    public ShippingService(IShippingStrategy strategy)
    {
        _shippingStrategy = strategy ?? throw new ArgumentNullException(nameof(strategy));
    }

    // Allows changing the strategy at runtime
    public void SetStrategy(IShippingStrategy strategy)
    {
        _shippingStrategy = strategy ?? throw new ArgumentNullException(nameof(strategy));
    }

    public double GetShippingCost(Order order)
    {
        Console.WriteLine("Getting shipping cost using the current strategy.");
        return _shippingStrategy.CalculateCost(order);
    }
}

// Client Code Example
public class Client
{
    public static void Main(string[] args)
    {
        Order myOrder = new Order { OrderId = 101, WeightInKg = 2.5, VolumeInCubicMeters = 0.1, DestinationAddress = "123 Main St" };

        // Use USPS strategy
        ShippingService uspsService = new ShippingService(new USPSStrategy());
        double uspsCost = uspsService.GetShippingCost(myOrder);
        Console.WriteLine($"USPS Shipping Cost: ${uspsCost:F2}\n");

        // Use FedEx strategy
        ShippingService fedExService = new ShippingService(new FedExStrategy());
        double fedExCost = fedExService.GetShippingCost(myOrder);
        Console.WriteLine($"FedEx Shipping Cost: ${fedExCost:F2}\n");

        // Or change strategy at runtime for the same service instance
        ShippingService dynamicService = new ShippingService(new USPSStrategy());
        Console.WriteLine($"Initial strategy (USPS) cost: ${dynamicService.GetShippingCost(myOrder):F2}");

        dynamicService.SetStrategy(new UPSStrategy());
        Console.WriteLine($"Changed strategy (UPS) cost: ${dynamicService.GetShippingCost(myOrder):F2}");
    }
}
```

In this example, `IShippingStrategy` is our Strategy interface, `USPSStrategy`, `FedExStrategy`, and `UPSStrategy` are concrete strategies, and `ShippingService` is the Context. The client code can easily switch between different shipping strategies without modifying the `ShippingService` itself. This demonstrates the power of decoupling: the `ShippingService` is now open for extension (new strategies can be added) but closed for modification (its internal logic doesn't change when strategies are added).

A common mistake with the Strategy pattern is over-engineering. If you only have one or two simple algorithms that are unlikely to change, a simple `if-else` or `switch` might be perfectly adequate and less verbose. The Strategy pattern introduces more classes, which adds complexity. Another pitfall is creating strategies that are too granular or too broad. Each strategy should represent a distinct, encapsulated algorithm. If strategies share a lot of common code, consider using the Template Method pattern (which we'll cover later) or refactoring the common parts into a base abstract strategy class. Safety-wise, always ensure your context properly handles null strategies, perhaps by providing a default strategy or throwing an `ArgumentNullException`, as shown in the `ShippingService` constructor and `SetStrategy` method. This prevents `NullReferenceException` at runtime.

The Strategy pattern is incredibly versatile. Beyond shipping calculations, you can use it for:
*   **Validation:** Different validation rules for different input types.
*   **File Export/Import:** Different formats (CSV, JSON, XML).
*   **Compression:** Different compression algorithms (ZIP, GZIP).
*   **Data Persistence:** Different database providers (SQL Server, MySQL, PostgreSQL).
*   **Authentication:** Different authentication methods (OAuth, JWT, Basic Auth).

By applying the Strategy pattern, you gain a highly flexible and maintainable codebase where algorithms can evolve independently of the clients that use them.

#### Key concepts
*   **Behavioral Patterns:** Design patterns that focus on object interaction and responsibility distribution, aiming to improve flexibility.
*   **Strategy Pattern:** A behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.
*   **Strategy (Interface/Abstract Class):** Declares an interface common to all supported algorithms. The Context uses this interface to call the algorithm defined by a Concrete Strategy.
*   **Concrete Strategy:** Implements the Strategy interface, providing a specific algorithm.
*   **Context:** Maintains a reference to a Concrete Strategy object and uses the Strategy interface to perform an action. It doesn't know the concrete type of the strategy it's using.
*   **Decoupling:** Reducing the dependencies between classes, making them more independent and easier to change.
*   **Open/Closed Principle:** Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

#### Hands-on activity
**Activity: Implementing a Discount Calculation System**

Your task is to refactor a simple e-commerce discount calculation system using the Strategy pattern. Currently, there's a `DiscountCalculator` with a large `switch` statement for different discount types.

**Starter Code:**
```csharp
using System;

public enum DiscountType
{
    NoDiscount,
    SeasonalDiscount,
    LoyaltyDiscount,
    FirstTimeCustomerDiscount
}

public class Product
{
    public string Name { get; set; }
    public double Price { get; set; }
}

public class Order
{
    public int OrderId { get; set; }
    public Product[] Items { get; set; }
    public DiscountType AppliedDiscountType { get; set; } // This is what we'll replace
    public bool IsLoyaltyCustomer { get; set; }
    public bool IsFirstTimeCustomer { get; set; }

    public double GetTotalPrice()
    {
        double total = 0;
        foreach (var item in Items)
        {
            total += item.Price;
        }
        return total;
    }
}

// The class to refactor
public class OldDiscountCalculator
{
    public double CalculateFinalPrice(Order order)
    {
        double basePrice = order.GetTotalPrice();
        double finalPrice = basePrice;

        switch (order.AppliedDiscountType)
        {
            case DiscountType.NoDiscount:
                // No discount
                break;
            case DiscountType.SeasonalDiscount:
                finalPrice *= 0.90; // 10% off
                Console.WriteLine("Applied Seasonal Discount (10%).");
                break;
            case DiscountType.LoyaltyDiscount:
                if (order.IsLoyaltyCustomer)
                {
                    finalPrice *= 0.85; // 15% off for loyalty
                    Console.WriteLine("Applied Loyalty Discount (15%).");
                }
                break;
            case DiscountType.FirstTimeCustomerDiscount:
                if (order.IsFirstTimeCustomer)
                {
                    finalPrice *= 0.80; // 20% off for first-time
                    Console.WriteLine("Applied First-Time Customer Discount (20%).");
                }
                break;
            default:
                Console.WriteLine("No valid discount type applied.");
                break;
        }
        return finalPrice;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Product laptop = new Product { Name = "Laptop", Price = 1200.00 };
        Product mouse = new Product { Name = "Mouse", Price = 25.00 };

        Order order1 = new Order
        {
            OrderId = 1,
            Items = new Product[] { laptop, mouse },
            AppliedDiscountType = DiscountType.SeasonalDiscount,
            IsLoyaltyCustomer = false,
            IsFirstTimeCustomer = false
        };

        OldDiscountCalculator oldCalculator = new OldDiscountCalculator();
        Console.WriteLine($"Order 1 (Seasonal) - Original: {order1.GetTotalPrice():F2}, Final: {oldCalculator.CalculateFinalPrice(order1):F2}\n");

        Order order2 = new Order
        {
            OrderId = 2,
            Items = new Product[] { laptop },
            AppliedDiscountType = DiscountType.LoyaltyDiscount,
            IsLoyaltyCustomer = true,
            IsFirstTimeCustomer = false
        };
        Console.WriteLine($"Order 2 (Loyalty) - Original: {order2.GetTotalPrice():F2}, Final: {oldCalculator.CalculateFinalPrice(order2):F2}\n");

        Order order3 = new Order
        {
            OrderId = 3,
            Items = new Product[] { mouse },
            AppliedDiscountType = DiscountType.FirstTimeCustomerDiscount,
            IsLoyaltyCustomer = false,
            IsFirstTimeCustomer = true
        };
        Console.WriteLine($"Order 3 (First-Time) - Original: {order3.GetTotalPrice():F2}, Final: {oldCalculator.CalculateFinalPrice(order3):F2}\n");
    }
}
```

**Instructions:**
1.  Define an interface `IDiscountStrategy` with a method `ApplyDiscount(Order order, double basePrice)`.
2.  Create concrete strategy classes for `NoDiscountStrategy`, `SeasonalDiscountStrategy`, `LoyaltyDiscountStrategy`, and `FirstTimeCustomerDiscountStrategy`. Each should implement `IDiscountStrategy` and contain the specific discount logic.
3.  Modify the `Order` class to remove `AppliedDiscountType` and instead accept an `IDiscountStrategy` when calculating its final price, or pass it to a new `NewDiscountCalculator` class.
4.  Create a `NewDiscountCalculator` (your Context) that takes an `IDiscountStrategy` and uses it to calculate the final price.
5.  Update the `Main` method to use your new Strategy-based system, demonstrating how to switch between different discount strategies.

#### Assessment idea
1.  **Question:** You are developing a payment processing system for an online store. You need to support various payment methods like Credit Card, PayPal, and Cryptocurrency. Which design pattern would best allow you to easily add new payment methods in the future without modifying existing payment processing logic?
    *   A) Singleton Pattern
    *   B) Adapter Pattern
    *   C) Strategy Pattern
    *   D) Decorator Pattern

    **Correct Answer:** C) Strategy Pattern
    **Explanation:** The Strategy pattern is ideal here because it allows you to define a family of algorithms (payment methods), encapsulate each one in a separate class, and make them interchangeable. Your payment processing context can then use any of these strategies without knowing their concrete implementation details. Adding a new payment method simply means creating a new concrete strategy class, adhering to the common payment interface, without altering the core payment processor.

2.  **Question:** Consider the following C# code snippet that attempts to implement a Strategy pattern for logging. Identify a potential common mistake or area for improvement in this implementation:

    ```csharp
    public interface ILoggerStrategy
    {
        void Log(string message);
    }

    public class FileLogger : ILoggerStrategy
    {
        public void Log(string message)
        {
            // Logic to write to a file
            Console.WriteLine($"File Log: {message}");
        }
    }

    public class DatabaseLogger : ILoggerStrategy
    {
        public void Log(string message)
        {
            // Logic to write to a database
            Console.WriteLine($"DB Log: {message}");
        }
    }

    public class ApplicationLogger
    {
        private ILoggerStrategy _logger;

        public ApplicationLogger(string loggerType)
        {
            if (loggerType == "File")
            {
                _logger = new FileLogger();
            }
            else if (loggerType == "Database")
            {
                _logger = new DatabaseLogger();
            }
            else
            {
                _logger = new FileLogger(); // Default
            }
        }

        public void LogMessage(string message)
        {
            _logger.Log(message);
        }
    }
    ```
    **Correct Answer:** The primary common mistake is that the `ApplicationLogger` (the Context) is responsible for *creating* and *selecting* the concrete strategy based on a string input. This violates the principle of dependency inversion and couples the `ApplicationLogger` to the concrete `FileLogger` and `DatabaseLogger` classes.
    **Explanation:** In a true Strategy pattern, the client (or a factory/IoC container) should be responsible for instantiating the correct `ILoggerStrategy` and *injecting* it into the `ApplicationLogger`. The `ApplicationLogger` should only receive an `ILoggerStrategy` through its constructor or a setter, thus remaining completely decoupled from the concrete strategy implementations. This makes the `ApplicationLogger` more flexible and easier to test, as you can easily mock or swap out logging strategies. The corrected constructor would look like: `public ApplicationLogger(ILoggerStrategy logger) { _logger = logger; }`.

#### AI generation note
Create a 12-minute live coding video demonstrating the Strategy pattern in C#. Start by showing the `if-else if` anti-pattern for shipping calculation. Then, refactor the code step-by-step: first, define the `IShippingStrategy` interface, then create three concrete `ShippingStrategy` implementations (e.g., `StandardShippingStrategy`, `ExpressShippingStrategy`, `InternationalShippingStrategy`). Finally, create the `ShippingService` (Context) that takes an `IShippingStrategy` and show how to dynamically switch strategies in the `Main` method. Use a split-screen view with Visual Studio Code on the left and console output on the right. Emphasize the benefits of decoupling and the Open/Closed Principle. Include a reflection prompt asking learners to identify another real-world scenario where Strategy could be applied.

### Chapter 4.2 — Command Pattern: Encapsulating Requests

#### Learning objectives
*   Explain the core concept of the Command pattern and its role in encapsulating requests.
*   Identify scenarios where the Command pattern can be effectively applied, such as undo/redo functionality or asynchronous task execution.
*   Implement the Command pattern in C# using an interface, concrete command classes, an invoker, and a receiver.
*   Understand the benefits of decoupling the invoker from the receiver through command objects.
*   Recognize potential performance considerations and common mistakes when using the Command pattern.

#### Detailed lesson content
Building upon our understanding of behavioral patterns, let's delve into the Command pattern. This pattern is all about encapsulating a request as an object, thereby allowing you to parameterize clients with different requests, queue or log requests, and support undoable operations. Think of it like a formal instruction or a "to-do" item that can be passed around, executed, and even undone, without the sender needing to know the specifics of how the instruction is carried out.

Consider a simple remote control for home automation. You have buttons for "Turn Lights On," "Turn Lights Off," "Open Garage Door," "Close Garage Door," etc. Without the Command pattern, each button might directly call a method on a `Light` object or a `GarageDoor` object. This creates a tight coupling between the remote control (the "Invoker") and the specific devices (the "Receivers"). If you want to add a new device, say a smart thermostat, you'd have to modify the remote control's code. If you want to implement an undo feature, it becomes very complex.

The Command pattern resolves this by introducing a `Command` interface. Each button on the remote control then holds a concrete command object that implements this interface. When a button is pressed, it simply calls the `Execute()` method on its associated command object. The command object, in turn, knows which receiver to interact with and what action to perform on it. This decouples the remote control (Invoker) from the actual devices (Receivers), making the system much more flexible.

Let's illustrate this with a C# example, using the remote control scenario.

```csharp
using System;
using System.Collections.Generic;

// 1. The Command Interface
public interface ICommand
{
    void Execute();
    void Undo(); // Added for undo functionality
}

// 2. Receiver: The actual device that performs actions
public class Light
{
    private string _location;

    public Light(string location)
    {
        _location = location;
    }

    public void TurnOn()
    {
        Console.WriteLine($"{_location} Light is ON.");
    }

    public void TurnOff()
    {
        Console.WriteLine($"{_location} Light is OFF.");
    }
}

public class GarageDoor
{
    public void Open()
    {
        Console.WriteLine("Garage Door is OPEN.");
    }

    public void Close()
    {
        Console.WriteLine("Garage Door is CLOSED.");
    }
}

// 3. Concrete Commands: Encapsulate actions on Receivers
public class LightOnCommand : ICommand
{
    private Light _light; // Reference to the receiver

    public LightOnCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.TurnOn();
    }

    public void Undo()
    {
        _light.TurnOff(); // Undo turning on is turning off
    }
}

public class LightOffCommand : ICommand
{
    private Light _light;

    public LightOffCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.TurnOff();
    }

    public void Undo()
    {
        _light.TurnOn(); // Undo turning off is turning on
    }
}

public class GarageDoorOpenCommand : ICommand
{
    private GarageDoor _garageDoor;

    public GarageDoorOpenCommand(GarageDoor garageDoor)
    {
        _garageDoor = garageDoor;
    }

    public void Execute()
    {
        _garageDoor.Open();
    }

    public void Undo()
    {
        _garageDoor.Close();
    }
}

// A "No Command" for unassigned slots, promoting null object pattern
public class NoCommand : ICommand
{
    public void Execute()
    {
        Console.WriteLine("No command assigned to this slot.");
    }

    public void Undo()
    {
        // Do nothing for NoCommand
    }
}

// 4. Invoker: The remote control that issues commands
public class RemoteControl
{
    private ICommand[] _onCommands;
    private ICommand[] _offCommands;
    private ICommand _undoCommand; // Stores the last executed command for undo

    public RemoteControl()
    {
        _onCommands = new ICommand[7];
        _offCommands = new ICommand[7];

        ICommand noCommand = new NoCommand();
        for (int i = 0; i < 7; i++)
        {
            _onCommands[i] = noCommand;
            _offCommands[i] = noCommand;
        }
        _undoCommand = noCommand;
    }

    public void SetCommand(int slot, ICommand onCommand, ICommand offCommand)
    {
        _onCommands[slot] = onCommand;
        _offCommands[slot] = offCommand;
    }

    public void OnButtonWasPushed(int slot)
    {
        _onCommands[slot].Execute();
        _undoCommand = _onCommands[slot]; // Store for undo
    }

    public void OffButtonWasPushed(int slot)
    {
        _offCommands[slot].Execute();
        _undoCommand = _offCommands[slot]; // Store for undo
    }

    public void UndoButtonWasPushed()
    {
        Console.WriteLine("--- UNDO ---");
        _undoCommand.Undo();
    }
}

// Client Code Example
public class Client
{
    public static void Main(string[] args)
    {
        RemoteControl remote = new RemoteControl();

        Light livingRoomLight = new Light("Living Room");
        GarageDoor garageDoor = new GarageDoor();

        // Create commands
        LightOnCommand livingRoomLightOn = new LightOnCommand(livingRoomLight);
        LightOffCommand livingRoomLightOff = new LightOffCommand(livingRoomLight);
        GarageDoorOpenCommand garageDoorOpen = new GarageDoorOpenCommand(garageDoor);

        // Assign commands to remote slots
        remote.SetCommand(0, livingRoomLightOn, livingRoomLightOff);
        remote.SetCommand(1, garageDoorOpen, new NoCommand()); // Garage door only opens

        Console.WriteLine("--- Initial Actions ---");
        remote.OnButtonWasPushed(0); // Turn Living Room Light On
        remote.OnButtonWasPushed(1); // Open Garage Door
        remote.OffButtonWasPushed(0); // Turn Living Room Light Off

        Console.WriteLine("\n--- Testing Undo ---");
        remote.UndoButtonWasPushed(); // Undo Light Off -> Light On
        remote.UndoButtonWasPushed(); // Undo Garage Door Open -> Garage Door Close
        remote.UndoButtonWasPushed(); // Undo Light On -> Light Off
    }
}
```

In this example:
*   `ICommand` is the command interface, defining `Execute()` and `Undo()`.
*   `Light` and `GarageDoor` are `Receivers`, knowing how to perform specific operations.
*   `LightOnCommand`, `LightOffCommand`, `GarageDoorOpenCommand` are `Concrete Commands`, each holding a reference to a receiver and calling one or more of its methods.
*   `RemoteControl` is the `Invoker`, which stores and executes commands. It doesn't know anything about `Light` or `GarageDoor` objects directly.

The benefits are clear:
1.  **Decoupling:** The `RemoteControl` is completely decoupled from the specific devices and their operations. It only interacts with `ICommand` objects.
2.  **Extensibility:** Adding new devices or operations doesn't require changing the `RemoteControl` class. You just create new `ICommand` implementations.
3.  **Undo/Redo:** By storing a history of executed commands, you can easily implement undo and redo functionality by calling `Undo()` or `Execute()` on past commands.
4.  **Macro Commands:** You can create a `MacroCommand` that holds a list of other commands, allowing you to execute a sequence of operations with a single call.
5.  **Logging/Queueing:** Commands can be logged or placed in a queue for asynchronous execution, providing robustness and auditing capabilities.

Common mistakes include overusing the pattern for simple operations where direct method calls suffice, or creating commands that are too complex, violating the Single Responsibility Principle. Each command should ideally encapsulate a single, well-defined request. Performance-wise, creating many small command objects can introduce some overhead, but for most applications, this is negligible compared to the architectural benefits. Safety notes: always ensure your commands handle potential exceptions from receiver operations gracefully, and when implementing undo, consider the state changes and potential side effects. The `NoCommand` pattern is a good practice to avoid `NullReferenceException` for unassigned command slots.

The Command pattern is incredibly powerful for building robust and flexible systems. Beyond remote controls, it's widely used in:
*   **GUI Applications:** Implementing undo/redo for text editors or drawing programs.
*   **Transaction Systems:** Encapsulating database operations as commands that can be committed or rolled back.
*   **Task Scheduling:** Queueing tasks to be executed at a later time or by a different thread.
*   **Web APIs:** Representing API requests as command objects that can be validated, processed, and logged.

#### Key concepts
*   **Command Pattern:** A behavioral design pattern that encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queueing or logging of requests, and support for undoable operations.
*   **Command (Interface):** Declares an interface for executing an operation. Typically includes an `Execute()` method and often an `Undo()` method.
*   **Concrete Command:** Implements the `Command` interface. It stores a reference to a `Receiver` object and invokes one or more of its methods. It also defines the binding between a `Receiver` and an action.
*   **Receiver:** The object that performs the actual work. It knows how to carry out the operations requested by the command.
*   **Invoker:** The object that asks the command to carry out the request. It holds a command object and doesn't know anything about the concrete command or its receiver.
*   **Decoupling:** Separating the object that initiates an operation (Invoker) from the object that knows how to perform it (Receiver).
*   **Undo/Redo Functionality:** A key benefit of the Command pattern, achieved by storing a history of command objects and implementing an `Undo()` method for each.

#### Hands-on activity
**Activity: Implementing a Simple Text Editor with Undo/Redo**

Your task is to build a basic text editor that supports `AddText` and `DeleteText` operations, along with an undo feature, using the Command pattern.

**Starter Code:**
```csharp
using System;
using System.Collections.Generic;

// Receiver: The actual text document
public class TextDocument
{
    private string _content = "";

    public void Add(string text)
    {
        _content += text;
        Console.WriteLine($"Added: \"{text}\". Current content: \"{_content}\"");
    }

    public void Delete(int length)
    {
        if (_content.Length >= length)
        {
            string deletedText = _content.Substring(_content.Length - length);
            _content = _content.Substring(0, _content.Length - length);
            Console.WriteLine($"Deleted: \"{deletedText}\". Current content: \"{_content}\"");
        }
        else
        {
            Console.WriteLine("Cannot delete beyond current content length.");
        }
    }

    public string GetContent()
    {
        return _content;
    }
}

// Main application (Invoker and Client combined for simplicity)
public class TextEditor
{
    private TextDocument _document = new TextDocument();
    // You'll need a stack to store commands for undo functionality

    public void AddText(string text)
    {
        // TODO: Implement using Command pattern
        _document.Add(text); // Direct call for now
    }

    public void DeleteText(int length)
    {
        // TODO: Implement using Command pattern
        _document.Delete(length); // Direct call for now
    }

    public void UndoLastAction()
    {
        // TODO: Implement undo using Command pattern
        Console.WriteLine("Undo not implemented yet.");
    }

    public void DisplayContent()
    {
        Console.WriteLine($"\n--- Document Content: \"{_document.GetContent()}\" ---\n");
    }

    public static void Main(string[] args)
    {
        TextEditor editor = new TextEditor();
        editor.DisplayContent();

        editor.AddText("Hello");
        editor.AddText(" World");
        editor.DeleteText(5); // Deletes "World"
        editor.UndoLastAction(); // Should undo the delete, restoring "World"
        editor.AddText(" C#");
        editor.UndoLastAction(); // Should undo " C#"
        editor.UndoLastAction(); // Should undo "Hello World" (the initial add of "Hello World")

        editor.DisplayContent();
    }
}
```

**Instructions:**
1.  Define an `ICommand` interface with `Execute()` and `Undo()` methods.
2.  Create `AddTextCommand` and `DeleteTextCommand` concrete classes. Each command should store a reference to the `TextDocument` (Receiver) and any necessary parameters (e.g., the text to add, the length to delete, and for `DeleteTextCommand`, the text that *was* deleted so it can be re-added on undo).
3.  Modify the `TextEditor` class (Invoker) to:
    *   Store a `Stack<ICommand>` to keep track of executed commands for undo.
    *   In `AddText` and `DeleteText`, create the appropriate command object, call its `Execute()` method, and then push the command onto the undo stack.
    *   In `UndoLastAction`, pop the last command from the stack and call its `Undo()` method.
4.  Run the `Main` method to verify that `AddText`, `DeleteText`, and `UndoLastAction` work correctly.

#### Assessment idea
1.  **Question:** A software developer is building a system where users can perform various actions, and these actions need to be logged for auditing purposes and potentially replayed. Which aspect of the Command pattern directly supports the logging and replaying of actions?
    *   A) Decoupling the Invoker from the Receiver.
    *   B) Encapsulating a request as an object.
    *   C) Providing a common interface for all actions.
    *   D) Allowing for runtime algorithm selection.

    **Correct Answer:** B) Encapsulating a request as an object.
    **Explanation:** By encapsulating each request (action) as an object, the Command pattern makes it easy to store these objects in a log or a queue. Each command object contains all the information needed to execute (or re-execute) that specific request, making it perfectly suited for logging, auditing, and replaying functionalities. While A and C are benefits, B is the direct enabler for logging and replaying. D describes the Strategy pattern.

2.  **Question:** You've implemented a robust undo/redo system in your application using the Command pattern. However, you notice that when a user performs a very complex operation (e.g., applying a filter to a large image), the application briefly freezes when the command is executed. What is a common mistake or consideration related to performance when using the Command pattern for such operations, and how might you mitigate it?
    **Correct Answer:** A common mistake or consideration is that the `Execute()` method of a `ConcreteCommand` might perform a computationally intensive operation directly on the main thread. If this operation takes a significant amount of time, it will block the UI and lead to a frozen application.
    **Explanation:** To mitigate this, you could:
    *   **Asynchronous Execution:** Modify the `ICommand` interface to include an `ExecuteAsync()` method or wrap the command execution in a `Task` and run it on a background thread. This keeps the UI responsive.
    *   **Progress Reporting:** If the operation is long, the command could implement a mechanism to report progress back to the UI, giving the user feedback.
    *   **Batching/Optimization:** For very granular commands, consider if they can be combined into a single, more efficient macro command, or if the underlying receiver operation can be optimized.
    *   **"Heavy" vs. "Light" Commands:** Recognize when a command might be "heavy" and design its execution path accordingly, perhaps by using a separate thread pool for such commands.

#### AI generation note
Create an 11-minute interactive code demo video. Begin by showing a simple `Light` and `GarageDoor` class with direct method calls from a client. Then, introduce the `ICommand` interface with `Execute()` and `Undo()`. Live code the `LightOnCommand`, `LightOffCommand`, and `GarageDoorOpenCommand` concrete classes, demonstrating how they encapsulate the receiver and its action. Next, build the `RemoteControl` (Invoker) to hold and execute these commands. Show the `Main` method demonstrating setting commands to slots, pressing buttons, and crucially, using the `UndoButtonWasPushed()` feature. Use a split-screen view with Visual Studio Code on the left and console output on the right. Highlight the decoupling achieved. Conclude with a mini-quiz asking about the role of the `Receiver` in the Command pattern.

### Chapter 4.3 — Chain of Responsibility: Decoupling Senders and Receivers

#### Learning objectives
*   Understand the purpose of the Chain of Responsibility pattern: decoupling senders of requests from their receivers.
*   Identify scenarios where handling a request might involve multiple potential processors.
*   Implement the Chain of Responsibility pattern in C# using an abstract handler and concrete handler classes.
*   Explain how requests are passed along the chain until handled or exhausted.
*   Recognize common pitfalls like unhandled requests and potential performance issues with long chains.

#### Detailed lesson content
As we continue our journey through behavioral patterns, let's explore the Chain of Responsibility pattern. This pattern is designed to avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. It chains the receiving objects and passes the request along the chain until an object handles it. Imagine a customer support system where a request might first go to a Level 1 support agent, then to a Level 2 agent if Level 1 can't resolve it, and finally to a specialist if Level 2 is also stumped.

Without the Chain of Responsibility pattern, the client sending the support request would need to know which level of support to contact, or the first support agent would need to explicitly know about and call the next level if they couldn't handle it. This creates tight coupling and makes the system rigid. Adding a new support level or changing the escalation logic would require modifying existing code.

The Chain of Responsibility pattern solves this by defining an abstract handler interface or class. Each concrete handler decides whether it can process the request or if it should pass the request to the next handler in the chain. If a handler can process the request, it does so; otherwise, it forwards the request to its successor. The client only sends the request to the first handler in the chain, completely unaware of which specific handler will eventually process it.

Let's consider a practical C# example: a logging system. We want to log messages, but different messages (e.g., `Info`, `Warning`, `Error`) might need to be handled differently. An `Info` message might just go to the console, a `Warning` might go to a file and the console, and an `Error` might go to a database, a file, and the console, potentially even triggering an alert.

```csharp
using System;

// 1. The Abstract Handler
public abstract class LogHandler
{
    protected LogHandler _successor; // Reference to the next handler in the chain
    protected LogLevel _level; // The level this handler can process

    public LogHandler(LogLevel level)
    {
        _level = level;
    }

    // Method to set the next handler in the chain
    public LogHandler SetNext(LogHandler successor)
    {
        _successor = successor;
        return successor; // Allows chaining calls like handler1.SetNext(handler2).SetNext(handler3)
    }

    // The core method to handle the request
    public void HandleRequest(LogLevel level, string message)
    {
        if (level >= _level) // This handler can process messages at or above its level
        {
            WriteMessage(message);
        }

        // If there's a successor, pass the request along regardless if this handler processed it
        // Or, you could make it conditional: if (level > _level && _successor != null)
        if (_successor != null)
        {
            _successor.HandleRequest(level, message);
        }
        else if (level >= _level && _successor == null)
        {
            // If this is the last handler and it processed it, fine.
            // If it didn't process it and there's no successor, the request might be unhandled
            // depending on the specific implementation logic.
            // For logging, often all relevant handlers process it.
        }
    }

    protected abstract void WriteMessage(string message);
}

// Log Levels
public enum LogLevel
{
    Info,
    Warning,
    Error,
    Critical
}

// 2. Concrete Handler A: Console Logger
public class ConsoleLogger : LogHandler
{
    public ConsoleLogger(LogLevel level) : base(level) { }

    protected override void WriteMessage(string message)
    {
        Console.WriteLine($"[Console - {_level}] {message}");
    }
}

// 3. Concrete Handler B: File Logger
public class FileLogger : LogHandler
{
    public FileLogger(LogLevel level) : base(level) { }

    protected override void WriteMessage(string message)
    {
        // In a real app, this would write to a file
        Console.WriteLine($"[File - {_level}] {message}");
    }
}

// 4. Concrete Handler C: Email/Alert Logger (for critical issues)
public class EmailLogger : LogHandler
{
    public EmailLogger(LogLevel level) : base(level) { }

    protected override void WriteMessage(string message)
    {
        // In a real app, this would send an email or trigger an alert
        Console.WriteLine($"[EMAIL ALERT - {_level}] {message}");
    }
}

// Client Code Example
public class Client
{
    public static void Main(string[] args)
    {
        // Build the chain: Info -> Warning -> Error -> Critical
        // ConsoleLogger handles Info and above
        // FileLogger handles Warning and above
        // EmailLogger handles Critical and above

        LogHandler consoleLogger = new ConsoleLogger(LogLevel.Info);
        LogHandler fileLogger = new FileLogger(LogLevel.Warning);
        LogHandler emailLogger = new EmailLogger(LogLevel.Critical);

        // Chain them together
        consoleLogger.SetNext(fileLogger);
        fileLogger.SetNext(emailLogger); // EmailLogger is the last in this chain

        Console.WriteLine("--- Sending Info Message ---");
        consoleLogger.HandleRequest(LogLevel.Info, "This is an informational message.");
        Console.WriteLine("\n");

        Console.WriteLine("--- Sending Warning Message ---");
        consoleLogger.HandleRequest(LogLevel.Warning, "This is a warning message.");
        Console.WriteLine("\n");

        Console.WriteLine("--- Sending Error Message ---");
        consoleLogger.HandleRequest(LogLevel.Error, "This is an error message!");
        Console.WriteLine("\n");

        Console.WriteLine("--- Sending Critical Message ---");
        consoleLogger.HandleRequest(LogLevel.Critical, "SYSTEM CRITICAL FAILURE!");
        Console.WriteLine("\n");

        // Example of a request that might not be fully handled if the chain isn't set up correctly
        // If we only had a ConsoleLogger for Info, and sent a Critical message,
        // it would only be logged to console as Info, not as Critical.
        // Our current setup ensures all relevant handlers process it.
        LogHandler simpleConsole = new ConsoleLogger(LogLevel.Info);
        Console.WriteLine("--- Sending Critical Message to a simple chain ---");
        simpleConsole.HandleRequest(LogLevel.Critical, "Another critical message, but only console is active.");
    }
}
```

In this example:
*   `LogHandler` is the abstract handler, defining the `SetNext` method to build the chain and `HandleRequest` to process or forward.
*   `ConsoleLogger`, `FileLogger`, `EmailLogger` are `Concrete Handlers`, each responsible for a specific logging level and action.
*   The client (`Main` method) constructs the chain and initiates requests by calling `HandleRequest` on the first handler.

The key benefits are:
1.  **Reduced Coupling:** The sender of a request doesn't need to know which handler will process it, nor does it need to know the structure of the chain.
2.  **Increased Flexibility:** You can add, remove, or reorder handlers in the chain dynamically at runtime. This makes the system highly configurable.
3.  **Simplified Handler Logic:** Each handler only needs to know about its own responsibility and its successor, keeping its code focused and simple.

Common mistakes include creating chains that are too long, which can lead to performance issues due to excessive traversals. Another critical mistake is failing to ensure that all requests are eventually handled, or conversely, that requests don't get handled multiple times if that's not the desired behavior. If a request reaches the end of the chain without being processed, it might silently fail, which can be a safety concern. Always ensure there's a default handler or a mechanism to report unhandled requests. Proper chain construction is also important; ensure `SetNext` is called correctly to form the desired sequence.

The Chain of Responsibility pattern is powerful for:
*   **Event Handling:** In GUI frameworks, events often propagate through a chain of components until one handles them.
*   **Approval Workflows:** Documents or requests requiring multiple levels of approval.
*   **Authentication/Authorization:** A series of authentication checks or permission verifications.
*   **Data Validation:** Applying a sequence of validation rules to input data.
*   **Message Processing:** Different message types processed by different components in a pipeline.

#### Key concepts
*   **Chain of Responsibility Pattern:** A behavioral design pattern that avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. It chains the receiving objects and passes the request along the chain until an object handles it.
*   **Handler (Abstract/Interface):** Declares an interface for handling requests and defines an interface for accessing the successor in the chain.
*   **Concrete Handler:** Implements the handler interface. It handles requests it is responsible for and, if it cannot, forwards them to its successor.
*   **Successor:** The next handler in the chain. Each handler typically maintains a reference to its successor.
*   **Request:** The object or data being passed along the chain for processing.
*   **Decoupling:** The sender of the request is decoupled from the specific receiver that processes it.
*   **Dynamic Configuration:** The ability to change the order or composition of handlers at runtime.

#### Hands-on activity
**Activity: Building an Expense Approval Workflow**

Your task is to implement a simple expense approval system using the Chain of Responsibility pattern. Expenses need to be approved by different levels of management based on the amount.

**Scenario:**
*   Expenses up to $100 can be approved by a Team Lead.
*   Expenses up to $1000 can be approved by a Department Manager.
*   Expenses above $1000 require CEO approval.

**Starter Code:**
```csharp
using System;

public class Expense
{
    public int Id { get; set; }
    public double Amount { get; set; }
    public string Description { get; set; }
    public bool IsApproved { get; private set; } = false;
    public string ApprovedBy { get; private set; } = "Pending";

    public void Approve(string approver)
    {
        IsApproved = true;
        ApprovedBy = approver;
        Console.WriteLine($"Expense {Id} (Amount: ${Amount:F2}) APPROVED by {approver}.");
    }

    public void Deny(string approver)
    {
        IsApproved = false; // Or set to a 'Denied' state
        ApprovedBy = approver;
        Console.WriteLine($"Expense {Id} (Amount: ${Amount:F2}) DENIED by {approver}.");
    }
}

// Abstract Handler (You will complete this and create concrete handlers)
public abstract class Approver
{
    protected Approver _successor;
    protected string _name; // Name of the approver (e.g., "Team Lead", "Department Manager")

    public Approver(string name)
    {
        _name = name;
    }

    public Approver SetNext(Approver successor)
    {
        _successor = successor;
        return successor;
    }

    public abstract void ProcessRequest(Expense expense);
}

public class Program
{
    public static void Main(string[] args)
    {
        // TODO: Create concrete approver handlers (TeamLead, DepartmentManager, CEO)
        // TODO: Build the chain of responsibility
        // TODO: Send expense requests through the chain

        Console.WriteLine("Expense Approval System (Chain of Responsibility)");

        // Example expenses
        Expense expense1 = new Expense { Id = 1, Amount = 75.00, Description = "Office Supplies" };
        Expense expense2 = new Expense { Id = 2, Amount = 500.00, Description = "Software License" };
        Expense expense3 = new Expense { Id = 3, Amount = 1500.00, Description = "New Server Purchase" };
        Expense expense4 = new Expense { Id = 4, Amount = 99.99, Description = "Team Lunch" };
        Expense expense5 = new Expense { Id = 5, Amount = 1000.01, Description = "Consulting Fees" };

        // Expected Output:
        // Expense 1 (Amount: $75.00) APPROVED by Team Lead.
        // Expense 2 (Amount: $500.00) APPROVED by Department Manager.
        // Expense 3 (Amount: $1500.00) APPROVED by CEO.
        // Expense 4 (Amount: $99.99) APPROVED by Team Lead.
        // Expense 5 (Amount: $1000.01) APPROVED by CEO.
    }
}
```

**Instructions:**
1.  Create three concrete `Approver` classes: `TeamLead`, `DepartmentManager`, and `CEO`.
    *   Each class should inherit from `Approver` and implement the `ProcessRequest(Expense expense)` method.
    *   Inside `ProcessRequest`, check if the `expense.Amount` falls within the approver's limit. If it does, call `expense.Approve(_name)`.
    *   If the expense amount exceeds the current approver's limit, and a `_successor` exists, call `_successor.ProcessRequest(expense)`.
    *   If the expense amount exceeds the current approver's limit and there is no `_successor`, print a message indicating the expense cannot be approved (e.g., "Expense {Id} (Amount: ${Amount:F2}) cannot be approved. Requires higher authority.").
2.  In the `Main` method, instantiate your `TeamLead`, `DepartmentManager`, and `CEO` objects.
3.  Build the chain: `teamLead.SetNext(departmentManager).SetNext(ceo);`.
4.  Send each of the example `Expense` objects to the `teamLead.ProcessRequest(expense)`.
5.  Verify the output matches the expected output.

#### Assessment idea
1.  **Question:** You are designing a spam filter system where incoming emails go through a series of checks: first for known spam keywords, then for sender reputation, and finally for attachment safety. If an email passes one check, it proceeds to the next. If any check identifies it as spam, it's immediately quarantined. Which behavioral design pattern is most suitable for structuring this email processing workflow?
    *   A) Strategy Pattern
    *   B) Command Pattern
    *   C) Chain of Responsibility Pattern
    *   D) Observer Pattern

    **Correct Answer:** C) Chain of Responsibility Pattern
    **Explanation:** The Chain of Responsibility pattern is perfect for this scenario. Each spam check (keyword, sender, attachment) can be a concrete handler in the chain. An email (the request) is passed from one handler to the next. If a handler determines the email is spam, it "handles" the request (quarantines the email) and the processing stops. If it's not spam, it passes the email to the next handler in the chain. This allows for flexible and extensible processing rules.

2.  **Question:** In a Chain of Responsibility implementation for processing customer support tickets, a new requirement comes in: urgent tickets must bypass the initial Level 1 support and go directly to Level 2. Describe how you would modify the existing Chain of Responsibility structure to accommodate this, without breaking the pattern's principles.
    **Correct Answer:** To accommodate urgent tickets bypassing Level 1 support, you would modify the client code (the sender of the request) that initiates the chain traversal, rather than altering the handlers themselves.
    **Explanation:** The Chain of Responsibility pattern allows for dynamic configuration of the chain. For urgent tickets, the client would simply send the request to the `Level2SupportHandler` directly, instead of the `Level1SupportHandler`. The chain itself (e.g., `Level2SupportHandler.SetNext(Level3SupportHandler)`) would remain intact. This adheres to the pattern's principle of decoupling the sender from the receiver, as the client still only interacts with the *entry point* of a chain, just a different entry point for urgent requests. No changes are needed to the `Level1SupportHandler` or `Level2SupportHandler` classes themselves.

#### AI generation note
Create a 10-minute animated diagram and live coding video. Start with an animation illustrating the concept of a request passing through a series of handlers (e.g., a customer service call escalating). Then, transition to live coding in C#. Define the `abstract LogHandler` and `LogLevel` enum. Implement `ConsoleLogger`, `FileLogger`, and `EmailLogger` concrete handlers. Show how to dynamically build the chain using `SetNext`. Demonstrate sending different `LogLevel` messages through the chain and observe the output, highlighting how each handler decides to process or pass. Use visual overlays to show the request moving through the chain. Conclude with an interactive coding exercise where learners add a new `DatabaseLogger` to the existing chain.

### Chapter 4.4 — Iterator Pattern: Traversing Collections

#### Learning objectives
*   Understand the problem the Iterator pattern solves: providing a standardized way to access elements of an aggregate object without exposing its internal representation.
*   Identify the components of the Iterator pattern: Iterator, Concrete Iterator, Aggregate, and Concrete Aggregate.
*   Implement a custom Iterator and Aggregate in C# using `IEnumerable` and `IEnumerator`.
*   Explain the benefits of the Iterator pattern, including separation of concerns and support for multiple traversal algorithms.
*   Recognize common mistakes like exposing internal collection details and handling concurrent modifications.

#### Detailed lesson content
Our final behavioral pattern for this module is the Iterator pattern. This pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. In simpler terms, it allows you to "walk through" a collection of items, one by one, without needing to know how that collection is internally structured (whether it's an array, a list, a tree, etc.). This is a pattern you use constantly in C# without even realizing it, thanks to the built-in `foreach` loop and the `IEnumerable`/`IEnumerator` interfaces.

Imagine you have a custom data structure, perhaps a `Playlist` of `Song` objects, or a `Menu` of `MenuItem` objects. If you want to iterate over these items, you could expose an internal `List<Song>` or `MenuItem[]` directly. However, this tightly couples the client code to the internal implementation of your `Playlist` or `Menu`. If you later decide to change the internal storage (e.g., from a `List` to a `Dictionary` or a custom linked list), all client code that directly accesses that internal structure would break. Furthermore, if you wanted to offer different ways to traverse the collection (e.g., iterating forward, backward, or by genre), you'd have to add multiple iteration methods to your `Playlist` class, bloating it and violating the Single Responsibility Principle.

The Iterator pattern elegantly solves these issues. It separates the traversal logic from the aggregate object itself. The aggregate provides a method (e.g., `CreateIterator()`) that returns an `Iterator` object. The client then uses this `Iterator` to step through the aggregate's elements. The `Iterator` interface typically includes methods like `HasNext()` to check if there are more elements, and `Next()` to retrieve the next element.

In C#, the Iterator pattern is deeply embedded in the language through the `IEnumerable<T>` and `IEnumerator<T>` interfaces.
*   `IEnumerable<T>` is the `Aggregate` interface; it has a single method, `GetEnumerator()`, which returns an `IEnumerator<T>`.
*   `IEnumerator<T>` is the `Iterator` interface; it defines `Current` (the current element), `MoveNext()` (advances to the next element), and `Reset()` (resets the iterator to the beginning).

When you use a `foreach` loop in C#, the compiler automatically translates it into calls to `GetEnumerator()`, `MoveNext()`, and `Current` on the collection. This is a powerful abstraction!

Let's implement a custom `Menu` aggregate and its `MenuIterator` to demonstrate the pattern, mimicking the `IEnumerable`/`IEnumerator` behavior.

```csharp
using System;
using System.Collections; // For IEnumerator, IEnumerable
using System.Collections.Generic; // For generic versions

// 1. The Element
public class MenuItem
{
    public string Name { get; set; }
    public double Price { get; set; }
    public bool IsVegetarian { get; set; }

    public MenuItem(string name, double price, bool isVegetarian)
    {
        Name = name;
        Price = price;
        IsVegetarian = isVegetarian;
    }

    public void Print()
    {
        Console.WriteLine($"- {Name} (${Price:F2}) {(IsVegetarian ? "(V)" : "")}");
    }
}

// 2. The Concrete Aggregate (Our custom collection)
public class DinerMenu : IEnumerable<MenuItem> // Implements generic IEnumerable
{
    private const int MAX_ITEMS = 6;
    private int _numberOfItems = 0;
    private MenuItem[] _menuItems; // Internal representation (array)

    public DinerMenu()
    {
        _menuItems = new MenuItem[MAX_ITEMS];

        AddItem("Vegetarian BLT", 2.99, true);
        AddItem("BLT", 2.99, false);
        AddItem("Soup of the day", 3.29, true);
        AddItem("Hotdog", 3.05, false);
        AddItem("Steamed Veggies and Brown Rice", 3.99, true);
        AddItem("Pasta", 3.89, true);
    }

    public void AddItem(string name, double price, bool isVegetarian)
    {
        if (_numberOfItems >= MAX_ITEMS)
        {
            Console.WriteLine("Sorry, menu is full! Can't add item to DinerMenu.");
        }
        else
        {
            MenuItem menuItem = new MenuItem(name, price, isVegetarian);
            _menuItems[_numberOfItems] = menuItem;
            _numberOfItems++;
        }
    }

    // This method returns our custom iterator
    public IEnumerator<MenuItem> GetEnumerator()
    {
        return new DinerMenuIterator(_menuItems);
    }

    // Required for non-generic IEnumerable, typically just calls the generic one
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

// 3. The Concrete Iterator
public class DinerMenuIterator : IEnumerator<MenuItem>
{
    private MenuItem[] _list;
    private int _position = -1; // -1 indicates before the first element

    public DinerMenuIterator(MenuItem[] list)
    {
        _list = list;
    }

    // Current element
    public MenuItem Current
    {
        get
        {
            try
            {
                return _list[_position];
            }
            catch (IndexOutOfRangeException)
            {
                throw new InvalidOperationException();
            }
        }
    }

    // Non-generic Current
    object IEnumerator.Current => Current;

    // Advances the iterator to the next element
    public bool MoveNext()
    {
        _position++;
        return (_position < _list.Length && _list[_position] != null); // Check for null in sparse array
    }

    // Resets the iterator to its initial position
    public void Reset()
    {
        _position = -1;
    }

    // Dispose method (important for resources, though not used here)
    public void Dispose()
    {
        // No unmanaged resources to dispose
    }
}

// Client Code Example
public class Client
{
    public static void Main(string[] args)
    {
        DinerMenu dinerMenu = new DinerMenu();

        Console.WriteLine("--- Diner Menu Items (using foreach) ---");
        foreach (MenuItem item in dinerMenu) // foreach uses GetEnumerator() and MoveNext()/Current
        {
            item.Print();
        }

        Console.WriteLine("\n--- Vegetarian Diner Menu Items (manual iteration) ---");
        IEnumerator<MenuItem> dinerIterator = dinerMenu.GetEnumerator();
        while (dinerIterator.MoveNext())
        {
            MenuItem item = dinerIterator.Current;
            if (item.IsVegetarian)
            {
                item.Print();
            }
        }
        dinerIterator.Dispose(); // Important to dispose iterators if they hold resources

        // Demonstrating another way to get an iterator from built-in collections
        List<string> toppings = new List<string> { "Cheese", "Pepperoni", "Mushrooms" };
        Console.WriteLine("\n--- Pizza Toppings (built-in iterator) ---");
        IEnumerator<string> toppingIterator = toppings.GetEnumerator();
        while (toppingIterator.MoveNext())
        {
            Console.WriteLine($"- {toppingIterator.Current}");
        }
        toppingIterator.Dispose();
    }
}
```

In this example:
*   `MenuItem` is the element type.
*   `DinerMenu` is the `Concrete Aggregate`, implementing `IEnumerable<MenuItem>` and providing `GetEnumerator()`.
*   `DinerMenuIterator` is the `Concrete Iterator`, implementing `IEnumerator<MenuItem>` and knowing how to traverse the `_menuItems` array.

The benefits are substantial:
1.  **Separation of Concerns:** The `DinerMenu` (aggregate) focuses on managing its collection of items, while `DinerMenuIterator` (iterator) focuses solely on traversing them.
2.  **Flexible Traversal:** You could create multiple iterator classes for the same `DinerMenu` to support different traversal orders (e.g., `ReverseDinerMenuIterator`, `VegetarianMenuIterator`), without changing the `DinerMenu` itself.
3.  **Client Decoupling:** Client code (like the `foreach` loop or manual `while` loop) doesn't need to know if `DinerMenu` uses an array, a list, or some other internal structure. It only interacts with the `IEnumerator<MenuItem>` interface.

Common mistakes include exposing the internal collection directly, which defeats the purpose of the pattern. Another significant safety concern is handling concurrent modifications. If the underlying collection (`_menuItems` in our example) is modified while an iterator is active, it can lead to unpredictable behavior or `InvalidOperationException` (as seen with `List<T>`'s enumerators). While our simple array-based iterator might not explicitly check for this, real-world iterators often include version stamps or other mechanisms to detect and prevent concurrent modification issues. Always ensure that `Dispose()` is called on iterators if they manage any unmanaged resources, though for simple in-memory collections, it's often a no-op.

The Iterator pattern is fundamental to working with collections in C# and .NET. You'll find it in:
*   **LINQ:** All LINQ operations (`Where`, `Select`, `OrderBy`) operate on `IEnumerable<T>`, which relies on the Iterator pattern.
*   **Custom Data Structures:** Whenever you create a custom collection (like a `BinaryTree`, `Graph`, or `CustomList`), implementing `IEnumerable<T>` allows it to be used with `foreach` loops and LINQ, making it first-class in the .NET ecosystem.
*   **Different Traversal Algorithms:** If you need to traverse a tree in pre-order, in-order, or post-order, each traversal strategy can be a different concrete iterator.

#### Key concepts
*   **Iterator Pattern:** A behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
*   **Aggregate (Interface/Abstract Class):** Declares an interface for creating an `Iterator` object. In C#, this is often `IEnumerable<T>`.
*   **Concrete Aggregate:** Implements the `Aggregate` interface and returns a new instance of the `Concrete Iterator` suitable for traversing itself.
*   **Iterator (Interface/Abstract Class):** Declares an interface for accessing and traversing elements. In C#, this is `IEnumerator<T>`.
*   **Concrete Iterator:** Implements the `Iterator` interface and keeps track of the current position in the traversal of the `Concrete Aggregate`.
*   **`IEnumerable<T>`:** The .NET interface representing an aggregate that can be enumerated. It has one method: `GetEnumerator()`.
*   **`IEnumerator<T>`:** The .NET interface representing an iterator. It defines `Current`, `MoveNext()`, and `Reset()`.
*   **Separation of Concerns:** The aggregate manages the collection, and the iterator manages the traversal.
*   **Concurrent Modification:** A common issue where the underlying collection is modified while an iterator is in use, potentially leading to errors.

#### Hands-on activity
**Activity: Creating a Custom Playlist with a Song Iterator**

Your task is to create a `Playlist` class that stores `Song` objects and implement the Iterator pattern so that it can be traversed using a `foreach` loop in C#.

**Starter Code:**
```csharp
using System;
using System.Collections;
using System.Collections.Generic;

public class Song
{
    public string Title { get; set; }
    public string Artist { get; set; }
    public TimeSpan Duration { get; set; }

    public Song(string title, string artist, TimeSpan duration)
    {
        Title = title;
        Artist = artist;
        Duration = duration;
    }

    public void Print()
    {
        Console.WriteLine($"'{Title}' by {Artist} ({Duration.Minutes:00}:{Duration.Seconds:00})");
    }
}

// TODO: Implement Playlist as a Concrete Aggregate (IEnumerable<Song>)
// TODO: Implement PlaylistIterator as a Concrete Iterator (IEnumerator<Song>)

public class Program
{
    public static void Main(string[] args)
    {
        // Create a playlist
        // Playlist myPlaylist = new Playlist();
        // myPlaylist.AddSong(new Song("Bohemian Rhapsody", "Queen", TimeSpan.FromMinutes(5).Add(TimeSpan.FromSeconds(55))));
        // myPlaylist.AddSong(new Song("Stairway to Heaven", "Led Zeppelin", TimeSpan.FromMinutes(8).Add(TimeSpan.FromSeconds(2)));
        // myPlaylist.AddSong(new Song("Hotel California", "Eagles", TimeSpan.FromMinutes(6).Add(TimeSpan.FromSeconds(30))));

        // Console.WriteLine("--- My Playlist ---");
        // foreach (Song song in myPlaylist) // This should work after implementing the pattern
        // {
        //     song.Print();
        // }

        // Console.WriteLine("\n--- Songs by Queen ---");
        // IEnumerator<Song> queenSongs = myPlaylist.GetEnumerator();
        // while (queenSongs.MoveNext())
        // {
        //     if (queenSongs.Current.Artist == "Queen")
        //     {
        //         queenSongs.Current.Print();
        //     }
        // }
        // queenSongs.Dispose();
    }
}
```

**Instructions:**
1.  Create a `Playlist` class.
    *   Internally, use a `List<Song>` to store the songs.
    *   Implement an `AddSong(Song song)` method.
    *   Make `Playlist` implement `IEnumerable<Song>` (and explicitly `IEnumerable` for non-generic compatibility).
    *   Implement the `GetEnumerator()` method to return an instance of your custom `PlaylistIterator`.
2.  Create a `PlaylistIterator` class.
    *   Make `PlaylistIterator` implement `IEnumerator<Song>` (and explicitly `IEnumerator`).
    *   Its constructor should take the `List<Song>` from the `Playlist`.
    *   Implement `Current`, `MoveNext()`, `Reset()`, and `Dispose()`.
3.  Uncomment and run the `Main` method to test your implementation. Ensure the `foreach` loop works and that you can manually iterate and filter songs.

#### Assessment idea
1.  **Question:** You have a custom `BinaryTree` data structure in C# and you want to allow users to traverse its nodes in three different ways: pre-order, in-order, and post-order. Which design pattern would you use to enable these multiple traversal methods without modifying the `BinaryTree` class itself, and how would you achieve it?
    **Correct Answer:** The Iterator pattern.
    **Explanation:** You would implement the Iterator pattern by having the `BinaryTree` (the Aggregate) implement `IEnumerable<T>`. However, instead of a single `GetEnumerator()` method, you could have methods like `GetPreOrderEnumerator()`, `GetInOrderEnumerator()`, and `GetPostOrderEnumerator()`. Each of these methods would return a different `ConcreteIterator` (e.g., `PreOrderIterator`, `InOrderIterator`, `PostOrderIterator`), each encapsulating its specific traversal algorithm. This allows clients to choose the desired traversal method without the `BinaryTree` needing to know the details of each traversal, maintaining separation of concerns and flexibility.

2.  **Question:** Consider a scenario where you are iterating over a `List<Order>` using a `foreach` loop in C#. Inside the `foreach` loop, you attempt to remove an `Order` object from the `List` if it meets certain criteria. What is the likely outcome, and what common mistake related to the Iterator pattern does this illustrate?
    **Correct Answer:** The likely outcome is an `InvalidOperationException` with a message similar to "Collection was modified; enumeration operation may not execute."
    **Explanation:** This illustrates the common mistake of **concurrent modification**. When you iterate over a collection using an enumerator (which the `foreach` loop implicitly uses), the enumerator often maintains an internal version stamp or count of the collection's elements. If the underlying collection is structurally modified (items added, removed, or reordered) *while* the enumeration is in progress, the enumerator detects this inconsistency and throws an `InvalidOperationException` to prevent unpredictable behavior and data corruption. To safely remove items during iteration, you should typically iterate over a copy of the collection, collect items to remove in a separate list, or use a reverse loop for index-based removal.

---

## Module 5: Behavioral Patterns Part 2 & Concurrency

**Module Goal:** This module expands on behavioral design patterns by exploring the Command, Iterator, and Mediator patterns, focusing on how objects interact and distribute responsibilities. We will then transition into the critical realm of concurrency, understanding its fundamental challenges and introducing core C# mechanisms and patterns for managing multi-threaded operations safely and efficiently.

---

### Chapter 5.1 — The Command Pattern: Encapsulating Actions

#### Learning objectives
*   Define the Command pattern and identify its core components (Command, Receiver, Invoker, Client).
*   Implement the Command pattern in C# to encapsulate requests as objects.
*   Utilize the Command pattern to support features like undo/redo functionality and request queuing.
*   Understand the benefits of decoupling senders from receivers through command objects.

#### Detailed lesson content
Welcome back, aspiring architects! In our journey through behavioral patterns, we've seen how objects interact and share responsibilities. Today, we're diving into the Command pattern, a powerful yet elegant way to encapsulate a request as an object. Imagine you're building an application where users can perform various actions—like clicking a button to save a document, applying a filter to an image, or executing a macro. Without the Command pattern, your UI elements (buttons, menu items) would directly invoke methods on specific service objects. This creates tight coupling: if you change the service, you might need to change all UI elements that call it. What if you want to log every action, queue them for later execution, or even implement an "undo" feature? Direct method calls make these tasks cumbersome.

The Command pattern addresses this by transforming a request into a standalone object. This "command object" contains all the information needed to perform the action, including the method to call and the parameters for that method. It abstracts the operation, making it a first-class entity that can be manipulated, stored, and passed around. The pattern involves several key roles:
1.  **Command (ICommand):** This is an interface (or abstract class) that declares an `Execute()` method (and often an `Undo()` method if undoability is required). All concrete command objects will implement this interface.
2.  **ConcreteCommand:** These are specific implementations of the `ICommand` interface. Each `ConcreteCommand` binds a `Receiver` object with an action, storing the `Receiver` and any necessary parameters. Its `Execute()` method calls the corresponding operation(s) on the `Receiver`.
3.  **Receiver:** This is the object that actually knows how to perform the work. It contains the business logic for the operations. For example, in a text editor, the `TextEditor` class might be the `Receiver` with methods like `InsertCharacter(char c)` or `DeleteCharacter()`.
4.  **Invoker:** This object asks the command to carry out the request. It holds a `Command` object and, at some point, calls its `Execute()` method. The `Invoker` doesn't know anything about the `ConcreteCommand` or the `Receiver`; it only knows about the `ICommand` interface. This is where the decoupling happens.
5.  **Client:** The `Client` is responsible for creating a `ConcreteCommand` object and setting its `Receiver`. It then passes the `ConcreteCommand` to the `Invoker`.

Let’s consider a simple example: a remote control for household appliances. Instead of the remote directly knowing how to turn on a light or start a fan, it holds a `Command` object. When you press a button, the remote (Invoker) simply tells the `Command` to `Execute()`. The `Command` then delegates to the specific appliance (Receiver).

```csharp
// 1. Command Interface
public interface ICommand
{
    void Execute();
    void Undo(); // For undoable operations
}

// 2. Receiver: The object that performs the actual action
public class Light
{
    private bool _isOn;

    public void TurnOn()
    {
        _isOn = true;
        Console.WriteLine("Light is ON");
    }

    public void TurnOff()
    {
        _isOn = false;
        Console.WriteLine("Light is OFF");
    }

    public bool IsOn => _isOn;
}

// 3. Concrete Commands: Encapsulate specific actions on the Receiver
public class TurnOnLightCommand : ICommand
{
    private readonly Light _light;

    public TurnOnLightCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.TurnOn();
    }

    public void Undo()
    {
        _light.TurnOff(); // Undo turning on means turning off
    }
}

public class TurnOffLightCommand : ICommand
{
    private readonly Light _light;

    public TurnOffLightCommand(Light light)
    {
        _light = light;
    }

    public void Execute()
    {
        _light.TurnOff();
    }

    public void Undo()
    {
        _light.TurnOn(); // Undo turning off means turning on
    }
}

// 4. Invoker: Asks the command to carry out the request
public class RemoteControl
{
    private ICommand _command;
    private Stack<ICommand> _history = new Stack<ICommand>(); // For undo

    public void SetCommand(ICommand command)
    {
        _command = command;
    }

    public void PressButton()
    {
        _command.Execute();
        _history.Push(_command); // Add to history for undo
    }

    public void PressUndo()
    {
        if (_history.Count > 0)
        {
            ICommand lastCommand = _history.Pop();
            lastCommand.Undo();
        }
        else
        {
            Console.WriteLine("Nothing to undo.");
        }
    }
}

// 5. Client: Sets up the commands and invoker
public class Client
{
    public static void Main(string[] args)
    {
        Light livingRoomLight = new Light();
        RemoteControl remote = new RemoteControl();

        // Turn on light
        ICommand turnOn = new TurnOnLightCommand(livingRoomLight);
        remote.SetCommand(turnOn);
        remote.PressButton(); // Light is ON

        // Turn off light
        ICommand turnOff = new TurnOffLightCommand(livingRoomLight);
        remote.SetCommand(turnOff);
        remote.PressButton(); // Light is OFF

        // Undo the last action (turn off)
        remote.PressUndo(); // Light is ON (undo TurnOffLightCommand)

        // Undo again (turn on)
        remote.PressUndo(); // Light is OFF (undo TurnOnLightCommand)

        remote.PressUndo(); // Nothing to undo.
    }
}
```

In this example, the `RemoteControl` (Invoker) doesn't know anything about `Light` or how to turn it on or off. It just knows how to interact with an `ICommand`. This significantly decouples the `RemoteControl` from the `Light` object. This decoupling is a huge benefit. You can easily add new types of commands (e.g., `StartFanCommand`, `SetThermostatCommand`) without modifying the `RemoteControl` class.

Common mistakes with the Command pattern often involve over-engineering simple scenarios. If you only have one or two actions and no need for undo/redo, queuing, or logging, the overhead of the Command pattern might be unnecessary. Another mistake is making `ConcreteCommand` objects too complex, leading them to contain too much business logic. Remember, the `ConcreteCommand` should primarily delegate to the `Receiver`; the `Receiver` holds the actual operational logic. A `ConcreteCommand` should be lightweight and focused on binding a request to a receiver.

Safety notes: When implementing undo/redo, be mindful of the state management. Each command needs to store enough information to revert its action. For complex operations, this might involve taking snapshots of the system state, which can consume memory. Consider a Memento pattern (which we'll cover later) to manage state snapshots more effectively if your undo operations become very complex. Also, ensure that `Execute()` and `Undo()` methods are symmetrical and handle edge cases gracefully. For instance, what if `Undo()` is called when there's nothing to undo, or if a command fails during execution? Your implementation should account for these scenarios.

#### Key concepts
*   **Command Pattern:** A behavioral design pattern that encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queuing or logging of requests, and support for undoable operations.
*   **ICommand:** An interface or abstract class declaring an `Execute()` method (and optionally `Undo()`).
*   **ConcreteCommand:** An implementation of `ICommand` that binds a `Receiver` to an action and its parameters.
*   **Receiver:** The object that performs the actual work when a command's `Execute()` method is invoked.
*   **Invoker:** The object that triggers the command's `Execute()` method without knowing the concrete command or receiver.
*   **Client:** The entity responsible for creating `ConcreteCommand` objects and associating them with `Receivers` and `Invokers`.
*   **Decoupling:** Reducing direct dependencies between objects, a primary benefit of the Command pattern.
*   **Undo/Redo:** Functionality enabled by the Command pattern, where executed commands can be reversed or re-applied.

#### Hands-on activity
**Activity: Implement a Simple Calculator with Undo/Redo**

Your task is to extend a basic calculator to support `Add`, `Subtract`, and `Undo` operations using the Command pattern.

**Starter Code:**

```csharp
using System;
using System.Collections.Generic;

// 1. Define the Command interface
public interface ICalculatorCommand
{
    void Execute();
    void Undo();
}

// 2. Define the Receiver (the Calculator itself)
public class Calculator
{
    private int _currentValue = 0;

    public void Add(int operand)
    {
        _currentValue += operand;
        Console.WriteLine($"Current value: {_currentValue}");
    }

    public void Subtract(int operand)
    {
        _currentValue -= operand;
        Console.WriteLine($"Current value: {_currentValue}");
    }

    public int GetResult() => _currentValue;
}

// TODO: 3. Implement ConcreteCommand classes for Add and Subtract
// You'll need to store the Calculator instance and the operand for each command.
// Remember that Undo for Add is Subtract, and Undo for Subtract is Add.

// Example structure for AddCommand:
/*
public class AddCommand : ICalculatorCommand
{
    private readonly Calculator _calculator;
    private readonly int _operand;

    public AddCommand(Calculator calculator, int operand)
    {
        _calculator = calculator;
        _operand = operand;
    }

    public void Execute()
    {
        _calculator.Add(_operand);
    }

    public void Undo()
    {
        _calculator.Subtract(_operand); // Undo Add is Subtract
    }
}
*/

// TODO: Implement SubtractCommand similarly.

// 4. Define the Invoker (the UserInputProcessor)
public class UserInputProcessor
{
    private ICalculatorCommand _command;
    private Stack<ICalculatorCommand> _history = new Stack<ICalculatorCommand>();

    public void SetCommand(ICalculatorCommand command)
    {
        _command = command;
    }

    public void PressExecute()
    {
        _command.Execute();
        _history.Push(_command);
    }

    public void PressUndo()
    {
        if (_history.Count > 0)
        {
            ICalculatorCommand lastCommand = _history.Pop();
            lastCommand.Undo();
        }
        else
        {
            Console.WriteLine("Nothing to undo.");
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Calculator calculator = new Calculator();
        UserInputProcessor processor = new UserInputProcessor();

        // Perform some operations
        processor.SetCommand(new AddCommand(calculator, 10)); // TODO: Replace with your AddCommand
        processor.PressExecute(); // Should print Current value: 10

        processor.SetCommand(new SubtractCommand(calculator, 5)); // TODO: Replace with your SubtractCommand
        processor.PressExecute(); // Should print Current value: 5

        processor.SetCommand(new AddCommand(calculator, 20)); // TODO: Replace with your AddCommand
        processor.PressExecute(); // Should print Current value: 25

        Console.WriteLine($"Final result before undo: {calculator.GetResult()}"); // Should be 25

        // Now, let's undo!
        processor.PressUndo(); // Should undo Add 20, result: 5
        Console.WriteLine($"Result after first undo: {calculator.GetResult()}"); // Should be 5

        processor.PressUndo(); // Should undo Subtract 5, result: 10
        Console.WriteLine($"Result after second undo: {calculator.GetResult()}"); // Should be 10

        processor.PressUndo(); // Should undo Add 10, result: 0
        Console.WriteLine($"Result after third undo: {calculator.GetResult()}"); // Should be 0

        processor.PressUndo(); // Nothing to undo.
    }
}
```

**Instructions:**
1.  Complete the `AddCommand` and `SubtractCommand` classes, ensuring they correctly implement `ICalculatorCommand` and provide both `Execute()` and `Undo()` logic.
2.  Run the `Program.Main` method and verify that the calculator performs operations correctly and that the `Undo` functionality works as expected, reverting the state step by step.

#### Assessment idea
1.  **Question:** You are designing a new feature for a document editor that allows users to apply various formatting changes (e.g., bold, italic, underline, change font size). You also need to support an "undo" functionality for these changes. Which design pattern would be most suitable for this scenario, and why? Describe the key components of this pattern in the context of the document editor.
    *   **Correct Answer:** The Command pattern is most suitable. It allows each formatting change (e.g., "Make Bold", "Make Italic") to be encapsulated as a separate command object.
        *   **ICommand:** An interface like `IDocumentCommand` with `Execute()` and `Undo()` methods.
        *   **ConcreteCommand:** Classes like `MakeBoldCommand`, `MakeItalicCommand`, `ChangeFontSizeCommand`. Each would hold a reference to the `Document` (Receiver) and any necessary parameters (e.g., the font size for `ChangeFontSizeCommand`). Their `Execute()` methods would call the appropriate method on the `Document`, and `Undo()` would revert the change.
        *   **Receiver:** The `Document` object itself, which contains methods like `ApplyBold()`, `ApplyItalic()`, `SetFontSize(int size)`.
        *   **Invoker:** UI elements like buttons, menu items, or a toolbar. When a user clicks "Bold," the `Invoker` would create a `MakeBoldCommand` and call its `Execute()` method, also adding it to an undo history stack.
        *   **Client:** The application's main logic or a controller that sets up the commands and associates them with the `Document` and `Invoker`.
    *   **Explanation:** The Command pattern decouples the UI (Invoker) from the document's logic (Receiver), making it easy to add new formatting commands without changing existing UI code. More importantly, by storing executed commands in a history stack, implementing undo/redo becomes straightforward, as each command object inherently knows how to reverse its own action.

2.  **Question:** Consider the following C# code snippet. Identify a common mistake related to the Command pattern's intent and explain why it's problematic.
    ```csharp
    public class SaveDocumentCommand : ICommand
    {
        private readonly Document _document;
        private readonly string _filePath;

        public SaveDocumentCommand(Document document, string filePath)
        {
            _document = document;
            _filePath = filePath;
        }

        public void Execute()
        {
            // Problematic: Business logic directly in the command
            if (string.IsNullOrEmpty(_filePath))
            {
                Console.WriteLine("File path cannot be empty. Cannot save.");
                return;
            }
            if (!_document.CanSave()) // Assume CanSave is a complex check
            {
                Console.WriteLine("Document cannot be saved in its current state.");
                return;
            }
            _document.Save(_filePath);
            Console.WriteLine($"Document saved to {_filePath}");
        }

        public void Undo()
        {
            Console.WriteLine("Save operations are generally not undoable in this context.");
        }
    }
    ```
    *   **Correct Answer:** The common mistake is placing significant business logic (like validation for `_filePath` or `_document.CanSave()`) directly within the `Execute()` method of the `ConcreteCommand` (`SaveDocumentCommand`).
    *   **Explanation:** The Command pattern's intent is to encapsulate a *request* as an object, primarily to decouple the invoker from the receiver and support features like undo/redo, queuing, or logging. The `ConcreteCommand` should be lightweight and act as a simple binder, delegating the actual work to the `Receiver`. By putting validation and complex checks inside the `SaveDocumentCommand`, you risk:
        1.  **Violating Single Responsibility Principle:** The command is now responsible for both encapsulating the request *and* performing validation logic.
        2.  **Reduced Reusability:** If the validation logic needs to change or be reused elsewhere, it's duplicated or tightly coupled to this specific command.
        3.  **Increased Complexity:** The command becomes harder to test and maintain.
        The `Receiver` (`_document` in this case) should ideally contain all the business logic, including validation, for its operations. The `Execute()` method of the command should primarily call `_document.Save(_filePath)`. Any pre-conditions or validation should either be handled by the `Document` itself or by a separate service/validator that the `Document` uses, or potentially by the `Client` before creating and invoking the command.

#### AI generation note
Create a 12-minute live coding video demonstrating the Command pattern. Start with a simple "Light" and "RemoteControl" example that uses direct method calls. Then, refactor it step-by-step to introduce the `ICommand` interface, `ConcreteCommand` classes (`TurnOnLightCommand`, `TurnOffLightCommand`), and modify the `RemoteControl` to act as an `Invoker`. Crucially, extend the `RemoteControl` with an undo stack and implement the `Undo()` method for the commands, showing how pressing "Undo" reverses the last action. Use a split-screen view showing the C# code on the left and the console output on the right, highlighting the decoupling and undo functionality. The tone should be encouraging and hands-on. Include a visual diagram overlay explaining the roles (Invoker, Command, Receiver) during the refactoring process.

---

### Chapter 5.2 — The Iterator Pattern: Traversing Collections Uniformly

#### Learning objectives
*   Explain the purpose of the Iterator pattern and its benefits for traversing aggregate objects.
*   Understand how the Iterator pattern decouples collection traversal from the collection's internal representation.
*   Implement custom iterators in C# using the `IEnumerable` and `IEnumerator` interfaces.
*   Utilize the `yield return` keyword to simplify the creation of custom iterators.

#### Detailed lesson content
As you develop more complex applications, you'll inevitably work with various collections of objects: lists, arrays, dictionaries, custom data structures, and more. A common task is to traverse these collections to access their elements. Without a consistent approach, iterating over different collection types would require different code for each, leading to duplicated logic and tight coupling. For instance, iterating a `List<T>` uses a `for` loop or `foreach`, while a `Dictionary<TKey, TValue>` might require iterating over `KeyValuePair` objects. What if you have a custom binary tree or a linked list? You'd need to know its internal structure to traverse it.

This is precisely the problem the Iterator pattern solves. It provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. Essentially, it separates the traversal logic from the collection itself. This separation offers significant advantages:
1.  **Uniform Traversal:** Clients can iterate over different types of aggregate objects using a common interface, simplifying client code.
2.  **Decoupling:** The aggregate object doesn't need to expose its internal structure, maintaining encapsulation. The client doesn't need to know how the collection is stored (e.g., array, linked list, hash table).
3.  **Multiple Traversals:** You can have multiple iterators traversing the same collection simultaneously, each maintaining its own state.
4.  **Flexible Traversal Algorithms:** You can define different iterators for the same aggregate, allowing different traversal strategies (e.g., forward, backward, depth-first, breadth-first).

In C#, the Iterator pattern is so fundamental that it's built directly into the language through the `IEnumerable<T>` and `IEnumerator<T>` interfaces (and their non-generic counterparts `IEnumerable` and `IEnumerator`). When you use a `foreach` loop in C#, you are implicitly using the Iterator pattern. The `foreach` loop works on any type that implements `IEnumerable` (or `IEnumerable<T>`), which means it can provide an `IEnumerator` (or `IEnumerator<T>`) to handle the actual traversal.

Let's break down the roles in the Iterator pattern and see how C# implements them:
*   **Aggregate (IEnumerable<T>):** This is the interface for the collection of objects. It declares a method (typically `GetEnumerator()`) that returns an `Iterator` object. In C#, this is `IEnumerable<T>`.
*   **ConcreteAggregate:** This is the actual collection class (e.g., `List<T>`, `Dictionary<TKey, TValue>`, or your custom collection) that implements the `IEnumerable<T>` interface. It's responsible for creating and returning a suitable `ConcreteIterator`.
*   **Iterator (IEnumerator<T>):** This is the interface for the iterator. It declares methods for accessing and traversing elements (e.g., `MoveNext()`, `Current`, `Reset()`). In C#, this is `IEnumerator<T>`.
*   **ConcreteIterator:** This is the specific implementation of the `Iterator` interface. It keeps track of the current position in the traversal and knows how to move to the next element.

Here's a basic example of implementing a custom enumerable collection and its iterator:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;

// 1. ConcreteAggregate: A custom collection of books
public class BookCollection : IEnumerable<Book>
{
    private List<Book> _books = new List<Book>();

    public void AddBook(Book book)
    {
        _books.Add(book);
    }

    public int Count => _books.Count;

    // Implementing IEnumerable<Book> requires GetEnumerator()
    public IEnumerator<Book> GetEnumerator()
    {
        return new BookCollectionIterator(this);
    }

    // Also need the non-generic GetEnumerator for IEnumerable
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    // Internal method to access books by index, used by the iterator
    internal Book GetBook(int index)
    {
        if (index >= 0 && index < _books.Count)
        {
            return _books[index];
        }
        throw new ArgumentOutOfRangeException(nameof(index));
    }
}

// Helper class for the items in the collection
public class Book
{
    public string Title { get; }
    public string Author { get; }

    public Book(string title, string author)
    {
        Title = title;
        Author = author;
    }

    public override string ToString() => $"{Title} by {Author}";
}

// 2. ConcreteIterator: Iterates over the BookCollection
public class BookCollectionIterator : IEnumerator<Book>
{
    private readonly BookCollection _collection;
    private int _currentIndex = -1; // -1 indicates before the first element

    public BookCollectionIterator(BookCollection collection)
    {
        _collection = collection;
    }

    // Current element
    public Book Current
    {
        get
        {
            if (_currentIndex < 0 || _currentIndex >= _collection.Count)
            {
                throw new InvalidOperationException("Iterator is not at a valid position.");
            }
            return _collection.GetBook(_currentIndex);
        }
    }

    // Non-generic Current
    object IEnumerator.Current => Current;

    // Move to the next element
    public bool MoveNext()
    {
        _currentIndex++;
        return _currentIndex < _collection.Count;
    }

    // Reset the iterator to its initial state
    public void Reset()
    {
        _currentIndex = -1;
    }

    // Dispose method (important for resources, though not used here)
    public void Dispose()
    {
        // No unmanaged resources to dispose in this simple example
    }
}

// Client code
public class Client
{
    public static void Main(string[] args)
    {
        BookCollection myBooks = new BookCollection();
        myBooks.AddBook(new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams"));
        myBooks.AddBook(new Book("Pride and Prejudice", "Jane Austen"));
        myBooks.AddBook(new Book("1984", "George Orwell"));

        Console.WriteLine("Iterating through books using foreach:");
        foreach (Book book in myBooks) // The foreach loop implicitly uses the iterator
        {
            Console.WriteLine(book);
        }

        Console.WriteLine("\nIterating through books manually using IEnumerator:");
        IEnumerator<Book> enumerator = myBooks.GetEnumerator();
        while (enumerator.MoveNext())
        {
            Console.WriteLine(enumerator.Current);
        }
        enumerator.Dispose(); // Important to dispose if resources are held
    }
}
```

While implementing `IEnumerator<T>` manually gives you full control, C# offers a much simpler way to create iterators: the `yield return` keyword. When `yield return` is used inside a method or property, the compiler automatically generates the necessary `IEnumerator<T>` and `IEnumerable<T>` implementation for you. This makes writing custom iterators incredibly concise.

Let's refactor the `BookCollection` using `yield return`:

```csharp
// Refactored BookCollection using yield return
public class BookCollectionYield : IEnumerable<Book>
{
    private List<Book> _books = new List<Book>();

    public void AddBook(Book book)
    {
        _books.Add(book);
    }

    // With yield return, we don't need a separate iterator class!
    public IEnumerator<Book> GetEnumerator()
    {
        foreach (Book book in _books)
        {
            yield return book; // Each yield return produces the next element
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

public class ClientYield
{
    public static void Main(string[] args)
    {
        BookCollectionYield myBooks = new BookCollectionYield();
        myBooks.AddBook(new Book("The Lord of the Rings", "J.R.R. Tolkien"));
        myBooks.AddBook(new Book("Dune", "Frank Herbert"));

        Console.WriteLine("\nIterating through books using foreach with yield return:");
        foreach (Book book in myBooks)
        {
            Console.WriteLine(book);
        }
    }
}
```

The `yield return` keyword makes the code much cleaner and less error-prone. It's particularly useful when dealing with potentially large collections or when you want to generate elements on demand (lazy evaluation), as elements are only produced when `MoveNext()` is called, not all at once.

Common mistakes when using iterators include modifying the underlying collection while iterating over it. Most built-in C# collections will throw an `InvalidOperationException` if you try to add or remove elements during a `foreach` loop. If you need to modify a collection while iterating, you should typically iterate over a copy of the collection, or collect items to be modified/removed and then perform the changes after the iteration is complete. Another pitfall is not understanding the lazy nature of `yield return`; if your iterator has side effects, they might not occur until the iteration actually happens.

Safety notes: When implementing custom iterators, ensure that the `Current` property throws an `InvalidOperationException` if the iterator is not positioned correctly (i.e., before the first element, after the last element, or if `MoveNext()` hasn't been called yet). Also, if your iterator manages unmanaged resources, remember to implement `IDisposable` and release those resources in the `Dispose()` method.

#### Key concepts
*   **Iterator Pattern:** A behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
*   **Aggregate:** The collection of objects that can be iterated over (e.g., `BookCollection`). In C#, this often implements `IEnumerable<T>`.
*   **Iterator:** An object that encapsulates the logic for traversing an aggregate and keeping track of the current position. In C#, this often implements `IEnumerator<T>`.
*   **`IEnumerable<T>`:** The C# interface that defines a method (`GetEnumerator()`) to return an iterator for a collection.
*   **`IEnumerator<T>`:** The C# interface that defines methods (`MoveNext()`, `Reset()`) and a property (`Current`) for iterating over a collection.
*   **`foreach` loop:** A C# language construct that implicitly uses the `IEnumerable` and `IEnumerator` interfaces to traverse collections.
*   **`yield return`:** A C# keyword that simplifies the creation of custom iterators by allowing the compiler to generate the `IEnumerator<T>` and `IEnumerable<T>` implementation automatically.
*   **Lazy Evaluation:** The process of delaying the computation of a value until it's actually needed. `yield return` facilitates this by generating elements one at a time as they are requested.

#### Hands-on activity
**Activity: Create a Custom `Playlist` Collection with a Reverse Iterator**

Your task is to create a `Playlist` class that holds `Song` objects. Implement `IEnumerable<Song>` for normal forward iteration, and then add a method `GetReverseEnumerator()` that returns an `IEnumerator<Song>` to iterate through the playlist from the last song to the first. Use `yield return` for both enumerators.

**Starter Code:**

```csharp
using System;
using System.Collections;
using System.Collections.Generic;

public class Song
{
    public string Title { get; }
    public string Artist { get; }
    public int DurationInSeconds { get; }

    public Song(string title, string artist, int durationInSeconds)
    {
        Title = title;
        Artist = artist;
        DurationInSeconds = durationInSeconds;
    }

    public override string ToString() => $"{Title} by {Artist} ({DurationInSeconds}s)";
}

public class Playlist : IEnumerable<Song>
{
    private List<Song> _songs = new List<Song>();

    public void AddSong(Song song)
    {
        _songs.Add(song);
    }

    public int Count => _songs.Count;

    // Implement IEnumerable<Song> for forward iteration using yield return
    public IEnumerator<Song> GetEnumerator()
    {
        // TODO: Implement forward iteration here using yield return
        // Example: foreach (Song song in _songs) { yield return song; }
        throw new NotImplementedException();
    }

    // Required for non-generic IEnumerable
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    // TODO: Implement a method to get a reverse enumerator
    // public IEnumerator<Song> GetReverseEnumerator()
    // {
    //     // Iterate from the last song to the first using a for loop
    //     // and yield return each song.
    // }
}

public class Program
{
    public static void Main(string[] args)
    {
        Playlist myPlaylist = new Playlist();
        myPlaylist.AddSong(new Song("Bohemian Rhapsody", "Queen", 354));
        myPlaylist.AddSong(new Song("Stairway to Heaven", "Led Zeppelin", 482));
        myPlaylist.AddSong(new Song("Hotel California", "Eagles", 390));

        Console.WriteLine("--- Forward Iteration ---");
        foreach (Song song in myPlaylist)
        {
            Console.WriteLine(song);
        }

        Console.WriteLine("\n--- Reverse Iteration ---");
        // TODO: Call your GetReverseEnumerator() method here and use a foreach loop
        // Example: foreach (Song song in myPlaylist.GetReverseEnumerator()) { ... }
    }
}
```

**Instructions:**
1.  Complete the `GetEnumerator()` method in the `Playlist` class to provide forward iteration using `yield return`.
2.  Add a new method `GetReverseEnumerator()` to the `Playlist` class. This method should also use `yield return` but iterate through the `_songs` list from the last element to the first.
3.  In `Program.Main`, add a `foreach` loop that uses your `GetReverseEnumerator()` to print the songs in reverse order.

#### Assessment idea
1.  **Question:** You have a custom data structure called `BinarySearchTree` that stores integers. You want to allow users to traverse this tree using a `foreach` loop in C# to get elements in ascending order (in-order traversal). What C# interfaces must your `BinarySearchTree` class implement, and what keyword would you typically use to simplify the implementation of the traversal logic? Provide a brief code snippet demonstrating how the `GetEnumerator` method might look.
    *   **Correct Answer:** The `BinarySearchTree` class must implement the `IEnumerable<int>` interface. The `GetEnumerator()` method of this interface should return an `IEnumerator<int>`. The `yield return` keyword is typically used to simplify the implementation of the traversal logic.
    *   **Explanation/Code Snippet:**
        ```csharp
        using System.Collections;
        using System.Collections.Generic;

        public class BinarySearchTree : IEnumerable<int>
        {
            private class Node
            {
                public int Value;
                public Node Left;
                public Node Right;
                public Node(int value) => Value = value;
            }

            private Node _root;

            public void Add(int value) { /* ... implementation ... */ }

            public IEnumerator<int> GetEnumerator()
            {
                // Recursive helper for in-order traversal
                IEnumerable<int> InOrderTraversal(Node node)
                {
                    if (node == null) yield break; // Base case for recursion

                    foreach (int val in InOrderTraversal(node.Left))
                    {
                        yield return val;
                    }

                    yield return node.Value; // Yield current node's value

                    foreach (int val in InOrderTraversal(node.Right))
                    {
                        yield return val;
                    }
                }

                return InOrderTraversal(_root).GetEnumerator();
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }
        }
        ```
        The `GetEnumerator()` method uses a local function `InOrderTraversal` which leverages `yield return` to perform an in-order traversal of the binary tree. This allows the `foreach` loop to receive elements one by one in ascending order without the `BinarySearchTree` exposing its internal `Node` structure.

2.  **Question:** Explain a common pitfall when using iterators in C# and how to mitigate it.
    *   **Correct Answer:** A common pitfall is modifying the underlying collection (e.g., adding or removing elements) while it is being iterated over.
    *   **Explanation:** When you iterate over a collection using a `foreach` loop or an `IEnumerator`, the iterator often maintains an internal state or a version stamp of the collection. If the collection is modified externally during iteration, this can invalidate the iterator, leading to an `InvalidOperationException` (as is the case with `List<T>` and `Dictionary<TKey, TValue>`). This is known as a "concurrent modification" issue, even if it's within a single thread.
        *   **Mitigation Strategies:**
            1.  **Iterate over a copy:** Create a new list from the original collection and iterate over the copy. This ensures the original collection can be modified without affecting the iteration. Example: `foreach (var item in originalList.ToList()) { ... }`.
            2.  **Collect changes and apply later:** Instead of modifying the collection directly during iteration, collect the items to be added, removed, or updated into a separate temporary list. After the iteration completes, apply all the collected changes to the original collection.
            3.  **Use a `for` loop (with caution):** For `List<T>` or arrays, you can use a `for` loop. If you are removing elements, iterate backward to avoid issues with shifting indices. If adding elements, you might still need to adjust indices or use a temporary list.
            4.  **Specialized concurrent collections:** For multi-threaded scenarios, use thread-safe collections from `System.Collections.Concurrent` namespace (e.g., `ConcurrentBag<T>`, `ConcurrentDictionary<TKey, TValue>`) which are designed to handle concurrent modifications safely.

#### AI generation note
Create a 10-minute interactive code demo. Begin by showing a `List<string>` being iterated with `foreach`. Then, introduce a custom `Inventory` class with `Item` objects. First, attempt to iterate it without `IEnumerable`, showing the compilation error. Then, implement `IEnumerable<Item>` and `IEnumerator<Item>` manually, stepping through `MoveNext()` and `Current` in the debugger to visualize the iterator's state. Finally, refactor the `Inventory` to use `yield return` for its `GetEnumerator()`, highlighting the simplicity and elegance. Include a visual overlay explaining the `IEnumerable`/`IEnumerator` relationship and how `yield return` simplifies the boilerplate. The demo should be hands-on, showing code changes and immediate results. End with a mini-quiz asking about the benefits of `yield return`.

---

### Chapter 5.3 — The Mediator Pattern: Decoupling Object Interactions

#### Learning objectives
*   Define the Mediator pattern and identify scenarios where it is beneficial.
*   Understand how the Mediator pattern centralizes communication between objects (colleagues) to reduce direct dependencies.
*   Implement the Mediator pattern in C# to manage complex interactions between UI components or other interdependent objects.
*   Recognize the potential drawbacks of the Mediator pattern, such as the "God Object" anti-pattern.

#### Detailed lesson content
In our journey through design patterns, we've often emphasized the importance of decoupling. The less one object knows about the internal workings or even the existence of other objects, the more flexible, reusable, and maintainable your code becomes. However, in many applications, especially those with rich user interfaces or complex business logic, objects often need to interact with many other objects. Consider a complex dialogue box in a GUI application: a checkbox might enable or disable a text input, a dropdown might filter a list, and a button might submit data, validating all inputs. If each UI component directly communicates with every other component it affects, you quickly end up with a "spaghetti code" mess—a web of direct dependencies where changing one component requires understanding and potentially modifying many others. This is often referred to as a many-to-many relationship, making the system fragile and hard to extend.

The Mediator pattern offers a solution to this problem by introducing a central object—the mediator—that encapsulates how a set of objects interact. Instead of objects communicating directly with each other, they communicate only with the mediator. The mediator then forwards the request to the appropriate recipient(s). This effectively transforms a many-to-many communication relationship into a one-to-many relationship between colleagues and the mediator, and a one-to-one relationship between the mediator and each colleague.

The key roles in the Mediator pattern are:
1.  **Mediator (IMediator):** This is an interface (or abstract class) that defines methods for communication between `Colleague` objects. It declares a method (e.g., `Notify(Colleague sender, string event)`) that `Colleague` objects use to inform the mediator of events.
2.  **ConcreteMediator:** This concrete implementation of the `IMediator` interface is responsible for knowing and maintaining the relationships between `Colleague` objects. It receives notifications from `Colleagues` and orchestrates the communication, deciding which `Colleagues` should be affected and how.
3.  **Colleague (IColleague):** This is an interface (or abstract class) for objects that interact with the mediator. Each `Colleague` holds a reference to its `Mediator` and communicates with other `Colleagues` only through the `Mediator`.
4.  **ConcreteColleague:** These are specific implementations of the `Colleague` interface. They send messages to the mediator when their state changes or an event occurs, and they receive messages from the mediator when other `Colleagues` trigger an action that affects them. They do not know about other `ConcreteColleagues`.

Let's illustrate this with a simple chat application example. In a chat room, users send messages, and these messages are broadcast to all other users. Without a mediator, each user would need to know about and send messages to every other user, which is impractical. With a mediator, each user sends their message to the chat room (the mediator), and the chat room then distributes it to all participants.

```csharp
using System;
using System.Collections.Generic;

// 1. Mediator Interface
public interface IChatMediator
{
    void SendMessage(string message, User sender);
    void AddUser(User user);
}

// 2. Colleague Abstract Class
public abstract class User
{
    protected IChatMediator _mediator;
    public string Name { get; }

    public User(IChatMediator mediator, string name)
    {
        _mediator = mediator;
        Name = name;
    }

    public void Send(string message)
    {
        Console.WriteLine($"{Name} sends: {message}");
        _mediator.SendMessage(message, this);
    }

    public abstract void Receive(string message);
}

// 3. Concrete Mediator: The ChatRoom
public class ChatRoom : IChatMediator
{
    private List<User> _users = new List<User>();

    public void AddUser(User user)
    {
        _users.Add(user);
        Console.WriteLine($"{user.Name} has joined the chat room.");
    }

    public void SendMessage(string message, User sender)
    {
        foreach (User user in _users)
        {
            // Don't send the message back to the sender
            if (user != sender)
            {
                user.Receive($"[{sender.Name}]: {message}");
            }
        }
    }
}

// 4. Concrete Colleague: A specific Chat User
public class ChatUser : User
{
    public ChatUser(IChatMediator mediator, string name) : base(mediator, name) { }

    public override void Receive(string message)
    {
        Console.WriteLine($"{Name} receives: {message}");
    }
}

// Client code
public class Client
{
    public static void Main(string[] args)
    {
        ChatRoom chatRoom = new ChatRoom();

        ChatUser john = new ChatUser(chatRoom, "John");
        ChatUser jane = new ChatUser(chatRoom, "Jane");
        ChatUser mike = new ChatUser(chatRoom, "Mike");

        chatRoom.AddUser(john);
        chatRoom.AddUser(jane);
        chatRoom.AddUser(mike);

        Console.WriteLine("\n--- Chat Session ---");
        john.Send("Hi everyone!");
        jane.Send("Hello John!");
        mike.Send("What's up?");

        // Notice that users don't directly know about each other.
        // All communication goes through the chatRoom (Mediator).
    }
}
```

In this example, `ChatRoom` is the `ConcreteMediator`, and `ChatUser` is the `ConcreteColleague`. When `john.Send("Hi everyone!")` is called, John doesn't know about Jane or Mike. He only tells the `chatRoom` (mediator) that he wants to send a message. The `chatRoom` then decides to broadcast that message to all other users. This centralizes the communication logic, making it easier to manage and change. If we wanted to add private messaging, we'd only modify the `ChatRoom`'s `SendMessage` method, not every `User` class.

A common mistake with the Mediator pattern is allowing the `ConcreteMediator` to become too complex, accumulating too much logic and becoming a "God Object" or "God Class." If the mediator becomes responsible for too many interactions and contains too much business logic, it can become a bottleneck and a single point of failure, negating the benefits of decoupling. To avoid this, keep the mediator's role focused on coordinating interactions, not performing the actual business logic. Delegate the specific actions back to the `Colleagues`. For example, in our chat example, the `ChatRoom` mediates message delivery, but the `ChatUser` is still responsible for *displaying* the message (`Receive` method).

Another consideration is that the Mediator pattern can sometimes introduce a performance overhead due to the extra layer of indirection. For very high-frequency, low-latency communication, this might be a concern, though for most application-level interactions, the benefits of maintainability and flexibility far outweigh this.

Safety notes: When designing your mediator, consider how colleagues register with it. If colleagues are dynamically added or removed, the mediator needs robust mechanisms to manage its list of colleagues. Also, be mindful of circular dependencies if colleagues try to communicate back to the mediator in a way that creates an infinite loop. Always ensure that the communication flow is well-defined and that the mediator's responsibilities are clearly delineated.

#### Key concepts
*   **Mediator Pattern:** A behavioral design pattern that defines an object that encapsulates how a set of objects interact. It promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
*   **IMediator:** An interface defining the communication methods for colleagues.
*   **ConcreteMediator:** The specific implementation of the mediator that knows and coordinates the interactions between colleagues.
*   **Colleague:** An interface or abstract class for objects that communicate via the mediator.
*   **ConcreteColleague:** Specific objects that communicate with the mediator and are unaware of other colleagues.
*   **Decoupling:** Reducing direct dependencies between objects, a primary goal of the Mediator pattern.
*   **Centralized Control:** The mediator takes responsibility for controlling and coordinating the interaction of its colleagues.
*   **God Object Anti-pattern:** A potential pitfall where the mediator becomes too large and complex, accumulating too much responsibility, thereby becoming difficult to maintain and understand.

#### Hands-on activity
**Activity: Implement a Simple UI Form with Mediator**

Your task is to create a simplified UI form where a `Checkbox` enables/disables a `TextBox`, and a `Button` updates a `Label` based on the `TextBox` content. Use the Mediator pattern to manage these interactions without direct coupling between the UI controls.

**Starter Code:**

```csharp
using System;
using System.Collections.Generic;

// 1. Mediator Interface
public interface IFormMediator
{
    void Notify(UIControl sender, string eventType);
}

// 2. Colleague Abstract Class
public abstract class UIControl
{
    protected IFormMediator _mediator;
    public string Name { get; }

    public UIControl(IFormMediator mediator, string name)
    {
        _mediator = mediator;
        Name = name;
    }

    // Method for controls to notify the mediator
    protected void Changed(string eventType)
    {
        _mediator.Notify(this, eventType);
    }
}

// 3. Concrete Colleagues: UI Controls
public class Checkbox : UIControl
{
    public bool IsChecked { get; private set; }

    public Checkbox(IFormMediator mediator, string name) : base(mediator, name) { }

    public void Toggle(bool isChecked)
    {
        IsChecked = isChecked;
        Console.WriteLine($"{Name} toggled to: {IsChecked}");
        Changed("Checked"); // Notify mediator about state change
    }
}

public class TextBox : UIControl
{
    public string Text { get; private set; }
    public bool IsEnabled { get; set; } = true; // Initially enabled

    public TextBox(IFormMediator mediator, string name) : base(mediator, name) { }

    public void SetText(string text)
    {
        Text = text;
        Console.WriteLine($"{Name} text set to: '{Text}'");
        Changed("TextChange"); // Notify mediator about text change
    }

    public void SetEnabled(bool enabled)
    {
        IsEnabled = enabled;
        Console.WriteLine($"{Name} is now {(IsEnabled ? "enabled" : "disabled")}");
    }
}

public class Button : UIControl
{
    public Button(IFormMediator mediator, string name) : base(mediator, name) { }

    public void Click()
    {
        Console.WriteLine($"{Name} clicked.");
        Changed("Click"); // Notify mediator about click
    }
}

public class Label : UIControl
{
    public string Content { get; private set; }

    public Label(IFormMediator mediator, string name) : base(mediator, name) { }

    public void SetContent(string content)
    {
        Content = content;
        Console.WriteLine($"{Name} content set to: '{Content}'");
    }
}

// TODO: 4. Implement the ConcreteMediator: FormMediator
// This class will hold references to all UI controls and define their interactions.
/*
public class FormMediator : IFormMediator
{
    public Checkbox EnableTextBoxCheckbox { get; set; }
    public TextBox InputTextBox { get; set; }
    public Button UpdateLabelButton { get; set; }
    public Label ResultLabel { get; set; }

    public void Notify(UIControl sender, string eventType)
    {
        // TODO: Implement logic based on sender and eventType
        // Example:
        // if (sender == EnableTextBoxCheckbox && eventType == "Checked")
        // {
        //     InputTextBox.SetEnabled(EnableTextBoxCheckbox.IsChecked);
        // }
        // if (sender == UpdateLabelButton && eventType == "Click")
        // {
        //     ResultLabel.SetContent($"Input was: {InputTextBox.Text}");
        // }
    }
}
*/

public class Program
{
    public static void Main(string[] args)
    {
        // Create the mediator
        FormMediator mediator = new FormMediator();

        // Create UI controls, passing the mediator to each
        Checkbox enableTextBox = new Checkbox(mediator, "EnableTextBoxCheckbox");
        TextBox inputTextBox = new TextBox(mediator, "InputTextBox");
        Button updateButton = new Button(mediator, "UpdateButton");
        Label resultLabel = new Label(mediator, "ResultLabel");

        // Associate controls with the mediator
        mediator.EnableTextBoxCheckbox = enableTextBox;
        mediator.InputTextBox = inputTextBox;
        mediator.UpdateLabelButton = updateButton;
        mediator.ResultLabel = resultLabel;

        // Simulate user interactions
        Console.WriteLine("--- Initial State ---");
        inputTextBox.SetEnabled(false); // Start disabled
        resultLabel.SetContent("Waiting for input...");

        Console.WriteLine("\n--- User Interaction 1: Enable TextBox ---");
        enableTextBox.Toggle(true); // User checks the box

        Console.WriteLine("\n--- User Interaction 2: Type Text ---");
        inputTextBox.SetText("Hello Cohortia!");

        Console.WriteLine("\n--- User Interaction 3: Click Update Button ---");
        updateButton.Click(); // User clicks button

        Console.WriteLine("\n--- User Interaction 4: Disable TextBox ---");
        enableTextBox.Toggle(false); // User unchecks the box

        Console.WriteLine("\n--- User Interaction 5: Try to Type Text (should be disabled) ---");
        inputTextBox.SetText("This should not appear."); // Should show disabled message if logic is correct
    }
}
```

**Instructions:**
1.  Implement the `FormMediator` class.
2.  Inside the `Notify` method of `FormMediator`, add the logic to handle the interactions:
    *   When `EnableTextBoxCheckbox` notifies with "Checked", enable or disable `InputTextBox` based on its `IsChecked` state.
    *   When `UpdateButton` notifies with "Click", update `ResultLabel` to display the current text from `InputTextBox`.
3.  Run the `Program.Main` method and observe how the controls interact through the mediator.

#### Assessment idea
1.  **Question:** In a complex enterprise application, you have several independent modules (e.g., `OrderProcessingModule`, `InventoryManagementModule`, `CustomerRelationshipModule`). When an order is placed, it affects inventory, customer history, and potentially triggers notifications. If these modules directly called methods on each other, what problems would arise, and how would the Mediator pattern address them?
    *   **Correct Answer:**
        *   **Problems without Mediator:**
            1.  **Tight Coupling:** Each module would need to know about and directly depend on the specific interfaces and implementations of other modules. Changes in one module's API would necessitate changes in all dependent modules.
            2.  **Spaghetti Code:** The communication logic would be scattered across multiple modules, making it hard to understand the overall flow of an order and difficult to debug or extend.
            3.  **Reduced Reusability:** Modules would be less reusable because they are tightly bound to specific interactions with other modules.
            4.  **Maintenance Nightmare:** Adding a new module or changing an interaction would require modifying many existing modules.
        *   **How Mediator Addresses Them:**
            1.  **Decoupling:** A `SalesMediator` (or `OrderMediator`) would be introduced. Modules would no longer directly call each other. Instead, `OrderProcessingModule` would notify the `SalesMediator` about a "NewOrderPlaced" event.
            2.  **Centralized Control:** The `SalesMediator` would then be responsible for knowing which other modules (e.g., `InventoryManagementModule`, `CustomerRelationshipModule`, `NotificationService`) need to be informed and would call their respective methods.
            3.  **Simplified Communication:** Each module only needs to know about the `SalesMediator`, not about all other modules. This simplifies the module interfaces and reduces the number of direct dependencies.
            4.  **Improved Maintainability and Extensibility:** Adding a new module that reacts to orders (e.g., `AnalyticsModule`) would only require modifying the `SalesMediator` to include the new module in its notification logic, without touching the `OrderProcessingModule` or other existing modules.

2.  **Question:** While the Mediator pattern offers significant benefits, it's susceptible to a particular anti-pattern. Name this anti-pattern and explain why it's detrimental to software design. How can you mitigate this risk?
    *   **Correct Answer:** The anti-pattern is the "God Object" or "God Class."
    *   **Explanation:** A God Object is a class that knows or does too much. In the context of the Mediator pattern, the `ConcreteMediator` can become a God Object if it accumulates too much business logic, manages too many interactions, and becomes overly complex. This is detrimental because:
        *   **Violates Single Responsibility Principle:** The mediator becomes responsible for both coordinating interactions *and* performing complex business logic, making it difficult to understand, test, and maintain.
        *   **Reduced Cohesion:** Its responsibilities are too broad, leading to low cohesion.
        *   **Single Point of Failure:** Changes or bugs in the God Object can have widespread, unpredictable impacts across the entire system.
        *   **Bottleneck:** It can become a performance bottleneck if all communication flows through an overly complex central point.
    *   **Mitigation:**
        1.  **Keep Mediator Focused:** The mediator's primary role should be to *coordinate* interactions, not to *perform* the actual work. Delegate specific business logic back to the `Colleague` objects.
        2.  **Break Down Complex Mediators:** If a mediator becomes too large, consider if the system can be decomposed into smaller, more focused mediators, each handling a specific subset of interactions.
        3.  **Use Events/Event Bus for Simpler Cases:** For very simple, decoupled notifications where no complex orchestration is needed, an event-driven approach (e.g., C# events, an event bus, or the Observer pattern) might be a lighter-weight alternative, as it avoids a central coordinator. The Mediator pattern is best suited when complex, conditional orchestration of interactions is required.

#### AI generation note
Create a 12-minute slide deck presentation with animated diagrams, followed by a live coding demonstration. Start with conceptual slides explaining the problem of "spaghetti code" and direct coupling in UI, then introduce the Mediator pattern with clear role definitions (Mediator, Colleague). Use animated sequence diagrams to show communication flow with and without a mediator. Transition to a live coding demo of the UI form activity, building the `FormMediator` step-by-step and showing how `Checkbox` toggles `TextBox` and `Button` updates `Label` without direct references. Emphasize the reduced coupling and ease of modification. Include a visual warning slide about the "God Object" anti-pattern.

---

### Chapter 5.4 — Introduction to Concurrency: Challenges and Basics

#### Learning objectives
*   Differentiate between concurrency and parallelism, and explain why they are important in modern applications.
*   Identify common challenges in concurrent programming, including race conditions, deadlocks, livelocks, and starvation.
*   Understand the basics of asynchronous programming in C# using `Task`, `async`, and `await`.
*   Explain the concept of thread safety and its importance in multi-threaded environments.

#### Detailed lesson content
Up until now, our discussions on design patterns have largely focused on structuring single-threaded applications. However, modern software rarely runs in a purely sequential manner. Users expect responsive interfaces, and applications often need to perform multiple tasks simultaneously, such as fetching data from a network, processing large datasets, or handling multiple user requests. This brings us to the crucial topic of **concurrency** and **parallelism**.

While often used interchangeably, concurrency and parallelism have distinct meanings:
*   **Concurrency:** Deals with managing multiple tasks *at the same time* but not necessarily *simultaneously*. It's about structuring a program so that it can make progress on more than one task at once. Think of a single-lane road where cars (tasks) take turns moving forward; they are making progress concurrently, but only one car moves at any given instant. A single-core CPU can achieve concurrency by rapidly switching between tasks (context switching).
*   **Parallelism:** Deals with executing multiple tasks *simultaneously*. This requires multiple processing units (e.g., multi-core CPUs, GPUs) where different parts of a program can truly run at the same instant. Think of a multi-lane highway where multiple cars (tasks) can move forward at the same time.

Both concurrency and parallelism are vital for:
1.  **Responsiveness:** Preventing a UI from freezing while a long-running operation executes.
2.  **Performance/Throughput:** Utilizing multi-core processors to complete tasks faster or handle more requests per second.
3.  **Resource Utilization:** Keeping I/O devices busy while the CPU performs other computations.

However, introducing concurrency to an application also introduces significant challenges that can lead to subtle and hard-to-debug bugs:

*   **Race Conditions:** This occurs when multiple threads try to access and modify shared data concurrently, and the final outcome depends on the non-deterministic order of execution of these threads. For example, if two threads try to increment a shared counter simultaneously, the final value might be incorrect because the operations (read, increment, write) are not atomic.
    ```csharp
    // Example of a potential race condition
    public class Counter
    {
        public int Value = 0;

        public void Increment()
        {
            // This is not an atomic operation!
            // It's typically: read Value, increment, write Value
            Value++;
        }
    }

    // If two threads call Increment() concurrently, Value might not be incremented twice.
    // Thread 1 reads Value (e.g., 0)
    // Thread 2 reads Value (e.g., 0)
    // Thread 1 increments and writes (Value becomes 1)
    // Thread 2 increments and writes (Value becomes 1, overwriting Thread 1's change)
    // Expected: 2, Actual: 1
    ```

*   **Deadlocks:** A situation where two or more competing actions are waiting for each other to finish, and thus neither ever finishes. This typically happens when threads acquire multiple locks in different orders.
    *   Imagine Thread A acquires Lock X, then tries to acquire Lock Y.
    *   Simultaneously, Thread B acquires Lock Y, then tries to acquire Lock X.
    *   Both threads are now blocked indefinitely, waiting for a resource held by the other.

*   **Livelocks:** Similar to deadlocks, but threads are not blocked; instead, they are continuously changing their state in response to other threads, but no actual progress is made. They are "live" but unproductive.

*   **Starvation:** Occurs when a thread is repeatedly denied access to a shared resource or CPU time, even though the resource becomes available. This can happen due to unfair scheduling or other threads consistently winning the race for a resource.

To manage these complexities, C# and .NET provide powerful tools for asynchronous programming and concurrency control. The most fundamental building blocks for modern asynchronous operations are `Task`, `async`, and `await`.

*   **`Task`:** Represents an asynchronous operation that can be awaited. A `Task` can represent work that is currently running, has completed, or has failed. It's a promise to produce a result or complete an action in the future.
*   **`async` keyword:** Used to mark a method as asynchronous. An `async` method can use the `await` keyword to pause its execution until an awaited `Task` completes.
*   **`await` keyword:** Can only be used inside an `async` method. When `await` is applied to a `Task`, the current method pauses, and control is returned to the caller. When the awaited `Task` completes, the method resumes execution from where it left off. This allows the UI thread (or calling thread) to remain free and responsive while the asynchronous operation is in progress.

Here's a basic example of `async`/`await`:

```csharp
using System;
using System.Threading.Tasks;
using System.Net.Http; // For web requests

public class AsyncDemo
{
    // A synchronous method that simulates a long-running operation
    public void DoSynchronousWork()
    {
        Console.WriteLine("Starting synchronous work...");
        System.Threading.Thread.Sleep(3000); // Simulate 3 seconds of work
        Console.WriteLine("Synchronous work finished.");
    }

    // An asynchronous method that simulates a long-running operation
    public async Task DoAsynchronousWork()
    {
        Console.WriteLine("Starting asynchronous work...");
        // Simulate 3 seconds of work without blocking the calling thread
        await Task.Delay(3000);
        Console.WriteLine("Asynchronous work finished.");
    }

    // An async method that performs an actual I/O-bound operation
    public async Task<string> DownloadWebPageAsync(string url)
    {
        Console.WriteLine($"Downloading {url} asynchronously...");
        using (HttpClient client = new HttpClient())
        {
            string content = await client.GetStringAsync(url);
            Console.WriteLine($"Finished downloading {url}. Content length: {content.Length}");
            return content;
        }
    }

    public static async Task Main(string[] args)
    {
        AsyncDemo demo = new AsyncDemo();

        Console.WriteLine("--- Demo 1: Synchronous Call (blocks Main thread) ---");
        // This will block the Main thread for 3 seconds
        // Console.WriteLine("Before sync call");
        // demo.DoSynchronousWork();
        // Console.WriteLine("After sync call");
        // Console.WriteLine("Main thread can't do anything else during sync work.");

        Console.WriteLine("\n--- Demo 2: Asynchronous Call (non-blocking) ---");
        Console.WriteLine("Before async call");
        Task asyncTask = demo.DoAsynchronousWork(); // Starts the async work, returns control immediately
        Console.WriteLine("Main thread is free to do other things while async work runs.");
        // We can do other work here...
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Main thread doing other work... {i}");
            System.Threading.Thread.Sleep(500);
        }
        await asyncTask; // Await the completion of the async task
        Console.WriteLine("After async call (task completed).");

        Console.WriteLine("\n--- Demo 3: Real-world Async I/O ---");
        Console.WriteLine("Before web download");
        string webContent = await demo.DownloadWebPageAsync("https://www.example.com");
        Console.WriteLine("After web download (content received).");
        // Console.WriteLine(webContent.Substring(0, 100)); // Print first 100 chars
    }
}
```

The `async` and `await` keywords are primarily designed for I/O-bound operations (like network requests, file access) where the thread can be released while waiting for the I/O to complete. For CPU-bound operations (heavy calculations), `Task.Run()` is often used to offload work to a thread pool thread, preventing the main thread from blocking.

**Thread Safety:** A critical concept in concurrent programming. An object or code is "thread-safe" if it can be accessed or executed by multiple threads concurrently without causing race conditions or other data corruption. Achieving thread safety often involves using synchronization primitives (which we'll cover in the next chapter) to control access to shared resources. Without proper synchronization, concurrent access to shared mutable state is a recipe for disaster.

Safety notes: Always assume shared mutable state is *not* thread-safe unless explicitly designed to be so. Avoid sharing mutable state between threads whenever possible. If you must share, use immutable data structures or robust synchronization mechanisms. Forgetting `await` on an `async` method can lead to "fire-and-forget" scenarios where exceptions are swallowed, or subsequent code runs before the awaited operation completes, leading to unexpected behavior. Always `await` your tasks or handle their exceptions explicitly.

#### Key concepts
*   **Concurrency:** The ability of a system to handle multiple tasks by interleaving their execution over time, making progress on more than one task seemingly at once.
*   **Parallelism:** The ability of a system to execute multiple tasks *simultaneously* using multiple processing units.
*   **Race Condition:** A situation where the outcome of a program depends on the non-deterministic order of operations when multiple threads access and modify shared data.
*   **Deadlock:** A state where two or more threads are blocked indefinitely, each waiting for a resource held by another.
*   **Livelock:** A state where two or more threads continuously change their state in response to each other, but no useful work is accomplished.
*   **Starvation:** A situation where a thread is perpetually denied access to a shared resource.
*   **`Task`:** A .NET type representing an asynchronous operation that can produce a result or complete an action.
*   **`async` keyword:** Modifies a method, allowing it to contain `await` expressions and enabling asynchronous execution.
*   **`await` keyword:** Pauses the execution of an `async` method until the awaited `Task` completes, releasing the current thread to do other work.
*   **Thread Safety:** The property of an object or code that ensures it behaves correctly when accessed by multiple threads concurrently.
*   **I/O-bound vs. CPU-bound:** I/O-bound tasks spend most of their time waiting for input/output operations; CPU-bound tasks spend most of their time performing calculations. `async/await` is ideal for I/O-bound, `Task.Run()` for CPU-bound.

#### Hands-on activity
**Activity: Observe Responsiveness with Synchronous vs. Asynchronous Operations**

Your task is to create a simple console application that demonstrates the difference in responsiveness between a synchronous, long-running operation and an asynchronous one using `Task.Run()` and `async/await`.

**Starter Code:**

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class ResponsivenessDemo
{
    // Simulate a long-running CPU-bound operation
    private static void PerformHeavyCalculation(string taskName)
    {
        Console.WriteLine($"[{taskName}] Starting heavy calculation on Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        long sum = 0;
        for (int i = 0; i < 1_000_000_000; i++) // A billion iterations
        {
            sum += i;
        }
        Console.WriteLine($"[{taskName}] Finished heavy calculation. Sum: {sum} on Thread ID: {Thread.CurrentThread.ManagedThreadId}");
    }

    // TODO: Implement a synchronous method that calls PerformHeavyCalculation
    public void RunSynchronousTask()
    {
        Console.WriteLine("--- Running Synchronous Task ---");
        Console.WriteLine($"Main thread ID: {Thread.CurrentThread.ManagedThreadId}");
        PerformHeavyCalculation("Sync Task");
        Console.WriteLine("Synchronous task completed.");
    }

    // TODO: Implement an asynchronous method that offloads PerformHeavyCalculation to a background thread
    public async Task RunAsynchronousTask()
    {
        Console.WriteLine("--- Running Asynchronous Task ---");
        Console.WriteLine($"Main thread ID: {Thread.CurrentThread.ManagedThreadId}");
        // Use Task.Run to execute CPU-bound work on a thread pool thread
        await Task.Run(() => PerformHeavyCalculation("Async Task"));
        Console.WriteLine("Asynchronous task completed.");
    }

    public static async Task Main(string[] args)
    {
        ResponsivenessDemo demo = new ResponsivenessDemo();

        Console.WriteLine("Starting main program...");

        // Part 1: Demonstrate blocking with synchronous call
        Console.WriteLine("\n--- Demonstrating Blocking ---");
        demo.RunSynchronousTask();
        Console.WriteLine("Main thread continues after synchronous task.");

        // Part 2: Demonstrate non-blocking with asynchronous call
        Console.WriteLine("\n--- Demonstrating Non-Blocking ---");
        Task asyncOperation = demo.RunAsynchronousTask(); // Start async task
        Console.WriteLine("Main thread is now free to do other work while async task runs.");

        // Simulate main thread doing other work
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Main thread doing quick work... {i}");
            Thread.Sleep(200); // Small delay to simulate some work
        }

        await asyncOperation; // Wait for the async task to truly finish
        Console.WriteLine("Main thread continues after asynchronous task completes.");

        Console.WriteLine("\nMain program finished.");
    }
}
```

**Instructions:**
1.  Complete the `RunSynchronousTask()` method by calling `PerformHeavyCalculation("Sync Task")`.
2.  Complete the `RunAsynchronousTask()` method by using `await Task.Run(() => PerformHeavyCalculation("Async Task"))` to offload the heavy calculation to a separate thread.
3.  Run the `Program.Main` method.
4.  Observe the console output:
    *   For the synchronous part, notice how "Main thread continues..." only appears *after* the heavy calculation finishes.
    *   For the asynchronous part, notice how "Main thread doing quick work..." messages appear *while* the "Async Task" heavy calculation is running, demonstrating non-blocking behavior.

#### Assessment idea
1.  **Question:** A web server receives a request to process a large image file. This involves reading the file from disk (I/O-bound), applying several complex filters (CPU-bound), and then saving the processed image back to disk (I/O-bound). If the server processes this request synchronously, what are the potential downsides, and how could `async`/`await` in C# improve the situation?
    *   **Correct Answer:**
        *   **Downsides of Synchronous Processing:**
            1.  **Poor Scalability:** Each request ties up a server thread for the entire duration of the operation (I/O and CPU). If many requests come in concurrently, the server quickly runs out of available threads, leading to slow response times or even denial of service.
            2.  **Resource Inefficiency:** While waiting for I/O operations (disk read/write), the thread is blocked and cannot do other useful work, wasting CPU cycles and memory.
        *   **Improvement with `async`/`await`:**
            1.  **Improved Scalability (especially for I/O):** `async`/`await` is highly effective for I/O-bound operations. When `await`ing the disk read/write, the server thread is *released* back to the thread pool to handle other incoming requests. This allows a single server thread to manage many concurrent I/O operations, significantly increasing the server's capacity to handle requests.
            2.  **Better Responsiveness:** While the CPU-bound filtering part might still consume a thread, the I/O parts become non-blocking. To handle the CPU-bound part without blocking the main request processing thread, `Task.Run()` could be used to offload the filtering to a background thread pool thread, further enhancing overall server responsiveness and throughput.
            3.  **Simplified Asynchronous Code:** `async`/`await` makes writing asynchronous code almost as straightforward as synchronous code, avoiding complex callbacks or manual thread management.

2.  **Question:** You have a shared integer variable `totalCount` initialized to 0. Two threads, Thread A and Thread B, both attempt to increment `totalCount` 1000 times. After both threads complete, you expect `totalCount` to be 2000. However, you consistently observe a value less than 2000. What concurrency problem are you experiencing, and why does it occur in this scenario?
    *   **Correct Answer:** You are experiencing a **race condition**.
    *   **Explanation:** The operation `totalCount++` is not atomic. It typically involves three separate CPU instructions:
        1.  **Read:** Read the current value of `totalCount` into a register.
        2.  **Increment:** Increment the value in the register.
        3.  **Write:** Write the new value back to `totalCount` in memory.
        When Thread A and Thread B execute `totalCount++` concurrently, their operations can interleave in a problematic way:
        *   Thread A reads `totalCount` (e.g., 0).
        *   Thread B reads `totalCount` (also 0, before Thread A writes its incremented value).
        *   Thread A increments its local copy to 1 and writes it back to `totalCount` (now `totalCount` is 1).
        *   Thread B increments its local copy (which was 0) to 1 and writes it back to `totalCount` (now `totalCount` is still 1, overwriting Thread A's change).
        In this scenario, two increments effectively resulted in only one increment to the shared variable, leading to an incorrect final count. This non-deterministic interleaving of operations is the hallmark of a race condition.

#### AI generation note
Create an 8-minute animated video explaining concurrency concepts. Start with clear definitions and visual analogies for concurrency vs. parallelism (e.g., single-lane vs. multi-lane highway, juggling vs. multiple jugglers). Then, use animated diagrams to illustrate race conditions (two threads incrementing a counter, showing the read-modify-write cycle leading to incorrect results). Briefly animate deadlocks (two threads, two locks, circular wait). Transition to a live coding demo in C# showing a console application that calls `Task.Delay()` and `Task.Run()` with `async`/`await`, demonstrating how `await` keeps the main thread responsive. Use a split-screen view for code and console output, highlighting thread IDs. The tone should be clear, concise, and educational.

---

### Chapter 5.5 — Concurrency Patterns: Locks, Mutexes, and Semaphores

#### Learning objectives
*   Apply the `lock` keyword in C# to achieve mutual exclusion for shared resources within a single process.
*   Understand the `Monitor` class and its advanced features for thread synchronization.
*   Differentiate between `lock`, `Monitor`, `Mutex`, and `SemaphoreSlim`, and identify appropriate use cases for each.
*   Implement basic synchronization strategies to prevent race conditions and deadlocks in multi-threaded C# applications.
*   Recognize common mistakes and safety considerations when using synchronization primitives.

#### Detailed lesson content
In the previous chapter, we explored the fundamental concepts of concurrency and the challenges it presents, such as race conditions and deadlocks. Now, it's time to dive into the solutions: **synchronization primitives**. These are mechanisms provided by the operating system and programming languages to control access to shared resources, ensuring that only one thread can modify critical data at a time, thus achieving **mutual exclusion**.

The most common and straightforward synchronization primitive in C# for intra-process (within the same application) thread safety is the `lock` keyword.

**1. The `lock` Keyword:**
The `lock` keyword ensures that only one thread can enter a critical section of code at a time. It's syntactic sugar for the `Monitor` class (which we'll discuss next). When a thread acquires a lock, other threads attempting to acquire the same lock will be blocked until the first thread releases it.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class ThreadSafeCounter
{
    private int _count = 0;
    private readonly object _lockObject = new object(); // A private, readonly object for locking

    public void Increment()
    {
        lock (_lockObject) // Acquire the lock
        {
            // This is the critical section
            // Only one thread can be inside this block at a time
            _count++;
            Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId}: Count = {_count}");
        } // Release the lock automatically when exiting the block
    }

    public int GetCount()
    {
        // Reading shared state also needs protection if it can be modified concurrently
        lock (_lockObject)
        {
            return _count;
        }
    }
}

public class LockDemo
{
    public static async Task Main(string[] args)
    {
        ThreadSafeCounter counter = new ThreadSafeCounter();
        List<Task> tasks = new List<Task>();

        Console.WriteLine("Starting concurrent increments...");

        for (int i = 0; i < 10; i++)
        {
            tasks.Add(Task.Run(() =>
            {
                for (int j = 0; j < 1000; j++)
                {
                    counter.Increment();
                }
            }));
        }

        await Task.WhenAll(tasks); // Wait for all tasks to complete

        Console.WriteLine($"\nFinal Count: {counter.GetCount()} (Expected: 10000)");
    }
}
```
In this example, `_lockObject` is a dedicated, private, `readonly` object used solely for locking. This is a best practice. Common mistakes with `lock`:
*   **Locking on `this`:** If `this` (the instance itself) is locked, other code outside your class might also try to lock on the same instance, leading to potential deadlocks or unexpected behavior.
*   **Locking on value types (structs):** Value types are boxed when used as lock objects, meaning a new object is created each time, effectively making the lock ineffective. Always use a reference type (`object`) for locking.
*   **Locking on a `string` literal:** String literals are interned by the CLR, meaning all identical string literals refer to the same object. Locking on a string literal could inadvertently lock unrelated code that uses the same string literal.
*   **Deadlocks with multiple locks:** If a thread holds Lock A and tries to acquire Lock B, while another thread holds Lock B and tries to acquire Lock A, a deadlock occurs. Always acquire locks in a consistent order across your application.

**2. The `Monitor` Class:**
`lock` is built on top of the `Monitor` class (`Monitor.Enter()` and `Monitor.Exit()`). `Monitor` provides more advanced features:
*   `Monitor.Enter(object obj)`: Acquires an exclusive lock on the specified object.
*   `Monitor.Exit(object obj)`: Releases the exclusive lock.
*   `Monitor.TryEnter(object obj, int millisecondsTimeout)`: Attempts to acquire the lock within a specified timeout, useful for avoiding indefinite blocking.
*   `Monitor.Wait(object obj)`: Releases the lock on `obj` and blocks the current thread until another thread notifies it (using `Pulse` or `PulseAll`).
*   `Monitor.Pulse(object obj)`: Notifies a single waiting thread that the state of `obj` has changed.
*   `Monitor.PulseAll(object obj)`: Notifies all waiting threads.

`Monitor.Wait()` and `Monitor.Pulse()` are crucial for implementing producer-consumer patterns or other scenarios where threads need to wait for a specific condition to be met while holding a lock.

**3. The `Mutex` Class:**
`Mutex` (Mutual Exclusion) is similar to `lock` but can be used for **inter-process synchronization** (synchronizing threads across different applications or processes on the same machine). It's a system-wide resource.
*   `Mutex` can be named, allowing different processes to refer to the same synchronization object.
*   It's heavier than `lock` due to its operating system-level nature.
*   Use cases: Ensuring only one instance of an application runs at a time.

```csharp
// Example: Ensuring single application instance
using System.Threading;
using System.Diagnostics; // For Process

public class MutexDemo
{
    private static Mutex _singleInstanceMutex = new Mutex(true, "MyUniqueApplicationMutex");

    public static void Main(string[] args)
    {
        if (_singleInstanceMutex.WaitOne(TimeSpan.Zero, true)) // Try to acquire the mutex
        {
            Console.WriteLine("Application is running. Press Enter to exit.");
            Console.WriteLine($"Current Process ID: {Process.GetCurrentProcess().Id}");
            Console.ReadLine();
            _singleInstanceMutex.ReleaseMutex(); // Release the mutex
        }
        else
        {
            Console.WriteLine("Another instance of the application is already running. Exiting.");
        }
    }
}
```

**4. The `SemaphoreSlim` Class:**
A `Semaphore` limits the number of threads that can concurrently access a resource or a pool of resources. Unlike `lock` (which allows only one thread), a `Semaphore` can allow N threads. `SemaphoreSlim` is a lightweight, faster version for **intra-process** use.
*   It's initialized with an initial count and a maximum count.
*   `WaitAsync()` or `Wait()`: Decrements the semaphore's count, blocking if the count is zero.
*   `Release()`: Increments the semaphore's count.

```csharp
// Example: Limiting concurrent database connections
using System.Threading;
using System.Threading.Tasks;
using System.Collections.Generic;

public class DatabaseConnectionPool
{
    // Allow a maximum of 3 concurrent connections
    private static SemaphoreSlim _semaphore = new SemaphoreSlim(3, 3);

    public async Task AccessDatabase(string threadName)
    {
        Console.WriteLine($"{threadName} is waiting to acquire a connection...");
        await _semaphore.WaitAsync(); // Wait until a slot is available

        try
        {
            Console.WriteLine($"{threadName} acquired a connection. Remaining slots: {_semaphore.CurrentCount}");
            // Simulate database operation
            await Task.Delay(2000);
            Console.WriteLine($"{threadName} finished database operation.");
        }
        finally
        {
            _semaphore.Release(); // Release the connection slot
            Console.WriteLine($"{threadName} released connection. Remaining slots: {_semaphore.CurrentCount}");
        }
    }
}

public class SemaphoreDemo
{
    public static async Task Main(string[] args)
    {
        DatabaseConnectionPool pool = new DatabaseConnectionPool();
        List<Task> tasks = new List<Task>();

        for (int i = 1; i <= 10; i++)
        {
            string threadName = $"Client-{i}";
            tasks.Add(pool.AccessDatabase(threadName));
        }

        await Task.WhenAll(tasks);
        Console.WriteLine("\nAll clients finished accessing the database.");
    }
}
```

**Choosing the right primitive:**
*   **`lock` / `Monitor`:** For simple mutual exclusion within a single process (only one thread at a time). `lock` is preferred for simplicity. `Monitor` for more complex signaling (`Wait`/`Pulse`).
*   **`Mutex`:** For mutual exclusion across multiple processes (e.g., single application instance).
*   **`SemaphoreSlim`:** For limiting the number of threads that can access a resource concurrently (e.g., connection pools, resource throttling) within a single process.

Safety notes:
*   **Deadlocks:** The most dangerous pitfall. Always acquire locks in a consistent order. Avoid nested locks if possible. Use `Monitor.TryEnter` with timeouts or `CancellationToken`s for more robust deadlock avoidance.
*   **Starvation:** Ensure fairness in resource access. `lock` and `Monitor` don't guarantee fairness.
*   **Exception Handling:** Always release locks in a `finally` block to prevent deadlocks if an exception occurs within the critical section. The `lock` keyword handles this automatically.
*   **Performance:** Synchronization primitives introduce overhead. Use them judiciously and only when necessary to protect shared mutable state. Over-synchronization can serialize your code, negating the benefits of concurrency.
*   **Immutability:** Whenever possible, prefer immutable data structures. If data cannot be changed after creation, it doesn't need protection from concurrent modifications. This is often the safest approach.

Mastering these synchronization primitives is essential for writing robust, high-performance concurrent applications in C#.

#### Key concepts
*   **Synchronization Primitives:** Mechanisms used to control access to shared resources in a concurrent environment, ensuring thread safety.
*   **Mutual Exclusion:** A property that guarantees that no two threads can access a shared resource or critical section simultaneously.
*   **`lock` Keyword:** A C# language construct that provides a simple way to achieve mutual exclusion for a block of code, ensuring only one thread can execute it at a time. It's syntactic sugar for `Monitor.Enter` and `Monitor.Exit`.
*   **`Monitor` Class:** A .NET class that provides more advanced thread synchronization capabilities than `lock`, including `Wait`, `Pulse`, and `PulseAll` for inter-thread communication.
*   **`Mutex` Class:** A synchronization primitive used for mutual exclusion across process boundaries (inter-process synchronization), typically used to ensure only one instance of an application runs.
*   **`SemaphoreSlim` Class:** A lightweight synchronization primitive that limits the number of threads that can concurrently access a resource or a pool of resources within a single process.
*   **Critical Section:** A segment of code that accesses shared resources and must be executed by only one thread at a time to prevent race conditions.
*   **Deadlock Prevention:** Strategies to avoid deadlocks, such as consistent lock ordering, using timeouts, and avoiding nested locks.
*   **Thread Safety:** The guarantee that code or data structures behave correctly even when accessed by multiple threads concurrently.

#### Hands-on activity
**Activity: Fix a Race Condition in a Shared Bank Account**

Your task is to identify and fix a race condition in a simple `BankAccount` class where multiple threads are trying to deposit money simultaneously. Use the `lock` keyword to ensure thread safety.

**Starter Code:**

```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

public class BankAccount
{
    public decimal Balance { get; private set; } = 0;
    // TODO: Add a private, readonly object for locking here

    public void Deposit(decimal amount)
    {
        // TODO: Add lock around the critical section
        Balance += amount; // This is the critical section
        // Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} deposited {amount}. New Balance: {Balance}");
    }

    public void Withdraw(decimal amount)
    {
        // TODO: Add lock around the critical section
        if (Balance >= amount)
        {
            Balance -= amount;
            // Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} withdrew {amount}. New Balance: {Balance}");
        }
        else
        {
            // Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} failed to withdraw {amount}. Insufficient funds.");
        }
    }
}

public class BankDemo
{
    public static async Task Main(string[] args)
    {
        BankAccount account = new BankAccount();
        List<Task> tasks = new List<Task>();
        int numberOfDeposits = 100000; // 100,000 deposits
        decimal depositAmount = 1;

        Console.WriteLine($"Initial Balance: {account.Balance}");
        Console.WriteLine($"Attempting {numberOfDeposits * 2} concurrent deposits of {depositAmount}...");

        // Create two tasks, each performing half of the deposits
        tasks.Add(Task.Run(() =>
        {
            for (int i = 0; i < numberOfDeposits; i++)
            {
                account.Deposit(depositAmount);
            }
        }));

        tasks.Add(Task.Run(() =>
        {
            for (int i = 0; i < numberOfDeposits; i++)
            {
                account.Deposit(depositAmount);
            }
        }));

        await Task.WhenAll(tasks); // Wait for both tasks to complete

        Console.WriteLine($"\nFinal Balance: {account.Balance}");
        Console.WriteLine($"Expected Final Balance: {numberOfDeposits * 2 * depositAmount}");

        if (account.Balance != numberOfDeposits * 2 * depositAmount)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("!!! RACE CONDITION DETECTED: Final balance is incorrect. !!!");
            Console.ResetColor();
        }
        else
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("!!! Thread-safe: Final balance is correct. !!!");
            Console.ResetColor();
        }
    }
}
```

**Instructions:**
1.  Run the `BankDemo.Main` method as is. You should observe a race condition where the `Final Balance` is less than the `Expected Final Balance`.
2.  In the `BankAccount` class, declare a `private readonly object _lockObject = new object();`.
3.  Modify the `Deposit` method to use the `lock (_lockObject)` statement around the `Balance += amount;` line.
4.  (Optional but recommended) Do the same for the `Withdraw` method to protect its critical section.
5.  Run the `BankDemo.Main` method again and verify that the `Final Balance` now matches the `Expected Final Balance`, indicating the race condition has been resolved.

#### Assessment idea
1.  **Question:** You are building a logging service that collects log messages from various parts of your application, potentially running on different threads. The service writes these messages to a single log file. Which synchronization primitive (`lock`, `Mutex`, or `SemaphoreSlim`) would be most appropriate if you want to ensure:
    a) Only one thread at a time can write to the log file within your application process.
    b) Only one instance of your entire logging application (which might be a separate executable) can write to the log file at any given moment across the system.
    Explain your choice for each scenario.
    *   **Correct Answer:**
        *   **a) Only one thread at a time within your application process:** The `lock` keyword (or `Monitor`) is most appropriate.
            *   **Explanation:** `lock` provides efficient mutual exclusion for threads within the same process. Since the requirement is to protect access to a shared resource (the log file) from concurrent writes by different threads *within the same application*, `lock` is the simplest and most performant choice. It ensures that the critical section of code responsible for writing to the file is executed by only one thread at a time, preventing data corruption or interleaving of log entries.
        *   **b) Only one instance of your entire logging application across the system:** The `Mutex` class is most appropriate.
            *   **Explanation:** `Mutex` is designed for inter-process synchronization. If you have multiple instances of your logging application running (e.g., as separate executables), and you need to ensure that only one of them can write to a shared resource (like a global log file) at a time, a named `Mutex` is the correct solution. Different processes can acquire and release the same named `Mutex`, guaranteeing exclusive access to the shared resource across the entire system.

2.  **Question:** Consider a scenario where you have a pool of 5 database connections, and multiple threads need to acquire a connection, use it, and then release it. You want to ensure that no more than 5 threads can be using a database connection simultaneously. Which synchronization primitive is best suited for this, and how would you use it in C#?
    *   **Correct Answer:** The `SemaphoreSlim` class is best suited for this scenario.
    *   **Explanation:** `SemaphoreSlim` (or `Semaphore` for inter-process) is designed to limit the number of threads that can concurrently access a finite pool of resources.
        *   **How to use it:**
            1.  **Instantiation:** Create a `SemaphoreSlim` instance, initializing it with the maximum number of concurrent accesses allowed (e.g., `new SemaphoreSlim(5, 5)` for an initial count of 5 and a maximum count of 5).
            2.  **Acquire:** Before a thread attempts to use a database connection, it calls `await semaphore.WaitAsync()` (or `semaphore.Wait()`). If the semaphore's internal count is greater than zero, the count is decremented, and the thread proceeds immediately. If the count is zero, the thread blocks until another thread releases the semaphore.
            3.  **Release:** After a thread finishes using the database connection, it calls `semaphore.Release()`. This increments the semaphore's internal count, potentially unblocking a waiting thread.
        *   **Example Code Snippet:**
            ```csharp
            private static SemaphoreSlim _dbConnectionSemaphore = new SemaphoreSlim(5, 5); // 5 max connections

            public async Task UseDatabaseConnection()
            {
                Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} waiting for connection...");
                await _dbConnectionSemaphore.WaitAsync(); // Acquire a slot

                try
                {
                    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} acquired connection. Active: {_dbConnectionSemaphore.CurrentCount} / 5");
                    // Simulate using the database connection
                    await Task.Delay(1000);
                }
                finally
                {
                    _dbConnectionSemaphore.Release(); // Release the slot
                    Console.WriteLine($"Thread {Thread.CurrentThread.ManagedThreadId} released connection. Active: {_dbConnectionSemaphore.CurrentCount} / 5");
                }
            }
            ```
            This ensures that at most 5 threads can be in the `try` block at any given time, effectively managing the database connection pool.

#### AI generation note
Create a 15-minute live coding video demonstrating synchronization primitives. Start by showing the `BankAccount` race condition from the activity, running it multiple times to emphasize the inconsistent results. Then, refactor the `BankAccount` to use the `lock` keyword, explaining its mechanism and demonstrating the correct, consistent results. Next, briefly explain `Monitor` as the underlying mechanism and its `Wait`/`Pulse` methods conceptually. Then, demonstrate `Mutex` with a simple "single application instance" example, showing how a second instance fails to run. Finally, implement and demonstrate `SemaphoreSlim` with a "limited resource pool" example (e.g., 10 tasks trying to use 3 shared resources), showing how threads wait and acquire slots. Use a split-screen view for code and console output, highlighting thread IDs and resource counts. Emphasize common mistakes like deadlocks and how to avoid them with consistent lock ordering. The tone should be professional, safety-conscious, and hands-on.

---

## Module 6: Advanced Topics & Best Practices

This module delves into more advanced aspects of software design, focusing on recognizing and avoiding common pitfalls, leveraging modern C# and .NET features to implement patterns effectively, and applying design principles in contemporary architectural styles like microservices. We will also explore essential practices for testing pattern-rich codebases and the art of refactoring existing code to incorporate design patterns for improved maintainability and scalability.

---

### Chapter 6.1 — Anti-Patterns: Recognizing and Avoiding Bad Design

#### Learning objectives
*   Identify common anti-patterns in C# and .NET development.
*   Understand the negative consequences of applying anti-patterns on software quality and maintainability.
*   Learn strategies and design patterns to refactor code away from anti-patterns.
*   Develop a critical eye for recognizing code smells that indicate potential anti-patterns.

#### Detailed lesson content
While design patterns offer proven solutions to recurring problems, it's equally important to understand anti-patterns – common responses to recurring problems that are ineffective and often counterproductive. Anti-patterns are essentially "bad practices" that, despite their initial appeal or ease of implementation, lead to significant issues like increased complexity, reduced maintainability, and poor performance over time. Recognizing these pitfalls is a crucial skill for any software architect or developer, as it allows us to avoid them proactively or refactor existing code that exhibits their symptoms.

One of the most prevalent anti-patterns is the **God Object** or **God Class**. This refers to a class that knows or does too much, accumulating an excessive number of responsibilities, methods, and data. A God Object often becomes a central point of contention, leading to tight coupling throughout the system, making it difficult to test, maintain, and extend. Imagine a `Manager` class that handles user authentication, data persistence, business logic, and reporting. Any change to one of these areas risks breaking the others, and testing requires mocking an enormous number of dependencies. To avoid the God Object, we apply principles like Single Responsibility Principle (SRP) and Interface Segregation Principle (ISP), breaking down the monolithic class into smaller, focused components. For instance, the `Manager` could be refactored into `AuthenticationService`, `UserRepository`, `ReportingService`, and `BusinessLogicProcessor`, each with its specific responsibilities. This often leads to the application of patterns like Strategy, Command, or Facade to manage the interactions between these smaller, more cohesive units.

Another common anti-pattern is the **Magic String** or **Magic Number**. This occurs when literal strings or numbers are used directly in code to represent important values, such as configuration keys, event names, file paths, or status codes, without being defined as named constants or enums. While seemingly harmless, magic strings make code difficult to read, prone to typos, and hard to refactor. If a "status" string like "Pending" is hardcoded in multiple places and needs to change to "AwaitingApproval", every instance must be manually updated, a process ripe for errors. A safer approach is to define these values as `const` fields, `readonly static` fields, or, even better, `enum` types in C#. For example, instead of `if (order.Status == "Pending")`, use `if (order.Status == OrderStatus.Pending)`. This leverages the compiler for type checking and provides better IDE support, making the code more robust and easier to maintain.

The **Anemic Domain Model** is another subtle but damaging anti-pattern, particularly in object-oriented programming. It describes domain objects (like `Order`, `Product`, `Customer`) that primarily consist of properties (getters and setters) and lack any significant behavior or business logic. All the business logic is instead placed in separate "service" classes. While service classes have their place, an anemic domain model violates the core principle of object-oriented design, where objects should encapsulate both data and behavior. This often leads to "transaction script" style code within services, where data is pulled from an anemic object, processed, and then pushed back, losing the benefits of polymorphism and encapsulation. To counter this, we strive for a **Rich Domain Model**, where domain objects contain their own business logic, enforcing invariants and ensuring data integrity. For example, an `Order` object should have methods like `AddItem(Product product, int quantity)` or `CalculateTotal()`, rather than having an `OrderService` perform all these operations by manipulating the `Order`'s public properties. This aligns with the "Tell, Don't Ask" principle, where you tell an object to do something rather than asking it for its data and then acting on that data externally.

```csharp
// Example of an Anemic Domain Model
public class OrderAnemic
{
    public int OrderId { get; set; }
    public decimal TotalAmount { get; set; }
    public string Status { get; set; } // Magic String potential
    // ... other properties
}

public class OrderServiceAnemic
{
    public void ProcessOrder(OrderAnemic order)
    {
        if (order.Status == "Pending") // Magic String
        {
            // Perform processing logic
            order.Status = "Processed";
            order.TotalAmount = CalculateOrderTotal(order); // Logic external to Order
        }
    }

    private decimal CalculateOrderTotal(OrderAnemic order)
    {
        // Complex calculation logic here
        return 100.0m; // Placeholder
    }
}

// Refactored to a Rich Domain Model with Enum and encapsulated behavior
public enum OrderStatus
{
    Pending,
    Processed,
    Shipped,
    Cancelled
}

public class Order
{
    public int OrderId { get; private set; }
    public decimal TotalAmount { get; private set; }
    public OrderStatus Status { get; private set; }
    private List<OrderItem> _items; // Encapsulated collection

    public Order(int orderId)
    {
        OrderId = orderId;
        Status = OrderStatus.Pending;
        _items = new List<OrderItem>();
        CalculateTotalAmount();
    }

    public void AddItem(Product product, int quantity)
    {
        if (Status != OrderStatus.Pending)
        {
            throw new InvalidOperationException("Cannot add items to a processed order.");
        }
        _items.Add(new OrderItem(product, quantity));
        CalculateTotalAmount();
    }

    public void Process()
    {
        if (Status != OrderStatus.Pending)
        {
            throw new InvalidOperationException("Order is not in pending state.");
        }
        // Perform processing logic specific to the order
        Status = OrderStatus.Processed;
    }

    private void CalculateTotalAmount()
    {
        TotalAmount = _items.Sum(item => item.Product.Price * item.Quantity);
    }
    // ... other domain-specific methods
}

public class OrderItem
{
    public Product Product { get; private set; }
    public int Quantity { get; private set; }

    public OrderItem(Product product, int quantity)
    {
        Product = product;
        Quantity = quantity;
    }
}

public class Product
{
    public int ProductId { get; private set; }
    public string Name { get; private set; }
    public decimal Price { get; private set; }

    public Product(int productId, string name, decimal price)
    {
        ProductId = productId;
        Name = name;
        Price = price;
    }
}
```

Common mistakes when dealing with anti-patterns include dismissing them as minor issues, failing to recognize their long-term impact, or attempting to fix symptoms rather than the root cause. A safety note here is to be cautious when refactoring existing code that exhibits anti-patterns. Always ensure you have comprehensive tests in place before making significant structural changes. Incremental refactoring, focusing on one anti-pattern at a time, is often more effective and less risky than a complete rewrite. Understanding anti-patterns empowers you to write cleaner, more maintainable code from the outset and to effectively improve existing systems.

#### Key concepts
*   **Anti-Pattern:** A common response to a recurring problem that is usually ineffective and risks being highly counterproductive.
*   **God Object/Class:** A class that centralizes too much responsibility, leading to high coupling, low cohesion, and difficulty in maintenance and testing.
*   **Magic String/Number:** The use of literal strings or numbers directly in code without being defined as named constants or enums, leading to readability issues, typo susceptibility, and refactoring difficulties.
*   **Anemic Domain Model:** Domain objects that primarily hold data (properties) but lack significant behavior or business logic, which is instead placed in separate service classes, undermining object-oriented principles.
*   **Rich Domain Model:** Domain objects that encapsulate both data and behavior, enforcing invariants and containing business logic relevant to their state, promoting better encapsulation and polymorphism.
*   **Code Smell:** A surface indication that usually corresponds to a deeper problem in the system, often hinting at the presence of an anti-pattern.

#### Hands-on activity
**Refactoring a "Magic String" Anti-Pattern**

You are given a small C# application that processes different types of notifications. The current implementation uses hardcoded strings to determine the notification type and content. Your task is to refactor this code to eliminate the "Magic String" anti-pattern using enums and constants.

**Starter Code:**
```csharp
using System;

public class NotificationProcessor
{
    public void SendNotification(string type, string message)
    {
        if (type == "Email")
        {
            Console.WriteLine($"Sending Email: {message}");
            // Imagine complex email sending logic here
        }
        else if (type == "SMS")
        {
            Console.WriteLine($"Sending SMS: {message}");
            // Imagine complex SMS sending logic here
        }
        else if (type == "Push")
        {
            Console.WriteLine($"Sending Push Notification: {message}");
            // Imagine complex push notification logic here
        }
        else
        {
            Console.WriteLine($"Unknown notification type: {type}");
        }
    }

    public static void Main(string[] args)
    {
        NotificationProcessor processor = new NotificationProcessor();
        processor.SendNotification("Email", "Your order has been shipped!");
        processor.SendNotification("SMS", "Your password reset code is 12345.");
        processor.SendNotification("Push", "New message from Cohortia!");
        processor.SendNotification("Fax", "This type is not supported."); // Will output 'Unknown'
    }
}
```

**Instructions:**
1.  Create an `enum` called `NotificationType` with members for `Email`, `SMS`, and `Push`.
2.  Modify the `SendNotification` method to accept `NotificationType` as a parameter instead of a `string`.
3.  Update the `if-else if` statements to use the `NotificationType` enum for comparison.
4.  Update the `Main` method to call `SendNotification` using the new `NotificationType` enum values.
5.  Consider if any other "magic strings" (like the "Unknown" message) could be improved using constants.

#### Assessment idea
1.  **Question:** Consider a `ReportGenerator` class that has methods like `GeneratePdfReport()`, `GenerateExcelReport()`, `SaveToDatabase()`, `SendEmail()`, and `LogActivity()`. Which anti-pattern does this class most likely exhibit, and why?
    *   **Correct Answer:** This class most likely exhibits the **God Object** anti-pattern. It violates the Single Responsibility Principle (SRP) by taking on too many unrelated responsibilities (report generation, data persistence, communication, logging). A single change to any of these areas would require modifying this class, making it fragile, difficult to test, and hard to understand.
2.  **Question:** You encounter a C# application where a user's role is checked using `if (user.Role == "Admin")` in dozens of places throughout the codebase. Explain why this is an anti-pattern and propose a better solution using C# language features.
    *   **Correct Answer:** This is an example of the **Magic String** anti-pattern. The literal string "Admin" is hardcoded, making the code prone to typos (e.g., "admin", "Admin "), difficult to refactor if the role name changes, and lacking compile-time safety. A better solution would be to define an `enum` for user roles:
        ```csharp
        public enum UserRole
        {
            Guest,
            User,
            Admin,
            Moderator
        }
        ```
        Then, the `User` class would have a property of type `UserRole`, and the check would become `if (user.Role == UserRole.Admin)`. This provides type safety, better readability, and easier refactoring.

#### AI generation note
Create a 12-minute video tutorial. Begin with an explanation of anti-patterns using a visual analogy (e.g., a poorly designed building vs. a well-designed one). Then, live code through the "God Object" example, showing a monolithic class and then refactoring it step-by-step into smaller, more focused services using interfaces. Next, demonstrate the "Magic String" anti-pattern with the `NotificationProcessor` example, showing the problems, and then refactor it using an `enum`. Conclude with a brief discussion on the Anemic Domain Model and the benefits of a Rich Domain Model, showing code snippets side-by-side. Include on-screen text for key concepts and common mistakes. The tone should be encouraging and emphasize practical refactoring.

---

### Chapter 6.2 — Integrating Design Patterns with Modern .NET Features

#### Learning objectives
*   Understand how modern C# language features can simplify or enhance the implementation of traditional design patterns.
*   Explore how .NET's built-in Dependency Injection (DI) framework interacts with patterns like Factory and Singleton.
*   Learn to leverage LINQ for cleaner, more expressive implementations of Iterator and Strategy patterns.
*   Discover how `async`/`await` simplifies asynchronous programming, impacting concurrency patterns.

#### Detailed lesson content
The C# language and the .NET platform have evolved significantly over the years, introducing powerful features that can either simplify the implementation of classic design patterns or, in some cases, even provide more idiomatic alternatives. Understanding how to integrate these modern features with design patterns is crucial for writing efficient, maintainable, and contemporary C# code. We'll explore how features like Language Integrated Query (LINQ), `async`/`await`, records, and the built-in Dependency Injection (DI) container in .NET Core/5+ influence our approach to design patterns.

**LINQ** (Language Integrated Query) is a powerful set of extensions to the C# language that allows developers to write expressive, declarative queries over various data sources. It significantly streamlines operations that traditionally might have involved explicit loops and conditional logic, often simplifying patterns like **Iterator** and **Strategy**. For instance, instead of manually iterating through a collection and applying filters or transformations, LINQ allows you to chain methods like `Where()`, `Select()`, `OrderBy()`, and `GroupBy()`. This declarative style inherently encapsulates the iteration logic (Iterator pattern) and allows for different filtering or projection strategies to be easily composed.

Consider a scenario where you need to process a list of `Product` objects based on different criteria. Without LINQ, you might write multiple `foreach` loops with `if` statements or even implement a custom Iterator. With LINQ, you can define your "strategies" as lambda expressions or methods and apply them:

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public class Product
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
}

public class ProductProcessor
{
    private List<Product> _products;

    public ProductProcessor(List<Product> products)
    {
        _products = products;
    }

    // Traditional approach (less flexible, potentially more verbose for complex scenarios)
    public List<Product> GetHighStockProductsTraditional(int minStock)
    {
        List<Product> result = new List<Product>();
        foreach (var product in _products)
        {
            if (product.Stock >= minStock)
            {
                result.Add(product);
            }
        }
        return result;
    }

    // LINQ approach leveraging Strategy-like behavior with lambda expressions
    public IEnumerable<Product> FilterProducts(Func<Product, bool> filterStrategy)
    {
        return _products.Where(filterStrategy);
    }

    public IEnumerable<TResult> TransformProducts<TResult>(Func<Product, TResult> transformStrategy)
    {
        return _products.Select(transformStrategy);
    }

    public static void Main(string[] args)
    {
        var products = new List<Product>
        {
            new Product { Name = "Laptop", Price = 1200, Stock = 50 },
            new Product { Name = "Mouse", Price = 25, Stock = 200 },
            new Product { Name = "Keyboard", Price = 75, Stock = 120 },
            new Product { Name = "Monitor", Price = 300, Stock = 30 }
        };

        var processor = new ProductProcessor(products);

        // Using LINQ for filtering (Strategy)
        Console.WriteLine("Products with stock > 100:");
        foreach (var product in processor.FilterProducts(p => p.Stock > 100))
        {
            Console.WriteLine($"- {product.Name}");
        }

        // Using LINQ for transformation (mapping)
        Console.WriteLine("\nProduct names and prices:");
        foreach (var item in processor.TransformProducts(p => new { p.Name, p.Price }))
        {
            Console.WriteLine($"- {item.Name} (${item.Price})");
        }
    }
}
```
Here, `Func<Product, bool> filterStrategy` acts as a strategy, and LINQ's `Where` method applies it. This is a much cleaner way to implement flexible filtering and transformation logic without explicit pattern boilerplate.

**`async`/`await`** keywords, introduced in C# 5, revolutionized asynchronous programming. They provide a much more readable and maintainable way to write non-blocking code, replacing complex callback chains or manual thread management. This significantly impacts how we approach concurrency patterns. While patterns like Producer-Consumer or Reactor are still relevant for specific scenarios, `async`/`await` handles the underlying complexity of asynchronous operations, making many traditional asynchronous patterns simpler to implement or even less necessary for common I/O-bound tasks. For example, a `Command` pattern that previously might have required manual threading for background execution can now simply have an `ExecuteAsync()` method.

**Dependency Injection (DI)** is a core principle and a widely adopted pattern in modern .NET applications, especially with ASP.NET Core and .NET 5+. The built-in DI container simplifies the management of dependencies, making it easier to implement patterns like **Factory**, **Singleton**, and **Decorator**.
*   **Factory Pattern:** Instead of manually creating a `ConcreteFactory` and calling its `Create()` method, you can register different implementations of an interface with the DI container and let the container resolve the correct one at runtime, often based on configuration or a factory method registered with the container. This effectively externalizes the factory logic.
*   **Singleton Pattern:** While a classic singleton creates a single instance globally, the DI container can manage the lifecycle of objects, allowing you to register a service as a singleton, ensuring only one instance is created throughout the application's lifetime without the need for manual static instance management. This makes singletons testable and configurable.
*   **Decorator Pattern:** DI can be used to chain decorators. You register the base service and then register a decorator that wraps the base service, and so on. The DI container handles the construction of the decorated object graph.

```csharp
// Example of DI for Factory and Singleton in .NET Core/5+
using Microsoft.Extensions.DependencyInjection;
using System;

// Interface for a service
public interface IMessageSender
{
    void Send(string message);
}

// Concrete Email Sender
public class EmailSender : IMessageSender
{
    public void Send(string message) => Console.WriteLine($"Emailing: {message}");
}

// Concrete SMSSender
public class SmsSender : IMessageSender
{
    public void Send(string message) => Console.WriteLine($"SMSing: {message}");
}

// A service that uses IMessageSender
public class NotificationService
{
    private readonly IMessageSender _sender;

    public NotificationService(IMessageSender sender) // DI injects the sender
    {
        _sender = sender;
    }

    public void Notify(string message)
    {
        _sender.Send(message);
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var serviceCollection = new ServiceCollection();

        // Register IMessageSender as a Singleton (only one instance throughout the app)
        // serviceCollection.AddSingleton<IMessageSender, EmailSender>();

        // Register IMessageSender with a factory method (Factory pattern via DI)
        // This factory method can decide which concrete sender to provide
        serviceCollection.AddTransient<IMessageSender>(provider =>
        {
            // In a real app, this logic might come from config or context
            bool useEmail = true; // For demonstration
            if (useEmail)
            {
                return new EmailSender();
            }
            else
            {
                return new SmsSender();
            }
        });

        serviceCollection.AddTransient<NotificationService>(); // Register NotificationService

        var serviceProvider = serviceCollection.BuildServiceProvider();

        // Resolve and use the service
        var notificationService = serviceProvider.GetService<NotificationService>();
        notificationService.Notify("Hello from Cohortia!");

        // If registered as Singleton, subsequent resolutions would return the same instance.
        // If registered with a factory, a new instance (or a decision by factory) would be made.
    }
}
```
In this example, `AddTransient` with a lambda acts as a factory, dynamically deciding which `IMessageSender` to provide. `AddSingleton` would ensure a single instance, fulfilling the Singleton pattern's intent without manual implementation.

**Records**, introduced in C# 9, are reference types that provide built-in functionality for encapsulating data with immutable properties and value-based equality. They are excellent for implementing **Value Objects** or simple immutable data transfer objects (DTOs), which historically required more boilerplate code. Records simplify the creation of objects that are defined by their data rather than their identity, making them ideal for representing concepts like `Money`, `Address`, or `Coordinates`.

```csharp
// Traditional immutable Value Object
public class AddressImmutable
{
    public string Street { get; }
    public string City { get; }
    public string ZipCode { get; }

    public AddressImmutable(string street, string city, string zipCode)
    {
        Street = street;
        City = city;
        ZipCode = zipCode;
    }

    // Must override Equals and GetHashCode for value equality
    public override bool Equals(object obj) => obj is AddressImmutable other &&
                                               Street == other.Street &&
                                               City == other.City &&
                                               ZipCode == other.ZipCode;
    public override int GetHashCode() => HashCode.Combine(Street, City, ZipCode);
    public override string ToString() => $"{Street}, {City} {ZipCode}";
}

// Value Object using C# 9 Record
public record Address(string Street, string City, string ZipCode);

public class RecordExample
{
    public static void Main(string[] args)
    {
        Address address1 = new Address("123 Main St", "Anytown", "12345");
        Address address2 = new Address("123 Main St", "Anytown", "12345");
        Address address3 = new Address("456 Oak Ave", "Otherville", "67890");

        Console.WriteLine($"Address 1: {address1}");
        Console.WriteLine($"Address 2: {address2}");
        Console.WriteLine($"Address 3: {address3}");

        Console.WriteLine($"address1 == address2: {address1 == address2}"); // True (value equality)
        Console.WriteLine($"address1 == address3: {address1 == address3}"); // False

        // With-expressions for non-destructive mutation
        Address address4 = address1 with { City = "Newtown" };
        Console.WriteLine($"Address 4 (modified from 1): {address4}");
    }
}
```
Records automatically provide value equality, `ToString()`, and non-destructive mutation (`with` expressions), significantly reducing the boilerplate for immutable data structures.

Common mistakes include over-engineering by implementing traditional patterns manually when a simpler, more idiomatic C# feature (like DI for factories or records for value objects) would suffice. Conversely, ignoring patterns entirely and relying solely on language features can lead to unstructured code. The key is to understand the intent behind the patterns and how modern C# features can help achieve that intent more elegantly. A safety note is to always consider the trade-offs: while `async`/`await` simplifies many async tasks, complex concurrency still benefits from specific patterns like Producer-Consumer, especially when dealing with resource contention or message queues.

#### Key concepts
*   **LINQ (Language Integrated Query):** A powerful C# feature that enables declarative querying over collections, simplifying implementations of Iterator and Strategy patterns.
*   **`async`/`await`:** C# keywords that streamline asynchronous programming, making non-blocking operations more readable and reducing the need for complex manual concurrency patterns for I/O-bound tasks.
*   **Dependency Injection (DI) Container:** A framework (built-in to .NET Core/5+) that manages object creation and lifecycle, allowing for declarative implementation of patterns like Factory, Singleton, and Decorator by configuring service registrations.
*   **Records (C# 9+):** Reference types designed for immutable data, providing built-in value equality, `ToString()`, and `with` expressions, ideal for implementing Value Objects and DTOs with minimal boilerplate.
*   **Value Object:** An object whose identity is based on the equality of its attributes rather than its reference, often made immutable. Records are a perfect fit for this concept.

#### Hands-on activity
**Implementing a Strategy Pattern using LINQ and a Factory Pattern using DI**

You need to process a list of numeric data, applying different filtering strategies. You also need to manage the creation of different data processors using the built-in .NET DI container.

**Instructions:**
1.  **Part 1: LINQ and Strategy**
    *   Create a `DataAnalyzer` class that takes a `List<int>` in its constructor.
    *   Add a method `Analyze(Func<int, bool> filterStrategy)` that uses LINQ's `Where` method with the provided `filterStrategy` to return filtered data.
    *   In your `Main` method, demonstrate using `Analyze` with at least two different lambda expressions as filter strategies (e.g., filter for even numbers, filter for numbers greater than 10).
2.  **Part 2: DI and Factory**
    *   Define an interface `IDataProcessor` with a method `Process(List<int> data)`.
    *   Create two concrete implementations: `EvenNumberProcessor` and `OddNumberProcessor`, each implementing `IDataProcessor` and printing appropriate messages.
    *   In your `Main` method, set up a `ServiceCollection`.
    *   Register `IDataProcessor` using `AddTransient` with a factory lambda that decides which concrete processor to instantiate (e.g., based on a simple boolean flag or configuration).
    *   Resolve `IDataProcessor` from the `ServiceProvider` and call its `Process` method.

**Code Template (for Part 1):**
```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public class DataAnalyzer
{
    private List<int> _data;

    public DataAnalyzer(List<int> data)
    {
        _data = data;
    }

    public IEnumerable<int> Analyze(Func<int, bool> filterStrategy)
    {
        // Implement using LINQ's Where method
        // return ...
        throw new NotImplementedException();
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 };
        var analyzer = new DataAnalyzer(numbers);

        Console.WriteLine("Even numbers:");
        // Call Analyze with a lambda for even numbers
        // foreach (var num in analyzer.Analyze(...)) { Console.WriteLine(num); }

        Console.WriteLine("\nNumbers greater than 10:");
        // Call Analyze with a lambda for numbers > 10
        // foreach (var num in analyzer.Analyze(...)) { Console.WriteLine(num); }
    }
}
```

**Code Template (for Part 2 - add to the same Program.cs):**
```csharp
using Microsoft.Extensions.DependencyInjection; // Add this using directive

public interface IDataProcessor
{
    void Process(List<int> data);
}

public class EvenNumberProcessor : IDataProcessor
{
    public void Process(List<int> data)
    {
        Console.WriteLine("Processing even numbers:");
        foreach (var num in data.Where(n => n % 2 == 0))
        {
            Console.Write($"{num} ");
        }
        Console.WriteLine();
    }
}

public class OddNumberProcessor : IDataProcessor
{
    public void Process(List<int> data)
    {
        Console.WriteLine("Processing odd numbers:");
        foreach (var num in data.Where(n => n % 2 != 0))
        {
            Console.Write($"{num} ");
        }
        Console.WriteLine();
    }
}

// Add DI setup and resolution in Main method
// ...
// var serviceCollection = new ServiceCollection();
// serviceCollection.AddTransient<IDataProcessor>(provider =>
// {
//     // bool useEvenProcessor = ... (decide here)
//     // if (useEvenProcessor) { return new EvenNumberProcessor(); } else { return new OddNumberProcessor(); }
// });
// var serviceProvider = serviceCollection.BuildServiceProvider();
// var processor = serviceProvider.GetService<IDataProcessor>();
// processor.Process(numbers);
```

#### Assessment idea
1.  **Question:** You need to create immutable `Money` objects in C# that represent a currency amount. Which modern C# feature would be most suitable for this, and why? Provide a simple code example.
    *   **Correct Answer:** The `record` type (introduced in C# 9) is most suitable. Records are designed for immutable data structures and automatically provide value-based equality, `ToString()` implementation, and `with` expressions for non-destructive mutation. This significantly reduces boilerplate compared to traditional classes for value objects.
        ```csharp
        public record Money(decimal Amount, string Currency);

        // Example usage:
        Money price1 = new Money(19.99m, "USD");
        Money price2 = new Money(19.99m, "USD");
        Console.WriteLine(price1 == price2); // True, due to value equality
        ```
2.  **Question:** Your ASP.NET Core application needs to log messages to different destinations (console, file, database) based on configuration. Instead of manually instantiating loggers, how can the built-in .NET Dependency Injection container help implement a flexible logging strategy that resembles a Factory pattern?
    *   **Correct Answer:** The DI container can act as a factory by allowing you to register an interface (e.g., `ILogger`) with a factory method (a lambda expression) that decides which concrete logger implementation to return. This factory method can inspect configuration settings or other runtime conditions to make its decision.
        ```csharp
        // In Startup.cs or Program.cs (for .NET 6+)
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<ILogger>(provider =>
            {
                var configuration = provider.GetRequiredService<IConfiguration>();
                var logTarget = configuration["Logging:Target"];

                if (logTarget == "File")
                {
                    return new FileLogger(configuration["Logging:FilePath"]);
                }
                else if (logTarget == "Database")
                {
                    return new DatabaseLogger(configuration.GetConnectionString("LoggingDb"));
                }
                else // Default to Console
                {
                    return new ConsoleLogger();
                }
            });
            // ... other service registrations
        }
        ```
        This approach externalizes the creation logic, making it configurable and easy to swap implementations without changing the consuming code.

#### AI generation note
Produce a 10-14 minute interactive code demo. Start by showing a simple `Product` list and demonstrating how LINQ's `Where` and `Select` methods can replace explicit loops for filtering and transforming, effectively implementing a Strategy-like behavior with lambdas. Then, transition to Dependency Injection, showing how to set up `ServiceCollection` in a console app. Demonstrate registering different `IMessageSender` implementations (Email, SMS) using `AddTransient` with a factory lambda, and then resolving and using `NotificationService`. Briefly touch upon `async`/`await` with a simple `Task.Delay` example and explain how it simplifies async operations. Finally, show the `Address` record example, highlighting its conciseness for value objects. Include a mini-quiz asking about the benefits of records for value objects.

---

### Chapter 6.3 — Design Patterns in Microservices Architecture

#### Learning objectives
*   Understand the fundamental challenges and characteristics of microservices architecture.
*   Identify key architectural patterns relevant to building robust microservices with C# and .NET.
*   Learn how to apply patterns like API Gateway, Circuit Breaker, and Saga in a distributed context.
*   Explore the use of .NET libraries and frameworks that support microservices patterns.

#### Detailed lesson content
Microservices architecture has become a dominant paradigm for building scalable, resilient, and independently deployable systems. In this architectural style, an application is composed of a collection of small, autonomous services, each responsible for a specific business capability. While the Gang of Four patterns primarily focus on object-oriented design within a single application, the distributed nature of microservices introduces a new set of challenges and, consequently, a new set of architectural patterns to address them. C# and .NET, with their robust ecosystem, are well-suited for building microservices, often leveraging frameworks like ASP.NET Core, gRPC, and various message brokers.

One of the primary challenges in microservices is managing communication and routing. When you have dozens or hundreds of services, clients need a single entry point to interact with the system. This is where the **API Gateway** pattern comes into play. An API Gateway acts as a single, unified entry point for all client requests. It can handle request routing to the appropriate microservice, authentication, authorization, rate limiting, caching, and even request aggregation. For example, a mobile app might need data from three different microservices (user profile, order history, recommendations) to display a single screen. The API Gateway can aggregate these calls, reducing network round trips for the client. In .NET, frameworks like Ocelot or YARP (Yet Another Reverse Proxy) can be used to implement an API Gateway.

```csharp
// Example of Ocelot configuration for an API Gateway (ocelot.json)
// This file would be part of your API Gateway microservice project.
// It defines how incoming requests are routed to internal services.
[
  {
    "DownstreamPathTemplate": "/{url}",
    "DownstreamScheme": "http",
    "DownstreamHostAndPorts": [
      {
        "Host": "userservice", // Internal service name or IP
        "Port": 80
      }
    ],
    "UpstreamPathTemplate": "/api/users/{url}",
    "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ]
  },
  {
    "DownstreamPathTemplate": "/{url}",
    "DownstreamScheme": "http",
    "DownstreamHostAndPorts": [
      {
        "Host": "orderservice",
        "Port": 80
      }
    ],
    "UpstreamPathTemplate": "/api/orders/{url}",
    "UpstreamHttpMethod": [ "GET", "POST" ]
  }
]
```
This Ocelot configuration routes requests starting with `/api/users` to the `userservice` and `/api/orders` to the `orderservice`.

Another critical concern in a distributed system is fault tolerance. If one microservice fails, it shouldn't cascade and bring down the entire system. The **Circuit Breaker** pattern addresses this by preventing an application from repeatedly trying to invoke a service that is likely to fail. When a service call repeatedly fails (e.g., due to timeouts or errors), the circuit breaker "trips," opening the circuit and immediately returning an error without attempting to call the failing service. After a configurable period, it enters a "half-open" state, allowing a limited number of test requests to pass through. If these succeed, the circuit closes; otherwise, it re-opens. In .NET, the Polly library is an excellent choice for implementing Circuit Breaker and other resilience patterns (like Retry, Timeout, Bulkhead).

```csharp
using Polly;
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class MyService
{
    private readonly HttpClient _httpClient;
    private readonly IAsyncPolicy _circuitBreakerPolicy;

    public MyService(HttpClient httpClient)
    {
        _httpClient = httpClient;

        // Define a circuit breaker policy:
        // Break the circuit if 3 consecutive exceptions occur
        // and keep it open for 30 seconds.
        _circuitBreakerPolicy = Policy
            .Handle<HttpRequestException>()
            .CircuitBreakerAsync(
                exceptionsAllowedBeforeBreaking: 3,
                durationOfBreak: TimeSpan.FromSeconds(30),
                onBreak: (ex, breakDelay) => Console.WriteLine($"Circuit broken for {breakDelay.TotalSeconds}s due to {ex.Message}"),
                onReset: () => Console.WriteLine("Circuit reset."),
                onHalfOpen: () => Console.WriteLine("Circuit half-open, trying next call.")
            );
    }

    public async Task<string> GetDataFromExternalService(string url)
    {
        try
        {
            // Execute the HTTP request through the circuit breaker policy
            var response = await _circuitBreakerPolicy.ExecuteAsync(() => _httpClient.GetStringAsync(url));
            Console.WriteLine($"Successfully retrieved data from {url}");
            return response;
        }
        catch (BrokenCircuitException)
        {
            Console.WriteLine($"Service call to {url} prevented by circuit breaker.");
            return "Fallback data or error.";
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error calling {url}: {ex.Message}");
            return "Fallback data or error.";
        }
    }

    public static async Task Main(string[] args)
    {
        var httpClient = new HttpClient();
        var service = new MyService(httpClient);

        // Simulate failures
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Attempt {i + 1}:");
            // Replace with a URL that might fail for testing, e.g., a non-existent endpoint
            await service.GetDataFromExternalService("http://localhost:9999/api/data");
            await Task.Delay(1000); // Wait a bit between calls
        }
        Console.WriteLine("Waiting for circuit to reset...");
        await Task.Delay(35000); // Wait longer than durationOfBreak
        Console.WriteLine("Attempt after reset:");
        await service.GetDataFromExternalService("http://localhost:9999/api/data"); // Should try again
    }
}
```
This example shows how `Polly` wraps an `HttpClient` call, protecting it with a circuit breaker.

Another significant challenge in microservices is managing distributed transactions. In a monolithic application, you typically use a single database transaction. In microservices, a business process often spans multiple services, each with its own database. The **Saga Pattern** provides a way to manage these distributed transactions. A saga is a sequence of local transactions, where each local transaction updates data within a single service and publishes an event that triggers the next local transaction in the saga. If a step fails, compensating transactions are executed to undo the changes made by previous successful steps. Sagas can be orchestrated (a central coordinator tells each service what to do) or choreographed (services react to events from other services). Message brokers like RabbitMQ or Kafka are commonly used in .NET for implementing event-driven sagas.

```csharp
// Conceptual C# code for a Choreography-based Saga (simplified)
// Service 1: Order Service
public class OrderService
{
    private readonly IMessagePublisher _publisher; // Abstraction for RabbitMQ/Kafka

    public OrderService(IMessagePublisher publisher) => _publisher = publisher;

    public void CreateOrder(Order order)
    {
        // 1. Create local order transaction
        Console.WriteLine($"Order Service: Creating order {order.OrderId}");
        // Save order to its database
        _publisher.Publish("OrderCreatedEvent", new { order.OrderId, order.CustomerId, order.Amount });
    }

    public void HandlePaymentFailed(Guid orderId)
    {
        // Compensating transaction for Order Service
        Console.WriteLine($"Order Service: Payment failed for order {orderId}. Cancelling order.");
        // Update order status to Cancelled
    }
}

// Service 2: Payment Service
public class PaymentService
{
    private readonly IMessagePublisher _publisher;

    public PaymentService(IMessagePublisher publisher) => _publisher = publisher;

    public void HandleOrderCreated(Guid orderId, Guid customerId, decimal amount)
    {
        Console.WriteLine($"Payment Service: Processing payment for order {orderId}");
        // 2. Process payment (local transaction)
        bool paymentSuccess = new Random().Next(0, 2) == 1; // Simulate success/failure
        if (paymentSuccess)
        {
            Console.WriteLine($"Payment Service: Payment successful for order {orderId}");
            _publisher.Publish("PaymentProcessedEvent", new { orderId });
        }
        else
        {
            Console.WriteLine($"Payment Service: Payment failed for order {orderId}");
            _publisher.Publish("PaymentFailedEvent", new { orderId });
        }
    }
}

// Service 3: Inventory Service
public class InventoryService
{
    public void HandlePaymentProcessed(Guid orderId)
    {
        Console.WriteLine($"Inventory Service: Reserving items for order {orderId}");
        // 3. Reserve inventory (local transaction)
        Console.WriteLine($"Inventory Service: Items reserved for order {orderId}");
        // Publish InventoryReservedEvent
    }

    public void HandlePaymentFailed(Guid orderId)
    {
        // Compensating transaction for Inventory Service
        Console.WriteLine($"Inventory Service: Payment failed for order {orderId}. Releasing inventory.");
        // Release reserved inventory
    }
}

// Simplified Message Publisher interface
public interface IMessagePublisher
{
    void Publish(string eventName, object payload);
}

// A very basic in-memory publisher for demonstration
public class InMemoryMessagePublisher : IMessagePublisher
{
    private readonly Dictionary<string, List<Action<object>>> _subscribers = new();

    public void Subscribe(string eventName, Action<object> handler)
    {
        if (!_subscribers.ContainsKey(eventName))
            _subscribers[eventName] = new List<Action<object>>();
        _subscribers[eventName].Add(handler);
    }

    public void Publish(string eventName, object payload)
    {
        Console.WriteLine($"\n--- Publishing {eventName} with payload: {payload} ---");
        if (_subscribers.TryGetValue(eventName, out var handlers))
        {
            foreach (var handler in handlers)
            {
                handler(payload);
            }
        }
    }
}

public class MicroservicesSagaDemo
{
    public static void Main(string[] args)
    {
        var publisher = new InMemoryMessagePublisher();

        var orderService = new OrderService(publisher);
        var paymentService = new PaymentService(publisher);
        var inventoryService = new InventoryService(); // Does not publish, just consumes

        // Simulate event subscriptions
        publisher.Subscribe("OrderCreatedEvent", payload =>
        {
            dynamic data = payload;
            paymentService.HandleOrderCreated(data.OrderId, data.CustomerId, data.Amount);
        });
        publisher.Subscribe("PaymentProcessedEvent", payload =>
        {
            dynamic data = payload;
            inventoryService.HandlePaymentProcessed(data.OrderId);
        });
        publisher.Subscribe("PaymentFailedEvent", payload =>
        {
            dynamic data = payload;
            orderService.HandlePaymentFailed(data.OrderId);
            inventoryService.HandlePaymentFailed(data.OrderId);
        });

        // Start a saga
        var order = new Order(Guid.NewGuid(), Guid.NewGuid(), 150.0m);
        orderService.CreateOrder(order);
    }
}

public class Order
{
    public Guid OrderId { get; }
    public Guid CustomerId { get; }
    public decimal Amount { get; }
    public Order(Guid orderId, Guid customerId, decimal amount)
    {
        OrderId = orderId;
        CustomerId = customerId;
        Amount = amount;
    }
}
```
This simplified example illustrates how services react to events to progress the saga or trigger compensating actions.

Common mistakes in microservices include treating them like distributed monoliths, ignoring the overhead of network communication, or failing to implement proper resilience patterns. A safety note: Microservices introduce significant operational complexity. While patterns help manage this, they are not a silver bullet. Proper monitoring, logging, tracing, and automated deployment are equally crucial. When designing microservices, always consider the boundaries of your services carefully, aiming for high cohesion within a service and loose coupling between services.

#### Key concepts
*   **Microservices Architecture:** An architectural style where an application is built as a collection of small, autonomous services, each responsible for a specific business capability.
*   **API Gateway Pattern:** A single entry point for all client requests in a microservices architecture, handling routing, authentication, authorization, and request aggregation.
*   **Circuit Breaker Pattern:** A resilience pattern that prevents an application from repeatedly invoking a failing service, allowing it to recover and preventing cascading failures.
*   **Saga Pattern:** A pattern for managing distributed transactions in microservices, consisting of a sequence of local transactions, with compensating transactions to undo changes if a step fails.
*   **Polly:** A .NET resilience and transient-fault-handling library that allows developers to express policies such as Retry, Circuit Breaker, Timeout, Bulkhead Isolation, and Fallback in a fluent and thread-safe manner.
*   **Ocelot/YARP:** .NET API Gateway frameworks used for routing and managing requests to microservices.
*   **Message Broker:** A software component (e.g., RabbitMQ, Kafka) that enables communication between different services by mediating messages, often used for event-driven architectures and sagas.

#### Hands-on activity
**Implementing a Simple Circuit Breaker with Polly**

You will simulate an unreliable external service call and protect it using Polly's Circuit Breaker policy.

**Instructions:**
1.  Create a new C# console application.
2.  Install the `Polly` NuGet package: `dotnet add package Polly`.
3.  Define a simple method `CallUnreliableService()` that simulates an external API call. This method should randomly throw an `HttpRequestException` (e.g., 60% of the time) to simulate failures.
4.  Implement a Circuit Breaker policy using Polly:
    *   The circuit should break after 3 consecutive failures.
    *   The circuit should stay open for 10 seconds.
    *   Include `onBreak`, `onReset`, and `onHalfOpen` actions to log the circuit's state changes.
5.  In your `Main` method, loop to call `CallUnreliableService()` multiple times (e.g., 10-15 times) with a small delay between calls, wrapping each call with the circuit breaker policy. Observe how the circuit opens and closes.
6.  Add a `try-catch` block around the policy execution to catch `BrokenCircuitException` and provide a fallback message.

**Code Template:**
```csharp
using Polly;
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class CircuitBreakerDemo
{
    private static readonly Random _random = new Random();
    private static int _failureCount = 0;

    // Simulates an external service call that might fail
    public static async Task<string> CallUnreliableService()
    {
        await Task.Delay(100); // Simulate network latency
        if (_random.Next(0, 100) < 60) // 60% chance of failure
        {
            _failureCount++;
            Console.WriteLine($"  Service call FAILED! (Total failures: {_failureCount})");
            throw new HttpRequestException("Simulated service outage.");
        }
        else
        {
            _failureCount = 0; // Reset failure count on success
            Console.WriteLine("  Service call SUCCEEDED!");
            return "Data from service.";
        }
    }

    public static async Task Main(string[] args)
    {
        // Define your Circuit Breaker policy here
        var circuitBreakerPolicy = Policy
            // .Handle<HttpRequestException>()
            // .CircuitBreakerAsync( ... )
            // Add onBreak, onReset, onHalfOpen actions
            throw new NotImplementedException("Implement the Polly Circuit Breaker policy here.");

        Console.WriteLine("Starting service calls...");

        for (int i = 0; i < 15; i++)
        {
            Console.WriteLine($"\nAttempt {i + 1}:");
            try
            {
                // Execute the unreliable service call through the policy
                string result = await circuitBreakerPolicy.ExecuteAsync(CallUnreliableService);
                Console.WriteLine($"Result: {result}");
            }
            catch (BrokenCircuitException)
            {
                Console.WriteLine("Result: Service call prevented by circuit breaker (fallback).");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Result: Unexpected error: {ex.Message}");
            }
            await Task.Delay(500); // Wait between attempts
        }

        Console.WriteLine("\nDemo complete.");
    }
}
```

#### Assessment idea
1.  **Question:** Your microservices application has a `ProductService`, `OrderService`, and `InventoryService`. When a customer places an order, the `OrderService` needs to create the order, the `PaymentService` needs to process payment, and the `InventoryService` needs to reserve stock. If the payment fails, the order should be cancelled and stock released. Which microservices pattern is best suited to coordinate these distributed transactions, and why?
    *   **Correct Answer:** The **Saga Pattern** is best suited for this scenario. A saga coordinates a sequence of local transactions across multiple services. If the payment fails (a local transaction in `PaymentService`), the saga can trigger compensating transactions in `OrderService` (to cancel the order) and `InventoryService` (to release stock), ensuring eventual consistency across the distributed system.
2.  **Question:** A mobile client application needs to display a user's dashboard, which requires fetching data from `/users/{id}`, `/orders/history/{id}`, and `/recommendations/{id}` from three separate microservices. If the client calls each service directly, it will incur three separate network requests. How can the **API Gateway** pattern improve this situation, and what .NET framework could be used to implement it?
    *   **Correct Answer:** The API Gateway pattern can significantly improve this by acting as a single entry point for the client. The client would make a single request to the API Gateway (e.g., `/api/dashboard/{id}`). The API Gateway would then internally aggregate the calls to the `UserService`, `OrderService`, and `RecommendationService`, combine the results, and return a single, consolidated response to the client. This reduces network latency and simplifies client-side logic. In .NET, frameworks like **Ocelot** or **YARP** (Yet Another Reverse Proxy) are commonly used to implement API Gateways.

#### AI generation note
Create a 15-minute animated diagram and live coding video. Start with an animation illustrating the challenges of microservices (network latency, fault tolerance, distributed transactions). Then, visually explain the API Gateway pattern with a diagram showing client requests flowing through a gateway to multiple services, followed by a brief Ocelot `ocelot.json` configuration example. Transition to the Circuit Breaker pattern, explaining its states (closed, open, half-open) with an animated state machine diagram. Follow this with a live coding demo using the Polly library to wrap an `HttpClient` call with a circuit breaker, showing console output as the circuit breaks and resets. Finally, briefly explain the Saga pattern with a high-level event flow diagram for the order/payment/inventory example, emphasizing compensating transactions. The tone should be informative and practical, highlighting the use of .NET tools.

---

### Chapter 6.4 — Testing Strategies for Pattern-Rich Codebases

#### Learning objectives
*   Understand the importance of testing code that implements design patterns.
*   Learn how to effectively unit test components that utilize patterns like Strategy, Factory, and Decorator.
*   Explore techniques for mocking and stubbing dependencies in pattern-based architectures.
*   Identify common pitfalls when testing pattern-rich code and how to avoid them.

#### Detailed lesson content
Testing is an indispensable part of software development, and its importance only grows when dealing with complex architectural decisions like design patterns. Design patterns, by their nature, introduce abstractions and often involve multiple interacting objects. Effective testing ensures that these patterns are correctly implemented, that the system behaves as expected, and that future changes don't inadvertently break existing functionality. For C# and .NET, this typically involves using testing frameworks like xUnit, NUnit, or MSTest, along with mocking libraries such as Moq or NSubstitute.

When testing code that uses design patterns, the primary goal remains the same: isolate the unit of work and verify its behavior. This often means focusing on **unit testing**, where individual classes or small groups of related classes are tested in isolation from their dependencies. Design patterns often naturally lend themselves to testability because they promote loose coupling and clear separation of concerns.

Consider the **Strategy pattern**, where different algorithms (strategies) are interchangeable. To test this, you would write separate unit tests for each concrete strategy implementation to ensure it performs its specific algorithm correctly. Then, you would test the context class that uses these strategies. For the context, you can inject mock or stub strategy implementations to verify that the context correctly delegates to the strategy and handles the results.

```csharp
// Strategy Pattern Example (from previous modules)
public interface IPaymentStrategy
{
    void ProcessPayment(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void ProcessPayment(decimal amount) => Console.WriteLine($"Processing credit card payment of {amount:C}");
}

public class PayPalPayment : IPaymentStrategy
{
    public void ProcessPayment(decimal amount) => Console.WriteLine($"Processing PayPal payment of {amount:C}");
}

public class PaymentContext
{
    private IPaymentStrategy _paymentStrategy;

    public PaymentContext(IPaymentStrategy strategy)
    {
        _paymentStrategy = strategy;
    }

    public void SetStrategy(IPaymentStrategy strategy)
    {
        _paymentStrategy = strategy;
    }

    public void ExecutePayment(decimal amount)
    {
        _paymentStrategy.ProcessPayment(amount);
    }
}

// Unit Test Example using xUnit and Moq
using Xunit;
using Moq; // Install-Package Moq

public class PaymentContextTests
{
    [Fact]
    public void ExecutePayment_ShouldCallCreditCardStrategy()
    {
        // Arrange
        var mockCreditCardStrategy = new Mock<IPaymentStrategy>();
        var context = new PaymentContext(mockCreditCardStrategy.Object);
        decimal testAmount = 100.0m;

        // Act
        context.ExecutePayment(testAmount);

        // Assert
        // Verify that ProcessPayment was called exactly once with the correct amount
        mockCreditCardStrategy.Verify(s => s.ProcessPayment(testAmount), Times.Once());
    }

    [Fact]
    public void ExecutePayment_ShouldCallPayPalStrategyWhenSet()
    {
        // Arrange
        var mockInitialStrategy = new Mock<IPaymentStrategy>(); // Initial strategy, not important for this test
        var mockPayPalStrategy = new Mock<IPaymentStrategy>();
        var context = new PaymentContext(mockInitialStrategy.Object);
        decimal testAmount = 50.0m;

        // Act
        context.SetStrategy(mockPayPalStrategy.Object); // Change strategy
        context.ExecutePayment(testAmount);

        // Assert
        mockPayPalStrategy.Verify(s => s.ProcessPayment(testAmount), Times.Once());
        // Ensure the initial strategy was not called
        mockInitialStrategy.Verify(s => s.ProcessPayment(It.IsAny<decimal>()), Times.Never());
    }
}
```
In this example, Moq is used to create mock objects for `IPaymentStrategy`. This allows us to verify that `PaymentContext` correctly interacts with its strategy without needing to involve actual payment processing logic.

The **Factory pattern** (or Abstract Factory) often deals with creating objects. When testing a factory, you want to ensure it creates the correct type of object based on the input parameters. If the factory itself has dependencies, you would mock those dependencies. When testing the objects produced by the factory, you would test them as individual units. For example, if you have a `VehicleFactory` that creates `Car` or `Motorcycle` objects, you'd test that `CreateVehicle("Car")` returns an instance of `Car`, and then separately test the `Car` object's behavior.

```csharp
// Factory Pattern Example
public interface IVehicle
{
    string GetDescription();
}

public class Car : IVehicle
{
    public string GetDescription() => "I am a Car.";
}

public class Motorcycle : IVehicle
{
    public string GetDescription() => "I am a Motorcycle.";
}

public class VehicleFactory
{
    public IVehicle CreateVehicle(string type)
    {
        if (type == "Car") return new Car();
        if (type == "Motorcycle") return new Motorcycle();
        throw new ArgumentException("Unknown vehicle type.");
    }
}

// Unit Test Example for Factory
public class VehicleFactoryTests
{
    [Fact]
    public void CreateVehicle_ShouldReturnCarForCarType()
    {
        // Arrange
        var factory = new VehicleFactory();

        // Act
        IVehicle vehicle = factory.CreateVehicle("Car");

        // Assert
        Assert.IsType<Car>(vehicle);
        Assert.Equal("I am a Car.", vehicle.GetDescription());
    }

    [Fact]
    public void CreateVehicle_ShouldReturnMotorcycleForMotorcycleType()
    {
        // Arrange
        var factory = new VehicleFactory();

        // Act
        IVehicle vehicle = factory.CreateVehicle("Motorcycle");

        // Assert
        Assert.IsType<Motorcycle>(vehicle);
        Assert.Equal("I am a Motorcycle.", vehicle.GetDescription());
    }

    [Fact]
    public void CreateVehicle_ShouldThrowArgumentExceptionForUnknownType()
    {
        // Arrange
        var factory = new VehicleFactory();

        // Act & Assert
        Assert.Throws<ArgumentException>(() => factory.CreateVehicle("Boat"));
    }
}
```

The **Decorator pattern** involves wrapping objects to add new responsibilities. When testing decorators, you need to ensure two things: first, that the decorator correctly adds its new behavior, and second, that it correctly delegates to the wrapped component. You can achieve this by creating a mock or stub for the component being decorated and verifying that the decorator calls the component's methods as expected, in addition to performing its own logic.

Common mistakes include not mocking dependencies, leading to integration tests disguised as unit tests, which are slower and harder to debug. Another mistake is testing the pattern itself rather than the specific implementation. For example, you don't need to test that the Strategy pattern *works*; you need to test that *your* `PaymentContext` correctly uses *your* `IPaymentStrategy` implementations. Over-mocking, where every single dependency is mocked, can also make tests brittle and hard to maintain. A safety note: always aim for a balance between isolation and realism. For critical paths, integration tests that involve real components (but potentially faked external services) are also valuable. Dependency Injection is a powerful enabler for testability, as it makes it easy to swap out real dependencies for mocks or stubs during testing.

#### Key concepts
*   **Unit Testing:** Testing individual components (classes or methods) in isolation from their dependencies to verify their behavior.
*   **Integration Testing:** Testing how different parts of a system work together, often involving multiple services or components.
*   **Mocking:** Creating simulated objects that mimic the behavior of real dependencies, allowing the "unit under test" to be isolated. Mocking libraries like Moq or NSubstitute are used for this.
*   **Stubbing:** Providing predetermined responses to method calls on dependencies, typically simpler than mocking as it doesn't involve behavior verification.
*   **Testability:** The ease with which a component can be tested. Design patterns generally improve testability by promoting loose coupling and clear interfaces.
*   **Dependency Injection (DI):** A technique where objects receive their dependencies from an external source rather than creating them themselves, greatly facilitating mocking and stubbing for testing.

#### Hands-on activity
**Testing a Decorator Pattern Implementation**

You have an `INotifier` interface and a `BasicNotifier` implementation. You then create a `LoggingNotifierDecorator` that adds logging capabilities before and after delegating to the wrapped notifier. Your task is to write unit tests for this decorator using xUnit and Moq.

**Starter Code:**
```csharp
using System;

public interface INotifier
{
    void Send(string message);
}

public class BasicNotifier : INotifier
{
    public void Send(string message)
    {
        Console.WriteLine($"Basic Notification: {message}");
    }
}

public class LoggingNotifierDecorator : INotifier
{
    private readonly INotifier _wrappedNotifier;
    private readonly ILogger _logger; // Assume ILogger exists for logging

    public LoggingNotifierDecorator(INotifier wrappedNotifier, ILogger logger)
    {
        _wrappedNotifier = wrappedNotifier;
        _logger = logger;
    }

    public void Send(string message)
    {
        _logger.LogInfo($"Before sending: {message}");
        _wrappedNotifier.Send(message);
        _logger.LogInfo($"After sending: {message}");
    }
}

// Assume this simple ILogger interface and implementation for the exercise
public interface ILogger
{
    void LogInfo(string message);
}

public class ConsoleLogger : ILogger
{
    public void LogInfo(string message)
    {
        Console.WriteLine($"LOG: {message}");
    }
}
```

**Instructions:**
1.  Create a new xUnit test project (`dotnet new xunit`).
2.  Add a reference to the project containing the `INotifier` and `LoggingNotifierDecorator` classes.
3.  Install the `Moq` NuGet package (`dotnet add package Moq`).
4.  Write a test class `LoggingNotifierDecoratorTests`.
5.  Create a test method that verifies:
    *   The `LogInfo` method of the `ILogger` mock is called twice (once before and once after the wrapped notifier's `Send` method).
    *   The `Send` method of the `INotifier` mock is called exactly once with the correct message.

**Test Class Template:**
```csharp
using Xunit;
using Moq; // Requires Moq NuGet package

public class LoggingNotifierDecoratorTests
{
    [Fact]
    public void Send_ShouldLogBeforeAndAfterAndCallWrappedNotifier()
    {
        // Arrange
        var mockWrappedNotifier = new Mock<INotifier>();
        var mockLogger = new Mock<ILogger>();
        var decorator = new LoggingNotifierDecorator(mockWrappedNotifier.Object, mockLogger.Object);
        string testMessage = "Test Message";

        // Act
        decorator.Send(testMessage);

        // Assert
        // 1. Verify logger calls
        // mockLogger.Verify( ... ); // Call count and message content

        // 2. Verify wrapped notifier call
        // mockWrappedNotifier.Verify( ... ); // Call count and message content
    }
}
```

#### Assessment idea
1.  **Question:** You have a `DiscountCalculator` class that uses the Strategy pattern, where different `IDiscountStrategy` implementations (e.g., `SeasonalDiscount`, `LoyaltyDiscount`) are injected. When unit testing `DiscountCalculator`, why is it important to use mock `IDiscountStrategy` objects instead of real ones, and what specifically would you verify on the mock?
    *   **Correct Answer:** It's important to use mock `IDiscountStrategy` objects to ensure that the `DiscountCalculator` is tested in isolation. Using real strategies would turn the unit test into an integration test, making it slower, more complex, and potentially dependent on external factors (like a database for loyalty points). On the mock, you would verify that:
        *   The `CalculateDiscount` method (or similar) of the mock `IDiscountStrategy` is called exactly once when `DiscountCalculator` performs its calculation.
        *   The correct parameters (e.g., `orderTotal`, `customerType`) are passed to the mock strategy's method.
        *   The `DiscountCalculator` correctly uses the return value from the mock strategy.
2.  **Question:** Your application uses an `IUserRepository` interface, and its concrete implementation `SqlUserRepository` depends on a `DbContext`. When unit testing a `UserService` that consumes `IUserRepository`, what is the best approach to handle the `IUserRepository` dependency, and why?
    *   **Correct Answer:** The best approach is to inject a mock `IUserRepository` into the `UserService`. This allows you to test the `UserService`'s logic (e.g., user creation, retrieval, updates) without needing a real database connection or `DbContext`. You would configure the mock `IUserRepository` to return specific test data or to verify that certain methods were called. This isolates the `UserService`'s behavior, making the test fast, reliable, and independent of external infrastructure.

#### AI generation note
Create a 10-12 minute live coding video focusing on unit testing with xUnit and Moq. Start by presenting the `PaymentContext` and `IPaymentStrategy` example. Write a unit test for `PaymentContext`, demonstrating how to create a `Mock<IPaymentStrategy>` and use `Verify()` to assert that the `ProcessPayment` method was called. Then, present the `LoggingNotifierDecorator` example. Write a unit test for `LoggingNotifierDecorator`, showing how to mock both the wrapped `INotifier` and the `ILogger`, and use `Verify()` to assert that both dependencies were interacted with correctly (e.g., `LogInfo` called twice, `Send` called once). Emphasize the benefits of isolation and how patterns facilitate testability. Use a split-screen view showing the code and the test runner output.

---

### Chapter 6.5 — Refactoring to Design Patterns & Continuous Improvement

#### Learning objectives
*   Understand the concept of refactoring and its role in improving code quality.
*   Identify common code smells that indicate opportunities to introduce design patterns.
*   Learn practical techniques for refactoring existing code to incorporate specific design patterns.
*   Develop a mindset for continuous code improvement and pattern application.

#### Detailed lesson content
Refactoring is the process of restructuring existing computer code—changing its internal structure without changing its external behavior—to improve its readability, maintainability, and scalability. It's not about adding new features but about improving the design of existing ones. Design patterns play a crucial role in refactoring, as they provide well-established solutions to common design problems. Recognizing when and how to refactor existing code to leverage these patterns is a hallmark of an experienced developer.

The first step in refactoring to patterns is identifying **code smells**. These are surface indications that usually correspond to a deeper problem in the system. Common code smells that often point to opportunities for design patterns include:
*   **Long Method / Large Class:** A method or class that does too much. This often suggests a violation of the Single Responsibility Principle and can be refactored using patterns like Strategy, Command, or Facade to delegate responsibilities.
*   **Switch Statements / Conditional Complexity:** Large `switch` or `if-else if` statements that dispatch logic based on a type or value. This is a classic indicator for the **Strategy**, **State**, or **Factory Method** patterns, where polymorphism can replace explicit conditionals.
*   **Duplicate Code:** Identical or very similar code blocks appearing in multiple places. This can often be addressed by extracting common logic into a shared component, potentially using a Template Method or Strategy.
*   **Feature Envy:** A method in one class that seems more interested in the data of another class than its own. This suggests that the method might belong in the other class, promoting a richer domain model or a Visitor pattern.
*   **Data Clumps:** Groups of data items that always appear together (e.g., `street`, `city`, `zipCode`). This is an opportunity to create a **Value Object** (like `Address`), often implemented with C# records.

Let's consider a practical example: refactoring a complex `switch` statement into a **Strategy pattern**. Imagine an order processing system where shipping costs are calculated differently based on the destination country.

```csharp
// Original code with a "Switch Statement" code smell
public class OrderProcessor
{
    public decimal CalculateShippingCost(string country, decimal orderTotal)
    {
        decimal shippingCost = 0;
        switch (country)
        {
            case "USA":
                shippingCost = orderTotal * 0.05m; // 5% for USA
                if (orderTotal > 100) shippingCost = 0; // Free shipping over $100
                break;
            case "Canada":
                shippingCost = orderTotal * 0.10m + 5; // 10% + $5 for Canada
                break;
            case "UK":
                shippingCost = orderTotal * 0.08m + 10; // 8% + £10 for UK
                break;
            default:
                shippingCost = 20; // Default flat rate
                break;
        }
        return shippingCost;
    }
}
```
This method is becoming long, hard to extend (what if a new country is added?), and violates the Open/Closed Principle (OCP). To refactor this to a Strategy pattern:

1.  **Extract Interface:** Define an interface `IShippingCostStrategy` with a method `Calculate(decimal orderTotal)`.
2.  **Create Concrete Strategies:** Create separate classes for each country (e.g., `UsaShippingStrategy`, `CanadaShippingStrategy`, `UkShippingStrategy`), each implementing `IShippingCostStrategy` and encapsulating its specific logic.
3.  **Introduce Context:** Modify `OrderProcessor` to take an `IShippingCostStrategy` in its constructor (or via a setter) and delegate the calculation to it.
4.  **Introduce Strategy Factory (Optional but Recommended):** Create a `ShippingStrategyFactory` to resolve the correct strategy based on the country string, often using Dependency Injection.

```csharp
// Refactored code using Strategy Pattern
using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection; // For DI in factory

// 1. Extract Interface
public interface IShippingCostStrategy
{
    decimal Calculate(decimal orderTotal);
}

// 2. Create Concrete Strategies
public class UsaShippingStrategy : IShippingCostStrategy
{
    public decimal Calculate(decimal orderTotal)
    {
        if (orderTotal > 100) return 0;
        return orderTotal * 0.05m;
    }
}

public class CanadaShippingStrategy : IShippingCostStrategy
{
    public decimal Calculate(decimal orderTotal)
    {
        return orderTotal * 0.10m + 5;
    }
}

public class UkShippingStrategy : IShippingCostStrategy
{
    public decimal Calculate(decimal orderTotal)
    {
        return orderTotal * 0.08m + 10;
    }
}

public class DefaultShippingStrategy : IShippingCostStrategy
{
    public decimal Calculate(decimal orderTotal)
    {
        return 20; // Flat rate
    }
}

// 3. Introduce Context
public class OrderProcessorRefactored
{
    private readonly IShippingCostStrategy _shippingStrategy;

    public OrderProcessorRefactored(IShippingCostStrategy shippingStrategy)
    {
        _shippingStrategy = shippingStrategy;
    }

    public decimal GetShippingCost(decimal orderTotal)
    {
        return _shippingStrategy.Calculate(orderTotal);
    }
}

// 4. Introduce Strategy Factory (using DI for modern .NET)
public class ShippingStrategyFactory
{
    private readonly IServiceProvider _serviceProvider;

    public ShippingStrategyFactory(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public IShippingCostStrategy GetStrategy(string country)
    {
        return country switch
        {
            "USA" => _serviceProvider.GetService<UsaShippingStrategy>(),
            "Canada" => _serviceProvider.GetService<CanadaShippingStrategy>(),
            "UK" => _serviceProvider.GetService<UkShippingStrategy>(),
            _ => _serviceProvider.GetService<DefaultShippingStrategy>()
        } ?? throw new InvalidOperationException($"Strategy for country '{country}' not registered.");
    }
}

public class RefactoringDemo
{
    public static void Main(string[] args)
    {
        // Setup DI container
        var services = new ServiceCollection();
        services.AddTransient<UsaShippingStrategy>();
        services.AddTransient<CanadaShippingStrategy>();
        services.AddTransient<UkShippingStrategy>();
        services.AddTransient<DefaultShippingStrategy>();
        services.AddTransient<ShippingStrategyFactory>();
        var serviceProvider = services.BuildServiceProvider();

        // Use the factory to get strategies
        var factory = serviceProvider.GetService<ShippingStrategyFactory>();

        var usaProcessor = new OrderProcessorRefactored(factory.GetStrategy("USA"));
        Console.WriteLine($"USA Shipping Cost ($50): {usaProcessor.GetShippingCost(50m):C}"); // 2.50
        Console.WriteLine($"USA Shipping Cost ($150): {usaProcessor.GetShippingCost(150m):C}"); // 0.00 (free)

        var canadaProcessor = new OrderProcessorRefactored(factory.GetStrategy("Canada"));
        Console.WriteLine($"Canada Shipping Cost ($50): {canadaProcessor.GetShippingCost(50m):C}"); // 10.00

        var unknownProcessor = new OrderProcessorRefactored(factory.GetStrategy("Mexico"));
        Console.WriteLine($"Mexico Shipping Cost ($50): {unknownProcessor.GetShippingCost(50m):C}"); // 20.00 (default)
    }
}
```
This refactoring significantly improves the design. Adding a new country now only requires creating a new strategy class and updating the factory, adhering to OCP. The `OrderProcessorRefactored` is simpler and more focused.

Refactoring is an ongoing process, not a one-time event. It should be integrated into the daily development workflow. Before making any significant refactoring, ensure you have a robust suite of automated tests. This is your safety net, guaranteeing that the external behavior of the code remains unchanged. When refactoring, proceed in small, incremental steps. Each step should be small enough to be easily undone if something goes wrong and should ideally leave the code in a working state.

Common mistakes include "big bang" refactoring (trying to refactor everything at once), refactoring without tests, or refactoring for the sake of it without a clear goal. A safety note: Always use version control, commit frequently, and ensure your tests pass after each small refactoring step. The goal is continuous improvement, making the codebase incrementally better and more adaptable to future changes. By consistently applying refactoring techniques and leveraging design patterns, developers can transform complex, brittle code into clean, flexible, and maintainable systems.

#### Key concepts
*   **Refactoring:** The process of restructuring existing code without changing its external behavior, aimed at improving internal structure, readability, and maintainability.
*   **Code Smells:** Indicators in the code that suggest underlying design problems and potential opportunities for refactoring, such as Long Method, Switch Statements, or Duplicate Code.
*   **Open/Closed Principle (OCP):** A SOLID principle stating that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. Design patterns like Strategy and Decorator help achieve OCP.
*   **Incremental Refactoring:** Performing refactoring in small, manageable steps, ensuring that the system remains functional and tested throughout the process.
*   **Automated Tests:** Essential for refactoring, providing a safety net to ensure that behavioral changes are not introduced during code restructuring.

#### Hands-on activity
**Refactoring a "Long Method" with Conditional Logic to Strategy**

You have a `DiscountCalculator` class with a single method that calculates discounts based on customer type using a series of `if-else if` statements. Your task is to refactor this method to use the Strategy pattern.

**Starter Code:**
```csharp
using System;

public class DiscountCalculator
{
    public decimal CalculateDiscount(string customerType, decimal purchaseAmount)
    {
        decimal discount = 0;

        if (customerType == "Regular")
        {
            if (purchaseAmount > 100)
            {
                discount = purchaseAmount * 0.10m; // 10% for regular customers over $100
            }
            else
            {
                discount = purchaseAmount * 0.05m; // 5% for regular customers
            }
        }
        else if (customerType == "Premium")
        {
            if (purchaseAmount > 500)
            {
                discount = purchaseAmount * 0.20m; // 20% for premium customers over $500
            }
            else
            {
                discount = purchaseAmount * 0.15m; // 15% for premium customers
            }
        }
        else if (customerType == "VIP")
        {
            discount = purchaseAmount * 0.25m; // 25% for VIP customers, no minimum
        }
        else
        {
            discount = 0; // No discount for unknown types
        }

        return discount;
    }

    public static void Main(string[] args)
    {
        DiscountCalculator calculator = new DiscountCalculator();
        Console.WriteLine($"Regular ($120): {calculator.CalculateDiscount("Regular", 120):C}"); // Expected: 12.00
        Console.WriteLine($"Premium ($400): {calculator.CalculateDiscount("Premium", 400):C}"); // Expected: 60.00
        Console.WriteLine($"VIP ($200): {calculator.CalculateDiscount("VIP", 200):C}");     // Expected: 50.00
        Console.WriteLine($"Guest ($50): {calculator.CalculateDiscount("Guest", 50):C}");   // Expected: 0.00
    }
}
```

**Instructions:**
1.  Define an interface `IDiscountStrategy` with a method `decimal Calculate(decimal purchaseAmount)`.
2.  Create concrete strategy classes: `RegularDiscountStrategy`, `PremiumDiscountStrategy`, `VipDiscountStrategy`, and `NoDiscountStrategy`. Each should implement `IDiscountStrategy` and encapsulate the discount logic for its respective customer type.
3.  Modify the `DiscountCalculator` class to accept an `IDiscountStrategy` in its constructor and delegate the discount calculation to it.
4.  Create a `DiscountStrategyFactory` class that takes a `string customerType` and returns the appropriate `IDiscountStrategy` instance. You can use a `switch` expression or a dictionary for mapping.
5.  Update the `Main` method to use the `DiscountStrategyFactory` to get the correct strategy and then pass it to the `DiscountCalculator`.
6.  (Optional, but recommended): Add `Microsoft.Extensions.DependencyInjection` and register your strategies with the DI container, using the factory to resolve them.

#### Assessment idea
1.  **Question:** You observe a C# class `ReportGenerator` that has a single large method `GenerateReport(ReportType type)` containing a massive `if-else if` structure. Inside each `if` block, there's logic to fetch data, format it, and export it to a specific format (PDF, Excel, CSV). Explain which code smell is present and how refactoring using the **Strategy pattern** could improve the design, adhering to the Open/Closed Principle.
    *   **Correct Answer:** The code exhibits the **"Long Method"** and **"Conditional Complexity (Switch Statement)"** code smells. The single method is doing too much and is difficult to extend. Refactoring to the Strategy pattern would involve:
        1.  Defining an `IReportExportStrategy` interface with a method like `Export(ReportData data)`.
        2.  Creating concrete strategy classes (e.g., `PdfExportStrategy`, `ExcelExportStrategy`, `CsvExportStrategy`), each encapsulating the logic for exporting to its specific format.
        3.  Modifying `ReportGenerator` to accept an `IReportExportStrategy` and delegate the export task to it.
        This approach adheres to the Open/Closed Principle because adding a new report format (e.g., JSON) would only require creating a new `IReportExportStrategy` implementation and possibly updating a factory, without modifying the existing `ReportGenerator` class.
2.  **Question:** Your team is about to start a major refactoring effort on a legacy C# codebase. What is the single most important prerequisite before beginning any significant refactoring, and why is it crucial?
    *   **Correct Answer:** The single most important prerequisite is a **comprehensive suite of automated tests** (unit, integration, and potentially end-to-end tests). This is crucial because refactoring involves changing the internal structure of the code without altering its external behavior. Automated tests act as a safety net, providing immediate feedback if a refactoring step inadvertently introduces a bug or changes the system's functionality. Without tests, refactoring becomes a high-risk activity, often leading to regressions and a loss of confidence in the codebase.

#### AI generation note
Create a 12-15 minute live coding video walkthrough. Start by showing the initial `DiscountCalculator` code with the `if-else if` chain and discuss the code smells. Then, incrementally refactor it:
1.  Define the `IDiscountStrategy` interface.
2.  Implement `RegularDiscountStrategy`, `PremiumDiscountStrategy`, `VipDiscountStrategy`, and `NoDiscountStrategy` classes.
3.  Modify `DiscountCalculator` to use the injected strategy.
4.  Show how to create a `DiscountStrategyFactory` to select the correct strategy.
5.  Demonstrate the usage with `Main` method, showing how the output remains the same but the code structure is vastly improved.
Throughout the refactoring, highlight how each step addresses the code smells and improves OCP. Use a split-screen view for code and console output. Conclude with a reflection prompt on how this refactoring makes the code more extensible.

---

## Final Capstone Project

Congratulations on reaching the final stage of the "Design Patterns in C# and .NET" course! This capstone project is your opportunity to synthesize the knowledge and skills you've acquired across all modules. You will apply various design patterns and SOLID principles to build a practical application, demonstrating your ability to design robust, maintainable, and extensible software. Choose one of the three project options below. Each project is designed to challenge you and reinforce your understanding of object-oriented design patterns in a real-world C# context.

### Project Option 1: Extensible Notification System

**Project Description:**
Develop a flexible notification system that can send messages through multiple channels (e.g., Email, SMS, Push Notification). The system should be easily extensible to add new notification channels or message types without modifying existing code. This project emphasizes the Open/Closed Principle and various behavioral and creational patterns.

**Core Requirements:**
1.  **Notification Interface:** Define a common interface for all notification types (e.g., `INotification`) that includes properties like `Recipient`, `Message`, and `Subject` (for email).
2.  **Channel Strategy:** Implement a `INotificationSender` interface or abstract class. Create concrete implementations for at least three channels: `EmailNotificationSender`, `SmsNotificationSender`, and `PushNotificationSender`. Use the **Strategy Pattern** to allow clients to choose or change the sending mechanism at runtime.
3.  **Notification Factory:** Implement a **Factory Method Pattern** or **Abstract Factory Pattern** to create different types of notifications (e.g., `EmailNotification`, `SmsNotification`, `PushNotification`) based on input parameters. This should decouple the client from concrete notification classes.
4.  **Observer for Status Updates:** Implement the **Observer Pattern** to notify interested parties (e.g., a logging service, a UI component) about the status of a sent notification (e.g., `Sent`, `Failed`, `Delivered`).
5.  **Configuration:** Allow configuration of sender details (e.g., email server, SMS API key) without hardcoding them.
6.  **Client Application:** Create a simple console application or a minimal ASP.NET Core endpoint that demonstrates sending notifications through different channels and observing their status.

**Stretch Goals:**
*   Implement a **Decorator Pattern** to add additional functionality to notifications, such as encryption or logging, before sending, without altering the core sender logic.
*   Introduce a **Command Pattern** for scheduling notifications to be sent at a later time or retrying failed notifications.
*   Integrate a real third-party library for sending emails (e.g., MailKit) or SMS (e.g., Twilio) to make the project more realistic.
*   Add a priority mechanism for notifications, using a different strategy for high-priority messages.

**Evaluation Criteria:**
*   Correct implementation and application of the Strategy, Factory Method/Abstract Factory, and Observer patterns.
*   Adherence to SOLID principles, especially the Open/Closed Principle (ease of adding new channels/notification types).
*   Clear separation of concerns and modular design.
*   Readability and maintainability of the C# code.
*   Proper error handling and logging.
*   Demonstration of the system's functionality through the client application.

**Estimated Time:** 15-20 hours

### Project Option 2: Flexible Order Processing Workflow

**Project Description:**
Design and implement a simplified e-commerce order processing system. The system should manage order states (e.g., `Pending`, `Processing`, `Shipped`, `Delivered`, `Cancelled`) and allow for different payment methods and shipping options. The focus is on managing complex workflows and state transitions using design patterns.

**Core Requirements:**
1.  **Order Entity:** Define an `Order` class with properties like `OrderId`, `Items`, `TotalAmount`, `PaymentMethod`, `ShippingMethod`, and `OrderStatus`.
2.  **State Management:** Implement the **State Pattern** to manage the lifecycle of an order. Each order status should be represented by a concrete state class (e.g., `PendingState`, `ProcessingState`, `ShippedState`), and the `Order` object should delegate state-specific behavior to its current state object.
3.  **Payment Strategy:** Use the **Strategy Pattern** to encapsulate different payment methods (e.g., `CreditCardPayment`, `PayPalPayment`, `BankTransferPayment`). The order processing logic should be able to switch between these strategies seamlessly.
4.  **Shipping Strategy:** Similarly, apply the **Strategy Pattern** for different shipping methods (e.g., `StandardShipping`, `ExpressShipping`, `InternationalShipping`), each with its own cost calculation or delivery logic.
5.  **Command for Actions:** Implement the **Command Pattern** for actions that can be performed on an order (e.g., `PlaceOrderCommand`, `ProcessPaymentCommand`, `ShipOrderCommand`, `CancelOrderCommand`). This allows for decoupling the invoker from the receiver and supports features like undo/redo (optional).
6.  **Client Application:** Develop a console application that simulates placing an order, processing it through various states, applying different payment/shipping methods, and executing commands.

**Stretch Goals:**
*   Implement a **Facade Pattern** to provide a simplified interface to the complex order processing subsystem for external clients.
*   Use the **Observer Pattern** to notify a warehouse system when an order is shipped or a customer when their order status changes.
*   Introduce a **Template Method Pattern** for a generic `ProcessOrderTemplate` that defines the skeleton of an algorithm, allowing subclasses to override specific steps (e.g., `ValidateOrder`, `CalculateShipping`, `UpdateInventory`).
*   Add persistence for orders using a simple in-memory store or a lightweight database.

**Evaluation Criteria:**
*   Correct application and understanding of the State, Strategy, and Command patterns.
*   Effective management of order lifecycle and state transitions.
*   Adherence to SOLID principles, particularly the Single Responsibility Principle and Open/Closed Principle.
*   Clear, maintainable, and well-structured C# code.
*   Demonstration of the order processing workflow through the client application.

**Estimated Time:** 18-22 hours

### Project Option 3: Document Converter & Editor Features

**Project Description:**
Create a system that can convert documents between different formats (e.g., Markdown to HTML, JSON to XML) and apply various editing features (e.g., logging, compression, spell-checking) in a flexible manner. This project focuses on structural and behavioral patterns to manage complex transformations and feature additions.

**Core Requirements:**
1.  **Document Representation:** Define a simple `Document` class that holds content (e.g., as a string) and its format type (e.g., `Markdown`, `Html`, `Json`, `Xml`).
2.  **Converter Strategy:** Implement an `IDocumentConverter` interface. Create concrete implementations for at least two conversion types, such as `MarkdownToHtmlConverter` and `JsonToXmlConverter`. Use the **Strategy Pattern** to allow dynamic selection of the conversion algorithm.
3.  **Feature Decorators:** Apply the **Decorator Pattern** to add optional features to the document converters. Create decorators like `LoggingConverterDecorator` (logs conversion details) and `CompressionConverterDecorator` (compresses output). These should wrap the core converter and add functionality without modifying it.
4.  **Facade for Complex Operations:** Implement a **Facade Pattern** to simplify the interaction with the conversion subsystem. This facade should provide a high-level method like `ConvertDocument(Document doc, DocumentFormat targetFormat, bool enableLogging, bool enableCompression)`.
5.  **Adapter for External Tool (Simulated):** Simulate the integration of an external, incompatible document processing library. Create an `IExternalDocumentProcessor` interface and an `ExternalLibraryAdapter` that adapts this interface to your `IDocumentConverter` or `IDocumentProcessor` interface, demonstrating the **Adapter Pattern**.
6.  **Client Application:** Build a console application that allows users to input document content, select source/target formats, apply decorators, and perform conversions via the facade.

**Stretch Goals:**
*   Implement a **Builder Pattern** for constructing complex `Document` objects or configuring converter chains with multiple decorators.
*   Use the **Template Method Pattern** for a generic `DocumentProcessingTemplate` that outlines common steps for all conversions (e.g., `LoadContent`, `TransformContent`, `SaveContent`), allowing specific converters to implement details.
*   Add a **Composite Pattern** if documents could contain sub-documents or elements, allowing uniform treatment of individual and composite document parts.
*   Implement basic error handling for invalid document formats or conversion failures.

**Evaluation Criteria:**
*   Correct application and understanding of the Strategy, Decorator, Facade, and Adapter patterns.
*   Demonstration of how decorators add functionality dynamically and transparently.
*   Adherence to SOLID principles, particularly the Open/Closed Principle (easy to add new converters or decorators) and Single Responsibility Principle.
*   Clean, modular, and extensible C# code.
*   Proof of concept through the client application, showing various conversions and feature applications.

**Estimated Time:** 16-20 hours

---

## Final Examination

This final examination assesses your comprehensive understanding of design patterns in C# and .NET, covering all modules from foundational concepts to specific creational, structural, and behavioral patterns, as well as SOLID principles and refactoring. Answer all questions thoroughly, providing code examples where requested.

**Total Questions:** 15
**Passing Score:** 70%

### Section 1: Concept Definitions (4 Questions)

1.  **Question:** Explain the core purpose of the **Singleton Pattern** and describe a common scenario where its use is appropriate in a C# application. What is a potential drawback of using the Singleton Pattern?
    *   **Answer:** The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance. Its core purpose is to control object creation, restricting the instantiation of a class to a single object. A common scenario for its use in C# is for logging services, configuration managers, or database connection pools, where a single, shared resource needs to be managed globally to prevent conflicts or excessive resource consumption. A potential drawback is that it can introduce tight coupling, make unit testing more difficult (as the global state can be hard to isolate), and violate the Single Responsibility Principle if the class also handles its own creation logic.

2.  **Question:** Describe the **Open/Closed Principle (OCP)** from the SOLID principles. Provide a brief C# code example or pseudocode illustrating a violation of OCP and how to refactor it to adhere to the principle.
    *   **Answer:** The Open/Closed Principle states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. This means you should be able to add new functionality without altering existing, working code.
        *   **OCP Violation Example:**
            ```csharp
            public class ReportGenerator
            {
                public void GenerateReport(string reportType)
                {
                    if (reportType == "PDF")
                    {
                        // Logic to generate PDF report
                        Console.WriteLine("Generating PDF Report...");
                    }
                    else if (reportType == "Excel")
                    {
                        // Logic to generate Excel report
                        Console.WriteLine("Generating Excel Report...");
                    }
                    // What if a new report type (e.g., CSV) is needed?
                    // This method would need to be modified.
                }
            }
            ```
        *   **Refactored to adhere to OCP (using Strategy Pattern):**
            ```csharp
            public interface IReportStrategy
            {
                void Generate();
            }

            public class PdfReportStrategy : IReportStrategy
            {
                public void Generate() => Console.WriteLine("Generating PDF Report...");
            }

            public class ExcelReportStrategy : IReportStrategy
            {
                public void Generate() => Console.WriteLine("Generating Excel Report...");
            }

            public class ReportGenerator
            {
                private readonly IReportStrategy _strategy;
                public ReportGenerator(IReportStrategy strategy)
                {
                    _strategy = strategy;
                }
                public void GenerateReport()
                {
                    _strategy.Generate();
                }
            }
            // To add a new report type (e.g., CSV), you create a new CsvReportStrategy
            // and don't modify ReportGenerator. It's open for extension, closed for modification.
            ```

3.  **Question:** What problem does the **Adapter Pattern** solve? Provide a real-world analogy and explain how it applies in a C# software context.
    *   **Answer:** The Adapter Pattern solves the problem of incompatible interfaces. It allows objects with incompatible interfaces to collaborate by converting the interface of one class into another interface that clients expect.
        *   **Real-world analogy:** A power adapter for electronics. You have a device with a specific plug (the "adaptee" interface) and a wall socket with a different type of outlet (the "target" interface). The power adapter allows the device to plug into the socket by converting the physical interface.
        *   **C# software context:** Imagine you have an existing library (`LegacyLogger`) with a method `LogMessage(string message)` and your new application expects an `ILogger` interface with a `Log(string message, LogLevel level)` method. You can create a `LegacyLoggerAdapter` class that implements `ILogger` and internally calls `LegacyLogger.LogMessage`, effectively adapting the legacy logger to your new interface. This allows your new application to use the old library without modifying the `LegacyLogger` itself.

4.  **Question:** Differentiate between the **Factory Method Pattern** and the **Abstract Factory Pattern**. When would you choose one over the other?
    *   **Answer:**
        *   **Factory Method Pattern:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate. It defers instantiation to concrete subclasses. It's used when a class cannot anticipate the class of objects it needs to create, or when a class wants its subclasses to specify the objects it creates. It typically deals with creating a *single product* type.
        *   **Abstract Factory Pattern:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes. It's used when a system must be independent of how its products are created, composed, and represented, or when a family of product objects is designed to be used together. It deals with creating *multiple related product types* (a "family" of products).
        *   **Choice:** You would choose the **Factory Method Pattern** when your system needs to create different variations of a *single type* of object, and the decision of which variation to create can be delegated to subclasses. For example, creating different types of `Document` objects (e.g., `PdfDocument`, `WordDocument`) from a `DocumentCreator` base class. You would choose the **Abstract Factory Pattern** when you need to create *families of related objects* that must work together, and you want to ensure that only objects from the same family are used. For example, creating a set of UI elements (Button, Checkbox, Textbox) that all belong to a specific theme (e.g., `WindowsUIFactory` vs. `MacOSUIFactory`).

### Section 2: Code Tracing and Analysis (3 Questions)

5.  **Question:** Analyze the following C# code snippet that implements a simplified **Observer Pattern**. What will be the exact output printed to the console when the `Main` method is executed?
    ```csharp
    using System;
    using System.Collections.Generic;

    public interface IObserver
    {
        void Update(string message);
    }

    public class Subject
    {
        private List<IObserver> _observers = new List<IObserver>();
        private string _state;

        public void Attach(IObserver observer)
        {
            _observers.Add(observer);
        }

        public void Detach(IObserver observer)
        {
            _observers.Remove(observer);
        }

        public void SetState(string newState)
        {
            _state = newState;
            NotifyObservers();
        }

        private void NotifyObservers()
        {
            foreach (var observer in _observers)
            {
                observer.Update($"Subject state changed to: {_state}");
            }
        }
    }

    public class ConcreteObserverA : IObserver
    {
        private string _name;
        public ConcreteObserverA(string name) { _name = name; }
        public void Update(string message)
        {
            Console.WriteLine($"Observer {_name} received: {message}");
        }
    }

    public class ConcreteObserverB : IObserver
    {
        private string _name;
        public ConcreteObserverB(string name) { _name = name; }
        public void Update(string message)
        {
            Console.WriteLine($"Observer {_name} processed: {message.ToUpper()}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Subject subject = new Subject();

            ConcreteObserverA observer1 = new ConcreteObserverA("Alpha");
            ConcreteObserverB observer2 = new ConcreteObserverB("Beta");
            ConcreteObserverA observer3 = new ConcreteObserverA("Gamma");

            subject.Attach(observer1);
            subject.Attach(observer2);
            subject.Attach(observer3);

            subject.SetState("Initial");
            subject.Detach(observer2);
            subject.SetState("Updated");
        }
    }
    ```
    *   **Answer:**
        ```
        Observer Alpha received: Subject state changed to: Initial
        Observer Beta processed: SUBJECT STATE CHANGED TO: INITIAL
        Observer Gamma received: Subject state changed to: Initial
        Observer Alpha received: Subject state changed to: Updated
        Observer Gamma received: Subject state changed to: Updated
        ```
        **Explanation:**
        1.  The `Subject` is created.
        2.  Three observers (`observer1`, `observer2`, `observer3`) are created.
        3.  All three observers are attached to the subject.
        4.  `subject.SetState("Initial")` is called. This updates the subject's internal state and then calls `NotifyObservers()`.
            *   `observer1` (Alpha) receives "Subject state changed to: Initial".
            *   `observer2` (Beta) receives "Subject state changed to: Initial" and converts it to uppercase.
            *   `observer3` (Gamma) receives "Subject state changed to: Initial".
        5.  `subject.Detach(observer2)` removes `observer2` from the list of subscribers.
        6.  `subject.SetState("Updated")` is called. This updates the subject's internal state to "Updated" and calls `NotifyObservers()`.
            *   Only `observer1` (Alpha) and `observer3` (Gamma) are still attached.
            *   `observer1` (Alpha) receives "Subject state changed to: Updated".
            *   `observer3` (Gamma) receives "Subject state changed to: Updated".
            *   `observer2` (Beta) does not receive an update because it was detached.

6.  **Question:** Consider the following C# code snippet that uses the **Decorator Pattern**. What will be the output of the `Main` method, and what is the final cost reported?
    ```csharp
    using System;

    public interface ICoffee
    {
        string GetDescription();
        double GetCost();
    }

    public class BasicCoffee : ICoffee
    {
        public string GetDescription() => "Basic Coffee";
        public double GetCost() => 2.00;
    }

    public abstract class CoffeeDecorator : ICoffee
    {
        protected ICoffee _coffee;
        public CoffeeDecorator(ICoffee coffee) { _coffee = coffee; }
        public virtual string GetDescription() => _coffee.GetDescription();
        public virtual double GetCost() => _coffee.GetCost();
    }

    public class MilkDecorator : CoffeeDecorator
    {
        public MilkDecorator(ICoffee coffee) : base(coffee) { }
        public override string GetDescription() => base.GetDescription() + ", Milk";
        public override double GetCost() => base.GetCost() + 0.50;
    }

    public class SugarDecorator : CoffeeDecorator
    {
        public SugarDecorator(ICoffee coffee) : base(coffee) { }
        public override string GetDescription() => base.GetDescription() + ", Sugar";
        public override double GetCost() => base.GetCost() + 0.20;
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            ICoffee myCoffee = new BasicCoffee();
            Console.WriteLine($"Description: {myCoffee.GetDescription()}, Cost: {myCoffee.GetCost():C}");

            myCoffee = new MilkDecorator(myCoffee);
            Console.WriteLine($"Description: {myCoffee.GetDescription()}, Cost: {myCoffee.GetCost():C}");

            myCoffee = new SugarDecorator(myCoffee);
            Console.WriteLine($"Description: {myCoffee.GetDescription()}, Cost: {myCoffee.GetCost():C}");
        }
    }
    ```
    *   **Answer:**
        ```
        Description: Basic Coffee, Cost: $2.00
        Description: Basic Coffee, Milk, Cost: $2.50
        Description: Basic Coffee, Milk, Sugar, Cost: $2.70
        ```
        **Explanation:**
        1.  `myCoffee` is initially a `BasicCoffee`. Its description is "Basic Coffee" and cost is $2.00.
        2.  `myCoffee` is then wrapped by `MilkDecorator`. The `MilkDecorator`'s `GetDescription` calls the base coffee's description and appends ", Milk". Its `GetCost` calls the base coffee's cost and adds $0.50. So, "Basic Coffee, Milk" and $2.00 + $0.50 = $2.50.
        3.  Finally, this `MilkDecorator`-wrapped coffee is wrapped by `SugarDecorator`. The `SugarDecorator`'s `GetDescription` calls the *current* `myCoffee`'s description (which is "Basic Coffee, Milk") and appends ", Sugar". Its `GetCost` calls the *current* `myCoffee`'s cost (which is $2.50) and adds $0.20. So, "Basic Coffee, Milk, Sugar" and $2.50 + $0.20 = $2.70.

7.  **Question:** Examine the following C# code that implements a simplified **Strategy Pattern** for calculating shipping costs. What will be the output when the `Main` method is executed?
    ```csharp
    using System;

    public interface IShippingStrategy
    {
        double CalculateCost(double weight);
    }

    public class StandardShipping : IShippingStrategy
    {
        public double CalculateCost(double weight) => 5.00 + (weight * 0.50); // Base + 0.50 per kg
    }

    public class ExpressShipping : IShippingStrategy
    {
        public double CalculateCost(double weight) => 15.00 + (weight * 1.20); // Base + 1.20 per kg
    }

    public class InternationalShipping : IShippingStrategy
    {
        public double CalculateCost(double weight) => 25.00 + (weight * 2.00); // Base + 2.00 per kg
    }

    public class Order
    {
        private IShippingStrategy _shippingStrategy;
        private double _orderWeight;

        public Order(double weight)
        {
            _orderWeight = weight;
        }

        public void SetShippingStrategy(IShippingStrategy strategy)
        {
            _shippingStrategy = strategy;
        }

        public double GetShippingCost()
        {
            if (_shippingStrategy == null)
            {
                throw new InvalidOperationException("Shipping strategy not set.");
            }
            return _shippingStrategy.CalculateCost(_orderWeight);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Order order = new Order(10.0); // 10 kg order

            order.SetShippingStrategy(new StandardShipping());
            Console.WriteLine($"Standard Shipping Cost: {order.GetShippingCost():C}");

            order.SetShippingStrategy(new ExpressShipping());
            Console.WriteLine($"Express Shipping Cost: {order.GetShippingCost():C}");

            order.SetShippingStrategy(new InternationalShipping());
            Console.WriteLine($"International Shipping Cost: {order.GetShippingCost():C}");
        }
    }
    ```
    *   **Answer:**
        ```
        Standard Shipping Cost: $10.00
        Express Shipping Cost: $27.00
        International Shipping Cost: $45.00
        ```
        **Explanation:**
        1.  An `Order` for 10 kg is created.
        2.  **Standard Shipping:** `SetShippingStrategy` is called with `StandardShipping`. `CalculateCost` for 10 kg is `5.00 + (10 * 0.50) = 5.00 + 5.00 = 10.00`.
        3.  **Express Shipping:** `SetShippingStrategy` is called with `ExpressShipping`. `CalculateCost` for 10 kg is `15.00 + (10 * 1.20) = 15.00 + 12.00 = 27.00`.
        4.  **International Shipping:** `SetShippingStrategy` is called with `InternationalShipping`. `CalculateCost` for 10 kg is `25.00 + (10 * 2.00) = 25.00 + 20.00 = 45.00`.

### Section 3: Code Writing (4 Questions)

8.  **Question:** Implement the **Singleton Pattern** in C# for a `Logger` class. Ensure it is thread-safe and provides a `Log(string message)` method.
    *   **Answer:**
        ```csharp
        using System;
        using System.IO;

        public sealed class Logger
        {
            private static Logger _instance = null;
            private static readonly object _lock = new object();
            private readonly string _logFilePath = "application.log";

            // Private constructor to prevent direct instantiation
            private Logger()
            {
                // Ensure log file exists or is created
                if (!File.Exists(_logFilePath))
                {
                    File.Create(_logFilePath).Dispose();
                }
                Console.WriteLine("Logger instance created.");
            }

            public static Logger Instance
            {
                get
                {
                    // Double-checked locking for thread safety
                    if (_instance == null)
                    {
                        lock (_lock)
                        {
                            if (_instance == null)
                            {
                                _instance = new Logger();
                            }
                        }
                    }
                    return _instance;
                }
            }

            public void Log(string message)
            {
                string logEntry = $"{DateTime.Now}: {message}";
                File.AppendAllText(_logFilePath, logEntry + Environment.NewLine);
                Console.WriteLine($"Logged: {logEntry}");
            }
        }

        // Example Usage:
        // public class Program
        // {
        //     public static void Main(string[] args)
        //     {
        //         Logger.Instance.Log("Application started.");
        //         Logger.Instance.Log("Processing data...");
        //         // Verify that it's the same instance
        //         Logger anotherLogger = Logger.Instance;
        //         anotherLogger.Log("Another log entry.");
        //     }
        // }
        ```
        **Partial Credit Guidance:**
        *   Correct private constructor: +2 points
        *   Static instance field: +2 points
        *   Public static `Instance` property: +2 points
        *   Basic thread safety (e.g., `lock` keyword): +3 points
        *   Double-checked locking for optimal performance: +1 point
        *   `Log` method implementation: +2 points

9.  **Question:** Implement a simple **Factory Method Pattern** in C# for creating different types of `Vehicle` objects (`Car`, `Motorcycle`).
    *   **Answer:**
        ```csharp
        using System;

        // Product Interface
        public interface IVehicle
        {
            void Drive();
        }

        // Concrete Products
        public class Car : IVehicle
        {
            public void Drive() => Console.WriteLine("Driving a Car.");
        }

        public class Motorcycle : IVehicle
        {
            public void Drive() => Console.WriteLine("Riding a Motorcycle.");
        }

        // Creator Abstract Class
        public abstract class VehicleFactory
        {
            // The factory method
            public abstract IVehicle CreateVehicle();

            public void StartProduction()
            {
                IVehicle vehicle = CreateVehicle();
                Console.WriteLine("Vehicle production started.");
                vehicle.Drive();
            }
        }

        // Concrete Creators
        public class CarFactory : VehicleFactory
        {
            public override IVehicle CreateVehicle() => new Car();
        }

        public class MotorcycleFactory : VehicleFactory
        {
            public override IVehicle CreateVehicle() => new Motorcycle();
        }

        // Example Usage:
        // public class Program
        // {
        //     public static void Main(string[] args)
        //     {
        //         VehicleFactory carCreator = new CarFactory();
        //         carCreator.StartProduction(); // Output: Vehicle production started. Driving a Car.

        //         VehicleFactory motorcycleCreator = new MotorcycleFactory();
        //         motorcycleCreator.StartProduction(); // Output: Vehicle production started. Riding a Motorcycle.
        //     }
        // }
        ```
        **Partial Credit Guidance:**
        *   Product interface (`IVehicle`): +2 points
        *   Concrete product classes (`Car`, `Motorcycle`): +2 points
        *   Abstract creator class (`VehicleFactory`) with abstract factory method: +3 points
        *   Concrete creator classes (`CarFactory`, `MotorcycleFactory`) overriding the factory method: +3 points

10. **Question:** Implement the **Facade Pattern** in C# for a complex `HomeTheater` system. The facade should provide a simple `WatchMovie(string movieName)` method that handles turning on components, setting volumes, and starting the movie.
    *   **Answer:**
        ```csharp
        using System;

        // Subsystem classes
        public class Amplifier
        {
            public void On() => Console.WriteLine("Amplifier On");
            public void SetVolume(int volume) => Console.WriteLine($"Amplifier volume set to {volume}");
            public void Off() => Console.WriteLine("Amplifier Off");
        }

        public class DvdPlayer
        {
            public void On() => Console.WriteLine("DVD Player On");
            public void Play(string movie) => Console.WriteLine($"Playing movie '{movie}'");
            public void Off() => Console.WriteLine("DVD Player Off");
        }

        public class Projector
        {
            public void On() => Console.WriteLine("Projector On");
            public void WideScreenMode() => Console.WriteLine("Projector in widescreen mode");
            public void Off() => Console.WriteLine("Projector Off");
        }

        // Facade class
        public class HomeTheaterFacade
        {
            private Amplifier _amp;
            private DvdPlayer _dvd;
            private Projector _projector;

            public HomeTheaterFacade(Amplifier amp, DvdPlayer dvd, Projector projector)
            {
                _amp = amp;
                _dvd = dvd;
                _projector = projector;
            }

            public void WatchMovie(string movieName)
            {
                Console.WriteLine("\nGet ready to watch a movie...");
                _projector.On();
                _projector.WideScreenMode();
                _amp.On();
                _amp.SetVolume(10);
                _dvd.On();
                _dvd.Play(movieName);
            }

            public void EndMovie()
            {
                Console.WriteLine("\nShutting down home theater...");
                _dvd.Off();
                _amp.Off();
                _projector.Off();
            }
        }

        // Example Usage:
        // public class Program
        // {
        //     public static void Main(string[] args)
        //     {
        //         Amplifier amp = new Amplifier();
        //         DvdPlayer dvd = new DvdPlayer();
        //         Projector projector = new Projector();

        //         HomeTheaterFacade homeTheater = new HomeTheaterFacade(amp, dvd, projector);

        //         homeTheater.WatchMovie("The Matrix");
        //         homeTheater.EndMovie();
        //     }
        // }
        ```
        **Partial Credit Guidance:**
        *   Definition of at least 2-3 subsystem classes: +3 points
        *   Facade class with references to subsystem objects: +3 points
        *   Facade method (`WatchMovie`) that orchestrates multiple subsystem calls: +4 points

11. **Question:** Implement the **Command Pattern** in C# for a simple remote control that can turn lights on and off.
    *   **Answer:**
        ```csharp
        using System;
        using System.Collections.Generic;

        // Command Interface
        public interface ICommand
        {
            void Execute();
            void Undo(); // Optional, but good for Command Pattern
        }

        // Receiver Class
        public class Light
        {
            private string _name;
            public Light(string name) { _name = name; }
            public void TurnOn() => Console.WriteLine($"{_name} Light is ON");
            public void TurnOff() => Console.WriteLine($"{_name} Light is OFF");
        }

        // Concrete Command Classes
        public class LightOnCommand : ICommand
        {
            private Light _light;
            public LightOnCommand(Light light) { _light = light; }
            public void Execute() => _light.TurnOn();
            public void Undo() => _light.TurnOff();
        }

        public class LightOffCommand : ICommand
        {
            private Light _light;
            public LightOffCommand(Light light) { _light = light; }
            public void Execute() => _light.TurnOff();
            public void Undo() => _light.TurnOn();
        }

        // Invoker Class
        public class RemoteControl
        {
            private ICommand[] _onCommands;
            private ICommand[] _offCommands;
            private ICommand _undoCommand; // Stores the last command for undo

            public RemoteControl()
            {
                _onCommands = new ICommand[7]; // 7 slots for devices
                _offCommands = new ICommand[7];
                ICommand noCommand = new NoCommand(); // Null object pattern for empty slots
                for (int i = 0; i < 7; i++)
                {
                    _onCommands[i] = noCommand;
                    _offCommands[i] = noCommand;
                }
                _undoCommand = noCommand;
            }

            public void SetCommand(int slot, ICommand onCommand, ICommand offCommand)
            {
                _onCommands[slot] = onCommand;
                _offCommands[slot] = offCommand;
            }

            public void OnButtonWasPushed(int slot)
            {
                _onCommands[slot].Execute();
                _undoCommand = _onCommands[slot]; // Save for undo
            }

            public void OffButtonWasPushed(int slot)
            {
                _offCommands[slot].Execute();
                _undoCommand = _offCommands[slot]; // Save for undo
            }

            public void UndoButtonWasPushed()
            {
                _undoCommand.Undo();
            }
        }

        // Null Object for empty slots (optional but good practice)
        public class NoCommand : ICommand
        {
            public void Execute() { }
            public void Undo() { }
        }

        // Example Usage:
        // public class Program
        // {
        //     public static void Main(string[] args)
        //     {
        //         RemoteControl remote = new RemoteControl();
        //         Light livingRoomLight = new Light("Living Room");
        //         Light kitchenLight = new Light("Kitchen");

        //         ICommand livingRoomLightOn = new LightOnCommand(livingRoomLight);
        //         ICommand livingRoomLightOff = new LightOffCommand(livingRoomLight);
        //         ICommand kitchenLightOn = new LightOnCommand(kitchenLight);
        //         ICommand kitchenLightOff = new LightOffCommand(kitchenLight);

        //         remote.SetCommand(0, livingRoomLightOn, livingRoomLightOff);
        //         remote.SetCommand(1, kitchenLightOn, kitchenLightOff);

        //         remote.OnButtonWasPushed(0); // Output: Living Room Light is ON
        //         remote.OffButtonWasPushed(0); // Output: Living Room Light is OFF
        //         remote.UndoButtonWasPushed(); // Output: Living Room Light is ON

        //         remote.OnButtonWasPushed(1); // Output: Kitchen Light is ON
        //         remote.UndoButtonWasPushed(); // Output: Kitchen Light is OFF
        //     }
        // }
        ```
        **Partial Credit Guidance:**
        *   Command interface (`ICommand`): +2 points
        *   Receiver class (`Light`): +2 points
        *   Concrete command classes (`LightOnCommand`, `LightOffCommand`) encapsulating receiver and action: +3 points
        *   Invoker class (`RemoteControl`) holding and executing commands: +3 points
        *   `Undo` functionality: +2 bonus points

### Section 4: Design and Debugging Problems (4 Questions)

12. **Question:** You are building a C# application that needs to process user input from various sources (e.g., keyboard, file, network stream). Each source might require different parsing logic. Which design pattern would be most suitable to handle this requirement elegantly, ensuring extensibility for future input sources? Explain your choice and briefly describe how you would structure the classes.
    *   **Answer:** The **Strategy Pattern** would be most suitable here.
        *   **Explanation:** The core problem is that the "algorithm" for parsing input varies depending on the input source, but the overall goal (processing input) remains the same. The Strategy Pattern allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. The client (the input processor) can then choose which parsing strategy to use at runtime, without needing to know the specific implementation details of each parser. This adheres to the Open/Closed Principle, as new input sources (and their parsing logic) can be added by creating new strategy implementations without modifying the core input processor.
        *   **Class Structure:**
            1.  **`IInputParser` (Interface/Strategy):** Defines the common interface for all parsing algorithms, e.g., `string Parse(string rawInput)`.
            2.  **`KeyboardInputParser`, `FileInputParser`, `NetworkStreamParser` (Concrete Strategies):** Implement `IInputParser` with specific logic for each input source.
            3.  **`InputProcessor` (Context):** Holds a reference to an `IInputParser` and delegates the parsing task to it. It might have a `SetParser(IInputParser parser)` method to change the strategy at runtime and a `Process(string rawInput)` method that calls the current parser's `Parse` method.

13. **Question:** A C# application currently has a `PaymentProcessor` class with a large `ProcessPayment` method containing a long `switch` statement to handle different payment types (Credit Card, PayPal, Bank Transfer). This method is becoming difficult to maintain and extend. Identify the design principle being violated and suggest a refactoring approach using a design pattern to improve the code.
    *   **Answer:**
        *   **Violated Principle:** The **Open/Closed Principle (OCP)** is being violated. Every time a new payment type is introduced, the `ProcessPayment` method (and potentially the `PaymentProcessor` class itself) needs to be modified, which means it's not "closed for modification." It also likely violates the **Single Responsibility Principle (SRP)**, as the `PaymentProcessor` is responsible for both orchestrating payments and knowing the specific logic for each payment type.
        *   **Refactoring Approach (using Strategy Pattern):** The **Strategy Pattern** is the ideal solution here.
            1.  **`IPaymentStrategy` (Interface/Strategy):** Define an interface like `void ProcessPayment(decimal amount)`.
            2.  **`CreditCardPaymentStrategy`, `PayPalPaymentStrategy`, `BankTransferPaymentStrategy` (Concrete Strategies):** Implement `IPaymentStrategy` for each payment type, encapsulating their specific processing logic.
            3.  **`PaymentProcessor` (Context):** This class will no longer contain the `switch` statement. Instead, it will hold a reference to an `IPaymentStrategy`. Its `ProcessPayment` method will simply delegate the call to the currently set strategy.
            4.  **Client Code:** The client code will be responsible for instantiating the correct `IPaymentStrategy` based on user input or configuration and injecting it into the `PaymentProcessor`.
        *   **Benefits:** This refactoring makes the `PaymentProcessor` closed for modification (you don't touch it when adding new payment types) and open for extension (you just create a new `IPaymentStrategy`). It also improves SRP by moving specific payment logic out of the `PaymentProcessor`.

14. **Question:** You have a legacy C# library that exposes a `LegacyDataService` class with a method `GetOldRecords()` that returns a `System.Data.DataTable`. Your new application, however, expects all data services to implement an `IDataSource` interface with a method `IEnumerable<T> GetData<T>()`. How would you integrate the `LegacyDataService` into your new application without modifying the legacy library or your `IDataSource` interface? Which pattern is this?
    *   **Answer:** You would use the **Adapter Pattern**.
        *   **Explanation:** The Adapter Pattern is specifically designed to make incompatible interfaces compatible without altering the existing code of either the client or the adaptee. In this scenario, `LegacyDataService` is the "adaptee" with an incompatible `GetOldRecords()` method returning `DataTable`, and `IDataSource` is the "target" interface your new application expects.
        *   **Implementation:**
            1.  Create a new class, say `LegacyDataServiceAdapter`, that implements your `IDataSource` interface.
            2.  Inside `LegacyDataServiceAdapter`, hold an instance of `LegacyDataService`.
            3.  Implement the `GetData<T>()` method of `IDataSource` within the adapter. This method will internally call `LegacyDataService.GetOldRecords()`, convert the `DataTable` into an `IEnumerable<T>` (e.g., by iterating through the `DataTable` rows and mapping them to objects of type `T`), and then return the result.
        *   **Example Structure:**
            ```csharp
            // Existing Target Interface (in your new app)
            public interface IDataSource
            {
                IEnumerable<T> GetData<T>() where T : new();
            }

            // Existing Legacy Library (cannot modify)
            public class LegacyDataService
            {
                public System.Data.DataTable GetOldRecords()
                {
                    Console.WriteLine("Fetching old records from legacy service...");
                    // Simulate fetching data
                    System.Data.DataTable dt = new System.Data.DataTable();
                    dt.Columns.Add("Id", typeof(int));
                    dt.Columns.Add("Name", typeof(string));
                    dt.Rows.Add(1, "Legacy Item 1");
                    dt.Rows.Add(2, "Legacy Item 2");
                    return dt;
                }
            }

            // Adapter Class
            public class LegacyDataServiceAdapter : IDataSource
            {
                private readonly LegacyDataService _legacyService;

                public LegacyDataServiceAdapter(LegacyDataService legacyService)
                {
                    _legacyService = legacyService;
                }

                public IEnumerable<T> GetData<T>() where T : new()
                {
                    System.Data.DataTable dataTable = _legacyService.GetOldRecords();
                    List<T> results = new List<T>();

                    foreach (System.Data.DataRow row in dataTable.Rows)
                    {
                        T item = new T();
                        // Simple mapping for demonstration, real-world would use reflection or a mapper library
                        if (typeof(T) == typeof(MyDataItem)) // Assuming MyDataItem is the target type
                        {
                            (item as MyDataItem).Id = (int)row["Id"];
                            (item as MyDataItem).Name = (string)row["Name"];
                        }
                        results.Add(item);
                    }
                    return results;
                }
            }

            // Example Target Type for conversion
            public class MyDataItem
            {
                public int Id { get; set; }
                public string Name { get; set; }
            }

            // Usage in new application:
            // IDataSource dataSource = new LegacyDataServiceAdapter(new LegacyDataService());
            // foreach (var item in dataSource.GetData<MyDataItem>())
            // {
            //     Console.WriteLine($"New App received: {item.Id} - {item.Name}");
            // }
            ```

15. **Question:** You are developing a C# game where characters have different abilities (e.g., `Attack`, `Heal`, `Defend`). You want to be able to dynamically add or remove enhancements to these abilities (e.g., `StrongAttack`, `HealingAura`, `ShieldDefense`) at runtime without modifying the base ability classes. Which design pattern would allow for this flexible, runtime composition of behaviors? Explain how it works.
    *   **Answer:** The **Decorator Pattern** is the most suitable pattern for this scenario.
        *   **Explanation:** The Decorator Pattern allows you to attach new behaviors or responsibilities to an object dynamically. It provides a flexible alternative to subclassing for extending functionality. Instead of creating a rigid hierarchy of subclasses (e.g., `StrongAttackAbility` inheriting from `AttackAbility`), you wrap the original object with "decorator" objects that add new responsibilities. Each decorator maintains a reference to the component it decorates, and its interface conforms to the component's interface, allowing for recursive wrapping.
        *   **How it works:**
            1.  **`IAbility` (Component Interface):** Define a common interface for all abilities, e.g., `void Execute()`.
            2.  **`AttackAbility`, `HealAbility`, `DefendAbility` (Concrete Components):** These are the base abilities that implement `IAbility`.
            3.  **`AbilityDecorator` (Abstract Decorator):** This abstract class also implements `IAbility` and holds a reference to an `IAbility` object (the component it decorates). Its `Execute()` method typically calls the decorated component's `Execute()` method.
            4.  **`StrongAttackDecorator`, `HealingAuraDecorator`, `ShieldDefenseDecorator` (Concrete Decorators):** These classes extend `AbilityDecorator`. They override the `Execute()` method to add their specific enhancement logic before or after calling the base component's `Execute()` method.
        *   **Dynamic Composition:** To create a "Strong Attack with Healing Aura," you would instantiate `new HealingAuraDecorator(new StrongAttackDecorator(new AttackAbility()))`. Each decorator adds its behavior, and the client interacts with the outermost decorator as if it were the original component. This provides a highly flexible way to combine behaviors at runtime.

---

## Course Conclusion

Congratulations on completing the "Design Patterns in C# and .NET" course! You have embarked on a transformative journey, moving beyond just writing functional code to crafting robust, maintainable, and extensible software solutions. You now possess a solid understanding of object-oriented design principles and a powerful toolkit of common design patterns.

Throughout this course, you've mastered the **SOLID principles** (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion), which are the bedrock of good software design. You've explored **Creational Patterns** like Singleton, Factory Method, and Abstract Factory, learning how to manage object creation effectively. Your understanding of **Structural Patterns** such as Adapter, Decorator, Facade, and Proxy now enables you to compose objects into larger structures while maintaining flexibility. Furthermore, you've delved into **Behavioral Patterns** including Strategy, Observer, Command, Iterator, Template Method, and State, empowering you to manage complex algorithms, object interactions, and state transitions with elegance. You've also gained practical experience in applying these patterns within the C# and .NET ecosystem, including refactoring existing code to incorporate patterns and leveraging Dependency Injection.

You are now equipped to tackle more complex software challenges, design systems that are resilient to change, and collaborate more effectively with other developers by speaking the common language of design patterns. This knowledge is invaluable for anyone aspiring to become a senior developer, architect, or lead engineer.

### Where to go next: Continued Learning Paths

Your journey into software design and architecture doesn't end here; it's just beginning! To further solidify your skills and expand your expertise, consider the following next steps and learning paths:

1.  **Deep Dive into Advanced C# & .NET Development:**
    *   **Focus:** Explore more advanced features of C# (e.g., async/await, LINQ, reflection, metaprogramming) and the .NET platform (e.g., ASP.NET Core for web development, Entity Framework Core for data access, performance optimization techniques).
    *   **Resources:** Microsoft Learn modules on advanced C#, official .NET documentation, courses on specific .NET technologies.
    *   **Projects:** Build a full-stack web application using ASP.NET Core, implement a high-performance data processing service, or contribute to an open-source .NET project.

2.  **Software Architecture and System Design:**
    *   **Focus:** Expand your understanding beyond individual patterns to how they fit into larger system architectures. Explore topics like Microservices, Domain-Driven Design (DDD), Event-Driven Architecture, Cloud-Native patterns, and distributed systems.
    *   **Resources:** Books like "Building Microservices" by Sam Newman, "Domain-Driven Design" by Eric Evans, online courses on system design and cloud architecture (Azure, AWS, GCP).
    *   **Projects:** Design a scalable microservice architecture for a hypothetical e-commerce platform, implement a message-driven system using Kafka or RabbitMQ, or refactor a monolithic application into smaller, independent services.

3.  **Specific Frameworks & Libraries with Design Patterns:**
    *   **Focus:** Learn how design patterns are applied and sometimes abstracted away in popular C# frameworks and libraries. For example, explore WPF (MVVM pattern), Xamarin (MVVM), Unity (ECS, various game patterns), or specific cloud SDKs.
    *   **Resources:** Official documentation and tutorials for WPF, Xamarin, Unity; community forums and blogs dedicated to these frameworks.
    *   **Projects:** Develop a desktop application with WPF, build a mobile app with Xamarin, create a simple game with Unity, or integrate with a complex cloud service using its SDK, paying attention to how patterns are used internally.

### Encourage Continued Practice

The true mastery of design patterns comes from consistent practice. Don't just read about them; actively seek opportunities to apply them.
*   **Refactor existing code:** Look for "code smells" in your projects and identify where applying a design pattern could improve maintainability, flexibility, or readability.
*   **Start new projects with patterns in mind:** From the outset, consider which patterns might be beneficial for the problem you're trying to solve.
*   **Participate in code reviews:** Offer constructive feedback on how design patterns could be used to improve others' code, and be open to receiving similar feedback.
*   **Join developer communities:** Engage with other C# and .NET developers on platforms like Stack Overflow, Reddit's r/csharp or r/dotnet, or local user groups. Discussing design challenges and solutions is an excellent way to learn.

This course has provided you with a robust foundation. By continuing to learn, practice, and engage with the broader development community, you will undoubtedly become an outstanding software engineer capable of building elegant, efficient, and resilient systems. We at Cohortia are proud of your dedication and look forward to seeing the incredible software you will create!

---


> End of Syllabus: Design Patterns in C# and .NET
> Course ID: design-patterns-in-c-and-net
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Software Engineering, Architecture & Design
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
