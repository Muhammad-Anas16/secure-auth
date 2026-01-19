import { MongoClient } from "mongodb";
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { betterAuth } from 'better-auth';

const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db();

export const auth = betterAuth({
	database: mongodbAdapter(db, { client }),
	emailAndPassword: {
		enabled: true,
	},
	// user: {
	// 	additionalFields: {
	// 		bio: {
	// 			type: "string",
	// 			required: false,
	// 			defaultValue: "New user",
	// 		},
	// 	},
	// },
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		},
		github: {
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		},
	},
});