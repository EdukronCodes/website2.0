# HTML Attributes

## What are Attributes?

Attributes provide additional information about HTML elements. They're always in the opening tag.

## Common Attributes

### id and class
```html
<!-- id: unique identifier for one element -->
<div id="header">Header content</div>

<!-- class: reusable identifier for multiple elements -->
<p class="paragraph">Paragraph 1</p>
<p class="paragraph">Paragraph 2</p>

<!-- Multiple classes -->
<div class="container featured">Content</div>
```

### title
```html
<!-- Tooltip on hover -->
<img src="image.jpg" alt="My photo" title="This is my photo">
<a href="#" title="Go to home page">Home</a>
```

### data Attributes
```html
<!-- Store custom data -->
<div data-user-id="123" data-name="Alice">User info</div>

<!-- Access in JavaScript -->
<script>
    let userId = document.querySelector('div').dataset.userId;
    let name = document.querySelector('div').dataset.name;
</script>
```

## Link Attributes

```html
<!-- href: destination -->
<a href="page.html">Link</a>

<!-- target: where to open -->
<a href="page.html" target="_blank">Open in same tab</a>
<a href="page.html" target="_blank">Open in new tab</a>

<!-- rel: relationship -->
<a href="page.html" rel="noreferrer">External link</a>

<!-- download: download file -->
<a href="document.pdf" download>Download PDF</a>
```

## Image Attributes

```html
<!-- Essential attributes -->
<img src="image.jpg" alt="Image description">

<!-- Sizing -->
<img src="image.jpg" alt="Image" width="300" height="200">

<!-- Responsive images -->
<img src="image.jpg" 
     srcset="image-small.jpg 600w, image-large.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Responsive image">

<!-- Loading optimization -->
<img src="image.jpg" alt="Image" loading="lazy">
```

## Form Attributes

```html
<!-- Input attributes -->
<input type="text" name="username" id="username">
<input type="password" required>
<input type="email" placeholder="Enter email">
<input type="checkbox" checked>

<!-- Form attributes -->
<form action="/submit" method="POST">
    <input type="text">
    <button type="submit">Submit</button>
</form>
```

## Global Attributes

Apply to any HTML element:

```html
<!-- Basic -->
<div id="unique" class="style-class">
    Content
</div>

<!-- Content editability -->
<div contenteditable="true">
    Edit this text
</div>

<!-- Hidden -->
<div hidden>This is hidden</div>

<!-- Accessibility -->
<button aria-label="Close menu">×</button>

<!-- Style -->
<p style="color: red;">Red text</p>

<!-- Language -->
<p lang="es">Hola mundo</p>

<!-- Draggable -->
<div draggable="true">Drag me</div>

<!-- Spellcheck -->
<input type="text" spellcheck="true">

<!-- Autocomplete -->
<input type="email" autocomplete="email">

<!-- Disabled -->
<input type="text" disabled>

<!-- Required (for form validation) -->
<input type="email" required>
```

## Best Practices

1. Always include `alt` for images
2. Use meaningful `id` and `class` names
3. Use semantic HTML5 attributes
4. Include ARIA labels for accessibility
5. Don't rely solely on title for important info

## Next Steps

Learn about [HTML Forms](forms.md) to collect user input.
