import styled from 'styled-components/native';

const defaultStyle = {
  fontFamily: 'Pretendard-Regular',
};

export const TypographyStyles = {
  ...defaultStyle,
  Headline1: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export const Headline1 = styled.Text(TypographyStyles.Headline1);
