# CSS Selectors

## What are Selectors?

Selectors target HTML elements to apply styles. Mastering selectors is key to CSS.

## Basic Selectors

### Universal Selector
```css
/* Selects all elements */
* {
    margin: 0;
    padding: 0;
}
```

### Element Selector
```css
/* All paragraphs */
p {
    color: blue;
}

h1, h2, h3 {
    font-family: Arial;
}
```

### Class Selector
```css
/* All elements with class="button" */
.button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
}

/* Multiple classes */
.button.primary {
    background-color: darkblue;
}
```

### ID Selector
```css
/* Unique element */
#header {
    background-color: navy;
    height: 100px;
}
```

### Attribute Selector
```css
/* Element with specific attribute */
input[type="text"] {
    border: 1px solid gray;
}

/* Attribute contains value */
a[href*="example.com"] {
    color: green;
}

/* Attribute starts with */
a[href^="https"] {
    color: green;
}

/* Attribute ends with */
a[href$=".pdf"] {
    color: red;
}
```

## Combinators

### Descendant Combinator
```css
/* All p elements inside div */
div p {
    color: blue;
}
```

### Child Combinator
```css
/* Direct children only */
div > p {
    color: blue;
}
```

### Adjacent Sibling
```css
/* p directly after h2 */
h2 + p {
    font-weight: bold;
}
```

### General Sibling
```css
/* All p siblings of h2 */
h2 ~ p {
    margin: 10px;
}
```

## Pseudo-classes

### Link States
```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: red;
}

a:active {
    color: orange;
}
```

### Structural Pseudo-classes
```css
/* First child */
li:first-child {
    font-weight: bold;
}

/* Last child */
li:last-child {
    border-bottom: none;
}

/* Nth child */
li:nth-child(2) {
    color: red;
}

li:nth-child(odd) {
    background-color: lightgray;
}

/* Empty elements */
p:empty {
    display: none;
}
```

### Form States
```css
input:focus {
    border-color: blue;
    outline: none;
}

input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

input:checked {
    accent-color: green;
}
```

### Negation
```css
/* Elements NOT matching selector */
div:not(.container) {
    margin: 10px;
}
```

## Pseudo-elements

### ::before and ::after
```css
p::before {
    content: "→ ";
}

p::after {
    content: " ←";
}
```

### ::first-line
```css
p::first-line {
    font-weight: bold;
    color: red;
}
```

### ::first-letter
```css
p::first-letter {
    font-size: 200%;
    float: left;
}
```

### ::selection
```css
::selection {
    background-color: yellow;
    color: black;
}
```

## Specificity

Specificity determines which style is applied:

```css
/* 0 specificity */
* {}

/* 1 (element) */
div {}

/* 10 (class, attribute, pseudo-class) */
.button {}
[type="text"] {}
:hover {}

/* 100 (ID) */
#header {}

/* 1000 (inline style) */
<div style="color: red;"></div>

/* !important (override all) - use sparingly */
.button {
    color: blue !important;
}
```

## Selector Combinations

```css
/* Everything combined */
div.container:hover > p:first-child {
    color: red;
}

/* Complex selector */
#main article:first-of-type p:not(.hidden) {
    font-size: 16px;
}
```

## Best Practices

- Keep selectors specific but not overly complex
- Use classes for reusable styles
- Avoid using !important
- Keep specificity low and manageable
- Use meaningful class names

## Next Steps

Learn [CSS Flexbox](flexbox.md) for modern layout techniques.
