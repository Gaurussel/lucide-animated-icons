import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "alarm-clock",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ rotate: [0, -13, 13, -7, 0], y: [0, -1.5, 0, -1, 0] },
					{ duration: 0.8, times: [0, 0.2, 0.45, 0.75, 1] },
				),
			)}
			style={pivot(12, 13)}
		>
			<circle cx="12" cy="13" r="8" />
			<path d="M5 3 2 6" />
			<path d="m22 6-3-3" />
			<path d="M6.38 18.7 4 21" />
			<path d="M17.64 18.67 20 21" />
			<motion.path
				{...part(pose({ rotate: 360 }, { duration: 0.6, delay: 0.1, reset: true }))}
				d="M12 9v4l2 2"
				style={pivot(12, 13)}
			/>
		</motion.g>
	),
});
