import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const split = (direction: number) =>
	pose(
		{ x: [0, 0, 3 * direction, 0], y: [0, 0, -3 * direction, 0], rotate: [0, 0, -10 * direction, 0] },
		{ duration: 0.7, times: [0, 0.25, 0.42, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "shield-off",
	render: (part) => (
		<>
			<motion.path
				{...part(split(-1))}
				d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
				style={pivot(12, 22)}
			/>
			<motion.path
				{...part(split(1))}
				d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
				style={pivot(12, 2)}
			/>
			<motion.path {...part(redraw(0, 0.4))} d="m2 2 20 20" />
		</>
	),
});
