import {
  HomeContainer
} from '../styles/pages/home.style';

import { useAuth } from '../hooks/authContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../hooks/api';

export default function Home() {
  const [user, setUser] = useState(null);

  const userExistingId = useAuth();
  const navigate = useNavigate('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get("/users/", userExistingId);

        if (response.status === 200) {
          setUser(response.data.user);
        };
      } catch (err) {
        setUser(null);
      };
    };

    getData();
  }, [userExistingId, setUser]);

  if (!user) {
    return (
      <HomeContainer>
        Some welcome stuff here
      </HomeContainer>
    );
  };

  return navigate('/dashboard');
};
