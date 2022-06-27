# More Seconds Site

This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate to be used with [Tailwindcss](https://tailwindcss.com).

## Getting Started

### Install

Clone the project.

```bash
git clone https://github.com/More-Seconds/moreseconds-site.git
```

Access the project directory.

```bash
cd moreseconds-site
```

Install dependencies.

```bash
npm install
```

Serve with hot reload at http://localhost:3000.

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

# Tech

## Tailwind

### Basics

```
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

In the example above, we’ve used:

- Tailwind’s flexbox and padding utilities (flex, shrink-0, and p-6) to control the overall card layout
- The max-width and margin utilities (max-w-sm and mx-auto) to constrain the card width and center it horizontally
- The background color, border radius, and box-shadow utilities (bg-white, rounded-xl, and shadow-lg) to style the card’s appearance
- The width and height utilities (w-12 and h-12) to size the logo image
- The space-between utilities (space-x-4) to handle the spacing between the logo and the text
- The font size, text color, and font-weight utilities (text-xl, text-black, font-medium, etc.) to style the card text

### Responsiveness

Breakpoint prefix Minimum width CSS
sm 640px @media (min-width: 640px) { ... }
md 768px @media (min-width: 768px) { ... }
lg 1024px @media (min-width: 1024px) { ... }
xl 1280px @media (min-width: 1280px) { ... }
2xl 1536px @media (min-width: 1536px) { ... }
To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character:

<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->

```
<img class="w-16 md:w-32 lg:w-48" src="...">
```

### Customizing Tailwind

[Docs](https://tailwindcss.com/docs/installation)
You can create your own classes or overwrite defaults in the tailwind.config.js file

```
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```

## React Router

### Setup

React router setup is in the index.tsx file

```
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage } from 'pages/Home';

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  </BrowserRouter>
)

```

## Adding routes

Simply add another Route components inside the Routes component with the corresponding page component

```
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
)
```

---

# Components

## Layout

The layout component is made up of the header, a slot for page content, and the footer. It will be on every page and act as a wrapper for the page content.

Let's add to this as we start developing more components
