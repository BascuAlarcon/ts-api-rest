import 'dotenv/config';
import mongoose, { connect } from 'mongoose';

const NODE_ENV = process.env.NODE_ENV; 

async function dbConnect(): Promise<void> {
	const DB_URI = <string>process.env.DB_URI;
	mongoose.set('strictQuery', false);
	await connect(DB_URI);
}

export default dbConnect;