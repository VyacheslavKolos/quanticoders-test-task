import { useState } from 'react';
import Tabs from '../../../../ui/tabs';
import Flex from '../../../../ui/layout/Flex.tsx';
import IndividualFormFields from '../IndividualFormFields';

const TabsBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = ['Фіз. особа', 'Юр. особа'];
  const blocks = [<IndividualFormFields />, <IndividualFormFields />];

  return (
    <Flex.Wrapper iCenter column className="w-full">
      <Flex.Wrapper>
        <Tabs
          tabs={tabs}
          currentTab={tabs[activeIndex]}
          onChange={setActiveIndex}
          className="mt-6"
        />
      </Flex.Wrapper>

      {blocks[activeIndex]}
    </Flex.Wrapper>
  );
};

export default TabsBlock;
