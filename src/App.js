import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Servicios from "./Components/Servicios/Servicios";
import Experiencia from "./Components/Experiencia/Experiencia";
import Habilidades from "./Components/Habilidades/Habilidades";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Servicios/>
      <Experiencia/>
      <Habilidades/>
      <Portfolio/>
      <Testimonial/>
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
