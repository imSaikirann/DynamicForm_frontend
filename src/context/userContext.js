import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [finalForm, setFinalForm] = useState(() => {
    const storedFinalForm = localStorage.getItem('finalForm');
    return storedFinalForm ? JSON.parse(storedFinalForm) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (finalForm) {
      localStorage.setItem('finalForm', JSON.stringify(finalForm));
    } else {
      localStorage.removeItem('finalForm');
    }
  }, [finalForm]);

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('finalForm');
    setUser(null);
    setFinalForm(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, finalForm, setFinalForm }}>
      {children}
    </UserContext.Provider>
  );
};
