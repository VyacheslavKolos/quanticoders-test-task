import classNames from 'classnames';
import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container: FC<Props> = ({ children, className }) => (
  <div className={classNames('container-x', className)}>{children}</div>
);

export default Container;
