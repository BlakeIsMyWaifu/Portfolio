import React from 'react'

import { ChildWrapper, Container } from './PageContainer-Elements'

const PageContainer: React.FC = ({ children }) => {
	return (
		<Container>
			<ChildWrapper>
				{children}
			</ChildWrapper>
		</Container>
	)
}

export default PageContainer