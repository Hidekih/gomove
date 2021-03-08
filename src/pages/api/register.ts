import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db, ObjectId } from 'mongodb';
import { URL } from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
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
  const { name, email, avatar_url, level, challengesCompleted, experience } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  let user = await collection.findOne({ email });

  if (!user) {
    await collection.insertOne({
      _id: new ObjectId(),
      name,
      email,
      avatar_url,
      challengesCompleted,
      level,
      experience
    });
  } else if(user) {
    await collection.findOneAndUpdate({ _id: user._id }, { $set: {
      name,
      email,
      avatar_url,
      challengesCompleted,
      level,
      experience
    }});
  }

  return response.json({ message: `Sucesso`});
}