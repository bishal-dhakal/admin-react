import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); 
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []); 

  return (
    <div>
      <h1>Users</h1>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
             <Link to={`/user/${user.id}`}>
                <p>{user.username}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;

