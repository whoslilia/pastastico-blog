import Navbar from "./";
import NavbarItem from "./NavbarItems";

interface NavbarRenderProps {
  labelList: string[];
}

function NavbarRender({ labelList }: NavbarRenderProps) {
  return (
    <Navbar>
      {labelList.map((label, index) => (
        <NavbarItem
          key={index}
          label={label}
          href={`#${label}`}
          active={true}
        />
      ))}
    </Navbar>
  );
}

export default NavbarRender;
