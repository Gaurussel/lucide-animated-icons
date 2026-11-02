import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const apart = pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] });
const join = pose({ x: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] });
const bar = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "ligature",
	render: (part) => (
		<>
			<motion.g {...part(apart)}>
				<path d="M8 20V8a4 4 0 0 1 7.464-2" />
				<motion.path {...part(bar)} d="M6 12h4" />
				<path d="M6 20h4" />
			</motion.g>
			<motion.g {...part(join)}>
				<path d="M14 12h2v8" />
				<path d="M14 20h4" />
			</motion.g>
		</>
	),
});
