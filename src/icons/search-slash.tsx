import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "search-slash",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -2, 1.5, 0, 0], y: [0, -1.5, 1.2, 0, 0] },
						{ duration: 0.9, times: [0, 0.15, 0.5, 0.8, 1] },
					),
				)}
			>
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.3-4.3" />
				<motion.path
					{...part(
						pose(
							{ pathLength: [1, 1, 0, 0, 1, 1] },
							{ duration: 0.9, times: [0, 0.3, 0.4, 0.55, 0.85, 1] },
						),
					)}
					d="m13.5 8.5-5 5"
				/>
			</motion.g>
		</>
	),
});
