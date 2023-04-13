import React from 'react';
import './App.css';
import { ChatRoom } from './components/ChatRoom'; 

function App() {
  return (
    <div className="App">
      <h1 className='app-heading-1'>Welcome to Chat!</h1>
      <ChatRoom/>
    </div>
  );
}

export default App;
