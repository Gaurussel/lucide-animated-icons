import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const step = pose(
	{ x: [0, 0.6, -2.4, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);
const follow = pose(
	{ x: [0, 0, -1.8, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "step-back",
	render: (part) => (
		<>
			<motion.line {...part(follow)} x1="18" x2="18" y1="20" y2="4" />
			<motion.polygon {...part(step)} points="14,20 4,12 14,4" />
		</>
	),
});
