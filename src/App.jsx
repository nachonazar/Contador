import "bootstrap/dist/css/bootstrap.min.css"
import Informacion from "./components/Informacion";
import Contador from "./components/Contador";

function App() {
  //aqui va la logica del componente
  const comision = "c11"
  return (
    //aqui puedo agregar algo de logica
    <main className="container my-5">
    {/* aqui va todo el maquetado html */}
  <h1>Hola mundo 2</h1>
  <Informacion comisionProps={comision} anio={2025}/>
  <Contador></Contador>
  </main>
  )
}

export default App;
