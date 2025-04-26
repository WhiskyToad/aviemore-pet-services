import { useState } from 'react';

import { Button } from '../button/Button';

const Banner = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | string>(null);

  // @ts-expect-error cba typing
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setSuccess('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSuccess('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md overflow-hidden rounded-lg border border-primary-200 bg-white p-8 shadow-xl"
    >
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
        Get in Touch
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Questions? Ready to book a service for your pet? We&apos;re here to
        help!
      </p>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block font-semibold text-gray-700"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="mb-2 block font-semibold text-gray-700"
        >
          How Can We Help?
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          placeholder="Tell us about your pet and service needs"
          required
        />
      </div>
      <Button type="submit" xl>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
      {success && (
        <p
          className={`mt-4 text-center text-sm ${success.includes('Error') ? 'text-red-500' : 'text-primary-600'}`}
        >
          {success}
        </p>
      )}
    </form>
  );
};

export { Banner };
