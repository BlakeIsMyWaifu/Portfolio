import { FC, useEffect, useRef, useState } from 'react'

import Fish from './Fish'
import { FishesContainer } from './Fishes-Elements'

const Fishes: FC = () => {

	const fishesRef = useRef<HTMLDivElement>(null)

	const [renderFish, setRenderFish] = useState(false)

	useEffect(() => {
		setRenderFish(true)
	}, [fishesRef.current])

	return (
		<FishesContainer ref={fishesRef}>
			{
				renderFish && <>
					<Fish fishesRef={fishesRef} />
					<Fish fishesRef={fishesRef} />
				</>
			}
		</FishesContainer>
	)
}

export default Fishes