import React from "react";
import styles from "./view.module.scss";
import Tilt from "react-parallax-tilt";
import classNames from "classnames";

const First = () => {
  return (
    <div className="view">
      <div className={styles.view}>
        <div className={classNames("container", styles.container)}>
          <div className={classNames(styles.left, styles.side)}>
            <div className={styles.left_text}>Подбор типа отбеливания</div>
            <div className={styles.view__description}>
              Приложение для ухода за полостью рта
            </div>
          </div>

          <div className={classNames(styles.right, styles.side)}>
            <Tilt className={styles.parallax_effect} perspective={500}>
              <div className={styles.pictureframe}>
                <div className={styles.test}>Здарова </div>
                <div>Смотри сюда</div>
                <div className={styles.blink}>👀</div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
