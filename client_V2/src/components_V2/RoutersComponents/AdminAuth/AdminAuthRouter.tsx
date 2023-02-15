import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { ADMIN_ROLE } from '../../../constants/user';
import { useAppSelector } from '../../../hooks/redux';

interface IProps {
  children: JSX.Element;
}

const AdminAuthRouterInner: FC<IProps> = ({children}) => {
  const location = useLocation();
  // const {role} = useAppSelector(state => state.authReducer);
  const role = 'admin';

  if (role !== ADMIN_ROLE) {
    return <Navigate to='/pageNotFound' state={location.pathname}/>
  }

  return children;
};

export const AdminAuthRouter = React.memo(AdminAuthRouterInner);