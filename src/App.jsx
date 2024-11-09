
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
    <Route path='/' element={<Apifile/>}/>
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
  )
}

export default App


