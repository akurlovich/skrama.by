import React, { FC } from 'react';
import { AiOutlineCopyrightCircle, AiOutlineMail } from "react-icons/ai";
import './footer.scss';

const FooterInner: FC = () => {
  return (
    <footer className="footer__wrapper">
      <div className='footer'>
        Footer info
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
