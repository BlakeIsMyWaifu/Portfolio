import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
	height: 200px;
	width: 100vw;
	overflow: hidden;
	margin-left: -16px;
`

export const WaveWrapper = styled.div`
	position: relative;
	height: 200px;
	bottom: 0;
	left: 0;
`

const waveAnimation = keyframes`
	0% {
		margin-left: 0;
	}
	100% {
		margin-left: -1600px;
	}
`

const swellAnimation = keyframes`
	0%, 100% {
		transform: translate3d(0,-25px,0);
	}
	50% {
		transform: translate3d(0,5px,0);
	}
`

export const Wave = styled.div`
	background: url(./svg/wave.svg) repeat-x;
	position: relative;
	width: 640vw;
	height: 100%;
	bottom: 0;
	left: 0;
	animation: ${css`${waveAnimation}`} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
	transform: translate3d(0, 0, 0);
	&:nth-of-type(2) {
		top: -175px;
		animation: ${css`${waveAnimation}`} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${css`${swellAnimation}`} 7s ease -1.25s infinite;
		opacity: 1;
	}
`