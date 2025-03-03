import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}
    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
