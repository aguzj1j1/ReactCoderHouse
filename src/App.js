import logo from './logo.svg';
import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/product/:idProduct" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart/>} />
          </Routes>

        </BrowserRouter>
      </CartProvider>

    </>
  );
}

export default App;
