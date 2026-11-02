import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "construction",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -7, 7, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 21)}
		>
			<rect height="8" rx="1" width="20" x="2" y="6" />
			<path d="M17 14v7" />
			<path d="M7 14v7" />
			<path d="M10 14 2.3 6.3" />
			<path d="m14 6 7.7 7.7" />
			<path d="m8 6 8 8" />
			<motion.path {...part(pose({ opacity: [1, 0, 1] }, { duration: 0.45, times: [0, 0.5, 1] }))} d="M17 3v3" />
			<motion.path
				{...part(pose({ opacity: [1, 0, 1] }, { duration: 0.45, delay: 0.3, times: [0, 0.5, 1] }))}
				d="M7 3v3"
			/>
		</motion.g>
	),
});
