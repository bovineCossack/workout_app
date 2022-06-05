import React from 'react';
import * as S from './Hero.styles';

const Hero = ({ text, title }) => {
  return (
    <S.Hero>
      <S.HeroTitle>{title}</S.HeroTitle>
      <S.HeroText>{text}</S.HeroText>
    </S.Hero>
  );
};

export default Hero;
