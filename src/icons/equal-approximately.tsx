import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "equal-approximately",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ y: [0, -2, -2, 0], x: [0, 0, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			>
				<path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
			</motion.g>
			<motion.g
				{...part(pose({ y: [0, 2, 2, 0], x: [0, 0, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			>
				<path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
			</motion.g>
		</>
	),
});
