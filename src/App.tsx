import { AppContainer } from 'App-Elements'
import Sidebar from 'components/Sidebar/Sidebar'
import Home from 'pages/Home'
import { FC } from 'react'

const App: FC = () => {
	return (
		<AppContainer>
			<Sidebar />
			<Home />
		</AppContainer>
	)
}

export default App
