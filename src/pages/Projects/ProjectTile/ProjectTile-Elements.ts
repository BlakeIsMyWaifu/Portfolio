import { MdZoomOutMap } from 'react-icons/md'
import styled from 'styled-components'
import { cream, deepBlue, silverPink, zodiacBlue } from 'utils/colours'

interface Direction {
	right: boolean;
}

interface ImageDirection extends Direction {
	largeImage: boolean;
	ref?: React.RefObject<HTMLDivElement>;
}

export const TileContainer = styled.div<ImageDirection>`
	min-height: 300px;
	width: 60vw;
	background-color: ${zodiacBlue};
	display: flex;
	flex-direction: ${props => props.largeImage ? 'column' : (props.right ? 'row-reverse' : 'row')};
	justify-content: space-between;
	z-index: 1;
	border-radius: 20px;
	align-self: ${props => props.right ? 'flex-end' : 'flex-start'};
	margin: 0 8vw;
`

export const ThumbnailContainer = styled.div`
	position: relative;
	cursor: pointer;
`

interface ThumbnailProps {
	largeImage: boolean;
}

export const Thumbnail = styled.img<ThumbnailProps>`
	height: ${props => props.largeImage ? 'auto' : '300px'};
	width: ${props => props.largeImage ? '100%' : 'auto'};
	padding: 10px;
	border-radius: 20px;
	box-sizing: border-box;
`

export const ZoomOutIcon = styled(MdZoomOutMap)`
	position: absolute;
	width: 32px;
	height: auto;
	bottom: 16px;
	right: 16px;
	color: white;
	mix-blend-mode: difference;
`

export const TextWrapper = styled.div<Direction>`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: ${props => props.right ? 'right' : 'left'};
`

export const Title = styled.h3`
	color: ${silverPink};
	font-size: 2.5rem;
	margin: 16px;
`

export const Description = styled.p<ImageDirection>`
	background-color: ${deepBlue};
	color: ${cream};
	font-size: 1.5rem;
	padding: 8px;
	margin: ${props => props.largeImage ? 0 : (props.right ? '0 -10px 0 0' : '0 0 0 -10px')};
	width: 100%;
	box-sizing: border-box;
`

export const StackWrapper = styled.span<Direction>`
	display: flex;
	flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
	flex-wrap: wrap;
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

export const MobileTileContainer = styled.div`
	width: 90vw;
	align-self: center;
	background-color: ${zodiacBlue};
	display: flex;
	flex-direction: column;
	z-index: 1;
	border-radius: 20px;
`

export const MobileThumbnail = styled.img`
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	border-radius: 20px;
`

export const MobileDescription = styled(Description)`
	margin: 0;
`