import React, { useState, useEffect } from 'react';

function Permissions({ userPermissions }) {
  const [permissions, setPermissions] = useState([]);
  const [data, setData ] = useState([])
  
const handleChange = (event) => {
  const { value, checked } = event.target; 
  setData((prevState) => {
      // If the permission ID is already in `data`, remove it (unchecked), else add it (checked)
      if (prevState.includes(value)) {
        return prevState.filter((item) => item !== value); // Remove if already present
      } else {
        return [...prevState, value]; // Add if not present
      } 
    }); 
};


 useEffect(() => {
    const permissions = userPermissions.map(String)
    setData(permissions);
  }, [userPermissions]);

useEffect(() => {
    console.log(data)
  },[data]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/auth/api/permission/')
      .then((res) => res.json())
      .then((data) => {
        setPermissions(data);
        })

      .catch((error) => console.error('Error fetching permissions:', error));
  }, []);

  return (
    <div>
      <p>Available Permissions</p>
      {data}
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
checked={data.includes(String(permission.id))}
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

