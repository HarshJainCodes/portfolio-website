<template>
	<div
		class="flex items-baseline text-2xl mx-auto justify-center font-bold p-5 w-[75%] h-20 align-center">
		<!-- My Name -->
		<ULink class="text-2xl" to="/">
			<span class="text-name-blue">Harsh</span>
			<span class="relative inline-block overflow-visible disable-select">
				<span class="opacity-0">
					m
				</span>
				<img
					src="/m.svg" 
					alt="M" 
					class="w-auto absolute"
					style="left: 50%; top: 2px; transform: translateX(-50%) rotate(-15deg) translateY(-10px)"			>
				<img src="/stroke.svg" class="h-[0.96rem] w-auto mx-auto absolute" style="left: 50%; top: 25px; transform: translateX(-50%)">
			</span>
			<span class="text-name-blue">Jain</span>
		</ULink>
	
		<!-- Navigation Links -->
		<div class="flex text-off-white">
			<ULink v-for="link in NAV_LINKS" :key="link.name" :to="link.to">
				{{ link.name }}
			</ULink>
		</div>
	</div>
</template>

<script lang="ts">
import { NAV_LINKS } from './constants';


export default defineComponent({
	name: 'TopNavigation',
	setup() {

		return { NAV_LINKS };
	}
});

</script>
