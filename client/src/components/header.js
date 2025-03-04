import {
  HeaderContainer,
  ImageContainer,
  TitleContainer,
  AppIcon,
  Title,
  SubTitle
} from '../styles/components/header.style';

export default function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <AppIcon
          src="/images/icon.png"
          alt="Mek's Speak Icon"
          width="110"
          height="110"
          />
      </ImageContainer>

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
