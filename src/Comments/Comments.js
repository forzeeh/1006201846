import React from 'react';
import './Comments.css';

class Comments extends React.Component {
  render() {
    return (
      <div className="allComments">
      <div className="comment">
        <div className="comment__userInfo">
          <div className="comment__userName">Самуил</div>
          <div className="comment__userDate">13 октября 2011</div>
        </div>
        <div className="comment__text">Привет, Верунь! ниче себе ты крутая. фотка класс!!!!</div>
      </div>

      <div className="comment">
        <div className="comment__userInfo">
          <div className="comment__userName">Лилия Семёновна</div>
          <div className="comment__userDate">14 октября 2011</div>
        </div>
        <div className="comment__text">Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно
        стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли
      бриллиантами?</div>
      </div>

      <div className="comment">
        <div className="comment__userInfo">
          <div className="comment__userName">Лилия Семёновна</div>
          <div className="comment__userDate">14 октября 2011</div>
        </div>
        <div className="comment__text">Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно
      стабилизирует кинетический момент?</div>
      </div>
    </div>
    );
  }
}

export default Comments;