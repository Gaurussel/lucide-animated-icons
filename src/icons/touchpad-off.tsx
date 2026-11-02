import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "touchpad-off",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, 1.6, 0, 0], scaleY: [1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.35, 1] }),
				)}
				d="M12 20v-6"
				style={edge(0.5, 0)}
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0, -1, 1, 0], scaleY: [1, 0.88, 1, 1, 1, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.35, 0.5, 0.65, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M19.656 14H22" />
				<path d="M2 14h12" />
				<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
				<path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
