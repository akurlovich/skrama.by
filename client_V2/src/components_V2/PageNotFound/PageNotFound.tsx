import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagenotfound.scss';

const PageNotFoundInner: FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className='pagenotfound'>
      <div className="pagenotfound__text">
        Sorry, page not found!
      </div>
      <button onClick={() => navigate('/')} className="btn btn-lg btn-primary">Go home</button>
    </div>
  );
};

export const PageNotFound = React.memo(PageNotFoundInner);
