import styled from 'styled-components'
import { silverPink } from 'utils/colours'

export const Container = styled.div``

export const Title = styled.h3`
	color: ${silverPink};
`

export const BarWrapper = styled.div`
	width: 40vw;
	height: 8px;
	position: relative;
	border-radius: 8px;
`

interface ColouredBarProps {
	level: number;
	colour: string;
}

export const ColouredBar = styled.div<ColouredBarProps>`
	position: absolute;
	z-index: 1;
	width: ${props => `${props.level}0%`};
	height: 100%;
	background-color: ${props => props.colour};
	border-radius: inherit;
`

export const BlackBar = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: black;
	border-radius: inherit;
`