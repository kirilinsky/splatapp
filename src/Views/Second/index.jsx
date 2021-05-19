import React from 'react'
import styles from "./view.module.scss";

import qr from './assets/img/qr.png';
import appstore from './assets/img/appstore.png';
import googleplay from './assets/img/googleplay.png';


const Second = () => {
  return (
    <div className={styles.view}>
      <div className="container">
        <h2 className={styles.view__title}>Инновационная разработка SPLAT</h2>
        <div className={styles.text}>
          <div>
            <p className={styles.text__description}>
              Приложение с помощью нейросети позволяет применить на себе цвет различных оттенков по шкале Vita 3D Master (или Vitapan). 
            </p>
            <p className={styles.text__description}>
              Примерка цвета происходит через камеру на смартфоне. приложение построит персонализированную карту зубного ряда человека и с помощью алгоритма ПОменяет цвет эмали в зависимости от выбора человека
            </p>
          </div>
          <div className={styles.qr}>
            <h3 className={styles.qr__text}>Сканируй QR-код</h3>
            <img className={styles.qr__image} src={qr} alt="QR" />
          </div>
        </div>
        <div className={styles.download}>
          <h3 className={styles.download__text}>SPLAT APP уже доступен</h3>
          <div className={styles.download_images}>
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="google-play" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
