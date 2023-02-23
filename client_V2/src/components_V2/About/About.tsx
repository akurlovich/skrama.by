import React, { FC } from 'react';
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import './about.scss';

const AboutInner: FC = () => {
  return (
    <div className='about'>
      <div className="about__title">
        Контакты
      </div>
      <div className="about__info">
        <form className="about__form">
          <input className="about__form__input" type="text" placeholder='Имя'/>
          <input className="about__form__input" type="text" placeholder='Телефон'/>
          <input className="about__form__input" type="text" placeholder='Почта'/>
          <textarea className="about__form__input" placeholder='Сообщение'></textarea>
          <input className="btn btn-secondary about__form__input_btn" type="submit" value="Отправить сообщение"/>
        </form>
        <div className="about__adress">
          <div className="about__adress__item">
            <div className="about__adress__item__title">
              ООО СКРАМ Материалы
            </div>
          </div>
          <div className="about__adress__item">
            <div className="about__adress__item__icon">
              <AiOutlineEnvironment size={36}/>
            </div>
            <div className="about__adress__item__info">
              <div className="about__adress__item__info__title">
                Наш офис
              </div>
              <div className="about__adress__item__info__text">
                г.Минск, ул.П.Глебки, д.11
              </div>
            </div>
          </div>
          <div className="about__adress__item">
            <div className="about__adress__item__icon">
              <AiOutlineMail size={36}/>
            </div>
            <div className="about__adress__item__info">
              <div className="about__adress__item__info__title">
                Почта
              </div>
              <div className="about__adress__item__info__text">
                <a href="mailto: info@skrama.by">info@skrama.by</a>
              </div>
            </div>
          </div>
          <div className="about__adress__item">
            <div className="about__adress__item__icon">
              <AiOutlinePhone size={36}/>
            </div>
            <div className="about__adress__item__info">
              <div className="about__adress__item__info__title">
                Телефон
              </div>
              <div className="about__adress__item__info__text">
                +375(29) 984-67-46
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__map">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.8818026866124!2d27.469040316037233!3d53.91607623958372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc524915a4c9b%3A0xeb6537c79aefc108!2z0YPQuy4g0J_QtdGC0YDQsCDQk9C70LXQsdC60LggMTEsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1677065410564!5m2!1sru!2sby" width="800" height="600"  loading="lazy" ></iframe> */}
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae350415278886f22080ca7a2bcc1361c53832a6ac62361995882bfe82690d0fe&amp;source=constructor" width="1320" height="600" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export const About = React.memo(AboutInner);