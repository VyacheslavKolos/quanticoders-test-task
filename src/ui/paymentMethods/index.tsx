import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Flex from '../layout/Flex.tsx';
import { IconKeys } from '../constants/icons.ts';
import PaymentMethod from './core/PaymentMethod.tsx';
import Subtitle2 from '../typography/Subtitle2.tsx';
import Card from './core/Card.tsx';

export interface IMethod {
  iconKey: IconKeys;
  title: string;
  id: number;
}

const PaymentMethods = () => {
  const { setValue } = useFormContext();
  const [activeMethod, setActiveMethod] = useState(0);
  const helpsTabs: IMethod[] = [
    {
      iconKey: IconKeys.Visa,
      title: 'Карта Visa/Mastercard',
      id: 0,
    },
    {
      iconKey: IconKeys.Privat,
      title: 'Приват24',
      id: 1,
    },
    {
      iconKey: IconKeys.Atm,
      title: 'Термінали України',
      id: 2,
    },
    {
      iconKey: IconKeys.WebMoney,
      title: 'WebMoney',
      id: 3,
    },
    {
      iconKey: IconKeys.PayPal,
      title: 'Paypal',
      id: 4,
    },
  ];

  return (
    <div className="!max-w-[1230px]">
      <Flex.Wrapper jBetween iStart className="flex-wrap gap-x-[65px] gap-y-[24px]">
        <div className="flex-1 basis-[450px]">
          <Flex.Wrapper column gap="10px">
            <Subtitle2 className="text-gray-200">Спосіб оплати</Subtitle2>
            <Flex.Wrapper className=" flex-wrap gap-[20px] max-w-[700px] justify-center tablet:justify-start">
              {helpsTabs.map((tab, index) => (
                <PaymentMethod
                  tab={tab}
                  active={tab.id === activeMethod}
                  onClick={() => {
                    setValue('paymentMethod', tab.title);
                    setActiveMethod(index);
                  }}
                />
              ))}
            </Flex.Wrapper>
          </Flex.Wrapper>
        </div>

        <div className="min-w-[355px] flex-1">
          <Flex.Wrapper column gap="10px">
            <Subtitle2 className="text-gray-100">Ведіть наступні дані</Subtitle2>
            <Card />
          </Flex.Wrapper>
        </div>
      </Flex.Wrapper>
    </div>
  );
};

export default PaymentMethods;
