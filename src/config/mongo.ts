import 'dotenv/config';
import mongoose, { connect } from 'mongoose';

const NODE_ENV = process.env.NODE_ENV;

async function dbConnect(): Promise<void> {
	// const DB_URI = 'mongodb+srv://user:password@cluster0.cdjwv.mongodb.net/db_name';
	const DB_URI = 'mongodb://localhost/ts-api-rest';
	mongoose.set('strictQuery', false);
	await connect(DB_URI);
}

export default dbConnect;