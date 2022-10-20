import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import base64 from '../../services/ClientServices/Base64';
import './addproduct.scss';
import { UserErrorWarning } from '../UI/UserErrorWarning/UserErrorWarning';
import { addProduct, getAllProductsInfo } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { getTypes } from '../../store/reducers/TypeReducer/TypeActionCreators';
import { getBrands } from '../../store/reducers/BrandReducer/BrandActionCreators';
import { IProductInfoNew } from '../../types/IProductInfoNew';
import { CommandBarButton, IIconProps, PrimaryButton, Stack, initializeIcons } from '@fluentui/react';
import { IProductInfoResponse } from '../../types/IProductInfoResponse';
import { AddProductInfo } from './AddProductInfo';
import { SelectOption } from '../UI/SelectOption';
import { AddProductInfoType } from './AddProductInfoType';

initializeIcons();

export interface IInfoBlock {
  title: string,
  description: string,
  id: number,
}

const addIcon: IIconProps = { iconName: 'Add' };


const AddProductInner: FC = () => {
  //!
  const { productsAllInfo } = useAppSelector(state => state.productReducer);
  const { types } = useAppSelector(state => state.typeReducer);
  const { brands } = useAppSelector(state => state.brandReducer);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);
  const [coverImage, setcoverImage] = useState<File | null>(null);
  const [typeID, setTypeID] = useState('');
  const [brandID, setBrandID] = useState('');
  const [showImg, setShowImg] = useState('');
  //!-----------------------
  // const [productInfoByTypeID, setProductInfoByTypeID] = useState<IProductInfoResponse[]>([]);
  // const [productInfoTitle, setProductInfoTitle] = useState('');
  const [infoBlock, setInfoBlock] = useState<IInfoBlock[]>([]);
  const [addProductError, setAddProductError] = useState(false);
  const dispatch = useAppDispatch();

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const priceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+event.target.value);
  }
  const ratingHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(+event.target.value);
  }
  const countHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  }
  const typeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeID(event.target.value);
  }
  const brandHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandID(event.target.value);
  }

  // const productInfoTitleHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setProductInfoTitle(event.target.value);
  // }

  const addInfo = () => {
    setInfoBlock([...infoBlock, {title: '', description: '', id: Date.now()}]);
  }

  const removeInfo = (id: number) => {
    setInfoBlock(infoBlock.filter(info => info.id !== id));
  }

  const changeInfoBlock = (id: number, key: string, value: string) => {
    setInfoBlock(infoBlock.map(i => i.id === id ? {...i, [key]: value} : i));
  }
 
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.currentTarget.files as FileList)[0];
    setcoverImage(file);
    const urlImage = await base64(file);
    setShowImg(urlImage as string);
  };

  const canselHandler = () => {
    setAddProductError(false);
  };
  
  const handlerAddProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('rating', `${rating}`);
    formData.append('count', `${count}`);
    formData.append('typeID', typeID);
    formData.append('brandID', brandID);
    formData.append('coverImage', coverImage as File);
    // const productInfo: IProductInfoNew = { typeID: typeID, title: infoTitle, description: infoDescription};
    const productInfo: IProductInfoNew[] = [] as IProductInfoNew[];
    for (let i = 0; i < infoBlock.length; i++) {
      productInfo.push({typeID, title: infoBlock[i].title, description: infoBlock[i].description});
    }
    await dispatch(addProduct({product: formData, productInfo: productInfo}))
    
    // await dispatch(addProduct({name, price, rating, count, coverImage, typeID, brandID}));
    setName('');
    setPrice(0);
    setRating(0);
    setCount(1);
    setTypeID('');
    setBrandID('');
    setcoverImage(null);
    setShowImg('');
    setInfoBlock([]);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getTypes());
      await dispatch(getBrands());
      await dispatch(getAllProductsInfo());
    })()
  }, []);

  //!
  // useEffect(() => {
  //   setProductInfoByTypeID(productsAllInfo.filter(item => item.typeID === typeID))
  
  // }, [typeID])
  
  
  return (
    <form onSubmit={handlerAddProduct} className='addproduct'>
      {addProductError && <UserErrorWarning canselHandler={canselHandler} message='Can`t add book, try late!'/>}
      <div className="addproduct__inputs">
        <AddProductInfoType/>
        <div className="inputs__item">
          <input
            onChange={nameHandler}
            value={name}
            className='inputs__item__name' type="text" name="inputs__item__name"  />
          <label className='inputs__item__label' htmlFor="inputs__item__name">Название:</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={priceHandler}
            value={price}
            className='inputs__item__name' type="number" name="inputs__item__name"  />
          <label className='inputs__item__label' htmlFor="inputs__item__name">Цена</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={ratingHandler}
            value={rating}
            className='inputs__item__name' type="number" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Рейтинг:</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={countHandler}
            value={count}
            className='inputs__item__name' type="number" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Количество:</label>
        </div>
        <SelectOption label='Тип' value={typeID} onChangeHandler={typeHandler} optionArray={types}/>
        <SelectOption label='Бренд' value={brandID} onChangeHandler={brandHandler} optionArray={brands}/>
        {/* <div className="inputs__item">
          <select
            onChange={typeHandler}
            value={typeID}
            className='inputs__item__name'
            name="inputs__item__name">
            <option value=""></option>
            {types.map((type) => 
              <option key={type._id} value={type._id}>{type.name}</option>
              )}
          </select>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Тип:</label>
        </div> */}
        {/* <div className="inputs__item">
          <select
            onChange={brandHandler}
            value={brandID}
            className='inputs__item__name'
            name="inputs__item__name">
            <option value=""></option>
            {brands.map((brand) => 
              <option key={brand._id} value={brand._id}>{brand.name}</option>
            )}
          </select>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Бренд:</label>
        </div> */}
        <CommandBarButton
          iconProps={addIcon}
          text="Добавить новую характеристику"
          onClick={addInfo}
        />
        {
          infoBlock.map(item => 
            <AddProductInfo 
              key={item.id}
              item={item}
              typeID={typeID}
              productsAllInfo={productsAllInfo}
              removeInfo={removeInfo}
              changeInfoBlock={changeInfoBlock}
            />
            // <div key={item.id} className='inputs__addInfoBlock'>
            //   <div className="inputs__item">
            //     <select
            //       // onChange={productInfoTitleHandler}
            //       onChange={(event: React.ChangeEvent<HTMLSelectElement>) => changeInfoBlock(item.id, 'title', event.target.value)}
            //       // value={productInfoTitle}
            //       value={item.title}
            //       className='inputs__item__name'
            //       name="inputs__item__name">
            //       <option value=""></option>
            //       {productInfoByTypeID.map((type) => 
            //         <option key={type._id} value={type.title}>{type.title}</option>
            //       )}
            //     </select>
            //     <label className='inputs__item__label' htmlFor="inputs__item__name">Виды характеристик:</label>
            //   </div>
            //   <div className="inputs__item">
            //     <input
            //       onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeInfoBlock(item.id, 'description', event.target.value)}
            //       value={item.description}
            //       className='inputs__item__name' type="text" name="inputs__item__name"/>
            //     <label className='inputs__item__label' htmlFor="inputs__item__name">Описание:</label>
            //   </div>
            //   <button
            //     className='inputs__addButton'
            //     onClick={() => removeInfo(item.id)}
            //     >
            //       Удалить характеристику
            //   </button>
            // </div>
            
          )
        }


        <div className="inputs__files">
          <div className="inputs__files_block">
            <div className="inputs__files__title">
              Изображение:
            </div>
            <input
              onChange={imageHandler}
              className='inputs__files_display' type="file" name="label_for_file" id="label_for_file" />
            <label className='inputs__files__label' htmlFor="label_for_file">Виберите файл</label>
          </div>
          <div className="inputs__files__view">
            <img  className='inputs__files__view_img' src={showImg}/>
          </div>
        </div>
      </div>
      <div className='addproduct__button'>
        <PrimaryButton 
          text='Добавить товар' 
          type="submit" 
          size={300}
          iconProps={addIcon}
        />
        {/* <button
          type="submit"
          className='addproduct__button_add'
        >
          Добавить товар
        </button> */}
      </div>
    </form>
    
  );
};

export const AddProduct = React.memo(AddProductInner);
