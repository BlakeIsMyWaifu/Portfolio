import About from 'pages/About'
import Contact from 'pages/Contact'
import Hero from 'pages/Hero'
import Projects from 'pages/Projects'
import Skills from 'pages/Skills'
import { FC } from 'react'

import Footer from './Footer'
import { HomeContainer } from './Home-Elements'

const Home: FC = () => {
	return (
		<HomeContainer>
			<Hero />
			<Projects />
			<Skills />
			<About />
			<Contact />
			<Footer />
		</HomeContainer>
	)
}

export default Home