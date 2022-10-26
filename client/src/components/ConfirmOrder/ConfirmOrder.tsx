import React, { FC } from 'react';
import './confirmorder.scss';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  setModal: (bol: boolean) => void;
  onClickClear: () => void;
}

const ConfirmOrderInner: FC<IProps> = ({setModal, onClickClear}) => {
  const navigate = useNavigate();
  const confimHandler = () => {
    alert('Заказ оформлен!');
    setModal(false);
    navigate('/');
    onClickClear();
  }

  return (
    <div className='confirmorder__wrapper'>
      <div className="confirmorder__container">
        <div className="confirmorder__title">
          Подтверждение заказа
        </div>
        <div className="confirmorder__inputs">
          <TextField 
            // value={title}
            // onChange={titleHandler}
            label="Имя:" 
            required
            underlined  
            // placeholder="Введите Ваше имя" 
          />
          <TextField 
            // value={title}
            // onChange={titleHandler}
            label="Фамилия:" 
            // required
            underlined  
            // placeholder="Введите Вашу фамилию" 
          />
          <TextField 
            // value={title}
            // onChange={titleHandler}
            label="Телефон:" 
            required
            underlined  
            // placeholder="Введите Ваш телефон" 
          />
          <TextField 
            // value={title}
            // onChange={titleHandler}
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
            onClick={confimHandler}
            text="Подтвердить"
          />
        </div>
      </div>
    </div>
  )
}

export const ConfirmOrder = React.memo(ConfirmOrderInner)