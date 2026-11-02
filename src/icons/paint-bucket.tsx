import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, snap, springy } from "../helpers.ts";

const tip = pose({ rotate: [0, -25, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const drip = pose(
	{ y: [0, -5, 0], scale: [1, 0, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: ["easeIn", springy] },
);

export default createAnimatedIcon({
	name: "paint-bucket",
	render: (part) => (
		<>
			<motion.g {...part(tip)} style={pivot(10, 20)}>
				<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
				<path d="m5 2 5 5" />
				<path d="M2 13h15" />
			</motion.g>
			<motion.path
				{...part(drip)}
				d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
				style={edge(0.5, 0)}
			/>
		</>
	),
});
