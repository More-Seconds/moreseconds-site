import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Home'
import './styles/main.css'
import { About } from './pages/About'
import { UIUX } from './pages/UIUX'
import { CaseStudies } from 'pages/CaseStudies'
import { WebDevelopment } from 'pages/WebDevelopment'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/uiux" element={<UIUX />}></Route>
      <Route path="/case-studies" element={<CaseStudies />}></Route>
      <Route path="/web-development" element={<WebDevelopment/>}></Route>
    </Routes>
  </BrowserRouter>
)
