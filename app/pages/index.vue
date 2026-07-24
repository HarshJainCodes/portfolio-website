<template>
	<div class="w-full font-poppins">
		<div class="min-h-120 h-[70dvh] w-full mx-auto flex flex-col justify-center items-center relative bg-custom-grey">
			<!-- max-w scales with font size (rem-based), so zoom scales the whole container -->
			<div class="flex max-w-4xl w-[90%] z-4">
				<div class="flex-1 flex flex-col justify-center mr-3 min-w-0">
					<!-- clamp() for fluid typography: min 2rem, preferred 5vw, max 3.75rem -->
					<div class="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-tight">
						Hi there! I'm Harsh.
					</div>
		
					<div class="text-[clamp(1rem,1.5vw,1.25rem)] pt-15">
						<p>
							Nothing excites me more than learning a new technology.
						</p>
    
						<p class="pt-5">
							2+ years of experience building full-stack applications with frontend, backend, and everything in between. 
							<br> Lately I've been diving deep into the AI landscape.
						</p>
    
						<p class="pt-5">
							Currently a software developer at <ULink
								target="_blank"
								to="https://www.linkedin.com/company/energy-exemplar/posts/?feedView=all"
								class="mx-0 text-[clamp(1rem,1.5vw,1.25rem)] underline-offset-6 hover:no-underline underline decoration-name-blue decoration-2">
								Energy Exemplar.
							</ULink> 
						</p>
					</div>
				</div>

				<!-- Profile image: rem-based max-width so it scales with zoom -->
				<div class="w-[clamp(10rem,25vw,18rem)] shrink-0">
					<div class="mask-[radial-gradient(ellipse_90%_90%_at_50%_50%,black_30%,transparent_100%)]">
						<UColorModeImage
							:alt="'Profile photo'"
							dark="/profile_photo.jpg"
							loading="eager"
							light="/profile_pic.png"
							class="w-full h-auto object-cover select-none rounded-2xl"/>
					</div>
				</div>
			</div>

			<!-- clouds -->
			<!-- <div class="absolute w-full bottom-0 left-0 z-3 pointer-events-none select-none">
				<img
					class=""
					src="/cloud1.svg"
					alt="">
			</div> -->
		</div>



		<!-- This is the intersection observer -->
		<div class="rest-of-content"/>
		<!-- This navbar takes space and is hidden or shown to the users as triggered by intersection observer -->
		<!-- <TopNavigation
			class="fixed top-0 left-0 right-0"
			:class="{
				'opacity-0': !isFixed,
				'fade-in-transition': isFixed,
				'fade-out-transition': !isFixed
			}" /> -->

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
