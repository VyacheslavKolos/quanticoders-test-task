import HandIcon from '../../assets/icons/Hand.tsx';
import WalletIcon from '../../assets/icons/Wallet.tsx';
import ClothesIcon from '../../assets/icons/Clothes.tsx';
import HeartIcon from '../../assets/icons/Heart.tsx';
import VisaIcon from '../../assets/icons/Visa.tsx';
import PrivatIcon from '../../assets/icons/Privat.tsx';
import AtmIcon from '../../assets/icons/Atm.tsx';
import WebMoneyIcon from '../../assets/icons/WebMoney.tsx';
import PaypalIcon from '../../assets/icons/Paypal.tsx';

export enum IconKeys {
  Hand = 'hand',
  Wallet = 'wallet',
  Clothes = 'clothes',
  Heart = 'heart',
  Visa = 'visa',
  Privat = 'privat',
  Atm = 'atm',
  WebMoney = 'webmoney',
  PayPal = 'payPal',
}

export const IconComponents = {
  [IconKeys.Hand]: HandIcon,
  [IconKeys.Wallet]: WalletIcon,
  [IconKeys.Clothes]: ClothesIcon,
  [IconKeys.Heart]: HeartIcon,
  [IconKeys.Visa]: VisaIcon,
  [IconKeys.Privat]: PrivatIcon,
  [IconKeys.Atm]: AtmIcon,
  [IconKeys.WebMoney]: WebMoneyIcon,
  [IconKeys.PayPal]: PaypalIcon,
};
