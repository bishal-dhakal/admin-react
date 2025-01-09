import React, { useState, useEffect } from 'react';
import Group from "../components/Groups";
import Permissions from "../components/Permission";

const UserForm = ({ user }) => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: '',
    is_active: false,
    is_staff: false,
    is_superuser: false,
    groups: [],
    user_permissions: [],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        ...user,
        groups: user.groups || [],
        user_permissions: user.user_permissions || [],
      }));
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="is_active"
            checked={formData.is_active}
            onChange={handleChange}
          />
          Is Active
        </label>
        <label>
          <input
            type="checkbox"
            name="is_staff"
            checked={formData.is_staff}
            onChange={handleChange}
          />
          Is Staff
        </label>
        <label>
          <input
            type="checkbox"
            name="is_superuser"
            checked={formData.is_superuser}
            onChange={handleChange}
          />
          Is Superuser
        </label>
      </div>

      <div>
        <h3>Groups</h3>
        <Group
        />
      </div>

      <div>
        <h3>Permissions</h3>
        <Permissions
          userPermissions={formData.user_permissions}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
