import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { IconPositions, IconSetting } from './types';
import Icon from '../../../Icon';

export type ButtonIconsBodyProps = {
  children?: ReactNode;
  className?: string;

  leftIcon?: IconSetting;
  rightIcon?: IconSetting;
};

const ButtonIconsBody: FC<ButtonIconsBodyProps> = ({
  children,
  className,
  leftIcon,
  rightIcon,
}) => {
  const isSideIcon =
    (leftIcon || rightIcon) &&
    (leftIcon?.position === IconPositions.Side || rightIcon?.position === IconPositions.Side);

  return (
    <div className={classNames('flex items-center justify-center', className)}>
      <div
        className={classNames(' mr-[4px]', {
          'flex-1': isSideIcon,
        })}
      >
        {leftIcon && (
          <Icon
            iconKey={leftIcon.iconKey}
            className={classNames(
              'w-[18px] h-[18px]  stroke-[1.5px]',

              {
                'ml-auto': leftIcon?.position === IconPositions.Center,
                'mr-auto': leftIcon?.position === IconPositions.Side,
              },

              leftIcon.className,
            )}
          />
        )}
      </div>

      {children}

      <div
        className={classNames('ml-[4px]', {
          'flex-1': isSideIcon,
        })}
      >
        {rightIcon && (
          <Icon
            iconKey={rightIcon.iconKey}
            className={classNames(
              'w-[18px] h-[18px] stroke-[1.5px]',

              {
                'mr-auto': rightIcon?.position === IconPositions.Center,
                'ml-auto': rightIcon?.position === IconPositions.Side,
              },

              rightIcon.className,
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ButtonIconsBody;
