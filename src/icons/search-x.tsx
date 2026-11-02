import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const erase = (delay: number) =>
	pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.85, delay, times: [0, 0.4, 0.65, 1] });

export default createAnimatedIcon({
	name: "search-x",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ x: [0, -2.5, 2, 0], y: [0, -1.5, 1.5, 0], rotate: [0, -8, 8, 0] },
					{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
				),
			)}
		>
			<motion.path {...part(erase(0))} d="m13.5 8.5-5 5" />
			<motion.path {...part(erase(0.06))} d="m8.5 8.5 5 5" />
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</motion.g>
	),
});
