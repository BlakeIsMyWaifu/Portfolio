export interface TileData {
	title: string;
	description: string;
	stack: string[];
	image: string;
	github: string;
	website?: string;
}

export const projectData: TileData[] = [
	{
		title: 'Payday Builder',
		description: 'A web app for creating builds for Payday 2',
		stack: ['Nodejs', 'React', 'TypeScript', 'Redux', 'Styled Components', 'Webpack'],
		image: 'thumbnail',
		github: 'PaydayBuilder',
		website: 'https://www.pd2.dev/'
	},
	{
		title: 'TheGreekYogi',
		description: 'Website for my fathers yoga classes',
		stack: ['Nodejs', 'React', 'TypeScript', 'Styled Components', 'Vite'],
		image: 'thumbnail',
		github: 'TheGreekYogi',
		website: 'https://www.thegreekyogi.info/'
	},
	{
		title: 'HiRez Wrapper',
		description: 'A wrapper to interface with the HiRez API',
		stack: ['Nodejs', 'TypeScript', 'Jest', 'NPM'],
		image: 'thumbnail',
		github: 'hirez-wrapper',
		website: 'https://www.npmjs.com/package/hirez-wrapper'
	},
	{
		title: 'WeWatch',
		description: 'Website for tracking shows and movies to watch',
		stack: ['Nodejs', 'React', 'Nextjs', 'MaterialUI'],
		image: 'thumbnail',
		github: 'WeWatch',
		website: 'https://we-watch.vercel.app'
	},
	{
		title: 'Portfolio',
		description: 'The website you\'re currently viewing',
		stack: ['Nodejs', 'React', 'TypeScript', 'Styled Components', 'Vite'],
		image: 'thumbnail',
		github: 'Portfolio'
	}
]

export default projectData