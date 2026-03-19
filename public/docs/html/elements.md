# HTML Elements

## Common Elements

Elements are the building blocks of HTML. Each element serves a specific purpose.

## Headings

```html
<h1>Main Heading - Used once per page</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Additional heading level</h4>
<h5>Lower priority heading</h5>
<h6>Smallest heading</h6>
```

## Text Elements

```html
<!-- Paragraphs -->
<p>This is a paragraph. It represents a block of text.</p>

<!-- Line breaks -->
<p>Line 1<br>Line 2</p>

<!-- Horizontal rule -->
<hr>

<!-- Preformatted text (preserves spacing) -->
<pre>
    This preserves
    all   spacing
    exactly as written
</pre>
```

## Lists

### Unordered Lists (Bullets)
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

### Ordered Lists (Numbers)
```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

### Nested Lists
```html
<ul>
    <li>Item 1
        <ul>
            <li>Nested 1.1</li>
            <li>Nested 1.2</li>
        </ul>
    </li>
    <li>Item 2</li>
</ul>
```

## Semantic Elements

Provide meaning to the structure:

```html
<!-- Header -->
<header>
    <h1>Website Title</h1>
    <nav>Navigation here</nav>
</header>

<!-- Main content -->
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
    
    <aside>Related information</aside>
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2024 My Website</p>
</footer>

<!-- Navigation -->
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>

<!-- Sections -->
<section>
    <h2>Section Title</h2>
    <p>Content goes here</p>
</section>
```

## Inline vs Block Elements

### Block Elements
Take up full width and start on new line:

```html
<div>Block container</div>
<p>Paragraph</p>
<h1>Heading</h1>
<section>Section</section>
```

### Inline Elements
Only take needed width, stay on same line:

```html
<span>Inline text</span>
<a href="#">Link</a>
<strong>Bold text</strong>
<em>Italic text</em>
```

### Inline-Block
Combine properties of both:

```html
<img src="image.jpg" alt="Image">
<button>Click me</button>
```

## Important Symbols

```html
<!-- Special characters -->
&lt;      <!-- < -->
&gt;      <!-- > -->
&amp;     <!-- & -->
&quot;    <!-- " -->
&apos;    <!-- ' -->
&nbsp;    <!-- Non-breaking space -->
&copy;    <!-- © -->
&reg;     <!-- ® -->
&deg;     <!-- ° -->
```

## Next Steps

Learn about [HTML Attributes](attributes.md) to add properties to elements.
