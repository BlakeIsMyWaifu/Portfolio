import styled, { css, keyframes } from 'styled-components'

const bubbleAnimation = keyframes`
	0% {
		transform: scale(0) translateY(0) rotate(70deg);
	}
	100% {
		transform: scale(1.3) translateY(-100px) rotate(360deg);
	}
`

interface BubbleContainerProps {
	posX: number;
	posY: number;
	animationLength: number;
}

export const BubbleContainer = styled.div<BubbleContainerProps>`
	height: 60px;
	width: 60px;
	border: 2px solid rgba(255, 255, 255, 0.7);
	border-radius: 50px;
	position: absolute;
	top: ${props => props.posY}%;
	left: ${props => props.posX}%;
	animation: ${css`${bubbleAnimation}`} ${props => props.animationLength ?? 6}s linear infinite;
`

export const Dot = styled.span`
	height: 10px;
	width: 10px;
	border-radius: 50px;
	background: rgba(255, 255, 255, 0.5);
	position: absolute;
	top: 20%;
	right: 20%;
`