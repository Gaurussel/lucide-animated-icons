import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const merge = pose(
	{ x: [0, 0, 1.8, 0], y: [0, -1.2, 3, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "combine",
	render: (part) => (
		<>
			<motion.g {...part(merge)}>
				<rect height="8" rx="2" width="8" x="2" y="2" />
				<path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
				<path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
			</motion.g>
			<motion.rect {...part(jelly(0.35, 0.7))} height="8" rx="2" style={edge(0.5, 1)} width="8" x="14" y="14" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M10 18H5a3 3 0 0 1-3-3v-1" />
			<motion.path {...part(redraw(0.25, 0.35))} d="m7 21 3-3-3-3" />
		</>
	),
});
