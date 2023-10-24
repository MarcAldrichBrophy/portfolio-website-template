import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

import HomePage from './pages/home';
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
