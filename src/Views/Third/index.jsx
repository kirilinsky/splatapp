import React from "react"

import './style.scss'

import data from './data'

const Third = () => {
  return (
    <section className="view work">
      <div className="container">
        <div className="work-container">
          <div className="work-slider">
            <div className="work-slider__left">
              <h2 className="section-title"><span className="red">Как</span> это работает?</h2>
              {
                data.map(item => (
                  <div className="work-steps" key={item.id}>
                    <h3 className="work-steps__title">{item.step}</h3>
                    <p className="work-steps__text">{item.text}</p>
                    <button className="work-steps__button work-steps__button--active"></button>
                  </div>
                ))
              }
            </div>
            <div className="work-slider__right">
              {data.map(item => (
                <img src={require(`./assets/img/${item.img}.png`).default} alt={item.text} key={item.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
