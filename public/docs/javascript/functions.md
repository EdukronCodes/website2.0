# JavaScript Functions

## What are Functions?

Functions are reusable blocks of code that perform specific tasks.

```javascript
// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function call
greet("Alice");  // Output: Hello, Alice!
```

## Function Declaration vs Expression

### Declaration
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // 8
```

### Expression
```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3));  // 15
```

### Arrow Function (ES6)
```javascript
const subtract = (a, b) => {
    return a - b;
};

// Shorthand
const divide = (a, b) => a / b;

console.log(divide(10, 2));  // 5
```

## Parameters and Arguments

```javascript
// Default parameters
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet();          // Hello, Guest
greet("Alice");   // Hello, Alice

// Rest parameters (...rest)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));  // 15
```

## Return Statement

```javascript
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

let canVote = isAdult(25);
console.log(canVote);  // true
```

## Scope

```javascript
let global = "I'm global";

function myFunc() {
    let local = "I'm local";
    console.log(global);  // Can access
    console.log(local);   // Can access
}

console.log(global);  // Can access
// console.log(local);  // Error - not in scope
```

## Callback Functions

Functions passed as arguments:

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Alice", function() {
    console.log("Nice to meet you!");
});

// Or with arrow function
greet("Bob", () => console.log("Nice to meet you!"));
```

## Higher-Order Functions

Functions that return functions:

```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Methods

Functions inside objects:

```javascript
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, I'm " + this.name);
    },
    haveBirthday: function() {
        this.age++;
    }
};

person.greet();        // Hello, I'm Alice
person.haveBirthday();
console.log(person.age);  // 26
```

## Recursion

Function calling itself:

```javascript
// Calculate factorial
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120

// Count down
function countdown(n) {
    if (n === 0) {
        console.log("Blastoff!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(3);  // 3, 2, 1, Blastoff!
```

## Next Steps

Learn about [JavaScript Events](events.md) to add interactivity.
