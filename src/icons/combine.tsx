import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "combine",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}>
				<path d="M10 18H5a3 3 0 0 1-3-3v-1" />
				<path d="m7 21 3-3-3-3" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}>
				<path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
				<path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
			</motion.g>
			<motion.rect
				{...part(pose({ x: [0, -2, -2, 0], y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				height="8"
				rx="2"
				width="8"
				x="14"
				y="14"
			/>
			<motion.rect
				{...part(pose({ x: [0, 2, 2, 0], y: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				height="8"
				rx="2"
				width="8"
				x="2"
				y="2"
			/>
		</>
	),
});
