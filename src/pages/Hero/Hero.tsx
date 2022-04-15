import PageContainer from 'components/PageContainer'
import { FC } from 'react'

import { TextContainer, TextHello, TextJobTitle, TextName } from './Hero-Elements'

const Hero: FC = () => {

	const textHello = 'Hello, I\'m'
	const textName = 'Joel Dohm-Karatjas'
	const textJobTitle = 'Junior Front End Web Developer'

	return (
		<PageContainer>
			<TextContainer >
				<TextHello>{textHello}</TextHello>
				<TextName>{textName}</TextName>
				<TextJobTitle>{textJobTitle}</TextJobTitle>
			</TextContainer>
		</PageContainer>
	)
}

export default Hero