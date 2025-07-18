import { Link } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/LOGO.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__kasa--logo"
          alt="logo de Kasa, site de vente immobilière"
          src={logo}
        ></img>
      </div>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
