import { FaEnvelope, FaGithub } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { cream, deepBlue, silverPink } from 'utils/colours'

export const TextColours = css`
	color: ${cream};
	text-decoration: none;
	&:hover {
		color: ${silverPink};
	}
`

interface SidebarContainerProps {
	isMobile: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
	width: ${props => props.isMobile ? '100vw' : '300px'};
	height: 100vh;
	background-color: ${deepBlue};
	position: fixed;
`

export const SectionLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 85%;
`

export const BottomLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const CVLink = styled.a`
	text-decoration: none;
`

export const CV = styled.p`
	${TextColours};
	font-size: 2rem;
	text-align: center;
	cursor: pointer;
`

export const IconContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 8px;
`

export const IconLink = styled.a``

export const EnvelopeIcon = styled(FaEnvelope)`
	${TextColours};
`

export const GithubIcon = styled(FaGithub)`
	${TextColours};
`

interface BackPaddingProps {
	isMobile: boolean;
}

export const BackPadding = styled.div<BackPaddingProps>`
	min-width: ${props => props.isMobile ? '100%' : '300px'};
	height: 100%;
`