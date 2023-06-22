import { MongoClient, Db } from 'mongodb';

const { MONGODB_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedClient) {
    return cachedClient.db();
  }

  const client = new MongoClient(MONGODB_URI!, options);

  if (!client.isConnected()) {
    await client.connect();
  }

  cachedClient = client;

  return client.db();
}
