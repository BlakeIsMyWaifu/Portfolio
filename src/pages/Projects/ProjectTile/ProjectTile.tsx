import useIsDev from 'hooks/useIsDev'
import { FC, useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { TileData } from '../projectData'
import { Button, Buttons, CommitCount, Description, Stack, StackWrapper, TextWrapper, Thumbnail, TileContainer, Title } from './ProjectTile-Elements'

interface ProjectTileProps extends TileData {
	right: boolean;
}

const ProjectTile: FC<ProjectTileProps> = ({ title, image, description, stack, github, website, right }) => {

	const [commitAmount, setCommitAmount] = useState(0)

	const isDev = useIsDev()

	useEffect(() => {
		if (isDev) {
			setCommitAmount(100)
		} else {
			fetch(`https://api.github.com/repos/blakeismywaifu/${github}/commits?per_page=1`)
				.then(res => {
					const linkHeader = res.headers.get('link')
					const amount = linkHeader?.match(/\d+>/g)?.[1]?.replace('>', '')
					if (!amount) return
					setCommitAmount(+amount)
				})
		}
	}, [])

	return (
		<TileContainer right={right}>
			<Thumbnail src={`images/projectsPreviews/${image}.jpg`} />
			<TextWrapper right={right}>
				<Title>{title}</Title>
				<Description right={right}>{description}</Description>
				<StackWrapper right={right}>
					{
						stack.map(s => {
							return <Stack key={s}>{s}</Stack>
						})
					}
				</StackWrapper>
				<CommitCount right={right}>
					Current Commit Count: {commitAmount}
				</CommitCount>
				<Buttons right={right}>
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