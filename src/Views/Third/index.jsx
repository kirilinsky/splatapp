import React, { useState } from "react";

import "./style.scss";

import data from "./data";

const Third = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextSlide = () => {
    console.log(currentStep);

    setCurrentStep(currentStep === data.length - 1 ? 0 : currentStep + 1);
  };
  return (
    <section className="view work">
      <div className="container">
        <div className="work-container">
          <div className="work-slider">
            <div className="work-slider__left">
              <h2 className="section-title">
                <span className="red">Как</span> это работает?
              </h2>

              <div className="work-steps">
                <h3 className="work-steps__title">{data[currentStep].step}</h3>
                <p className="work-steps__text">{data[currentStep].text}</p>
                {data.map((x, i) => (
                  <button
                    disabled={x.id === data[currentStep].id}
                    onClick={() => setCurrentStep(i)}
                    className={`work-steps__button work-steps__button${
                      x.id === data[currentStep].id ? "--active" : ""
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="work-slider__right">
              <img
                src={
                  require(`./assets/img/${data[currentStep].img}.png`).default
                }
                onClick={nextSlide}
                alt={data[currentStep].text}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
