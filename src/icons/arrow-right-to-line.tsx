import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-right-to-line",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -2, 3, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.45, 0.6, 1] }))}>
				<path d="M17 12H3" />
				<path d="m11 18 6-6-6-6" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 0, 1.5, 0] }, { duration: 0.7, times: [0, 0.4, 0.55, 1] }))}
				d="M21 5v14"
			/>
		</>
	),
});
