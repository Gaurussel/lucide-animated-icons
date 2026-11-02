import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const bump = pose({ x: [0, 3, 0], y: [0, 3, 0] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] });
const refuse = pose(
	{ rotate: [0, 0, -30, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "mouse-pointer-ban",
	render: (part) => (
		<>
			<motion.path
				{...part(bump)}
				d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
			/>
			<motion.g {...part(refuse)} style={pivot(16, 16)}>
				<circle cx="16" cy="16" r="6" />
				<path d="m11.8 11.8 8.4 8.4" />
			</motion.g>
		</>
	),
});
