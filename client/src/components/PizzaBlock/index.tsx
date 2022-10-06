import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { addItem } from "../../redux/slices/cartSlice";
import { ICartItem } from "../../types/ICartItem";

interface IProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  size: number[];
  type: number[];
  // category: number;
  // rating: number;
};

export const PizzaBlock: FC<IProps> = ({ id, name, price, imageUrl, size, type }) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(state => state.cartReducer.items.find(obj => obj.id === id.toString()));
  const [pizzaCount, setPizzaCount] = useState<number>(0);
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const typeName: string[] = ['thin', 'traditional'];

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddItem = () => {
    const item: ICartItem = {
      id: id.toString(),
      title: name,
      price,
      imageUrl,
      type: typeName[activeType],
      size: size[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
    setPizzaCount(prev => prev + 1);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {type.map((item, index) => (
              <li
                onClick={() => setActiveType(index)}
                className={activeType === index ? 'active' : ''}
                key={item + index}>
                {typeName[item]}
              </li>
            ))}
          </ul>
          <ul>
            {size.map((item, index) => (
              <li
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? 'active' : ''}
                key={item + index}>
                {item}сm
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">from {price}₽</div>
          <button onClick={onClickAddItem} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  )
};

export default PizzaBlock;

