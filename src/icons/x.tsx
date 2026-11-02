import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const stroke = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "x",
	render: (part) => (
		<motion.g {...part(pose({ scale: [1, 0.85, 1] }, { duration: 0.5, times: [0, 0.4, 1] }))} style={centered}>
			<motion.path {...part(stroke(0))} d="M18 6 6 18" />
			<motion.path {...part(stroke(0.1))} d="m6 6 12 12" />
		</motion.g>
	),
});
