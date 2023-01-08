// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const status = await sendMail(req.body.email, req.body.message);
  if (status instanceof Error) res.status(200).json({ name: status.message });
}

const sendMail = async (
  email: string,
  message: string
): Promise<Error | String> => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "franskoder@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const options = {
    from: "franskoder@gmail.com",
    to: [email, `fransjlt@gmail.com`],
    subject: `Portfolio site contact: ${email}`,
    text: `${email} sent message via portfolio site`,
    html: `<p>${email} sent you the following message via your portfolio site:</p>
          <p>${message}</p>`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      return err;
    }
  });
  return "OK";
};
