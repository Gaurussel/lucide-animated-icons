import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "screen-share",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 0.95, 1, 1], scaleY: [1, 0.88, 1, 1] },
						{ duration: 0.8, times: [0, 0.15, 0.45, 1] },
					),
				)}
				d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.45, 1] }))}
				d="M8 21h8"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.45, 1] }))}
				d="M12 17v4"
			/>
			<motion.g
				{...part(pose({ x: [0, -2, 4, 0], y: [0, 2, -4, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
			>
				<path d="m17 8 5-5" />
				<path d="M17 3h5v5" />
			</motion.g>
		</>
	),
});
