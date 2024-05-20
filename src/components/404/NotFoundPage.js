import "./NotFoundPage.css";

export default function NotFoundPage () {
    return (
        <div className="notFound">
            <p>Woups ! La page que vous avez demandé est introuvable</p>
            <a href="/">Accueil</a>
        </div>
    );
};