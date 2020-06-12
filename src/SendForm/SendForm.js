import React from "react";
import './SendForm.css';

class SendForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      arr: [],
      userName: 'User Name',
      textArea: '',
    }
  }

  // Отправка блока сообщения && очистка инпута
  send = () => {
    if (this.state.textArea === '') return false;
    let mas = this.state.arr;
    mas.push(this.state.textArea);
    this.inputRef.current.value = '';
    this.setState({ arr: mas, textArea: '',});
  }

  // задаю стейт сообщения пользователя
  inputText = (e) => {
    let txt = e.target.value;
    this.setState((state) => {
      return { textArea: txt };
    });
  }

  // cntrl enter
  check = (e) =>{
    if(e.keyCode===13 && e.ctrlKey) this.send();
  };
  componentDidMount(){
    document.addEventListener('keydown',this.check);
  };

  render() {
    // получение даты
    function getDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();

      return `${day} ${changeMonth(month)} ${year}`;
    }

    // преобразование месяца
    function changeMonth(month) {
      if (month === 0) return "января";
      if (month === 1) return "февраля";
      if (month === 2) return "марта";
      if (month === 3) return "апреля";
      if (month === 4) return "мае";
      if (month === 5) return "июня";
      if (month === 6) return "июля";
      if (month === 7) return "августа";
      if (month === 8) return "сентября"
      if (month === 9) return "октября";
      if (month === 10) return "ноября";
      if (month === 11) return "декабря";
    }

    return (
      <div>

        <div>
          {
            this.state.arr.map((elem, index) => {
              return <div key={index} className="comment">
                <div className="comment__userInfo">
                  <div className="comment__userName">{this.state.userName}</div>
                  <div className="comment__userDate">{getDate()}</div>
                </div>
                <div className="comment__text">{this.state.arr[index]}</div>
              </div>
            })
          }
        </div>


        <textarea cols="30" rows="10" className="textForm" onChange={this.inputText} ref={this.inputRef} />

        <div className="buttonSend" onClick={this.send}>Написать консультанту</div>

      </div>
    );
  }
}

export default SendForm;