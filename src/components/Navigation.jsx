import React from "react";
import PropTypes from "prop-types";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import AppContext from "../contexts/AppContext";

function Navigation({ logout, name }) {
  const { locale, toggleLocale, theme, toggleTheme } =
    React.useContext(AppContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={toggleLocale}>
            {locale === "id" ? "en" : "id"}
          </button>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </li>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle />
          </Link>
        </li>
        <li>
          <button onClick={logout}>
            {name} <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
