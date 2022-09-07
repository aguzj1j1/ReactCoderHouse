import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
      
      
    </>
  );
}

export default App;
