import { ButtonHTMLAttributes } from 'react';

export enum ButtonSizes {
  Reset,
  Normal,
  Middle,
}

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  size?: ButtonSizes;
};
