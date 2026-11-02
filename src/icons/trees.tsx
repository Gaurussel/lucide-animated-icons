import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "trees",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -9, 7.2, -3.6, 0] }, { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] }))}
				d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
				style={pivot(7, 16)}
			/>
			<path d="M7 16v6" />
			<path d="M13 19v3" />
			<motion.path
				{...part(
					pose(
						{ rotate: [0, 9, -7.2, 3.6, 0] },
						{ duration: 0.85, delay: 0.15, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
				style={pivot(16, 19)}
			/>
		</>
	),
});
