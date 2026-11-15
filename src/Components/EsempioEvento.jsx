function EsempioEvento() {

    function onButtonClick() {
        alert("hai cliccato!");
    }
    return (
        <div className="component">
            <p>sono un componente con evento/</p>
            <button onClick={onButtonClick}>Cliccami!</button>
        </div>
    )
}

export default EsempioEvento;