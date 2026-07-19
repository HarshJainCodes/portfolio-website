<template>
	<Uapp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Uapp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	setup() {
		const runtimeConfig = useRuntimeConfig();

		return {
			runtimeConfig
		};
	}
},
);
</script>
