import React from 'react';
import Comment from './components/comment';
import Welcome from './components/welcome';
import Clock from './components/clock';
import Toggle from './components/toggle';
import LoginControl from './components/loginControl';
import UserList from './components/userList';

export default function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Fuhrer',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  return (
    <div>
      <Comment date={comment.date} text={comment.text} author={comment.author} />
      <Welcome name="Sara" />
      <Clock />
      <Toggle />
      <LoginControl />
      <UserList />
    </div>
  );
}
