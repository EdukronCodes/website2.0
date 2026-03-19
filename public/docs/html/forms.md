# HTML Forms

## Form Basics

Forms collect user input and send it to a server.

```html
<form action="/submit" method="POST">
    <!-- Form inputs go here -->
    <button type="submit">Submit</button>
</form>
```

## Form Attributes

| Attribute | Purpose |
|-----------|---------|
| `action` | Where to send form data |
| `method` | GET or POST |
| `name` | Form identifier |
| `target` | Where to display response |
| `enctype` | How to encode data |

## Input Types

### Text Input
```html
<input type="text" name="username" placeholder="Enter username">
<input type="password" name="password" placeholder="Password">
<input type="email" name="email">
<input type="number" name="age" min="0" max="120">
<input type="tel" name="phone">
<input type="url" name="website">
<input type="search" name="query">
```

### Checkboxes and Radio

```html
<!-- Checkboxes - multiple selections -->
<label>
    <input type="checkbox" name="interests" value="sports">
    Sports
</label>

<label>
    <input type="checkbox" name="interests" value="music">
    Music
</label>

<!-- Radio - single selection -->
<label>
    <input type="radio" name="gender" value="male">
    Male
</label>

<label>
    <input type="radio" name="gender" value="female">
    Female
</label>
```

### Select Dropdown

```html
<select name="country">
    <option value="">-- Select Country --</option>
    <option value="usa">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="canada">Canada</option>
</select>

<!-- Multiple select -->
<select name="skills" multiple>
    <option>JavaScript</option>
    <option>Python</option>
    <option>HTML/CSS</option>
</select>
```

### Textarea

```html
<!-- Multi-line text input -->
<textarea name="message" rows="5" cols="40">
    Default text here
</textarea>
```

### File Upload

```html
<input type="file" name="upload">
<input type="file" name="images" accept="image/*" multiple>
```

### Date and Time

```html
<input type="date" name="birthdate">
<input type="time" name="appointment">
<input type="datetime-local" name="meeting">
<input type="month" name="select-month">
<input type="week" name="select-week">
```

### Color and Range

```html
<input type="color" name="favorite-color">
<input type="range" name="volume" min="0" max="100">
```

## Labels

Always use labels for accessibility:

```html
<!-- Method 1: Label wraps input -->
<label>
    Username: <input type="text" name="username">
</label>

<!-- Method 2: Label with for attribute -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

## Complete Form Example

```html
<form action="/submit" method="POST">
    <h2>Registration Form</h2>
    
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <label>
        <input type="checkbox" name="agree">
        I agree to terms and conditions
    </label>
    
    <button type="submit">Register</button>
    <button type="reset">Clear Form</button>
</form>
```

## Form Validation

HTML5 provides built-in validation:

```html
<form>
    <!-- Required field -->
    <input type="text" required>
    
    <!-- Email validation -->
    <input type="email">
    
    <!-- Number range -->
    <input type="number" min="18" max="65">
    
    <!-- Pattern matching -->
    <input type="text" pattern="[A-Za-z]{3,}" title="3+ letters">
    
    <!-- Length restrictions -->
    <input type="password" minlength="8" maxlength="20">
</form>
```

## Form Grouping

```html
<fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Name:</label>
    <input type="text" id="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email">
</fieldset>
```

## Next Steps

Master [CSS Selectors](../css/selectors.md) to style your forms beautifully.
