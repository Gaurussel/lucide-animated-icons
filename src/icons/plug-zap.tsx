import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const insert = pose({ x: [0, -1, 1.5, 0], y: [0, 1, -1.5, 0] }, { duration: 0.75, times: [0, 0.25, 0.55, 1] });
const zap = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.75, times: [0, 0.4, 0.55, 1] });

export default createAnimatedIcon({
	name: "plug-zap",
	render: (part) => (
		<>
			<motion.g {...part(insert)}>
				<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
				<path d="m2 22 3-3" />
				<path d="M7.5 13.5 10 11" />
				<path d="M10.5 16.5 13 14" />
			</motion.g>
			<motion.path {...part(zap)} d="m18 3-4 4h6l-4 4" />
		</>
	),
});
