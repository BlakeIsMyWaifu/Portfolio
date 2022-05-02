import { PageContainer } from 'components/PageContainer'
import { Title } from 'components/Text'
import { FC } from 'react'

import projectData from './projectData'
import { TileContainer } from './Projects-Elements'
import ProjectTile from './ProjectTile'

const Projects: FC = () => {
	return (
		<PageContainer id='projects'>
			<Title>Projects</Title>
			<TileContainer>
				{
					projectData.map((project, i) => <ProjectTile key={project.title} {...project} right={!!(i % 2)} />)
				}
			</TileContainer>
		</PageContainer>
	)
}

export default Projects