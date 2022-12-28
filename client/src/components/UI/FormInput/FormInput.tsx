import React, { FC, useState, FocusEvent } from 'react';
import './forminput.scss';

interface IFormInput {
  errorShow?: boolean,
  label?: string,
  name?: string,
  type?: string,
  value?: string,
  errorMessage?: string,
  required?: boolean,
  pattern?: string,
  setData: (event: string) => void,
}

const FormInputInner: FC<IFormInput> = ({
  label = '',
  name = '',
  type = 'text',
  value,
  errorMessage = '',
  required = false,
  pattern,
  errorShow = true,
  setData
}) => {
  const [focused, setFocused] = useState(false);
  const handlerBlur = () => {
    setFocused(true);
  };
  const handlerFocus = (event: FocusEvent<HTMLInputElement>) => {
    name === 'confirm' && setFocused(true)
  };
  const style = {
    display: errorShow ? 'block' : 'none'
  }
  return (
    <div className="form-input">
      <input
        onChange={e => setData(e.target.value)}
        className='form-input__text'
        value={value}
        placeholder=' '
        name={name}
        type={type}
        pattern={pattern}
        required={required}
        onBlur={handlerBlur}
        onFocus={handlerFocus}
        datatype={focused.toString()}
      />
      <label className='form-input__label' htmlFor="">{label}</label>
      <div className='form-input__error' style={style}>{errorMessage}</div>
    </div>
  );
};

export const FormInput = React.memo(FormInputInner);