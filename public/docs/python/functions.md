# Python Functions

## What are Functions?

Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

```python
# Define a simple function
def greet():
    print("Hello!")

# Call the function
greet()  # Output: Hello!
```

## Function Syntax

```python
def function_name(parameters):
    """Docstring - describes what function does"""
    # Function body
    return value
```

## Parameters and Arguments

**Parameters** are defined in the function definition, **arguments** are passed when calling:

```python
# Define function with parameters
def add(a, b):
    """Add two numbers"""
    result = a + b
    return result

# Call with arguments
total = add(5, 3)  # 8
```

## Return Values

Functions can return values using `return`:

```python
def calculate_area(radius):
    pi = 3.14159
    area = pi * radius * radius
    return area

# Use the returned value
circle_area = calculate_area(5)
print(circle_area)  # 78.54975
```

## Default Parameters

Provide default values for parameters:

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()        # Output: Hello, Guest!
greet("Alice") # Output: Hello, Alice!
```

## Multiple Parameters

```python
def create_profile(name, age, city="Unknown"):
    profile = {
        "name": name,
        "age": age,
        "city": city
    }
    return profile

# Call with positional and named arguments
user = create_profile("Alice", 25, city="NYC")
```

## *args and **kwargs

Handle variable numbers of arguments:

```python
# *args - variable positional arguments
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

print(sum_numbers(1, 2, 3))       # 6
print(sum_numbers(1, 2, 3, 4, 5)) # 15

# **kwargs - variable keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
```

## Lambda Functions

Anonymous functions for simple operations:

```python
# Define
square = lambda x: x * x

# Use
print(square(5))  # 25

# Useful with map, filter
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, numbers))
# [1, 4, 9, 16, 25]
```

## Scope

Variables have different scopes - global or local:

```python
global_var = "I'm global"

def my_function():
    local_var = "I'm local"
    print(global_var)  # Can access global
    print(local_var)   # Can access local

print(global_var)  # Works
# print(local_var)  # Error - local not in global scope
```

## Common Built-in Functions

| Function | Description | Example |
|----------|-------------|---------|
| `len()` | Get length | `len([1,2,3])` → 3 |
| `max()` | Maximum value | `max([1,5,3])` → 5 |
| `min()` | Minimum value | `min([1,5,3])` → 1 |
| `sum()` | Sum of values | `sum([1,2,3])` → 6 |
| `round()` | Round number | `round(3.7)` → 4 |
| `sorted()` | Sort list | `sorted([3,1,2])` → [1,2,3] |

## Next Steps

Master [Python Loops](loops.md) to iterate through data.
