import axios from "axios";
import React, { useState } from "react";
import Drawer from "react-drag-drawer";
import close from "./assets/img/close.svg";
import "./modal.scss";
import Input from "./modules/Input";

const ModalInner = ({ open, toggle }) => {
  const [formErrors, setFormErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);
  const [formData, setFormData] = useState({});
  const [sended, setSended] = useState(false);
  const [errorSended, setErrorSended] = useState(false);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const inputHandler = (payload) => {
    setFormData({ ...formData, ...payload });
  };

  const tryToSave = () => {
    setClicked(true);
    let valid = formErrors.length === 0;
    setShowErrors(!valid);
    setError(null);
    if (valid && checked) {
      axios
        .post(`${window.location.origin}/splatapp/saver.php`, {
          data: formData,
        })
        .then((x) => {
          if (x.status === 200) {
            setErrorSended(false);
            setSended(true);
            console.log(`${x.data.message} статус кода ${x.data.status}`);
          }
        })
        .catch((e) => {
          setErrorSended(true);
          setSended(true);
          console.log(e.message);
        });
    } else {
      setError(true);
    }
  };

  const errorsHandler = (payload, push) => {
    let ers = formErrors;
    if (!push) {
      if (!ers.includes(payload)) {
        ers.push(payload);
      }
    } else {
      ers = ers.filter((x) => x !== payload);
    }
    setFormErrors(ers);
  };

  return (
    <Drawer className="modalWrapper" open={open} onRequestClose={toggle}>
      {!sended ? (
        <div className="modalInner">
          <button onClick={toggle} className="close-modal">
            <img src={close} alt="Закрыть" />
          </button>
          <h1 className="main-title">Спасибо за заявку!</h1>
          <p className="modalDescr">
            К сожалению, скачивание мобильного приложения на данный момент
            недоступно. Оставьте свои контакты, чтобы мы направили вам ссылку,
            как только оно будет готово.
          </p>

          <Input
            label="Ваше имя"
            errorsHandler={errorsHandler}
            regex={/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u}
            required={true}
            field="name"
            onChangeField={inputHandler}
            showErrors={showErrors}
            type="text"
          />
          <Input
            label="Ваш телефон"
            errorsHandler={errorsHandler}
            regex={/^((\+7|7|8)+([0-9]){10})$/}
            required={true}
            field="phone"
            onChangeField={inputHandler}
            showErrors={showErrors}
            type="phone"
          />
          <Input
            label="Ваш Email"
            errorsHandler={errorsHandler}
            regex={/^^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
            required={true}
            field="email"
            onChangeField={inputHandler}
            showErrors={showErrors}
            type="email"
          />
          <label
            htmlFor="personal"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "5px 0",
            }}
          >
            <div>
              <input
                type="checkbox"
                id="personal"
                required
                style={{ marginRight: "8px" }}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
              Принимаю условия
            </div>
            {clicked && !checked ? (
              <span style={{ display: "block", color: "red" }}>
                Примите условия
              </span>
            ) : (
              ""
            )}
          </label>
          <button
            className="button modalButton"
            onClick={(e) => {
              e.preventDefault();
              tryToSave();
            }}
            disabled={errorSended}
          >
            Отправить
          </button>
          <span className="modalInfo">
            Нажимая на кнопку, вы даете согласие на обработку своих персональных
            данных
          </span>
        </div>
      ) : !errorSended ? (
        <div className="modalInner padded">
          <h1>Спасибо</h1>
          <p>Как только приложение появится, мы напишем вам!</p>

          <button className="button modalButton" onClick={toggle}>
            Хорошо
          </button>
        </div>
      ) : (
        <div className="modalInner padded">
          <h1>Упс, что-то пошло не так!</h1>
          <p>Перезагрузите страницу</p>

          <button
            className="button modalButton"
            onClick={() => window.location.reload()}
          >
            Перезагрузить
          </button>
        </div>
      )}
    </Drawer>
  );
};

export default ModalInner;
