import { fail } from '@sveltejs/kit';
import isEmail from 'validator/lib/isEmail';
import type { Actions } from './$types';
import { mongoClient } from '$lib/mongodb';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = (formData.get('email') || '') as string;

		if (isEmail(email) === false) {
			return fail(400, { error: 'Please enter a valid email.' });
		}

		if ((await findOneByEmail(email)) !== null) {
			return fail(400, { error: 'This email already exists, please try a different email.' });
		}

		const result = await insertOneEmail(email);

		if (result.acknowledged === true && result.insertedId) {
			// send email
			return {
				message: 'Thanks for your interest! Please expect an email with details shortly. -Kyle'
			};
		}

		return fail(500, {
			error: `An unexpected error occurred. Please try again in a few minutes or let me know about it by sending a message to <a href="mailto:kyle@getreal.estate" class="underline">kyle@getreal.estate</a>.`
		});
	}
};

async function findOneByEmail(email: string) {
	try {
		await mongoClient.connect();
		return await mongoClient.db('get-real-estate').collection('leads').findOne({ email: email });
	} finally {
		await mongoClient.close();
	}
}

async function insertOneEmail(email: string) {
	try {
		await mongoClient.connect();
		return await mongoClient.db('get-real-estate').collection('leads').insertOne({ email: email });
	} finally {
		await mongoClient.close();
	}
}
