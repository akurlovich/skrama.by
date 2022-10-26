import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getAllProductsInfo } from '../../../store/reducers/ProductReducer/ProductActionCreators';
import { IProductInfoResponse } from '../../../types/IProductInfoResponse';
import { SelectOption } from '../../UI/SelectOption';
import { IInfoBlock } from '../AddProduct';
import { CommandBarButton, IIconProps, PrimaryButton, Stack, initializeIcons, CommandButton, TextField } from '@fluentui/react';

initializeIcons();

const cancelIcon: IIconProps = { iconName: 'Cancel' };

interface IProps {
  typeID: string,
  items: IInfoBlock[],
  productsAllInfo: IProductInfoResponse[],
  removeInfo: (id: number) => void;
  changeInfoBlock: (id: number, key: string, value: string) => void;

}

const AddProductInfoInner: FC<IProps> = ({typeID, removeInfo, items, productsAllInfo,changeInfoBlock}) => {
  const [productInfoByTypeID, setProductInfoByTypeID] = useState<IProductInfoResponse[]>([]);

  const titleHandler = (event: string, title: string, id: number) => {
    // setTitle(newValue || '');
    // console.log(newValue)
    changeInfoBlock(id, 'description', event);
    // console.log(item.id)
    
  }

  useEffect(() => {
    setProductInfoByTypeID(productsAllInfo.filter(item => item.typeID === typeID))
  }, [typeID])

  return (
    <div className='inputs__addInfoBlock'>
      {/* <div className="inputs__item">
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => changeInfoBlock(item.id, 'title', event.target.value)}
          // value={productInfoTitle}
          value={item.title}
          className='inputs__item__name'
          name="inputs__item__name">
          <option value=""></option>
          {productInfoByTypeID.map((type) => 
            <option key={type._id} value={type.title}>{type.title}</option>
          )}
        </select>
        <label className='inputs__item__label' htmlFor="inputs__item__name">Виды характеристик:</label>
      </div>
      <div className="inputs__item">
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeInfoBlock(item.id, 'description', event.target.value)}
          value={item.description}
          className='inputs__item__name' type="text" name="inputs__item__name"/>
        <label className='inputs__item__label' htmlFor="inputs__item__name">Описание:</label>
      </div> */}
      {items.map((type) => 
        <TextField 
          key={type.id}
          // value={type.title}
          onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => (titleHandler(event.currentTarget.value, type.title, type.id))}
          label={type.title}
          underlined  
          placeholder="Введите параметры" 
        />
        )
      }
      {/* <CommandButton iconProps={cancelIcon} text="Удалить характеристику" onClick={() => removeInfo(item.id)}/> */}
      {/* <button
        className='inputs__addButton'
        onClick={() => removeInfo(item.id)}
        >
          Удалить характеристику
      </button> */}
    </div>
  )
}

export const AddProductInfo = React.memo(AddProductInfoInner)