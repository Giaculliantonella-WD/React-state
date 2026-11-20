import { useState } from "react";
import Componente from "./Components/Componente";
const todoList = [
  "carne",
  "pesce",
  "mozzarelle"
];

function App() {

  function addTodo() {

    const nuovoOggettoTodo = {
      titolo: titolo,
      descrizione: descrizione,
      IsImportante: IsImportante,
      categoria: categoria

    }

    const nuovaLista = [
      ...todoList,
      nuovoOggettoTodo
    ];

    setTodoList(nuovaLista);

    setTitolo("");
    setDescrizione("");
    setIsImportante("");
    setCategoria("");

  }

  function updateTitolo(event) {


    setTitolo(event.target.value);
  }

  function updateDescrizione(event) {
    setDescrizione(event.target.value);
  }

  function updateIsImportante(event) {
    setIsImportante(event.target.checked);
  }

  function updateCategoria(event) {
    setCategoria(event.target.value);
  }


  const [todoList, setTodoList] = useState([])
  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [IsImportante, setIsImportante] = useState(true);
  const [categoria, setCategoria] = useState("");
  return (
    <>
      {/* visualizza lista */}
      <div id="todo-list">
        <h2>ToDo List</h2>
        <ul>
          {todoList.map((todoItem, i) =>
            <li key={i}>{todoItem.titolo}- {todoItem.categoria}</li>
          )}
        </ul>
      </div>
      {/* inserimento nuovo item */}
      <div id="todo-insert">
        {/* {inserimento form} */}
        <div id="todo-insert-form">
          <label class="vertical">
            <span>Titolo</span>
            <input value={titolo} onChange={updateTitolo} type="text" placeholder="Titolo Todo" />
          </label>
          <label class="vertical">
            <span>Descrizione</span>
            <textarea value={descrizione} onChange={updateDescrizione} placeholder="Descrizione Todo" />
          </label>
          <label class="vertical">
            <span>Categoria</span>
            <select value={categoria} onChange={updateCategoria}>
              <option value="" disabled>Selezione una Categoria</option>
              <option value="casa">casa</option>
              <option value="lavoro">lavoro</option>
              <option value="altro">altro</option>
            </select>
          </label>
          <label class="horizontal">
            <input type="checkbox" checked={IsImportante} onChange={updateIsImportante} />
            <span>Importante</span>
          </label>

          <button onClick={addTodo}>Aggiungi elemento</button>
        </div>

        {/* pannello preview */}

        <div id="todo-insert-preview">
          <div>L'utente ha scritto:
            <ul>
              <li>Titolo: {titolo}</li>
              <li>Descrizione: {descrizione}</li>
              <li>Is Importante: {IsImportante ? "si" : "no"}</li>
              <li>Categoria: {categoria}</li>
            </ul>
          </div>
        </div>
      </div >

    </>



  )

}

export default App