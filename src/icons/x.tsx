import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.89, 1] }, { duration: 0.7, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "x",
	render: (part) => (
		<motion.g {...part(press)} style={centered}>
			<motion.path {...part(redraw(0.05, 0.35))} d="M18 6 6 18" />
			<motion.path {...part(redraw(0.22, 0.35))} d="m6 6 12 12" />
		</motion.g>
	),
});
