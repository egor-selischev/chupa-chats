import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/context";
import {allUsersAPI, conWebSos, loginAPI} from "../http/userAPI";
import Message from "./Message";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

var stompClient = null

const Chat = ({activeContact}) => {
  const [text, setText] = useState('')
  const {selfEmail, test, user} = useContext(AuthContext)
  const [messages, setMessages] = useState([])
  const msgs = conWebSos(user.id, activeContact.id)



  useEffect(() => {
    connect()
    msgs.then(ms => {
      const data = ms
      setMessages(data)
    })
    console.log(messages)

  }, [activeContact])
  const connect = () => {
    const Stomp = require("stompjs")
    let SockJS = require("sockjs-client")
    SockJS = new SockJS("http://localhost:8080/ws")
    stompClient = Stomp.over(SockJS)
    stompClient.connect({}, onConnected, onError)
  }
  const onConnected = () => {
    console.log("connected")
    console.log(user)
    stompClient.subscribe(
      "/user/" + user.id + "/queue/messages",
      myMessage
    )
  }

  const onError = (err) => {
    console.log(err)
  }

  const myMessage = (msg) => {
    if (msg.body) {
      window.alert(`got message with body ${msg.body}`)
    } else {
      window.alert('got empty message')
    }
  }


  const sendMessage = () => {
    if (text.trim() !== "") {
      const message = {
        senderId: user.id,
        recipientId: activeContact.id,
        senderName: user.name,
        recipientName: activeContact.name,
        content: text,
        timestamp: new Date(),
      };
      stompClient.send("/app/chat", {}, JSON.stringify(message));

      // const newMessages = [...messages];
      // newMessages.push(message);
      // setMessages(newMessages);
      setMessages((prev) => [...prev, message]);
      setText('')
      console.log(text)
    }
  }

  return (
    <div className="Chat">
      <div className="Chat-header">
        {activeContact.name}
      </div>
      <div className="Chat-messages">
        {messages.map((el) => <Message message={el} />)}
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
  )
}

export default Chat
