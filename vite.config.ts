import react from '@vitejs/plugin-react'
import { PluginOption, defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { ViteTips } from 'vite-plugin-tips'
import tsConfigPaths from 'vite-tsconfig-paths'

const SVGHMR: PluginOption = {
	name: '',
	handleHotUpdate({ file, server }) {
		if (file.endsWith('.svg')) {
			server.ws.send({
				type: 'full-reload',
				path: '*'
			})
		}
	}
}

export default defineConfig({
	plugins: [
		SVGHMR,
		react(),
		eslintPlugin(),
		tsConfigPaths(),
		ViteTips()
	],
	publicDir: 'public'
})
