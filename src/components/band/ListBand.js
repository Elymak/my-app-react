import { useState, useEffect } from "react";
import Band from "./Band";
import "./ListBand.css";

export default function ListBand() {

    //state
    const [bands, setBands] = useState([]);
    const [filteredBands, setFilteredBands] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        !isMounted && fetch("http://localhost:8080/api/bands")
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setBands(data);
            setFilteredBands(data);
            setIsMounted(true);
        })
        .catch(rejected => {
            console.log("failed", rejected);
        });
    }, [isMounted]);

    //comportements
    const handleSearchText = (event) => {
        let filter = event.target.value.trim();
        const filteredData = bands.filter((band) => {
            if(filter == "") {
                return band;
            } else {
                return band.name.toLowerCase().includes(filter.toLowerCase());
            }
        });
        setFilteredBands(filteredData);
        setSearchText(filter);
    }

    const onClickEditBand = (bandId) => {
        window.location = "/updateBand/" + bandId;
    }

    const onClickDeleteBand = (bandId) => {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch('http://localhost:8080/api/band/' + bandId, requestOptions)
            .then(response => window.location = "/");
    }

    const onClickGoToBandInfos = (bandId) => {
        window.location = "/band/" + bandId;
    }

    //affichage
    return (
        <div>
            <h1>Band List</h1>
            <div id="actions">
                <input id="search" value={searchText} onChange={handleSearchText} type="text" placeholder="Search" />
                <a href="/addBand">+</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Style</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBands.map((band) => (
                        <Band
                            key={band.id}
                            bandInfos={band}
                            onClickEdit={onClickEditBand}
                            onClickDelete={onClickDeleteBand}
                            onClickConsult={onClickGoToBandInfos}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
