import styled from 'styled-components'

export const Container = styled.div`
	padding-top: 160px;
	height: 200px;
	width: 100vw;
	margin: -16px;
	position: relative;
	overflow-x: hidden;
`

interface SandProps {
	offset: number;
}

export const Sand = styled.div<SandProps>`
	background: url(./svg/sand.svg) repeat-x;
	height: 100px;
	width: 320vw;
	transform: translateX(-${props => props.offset}vw);
`

export const Bottom = styled.div`
	height: 100px;
	background-color: #b18f69;
`

interface SVGProps {
	name: string;
	bottom: number;
	left?: number;
	right?: number;
}

export const SVG = styled.div<SVGProps>`
	background: url(./svg/${props => props.name}.svg) no-repeat bottom;
	width: 10vw;
	aspect-ratio: 1;
	position: absolute;
	bottom: ${props => props.bottom}px;
	left: ${props => props.left ? `${props.left}vw` : 'unset'};
	right: ${props => props.right ? `${props.right}vw` : 'unset'};
`