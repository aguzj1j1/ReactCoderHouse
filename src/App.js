import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer name={"CoderHouse"} />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;
