import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Subtitle2: FC<Props> = ({ children, className }) => (
  <p className={classNames('font-lexend text-subtitle2', className)}>{children}</p>
);

export default Subtitle2;
