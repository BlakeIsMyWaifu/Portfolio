import { PageContainer } from 'components/PageContainer'
import { Paragraph, Title } from 'components/Text'
import { FC } from 'react'

const About: FC = () => {

	const paragraph = [
		'Hi, I\'m a 21 year old self taught programmer from London.',
		'Ever since I was little I\'ve had an interest in programming and technology. Over the last six years I\'ve managed to turn that interest into a hobby and passion. Now i\'m looking to that it that next step and turn it into a career.',
		'Currently I\'m an entry level front end developer currently looking for employment. I\'ve been learning and using JavaScript for six years and React for two as well as various other languages and technologies. I\'m seeking a React developer position to purse my passion for web development and creating new experiences.'
	].join('\n\n')

	return (
		<PageContainer id='about'>
			<Title>About Me</Title>
			<Paragraph>
				{paragraph}
			</Paragraph>
		</PageContainer>
	)
}

export default About