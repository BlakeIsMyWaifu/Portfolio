import React from 'react'

import { Container } from './PageContainer-Elements'

const PageContainer: React.FC = ({ children }) => {

	return (
		<Container>
			{children}
		</Container>
	)
}

export default PageContainer