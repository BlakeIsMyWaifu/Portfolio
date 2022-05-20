import { AppContainer } from 'App-Elements'
import Github from 'components/Github/Github'
import Sidebar from 'components/Sidebar/Sidebar'
import Home from 'pages/Home'
import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App: FC = () => {
	return (
		<Router>
			<AppContainer>
				<Sidebar />
				<Home />
			</AppContainer>

			<Routes>
				<Route path='/github' element={<Github />} />
			</Routes>
		</Router>
	)
}

export default App
