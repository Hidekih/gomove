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
    return baseUrl;
  },
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);