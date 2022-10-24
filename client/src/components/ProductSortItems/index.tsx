import React, { FC, useEffect } from 'react';
import './productsortitems.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SERVER_URL } from '../../constants/http';
import { useNavigate, useParams } from 'react-router-dom';
// @ts-ignore
import starRatingSvg from '../../assets/img/star_rating.png';
// @ts-ignore
import minusSvg from '../../assets/img/minus.png';
// @ts-ignore
import plusSvg from '../../assets/img/plus.png';
// @ts-ignore
import cartSvg from '../../assets/img/cart.svg';
import { getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { IProductResponse } from '../../types/IProductResponse';

interface IProps {
  item: IProductResponse;
}

const ProductSortItemsInner:FC<IProps> = ({item}) => {
  const navigate = useNavigate();
  // const { products } = useAppSelector(state => state.productReducer)
  // let params = useParams();
  // const foundProduct = products.find(item => item._id === params.id);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getProducts());
  //   })()
  // }, []);
  
  return (
    <div className="productsortitems" onClick={() => navigate(`/product/${item._id}`)}>
      <div className="productsortitems__wrapper">
        <div className="productsortitems__title">{item.name}</div>
        <div className="productsortitems__container">
          <div className="productsortitems__imageblock">
            <img className="productsortitems__image" src={SERVER_URL + item.coverImage} alt="product cover"/>
          </div>
          <div className="productsortitems__info">
            <div className="productsortitems__rating">
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <div className="productsortitems__rating_review">
                8 просмотров
              </div>
            </div>
            {/* <div className="productsortitems__addinfo">
              <div className="">Толщина:</div>
              <div className="">4мм</div>
            </div> */}
            <div className="productsortitems__addinfo">
              <div className="">Плотность:</div>
              <div className="">0,46кг/м2</div>
            </div>
            <div className="productsortitems__addinfo">
              <div className="">Размер листа:</div>
              <div className="">6000х2100мм</div>
            </div>
            <div className="productsortitems__addinfo">
              <div className="">Цвет:</div>
              <div className="">прозрачный</div>
            </div>
            <div className="productsortitems__price">{`${item.price} руб.`}</div>
            {/* <div className="productsortitems__cartinfo">
              <div className="productsortitems__cartinfo_count">
                <div className="productsortitems__cartinfo_block">
                  <img src={minusSvg} alt="" />
                </div>
                <div className="productsortitems__cartinfo_block nothover">
                  <div>2</div>
                </div>
                <div className="productsortitems__cartinfo_block">
                <img src={plusSvg} alt="" />
                </div>
              </div>
              <div className="productsortitems__cart">
                <img className="productsortitems__cart_img" src={cartSvg} alt="" />
                <div className="productsortitems__cart_btn">Подробнее...</div>
              </div>
            </div> */}
            
          </div>
          {/* <div
            // onClick={canselHandler}
            className="productsortitems__cansel">
            <FcCancel size={60}/>
          </div> */}
        </div>
        {/* <div className="productsortitems__description">
          <div className="productsortitems__description_title">
            Описание
          </div>
          <div className="productsortitems__description_line"></div>
          <div className="productsortitems__description_main">
            лучший в мире поликарбонта
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, et aliquid corrupti eligendi expedita accusamus officiis temporibus saepe laudantium. Accusamus laborum iste recusandae molestias perspiciatis porro consectetur nisi odio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quas architecto sed eligendi ullam, illo fugit temporibus dignissimos quisquam delectus perspiciatis ipsum soluta odit reprehenderit, fugiat consequuntur blanditiis! A, praesentium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident doloremque aperiam ipsam doloribus. Labore laboriosam rerum provident earum numquam quam repellat, nesciunt at esse, nam eaque molestias deserunt quos.
          </div>
        </div> */}
      </div>
    </div>
);
};

export const ProductSortItems = React.memo(ProductSortItemsInner);