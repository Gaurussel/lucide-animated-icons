import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const tug = pose(
	{ y: [0, 0, -1.8, 0], scale: [1, 1, 1.21, 1] },
	{ duration: 0.75, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, springy] },
);
const reach = pose({ x: [0, 1.2, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-pull-request",
	render: (part) => (
		<>
			<motion.g {...part(reach)}>
				<circle cx="6" cy="6" r="3" />
				<line x1="6" x2="6" y1="9" y2="21" />
			</motion.g>
			<motion.path {...part(redraw(0.05, 0.4))} d="M13 6h3a2 2 0 0 1 2 2v7" />
			<motion.circle {...part(tug)} cx="18" cy="18" r="3" style={centered} />
		</>
	),
});
