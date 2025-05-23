import { Button } from '../button/Button';

const Banner = () => {
  return (
    <div className="pt-8">
      <div className="mx-auto max-w-lg overflow-hidden rounded-lg border border-primary-200 bg-white p-8 text-center shadow-xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Get in Touch
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Questions? Ready to book a service for your pet? Get in touch with
          Katy directly!
        </p>

        <div className="flex flex-row justify-center gap-4">
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

        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>Email: katy@aviemorepetservices.co.uk</p>
          <p>Phone: +44 7443 656966</p>
        </div>
      </div>
    </div>
  );
};

export { Banner };
