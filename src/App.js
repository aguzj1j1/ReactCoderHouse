import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/product/:productId" element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
