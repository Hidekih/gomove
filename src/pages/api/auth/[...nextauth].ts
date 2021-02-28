import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import 'dotenv/config';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);