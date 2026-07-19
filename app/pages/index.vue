<template>
	<div class="w-full">
		<div class="h-[70dvh]">
			Hi
		</div>

		<div class="rest-of-content"/>

		<div class="h-dvh bg-blue-400">
			Hello
		</div>
	
		<div class="h-dvh bg-yellow-400">
			Hola
		</div>
	</div>
</template>

<script lang="ts">

import { onMounted } from 'vue';

export default defineComponent({
	name: 'MainPage',
	setup() {
		onMounted(() => {
			const observer = new IntersectionObserver((e: IntersectionObserverEntry[]) => {
				console.log('intersection observer triggered');
				console.log(e)

				const element = e[0]

				if (element?.isIntersecting) {
					// remove the fixed class
				} else {
					// add the fixed class
				}
			})

			observer.observe(document.querySelector('.rest-of-content') as Element);

		})

		return {
			
		};
	}
})
</script>