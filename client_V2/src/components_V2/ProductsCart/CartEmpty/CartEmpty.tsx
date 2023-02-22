import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import cartEmptyImg from '../../../assets/img/empty-cart.png';

const CartEmpty: FC = () => (
  <div className="cart__empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё поликарбонат.
    </p>
    <p>
      Для того, чтобы заказать поликарбонат, перейди на страницу продукции.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="btn btn-primary btn-lg">
      <span>Вернуться назад</span>
    </Link>
  </div>
);

export default CartEmpty;