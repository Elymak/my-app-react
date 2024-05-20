import { useState, useEffect } from "react";
import "./BandForm.css";

export default function BandForm({title, submitButtonLabel, bandInfos, handleFormSubmit}) {

    //state
    const [newName, setNewName] = useState(bandInfos !== undefined ? bandInfos.name : "");
    const [newStyle, setNewStyle] = useState(bandInfos !== undefined ? bandInfos.style : "");
    const [newLogo, setNewLogo] = useState(bandInfos !== undefined ? bandInfos.logo : "");
    const [newPhoto, setNewPhoto] = useState(bandInfos !== undefined ? bandInfos.photo : "");
    const [newDescription, setNewDescription] = useState(bandInfos !== undefined ? bandInfos.description : "");

    //comportements
    const handleChangeName = (event) => {
        setNewName(event.target.value);
    }
    const handleChangeStyle = (event) => {
        setNewStyle(event.target.value);
    }
    const handleChangeLogo = (event) => {
        setNewLogo(event.target.value);
    }
    const handleChangePhoto = (event) => {
        setNewPhoto(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setNewDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBand = {
            "name": newName,
            "style": newStyle,
            "logo": newLogo,
            "photo": newPhoto,
            "description": newDescription
        };
        handleFormSubmit(newBand);
        setNewName("");
        setNewStyle("");
        setNewLogo("");
        setNewPhoto("");
        setNewDescription("");
    }

    //affichage
    return (
        <div className="add-band-form">
            <h1>{title}</h1>
            <form id="msform" action="submit" onSubmit={handleSubmit}>
               <label>Name</label><input value={newName} onChange={handleChangeName} type="text" placeholder="Name" />
               <label>Style</label><input value={newStyle} onChange={handleChangeStyle} type="text" placeholder="Style" />
               <label>Logo Url</label><input value={newLogo} onChange={handleChangeLogo} type="text" placeholder="Logo Url" />
               <label>Photo Url</label><input value={newPhoto} onChange={handleChangePhoto} type="text" placeholder="Photo Url" />
               <label>Description</label><textarea className="description" value={newDescription} onChange={handleChangeDescription} type="text" placeholder="Description" />
               <button className="action-button">{submitButtonLabel}</button>
            </form>
            <a className="back" href="/">Back to main menu</a>
        </div>
    );
}