import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const slam = pose(
	{ y: [0, -2.4, 0.48, 0] },
	{ duration: 0.7, times: [0, 0.25, 0.4, 1], ease: [snap, "easeIn", springy] },
);
const horn = pose(
	{ rotate: [0, 0, -9.6, 0] },
	{ duration: 0.7, times: [0, 0.38, 0.48, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "anvil",
	render: (part) => (
		<>
			<motion.g {...part(slam)}>
				<motion.path {...part(horn)} d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" style={pivot(7, 7)} />
				<path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
				<path d="M9 12v5" />
				<path d="M15 12v5" />
			</motion.g>
			<motion.path
				{...part(jelly(0.4, 0.7))}
				d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
