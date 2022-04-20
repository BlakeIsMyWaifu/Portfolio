import { FC } from 'react'

import { Bottom, TextContainer, TextHello, TextJobTitle, TextName, Top } from './Hero-Elements'
import Waves from './Waves'

const Hero: FC = () => {

	const textHello = 'Hello, I\'m'
	const textName = 'Joel Dohm-Karatjas'
	const textJobTitle = 'Junior Front End Web Developer'

	return (
		<>
			<Top>
				<TextContainer >
					<TextHello>{textHello}</TextHello>
					<TextName>{textName}</TextName>
					<TextJobTitle>{textJobTitle}</TextJobTitle>
				</TextContainer>
				<Waves />
			</Top>
			<Bottom />
		</>
	)
}

export default Hero