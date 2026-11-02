import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const step = pose(
	{ x: [0, -1, 4, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);
const follow = pose(
	{ x: [0, 0, 3, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "step-forward",
	render: (part) => (
		<>
			<motion.line {...part(follow)} x1="6" x2="6" y1="4" y2="20" />
			<motion.polygon {...part(step)} points="10,4 20,12 10,20" />
		</>
	),
});
