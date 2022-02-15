import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import ShopPayment from './pages/ShopPayment';
import CountNumber from './pages/CountNumber';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count-number" element={<CountNumber />} />
        <Route path="/shop-payment" element={<ShopPayment />} />
        {/* <CountNumber /> */}

      </Routes>
    </>
  );
}

export default App;
