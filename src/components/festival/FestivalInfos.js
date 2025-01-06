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
                <div>
                    <img src={festival.image} />
                    <p>Du {festival.startTime} au {festival.endTime}</p>
                    <h2>Programme</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>Band</td>
                                <td>Logo</td>
                                <td>Hour</td>
                            </tr>
                        </thead>
                        <tbody>
                            {festival.bands.map((band) => (
                                <tr key={band.id}>
                                    <td>{band.name}</td>
                                    <td><img src={band.logo} /></td>
                                    <td>{band.showDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <a className="back" href="/">Back to main menu</a>
            </div>
        );
    } else {
        return(
            <div>...</div>
        );
    }

}