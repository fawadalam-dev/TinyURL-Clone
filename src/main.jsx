
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Redirect from './Redirect.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:code" element={<Redirect />} />
    </Routes>
  </BrowserRouter>,
)
