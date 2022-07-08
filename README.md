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

# Github Workflow

## Starting a new feature

Whenever you start on a new task or feature, create a new branch on github

```
git branch your-branch-name
```

Make all your commits and pushes in this branch

## Merging your branch

When your feature is complete and all your changes are pushed to your current branch go to the project github and click on branches next to the branch dropdown. from this page you can create a pull request and let someone know so they can review the changes and merge the branch with main

---

# Tech

## Tailwind

[Docs](https://tailwindcss.com/docs/installation)

### Basics

```
<div class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-lg rounded-xl">
  <div class="shrink-0">
    <img class="w-12 h-12" src="/img/logo.svg" alt="ChitChat Logo">
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

### Tailwind Intellisense

This extension for Visual Studio Code will list out tailwind utility class options as you write them so you dont have to keep looking at the docs.
To install open visual studio code and go to the extensions tab on the far left. Search tailwind and it should be the first thing that pops up. Hit install and you'll be good to go

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

## Heading

The heading component requires passing a heading level as a prop. By default the text is white but passing a dark prop will make it dark.

```
<Heading level="1" dark className="{tailwind classes here if necessary}">Title</Heading>
```

## Body Text

The body text component holds the base styles for body text

```
<BodyText className={tailwind classes here if necessary}>
```

## Button

Base button styles with variant prop. supported variants are "primary" and "secondary"

```
<Button variant="primary">Click Me</Button>
```

## NavMenu

Conditionally renders either a standard navbar or a hamburger menu based on the presence of the "mobile" prop. If the component is in mobile mode the hamburger menu open state will be passed to the open prop as a boolean

```
<NavMenu />
or
<NavMenu mobile open={openState}/>
```

## Form

Uses formik to handle form state and Yup to handle validation. The phone number field was accomplished with a react-text-mask masked input.

```
<FooterForm />
```

## Signup

Uses formik and yup. will be connected to hubspot

```
<Signup />
```

## Clients

Shared section across multiple pages. Renders a headline and grid of client logos

```
<Clients />
```

# Containers

## Layout

The layout component is made up of the header, a slot for page content, and the footer. It will be on every page and act as a wrapper for the page content.

```
<Layout>
  {page content...}
</Layout>
```

## SVG Background

Takes an svg and children and applies the svg as a background with text overlaid

```
import MyImage from 'assets/images'

<SVGBackground background={MyImage}>
{Content}
</SVGBackground>
```
