
import './App.css';
import Apifile from './components/Apifile';
import { AuthProvider } from './context/Authcontext.jsx';
import Bitprediction from './components/bitprediction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register.jsx'
import BnbPrediction from './components/bnbprediction';
import DogecoinPrediction from './components/Dogecoinprediction';
import EthereumPrediction from './components/ethereumprediction';
import SolanaPrediction from './components/solanaprediction';
import TetherPrediction from './components/tether';
import ToncoinPrediction from './components/toncoin';
import TronPrediction from './components/tron';
import UsdcPrediction from './components/usdc';
import XRPPrediction from './components/xrp';
import Landingpage from './components/landingpage.jsx'
import About from './components/about.jsx'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Apifile/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/predict/btc' element={<Bitprediction/>}/>
      <Route path='/predict/bnb' element={<BnbPrediction/>}/>
      <Route path='/predict/doge' element={<DogecoinPrediction/>}/>
      <Route path='/predict/eth' element={<EthereumPrediction/>}/>
      <Route path='/predict/sol' element={<SolanaPrediction/>}/>
      <Route path='/predict/usdt' element={<TetherPrediction/>}/>
      <Route path='/predict/ton' element={<ToncoinPrediction/>}/>
      <Route path='/predict/trx' element={<TronPrediction/>}/>
      <Route path='/predict/usdc' element={<UsdcPrediction/>}/>
      <Route path='/predict/xrp' element={<XRPPrediction/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App


