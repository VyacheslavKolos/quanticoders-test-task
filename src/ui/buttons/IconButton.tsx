import { FC } from 'react';
import classNames from 'classnames';
import Icon from '../Icon.tsx';
import { IconKeys } from '../constants/icons.ts';
import BaseButton from './core/BaseButton';
import { BaseButtonProps } from './core/BaseButton/types.ts';

type Props = Omit<BaseButtonProps, 'children'> & {
  icon: IconKeys;
  iconClass?: string;
};

const IconButton: FC<Props> = ({ className, icon, iconClass, ...props }) => (
  <BaseButton
    className={classNames(
      'relative !p-0 !min-h-0 !w-fit text-gray-200 !rounded-[100px] transition-all ',
      'after:content-[""] after:w-[inherit] after:h-[inherit] after:p-[15px] after:hover:bg-gray-500 after:box-content',
      'after:block after:z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all',
      'after:rounded-[100px]',
      className,
    )}
    {...props}
  >
    <Icon iconKey={icon} className={classNames('relative z-[4]', iconClass)} />
  </BaseButton>
);

export default IconButton;
