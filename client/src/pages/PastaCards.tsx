import Cards from "../components/Card/Cards";
import NavbarRender from "../components/Navbar/NavbarRender";
function PastaCards() {
  return (
    <>
      <NavbarRender />
      <div className="app">
        <Cards />
      </div>
    </>
  );
}

export default PastaCards;
