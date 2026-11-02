import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "alarm-clock-minus",
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
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.8, delay: 0.25, times: [0, 0.4, 1] }))}
				d="M9 13h6"
				style={centered}
			/>
		</motion.g>
	),
});
