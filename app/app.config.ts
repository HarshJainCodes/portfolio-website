export default defineAppConfig({
	ui: {
		link: {
			base: 'mx-5 text-2xl text-base font-medium',
			variants: {
				active: {
					false: 'text-off-white',
					true: 'text-off-white'
				}
			}
		}
	}
});
