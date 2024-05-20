import "./FestivalItem.css";

export default function FestivalItem({ festivalInfos, onFestivalClick }) {
    //comportements
    const onClick = (event) => {
        onFestivalClick(festivalInfos.id);
    }

    //affichage
    return(
        <img onClick={onClick} src={festivalInfos.image} />
    );
}