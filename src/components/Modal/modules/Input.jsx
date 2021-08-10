import cn from "classnames";
import React, { useEffect, useState } from "react";

import "../modal.scss";

const Input = ({
  label,
  field,
  errorsHandler,
  regex = false,
  onChangeField,
  showErrors = false,
  type,
}) => {
  const [hasChanged, setHasChanged] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [value, setValue] = useState("");

  const transformLabel = (e, input) => {
    setHasChanged(true);
    if (!input) {
      if (e.target.value.length === 0) {
        setHasChanged(false);
      } else {
        setHasChanged(true);
      }
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    let empty = e.target.value === "";
    setEmpty(empty);
    errorsHandler && errorsHandler(`Пустое поле: ${label}`, !empty);
    if (hasChanged) {
      setInvalid(empty);
      if (regex) {
        let invalidTest = !regex.test(e.target.value);
        setInvalid(invalidTest);
        errorsHandler && errorsHandler(`Ошибка в поле: ${label}`, !invalidTest);
      }
    }
  };

  useEffect(() => {
    onChangeField({ [field]: value });
    errorsHandler && errorsHandler(`Пустое поле: ${label}`, value !== "");
  }, [value]);

  useEffect(() => {
    setEmpty(value === "");
    if (showErrors) {
      if (regex) {
        let invalidTest = regex.test(value);
        setInvalid(!invalidTest);
        errorsHandler && errorsHandler(`Ошибка в поле: ${label}`, invalidTest);
      } else {
        setInvalid(value === "");
      }
    } else {
      setInvalid(false);
    }
  }, [showErrors]);

  return (
    <div
      className={cn("modalInput-box", {
        hasChanged,
        invalid,
      })}
    >
      <input
        type={type}
        className="modalInput"
        onInput={(e) => transformLabel(e, false)}
        onBlur={(e) => transformLabel(e, false)}
        onFocus={(e) => transformLabel(e, true)}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <div className="modalInput-box__label">{label}</div>
      {invalid && (
        <span className="modalInput-box__valid">
          {empty ? "Введите значение" : "Введено с ошибкой"}
        </span>
      )}
    </div>
  );
};

export default Input;
