import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const TextColours = css`
	color: #F2E9E4;
	text-decoration: none;
	&:hover {
		color: #C9ADA7;
	}
`

export const Container = styled.div`
	width: 300px;
	height: 100%;
	background-color: #22223B;
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
