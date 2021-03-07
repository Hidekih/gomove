import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db, Cursor } from 'mongodb';
import { URL } from 'url';

let cachedDb: Db = null;

async function connectToDataBase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const parsedUrl = new URL(uri);

  const dbName = parsedUrl.pathname.substring(1);

  const db = client.db(dbName)

  cachedDb = db;

  return db;
}

export default async(request: NowRequest, response: NowResponse) => {
  const db = await connectToDataBase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  // Porra man n ta escrito em lugar nenhum que a query precisa ser assim pqp.
  const users = await collection.find({}).toArray();

  return response.status(200).json(users);
}