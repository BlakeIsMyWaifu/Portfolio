import styled from 'styled-components'
import { cream, deepBlue, silverPink } from 'utils/colours'

interface ContainerProps {
	right: boolean;
}

export const Container = styled.div<ContainerProps>`
	height: 300px;
	width: 80%;
	display: flex;
	flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
	justify-content: space-between;
`

export const TextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
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

export const Description = styled.p`
	background-color: ${deepBlue};
	color: ${cream};
	font-size: 1.5rem;
	padding: 8px;
`

export const StackWrapper = styled.span`
	display: flex;
	flex-direction: row;
	gap: 8px;
	margin: 16px;
`

export const Stack = styled.p`
	color: ${cream};
`

export const Buttons = styled.span`
	display: flex;
	flex-direction: row;
	gap: 12px;
	align-self: flex-end;
	padding: 10px;
`

export const Button = styled.a`
	color: ${cream};
	cursor: pointer;
`