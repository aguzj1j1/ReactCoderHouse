import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemList from './components/ItemList'
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer name={"CoderHouse"} />
      
    </>
  );
}

export default App;
