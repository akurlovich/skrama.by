import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux';
import { SelectOption } from '../../UI/SelectOption'
import { TextField } from '@fluentui/react/lib/TextField';
import { CommandBarButton, IIconProps, initializeIcons } from '@fluentui/react';
import { addProductInfoType } from '../../../store/reducers/ProductReducer/ProductActionCreators';
import { ITypeResponse } from '../../../types/ITypeResponse';

interface IProps {
  types: ITypeResponse[],
}

initializeIcons();

const addIcon: IIconProps = { iconName: 'Add' };

const AddProductInfoTypeInner: FC<IProps> = ({types}) => {
  const dispatch = useAppDispatch();
  const [typeID, setTypeID] = useState('');
  const [title, setTitle] = useState('')

  const typeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeID(event.target.value);
  }
  const titleHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setTitle(newValue || '');
  }
  const infoTypeHandler = () => {
    dispatch(addProductInfoType({typeID, title, description: ''}))
  }
  
  return (
    <>
      <SelectOption label='Тип' value={typeID} onChangeHandler={typeHandler} optionArray={types}/>
      <TextField 
        value={title}
        onChange={titleHandler}
        label="Характеристика:" 
        underlined 
        required 
        placeholder="Введите название" />
      <CommandBarButton
        iconProps={addIcon}
        text="Добавить тип"
        onClick={infoTypeHandler}
      />
  </>
  )
}

export const AddProductInfoType = React.memo(AddProductInfoTypeInner)