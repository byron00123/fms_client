import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout/', { // Replace with your logout API endpoint
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        // Clear local storage (optional)
        localStorage.removeItem('userToken');
        navigate('/login');
      } else {
        // Handle logout errors (e.g., display an error message)
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
