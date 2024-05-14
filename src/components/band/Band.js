import "./Band.css";

export default function Band({bandInfos, onClickEdit, onClickDelete, onClickConsult}) {

  //state

  //comportements
  const onClickDeleteImage = () => {
    onClickDelete(bandInfos.id);
  }

  const onClickEditImage = () => {
    onClickEdit(bandInfos.id);
  }

  const onClickBand = (event) => {
    onClickConsult(bandInfos.id);
  }

  //affichage
  return (
    <tr>
        <td onClick={onClickBand}>{bandInfos.name}</td>
        <td onClick={onClickBand}>{bandInfos.style}</td>
        <td onClick={onClickBand}><img src={bandInfos.logo}/></td>
        <td><img className="action" src="images/edit.png" onClick={onClickEditImage} /></td>
        <td><img className="action" src="images/delete.png" onClick={onClickDeleteImage} /></td>
    </tr>
  );
}