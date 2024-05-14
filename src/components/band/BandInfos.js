import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

export default function BandInfos({}) {
    //state
    const {bandId} = useParams();
    const [band, setBand] = useState();
    const [isMounted, setIsMounted] = useState(false);

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

    //affichage
    if(isMounted) {
        return (
            <div>
                <h1>{band.name}</h1>
                <h2>{band.style}</h2>
                <img src={band.photo} />
                <p>{band.description}</p>
            </div>
        );
    } else {
        return(
            <div>...</div>
        );
    }
}