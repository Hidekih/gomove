import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import { URL } from 'url';

let cachedDb: Db = null;

async function connectToDataBase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const parsedUrl = new URL(uri);

  const dbName = parsedUrl.pathname.substring(1);

  const db = client.db(dbName)

  cachedDb = db;

  return db;
}

export default async(request: NowRequest, response: NowResponse) => {
  const { email } = request.body;

  const db = await connectToDataBase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  const user = await collection.findOne(email);

  return response.status(302).json(user);
}