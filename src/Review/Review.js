import React from 'react';
import './Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 131,
      repost: 14,
    }
  }
  like = () => {
    this.setState({like : this.state.like + 1});
  }
  repost = () => {
    this.setState({repost : this.state.repost + 1});
  }

  render() {
    return (
      <div className="review">
        <div className="review__links">
          <p className="review__links-active"><a href="/">Последние отзывы</a></p>
          <p><a className="review__all" href="/">Все отзывы</a></p>
        </div>
        <div className="review__likeRepost">
          <div className="review__like" onClick={this.like}>{this.state.like}</div>
          <div className="review__repost" onClick={this.repost}>{this.state.repost}</div>
        </div>
      </div>
    );
  }
}

export default Review;