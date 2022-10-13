import React, { FC } from 'react';
import './productitem.scss';
import { useAppSelector } from '../../hooks/redux';
import { SERVER_URL } from '../../constants/http';
import { useParams } from 'react-router-dom';

const ProductItemInner:FC = () => {
  const { products } = useAppSelector(state => state.productReducer)
  let params = useParams();
  const foundProduct = products.find(item => item._id === params.id);
  
  return (
    <>
      <div className="productitem">
        <div className="productitem__wrapper">
          <div className="productitem__container">
            <img className="productitem__image" src={SERVER_URL + foundProduct?.coverImage} alt="book cover"/>
            <div className="productitem__info">
              <div className="productitem__title">{foundProduct?.name}</div>
              <div className="productitem__price">Плотность 0,46кг/м2</div>
              <div className="productitem__price">Размер листа 6000х2100мм</div>
              <div className="productitem__price">Цвет: прозрачный</div>
              <div className="productitem__price">{`${foundProduct?.price} руб.`}</div>
              <div className="productitem__alarm">
                {/* <FcAlarmClock size={50}/> */}
                {/* <div className="productitem__timer">{`${timer.hours}h ${timer.minuts}m`}</div> */}
              <button className="productitem__btn">В корзину</button>
              </div>
            </div>
            {/* <div
              // onClick={canselHandler}
              className="productitem__cansel">
              <FcCancel size={60}/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const ProductItem = React.memo(ProductItemInner);
