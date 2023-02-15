import React from 'react'
import './loader.scss';

function LoaderInner() {
  return (
    <div className='loader__wrapper'>
      <div className='loader'></div>
    </div>
  )
};

export const Loader = React.memo(LoaderInner)
