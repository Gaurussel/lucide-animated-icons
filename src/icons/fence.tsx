import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const topple = (delay: number) =>
	pose({ rotate: [0, 8.4, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: ["easeIn", springy] });

export default createAnimatedIcon({
	name: "fence",
	render: (part) => (
		<>
			<path d="M6 8h4" />
			<path d="M6 18h4" />
			<path d="M14 8h4" />
			<path d="M14 18h4" />
			<motion.path {...part(topple(0))} d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" style={pivot(4, 21)} />
			<motion.path
				{...part(topple(0.1))}
				d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
				style={pivot(12, 21)}
			/>
			<motion.path
				{...part(topple(0.2))}
				d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
				style={pivot(20, 21)}
			/>
		</>
	),
});
