import React, { useState } from "react";
import view1 from "./assets/img/first.png";
import view2 from "./assets/img/second.png";
import view3 from "./assets/img/third.png";
import "./style.scss";

import slider from "./data";
const imgs = [view1, view2, view3];
const Third = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextSlide = () => {
    if (currentStep === 2) {
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const prevSlide = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep(currentStep - 1);
  };
  return (
    <section className="view work">
      <div className="container">
        <div className="work-container">
          <div className="work-slider">
            <div className="work-slider__left">
              <h2 className="section-title work__title">
                <span className="red">Как</span> это работает?
              </h2>

              <div className="work-steps">
                <h3 className="work-steps__title">
                  {slider[currentStep].step}
                </h3>
                <p className="work-steps__text">{slider[currentStep].text}</p>
                <div className="arrows">
                  <div
                    className={`arrow left ${
                      currentStep === 0 ? "disabled" : ""
                    }`}
                    onClick={prevSlide}
                  ></div>
                  <div
                    className={`arrow right ${
                      currentStep === 2 ? "disabled" : ""
                    }`}
                    onClick={nextSlide}
                  ></div>
                </div>
              </div>
            </div>
            <div className="work-slider__right">
              <img
                src={imgs[currentStep]}
                className="work-slider__image"
                onClick={nextSlide}
                alt={slider[currentStep].text}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
