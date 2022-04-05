import PageContainer from 'components/PageContainer/PageContainer'
import Sidebar from 'components/Sidebar/Sidebar'
import { FC, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const About = lazy(() => import('pages/About'))
const Skills = lazy(() => import('pages/Skills'))
const Contact = lazy(() => import('pages/Contact'))
const Projects = lazy(() => import('pages/Projects'))

const AppRoutes: FC = () => {
	return (
		<Router>
			<Sidebar />
			<Suspense fallback={<PageContainer />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</Suspense>
		</Router>
	)
}

export default AppRoutes