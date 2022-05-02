import styled, { css } from 'styled-components'
import { cream, deepBlue, silverPink } from 'utils/colours'

const TextColours = css`
	color: ${cream};
	text-decoration: none;
	&:hover {
		color: ${silverPink};
	}
`

export const SidebarContainer = styled.div`
	width: 300px;
	height: 100%;
	background-color: ${deepBlue};
	position: fixed;
`

export const PageLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 85%;
`

export const PageLink = styled.input`
	${TextColours}
	font-size: 3.5rem;
	text-align: start;
	transition: margin 200ms;
	margin-left: 24px;
	border: none;
	background: transparent;
	&:hover {
		margin-left: 48px;
	}
`

export const BottomLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const ResumeLink = styled.p`
	${TextColours}
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

export const BackPadding = styled.div`
	min-width: 300px;
	height: 100%;
`