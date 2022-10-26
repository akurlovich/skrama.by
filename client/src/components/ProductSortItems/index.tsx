import React, { FC, useEffect } from 'react';
import './productsortitems.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SERVER_URL } from '../../constants/http';
import { useNavigate, useParams } from 'react-router-dom';
// @ts-ignore
import starRatingSvg from '../../assets/img/star_rating.png';
import { getAllProductsInfo, getProductInfoByProductID, getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { IProductResponse } from '../../types/IProductResponse';
import { IProductInfoResponse } from '../../types/IProductInfoResponse';

interface IProps {
  item: IProductResponse;
  productsInfo: IProductInfoResponse[];
}

const ProductSortItemsInner:FC<IProps> = ({item, productsInfo}) => {
  const navigate = useNavigate();
  // const { productsAllInfo } = useAppSelector(state => state.productReducer);
  // let params = useParams();
  const foundProductInfo = productsInfo.filter(i => i.productID === item._id);
  const dispatch = useAppDispatch();
  console.log(foundProductInfo);
  console.log(productsInfo);

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getAllProductsInfo());
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
            {foundProductInfo.map(item => (
              <div key={item._id} className="productsortitems__addinfo">
                <div className="">{item.title}</div>
                <div className="">{item.description}</div>
              </div>
              )) 
            }
            {/* <div className="productsortitems__addinfo">
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
            </div> */}
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
        </div>
      </div>
    </div>
);
};

export const ProductSortItems = React.memo(ProductSortItemsInner);