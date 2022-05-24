import { FC } from 'react'
import { random, randomPosition } from 'utils/Random'

import { BubbleContainer, Dot } from './Bubble-Elements'

const Bubble: FC = () => {

	const [posX, posY] = randomPosition()

	const animationLength = random(90, 40) / 10

	return (
		<BubbleContainer
			posX={posX}
			posY={posY}
			animationLength={animationLength}
		>
			<Dot />
		</BubbleContainer>
	)
}

export default Bubble