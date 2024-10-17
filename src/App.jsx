
import './App.css'
import Apifile from './components/Apifile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Apifile/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
