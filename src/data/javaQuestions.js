// Java interview questions data
export const javaQuestions = {
  'core-java': [
    {
      id: 1,
      question: "What is the difference between JDK, JRE, and JVM?",
      answer: "JDK (Java Development Kit) is a software development kit that includes JRE, compiler, debugger, and other development tools. JRE (Java Runtime Environment) provides libraries, JVM, and other files to run Java applications. JVM (Java Virtual Machine) is the runtime engine that executes Java bytecode and provides platform independence."
    },
    {
      id: 2,
      question: "What is bytecode in Java?",
      answer: "Bytecode is an intermediate form of Java code that is generated when Java source code is compiled. It's platform-independent and stored in .class files. The JVM interprets this bytecode to execute the program, enabling Java's 'write once, run anywhere' capability."
    },
    {
      id: 3,
      question: "Explain platform independence in Java.",
      answer: "Platform independence means Java programs can run on any operating system without modification. This is achieved because Java source code is compiled into bytecode (not native machine code), which is then interpreted by the JVM specific to each platform."
    },
    {
      id: 4,
      question: "Difference between primitive and wrapper classes?",
      answer: "Primitive types (int, char, boolean, etc.) are basic data types stored directly in memory with better performance. Wrapper classes (Integer, Character, Boolean, etc.) are objects that wrap primitive values, provide utility methods, can be null, and are required for collections."
    },
    {
      id: 5,
      question: "What is the String pool?",
      answer: "String pool is a memory area in the heap where String literals are stored. When a String literal is created, JVM checks if it already exists in the pool. If yes, it returns the reference; if no, it creates a new String. This saves memory through string interning."
    },
    {
      id: 6,
      question: "Difference between == and .equals() in Java?",
      answer: "== operator compares references (memory addresses) for objects and values for primitives. .equals() method compares the actual content/value of objects. For String comparison, == checks if both references point to the same object, while .equals() checks if the content is the same."
    },
    {
      id: 7,
      question: "Why is String immutable in Java?",
      answer: "Strings are immutable for security (used in network connections, file paths), thread safety (multiple threads can access without synchronization), performance (string pool, hashcode caching), and to prevent accidental modifications in method parameters."
    },
    {
      id: 8,
      question: "Difference between StringBuffer and StringBuilder.",
      answer: "StringBuffer is thread-safe (synchronized methods) but slower, while StringBuilder is not thread-safe but faster. Both are mutable and more efficient than String for multiple concatenations. Use StringBuffer in multi-threaded environments, StringBuilder in single-threaded."
    },
    {
      id: 9,
      question: "What are access modifiers in Java?",
      answer: "Access modifiers control the visibility of classes, methods, and variables: public (accessible everywhere), protected (same package + subclasses), default/package-private (same package only), private (same class only)."
    },
    {
      id: 10,
      question: "Difference between final, finally, and finalize().",
      answer: "final: keyword for constants, prevents inheritance/overriding. finally: block that always executes after try-catch for cleanup. finalize(): method called by garbage collector before object destruction (deprecated in Java 9+)."
    }
  ],
  'oops': [
    {
      id: 1,
      question: "What is abstraction?",
      answer: "Abstraction hides complex implementation details and shows only essential features. It's achieved through abstract classes and interfaces. For example, you know how to drive a car without knowing engine internals."
    },
    {
      id: 2,
      question: "What is encapsulation?",
      answer: "Encapsulation bundles data and methods that operate on that data within a single unit (class) and restricts direct access to some components. It's achieved using access modifiers, getter/setter methods, protecting data integrity."
    },
    {
      id: 3,
      question: "Difference between interface and abstract class.",
      answer: "Interface: multiple inheritance, all methods abstract (before Java 8), variables are public static final. Abstract class: single inheritance, can have concrete methods, can have instance variables, constructors allowed."
    },
    {
      id: 4,
      question: "Can an interface have default methods?",
      answer: "Yes, since Java 8, interfaces can have default methods with implementation. This allows adding new methods to interfaces without breaking existing implementations. They're inherited by implementing classes but can be overridden."
    },
    {
      id: 5,
      question: "Can we create an object of an abstract class?",
      answer: "No, we cannot directly instantiate an abstract class. However, we can create objects of concrete subclasses that extend the abstract class. Abstract classes are meant to be extended, not instantiated."
    },
    {
      id: 6,
      question: "What is method overloading?",
      answer: "Method overloading is having multiple methods with the same name but different parameters (number, type, or order) in the same class. It's resolved at compile-time (static polymorphism). Return type alone cannot be used to overload methods."
    },
    {
      id: 7,
      question: "What is method overriding?",
      answer: "Method overriding is redefining a parent class method in a child class with the same signature. It's resolved at runtime (dynamic polymorphism). The @Override annotation helps prevent errors and improves readability."
    },
    {
      id: 8,
      question: "Difference between compile-time and runtime polymorphism.",
      answer: "Compile-time polymorphism (method overloading, operator overloading) is resolved during compilation. Runtime polymorphism (method overriding) is resolved during execution based on the actual object type, not reference type."
    },
    {
      id: 9,
      question: "What is the 'this' keyword used for?",
      answer: "'this' refers to the current object instance. Used to: distinguish between instance variables and parameters with same names, call other constructors in the same class, pass current object as parameter, return current object."
    },
    {
      id: 10,
      question: "What is 'super' keyword?",
      answer: "'super' refers to the immediate parent class object. Used to: access parent class variables/methods when overridden, call parent class constructor, resolve naming conflicts between parent and child classes."
    },
    {
      id: 11,
      question: "What is inheritance?",
      answer: "Inheritance allows a class to acquire properties and methods from another class. The child class (subclass) inherits from parent class (superclass) using 'extends' keyword. It promotes code reusability and establishes 'is-a' relationship."
    },
    {
      id: 12,
      question: "What is polymorphism?",
      answer: "Polymorphism means 'many forms' - same interface with different implementations. Types: compile-time (overloading) and runtime (overriding). Allows treating objects of different classes uniformly through common interface or parent class."
    }
  ],
  'memory': [
    {
      id: 1,
      question: "Difference between stack and heap memory in Java.",
      answer: "Stack: stores method calls, local variables, partial results. Fast access, LIFO structure, thread-specific, limited size. Heap: stores objects and instance variables, slower access, shared among threads, larger size, managed by garbage collector."
    },
    {
      id: 2,
      question: "What are garbage collectors in Java?",
      answer: "Garbage collectors automatically manage memory by removing unused objects from heap. Types include Serial GC, Parallel GC, G1 GC, ZGC. They run periodically to free memory, prevent memory leaks, and optimize application performance."
    },
    {
      id: 3,
      question: "What is the difference between strong, weak, soft, and phantom references?",
      answer: "Strong: normal references, object won't be GC'd. Weak: object can be GC'd anytime, used in caches. Soft: GC'd when memory is low, used for memory-sensitive caches. Phantom: used for cleanup actions after object is GC'd."
    },
    {
      id: 4,
      question: "Explain classloader in Java.",
      answer: "Classloader loads .class files into JVM memory. Hierarchy: Bootstrap (loads core Java classes), Extension/Platform (loads extension classes), Application/System (loads application classes). Follows parent delegation model for security and consistency."
    },
    {
      id: 5,
      question: "Where are static variables stored?",
      answer: "Static variables are stored in the Method Area (part of heap in older JVM versions, separate in newer ones). They're loaded when class is first referenced and exist for the entire program lifetime, shared among all instances."
    },
    {
      id: 6,
      question: "What is memory leak in Java?",
      answer: "Memory leak occurs when objects are no longer used but still referenced, preventing garbage collection. Common causes: unclosed resources, static collections, listener references, inner class references to outer class."
    },
    {
      id: 7,
      question: "What is OutOfMemoryError?",
      answer: "OutOfMemoryError occurs when JVM cannot allocate more memory for objects. Types: heap space (too many objects), PermGen/Metaspace (too many classes), direct memory (off-heap memory exhausted)."
    },
    {
      id: 8,
      question: "How does garbage collection work?",
      answer: "GC works in phases: Mark (identify reachable objects), Sweep (remove unreachable objects), Compact (defragment memory). Uses generational hypothesis - most objects die young, so heap is divided into Young and Old generations."
    }
  ],
  'exception-handling': [
    {
      id: 1,
      question: "Difference between checked and unchecked exceptions.",
      answer: "Checked exceptions must be handled at compile-time (IOException, SQLException). Unchecked exceptions are runtime exceptions that don't need explicit handling (NullPointerException, ArrayIndexOutOfBoundsException)."
    },
    {
      id: 2,
      question: "Can we have multiple catch blocks?",
      answer: "Yes, we can have multiple catch blocks for different exception types. They should be ordered from specific to general exceptions. Java 7+ allows multi-catch syntax: catch(IOException | SQLException e)."
    },
    {
      id: 3,
      question: "Can finally block be skipped?",
      answer: "Finally block is usually executed, but can be skipped if: System.exit() is called, JVM crashes, daemon thread terminates, or infinite loop in try/catch. It's guaranteed to execute for normal exception handling."
    },
    {
      id: 4,
      question: "Difference between throw and throws.",
      answer: "throw: keyword used to explicitly throw an exception in code. throws: keyword used in method signature to declare exceptions that method might throw. throw is followed by exception object, throws by exception class names."
    },
    {
      id: 5,
      question: "What is try-with-resources?",
      answer: "Try-with-resources (Java 7+) automatically closes resources that implement AutoCloseable. Resources declared in try() are automatically closed after try block, even if exception occurs. Eliminates need for explicit finally blocks for resource cleanup."
    },
    {
      id: 6,
      question: "What is exception propagation?",
      answer: "Exception propagation is the process where uncaught exceptions move up the call stack until handled or reach main method. If not handled, program terminates with stack trace."
    },
    {
      id: 7,
      question: "How to create custom exceptions?",
      answer: "Create custom exceptions by extending Exception (checked) or RuntimeException (unchecked). Provide constructors that call super() with message. Follow naming convention ending with 'Exception'."
    }
  ],
  'multithreading': [
    {
      id: 1,
      question: "What is a thread in Java?",
      answer: "A thread is a lightweight sub-process that allows concurrent execution within a program. Java supports multithreading through Thread class or Runnable interface. Threads share memory space but have separate execution paths."
    },
    {
      id: 2,
      question: "Difference between process and thread.",
      answer: "Process: independent execution environment with separate memory space, heavy-weight, inter-process communication is expensive. Thread: shares memory space within process, light-weight, easier communication, context switching is faster."
    },
    {
      id: 3,
      question: "What is thread lifecycle?",
      answer: "Thread states: NEW (created but not started), RUNNABLE (executing or ready to execute), BLOCKED (waiting for monitor lock), WAITING (waiting indefinitely), TIMED_WAITING (waiting for specified time), TERMINATED (completed execution)."
    },
    {
      id: 4,
      question: "Difference between Runnable and Callable.",
      answer: "Runnable: run() method returns void, cannot throw checked exceptions, used with Thread class. Callable: call() method returns value, can throw exceptions, used with ExecutorService, supports Future for result retrieval."
    },
    {
      id: 5,
      question: "What is a daemon thread?",
      answer: "Daemon thread runs in background providing services to user threads. JVM terminates when only daemon threads are running. Examples: garbage collector, finalizer. Created using setDaemon(true) before start()."
    },
    {
      id: 6,
      question: "Explain synchronized keyword.",
      answer: "synchronized provides thread safety by allowing only one thread to access synchronized method/block at a time. Uses intrinsic locks (monitors). Can be applied to methods, blocks, or static methods for class-level locking."
    },
    {
      id: 7,
      question: "Difference between wait() and sleep().",
      answer: "wait(): releases lock, must be called within synchronized block, woken by notify(). sleep(): doesn't release lock, can be called anywhere, wakes up after specified time. wait() is for thread communication, sleep() for pausing execution."
    },
    {
      id: 8,
      question: "What is volatile keyword?",
      answer: "volatile ensures variable visibility across threads by preventing caching in thread-local memory. Reads/writes go directly to main memory. Prevents compiler optimizations. Doesn't provide atomicity for compound operations."
    },
    {
      id: 9,
      question: "Explain thread safety.",
      answer: "Thread safety means code behaves correctly when accessed by multiple threads simultaneously. Achieved through: synchronization, immutability, thread-local storage, atomic operations, concurrent collections."
    },
    {
      id: 10,
      question: "What is ExecutorService?",
      answer: "ExecutorService is a high-level API for managing threads. Provides thread pool management, task submission, lifecycle management. Types: FixedThreadPool, CachedThreadPool, SingleThreadExecutor, ScheduledThreadPool."
    },
    {
      id: 11,
      question: "What is deadlock?",
      answer: "Deadlock occurs when two or more threads wait indefinitely for each other to release resources. Prevention: avoid nested locks, use timeout, maintain lock ordering, use concurrent utilities instead of synchronized blocks."
    },
    {
      id: 12,
      question: "What is race condition?",
      answer: "Race condition occurs when multiple threads access shared data concurrently and the outcome depends on timing. Results in inconsistent data. Prevented by proper synchronization, atomic operations, or immutable objects."
    },
    {
      id: 13,
      question: "What are atomic operations?",
      answer: "Atomic operations complete entirely or not at all, without interruption. java.util.concurrent.atomic package provides atomic classes like AtomicInteger, AtomicReference for lock-free thread-safe operations."
    },
    {
      id: 14,
      question: "What is ThreadLocal?",
      answer: "ThreadLocal provides thread-local variables where each thread has its own copy. Useful for avoiding synchronization, storing per-thread context. Remember to remove values to prevent memory leaks."
    },
    {
      id: 15,
      question: "What is CountDownLatch?",
      answer: "CountDownLatch allows threads to wait for other threads to complete. Initialized with count, threads call await() to wait, countDown() decreases count. When count reaches zero, waiting threads proceed."
    }
  ],
  'collections': [
    {
      id: 1,
      question: "Difference between ArrayList and LinkedList.",
      answer: "ArrayList: resizable array, fast random access O(1), slow insertion/deletion in middle O(n). LinkedList: doubly-linked list, slow random access O(n), fast insertion/deletion O(1). ArrayList better for read-heavy, LinkedList for write-heavy operations."
    },
    {
      id: 2,
      question: "Difference between HashMap and Hashtable.",
      answer: "HashMap: not synchronized, allows null key/values, faster, introduced in Java 1.2. Hashtable: synchronized, doesn't allow nulls, slower, legacy class from Java 1.0. Use ConcurrentHashMap for thread-safe operations."
    },
    {
      id: 3,
      question: "Difference between HashMap and ConcurrentHashMap.",
      answer: "HashMap: not thread-safe, better performance in single-threaded. ConcurrentHashMap: thread-safe, uses segment-based locking (Java 7) or node-based locking (Java 8+), allows concurrent reads, better than synchronized HashMap."
    },
    {
      id: 4,
      question: "What is fail-fast vs fail-safe?",
      answer: "Fail-fast: throws ConcurrentModificationException when collection is modified during iteration (ArrayList, HashMap). Fail-safe: creates copy for iteration, no exception but may not reflect latest changes (ConcurrentHashMap, CopyOnWriteArrayList)."
    },
    {
      id: 5,
      question: "Difference between Set, List, and Map.",
      answer: "List: ordered collection, allows duplicates, indexed access (ArrayList, LinkedList). Set: no duplicates, may or may not be ordered (HashSet, TreeSet). Map: key-value pairs, unique keys (HashMap, TreeMap)."
    },
    {
      id: 6,
      question: "What is HashSet internally?",
      answer: "HashSet internally uses HashMap where elements are stored as keys with a dummy constant value (PRESENT). It leverages HashMap's hashing mechanism for fast operations and uniqueness guarantee."
    },
    {
      id: 7,
      question: "What is LinkedHashMap?",
      answer: "LinkedHashMap extends HashMap and maintains insertion order through a doubly-linked list. Provides predictable iteration order. Can also maintain access order for LRU cache implementation."
    },
    {
      id: 8,
      question: "What is TreeMap?",
      answer: "TreeMap implements NavigableMap using Red-Black tree (self-balancing BST). Keys are sorted naturally or by Comparator. Operations are O(log n). Provides methods like firstKey(), lastKey(), subMap()."
    },
    {
      id: 9,
      question: "Difference between Comparable and Comparator.",
      answer: "Comparable: natural ordering, implemented by class itself, compareTo() method, single sorting logic. Comparator: external sorting, separate class/lambda, compare() method, multiple sorting strategies possible."
    },
    {
      id: 10,
      question: "What is the difference between shallow copy and deep copy in Java?",
      answer: "Shallow copy: copies object references, original and copy share nested objects. Deep copy: creates new objects for all nested levels, completely independent copies. Shallow copy uses clone(), deep copy requires custom implementation."
    },
    {
      id: 11,
      question: "What is Iterator?",
      answer: "Iterator provides a way to traverse collections sequentially. Methods: hasNext(), next(), remove(). Enhanced for-loop internally uses Iterator. ListIterator extends Iterator with bidirectional traversal for Lists."
    },
    {
      id: 12,
      question: "What is the difference between Array and ArrayList?",
      answer: "Array: fixed size, can store primitives/objects, faster access, no built-in methods. ArrayList: dynamic size, only objects, slower due to boxing/unboxing, rich API with utility methods."
    },
    {
      id: 13,
      question: "How HashMap works internally?",
      answer: "HashMap uses array of buckets with hashing. Hash function determines bucket index, collisions handled by chaining (linked list/tree). Java 8+ uses balanced trees when chain length > 8 for better performance."
    }
  ]
};

// Helper function to get all questions from all topics
export const getAllJavaQuestions = () => {
  const allQuestions = [];
  Object.keys(javaQuestions).forEach(topic => {
    javaQuestions[topic].forEach(q => {
      allQuestions.push({...q, topic});
    });
  });
  return allQuestions;
};

// Helper function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
