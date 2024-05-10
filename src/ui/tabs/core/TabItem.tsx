import { FC } from 'react';
import classNames from 'classnames';
import Flex from '../../layout/Flex.tsx';
import ButtonTitle from '../../typography/ButtonTitle.tsx';

type Props = {
  title: string;
  active?: boolean;
  onClick?: () => void;
  isFirstElement: boolean;
};

const TabItem: FC<Props> = ({ title, active, isFirstElement, onClick }) => (
  <Flex.Wrapper
    iCenter
    className={classNames(
      'py-[8px] px-[20px] text-blue-100 group cursor-pointer transition-colors',
      {
        'text-white bg-blue-100  rounded-tl-sm rounded-bl-sm': active && isFirstElement,
        ' text-white bg-blue-100  rounded-tr-sm rounded-br-sm': active && !isFirstElement,
      },
    )}
    onClick={onClick}
  >
    <ButtonTitle className="whitespace-nowrap text-subtitle">{title}</ButtonTitle>
  </Flex.Wrapper>
);

export default TabItem;
