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
      "Nuovo Elemento"
    ];

    setTodoList(nuovoValore);
  }


  const [todoList, setTodoList] = useState([]);
  return (
    <>

      <h2>ToDo List</h2>

      <ul>
        {todoList.map((todoItem, i) => <li key={i}>{todoItem}</li>)}


      </ul>
      <input type="text" placeholder="nuovo todo" />
      <button onClick={addTodo}>Aggiungi elemento</button>


    </>



  )

}

export default App