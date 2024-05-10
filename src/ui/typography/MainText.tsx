import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = Record<any, any> & {
  children?: ReactNode;
  className?: string;
};

const MainText: FC<Props> = ({ children, className, ...props }) => (
  <p className={classNames('font-source-sans text-main', className)} {...props}>
    {children}
  </p>
);

export default MainText;
