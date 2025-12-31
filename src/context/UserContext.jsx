import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('finMantraUser_v2');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
    localStorage.setItem('finMantraUser_v2', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('finMantraUser_v2');
  };

  return (
    <UserContext.Provider value={{ user, saveUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
