import React, {useContext, useEffect, useMemo, useState} from 'react';
import {AuthContext} from "../context/context";

const Sidebar = ({setActiveContact}) => {
  const profiles = [
    {img: 'https://i.pinimg.com/originals/69/2e/64/692e6421912e29184674dd58ef9f5e18.jpg', name: 'Котик Обыкновенный', date: '19.11.2001', lastMsg: 'Мои сохраненные сообщения'},
    {img: 'https://dog-food.su/d/chem_kormit_korgi-min.jpg', name: 'Тюбик Коржочков', date: '12.02.2001', lastMsg: 'Привет, Котик. Давай дрыгать попками!'},
    {img: 'https://img.freepik.com/free-photo/black-cat-with-yellow-eyes-looking-at-the-camera-with-a-blurred_181624-1920.jpg?w=2000', name: 'Черный Котюнчик', date: '17.08.2002', lastMsg: 'Агррр! Подойдешь - сделаю кусь'}
  ]
  const img = 'https://dog-food.su/d/chem_kormit_korgi-min.jpg'
  const {test, selfEmail, user} = useContext(AuthContext)
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const filteredPosts = useMemo(() => {
    return [...users].filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  useEffect(() => {
    setUsers(test.filter(user => user.email !== selfEmail))
  }, [])

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <img src={profiles[0].img} alt="Ваше фото"/>
        <span>{user.name}</span>
      </div>
      <div className="Sidebar-find-by-name">
        <input
          type="text"
          value={query}
          placeholder="Поиск по имени"
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="Sidebar-chats-list">
        {filteredPosts.map(({id, name}) => {
          return (
            <div key={id} className="Sidebar-chat-item" onClick={() => setActiveContact(users.find(u => u.id === id))}>
              <img src={img} alt="Ваше фото"/>
              <span>
                {name}
                {/*<p>*/}
                {/*  {lastMsg}*/}
                {/*</p>*/}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Sidebar;