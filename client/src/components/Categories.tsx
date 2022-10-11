import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { useAppDispatch } from "../hooks/redux";
// import { useAppDispatch, useAppSelector } from "../redux/hooks/redux";
import { setCategoryId } from "../store/reducers/FilterReducer/FilterSlice";
// import { useAppDispatch } from "../redux/hooks/redux";
// import { setCategoryId } from "../redux/slices/filterSlice";

interface IProps {
  categoryId?: number;
  onClickCategory?: (index: number) => void;
}

const CategoriesItem: FC<IProps> =({}) => {
  const dispatch = useAppDispatch();

  const { categoryId } = useAppSelector(state => state.filterReducer);

  const categories: string[] = [
    'Поликарбонат',
    'Штакетник',
    'Профнастил',
    'Прозрачные шифер',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => 
          <li
            onClick={() => dispatch(setCategoryId(index))}
            key={item + index}
            className={categoryId === index ? 'active' : ''}>{item}
          </li>  
        )}
      </ul>
    </div>
  );
};

export const Categories = React.memo(CategoriesItem);