import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const regex = /^[A-Za-zA-Ая-я]+$;

  const [buttonError, setButtonError] = useState(true);

  useEffect(() => {
    if(name && phone){
      setButtonError(false)
    }
  }, [name, phone]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerText={"Добро пожаловать в квиз от лучшего учебного центра"}
          />
          <form className="welcome-form">
            <AppInput
              inputText="Ваше имя"
              errorText="Введите имя в правильном формате"
              inputPlaceholder="Введите ваше имя"
              inputType="text"
              inputValue={name}
              inputChange={setName}
            />
            <AppInput
              inputText="Ваш номер"
              errorText="Введите номер в правильном формате например"
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
              inputValue={phone}
              inputChange={setPhone}
            />
            <Link to="step-one">
              <AppButton isDisabled={buttonError} />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
