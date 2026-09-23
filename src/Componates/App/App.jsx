import './App.css'
import { Routes, Route } from "react-router-dom"
import Reviews from '../../Pages/Reviews/Reviews'
import AboutUs from '../../Pages/AboutUs/AboutUs'
import Gallery from '../../Pages/Gallery/Gallery'
import Home from '../../Pages/Home/Home'


function App() {

  return (
    <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
    </div>
  )
}

export default App
