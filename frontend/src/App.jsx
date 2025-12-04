import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import react from "react";
import './App.css';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
