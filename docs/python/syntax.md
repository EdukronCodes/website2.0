# Python Syntax

## Understanding Python Syntax

Python syntax refers to the rules that govern how programs are written. Unlike some languages that use curly braces `{}`, Python uses indentation to define code blocks.

## Basic Rules

### 1. Indentation

Python uses **indentation** to define code blocks instead of curly braces. This makes code highly readable.

```python
# Correct indentation
if x > 5:
    print("x is greater than 5")
    print("This is inside the if block")

print("This is outside the if block")

# Incorrect - will cause IndentationError
if x > 5:
print("This will cause an error")
```

### 2. Comments

Comments are ignored by Python and are used to explain code:

```python
# This is a single-line comment

# Multi-line comment:
# This is line 1
# This is line 2

"""
This is a multi-line comment
using triple quotes
"""
```

### 3. Variables and Data Types

Python doesn't require declaring variable types - Python infers them automatically:

```python
# Strings
name = "Alice"

# Numbers (int)
age = 25

# Floats (decimal numbers)
height = 5.8

# Boolean
is_student = True
```

## Case Sensitivity

Python is case-sensitive, meaning `Name` and `name` are different:

```python
Name = "Alice"
name = "Bob"

print(Name)  # Output: Alice
print(name)  # Output: Bob
```

## Required Elements

### 1. Colons

Colons (`:`) indicate the start of a code block:

```python
if condition:
    # code here

for item in list:
    # code here

def function():
    # code here
```

### 2. Line Breaks

Each statement should be on its own line. Use backslash to continue on the next line:

```python
# Long calculation split across lines
result = 10 + 20 + 30 + \
         40 + 50

# Or use parentheses
result = (10 + 20 + 30 +
         40 + 50)
```

## Key Takeaways

| Feature | Description |
|---------|-------------|
| Indentation | Defines code blocks |
| Comments | Start with `#` or use `"""` |
| Case Sensitive | `x` and `X` are different |
| Colons | Start code blocks |
| Readability | Python emphasizes clean, readable code |

## Next Steps

Master [Python Variables](variables.md) to understand how to work with data in Python.
