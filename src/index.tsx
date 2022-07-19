import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Home'
import './styles/main.css'
import { About } from './pages/About'
import { CaseStudyAlgorithm } from 'pages/CaseStudies/clients/algorithm/CaseAlgorithm'
import { CaseStudies } from 'pages/CaseStudies/main'
import { CaseStudyPCT } from 'pages/CaseStudies/clients/pct/CasePCT'
import { UIUX } from './pages/UIUX'
<<<<<<< HEAD
import { CaseStudies } from 'pages/CaseStudies'
import { WebDevelopment } from 'pages/WebDevelopment'
=======
>>>>>>> d9ad57576bfae70bb9c036266aa5a1b363a0a5e3

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/uiux" element={<UIUX />}></Route>
      <Route path="/case-studies" element={<CaseStudies />}></Route>
<<<<<<< HEAD
      <Route path="/web-development" element={<WebDevelopment/>}></Route>
=======
      <Route path="/algorithm-agency" element={<CaseStudyAlgorithm />}></Route>
      <Route path="/pct" element={<CaseStudyPCT />}></Route>
>>>>>>> d9ad57576bfae70bb9c036266aa5a1b363a0a5e3
    </Routes>
  </BrowserRouter>
)
