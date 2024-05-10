import { FC } from 'react';
import classNames from 'classnames';

import BaseButton from './core/BaseButton';
import { BaseButtonProps } from './core/BaseButton/types';

type Props = BaseButtonProps;

const PrimaryButton: FC<Props> = ({ children, className, ...props }) => (
  <BaseButton
    {...props}
    className={classNames(
      'bg-primary text-white',
      'hover:shadow-solid-3 hover:shadow-additional-200 transition-all',
      'disabled:bg-gray-400 disabled:text-gray-200 disabled:pointer-events-none',
      className,
    )}
  >
    {children}
  </BaseButton>
);

export default PrimaryButton;
