import { FC } from 'react'
import { random } from 'utils/Random'

import { Bottom, FooterContainer, SVG, Sand } from './Footer-Elements'

const Footer: FC = () => {
	return (
		<FooterContainer>
			<Sand offset={random(200)} />
			<Bottom />
			<SVG name='coral' bottom={random(80)} left={random(10)} />
			<SVG name='coral' bottom={random(80)} left={random(35, 15)} />
			<SVG name='treasure' bottom={random(100)} right={random(28, 13)} />
		</FooterContainer>
	)
}

export default Footer