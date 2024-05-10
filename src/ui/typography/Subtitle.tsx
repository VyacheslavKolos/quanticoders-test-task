import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
  className?: string;
};

const Subtitle: FC<Props> = ({ children, className, ...props }) => (
  <p className={classNames('font-lexend text-subtitle', className)} {...props}>
    {children}
  </p>
);

export default Subtitle;
