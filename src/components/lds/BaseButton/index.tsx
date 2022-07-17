import React, { ReactNode } from 'react';
import { Button } from 'native-base';
import { Body2 } from '@components/lds/typography';
import { ThemeComponentSizeType } from 'native-base/lib/typescript/components/types';
import { buildStyle } from '@components/lds/BaseButton/utils';
import { ButtonTypes } from '@components/lds/BaseButton/types';
import {
  PrimaryColor,
  SingleToneColor,
} from '@components/lds/foundation-color';

interface ButtonProps {
  children: ReactNode;
  type?: ButtonTypes;
  disabled?: boolean;
  isRounded?: boolean;
}

export const BaseButton = ({
  children,
  disabled = false,
  type = ButtonTypes.primary,
}: ButtonProps) => {
  const style = buildStyle(type, disabled);
  const color =
    type === ButtonTypes.secondary
      ? PrimaryColor['500']
      : SingleToneColor.White;

  return (
    <Button style={style}>
      <Body2
        weight="Bold"
        style={{
          color,
        }}
      >
        {children}
      </Body2>
    </Button>
  );
};
