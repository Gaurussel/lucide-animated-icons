import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "thermometer-sun",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 0.6, 1, 1], rotate: [0, -25, 0, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.6, 1] },
					),
				)}
				style={pivot(8, 13)}
			>
				<path d="M12 9a4 4 0 0 0-2 7.5" />
				<path d="M12 3v2" />
				<path d="m6.6 18.4-1.4 1.4" />
				<path d="M4 13H2" />
				<path d="M6.34 7.34 4.93 5.93" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.82, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
