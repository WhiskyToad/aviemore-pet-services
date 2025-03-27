import { useState } from 'react';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

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
      console.log(error);
      setSuccess('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md rounded-lg border-2 border-gray-100 bg-white p-8 shadow-xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Contact Me
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-2 px-4 py-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border-2 px-4 py-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
            required
          />
        </div>
        <Button type="submit" xl>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
        {success && (
          <p className="mt-4 text-center text-sm text-gray-700">{success}</p>
        )}
      </form>
    </Section>
  );
};

export { Banner };
