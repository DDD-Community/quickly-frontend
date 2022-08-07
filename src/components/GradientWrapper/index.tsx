import React, { ReactElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import s from './styles';
import * as t from './types';

const GradientWrapper = ({
  children,
  colors,
  angle,
  style,
  ...rest
}: t.GradientWrapperProps): ReactElement => {
  return (
    <LinearGradient
      {...rest}
      style={[s.container, style]}
      colors={colors}
      angle={angle}
      useAngle={true}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
