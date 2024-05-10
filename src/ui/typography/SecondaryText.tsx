import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
  className?: string;
};

const SecondaryText: FC<Props> = ({ children, className, ...props }) => (
  <p className={classNames('font-source-sans text-secondary-title', className)} {...props}>
    {children}
  </p>
);

export default SecondaryText;
