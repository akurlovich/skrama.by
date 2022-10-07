import React, { FC, useCallback, useRef } from 'react';
// @ts-ignore
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux';
// import { setSearchValue } from '../../redux/slices/filterSlice';

export const Search: FC = () => {
  // const { searchValue } = useAppSelector(state => state.filterReducer);
  // const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<string>('');
  // const inputRef = React.useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    // dispatch(setSearchValue(''));
    // dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
    // inputRef.current?.focus();
  };

  // const updateSearchValue = React.useCallback(
  //   debounce((str: string) => {
  //     dispatch(setSearchValue(str));
  //   }, 150),
  //   [],
  // );
  const updateWithDebounce = useCallback(
    debounce((str) => {
      // dispatch(setSearchValue(str));
      // console.log(str);
    }, 250),
    [],
  );
  

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // setSearchValue(event.target.value);
    updateWithDebounce(event.target.value)
    // updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {/* {searchValue && ( */}
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      {/* )} */}
    </div>
  );
};
