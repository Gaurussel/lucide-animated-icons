import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-3d",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.9, 1.08, 1] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}
				style={pivot(5, 19)}
			>
				<path d="M5 3v16h16" />
				<motion.path
					{...part(pose({ y: [0, 1, -1.2, 0] }, { duration: 0.55, times: [0, 0.25, 0.6, 1] }))}
					d="m2 6 3-3 3 3"
				/>
				<motion.path
					{...part(pose({ x: [0, -1, 1.2, 0] }, { duration: 0.55, times: [0, 0.25, 0.6, 1], delay: 0.1 }))}
					d="m18 16 3 3-3 3"
				/>
				<motion.path
					{...part(
						pose(
							{ x: [0, 1.5, -3, 0], y: [0, -1.5, 3, 0] },
							{ duration: 0.55, times: [0, 0.25, 0.6, 1], delay: 0.2 },
						),
					)}
					d="m5 19 6-6"
				/>
			</motion.g>
		</>
	),
});
