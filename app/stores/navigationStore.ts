import { defineStore } from "pinia";

export const useNavigationStore = defineStore('navigation', () => {
	const isFixed = ref(false);

	return {
		isFixed
	};
});
