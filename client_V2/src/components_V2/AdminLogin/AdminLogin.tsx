import React, { FC, useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser } from '../../store/reducers/AuthReducer/AuthActionCreatores';
import { UserErrorWarning } from '../UI/UserErrorWarning/UserErrorWarning';
import './adminlogin.scss';
// @ts-ignore
import BookOne from '../../assets/book-1.png';
// @ts-ignore
import BookTwo from '../../assets/book-2.png';
// @ts-ignore
import BookThree from '../../assets/book-3.png';
import { setAuthAdmin } from '../../store/reducers/AuthReducer/AuthSlice';
import { FormInput } from '../UI/FormInput/FormInput';

interface ILocationState {
  from: string
};

const AdminLoginInner: FC = () => {
  const {isAuth, isAdminAuth, error} = useAppSelector(state => state.authReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  // const state = location.state as stateType;
  // const {from} = state;
  const navigate = useNavigate();
  const prevPage = location.state as ILocationState || '/';

  const handlerChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await dispatch(loginUser({email, password}));
    if (email === 'skrama@tut.by') {
      localStorage.setItem('token', email);
      dispatch(setAuthAdmin());
      navigate('/admin');
    };
    setEmail('');
    setPassword('');
    setButtonSubmit(prev => false);
    // navigate(prevPage ? prevPage.from : '/');
  };

  const validFormData = () => {
    if (email.length && password.length) {
      setButtonSubmit(prev => true)
    }
  }
  useEffect(() => {
    validFormData();
    if (isAuth) {
      if (prevPage.from) {
        navigate(prevPage.from)
      } else {
        navigate('/')
      }
    }
  }, [password, email, isAuth]);

  useEffect(() => {
    if (error) {
      setLoginError(true);
    }
  
  }, [error]);

  const canselHandler = () => {
    setLoginError(false);
  };
  
  return (
    <div className='registration'>
      {loginError && <UserErrorWarning canselHandler={canselHandler} message='User not fouund!!!'/>}
      <div className="registration__block">
        <div className="registration__container">
          <div onClick={() => navigate('/')} className="registration__close">
            <AiOutlineCloseCircle size={40}/>
          </div>
          <div className="registration__title">
            Log in
          </div>
          <form
            onSubmit={handlerChange}
            className="registration__form"
            >
            <FormInput
              label='Email address'
              name='email'
              type='text'
              value={email}
              setData={setEmail}
              required={false}
              
            />
            <FormInput
              label='Password'
              name='password'
              type='password'
              value={password}
              setData={setPassword}
              required={false}
            />
            <div className="registration__form__button">
              <input
                className={buttonSubmit ? "registration__form__button_send active" : "registration__form__button_send"}
                type="submit"
                value="Log in"
              />
            </div>
          </form>
          <div className="registration__login-link">
            <div className="registration__login-link__text">
              Нou don't have an account?
            </div>
            <div className="registration__login-link__link">
              <Link to='/registration'>Sing in</Link> 
            </div>
          </div>
        </div>
        <img className='registration__book one' src={BookOne} alt="book" />
        <img className='registration__book two' src={BookTwo} alt="book" />
        <img className='registration__book three' src={BookThree} alt="book" />
      </div>
    </div>
  );
};

export const AdminLogin = React.memo(AdminLoginInner);
