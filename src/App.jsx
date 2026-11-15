import Componente from "./Components/Componente";
import EsempioEvento from "./Components/EsempioEvento";
import EsempioProps from "./Components/EsempioProps";
import EsempioEventoToggle from "./Components/EsempioEventoToggle";

function App() {

  const numero = 42;

  return (
    <>
      {/* <componente />
      <EsempioProps dati={nuemro} /> */}
      <EsempioEvento />
      <EsempioEventoToggle />
    </>



  )
}

export default App