import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const strike = pose({ scale: [1, 0.82, 1] }, { duration: 0.68, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-x",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.4, 0.68))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.g {...part(strike)} style={centered}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m15 9-6 6" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m9 9 6 6" />
			</motion.g>
		</>
	),
});
