import { FC } from 'react';
import classNames from 'classnames';

import ButtonIconsBody from '../ButtonIconsBody';
import ButtonSpinner from '../ButtonSpinner';

import addClassNameToIcon from '../../helpers/add-classname-to-icon';
import { BaseButtonProps, ButtonSizes } from './types';

const BaseButton: FC<BaseButtonProps> = ({
  size = ButtonSizes.Middle,
  isLoading,
  leftIcon,
  rightIcon,

  className,
  spinnerClassName,
  iconClassName,

  type = 'button',
  disabled,
  children,
  iconsBodyClass,
  ...props
}) => {
  const getButtonBody = () => {
    if (leftIcon || rightIcon) {
      return (
        <ButtonIconsBody
          className={iconsBodyClass}
          rightIcon={rightIcon ? addClassNameToIcon(rightIcon, iconClassName) : undefined}
          leftIcon={leftIcon ? addClassNameToIcon(leftIcon, iconClassName) : undefined}
        >
          {children}
        </ButtonIconsBody>
      );
    }

    return children;
  };

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
      {isLoading && <ButtonSpinner spinnerClassName={spinnerClassName} size={size} />}

      {getButtonBody()}
    </button>
  );
};

export default BaseButton;
