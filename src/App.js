import logo from './logo.svg';
import './App.css';
import ListProduits from './components/produit/ListProduits';
import ListUsers from "./components/users/ListUsers";
import AddUserForm from "./components/addUserForm/AddUserForm";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<ListUsers />}
                />
                <Route
                    exact
                    path="/addUser"
                    element={<AddUserForm />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
