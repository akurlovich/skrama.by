import axios from "axios";
import qs, { ParsedQs } from "qs";
import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setTextRange } from "typescript";
// import { ProductBlock } from "../ProductBlock/ProductBlock";
import { Categories } from "../Categories";
import { Pagination } from "../Pagination";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import { Sort } from "../Sort";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCategoryId, setFilters, setPageCount } from "../../store/reducers/FilterReducer/FilterSlice";
import { fetchPizzas } from "../../redux/slices/PizzasReducer/ActionCreators";
import { setItems } from "../../redux/slices/PizzasReducer/pizzasSlice";
import { IPizza } from "../../types/IPizza";
// @ts-ignore
import logoSvg from '../../assets/img/building.png';
// import './home.scss';
import { getTypes } from "../../store/reducers/TypeReducer/TypeActionCreators";
import { SERVER_URL } from "../../constants/http";
import { ProductBlock } from "../ProductBlock/ProductBlock";
import { ProductCard } from "../ProductCard/ProductCard";
import { getProducts } from "../../store/reducers/ProductReducer/ProductActionCreators";

interface IProps {
  searchValue?: string;
};

interface IParams {
  pageCount: number,
  categoryId: number,
  sortProperty: string,
};

const ProductsListInner: FC<IProps> = ({searchValue}) => {
  const navigate = useNavigate();
  const { products } = useAppSelector(state => state.productReducer)
  const { categoryId, sort: sortType, pageCount } = useAppSelector(state => state.filterReducer);
  const { types } = useAppSelector(state => state.typeReducer);
  const dispatch = useAppDispatch();

  // const setCurrentPage = (page: number) => {
  //   dispatch(setPageCount(page));
  //   dispatch(getTypes());
  // };

  const productByType = products.filter(item => item.typeID === categoryId);

  useEffect(() => {
    (async () => {
      await dispatch(getProducts())
    })()
  }, [])


  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
    }
  
  }, [])
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          // onClickCategory={setCategoryId}
          // categoryId={5}
        />
        {/* <Sort
          // onClickSortType={setSortType}
          sortType={sortType.name}
        /> */}
      </div>
      {/* <h2 className="content__title">All Pizza</h2> */}
      {/* {status === 'error' ? (
        <div className="content__error-info">
          <h2>Have some error...</h2>
          <p>Please, try late.</p>
        </div>
      )

        : ( */}
          <div className="content__items">
            {/* {status === 'loading' ? skeletons : pizzas} */}
            {productByType.map((type) => 
              <ProductCard key={type._id} productID={type._id} />
            )}
            {/* <BookBlock title="Поликарбонат" imgSrc={logoSvg}/>
            <BookBlock title="Штакетник" imgSrc={logoSvg}/>
            <BookBlock title="Профнастил" imgSrc={logoSvg}/> */}
            {/* <BookBlock title="Металлочерепича" imgSrc={logoSvg}/>
            <BookBlock title="Прозрачный шифер" imgSrc={logoSvg}/> */}
          </div>
        {/* ) */}
      {/* } */}
      {/* <Pagination currentPage={pageCount} onChangePage={setCurrentPage}/> */}
    </div>
  );
};

export const ProductsList = React.memo(ProductsListInner);
