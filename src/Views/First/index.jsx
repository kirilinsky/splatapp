import React from "react";

import "./style.scss";

import phone from "./assets/img/phone.png";
import appstore from "../../assets/img/appstore.svg";
import googleplay from "../../assets/img/googleplay.svg";
import { Header } from "../../components";

const First = ({ toggle, handlePageChange }) => {
  return (
    <div className="view first">
      <Header toggle={toggle} handlePageChange={handlePageChange} />
      <div className="container">
        <div className="wrapper">
          <div className="download">
            <h1 className="main-title">
              Выберите <span className="red">подходящее отбеливание</span> для
              ваших зубов за 3 простых шага.
              <br />
              <span className="red">Скачайте приложение</span>, наведите камеру
              на вашу улыбку и получите{" "}
              <span className="red">профессиональные рекомендации</span> от
              экспертов!
            </h1>
            <div className="markets">
              <img
                className="markets__item"
                src={appstore}
                alt="Скачать с App Store"
              />
              <img
                className="markets__item"
                src={googleplay}
                alt="Скачать с Google Play"
              />
            </div>
          </div>
          <img
            className="mockup"
            src={phone}
            alt="Мокап с приложением внутри"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
