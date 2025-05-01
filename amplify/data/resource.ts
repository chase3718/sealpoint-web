import { a, ClientSchema, defineData } from '@aws-amplify/backend';

const schema = a.schema({
	Show: a
		.model({
			show_id: a.string().required(),
			address: a.string(),
			description: a.string(),
			show_time: a.timestamp(),
			thumbnail: a.url(),
			ticket_id: a.string(),
			venue_name: a.string(),
		})
		.authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: 'apiKey',
		apiKeyAuthorizationMode: {
			expiresInDays: 100,
		},
	},
});
