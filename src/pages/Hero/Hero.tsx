import { FC } from 'react'

import Fishes from './Fishes/Fishes'
import { Bottom, TextContainer, TextHello, TextJobTitle, TextName, Top } from './Hero-Elements'
import Waves from './Waves'

const Hero: FC = () => {
	return (
		<>
			<Top id='home'>
				<TextContainer >
					<TextHello>{'Hello, I\'m'}</TextHello>
					<TextName>Joel Dohm-Karatjas</TextName>
					<TextJobTitle>Junior Front End Web Developer</TextJobTitle>
				</TextContainer>
				<Waves />
			</Top>
			<Bottom>
				<Fishes />
			</Bottom>
		</>
	)
}

export default Hero