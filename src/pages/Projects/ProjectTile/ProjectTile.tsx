import { FC } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { TileData } from '../Projects'
import { Button, Buttons, Container, Description, Stack, StackWrapper, TextWrapper, Thumbnail, Title } from './ProjectTile-Elements'

interface ProjectTileProps extends TileData {
	right: boolean;
}

const ProjectTile: FC<ProjectTileProps> = ({ title, image, description, stack, github, demo, right }) => {
	return (
		<Container right={right}>
			<Thumbnail src={`images/projectsPreviews/${image}.jpg`} />
			<TextWrapper>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<StackWrapper>
					{
						stack.map(s => {
							return <Stack key={s}>{s}</Stack>
						})
					}
				</StackWrapper>
				<Buttons>
					{
						github && <Button href={`https://github.com/BlakeIsMyWaifu/${github}`} target='_blank' aria-label='Github' rel='noopener noreferrer'>
							<FaGithub size={32} />
						</Button>
					}
					{
						demo && <Button href={demo} target='_blank' aria-label='Demo' rel='noopener noreferrer'>
							<FaExternalLinkAlt size={32} />
						</Button>
					}
				</Buttons>
			</TextWrapper>
		</Container>
	)
}

export default ProjectTile