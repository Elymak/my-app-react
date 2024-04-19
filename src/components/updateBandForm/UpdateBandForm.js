import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import BandForm from "./../bandForm/BandForm";

export default function UpdateBandForm() {
    //state
    const {bandId} = useParams();
    const [band, setBand] = useState();
    const [isMounted, setIsMounted] = useState("");

    useEffect (() => {
        !isMounted && fetch('http://localhost:8080/api/band/' + bandId)
            .then((res) => {
                return res.json();
            })
            .then(data => {
                setBand(data);
                setIsMounted(true);
            })
            .catch(rejected => {
                console.log("failed", rejected);
            });
    });

    //comportements
    const updateBand = (updatedBand) => {
        const updatedBandCopy = {
            "id": bandId,
            "name": updatedBand.name,
            "style": updatedBand.style,
            "image": updatedBand.image
        };
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBandCopy)
        };
        fetch('http://localhost:8080/api/band', requestOptions)
            .then(response => window.location = "/");
    }

    //affichage
    if(isMounted) {
        return (
            <div>
                <BandForm title="Modify Band" submitButtonLabel="Modify band" handleFormSubmit={updateBand} bandInfos={band} />
            </div>
        );
    } else {
        return(
            <div>...</div>
        );
    }
}