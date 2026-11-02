import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ scaleY: [1, -1, -1, 1] },
	{ duration: 0.75, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const knock = pose(
	{ y: [0, 0, 2.5, 0] },
	{ duration: 0.75, times: [0, 0.26, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "flip-vertical",
	render: (part) => (
		<>
			<motion.path {...part(flip)} d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" style={pivot(12, 12)} />
			<motion.path {...part(knock)} d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
			<motion.g {...part(redraw(0.15, 0.45))}>
				<path d="M4 12H2" />
				<path d="M10 12H8" />
				<path d="M16 12h-2" />
				<path d="M22 12h-2" />
			</motion.g>
		</>
	),
});
