import React, { FC } from 'react';
import { AiOutlineArrowRight, AiOutlineCopyrightCircle, AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './footer.scss';

const FooterInner: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Link to='/' className="footer__links">
          <AiOutlineArrowRight size={30} />
          <div className="footer__links__text">
            О нас
          </div>
        </Link>
        <Link to='/products' className="footer__links">
          <AiOutlineArrowRight size={30}/>
          <div className="footer__links__text">
            Продукция
          </div>
        </Link>
        <Link to='/about' className="footer__links">
          <AiOutlineArrowRight size={30}/>
          <div className="footer__links__text">
            Контакты
          </div>
        </Link>
      </div>
      <div className="footer__copywrite">
        <div className="footer__item">
          <AiOutlineCopyrightCircle size={30}/>
          <div className="footer__text">
            Copyright: Artsiom Kurlovich
          </div>
        </div>
        <div className="footer__item">
          <AiOutlineMail size={30}/>
          <div>
            <a className="footer__text" href="mailto: info@skrama.by">info@skrama.by</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer = React.memo(FooterInner);
