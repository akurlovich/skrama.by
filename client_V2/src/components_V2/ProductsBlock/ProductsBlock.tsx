import React, { FC, useEffect } from 'react';
import './productsblock.scss';
import { ProductItem } from './ProductItem/ProductItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllProductsInfo, getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { DEFAULT_TYPE_ID_POLIKARBONAT } from '../../constants/user';
import { Loader } from '../UI/Loader/Loader';

const ProductsBlockInner: FC = () => {
  const dispatch = useAppDispatch();
  const { products, productsAllInfo, isLoading } = useAppSelector(state => state.productReducer);
  const productsFilter = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item);

  useEffect(() => {
    (async () => {
      await dispatch(getProducts());
      await dispatch(getAllProductsInfo());
    })()
  }, []);

  return (
    <div className='productsblock'>
      {isLoading && <Loader/>}
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
          {productsFilter.map(item => 
            <ProductItem key={item._id} item={item} productsInfo={productsAllInfo}/>
          )}
        </div>
      </div>
    </div>
  )
}

export const ProductsBlock = React.memo(ProductsBlockInner);