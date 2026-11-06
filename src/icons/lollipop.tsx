import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const twirlStick = pose(
	{ rotate: [0, 6, -15, 0] },
	{ duration: 0.75, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, ring] },
);
const swirl = pose(
	{ rotate: [0, 0, 0] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const trace = pose(
	{ pathLength: [1, 1, 0.15, 1] },
	{ duration: 0.75, times: [0, 0.18, 0.34, 1], ease: ["easeInOut", "easeIn", snap] },
);

export default createAnimatedIcon({
	name: "lollipop",
	render: (part) => (
		<motion.g {...part(twirlStick)} style={pivot(21, 21)}>
			<path d="m21 21-4.3-4.3" />
			<circle cx="11" cy="11" r="8" />
			<motion.g {...part(swirl)} style={pivot(11, 11)}>
				<motion.path {...part(trace)} d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />
			</motion.g>
		</motion.g>
	),
});
