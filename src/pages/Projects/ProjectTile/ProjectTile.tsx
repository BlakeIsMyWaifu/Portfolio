import { FC } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { TileData } from '../projectData'
import { Button, Buttons, Description, Stack, StackWrapper, TextWrapper, Thumbnail, TileContainer, Title } from './ProjectTile-Elements'

interface ProjectTileProps extends TileData {
	right: boolean;
}

const ProjectTile: FC<ProjectTileProps> = ({ title, image, description, stack, github, website, right }) => {
	return (
		<TileContainer right={right}>
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
						website && <Button href={website} target='_blank' aria-label='Demo' rel='noopener noreferrer'>
							<FaExternalLinkAlt size={32} />
						</Button>
					}
				</Buttons>
			</TextWrapper>
		</TileContainer>
	)
}

export default ProjectTile