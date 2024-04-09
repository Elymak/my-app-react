import { useState } from "react";
import "./AddProduitForm.css";

export default function AddProduitForm({ handleAdd }) {

    //state
    const [nouveauProduit, setNouveauProduit] = useState("");

    //comportements
    const handleChange = (event) => {
        setNouveauProduit(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const name = nouveauProduit;
        const nameFormatted = name.charAt(0).toUpperCase() + name.substring(1);
        const produitAAjouter = {id, name: nameFormatted};

        handleAdd(produitAAjouter);
        setNouveauProduit("");
    };

    //affichage
    return (
        <form action="submit" onSubmit={handleSubmit} className="add-produit-form">
            <input value={nouveauProduit} onChange={handleChange} type="text" placeholder="Ajouter un produit..." />
            <button>Ajouter +</button>
        </form>
    );
}
