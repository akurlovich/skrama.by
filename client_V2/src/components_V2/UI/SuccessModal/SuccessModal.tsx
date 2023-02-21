import React, { FC } from 'react';
import './successmodal.scss';
// @ts-ignore
import successIcon from '../../../assets/img/success_icon.png';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface IProps {
  title: string;
  closeModal: () => void;
}

const SuccessModalInner: FC<IProps> = ({title, closeModal}) => {
  return (
    <div className='successmodal__wrapper'>
      <div className="successmodal__container">
        <div className="successmodal__title">
          {title}
        </div>
        <div className="successmodal__icon">
          <AiOutlineShoppingCart size={120} color='#FF9933'/>
          {/* <img src={successIcon} alt="success icon" /> */}
        </div>
        <div className="successmodal__buttons">
          {/* <PrimaryButton 
            // onClick={confimHandler}
            text="Продолжить"
          /> */}
          <button
            onClick={closeModal}
            className="successmodal__btn"
            >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  )
}

export const SuccessModal = React.memo(SuccessModalInner);