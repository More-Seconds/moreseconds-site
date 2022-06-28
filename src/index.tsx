import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage } from 'pages/Home';
import './styles/main.css';

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  </BrowserRouter>
)
