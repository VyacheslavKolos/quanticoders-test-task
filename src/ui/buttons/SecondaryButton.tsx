import { FC } from 'react';
import classNames from 'classnames';

import BaseButton from './core/BaseButton';
import { BaseButtonProps } from './core/BaseButton/types';

type Props = BaseButtonProps;

const SecondaryButton: FC<Props> = ({ children, className, ...props }) => (
  <BaseButton
    {...props}
    className={classNames(
      'group bg-gray-500 text-black',
      'hover:text-primary transition-all',
      'disabled:shadow-gray-400 disabled:pointer-events-none disabled:text-gray-300',
      className,
    )}
    spinnerClassName="!text-gray-300 fill-white"
  >
    {children}
  </BaseButton>
);

export default SecondaryButton;
