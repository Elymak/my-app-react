import {useState, useEffect} from "react";

export default function FestivalBandInfos({bandInfos, onClickConsultBand}) {

    //state

    //comportements
    const onClickBand = (event) => {
        onClickConsultBand(bandInfos.id);
    }

    //affichage
    return (
        <tr key={bandInfos.id} onClick={onClickBand}>
            <td>{bandInfos.name}</td>
            <td><img src={bandInfos.logo} /></td>
            <td>{bandInfos.showDate}</td>
        </tr>
    )

}