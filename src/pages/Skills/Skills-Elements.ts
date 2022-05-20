import SVGShadow from 'components/SVGShadow'
import { Title } from 'components/Text/Text-Elements'
import styled from 'styled-components'

export const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 30vh 70vh;
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
	font-size: 1.4vw;
`

export const Item = styled.li`
	font-size: 1.11vw;
`

export const SkillBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`
