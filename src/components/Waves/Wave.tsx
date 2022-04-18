import { FC } from 'react'

import { Container, Wave, WaveWrapper } from './Waves-Elements'

const Waves: FC = () => {
	return (
		<Container>
			<WaveWrapper>
				<Wave />
				<Wave />
			</WaveWrapper>
		</Container>
	)
}

export default Waves