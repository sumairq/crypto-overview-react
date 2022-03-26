import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import CoinDetails from './components/pages/CoinDetails';
import VoiceSearch from './components/pages/VoiceSearch';
import Settings from './components/pages/Settings';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:coinId" element={<CoinDetails />} />
        <Route path="/VoiceSearch" element={<VoiceSearch />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>

    </>
  );
}

export default App;
