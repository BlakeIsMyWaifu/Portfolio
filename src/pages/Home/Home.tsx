import Bubbles from 'components/Bubbles'
import useIsMobile from 'hooks/useIsMobile'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Hero from 'pages/Hero'
import Projects from 'pages/Projects'
import Skills from 'pages/Skills'
import { FC, useEffect, useState } from 'react'

import Footer from './Footer'
import { AppContainer, HomeContainer } from './Home-Elements'
import Sidebar from './Sidebar'
import ToggleSidebarButton from './ToggleSidebarButton/ToggleSidebarButton'

const Home: FC = () => {

	const isMobile = useIsMobile()

	const [sidebarVisible, setSidebarVisible] = useState(false)

	useEffect(() => {
		document.body.style.overflow = sidebarVisible ? 'hidden' : 'auto'
	}, [sidebarVisible])

	return (
		<AppContainer>
			{
				(!isMobile || sidebarVisible) && <Sidebar setSidebarVisible={setSidebarVisible} />
			}
			{
				isMobile && <ToggleSidebarButton sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
			}
			<HomeContainer display={!sidebarVisible}>
				<Hero />
				<Bubbles>
					<Projects />
					<Skills />
					<About />
					<Contact />
					<Footer />
				</Bubbles>
			</HomeContainer>
		</AppContainer>
	)
}

export default Home