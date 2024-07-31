import React from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header />
          <form className="welcome-form">
            <AppInput
              inputText="Ваше имя"
              errorText="Введите имя в правильном формате"
              inputPlaceholder="Введите ваше имя"
              inputType="text"
            />
            <AppInput
              inputText="Ваш номер"
              errorText="Введите номер в правильном формате например"
              inputPlaceholder="Введите ваш номер"
              inputType="tel"
            />
            <AppInput
              inputText="Ваш почтовый адрес"
              errorText="Введите почту в правильном формате например"
              inputPlaceholder="Введите вашу почту"
              inputType="email"
            />
            <AppInput
              inputText="Город проживания"
              errorText="Введите город в правильном формате например"
              inputPlaceholder="Введите ваш город"
              inputType="country"
            />
            <AppButton isDisabled={true}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
