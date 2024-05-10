import { FC } from 'react';
import classNames from 'classnames';
import Flex from '../../layout/Flex.tsx';
import ButtonTitle from '../../typography/ButtonTitle.tsx';
import Icon from '../../Icon.tsx';
import { IMethod } from '../index.tsx';

type Props = {
  tab: IMethod;
  active?: boolean;
  onClick?: () => void;
};

const PaymentMethod: FC<Props> = ({ tab: { title, iconKey }, active, onClick }) => (
  <Flex.Wrapper
    iCenter
    jCenter
    className={classNames(
      'w-[160px] group cursor-pointer transition-colors bg-gray-400 rounded-md',
      {
        '!bg-additional-100': active,
      },
    )}
    onClick={onClick}
  >
    <Flex.Wrapper column iCenter gap="6px" className={classNames('p-3 rounded-md')}>
      <Icon iconKey={iconKey} className={classNames('text-white w-[48px] h-[48px]')} />
      <ButtonTitle className={classNames(' text-subtitle2 text-white')}>{title}</ButtonTitle>
    </Flex.Wrapper>
  </Flex.Wrapper>
);

export default PaymentMethod;
