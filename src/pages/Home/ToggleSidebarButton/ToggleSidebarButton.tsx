import { FC } from 'react'
import { IconContext } from 'react-icons'
import { FaBars, FaTimes } from 'react-icons/fa'
import { cream, deepBlue } from 'utils/colours'

import { ToggleSidebarButtonContainer } from './ToggleSidebarButton-Elements'

interface ToggleSidebarButtonProps {
	sidebarVisible: boolean;
	setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSidebarButton: FC<ToggleSidebarButtonProps> = ({ sidebarVisible, setSidebarVisible }) => {
	return (
		<ToggleSidebarButtonContainer onClick={() => setSidebarVisible(!sidebarVisible)}>
			<IconContext.Provider value={{
				size: '32',
				color: sidebarVisible ? cream : deepBlue
			}}>
				{
					sidebarVisible ?
						<FaTimes /> :
						<FaBars />
				}
			</IconContext.Provider>
		</ToggleSidebarButtonContainer>
	)
}

export default ToggleSidebarButton