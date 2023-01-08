// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";
// var nodeoutlook = require("nodejs-nodemailer-outlook");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "FRANS HETER JEG" });
  const status = await sendMail(req.body.email, req.body.message);
  if (status instanceof Error) res.status(200).json({ name: status.message });
  // nodeoutlook.sendEmail({
  //   auth: {
  //     user: "fransjoakim@outlook.com",
  //     pass: "fNg8ccjvsYcE6aepWd74",
  //   },
  //   from: "fransjoakim@outlook.com",
  //   to: "fransjlt@gmail.com",
  //   subject: "Hey you, awesome!",
  //   html: "<b>This is bold text</b>",
  //   text: "This is text version!",
  //   replyTo: "fransjoakim@outlook.com",
  //   onError: () => console.log("error"),
  //   onSuccess: () => console.log("success"),
  // });
}

const sendMail = async (
  email: string,
  message: string
): Promise<Error | String> => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "franskoder@gmail.com",
      pass: "vxngvzbfxstautpf",
    },
  });

  const options = {
    from: "franskoder@gmail.com",
    to: [email, "fransjlt@gmail.com", "fransjoakim@outlook.com"],
    subject: `Portfolio site contact: ${email}`,
    text: `sent message via portfolio site`,
    html: `<p>${email} sent you the following message via your portfolio site:</p>
          <p>${message}</p>`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    }
  });
  return "OK";
};
