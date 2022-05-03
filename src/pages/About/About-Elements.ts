import { Paragraph, Title } from 'components/Text'
import styled from 'styled-components'

export const Whale = styled.div`
	background: url(./svg/whale.svg) no-repeat top;
	width: 75%;
	aspect-ratio: 1;
	position: relative;
	filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
`

export const TitleWrapper = styled.span`
	position: absolute;
	height: 22vh;
	left: 2.5vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const AboutTitle = styled(Title)`
	font-size: 3.5vw;
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