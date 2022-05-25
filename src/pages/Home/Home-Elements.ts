import { PageContainer } from 'components/PageContainer'
import styled from 'styled-components'
import { steel, vogue } from 'utils/colours'

export const AppContainer = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	overflow: hidden;
`

interface HomeContainerProps {
	display: boolean;
}

export const HomeContainer = styled(PageContainer) <HomeContainerProps>`
	background: linear-gradient(${steel} 30%, ${vogue});
	visibility: ${props => props.display ? 'visible' : 'collapse'};
`