import React, { FC, useEffect, useState } from 'react';
import './productsblock.scss';
import { ProductItem } from './ProductItem/ProductItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllProductsInfo, getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { DEFAULT_TYPE_ID_POLIKARBONAT } from '../../constants/user';
import { Loader } from '../UI/Loader/Loader';
import { IProductResponse } from '../../types/IProductResponse';

const ProductsBlockInner: FC = () => {
  const dispatch = useAppDispatch();
  const { products, productsAllInfo, isLoading } = useAppSelector(state => state.productReducer);
  const [sortData, setSortData] = useState('4мм');
  const [readyProductsArray, setReadyProductsArray] = useState<IProductResponse[]>([]);

  const sortArrayValue: string[] = ['4мм', '6мм', '8мм', '10мм'];
  const readyFilterd = (sort: string) => {
    const productsFilter = productsAllInfo.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item.description === sort);

    const sortProduct: IProductResponse[] = [];
    for (const item of productsFilter) {
      const found = products.find(element => element._id === item.productID);
      if (found) {
        sortProduct.push(found);
      }
    }
    return sortProduct;
  };

  const changeSortData = (sort: string) => {
    setSortData(sort);
    const productsFilter = readyFilterd(sort);
    setReadyProductsArray(productsFilter);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getProducts());
      await dispatch(getAllProductsInfo());
    })()
    const productsFilter = readyFilterd(sortData);
    // console.log(productsFilter)
    setReadyProductsArray(productsFilter);
  }, []);

  useEffect(() => {
    const productsFilter = readyFilterd(sortData);
    // console.log(productsFilter)
    setReadyProductsArray(productsFilter);
  }, [products, productsAllInfo]);

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
          {sortArrayValue.map(item => (
            <div
              key={item}
              className={`productsblock__sort__item ${sortData === item ? 'active' : null}`}
              onClick={() => changeSortData(item)}
            >
              {item}
            </div>
          ))}
          {/* <div 
            className={`productsblock__sort__item ${sortData === '6мм' ? 'active' : null}`}
            onClick={() => changeSortData('6мм')}
          >
            6мм
          </div>
          <div
            className={`productsblock__sort__item ${sortData === '8мм' ? 'active' : null}`}
            onClick={() => changeSortData('8мм')}
          >
            8мм
          </div>
          <div
            className={`productsblock__sort__item ${sortData === '10мм' ? 'active' : null}`}
            onClick={() => changeSortData('10мм')}
          >
            10мм
          </div> */}
        </div>
        <div className="productsblock__container">
          {readyProductsArray.map(item => 
            <ProductItem key={item._id} item={item} productsInfo={productsAllInfo}/>
          )}
        </div>
      </div>
    </div>
  )
}

export const ProductsBlock = React.memo(ProductsBlockInner);