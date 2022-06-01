import useIsDev from 'hooks/useIsDev'
import useIsMobile from 'hooks/useIsMobile'
import { FC, useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { TileData } from '../projectData'
import { Button, Buttons, CommitCount, Description, MobileDescription, MobileThumbnail, MobileTileContainer, Stack, StackWrapper, TextWrapper, Thumbnail, ThumbnailContainer, TileContainer, Title, ZoomOutIcon } from './ProjectTile-Elements'

interface ProjectTileProps extends TileData {
	right: boolean;
}

const ProjectTile: FC<ProjectTileProps> = ({ title, image, description, stack, github, website, right }) => {

	const [commitAmount, setCommitAmount] = useState(0)

	const [largeImage, setLargeImage] = useState(false)

	const containerRef = useRef<HTMLDivElement>(null)

	const isDev = useIsDev()

	const isMobile = useIsMobile()

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

	return !isMobile ? (
		<TileContainer right={right} largeImage={largeImage} ref={containerRef}>

			<ThumbnailContainer
				onClick={() => {
					setLargeImage(!largeImage)
					if (!containerRef.current) return
					containerRef.current.scrollIntoView()
				}}>
				<Thumbnail
					src={`images/projectsPreviews/${image}.jpg`}
					largeImage={largeImage}
				/>
				<ZoomOutIcon />
			</ThumbnailContainer>

			<TextWrapper right={right}>

				<Title>{title}</Title>

				<Description right={right} largeImage={largeImage}>{description}</Description>

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
	) : (
		<MobileTileContainer>

			<MobileThumbnail src={`images/projectsPreviews/${image}.jpg`} />

			<Title>{title}</Title>

			<MobileDescription right={false} largeImage={false}>{description}</MobileDescription>

			<StackWrapper right={false}>
				{
					stack.map(s => {
						return <Stack key={s}>{s}</Stack>
					})
				}
			</StackWrapper>

			<CommitCount right={false}>
				Current Commit Count: {commitAmount}
			</CommitCount>

			<Buttons right={false}>
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

		</MobileTileContainer>
	)
}

export default ProjectTile