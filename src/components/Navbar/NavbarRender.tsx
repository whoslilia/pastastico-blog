import Navbar from "./";
import NavbarItem from "./NavbarItems";

const labels = ["Home", "PastaCards", "About"];

function NavbarRender() {
  return (
    <Navbar>
      {labels.map((label, index) => (
        <NavbarItem
          key={index}
          label={label}
          toPage={`/${label.toLowerCase()}`}
          active={true}
        />
      ))}
    </Navbar>
  );
}

export default NavbarRender;
