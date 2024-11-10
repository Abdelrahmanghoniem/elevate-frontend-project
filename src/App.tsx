
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./components/navbar"
import HomePage from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>


  )
}

export default App