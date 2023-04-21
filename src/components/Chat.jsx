import React, {useState} from 'react';

const Chat = () => {
  const [text, setText] = useState('')
  const sendMessage = () => {
    console.log(text)
    setText('')
  }

  return (
    <div className="Chat">
      <div className="Chat-header">
        Имя Коржика
      </div>
      <div className="Chat-messages">

      </div>
      <div className="Chat-input">
        <textarea
          placeholder="Сообщение..."
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button
          onClick={sendMessage}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;