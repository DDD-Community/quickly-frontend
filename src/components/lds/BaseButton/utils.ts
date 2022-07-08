import { ButtonTypes } from '@components/lds/BaseButton/types';
import styles from './styles';

export const buildStyle = (type: ButtonTypes, disabled?: boolean) => {
  if (disabled) {
    return styles.disabled;
  }

  switch (type) {
    case ButtonTypes.primary:
      return styles.primary;
    case ButtonTypes.secondary:
      return styles.secondary;
    case ButtonTypes.rounded:
      return styles.rounded;
    default:
      return {};
  }
};
