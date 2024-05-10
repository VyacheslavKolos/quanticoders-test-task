import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Clothes: FC<Props> = ({ className }) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('w-[24px] h-[24px]', className)}
  >
    <path
      d="M133.3 33.41L77.89 47.25 34.6 148.3l33.29 22.2 27.46-54.9 17.05 4.9-15.07 150.1H245.2l9.2-87.9.9-8.1h4.5l-5.4-54.1 17.1-4.9 27.4 54.9 33.3-22.2-43.3-101.05-55.4-13.84c-5.5 3.87-12.2 6.21-19.5 7.95-9.4 2.21-20 3.24-30.6 3.24-10.6 0-21.2-1.03-30.6-3.24-7.3-1.74-14-4.07-19.5-7.95zM271.5 192.6l-1.5 14h178.8l-1.5-14zm-3.4 32l-26.7 254h62.7l46.5-216.9h17.6l46.5 216.9h62.7l-26.7-254z"
      stroke="currentColor"
      strokeWidth="currentStrokWidth"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Clothes;
