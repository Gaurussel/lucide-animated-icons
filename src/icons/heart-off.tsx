import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const half = (direction: number) =>
	pose(
		{ x: [0, 0, 2 * direction, 0], rotate: [0, 0, 12 * direction, 0] },
		{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "heart-off",
	render: (part) => (
		<>
			<motion.path
				{...part(half(-1))}
				d="M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
				style={pivot(12, 21)}
			/>
			<motion.path
				{...part(half(1))}
				d="M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
				style={pivot(12, 21)}
			/>
			<motion.line {...part(redraw(0.05, 0.25))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
