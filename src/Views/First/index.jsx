import React from "react";
import styles from "./view.module.scss";
import Tilt from "react-parallax-tilt";

const First = () => {
  return (
    <div className="view">
      <div className={styles.view}>
        first
        <Tilt className={styles.parallax_effect} perspective={500}>
          <div className={styles.pictureframe}>
            <div className={styles.test}>Здарова </div>
            <div>Смотри сюда</div>
            <div className={styles.blink}>👀</div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default First;
