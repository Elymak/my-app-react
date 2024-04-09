import logo from './logo.svg';
import './App.css';
import ListProduits from './components/produit/ListProduits';

function App() {
  return (
    <div>
      <h1 className="App">Mon app de courses</h1>
      <ListProduits />
    </div>
  );
}

export default App;
