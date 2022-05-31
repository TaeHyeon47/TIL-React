import React from 'react';
import Card from './UI/Card';
import './UserList.css';

const UserList = (props) => {
  console.log('In UserList', props);
  return (
    <Card className='users'>
      <ul>
        {props.userinfo.map((user) => (
          <li key={user.id}>
            {`${user.enteredUserName} (${user.enteredUserAge}살)`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
