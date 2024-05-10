import { FC } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import Flex from '../layout/Flex.tsx';
import TabItem from './core/TabItem.tsx';
import { ClassName } from '../../constants/types/prop.types.ts';

export type TabsProps = ClassName & {
  currentTab: string;
  tabs: string[];
  onChange: (active: number) => void;
};

const Tabs: FC<TabsProps> = ({ tabs, currentTab, onChange, className = {} }) => {
  const { setValue } = useFormContext();
  return (
    <Flex.Wrapper className={classNames('border-2 border-blue-100 rounded-md', className)}>
      {tabs.map((tab, index) => (
        <TabItem
          key={tab}
          title={tab}
          active={tab === currentTab}
          isFirstElement={index === 0}
          onClick={() => {
            setValue('helpType', tab);
            onChange(index);
          }}
        />
      ))}
    </Flex.Wrapper>
  );
};

export default Tabs;
