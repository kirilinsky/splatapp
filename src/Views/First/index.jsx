import React from "react";

import "./style.scss";

import phone from "./assets/img/phone.png";
import appstore from "../../assets/img/appstore.svg";
import googleplay from "../../assets/img/googleplay.svg";
import { Header } from "../../components";

const First = ({ handlePageChange }) => {
  return (
    <div className="view first">
      <Header handlePageChange={handlePageChange} />
      <div className="container">
        <div className="wrapper">
          <div className="download">
            <h1 className="main-title">
              <span className="red">Скачайте</span> приложение про отбеливание
              зубов и <span className="red">подберите</span> себе лучшее решение
            </h1>
            <div className="markets">
              <img src={appstore} alt="Скачать с App Store" />
              <img src={googleplay} alt="Скачать с Google Play" />
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
