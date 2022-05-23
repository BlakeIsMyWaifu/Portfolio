import { FC } from 'react'
import { random } from 'utils/Random'

import { BubbleContainer, Dot } from './Bubble-Elements'

const Bubble: FC = () => {

	const posX = random(100)
	const posY = random(100)

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