import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, -2, 5, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);
const tip = pose(
	{ rotate: [0, 4, -12, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.46, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "shopping-cart",
	render: (part) => (
		<motion.g {...part(roll)}>
			<circle cx="8" cy="21" r="1" />
			<circle cx="19" cy="21" r="1" />
			<motion.path
				{...part(tip)}
				d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
				style={pivot(8, 21)}
			/>
		</motion.g>
	),
});
