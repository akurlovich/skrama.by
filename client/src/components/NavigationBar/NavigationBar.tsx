import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './navigationbar.scss';

const NavigationBarInner: FC = () => {
  const { totalNavBarLinks } = useAppSelector(state => state.navigationBarReducer);
  return (
    <div className='navigationbar__wrapper'>
      <div className="navigationbar__container">
        {totalNavBarLinks.map(link => (
          <Fragment key={link}>
            <Link key={link} className="navigationbar__link">{link}</Link>
            <div className="navigationbar__link">/</div>
          </Fragment>
        ))}
      </div>
    </div>
  )
};

export const NavigationBar = React.memo(NavigationBarInner);