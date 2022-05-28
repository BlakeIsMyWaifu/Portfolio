import styled from 'styled-components'
import { cream, deepBlue, silverPink, zodiacBlue } from 'utils/colours'

interface Direction {
	right: boolean;
}

export const TileContainer = styled.div<Direction>`
	height: 300px;
	width: 60vw;
	background-color: ${zodiacBlue};
	display: flex;
	flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
	justify-content: space-between;
	z-index: 1;
	border-radius: 20px;
	align-self: ${props => props.right ? 'flex-end' : 'flex-start'};
	margin: 0 8vw;
`

export const TextWrapper = styled.div<Direction>`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: ${props => props.right ? 'right' : 'left'};
`

export const Thumbnail = styled.img`
	height: 280px;
	padding: 10px;
	border-radius: 20px;
`

export const Title = styled.h3`
	color: ${silverPink};
	font-size: 2.5rem;
	margin: 16px;
`

export const Description = styled.p<Direction>`
	background-color: ${deepBlue};
	color: ${cream};
	font-size: 1.5rem;
	padding: 8px;
	margin: ${props => props.right ? '0 -10px 0 0' : '0 0 0 -10px'};
`

export const StackWrapper = styled.span<Direction>`
	display: flex;
	flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
	gap: 8px;
	margin: 16px;
`

export const Stack = styled.p`
	color: ${cream};
`

export const CommitCount = styled.p<Direction>`
	color: ${cream};
	margin: 0 16px;
`

export const Buttons = styled.span<Direction>`
	display: flex;
	flex-direction: row;
	gap: 12px;
	align-self: ${props => props.right ? 'flex-end' : 'flex-start'};
	padding: 10px;
`

export const Button = styled.a`
	color: ${cream};
	cursor: pointer;
`