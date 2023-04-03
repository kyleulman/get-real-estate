import { fail } from '@sveltejs/kit';
import isEmail from 'validator/lib/isEmail';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = (formData.get('email') || '') as string;

		if (isEmail(email) === false) {
			return fail(400, { error: 'Please enter a valid email.' });
		}

		// send email

		return {
			message: 'Thanks for your interest! Please expect an email with details shortly. -Kyle'
		};
	}
};
