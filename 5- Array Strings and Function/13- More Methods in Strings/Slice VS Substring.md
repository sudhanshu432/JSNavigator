In JavaScript, both slice() and substring() methods are used to extract a portion of a string, but they have some key differences in their behavior and usage. Here's a breakdown of the differences between the two:

## 1. Method Signatures
- **slice(startIndex, endIndex):**
    - Extracts a section of a string from startIndex to endIndex (not including the character at endIndex).
- **substring(startIndex, endIndex):**
    - Extracts characters from startIndex to endIndex (not including the character at endIndex), but the parameters can be swapped.

## 2. Handling Negative Indices
- **slice:**
    - If a negative index is provided, it counts from the end of the string. For example, str.slice(-2) will return the last two characters.
- **substring:**
    - If a negative index is provided, it treats it as 0. For example, str.substring(-2) will return the substring starting from index 0.
## 3. Parameter Order
- **slice:**
    - The order of parameters matters. slice(2, 5) will return the substring from index 2 to 4, while slice(5, 2) will return an empty string.
- **substring:**
    - The order of parameters does not matter. Both substring(2, 5) and substring(5, 2) will return the substring from index 2 to 4.
## 4. Return Values
- Both methods return a new string and do not modify the original string.

## 5. Examples
Here are some examples to illustrate the differences:

```
let str = "Hello, World!";

// Using slice
console.log(str.slice(7, 12));      // Output: "World"
console.log(str.slice(-6));          // Output: "World!"
console.log(str.slice(12, 7));       // Output: "" (empty string)

// Using substring
console.log(str.substring(7, 12));   // Output: "World"
console.log(str.substring(-6));       // Output: "Hello, " (starts from index 0)
console.log(str.substring(12, 7));    // Output: "World" (the order of parameters doesn't matter)

```

## 5. Examples
- Use slice() when you want to extract a part of a string with the flexibility of negative indices and when the order of indices matters.
- Use substring() when you want a simpler approach where the order of parameters doesn’t matter and negative values are treated as zero.

Both methods are useful, and the choice between them depends on your specific needs in string manipulation.