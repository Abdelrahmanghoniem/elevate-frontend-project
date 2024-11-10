import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./components/navbar"
import HomePage from './pages/HomePage'
import { Container } from '@mui/material';

function App() {

  return (
    <BrowserRouter>
      <div className="custom-bg">

    <Navbar />
    
    <Container className="my-5">

    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </Container>
    </div>
    
    

  </BrowserRouter>


  )
}

export default App
