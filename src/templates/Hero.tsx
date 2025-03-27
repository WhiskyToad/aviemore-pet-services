import { Background } from '../background/Background';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <div className="text-center">
      <Logo xl />
    </div>

    {/* Hero Image Section */}
    <div className="relative mx-0 flex h-[500px] items-center justify-center bg-[url('/assets/images/banner.png')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Centered Text */}
      <header className="relative z-10 max-w-2xl px-6 text-center text-white">
        <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-2xl">
          Professional Pet Care Services in Aviemore
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-200 drop-shadow-md">
          Group Walks • Pet Sitting • Solo Walks
        </p>
      </header>
    </div>

    {/* Description Below */}
    <p className="mx-auto mt-8 max-w-screen-md px-6 pb-8 text-center text-lg leading-relaxed text-gray-800">
      Providing trusted, reliable pet care services in the heart of the
      Cairngorms. I offer professional dog walking, pet sitting, and customized
      care for your beloved pets.
    </p>
  </Background>
);

export { Hero };
