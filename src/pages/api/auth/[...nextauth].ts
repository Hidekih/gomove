import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],

  async redirect(_, baseUrl) {
    return await baseUrl;
  },
}

export default async(req: NextApiRequest, res: NextApiResponse) => {
  await NextAuth(req, res, options);
}
  