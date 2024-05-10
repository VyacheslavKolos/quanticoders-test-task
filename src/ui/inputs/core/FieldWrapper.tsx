import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import FieldHelpText, { IHelpText } from './FieldHelpText.tsx';

export type FieldWrapperProps = {
  children: ReactNode;
  label?: string;
  forId?: string;
  error?: boolean;
  helpText?: IHelpText | string;
  className?: string;
  errorClassName?: string;
  required?: boolean;
};

const FieldWrapper: FC<FieldWrapperProps> = ({
  children,
  label,
  forId,
  error,
  helpText,
  className,
  errorClassName,
  required,
}) => (
  <div className={classNames('w-full flex flex-col items-start gap-y-[6px]', className)}>
    {label && (
      <label htmlFor={forId} className={classNames('font-lexend text-subtitle text-gray-200')}>
        {label}
        {required && <span className="text-system-200">*</span>}
      </label>
    )}

    {children}

    {helpText && <FieldHelpText text={helpText} error={error} className={errorClassName} />}
  </div>
);

export default FieldWrapper;
