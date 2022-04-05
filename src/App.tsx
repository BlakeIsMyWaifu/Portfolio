import { Container } from 'App-Elements'
import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import AppRoutes from 'routes/AppRoutes'

const App: FC = () => {
	return (
		<Container>
			<AnimatePresence exitBeforeEnter>
				<AppRoutes />
			</AnimatePresence>
		</Container>
	)
}

export default App
