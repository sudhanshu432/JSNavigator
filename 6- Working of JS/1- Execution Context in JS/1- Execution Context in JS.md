### Execution Context in JavaScript: A Detailed Guide
The **execution context** in JavaScript defines the environment in which JavaScript code is evaluated and executed. It is crucial for understanding how variables, functions, and objects interact at runtime.

Here’s a detailed explanation of **Execution Context** in JavaScript:

#### 1. Types of Execution Context
JavaScript has three main types of execution contexts:

1. **Global Execution Context (GEC):**
    - This is the default or base execution context.
    - It is created when the JavaScript file first runs.
    - Variables and functions declared in the global scope belong to this context.
    - The window object (in browsers) or global object (in Node.js) is associated with this context.

2. **Function Execution Context (FEC):**
    - Created whenever a function is invoked.
    - Each function has its own execution context, separate from the global context.
    - Contains variables, arguments, and inner functions specific to that function.
3. **Eval Execution Context:**
    - Created when code is executed inside the eval() function.
    - eval() allows you to execute a string of JavaScript code dynamically, but it's rarely used due to security and performance concerns.

#### 2. Phases of Execution Context
Each execution context goes through two phases:
1. **Creation Phase (Memory Allocation Phase):**
    - **Global Execution Context:** In this phase, JavaScript engine allocates memory to variables and functions before executing any code. Variables are set to undefined, and functions are stored in memory in their entirety.
    - **Function Execution Context:** Memory is allocated for function parameters, local variables, and a reference to the outer environment (closure).

2. **Execution Phase (Code Execution):**
    - The JavaScript engine executes the code line by line in this phase.
    - Variables are assigned their actual values, and functions are executed.

#### 3. Components of an Execution Context
Each execution context has three important components:

1. **Variable Environment:**
    - Stores variables, function declarations, and function parameters.
    - It includes a Lexical Environment that holds local variables and the outer environment reference.

2. **Lexical Environment:**
    - Contains the local environment where the code is being executed, plus a reference to the parent environment.
    - It helps in scope chaining, enabling variables to be accessed outside their current scope.

3. **This Binding:**
    - Refers to the object that is currently executing the code.
    - In the Global Execution Context, this refers to the global object (window in the browser).
    - In the Function Execution Context, this depends on how the function is called (e.g., regular function call, method call, constructor function).

#### 4. Execution Context Lifecycle
The lifecycle of an execution context consists of:

1. **Creation Phase:**
    - Memory is set up for variables and functions.
    - Functions are stored in memory with the full body (hoisting).
    - Variables are hoisted but initialized to undefined.

2. **Execution Phase:**
    - Code inside the context is executed line by line.
    - Variables are assigned their actual values.