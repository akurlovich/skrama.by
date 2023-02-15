import React, { FC } from 'react';
import './typeblock.scss';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { addNavItem } from '../../store/reducers/NavigationBarReducer/NavigationBarSlice';

interface IProps {
  title: string;
  imgSrc: string;
};

const TypeBlockInner: FC<IProps> = ({title, imgSrc}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerMore = () => {
    dispatch(addNavItem(title));
    navigate(`/products`);
  };

  return (
    <div className='card'>
      <div className="lines"></div>
      <div className="imgBx">
        <img src={imgSrc}/>
      </div>
      <div className="card__content">
        <div className="details">
          <h2>{title}<br></br><span>Сотовый</span></h2>
          {/* <div className="data">
            <h3>342<br></br><span>Posts</span></h3>
            <h3>120k<br></br><span>Folowers</span></h3>
            <h3>285<br></br><span>Folowing</span></h3>
          </div> */}
          <div className="actionBtn">
            <button
              onClick={handlerMore}
            >
              Перейти
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TypeBlock = React.memo(TypeBlockInner)