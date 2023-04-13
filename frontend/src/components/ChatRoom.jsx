import React from 'react'
import '../style/ChatRoom.css'

export const ChatRoom = () => {
  return (
    <div className='ChatRoom-view'>
        <div className="room-list-con">
          <p className='room-heading-1'>Chat Rooms:</p>
          <ul className='room-list'>
              <li className='room-list-item'>Chat Room 1 (This is a test)</li>
              <li className='room-list-item'>Chat Room 2 (This is a test)</li>
              <li className='room-list-item'>Chat Room 3 (This is a test)</li>
              <li className='room-list-item'>Chat Room 4 (This is a test)</li>
              <li className='room-list-item'>Chat Room 5 (This is a test)</li>
              {/* <li className="room-list -item">
                <p>Testing Django Context: {{ test }}</p>
              </li> */}
          </ul>
        </div>
    </div>
  )
}
