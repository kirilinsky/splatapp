import React from "react";

import "./style.scss";

import data from "./data";

const Second = () => {
  return (
    <section className="view opportunities">
      <div className="container">
        <div className="opportunities-container">
          <h2 className="section-title">
            <span className="red">Что</span> умеет приложение?
          </h2>
          <div className="opportunities-benefits">
            {data.map((item, ind) => (
              <div className="opportunities-benefits__item" key={item.id}>
                <div
                  className="opportunities-benefits__image"
                  alt={item.text}
                >{`0${ind + 1}`}</div>
                <span className="opportunities-benefits__text">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
