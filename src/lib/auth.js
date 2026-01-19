import { MongoClient } from "mongodb";
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { betterAuth } from 'better-auth';
import { sendEmailFuncton } from "./sendEmailFuncton";

const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db();

export const auth = betterAuth({
	database: mongodbAdapter(db, { client }),
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url, token }, request) => {
			void sendEmailFuncton({
				to: user.email,
				subject: "Reset your password",
				htmlContent: `<p>Click the link to reset your password: <a href="${url}">${url}</a></p>`,
			});
		},
		onPasswordReset: async ({ user }, request) => {
			// your logic here
			console.log(`Password for user ${user.email} has been reset.`);
		},
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		},
		github: {
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		},
		facebook: {
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		},
	},
});