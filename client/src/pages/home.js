import {
  HomeContainer
} from '../styles/pages/home.style';

import { useAuth } from '../hooks/authContext';
import { useEffect, useState } from 'react';

import api from '../hooks/api';

export default function Home() {
  const [user, setUser] = useState(null);

  const userExistingId = useAuth();

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
      <HomeContainer className="">No User Exists</HomeContainer>
    );
  };

  return (
    <HomeContainer className="">Home Screen</HomeContainer>
  );
};
