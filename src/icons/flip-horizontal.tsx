import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ scaleX: [1, -1, -1, 1] },
	{ duration: 0.75, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const knock = pose(
	{ x: [0, 0, 2.5, 0] },
	{ duration: 0.75, times: [0, 0.26, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "flip-horizontal",
	render: (part) => (
		<>
			<motion.path {...part(flip)} d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" style={pivot(12, 12)} />
			<motion.path {...part(knock)} d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
			<motion.g {...part(redraw(0.15, 0.45))}>
				<path d="M12 20v2" />
				<path d="M12 14v2" />
				<path d="M12 8v2" />
				<path d="M12 2v2" />
			</motion.g>
		</>
	),
});
