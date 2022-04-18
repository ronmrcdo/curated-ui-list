import { SizeType, sizeType } from '../../utils/constants/sizes';

type Props = {
  name: string;
  image: string;
  size?: sizeType;
};

function Avatar({ name, image, size }: Props) {
  const getSize = (): string => {
    switch (size) {
      case SizeType.XS:
        return 'w-3 h-3';
      case SizeType.SM:
        return 'w-6 h-6';
      case SizeType.LG:
        return 'w-16 h-16';
      case SizeType.XL:
        return 'w-24 h-24';
      case SizeType.MD:
      default:
        return 'w-10 h-10';
    }
  };

  return (
    <img
      className={`
        ${getSize()}
        rounded-full
        cursor-pointer
        shadow-lg
        ring-2
        ring-white
        dark:ring-dark-400
        z-20
        hover:z-50
        flex
        items-center
        justify-center
      `}
      src={image}
      alt={name}
    />
  );
}

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
