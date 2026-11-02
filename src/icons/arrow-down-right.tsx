import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down-right",
	render: (part) => (
		<motion.g
			{...part(pose({ x: [0, -1.5, 2.5, 0], y: [0, -1.5, 2.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
		>
			<path d="m7 7 10 10" />
			<path d="M17 7v10H7" />
		</motion.g>
	),
});
