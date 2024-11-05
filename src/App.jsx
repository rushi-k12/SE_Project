
import './App.css';
import Apifile from './components/Apifile';
import Landingpage from './components/landingpage.jsx'
import Bitprediction from './components/bitprediction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Apifile/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/predict' element={<Bitprediction/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


