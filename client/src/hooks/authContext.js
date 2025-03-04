'use client';

import { createContext, useContext, useState, useEffect } from 'react';

import api from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    const token = window.localStorage.getItem('token');

    if (loggedUserJSON && token) {
      setUserId(JSON.parse(loggedUserJSON));
      setToken(token);
    }
  }, []);

  const login = async (postData) => {
    try {
      const response = await api.post('/auth/login', postData);

      if (response.status === 200) {
        const { message, token, user_id } = response.data;
        window.localStorage.setItem('user_id', JSON.stringify(user_id));
        window.localStorage.setItem('token', token);

        setUserId(user_id);
        setToken(token);

        return {
          status: 200,
          message: message,
        };
      }
    } catch (err) {
      console.error(err);
      return {
        status: err.status,
        message: err.response.data.message
      };
    };
  };

  const logout = () => {
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('token');

    setUserId(null);
    setToken('');

    setTimeout(() => {
      return;
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ userId, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);