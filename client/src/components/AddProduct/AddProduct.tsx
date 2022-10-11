import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import base64 from '../../services/ClientServices/Base64';
import { addBook } from '../../store/reducers/BookReducer/BookActionCreatores';
import { USER_AVATAR } from '../../constants/user';
import './addproduct.scss';
import { UserErrorWarning } from '../UI/UserErrorWarning/UserErrorWarning';

const AddProductInner: FC = () => {
  const { error } = useAppSelector(state => state.bookReducer);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState(2000);
  const [amount, setAmount] = useState(1);
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setcoverImage] = useState(USER_AVATAR);
  const [addBookError, setAddBookError] = useState(false);
  const dispatch = useAppDispatch();

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const authorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  }
  const yearHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(+event.target.value);
  }
  const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  }
  const genreHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  }
  const descriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  }
 
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];
    if (file.size > 60000) {
      alert('File is too big! File must be less then 60kb!')
    } else {
      const urlImage = await base64(file);
      if (urlImage) {
        setcoverImage(urlImage as string)
      }
    }
  };

  useEffect(() => {
    if (error) {
      setAddBookError(true);
    }
  
  }, [error]);

  const canselHandler = () => {
    setAddBookError(false);
  };

  const handlerAddBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(addBook({title, author, description, amount, year, genre, coverImage}));
    setTitle('');
    setAuthor('');
    setYear(2000);
    setAmount(1);
    setGenre('');
    setDescription('');
    setcoverImage(USER_AVATAR);
  };

  return (
    <form onSubmit={handlerAddBook} className='addproduct'>
      {addBookError && <UserErrorWarning canselHandler={canselHandler} message='Can`t add book, try late!'/>}
      <div className="addproduct__inputs">
        <div className="inputs__item">
          <input
            onChange={titleHandler}
            value={title}
            className='inputs__item__name' type="text" name="inputs__item__name"  />
          <label className='inputs__item__label' htmlFor="inputs__item__name">Title:</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={authorHandler}
            value={author}
            className='inputs__item__name' type="text" name="inputs__item__name"  />
          <label className='inputs__item__label' htmlFor="inputs__item__name">Author</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={yearHandler}
            value={year}
            className='inputs__item__name' type="text" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Year of publication:</label>
        </div>
        <div className="inputs__item">
          <input
            onChange={amountHandler}
            value={amount}
            className='inputs__item__name' type="number" name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Amount:</label>
        </div>
        <div className="inputs__item">
          <select
            onChange={genreHandler}
            value={genre}
            className='inputs__item__name'
            name="inputs__item__name">
            <option value=""></option>
            <option value="Computer Science">Computer Science</option>
            <option value="Deteсtive">Deteсtive</option>
            <option value="Dramma">Dramma</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thrillers</option>
          </select>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Genre:</label>
        </div>
        <div className="inputs__item">
          <textarea
            onChange={descriptionHandler}
            value={description}
            className='inputs__item__textarea'
            rows={8}
            name="inputs__item__name"/>
          <label className='inputs__item__label' htmlFor="inputs__item__name">Description:</label>
        </div>
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
            <img  className='inputs__files__view_img' src={coverImage}/>
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
