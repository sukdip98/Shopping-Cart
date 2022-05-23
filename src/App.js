import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
