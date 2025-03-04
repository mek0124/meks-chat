import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

export const ImageContainer = styled(HeaderContainer)`
  justify-content: start;
  width: 10%;
  border: none;
  margin-bottom: 0;
`;

export const UserContainer = styled(HeaderContainer)`
  border: none;
  margin-bottom: 0;
`;

export const TitleContainer = styled(HeaderContainer)`
  flex-direction: column;
  justify-content: end;
  border: none;
  width: 30%;
  margin-bottom: 0;
`;

export const AppIcon = styled.img``;

export const Title = styled.h1`
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--fg);
  width: 100%;
  text-align: end;
  margin-right: 2rem;
`;

export const SubTitle = styled.h3`
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  width: 100%;
  text-align: end;
  margin-top: -15px;
  margin-right: 2rem;
`;

export const Username = styled.label`
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--fg);
`;
