import HandIcon from '../../assets/icons/Hand.tsx';
import WalletIcon from '../../assets/icons/Wallet.tsx';
import ClothesIcon from '../../assets/icons/Clothes.tsx';
import HeartIcon from '../../assets/icons/Heart.tsx';

export enum IconKeys {
  Hand = 'hand',
  Wallet = 'wallet',
  Clothes = 'clothes',
  Heart = 'heart',
}

export const IconComponents = {
  [IconKeys.Hand]: HandIcon,
  [IconKeys.Wallet]: WalletIcon,
  [IconKeys.Clothes]: ClothesIcon,
  [IconKeys.Heart]: HeartIcon,
};
