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
                        />
                    ))}
                </tbody>
            </table>
            <a href="/addBand">Add a new band</a>
        </div>
    );
}
