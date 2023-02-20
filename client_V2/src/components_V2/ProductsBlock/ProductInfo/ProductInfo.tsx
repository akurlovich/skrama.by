import React, { FC } from 'react';
import './productinfo.scss';

const ProductInfoInner: FC = () => {
  return (
    <div>ProductInfo</div>
  )
}

export const ProductInfo = React.memo(ProductInfoInner);