import logo from './logo.svg';
import './App.css';
import ListBand from "./components/band/ListBand";
import BandInfos from "./components/band/BandInfos";
import BandForm from "./components/bandForm/BandForm";
import AddBandForm from "./components/addBandForm/AddBandForm";
import UpdateBandForm from "./components/updateBandForm/UpdateBandForm";

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
                <Route path="/updateBand">
                    <Route path=":bandId" element={<UpdateBandForm />} />
                </Route>
                <Route path="/band">
                    <Route path=":bandId" element={<BandInfos />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
