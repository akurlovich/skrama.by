import React, { FC } from 'react';
import './searchbar.scss';

const SearchBarInner:FC = () => {
  const handlerSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
 
  return (
    <form
      className='search__form'
      onSubmit={handlerSearch}
      >
      <div className="search__bar">
        <input
          className="input__search"
          type="text"
          placeholder="Enter book for search..." 
        />
        <img className="input__icon" src='./assets/search-icon.svg' alt="search icon" />
      </div>
      <input 
        className='search__button'
        type="submit"
        value="Search" 
      />
    </form>
  )
}

export const SearchBar = React.memo(SearchBarInner);
