interface NavbarItemProps {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
}

export function NavbarItem({ label, href, active, disabled }: NavbarItemProps) {
  const className = `nav-link${active ? " active" : ""}${
    disabled ? " disabled" : ""
  }`;

  return (
    <li className="nav-item">
      <a
        className={className}
        href={href}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled}
      >
        {label}
      </a>
    </li>
  );
}

export default NavbarItem;
