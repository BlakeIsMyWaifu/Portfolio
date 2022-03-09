import AnimatedPage from 'components/AnimatedPage/AnimatedPage'
import React from 'react'

import { ChildWrapper, Container } from './PageContainer-Elements'

const PageContainer: React.FC = ({ children }) => {
	return (
		<Container>
			<AnimatedPage>
				<ChildWrapper>
					{children}
				</ChildWrapper>
			</AnimatedPage>
		</Container>
	)
}

export default PageContainer