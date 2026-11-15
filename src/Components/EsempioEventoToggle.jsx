import { useState } from "react";

function EsempioEventoToggle() {

    function onButtonClick() {
        const nuovoValore = !isOpen;
        setIsOpen(nuovoValore);

    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="component">
            <button onClick={onButtonClick}>Cliccami!</button>
            <div>{isOpen ? "Elemento aperto" : ""}</div>
        </div>
    )
}

export default EsempioEventoToggle;