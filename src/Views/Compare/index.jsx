import React from "react";
import { Footer } from "../../components";

import "./style.scss";

import appstore from "../../assets/img/appstore.svg";
import googleplay from "../../assets/img/googleplay.svg";
import smile from "./assets/img/photo-smile.png";

const Compare = ({ toggle }) => {
  return (
    <>
      <section className="view download download-red">
        <div className="container">
          <div className="download-wrapper">
            <div className="download-info">
              <h2 className="download__title">
                <span className="red">Скачайте</span> приложение, чтобы
                подобрать
                <span className="red"> новую</span> улыбку!
              </h2>
              <div className="download-links">
                <img
                  onClick={toggle}
                  className="download-links__item"
                  src={appstore}
                  alt="Скачать с AppStore"
                />
                <img
                  onClick={toggle}
                  className="download-links__item"
                  src={googleplay}
                  alt="Скачать с GooglePlay"
                />
              </div>
            </div>
            <img
              className="download__smile"
              src={smile}
              alt="Картинка: улыбка девушки"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Compare;
