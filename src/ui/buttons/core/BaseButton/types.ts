import { ButtonHTMLAttributes } from 'react';
import { ButtonIconsBodyProps } from '../ButtonIconsBody';

export enum ButtonSizes {
  Reset,
  Normal,
  Middle,
}

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<ButtonIconsBodyProps, 'children'> & {
    isLoading?: boolean;
    size?: ButtonSizes;
    spinnerClassName?: string;
    iconClassName?: string;
  } & {
    iconsBodyClass?: string;
  };
