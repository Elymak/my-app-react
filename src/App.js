import logo from './logo.svg';
import './App.css';
import ListProduits from './components/produit/ListProduits';
import ListUsers from "./components/users/ListUsers";

function App() {
  return (
    <div>
      <h1 className="App">Mon app</h1>
      <ListUsers />

    </div>
  );
}

export default App;
