import type { NextApiRequest, NextApiResponse } from "next";

export type HttpEmailResponse = {
  message: string;
  ok: boolean;
};

const logger = (msg: string) => console.info(msg);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HttpEmailResponse>
) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Missing email",
      ok: false,
    });
  }

  try {
    await logger(req.body.email);
    return res
      .status(200)
      .json({ message: "Email successfully logged!", ok: true });
  } catch (error) {
    return res.status(400).json({
      message: "There was an error signing up.",
      ok: false,
    });
  }
}
