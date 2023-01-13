import React, { FC, useState } from 'react';
import './confirmorder.scss';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import EmailService from '../../services/EmailService';
import { ICartItem } from '../../types/ICartItem';

interface IProps {
  setModal: (bol: boolean) => void;
  onClickClear: () => void;
  items: ICartItem[];
}

const ConfirmOrderInner: FC<IProps> = ({setModal, onClickClear, items}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const confirmHandler = async () => {
    alert('Заказ оформлен!');
    // console.log(items)
    await EmailService.sendEmail({
      name,
      phone,
      email,
      address, 
      items
    });
    setModal(false);
    navigate('/');
    onClickClear();
  }

  const nameHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setName(newValue || '');
  };

  const phoneHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setPhone(newValue || '');
  };

  const emailHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setEmail(newValue || '');
  };

  const addressHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setAddress(newValue || '');
  };

  return (
    <div className='confirmorder__wrapper'>
      <div className="confirmorder__container">
        <div className="confirmorder__title">
          Подтверждение заказа
        </div>
        <div className="confirmorder__inputs">
          <TextField 
            value={name}
            onChange={nameHandler}
            label="Имя:" 
            required
            underlined  
            // placeholder="Введите Ваше имя" 
          />
          <TextField 
            value={email}
            onChange={emailHandler}
            label="E-mail:" 
            // required
            underlined  
            // placeholder="Введите Вашу фамилию" 
          />
          <TextField 
            value={phone}
            onChange={phoneHandler}
            label="Телефон:" 
            required
            underlined  
            // placeholder="Введите Ваш телефон" 
          />
          <TextField 
            value={address}
            onChange={addressHandler}
            label="Адрес доставки:" 
            // required
            underlined  
            // placeholder="Введите Ваш адрес доставки" 
          />

        </div>
        <div className="confirmorder__buttons">
          <DefaultButton 
            onClick={() => setModal(false)}
            text="Отмена"
          />
          <PrimaryButton 
            onClick={confirmHandler}
            text="Подтвердить"
          />
        </div>
      </div>
    </div>
  )
}

export const ConfirmOrder = React.memo(ConfirmOrderInner)