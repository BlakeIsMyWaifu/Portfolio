import useWindowSize from './useWindowSize'

export const useIsMobile = (): boolean => {

	const { width } = useWindowSize()

	return width <= 768
}

export default useIsMobile