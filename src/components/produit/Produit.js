export default function Produit({produitInfos, onClick}) {

  //state

  //comportements

  //affichage
  return (
      <li>
        {produitInfos.name} <button onClick={onClick}>X</button>
      </li>
  );
}
