import PageContainer from 'components/PageContainer'
import { Subtitle, Title } from 'components/Text/Text-Elements'
import React from 'react'

import { TileContainer } from './Projects-Elements'
import ProjectTile from './ProjectTile'

export interface TileData {
	title: string;
	description: string;
	stack: string[];
	image: string;
	github?: string;
	demo?: string;
}

const Projects: React.FC = () => {

	const projectData: TileData[] = [
		{
			title: 'Project 1',
			description: 'Description for the first project',
			stack: ['Nodejs', 'React', 'TypeScript', 'Redux', 'Styled Components', 'Webpack'],
			image: 'thumbnail',
			github: 'temp',
			demo: 'https://www.temp.com'
		},
		{
			title: 'Project 2',
			description: 'temp',
			stack: ['temp'],
			image: 'thumbnail'
		}
	]

	return (
		<PageContainer>
			<Title>Projects</Title>
			<Subtitle>Highlights</Subtitle>
			<TileContainer>
				{
					projectData.map((project, i) => <ProjectTile key={project.title} {...project} right={!!(i % 2)} />)
				}
			</TileContainer>
		</PageContainer>
	)
}

export default Projects