import styled from 'styled-components'

interface SVGShadowProps {
	name: string;
	width?: number;
	height?: number;
	aspectRatio?: string;
}

export const SVGShadow = styled.div<SVGShadowProps>`
	background: url(./svg/${props => props.name}.svg) no-repeat top right;
	width: ${props => props.width ? `${props.width}%` : 'auto'};
	height: ${props => props.height ? `${props.height}%` : 'auto'};
	aspect-ratio: ${props => props.aspectRatio ?? 1};
	position: relative;
	filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
`

export default SVGShadow