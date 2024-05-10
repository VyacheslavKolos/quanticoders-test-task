import * as yup from 'yup';
import { emailValidation, MIN_COMMON_LENGTH, onlyLettersValidation } from './validation.ts';

export const YupEmail = () =>
  yup
    .string()
    .required('Це поле не має бути пустим')
    .max(254, 'Email має бути не більше 254 символів')
    .matches(emailValidation, 'Некоректний email');

export const YupStringRequired = (max = 100, min = MIN_COMMON_LENGTH) =>
  yup
    .string()
    .trim()
    .required('Це поле не має бути пустим')
    .min(min, `Це поле має бути більше ${min} символів`)
    .max(max, `Це поле має бути не більше ${max} символів`);

export const YupString = (max = 100, min = MIN_COMMON_LENGTH) =>
  yup
    .string()
    .nullable()
    .transform((v, o) => (o === '' ? null : v))
    .min(min, `Це поле має бути більше ${min} символів`)
    .max(max, `Це поле має бути не більше ${max} символів`);

export const YupFirstName = () =>
  yup
    .string()
    .trim()
    .required('Це поле не має бути пустим')
    .max(100, 'Це поле має бути не більше 100 символів')
    .matches(onlyLettersValidation, 'Це поле має містити лише букви');

export const YupLastName = () =>
  yup
    .string()
    .trim()
    .required('Це поле не має бути пустим')
    .max(100, 'Це поле має бути не більше 100 символів')
    .matches(onlyLettersValidation, 'Це поле має містити лише букви');

export const YupPhoneNumber = () =>
  yup.string().required('Це поле не має бути пустим').min(9, 'Номер телефону має містити 9 цифр');

export const YupCardNumber = () =>
  yup.string().trim().length(4, '4 цифри').matches(/^\d+$/, 'Тільки цифри');

export const YupCvv = () =>
  yup.string().trim().length(3, '3 цифри').matches(/^\d+$/, 'Тільки цифри');
