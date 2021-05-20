import React from 'react'

import './style.scss'

import smile from './assets/img/smile.png'
import range from './assets/img/range.png'

const Fourth = () => {
  return (
    <section className="view try">
      <div className="container">
        <div className="try-wrapper">
          <div className="try-left">
            <div className="try-image-box">
              <img className="try-image__item" src={smile} alt="Белоснежная улыбка" />
            </div>
            <img className="try__range" src={range} alt="Степень отбеливания" />

            <input className="try-input" type="range" defaultValue="0" />
          </div>
          <div className="try-right">
            <h2 className="try-title">Попробуйте сейчас</h2>
            <span className="try-subtitle">Водите ползунок, чтобы посмотреть на разные оттенки зубов по шкале Vita</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fourth
