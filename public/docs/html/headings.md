# HTML Headings & Paragraphs

## Headings

Headings define the structure and hierarchy of your page content.

### Six Levels of Headings

```html
<h1>Heading 1 - Main Title</h1>
<h2>Heading 2 - Major Section</h2>
<h3>Heading 3 - Subsection</h3>
<h4>Heading 4 - Minor Section</h4>
<h5>Heading 5 - Small Section</h5>
<h6>Heading 6 - Least Important</h6>
```

### Best Practices

- **Use h1 once per page**: For main title/headline
- **Don't skip levels**: Go h1 → h2 → h3, not h1 → h3
- **Use for structure**: Not for styling text large
- **SEO important**: Search engines use headings

### Good Heading Structure

```html
<h1>My Blog</h1>
    <h2>Technology</h2>
        <h3>Web Development</h3>
        <h3>Mobile Apps</h3>
    <h2>Travel</h2>
        <h3>Europe Tips</h3>
        <h3>Asia Guide</h3>
```

## Paragraphs

Paragraphs are the basic text blocks on web pages.

### Basic Paragraph

```html
<p>This is a paragraph. It contains text that should be read as a block.</p>

<p>This is another paragraph. Paragraphs are separated by white space.</p>
```

### Paragraph With Formatting

```html
<p>
    This paragraph contains <strong>important text</strong>, 
    <em>emphasized text</em>, and <u>underlined text</u>.
</p>
```

### Why Use Paragraphs?

- Creates visual separation
- Improves readability
- Semantic meaning (not just `<div>`)
- Better for screen readers

## Text Formatting Elements

### Strong and Important
```html
<!-- Bold - semantic -->
<strong>This is important</strong>

<!-- Bold - just styling -->
<b>This is bold</b>
```

### Emphasis
```html
<!-- Italic - semantic -->
<em>This is emphasized</em>

<!-- Italic - just styling -->
<i>This is italic</i>
```

### Other Formatting
```html
<!-- Underline -->
<u>Underlined text</u>

<!-- Strikethrough -->
<del>Deleted text</del>

<!-- Highlighted -->
<mark>Highlighted text</mark>

<!-- Smaller -->
<small>Small text</small>

<!-- Subscript -->
H<sub>2</sub>O

<!-- Superscript -->
2<sup>3</sup> = 8
```

## Line Breaks

```html
<!-- Single line break -->
Line 1<br>Line 2

<!-- Hard line break (preserved formatting) -->
<pre>
  Line 1
  Line 2 (spaces preserved)
</pre>
```

## Horizontal Rule

```html
<!-- Separate sections -->
<h2>Section 1</h2>
<p>Content here...</p>

<hr>

<h2>Section 2</h2>
<p>Content here...</p>
```

## Complete Example

```html
<body>
    <h1>Welcome to My Page</h1>
    
    <h2>Introduction</h2>
    <p>
        This is the introduction section. I like to write about 
        <strong>important topics</strong> and share my thoughts 
        through <em>engaging content</em>.
    </p>
    
    <h2>Main Content</h2>
    
    <h3>First Topic</h3>
    <p>Details about the first topic go here.</p>
    
    <h3>Second Topic</h3>
    <p>Details about the second topic go here.</p>
    
    <hr>
    
    <h2>Conclusion</h2>
    <p>Thank you for reading my page!</p>
</body>
```

## Accessibility Tips

- Use one h1 per page
- Use headings for navigation
- Don't skip heading levels
- Describe content in headings
- Use semantic elements

## Next Steps

Learn [CSS Fonts and Typography](../css/fonts.md) to style headings and paragraphs beautifully.
