// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	// Your custom configs here
	{
		rules: {
			'indent': ['error', 'tab'],
			'vue/html-indent': ['error', 'tab'],
			'vue/no-async-in-computed-properties': ['error'],
			'vue/no-mutating-props': ['error'],
			'vue/no-deprecated-destroyed-lifecycle': ['error'],
			'vue/no-deprecated-dollar-listeners-api': ['error'],
			'vue/no-deprecated-dollar-scopedslots-api': ['error'],
			'vue/no-deprecated-events-api': ['error'],
			'vue/no-deprecated-v-on-native-modifier': ['error'],
			'vue/no-deprecated-v-on-number-modifiers': ['error'],
			'vue/no-v-for-template-key-on-child': ['error'],
			'vue/prefer-import-from-vue': ['error'],
			'vue/require-slots-as-functions': ['error'],
			'vue/require-toggle-inside-transition': ['error'],
			'vue/attribute-hyphenation': ['error', 'always'],
		}
	}
)
