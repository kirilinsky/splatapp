import React from "react";
import "./Header.scss";

import logo from "../../assets/img/logo.png";

const Header = ({ handlePageChange, toggle }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <img src={logo} className="header__logo" alt="Логотип SPLAT" />

          <nav className="navigation">
            <button
              onClick={() => handlePageChange(2)}
              className="navigation__item"
            >
              Как это работает
            </button>
            <button
              onClick={() => handlePageChange(3)}
              className="navigation__item"
            >
              Для чего нужно
            </button>
            <button
              onClick={() => handlePageChange(4)}
              className="navigation__item"
            >
              Попробовать
            </button>
          </nav>

          <button onClick={toggle} className="button header__button">
            Скачать приложение
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
