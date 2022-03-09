import React, { Suspense, lazy } from 'react'
import { Route, MemoryRouter as Router, Routes } from 'react-router'

const Home = lazy(() => import('pages/Home'))
const About = lazy(() => import('pages/About'))
const Skills = lazy(() => import('pages/Skills'))
const Contact = lazy(() => import('pages/Contact'))
const Projects = lazy(() => import('pages/Projects'))

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<></>}>
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