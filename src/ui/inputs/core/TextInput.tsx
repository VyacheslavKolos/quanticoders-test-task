import { FocusEvent, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import useToggle from '../../../hooks/useToggle';
import { IconKeys } from '../../constants/icons';
import Icon from '../../Icon';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  iconKey?: IconKeys;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  keepRightChildOnError?: boolean;
  hasError?: boolean;
  inputClassName?: string;
};

const TextInput = forwardRef<TextInputProps, TextInputProps>(
  (
    {
      type = 'text',
      className,
      inputClassName,
      disabled,
      hasError,
      iconKey,
      onBlur,
      onFocus,
      rightChild,
      leftChild,
      keepRightChildOnError,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [isFocused, , focus, unfocus] = useToggle(false);

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      unfocus();
      if (onBlur) onBlur(e);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      focus();
      if (onFocus) onFocus(e);
    };

    return (
      <div
        className={classNames(
          {
            focused: isFocused,
            error: hasError,
            'focused-error': hasError && isFocused,
            disabled,
          },
          'input-border-wrapper transition-all bg-white',
          'flex items-center gap-[8px] px-[14px]',
          className,
        )}
        onClick={onClick}
      >
        {leftChild}

        {iconKey && <Icon iconKey={iconKey} className="!w-[20px] !h-[20px] text-gray-200" />}

        <input
          ref={ref as any}
          type={type}
          disabled={disabled}
          className={classNames(
            'flex-1 rounded-[inherit] w-[inherit] py-[10px] pb-[10px] disabled:!text-gray-300 bg-blue-100',
            inputClassName,
            {
              '!text-gray-new-300 placeholder:!text-gray-new-300 !bg-secondary !shadow-none':
                disabled,
            },
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {/* eslint-disable-next-line no-nested-ternary */}
        {!keepRightChildOnError ? (hasError ? null : rightChild) : rightChild}
      </div>
    );
  },
);

export default TextInput;
