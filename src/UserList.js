

import React, { useEffect, useState } from 'react';

import axios from 'axios';


const UserList = () => {

 const [users, setUsers] = useState([]);
  const [error, setError] = useState('')
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(err => {
       setError(err.message);
  });
  }, []);





  return (
    <div>
{error && <p className="text-danger">{error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default UserList


