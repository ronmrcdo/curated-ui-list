import { ReactNode } from 'react';
import { ColorType, ColorTypes } from '../../utils/constants/colors';

type Props = {
  children?: ReactNode;
  colorType: ColorType;
};

function Badge({ children, colorType }: Props) {
  const getColorType = (): string => {
    switch (colorType) {
      case ColorTypes.INFO:
        return 'bg-indigo-200 text-indigo-600';
      case ColorTypes.WARN:
        return 'bg-amber-200 text-amber-600';
      case ColorTypes.DANGER:
        return 'bg-red-200 text-red-600';

      case ColorTypes.SUCCESS:
      default:
        return 'bg-green-200 text-green-600';
    }
  };

  return (
    <span
      className={`rounded-full text-xs items-center jusfiy-center px-2 py-1 ${getColorType()}`}
    >
      {children}
    </span>
  );
}

Badge.defaultProps = {
  children: null,
};

export default Badge;
