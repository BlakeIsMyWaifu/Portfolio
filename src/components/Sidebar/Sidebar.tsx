import React from 'react'
import { IconContext } from 'react-icons'
import { FaEnvelope, FaGithub } from 'react-icons/fa'

import { BottomLinkContainer, Container, IconContainer, IconLink, PageLink, PageLinkContainer, ResumeLink } from './Sidebar-Elements'

const Sidebar: React.FC = () => {
	return (
		<Container>

			<PageLinkContainer>
				<PageLink to='/'>Home</PageLink>
				<PageLink to='/about'>About</PageLink>
				<PageLink to='/skills'>Skills</PageLink>
				<PageLink to='/contact'>Contact</PageLink>
				<PageLink to='/projects'>Projects</PageLink>
			</PageLinkContainer>

			<BottomLinkContainer>

				<ResumeLink>Résumé</ResumeLink>

				<IconContainer>

					<IconContext.Provider value={{
						color: '#F2E9E4',
						size: '48'
					}}>

						<IconLink href='mailto:joel.dohmkaratjas@gmail.com' target='_blank' aria-label='Email' rel='noopener noreferrer'>
							<FaEnvelope />
						</IconLink>

						<IconLink href='https://github.com/BlakeIsMyWaifu' target='_blank' aria-label='Github' rel='noopener noreferrer'>
							<FaGithub />
						</IconLink>

					</IconContext.Provider>

				</IconContainer>
			</BottomLinkContainer>
		</Container>
	)
}

export default Sidebar