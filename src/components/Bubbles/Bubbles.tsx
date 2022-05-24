import { FC } from 'react'
import { random } from 'utils/Random'

import Bubble from './Bubble'
import { BubblesContainer, SeaContainer } from './Bubbles-Elements'

const Bubbles: FC = ({ children }) => {

	const bubbleAmount = random(50, 30)
	const bubbles: JSX.Element[] = []
	for (let i = 0; i < bubbleAmount; i++) {
		bubbles.push(<Bubble key={i} />)
	}

	return (
		<SeaContainer>
			<BubblesContainer>
				{bubbles}
			</BubblesContainer>
			{children}
		</SeaContainer>
	)
}

export default Bubbles