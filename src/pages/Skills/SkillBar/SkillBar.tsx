import { FC } from 'react'

import { BarWrapper, BlackBar, ColouredBar, Label, SkillbarContainer, Text } from './SkillBar-Elements'

interface SkillBarProps {
	name: string;
	level: number;
	colour: string;
}

const SkillBar: FC<SkillBarProps> = ({ name, level, colour }) => {
	return (
		<SkillbarContainer>
			<Label>
				<Text>{name}</Text>
				<Text>{level} / 10</Text>
			</Label>
			<BarWrapper>
				<ColouredBar level={level} colour={colour} />
				<BlackBar />
			</BarWrapper>
		</SkillbarContainer>
	)
}

export default SkillBar