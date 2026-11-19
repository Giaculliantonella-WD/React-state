import { useState } from "react";
import Componente from "./Components/Componente";
const todoList = [
  "carne",
  "pesce",
  "mozzarelle"
];

function App() {

  function addTodo() {
    // const nuovoValore = [...todoList];
    // nuovoValore.push("Nuovo elemento");

    const nuovoValore = [
      ...todoList,
      userInput
    ];

    setTodoList(nuovoValore);
  }

  function updateUserText(event) {
    // const inputEl = event.target;
    // const valoreInput = inputEl.value;

    // setUserInput(valoreInput);

    setUserInput(event.target.value);
  }
  const [todoList, setTodoList] = useState([]);

  const [userInput, setUserInput] = useState("");
  return (
    <>

      <h2>ToDo List</h2>

      <ul>
        {todoList.map((todoItem, i) => <li key={i}>{todoItem}</li>)}


      </ul>
      <input value={userInput} onChange={updateUserText} type="text" placeholder="nuovo todo" />
      <button onClick={addTodo}>Aggiungi elemento</button>

      <p>L'utente ha scritto : {userInput}</p>


    </>



  )

}

export default App