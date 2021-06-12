import React, { useState } from "react";
import Drawer from "react-drag-drawer";

import "./modal.scss";

import personal from '../../assets/personal.pdf';

const ModalInner = ({ open, toggle }) => {
  const [sended, setSended] = useState(false);
  return (
    <Drawer className="modalWrapper" open={open} onRequestClose={toggle}>
      {sended ? (
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

          <input className="modalInput" type="text" placeholder="Имя" />
          <input className="modalInput" type="email" placeholder="Email" />
          <button className="button modalButton">Отправить</button>
          <span className="modalInfo">
            Нажимая на кнопку, вы даете согласие на обработку своих персональных
            данных
          </span>
        </div>
      ) : (
        <div className="modalInner padded">
          <h1>Спасибо</h1>
          <p>Как только приложение появится, мы напишем вам!</p>

          <button className="button modalButton">Хорошо</button>
        </div>
      )}
    </Drawer>
  );
};

export default ModalInner;
