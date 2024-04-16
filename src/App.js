import logo from './logo.svg';
import './App.css';
import ListProduits from './components/produit/ListProduits';
import ListUsers from "./components/users/ListUsers";
import AddUserForm from "./components/addUserForm/AddUserForm";

//TODO
//import {
//    BrowserRouter as Router,
//    Routes,
//    Route,
//    Navigate,
//} from "react-router-dom";

function App() {

    //comportements
    const handleAddUser = (newUserToAdd) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserToAdd)
        };
        fetch('http://localhost:8080/api/save', requestOptions)
            .then(response => console.log("post", response));
    }

    return (
        <div>
          <h1 className="App">Mon app</h1>
          <ListUsers />
          <AddUserForm handleAddUser={handleAddUser} />
        </div>
    );
}

export default App;
