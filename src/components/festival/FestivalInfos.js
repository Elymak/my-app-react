import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import FestivalBandInfos from "./FestivalBandInfos";

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

    //comportements
    const onClickConsultBand = (bandId) => {
        window.location = "/band/" + bandId;
    }

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
                                <FestivalBandInfos
                                    key={band.id}
                                    bandInfos={band}
                                    onClickConsultBand={onClickConsultBand}
                                />
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