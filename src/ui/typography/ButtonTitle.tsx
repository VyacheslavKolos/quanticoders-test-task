import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  className?: string;
};

const ButtonTitle: FC<Props> = ({ children, className }) => (
  <span className={classNames('font-lexend text-button-title', className)}>{children}</span>
);

export default ButtonTitle;
