import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "search",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ x: [0, -2.5, 2, 0], y: [0, -1.5, 1.5, 0], rotate: [0, -8, 8, 0] },
					{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
				),
			)}
		>
			<path d="m21 21-4.34-4.34" />
			<circle cx="11" cy="11" r="8" />
		</motion.g>
	),
});
