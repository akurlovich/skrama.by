import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagenotfound.scss';

const PageNotFoundInner: FC = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate('/');
  };
  return (
    <div className='pagenotfound'>
      <div className="pagenotfound__text">
        Sorry, page not found!
      </div>
      <button onClick={buttonHandler} className="pagenotfound__button">Go home</button>
    </div>
  );
};

export const PageNotFound = React.memo(PageNotFoundInner);
