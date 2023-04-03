import { mongoClient } from '$lib/mongodb';
import { postmarkClient } from '$lib/postmark';
import { error, fail } from '@sveltejs/kit';
import { formatInTimeZone } from 'date-fns-tz';
import isEmail from 'validator/lib/isEmail';
import type { Actions } from './$types';

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
			await sendNotification(email);

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

async function sendNotification(email: string) {
	const now = Date.now();
	const est = formatInTimeZone(now, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz');

	const htmlBody = `<p>A new lead was captured at ${est}. Their email address is ${email}. Good luck!</p>`;
	const textBody = `A new lead was captured at ${est}. Their email address is ${email}. Good luck!`;

	try {
		await postmarkClient.sendEmail({
			From: 'leads@getreal.estate',
			To: 'kyle@getreal.estate',
			Subject: 'You have a new lead!',
			HtmlBody: htmlBody,
			TextBody: textBody,
			MessageStream: 'outbound'
		});
	} catch (err) {
		throw error(500, JSON.stringify(err));
	}
}
