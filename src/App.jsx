import "bootstrap/dist/css/bootstrap.min.css"
import Informacion from "./components/Informacion";

function App() {
  //aqui va la logica del componente

  return (
    //aqui puedo agregar algo de logica
    <main className="container my-5">
    {/* aqui va todo el maquetado html */}
  <h1>Hola mundo 2</h1>
  <Informacion></Informacion>
  </main>
  )
}

export default App;
