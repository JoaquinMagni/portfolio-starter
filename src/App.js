import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Servicios from "./Components/Servicios/Servicios";
import Experiencia from "./Components/Experiencia/Experiencia";
import Habilidades from "./Components/Habilidades/Habilidades";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div 
      className="App"
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}      
    >
      <Navbar/>
      <Intro/>
      <Servicios/>
      <Experiencia/>
      <Habilidades/>
      <Portfolio/>
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
