import { VITE_MONGODB_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';

export const mongoClient = new MongoClient(VITE_MONGODB_URI);
