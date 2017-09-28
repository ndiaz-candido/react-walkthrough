import React from 'react';
import UserInfo from './userinfo';

const userList = [
  {
    name: 'Pedro Caja',
    avatarUrl: 'http://placekitten.com/g/64/64'
  },
  {
    name: 'Sandro Poncio',
    avatarUrl: 'http://placekitten.com/g/64/64'
  },
  {
    name: 'Igna Cara',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
];

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = userList.map((user, index) => (<UserInfo user={user} key={index} />));

    return (
      <div>
        {users}
      </div>
    );
  }
}
