import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-round-x",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M2 21a8 8 0 0 1 11.873-7"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="8"
				r="5"
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
				<path d="m17 17 5 5" />
				<path d="m22 17-5 5" />
			</motion.g>
		</>
	),
});
