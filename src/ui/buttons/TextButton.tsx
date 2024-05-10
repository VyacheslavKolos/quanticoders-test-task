import { FC } from 'react';
import classNames from 'classnames';

import BaseButton from './core/BaseButton';
import { BaseButtonProps } from './core/BaseButton/types';

type Props = BaseButtonProps;

const TextButton: FC<Props> = ({ children, className, ...props }) => (
  <BaseButton
    {...props}
    className={classNames(
      'bg-white text-primary !rounded-[0px] !px-0 border-b-[1px] border-[transparent]',
      'hover:transition-all',
      'disabled:text-gray-300 disabled:pointer-events-none !min-h-[40px]',
      className,
    )}
    spinnerClassName="fill-gray-400"
  >
    {children}
  </BaseButton>
);

export default TextButton;
