import styled from 'styled-components'

interface ContainerProps {
	backgroundColour: string;
}

export const Container = styled.div<ContainerProps>`
	width: calc(100vw - 300px);
	min-height: 100vh;
	overflow-x: hidden;
	background: ${props => props.backgroundColour};
`

export const ChildWrapper = styled.div`
	padding: 16px;
`