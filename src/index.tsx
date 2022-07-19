import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Home'
import { About } from './pages/About'
import { CaseStudyAlgorithm } from 'pages/CaseStudies/clients/algorithm/CaseAlgorithm'
import { CaseStudies } from 'pages/CaseStudies/main'
import { CaseStudyPCT } from 'pages/CaseStudies/clients/pct/CasePCT'
import { UIUX } from './pages/UIUX'
import { Pricing } from './pages/Pricing'
import './styles/main.css'
import './styles/modal-video.scss'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/uiux" element={<UIUX />}></Route>
      <Route path="/case-studies" element={<CaseStudies />}></Route>
      <Route path="/algorithm-agency" element={<CaseStudyAlgorithm />}></Route>
      <Route path="/pct" element={<CaseStudyPCT />}></Route>
    </Routes>
  </BrowserRouter>
)
