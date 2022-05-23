export const random = (max: number, min = 0): number => ~~(Math.random() * (max - min)) + min

export default {
	random
}