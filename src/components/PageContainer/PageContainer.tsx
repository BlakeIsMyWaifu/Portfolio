import AnimatedPage from 'components/AnimatedPage/AnimatedPage'
import { FC } from 'react'

import { ChildWrapper, Container } from './PageContainer-Elements'

const PageContainer: FC = ({ children }) => {
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