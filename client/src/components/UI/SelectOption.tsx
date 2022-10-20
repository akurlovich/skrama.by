import React, { FC } from 'react';
import { IBrandResponse } from '../../types/IBrandResponse';
import { IProductInfoResponse } from '../../types/IProductInfoResponse';
import { ITypeResponse } from '../../types/ITypeResponse';

interface IProps {
  label: string,
  onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  value: string,
  optionArray: ITypeResponse[] | IBrandResponse[],
}

const SelectOptionInner: FC<IProps> = ({label, onChangeHandler, value, optionArray}) => {
  return (
    <div className="inputs__item">
      <select
        onChange={onChangeHandler}
        value={value}
        className='inputs__item__name'
        name="inputs__item__name">
        <option value=""></option>
        {optionArray.map((type) => 
          <option key={type._id} value={type._id}>{type.name}</option>
          )}
      </select>
      <label className='inputs__item__label' htmlFor="inputs__item__name">{label}:</label>
    </div>
  )
}

export const SelectOption = React.memo(SelectOptionInner);