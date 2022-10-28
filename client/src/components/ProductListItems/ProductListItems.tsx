import { current } from '@reduxjs/toolkit';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { DEFAULT_TYPE_ID_POLIKARBONAT } from '../../constants/user';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { uniqItemsFilter } from '../../services/ClientServices/UniqItemsFilter';
import { getAllProductsInfo, getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { IProductInfoResponse } from '../../types/IProductInfoResponse';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductSortItems } from '../ProductSortItems';
import './productlistitems.scss';

interface ISearchBlockValue {
  title: string,
  description: string,
  id: number,
}

const ProductListItemsInner:FC = () => {
  const { products, productsAllInfo } = useAppSelector(state => state.productReducer);
  // let params = useParams();
  // const foundProduct = products.find(item => item._id === params.id);
  const dispatch = useAppDispatch();
  const [thicknessValue, setThicknessValue] = useState('');
  const [densityValue, setDensityValue] = useState('');
  const [searchBlockValue, setSearchBlockValue] = useState<ISearchBlockValue[]>([])
  
  const searchBlockValueHandler = (title: string, description: string) => {
    const foundValue = searchBlockValue.find(item => item.title === title);
    if (foundValue) {
      setSearchBlockValue(searchBlockValue.map(item => item.id === foundValue.id ? {...item, title, description} : item));
    } else {

      setSearchBlockValue([...searchBlockValue, {title, description, id: Date.now()}]);

    }
    console.log(searchBlockValue)
  }

  const productsFillter = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT);

  const filltered = productsAllInfo.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT);

  const newFiltered: IProductInfoResponse[] = uniqItemsFilter(filltered, 'title');


  // filltered.reduce((acc, item) => {
  //  // @ts-ignore
  //   if (acc.map[item.title]) return acc;
  //   // @ts-ignore
  //   acc.map[item.title] = true;
   
  //   acc.items.push(item);
  //   return acc;
  // }, {map: {}, items: [] as IProductInfoResponse[]}).items;

//!--------------------------------------  
const newFilteredItems: IProductInfoResponse[] = uniqItemsFilter(filltered, 'description');

// filltered.reduce((acc, item) => {
//   // @ts-ignore
//    if (acc.map[item.description]) return acc;
//    // @ts-ignore
//    acc.map[item.description] = true;
  
//    acc.items.push(item);
//    return acc;
//  }, {map: {}, items: [] as IProductInfoResponse[]}).items;

  interface ISorted {
    title: string;
    uniqItems: string[];
  }

  const sortedObject = [] as ISorted[];

  for (let i = 0; i < newFiltered.length; i++) {
    const title = newFiltered[i].title;
    const description: string[] = [];
    const filterItem = newFilteredItems.filter(item => item.title === title);
    // console.log(description);
    for (let j = 0; j < filterItem.length; j++) {
      description.push(filterItem[j].description)
    }
    sortedObject.push({title: title, uniqItems: description});

  }





  // const thickness: string[] = [
  //   '4мм',
  //   '6мм',
  //   '8мм',
  //   '10мм',
  // ];

  // const density: string[] = [
  //   '0.46кг/м2',
  //   '0.51кг/м2',
  //   '0.60кг/м2',
  //   '0.70кг/м2',
  //   '0.88кг/м2',
  //   '0.96кг/м2',
  //   '1,10кг/м2',
  // ];

  useEffect(() => {
    (async () => {
      await dispatch(getProducts());
      await dispatch(getAllProductsInfo());
    })()
  }, []);
  
  return (
    <div className="productlistitems__wrapper">
      <div className="productlistitems__searchblock">
        {
          sortedObject.map(data => (
            <div key={data.title} className="productlistitems__searchblock_item">
              <div className="productlistitems__searchblock_item_title">
                {data.title}
              </div>
              {
                data.uniqItems.map(item => (
                  <div 
                    onClick={() => searchBlockValueHandler(data.title, item)}
                    key={item}
                    className={searchBlockValue.find(value => value.description === item) ? "productlistitems__searchblock_item_text active" : "productlistitems__searchblock_item_text"}>
                    {item}
                  </div>
                ))
              }
            </div>
          ))
        }
        {/* <div className="productlistitems__searchblock_item">
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
        </div> */}
      </div>
      <div className="productlistitems__itemsblock">
        {/* <div className="productlistitems__itemsblock_title">
          Поликарбонат
        </div> */}
        {
          productsFillter.map(item => 
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