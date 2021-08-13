import React from "react";
import appstore from "../../assets/img/appstore.svg";
import googleplayImg from "../../assets/img/googleplay.svg";
import { Footer } from "../../components";
import smile from "./assets/img/photo-smile.png";
import "./style.scss";

import { googleHandle } from "../../helpers";

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
                  className="download-links__item appstore"
                  src={appstore}
                  alt="Скачать с AppStore"
                  onClick={() => {
                    googleHandle("appstore");
                    toggle();
                  }}
                />
                <img
                  className="download-links__item googleplay"
                  src={googleplayImg}
                  alt="Скачать с GooglePlay"
                  onClick={() => {
                    googleHandle("googleplay");
                    toggle();
                  }}
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
