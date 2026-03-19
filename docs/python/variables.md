# Python Variables

## What are Variables?

Variables are containers for storing data values. Think of them as labeled boxes where you can store information.

```python
# Creating variables
name = "Alice"
age = 25
height = 5.8
is_student = True
```

## Variable Naming Rules

Follow these rules when naming variables:

```python
# Valid variable names
my_variable = 10
MyVariable = 10
myVariable = 10
_private_var = 10
var123 = 10

# Invalid - DO NOT use
123var = 10  # Can't start with number
my-var = 10  # Can't use hyphens
my var = 10  # Can't have spaces
class = 10   # Can't use reserved keywords
```

### Best Practices

```python
# Good: Descriptive names
user_age = 25
total_price = 99.99
is_active = True

# Avoid: Unclear names
x = 25
p = 99.99
a = True
```

## Data Types

Python has several built-in data types:

### 1. String (str)
Text data enclosed in quotes:

```python
name = "Alice"
message = 'Hello'
paragraph = """
This is a long
multi-line string
"""

# String operations
greeting = "Hello" + " " + "World"  # Concatenation
repeated = "Ha" * 3  # Output: "HaHaHa"
```

### 2. Integer (int)
Whole numbers:

```python
age = 25
count = -10
big_number = 1000000
```

### 3. Float
Decimal numbers:

```python
height = 5.8
price = 19.99
pi = 3.14159
```

### 4. Boolean (bool)
True or False values:

```python
is_student = True
is_adult = False

# Comparisons return booleans
5 > 3  # True
10 < 5  # False
```

### 5. List
Ordered collection of items:

```python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Accessing items
first = fruits[0]  # "apple"
last = fruits[-1]  # "cherry"
```

### 6. Dictionary
Key-value pairs:

```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "NYC"
}

# Accessing values
name = person["name"]  # "Alice"
```

## Type Checking

Use `type()` to check a variable's type:

```python
print(type("Hello"))     # <class 'str'>
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type(True))        # <class 'bool'>
print(type([1, 2, 3]))   # <class 'list'>
```

## Type Conversion

Convert between types using conversion functions:

```python
# String to Integer
num_str = "123"
num = int(num_str)  # 123

# Integer to String
age = 25
age_str = str(age)  # "25"

# String to Float
price_str = "19.99"
price = float(price_str)  # 19.99

# To Boolean
bool(1)      # True
bool(0)      # False
bool("")     # False
bool("text") # True
```

## Next Steps

Learn about [Python Functions](functions.md) to reuse code effectively.
