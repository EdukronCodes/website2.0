# Python Loops

## What are Loops?

Loops allow you to execute code multiple times without repeating it. Python has two main types of loops: `for` and `while`.

## For Loop

Execute code for each item in a sequence:

```python
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry
```

### Loop with Range

```python
# Print numbers 0 to 4
for i in range(5):
    print(i)

# Print numbers 1 to 5
for i in range(1, 6):
    print(i)

# Print with step
for i in range(0, 10, 2):  # step of 2
    print(i)  # 0, 2, 4, 6, 8
```

### Loop with Index

```python
fruits = ["apple", "banana", "cherry"]

# Using enumerate to get index and value
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Output:
# 0: apple
# 1: banana
# 2: cherry
```

## While Loop

Execute code as long as condition is true:

```python
# Count down
count = 5
while count > 0:
    print(count)
    count -= 1
    
# Output: 5, 4, 3, 2, 1
```

### Break and Continue

```python
# break - exit loop
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints: 0, 1, 2, 3, 4

# continue - skip iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints: 0, 1, 3, 4
```

## Nested Loops

Loops inside loops:

```python
# Two nested loops
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")

# Creating a grid
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i * j}", end=" ")
    print()  # New line

# Output:
# 1 2 3 
# 2 4 6 
# 3 6 9 
```

## List Comprehension

Concise way to create lists using loops:

```python
# Traditional loop
numbers = []
for i in range(5):
    numbers.append(i * 2)

# List comprehension (same result)
numbers = [i * 2 for i in range(5)]
# [0, 2, 4, 6, 8]

# With condition
even = [i for i in range(10) if i % 2 == 0]
# [0, 2, 4, 6, 8]
```

## Dictionary and Loop

```python
person = {"name": "Alice", "age": 25, "city": "NYC"}

# Loop through keys and values
for key, value in person.items():
    print(f"{key}: {value}")

# Loop through only keys
for key in person:
    print(key)

# Loop through only values
for value in person.values():
    print(value)
```

## Loop Control

| Statement | Purpose |
|-----------|---------|
| `break` | Exit loop immediately |
| `continue` | Skip current iteration |
| `else` | Execute after loop completes |
| `pass` | Do nothing (placeholder) |

```python
# else with loop
for i in range(3):
    print(i)
else:
    print("Loop completed!")

# pass - placeholder
for i in range(3):
    pass  # Do nothing
```

## Common Loop Patterns

### Sum values
```python
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num
print(total)  # 15
```

### Find element
```python
numbers = [1, 2, 3, 4, 5]
target = 3
found = False
for num in numbers:
    if num == target:
        found = True
        break
```

## Next Steps

Learn about [Python OOP](oop.md) to build more complex applications.
