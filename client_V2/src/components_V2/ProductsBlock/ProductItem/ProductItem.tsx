import React, { FC } from 'react';
import './productitem.scss';
// @ts-ignore
import itemImage from '../../../assets/img/parnichok3.jpg'

const ProductItemInner: FC = () => {
  return (   
    <div className="productitem__item">
      <div className="productitem__item__image">
        <img className="productitem__item__image_img" src={itemImage} alt="parnichok" />
      </div>
      <div className="productitem__item__info">
        <div className="productitem__item__title">
          Поликабонат Парничок
        </div>
        <div className="productitem__item__description">
          <div className="productitem__item__text">
            <div className="productitem__item__text__main">
              Плотность: 
            </div>
            <div className="productitem__item__text__ssecondary">
              0,41 кг/м2
            </div>
          </div>
          <div className="productitem__item__text">
            Размер листа: 6х2,1м
          </div>
          <div className="productitem__item__text">
            Цвет: прозрачный
          </div>
        </div>
        <div className="productitem__item__price">
          123.00 руб
        </div>
      </div>
    </div>
  )
}

export const ProductItem = React.memo(ProductItemInner);