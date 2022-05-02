import { FC } from 'react'

import { Wave, WaveContainer, WaveWrapper } from './Waves-Elements'

const Waves: FC = () => {
	return (
		<WaveContainer>
			<WaveWrapper>
				<Wave />
				<Wave />
			</WaveWrapper>
		</WaveContainer>
	)
}

export default Waves