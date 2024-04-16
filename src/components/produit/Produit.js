export default function Produit({produitInfos, onClick}) {

  //state

  //comportements

  //affichage
  return (
    <div>
        <li>
        {produitInfos.name}
        </li>
        <button onClick={onClick}>X</button>
    </div>
  );
}
