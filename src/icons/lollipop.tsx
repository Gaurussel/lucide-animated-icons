import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "lollipop",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, 0, 0] }, { duration: 0.85, times: [0, 0.3, 0.55, 1] }))}
			style={pivot(21, 21)}
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
			<motion.path
				{...part(pose({ rotate: [0, 0, 360] }, { duration: 0.85, times: [0, 0.3, 1], reset: true }))}
				d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"
				style={pivot(11, 11)}
			/>
		</motion.g>
	),
});
