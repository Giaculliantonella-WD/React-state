import { useState } from "react";

function EsempioEvento() {

    function onButtonClick() {
        const nuovoValore = numeroClick + 1;
        setNumeroClick(nuovoValore);

    }

    const [numeroClick, setNumeroClick] = useState(0);
    return (
        <div className="component">
            <p>elemento cliccato {numeroClick} volte</p>
            <button onClick={onButtonClick}>Cliccami!</button>
        </div>
    )
}

export default EsempioEvento;