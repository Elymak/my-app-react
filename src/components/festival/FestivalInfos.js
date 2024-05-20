import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

export default function FestivalInfos({}) {
    //state
    const {festivalId} = useParams();
    const [festival, setFestival] = useState();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted && fetch('http://localhost:8080/api/festival/' + festivalId)
            .then((res) => {
                return res.json();
            })
            .then(data => {
                setFestival(data);
                setIsMounted(true);
            })
            .catch(rejected => {
                console.log("failed", rejected);
            });
    });

    //affichage
    if(isMounted) {
        return(
            <div>
                <h1>{festival.name}</h1>
                <img src={festival.image} />
                <caption>Programmation</caption>
                <table>
                    <thead>
                        <tr>
                            <td>Band</td>
                            <td>Hour</td>
                        </tr>
                    </thead>
                    <tbody>
                        {festival.bands.map((band) => (
                            <tr>
                                <td>{band.name}</td>
                                <td>{band.showdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return(
            <div>...</div>
        );
    }

}