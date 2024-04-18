import { useState, useEffect } from "react";
import Band from "./Band";
import "./ListBand.css";

export default function ListBand() {

    //state
    const [bands, setBands] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        !isMounted && fetch("http://localhost:8080/api/bands")
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setBands(data);
            setIsMounted(true);
        })
        .catch(rejected => {
            console.log("failed", rejected);
        });
    }, [isMounted]);

    //comportements
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

    //affichage
    return (
        <div>
            <h1>Band List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Style</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {bands.map((band) => (
                        <Band
                            key={band.id}
                            bandInfos={band}
                            onClickEdit={onClickEditBand}
                            onClickDelete={onClickDeleteBand}
                        />
                    ))}
                </tbody>
            </table>
            <a href="/addBand">Add a new band</a>
        </div>
    );
}
