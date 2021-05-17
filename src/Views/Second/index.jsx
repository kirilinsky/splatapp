import React from "react";
import styles from "./view.module.scss";
import "./style.scss";

import icon from '../../assets/img/icon.png';

const Second = () => {
  return (
    <div className="view">
      <div className="container">
        <div className={styles.view}>
          <h2 className={styles.view__title}>Наши услуги</h2>
          <div className="view-box">
            <div className="view-box-card">
              <img src={icon} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
                Распознавание цвета зубов с возможностью мелирования
              </span>
            </div>
            <div className="view-box-card">
              <img src={icon} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
                SMART «примерка» цвета зубов на себе по шкале Vita
              </span>
            </div>
            <div className="view-box-card">
              <img src={icon} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
                Персональные рекомендации исходя из желаемого цвета отбеливания
                зубов
              </span>
            </div>
            <div className="view-box-card">
              <img src={icon} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
                Отслеживание динамики изменения цвета эмали зубов через личное
                приложение
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
