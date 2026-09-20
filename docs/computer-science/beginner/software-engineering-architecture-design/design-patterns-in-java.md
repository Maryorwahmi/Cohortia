---
course_title: Design Patterns in Java
course_id: design-patterns-in-java
provider: Cohortia
original_reference: Coursera / Online
platform: Cohortia
level: Beginner
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Software Engineering, Architecture & Design
skills: Object-Oriented Programming (OOP), Java, Software Design, Design Patterns, Clean Code, Code Reusability, Maintainability, Scalability, Problem Solving, Software Architecture
ownership_note: Cohortia curates and rebuilds content for enhanced learning experiences and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "Design Patterns in Java," a comprehensive Cohortia course designed to equip you with the fundamental knowledge and practical skills to apply established solutions to common software design problems using Java. This course is tailored for beginner-level developers who have a foundational understanding of Java and Object-Oriented Programming (OOP) principles and are ready to elevate their code quality, maintainability, and scalability. We believe that writing effective, robust, and elegant software goes beyond merely making code work; it involves crafting solutions that are understandable, flexible, and resilient to change.

Throughout this course, we will demystify the world of design patterns, starting with a solid review of core OOP concepts that underpin these powerful constructs. You will learn to recognize recurring problems in software development and understand how design patterns offer proven, reusable solutions, rather than reinventing the wheel. We'll explore the three main categories of patterns—Creational, Structural, and Behavioral—diving deep into specific patterns like Singleton, Factory Method, Adapter, Decorator, Observer, and Strategy, among others. Each pattern will be presented with clear explanations, practical Java code examples, and discussions on their appropriate use cases and potential pitfalls.

Our approach is hands-on and practical. You won't just memorize patterns; you'll learn to think like a software architect, identifying opportunities to apply patterns to improve your Java applications. We'll emphasize how patterns contribute to writing clean, modular, and extensible code, making your projects easier to manage, debug, and evolve over time. By the end of this course, you will not only be able to implement various design patterns but also articulate the design choices behind them, fostering a deeper understanding of software engineering best practices.

This course serves as a critical stepping stone for anyone aspiring to build more sophisticated and professional Java applications. It will empower you to write code that is not only functional but also elegant, efficient, and future-proof. Get ready to transform your coding approach and embrace a new level of software craftsmanship.

**Upon successful completion of this course, you will be able to:**

*   Identify the core principles of Object-Oriented Programming (OOP) and explain how they relate to software design patterns.
*   Recognize common software design problems and articulate how design patterns provide reusable solutions.
*   Implement various Creational Design Patterns (e.g., Singleton, Factory Method, Builder) in Java to manage object instantiation effectively.
*   Apply Structural Design Patterns (e.g., Adapter, Decorator, Facade) in Java to compose classes and objects into larger structures.
*   Utilize Behavioral Design Patterns (e.g., Observer, Strategy, Command) in Java to manage algorithms, responsibilities, and communication between objects.
*   Analyze existing Java codebases to identify opportunities for refactoring using appropriate design patterns.
*   Evaluate the trade-offs and consequences of applying specific design patterns to different software scenarios.
*   Write more maintainable, scalable, and flexible Java applications by adhering to design pattern principles.
*   Communicate design decisions effectively using standard design pattern terminology.
*   Debug and troubleshoot issues in applications that utilize various design patterns.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations of Design Patterns & OOP Review | 3 |
| 2 | Creational Patterns: Object Creation Mechanisms | 3 |
| 3 | Advanced Creational Patterns & Best Practices | 4 |
| 4 | Structural Patterns: Composing Objects & Classes | 4 |
| 5 | Behavioral Patterns: Object Interactions & Responsibilities (Part 1) | 5 |
| 6 | Behavioral Patterns: Object Interactions & Responsibilities (Part 2) | 5 |

Total chapters: 24
---

## Module 1: Foundations of Design Patterns & OOP Review

This module establishes a solid foundation in Object-Oriented Programming (OOP) principles in Java, which are crucial prerequisites for understanding and effectively applying design patterns. We will revisit core OOP concepts, explore how classes, objects, and interfaces are implemented in Java, and then introduce the fundamental idea of design patterns – what they are, why they are beneficial, and how they are categorized. By the end of this module, you will have a clear understanding of the building blocks of object-oriented design and be ready to dive into specific design patterns.

---

### Chapter 1.1 — Review of OOP Principles in Java

#### Learning objectives
*   Articulate the four core principles of Object-Oriented Programming (OOP): Encapsulation, Inheritance, Polymorphism, and Abstraction.
*   Identify and explain how each OOP principle is implemented and demonstrated in Java code.
*   Analyze the benefits of applying OOP principles for creating robust, maintainable, and scalable software systems.
*   Recognize common pitfalls and anti-patterns related to the misuse of OOP principles.

#### Detailed lesson content
Object-Oriented Programming (OOP) is a programming paradigm built around the concept of "objects," which can contain data and code. These objects are instances of classes, which serve as blueprints. The goal of OOP is to structure software in a way that models real-world entities, making complex systems more manageable, flexible, and reusable. Before we delve into design patterns, it's essential to have a firm grasp of OOP's four foundational pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction. These principles are not just theoretical constructs; they are practical guidelines that inform how we structure our code, leading directly to the patterns we will study later.

**Encapsulation** is the principle of bundling data (attributes) and methods (functions) that operate on the data into a single unit, or class, and restricting direct access to some of the object's components. In Java, this is primarily achieved using access modifiers like `private`, `protected`, and `public`. By declaring fields as `private`, we prevent external code from directly manipulating an object's internal state. Instead, interaction happens through `public` methods, often called "getters" and "setters," which provide controlled access. For instance, a `BankAccount` object might have a `private` `balance` field. You wouldn't want external code to arbitrarily change the balance; instead, you'd provide `deposit()` and `withdraw()` methods that include validation logic. This protects the integrity of the object's data and simplifies its usage, as users only need to know how to interact with the public interface, not the internal implementation details. A common mistake is to make all fields public, which breaks encapsulation and makes refactoring much harder, as any change to the internal data representation could break external code.

**Inheritance** is a mechanism where one class acquires the properties and behaviors of another class. It represents an "is-a" relationship. In Java, the `extends` keyword is used to establish inheritance, creating a subclass (child) from a superclass (parent). This promotes code reusability, as common attributes and methods can be defined once in a superclass and then inherited by multiple subclasses. For example, a `Car` class and a `Motorcycle` class might both `extend` a `Vehicle` superclass, inheriting common properties like `speed` and `color`, and methods like `startEngine()`. Subclasses can also add their own unique properties and behaviors or override inherited methods to provide specialized implementations. The `super` keyword is used to refer to the superclass's members or to call its constructor. While powerful for reusability, overusing inheritance can lead to rigid class hierarchies, often referred to as the "Liskov Substitution Principle" violation if subclasses don't behave as their supertypes. A common mistake is to use inheritance for a "has-a" relationship (composition) instead of an "is-a" relationship, leading to an incorrect and inflexible design.

**Polymorphism**, meaning "many forms," allows objects of different classes to be treated as objects of a common superclass or interface type. In Java, polymorphism manifests in two main ways: compile-time (method overloading) and runtime (method overriding and interface implementation). Method overloading occurs when multiple methods in the same class have the same name but different parameter lists. Method overriding, on the other hand, is when a subclass provides a specific implementation for a method that is already defined in its superclass, often marked with the `@Override` annotation for clarity and compile-time checking. The true power of runtime polymorphism is seen when a superclass reference variable holds an object of a subclass. For example, `Vehicle myVehicle = new Car();` allows `myVehicle.startEngine()` to call the `Car`'s specific `startEngine()` method. This enables writing generic code that can operate on a variety of related objects without knowing their exact type at compile time, leading to highly flexible and extensible systems. A common pitfall is relying too heavily on `instanceof` checks to determine an object's type, which often indicates a lack of proper polymorphism and can lead to brittle code.

**Abstraction** focuses on showing only essential information and hiding the complex implementation details. It allows us to design interfaces and abstract classes that define common behaviors without specifying how those behaviors are implemented. In Java, abstraction is achieved using `abstract` classes and `interfaces`. An `abstract` class can have both abstract methods (methods without an implementation, marked with `abstract`) and concrete methods. It cannot be instantiated directly and must be subclassed, with the subclass providing implementations for all abstract methods. An `interface`, on the other hand, defines a contract: a set of abstract methods that any class implementing the interface must provide. Interfaces represent capabilities ("can-do" relationships), like `Flyable` or `Runnable`. Since Java 8, interfaces can also include `default` and `static` methods, providing some implementation while still maintaining their contract-defining role. Abstraction is vital for managing complexity, as it allows developers to work with high-level concepts without getting bogged down in the minutiae of specific implementations. It also promotes loose coupling, which is a cornerstone of good design. A common mistake is to create overly abstract hierarchies that add unnecessary complexity without providing real benefits, or to use abstract classes when an interface would be more appropriate (or vice-versa).

By mastering these four principles, you lay the groundwork for understanding how design patterns offer standardized, proven solutions to common design problems. Each pattern we explore will leverage one or more of these OOP principles to achieve its goals of flexibility, maintainability, and reusability.

#### Key concepts
*   **Encapsulation:** The bundling of data and methods that operate on the data within a single unit (class), and restricting direct access to some of the object's components.
*   **Inheritance:** A mechanism where one class (subclass) acquires the properties and behaviors of another class (superclass), representing an "is-a" relationship.
*   **Polymorphism:** The ability of an object to take on many forms, allowing objects of different classes to be treated as objects of a common superclass or interface type.
*   **Abstraction:** The process of hiding complex implementation details and showing only essential information, achieved through abstract classes and interfaces.
*   **Access Modifiers:** Keywords (`private`, `protected`, `public`, default) that control the visibility and accessibility of classes, fields, constructors, and methods.
*   **`extends` keyword:** Used to indicate that a class is inheriting from another class.
*   **`implements` keyword:** Used to indicate that a class is implementing an interface.
*   **`abstract` keyword:** Used to declare an abstract class or an abstract method (a method without an implementation).
*   **`interface` keyword:** Used to declare an interface, which defines a contract of methods that implementing classes must provide.
*   **Method Overriding:** Providing a specific implementation for a method that is already defined in a superclass.
*   **Method Overloading:** Defining multiple methods in the same class with the same name but different parameter lists.

#### Hands-on activity
**Activity: Refactoring for Encapsulation and Inheritance**

You are given a simple Java class `Employee` that has public fields for `name`, `id`, and `salary`. Your task is to refactor this class to apply encapsulation and then create a subclass `Manager` that inherits from `Employee` and adds a unique field `department`.

**Starter Code:**
```java
public class Employee {
    public String name;
    public String id;
    public double salary;

    public Employee(String name, String id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    public void displayInfo() {
        System.out.println("Name: " + name + ", ID: " + id + ", Salary: " + salary);
    }
}

// Your task: Create a Manager class that extends Employee
// Your task: Refactor Employee to use encapsulation
```

**Instructions:**
1.  Modify the `Employee` class:
    *   Change the access modifier of `name`, `id`, and `salary` fields to `private`.
    *   Add `public` getter methods (e.g., `getName()`, `getId()`, `getSalary()`) for each field.
    *   Add `public` setter methods (e.g., `setSalary(double newSalary)`) for fields that might need to be modified, including basic validation (e.g., `salary` cannot be negative).
2.  Create a new class `Manager` that `extends Employee`.
    *   `Manager` should have an additional `private` field: `department` (String).
    *   `Manager` should have its own constructor that calls the superclass constructor using `super()` and initializes its `department` field.
    *   `Manager` should have a `public` getter and setter for `department`.
    *   `Manager` should override the `displayInfo()` method to include department information.

#### Assessment idea
1.  **Question (Multiple Choice - Encapsulation):**
    Consider the following Java code:
    ```java
    public class Product {
        private String name;
        private double price;

        public Product(String name, double price) {
            this.name = name;
            this.price = price;
        }

        public String getName() {
            return name;
        }

        public void setPrice(double price) {
            if (price > 0) {
                this.price = price;
            } else {
                System.out.println("Price cannot be negative.");
            }
        }
    }
    ```
    Which OOP principle is primarily demonstrated by the `private` fields and the `setPrice` method's validation logic?
    a) Inheritance
    b) Polymorphism
    c) Abstraction
    d) Encapsulation

    **Correct Answer:** d) Encapsulation
    **Explanation:** Encapsulation is demonstrated by making the `name` and `price` fields `private`, thus hiding the internal state. Access to the `price` field is controlled through the `setPrice` method, which includes validation logic (`price > 0`), ensuring the integrity of the object's data.

2.  **Question (Coding Challenge - Polymorphism):**
    Given the following base class and interface:
    ```java
    class Shape {
        public void draw() {
            System.out.println("Drawing a generic shape.");
        }
    }

    interface Resizable {
        void resize(double factor);
    }
    ```
    Write two new classes, `Circle` and `Rectangle`, that both `extend Shape`. `Circle` should also `implement Resizable`.
    *   `Circle`'s `draw()` method should print "Drawing a Circle." and its `resize()` method should print "Resizing Circle by factor: [factor]".
    *   `Rectangle`'s `draw()` method should print "Drawing a Rectangle."
    Then, write a `main` method that creates an array of `Shape` objects, including `Circle` and `Rectangle` instances, and iterates through it, calling `draw()` on each object. Additionally, if an object is `Resizable`, call its `resize()` method.

    **Correct Answer/Explanation:**
    ```java
    class Shape {
        public void draw() {
            System.out.println("Drawing a generic shape.");
        }
    }

    interface Resizable {
        void resize(double factor);
    }

    class Circle extends Shape implements Resizable {
        @Override
        public void draw() {
            System.out.println("Drawing a Circle.");
        }

        @Override
        public void resize(double factor) {
            System.out.println("Resizing Circle by factor: " + factor);
        }
    }

    class Rectangle extends Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Rectangle.");
        }
    }

    public class PolymorphismDemo {
        public static void main(String[] args) {
            Shape[] shapes = new Shape[3];
            shapes[0] = new Circle();
            shapes[1] = new Rectangle();
            shapes[2] = new Shape(); // Demonstrating the base class too

            for (Shape s : shapes) {
                s.draw(); // Polymorphism in action: calls specific draw() method
                if (s instanceof Resizable) {
                    ((Resizable) s).resize(1.5); // Downcasting and calling interface method
                }
            }
        }
    }
    ```
    **Explanation:** This solution demonstrates polymorphism through method overriding (`draw()` in `Circle` and `Rectangle`) and interface implementation (`resize()` in `Circle`). The `Shape[]` array can hold instances of its subclasses (`Circle`, `Rectangle`), and calling `s.draw()` invokes the correct overridden method at runtime. The `instanceof` check and subsequent cast allow us to conditionally call the `resize()` method only on objects that implement the `Resizable` interface, showcasing how interfaces enable polymorphic behavior across different class hierarchies.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute animated explainer video visually defining each of the four OOP principles with simple, relatable analogies (e.g., encapsulation as a car's engine, inheritance as animal species, polymorphism as a remote control, abstraction as a car dashboard). Follow with 9 minutes of live coding in IntelliJ IDEA. Demonstrate each principle with clear Java code examples:
1.  **Encapsulation:** Create a `Student` class with `private` fields and `public` getters/setters, showing how direct field access is prevented and how setters can validate input.
2.  **Inheritance:** Create an `Animal` base class and `Dog`/`Cat` subclasses, demonstrating `extends`, `super`, and method overriding.
3.  **Polymorphism:** Use the `Animal` and its subclasses in an array, iterating and calling a common method (`makeSound()`) to show dynamic dispatch.
4.  **Abstraction:** Introduce an `abstract` `Vehicle` class with an `abstract` `drive()` method and an `interface` `Flyable` with a `fly()` method, then implement them in concrete classes.
Include a split-screen view for code and console output. The interactive element will be a short coding challenge presented within the video, asking learners to complete a missing method body that demonstrates one of the principles. Ensure captions and high-contrast visuals for accessibility.

---

### Chapter 1.2 — Classes, Objects, and Interfaces in Java

#### Learning objectives
*   Differentiate clearly between a class (blueprint) and an object (instance) in Java.
*   Construct well-formed Java classes, including fields, methods, and constructors.
*   Understand and correctly apply the `static` keyword for fields and methods, distinguishing static members from instance members.
*   Define and implement Java interfaces to establish contracts and achieve loose coupling.
*   Explain the role of access modifiers (`public`, `private`, `protected`, default) in controlling visibility within and across classes and packages.

#### Detailed lesson content
Building upon our review of OOP principles, let's dive deeper into the fundamental constructs in Java that enable these principles: classes, objects, and interfaces. These are the basic building blocks of nearly every Java application, and a thorough understanding of their nuances is critical for writing effective and maintainable code, especially when applying design patterns.

At the heart of OOP are **classes and objects**. A **class** is essentially a blueprint or a template for creating objects. It defines the structure (data fields or attributes) and behavior (methods or functions) that its objects will possess. Think of a `CookieCutter` class: it defines the shape and characteristics of a cookie. An **object**, on the other hand, is a concrete instance of a class. When you use the `new` keyword in Java, you are creating an object, which is an actual cookie made from the cutter. Each object has its own unique set of data values for the fields defined in its class, but they all share the same methods. For example, if you have a `Car` class, `new Car()` creates a specific car object with its own color, make, and model, distinct from other `Car` objects. The process of creating an object is called instantiation, and it involves allocating memory for the object and initializing its state.

**Constructors** are special methods used to initialize new objects. Every class has at least one constructor. If you don't explicitly define one, Java provides a default no-argument constructor. You can define your own constructors to accept parameters, allowing you to initialize an object's fields with specific values at the time of creation. For instance, a `Book` class might have a constructor `public Book(String title, String author)` to ensure that every book object is created with a title and author. It's important to understand that constructors are not regular methods; they do not have a return type (not even `void`) and their name must exactly match the class name. Overloading constructors (providing multiple constructors with different parameter lists) is a common practice to offer various ways to instantiate an object.

The **`static` keyword** in Java has significant implications for fields and methods. When a field is declared `static`, it belongs to the class itself, not to any specific object instance. This means there's only one copy of that `static` field, shared by all objects of the class. Changes to a `static` field by one object are visible to all other objects. `static` fields are often used for constants (e.g., `public static final double PI = 3.14159;`) or for data that needs to be globally accessible and consistent across all instances. Similarly, a `static` method belongs to the class and can be called directly using the class name (e.g., `Math.random()`) without needing to create an object. `static` methods can only access `static` fields and other `static` methods within the same class; they cannot directly access instance fields or instance methods because they don't operate on a specific object. A common mistake is trying to use `this` or access instance variables from a `static` method, which will result in a compile-time error. Another common pitfall is overusing `static` methods, which can lead to procedural-style programming and reduce the benefits of OOP.

**Interfaces** are another cornerstone of Java's object-oriented capabilities, primarily enabling abstraction and polymorphism. An interface defines a contract: a set of method signatures that a class must implement if it declares itself to `implement` that interface. Unlike classes, interfaces cannot be instantiated directly. They specify *what* a class should do, but not *how* it should do it. Before Java 8, interfaces could only contain abstract methods and `public static final` fields (constants). Since Java 8, interfaces can include `default` methods (methods with an implementation that implementing classes can optionally override) and `static` methods. `default` methods are particularly useful for adding new methods to an interface without breaking existing implementations. Interfaces are crucial for achieving loose coupling, as they allow objects to interact based on their capabilities rather than their concrete types. For example, a `PaymentProcessor` interface can be implemented by `CreditCardProcessor` and `PayPalProcessor`, allowing a `ShoppingCart` to process payments polymorphically without knowing the specific payment method. This flexibility is a key enabler for many design patterns.

Finally, **access modifiers** (`public`, `private`, `protected`, and default/package-private) play a vital role in controlling the visibility and accessibility of classes, fields, methods, and constructors.
*   `public`: Accessible from anywhere.
*   `private`: Accessible only within the defining class. This is fundamental for encapsulation.
*   `protected`: Accessible within the defining class, by subclasses (even in different packages), and by other classes within the same package.
*   Default (no modifier): Accessible only within the same package.
Understanding and correctly applying these modifiers is essential for maintaining proper encapsulation, controlling API exposure, and ensuring the stability and security of your code. Misusing access modifiers can lead to tightly coupled systems or expose internal implementation details that should remain hidden.

Together, classes, objects, and interfaces, combined with careful use of `static` members and access modifiers, provide the robust framework within which all Java design patterns operate. They allow us to create modular, flexible, and maintainable software systems.

#### Key concepts
*   **Class:** A blueprint or template for creating objects, defining their structure and behavior.
*   **Object:** A concrete instance of a class, created using the `new` keyword.
*   **Constructor:** A special method used to initialize a new object, sharing the same name as the class and having no return type.
*   **`new` keyword:** Used to create an instance of a class (an object).
*   **`static` keyword:** Used to declare class-level members (fields or methods) that belong to the class itself rather than to any specific object instance.
*   **Instance Member:** A field or method that belongs to a specific object instance.
*   **Interface:** A contract that defines a set of abstract methods (and potentially default/static methods) that implementing classes must provide.
*   **`implements` keyword:** Used by a class to declare that it provides implementations for the methods defined in an interface.
*   **`default` method (in interface):** A method in an interface that has a default implementation, which implementing classes can optionally override.
*   **Access Modifiers:** Keywords (`public`, `private`, `protected`, default) that control the visibility and accessibility of class members.
*   **Package-private (default access):** Members accessible only within the same package.

#### Hands-on activity
**Activity: Designing a Simple `Logger` with Static Members and an Interface**

You need to design a simple logging system. Your task is to:
1.  Create an interface `Loggable` that defines a contract for logging messages.
2.  Create a class `ConsoleLogger` that implements `Loggable` and uses a `static` counter to track the number of log messages processed.

**Starter Code:**
```java
// 1. Define the Loggable interface here

// 2. Implement the ConsoleLogger class here

public class LoggingDemo {
    public static void main(String[] args) {
        // Create instances of ConsoleLogger and log messages
        // Print the total number of logs processed
    }
}
```

**Instructions:**
1.  **Define `Loggable` Interface:**
    *   Create an interface named `Loggable`.
    *   It should declare a single `void log(String message)` method.
2.  **Implement `ConsoleLogger` Class:**
    *   Create a class named `ConsoleLogger` that `implements Loggable`.
    *   Inside `ConsoleLogger`, declare a `private static int logCount = 0;` field. This counter will keep track of all logs across all `ConsoleLogger` instances.
    *   Implement the `log(String message)` method:
        *   It should print the message to the console, prefixed with `"[LOG] "`.
        *   It should increment the `logCount` each time a message is logged.
    *   Add a `public static int getTotalLogs()` method that returns the current value of `logCount`.
3.  **Test in `main` method:**
    *   In the `main` method of `LoggingDemo`, create two instances of `ConsoleLogger`.
    *   Call `log()` several times on both instances.
    *   Finally, call `ConsoleLogger.getTotalLogs()` and print the result. Observe that the `logCount` is shared across instances.

#### Assessment idea
1.  **Question (Code Analysis - Static vs. Instance):**
    Consider the following Java code:
    ```java
    class Counter {
        private int instanceCount = 0;
        private static int staticCount = 0;

        public Counter() {
            instanceCount++;
            staticCount++;
        }

        public int getInstanceCount() {
            return instanceCount;
        }

        public static int getStaticCount() {
            return staticCount;
        }
    }

    public class CounterDemo {
        public static void main(String[] args) {
            Counter c1 = new Counter();
            Counter c2 = new Counter();
            Counter c3 = new Counter();

            System.out.println("c1 instance count: " + c1.getInstanceCount());
            System.out.println("c2 instance count: " + c2.getInstanceCount());
            System.out.println("Total static count: " + Counter.getStaticCount());
        }
    }
    ```
    What will be the output of `CounterDemo`? Explain why `c1.getInstanceCount()` and `Counter.getStaticCount()` produce different results.

    **Correct Answer:**
    ```
    c1 instance count: 1
    c2 instance count: 1
    Total static count: 3
    ```
    **Explanation:**
    *   `instanceCount` is an instance variable. Each time a new `Counter` object is created (e.g., `c1`, `c2`, `c3`), its `instanceCount` is initialized to 0 and then incremented once within its own constructor. Therefore, `c1.getInstanceCount()` and `c2.getInstanceCount()` will both output `1` because they refer to the `instanceCount` specific to their respective objects.
    *   `staticCount` is a static variable, meaning there is only one copy of it, shared across all instances of the `Counter` class. Each time *any* `Counter` object is created, the shared `staticCount` is incremented. Since three `Counter` objects (`c1`, `c2`, `c3`) are created, `staticCount` is incremented three times. Thus, `Counter.getStaticCount()` will output `3`.

2.  **Question (Scenario - Interfaces):**
    You are building a system for a smart home where different devices (lights, thermostats, door locks) need to be controlled remotely. All these devices share a common ability: they can be turned "on" or "off". Which Java construct would be most appropriate to define this common behavior, allowing you to control different devices uniformly?
    a) An abstract class `Device` with `turnOn()` and `turnOff()` methods.
    b) A concrete class `BaseDevice` with `turnOn()` and `turnOff()` methods.
    c) An interface `Controllable` with `turnOn()` and `turnOff()` methods.
    d) Separate `turnOn()` and `turnOff()` methods in each device class without any common type.

    **Correct Answer:** c) An interface `Controllable` with `turnOn()` and `turnOff()` methods.
    **Explanation:** An interface is the most appropriate choice here because it defines a contract for behavior (`turnOn()` and `turnOff()`) without imposing any specific implementation details or a class hierarchy (like an abstract class would). Different devices (lights, thermostats, locks) might belong to entirely different class hierarchies but can all `implement` the `Controllable` interface. This allows for polymorphism, where a remote control system can interact with any `Controllable` object uniformly, regardless of its underlying concrete type, promoting loose coupling and flexibility. An abstract class might be suitable if all devices shared significant common state or implementation, but for just defining a common capability, an interface is superior.

#### AI generation note
Create a 10-minute interactive code demo. Start by visually explaining the difference between classes and objects using a factory analogy (class as machine, object as product). Then, switch to live coding in an IDE.
1.  **Classes & Objects:** Define a `Book` class with `title`, `author`, `isbn` fields, and a constructor. Instantiate multiple `Book` objects, print their details, and show how each object has its own state.
2.  **Static Members:** Add a `static int bookCount` to the `Book` class, incrementing it in the constructor. Add a `static` getter for `bookCount`. Demonstrate calling it via `Book.getBookCount()` and explain why it's shared.
3.  **Interfaces:** Define an `interface Printable` with a `printDetails()` method. Modify the `Book` class to `implement Printable` and provide its implementation. Show how a `List<Printable>` can hold `Book` objects and call `printDetails()` polymorphically.
4.  **Access Modifiers:** Briefly show how changing `public` fields to `private` and adding getters/setters affects access.
The interactive element will be a brief coding exercise where learners need to add a `default` method to an existing interface and then use it. Ensure clear console output and use diagrams to illustrate memory allocation for static vs. instance members.

---

### Chapter 1.3 — Introduction to Design Patterns: What, Why, and How

#### Learning objectives
*   Define what a design pattern is in the context of software engineering.
*   Explain the key benefits of using design patterns, such as promoting code reusability, maintainability, and extensibility.
*   Categorize design patterns into their primary groups: Creational, Structural, and Behavioral.
*   Identify common software design problems that design patterns aim to solve.
*   Understand the importance of applying design patterns appropriately and avoiding common anti-patterns.

#### Detailed lesson content
Having solidified our understanding of Java's core OOP principles and constructs, we are now perfectly positioned to embark on the fascinating journey of **Design Patterns**. A design pattern, at its core, is a proven, reusable solution to a commonly occurring problem in software design. It's not a finished design that can be directly transformed into code; rather, it's a description or template for how to solve a problem that can be used in many different situations. Think of design patterns as architectural blueprints for software components, or perhaps even more simply, as well-tested recipes for common programming challenges. They provide a common vocabulary for developers to discuss design issues and solutions, much like architects use terms like "arch" or "buttress."

The concept of design patterns gained widespread recognition with the publication of the book "Design Patterns: Elements of Reusable Object-Oriented Software" in 1994 by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, collectively known as the "Gang of Four" (GoF). Their work identified and documented 23 classic design patterns, which have since become standard tools in the software developer's arsenal. These patterns emerged from observing recurring structures and interactions in well-designed object-oriented systems.

So, **why use design patterns?** The benefits are numerous and profound, directly addressing many challenges faced in software development:
1.  **Common Vocabulary:** Patterns provide a shared language among developers, making it easier to communicate complex design ideas efficiently. Instead of explaining a detailed class structure, you can simply say, "We'll use a Singleton here," and everyone understands the implications.
2.  **Proven Solutions:** Patterns are solutions that have been tested and refined over time by many experienced developers. Using them reduces the risk of introducing design flaws and leverages collective wisdom.
3.  **Improved Code Readability and Maintainability:** Code that uses well-known patterns is often easier for new team members to understand, as they can quickly grasp the intent behind the design. This also simplifies maintenance and debugging.
4.  **Increased Flexibility and Extensibility:** Many patterns are designed to decouple components, making systems more adaptable to change and easier to extend with new features without modifying existing code. This aligns perfectly with the Open/Closed Principle (Open for extension, closed for modification).
5.  **Enhanced Reusability:** Patterns encourage the creation of reusable components and frameworks, saving development time and effort in future projects.
6.  **Avoidance of Common Pitfalls:** Patterns guide developers away from common anti-patterns or suboptimal design choices that can lead to rigid, fragile, or complex systems.

Design patterns are typically **categorized** into three main types, based on their purpose:
*   **Creational Patterns:** These patterns deal with object creation mechanisms, trying to create objects in a manner suitable for the situation. They aim to increase flexibility and reuse in object creation. Examples include Singleton (ensuring a class has only one instance), Factory Method (deferring instantiation to subclasses), and Builder (separating the construction of a complex object from its representation).
*   **Structural Patterns:** These patterns deal with the composition of classes and objects. They help in forming larger structures from individual parts, making them more flexible and efficient. Examples include Adapter (allowing incompatible interfaces to work together), Decorator (attaching additional responsibilities to an object dynamically), and Facade (providing a unified interface to a set of interfaces in a subsystem).
*   **Behavioral Patterns:** These patterns are concerned with algorithms and the assignment of responsibilities between objects. They describe how objects and classes interact and distribute responsibilities. Examples include Observer (defining a one-to-many dependency between objects), Strategy (defining a family of algorithms, encapsulating each one, and making them interchangeable), and Command (encapsulating a request as an object).

**How do we apply design patterns?** It's crucial to understand that design patterns are not a silver bullet. They are tools, and like any tool, they must be used appropriately. The process usually involves:
1.  **Identify the Problem:** Start by recognizing a recurring design problem in your software. Don't force a pattern where it doesn't naturally fit.
2.  **Evaluate Potential Patterns:** Consider which patterns address the identified problem. Understand their intent, applicability, and consequences.
3.  **Select the Best Fit:** Choose the pattern that best resolves the problem while aligning with your project's specific requirements and constraints. Sometimes, a simpler solution without a pattern is better.
4.  **Implement the Pattern:** Translate the pattern's structure and interactions into your code. This often involves creating new classes or restructuring existing ones.
5.  **Refactor and Iterate:** Design is an iterative process. Be prepared to refactor your implementation as your understanding evolves or requirements change.

A **common mistake** is "over-engineering" – applying a design pattern simply because it exists, rather than because it solves a specific, identified problem. This can lead to unnecessary complexity, making the code harder to understand and maintain. Another pitfall is using the wrong pattern for a given problem, which can introduce more issues than it solves. Always prioritize simplicity and clarity; a simple, clear solution without a pattern is often superior to a complex, pattern-laden one that doesn't fit.

**Safety Note:** While design patterns are powerful, they are not a substitute for fundamental design skills. A poorly chosen or incorrectly implemented pattern can introduce unnecessary indirection, increase boilerplate code, and make a system harder to debug. Always ensure you fully grasp the problem you're trying to solve before reaching for a pattern.

In the upcoming modules, we will systematically explore specific design patterns within each category, demonstrating their implementation in Java and discussing their real-world applications.

#### Key concepts
*   **Design Pattern:** A proven, reusable solution to a commonly occurring problem in software design, not a finished code but a template or description.
*   **Gang of Four (GoF):** The four authors (Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides) of the seminal book "Design Patterns: Elements of Reusable Object-Oriented Software."
*   **Creational Patterns:** Design patterns focused on object creation mechanisms, enhancing flexibility and reuse in object instantiation.
*   **Structural Patterns:** Design patterns concerned with the composition of classes and objects to form larger, more flexible structures.
*   **Behavioral Patterns:** Design patterns that address algorithms and the assignment of responsibilities between objects, defining how they interact.
*   **Common Vocabulary:** The shared language provided by design patterns for developers to discuss design issues.
*   **Loose Coupling:** A design principle where components are independent and have minimal dependencies on each other, often facilitated by design patterns.
*   **Over-engineering:** The anti-pattern of applying overly complex solutions or design patterns when a simpler approach would suffice.

#### Hands-on activity
**Activity: Problem-to-Pattern Category Mapping**

You are presented with several common software design problems. Your task is to analyze each problem and determine which category of design patterns (Creational, Structural, or Behavioral) would most likely offer a solution. You don't need to name a specific pattern yet, just its category.

**Scenarios:**
1.  **Scenario A:** You need to create objects of a complex type (e.g., a `Report` object with many optional sections) where the construction process involves multiple steps and different configurations, but you want to hide this complexity from the client code.
2.  **Scenario B:** You have an existing legacy `PaymentGateway` library with an incompatible interface that needs to be integrated with your new `ShoppingCart` system, which expects a different `PaymentProcessor` interface.
3.  **Scenario C:** You are developing a GUI application where multiple parts of the user interface (e.g., status bar, log window) need to be updated automatically whenever a specific event occurs in the application's core logic (e.g., a file is saved, a network request completes).
4.  **Scenario D:** You need to ensure that a configuration manager class (`AppConfig`) has only one instance throughout the entire application, and that this single instance is globally accessible.
5.  **Scenario E:** You have a set of algorithms for sorting data (e.g., QuickSort, MergeSort, BubbleSort), and you want to be able to switch between these algorithms at runtime without changing the client code that uses the sorting functionality.

**Instructions:**
For each scenario, identify the primary problem and state whether a Creational, Structural, or Behavioral pattern would be most appropriate. Justify your choice in one sentence.

#### Assessment idea
1.  **Question (Definition Matching):**
    Match the following design pattern categories with their primary focus:
    a) Creational Patterns
    b) Structural Patterns
    c) Behavioral Patterns

    i) Focus on how objects and classes interact and distribute responsibilities.
    ii) Focus on object creation mechanisms, increasing flexibility in object instantiation.
    iii) Focus on composing objects and classes into larger structures, making them more flexible.

    **Correct Answer:**
    a) Creational Patterns -> ii) Focus on object creation mechanisms, increasing flexibility in object instantiation.
    b) Structural Patterns -> iii) Focus on composing objects and classes into larger structures, making them more flexible.
    c) Behavioral Patterns -> i) Focus on how objects and classes interact and distribute responsibilities.

    **Explanation:** This matching exercise tests the fundamental understanding of the high-level purpose of each design pattern category as defined by the Gang of Four. Creational patterns abstract the instantiation process, Structural patterns deal with object composition, and Behavioral patterns manage object communication and responsibilities.

2.  **Question (Scenario Analysis - Benefits):**
    A development team decides to implement a well-known design pattern to manage the creation of different types of database connections (e.g., MySQL, PostgreSQL, Oracle) based on configuration, rather than using direct `new` calls throughout the application. What is the primary benefit this team is likely seeking by applying a design pattern in this scenario?
    a) To make the code run faster.
    b) To reduce the total number of lines of code.
    c) To improve the flexibility and extensibility of the connection creation process.
    d) To prevent runtime errors from occurring.

    **Correct Answer:** c) To improve the flexibility and extensibility of the connection creation process.
    **Explanation:** While design patterns can indirectly contribute to reducing errors or even sometimes optimizing performance (though not their primary goal), their core benefit in this scenario is to decouple the client code (which needs a database connection) from the concrete implementation details of *how* that connection is created. By using a pattern (likely a Factory Method or Abstract Factory), the team can easily add support for new database types in the future without modifying existing client code, making the system more flexible and extensible. This adheres to the Open/Closed Principle.

#### AI generation note
Create an 8-minute animated explainer video. Begin with a compelling real-world analogy for design patterns, such as architectural blueprints for buildings (Creational: foundation plans, Structural: building layout, Behavioral: traffic flow). Then, visually introduce the GoF and their book. Dedicate 2 minutes to each pattern category:
1.  **Creational:** Use an animation showing a "car factory" where different car models are produced based on specific requests, hiding the complex assembly line.
2.  **Structural:** Illustrate with a "power adapter" allowing different plug types to work with a single socket, showing how patterns bridge incompatible interfaces.
3.  **Behavioral:** Depict a "news subscription service" where subscribers automatically receive updates from a publisher, demonstrating communication and responsibility distribution.
Emphasize the "What, Why, and How" for each. The interactive element will be a drag-and-drop exercise at the end, where learners match simple problem descriptions to the correct pattern category. Ensure the visuals are high-contrast and include clear text overlays for key terms.

---

## Module 2: Creational Patterns: Object Creation Mechanisms

This module delves into Creational Design Patterns, a fundamental category of patterns focused on object creation mechanisms. We will explore how these patterns help manage object instantiation in a flexible and robust manner, decoupling the client code from the specifics of how objects are created. By the end of this module, you will understand how to apply patterns like Singleton, Factory Method, and Abstract Factory to build more maintainable and scalable Java applications.

### Chapter 2.1 — The Singleton Pattern: Ensuring a Single Instance

#### Learning objectives
*   Understand the purpose and core principles of the Singleton design pattern.
*   Implement the Singleton pattern using various approaches, including eager, lazy, and thread-safe initialization.
*   Identify common pitfalls and challenges associated with the Singleton pattern, such as reflection and serialization issues.
*   Evaluate appropriate scenarios for applying the Singleton pattern in Java applications.

#### Detailed lesson content
Welcome to the world of Creational Patterns! These patterns are all about managing object creation, providing ways to instantiate objects in a manner that is suitable for the situation while increasing flexibility and reusability of your code. Often, directly creating objects using the `new` keyword can lead to tight coupling and make your system less adaptable to changes. Creational patterns address these issues by abstracting the instantiation process.

Our journey into creational patterns begins with the simplest yet often misunderstood pattern: the Singleton. The core idea behind the Singleton pattern is to ensure that a class has only one instance, and to provide a global point of access to that instance. Think of scenarios where you need exactly one instance of an object to coordinate actions across the system. Common examples include a logging utility, a configuration manager, a database connection pool, or a print spooler. Having multiple instances of these types of objects could lead to inconsistencies, resource contention, or incorrect behavior.

Let's explore how to implement the Singleton pattern in Java. The most straightforward approach is **eager initialization**, where the instance is created as soon as the class is loaded.

```java
public class EagerSingleton {
    // The single instance is created when the class is loaded
    private static final EagerSingleton instance = new EagerSingleton();

    // Private constructor to prevent direct instantiation
    private EagerSingleton() {
        System.out.println("EagerSingleton instance created.");
    }

    // Public static method to provide the global access point
    public static EagerSingleton getInstance() {
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from EagerSingleton!");
    }
}
```
In this eager approach, the `EagerSingleton` instance is created even if it's never actually used. While simple, this might be a waste of resources if the object is heavy and rarely needed.

To address this, we can use **lazy initialization**, where the instance is created only when it's first requested.

```java
public class LazySingleton {
    private static LazySingleton instance;

    private LazySingleton() {
        System.out.println("LazySingleton instance created.");
    }

    public static LazySingleton getInstance() {
        if (instance == null) {
            instance = new LazySingleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from LazySingleton!");
    }
}
```
The lazy approach is more resource-efficient, but it introduces a critical problem in multi-threaded environments. Imagine two threads simultaneously calling `getInstance()` when `instance` is null. Both threads might pass the `if (instance == null)` check, leading to two separate instances being created, violating the Singleton principle. This is a common mistake for beginners.

To ensure thread safety with lazy initialization, we can synchronize the `getInstance()` method.

```java
public class SynchronizedSingleton {
    private static SynchronizedSingleton instance;

    private SynchronizedSingleton() {
        System.out.println("SynchronizedSingleton instance created.");
    }

    public static synchronized SynchronizedSingleton getInstance() {
        if (instance == null) {
            instance = new SynchronizedSingleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from SynchronizedSingleton!");
    }
}
```
While thread-safe, synchronizing the entire method can be inefficient because synchronization is only needed during the *first* creation of the instance. After the instance is created, subsequent calls to `getInstance()` still incur the overhead of synchronization, even though it's no longer necessary.

A more optimized approach for thread-safe lazy initialization is the **Double-Checked Locking (DCL)** pattern. This technique reduces the overhead of synchronization by only synchronizing the critical section where the instance is created.

```java
public class DCLSingleton {
    // volatile keyword ensures that changes to the instance variable are visible across threads
    private static volatile DCLSingleton instance;

    private DCLSingleton() {
        System.out.println("DCLSingleton instance created.");
    }

    public static DCLSingleton getInstance() {
        if (instance == null) { // First check: no lock
            synchronized (DCLSingleton.class) { // Synchronize only if instance is null
                if (instance == null) { // Second check: inside synchronized block
                    instance = new DCLSingleton();
                }
            }
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello from DCLSingleton!");
    }
}
```
The `volatile` keyword is crucial here. It ensures that any changes made to the `instance` variable by one thread are immediately visible to other threads, preventing issues with instruction reordering by the JVM. Without `volatile`, a thread might see a partially constructed `DCLSingleton` object.

Even with DCL, the Singleton pattern isn't entirely foolproof. Advanced techniques like **reflection** can bypass the private constructor:
```java
// Example of reflection attack
Constructor<DCLSingleton> constructor = DCLSingleton.class.getDeclaredConstructor();
constructor.setAccessible(true); // Make private constructor accessible
DCLSingleton instance1 = DCLSingleton.getInstance();
DCLSingleton instance2 = constructor.newInstance(); // Creates a second instance!
```
To mitigate reflection attacks, you can modify the constructor to throw a `RuntimeException` if an instance already exists, though this is not a perfect solution.

Another potential issue arises with **serialization**. If a Singleton class implements `Serializable`, deserializing the object can create a new instance, again violating the Singleton principle. To prevent this, you must override the `readResolve()` method:
```java
import java.io.Serializable;

public class SerializableSingleton implements Serializable {
    private static final long serialVersionUID = 1L; // Recommended for Serializable classes
    private static SerializableSingleton instance = new SerializableSingleton();

    private SerializableSingleton() {
        if (instance != null) { // Protection against reflection
            throw new IllegalStateException("Cannot create another instance of Singleton.");
        }
        System.out.println("SerializableSingleton instance created.");
    }

    public static SerializableSingleton getInstance() {
        return instance;
    }

    // This method is called by the serialization mechanism when an object is deserialized.
    // It allows the class to replace the object that will be returned from the readObject method.
    protected Object readResolve() {
        return instance; // Always return the existing instance
    }

    public void showMessage() {
        System.out.println("Hello from SerializableSingleton!");
    }
}
```

Finally, the most robust and recommended way to implement a Singleton in Java, especially since Java 5, is using an **enum**. Enums inherently guarantee that only one instance is created, they are thread-safe by default, and they automatically handle serialization and reflection attacks.

```java
public enum EnumSingleton {
    INSTANCE; // The single instance

    public void showMessage() {
        System.out.println("Hello from EnumSingleton!");
    }
}
```
This is concise, safe, and generally the best practice for implementing Singletons in modern Java applications.

While Singletons can be useful, they are often criticized for introducing global state, which can make testing difficult and lead to tight coupling if overused. Always consider if a Singleton is truly necessary or if dependency injection or a simple static utility class might be a better fit. Use them judiciously for genuinely unique resources.

#### Key concepts
*   **Singleton Pattern:** A creational design pattern that restricts the instantiation of a class to one "single" instance and provides a global point of access to it.
*   **Eager Initialization:** Creating the Singleton instance at the time of class loading, regardless of whether it's immediately needed.
*   **Lazy Initialization:** Creating the Singleton instance only when it's first requested, optimizing resource usage.
*   **Thread Safety:** Ensuring that the Singleton instance is correctly created and accessed in a multi-threaded environment without race conditions.
*   **Double-Checked Locking (DCL):** An optimization for lazy-initialized Singletons that reduces the overhead of synchronization by only locking during the initial creation. Requires the `volatile` keyword.
*   **`volatile` keyword:** Ensures that changes to a variable are immediately visible to all threads and prevents instruction reordering.
*   **Reflection Attack:** Using Java Reflection API to bypass the private constructor and create multiple instances of a Singleton.
*   **Serialization Issue:** When a `Serializable` Singleton is deserialized, a new instance can be created, violating the pattern. `readResolve()` method is used to prevent this.
*   **Enum Singleton:** The most robust and recommended way to implement Singleton in Java, inherently handling thread safety, serialization, and reflection.

#### Hands-on activity
**Activity: Implement a Configuration Manager Singleton**

Create a `ConfigurationManager` class that acts as a Singleton. This manager should load configuration properties (e.g., `appName`, `version`, `databaseUrl`) from a simulated source (e.g., hardcoded values or a simple `Map`) only once. Provide a method `getProperty(String key)` to retrieve configuration values.

**Starter Code:**
```java
// ConfigurationManager.java
import java.util.HashMap;
import java.util.Map;

public class ConfigurationManager {
    // TODO: Implement the Singleton pattern using the Enum approach for robustness.
    // Ensure the constructor (if explicitly defined) is private.

    private Map<String, String> properties;

    // TODO: Initialize properties in a way that ensures they are loaded only once.
    // For this exercise, hardcode some properties like "appName", "version", "databaseUrl".
    private ConfigurationManager() {
        properties = new HashMap<>();
        properties.put("appName", "MyAwesomeApp");
        properties.put("version", "1.0.0");
        properties.put("databaseUrl", "jdbc:mysql://localhost:3306/myapp_db");
        System.out.println("ConfigurationManager: Properties loaded.");
    }

    // TODO: Provide the global access method for the Singleton instance.

    public String getProperty(String key) {
        return properties.get(key);
    }

    public void printAllProperties() {
        System.out.println("--- Current Configuration ---");
        properties.forEach((key, value) -> System.out.println(key + ": " + value));
        System.out.println("-----------------------------");
    }
}

// Main.java (for testing)
public class Main {
    public static void main(String[] args) {
        // TODO: Get the Singleton instance multiple times and verify it's the same.
        // Call getProperty() and printAllProperties() to demonstrate functionality.
    }
}
```

#### Assessment idea
1.  **Question:** You are building a logging utility for a multi-threaded Java application. Which implementation of the Singleton pattern would be most appropriate to ensure that only one logger instance exists across the entire application, handling concurrent access safely and efficiently?
    *   A) Eager initialization
    *   B) Lazy initialization (non-thread-safe)
    *   C) Double-Checked Locking (DCL)
    *   D) Enum Singleton

    **Correct Answer:** D) Enum Singleton
    **Explanation:** The Enum Singleton is the most robust and recommended approach in modern Java. It inherently handles thread safety, prevents issues with reflection, and correctly manages serialization, making it ideal for critical components like a logging utility in a multi-threaded environment. While DCL (C) is thread-safe and lazy, it's more complex to implement correctly and still susceptible to reflection attacks if not carefully guarded. Eager initialization (A) is thread-safe but might create the logger unnecessarily, while non-thread-safe lazy initialization (B) would lead to multiple logger instances in a concurrent scenario.

2.  **Question:** Consider the following Singleton implementation:
    ```java
    public class SimpleSingleton {
        private static SimpleSingleton instance;
        private SimpleSingleton() {}
        public static SimpleSingleton getInstance() {
            if (instance == null) {
                instance = new SimpleSingleton();
            }
            return instance;
        }
    }
    ```
    What is the primary vulnerability of this implementation, especially in a concurrent application? How can it be fixed with minimal performance impact for subsequent calls?

    **Correct Answer:** The primary vulnerability is **lack of thread safety**. In a multi-threaded environment, if two threads call `getInstance()` simultaneously when `instance` is null, both might pass the `if (instance == null)` check, leading to two separate instances being created, violating the Singleton principle.

    To fix this with minimal performance impact for subsequent calls, you should use the **Double-Checked Locking (DCL)** pattern. The corrected code would look like this:
    ```java
    public class FixedSingleton {
        private static volatile FixedSingleton instance; // Use volatile
        private FixedSingleton() {}
        public static FixedSingleton getInstance() {
            if (instance == null) { // First check
                synchronized (FixedSingleton.class) { // Synchronize
                    if (instance == null) { // Second check
                        instance = new FixedSingleton();
                    }
                }
            }
            return instance;
        }
    }
    ```
    The `volatile` keyword ensures visibility and prevents instruction reordering, while the double check minimizes the time spent under the lock.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with a 3-minute animated whiteboard explanation of the Singleton concept and its common use cases (logger, config manager). Then, switch to a 7-minute live coding demo in IntelliJ IDEA, showing the evolution from eager to lazy (non-thread-safe), then synchronized, and finally DCL implementations with `volatile`. Briefly show the Enum Singleton as the best practice. Include a split-screen view of the code and console output showing instance creation messages. Conclude with a 2-minute interactive reflection prompt asking learners to identify a real-world scenario where a Singleton would be appropriate and why. Ensure captions and high-contrast visuals.

### Chapter 2.2 — The Factory Method Pattern: Decoupling Object Creation

#### Learning objectives
*   Explain the problem of tight coupling in object creation and how the Factory Method pattern addresses it.
*   Identify the key components and their roles within the Factory Method pattern (Product, Creator, ConcreteProduct, ConcreteCreator).
*   Implement the Factory Method pattern in Java to create objects based on different types or configurations.
*   Analyze the benefits of using the Factory Method pattern, such as enhanced flexibility, extensibility, and maintainability.

#### Detailed lesson content
As we continue our exploration of creational patterns, we now turn our attention to the Factory Method pattern. This pattern is often the first step towards more flexible object creation, addressing a common problem in software development: tight coupling between client code and the concrete classes it instantiates.

Imagine you're developing a document management system. At different points, your application needs to create various types of documents: Word documents, PDF documents, Excel spreadsheets, etc. A naive approach might involve client code directly instantiating these concrete document classes using `new`:

```java
// Naive approach: tight coupling
public class DocumentProcessor {
    public void processDocument(String type) {
        if (type.equals("Word")) {
            WordDocument doc = new WordDocument();
            doc.open();
            doc.save();
        } else if (type.equals("PDF")) {
            PdfDocument doc = new PdfDocument();
            doc.open();
            doc.print();
        }
        // ... more document types
    }
}
```
This approach has several drawbacks. First, the `DocumentProcessor` class is tightly coupled to `WordDocument`, `PdfDocument`, and any other concrete document classes. If you introduce a new document type (e.g., `HtmlDocument`), you have to modify `DocumentProcessor`, violating the Open/Closed Principle (software entities should be open for extension, but closed for modification). Second, the client code needs to know the specific class names and their constructors, making it less flexible.

The Factory Method pattern provides a solution by defining an interface for creating an object, but letting subclasses decide which class to instantiate. It "defers" instantiation to subclasses. In essence, it's a method that returns an instance of a class, but the exact class is determined by the subclass that implements the factory method.

Let's break down the components of the Factory Method pattern:
1.  **Product:** An interface or abstract class defining the type of objects the factory method creates. (e.g., `Document`)
2.  **ConcreteProduct:** Concrete implementations of the Product interface. (e.g., `WordDocument`, `PdfDocument`)
3.  **Creator:** An abstract class or interface that declares the factory method, which returns an object of type Product. It may also define other methods that use the Product. (e.g., `DocumentCreator`)
4.  **ConcreteCreator:** Concrete implementations of the Creator that override the factory method to return a specific ConcreteProduct. (e.g., `WordDocumentCreator`, `PdfDocumentCreator`)

Let's refactor our document example using the Factory Method pattern.

First, define the `Product` interface:
```java
// Product Interface
public interface Document {
    void open();
    void close();
    void save();
}

// Concrete Products
public class WordDocument implements Document {
    @Override
    public void open() { System.out.println("Opening Word Document."); }
    @Override
    public void close() { System.out.println("Closing Word Document."); }
    @Override
    public void save() { System.out.println("Saving Word Document."); }
}

public class PdfDocument implements Document {
    @Override
    public void open() { System.out.println("Opening PDF Document."); }
    @Override
    public void close() { System.out.println("Closing PDF Document."); }
    @Override
    public void save() { System.out.println("Saving PDF Document."); } // PDF might not "save" in the same way, but adheres to interface
}
```

Next, define the `Creator` abstract class with the factory method:
```java
// Creator Abstract Class
public abstract class DocumentCreator {
    // The factory method
    public abstract Document createDocument();

    // Other operations that use the created document
    public void processNewDocument() {
        Document doc = createDocument(); // Call the factory method
        doc.open();
        doc.save();
        doc.close();
        System.out.println("Document processed successfully.");
    }
}
```

Finally, implement the `ConcreteCreator` classes:
```java
// Concrete Creators
public class WordDocumentCreator extends DocumentCreator {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}

public class PdfDocumentCreator extends DocumentCreator {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}
```

Now, the client code interacts with the `Creator` and `Product` interfaces, completely decoupled from the concrete `WordDocument` or `PdfDocument` classes:
```java
// Client code
public class Application {
    public static void main(String[] args) {
        DocumentCreator wordCreator = new WordDocumentCreator();
        wordCreator.processNewDocument(); // Creates and processes a WordDocument

        DocumentCreator pdfCreator = new PdfDocumentCreator();
        pdfCreator.processNewDocument(); // Creates and processes a PdfDocument

        // Adding a new document type (e.g., ExcelDocument) requires
        // only adding ExcelDocument and ExcelDocumentCreator,
        // without modifying existing code.
    }
}
```
Notice how the `Application` class (client) doesn't use `new WordDocument()` or `new PdfDocument()`. Instead, it relies on the `DocumentCreator` and its subclasses to provide the appropriate `Document` instance. This is the power of the Factory Method.

**Benefits of the Factory Method Pattern:**
*   **Decoupling:** Client code is decoupled from the concrete product classes. It only knows about the `Product` interface and the `Creator` interface/abstract class.
*   **Extensibility:** Adding new product types is easy. You just create a new `ConcreteProduct` and a corresponding `ConcreteCreator` without modifying existing client or creator code. This adheres to the Open/Closed Principle.
*   **Flexibility:** The pattern allows subclasses to provide an extended version of an object. For example, a `SecurePdfDocumentCreator` could return a `SecurePdfDocument` that adds encryption features, without changing the `DocumentCreator` interface.
*   **Centralized Creation Logic:** The logic for creating specific products is encapsulated within the factory method, making it easier to manage and change.

**Common Mistakes:**
*   **Overuse:** Don't apply the Factory Method pattern if your application only ever needs to create one type of object or if the creation logic is trivial and unlikely to change. It adds a layer of abstraction that might be unnecessary complexity.
*   **Creating a "God" Factory:** Avoid putting all creation logic for *all* types of objects into a single factory class. This can lead to a monolithic factory that becomes difficult to maintain. The Factory Method pattern encourages a hierarchy of creators, each responsible for a specific type of product or family of products.
*   **Confusing with Simple Factory:** Sometimes, a simple static method that returns different object types based on an input parameter is called a "Simple Factory" or "Static Factory Method." While useful, it's not the Gang of Four Factory Method pattern, which relies on inheritance and polymorphism. The Simple Factory often violates the Open/Closed Principle if new product types require modifying the static factory method.

The Factory Method pattern is a cornerstone for building flexible and maintainable systems in Java. It's particularly useful when a class cannot anticipate the class of objects it must create, or when a class wants its subclasses to specify the objects it creates.

#### Key concepts
*   **Factory Method Pattern:** A creational design pattern that defines an interface for creating an object, but lets subclasses decide which class to instantiate. It defers instantiation to subclasses.
*   **Product:** The interface or abstract class for the objects the factory method creates.
*   **ConcreteProduct:** Specific implementations of the Product interface.
*   **Creator:** An abstract class or interface that declares the factory method, which returns an object of type Product. It may also define other operations that use the Product.
*   **ConcreteCreator:** A concrete implementation of the Creator that overrides the factory method to return a specific ConcreteProduct.
*   **Decoupling:** Reducing the direct dependencies between components, making them more independent and easier to change.
*   **Open/Closed Principle:** Software entities should be open for extension, but closed for modification. The Factory Method supports this by allowing new product types to be added without changing existing code.

#### Hands-on activity
**Activity: Implement a Logger Factory**

You need to develop a logging system where logs can be written to different destinations (e.g., Console, File, Database). Use the Factory Method pattern to create different types of loggers.

**Starter Code:**
```java
// Product Interface: Logger
public interface Logger {
    void log(String message);
}

// Concrete Products: ConsoleLogger, FileLogger
public class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println("Console Log: " + message);
    }
}

public class FileLogger implements Logger {
    private String fileName;

    public FileLogger(String fileName) {
        this.fileName = fileName;
        System.out.println("FileLogger initialized for: " + fileName);
    }

    @Override
    public void log(String message) {
        // In a real application, this would write to a file.
        System.out.println("Writing to " + fileName + ": " + message);
    }
}

// Creator Abstract Class: LoggerFactory
public abstract class LoggerFactory {
    // The factory method
    public abstract Logger createLogger();

    // An operation that uses the created logger
    public void logMessage(String message) {
        Logger logger = createLogger(); // Get the specific logger
        logger.log(message);
    }
}

// Concrete Creators: ConsoleLoggerFactory, FileLoggerFactory
public class ConsoleLoggerFactory extends LoggerFactory {
    @Override
    public Logger createLogger() {
        return new ConsoleLogger();
    }
}

public class FileLoggerFactory extends LoggerFactory {
    private String defaultFileName;

    public FileLoggerFactory(String defaultFileName) {
        this.defaultFileName = defaultFileName;
    }

    @Override
    public Logger createLogger() {
        return new FileLogger(defaultFileName);
    }
}

// Main.java (for testing)
public class Main {
    public static void main(String[] args) {
        // TODO: Create a ConsoleLoggerFactory and use it to log a message.
        // TODO: Create a FileLoggerFactory with a specific file name and use it to log a message.
        // Demonstrate how new logger types can be added without changing the Main class.
    }
}
```

#### Assessment idea
1.  **Question:** You are designing a game where characters (e.g., Warrior, Mage, Archer) need to be created. Each character type has specific initialization logic. Which design pattern would best allow you to create new character types without modifying the core game logic that requests character creation?
    *   A) Singleton
    *   B) Observer
    *   C) Factory Method
    *   D) Decorator

    **Correct Answer:** C) Factory Method
    **Explanation:** The Factory Method pattern is ideal here because it allows you to define an interface for character creation (e.g., `CharacterFactory`) and let subclasses (e.g., `WarriorFactory`, `MageFactory`) decide which concrete character class to instantiate. This decouples the game logic from the specific character types, making it easy to add new character classes and their factories without modifying existing code, adhering to the Open/Closed Principle. Singleton is for ensuring one instance, Observer for notifications, and Decorator for adding responsibilities dynamically.

2.  **Question:** Explain how the Factory Method pattern supports the Open/Closed Principle. Provide a brief example.

    **Correct Answer:** The Factory Method pattern supports the Open/Closed Principle by making software entities (like the client code and the `Creator` hierarchy) open for extension but closed for modification.

    **Explanation:**
    *   **Open for Extension:** When you need to introduce a new `Product` type (e.g., `ExcelDocument` in our example), you simply create a new `ConcreteProduct` class (`ExcelDocument`) and a new `ConcreteCreator` class (`ExcelDocumentCreator`) that implements the factory method to produce the new product. This extends the system's capabilities.
    *   **Closed for Modification:** The existing client code that uses the `Creator` interface or abstract class, and the existing `Creator` itself, do not need to be modified. They continue to work with the `Product` interface, unaware of the new concrete implementations.

    **Example:** If we wanted to add an `ExcelDocument` to our document processing system, we would:
    1.  Create `ExcelDocument` (implements `Document`).
    2.  Create `ExcelDocumentCreator` (extends `DocumentCreator` and overrides `createDocument()` to return `new ExcelDocument()`).
    The `Application` class (client) would then simply use `new ExcelDocumentCreator()` without any changes to its existing `main` method or `processNewDocument` logic.

#### AI generation note
Produce a 10-minute live coding video. Begin by showing the problem of tight coupling with a simple `Car` creation example using `if/else` statements. Then, refactor the code step-by-step to implement the Factory Method pattern. Show the `Product` interface (`Car`), `ConcreteProducts` (`Sedan`, `SUV`), `Creator` abstract class (`CarFactory`), and `ConcreteCreators` (`SedanFactory`, `SUVFactory`). Demonstrate how to add a new car type (`Truck`) by only adding new classes, without touching existing factory or client code. Use a split-screen view of the Java code in IntelliJ and console output. Conclude with a 1-question interactive quiz asking to identify the `Product` in the demonstrated example.

### Chapter 2.3 — The Abstract Factory Pattern: Families of Related Objects

#### Learning objectives
*   Understand the limitations of the Factory Method pattern when dealing with families of related objects.
*   Explain the purpose and structure of the Abstract Factory pattern, including AbstractFactory, ConcreteFactory, AbstractProduct, and ConcreteProduct.
*   Implement the Abstract Factory pattern in Java to create families of related objects.
*   Evaluate the benefits and trade-offs of using the Abstract Factory pattern for managing complex object creation.

#### Detailed lesson content
Building upon our understanding of the Factory Method pattern, we now move to a more sophisticated creational pattern: the Abstract Factory. While the Factory Method is excellent for creating a single type of product (e.g., different kinds of `Document`s), what if your application needs to create *families* of related or interdependent objects? This is where the Abstract Factory pattern shines.

Consider a scenario where you're developing a cross-platform UI toolkit. You need to create UI components like Buttons, Checkboxes, and TextFields. However, these components must look and behave differently depending on the operating system (e.g., Windows, macOS, Linux). A Windows button should look like a Windows button, and a macOS button should look like a macOS button. The key here is that a Windows button *must* be paired with a Windows checkbox and a Windows text field – you can't mix and match a Windows button with a macOS checkbox. This is a "family" of related products.

Trying to solve this with multiple Factory Methods would become cumbersome. You'd need a `WindowsButtonFactory`, a `WindowsCheckboxFactory`, a `MacOSButtonFactory`, a `MacOSCheckboxFactory`, and so on. This quickly leads to an explosion of factories and makes it hard to ensure consistency across the family.

The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It essentially creates a "factory of factories."

Let's break down the components of the Abstract Factory pattern:
1.  **AbstractProduct:** An interface or abstract class for a type of product in a family. (e.g., `Button`, `Checkbox`)
2.  **ConcreteProduct:** Specific implementations of AbstractProduct, belonging to a particular family. (e.g., `WindowsButton`, `MacOSButton`, `WindowsCheckbox`, `MacOSCheckbox`)
3.  **AbstractFactory:** An interface or abstract class that declares a set of factory methods for creating each type of AbstractProduct in the family. (e.g., `GUIFactory` with `createButton()`, `createCheckbox()`)
4.  **ConcreteFactory:** Concrete implementations of the AbstractFactory, each responsible for creating a specific family of ConcreteProducts. (e.g., `WindowsFactory`, `MacOSFactory`)
5.  **Client:** The application code that uses the AbstractFactory and AbstractProduct interfaces to create and interact with products, without knowing their concrete types.

Let's apply this to our cross-platform UI example.

First, define the `AbstractProduct` interfaces:
```java
// Abstract Products
public interface Button {
    void paint();
}

public interface Checkbox {
    void paint();
}
```

Next, define the `ConcreteProduct` classes for each family (e.g., Windows and macOS):
```java
// Concrete Products for Windows family
public class WindowsButton implements Button {
    @Override
    public void paint() {
        System.out.println("Rendering a button in Windows style.");
    }
}

public class WindowsCheckbox implements Checkbox {
    @Override
    public void paint() {
        System.out.println("Rendering a checkbox in Windows style.");
    }
}

// Concrete Products for macOS family
public class MacOSButton implements Button {
    @Override
    public void paint() {
        System.out.println("Rendering a button in macOS style.");
    }
}

public class MacOSCheckbox implements Checkbox {
    @Override
    public void paint() {
        System.out.println("Rendering a checkbox in macOS style.");
    }
}
```

Now, define the `AbstractFactory` interface with methods for creating each product in the family:
```java
// Abstract Factory
public interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}
```

Then, implement the `ConcreteFactory` classes for each specific family:
```java
// Concrete Factories
public class WindowsFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}

public class MacOSFactory implements GUIFactory {
    @Override
    public Button createButton() {
        return new MacOSButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new MacOSCheckbox();
    }
}
```

Finally, the client code interacts only with the abstract interfaces:
```java
// Client code
public class Application {
    private GUIFactory factory;
    private Button button;
    private Checkbox checkbox;

    public Application(GUIFactory factory) {
        this.factory = factory;
    }

    public void createUI() {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }

    public void paintUI() {
        button.paint();
        checkbox.paint();
    }

    public static void main(String[] args) {
        // Determine which factory to use based on configuration or environment
        String os = System.getProperty("os.name").toLowerCase();
        GUIFactory factory;

        if (os.contains("windows")) {
            factory = new WindowsFactory();
        } else if (os.contains("mac")) {
            factory = new MacOSFactory();
        } else {
            System.out.println("Unsupported OS, defaulting to Windows style.");
            factory = new WindowsFactory(); // Fallback
        }

        Application app = new Application(factory);
        app.createUI();
        app.paintUI();
    }
}
```
The client (`Application` class) is completely unaware of whether it's creating `WindowsButton` or `MacOSButton`. It only knows it's getting a `Button` and a `Checkbox` from a `GUIFactory`. This allows you to swap entire families of products simply by changing the `ConcreteFactory` instance passed to the `Application`.

**Benefits of the Abstract Factory Pattern:**
*   **Ensures Product Consistency:** Guarantees that the client uses products from only one family at a time, preventing incompatible products from being mixed.
*   **Decoupling:** Client code is decoupled from the concrete product implementations and the concrete factories. It works with interfaces.
*   **Extensibility:** Adding a new product family (e.g., `LinuxFactory` and `LinuxButton`/`LinuxCheckbox`) is straightforward. You only need to create the new concrete factory and its products, without modifying existing code.
*   **Encapsulates Creation Logic:** The responsibility for creating each product family is delegated to its respective concrete factory.

**Trade-offs and Common Mistakes:**
*   **Increased Complexity:** The Abstract Factory pattern introduces a significant number of interfaces and classes, which can be overkill for simpler applications that don't require families of products. This is a common mistake: over-engineering.
*   **Difficulty Adding New Product Types:** While adding a new *family* is easy, adding a new *type of product* (e.g., `TextField` to our UI example) requires modifying the `AbstractFactory` interface and *all* `ConcreteFactory` implementations to include the new `createTextField()` method. This violates the Open/Closed Principle for the factory itself. This is a significant drawback.
*   **Runtime vs. Compile-time Configuration:** The choice of which `ConcreteFactory` to use is typically made at runtime (e.g., based on OS or configuration), which provides great flexibility.

When deciding between Factory Method and Abstract Factory, ask yourself: "Do I need to create *one type* of object, where the specific implementation varies (Factory Method), or do I need to create *multiple, related types* of objects that belong to a consistent family (Abstract Factory)?" If you find yourself with multiple, interdependent factory methods, it's often a sign that Abstract Factory might be a better fit.

#### Key concepts
*   **Abstract Factory Pattern:** A creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
*   **AbstractProduct:** An interface or abstract class that defines a type of product in a family (e.g., `Button`).
*   **ConcreteProduct:** A specific implementation of an AbstractProduct, belonging to a particular product family (e.g., `WindowsButton`).
*   **AbstractFactory:** An interface or abstract class that declares a set of factory methods for creating each type of AbstractProduct in the family (e.g., `GUIFactory`).
*   **ConcreteFactory:** A concrete implementation of the AbstractFactory that creates a specific family of ConcreteProducts (e.g., `WindowsFactory`).
*   **Client:** The component that uses the AbstractFactory and AbstractProduct interfaces to create and interact with products.
*   **Family of Objects:** A set of related or interdependent products that must be created together to ensure consistency (e.g., all Windows UI components).
*   **Cross-Platform Development:** A common use case for Abstract Factory, allowing an application to adapt its appearance and behavior to different operating systems or environments.

#### Hands-on activity
**Activity: Implement a Database Connector Factory**

You need to connect to different types of databases (e.g., MySQL, PostgreSQL) and manage connections and queries. Use the Abstract Factory pattern to create families of related database components (e.g., `Connection`, `Statement`).

**Starter Code:**
```java
// Abstract Products
public interface DbConnection {
    void connect();
    void disconnect();
}

public interface DbStatement {
    void executeQuery(String query);
}

// Concrete Products for MySQL family
public class MySqlConnection implements DbConnection {
    @Override
    public void connect() { System.out.println("Connecting to MySQL database."); }
    @Override
    public void disconnect() { System.out.println("Disconnecting from MySQL database."); }
}

public class MySqlStatement implements DbStatement {
    @Override
    public void executeQuery(String query) { System.out.println("Executing MySQL query: " + query); }
}

// Concrete Products for PostgreSQL family
public class PostgreSqlConnection implements DbConnection {
    @Override
    public void connect() { System.out.println("Connecting to PostgreSQL database."); }
    @Override
    public void disconnect() { System.out.println("Disconnecting from PostgreSQL database."); }
}

public class PostgreSqlStatement implements DbStatement {
    @Override
    public void executeQuery(String query) { System.out.println("Executing PostgreSQL query: " + query); }
}

// Abstract Factory
public interface DatabaseFactory {
    DbConnection createConnection();
    DbStatement createStatement();
}

// Concrete Factories
public class MySqlFactory implements DatabaseFactory {
    @Override
    public DbConnection createConnection() {
        return new MySqlConnection();
    }
    @Override
    public DbStatement createStatement() {
        return new MySqlStatement();
    }
}

public class PostgreSqlFactory implements DatabaseFactory {
    @Override
    public DbConnection createConnection() {
        return new PostgreSqlConnection();
    }
    @Override
    public DbStatement createStatement() {
        return new PostgreSqlStatement();
    }
}

// Client code
public class DatabaseClient {
    private DatabaseFactory factory;
    private DbConnection connection;
    private DbStatement statement;

    public DatabaseClient(DatabaseFactory factory) {
        this.factory = factory;
    }

    public void setupDatabase() {
        connection = factory.createConnection();
        statement = factory.createStatement();
    }

    public void performOperations() {
        connection.connect();
        statement.executeQuery("SELECT * FROM users");
        connection.disconnect();
    }

    public static void main(String[] args) {
        // TODO: Create a MySQL client and perform operations.
        // TODO: Create a PostgreSQL client and perform operations.
        // Demonstrate how the client code remains independent of the specific database type.
    }
}
```

#### Assessment idea
1.  **Question:** You are developing an e-commerce platform that needs to support different payment gateways (e.g., PayPal, Stripe, Square). Each gateway requires specific implementations for processing payments, handling refunds, and generating invoices. Which design pattern is most suitable for creating these families of related payment objects while allowing easy switching between gateways?
    *   A) Singleton
    *   B) Factory Method
    *   C) Abstract Factory
    *   D) Builder

    **Correct Answer:** C) Abstract Factory
    **Explanation:** The Abstract Factory pattern is the most suitable because it deals with creating *families* of related objects. Here, a "PayPal family" would include a `PayPalPaymentProcessor`, `PayPalRefundHandler`, and `PayPalInvoiceGenerator`. Similarly, a "Stripe family" would have its own set of related components. Abstract Factory allows you to create an entire consistent set of objects for a chosen gateway without mixing components from different gateways, and to switch between these families easily. Factory Method would be less suitable as it focuses on creating a single type of product, not a family.

2.  **Question:** What is a significant drawback of the Abstract Factory pattern, particularly when the product family needs to be extended with new types of products? How does this compare to adding a new *family* of products?

    **Correct Answer:** A significant drawback of the Abstract Factory pattern is that **adding a new type of product** (e.g., adding a `TextField` to our UI example, or a `TransactionLogger` to our database example) requires modifying the `AbstractFactory` interface and *all* `ConcreteFactory` implementations. This violates the Open/Closed Principle for the factory itself, as existing factory code must be changed.

    **Explanation:**
    *   **Adding a new product type:** If you introduce a new `AbstractProduct` (e.g., `TextField`), you must add a new `createTextField()` method to the `GUIFactory` interface. Consequently, every existing `ConcreteFactory` (like `WindowsFactory` and `MacOSFactory`) must be updated to implement this new method, even if it's just to return a `null` or throw an `UnsupportedOperationException` for certain factories. This can be a maintenance burden.
    *   **Adding a new family of products:** In contrast, adding a new *family* of products (e.g., a `LinuxFactory` with `LinuxButton` and `LinuxCheckbox`) is straightforward. You simply create a new `ConcreteFactory` and its corresponding `ConcreteProducts` without modifying any existing interfaces or concrete factories. This adheres well to the Open/Closed Principle.

---

## Module 3: Advanced Creational Patterns & Best Practices
**Module Goal:** To equip learners with a deeper understanding of creational patterns beyond the basics, including their advanced applications, common pitfalls, and how to integrate them effectively within a robust Java application architecture.

### Chapter 3.1 — The Prototype Pattern – Cloning Objects Efficiently

#### Learning objectives
*   Understand the purpose and benefits of the Prototype design pattern for object creation.
*   Implement the `Cloneable` interface and override the `clone()` method correctly in Java.
*   Differentiate between shallow copying and deep copying, and implement both for complex objects.
*   Identify appropriate scenarios for applying the Prototype pattern in real-world Java applications.
*   Recognize and avoid common pitfalls associated with object cloning in Java.

#### Detailed lesson content
The Prototype design pattern is a creational pattern used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. Instead of creating new objects from scratch, which can be resource-intensive or complex, the Prototype pattern allows you to create new objects by copying an existing object. This approach is particularly useful when object creation is expensive, or when you need to create many similar objects with slight variations. The core idea is to "clone" an existing object, often referred to as the prototype, rather than invoking a constructor.

In Java, the `Cloneable` interface and the `Object.clone()` method are the primary mechanisms for implementing the Prototype pattern. The `Cloneable` interface is a marker interface, meaning it doesn't declare any methods. Its purpose is simply to indicate to the Java Virtual Machine (JVM) that an object of a class implementing this interface can be cloned. If you call `clone()` on an object whose class does not implement `Cloneable`, a `CloneNotSupportedException` will be thrown. The `Object.clone()` method performs a shallow copy of the object. A shallow copy means that if your object contains references to other objects (i.e., it has fields that are themselves objects, not primitives), only the references are copied, not the objects they point to. Both the original and the cloned object will share the same referenced objects. This can lead to unexpected side effects if one object modifies the shared referenced object, as the change will be visible to the other.

Consider a `Configuration` object that holds many settings. Creating a new `Configuration` object from scratch might involve reading from a file or a database. If you need several `Configuration` objects that are mostly similar but differ in only a few settings, cloning an existing `Configuration` object and then modifying only the necessary fields is far more efficient than creating each one independently. Similarly, in game development, if you have many enemy characters that share common properties but need individual positions or health values, cloning a prototype enemy object is a common and performant approach.

To implement the Prototype pattern correctly in Java, you typically override the `clone()` method from `Object` and ensure your class implements `Cloneable`. For a shallow copy, your `clone()` method might look like this:

```java
public class ShallowConfiguration implements Cloneable {
    private String theme;
    private int fontSize;
    private DatabaseConnection dbConnection; // Reference type

    public ShallowConfiguration(String theme, int fontSize, DatabaseConnection dbConnection) {
        this.theme = theme;
        this.fontSize = fontSize;
        this.dbConnection = dbConnection;
    }

    // Getters and Setters...

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone(); // Performs a shallow copy
    }

    // Example of a referenced object
    public static class DatabaseConnection {
        private String url;
        public DatabaseConnection(String url) { this.url = url; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }
}
```

In this `ShallowConfiguration` example, if you clone an instance and then modify the `dbConnection` object *through* the cloned instance, the original instance's `dbConnection` will also be affected because they both point to the same `DatabaseConnection` object in memory. This is a common mistake and a significant source of bugs when working with the Prototype pattern.

To avoid the issues of shallow copying when your object contains mutable reference types, you need to perform a deep copy. A deep copy means that not only the object itself is copied, but also all the objects it references, and all the objects *those* objects reference, and so on, recursively. This ensures that the original and cloned objects are completely independent. To achieve a deep copy, you need to manually clone each mutable reference type field within your `clone()` method.

Here's how you would implement a deep copy for the `Configuration` class:

```java
public class DeepConfiguration implements Cloneable {
    private String theme;
    private int fontSize;
    private DatabaseConnection dbConnection; // Reference type

    public DeepConfiguration(String theme, int fontSize, DatabaseConnection dbConnection) {
        this.theme = theme;
        this.fontSize = fontSize;
        this.dbConnection = dbConnection;
    }

    // Getters and Setters...

    @Override
    public Object clone() throws CloneNotSupportedException {
        DeepConfiguration clonedConfig = (DeepConfiguration) super.clone();
        // Perform deep copy for mutable reference types
        if (this.dbConnection != null) {
            clonedConfig.dbConnection = (DatabaseConnection) this.dbConnection.clone();
        }
        return clonedConfig;
    }

    public static class DatabaseConnection implements Cloneable {
        private String url;
        public DatabaseConnection(String url) { this.url = url; }
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }

        @Override
        public Object clone() throws CloneNotSupportedException {
            return super.clone(); // DatabaseConnection itself might contain mutable fields,
                                  // requiring its own deep copy logic if applicable.
        }
    }
}
```

Notice that `DatabaseConnection` itself must also implement `Cloneable` and override its `clone()` method for the deep copy to work correctly. If `DatabaseConnection` had further mutable reference fields, its `clone()` method would also need to perform deep copies of those. This recursive nature of deep cloning can become complex for highly nested objects.

A common mistake is forgetting to handle `CloneNotSupportedException`. While `Object.clone()` declares this checked exception, you might choose to catch it and rethrow it as an unchecked `RuntimeException` if you are certain that your class and all its components implement `Cloneable`, thereby simplifying client code. However, for library code or more robust applications, handling it explicitly is often better. Another pitfall is cloning immutable objects unnecessarily. If an object is truly immutable (all its fields are final and are either primitive or immutable objects themselves), a shallow copy is effectively a deep copy, and sometimes even just assigning the reference is sufficient, as there's no risk of modification.

The Prototype pattern is particularly powerful when used in conjunction with a "Prototype Manager" or "Registry." This manager would store a collection of prototype objects, each identified by a key. When a new object is needed, the client requests it from the manager using its key, and the manager returns a clone of the corresponding prototype. This decouples the client from the concrete classes and their instantiation logic, making the system more flexible. For example, a document editor might have a registry of different shape prototypes (circle, square, triangle). When the user wants to add a new circle, the editor requests a "circle" prototype from the registry and clones it, rather than knowing how to construct a `Circle` object directly.

#### Key concepts
*   **Prototype Pattern:** A creational design pattern that allows objects to be created by copying an existing object, known as the prototype, instead of creating new instances from scratch.
*   **`Cloneable` Interface:** A marker interface in Java that indicates a class permits cloning. If a class does not implement `Cloneable`, calling `Object.clone()` will throw `CloneNotSupportedException`.
*   **`Object.clone()` Method:** The protected method in `java.lang.Object` that performs a shallow copy of an object.
*   **Shallow Copy:** A copy where only the top-level fields of an object are duplicated. If a field is a reference to another object, only the reference is copied, meaning both the original and the cloned object share the same underlying referenced object.
*   **Deep Copy:** A copy where all fields, including referenced objects, are recursively duplicated. This ensures that the original and cloned objects are completely independent, with no shared mutable state.
*   **Prototype Registry/Manager:** A component that stores and manages a collection of prototype objects, allowing clients to retrieve and clone prototypes by a key or identifier.

#### Hands-on activity
**Objective:** Implement a `Document` class that uses the Prototype pattern to create copies, demonstrating both shallow and deep copy behaviors for its `Author` and `Content` components.

**Instructions:**
1.  Create a `Document` class, an `Author` class, and a `Content` class.
2.  The `Author` class should have a `name` (String) and `email` (String).
3.  The `Content` class should have `text` (String) and `version` (int).
4.  The `Document` class should contain an `Author` object and a `Content` object.
5.  Implement the `Cloneable` interface for `Document`, `Author`, and `Content`.
6.  Override the `clone()` method in `Document` to demonstrate **deep copying** of `Author` and `Content` objects.
7.  In your `main` method, create an original `Document` object.
8.  Create a clone of the original document.
9.  Modify the `name` of the `Author` in the *cloned* document.
10. Modify the `text` of the `Content` in the *cloned* document.
11. Print the details of both the original and the cloned document to verify that the changes in the clone did not affect the original (deep copy).

**Code Template:**

```java
import java.util.Objects;

// Author class - should be cloneable for deep copy
class Author implements Cloneable {
    private String name;
    private String email;

    public Author(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    @Override
    public String toString() {
        return "Author{name='" + name + "', email='" + email + "'}";
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        // Shallow copy is sufficient here as String is immutable.
        // If Author had mutable reference fields, they would need deep cloning.
        return super.clone();
    }
}

// Content class - should be cloneable for deep copy
class Content implements Cloneable {
    private String text;
    private int version;

    public Content(String text, int version) {
        this.text = text;
        this.version = version;
    }

    // Getters and Setters
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
    public int getVersion() { return version; }
    public void setVersion(int version) { this.version = version; }

    @Override
    public String toString() {
        return "Content{text='" + text + "', version=" + version + "}";
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        // Shallow copy is sufficient here as String is immutable.
        return super.clone();
    }
}

// Document class - implements Prototype pattern with deep copy
class Document implements Cloneable {
    private String title;
    private Author author;
    private Content content;

    public Document(String title, Author author, Content content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    // Getters and Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Author getAuthor() { return author; }
    public void setAuthor(Author author) { this.author = author; }
    public Content getContent() { return content; }
    public void setContent(Content content) { this.content = content; }

    @Override
    public String toString() {
        return "Document{" +
               "title='" + title + '\'' +
               ", author=" + author +
               ", content=" + content +
               '}';
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        Document clonedDocument = (Document) super.clone();
        // Perform deep copy for mutable reference types
        clonedDocument.author = (Author) author.clone();
        clonedDocument.content = (Content) content.clone();
        return clonedDocument;
    }
}

public class PrototypeDemo {
    public static void main(String[] args) {
        // 1. Create original objects
        Author originalAuthor = new Author("Jane Doe", "jane.doe@example.com");
        Content originalContent = new Content("Initial draft text.", 1);
        Document originalDocument = new Document("Project Proposal", originalAuthor, originalContent);

        System.out.println("Original Document: " + originalDocument);

        // 2. Create a clone
        Document clonedDocument = null;
        try {
            clonedDocument = (Document) originalDocument.clone();
            System.out.println("Cloned Document (before modification): " + clonedDocument);

            // 3. Modify the cloned document's components
            clonedDocument.setTitle("Revised Project Proposal");
            clonedDocument.getAuthor().setName("John Smith"); // Modify author in clone
            clonedDocument.getContent().setText("Final approved text."); // Modify content in clone
            clonedDocument.getContent().setVersion(2);

            System.out.println("\nCloned Document (after modification): " + clonedDocument);
            System.out.println("Original Document (after clone modification): " + originalDocument);

        } catch (CloneNotSupportedException e) {
            System.err.println("Cloning not supported: " + e.getMessage());
        }
    }
}
```

#### Assessment idea
1.  **Question:** You have a `User` class with fields `String username` and `Address address`. If you implement `Cloneable` and `clone()` using `super.clone()`, then create a `User` and clone it, what happens if you change the `street` field of the `Address` object in the *cloned* `User`?
    *   **A) The original `User`'s `Address` object will also reflect the change.**
    *   B) Only the cloned `User`'s `Address` object will reflect the change.
    *   C) A `CloneNotSupportedException` will be thrown.
    *   D) A `NullPointerException` will be thrown.

    **Correct Answer:** A) The original `User`'s `Address` object will also reflect the change.
    **Explanation:** Calling `super.clone()` performs a shallow copy. This means that for reference type fields like `Address`, only the reference itself is copied, not the `Address` object it points to. Both the original and the cloned `User` objects will hold references to the *same* `Address` object in memory. Therefore, modifying the `Address` through one `User` instance will affect the `Address` seen by the other. To prevent this, a deep copy of the `Address` object would be required within the `User`'s `clone()` method.

2.  **Question:** When is the Prototype pattern generally more advantageous than using a constructor or a Factory method for object creation?
    *   A) When objects have a simple construction process with few parameters.
    *   B) When the exact type of object to create is known at compile time and doesn't change.
    *   **C) When object creation is computationally expensive, or when many similar objects with slight variations are needed.**
    *   D) When you need to ensure only a single instance of a class exists throughout the application.

    **Correct Answer:** C) When object creation is computationally expensive, or when many similar objects with slight variations are needed.
    **Explanation:** The Prototype pattern shines when creating new objects from scratch (e.g., via constructors or factories) is costly in terms of performance or resources. By cloning an existing prototype, you bypass the potentially expensive initialization steps. It's also ideal for scenarios where you need to produce numerous objects that are mostly identical to an existing one, allowing for efficient customization of the cloned instances. Options A and B describe scenarios where constructors or simple factories are perfectly adequate. Option D describes the Singleton pattern.

#### AI generation note
Create a 12-minute video tutorial with live coding and diagrams. Start by explaining the concept of the Prototype pattern with an analogy (e.g., a 3D printer making copies of a model). Then, demonstrate implementing `Cloneable` and `Object.clone()` in Java with a simple `Config` class containing a `String` and an `int`. Show the output. Next, introduce a mutable `Settings` object as a field within `Config` and demonstrate the problem of shallow copying, showing how changes in the cloned `Settings` affect the original. Finally, refactor the code to perform a deep copy by manually cloning the `Settings` object, and verify that changes in the clone no longer affect the original. Use a side-by-side view of the code editor and console output. Include visual overlays to illustrate memory addresses for shallow vs. deep copy. End with a reflection prompt: "Consider a scenario in a large application where you might inadvertently introduce a shallow copy bug. How would you debug it?"

### Chapter 3.2 — The Builder Pattern – Constructing Complex Objects Step-by-Step

#### Learning objectives
*   Explain the motivation and benefits of using the Builder pattern for complex object construction.
*   Implement the Builder pattern in Java to create objects with many optional parameters.
*   Design a fluent API using method chaining for a more readable and expressive object construction process.
*   Understand how the Builder pattern promotes immutability and improves code clarity compared to traditional constructors.
*   Compare and contrast the Builder pattern with other creational patterns like Factory Method and constructors.

#### Detailed lesson content
The Builder design pattern is a creational pattern that aims to separate the construction of a complex object from its representation, allowing the same construction process to create different representations. This pattern is particularly useful when an object needs to be created with many optional parameters, or when its construction involves a complex, multi-step process. Without the Builder pattern, you might end up with "telescoping constructors" (multiple constructors with increasing numbers of parameters) or a constructor with a large number of parameters, making it difficult to read, maintain, and use correctly.

Imagine you're building a `Pizza` object. A pizza can have a base, cheese, sauce, and a multitude of toppings (pepperoni, mushrooms, olives, onions, etc.). Not all pizzas have all toppings. If you tried to use a single constructor, it would be unwieldy: `new Pizza(base, cheese, sauce, pepperoni, mushrooms, olives, onions, ...)` where many parameters would be `null` or `false`. This is hard to read and prone to errors (e.g., accidentally swapping `pepperoni` and `mushrooms` booleans). The Builder pattern solves this by providing a step-by-step approach to object construction.

The core idea of the Builder pattern is to have a separate `Builder` class responsible for constructing the target object. This `Builder` class typically has methods that correspond to setting the various properties of the object. These methods often return the `Builder` instance itself, enabling method chaining (a "fluent API"). Once all desired properties are set, a final `build()` method is called on the `Builder` to produce the immutable target object. This approach makes the construction process much more readable and less error-prone, as each step is explicitly named.

Let's illustrate with a `User` object that might have many optional fields:

```java
public class User {
    private final String firstName;    // Required
    private final String lastName;     // Required
    private final int age;             // Optional
    private final String phone;        // Optional
    private final String address;      // Optional

    // Private constructor, only accessible by the Builder
    private User(UserBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.phone = builder.phone;
        this.address = builder.address;
    }

    // Getters for all fields (no setters, promoting immutability)
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public int getAge() { return age; }
    public String getPhone() { return phone; }
    public String getAddress() { return address; }

    @Override
    public String toString() {
        return "User{" +
               "firstName='" + firstName + '\'' +
               ", lastName='" + lastName + '\'' +
               ", age=" + age +
               ", phone='" + phone + '\'' +
               ", address='" + address + '\'' +
               '}';
    }

    // Inner static Builder class
    public static class UserBuilder {
        private final String firstName;
        private final String lastName;
        private int age = 0; // Default value for optional fields
        private String phone = null;
        private String address = null;

        // Constructor for required fields
        public UserBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // Methods for setting optional fields, returning the builder itself
        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }

        public UserBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public UserBuilder address(String address) {
            this.address = address;
            return this;
        }

        // The build method to construct the User object
        public User build() {
            // Optional: add validation here before building
            if (age < 0) {
                throw new IllegalArgumentException("Age cannot be negative.");
            }
            return new User(this);
        }
    }
}
```

To use this `UserBuilder`, the client code would look like this:

```java
public class BuilderDemo {
    public static void main(String[] args) {
        // Create a user with only required fields
        User user1 = new User.UserBuilder("Alice", "Smith").build();
        System.out.println(user1);

        // Create a user with some optional fields
        User user2 = new User.UserBuilder("Bob", "Johnson")
                            .age(30)
                            .phone("123-456-7890")
                            .build();
        System.out.println(user2);

        // Create a user with all optional fields
        User user3 = new User.UserBuilder("Charlie", "Brown")
                            .age(25)
                            .phone("987-654-3210")
                            .address("123 Main St, Anytown")
                            .build();
        System.out.println(user3);

        // Demonstrate validation
        try {
            User invalidUser = new User.UserBuilder("Invalid", "User")
                                    .age(-5)
                                    .build();
            System.out.println(invalidUser); // This line won't be reached
        } catch (IllegalArgumentException e) {
            System.err.println("Error creating user: " + e.getMessage());
        }
    }
}
```

The benefits of the Builder pattern are numerous. Firstly, it significantly improves readability and maintainability, especially for objects with many parameters, by replacing long, confusing constructor calls with clearly named methods. Secondly, it enforces immutability for the constructed object because the `User` class has `final` fields and no public setters; all values are set once via the builder's private constructor. This is a huge advantage for thread safety and predictable object state. Thirdly, the Builder pattern allows for more robust validation. You can place validation logic within the `build()` method, ensuring that the constructed object is always in a valid state before it's returned. This centralizes validation and prevents the creation of partially initialized or invalid objects.

A common mistake is making the `UserBuilder`'s fields mutable after the `build()` method is called. While the `User` object itself is immutable, the `UserBuilder` instance can potentially be reused if its fields are not reset or if a new builder isn't created for each object. For most use cases, creating a new builder instance for each object construction is the safest and clearest approach. Another pitfall is using the Builder pattern for objects that are very simple to construct (e.g., only one or two parameters). In such cases, a simple constructor or a static factory method would be overkill and add unnecessary complexity.

The Builder pattern is often compared to the Factory Method pattern. While both are creational patterns, they serve different purposes. A Factory Method focuses on *what* type of object to create (e.g., `createCar("sedan")` vs. `createCar("suv")`), delegating instantiation to subclasses or helper methods. The Builder pattern, on the other hand, focuses on *how* to construct a single, complex object step-by-step, especially when that object has many optional parts or a complex internal structure. You might even combine them: a Factory Method could return a specific type of Builder (e.g., `CarFactory.createSedanBuilder()`), and then you use that builder to configure the sedan.

In modern Java development, especially with frameworks like Spring, the Builder pattern is still highly relevant. While Spring's Dependency Injection handles much of the object creation and wiring, there are still many scenarios where you need to construct complex data transfer objects (DTOs), configuration objects, or domain entities that benefit from the controlled, step-by-step construction that the Builder pattern provides. For instance, building a complex query object or a HTTP request object with numerous headers, parameters, and body content is a perfect use case for a Builder.

#### Key concepts
*   **Builder Pattern:** A creational design pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations. It's used to construct objects step-by-step.
*   **Telescoping Constructors:** A common anti-pattern where a class has multiple constructors with increasing numbers of parameters to handle optional fields, leading to poor readability and maintainability.
*   **Fluent API (Method Chaining):** A programming style where multiple method calls are chained together on the same object, with each method returning the object itself (`this`), making the code more readable and expressive.
*   **Immutability:** A state where an object's internal state cannot be modified after it has been created. The Builder pattern often promotes immutability by constructing the final object with `final` fields and no public setters.
*   **Validation:** The process of ensuring that the data or parameters used to construct an object are valid. The Builder pattern allows for centralized validation logic within the `build()` method.
*   **Inner Static Builder Class:** A common implementation detail where the `Builder` class is defined as a static nested class within the complex object it constructs, providing direct access to the outer class's private constructor.

#### Hands-on activity
**Objective:** Implement the Builder pattern for a `Computer` class that can be configured with various optional components.

**Instructions:**
1.  Create a `Computer` class with the following fields:
    *   `String cpu` (required)
    *   `int ramGB` (required)
    *   `String storageType` (e.g., "SSD", "HDD") (optional, default "SSD")
    *   `int storageGB` (optional, default 500)
    *   `String gpu` (optional, default "Integrated")
    *   `boolean hasWifi` (optional, default true)
    *   `String operatingSystem` (optional, default "Windows")

2.  Make the `Computer` class immutable (all fields `final`, private constructor, only getters).
3.  Implement an inner static `ComputerBuilder` class.
4.  The `ComputerBuilder` constructor should take the required `cpu` and `ramGB` parameters.
5.  Implement fluent methods for all optional fields (e.g., `storageType(String type)`, `gpu(String model)`).
6.  Implement a `build()` method in `ComputerBuilder` that returns a `Computer` instance. Include basic validation, for example, `ramGB` must be positive.
7.  In a `main` method, demonstrate creating several `Computer` objects with different configurations using your `ComputerBuilder`. Print each computer's details.

**Code Template:**

```java
public class Computer {
    // Required fields
    private final String cpu;
    private final int ramGB;

    // Optional fields with defaults
    private final String storageType;
    private final int storageGB;
    private final String gpu;
    private final boolean hasWifi;
    private final String operatingSystem;

    // Private constructor to be used only by the Builder
    private Computer(ComputerBuilder builder) {
        this.cpu = builder.cpu;
        this.ramGB = builder.ramGB;
        this.storageType = builder.storageType;
        this.storageGB = builder.storageGB;
        this.gpu = builder.gpu;
        this.hasWifi = builder.hasWifi;
        this.operatingSystem = builder.operatingSystem;
    }

    // Getters for all fields
    public String getCpu() { return cpu; }
    public int getRamGB() { return ramGB; }
    public String getStorageType() { return storageType; }
    public int getStorageGB() { return storageGB; }
    public String getGpu() { return gpu; }
    public boolean hasWifi() { return hasWifi; }
    public String getOperatingSystem() { return operatingSystem; }

    @Override
    public String toString() {
        return "Computer{" +
               "cpu='" + cpu + '\'' +
               ", ramGB=" + ramGB +
               ", storageType='" + storageType + '\'' +
               ", storageGB=" + storageGB +
               ", gpu='" + gpu + '\'' +
               ", hasWifi=" + hasWifi +
               ", operatingSystem='" + operatingSystem + '\'' +
               '}';
    }

    // Inner static Builder class
    public static class ComputerBuilder {
        // Required fields (must be set in builder constructor)
        private final String cpu;
        private final int ramGB;

        // Optional fields with default values
        private String storageType = "SSD";
        private int storageGB = 500;
        private String gpu = "Integrated";
        private boolean hasWifi = true;
        private String operatingSystem = "Windows";

        // Builder constructor for required fields
        public ComputerBuilder(String cpu, int ramGB) {
            this.cpu = cpu;
            this.ramGB = ramGB;
        }

        // Fluent methods for optional fields
        public ComputerBuilder storageType(String storageType) {
            this.storageType = storageType;
            return this;
        }

        public ComputerBuilder storageGB(int storageGB) {
            this.storageGB = storageGB;
            return this;
        }

        public ComputerBuilder gpu(String gpu) {
            this.gpu = gpu;
            return this;
        }

        public ComputerBuilder hasWifi(boolean hasWifi) {
            this.hasWifi = hasWifi;
            return this;
        }

        public ComputerBuilder operatingSystem(String operatingSystem) {
            this.operatingSystem = operatingSystem;
            return this;
        }

        // Build method
        public Computer build() {
            // Basic validation
            if (ramGB <= 0) {
                throw new IllegalArgumentException("RAM must be a positive value.");
            }
            if (storageGB <= 0) {
                throw new IllegalArgumentException("Storage must be a positive value.");
            }
            // Further validation can be added here
            return new Computer(this);
        }
    }
}

class ComputerBuilderDemo {
    public static void main(String[] args) {
        // Build a basic office computer
        Computer officePC = new Computer.ComputerBuilder("Intel i5", 8)
                                        .build();
        System.out.println("Office PC: " + officePC);

        // Build a gaming computer
        Computer gamingPC = new Computer.ComputerBuilder("AMD Ryzen 7", 32)
                                        .gpu("NVIDIA RTX 4070")
                                        .storageType("NVMe SSD")
                                        .storageGB(1000)
                                        .operatingSystem("Windows 11")
                                        .build();
        System.out.println("Gaming PC: " + gamingPC);

        // Build a server with specific requirements
        Computer server = new Computer.ComputerBuilder("Intel Xeon", 64)
                                      .storageType("RAID HDD")
                                      .storageGB(8000)
                                      .hasWifi(false) // Servers often don't need Wi-Fi
                                      .operatingSystem("Linux Server")
                                      .build();
        System.out.println("Server: " + server);

        // Demonstrate validation
        try {
            Computer invalidPC = new Computer.ComputerBuilder("Faulty CPU", -4)
                                            .build();
            System.out.println(invalidPC);
        } catch (IllegalArgumentException e) {
            System.err.println("Error building PC: " + e.getMessage());
        }
    }
}
```

#### Assessment idea
1.  **Question:** Which of the following is a primary benefit of using the Builder pattern over a constructor with many parameters for object creation?
    *   A) It guarantees that only a single instance of the object will ever be created.
    *   B) It allows for dynamic selection of the object's class at runtime.
    *   **C) It improves readability and reduces the chance of parameter mismatch errors, especially with many optional fields.**
    *   D) It automatically handles object serialization and deserialization.

    **Correct Answer:** C) It improves readability and reduces the chance of parameter mismatch errors, especially with many optional fields.
    **Explanation:** The Builder pattern replaces a long, potentially confusing constructor call with a series of clearly named methods, each setting a specific property. This fluent API makes the object construction process much more readable and less prone to errors where parameters might be accidentally swapped (e.g., two booleans or two strings). Options A relates to Singleton, B to Factory Method, and D is unrelated to the Builder pattern.

2.  **Question:** You are designing a `Report` object that can include various sections like `header`, `footer`, `tableOfContents`, `introduction`, `conclusion`, and several `dataSections`. Most reports only need a subset of these. How would you structure the `Report` class and its creation mechanism using the Builder pattern to ensure immutability and flexible configuration?
    *   A) Create multiple constructors for `Report`, each taking a different combination of sections.
    *   B) Make all `Report` fields public and allow direct assignment after instantiation.
    *   C) Use a `ReportFactory` that has a separate method for each type of report (e.g., `createFullReport()`, `createSummaryReport()`).
    *   **D) Define a private constructor for `Report` that takes a `ReportBuilder` instance, and implement an inner static `ReportBuilder` with fluent methods for each optional section, culminating in a `build()` method.**

    **Correct Answer:** D) Define a private constructor for `Report` that takes a `ReportBuilder` instance, and implement an inner static `ReportBuilder` with fluent methods for each optional section, culminating in a `build()` method.
    **Explanation:** This approach perfectly aligns with the Builder pattern. The private constructor ensures that `Report` objects can only be created via the `ReportBuilder`, promoting controlled construction. The inner static `ReportBuilder` with fluent methods allows for step-by-step configuration of optional sections, improving readability and flexibility. The `build()` method then instantiates the immutable `Report` object, ensuring its state is finalized after construction. Options A leads to telescoping constructors, B violates encapsulation and immutability, and C, while a valid pattern, focuses on *what* report type rather than *how* to build a complex, configurable report.

#### AI generation note
Produce a 10-minute interactive live coding session. Begin by showing the problem of "telescoping constructors" with a `Product` class having many optional attributes (e.g., `name`, `price`, `description`, `category`, `weight`, `dimensions`). Then, refactor the `Product` class to use the Builder pattern, demonstrating the creation of an inner static `ProductBuilder` class. Implement fluent methods for setting optional attributes and a `build()` method. Show how to construct `Product` objects with different configurations using method chaining. Emphasize how this improves readability and allows for validation in the `build()` method. Include a short interactive coding exercise where the user completes a missing fluent method in the builder. Use a split-screen view of the IDE and a console showing the output. Highlight the immutability aspect.

### Chapter 3.3 — Dependency Injection (DI) and Inversion of Control (IoC) with Creational Patterns

#### Learning objectives
*   Define Inversion of Control (IoC) and explain its role in decoupling components.
*   Understand Dependency Injection (DI) as a specific implementation of IoC and its benefits in modern Java applications.
*   Identify the different types of Dependency Injection (constructor, setter, field) and their practical implications.
*   Explain how DI frameworks like Spring manage object creation and dependencies, relating it to creational patterns.
*   Analyze how patterns like Singleton and Factory Method are implicitly handled or complemented by DI containers.

#### Detailed lesson content
In modern software development, especially in enterprise Java applications, managing object creation and their interdependencies can become incredibly complex. This is where the principles of Inversion of Control (IoC) and Dependency Injection (DI) become indispensable. Inversion of Control is a broader principle where the control of an object's flow or behavior is "inverted" from the application code itself to a framework or container. Instead of the application actively calling a library, the framework calls into the application code.

Dependency Injection is a concrete implementation of IoC, specifically focusing on how objects receive their dependencies. Instead of an object being responsible for creating or looking up its own dependencies (which leads to tight coupling), the dependencies are "injected" into the object by an external entity, typically an IoC container or framework. This drastically reduces coupling between components, making them more modular, testable, and easier to maintain.

Consider a `UserService` that needs a `UserRepository` to perform its operations. Without DI, the `UserService` might create its own `UserRepository` instance:

```java
// Without DI - Tight Coupling
public class UserService {
    private UserRepository userRepository;

    public UserService() {
        this.userRepository = new UserRepositoryImpl(); // UserService creates its own dependency
    }

    public User getUserById(Long id) {
        return userRepository.findById(id);
    }
}
```

This approach creates tight coupling: `UserService` is directly dependent on `UserRepositoryImpl`. If you want to use a different implementation (e.g., `MockUserRepository` for testing, or `JpaUserRepository` for production), you have to modify `UserService`'s code.

With Dependency Injection, the `UserRepository` is provided to the `UserService` from the outside. There are three main types of DI:

1.  **Constructor Injection:** Dependencies are provided through the class's constructor. This is generally considered the best practice as it ensures that the object is created in a valid state with all its required dependencies, and it promotes immutability.

    ```java
    // Constructor Injection
    public class UserService {
        private final UserRepository userRepository; // Final for immutability

        public UserService(UserRepository userRepository) { // Dependency injected via constructor
            this.userRepository = userRepository;
        }

        public User getUserById(Long id) {
            return userRepository.findById(id);
        }
    }
    ```

2.  **Setter Injection:** Dependencies are provided through public setter methods. This allows for optional dependencies or for changing dependencies after object creation, but it doesn't guarantee that the object is fully initialized upon creation.

    ```java
    // Setter Injection
    public class UserService {
        private UserRepository userRepository;

        public void setUserRepository(UserRepository userRepository) { // Dependency injected via setter
            this.userRepository = userRepository;
        }

        public User getUserById(Long id) {
            // Null check might be needed if dependency is optional
            if (userRepository == null) {
                throw new IllegalStateException("UserRepository not set.");
            }
            return userRepository.findById(id);
        }
    }
    ```

3.  **Field Injection (or Property Injection):** Dependencies are injected directly into private fields, often using reflection. This is the most concise but also the least testable and least recommended approach outside of framework-managed environments (like Spring's `@Autowired` on fields), as it bypasses constructors and setters, making it harder to instantiate the object in isolation for unit testing.

    ```java
    // Field Injection (common in Spring, less ideal for pure Java)
    public class UserService {
        @Autowired // Spring annotation
        private UserRepository userRepository; // Dependency injected directly into field

        public User getUserById(Long id) {
            return userRepository.findById(id);
        }
    }
    ```

DI frameworks like Spring (or Google Guice, Quarkus, Micronaut) act as IoC containers. They are responsible for:
*   **Object Creation (Instantiation):** They create instances of your application's classes (often called "beans" or "components"). This is where creational patterns come into play.
*   **Dependency Resolution:** They identify the dependencies that each object needs.
*   **Dependency Injection:** They inject those dependencies into the objects, typically using constructor or setter injection (though field injection is also supported).
*   **Lifecycle Management:** They manage the lifecycle of objects, from creation to destruction.

How do creational patterns relate to DI?
The IoC container essentially acts as a sophisticated **Factory** and **Singleton manager** for your application.

*   **Factory Method/Abstract Factory:** When you define a `@Bean` method in Spring, you are essentially creating a Factory Method. The method returns an instance of an object, and Spring decides when and how to call this method to get an object. For example:

    ```java
    @Configuration
    public class AppConfig {
        @Bean
        public UserRepository userRepository() {
            // Spring acts as a factory, creating and managing this instance
            return new JpaUserRepository();
        }

        @Bean
        public UserService userService(UserRepository userRepository) {
            // Spring injects the UserRepository created above
            return new UserService(userRepository);
        }
    }
    ```
    Here, `userRepository()` and `userService()` are effectively factory methods managed by Spring. The container abstracts away the `new` keyword from your application code.

*   **Singleton:** By default, Spring beans are singletons. This means that for a given bean definition, the Spring container creates only one instance of that bean and manages its lifecycle. Whenever a dependency on that bean is required, the same single instance is provided. This effectively implements the Singleton pattern, but in a much more controlled and testable way than a traditional static `getInstance()` method. You can change the scope of a bean (e.g., to `prototype` for a new instance every time) using annotations like `@Scope("prototype")`, but `singleton` is the default and most common.

    ```java
    @Component // Marks this class as a Spring-managed component
    @Scope("singleton") // Explicitly defining scope, though it's the default
    public class MySingletonService {
        // ...
    }
    ```
    This is a "managed singleton" – its singularity is managed by the container, not by the class itself, which is a key difference from the traditional Singleton pattern. This makes it much easier to swap out for a different implementation or a mock in tests.

*   **Builder:** While DI frameworks primarily manage the creation of services and components, the Builder pattern is still highly valuable for constructing complex *data objects* or *configuration objects* that are then *injected* or used within your services. For example, you might use a Builder to construct a complex `HttpClient` instance with many specific settings, and then inject that fully configured `HttpClient` into another service. The Builder handles the internal complexity of creating one specific object, while DI handles the wiring of that object into the broader application graph.

In summary, IoC and DI provide a powerful mechanism to manage object creation and dependencies, significantly improving the modularity, testability, and maintainability of Java applications. They often implicitly handle or provide alternatives to traditional creational patterns, offering a more flexible and robust approach to object lifecycle management. Common mistakes include over-injecting dependencies (leading to "constructor hell" if not careful with design), or misunderstanding bean scopes which can lead to unexpected state sharing issues, especially with non-singleton beans. Always prefer constructor injection for required dependencies and ensure your components are designed for testability by being easily mockable.

#### Key concepts
*   **Inversion of Control (IoC):** A design principle where the control of an object's flow or behavior is "inverted" from the application code to a framework or container. The framework calls into the application code.
*   **Dependency Injection (DI):** A specific implementation of IoC where an object receives its dependencies from an external source (an IoC container) rather than creating or looking them up itself. This reduces coupling.
*   **IoC Container (DI Container):** A framework (like Spring) that manages the instantiation, configuration, and lifecycle of application objects (beans/components) and injects their dependencies.
*   **Constructor Injection:** Dependencies are provided through the class's constructor. Preferred for required dependencies and promoting immutability.
*   **Setter Injection:** Dependencies are provided through public setter methods. Useful for optional dependencies or mutable configurations.
*   **Field Injection:** Dependencies are injected directly into private fields, often using reflection and annotations (e.g., `@Autowired` in Spring). Less recommended for pure Java, but common in frameworks.
*   **Managed Singleton:** A singleton instance whose creation and lifecycle are managed by an IoC container, contrasting with the traditional Singleton pattern where the class itself enforces singularity. Spring beans are singletons by default.
*   **`@Configuration`:** A Spring annotation indicating that a class declares one or more `@Bean` methods and can be processed by the Spring IoC container to generate bean definitions and service requests for those beans at runtime.
*   **`@Bean`:** A Spring annotation used on methods to indicate that the method returns an object that should be registered as a bean in the Spring application context.

#### Hands-on activity
**Objective:** Set up a simple Spring Boot application to demonstrate Dependency Injection using constructor injection, and observe how Spring manages component creation and scope.

**Instructions:**
1.  Initialize a new Spring Boot project (e.g., using Spring Initializr) with the "Spring Web" dependency.
2.  Create an interface `MessageService` with a method `String getMessage()`.
3.  Create an implementation `GreetingService` for `MessageService` that returns "Hello from GreetingService!".
4.  Create a `NotificationService` class that has a dependency on `MessageService`. Use **constructor injection** to provide `MessageService` to `NotificationService`.
5.  In `NotificationService`, add a method `String sendNotification()` that uses the injected `MessageService` to get a message and prepend "Sending notification: ".
6.  Mark `GreetingService` and `NotificationService` as Spring components using `@Component`.
7.  Create a simple Spring Boot `CommandLineRunner` or a `@RestController` to retrieve an instance of `NotificationService` from the Spring context and call `sendNotification()`, then print the result.
8.  (Optional challenge): Observe the default singleton behavior by injecting `NotificationService` into two different places and comparing their instances (e.g., using `System.identityHashCode()`).

**Code Template:**

```java
// src/main/java/com/cohortia/di/MessageService.java
package com.cohortia.di;

public interface MessageService {
    String getMessage();
}

// src/main/java/com/cohortia/di/GreetingService.java
package com.cohortia.di;

import org.springframework.stereotype.Component;

@Component // Mark as a Spring component
public class GreetingService implements MessageService {
    @Override
    public String getMessage() {
        return "Hello from GreetingService!";
    }
}

// src/main/java/com/cohortia/di/NotificationService.java
package com.cohortia.di;

import org.springframework.stereotype.Component;

@Component // Mark as a Spring component
public class NotificationService {
    private final MessageService messageService;

    // Constructor Injection: Spring will automatically provide an instance of MessageService
    public NotificationService(MessageService messageService) {
        this.messageService = messageService;
        System.out.println("NotificationService created with MessageService: " + messageService.getClass().getSimpleName());
    }

    public String sendNotification() {
        return "Sending notification: " + messageService.getMessage();
    }
}

// src/main/java/com/cohortia/di/DiDemoApplication.java
package com.cohortia.di;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DiDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiDemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner run(ApplicationContext context) {
        return args -> {
            System.out.println("\n--- Demonstrating Dependency Injection ---");

            // Retrieve NotificationService from the Spring context
            NotificationService notificationService = context.getBean(NotificationService.class);
            System.out.println(notificationService.sendNotification());

            // Optional: Demonstrate singleton behavior
            NotificationService anotherNotificationService = context.getBean(NotificationService.class);
            System.out.println("\nAre both NotificationService instances the same? " +
                                (notificationService == anotherNotificationService));
            System.out.println("Hash code of first service: " + System.identityHashCode(notificationService));
            System.out.println("Hash code of second service: " + System.identityHashCode(anotherNotificationService));

            MessageService messageService1 = context.getBean(MessageService.class);
            MessageService messageService2 = context.getBean(MessageService.class);
            System.out.println("\nAre both MessageService instances the same? " +
                                (messageService1 == messageService2));
            System.out.println("Hash code of first message service: " + System.identityHashCode(messageService1));
            System.out.println("Hash code of second message service: " + System.identityHashCode(messageService2));
        };
    }
}
```

#### Assessment idea
1.  **Question:** In a Spring Boot application, you have a `ReportGenerator` class that needs a `DataSource` object. Instead of `ReportGenerator` creating `new DataSource()`, you want Spring to provide it. Which of the following best describes the principle being applied here?
    *   A) Encapsulation
    *   B) Polymorphism
    *   **C) Inversion of Control (IoC) and Dependency Injection (DI)**
    *   D) Inheritance

    **Correct Answer:** C) Inversion of Control (IoC) and Dependency Injection (DI)
    **Explanation:** By having Spring provide the `DataSource` to `ReportGenerator`, you are inverting the control of dependency creation from `ReportGenerator` to the Spring container. This is the core principle of Inversion of Control, and the specific mechanism of providing the dependency is Dependency Injection. This decouples `ReportGenerator` from the concrete `DataSource` implementation.

2.  **Question:** You have a `ConfigurationManager` class in a Spring application that you want to ensure has only one instance throughout the application's lifetime, and this instance should be managed by the Spring container. Which Spring annotation, when applied to the `ConfigurationManager` class, achieves this behavior by default?
    *   A) `@Prototype`
    *   B) `@Factory`
    *   **C) `@Component` (or `@Service`, `@Repository`, `@Controller`)**
    *   D) `@Autowired`

    **Correct Answer:** C) `@Component` (or `@Service`, `@Repository`, `@Controller`)
    **Explanation:** By default, any class annotated with `@Component` (or its specialized forms like `@Service`, `@Repository`, `@Controller`) in Spring is registered as a singleton bean in the application context. This means Spring will create and manage only one instance of `ConfigurationManager` and reuse it whenever it's injected. `@Prototype` would create a new instance every time. `@Factory` is not a standard Spring annotation for this purpose. `@Autowired` is for injecting dependencies, not for defining bean scope.

#### AI generation note
Create a 15-minute video walkthrough demonstrating Dependency Injection in a Spring Boot project. Start by showing a tightly coupled example without DI. Then, introduce an interface `DataService` and two implementations (`JdbcDataService`, `MockDataService`). Demonstrate constructor injection in a `ReportService` that depends on `DataService`. Use `@Component` and `@Autowired` (on constructor) to let Spring manage the dependencies. Show how easily you can swap implementations by changing a single `@Bean` definition or profile. Include terminal output showing the Spring context starting up and the beans being created. Visually highlight the `@Component` and constructor injection points in the code. End with a mini-quiz asking about the benefits of DI for testability.

### Chapter 3.4 — Best Practices for Creational Patterns & When to Avoid Them

#### Learning objectives
*   Develop a strategic understanding of when to apply specific creational patterns based on design requirements.
*   Learn how to combine different creational patterns effectively to solve complex object creation challenges.
*   Identify common anti-patterns related to object creation and understand when a creational pattern might be over-engineering.
*   Discuss the impact of creational patterns on testability, maintainability, and performance.
*   Formulate guidelines for refactoring existing code to incorporate appropriate creational patterns.

#### Detailed lesson content
Having explored various creational patterns—Singleton, Factory Method, Abstract Factory, Prototype, and Builder—it's crucial to understand not just how to implement them, but *when* and *why* to use them, and equally important, when to *avoid* them. Design patterns are tools, and like any tool, they are most effective when applied to the right problem. Misusing them can lead to unnecessary complexity, reduced readability, and even new problems.

**When to Apply Creational Patterns:**

*   **When you need to abstract the instantiation process:** This is the overarching goal. If client code shouldn't know the exact class of objects it's creating, or if the creation logic is complex and might change, a creational pattern is a good fit.
    *   **Factory Method / Abstract Factory:** Use when you have families of related objects, or when a class can't anticipate the class of objects it needs to create. They defer object creation to subclasses or helper methods, promoting loose coupling. Ideal for frameworks or libraries that need to create objects of types defined by client applications.
    *   **Builder:** Essential for objects with many optional parameters or a complex, multi-step construction process. It improves readability, ensures immutability, and allows for robust validation. Think `HttpClient` configurations, complex `Report` objects, or `User` profiles.
    *   **Prototype:** Best when object creation is expensive, or when you need to create many similar objects by copying an existing instance. Useful for game entities, configuration objects, or any scenario where deep cloning is efficient.
    *   **Singleton:** Use *sparingly* when you genuinely need to ensure only one instance of a class exists and provides a global access point. Examples might include a logging service, a configuration manager (though often managed by DI containers now), or a thread pool. Be cautious, as it can introduce tight coupling and make testing difficult.

*   **When you need to control object lifecycle:**
    *   **Singleton:** Explicitly controls that only one instance exists.
    *   **DI Containers (like Spring):** Provide a more flexible and testable way to manage object lifecycles, including singletons, prototypes, and more. They effectively implement a sophisticated factory and singleton management system.

*   **When you need to separate concerns:** Creational patterns help separate the "what" and "how" of object creation from the "who" (the client code). This adheres to the Single Responsibility Principle.

**Combining Creational Patterns:**
Patterns are not mutually exclusive; they can often be combined for powerful solutions.
*   **Builder with Factory Method:** A Factory Method could return a specific type of Builder, which then constructs the final object. For example, `CarFactory.createSportsCarBuilder().withTurbo().withSpoiler().build()`. This combines the factory's ability to choose the *type* of object with the builder's ability to configure it step-by-step.
*   **Abstract Factory with Singleton:** An Abstract Factory might itself be implemented as a Singleton if you only need one instance of the factory to produce families of related objects.
*   **Prototype with Factory/Registry:** A Factory or a registry could hold various prototype objects, and when an object is requested, the factory simply clones the appropriate prototype. This simplifies the factory's creation logic.

**When to Avoid Creational Patterns (Anti-Patterns & Over-Engineering):**
*   **Simplicity is Key:** If an object has a simple constructor with few parameters and no complex setup, don't force a Builder or Factory. A direct constructor call is often the most readable and maintainable solution. Over-engineering with patterns adds unnecessary boilerplate and cognitive load.
*   **The "God Object" Singleton:** A common anti-pattern is using Singleton for every utility class or manager. This leads to tightly coupled code, makes unit testing extremely difficult (as you can't easily swap out the singleton for a mock), and can hide dependencies. Modern DI containers offer a much better alternative for managing single instances.
*   **Unnecessary Abstraction:** If the client code *needs* to know the concrete class for specific reasons, or if there's no foreseeable need for varying object creation logic, abstracting it with a Factory might be premature optimization.
*   **Performance Overhead:** While often negligible, some patterns (like deep cloning in Prototype) can have performance implications. Always consider the trade-offs. If object creation is already fast, the benefits of Prototype might not outweigh the complexity of deep cloning.

**Impact on Testability, Maintainability, and Performance:**
*   **Testability:** Patterns that promote loose coupling (Factory, Abstract Factory, Builder, DI-managed Singletons) significantly improve testability. You can easily inject mock or stub dependencies, or configure objects for specific test scenarios using a Builder. The traditional Singleton pattern, however, often *hurts* testability by introducing global state and making it hard to isolate components.
*   **Maintainability:** By abstracting creation logic and promoting loose coupling, creational patterns generally enhance maintainability. Changes to object creation (e.g., adding a new product type, changing construction steps) can be localized within the pattern's implementation rather than scattered throughout the client code.
*   **Performance:** For most applications, the performance overhead of using design patterns is negligible compared to other factors like I/O or database access. However, patterns like deep cloning in Prototype can be CPU and memory intensive for very large or complex object graphs. Always profile if performance is a critical concern.

**Refactoring to Patterns:**
Refactoring existing code to use creational patterns is a common and beneficial practice.
1.  **Identify "new" hotspots:** Look for `new` keyword scattered throughout your code, especially in client code that creates objects. This is a prime candidate for a Factory.
2.  **Spot "telescoping constructors":** If you have constructors with many parameters, especially with `null` or default values, consider refactoring to the Builder pattern.
3.  **Recognize complex object setup:** If an object requires multiple steps to initialize correctly, a Builder can streamline this.
4.  **Find shared mutable state:** If multiple parts of your application are creating and managing their own instances of a resource that should be unique, consider a managed Singleton (via DI) or a Factory to centralize its creation.
5.  **Look for expensive object creation:** If creating an object is slow, and you often need similar copies, the Prototype pattern might be suitable.

By understanding these best practices, you can leverage creational patterns to build more robust, flexible, and maintainable Java applications, avoiding the pitfalls of over-engineering or pattern misuse.

#### Key concepts
*   **Over-engineering:** Applying a design pattern or complex solution when a simpler approach would suffice, leading to unnecessary complexity and reduced maintainability.
*   **Anti-pattern:** A common response to a recurring problem that is usually ineffective and may be counterproductive. The "God Object" Singleton is an example in the context of creational patterns.
*   **Loose Coupling:** A design principle where components or modules are largely independent of each other, meaning changes in one component have minimal impact on others. Creational patterns generally promote this.
*   **Immutability:** The property of an object whose state cannot be modified after it is created. The Builder pattern is excellent for promoting immutability.
*   **Testability:** The ease with which a component or system can be tested. Patterns that reduce coupling (e.g., Factory, Builder, DI) typically improve testability.
*   **Refactoring:** The process of restructuring existing computer code without changing its external behavior, typically to improve non-functional attributes like readability, maintainability, or design.
*   **"new" Keyword Hotspot:** A code smell indicating that object creation logic is scattered and tightly coupled throughout the application, suggesting a candidate for a creational pattern.

#### Hands-on activity
**Objective:** Refactor a simple `ReportGenerator` class that currently uses direct instantiation to incorporate a Factory Method pattern for creating different types of reports, improving flexibility and testability.

**Instructions:**
1.  Start with a `ReportGenerator` that directly instantiates `PdfReport` or `CsvReport` based on a string parameter.
2.  Create an interface `Report` with a method `void generate()`.
3.  Create two concrete implementations: `PdfReport` and `CsvReport`, each implementing `Report` and printing a message like "Generating PDF Report..." or "Generating CSV Report...".
4.  Introduce a `ReportFactory` interface with a `createReport(String type)` method.
5.  Implement a `SimpleReportFactory` that implements `ReportFactory` and contains the logic for creating `PdfReport` or `CsvReport` based on the input string.
6.  Modify the `ReportGenerator` to *depend* on the `ReportFactory` interface (using constructor injection for good measure), and use the factory to create reports.
7.  In your `main` method, demonstrate creating different reports using the refactored `ReportGenerator` and `SimpleReportFactory`.

**Code Template (Initial, to be refactored):**

```java
// Initial tightly coupled ReportGenerator
class ReportGeneratorInitial {
    public void generateReport(String reportType) {
        if ("PDF".equalsIgnoreCase(reportType)) {
            PdfReport pdfReport = new PdfReport();
            pdfReport.generate();
        } else if ("CSV".equalsIgnoreCase(reportType)) {
            CsvReport csvReport = new CsvReport();
            csvReport.generate();
        } else {
            System.out.println("Unknown report type: " + reportType);
        }
    }
}

class PdfReport {
    public void generate() {
        System.out.println("Generating PDF Report...");
        // Complex PDF generation logic here
    }
}

class CsvReport {
    public void generate() {
        System.out.println("Generating CSV Report...");
        // Complex CSV generation logic here
    }
}

public class RefactoringDemoInitial {
    public static void main(String[] args) {
        ReportGeneratorInitial generator = new ReportGeneratorInitial();
        generator.generateReport("PDF");
        generator.generateReport("CSV");
        generator.generateReport("XML");
    }
}
```

**Your Task (Refactor the above using Factory Method):**

```java
// Step 1: Create Report interface
interface Report {
    void generate();
}

// Step 2: Implement concrete reports
class PdfReport implements Report {
    @Override
    public void generate() {
        System.out.println("Generating PDF Report...");
        // ... actual PDF generation logic
    }
}

class CsvReport implements Report {
    @Override
    public void generate() {
        System.out.println("Generating CSV Report...");
        // ... actual CSV generation logic
    }
}

// Step 3: Create ReportFactory interface
interface ReportFactory {
    Report createReport(String type);
}

// Step 4: Implement SimpleReportFactory
class SimpleReportFactory implements ReportFactory {
    @Override
    public Report createReport(String type) {
        if ("PDF".equalsIgnoreCase(type)) {
            return new PdfReport();
        } else if ("CSV".equalsIgnoreCase(type)) {
            return new CsvReport();
        } else {
            throw new IllegalArgumentException("Unknown report type: " + type);
        }
    }
}

// Step 5: Modify ReportGenerator to depend on ReportFactory
class ReportGenerator {
    private final ReportFactory factory;

    // Constructor injection for the factory
    public ReportGenerator(ReportFactory factory) {
        this.factory = factory;
    }

    public void generateReport(String reportType) {
        try {
            Report report = factory.createReport(reportType);
            report.generate();
        } catch (IllegalArgumentException e) {
            System.err.println("Error generating report: " + e.getMessage());
        }
    }
}

// Step 6: Demonstrate in main
public class RefactoringDemoFinal {
    public static void main(String[] args) {
        // Create the factory instance
        ReportFactory simpleFactory = new SimpleReportFactory();

        // Inject the factory into the generator
        ReportGenerator generator = new ReportGenerator(simpleFactory);

        System.out.println("--- Generating reports with Factory Pattern ---");
        generator.generateReport("PDF");
        generator.generateReport("CSV");
        generator.generateReport("XML"); // This should now trigger the error handler
    }
}
```

#### Assessment idea
1.  **Question:** Your team is developing a new module that requires creating various types of `Document` objects (e.g., `WordDocument`, `ExcelDocument`, `PdfDocument`). Each document type has a complex initialization process involving several steps and optional configurations. Which creational pattern would be most appropriate to manage the creation of these `Document` objects, allowing for flexible configuration and promoting immutability?
    *   A) Singleton
    *   B) Prototype
    *   **C) Builder**
    *   D) Factory Method

    **Correct Answer:** C) Builder
    **Explanation:** The Builder pattern is ideal for constructing complex objects step-by-step, especially when they have many optional parameters and a multi-stage initialization process. It promotes readability, allows for robust validation, and is excellent for creating immutable objects. While a Factory Method could create different *types* of documents, it wouldn't handle the complex, step-by-step configuration of each document instance as elegantly as a Builder. Singleton is for ensuring a single instance, and Prototype is for cloning existing objects, neither of which directly addresses the complex, configurable creation of distinct document types.

2.  **Question:** A common anti-pattern, often associated with the misuse of a creational pattern, involves creating a class that is responsible for too many things and has a single, globally accessible instance. This makes the class difficult to test and introduces tight coupling. Which creational pattern is most commonly misused in this way?
    *   A) Abstract Factory
    *   B) Prototype
    *   C) Builder
    *   **D) Singleton**

    **Correct Answer:** D) Singleton
    **Explanation:** The Singleton pattern, when misused (e.g., for "God objects" or when its global access point is abused), can lead to tightly coupled code and make unit testing very challenging because it's hard to replace the global instance with a mock or stub. While other patterns can be over-engineered, the Singleton pattern's inherent global nature makes it particularly susceptible to becoming an anti-pattern if not applied judiciously or managed by a DI container.

---

## Module 4: Structural Patterns: Composing Objects & Classes

This module explores Structural Design Patterns, which are concerned with how classes and objects are composed to form larger structures. These patterns help ensure that changes in one part of a system don't unnecessarily impact other parts, promoting flexibility, reusability, and maintainability. You'll learn how to build robust and adaptable systems by understanding how to effectively combine objects and classes.

### Chapter 4.1 — The Adapter Pattern: Bridging Incompatible Interfaces

#### Learning objectives
*   Understand the purpose and benefits of the Adapter pattern in software design.
*   Identify scenarios where the Adapter pattern is an appropriate solution for integrating incompatible interfaces.
*   Implement the Adapter pattern using both class and object adaptation techniques in Java.
*   Recognize common pitfalls and best practices when applying the Adapter pattern.

#### Detailed lesson content
In the world of software development, it's common to encounter situations where you need to integrate two components that were not designed to work together directly. Perhaps you have a legacy system with a well-established interface, and a new component that expects a completely different interface. Directly modifying either component might be impractical, costly, or even impossible if you don't own the source code. This is precisely the problem the **Adapter pattern** aims to solve. It acts as a bridge, converting the interface of one class into another interface that clients expect, allowing classes with incompatible interfaces to collaborate.

Think of a universal travel adapter. You have a device with a specific plug (its interface) and a wall socket with a different configuration (the interface it expects). The adapter doesn't change your device's plug, nor does it change the wall socket. Instead, it translates the physical connection, allowing your device to draw power from the socket. In software, the Adapter pattern works similarly: it wraps an existing class (the "adaptee") with a new interface (the "target interface") that the client code understands.

There are two primary ways to implement the Adapter pattern: **class adapter** and **object adapter**.
A **class adapter** uses inheritance. It requires the adapter class to inherit from the target interface *and* the adaptee class. This approach is less common in Java because Java doesn't support multiple inheritance of classes, meaning the adapter can only extend one adaptee class. However, it can implement multiple interfaces. If the adaptee is an interface, a class adapter can implement both the target and adaptee interfaces. The class adapter then overrides methods from the target interface and delegates calls to the inherited adaptee's methods.

The more prevalent and flexible approach in Java is the **object adapter**. Here, the adapter class implements the target interface and *contains an instance* of the adaptee class. When a method is called on the adapter, it translates the request and delegates it to the corresponding method on the adaptee object. This composition-based approach is generally preferred because it allows the adapter to work with any class that implements the adaptee's interface, not just a specific class it inherits from. It also adheres better to the "favor composition over inheritance" principle, promoting greater flexibility and reducing coupling.

Let's consider a practical scenario. Imagine you have a legacy drawing application that uses a `LegacyRectangle` class with methods like `draw(int x, int y, int width, int height)`. Now, you're building a new graphics library that expects all shapes to implement a `Shape` interface with a single `draw()` method that takes a `Graphics` context. You can't modify `LegacyRectangle`, but you need to display it in your new library.

Here's how an object adapter would work:
First, define your `Target` interface:
```java
// Target interface expected by the new graphics library
public interface Shape {
    void draw(Graphics g);
}
```

Next, your `Adaptee` class (the legacy rectangle):
```java
// Adaptee: The legacy class with an incompatible interface
public class LegacyRectangle {
    public void draw(int x, int y, int width, int height) {
        System.out.println("Drawing LegacyRectangle at (" + x + "," + y + ") with width " + width + ", height " + height);
        // Imagine actual drawing logic here using old APIs
    }
}
```

Now, create the `Adapter` class:
```java
// Adapter: Implements the Target interface and contains an instance of the Adaptee
public class RectangleAdapter implements Shape {
    private LegacyRectangle legacyRectangle;
    private int x1, y1, x2, y2; // Store coordinates for the legacy rectangle

    public RectangleAdapter(LegacyRectangle legacyRectangle, int x1, int y1, int x2, int y2) {
        this.legacyRectangle = legacyRectangle;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    @Override
    public void draw(Graphics g) {
        // Translate the new interface's call to the old interface's call
        int width = x2 - x1;
        int height = y2 - y1;
        legacyRectangle.draw(x1, y1, width, height);
        // In a real scenario, 'g' would be used for drawing,
        // but for this example, we're just showing the method call translation.
        System.out.println("Adapter: Translated draw call for new Graphics context.");
    }
}
```
And finally, how a client would use it:
```java
// Client code that expects the Shape interface
public class DrawingApplication {
    public static void main(String[] args) {
        Graphics graphicsContext = new Graphics() { /* Dummy Graphics context for example */ };

        // Create the legacy rectangle
        LegacyRectangle oldRectangle = new LegacyRectangle();

        // Create the adapter to make the legacy rectangle compatible with Shape
        Shape adaptedRectangle = new RectangleAdapter(oldRectangle, 10, 20, 60, 40);

        // The drawing application can now draw the adapted rectangle seamlessly
        adaptedRectangle.draw(graphicsContext);
    }
}

// A dummy Graphics class for demonstration purposes
class Graphics {
    // Placeholder for actual graphics drawing methods
}
```

Common mistakes when using the Adapter pattern include overusing it for simple wrappers. If the interfaces are only slightly different, a simple helper method or a direct wrapper might be sufficient without the full overhead of the Adapter pattern. Another mistake is creating an adapter when the problem can be solved by refactoring the original classes. The Adapter pattern is best used when you *cannot* or *should *not* modify the existing classes. Safety-wise, ensure that the translation logic within the adapter is robust and handles all necessary conversions correctly, especially when dealing with data types or complex object structures. Incorrect translation can lead to subtle bugs or runtime errors.

The Adapter pattern is widely used in Java's standard library. For instance, the `java.io.InputStreamReader` and `java.io.OutputStreamWriter` classes act as adapters. They adapt a byte stream (`InputStream`/`OutputStream`) to a character stream (`Reader`/`Writer`), allowing you to process bytes as characters. Similarly, many GUI frameworks use adapters to translate low-level events into higher-level, more manageable events. By mastering the Adapter pattern, you gain a powerful tool for integrating disparate components, enhancing system flexibility, and extending the lifespan of existing codebases.

#### Key concepts
*   **Adapter Pattern**: A structural design pattern that allows objects with incompatible interfaces to collaborate. It acts as a bridge between two incompatible interfaces.
*   **Target Interface**: The interface that the client expects to work with. The adapter implements this interface.
*   **Adaptee**: The existing class with an incompatible interface that needs to be adapted.
*   **Adapter**: The class that implements the target interface and wraps an instance of the adaptee (object adapter) or inherits from the adaptee (class adapter) to provide the necessary interface translation.
*   **Class Adapter**: An adapter implemented using inheritance, where the adapter class inherits from both the target interface and the adaptee class. Less common in Java due to single inheritance.
*   **Object Adapter**: An adapter implemented using composition, where the adapter class implements the target interface and contains an instance of the adaptee. This is the preferred approach in Java.

#### Hands-on activity
**Scenario:** You have a third-party logging library that uses a `LogWriter` interface with a `writeEntry(String message)` method. Your application, however, uses a `Logger` interface with a `log(LogLevel level, String message)` method. Create an adapter to allow your application's `Logger` to use the `LogWriter` from the third-party library, specifically for `INFO` level messages.

**Starter Code:**
```java
// Third-party library's interface
interface LogWriter {
    void writeEntry(String message);
}

// Third-party library's implementation
class ConsoleLogWriter implements LogWriter {
    @Override
    public void writeEntry(String message) {
        System.out.println("[THIRD-PARTY LOG]: " + message);
    }
}

// Your application's interface
enum LogLevel {
    INFO, WARNING, ERROR
}

interface Logger {
    void log(LogLevel level, String message);
}

// Your task: Create an adapter here
class LogWriterAdapter implements Logger {
    private LogWriter logWriter;

    public LogWriterAdapter(LogWriter logWriter) {
        this.logWriter = logWriter;
    }

    @Override
    public void log(LogLevel level, String message) {
        // Implement the adaptation logic here.
        // For this exercise, only INFO messages should be passed to the LogWriter.
        // Other levels should be ignored or handled differently if specified.
        if (level == LogLevel.INFO) {
            logWriter.writeEntry("INFO: " + message);
        } else {
            System.out.println("LogWriterAdapter: Ignoring non-INFO message for LogWriter: " + message);
        }
    }
}

// Client code to test
public class AdapterClient {
    public static void main(String[] args) {
        LogWriter consoleWriter = new ConsoleLogWriter();
        Logger appLogger = new LogWriterAdapter(consoleWriter);

        appLogger.log(LogLevel.INFO, "User logged in successfully.");
        appLogger.log(LogLevel.WARNING, "Database connection lost temporarily.");
        appLogger.log(LogLevel.ERROR, "Critical system failure!");

        // Expected output:
        // [THIRD-PARTY LOG]: INFO: User logged in successfully.
        // LogWriterAdapter: Ignoring non-INFO message for LogWriter: Database connection lost temporarily.
        // LogWriterAdapter: Ignoring non-INFO message for LogWriter: Critical system failure!
    }
}
```

#### Assessment idea
1.  **Question:** You are integrating a new payment gateway that provides a `processPayment(double amount, String currencyCode)` method. Your existing e-commerce system uses a `PaymentProcessor` interface with a `charge(BigDecimal amount, Currency currency)` method. Which design pattern would you use to bridge these two interfaces, and why?
    *   **Correct Answer:** The Adapter pattern. The new payment gateway's interface (`processPayment`) is incompatible with your existing system's `PaymentProcessor` interface (`charge`). The Adapter pattern allows you to create a class that implements `PaymentProcessor` and wraps the new payment gateway's object, translating calls from `charge` to `processPayment` (e.g., converting `BigDecimal` to `double` and `Currency` to `String currencyCode`). This avoids modifying either the existing e-commerce system or the new payment gateway, promoting loose coupling and reusability.

2.  **Question:** Consider the `java.util.Collections.list(Enumeration<T> e)` method. This method takes an `Enumeration` (an older Java interface for iterating over collections) and returns a `List` (a newer, more commonly used collection type). Explain how this method embodies the Adapter pattern.
    *   **Correct Answer:** The `Collections.list()` method acts as an object adapter. The `List` interface is the "Target" that clients (modern Java code) expect. The `Enumeration` is the "Adaptee" with an incompatible interface (different method names and iteration style). The `list()` method internally iterates through the `Enumeration` and adds each element to a new `ArrayList`, effectively "adapting" the `Enumeration`'s elements into a `List` that can then be used by code expecting the `List` interface. It bridges the gap between older and newer collection iteration mechanisms.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with an animated diagram illustrating the "universal travel adapter" analogy, showing how it translates between different plug types. Then transition to a live coding session in IntelliJ IDEA. First, define the `Shape` target interface and `LegacyRectangle` adaptee. Then, demonstrate building the `RectangleAdapter` using composition (object adapter), highlighting how `draw(Graphics g)` translates to `draw(x,y,width,height)`. Show the client code using the adapter seamlessly. Include a common mistake slide discussing when *not* to use Adapter (e.g., for simple wrappers) and a safety note about robust translation. End with a 2-question interactive quiz covering class vs. object adapter and real-world examples.

### Chapter 4.2 — The Decorator Pattern: Enhancing Objects Dynamically

#### Learning objectives
*   Explain the intent and benefits of the Decorator pattern for adding responsibilities to objects.
*   Differentiate the Decorator pattern from inheritance as a means of extending functionality.
*   Implement the Decorator pattern in Java to dynamically wrap objects and add new behaviors.
*   Identify scenarios where the Decorator pattern is a suitable alternative to subclassing.

#### Detailed lesson content
Imagine you're building a coffee shop application. You start with a basic `Coffee` object. Customers, however, rarely want just plain coffee. They want milk, sugar, whipped cream, sprinkles, and various syrups. If you were to use inheritance to add these options, you'd quickly end up with an explosion of subclasses: `MilkCoffee`, `SugarCoffee`, `MilkSugarCoffee`, `WhippedCreamMilkSugarCoffee`, and so on. This "subclassing hell" leads to rigid designs, code duplication, and makes it incredibly difficult to add new combinations or new toppings.

This is where the **Decorator pattern** comes to the rescue. The Decorator pattern allows you to attach additional responsibilities to an object dynamically. It provides a flexible alternative to subclassing for extending functionality. Instead of creating a multitude of subclasses, you wrap the original object in a "decorator" object, which then adds new behavior or state. This wrapping can be done recursively, allowing you to combine multiple decorators to achieve complex functionalities.

The core idea is that both the original object and its decorators share a common interface. This common interface ensures that clients can treat decorated objects identically to undecorated objects. The decorator then delegates calls to the wrapped component and can add its own behavior before or after the delegation.

Let's revisit our coffee shop example.
First, we define the common interface for all coffee components, whether they are basic coffee or decorated coffee:
```java
// Component interface
public interface Coffee {
    String getDescription();
    double getCost();
}
```

Next, we have our concrete component, the basic coffee:
```java
// Concrete Component
public class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Simple Coffee";
    }

    @Override
    public double getCost() {
        return 2.0;
    }
}
```

Now, we create the abstract `Decorator` class. This class *also* implements the `Coffee` interface and holds a reference to a `Coffee` object (the component it decorates).
```java
// Abstract Decorator
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    // Delegates to the decorated object by default
    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription();
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost();
    }
}
```
Finally, we create concrete decorators that extend `CoffeeDecorator` and add specific functionalities:
```java
// Concrete Decorator: Milk
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Milk";
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost() + 0.5;
    }
}

// Concrete Decorator: Sugar
public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Sugar";
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost() + 0.2;
    }
}

// Concrete Decorator: Whipped Cream
public class WhippedCreamDecorator extends CoffeeDecorator {
    public WhippedCreamDecorator(Coffee decoratedCoffee) {
        super(decoratedCoffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Whipped Cream";
    }

    @Override
    public double getCost() {
        return decoratedCoffee.getCost() + 0.7;
    }
}
```

Here's how a client would use these decorators:
```java
// Client code
public class CoffeeShop {
    public static void main(String[] args) {
        Coffee myCoffee = new SimpleCoffee();
        System.out.println("Order 1: " + myCoffee.getDescription() + " | Cost: $" + myCoffee.getCost());
        // Output: Order 1: Simple Coffee | Cost: $2.0

        // Add Milk
        myCoffee = new MilkDecorator(myCoffee);
        System.out.println("Order 2: " + myCoffee.getDescription() + " | Cost: $" + myCoffee.getCost());
        // Output: Order 2: Simple Coffee, Milk | Cost: $2.5

        // Add Sugar and Whipped Cream
        Coffee fancyCoffee = new SimpleCoffee();
        fancyCoffee = new SugarDecorator(fancyCoffee); // Decorate with Sugar
        fancyCoffee = new WhippedCreamDecorator(fancyCoffee); // Decorate with Whipped Cream
        fancyCoffee = new MilkDecorator(fancyCoffee); // Decorate with Milk (order matters for description, but not cost here)
        System.out.println("Order 3: " + fancyCoffee.getDescription() + " | Cost: $" + fancyCoffee.getCost());
        // Output: Order 3: Simple Coffee, Sugar, Whipped Cream, Milk | Cost: $3.4
    }
}
```
Notice how `myCoffee` is progressively wrapped. Each decorator adds its own flavor (description) and cost, then delegates to the object it wraps. This allows for highly flexible combinations without creating a single new subclass for each combination.

A common mistake is confusing Decorator with Adapter or Proxy. While all three patterns involve wrapping an object, their intents are distinct. The Adapter changes the interface of an object, the Decorator adds responsibilities without changing the interface, and the Proxy controls access to an object. Another pitfall is creating too many fine-grained decorators, which can lead to a complex object graph that is hard to manage. It's crucial to ensure that the order of decorators doesn't introduce unexpected behavior, especially if decorators modify shared state or interact in sequence.

The Decorator pattern is famously used in Java's I/O streams. For example, `FileInputStream` provides basic byte input. You can then wrap it with `BufferedInputStream` to add buffering, and then with `DataInputStream` to add the ability to read primitive data types. Each wrapper adds functionality while maintaining the `InputStream` interface. This layering perfectly demonstrates the power and flexibility of the Decorator pattern in action. By understanding and applying this pattern, you can build systems that are easily extensible and maintainable, allowing you to add new features without altering existing code.

#### Key concepts
*   **Decorator Pattern**: A structural design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. It provides a flexible alternative to subclassing for extending functionality.
*   **Component**: The interface or abstract class that defines the common operations for both the concrete components and the decorators.
*   **Concrete Component**: The original object to which new behaviors can be attached.
*   **Decorator**: An abstract class that implements the Component interface and maintains a reference to a Component object. It typically delegates calls to the wrapped component.
*   **Concrete Decorator**: Specific decorator classes that extend the abstract Decorator and add specific responsibilities or behaviors to the component.
*   **Dynamic Responsibility**: The ability to add or remove functionality from an object at runtime, rather than at compile time through inheritance.

#### Hands-on activity
**Scenario:** You are developing a text editor. You have a basic `TextEditor` component. You want to add features like spell checking and syntax highlighting dynamically. Use the Decorator pattern to implement these features.

**Starter Code:**
```java
// Component interface
interface TextEditor {
    String getContent();
    String render(); // Renders the content with applied features
}

// Concrete Component
class BasicTextEditor implements TextEditor {
    private String content;

    public BasicTextEditor(String content) {
        this.content = content;
    }

    @Override
    public String getContent() {
        return content;
    }

    @Override
    public String render() {
        return "Plain Text: " + content;
    }
}

// Abstract Decorator
abstract class TextEditorDecorator implements TextEditor {
    protected TextEditor decoratedEditor;

    public TextEditorDecorator(TextEditor decoratedEditor) {
        this.decoratedEditor = decoratedEditor;
    }

    @Override
    public String getContent() {
        return decoratedEditor.getContent();
    }

    // Default render delegates to the decorated editor
    @Override
    public String render() {
        return decoratedEditor.render();
    }
}

// Your task: Implement Concrete Decorators for SpellCheck and SyntaxHighlight
class SpellCheckDecorator extends TextEditorDecorator {
    public SpellCheckDecorator(TextEditor decoratedEditor) {
        super(decoratedEditor);
    }

    @Override
    public String render() {
        String originalRender = decoratedEditor.render();
        // Simulate spell checking logic
        String spellCheckedContent = originalRender.replace("teh", "the (corrected)");
        return "Spell Checked -> " + spellCheckedContent;
    }
}

class SyntaxHighlightDecorator extends TextEditorDecorator {
    public SyntaxHighlightDecorator(TextEditor decoratedEditor) {
        super(decoratedEditor);
    }

    @Override
    public String render() {
        String originalRender = decoratedEditor.render();
        // Simulate syntax highlighting logic (e.g., wrap keywords)
        String highlightedContent = originalRender.replace("public", "<span style='color:blue;'>public</span>");
        highlightedContent = highlightedContent.replace("class", "<span style='color:red;'>class</span>");
        return "Syntax Highlighted -> " + highlightedContent;
    }
}

// Client code to test
public class EditorClient {
    public static void main(String[] args) {
        TextEditor editor = new BasicTextEditor("public class MyClass { teh content }");
        System.out.println(editor.render());

        // Decorate with SpellCheck
        editor = new SpellCheckDecorator(editor);
        System.out.println(editor.render());

        // Decorate with SyntaxHighlight (on top of SpellCheck)
        editor = new SyntaxHighlightDecorator(editor);
        System.out.println(editor.render());

        // Expected output (order of decorators might change internal representation slightly):
        // Plain Text: public class MyClass { teh content }
        // Spell Checked -> Plain Text: public class MyClass { the (corrected) content }
        // Syntax Highlighted -> Spell Checked -> Plain Text: <span style='color:blue;'>public</span> <span style='color:red;'>class</span> MyClass { the (corrected) content }
    }
}
```

#### Assessment idea
1.  **Question:** You need to add logging capabilities to several existing methods in different classes without modifying their original source code. You also want to be able to enable or disable this logging at runtime. Would the Decorator pattern be a good fit? Explain why or why not, and briefly describe how you would apply it.
    *   **Correct Answer:** Yes, the Decorator pattern would be a good fit. The core reason is that it allows you to add responsibilities (logging) to objects dynamically without altering their original classes, which aligns with the Open/Closed Principle. You would define an interface that the original classes implement (or an abstract class they extend). Then, create a `LoggingDecorator` that also implements this interface and wraps the original object. The decorator's methods would perform the logging logic and then delegate the call to the wrapped original object's method. This allows you to "decorate" specific instances with logging at runtime, and by simply not wrapping an object, you can disable logging.

2.  **Question:** What is a key advantage of using the Decorator pattern over simple inheritance for extending object functionality, especially when dealing with multiple, combinable features?
    *   **Correct Answer:** The key advantage is avoiding "subclassing hell" and promoting greater flexibility. With inheritance, adding multiple combinable features (e.g., milk, sugar, whipped cream for coffee) would require creating an exponential number of subclasses (e.g., `MilkCoffee`, `SugarCoffee`, `MilkSugarCoffee`, etc.). This leads to a rigid class hierarchy, code duplication, and makes it difficult to add new features or combinations. The Decorator pattern, through composition, allows you to combine features dynamically at runtime by wrapping objects, leading to a much more manageable and extensible design where new features can be added by creating new decorators, not new subclasses for every combination.

#### AI generation note
Create a 10-minute animated diagram and live coding video. Start with an animation depicting a "plain coffee" being successively wrapped by "milk," "sugar," and "whipped cream" decorators, showing how each layer adds to the description and cost. Transition to a live coding demo in IntelliJ. First, define the `Coffee` interface and `SimpleCoffee` class. Then, build the `CoffeeDecorator` abstract class and two concrete decorators (`MilkDecorator`, `SugarDecorator`). Demonstrate the client code instantiating a `SimpleCoffee` and then wrapping it with multiple decorators, showing the output after each decoration. Include a visual comparison slide contrasting the Decorator approach with a hypothetical inheritance-based approach to highlight the benefits. End with a reflection prompt asking learners to identify a scenario where they might use Decorator in their own projects.

### Chapter 4.3 — The Facade Pattern: Simplifying Complex Subsystems

#### Learning objectives
*   Understand the purpose of the Facade pattern in providing a simplified interface to a complex subsystem.
*   Identify situations where a Facade can improve the usability and maintainability of a system.
*   Implement a Facade in Java to encapsulate a set of interacting classes.
*   Recognize the benefits and potential drawbacks of introducing a Facade.

#### Detailed lesson content
As software systems grow, they often become composed of many interacting classes and objects, forming complex subsystems. While this modularity is good for internal design, exposing all these internal complexities to client code can make the system difficult to use, understand, and maintain. Clients might need to interact with multiple objects, remember specific sequences of operations, or handle intricate configurations just to perform a common task. This is where the **Facade pattern** becomes invaluable.

The Facade pattern provides a unified, higher-level interface to a set of interfaces in a subsystem. It defines a simpler, single entry point that makes the subsystem easier to use. Essentially, the Facade acts as a "front-desk" or "control panel" for a complex set of operations. Instead of directly interacting with dozens of specialized classes, a client interacts with the Facade, which then delegates the requests to the appropriate objects within the subsystem.

Consider a home theater system. To watch a movie, you might need to: turn on the TV, turn on the DVD player, set the TV input to DVD, turn on the amplifier, set the amplifier input to DVD, adjust the volume, and then play the movie. This is a complex sequence of operations involving multiple devices (TV, DVD player, amplifier). A `HomeTheaterFacade` would provide a single method, `watchMovie(String movieTitle)`, which encapsulates all these steps.

Let's illustrate this with a Java example.
First, define the components of our home theater subsystem:
```java
// Subsystem components
class Amplifier {
    public void on() { System.out.println("Amplifier On"); }
    public void off() { System.out.println("Amplifier Off"); }
    public void setDvd(DvdPlayer dvd) { System.out.println("Amplifier setting DVD player"); }
    public void setVolume(int level) { System.out.println("Amplifier volume set to " + level); }
}

class DvdPlayer {
    public void on() { System.out.println("DVD Player On"); }
    public void off() { System.out.println("DVD Player Off"); }
    public void play(String movie) { System.out.println("Playing movie: " + movie); }
    public void stop() { System.out.println("DVD Player Stop"); }
    public void eject() { System.out.println("DVD Player Eject"); }
}

class Tuner {
    public void on() { System.out.println("Tuner On"); }
    public void off() { System.out.println("Tuner Off"); }
    // ... other tuner methods
}

class Projector {
    public void on() { System.out.println("Projector On"); }
    public void off() { System.out.println("Projector Off"); }
    public void wideScreenMode() { System.out.println("Projector in widescreen mode"); }
}

class Lights {
    public void dim(int level) { System.out.println("Lights dimming to " + level + "%"); }
    public void on() { System.out.println("Lights On"); }
}
```

Now, we create the `HomeTheaterFacade`:
```java
// Facade class
public class HomeTheaterFacade {
    // Composition: The facade holds references to the subsystem components
    Amplifier amp;
    Tuner tuner;
    DvdPlayer dvd;
    Projector projector;
    Lights lights;

    public HomeTheaterFacade(Amplifier amp, Tuner tuner, DvdPlayer dvd, Projector projector, Lights lights) {
        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.projector = projector;
        this.lights = lights;
    }

    public void watchMovie(String movie) {
        System.out.println("\nGet ready to watch a movie...");
        lights.dim(10);
        projector.on();
        projector.wideScreenMode();
        amp.on();
        amp.setDvd(dvd);
        amp.setVolume(5);
        dvd.on();
        dvd.play(movie);
    }

    public void endMovie() {
        System.out.println("\nShutting movie theater down...");
        dvd.stop();
        dvd.eject();
        dvd.off();
        amp.off();
        projector.off();
        lights.on();
    }

    public void listenToRadio(double frequency) {
        System.out.println("\nTune in to the radio...");
        tuner.on();
        // tuner.setFrequency(frequency); // Assuming tuner has this method
        amp.on();
        amp.setVolume(3);
        System.out.println("Listening to radio at " + frequency + " MHz");
    }

    public void endRadio() {
        System.out.println("\nShutting radio down...");
        tuner.off();
        amp.off();
    }
}
```

And finally, how a client uses the Facade:
```java
// Client code
public class HomeTheaterClient {
    public static void main(String[] args) {
        // Instantiate subsystem components
        Amplifier amp = new Amplifier();
        DvdPlayer dvd = new DvdPlayer();
        Tuner tuner = new Tuner();
        Projector projector = new Projector();
        Lights lights = new Lights();

        // Instantiate the Facade with the subsystem components
        HomeTheaterFacade homeTheater = new HomeTheaterFacade(amp, tuner, dvd, projector, lights);

        // Client interacts only with the Facade
        homeTheater.watchMovie("The Matrix");
        homeTheater.endMovie();

        homeTheater.listenToRadio(102.7);
        homeTheater.endRadio();
    }
}
```
Notice how the `HomeTheaterClient` doesn't need to know anything about `Amplifier`, `DvdPlayer`, or `Projector` directly. It simply calls `watchMovie()` or `endMovie()` on the `HomeTheaterFacade`, which handles all the intricate interactions. This significantly reduces the coupling between the client and the subsystem, making the client code simpler and less prone to errors if the subsystem's internal structure changes.

A common mistake with the Facade pattern is creating a "God object" – a Facade that tries to do too much or becomes responsible for too many unrelated operations. A Facade should focus on providing a simplified interface for a *specific* subsystem or a *related set* of operations. If it becomes too large, it might indicate that the underlying subsystem needs to be broken down further, or that multiple, smaller facades are needed. Another pitfall is making the Facade too generic, hiding away useful functionality that clients might legitimately need to access directly. The Facade should simplify common use cases, but it doesn't necessarily prevent direct access to the underlying components if a client requires more fine-grained control.

Safety notes for the Facade pattern include ensuring that the Facade correctly initializes and manages the lifecycle of its subsystem components if it's responsible for them. Also, be mindful of potential performance implications if the Facade introduces unnecessary layers of indirection for very frequent operations. However, for simplifying complex interactions, the benefits of improved maintainability and reduced coupling often outweigh these concerns. The Facade pattern is widely used in frameworks and libraries to provide a clean API to complex internal workings, such as in database connection pools or web service clients. It's a powerful tool for managing complexity and improving the developer experience.

#### Key concepts
*   **Facade Pattern**: A structural design pattern that provides a unified, simplified interface to a set of interfaces in a subsystem, making the subsystem easier to use.
*   **Subsystem**: A collection of related classes and objects that perform a complex set of operations.
*   **Facade**: A class that encapsulates the complex interactions of a subsystem and exposes a simpler, higher-level interface to clients. It typically holds references to the subsystem components.
*   **Decoupling**: The Facade pattern reduces coupling between clients and the subsystem, as clients only interact with the Facade, not the individual components.
*   **Simplification**: The primary goal of the Facade is to simplify the usage of a complex subsystem.

#### Hands-on activity
**Scenario:** You are developing a reporting module. Generating a report involves several steps: fetching data from a `DataSource`, processing it with a `DataProcessor`, and then formatting it with a `ReportFormatter`. Create a `ReportGeneratorFacade` to simplify the process of generating a report.

**Starter Code:**
```java
// Subsystem components
class DataSource {
    public String fetchData(String query) {
        System.out.println("DataSource: Fetching data with query: " + query);
        return "Raw Data for " + query;
    }
}

class DataProcessor {
    public String processData(String rawData) {
        System.out.println("DataProcessor: Processing raw data...");
        return "Processed Data from " + rawData;
    }
}

class ReportFormatter {
    public String formatReport(String processedData, String formatType) {
        System.out.println("ReportFormatter: Formatting processed data into " + formatType + " format.");
        return "Formatted Report (" + formatType + ") from " + processedData;
    }
}

// Your task: Implement the ReportGeneratorFacade
class ReportGeneratorFacade {
    private DataSource dataSource;
    private DataProcessor dataProcessor;
    private ReportFormatter reportFormatter;

    public ReportGeneratorFacade() {
        this.dataSource = new DataSource();
        this.dataProcessor = new DataProcessor();
        this.reportFormatter = new ReportFormatter();
    }

    public String generateReport(String query, String formatType) {
        System.out.println("\n--- Starting Report Generation ---");
        String rawData = dataSource.fetchData(query);
        String processedData = dataProcessor.processData(rawData);
        String formattedReport = reportFormatter.formatReport(processedData, formatType);
        System.out.println("--- Report Generation Complete ---\n");
        return formattedReport;
    }
}

// Client code to test
public class ReportClient {
    public static void main(String[] args) {
        ReportGeneratorFacade generator = new ReportGeneratorFacade();

        String salesReport = generator.generateReport("SELECT * FROM Sales", "PDF");
        System.out.println("Generated Report:\n" + salesReport);

        String inventoryReport = generator.generateReport("SELECT * FROM Inventory", "CSV");
        System.out.println("Generated Report:\n" + inventoryReport);

        // Expected output:
        // --- Starting Report Generation ---
        // DataSource: Fetching data with query: SELECT * FROM Sales
        // DataProcessor: Processing raw data...
        // ReportFormatter: Formatting processed data into PDF format.
        // --- Report Generation Complete ---
        // Generated Report:
        // Formatted Report (PDF) from Processed Data from Raw Data for SELECT * FROM Sales

        // --- Starting Report Generation ---
        // DataSource: Fetching data with query: SELECT * FROM Inventory
        // DataProcessor: Processing raw data...
        // ReportFormatter: Formatting processed data into CSV format.
        // --- Report Generation Complete ---
        // Generated Report:
        // Formatted Report (CSV) from Processed Data from Raw Data for SELECT * FROM Inventory
    }
}
```

#### Assessment idea
1.  **Question:** You are building a new API for a complex legacy banking system. The legacy system has dozens of classes for account management, transactions, security, and reporting. A common task for external developers is to "transfer funds." This involves checking balances, validating accounts, creating transaction records, and updating multiple ledgers. How would the Facade pattern help simplify this for API users, and what would a simplified `transferFunds` method look like?
    *   **Correct Answer:** The Facade pattern would help by providing a single, simplified `transferFunds` method that encapsulates all the complex interactions with the underlying legacy banking system classes. Instead of API users needing to interact with `AccountManager`, `TransactionService`, `SecurityValidator`, and `LedgerUpdater` directly, they would call a method on a `BankingFacade`. A simplified method might look like this:
        ```java
        public class BankingFacade {
            private AccountManager accountManager;
            private TransactionService transactionService;
            private SecurityValidator securityValidator;
            private LedgerUpdater ledgerUpdater;

            // Constructor to initialize subsystem components

            public boolean transferFunds(String fromAccount, String toAccount, double amount, String userId) {
                System.out.println("Facade: Initiating fund transfer from " + fromAccount + " to " + toAccount);
                if (!securityValidator.validateUser(userId)) {
                    System.out.println("Facade: Security validation failed.");
                    return false;
                }
                if (!accountManager.checkBalance(fromAccount, amount)) {
                    System.out.println("Facade: Insufficient funds.");
                    return false;
                }
                // ... more complex logic
                transactionService.createTransaction(fromAccount, toAccount, amount);
                accountManager.updateBalance(fromAccount, -amount);
                accountManager.updateBalance(toAccount, amount);
                ledgerUpdater.recordTransfer(fromAccount, toAccount, amount);
                System.out.println("Facade: Funds transferred successfully.");
                return true;
            }
        }
        ```
        This simplifies the API by reducing the number of objects clients need to interact with and the sequence of calls they need to remember.

2.  **Question:** What is a potential drawback of a poorly designed Facade, and how can you mitigate it?
    *   **Correct Answer:** A potential drawback of a poorly designed Facade is that it can become a "God object" – a single, massive class that knows too much and does too much, becoming a central point of coupling and making the system harder to maintain and evolve. This happens when the Facade tries to simplify too many unrelated subsystems or exposes too many methods.
        To mitigate this, ensure the Facade has a clear, focused responsibility. It should simplify a *specific* subsystem or a *related set* of operations. If a Facade starts growing too large, consider whether the underlying subsystem itself needs to be refactored into smaller, more cohesive parts, or if multiple, smaller facades (each addressing a distinct aspect of the system) would be more appropriate. The goal is simplification, not centralization of all logic.

#### AI generation note
Create an 11-minute video lesson. Begin with an animated diagram illustrating a complex home theater setup (TV, DVD, Amp, Lights, Projector) and the many steps required to watch a movie. Then, introduce the `HomeTheaterFacade` as a single remote control simplifying all these actions. Transition to a live coding demo in IntelliJ. First, quickly define the subsystem classes (`Amplifier`, `DvdPlayer`, `Projector`, `Lights`). Then, build the `HomeTheaterFacade` class, showing how it composes these objects and implements `watchMovie()` and `endMovie()`. Demonstrate the client code interacting only with the facade. Include a segment discussing the "God object" anti-pattern and how to avoid it by keeping facades focused. End with a 2-question interactive quiz on the benefits and drawbacks of Facade.

### Chapter 4.4 — The Proxy Pattern: Controlling Access to Objects

#### Learning objectives
*   Define the Proxy pattern and understand its role in controlling access to objects.
*   Distinguish between different types of proxies (remote, virtual, protection) and their use cases.
*   Implement the Proxy pattern in Java to provide controlled access or lazy initialization for an object.
*   Identify scenarios where the Proxy pattern offers advantages over direct object access.

#### Detailed lesson content
Sometimes, you need to provide a stand-in or placeholder for another object. This "surrogate" might control access to the real object, defer its creation until it's actually needed, or even represent an object located in a different address space. This is the core idea behind the **Proxy pattern**. The Proxy pattern provides a surrogate or placeholder for another object to control access to it.

The key characteristic of the Proxy pattern is that the proxy and the real subject both implement the same interface. This ensures that client code can interact with the proxy in the same way it would interact with the real subject, without knowing it's dealing with a substitute. The proxy then performs some additional logic (like access control, lazy loading, or remote communication) before or instead of delegating the request to the real subject.

There are several common types of proxies:
1.  **Remote Proxy**: Provides a local representation for an object that is in a different address space (e.g., on a remote server). It handles the encoding and decoding of requests and results across the network. Java RMI (Remote Method Invocation) extensively uses remote proxies.
2.  **Virtual Proxy**: Creates expensive objects on demand (lazy initialization). It acts as a placeholder until the real object is actually needed, saving resources.
3.  **Protection Proxy**: Controls access to the real subject based on permissions. It can check if the calling client has the necessary rights before allowing the operation to proceed.
4.  **Smart Reference Proxy**: Performs additional actions when the real subject is accessed, such as counting references to an object, loading an object into memory, or locking the real object before access.

Let's illustrate a **Virtual Proxy** with an example. Imagine you have an `Image` object that loads a very large image file from disk or a network. Loading it immediately might slow down your application's startup. A virtual proxy can defer this loading until the image is actually displayed.

First, define the common interface for the image:
```java
// Subject interface
public interface Image {
    void display();
}
```

Next, the real subject, which is expensive to create:
```java
// Real Subject: Expensive to load
public class RealImage implements Image {
    private String filename;

    public RealImage(String filename) {
        this.filename = filename;
        loadImageFromDisk(); // Simulate expensive loading
    }

    private void loadImageFromDisk() {
        System.out.println("Loading " + filename + " from disk...");
        try {
            Thread.sleep(2000); // Simulate network/disk latency
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println(filename + " loaded.");
    }

    @Override
    public void display() {
        System.out.println("Displaying " + filename);
    }
}
```

Now, the `ImageProxy` (Virtual Proxy):
```java
// Proxy: Controls access and provides lazy loading
public class ImageProxy implements Image {
    private String filename;
    private RealImage realImage; // Reference to the real subject

    public ImageProxy(String filename) {
        this.filename = filename;
    }

    @Override
    public void display() {
        if (realImage == null) {
            // Lazy initialization: create RealImage only when display() is called
            realImage = new RealImage(filename);
        }
        realImage.display(); // Delegate to the real subject
    }
}
```

Here's how a client would use it:
```java
// Client code
public class ImageViewer {
    public static void main(String[] args) {
        System.out.println("Application starting...");

        // ImageProxy is created immediately, but RealImage is NOT loaded yet.
        Image image1 = new ImageProxy("photo1.jpg");
        Image image2 = new ImageProxy("report_chart.png");

        System.out.println("Proxies created. Real images not loaded until display is called.");

        // First call to display() for image1 will trigger loading
        System.out.println("\n--- Displaying image1 ---");
        image1.display(); // Loads photo1.jpg

        // Second call to display() for image1 will NOT trigger loading again
        System.out.println("\n--- Displaying image1 again ---");
        image1.display(); // Just displays photo1.jpg

        // First call to display() for image2 will trigger loading
        System.out.println("\n--- Displaying image2 ---");
        image2.display(); // Loads report_chart.png
    }
}
```
In this example, `RealImage` is only instantiated and loaded when its `display()` method is actually invoked through the `ImageProxy`. This saves resources if the image is never displayed.

A common mistake is confusing Proxy with Decorator. Both patterns involve wrapping an object and implementing the same interface. However, their intents are different:
*   **Proxy**: Controls access to an object. It might defer creation, provide security checks, or handle remote communication. The proxy *is* the object for the client, but with added control.
*   **Decorator**: Adds responsibilities/behaviors to an object. It enhances the object's functionality without altering its core interface or controlling access.

Another pitfall is using a proxy when a simple wrapper or direct access is sufficient. Introducing a proxy adds a layer of indirection, which can slightly increase complexity and potentially introduce minor performance overhead if not carefully managed. Safety considerations include ensuring that the proxy correctly handles exceptions from the real subject and that any access control logic is robust and secure. For remote proxies, network communication reliability and error handling are critical.

The Proxy pattern is widely used in Java. For instance, `java.lang.reflect.Proxy` allows you to create dynamic proxies at runtime, often used in AOP (Aspect-Oriented Programming) frameworks for logging, transaction management, or security. Hibernate (an ORM framework) uses virtual proxies for lazy loading of related entities, fetching them from the database only when they are accessed. Understanding the Proxy pattern empowers you to manage resource-intensive objects efficiently, implement robust access control, and work seamlessly with remote objects.

#### Key concepts
*   **Proxy Pattern**: A structural design pattern that provides a surrogate or placeholder for another object to control access to it.
*   **Subject**: The interface that both the Real Subject and the Proxy implement, ensuring clients can interact with either interchangeably.
*   **Real Subject**: The actual object that the proxy represents, containing the core business logic or data.
*   **Proxy**: The class that implements the Subject interface and holds a reference to the Real Subject. It performs control logic (e.g., lazy loading, access control) before delegating to the Real Subject.
*   **Virtual Proxy**: A proxy that defers the creation and initialization of an expensive real subject until it's actually needed (lazy loading).
*   **Protection Proxy**: A proxy that controls access to the real subject based on client permissions or roles.
*   **Remote Proxy**: A proxy that provides a local representation for an object located in a different address space (e.g., on a remote server).

#### Hands-on activity
**Scenario:** You have a `SensitiveDataService` that performs an expensive operation (e.g., fetching confidential user data). You want to ensure that only authorized users can access this service. Implement a `ProtectionProxy` to add an authorization check before allowing access to the `SensitiveDataService`.

**Starter Code:**
```java
// Subject interface
interface DataService {
    String fetchData(String userId);
}

// Real Subject: Expensive and sensitive operation
class SensitiveDataService implements DataService {
    @Override
    public String fetchData(String userId) {
        System.out.println("SensitiveDataService: Fetching confidential data for user: " + userId);
        try {
            Thread.sleep(1500); // Simulate expensive data fetching
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return "Confidential Data for " + userId;
    }
}

// Your task: Implement the ProtectionProxy
class SensitiveDataServiceProxy implements DataService {
    private SensitiveDataService realService;
    private String authorizedUserRole; // e.g., "ADMIN"

    public SensitiveDataServiceProxy(String authorizedUserRole) {
        this.authorizedUserRole = authorizedUserRole;
    }

    private boolean checkAuthorization(String userId) {
        // Simulate a simple authorization check
        System.out.println("Proxy: Checking authorization for user: " + userId);
        // In a real app, this would query a security service or user roles
        return userId.equals(authorizedUserRole); // Simple check: user ID must match authorized role for this example
    }

    @Override
    public String fetchData(String userId) {
        if (checkAuthorization(userId)) {
            if (realService == null) {
                realService = new SensitiveDataService(); // Lazy init for the real service
            }
            return realService.fetchData(userId); // Delegate to the real service
        } else {
            System.out.println("Proxy: Access Denied for user: " + userId + ". Insufficient privileges.");
            return "Access Denied";
        }
    }
}

// Client code to test
public class DataClient {
    public static void main(String[] args) {
        // Create a proxy that only allows "ADMIN" to access
        DataService adminService = new SensitiveDataServiceProxy("ADMIN");

        System.out.println("--- Attempting access by ADMIN ---");
        System.out.println(adminService.fetchData("ADMIN")); // Should succeed

        System.out.println("\n--- Attempting access by GUEST ---");
        System.out.println(adminService.fetchData("GUEST")); // Should fail

        System.out.println("\n--- Attempting access by DEVELOPER ---");
        System.out.println(adminService.fetchData("DEVELOPER")); // Should fail
    }
}
```

#### Assessment idea
1.  **Question:** You are developing an application that displays a list of user profiles. Each profile includes a large, high-resolution profile picture that is expensive to load. You want to display a placeholder image initially and only load the full-resolution image when the user explicitly clicks on it. Which type of Proxy would be most suitable for this scenario, and why?
    *   **Correct Answer:** A Virtual Proxy would be most suitable. The `RealImage` (high-resolution profile picture) is an expensive resource to load. A Virtual Proxy would act as a placeholder, displaying a lightweight representation (e.g., a low-res thumbnail or a generic icon) until the `display()` method (triggered by a user click) is invoked. Only then would the Virtual Proxy instantiate and load the `RealImage`, saving resources and improving initial application responsiveness.

2.  **Question:** Explain the key difference in intent between the Decorator pattern and the Proxy pattern, even though both involve wrapping an object and implementing the same interface.
    *   **Correct Answer:** The key difference lies in their intent:
        *   **Decorator's intent** is to *add responsibilities or behaviors* to an object dynamically, enhancing its functionality without altering its interface. It focuses on "what" an object can do.
        *   **Proxy's intent** is to *control access* to an object. It acts as a gatekeeper or stand-in, managing when and how the real object is interacted with (e.g., lazy loading, security, remote access). It focuses on "when" and "how" an object can be accessed.
        While both wrap objects, a Decorator adds features, while a Proxy manages access to existing features.

#### AI generation note
Create a 12-minute live coding video with diagram overlays. Begin with an animated diagram showing a client trying to access an "expensive image" directly, then introduce the "image proxy" as an intermediary that defers the loading. Transition to a live coding demo in IntelliJ. First, define the `Image` interface and `RealImage` (with a simulated loading delay). Then, implement the `ImageProxy` as a virtual proxy, demonstrating lazy initialization in the `display()` method. Show the client code using the proxy and observe the loading messages. Include a clear visual comparison slide distinguishing Proxy from Decorator, emphasizing their different intents. End with a practical scenario-based interactive quiz on choosing the right proxy type.

---

## Module 5: Behavioral Patterns: Object Interactions & Responsibilities (Part 1)

**Module Goal:** To equip learners with the ability to identify, implement, and critically evaluate fundamental behavioral design patterns in Java, focusing on how objects interact and distribute responsibilities effectively to enhance flexibility and maintainability.

---

### Chapter 5.1 — The Strategy Pattern: Encapsulating Algorithms

#### Learning objectives
*   Understand the core principles and intent behind the Strategy pattern, specifically how it allows algorithms to be selected and swapped at runtime.
*   Implement the Strategy pattern in Java to encapsulate different algorithms within a family of classes.
*   Analyze scenarios where the Strategy pattern significantly improves code flexibility, reusability, and maintainability compared to conditional logic.
*   Identify common pitfalls and best practices when applying the Strategy pattern, such as managing algorithm state and choosing appropriate interfaces.

#### Detailed lesson content
Welcome to the fascinating world of behavioral design patterns, where we shift our focus from how objects are created or structured to how they interact and distribute responsibilities. Our journey begins with the Strategy pattern, a powerful tool for encapsulating algorithms and making them interchangeable. Imagine you're building an e-commerce application that needs to calculate shipping costs. Depending on the destination, package weight, or customer loyalty status, the calculation method might vary significantly. Without the Strategy pattern, you might end up with a large `if-else if` block or a `switch` statement within your `ShippingCalculator` class, checking various conditions and executing different calculation logic. This approach quickly becomes unwieldy, difficult to extend when new shipping methods emerge, and violates the Open/Closed Principle – meaning you have to modify existing code to add new functionality.

The Strategy pattern elegantly solves this problem by defining a family of algorithms, encapsulating each one, and making them interchangeable. It allows the client (the `ShippingCalculator` in our example) to choose the algorithm at runtime without knowing the specific implementation details of that algorithm. At its core, the Strategy pattern involves three main components: the **Strategy Interface**, **Concrete Strategies**, and the **Context**. The Strategy Interface declares a common interface for all supported algorithms. This interface ensures that all concrete strategies can be used interchangeably by the context. For our shipping example, this could be an `ShippingCostCalculator` interface with a method like `calculate(Order order)`.

Next, we have the Concrete Strategies. These are the actual implementations of the algorithms, each adhering to the Strategy Interface. So, you might have `StandardShippingCalculator`, `ExpressShippingCalculator`, and `InternationalShippingCalculator`, each providing its unique `calculate` method. Each concrete strategy encapsulates a specific algorithm, making it independent of the clients that use it. This separation of concerns is crucial: the algorithm's logic is isolated, making it easier to understand, test, and modify without affecting other parts of the system. If a new shipping method is introduced, you simply create a new concrete strategy class without altering existing code.

Finally, the Context is the class that holds a reference to a Strategy object and uses it to perform its task. The Context is configured with a Concrete Strategy object, and it delegates the algorithm execution to this strategy. Crucially, the Context does not implement the algorithm itself; it merely uses the strategy provided to it. The Context typically has a method to set or change its strategy, allowing for dynamic algorithm selection. For instance, our `Order` class or a `ShippingService` could be the context. It would hold an instance of `ShippingCostCalculator` and call its `calculate` method. The beauty here is that the `ShippingService` doesn't care *how* the shipping is calculated, only that it *can* be calculated. This decouples the service from the specific calculation logic.

Let's consider a practical scenario beyond shipping: sorting algorithms. You might have a `Sorter` class (Context) that needs to sort a list of items. Instead of implementing Bubble Sort, Quick Sort, and Merge Sort directly within the `Sorter` using conditionals, you define a `SortStrategy` interface with a `sort(List<T> data)` method. Then, `BubbleSortStrategy`, `QuickSortStrategy`, and `MergeSortStrategy` implement this interface. The `Sorter` class can then be injected with any of these strategies at runtime, allowing you to change the sorting behavior without modifying the `Sorter` itself. This is particularly useful in scenarios where performance requirements might dictate different sorting algorithms based on data size or type.

A common mistake when using the Strategy pattern is to over-engineer simple problems. If you only have one algorithm and no foreseeable need for alternatives, introducing the Strategy pattern might add unnecessary complexity. Another pitfall is to allow strategies to maintain state that is not specific to the algorithm itself, leading to potential concurrency issues if the same strategy instance is shared across multiple contexts. Strategies should ideally be stateless or have state managed externally by the context or passed in as parameters to the strategy method. Furthermore, ensure your Strategy Interface is well-defined and truly represents a family of interchangeable algorithms. If the algorithms have vastly different parameters or return types, they might not be good candidates for the same strategy interface.

Safety notes: When dealing with sensitive calculations, such as financial transactions or critical system operations, ensure that each concrete strategy is thoroughly tested in isolation and integrated with the context. The ability to swap algorithms at runtime also means you must carefully manage which strategy is applied under what conditions to prevent incorrect or malicious behavior. Input validation within each strategy is paramount, as different algorithms might have different assumptions about their input data. Always consider the performance implications of different strategies and profile your application to ensure the chosen strategy meets performance requirements, especially when dealing with large datasets or high-frequency operations. The Strategy pattern is an excellent example of the "program to an interface, not an implementation" principle, promoting loose coupling and high cohesion, which are cornerstones of robust software design.

```java
// Strategy Interface
interface PaymentStrategy {
    void pay(int amount);
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String expiryDate;
    private String cvv;

    public CreditCardPayment(String cardNumber, String expiryDate, String cvv) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Paying " + amount + " using Credit Card: " + cardNumber);
        // Simulate actual payment processing
        // In a real application, this would involve calling a payment gateway API
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;
    private String password;

    public PayPalPayment(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Paying " + amount + " using PayPal account: " + email);
        // Simulate actual payment processing
        // In a real application, this would involve calling PayPal API
    }
}

// Context
class ShoppingCart {
    private int totalAmount;
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public void addItem(String item, int price) {
        this.totalAmount += price;
        System.out.println("Added " + item + ". Current total: " + totalAmount);
    }

    public void checkout() {
        if (paymentStrategy == null) {
            System.out.println("Please select a payment strategy before checking out.");
            return;
        }
        System.out.println("Total amount to pay: " + totalAmount);
        paymentStrategy.pay(totalAmount);
        this.totalAmount = 0; // Reset for next transaction
    }
}

public class StrategyPatternDemo {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("Laptop", 1200);
        cart.addItem("Mouse", 25);

        // Pay using Credit Card
        cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456", "12/25", "123"));
        cart.checkout();
        System.out.println("\n--- Next Transaction ---");

        // Pay using PayPal
        ShoppingCart anotherCart = new ShoppingCart();
        anotherCart.addItem("Keyboard", 75);
        anotherCart.setPaymentStrategy(new PayPalPayment("user@example.com", "mysecretpassword"));
        anotherCart.checkout();
    }
}
```

#### Key concepts
*   **Strategy Pattern:** A behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.
*   **Strategy Interface:** Declares an interface common to all supported algorithms. The Context uses this interface to call the algorithm defined by a Concrete Strategy.
*   **Concrete Strategy:** Implements a specific algorithm according to the Strategy Interface. Each concrete strategy encapsulates a distinct algorithm.
*   **Context:** Maintains a reference to a Strategy object and uses the Strategy interface to execute the algorithm. It allows the client to configure itself with a Concrete Strategy object.
*   **Loose Coupling:** The Strategy pattern promotes loose coupling between the Context and the specific algorithms, as the Context only interacts with the Strategy Interface.

#### Hands-on activity
**Scenario:** You are developing a document processing application that needs to support various export formats (e.g., PDF, HTML, Plain Text). Implement the Strategy pattern to allow users to select the export format at runtime.

**Instructions:**
1.  Define an interface `DocumentExportStrategy` with a method `export(String documentContent)`.
2.  Create two concrete strategy classes: `PdfExportStrategy` and `HtmlExportStrategy`, each implementing `DocumentExportStrategy` with their respective export logic (e.g., printing "Exporting to PDF..." or "Exporting to HTML...").
3.  Create a `DocumentProcessor` class (Context) that has a `setExportStrategy` method and an `exportDocument` method. The `exportDocument` method should delegate the actual export to the currently set strategy.
4.  Write a `main` method to demonstrate switching between export strategies for a sample document.

**Code Template:**
```java
// 1. Define the Strategy Interface
interface DocumentExportStrategy {
    void export(String documentContent);
}

// 2. Create Concrete Strategy classes
class PdfExportStrategy implements DocumentExportStrategy {
    @Override
    public void export(String documentContent) {
        System.out.println("Exporting document to PDF format:");
        System.out.println("PDF Content: " + documentContent.substring(0, Math.min(documentContent.length(), 50)) + "...");
        // In a real app, this would involve PDF generation libraries
    }
}

class HtmlExportStrategy implements DocumentExportStrategy {
    @Override
    public void export(String documentContent) {
        System.out.println("Exporting document to HTML format:");
        System.out.println("HTML Content: <html><body><p>" + documentContent.substring(0, Math.min(documentContent.length(), 50)) + "...</p></body></html>");
        // In a real app, this would involve HTML rendering
    }
}

// TODO: Create a PlainTextExportStrategy

// 3. Create the Context class
class DocumentProcessor {
    private DocumentExportStrategy exportStrategy;

    public void setExportStrategy(DocumentExportStrategy strategy) {
        this.exportStrategy = strategy;
    }

    public void exportDocument(String content) {
        if (exportStrategy == null) {
            System.out.println("No export strategy set. Cannot export document.");
            return;
        }
        exportStrategy.export(content);
    }
}

public class DocumentExportDemo {
    public static void main(String[] args) {
        String sampleDocument = "This is a sample document content that needs to be exported into various formats. It contains important information.";

        DocumentProcessor processor = new DocumentProcessor();

        // Export as PDF
        processor.setExportStrategy(new PdfExportStrategy());
        processor.exportDocument(sampleDocument);
        System.out.println("\n--------------------\n");

        // Export as HTML
        processor.setExportStrategy(new HtmlExportStrategy());
        processor.exportDocument(sampleDocument);
        System.out.println("\n--------------------\n");

        // TODO: Export as Plain Text using the new strategy
    }
}
```

#### Assessment idea
1.  **Question:** You are designing a logging system where logs can be written to a file, a database, or a remote server. Which design pattern would be most appropriate to allow flexible switching between these logging destinations without modifying the core logging logic? Explain your choice and briefly describe how you would structure the classes.
    **Correct Answer:** The Strategy pattern is the most appropriate choice. It allows defining a family of algorithms (logging destinations) and encapsulating each one, making them interchangeable.
    *   **Structure:**
        *   **Strategy Interface:** `LoggerStrategy` with a method like `log(String message)`.
        *   **Concrete Strategies:** `FileLoggerStrategy`, `DatabaseLoggerStrategy`, `RemoteServerLoggerStrategy`, each implementing `LoggerStrategy` and providing specific logging logic.
        *   **Context:** `Logger` class, which would hold an instance of `LoggerStrategy`. It would have a `setLoggerStrategy(LoggerStrategy strategy)` method and a `logMessage(String message)` method that delegates to the current `LoggerStrategy`. This setup allows the `Logger` to switch between different logging mechanisms at runtime.

2.  **Question:** Consider a scenario where a `DiscountCalculator` class uses a large `switch` statement to apply different discount rules based on customer type (e.g., "New Customer", "Loyal Customer", "VIP Customer"). What are the disadvantages of this approach, and how does the Strategy pattern address them?
    **Correct Answer:**
    *   **Disadvantages of `switch` statement:**
        1.  **Violation of Open/Closed Principle:** To add a new customer type or modify an existing discount rule, you have to alter the `DiscountCalculator` class, which increases the risk of introducing bugs into existing, working code.
        2.  **Low Cohesion:** The `DiscountCalculator` class becomes responsible for too many things: managing customer types and implementing all discount algorithms, making it harder to understand and maintain.
        3.  **High Coupling:** The `DiscountCalculator` is tightly coupled to all specific discount implementations.
        4.  **Code Duplication:** Similar logic might be repeated across different cases.
    *   **How Strategy pattern addresses them:**
        1.  **Open/Closed Principle Adherence:** Each discount rule becomes a `ConcreteStrategy` (e.g., `NewCustomerDiscountStrategy`, `LoyalCustomerDiscountStrategy`). To add a new rule, you simply create a new strategy class without modifying the `DiscountCalculator` (Context).
        2.  **High Cohesion:** Each `ConcreteStrategy` is solely responsible for its specific discount calculation, improving cohesion. The `DiscountCalculator` (Context) only manages the selection and application of the strategy.
        3.  **Loose Coupling:** The `DiscountCalculator` is coupled only to the `DiscountStrategy` interface, not to specific implementations.
        4.  **Reusability:** Individual discount strategies can potentially be reused in other parts of the system if needed.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated diagram illustrating the problem of `if-else` or `switch` statements for varying algorithms. Then, transition to a live coding session in IntelliJ IDEA, building the `PaymentStrategy` example (interface, concrete classes, context). Show how to switch strategies in `main` and demonstrate the output. Highlight the `setPaymentStrategy` method's role. Include a visual overlay explaining the three components (Strategy, Concrete Strategy, Context) as they appear in the code. Conclude with a 2-question interactive quiz on identifying appropriate use cases for the Strategy pattern.
---

### Chapter 5.2 — The Observer Pattern: Event-Driven Communication

#### Learning objectives
*   Grasp the fundamental concept of the Observer pattern, including its role in establishing a one-to-many dependency between objects.
*   Implement the Observer pattern in Java using interfaces for subjects and observers to enable event-driven communication.
*   Analyze real-world scenarios where the Observer pattern is effectively used, such as GUI events, stock market tickers, or notification systems.
*   Recognize the benefits and potential drawbacks of the Observer pattern, including issues like memory leaks with unmanaged subscriptions and update order.

#### Detailed lesson content
As we continue our exploration of behavioral patterns, let's delve into the Observer pattern, a cornerstone for building reactive and event-driven systems. Imagine you're developing a stock trading application. When the price of a particular stock changes, multiple components of your application might need to react: a chart might need to update, a trading bot might need to execute an order, and a user interface widget might need to display the new price. Without a structured approach, you might find yourself tightly coupling these components, leading to a tangled mess where changes in one part of the system have unpredictable ripple effects across others. This is precisely the problem the Observer pattern aims to solve.

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. The object whose state is being observed is called the **Subject** (or Publisher), and the objects that are interested in the Subject's state changes are called **Observers** (or Subscribers). This pattern promotes loose coupling because the Subject doesn't need to know the concrete classes of its Observers; it only interacts with them through a common Observer interface. This means you can add new Observers without modifying the Subject, adhering to the Open/Closed Principle.

Implementing the Observer pattern typically involves two main interfaces and their concrete implementations. First, the **Subject Interface** declares methods for attaching (subscribing) and detaching (unsubscribing) Observers, and a method for notifying all registered Observers of a state change. The **Concrete Subject** implements this interface and maintains a list of its Observers. When its state changes, it iterates through this list and calls the update method on each registered Observer. For our stock example, `StockMarket` or `Stock` could be the Concrete Subject, with methods like `addObserver(Observer o)`, `removeObserver(Observer o)`, and `notifyObservers()`.

Second, the **Observer Interface** declares an `update` method that the Subject calls to notify the Observer of a state change. The **Concrete Observers** implement this interface, defining the specific actions to take when they receive a notification. In our stock application, `StockChart`, `TradingBot`, and `StockDisplay` could be Concrete Observers, each implementing an `update` method to refresh their respective views or logic based on the new stock price. When the `Stock` object's price changes, it calls `notifyObservers()`, which in turn calls `update()` on all registered `StockChart`, `TradingBot`, and `StockDisplay` instances.

A key benefit of the Observer pattern is its ability to facilitate event-driven programming. Instead of components constantly polling for changes, they simply register their interest and wait to be notified. This makes the system more responsive and efficient. It's widely used in graphical user interfaces (GUIs), where UI elements (Subjects) notify listeners (Observers) about user actions like button clicks or text input. Java's AWT and Swing frameworks heavily utilize variations of the Observer pattern (e.g., `ActionListener`, `KeyListener`). Another common application is in reactive programming frameworks, where streams of data trigger reactions from subscribers.

Common mistakes when implementing the Observer pattern include forgetting to unsubscribe Observers, which can lead to memory leaks, especially if the Subject outlives the Observer. If an Observer is no longer needed but remains subscribed, the Subject will continue to hold a reference to it, preventing it from being garbage collected. Another challenge is managing the order of updates if multiple Observers have dependencies on each other, though the pattern itself doesn't guarantee a specific update order. Developers must also be mindful of the performance implications if a Subject has a very large number of Observers, as notifying all of them can be computationally expensive.

Safety notes: When designing your Observer pattern implementation, consider thread safety. If a Subject's state can be changed by multiple threads, or if Observers perform complex operations that might not be thread-safe, you'll need to implement proper synchronization mechanisms (e.g., using `synchronized` blocks or `java.util.concurrent` utilities) to prevent race conditions and ensure data consistency. Also, be cautious about "update storms" where one update triggers another, leading to a cascade of notifications. Design your `update` methods to be idempotent or to handle such scenarios gracefully. Finally, ensure that the data passed to the `update` method is sufficient for the Observers to react, but not excessive, to avoid unnecessary data transfer. The Observer pattern is a powerful paradigm for building decoupled, responsive systems, but like any powerful tool, it requires careful consideration and implementation to avoid common pitfalls.

```java
import java.util.ArrayList;
import java.util.List;

// Subject Interface
interface Subject {
    void addObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}

// Observer Interface
interface Observer {
    void update(String message);
}

// Concrete Subject: WeatherStation
class WeatherStation implements Subject {
    private List<Observer> observers;
    private String weatherUpdate;

    public WeatherStation() {
        this.observers = new ArrayList<>();
    }

    @Override
    public void addObserver(Observer o) {
        observers.add(o);
        System.out.println("Observer added: " + o.getClass().getSimpleName());
    }

    @Override
    public void removeObserver(Observer o) {
        observers.remove(o);
        System.out.println("Observer removed: " + o.getClass().getSimpleName());
    }

    @Override
    public void notifyObservers() {
        System.out.println("\nNotifying observers about weather update: " + weatherUpdate);
        for (Observer observer : observers) {
            observer.update(weatherUpdate);
        }
    }

    public void setWeather(String newWeather) {
        System.out.println("\nWeatherStation: New weather update available: " + newWeather);
        this.weatherUpdate = newWeather;
        notifyObservers();
    }
}

// Concrete Observer: PhoneDisplay
class PhoneDisplay implements Observer {
    private String name;

    public PhoneDisplay(String name) {
        this.name = name;
    }

    @Override
    public void update(String message) {
        System.out.println(name + " (PhoneDisplay) received update: " + message);
        // Logic to update phone display
    }
}

// Concrete Observer: TVDisplay
class TVDisplay implements Observer {
    private String name;

    public TVDisplay(String name) {
        this.name = name;
    }

    @Override
    public void update(String message) {
        System.out.println(name + " (TVDisplay) received update: " + message);
        // Logic to update TV display
    }
}

public class ObserverPatternDemo {
    public static void main(String[] args) {
        WeatherStation station = new WeatherStation();

        PhoneDisplay phone1 = new PhoneDisplay("User1");
        PhoneDisplay phone2 = new PhoneDisplay("User2");
        TVDisplay tv1 = new TVDisplay("LivingRoomTV");

        station.addObserver(phone1);
        station.addObserver(phone2);
        station.addObserver(tv1);

        station.setWeather("Temperature: 25°C, Sunny");

        station.removeObserver(phone2); // User2 no longer wants updates

        station.setWeather("Temperature: 18°C, Cloudy with a chance of rain");

        // Add another observer later
        PhoneDisplay phone3 = new PhoneDisplay("User3");
        station.addObserver(phone3);
        station.setWeather("Temperature: 20°C, Partly cloudy");
    }
}
```

#### Key concepts
*   **Observer Pattern:** A behavioral design pattern that defines a one-to-many dependency between objects so that when one object (the Subject) changes state, all its dependents (the Observers) are notified and updated automatically.
*   **Subject (Publisher):** The object that holds the state of interest and notifies its registered Observers when its state changes. It provides methods to attach, detach, and notify Observers.
*   **Observer (Subscriber):** The object that is interested in the Subject's state changes. It implements an `update` method that the Subject calls to inform it of changes.
*   **Loose Coupling:** The Subject and Observers are loosely coupled because the Subject only knows about the Observer interface, not concrete Observer classes.
*   **Event-Driven Communication:** Facilitates a system where components react to events rather than constantly checking for changes.

#### Hands-on activity
**Scenario:** You are building a simple news feed application. When a new article is published, all subscribed users should receive a notification.

**Instructions:**
1.  Define a `NewsPublisher` interface (Subject) with methods `subscribe(NewsSubscriber subscriber)`, `unsubscribe(NewsSubscriber subscriber)`, and `publishNews(String articleTitle, String content)`.
2.  Define a `NewsSubscriber` interface (Observer) with a method `receiveNews(String articleTitle, String content)`.
3.  Create a concrete `BlogPublisher` class that implements `NewsPublisher` and maintains a list of subscribers. When `publishNews` is called, it should notify all subscribers.
4.  Create two concrete `EmailSubscriber` and `SmsSubscriber` classes that implement `NewsSubscriber`, each printing a message indicating how they received the news (e.g., "Email received: ...", "SMS received: ...").
5.  In a `main` method, create a `BlogPublisher`, add a few `EmailSubscriber` and `SmsSubscriber` instances, publish some news, then unsubscribe one subscriber and publish more news to observe the change.

**Code Template:**
```java
import java.util.ArrayList;
import java.util.List;

// 1. Define the Subject Interface
interface NewsPublisher {
    void subscribe(NewsSubscriber subscriber);
    void unsubscribe(NewsSubscriber subscriber);
    void publishNews(String articleTitle, String content);
}

// 2. Define the Observer Interface
interface NewsSubscriber {
    void receiveNews(String articleTitle, String content);
}

// 3. Create a Concrete Subject
class BlogPublisher implements NewsPublisher {
    private List<NewsSubscriber> subscribers = new ArrayList<>();

    @Override
    public void subscribe(NewsSubscriber subscriber) {
        subscribers.add(subscriber);
        System.out.println("Subscriber added: " + subscriber.getClass().getSimpleName());
    }

    @Override
    public void unsubscribe(NewsSubscriber subscriber) {
        subscribers.remove(subscriber);
        System.out.println("Subscriber removed: " + subscriber.getClass().getSimpleName());
    }

    @Override
    public void publishNews(String articleTitle, String content) {
        System.out.println("\n--- Publishing New Article: '" + articleTitle + "' ---");
        for (NewsSubscriber subscriber : subscribers) {
            subscriber.receiveNews(articleTitle, content);
        }
    }
}

// 4. Create Concrete Observers
class EmailSubscriber implements NewsSubscriber {
    private String emailAddress;

    public EmailSubscriber(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    @Override
    public void receiveNews(String articleTitle, String content) {
        System.out.println("Email to " + emailAddress + ": New article '" + articleTitle + "' published. Content snippet: " + content.substring(0, Math.min(content.length(), 70)) + "...");
    }
}

class SmsSubscriber implements NewsSubscriber {
    private String phoneNumber;

    public SmsSubscriber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public void receiveNews(String articleTitle, String content) {
        System.out.println("SMS to " + phoneNumber + ": New article '" + articleTitle + "' published. Read more online.");
    }
}

// TODO: Create a PushNotificationSubscriber

public class NewsFeedDemo {
    public static void main(String[] args) {
        BlogPublisher techBlog = new BlogPublisher();

        EmailSubscriber user1Email = new EmailSubscriber("user1@example.com");
        SmsSubscriber user2Sms = new SmsSubscriber("555-1234");
        EmailSubscriber user3Email = new EmailSubscriber("user3@example.com");

        techBlog.subscribe(user1Email);
        techBlog.subscribe(user2Sms);
        techBlog.subscribe(user3Email);

        techBlog.publishNews("Java 17 Features", "Java 17 brings exciting new features like sealed classes and pattern matching for switch expressions...");

        System.out.println("\n--- User 2 unsubscribes ---");
        techBlog.unsubscribe(user2Sms);

        techBlog.publishNews("Design Patterns Explained", "Understanding design patterns is crucial for writing maintainable and scalable software...");

        // TODO: Add a PushNotificationSubscriber and publish another article
    }
}
```

#### Assessment idea
1.  **Question:** You are building a social media application where users can follow other users. When a user posts a new update, all their followers should see it in their feed. Which design pattern best fits this scenario, and why?
    **Correct Answer:** The Observer pattern is the most suitable.
    *   **Why:** When a user (Subject) posts an update, all their followers (Observers) need to be notified. This is a classic one-to-many dependency. The posting user doesn't need to know the concrete types of their followers (e.g., mobile app, web app, email notification service); they just notify anyone subscribed to their updates. This decouples the user's posting action from the various ways followers consume those updates.

2.  **Question:** Describe a potential pitfall of the Observer pattern related to memory management and how it can be mitigated.
    **Correct Answer:** A common pitfall is **memory leaks** if Observers are not properly unsubscribed from the Subject. If a Subject holds strong references to its Observers, and an Observer is no longer needed but remains subscribed, it cannot be garbage collected. This leads to the Observer lingering in memory unnecessarily, consuming resources.
    *   **Mitigation:**
        *   **Explicit Unsubscription:** Ensure that Observers explicitly call `removeObserver()` on the Subject when they are no longer interested in updates or are about to be destroyed.
        *   **Weak References:** For scenarios where explicit unsubscription might be difficult to manage (e.g., short-lived UI components), the Subject can hold `WeakReference`s to its Observers. This allows the garbage collector to reclaim Observer objects if no other strong references exist, even if they haven't been explicitly unsubscribed. Java's `java.util.Observable` (deprecated) and `java.beans.PropertyChangeSupport` use variations of this.

#### AI generation note
Produce a 10-minute animated explainer video. Start with an analogy of a newspaper subscription or a weather alert system to introduce the one-to-many concept. Then, use animated diagrams to show the Subject, Observer, and their interaction, highlighting the `addObserver`, `removeObserver`, and `notifyObservers` calls. Integrate a split-screen view showing the `WeatherStation` code on one side and an animated representation of `PhoneDisplay` and `TVDisplay` objects receiving updates on the other. Emphasize the loose coupling. Conclude with a short reflection prompt asking learners to identify another real-world application of the Observer pattern and explain why.
---

### Chapter 5.3 — The Command Pattern: Encapsulating Requests

#### Learning objectives
*   Understand the purpose of the Command pattern, which is to encapsulate a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of requests.
*   Implement the Command pattern in Java to decouple the invoker of an operation from the object that performs the operation.
*   Analyze how the Command pattern enables features like undo/redo functionality, transaction logging, and asynchronous task execution.
*   Identify common scenarios where the Command pattern is beneficial and discuss its advantages in terms of flexibility and extensibility.

#### Detailed lesson content
Moving further into behavioral patterns, we encounter the Command pattern, a remarkably versatile tool for encapsulating actions or requests as objects. Imagine you're building a text editor. Users expect to be able to cut, copy, paste, save, and undo operations. Without the Command pattern, you might have a complex web of dependencies where menu items directly call methods on the `TextEditor` class, making it difficult to implement features like undo/redo, macro recording, or even simply changing the UI layout without affecting the underlying logic. The Command pattern provides a clean solution by turning these requests into first-class objects.

The Command pattern's core idea is to encapsulate a request as an object, thereby allowing you to parameterize clients with different requests, queue requests, log requests, and support undoable operations. This pattern decouples the object that invokes the operation (the **Invoker**) from the object that knows how to perform it (the **Receiver**). The **Command Interface** declares an interface for executing an operation, typically with a single method, often named `execute()`. This interface is the contract that all concrete command objects must adhere to.

**Concrete Command** classes implement the Command Interface. Each concrete command encapsulates a specific request by binding together a Receiver object and a set of actions on that Receiver. When the `execute()` method is called on a Concrete Command, it delegates the actual work to the Receiver. For our text editor, `CutCommand`, `CopyCommand`, `PasteCommand`, and `SaveCommand` would be Concrete Commands. Each would hold a reference to the `TextEditor` (the Receiver) and, when executed, would call the appropriate method on the `TextEditor` (e.g., `textEditor.cut()`).

The **Receiver** is the object that performs the actual work. It knows how to carry out the operations requested by the Command. The Command pattern does not specify how the Receiver should perform its work; it simply ensures that the request is delivered to the correct recipient. In the text editor example, the `TextEditor` class itself would be the Receiver, containing the actual logic for cutting, copying, pasting, and saving text.

Finally, the **Invoker** is the object that asks the command to carry out the request. It holds a reference to a Command object and, at some point, calls its `execute()` method. The Invoker doesn't know anything about the concrete command or the receiver; it only knows about the Command interface. This is where the decoupling happens. In our text editor, menu items, toolbar buttons, or keyboard shortcuts could act as Invokers. A "Cut" menu item, for instance, would be configured with a `CutCommand` object and simply call `command.execute()` when clicked.

One of the most powerful applications of the Command pattern is implementing undo/redo functionality. Since each action is encapsulated as an object, you can easily store a history of executed commands in a stack. To undo, you pop the last command from the stack and call an `undo()` method (which you'd add to your `Command` interface). To redo, you push it onto a "redo" stack and call `execute()` again. This makes managing complex sequences of operations much simpler and more robust. Another use case is transaction logging, where commands can be serialized and replayed to recover state or audit actions. It's also excellent for queueing requests for asynchronous processing, allowing a client to issue commands without waiting for them to complete immediately.

Common mistakes include making the Command objects too heavy by giving them too much responsibility beyond just encapsulating a request. Commands should ideally be lightweight and focused on delegating to a Receiver. Another pitfall is creating a separate Command class for every single small action, which can lead to a proliferation of classes. Sometimes, a generic command that takes parameters might be more appropriate for very similar operations. Also, when implementing undo/redo, remember that the `undo()` method must reverse the state change correctly, which can be tricky for complex operations.

Safety notes: When implementing undoable commands, ensure that the state required for undoing an operation is properly captured *before* the operation is executed. This might involve deep copying objects or storing previous values. Be mindful of resource management; if commands hold references to large objects or open resources, ensure they are properly released when the command is no longer needed. In multi-threaded environments, if commands modify shared state, proper synchronization (e.g., `synchronized` blocks or `java.util.concurrent` utilities) is essential to prevent race conditions and maintain data integrity, especially if commands are queued and executed by different threads. The Command pattern offers a flexible way to manage operations, but its power comes with the responsibility of careful design and implementation.

```java
import java.util.ArrayList;
import java.util.List;

// Command Interface
interface Command {
    void execute();
    void undo(); // For undoable commands
}

// Receiver: Light
class Light {
    public void turnOn() {
        System.out.println("Light is ON");
    }

    public void turnOff() {
        System.out.println("Light is OFF");
    }
}

// Concrete Command: TurnOnLightCommand
class TurnOnLightCommand implements Command {
    private Light light; // Receiver

    public TurnOnLightCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOn();
    }

    @Override
    public void undo() {
        light.turnOff(); // Revert the action
    }
}

// Concrete Command: TurnOffLightCommand
class TurnOffLightCommand implements Command {
    private Light light; // Receiver

    public TurnOffLightCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();
    }

    @Override
    public void undo() {
        light.turnOn(); // Revert the action
    }
}

// Invoker: RemoteControl
class RemoteControl {
    private Command command;
    private List<Command> history = new ArrayList<>(); // For undo/redo

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        if (command != null) {
            command.execute();
            history.add(command); // Add to history for undo
        } else {
            System.out.println("No command set for this button.");
        }
    }

    public void pressUndo() {
        if (!history.isEmpty()) {
            Command lastCommand = history.remove(history.size() - 1);
            lastCommand.undo();
            System.out.println("Undo executed for: " + lastCommand.getClass().getSimpleName());
        } else {
            System.out.println("Nothing to undo.");
        }
    }
}

public class CommandPatternDemo {
    public static void main(String[] args) {
        Light livingRoomLight = new Light(); // Receiver

        // Create concrete commands
        Command turnOn = new TurnOnLightCommand(livingRoomLight);
        Command turnOff = new TurnOffLightCommand(livingRoomLight);

        // Create invoker
        RemoteControl remote = new RemoteControl();

        // Turn on the light
        remote.setCommand(turnOn);
        remote.pressButton(); // Light is ON

        // Turn off the light
        remote.setCommand(turnOff);
        remote.pressButton(); // Light is OFF

        // Let's try undo
        remote.pressUndo(); // Light is ON (undo turnOff)
        remote.pressUndo(); // Light is OFF (undo turnOn)
        remote.pressUndo(); // Nothing to undo.

        System.out.println("\n--- Complex sequence ---");
        Light kitchenLight = new Light();
        RemoteControl kitchenRemote = new RemoteControl();

        kitchenRemote.setCommand(new TurnOnLightCommand(kitchenLight));
        kitchenRemote.pressButton(); // Kitchen Light ON
        kitchenRemote.setCommand(new TurnOffLightCommand(kitchenLight));
        kitchenRemote.pressButton(); // Kitchen Light OFF
        kitchenRemote.pressButton(); // Kitchen Light OFF (pressed again)

        kitchenRemote.pressUndo(); // Kitchen Light ON
        kitchenRemote.pressUndo(); // Kitchen Light OFF
        kitchenRemote.pressUndo(); // Kitchen Light ON
    }
}
```

#### Key concepts
*   **Command Pattern:** A behavioral design pattern that encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
*   **Command Interface:** Declares an interface for executing an operation, typically with an `execute()` method. For undoable commands, an `undo()` method is also included.
*   **Concrete Command:** Implements the Command interface. It binds a Receiver object and a set of actions on the Receiver. When `execute()` is called, it delegates to the Receiver.
*   **Receiver:** The object that performs the actual work. It knows how to carry out the operations requested by the Command.
*   **Invoker:** The object that asks the command to carry out the request. It holds a reference to a Command object and calls its `execute()` method without knowing the concrete command or receiver.
*   **Decoupling:** Separates the object that initiates a request from the object that performs the request.
*   **Undo/Redo Functionality:** A common application where commands are stored in a history stack, allowing reversal or reapplication of operations.

#### Hands-on activity
**Scenario:** You are building a simple calculator application that supports addition, subtraction, multiplication, and division. Implement these operations using the Command pattern, allowing the calculator to perform operations and also to undo the last operation.

**Instructions:**
1.  Define a `CalculatorCommand` interface with `execute()` and `undo()` methods.
2.  Create a `Calculator` class (Receiver) with methods like `add(int value)`, `subtract(int value)`, `multiply(int value)`, `divide(int value)`, and `getCurrentValue()`. This class should also store its previous state for undo operations.
3.  Create concrete command classes like `AddCommand`, `SubtractCommand`, `MultiplyCommand`, and `DivideCommand`. Each should take the `Calculator` (Receiver) and an operand as constructor arguments. Implement `execute()` and `undo()` for each.
4.  Create a `User` class (Invoker) that can set a command and `executeCommand()` or `undoLastCommand()`.
5.  In a `main` method, demonstrate performing several calculations and then undoing them.

**Code Template:**
```java
import java.util.Stack;

// 1. Command Interface
interface CalculatorCommand {
    void execute();
    void undo();
}

// 2. Receiver: Calculator
class Calculator {
    private int currentValue = 0;
    private Stack<Integer> history = new Stack<>(); // To store previous states for undo

    public void add(int value) {
        history.push(currentValue); // Save current state before modification
        currentValue += value;
        System.out.println("Added " + value + ". Current value: " + currentValue);
    }

    public void subtract(int value) {
        history.push(currentValue);
        currentValue -= value;
        System.out.println("Subtracted " + value + ". Current value: " + currentValue);
    }

    public void multiply(int value) {
        history.push(currentValue);
        currentValue *= value;
        System.out.println("Multiplied by " + value + ". Current value: " + currentValue);
    }

    public void divide(int value) {
        if (value == 0) {
            System.out.println("Error: Cannot divide by zero.");
            return;
        }
        history.push(currentValue);
        currentValue /= value;
        System.out.println("Divided by " + value + ". Current value: " + currentValue);
    }

    public int getCurrentValue() {
        return currentValue;
    }

    public void restorePreviousState() {
        if (!history.isEmpty()) {
            currentValue = history.pop();
            System.out.println("State restored. Current value: " + currentValue);
        } else {
            System.out.println("No previous state to restore.");
        }
    }
}

// 3. Concrete Commands
class AddCommand implements CalculatorCommand {
    private Calculator calculator;
    private int operand;

    public AddCommand(Calculator calculator, int operand) {
        this.calculator = calculator;
        this.operand = operand;
    }

    @Override
    public void execute() {
        calculator.add(operand);
    }

    @Override
    public void undo() {
        calculator.restorePreviousState(); // Restore to state before add
    }
}

class SubtractCommand implements CalculatorCommand {
    private Calculator calculator;
    private int operand;

    public SubtractCommand(Calculator calculator, int operand) {
        this.calculator = calculator;
        this.operand = operand;
    }

    @Override
    public void execute() {
        calculator.subtract(operand);
    }

    @Override
    public void undo() {
        calculator.restorePreviousState(); // Restore to state before subtract
    }
}

// TODO: Implement MultiplyCommand and DivideCommand

// 4. Invoker: User (or Controller)
class User {
    private Calculator calculator;
    private Stack<CalculatorCommand> executedCommands = new Stack<>();

    public User(Calculator calculator) {
        this.calculator = calculator;
    }

    public void executeCommand(CalculatorCommand command) {
        command.execute();
        executedCommands.push(command);
    }

    public void undoLastCommand() {
        if (!executedCommands.isEmpty()) {
            CalculatorCommand lastCommand = executedCommands.pop();
            lastCommand.undo();
            System.out.println("Undo successful.");
        } else {
            System.out.println("No commands to undo.");
        }
    }
}

public class CalculatorDemo {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        User user = new User(calculator);

        user.executeCommand(new AddCommand(calculator, 10)); // Current: 10
        user.executeCommand(new SubtractCommand(calculator, 3)); // Current: 7
        user.executeCommand(new AddCommand(calculator, 20)); // Current: 27

        System.out.println("Final value: " + calculator.getCurrentValue());

        System.out.println("\n--- Undoing operations ---");
        user.undoLastCommand(); // Undo Add 20, Current: 7
        user.undoLastCommand(); // Undo Subtract 3, Current: 10
        user.undoLastCommand(); // Undo Add 10, Current: 0
        user.undoLastCommand(); // No commands to undo.

        System.out.println("Value after all undos: " + calculator.getCurrentValue());

        // TODO: Add Multiply and Divide commands and test them.
    }
}
```

#### Assessment idea
1.  **Question:** In a graphical user interface (GUI) application, a toolbar button, a menu item, and a keyboard shortcut all trigger the "Save Document" action. How can the Command pattern be used to implement this functionality efficiently, ensuring that the underlying save logic is decoupled from the UI elements?
    **Correct Answer:** The Command pattern effectively centralizes the "Save Document" logic.
    *   **Structure:**
        *   **Receiver:** The `Document` or `TextEditor` class, which contains the actual `save()` method.
        *   **Command Interface:** `Command` with an `execute()` method.
        *   **Concrete Command:** `SaveDocumentCommand` class, which implements `Command` and holds a reference to the `Document` Receiver. Its `execute()` method would simply call `document.save()`.
        *   **Invokers:** The toolbar button, menu item, and keyboard shortcut listeners would all be configured to hold an instance of `SaveDocumentCommand`. When triggered, they would simply call `command.execute()`.
    *   **Benefits:** This approach decouples the UI elements (Invokers) from the specific implementation of saving (Receiver). Any change to the save logic only requires modifying the `SaveDocumentCommand` or the `Document` class, not each individual UI element. It also allows for easy addition of new ways to trigger the save action.

2.  **Question:** You are designing a system where user actions need to be logged and potentially replayed for auditing or debugging. Explain how the Command pattern facilitates this requirement, specifically focusing on the logging and replaying aspects.
    **Correct Answer:** The Command pattern is ideal for logging and replaying actions because it encapsulates each action as a distinct object.
    *   **Logging:** Since every user action is represented by a `Command` object, you can easily intercept and log these objects before or after their `execute()` method is called. The `Command` object itself can contain all necessary information about the action (e.g., type of action, parameters, timestamp). This log can be stored persistently (e.g., in a database or file).
    *   **Replaying:** To replay actions, you simply retrieve the logged `Command` objects in their original sequence. For each logged command, you recreate the `Command` object (if it's not directly serializable) and call its `execute()` method. This allows you to reconstruct the sequence of operations, effectively replaying the user's session or a specific transaction for auditing, debugging, or even for automated testing. This capability is difficult to achieve without encapsulating actions as objects.

#### AI generation note
Create a 15-minute live coding tutorial. Start by demonstrating a simple `Light` class with `turnOn` and `turnOff` methods. Then, refactor this into the Command pattern step-by-step: first, define the `Command` interface, then `TurnOnLightCommand` and `TurnOffLightCommand`, and finally the `RemoteControl` (Invoker). Emphasize how the `RemoteControl` doesn't know about `Light`. Next, extend the example to include the `undo()` functionality, showing how `history` stack in `RemoteControl` enables this. Use clear console output to show the state changes. Include a visual overlay explaining the roles of Invoker, Command, and Receiver. End with a hands-on coding challenge to add a `DimLightCommand` with `execute()` and `undo()`.
---

### Chapter 5.4 — The Iterator Pattern: Traversing Collections

#### Learning objectives
*   Understand the fundamental problem addressed by the Iterator pattern: providing a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
*   Implement the Iterator pattern in Java, distinguishing between internal and external iterators, and utilizing Java's built-in `Iterator` interface.
*   Analyze how the Iterator pattern promotes loose coupling between aggregate objects and client code, enabling flexible traversal strategies.
*   Identify scenarios where custom iterators are beneficial and discuss the advantages of using iterators for uniform collection traversal.

#### Detailed lesson content
As we manage collections of objects in our Java applications, a common task is to traverse these collections to access or process their elements. You might have an `ArrayList`, a `LinkedList`, a `HashSet`, or even a custom data structure like a binary tree or a graph. Each of these structures has its own way of storing elements. Without a standardized approach, client code would need to know the internal structure of each collection to iterate over it, leading to tightly coupled and inflexible code. This is where the Iterator pattern comes to our rescue.

The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It decouples the traversal logic from the aggregate object, allowing different traversal algorithms to be used without changing the aggregate's interface. This pattern is so fundamental that it's deeply embedded in the Java Collections Framework, with the `java.util.Iterator` interface being a prime example.

At its core, the Iterator pattern involves two main components: the **Iterator Interface** and the **Aggregate Interface**. The Iterator Interface declares methods for accessing and traversing elements. In Java, this is typically `hasNext()` (to check if there are more elements) and `next()` (to retrieve the next element). It might also include a `remove()` method for safely removing the current element from the underlying collection. The **Concrete Iterator** implements this interface, keeping track of the current position in the traversal and providing the logic to move to the next element. It needs a reference to the Concrete Aggregate it's traversing.

The **Aggregate Interface** declares a method for creating an `Iterator` object. This method, often named `createIterator()` or `iterator()`, returns an instance of a Concrete Iterator. The **Concrete Aggregate** implements this interface and is responsible for creating and returning an appropriate Concrete Iterator that can traverse its elements. For example, a custom `BookCollection` class (Concrete Aggregate) would implement an `iterator()` method that returns a `BookIterator` (Concrete Iterator).

The beauty of this pattern lies in the decoupling it achieves. Client code that needs to iterate over a collection only interacts with the `Iterator` interface, not with the concrete aggregate class. This means you can change the internal representation of your aggregate (e.g., switch from an array to a linked list) without affecting the client code that iterates over it, as long as the `createIterator()` method still returns a valid `Iterator`. Furthermore, you can provide multiple iterators for the same aggregate, each implementing a different traversal strategy (e.g., forward, reverse, or even a filtered traversal).

Java's enhanced for-loop (`for (Type element : collection)`) is a syntactic sugar built upon the Iterator pattern. For any class to be usable with the enhanced for-loop, it must implement the `java.lang.Iterable` interface, which has a single method: `iterator()`. This method must return an object that implements `java.util.Iterator`. This demonstrates how deeply integrated and useful the pattern is for making collections easily traversable.

A common mistake is to expose the internal structure of the aggregate directly through getter methods instead of providing an iterator. This tightly couples the client to the aggregate's implementation and defeats the purpose of the pattern. Another pitfall is to modify the underlying collection while an iterator is active, which can lead to `ConcurrentModificationException` in Java if not handled carefully. Java's iterators are "fail-fast," meaning they throw this exception if the collection is structurally modified by any means other than the iterator's own `remove()` method after the iterator has been created.

Safety notes: When designing custom iterators, especially for mutable collections, consider the implications of concurrent modifications. If your application is multi-threaded, ensuring thread safety for both the aggregate and the iterator is crucial. You might need to synchronize access to the collection during iteration or use concurrent collection types from `java.util.concurrent`. If your iterator allows `remove()` operations, ensure that the underlying collection handles these removals correctly and that the iterator's internal state (e.g., current index) is updated appropriately. Always strive to make iterators as simple and focused as possible, delegating complex data manipulation to the aggregate itself. The Iterator pattern is invaluable for creating flexible and maintainable code when dealing with diverse data structures.

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

// Aggregate Interface
interface BookCollection {
    Iterator<Book> createIterator();
}

// Book class (element)
class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public String toString() {
        return "'" + title + "' by " + author;
    }
}

// Concrete Aggregate: Library (implements Iterable for enhanced for-loop compatibility)
class Library implements BookCollection, Iterable<Book> {
    private List<Book> books;

    public Library() {
        this.books = new ArrayList<>();
    }

    public void addBook(Book book) {
        books.add(book);
    }

    @Override
    public Iterator<Book> createIterator() {
        return new LibraryIterator(this);
    }

    @Override // Implementing Iterable allows using enhanced for-loop
    public Iterator<Book> iterator() {
        return createIterator();
    }

    // Method to get a book by index (for the iterator to access)
    public Book getBook(int index) {
        return books.get(index);
    }

    // Method to get the number of books (for the iterator to know bounds)
    public int getNumberOfBooks() {
        return books.size();
    }
}

// Concrete Iterator: LibraryIterator
class LibraryIterator implements Iterator<Book> {
    private Library library;
    private int position = 0;

    public LibraryIterator(Library library) {
        this.library = library;
    }

    @Override
    public boolean hasNext() {
        return position < library.getNumberOfBooks();
    }

    @Override
    public Book next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        Book book = library.getBook(position);
        position++;
        return book;
    }

    @Override
    public void remove() {
        // Optional: Implement removal logic. For simplicity, we'll just throw UnsupportedOperationException
        // In a real scenario, this would remove the book at the current position from the library.
        throw new UnsupportedOperationException("Remove operation is not supported by this iterator.");
    }
}

public class IteratorPatternDemo {
    public static void main(String[] args) {
        Library myLibrary = new Library();
        myLibrary.addBook(new Book("The Lord of the Rings", "J.R.R. Tolkien"));
        myLibrary.addBook(new Book("Pride and Prejudice", "Jane Austen"));
        myLibrary.addBook(new Book("1984", "George Orwell"));
        myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));

        System.out.println("--- Traversing library using custom iterator ---");
        Iterator<Book> libraryIterator = myLibrary.createIterator();
        while (libraryIterator.hasNext()) {
            Book book = libraryIterator.next();
            System.out.println("Reading: " + book);
        }

        System.out.println("\n--- Traversing library using enhanced for-loop (Java's built-in Iterator) ---");
        for (Book book : myLibrary) { // Works because Library implements Iterable
            System.out.println("Reading: " + book);
        }

        System.out.println("\n--- Demonstrating NoSuchElementException ---");
        Iterator<Book> emptyIterator = new LibraryIterator(new Library()); // Iterator for an empty library
        try {
            emptyIterator.next(); // This will throw NoSuchElementException
        } catch (NoSuchElementException e) {
            System.out.println("Caught expected exception: " + e.getMessage());
        }
    }
}
```

#### Key concepts
*   **Iterator Pattern:** A behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
*   **Iterator Interface:** Declares methods for traversing and accessing elements (e.g., `hasNext()`, `next()`, `remove()`).
*   **Concrete Iterator:** Implements the Iterator interface and maintains the current position in the traversal of a specific aggregate.
*   **Aggregate Interface:** Declares a method for creating an Iterator object (`createIterator()` or `iterator()`).
*   **Concrete Aggregate:** Implements the Aggregate interface and returns an instance of a Concrete Iterator suitable for traversing its elements.
*   **Decoupling:** Separates the traversal logic from the collection itself, allowing for independent changes to both.
*   **`java.util.Iterator` and `java.lang.Iterable`:** Java's built-in interfaces that embody the Iterator pattern, enabling the enhanced for-loop.

#### Hands-on activity
**Scenario:** You are managing a list of `Employee` objects in a custom data structure called `EmployeeDirectory` (which is essentially an array internally). You need to provide a way to iterate over these employees without exposing the internal array.

**Instructions:**
1.  Create a simple `Employee` class with `name` and `id` properties.
2.  Define an `EmployeeDirectory` class that internally uses a `Employee[]` array to store employees. It should have a method `addEmployee(Employee employee)`.
3.  Implement the `Iterable<Employee>` interface on `EmployeeDirectory`.
4.  Create a custom `EmployeeIterator` class that implements `Iterator<Employee>` and can traverse the `EmployeeDirectory`.
5.  In a `main` method, create an `EmployeeDirectory`, add a few employees, and then iterate over them using both your custom iterator explicitly and Java's enhanced for-loop.

**Code Template:**
```java
import java.util.Iterator;
import java.util.NoSuchElementException;

// 1. Employee class
class Employee {
    private String name;
    private String id;

    public Employee(String name, String id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Employee [ID: " + id + ", Name: " + name + "]";
    }
}

// 2. EmployeeDirectory (Concrete Aggregate)
class EmployeeDirectory implements Iterable<Employee> {
    private Employee[] employees;
    private int count;
    private static final int MAX_EMPLOYEES = 10;

    public EmployeeDirectory() {
        employees = new Employee[MAX_EMPLOYEES];
        count = 0;
    }

    public void addEmployee(Employee employee) {
        if (count < MAX_EMPLOYEES) {
            employees[count++] = employee;
        } else {
            System.out.println("Employee directory is full. Cannot add " + employee.getName());
        }
    }

    public Employee getEmployee(int index) {
        if (index >= 0 && index < count) {
            return employees[index];
        }
        return null;
    }

    public int getEmployeeCount() {
        return count;
    }

    @Override
    public Iterator<Employee> iterator() {
        return new EmployeeIterator(this);
    }
}

// 4. Custom EmployeeIterator (Concrete Iterator)
class EmployeeIterator implements Iterator<Employee> {
    private EmployeeDirectory directory;
    private int position = 0;

    public EmployeeIterator(EmployeeDirectory directory) {
        this.directory = directory;
    }

    @Override
    public boolean hasNext() {
        return position < directory.getEmployeeCount();
    }

    @Override
    public Employee next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        Employee employee = directory.getEmployee(position);
        position++;
        return employee;
    }

    @Override
    public void remove() {
        // For simplicity, we'll throw UnsupportedOperationException
        throw new UnsupportedOperationException("Employee removal not supported by this iterator.");
    }
}

public class EmployeeIteratorDemo {
    public static void main(String[] args) {
        EmployeeDirectory directory = new EmployeeDirectory();
        directory.addEmployee(new Employee("Alice Smith", "E001"));
        directory.addEmployee(new Employee("Bob Johnson", "E002"));
        directory.addEmployee(new Employee("Charlie Brown", "E003"));

        System.out.println("--- Iterating using custom EmployeeIterator ---");
        Iterator<Employee> iterator = directory.iterator();
        while (iterator.hasNext()) {
            Employee emp = iterator.next();
            System.out.println(emp);
        }

        System.out.println("\n--- Iterating using enhanced for-loop ---");
        for (Employee emp : directory) {
            System.out.println(emp);
        }

        // TODO: Add more employees to test the MAX_EMPLOYEES limit and observe behavior.
    }
}
```

#### Assessment idea
1.  **Question:** You have a custom `Playlist` data structure that stores songs in a `LinkedList`. You want to provide a way for a music player to iterate through songs in both forward and reverse order. How can the Iterator pattern help achieve this without exposing the `LinkedList`'s internal implementation to the music player?
    **Correct Answer:** The Iterator pattern is perfectly suited for this.
    *   **Implementation:** The `Playlist` class (Aggregate) would not expose its internal `LinkedList`. Instead, it would provide two `createIterator()` methods (or a single method that takes a traversal direction parameter): one for `ForwardPlaylistIterator` and one for `ReversePlaylistIterator`.
    *   **Iterators:** Each concrete iterator (`ForwardPlaylistIterator` and `ReversePlaylistIterator`) would implement the `Iterator<Song>` interface. The `ForwardPlaylistIterator` would traverse the `LinkedList` from head to tail, while the `ReversePlaylistIterator` would traverse from tail to head (or use `ListIterator`'s capabilities).
    *   **Benefits:** The music player (Client) would only interact with the generic `Iterator<Song>` interface. It wouldn't need to know that `Playlist` uses a `LinkedList` or how the forward/reverse traversal is implemented. This keeps the `Playlist`'s internal structure private and allows flexible traversal strategies to be added or changed independently.

2.  **Question:** Explain the concept of "fail-fast" iterators in Java and why it's an important safety mechanism when working with collections.
    **Correct Answer:** "Fail-fast" iterators are a feature of many iterators in the Java Collections Framework (e.g., those returned by `ArrayList`, `HashMap`).
    *   **Concept:** A fail-fast iterator detects if the underlying collection has been structurally modified by any means other than the iterator's own `remove()` method after the iterator was created. If such a modification is detected, the iterator immediately throws a `ConcurrentModificationException`.
    *   **Why it's important:**
        1.  **Data Inconsistency Prevention:** It prevents client code from operating on an inconsistent or corrupted view of the collection. If modifications were allowed silently, the iteration might produce incorrect results or lead to unpredictable behavior.
        2.  **Early Error Detection:** By failing fast, it helps developers quickly identify and fix concurrency bugs or incorrect modification logic during development, rather than encountering subtle, hard-to-debug issues later.
        3.  **Safety in Multi-threading:** While not a solution for full thread safety, it acts as an important guardrail in multi-threaded environments, alerting developers to potential race conditions if a collection is modified by one thread while another is iterating over it without proper synchronization.

#### AI generation note
Design a 9-minute interactive lab walkthrough. Start by showing the problem of iterating over a custom `Book[]` array directly. Then, guide the learner through implementing the `BookCollection` (Aggregate) and `LibraryIterator` (Concrete Iterator) step-by-step in an online IDE. Demonstrate how to use the custom iterator. Next, modify `BookCollection` to implement `Iterable<Book>` and show how the enhanced for-loop now works. Highlight the `NoSuchElementException` with a small code snippet. Include a mini-quiz question about the benefits of decoupling traversal logic at the end. Use side-by-side code and console output.
---

### Chapter 5.5 — The Template Method Pattern: Defining Algorithm Skeletons

#### Learning objectives
*   Understand the core principle of the Template Method pattern: defining the skeleton of an algorithm in an operation, deferring some steps to subclasses.
*   Implement the Template Method pattern in Java using abstract classes and concrete methods, ensuring a consistent algorithm structure while allowing for variation.
*   Analyze scenarios where the Template Method pattern is particularly useful, such as in frameworks, build processes, or data processing pipelines.
*   Identify common mistakes, such as making too many steps abstract or violating the Liskov Substitution Principle, and discuss best practices for designing template methods.

#### Detailed lesson content
Our final behavioral pattern for this module is the Template Method pattern, a powerful technique for defining the skeleton of an algorithm in a base class, while allowing subclasses to override specific steps of the algorithm without changing its overall structure. Imagine you're building a system for generating various types of reports (e.g., PDF reports, HTML reports, CSV reports). While each report type has unique formatting, they all follow a similar sequence of steps: fetch data, process data, format header, format body, format footer, and save report. Without the Template Method pattern, you might end up with duplicated code across different report generation classes, or a complex inheritance hierarchy that's difficult to manage.

The Template Method pattern addresses this by defining an abstract base class (the **Abstract Class**) that contains the **template method** – a method that defines the overall algorithm structure. This template method calls a series of other methods, some of which are abstract (to be implemented by subclasses) and some are concrete (providing default or invariant behavior). The abstract methods are often referred to as "primitive operations" or "hooks." The **Concrete Classes** (subclasses) then implement these abstract primitive operations, providing their specific variations for each step of the algorithm.

Let's break down the components. The **Abstract Class** contains the template method. This method is usually `final` to prevent subclasses from altering the algorithm's structure. Inside the template method, it calls other methods that represent the steps of the algorithm. Some of these steps are defined as `abstract` methods within the Abstract Class, forcing subclasses to provide their own implementation. Other steps might be concrete methods with default implementations, or "hook" methods (empty or default implementations) that subclasses can optionally override to inject custom behavior at specific points without being forced to. For our report example, `AbstractReportGenerator` would be the Abstract Class, with a `final generateReport()` template method. Inside `generateReport()`, it would call `fetchData()`, `processData()`, `formatHeader()`, `formatBody()`, `formatFooter()`, and `saveReport()`. Some of these, like `formatHeader()` and `formatBody()` would be abstract.

The **Concrete Classes** extend the Abstract Class and provide concrete implementations for the abstract primitive operations. They can also override hook methods if needed. For instance, `PdfReportGenerator` and `HtmlReportGenerator` would be Concrete Classes. `PdfReportGenerator` would implement `formatHeader()` to generate PDF-specific headers, and `HtmlReportGenerator` would implement it for HTML. Crucially, neither of these concrete classes can change the *order* of operations defined in `generateReport()`; they can only change *how* individual steps are performed.

A key benefit of the Template Method pattern is code reuse and consistency. The invariant parts of the algorithm are implemented once in the abstract base class, reducing duplication. It also enforces a consistent structure for the algorithm, making it easier to understand and maintain. This pattern is widely used in frameworks, where the framework defines the overall flow (the template method), and developers extend the framework by providing concrete implementations for specific steps (the primitive operations). Examples include `HttpServlet` in Java EE, where `doGet()`, `doPost()`, etc., are hook methods called by the servlet container's template method.

Common mistakes include making the template method itself non-final, allowing subclasses to inadvertently or intentionally alter the algorithm's structure, which defeats the purpose of the pattern. Another pitfall is making too many steps abstract, forcing subclasses to implement a large number of methods, which can lead to "interface bloat" and make the pattern less useful. Conversely, making too few steps abstract might limit the flexibility for subclasses. It's a balance. Developers should also ensure that the primitive operations are genuinely independent enough to be varied by subclasses without breaking the overall algorithm's integrity. Violating the Liskov Substitution Principle (LSP) by having a subclass's implementation of a primitive operation behave unexpectedly is another serious error.

Safety notes: When designing your template method, carefully consider what steps are truly invariant and what steps should be left to subclasses. Ensure that the default implementations of hook methods are safe and sensible. If primitive operations involve resource access or I/O, ensure proper error handling and resource cleanup within those methods, or provide hooks for subclasses to implement their own error handling. In multi-threaded environments, if the template method or its primitive operations access shared state, proper synchronization is necessary. The Template Method pattern is a powerful way to manage complex algorithms with varying parts, promoting a clear separation between the overall flow and specific implementations.

```java
// Abstract Class: CoffeeOrTea
abstract class BeverageMaker {

    // The template method - defines the skeleton of the algorithm
    // Made final to prevent subclasses from changing the algorithm structure
    public final void prepareBeverage() {
        boilWater();
        brew();
        pourInCup();
        addCondiments(); // This is a hook method, subclasses can override
    }

    // Primitive operations (abstract methods) - must be implemented by subclasses
    protected abstract void brew();
    protected abstract void addCondiments();

    // Concrete methods - implemented in the abstract class, common to all
    private void boilWater() {
        System.out.println("Boiling water");
    }

    private void pourInCup() {
        System.out.println("Pouring into cup");
    }

    // Hook method - subclasses can override but don't have to
    // Provides a default (empty) implementation
    protected boolean customerWantsCondiments() {
        return true; // Default: customer wants condiments
    }
}

// Concrete Class: Coffee
class Coffee extends BeverageMaker {
    @Override
    protected void brew() {
        System.out.println("Dripping coffee through filter");
    }

    @Override
    protected void addCondiments() {
        System.out.println("Adding sugar and milk");
    }

    // Coffee drinkers might not always want condiments, let's say sometimes
    @Override
    protected boolean customerWantsCondiments() {
        // Simulate user input or preference
        return true; // For demo, always add
    }
}

// Concrete Class: Tea
class Tea extends BeverageMaker {
    @Override
    protected void brew() {
        System.out.println("Steeping the tea bag in hot water");
    }

    @Override
    protected void addCondiments() {
        System.out.println("Adding lemon");
    }
}

public class TemplateMethodPatternDemo {
    public static void main(String[] args) {
        System.out.println("--- Preparing Coffee ---");
        BeverageMaker coffeeMaker = new Coffee();
        coffeeMaker.prepareBeverage();

        System.out.println("\n--- Preparing Tea ---");
        BeverageMaker teaMaker = new Tea();
        teaMaker.prepareBeverage();
    }
}
```

#### Key concepts
*   **Template Method Pattern:** A behavioral design pattern that defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
*   **Abstract Class:** The base class that contains the template method. It defines the overall algorithm and declares abstract primitive operations that subclasses must implement.
*   **Template Method:** A `final` method in the Abstract Class that defines the sequence of steps for an algorithm. It calls concrete methods, abstract methods, and optionally hook methods.
*   **Primitive Operations:** Abstract methods declared in the Abstract Class that must be implemented by Concrete Classes. These are the varying steps of the algorithm.
*   **Hook Methods:** Methods in the Abstract Class that provide a default (often empty) implementation. Subclasses can override these methods to inject optional behavior at specific points in the algorithm without being forced to.
*   **Concrete Class:** A subclass that extends the Abstract Class and implements the primitive operations, providing specific variations for the algorithm steps.
*   **Inversion of Control:** The Abstract Class (framework) controls the flow of the algorithm, calling subclass-specific implementations at appropriate times.

#### Hands-on activity
**Scenario:** You are developing a system for building different types of houses. While all houses follow a general construction process (lay foundation, build walls, add roof, install windows, paint), the specifics of each step vary for a "Wooden House" versus a "Brick House".

**Instructions:**
1.  Create an `AbstractHouseBuilder` abstract class.
2.  Define a `final buildHouse()` template method in `AbstractHouseBuilder` that calls the following steps in order: `layFoundation()`, `buildWalls()`, `addRoof()`, `installWindows()`, `paintHouse()`.
3.  Make `buildWalls()`, `addRoof()`, and `paintHouse()` abstract methods.
4.  Provide concrete implementations for `layFoundation()` and `installWindows()` in `AbstractHouseBuilder` as they are mostly common.
5.  Create two concrete classes: `WoodenHouseBuilder` and `BrickHouseBuilder`. Each should extend `AbstractHouseBuilder` and provide specific implementations for the abstract methods (e.g., "Building wooden walls" vs. "Building brick walls").
6.  In a `main` method, demonstrate building both a wooden house and a brick house using their respective builders.

**Code Template:**
```java
// 1. Abstract Class: AbstractHouseBuilder
abstract class AbstractHouseBuilder {

    // 2. The template method - defines the overall construction process
    public final void buildHouse() {
        layFoundation();
        buildWalls();
        addRoof();
        installWindows();
        paintHouse();
        System.out.println("House construction complete!");
    }

    // 3. Abstract primitive operations - must be implemented by subclasses
    protected abstract void buildWalls();
    protected abstract void addRoof();
    protected abstract void paintHouse();

    // 4. Concrete methods - common steps implemented in the abstract class
    private void layFoundation() {
        System.out.println("Laying concrete foundation with steel reinforcement.");
    }

    private void installWindows() {
        System.out.println("Installing standard double-pane windows.");
    }

    // Optional hook method (not used in this example, but good to remember)
    // protected void customLandscaping() { /* default empty */ }
}

// 5. Concrete Class: WoodenHouseBuilder
class WoodenHouseBuilder extends AbstractHouseBuilder {
    @Override
    protected void buildWalls() {
        System.out.println("Building wooden walls with timber frames.");
    }

    @Override
    protected void addRoof() {
        System.out.println("Adding a gabled roof with cedar shingles.");
    }

    @Override
    protected void paintHouse() {
        System.out.println("Painting the wooden house with a natural wood stain.");
    }
}

// 5. Concrete Class: BrickHouseBuilder
class BrickHouseBuilder extends AbstractHouseBuilder {
    @Override
    protected void buildWalls() {
        System.out.println("Building brick walls with mortar.");
    }

    @Override
    protected void addRoof() {
        System.out.println("Adding a flat roof with asphalt roofing.");
    }

    @Override
    protected void paintHouse() {
        System.out.println("Applying weather-resistant paint to the brick house.");
    }
}

public class HouseBuilderDemo {
    public static void main(String[] args) {
        System.out.println("--- Building a Wooden House ---");
        AbstractHouseBuilder woodenHouse = new WoodenHouseBuilder();
        woodenHouse.buildHouse();

        System.out.println("\n--- Building a Brick House ---");
        AbstractHouseBuilder brickHouse = new BrickHouseBuilder();
        brickHouse.buildHouse();

        // TODO: Create a "GlassHouseBuilder" that overrides all abstract methods with glass-specific steps.
    }
}
```

#### Assessment idea
1.  **Question:** You are developing a data processing application where data needs to be extracted from various sources (e.g., CSV, XML, Database), transformed, and then loaded into a target system. The extraction, transformation, and loading steps have a fixed order, but the specific implementation of each step varies by data source. Which design pattern is best suited for this scenario, and how would you structure the classes?
    **Correct Answer:** The Template Method pattern is ideal for this scenario.
    *   **Structure:**
        *   **Abstract Class:** `AbstractETLProcess` would define the `final` template method `runETL()` which calls `extractData()`, `transformData()`, and `loadData()` in sequence.
        *   **Primitive Operations:** `extractData()`, `transformData()`, and `loadData()` would be `abstract` methods within `AbstractETLProcess`.
        *   **Concrete Classes:** `CsvETLProcess`, `XmlETLProcess`, and `DatabaseETLProcess` would extend `AbstractETLProcess` and provide concrete implementations for `extractData()`, `transformData()`, and `loadData()` specific to their respective data sources.
    *   **Benefit:** This ensures that all ETL processes follow the same overall structure (extract, transform, load) while allowing for flexible, source-specific implementations of each step.

2.  **Question:** Explain the purpose of making the template method `final` in the abstract class and describe what a "hook method" is within the context of the Template Method pattern.
    **Correct Answer:**
    *   **`final` template method purpose:** Making the template method `final` prevents subclasses from overriding it. This is crucial because the template method defines the invariant skeleton or overall structure of the algorithm. If subclasses could override it, they could change the order of steps or omit critical steps, thereby breaking the algorithm's contract and consistency. The `final` keyword ensures that the algorithm's core flow remains consistent across all concrete implementations.
    *   **Hook method:** A hook method is a method declared in the abstract class (the base class of the Template Method pattern) that typically has an empty or default implementation. Unlike abstract primitive operations, subclasses are *not required* to override hook methods. They are provided as optional "hooks" or extension points where subclasses can inject custom behavior at specific points in the algorithm if needed, without altering the main flow. For example, a `postProcess()` hook method might be called at the end of an algorithm, allowing subclasses to add extra logging or cleanup if desired, but without forcing them to do so.

#### AI generation note
Create a 10-minute animated video with live coding segments. Start with an animation illustrating the common steps of making coffee vs. tea, highlighting the shared and differing parts. Transition to the `BeverageMaker` abstract class code, explaining the `final prepareBeverage()` template method and its calls to abstract and concrete steps. Then, show the `Coffee` and `Tea` concrete classes implementing the abstract methods. Use a split-screen view to show the code and an animated flow diagram of the `prepareBeverage` method executing, with different steps lighting up as they are called. Include a specific example of how a hook method (`customerWantsCondiments`) could be used. End with a 2-question interactive quiz on identifying the components of the Template Method pattern.
---

## Module 6: Behavioral Patterns: Object Interactions & Responsibilities (Part 2)
**Module Goal:** To deepen understanding of behavioral design patterns, enabling learners to design flexible and maintainable Java applications by mastering patterns that manage object communication, state, and algorithmic variations.

---
### Chapter 6.1 — The Iterator Pattern: Traversing Collections Gracefully

#### Learning objectives
*   Understand the purpose and benefits of the Iterator pattern for collection traversal.
*   Implement the Iterator pattern in Java to provide a standard way to access elements of an aggregate object sequentially without exposing its underlying representation.
*   Differentiate between internal and external iterators and know when to use each.
*   Identify common scenarios where the Iterator pattern simplifies code and improves maintainability.

#### Detailed lesson content
The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. In Java, you're likely already familiar with iterators through the `java.util.Iterator` interface and the enhanced for-loop, which internally uses an iterator. However, understanding the pattern itself allows you to create custom iterators for your own complex data structures, offering clients a consistent way to traverse them. This pattern is crucial for decoupling the traversal logic from the collection itself, promoting flexibility and reusability. Without it, every client needing to traverse a collection would need to know its internal structure (e.g., whether it's an array, a linked list, or a hash map), leading to tightly coupled and fragile code.

Consider a custom collection, perhaps a `BookShelf` that stores books in a specific order, or a `Playlist` that manages songs. If we expose the internal `ArrayList` or `LinkedList` directly, clients could accidentally modify the collection while iterating, or they would be forced to write specific traversal logic for `BookShelf` that might differ from `Playlist`. The Iterator pattern abstracts this traversal, providing a simple `hasNext()` and `next()` interface. This means the client code remains unchanged regardless of how the collection stores its elements. This separation of concerns is a cornerstone of good software design.

Let's illustrate with a simple `BookShelf` example. Imagine a `BookShelf` that stores books in an array. Without an iterator, a client might access books by index, like `bookShelf.getBook(i)`. This exposes the array-like nature. With an Iterator, the client simply asks the `BookShelf` for an iterator and then uses `hasNext()` and `next()` to get books.

A common mistake when implementing custom iterators is to forget about concurrent modification issues. If the underlying collection is modified (e.g., an element is added or removed) while an iterator is active, it can lead to `ConcurrentModificationException` in Java. Standard library collections often implement fail-fast iterators to detect this. When designing your own aggregate and iterator, you must decide how to handle such scenarios: either disallow modifications during iteration, provide a mechanism for safe concurrent modification (which is complex), or make your iterator "fail-fast" by checking for modifications. For simpler custom collections, a common approach is to make the iterator an inner class of the aggregate, giving it direct access to the aggregate's state and allowing it to track modifications.

Another important aspect is the distinction between internal and external iterators. An external iterator (like Java's `Iterator` interface) gives the client control over the iteration process; the client explicitly calls `hasNext()` and `next()`. An internal iterator, on the other hand, takes a function or callback and applies it to each element, with the iteration logic entirely encapsulated within the aggregate. Java 8 streams and the `forEach` method are examples of internal iteration. While external iterators offer more flexibility for complex traversal logic, internal iterators are often simpler for common operations and can be more performant as they avoid the overhead of repeated method calls from the client. Choosing between them depends on the specific requirements for client control versus simplicity.

The Iterator pattern also plays a vital role in adhering to the Single Responsibility Principle. The collection's responsibility is to manage its elements, while the iterator's responsibility is solely to traverse them. This clear separation makes both components easier to understand, test, and maintain. For instance, if you later decide to change the internal storage of your `BookShelf` from an array to a `LinkedList`, only the `BookShelf` and its internal iterator implementation need to change; client code using the `Iterator` interface remains completely unaffected. This level of abstraction is incredibly powerful for building robust and adaptable software systems.

```java
// 1. Define the Iterator interface
interface BookIterator {
    boolean hasNext();
    Book next();
}

// 2. Define the Aggregate interface
interface BookShelfAggregate {
    BookIterator createIterator();
}

// 3. Define the Book class
class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public String toString() {
        return "Book [title=" + title + ", author=" + author + "]";
    }
}

// 4. Implement the Concrete Aggregate
class ConcreteBookShelf implements BookShelfAggregate {
    private Book[] books;
    private int lastAdded = 0;

    public ConcreteBookShelf(int maxSize) {
        this.books = new Book[maxSize];
    }

    public Book getBookAt(int index) {
        return books[index];
    }

    public void addBook(Book book) {
        if (lastAdded < books.length) {
            this.books[lastAdded] = book;
            lastAdded++;
        } else {
            System.out.println("BookShelf is full, cannot add " + book.getTitle());
        }
    }

    public int getLength() {
        return lastAdded;
    }

    @Override
    public BookIterator createIterator() {
        return new BookShelfIterator(this);
    }

    // 5. Implement the Concrete Iterator as an inner class for convenience
    private class BookShelfIterator implements BookIterator {
        private ConcreteBookShelf bookShelf;
        private int index;

        public BookShelfIterator(ConcreteBookShelf bookShelf) {
            this.bookShelf = bookShelf;
            this.index = 0;
        }

        @Override
        public boolean hasNext() {
            return index < bookShelf.getLength();
        }

        @Override
        public Book next() {
            if (!hasNext()) {
                throw new java.util.NoSuchElementException("No more books on the shelf.");
            }
            Book book = bookShelf.getBookAt(index);
            index++;
            return book;
        }
    }
}

// Client Usage
public class IteratorPatternDemo {
    public static void main(String[] args) {
        ConcreteBookShelf bookShelf = new ConcreteBookShelf(4);
        bookShelf.addBook(new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams"));
        bookShelf.addBook(new Book("1984", "George Orwell"));
        bookShelf.addBook(new Book("Brave New World", "Aldous Huxley"));
        bookShelf.addBook(new Book("The Lord of the Rings", "J.R.R. Tolkien"));
        bookShelf.addBook(new Book("Dune", "Frank Herbert")); // This won't be added

        BookIterator it = bookShelf.createIterator();

        System.out.println("Iterating through the book shelf:");
        while (it.hasNext()) {
            Book book = it.next();
            System.out.println(book.getTitle());
        }

        // Java's built-in Iterator and enhanced for-loop example for comparison
        // For a custom collection to work with enhanced for-loop, it must implement Iterable<T>
        // and its iterator() method must return an instance of java.util.Iterator<T>.
        // This is essentially the Iterator pattern, but using Java's standard interfaces.
        System.out.println("\nUsing Java's built-in Iterator (if ConcreteBookShelf implemented Iterable):");
        // For demonstration, let's assume ConcreteBookShelf implements Iterable<Book> and its iterator() method
        // returns an instance of java.util.Iterator<Book> (similar to our BookShelfIterator).
        // If ConcreteBookShelf were Iterable, we could do:
        // for (Book book : bookShelf) {
        //     System.out.println(book.getTitle());
        // }
    }
}
```

#### Key concepts
*   **Iterator Pattern:** A behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
*   **Aggregate:** An object that stores a collection of other objects (e.g., `ConcreteBookShelf`). It provides an interface for creating an `Iterator`.
*   **Iterator:** An interface (or abstract class) that declares methods for accessing and traversing elements (e.g., `hasNext()`, `next()`).
*   **Concrete Iterator:** An implementation of the Iterator interface that keeps track of the current position in the traversal of the aggregate.
*   **Concrete Aggregate:** An implementation of the Aggregate interface that returns an appropriate `Concrete Iterator` instance.
*   **Internal Iterator:** An iterator where the traversal logic is entirely controlled by the aggregate, often taking a callback function.
*   **External Iterator:** An iterator where the client controls the traversal process by explicitly calling `hasNext()` and `next()`.

#### Hands-on activity
**Task:** Implement a custom `Playlist` aggregate and a `SongIterator` for it. The `Playlist` should store `Song` objects in a `java.util.LinkedList`. Your iterator should traverse the songs.

**Instructions:**
1.  Create a `Song` class with `title` and `artist` properties.
2.  Define `SongIterator` and `PlaylistAggregate` interfaces similar to the `BookIterator` and `BookShelfAggregate`.
3.  Implement a `ConcretePlaylist` class that uses a `LinkedList<Song>` internally and implements `PlaylistAggregate`.
4.  Implement a `PlaylistIterator` as an inner class within `ConcretePlaylist` that traverses the `LinkedList`.
5.  In a `main` method, create a `ConcretePlaylist`, add a few `Song` objects, and then use your `PlaylistIterator` to print all songs.

**Starter Code:**
```java
// Song.java
class Song {
    private String title;
    private String artist;

    public Song(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public String getTitle() { return title; }
    public String getArtist() { return artist; }

    @Override
    public String toString() {
        return "Song [title=" + title + ", artist=" + artist + "]";
    }
}

// SongIterator.java
interface SongIterator {
    boolean hasNext();
    Song next();
}

// PlaylistAggregate.java
interface PlaylistAggregate {
    SongIterator createIterator();
    void addSong(Song song);
}

// ConcretePlaylist.java (You need to complete this)
import java.util.LinkedList;
import java.util.NoSuchElementException;

class ConcretePlaylist implements PlaylistAggregate {
    private LinkedList<Song> songs;

    public ConcretePlaylist() {
        this.songs = new LinkedList<>();
    }

    @Override
    public SongIterator createIterator() {
        return new PlaylistIterator();
    }

    @Override
    public void addSong(Song song) {
        this.songs.add(song);
    }

    // Inner class PlaylistIterator (You need to complete this)
    private class PlaylistIterator implements SongIterator {
        private int index;

        public PlaylistIterator() {
            this.index = 0;
        }

        @Override
        public boolean hasNext() {
            return index < songs.size();
        }

        @Override
        public Song next() {
            if (!hasNext()) {
                throw new NoSuchElementException("No more songs in the playlist.");
            }
            return songs.get(index++);
        }
    }
}

// Main.java
public class PlaylistDemo {
    public static void main(String[] args) {
        ConcretePlaylist myPlaylist = new ConcretePlaylist();
        myPlaylist.addSong(new Song("Bohemian Rhapsody", "Queen"));
        myPlaylist.addSong(new Song("Stairway to Heaven", "Led Zeppelin"));
        myPlaylist.addSong(new Song("Hotel California", "Eagles"));

        SongIterator iterator = myPlaylist.createIterator();
        System.out.println("My Playlist:");
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

#### Assessment idea
1.  **Question:** You have a custom `BinaryTree` class that stores `Node` objects. You want to provide a way for clients to traverse the tree in pre-order, in-order, and post-order without exposing the tree's internal node structure. Which design pattern would you use, and how would you structure the core interfaces and classes?
    **Answer:** The Iterator pattern is the most suitable. You would define a `TreeIterator` interface with `hasNext()` and `next()` methods. The `BinaryTree` class would implement a `TreeAggregate` interface, which has a `createIterator(TraversalType type)` method. This method would return different concrete iterator implementations (e.g., `PreOrderIterator`, `InOrderIterator`, `PostOrderIterator`) based on the `TraversalType` enum passed. Each concrete iterator would encapsulate the specific traversal logic for its respective order, allowing clients to traverse the tree without knowing its recursive structure.

2.  **Question:** What is a potential pitfall when implementing a custom external iterator for a mutable collection, and how can Java's standard library iterators often mitigate this?
    **Answer:** A potential pitfall is the `ConcurrentModificationException`. If the underlying collection is modified (elements added, removed, or structure changed) while an external iterator is actively traversing it, the iterator's internal state (like the current index) can become invalid, leading to incorrect results or runtime errors. Java's standard library iterators (like those returned by `ArrayList.iterator()`) are often "fail-fast." This means they maintain a `modCount` (modification count) of the collection and throw a `ConcurrentModificationException` immediately if they detect that the `modCount` has changed unexpectedly since the iterator was created, thus quickly alerting the developer to a potential issue rather than allowing corrupted data or unpredictable behavior.

#### AI generation note
Create a 12-minute interactive coding video. Begin by explaining the problem of tightly coupled collection traversal. Then, live-code the `Book` and `ConcreteBookShelf` classes, demonstrating how to implement `BookIterator` and `BookShelfAggregate`. Show the client code using the custom iterator. Highlight the `NoSuchElementException` for safe iteration. Include a split-screen view of the Java code in an IDE and the terminal output. Conclude with a 2-question interactive quiz on the benefits of the Iterator pattern and concurrent modification issues. Ensure captions and high-contrast visuals.

---
### Chapter 6.2 — The Mediator Pattern: Centralizing Communication

#### Learning objectives
*   Understand the problem of complex, direct communication between many objects and how the Mediator pattern solves it.
*   Implement the Mediator pattern in Java to centralize communication logic between a set of related objects (colleagues).
*   Identify scenarios where the Mediator pattern improves system maintainability by reducing coupling.
*   Distinguish between direct object communication and mediator-based communication, evaluating their trade-offs.

#### Detailed lesson content
In complex systems, objects often need to interact with many other objects. Without a structured approach, this can lead to a "spaghetti code" scenario where every object has direct references to, and knowledge of, many other objects. This creates tight coupling, making the system difficult to understand, maintain, and extend. Changes in one object might necessitate changes in many others, leading to a ripple effect of modifications. The Mediator pattern addresses this by introducing a central object, the "mediator," that encapsulates how a set of objects interact. Instead of objects communicating directly with each other, they communicate only with the mediator, and the mediator then handles the routing and coordination of messages to other relevant objects.

Think of an air traffic control tower: planes (objects) don't communicate directly with each other to avoid collisions. Instead, they communicate with the air traffic controller (the mediator), who then coordinates their movements and relays necessary information. This centralizes the complex logic of air traffic management, making it easier to manage and change. If a new type of plane is introduced, only the controller needs to know how to interact with it, not every other plane. Similarly, in software, the Mediator pattern ensures that objects (often called "colleagues") don't know about each other; they only know about their mediator. This significantly reduces the dependencies between colleagues, promoting loose coupling.

Implementing the Mediator pattern typically involves defining an interface for the mediator (e.g., `ChatMediator`), concrete mediator implementations (e.g., `ChatRoom`), and an abstract `Colleague` class or interface (e.g., `User`) that holds a reference to its mediator. Concrete `Colleague` implementations (e.g., `ChatUser`) then communicate with the mediator when their state changes or they need to interact with other colleagues. The mediator, in turn, knows all its colleagues and orchestrates their interactions. This means the mediator itself can become complex, as it centralizes all the interaction logic. However, this complexity is contained within one component, rather than being spread across many, which is generally easier to manage.

A common mistake is to make the mediator too powerful or too generic, turning it into a "god object." If the mediator becomes responsible for too many unrelated interactions or grows excessively large, it can become a bottleneck and a single point of failure. It's crucial to ensure the mediator's responsibility is focused on coordinating a specific set of related colleagues. If interactions become too diverse, it might be a sign that multiple, smaller mediators are needed, or that the system needs to be broken down into smaller, more manageable subsystems, each with its own mediator. The goal is to reduce coupling *between* colleagues, not to shift all complexity into one giant component.

Let's consider a practical example: a chat application. Instead of each `User` object knowing about all other `User` objects in a chat room and sending messages directly, a `ChatRoom` (the concrete mediator) can manage all users. When a `User` sends a message, they send it to the `ChatRoom`, which then broadcasts it to all other users or to specific recipients based on the message content. This way, adding new users or changing how messages are routed only requires modifying the `ChatRoom`, not every `User` object. This significantly simplifies the `User` class, making it more focused on its own state and behavior rather than complex interaction logic.

```java
// 1. Mediator Interface
interface ChatMediator {
    void sendMessage(String message, User user);
    void addUser(User user);
}

// 2. Colleague Abstract Class/Interface
abstract class User {
    protected ChatMediator mediator;
    protected String name;

    public User(ChatMediator mediator, String name) {
        this.mediator = mediator;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract void send(String message);
    public abstract void receive(String message);
}

// 3. Concrete Mediator
import java.util.ArrayList;
import java.util.List;

class ChatRoom implements ChatMediator {
    private List<User> users;

    public ChatRoom() {
        this.users = new ArrayList<>();
    }

    @Override
    public void addUser(User user) {
        this.users.add(user);
    }

    @Override
    public void sendMessage(String message, User sender) {
        for (User user : this.users) {
            // Don't send the message back to the sender
            if (user != sender) {
                user.receive(sender.getName() + " says: " + message);
            }
        }
    }
}

// 4. Concrete Colleague
class ChatUser extends User {
    public ChatUser(ChatMediator mediator, String name) {
        super(mediator, name);
    }

    @Override
    public void send(String message) {
        System.out.println(this.name + " sending message: " + message);
        mediator.sendMessage(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println(this.name + " received message: " + message);
    }
}

// Client Usage
public class MediatorPatternDemo {
    public static void main(String[] args) {
        ChatRoom chatRoom = new ChatRoom();

        ChatUser user1 = new ChatUser(chatRoom, "Alice");
        ChatUser user2 = new ChatUser(chatRoom, "Bob");
        ChatUser user3 = new ChatUser(chatRoom, "Charlie");

        chatRoom.addUser(user1);
        chatRoom.addUser(user2);
        chatRoom.addUser(user3);

        user1.send("Hi everyone!");
        user2.send("Hello Alice!");
        user3.send("Good morning!");

        // Without Mediator, user1 would need references to user2 and user3 to send messages directly.
        // With Mediator, user1 only knows the chatRoom.
    }
}
```

#### Key concepts
*   **Mediator Pattern:** A behavioral design pattern that defines an object that encapsulates how a set of objects interact. It promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.
*   **Mediator:** An interface that defines methods for communication between colleague objects.
*   **Concrete Mediator:** An implementation of the `Mediator` interface that coordinates communication between `Colleague` objects. It knows all its colleagues and manages their interactions.
*   **Colleague:** An interface or abstract class for objects that interact with the mediator. They communicate with the mediator instead of directly with each other.
*   **Concrete Colleague:** An implementation of the `Colleague` interface. These objects communicate with their mediator when they need to interact with other colleagues.
*   **Loose Coupling:** A design goal where components have minimal dependencies on each other, making systems easier to modify and maintain.

#### Hands-on activity
**Task:** Implement a `TrafficLightMediator` for a simple intersection simulation. The `TrafficLightMediator` should coordinate `Car` objects and `TrafficLight` objects.

**Instructions:**
1.  Create a `Car` class with a `name` and a reference to the `TrafficLightMediator`. It should have `arriveAtIntersection()` and `proceed()` methods.
2.  Create a `TrafficLight` class with a `color` (e.g., "RED", "GREEN") and a reference to the `TrafficLightMediator`. It should have `changeColor(String newColor)` and `isGreen()` methods.
3.  Define `IntersectionMediator` interface and `CarColleague` and `TrafficLightColleague` abstract classes.
4.  Implement a `ConcreteIntersectionMediator` that manages a `TrafficLight` and multiple `Car` objects. When a car arrives, it notifies the mediator. The mediator checks the traffic light and tells the car whether it can proceed or wait. When the traffic light changes, it also notifies the mediator, which then might signal waiting cars to proceed.

**Starter Code:**
```java
import java.util.ArrayList;
import java.util.List;

// IntersectionMediator.java
interface IntersectionMediator {
    void registerCar(CarColleague car);
    void registerLight(TrafficLightColleague light);
    void carArrived(CarColleague car);
    void lightChanged(TrafficLightColleague light);
}

// Car.java (Colleague)
abstract class CarColleague {
    protected IntersectionMediator mediator;
    protected String name;

    public CarColleague(IntersectionMediator mediator, String name) {
        this.mediator = mediator;
        this.name = name;
    }

    public String getName() { return name; }
    public abstract void arriveAtIntersection();
    public abstract void proceed();
    public abstract void waitAtIntersection();
}

class ConcreteCar extends CarColleague {
    public ConcreteCar(IntersectionMediator mediator, String name) {
        super(mediator, name);
    }

    @Override
    public void arriveAtIntersection() {
        System.out.println(name + " arrived at intersection.");
        mediator.carArrived(this);
    }

    @Override
    public void proceed() {
        System.out.println(name + " is proceeding through the intersection.");
    }

    @Override
    public void waitAtIntersection() {
        System.out.println(name + " is waiting at the intersection.");
    }
}

// TrafficLight.java (Colleague)
abstract class TrafficLightColleague {
    protected IntersectionMediator mediator;
    protected String color;

    public TrafficLightColleague(IntersectionMediator mediator, String initialColor) {
        this.mediator = mediator;
        this.color = initialColor;
    }

    public String getColor() { return color; }
    public boolean isGreen() { return "GREEN".equals(color); }
    public abstract void changeColor(String newColor);
}

class ConcreteTrafficLight extends TrafficLightColleague {
    public ConcreteTrafficLight(IntersectionMediator mediator, String initialColor) {
        super(mediator, initialColor);
    }

    @Override
    public void changeColor(String newColor) {
        System.out.println("Traffic light changed from " + this.color + " to " + newColor + ".");
        this.color = newColor;
        mediator.lightChanged(this);
    }
}

// ConcreteIntersectionMediator.java (You need to complete this)
class ConcreteIntersectionMediator implements IntersectionMediator {
    private TrafficLightColleague trafficLight;
    private List<CarColleague> waitingCars;

    public ConcreteIntersectionMediator() {
        this.waitingCars = new ArrayList<>();
    }

    @Override
    public void registerLight(TrafficLightColleague light) {
        this.trafficLight = light;
    }

    @Override
    public void registerCar(CarColleague car) {
        // Not strictly needed for this simple scenario, but good for mediator to know all colleagues
    }

    @Override
    public void carArrived(CarColleague car) {
        if (trafficLight.isGreen()) {
            car.proceed();
        } else {
            car.waitAtIntersection();
            waitingCars.add(car);
        }
    }

    @Override
    public void lightChanged(TrafficLightColleague light) {
        if (light.isGreen()) {
            System.out.println("Traffic light is GREEN. Signaling waiting cars to proceed.");
            for (CarColleague car : new ArrayList<>(waitingCars)) { // Iterate over a copy to avoid ConcurrentModificationException
                car.proceed();
                waitingCars.remove(car);
            }
        } else {
            System.out.println("Traffic light is RED. Cars should wait.");
        }
    }
}

// Main.java
public class IntersectionDemo {
    public static void main(String[] args) {
        ConcreteIntersectionMediator mediator = new ConcreteIntersectionMediator();
        ConcreteTrafficLight light = new ConcreteTrafficLight(mediator, "RED");
        mediator.registerLight(light);

        ConcreteCar car1 = new ConcreteCar(mediator, "Car A");
        ConcreteCar car2 = new ConcreteCar(mediator, "Car B");

        car1.arriveAtIntersection(); // Should wait
        car2.arriveAtIntersection(); // Should wait

        System.out.println("\nChanging light to GREEN...");
        light.changeColor("GREEN"); // Should allow cars to proceed

        System.out.println("\n--- New car arrives after light change ---");
        ConcreteCar car3 = new ConcreteCar(mediator, "Car C");
        car3.arriveAtIntersection(); // Should proceed immediately
    }
}
```

#### Assessment idea
1.  **Question:** In a graphical user interface (GUI) application, you have several UI components: a `TextBox`, a `Button`, and a `ListBox`. When the `TextBox` content changes, the `Button` should become enabled. When an item is selected in the `ListBox`, the `TextBox` should be populated with the selected item. If these components directly communicate with each other, what design problem arises, and how would the Mediator pattern address it?
    **Answer:** The problem is tight coupling. Each UI component would need to hold references to and know the specific methods of other components. For example, the `TextBox` would need to know about the `Button` to enable it, and the `ListBox` would need to know about the `TextBox` to update its text. This makes the components less reusable and harder to test independently. The Mediator pattern would introduce a `DialogMediator` (or similar) that all UI components communicate with. When the `TextBox` changes, it notifies the `DialogMediator`. The mediator then decides to enable the `Button`. When an item is selected in the `ListBox`, it notifies the `DialogMediator`, which then tells the `TextBox` to update its content. This way, components only know about the mediator, not each other, significantly reducing coupling.

2.  **Question:** While the Mediator pattern helps reduce coupling between colleagues, it can sometimes lead to a "god object" problem. Explain what this means in the context of the Mediator pattern and suggest how to mitigate it.
    **Answer:** A "god object" in the context of the Mediator pattern refers to a `ConcreteMediator` that becomes overly complex and responsible for too many unrelated interactions or too many `Colleague` types. This centralizes too much logic, making the mediator itself difficult to understand, test, and maintain. It can also become a single point of failure and a bottleneck for changes. To mitigate this, one should ensure the mediator's responsibilities are narrowly focused on coordinating a specific set of related colleagues for a particular interaction context. If the system has diverse interaction requirements, it's better to design multiple, smaller mediators, each handling a distinct set of interactions or a specific subsystem. This adheres to the Single Responsibility Principle, even for the mediator itself.

#### AI generation note
Create a 10-minute animated diagram and live coding video. Start with an animation illustrating the problem of direct, tangled communication between multiple objects (e.g., a web of arrows). Then introduce the Mediator, showing how all communication reroutes through it, simplifying the connections. Live-code the `ChatMediator`, `User`, and `ChatRoom` example in Java, demonstrating how `ChatUser` objects only interact with the `ChatRoom`. Use a split-screen view of the code and a console output showing message flow. Conclude with a reflection prompt asking learners to identify a real-world scenario where Mediator would be beneficial. Ensure clear audio and visual cues for code changes.

---
### Chapter 6.3 — The Memento Pattern: Saving and Restoring State

#### Learning objectives
*   Understand the purpose of the Memento pattern for capturing and restoring an object's internal state without violating encapsulation.
*   Implement the Memento pattern in Java using `Originator`, `Memento`, and `Caretaker` roles.
*   Identify appropriate scenarios for applying the Memento pattern, such as undo/redo functionality or checkpointing.
*   Recognize the trade-offs and potential pitfalls, like memory consumption, when using the Memento pattern.

#### Detailed lesson content
Sometimes, an object needs to be able to revert to a previous state. This is common in applications with undo/redo functionality, game save states, or system checkpoints. The challenge is how to capture an object's internal state without exposing its private fields, which would violate the principle of encapsulation. Directly accessing an object's internal data for saving and restoring would couple the client (the one requesting the save/restore) too tightly to the object's implementation details. The Memento pattern provides a clean solution by allowing an object to save its internal state externally, without exposing its internal structure, and then restore that state later.

The Memento pattern involves three key roles:
1.  **Originator:** The object whose state needs to be saved and restored. It creates a memento containing a snapshot of its current internal state and uses a memento to restore its previous state. The Originator is the only object that can access the memento's internal state.
2.  **Memento:** An object that stores a snapshot of the Originator's internal state. It has two interfaces: a narrow interface for the `Caretaker` (which only allows reading metadata or a limited set of public methods, but not direct state access) and a wide interface for the `Originator` (which allows the originator to access all the state it needs to restore itself). In Java, this is often achieved by making the Memento constructor and state accessors package-private or by using an inner class for the Memento.
3.  **Caretaker:** The object responsible for keeping track of the Mementos. It requests the Originator to create a memento, and it passes a memento back to the Originator for restoration. The Caretaker never operates on or inspects the contents of the memento; it treats mementos as opaque objects.

This separation of concerns is critical. The Originator controls its own state and how it's saved/restored. The Memento is merely a container for that state. The Caretaker manages the history of mementos without knowing their internal structure. This ensures that the Originator's encapsulation is preserved. For example, in a text editor, the `TextEditor` (Originator) could create a `TextEditorMemento` (Memento) containing the current text and cursor position. A `HistoryManager` (Caretaker) would store these mementos, allowing the user to undo or redo changes.

A common mistake is to make the Memento too public or too mutable. If the Memento's internal state is easily accessible or modifiable by the Caretaker or other external objects, it defeats the purpose of encapsulation and can lead to corrupted states. The Memento should be immutable from the perspective of the Caretaker. Another pitfall is memory consumption. If the Originator's state is very large and many mementos are stored (e.g., for extensive undo history), memory usage can become a significant concern. Strategies to mitigate this include limiting the number of mementos stored, compressing memento data, or implementing a "diff" mechanism where mementos only store changes instead of full state snapshots.

Let's illustrate with a simple `Editor` example. The `Editor` (Originator) can type text. We want to implement an undo feature. A `Caretaker` will store the `Editor`'s state (the text) in `Memento` objects.

```java
// 1. Memento Class (stores the Originator's state)
// Often an inner class or package-private to restrict access
class EditorMemento {
    private final String content;

    public EditorMemento(String content) {
        this.content = content;
    }

    public String getSavedContent() {
        return content;
    }
}

// 2. Originator Class (the object whose state we want to save)
class Editor {
    private String content;

    public Editor() {
        this.content = "";
    }

    public void type(String words) {
        content += words;
        System.out.println("Current content: " + content);
    }

    // Creates a Memento containing the current state
    public EditorMemento save() {
        System.out.println("Saving editor state...");
        return new EditorMemento(content);
    }

    // Restores the Originator's state from a Memento
    public void restore(EditorMemento memento) {
        this.content = memento.getSavedContent();
        System.out.println("Restoring editor state. Current content: " + content);
    }

    public String getContent() {
        return content;
    }
}

// 3. Caretaker Class (manages the Mementos)
import java.util.Stack;

class History {
    private Stack<EditorMemento> mementos = new Stack<>();

    public void save(EditorMemento memento) {
        mementos.push(memento);
    }

    public EditorMemento undo() {
        if (!mementos.isEmpty()) {
            return mementos.pop();
        }
        return null; // Or throw an exception
    }
}

// Client Usage
public class MementoPatternDemo {
    public static void main(String[] args) {
        Editor editor = new Editor();
        History history = new History();

        editor.type("This is the first sentence. ");
        history.save(editor.save()); // Save after first sentence

        editor.type("This is the second sentence. ");
        history.save(editor.save()); // Save after second sentence

        editor.type("And this is the third.");
        // Don't save this state, so it can be undone

        System.out.println("\n--- Performing Undo ---");
        EditorMemento firstUndo = history.undo();
        if (firstUndo != null) {
            editor.restore(firstUndo);
        }

        System.out.println("\n--- Performing another Undo ---");
        EditorMemento secondUndo = history.undo();
        if (secondUndo != null) {
            editor.restore(secondUndo);
        }

        System.out.println("\nFinal content after two undos: " + editor.getContent());

        // What if we try to undo more than available?
        System.out.println("\n--- Trying to undo more ---");
        EditorMemento noMoreUndo = history.undo();
        if (noMoreUndo == null) {
            System.out.println("No more states to undo.");
        }
    }
}
```

#### Key concepts
*   **Memento Pattern:** A behavioral design pattern that allows an object to save and restore its previous state without exposing the details of its internal structure.
*   **Originator:** The object whose internal state needs to be saved. It creates a memento, and uses a memento to restore its state.
*   **Memento:** An object that stores the internal state of the `Originator`. It has a narrow interface for the `Caretaker` (opaque) and a wide interface for the `Originator` (full access).
*   **Caretaker:** The object responsible for storing and retrieving `Memento` objects. It never inspects or modifies the memento's contents.
*   **Encapsulation:** The principle of bundling data and methods that operate on the data within a single unit, and restricting direct access to some of the object's components. The Memento pattern helps maintain this by allowing state capture without exposing private fields.
*   **Undo/Redo Functionality:** A common application of the Memento pattern, enabling users to revert actions.

#### Hands-on activity
**Task:** Implement the Memento pattern for a simple `GameCharacter` that can save and restore its health and inventory.

**Instructions:**
1.  Create an `Inventory` class (e.g., `List<String> items`).
2.  Create a `GameCharacter` class (Originator) with `health` (int) and `inventory` (Inventory object). It should have methods like `takeDamage(int amount)`, `pickUpItem(String item)`, `saveState()`, and `restoreState(CharacterMemento memento)`.
3.  Create a `CharacterMemento` class (Memento) to store the `GameCharacter`'s state. Ensure its constructor and getters are appropriately scoped to maintain encapsulation.
4.  Create a `GameHistory` class (Caretaker) to manage a list of `CharacterMemento` objects. It should have `addMemento(CharacterMemento memento)` and `getMemento(int index)` methods.
5.  In a `main` method, simulate gameplay: create a character, make some changes, save the state, make more changes, then restore to a previous state using the `GameHistory`.

**Starter Code:**
```java
import java.util.ArrayList;
import java.util.List;

// Inventory.java
class Inventory {
    private List<String> items;

    public Inventory() {
        this.items = new ArrayList<>();
    }

    public Inventory(List<String> items) {
        // Deep copy to ensure memento immutability
        this.items = new ArrayList<>(items);
    }

    public void addItem(String item) {
        items.add(item);
    }

    public void removeItem(String item) {
        items.remove(item);
    }

    public List<String> getItems() {
        return new ArrayList<>(items); // Return a copy to prevent external modification
    }

    @Override
    public String toString() {
        return "Inventory [items=" + items + "]";
    }
}

// CharacterMemento.java (You need to complete this)
class CharacterMemento {
    private final int health;
    private final Inventory inventory; // Store a snapshot of the inventory

    // Constructor should be accessible only by Originator
    CharacterMemento(int health, Inventory inventory) {
        this.health = health;
        this.inventory = new Inventory(inventory.getItems()); // Deep copy
    }

    // Getters should be accessible only by Originator (or package-private for demonstration)
    int getHealth() {
        return health;
    }

    Inventory getInventory() {
        return new Inventory(inventory.getItems()); // Return a copy
    }
}

// GameCharacter.java (Originator - You need to complete this)
class GameCharacter {
    private int health;
    private Inventory inventory;

    public GameCharacter(int initialHealth) {
        this.health = initialHealth;
        this.inventory = new Inventory();
    }

    public void takeDamage(int amount) {
        this.health = Math.max(0, this.health - amount);
        System.out.println(this + " took " + amount + " damage. Health: " + health);
    }

    public void pickUpItem(String item) {
        this.inventory.addItem(item);
        System.out.println(this + " picked up " + item + ". Inventory: " + inventory);
    }

    // Creates a Memento
    public CharacterMemento saveState() {
        System.out.println("Saving character state...");
        return new CharacterMemento(this.health, this.inventory);
    }

    // Restores state from a Memento
    public void restoreState(CharacterMemento memento) {
        System.out.println("Restoring character state...");
        this.health = memento.getHealth();
        this.inventory = memento.getInventory(); // Memento returns a copy, so we assign it
        System.out.println(this + " state restored. Health: " + health + ", Inventory: " + inventory);
    }

    @Override
    public String toString() {
        return "GameCharacter";
    }
}

// GameHistory.java (Caretaker - You need to complete this)
class GameHistory {
    private List<CharacterMemento> mementos = new ArrayList<>();

    public void addMemento(CharacterMemento memento) {
        mementos.add(memento);
    }

    public CharacterMemento getMemento(int index) {
        if (index >= 0 && index < mementos.size()) {
            return mementos.get(index);
        }
        System.out.println("Error: Memento at index " + index + " not found.");
        return null; // Or throw exception
    }

    public int size() {
        return mementos.size();
    }
}

// Main.java
public class MementoGameDemo {
    public static void main(String[] args) {
        GameCharacter player = new GameCharacter(100);
        GameHistory history = new GameHistory();

        player.pickUpItem("Sword");
        player.takeDamage(20);
        history.addMemento(player.saveState()); // Save state 1 (index 0)

        player.pickUpItem("Shield");
        player.takeDamage(30);
        history.addMemento(player.saveState()); // Save state 2 (index 1)

        player.takeDamage(50); // Player is now at 0 health

        System.out.println("\n--- Restoring to previous state (State 2) ---");
        CharacterMemento memento2 = history.getMemento(1);
        if (memento2 != null) {
            player.restoreState(memento2);
        }

        System.out.println("\n--- Restoring to initial state (State 1) ---");
        CharacterMemento memento1 = history.getMemento(0);
        if (memento1 != null) {
            player.restoreState(memento1);
        }
    }
}
```

#### Assessment idea
1.  **Question:** You are developing a drawing application where users can draw shapes. You need to implement an "undo" feature that allows users to revert their last action. Explain how the Memento pattern would be applied here, identifying the roles of Originator, Memento, and Caretaker.
    **Answer:** In a drawing application with an undo feature, the `DrawingCanvas` or `DrawingModel` would act as the **Originator**. Its state would include all the shapes currently drawn on it (e.g., a `List<Shape>` objects). When a user performs an action (draws a shape, moves a shape, deletes a shape), the `DrawingCanvas` would create a `DrawingMemento` (the **Memento**). This `DrawingMemento` would encapsulate a snapshot of the `DrawingCanvas`'s current state (e.g., a deep copy of the `List<Shape>`). A `HistoryManager` or `UndoRedoManager` would serve as the **Caretaker**. It would store a stack or list of these `DrawingMemento` objects. When the user clicks "undo," the `Caretaker` pops the last `DrawingMemento` from its stack and passes it to the `DrawingCanvas`'s `restoreState()` method, which then updates its internal state to match the memento, effectively reverting the last action.

2.  **Question:** What is a critical consideration regarding memory management when implementing the Memento pattern, especially for applications with extensive undo/redo capabilities, and what strategies can mitigate this?
    **Answer:** A critical consideration is memory consumption. If the `Originator`'s state is large (e.g., a complex document, a high-resolution image, or a game world state) and the `Caretaker` stores many `Memento` objects for a deep undo/redo history, the application's memory usage can become excessive, leading to performance issues or `OutOfMemoryError`. Strategies to mitigate this include:
    *   **Limiting history depth:** Only store a fixed number of recent mementos.
    *   **Incremental Mementos (Delta Mementos):** Instead of saving the full state, mementos can store only the *changes* (diffs) needed to revert to the previous state. This requires more complex restoration logic but can save significant memory.
    *   **Serialization/Persistence:** Mementos can be serialized to disk or a database when not actively needed, and loaded back into memory on demand.
    *   **Compression:** Compressing the data stored within mementos.
    *   **Externalization:** If the state is too large, the Memento might only store a reference or ID to an externally stored state.

#### AI generation note
Create a 12-minute interactive lab walkthrough. Start by explaining the problem of state saving without breaking encapsulation. Guide learners through implementing the `Editor`, `EditorMemento`, and `History` classes in a Java IDE. Emphasize the `final` keyword for immutability in `Memento` and the role of `Stack` in `History`. Demonstrate typing, saving, and undoing, showing the console output at each step. Include clear instructions for modifying the `Editor` to track cursor position as an additional state element. End with a 3-question interactive quiz on Memento roles and memory considerations. Ensure the IDE view is clear and code is easily readable.

---
### Chapter 6.4 — The State Pattern: Behavior Based on Internal State

#### Learning objectives
*   Understand how the State pattern allows an object to alter its behavior when its internal state changes, making it appear as if the object has changed its class.
*   Implement the State pattern in Java using a context, state interface, and concrete state classes.
*   Identify scenarios where the State pattern simplifies complex conditional logic (e.g., `if-else` or `switch` statements) related to an object's state.
*   Compare and contrast the State pattern with the Strategy pattern, understanding their similarities and key differences.

#### Detailed lesson content
Objects in software systems often exhibit different behaviors depending on their internal state. Without a structured approach, this can lead to large classes filled with complex conditional logic (`if-else` or `switch` statements) that check the current state and then execute the appropriate behavior. This approach makes the code hard to read, difficult to maintain, and prone to errors when new states or behaviors are introduced. The State pattern offers an elegant solution by allowing an object to change its behavior when its internal state changes. It achieves this by encapsulating each state's behavior into a separate class, and the object (the "context") delegates state-specific behavior to the current state object.

Imagine a `TrafficLight` object. Its behavior (what it does when `request()` is called) changes depending on whether it's currently `RED`, `YELLOW`, or `GREEN`. Instead of having a single `TrafficLight` class with a `color` field and a `switch` statement in its `request()` method, the State pattern suggests creating separate `RedState`, `YellowState`, and `GreenState` classes. Each state class would implement a common `TrafficLightState` interface, defining the state-specific behavior (e.g., `handleRequest()`). The `TrafficLight` context object would then hold a reference to its current `TrafficLightState` object and delegate requests to it. When the state needs to change (e.g., from `RED` to `GREEN`), the `TrafficLight` context simply changes its internal `TrafficLightState` object.

The core components of the State pattern are:
1.  **Context:** The object whose behavior changes based on its internal state (e.g., `TrafficLight`). It maintains an instance of a `ConcreteState` subclass that defines the current state. It delegates state-specific requests to this `State` object.
2.  **State:** An interface or abstract class that defines an interface for encapsulating the behavior associated with a particular state of the `Context`.
3.  **ConcreteState:** Subclasses of `State` that implement the state-specific behavior. Each `ConcreteState` typically knows its `Context` object and can change the context's state (i.e., change the `Context`'s current `State` object) if a transition occurs.

The key benefit of this pattern is that it localizes state-specific behavior and state transitions into separate classes. This makes the code much cleaner and easier to extend. Adding a new state (e.g., "Flashing Yellow") simply involves creating a new `ConcreteState` class and defining its transitions, without modifying existing state classes or the `Context` class's core logic. This adheres to the Open/Closed Principle: open for extension, closed for modification.

A common mistake is confusing the State pattern with the Strategy pattern. While both patterns involve delegating behavior to separate objects, their intent differs. The **State pattern** allows an object to change its *behavior* based on its *internal state*, making the object appear to change its class. The *context* itself changes its internal state object. The **Strategy pattern** allows an object to change its *algorithm* or *strategy* at runtime. The *client* typically chooses and provides the strategy to the context, and the context uses that strategy to perform an action. In State, the state objects often know about the context and can initiate state transitions. In Strategy, strategies typically don't know about the context and are usually stateless.

Consider a simple `Door` example that can be `OPEN`, `CLOSED`, or `LOCKED`.

```java
// 1. State Interface
interface DoorState {
    void open(Door door);
    void close(Door door);
    void lock(Door door);
    void unlock(Door door);
}

// 2. Concrete State: Closed State
class ClosedState implements DoorState {
    @Override
    public void open(Door door) {
        System.out.println("Opening the door.");
        door.setState(new OpenState());
    }

    @Override
    public void close(Door door) {
        System.out.println("Door is already closed.");
    }

    @Override
    public void lock(Door door) {
        System.out.println("Locking the door.");
        door.setState(new LockedState());
    }

    @Override
    public void unlock(Door door) {
        System.out.println("Door is closed but not locked.");
    }
}

// 2. Concrete State: Open State
class OpenState implements DoorState {
    @Override
    public void open(Door door) {
        System.out.println("Door is already open.");
    }

    @Override
    public void close(Door door) {
        System.out.println("Closing the door.");
        door.setState(new ClosedState());
    }

    @Override
    public void lock(Door door) {
        System.out.println("Cannot lock an open door.");
    }

    @Override
    public void unlock(Door door) {
        System.out.println("Door is open, not locked.");
    }
}

// 2. Concrete State: Locked State
class LockedState implements DoorState {
    @Override
    public void open(Door door) {
        System.out.println("Cannot open a locked door.");
    }

    @Override
    public void close(Door door) {
        System.out.println("Door is already closed and locked.");
    }

    @Override
    public void lock(Door door) {
        System.out.println("Door is already locked.");
    }

    @Override
    public void unlock(Door door) {
        System.out.println("Unlocking the door.");
        door.setState(new ClosedState());
    }
}

// 3. Context Class
class Door {
    private DoorState currentState;

    public Door() {
        // Initial state
        currentState = new ClosedState();
        System.out.println("Door is initially " + currentState.getClass().getSimpleName());
    }

    public void setState(DoorState state) {
        this.currentState = state;
        System.out.println("Door state changed to " + currentState.getClass().getSimpleName());
    }

    public void open() {
        currentState.open(this);
    }

    public void close() {
        currentState.close(this);
    }

    public void lock() {
        currentState.lock(this);
    }

    public void unlock() {
        currentState.unlock(this);
    }
}

// Client Usage
public class StatePatternDemo {
    public static void main(String[] args) {
        Door door = new Door(); // Initially ClosedState

        door.open();    // Door state changes to OpenState
        door.close();   // Door state changes to ClosedState
        door.lock();    // Door state changes to LockedState
        door.open();    // Cannot open locked door
        door.unlock();  // Door state changes to ClosedState
        door.close();   // Already closed
    }
}
```

#### Key concepts
*   **State Pattern:** A behavioral design pattern that allows an object to alter its behavior when its internal state changes. It makes the object appear to change its class.
*   **Context:** The object whose behavior depends on its state. It maintains a reference to a `ConcreteState` object and delegates state-specific requests to it.
*   **State:** An interface or abstract class that defines the common interface for all concrete state classes.
*   **ConcreteState:** Implementations of the `State` interface, each encapsulating the behavior associated with a particular state of the `Context`. `ConcreteState` objects can also initiate state transitions by changing the `Context`'s current state.
*   **Open/Closed Principle:** The State pattern supports this by allowing new states to be added without modifying existing state classes or the `Context` class.
*   **State vs. Strategy:** State pattern focuses on an object changing its behavior based on *internal state* and often involves state transitions managed by the state objects themselves. Strategy pattern focuses on interchangeable *algorithms* chosen by the client or context, and strategies are typically stateless and unaware of the context.

#### Hands-on activity
**Task:** Implement the State pattern for a simple `MediaPlayer` that can be in `PlayingState`, `PausedState`, or `StoppedState`.

**Instructions:**
1.  Define a `MediaPlayerState` interface with methods like `play()`, `pause()`, `stop()`, and `nextSong()`.
2.  Implement `PlayingState`, `PausedState`, and `StoppedState` classes, each implementing `MediaPlayerState` and defining state-specific behavior and transitions.
3.  Create a `MediaPlayer` class (Context) that holds a reference to its current `MediaPlayerState` and delegates actions to it.
4.  In a `main` method, simulate media player actions (play, pause, stop, next) and observe how the player's behavior changes based on its current state.

**Starter Code:**
```java
// MediaPlayerState.java
interface MediaPlayerState {
    void play(MediaPlayer player);
    void pause(MediaPlayer player);
    void stop(MediaPlayer player);
    void nextSong(MediaPlayer player);
}

// StoppedState.java (You need to complete this)
class StoppedState implements MediaPlayerState {
    @Override
    public void play(MediaPlayer player) {
        System.out.println("Starting playback from stopped state.");
        player.setState(new PlayingState());
    }

    @Override
    public void pause(MediaPlayer player) {
        System.out.println("Cannot pause, player is stopped.");
    }

    @Override
    public void stop(MediaPlayer player) {
        System.out.println("Player is already stopped.");
    }

    @Override
    public void nextSong(MediaPlayer player) {
        System.out.println("Moving to next song from stopped state.");
        // In a real scenario, this might load the next song and then transition to PlayingState or PausedState
        // For simplicity, let's just transition to PlayingState
        player.setState(new PlayingState());
    }
}

// PlayingState.java (You need to complete this)
class PlayingState implements MediaPlayerState {
    @Override
    public void play(MediaPlayer player) {
        System.out.println("Already playing.");
    }

    @Override
    public void pause(MediaPlayer player) {
        System.out.println("Pausing playback.");
        player.setState(new PausedState());
    }

    @Override
    public void stop(MediaPlayer player) {
        System.out.println("Stopping playback.");
        player.setState(new StoppedState());
    }

    @Override
    public void nextSong(MediaPlayer player) {
        System.out.println("Playing next song.");
        // Stays in PlayingState, just changes the internal "current song"
    }
}

// PausedState.java (You need to complete this)
class PausedState implements MediaPlayerState {
    @Override
    public void play(MediaPlayer player) {
        System.out.println("Resuming playback from paused state.");
        player.setState(new PlayingState());
    }

    @Override
    public void pause(MediaPlayer player) {
        System.out.println("Already paused.");
    }

    @Override
    public void stop(MediaPlayer player) {
        System.out.println("Stopping playback from paused state.");
        player.setState(new StoppedState());
    }

    @Override
    public void nextSong(MediaPlayer player) {
        System.out.println("Moving to next song from paused state.");
        // For simplicity, let's just transition to PlayingState
        player.setState(new PlayingState());
    }
}

// MediaPlayer.java (Context - You need to complete this)
class MediaPlayer {
    private MediaPlayerState currentState;

    public MediaPlayer() {
        this.currentState = new StoppedState(); // Initial state
        System.out.println("Media Player is initially " + currentState.getClass().getSimpleName());
    }

    public void setState(MediaPlayerState state) {
        this.currentState = state;
        System.out.println("Media Player state changed to " + currentState.getClass().getSimpleName());
    }

    public void play() {
        currentState.play(this);
    }

    public void pause() {
        currentState.pause(this);
    }

    public void stop() {
        currentState.stop(this);
    }

    public void nextSong() {
        currentState.nextSong(this);
    }
}

// Main.java
public class MediaPlayerDemo {
    public static void main(String[] args) {
        MediaPlayer player = new MediaPlayer();

        player.play();
        player.nextSong();
        player.pause();
        player.play();
        player.stop();
        player.pause(); // Should not work
    }
}
```

#### Assessment idea
1.  **Question:** You are building a vending machine simulation. The machine can be in `IdleState`, `HasSelectionState`, `HasMoneyState`, and `SoldOutState`. Describe how the State pattern would help manage the vending machine's behavior, specifically explaining how it avoids complex `if-else` structures.
    **Answer:** The `VendingMachine` itself would be the **Context**. It would have a `VendingMachineState` interface, and concrete state classes like `IdleState`, `HasSelectionState`, `HasMoneyState`, and `SoldOutState`. Each concrete state class would implement methods like `insertMoney()`, `selectProduct()`, `dispenseProduct()`, and `refundMoney()`. Instead of the `VendingMachine` having a large `switch` statement in each of these methods to check `if (currentState == IDLE) { ... } else if (currentState == HAS_MONEY) { ... }`, it would simply delegate the call to its current `VendingMachineState` object (e.g., `currentState.insertMoney(this, amount)`). Each state class would then define the valid actions and transitions for that specific state. For example, `IdleState.insertMoney()` would transition to `HasMoneyState`, while `SoldOutState.insertMoney()` would simply refund the money and remain in `SoldOutState`. This localizes state-specific logic and transitions, making the code much cleaner and easier to extend with new states or actions.

2.  **Question:** Explain the primary difference between the State pattern and the Strategy pattern. Provide a simple analogy for each.
    **Answer:** The primary difference lies in their intent and how the "behavior" is chosen.
    *   **State Pattern:** Allows an object to change its *behavior* based on its *internal state*. The context object itself changes its internal state object, making it appear as if the object has changed its class. The state objects often know about the context and can initiate state transitions.
        *   **Analogy:** A traffic light. Its behavior (what it does when a car approaches) changes based on whether it's red, yellow, or green. The light itself changes its internal state, and its actions (e.g., stopping or allowing traffic) are determined by that state.
    *   **Strategy Pattern:** Allows an object to change its *algorithm* or *strategy* at runtime. The client or context typically chooses and provides the strategy (algorithm) to be used, and the context uses that strategy to perform an action. Strategies are usually stateless and generally don't know about the context.
        *   **Analogy:** A navigation app. You can choose different strategies for calculating a route (e.g., fastest route, shortest route, avoid highways, avoid tolls). The app (context) takes your chosen strategy (algorithm) and applies it to find the route. The routing algorithm itself doesn't change the app's internal state; it just provides a different way of doing one specific task.

#### AI generation note
Create a 15-minute live coding video. Begin by showing a `TrafficLight` class with a `String state` field and a `switch` statement in its `handleRequest()` method, highlighting the complexity. Then refactor this into the State pattern, introducing `TrafficLightState` interface, `RedState`, `YellowState`, `GreenState` classes, and updating the `TrafficLight` context. Demonstrate state transitions and different behaviors. Use a split-screen view showing the refactoring process in an IDE and the console output. Include a diagram overlay to explain the pattern's structure during the refactoring. End with a hands-on coding challenge to add a "FlashingYellowState."

---
### Chapter 6.5 — The Strategy Pattern: Interchangeable Algorithms

#### Learning objectives
*   Understand the purpose of the Strategy pattern for defining a family of algorithms and making them interchangeable.
*   Implement the Strategy pattern in Java using a context, strategy interface, and concrete strategy classes.
*   Identify scenarios where the Strategy pattern simplifies code by replacing conditional logic for different algorithms.
*   Evaluate the benefits of using the Strategy pattern for promoting flexibility, reusability, and adherence to the Open/Closed Principle.

#### Detailed lesson content
In many applications, specific tasks can be performed in several different ways, each representing a distinct algorithm. For instance, sorting a list of items can be done using bubble sort, quicksort, or merge sort. Calculating shipping costs might involve different algorithms based on the destination or package size. Without a proper design pattern, developers often resort to using large `if-else` or `switch` statements within a single class to select and execute the appropriate algorithm. This approach leads to bloated classes, violates the Single Responsibility Principle, and makes it difficult to add new algorithms without modifying existing code. The Strategy pattern solves this by defining a family of algorithms, encapsulating each one, and making them interchangeable.

The Strategy pattern allows a client to choose an algorithm from a family of algorithms. The "context" object (the one that needs to perform the task) holds a reference to a "strategy" object (which encapsulates the algorithm) and delegates the execution of the task to this strategy. This means the context is decoupled from the specific implementation of the algorithm. It only knows about the strategy interface, not the concrete strategy classes. This promotes flexibility because new algorithms can be added easily by creating new concrete strategy classes without modifying the context or existing strategies.

The core components of the Strategy pattern are:
1.  **Context:** The object that uses a strategy to perform a task (e.g., `ShoppingCart`). It maintains a reference to a `Strategy` object.
2.  **Strategy:** An interface or abstract class that defines a common interface for all concrete strategy classes. This interface declares the method(s) that the context will call to execute the algorithm.
3.  **Concrete Strategy:** Implementations of the `Strategy` interface. Each `ConcreteStrategy` encapsulates a specific algorithm.

A significant benefit of the Strategy pattern is its adherence to the Open/Closed Principle. You can introduce new algorithms (strategies) without altering the `Context` class. This makes the system more robust and easier to maintain. Furthermore, it improves code readability by moving algorithm-specific logic out of the `Context` and into dedicated `Strategy` classes. This also makes individual algorithms easier to test in isolation.

A common mistake is overusing the Strategy pattern when a simple method parameter or a factory method might suffice. The Strategy pattern is most beneficial when you have a family of related algorithms that are likely to change or be extended, and you want to allow clients to choose between them at runtime. If there's only one algorithm, or if the variations are minor and don't warrant separate classes, the overhead of the pattern might outweigh its benefits. Another point of confusion, as discussed in the previous chapter, is distinguishing it from the State pattern. Remember, Strategy is about *what* algorithm to use, chosen by the client, while State is about *how* an object behaves based on its *internal* state, with state transitions often managed by the state objects themselves.

Let's look at an example: a `ShoppingCart` that can calculate the total price using different `DiscountStrategy` algorithms.

```java
// 1. Strategy Interface
interface DiscountStrategy {
    double applyDiscount(double originalPrice);
}

// 2. Concrete Strategy: No Discount
class NoDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double originalPrice) {
        System.out.println("Applying no discount.");
        return originalPrice;
    }
}

// 2. Concrete Strategy: Percentage Discount
class PercentageDiscountStrategy implements DiscountStrategy {
    private double percentage; // e.g., 0.10 for 10%

    public PercentageDiscountStrategy(double percentage) {
        this.percentage = percentage;
    }

    @Override
    public double applyDiscount(double originalPrice) {
        System.out.println("Applying " + (percentage * 100) + "% discount.");
        return originalPrice * (1 - percentage);
    }
}

// 2. Concrete Strategy: Fixed Amount Discount
class FixedAmountDiscountStrategy implements DiscountStrategy {
    private double fixedAmount;

    public FixedAmountDiscountStrategy(double fixedAmount) {
        this.fixedAmount = fixedAmount;
    }

    @Override
    public double applyDiscount(double originalPrice) {
        System.out.println("Applying fixed amount discount of $" + fixedAmount);
        return Math.max(0, originalPrice - fixedAmount); // Ensure price doesn't go below zero
    }
}

// 3. Context Class
class ShoppingCart {
    private DiscountStrategy discountStrategy;
    private double totalPrice;

    public ShoppingCart(double initialPrice) {
        this.totalPrice = initialPrice;
        // Default strategy
        this.discountStrategy = new NoDiscountStrategy();
    }

    // Allows client to set or change the strategy at runtime
    public void setDiscountStrategy(DiscountStrategy discountStrategy) {
        this.discountStrategy = discountStrategy;
        System.out.println("Discount strategy set to: " + discountStrategy.getClass().getSimpleName());
    }

    public double calculateFinalPrice() {
        return discountStrategy.applyDiscount(totalPrice);
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}

// Client Usage
public class StrategyPatternDemo {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart(100.0);
        System.out.println("Initial price: $" + cart.calculateFinalPrice());

        // Apply 10% discount
        cart.setDiscountStrategy(new PercentageDiscountStrategy(0.10));
        System.out.println("Price after 10% discount: $" + cart.calculateFinalPrice());

        // Apply fixed $20 discount
        cart.setDiscountStrategy(new FixedAmountDiscountStrategy(20.0));
        System.out.println("Price after $20 fixed discount: $" + cart.calculateFinalPrice());

        // Change item price and apply another discount
        cart.setTotalPrice(50.0);
        cart.setDiscountStrategy(new PercentageDiscountStrategy(0.25)); // 25% off $50
        System.out.println("New item price after 25% discount: $" + cart.calculateFinalPrice());
    }
}
```

#### Key concepts
*   **Strategy Pattern:** A behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.
*   **Context:** The class that uses a `Strategy` object to perform a task. It holds a reference to a `Strategy` and delegates the execution of the algorithm to it.
*   **Strategy:** An interface or abstract class that declares a common interface for all supported algorithms.
*   **Concrete Strategy:** An implementation of the `Strategy` interface, encapsulating a specific algorithm.
*   **Interchangeable Algorithms:** The ability to swap different algorithms at runtime without changing the client code that uses them.
*   **Open/Closed Principle:** The Strategy pattern supports this by allowing new algorithms to be added as new `ConcreteStrategy` classes without modifying the `Context` or existing strategies.

#### Hands-on activity
**Task:** Implement the Strategy pattern for a `PaymentProcessor` that can process payments using different `PaymentStrategy` algorithms (e.g., Credit Card, PayPal, Bank Transfer).

**Instructions:**
1.  Define a `PaymentStrategy` interface with a `pay(double amount)` method.
2.  Implement `CreditCardPayment`, `PayPalPayment`, and `BankTransferPayment` classes, each implementing `PaymentStrategy` and simulating their respective payment processes.
3.  Create a `PaymentProcessor` class (Context) that holds a reference to its current `PaymentStrategy` and delegates the `pay()` action to it.
4.  In a `main` method, create a `PaymentProcessor`, set different payment strategies, and process various amounts.

**Starter Code:**
```java
// PaymentStrategy.java
interface PaymentStrategy {
    void pay(double amount);
}

// CreditCardPayment.java (You need to complete this)
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String name;

    public CreditCardPayment(String cardNumber, String name) {
        this.cardNumber = cardNumber;
        this.name = name;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paying $" + amount + " using Credit Card " + cardNumber + " for " + name + ".");
        // Simulate credit card processing logic
    }
}

// PayPalPayment.java (You need to complete this)
class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paying $" + amount + " using PayPal account " + email + ".");
        // Simulate PayPal API interaction
    }
}

// BankTransferPayment.java (You need to complete this)
class BankTransferPayment implements PaymentStrategy {
    private String bankAccount;
    private String bankName;

    public BankTransferPayment(String bankAccount, String bankName) {
        this.bankAccount = bankAccount;
        this.bankName = bankName;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paying $" + amount + " using Bank Transfer to account " + bankAccount + " at " + bankName + ".");
        // Simulate bank transfer initiation
    }
}

// PaymentProcessor.java (Context - You need to complete this)
class PaymentProcessor {
    private PaymentStrategy paymentStrategy;

    public PaymentProcessor(PaymentStrategy initialStrategy) {
        this.paymentStrategy = initialStrategy;
    }

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
        System.out.println("Payment strategy set to: " + paymentStrategy.getClass().getSimpleName());
    }

    public void processPayment(double amount) {
        paymentStrategy.pay(amount);
    }
}

// Main.java
public class PaymentDemo {
    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor(new CreditCardPayment("1234-5678-9012-3456", "John Doe"));
        processor.processPayment(150.75);

        processor.setPaymentStrategy(new PayPalPayment("john.doe@example.com"));
        processor.processPayment(75.20);

        processor.setPaymentStrategy(new BankTransferPayment("987654321", "MyBank Inc."));
        processor.processPayment(300.00);
    }
}
```

#### Assessment idea
1.  **Question:** You are developing a reporting module that needs to generate reports in different formats (e.g., PDF, CSV, XML). Explain how the Strategy pattern can be used to manage these different report generation algorithms, and what benefits it provides over using a large `switch` statement.
    **Answer:** The `ReportGenerator` would be the **Context**. It would have a `ReportExportStrategy` interface with a method like `export(ReportData data)`. Concrete strategy classes like `PdfExportStrategy`, `CsvExportStrategy`, and `XmlExportStrategy` would implement this interface, each containing the specific logic for generating a report in its respective format. The `ReportGenerator` would hold a reference to the currently selected `ReportExportStrategy` and delegate the export task to it (e.g., `currentStrategy.export(reportData)`).
    The benefits over a `switch` statement are significant:
    *   **Open/Closed Principle:** New export formats (e.g., JSON) can be added by simply creating a new `ConcreteReportExportStrategy` class without modifying the `ReportGenerator` class or existing strategies.
    *   **Single Responsibility Principle:** Each strategy class is solely responsible for one export algorithm, making it easier to understand, test, and maintain. The `ReportGenerator` focuses only on *using* the strategy, not *implementing* it.
    *   **Flexibility:** The export format can be changed dynamically at runtime, allowing users to select their preferred output.
    *   **Testability:** Individual export algorithms can be tested in isolation without needing the full `ReportGenerator` context.

2.  **Question:** When might the Strategy pattern be considered an "overkill" for a problem, and what simpler alternatives might exist?
    **Answer:** The Strategy pattern might be considered overkill in situations where:
    *   There is only one algorithm, or the number of algorithms is very small and unlikely to grow.
    *   The differences between algorithms are trivial and can be handled with a simple boolean flag or a few `if` statements.
    *   The algorithms are very simple and don't involve complex logic that would benefit from encapsulation in separate classes.
    Simpler alternatives could include:
    *   **Method Parameters:** If the variation is minor, a method parameter can often control the behavior (e.g., `sort(List<T> list, boolean ascending)`).
    *   **Factory Method:** If the choice of algorithm is determined once at object creation and doesn't change, a factory method can return the appropriate concrete object without exposing the strategy pattern to the client.
    *   **Template Method Pattern:** If the algorithms share a common structure but differ in specific steps, the Template Method pattern might be more appropriate, allowing subclasses to override specific steps.

#### AI generation note
Create a 12-minute interactive coding video. Start by introducing the problem of varying discount calculations in an e-commerce system. Live-code the `DiscountStrategy` interface and `NoDiscountStrategy`, `PercentageDiscountStrategy`, and `FixedAmountDiscountStrategy` classes. Then, implement the `ShoppingCart` context class, demonstrating how to set and change the strategy at runtime. Show the console output for different discount applications. Include a split-screen view of the Java code in an IDE and the terminal output. Conclude with a hands-on coding challenge to implement a "BuyOneGetOneFreeStrategy" and apply it to the shopping cart. Ensure code is highlighted and explained clearly.
---

## Final Capstone Project

The capstone project provides an opportunity to synthesize the design patterns learned throughout this course and apply them in a practical, hands-on scenario. You will choose one of the following project options, each designed to challenge you to integrate multiple patterns and demonstrate your understanding of building flexible, maintainable, and extensible Java applications.

### Project Option 1: Advanced Notification System

**Description:** Develop a flexible notification system that can send messages through various channels (e.g., email, SMS, push notification) and allows users to subscribe to different types of notifications. The system should be easily extensible to add new notification channels or message types without modifying existing core logic.

**Core Requirements:**
*   **Notification Channels:** Implement at least three different notification channels (e.g., `EmailNotifier`, `SmsNotifier`, `PushNotifier`).
*   **User Subscription:** Simulate users subscribing to specific notification types or channels.
*   **Message Generation:** Create a mechanism to generate different types of messages (e.g., `WelcomeMessage`, `PromotionMessage`, `AlertMessage`).
*   **Pattern Application:**
    *   Use the **Strategy Pattern** to encapsulate different notification sending algorithms (e.g., how an email is sent vs. an SMS).
    *   Employ the **Factory Method Pattern** (or Abstract Factory) to create different types of messages or notifiers based on runtime input.
    *   Integrate the **Observer Pattern** to allow users (observers) to subscribe to a `NotificationService` (subject) and receive notifications when relevant events occur.
*   **Extensibility:** Demonstrate how a new notification channel or message type could be added with minimal changes to existing code.
*   **User Interface (Optional but Recommended):** A simple console-based interface to simulate sending notifications and user subscriptions.

**Stretch Goals:**
*   Implement a **Decorator Pattern** to add features to notifications, such as logging, encryption, or timestamping, without altering the core notification logic.
*   Add a priority system for notifications using a **Chain of Responsibility Pattern**.
*   Persist user subscriptions and notification history using simple file I/O or an in-memory database.

**Evaluation Criteria:**
*   Correct and effective application of the required design patterns.
*   Code quality, readability, and adherence to Java best practices.
*   Demonstration of extensibility and maintainability.
*   Clear documentation of design choices and pattern usage.
*   Functional correctness of the notification system.

**Estimated Time:** 15-20 hours

### Project Option 2: Simple Game Engine with Extensible Mechanics

**Description:** Build a basic 2D game engine that supports different character types, movement behaviors, and attack styles. The goal is to design the engine so that new character types, behaviors, or attacks can be introduced easily without significant refactoring of the core game loop or entity management.

**Core Requirements:**
*   **Game Entities:** Create a base `GameObject` class or interface. Implement at least two concrete character types (e.g., `PlayerCharacter`, `EnemyCharacter`) and one inanimate object (e.g., `Coin`, `Obstacle`).
*   **Movement:** Define different movement strategies (e.g., `WalkStrategy`, `RunStrategy`, `FlyStrategy`).
*   **Attacks:** Implement various attack types (e.g., `MeleeAttack`, `RangedAttack`, `MagicAttack`).
*   **Game State Management:** Manage simple game states (e.g., `PlayingState`, `PausedState`, `GameOverState`).
*   **Pattern Application:**
    *   Utilize the **Strategy Pattern** for character movement and attack behaviors, allowing them to be swapped dynamically.
    *   Implement the **Factory Method Pattern** to create different types of game objects or characters.
    *   Apply the **State Pattern** to manage the overall game state, ensuring that game logic changes appropriately based on the current state.
*   **Game Loop:** A simple console-based game loop that updates and renders game objects.

**Stretch Goals:**
*   Introduce the **Command Pattern** to handle player input (e.g., move up, attack, use item), allowing for easy key remapping or macro creation.
*   Implement a simple inventory system using the **Composite Pattern** for items and the **Iterator Pattern** to traverse the inventory.
*   Add a scoring system and display it using the **Observer Pattern** (score display observes game events).
*   Create a simple level loader using the **Builder Pattern** to construct complex level objects.

**Evaluation Criteria:**
*   Effective use of design patterns to achieve flexibility and extensibility.
*   Robustness of the game loop and entity management.
*   Code organization and adherence to object-oriented principles.
*   Clarity of design documentation.
*   Functional demonstration of game mechanics.

**Estimated Time:** 20-25 hours

### Project Option 3: Document Processing and Conversion Utility

**Description:** Develop a utility that can process and convert documents between different formats (e.g., plain text, rich text, markdown). The utility should also allow for additional processing steps, such as adding headers, footers, or applying encryption, in a modular fashion.

**Core Requirements:**
*   **Document Representation:** Create a common interface or abstract class for documents (e.g., `Document`).
*   **Format Conversion:** Implement at least two concrete document formats (e.g., `PlainTextDocument`, `MarkdownDocument`). Provide methods to convert a document from one format to another.
*   **Processing Steps:** Implement at least two processing steps (e.g., `AddHeaderProcessor`, `AddFooterProcessor`).
*   **Pattern Application:**
    *   Use the **Strategy Pattern** for different conversion algorithms (e.g., how to convert plain text to markdown vs. markdown to plain text).
    *   Apply the **Factory Method Pattern** to create instances of different document types or processors.
    *   Leverage the **Decorator Pattern** to dynamically add processing steps (like headers, footers, or encryption) to a document without altering its core class.
*   **Input/Output:** Read content from a file (or simulate file content) and write the processed/converted content to another file or console.

**Stretch Goals:**
*   Implement additional processing steps using the Decorator Pattern, such as `EncryptDocumentDecorator` or `CompressDocumentDecorator`.
*   Use the **Builder Pattern** to construct complex documents with many properties or initial content.
*   Integrate the **Command Pattern** to allow users to queue up multiple processing commands (e.g., "convert to markdown, then add header, then encrypt").
*   Add support for error handling and logging using the **Singleton Pattern** for a `Logger` instance.

**Evaluation Criteria:**
*   Correct and elegant application of the required design patterns.
*   Modularity and extensibility of the document processing pipeline.
*   Code quality, error handling, and maintainability.
*   Clear explanation of design choices.
*   Functional demonstration of document conversion and processing.

**Estimated Time:** 18-22 hours

## Final Examination

This final examination assesses your comprehensive understanding of design patterns, their application, and their impact on software design. It covers concepts from all modules, including creational, structural, and behavioral patterns, as well as their practical implications in Java development.

---

**Instructions:** Please answer all questions thoroughly. For code-related questions, provide clear, concise, and correct Java code snippets. For conceptual questions, explain your reasoning clearly.

---

**Part 1: Concept Definitions (4 questions)**

1.  **Question:** What is a design pattern, and why are they considered valuable in software development? Provide at least three benefits of using design patterns.
    **Answer:** A design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. They are not finished designs that can be directly transformed into code, but rather templates for how to solve a problem that can be used in many different situations.
    **Benefits:**
    1.  **Reusability:** They provide proven solutions, reducing the need to reinvent the wheel for common problems.
    2.  **Improved Communication:** Patterns provide a common vocabulary for developers, making it easier to discuss and understand complex designs.
    3.  **Maintainability and Extensibility:** Systems built with patterns are often more flexible, easier to modify, and can adapt to new requirements with less effort.
    4.  **Robustness:** Patterns represent best practices and proven solutions, leading to more robust and error-resistant code.

2.  **Question:** Explain the primary difference between the Factory Method pattern and the Abstract Factory pattern. Provide a scenario where each would be more appropriate.
    **Answer:**
    *   **Factory Method Pattern:** Defines an interface for creating an object, but lets subclasses decide which class to instantiate. It defers instantiation to subclasses. It's typically used when a class cannot anticipate the class of objects it needs to create, or when a class wants its subclasses to specify the objects to be created.
        *   **Scenario:** A document editor that needs to create different types of `Document` objects (e.g., `WordDocument`, `PdfDocument`, `HtmlDocument`). The `DocumentCreator` class would have a `createDocument()` factory method, and subclasses like `WordCreator` or `PdfCreator` would override it to return their specific document type.
    *   **Abstract Factory Pattern:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes. It's used when a system needs to be independent of how its products are created, composed, and represented, and when a family of product objects is designed to work together.
        *   **Scenario:** A GUI toolkit that needs to create different families of UI components (e.g., `WindowsButton`, `WindowsCheckbox` vs. `MacButton`, `MacCheckbox`). An `AbstractFactory` interface (`GUIFactory`) would have methods like `createButton()` and `createCheckbox()`, with concrete factories (`WindowsFactory`, `MacFactory`) implementing these to return platform-specific components.

3.  **Question:** When would you choose to apply the Strategy pattern instead of using a series of `if-else` or `switch` statements to handle different behaviors?
    **Answer:** You would choose the Strategy pattern when you have multiple algorithms or behaviors that can be applied to a particular task, and you want to make these algorithms interchangeable at runtime. Instead of using `if-else` or `switch` statements, which tightly couple the client code to the specific behaviors and make it difficult to add new ones, the Strategy pattern encapsulates each behavior into its own class. This offers several advantages:
    *   **Open/Closed Principle:** New strategies can be added without modifying the client code that uses them.
    *   **Reduced Conditional Logic:** It eliminates large, complex conditional blocks, making the code cleaner and easier to understand.
    *   **Runtime Flexibility:** The specific behavior can be chosen or changed dynamically at runtime.
    *   **Improved Testability:** Each strategy can be tested independently.

4.  **Question:** Describe the primary purpose of the Decorator pattern. How does it achieve its goal without modifying the original object's class?
    **Answer:** The primary purpose of the Decorator pattern is to attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality. It achieves this goal by:
    *   **Wrapping:** A decorator "wraps" the original object (or another decorator) by holding a reference to it. Both the decorator and the object it decorates typically implement the same interface.
    *   **Delegation:** The decorator delegates most of the calls to the wrapped object but can add its own behavior before or after forwarding the request.
    *   **Composition over Inheritance:** Instead of extending functionality through inheritance (which is static and can lead to class explosion), the Decorator pattern uses composition. This allows for new functionalities to be added in layers at runtime, providing much greater flexibility. The original object's class remains untouched, adhering to the Open/Closed Principle.

**Part 2: Code Tracing (3 questions)**

5.  **Question:** Consider the following simplified Observer pattern implementation. Trace the output when `subject.setState(10)` is called.

    ```java
    import java.util.ArrayList;
    import java.util.List;

    interface Observer {
        void update();
    }

    class Subject {
        private List<Observer> observers = new ArrayList<>();
        private int state;

        public void attach(Observer observer) {
            observers.add(observer);
        }

        public int getState() {
            return state;
        }

        public void setState(int state) {
            this.state = state;
            notifyAllObservers();
        }

        public void notifyAllObservers() {
            for (Observer observer : observers) {
                observer.update();
            }
        }
    }

    class ConcreteObserverA implements Observer {
        private Subject subject;

        public ConcreteObserverA(Subject subject) {
            this.subject = subject;
            this.subject.attach(this);
        }

        @Override
        public void update() {
            System.out.println("Observer A: Subject state is " + subject.getState());
        }
    }

    class ConcreteObserverB implements Observer {
        private Subject subject;

        public ConcreteObserverB(Subject subject) {
            this.subject = subject;
            this.subject.attach(this);
        }

        @Override
        public void update() {
            System.out.println("Observer B: Subject state changed to " + subject.getState());
        }
    }

    public class ObserverDemo {
        public static void main(String[] args) {
            Subject subject = new Subject();

            new ConcreteObserverA(subject);
            new ConcreteObserverB(subject);

            System.out.println("First state change: 5");
            subject.setState(5);
            System.out.println("\nSecond state change: 10");
            subject.setState(10);
        }
    }
    ```
    **Answer:**
    ```
    First state change: 5
    Observer A: Subject state is 5
    Observer B: Subject state changed to 5

    Second state change: 10
    Observer A: Subject state is 10
    Observer B: Subject state changed to 10
    ```
    **Explanation:**
    1.  `Subject` and two `ConcreteObserverA` and `ConcreteObserverB` instances are created.
    2.  Both observers attach themselves to the `subject` in their constructors.
    3.  `subject.setState(5)` is called. The `state` within `subject` becomes 5.
    4.  `notifyAllObservers()` is called, iterating through `observers`.
    5.  `ConcreteObserverA.update()` is called, printing "Observer A: Subject state is 5".
    6.  `ConcreteObserverB.update()` is called, printing "Observer B: Subject state changed to 5".
    7.  `subject.setState(10)` is called. The `state` within `subject` becomes 10.
    8.  `notifyAllObservers()` is called again.
    9.  `ConcreteObserverA.update()` is called, printing "Observer A: Subject state is 10".
    10. `ConcreteObserverB.update()` is called, printing "Observer B: Subject state changed to 10".

6.  **Question:** Trace the construction of the `House` object in the following Builder pattern example. What will be the final state of the `House` object's fields?

    ```java
    class House {
        private String walls;
        private String roof;
        private int windows;
        private boolean hasGarage;

        private House(HouseBuilder builder) {
            this.walls = builder.walls;
            this.roof = builder.roof;
            this.windows = builder.windows;
            this.hasGarage = builder.hasGarage;
        }

        public String getWalls() { return walls; }
        public String getRoof() { return roof; }
        public int getWindows() { return windows; }
        public boolean hasGarage() { return hasGarage; }

        @Override
        public String toString() {
            return "House [Walls=" + walls + ", Roof=" + roof + ", Windows=" + windows + ", Has Garage=" + hasGarage + "]";
        }

        static class HouseBuilder {
            private String walls = "wood"; // Default
            private String roof = "shingles"; // Default
            private int windows = 4; // Default
            private boolean hasGarage = false; // Default

            public HouseBuilder buildWalls(String walls) {
                this.walls = walls;
                return this;
            }

            public HouseBuilder buildRoof(String roof) {
                this.roof = roof;
                return this;
            }

            public HouseBuilder buildWindows(int windows) {
                this.windows = windows;
                return this;
            }

            public HouseBuilder buildGarage(boolean hasGarage) {
                this.hasGarage = hasGarage;
                return this;
            }

            public House build() {
                return new House(this);
            }
        }
    }

    public class BuilderDemo {
        public static void main(String[] args) {
            House customHouse = new House.HouseBuilder()
                .buildWalls("brick")
                .buildWindows(8)
                .buildGarage(true)
                .build();

            System.out.println(customHouse);
        }
    }
    ```
    **Answer:**
    The final state of the `customHouse` object's fields will be:
    *   `walls`: "brick"
    *   `roof`: "shingles" (default, as `buildRoof` was not called)
    *   `windows`: 8
    *   `hasGarage`: `true`

    **Explanation:**
    1.  A `House.HouseBuilder` instance is created. Its fields are initialized with defaults: `walls="wood"`, `roof="shingles"`, `windows=4`, `hasGarage=false`.
    2.  `.buildWalls("brick")` is called. `builder.walls` is updated to "brick".
    3.  `.buildWindows(8)` is called. `builder.windows` is updated to 8.
    4.  `.buildGarage(true)` is called. `builder.hasGarage` is updated to `true`.
    5.  `.build()` is called. A new `House` object is created, taking the `builder`'s current state.
    6.  The `House` constructor copies `builder.walls` ("brick"), `builder.roof` ("shingles"), `builder.windows` (8), and `builder.hasGarage` (`true`) to its own fields.
    7.  The `System.out.println(customHouse)` will output: `House [Walls=brick, Roof=shingles, Windows=8, Has Garage=true]`.

7.  **Question:** Consider the following Strategy pattern implementation. What will be the output of the `main` method?

    ```java
    interface PaymentStrategy {
        void pay(int amount);
    }

    class CreditCardPayment implements PaymentStrategy {
        private String cardNumber;

        public CreditCardPayment(String cardNumber) {
            this.cardNumber = cardNumber;
        }

        @Override
        public void pay(int amount) {
            System.out.println(amount + " paid with credit card " + cardNumber);
        }
    }

    class PayPalPayment implements PaymentStrategy {
        private String email;

        public PayPalPayment(String email) {
            this.email = email;
        }

        @Override
        public void pay(int amount) {
            System.out.println(amount + " paid using PayPal account " + email);
        }
    }

    class ShoppingCart {
        private PaymentStrategy paymentStrategy;

        public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
            this.paymentStrategy = paymentStrategy;
        }

        public void checkout(int amount) {
            if (paymentStrategy == null) {
                System.out.println("No payment strategy set.");
                return;
            }
            paymentStrategy.pay(amount);
        }
    }

    public class StrategyDemo {
        public static void main(String[] args) {
            ShoppingCart cart = new ShoppingCart();

            cart.checkout(100); // No strategy set yet

            cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
            cart.checkout(250);

            cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
            cart.checkout(75);
        }
    }
    ```
    **Answer:**
    ```
    No payment strategy set.
    250 paid with credit card 1234-5678-9012-3456
    75 paid using PayPal account user@example.com
    ```
    **Explanation:**
    1.  A `ShoppingCart` object `cart` is created. Initially, `cart.paymentStrategy` is `null`.
    2.  `cart.checkout(100)` is called. Since `paymentStrategy` is `null`, it prints "No payment strategy set.".
    3.  `cart.setPaymentStrategy(new CreditCardPayment("..."))` is called. The `cart`'s strategy is now a `CreditCardPayment` instance.
    4.  `cart.checkout(250)` is called. The `pay` method of `CreditCardPayment` is invoked, printing "250 paid with credit card 1234-5678-9012-3456".
    5.  `cart.setPaymentStrategy(new PayPalPayment("..."))` is called. The `cart`'s strategy is updated to a `PayPalPayment` instance.
    6.  `cart.checkout(75)` is called. The `pay` method of `PayPalPayment` is invoked, printing "75 paid using PayPal account user@example.com".

**Part 3: Code Writing (4 questions)**

8.  **Question:** Implement a basic thread-safe Singleton pattern for a `Logger` class in Java. Ensure that only one instance of `Logger` can ever be created and that it's safe for concurrent access.
    **Answer:**
    ```java
    public class Logger {
        // Volatile keyword ensures that changes to the instance variable are immediately visible to other threads.
        private static volatile Logger instance;

        private Logger() {
            // Private constructor to prevent direct instantiation
            System.out.println("Logger instance created.");
        }

        // Double-checked locking for thread-safe lazy initialization
        public static Logger getInstance() {
            if (instance == null) { // First check: without locking, for performance
                synchronized (Logger.class) { // Synchronize only if instance is null
                    if (instance == null) { // Second check: inside lock, to prevent multiple instantiations
                        instance = new Logger();
                    }
                }
            }
            return instance;
        }

        public void log(String message) {
            System.out.println("LOG: " + message);
        }

        // Example usage:
        public static void main(String[] args) {
            Logger logger1 = Logger.getInstance();
            logger1.log("Application started.");

            Logger logger2 = Logger.getInstance();
            logger2.log("User logged in.");

            System.out.println("Are logger1 and logger2 the same instance? " + (logger1 == logger2));

            // Demonstrate multithreaded access
            Runnable task = () -> {
                Logger threadLogger = Logger.getInstance();
                threadLogger.log(Thread.currentThread().getName() + " accessed logger.");
            };

            Thread t1 = new Thread(task, "Thread-1");
            Thread t2 = new Thread(task, "Thread-2");
            t1.start();
            t2.start();
        }
    }
    ```
    **Partial Credit Guidance:**
    *   Correct private constructor: +2 points.
    *   Static `getInstance()` method: +2 points.
    *   Lazy initialization (`if (instance == null)`): +2 points.
    *   Thread-safety mechanism (e.g., `synchronized` block or `volatile` with double-checked locking): +4 points.
    *   Correct usage demonstration: +2 points.

9.  **Question:** Refactor the following code snippet, which uses `if-else` statements, into a more flexible design using the Strategy pattern. The goal is to calculate shipping costs based on different methods.

    ```java
    class Order {
        private double weight;
        private String shippingMethod; // "standard", "express", "international"

        public Order(double weight, String shippingMethod) {
            this.weight = weight;
            this.shippingMethod = shippingMethod;
        }

        public double calculateShippingCost() {
            if (shippingMethod.equals("standard")) {
                return 5.0 + (weight * 0.5);
            } else if (shippingMethod.equals("express")) {
                return 10.0 + (weight * 1.0);
            } else if (shippingMethod.equals("international")) {
                return 20.0 + (weight * 2.5);
            } else {
                throw new IllegalArgumentException("Unknown shipping method: " + shippingMethod);
            }
        }
    }

    public class ShippingDemo {
        public static void main(String[] args) {
            Order order1 = new Order(2.0, "standard");
            System.out.println("Standard shipping cost: " + order1.calculateShippingCost()); // Expected: 6.0

            Order order2 = new Order(1.5, "express");
            System.out.println("Express shipping cost: " + order2.calculateShippingCost()); // Expected: 11.5
        }
    }
    ```
    **Answer:**
    ```java
    // 1. Define the Strategy interface
    interface ShippingStrategy {
        double calculateCost(double weight);
    }

    // 2. Implement Concrete Strategies
    class StandardShipping implements ShippingStrategy {
        @Override
        public double calculateCost(double weight) {
            return 5.0 + (weight * 0.5);
        }
    }

    class ExpressShipping implements ShippingStrategy {
        @Override
        public double calculateCost(double weight) {
            return 10.0 + (weight * 1.0);
        }
    }

    class InternationalShipping implements ShippingStrategy {
        @Override
        public double calculateCost(double weight) {
            return 20.0 + (weight * 2.5);
        }
    }

    // 3. Context class that uses a Strategy
    class Order {
        private double weight;
        private ShippingStrategy shippingStrategy; // Reference to the strategy

        public Order(double weight, ShippingStrategy shippingStrategy) {
            this.weight = weight;
            this.shippingStrategy = shippingStrategy;
        }

        // Method to change strategy dynamically if needed
        public void setShippingStrategy(ShippingStrategy shippingStrategy) {
            this.shippingStrategy = shippingStrategy;
        }

        public double calculateShippingCost() {
            if (shippingStrategy == null) {
                throw new IllegalStateException("Shipping strategy not set.");
            }
            return shippingStrategy.calculateCost(weight);
        }
    }

    // 4. Client code
    public class ShippingDemoRefactored {
        public static void main(String[] args) {
            // Using Standard Shipping
            Order order1 = new Order(2.0, new StandardShipping());
            System.out.println("Standard shipping cost: " + order1.calculateShippingCost()); // Expected: 6.0

            // Using Express Shipping
            Order order2 = new Order(1.5, new ExpressShipping());
            System.out.println("Express shipping cost: " + order2.calculateShippingCost()); // Expected: 11.5

            // Changing strategy for an existing order
            order1.setShippingStrategy(new InternationalShipping());
            System.out.println("Order 1 now with International shipping cost: " + order1.calculateShippingCost()); // Expected: 25.0
        }
    }
    ```
    **Partial Credit Guidance:**
    *   Creation of `ShippingStrategy` interface: +3 points.
    *   Implementation of at least two concrete strategy classes: +4 points.
    *   Modification of `Order` class to hold `ShippingStrategy` and delegate `calculateShippingCost`: +4 points.
    *   Correct client usage demonstrating strategy selection: +3 points.

10. **Question:** You have an existing `OldPrinter` class with a `printDocument(String[] lines)` method. You need to integrate it with a new system that expects a `NewPrinter` interface with a `print(List<String> text)` method. Implement the Adapter pattern to make `OldPrinter` compatible with the `NewPrinter` interface.

    ```java
    import java.util.List;
    import java.util.Arrays;

    // Existing "adaptee" class
    class OldPrinter {
        public void printDocument(String[] lines) {
            System.out.println("--- Old Printer Output ---");
            for (String line : lines) {
                System.out.println(line);
            }
            System.out.println("------------------------");
        }
    }

    // Target interface
    interface NewPrinter {
        void print(List<String> text);
    }

    // Your task: Implement the Adapter here
    class OldPrinterAdapter implements NewPrinter {
        private OldPrinter oldPrinter;

        public OldPrinterAdapter(OldPrinter oldPrinter) {
            this.oldPrinter = oldPrinter;
        }

        @Override
        public void print(List<String> text) {
            // Convert List<String> to String[] for the OldPrinter
            String[] lines = text.toArray(new String[0]);
            oldPrinter.printDocument(lines);
        }
    }

    // Client code
    public class PrinterAdapterDemo {
        public static void main(String[] args) {
            OldPrinter oldPrinter = new OldPrinter();
            // oldPrinter.printDocument(new String[]{"Line 1", "Line 2"}); // Direct usage

            NewPrinter newPrinter = new OldPrinterAdapter(oldPrinter);
            List<String> document = Arrays.asList("New System Document Line A", "New System Document Line B", "New System Document Line C");
            newPrinter.print(document); // Using the adapter
        }
    }
    ```
    **Answer:** (The `OldPrinterAdapter` class is the required implementation)
    ```java
    import java.util.List;
    import java.util.Arrays;

    // Existing "adaptee" class
    class OldPrinter {
        public void printDocument(String[] lines) {
            System.out.println("--- Old Printer Output ---");
            for (String line : lines) {
                System.out.println(line);
            }
            System.out.println("------------------------");
        }
    }

    // Target interface
    interface NewPrinter {
        void print(List<String> text);
    }

    // Your task: Implement the Adapter here
    class OldPrinterAdapter implements NewPrinter {
        private OldPrinter oldPrinter; // Holds an instance of the adaptee

        public OldPrinterAdapter(OldPrinter oldPrinter) {
            this.oldPrinter = oldPrinter;
        }

        @Override
        public void print(List<String> text) {
            // The adapter performs the conversion required by the adaptee
            String[] lines = text.toArray(new String[0]); // Convert List<String> to String[]
            oldPrinter.printDocument(lines); // Delegate the call to the adaptee
        }
    }

    // Client code
    public class PrinterAdapterDemo {
        public static void main(String[] args) {
            OldPrinter oldPrinter = new OldPrinter();

            // Create an adapter for the old printer
            NewPrinter newPrinter = new OldPrinterAdapter(oldPrinter);

            // Now the old printer can be used through the new interface
            List<String> document = Arrays.asList("New System Document Line A", "New System Document Line B", "New System Document Line C");
            newPrinter.print(document); // Using the adapter
        }
    }
    ```
    **Partial Credit Guidance:**
    *   Creation of `OldPrinterAdapter` class implementing `NewPrinter`: +4 points.
    *   `OldPrinterAdapter` having a reference to `OldPrinter` (composition): +3 points.
    *   `print` method correctly converting `List<String>` to `String[]`: +4 points.
    *   `print` method correctly calling `oldPrinter.printDocument()`: +3 points.

11. **Question:** Implement a simple Factory Method pattern to create different types of `Shape` objects (e.g., `Circle`, `Rectangle`). You should have an abstract `Shape` class/interface and an abstract `ShapeFactory` with concrete factory implementations.

    ```java
    // 1. Product Interface/Abstract Class
    interface Shape {
        void draw();
    }

    // 2. Concrete Products
    class Circle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Circle.");
        }
    }

    class Rectangle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Rectangle.");
        }
    }

    // 3. Abstract Creator (Factory)
    abstract class ShapeFactory {
        public abstract Shape createShape();
    }

    // 4. Concrete Creators (Factories)
    class CircleFactory extends ShapeFactory {
        @Override
        public Shape createShape() {
            return new Circle();
        }
    }

    class RectangleFactory extends ShapeFactory {
        @Override
        public Shape createShape() {
            return new Rectangle();
        }
    }

    // 5. Client Code
    public class FactoryMethodDemo {
        public static void main(String[] args) {
            ShapeFactory circleFactory = new CircleFactory();
            Shape circle = circleFactory.createShape();
            circle.draw();

            ShapeFactory rectangleFactory = new RectangleFactory();
            Shape rectangle = rectangleFactory.createShape();
            rectangle.draw();
        }
    }
    ```
    **Answer:** (The `ShapeFactory`, `CircleFactory`, and `RectangleFactory` classes are the required implementation)
    ```java
    // 1. Product Interface/Abstract Class
    interface Shape {
        void draw();
    }

    // 2. Concrete Products
    class Circle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Circle.");
        }
    }

    class Rectangle implements Shape {
        @Override
        public void draw() {
            System.out.println("Drawing a Rectangle.");
        }
    }

    // 3. Abstract Creator (Factory)
    abstract class ShapeFactory {
        // The factory method - subclasses implement this to return specific products
        public abstract Shape createShape();

        // Other methods can be defined here, operating on the product
        public void renderShape() {
            Shape shape = createShape(); // Delegates creation to subclass
            shape.draw();
        }
    }

    // 4. Concrete Creators (Factories)
    class CircleFactory extends ShapeFactory {
        @Override
        public Shape createShape() {
            return new Circle(); // Creates a concrete Circle product
        }
    }

    class RectangleFactory extends ShapeFactory {
        @Override
        public Shape createShape() {
            return new Rectangle(); // Creates a concrete Rectangle product
        }
    }

    // 5. Client Code
    public class FactoryMethodDemo {
        public static void main(String[] args) {
            // Client works with the abstract factory interface
            ShapeFactory circleFactory = new CircleFactory();
            Shape circle = circleFactory.createShape(); // Creates a Circle
            circle.draw(); // Drawing a Circle.

            ShapeFactory rectangleFactory = new RectangleFactory();
            Shape rectangle = rectangleFactory.createShape(); // Creates a Rectangle
            rectangle.draw(); // Drawing a Rectangle.

            // Demonstrating the renderShape method from the abstract factory
            System.out.println("\nUsing renderShape method:");
            circleFactory.renderShape();
            rectangleFactory.renderShape();
        }
    }
    ```
    **Partial Credit Guidance:**
    *   `Shape` interface/abstract class and concrete `Circle`/`Rectangle` products: +4 points.
    *   Abstract `ShapeFactory` with `createShape()` abstract method: +4 points.
    *   Concrete `CircleFactory` and `RectangleFactory` extending `ShapeFactory` and implementing `createShape()`: +6 points.
    *   Correct client usage: +2 points.

**Part 4: Design/Debugging Problems (3 questions)**

12. **Question:** You are developing a logging system for a large application. The `Logger` class needs to be accessible from various parts of the application, but it's crucial that there is only one instance of the `Logger` throughout the entire application's lifecycle to ensure consistent logging behavior and resource management. Which design pattern would you use to enforce this requirement, and why? Provide a high-level design (class names and method signatures).
    **Answer:**
    The **Singleton pattern** would be used to enforce the requirement that only one instance of the `Logger` class exists throughout the application's lifecycle.
    **Why:**
    *   **Ensures Single Instance:** The core purpose of the Singleton pattern is to restrict the instantiation of a class to a single object. This directly addresses the requirement for a unique `Logger` instance.
    *   **Global Access Point:** It provides a global point of access to that single instance, making it easy for any part of the application to retrieve and use the logger without needing to pass it around explicitly.
    *   **Resource Management:** For a logger, this is important for managing file handles, network connections (if logging to a remote server), or ensuring that log messages are written in a consistent order without conflicts.

    **High-Level Design:**

    ```java
    public class Logger {
        // 1. Private static instance of the class itself.
        //    'volatile' ensures visibility across threads for thread-safety.
        private static volatile Logger instance;

        // 2. Private constructor to prevent external instantiation.
        private Logger() {
            // Initialization logic for the logger (e.g., open log file, configure formatter)
            System.out.println("Logger instance initialized.");
        }

        // 3. Public static method to get the single instance.
        //    Uses double-checked locking for thread-safe lazy initialization.
        public static Logger getInstance() {
            if (instance == null) { // First check: no lock, for performance
                synchronized (Logger.class) { // Synchronize only if instance is null
                    if (instance == null) { // Second check: inside lock, to prevent multiple creations
                        instance = new Logger();
                    }
                }
            }
            return instance;
        }

        // Public methods for logging
        public void logInfo(String message) {
            System.out.println("[INFO] " + message);
        }

        public void logError(String message) {
            System.err.println("[ERROR] " + message);
        }

        // (Optional) Example of how to prevent deserialization from creating new instances
        protected Object readResolve() {
            return getInstance();
        }
    }
    ```
    **Partial Credit Guidance:**
    *   Correctly identifying Singleton pattern: +3 points.
    *   Explaining *why* it's suitable (single instance, global access, resource management): +4 points.
    *   Providing a private constructor: +2 points.
    *   Providing a public static `getInstance()` method: +2 points.
    *   Demonstrating thread-safety (e.g., `synchronized` block, `volatile`): +4 points.

13. **Question:** A new e-commerce platform needs to integrate with various payment gateways (e.g., PayPal, Stripe, Square, custom bank transfer). The requirement is that the system should be able to process payments using any of these gateways, and new gateways should be easily addable in the future without modifying the core payment processing logic. Which design pattern is most suitable for this scenario, and how would you structure the classes?
    **Answer:**
    The **Strategy pattern** is most suitable for this scenario.
    **How it addresses the problem:**
    *   **Interchangeable Algorithms:** Each payment gateway can be considered a different "algorithm" or "strategy" for processing a payment. The Strategy pattern allows these algorithms to be encapsulated in separate classes.
    *   **Open/Closed Principle:** New payment gateways can be added by simply creating new concrete strategy classes without modifying the existing `PaymentProcessor` (context) or other gateway implementations. This adheres to the Open/Closed Principle.
    *   **Runtime Flexibility:** The specific payment gateway to use can be chosen dynamically at runtime based on user preference, transaction type, or other business rules.

    **Class Structure:**

    ```java
    // 1. Strategy Interface: Defines the common interface for all payment methods.
    interface PaymentStrategy {
        void pay(double amount);
    }

    // 2. Concrete Strategies: Implementations for each payment gateway.
    class PayPalPayment implements PaymentStrategy {
        private String email;
        public PayPalPayment(String email) { this.email = email; }
        @Override
        public void pay(double amount) {
            System.out.println("Processing $" + amount + " payment via PayPal account: " + email);
            // ... PayPal API integration logic ...
        }
    }

    class StripePayment implements PaymentStrategy {
        private String cardNumber;
        private String cvv;
        public StripePayment(String cardNumber, String cvv) { this.cardNumber = cardNumber; this.cvv = cvv; }
        @Override
        public void pay(double amount) {
            System.out.println("Processing $" + amount + " payment via Stripe with card: " + cardNumber.substring(0,4) + "...");
            // ... Stripe API integration logic ...
        }
    }

    class BankTransferPayment implements PaymentStrategy {
        private String bankAccount;
        public BankTransferPayment(String bankAccount) { this.bankAccount = bankAccount; }
        @Override
        public void pay(double amount) {
            System.out.println("Processing $" + amount + " payment via Bank Transfer to account: " + bankAccount);
            // ... Bank Transfer specific logic ...
        }
    }

    // 3. Context Class: Uses the strategy.
    class PaymentProcessor {
        private PaymentStrategy paymentStrategy;

        // Constructor or setter to inject the strategy
        public PaymentProcessor(PaymentStrategy paymentStrategy) {
            this.paymentStrategy = paymentStrategy;
        }

        public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
            this.paymentStrategy = paymentStrategy;
        }

        public void processPayment(double amount) {
            if (paymentStrategy == null) {
                throw new IllegalStateException("Payment strategy not set.");
            }
            System.out.println("Initiating payment processing...");
            paymentStrategy.pay(amount); // Delegate to the chosen strategy
            System.out.println("Payment processing completed.");
        }
    }

    // 4. Client Code: Creates context and concrete strategies.
    public class PaymentGatewayClient {
        public static void main(String[] args) {
            // Pay with PayPal
            PaymentProcessor processor = new PaymentProcessor(new PayPalPayment("john.doe@example.com"));
            processor.processPayment(150.75);

            System.out.println("\n--- Switching Payment Method ---");

            // Pay with Stripe
            processor.setPaymentStrategy(new StripePayment("1234567890123456", "123"));
            processor.processPayment(299.99);

            System.out.println("\n--- Adding a new method (e.g., SquarePayment) would just involve creating a new Concrete Strategy ---");
        }
    }
    ```
    **Partial Credit Guidance:**
    *   Correctly identifying Strategy pattern: +3 points.
    *   Explaining *why* it's suitable (interchangeable algorithms, OCP, runtime flexibility): +4 points.
    *   Defining `PaymentStrategy` interface: +2 points.
    *   Implementing at least two concrete `PaymentStrategy` classes: +4 points.
    *   Structuring `PaymentProcessor` (context) to hold and delegate to the strategy: +3 points.

14. **Question:** You've encountered a bug where a complex `Configuration` object's construction is inconsistent. Different parts of the application are setting its properties in various orders, and sometimes required properties are missed, leading to runtime errors. The `Configuration` object has many optional and a few mandatory fields, and their validation is complex. Which design pattern could help ensure consistent and valid object creation? How would you apply it to the `Configuration` object?
    **Answer:**
    The **Builder pattern** would be the most effective design pattern to ensure consistent and valid construction of the complex `Configuration` object.
    **How it addresses the problem:**
    *   **Step-by-Step Construction:** The Builder pattern separates the construction of a complex object from its representation. It allows for the step-by-step creation of an object, providing a clear sequence for setting properties.
    *   **Immutability (Optional but Recommended):** The `Configuration` object itself can be made immutable once built, preventing its state from being changed inconsistently after creation.
    *   **Encapsulated Construction Logic:** The builder encapsulates all the complex construction logic, including default values and validation rules, away from the client code.
    *   **Guaranteed Valid State:** The `build()` method of the builder can include final validation checks, ensuring that the `Configuration` object is only returned in a fully valid and consistent state. Mandatory fields can be checked here.
    *   **Readability:** The fluent API (method chaining) often provided by builders makes the object creation process very readable and self-documenting.

    **Application to `Configuration` Object (High-Level Design):**

    ```java
    // The complex object with many properties
    public class Configuration {
        private final String databaseUrl;
        private final int maxConnections;
        private final boolean enableCaching;
        private final String logLevel;
        private final int timeoutSeconds; // Mandatory field

        // Private constructor, only accessible by the Builder
        private Configuration(ConfigurationBuilder builder) {
            this.databaseUrl = builder.databaseUrl;
            this.maxConnections = builder.maxConnections;
            this.enableCaching = builder.enableCaching;
            this.logLevel = builder.logLevel;
            this.timeoutSeconds = builder.timeoutSeconds; // Mandatory
        }

        // Getters for all properties (no setters to ensure immutability)
        public String getDatabaseUrl() { return databaseUrl; }
        public int getMaxConnections() { return maxConnections; }
        public boolean isEnableCaching() { return enableCaching; }
        public String getLogLevel() { return logLevel; }
        public int getTimeoutSeconds() { return timeoutSeconds; }

        @Override
        public String toString() {
            return "Configuration [\n" +
                   "  databaseUrl=" + databaseUrl + ",\n" +
                   "  maxConnections=" + maxConnections + ",\n" +
                   "  enableCaching=" + enableCaching + ",\n" +
                   "  logLevel=" + logLevel + ",\n" +
                   "  timeoutSeconds=" + timeoutSeconds + "\n" +
                   "]";
        }

        // Static nested Builder class
        public static class ConfigurationBuilder {
            // Same fields as Configuration, but mutable
            private String databaseUrl = "jdbc:mysql://localhost:3306/appdb"; // Default
            private int maxConnections = 10; // Default
            private boolean enableCaching = true; // Default
            private String logLevel = "INFO"; // Default
            private int timeoutSeconds; // MANDATORY - no default

            // Builder methods for setting properties, returning 'this' for chaining
            public ConfigurationBuilder withDatabaseUrl(String databaseUrl) {
                this.databaseUrl = databaseUrl;
                return this;
            }

            public ConfigurationBuilder withMaxConnections(int maxConnections) {
                if (maxConnections <= 0) throw new IllegalArgumentException("Max connections must be positive.");
                this.maxConnections = maxConnections;
                return this;
            }

            public ConfigurationBuilder enableCaching(boolean enableCaching) {
                this.enableCaching = enableCaching;
                return this;
            }

            public ConfigurationBuilder withLogLevel(String logLevel) {
                this.logLevel = logLevel;
                return this;
            }

            // Mandatory field setter
            public ConfigurationBuilder withTimeoutSeconds(int timeoutSeconds) {
                if (timeoutSeconds <= 0) throw new IllegalArgumentException("Timeout must be positive.");
                this.timeoutSeconds = timeoutSeconds;
                return this;
            }

            // The build method: performs final validation and creates the Configuration object
            public Configuration build() {
                // Perform final validation for mandatory fields or complex rules
                if (this.timeoutSeconds <= 0) {
                    throw new IllegalStateException("TimeoutSeconds is a mandatory field and must be set.");
                }
                // More complex validation can go here
                return new Configuration(this);
            }
        }
    }

    // Client Code Example
    public class ConfigurationClient {
        public static void main(String[] args) {
            // Valid construction
            Configuration config1 = new Configuration.ConfigurationBuilder()
                .withDatabaseUrl("jdbc:postgresql://prod:5432/maindb")
                .withMaxConnections(20)
                .enableCaching(false)
                .withLogLevel("DEBUG")
                .withTimeoutSeconds(30) // Mandatory
                .build();
            System.out.println("Config 1:\n" + config1);

            System.out.println("\n---------------------\n");

            // Construction with defaults for optional fields
            Configuration config2 = new Configuration.ConfigurationBuilder()
                .withDatabaseUrl("jdbc:h2:mem:testdb")
                .withTimeoutSeconds(15) // Mandatory
                .build();
            System.out.println("Config 2 (with defaults):\n" + config2);

            System.out.println("\n---------------------\n");

            // Attempt to build without mandatory field (will throw IllegalStateException)
            try {
                Configuration invalidConfig = new Configuration.ConfigurationBuilder()
                    .withDatabaseUrl("jdbc:sqlite:data.db")
                    // .withTimeoutSeconds(0) // Missing or invalid mandatory field
                    .build();
                System.out.println(invalidConfig);
            } catch (IllegalStateException e) {
                System.err.println("Error building configuration: " + e.getMessage());
            }
        }
    }
    ```
    **Partial Credit Guidance:**
    *   Correctly identifying Builder pattern: +3 points.
    *   Explaining *why* it's suitable (step-by-step, validation, immutability, readability): +4 points.
    *   Defining `Configuration` class with private constructor and final fields: +3 points.
    *   Defining a static nested `ConfigurationBuilder` class with mutable fields: +3 points.
    *   Implementing fluent setter methods in the builder: +2 points.
    *   Implementing a `build()` method with final validation and object creation: +3 points.

## Course Conclusion

Congratulations on completing the "Design Patterns in Java" course! You've embarked on a transformative journey that has equipped you with powerful tools to write more robust, maintainable, and scalable Java applications. No longer will you approach common software design challenges with ad-hoc solutions; instead, you now possess a rich vocabulary of proven patterns to guide your architectural decisions.

Throughout this course, you've gained practical experience with creational patterns like Singleton, Factory Method, Abstract Factory, and Builder, learning how to manage object creation effectively. You've mastered structural patterns such as Adapter, Decorator, and Composite, enabling you to compose objects into larger structures while maintaining flexibility. Furthermore, you've explored behavioral patterns like Strategy, Observer, Command, and State, which empower you to define clear communication and interaction between objects. You can now identify recurring design problems, select the most appropriate pattern to solve them, and implement these solutions with confidence in Java. This skillset not only enhances your coding abilities but also significantly improves your capacity to understand, discuss, and contribute to complex software projects.

### Where to Go Next: Continued Learning and Resources

Your journey into software design is just beginning. Design patterns are a foundation, and continuous practice and exploration will solidify your understanding and expand your expertise. Here are some suggestions for your next steps:

1.  **Read Classic Design Patterns Books:**
    *   **"Head First Design Patterns" by Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra:** An excellent, highly engaging, and practical follow-up that reinforces concepts with real-world examples and a unique teaching style.
    *   **"Design Patterns: Elements of Reusable Object-Oriented Software" (GoF book) by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides:** The original seminal work. While more academic, it's invaluable for deep dives and understanding the foundational theory.

2.  **Explore Advanced Patterns and Architectures:**
    *   **Enterprise Integration Patterns:** Look into patterns specifically designed for integrating disparate systems, often found in microservices or distributed architectures.
    *   **Microservices Design Patterns:** Understand how patterns adapt and new patterns emerge in the context of microservices (e.g., Circuit Breaker, Saga, API Gateway).
    *   **Architectural Patterns:** Explore higher-level architectural patterns like MVC, MVP, MVVM, Layered Architecture, and Event-Driven Architecture.

3.  **Contribute to Open Source or Build More Projects:**
    *   **Identify Patterns in Existing Codebases:** Analyze open-source Java projects (e.g., Spring Framework, Apache Commons) to see how professional developers apply design patterns in real-world scenarios.
    *   **Start Your Own Projects:** The best way to learn is by doing. Pick a small project idea and consciously try to apply specific design patterns you've learned. Experiment with different patterns for the same problem.

4.  **Join Developer Communities:**
    *   **Online Forums & Q&A:** Participate in discussions on platforms like Stack Overflow, Reddit's r/java, or specific design pattern forums.
    *   **Local User Groups:** Connect with other Java developers in your area. Sharing experiences and discussing design challenges is a fantastic way to learn.

5.  **Consider Related Cohortia Courses:**
    *   **Advanced Java Development:** Deepen your Java language skills and explore more advanced features.
    *   **Software Architecture Fundamentals:** Learn about the principles and practices of designing large-scale software systems.
    *   **Object-Oriented Analysis and Design (OOAD):** Focus on the process of identifying objects, their responsibilities, and relationships to create robust designs.
    *   **Spring Boot Microservices:** Learn how to build modern, scalable applications using a popular Java framework, where many design patterns are implicitly or explicitly used.

You have now built a strong foundation in designing elegant and effective Java solutions. The principles and patterns you've learned will serve you well throughout your career, enabling you to tackle complex problems with confidence and contribute meaningfully to any development team. Keep coding, keep learning, and keep applying these powerful design tools!

---


> End of Syllabus: Design Patterns in Java
> Course ID: design-patterns-in-java
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Software Engineering, Architecture & Design
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
