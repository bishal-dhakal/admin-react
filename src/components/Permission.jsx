import React, { useState, useEffect } from 'react';

function Permissions({ userPermissions }) {
  const [permissions, setPermissions] = useState([]);
  const [data, setData ] = useState(userPermissions)

  
const handleChange = (event) => {
  const { name, checked } = event.target; 
  setData((prevState) => {
    if (checked) {
      return [...prevState, name];
    } else {
      return prevState.filter((item) => item !== name);
    }
  });
};

  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/api/permission/')
      .then((res) => res.json())
      .then((data) => {
        setPermissions(data);
        })

      .catch((error) => console.error('Error fetching permissions:', error));
      console.log(userPermissions)
  }, []);

  return (
    <div>
      <p>Available Permissions</p>
      <div>
        {permissions.length === 0 ? (
          <p>No Permissions Available</p>
        ) : (
          permissions.map((permission) => (
            <p key={permission.id}>
              <b>{permission.id}</b>
              <input
                type="checkbox"
                value={permission.id}
                onChange={handleChange}
                // checked={}
                />
              <label>{permission.name}</label>
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default Permissions;

