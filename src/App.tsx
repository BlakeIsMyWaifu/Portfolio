import Github from 'components/Github/Github'
import Home from 'pages/Home'
import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/github' element={<Github />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
