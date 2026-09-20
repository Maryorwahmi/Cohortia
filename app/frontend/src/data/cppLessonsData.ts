export interface SlideItem {
  number: number;
  title: string;
  points: string[];
}

export interface CppLessonDetail {
  summary: {
    overview: string;
    objectives: string[];
    takeaways: string[];
  };
  slides: SlideItem[];
  transcript: {
    time: string;
    speaker: string;
    text: string;
  }[];
  startingCode: string;
}

export const CPP_LESSONS_DETAILS: Record<string, CppLessonDetail> = {
  cpp_l1: {
    summary: {
      overview: "Welcome to your focused 10-minute training block on Inheritance and Access Specifiers in C++. In this module, we dissect how the public, protected, and private access keywords affect base-to-derived class relationships, and examine systems-level structural permissions under the hood.",
      objectives: [
        "Explain public, protected, and private inheritance paradigms.",
        "Assess how member access rights change in derived classes.",
        "Prevent permission leakage inside complex component hierarchies."
      ],
      takeaways: [
        "Identify member visibility flags inside your compiled C++ objects.",
        "Demonstrate secure protected state access without exposing variables publicly.",
        "Verify compile-time access specifier rules using the sandbox compiler."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Introduction & Context Alignment",
        points: [
          "Welcome to the C++ Certified Professional Programmer pathway!",
          "I am Tutor Chinedu, and I will be your on-demand guide throughout this advanced curriculum.",
          "This 10-minute training module focuses on Inheritance and Access Specifiers.",
          "In C++, inheritance is not just a mechanism for code reuse—it defines strict memory layout and interface contract scopes."
        ]
      },
      {
        number: 2,
        title: "Public, Protected, and Private Inheritance Modes",
        points: [
          "Public Inheritance matches the 'is-a' relationship, preserving original specifier levels in the derived class.",
          "Protected Inheritance downgrades public base members to 'protected' in the derived class.",
          "Private Inheritance downgrades public and protected base members to 'private' in the derived class, expressing 'implemented-in-terms-of'.",
          "Private base members always remain completely inaccessible to derived classes, preserving absolute encapsulate boundaries."
        ]
      },
      {
        number: 3,
        title: "Access Specifiers Matrix",
        points: [
          "Access Specifier | Accessible inside Base? | Accessible in Derived? | Accessible in main()?",
          "public           | Yes                      | Yes                    | Yes (if public inheritance)",
          "protected        | Yes                      | Yes                    | No",
          "private          | Yes                      | No                     | No"
        ]
      },
      {
        number: 4,
        title: "Systems-Level Resource Access Rules",
        points: [
          "Always verify your inheritance specifiers. Relying on default 'class' inheritance defaults to private, causing silent compilation errors.",
          "To expose selected hidden base members, use the 'using Base::member' declaration inside your derived class.",
          "Remember: C++ access controls are checked purely at compile-time and incur zero runtime performance overhead."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hello and welcome back to the Cohortia C++ Professional Labs. I'm Chinedu, your on-demand tutor, and today we're embarking on our first 10-minute high-density lesson: Inheritance and Access Specifiers."
      },
      {
        time: "1:30",
        speaker: "Tutor Chinedu",
        text: "When moving from general language syntax to systems-level programming, understanding how the compiler handles class access specifiers is essential. C++ gives you granular control over memory layout and interface inheritance. Let's look at the three inheritance keywords: public, protected, and private."
      },
      {
        time: "3:00",
        speaker: "Tutor Chinedu",
        text: "With public inheritance, public stays public, protected stays protected, and private stays completely hidden. This models standard object-oriented hierarchies. But what about private inheritance? It's a powerful tool! It transforms all public and protected base members into private members. We use this to say 'this class is implemented in terms of that class', hiding the base implementation from the outside world."
      },
      {
        time: "5:30",
        speaker: "Tutor Chinedu",
        text: "Let's check the systems-level impact. Access controls are resolved entirely at compile-time. There is no performance penalty or vtable lookup overhead for private access checks. The compiler checks permission flags, and if they match, compiles down to direct memory addresses."
      },
      {
        time: "7:45",
        speaker: "Tutor Chinedu",
        text: "In the sandbox editor, you will find our starting codebase featuring a Base class and derived options. Play with the inheritance specifiers. See what happens when you comment out the compilation error lines. Once you run the simulation, we'll verify your conceptual alignment. Let's dive in!"
      }
    ],
    startingCode: `#include <iostream>
#include <string>

class Base {
public:
    int publicVar = 1;
protected:
    int protectedVar = 2;
private:
    int privateVar = 3;
};

// Public inheritance: public stays public, protected stays protected
class PublicDerived : public Base {
public:
    void debug() {
        std::cout << "PublicDerived access -> public: " << publicVar 
                  << ", protected: " << protectedVar << std::endl;
        // std::cout << privateVar; // UNCOMMENT TO TRIGGER COMPILE ERROR: privateVar is private in Base
    }
};

// Private inheritance: all inherited members become private
class PrivateDerived : private Base {
public:
    void debug() {
        std::cout << "PrivateDerived access -> public: " << publicVar 
                  << ", protected: " << protectedVar << std::endl;
    }
};

int main() {
    std::cout << "=== RUNNING SYSTEM ACCESS VERIFICATION ===" << std::endl;
    PublicDerived d1;
    d1.debug();
    std::cout << "Direct access to publicVar: " << d1.publicVar << std::endl;

    PrivateDerived d2;
    d2.debug();
    // std::cout << d2.publicVar; // UNCOMMENT TO TRIGGER COMPILE ERROR: private inheritance blocked public access!
    
    std::cout << "✓ Compilation and access checks complete." << std::endl;
    return 0;
}`
  },
  cpp_l2: {
    summary: {
      overview: "Explore how C++ achieves dynamic polymorphism at the assembly level using Virtual Table pointers (vptr) and Virtual Tables (vtable). Understand the runtime performance cost of dynamic binding.",
      objectives: [
        "Illustrate the mechanics of virtual tables (vtable) and virtual pointers (vptr).",
        "Contrast compile-time static binding with runtime dynamic dispatch.",
        "Calculate object memory overhead introduced by virtual function declarations."
      ],
      takeaways: [
        "Examine the size difference between a class with virtual functions and one without.",
        "Trace virtual table lookups during dynamic polymorphism calls.",
        "Assess optimization techniques like final specifiers to bypass dynamic dispatch."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Dynamic Dispatch and Virtual Mechanics",
        points: [
          "Hello! I am Tutor Chinedu, and in this 10-minute block, we demystify virtual dispatch.",
          "In C++, declaring a function 'virtual' requests dynamic polymorphism, which tells the compiler to defer function resolution to runtime.",
          "Under the hood, this introduces two vital constructs: the Virtual Table (vtable) and the Virtual Pointer (vptr)."
        ]
      },
      {
        number: 2,
        title: "How Virtual Tables (vtable) Work",
        points: [
          "Every class containing at least one virtual function gets a static 'vtable'—an array of function pointers created at compile-time.",
          "Each instance of that class contains a hidden member called '_vptr' (Virtual Table Pointer) as its first data member.",
          "When you call a virtual method on a base pointer, the CPU dereferences the pointer, grabs '_vptr', offsets into the vtable, and jumps to the function address.",
          "This dynamic dispatch process adds exactly two pointer dereferences of latency, bypassing inline caching optimizations."
        ]
      },
      {
        number: 3,
        title: "Memory Footprint and sizeof Overhead",
        points: [
          "On a standard 64-bit architecture, a pointer consumes exactly 8 bytes of memory.",
          "Thus, adding 'virtual' to a class increases its sizeof footprint by 8 bytes to store the hidden '_vptr' member.",
          "This overhead exists once per object instance, regardless of how many virtual functions the class defines.",
          "Always design with awareness of this layout constraint when creating millions of small telemetry entities."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Welcome back! Chinedu here, your personal tutor. In this lesson, we are breaking down one of the most elegant, yet misunderstood features of C++: Virtual Functions and the hidden vtable mechanism."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "Many developers know that 'virtual' enables dynamic binding, but what actually happens inside the RAM? When a class declares a virtual function, the compiler inserts a hidden pointer—the vptr—right at the start of the object's byte block. This vptr points to a static array of function pointers called the vtable."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "When you invoke a virtual function via a base pointer, the CPU cannot do a direct jump. Instead, it must look up the address stored in the vtable. This double-dereference indirection prevents the compiler from inlining the function, adding a small overhead. This is why high-frequency systems prefer templates over virtual inheritance for low-latency paths."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Let's check the size of our classes. In the starting codebase, we'll compare static and dynamic methods. Run the simulation to see how the virtual table resolves LaserPrinter objects. Let's get to work!"
      }
    ],
    startingCode: `#include <iostream>

class StaticPrinter {
public:
    void print() { std::cout << "Static print" << std::endl; }
};

class VirtualPrinter {
public:
    virtual void print() { std::cout << "Virtual print" << std::endl; }
};

class BasePrinter {
public:
    virtual void print() {
        std::cout << "Printing from base BasePrinter" << std::endl;
    }
    void showInfo() {
        std::cout << "Static binding: BasePrinter" << std::endl;
    }
};

class LaserPrinter : public BasePrinter {
public:
    void print() override {
        std::cout << "Dynamic binding: LaserPrinter (vtable resolved)" << std::endl;
    }
    void showInfo() {
        std::cout << "Static binding: LaserPrinter" << std::endl;
    }
};

int main() {
    std::cout << "=== UNDER THE HOOD: VTABLE ANALYSIS ===" << std::endl;
    
    std::cout << "Size of class without virtual functions: " << sizeof(StaticPrinter) << " byte(s)" << std::endl;
    std::cout << "Size of class with virtual functions:    " << sizeof(VirtualPrinter) << " bytes (stores _vptr!)" << std::endl;
    
    std::cout << "\\n--- Executing Dynamic Binding Example ---" << std::endl;
    BasePrinter* ptr = new LaserPrinter();
    
    // Resolves at runtime via _vptr -> vtable[0]
    ptr->print(); 
    
    // Resolves at compile-time based on pointer type (BasePrinter)
    ptr->showInfo(); 

    delete ptr;
    std::cout << "✓ Memory successfully cleaned up." << std::endl;
    return 0;
}`
  },
  cpp_l3: {
    summary: {
      overview: "Master pure virtual functions and abstract classes. Learn how to specify formal interface contracts that guarantee derived conformity without specifying implementation.",
      objectives: [
        "Define pure virtual functions and abstract class characteristics.",
        "Implement interface-only segregation patterns.",
        "Examine pure virtual destructor syntax and implementation requirements."
      ],
      takeaways: [
        "Enforce interface contracts across third-party plugin modules.",
        "Avoid compile-time errors when deriving from abstract classes.",
        "Utilize abstract class pointers to build clean mock test fixtures."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Pure Virtual Functions and Interface Design",
        points: [
          "Hello! Chinedu here, guiding you through pure virtual functions and formal interface design in C++.",
          "An Abstract Class is a class designed specifically to be inherited from, containing at least one pure virtual function.",
          "The syntax 'virtual void func() = 0;' declares a pure virtual function, signaling that this class specifies an interface contract without any default implementation."
        ]
      },
      {
        number: 2,
        title: "Abstract Class Instantiation Constraints",
        points: [
          "C++ strictly prohibits instantiating an abstract class directly (e.g. 'Base b;' is a compile error).",
          "Derived classes MUST override and implement ALL pure virtual functions to become instantiable (concrete) classes.",
          "This constraint guarantees compile-time enforcement of interface compliance across your entire development team."
        ]
      },
      {
        number: 3,
        title: "Pure Virtual Destructors",
        points: [
          "Sometimes you want to make a class abstract but have no obvious pure virtual functions. You can declare the destructor as pure virtual: 'virtual ~Base() = 0;'.",
          "Unlike standard pure virtual functions, you MUST provide an out-of-class definition for a pure virtual destructor.",
          "This is because derived destructors implicitly call base destructors during stack unwinding cleanup phases."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hi there! Chinedu here, your C++ guide. Welcome to our 10-minute focus session on Abstract Classes and Pure Virtual Functions. Today, we'll learn how to enforce architectural rules."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "In C++, there is no native 'interface' keyword like in Java or C#. Instead, we use abstract classes containing pure virtual functions. Placing '= 0' at the end of a virtual function tells the compiler: 'This function has no base implementation. Any class inheriting from me must write its own concrete override.'"
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "This compile-time safety is highly robust. If a junior developer creates a class inheriting from your device interface but forgets to implement the 'shutdown' function, the compiler blocks their build immediately. It is impossible to instantiate an incomplete class, guaranteeing runtime safety."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Open the sandbox, check our Interface skeleton, and see how the compiler protects abstract types. Run the simulation and let's move forward!"
      }
    ],
    startingCode: `#include <iostream>

// Formal interface contract
class DeviceInterface {
public:
    // Pure virtual functions make this class Abstract
    virtual void initialize() = 0;
    virtual void shutdown() = 0;
    
    // Virtual destructor is crucial for abstract base classes
    virtual ~DeviceInterface() {
        std::cout << "DeviceInterface destroyed" << std::endl;
    }
};

class NetworkDevice : public DeviceInterface {
private:
    int socketId;
public:
    NetworkDevice(int id) : socketId(id) {}
    
    void initialize() override {
        std::cout << "NetworkDevice: Binding socket " << socketId << " to port 3000..." << std::endl;
    }
    
    void shutdown() override {
        std::cout << "NetworkDevice: Closing socket " << socketId << " gracefully." << std::endl;
    }
};

int main() {
    std::cout << "=== FORMAL INTERACTIVE CONTRACT VERIFICATION ===" << std::endl;
    
    // DeviceInterface test; // UNCOMMENT TO TRIGGER COMPILE ERROR: cannot instantiate abstract class!
    
    DeviceInterface* device = new NetworkDevice(101);
    device->initialize();
    device->shutdown();
    
    delete device;
    std::cout << "✓ Abstract base pointer cleanup complete." << std::endl;
    return 0;
}`
  },
  cpp_l4: {
    summary: {
      overview: "Resolve multiple inheritance ambiguities and master the virtual base inheritance paradigm to eliminate the notorious Diamond Problem inside C++ object layouts.",
      objectives: [
        "Analyze the Diamond Problem and duplicate base subobject layouts.",
        "Deploy 'virtual inheritance' to force single-subobject instantiation.",
        "Establish constructor execution paths inside virtual inheritance graphs."
      ],
      takeaways: [
        "Inspect the compiler layout of diamond classes using diagnostic checks.",
        "Avoid memory duplication and ambiguous function call compile errors.",
        "Construct reliable transceiver components using virtual base mechanics."
      ]
    },
    slides: [
      {
        number: 1,
        title: "The Diamond Problem in Multiple Inheritance",
        points: [
          "Hello! Chinedu here, welcome to Chapter 1.4: Multiple Inheritance and the Diamond Problem.",
          "C++ supports multiple inheritance, allowing a class to derive from more than one base parent.",
          "The Diamond Problem occurs when class D inherits from B and C, which both inherit from a single common ancestor A.",
          "Without special protection, class D gets TWO distinct copies of A's variables, causing memory waste and compile-time ambiguity."
        ]
      },
      {
        number: 2,
        title: "Solving Diamond Duplication with Virtual Inheritance",
        points: [
          "To resolve this, we use Virtual Inheritance: 'class B : public virtual A' and 'class C : public virtual A'.",
          "This instructs the compiler to share a single, unified subobject of A among all virtual derivations.",
          "Under the hood, B and C store a 'virtual base pointer' (vbptr) inside their memory buffers to lookup A's shared offsets.",
          "This resolves ambiguous member accesses like 'd.member' and guarantees layout integrity."
        ]
      },
      {
        number: 3,
        title: "Constructor Calling Sequence",
        points: [
          "In a virtual inheritance graph, the most-derived class constructor is responsible for directly invoking the virtual base constructor.",
          "The intermediate parents (B and C) bypass calling the virtual base constructor, preventing redundant initializations.",
          "Understand this special calling order to prevent uninitialized base parameters inside deep systems architecture."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Welcome back! Chinedu here. In this 10-minute block, we confront multiple inheritance and its classic architectural challenge: the Diamond Problem."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "Imagine a Base Component class, with transmitter and receiver classes inheriting from it. If a Transceiver inherits from both, it receives two separate copies of the base powerState variable! This causes memory waste and compile errors when you write 'xc.powerState' because the compiler doesn't know which path to follow."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "By adding the 'virtual' keyword to the inheritance line of Transmitter and Receiver, we tell the compiler: 'Keep only one instance of Component in the final layout.' The compiler inserts offset tables so both derived paths share the exact same base memory block. Problem solved!"
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Let's examine the calling sequence. In the sandbox codebase, you'll see how virtual inheritance binds the transceiver state. Run the code, check the outputs, and let's proceed!"
      }
    ],
    startingCode: `#include <iostream>

class Component {
public:
    int powerState;
    Component() : powerState(1) {
        std::cout << "Component allocated (Base Instance)" << std::endl;
    }
};

// Use 'virtual' inheritance to solve the Diamond Problem
class Transmitter : public virtual Component {
public:
    void transmit() {
        std::cout << "Transmitting on power state " << powerState << std::endl;
    }
};

class Receiver : public virtual Component {
public:
    void receive() {
        std::cout << "Receiving on power state " << powerState << std::endl;
    }
};

class Transceiver : public Transmitter, public Receiver {
public:
    Transceiver() {
        std::cout << "Transceiver allocated (Unified derived)" << std::endl;
    }
    
    void status() {
        // Without 'virtual' inheritance, 'powerState' would be ambiguous
        // and cause a compile error because Transmitter and Receiver would have duplicate copies!
        std::cout << "Current unified transceiver power: " << powerState << std::endl;
    }
};

int main() {
    std::cout << "=== DIAMOND LAYOUT SIMULATION ===" << std::endl;
    Transceiver xc;
    
    xc.status();
    xc.transmit();
    xc.receive();
    
    return 0;
}`
  },
  cpp_l5: {
    summary: {
      overview: "Understand the catastrophic memory leak bugs that emerge when base classes omit virtual destructors. Master RAII resource teardown safety during derived class deallocations.",
      objectives: [
        "Explain virtual destructor requirements for base pointer allocations.",
        "Trace destructor call chains in base-to-derived stack unwinding.",
        "Prevent partial destruction memory leaks inside systems programming."
      ],
      takeaways: [
        "Identify leaky class behaviors using basic heap monitoring.",
        "Compare compile outputs with and without virtual base destructors.",
        "Configure custom smart pointers to enforce correct destruction paths."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Virtual Destructors and Resource Cleanup",
        points: [
          "Hello! I am Tutor Chinedu, welcome to Chapter 1.5: Virtual Destructors and Memory Safety.",
          "In C++, when you delete a derived object through a pointer to a base class, the base destructor is invoked.",
          "If the base class destructor is NOT declared virtual, ONLY the base class destructor executes.",
          "The derived class destructor is completely bypassed, causing catastrophic leaks of heap memory, file handles, or network sockets."
        ]
      },
      {
        number: 2,
        title: "Destruction Sequence and Stack Unwinding",
        points: [
          "With a virtual base destructor, the runtime looks up the derived destructor in the vtable first.",
          "The derived destructor executes first, frees its local resources, and then automatically invokes the base destructor.",
          "This complete deallocation chain guarantees that all heap buffers allocated by Derived are safely reclaimed."
        ]
      },
      {
        number: 3,
        title: "Architectural Rule of Thumb",
        points: [
          "Any class containing at least one virtual function MUST declare a virtual destructor.",
          "If you do not want virtual destructors, do not use base pointers for derived allocations.",
          "To completely prohibit inheritance, mark your class with the 'final' specifier, allowing the compiler to optimize destruction paths safely."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hi there, Chinedu here! Welcome to this critical 10-minute module on Virtual Destructors and Memory Safety. We will examine how to prevent silent memory leak bugs."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "Imagine allocating a derived class on the heap using a Base pointer, like 'Base* ptr = new LeakyDerived();'. If you call 'delete ptr;', and the Base destructor is non-virtual, the compiler only generates code to call the Base destructor. Any heap arrays or sockets created inside LeakyDerived remain stranded in memory!"
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "By adding the simple word 'virtual' to the base destructor, we tell the compiler: 'Route deallocation via the virtual table.' The compiler ensures that the derived destructor runs first to release heap buffers, before letting the base class clean up its own members."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Check out the starting code in the sandbox. We've built a leaky base class so you can inspect how a leak occurs in action. Fix it by declaring the base destructor virtual and run the simulation! Let's get code-safe!"
      }
    ],
    startingCode: `#include <iostream>

class BadBase {
public:
    BadBase() { std::cout << "BadBase allocated" << std::endl; }
    
    // CRITICAL BUG: Missing 'virtual' keyword on base destructor!
    ~BadBase() { 
        std::cout << "BadBase destroyed (Non-virtual)" << std::endl; 
    }
};

class LeakyDerived : public BadBase {
private:
    int* heapResource;
public:
    LeakyDerived() {
        std::cout << "LeakyDerived: Allocating 100 integers on the heap..." << std::endl;
        heapResource = new int[100];
    }
    
    ~LeakyDerived() {
        std::cout << "LeakyDerived: Reclaiming heap memory now..." << std::endl;
        delete[] heapResource;
    }
};

int main() {
    std::cout << "=== RUNNING MEMORY LEAK DIAGNOSTIC ===" << std::endl;
    
    std::cout << "Allocating LeakyDerived via BadBase pointer:" << std::endl;
    BadBase* ptr = new LeakyDerived();
    
    std::cout << "\\nDeleting base pointer:" << std::endl;
    delete ptr; // Notice that LeakyDerived destructor is NEVER called!
    
    std::cout << "\\nCRITICAL INFO: Heap resources leaked! To fix this, add the 'virtual' keyword before BadBase's destructor." << std::endl;
    return 0;
}`
  },
  cpp_l6: {
    summary: {
      overview: "Deep dive into Run-Time Type Information (RTTI) and type-safe casting. Master dynamic_cast overhead, static_cast speed, and reinterpret_cast danger.",
      objectives: [
        "Explain dynamic type checking and RTTI mechanics.",
        "Compare performance costs of dynamic_cast vs. static_cast.",
        "Deploy reinterpret_cast safely for binary hardware buffers."
      ],
      takeaways: [
        "Use dynamic_cast to identify downcast types at runtime.",
        "Determine vtable pointer shifts during polymorphic downcasts.",
        "Optimize hot code paths by caching RTTI typeid tags."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Run-Time Type Information (RTTI) and Casting",
        points: [
          "Welcome! Chinedu here, guiding you through Run-Time Type Information (RTTI) and the casting landscape.",
          "C++ is a strongly-typed language, but polymorphic systems require type checking at runtime.",
          "RTTI provides this runtime inspection, populating the 'typeid' operator and facilitating 'dynamic_cast' validations."
        ]
      },
      {
        number: 2,
        title: "Dynamic Cast and its Vtable Overhead",
        points: [
          "The 'dynamic_cast<T*>' cast converts a base pointer to a derived pointer safely.",
          "At runtime, it inspects the object's vtable and parses the type metadata structure to verify if the conversion is valid.",
          "If valid, it returns the derived address; if invalid, it returns 'nullptr' (or throws bad_cast for references).",
          "This string/RTTI lookup introduces branch prediction overhead, making it unsuitable for hot-path game loop iterations."
        ]
      },
      {
        number: 3,
        title: "Static, Reinterpret, and Const Casts",
        points: [
          "static_cast: Performed entirely at compile-time with zero runtime overhead. Does not perform safety checks, relying on developer authority.",
          "reinterpret_cast: Reinterprets raw bytes as a different type. Highly dangerous, used primarily for low-level socket serialization.",
          "const_cast: Strips or adds 'const' specifiers from variables, bypassing read-only protections."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Welcome back! Chinedu here, your on-demand tutor. Today we are exploring casting: dynamic_cast, static_cast, and the inner workings of RTTI."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "In C++, downcasting is inherently dangerous. If you have a Base pointer and want to call a method specific to DerivedA, how do you verify if the object is actually DerivedA? We use dynamic_cast, which queries the RTTI metadata located inside the vtable. If the types match, the cast succeeds. Otherwise, it returns nullptr."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "But remember, dynamic_cast is slow! It traverses the type inheritance tree. For high-speed systems, we prefer static_cast which resolves at compile-time, or we design using visitor patterns to eliminate runtime downcasting altogether."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Let's check the code. We have built a dynamic identify-and-execute sandbox featuring multiple derived shapes. Run the simulation, analyze the dynamic type names, and let's master casting!"
      }
    ],
    startingCode: `#include <iostream>
#include <typeinfo>

class Base {
public:
    virtual void dummy() {} // Base must be polymorphic (contain at least one virtual function) for RTTI to work!
};

class DerivedA : public Base {
public:
    void actionA() {
        std::cout << "DerivedA: Launching telemetry receiver." << std::endl;
    }
};

class DerivedB : public Base {
public:
    void actionB() {
        std::cout << "DerivedB: Initializing database sync." << std::endl;
    }
};

void processBasePointer(Base* obj) {
    if (obj == nullptr) return;

    // Display runtime type name using typeid operator
    std::cout << "RTTI: Identified class name -> " << typeid(*obj).name() << std::endl;

    // dynamic_cast checks RTTI vtable metadata at runtime
    if (DerivedA* a = dynamic_cast<DerivedA*>(obj)) {
        a->actionA();
    } else if (DerivedB* b = dynamic_cast<DerivedB*>(obj)) {
        b->actionB();
    } else {
        std::cout << "Conversion failed: Unknown Derived class!" << std::endl;
    }
}

int main() {
    std::cout << "=== RUNNING RTTI & DYNAMIC CAST AUDIT ===" << std::endl;
    
    Base* b1 = new DerivedA();
    Base* b2 = new DerivedB();

    processBasePointer(b1);
    processBasePointer(b2);

    delete b1;
    delete b2;
    return 0;
}`
  },
  cpp_l7: {
    summary: {
      overview: "Understand C++ overriding, overloading, and the subtle 'Name Hiding' rule that shadows base class functions. Enforce override safety using modern compiler attributes.",
      objectives: [
        "Differentiate overriding from overloading and hiding rules.",
        "Demonstrate how derived method signatures shadow base functions.",
        "Deploy the 'using' declaration to bring hidden base methods into scope."
      ],
      takeaways: [
        "Prevent silent function mismatch bugs using the override attribute.",
        "Uncover hidden base functions inside derived namespace boundaries.",
        "Configure clean overloaded method access in complex inheritance systems."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Overriding, Overloading and Hiding Rules",
        points: [
          "Hello! I am Tutor Chinedu, welcome to Chapter 1.7: Overriding, Overloading and Hiding Rules.",
          "Overloading happens when functions in the same scope share a name but declare different parameter signatures.",
          "Overriding occurs when a derived class replaces a base virtual function using the exact same signature.",
          "Name Hiding is a C++ lookup rule: if a derived class declares ANY function named 'func', it hides ALL overloaded functions named 'func' in the base class, regardless of parameter signatures."
        ]
      },
      {
        number: 2,
        title: "Name Hiding Mechanisms",
        points: [
          "During compilation, lookup stops as soon as the compiler finds the function name 'func' in the Derived class scope.",
          "It will not check the Base class for matching signatures, causing compilation failures if the parameter types do not match the derived signature.",
          "To resolve this, use 'using Base::func;' in the derived class, bringing base overloads directly into the derived scope."
        ]
      },
      {
        number: 3,
        title: "The override Keyword",
        points: [
          "Always mark derived virtual functions with the 'override' keyword.",
          "This triggers compiler verification: if the signature doesn't match the base virtual method exactly (e.g., mismatching const or pointers), the compiler reports an error immediately.",
          "This prevents silent bugs where you accidentally create a new virtual overload instead of overriding the existing one."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hi there! Chinedu here, your on-demand tutor. Today, we're dissecting overriding, overloading, and the subtle compile-time trap known as Name Hiding."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "Many developers are surprised to discover that declaring a function in a derived class hides all functions with the same name in the base class. For example, if Base defines 'func(double)' and Derived defines 'func(int)', calling 'derived.func(3.14)' actually invokes 'func(int)' after casting! The base double overload is completely shadowed."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "To fix this name hiding, we use the 'using Base::func' declaration. This exposes the base overloads to the derived class namespace, enabling proper overloaded lookup. Additionally, we'll look at the override keyword, which forces the compiler to verify our dynamic methods."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Open the sandbox and check our overload test layout. Try un-commenting the name hiding resolution to see how C++ resolves scopes. Run the simulation, and let's get building!"
      }
    ],
    startingCode: `#include <iostream>

class Base {
public:
    void process(double x) {
        std::cout << "Base process(double): " << x << std::endl;
    }
    
    virtual void print() {
        std::cout << "Base print layout" << std::endl;
    }
};

class Derived : public Base {
public:
    // Solve Name Hiding by bringing Base's overloads into Derived's scope:
    // using Base::process; 

    // This definition HIDES Base::process(double) unless 'using Base::process' is un-commented!
    void process(int x) {
        std::cout << "Derived process(int): " << x << std::endl;
    }
    
    // override specifier ensures we match Base::print exactly
    void print() override {
        std::cout << "Derived print overrides Base print successfully." << std::endl;
    }
};

int main() {
    std::cout << "=== COMPILER NAMESPACE RESOLUTION ===" << std::endl;
    Derived d;
    
    d.process(100);     // Calls Derived::process(int)
    
    // d.process(3.14); // BUGS: if 'using' is commented, this calls process(int) with truncation!
    // Instead, we have to call Base scope manually if using is omitted:
    d.Base::process(3.14);
    
    d.print();
    return 0;
}`
  },
  cpp_l8: {
    summary: {
      overview: "Master the move semantics paradigm introduced in C++11. Contrast deep copy constructors with shallow move constructors utilizing rvalue references (&&) to avoid heap allocation overhead.",
      objectives: [
        "Explain rvalue references and std::move mechanics.",
        "Implement high-performance custom copy and move constructors.",
        "Verify resource-stealing pointer swaps inside systems level containers."
      ],
      takeaways: [
        "Determine heap memory performance metrics of copies vs. moves.",
        "Eliminate redundant heap allocations inside dynamic buffer classes.",
        "Enforce move-only behaviors for unique resource managers."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Move Semantics and Rvalue References",
        points: [
          "Hello! Chinedu here, welcome to Chapter 1.8: Custom Copy and Move Constructors.",
          "Before C++11, passing large objects caused heavy heap copies. Move Semantics allows us to 'steal' resources instead of copying them.",
          "An Rvalue Reference (declared with '&&') binds to temporary objects that are about to be destroyed, enabling safe resource stealing."
        ]
      },
      {
        number: 2,
        title: "Copy Constructor vs. Move Constructor",
        points: [
          "Copy Constructor (const T& other): Allocates a new heap buffer and copies all elements over. Safe, but highly expensive (O(N) time).",
          "Move Constructor (T&& other): Swaps pointers with the temporary object. Sets the other object's pointers to 'nullptr' to prevent double free.",
          "Move constructors run in O(1) constant time, eliminating heap allocations and dramatically accelerating telemetry stream buffers."
        ]
      },
      {
        number: 3,
        title: "The std::move Utility",
        points: [
          "The utility 'std::move(x)' does not actually move anything at runtime.",
          "Instead, it is a compile-time static cast that converts an lvalue into an rvalue reference, allowing the compiler to select the move constructor.",
          "Never access an object after moving it, as it is left in a valid but unspecified empty state."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hi there, Chinedu here! Welcome to this vital 10-minute masterclass on Move Semantics and Custom Constructors. This is the cornerstone of high-performance C++."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "In C++, copy constructors perform deep copies. If you have a vector with 1 million integers, copying it allocates a new heap buffer of 4 megabytes and copies every integer. Move semantics changes this. By using rvalue references—declared with double-ampersand—we can write a move constructor that simply steals the pointer of the temporary vector."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "Swapping pointers takes less than a nanosecond, regardless of how large the buffer is. In our starting code, we've implemented a custom Buffer class tracking allocations. Run the simulation to contrast deep copying with move construction."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Let's observe pointer stealing in action! Un-comment std::move inside the main function to trigger pointer theft. Let's get coding!"
      }
    ],
    startingCode: `#include <iostream>
#include <utility>
#include <algorithm>

class LargeBuffer {
public:
    int* data;
    size_t size;

    LargeBuffer(size_t s) : size(s) {
        data = new int[s];
        std::cout << "Allocated Buffer of size " << size << " on heap." << std::endl;
    }

    ~LargeBuffer() {
        delete[] data;
        std::cout << "Buffer deallocated from heap." << std::endl;
    }

    // 1. Copy Constructor: performs a deep copy
    LargeBuffer(const LargeBuffer& other) : size(other.size) {
        data = new int[size];
        std::copy(other.data, other.data + size, data);
        std::cout << "★ DEEP COPY executed for size: " << size << std::endl;
    }

    // 2. Move Constructor: steals resources (shallow pointer copy)
    LargeBuffer(LargeBuffer&& other) noexcept : data(other.data), size(other.size) {
        // Nullify other's pointers to prevent double-free on destruction!
        other.data = nullptr;
        other.size = 0;
        std::cout << "⚡ MOVE CONSTRUCTOR executed - pointer stolen instantly!" << std::endl;
    }
};

int main() {
    std::cout << "=== MOVE SEMANTICS VS COPY PERFORMANCE ===" << std::endl;
    
    std::cout << "Creating original buffer:" << std::endl;
    LargeBuffer original(100000);

    std::cout << "\\nTriggering Deep Copy:" << std::endl;
    LargeBuffer copy = original; // Deep copy

    std::cout << "\\nTriggering Move Constructor via std::move:" << std::endl;
    LargeBuffer moved = std::move(original); // pointer is swapped!
    
    std::cout << "\\nVerify original state after move: data is null? " 
              << (original.data == nullptr ? "YES" : "NO") << std::endl;

    return 0;
}`
  },
  cpp_l9: {
    summary: {
      overview: "Implement the standard Rule of Five and Rule of Zero templates to guarantee complete resource management safety across raw pointers, file systems, and threads.",
      objectives: [
        "Contrast the Rule of Five with the Rule of Zero.",
        "Implement destructor, copy/move constructors, and copy/move assignments.",
        "Design self-managed exception-safe RAII classes."
      ],
      takeaways: [
        "Avoid memory corruption bugs caused by default assignments.",
        "Leverage compiler-generated constructors using the default keyword.",
        "Configure clean assignment self-copy guard conditions."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Rule of Five and Rule of Zero Templates",
        points: [
          "Hello, I am Tutor Chinedu, welcome to Chapter 1.9: Master the Rule of Five and Rule of Zero.",
          "In C++, managing raw resources requires implementing five special member functions to prevent double-frees or leaks.",
          "These special members include: Destructor, Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment."
        ]
      },
      {
        number: 2,
        title: "The Rule of Five",
        points: [
          "The Rule of Five states: if you need to custom implement any of the five special functions, you likely need to implement all five.",
          "Copy/Move assignment operators must handle self-assignment checks ('if (this != &other)') to prevent deleting your own memory.",
          "By implementing all five, you guarantee that your objects behave perfectly whether copied, assigned, or moved."
        ]
      },
      {
        number: 3,
        title: "The Rule of Zero",
        points: [
          "The Rule of Zero states: prefer designing your classes so that they do not manage raw resources directly.",
          "Instead, use standard smart pointers (like std::unique_ptr) and standard wrappers (like std::string).",
          "By encapsulating resource ownership, the compiler automatically generates all five special functions with correct behaviors, eliminating manual memory errors."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hi there, Chinedu here! Welcome to our 10-minute focus block on the Rule of Five and the Rule of Zero. These are the gold standards of modern C++ resource management."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "In C++, if you write a custom destructor to free a raw pointer, you MUST write a copy constructor and a copy assignment operator. Otherwise, default copying will duplicate the pointer, causing a double-free crash when both objects are destroyed. This is the core of the Rule of Five."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "But what about the Rule of Zero? It is the modern ideal! It means using std::unique_ptr or std::vector instead of raw pointers. If your class only contains smart pointers, you don't write any destructors or copy routines. The compiler handles it automatically and safely. That is zero-code resource management!"
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Check our ResourceTracker codebase. It fully implements the Rule of Five so you can trace each call. Run the simulation and let's get resource-safe!"
      }
    ],
    startingCode: `#include <iostream>
#include <utility>

class ResourceTracker {
private:
    int* id;
public:
    ResourceTracker(int value) : id(new int(value)) {
        std::cout << "Allocated resource " << *id << std::endl;
    }
    
    // === RULE OF FIVE IMPLEMENTATION ===
    
    // 1. Destructor
    ~ResourceTracker() {
        if (id) {
            std::cout << "Destructor: freeing resource " << *id << std::endl;
            delete id;
        } else {
            std::cout << "Destructor: empty resource" << std::endl;
        }
    }
    
    // 2. Copy Constructor (Deep copy)
    ResourceTracker(const ResourceTracker& other) : id(new int(*other.id)) {
        std::cout << "Copy Constructor: duplicating resource " << *id << std::endl;
    }
    
    // 3. Copy Assignment Operator (Deep copy with self-guard)
    ResourceTracker& operator=(const ResourceTracker& other) {
        std::cout << "Copy Assignment operator" << std::endl;
        if (this != &other) { // Self-assignment check
            delete id;
            id = new int(*other.id);
        }
        return *this;
    }
    
    // 4. Move Constructor (Resource transfer)
    ResourceTracker(ResourceTracker&& other) noexcept : id(other.id) {
        std::cout << "Move Constructor: stealing resource" << std::endl;
        other.id = nullptr; // Nullify stolen pointer
    }
    
    // 5. Move Assignment Operator (Clean existing and transfer)
    ResourceTracker& operator=(ResourceTracker&& other) noexcept {
        std::cout << "Move Assignment operator" << std::endl;
        if (this != &other) {
            delete id; // Clean existing resource
            id = other.id;
            other.id = nullptr;
        }
        return *this;
    }
};

int main() {
    std::cout << "=== TEST RULE OF FIVE PROTOCOL ===" << std::endl;
    ResourceTracker a(101);
    ResourceTracker b = a;            // Triggers Copy Constructor
    ResourceTracker c = std::move(a); // Triggers Move Constructor
    
    return 0;
}`
  },
  cpp_l10: {
    summary: {
      overview: "Explore how to translate popular software design patterns like Strategy, Factory, and Singleton into high-performance, type-safe C++ implementation frameworks.",
      objectives: [
        "Design robust polymorphic interface patterns.",
        "Implement modern Factory generation routines using smart pointers.",
        "Mitigate thread-safety issues inside modern Singleton classes."
      ],
      takeaways: [
        "Construct expandable payment strategy engines utilizing unique_ptr.",
        "Configure double-checked lock-free thread-safe Singleton instances.",
        "Optimize coupling layers to enable hot-plugging of components."
      ]
    },
    slides: [
      {
        number: 1,
        title: "Object-Oriented Design Patterns in C++",
        points: [
          "Hello, I am Tutor Chinedu, welcome to the final chapter of Module 1: Object Oriented Interface Design Patterns.",
          "Design patterns are reusable solutions to architectural problems, but in C++, we must implement them with strict memory safety.",
          "We will explore the Strategy Pattern, demonstrating how to switch algorithms at runtime using polymorphic smart pointers."
        ]
      },
      {
        number: 2,
        title: "The Strategy Pattern with smart pointers",
        points: [
          "The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.",
          "Instead of raw base pointers, we use 'std::unique_ptr<Strategy>' to express clear, absolute ownership of active strategies.",
          "This avoids resource leaks and guarantees automatic deallocation when the context calculator changes strategies."
        ]
      },
      {
        number: 3,
        title: "Modern Thread-Safe Singleton (Meyers Singleton)",
        points: [
          "In modern C++ (C++11 and beyond), the safest way to implement a Singleton is the 'Meyers Singleton'.",
          "By declaring a local static variable inside a static getter function, the compiler guarantees thread-safe initialization.",
          "Always delete copy constructor and assignment operators to prevent duplicate Singleton creation."
        ]
      }
    ],
    transcript: [
      {
        time: "0:00",
        speaker: "Tutor Chinedu",
        text: "Hi there! Chinedu here, welcome to Chapter 1.10, the final training block of Module 1. Today we are combining OOP mechanics with software design patterns."
      },
      {
        time: "2:00",
        speaker: "Tutor Chinedu",
        text: "Design patterns like Factory and Strategy are powerful. But in C++, raw pointers can lead to leaks or ownership confusion. Modern C++ solves this by combining polymorphism with smart pointers. For instance, in our Strategy pattern, we manage interchangeable tax algorithms using std::unique_ptr."
      },
      {
        time: "4:30",
        speaker: "Tutor Chinedu",
        text: "This guarantees that when we swap tax strategies, the old one is automatically destroyed, and no memory leaks can occur. We'll also examine the Meyers Singleton, which leverages C++11 static rules to guarantee thread-safe initialization with zero mutex overhead."
      },
      {
        time: "7:00",
        speaker: "Tutor Chinedu",
        text: "Check out the Strategy Pattern skeleton in the sandbox. Run the code, swap some strategy instances, and let's finish Module 1 with style!"
      }
    ],
    startingCode: `#include <iostream>
#include <string>
#include <memory>

// Strategy Interface
class TaxStrategy {
public:
    virtual ~TaxStrategy() = default;
    virtual double calculateTax(double income) = 0;
};

// Strategy A
class USATax : public TaxStrategy {
public:
    double calculateTax(double income) override { 
        return income * 0.30; 
    }
};

// Strategy B
class UKTax : public TaxStrategy {
public:
    double calculateTax(double income) override { 
        return income * 0.20; 
    }
};

// Context Class
class TaxCalculator {
private:
    std::unique_ptr<TaxStrategy> strategy;
public:
    // Move unique ownership of strategy
    void setStrategy(std::unique_ptr<TaxStrategy> s) {
        strategy = std::move(s);
    }
    
    double compute(double income) {
        if (!strategy) {
            std::cout << "Warning: No tax strategy configured!" << std::endl;
            return 0.0;
        }
        return strategy->calculateTax(income);
    }
};

int main() {
    std::cout << "=== STRATEGY PATTERN POLYMORPHIC ENGINE ===" << std::endl;
    TaxCalculator calc;
    
    std::cout << "Setting USA Tax Strategy (30%):" << std::endl;
    calc.setStrategy(std::make_unique<USATax>());
    std::cout << "Tax on 100,000 USD: " << calc.compute(100000) << std::endl;

    std::cout << "\\nSetting UK Tax Strategy (20%):" << std::endl;
    calc.setStrategy(std::make_unique<UKTax>());
    std::cout << "Tax on 100,000 USD: " << calc.compute(100000) << std::endl;
    
    return 0;
}`
  }
};

export interface AssessmentQuestion {
  id: number;
  question: string;
  options?: string[];
  correctOption?: number;
  matchingPairs?: { left: string; right: string; correctRightIndex: number }[];
  type: "multiple-choice" | "matching" | "case-study";
  explanation: string;
}

export const CPP_ASSESSMENTS: Record<string, {
  quiz: AssessmentQuestion[];
  test: AssessmentQuestion[];
  exam: AssessmentQuestion[];
}> = {
  cpp_l1: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Under private inheritance, what access level do public members of the base class become inside the derived class?",
        options: [
          "They remain public",
          "They become protected",
          "They become private",
          "They are completely inaccessible"
        ],
        correctOption: 2,
        explanation: "Private inheritance (models 'implemented-in-terms-of') downgrades public and protected base members to private in the derived class, preventing child classes or external clients from accessing them."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which keyword allows a derived class to selectively restore the visibility of a base class member?",
        options: [
          "public",
          "using",
          "friend",
          "virtual"
        ],
        correctOption: 1,
        explanation: "A 'using' declaration (e.g. 'using Base::memberVar') inside the public section of the derived class selectively restores base visibility."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the inheritance modes with their corresponding member visibilities in the derived class:",
        matchingPairs: [
          { left: "Public Inheritance", right: "Preserves base access specifiers (models 'is-a')", correctRightIndex: 0 },
          { left: "Protected Inheritance", right: "Downgrades public base members to protected", correctRightIndex: 1 },
          { left: "Private Inheritance", right: "Downgrades all inherited base members to private", correctRightIndex: 2 }
        ],
        explanation: "Public keeps public/protected as is. Protected downgrades public to protected. Private makes everything private."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: A systems engineer implements private inheritance, but other developers report that calling derived class methods from a client socket triggers access errors. Propose the ideal C++ mechanism to restore access to specific base functions without exposing the whole base interface.",
        explanation: "To restore access to selective base class functions, add a 'using Base::function_name;' declaration inside the public section of the derived class. This keeps the implementation details private while exposing a safe, public subset."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the primary difference between a C++ 'class' and a 'struct' regarding default inheritance?",
        options: [
          "Classes support multiple inheritance; structs do not",
          "Classes default to private inheritance; structs default to public inheritance",
          "Structs cannot have member functions or constructors",
          "Classes are stored on the heap; structs are stored on the stack"
        ],
        correctOption: 1,
        explanation: "By default, a 'class' inherits privately ('class D : B'), whereas a 'struct' inherits publicly ('struct D : B'). Both are stored based on scope/allocation, and both support constructors and multiple inheritance."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Can a derived class access the 'private' members of its base class?",
        options: [
          "Yes, if public inheritance is specified",
          "Yes, if virtual inheritance is specified",
          "No, private base members are only accessible through base public/protected interfaces",
          "Yes, by using the scope resolution operator Base::"
        ],
        correctOption: 2,
        explanation: "Private base members are strictly encapsulated within the base class and cannot be accessed by derived classes unless declared as 'protected' or the derived class is a 'friend'."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which inheritance specifier should be used to model a clean, substitutable Liskov 'is-a' relationship?",
        options: [
          "Private",
          "Protected",
          "Public",
          "Virtual Private"
        ],
        correctOption: 2,
        explanation: "Public inheritance represents the classic Liskov Substitution Principle, which models a clean, public 'is-a' polymorphic contract."
      }
    ]
  },
  cpp_l2: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Where does the virtual pointer (_vptr) of a polymorphic class instance usually reside in memory?",
        options: [
          "In the static heap memory pool",
          "At the very start of the object's byte block, preceding other data members",
          "In the globally shared constant segment",
          "At the very end of the stack frame"
        ],
        correctOption: 1,
        explanation: "To minimize lookup offset calculations, compilers typically place the virtual pointer (_vptr) at the very start of the object's memory layout."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What is the memory size overhead of adding a virtual function to an empty C++ class on a 64-bit compiler?",
        options: [
          "0 bytes (resolved entirely at compile-time)",
          "4 bytes",
          "8 bytes",
          "16 bytes"
        ],
        correctOption: 2,
        explanation: "An empty class has size 1 byte. Adding a virtual function introduces a virtual pointer (_vptr), which on a 64-bit systems architecture consumes exactly 8 bytes."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the polymorphic mechanisms with their runtime/compile-time properties:",
        matchingPairs: [
          { left: "Virtual Pointer (_vptr)", right: "Resides in each object instance, pointing to the class vtable", correctRightIndex: 0 },
          { left: "Virtual Table (vtable)", right: "Static array of function pointers generated once per class at compile-time", correctRightIndex: 1 },
          { left: "Dynamic Binding", right: "Resolving function calls at runtime via vtable double dereferencing", correctRightIndex: 2 }
        ],
        explanation: "The _vptr is instance-specific. The vtable is static class-wide metadata. Dynamic binding handles function pointer indirection at runtime."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: A performance-critical game engine is suffering from frame-rate drops. The profiling logs indicate heavy branch mispredictions during virtual function calls inside the primary render loop. How does dynamic dispatch cause this, and how would you optimize the loop?",
        explanation: "Virtual function calls require double dereferencing (Base Pointer -> _vptr -> vtable -> function), which prevents compiler inlining and triggers CPU branch mispredictions. To optimize, replace polymorphism with static polymorphism (Templates/CRTP) or group objects by concrete type to execute sequential non-virtual loops."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the CPU-level performance cost of a virtual function call compared to a static function call?",
        options: [
          "No difference; compilers optimize both equally",
          "An indirect call requiring double pointer dereferencing, which prevents inlining",
          "A full system context switch to kernel space",
          "An extra allocation of dynamic heap memory"
        ],
        correctOption: 1,
        explanation: "Virtual calls require dereferencing the object's _vptr to find the vtable, then dereferencing the vtable to call the function pointer. This prevents compiler inlining, adding an overhead cost."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What keyword prevents a derived class from further overriding a virtual function?",
        options: [
          "final",
          "override",
          "static",
          "const"
        ],
        correctOption: 0,
        explanation: "Marking a virtual function with the 'final' specifier prevents any downstream derived classes from overriding it."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What happens if a virtual function is invoked from inside a base class constructor?",
        options: [
          "The derived override is successfully called",
          "The compiler throws a Segmentation Fault",
          "The base class version of the function is called",
          "The function call is quietly ignored"
        ],
        correctOption: 2,
        explanation: "During base constructor execution, the derived subobject's members are not yet constructed. C++ sets the vptr to the base vtable, meaning the base class version is invoked."
      }
    ]
  },
  cpp_l3: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which syntax declares a pure virtual function inside a C++ abstract class?",
        options: [
          "virtual void action() = delete;",
          "virtual void action() = 0;",
          "void action() = pure;",
          "virtual void action() {}"
        ],
        correctOption: 1,
        explanation: "The '= 0' syntax declares a pure virtual function, signaling to the compiler that the function has no implementation inside the abstract base class (though one can technically be defined separately)."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Can you instantiate an abstract class containing at least one pure virtual function?",
        options: [
          "Yes, if allocated on the heap using 'new'",
          "No, the compiler blocks instantiation of abstract types",
          "Yes, if it has a default constructor",
          "Only if all functions are pure virtual"
        ],
        correctOption: 1,
        explanation: "The compiler strictly forbids instantiating abstract classes, guaranteeing that no object can ever be created with missing, unresolved virtual interface methods."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the abstract class concepts with their architectural roles:",
        matchingPairs: [
          { left: "Pure Virtual Function", right: "Defines an interface contract that derived classes must override", correctRightIndex: 0 },
          { left: "Abstract Class", right: "An incomplete type that cannot be instantiated", correctRightIndex: 1 },
          { left: "Concrete Class", right: "Implements all pure virtual methods and is fully instantiable", correctRightIndex: 2 }
        ],
        explanation: "Pure virtual functions define interface contracts. Abstract classes are incomplete templates. Concrete classes fully implement all contracts."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: An IoT telemetry framework needs to handle multiple communication sockets (TCP, UDP, Bluetooth). Design an abstract interface class in C++ with safety guidelines to ensure developers implement connection, transmission, and disconnection contracts cleanly.",
        explanation: "Create an abstract class 'IDevice' containing pure virtual methods 'virtual void connect() = 0;', 'virtual void send(const std::string& data) = 0;', and 'virtual void disconnect() = 0;'. Declare a virtual destructor 'virtual ~IDevice() = default;' to guarantee safe cleanup through base pointers."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "In C++, can a pure virtual function have a definition body?",
        options: [
          "No, it is syntactically impossible and causes a compiler error",
          "Yes, it can have a body outside the class declaration, which derived classes can call",
          "Only if it is marked inline",
          "Yes, but only if the class contains no other member variables"
        ],
        correctOption: 1,
        explanation: "A pure virtual function can have an implementation body. Derived classes must still override it, but they can call 'Base::function()' to execute the default base logic."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "If a derived class fails to override a pure virtual function, what happens?",
        options: [
          "The program compiles but crashes with a runtime link error",
          "The derived class also becomes abstract, and the compiler blocks its instantiation",
          "The compiler automatically generates an empty default function",
          "The base class implementation is invoked implicitly"
        ],
        correctOption: 1,
        explanation: "A derived class that does not override all inherited pure virtual functions remains abstract itself, and the compiler will reject any attempt to instantiate it."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What is a class containing ONLY pure virtual functions and a default virtual destructor called?",
        options: [
          "A static library",
          "An Interface Class",
          "An Abstract Singleton",
          "A Template Functor"
        ],
        correctOption: 1,
        explanation: "Classes containing no state variables and only pure virtual functions are commonly referred to as Interface Classes (or pure abstract classes), defining clean, loose-coupling contracts."
      }
    ]
  },
  cpp_l4: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What compile-time error occurs when a class inherits from two parents that share a common ancestor, and attempts to access a member variable from that ancestor?",
        options: [
          "Access specifier violation",
          "Ambiguous member lookup error",
          "Stack overflow warning",
          "Unresolved external linker error"
        ],
        correctOption: 1,
        explanation: "Without virtual inheritance, the base ancestor is duplicated inside the derived object. Accessing its member variables triggers a compile-time ambiguity error."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "How do you declare virtual inheritance in C++ to resolve the Diamond Problem?",
        options: [
          "class Derived : virtual public Base",
          "class Derived : public Base(virtual)",
          "class Derived : public virtual Base",
          "Both A and C are syntactically valid"
        ],
        correctOption: 3,
        explanation: "Both 'virtual public Base' and 'public virtual Base' are syntactically equivalent and correctly inform the compiler to instantiate a single shared base subobject."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the multiple inheritance concepts with their layout implications:",
        matchingPairs: [
          { left: "Non-virtual Multiple Inheritance", right: "Duplicates the base ancestor subobject, creating memory redundancy", correctRightIndex: 0 },
          { left: "Virtual Inheritance", right: "Consolidates base ancestor into a single, shared subobject", correctRightIndex: 1 },
          { left: "Virtual Base Pointer (vbptr)", right: "An internal compiler offset pointer inside derived objects to locate the shared ancestor", correctRightIndex: 2 }
        ],
        explanation: "Non-virtual duplicates memory. Virtual inheritance shares it. The `vbptr` tracks the shared base location."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: An ultra-low latency trading matching system uses multiple inheritance to build a 'Transceiver' class. Profiling shows high memory footprint and cache misses. Explain the memory layout of the Diamond Problem with and without virtual inheritance, and recommend the best course of action.",
        explanation: "Without virtual inheritance, the base class is duplicated, increasing object size. With virtual inheritance, the base class is shared, but a vbptr is inserted, adding a dynamic offset pointer overhead. In ultra-low latency environments, avoid multiple inheritance diamonds altogether. Prefer Composition with interface classes to keep object buffers small and sequentially aligned."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "In a virtual inheritance hierarchy, which constructor is responsible for initializing the virtual base class?",
        options: [
          "The intermediate base classes",
          "The most-derived class constructor",
          "The base constructor is invoked automatically and cannot be parameterized",
          "None, virtual bases are initialized only via dynamic cast"
        ],
        correctOption: 1,
        explanation: "In virtual inheritance, intermediate base initializations are bypassed. The most-derived class constructor is responsible for directly invoking the virtual base class constructor."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Under the hood, how does virtual inheritance resolve the shared base location?",
        options: [
          "By creating duplicate variables in static memory",
          "Through internal compiler offsets and virtual base pointers (vbptr)",
          "By running a thread-safe mutex on the heap",
          "Through recursive template expansions"
        ],
        correctOption: 1,
        explanation: "Compilers insert virtual base pointers (vbptrs) into the derived objects. These point to a table of offsets that tell the derived classes where to find the shared base subobject."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What is the order of constructor calls in a Diamond inheritance hierarchy utilizing virtual inheritance?",
        options: [
          "Virtual Base, Intermediate Parent 1, Intermediate Parent 2, Most-Derived Class",
          "Parent 1, Parent 2, Virtual Base, Most-Derived Class",
          "Most-Derived Class, Parents, Virtual Base",
          "Constructor calls run concurrently in virtual environments"
        ],
        correctOption: 0,
        explanation: "The virtual base constructor runs first, followed by the non-virtual base classes in their declaration order, and finally the most-derived class constructor."
      }
    ]
  },
  cpp_l5: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What happens if you delete a derived class object through a pointer to a base class that lacks a virtual destructor?",
        options: [
          "The derived destructor is called, but not the base",
          "Only the base destructor is called, leaking derived class resources",
          "The compiler throws a syntax error on delete",
          "The operating system automatically reclaims all allocations"
        ],
        correctOption: 1,
        explanation: "Deleting through a base pointer with a non-virtual destructor bypasses the derived destructor entirely, leaking any heap, socket, or file allocations managed by the derived class."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "When does a class absolutely require a virtual destructor?",
        options: [
          "When the class has any member variables on the heap",
          "When the class contains at least one virtual function and is intended for inheritance",
          "When using private inheritance exclusively",
          "When the class is marked with the final keyword"
        ],
        correctOption: 1,
        explanation: "Any class containing at least one virtual function is intended to be used polymorphically. To ensure safe cleanup via base pointers, it must declare a virtual destructor."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the destruction specifier with its resource management behavior:",
        matchingPairs: [
          { left: "Virtual Destructor", right: "Ensures complete base-to-derived destruction chains", correctRightIndex: 0 },
          { left: "Non-virtual Destructor", right: "Bypasses derived class cleanup when deleted via base pointer", correctRightIndex: 1 },
          { left: "Pure Virtual Destructor", right: "Forces abstract base properties while still requiring an implementation body", correctRightIndex: 2 }
        ],
        explanation: "Virtual destructors ensure correct dynamic routing. Non-virtual destructors cause memory leaks. Pure virtual destructors must be defined to allow base-unwinding."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: An IoT embedded sensor application allocates and deletes 'SensorReading' derived structures millions of times per hour. Profilers detect a steady leak of heap memory, but the base destructor executes successfully. Explain the root cause and write the precise code edit to solve the leak.",
        explanation: "The root cause is that the base class destructor is non-virtual. Deleting via 'Base*' only calls the Base destructor, bypasses 'SensorReading''s destructor, and leaks its local data. To fix, declare 'virtual ~Base() = default;' inside the base class interface."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the order of destructor execution when a polymorphic derived class object is deleted?",
        options: [
          "Base Destructor, then Derived Destructor",
          "Derived Destructor, then Base Destructor",
          "Both destructors run concurrently",
          "Only the Derived destructor runs"
        ],
        correctOption: 1,
        explanation: "Destruction order is the exact reverse of construction. The derived destructor executes first, followed by the base class destructor."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Why does a pure virtual destructor require a complete implementation body?",
        options: [
          "Because the compiler refuses to link abstract classes",
          "To allow proper stack unwinding during the base class destruction phase",
          "To allocate space for the virtual table pointer",
          "Only to bypass static compiler warnings"
        ],
        correctOption: 1,
        explanation: "Even if a destructor is pure virtual, derived destructors must unwind and eventually call the base destructor. If the base destructor has no body, compilation or linking fails."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "If a class is marked 'final', should you declare its destructor virtual?",
        options: [
          "Yes, to support safe future inheritance",
          "No, a final class cannot be inherited, making a virtual destructor unnecessary and adding _vptr overhead",
          "Only if the final class contains no constructors",
          "Only if the class is stored on the heap"
        ],
        correctOption: 1,
        explanation: "If a class is marked 'final', it cannot be inherited. Declaring the destructor virtual adds useless _vptr pointer overhead and slows down allocation deconstruction."
      }
    ]
  },
  cpp_l6: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What does dynamic_cast do if a dynamic pointer cast fails at runtime?",
        options: [
          "It throws a compile-time assertion",
          "It returns nullptr for pointer conversions",
          "It raises a SIGSEGV signal",
          "It returns a cast of the default base object"
        ],
        correctOption: 1,
        explanation: "If a pointer 'dynamic_cast' fails, it returns 'nullptr' safely. If a reference 'dynamic_cast' fails, it throws a 'std::bad_cast' exception."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What compile-time condition must the base class satisfy to support dynamic_cast?",
        options: [
          "It must contain at least one virtual function",
          "It must have no private member variables",
          "It must declare a default static constructor",
          "It must inherit from std::enable_shared_from_this"
        ],
        correctOption: 0,
        explanation: "For RTTI and dynamic_cast to operate, the base class must be polymorphic (contain at least one virtual function), as the type metadata pointer is stored in the vtable."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the casting types with their runtime performance characteristics:",
        matchingPairs: [
          { left: "dynamic_cast", right: "Slowest cast; queries RTTI metadata at runtime with safety checks", correctRightIndex: 0 },
          { left: "static_cast", right: "Zero runtime cost; resolves types entirely at compile-time", correctRightIndex: 1 },
          { left: "reinterpret_cast", right: "Reinterprets raw binary bytes directly with no layout safety checks", correctRightIndex: 2 }
        ],
        explanation: "dynamic_cast checks types at runtime. static_cast is compile-time only. reinterpret_cast deals with raw binary conversions."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: A high-performance graphics engine parses mesh data packets. The developer uses dynamic_cast inside a loop running 100,000 times per second. Explain why the engine experiences performance drops, and rewrite the casting using a faster compile-time alternative.",
        explanation: "dynamic_cast traverses the type hierarchy at runtime, which is slow. For hot-path loops, replace dynamic_cast with static_cast, and track types manually using an enum tag, or implement a polymorphic Double-Dispatch Visitor pattern to eliminate runtime checks."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What does the typeid operator return?",
        options: [
          "A raw integer representation of the object size",
          "A reference to a std::type_info object containing type metadata",
          "A pointer to the virtual table array",
          "A string representation of the variable name"
        ],
        correctOption: 1,
        explanation: "The typeid operator returns a reference to 'const std::type_info', which contains type names and equality comparison metadata."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which cast should be used to strip the 'const' property from a variable?",
        options: [
          "static_cast",
          "reinterpret_cast",
          "const_cast",
          "dynamic_cast"
        ],
        correctOption: 2,
        explanation: "The 'const_cast' operator is the only cast capable of stripping or adding 'const' or 'volatile' modifiers."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Why is reinterpret_cast considered highly dangerous in C++?",
        options: [
          "It forces heap memory garbage collection",
          "It overrides access specifiers and turns variables public",
          "It performs zero type or offset safety checks, potentially resulting in undefined memory access",
          "It crashes if the source pointer is null"
        ],
        correctOption: 2,
        explanation: "reinterpret_cast instructs the compiler to treat a memory address as a completely different type. It performs no offset shifts or runtime checks, and easily leads to UB."
      }
    ]
  },
  cpp_l7: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the C++ 'Name Hiding' rule?",
        options: [
          "Hiding variable names inside nested scopes",
          "Declaring a function in a derived class hides all base class functions with that same name, regardless of parameters",
          "Encrypting symbol names inside compiled binaries",
          "Bypassing private member access checks using namespaces"
        ],
        correctOption: 1,
        explanation: "Name Hiding shadows base class overloads: if a derived class declares any function named 'foo', the compiler stops lookup there, hiding 'foo(double)' or 'foo(string)' declared in the base."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "How do you bring hidden base class functions back into the derived class scope?",
        options: [
          "By declaring them virtual inside the derived class",
          "Using a 'using Base::function_name;' declaration inside the derived class",
          "By adding the final keyword to base class definitions",
          "Through multiple inheritance structures"
        ],
        correctOption: 1,
        explanation: "Declaring 'using Base::function_name;' inside the derived class exposes all base class overloads to the derived class namespace, resolving name hiding issues."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the function definitions with their compiler behaviors:",
        matchingPairs: [
          { left: "Overloading", right: "Functions with the same name but different signatures in the same scope", correctRightIndex: 0 },
          { left: "Overriding", right: "Replacing a virtual base function with a matching signature in a derived class", correctRightIndex: 1 },
          { left: "Name Hiding", right: "Shadowing base class function names inside the derived scope", correctRightIndex: 2 }
        ],
        explanation: "Overloading deals with signature variations. Overriding replaces virtual functions. Name Hiding shadows namespaces."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: A junior engineer wrote 'void process(int)' in a derived class. They discover that calling 'derived.process(3.14)' no longer invokes 'Base::process(double)' but silently converts 3.14 to 3 and runs the integer method instead. Propose and explain the compiler-safe fix.",
        explanation: "This is Name Hiding. The compiler finds 'process(int)' inside 'Derived' and stops lookup, truncating 3.14. To fix, add 'using Base::process;' inside the derived class public section to merge base overloads into the derived scope."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What does the 'override' keyword guarantee at compile-time?",
        options: [
          "It forces the compiler to inline the function body",
          "It verifies that the function exactly overrides a virtual function inside the base class",
          "It makes the function public automatically",
          "It prevents further derived classes from overriding the function"
        ],
        correctOption: 1,
        explanation: "The 'override' keyword instructs the compiler to verify that the function signature matches a base virtual function. If signatures do not match exactly, the compiler fails with an error."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What is the difference between overriding and overloading in C++?",
        options: [
          "Overriding is compile-time; overloading is runtime",
          "Overloading uses identical parameter signatures; overriding requires different signatures",
          "Overriding replaces a base class virtual function; overloading defines same-named functions with different parameter lists",
          "Overriding is only allowed in structs"
        ],
        correctOption: 2,
        explanation: "Overriding replaces virtual base functions using matching signatures. Overloading is declaring functions with the same name but different parameters in the same scope."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Can you override a non-virtual function inside a derived class?",
        options: [
          "Yes, C++ compiles this but binds it statically, leading to Name Hiding instead of polymorphism",
          "No, it triggers a compile-time crash",
          "Yes, the override keyword automatically makes it virtual",
          "Only if the function is public"
        ],
        correctOption: 0,
        explanation: "You cannot polymorphic-override a non-virtual function. Declaring a matching signature in a derived class hides the base version and is resolved statically (static dispatch) rather than dynamically."
      }
    ]
  },
  cpp_l8: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the primary performance benefit of move semantics?",
        options: [
          "It compiles code faster",
          "It avoids deep copying of heap resources by transferring pointer ownership",
          "It automatically encrypts memory variables",
          "It stores variables on the CPU registers instead of stack frames"
        ],
        correctOption: 1,
        explanation: "Move semantics avoids expensive heap allocations and copying: instead of duplicating data, the move constructor steals the pointers, reducing complex copies to O(1) pointer swaps."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which token declares an rvalue reference in C++11?",
        options: [
          "&",
          "*",
          "&&",
          "*"
        ],
        correctOption: 2,
        explanation: "The double ampersand '&&' designates an rvalue reference, allowing binding to temporary objects that are safe to steal."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the copy/move mechanisms with their resource operations:",
        matchingPairs: [
          { left: "Copy Constructor", right: "Allocates a new heap buffer and duplicates all elements (O(N))", correctRightIndex: 0 },
          { left: "Move Constructor", right: "Copies pointers from the source object and nullifies its state (O(1))", correctRightIndex: 1 },
          { left: "std::move", right: "Performs a static cast to convert an lvalue into an rvalue reference", correctRightIndex: 2 }
        ],
        explanation: "Copying duplicates buffers. Moving steals pointers. std::move converts types to allow selecting move overloads."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: A network router app processes packet buffers. The old code creates, copies, and deallocates buffers constantly, causing CPU spikes. Explain how you would implement custom move constructors and use std::move to optimize the router throughput.",
        explanation: "Implement a move constructor 'Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) { other.data = nullptr; other.size = 0; }'. In the processing queue, pass packets via 'std::move(packet)' to avoid deep copies and instead transfer ownership of the underlying heap buffers."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What does std::move(x) do at runtime?",
        options: [
          "It copies the bytes of x to a different memory region",
          "It does nothing at runtime; it is a compile-time static cast that returns an rvalue reference",
          "It starts an asynchronous thread to transfer objects",
          "It frees the memory associated with x"
        ],
        correctOption: 1,
        explanation: "The utility 'std::move' is a pure compile-time cast. It does not generate any assembly code or perform moves at runtime; it only enables matching rvalue constructor overloads."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Why should a move constructor be marked with the 'noexcept' specifier?",
        options: [
          "To allow the compiler to optimize compile times",
          "To allow standard library containers (like std::vector) to use moves instead of copies during reallocations",
          "To prevent the program from running on multi-threaded environments",
          "To turn off compiler warning alerts"
        ],
        correctOption: 1,
        explanation: "Standard library containers require move operations to be marked 'noexcept' to guarantee strong exception safety. If missing, containers fallback to copying during reallocations."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What is the state of an object after its resources have been moved from via std::move?",
        options: [
          "It is completely deleted and cannot be referenced",
          "It is in a valid but unspecified empty state, and should not be accessed except to reassign or destroy it",
          "Its member values remain completely unchanged",
          "Its memory is immediately marked as corrupted"
        ],
        correctOption: 1,
        explanation: "The moved-from object is left in a valid but unspecified state. You must not read its data, but you can safely assign new values to it or let it destruct."
      }
    ]
  },
  cpp_l9: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What are the five special member functions included inside the Rule of Five?",
        options: [
          "Constructor, Copy, Move, Get, Set",
          "Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment",
          "New, Delete, Alloc, Free, Safe",
          "Vptr, Vtable, RTTI, Dynamic Cast, Typeid"
        ],
        correctOption: 1,
        explanation: "The Rule of Five dictates that if you need to define one of the following, you likely need all five: Destructor, Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What is the 'Rule of Zero' in modern C++?",
        options: [
          "Do not write any constructors or destructors; rely entirely on static functions",
          "Prefer designing classes that do not manage raw resources directly, relying on smart pointers to auto-generate cleanup",
          "Always set pointers to 0 before deallocating them",
          "Ensure classes occupy exactly 0 bytes of static memory"
        ],
        correctOption: 1,
        explanation: "The Rule of Zero advises delegating resource ownership to standard wrappers (like std::unique_ptr or std::string) to allow the compiler to auto-generate all copy/move routines safely."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the Rule of Five member functions with their implementations:",
        matchingPairs: [
          { left: "Copy Assignment Operator", right: "Deep copies resources; must implement self-assignment check to prevent leaks", correctRightIndex: 0 },
          { left: "Move Assignment Operator", right: "Reclaims existing resources and steals pointers from rvalues", correctRightIndex: 1 },
          { left: "Destructor", right: "Reclaims raw resources when the object lifetime expires", correctRightIndex: 2 }
        ],
        explanation: "Copy assignment needs a self-check. Move assignment cleans and steals. Destructors reclaim raw handles."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: A custom database index class allocates raw pointers. The compiler-generated default copy assignment duplicates these pointers. When objects are assigned, the application crashes with double-free errors. Explain how you would implement Rule of Five assignment safeguards.",
        explanation: "Implement custom copy assignment: 'Index& operator=(const Index& other) { if (this != &other) { delete ptr; ptr = new Data(*other.ptr); } return *this; }'. The self-assignment check 'if (this != &other)' guarantees that assigning an object to itself does not delete its own memory."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the purpose of a self-assignment check in a custom copy assignment operator?",
        options: [
          "To speed up compilation times",
          "To prevent an object from deleting its own resource before copying when assigned to itself",
          "To verify that the target pointer is not null",
          "To guarantee thread safety inside singleton scopes"
        ],
        correctOption: 1,
        explanation: "In 'a = a;', deleting the current buffer without a self-assignment check ('this == &other') destroys the source data before it can be copied, causing memory corruption."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "How do you explicitly instruct the compiler to generate default copy/move behaviors for a class?",
        options: [
          "Mark functions with the default keyword (e.g. '= default;')",
          "Leave the class body empty",
          "Use the auto keyword on all parameters",
          "Compile with the -O3 optimization flag"
        ],
        correctOption: 0,
        explanation: "Declaring a special member function as '= default;' tells the compiler to synthesize its standard default implementation."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "How do you prohibit an object from being copied while still allowing it to be moved?",
        options: [
          "Declare copy constructor as private without defining it",
          "Mark copy constructor as final",
          "Set copy constructor and copy assignment to '= delete;' while default-implementing move routines",
          "Inherit from std::unique_ptr"
        ],
        correctOption: 2,
        explanation: "By deleting copy constructor and copy assignment ('= delete'), and implementing move constructors, you create a move-only class (such as std::unique_ptr) representing exclusive ownership."
      }
    ]
  },
  cpp_l10: {
    quiz: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which smart pointer is ideal for expressing unique, exclusive ownership of an active Strategy pattern class in C++?",
        options: [
          "std::shared_ptr",
          "std::weak_ptr",
          "std::unique_ptr",
          "std::auto_ptr"
        ],
        correctOption: 2,
        explanation: "The 'std::unique_ptr' expresses clear, single ownership with zero runtime pointer-counting overhead, automatically deallocating strategies when replaced."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What is the modern, thread-safe way to implement a Singleton pattern in C++11 and beyond?",
        options: [
          "Using double-checked locking with mutexes",
          "By declaring a local static variable inside a static getter function (Meyers Singleton)",
          "By allocating the instance in global namespace variables",
          "Singletons are inherently thread-safe and require no safety patterns"
        ],
        correctOption: 1,
        explanation: "The Meyers Singleton leverages C++11 static rules: static variables initialized inside functions are guaranteed by the compiler to initialize in a thread-safe manner with zero lock overhead."
      }
    ],
    test: [
      {
        id: 1,
        type: "matching",
        question: "Match the software design patterns with their clean C++ implementations:",
        matchingPairs: [
          { left: "Strategy Pattern", right: "Manages interchangeable algorithms using polymorphic std::unique_ptr instances", correctRightIndex: 0 },
          { left: "Meyers Singleton", right: "Guarantees thread-safe single instances via local static variables", correctRightIndex: 1 },
          { left: "Factory Pattern", right: "Instantiates polymorphic object types using std::make_unique creators", correctRightIndex: 2 }
        ],
        explanation: "Strategy handles interchangeable algorithms. Meyers Singleton handles single instances. Factory creates instances."
      },
      {
        id: 2,
        type: "case-study",
        question: "Case Study: An enterprise financial engine uses the Strategy pattern to switch tax rules at runtime. The old raw pointer code has memory leaks when strategy pointers are swapped. Explain how you would rewrite the Strategy context using smart pointers to guarantee leak-free execution.",
        explanation: "Instead of 'Strategy* activeStrategy', declare 'std::unique_ptr<Strategy> activeStrategy' inside the context class. When swapping strategies, use 'activeStrategy = std::move(newStrategy)'. C++'s unique_ptr automatically destroys the old strategy object, preventing leaks."
      }
    ],
    exam: [
      {
        id: 1,
        type: "multiple-choice",
        question: "To prevent duplicate creations of a Singleton class, which operations must be explicitly deleted?",
        options: [
          "The default constructor and destructor",
          "The copy constructor and copy assignment operator",
          "The dynamic cast and RTTI metadata",
          "The static get_instance method"
        ],
        correctOption: 1,
        explanation: "To guarantee a strict single instance, you must delete the copy constructor ('Singleton(const Singleton&) = delete;') and copy assignment operator ('Singleton& operator=(const Singleton&) = delete;')."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Why is Meyers Singleton superior to classic double-checked locking with raw pointers?",
        options: [
          "It uses no heap allocations at all",
          "It is resolved entirely at compile-time",
          "It achieves thread safety automatically via compiler-guaranteed static rules with zero mutex lock overhead",
          "It supports virtual inheritance trees"
        ],
        correctOption: 2,
        explanation: "The Meyers Singleton is exceptionally fast and clean: the compiler handles concurrency safety internally during local static initialization, avoiding slow double-checked locking."
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "How does std::make_unique protect against memory leaks compared to raw 'new' expressions?",
        options: [
          "It forces the OS to compress memory stacks",
          "It prevents leaks by avoiding raw pointer assignments that could trigger intermediate constructor exception leaks",
          "It automatically encrypts pointer variables",
          "It operates only inside class constructors"
        ],
        correctOption: 1,
        explanation: "'std::make_unique' provides exception safety: if a constructor throws during instantiation, it is guaranteed that no memory is leaked, which is not guaranteed when passing multiple raw 'new' expressions as parameters."
      }
    ]
  }
};

