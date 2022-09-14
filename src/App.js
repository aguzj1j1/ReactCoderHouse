import logo from './logo.svg';
import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>

    </>
  );
}

export default App;
