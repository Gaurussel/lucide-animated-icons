import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const sway = pose({ rotate: [0, -8, 6, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const trace = pose({ pathLength: [1, 0, 1] }, { duration: 0.85, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "line-squiggle",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(12, 12)}>
			<motion.path
				{...part(trace)}
				d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"
			/>
		</motion.g>
	),
});
