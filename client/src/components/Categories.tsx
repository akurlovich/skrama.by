import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { useAppDispatch } from "../hooks/redux";
// import { useAppDispatch, useAppSelector } from "../redux/hooks/redux";
import { setCategoryId } from "../store/reducers/FilterReducer/FilterSlice";
import { getTypes } from "../store/reducers/TypeReducer/TypeActionCreators";
// import { useAppDispatch } from "../redux/hooks/redux";
// import { setCategoryId } from "../redux/slices/filterSlice";

interface IProps {
  categoryId?: number;
  onClickCategory?: (index: number) => void;
}

const CategoriesItem: FC<IProps> =({}) => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector(state => state.typeReducer);
  const { categoryId } = useAppSelector(state => state.filterReducer);


  // const categories: string[] = [
  //   'Поликарбонат',
  //   'Штакетник',
  //   'Профнастил',
  //   'Прозрачные шифер',
  // ];

  useEffect(() => {
    dispatch(getTypes());
  }, [])

  return (
    <div className="categories">
      <ul>
        {types.map((type) => 
          <li
            onClick={() => dispatch(setCategoryId(type._id.toString()))}
            key={type._id}
            className={categoryId === type._id.toString() ? 'active' : ''}>{type.name}
          </li>  
        )}
      </ul>
    </div>
  );
};

export const Categories = React.memo(CategoriesItem);