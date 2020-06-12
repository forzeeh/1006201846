import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import Comments from '../Comments/Comments';
import SendForm from '../SendForm/SendForm';

import './media.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Cart />
        <Review />
        <Comments />
        <SendForm />
      </div>
    );
  }
}

export default App;
