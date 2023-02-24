import React, { FC } from 'react';
import './usererrorwarning.scss';

interface IProps {
  message: string,
  canselHandler: () => void;
}

const UserErrorWarningInner: FC<IProps> = ({message, canselHandler}) => {
  
  return (
    <div className="userErrorWarning">
      <div className='userErrorWarning__wrapper'>
        <div className="userErrorWarning__text">
          {message}
        </div>
        <button
          onClick={canselHandler}
          className='userErrorWarning__button'>Back</button>
      </div>
    </div>
  )
};

export const UserErrorWarning = React.memo(UserErrorWarningInner);
