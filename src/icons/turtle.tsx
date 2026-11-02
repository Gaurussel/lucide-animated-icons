import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "turtle",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1, 2.5, 0] }, { duration: 0.85, times: [0, 0.2, 0.6, 1] }))}>
				<motion.g
					{...part(
						pose({ y: [0, 0, -0.8, 0, -0.8, 0] }, { duration: 0.85, times: [0, 0.3, 0.45, 0.6, 0.75, 1] }),
					)}
				>
					<path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
					<path d="M4.82 7.9 8 10" />
					<path d="M15.18 7.9 12 10" />
				</motion.g>
				<path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
			</motion.g>
		</>
	),
});
