import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPageCount } from "../../store/reducers/FilterReducer/FilterSlice";
// @ts-ignore
import mainAvatar from '../../assets/img/main_avatar.png';
import './home.scss';
import { MainImage } from "./MainImage/MainImage";
import { MainAbout } from "./MainAbout/MainAbout";

const Home: FC = () => {
  return (
    <main className="main__wrapper">
      <MainImage/>
      <MainAbout/>
      
    </main>
  );
};

export default Home;
