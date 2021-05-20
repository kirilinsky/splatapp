import React from "react"

import './style.scss'

import data from './data'

const Second = () => {
  return (
    <section className="view opportunities">
      <div className="container">
        <div className="opportunities-container">
          <h2 className="section-title"><span className="red">Что</span> умеет приложение?</h2>
          <div className="opportunities-benefits">
            {
              data.map(item => (
                <div className="opportunities-benefits__item" key={item.id}>
                  <img className="opportunities-benefits__image" src={require(`./assets/img/${item.img}.svg`).default} alt={item.text} />
                  <span className="opportunities-benefits__text" >{item.text}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
