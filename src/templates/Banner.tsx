import { Button } from '../button/Button';

const Banner = () => {
  return (
    <div className="pt-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg border border-primary-200 bg-white p-8 text-center shadow-xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Get in Touch
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Questions? Ready to book a service for your pet? Send Katy an email
          directly!
        </p>

        <a href="mailto:katy@aviemorepetservices.co.uk" aria-label="Email Katy">
          <Button xl>Email Katy</Button>
        </a>

        <p className="mt-4 text-sm text-gray-600">
          Or email directly at: katy@aviemorepetservices.co.uk
        </p>
      </div>
    </div>
  );
};

export { Banner };
