import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import base64 from '../../services/ClientServices/Base64';
import { addBook } from '../../store/reducers/BookReducer/BookActionCreatores';
import { USER_AVATAR } from '../../constants/user';
import './addproduct.scss';
import { UserErrorWarning } from '../UI/UserErrorWarning/UserErrorWarning';
import { addProduct } from '../../store/reducers/ProductReducer/ProductActionCreators';
import { getTypes } from '../../store/reducers/TypeReducer/TypeActionCreators';
import { getBrands } from '../../store/reducers/BrandReducer/BrandActionCreators';
import { IProductInfoNew } from '../../types/IProductInfoNew';

const AddProductInner: FC = () => {
  const { error } = useAppSelector(state => state.productReducer);
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
  const [infoTitle, setInfoTitle] = useState('');
  const [infoDescription, setInfoDescription] = useState('');
  // const [description, setDescription] = useState('');
  const [addBookError, setAddBookError] = useState(false);
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
  const infoTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfoTitle(event.target.value);
  }
  const infoDescriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfoDescription(event.target.value);
  }
  // const descriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setDescription(event.target.value);
  // }
 
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.currentTarget.files as FileList)[0];
    setcoverImage(file);
    const urlImage = await base64(file);
    setShowImg(urlImage as string);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getTypes());
      await dispatch(getBrands());
    })()
  }, [])
  
  useEffect(() => {
    if (error) {
      setAddBookError(true);
    }
  
  }, [error]);

  const canselHandler = () => {
    setAddBookError(false);
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
    const productInfo: IProductInfoNew = { typeID: typeID, title: infoTitle, description: infoDescription};
    await dispatch(addProduct({product: formData, productInfo: [productInfo]}))

    // await dispatch(addProduct({name, price, rating, count, coverImage, typeID, brandID}));
    // setName('');
    // setPrice(0);
    // setRating(0);
    // setCount(1);
    // setTypeID('');
    // setBrandID('');
    // setcoverImage('');
  };

  return (
    <form onSubmit={handlerAddProduct} className='addproduct'>
      {addBookError && <UserErrorWarning canselHandler={canselHandler} message='Can`t add book, try late!'/>}
      <div className="addproduct__inputs">
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
        <div className="inputs__item">
          <input
            onChange={infoTitleHandler}
            value={infoTitle}
            className='inputs__item__name' type="text" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Характеристика:</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={infoDescriptionHandler}
            value={infoDescription}
            className='inputs__item__name' type="text" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Описание характеристики:</label>
        </div>
        <div className="inputs__item">
          <select
            onChange={typeHandler}
            value={typeID}
            className='inputs__item__name'
            name="inputs__item__name">
            <option value=""></option>
            {types.map((type) => 
              <option key={type._id} value={type._id}>{type.name}</option>
            )}
            {/* <option value=""></option>
            <option value="Computer Science">Computer Science</option>
            <option value="Deteсtive">Deteсtive</option>
            <option value="Dramma">Dramma</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thrillers</option> */}
          </select>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Тип:</label>
        </div>
        <div className="inputs__item">
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
        </div>
        {/* <div className="inputs__item">
          <textarea
            onChange={descriptionHandler}
            value={description}
            className='inputs__item__textarea'
            rows={8}
            name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Description:</label>
        </div> */}
        <div className="inputs__files">
          <div className="inputs__files_block">
            <div className="inputs__files__title">
              Book cover:
            </div>
            <input
              onChange={imageHandler}
              className='inputs__files_display' type="file" name="label_for_file" id="label_for_file" />
            <label className='inputs__files__label' htmlFor="label_for_file">Select file</label>
          </div>
          <div className="inputs__files__view">
            <img  className='inputs__files__view_img' src={showImg}/>
          </div>
        </div>
      </div>
      <div className='addproduct__button'>
        <button
          type="submit"
          className='addproduct__button_add'
        >
          Add Product
        </button>
      </div>
    </form>
    
  );
};

export const AddProduct = React.memo(AddProductInner);
