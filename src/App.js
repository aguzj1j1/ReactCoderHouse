import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/home/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import { PageProvider } from './context/PageContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';
import { initializeApp } from "firebase/app";
import CheckOut from './components/checkout/CheckOut';


const firebaseConfig = {
  apiKey: "AIzaSyDjg5A8hwqcfruI2pCM-hhhAO2s9r_ZDc4",
  authDomain: "coderhousereact-15f19.firebaseapp.com",
  projectId: "coderhousereact-15f19",
  storageBucket: "coderhousereact-15f19.appspot.com",
  messagingSenderId: "623461157428",
  appId: "1:623461157428:web:e0b8c195928d81c59d1861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categorys/:id" element={<ItemListContainer />} />
            <Route exact path="/product/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<PageProvider><CheckOut /></PageProvider>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </>
  );
}

export default App;
