import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const bend = pose({ x: [0, 2, 0], y: [0, -2, 0] }, { duration: 0.68, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-round-corner",
	render: (part) => (
		<>
			<motion.g {...part(bend)}>
				<motion.path {...part(redraw(0, 0.5))} d="M21 11a8 8 0 0 0-8-8" />
			</motion.g>
			<motion.path
				{...part(jelly(0.35, 0.68))}
				d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
