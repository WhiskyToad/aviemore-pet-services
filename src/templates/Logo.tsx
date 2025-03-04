import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 130 : 32;
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src="/assets/images/aps_logo.png"
        alt="Aviemore Pets Logo"
        width={size}
        height={size}
        className="mr-1"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
