import { useState } from "react";
import "./AddUserForm.css";

export default function AddUserForm({ handleAddUser }) {

    //state
    const [newSurname, setNewSurname] = useState("");
    const [newName, setNewName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newVerify, setNewVerify] = useState("");

    //comportements
    const handleChangeSurname = (event) => {
        setNewSurname(event.target.value);
    }
    const handleChangeName = (event) => {
        setNewName(event.target.value);
    }
    const handleChangeUsername = (event) => {
        setNewUsername(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setNewEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setNewPassword(event.target.value);
    }
    const handleChangeVerify = (event) => {
        setNewVerify(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(newPassword === newVerify) {
            const newUser = {
                "name": newName,
                "surname": newSurname,
                "username": newUsername,
                "email": newEmail,
                "password": newPassword
            };
            postNewUser(newUser);
            setNewSurname("");
            setNewName("");
            setNewUsername("");
            setNewEmail("");
            setNewPassword("");
            setNewVerify("");
        } else {
            alert("Please match passwords");
        }
    }

    const postNewUser = (newUserToAdd) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserToAdd)
        };
        fetch('http://localhost:8080/api/save', requestOptions)
            .then(response => window.location = "/");
    }

    //affichage
    return (
        <div className="add-user-form">
            <h1>Add a new User</h1>
            <form id="msform" action="submit" onSubmit={handleSubmit} className="">
               <input value={newSurname} onChange={handleChangeSurname} type="text" placeholder="Surname" />
               <input value={newName} onChange={handleChangeName} type="text" placeholder="Name" />
               <input value={newUsername} onChange={handleChangeUsername} type="text" placeholder="Username" />
               <input value={newEmail} onChange={handleChangeEmail} type="email" placeholder="Email" />
               <input value={newPassword} onChange={handleChangePassword} type="password" placeholder="Password" />
               <input value={newVerify} onChange={handleChangeVerify} type="password" placeholder="Verify Password" />
               <button className="action-button">Create</button>
            </form>
            <a className="back" href="/">Back to main menu</a>
        </div>
    );
}