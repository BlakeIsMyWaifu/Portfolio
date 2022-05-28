import { PageContainer } from 'components/PageContainer'
import SVGShadow from 'components/SVGShadow/SVGShadow'
import { Paragraph } from 'components/Text'
import useIsMobile from 'hooks/useIsMobile'
import { FC } from 'react'

import SkillBar from './SkillBar/SkillBar'
import { Eel, InnerContainer, Item, List, ListWrapper, MobileInnerContainer, MobileItem, MobileListWrapper, MobileParagraph, MobileSkillsTitle, SkillBarContainer, SkillsTitle, TitleWrapper } from './Skills-Elements'

const Skills: FC = () => {

	const projectTypes = [
		'Websites with TypeScript and React.',
		'REST APIs with nodejs',
		'NPM packages',
		'Mock designs with Figma'
	]

	const isMobile = useIsMobile()

	const skillBars = (
		<SkillBarContainer>
			<SkillBar name='JavaScript' level={10} colour={'yellow'} />
			<SkillBar name='TypeScript' level={9} colour={'blue'} />
			<SkillBar name='React' level={8} colour={'red'} />
			<SkillBar name='C#' level={5} colour={'green'} />
			<SkillBar name='Java' level={4} colour={'brown'} />
		</SkillBarContainer>
	)

	return !isMobile ? (
		<PageContainer id='skills'>

			<InnerContainer>

				<Eel name='eel'>
					<TitleWrapper>
						<SkillsTitle>Skills & Experience</SkillsTitle>
					</TitleWrapper>
				</Eel>

				<SVGShadow name='stingray' height={99}>
					<ListWrapper>
						<Paragraph>{'Some of the projects I\'ve made;'}</Paragraph>
						<List>
							{
								projectTypes.map((projectType, i) => <Item key={i}>{projectType}</Item>)
							}
						</List>
					</ListWrapper>
				</SVGShadow>

				{skillBars}

			</InnerContainer>
		</PageContainer >
	) : (
		<PageContainer id='skills'>

			<MobileInnerContainer>

				<Eel name='eel'>
					<MobileSkillsTitle>Skills & Experience</MobileSkillsTitle>
				</Eel>

				<SVGShadow name='stingray' width={100} aspectRatio='0.85 / 1'>
					<MobileListWrapper>
						<MobileParagraph>{'Some of the projects I\'ve made;'}</MobileParagraph>
						<List>
							{
								projectTypes.map((projectType, i) => <MobileItem key={i}>{projectType}</MobileItem>)
							}
						</List>
					</MobileListWrapper>
				</SVGShadow>

				{skillBars}

			</MobileInnerContainer>

		</PageContainer>
	)
}

export default Skills