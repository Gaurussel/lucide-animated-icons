import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const land = (delay: number) =>
	pose(
		{ y: [0, 0, -1.5, 0] },
		{ duration: 0.7, delay, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
	);
const trend = pose(
	{ rotate: [0, 0, -4.8, 0], y: [0, 0, -1.2, 0] },
	{ duration: 0.75, times: [0, 0.45, 0.58, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-no-axes-combined",
	render: (part) => (
		<>
			<motion.g {...part(land(0.08))}>
				<motion.path {...part(redraw(0.08, 0.25))} d="M12 16v5" />
			</motion.g>
			<motion.g {...part(land(0.12))}>
				<motion.path {...part(redraw(0.12, 0.25))} d="M16 14v7" />
			</motion.g>
			<motion.g {...part(land(0.16))}>
				<motion.path {...part(redraw(0.16, 0.25))} d="M20 10v11" />
			</motion.g>
			<motion.g {...part(trend)} style={pivot(2, 15)}>
				<motion.path
					{...part(redraw(0.15, 0.35))}
					d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
				/>
			</motion.g>
			<motion.g {...part(land(0))}>
				<motion.path {...part(redraw(0, 0.25))} d="M4 18v3" />
			</motion.g>
			<motion.g {...part(land(0.04))}>
				<motion.path {...part(redraw(0.04, 0.25))} d="M8 14v7" />
			</motion.g>
		</>
	),
});
