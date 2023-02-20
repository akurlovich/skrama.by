import { IIconProps, initializeIcons } from '@fluentui/react';
import { CommandBarButton } from '@fluentui/react';
import React, { FC } from 'react';
import './productinfo.scss';
// @ts-ignore
import starRatingSvg from '../../../assets/img/star_rating.png';
// @ts-ignore
import minusSvg from '../../../assets/img/minus.png';
// @ts-ignore
import plusSvg from '../../../assets/img/plus.png';
// @ts-ignore
import cartSvg from '../../../assets/img/cart.svg';
// @ts-ignore
import itemImage from '../../../assets/img/parnichok3.jpg'

initializeIcons();

const deleteIcon: IIconProps = { iconName: 'Cancel' };
const editIcon: IIconProps = { iconName: 'Edit' };

const ProductInfoInner: FC = () => {
  const admin = true;
  const count = 1;
  return (
    <div className="producinfo">
      <div className="producinfo__wrapper">
        {admin && (
                <div className="producinfo__title_btns">
                <CommandBarButton
                  iconProps={editIcon}
                  text="Редактировать"
                  
                />
                <CommandBarButton
                  iconProps={deleteIcon}
                  text="Удалить"
                  // onClick={deleteProductHandler}
                />
              </div>)
            }
        <div className="producinfo__container">
          <div className="producinfo__imageblock">
            <img className="producinfo__image" src={itemImage} alt="product cover"/>
          </div>
          <div className="producinfo__info">
            <div className="producinfo__titleblock">
              <div className="producinfo__title">Поликарбонат Парничок</div>
              
            </div>
            <div className="producinfo__rating">
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <img src={starRatingSvg}/>
              <div className="producinfo__rating_review">
                8 просмотров
              </div>
            </div>
            <div className="producinfo__price">{`125 руб.`}</div>
            {/* { */}
              {/* productInfo.map(item => ( */}
                <div className="producinfo__addinfo">
                  <div className="">Плотность:</div>
                  <div className="producinfo__addinfo__secondary">0,46кг/м2</div>
                </div>
                <div className="producinfo__addinfo">
                  <div className="">Размер листа:</div>
                  <div className="producinfo__addinfo__secondary">6000х2100мм</div>
                </div>
                <div className="producinfo__addinfo">
                  <div className="">Цвет:</div>
                  <div className="producinfo__addinfo__secondary">Прозрачный</div>
                </div>
                
              {/* )) */}
            {/* } */}
            {/* <div className="producinfo__addinfo">
              <div className="">Плотность:</div>
              <div className="">0,46кг/м2</div>
            </div>
            <div className="producinfo__addinfo">
              <div className="">Размер листа:</div>
              <div className="">6000х2100мм</div>
            </div>
            <div className="producinfo__addinfo">
              <div className="">Цвет:</div>
              <div className="">прозрачный</div>
            </div> */}
            <div className="producinfo__cartinfo">
              <div className="producinfo__cartinfo_count">
                <button 
                  disabled={count === 1}
                  className={count < 2 ? "producinfo__cartinfo_block notActive" : "producinfo__cartinfo_block"}
                  // onClick={handlerMinusCount}
                >
                  <img src={minusSvg} alt="" />
                </button>
                <div className="producinfo__cartinfo_block nothover">
                  <div>{count}</div>
                </div>
                <button 
                  className="producinfo__cartinfo_block"
                  // onClick={handlerPlusCount}
                >
                  <img src={plusSvg} alt="" />
                </button>
              </div>
              <div 
                // onClick={addToCartHandler}
                className="producinfo__cart">
                <img className="producinfo__cart_img" src={cartSvg} alt="" />
                <div className="producinfo__cart_btn">В корзину</div>
              </div>
            </div>
            
          </div>
          {/* <div
            // onClick={canselHandler}
            className="producinfo__cansel">
            <FcCancel size={60}/>
          </div> */}
        </div>
        <div className="producinfo__description">
          <div className="producinfo__description_title">
            Описание
          </div>
          <div className="producinfo__description_line"></div>
          <p className="producinfo__description_main">
            лучший в мире поликарбонта
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, et aliquid corrupti eligendi expedita accusamus officiis temporibus saepe laudantium. Accusamus laborum iste recusandae molestias perspiciatis porro consectetur nisi odio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quas architecto sed eligendi ullam, illo fugit temporibus dignissimos quisquam delectus perspiciatis ipsum soluta odit reprehenderit, fugiat consequuntur blanditiis! A, praesentium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident doloremque aperiam ipsam doloribus. Labore laboriosam rerum provident earum numquam quam repellat, nesciunt at esse, nam eaque molestias deserunt quos.
          </p>
        </div>
      </div>
    </div>
  )
}

export const ProductInfo = React.memo(ProductInfoInner);