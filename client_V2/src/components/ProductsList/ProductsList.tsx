import qs from "qs";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Categories } from "../Categories";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ProductCard } from "../ProductCard_/ProductCard";
import { getProducts } from "../../store/reducers/ProductReducer/ProductActionCreators";

interface IProps {
  searchValue?: string;
};

// interface IParams {
//   pageCount: number,
//   categoryId: number,
//   sortProperty: string,
// };

const ProductsListInner: FC<IProps> = ({searchValue}) => {
  const { products } = useAppSelector(state => state.productReducer)
  const { categoryId } = useAppSelector(state => state.filterReducer);
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
        <Categories/>
      </div>
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
