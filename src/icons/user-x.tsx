import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-x",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="9"
				cy="7"
				r="4"
			/>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, 60, 60, 0], scale: [1, 0.3, 0.3, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.5, 1] },
					),
				)}
				style={centered}
			>
				<line x1="17" x2="22" y1="8" y2="13" />
				<line x1="22" x2="17" y1="8" y2="13" />
			</motion.g>
		</>
	),
});
