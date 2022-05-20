import { FC } from 'react'
import { IconContext } from 'react-icons'

import SectionLink from './SectionLink'
import { BackPadding, BottomLinkContainer, CVLink, EnvelopeIcon, GithubIcon, IconContainer, IconLink, SectionLinkContainer, SidebarContainer } from './Sidebar-Elements'

const Sidebar: FC = () => {
	return (
		<>
			<SidebarContainer>

				<SectionLinkContainer>
					<SectionLink section='Home' />
					<SectionLink section='Projects' />
					<SectionLink section='Skills' />
					<SectionLink section='About' />
					<SectionLink section='Contact' />
				</SectionLinkContainer>

				<BottomLinkContainer>

					<CVLink>CV</CVLink>

					<IconContainer>

						<IconContext.Provider value={{
							size: '48'
						}}>

							<IconLink href='mailto:joel.dohmkaratjas@gmail.com' target='_blank' aria-label='Email' rel='noopener noreferrer'>
								<EnvelopeIcon />
							</IconLink>

							<IconLink href='https://github.com/BlakeIsMyWaifu' target='_blank' aria-label='Github' rel='noopener noreferrer'>
								<GithubIcon />
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