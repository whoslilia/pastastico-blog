interface NavbarItemProps {
  label: string;
  href: string;
  active?: boolean;
}

export function NavbarItem({ label, href, active }: NavbarItemProps) {
  const className = `nav-link${active ? " active" : ""}`;
  return (
    <li className="nav-item">
      <a className={className} href={href}>
        {label}
      </a>
    </li>
  );
}

export default NavbarItem;
