import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bath",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -9, 9, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(12, 19)}
			>
				<motion.path
					{...part(pose({ x: [0, -1, -1, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M10 4 8 6"
				/>
				<path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
			</motion.g>
			<path d="M17 19v2" />
			<motion.path
				{...part(pose({ scaleX: [1, 0.4, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M2 12h20"
				style={centered}
			/>
			<path d="M7 19v2" />
		</>
	),
});
