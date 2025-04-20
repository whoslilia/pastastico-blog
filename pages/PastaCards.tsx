import Cards from "../src/components/Card/Cards";
import NavbarRender from "../src/components/Navbar/NavbarRender";
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
