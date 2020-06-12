import React from 'react';
import './Header.css';

import photo from '../img/photo.svg';

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <div className="header__avatar"><img src={photo} alt="avatar" /></div>

          <div className="header__info">
            <div className="header__name">Вероника Ростова</div>
            <div className="header__title">Менеджер по продажам</div>

            <div className="header__posa">
              <span>Подберу для вас самые лучшие предложения.</span>
              <span>Мои услуги абсолютно бесплатны</span>
            </div>
          </div>

        </header>
    );
  }
}

export default Header;
