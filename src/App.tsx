import { Container } from 'App-Elements'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import AppRoutes from 'routes/AppRoutes'

const App: React.FC = () => {
	return (
		<Container>
			<AnimatePresence exitBeforeEnter>
				<AppRoutes />
			</AnimatePresence>
		</Container>
	)
}

export default App
