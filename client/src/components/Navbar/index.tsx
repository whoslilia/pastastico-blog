import { ReactNode } from "react";
import "./Navbar.css";
import pastaIcon from "../../assets/icons/spaghetti.svg";
import { Link } from "react-router-dom";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-0 pb-0">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img
            src={pastaIcon}
            alt="Logo"
            width="30"
            height="30"
            className="me-2"
          />
          Pastástico
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
