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
import { WebDevelopment } from 'pages/WebDevelopment'
import { Portfolio } from 'pages/Portfolio'
import { ResearchAndAnalysis } from 'pages/ResearchAndAnalysis'
import { WebsiteUpdates } from 'pages/WebsiteUpdates'
import { WhoWeHelp } from 'pages/WhoWeHelp'
import './styles/main.css'
import './styles/modal-video.scss'
import { PrivacyPolicy } from 'pages/PrivacyPolicy'
import { Terms } from 'pages/Terms'
import { SingleBlogTemplate } from 'pages/SingleBlogTemplate'
import { SinglePortfolioTemplate } from 'pages/SinglePortfolioTemplate'
import { Blogs } from 'pages/Blogs'

// Before
import { render } from 'react-dom'
import { Services } from 'pages/Services'
import { Agencies } from 'pages/Agencies'
const container = document.getElementById('root')
// asdasd
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/uiux" element={<UIUX />}></Route>
      <Route path="/case-studies" element={<CaseStudies />}></Route>
      <Route path="/algorithm-agency" element={<CaseStudyAlgorithm />}></Route>
      <Route path="/pct" element={<CaseStudyPCT />}></Route>
      <Route path="/web-development" element={<WebDevelopment />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route
        path="/research-and-analysis"
        element={<ResearchAndAnalysis />}
      ></Route>
      <Route path="/website-updates" element={<WebsiteUpdates />}></Route>
      <Route path="/who-we-help" element={<WhoWeHelp />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      <Route path="/terms-of-service" element={<Terms />}></Route>
      <Route
        path="/blog/:id"
        element={
          <SingleBlogTemplate
            id={location.href.slice(
              location.href.indexOf('/blog/') + '/blog/'.length
            )}
          />
        }
      ></Route>
      <Route
        path="/portfolio/:id"
        element={
          <SinglePortfolioTemplate
            id={location.href.slice(
              location.href.indexOf('/portfolio/') + '/portfolio/'.length
            )}
          />
        }
      ></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/agencies" element={<Agencies />}></Route>
      {/* <Route path="/privacy-policy" element={PrivacyPolicy}></Route> */}

      <Route path="*" element={<Homepage />}></Route>
    </Routes>
  </BrowserRouter>,
  container
)
