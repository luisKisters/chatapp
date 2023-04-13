import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/ChatRoom.css';

export const ChatRoom = () => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/chat_rooms/')
      .then(response => {
        console.log(response.data.chat_rooms)
        setChatRooms(response.data.chat_rooms);
      })
      .catch(error => {
        console.log('There was an error: ', error)
      });
  }, []);

  return (
    <div className='ChatRoom-view'>
      <div className="room-list-con">
        <p className='room-heading-1'>Chat Rooms:</p>
        <ul className='room-list'>
          {chatRooms.map(chatRoom => (
            <li key={chatRoom.id}>{chatRoom.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
