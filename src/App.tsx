import Cards from "./components/Card/Cards";
import "./App.css";
import NavbarRender from "./components/Navbar/NavbarRender";

function App() {
  return (
    <>
      <NavbarRender labelList={["Home", "PastaCards", "About"]} />
      <div className="app">
        <Cards />
      </div>
    </>
  );
}

export default App;
