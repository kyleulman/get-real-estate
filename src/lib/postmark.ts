import { VITE_POSTMARK_TOKEN } from '$env/static/private';
import { ServerClient } from 'postmark';

export const postmarkClient = new ServerClient(VITE_POSTMARK_TOKEN);
