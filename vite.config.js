import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/memory-game/',
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/tests/setup.js',
	},
})
