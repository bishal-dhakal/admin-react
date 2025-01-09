import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../Form/UserForm';

const User = () => {
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(true); 
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/auth/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);  
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;  
  }

  return (
    <div>
      <p>{user?.email || "No email available"}</p>
      <UserForm user={user} />
    </div>
  );
};

export default User;
