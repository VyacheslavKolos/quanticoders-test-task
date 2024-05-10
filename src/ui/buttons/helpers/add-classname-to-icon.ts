import classNames from 'classnames';
import { IconSetting } from '../core/ButtonIconsBody/types';

const addClassNameToIcon = ({ className, ...props }: IconSetting, newClassName?: string) => ({
  ...props,
  className: classNames(newClassName, className),
});

export default addClassNameToIcon;
