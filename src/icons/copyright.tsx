import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -40, 360] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const ringOut = pose(
	{ scale: [1, 1, 1.12, 1] },
	{ duration: 0.7, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "copyright",
	render: (part) => (
		<>
			<motion.circle {...part(ringOut)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<motion.path {...part(redraw(0.08, 0.45))} d="M14.83 14.83a4 4 0 1 1 0-5.66" />
			</motion.g>
		</>
	),
});
