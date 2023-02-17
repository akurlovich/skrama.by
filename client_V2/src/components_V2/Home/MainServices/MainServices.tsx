import React, { FC } from 'react';
import { AiTwotoneEyeInvisible } from 'react-icons/ai';
import './mainservices.scss';

const MainServicesInner:FC = () => {
  return (
    <div className='main__services'>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneEyeInvisible size={80} />
        </div>
        <div className="main__services__item__title">
          UV-защита
        </div>
        <div className="main__services__item__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis molestiae totam distinctio corrupti ducimus quidem aspernatur exercitationem consequuntur nisi? 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneEyeInvisible size={80} />
        </div>
        <div className="main__services__item__title">
          UV-защита
        </div>
        <div className="main__services__item__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis molestiae totam distinctio corrupti ducimus quidem aspernatur exercitationem consequuntur nisi? 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneEyeInvisible size={80} />
        </div>
        <div className="main__services__item__title">
          UV-защита
        </div>
        <div className="main__services__item__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis molestiae totam distinctio corrupti ducimus quidem aspernatur exercitationem consequuntur nisi? 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneEyeInvisible size={80} />
        </div>
        <div className="main__services__item__title">
          UV-защита
        </div>
        <div className="main__services__item__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis molestiae totam distinctio corrupti ducimus quidem aspernatur exercitationem consequuntur nisi? 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneEyeInvisible size={80} />
        </div>
        <div className="main__services__item__title">
          UV-защита
        </div>
        <div className="main__services__item__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nobis molestiae totam distinctio corrupti ducimus quidem aspernatur exercitationem consequuntur nisi? 
        </div>
      </div>
    </div>
  )
}

export const MainServices = React.memo(MainServicesInner);