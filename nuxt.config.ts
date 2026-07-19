// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		port: 4000,
	},
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: [
		'@nuxt/eslint',
		'@nuxt/hints',
		'@nuxt/image',
		'@nuxt/test-utils',
		'@nuxt/ui',
		'@bubblesortt/nuxt-es-toolkit',
		'@hypernym/nuxt-anime',
		'@kgierke/nuxt-basic-auth',
		'@pinia/nuxt',
	],
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
		}
	},
});
