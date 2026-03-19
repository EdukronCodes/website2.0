# CSS Introduction

## What is CSS?

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning of HTML elements.

## CSS Syntax

```css
/* Simple rule */
selector {
    property: value;
    property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 24px;
}
```

## Three Ways to Add CSS

### 1. Inline CSS
```html
<h1 style="color: blue; font-size: 24px;">Hello World</h1>
```

### 2. Internal CSS
```html
<head>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
    </style>
</head>
```

### 3. External CSS (Recommended)
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */
h1 {
    color: blue;
    font-size: 24px;
}
```

## Basic Selectors

```css
/* Element selector */
p {
    color: black;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    background-color: navy;
}

/* Multiple selectors */
h1, h2, h3 {
    color: darkblue;
}
```

## Colors and Fonts

```css
/* Colors - multiple formats */
h1 {
    color: red;           /* Named color */
    color: #FF0000;       /* Hex */
    color: rgb(255, 0, 0); /* RGB */
}

/* Fonts */
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    line-height: 1.6;
}
```

## Box Model

```css
/* Box model: margin > border > padding > content */
div {
    width: 300px;
    padding: 20px;          /* Space inside */
    margin: 10px;           /* Space outside */
    border: 2px solid black;
    background-color: lightgray;
}
```

## Display Properties

```css
/* Display types */
div {
    display: block;      /* Takes full width */
    display: inline;     /* Takes only needed width */
    display: inline-block; /* Inline but accepts width/height */
    display: flex;       /* Flexbox layout */
    display: grid;       /* Grid layout */
    display: none;       /* Hidden */
}
```

## Responsive Design

```css
/* Mobile-first approach */
body {
    font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    body {
        font-size: 18px;
    }
}
```

## Common Properties

| Property | Description | Example |
|----------|-------------|---------|
| `color` | Text color | `color: blue;` |
| `background-color` | Background color | `background-color: white;` |
| `padding` | Inner spacing | `padding: 10px;` |
| `margin` | Outer spacing | `margin: 10px;` |
| `border` | Edge border | `border: 1px solid black;` |
| `width` | Element width | `width: 100px;` |
| `height` | Element height | `height: 50px;` |
| `text-align` | Text alignment | `text-align: center;` |

## Next Steps

Learn [JavaScript Introduction](../javascript/intro.md) to add interactivity.
