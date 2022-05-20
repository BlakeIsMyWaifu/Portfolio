import { PageContainer } from 'components/PageContainer'
import SVGShadow from 'components/SVGShadow/SVGShadow'
import { FC } from 'react'

import { AboutParagraph, AboutTitle, ParagraphWrapper, TitleWrapper } from './About-Elements'

const About: FC = () => {

	const getAge = (): number => {
		const currentDate = +new Date()
		const birthDate = 957567600000

		const difference = currentDate - birthDate
		const yearsDifference = ~~(difference / 1000 / 60 / 60 / 24 / 365) - 1

		return yearsDifference
	}

	const paragraph = [
		`Hi, I\`m a ${getAge()} year old self taught programmer from London.`,
		'Ever since I was little I\'ve had an interest in programming and technology. Over the last six years I\'ve managed to turn that interest into a hobby and passion. Now i\'m looking to that it that next step and turn it into a career.',
		'Currently I\'m an entry level front end developer currently looking for employment. I\'ve been learning and using JavaScript for six years and React for two as well as various other languages and technologies. I\'m seeking a React developer position to purse my passion for web development and creating new experiences.'
	].join('\n\n')

	return (
		<PageContainer id='about'>

			<SVGShadow name='whale' width={75}>

				<TitleWrapper>
					<AboutTitle>About Me</AboutTitle>
				</TitleWrapper>

				<ParagraphWrapper>
					<AboutParagraph>{paragraph}</AboutParagraph>
				</ParagraphWrapper>

			</SVGShadow>

		</PageContainer>
	)
}

export default About