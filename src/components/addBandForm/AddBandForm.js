import { useState } from "react";
import "./AddBandForm.css";

export default function AddBandForm() {

    //state
    const [newName, setNewName] = useState("");
    const [newStyle, setNewStyle] = useState("");
    const [newImage, setNewImage] = useState("");

    //comportements
    const handleChangeName = (event) => {
        setNewName(event.target.value);
    }
    const handleChangeStyle = (event) => {
        setNewStyle(event.target.value);
    }
    const handleChangeImage = (event) => {
        setNewImage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBand = {
            "name": newName,
            "style": newStyle,
            "image": newImage
        };
        postNewUser(newBand);
        setNewName("");
        setNewStyle("");
        setNewImage("");
    }

    const postNewUser = (newBandToAdd) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBandToAdd)
        };
        fetch('http://localhost:8080/api/band', requestOptions)
            .then(response => window.location = "/");
    }

    //affichage
    return (
        <div className="add-band-form">
            <h1>Add a new Band</h1>
            <form id="msform" action="submit" onSubmit={handleSubmit}>
               <input value={newName} onChange={handleChangeName} type="text" placeholder="Name" />
               <input value={newStyle} onChange={handleChangeStyle} type="text" placeholder="Style" />
               <input value={newImage} onChange={handleChangeImage} type="text" placeholder="Image Url" />
               <button className="action-button">Create Band</button>
            </form>
            <a className="back" href="/">Back to main menu</a>
        </div>
    );
}