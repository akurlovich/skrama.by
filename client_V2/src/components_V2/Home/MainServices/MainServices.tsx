import React, { FC } from 'react';
import { AiTwotoneBank, AiTwotoneExperiment, AiTwotoneEyeInvisible, AiTwotoneFire, AiTwotoneSafetyCertificate } from 'react-icons/ai';
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
          Воздействие солнечного света разрушает полимерные связи, вследствие чего поликабонат теряет свои первоначальные характеристики – пластичность, устойчивость к механическому воздействию, несущую способность, цвет.
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneExperiment size={80} />
        </div>
        <div className="main__services__item__title">
          Стойкость к химикатам
        </div>
        <div className="main__services__item__text">
          Если вы осуществляете выращивание культур в теплице из сотового поликарбоната, можете быть уверены, что листы поликарбоната не подвержены негативному воздействию щелочных растворов, органических кислот и хлора. 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneSafetyCertificate size={80} />
        </div>
        <div className="main__services__item__title">
          Высокая прочность
        </div>
        <div className="main__services__item__text">
         Поликарбонат отлично противостоит непогоде. Даже обильный дождь, снег, а также сильный ветер не смогут разрушить теплицу из поликарбоната. Даже попадание мяча не навредит этому материалу. 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneFire size={80} />
        </div>
        <div className="main__services__item__title">
          Не горит
        </div>
        <div className="main__services__item__text">
          Поликарбонат может только немного поплавиться из-за воздействия температуры. Таким образом, теплица позволит обеспечить безопасность для растений, растущих внутри. 
        </div>
      </div>
      <div className="main__services__item">
        <div className="main__services__item__img">
          <AiTwotoneBank size={80} />
        </div>
        <div className="main__services__item__title">
          Маленький вес
        </div>
        <div className="main__services__item__text">
          Благодаря тому, что листы весят совсем немного, их очень просто транспортировать. Кроме этого, материал очень легко устанавливать. С этим справится любой человек. 
        </div>
      </div>
      
    </div>
  )
}

export const MainServices = React.memo(MainServicesInner);