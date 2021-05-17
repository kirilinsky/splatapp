import React from 'react'
import styles from "./view.module.scss";
import BeforeAfterSlider from 'react-before-after-slider'

import "./style.scss";
import before from './assets/img/before.png';
import after from './assets/img/after.png';
import appstore from './assets/img/appstore.png';
import googleplay from './assets/img/googleplay.png';

const Third = () => {
  return (
    <div className="view">
      <div className="container">
        <div className="wrapper">
          <h2 className={styles.view__title}>Теперь подобрать отбеливание проще простого</h2>
          <BeforeAfterSlider
            before={after}
            after={before}
            width={640}
            height={480}
          />
          <button className="button" style={{marginTop: '79px'}}>Попробовать</button>

          <div className="download-btns">
            <a href="#">
              <img src={appstore} alt="" />
            </a>
            <a href="#">
              <img src={googleplay} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third;
