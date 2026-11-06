import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const orbit = pose(
	{ rotate: [0, 3.03, 0] },
	{ duration: 0.75, times: [0, 0.16, 1], ease: ["easeInOut", springy], reset: true },
);
const trace = pose(
	{ pathLength: [1, 1, 0.25, 1] },
	{ duration: 0.75, times: [0, 0.16, 0.32, 1], ease: ["easeInOut", "easeIn", snap] },
);

export default createAnimatedIcon({
	name: "moon",
	render: (part) => (
		<motion.g {...part(orbit)} style={pivot(12, 12)}>
			<motion.path {...part(trace)} d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
		</motion.g>
	),
});
