import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/polikarbonat' className="btn btn-primary btn-lg">Купить</Link>
        <Link to='/about' className="btn btn-secondary btn-lg">Контакты</Link>
      </div>
      <img src={mainAvatar} className="main__title__image" alt="avatar" />
    </div>
  )
}

export const MainImage = React.memo(MainImageInner);