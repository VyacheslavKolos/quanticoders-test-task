import { forwardRef } from 'react';

import TextInput, { TextInputProps } from '../core/TextInput.tsx';
import FieldWrapper, { FieldWrapperProps } from '../core/FieldWrapper.tsx';

export type TextFieldProps = Omit<FieldWrapperProps, 'children' | 'forId'> &
  Omit<TextInputProps, 'hasError'> & { wrapperClass?: string };

const TextField = forwardRef<TextFieldProps, any>(
  ({ label, id, error, helpText, required, wrapperClass, ...props }, ref) => (
    <FieldWrapper
      className={wrapperClass}
      label={label}
      forId={id}
      error={error}
      helpText={helpText}
      required={required}
    >
      <TextInput id={id} hasError={error} {...props} ref={ref} />
    </FieldWrapper>
  ),
);

export default TextField;
