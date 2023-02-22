import React, { FC } from 'react';
import './about.scss';

const AboutInner: FC = () => {
  return (
    <div className='about'>
      <div className="about__wrapper">
        <div className="about__title">
          О нас
        </div>
        <div className="about__adress">
          <div className="about__adress__data">
            г.Минск, ул.П.Глебки, д.11
          </div>
          <div className="about__adress__data">
            +375 29 984-67-46
          </div>
        </div>
        <div className="about__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.8818026866124!2d27.469040316037233!3d53.91607623958372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc524915a4c9b%3A0xeb6537c79aefc108!2z0YPQuy4g0J_QtdGC0YDQsCDQk9C70LXQsdC60LggMTEsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1677065410564!5m2!1sru!2sby" width="800" height="600"  loading="lazy" ></iframe>
        </div>
      </div>
    </div>
  )
}

export const About = React.memo(AboutInner);