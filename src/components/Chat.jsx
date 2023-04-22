import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/context";

const Chat = () => {
  const [text, setText] = useState('')
  const {users, selfEmail} = useContext(AuthContext)
  console.log(selfEmail)
  let arr = new Array()
  console.log(users)
  arr = users.then(users => console.dir(users))
  console.log(arr)
  console.log(arr.status)

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