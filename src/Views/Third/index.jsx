import React from "react";
import styles from "./view.module.scss";

import tooth from './assets/img/tooth.png';
import cleaningKit from './assets/img/cleaning-kit.png';
import toothbrush from './assets/img/toothbrush.png';
import denture from './assets/img/denture.png';

const Third = () => {
  return (
    <div className="view">
      <div className="container">
        <div className={styles.view}>
          <h2 className={styles.view__title}>Как это работает</h2>
          <div className="view-box">
            <div className="view-box-card">
              <img src={tooth} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
              Распознавание цвета зубов с возможностью мелирования
              </span>
            </div>
            <div className="view-box-card">
              <img src={cleaningKit} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
                SMART «примерка» цвета зубов на себе по шкале Vita
              </span>
            </div>
            <div className="view-box-card">
              <img src={toothbrush} alt="" className="view-box-card__icon" />
              <span className="view-box-card__text">
                Персональные рекомендации исходя из желаемого цвета отбеливания
                зубов
              </span>
            </div>
            <div className="view-box-card">
              <img src={denture} alt="" className="view-box-card__icon" />
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

export default Third;
