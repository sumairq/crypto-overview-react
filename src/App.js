import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import CoinDetails from './components/CoinDetails';
import './App.css';

function App() {
  return (  
    <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/details/:coinId" element={<CoinDetails/>} />
    </Routes>
      
    </>
  );
}

export default App;
