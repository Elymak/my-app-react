import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import ListBand from "./components/band/ListBand";
import BandInfos from "./components/band/BandInfos";
import AddBandForm from "./components/band/addBandForm/AddBandForm";
import UpdateBandForm from "./components/band/updateBandForm/UpdateBandForm";
import ListFestival from "./components/festival/ListFestival";
import FestivalInfos from "./components/festival/FestivalInfos";
import NotFoundPage from "./components/404/NotFoundPage";

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
                    element={<Home />}
                />
                <Route
                    exact
                    path="/bands"
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
                <Route path="/festival">
                    <Route path=":festivalId" element={<FestivalInfos />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Router>
    );
}

export default App;
