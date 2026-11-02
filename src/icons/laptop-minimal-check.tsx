import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -5, 0.5, 0], rotate: [0, -10, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "laptop-minimal-check",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<rect height="12" rx="2" width="18" x="3" y="4" />
				<motion.path {...part(redraw(0.3, 0.4))} d="m9 10 2 2 4-4" />
			</motion.g>
			<motion.path {...part(jelly(0.42, 0.7))} d="M2 20h20" style={edge(0.5, 1)} />
		</>
	),
});
