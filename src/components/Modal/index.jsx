import React from "react";
import Drawer from "react-drag-drawer";

import "./modal.scss";

const ModalInner = ({ open, toggle }) => {
  return (
    <Drawer className="modalWrapper" open={open} onRequestClose={toggle}>
      <div className="modalInner">
        <button onClick={toggle} className="close-modal">
          &times;
        </button>
        <h1 className="main-title">
          <span className="red">Уже</span> скоро!
        </h1>
        <p className="modalDescr">
          Приложение еще в процессе разработки, оставьте email, чтобы мы могли
          написать когда приложение станет доступно
        </p>

        <input className="modalInput" type="email" placeholder="Email" />

        <button className="button modalButton">Отправить</button>
        <span className="modalInfo">
          Нажимая на кнопку, вы даете согласие на обработку своих персональных
          данных
        </span>
      </div>
    </Drawer>
  );
};

export default ModalInner;
