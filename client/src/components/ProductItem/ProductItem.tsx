import React, { FC } from 'react';
import './productitem.scss';
import { useAppSelector } from '../../hooks/redux';
import { SERVER_URL } from '../../constants/http';
import { useParams } from 'react-router-dom';
// @ts-ignore
import starRatingSvg from '../../assets/img/star_rating.png';
// @ts-ignore
import minusSvg from '../../assets/img/minus.png';
// @ts-ignore
import plusSvg from '../../assets/img/plus.png';
// @ts-ignore
import cartSvg from '../../assets/img/cart.svg';

const ProductItemInner:FC = () => {
  const { products } = useAppSelector(state => state.productReducer)
  let params = useParams();
  const foundProduct = products.find(item => item._id === params.id);
  
  return (
    <>
      <div className="productitem">
        <div className="productitem__wrapper">
          <div className="productitem__container">
            <div className="productitem__imageblock">
              <img className="productitem__image" src={SERVER_URL + foundProduct?.coverImage} alt="book cover"/>
            </div>
            <div className="productitem__info">
              <div className="productitem__title">{foundProduct?.name}</div>
              <div className="productitem__rating">
                <img src={starRatingSvg}/>
                <img src={starRatingSvg}/>
                <img src={starRatingSvg}/>
                <img src={starRatingSvg}/>
                <img src={starRatingSvg}/>
                <div className="productitem__rating_review">
                  8 просмотров
                </div>
              </div>
              <div className="productitem__price">{`${foundProduct?.price} руб.`}</div>
              <div className="productitem__addinfo">
                <div className="">Плотность:</div>
                <div className="">0,46кг/м2</div>
              </div>
              <div className="productitem__addinfo">
                <div className="">Размер листа:</div>
                <div className="">6000х2100мм</div>
              </div>
              <div className="productitem__addinfo">
                <div className="">Цвет:</div>
                <div className="">прозрачный</div>
              </div>
              <div className="productitem__cartinfo">
                <div className="productitem__cartinfo_count">
                  <div className="productitem__cartinfo_block">
                    <img src={minusSvg} alt="" />
                  </div>
                  <div className="productitem__cartinfo_block nothover">
                    <div>2</div>
                  </div>
                  <div className="productitem__cartinfo_block">
                  <img src={plusSvg} alt="" />
                  </div>
                </div>
                <div className="productitem__cart">
                  <img className="productitem__cart_img" src={cartSvg} alt="" />
                  <div className="productitem__cart_btn">В корзину</div>
                </div>
              </div>
              
            </div>
            {/* <div
              // onClick={canselHandler}
              className="productitem__cansel">
              <FcCancel size={60}/>
            </div> */}
          </div>
          <div className="productitem__description">
            <div className="productitem__description_title">
              Описание
            </div>
            <div className="productitem__description_line"></div>
            <div className="productitem__description_main">
              лучший в мире поликарбонта
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, et aliquid corrupti eligendi expedita accusamus officiis temporibus saepe laudantium. Accusamus laborum iste recusandae molestias perspiciatis porro consectetur nisi odio.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quas architecto sed eligendi ullam, illo fugit temporibus dignissimos quisquam delectus perspiciatis ipsum soluta odit reprehenderit, fugiat consequuntur blanditiis! A, praesentium.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident doloremque aperiam ipsam doloribus. Labore laboriosam rerum provident earum numquam quam repellat, nesciunt at esse, nam eaque molestias deserunt quos.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProductItem = React.memo(ProductItemInner);
