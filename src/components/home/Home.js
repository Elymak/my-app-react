import ListFestival from "../festival/ListFestival";
import "./Home.css";

export default function Home () {

    //affichage
    return (
        <div id="home">
            <h1>Bienvenue !</h1>
            <div className="introduction">
                <h2>Introduction</h2>
                <p>Bonjour et bienvenue dans ce petit gestionnaire de festivals !</p>
                <p>Ici vous pourrez créer et gérer plusieurs programmations de groupes de musiques ou artistes
                 dans un ou plusieurs festivals.</p>
                <p>Vous pourrez ajouter des groupes de musiques à la programmation d'un festival mais attention à ne pas
                programmer un groupe à plusieurs festivals le même jour, ou à programmer 2 groupes à la même heure de la
                journée pour un seul festival :)</p>
            </div>
            <ListFestival />
        </div>
    );

}