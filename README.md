# Veronika Noolien - Portfolio & Blog

**Live site:** [veronikanoolien.github.io](https://veronikanoolien.github.io)

---

## What It Is?

This is my personal portfolio and blog, where I share my work as an illustrator, book editor, and reviewer.
Every line of code includes **detailed teaching comments** explaining not just _what_ the code does, but _why_ and _how_ it works. This project was built as part of my web development learning journey, and I hope it can help others too.

---

## Why So Many Comments? Are You Mad?

When I started, I realized that I had no idea what each line did or why I was even typing it. As a neurodivergent person, I need answers to all the _why_ and _how_ questions in order to learn something and fully understand it. Not gonna lie, I used Copilot as my "teacher" and spent days to find a form that I like and can learn from. But remember -- we are all mad here.

---

## Features

- **Blog System** - Dynamic blog with category filtering
- **Portfolio Gallery** - Filterable artwork gallery with modal lightbox
- **Dark Mode** - Theme toggle with localStorage persistence and system preference detection
- **Social Links** - Linktree-style social media buttons
- **Responsive Design** - Works on desktop, tablet, and mobile (hopefully!)

---

## Project Structure

```
├── index.html          # Main HTML structure
├── style.css           # All styling (with dark mode support)
├── script.js           # JavaScript logic and rendering
└── data/               # Separated data files
    ├── links.js        # Social media links
    ├── posts.js        # Blog posts
    └── gallery.js      # Portfolio artwork
```

**Why separate data files?**  
Keeping data separate from logic makes it easy to add blog posts or artwork without touching the JavaScript code -- and to be honest, I just like it clean and not overwhelming.

---

## What I Tried to Learn — and You Can Too

### **HTML (index.html)**

- Semantic HTML structure
- Accessibility best practices (ARIA labels, alt text)
- How to organize a multi-section page
- Meta tags for SEO and social sharing

### **CSS (style.css)**

- CSS Custom Properties (variables) for theming
- CSS Grid for page layout
- Flexbox for component layouts
- Responsive design techniques
- Dark mode implementation
- Gradient text effects
- Smooth transitions and animations

### **JavaScript (script.js)**

- DOM manipulation
- Event handling
- Array methods (map, filter, find)
- Template literals for HTML generation
- Hash-based routing (single-page app behavior)
- localStorage for persistent preferences
- Modular code organization

---

## How to Use This Code

### **View it live:**

Visit [veronikanoolien.github.io](https://veronikanoolien.github.io)

### **Run it locally:**

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process needed.

### **Modify for your own use:**

**To customize this for yourself:**

1. Edit `data/links.js` - Add your social media links
2. Edit `data/posts.js` - Write your blog posts
3. Edit `data/gallery.js` - Add your portfolio images
4. Edit `index.html` - Change name, bio, and profile info
5. Edit `style.css` (variables at top) - Change colors

---

## About Me

I'm Veronika Noolien, an illustrator and book editor learning web development to better showcase my creative work online. This project represents my journey from "oh my god, what the hell" to something that actually looks like a real webpage.

**Connect with me:**

- 📸 [Instagram](https://www.instagram.com/veronika_noolien/)
- 🎨 [RedBubble](https://www.redbubble.com/people/noolien)
- ☕ [Buy Me a Coffee](https://www.buymeacoffee.com/veronikanoolien)

_Last updated: January 2026_
