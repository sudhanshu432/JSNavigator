```
// Null
let c = null;
console.log(c);
console.log(typeof c); // object but why think about it
// this is a bug in JavaScript 
```
- Yes, this is a well-known quirk in JavaScript. When you declare let c = null;, you're explicitly setting c to have no value. The surprising part is that typeof null returns "object", which seems incorrect.

## Why does this happen?
This behavior is due to a bug in the original implementation of JavaScript. In the early days, values in JavaScript were represented as a type tag and value pair. The type tag for objects was 0. However, null was also given the type tag 0 to represent a null pointer. As a result, typeof null returns "object".

## Why hasn't it been fixed?
Even though this is widely considered a bug, it hasn't been fixed due to backward compatibility concerns. Many scripts rely on this behavior, so changing it would break existing codebases.

- This is why in modern JavaScript development, you should explicitly check for null using something like c === null rather than relying on typeof to determine if a value is null.