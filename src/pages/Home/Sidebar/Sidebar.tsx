import useIsMobile from 'hooks/useIsMobile'
import { FC } from 'react'
import { IconContext } from 'react-icons'

import SectionLink from './SectionLink'
import { BackPadding, BottomLinkContainer, CVLink, EnvelopeIcon, GithubIcon, IconContainer, IconLink, SectionLinkContainer, SidebarContainer } from './Sidebar-Elements'

interface SidebarProps {
	setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ setSidebarVisible }) => {

	const isMobile = useIsMobile()

	return (
		<>
			<SidebarContainer isMobile={isMobile}>

				<SectionLinkContainer>
					<SectionLink section='Home' setSidebarVisible={setSidebarVisible} />
					<SectionLink section='Projects' setSidebarVisible={setSidebarVisible} />
					<SectionLink section='Skills' setSidebarVisible={setSidebarVisible} />
					<SectionLink section='About' setSidebarVisible={setSidebarVisible} />
					<SectionLink section='Contact' setSidebarVisible={setSidebarVisible} />
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

			<BackPadding isMobile={isMobile} />
		</>
	)
}

export default Sidebar