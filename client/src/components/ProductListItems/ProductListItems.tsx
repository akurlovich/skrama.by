import { current } from '@reduxjs/toolkit';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllProductsInfo, getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductSortItems } from '../ProductSortItems';
import './productlistitems.scss';

const ProductListItemsInner:FC = () => {
  const { products, productsAllInfo } = useAppSelector(state => state.productReducer);
  // let params = useParams();
  // const foundProduct = products.find(item => item._id === params.id);
  const dispatch = useAppDispatch();
  const [thicknessValue, setThicknessValue] = useState('');
  const [densityValue, setDensityValue] = useState('');

  const thickness: string[] = [
    '4мм',
    '6мм',
    '8мм',
    '10мм',
  ];

  const density: string[] = [
    '0.46кг/м2',
    '0.51кг/м2',
    '0.60кг/м2',
    '0.70кг/м2',
    '0.88кг/м2',
    '0.96кг/м2',
    '1,10кг/м2',
  ];

  useEffect(() => {
    (async () => {
      await dispatch(getProducts());
      await dispatch(getAllProductsInfo());
    })()
  }, []);
  
  return (
    <div className="productlistitems__wrapper">
      <div className="productlistitems__searchblock">
        <div className="productlistitems__searchblock_item">
          <div className="productlistitems__searchblock_item_title">
            Толщина
          </div>
          {
            thickness.map(item => (
              <div 
                onClick={() => setThicknessValue(item)}
                key={item}
                className={item === thicknessValue ? "productlistitems__searchblock_item_text active" : "productlistitems__searchblock_item_text"}>
                {item}
              </div>
            ))
          }
        </div>
        <div className="productlistitems__searchblock_item">
          <div className="productlistitems__searchblock_item_title">
              Плотность
            </div>
        {
            density.map(item => (
              <div 
                onClick={() => setDensityValue(item)}
                key={item}
                className={item === densityValue ? "productlistitems__searchblock_item_text active" : "productlistitems__searchblock_item_text"}>
                {item}
              </div>
            ))
          }
        </div>
      </div>
      <div className="productlistitems__itemsblock">
        {/* <div className="productlistitems__itemsblock_title">
          Поликарбонат
        </div> */}
        {
          products.map(item => 
            <ProductSortItems key={item._id} item={item} productsInfo={productsAllInfo}/>
            )
        }
          {/* <ProductSortItems/>
          <ProductSortItems/>
          <ProductSortItems/> */}
      </div>
    </div>
  );
};

export const ProductListItems = React.memo(ProductListItemsInner);