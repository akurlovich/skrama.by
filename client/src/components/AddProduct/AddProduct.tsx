import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import base64 from '../../services/ClientServices/Base64';
import './addproduct.scss';
import { UserErrorWarning } from '../UI/UserErrorWarning/UserErrorWarning';
import { addProduct, getAllProductsInfo } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { getTypes } from '../../store/reducers/TypeReducer/TypeActionCreators';
import { getBrands } from '../../store/reducers/BrandReducer/BrandActionCreators';
import { IProductInfoNew } from '../../types/IProductInfoNew';
import { CommandBarButton, IIconProps, PrimaryButton, initializeIcons, TextField } from '@fluentui/react';
import { AddProductInfo } from './AddProductInfo';
import { SelectOption } from '../UI/SelectOption';
import { AddProductInfoType } from './AddProductInfoType';
import { AddProductNavButtons, IShowProps } from './AddProductNavButtons';

initializeIcons();

export interface IInfoBlock {
  title: string,
  description: string,
  id: number,
}

const addIcon: IIconProps = { iconName: 'Add' };

const AddProductInner: FC = () => {
  const { productsAllInfo } = useAppSelector(state => state.productReducer);
  const { types } = useAppSelector(state => state.typeReducer);
  const { brands } = useAppSelector(state => state.brandReducer);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [count, setCount] = useState('');
  const [coverImage, setcoverImage] = useState<File | null>(null);
  const [typeID, setTypeID] = useState('');
  const [brandID, setBrandID] = useState('');
  const [showImg, setShowImg] = useState('');
  const [infoBlock, setInfoBlock] = useState<IInfoBlock[]>([]);
  const [addProductError, setAddProductError] = useState(false);
  const [showAddBlock, setShowAddBlock] = useState({type: false, brand: false, product: false, infoType: false})
  const dispatch = useAppDispatch();

  const nameHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setName(newValue || '');
  }
  const priceHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setPrice(newValue || '');
  }
  const ratingHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setRating(newValue || '');
  }
  const countHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setCount(newValue || '');
  }
  const typeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeID(event.target.value);
  }
  const brandHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandID(event.target.value);
  }

  const addInfo = () => {
    const filltered = productsAllInfo.filter(item => item.typeID === typeID);
    // const newFiltered = [...new Set(filltered.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
    // @ts-ignore
    const newFiltered = filltered.reduce((acc, city) => {
      // @ts-ignore
      if (acc.map[city.title]) return acc;
      // @ts-ignore
      acc.map[city.title] = true;
      // @ts-ignore
      acc.cities.push(city);
      return acc;
    }, {map: {}, cities: []}).cities;
    // console.log(newFiltered);
    const newArr: IInfoBlock[] = [];
    for (let i = 0; i < newFiltered.length; i++) {
      // @ts-ignore
      newArr.push({title: newFiltered[i].title, description: '', id: Date.now() + i})
      // setInfoBlock([...infoBlock, {title: '', description: '', id: Date.now()}]);
    }
    setInfoBlock(newArr)
    // console.log(infoBlock);
  }

  const removeInfo = (id: number) => {
    setInfoBlock(infoBlock.filter(info => info.id !== id));
  }

  const changeInfoBlock = (id: number, key: string, value: string) => {
    setInfoBlock(infoBlock.map(i => i.id === id ? {...i, [key]: value} : i));
    // console.log(infoBlock)
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
 
  const showAddBlockHandler = ({type, brand, product, infoType} : IShowProps) => {
    setShowAddBlock({type: type, brand: brand, product: product, infoType: infoType})
  }
  
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
    setPrice('');
    setRating('');
    setCount('');
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
  
  return (
    <div className="addproduct__wrapper">
      {addProductError && <UserErrorWarning canselHandler={canselHandler} message='Can`t add book, try late!'/>}
      <AddProductNavButtons setShowAddBlock={showAddBlockHandler}/>
      <div className="addproduct__container">
        {showAddBlock.type && <div>TYPE</div>}
        {showAddBlock.infoType && <AddProductInfoType types={types}/>}
        {showAddBlock.product && (
          <form onSubmit={handlerAddProduct} className='addproduct'>
            <div className="addproduct__inputs">
              <TextField 
                value={name}
                onChange={nameHandler}
                label="Название:" 
                underlined  
              />
              <TextField 
                value={price}
                onChange={priceHandler}
                label="Цена:" 
                underlined  
              />
              <TextField 
                value={rating}
                onChange={ratingHandler}
                label="Рейтинг:" 
                underlined  
              />
              <TextField 
                value={count}
                onChange={countHandler}
                label="Количество:" 
                underlined  
              />
              <SelectOption label='Тип' value={typeID} onChangeHandler={typeHandler} optionArray={types}/>
              <SelectOption label='Бренд' value={brandID} onChangeHandler={brandHandler} optionArray={brands}/>

              <CommandBarButton
                iconProps={addIcon}
                text="Добавить новую характеристику"
                onClick={addInfo}
              />
              {/* {
                infoBlock.map(item => 
                  <AddProductInfo 
                    key={item.id}
                    item={item}
                    typeID={typeID}
                    productsAllInfo={productsAllInfo}
                    removeInfo={removeInfo}
                    changeInfoBlock={changeInfoBlock}
                  />
                )
              } */}
                  <AddProductInfo 
                    // key={item.id}
                    items={infoBlock}
                    typeID={typeID}
                    productsAllInfo={productsAllInfo}
                    removeInfo={removeInfo}
                    changeInfoBlock={changeInfoBlock}
                  />

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
                size={3000}
                iconProps={addIcon}
              />
            </div>
          </form>
        )}
      </div>
    </div>
    
  );
};

export const AddProduct = React.memo(AddProductInner);
