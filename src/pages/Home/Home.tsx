import PageContainer from 'components/PageContainer'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Hero from 'pages/Hero'
import Projects from 'pages/Projects'
import Skills from 'pages/Skills'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<PageContainer>
			<Hero />
			<About />
			<Skills />
			<Contact />
			<Projects />
		</PageContainer>
	)
}

export default Home