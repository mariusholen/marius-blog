---
title: "Building a Responsive, Accessible Header with Dark Mode Toggle"
pubDate: 2025-04-18
slug: "base-layout-styling"
description: "A breakdown of how I implemented a compact, responsive, and accessible header in Astro — complete with a dark mode toggle and semantic layout."
author: "Marius Holen"
tags: ["layout", "styling", "astro", "react", "components"]
---

# 🛠 Building a Responsive, Accessible Header with Dark Mode Toggle

In this post, I’ll walk through the improvements I’ve made to the header and navigation of my Astro site. The goal was to create a compact, accessible, and responsive layout — with a built-in theme toggle for light/dark mode.

---

## 💡 Key Improvements

### 1. Responsive Header & Nav

I used [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) to adapt layout behavior. On small screens, the nav title is hidden to keep the header compact:

```css
@container header (max-width: 600px) {
	.nav-title {
		display: none;
	}
}
```

### 2. Dark mode toggle

I added a theme toggle button using an accessible SVG with two paths (light and dark icons). It respects the user’s prefers-color-scheme but can be overridden via localStorage.

```typescript
const handleToggleClick = () => {
	const root = document.documentElement;
	const isDark = root.classList.toggle("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");
};
```

### 3. Accessible focus & hover states

To improve keyboard navigation, I added `:focus` outlines and hover scaling:

```css
.theme-toggle-icon:focus {
	outline: 2px solid var(--color-border);
	outline-offset: 2px;
	border-radius: 4px;
}

.theme-toggle-icon:hover {
	transform: scale(0.95);
}
```

### 4. Improved color palette

I defined all colors as CSS variables in `global.css`, including separate values for light and dark modes. with the aim of maintaining design consistency.

This should make things more scalable and consistent. This makes it easier for components across the site to follow the same visual language - and if I want to tweak a color or adjust the theme, I only have to do it in one place. For example:

```css
:root {
	--color-primary: #0118d8;
	--color-primary-hover: #1b56fd;
	--color-primary-bg: #e6ecff;
}

.dark {
	--color-primary: #8ca4ff;
	--color-primary-hover: #a7b9ff;
	--color-primary-bg: #1f2a48;
}
```

Then, throughout the app I can just use:

```css
.nav-title {
	color: var(--color-heading);
}
```

That said, this is still a first draft of the color palette — I expect to be tweaking and refining the variables as I see how the UI feels in real-world usage and as the design evolves.
