import SVGShadow from 'components/SVGShadow'
import { Paragraph, Title } from 'components/Text/Text-Elements'
import styled from 'styled-components'

export const InnerContainer = styled.div`
	display: grid;
	grid-template-rows: 30vh 70vh;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;
`

export const Eel = styled(SVGShadow)`
	grid-column: 1 / -1;
`

export const TitleWrapper = styled.span`
	position: absolute;
	left: 4vw;
	top: 12vh;
`

export const SkillsTitle = styled(Title)`
	font-size: 3vw;
	padding: 0;
`

export const ListWrapper = styled.span`
	position: absolute;
	left: 12.5vw;
	top: 18.5vh;
`

export const List = styled.ul`
	color: white;
`

export const Item = styled.li`
	font-size: 1.11vw;
`

export const SkillBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const MobileInnerContainer = styled(InnerContainer)`
	grid-template-rows: 10vh 52vh 32vh;
	grid-template-columns: 1fr;
`

export const MobileSkillsTitle = styled(SkillsTitle)`
	font-size: 10vw;
	text-align: center;
`

export const MobileListWrapper = styled.span`
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const MobileParagraph = styled(Paragraph)`
	font-size: 7vw;
`

export const MobileItem = styled(Item)`
	font-size: 1.2rem;
	margin: 8px;
	margin-left: 1.2rem;
`