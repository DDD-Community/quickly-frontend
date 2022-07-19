import { Text, TextStyle } from 'react-native';
import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode | ReactNode[];
  style?: TextStyle;
  weight?: 'Regular' | 'Medium' | 'Bold';
}

export const DefaultText = ({ children, style, weight }: TextProps) => {
  return (
    <Text
      allowFontScaling={false}
      style={{ fontFamily: `Pretendard-${weight}`, ...style }}
    >
      {children}
    </Text>
  );
};

export const Headline1 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Bold" style={{ fontSize: 24, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Headline2 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Bold" style={{ fontSize: 22, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Headline3 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Bold" style={{ fontSize: 20, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Subhead1 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Bold" style={{ fontSize: 18, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Subhead2 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Medium" style={{ fontSize: 18, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Body1 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Regular" style={{ fontSize: 16, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Body2 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Regular" style={{ fontSize: 14, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Caption1 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Regular" style={{ fontSize: 13, ...style }}>
      {children}
    </DefaultText>
  );
};

export const Caption2 = ({ children, style }: TextProps) => {
  return (
    <DefaultText weight="Regular" style={{ fontSize: 12, ...style }}>
      {children}
    </DefaultText>
  );
};
