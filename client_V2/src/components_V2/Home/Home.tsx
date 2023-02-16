import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPageCount } from "../../store/reducers/FilterReducer/FilterSlice";
// @ts-ignore
import mainAvatar from '../../assets/img/main_avatar.png';
import './home.scss';


const Home: FC = () => {
  
  return (
    <main className="main__wrapper">
      <div className="main__title">
        <div className="main__title__text">
          Поликарбонат для Вашего дома: высокое качество и низкие цены!
        </div>
        {/* <button className="main__title__button">Купить</button> */}
        <div className="main__title__buttons">
          <button className="btn btn-primary btn-lg">Купить</button>
          <button className="btn btn-secondary btn-lg">Контакты</button>
        </div>
        <img src={mainAvatar} className="main__title__image" alt="avatar" />
      </div>
      {/* <img src={mainImage} className="main__wrapper__img" alt="main image" /> */}
    </main>
  );
};

export default Home;
