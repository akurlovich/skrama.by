import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPageCount } from "../../store/reducers/FilterReducer/FilterSlice";
// @ts-ignore
import mainAvatar from '../../assets/img/main_avatar.png';
import './home.scss';
import { MainImage } from "./MainImage/MainImage";
import { MainAbout } from "./MainAbout/MainAbout";
import { MainFacts } from "./MainFacts/MainFacts";
import { MainServices } from "./MainServices/MainServices";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";
import { ProductInfo } from "../ProductsBlock/ProductInfo/ProductInfo";

const Home: FC = () => {
  return (
    <main className="main__wrapper">
      <ProductInfo/>
      {/* <ProductsBlock/> */}
      {/* <MainImage/>
      <MainAbout/>
      <MainFacts/>
      <MainServices/> */}
    </main>
  );
};

export default Home;
