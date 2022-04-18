import AnimatedPage from 'components/AnimatedPage/AnimatedPage'
import { FC } from 'react'
import { useLocation } from 'react-router'
import { steel } from 'utils/colours'

import { ChildWrapper, Container } from './PageContainer-Elements'

interface PageContainerProps {
	backgroundColour?: string;
}

const PageContainer: FC<PageContainerProps> = ({ backgroundColour, children }) => {

	const location = useLocation()

	return (
		<Container backgroundColour={backgroundColour ?? (location.pathname === '/' ? 'none' : steel)}>
			<AnimatedPage>
				<ChildWrapper>
					{children}
				</ChildWrapper>
			</AnimatedPage>
		</Container>
	)
}

export default PageContainer