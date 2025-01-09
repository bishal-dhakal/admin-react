
import React, { useEffect, useState } from 'react';

const Group = ({ selectedGroups, onGroupChange }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/auth/api/groups/`)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      })
      .catch((error) => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div>
      <p>Available Groups</p>
      <div>
        {groups.length === 0 ? (
          <p>No Groups Available</p>
        ) : (
          groups.map((group) => (
            <p key={group.id}>
                <b>{group.id}</b>
              <input
                type="checkbox"
                value={group.id}
                name="group"
              />
              <label>{group.name}</label>
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Group;

