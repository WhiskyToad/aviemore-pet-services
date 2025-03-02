import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <form className="mx-auto max-w-md rounded-lg border-2 border-gray-100 bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Contact Us
      </h2>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block font-semibold text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full rounded-lg border-2 px-4 py-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="mb-2 block font-semibold text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-lg border-2 px-4 py-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message"
        />
      </div>
      <Button>Send Message</Button>
    </form>
  </Section>
);

export { Banner };
