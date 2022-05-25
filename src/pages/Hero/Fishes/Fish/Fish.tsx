import useObjectState from 'hooks/useObjectState'
import useWindowSize from 'hooks/useWindowSize'
import { FC, useEffect, useMemo, useState } from 'react'
import { FilledArray, random, randomElementFromFilledArray } from 'utils/Random'

import { FishContainer } from './Fish-Elements'

const variants: FilledArray<string> = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

export interface Position {
	x: number;
	y: number;
}

interface FishProps {
	fishesRef: React.RefObject<HTMLDivElement>;
}

const Fish: FC<FishProps> = ({ fishesRef }) => {

	const size = 150

	const windowSize = useWindowSize()
	const [height, width] = useMemo((): [number, number] => {
		if (!fishesRef.current) return [0, 0]
		const { clientHeight, clientWidth } = fishesRef.current
		return [clientHeight, clientWidth]
	}, [windowSize, fishesRef])

	const variant = useMemo(() => randomElementFromFilledArray(variants), [])

	const generateNewPosition = (): Position => {
		const posX = random(width - size, size)
		const posY = random(height - size)
		return {
			x: posX,
			y: posY
		}
	}

	const [position, setPosition] = useObjectState<Position>(() => {
		const pos = generateNewPosition()
		return pos
	})

	const pixelsPerSecond = 150
	const [speed, setSpeed] = useState(0)

	const calculateDelta = (currentPosition: Position, nextPosition: Position): number => {
		const dx = currentPosition.x - nextPosition.x
		const dy = currentPosition.y - nextPosition.y
		const distance = Math.sqrt((dx * dx) + (dy * dy))
		return distance
	}

	const moveOnce = (): void => {
		const nextPosition = generateNewPosition()
		const delta = calculateDelta(position, nextPosition)
		setSpeed(Math.round((delta / pixelsPerSecond) * 100) / 100)
		setPosition(nextPosition)
	}

	useEffect(() => {
		addEventListener('transitionend', moveOnce)
		moveOnce()
		return () => {
			removeEventListener('transitionend', moveOnce)
		}
	}, [])

	return (
		<FishContainer
			name={variant}
			speed={speed}
			position={position}
			size={size}
		/>
	)
}

export default Fish