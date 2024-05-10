import { FC, ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Backdrop: FC<Props> = ({ children, className }) => (
  <div
    className={classNames(
      'fixed top-0 left-0 right-0 bottom-0 ',
      'w-full h-screen z-50 overflow-hidden bg-gray-400 opacity-100 ',
      'flex flex-col items-center justify-center',
      className,
    )}
  >
    {children}
  </div>
);

export default Backdrop;
