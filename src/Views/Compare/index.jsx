import React, { Fragment } from "react";
import styles from "./view.module.scss";

import before from "./assets/img/before.png";
import after from "./assets/img/after.png";
import ReactCompareImage from "react-compare-image";
import classNames from "classnames";

const Compare = () => {
  return (
    <div className="view">
      <div className={styles.withfooter}>
        <div className={styles.compare}>
          <div className={classNames("container", styles.view__wrap)}>
            <h2 className={styles.view__title}>
              Теперь подобрать отбеливание проще простого
            </h2>
            <div className={styles.view_compare}>
              <ReactCompareImage
                handle={<Fragment />}
                hover
                leftImage={before}
                rightImage={after}
              />
            </div>
            <button className={classNames("button", styles.button)}>
              попробовать
            </button>
          </div>
        </div>
        <div className={styles.footer}>footer</div>
      </div>
    </div>
  );
};

export default Compare;
