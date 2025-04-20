import { Link } from "react-router-dom";
interface NavbarItemProps {
  label: string;
  toPage: string;
  active?: boolean;
}

export function NavbarItem({ label, toPage, active }: NavbarItemProps) {
  const className = `nav-link${active ? " active" : ""}`;
  return (
    <li className="nav-item">
      <Link className={className} to={toPage}>
        {label}
      </Link>
    </li>
  );
}

export default NavbarItem;
