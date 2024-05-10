import { createElement, FC, HTMLAttributes } from 'react';
import { IconComponents, IconKeys } from './constants/icons';

type Props = HTMLAttributes<HTMLOrSVGElement> & {
  iconKey: IconKeys;
  className?: string;
};

const Icon: FC<Props> = ({ iconKey, className, ...props }) => (
  <>{createElement(IconComponents[iconKey], { className, ...props })}</>
);

export default Icon;
