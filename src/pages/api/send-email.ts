import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  email: string;
  message: string;
}

interface ApiResponse {
  error?: string;
  success?: boolean;
  response?: any;
}

export default async function handler(
  req: { method: string; body: EmailRequest },
  res: {
    status: (code: number) => {
      json: (response: ApiResponse) => void;
    };
  },
): Promise<void> {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { email, message } = req.body;
    const response = await resend.emails.send({
      from: 'websitequery@resend.dev',
      to: process.env.RESEND_DELIVERY_EMAIL ?? '',
      subject: 'New Contact Form Submission',
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ success: true, response });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ error: errorMessage });
  }
}
