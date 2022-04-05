import { FC } from 'react'

import { BarWrapper, BlackBar, ColouredBar, Container, Title } from './SkillBar-Elements'

interface SkillBarProps {
	name: string;
	level: number;
	colour: string;
}

const SkillBar: FC<SkillBarProps> = ({ name, level, colour }) => {
	return (
		<Container>
			<Title>{name}</Title>
			<BarWrapper>
				<ColouredBar level={level} colour={colour} />
				<BlackBar />
			</BarWrapper>
		</Container>
	)
}

export default SkillBar