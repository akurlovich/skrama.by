import React, { FC } from 'react';
import { AiFillGithub, AiOutlineCopyrightCircle, AiOutlineMail } from "react-icons/ai";
// import './footer.scss';

const FooterInner: FC = () => {
  return (
    <div className='footer'>
      <div className="footer__item">
        <AiOutlineCopyrightCircle size={40}/>
        <div className="footer__text">
          Copyright: Artsiom Kurlovich
        </div>
      </div>
      {/* <div className="footer__item">
        <AiFillGithub size={40}/>
        <div>
          <a className="footer__text" href="https://github.com/akurlovich">akurlovich</a>
        </div>
      </div> */}
      <div className="footer__item">
        <AiOutlineMail size={40}/>
        <div>
          <a className="footer__text" href="mailto: info@skrama.by">info@skrama.by</a>
        </div>
      </div>
    </div>
  );
};

export const Footer = React.memo(FooterInner);
