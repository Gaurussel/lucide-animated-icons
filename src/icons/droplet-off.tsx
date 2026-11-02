import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "droplet-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scaleY: [1, 1.2, 0.8, 1], scaleX: [1, 0.85, 1.1, 1], y: [0, -1, 0, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.65, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
				<path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m2 2 20 20" />
			</motion.g>
		</>
	),
});
