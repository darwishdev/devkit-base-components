
import { defineConfig } from 'vitepress'


export default defineConfig({
	base: '/',
	title: 'My Documentation',
	description: 'Documentation for My Project',

	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Components', link: '/components/' },
		],
		sidebar: {
			'/components/': [
				{ text: 'AppIcon', link: '/components/app-icon' },
				{ text: 'Button', link: '/components/button' },
				{ text: 'Input', link: '/components/input' },
				// Add more components as necessary
			],
		},
	},

	vite: {
		define: {
			'process.env': {
				VITE_API_URL: 'https://api.example.com', // Replace with your actual API URL
			},
		},
		plugins: [
			{
				name: 'configure-api-client',
				config() {
					// Provide the `iconFindApi` from the config
					const baseConfig = {
						apiClient: 'your-api-client', // Replace with your actual apiClient instance
						locales: ['en', 'ar'],
						iconFindApi: 'iconFind', // or your API client iconFind instance
					};

					// Apply the baseConfig to global context if needed, e.g., using inject
					return {
						define: {
							'window.BASE_CONFIG': JSON.stringify(baseConfig),
						},
					};
				},
			},
		],
	},
})

