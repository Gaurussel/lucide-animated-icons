import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const spread = (x: number, y: number) =>
	pose(
		{ x: [0, x, 0], y: [0, y, 0], scale: [1, 0.76, 1], rotate: [0, 27, 0] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "layout-grid",
	render: (part) => (
		<>
			<motion.rect {...part(spread(-2, -2))} height="7" rx="1" style={centered} width="7" x="3" y="3" />
			<motion.rect {...part(spread(2, -2))} height="7" rx="1" style={centered} width="7" x="14" y="3" />
			<motion.rect {...part(spread(2, 2))} height="7" rx="1" style={centered} width="7" x="14" y="14" />
			<motion.rect {...part(spread(-2, 2))} height="7" rx="1" style={centered} width="7" x="3" y="14" />
		</>
	),
});
