import { FC } from 'react'

import { SectionInput } from './SectionLink-Elements'

interface SectionLinkProps {
	section: string;
	setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionLink: FC<SectionLinkProps> = ({ section, setSidebarVisible }) => {

	const scrollToSection = (event: React.MouseEvent<HTMLInputElement>): void => {
		event.preventDefault()
		const id = event.currentTarget.value.toLowerCase()
		const el = document.getElementById(id)
		el?.scrollIntoView()
		setSidebarVisible(false)
	}

	return <SectionInput type='button' value={section} onClick={scrollToSection} />
}

export default SectionLink