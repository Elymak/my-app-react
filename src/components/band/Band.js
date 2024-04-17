import "./Band.css";

export default function Band({bandInfos}) {

  //state

  //comportements

  //affichage
  return (
    <tr>
        <td>{bandInfos.name}</td>
        <td>{bandInfos.style}</td>
        <td><img src={bandInfos.image}/></td>
    </tr>
  );
}