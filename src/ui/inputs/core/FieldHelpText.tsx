import { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ClassName } from '../../../constants/types/prop.types.ts';
import Subtitle from '../../typography/Subtitle.tsx';

export interface IHelpText {
  key: string;
  values?: { [key: string]: any };
}

type Props = ClassName & {
  error?: boolean;
  text: IHelpText | string;
};

const FieldHelpText: FC<Props> = ({ text, error, className }) => {
  const { t } = useTranslation('shared/validation');

  return (
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
      {typeof text === 'string' ? text : t(text.key, text.values)}
    </Subtitle>
  );
};

export default FieldHelpText;
