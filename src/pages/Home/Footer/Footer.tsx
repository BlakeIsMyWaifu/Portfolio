import { FC } from 'react'

import { Bottom, Container, SVG, Sand } from './Footer-Elements'

const Footer: FC = () => {

	const random = (max: number, min = 0): number => ~~(Math.random() * (max - min)) + min

	return (
		<Container>
			<Sand offset={random(200)} />
			<Bottom />
			<SVG name='coral' bottom={random(80)} left={random(10)} />
			<SVG name='coral' bottom={random(80)} left={random(35, 15)} />
			<SVG name='treasure' bottom={random(100)} right={random(28, 13)} />
		</Container>
	)
}

export default Footer