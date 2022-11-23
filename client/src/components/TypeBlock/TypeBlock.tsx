import React, { FC } from 'react';
import './typeblock.scss';
// @ts-ignore
import avatar from '../../assets/img/stroy.jpg';

const TypeBlockInner: FC = () => {
  return (
    <div className='card'>
      <div className="lines"></div>
      <div className="imgBx">
        <img src={avatar}/>
      </div>
      <div className="card__content">
        <div className="details">
          <h2>Поликабронат<br></br><span>Сотовый</span></h2>
          <div className="data">
            <h3>342<br></br><span>Posts</span></h3>
            <h3>120k<br></br><span>Folowers</span></h3>
            <h3>285<br></br><span>Folowing</span></h3>
          </div>
          <div className="actionBtn">
            <button>Перейти</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TypeBlock = React.memo(TypeBlockInner)