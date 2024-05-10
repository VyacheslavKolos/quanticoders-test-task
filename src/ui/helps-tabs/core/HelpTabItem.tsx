import { FC } from 'react';
import classNames from 'classnames';
import Flex from '../../layout/Flex.tsx';
import ButtonTitle from '../../typography/ButtonTitle.tsx';
import { IHelpTab } from '../index.tsx';
import Icon from '../../Icon.tsx';

type Props = {
  tab: IHelpTab;
  active?: boolean;
  onClick?: () => void;
};

const HelpTabItem: FC<Props> = ({ tab: { title, iconKey }, active, onClick }) => (
  <Flex.Wrapper
    iCenter
    className={classNames('w-[250px] group cursor-pointer transition-colors')}
    onClick={onClick}
  >
    <Flex.Wrapper iCenter jCenter gap="10px">
      <Flex.Wrapper
        className={classNames('p-4 border-2 border-gray-300 rounded-md', {
          'bg-additional-100 !border-additional-100': active,
        })}
      >
        <Icon
          iconKey={iconKey}
          className={classNames('text-gray-300 w-[48px] h-[48px]', {
            'text-white': active,
          })}
        />
      </Flex.Wrapper>
      <ButtonTitle
        className={classNames(' text-subtitle text-gray-300 !text-h4', {
          '!text-blue-100 rounded-tl-sm rounded-bl-sm': active,
        })}
      >
        {title}
      </ButtonTitle>
    </Flex.Wrapper>
  </Flex.Wrapper>
);

export default HelpTabItem;
