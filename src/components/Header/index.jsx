import React from 'react'
import './Header.scss'

import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <img src={logo} className="Логотип SPLAT" />

          <nav className="navigation">
            <a href="#" className="navigation__item">Как это работает</a>
            <a href="#" className="navigation__item">Для чего нужно</a>
            <a href="#" className="navigation__item">Попробовать</a>
          </nav>

          <button className="button header__button">Скачать приложение</button>
        </div>
      </div>
    </header>
  )
}

export default Header
