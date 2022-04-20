import PageContainer from 'components/PageContainer'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Hero from 'pages/Hero'
import Projects from 'pages/Projects'
import Skills from 'pages/Skills'
import { FC } from 'react'
import { steel, vogue } from 'utils/colours'

import Footer from './Footer'

const Home: FC = () => {
	return (
		<PageContainer backgroundColour={`linear-gradient(${steel} 30%, ${vogue})`}>
			<Hero />
			<About />
			<Skills />
			<Contact />
			<Projects />
			<Footer />
		</PageContainer>
	)
}

export default Home