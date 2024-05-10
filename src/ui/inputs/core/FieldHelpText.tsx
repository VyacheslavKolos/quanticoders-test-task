import { FC } from 'react';
import classNames from 'classnames';
import { ClassName } from '../../../constants/types/prop.types.ts';
import Subtitle from '../../typography/Subtitle.tsx';

type Props = ClassName & {
  error?: boolean;
  text: string;
};

const FieldHelpText: FC<Props> = ({ text, error, className }) => (
  <Subtitle
    className={classNames(
      'first-letter:uppercase !font-normal !font-source-sans',
      {
        '!text-system-200': error,
        '!text-gray-200': !error,
      },
      className,
    )}
  >
    {text}
  </Subtitle>
);

export default FieldHelpText;
