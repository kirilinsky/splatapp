import React from "react";
import styles from "./view.module.scss";

import before from "./assets/img/before.png";
import after from "./assets/img/after.png";

const Third = () => {
  return (
    <div className="view">
      <div className="container">
        <div className={styles.view__wrap}>
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
        </div>

        {/*   <BeforeAfterSlider
            before={after}
            after={before}
            width={640}
            height={480}
          /> */}
      </div>
    </div>
  );
};

export default Third;
