import styled from 'styled-components'

import { Position } from './Fish'

interface FishContainerProps {
	name: string;
	position: Position;
	speed: number;
	size: number;
}

export const FishContainer = styled.div<FishContainerProps>`
	background: url(./svg/Fish/${props => props.name}.svg) no-repeat;
	height: ${props => props.size}px;
	aspect-ratio: 1;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform ${props => props.speed}s linear;
	transform: translate3d(${props => props.position.x}px, ${props => props.position.y}px, 0);
`