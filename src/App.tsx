import Cards from "./components/Card/Cards";
import Navbar from "./components/Navbar";
import NavbarItem from "./components/Navbar/NavbarItems";
import "./App.css";

function App() {
  return (
    <>
      <Navbar>
        <NavbarItem label="Home" href="#" active />
        <NavbarItem label="Servicios" href="#servicios" />
        <NavbarItem label="Contacto" href="#contacto" />
      </Navbar>
      <div className="app">
        <Cards />
      </div>
    </>
  );
}

export default App;
