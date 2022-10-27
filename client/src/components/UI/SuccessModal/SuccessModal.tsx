import React, { FC } from 'react';
import './successmodal.scss';
// @ts-ignore
import successIcon from '../../../assets/img/success_icon.png'
import { PrimaryButton } from '@fluentui/react/lib/Button';

interface IProps {
  title: string;
}

const SuccessModalInner: FC<IProps> = ({title}) => {
  return (
    <div className='successmodal__wrapper'>
      <div className="successmodal__container">
        <div className="successmodal__title">
          {title}
        </div>
        <div className="successmodal__icon">
          <img src={successIcon} alt="success icon" />
        </div>
        <div className="successmodal__buttons">
          {/* <PrimaryButton 
            // onClick={confimHandler}
            text="Продолжить"
          /> */}
          <button className="successmodal__btn">Продолжить</button>
        </div>
      </div>
    </div>
  )
}

export const SuccessModal = React.memo(SuccessModalInner);