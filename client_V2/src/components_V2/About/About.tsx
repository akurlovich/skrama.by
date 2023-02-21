import React, { FC } from 'react';
import './about.scss';

const AboutInner: FC = () => {
  return (
    <div className='about'>
      About Us
    </div>
  )
}

export const About = React.memo(AboutInner);