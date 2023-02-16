import React, { FC } from 'react';
//@ts-ignore
import mainAvatar from '../../../assets/img/main_avatar.png';
import './mainimage.scss';

const MainImageInner: FC = () => {
  return (
    <div className="main__title">
      <div className="main__title__text">
        Поликарбонат для Вашего дома: высокое качество и низкие цены!
      </div>
      <div className="main__title__buttons">
        <button className="btn btn-primary btn-lg">Купить</button>
        <button className="btn btn-secondary btn-lg">Контакты</button>
      </div>
      <img src={mainAvatar} className="main__title__image" alt="avatar" />
    </div>
  )
}

export const MainImage = React.memo(MainImageInner);