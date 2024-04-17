import logo from './logo.svg';
import './App.css';
import ListProduits from './components/produit/ListProduits';
import ListBand from "./components/band/ListBand";
import AddBandForm from "./components/addBandForm/AddBandForm";

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
                    element={<ListBand />}
                />
                <Route
                    exact
                    path="/addBand"
                    element={<AddBandForm />}
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
