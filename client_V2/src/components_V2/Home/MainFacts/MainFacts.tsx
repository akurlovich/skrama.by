import React, { FC } from 'react';
import { AiFillStar, AiTwotoneCar } from 'react-icons/ai';
import './mainfacts.scss';

const MainFactsInner: FC = () => {
  return (
    <div className='main__facts'>
      <div className="main__facts__container">
        <div className="main__facts__item">
          <div className="main__facts__item__circle">    
            <AiFillStar size={28} color='#fff'/>
          </div>
          <div className="main__facts__item__info">
            <div className="main__facts__item__title">
              Мы на рынке
            </div>
            <div className="main__facts__item__text">
              5 лет
            </div>
          </div>
        </div>
        <div className="main__facts__item">
          <div className="main__facts__item__circle">    
            <AiFillStar size={28} color='#fff'/>
          </div>
          <div className="main__facts__item__info">
            <div className="main__facts__item__title">
              Счастливых клиентов
            </div>
            <div className="main__facts__item__text">
              &gt;500
            </div>
          </div>
        </div>
        <div className="main__facts__item">
          <div className="main__facts__item__circle">    
            <AiTwotoneCar size={28} color='#fff'/>
          </div>
          <div className="main__facts__item__info">
            <div className="main__facts__item__title">
              Доставка по
            </div>
            <div className="main__facts__item__text">
              ргионам
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MainFacts = React.memo(MainFactsInner);