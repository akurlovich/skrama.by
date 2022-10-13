import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOKS_BG_COLORS } from '../../constants/user';
import { useAppDispatch } from '../../hooks/redux';
import { randomBGColor } from '../../services/ClientServices/RandomBGColor';
import { setCategoryId } from '../../store/reducers/FilterReducer/FilterSlice';
import './productblock.scss';

interface IProps {
  title: string,
  imgSrc: string,
  typeID: string,
}

const ProductBlockItem: FC<IProps> = ({title, imgSrc, typeID}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const style = {
    background: BOOKS_BG_COLORS[randomBGColor()],
  };
  const handlerMore = () => {
    dispatch(setCategoryId(typeID));
    navigate(`/products`);
  };
  return (
    <div className="productblock">
      <div className="productblock__container" style={style} >
        <div className="productblock__cover">
          <div className="productblock__cover_block">
            <img className='productblock__cover_image' src={imgSrc} alt="book cover" />
          </div>
          <div className="productblock__cover_line"></div>
        </div>
        <div className="productblock__item">
          <div className="productblock__header">
            {title}
          </div>
          {/* <div className="productblock__discription">
            4 мм
          </div>
          <div className="productblock__info">
            <div className="productblock__info_author">
              Прозрачный
            </div>
            <div className="productblock__info_year">
              Парничок
            </div>
          </div>
          <div className="bookBlock__info_genre">
            дл.6м
          </div> */}
          <div 
            onClick={handlerMore}
            className="productblock__button"
          >
            Далее
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductBlock = React.memo(ProductBlockItem);
