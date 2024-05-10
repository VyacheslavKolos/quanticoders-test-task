import { IconKeys } from '../../../constants/icons';

export enum IconPositions {
  Center = 'center',
  Side = 'side',
}

export type IconSetting = {
  iconKey: IconKeys;
  position?: IconPositions;
  className?: string;
};

const generateIconsSet = (position = IconPositions.Side) => {
  const iconKeysEntries = Object.entries(IconKeys);

  return iconKeysEntries.reduce((acc, [iconName, iconKey]) => {
    acc[iconName as keyof typeof IconKeys] = (className?: string) => ({
      iconKey,
      position,
      className,
    });

    return acc;
  }, {} as IconSetItemsType);
};

type IconSetItemsType = Record<keyof typeof IconKeys, (className?: string) => IconSetting>;
type IconSetType = Record<`${IconPositions}`, IconSetItemsType>;

export const IconSet: IconSetType = {
  [IconPositions.Side]: generateIconsSet(IconPositions.Side),
  [IconPositions.Center]: generateIconsSet(IconPositions.Center),
};
