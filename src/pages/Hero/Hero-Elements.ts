import styled from 'styled-components'
import { cream, silverPink, steel } from 'utils/colours'

export const Top = styled.div`
	height: 400px;
	margin: -16px;
	background: linear-gradient(to bottom, #757abf 0%,#8583be 35%,#eab0d1 100%);
`

export const Bottom = styled.div`
	height: calc(100vh - 400px);
	background-color: ${steel};
`

export const TextContainer = styled.div`
	padding: 32px;
	text-align: center;
`

export const TextHello = styled.h2`
	color: ${cream};
	font-size: 1rem;
	margin-left: 2rem;
`

export const TextName = styled.h1`
	color: ${silverPink};
	font-size: 4rem;
`

export const TextJobTitle = styled.h2`
	color: ${cream};
	font-size: 2rem;
	margin-left: 1rem;
`