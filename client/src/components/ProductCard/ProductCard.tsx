import React, { FC } from 'react';
import './productcard.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SERVER_URL } from '../../constants/http';
import { useNavigate } from 'react-router-dom';

interface IProps {
  productID: string,
}

const ProductCardInner:FC<IProps> = ({productID}) => {
  const { products } = useAppSelector(state => state.productReducer)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const foundProduct = products.find(item => item._id === productID);
  
  return (
    <>
      <div className="bookcard" onClick={() => navigate(`/product/${productID}`)}>
        <div className="bookcard__wrapper">
          <div className="bookcard__container">
            <img className="bookcard__image" src={SERVER_URL + foundProduct?.coverImage} alt="book cover"/>
            <div className="bookcard__info">
              <div className="bookcard__title">{foundProduct?.name}</div>
              <div className="bookcard__author">{foundProduct?.price}</div>
              <div className="bookcard__alarm">
                {/* <FcAlarmClock size={50}/> */}
                {/* <div className="bookcard__timer">{`${timer.hours}h ${timer.minuts}m`}</div> */}
              </div>
            </div>
            {/* <div
              // onClick={canselHandler}
              className="bookcard__cansel">
              <FcCancel size={60}/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const ProductCard = React.memo(ProductCardInner);
