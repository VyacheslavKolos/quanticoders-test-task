import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type FlexWrapperProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;

  column?: boolean;
  gap?: string | number;

  jStart?: boolean;
  jEnd?: boolean;
  jCenter?: boolean;
  jBetween?: boolean;

  iStart?: boolean;
  iEnd?: boolean;
  iCenter?: boolean;

  className?: string;
  style?: Record<string, string | number>;
};

const FlexWrapper: FC<FlexWrapperProps> = forwardRef<HTMLDivElement, FlexWrapperProps>(
  (
    {
      column,
      jStart,
      jEnd,
      jCenter,
      jBetween,
      iStart,
      iEnd,
      iCenter,
      gap,
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={classNames(
        'flex flex-row',
        {
          'flex-col': column,

          'justify-start': jStart,
          'justify-end': jEnd,
          'justify-center': jCenter,
          'justify-between': jBetween,

          'items-start': iStart,
          'items-end': iEnd,
          'items-center': iCenter,
        },
        className,
      )}
      style={{ gap, ...style }}
      {...props}
    >
      {children}
    </div>
  ),
);

type FlexItemProps = {
  children?: ReactNode;

  basis?: number;
  className?: string;
};

const FlexItem: FC<FlexItemProps> = ({ basis, className, children }) => (
  <div className={classNames('', { [`basis-[${basis}]`]: !!basis }, className)}>{children}</div>
);

const Flex = { Wrapper: FlexWrapper, Item: FlexItem };

export default Flex;
