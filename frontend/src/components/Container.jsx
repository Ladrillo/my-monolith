import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Container.less';


export default function Container() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(error => {
        console.log('agh');
      });
  }, []);

  return (
    <div className='container-hello-world'>
      <div>users:</div>
      {
        users.map(user => <div>{user.name}</div>)
      }
    </div>
  );
}
