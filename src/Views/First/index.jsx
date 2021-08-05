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
              Подберите <span className="red">отбеливание для своих зубов</span>{" "}
              в 3 простых шага. Скачайте приложение и получите{" "}
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
