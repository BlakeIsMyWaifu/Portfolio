import PageContainer from 'components/PageContainer'
import { Paragraph, Title } from 'components/Text/Text-Elements'
import { FC } from 'react'

import SkillBar from './SkillBar/SkillBar'
import { InnerContainer, SkillBarContainer } from './Skills-Elements'

const Skills: FC = () => {

	const paragraph = 'I build fast, responsive and maintainable websites mainly with React with TypeScript.'

	return (
		<PageContainer>
			<Title>Skills and Experience</Title>

			<InnerContainer>

				<Paragraph>{paragraph}</Paragraph>

				<SkillBarContainer>
					<SkillBar name='JavaScript' level={10} colour={'yellow'} />
					<SkillBar name='TypeScript' level={9} colour={'blue'} />
					<SkillBar name='React' level={8} colour={'red'} />
					<SkillBar name='C#' level={5} colour={'green'} />
					<SkillBar name='Java' level={4} colour={'brown'} />
				</SkillBarContainer>

			</InnerContainer>
		</PageContainer>
	)
}

export default Skills