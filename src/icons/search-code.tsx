import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "search-code",
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
				<path d="m21 21-4.3-4.3" />
				<circle cx="11" cy="11" r="8" />
				<motion.path
					{...part(pose({ x: [0, 0, -1, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.5, 0.75, 1] }))}
					d="M9 8.5 7 11l2 2.5"
				/>
				<motion.path
					{...part(pose({ x: [0, 0, 1, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.5, 0.75, 1] }))}
					d="m13 13.5 2-2.5-2-2.5"
				/>
			</motion.g>
		</>
	),
});
