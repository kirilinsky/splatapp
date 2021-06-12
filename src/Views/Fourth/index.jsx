import React, { useState } from "react";

import "./style.scss";

import range from './assets/img/range.png';
import smile_1 from "./assets/img/smile-1.png";
import smile_2 from "./assets/img/smile-2.png";
import smile_3 from "./assets/img/smile-3.png";
import smile_4 from "./assets/img/smile-4.png";
import smile_5 from "./assets/img/smile-5.png";
import smile_6 from "./assets/img/smile-6.png";
import smile_7 from "./assets/img/smile-7.png";
import smile_8 from "./assets/img/smile-8.png";

const imgs = [
  smile_1,
  smile_2,
  smile_3,
  smile_4,
  smile_5,
  smile_6,
  smile_7,
  smile_8,
];
const Fourth = () => {
  const [step, setStep] = useState(0);

  return (
    <section className="view try">
      <div className="container">
        <div className="try-wrapper">
          <div className="try-left">
            <div className="try-image-box">
              <img
                className="try-image__item"
                src={imgs[step]}
                alt="Белоснежная улыбка"
              />
            </div>
            <img className="try__range" src={range} alt="Степень отбеливания" />

            <input
              min={0}
              max={7}
              step={1}
              value={step}
              onChange={(e) => setStep(e.target.value)}
              className="try-input"
              type="range"
            />
          </div>
          <div className="try-right">
            <h2 className="try-title">Попробуйте сейчас</h2>
            <span className="try-subtitle">
            Водите ползунок, чтобы посмотреть на разные оттенки зубов по шкале Vita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
