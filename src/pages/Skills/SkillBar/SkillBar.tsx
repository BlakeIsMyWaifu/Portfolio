import { FC } from 'react'

import { BarWrapper, BlackBar, ColouredBar, SkillbarContainer, Title } from './SkillBar-Elements'

interface SkillBarProps {
	name: string;
	level: number;
	colour: string;
}

const SkillBar: FC<SkillBarProps> = ({ name, level, colour }) => {
	return (
		<SkillbarContainer>
			<Title>{name}</Title>
			<BarWrapper>
				<ColouredBar level={level} colour={colour} />
				<BlackBar />
			</BarWrapper>
		</SkillbarContainer>
	)
}

export default SkillBar