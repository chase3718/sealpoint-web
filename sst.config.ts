/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'sealpoint-web',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			protect: ['production'].includes(input?.stage),
			home: 'aws'
		};
	},
	async run() {
		const bucket = new sst.aws.Bucket('MyBucket', {
			access: 'public'
		});
		new sst.aws.SvelteKit('MyWeb', {
			link: [bucket]
		});
	}
});
