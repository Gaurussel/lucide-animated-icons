import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const lean = pose({ scaleX: [1, 0.9, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] });
const trace = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.3, 0.45, 1] });

export default createAnimatedIcon({
	name: "infinity",
	render: (part) => (
		<motion.g {...part(lean)} style={centered}>
			<motion.path {...part(trace)} d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
		</motion.g>
	),
});
