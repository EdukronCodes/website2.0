# CSS Flexbox

## What is Flexbox?

Flexbox (Flexible Box Module) is a powerful layout tool that makes it easy to design flexible responsive layouts.

## Basic Flexbox Setup

```css
.container {
    display: flex;
}
```

## Main Concepts

### Flex Container
The parent element with `display: flex`.

### Flex Items
Direct children of the flex container.

### Main Axis vs Cross Axis
- Main axis: Left to right (by default)
- Cross axis: Top to bottom (perpendicular)

## Common Properties

### Container Properties

#### justify-content
Align items along the main axis:

```css
.container {
    display: flex;
    
    /* Options */
    justify-content: flex-start;      /* Default */
    justify-content: flex-end;        /* Right align */
    justify-content: center;          /* Center */
    justify-content: space-between;   /* Equal space between */
    justify-content: space-around;    /* Equal space around */
    justify-content: space-evenly;    /* Equal space everywhere */
}
```

#### align-items
Align items along the cross axis:

```css
.container {
    display: flex;
    height: 200px;  /* Needed for vertical alignment */
    
    align-items: flex-start;    /* Top */
    align-items: center;        /* Middle */
    align-items: flex-end;      /* Bottom */
    align-items: stretch;       /* Fill height */
}
```

#### flex-direction
Change the main axis direction:

```css
.container {
    display: flex;
    
    flex-direction: row;            /* Default - left to right */
    flex-direction: row-reverse;    /* Right to left */
    flex-direction: column;         /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
}
```

#### flex-wrap
Wrap items to next line:

```css
.container {
    display: flex;
    flex-wrap: nowrap;      /* Default - single line */
    flex-wrap: wrap;        /* Wrap to next line */
    flex-wrap: wrap-reverse;/* Wrap in reverse */
}
```

#### gap
Space between items:

```css
.container {
    display: flex;
    gap: 20px;              /* Space between all items */
    gap: 10px 20px;         /* row-gap column-gap */
}
```

### Item Properties

#### flex
Shorthand for grow, shrink, basis:

```css
.item {
    flex: 1;  /* Equal share of space */
}

/* Is same as: */
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}
```

#### align-self
Override container alignment for one item:

```css
.item {
    align-self: center;   /* Center this item */
}
```

#### order
Change visual order without changing HTML:

```css
.item:nth-child(1) { order: 3; }
.item:nth-child(2) { order: 1; }
.item:nth-child(3) { order: 2; }
```

## Practical Examples

### Centered Content
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
```

### Navigation Bar
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.nav-left, .nav-right {
    display: flex;
    gap: 20px;
}
```

### Card Layout
```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 200px;  /* Grow, shrink, min-width */
    min-width: 200px;
}
```

### Sidebar Layout
```css
.layout {
    display: flex;
    height: 100vh;
}

.sidebar {
    width: 250px;
}

.main {
    flex: 1;
    overflow-y: auto;
}
```

## Browser Support

Supported in all modern browsers. For older browsers, use vendor prefixes:

```css
.container {
    display: -webkit-flex;  /* Safari 6-8 */
    display: flex;
}
```

## Common Pitfalls

### 1. Children have margin
```css
/* Add gap instead */
.container {
    gap: 20px;  /* Not margin on items */
}
```

### 2. Forgetting height for vertical alignment
```css
.container {
    height: 200px;     /* Need explicit height */
    align-items: center;
}
```

### 3. Text overflow
```css
.item {
    min-width: 0;      /* Allow shrinking below content size */
}
```

## Next Steps

Learn [CSS Grid](grid.md) for more advanced layouts.
