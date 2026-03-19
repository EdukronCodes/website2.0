# SQL SELECT

## SELECT Statement

The SELECT statement retrieves data from a database.

## Basic Syntax

```sql
SELECT column1, column2, ...
FROM table_name;
```

## SELECT Examples

### Select All Columns
```sql
SELECT * FROM users;
```

### Select Specific Columns
```sql
SELECT name, email, age FROM users;
```

### Select with Aliases
```sql
SELECT 
    name AS 'Full Name',
    email AS 'Email Address',
    age AS 'Years Old'
FROM users;
```

## WHERE Clause

Filter rows based on conditions:

```sql
-- Equal
SELECT * FROM users WHERE age = 25;

-- Greater than/Less than
SELECT * FROM users WHERE salary > 50000;
SELECT * FROM users WHERE age < 30;

-- Greater/Less or equal
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE salary <= 100000;

-- Not equal
SELECT * FROM users WHERE status != 'inactive';
SELECT * FROM users WHERE status <> 'inactive';
```

## Logical Operators

### AND
All conditions must be true:
```sql
SELECT * FROM users 
WHERE age > 18 AND city = 'NYC';
```

### OR
At least one condition must be true:
```sql
SELECT * FROM users 
WHERE city = 'NYC' OR city = 'LA';
```

### NOT
Negate a condition:
```sql
SELECT * FROM users 
WHERE NOT age > 30;
```

### Combined
```sql
SELECT * FROM users 
WHERE (age > 18 AND city = 'NYC') OR status = 'premium';
```

## Pattern Matching (LIKE)

```sql
-- Starts with
SELECT * FROM users WHERE name LIKE 'A%';

-- Ends with
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Contains
SELECT * FROM users WHERE name LIKE '%john%';

-- Case insensitive in most databases
SELECT * FROM users WHERE name LIKE 'alice';
```

## IN Operator

```sql
SELECT * FROM users 
WHERE city IN ('NYC', 'LA', 'Chicago');

-- NOT IN
SELECT * FROM users 
WHERE city NOT IN ('NYC', 'LA');
```

## BETWEEN Operator

```sql
-- Range of values
SELECT * FROM users 
WHERE age BETWEEN 18 AND 65;

-- NOT BETWEEN
SELECT * FROM users 
WHERE salary NOT BETWEEN 30000 AND 50000;
```

## NULL Handling

```sql
-- Check for NULL
SELECT * FROM users WHERE email IS NULL;

-- Check for NOT NULL
SELECT * FROM users WHERE email IS NOT NULL;

-- Use ISNULL or IFNULL (database specific)
SELECT name, IFNULL(phone, 'No phone') FROM users;
```

## ORDER BY

Sort results:

```sql
-- Sort ascending
SELECT * FROM users ORDER BY name;
SELECT * FROM users ORDER BY age ASC;

-- Sort descending
SELECT * FROM users ORDER BY age DESC;

-- Sort by multiple columns
SELECT * FROM users 
ORDER BY age DESC, name ASC;
```

## LIMIT

Limit number of results:

```sql
-- First 10 rows
SELECT * FROM users LIMIT 10;

-- Skip first 10, get next 10
SELECT * FROM users LIMIT 10 OFFSET 10;

-- Or alternative syntax
SELECT * FROM users LIMIT 10, 10;
```

## DISTINCT

Remove duplicates:

```sql
SELECT DISTINCT city FROM users;

SELECT DISTINCT country, city FROM users;
```

## Complete Example

```sql
-- Get top 10 users aged 25+ from NYC, 
-- ordered by salary (highest first)
SELECT name, email, salary
FROM users
WHERE age >= 25 AND city = 'NYC'
ORDER BY salary DESC
LIMIT 10;
```

## Common Mistakes

```sql
-- ❌ DON'T: Missing FROM clause
SELECT * WHERE age > 18;

-- ✅ DO:
SELECT * FROM users WHERE age > 18;

-- ❌ DON'T: Using LIKE with numbers
SELECT * FROM users WHERE age LIKE '25%';

-- ✅ DO:
SELECT * FROM users WHERE age = 25;
```

## Performance Tips

- SELECT only columns you need (not *)
- Use WHERE to filter early
- Use LIMIT to reduce results
- Order by indexed columns when possible
- Use DISTINCT carefully (slow on large tables)

## Next Steps

Learn about [SQL Joins](join.md) to combine data from multiple tables.
