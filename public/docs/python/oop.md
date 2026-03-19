# Python OOP (Object-Oriented Programming)

## What is OOP?

Object-Oriented Programming is a programming paradigm that uses objects and classes to organize code. It's based on four main concepts: encapsulation, abstraction, inheritance, and polymorphism.

## Classes and Objects

A class is a blueprint; an object is an instance of that blueprint.

```python
# Define a class
class Dog:
    def __init__(self, name, breed):
        self.name = name      # Attributes
        self.breed = breed
    
    def bark(self):           # Method
        print(f"{self.name} says Woof!")

# Create an object
my_dog = Dog("Buddy", "Golden Retriever")
print(my_dog.name)            # Buddy
my_dog.bark()                 # Buddy says Woof!
```

## Constructor and Initialization

The `__init__` method is called when an object is created:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.email = None  # Optional attribute
    
    def set_email(self, email):
        self.email = email

person = Person("Alice", 25)
person.set_email("alice@example.com")
print(person.email)  # alice@example.com
```

## Inheritance

Inherit properties from a parent class:

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

cat = Cat("Whiskers")
print(cat.speak())  # Whiskers says Meow!
```

## Polymorphism

Same method name, different behavior:

```python
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Square(Shape):
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return self.side ** 2

shapes = [Circle(5), Square(4)]
for shape in shapes:
    print(shape.area())  # 78.5, 16
```

## Encapsulation

Hide internal details:

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        self.__balance += amount
    
    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500
# print(account.__balance)    # Error - private
```

## Class Methods and Static Methods

```python
class Student:
    student_count = 0  # Class variable
    
    def __init__(self, name):
        self.name = name
        Student.student_count += 1
    
    @classmethod
    def get_student_count(cls):
        return cls.student_count
    
    @staticmethod
    def is_passing_grade(score):
        return score >= 60

# Static method - no self or cls needed
print(Student.is_passing_grade(85))  # True

# Class method - uses class, not instance
student1 = Student("Alice")
student2 = Student("Bob")
print(Student.get_student_count())  # 2
```

## Magic Methods

Special methods for object behavior:

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}')"
    
    def __len__(self):
        return len(self.title)
    
    def __eq__(self, other):
        return self.title == other.title

book1 = Book("1984", "George Orwell")
book2 = Book("1984", "George Orwell")

print(book1)           # 1984 by George Orwell
print(len(book1))      # 4
print(book1 == book2)  # True
```

## Next Steps

Continue learning Python with advanced topics like decorators, generators, and context managers!
