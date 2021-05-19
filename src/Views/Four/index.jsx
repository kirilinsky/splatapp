import classNames from "classnames";
import React from "react";
import styles from "./view.module.scss";
import qrcode from "./assets/qr.png";
import appstore from "./assets/appstore.png";
import googleplay from "./assets/googleplay.png";
const Four = () => {
  return (
    <div className={classNames(styles.view, "view")}>
      <div className="container">
        <div className={styles.view__wrap}>
          <h1 className={styles.header}>ИННОВАЦИОННАЯ РАЗРАБОТКА splat</h1>
          <div className={styles.view__wrap__grid}>
            <div className={styles.desc}>
              <p>
                Приложение с помощью нейросети позволяет применить на себе цвет
                различных оттенков по шкале Vita 3D Master (или Vitapan).
              </p>
              <p>
                Примерка цвета происходит через камеру на смартфоне. приложение
                построит персонализированную карту зубного ряда человека и с
                помощью алгоритма ПОменяет цвет эмали в зависимости от выбора
                человека
              </p>
            </div>
            <div className={styles.qr}>
              Сканируй QR-код
              <img className={styles.qr__img} src={qrcode} alt="qr code" />
            </div>
            <div className={styles.apps}>
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
      </div>
    </div>
  );
};

export default Four;
