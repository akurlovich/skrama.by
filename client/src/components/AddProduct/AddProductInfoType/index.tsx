import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getBrands } from '../../../store/reducers/BrandReducer/BrandActionCreators';
import { getTypes } from '../../../store/reducers/TypeReducer/TypeActionCreators';
import { SelectOption } from '../../UI/SelectOption'
import { TextField } from '@fluentui/react/lib/TextField';
import { CommandBarButton, IIconProps, initializeIcons, PrimaryButton } from '@fluentui/react';
import { addProductInfoType } from '../../../store/reducers/ProductReducer/ProductActionCreators';

initializeIcons();
const addIcon: IIconProps = { iconName: 'Add' };

const AddProductInfoTypeInner: FC = () => {
  const { types } = useAppSelector(state => state.typeReducer);
  const { brands } = useAppSelector(state => state.brandReducer);
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

  useEffect(() => {
    (async () => {
      await dispatch(getTypes());
      await dispatch(getBrands());
//!   
      // await dispatch(getAllProductsInfo());
    })()
  }, []);
  
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