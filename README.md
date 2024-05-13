# More Seconds Site
- [More Seconds Site](#more-seconds-site)
  - [Getting Started](#getting-started)
    - [Install](#install)
    - [Build](#build)
- [Github Workflow](#github-workflow)
  - [Starting a new feature](#starting-a-new-feature)
  - [Merging your branch](#merging-your-branch)
- [App Structure](#app-structure)
  - [Components directory](#components-directory)
    - [Forms directory](#forms-directory)
    - [Shared sections directory](#shared-sections-directory)
    - [Typography directory](#typography-directory)
    - [General Components](#general-components)
  - [Containers directory](#containers-directory)
    - [Layout directory](#layout-directory)
    - [Shared directory](#shared-directory)
  - [Pages directory](#pages-directory)
  - [Public directory](#public-directory)
    - [Images directory](#images-directory)
    - [SVGs directory](#svgs-directory)
  - [Styles directory](#styles-directory)
    - [main.css](#maincss)
- [Tech](#tech)
  - [Tailwind](#tailwind)
    - [Basics](#basics)
    - [Responsiveness](#responsiveness)
    - [Customizing Tailwind](#customizing-tailwind)
    - [Tailwind Intellisense](#tailwind-intellisense)
  - [React Router](#react-router)
    - [Setup](#setup)
  - [Adding routes](#adding-routes)

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

When your feature is complete and all your changes are pushed to your current branch go to the project github and click on branches next to the branch dropdown. from this page you can create a pull request on the staging branch and let Erik know so he can review the changes and merge the branch with main

---

# App Structure

Most of the code we will need to edit is in the "src" directory which is laid out as follows. This organization can change or adapt with the site but I found it to be pretty intuitive

```
|--- components
     |--- forms
     |--- shared sections
     |--- typography
     |--- (general)
|--- containers
     |--- layout
     |--- shared
|--- pages
|--- public
     |--- images
     |--- svgs
|--- styles
```

## Components directory

Components can be considered as any reusable visual element on the site

### Forms directory

---

These are the two forms on the site. They both use formik to handle form state and Yup to handle validation. The phone number field in the footer form was accomplished with a react-text-mask masked input. Both forms will be connected to hubspot

**Contact Form**

```
<FooterForm />
```

**Signup**

```
<Signup />
```

### Shared sections directory

---

Shared sections are entire sections with hard coded copy and images that can be dropped into any page

**Services**

(add screenshot)
Headings and grid layout are located in index.tsx.

```
<Sevices />
```

**Service**

Individual service cards are located in Service.tsx. The Service component takes a title, image, and slug of the page to link to as props and displays the inner card layout

```
<Service
  title="Web Development"
  className="col-start-1 row-span-2 row-start-1"
  image={Code}
  slug={'/development'}
/>

```

**Team**

(add screenshot)
Composes an SVG and copy in the SideBySide layout container.

```
<Team />
```

**Accordian**

The accordian layout, state, and click events are handled in the Accordian.tsx file. it takes a title and an image to use as the bullet point

```
<Accordian title="Fast" image={sonic} />
```

**Clients**

(add screenshot)
Renders a headline and grid of client logos

```
<Clients />
```

**Partners**

(add screenshot)

```
<Partners />
```

### Typography directory

---

**Heading**

The heading component requires passing a heading level as a prop. By default the text is white but passing a dark prop will make it dark.

```
<Heading level="1" dark className="{tailwind classes here if necessary}">Title</Heading>
```

**Body Text**

The body text component holds the base styles for body text

```
<BodyText className={tailwind classes here if necessary}>Some text</BodyText>
```

**Small Title**

Small orange subtitle often paired with a heading

```
<SmallTitle>Title</SmallTitle>
```

### General Components

---

**Button**

Base button styles with variant prop. supported variants are "primary" and "secondary"

```
<Button variant="primary">Click Me</Button>
```

**NavMenu**

Conditionally renders either a standard navbar or a hamburger menu based on the presence of the "mobile" prop. If the component is in mobile mode the hamburger menu open state will be passed to the open prop as a boolean

```
<NavMenu />
or
<NavMenu mobile open={openState}/>
```

## Containers directory

Containers are skeletons with set layout styles or sitewide layout related components

### Layout directory

---

This contains the sitewide layout

**Layout**

The layout component is made up of the header, a slot for page content, and the footer. It will be on every page and act as a wrapper for the page content.

```
<Layout>
  {page content...}
</Layout>
```

**Footer**

Site footer

```
<Footer />
```

**Footer CTA**

Section right above the footer with contact form and cta

```
<FooterCTA />
```

**Header**

Site header

```
<Header />
```

### Shared directory
___

Reused section layouts that will have differing content in accross contexts

**Side By Side**

Two column section layout with an image on one side. Takes an SVG as props as well as an optional "reverse" prop that will swap the columns

```
<SideBySide image={spaceship} reverse>
{content}
</SideBySide>
```

**SVG Background**

Renders a full width svg background behind whatever you put inside it. takes a backround prop

```
<SVGBackground background={stars}>
{content}
</SVGBackground>
```

## Pages directory

All full pages for the site. These are the components React Router will use to render each page

## Public directory

This holds all our assets. The vite bundler uses the folder name "public" to look for assets at build time.

### Images directory

---

All of our images. To keep imports neat in the rest of the project, every time you add an image to the uploads folder, go to the index.tsx file in this folder and do the following.

```
import Image from './image.png'

export { Image }
```

This way when importing multiple images from any other file will look like this

```
import { Image, Image1, Image2 } from '../public/images'
```

### SVGs directory

We are using vite-plugin-svgr for SVG's. It allows you to easily import an svg as a react component. When you upload a new svg import and export it from the index.tsx file in the svgs directory. The syntax looks like this

```
import {ReactComponent as MySVG} from './thing.svg'
export { MySVG }
```

## Styles directory

### main.css
Our base tailwind styles and google fonts are imported here. We can also add custom css here but tailwind should be capable of handling everything on the site.


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

## Contact Form

[Contact Form Doc] (https://docs.google.com/document/d/1J9oZVpnG-93K0Nd0NFpG80RFEmlc-w-qPqqc_CTQT5M/edit?usp=sharing)
