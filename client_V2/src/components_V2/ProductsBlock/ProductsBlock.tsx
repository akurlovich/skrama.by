import React, { FC } from 'react';
import './productsblock.scss';
import { ProductItem } from './ProductItem/ProductItem';

const ProductsBlockInner: FC = () => {
  return (
    <div className='productsblock'>
      <div className="productsblock__title">
        Сотовый поликабонат
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
  )
}

export const ProductsBlock = React.memo(ProductsBlockInner);