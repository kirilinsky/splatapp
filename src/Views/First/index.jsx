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
            <div className={styles.left_circle}>Подбор типа отбеливания</div>
            <div className={styles.view__description}>
              Подбор типа отбеливания Далеко-далеко за словесными горами в
              стране гласных и согласных живут рыбные тексты. Пор страну диких
              моей, даже путь журчит? Города, встретил заголовок рыбными, что
              имени страну безорфографичный мир, жаренные строчка собрал сих.
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
