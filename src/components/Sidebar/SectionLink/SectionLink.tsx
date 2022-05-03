import { FC } from 'react'

import { SectionInput } from './SectionLink-Elements'

interface SectionLinkProps {
	section: string;
}

const SectionLink: FC<SectionLinkProps> = ({ section }) => {

	const scrollToSection = (event: React.MouseEvent<HTMLInputElement>): void => {
		event.preventDefault()
		const id = event.currentTarget.value.toLowerCase()
		const el = document.getElementById(id)
		el?.scrollIntoView()
	}

	return <SectionInput type='button' value={section} onClick={scrollToSection} />
}

export default SectionLink