export default function User({userInfos}) {

  //state

  //comportements

  //affichage
  return (
    <tr>
        <td>{userInfos.surname}</td>
        <td>{userInfos.name}</td>
        <td>{userInfos.username}</td>
        <td>{userInfos.email}</td>
    </tr>
  );
}