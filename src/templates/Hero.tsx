import { useEffect } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Logo } from './Logo';

const Hero = () => {
  // Add smooth scrolling functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Background color="bg-gray-100">
      <div className="text-center">
        <Logo xl />
      </div>

      {/* Hero Image Section */}
      <div className="relative mx-0 flex min-h-[500px] items-center justify-center bg-[url('/assets/images/banner.png')] bg-cover bg-center bg-no-repeat py-12 md:min-h-[600px]">
        {/* Softer overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        {/* Centered Text */}
        <header className="relative z-10 mx-4 max-w-4xl rounded-xl border-4 border-white/30 bg-white/95 px-6 py-10 text-center shadow-2xl md:px-12 md:py-14">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Trusted Pet Care
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-700 md:text-xl">
            Covering Aviemore, Carrbridge, Boat of Garten and Glenmore area
          </p>
          <p className="mt-3 text-xl font-semibold text-primary-600 md:text-2xl">
            Keeping your pets happy
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:katy@aviemorepetservices.co.uk"
              aria-label="Email Katy"
            >
              <Button xl>Email Katy</Button>
            </a>
            <a href="tel:+447443656966" aria-label="Call Katy">
              <Button xl>Call Katy</Button>
            </a>
          </div>
        </header>
      </div>

      {/* Description Below */}
      <p className="mx-auto mt-8 max-w-screen-md px-6 pb-8 text-center text-lg leading-relaxed text-gray-800">
        Fully insured and police checked dog walker providing group and solo
        walks on a regular or adhoc basis. Cat and other pet Pop in Services
        available providing trusted care for your beloved pets in your home
        whilst you are away.
      </p>
    </Background>
  );
};

export { Hero };
