# Python Data Types

## Overview

Python's data types are the building blocks of every program. Understanding them is essential for effective programming.

## String Type (str)

Text and character data:

```python
# String creation
name = "Alice"
message = 'Hello World'
multiline = """
This is a
multi-line string
"""

# String operations
text = "Hello"
print(len(text))        # 5
print(text[0])          # "H"
print(text[1:4])        # "ell"
print(text.upper())     # "HELLO"
print(text.lower())     # "hello"
```

## Numeric Types

### Integer (int)
```python
count = 42
negative = -10
big = 1_000_000  # Underscores for readability
binary = 0b1010   # Binary
hex_num = 0xFF    # Hexadecimal
```

### Float
```python
pi = 3.14159
price = 19.99
scientific = 1.5e-3  # 0.0015
```

## Boolean Type (bool)

```python
is_active = True
is_deleted = False

# Boolean from comparisons
result = 5 > 3      # True
result = 10 == 5    # False
```

## Collections

### List - Ordered, Mutable
```python
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [1, [2, 3], [4, 5]]

# Operations
numbers.append(6)      # Add item
numbers.remove(3)      # Remove value
numbers.pop()          # Remove last
numbers.sort()         # Sort list
numbers.reverse()      # Reverse order
```

### Tuple - Ordered, Immutable
```python
point = (10, 20)
rgb = (255, 0, 0)

# Access
print(point[0])        # 10
print(point[0:2])      # (10, 20)

# Cannot modify
# point[0] = 5  # Error!
```

### Dictionary - Key-Value Pairs
```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "NYC"
}

# Access
print(person["name"])                # Alice
print(person.get("email", "N/A"))   # N/A (default)

# Modify
person["age"] = 26
person["email"] = "alice@ex.com"

# Remove
del person["city"]

# Iterate
for key, value in person.items():
    print(f"{key}: {value}")
```

### Set - Unordered, Unique
```python
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 3, 3}  # {1, 2, 3}

# Operations
colors.add("yellow")
colors.remove("red")

# Set operations
set_a = {1, 2, 3}
set_b = {3, 4, 5}
print(set_a & set_b)  # {3} intersection
print(set_a | set_b)  # {1,2,3,4,5} union
```

## Type Conversion

```python
# String conversions
str(42)        # "42"
str(3.14)      # "3.14"
str(True)      # "True"

# Number conversions
int("42")      # 42
int(3.99)      # 3 (truncates)
float("3.14")  # 3.14
int("FF", 16)  # 255 (from hex)

# List/Tuple conversion
list((1, 2, 3))     # [1, 2, 3]
tuple([1, 2, 3])    # (1, 2, 3)
list("hello")       # ['h','e','l','l','o']
```

## None Type

The null value in Python:

```python
value = None
result = None  # default return value

if value is None:
    print("Value is None")
```

## Key Takeaways

- Each type has different characteristics (mutable vs immutable)
- Lists are most flexible; tuples are fixed
- Dictionaries are key for organizing data
- Understanding types prevents runtime errors

## Next Steps

Master [Python Control Flow](../python/syntax.md) to use these types effectively.
