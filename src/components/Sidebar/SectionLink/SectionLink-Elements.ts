import styled from 'styled-components'

import { TextColours } from '../Sidebar-Elements'

export const SectionInput = styled.input`
	${TextColours}
	font-size: 3.5rem;
	text-align: start;
	transition: margin 200ms;
	margin-left: 24px;
	border: none;
	background: transparent;
	&:hover {
		margin-left: 48px;
	}
`