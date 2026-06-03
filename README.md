# Bento-style CV

Bento-style CV — responsive personal portfolio built with CSS Grid & Flexbox

## Live Demo

👉 https://julvin80.github.io/bento-cv/

## Purpose

This project was built as a continuation of my CSS learning journey:

Flexbox → layout fundamentals  
Grid → advanced layout system  
Bento CV → applying both in a real portfolio format

The goal was to design a modern CV layout inspired by bento UI patterns.

## Structure

```
bento-cv/
├── index.html
├── css/
│   ├── main.css
│   └── grid.css
├── js/
│   └── main.js
├── assets/
│   ├── icons/
│   └── images/
└── README.md
```

## Run

```bash
npm run dev
```

## Features

- **CSS Grid layout** — responsive bento grid with 12-column system
- **Smooth scroll** — native `scroll-behavior: smooth`
- **Scroll-to-top button** — appears after scrolling 300px, smooth scroll to top
- **Card entrance animation** — staggered `fadeInUp` animation on page load
- **Keyboard navigation** — `:focus-visible` outline for accessible navigation

## Tech

- CSS Grid
- Flexbox
- Vanilla HTML/CSS/JS
