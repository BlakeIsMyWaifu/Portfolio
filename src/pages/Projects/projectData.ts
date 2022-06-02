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
		description: 'Web app for creating and sharing Payday 2 builds',
		stack: ['Nodejs', 'React', 'TypeScript', 'Redux', 'Styled Components', 'Webpack'],
		image: 'paydayBuilder',
		github: 'PaydayBuilder',
		website: 'https://www.pd2.dev'
	},
	{
		title: 'Portfolio',
		description: 'The website you\'re currently viewing',
		stack: ['Nodejs', 'React', 'TypeScript', 'Styled Components', 'Vite'],
		image: 'portfolio',
		github: 'Portfolio',
		website: 'https://www.joeldk.com'
	},
	{
		title: 'TheGreekYogi',
		description: 'Website for my fathers yoga classes',
		stack: ['Nodejs', 'React', 'TypeScript', 'Styled Components', 'Vite'],
		image: 'theGreekYogi',
		github: 'TheGreekYogi',
		website: 'https://www.thegreekyogi.info'
	},
	{
		title: 'HiRez Wrapper',
		description: 'A wrapper to interface with the HiRez API',
		stack: ['Nodejs', 'TypeScript', 'Jest', 'NPM'],
		image: 'hirezWrapper',
		github: 'hirez-wrapper',
		website: 'https://www.npmjs.com/package/hirez-wrapper'
	},
	{
		title: 'WeWatch',
		description: 'Website for tracking shows and movies to watch',
		stack: ['Nodejs', 'React', 'Nextjs', 'MaterialUI'],
		image: 'weWatch',
		github: 'WeWatch',
		website: 'https://we-watch.vercel.app'
	}
]

export default projectData