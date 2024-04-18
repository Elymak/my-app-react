import "./Band.css";

export default function Band({bandInfos, onClickEdit, onClickDelete}) {

  //state

  //comportements
  const onClickDeleteImage = () => {
    onClickDelete(bandInfos.id);
  }

  const onClickEditImage = () => {
    onClickEdit(bandInfos.id);
  }

  //affichage
  return (
    <tr>
        <td>{bandInfos.name}</td>
        <td>{bandInfos.style}</td>
        <td><img src={bandInfos.image}/></td>
        <td><img className="action" src="images/edit.png" onClick={onClickEditImage} /></td>
        <td><img className="action" src="images/delete.png" onClick={onClickDeleteImage} /></td>
    </tr>
  );
}