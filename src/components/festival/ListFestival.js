import { useState, useEffect } from "react";
import FestivalItem from "./FestivalItem";
import "./ListFestival.css";

export default function ListFestival () {
    //state
    const [festivals, setFestivals] = useState([]);
    const [filteredFestivals, setFilteredFestivals] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        !isMounted && fetch("http://localhost:8080/api/festivals")
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setFestivals(data);
            setFilteredFestivals(data);
            setIsMounted(true);
        })
        .catch(rejected => {
            console.log("failed", rejected);
        });
    }, [isMounted]);

    //comportements
    const onClickGoToFestivalPage = (festivalId) => {
        window.location = "/festival/" + festivalId;
    };

    //affichage
    return (
        <div id="festivalsComponent">
            <h1>Festivals</h1>
            <ul id="festivals">
                {filteredFestivals.map((festival) => (
                    <li key={festival.id}>
                        <FestivalItem
                            onFestivalClick={onClickGoToFestivalPage}
                            festivalInfos={festival} />
                    </li>
                ))}
            </ul>
            <a href="/addFestival">Add a new festival</a>
        </div>
    );
};