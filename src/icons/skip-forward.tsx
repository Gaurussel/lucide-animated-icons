import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, -2, 12, -10, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const bump = pose(
	{ x: [0, 0, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.32, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "skip-forward",
	render: (part) => (
		<>
			<motion.polygon {...part(dash)} points="5 4 15 12 5 20 5 4" />
			<motion.line {...part(bump)} x1="19" x2="19" y1="5" y2="19" />
		</>
	),
});
