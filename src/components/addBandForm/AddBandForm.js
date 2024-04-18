import BandForm from "./../bandForm/BandForm";

export default function AddBandForm({}) {
    //state

    //comportement
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
        <div>
            <BandForm title="Add a new band" submitButtonLabel="Create new band" handleFormSubmit={postNewUser} />
        </div>
    );
}