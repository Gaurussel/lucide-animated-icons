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
	name: "flip-vertical-2",
	render: (part) => (
		<>
			<motion.path {...part(flip)} d="m17 3-5 5-5-5h10" style={pivot(12, 12)} />
			<motion.path {...part(knock)} d="m17 21-5-5-5 5h10" />
			<motion.g {...part(redraw(0.15, 0.45))}>
				<path d="M4 12H2" />
				<path d="M10 12H8" />
				<path d="M16 12h-2" />
				<path d="M22 12h-2" />
			</motion.g>
		</>
	),
});
