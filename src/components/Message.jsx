import React from 'react';


const Message = ({message}) => {

  return (
    <div key={message.id}>
      <span><b>{message.senderName}:</b> {message.content}</span>
      <hr/>
    </div>
  );
};

export default Message;
