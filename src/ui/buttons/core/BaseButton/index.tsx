import { FC } from 'react';
import classNames from 'classnames';

import ButtonSpinner from '../ButtonSpinner';

import { BaseButtonProps, ButtonSizes } from './types';

const BaseButton: FC<BaseButtonProps> = ({
  size = ButtonSizes.Middle,
  isLoading,

  className,

  type = 'button',
  disabled,
  children,
  ...props
}) => {
  const buttonClassName = classNames(
    'w-full relative py-[8px] px-[16px] rounded-sm',
    'font-lexend text-button-title',
    {
      'min-h-[48px]': size === ButtonSizes.Normal,
      'min-h-[56px]': size === ButtonSizes.Middle,
      'cursor-not-allowed': isLoading,
    },
    className,
  );

  return (
    <button {...props} type={type} disabled={disabled || isLoading} className={buttonClassName}>
      {isLoading && <ButtonSpinner size={size} />}

      {children}
    </button>
  );
};

export default BaseButton;
