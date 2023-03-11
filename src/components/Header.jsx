import { Link } from "react-router-dom";

import logo from "../images/main-logo.png";

export const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Link className="header-link" to="/">
          <img className="logo" src={logo} alt="rick and morty logo" />
        </Link>
      </header>
    </div>
  );
};
