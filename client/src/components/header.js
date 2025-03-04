import {
  HeaderContainer,
  ImageContainer,
  UserContainer,
  TitleContainer,
  AppIcon,
  Title,
  SubTitle,
  Username
} from '../styles/components/header.style';

import { useAuth } from '../hooks/authContext';
import { useState, useEffect } from 'react';

import api from '../hooks/api';

export default function Header() {
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

  const getUsername = () => {
    if (user && user.username) {
      return (
        <Username>{user.username}</Username>
      );
    } else {
      return (
        <Username>Hello, User!</Username>
      );
    };
  };

  return (
    <HeaderContainer>
      <ImageContainer>
        <AppIcon
          src="/images/icon.png"
          alt="Mek's Speak Icon"
          width="80"
          height="80"
          />
      </ImageContainer>

      <UserContainer>
        { getUsername() } 
      </UserContainer>

      <TitleContainer>
        <Title>
          Mek&#39;s Speak
        </Title>

        <SubTitle>
          A simple and secure online social network application
        </SubTitle>
      </TitleContainer>
    </HeaderContainer>
  );
};
