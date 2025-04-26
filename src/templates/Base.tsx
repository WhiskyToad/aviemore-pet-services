import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Reviews } from './Reviews';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Reviews />
    <VerticalFeatures />

    {/* Facebook Promotion Section */}
    <div className="bg-blue-100 py-12 text-center">
      <div className="container mx-auto px-4">
        <h3 className="mb-4 text-2xl font-semibold text-gray-900">
          Love Pet Photos?
        </h3>
        <p className="mb-6 text-xl">
          Want to see adorable pets in amazing Aviemore locations? Follow us on
          Facebook for daily dose of cuteness!
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=61557780885635"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          <svg
            className="mr-2 size-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
          Follow Us on Facebook
        </a>
      </div>
    </div>

    <div id="contact" className="bg-gray-100">
      <Banner />
    </div>
    <Footer />
  </div>
);

export { Base };
