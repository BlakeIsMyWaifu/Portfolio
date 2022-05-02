import { FC } from 'react'
import { IconContext } from 'react-icons'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { cream } from 'utils/colours'

import { BackPadding, BottomLinkContainer, IconContainer, IconLink, PageLink, PageLinkContainer, ResumeLink, SidebarContainer } from './Sidebar-Elements'

const Sidebar: FC = () => {

	const scrollToSection = (event: React.MouseEvent<HTMLInputElement>): void => {
		event.preventDefault()
		const id = event.currentTarget.value.toLowerCase()
		const el = document.getElementById(id)
		el?.scrollIntoView()
	}

	return (
		<>
			<SidebarContainer>

				<PageLinkContainer>
					<PageLink type='button' value='Home' onClick={scrollToSection} />
					<PageLink type='button' value='About' onClick={scrollToSection} />
					<PageLink type='button' value='Skills' onClick={scrollToSection} />
					<PageLink type='button' value='Contact' onClick={scrollToSection} />
					<PageLink type='button' value='Projects' onClick={scrollToSection} />
				</PageLinkContainer>

				<BottomLinkContainer>

					<ResumeLink>Résumé</ResumeLink>

					<IconContainer>

						<IconContext.Provider value={{
							color: cream,
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
			</SidebarContainer>

			<BackPadding />
		</>
	)
}

export default Sidebar