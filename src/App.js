import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Servicios from "./Components/Servicios/Servicios";
import Experiencia from "./Components/Experiencia/Experiencia";
import Habilidades from "./Components/Habilidades/Habilidades";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Servicios/>
      <Experiencia/>
      <Habilidades/>
      <Portfolio/>
    </div>
  );
}

export default App;
