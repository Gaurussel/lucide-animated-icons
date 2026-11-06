import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, 2, -12, 10, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const bump = pose(
	{ x: [0, 0, -1.2, 0] },
	{ duration: 0.68, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "skip-back",
	render: (part) => (
		<>
			<motion.polygon {...part(dash)} points="19 20 9 12 19 4 19 20" />
			<motion.line {...part(bump)} x1="5" x2="5" y1="19" y2="5" />
		</>
	),
});
