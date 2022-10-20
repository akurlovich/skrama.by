import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getAllProductsInfo } from '../../../store/reducers/ProductReducer/ProductActionCreators';
import { IProductInfoResponse } from '../../../types/IProductInfoResponse';
import { SelectOption } from '../../UI/SelectOption';
import { IInfoBlock } from '../AddProduct';
import { CommandBarButton, IIconProps, PrimaryButton, Stack, initializeIcons, CommandButton } from '@fluentui/react';

initializeIcons();

const cancelIcon: IIconProps = { iconName: 'Cancel' };

interface IProps {
  typeID: string,
  item: IInfoBlock,
  productsAllInfo: IProductInfoResponse[],
  removeInfo: (id: number) => void;
  changeInfoBlock: (id: number, key: string, value: string) => void;

}

const AddProductInfoInner: FC<IProps> = ({typeID, removeInfo, item, productsAllInfo,changeInfoBlock}) => {
  // const { productsAllInfo } = useAppSelector(state => state.productReducer);
  const [productInfoByTypeID, setProductInfoByTypeID] = useState<IProductInfoResponse[]>([]);
  // const dispatch = useAppDispatch();

  console.log(typeID)

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getAllProductsInfo());
  //   })()
  // }, []);

  useEffect(() => {
    setProductInfoByTypeID(productsAllInfo.filter(item => item.typeID === typeID))
    console.log(productInfoByTypeID)
    console.log(productsAllInfo)
  }, [typeID])

  return (
    <div className='inputs__addInfoBlock'>
      <div className="inputs__item">
        {/* <SelectOption label='Виды хараетеристик' value={item.title} optionArray={productInfoByTypeID} onChangeHandler={(event: React.ChangeEvent<HTMLSelectElement>) => changeInfoBlock(item.id, 'title', event.target.value)}/> */}
        <select
          // onChange={productInfoTitleHandler}
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
      </div>
      <CommandButton iconProps={cancelIcon} text="Удалить характеристику" onClick={() => removeInfo(item.id)}/>
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