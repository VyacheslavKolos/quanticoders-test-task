import { FC } from 'react';
import TextFieldController, { TextFieldControllerProps } from './TextFieldController.tsx';
import Flex from '../../layout/Flex.tsx';

import SecondaryText from '../../typography/SecondaryText.tsx';
import { onlyDigitsValidation } from '../../../constants/validation';

type Props = Pick<TextFieldControllerProps, 'name' | 'placeholder' | 'label' | 'required'>;

const PhoneNumberController: FC<Props> = ({ ...props }) => (
  <TextFieldController
    {...props}
    className="!pl-0"
    inputClassName="!pl-[6px]"
    maxLength={9}
    onKeyDown={(e) => {
      if (e.key === 'e') e.preventDefault();
    }}
    onChange={(e, onChange) => {
      const {
        target: { value },
      } = e;

      const numericValue = value.replace(onlyDigitsValidation, '');

      if (numericValue?.[0] === '0') {
        return onChange(numericValue.slice(1));
      }
      onChange(numericValue);
    }}
    leftChild={
      <Flex.Wrapper
        gap="8px"
        iCenter
        className="py-[10px] px-[12px] bg-gray-600 h-full rounded-l-md"
      >
        <SecondaryText>+380</SecondaryText>
      </Flex.Wrapper>
    }
  />
);

export default PhoneNumberController;
