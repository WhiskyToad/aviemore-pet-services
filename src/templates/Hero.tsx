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
      <div className="relative mx-0 flex h-[500px] items-center justify-center bg-[url('/assets/images/banner.png')] bg-cover bg-center bg-no-repeat">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Centered Text */}
        <header className="relative z-10 max-w-2xl rounded-lg bg-black bg-opacity-30 p-6 text-center text-white">
          <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Trusted Pet care In Aviemore and Surrounding Areas
          </h1>
          <p className="mt-4 text-2xl font-semibold text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
            Your Pet’s Happiness is my Priority
          </p>
          <a
            href="mailto:katy@aviemorepetservices.co.uk"
            className="mt-8 inline-block"
            aria-label="Email Katy"
          >
            <Button xl>Email Katy</Button>
          </a>
        </header>
      </div>

      {/* Description Below */}
      <p className="mx-auto mt-8 max-w-screen-md px-6 pb-8 text-center text-lg leading-relaxed text-gray-800">
        Fully insured and police-checked dog walker providing group and solo
        walks on a regular or adhoc basis. Also available is a pop-in service
        providing trusted care for your furry friends in your own home whilst
        you are away.
      </p>
    </Background>
  );
};

export { Hero };
