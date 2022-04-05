import { motion } from 'framer-motion'
import { FC } from 'react'

const AnimatedPage: FC = ({ children }) => {

	const animations = {
		initial: { opacity: 0, y: 100 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -100 }
	}

	return (
		<motion.div
			variants={animations}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{
				duration: 0.5
			}}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedPage