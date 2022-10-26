import React, { FC, useEffect } from 'react';
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
          <div className="productlistitems__searchblock_item_text">
            4мм
          </div>
          <div className="productlistitems__searchblock_item_text">
            6мм
          </div>
          <div className="productlistitems__searchblock_item_text">
            8мм
          </div>
          <div className="productlistitems__searchblock_item_text">
            10мм
          </div>
        </div>
        <div className="productlistitems__searchblock_item">
          <div className="productlistitems__searchblock_item_title">
            Плотность
          </div>
          <div className="productlistitems__searchblock_item_text">
            0,46кг/м2
          </div>
          <div className="productlistitems__searchblock_item_text">
            0,51кг/м2
          </div>
          <div className="productlistitems__searchblock_item_text">
            0,60кг/м2
          </div>
          <div className="productlistitems__searchblock_item_text">
            0,88кг/м2
          </div>
          <div className="productlistitems__searchblock_item_text">
            0,96кг/м2
          </div>
          <div className="productlistitems__searchblock_item_text">
            1,10кг/м2
          </div>
        </div>
      </div>
      <div className="productlistitems__itemsblock">
        <div className="productlistitems__itemsblock_title">
          Поликарбонат
        </div>
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