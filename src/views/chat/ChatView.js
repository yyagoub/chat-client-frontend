import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
//import queryString from 'query-string';
import io from 'socket.io-client';
import 'antd/dist/antd.css';
import Chat from '../../components/chat/Chat';
import { BASE_PATH } from '../../util/api/Api';

let socket;

const ChatView = (props) => {
  const user = useSelector((state) => state.UserModel);
  const [name, setName] = useState(user.username);
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    /*{ username: 'someone', context: 'hi' },
    { context: 'hello' },*/
  ]);
  const URL = BASE_PATH;

  useEffect(() => {
    socket = io(URL);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room }, (error) => {
      alert(error);
    });
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [URL, props.location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) socket.emit('sendMessage', message, () => setMessage(''));
  };

  return (
    <Chat
      message={message}
      messages={messages}
      setMessage={setMessage}
      sendMessage={sendMessage}
    />
  );
};

export default ChatView;
