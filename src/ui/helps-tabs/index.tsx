import { ReactNode, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Flex from '../layout/Flex.tsx';
import TabItem from './core/HelpTabItem.tsx';
import { IconKeys } from '../constants/icons.ts';
import MainText from '../typography/MainText.tsx';
import PaymentMethods from '../paymentMethods';
import PrimaryButton from '../buttons/PrimaryButton.tsx';
import { ButtonSizes } from '../buttons/core/BaseButton/types.ts';

export interface IHelpTab {
  iconKey: IconKeys;
  title: string;
  content: ReactNode;
  id: number;
}

const HelpsTabs = () => {
  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  const [activeIndex, setActiveIndex] = useState(1);
  const helpsTabs: IHelpTab[] = [
    {
      iconKey: IconKeys.Hand,
      title: 'Зробити',
      content: <MainText>Зробити</MainText>,
      id: 0,
    },
    {
      iconKey: IconKeys.Wallet,
      title: 'Фінансова допомога',
      content: <PaymentMethods />,
      id: 1,
    },
    {
      iconKey: IconKeys.Clothes,
      title: 'Метеріальна допомога',
      content: <MainText>Матеріальна допомога</MainText>,
      id: 2,
    },
    {
      iconKey: IconKeys.Heart,
      title: 'Волонтерство',
      content: <MainText>Волонтерство</MainText>,
      id: 3,
    },
  ];

  const left = `${25 + 292 * activeIndex}px`;

  return (
    <Flex.Wrapper column className="mt-4 w-full">
      <Flex.Wrapper className="tablet:justify-between flex-wrap justify-center gap-4 tablet:gap-0">
        {helpsTabs.map((tab, index) => (
          <TabItem
            key={tab.id}
            tab={tab}
            active={tab.id === activeIndex}
            onClick={() => {
              setActiveIndex(index);
            }}
          />
        ))}
      </Flex.Wrapper>

      <Flex.Wrapper className="border-gray-100 border-[1px] rounded-md p-3 tablet:p-6 relative mt-6">
        {helpsTabs[activeIndex].content}

        <div className="hidden tablet:block triangle absolute top-[-21px] z-10" style={{ left }} />
      </Flex.Wrapper>

      <PrimaryButton
        size={ButtonSizes.Normal}
        className="max-w-[300px] mt-8 bg-gradient-line mx-auto"
        disabled={!isValid || !isDirty}
      >
        Допомогти
      </PrimaryButton>
    </Flex.Wrapper>
  );
};

export default HelpsTabs;
