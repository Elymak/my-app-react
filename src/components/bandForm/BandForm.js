import { useState, useEffect } from "react";
import "./BandForm.css";

export default function BandForm({title, submitButtonLabel, bandInfos, handleFormSubmit}) {

    //state
    const [newName, setNewName] = useState(bandInfos !== undefined ? bandInfos.name : "");
    const [newStyle, setNewStyle] = useState(bandInfos !== undefined ? bandInfos.style : "");
    const [newImage, setNewImage] = useState(bandInfos !== undefined ? bandInfos.image : "");

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
        handleFormSubmit(newBand);
        setNewName("");
        setNewStyle("");
        setNewImage("");
    }

    //affichage
    return (
        <div className="add-band-form">
            <h1>{title}</h1>
            <form id="msform" action="submit" onSubmit={handleSubmit}>
               <input value={newName} onChange={handleChangeName} type="text" placeholder="Name" />
               <input value={newStyle} onChange={handleChangeStyle} type="text" placeholder="Style" />
               <input value={newImage} onChange={handleChangeImage} type="text" placeholder="Image Url" />
               <button className="action-button">{submitButtonLabel}</button>
            </form>
            <a className="back" href="/">Back to main menu</a>
        </div>
    );
}