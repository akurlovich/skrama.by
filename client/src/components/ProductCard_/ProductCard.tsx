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
      <div className="prodactcard" onClick={() => navigate(`/product/${productID}`)}>
        <div className="prodactcard__wrapper">
          <div className="prodactcard__container">
            <img className="prodactcard__image" src={SERVER_URL + foundProduct?.coverImage} alt="book cover"/>
            <div className="prodactcard__info">
              <div className="prodactcard__title">{foundProduct?.name}</div>
              <div className="prodactcard__author">{foundProduct?.price}</div>
              <div className="prodactcard__alarm">
                {/* <FcAlarmClock size={50}/> */}
                {/* <div className="prodactcard__timer">{`${timer.hours}h ${timer.minuts}m`}</div> */}
              </div>
            </div>
            {/* <div
              // onClick={canselHandler}
              className="prodactcard__cansel">
              <FcCancel size={60}/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export const ProductCard = React.memo(ProductCardInner);
