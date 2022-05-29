import React from 'react'

export const useIsDev = (): boolean => {
	return '_self' in React.createElement('div')
}

export default useIsDev