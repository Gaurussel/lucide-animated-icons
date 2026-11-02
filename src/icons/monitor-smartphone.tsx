import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-smartphone",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				height="10"
				rx="2"
				width="6"
				x="16"
				y="12"
			/>
			<motion.g {...part(pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
				<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
				<path d="M10 19v-3.96 3.15" />
				<path d="M7 19h5" />
			</motion.g>
		</>
	),
});
