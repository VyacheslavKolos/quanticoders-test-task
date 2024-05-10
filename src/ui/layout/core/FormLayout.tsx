import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Flex from '../Flex.tsx';
import {
  YupCardNumber,
  YupCvv,
  YupEmail,
  YupFirstName,
  YupLastName,
  YupPhoneNumber,
  YupString,
  YupStringRequired,
} from '../../../constants/sсhemas.ts';

type Props = {
  children: ReactNode;
};

const validationSchema: any = yup.object().shape({
  adress: YupStringRequired(),
  city: YupStringRequired(),
  companyName: YupStringRequired(),
  country: YupStringRequired(),
  email: YupEmail(),
  name: YupFirstName(),
  phoneNumber: YupPhoneNumber(),
  postIndex: YupString(),
  state: YupString(),
  surname: YupLastName(),
  number1: YupCardNumber(),
  number2: YupCardNumber(),
  number3: YupCardNumber(),
  number4: YupCardNumber(),
  cvv: YupCvv(),
  term: YupStringRequired(),
});

const defaultValues = {
  adress: '',
  city: '',
  companyName: '',
  country: '',
  email: '',
  name: '',
  phoneNumber: '',
  postIndex: '',
  state: '',
  surname: '',
  number1: '',
  number2: '',
  number3: '',
  number4: '',
  cvv: '',
  term: '',
};

const FormLayout: FC<Props> = ({ children }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <FormProvider {...form}>
      <Flex.Wrapper column className="w-full">
        <Flex.Wrapper column jBetween iCenter className="w-full">
          {children}
        </Flex.Wrapper>
      </Flex.Wrapper>
    </FormProvider>
  );
};

export default FormLayout;
