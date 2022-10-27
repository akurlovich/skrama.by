import qs from "qs";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPageCount } from "../../store/reducers/FilterReducer/FilterSlice";
import './home.scss';
import { getTypes } from "../../store/reducers/TypeReducer/TypeActionCreators";
import { SERVER_URL } from "../../constants/http";
import { ProductBlock } from "../ProductBlock/ProductBlock";
import { SuccessModal } from "../UI/SuccessModal/SuccessModal";

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
 
  const dispatch = useAppDispatch();

  const setCurrentPage = (page: number) => {
    dispatch(setPageCount(page));
    dispatch(getTypes());
  };


  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      // @ts-ignore
      // dispatch(setFilters({pageCount: params.pageCount, categoryId: params.categoryId, pageCount: params.pageCount}));
    }
  
  }, [])

  useEffect(() => {
    (async () => {
      await dispatch(getTypes());
    })()
  }, []);
  

  return (
    <div className="container">
      <div className="content__top">
        
      </div>
      
          <div className="content__items">
            {/* {status === 'loading' ? skeletons : pizzas} */}
            {types.map((type) => 
              <ProductBlock key={type._id} title={type.name} imgSrc={SERVER_URL + type.coverImage} typeID={type._id}/>
            )}
            
          </div>
        {/* ) */}
      {/* } */}
      {/* <Pagination currentPage={pageCount} onChangePage={setCurrentPage}/> */}
    </div>
  );
};

export default Home;
