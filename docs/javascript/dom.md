# JavaScript DOM (Document Object Model)

## What is the DOM?

The DOM is a tree representation of HTML elements. JavaScript can access and manipulate the DOM to change how pages look and behave.

## Accessing Elements

### getElementById
```javascript
const element = document.getElementById('myId');
```

### querySelector
```javascript
// More flexible - use CSS selectors
const element = document.querySelector('.myClass');
const element = document.querySelector('div > p:first-child');
```

### querySelectorAll
```javascript
// Get multiple elements
const elements = document.querySelectorAll('.items');

elements.forEach(item => {
    console.log(item.textContent);
});
```

### Other Methods
```javascript
const elements = document.getElementsByClassName('myClass');
const elements = document.getElementsByTagName('p');
```

## Manipulating Content

### textContent
Get or set text (no HTML):

```javascript
const p = document.querySelector('p');

// Get text
console.log(p.textContent);

// Set text
p.textContent = "New text";
```

### innerHTML
Get or set HTML content:

```javascript
const div = document.querySelector('div');

// Get HTML
console.log(div.innerHTML);

// Set HTML
div.innerHTML = "<strong>Bold text</strong>";
```

### innerText
Like textContent but respects CSS display:

```javascript
element.innerText = "Visible text";
```

## Changing Attributes

```javascript
const link = document.querySelector('a');

// Get attribute
console.log(link.getAttribute('href'));

// Set attribute
link.setAttribute('href', 'https://example.com');

// Remove attribute
link.removeAttribute('href');

// Check if attribute exists
if (link.hasAttribute('href')) {
    console.log('Has href');
}

// Direct property access
link.href = 'https://example.com';
link.target = '_blank';
```

## Changing Styles

```javascript
const element = document.querySelector('div');

// Change single style
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';

// Change multiple styles
element.style.cssText = 'color: red; background-color: yellow;';
```

## Working with Classes

```javascript
const element = document.querySelector('div');

// Add class
element.classList.add('active');

// Remove class
element.classList.remove('active');

// Toggle class
element.classList.toggle('active');

// Check if has class
if (element.classList.contains('active')) {
    console.log('Is active');
}

// Replace class
element.classList.replace('old-class', 'new-class');
```

## Creating and Removing Elements

```javascript
// Create element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello';
newDiv.className = 'container';

// Add to page
const parent = document.querySelector('.parent');
parent.appendChild(newDiv);

// Insert before element
parent.insertBefore(newDiv, parent.firstChild);

// Remove element
newDiv.remove();
parent.removeChild(newDiv);
```

## Navigating the DOM

```javascript
const element = document.querySelector('p');

// Parent
element.parentElement;

// Children
element.children;           // HTMLCollection
element.firstElementChild;
element.lastElementChild;

// Siblings
element.nextElementSibling;
element.previousElementSibling;

// Loop through children
Array.from(element.children).forEach(child => {
    console.log(child);
});
```

## Complete Example

```html
<div class="container">
    <button id="addBtn">Add Item</button>
    <ul id="list"></ul>
</div>

<script>
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

addBtn.addEventListener('click', function() {
    // Create new item
    const newItem = document.createElement('li');
    newItem.textContent = 'New item';
    newItem.className = 'list-item';
    
    // Add to list
    list.appendChild(newItem);
    
    // Add click to remove
    newItem.addEventListener('click', function() {
        this.remove();
    });
});
</script>
```

## Best Practices

- Use `querySelector` (more modern)
- Prefer `textContent` over `innerHTML` for text
- Use `classList` for classes (not `className = ''`)
- Cache element references
- Avoid heavy DOM manipulation in loops

## Next Steps

Learn about [JavaScript Events](events.md) to make your DOM manipulation interactive.
