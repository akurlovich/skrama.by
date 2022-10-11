import axios from "axios";
import qs, { ParsedQs } from "qs";
import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setTextRange } from "typescript";
import { BookBlock } from "../BookBlock/BookBlock";
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
import './home.scss';
import { getTypes } from "../../store/reducers/TypeReducer/TypeActionCreators";
import { SERVER_URL } from "../../constants/http";

interface IProps {
  searchValue?: string;
};

interface IParams {
  pageCount: number,
  categoryId: number,
  sortProperty: string,
};

const Home: FC<IProps> = ({searchValue}) => {
  const navigate = useNavigate();
  const { categoryId, sort: sortType, pageCount } = useAppSelector(state => state.filterReducer);
  const { types } = useAppSelector(state => state.typeReducer);
  // const { items, status } = useAppSelector(state => state.pizzasReducer);
  // const [items, setItems] = useState<IPizza[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [categoryId, setCategoryId] = useState<number>(0);
  // const [sortType, setSortType] = useState<string>('rating');
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const setCurrentPage = (page: number) => {
    dispatch(setPageCount(page));
    dispatch(getTypes());
  };

  // const pizzas = items.filter(item => {
  //   if (item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // }).map((item) => (
  //   <Link key={item.id} to={`/pizza/${item.id}`}>
  //     <PizzaBlock
  //       id={Number(item.id)}
  //       name={item.title}
  //       price={item.price}
  //       imageUrl={item.imageUrl}
  //       size={item.sizes}
  //       type={item.types}
  //     />
  //   </Link>
  // ));

  // const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  // useEffect(() => {
  //   const fetch_Pizzas = async () => {
  //     const order = sortType.name.includes('-') ? 'asc' : 'desc';
  //     const sortBy = sortType.name.replace('-', '');
  //     const category = categoryId > 0 ? `category=${categoryId}` : '';
  //     const search = searchValue ? `&search=${searchValue}` : '';
  //     // setIsLoading(true);
  //     dispatch(fetchPizzas({order, sortBy, category, search, pageCount}));
  //     // setIsLoading(false);
  //     // try {
  //     //   const res = await axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
  //     //   // setItems(res.data);
  //     //   dispatch(setItems(res.data));
  //     // } catch (error) {
  //     //   console.log('ERROR', error);
  //     // } finally {
  //     //   setIsLoading(false);
  //     // };
  //     window.scrollTo(0, 0);
  //   };

  //   fetch_Pizzas();
    
  // }, [categoryId, sortType, searchValue, pageCount]);

  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     sortProperty: sortType.name,
  //     categoryId,
  //     pageCount,
  //   })
  //   navigate(`?${queryString}`);
  // }, [categoryId, sortType, pageCount]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      // @ts-ignore
      // dispatch(setFilters({pageCount: params.pageCount, categoryId: params.categoryId, pageCount: params.pageCount}));
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
            {types.map((type) => 
              <BookBlock title={type.name} imgSrc={SERVER_URL + type.coverImage} />
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

export default Home;
