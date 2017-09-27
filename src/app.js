import React from 'react';
import Comment from './components/comment';
import Welcome from './components/welcome';

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
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
