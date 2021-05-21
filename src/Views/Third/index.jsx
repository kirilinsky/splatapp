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
    console.log(currentStep);

    setCurrentStep(currentStep === slider.length - 1 ? 0 : currentStep + 1);
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
                <h3 className="work-steps__title">
                  {slider[currentStep].step}
                </h3>
                <p className="work-steps__text">{slider[currentStep].text}</p>
                {slider.map((x, i) => (
                  <button
                    disabled={x.id === slider[currentStep].id}
                    onClick={() => setCurrentStep(i)}
                    className={`work-steps__button work-steps__button${
                      x.id === slider[currentStep].id ? "--active" : ""
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="work-slider__right">
               <img
                src={
                  imgs[currentStep]
                }
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
