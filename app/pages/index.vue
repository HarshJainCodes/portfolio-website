<template>
	<div class="w-full">
		<div class="h-[70dvh]">
			Hi
		</div>

		<!-- This is the intersection observer -->
		<div class="rest-of-content"/>
		<!-- This navbar takes space and is hidden or shown to the users as triggered by intersection observer -->
		<TopNavigation
			class="fixed top-0 left-0 right-0" :class="{
				'opacity-0': !isFixed,
				'fade-in-transition': isFixed,
				'fade-out-transition': !isFixed
			}" />
	</div>
</template>

<script lang="ts">

import { onMounted } from 'vue';
import { useNavigationStore } from '~/stores/navigationStore';

export default defineComponent({
	name: 'MainPage',
	setup() {
		const { isFixed } = storeToRefs(useNavigationStore()); 

		onMounted(() => {
			const observer = new IntersectionObserver((e: IntersectionObserverEntry[]) => {
				console.log('intersection observer triggered');
				console.log(e);

				const element = e[0];

				if (element?.isIntersecting) {
					// remove the fixed class
					isFixed.value = false;
				} else {
					// add the fixed class
					isFixed.value = true;
				}
			});

			observer.observe(document.querySelector('.rest-of-content') as Element);
		});

		return {
			isFixed
		};
	}
});
</script>

<style scoped>
@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade-out {
	from {
		opacity: 1;
	} 
	to {
		opacity: 0;
	}
}

.fade-in-transition {
	animation: fade-in 100ms ease-in;
}

.fade-out-transition {
	animation: fade-out 100ms ease-in;
}
</style>
