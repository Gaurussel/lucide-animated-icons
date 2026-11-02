import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-spline",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.86, 0.86, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.4, 1] }))}
				d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"
			/>
		</motion.g>
	),
});
