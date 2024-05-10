import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField, { TextFieldProps } from '../fields/TextField.tsx';

export type TextFieldControllerProps = Pick<
  TextFieldProps,
  | 'helpText'
  | 'label'
  | 'name'
  | 'iconKey'
  | 'placeholder'
  | 'type'
  | 'inputMode'
  | 'className'
  | 'inputClassName'
  | 'onKeyDown'
  | 'required'
  | 'rightChild'
  | 'leftChild'
  | 'disabled'
  | 'wrapperClass'
> & {
  maxLength?: number;
  onChange?: (e: any, onChange: any) => void;
  onBlur?: (e: any, onBlur: any) => void;
};

const TextFieldController: FC<TextFieldControllerProps> = ({
  name = 'field',
  helpText,
  maxLength,
  onChange,
  onBlur,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ...fieldProps }, fieldState: { error, isTouched } }) => (
        <TextField
          {...fieldProps}
          onChange={(e: any) => {
            if (maxLength && e.target.value.length > maxLength) {
              return;
            }

            if (onChange) {
              onChange(e, fieldProps.onChange);
              return;
            }

            fieldProps.onChange(e);
          }}
          onBlur={(e: any) => {
            if (onBlur) {
              return onBlur(e, fieldProps.onBlur);
            }

            fieldProps.onBlur();
          }}
          {...props}
          error={isTouched && !!error?.message}
          helpText={(isTouched && error?.message) || helpText}
        />
      )}
    />
  );
};

export default TextFieldController;
