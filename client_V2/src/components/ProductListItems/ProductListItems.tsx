import { current } from '@reduxjs/toolkit';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_TYPE_ID_POLIKARBONAT } from '../../constants/user';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { uniqItemsFilter } from '../../services/ClientServices/UniqItemsFilter';
import { getAllProductsInfo, getProducts } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { IProductInfoResponse } from '../../types/IProductInfoResponse';
import { IProductResponse } from '../../types/IProductResponse';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductSortItems } from '../ProductSortItems/ProductSortItems';
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
  // const [thicknessValue, setThicknessValue] = useState('');
  // const [densityValue, setDensityValue] = useState('');
  const [searchBlockValue, setSearchBlockValue] = useState<ISearchBlockValue[]>([]);
  const [readyProductsArray, setreadyProductsArray] = useState<IProductResponse[]>([]);
  
  const searchBlockValueHandler = (title: string, description: string) => {
    const foundValue = searchBlockValue.find(item => item.title === title);
    if (foundValue) {
      setSearchBlockValue(searchBlockValue.map(item => item.id === foundValue.id ? {...item, title, description} : item));
    } else {

      setSearchBlockValue([...searchBlockValue, {title, description, id: Date.now()}]);

    }
    // console.log(searchBlockValue)
  }

  // const productsFilter = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// useEffect(() => {
//   const productsFilter = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item);
//   console.log(productsFilter);
//   setreadyProductsArray(productsFilter);
// }, [])

useEffect(() => {
  const productsFilterByTypeID = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item);

  const infoFilter = productsAllInfo.filter(item => item.description === searchBlockValue[0]?.description);

  // setreadyProductsArray(productsFilter);

  let ALLinfoFilter: IProductInfoResponse[] = [];

  if (searchBlockValue.length) {
    setreadyProductsArray([]);
    for (let i = 0; i < searchBlockValue.length; i++) {
      let newProdFilter = productsAllInfo.filter(item => item.description === searchBlockValue[i]?.description);
      ALLinfoFilter = ([...ALLinfoFilter, ...newProdFilter])
      // let qqqq = productsAllInfo.filter(item => item.description === searchBlockValue[i]?.description);
      // ALLinfoFilter.push(qqqq)
      // console.log(ALLinfoFilter);
    }
    let prodIDArray: string[] = [];
  
    for (let i = 0; i < ALLinfoFilter.length; i++) {
      prodIDArray.push(ALLinfoFilter[i].productID);
    }
  
    const countItems = prodIDArray.reduce((acc, item) => {
      // @ts-ignore
      acc[item] = acc[item] ? acc[item] + 1 : 1; 
      return acc;
    }, {});
  // @ts-ignore
    const result = Object.keys(countItems).filter((item) => countItems[item] == searchBlockValue.length);
    // console.log(countItems);
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
      const newProd = productsFilterByTypeID.find(item => item._id === result[i]);
      if (newProd) {
        // console.log(newProd)
        setreadyProductsArray(prev => [...prev, newProd])
  
      }
    }

  } else {
    setreadyProductsArray(productsFilterByTypeID)
  }



  // let ALLinfoFilter2: IProductInfoResponse[] = [];

  // if (ALLinfoFilter.length > 1) {
  //   for (let i = 0; i < ALLinfoFilter.length -1; i++) {
  //     // for (let j = 0; j < ALLinfoFilter[i].length; j++) {

  //     // }
  //     let s = new Set(ALLinfoFilter[i + 1]);

  //     ALLinfoFilter2 = ALLinfoFilter[i].filter(x => s.has(x.productID))
  //   }

  // }
  // console.log('111', ALLinfoFilter2);



  // console.log(prodIDArray.filter((x, y) => prodIDArray.indexOf(x) == y));





  // if (infoFilter.length) {
  //   setreadyProductsArray([]);
  //   for (let i = 0; i < infoFilter.length; i++) {
  //     const newProd = productsFilterByTypeID.find(item => item._id === infoFilter[i].productID);
  //     if (newProd) {
  //       console.log(newProd)
  //       setreadyProductsArray(prev => [...prev, newProd])
  
  //     }
  //   }
  // } else {
  //   setreadyProductsArray(productsFilterByTypeID)
  // }
  
}, [searchBlockValue])



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
      // const productsFilter = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item);
      // console.log(productsFilter);
      // setreadyProductsArray(productsFilter);
    })()
  }, []);

  useEffect(() => {
    const productsFilter = products.filter(item => item.typeID === DEFAULT_TYPE_ID_POLIKARBONAT).filter(item => item);
      // console.log(productsFilter);
      setreadyProductsArray(productsFilter);
  }, [products])
  
  
  return (
    <>
      <NavigationBar/>
      <div className="productlistitems__wrapper">
        <div className="productlistitems__searchblock">
          {/* <button onClick={() => console.log(readyProductsArray)}>click</button> */}
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
          <div className="productlistitems__searchblock_item">
            <button
              onClick={() => setSearchBlockValue([])} 
              className="productlistitems__searchblock_item_title_btn">
              Очистить
            </button>
          </div>
          
        </div>
        <div className="productlistitems__itemsblock">
          {/* <div className="productlistitems__itemsblock_title">
            Поликарбонат
          </div> */}
          {
            readyProductsArray.map(item => 
              <ProductSortItems key={item._id} item={item} productsInfo={productsAllInfo}/>
              )
          }
            {/* <ProductSortItems/>
            <ProductSortItems/>
            <ProductSortItems/> */}
        </div>
      </div>
    </>
  );
};

export const ProductListItems = React.memo(ProductListItemsInner);