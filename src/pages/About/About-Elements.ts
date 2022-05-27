import SVGShadow from 'components/SVGShadow'
import { Paragraph, Title } from 'components/Text'
import styled from 'styled-components'

export const TitleWrapper = styled.span`
	position: absolute;
	height: 22vh;
	left: 2.6vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const AboutTitle = styled(Title)`
	font-size: 3.2vw;
	padding: 0;
`

export const ParagraphWrapper = styled.span`
	position: absolute;
	left: 17vw;
	top: 42vh;
	margin-right: 16px;
`

export const AboutParagraph = styled(Paragraph)`
	font-size: 1.2vw;
	padding: 0;
	line-height: 3vh;
`

export const MobileWhale = styled(SVGShadow)`
	height: calc(100vw - 16px);
	transform: rotate(-90deg) translateY(-50%) translateX(-15%);
	transform-origin: 65%;
`

export const MobileParagraphWrapper = styled.span`
	position: absolute;
	top: 25%;
	transform: translateY(-25%);
`

export const MobileAboutParagraph = styled(Paragraph)`
	font-size: 20px;
`