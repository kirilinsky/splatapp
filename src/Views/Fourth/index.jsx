import React, { useState } from "react";

import "./style.scss";

import smile from "./assets/img/smile.png";
import gg from "./assets/img/lll.png";
const imgs = [smile, gg];
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
            {/*          <img className="try__range" src={range} alt="Степень отбеливания" /> */}

            <input
              min={0}
              max={1}
              step={1}
              value={step}
              onChange={(e) => setStep(e.target.value)}
              className="try-input"
              type="range"
              defaultValue="0"
            />
          </div>
          <div className="try-right">
            <h2 className="try-title">Попробуйте сейчас</h2>
            <span className="try-subtitle">
              Перенесите ползунок, чтобы посмотреть на разные оттенки зубов по
              шкале Vita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
