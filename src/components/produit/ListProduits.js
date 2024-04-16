import { useState } from "react";
import Produit from "./Produit";
import AddProduitForm from "./AddProduitForm";
import "./ListProduits.css";

export default function ListProduits() {

    //state
    const [produits, setProduits] = useState([
        {id: 1, name: "Sel"},
        {id: 2, name: "Pâtes"},
        {id: 3, name: "PQ"}
    ]);

    //comportements
    const handleAdd = (produitAAjouter) => {
        const produitsCopy = [...produits];
        produitsCopy.push(produitAAjouter);
        setProduits(produitsCopy);
    };

    const handleDelete = (id) => {
        //1 copie du state
        const produitsCopy = [...produits];
        //2 modifier le copy
        const produitsUpdated = produitsCopy.filter(produit => produit.id !== id);
        //3 actualiser le state
        setProduits(produitsUpdated);
    };

    //affichage
    return (
        <div className="list-container">
            <h1>Liste de Course</h1>
            <AddProduitForm handleAdd={handleAdd} />
            <ul className="list-produits">
                {produits.map((produit) => (
                    <Produit
                        key={produit.id}
                        produitInfos={produit}
                        onClick={() => handleDelete(produit.id)}
                    />
                ))}
            </ul>
        </div>
    );
}
