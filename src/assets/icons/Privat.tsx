import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Privat: FC<Props> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('w-[24px] h-[24px]', className)}
  >
    <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="21.5" />
      <path
        stroke="currentColor"
        strokeWidth="currentStrokWidth"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m35.548 33.5-.001-19-10.197 12.762h12.588"
      />
      <path
        stroke="currentColor"
        strokeWidth="currentStrokWidth"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.0625 20.7938a6.2938 6.2938 0 1 1 12.5875 0 5.872 5.872 0 0 1 -1.8434 4.45c-2.5461 2.2347-10.7441 8.2562-10.7441 8.2562h12.5875"
      />
    </g>
  </svg>
);
export default Privat;
