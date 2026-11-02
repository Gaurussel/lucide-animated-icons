import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const flip = pose({ scaleX: [1, -1, 1] }, { duration: 0.75, times: [0, 0.35, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "framer",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 12)}>
			<motion.path {...part(redraw(0.05, 0.55))} d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
		</motion.g>
	),
});
