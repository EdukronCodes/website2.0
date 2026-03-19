# HTML Basics

## What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of websites.

## HTML Document Structure

Every HTML document follows this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

## Key Elements

| Element | Purpose |
|---------|---------|
| `<!DOCTYPE html>` | Declares HTML5 document |
| `<html>` | Root element of page |
| `<head>` | Contains metadata and settings |
| `<title>` | Page title shown in browser tab |
| `<body>` | Contains page content |

## Headings and Paragraphs

```html
<h1>Heading 1 - Largest</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - Smallest</h6>

<p>This is a paragraph. HTML automatically adds space around paragraphs.</p>
```

## Text Formatting

```html
<b>Bold text</b>
<strong>Important text (bold)</strong>

<i>Italic text</i>
<em>Emphasized text (italic)</em>

<u>Underlined text</u>
<mark>Highlighted text</mark>

<small>Small text</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

## Links

```html
<!-- Basic link -->
<a href="https://www.example.com">Click here</a>

<!-- Link to local file -->
<a href="about.html">About Us</a>

<!-- Link with title attribute -->
<a href="https://example.com" title="Visit Example">Example</a>

<!-- Link that opens in new tab -->
<a href="https://example.com" target="_blank">Open in new tab</a>
```

## Lists

### Unordered List
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Ordered List
```html
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```

### Description List
```html
<dl>
    <dt>HTML</dt>
    <dd>Markup language for web pages</dd>
    
    <dt>CSS</dt>
    <dd>Language for styling web pages</dd>
</dl>
```

## Images

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of image">

<!-- Image with dimensions -->
<img src="image.jpg" alt="My photo" width="300" height="200">

<!-- Image as link -->
<a href="large-image.jpg">
    <img src="thumbnail.jpg" alt="Thumbnail">
</a>
```

## Comments

```html
<!-- This is a comment -->

<!-- 
    Multi-line comment
    Provides information about code
    Not displayed in browser
-->
```

## Next Steps

Learn about [HTML Elements](elements.md) to use more semantic tags.
