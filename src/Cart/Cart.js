import React from 'react';
import './Cart.css';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <div className="services">Услуг</div>
        <div className="section">
          <div className="cart">
            <div className="cart__line">
              <div className="line"></div>
            <div className="flex">
              <div className="color booking">Ручное бронирование</div>
              <div className="count"><span>11</span></div>
              <div className="cart__booking-color cart__color"></div>
            </div>
            <div className="flex">
              <div className="color booking">Пакетные туры</div>
              <div className="count"><span>3</span></div>
              <div className="cart__tours-color cart__color"></div>
            </div>
            <div className="flex">
              <div className="booking">Отели</div>
              <div className="count"><span>1</span></div>
              <div className="cart__hotels-color cart__color"></div>
            </div>
            </div>
          </div>
        </div>
        <div className="total">Всего <span>15</span></div>
      </div>
    );
  }
}

export default Cart;