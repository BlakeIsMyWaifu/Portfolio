import { PageContainer } from 'components/PageContainer'
import SVGShadow from 'components/SVGShadow/SVGShadow'
import useIsMobile from 'hooks/useIsMobile'
import { FC } from 'react'

import { AboutParagraph, AboutTitle, MobileAboutParagraph, MobileParagraphWrapper, MobileWhale, ParagraphWrapper, TitleWrapper } from './About-Elements'

const About: FC = () => {

	const isMobile = useIsMobile()

	const getAge = (): number => {
		const difference = Date.now() - 957567600000
		const ageDate = new Date(difference)
		return Math.abs(ageDate.getUTCFullYear() - 1970)
	}

	const paragraph = [
		`Hi, I'm a ${getAge()} year old self taught programmer from London.`,
		'Ever since I was little I\'ve had an interest in programming and technology. Over the last six years I\'ve managed to turn that interest into a hobby and passion. Now I\'m looking to that it that next step and turn it into a career.',
		'Currently I\'m an entry level front end developer currently looking for employment. I\'ve been learning and using JavaScript for six years and React for two as well as various other languages and technologies. I\'m seeking a React developer position to purse my passion for web development and creating new experiences.'
	].join('\n\n')

	return !isMobile ? (
		<PageContainer id='about'>

			<SVGShadow name='whale' width={75} aspectRatio='1 / 0.67'>

				<TitleWrapper>
					<AboutTitle>About Me</AboutTitle>
				</TitleWrapper>

				<ParagraphWrapper>
					<AboutParagraph>{paragraph}</AboutParagraph>
				</ParagraphWrapper>

			</SVGShadow>

		</PageContainer>
	) : (
		<PageContainer id='about'>

			<MobileWhale name='whale' aspectRatio='1 / 0.67' />
			<MobileParagraphWrapper>
				<MobileAboutParagraph>{paragraph}</MobileAboutParagraph>
			</MobileParagraphWrapper>

		</PageContainer>
	)
}

export default About