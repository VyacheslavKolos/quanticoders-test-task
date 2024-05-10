import { FC } from 'react';
import classNames from 'classnames';

import Spinner from '../../Spinner';
import { BaseButtonProps, ButtonSizes } from './BaseButton/types';

type Props = Pick<BaseButtonProps, 'size' | 'spinnerClassName'>;

const ButtonSpinner: FC<Props> = ({ size, spinnerClassName }) => (
  <div className="absolute top-1/2 -translate-y-1/2 left-4">
    <Spinner
      className={classNames(
        {
          'w-4 h-4': size === ButtonSizes.Normal,
          'w-6 h-6': size === ButtonSizes.Middle,
        },
        spinnerClassName,
      )}
    />
  </div>
);

export default ButtonSpinner;
