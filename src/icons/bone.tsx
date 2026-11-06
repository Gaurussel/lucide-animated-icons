import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 0.9, -3, 0.48, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.35, 0.5, 1], ease: ["easeInOut", snap, "easeIn", springy] },
);
const spin = pose(
	{ rotate: [0, 0, 0] },
	{ duration: 0.72, times: [0, 0.12, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "bone",
	render: (part) => (
		<motion.g {...part(toss)}>
			<motion.path
				{...part(spin)}
				d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
				style={centered}
			/>
		</motion.g>
	),
});
