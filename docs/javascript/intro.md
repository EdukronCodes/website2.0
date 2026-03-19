# JavaScript Introduction

## What is JavaScript?

JavaScript is a programming language that adds interactivity to web pages. It runs in the browser and can manipulate HTML and CSS in real-time.

## JavaScript in HTML

### 1. Inline JavaScript
```html
<button onclick="sayHello()">Click me</button>

<script>
    function sayHello() {
        alert('Hello!');
    }
</script>
```

### 2. Script Tag
```html
<script>
    console.log('Hello from JavaScript!');
</script>
```

### 3. External JavaScript
```html
<script src="script.js"></script>
```

```javascript
// script.js
console.log('Hello from external file!');
```

## Basic Syntax

```javascript
// Variables
let name = "Alice";
const age = 25;
var city = "NYC";

// Data types
let string = "Hello";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { name: "Alice", age: 25 };

// Comments
// Single line comment
/* Multi-line comment */
```

## Output Methods

```javascript
// Print to console
console.log("Hello, World!");

// Alert dialog
alert("This is an alert!");

// Write to document
document.write("Hello!");
```

## Variables and Scope

```javascript
// Global scope
let global = "I'm global";

function myFunction() {
    // Local scope
    let local = "I'm local";
    console.log(global);  // Can access global
    console.log(local);   // Can access local
}

console.log(global);  // Works
// console.log(local);  // Error
```

## Operators

```javascript
// Arithmetic
10 + 5   // 15
10 - 5   // 5
10 * 5   // 50
10 / 5   // 2
10 % 3   // 1 (remainder)

// Comparison
5 == 5   // true (equal value)
5 === 5  // true (equal value and type)
5 != 3   // true (not equal)
5 > 3    // true

// Logical
true && false  // false (AND)
true || false  // true (OR)
!true          // false (NOT)
```

## Arrays

```javascript
// Create array
let fruits = ["apple", "banana", "cherry"];

// Access items
console.log(fruits[0]);     // "apple"
console.log(fruits.length); // 3

// Array methods
fruits.push("date");        // Add item
fruits.pop();               // Remove last item
fruits.shift();             // Remove first item
fruits.unshift("avocado");  // Add to beginning

// Loop through array
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Map - transform array
let uppercased = fruits.map(f => f.toUpperCase());
```

## Objects

```javascript
// Create object
let person = {
    name: "Alice",
    age: 25,
    city: "NYC",
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

// Access properties
console.log(person.name);        // "Alice"
console.log(person["age"]);      // 25
console.log(person.greet());     // "Hello, I'm Alice"

// Add property
person.email = "alice@example.com";

// Delete property
delete person.city;
```

## Console Methods

| Method | Purpose |
|--------|---------|
| `console.log()` | Print to console |
| `console.error()` | Print error message |
| `console.warn()` | Print warning |
| `console.table()` | Print as table |
| `console.time()` | Start timer |
| `console.timeEnd()` | End timer |

## Next Steps

Learn about [SQL Introduction](../sql/intro.md) for database fundamentals.
