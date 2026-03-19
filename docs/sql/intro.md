# SQL Introduction

## What is SQL?

SQL (Structured Query Language) is the standard language for managing databases. It allows you to create, read, update, and delete data in databases.

## Key Concepts

### Database
A structured collection of data organized in tables.

### Table
A collection of related data entries with rows and columns.

### Columns
Also called fields - represent attributes.

### Rows
Individual records in a table.

## SQL Syntax

```sql
-- SQL is case-insensitive but convention is UPPERCASE for keywords

-- Comments start with --

/* 
   Multi-line comments
   look like this
*/
```

## Basic CRUD Operations

### CREATE - Insert Data
```sql
INSERT INTO users (id, name, email, age)
VALUES (1, 'Alice', 'alice@example.com', 25);

-- Insert multiple rows
INSERT INTO users (id, name, email, age)
VALUES (2, 'Bob', 'bob@example.com', 30),
       (3, 'Charlie', 'charlie@example.com', 28);
```

### READ - Query Data
```sql
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with condition
SELECT * FROM users WHERE age > 25;

-- Select with ordering
SELECT * FROM users ORDER BY age DESC;

-- Select with limit
SELECT * FROM users LIMIT 5;
```

### UPDATE - Modify Data
```sql
-- Update one row
UPDATE users
SET email = 'newemail@example.com'
WHERE id = 1;

-- Update multiple columns
UPDATE users
SET age = 26, email = 'alice26@example.com'
WHERE name = 'Alice';
```

### DELETE - Remove Data
```sql
-- Delete specific rows
DELETE FROM users
WHERE id = 1;

-- Delete all rows (dangerous!)
DELETE FROM users;
```

## WHERE Clause

Filter data with conditions:

```sql
-- Equals
SELECT * FROM users WHERE age = 25;

-- Greater/Less than
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age <= 30;

-- AND
SELECT * FROM users WHERE age > 25 AND city = 'NYC';

-- OR
SELECT * FROM users WHERE age < 20 OR age > 60;

-- IN
SELECT * FROM users WHERE city IN ('NYC', 'LA', 'Chicago');

-- LIKE (pattern matching)
SELECT * FROM users WHERE email LIKE '%@example.com';
SELECT * FROM users WHERE name LIKE 'A%';  -- Starts with A
```

## Common Aggregate Functions

| Function | Purpose |
|----------|---------|
| `COUNT()` | Count rows |
| `SUM()` | Sum values |
| `AVG()` | Average value |
| `MAX()` | Maximum value |
| `MIN()` | Minimum value |

```sql
SELECT COUNT(*) FROM users;              -- 5
SELECT AVG(age) FROM users;              -- 27
SELECT MAX(age) FROM users;              -- 30
SELECT SUM(salary) FROM employees;       -- 250000
```

## GROUP BY and ORDER BY

```sql
-- Group data
SELECT city, COUNT(*) as count
FROM users
GROUP BY city;

-- Sort results
SELECT * FROM users ORDER BY age ASC;    -- Ascending
SELECT * FROM users ORDER BY age DESC;   -- Descending
```

## Joins

Combine data from multiple tables:

```sql
-- INNER JOIN - Only matching rows
SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN - All from left table
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

## Next Steps

You now have the fundamentals of web development! Continue exploring and building projects to solidify your knowledge.
