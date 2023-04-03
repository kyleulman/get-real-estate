import { MongoClient } from 'mongodb';

export const mongoClient = new MongoClient(import.meta.env.VITE_MONGODB_URI);
