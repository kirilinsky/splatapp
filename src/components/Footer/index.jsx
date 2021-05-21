import React from 'react'

import './Footer.scss'

import logo from '../../assets/img/logo.png'

import vk from './assets/img/vk.svg'
import inst from './assets/img/inst.svg'
import fb from './assets/img/fb.svg'
import yt from './assets/img/yt.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="Логотип SPLAT" />
        <div className="footer-socials">
          <a href="#"><img src={vk} alt="Иконка: Вконтакте" /></a>
          <a href="#"><img src={inst} alt="Иконка: Инстаграм" /></a>
          <a href="#"><img src={fb} alt="Иконка: Facebook" /></a>
          <a href="#"><img src={yt} alt="Иконка: Youtube" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          <a className="footer-info__link" href="#">Пользовательское соглашение</a>
          <a className="footer-info__link" href="#">Правила</a>
          <a className="footer-info__link" href="#">Напишите нам</a>
        </div>
        <span className="footer-copy">© SPLAT 2021</span>
      </div>
    </footer>
  )
}

export default Footer