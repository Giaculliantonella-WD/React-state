import { useState } from "react";

function EsempioEvento() {

    // function onButtonClick() {
    //     const nuovoValore = numeroClick + 1;
    //     setNumeroClick(nuovoValore);

    // }

    function onButtonClick() {
        setNumeroClick(numeroClick + 1)
    }

    const [numeroClick, setNumeroClick] = useState(0);
    return (
        <div className="component">
            <p>elemento cliccato {numeroClick} volte</p>
            <div>{numeroClick > 4 ? "sehr gut!!" : null}</div>
            <button onClick={onButtonClick}>Cliccami!</button>
        </div>
    )
}

export default EsempioEvento;