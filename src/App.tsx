import { Container } from 'App-Elements'
import Sidebar from 'components/Sidebar'
import React from 'react'
import AppRoutes from 'routes/AppRoutes'

const App: React.FC = () => {
	return (
		<Container>
			<Sidebar />
			<AppRoutes />
		</Container>
	)
}

export default App
