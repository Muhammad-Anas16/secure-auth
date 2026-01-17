import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const signUpUser = async (email, password, username) => {
	try {
		const { data, error } = await authClient.signUp.email({
			email,
			password,
			name: username,
			bio: "New user",
			image: "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png",
			callbackURL: "/"
		}, {
			onRequest: (ctx) => {
				console.log('Sign-up request started...');
			},
			onSuccess: (ctx) => {
				console.log('Sign-up successful!', ctx.data);
			},
			onError: (ctx) => {
				console.error('Sign-up failed:', ctx.error.message);
			},
		});

		if (error) {
			return {
				success: false,
				message: error.message || 'Sign-up failed',
				data: null,
				error: error
			};
		}

		return {
			success: true,
			message: 'Sign-up successful',
			data: data,
			error: null
		};

	} catch (err) {
		console.error('Sign-up failed:', err);
		return {
			success: false,
			message: 'An unexpected error occurred',
			data: null,
			error: err
		};
	}
};

export const signInUser = async (email, password) => {
	try {
		const { data, error } = await authClient.signIn.email({
			email,
			password,
			callbackURL: "/",
			rememberMe: true
		}, {
			onRequest: (ctx) => {
				console.log("Sign-in request started...");
			},
			onSuccess: (ctx) => {
				console.log("Sign-in successful!", ctx.data);
			},
			onError: (ctx) => {
				console.error("Sign-in failed:", ctx.error.message);
			},
		});

		if (error) {
			return {
				success: false,
				message: error.message || 'Sign-in failed',
				data: null,
				error: error
			};
		}

		return {
			success: true,
			message: 'Sign-in successful',
			data: data,
			error: null
		};
	} catch (err) {
		console.error('Sign-in failed:', err);
		return {
			success: false,
			message: 'An unexpected error occurred',
			data: null,
			error: err
		};
	}
};

export const signOutUser = async () => {
	try {
		const { data, error } = await authClient.signOut();

		if (error) {
			return {
				success: false,
				message: error.message || 'Sign-out failed',
				error: error
			};
		}

		return {
			success: true,
			message: 'Sign-out successful',
			error: null
		};
	} catch (err) {
		console.error('Sign-out failed:', err);
		return {
			success: false,
			message: 'An unexpected error occurred',
			error: err
		};
	}
};