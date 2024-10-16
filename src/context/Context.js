import React, { createContext, useState } from 'react';

// Context yaratish
export const UserContext = createContext();

// Context provider komponenti
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    scienceName: '',
    experience: '',
  });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
