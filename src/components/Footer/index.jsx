import React from 'react'

import './Footer.scss'

import logo from '../../assets/img/logo.png'

import personal from '../../assets/personal.pdf'

import vk from './assets/img/vk.svg'
import inst from './assets/img/inst.svg'
import fb from './assets/img/fb.svg'
import yt from './assets/img/yt.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="http://splat.ru/?utm_source=web&utm_medium=organic&utm_campaign=site_app_splat&utm_content=logo" target="_blank" rel="noopener noreferrer">
          <img className="footer__logo" src={logo} alt="Логотип SPLAT" />
        </a>
        <div className="footer-socials">
          <a className="footer-socials__link" href="https://bit.ly/2M1icrq" target="_blank" rel="noopener noreferrer"><img src={vk} alt="Иконка: Вконтакте" /></a>
          <a className="footer-socials__link" href="http://bit.ly/395py7m" target="_blank" rel="noopener noreferrer"><img src={inst} alt="Иконка: Инстаграм" /></a>
          <a className="footer-socials__link" href="https://bit.ly/2xtx9yV" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Иконка: Facebook" /></a>
          <a className="footer-socials__link" href="https://bit.ly/3t8zhUH" target="_blank" rel="noopener noreferrer"><img src={yt} alt="Иконка: Youtube" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          <a className="footer-info__link" href={personal} download target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
          <a className="footer-info__link" href="mailto: actions@splat.ru" target="_blank" rel="noopener noreferrer">Напишите нам</a>
        </div>
        <span className="footer-copy">© SPLAT 2021</span>
      </div>
    </footer>
  )
}

export default Footer
