import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "concierge-bell",
	render: (part) => (
		<>
			<path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -22, 22, -12, 0], y: [0, -1.5, -1.5, -0.8, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1] },
					),
				)}
				style={pivot(12, 19)}
			>
				<path d="M20 16a8 8 0 1 0-16 0" />
				<motion.g {...part(pose({ y: [0, 4, 0, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1] }))}>
					<path d="M12 4v4" />
					<path d="M10 4h4" />
				</motion.g>
			</motion.g>
		</>
	),
});
