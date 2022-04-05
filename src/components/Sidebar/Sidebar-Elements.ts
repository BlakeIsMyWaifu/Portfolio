import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { cream, deepBlue, silverPink } from 'utils/colours'

const TextColours = css`
	color: ${cream};
	text-decoration: none;
	&:hover {
		color: ${silverPink};
	}
`

export const Container = styled.div`
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

export const PageLink = styled(Link)`
	${TextColours}
	font-size: 3.5rem;
	transition: margin 200ms;
	margin-left: 8px;
	&:hover {
		margin-left: 24px;
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
