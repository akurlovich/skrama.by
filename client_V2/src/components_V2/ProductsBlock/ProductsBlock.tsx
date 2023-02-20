import React, { FC } from 'react';
import './productsblock.scss';
import { ProductItem } from './ProductItem/ProductItem';

const ProductsBlockInner: FC = () => {
  return (
    <div className='productsblock'>
      <div className="productsblock__title">
        Сотовый поликабонат
      </div>
      <div className="productsblock__main">
        <div className="productsblock__sort">
          <div className="productsblock__sort__title">
            Толщина
          </div>
          <div className="productsblock__sort__item active">
            4мм
          </div>
          <div className="productsblock__sort__item">
            6мм
          </div>
          <div className="productsblock__sort__item">
            8мм
          </div>
          <div className="productsblock__sort__item">
            10мм
          </div>
        </div>
        <div className="productsblock__container">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
      </div>
    </div>
  )
}

export const ProductsBlock = React.memo(ProductsBlockInner);